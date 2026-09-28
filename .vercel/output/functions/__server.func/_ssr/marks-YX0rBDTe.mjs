import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn, i as TYPE_LABEL, n as IMPACT_LABEL, t as HORIZON_LABEL } from "./format-ux0FY9OF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/marks-YX0rBDTe.js
var import_jsx_runtime = require_jsx_runtime();
function TypeMark({ type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center px-2 text-xs font-medium rounded-xs", type === "risk" ? "text-risk bg-risk/10" : type === "opportunity" ? "text-opportunity bg-opportunity/10" : "text-event bg-event/10"),
		children: TYPE_LABEL[type]
	});
}
function ImpactMark({ impact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-xs text-muted",
		children: ["Влияние · ", IMPACT_LABEL[impact]]
	});
}
function HorizonMark({ horizon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs text-muted",
		children: HORIZON_LABEL[horizon]
	});
}
function Score({ value, size = "md" }) {
	const color = value >= 80 ? "var(--color-accent)" : value >= 55 ? "var(--color-event)" : "var(--color-subtle)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("score-ring grid place-items-center rounded-full p-0.5", size === "sm" ? "size-9 text-xs" : "size-12 text-sm"),
		style: {
			["--ring-color"]: color,
			["--ring-pct"]: `${value}%`
		},
		"aria-label": `Релевантность ${value}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid size-full place-items-center rounded-full bg-surface font-medium tabular-nums",
			children: value
		})
	});
}
//#endregion
export { TypeMark as i, ImpactMark as n, Score as r, HorizonMark as t };
