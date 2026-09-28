export type InsightType = "risk" | "opportunity" | "event";
export type Impact = "high" | "medium" | "low";
export type Horizon = "now" | "1-3m" | "6-12m";

export type SensitivityKey =
  | "rates"
  | "fx"
  | "steel"
  | "oil"
  | "nickel"
  | "palladium"
  | "gold"
  | "retail"
  | "ads"
  | "regulation"
  | "esg"
  | "china"
  | "eu"
  | "construction"
  | "capex";

export type Company = {
  id: string;
  name: string;
  short: string;
  ticker: string;
  sector: string;
  inn: string;
  city: string;
  description: string;
  thesis: string;
  rm: { name: string; title: string; coverage: string };
  kpis: { label: string; value: string; hint: string }[];
  exposures: { label: string; share: number }[];
  competitors: string[];
  geography: string[];
  products: { name: string; status: "active" | "pipeline" | "dormant" }[];
  sensitivities: Partial<Record<SensitivityKey, number>>;
  tags: string[];
  meeting: { when: string; with: string; topic: string } | null;
};

export type NewsItem = {
  id: string;
  source: string;
  sourceKind: "alfa" | "regulator" | "wire" | "market";
  title: string;
  lede: string;
  body: string;
  publishedAt: string;
  tags: string[];
  tickers: string[];
  sensitivities: SensitivityKey[];
};

export type ProductPitch = {
  product: string;
  action: string;
};

export type Insight = {
  id: string;
  companyId: string;
  newsId: string;
  type: InsightType;
  headline: string;
  thesis: string;
  relevance: number;
  impact: Impact;
  horizon: Horizon;
  confidence: number;
  why: string[];
  products: ProductPitch[];
  talkingPoints: string[];
  action: string;
};

export type RelevanceHit = {
  score: number;
  reasons: { label: string; weight: number }[];
};
