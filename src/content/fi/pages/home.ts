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
        "Ilmaiset muistikortit, jotka ajoittavat jokaisen kertauksen oikeaan hetkeen, toimivat ilman verkkoyhteyttä ja synkronoituvat verkon, iOS:n ja Androidin välillä. Käytä tekoälyä, kun haluat apua korttien luomiseen tai parantamiseen.",
      trustLine: "Ei luottokorttia. Ei mainoksia. Ei kokeilujakson laskuria.",
      primaryLink: {
        label: "Aloita käyttö",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Katso GitHubissa",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Tai yhdistä mikä tahansa MCP-yhteensopiva tekoälysovellus tällä URL-osoitteella:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Näin Nibomo toimii",
      items: [
        {
          label: "01 · TEKOÄLYN LUOMAT OPISKELUKORTIT",
          titleLines: [
            "Kerro tekoälylle, mitä haluat oppia.",
          ],
          description: "Kuvaile aihe tai liitä muistiinpanosi. Tekoäly auttaa muuttamaan aineistosi opiskelukorteiksi, joissa on kysymyksiä ja vastauksia.",
          linkLabel: "Luo opiskelukortteja",
          imagePath: "/home/ai-flashcards-fi.png",
          imageAlt: "Nibomon tekoälykeskustelu luo opiskelukortteja aiheesta tai liitetyistä muistiinpanoista",
        },
        {
          label: "02 · ALOITA OPISKELU",
          titleLines: [
            "Yksi kysymys kerrallaan.",
          ],
          description: "Avaa opiskelukortti ja yritä muistaa vastaus ennen sen näyttämistä. Opi omaan tahtiisi, yksi kortti kerrallaan.",
          linkLabel: "Aloita opiskelu",
          imagePath: "/home/start-learning-fi.png",
          imageAlt: "Nibomon kertauskortti, jossa on painike vastauksen näyttämiseen",
        },
        {
          label: "03 · ÄLYKÄS KERTAUS",
          titleLines: [
            "Tarkista vastauksesi.",
            "Arvioi, miten hyvin muistit.",
          ],
          description: "Näytä vastaus ja merkitse, miten helposti muistit sen. Nibomo näyttää vaikeat kortit uudelleen aiemmin ja tutut kortit myöhemmin.",
          linkLabel: "Kertaa opiskelukortteja",
          imagePath: "/home/smart-reviews-fi.png",
          imageAlt: "Nibomon kortti, jossa näkyvät vastaus ja muistamisen arviointivaihtoehdot",
        },
        {
          label: "04 · EDISTYMISESI",
          titleLines: [
            "Tee oppimisesta tapa.",
          ],
          description: "Katso opiskelupäivät kalenterista ja pidä opiskelujakso katkeamattomana. Jokainen kertaus on uusi askel kohti tavoitettasi.",
          linkLabel: "Katso edistymisesi",
          imagePath: "/home/your-progress-fi.png",
          imageAlt: "Nibomon edistymisnäkymä, jossa on peräkkäisten opiskelupäivien kalenteri ja tulostaulukko",
        }
      ],
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
            "Jatka kertaamista mobiililaitteellasi ilman internetyhteyttä. Muutokset synkronoituvat automaattisesti.",
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
    {
      type: "review_cta",
      titleLines: [
        "Anna Nibomon suunnitella kertauksesi.",
        "Sinä keskityt oppimiseen.",
      ],
      description: "Muuta oppimasi asiat opiskelukorteiksi, kertaa oikeaan aikaan ja muista enemmän.",
    },
  ],
  body: "",
} as const;
