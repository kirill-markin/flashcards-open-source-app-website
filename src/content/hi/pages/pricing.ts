import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "प्राइसिंग",
  description:
    "मुफ्त self-hosting या hosted cloud beta। ओपन सोर्स, बिना feature gating।",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "प्राइसिंग",
      intro: "हर plan में सभी features उपलब्ध हैं। कोई feature gating नहीं।",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "मुफ्त",
          highlighted: false,
          bullets: [
            "GitHub पर पूरा source code",
            "Local Postgres + auth + backend + web stack",
            "सभी मौजूदा features शामिल",
            "आपका domain, आपका data, आपकी deployment",
            "अपने learning workflow के लिए stack को बदलें",
          ],
          cta: {
            label: "GitHub पर देखें",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Cloud Beta",
          price: "बीटा के दौरान मुफ्त",
          highlighted: true,
          bullets: [
            "Project domain पर hosted web app",
            "Email OTP authentication",
            "Shared-domain browser login flow",
            "Managed AWS infrastructure",
            "Product के विकसित होते समय early access",
          ],
          cta: {
            label: "शुरू करें",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
