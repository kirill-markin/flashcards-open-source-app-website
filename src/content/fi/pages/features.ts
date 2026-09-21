import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Nibomon ominaisuudet",
  description:
    "Tutustu ilmaisiin avoimen lähdekoodin muistikortteihin: FSRS-välistetty kertaus, tekoälyavusteinen korttien luonti, offline-opiskelu ja synkronointi, siirrettävät viennit ja itse ylläpidetty asennus.",
  slug: "features",
  sections: [
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
