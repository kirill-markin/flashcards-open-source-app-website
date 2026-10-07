import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Free, Open-Source Spaced Repetition Flashcards App",
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
        "Free, open-source flashcards that schedule each review for the right time, work offline, and sync across the web, iOS, and Android. Nibomo was formerly known as Flashcards Open Source App.",
      trustLine: "No credit card. No ads. No trial.",
      primaryLink: {
        label: "Get Started",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "View on GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Or connect any MCP-compatible AI client using this URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "How Nibomo works",
      items: [
        {
          label: "01 · AI FLASHCARDS",
          titleLines: ["Tell AI what you want to learn."],
          description:
            "Describe a topic or attach your notes. AI helps turn your material into flashcards with questions and answers.",
          linkLabel: "Create flashcards",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Nibomo AI chat creating flashcards from a topic or attached notes",
        },
        {
          label: "02 · START LEARNING",
          titleLines: ["One question at a time."],
          description:
            "Open a flashcard and try to recall the answer before revealing it. Learn at your own pace, one card at a time.",
          linkLabel: "Start learning",
          imagePath: "/home/start-learning.png",
          imageAlt: "A Nibomo review flashcard with a Show answer button",
        },
        {
          label: "03 · SMART REVIEWS",
          titleLines: ["Check your answer.", "Rate your recall."],
          description:
            "Reveal the answer and mark how easily you remembered it. Nibomo brings difficult cards back sooner and familiar ones later.",
          linkLabel: "Review flashcards",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "A revealed Nibomo flashcard with Again, Hard, Good, and Easy review ratings",
        },
        {
          label: "04 · YOUR PROGRESS",
          titleLines: ["Turn learning into a habit."],
          description:
            "See your study days on the calendar and keep your streak going. Every review is another step toward your goal.",
          linkLabel: "View your progress",
          imagePath: "/home/your-progress.png",
          imageAlt: "Nibomo progress screen showing a study streak calendar and rating leaderboard",
        },
      ],
    },
    {
      type: "feature_list",
      title: "Key features",
      intro:
        "Everything you need to create useful cards, review at the right time, keep studying offline, and stay in control of your learning data.",
      items: [
        {
          title: "Smarter Reviews",
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
            "Keep reviewing on your mobile device without an internet connection. Changes sync automatically.",
        },
        {
          title: "Import, Export Own Your Data",
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
    {
      type: "review_cta",
      titleLines: [
        "Let Nibomo plan your reviews.",
        "You focus on learning.",
      ],
      description:
        "Turn what you’re learning into flashcards, review at the right time, and remember more.",
    },
  ],
  body: "",
} as const;
