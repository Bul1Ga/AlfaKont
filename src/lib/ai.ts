import { createServerFn } from "@tanstack/react-start";
import { companies, newsById } from "@/lib/data";
import type { Insight, InsightType, Impact, Horizon } from "@/lib/data/types";

type AnalyzeInput = { companyId: string; newsId: string };
type ChatInput = {
  companyId: string;
  question: string;
  newsId?: string;
  insightHeadline?: string;
  history: { role: "user" | "assistant"; text: string }[];
};

function extractJson(text: string): Record<string, unknown> | null {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1)) as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function chatCompletions(messages: { role: string; content: string }[], maxTokens: number) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return { ok: false as const, error: "AI is not available" };
  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      temperature: 0.4,
      max_tokens: maxTokens,
      messages,
    }),
  });
  if (!res.ok) return { ok: false as const, error: `xAI API error ${res.status}` };
  const body = (await res.json()) as { choices: { message: { content: string } }[] };
  return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
}

function companyBrief(companyId: string) {
  const c = companies.find((x) => x.id === companyId);
  if (!c) return null;
  return {
    name: c.name,
    ticker: c.ticker,
    sector: c.sector,
    thesis: c.thesis,
    exposures: c.exposures,
    products: c.products,
    competitors: c.competitors,
    meeting: c.meeting,
    kpis: c.kpis,
  };
}

export const analyzeNews = createServerFn({ method: "POST" })
  .validator((input: AnalyzeInput) => input)
  .handler(async ({ data }) => {
    const company = companyBrief(data.companyId);
    const item = newsById[data.newsId];
    if (!company || !item) return { ok: false as const, error: "Нет данных" };

    const result = await chatCompletions(
      [
        {
          role: "system",
          content:
            "Ты старший аналитик КИБ Альфа-Банка. Пишешь короткие инсайты для RM: зачем эта новость КОНКРЕТНО этому клиенту и какой продукт банка предложить. Только JSON, без markdown. Русский язык, деловой тон, без эмодзи.",
        },
        {
          role: "user",
          content: `Компания: ${JSON.stringify(company)}\n\nНовость: ${JSON.stringify({
            title: item.title,
            lede: item.lede,
            body: item.body,
            source: item.source,
            tags: item.tags,
          })}\n\nВерни JSON: {"type":"risk"|"opportunity"|"event","headline":"строка до 140 символов","thesis":"2-4 предложения","relevance":0-100,"impact":"high"|"medium"|"low","horizon":"now"|"1-3m"|"6-12m","confidence":0-1,"why":["...","..."],"products":[{"product":"...","action":"..."}],"talkingPoints":["..."],"action":"один конкретный следующий шаг RM"}`,
        },
      ],
      700,
    );

    if (!result.ok) return result;
    const parsed = extractJson(result.text);
    if (!parsed) {
      return {
        ok: true as const,
        insight: {
          id: `gen-${data.companyId}-${data.newsId}`,
          companyId: data.companyId,
          newsId: data.newsId,
          type: "event" as InsightType,
          headline: item.title,
          thesis: result.text.slice(0, 600),
          relevance: 70,
          impact: "medium" as Impact,
          horizon: "1-3m" as Horizon,
          confidence: 0.5,
          why: [],
          products: [],
          talkingPoints: [],
          action: "Прочитать полный разбор",
        } satisfies Insight,
      };
    }

    const type = (["risk", "opportunity", "event"] as const).includes(parsed.type as InsightType)
      ? (parsed.type as InsightType)
      : "event";
    const impact = (["high", "medium", "low"] as const).includes(parsed.impact as Impact)
      ? (parsed.impact as Impact)
      : "medium";
    const horizon = (["now", "1-3m", "6-12m"] as const).includes(parsed.horizon as Horizon)
      ? (parsed.horizon as Horizon)
      : "1-3m";

    const insight: Insight = {
      id: `gen-${data.companyId}-${data.newsId}`,
      companyId: data.companyId,
      newsId: data.newsId,
      type,
      headline: String(parsed.headline ?? item.title).slice(0, 180),
      thesis: String(parsed.thesis ?? ""),
      relevance: Math.max(1, Math.min(99, Number(parsed.relevance) || 70)),
      impact,
      horizon,
      confidence: Math.max(0, Math.min(1, Number(parsed.confidence) || 0.6)),
      why: Array.isArray(parsed.why) ? parsed.why.map(String).slice(0, 4) : [],
      products: Array.isArray(parsed.products)
        ? (parsed.products as { product?: string; action?: string }[])
            .slice(0, 3)
            .map((p) => ({ product: String(p.product ?? ""), action: String(p.action ?? "") }))
        : [],
      talkingPoints: Array.isArray(parsed.talkingPoints)
        ? parsed.talkingPoints.map(String).slice(0, 4)
        : [],
      action: String(parsed.action ?? ""),
    };
    return { ok: true as const, insight };
  });

export const askAnalyst = createServerFn({ method: "POST" })
  .validator((input: ChatInput) => input)
  .handler(async ({ data }) => {
    const company = companyBrief(data.companyId);
    if (!company) return { ok: false as const, error: "Нет компании" };
    const news = data.newsId ? newsById[data.newsId] : null;
    const history = data.history.slice(-6).map((t) => ({
      role: t.role,
      content: t.text,
    }));

    const result = await chatCompletions(
      [
        {
          role: "system",
          content:
            "Ты аналитик покрытия КИБ Альфа-Банка. Отвечаешь RM коротко (120–180 слов): что это значит для клиента, какие продукты банка уместны, какой следующий шаг. Без эмодзи, без маркетинга, на «вы».",
        },
        {
          role: "user",
          content: `Контекст клиента: ${JSON.stringify(company)}\nНовость: ${news ? news.title + " — " + news.lede : "нет"}\nТекущий инсайт: ${data.insightHeadline ?? "нет"}`,
        },
        ...history,
        { role: "user", content: data.question },
      ],
      420,
    );
    if (!result.ok) return result;
    return { ok: true as const, text: result.text.trim() };
  });
