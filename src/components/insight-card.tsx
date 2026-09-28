import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { newsById } from "@/lib/data";
import type { Insight } from "@/lib/data/types";
import { cn } from "@/lib/utils";
import { Score, TypeMark } from "@/components/marks";

export function InsightCard({
  insight,
  featured = false,
}: {
  insight: Insight;
  featured?: boolean;
}) {
  const newsItem = newsById[insight.newsId];
  const stripe =
    insight.type === "risk"
      ? "bg-risk"
      : insight.type === "opportunity"
        ? "bg-opportunity"
        : "bg-event";

  return (
    <Link
      to="/desk/insight/$id"
      params={{ id: insight.id }}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-surface border border-border shadow-card transition-colors duration-150 hover:border-fg/20",
        featured ? "p-6 md:p-8" : "p-5",
      )}
    >
      <span className={cn("absolute inset-y-0 left-0 w-0.5", stripe)} />
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <TypeMark type={insight.type} />
          {featured ? (
            <span className="text-xs text-subtle uppercase tracking-wider">Главный сигнал</span>
          ) : null}
        </div>
        <Score value={insight.relevance} size={featured ? "md" : "sm"} />
      </div>
      <h3
        className={cn(
          "mt-4 font-display font-medium leading-snug text-fg",
          featured ? "text-xl md:text-2xl" : "text-base md:text-lg",
        )}
      >
        {insight.headline}
      </h3>
      <p className={cn("mt-3 text-muted leading-relaxed", featured ? "text-sm md:text-base" : "text-sm line-clamp-3")}>
        {insight.thesis}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-subtle">
        {newsItem ? <span>{newsItem.source}</span> : null}
        <span>Горизонт · {insight.horizon === "now" ? "сейчас" : insight.horizon === "1-3m" ? "1–3 мес." : "6–12 мес."}</span>
        {insight.products[0] ? <span>Продукт · {insight.products[0].product}</span> : null}
        <span className="ml-auto inline-flex items-center gap-1 text-fg/80 group-hover:text-fg">
          Разбор
          <ArrowUpRight className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
