import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Comece gratuitamente. Premium para mais IA.",
  description:
    "Premium — Preço normal na Web: 6,99 USD por mês. O preço normal na Web inclui impostos. As ofertas regionais e das lojas podem variar. O preço final é apresentado antes da compra.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Comece gratuitamente. Premium para mais IA.",
      intro:
        "Comece gratuitamente na aplicação alojada, sem cartão de crédito, adira ao Premium para enviar mais mensagens no chat com IA ou use gratuitamente o sistema de código aberto na sua própria infraestrutura AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratuito",
          price: "Gratuito",
          highlighted: true,
          bullets: [
            "50 mensagens de chat com IA por mês",
            "Utilize a sua chave da API da OpenAI. A utilização dessa chave não conta para o limite mensal",
            "Sincronização incluída entre Web, iOS e Android",
            "Sem quotas de cartões, ficheiros ou armazenamento total associadas ao plano. Aplicam-se os limites técnicos habituais por ficheiro e por operação",
            "Importe e exporte cartões, etiquetas e ficheiros multimédia entre instalações alojadas e instalações com alojamento próprio",
            "Início de sessão sem palavra-passe, com um código de utilização única enviado por e-mail",
          ],
          cta: {
            label: "Usar a aplicação alojada gratuitamente",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "Preço normal na Web: 6,99 USD por mês",
          highlighted: false,
          bullets: [
            "Período experimental gratuito de 7 dias para novos subscritores elegíveis, com método de pagamento obrigatório",
            "1 000 mensagens de chat com IA por mês",
            "Cores de destaque personalizadas",
            "Tudo o que o plano Gratuito oferece",
            "Uma única subscrição para a sua conta na Web, no iOS e no Android",
            "O preço normal na Web inclui impostos. As ofertas regionais e das lojas podem variar. O preço final é apresentado antes da compra.",
            "Renovação mensal. Pode cancelar a qualquer momento e manter o acesso até ao fim do período",
          ],
          cta: {
            label: "Experimentar gratuitamente durante 7 dias",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Alojamento próprio",
          price: "Gratuito",
          highlighted: false,
          bullets: [
            "Aplicação e infraestrutura AWS CDK de código aberto",
            "Processo completo de implementação na AWS e ambiente de desenvolvimento local com Docker/Postgres",
            "Fornece e mantém a infraestrutura, o serviço de e-mail, a monitorização e as credenciais de IA",
            "Suporta os custos da infraestrutura e dos fornecedores externos",
            "Importe e exporte cartões, etiquetas e ficheiros multimédia entre instalações alojadas e instalações com alojamento próprio",
          ],
          cta: {
            label: "Alojar o Nibomo a partir do GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
