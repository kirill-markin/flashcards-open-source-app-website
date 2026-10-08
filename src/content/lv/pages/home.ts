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
        "Bezmaksas mācību kartītes, kas katru atkārtojumu ieplāno īstajā laikā, strādā bezsaistē un sinhronizējas starp tīmekli, iOS un Android. Kad vajag palīdzību kartīšu veidošanā vai uzlabošanā, izmanto MI.",
      trustLine: "Bez kredītkartes. Bez reklāmām. Bez izmēģinājuma laika atpakaļskaitīšanas.",
      primaryLink: {
        label: "Sākt lietot",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Skatīt vietnē GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Vai pievienojiet jebkuru MI klientu, kas atbalsta MCP, izmantojot šo URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Kā darbojas Nibomo",
      items: [
        {
          label: "01 · MĀCĪBU KARTĪTES AR MI",
          titleLines: [
            "Pastāstiet MI, ko vēlaties apgūt.",
          ],
          description: "Aprakstiet tēmu vai pievienojiet savas piezīmes. MI palīdz pārvērst materiālus mācību kartītēs ar jautājumiem un atbildēm.",
          linkLabel: "Izveidot kartītes",
          imagePath: "/home/ai-flashcards-lv.png",
          imageAlt: "Nibomo MI saruna veido mācību kartītes no tēmas vai pievienotām piezīmēm",
        },
        {
          label: "02 · SĀCIET MĀCĪTIES",
          titleLines: [
            "Viens jautājums vienlaikus.",
          ],
          description: "Atveriet kartīti un mēģiniet atcerēties atbildi, pirms to parādāt. Mācieties savā tempā, pa vienai kartītei.",
          linkLabel: "Sākt mācīties",
          imagePath: "/home/start-learning-lv.png",
          imageAlt: "Nibomo atkārtošanas kartīte ar atbildes parādīšanas pogu",
        },
        {
          label: "03 · GUDRA ATKĀRTOŠANA",
          titleLines: [
            "Pārbaudiet atbildi.",
            "Novērtējiet, cik labi atcerējāties.",
          ],
          description: "Parādiet atbildi un norādiet, cik viegli to atcerējāties. Nibomo grūtās kartītes parāda atkārtoti agrāk, bet pazīstamās vēlāk.",
          linkLabel: "Atkārtot kartītes",
          imagePath: "/home/smart-reviews-lv.png",
          imageAlt: "Nibomo kartīte ar parādītu atbildi un atcerēšanās novērtēšanas iespējām",
        },
        {
          label: "04 · JŪSU PROGRESS",
          titleLines: [
            "Pārvērtiet mācīšanos par ieradumu.",
          ],
          description: "Skatiet mācību dienas kalendārā un turpiniet savu dienu virkni. Katra atkārtošana ir vēl viens solis pretī mērķim.",
          linkLabel: "Skatīt progresu",
          imagePath: "/home/your-progress-lv.png",
          imageAlt: "Nibomo progresa ekrāns ar secīgu mācību dienu kalendāru un reitingu tabulu",
        }
      ],
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
            "Turpiniet atkārtot mobilajā ierīcē bez interneta savienojuma. Izmaiņas tiek sinhronizētas automātiski.",
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
    {
      type: "review_cta",
      titleLines: [
        "Ļaujiet Nibomo plānot atkārtošanu.",
        "Jūs koncentrējieties uz mācīšanos.",
      ],
      description: "Pārvērtiet apgūstamo mācību kartītēs, atkārtojiet īstajā brīdī un atcerieties vairāk.",
    },
  ],
  body: "",
} as const;
