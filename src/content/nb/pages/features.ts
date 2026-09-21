import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funksjoner i Nibomo",
  description:
    "Utforsk gratis læringskort med åpen kildekode, FSRS-intervallrepetisjon, AI-assistert kortlaging, studier uten nett og synkronisering, portable eksporter og selvhosting.",
  slug: "features",
  sections: [
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
