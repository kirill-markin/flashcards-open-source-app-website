import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "फ़ीचर्स",
  description:
    "FSRS review, card creation, AI chat, agent-ready onboarding, passwordless auth, self-hosting, और offline-first clients।",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "फ़ीचर्स",
      intro:
        "एक फोकस्ड फ्लैशकार्ड स्टैक: होस्टेड वेब ऐप, repository में iOS client, MCP server और agent API, और self-hosting के लिए पहले से तैयार infrastructure।",
      items: [
        {
          title: "FSRS Review",
          description:
            "Due cards को FSRS के साथ schedule किया जाता है। चार ratings में से एक submit करें और backend client review timestamp के आधार पर अगला review समय अपडेट करता है।",
        },
        {
          title: "Card Creation And Chat",
          description:
            "Web client से front/back cards बनाएं और workspace data तथा file attachments, including plain text uploads, के साथ AI chat इस्तेमाल करें।",
        },
        {
          title: "Agent-Ready Onboarding",
          description:
            "Flashcards MCP server को Claude, Cursor या किसी भी MCP client में जोड़ें और वह आपके cards पढ़, बना और संपादित कर सकता है। Claude Code, Codex या OpenClaw जैसे CLI agents इसके बजाय discovery URL पर जा सकते हैं, API key store कर सकते हैं, और /v1/agent/sql surface के जरिए काम कर सकते हैं — इंसान से सिर्फ एक कदम: नया 8-digit email code साझा करना।",
        },
        {
          title: "Passwordless Auth",
          description:
            "Email OTP authentication एक dedicated auth service पर चलती है। Browser sessions shared-domain cookies reuse करते हैं ताकि subdomains के बीच login साफ़ तरीके से काम करे।",
        },
        {
          title: "Self-Hosted Stack",
          description:
            "Postgres, auth, backend, और web client को locally चलाएं। Production deployment पहले से AWS के लिए CDK, CloudFront, API Gateway, Lambda, और RDS के साथ wired है।",
        },
        {
          title: "Published Agent API",
          description:
            "मौजूदा external contract discovery, OTP bootstrap, workspace selection, और workspace, cards, decks, तथा review events पर published SQL dialect को कवर करता है।",
        },
        {
          title: "Offline-First Clients",
          description:
            "Repository में local SQLite और backend sync routes वाला iOS client पहले से है, और Android app अब Google Play पर उपलब्ध है।",
        },
      ],
    },
  ],
  body: "",
} as const;
