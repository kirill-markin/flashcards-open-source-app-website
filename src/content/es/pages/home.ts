import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Flashcards - Repeticion espaciada de codigo abierto",
  description:
    "Crea tarjetas, aprende mas y olvida menos con una app de flashcards de codigo abierto para repeticion espaciada, chat con IA y onboarding listo para agentes.",
  slug: "home",
  sections: [
    {
      type: "hero",
      titleLines: [
        "Crea tarjetas.",
        "Aprende mas.",
        "Olvida menos.",
      ],
      subtitle:
        "App de flashcards de codigo abierto con repeticion espaciada, autenticacion sin contrasena, chat con IA y un flujo de onboarding listo para agentes. Usa hoy la app web alojada, conecta Claude Code, Codex u OpenClaw con una sola URL de descubrimiento y manten web, iOS y agentes sobre el mismo modelo de backend.",
      primaryLink: {
        label: "Empezar",
        href: "https://app.flashcards-open-source-app.com",
      },
      secondaryLink: {
        label: "Ver en GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      hintText: "Empieza con GET en esta URL de descubrimiento:",
      hintLink: {
        label: "https://api.flashcards-open-source-app.com/v1/",
        href: "https://api.flashcards-open-source-app.com/v1/",
      },
    },
    {
      type: "feature_list",
      title: "Funciones",
      intro:
        "Un stack de flashcards enfocado: app web alojada, cliente iOS en el repositorio, API externa para agentes y la infraestructura lista para autoalojamiento.",
      items: [
        {
          title: "Repeticion espaciada",
          description:
            "Repasa tarjetas con programacion FSRS y un flujo simple de calificacion. El backend y el cliente iOS mantienen el mismo comportamiento del planificador.",
        },
        {
          title: "App web y chat con IA",
          description:
            "Crea tarjetas, navega por tu coleccion, revisa lo pendiente y trabaja con chat con IA y adjuntos en la app web alojada.",
        },
        {
          title: "Autenticacion sin contrasena",
          description:
            "OTP por correo con Cognito y cookies de dominio compartido entre los subdominios de autenticacion y de la app.",
        },
        {
          title: "Onboarding listo para agentes",
          description:
            "Dale a un agente de IA la URL de descubrimiento, confirma el ultimo codigo de correo de 8 digitos y deja que termine el login, la configuracion de la clave API, la carga de la cuenta, la seleccion del workspace y el descubrimiento SQL.",
        },
        {
          title: "Autoalojado",
          description:
            "Ejecuta Postgres en local, inicia auth, backend y web por separado y manten bajo tu control el camino de despliegue en AWS.",
        },
        {
          title: "Clientes offline-first",
          description:
            "El repositorio ya incluye la app iOS con SQLite local y sincronizacion, y la app Android ya esta disponible en Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
