import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, n as Button, r as Card, t as Brand } from "./brand-BL9AAx4f.mjs";
import { C as Cpu, E as ChevronDown, O as ChartColumn, S as Database, a as TriangleAlert, c as ShieldCheck, d as ScanLine, f as Play, h as Gauge, i as Upload, k as Camera, n as Workflow } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DVOM_nna.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SiteNavbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 w-full glass-nav",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 text-sm text-muted-foreground md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#features",
							className: "transition-all duration-200 hover:text-foreground",
							children: "Features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							className: "transition-all duration-200 hover:text-foreground",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#docs",
							className: "transition-all duration-200 hover:text-foreground",
							children: "Documentation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#faq",
							className: "transition-all duration-200 hover:text-foreground",
							children: "FAQ"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							children: "Login"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							children: "Sign Up"
						})
					})]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-white/[0.06] glass-nav",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground max-w-xs",
						children: "Enterprise AI for traffic enforcement. Detect, verify and report violations in real time."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Product",
					items: [
						"Features",
						"Dashboard",
						"API",
						"Changelog"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Company",
					items: [
						"About",
						"Customers",
						"Careers",
						"Contact"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Legal",
					items: [
						"Privacy",
						"Terms",
						"Security",
						"DPA"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/[0.06]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TrafficVision AI"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built for traffic enforcement teams." })]
			})
		})]
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "mb-3 text-sm font-semibold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2 text-sm text-muted-foreground",
		children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#",
			className: "transition-all duration-200 hover:text-foreground",
			children: i
		}) }, i))
	})] });
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen ambient-glow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Architecture, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsShowcase, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoWorkflow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-grid bg-grid-fade",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Detect every"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "traffic violation"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "in real time, at city scale."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg text-shadow-hero",
					children: "TrafficVision AI analyses live camera feeds and uploaded footage to flag helmet violations, triple riding, illegal parking and signal jumps — with automatic plate recognition and court-ready evidence packs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-2 h-4 w-4" }), "Open Dashboard"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/upload",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-2 h-4 w-4" }), "Try Detection"]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4",
					children: [
						{
							k: "12.8K+",
							v: "Violations / day"
						},
						{
							k: "96.2%",
							v: "OCR success"
						},
						{
							k: "94.7%",
							v: "Detection accuracy"
						},
						{
							k: "180ms",
							v: "Avg. inference"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-xl transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-semibold tracking-tight",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: s.v
						})]
					}, s.v))
				})
			]
		})
	});
}
function Overview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-white/[0.06] bg-white/[0.02]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-8 shadow-[0_12px_48px_rgba(0,0,0,0.5)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: "Product overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-semibold tracking-tight md:text-4xl",
							children: "One platform. Every camera. Every violation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground text-sm leading-relaxed",
							children: "Connect existing CCTV, body-cams or upload recordings. Our vision models run real-time detection, classify vehicle types, run ANPR/OCR on the plate, and create tamper-evident evidence packs that integrate with your enforcement workflow."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						{
							icon: ShieldCheck,
							t: "Compliance-ready",
							d: "Audit logs, role-based access, SOC2-aligned controls."
						},
						{
							icon: Cpu,
							t: "On-prem or cloud",
							d: "Run inference on your edge GPUs or our hosted gateway."
						},
						{
							icon: Camera,
							t: "Multi-camera",
							d: "RTSP, ONVIF and HLS streams. Auto-failover."
						},
						{
							icon: Gauge,
							t: "Fast",
							d: "Sub-200ms detection with batched GPU inference."
						}
					].map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-4 glass-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: d
							})
						]
					}, t))
				})]
			})
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "bg-grid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Capabilities",
				title: "Built for enforcement teams",
				subtitle: "Every detection comes with explainable evidence."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						icon: ShieldCheck,
						t: "Helmet violation",
						d: "Detect helmetless riders & pillions in real time across multi-lane feeds."
					},
					{
						icon: TriangleAlert,
						t: "Triple riding",
						d: "Identify overloaded two-wheelers and flag automatically with confidence scores."
					},
					{
						icon: ScanLine,
						t: "ANPR / OCR",
						d: "Plate recognition tuned for Indian formats with 96%+ success rate."
					},
					{
						icon: Workflow,
						t: "Illegal parking",
						d: "Zone-based parking violations using polygon geofences."
					},
					{
						icon: ChartColumn,
						t: "Analytics",
						d: "Heatmaps, time-of-day trends, repeat-offender clustering."
					},
					{
						icon: Database,
						t: "Evidence vault",
						d: "Annotated images, metadata and chain-of-custody exports."
					}
				].map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-[0_0_24px_-8px_var(--glow-primary)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: d
						})
					]
				}, t))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-white/[0.06] bg-white/[0.02]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "How it works",
				title: "From frame to enforcement in seconds"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-4 md:grid-cols-4",
				children: [
					{
						n: "01",
						t: "Ingest",
						d: "Pull RTSP/ONVIF feeds or upload footage. Auto-thumbnails and chunked decode."
					},
					{
						n: "02",
						t: "Detect",
						d: "YOLO-class models classify vehicles, riders and violations frame by frame."
					},
					{
						n: "03",
						t: "Verify",
						d: "ANPR + human-in-the-loop review queue. Evidence pack auto-generated."
					},
					{
						n: "04",
						t: "Notify",
						d: "Push to enforcement systems, send SMS/notice to violators, export to court."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-white/[0.08] bg-card/50 p-6 backdrop-blur-xl transition-all duration-200 hover:border-white/[0.12]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-mono text-primary",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-lg font-semibold",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.d
						})
					]
				}, s.n))
			})]
		})
	});
}
function Architecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-grid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Architecture",
					title: "Edge inference. Central analytics."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						{
							t: "Edge nodes",
							d: "GPU workers running optimized vision models on-site."
						},
						{
							t: "Streaming gateway",
							d: "WebSocket pipeline for live detections + low-latency UI updates."
						},
						{
							t: "Analytics core",
							d: "FastAPI + Postgres + object storage for evidence and metrics."
						}
					].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 glass-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: b.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: b.d
						})]
					}, b.t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-6 overflow-x-auto rounded-2xl border border-white/[0.08] bg-card/50 p-6 text-xs leading-relaxed text-muted-foreground backdrop-blur-xl",
					children: `  Cameras ──▶ Edge GPU ──▶ Detection ──▶ ANPR/OCR ──▶ Evidence Pack
                  │             │             │             │
                  ▼             ▼             ▼             ▼
              WS Gateway   Postgres      Object Store   Notifications
                  └────────────────  Analytics Dashboard  ───────────┘`
				})
			]
		})
	});
}
function AnalyticsShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-white/[0.06] bg-white/[0.02]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Analytics",
					title: "Operational insight, not just dashboards",
					align: "left"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Time-of-day trends, hotspot heatmaps, repeat-offender clustering and accuracy monitoring — all in one place."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/analytics",
						children: "Explore analytics"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						{
							k: "12,847",
							v: "Total violations"
						},
						{
							k: "94.7%",
							v: "Accuracy"
						},
						{
							k: "96.2%",
							v: "OCR success"
						},
						{
							k: "+18%",
							v: "Week over week"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-semibold",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: s.v
						})]
					}, s.v))
				})
			})]
		})
	});
}
function DemoWorkflow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-grid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Demo",
				title: "See it end-to-end"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [
					{
						t: "1. Upload footage",
						d: "Drag a clip or connect a camera.",
						to: "/upload"
					},
					{
						t: "2. Watch live detection",
						d: "Bounding boxes and ANPR appear as we process.",
						to: "/upload"
					},
					{
						t: "3. Review & export",
						d: "Verify, file and export tamper-evident evidence.",
						to: "/violations"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6 glass-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-semibold",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.d
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "link",
							className: "mt-3 px-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: s.to,
								children: "Try it →"
							})
						})
					]
				}, s.t))
			})]
		})
	});
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "border-t border-white/[0.06] bg-white/[0.02]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "FAQ",
				title: "Frequently asked questions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "w-full",
				children: [
					{
						q: "Does it work with existing CCTV?",
						a: "Yes. Any RTSP or ONVIF stream works. We also support HLS and direct uploads."
					},
					{
						q: "Can it run on-premise?",
						a: "Edge nodes run on your hardware. Only metrics and aggregated stats sync to the cloud."
					},
					{
						q: "How accurate is the ANPR?",
						a: "Typically 95–97% on Indian plates with motion-blur tolerant decoding."
					},
					{
						q: "Is the data tamper-evident?",
						a: "Each evidence pack is hashed and signed with chain-of-custody metadata."
					}
				].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `i${i}`,
					className: "border-white/[0.06]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		})
	});
}
function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mb-10 ${align === "center" ? "text-center" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-widest text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-semibold tracking-tight md:text-4xl text-shadow-hero",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-2 max-w-2xl text-muted-foreground text-shadow-hero",
				children: subtitle
			})
		]
	});
}
//#endregion
export { Landing as component };
