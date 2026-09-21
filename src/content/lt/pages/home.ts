import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Nemokamos atvirojo kodo mokymosi kortelės su kartojimu intervalais",
  description:
    "Nemokamos atvirojo kodo mokymosi kortelės su FSRS kartojimu intervalais, kortelių kūrimu su dirbtiniu intelektu, mokymusi neprisijungus ir sinchronizavimu, perkeliamu eksportu ir talpinimu savame serveryje.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Nemokama ir atvirojo kodo",
      titleLines: [
        "Kurkite korteles.",
        "Kartokite protingiau.",
        "Prisiminkite daugiau.",
      ],
      subtitle:
        "Nemokamos atvirojo kodo mokymosi kortelės, kurios kiekvieną kartojimą suplanuoja tinkamu metu, veikia neprisijungus ir sinchronizuojasi tarp naršyklės, iOS ir Android. Pasitelkite DI, kai reikia pagalbos kuriant ar tobulinant korteles. Anksčiau Nibomo vadinosi Flashcards Open Source App.",
      trustLine: "Nereikia banko kortelės. Jokių reklamų. Jokios bandomojo laikotarpio atgalinės atskaitos.",
      primaryLink: {
        label: "Pradėti",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Peržiūrėti GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Pridėkite šį MCP serverį prie savo DI kliento:",
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
