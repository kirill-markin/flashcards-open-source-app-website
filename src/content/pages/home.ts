import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_METADATA = {
  title: "Flashcards - Open Source Spaced Repetition",
  description:
    "Open-source flashcards app with spaced repetition, review queue, passwordless auth, and a self-hosted AWS/Postgres deployment path.",
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
        "Open-source flashcards app with spaced repetition, a fast review queue, passwordless auth, and a self-hosted AWS/Postgres stack. Use the web MVP today and keep the door open for the iOS offline-first client.",
      primaryLink: {
        label: "Get Started",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "View on GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Free and open source.",
      hintLink: {
        label: "View on GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
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
          title: "Self-Hosted",
          description:
            "Run Postgres locally, start auth, backend, and web separately, and keep the full stack under your control.",
        },
        {
          title: "API Surface",
          description:
            "Use the existing `/v1/me`, `/v1/cards`, `/v1/review-queue`, and `/v1/reviews` endpoints from your own clients and scripts.",
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
