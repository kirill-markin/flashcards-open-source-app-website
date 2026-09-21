import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis att använda. Gratis att köra själv.",
  description:
    "Använd den molndrivna appen utan kostnad, med AI och synk inkluderat under betan, eller kör stacken med öppen källkod på din egen AWS-infrastruktur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis att använda. Gratis att köra själv.",
      intro:
        "Använd den molndrivna appen utan kostnad och utan kreditkort, eller kör stacken med öppen källkod på din egen AWS-infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Molndrift",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "AI-funktioner ingår under betan",
            "Synk mellan webben, iOS och Android ingår",
            "Inga planbaserade kvoter på kort, filer eller total lagring under betan; vanliga tekniska gränser per fil och per åtgärd gäller",
            "Importera och exportera kort, taggar och media mellan molndrift och egen installation",
            "Inloggning utan lösenord med en engångskod via e-post",
            "Att skapa och repetera kort förblir gratis; mer AI-användning kan längre fram kräva en egen API-nyckel hos en leverantör eller ett betalalternativ",
          ],
          cta: {
            label: "Använd molnappen gratis",
            href: "https://app.flashcards-open-source-app.com",
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
