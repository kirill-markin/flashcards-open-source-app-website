import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis om te beginnen. Premium voor meer AI.",
  description:
    "Premium — Standaardprijs op het web: USD 6.99/maand. De standaardprijs op het web is inclusief belastingen. Regionale aanbiedingen en aanbiedingen in appstores kunnen verschillen; de definitieve prijs wordt vóór aankoop getoond.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis om te beginnen. Premium voor meer AI.",
      intro:
        "Begin gratis en zonder creditcard met de gehoste app, neem Premium voor meer AI-chat, of draai de open-source stack gratis op je eigen AWS-infrastructuur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratis",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "50 AI-chatberichten per maand",
            "Gebruik je eigen OpenAI API-sleutel; verbruik daarmee telt niet mee voor de maandlimiet",
            "Synchronisatie tussen web, iOS en Android inbegrepen",
            "Geen abonnementslimieten op kaarten, bestanden of totale opslag; normale technische limieten per bestand en per bewerking gelden wel",
            "Kaarten, tags en media importeren en exporteren tussen gehoste en zelf gehoste installaties",
            "Aanmelden zonder wachtwoord met een eenmalige code per e-mail",
          ],
          cta: {
            label: "De gehoste app gratis gebruiken",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "Standaardprijs op het web: USD 6.99/maand",
          highlighted: false,
          bullets: [
            "Gratis proefperiode van 7 dagen voor nieuwe abonnees die in aanmerking komen; betaalmethode vereist",
            "1000 AI-chatberichten per maand",
            "Aangepaste accentkleuren",
            "Alles uit Gratis",
            "Eén abonnement voor je account op web, iOS en Android",
            "De standaardprijs op het web is inclusief belastingen. Regionale aanbiedingen en aanbiedingen in appstores kunnen verschillen; de definitieve prijs wordt vóór aankoop getoond.",
            "Wordt maandelijks verlengd; altijd opzegbaar en je houdt toegang tot het einde van de periode",
          ],
          cta: {
            label: "Probeer 7 dagen gratis",
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
