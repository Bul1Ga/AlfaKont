import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as newsById } from "./news-D24KZI3V.mjs";
import { a as cn } from "./format-ux0FY9OF.mjs";
import { d as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as TypeMark, r as Score } from "./marks-YX0rBDTe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insight-card-DxZ95Pvi.js
var import_jsx_runtime = require_jsx_runtime();
function InsightCard({ insight, featured = false }) {
	const newsItem = newsById[insight.newsId];
	const stripe = insight.type === "risk" ? "bg-risk" : insight.type === "opportunity" ? "bg-opportunity" : "bg-event";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/desk/insight/$id",
		params: { id: insight.id },
		className: cn("group relative block overflow-hidden rounded-lg bg-surface border border-border shadow-card transition-colors duration-150 hover:border-fg/20", featured ? "p-6 md:p-8" : "p-5"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute inset-y-0 left-0 w-0.5", stripe) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeMark, { type: insight.type }), featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-subtle uppercase tracking-wider",
						children: "Главный сигнал"
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Score, {
					value: insight.relevance,
					size: featured ? "md" : "sm"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("mt-4 font-display font-medium leading-snug text-fg", featured ? "text-xl md:text-2xl" : "text-base md:text-lg"),
				children: insight.headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-muted leading-relaxed", featured ? "text-sm md:text-base" : "text-sm line-clamp-3"),
				children: insight.thesis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-subtle",
				children: [
					newsItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: newsItem.source }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Горизонт · ", insight.horizon === "now" ? "сейчас" : insight.horizon === "1-3m" ? "1–3 мес." : "6–12 мес."] }),
					insight.products[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Продукт · ", insight.products[0].product] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto inline-flex items-center gap-1 text-fg/80 group-hover:text-fg",
						children: ["Разбор", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})
				]
			})
		]
	});
}
//#endregion
export { InsightCard as t };
