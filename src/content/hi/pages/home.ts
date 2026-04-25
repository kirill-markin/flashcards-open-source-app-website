import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - ओपन सोर्स स्पेस्ड रिपिटीशन",
  description:
    "स्पेस्ड रिपिटीशन, AI चैट और एजेंट-तैयार ऑनबोर्डिंग वाले इस ओपन सोर्स फ्लैशकार्ड ऐप के साथ कार्ड बनाइए, बेहतर सीखिए और कम भूलिए।",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "कार्ड बनाइए।",
        "बेहतर सीखिए।",
        "कम भूलिए।",
      ],
      subtitle:
        "स्पेस्ड रिपिटीशन, पासवर्ड-रहित लॉगिन, AI चैट और एजेंट-तैयार ऑनबोर्डिंग वाला ओपन सोर्स फ्लैशकार्ड ऐप। आज ही होस्टेड वेब ऐप इस्तेमाल करें, Claude Code, Codex या OpenClaw को एक discovery URL के जरिए जोड़ें, और वेब, iOS तथा एजेंट वर्कफ़्लो को उसी बैकएंड मॉडल पर चलाएँ।",
      primaryLink: {
        label: "शुरू करें",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "GitHub पर देखें",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "शुरुआत इस discovery URL पर GET से करें:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "मुख्य खूबियाँ",
      intro:
        "फ्लैशकार्ड के लिए एक सधा हुआ सेटअप: होस्टेड वेब ऐप, रिपॉज़िटरी में शामिल iOS क्लाइंट, बाहरी एजेंट API, और self-hosting के लिए पहले से तैयार इन्फ्रास्ट्रक्चर।",
      items: [
        {
          title: "स्पेस्ड रिपिटीशन",
          description:
            "FSRS शेड्यूलिंग और आसान रेटिंग फ़्लो के साथ कार्ड दोहराइए। बैकएंड और iOS क्लाइंट शेड्यूलर के व्यवहार को एक जैसा बनाए रखते हैं।",
        },
        {
          title: "वेब ऐप और AI चैट",
          description:
            "होस्टेड वेब ऐप में कार्ड बनाइए, अपना संग्रह देखिए, जिन आइटमों की बारी आ गई है उनकी समीक्षा कीजिए, और फ़ाइल संलग्नकों के साथ AI चैट का उपयोग कीजिए।",
        },
        {
          title: "पासवर्ड-रहित लॉगिन",
          description:
            "Cognito के जरिए ईमेल OTP मिलता है, और auth तथा app subdomains के बीच shared-domain cookies काम करती हैं।",
        },
        {
          title: "एजेंट-तैयार ऑनबोर्डिंग",
          description:
            "AI एजेंट को discovery URL दीजिए, नया 8-digit ईमेल कोड पुष्टि कीजिए, और उसे login, API key setup, account loading, workspace selection तथा SQL discovery पूरा करने दीजिए।",
        },
        {
          title: "स्व-होस्टेड",
          description:
            "Postgres को लोकल रूप से चलाइए, auth, backend और web को अलग-अलग शुरू कीजिए, और AWS deployment path पर अपना नियंत्रण बनाए रखिए।",
        },
        {
          title: "ऑफ़लाइन-प्रथम क्लाइंट",
          description:
            "रिपॉज़िटरी में लोकल SQLite और सिंक वाला iOS app पहले से शामिल है, और Android app अब Google Play पर उपलब्ध है।",
        },
      ],
    },
  ],
  body: "",
} as const;
