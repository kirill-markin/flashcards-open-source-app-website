import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - App gratuita y de código abierto con repetición espaciada",
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
        "Una app de tarjetas gratuita y de código abierto que programa cada repaso en el momento adecuado, funciona sin conexión y se sincroniza en la web, iOS y Android. Usa la IA cuando quieras crear o mejorar tarjetas. Nibomo se llamaba antes Flashcards Open Source App.",
      trustLine: "Sin tarjeta de crédito. Sin anuncios. Sin periodo de prueba.",
      primaryLink: {
        label: "Empezar",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Ver en GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "O conecta cualquier cliente de IA compatible con MCP mediante esta URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Cómo funciona Nibomo",
      items: [
        {
          label: "01 · TARJETAS CON IA",
          titleLines: [
            "Dile a la IA qué quieres aprender.",
          ],
          description: "Describe un tema o adjunta tus apuntes. La IA te ayuda a convertir tu material en tarjetas con preguntas y respuestas.",
          linkLabel: "Crear tarjetas",
          imagePath: "/home/ai-flashcards-es.png",
          imageAlt: "Chat de IA de Nibomo que crea tarjetas a partir de un tema o de apuntes adjuntos",
        },
        {
          label: "02 · EMPIEZA A APRENDER",
          titleLines: [
            "Una pregunta a la vez.",
          ],
          description: "Abre una tarjeta e intenta recordar la respuesta antes de mostrarla. Aprende a tu ritmo, una tarjeta a la vez.",
          linkLabel: "Empezar a aprender",
          imagePath: "/home/start-learning-es.png",
          imageAlt: "Tarjeta de repaso de Nibomo con un botón para mostrar la respuesta",
        },
        {
          label: "03 · REPASOS INTELIGENTES",
          titleLines: [
            "Comprueba tu respuesta.",
            "Evalúa cuánto recuerdas.",
          ],
          description: "Muestra la respuesta e indica con qué facilidad la recordaste. Nibomo vuelve a mostrar antes las tarjetas difíciles y más tarde las que ya conoces.",
          linkLabel: "Repasar tarjetas",
          imagePath: "/home/smart-reviews-es.png",
          imageAlt: "Tarjeta de Nibomo con la respuesta visible y opciones para evaluar el recuerdo",
        },
        {
          label: "04 · TU PROGRESO",
          titleLines: [
            "Convierte el aprendizaje en un hábito.",
          ],
          description: "Consulta tus días de estudio en el calendario y mantén tu racha. Cada repaso es un paso más hacia tu objetivo.",
          linkLabel: "Ver tu progreso",
          imagePath: "/home/your-progress-es.png",
          imageAlt: "Pantalla de progreso de Nibomo con el calendario de la racha de estudio y la clasificación",
        }
      ],
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
            "Sigue repasando en tu dispositivo móvil sin conexión a internet. Los cambios se sincronizan automáticamente.",
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
    {
      type: "review_cta",
      titleLines: [
        "Deja que Nibomo planifique tus repasos.",
        "Tú céntrate en aprender.",
      ],
      description: "Convierte lo que aprendes en tarjetas, repasa en el momento adecuado y recuerda más.",
    },
  ],
  body: "",
} as const;
