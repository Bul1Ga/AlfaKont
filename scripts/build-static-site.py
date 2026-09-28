#!/usr/bin/env python3
from pathlib import Path

DATA = Path("/tmp/alfa-data.json").read_text()

HTML = r'''<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Альфа Контекст</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Unbounded:wght@500;600&display=swap" rel="stylesheet"/>
<style>
:root{
  --bg:#0b0b0c;--surface:#141416;--surface-2:#1c1c1f;--fg:#f3f1ec;--muted:#9a9a96;
  --subtle:#6e6e6a;--border:#2a2a2c;--accent:#ef3124;--risk:#d45b55;--opp:#7d9b76;--event:#8a9bb0;
}
*{box-sizing:border-box}
html,body{margin:0;background:var(--bg);color:var(--fg);font-family:Manrope,system-ui,sans-serif;min-height:100dvh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer}
h1,h2,h3{font-family:Unbounded,Manrope,sans-serif;font-weight:500;letter-spacing:-.03em;text-wrap:balance;margin:0}
.stripe{position:fixed;inset:0 auto 0 0;width:4px;background:var(--accent);z-index:80}
.wrap{max-width:1120px;margin:0 auto;padding:20px 16px 80px}
@media(min-width:768px){.wrap{padding:24px 24px 96px}}
.muted{color:var(--muted)} .subtle{color:var(--subtle)} .fg{color:var(--fg)}
.kicker{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--subtle)}
.card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px}
.card:hover{border-color:#3a3a3c}
.btn{display:inline-flex;align-items:center;justify-content:center;height:44px;padding:0 16px;border:0;background:var(--accent);color:#fff;font-weight:600;font-size:14px;border-radius:4px}
.btn.ghost{background:var(--surface-2);color:var(--fg);border:1px solid var(--border)}
.grid{display:grid;gap:12px}
@media(min-width:720px){.g2{grid-template-columns:1fr 1fr}.g3{grid-template-columns:1fr 1fr 1fr}}
.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.chip{display:inline-flex;align-items:center;height:22px;padding:0 8px;font-size:11px;background:var(--surface-2);color:var(--subtle);border-radius:4px}
.chip.risk{color:var(--risk)} .chip.opportunity{color:var(--opp)} .chip.event{color:var(--event)}
.mark{width:32px;height:32px;background:var(--accent);color:#fff;display:grid;place-items:center;font-family:Unbounded,sans-serif;font-size:14px;flex-shrink:0}
header.top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:8px}
nav.tabs{display:flex;gap:4px;overflow:auto;border-bottom:1px solid var(--border);margin:12px 0 20px;padding-bottom:0}
nav.tabs a{padding:10px 12px;font-size:13px;color:var(--muted);border-bottom:2px solid transparent;white-space:nowrap}
nav.tabs a.on{color:var(--fg);border-color:var(--accent)}
.tape{overflow:hidden;border:1px solid var(--border);background:var(--surface);margin-bottom:20px;font-size:12px;color:var(--subtle)}
.tape-in{display:flex;gap:28px;padding:8px 0;width:max-content;animation:tape 36s linear infinite}
@keyframes tape{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.hero{border-left:3px solid var(--accent)}
.bar{height:4px;background:var(--surface-2);border-radius:2px;overflow:hidden}
.bar>i{display:block;height:100%;background:var(--accent)}
.score{font-variant-numeric:tabular-nums;font-weight:700}
input,select{background:var(--surface-2);border:1px solid var(--border);color:var(--fg);padding:10px 12px;border-radius:8px;width:100%}
.hidden{display:none}
.sel{background:transparent;border:1px solid var(--border);color:var(--fg);height:36px;padding:0 10px;border-radius:6px}
footer.note{margin-top:48px;font-size:12px;color:var(--subtle)}
</style>
</head>
<body>
<div class="stripe"></div>
<div class="wrap" id="app"></div>
<script id="data" type="application/json">__DATA__</script>
<script>
const DATA = JSON.parse(document.getElementById("data").textContent);
const SENS = {rates:"Ключевая ставка",fx:"Курс рубля",steel:"Сталь / HRC",oil:"Нефть / Urals",nickel:"Никель",palladium:"Палладий",gold:"Золото",retail:"Ритейл / спрос",ads:"Рекламный рынок",regulation:"Регуляторика",esg:"ESG / углерод",china:"Китай",eu:"ЕС",construction:"Строительство",capex:"Капекс"};
const TYPE = {risk:"Риск",opportunity:"Возможность",event:"Событие"};
const IMPACT = {high:"Высокий",medium:"Средний",low:"Низкий"};
const HORIZON = {now:"Сейчас","1-3m":"1–3 мес.","6-12m":"6–12 мес."};
const STATUS = {active:"в работе",pipeline:"пайплайн",dormant:"спит"};
const TAPE = [["USDRUB","79.42"],["Brent","$80.6"],["Urals","$68.8"],["HRC CN","+4.8%"],["Au","$2 641"],["Ni LME","$15 420"],["КС ЦБ","16.5%"],["CPI food","9.1%"]];
const $ = (s) => document.getElementById("app");
const esc = (s) => String(s??"").replace(/[&<>"']/g, m => ({'&':'&','<':'<','>':'>','"':'"',"'":'&#39;'}[m]));
function company(id){ return DATA.companies.find(c => c.id === id); }
function getCid(){ return localStorage.getItem("alfa-cid") || ""; }
function setCid(id){ localStorage.setItem("alfa-cid", id); }
function route(){
  const h = (location.hash || "#/").replace(/^#/, "");
  const p = h.split("/").filter(Boolean);
  return { page: p[0] || "home", a: p[1] || "", b: p[2] || "" };
}
function go(to){ location.hash = to; }
function formatWhen(iso, withTime=true){
  const opts = { timeZone:"Europe/Moscow", day:"numeric", month:"long" };
  if (withTime){ opts.hour="2-digit"; opts.minute="2-digit"; opts.hourCycle="h23"; }
  return new Intl.DateTimeFormat("ru-RU", opts).format(new Date(iso));
}
function explain(news, c){
  const reasons=[]; let raw=10;
  if (news.tickers.includes(c.ticker)){ raw+=26; reasons.push({label:`Тикер ${c.ticker}`,weight:26}); }
  const hits = news.sensitivities.map(k=>({k, e:c.sensitivities[k]||0})).filter(h=>h.e>=0.35).sort((a,b)=>b.e-a.e).slice(0,3);
  const w=[22,12,7];
  hits.forEach((h,i)=>{ const weight=Math.round(h.e*w[i]); raw+=weight; reasons.push({label:SENS[h.k],weight}); });
  const extra = news.tags.filter(t=>c.tags.includes(t)).length;
  if (extra>0 && hits.length<2){ const weight=Math.min(10, extra*4); raw+=weight; reasons.push({label:"Совпадение профиля",weight}); }
  if (c.competitors.some(x => (news.title+" "+news.lede).includes(x))){ raw+=8; reasons.push({label:"Конкурент в тексте",weight:8}); }
  reasons.sort((a,b)=>b.weight-a.weight);
  return { score: Math.max(6, Math.min(97, raw)), reasons: reasons.slice(0,4) };
}
function ranked(c){ return DATA.news.map(item=>({item, hit:explain(item,c)})).sort((a,b)=>b.hit.score-a.hit.score || b.item.publishedAt.localeCompare(a.item.publishedAt)); }
function insightsFor(id){ return DATA.insights.filter(i=>i.companyId===id).sort((a,b)=>b.relevance-a.relevance); }
function newsById(id){ return DATA.news.find(n=>n.id===id); }
function insightById(id){ return DATA.insights.find(i=>i.id===id); }
function topBar(c, tab){
  const tabs = [["briefing","Брифинг"],["signals","Сигналы"],["news","Лента"],["dossier","Досье"]];
  return `<header class="top">
    <a href="#/" class="row" style="font-family:Unbounded,sans-serif;font-size:14px"><span class="mark">К</span> Альфа Контекст</a>
    <div class="row">
      <select class="sel" onchange="localStorage.setItem('alfa-cid',this.value);location.hash='#/briefing'">
        ${DATA.companies.map(x=>`<option value="${x.id}" ${x.id===c.id?"selected":""}>${esc(x.short)} · ${x.ticker}</option>`).join("")}
      </select>
    </div>
  </header>
  <div class="row subtle" style="font-size:12px;margin:4px 0 8px">${esc(c.rm.name)} · ${esc(c.rm.coverage)}${c.meeting?` · встреча ${esc(c.meeting.when)}, ${esc(c.meeting.with)}`:""}</div>
  <div class="tape"><div class="tape-in">${[...TAPE,...TAPE].map(([k,v])=>`<span><b class="fg">${k}</b> ${v}</span>`).join("")}</div></div>
  <nav class="tabs">${tabs.map(([id,l])=>`<a href="#/${id}" class="${tab===id?"on":""}">${l}</a>`).join("")}</nav>`;
}
function insightCard(i, featured){
  return `<a class="card ${featured?"hero":""}" href="#/insight/${i.id}" style="display:block">
    <div class="row" style="margin-bottom:8px">
      <span class="chip ${i.type}">${TYPE[i.type]}</span>
      <span class="chip">${IMPACT[i.impact]}</span>
      <span class="chip">${HORIZON[i.horizon]}</span>
      <span class="score" style="margin-left:auto">${i.relevance}</span>
    </div>
    <h3 style="font-size:${featured?22:16}px;line-height:1.25">${esc(i.headline)}</h3>
    <p class="muted" style="font-size:14px;margin:8px 0 0">${esc(i.thesis)}</p>
    ${i.products?.[0]?`<p class="subtle" style="font-size:12px;margin:10px 0 0">${esc(i.products[0].product)}</p>`:""}
  </a>`;
}
function home(){
  return `<header class="top">
    <div class="row" style="font-family:Unbounded,sans-serif;font-size:14px"><span class="mark">К</span> Альфа Контекст</div>
    <a class="subtle" href="#/method" style="font-size:13px">О решении</a>
  </header>
  <p class="kicker" style="margin-top:28px">Корпоративно-инвестиционный бизнес</p>
  <h1 style="font-size:clamp(28px,5vw,44px);margin:12px 0 14px">Новостная аналитика, которая знает вашего клиента</h1>
  <p class="muted" style="max-width:62ch">Выберите покрытие — одна лента банка станет персональным брифингом: риски, возможности, продукт КИБ и что сказать CFO.</p>
  <div class="grid g2" style="margin-top:28px">${DATA.companies.map(c=>{
    const n = insightsFor(c.id).length;
    return `<button class="card" style="text-align:left" onclick="localStorage.setItem('alfa-cid','${c.id}');location.hash='#/briefing'">
      <div class="row"><strong>${esc(c.short)}</strong><span class="chip">${c.ticker}</span></div>
      <p class="subtle" style="font-size:12px;margin:6px 0 0">${esc(c.sector)} · ${esc(c.city)}</p>
      <p class="muted" style="font-size:13px;margin:10px 0 0">${esc(c.thesis)}</p>
      <p class="subtle" style="font-size:12px;margin:12px 0 0">${n} инсайтов · RM ${esc(c.rm.name)}</p>
    </button>`;
  }).join("")}</div>
  <footer class="note">Хакатон Альфа-Банка · трек КИБ. Один HTML-файл, без сервера.</footer>`;
}
function briefing(c){
  const list = insightsFor(c.id);
  const [hero,...rest]=list;
  const counts={risk:list.filter(i=>i.type==="risk").length,opportunity:list.filter(i=>i.type==="opportunity").length,event:list.filter(i=>i.type==="event").length};
  const actions=list.filter(i=>i.impact!=="low").slice(0,4);
  return topBar(c,"briefing")+`
    <p class="kicker">Утренний брифинг</p>
    <h1 style="font-size:clamp(22px,4vw,36px);margin:8px 0 10px">${esc(c.short)}: что важно сегодня</h1>
    <p class="muted" style="max-width:62ch">${esc(c.thesis)}</p>
    <div class="row" style="gap:24px;margin:16px 0 24px;font-size:14px">
      <div><div class="subtle">Риски</div><div style="color:var(--risk)">${counts.risk}</div></div>
      <div><div class="subtle">Возможности</div><div style="color:var(--opp)">${counts.opportunity}</div></div>
      <div><div class="subtle">События</div><div style="color:var(--event)">${counts.event}</div></div>
    </div>
    ${hero?insightCard(hero,true):""}
    <div class="grid g2" style="margin-top:12px">${rest.slice(0,4).map(i=>insightCard(i)).join("")}</div>
    <div class="card" style="margin-top:28px">
      <h2 style="font-size:18px">Действия на сегодня</h2>
      <ol style="padding-left:18px;color:var(--muted)">${actions.map(a=>`<li style="margin:10px 0"><span class="fg">${esc(a.action)}</span><div class="subtle" style="font-size:12px">${esc(a.headline)}</div></li>`).join("")}</ol>
    </div>`;
}
function signals(c){
  const list = insightsFor(c.id);
  return topBar(c,"signals")+`<h1 style="font-size:28px;margin-bottom:16px">Сигналы покрытия</h1>
    <div class="grid">${list.map(i=>insightCard(i)).join("")}</div>`;
}
function news(c){
  const list = ranked(c);
  return topBar(c,"news")+`<h1 style="font-size:28px;margin-bottom:8px">Лента</h1>
    <p class="muted" style="margin-bottom:16px">Ранжирование под ${esc(c.short)}. Балл — формула тикер + чувствительности + теги.</p>
    <div class="grid">${list.map(({item,hit})=>`
      <a class="card" href="#/news/${item.id}" style="display:block">
        <div class="row" style="margin-bottom:6px">
          <span class="subtle" style="font-size:12px">${esc(item.source)} · ${formatWhen(item.publishedAt)}</span>
          <span class="score" style="margin-left:auto">${hit.score}</span>
        </div>
        <h3 style="font-size:16px">${esc(item.title)}</h3>
        <p class="muted" style="font-size:13px;margin:6px 0 0">${esc(item.lede)}</p>
        <div class="row" style="margin-top:10px">${hit.reasons.map(r=>`<span class="chip">${esc(r.label)}</span>`).join("")}</div>
      </a>`).join("")}</div>`;
}
function newsDetail(c,id){
  const item = newsById(id); if(!item) return briefing(c);
  const hit = explain(item,c);
  const linked = DATA.insights.filter(i=>i.newsId===id && i.companyId===c.id);
  return topBar(c,"news")+`
    <a class="subtle" href="#/news" style="font-size:13px">← Лента</a>
    <p class="subtle" style="margin:12px 0 6px">${esc(item.source)} · ${formatWhen(item.publishedAt)}</p>
    <h1 style="font-size:clamp(22px,4vw,34px)">${esc(item.title)}</h1>
    <div class="row" style="margin:12px 0">${hit.reasons.map(r=>`<span class="chip">${esc(r.label)} · ${r.weight}</span>`).join("")}<span class="score" style="margin-left:8px">${hit.score}</span></div>
    <p class="muted">${esc(item.lede)}</p>
    <p class="muted">${esc(item.body)}</p>
    ${linked.length?`<h2 style="margin:28px 0 12px;font-size:18px">Инсайт для ${esc(c.short)}</h2>`+linked.map(i=>insightCard(i,true)).join(""):""}`;
}
function dossier(c){
  const sens = Object.entries(c.sensitivities||{}).sort((a,b)=>b[1]-a[1]);
  return topBar(c,"dossier")+`
    <h1 style="font-size:28px">${esc(c.name)}</h1>
    <p class="muted">${esc(c.description)}</p>
    <p class="subtle" style="margin:8px 0 20px">${c.ticker} · ИНН ${c.inn} · ${esc(c.city)}</p>
    <div class="grid g2">
      <div class="card"><h2 style="font-size:16px;margin-bottom:12px">KPI</h2>${c.kpis.map(k=>`<div class="row" style="justify-content:space-between;margin:8px 0"><span class="subtle">${esc(k.label)}</span><span>${esc(k.value)}</span></div>`).join("")}</div>
      <div class="card"><h2 style="font-size:16px;margin-bottom:12px">Экспозиции</h2>${c.exposures.map(e=>`<div style="margin:10px 0"><div class="row" style="justify-content:space-between"><span>${esc(e.label)}</span><span class="subtle">${e.share}%</span></div><div class="bar"><i style="width:${e.share}%"></i></div></div>`).join("")}</div>
    </div>
    <div class="card" style="margin-top:12px"><h2 style="font-size:16px;margin-bottom:12px">Чувствительности</h2>
      ${sens.map(([k,v])=>`<div style="margin:10px 0"><div class="row" style="justify-content:space-between"><span>${SENS[k]||k}</span><span class="subtle">${v}</span></div><div class="bar"><i style="width:${Math.round(v*100)}%"></i></div></div>`).join("")}
    </div>
    <div class="card" style="margin-top:12px"><h2 style="font-size:16px;margin-bottom:12px">Продукты КИБ</h2>
      ${c.products.map(p=>`<div class="row" style="justify-content:space-between;margin:8px 0"><span>${esc(p.name)}</span><span class="chip">${STATUS[p.status]}</span></div>`).join("")}
    </div>
    ${c.meeting?`<div class="card" style="margin-top:12px"><h2 style="font-size:16px">Ближайшая встреча</h2><p class="muted">${esc(c.meeting.when)} · ${esc(c.meeting.with)} · ${esc(c.meeting.topic)}</p></div>`:""}
    <p class="subtle" style="margin-top:16px;font-size:13px">Конкуренты: ${c.competitors.map(esc).join(", ")}</p>`;
}
function insight(c,id){
  const i = insightById(id); if(!i) return briefing(c);
  const item = newsById(i.newsId);
  return topBar(c,"signals")+`
    <a class="subtle" href="#/briefing" style="font-size:13px">← Брифинг</a>
    <div class="row" style="margin:14px 0 8px"><span class="chip ${i.type}">${TYPE[i.type]}</span><span class="chip">${IMPACT[i.impact]}</span><span class="chip">${HORIZON[i.horizon]}</span><span class="score">${i.relevance}</span></div>
    <h1 style="font-size:clamp(22px,4vw,34px)">${esc(i.headline)}</h1>
    <p class="muted">${esc(i.thesis)}</p>
    <h2 style="margin:24px 0 8px;font-size:16px">Почему это про ${esc(c.short)}</h2>
    <ul class="muted">${(i.why||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
    <h2 style="margin:24px 0 8px;font-size:16px">Продукты</h2>
    <div class="grid">${(i.products||[]).map(p=>`<div class="card"><strong>${esc(p.product)}</strong><p class="muted" style="margin:6px 0 0">${esc(p.action)}</p></div>`).join("")}</div>
    <h2 style="margin:24px 0 8px;font-size:16px">Что сказать на встрече</h2>
    <ol class="muted">${(i.talkingPoints||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ol>
    <div class="card hero" style="margin-top:16px"><strong>Next action.</strong> <span class="muted">${esc(i.action)}</span></div>
    ${item?`<p class="subtle" style="margin-top:16px">Источник: <a href="#/news/${item.id}" class="fg">${esc(item.title)}</a></p>`:""}`;
}
function method(){
  return `<header class="top">
    <a href="#/" class="row" style="font-family:Unbounded,sans-serif;font-size:14px"><span class="mark">К</span> Альфа Контекст</a>
  </header>
  <h1 style="margin:24px 0 12px">Как это устроено</h1>
  <p class="muted">Скоринг решает, стоит ли читать. Инсайт пишет so-what и продукт КИБ. Одна лента, разный ранг у Северстали и X5.</p>
  <div class="card" style="margin:16px 0;font-family:Unbounded,sans-serif">score = clip 6…97 ( 10 + T + S1 + S2 + S3 + G + C )</div>
  <p class="muted">Тикер +26. Топ-3 чувствительности: экспозиция × 22 / 12 / 7. Теги до +10, если чувствительностей меньше двух. Конкурент в тексте +8.</p>
  <p class="muted">Пример: CBAM × Северсталь ≈ 72 (тикер CHMF + сталь + ESG + ЕС). Та же новость × X5 ≈ 10.</p>
  <p style="margin-top:20px"><a class="btn" href="#/">К покрытиям</a></p>`;
}
function render(){
  const r = route();
  if (r.page==="home" || r.page===""){ $.innerHTML = home(); return; }
  if (r.page==="method"){ $.innerHTML = method(); return; }
  let cid = getCid();
  if (!cid){ go("#/"); return; }
  const c = company(cid); if(!c){ go("#/"); return; }
  if (r.page==="briefing") $.innerHTML = briefing(c);
  else if (r.page==="signals") $.innerHTML = signals(c);
  else if (r.page==="news" && r.a) $.innerHTML = newsDetail(c,r.a);
  else if (r.page==="news") $.innerHTML = news(c);
  else if (r.page==="dossier") $.innerHTML = dossier(c);
  else if (r.page==="insight" && r.a) $.innerHTML = insight(c,r.a);
  else $.innerHTML = briefing(c);
  window.scrollTo(0,0);
}
window.addEventListener("hashchange", render);
render();
</script>
</body>
</html>
'''

out = HTML.replace("__DATA__", DATA)
dests = [
    Path("/workspace/artifacts/Alfa-Kontekst.html"),
    Path("/workspace/artifacts/Альфа-Контекст.html"),
    Path("/workspace/public/Alfa-Kontekst.html"),
]
for d in dests:
    d.write_text(out, encoding="utf-8")
    print(d, d.stat().st_size)
