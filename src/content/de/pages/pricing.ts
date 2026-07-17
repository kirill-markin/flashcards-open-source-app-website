import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Preise",
  description:
    "Die gehostete App und das grundlegende Karteikarten-Erlebnis sind kostenlos. Die kostenlose Open-Source-Software kann auch selbst gehostet werden.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Preise",
      intro:
        "Die gehostete App sowie die grundlegenden Funktionen zum Erstellen und Wiederholen von Karteikarten sind kostenlos.",
      tiers: [
        {
          type: "link_tier",
          name: "Selbst gehostet",
          price: "Kostenlos",
          highlighted: false,
          bullets: [
            "Kostenlose Open-Source-Software",
            "Vollständiger Quellcode auf GitHub",
            "Alle aktuellen Kernfunktionen enthalten",
            "Deine Domain, deine Daten, dein Deployment",
            "Du trägst die Kosten für deine Infrastruktur",
          ],
          cta: {
            label: "Auf GitHub ansehen",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Gehostet",
          price: "Kostenlos",
          highlighted: true,
          bullets: [
            "Gehostete Web-App mit verwalteter Infrastruktur",
            "Erstellen und Wiederholen von Karteikarten inklusive",
            "Keine Kreditkarte erforderlich und kein ablaufender Testzeitraum",
            "Authentifizierung mit einem Einmalcode per E-Mail",
            "Der Dienst befindet sich derzeit in der Beta-Phase und wird auf Best-Effort-Basis angeboten",
            "Später können optionale Premium-Funktionen hinzukommen, aber das Erstellen und Wiederholen von Karteikarten bleibt kostenlos",
          ],
          cta: {
            label: "Kostenlos lernen",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
