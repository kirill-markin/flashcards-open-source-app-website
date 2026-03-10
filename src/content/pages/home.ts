import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_METADATA = {
  title: "Flashcards - Open Source Spaced Repetition",
  description:
    "Open-source flashcards app with spaced repetition, agent-ready onboarding, passwordless auth, and a self-hosted AWS/Postgres deployment path.",
} as const;

export const HOME_PAGE_CONTENT: PageContent = {
  title: HOME_PAGE_METADATA.title,
  description: HOME_PAGE_METADATA.description,
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "Create cards.",
        "Review on time.",
        "Own your data.",
      ],
      subtitle:
        "Open-source flashcards app with spaced repetition, a fast review queue, passwordless auth, and an agent-ready onboarding flow. Use the web MVP today, let Claude Code, Codex, or OpenClaw connect through one discovery URL, and keep the door open for the iOS offline-first client.",
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
        label: "https://auth.flashcards-open-source-app.com/api/agent",
        href: "https://auth.flashcards-open-source-app.com/api/agent",
      },
    },
    {
      type: "feature_list",
      title: "Features",
      intro:
        "A focused flashcards stack: the current web MVP, the public API surface, and the infrastructure already in place for self-hosting and future mobile clients.",
      items: [
        {
          title: "Spaced Repetition",
          description:
            "Review cards with a built-in queue and a simple rating flow. The backend updates scheduling fields on every review submission.",
        },
        {
          title: "Fast Web MVP",
          description:
            "Create cards, browse your collection, and work through due items in the browser with a minimal interface.",
        },
        {
          title: "Passwordless Auth",
          description:
            "Email OTP via Cognito with shared-domain cookies across the auth and app subdomains.",
        },
        {
          title: "Agent-Ready Onboarding",
          description:
            "Give an AI agent the discovery URL, confirm the latest 8-digit email code, and let it finish login, API key setup, account loading, and workspace selection.",
        },
        {
          title: "Self-Hosted",
          description:
            "Run Postgres locally, start auth, backend, and web separately, and keep the full stack under your control.",
        },
        {
          title: "Offline-First Direction",
          description:
            "The repository is structured around an offline-first roadmap with Postgres on the backend and iOS as the next client priority.",
        },
      ],
    },
  ],
  body: "",
};
