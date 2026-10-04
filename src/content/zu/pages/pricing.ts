import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Qala mahhala. I-Premium ukuze uthole i-AI eningi.",
  description:
    "Qala mahhala ohlelweni olusingathiwe, thuthukela ku-Premium nge-USD 6.99 ngenyanga ukuze uthole ingxoxo ye-AI eyengeziwe, noma uzisingathele isistimu enomthombo ovulekile kwingqalasizinda yakho ye-AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Qala mahhala. I-Premium ukuze uthole i-AI eningi.",
      intro:
        "Qala ohlelweni olusingathiwe mahhala, kungadingeki ikhadi lesikweletu, engeza i-Premium ukuze uthole ingxoxo ye-AI eyengeziwe, noma uzisingathele mahhala isistimu enomthombo ovulekile kwingqalasizinda yakho ye-AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Mahhala",
          price: "Mahhala",
          highlighted: true,
          bullets: [
            "Imilayezo yengxoxo ye-AI engu-50 ngenyanga",
            "Sebenzisa ukhiye wakho we-OpenAI API; ukusetshenziswa kwawo akubalwa emkhawulweni wanyanga zonke",
            "Ukuvumelanisa phakathi kwewebhu, i-iOS ne-Android kufakiwe",
            "Ayikho imikhawulo yohlelo lwentengo kumakhadi, kumafayela noma kusikhala sokugcina sesamba; kusebenza imikhawulo evamile yobuchwepheshe yefayela ngalinye neyomsebenzi ngamunye",
            "Ngenisa futhi ukhiphe amakhadi, amathegi nemidiya phakathi kohlelo olusingathiwe nolusingathwe nguwe",
            "Ukungena ngaphandle kwephasiwedi usebenzisa ikhodi ye-imeyili yesikhathi esisodwa",
          ],
          cta: {
            label: "Sebenzisa uhlelo olusingathiwe mahhala",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/inyanga",
          highlighted: false,
          bullets: [
            "Isivivinyo samahhala sezinsuku ezingu-7 sababhalisi abasha abafanelekayo; kudingeka indlela yokukhokha",
            "Imilayezo yengxoxo ye-AI engu-1000 ngenyanga",
            "Imibala yokugqamisa oyikhethayo",
            "Konke okusohlelweni lwamahhala",
            "Ukubhalisa okukodwa kwe-akhawunti yakho kuwebhu, i-iOS ne-Android",
            "Intengo ikhonjiswa nge-USD kuhlanganise nezintela; ekukhokheni kungase kuboniswe intengo ngemali yasekhaya",
            "Kuvuselelwa njalo ngenyanga; khansela noma nini futhi ugcine ukufinyelela kuze kuphele isikhathi samanje",
          ],
          cta: {
            label: "Qala isivivinyo samahhala sezinsuku ezingu-7",
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
