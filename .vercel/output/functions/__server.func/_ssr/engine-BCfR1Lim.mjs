//#region node_modules/.nitro/vite/services/ssr/assets/engine-BCfR1Lim.js
var SENSITIVITY_LABEL = {
	rates: "Ключевая ставка",
	fx: "Курс рубля",
	steel: "Сталь / HRC",
	oil: "Нефть / Urals",
	nickel: "Никель",
	palladium: "Палладий",
	gold: "Золото",
	retail: "Ритейл / спрос",
	ads: "Рекламный рынок",
	regulation: "Регуляторика",
	esg: "ESG / углерод",
	china: "Китай",
	eu: "ЕС",
	construction: "Строительство",
	capex: "Капекс"
};
var SENS_WEIGHTS = [
	22,
	12,
	7
];
function explainRelevance(newsItem, company) {
	const reasons = [];
	let raw = 10;
	if (newsItem.tickers.includes(company.ticker)) {
		raw += 26;
		reasons.push({
			label: `Тикер ${company.ticker}`,
			weight: 26
		});
	}
	const sensHits = newsItem.sensitivities.map((key) => ({
		key,
		exposure: company.sensitivities[key] ?? 0
	})).filter((h) => h.exposure >= .35).sort((a, b) => b.exposure - a.exposure).slice(0, 3);
	sensHits.forEach((h, i) => {
		const weight = Math.round(h.exposure * SENS_WEIGHTS[i]);
		raw += weight;
		reasons.push({
			label: SENSITIVITY_LABEL[h.key],
			weight
		});
	});
	const extraTags = newsItem.tags.filter((t) => company.tags.includes(t)).length;
	if (extraTags > 0 && sensHits.length < 2) {
		const weight = Math.min(10, extraTags * 4);
		raw += weight;
		reasons.push({
			label: "Совпадение профиля",
			weight
		});
	}
	if (company.competitors.some((c) => `${newsItem.title} ${newsItem.lede}`.includes(c))) {
		raw += 8;
		reasons.push({
			label: "Конкурент в тексте",
			weight: 8
		});
	}
	const score = Math.max(6, Math.min(97, raw));
	reasons.sort((a, b) => b.weight - a.weight);
	return {
		score,
		reasons: reasons.slice(0, 4)
	};
}
function rankedNews(newsList, company) {
	return [...newsList].map((item) => ({
		item,
		hit: explainRelevance(item, company)
	})).sort((a, b) => b.hit.score - a.hit.score || b.item.publishedAt.localeCompare(a.item.publishedAt));
}
var TAPE = [
	{
		k: "USDRUB",
		v: "79.42"
	},
	{
		k: "Brent",
		v: "$80.6"
	},
	{
		k: "Urals",
		v: "$68.8"
	},
	{
		k: "HRC CN",
		v: "+4.8%"
	},
	{
		k: "Au",
		v: "$2 641"
	},
	{
		k: "Ni LME",
		v: "$15 420"
	},
	{
		k: "КС ЦБ",
		v: "16.5%"
	},
	{
		k: "CPI food",
		v: "9.1%"
	}
];
//#endregion
export { explainRelevance as n, rankedNews as r, TAPE as t };
