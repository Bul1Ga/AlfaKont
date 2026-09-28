import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/method-BiFxgg1q.js
var import_jsx_runtime = require_jsx_runtime();
var TEAM = [
	{
		role: "Product / UX / BA",
		does: "Модель контекста клиента, карта продуктов КИБ, сценарий RM, критерии «хорошего инсайта»."
	},
	{
		role: "Frontend Developer",
		does: "Стол RM: брифинг, лента, досье, смена клиента. Демо за 90 секунд без пояснений за кадром."
	},
	{
		role: "Backend Developer",
		does: "Нормализация потока Альфа-Аналитики, API досье, кэш инсайтов, доставка в стол RM."
	},
	{
		role: "ML / LLM Engineer",
		does: "Ранжирование релевантности: тикер, теги, чувствительности, география, конкуренты."
	},
	{
		role: "ML / LLM / Prompt Engineer",
		does: "Промпт «новость × компания × кошелёк продуктов». Talking points и next action, не саммари."
	}
];
var STEPS = [
	{
		t: "Поток",
		d: "Альфа-Аналитика, регуляторы, котировки, лента. Одна нормализованная карточка."
	},
	{
		t: "Контекст",
		d: "Досье клиента: экспозиции, чувствительности, конкуренты, живые продукты КИБ, ближайшая встреча."
	},
	{
		t: "Ранг",
		d: "Прозрачный скоринг. Одна новость даёт 92 для Северстали и 12 для Яндекса."
	},
	{
		t: "Инсайт",
		d: "LLM пишет so-what, не пересказ. Тип: риск / возможность / событие."
	},
	{
		t: "Продукт",
		d: "Маппинг на DCM, FX, trade finance, ESG-RCF, SCF, гарантии — с формулировкой для RM."
	},
	{
		t: "Брифинг",
		d: "Утренний пакет на 4 минуты и повестка встречи с CFO."
	}
];
function Method() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none fixed inset-y-0 left-0 w-1 bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "На старт"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs uppercase tracking-widest text-subtle",
					children: "Трек КИБ · команда 5 человек"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl",
					children: "Альфа Контекст"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: "Руководителю крупного бизнеса и его RM не нужна ещё одна лента. Нужен ответ: что из потока новостей меняет риски, возможности и разговор с этим клиентом на этой неделе — и какой продукт банка стоит положить на стол."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Почему этот трек"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Рекомендованный состав совпадает с командой из пяти человек один в один. Ценность для КИБ проверяется на демо: переключите клиента — та же новость CBAM становится главным риском для Северстали и фоном для Яндекса. Универсальный саммаризатор этого не умеет."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Конвейер"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-3",
						children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 rounded-md border border-border bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs tabular-nums text-subtle",
								children: ["0", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: s.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm leading-relaxed text-muted",
								children: s.d
							})] })]
						}, s.t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Кто что делает"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: TEAM.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-border bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: m.role
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: m.does
							})]
						}, m.role))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-medium",
						children: "Сценарий демо на 90 секунд"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-4 space-y-2 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. Открыть стол Северстали — утренний брифинг с CBAM и китайским HRC." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Зайти в разбор CBAM: продукты ESG-RCF и talking points к встрече 2 октября." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Та же лента у X5: инфляция и SCF, не углерод." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "4. В новости нажать «собрать инсайт» — живой вызов модели в контексте клиента." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "5. Спросить аналитика: «что сказать CFO про DCM на этой неделе?»" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10 mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-medium",
							children: "Что в прототипе"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "Шесть клиентов покрытия, восемнадцать материалов, заранее собранные инсайты для мгновенного демо и живой LLM-разбор по кнопке. Скоринг релевантности — честный и читаемый, не чёрный ящик. В хакатоне дальше: подключить боевой поток Альфа-Аналитики, граф контрагентов и пуш в календарь RM."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "mt-6 inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg",
							children: "К портфелю"
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { Method as component };
