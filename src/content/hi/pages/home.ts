import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - ओपन सोर्स स्पेस्ड रिपिटीशन",
  description:
    "स्पेस्ड रिपिटीशन, AI चैट, और एजेंट-रेडी ऑनबोर्डिंग के लिए बने ओपन सोर्स फ्लैशकार्ड ऐप के साथ कार्ड बनाएं, ज्यादा सीखें, और कम भूलें।",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "कार्ड बनाइए।",
        "ज्यादा सीखिए।",
        "कम भूलिए।",
      ],
      subtitle:
        "स्पेस्ड रिपिटीशन, पासवर्डलेस ऑथ, AI चैट, और एजेंट-रेडी ऑनबोर्डिंग फ्लो वाला ओपन सोर्स फ्लैशकार्ड ऐप। आज ही होस्टेड वेब ऐप इस्तेमाल करें, Claude Code, Codex, या OpenClaw को एक discovery URL से जोड़ें, और web, iOS, तथा agent workflows को एक ही backend मॉडल पर रखें।",
      primaryLink: {
        label: "शुरू करें",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "GitHub पर देखें",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "इस discovery URL पर GET से शुरू करें:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "फ़ीचर्स",
      intro:
        "एक फोकस्ड फ्लैशकार्ड स्टैक: होस्टेड वेब ऐप, repo में iOS client, external agent API, और self-hosting के लिए पहले से तैयार infrastructure।",
      items: [
        {
          title: "स्पेस्ड रिपिटीशन",
          description:
            "FSRS scheduling और simple rating flow के साथ कार्ड review करें। Backend और iOS client scheduler behavior को aligned रखते हैं।",
        },
        {
          title: "वेब ऐप और AI चैट",
          description:
            "होस्टेड वेब ऐप में कार्ड बनाएं, अपनी collection देखें, due items review करें, और file attachments के साथ AI चैट इस्तेमाल करें।",
        },
        {
          title: "पासवर्डलेस ऑथ",
          description:
            "Cognito के जरिए email OTP और auth तथा app subdomains के बीच shared-domain cookies।",
        },
        {
          title: "एजेंट-रेडी ऑनबोर्डिंग",
          description:
            "AI agent को discovery URL दें, नया 8-digit email code confirm करें, और उसे login, API key setup, account loading, workspace selection, तथा SQL discovery पूरा करने दें।",
        },
        {
          title: "Self-Hosted",
          description:
            "Postgres को locally चलाएं, auth, backend, और web को अलग-अलग शुरू करें, और AWS deployment path पर अपना नियंत्रण रखें।",
        },
        {
          title: "Offline-First Clients",
          description:
            "Repository में local SQLite और sync वाला iOS app पहले से शामिल है, और Android app अब Google Play पर उपलब्ध है।",
        },
      ],
    },
  ],
  body: "",
} as const;
