import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - Kostenlose Open-Source-App für Spaced Repetition",
  description:
    "Kostenlose Open-Source-Lernkarten mit FSRS Spaced Repetition, KI-gestützter Kartenerstellung, Offline-Lernen, Synchronisierung, Export und Self-Hosting.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Kostenlos & Open Source",
      titleLines: [
        "Karten erstellen.",
        "Besser wiederholen.",
        "Mehr behalten.",
      ],
      subtitle:
        "Eine kostenlose Open-Source-Lernkarten-App, die jede Wiederholung zum richtigen Zeitpunkt plant, offline funktioniert und über Web, iOS und Android synchronisiert. Nutze KI, wenn du Hilfe beim Erstellen oder Verbessern von Karten möchtest.",
      trustLine: "Keine Kreditkarte. Keine Werbung. Kein Testzeitraum.",
      primaryLink: {
        label: "Loslegen",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Auf GitHub ansehen",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Füge diesen MCP-Server zu deinem KI-Client hinzu:",
          link: {
            label: "https://mcp.flashcards-open-source-app.com/mcp",
            href: "https://mcp.flashcards-open-source-app.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Funktionen",
      intro:
        "Alles, was du brauchst, um nützliche Karten zu erstellen, rechtzeitig zu wiederholen, offline weiterzulernen und deine Lerndaten selbst zu verwalten.",
      items: [
        {
          title: "Intelligenter wiederholen mit FSRS",
          description:
            "Wiederhole die Karten, die heute fällig sind. FSRS zeigt schwierige Karten früher wieder und wartet bei vertrauten Karten länger.",
        },
        {
          title: "Karten mit KI-Unterstützung erstellen",
          description:
            "Lass dir von KI helfen, Karten zu erstellen, besser zu formulieren oder eine Antwort zu erklären. Du entscheidest, was gespeichert wird.",
        },
        {
          title: "Offline lernen mit automatischer Synchronisierung",
          description:
            "Lerne auf deinem Mobilgerät auch ohne Internet weiter. Änderungen werden automatisch synchronisiert, damit du im Web, auf iOS oder Android weitermachen kannst.",
        },
        {
          title: "Daten importieren, exportieren und selbst verwalten",
          description:
            "Verschiebe deine Lernmaterialien jederzeit in die App oder aus ihr heraus. Portable Exporte enthalten deine Karten, Tags und zugehörigen Medien.",
        },
        {
          title: "Funktioniert mit KI-Agenten",
          description:
            "Verbinde KI-Agenten über MCP oder die Agent API, damit sie dir beim Erstellen, Verbessern und Organisieren deiner Karten helfen.",
        },
        {
          title: "Kostenlos und selbst hostbar",
          description:
            "Nutze die gehostete App kostenlos, sieh dir den Open-Source-Code an oder betreibe sie auf deiner eigenen Infrastruktur.",
        },
      ],
    },
  ],
  body: "",
} as const;
