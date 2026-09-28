import { i as __toESM } from "../_runtime.mjs";
import { S as useNavigate, Z as require_react, _ as Outlet, m as useRouterState, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as companyById, t as companies } from "./companies-BfoJuVh_.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { a as cn, o as formatDay } from "./format-ux0FY9OF.mjs";
import { t as TAPE } from "./engine-BCfR1Lim.mjs";
import { a as Radio, c as FileText, l as ChevronDown, o as Newspaper, t as Waypoints, u as Building2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CQ8tnGs1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/desk",
		label: "Брифинг",
		icon: FileText,
		exact: true
	},
	{
		to: "/desk/signals",
		label: "Сигналы",
		icon: Radio,
		exact: false
	},
	{
		to: "/desk/news",
		label: "Лента",
		icon: Newspaper,
		exact: false
	},
	{
		to: "/desk/dossier",
		label: "Досье",
		icon: Building2,
		exact: false
	}
];
function DeskShell() {
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const companyId = useDesk((s) => s.companyId);
	const setCompanyId = useDesk((s) => s.setCompanyId);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	(0, import_react.useEffect)(() => {
		if (hydrated && !companyId) navigate({ to: "/" });
	}, [
		hydrated,
		companyId,
		navigate
	]);
	const company = companyId ? companyById[companyId] : void 0;
	if (!hydrated || !company) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-bg text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm",
			children: "Собираем стол RM…"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none fixed inset-y-0 left-0 w-1 bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/desk",
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-8 shrink-0 place-items-center rounded-xs bg-accent font-display text-sm font-medium text-accent-fg",
								children: "К"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-sm font-medium leading-none tracking-tight",
									children: "Альфа Контекст"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-subtle",
									children: "КИБ · ДСП"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative ml-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen((v) => !v),
								className: "flex h-11 max-w-56 items-center gap-2 rounded-md border border-border bg-surface px-3 text-left md:max-w-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm font-medium",
										children: company.short
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-xs text-subtle",
										children: [
											company.ticker,
											" · ",
											company.sector
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "ml-1 size-4 shrink-0 text-subtle" })]
							}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-0 z-40 mt-2 w-72 overflow-hidden rounded-md border border-border bg-surface-2 shadow-card",
								children: [companies.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setCompanyId(c.id);
										setOpen(false);
									},
									className: cn("flex w-full flex-col px-3 py-2.5 text-left hover:bg-surface", c.id === company.id && "bg-surface"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: c.short
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-subtle",
										children: [
											c.ticker,
											" · ",
											c.sector
										]
									})]
								}, c.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "block border-t border-border px-3 py-2.5 text-xs text-muted hover:text-fg",
									onClick: () => setOpen(false),
									children: "Сменить портфель"
								})]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/method",
							className: "hidden h-11 items-center rounded-md px-3 text-sm text-muted hover:text-fg md:inline-flex",
							children: "О решении"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto hidden max-w-6xl items-center gap-1 px-4 pb-2 md:flex md:px-6",
					children: [NAV.map((item) => {
						const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("inline-flex h-10 items-center gap-2 rounded-sm px-3 text-sm", active ? "bg-surface text-fg" : "text-muted hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
						}, item.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-xs capitalize text-subtle",
						children: formatDay()
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-subtle",
						children: [
							company.rm.title,
							" · ",
							company.rm.coverage
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm text-muted",
						children: company.rm.name
					})]
				}), company.meeting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hidden text-right text-xs text-muted sm:block",
					children: ["Следующая встреча", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-0.5 block text-fg",
						children: [
							company.meeting.when,
							" · ",
							company.meeting.with
						]
					})]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-6xl px-4 pb-28 md:px-6 md:pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg/95 backdrop-blur-sm md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-5",
					children: [NAV.map((item) => {
						const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex h-14 flex-col items-center justify-center gap-0.5 text-xs", active ? "text-fg" : "text-subtle"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
						}, item.to);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/method",
						className: cn("flex h-14 flex-col items-center justify-center gap-0.5 text-xs", pathname === "/method" ? "text-fg" : "text-subtle"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waypoints, { className: "size-4" }), "Метод"]
					})]
				})
			})
		]
	});
}
function Tape() {
	const doubled = [
		...TAPE,
		...TAPE,
		...TAPE,
		...TAPE
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-6 overflow-hidden rounded-md border border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tape-track flex w-max gap-8 px-4 py-2.5 text-xs tabular-nums text-muted",
			children: doubled.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-subtle",
					children: q.k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: q.v
				})]
			}, `${q.k}-${i}`))
		})
	});
}
//#endregion
export { Tape as n, DeskShell as t };
