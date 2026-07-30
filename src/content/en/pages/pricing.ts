import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Free to use. Free to self-host.",
  description:
    "Use the hosted app at no cost, with AI and sync included during beta, or self-host the open-source stack on your own AWS infrastructure.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Free to use. Free to self-host.",
      intro:
        "Use the hosted app at no cost with no credit card required, or run the open-source stack on your own AWS infrastructure.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hosted",
          price: "Free",
          highlighted: true,
          bullets: [
            "AI features included during beta",
            "Sync across web, iOS, and Android included",
            "No plan-based quotas on cards, files, or total storage during beta; normal per-file and per-operation technical limits apply",
            "Import and export cards, tags, and media between hosted and self-hosted installations",
            "Passwordless sign-in with a one-time email code",
            "Core card creation and review will remain free; higher AI usage may later require your own provider API key or a paid option",
          ],
          cta: {
            label: "Use the hosted app free",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "Free",
          highlighted: false,
          bullets: [
            "Open-source application and AWS CDK infrastructure",
            "Full AWS deployment path plus a local Docker/Postgres development setup",
            "You supply and maintain infrastructure, email, monitoring, and AI credentials",
            "You pay infrastructure and third-party provider costs",
            "Import and export cards, tags, and media between hosted and self-hosted installations",
          ],
          cta: {
            label: "Self-host from GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
