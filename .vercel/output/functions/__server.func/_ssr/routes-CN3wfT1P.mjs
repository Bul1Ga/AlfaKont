import { S as useNavigate, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as companies } from "./companies-BfoJuVh_.mjs";
import { n as insightsFor } from "./insights-BdyM5i19.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { i as TYPE_LABEL } from "./format-ux0FY9OF.mjs";
import { f as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-C_YMlB47.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CN3wfT1P.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const navigate = useNavigate();
	const setCompanyId = useDesk((s) => s.setCompanyId);
	function openCompany(id) {
		setCompanyId(id);
		navigate({ to: "/desk" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none fixed inset-y-0 left-0 w-1 bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-xs bg-accent font-display text-sm font-medium text-accent-fg",
						children: "К"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm tracking-tight",
						children: "Альфа Контекст"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/method",
					className: "text-sm text-muted hover:text-fg",
					children: "О решении"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-8 pt-6 md:px-6 md:pb-12 md:pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-subtle",
						children: "Корпоративно-инвестиционный бизнес"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl",
						children: "Новостная аналитика, которая знает вашего клиента"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
						children: "Поток новостей и аналитики Альфа-Банка пропускается через контекст конкретной компании: риски, возможности и события становятся персональными инсайтами и поводом для разговора RM."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => openCompany("severstal"),
							children: ["Открыть стол · Северсталь", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => void navigate({ to: "/method" }),
							children: "Как это устроено"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 pb-20 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium",
						children: "Портфель покрытия"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Выберите клиента — брифинг пересоберётся под него"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: companies.map((c) => {
						const top = insightsFor(c.id)[0];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openCompany(c.id),
							className: "rounded-lg border border-border bg-surface p-5 text-left shadow-card transition-colors duration-150 hover:border-fg/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs tabular-nums text-subtle",
											children: c.ticker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 font-display text-xl font-medium",
											children: c.short
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: c.sector
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-xs bg-surface-2 px-2 py-1 text-xs text-subtle",
										children: c.rm.coverage
									})]
								}),
								top ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 line-clamp-2 text-sm leading-relaxed text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-fg",
											children: [TYPE_LABEL[top.type], "."]
										}),
										" ",
										top.headline
									]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-xs text-subtle",
									children: [
										"RM · ",
										c.rm.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ml-3 inline-flex items-center gap-1 text-fg",
											children: ["Открыть стол", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
										})
									]
								})
							]
						}, c.id);
					})
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
