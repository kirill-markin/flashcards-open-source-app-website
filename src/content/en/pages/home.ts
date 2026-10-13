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
        "Free flashcards that schedule each review for the right time, work offline, and sync across the web, iOS, and Android.",
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
          label: "01 / MAKE IT YOURS",
          titleLines: ["Bring what you’re learning"],
          description:
            "Attach your notes or describe a topic. Ask AI to help turn it into questions and answers, then decide what to save.",
          linkLabel: "Create flashcards",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Nibomo AI chat creating flashcards from a topic or attached notes",
        },
        {
          label: "02 / GIVE IT A MOMENT",
          titleLines: ["Try before you turn it over"],
          description:
            "One question. A moment to think. Reveal the answer and rate how easily you remembered it.",
          linkLabel: "Start learning",
          imagePath: "/home/start-learning.png",
          imageAlt: "A Nibomo review flashcard with a Show answer button",
        },
        {
          label: "03 / LET IT STICK",
          titleLines: ["Come back at the right time"],
          description:
            "Your rating helps schedule the next review. Difficult cards return sooner; familiar ones get more breathing room.",
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
          title: "A hand with the first draft.",
          description:
            "Turn notes into a draft. Edit each card before saving.",
        },
        {
          title: "No signal? Keep going.",
          description:
            "Review offline on your phone. Sync when you’re back online.",
        },
        {
          title: "Your cards can come with you.",
          description:
            "Import and export cards, tags, and media.",
        },
        {
          title: "Your agent can lend a hand.",
          description:
            "Create, edit, and organize cards over MCP or the Agent API.",
        },
        {
          title: "Free. Open. Yours.",
          description:
            "Study for free, read the code, or host Nibomo yourself.",
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
