import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { companyById, insightsById, newsById } from "@/lib/data";
import { formatWhen, HORIZON_LABEL, IMPACT_LABEL } from "@/lib/format";
import { useDesk } from "@/lib/store";
import { Analyst } from "@/components/analyst";
import { HorizonMark, ImpactMark, Score, TypeMark } from "@/components/marks";

export const Route = createFileRoute("/desk/insight/$id")({ component: InsightPage });

function InsightPage() {
  const { id } = Route.useParams();
  const extra = useDesk((s) => s.extraInsights);
  const companyId = useDesk((s) => s.companyId);
  const insight = extra.find((i) => i.id === id) ?? insightsById[id];
  const company = companyId ? companyById[companyId] : undefined;
  if (!insight || !company) {
    return <p className="text-muted">Инсайт не найден. Вернитесь к брифингу.</p>;
  }
  const newsItem = newsById[insight.newsId];

  return (
    <article className="max-w-3xl">
      <Link to="/desk" className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft className="size-4" />
        К брифингу
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <TypeMark type={insight.type} />
          <ImpactMark impact={insight.impact} />
          <HorizonMark horizon={insight.horizon} />
        </div>
        <Score value={insight.relevance} />
      </div>

      <h1 className="mt-4 font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
        {insight.headline}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{insight.thesis}</p>

      <dl className="mt-6 grid grid-cols-3 gap-3 rounded-lg border border-border bg-surface p-4 text-sm">
        <div>
          <dt className="text-xs text-subtle">Влияние</dt>
          <dd>{IMPACT_LABEL[insight.impact]}</dd>
        </div>
        <div>
          <dt className="text-xs text-subtle">Горизонт</dt>
          <dd>{HORIZON_LABEL[insight.horizon]}</dd>
        </div>
        <div>
          <dt className="text-xs text-subtle">Уверенность</dt>
          <dd className="tabular-nums">{Math.round(insight.confidence * 100)}%</dd>
        </div>
      </dl>

      {insight.why.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-lg font-medium">Почему это про {company.short}</h2>
          <ul className="mt-3 space-y-2">
            {insight.why.map((w) => (
              <li key={w} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {w}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {insight.products.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-lg font-medium">Продукты КИБ</h2>
          <div className="mt-3 grid gap-3">
            {insight.products.map((p) => (
              <div key={p.product} className="rounded-md border border-border bg-surface p-4">
                <p className="text-sm font-medium">{p.product}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.action}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {insight.talkingPoints.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-lg font-medium">Talking points для RM</h2>
          <ol className="mt-3 space-y-2">
            {insight.talkingPoints.map((t, i) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed">
                <span className="grid size-6 shrink-0 place-items-center rounded-xs bg-surface-2 font-mono text-xs tabular-nums text-muted">
                  {i + 1}
                </span>
                {t}
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="mt-8 rounded-lg border border-accent/40 bg-surface p-5">
        <p className="text-xs uppercase tracking-widest text-subtle">Следующий шаг</p>
        <p className="mt-2 text-base leading-relaxed">{insight.action}</p>
      </section>

      {newsItem ? (
        <p className="mt-6 text-sm text-muted">
          Источник:{" "}
          <Link
            to="/desk/news/$id"
            params={{ id: newsItem.id }}
            className="text-fg underline-offset-4 hover:underline"
          >
            {newsItem.title}
          </Link>
          <span className="text-subtle"> · {formatWhen(newsItem.publishedAt)}</span>
        </p>
      ) : null}

      <div className="mt-8">
        <Analyst
          companyId={company.id}
          newsId={insight.newsId}
          insightHeadline={insight.headline}
        />
      </div>
    </article>
  );
}
