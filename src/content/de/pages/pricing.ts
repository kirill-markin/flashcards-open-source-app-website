import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Kostenlos starten. Premium für mehr KI.",
  description:
    "Premium — Standardpreis im Web: 6,99 USD /Monat. Der Standardpreis im Web enthält Steuern. Regionale Angebote und Store-Angebote können abweichen; der endgültige Preis wird vor dem Kauf angezeigt.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Kostenlos starten. Premium für mehr KI.",
      intro:
        "Starte kostenlos und ohne Kreditkarte mit der gehosteten App, buche Premium für mehr KI-Chat dazu oder hoste den Open-Source-Stack kostenlos selbst in deiner eigenen AWS-Infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Kostenlos",
          price: "Kostenlos",
          highlighted: true,
          bullets: [
            "50 KI-Chatnachrichten pro Monat",
            "Nutze deinen eigenen OpenAI-API-Schlüssel; diese Nutzung zählt nicht zum monatlichen Limit",
            "Synchronisierung zwischen Web, iOS und Android inklusive",
            "Keine tarifabhängigen Kontingente für Karten, Dateien oder Gesamtspeicher; normale technische Limits pro Datei und Vorgang gelten",
            "Import und Export von Karten, Tags und Medien zwischen gehosteten und selbst gehosteten Installationen",
            "Passwortlose Anmeldung mit einem Einmalcode per E-Mail",
          ],
          cta: {
            label: "Gehostete App kostenlos nutzen",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "Standardpreis im Web: 6,99 USD /Monat",
          highlighted: false,
          bullets: [
            "7-tägige kostenlose Testphase für berechtigte Neuabonnenten; Zahlungsmethode erforderlich",
            "1.000 KI-Chatnachrichten pro Monat",
            "Eigene Akzentfarben",
            "Alles aus dem kostenlosen Tarif",
            "Ein Abonnement für dein Konto im Web, auf iOS und Android",
            "Der Standardpreis im Web enthält Steuern. Regionale Angebote und Store-Angebote können abweichen; der endgültige Preis wird vor dem Kauf angezeigt.",
            "Verlängert sich monatlich; jederzeit kündbar, der Zugang bleibt bis zum Ende des Zeitraums bestehen",
          ],
          cta: {
            label: "7-tägige kostenlose Testphase starten",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Selbst gehostet",
          price: "Kostenlos",
          highlighted: false,
          bullets: [
            "Anwendung und AWS-CDK-Infrastruktur sind Open Source",
            "Vollständiger AWS-Deployment-Pfad und lokale Entwicklungsumgebung mit Docker/Postgres",
            "Du stellst Infrastruktur sowie Zugangsdaten für E-Mail, Monitoring und KI bereit und wartest sie",
            "Du trägst die Kosten für Infrastruktur und Drittanbieter",
            "Import und Export von Karten, Tags und Medien zwischen gehosteten und selbst gehosteten Installationen",
          ],
          cta: {
            label: "Über GitHub selbst hosten",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
