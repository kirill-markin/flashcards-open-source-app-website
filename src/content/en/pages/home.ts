import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - Open Source Spaced Repetition",
  description:
    "Create cards, learn more, and forget less with an open-source flashcards app for spaced repetition, AI chat, and agent-ready onboarding.",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "Create cards.",
        "Learn more.",
        "Forget less.",
      ],
      subtitle:
        "Open-source flashcards app with spaced repetition, passwordless auth, AI chat, and an agent-ready onboarding flow. Use the hosted web app today, connect Claude, Cursor, and other AI agents over MCP, and keep web, iOS, and agent workflows on the same backend model.",
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
        "A focused flashcards stack: hosted web app, iOS client in the repo, an MCP server for AI agents, and the infrastructure already in place for self-hosting.",
      items: [
        {
          title: "Spaced Repetition",
          description:
            "Review cards with FSRS scheduling and a simple rating flow. The backend and iOS client keep the scheduler behavior aligned.",
        },
        {
          title: "Web App And AI Chat",
          description:
            "Create cards, browse your collection, review due items, and work with AI chat plus file attachments in the hosted web app.",
        },
        {
          title: "Passwordless Auth",
          description:
            "Email OTP via Cognito with shared-domain cookies across the auth and app subdomains.",
        },
        {
          title: "Agent-Ready Onboarding",
          description:
            "Add the Flashcards MCP server to your AI client, authorize it once, and let it load your workspace and create, edit, and review cards for you.",
        },
        {
          title: "Self-Hosted",
          description:
            "Run Postgres locally, start auth, backend, and web separately, and keep the AWS deployment path under your control.",
        },
        {
          title: "Offline-First Clients",
          description:
            "The repository already includes the iOS app with local SQLite and sync, and the Android app is now available on Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
