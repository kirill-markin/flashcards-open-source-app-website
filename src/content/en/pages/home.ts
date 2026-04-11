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
        "Open-source flashcards app with spaced repetition, passwordless auth, AI chat, and an agent-ready onboarding flow. Use the hosted web app today, connect Claude Code, Codex, or OpenClaw through one discovery URL, and keep web, iOS, and agent workflows on the same backend model.",
      primaryLink: {
        label: "Get Started",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "View on GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Start with GET on this discovery URL:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "Features",
      intro:
        "A focused flashcards stack: hosted web app, iOS client in the repo, external agent API, and the infrastructure already in place for self-hosting.",
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
            "Give an AI agent the discovery URL, confirm the latest 8-digit email code, and let it finish login, API key setup, account loading, workspace selection, and SQL discovery.",
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
