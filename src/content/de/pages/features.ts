import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funktionen",
  description:
    "FSRS-Wiederholung, Kartenerstellung, KI-Chat, agentenfreundliches Onboarding, passwortlose Anmeldung, Self-Hosting und Offline-First-Clients.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Funktionen",
      intro:
        "Ein fokussierter Flashcards-Stack: gehostete Web-App, iOS-Client im Repository, ein MCP-Server samt Agent-API, und eine Infrastruktur, die bereits fuer Self-Hosting vorbereitet ist.",
      items: [
        {
          title: "FSRS-Wiederholung",
          description:
            "Faellige Karten werden mit FSRS geplant. Sende eine von vier Bewertungen, und das Backend aktualisiert den naechsten Wiederholungszeitpunkt anhand des Review-Zeitstempels vom Client.",
        },
        {
          title: "Kartenerstellung und Chat",
          description:
            "Erstelle Vorder- und Rueckseitenkarten im Web-Client und nutze KI-Chat mit Workspace-Daten und Dateianhaengen, einschliesslich einfacher Text-Uploads.",
        },
        {
          title: "Agentenfreundliches Onboarding",
          description:
            "Fuege den Flashcards-MCP-Server zu Claude, Cursor oder einem beliebigen MCP-Client hinzu, und er kann deine Karten lesen, erstellen und bearbeiten. CLI-Agenten wie Claude Code, Codex oder OpenClaw koennen stattdessen die Discovery-URL ansteuern, einen API-Key speichern und ueber die /v1/agent/sql-Oberflaeche arbeiten. Der Mensch muss nur den neuesten 8-stelligen E-Mail-Code teilen.",
        },
        {
          title: "Passwortlose Anmeldung",
          description:
            "Die E-Mail-OTP-Authentifizierung laeuft auf einem separaten Auth-Service. Browser-Sitzungen nutzen Shared-Domain-Cookies, damit Login ueber Subdomains sauber funktioniert.",
        },
        {
          title: "Self-Hosted-Stack",
          description:
            "Fuehre Postgres, Auth, Backend und den Web-Client lokal aus. Das Produktions-Deployment ist bereits fuer AWS mit CDK, CloudFront, API Gateway, Lambda und RDS verdrahtet.",
        },
        {
          title: "Veroeffentlichte Agent-API",
          description:
            "Der aktuelle externe Vertrag deckt Discovery, OTP-Bootstrap, Workspace-Auswahl und einen veroeffentlichten SQL-Dialekt ueber Workspace, Karten, Decks und Review-Events ab.",
        },
        {
          title: "Offline-First-Clients",
          description:
            "Das Repository liefert bereits den iOS-Client mit lokalem SQLite und Sync-Routen im Backend, und die Android-App ist jetzt bei Google Play verfuegbar.",
        },
      ],
    },
  ],
  body: "",
} as const;
