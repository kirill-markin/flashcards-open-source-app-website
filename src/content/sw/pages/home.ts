import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Programu ya kadi za kujifunzia ya bure, ya chanzo huria yenye marudio ya vipindi",
  description:
    "Kadi za kujifunzia bila malipo na za chanzo huria zenye marudio ya vipindi ya FSRS, utengenezaji wa kadi kwa msaada wa AI, kusoma bila intaneti na usawazishaji, utoaji rahisi wa data na kujipangia mwenyewe.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Bila malipo na chanzo huria",
      titleLines: [
        "Tengeneza kadi.",
        "Fanya marudio kwa akili zaidi.",
        "Kumbuka zaidi.",
      ],
      subtitle:
        "Kadi za kujifunzia bila malipo na za chanzo huria zinazopanga kila marudio kwa wakati unaofaa, hufanya kazi bila intaneti na husawazishwa kwenye wavuti, iOS na Android. Tumia AI unapohitaji msaada wa kutengeneza au kuboresha kadi. Nibomo hapo awali ilijulikana kama Flashcards Open Source App.",
      trustLine: "Hakuna kadi ya mkopo. Hakuna matangazo. Hakuna kuhesabu siku za majaribio.",
      primaryLink: {
        label: "Anza sasa",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Itazame kwenye GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Ongeza seva hii ya MCP kwenye kiteja chako cha AI:",
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
      title: "Vipengele",
      intro:
        "Kila kitu unachohitaji ili kutengeneza kadi zenye manufaa, kufanya marudio kwa wakati unaofaa, kuendelea kusoma bila intaneti na kubaki na udhibiti wa data yako ya kujifunzia.",
      items: [
        {
          title: "Marudio bora zaidi kwa FSRS",
          description:
            "Pitia kadi zinazostahili marudio leo. FSRS hurudisha kadi ngumu mapema na husubiri muda mrefu zaidi kabla ya kuonyesha tena kadi unazozifahamu.",
        },
        {
          title: "Kutengeneza kadi kwa msaada wa AI",
          description:
            "Omba AI ikusaidie kutengeneza kadi, kuboresha maneno yake au kufafanua jibu. Wewe ndiye unaamua kitakachohifadhiwa.",
        },
        {
          title: "Kusoma bila intaneti, usawazishaji wa kiotomatiki",
          description:
            "Endelea na marudio kwenye simu yako hata bila muunganisho wa intaneti. Mabadiliko husawazishwa yenyewe, hivyo unaweza kuendelea kwenye wavuti, iOS au Android.",
        },
        {
          title: "Leta, toa na umiliki data yako",
          description:
            "Hamisha vifaa vyako vya kujifunzia ndani au nje wakati wowote. Unapotoa data, kadi zako, lebo na maudhui yanayohusiana hujumuishwa.",
        },
        {
          title: "Hufanya kazi na mawakala wa AI",
          description:
            "Unganisha kupitia MCP au Agent API ili mawakala wa AI waweze kukusaidia kutengeneza, kuboresha na kupanga kadi zako.",
        },
        {
          title: "Bila malipo na unaweza kujipangia mwenyewe",
          description:
            "Tumia programu iliyopangishwa bila malipo, kagua msimbo wa chanzo huria, au iendeshe kwenye miundombinu yako mwenyewe.",
        },
      ],
    },
  ],
  body: "",
} as const;
