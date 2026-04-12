import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - Open-Source Spaced Repetition",
  description:
    "Erstelle Karten, lerne mehr und vergesse weniger mit einer Open-Source-Flashcards-App fuer Spaced Repetition, KI-Chat und agentenfreundliches Onboarding.",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "Karten erstellen.",
        "Mehr lernen.",
        "Weniger vergessen.",
      ],
      subtitle:
        "Open-Source-Flashcards-App mit Spaced Repetition, passwortloser Anmeldung, KI-Chat und einem agentenfreundlichen Onboarding-Flow. Nutze heute die gehostete Web-App, verbinde Claude Code, Codex oder OpenClaw ueber eine einzige Discovery-URL und halte Web, iOS und Agenten auf demselben Backend-Modell.",
      primaryLink: {
        label: "Loslegen",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Auf GitHub ansehen",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Starte mit GET auf dieser Discovery-URL:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "Funktionen",
      intro:
        "Ein fokussierter Flashcards-Stack: gehostete Web-App, iOS-Client im Repository, externe Agent-API und eine Infrastruktur, die bereits fuer Self-Hosting vorbereitet ist.",
      items: [
        {
          title: "Spaced Repetition",
          description:
            "Wiederhole Karten mit FSRS-Planung und einem einfachen Bewertungsablauf. Backend und iOS-Client halten das Verhalten des Schedulers konsistent.",
        },
        {
          title: "Web-App und KI-Chat",
          description:
            "Erstelle Karten, durchsuche deine Sammlung, bearbeite faellige Karten und nutze KI-Chat mit Dateianhaengen in der gehosteten Web-App.",
        },
        {
          title: "Passwortlose Anmeldung",
          description:
            "E-Mail-OTP ueber Cognito mit Shared-Domain-Cookies zwischen den Subdomains fuer Auth und App.",
        },
        {
          title: "Agentenfreundliches Onboarding",
          description:
            "Gib einem KI-Agenten die Discovery-URL, bestaetige den neuesten 8-stelligen E-Mail-Code und lass ihn Login, API-Key-Setup, Account-Laden, Workspace-Auswahl und SQL-Discovery erledigen.",
        },
        {
          title: "Self-Hosted",
          description:
            "Starte Postgres lokal, fuehre Auth, Backend und Web getrennt aus und behalte den AWS-Deployment-Pfad unter deiner Kontrolle.",
        },
        {
          title: "Offline-First-Clients",
          description:
            "Das Repository enthaelt bereits die iOS-App mit lokalem SQLite und Sync, und die Android-App ist jetzt bei Google Play verfuegbar.",
        },
      ],
    },
  ],
  body: "",
} as const;
