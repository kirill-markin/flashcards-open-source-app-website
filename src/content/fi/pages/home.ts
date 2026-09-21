import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - ilmainen avoimen lähdekoodin muistikorttisovellus välistettyyn kertaukseen",
  description:
    "Ilmaiset avoimen lähdekoodin muistikortit: FSRS-välistetty kertaus, tekoälyavusteinen korttien luonti, offline-opiskelu ja synkronointi, siirrettävät viennit ja itse ylläpidetty asennus.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Ilmainen ja avointa lähdekoodia",
      titleLines: [
        "Luo kortteja.",
        "Kertaa fiksummin.",
        "Muista enemmän.",
      ],
      subtitle:
        "Ilmaiset avoimen lähdekoodin muistikortit, jotka ajoittavat jokaisen kertauksen oikeaan hetkeen, toimivat ilman verkkoyhteyttä ja synkronoituvat verkon, iOS:n ja Androidin välillä. Käytä tekoälyä, kun haluat apua korttien luomiseen tai parantamiseen. Nibomon aiempi nimi oli Flashcards Open Source App.",
      trustLine: "Ei luottokorttia. Ei mainoksia. Ei kokeilujakson laskuria.",
      primaryLink: {
        label: "Aloita käyttö",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Katso GitHubissa",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Lisää tämä MCP-palvelin tekoälysovellukseesi:",
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
      title: "Ominaisuudet",
      intro:
        "Kaikki mitä tarvitset hyödyllisten korttien luomiseen, oikea-aikaiseen kertaamiseen, opiskelun jatkamiseen ilman verkkoyhteyttä ja oman oppimisdatasi hallintaan.",
      items: [
        {
          title: "Fiksummat kertaukset FSRS:llä",
          description:
            "Kertaa kortit, jotka erääntyvät tänään. FSRS tuo vaikeat kortit takaisin aiemmin ja odottaa pidempään ennen kuin näyttää tutut kortit uudelleen.",
        },
        {
          title: "Tekoälyavusteinen korttien luonti",
          description:
            "Pyydä tekoälyltä apua korttien luomiseen, sanamuotojen parantamiseen tai vastauksen selkeyttämiseen. Sinä päätät, mitä tallennetaan.",
        },
        {
          title: "Offline-opiskelu ja automaattinen synkronointi",
          description:
            "Jatka kertaamista mobiililaitteellasi ilman internet-yhteyttä. Muutokset synkronoituvat automaattisesti, joten voit jatkaa verkossa, iOS:ssä tai Androidilla.",
        },
        {
          title: "Tuo, vie ja omista datasi",
          description:
            "Siirrä oppimateriaalisi sisään tai ulos milloin haluat. Siirrettävät viennit sisältävät korttisi, tunnisteesi ja niihin liittyvän median.",
        },
        {
          title: "Toimii tekoälyagenttien kanssa",
          description:
            "Yhdistä MCP:n tai Agent API:n kautta, niin tekoälyagentit voivat auttaa korttien luomisessa, parantamisessa ja järjestämisessä.",
        },
        {
          title: "Ilmainen ja itse ylläpidettävä",
          description:
            "Käytä isännöityä sovellusta ilmaiseksi, tarkastele avointa lähdekoodia tai aja sitä omassa infrastruktuurissasi.",
        },
      ],
    },
  ],
  body: "",
} as const;
