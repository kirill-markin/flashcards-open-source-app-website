import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Anza bila malipo. Premium kwa AI zaidi.",
  description:
    "Anza bila malipo kwenye programu iliyopangishwa, pandisha hadi Premium kwa USD 6.99 kwa mwezi upate gumzo zaidi la AI, au jipangie mwenyewe mrundikano wa chanzo huria kwenye miundombinu yako ya AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Anza bila malipo. Premium kwa AI zaidi.",
      intro:
        "Anza kwenye programu iliyopangishwa bila malipo na bila kadi ya mkopo, ongeza Premium upate gumzo zaidi la AI, au jipangie mwenyewe mrundikano wa chanzo huria kwenye miundombinu yako ya AWS bila malipo.",
      tiers: [
        {
          type: "auth_tier",
          name: "Bila malipo",
          price: "Bila malipo",
          highlighted: true,
          bullets: [
            "Ujumbe 50 wa gumzo la AI kwa mwezi",
            "Tumia ufunguo wako mwenyewe wa OpenAI API; matumizi yake hayahesabiwi kwenye kikomo cha kila mwezi",
            "Usawazishaji kati ya wavuti, iOS na Android umejumuishwa",
            "Hakuna mgao unaotegemea mpango kwa kadi, faili au hifadhi yote; mipaka ya kawaida ya kiufundi kwa kila faili na kila operesheni inatumika",
            "Leta na utoe kadi, lebo na maudhui kati ya usakinishaji uliopangishwa na ule uliojipangia mwenyewe",
            "Kuingia bila nenosiri kwa msimbo wa mara moja unaotumwa kwa barua pepe",
          ],
          cta: {
            label: "Tumia programu iliyopangishwa bila malipo",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mwezi",
          highlighted: false,
          bullets: [
            "Majaribio ya siku 7 bila malipo kwa wanaojisajili wapya wanaostahiki; njia ya malipo inahitajika",
            "Ujumbe 1000 wa gumzo la AI kwa mwezi",
            "Rangi maalumu za msisitizo",
            "Kila kitu kilicho kwenye mpango wa Bila malipo",
            "Usajili mmoja kwa akaunti yako kwenye wavuti, iOS na Android",
            "Bei iko katika USD ikijumuisha kodi; wakati wa kulipa unaweza kuona bei kwa sarafu ya nchi yako",
            "Hujisasisha kila mwezi; ghairi wakati wowote na uendelee kuwa na ufikiaji hadi mwisho wa kipindi",
          ],
          cta: {
            label: "Anza majaribio ya siku 7 bila malipo",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Iliyojipangia mwenyewe",
          price: "Bila malipo",
          highlighted: false,
          bullets: [
            "Programu ya chanzo huria na miundombinu ya AWS CDK",
            "Njia kamili ya usambazaji wa AWS pamoja na mpangilio wa uendelezaji wa ndani wa Docker/Postgres",
            "Wewe hutoa na kudumisha miundombinu, barua pepe, ufuatiliaji na vitambulisho vya AI",
            "Wewe hulipia gharama za miundombinu na za watoa huduma wengine",
            "Leta na utoe kadi, lebo na maudhui kati ya usakinishaji uliopangishwa na ule uliojipangia mwenyewe",
          ],
          cta: {
            label: "Jipangie mwenyewe kutoka GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
