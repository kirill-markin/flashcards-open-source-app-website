import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Nibomo-funktioner",
  description:
    "Udforsk gratis open source-flashcards med FSRS spaced repetition, AI-assisteret oprettelse af kort, offline læring og synkronisering, flytbare eksporter og selvhosting.",
  slug: "features",
  sections: [
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
