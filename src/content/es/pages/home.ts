import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - App gratuita y de código abierto con repetición espaciada",
  description:
    "Flashcards gratuitas y de código abierto con repetición espaciada FSRS, creación con IA, estudio y sincronización sin conexión, exportación y alojamiento propio.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratis y de código abierto",
      titleLines: [
        "Crea tarjetas.",
        "Repasa mejor.",
        "Recuerda más.",
      ],
      subtitle:
        "Una app de tarjetas gratuita y de código abierto que programa cada repaso en el momento adecuado, funciona sin conexión y se sincroniza en la web, iOS y Android. Usa la IA cuando quieras crear o mejorar tarjetas.",
      trustLine: "Sin tarjeta de crédito. Sin anuncios. Sin periodo de prueba.",
      primaryLink: {
        label: "Empezar",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Ver en GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Añade este servidor MCP a tu cliente de IA:",
          link: {
            label: "https://mcp.flashcards-open-source-app.com/mcp",
            href: "https://mcp.flashcards-open-source-app.com/mcp",
          },
        },
      ],
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Características",
      intro:
        "Todo lo necesario para crear tarjetas útiles, repasar en el momento adecuado, seguir estudiando sin conexión y mantener el control de tus datos.",
      items: [
        {
          title: "Repasos más inteligentes con FSRS",
          description:
            "Repasa las tarjetas que tocan hoy. FSRS muestra antes las que te cuestan y espera más para volver a enseñarte las que ya dominas.",
        },
        {
          title: "Creación de tarjetas con ayuda de IA",
          description:
            "Pide a la IA que te ayude a crear tarjetas, mejorar su redacción o aclarar una respuesta. Tú decides qué se guarda.",
        },
        {
          title: "Estudio sin conexión con sincronización automática",
          description:
            "Sigue repasando sin conexión en tu móvil. Los cambios se sincronizan automáticamente para que continúes en la web, iOS o Android.",
        },
        {
          title: "Importa, exporta y controla tus datos",
          description:
            "Mueve tus materiales de estudio cuando quieras. Las exportaciones portátiles incluyen tus tarjetas, etiquetas y archivos multimedia relacionados.",
        },
        {
          title: "Compatible con agentes de IA",
          description:
            "Conecta agentes mediante MCP o la Agent API para que te ayuden a crear, mejorar y organizar tus tarjetas.",
        },
        {
          title: "Gratis y con alojamiento propio",
          description:
            "Usa gratis la app alojada, consulta el código abierto o ejecútala en tu propia infraestructura.",
        },
      ],
    },
  ],
  body: "",
} as const;
