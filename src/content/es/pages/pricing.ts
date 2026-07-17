import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Precios",
  description:
    "La aplicación alojada y la experiencia principal con tarjetas son gratis. También puedes autoalojar el software gratuito y de código abierto.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Precios",
      intro:
        "La aplicación alojada y las funciones principales para crear y repasar tarjetas son gratis.",
      tiers: [
        {
          type: "link_tier",
          name: "Autoalojado",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "Software gratuito y de código abierto",
            "Código fuente completo en GitHub",
            "Todas las funciones principales actuales incluidas",
            "Tu dominio, tus datos y tu despliegue",
            "Los costes de infraestructura corren por tu cuenta",
          ],
          cta: {
            label: "Ver en GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
        {
          type: "auth_tier",
          name: "Alojado",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "Aplicación web alojada con infraestructura gestionada",
            "Creación y repaso de tarjetas incluidos",
            "No necesitas tarjeta de crédito ni hay una cuenta atrás de prueba",
            "Autenticación mediante un código de un solo uso por correo electrónico",
            "El servicio está actualmente en beta y se ofrece bajo un modelo de mejor esfuerzo",
            "Es posible que añadamos funciones prémium opcionales en el futuro, pero crear y repasar tarjetas seguirá siendo gratis",
          ],
          cta: {
            label: "Empezar a estudiar gratis",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
