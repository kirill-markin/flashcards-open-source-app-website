import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Izici ze-Nibomo",
  description:
    "Hlola amakhadi okufunda amahhala anomthombo ovulekile: i-spaced repetition nge-FSRS, ukudala amakhadi ngosizo lwe-AI, ukufunda ngaphandle kwe-inthanethi nokuvumelanisa, ukukhipha idatha nokuzisingathela.",
  slug: "features",
  sections: [
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
