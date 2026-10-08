import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Kostenlose Open-Source-App für Spaced Repetition",
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
        "Eine kostenlose Lernkarten-App, die jede Wiederholung zum richtigen Zeitpunkt plant, offline funktioniert und über Web, iOS und Android synchronisiert. Nutze KI, wenn du Hilfe beim Erstellen oder Verbessern von Karten möchtest.",
      trustLine: "Keine Kreditkarte. Keine Werbung. Kein Testzeitraum.",
      primaryLink: {
        label: "Loslegen",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Auf GitHub ansehen",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Oder verbinde einen beliebigen MCP-kompatiblen KI-Client über diese URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "So funktioniert Nibomo",
      items: [
        {
          label: "01 · KI-LERNKARTEN",
          titleLines: [
            "Sag der KI, was du lernen möchtest.",
          ],
          description: "Beschreibe ein Thema oder füge deine Notizen hinzu. Die KI hilft dir, dein Material in Lernkarten mit Fragen und Antworten umzuwandeln.",
          linkLabel: "Lernkarten erstellen",
          imagePath: "/home/ai-flashcards-de.png",
          imageAlt: "Nibomo-KI-Chat, der Lernkarten aus einem Thema oder angehängten Notizen erstellt",
        },
        {
          label: "02 · MIT DEM LERNEN BEGINNEN",
          titleLines: [
            "Eine Frage nach der anderen.",
          ],
          description: "Öffne eine Lernkarte und versuche, dich an die Antwort zu erinnern, bevor du sie aufdeckst. Lerne in deinem Tempo, Karte für Karte.",
          linkLabel: "Mit dem Lernen beginnen",
          imagePath: "/home/start-learning-de.png",
          imageAlt: "Eine Nibomo-Lernkarte mit einer Schaltfläche zum Anzeigen der Antwort",
        },
        {
          label: "03 · INTELLIGENT WIEDERHOLEN",
          titleLines: [
            "Prüfe deine Antwort.",
            "Bewerte deine Erinnerung.",
          ],
          description: "Decke die Antwort auf und gib an, wie leicht du dich erinnert hast. Nibomo zeigt schwierige Karten früher und vertraute Karten später erneut.",
          linkLabel: "Lernkarten wiederholen",
          imagePath: "/home/smart-reviews-de.png",
          imageAlt: "Aufgedeckte Nibomo-Lernkarte mit Bewertungen für die Erinnerung",
        },
        {
          label: "04 · DEIN FORTSCHRITT",
          titleLines: [
            "Mach Lernen zur Gewohnheit.",
          ],
          description: "Sieh deine Lerntage im Kalender und halte deine Lernserie aufrecht. Jede Wiederholung bringt dich deinem Ziel einen Schritt näher.",
          linkLabel: "Fortschritt ansehen",
          imagePath: "/home/your-progress-de.png",
          imageAlt: "Nibomo-Fortschrittsansicht mit Lernserien-Kalender und Rangliste",
        }
      ],
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
            "Wiederhole auf deinem Mobilgerät auch ohne Internetverbindung. Änderungen werden automatisch synchronisiert.",
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
    {
      type: "review_cta",
      titleLines: [
        "Lass Nibomo deine Wiederholungen planen.",
        "Konzentriere dich aufs Lernen.",
      ],
      description: "Verwandle deinen Lernstoff in Lernkarten, wiederhole zur richtigen Zeit und merke dir mehr.",
    },
  ],
  body: "",
} as const;
