import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratis para empezar. Premium para más IA.",
  description:
    "Empieza gratis en la aplicación alojada, pásate a Premium por 6,99 USD al mes para más chat con IA o autoaloja la pila de código abierto en tu infraestructura de AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratis para empezar. Premium para más IA.",
      intro:
        "Empieza en la aplicación alojada gratis y sin tarjeta de crédito, añade Premium para más chat con IA o autoaloja gratis la pila de código abierto en tu propia infraestructura de AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratis",
          price: "Gratis",
          highlighted: true,
          bullets: [
            "50 mensajes de chat con IA al mes",
            "Usa tu propia clave de la API de OpenAI; su uso no cuenta para el límite mensual",
            "Sincronización incluida entre web, iOS y Android",
            "Sin cuotas por plan para tarjetas, archivos o almacenamiento total; se aplican los límites técnicos normales por archivo y operación",
            "Importa y exporta tarjetas, etiquetas y archivos multimedia entre instalaciones alojadas y autoalojadas",
            "Inicio de sesión sin contraseña mediante un código de un solo uso por correo electrónico",
          ],
          cta: {
            label: "Usar la aplicación gratis",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "6,99 $/mes",
          highlighted: false,
          bullets: [
            "Prueba gratuita de 7 días para nuevos suscriptores que cumplan los requisitos; requiere un método de pago",
            "1000 mensajes de chat con IA al mes",
            "Colores de acento personalizados",
            "Todo lo del plan Gratis",
            "Una sola suscripción para tu cuenta en web, iOS y Android",
            "Precio en USD con impuestos incluidos; al pagar, puede aparecer un precio en moneda local",
            "Se renueva cada mes; cancela cuando quieras y conserva el acceso hasta el final del período",
          ],
          cta: {
            label: "Empezar la prueba gratuita de 7 días",
            href: "https://app.nibomo.com",
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
