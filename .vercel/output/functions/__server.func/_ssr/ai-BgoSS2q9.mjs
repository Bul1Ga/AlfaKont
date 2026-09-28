import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { t as companies } from "./companies-BfoJuVh_.mjs";
import { n as newsById } from "./news-D24KZI3V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-BgoSS2q9.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function extractJson(text) {
	const start = text.indexOf("{");
	const end = text.lastIndexOf("}");
	if (start < 0 || end <= start) return null;
	try {
		return JSON.parse(text.slice(start, end + 1));
	} catch {
		return null;
	}
}
async function chatCompletions(messages, maxTokens) {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available"
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .4,
			max_tokens: maxTokens,
			messages
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	return {
		ok: true,
		text: (await res.json()).choices[0]?.message.content ?? ""
	};
}
function companyBrief(companyId) {
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
		kpis: c.kpis
	};
}
var analyzeNews_createServerFn_handler = createServerRpc({
	id: "a622d7e6e819bafd9e3db9371b5d81b603a3c87a8e5b283f4ddf107386befb79",
	name: "analyzeNews",
	filename: "src/lib/ai.ts"
}, (opts) => analyzeNews.__executeServer(opts));
var analyzeNews = createServerFn({ method: "POST" }).validator((input) => input).handler(analyzeNews_createServerFn_handler, async ({ data }) => {
	const company = companyBrief(data.companyId);
	const item = newsById[data.newsId];
	if (!company || !item) return {
		ok: false,
		error: "Нет данных"
	};
	const result = await chatCompletions([{
		role: "system",
		content: "Ты старший аналитик КИБ Альфа-Банка. Пишешь короткие инсайты для RM: зачем эта новость КОНКРЕТНО этому клиенту и какой продукт банка предложить. Только JSON, без markdown. Русский язык, деловой тон, без эмодзи."
	}, {
		role: "user",
		content: `Компания: ${JSON.stringify(company)}\n\nНовость: ${JSON.stringify({
			title: item.title,
			lede: item.lede,
			body: item.body,
			source: item.source,
			tags: item.tags
		})}\n\nВерни JSON: {"type":"risk"|"opportunity"|"event","headline":"строка до 140 символов","thesis":"2-4 предложения","relevance":0-100,"impact":"high"|"medium"|"low","horizon":"now"|"1-3m"|"6-12m","confidence":0-1,"why":["...","..."],"products":[{"product":"...","action":"..."}],"talkingPoints":["..."],"action":"один конкретный следующий шаг RM"}`
	}], 700);
	if (!result.ok) return result;
	const parsed = extractJson(result.text);
	if (!parsed) return {
		ok: true,
		insight: {
			id: `gen-${data.companyId}-${data.newsId}`,
			companyId: data.companyId,
			newsId: data.newsId,
			type: "event",
			headline: item.title,
			thesis: result.text.slice(0, 600),
			relevance: 70,
			impact: "medium",
			horizon: "1-3m",
			confidence: .5,
			why: [],
			products: [],
			talkingPoints: [],
			action: "Прочитать полный разбор"
		}
	};
	const type = [
		"risk",
		"opportunity",
		"event"
	].includes(parsed.type) ? parsed.type : "event";
	const impact = [
		"high",
		"medium",
		"low"
	].includes(parsed.impact) ? parsed.impact : "medium";
	const horizon = [
		"now",
		"1-3m",
		"6-12m"
	].includes(parsed.horizon) ? parsed.horizon : "1-3m";
	return {
		ok: true,
		insight: {
			id: `gen-${data.companyId}-${data.newsId}`,
			companyId: data.companyId,
			newsId: data.newsId,
			type,
			headline: String(parsed.headline ?? item.title).slice(0, 180),
			thesis: String(parsed.thesis ?? ""),
			relevance: Math.max(1, Math.min(99, Number(parsed.relevance) || 70)),
			impact,
			horizon,
			confidence: Math.max(0, Math.min(1, Number(parsed.confidence) || .6)),
			why: Array.isArray(parsed.why) ? parsed.why.map(String).slice(0, 4) : [],
			products: Array.isArray(parsed.products) ? parsed.products.slice(0, 3).map((p) => ({
				product: String(p.product ?? ""),
				action: String(p.action ?? "")
			})) : [],
			talkingPoints: Array.isArray(parsed.talkingPoints) ? parsed.talkingPoints.map(String).slice(0, 4) : [],
			action: String(parsed.action ?? "")
		}
	};
});
var askAnalyst_createServerFn_handler = createServerRpc({
	id: "f935ff5a01f4a7105bdda1cdf6770454c5c049b2a8f235ef4cf93438679500f6",
	name: "askAnalyst",
	filename: "src/lib/ai.ts"
}, (opts) => askAnalyst.__executeServer(opts));
var askAnalyst = createServerFn({ method: "POST" }).validator((input) => input).handler(askAnalyst_createServerFn_handler, async ({ data }) => {
	const company = companyBrief(data.companyId);
	if (!company) return {
		ok: false,
		error: "Нет компании"
	};
	const news = data.newsId ? newsById[data.newsId] : null;
	const history = data.history.slice(-6).map((t) => ({
		role: t.role,
		content: t.text
	}));
	const result = await chatCompletions([
		{
			role: "system",
			content: "Ты аналитик покрытия КИБ Альфа-Банка. Отвечаешь RM коротко (120–180 слов): что это значит для клиента, какие продукты банка уместны, какой следующий шаг. Без эмодзи, без маркетинга, на «вы»."
		},
		{
			role: "user",
			content: `Контекст клиента: ${JSON.stringify(company)}\nНовость: ${news ? news.title + " — " + news.lede : "нет"}\nТекущий инсайт: ${data.insightHeadline ?? "нет"}`
		},
		...history,
		{
			role: "user",
			content: data.question
		}
	], 420);
	if (!result.ok) return result;
	return {
		ok: true,
		text: result.text.trim()
	};
});
//#endregion
export { analyzeNews_createServerFn_handler, askAnalyst_createServerFn_handler };
