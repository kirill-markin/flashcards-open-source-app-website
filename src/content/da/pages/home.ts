import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Gratis open source-app til flashcards med spaced repetition",
  description:
    "Gratis open source-flashcards med FSRS spaced repetition, AI-assisteret oprettelse af kort, offline læring og synkronisering, flytbare eksporter og selvhosting.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratis og open source",
      titleLines: [
        "Lav kort.",
        "Repeter smartere.",
        "Husk mere.",
      ],
      subtitle:
        "Gratis open source-flashcards, der planlægger hver repetition til det rigtige tidspunkt, virker offline og synkroniserer på tværs af web, iOS og Android. Brug AI, når du vil have hjælp til at lave eller forbedre kort. Nibomo hed tidligere Flashcards Open Source App.",
      trustLine: "Intet kreditkort. Ingen reklamer. Ingen prøveperiode, der tæller ned.",
      primaryLink: {
        label: "Kom i gang",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Se på GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Tilføj denne MCP-server til din AI-klient:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Funktioner",
      intro:
        "Alt hvad du skal bruge for at lave nyttige kort, repetere på det rigtige tidspunkt, blive ved med at lære offline og bevare kontrollen over dine læringsdata.",
      items: [
        {
          title: "Smartere repetitioner med FSRS",
          description:
            "Repeter de kort, der forfalder i dag. FSRS bringer svære kort tilbage hurtigere og venter længere, før du ser de velkendte igen.",
        },
        {
          title: "AI-assisteret oprettelse af kort",
          description:
            "Bed AI om hjælp til at lave kort, forbedre formuleringen eller præcisere et svar. Du bestemmer selv, hvad der bliver gemt.",
        },
        {
          title: "Offline læring med automatisk synkronisering",
          description:
            "Bliv ved med at repetere på din mobil uden internetforbindelse. Ændringer synkroniseres automatisk, så du kan fortsætte på web, iOS eller Android.",
        },
        {
          title: "Import, eksport og dine egne data",
          description:
            "Flyt dit læringsmateriale ind eller ud, når du vil. Flytbare eksporter indeholder dine kort, tags og tilhørende medier.",
        },
        {
          title: "Virker med AI-agenter",
          description:
            "Forbind via MCP eller Agent API, så AI-agenter kan hjælpe med at lave, forbedre og organisere dine kort.",
        },
        {
          title: "Gratis og til selvhosting",
          description:
            "Brug den hostede app gratis, gennemse open source-koden, eller kør den på din egen infrastruktur.",
        },
      ],
    },
  ],
  body: "",
} as const;
