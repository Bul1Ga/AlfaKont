import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/method")({ component: Method });

const TEAM = [
  {
    role: "Product / UX / BA",
    does: "Модель контекста клиента, карта продуктов КИБ, сценарий RM, критерии «хорошего инсайта».",
  },
  {
    role: "Frontend Developer",
    does: "Стол RM: брифинг, лента, досье, смена клиента. Демо за 90 секунд без пояснений за кадром.",
  },
  {
    role: "Backend Developer",
    does: "Нормализация потока Альфа-Аналитики, API досье, кэш инсайтов, доставка в стол RM.",
  },
  {
    role: "ML / LLM Engineer",
    does: "Ранжирование релевантности: тикер, теги, чувствительности, география, конкуренты.",
  },
  {
    role: "ML / LLM / Prompt Engineer",
    does: "Промпт «новость × компания × кошелёк продуктов». Talking points и next action, не саммари.",
  },
];

const STEPS = [
  { t: "Поток", d: "Альфа-Аналитика, регуляторы, котировки, лента. Одна нормализованная карточка." },
  { t: "Контекст", d: "Досье клиента: экспозиции, чувствительности, конкуренты, живые продукты КИБ, ближайшая встреча." },
  { t: "Ранг", d: "Прозрачный скоринг. Одна новость даёт 92 для Северстали и 12 для Яндекса." },
  { t: "Инсайт", d: "LLM пишет so-what, не пересказ. Тип: риск / возможность / событие." },
  { t: "Продукт", d: "Маппинг на DCM, FX, trade finance, ESG-RCF, SCF, гарантии — с формулировкой для RM." },
  { t: "Брифинг", d: "Утренний пакет на 4 минуты и повестка встречи с CFO." },
];

function Method() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="pointer-events-none fixed inset-y-0 left-0 w-1 bg-accent" />
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-14">
        <Link to="/" className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" />
          На старт
        </Link>
        <p className="mt-8 text-xs uppercase tracking-widest text-subtle">Трек КИБ · команда 5 человек</p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
          Альфа Контекст
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Руководителю крупного бизнеса и его RM не нужна ещё одна лента. Нужен ответ: что из потока
          новостей меняет риски, возможности и разговор с этим клиентом на этой неделе — и какой
          продукт банка стоит положить на стол.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium">Почему этот трек</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Рекомендованный состав совпадает с командой из пяти человек один в один. Ценность для КИБ
            проверяется на демо: переключите клиента — та же новость CBAM становится главным риском
            для Северстали и фоном для Яндекса. Универсальный саммаризатор этого не умеет.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium">Конвейер</h2>
          <ol className="mt-4 space-y-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex gap-4 rounded-md border border-border bg-surface p-4">
                <span className="font-mono text-xs tabular-nums text-subtle">0{i + 1}</span>
                <span>
                  <span className="block text-sm font-medium">{s.t}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">{s.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium">Кто что делает</h2>
          <ul className="mt-4 space-y-3">
            {TEAM.map((m) => (
              <li key={m.role} className="rounded-md border border-border bg-surface p-4">
                <p className="text-sm font-medium">{m.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{m.does}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium">Сценарий демо на 90 секунд</h2>
          <ol className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            <li>1. Открыть стол Северстали — утренний брифинг с CBAM и китайским HRC.</li>
            <li>2. Зайти в разбор CBAM: продукты ESG-RCF и talking points к встрече 2 октября.</li>
            <li>3. Та же лента у X5: инфляция и SCF, не углерод.</li>
            <li>4. В новости нажать «собрать инсайт» — живой вызов модели в контексте клиента.</li>
            <li>5. Спросить аналитика: «что сказать CFO про DCM на этой неделе?»</li>
          </ol>
        </section>

        <section className="mt-10 mb-16">
          <h2 className="font-display text-xl font-medium">Что в прототипе</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Шесть клиентов покрытия, восемнадцать материалов, заранее собранные инсайты для мгновенного
            демо и живой LLM-разбор по кнопке. Скоринг релевантности — честный и читаемый, не чёрный
            ящик. В хакатоне дальше: подключить боевой поток Альфа-Аналитики, граф контрагентов и
            пуш в календарь RM.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
          >
            К портфелю
          </Link>
        </section>
      </div>
    </div>
  );
}
