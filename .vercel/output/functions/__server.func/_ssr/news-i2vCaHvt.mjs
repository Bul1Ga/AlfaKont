import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as companyById } from "./companies-BfoJuVh_.mjs";
import { t as news } from "./news-D24KZI3V.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { r as SOURCE_KIND, s as formatWhen } from "./format-ux0FY9OF.mjs";
import { r as rankedNews } from "./engine-BCfR1Lim.mjs";
import { r as Score } from "./marks-YX0rBDTe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-i2vCaHvt.js
var import_jsx_runtime = require_jsx_runtime();
function NewsCard({ item, hit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/desk/news/$id",
		params: { id: item.id },
		className: "flex gap-4 rounded-lg border border-border bg-surface p-4 shadow-card transition-colors duration-150 hover:border-fg/20 md:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Score, {
			value: hit.score,
			size: "sm"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 text-xs text-subtle",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: item.source
						}),
						SOURCE_KIND[item.sourceKind] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SOURCE_KIND[item.sourceKind] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatWhen(item.publishedAt) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1.5 font-display text-base font-medium leading-snug",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm leading-relaxed text-muted",
					children: item.lede
				}),
				hit.reasons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: hit.reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-xs bg-surface-2 px-2 py-0.5 text-xs text-subtle",
						children: r.label
					}, r.label))
				}) : null
			]
		})]
	});
}
function NewsPage() {
	const companyId = useDesk((s) => s.companyId);
	const company = companyId ? companyById[companyId] : void 0;
	if (!company) return null;
	const ranked = rankedNews(news, company);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-medium tracking-tight",
			children: "Лента"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 max-w-xl text-sm text-muted",
			children: [
				"Одна и та же лента Альфа-Аналитики и рынка. Релевантность считается заново для",
				" ",
				company.short,
				": теги, чувствительности, тикер, география."
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3",
		children: ranked.map(({ item, hit }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsCard, {
			item,
			hit
		}, item.id))
	})] });
}
//#endregion
export { NewsPage as component };
