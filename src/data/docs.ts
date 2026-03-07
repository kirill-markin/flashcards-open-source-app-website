interface DocEntry {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
}

export const DOCS: ReadonlyArray<DocEntry> = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description:
      "Open the hosted web app or run the local stack with Postgres, auth, backend, and web.",
  },
  {
    slug: "self-hosting",
    title: "Self-Hosting Guide",
    description:
      "Run Flashcards on your own machine or server with the documented local and AWS flow.",
  },
  {
    slug: "api",
    title: "API Reference",
    description:
      "Current web and auth endpoints for sessions, cards, review queue, and reviews.",
  },
  {
    slug: "architecture",
    title: "Architecture",
    description:
      "System overview, public domains, data flow, and the offline-first direction.",
  },
] as const;
