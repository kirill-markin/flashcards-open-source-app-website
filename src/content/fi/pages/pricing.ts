import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Ilmainen käyttää. Ilmainen ylläpitää itse.",
  description:
    "Käytä isännöityä sovellusta maksutta – tekoäly ja synkronointi sisältyvät beetan ajan – tai ylläpidä avoimen lähdekoodin pinoa itse omassa AWS-infrastruktuurissasi.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Ilmainen käyttää. Ilmainen ylläpitää itse.",
      intro:
        "Käytä isännöityä sovellusta maksutta ilman luottokorttia tai aja avoimen lähdekoodin pinoa omassa AWS-infrastruktuurissasi.",
      tiers: [
        {
          type: "auth_tier",
          name: "Isännöity",
          price: "Ilmainen",
          highlighted: true,
          bullets: [
            "Tekoälyominaisuudet sisältyvät beetan ajan",
            "Synkronointi verkon, iOS:n ja Androidin välillä sisältyy",
            "Beetan aikana ei ole tilaustasoon sidottuja kiintiöitä korteille, tiedostoille tai kokonaistallennustilalle; tavanomaiset tiedosto- ja toimintokohtaiset tekniset rajat ovat voimassa",
            "Tuo ja vie kortteja, tunnisteita ja mediaa isännöidyn ja itse ylläpidetyn asennuksen välillä",
            "Salasanaton kirjautuminen kertakäyttöisellä sähköpostikoodilla",
            "Korttien luonti ja kertaaminen pysyvät ilmaisina; runsaampi tekoälyn käyttö voi myöhemmin vaatia oman palveluntarjoajan API-avaimen tai maksullisen vaihtoehdon",
          ],
          cta: {
            label: "Käytä isännöityä sovellusta ilmaiseksi",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Itse ylläpidetty",
          price: "Ilmainen",
          highlighted: false,
          bullets: [
            "Avoimen lähdekoodin sovellus ja AWS CDK -infrastruktuuri",
            "Täysi AWS-käyttöönottopolku sekä paikallinen Docker/Postgres-kehitysympäristö",
            "Sinä hankit ja ylläpidät infrastruktuurin, sähköpostin, valvonnan ja tekoälytunnukset",
            "Sinä maksat infrastruktuurin ja kolmansien osapuolten palveluiden kulut",
            "Tuo ja vie kortteja, tunnisteita ja mediaa isännöidyn ja itse ylläpidetyn asennuksen välillä",
          ],
          cta: {
            label: "Ylläpidä itse GitHubista",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
