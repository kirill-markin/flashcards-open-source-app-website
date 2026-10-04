import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Grátis para começar. Premium para mais IA.",
  description:
    "Comece grátis no app hospedado, assine o Premium por US$ 6,99/mês para ter mais chat com IA ou hospede a stack de código aberto na sua própria infraestrutura AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Grátis para começar. Premium para mais IA.",
      intro:
        "Comece grátis no app hospedado, sem precisar de cartão de crédito, adicione o Premium para ter mais chat com IA ou rode a stack de código aberto na sua própria infraestrutura AWS, também de graça.",
      tiers: [
        {
          type: "auth_tier",
          name: "Grátis",
          price: "Grátis",
          highlighted: true,
          bullets: [
            "50 mensagens de chat com IA por mês",
            "Use sua própria chave da OpenAI API; o uso com ela não conta no limite mensal",
            "Sincronização entre web, iOS e Android incluída",
            "Sem cotas de plano para cartões, arquivos ou armazenamento total; valem os limites técnicos normais por arquivo e por operação",
            "Importe e exporte cartões, tags e mídias entre instalações hospedadas e auto-hospedadas",
            "Login sem senha, com um código de uso único enviado por e-mail",
          ],
          cta: {
            label: "Usar o app hospedado de graça",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "US$ 6,99/mês",
          highlighted: false,
          bullets: [
            "Teste gratuito de 7 dias para novos assinantes elegíveis; é preciso informar uma forma de pagamento",
            "1000 mensagens de chat com IA por mês",
            "Cores de destaque personalizadas",
            "Tudo o que o plano Grátis oferece",
            "Uma única assinatura para sua conta na web, no iOS e no Android",
            "Preço em dólares americanos, impostos incluídos; no checkout, o valor pode aparecer em moeda local",
            "Renovação mensal; cancele quando quiser e mantenha o acesso até o fim do período",
          ],
          cta: {
            label: "Testar grátis por 7 dias",
            href: "https://app.nibomo.com",
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
