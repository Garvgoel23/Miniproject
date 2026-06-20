import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Card, t as Brand } from "./brand-BL9AAx4f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-C8LxPyOS.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./login-BnmZlg95.mjs");
var Route = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function AuthLayout({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background bg-grid bg-grid-fade ambient-glow px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-8 shadow-[0_12px_48px_oklch(0_0_0/0.4),0_0_80px_-20px_var(--glow-primary)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-semibold tracking-tight",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children
					})
				]
			})]
		})
	});
}
//#endregion
export { Route as n, AuthLayout as t };
