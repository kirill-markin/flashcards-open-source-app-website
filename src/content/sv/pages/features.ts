import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funktioner i Nibomo",
  description:
    "Utforska gratis flashcards med öppen källkod, FSRS-intervallrepetition, AI-stöd när du skapar kort, plugg offline med synk, flyttbara exporter och drift på egen server.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Funktioner",
      intro:
        "Allt du behöver för att skapa användbara kort, repetera vid rätt tidpunkt, fortsätta plugga offline och behålla kontrollen över dina studiedata.",
      items: [
        {
          title: "Smartare repetitioner med FSRS",
          description:
            "Repetera de kort som ska repeteras idag. FSRS tar tillbaka svåra kort tidigare och väntar längre innan du ser de kort du redan kan.",
        },
        {
          title: "AI-stöd när du skapar kort",
          description:
            "Be AI om hjälp att skapa kort, formulera om dem eller förtydliga ett svar. Du bestämmer vad som sparas.",
        },
        {
          title: "Plugga offline med automatisk synk",
          description:
            "Fortsätt repetera i mobilen utan internetanslutning. Ändringarna synkas automatiskt så att du kan fortsätta på webben, iOS eller Android.",
        },
        {
          title: "Importera, exportera och äg dina data",
          description:
            "Flytta in eller ut ditt studiematerial när du vill. Flyttbara exporter innehåller dina kort, taggar och tillhörande media.",
        },
        {
          title: "Fungerar med AI-agenter",
          description:
            "Anslut via MCP eller Agent API så att AI-agenter kan hjälpa till att skapa, förbättra och organisera dina kort.",
        },
        {
          title: "Gratis och körbar på egen server",
          description:
            "Använd den molndrivna appen gratis, granska koden med öppen källkod eller kör den på din egen infrastruktur.",
        },
      ],
    },
  ],
  body: "",
} as const;
