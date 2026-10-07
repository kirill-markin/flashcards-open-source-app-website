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
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Se på GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Eller tilslut en AI-klient, der understøtter MCP, med denne URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Sådan fungerer Nibomo",
      items: [
        {
          label: "01 · LÆRINGSKORT MED AI",
          titleLines: [
            "Fortæl AI, hvad du vil lære.",
          ],
          description: "Beskriv et emne, eller vedhæft dine noter. AI hjælper dig med at omdanne materialet til læringskort med spørgsmål og svar.",
          linkLabel: "Opret læringskort",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Nibomos AI-chat opretter læringskort fra et emne eller vedhæftede noter",
        },
        {
          label: "02 · BEGYND AT LÆRE",
          titleLines: [
            "Ét spørgsmål ad gangen.",
          ],
          description: "Åbn et læringskort, og prøv at huske svaret, før du viser det. Lær i dit eget tempo, ét kort ad gangen.",
          linkLabel: "Begynd at lære",
          imagePath: "/home/start-learning.png",
          imageAlt: "Et repetitionskort i Nibomo med en knap til at vise svaret",
        },
        {
          label: "03 · SMART REPETITION",
          titleLines: [
            "Tjek dit svar.",
            "Vurder, hvor godt du husker.",
          ],
          description: "Vis svaret, og angiv, hvor let du huskede det. Nibomo viser svære kort igen tidligere og velkendte kort senere.",
          linkLabel: "Repeter læringskort",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Et Nibomo-kort med vist svar og muligheder for at vurdere hukommelsen",
        },
        {
          label: "04 · DINE FREMSKRIDT",
          titleLines: [
            "Gør læring til en vane.",
          ],
          description: "Se dine studiedage i kalenderen, og hold din stime i gang. Hver repetition er endnu et skridt mod dit mål.",
          linkLabel: "Se dine fremskridt",
          imagePath: "/home/your-progress.png",
          imageAlt: "Nibomos fremskridtsskærm med kalender over sammenhængende studiedage og rangliste",
        }
      ],
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
            "Fortsæt med at repetere på din mobile enhed uden internetforbindelse. Ændringer synkroniseres automatisk.",
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
    {
      type: "review_cta",
      titleLines: [
        "Lad Nibomo planlægge dine repetitioner.",
        "Du fokuserer på at lære.",
      ],
      description: "Lav det, du lærer, om til læringskort, repeter på det rette tidspunkt, og husk mere.",
    },
  ],
  body: "",
} as const;
