import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Kom i gang gratis. Mer KI med Premium.",
  description:
    "Start gratis i den hostede appen, oppgrader til Premium til USD 6.99/mnd. for mer KI-chat, eller selvhost stakken med åpen kildekode på din egen AWS-infrastruktur.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Kom i gang gratis. Mer KI med Premium.",
      intro:
        "Start gratis i den hostede appen uten kredittkort, legg til Premium for mer KI-chat, eller selvhost stakken med åpen kildekode gratis på din egen AWS-infrastruktur.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratis",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "50 meldinger i KI-chatten per måned",
            "Bruk din egen OpenAI API-nøkkel; bruken av den teller ikke mot månedsgrensen",
            "Synkronisering på tvers av web, iOS og Android inkludert",
            "Ingen abonnementsbaserte kvoter på kort, filer eller total lagring; vanlige tekniske grenser per fil og per operasjon gjelder",
            "Importer og eksporter kort, tagger og medier mellom hostede og selvhostede installasjoner",
            "Innlogging uten passord med en engangskode på e-post",
          ],
          cta: {
            label: "Bruk den hostede appen gratis",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mnd.",
          highlighted: false,
          bullets: [
            "7 dagers gratis prøveperiode for kvalifiserte nye abonnenter; betalingsmåte kreves",
            "1000 meldinger i KI-chatten per måned",
            "Egendefinerte aksentfarger",
            "Alt i Gratis",
            "Ett abonnement for kontoen din på web, iOS og Android",
            "Pris i USD inkludert skatter og avgifter; i kassen kan prisen vises i lokal valuta",
            "Fornyes månedlig; si opp når som helst og behold tilgangen ut perioden",
          ],
          cta: {
            label: "Prøv gratis i 7 dager",
            href: "https://app.nibomo.com",
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
            "Du skaffer og vedlikeholder infrastruktur, e-post, overvåking og KI-legitimasjon",
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
