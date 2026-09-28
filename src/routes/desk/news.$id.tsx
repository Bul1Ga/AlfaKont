import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, LoaderCircle, ScanSearch } from "lucide-react";
import { toast } from "sonner";
import { analyzeNews } from "@/lib/ai";
import { companyById, explainRelevance, insightsFor, newsById } from "@/lib/data";
import { formatWhen } from "@/lib/format";
import { useDesk } from "@/lib/store";
import { Analyst } from "@/components/analyst";
import { Button } from "@/components/ui/button";
import { Score } from "@/components/marks";

export const Route = createFileRoute("/desk/news/$id")({ component: NewsDetail });

function NewsDetail() {
  const { id } = Route.useParams();
  const companyId = useDesk((s) => s.companyId);
  const addInsight = useDesk((s) => s.addInsight);
  const extra = useDesk((s) => s.extraInsights);
  const [pending, setPending] = useState(false);
  const company = companyId ? companyById[companyId] : undefined;
  const item = newsById[id];
  if (!company || !item) {
    return <p className="text-muted">Материал не найден.</p>;
  }
  const hit = explainRelevance(item, company);
  const related = [
    ...extra.filter((i) => i.newsId === item.id && i.companyId === company.id),
    ...insightsFor(company.id).filter((i) => i.newsId === item.id),
  ];
  const clientId = company.id;
  const newsId = item.id;

  async function onAnalyze() {
    setPending(true);
    try {
      const res = await analyzeNews({ data: { companyId: clientId, newsId } });
      if (!res.ok) {
        toast.error(res.error);
        return;
      }
      addInsight(res.insight);
      toast.success("Инсайт собран под этого клиента");
    } finally {
      setPending(false);
    }
  }

  return (
    <article className="max-w-3xl">
      <Link to="/desk/news" className="inline-flex h-11 items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft className="size-4" />
        К ленте
      </Link>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-subtle">
            {item.source} · {formatWhen(item.publishedAt)}
          </p>
          <h1 className="mt-2 font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            {item.title}
          </h1>
        </div>
        <Score value={hit.score} />
      </div>
      <p className="mt-4 text-base leading-relaxed text-muted">{item.lede}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>

      <section className="mt-8 rounded-lg border border-border bg-surface p-5">
        <h2 className="font-display text-base font-medium">Почему это про {company.short}</h2>
        <ul className="mt-3 space-y-2">
          {hit.reasons.map((r) => (
            <li key={r.label} className="flex justify-between gap-3 text-sm">
              <span className="text-muted">{r.label}</span>
              <span className="tabular-nums text-subtle">+{r.weight}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-5" onClick={() => void onAnalyze()} disabled={pending}>
          {pending ? <LoaderCircle className="size-4 animate-spin" /> : <ScanSearch className="size-4" />}
          Собрать инсайт для {company.short}
        </Button>
      </section>

      {related.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-base font-medium">Уже разобрано</h2>
          <ul className="mt-3 space-y-2">
            {related.map((i) => (
              <li key={i.id}>
                <Link
                  to="/desk/insight/$id"
                  params={{ id: i.id }}
                  className="text-sm text-fg underline-offset-4 hover:underline"
                >
                  {i.headline}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8">
        <Analyst companyId={company.id} newsId={item.id} />
      </div>
    </article>
  );
}
