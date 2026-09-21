import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Gratis open-source flashcard-app met gespreide herhaling",
  description:
    "Gratis open-source flashcards met FSRS gespreide herhaling, AI-ondersteunde kaarten, offline leren en synchronisatie, overdraagbare exports en selfhosting.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratis & open source",
      titleLines: [
        "Kaarten maken.",
        "Slimmer herhalen.",
        "Meer onthouden.",
      ],
      subtitle:
        "Gratis open-source flashcards die elke herhaling op het juiste moment inplannen, offline werken en synchroniseren tussen web, iOS en Android. Gebruik AI wanneer je hulp wilt bij het maken of verbeteren van kaarten. Nibomo heette voorheen Flashcards Open Source App.",
      trustLine: "Geen creditcard. Geen advertenties. Geen proefperiode.",
      primaryLink: {
        label: "Aan de slag",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Bekijken op GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Voeg deze MCP-server toe aan je AI-client:",
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
      title: "Functies",
      intro:
        "Alles wat je nodig hebt om nuttige kaarten te maken, op het juiste moment te herhalen, offline door te leren en zelf de baas te blijven over je leerdata.",
      items: [
        {
          title: "Slimmer herhalen met FSRS",
          description:
            "Herhaal de kaarten die vandaag aan de beurt zijn. FSRS laat moeilijke kaarten sneller terugkomen en wacht langer met kaarten die je al goed kent.",
        },
        {
          title: "Kaarten maken met hulp van AI",
          description:
            "Vraag AI om kaarten te maken, de formulering te verbeteren of een antwoord te verduidelijken. Jij bepaalt wat er wordt opgeslagen.",
        },
        {
          title: "Offline leren met automatische synchronisatie",
          description:
            "Blijf herhalen op je mobiele apparaat, ook zonder internet. Wijzigingen synchroniseren automatisch, zodat je verder kunt op het web, iOS of Android.",
        },
        {
          title: "Importeren, exporteren en je data in eigen hand",
          description:
            "Verplaats je leermateriaal wanneer je wilt naar binnen of naar buiten. Overdraagbare exports bevatten je kaarten, tags en bijbehorende media.",
        },
        {
          title: "Werkt met AI-agents",
          description:
            "Maak verbinding via MCP of de Agent API, zodat AI-agents je helpen kaarten te maken, te verbeteren en te ordenen.",
        },
        {
          title: "Gratis en zelf te hosten",
          description:
            "Gebruik de gehoste app gratis, bekijk de open-source code of draai hem op je eigen infrastructuur.",
        },
      ],
    },
  ],
  body: "",
} as const;
