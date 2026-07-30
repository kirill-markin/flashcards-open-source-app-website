import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Kostenlos nutzen. Kostenlos selbst hosten.",
  description:
    "Nutze die gehostete App in der Beta kostenlos mit KI und Synchronisierung oder hoste den Open-Source-Stack in deiner eigenen AWS-Infrastruktur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Kostenlos nutzen. Kostenlos selbst hosten.",
      intro:
        "Nutze die gehostete App kostenlos und ohne Kreditkarte oder betreibe den Open-Source-Stack in deiner eigenen AWS-Infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gehostet",
          price: "Kostenlos",
          highlighted: true,
          bullets: [
            "KI-Funktionen während der Beta inklusive",
            "Synchronisierung zwischen Web, iOS und Android inklusive",
            "Keine tarifabhängigen Kontingente für Karten, Dateien oder Gesamtspeicher während der Beta; normale technische Limits pro Datei und Vorgang gelten",
            "Import und Export von Karten, Tags und Medien zwischen gehosteten und selbst gehosteten Installationen",
            "Passwortlose Anmeldung mit einem Einmalcode per E-Mail",
            "Das Erstellen und Wiederholen von Karten bleibt kostenlos; höhere KI-Nutzung kann später einen eigenen Anbieter-API-Schlüssel oder eine kostenpflichtige Option erfordern",
          ],
          cta: {
            label: "Gehostete App kostenlos nutzen",
            href: "https://app.flashcards-open-source-app.com",
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
