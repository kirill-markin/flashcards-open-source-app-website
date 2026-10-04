import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Ókeypis til að byrja. Premium fyrir meiri gervigreind.",
  description:
    "Byrjaðu ókeypis í hýstu útgáfunni, uppfærðu í Premium fyrir USD 6.99 á mánuði og fáðu meira gervigreindarspjall, eða hýstu opna hugbúnaðinn á eigin AWS-innviðum.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Ókeypis til að byrja. Premium fyrir meiri gervigreind.",
      intro:
        "Byrjaðu ókeypis í hýstu útgáfunni án kreditkorts, bættu við Premium fyrir meira gervigreindarspjall, eða hýstu opna hugbúnaðinn ókeypis á eigin AWS-innviðum.",
      tiers: [
        {
          type: "auth_tier",
          name: "Ókeypis",
          price: "Ókeypis",
          highlighted: true,
          bullets: [
            "50 skilaboð í gervigreindarspjalli á mánuði",
            "Notaðu þinn eigin OpenAI API-lykil; notkun hans telst ekki með í mánaðarlega hámarkinu",
            "Samstilling milli vefs, iOS og Android innifalin",
            "Engir áskriftarbundnir kvótar á spjöld, skrár eða heildargeymslu; venjuleg tæknileg mörk á hverja skrá og hverja aðgerð gilda áfram",
            "Flyttu spjöld, merki og miðla inn og út milli hýstra og sjálfhýstra uppsetninga",
            "Innskráning án lykilorðs með einnota kóða í tölvupósti",
          ],
          cta: {
            label: "Nota hýstu útgáfuna ókeypis",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mán.",
          highlighted: false,
          bullets: [
            "7 daga ókeypis prufa fyrir nýja áskrifendur sem uppfylla skilyrði; greiðslumáti er nauðsynlegur",
            "1000 skilaboð í gervigreindarspjalli á mánuði",
            "Sérsniðnir áherslulitir",
            "Allt sem er innifalið í ókeypis leiðinni",
            "Ein áskrift fyrir aðganginn þinn á vefnum, iOS og Android",
            "Verð í USD, skattar innifaldir; við greiðslu getur verð birst í staðbundnum gjaldmiðli",
            "Endurnýjast mánaðarlega; segðu upp hvenær sem er og haltu aðgangi til loka tímabilsins",
          ],
          cta: {
            label: "Hefja 7 daga ókeypis prufu",
            href: "https://app.nibomo.com",
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
