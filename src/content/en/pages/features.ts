import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Features",
  description:
    "FSRS review, card creation, AI chat, agent-ready onboarding, passwordless auth, self-hosting, and offline-first clients.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Features",
      intro:
        "A focused flashcards stack: hosted web app, iOS client in the repository, external agent API, and the infrastructure already in place for self-hosting.",
      items: [
        {
          title: "FSRS Review",
          description:
            "Due cards are scheduled with FSRS. Submit one of four ratings and the backend updates the next review time using the client review timestamp.",
        },
        {
          title: "Card Creation And Chat",
          description:
            "Create front/back cards from the web client and use AI chat with workspace data and file attachments, including plain text uploads.",
        },
        {
          title: "Agent-Ready Onboarding",
          description:
            "Point Claude Code, Codex, or OpenClaw at the discovery URL and the agent can walk the whole auth flow, store the API key, load account context, choose the right workspace, and continue through the compact /v1/agent/sql surface with only one human step: sharing the latest 8-digit email code.",
        },
        {
          title: "Passwordless Auth",
          description:
            "Email OTP authentication runs on a dedicated auth service. Browser sessions reuse shared-domain cookies so login works cleanly across subdomains.",
        },
        {
          title: "Self-Hosted Stack",
          description:
            "Run Postgres, auth, backend, and the web client locally. Production deployment is already wired for AWS with CDK, CloudFront, API Gateway, Lambda, and RDS.",
        },
        {
          title: "Published Agent API",
          description:
            "The current external contract covers discovery, OTP bootstrap, workspace selection, and a published SQL dialect over workspace, cards, decks, and review events.",
        },
        {
          title: "Offline-First Clients",
          description:
            "The repository already ships the iOS client with local SQLite and sync routes on the backend, and the Android app is now available on Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
