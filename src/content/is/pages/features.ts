import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Eiginleikar Nibomo",
  description:
    "Kynntu þér ókeypis námskort í opnum hugbúnaði: spaced repetition með FSRS, spjaldagerð með hjálp gervigreindar, nám án nettengingar og samstilling, færanlegur útflutningur og eigin hýsing.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Eiginleikar",
      intro:
        "Allt sem þú þarft til að búa til gagnleg spjöld, rifja upp á réttum tíma, halda áfram að læra án nettengingar og hafa stjórn á námsgögnunum þínum.",
      items: [
        {
          title: "Betri upprifjun með FSRS",
          description:
            "Rifjaðu upp spjöldin sem eru á dagskrá í dag. FSRS skilar erfiðum spjöldum fyrr til baka og bíður lengur með að sýna þau sem þú kannt.",
        },
        {
          title: "Spjaldagerð með hjálp gervigreindar",
          description:
            "Biddu gervigreindina um hjálp við að búa til spjöld, bæta orðalagið eða skýra svar. Þú ræður alltaf hvað er vistað.",
        },
        {
          title: "Nám án nettengingar með sjálfvirkri samstillingu",
          description:
            "Haltu áfram að rifja upp í farsímanum þínum án nettengingar. Breytingar samstillast sjálfkrafa svo þú getir haldið áfram á vefnum, í iOS eða Android.",
        },
        {
          title: "Innflutningur, útflutningur og eignarhald á gögnunum",
          description:
            "Færðu námsefnið þitt inn eða út hvenær sem þér hentar. Færanlegur útflutningur inniheldur spjöldin þín, merki og tengda miðla.",
        },
        {
          title: "Virkar með gervigreindarumboðum",
          description:
            "Tengdu þig um MCP eða Agent API svo gervigreindarumboð geti hjálpað til við að búa til, bæta og skipuleggja spjöldin þín.",
        },
        {
          title: "Ókeypis og hægt að hýsa á eigin þjóni",
          description:
            "Notaðu hýstu útgáfuna ókeypis, skoðaðu opna kóðann eða keyrðu forritið á eigin innviðum.",
        },
      ],
    },
  ],
  body: "",
} as const;
