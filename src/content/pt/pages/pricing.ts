import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Grátis para usar. Grátis para hospedar você mesmo.",
  description:
    "Use o app hospedado sem custo, com IA e sincronização incluídas durante o beta, ou hospede a stack de código aberto na sua própria infraestrutura AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Grátis para usar. Grátis para hospedar você mesmo.",
      intro:
        "Use o app hospedado sem custo e sem precisar de cartão de crédito, ou rode a stack de código aberto na sua própria infraestrutura AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hospedado",
          price: "Grátis",
          highlighted: true,
          bullets: [
            "Recursos de IA incluídos durante o beta",
            "Sincronização entre web, iOS e Android incluída",
            "Sem cotas de plano para cartões, arquivos ou armazenamento total durante o beta; valem os limites técnicos normais por arquivo e por operação",
            "Importe e exporte cartões, tags e mídias entre instalações hospedadas e auto-hospedadas",
            "Login sem senha, com um código de uso único enviado por e-mail",
            "A criação e a revisão de cartões vão continuar gratuitas; um uso maior de IA pode exigir mais adiante a sua própria chave de API do provedor ou uma opção paga",
          ],
          cta: {
            label: "Usar o app hospedado de graça",
            href: "https://app.flashcards-open-source-app.com",
          },
        },
        {
          type: "link_tier",
          name: "Auto-hospedado",
          price: "Grátis",
          highlighted: false,
          bullets: [
            "Aplicativo e infraestrutura AWS CDK de código aberto",
            "Caminho completo de deploy na AWS e um ambiente local de desenvolvimento com Docker/Postgres",
            "Você fornece e mantém a infraestrutura e as credenciais de e-mail, monitoramento e IA",
            "Você paga os custos de infraestrutura e dos provedores externos",
            "Importe e exporte cartões, tags e mídias entre instalações hospedadas e auto-hospedadas",
          ],
          cta: {
            label: "Hospedar você mesmo pelo GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
