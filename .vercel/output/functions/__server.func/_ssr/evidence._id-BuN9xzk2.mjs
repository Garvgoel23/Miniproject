import { M as notFound, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Button, r as Card } from "./brand-BL9AAx4f.mjs";
import { j as ArrowLeft, x as Download } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D1xTcLs2.mjs";
import { t as api } from "./api-Cxpha35L.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as Route } from "./evidence._id-DdQ6QlfB.mjs";
import { t as Badge } from "./badge-BNMBOKMT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/evidence._id-BuN9xzk2.js
var import_jsx_runtime = require_jsx_runtime();
function Evidence() {
	const { id } = Route.useParams();
	const { data: v, isLoading } = useQuery({
		queryKey: ["violation", id],
		queryFn: () => api.getViolation(id)
	});
	if (!isLoading && !v) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		title: `Evidence ${id}`,
		subtitle: "Annotated detection, OCR results and metadata",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "ghost",
			size: "sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/violations",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 h-4 w-4" }), "Download evidence"]
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-4 lg:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-background ring-1 ring-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.3_0.05_260)_0%,transparent_60%)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-[18%] top-[28%] h-[40%] w-[32%] rounded-md border-2 border-primary/80 shadow-[0_0_30px_oklch(0.65_0.21_255/0.5)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-6 left-0 rounded bg-primary px-2 py-0.5 text-xs font-mono text-primary-foreground",
								children: "helmet · 0.93"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-[12%] bottom-[16%] h-[22%] w-[26%] rounded-md border-2 border-accent/80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute -top-6 left-0 rounded bg-accent px-2 py-0.5 text-xs font-mono text-accent-foreground",
								children: ["plate · ", v?.plate ?? "—"]
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Violation details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Type",
									v: v?.type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Vehicle",
									v: v?.vehicleClass
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Plate",
									v: v?.plate,
									mono: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Confidence",
									v: v ? `${(v.confidence * 100).toFixed(0)}%` : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Location",
									v: v?.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Status",
									v: v?.status ?? "—"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "OCR results"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-lg border border-white/[0.08] bg-white/[0.04] p-3 font-mono text-sm backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v?.plate ?? "—" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									children: "96.4%"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground",
								children: "Recognized via ANPR pipeline · 2 candidates rejected"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Metadata"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Captured",
									v: v ? new Date(v.timestamp).toLocaleString() : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Camera",
									v: "CAM-08 · Hi-Tec City"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Model",
									v: "tv-yolov8x v2.4",
									mono: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									k: "Hash",
									v: "0xa3f1…b29d",
									mono: true
								})
							]
						})]
					})
				]
			})]
		})
	});
}
function Row({ k, v, mono }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs uppercase tracking-wider text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: mono ? "font-mono" : "",
			children: v ?? "—"
		})]
	});
}
//#endregion
export { Evidence as component };
