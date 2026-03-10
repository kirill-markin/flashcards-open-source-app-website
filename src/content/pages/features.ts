import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Features",
  description:
    "Review queue, card creation, agent-ready onboarding, passwordless auth, self-hosting, and the offline-first roadmap.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Features",
      intro:
        "A focused flashcards stack: the current web MVP, the public API surface, and the infrastructure already in place for self-hosting and future mobile clients.",
      items: [
        {
          title: "Review Queue",
          description:
            "Due cards are loaded from the backend in a dedicated review queue. Submit one of four ratings and the server computes the next review time on write.",
        },
        {
          title: "Card Creation",
          description:
            "Create front/back cards from the web client today. The app keeps the current surface area intentionally small while the core model settles.",
        },
        {
          title: "Agent-Ready Onboarding",
          description:
            "Point Claude Code, Codex, or OpenClaw at the discovery URL and the agent can walk the whole auth flow, store the API key, load account context, choose the right workspace, and continue through the compact /v1/agent/tools surface with only one human step: sharing the latest 8-digit email code.",
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
          title: "Typed API",
          description:
            "The current API covers session discovery, card listing, card creation, review queue reads, and review submission. It is a practical base for future mobile sync.",
        },
        {
          title: "Offline-First Roadmap",
          description:
            "The repository is designed around local-first clients with backend sync. iOS is the next planned client, with Android following later.",
        },
      ],
    },
  ],
  body: "",
};
