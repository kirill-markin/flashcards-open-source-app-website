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
          caption: "Of verbind een AI-client die MCP ondersteunt via deze URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Zo werkt Nibomo",
      items: [
        {
          label: "01 · FLASHCARDS MET AI",
          titleLines: [
            "Vertel AI wat je wilt leren.",
          ],
          description: "Beschrijf een onderwerp of voeg je notities toe. AI helpt je materiaal om te zetten in flashcards met vragen en antwoorden.",
          linkLabel: "Flashcards maken",
          imagePath: "/home/ai-flashcards-nl.png",
          imageAlt: "Nibomo AI-chat die flashcards maakt van een onderwerp of bijgevoegde notities",
        },
        {
          label: "02 · BEGIN MET LEREN",
          titleLines: [
            "Eén vraag tegelijk.",
          ],
          description: "Open een flashcard en probeer het antwoord te herinneren voordat je het toont. Leer in je eigen tempo, één kaart tegelijk.",
          linkLabel: "Begin met leren",
          imagePath: "/home/start-learning-nl.png",
          imageAlt: "Een Nibomo-herhaalkaart met een knop om het antwoord te tonen",
        },
        {
          label: "03 · SLIM HERHALEN",
          titleLines: [
            "Controleer je antwoord.",
            "Beoordeel je herinnering.",
          ],
          description: "Toon het antwoord en geef aan hoe gemakkelijk je het herinnerde. Nibomo laat moeilijke kaarten eerder en bekende kaarten later terugkomen.",
          linkLabel: "Flashcards herhalen",
          imagePath: "/home/smart-reviews-nl.png",
          imageAlt: "Een Nibomo-flashcard met zichtbaar antwoord en beoordelingsopties voor herinnering",
        },
        {
          label: "04 · JE VOORTGANG",
          titleLines: [
            "Maak van leren een gewoonte.",
          ],
          description: "Bekijk je studiedagen in de kalender en houd je reeks vol. Elke herhaling brengt je een stap dichter bij je doel.",
          linkLabel: "Je voortgang bekijken",
          imagePath: "/home/your-progress-nl.png",
          imageAlt: "Nibomo-voortgangsscherm met een kalender van opeenvolgende studiedagen en een ranglijst",
        }
      ],
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
            "Blijf herhalen op je mobiele apparaat zonder internetverbinding. Wijzigingen worden automatisch gesynchroniseerd.",
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
    {
      type: "review_cta",
      titleLines: [
        "Laat Nibomo je herhalingen plannen.",
        "Jij concentreert je op leren.",
      ],
      description: "Zet wat je leert om in flashcards, herhaal op het juiste moment en onthoud meer.",
    },
  ],
  body: "",
} as const;
