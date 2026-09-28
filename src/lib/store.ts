import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Insight } from "@/lib/data/types";

type ChatTurn = { role: "user" | "assistant"; text: string };

type State = {
  companyId: string | null;
  setCompanyId: (id: string | null) => void;
  extraInsights: Insight[];
  addInsight: (insight: Insight) => void;
  chats: Record<string, ChatTurn[]>;
  pushChat: (key: string, turn: ChatTurn) => void;
};

export const useDesk = create<State>()(
  persist(
    (set) => ({
      companyId: null,
      setCompanyId: (companyId) => set({ companyId }),
      extraInsights: [],
      addInsight: (insight) =>
        set((s) => ({
          extraInsights: [insight, ...s.extraInsights.filter((i) => i.id !== insight.id)],
        })),
      chats: {},
      pushChat: (key, turn) =>
        set((s) => ({
          chats: { ...s.chats, [key]: [...(s.chats[key] ?? []), turn] },
        })),
    }),
    { name: "alfa-context-desk" },
  ),
);
