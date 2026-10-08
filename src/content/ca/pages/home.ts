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
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Mira-ho a GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "O connecta qualsevol client d'IA compatible amb MCP amb aquest URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Com funciona Nibomo",
      items: [
        {
          label: "01 · TARGETES AMB IA",
          titleLines: [
            "Digues a la IA què vols aprendre.",
          ],
          description: "Descriu un tema o adjunta els teus apunts. La IA t’ajuda a convertir el material en targetes amb preguntes i respostes.",
          linkLabel: "Crear targetes",
          imagePath: "/home/ai-flashcards-ca.png",
          imageAlt: "Xat d’IA de Nibomo que crea targetes a partir d’un tema o d’apunts adjunts",
        },
        {
          label: "02 · COMENÇA A APRENDRE",
          titleLines: [
            "Una pregunta cada vegada.",
          ],
          description: "Obre una targeta i intenta recordar la resposta abans de mostrar-la. Aprèn al teu ritme, una targeta cada vegada.",
          linkLabel: "Començar a aprendre",
          imagePath: "/home/start-learning-ca.png",
          imageAlt: "Targeta de repàs de Nibomo amb un botó per mostrar la resposta",
        },
        {
          label: "03 · REPASSOS INTEL·LIGENTS",
          titleLines: [
            "Comprova la resposta.",
            "Valora com la recordes.",
          ],
          description: "Mostra la resposta i indica amb quina facilitat l’has recordada. Nibomo torna a mostrar abans les targetes difícils i més tard les que ja coneixes.",
          linkLabel: "Repassar targetes",
          imagePath: "/home/smart-reviews-ca.png",
          imageAlt: "Targeta de Nibomo amb la resposta visible i opcions per valorar el record",
        },
        {
          label: "04 · EL TEU PROGRÉS",
          titleLines: [
            "Converteix l’aprenentatge en un hàbit.",
          ],
          description: "Consulta els dies d’estudi al calendari i mantén la ratxa. Cada repàs és un pas més cap al teu objectiu.",
          linkLabel: "Veure el progrés",
          imagePath: "/home/your-progress-ca.png",
          imageAlt: "Pantalla de progrés de Nibomo amb el calendari de la ratxa d’estudi i la classificació",
        }
      ],
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
            "Continua repassant al dispositiu mòbil sense connexió a internet. Els canvis se sincronitzen automàticament.",
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
    {
      type: "review_cta",
      titleLines: [
        "Deixa que Nibomo planifiqui els teus repassos.",
        "Tu centra’t a aprendre.",
      ],
      description: "Converteix el que aprens en targetes, repassa en el moment adequat i recorda més.",
    },
  ],
  body: "",
} as const;
