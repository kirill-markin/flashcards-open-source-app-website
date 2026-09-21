import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Ókeypis í notkun. Ókeypis í eigin hýsingu.",
  description:
    "Notaðu hýstu útgáfuna án endurgjalds, með gervigreind og samstillingu innifalinni á beta-tímabilinu, eða hýstu opna hugbúnaðinn á eigin AWS-innviðum.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Ókeypis í notkun. Ókeypis í eigin hýsingu.",
      intro:
        "Notaðu hýstu útgáfuna án endurgjalds og án kreditkorts, eða keyrðu opna hugbúnaðinn á eigin AWS-innviðum.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hýst",
          price: "Ókeypis",
          highlighted: true,
          bullets: [
            "Gervigreindareiginleikar innifaldir á beta-tímabilinu",
            "Samstilling milli vefs, iOS og Android innifalin",
            "Engir áskriftarbundnir kvótar á spjöld, skrár eða heildargeymslu á beta-tímabilinu; venjuleg tæknileg mörk á hverja skrá og hverja aðgerð gilda áfram",
            "Flyttu spjöld, merki og miðla inn og út milli hýstra og sjálfhýstra uppsetninga",
            "Innskráning án lykilorðs með einnota kóða í tölvupósti",
            "Grunnvinna við spjaldagerð og upprifjun verður áfram ókeypis; meiri notkun gervigreindar gæti síðar krafist eigin API-lykils hjá þjónustuaðila eða greiddrar leiðar",
          ],
          cta: {
            label: "Nota hýstu útgáfuna ókeypis",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Eigin hýsing",
          price: "Ókeypis",
          highlighted: false,
          bullets: [
            "Forrit og AWS CDK-innviðir í opnum hugbúnaði",
            "Heil útgáfuleið á AWS auk staðbundinnar þróunaruppsetningar með Docker og Postgres",
            "Þú útvegar og viðheldur innviðum, tölvupósti, vöktun og aðgangslyklum að gervigreind",
            "Þú greiðir kostnað af innviðum og þjónustu þriðja aðila",
            "Flyttu spjöld, merki og miðla inn og út milli hýstra og sjálfhýstra uppsetninga",
          ],
          cta: {
            label: "Setja upp eigin hýsingu frá GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
