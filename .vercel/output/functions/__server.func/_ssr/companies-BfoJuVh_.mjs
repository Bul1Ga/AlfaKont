//#region node_modules/.nitro/vite/services/ssr/assets/companies-BfoJuVh_.js
var companies = [
	{
		id: "severstal",
		name: "ПАО «Северсталь»",
		short: "Северсталь",
		ticker: "CHMF",
		sector: "Чёрная металлургия",
		inn: "3528000597",
		city: "Череповец",
		description: "Вертикально интегрированный производитель стали. Домашний рынок и экспорт в дружественные юрисдикции, высокая чувствительность к ценам HRC, рублю и углеродному регулированию ЕС.",
		thesis: "Клиент живёт на пересечении внутреннего стройцикла, азиатского спота и углеродных правил ЕС. Любой сигнал по CBAM, ставке ЦБ или китайскому restocking — повод для разговора с CFO.",
		rm: {
			name: "Анна Соколова",
			title: "Managing Director",
			coverage: "Metals & Mining"
		},
		kpis: [
			{
				label: "Выручка, 2025",
				value: "802 млрд ₽",
				hint: "год"
			},
			{
				label: "EBITDA margin",
				value: "24%",
				hint: "LTM"
			},
			{
				label: "Net debt / EBITDA",
				value: "0.4x",
				hint: "комфорт"
			},
			{
				label: "Доля экспорта",
				value: "38%",
				hint: "тоннаж"
			}
		],
		exposures: [
			{
				label: "Строительство РФ",
				share: 34
			},
			{
				label: "Китай и ЮВА",
				share: 22
			},
			{
				label: "ЕС и Турция",
				share: 16
			},
			{
				label: "Автопром",
				share: 14
			},
			{
				label: "Трубы / энергомаш",
				share: 14
			}
		],
		competitors: [
			"НЛМК",
			"ММК",
			"Металлоинвест"
		],
		geography: [
			"Россия",
			"Китай",
			"ЕС",
			"Турция",
			"СНГ"
		],
		products: [
			{
				name: "DCM / облигации",
				status: "active"
			},
			{
				name: "FX-хеджирование USD/CNY",
				status: "active"
			},
			{
				name: "Trade finance (Азия)",
				status: "pipeline"
			},
			{
				name: "ESG-linked RCF",
				status: "pipeline"
			},
			{
				name: "Cash management",
				status: "active"
			},
			{
				name: "M&A advisory",
				status: "dormant"
			}
		],
		sensitivities: {
			steel: 1,
			china: .85,
			eu: .7,
			esg: .75,
			fx: .65,
			rates: .45,
			construction: .8,
			capex: .5
		},
		tags: [
			"steel",
			"metals",
			"export",
			"cbam",
			"hrc"
		],
		meeting: {
			when: "2 октября, 11:00",
			with: "CFO",
			topic: "Окно DCM и углеродный периметр 2027"
		}
	},
	{
		id: "x5",
		name: "X5 Group",
		short: "X5 Group",
		ticker: "FIVE",
		sector: "Продуктовый ритейл",
		inn: "7707030411",
		city: "Москва",
		description: "Крупнейший продовольственный ритейлер. Маржа чувствительна к инфляции, логистике и стоимости оборотного капитала поставщиков «Пятёрочки» и «Перекрёстка».",
		thesis: "X5 — это ставка на внутренний спрос. Инфляция, ключевая ставка и регулирование торговых сетей сразу бьют по WC и переговорам с поставщиками — классический кейс для SCF и овердрафта.",
		rm: {
			name: "Дмитрий Волков",
			title: "Director",
			coverage: "Consumer & Retail"
		},
		kpis: [
			{
				label: "Выручка, 2025",
				value: "4.1 трлн ₽",
				hint: "год"
			},
			{
				label: "LFL",
				value: "+6.2%",
				hint: "2кв"
			},
			{
				label: "Чистый долг / EBITDA",
				value: "1.6x",
				hint: "цель <1.8"
			},
			{
				label: "Доля СТМ",
				value: "21%",
				hint: "маржа"
			}
		],
		exposures: [
			{
				label: "Пятёрочка",
				share: 62
			},
			{
				label: "Перекрёсток",
				share: 22
			},
			{
				label: "Чижик",
				share: 10
			},
			{
				label: "Дарксторы",
				share: 6
			}
		],
		competitors: [
			"Магнит",
			"Лента",
			"ВкусВилл"
		],
		geography: ["Россия"],
		products: [
			{
				name: "Возобновляемая кредитная линия",
				status: "active"
			},
			{
				name: "Supply chain finance",
				status: "pipeline"
			},
			{
				name: "Эквайринг и зарплатный проект",
				status: "active"
			},
			{
				name: "DCM",
				status: "active"
			},
			{
				name: "Депозиты overnight",
				status: "active"
			}
		],
		sensitivities: {
			retail: 1,
			rates: .8,
			construction: .15,
			fx: .25,
			regulation: .7,
			capex: .55
		},
		tags: [
			"retail",
			"consumer",
			"food",
			"inflation"
		],
		meeting: {
			when: "30 сентября, 16:30",
			with: "казначей",
			topic: "Лимит WC на высокий сезон"
		}
	},
	{
		id: "lukoil",
		name: "ПАО «ЛУКОЙЛ»",
		short: "ЛУКОЙЛ",
		ticker: "LKOH",
		sector: "Нефть и газ",
		inn: "7708004767",
		city: "Москва",
		description: "Вертикально интегрированная нефтяная компания. Денежный поток зависит от Urals, дисконта к Brent, налоговой формулы и логистики экспорта.",
		thesis: "Для ЛУКОЙЛа новость — это всегда цена, курс и логистика. OPEC+, дисконт Urals и рубль определяют, нужен ли клиенту trade finance, FX-форвард или окно в DCM.",
		rm: {
			name: "Елена Крылова",
			title: "Managing Director",
			coverage: "Oil & Gas"
		},
		kpis: [
			{
				label: "Добыча",
				value: "2.3 млн брл/сут",
				hint: "н/э"
			},
			{
				label: "Дисконт Urals",
				value: "$12.4",
				hint: "к Brent"
			},
			{
				label: "Free cash flow",
				value: "0.9 трлн ₽",
				hint: "2025"
			},
			{
				label: "Див. политика",
				value: "≥100% FCF",
				hint: "цель"
			}
		],
		exposures: [
			{
				label: "Экспорт нефти",
				share: 44
			},
			{
				label: "Переработка РФ",
				share: 28
			},
			{
				label: "Зарубежная переработка",
				share: 14
			},
			{
				label: "Петрохимия и сбыт",
				share: 14
			}
		],
		competitors: [
			"Роснефть",
			"Газпром нефть",
			"Татнефть"
		],
		geography: [
			"Россия",
			"Ближний Восток",
			"Индия",
			"Китай",
			"Турция"
		],
		products: [
			{
				name: "Pre-export finance",
				status: "active"
			},
			{
				name: "FX и сырьевые деривативы",
				status: "active"
			},
			{
				name: "DCM",
				status: "pipeline"
			},
			{
				name: "Расчёты ВЭД",
				status: "active"
			},
			{
				name: "Project finance (НПЗ)",
				status: "dormant"
			}
		],
		sensitivities: {
			oil: 1,
			fx: .9,
			rates: .4,
			china: .55,
			regulation: .6,
			capex: .45
		},
		tags: [
			"oil",
			"energy",
			"urals",
			"opec",
			"export"
		],
		meeting: {
			when: "3 октября, 10:00",
			with: "казначейство",
			topic: "Хедж экспортной выручки 4кв"
		}
	},
	{
		id: "yandex",
		name: "Яндекс",
		short: "Яндекс",
		ticker: "YDEX",
		sector: "Интернет и технологии",
		inn: "7736207543",
		city: "Москва",
		description: "Экосистема поиска, объявлений, еды, такси и облака. Рост требует капитальных затрат на AI-инфраструктуру, а рекламный цикл следует за ритейлом и банками.",
		thesis: "Яндекс читается через рекламный рынок, регулирование агрегаторов и AI-capex. Новость про инфляцию или ставку — это вопрос, потянет ли Search & Ads маржу облака.",
		rm: {
			name: "Максим Орлов",
			title: "Director",
			coverage: "TMT"
		},
		kpis: [
			{
				label: "Выручка, 2025",
				value: "1.1 трлн ₽",
				hint: "группа"
			},
			{
				label: "Search & Ads",
				value: "44%",
				hint: "доля"
			},
			{
				label: "Capex / sales",
				value: "18%",
				hint: "AI-цикл"
			},
			{
				label: "Net cash",
				value: "124 млрд ₽",
				hint: "баланс"
			}
		],
		exposures: [
			{
				label: "Поиск и реклама",
				share: 44
			},
			{
				label: "Райдтех и доставка",
				share: 28
			},
			{
				label: "Облако и AI",
				share: 16
			},
			{
				label: "Прочие сервисы",
				share: 12
			}
		],
		competitors: [
			"VK",
			"Ozon",
			"Wildberries"
		],
		geography: ["Россия", "СНГ"],
		products: [
			{
				name: "Cash management",
				status: "active"
			},
			{
				name: "Гарантии и эскроу",
				status: "active"
			},
			{
				name: "ECM / конвертируемые",
				status: "pipeline"
			},
			{
				name: "M&A advisory",
				status: "pipeline"
			},
			{
				name: "Зарплатный проект",
				status: "active"
			}
		],
		sensitivities: {
			ads: 1,
			retail: .55,
			rates: .5,
			regulation: .85,
			capex: .8,
			fx: .35
		},
		tags: [
			"tech",
			"ads",
			"ai",
			"regulation",
			"internet"
		],
		meeting: {
			when: "1 октября, 14:00",
			with: "CFO",
			topic: "Финансирование GPU-кластера"
		}
	},
	{
		id: "nornickel",
		name: "ГМК «Норникель»",
		short: "Норникель",
		ticker: "GMKN",
		sector: "Цветные металлы",
		inn: "8401005730",
		city: "Норильск / Москва",
		description: "Крупнейший производитель палладия и высокосортного никеля. Ценовой цикл задаёт Китай (EV, нержавейка) и автопром, логистика — Севморпуть.",
		thesis: "Норникель — это никель, палладий и ESG Арктики. Любой сигнал по Индонезии, автопрому Китая или углеродному следу сразу меняет разговор про pre-export и sustainability-linked.",
		rm: {
			name: "Игорь Лебедев",
			title: "Managing Director",
			coverage: "Metals & Mining"
		},
		kpis: [
			{
				label: "Никель",
				value: "205 тыс. т",
				hint: "год"
			},
			{
				label: "Палладий",
				value: "2.6 млн унц.",
				hint: "год"
			},
			{
				label: "EBITDA margin",
				value: "41%",
				hint: "LTM"
			},
			{
				label: "Net debt / EBITDA",
				value: "1.1x",
				hint: "цель <1.5"
			}
		],
		exposures: [
			{
				label: "Никель",
				share: 36
			},
			{
				label: "Палладий",
				share: 28
			},
			{
				label: "Медь",
				share: 22
			},
			{
				label: "Платина и прочие",
				share: 14
			}
		],
		competitors: [
			"Vale",
			"Glencore",
			"Huayou"
		],
		geography: [
			"Россия",
			"Китай",
			"ЕС",
			"США (остаток)"
		],
		products: [
			{
				name: "Pre-export finance",
				status: "active"
			},
			{
				name: "ESG-linked loan",
				status: "pipeline"
			},
			{
				name: "FX-хедж USD/CNY",
				status: "active"
			},
			{
				name: "DCM",
				status: "active"
			},
			{
				name: "Расчёты по СМП",
				status: "pipeline"
			}
		],
		sensitivities: {
			nickel: 1,
			palladium: .8,
			china: .9,
			esg: .85,
			eu: .4,
			fx: .7,
			rates: .35
		},
		tags: [
			"nickel",
			"palladium",
			"metals",
			"arctic",
			"esg"
		],
		meeting: {
			when: "7 октября, 12:00",
			with: "казначей",
			topic: "Pre-export на навигацию 4кв"
		}
	},
	{
		id: "polyus",
		name: "ПАО «Полюс»",
		short: "Полюс",
		ticker: "PLZL",
		sector: "Золотодобыча",
		inn: "7703389295",
		city: "Москва / Красноярск",
		description: "Крупнейший производитель золота в России. Выручка в долларах, затраты в рублях, большой капекс на Сухой Лог — классический FX- и ставки-кейс.",
		thesis: "Полюс зарабатывает, когда золото высоко, а рубль не слишком крепок. Ставка ЦБ и график Сухого Лога определяют, нужен ли project finance или просто форвард на металл.",
		rm: {
			name: "Мария Петрова",
			title: "Director",
			coverage: "Precious Metals"
		},
		kpis: [
			{
				label: "Добыча",
				value: "2.9 млн унц.",
				hint: "2025"
			},
			{
				label: "AISC",
				value: "$1 120",
				hint: "унция"
			},
			{
				label: "Капекс Сухой Лог",
				value: "$3.2 млрд",
				hint: "цикл"
			},
			{
				label: "Net debt / EBITDA",
				value: "0.7x",
				hint: "до пика capex"
			}
		],
		exposures: [
			{
				label: "Действующие активы",
				share: 78
			},
			{
				label: "Сухой Лог (ramp-up)",
				share: 14
			},
			{
				label: "Прочие проекты",
				share: 8
			}
		],
		competitors: [
			"Полиметалл",
			"Kinross",
			"Newmont"
		],
		geography: [
			"Россия",
			"Китай (сбыт)",
			"ОАЭ (логистика)"
		],
		products: [
			{
				name: "Project finance (Сухой Лог)",
				status: "pipeline"
			},
			{
				name: "Gold forward / collar",
				status: "active"
			},
			{
				name: "FX-своп USD/RUB",
				status: "active"
			},
			{
				name: "DCM",
				status: "pipeline"
			},
			{
				name: "Cash management",
				status: "active"
			}
		],
		sensitivities: {
			gold: 1,
			fx: .85,
			rates: .7,
			capex: .9,
			china: .4,
			esg: .45
		},
		tags: [
			"gold",
			"metals",
			"capex",
			"sukhoi-log"
		],
		meeting: {
			when: "8 октября, 15:00",
			with: "CFO",
			topic: "Синдикат project finance"
		}
	}
];
var companyById = Object.fromEntries(companies.map((c) => [c.id, c]));
//#endregion
export { companyById as n, companies as t };
