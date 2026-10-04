import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis at komme i gang. Premium for mere AI.",
  description:
    "Kom gratis i gang med den hostede app, opgrader til Premium til USD 6.99 om måneden, og få mere AI-chat, eller selvhost open source-stakken på din egen AWS-infrastruktur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis at komme i gang. Premium for mere AI.",
      intro:
        "Kom gratis i gang med den hostede app uden kreditkort, tilføj Premium for mere AI-chat, eller selvhost open source-stakken gratis på din egen AWS-infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratis",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "50 beskeder i AI-chatten om måneden",
            "Brug din egen OpenAI API-nøgle; forbruget tæller ikke med i den månedlige grænse",
            "Synkronisering på tværs af web, iOS og Android inkluderet",
            "Ingen abonnementsbaserede kvoter på kort, filer eller samlet lagerplads; normale tekniske grænser pr. fil og pr. handling gælder",
            "Importér og eksportér kort, tags og medier mellem hostede og selvhostede installationer",
            "Login uden adgangskode med en engangskode på e-mail",
          ],
          cta: {
            label: "Brug den hostede app gratis",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/måned",
          highlighted: false,
          bullets: [
            "7 dages gratis prøveperiode for nye abonnenter, der opfylder betingelserne; betalingsmetode påkrævet",
            "1.000 beskeder i AI-chatten om måneden",
            "Tilpassede accentfarver",
            "Alt i Gratis",
            "Ét abonnement til din konto på web, iOS og Android",
            "Prissat i USD inkl. skatter og afgifter; ved betalingen kan prisen blive vist i lokal valuta",
            "Fornyes hver måned; du kan opsige når som helst og beholder adgangen til periodens udløb",
          ],
          cta: {
            label: "Start 7 dages gratis prøveperiode",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Selvhostet",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Open source-applikation og AWS CDK-infrastruktur",
            "Fuld vej til AWS-udrulning plus en lokal opsætning med Docker/Postgres til udvikling",
            "Du leverer og vedligeholder infrastruktur, e-mail, overvågning og AI-nøgler",
            "Du betaler for infrastruktur og tredjepartsudbydere",
            "Importér og eksportér kort, tags og medier mellem hostede og selvhostede installationer",
          ],
          cta: {
            label: "Selvhost fra GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
