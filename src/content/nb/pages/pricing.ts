import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis å bruke. Gratis å selvhoste.",
  description:
    "Bruk den hostede appen uten kostnad, med AI og synkronisering inkludert i betaen, eller selvhost stakken med åpen kildekode på din egen AWS-infrastruktur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis å bruke. Gratis å selvhoste.",
      intro:
        "Bruk den hostede appen uten kostnad og uten kredittkort, eller kjør stakken med åpen kildekode på din egen AWS-infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hostet",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "AI-funksjoner inkludert i betaen",
            "Synkronisering på tvers av web, iOS og Android inkludert",
            "Ingen abonnementsbaserte kvoter på kort, filer eller total lagring i betaen; vanlige tekniske grenser per fil og per operasjon gjelder",
            "Importer og eksporter kort, tagger og medier mellom hostede og selvhostede installasjoner",
            "Innlogging uten passord med en engangskode på e-post",
            "Grunnleggende kortlaging og repetisjon forblir gratis; høyere AI-bruk kan senere kreve din egen API-nøkkel hos en leverandør eller et betalt alternativ",
          ],
          cta: {
            label: "Bruk den hostede appen gratis",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Selvhostet",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Applikasjon med åpen kildekode og AWS CDK-infrastruktur",
            "Full utrullingsvei på AWS pluss et lokalt utviklingsoppsett med Docker/Postgres",
            "Du skaffer og vedlikeholder infrastruktur, e-post, overvåking og AI-legitimasjon",
            "Du betaler kostnadene for infrastruktur og tredjepartsleverandører",
            "Importer og eksporter kort, tagger og medier mellom hostede og selvhostede installasjoner",
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
