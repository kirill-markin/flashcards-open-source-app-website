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
        "App de flashcards de código abierto con repetición espaciada, autenticación sin contraseña, chat con IA y un proceso de incorporación preparado para agentes. Usa hoy la app web alojada, conecta Claude Code, Codex u OpenClaw mediante una sola URL de descubrimiento y haz que web, iOS y agentes trabajen sobre el mismo modelo de datos del backend.",
      primaryLink: {
        label: "Empezar",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Ver en GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Empieza con una solicitud GET a esta URL de descubrimiento:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "public_activity",
    },
    {
      type: "feature_list",
      title: "Características",
      intro:
        "Una plataforma de flashcards centrada en lo esencial: app web alojada, cliente iOS en el repositorio, API externa para agentes e infraestructura ya preparada para alojarla por tu cuenta.",
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
            "Dale a un agente de IA la URL de descubrimiento, confirma el último código de correo de 8 dígitos y deja que complete el inicio de sesión, la configuración de la clave de API, la carga de la cuenta, la selección del espacio de trabajo y la exploración SQL.",
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
