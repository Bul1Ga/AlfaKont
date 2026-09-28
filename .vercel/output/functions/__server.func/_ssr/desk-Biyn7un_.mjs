import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as companyById } from "./companies-BfoJuVh_.mjs";
import { n as insightsFor } from "./insights-BdyM5i19.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { c as minutesToRead } from "./format-ux0FY9OF.mjs";
import { n as Tape } from "./shell-CQ8tnGs1.mjs";
import { t as InsightCard } from "./insight-card-DxZ95Pvi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-Biyn7un_.js
var import_jsx_runtime = require_jsx_runtime();
function Briefing() {
	const companyId = useDesk((s) => s.companyId);
	const extra = useDesk((s) => s.extraInsights);
	const company = companyId ? companyById[companyId] : void 0;
	if (!company) return null;
	const list = [...extra.filter((i) => i.companyId === company.id), ...insightsFor(company.id).filter((i) => !extra.some((e) => e.id === i.id))];
	const [hero, ...rest] = list;
	const actions = list.filter((i) => i.impact !== "low").slice(0, 4);
	const counts = {
		risk: list.filter((i) => i.type === "risk").length,
		opportunity: list.filter((i) => i.type === "opportunity").length,
		event: list.filter((i) => i.type === "event").length
	};
	const read = minutesToRead(list.map((i) => i.thesis).join(" "));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tape, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-subtle",
					children: "Утренний брифинг"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-2 font-display text-2xl font-medium tracking-tight md:text-4xl",
					children: [company.short, ": что важно сегодня"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base",
					children: company.thesis
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-subtle",
							children: "Риски"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums text-risk",
							children: counts.risk
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-subtle",
							children: "Возможности"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums text-opportunity",
							children: counts.opportunity
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-subtle",
							children: "События"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "tabular-nums text-event",
							children: counts.event
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-subtle",
							children: "Чтение"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "tabular-nums",
							children: [read, " мин"]
						})] })
					]
				})
			]
		}),
		hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightCard, {
			insight: hero,
			featured: true
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 md:grid-cols-2",
			children: rest.slice(0, 4).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightCard, { insight: i }, i.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 rounded-lg border border-border bg-surface p-5 md:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-medium",
					children: "Действия на сегодня"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-3",
					children: actions.map((a, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-6 shrink-0 place-items-center rounded-xs bg-surface-2 font-mono text-xs tabular-nums text-muted",
							children: idx + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-fg",
							children: a.action
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-subtle",
							children: a.headline
						})] })]
					}, a.id))
				}),
				company.meeting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 border-t border-border pt-4 text-sm text-muted",
					children: [
						"Якорь повестки: ",
						company.meeting.when,
						", ",
						company.meeting.with,
						" — ",
						company.meeting.topic,
						"."
					]
				}) : null
			]
		})
	] });
}
//#endregion
export { Briefing as component };
