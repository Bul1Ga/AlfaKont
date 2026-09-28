import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-wk0-Hrg3.js
var useDesk = create()(persist((set) => ({
	companyId: null,
	setCompanyId: (companyId) => set({ companyId }),
	extraInsights: [],
	addInsight: (insight) => set((s) => ({ extraInsights: [insight, ...s.extraInsights.filter((i) => i.id !== insight.id)] })),
	chats: {},
	pushChat: (key, turn) => set((s) => ({ chats: {
		...s.chats,
		[key]: [...s.chats[key] ?? [], turn]
	} }))
}), { name: "alfa-context-desk" }));
//#endregion
export { useDesk as t };
