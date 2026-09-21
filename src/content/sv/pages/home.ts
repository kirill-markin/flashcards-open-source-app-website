import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Gratis flashcards-app med öppen källkod och intervallrepetition",
  description:
    "Gratis flashcards med öppen källkod, FSRS-intervallrepetition, AI-stöd när du skapar kort, plugg offline med synk, flyttbara exporter och drift på egen server.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratis och öppen källkod",
      titleLines: [
        "Skapa kort.",
        "Repetera smartare.",
        "Kom ihåg mer.",
      ],
      subtitle:
        "Gratis flashcards med öppen källkod som schemalägger varje repetition till rätt tidpunkt, fungerar offline och synkar mellan webben, iOS och Android. Använd AI när du vill ha hjälp att skapa eller förbättra kort. Nibomo hette tidigare Flashcards Open Source App.",
      trustLine: "Inget kreditkort. Inga annonser. Ingen provperiod som tickar ner.",
      primaryLink: {
        label: "Kom igång",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Visa på GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Lägg till den här MCP-servern i din AI-klient:",
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
