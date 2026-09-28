import { i as __toESM } from "../_runtime.mjs";
import { Z as require_react, w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as useDesk } from "./store-wk0-Hrg3.mjs";
import { r as Send, s as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Button } from "./button-C_YMlB47.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analyst-ChoRg29U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var analyzeNews = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("a622d7e6e819bafd9e3db9371b5d81b603a3c87a8e5b283f4ddf107386befb79"));
var askAnalyst = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("f935ff5a01f4a7105bdda1cdf6770454c5c049b2a8f235ef4cf93438679500f6"));
var EMPTY = [];
function Analyst({ companyId, newsId, insightHeadline }) {
	const key = `${companyId}:${newsId ?? "desk"}:${insightHeadline ?? ""}`;
	const history = useDesk((s) => s.chats[key] ?? EMPTY);
	const pushChat = useDesk((s) => s.pushChat);
	const [question, setQuestion] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	async function onSend() {
		const q = question.trim();
		if (!q || pending) return;
		setQuestion("");
		pushChat(key, {
			role: "user",
			text: q
		});
		setPending(true);
		try {
			const res = await askAnalyst({ data: {
				companyId,
				question: q,
				newsId,
				insightHeadline,
				history
			} });
			if (!res.ok) {
				toast.error(res.error);
				pushChat(key, {
					role: "assistant",
					text: "Не удалось получить ответ аналитика. Попробуйте ещё раз."
				});
			} else pushChat(key, {
				role: "assistant",
				text: res.text
			});
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-base font-medium",
					children: "Спросить аналитика"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-subtle",
					children: "В контексте клиента"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Модель видит досье компании, новость и текущий инсайт. Запрос уходит только по кнопке."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [history.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: t.role === "user" ? "ml-8 rounded-md bg-surface-2 px-3 py-2 text-sm leading-relaxed" : "mr-4 rounded-md border border-border px-3 py-2 text-sm leading-relaxed text-muted",
					children: t.text
				}, `${t.role}-${i}`)), pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm text-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Аналитик собирает ответ…"]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: question,
					onChange: (e) => setQuestion(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") onSend();
					},
					placeholder: "Что это значит для нашего DCM?",
					className: "h-11 min-w-0 flex-1 rounded-md border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "icon",
					onClick: () => void onSend(),
					disabled: pending || !question.trim(),
					"aria-label": "Отправить",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
				})]
			})
		]
	});
}
//#endregion
export { analyzeNews as n, Analyst as t };
