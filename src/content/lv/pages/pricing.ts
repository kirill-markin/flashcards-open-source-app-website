import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Bez maksas lietot. Bez maksas darbināt savā serverī.",
  description:
    "Lieto mitināto lietotni bez maksas — beta versijas laikā MI un sinhronizācija ir iekļauti — vai darbini atvērtā pirmkoda sistēmu savā AWS infrastruktūrā.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Bez maksas lietot. Bez maksas darbināt savā serverī.",
      intro:
        "Lieto mitināto lietotni bez maksas un bez kredītkartes vai darbini atvērtā pirmkoda sistēmu savā AWS infrastruktūrā.",
      tiers: [
        {
          type: "auth_tier",
          name: "Mitinātā versija",
          price: "Bez maksas",
          highlighted: true,
          bullets: [
            "Beta versijas laikā MI funkcijas ir iekļautas",
            "Sinhronizācija starp tīmekli, iOS un Android ir iekļauta",
            "Beta versijas laikā nav plāna kvotu kartītēm, failiem vai kopējai krātuvei; spēkā ir parastie tehniskie ierobežojumi vienam failam un vienai darbībai",
            "Kartīšu, birku un multivides imports un eksports starp mitināto un savā serverī darbināto instalāciju",
            "Pieteikšanās bez paroles ar vienreizēju kodu e-pastā",
            "Kartīšu veidošanas un atkārtošanas pamatfunkcijas paliks bez maksas; lielākam MI lietojumam vēlāk var būt vajadzīga sava pakalpojumu sniedzēja API atslēga vai maksas variants",
          ],
          cta: {
            label: "Lietot mitināto lietotni bez maksas",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Savā serverī",
          price: "Bez maksas",
          highlighted: false,
          bullets: [
            "Atvērtā pirmkoda lietotne un AWS CDK infrastruktūra",
            "Pilns izvietošanas ceļš AWS un lokāla Docker/Postgres izstrādes vide",
            "Infrastruktūru, e-pastu, uzraudzību un MI piekļuves datus nodrošini un uztur pats",
            "Infrastruktūras un trešo pušu pakalpojumu izmaksas sedz pats",
            "Kartīšu, birku un multivides imports un eksports starp mitināto un savā serverī darbināto instalāciju",
          ],
          cta: {
            label: "Darbini savā serverī no GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
