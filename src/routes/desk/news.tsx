import { createFileRoute } from "@tanstack/react-router";
import { companyById, news, rankedNews } from "@/lib/data";
import { useDesk } from "@/lib/store";
import { NewsCard } from "@/components/news-card";

export const Route = createFileRoute("/desk/news")({ component: NewsPage });

function NewsPage() {
  const companyId = useDesk((s) => s.companyId);
  const company = companyId ? companyById[companyId] : undefined;
  if (!company) return null;
  const ranked = rankedNews(news, company);

  return (
    <div>
      <header className="mb-6">
        <h1 className="font-display text-2xl font-medium tracking-tight">Лента</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Одна и та же лента Альфа-Аналитики и рынка. Релевантность считается заново для{" "}
          {company.short}: теги, чувствительности, тикер, география.
        </p>
      </header>
      <div className="grid gap-3">
        {ranked.map(({ item, hit }) => (
          <NewsCard key={item.id} item={item} hit={hit} />
        ))}
      </div>
    </div>
  );
}
