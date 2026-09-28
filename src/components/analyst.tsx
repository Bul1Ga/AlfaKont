import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { askAnalyst } from "@/lib/ai";
import { useDesk } from "@/lib/store";
import { Button } from "@/components/ui/button";

const EMPTY: { role: "user" | "assistant"; text: string }[] = [];

export function Analyst({
  companyId,
  newsId,
  insightHeadline,
}: {
  companyId: string;
  newsId?: string;
  insightHeadline?: string;
}) {
  const key = `${companyId}:${newsId ?? "desk"}:${insightHeadline ?? ""}`;
  const history = useDesk((s) => s.chats[key] ?? EMPTY);
  const pushChat = useDesk((s) => s.pushChat);
  const [question, setQuestion] = useState("");
  const [pending, setPending] = useState(false);

  async function onSend() {
    const q = question.trim();
    if (!q || pending) return;
    setQuestion("");
    pushChat(key, { role: "user", text: q });
    setPending(true);
    try {
      const res = await askAnalyst({
        data: { companyId, question: q, newsId, insightHeadline, history },
      });
      if (!res.ok) {
        toast.error(res.error);
        pushChat(key, {
          role: "assistant",
          text: "Не удалось получить ответ аналитика. Попробуйте ещё раз.",
        });
      } else {
        pushChat(key, { role: "assistant", text: res.text });
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="rounded-lg border border-border bg-surface p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-display text-base font-medium">Спросить аналитика</h2>
        <span className="text-xs text-subtle">В контексте клиента</span>
      </div>
      <p className="mt-1 text-sm text-muted">
        Модель видит досье компании, новость и текущий инсайт. Запрос уходит только по кнопке.
      </p>
      <div className="mt-4 space-y-3">
        {history.map((t, i) => (
          <div
            key={`${t.role}-${i}`}
            className={
              t.role === "user"
                ? "ml-8 rounded-md bg-surface-2 px-3 py-2 text-sm leading-relaxed"
                : "mr-4 rounded-md border border-border px-3 py-2 text-sm leading-relaxed text-muted"
            }
          >
            {t.text}
          </div>
        ))}
        {pending ? (
          <div className="flex items-center gap-2 text-sm text-subtle">
            <LoaderCircle className="size-4 animate-spin" />
            Аналитик собирает ответ…
          </div>
        ) : null}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") void onSend();
          }}
          placeholder="Что это значит для нашего DCM?"
          className="h-11 min-w-0 flex-1 rounded-md border border-border bg-bg px-3 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        />
        <Button size="icon" onClick={() => void onSend()} disabled={pending || !question.trim()} aria-label="Отправить">
          <Send className="size-4" />
        </Button>
      </div>
    </section>
  );
}
