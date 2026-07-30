import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Flashcards Features",
  description:
    "Explore free, open-source flashcards with FSRS spaced repetition, AI-assisted card creation, offline study and sync, portable exports, and self-hosting.",
  slug: "features",
  sections: [
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
