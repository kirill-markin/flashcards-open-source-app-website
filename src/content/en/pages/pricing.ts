import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Pricing",
  description:
    "Free self-hosting or hosted cloud beta. Open source, no feature gating.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Pricing",
      intro: "All features are available in every plan. No feature gating.",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "Free",
          highlighted: false,
          bullets: [
            "Full source code on GitHub",
            "Local Postgres + auth + backend + web stack",
            "All current features included",
            "Your domain, your data, your deployment",
            "Adapt the stack for your own learning workflow",
          ],
          cta: {
            label: "View on GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Cloud Beta",
          price: "Free during beta",
          highlighted: true,
          bullets: [
            "Hosted web app on the project domain",
            "Email OTP authentication",
            "Shared-domain browser login flow",
            "Managed AWS infrastructure",
            "Early access while the product is still evolving",
          ],
          cta: {
            label: "Get Started",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
