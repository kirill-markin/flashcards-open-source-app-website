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
      "Start with the hosted web app, connect an agent through discovery, or run the local stack yourself.",
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
      "External agent API for discovery, OTP bootstrap, workspace setup, and the published SQL surface.",
  },
  {
    slug: "architecture",
    title: "Architecture",
    description:
      "System overview, supported clients, public domains, and the current offline-first data flow.",
  },
] as const;
