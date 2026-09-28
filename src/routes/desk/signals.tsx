import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { companyById, insightsFor } from "@/lib/data";
import type { InsightType } from "@/lib/data/types";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";
import { InsightCard } from "@/components/insight-card";

export const Route = createFileRoute("/desk/signals")({ component: Signals });

const FILTERS: { id: "all" | InsightType; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "risk", label: "Риски" },
  { id: "opportunity", label: "Возможности" },
  { id: "event", label: "События" },
];

function Signals() {
  const companyId = useDesk((s) => s.companyId);
  const extra = useDesk((s) => s.extraInsights);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const company = companyId ? companyById[companyId] : undefined;
  if (!company) return null;

  const list = [
    ...extra.filter((i) => i.companyId === company.id),
    ...insightsFor(company.id).filter((i) => !extra.some((e) => e.id === i.id)),
  ].filter((i) => (filter === "all" ? true : i.type === filter));

  return (
    <div>
      <header className="mb-6">
        <h1 className="font-display text-2xl font-medium tracking-tight">Сигналы</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Не новости, а вывод: что это значит для {company.short} и какой продукт КИБ уместен.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "h-9 rounded-sm px-3 text-sm",
                filter === f.id ? "bg-paper text-bg" : "bg-surface text-muted hover:text-fg",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>
      <div className="grid gap-3">
        {list.map((i) => (
          <InsightCard key={i.id} insight={i} />
        ))}
      </div>
    </div>
  );
}
