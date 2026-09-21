import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - bezmaksas atvērtā pirmkoda mācību kartītes ar spaced repetition",
  description:
    "Bezmaksas atvērtā pirmkoda mācību kartītes ar FSRS spaced repetition, kartīšu veidošanu ar MI palīdzību, mācīšanos bezsaistē un sinhronizāciju, pārnesamu eksportu un darbināšanu savā serverī.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Bez maksas un ar atvērtu pirmkodu",
      titleLines: [
        "Izveido kartītes.",
        "Atkārto gudrāk.",
        "Atceries vairāk.",
      ],
      subtitle:
        "Bezmaksas atvērtā pirmkoda mācību kartītes, kas katru atkārtojumu ieplāno īstajā laikā, strādā bezsaistē un sinhronizējas starp tīmekli, iOS un Android. Kad vajag palīdzību kartīšu veidošanā vai uzlabošanā, izmanto MI. Nibomo agrāk saucās Flashcards Open Source App.",
      trustLine: "Bez kredītkartes. Bez reklāmām. Bez izmēģinājuma laika atpakaļskaitīšanas.",
      primaryLink: {
        label: "Sākt lietot",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Skatīt vietnē GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Pievieno šo MCP serveri savam MI klientam:",
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
      title: "Funkcijas",
      intro:
        "Viss nepieciešamais, lai veidotu noderīgas kartītes, atkārtotu tās īstajā laikā, mācītos bezsaistē un saglabātu kontroli pār saviem mācību datiem.",
      items: [
        {
          title: "Gudrāka atkārtošana ar FSRS",
          description:
            "Atkārto kartītes, kurām laiks pienācis šodien. FSRS grūtās kartītes atgriež ātrāk, bet ar zināmajām gaida ilgāk, pirms parāda tās atkal.",
        },
        {
          title: "Kartīšu veidošana ar MI palīdzību",
          description:
            "Palūdz MI palīdzēt izveidot kartītes, uzlabot formulējumu vai precizēt atbildi. Tu izlem, kas tiek saglabāts.",
        },
        {
          title: "Mācīšanās bezsaistē ar automātisku sinhronizāciju",
          description:
            "Atkārto telefonā arī bez interneta savienojuma. Izmaiņas sinhronizējas automātiski, tāpēc vari turpināt tīmeklī, iOS vai Android.",
        },
        {
          title: "Imports, eksports un dati, kas pieder tev",
          description:
            "Pārvieto savus mācību materiālus iekšā un ārā, kad vien vēlies. Pārnesamajā eksportā ir kartītes, birkas un saistītā multivide.",
        },
        {
          title: "Darbojas ar MI aģentiem",
          description:
            "Pieslēdzies caur MCP vai Agent API, lai MI aģenti palīdzētu veidot, uzlabot un kārtot tavas kartītes.",
        },
        {
          title: "Bez maksas un darbināms savā serverī",
          description:
            "Izmanto mitināto lietotni bez maksas, izpēti atvērto pirmkodu vai darbini to savā infrastruktūrā.",
        },
      ],
    },
  ],
  body: "",
} as const;
