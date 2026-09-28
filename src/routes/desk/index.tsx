import { createFileRoute } from "@tanstack/react-router";
import { companyById, insightsFor } from "@/lib/data";
import { useDesk } from "@/lib/store";
import { minutesToRead } from "@/lib/format";
import { InsightCard } from "@/components/insight-card";
import { Tape } from "@/components/shell";

export const Route = createFileRoute("/desk/")({ component: Briefing });

function Briefing() {
  const companyId = useDesk((s) => s.companyId);
  const extra = useDesk((s) => s.extraInsights);
  const company = companyId ? companyById[companyId] : undefined;
  if (!company) return null;

  const list = [
    ...extra.filter((i) => i.companyId === company.id),
    ...insightsFor(company.id).filter((i) => !extra.some((e) => e.id === i.id)),
  ];
  const [hero, ...rest] = list;
  const actions = list.filter((i) => i.impact !== "low").slice(0, 4);
  const counts = {
    risk: list.filter((i) => i.type === "risk").length,
    opportunity: list.filter((i) => i.type === "opportunity").length,
    event: list.filter((i) => i.type === "event").length,
  };
  const read = minutesToRead(list.map((i) => i.thesis).join(" "));

  return (
    <div>
      <Tape />
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-subtle">Утренний брифинг</p>
        <h1 className="mt-2 font-display text-2xl font-medium tracking-tight md:text-4xl">
          {company.short}: что важно сегодня
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {company.thesis}
        </p>
        <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div>
            <dt className="text-subtle">Риски</dt>
            <dd className="tabular-nums text-risk">{counts.risk}</dd>
          </div>
          <div>
            <dt className="text-subtle">Возможности</dt>
            <dd className="tabular-nums text-opportunity">{counts.opportunity}</dd>
          </div>
          <div>
            <dt className="text-subtle">События</dt>
            <dd className="tabular-nums text-event">{counts.event}</dd>
          </div>
          <div>
            <dt className="text-subtle">Чтение</dt>
            <dd className="tabular-nums">{read} мин</dd>
          </div>
        </dl>
      </header>

      {hero ? <InsightCard insight={hero} featured /> : null}

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {rest.slice(0, 4).map((i) => (
          <InsightCard key={i.id} insight={i} />
        ))}
      </div>

      <section className="mt-10 rounded-lg border border-border bg-surface p-5 md:p-6">
        <h2 className="font-display text-lg font-medium">Действия на сегодня</h2>
        <ol className="mt-4 space-y-3">
          {actions.map((a, idx) => (
            <li key={a.id} className="flex gap-3 text-sm leading-relaxed">
              <span className="grid size-6 shrink-0 place-items-center rounded-xs bg-surface-2 font-mono text-xs tabular-nums text-muted">
                {idx + 1}
              </span>
              <span>
                <span className="block text-fg">{a.action}</span>
                <span className="text-xs text-subtle">{a.headline}</span>
              </span>
            </li>
          ))}
        </ol>
        {company.meeting ? (
          <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
            Якорь повестки: {company.meeting.when}, {company.meeting.with} — {company.meeting.topic}.
          </p>
        ) : null}
      </section>
    </div>
  );
}
