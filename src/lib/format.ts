import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import type { Horizon, Impact, InsightType } from "@/lib/data/types";

export function formatWhen(iso: string, withTime = true) {
  const d = parseISO(iso);
  const opts: Intl.DateTimeFormatOptions = {
    timeZone: "Europe/Moscow",
    day: "numeric",
    month: "long",
  };
  if (withTime) {
    opts.hour = "2-digit";
    opts.minute = "2-digit";
    opts.hourCycle = "h23";
  }
  return new Intl.DateTimeFormat("ru-RU", opts).format(d);
}

export function formatDay(date = new Date()) {
  return format(date, "EEEE, d MMMM yyyy", { locale: ru });
}

export const TYPE_LABEL: Record<InsightType, string> = {
  risk: "Риск",
  opportunity: "Возможность",
  event: "Событие",
};

export const IMPACT_LABEL: Record<Impact, string> = {
  high: "Высокий",
  medium: "Средний",
  low: "Низкий",
};

export const HORIZON_LABEL: Record<Horizon, string> = {
  now: "Сейчас",
  "1-3m": "1–3 мес.",
  "6-12m": "6–12 мес.",
};

export const SOURCE_KIND: Record<string, string> = {
  alfa: "",
  regulator: "Регулятор",
  wire: "Лента",
  market: "Рынок",
};

export function minutesToRead(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
}
