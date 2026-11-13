import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Aplicação gratuita e de código aberto com repetição espaçada",
  description:
    "Flashcards gratuitos e de código aberto com repetição espaçada FSRS, criação de cartões com IA, estudo offline, sincronização, widgets no ecrã principal e alojamento próprio.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratuito e de código aberto",
      titleLines: [
        "Crie cartões.",
        "Reveja melhor.",
        "Memorize mais.",
      ],
      subtitle:
        "Flashcards gratuitos que agendam cada revisão no momento certo, funcionam offline e sincronizam-se na Web, no iOS e no Android. Use a IA quando quiser ajuda para criar ou melhorar cartões.",
      trustLine: "Sem cartão de crédito. Sem anúncios. Sem período experimental.",
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
          caption: "Também pode ligar qualquer cliente de IA compatível com MCP através deste URL:",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Como funciona o Nibomo",
      items: [
        {
          label: "01 · FLASHCARDS COM IA",
          titleLines: [
            "Diga à IA o que quer aprender.",
          ],
          description: "Descreva um tema ou anexe as suas notas. A IA ajuda a transformar o material em flashcards com perguntas e respostas.",
          linkLabel: "Criar flashcards",
          imagePath: "/home/ai-flashcards-pt.png",
          imageAlt: "Chat com IA do Nibomo a criar flashcards a partir de um tema ou de notas anexadas",
        },
        {
          label: "02 · COMECE A APRENDER",
          titleLines: [
            "Uma pergunta de cada vez.",
          ],
          description: "Abra um flashcard e tente lembrar-se da resposta antes de a revelar. Aprenda ao seu ritmo, um cartão de cada vez.",
          linkLabel: "Começar a aprender",
          imagePath: "/home/start-learning-pt.png",
          imageAlt: "Flashcard de revisão do Nibomo com um botão para mostrar a resposta",
        },
        {
          label: "03 · REVISÕES INTELIGENTES",
          titleLines: [
            "Verifique a resposta.",
            "Avalie a facilidade com que se lembrou.",
          ],
          description: "Revele a resposta e indique com que facilidade se lembrou dela. O Nibomo volta a mostrar os cartões difíceis mais cedo e os familiares mais tarde.",
          linkLabel: "Rever flashcards",
          imagePath: "/home/smart-reviews-pt.png",
          imageAlt: "Flashcard do Nibomo com a resposta revelada e opções para avaliar a facilidade de recordar a resposta",
        },
        {
          label: "04 · O SEU PROGRESSO",
          titleLines: [
            "Faça da aprendizagem um hábito.",
          ],
          description: "Consulte os seus dias de estudo no calendário e mantenha a sequência. Cada revisão aproxima-o do seu objetivo.",
          linkLabel: "Ver o seu progresso",
          imagePath: "/home/your-progress-pt.png",
          imageAlt: "Ecrã de progresso do Nibomo com calendário de dias consecutivos de estudo e classificação",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Funcionalidades",
      intro:
        "Tudo o que precisa para criar cartões úteis, rever no momento certo, continuar a estudar offline e manter o controlo sobre os seus dados de estudo.",
      items: [
        {
          title: "Revisões mais inteligentes com FSRS",
          description:
            "Reveja os cartões previstos para hoje. O FSRS volta a mostrar os cartões difíceis mais cedo e espera mais tempo antes de mostrar os que já conhece.",
        },
        {
          title: "Criação de cartões com ajuda da IA",
          description:
            "Peça à IA para ajudar a criar cartões, melhorar o texto ou clarificar uma resposta. A decisão sobre o que guardar é sua.",
        },
        {
          title: "Estudo offline com sincronização automática",
          description:
            "Continue a rever no telemóvel sem ligação à Internet. As alterações são sincronizadas automaticamente.",
        },
        {
          title: "O próximo cartão num relance",
          description:
            "Os widgets do ecrã principal para iPhone, iPad, Mac e Android mostram quantos cartões tem para rever, a próxima pergunta e o seu progresso.",
        },
        {
          title: "Importe, exporte e mantenha o controlo dos seus dados",
          description:
            "Transfira o seu material de estudo quando quiser. As exportações portáteis incluem os seus cartões, etiquetas e ficheiros multimédia associados.",
        },
        {
          title: "Funciona com agentes de IA",
          description:
            "Ligue-se por MCP ou pela API de agentes para que os agentes de IA ajudem a criar, melhorar e organizar os seus cartões.",
        },
        {
          title: "Gratuito e com alojamento próprio",
          description:
            "Use a aplicação alojada gratuitamente, consulte o código aberto ou execute o serviço na sua infraestrutura.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Deixe o Nibomo planear as revisões.",
        "Concentre-se em aprender.",
      ],
      description: "Transforme o que está a aprender em flashcards, reveja no momento certo e memorize mais.",
    },
  ],
  body: "",
} as const;
