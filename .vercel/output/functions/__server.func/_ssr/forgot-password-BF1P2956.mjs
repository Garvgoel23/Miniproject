import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Button } from "./brand-BL9AAx4f.mjs";
import { t as api } from "./api-Cxpha35L.mjs";
import { t as AuthLayout } from "./login-C8LxPyOS.mjs";
import { t as Input } from "./input-DWsCwGXg.mjs";
import { t as Label } from "./label-CHbwpp8c.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-BF1P2956.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Forgot() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		title: "Reset your password",
		subtitle: "We'll send a reset link to your inbox.",
		children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"If an account exists for ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: email
					}),
					", a reset link is on its way."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					children: "Back to login"
				})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-4",
			onSubmit: async (e) => {
				e.preventDefault();
				await api.forgotPassword(email);
				toast.success("Reset link sent");
				setSent(true);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "e",
					children: "Work email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "e",
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					required: true
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "w-full",
				type: "submit",
				children: "Send reset link"
			})]
		})
	});
}
//#endregion
export { Forgot as component };
