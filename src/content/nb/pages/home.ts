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
          caption: "Eller koble til en AI-klient som støtter MCP, med denne URL-en:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Slik fungerer Nibomo",
      items: [
        {
          label: "01 · LÆRINGSKORT MED KI",
          titleLines: [
            "Fortell KI hva du vil lære.",
          ],
          description: "Beskriv et tema eller legg ved notatene dine. KI hjelper deg med å gjøre materialet om til læringskort med spørsmål og svar.",
          linkLabel: "Lag læringskort",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Nibomos KI-chat lager læringskort fra et tema eller vedlagte notater",
        },
        {
          label: "02 · BEGYNN Å LÆRE",
          titleLines: [
            "Ett spørsmål om gangen.",
          ],
          description: "Åpne et læringskort og prøv å huske svaret før du viser det. Lær i ditt eget tempo, ett kort om gangen.",
          linkLabel: "Begynn å lære",
          imagePath: "/home/start-learning.png",
          imageAlt: "Et repetisjonskort i Nibomo med en knapp for å vise svaret",
        },
        {
          label: "03 · SMART REPETISJON",
          titleLines: [
            "Sjekk svaret ditt.",
            "Vurder hvor godt du husker.",
          ],
          description: "Vis svaret og angi hvor lett du husket det. Nibomo viser vanskelige kort igjen tidligere og kjente kort senere.",
          linkLabel: "Repeter læringskort",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Et Nibomo-kort med synlig svar og valg for å vurdere hukommelsen",
        },
        {
          label: "04 · FREMGANGEN DIN",
          titleLines: [
            "Gjør læring til en vane.",
          ],
          description: "Se studiedagene dine i kalenderen og hold rekken i gang. Hver repetisjon er enda et steg mot målet ditt.",
          linkLabel: "Se fremgangen din",
          imagePath: "/home/your-progress.png",
          imageAlt: "Nibomos fremgangsskjerm med kalender over sammenhengende studiedager og resultatliste",
        }
      ],
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
            "Fortsett å repetere på mobilen uten internettforbindelse. Endringer synkroniseres automatisk.",
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
    {
      type: "review_cta",
      titleLines: [
        "La Nibomo planlegge repetisjonene dine.",
        "Du fokuserer på å lære.",
      ],
      description: "Gjør det du lærer om til læringskort, repeter til riktig tid og husk mer.",
    },
  ],
  body: "",
} as const;
