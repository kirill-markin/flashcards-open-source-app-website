import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis at bruge. Gratis at selvhoste.",
  description:
    "Brug den hostede app uden omkostninger, med AI og synkronisering inkluderet i betaen, eller selvhost open source-stakken på din egen AWS-infrastruktur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis at bruge. Gratis at selvhoste.",
      intro:
        "Brug den hostede app uden omkostninger og uden kreditkort, eller kør open source-stakken på din egen AWS-infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hostet",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "AI-funktioner inkluderet i betaen",
            "Synkronisering på tværs af web, iOS og Android inkluderet",
            "Ingen abonnementsbaserede kvoter på kort, filer eller samlet lagerplads i betaen; normale tekniske grænser pr. fil og pr. handling gælder",
            "Importér og eksportér kort, tags og medier mellem hostede og selvhostede installationer",
            "Login uden adgangskode med en engangskode på e-mail",
            "Grundlæggende oprettelse og repetition af kort forbliver gratis; højere AI-forbrug kan senere kræve din egen API-nøgle hos en udbyder eller en betalt mulighed",
          ],
          cta: {
            label: "Brug den hostede app gratis",
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
