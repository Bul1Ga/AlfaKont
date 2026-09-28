import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as companyById } from "./companies-BfoJuVh_.mjs";
import { n as newsById } from "./news-D24KZI3V.mjs";
import { t as insightsById } from "./insights-BdyM5i19.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { n as IMPACT_LABEL, s as formatWhen, t as HORIZON_LABEL } from "./format-ux0FY9OF.mjs";
import { p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { i as TypeMark, n as ImpactMark, r as Score, t as HorizonMark } from "./marks-YX0rBDTe.mjs";
import { r as Route$1 } from "./router-0aQZTtqv.mjs";
import { t as Analyst } from "./analyst-ChoRg29U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insight._id-CeF8paaI.js
var import_jsx_runtime = require_jsx_runtime();
function InsightPage() {
	const { id } = Route$1.useParams();
	const extra = useDesk((s) => s.extraInsights);
	const companyId = useDesk((s) => s.companyId);
	const insight = extra.find((i) => i.id === id) ?? insightsById[id];
	const company = companyId ? companyById[companyId] : void 0;
	if (!insight || !company) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "Инсайт не найден. Вернитесь к брифингу."
	});
	const newsItem = newsById[insight.newsId];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/desk",
				className: "inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "К брифингу"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeMark, { type: insight.type }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactMark, { impact: insight.impact }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizonMark, { horizon: insight.horizon })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Score, { value: insight.relevance })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl",
				children: insight.headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: insight.thesis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid grid-cols-3 gap-3 rounded-lg border border-border bg-surface p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-subtle",
						children: "Влияние"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: IMPACT_LABEL[insight.impact] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-subtle",
						children: "Горизонт"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: HORIZON_LABEL[insight.horizon] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-subtle",
						children: "Уверенность"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "tabular-nums",
						children: [Math.round(insight.confidence * 100), "%"]
					})] })
				]
			}),
			insight.why.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-lg font-medium",
					children: ["Почему это про ", company.short]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: insight.why.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-accent" }), w]
					}, w))
				})]
			}) : null,
			insight.products.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "Продукты КИБ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3",
					children: insight.products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-border bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: p.product
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: p.action
						})]
					}, p.product))
				})]
			}) : null,
			insight.talkingPoints.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "Talking points для RM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2",
					children: insight.talkingPoints.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-6 shrink-0 place-items-center rounded-xs bg-surface-2 font-mono text-xs tabular-nums text-muted",
							children: i + 1
						}), t]
					}, t))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-lg border border-accent/40 bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-subtle",
					children: "Следующий шаг"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-base leading-relaxed",
					children: insight.action
				})]
			}),
			newsItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [
					"Источник:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/desk/news/$id",
						params: { id: newsItem.id },
						className: "text-fg underline-offset-4 hover:underline",
						children: newsItem.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [" · ", formatWhen(newsItem.publishedAt)]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analyst, {
					companyId: company.id,
					newsId: insight.newsId,
					insightHeadline: insight.headline
				})
			})
		]
	});
}
//#endregion
export { InsightPage as component };
