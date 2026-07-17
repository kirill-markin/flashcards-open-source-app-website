import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Pricing",
  description:
    "The hosted app and core flashcard experience are free. You can also self-host the free, open-source software.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Pricing",
      intro:
        "The hosted app and core flashcard creation and review features are free.",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "Free",
          highlighted: false,
          bullets: [
            "Free and open-source software",
            "Full source code on GitHub",
            "All current core features included",
            "Your domain, your data, your deployment",
            "You are responsible for any infrastructure costs",
          ],
          cta: {
            label: "View on GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Hosted",
          price: "Free",
          highlighted: true,
          bullets: [
            "Hosted web app with managed infrastructure",
            "Core flashcard creation and review features included",
            "No credit card and no trial countdown",
            "Email one-time-code authentication",
            "The service is currently in beta and provided on a best-effort basis",
            "Optional paid features may be added later, but core flashcard creation and review will remain free",
          ],
          cta: {
            label: "Start studying free",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
