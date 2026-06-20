import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, FileVideo, Image as ImageIcon, X, AlertTriangle, ScanEye, Timer, Layers } from "lucide-react";
import { useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "@/services/api";
import type { RawDetection, AnalysisResultWithDetections } from "@/services/api";
import { toast } from "sonner";
import type { Violation } from "@/lib/mockData";

export const Route = createFileRoute("/upload")({
  head: () => ({ meta: [{ title: "Upload detection — TrafficVision AI" }] }),
  component: Upload,
});

/** Friendly label for raw class names like "yellow_light" → "Yellow light" */
function formatClassName(name: string): string {
  return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Color mapping for detection severity / confidence tiers */
function confidenceTier(conf: number) {
  if (conf >= 0.8) return { label: "HIGH", color: "text-red-400", bg: "bg-red-500/15", ring: "ring-red-500/30" };
  if (conf >= 0.5) return { label: "MED", color: "text-amber-400", bg: "bg-amber-500/15", ring: "ring-amber-500/30" };
  return { label: "LOW", color: "text-emerald-400", bg: "bg-emerald-500/15", ring: "ring-emerald-500/30" };
}

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [result, setResult] = useState<AnalysisResultWithDetections | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  function onPick(f: File | null) {
    setFile(f);
    setResult(null);
    setProgress(0);
    setStatus("idle");
    setError(null);
  }

  async function start() {
    if (!file) return;
    setStatus("processing");
    setResult(null);
    setProgress(0);
    setError(null);

    try {
      const isVideo = file.type.startsWith("video");
      const analysisResult = isVideo
        ? await api.analyzeVideo(file, setProgress)
        : await api.analyzeImage(file, setProgress);

      setResult(analysisResult);
      setStatus("done");
      await queryClient.invalidateQueries({ queryKey: ["violations"] });
      await queryClient.invalidateQueries({ queryKey: ["stats"] });
      await queryClient.invalidateQueries({ queryKey: ["analytics"] });

      if (analysisResult.violations.length === 0) {
        toast.info("Analysis complete — no violations detected.");
      } else {
        toast.success(`Found ${analysisResult.violations.length} violation${analysisResult.violations.length === 1 ? "" : "s"}.`);
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Analysis failed";
      setError(msg);
      setStatus("error");
      toast.error(msg);
    }
  }

  const violations = result?.violations ?? [];
  const detections = result?.detections ?? [];

  return (
    <AppShell title="Upload & detect" subtitle="Run detection on images or video. Live updates over WebSocket.">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* ── Left: Upload + Results ── */}
        <div className="space-y-4 lg:col-span-2">
          <Card className="p-6">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                onPick(e.dataTransfer.files?.[0] ?? null);
              }}
              className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] p-10 text-center transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
            >
              <UploadCloud className="h-10 w-10 text-primary" />
              <p className="mt-3 text-sm font-semibold">Drag & drop a file here</p>
              <p className="text-xs text-muted-foreground">PNG, JPG, MP4 — up to 500MB</p>
              <input ref={inputRef} type="file" hidden accept="image/*,video/*" onChange={(e) => onPick(e.target.files?.[0] ?? null)} />
              <Button onClick={() => inputRef.current?.click()} variant="outline" size="sm" className="mt-4">
                Browse files
              </Button>
            </div>

            {file && (
              <div className="mt-5 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.04] p-3">
                <div className="flex items-center gap-3">
                  {file.type.startsWith("video") ? (
                    <FileVideo className="h-5 w-5 text-primary" />
                  ) : (
                    <ImageIcon className="h-5 w-5 text-primary" />
                  )}
                  <div>
                    <p className="text-sm">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={start} disabled={status === "processing"} size="sm">
                    {status === "processing" ? "Processing…" : "Start detection"}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => onPick(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {status !== "idle" && (
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {status === "done"
                      ? "Detection complete"
                      : status === "error"
                        ? "Detection failed"
                        : "Analyzing with backend…"}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} />
                {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
              </div>
            )}

            {status === "done" && violations.length > 0 && (
              <div className="mt-4 flex gap-2">
                <Button size="sm" onClick={() => navigate({ to: "/violations" })}>
                  View violations list
                </Button>
                <Button size="sm" variant="outline" onClick={() => navigate({ to: "/dashboard" })}>
                  Open dashboard
                </Button>
              </div>
            )}
          </Card>

          {/* ── Violations Results Card ── */}
          {status === "done" && (
            <Card className="p-5">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <h3 className="text-sm font-semibold">
                  Violations detected
                  <Badge variant="secondary" className="ml-2">{violations.length}</Badge>
                </h3>
                {result?.processingTimeMs != null && (
                  <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                    <Timer className="h-3 w-3" />
                    {(result.processingTimeMs / 1000).toFixed(2)}s
                  </span>
                )}
              </div>

              {violations.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">No violations found in this file.</p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {violations.map((v) => (
                    <li
                      key={v.id}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.04] p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{v.type}</span>
                          <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${
                            v.severity === "HIGH"
                              ? "bg-red-500/15 text-red-400 ring-red-500/30"
                              : v.severity === "MEDIUM"
                                ? "bg-amber-500/15 text-amber-400 ring-amber-500/30"
                                : "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30"
                          }`}>
                            {v.severity}
                          </span>
                        </div>
                        <Badge variant="secondary">{(v.confidence * 100).toFixed(1)}%</Badge>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span>Vehicle: <span className="text-foreground">{v.vehicleClass}</span></span>
                        <span>Plate: <span className="font-mono text-foreground">{v.plate}</span></span>
                        {v.backendType && (
                          <span>Backend type: <span className="font-mono text-foreground">{v.backendType}</span></span>
                        )}
                        {v.bbox && (
                          <span>BBox: <span className="font-mono text-foreground">[{v.bbox.map((n) => n.toFixed(1)).join(", ")}]</span></span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* ── Annotated image preview ── */}
              {result?.annotatedImageUrl && (
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">Annotated output</p>
                  <div className="overflow-hidden rounded-xl border border-white/[0.08]">
                    <img src={result.annotatedImageUrl} alt="Annotated detection result" className="w-full object-contain" />
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>

        {/* ── Right sidebar: Raw model detections ── */}
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <ScanEye className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">Model detections</h3>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            All raw YOLO detections from the model
          </p>

          {status === "done" && detections.length > 0 && (
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Layers className="h-3 w-3" />
              <span>{detections.length} objects detected</span>
            </div>
          )}

          <ul className="mt-4 max-h-[520px] space-y-2 overflow-auto pr-1">
            {status !== "done" && (
              <li className="text-sm text-muted-foreground">
                {status === "processing" ? "Waiting for backend response…" : "Detections will appear here after analysis."}
              </li>
            )}

            {status === "done" && detections.length === 0 && (
              <li className="text-sm text-muted-foreground">No raw detections returned by the model.</li>
            )}

            {detections.map((d, i) => {
              const tier = confidenceTier(d.confidence);
              return (
                <li
                  key={`det-${i}`}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2 text-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{formatClassName(d.class_name)}</span>
                      <span className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-semibold ring-1 ${tier.bg} ${tier.color} ${tier.ring}`}>
                        {tier.label}
                      </span>
                    </div>
                    <Badge variant="secondary">{(d.confidence * 100).toFixed(0)}%</Badge>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>class_id: <span className="font-mono text-foreground">{d.class_id}</span></span>
                    <span className="font-mono">[{d.bbox.map((n) => n.toFixed(0)).join(", ")}]</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
