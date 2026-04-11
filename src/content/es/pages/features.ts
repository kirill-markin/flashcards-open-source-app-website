import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Funciones",
  description:
    "Repaso con FSRS, creacion de tarjetas, chat con IA, onboarding listo para agentes, autenticacion sin contrasena, autoalojamiento y clientes offline-first.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Funciones",
      intro:
        "Un stack de flashcards enfocado: app web alojada, cliente iOS en el repositorio, API externa para agentes y la infraestructura ya preparada para autoalojamiento.",
      items: [
        {
          title: "Repaso con FSRS",
          description:
            "Las tarjetas pendientes se programan con FSRS. Envia una de cuatro valoraciones y el backend actualiza la siguiente revision usando la marca de tiempo del cliente.",
        },
        {
          title: "Creacion de tarjetas y chat",
          description:
            "Crea tarjetas de frente y reverso desde el cliente web y usa chat con IA con datos del workspace y adjuntos, incluidas subidas de texto plano.",
        },
        {
          title: "Onboarding listo para agentes",
          description:
            "Apunta Claude Code, Codex u OpenClaw a la URL de descubrimiento y el agente puede recorrer todo el flujo de autenticacion, guardar la clave API, cargar el contexto de la cuenta, elegir el workspace correcto y continuar por la superficie compacta /v1/agent/sql con un solo paso humano: compartir el ultimo codigo de correo de 8 digitos.",
        },
        {
          title: "Autenticacion sin contrasena",
          description:
            "La autenticacion OTP por correo se ejecuta en un servicio de auth dedicado. Las sesiones del navegador reutilizan cookies de dominio compartido para que el login funcione limpio entre subdominios.",
        },
        {
          title: "Stack autoalojado",
          description:
            "Ejecuta Postgres, auth, backend y el cliente web en local. El despliegue de produccion ya esta cableado para AWS con CDK, CloudFront, API Gateway, Lambda y RDS.",
        },
        {
          title: "API publica para agentes",
          description:
            "El contrato externo actual cubre descubrimiento, bootstrap OTP, seleccion de workspace y un dialecto SQL publicado sobre workspace, tarjetas, mazos y eventos de revision.",
        },
        {
          title: "Clientes offline-first",
          description:
            "El repositorio ya incluye el cliente iOS con SQLite local y rutas de sincronizacion en el backend, y la app Android ya esta disponible en Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
