import { i as __toESM } from "../_runtime.mjs";
import { Z as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as companyById } from "./companies-BfoJuVh_.mjs";
import { n as newsById } from "./news-D24KZI3V.mjs";
import { n as insightsFor } from "./insights-BdyM5i19.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { s as formatWhen } from "./format-ux0FY9OF.mjs";
import { n as explainRelevance } from "./engine-BCfR1Lim.mjs";
import { i as ScanSearch, p as ArrowLeft, s as LoaderCircle } from "../_libs/lucide-react.mjs";
import { r as Score } from "./marks-YX0rBDTe.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-0aQZTtqv.mjs";
import { t as Button } from "./button-C_YMlB47.mjs";
import { n as analyzeNews, t as Analyst } from "./analyst-ChoRg29U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news._id-DCUWyjLt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsDetail() {
	const { id } = Route.useParams();
	const companyId = useDesk((s) => s.companyId);
	const addInsight = useDesk((s) => s.addInsight);
	const extra = useDesk((s) => s.extraInsights);
	const [pending, setPending] = (0, import_react.useState)(false);
	const company = companyId ? companyById[companyId] : void 0;
	const item = newsById[id];
	if (!company || !item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "Материал не найден."
	});
	const hit = explainRelevance(item, company);
	const related = [...extra.filter((i) => i.newsId === item.id && i.companyId === company.id), ...insightsFor(company.id).filter((i) => i.newsId === item.id)];
	const clientId = company.id;
	const newsId = item.id;
	async function onAnalyze() {
		setPending(true);
		try {
			const res = await analyzeNews({ data: {
				companyId: clientId,
				newsId
			} });
			if (!res.ok) {
				toast.error(res.error);
				return;
			}
			addInsight(res.insight);
			toast.success("Инсайт собран под этого клиента");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/desk/news",
				className: "inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "К ленте"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-subtle",
					children: [
						item.source,
						" · ",
						formatWhen(item.publishedAt)
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl",
					children: item.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Score, { value: hit.score })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: item.lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted",
				children: item.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-lg border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-base font-medium",
						children: ["Почему это про ", company.short]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: hit.reasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-subtle",
								children: ["+", r.weight]
							})]
						}, r.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-5",
						onClick: () => void onAnalyze(),
						disabled: pending,
						children: [
							pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, { className: "size-4" }),
							"Собрать инсайт для ",
							company.short
						]
					})
				]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-base font-medium",
					children: "Уже разобрано"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: related.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/desk/insight/$id",
						params: { id: i.id },
						className: "text-sm text-fg underline-offset-4 hover:underline",
						children: i.headline
					}) }, i.id))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analyst, {
					companyId: company.id,
					newsId: item.id
				})
			})
		]
	});
}
//#endregion
export { NewsDetail as component };
