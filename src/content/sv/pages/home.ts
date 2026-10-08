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
        "Gratis flashcards som schemalägger varje repetition till rätt tidpunkt, fungerar offline och synkar mellan webben, iOS och Android. Använd AI när du vill ha hjälp att skapa eller förbättra kort.",
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
          caption: "Eller anslut en AI-klient som stöder MCP med denna URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Så fungerar Nibomo",
      items: [
        {
          label: "01 · KUNSKAPSKORT MED AI",
          titleLines: [
            "Berätta för AI vad du vill lära dig.",
          ],
          description: "Beskriv ett ämne eller bifoga dina anteckningar. AI hjälper dig att omvandla materialet till kunskapskort med frågor och svar.",
          linkLabel: "Skapa kunskapskort",
          imagePath: "/home/ai-flashcards-sv.png",
          imageAlt: "Nibomos AI-chatt skapar kunskapskort från ett ämne eller bifogade anteckningar",
        },
        {
          label: "02 · BÖRJA LÄRA DIG",
          titleLines: [
            "En fråga i taget.",
          ],
          description: "Öppna ett kunskapskort och försök minnas svaret innan du visar det. Lär dig i din egen takt, ett kort i taget.",
          linkLabel: "Börja lära dig",
          imagePath: "/home/start-learning-sv.png",
          imageAlt: "Ett repetitionskort i Nibomo med en knapp för att visa svaret",
        },
        {
          label: "03 · SMART REPETITION",
          titleLines: [
            "Kontrollera svaret.",
            "Bedöm hur väl du minns.",
          ],
          description: "Visa svaret och ange hur lätt du kom ihåg det. Nibomo visar svåra kort igen tidigare och välbekanta kort senare.",
          linkLabel: "Repetera kunskapskort",
          imagePath: "/home/smart-reviews-sv.png",
          imageAlt: "Ett Nibomo-kort med synligt svar och alternativ för att bedöma minnet",
        },
        {
          label: "04 · DINA FRAMSTEG",
          titleLines: [
            "Gör lärandet till en vana.",
          ],
          description: "Se dina studiedagar i kalendern och håll din svit igång. Varje repetition är ännu ett steg mot ditt mål.",
          linkLabel: "Se dina framsteg",
          imagePath: "/home/your-progress-sv.png",
          imageAlt: "Nibomos framstegsvy med kalender över sammanhängande studiedagar och topplista",
        }
      ],
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
            "Fortsätt repetera på din mobila enhet utan internetanslutning. Ändringar synkroniseras automatiskt.",
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
    {
      type: "review_cta",
      titleLines: [
        "Låt Nibomo planera dina repetitioner.",
        "Du fokuserar på att lära dig.",
      ],
      description: "Gör det du lär dig till kunskapskort, repetera vid rätt tillfälle och kom ihåg mer.",
    },
  ],
  body: "",
} as const;
