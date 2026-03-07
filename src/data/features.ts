interface Feature {
  readonly title: string;
  readonly description: string;
}

export const FEATURES: ReadonlyArray<Feature> = [
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
] as const;
