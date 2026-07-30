import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Uso gratuito. Autoalojamiento gratuito.",
  description:
    "Usa gratis la aplicación alojada, con IA y sincronización incluidas durante la beta, o autoaloja la pila de código abierto en tu infraestructura de AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Uso gratuito. Autoalojamiento gratuito.",
      intro:
        "Usa la aplicación alojada gratis y sin tarjeta de crédito, o ejecuta la pila de código abierto en tu propia infraestructura de AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Alojado",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "Funciones de IA incluidas durante la beta",
            "Sincronización incluida entre web, iOS y Android",
            "Sin cuotas por plan para tarjetas, archivos o almacenamiento total durante la beta; se aplican los límites técnicos normales por archivo y operación",
            "Importa y exporta tarjetas, etiquetas y archivos multimedia entre instalaciones alojadas y autoalojadas",
            "Inicio de sesión sin contraseña mediante un código de un solo uso por correo electrónico",
            "La creación y el repaso de tarjetas seguirán siendo gratis; un uso mayor de IA puede requerir más adelante tu propia clave API de proveedor o una opción de pago",
          ],
          cta: {
            label: "Usar la aplicación gratis",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Autoalojado",
          price: "Gratis",
          highlighted: false,
          bullets: [
            "La aplicación y la infraestructura de AWS CDK son de código abierto",
            "Ruta completa de despliegue en AWS y entorno de desarrollo local con Docker/Postgres",
            "Tú proporcionas y mantienes la infraestructura y las credenciales de correo, monitorización e IA",
            "Los costes de infraestructura y proveedores externos corren por tu cuenta",
            "Importa y exporta tarjetas, etiquetas y archivos multimedia entre instalaciones alojadas y autoalojadas",
          ],
          cta: {
            label: "Autoalojar desde GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
