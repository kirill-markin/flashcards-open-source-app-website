import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - App gratuito e de código aberto com repetição espaçada",
  description:
    "Flashcards gratuitos e de código aberto com repetição espaçada FSRS, criação de cartões com IA, estudo offline, sincronização, exportação e auto-hospedagem.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Grátis e de código aberto",
      titleLines: [
        "Crie cartões.",
        "Revise melhor.",
        "Memorize mais.",
      ],
      subtitle:
        "Flashcards gratuitos e de código aberto que agendam cada revisão na hora certa, funcionam offline e sincronizam na web, no iOS e no Android. Use a IA quando quiser ajuda para criar ou melhorar cartões. O Nibomo se chamava Flashcards Open Source App.",
      trustLine: "Sem cartão de crédito. Sem anúncios. Sem prazo de teste.",
      primaryLink: {
        label: "Começar",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Ver no GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Ou conecte qualquer cliente de IA compatível com MCP usando esta URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Como o Nibomo funciona",
      items: [
        {
          label: "01 · FLASHCARDS COM IA",
          titleLines: [
            "Diga à IA o que você quer aprender.",
          ],
          description: "Descreva um assunto ou anexe suas anotações. A IA ajuda a transformar seu material em flashcards com perguntas e respostas.",
          linkLabel: "Criar flashcards",
          imagePath: "/home/ai-flashcards.png",
          imageAlt: "Chat de IA do Nibomo criando flashcards a partir de um assunto ou de anotações anexadas",
        },
        {
          label: "02 · COMECE A APRENDER",
          titleLines: [
            "Uma pergunta de cada vez.",
          ],
          description: "Abra um flashcard e tente lembrar a resposta antes de revelá-la. Aprenda no seu ritmo, um cartão de cada vez.",
          linkLabel: "Começar a aprender",
          imagePath: "/home/start-learning.png",
          imageAlt: "Flashcard de revisão do Nibomo com um botão para mostrar a resposta",
        },
        {
          label: "03 · REVISÕES INTELIGENTES",
          titleLines: [
            "Confira sua resposta.",
            "Avalie sua lembrança.",
          ],
          description: "Revele a resposta e indique com que facilidade você se lembrou dela. O Nibomo traz os cartões difíceis de volta mais cedo e os conhecidos mais tarde.",
          linkLabel: "Revisar flashcards",
          imagePath: "/home/smart-reviews.png",
          imageAlt: "Flashcard do Nibomo com a resposta revelada e opções para avaliar a lembrança",
        },
        {
          label: "04 · SEU PROGRESSO",
          titleLines: [
            "Transforme o aprendizado em um hábito.",
          ],
          description: "Veja seus dias de estudo no calendário e mantenha sua sequência. Cada revisão é mais um passo em direção ao seu objetivo.",
          linkLabel: "Ver seu progresso",
          imagePath: "/home/your-progress.png",
          imageAlt: "Tela de progresso do Nibomo com calendário de dias consecutivos de estudo e classificação",
        }
      ],
    },
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
            "Continue revisando no seu dispositivo móvel sem conexão com a internet. As alterações são sincronizadas automaticamente.",
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
    {
      type: "review_cta",
      titleLines: [
        "Deixe o Nibomo planejar suas revisões.",
        "Você se concentra em aprender.",
      ],
      description: "Transforme o que está aprendendo em flashcards, revise no momento certo e lembre mais.",
    },
  ],
  body: "",
} as const;
