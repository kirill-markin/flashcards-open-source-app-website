import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Recursos do Nibomo",
  description:
    "Conheça os flashcards gratuitos e de código aberto com repetição espaçada FSRS, criação de cartões com IA, estudo offline, exportação e auto-hospedagem.",
  slug: "features",
  sections: [
    {
      type: "feature_list",
      title: "Recursos",
      intro:
        "Tudo o que você precisa para criar cartões úteis, revisar na hora certa, continuar estudando offline e manter o controle dos seus dados de estudo.",
      items: [
        {
          title: "Revisões mais inteligentes com FSRS",
          description:
            "Revise os cartões que vencem hoje. O FSRS traz de volta mais cedo os cartões difíceis e espera mais tempo para mostrar de novo os que você já sabe.",
        },
        {
          title: "Criação de cartões com ajuda da IA",
          description:
            "Peça à IA para ajudar a criar cartões, melhorar o texto ou deixar uma resposta mais clara. Você decide o que é salvo.",
        },
        {
          title: "Estudo offline com sincronização automática",
          description:
            "Continue revisando no celular sem conexão com a internet. As mudanças sincronizam sozinhas para você seguir na web, no iOS ou no Android.",
        },
        {
          title: "Importe, exporte e seja dono dos seus dados",
          description:
            "Leve seu material de estudo para dentro ou para fora quando quiser. As exportações portáteis incluem seus cartões, tags e as mídias relacionadas.",
        },
        {
          title: "Funciona com agentes de IA",
          description:
            "Conecte pelo MCP ou pela Agent API para que agentes de IA ajudem a criar, melhorar e organizar seus cartões.",
        },
        {
          title: "Grátis e com auto-hospedagem",
          description:
            "Use o app hospedado de graça, examine o código aberto ou rode tudo na sua própria infraestrutura.",
        },
      ],
    },
  ],
  body: "",
} as const;
