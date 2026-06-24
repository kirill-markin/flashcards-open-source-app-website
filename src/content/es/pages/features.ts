import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Características",
  description:
    "Repaso con FSRS, creación de tarjetas, chat con IA, puesta en marcha preparada para agentes, autenticación sin contraseña, alojamiento propio y clientes pensados para funcionar sin conexión.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Características",
      intro:
        "Una plataforma de flashcards centrada en lo esencial: app web alojada, cliente iOS en el repositorio, un servidor MCP y una API para agentes, e infraestructura ya preparada para alojarla por tu cuenta.",
      items: [
        {
          title: "Repaso con FSRS",
          description:
            "Las tarjetas pendientes se programan con FSRS. Envía una de cuatro valoraciones y el backend actualiza la fecha del próximo repaso usando la marca temporal enviada por el cliente.",
        },
        {
          title: "Creación de tarjetas y chat",
          description:
            "Crea tarjetas de anverso y reverso desde la app web y usa el chat con IA con datos del espacio de trabajo y archivos adjuntos, incluida la subida de texto plano.",
        },
        {
          title: "Puesta en marcha para agentes",
          description:
            "Añade el servidor MCP de Flashcards a Claude, Cursor o cualquier cliente MCP y podrá leer, crear y editar tus tarjetas. Los agentes de CLI como Claude Code, Codex u OpenClaw pueden, en cambio, apuntar a la URL de descubrimiento, guardar una clave de API y trabajar por la interfaz /v1/agent/sql, con una sola intervención humana: compartir el último código de correo de 8 dígitos.",
        },
        {
          title: "Autenticación sin contraseña",
          description:
            "La autenticación por correo con OTP se ejecuta en un servicio dedicado. Las sesiones del navegador reutilizan cookies de dominio compartido para que el inicio de sesión funcione correctamente entre subdominios.",
        },
        {
          title: "Alojamiento propio",
          description:
            "Ejecuta Postgres, el servicio de autenticación, el backend y la app web en local. El despliegue de producción ya está preparado para AWS con CDK, CloudFront, API Gateway, Lambda y RDS.",
        },
        {
          title: "API pública para agentes",
          description:
            "El contrato externo actual cubre el descubrimiento, el inicio mediante OTP, la selección del espacio de trabajo y un dialecto SQL publicado para trabajar con espacios de trabajo, tarjetas, mazos y eventos de repaso.",
        },
        {
          title: "Clientes pensados para funcionar sin conexión",
          description:
            "El repositorio ya incluye la app de iOS con SQLite local y rutas de sincronización en el backend, y la app de Android ya está disponible en Google Play.",
        },
      ],
    },
  ],
  body: "",
} as const;
