import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Börja gratis. Premium för mer AI.",
  description:
    "Börja gratis i den molndrivna appen, få mer AI-chatt med Premium för USD 6.99 per månad, eller kör stacken med öppen källkod på din egen AWS-infrastruktur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Börja gratis. Premium för mer AI.",
      intro:
        "Börja gratis i den molndrivna appen utan kreditkort, lägg till Premium för mer AI-chatt, eller kör stacken med öppen källkod gratis på din egen AWS-infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratis",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "50 meddelanden i AI-chatten per månad",
            "Använd din egen OpenAI API-nyckel; användningen med den räknas inte mot månadsgränsen",
            "Synk mellan webben, iOS och Android ingår",
            "Inga planbaserade kvoter på kort, filer eller total lagring; vanliga tekniska gränser per fil och per åtgärd gäller",
            "Importera och exportera kort, taggar och media mellan molndrift och egen installation",
            "Inloggning utan lösenord med en engångskod via e-post",
          ],
          cta: {
            label: "Använd molnappen gratis",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/månad",
          highlighted: false,
          bullets: [
            "7 dagars gratis provperiod för berättigade nya prenumeranter; betalningsmetod krävs",
            "1000 meddelanden i AI-chatten per månad",
            "Anpassade accentfärger",
            "Allt i Gratis",
            "En prenumeration för ditt konto på webben, iOS och Android",
            "Pris i USD inklusive skatter; i kassan kan priset visas i lokal valuta",
            "Förnyas varje månad; säg upp när som helst och behåll åtkomsten till periodens slut",
          ],
          cta: {
            label: "Starta 7 dagars gratis provperiod",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Egen server",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Applikation och AWS CDK-infrastruktur med öppen källkod",
            "Komplett väg för AWS-driftsättning plus en lokal utvecklingsmiljö med Docker/Postgres",
            "Du tillhandahåller och underhåller infrastruktur, e-post, övervakning och AI-uppgifter",
            "Du betalar kostnaderna för infrastruktur och tredjepartsleverantörer",
            "Importera och exportera kort, taggar och media mellan molndrift och egen installation",
          ],
          cta: {
            label: "Kör själv från GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
