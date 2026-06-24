import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - Repetición espaciada de código abierto",
  description:
    "Crea tarjetas, aprende más y olvida menos con una app de flashcards de código abierto que combina repetición espaciada, chat con IA y un proceso de incorporación preparado para agentes.",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "Crea tarjetas.",
        "Aprende más.",
        "Olvida menos.",
      ],
      subtitle:
        "App de flashcards de código abierto con repetición espaciada, autenticación sin contraseña, chat con IA y un proceso de incorporación preparado para agentes. Usa hoy la app web alojada, conecta Claude, Cursor y otros agentes de IA por MCP y haz que web, iOS y agentes trabajen sobre el mismo modelo de datos del backend.",
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
        "Una plataforma de flashcards centrada en lo esencial: app web alojada, cliente iOS en el repositorio, un servidor MCP para agentes de IA e infraestructura ya preparada para alojarla por tu cuenta.",
      items: [
        {
          title: "Repetición espaciada",
          description:
            "Repasa tarjetas con programación FSRS y una valoración sencilla en cada sesión. El backend y el cliente iOS mantienen alineado el comportamiento del planificador.",
        },
        {
          title: "App web y chat con IA",
          description:
            "Crea tarjetas, explora tu colección, repasa lo pendiente y usa el chat con IA con archivos adjuntos en la app web alojada.",
        },
        {
          title: "Autenticación sin contraseña",
          description:
            "Códigos OTP por correo con Cognito y cookies compartidas entre los subdominios de autenticación y de la app.",
        },
        {
          title: "Puesta en marcha para agentes",
          description:
            "Añade el servidor MCP de Flashcards a tu cliente de IA, autorízalo una vez y deja que cargue tu espacio de trabajo y cree, edite y repase tus tarjetas por ti.",
        },
        {
          title: "Alojamiento propio",
          description:
            "Ejecuta Postgres en local, inicia por separado los servicios de autenticación, backend y web, y mantén bajo tu control el despliegue en AWS.",
        },
        {
          title: "Clientes pensados para funcionar sin conexión",
          description:
            "El repositorio ya incluye la app de iOS con SQLite local y sincronización, y la app de Android ya está disponible en Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
