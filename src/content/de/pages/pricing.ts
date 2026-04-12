import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Preise",
  description:
    "Kostenloses Self-Hosting oder gehostete Cloud-Beta. Open Source, ohne Feature-Gating.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Preise",
      intro: "Alle Funktionen sind in jedem Plan verfuegbar. Kein Feature-Gating.",
      tiers: [
        {
          type: "link_tier",
          name: "Self-Hosted",
          price: "Kostenlos",
          highlighted: false,
          bullets: [
            "Vollstaendiger Quellcode auf GitHub",
            "Lokaler Stack aus Postgres, Auth, Backend und Web",
            "Alle aktuellen Funktionen enthalten",
            "Deine Domain, deine Daten, dein Deployment",
            "Passe den Stack an deinen Lern-Workflow an",
          ],
          cta: {
            label: "Auf GitHub ansehen",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Cloud-Beta",
          price: "Waehren der Beta kostenlos",
          highlighted: true,
          bullets: [
            "Gehostete Web-App auf der Projektdomain",
            "E-Mail-OTP-Authentifizierung",
            "Browser-Login mit Shared-Domain-Cookies",
            "Verwaltete AWS-Infrastruktur",
            "Frueher Zugang waehrend sich das Produkt weiterentwickelt",
          ],
          cta: {
            label: "Loslegen",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
