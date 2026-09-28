import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as parseISO, r as format, t as ru } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-ux0FY9OF.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatWhen(iso, withTime = true) {
	const d = parseISO(iso);
	const opts = {
		timeZone: "Europe/Moscow",
		day: "numeric",
		month: "long"
	};
	if (withTime) {
		opts.hour = "2-digit";
		opts.minute = "2-digit";
		opts.hourCycle = "h23";
	}
	return new Intl.DateTimeFormat("ru-RU", opts).format(d);
}
function formatDay(date = /* @__PURE__ */ new Date()) {
	return format(date, "EEEE, d MMMM yyyy", { locale: ru });
}
var TYPE_LABEL = {
	risk: "Риск",
	opportunity: "Возможность",
	event: "Событие"
};
var IMPACT_LABEL = {
	high: "Высокий",
	medium: "Средний",
	low: "Низкий"
};
var HORIZON_LABEL = {
	now: "Сейчас",
	"1-3m": "1–3 мес.",
	"6-12m": "6–12 мес."
};
var SOURCE_KIND = {
	alfa: "",
	regulator: "Регулятор",
	wire: "Лента",
	market: "Рынок"
};
function minutesToRead(text) {
	const words = text.trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 180));
}
//#endregion
export { cn as a, minutesToRead as c, TYPE_LABEL as i, IMPACT_LABEL as n, formatDay as o, SOURCE_KIND as r, formatWhen as s, HORIZON_LABEL as t };
