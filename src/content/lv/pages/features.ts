import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Nibomo funkcijas",
  description:
    "Iepazīsti bezmaksas atvērtā pirmkoda mācību kartītes ar FSRS spaced repetition, kartīšu veidošanu ar MI palīdzību, mācīšanos bezsaistē un sinhronizāciju, pārnesamu eksportu un darbināšanu savā serverī.",
  slug: "features",
  sections: [
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
