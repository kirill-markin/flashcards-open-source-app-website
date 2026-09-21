import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funcionalitats de Nibomo",
  description:
    "Descobreix targetes d'estudi gratuïtes i de codi obert amb repetició espaiada FSRS, creació de targetes assistida per IA, estudi fora de línia i sincronització, exportacions portables i autoallotjament.",
  slug: "features",
  sections: [
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
