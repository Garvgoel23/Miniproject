import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Button, r as Card } from "./brand-BL9AAx4f.mjs";
import { _ as FileSpreadsheet, g as FileText, y as FileDown } from "../_libs/lucide-react.mjs";
import { t as AppShell } from "./app-shell-D1xTcLs2.mjs";
import { n as stats, t as api } from "./api-Cxpha35L.mjs";
import { t as Input } from "./input-DWsCwGXg.mjs";
import { t as Label } from "./label-CHbwpp8c.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-COIp7ZHC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reports() {
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const [from, setFrom] = (0, import_react.useState)((/* @__PURE__ */ new Date(Date.now() - 30 * 86400 * 1e3)).toISOString().slice(0, 10));
	const [to, setTo] = (0, import_react.useState)(today);
	async function gen(format) {
		const r = await api.generateReport({
			from,
			to,
			format
		});
		toast.success(`Report ready: ${r.filename}`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		title: "Reports",
		subtitle: "Generate violation and performance reports",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					{
						k: stats.totalViolations.toLocaleString(),
						v: "Violations in period"
					},
					{
						k: "92",
						v: "Cameras reporting"
					},
					{
						k: `${(stats.detectionAccuracy * 100).toFixed(1)}%`,
						v: "Accuracy"
					},
					{
						k: `${(stats.ocrSuccessRate * 100).toFixed(1)}%`,
						v: "OCR success"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-semibold tracking-tight",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-muted-foreground",
						children: s.v
					})]
				}, s.v))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-6 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold",
						children: "Generate report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Pick a date range and export format."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-3 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "from",
									children: "From"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "from",
									type: "date",
									value: from,
									onChange: (e) => setFrom(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "to",
									children: "To"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "to",
									type: "date",
									value: to,
									onChange: (e) => setTo(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => gen("csv"),
									variant: "outline",
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "mr-2 h-4 w-4" }), "Export CSV"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => gen("pdf"),
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "mr-2 h-4 w-4" }), "Export PDF"]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-4 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: "Recent reports"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 divide-y divide-white/[0.06] text-sm",
					children: [
						"October-2026-summary.pdf",
						"Helmet-Q3.csv",
						"Hi-Tec-City-weekly.pdf"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "mr-2 h-4 w-4" }), "Download"]
						})]
					}, f))
				})]
			})
		]
	});
}
//#endregion
export { Reports as component };
