import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, i as buttonVariants, n as Button, r as Card } from "./brand-BL9AAx4f.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Route$10 } from "./evidence._id-DdQ6QlfB.mjs";
import { n as Route$11 } from "./login-C8LxPyOS.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cm--VRZ6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-DB_7wHap.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background bg-grid bg-grid-fade ambient-glow px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-8 text-center shadow-[0_12px_48px_oklch(0_0_0/0.4),0_0_80px_-20px_var(--glow-primary)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-7xl font-bold text-foreground",
						children: "404"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-xl font-semibold text-foreground",
						children: "Page not found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "The page you're looking for doesn't exist or has been moved."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: cn(buttonVariants({ variant: "default" }), "w-full"),
							children: "Go home"
						})
					})
				]
			})
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background bg-grid bg-grid-fade ambient-glow px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-8 text-center shadow-[0_12px_48px_oklch(0_0_0/0.4),0_0_80px_-20px_var(--glow-primary)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-xl font-semibold tracking-tight text-foreground",
						children: "This page didn't load"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Something went wrong on our end. You can try refreshing or head back home."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => {
								router.invalidate();
								reset();
							},
							variant: "default",
							className: "w-full",
							children: "Try again"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: cn(buttonVariants({ variant: "outline" }), "w-full"),
							children: "Go home"
						})]
					})
				]
			})
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TrafficVision AI — Intelligent Traffic Violation Detection" },
			{
				name: "description",
				content: "Enterprise AI platform for real-time traffic violation detection: helmet, triple-riding, illegal parking, ANPR/OCR — all with live analytics."
			},
			{
				property: "og:title",
				content: "TrafficVision AI — Intelligent Traffic Violation Detection"
			},
			{
				property: "og:description",
				content: "Enterprise AI platform for real-time traffic violation detection: helmet, triple-riding, illegal parking, ANPR/OCR — all with live analytics."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "TrafficVision AI — Intelligent Traffic Violation Detection"
			},
			{
				name: "twitter:description",
				content: "Enterprise AI platform for real-time traffic violation detection: helmet, triple-riding, illegal parking, ANPR/OCR — all with live analytics."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/676cddda-c775-4b9c-9667-245d7b36a63b/id-preview-f4d66376--37b740de-2b53-4275-92cf-64161b51485c.lovable.app-1781799676248.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/676cddda-c775-4b9c-9667-245d7b36a63b/id-preview-f4d66376--37b740de-2b53-4275-92cf-64161b51485c.lovable.app-1781799676248.png"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			theme: "dark",
			position: "top-right"
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./violations-Cw7cutN7.mjs");
var Route$8 = createFileRoute("/violations")({
	head: () => ({ meta: [{ title: "Violations — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./upload-vMWaCag8.mjs");
var Route$7 = createFileRoute("/upload")({
	head: () => ({ meta: [{ title: "Upload detection — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./settings-DMQPBZT8.mjs");
var Route$6 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./reports-COIp7ZHC.mjs");
var Route$5 = createFileRoute("/reports")({
	head: () => ({ meta: [{ title: "Reports — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./register-B-iJBu93.mjs");
var Route$4 = createFileRoute("/register")({
	head: () => ({ meta: [{ title: "Create account — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./forgot-password-BF1P2956.mjs");
var Route$3 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [{ title: "Forgot password — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./dashboard-DkJ33fdG.mjs");
var Route$2 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./analytics-CY4XolqR.mjs");
var Route$1 = createFileRoute("/analytics")({
	head: () => ({ meta: [{ title: "Analytics — TrafficVision AI" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DVOM_nna.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "TrafficVision AI — Real-time traffic violation detection" },
		{
			name: "description",
			content: "Detect helmet violations, triple riding, illegal parking and more with AI. ANPR, live analytics, and enterprise-grade reporting."
		},
		{
			property: "og:title",
			content: "TrafficVision AI"
		},
		{
			property: "og:description",
			content: "AI-powered traffic violation detection platform with real-time analytics."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ViolationsRoute = Route$8.update({
	id: "/violations",
	path: "/violations",
	getParentRoute: () => Route$9
});
var UploadRoute = Route$7.update({
	id: "/upload",
	path: "/upload",
	getParentRoute: () => Route$9
});
var SettingsRoute = Route$6.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$9
});
var ReportsRoute = Route$5.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => Route$9
});
var RegisterRoute = Route$4.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$9
});
var LoginRoute = Route$11.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$9
});
var ForgotPasswordRoute = Route$3.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$9
});
var DashboardRoute = Route$2.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$9
});
var AnalyticsRoute = Route$1.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AnalyticsRoute,
	DashboardRoute,
	ForgotPasswordRoute,
	LoginRoute,
	RegisterRoute,
	ReportsRoute,
	SettingsRoute,
	UploadRoute,
	ViolationsRoute,
	EvidenceIdRoute: Route$10.update({
		id: "/evidence/$id",
		path: "/evidence/$id",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
