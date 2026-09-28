import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Building2,
  ChevronDown,
  FileText,
  Newspaper,
  Radio,
  Waypoints,
} from "lucide-react";
import { companies, companyById, TAPE } from "@/lib/data";
import { useDesk } from "@/lib/store";
import { cn } from "@/lib/utils";
import { formatDay } from "@/lib/format";

const NAV = [
  { to: "/desk", label: "Брифинг", icon: FileText, exact: true },
  { to: "/desk/signals", label: "Сигналы", icon: Radio, exact: false },
  { to: "/desk/news", label: "Лента", icon: Newspaper, exact: false },
  { to: "/desk/dossier", label: "Досье", icon: Building2, exact: false },
] as const;

export function DeskShell() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const companyId = useDesk((s) => s.companyId);
  const setCompanyId = useDesk((s) => s.setCompanyId);
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    if (hydrated && !companyId) {
      void navigate({ to: "/" });
    }
  }, [hydrated, companyId, navigate]);

  const company = companyId ? companyById[companyId] : undefined;

  if (!hydrated || !company) {
    return (
      <div className="grid min-h-dvh place-items-center bg-bg text-muted">
        <p className="text-sm">Собираем стол RM…</p>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="pointer-events-none fixed inset-y-0 left-0 w-1 bg-accent" />
      <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:px-6">
          <Link to="/desk" className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-xs bg-accent font-display text-sm font-medium text-accent-fg">
              К
            </span>
            <span className="min-w-0">
              <span className="block font-display text-sm font-medium leading-none tracking-tight">
                Альфа Контекст
              </span>
              <span className="mt-1 block text-xs text-subtle">КИБ · ДСП</span>
            </span>
          </Link>

          <div className="relative ml-auto">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 max-w-56 items-center gap-2 rounded-md border border-border bg-surface px-3 text-left md:max-w-xs"
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium">{company.short}</span>
                <span className="block truncate text-xs text-subtle">
                  {company.ticker} · {company.sector}
                </span>
              </span>
              <ChevronDown className="ml-1 size-4 shrink-0 text-subtle" />
            </button>
            {open ? (
              <div className="absolute right-0 z-40 mt-2 w-72 overflow-hidden rounded-md border border-border bg-surface-2 shadow-card">
                {companies.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setCompanyId(c.id);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full flex-col px-3 py-2.5 text-left hover:bg-surface",
                      c.id === company.id && "bg-surface",
                    )}
                  >
                    <span className="text-sm">{c.short}</span>
                    <span className="text-xs text-subtle">
                      {c.ticker} · {c.sector}
                    </span>
                  </button>
                ))}
                <Link
                  to="/"
                  className="block border-t border-border px-3 py-2.5 text-xs text-muted hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  Сменить портфель
                </Link>
              </div>
            ) : null}
          </div>

          <Link
            to="/method"
            className="hidden h-11 items-center rounded-md px-3 text-sm text-muted hover:text-fg md:inline-flex"
          >
            О решении
          </Link>
        </div>

        <div className="mx-auto hidden max-w-6xl items-center gap-1 px-4 pb-2 md:flex md:px-6">
          {NAV.map((item) => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-sm px-3 text-sm",
                  active ? "bg-surface text-fg" : "text-muted hover:text-fg",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
          <span className="ml-auto text-xs capitalize text-subtle">{formatDay()}</span>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <div className="min-w-0">
          <p className="truncate text-xs text-subtle">
            {company.rm.title} · {company.rm.coverage}
          </p>
          <p className="truncate text-sm text-muted">{company.rm.name}</p>
        </div>
        {company.meeting ? (
          <p className="hidden text-right text-xs text-muted sm:block">
            Следующая встреча
            <span className="mt-0.5 block text-fg">
              {company.meeting.when} · {company.meeting.with}
            </span>
          </p>
        ) : null}
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-28 md:px-6 md:pb-16">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg/95 backdrop-blur-sm md:hidden">
        <div className="grid grid-cols-5">
          {NAV.map((item) => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-14 flex-col items-center justify-center gap-0.5 text-xs",
                  active ? "text-fg" : "text-subtle",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/method"
            className={cn(
              "flex h-14 flex-col items-center justify-center gap-0.5 text-xs",
              pathname === "/method" ? "text-fg" : "text-subtle",
            )}
          >
            <Waypoints className="size-4" />
            Метод
          </Link>
        </div>
      </nav>
    </div>
  );
}

export function Tape() {
  const doubled = [...TAPE, ...TAPE, ...TAPE, ...TAPE];
  return (
    <div className="mb-6 overflow-hidden rounded-md border border-border bg-surface">
      <div className="tape-track flex w-max gap-8 px-4 py-2.5 text-xs tabular-nums text-muted">
        {doubled.map((q, i) => (
          <span key={`${q.k}-${i}`} className="flex items-center gap-2">
            <span className="text-subtle">{q.k}</span>
            <span className="text-fg">{q.v}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
