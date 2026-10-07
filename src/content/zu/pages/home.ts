import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Amakhadi okufunda amahhala ne-spaced repetition, umthombo ovulekile",
  description:
    "Amakhadi okufunda amahhala anomthombo ovulekile: i-spaced repetition nge-FSRS, ukudala amakhadi ngosizo lwe-AI, ukufunda ngaphandle kwe-inthanethi nokuvumelanisa, ukukhipha idatha nokuzisingathela.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Mahhala nomthombo ovulekile",
      titleLines: [
        "Dala amakhadi.",
        "Buyekeza ngokuhlakanipha.",
        "Khumbula okwengeziwe.",
      ],
      subtitle:
        "Amakhadi okufunda amahhala anomthombo ovulekile, ahlelela ukubuyekezwa ngakunye ngesikhathi esifanele, asebenza ngaphandle kwe-inthanethi futhi avumelaniswe kuwebhu, ku-iOS naku-Android. Sebenzisa i-AI lapho udinga usizo lokudala noma lokuthuthukisa amakhadi. I-Nibomo yayibizwa ngaphambilini ngokuthi yi-Flashcards Open Source App.",
      trustLine: "Alidingeki ikhadi lesikweletu. Azikho izikhangiso. Akukho ukubala kwesikhathi sokuzama.",
      primaryLink: {
        label: "Qala manje",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Buka ku-GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Noma xhuma noma yiliphi iklayenti le-AI elisekela i-MCP ngale URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Indlela i-Nibomo esebenza ngayo",
      items: [
        {
          label: "01 · AMAKHADI OKUFUNDA NGE-AI",
          titleLines: [
            "Tshela i-AI ukuthi ufuna ukufunda ini.",
          ],
          description: "Chaza isihloko noma unamathisele amanothi akho. I-AI ikusiza ukuguqula izinto zakho zokufunda zibe amakhadi anemibuzo nezimpendulo.",
          linkLabel: "Dala amakhadi okufunda",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Ingxoxo ye-AI ye-Nibomo edala amakhadi ngesihloko noma ngamanothi anamathiselwe",
        },
        {
          label: "02 · QALA UKUFUNDA",
          titleLines: [
            "Umbuzo owodwa ngesikhathi.",
          ],
          description: "Vula ikhadi bese uzama ukukhumbula impendulo ngaphambi kokuyiveza. Funda ngejubane lakho, ikhadi elilodwa ngesikhathi.",
          linkLabel: "Qala ukufunda",
          imagePath: "/home/start-learning.png",
          imageAlt: "Ikhadi lokubuyekeza le-Nibomo elinenkinobho yokuveza impendulo",
        },
        {
          label: "03 · UKUBUYEKEZA OKUHLAKANIPHILE",
          titleLines: [
            "Hlola impendulo yakho.",
            "Linganisa ukuthi ukhumbule kangakanani.",
          ],
          description: "Veza impendulo bese ubika ukuthi kube lula kangakanani ukuyikhumbula. I-Nibomo ibuyisa amakhadi anzima ngokushesha, ajwayelekile kamuva.",
          linkLabel: "Buyekeza amakhadi",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Ikhadi le-Nibomo eliveza impendulo nezinketho zokulinganisa ukukhumbula",
        },
        {
          label: "04 · INQUBEKELA PHAMBILI YAKHO",
          titleLines: [
            "Yenza ukufunda kube umkhuba.",
          ],
          description: "Bheka izinsuku zakho zokufunda ekhalendeni bese uqhubeka nokufunda izinsuku ezilandelanayo. Ukubuyekeza ngakunye kuyisinyathelo esengeziwe esiya enhlosweni yakho.",
          linkLabel: "Bheka inqubekela phambili",
          imagePath: "/home/your-progress.png",
          imageAlt: "Isikrini senqubekela phambili se-Nibomo esinekhalenda lezinsuku zokufunda ezilandelanayo nohlu lwamazinga",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Izici",
      intro:
        "Konke okudingayo ukuze udale amakhadi awusizo, ubuyekeze ngesikhathi esifanele, uqhubeke ufunde ngaphandle kwe-inthanethi, futhi ulawule idatha yakho yokufunda.",
      items: [
        {
          title: "Ukubuyekeza okuhlakaniphile nge-FSRS",
          description:
            "Buyekeza amakhadi asesikhathini sokubuyekezwa namuhla. I-FSRS ibuyisa amakhadi anzima ngokushesha, ibe ilinde isikhathi eside ngaphambi kokuphinda ikubonise lawo osuwajwayele.",
        },
        {
          title: "Ukudala amakhadi ngosizo lwe-AI",
          description:
            "Cela i-AI ikusize ukudala amakhadi, ukuthuthukisa indlela abhalwe ngayo, noma ukucacisa impendulo. Wena uhlala ulawula okugcinwayo.",
        },
        {
          title: "Funda ngaphandle kwe-inthanethi, kuvumelaniswe ngokuzenzakalela",
          description:
            "Qhubeka nokubuyekeza kudivayisi yakho yeselula ngaphandle kokuxhumeka ku-inthanethi. Izinguquko zivunyelaniswa ngokuzenzakalelayo.",
        },
        {
          title: "Ngenisa, ukhiphe, futhi ube ngumnikazi wedatha yakho",
          description:
            "Hambisa izinto zakho zokufunda ngaphakathi noma ngaphandle noma nini uma uthanda. Okukhishwayo kufaka amakhadi akho, amathegi nemidiya ehambisanayo.",
        },
        {
          title: "Isebenza nama-ejenti e-AI",
          description:
            "Xhuma nge-MCP noma nge-Agent API ukuze ama-ejenti e-AI akusize ukudala, ukuthuthukisa nokuhlela amakhadi akho.",
        },
        {
          title: "Mahhala futhi ungazisingathela",
          description:
            "Sebenzisa uhlelo olusingathiwe mahhala, uhlole ikhodi enomthombo ovulekile, noma ulusebenzise kwingqalasizinda yakho.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Vumela i-Nibomo ihlele ukubuyekeza kwakho.",
        "Wena gxila ekufundeni.",
      ],
      description: "Guqula okufundayo kube amakhadi, buyekeza ngesikhathi esifanele futhi ukhumbule okuningi.",
    },
  ],
  body: "",
} as const;
