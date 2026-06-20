import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn, n as Button, t as Brand } from "./brand-BL9AAx4f.mjs";
import { a as FiGrid, c as FiSettings, i as FiFileText, l as FiUploadCloud, n as FiBell, o as FiLogOut, r as FiCheckSquare, s as FiMenu, t as FiBarChart2 } from "../_libs/react-icons.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-D1xTcLs2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-card/70 backdrop-blur-2xl border-white/[0.08] p-6 shadow-[0_12px_48px_oklch(0_0_0/0.4)] transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var nav = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: FiGrid
	},
	{
		to: "/upload",
		label: "Upload Detection",
		icon: FiUploadCloud
	},
	{
		to: "/violations",
		label: "Violations",
		icon: FiCheckSquare
	},
	{
		to: "/analytics",
		label: "Analytics",
		icon: FiBarChart2
	},
	{
		to: "/reports",
		label: "Reports",
		icon: FiFileText
	},
	{
		to: "/settings",
		label: "Settings",
		icon: FiSettings
	}
];
function AppShell({ title, subtitle, children, actions }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-grid ambient-glow",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-4 hidden h-[calc(100vh-2rem)] w-64 shrink-0 flex-col glass-panel-dense lg:flex m-4 mr-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-6 py-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 space-y-1.5 px-3 py-2",
						children: nav.map(({ to, label, icon: Icon }) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to,
								className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 border border-transparent", pathname === to || pathname.startsWith(to + "/") ? "bg-primary/20 text-foreground border-primary/35 shadow-[0_0_16px_-4px_var(--glow-primary)]" : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground hover:border-white/[0.04]"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
							}, to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-white/[0.06] p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground border border-transparent hover:border-white/[0.04]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiLogOut, { className: "h-4 w-4" }), " Sign out"]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 flex-1 flex flex-col p-4 lg:p-6 space-y-4 lg:space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl rounded-2xl px-6 py-4 shadow-[0_8px_32px_oklch(0_0_0/0.25)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "h-9 w-9 lg:hidden rounded-xl border border-transparent hover:border-white/[0.06] hover:bg-white/[0.04]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiMenu, { className: "h-5 w-5" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
							side: "left",
							className: "w-72 p-0 border-r border-white/[0.12] bg-zinc-950/95 backdrop-blur-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-6 py-5 border-b border-white/[0.06]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
										className: "flex-1 space-y-1.5 px-3 py-4",
										children: nav.map(({ to, label, icon: Icon }) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to,
												className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 border border-transparent", pathname === to || pathname.startsWith(to + "/") ? "bg-primary/20 text-foreground border-primary/35 shadow-[0_0_16px_-4px_var(--glow-primary)]" : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground hover:border-white/[0.04]"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
											}, to);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-white/[0.06] p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/",
											className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground border border-transparent hover:border-white/[0.04]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiLogOut, { className: "h-4 w-4" }), " Sign out"]
										})
									})
								]
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "truncate text-lg font-semibold tracking-tight",
								children: title
							}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground mt-0.5",
								children: subtitle
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							actions,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								className: "relative h-9 w-9 rounded-xl border border-transparent hover:border-white/[0.06] hover:bg-white/[0.04]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiBell, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-accent" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-xs font-semibold text-primary-foreground shadow-[0_0_16px_-4px_var(--glow-primary)] border border-white/[0.12]",
								children: "OD"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 min-h-0",
					children
				})]
			})]
		})
	});
}
//#endregion
export { AppShell as t };
