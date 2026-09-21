import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis te gebruiken. Gratis zelf te hosten.",
  description:
    "Gebruik de gehoste app kosteloos, met AI en synchronisatie inbegrepen tijdens de bèta, of host de open-source stack zelf op je eigen AWS-infrastructuur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis te gebruiken. Gratis zelf te hosten.",
      intro:
        "Gebruik de gehoste app kosteloos en zonder creditcard, of draai de open-source stack op je eigen AWS-infrastructuur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gehost",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "AI-functies inbegrepen tijdens de bèta",
            "Synchronisatie tussen web, iOS en Android inbegrepen",
            "Geen abonnementslimieten op kaarten, bestanden of totale opslag tijdens de bèta; normale technische limieten per bestand en per bewerking gelden wel",
            "Kaarten, tags en media importeren en exporteren tussen gehoste en zelf gehoste installaties",
            "Aanmelden zonder wachtwoord met een eenmalige code per e-mail",
            "Kaarten maken en herhalen blijft gratis; voor intensiever AI-gebruik kan later een eigen API-sleutel van een provider of een betaalde optie nodig zijn",
          ],
          cta: {
            label: "De gehoste app gratis gebruiken",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Zelf gehost",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Open-source applicatie en AWS CDK-infrastructuur",
            "Volledig AWS-deploymentpad plus een lokale ontwikkelomgeving met Docker/Postgres",
            "Je levert en onderhoudt zelf infrastructuur, e-mail, monitoring en AI-credentials",
            "Je betaalt de kosten voor infrastructuur en externe providers",
            "Kaarten, tags en media importeren en exporteren tussen gehoste en zelf gehoste installaties",
          ],
          cta: {
            label: "Zelf hosten via GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
