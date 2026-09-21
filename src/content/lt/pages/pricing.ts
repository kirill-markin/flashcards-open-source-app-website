import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Nemokama naudotis. Nemokama talpinti savame serveryje.",
  description:
    "Naudokitės mūsų talpinama programėle nemokamai, beta laikotarpiu su įskaičiuotu DI ir sinchronizavimu, arba talpinkite atvirojo kodo sprendimą savo AWS infrastruktūroje.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Nemokama naudotis. Nemokama talpinti savame serveryje.",
      intro:
        "Naudokitės mūsų talpinama programėle nemokamai ir be banko kortelės arba paleiskite atvirojo kodo sprendimą savo AWS infrastruktūroje.",
      tiers: [
        {
          type: "auth_tier",
          name: "Mūsų serveryje",
          price: "Nemokamai",
          highlighted: true,
          bullets: [
            "Beta laikotarpiu DI funkcijos įskaičiuotos",
            "Sinchronizavimas tarp naršyklės, iOS ir Android įskaičiuotas",
            "Beta laikotarpiu nėra plano kvotų kortelėms, failams ar bendrai saugyklai; galioja įprasti techniniai vieno failo ir vienos operacijos apribojimai",
            "Importuokite ir eksportuokite korteles, žymas ir mediją tarp mūsų talpinamos ir savame serveryje įdiegtos versijos",
            "Prisijungimas be slaptažodžio vienkartiniu kodu el. paštu",
            "Pagrindinis kortelių kūrimas ir kartojimas liks nemokamas; intensyvesniam DI naudojimui vėliau gali prireikti savo tiekėjo API rakto arba mokamo varianto",
          ],
          cta: {
            label: "Naudotis mūsų talpinama programėle nemokamai",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Savame serveryje",
          price: "Nemokamai",
          highlighted: false,
          bullets: [
            "Atvirojo kodo programa ir AWS CDK infrastruktūra",
            "Pilnas diegimo AWS kelias ir vietinė Docker/Postgres kūrimo aplinka",
            "Infrastruktūrą, el. paštą, stebėseną ir DI prieigos duomenis parūpinate ir prižiūrite patys",
            "Apmokate infrastruktūros ir trečiųjų šalių tiekėjų išlaidas",
            "Importuokite ir eksportuokite korteles, žymas ir mediją tarp mūsų talpinamos ir savame serveryje įdiegtos versijos",
          ],
          cta: {
            label: "Talpinkite savame serveryje iš GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
