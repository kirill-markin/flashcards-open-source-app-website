import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - Open Source fuer Spaced Repetition",
  description:
    "Erstelle Karten, lerne mehr und vergesse weniger mit einer Open-Source-Flashcards-App fuer Spaced Repetition, KI-Chat und Onboarding fuer KI-Agenten.",
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
        "Open-Source-Flashcards-App mit Spaced Repetition, passwortloser Anmeldung, KI-Chat und Onboarding fuer KI-Agenten. Nutze noch heute die gehostete Web-App, verbinde Claude Code, Codex oder OpenClaw ueber eine einzige Discovery-URL und halte Web-, iOS- und Agent-Workflows auf derselben Backend-Grundlage.",
      primaryLink: {
        label: "Loslegen",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Auf GitHub ansehen",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Starte mit einem GET-Request auf diese Discovery-URL:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Funktionen",
      intro:
        "Ein fokussierter Flashcards-Stack: gehostete Web-App, iOS-Client im Repository, externe Agent-API und eine Infrastruktur, die fuer Self-Hosting bereits bereitsteht.",
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
            "Gib einem KI-Agenten die Discovery-URL, bestaetige den neuesten 8-stelligen Code aus der E-Mail und lass ihn Login, Einrichtung des API-Schluessels, Laden des Account-Kontexts, Auswahl des Workspace und SQL-Discovery uebernehmen.",
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
