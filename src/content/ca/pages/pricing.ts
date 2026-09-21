import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratuït per fer-lo servir. Gratuït per autoallotjar-lo.",
  description:
    "Fes servir l'app allotjada sense cost, amb IA i sincronització incloses durant la beta, o autoallotja la pila de codi obert a la teva pròpia infraestructura d'AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratuït per fer-lo servir. Gratuït per autoallotjar-lo.",
      intro:
        "Fes servir l'app allotjada sense cost i sense targeta de crèdit, o executa la pila de codi obert a la teva pròpia infraestructura d'AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Allotjat",
          price: "Gratuït",
          highlighted: true,
          bullets: [
            "Funcions d'IA incloses durant la beta",
            "Sincronització entre el web, iOS i Android inclosa",
            "Sense quotes per pla en targetes, fitxers ni emmagatzematge total durant la beta; s'apliquen els límits tècnics habituals per fitxer i per operació",
            "Importa i exporta targetes, etiquetes i contingut multimèdia entre instal·lacions allotjades i autoallotjades",
            "Inici de sessió sense contrasenya amb un codi d'un sol ús per correu electrònic",
            "La creació i el repàs bàsics de targetes seguiran sent gratuïts; un ús més intens de la IA pot requerir més endavant la teva pròpia clau API de proveïdor o una opció de pagament",
          ],
          cta: {
            label: "Fes servir l'app allotjada de franc",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Autoallotjat",
          price: "Gratuït",
          highlighted: false,
          bullets: [
            "Aplicació i infraestructura AWS CDK de codi obert",
            "Camí de desplegament complet a AWS més un entorn de desenvolupament local amb Docker/Postgres",
            "Tu proporciones i mantens la infraestructura, el correu, la monitorització i les credencials d'IA",
            "Tu pagues els costos d'infraestructura i dels proveïdors externs",
            "Importa i exporta targetes, etiquetes i contingut multimèdia entre instal·lacions allotjades i autoallotjades",
          ],
          cta: {
            label: "Autoallotja-ho des de GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
