import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Nibomo funkcijos",
  description:
    "Susipažinkite su nemokamomis atvirojo kodo mokymosi kortelėmis: FSRS kartojimas intervalais, kortelių kūrimas su dirbtiniu intelektu, mokymasis neprisijungus ir sinchronizavimas, perkeliamas eksportas ir talpinimas savame serveryje.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Funkcijos",
      intro:
        "Viskas, ko reikia, kad kurtumėte naudingas korteles, kartotumėte tinkamu metu, mokytumėtės neprisijungę ir patys valdytumėte savo mokymosi duomenis.",
      items: [
        {
          title: "Protingesnis kartojimas su FSRS",
          description:
            "Kartokite korteles, kurioms šiandien atėjo laikas. FSRS sunkias korteles grąžina greičiau, o gerai žinomas parodo vėliau.",
        },
        {
          title: "Kortelių kūrimas su DI",
          description:
            "Paprašykite DI pagalbos kuriant korteles, tikslinant formuluotes ar paaiškinant atsakymą. Jūs sprendžiate, kas bus išsaugota.",
        },
        {
          title: "Mokymasis neprisijungus su automatiniu sinchronizavimu",
          description:
            "Kartokite telefone ir be interneto ryšio. Pakeitimai sinchronizuojami automatiškai, todėl galite tęsti naršyklėje, iOS ar Android.",
        },
        {
          title: "Importas, eksportas ir duomenys, kurie priklauso jums",
          description:
            "Perkelkite mokymosi medžiagą į programėlę ar iš jos kada panorėję. Į eksportą įtraukiamos kortelės, žymos ir susijusi medija.",
        },
        {
          title: "Veikia su DI agentais",
          description:
            "Prisijunkite per MCP arba Agent API, kad DI agentai padėtų kurti, tobulinti ir tvarkyti jūsų korteles.",
        },
        {
          title: "Nemokama ir galima talpinti savame serveryje",
          description:
            "Naudokitės mūsų talpinama programėle nemokamai, peržiūrėkite atvirąjį kodą arba paleiskite ją savo infrastruktūroje.",
        },
      ],
    },
  ],
  body: "",
} as const;
