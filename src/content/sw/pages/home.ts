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
          caption: "Au unganisha kiteja chochote cha AI kinachotumia MCP kupitia URL hii:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Jinsi Nibomo inavyofanya kazi",
      items: [
        {
          label: "01 · KADI ZA KUJIFUNZA KWA AI",
          titleLines: [
            "Iambie AI unachotaka kujifunza.",
          ],
          description: "Eleza mada au ambatisha maelezo yako. AI husaidia kubadilisha nyenzo zako kuwa kadi za kujifunza zenye maswali na majibu.",
          linkLabel: "Unda kadi za kujifunza",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Mazungumzo ya AI ya Nibomo yanayounda kadi kutoka kwenye mada au maelezo yaliyoambatishwa",
        },
        {
          label: "02 · ANZA KUJIFUNZA",
          titleLines: [
            "Swali moja kwa wakati.",
          ],
          description: "Fungua kadi na ujaribu kukumbuka jibu kabla ya kulionyesha. Jifunze kwa kasi yako, kadi moja kwa wakati.",
          linkLabel: "Anza kujifunza",
          imagePath: "/home/start-learning.png",
          imageAlt: "Kadi ya marudio ya Nibomo yenye kitufe cha kuonyesha jibu",
        },
        {
          label: "03 · MARUDIO MAHIRI",
          titleLines: [
            "Kagua jibu lako.",
            "Tathmini jinsi ulivyokumbuka.",
          ],
          description: "Onyesha jibu na uweke alama ya jinsi ilivyokuwa rahisi kulikumbuka. Nibomo hurudisha kadi ngumu mapema na zinazofahamika baadaye.",
          linkLabel: "Rudia kadi za kujifunza",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Kadi ya Nibomo yenye jibu lililoonyeshwa na chaguo za kutathmini kukumbuka",
        },
        {
          label: "04 · MAENDELEO YAKO",
          titleLines: [
            "Fanya kujifunza kuwa mazoea.",
          ],
          description: "Angalia siku zako za kujifunza kwenye kalenda na uendeleze mfululizo wako. Kila marudio ni hatua nyingine kuelekea lengo lako.",
          linkLabel: "Angalia maendeleo yako",
          imagePath: "/home/your-progress.png",
          imageAlt: "Skrini ya maendeleo ya Nibomo yenye kalenda ya siku mfululizo za kujifunza na orodha ya viwango",
        }
      ],
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
            "Endelea kurudia kwenye kifaa chako cha mkononi bila muunganisho wa intaneti. Mabadiliko husawazishwa kiotomatiki.",
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
    {
      type: "review_cta",
      titleLines: [
        "Acha Nibomo ipange marudio yako.",
        "Wewe zingatia kujifunza.",
      ],
      description: "Geuza unachojifunza kuwa kadi, rudia kwa wakati unaofaa na ukumbuke zaidi.",
    },
  ],
  body: "",
} as const;
