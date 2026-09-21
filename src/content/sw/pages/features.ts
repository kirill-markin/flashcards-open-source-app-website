import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Vipengele vya Nibomo",
  description:
    "Chunguza kadi za kujifunzia bila malipo na za chanzo huria zenye marudio ya vipindi ya FSRS, utengenezaji wa kadi kwa msaada wa AI, kusoma bila intaneti na usawazishaji, utoaji rahisi wa data na kujipangia mwenyewe.",
  slug: "features",
  sections: [
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
