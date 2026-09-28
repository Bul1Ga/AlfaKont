import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { companyById, news, rankedNews } from "@/lib/data";
import { useDesk } from "@/lib/store";

export const Route = createFileRoute("/desk/dossier")({ component: Dossier });

const STATUS: Record<string, string> = {
  active: "в работе",
  pipeline: "pipeline",
  dormant: "спит",
};

function Dossier() {
  const companyId = useDesk((s) => s.companyId);
  const company = companyId ? companyById[companyId] : undefined;
  if (!company) return null;
  const topNews = rankedNews(news, company).slice(0, 3);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <section className="lg:col-span-2">
        <p className="font-mono text-xs tabular-nums text-subtle">{company.ticker} · ИНН {company.inn}</p>
        <h1 className="mt-1 font-display text-2xl font-medium tracking-tight md:text-3xl">
          {company.name}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{company.description}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg">{company.thesis}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {company.kpis.map((k) => (
            <div key={k.label} className="rounded-md border border-border bg-surface p-3">
              <p className="text-xs text-subtle">{k.label}</p>
              <p className="mt-1 font-display text-lg tabular-nums">{k.value}</p>
              <p className="text-xs text-subtle">{k.hint}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-surface p-4 md:p-5">
          <h2 className="font-display text-base font-medium">Структура выручки</h2>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={company.exposures} layout="vertical" margin={{ left: 8, right: 8 }}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="label"
                  width={132}
                  tick={{ fill: "#9a9a96", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: "#1c1c1f" }}
                  contentStyle={{
                    background: "#141416",
                    border: "1px solid #2a2a2c",
                    borderRadius: 8,
                    color: "#f3f1ec",
                  }}
                  formatter={(v: number) => [`${v}%`, "доля"]}
                />
                <Bar dataKey="share" fill="#ef3124" radius={[0, 4, 4, 0]} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <section className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-base font-medium">Продуктовый кошелёк</h2>
          <ul className="mt-3 space-y-2">
            {company.products.map((p) => (
              <li key={p.name} className="flex items-center justify-between gap-2 text-sm">
                <span>{p.name}</span>
                <span className="text-xs text-subtle">{STATUS[p.status]}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-base font-medium">Конкуренты и география</h2>
          <p className="mt-3 text-sm text-muted">{company.competitors.join(" · ")}</p>
          <p className="mt-2 text-sm text-subtle">{company.geography.join(" · ")}</p>
        </section>
        <section className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-base font-medium">Чувствительности</h2>
          <ul className="mt-3 space-y-2">
            {Object.entries(company.sensitivities)
              .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
              .slice(0, 6)
              .map(([k, v]) => (
                <li key={k} className="text-sm">
                  <div className="flex justify-between text-xs text-subtle">
                    <span>{k}</span>
                    <span className="tabular-nums">{Math.round((v ?? 0) * 100)}</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-surface-2">
                    <div
                      className="h-1 rounded-full bg-accent"
                      style={{ width: `${Math.round((v ?? 0) * 100)}%` }}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </section>
        <section className="rounded-lg border border-border bg-surface p-5">
          <h2 className="font-display text-base font-medium">Лента под этого клиента</h2>
          <ul className="mt-3 space-y-2">
            {topNews.map(({ item, hit }) => (
              <li key={item.id} className="text-sm leading-snug">
                <span className="mr-2 font-mono text-xs tabular-nums text-accent">{hit.score}</span>
                {item.title}
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
