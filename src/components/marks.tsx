import { cn } from "@/lib/utils";
import { HORIZON_LABEL, IMPACT_LABEL, TYPE_LABEL } from "@/lib/format";
import type { Horizon, Impact, InsightType } from "@/lib/data/types";

export function TypeMark({ type }: { type: InsightType }) {
  const tone =
    type === "risk"
      ? "text-risk bg-risk/10"
      : type === "opportunity"
        ? "text-opportunity bg-opportunity/10"
        : "text-event bg-event/10";
  return (
    <span className={cn("inline-flex h-6 items-center px-2 text-xs font-medium rounded-xs", tone)}>
      {TYPE_LABEL[type]}
    </span>
  );
}

export function ImpactMark({ impact }: { impact: Impact }) {
  return (
    <span className="text-xs text-muted">
      Влияние · {IMPACT_LABEL[impact]}
    </span>
  );
}

export function HorizonMark({ horizon }: { horizon: Horizon }) {
  return <span className="text-xs text-muted">{HORIZON_LABEL[horizon]}</span>;
}

export function Score({ value, size = "md" }: { value: number; size?: "sm" | "md" }) {
  const color =
    value >= 80 ? "var(--color-accent)" : value >= 55 ? "var(--color-event)" : "var(--color-subtle)";
  const dim = size === "sm" ? "size-9 text-xs" : "size-12 text-sm";
  return (
    <div
      className={cn("score-ring grid place-items-center rounded-full p-0.5", dim)}
      style={{ ["--ring-color" as string]: color, ["--ring-pct" as string]: `${value}%` }}
      aria-label={`Релевантность ${value}`}
    >
      <div className="grid size-full place-items-center rounded-full bg-surface font-medium tabular-nums">
        {value}
      </div>
    </div>
  );
}
