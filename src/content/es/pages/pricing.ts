import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Precios",
  description:
    "Autoalojamiento gratis o beta cloud alojada. Codigo abierto, sin bloqueo de funciones.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Precios",
      intro:
        "Todas las funciones estan disponibles en todos los planes. Sin bloqueo de funciones.",
      tiers: [
        {
          type: "link_tier",
          name: "Autoalojado",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Codigo fuente completo en GitHub",
            "Stack local con Postgres + auth + backend + web",
            "Todas las funciones actuales incluidas",
            "Tu dominio, tus datos, tu despliegue",
            "Adapta el stack a tu propio flujo de aprendizaje",
          ],
          cta: {
            label: "Ver en GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Beta cloud",
          price: "Gratis durante la beta",
          highlighted: true,
          bullets: [
            "App web alojada en el dominio del proyecto",
            "Autenticacion OTP por correo",
            "Flujo de login en navegador con dominio compartido",
            "Infraestructura AWS gestionada",
            "Acceso temprano mientras el producto sigue evolucionando",
          ],
          cta: {
            label: "Empezar",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
