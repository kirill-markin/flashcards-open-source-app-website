import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Aloita ilmaiseksi. Premiumilla enemmän tekoälyä.",
  description:
    "Aloita isännöidyssä sovelluksessa ilmaiseksi, päivitä Premiumiin hintaan USD 6.99 kuukaudessa saadaksesi enemmän tekoälykeskusteluja tai ylläpidä avoimen lähdekoodin pinoa itse omassa AWS-infrastruktuurissasi.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Aloita ilmaiseksi. Premiumilla enemmän tekoälyä.",
      intro:
        "Aloita isännöidyssä sovelluksessa ilmaiseksi ilman luottokorttia, lisää Premium saadaksesi enemmän tekoälykeskusteluja tai ylläpidä avoimen lähdekoodin pinoa itse ilmaiseksi omassa AWS-infrastruktuurissasi.",
      tiers: [
        {
          type: "auth_tier",
          name: "Ilmainen",
          price: "Ilmainen",
          highlighted: true,
          bullets: [
            "50 tekoälykeskusteluviestiä kuukaudessa",
            "Käytä omaa OpenAI API -avaintasi; sen käyttö ei kuluta kuukausirajaa",
            "Synkronointi verkon, iOS:n ja Androidin välillä sisältyy",
            "Ei tilaustasoon sidottuja kiintiöitä korteille, tiedostoille tai kokonaistallennustilalle; tavanomaiset tiedosto- ja toimintokohtaiset tekniset rajat ovat voimassa",
            "Tuo ja vie kortteja, tunnisteita ja mediaa isännöidyn ja itse ylläpidetyn asennuksen välillä",
            "Salasanaton kirjautuminen kertakäyttöisellä sähköpostikoodilla",
          ],
          cta: {
            label: "Käytä isännöityä sovellusta ilmaiseksi",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/kk",
          highlighted: false,
          bullets: [
            "7 päivän ilmainen kokeilujakso ehdot täyttäville uusille tilaajille; maksutapa vaaditaan",
            "1000 tekoälykeskusteluviestiä kuukaudessa",
            "Mukautetut korostusvärit",
            "Kaikki Ilmainen-paketin ominaisuudet",
            "Yksi tilaus tilillesi verkossa, iOS:ssä ja Androidissa",
            "Hinta USD:nä, sisältää verot; maksun yhteydessä hinta voidaan näyttää paikallisessa valuutassa",
            "Uusiutuu kuukausittain; voit peruuttaa milloin tahansa, ja käyttöoikeus säilyy jakson loppuun",
          ],
          cta: {
            label: "Aloita 7 päivän ilmainen kokeilujakso",
            href: "https://app.nibomo.com",
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
