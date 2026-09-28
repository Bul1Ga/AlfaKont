import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { companies, insightsFor } from "@/lib/data";
import { useDesk } from "@/lib/store";
import { TYPE_LABEL } from "@/lib/format";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const navigate = useNavigate();
  const setCompanyId = useDesk((s) => s.setCompanyId);

  function openCompany(id: string) {
    setCompanyId(id);
    void navigate({ to: "/desk" });
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="pointer-events-none fixed inset-y-0 left-0 w-1 bg-accent" />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-xs bg-accent font-display text-sm font-medium text-accent-fg">
            К
          </span>
          <span className="font-display text-sm tracking-tight">Альфа Контекст</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/method" className="text-sm text-muted hover:text-fg">
            О решении
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-8 pt-6 md:px-6 md:pb-12 md:pt-14">
        <p className="text-xs uppercase tracking-widest text-subtle">
          Корпоративно-инвестиционный бизнес
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Новостная аналитика, которая знает вашего клиента
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Поток новостей и аналитики Альфа-Банка пропускается через контекст конкретной компании:
          риски, возможности и события становятся персональными инсайтами и поводом для разговора RM.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => openCompany("severstal")}>
            Открыть стол · Северсталь
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="secondary" onClick={() => void navigate({ to: "/method" })}>
            Как это устроено
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-lg font-medium">Портфель покрытия</h2>
          <p className="text-xs text-subtle">Выберите клиента — брифинг пересоберётся под него</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {companies.map((c) => {
            const top = insightsFor(c.id)[0];
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => openCompany(c.id)}
                className="rounded-lg border border-border bg-surface p-5 text-left shadow-card transition-colors duration-150 hover:border-fg/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs tabular-nums text-subtle">{c.ticker}</p>
                    <h3 className="mt-1 font-display text-xl font-medium">{c.short}</h3>
                    <p className="mt-1 text-sm text-muted">{c.sector}</p>
                  </div>
                  <span className="rounded-xs bg-surface-2 px-2 py-1 text-xs text-subtle">
                    {c.rm.coverage}
                  </span>
                </div>
                {top ? (
                  <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted">
                    <span className="text-fg">{TYPE_LABEL[top.type]}.</span> {top.headline}
                  </p>
                ) : null}
                <p className="mt-4 text-xs text-subtle">
                  RM · {c.rm.name}
                  <span className="ml-3 inline-flex items-center gap-1 text-fg">
                    Открыть стол
                    <ArrowRight className="size-3.5" />
                  </span>
                </p>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
