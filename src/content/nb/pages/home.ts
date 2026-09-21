import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Gratis læringskort med åpen kildekode og intervallrepetisjon",
  description:
    "Gratis læringskort med åpen kildekode, FSRS-intervallrepetisjon, AI-assistert kortlaging, studier uten nett og synkronisering, portable eksporter og selvhosting.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratis og åpen kildekode",
      titleLines: [
        "Lag kort.",
        "Repeter smartere.",
        "Husk mer.",
      ],
      subtitle:
        "Gratis læringskort med åpen kildekode som planlegger hver repetisjon til rett tid, virker uten nett og synkroniserer på tvers av web, iOS og Android. Bruk AI når du vil ha hjelp til å lage eller forbedre kort. Nibomo het tidligere Flashcards Open Source App.",
      trustLine: "Ingen kredittkort. Ingen reklame. Ingen nedtelling på prøveperiode.",
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
          caption: "Legg til denne MCP-serveren i AI-klienten din:",
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
      title: "Funksjoner",
      intro:
        "Alt du trenger for å lage nyttige kort, repetere til rett tid, fortsette å studere uten nett og beholde kontrollen over læringsdataene dine.",
      items: [
        {
          title: "Smartere repetisjon med FSRS",
          description:
            "Repeter kortene som forfaller i dag. FSRS henter vanskelige kort tilbake raskere og venter lenger før kort du kan godt, vises igjen.",
        },
        {
          title: "AI-assistert kortlaging",
          description:
            "Be AI om hjelp til å lage kort, forbedre ordlyden eller gjøre et svar tydeligere. Du bestemmer selv hva som blir lagret.",
        },
        {
          title: "Studier uten nett med automatisk synkronisering",
          description:
            "Fortsett å repetere på mobilen uten internettforbindelse. Endringer synkroniseres automatisk, så du kan fortsette på web, iOS eller Android.",
        },
        {
          title: "Importer, eksporter og eier dataene dine",
          description:
            "Flytt læringsmateriellet ditt inn eller ut når du vil. Portable eksporter inneholder kortene, taggene og tilhørende medier.",
        },
        {
          title: "Fungerer med AI-agenter",
          description:
            "Koble til via MCP eller Agent API, slik at AI-agenter kan hjelpe deg med å lage, forbedre og organisere kortene dine.",
        },
        {
          title: "Gratis og mulig å selvhoste",
          description:
            "Bruk den hostede appen gratis, se gjennom koden med åpen kildekode, eller kjør den på din egen infrastruktur.",
        },
      ],
    },
  ],
  body: "",
} as const;
