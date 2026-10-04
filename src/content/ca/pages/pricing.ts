import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratuït per començar. Premium per a més IA.",
  description:
    "Comença gratis a l'app allotjada, passa a Premium per USD 6.99 al mes i xateja més amb la IA, o autoallotja la pila de codi obert a la teva pròpia infraestructura d'AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratuït per començar. Premium per a més IA.",
      intro:
        "Comença a l'app allotjada de franc i sense targeta de crèdit, afegeix Premium per xatejar més amb la IA, o autoallotja de franc la pila de codi obert a la teva pròpia infraestructura d'AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratuït",
          price: "Gratuït",
          highlighted: true,
          bullets: [
            "50 missatges al xat amb IA al mes",
            "Fes servir la teva pròpia clau de l'API d'OpenAI; el seu ús no compta dins del límit mensual",
            "Sincronització entre el web, iOS i Android inclosa",
            "Sense quotes per pla en targetes, fitxers ni emmagatzematge total; s'apliquen els límits tècnics habituals per fitxer i per operació",
            "Importa i exporta targetes, etiquetes i contingut multimèdia entre instal·lacions allotjades i autoallotjades",
            "Inici de sessió sense contrasenya amb un codi d'un sol ús per correu electrònic",
          ],
          cta: {
            label: "Fes servir l'app allotjada de franc",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "$6.99/mes",
          highlighted: false,
          bullets: [
            "Prova gratuïta de 7 dies per a subscriptors nous que compleixin els requisits; cal un mètode de pagament",
            "1000 missatges al xat amb IA al mes",
            "Colors d'accent personalitzats",
            "Tot el que inclou el pla Gratuït",
            "Una sola subscripció per al teu compte al web, iOS i Android",
            "Preu en USD amb impostos inclosos; en el pagament pot aparèixer un preu en moneda local",
            "Es renova cada mes; cancel·la quan vulguis i conserva l'accés fins al final del període",
          ],
          cta: {
            label: "Comença la prova gratuïta de 7 dies",
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
