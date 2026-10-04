import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Free to start. Premium for more AI.",
  description:
    "Start free on the hosted app, upgrade to Premium for USD 6.99/month for more AI chat, or self-host the open-source stack on your own AWS infrastructure.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Free to start. Premium for more AI.",
      intro:
        "Start on the hosted app free with no credit card required, add Premium for more AI chat, or self-host the open-source stack on your own AWS infrastructure for free.",
      tiers: [
        {
          type: "auth_tier",
          name: "Free",
          price: "Free",
          highlighted: true,
          bullets: [
            "50 AI chat messages per month",
            "Use your own OpenAI API key; its usage does not count against the monthly limit",
            "Sync across web, iOS, and Android included",
            "No plan-based quotas on cards, files, or total storage; normal per-file and per-operation technical limits apply",
            "Import and export cards, tags, and media between hosted and self-hosted installations",
            "Passwordless sign-in with a one-time email code",
          ],
          cta: {
            label: "Use the hosted app free",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/month",
          highlighted: false,
          bullets: [
            "7-day free trial for eligible new subscribers; payment method required",
            "1,000 AI chat messages per month",
            "Custom accent colors",
            "Everything in Free",
            "One subscription for your account on web, iOS, and Android",
            "Priced in USD with taxes included; checkout may show a local-currency price",
            "Renews monthly; cancel any time and keep access until the end of the period",
          ],
          cta: {
            label: "Start 7-day free trial",
            href: "https://app.nibomo.com",
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
