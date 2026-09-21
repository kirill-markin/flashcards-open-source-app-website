import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - App gratuïta i de codi obert de targetes d'estudi amb repetició espaiada",
  description:
    "Targetes d'estudi gratuïtes i de codi obert amb repetició espaiada FSRS, creació de targetes assistida per IA, estudi fora de línia i sincronització, exportacions portables i autoallotjament.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratuït i de codi obert",
      titleLines: [
        "Crea targetes.",
        "Repassa millor.",
        "Recorda més.",
      ],
      subtitle:
        "Targetes d'estudi gratuïtes i de codi obert que programen cada repàs per al moment adequat, funcionen fora de línia i se sincronitzen entre el web, iOS i Android. Fes servir la IA quan vulguis ajuda per crear o millorar targetes. Nibomo abans es deia Flashcards Open Source App.",
      trustLine: "Sense targeta de crèdit. Sense anuncis. Sense compte enrere de prova.",
      primaryLink: {
        label: "Comença ara",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Mira-ho a GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Afegeix aquest servidor MCP al teu client d'IA:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Funcionalitats",
      intro:
        "Tot el que necessites per crear targetes útils, repassar en el moment adequat, continuar estudiant fora de línia i mantenir el control de les teves dades d'aprenentatge.",
      items: [
        {
          title: "Repassos més intel·ligents amb FSRS",
          description:
            "Repassa les targetes pendents d'avui. FSRS torna a mostrar abans les targetes difícils i espera més temps abans de tornar a ensenyar-te les que ja coneixes.",
        },
        {
          title: "Creació de targetes assistida per IA",
          description:
            "Demana a la IA que t'ajudi a crear targetes, millorar-ne la redacció o aclarir una resposta. Tu decideixes què es desa.",
        },
        {
          title: "Estudi fora de línia amb sincronització automàtica",
          description:
            "Continua repassant al mòbil sense connexió a Internet. Els canvis se sincronitzen automàticament perquè puguis continuar al web, a iOS o a Android.",
        },
        {
          title: "Importa, exporta i sigues l'amo de les teves dades",
          description:
            "Mou els teus materials d'estudi cap endins o cap enfora quan vulguis. Les exportacions portables inclouen les targetes, les etiquetes i el contingut multimèdia relacionat.",
        },
        {
          title: "Funciona amb agents d'IA",
          description:
            "Connecta't per MCP o per l'Agent API perquè els agents d'IA puguin ajudar-te a crear, millorar i organitzar les teves targetes.",
        },
        {
          title: "Gratuït i autoallotjable",
          description:
            "Fes servir l'app allotjada de franc, inspecciona el codi obert o executa'l a la teva pròpia infraestructura.",
        },
      ],
    },
  ],
  body: "",
} as const;
