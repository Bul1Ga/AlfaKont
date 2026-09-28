import { i as __toESM } from "../_runtime.mjs";
import { Z as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as companyById } from "./companies-BfoJuVh_.mjs";
import { n as insightsFor } from "./insights-BdyM5i19.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { a as cn } from "./format-ux0FY9OF.mjs";
import { t as InsightCard } from "./insight-card-DxZ95Pvi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signals-ZhiOz6rS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "Все"
	},
	{
		id: "risk",
		label: "Риски"
	},
	{
		id: "opportunity",
		label: "Возможности"
	},
	{
		id: "event",
		label: "События"
	}
];
function Signals() {
	const companyId = useDesk((s) => s.companyId);
	const extra = useDesk((s) => s.extraInsights);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const company = companyId ? companyById[companyId] : void 0;
	if (!company) return null;
	const list = [...extra.filter((i) => i.companyId === company.id), ...insightsFor(company.id).filter((i) => !extra.some((e) => e.id === i.id))].filter((i) => filter === "all" ? true : i.type === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "Сигналы"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-xl text-sm text-muted",
				children: [
					"Не новости, а вывод: что это значит для ",
					company.short,
					" и какой продукт КИБ уместен."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f.id),
					className: cn("h-9 rounded-sm px-3 text-sm", filter === f.id ? "bg-paper text-bg" : "bg-surface text-muted hover:text-fg"),
					children: f.label
				}, f.id))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3",
		children: list.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightCard, { insight: i }, i.id))
	})] });
}
//#endregion
export { Signals as component };
