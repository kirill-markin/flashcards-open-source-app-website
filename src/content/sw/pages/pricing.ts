import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Ni bure kutumia. Ni bure kujipangia mwenyewe.",
  description:
    "Tumia programu iliyopangishwa bila gharama, ikijumuisha AI na usawazishaji wakati wa beta, au jipangie mwenyewe mrundikano wa chanzo huria kwenye miundombinu yako ya AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Ni bure kutumia. Ni bure kujipangia mwenyewe.",
      intro:
        "Tumia programu iliyopangishwa bila gharama na bila kadi ya mkopo, au endesha mrundikano wa chanzo huria kwenye miundombinu yako ya AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Iliyopangishwa",
          price: "Bila malipo",
          highlighted: true,
          bullets: [
            "Vipengele vya AI vimejumuishwa wakati wa beta",
            "Usawazishaji kati ya wavuti, iOS na Android umejumuishwa",
            "Hakuna mgao unaotegemea mpango kwa kadi, faili au hifadhi yote wakati wa beta; mipaka ya kawaida ya kiufundi kwa kila faili na kila operesheni inatumika",
            "Leta na utoe kadi, lebo na maudhui kati ya usakinishaji uliopangishwa na ule uliojipangia mwenyewe",
            "Kuingia bila nenosiri kwa msimbo wa mara moja unaotumwa kwa barua pepe",
            "Utengenezaji wa kadi na marudio ya msingi vitabaki bila malipo; matumizi makubwa zaidi ya AI yanaweza baadaye kuhitaji ufunguo wako wa API wa mtoa huduma au chaguo la kulipia",
          ],
          cta: {
            label: "Tumia programu iliyopangishwa bila malipo",
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
