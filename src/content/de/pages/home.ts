import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - Kostenlose Open-Source-App für Spaced Repetition",
  description:
    "Erstelle Karten, lerne mehr und vergiss weniger mit einer kostenlosen Open-Source-Flashcards-App für Spaced Repetition mit FSRS, Offline-Lernen, KI-Unterstützung und MCP.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Kostenlos & Open Source",
      titleLines: [
        "Karten erstellen.",
        "Mehr lernen.",
        "Weniger vergessen.",
      ],
      subtitle:
        "Eine kostenlose Open-Source-Flashcards-App mit Spaced Repetition durch FSRS, Offline-Lernen und KI-Unterstützung. Lerne im Web, auf iOS oder Android und verbinde KI-Agenten über MCP.",
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
        "Ein fokussierter Flashcards-Stack: gehostete Web-App, iOS-Client im Repository, ein MCP-Server fuer KI-Agenten und eine Infrastruktur, die fuer Self-Hosting bereits bereitsteht.",
      items: [
        {
          title: "Spaced Repetition",
          description:
            "Wiederhole Karten mit FSRS-Planung und einem klaren Bewertungsablauf. Backend und iOS-Client sorgen dabei fuer ein konsistentes Verhalten des Schedulers.",
        },
        {
          title: "Web-App und KI-Chat",
          description:
            "Erstelle Karten, durchsuche deine Sammlung, wiederhole faellige Karten und nutze KI-Chat mit Dateianhaengen in der gehosteten Web-App.",
        },
        {
          title: "Passwortlose Anmeldung",
          description:
            "E-Mail-OTP ueber Cognito mit gemeinsamen Domain-Cookies fuer die Subdomains von Auth und App.",
        },
        {
          title: "Onboarding fuer KI-Agenten",
          description:
            "Fuege den Flashcards-MCP-Server zu deinem KI-Client hinzu, autorisiere ihn einmal und lass ihn deinen Workspace laden sowie deine Karten erstellen, bearbeiten und wiederholen.",
        },
        {
          title: "Self-Hosting",
          description:
            "Betreibe Postgres lokal, starte Auth, Backend und Web getrennt und behalte den AWS-Deployment-Pfad unter eigener Kontrolle.",
        },
        {
          title: "Offline-First-Clients",
          description:
            "Das Repository enthaelt bereits die iOS-App mit lokalem SQLite und Sync, und die Android-App ist jetzt im Google Play Store verfuegbar.",
        },
      ],
    },
  ],
  body: "",
} as const;
