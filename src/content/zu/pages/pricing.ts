import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Mahhala ukusebenzisa. Mahhala nokuzisingathela.",
  description:
    "Sebenzisa uhlelo olusingathiwe ngaphandle kwenkokhelo, nge-AI nokuvumelanisa okufakiwe ngesikhathi se-beta, noma uzisingathele isistimu enomthombo ovulekile kwingqalasizinda yakho ye-AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Mahhala ukusebenzisa. Mahhala nokuzisingathela.",
      intro:
        "Sebenzisa uhlelo olusingathiwe ngaphandle kwenkokhelo, kungadingeki ikhadi lesikweletu, noma usebenzise isistimu enomthombo ovulekile kwingqalasizinda yakho ye-AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Okusingathiwe",
          price: "Mahhala",
          highlighted: true,
          bullets: [
            "Izici ze-AI zifakiwe ngesikhathi se-beta",
            "Ukuvumelanisa phakathi kwewebhu, i-iOS ne-Android kufakiwe",
            "Ayikho imikhawulo yohlelo lwentengo kumakhadi, kumafayela noma kusikhala sokugcina sesamba ngesikhathi se-beta; kusebenza imikhawulo evamile yobuchwepheshe yefayela ngalinye neyomsebenzi ngamunye",
            "Ngenisa futhi ukhiphe amakhadi, amathegi nemidiya phakathi kohlelo olusingathiwe nolusingathwe nguwe",
            "Ukungena ngaphandle kwephasiwedi usebenzisa ikhodi ye-imeyili yesikhathi esisodwa",
            "Ukudala nokubuyekeza amakhadi okuyisisekelo kuzohlala kumahhala; ukusetshenziswa okukhulu kwe-AI kungase kudinge kamuva ukhiye wakho we-API womhlinzeki noma inketho ekhokhelwayo",
          ],
          cta: {
            label: "Sebenzisa uhlelo olusingathiwe mahhala",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Okuzisingathelwe",
          price: "Mahhala",
          highlighted: false,
          bullets: [
            "Uhlelo lokusebenza nengqalasizinda ye-AWS CDK okunomthombo ovulekile",
            "Indlela egcwele yokusebenzisa i-AWS kanye nokusetha kokuthuthukisa kwasendaweni nge-Docker/Postgres",
            "Wena unikeza futhi ugcine ingqalasizinda, i-imeyili, ukuqapha nemininingwane yokungena ye-AI",
            "Wena ukhokhela izindleko zengqalasizinda nezabahlinzeki bangaphandle",
            "Ngenisa futhi ukhiphe amakhadi, amathegi nemidiya phakathi kohlelo olusingathiwe nolusingathwe nguwe",
          ],
          cta: {
            label: "Zisingathele usuka ku-GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
