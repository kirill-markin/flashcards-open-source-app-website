import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards App - Free, Open-Source Spaced Repetition",
  description:
    "Free, open-source flashcards with FSRS spaced repetition, AI-assisted card creation, offline study and sync, portable exports, and self-hosting.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Free & open source",
      titleLines: [
        "Create cards.",
        "Review smarter.",
        "Remember more.",
      ],
      subtitle:
        "Free, open-source flashcards that schedule each review for the right time, work offline, and sync across the web, iOS, and Android. Use AI when you want help creating or improving cards.",
      trustLine: "No credit card. No ads. No trial countdown.",
      primaryLink: {
        label: "Get Started",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "View on GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Add this MCP server to your AI client:",
          link: {
            label: "https://mcp.flashcards-open-source-app.com/mcp",
            href: "https://mcp.flashcards-open-source-app.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Features",
      intro:
        "Everything you need to create useful cards, review at the right time, keep studying offline, and stay in control of your learning data.",
      items: [
        {
          title: "Smarter Reviews with FSRS",
          description:
            "Review the cards that are due today. FSRS brings difficult cards back sooner and waits longer before showing familiar ones again.",
        },
        {
          title: "AI-Assisted Card Creation",
          description:
            "Ask AI to help create cards, improve their wording, or clarify an answer. You stay in control of what gets saved.",
        },
        {
          title: "Offline Study with Automatic Sync",
          description:
            "Keep reviewing on your mobile device without an internet connection. Changes sync automatically so you can continue on the web, iOS, or Android.",
        },
        {
          title: "Import, Export, and Own Your Data",
          description:
            "Move your learning materials in or out whenever you like. Portable exports include your cards, tags, and related media.",
        },
        {
          title: "Works with AI Agents",
          description:
            "Connect through MCP or the Agent API so AI agents can help create, improve, and organize your cards.",
        },
        {
          title: "Free and Self-Hostable",
          description:
            "Use the hosted app for free, inspect the open-source code, or run it on your own infrastructure.",
        },
      ],
    },
  ],
  body: "",
} as const;
