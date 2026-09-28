import { Link } from "@tanstack/react-router";
import type { NewsItem, RelevanceHit } from "@/lib/data/types";
import { formatWhen, SOURCE_KIND } from "@/lib/format";
import { Score } from "@/components/marks";

export function NewsCard({ item, hit }: { item: NewsItem; hit: RelevanceHit }) {
  return (
    <Link
      to="/desk/news/$id"
      params={{ id: item.id }}
      className="flex gap-4 rounded-lg border border-border bg-surface p-4 shadow-card transition-colors duration-150 hover:border-fg/20 md:p-5"
    >
      <Score value={hit.score} size="sm" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs text-subtle">
          <span className="text-muted">{item.source}</span>
          {SOURCE_KIND[item.sourceKind] ? <span>{SOURCE_KIND[item.sourceKind]}</span> : null}
          <span>{formatWhen(item.publishedAt)}</span>
        </div>
        <h3 className="mt-1.5 font-display text-base font-medium leading-snug">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{item.lede}</p>
        {hit.reasons.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {hit.reasons.map((r) => (
              <span
                key={r.label}
                className="rounded-xs bg-surface-2 px-2 py-0.5 text-xs text-subtle"
              >
                {r.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
