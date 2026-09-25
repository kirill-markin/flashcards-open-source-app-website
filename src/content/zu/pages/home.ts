import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Amakhadi okufunda amahhala ne-spaced repetition, umthombo ovulekile",
  description:
    "Amakhadi okufunda amahhala anomthombo ovulekile: i-spaced repetition nge-FSRS, ukudala amakhadi ngosizo lwe-AI, ukufunda ngaphandle kwe-inthanethi nokuvumelanisa, ukukhipha idatha nokuzisingathela.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Mahhala nomthombo ovulekile",
      titleLines: [
        "Dala amakhadi.",
        "Buyekeza ngokuhlakanipha.",
        "Khumbula okwengeziwe.",
      ],
      subtitle:
        "Amakhadi okufunda amahhala anomthombo ovulekile, ahlelela ukubuyekezwa ngakunye ngesikhathi esifanele, asebenza ngaphandle kwe-inthanethi futhi avumelaniswe kuwebhu, ku-iOS naku-Android. Sebenzisa i-AI lapho udinga usizo lokudala noma lokuthuthukisa amakhadi. I-Nibomo yayibizwa ngaphambilini ngokuthi yi-Flashcards Open Source App.",
      trustLine: "Alidingeki ikhadi lesikweletu. Azikho izikhangiso. Akukho ukubala kwesikhathi sokuzama.",
      primaryLink: {
        label: "Qala manje",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Buka ku-GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Engeza le seva ye-MCP kuklayenti lakho le-AI:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Izici",
      intro:
        "Konke okudingayo ukuze udale amakhadi awusizo, ubuyekeze ngesikhathi esifanele, uqhubeke ufunde ngaphandle kwe-inthanethi, futhi ulawule idatha yakho yokufunda.",
      items: [
        {
          title: "Ukubuyekeza okuhlakaniphile nge-FSRS",
          description:
            "Buyekeza amakhadi asesikhathini sokubuyekezwa namuhla. I-FSRS ibuyisa amakhadi anzima ngokushesha, ibe ilinde isikhathi eside ngaphambi kokuphinda ikubonise lawo osuwajwayele.",
        },
        {
          title: "Ukudala amakhadi ngosizo lwe-AI",
          description:
            "Cela i-AI ikusize ukudala amakhadi, ukuthuthukisa indlela abhalwe ngayo, noma ukucacisa impendulo. Wena uhlala ulawula okugcinwayo.",
        },
        {
          title: "Funda ngaphandle kwe-inthanethi, kuvumelaniswe ngokuzenzakalela",
          description:
            "Qhubeka ubuyekeze kudivayisi yakho yeselula ngaphandle koxhumano lwe-inthanethi. Izinguquko zivumelaniswa ngokuzenzakalela ukuze uqhubeke kuwebhu, ku-iOS noma ku-Android.",
        },
        {
          title: "Ngenisa, ukhiphe, futhi ube ngumnikazi wedatha yakho",
          description:
            "Hambisa izinto zakho zokufunda ngaphakathi noma ngaphandle noma nini uma uthanda. Okukhishwayo kufaka amakhadi akho, amathegi nemidiya ehambisanayo.",
        },
        {
          title: "Isebenza nama-ejenti e-AI",
          description:
            "Xhuma nge-MCP noma nge-Agent API ukuze ama-ejenti e-AI akusize ukudala, ukuthuthukisa nokuhlela amakhadi akho.",
        },
        {
          title: "Mahhala futhi ungazisingathela",
          description:
            "Sebenzisa uhlelo olusingathiwe mahhala, uhlole ikhodi enomthombo ovulekile, noma ulusebenzise kwingqalasizinda yakho.",
        },
      ],
    },
  ],
  body: "",
} as const;
