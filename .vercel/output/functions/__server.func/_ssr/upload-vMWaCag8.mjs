import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, n as Button, r as Card } from "./brand-BL9AAx4f.mjs";
import { p as Image, t as X, v as FilePlay, w as CloudUpload } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D1xTcLs2.mjs";
import { t as Badge } from "./badge-BNMBOKMT.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/upload-vMWaCag8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
var WS_URL = "wss://example.com/ws";
function connectDetection(onEvent) {
	{
		let p = 0;
		const labels = [
			"Helmet missing",
			"Triple riding",
			"Plate detected",
			"Signal jump"
		];
		const id = setInterval(() => {
			p += 8 + Math.random() * 10;
			if (p < 100) {
				onEvent({
					type: "progress",
					progress: Math.min(99, p),
					message: "Analyzing frame…"
				});
				if (Math.random() > .4) onEvent({
					type: "detection",
					label: labels[Math.floor(Math.random() * labels.length)],
					confidence: Math.round((.7 + Math.random() * .29) * 100) / 100,
					bbox: [
						Math.random() * .4,
						Math.random() * .4,
						.2 + Math.random() * .3,
						.2 + Math.random() * .3
					]
				});
			} else {
				onEvent({
					type: "progress",
					progress: 100,
					message: "Done"
				});
				onEvent({
					type: "complete",
					total: 6 + Math.floor(Math.random() * 12)
				});
				clearInterval(id);
			}
		}, 600);
		return () => clearInterval(id);
	}
	const ws = new WebSocket(WS_URL);
	ws.onmessage = (m) => {
		try {
			onEvent(JSON.parse(m.data));
		} catch {}
	};
	return () => ws.close();
}
function Upload() {
	const [file, setFile] = (0, import_react.useState)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [detections, setDetections] = (0, import_react.useState)([]);
	const inputRef = (0, import_react.useRef)(null);
	const stopRef = (0, import_react.useRef)(null);
	function onPick(f) {
		setFile(f);
		setDetections([]);
		setProgress(0);
		setStatus("idle");
	}
	function start() {
		if (!file) return;
		setStatus("processing");
		setDetections([]);
		setProgress(0);
		stopRef.current?.();
		stopRef.current = connectDetection((e) => {
			if (e.type === "progress") setProgress(e.progress);
			else if (e.type === "detection") setDetections((d) => [...d, {
				label: e.label,
				confidence: e.confidence
			}]);
			else if (e.type === "complete") setStatus("done");
		});
	}
	(0, import_react.useEffect)(() => () => stopRef.current?.(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: "Upload & detect",
		subtitle: "Run detection on images or video. Live updates over WebSocket.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onDragOver: (e) => e.preventDefault(),
						onDrop: (e) => {
							e.preventDefault();
							onPick(e.dataTransfer.files?.[0] ?? null);
						},
						className: "flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] p-10 text-center transition-colors hover:border-primary/40 hover:bg-white/[0.06]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-10 w-10 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold",
								children: "Drag & drop a file here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "PNG, JPG, MP4 — up to 500MB"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: inputRef,
								type: "file",
								hidden: true,
								accept: "image/*,video/*",
								onChange: (e) => onPick(e.target.files?.[0] ?? null)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => inputRef.current?.click(),
								variant: "outline",
								size: "sm",
								className: "mt-4",
								children: "Browse files"
							})
						]
					}),
					file && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.04] p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [file.type.startsWith("video") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlay, { className: "h-5 w-5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: file.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [(file.size / 1024 / 1024).toFixed(1), " MB"]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: start,
								disabled: status === "processing",
								size: "sm",
								children: status === "processing" ? "Processing…" : "Start detection"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => onPick(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						})]
					}),
					status !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: status === "done" ? "Detection complete" : "Live processing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(progress), "%"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: progress })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Live detections"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Streamed via WebSocket"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 max-h-[420px] space-y-2 overflow-auto pr-1",
						children: [detections.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted-foreground",
							children: "Detections will appear here in real time."
						}), detections.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								children: [(d.confidence * 100).toFixed(0), "%"]
							})]
						}, i))]
					})
				]
			})]
		})
	});
}
//#endregion
export { Upload as component };
