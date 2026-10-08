import type { PageContent } from "@/lib/content/types";

export const HOME_PAGE_CONTENT: PageContent = {
  title: "Nibomo - Cartes mémoire gratuites et open source à répétition espacée",
  description:
    "Cartes mémoire gratuites et open source avec répétition espacée FSRS, création assistée par IA, étude hors ligne et synchronisation, exports portables et auto-hébergement.",
  slug: "home",
  sections: [
    {
      type: "hero",
      eyebrow: "Gratuit et open source",
      titleLines: [
        "Créez des cartes.",
        "Révisez mieux.",
        "Retenez plus.",
      ],
      subtitle:
        "Des cartes mémoire gratuites qui programment chaque révision au bon moment, fonctionnent hors ligne et se synchronisent sur le web, iOS et Android. Utilisez l'IA quand vous voulez de l'aide pour créer ou améliorer des cartes.",
      trustLine: "Sans carte bancaire. Sans publicité. Sans compte à rebours d'essai.",
      primaryLink: {
        label: "Commencer",
        href: "https://app.nibomo.com",
      },
      secondaryLink: {
        label: "Voir sur GitHub",
        href: "https://github.com/kirill-markin/flashcards-open-source-app",
      },
      agentConnectors: [
        {
          caption: "Ou connectez tout client IA compatible avec MCP à cette URL :",
          link: {
            label: "https://mcp.nibomo.com/mcp",
            href: "https://mcp.nibomo.com/mcp",
          },
        },
      ],
    },
    {
      type: "app_walkthrough",
      title: "Comment fonctionne Nibomo",
      items: [
        {
          label: "01 · CARTES AVEC L’IA",
          titleLines: [
            "Dites à l’IA ce que vous voulez apprendre.",
          ],
          description: "Décrivez un sujet ou joignez vos notes. L’IA vous aide à transformer votre contenu en cartes avec des questions et des réponses.",
          linkLabel: "Créer des cartes",
          imagePath: "/home/ai-flashcards-fr.png",
          imageAlt: "Chat IA de Nibomo créant des cartes à partir d’un sujet ou de notes jointes",
        },
        {
          label: "02 · COMMENCEZ À APPRENDRE",
          titleLines: [
            "Une question à la fois.",
          ],
          description: "Ouvrez une carte et essayez de vous rappeler la réponse avant de l’afficher. Apprenez à votre rythme, une carte à la fois.",
          linkLabel: "Commencer à apprendre",
          imagePath: "/home/start-learning-fr.png",
          imageAlt: "Carte de révision Nibomo avec un bouton pour afficher la réponse",
        },
        {
          label: "03 · RÉVISIONS INTELLIGENTES",
          titleLines: [
            "Vérifiez votre réponse.",
            "Évaluez votre mémorisation.",
          ],
          description: "Affichez la réponse et indiquez avec quelle facilité vous vous en êtes souvenu. Nibomo vous repropose les cartes difficiles plus tôt et les cartes familières plus tard.",
          linkLabel: "Réviser les cartes",
          imagePath: "/home/smart-reviews-fr.png",
          imageAlt: "Carte Nibomo affichant la réponse et les options d’évaluation de la mémorisation",
        },
        {
          label: "04 · VOTRE PROGRESSION",
          titleLines: [
            "Faites de l’apprentissage une habitude.",
          ],
          description: "Consultez vos jours d’étude dans le calendrier et poursuivez votre série. Chaque révision vous rapproche de votre objectif.",
          linkLabel: "Voir votre progression",
          imagePath: "/home/your-progress-fr.png",
          imageAlt: "Écran de progression Nibomo avec le calendrier des jours d’étude consécutifs et le classement",
        }
      ],
    },
    {
      type: "feature_list",
      title: "Fonctionnalités",
      intro:
        "Tout ce qu'il faut pour créer des cartes utiles, réviser au bon moment, continuer à étudier hors ligne et garder le contrôle de vos données d'apprentissage.",
      items: [
        {
          title: "Des révisions plus intelligentes avec FSRS",
          description:
            "Révisez les cartes prévues pour aujourd'hui. FSRS ramène plus tôt les cartes difficiles et attend plus longtemps avant de remontrer celles que vous connaissez.",
        },
        {
          title: "Création de cartes assistée par IA",
          description:
            "Demandez à l'IA de créer des cartes, d'en reformuler le texte ou de clarifier une réponse. Vous gardez le contrôle de ce qui est enregistré.",
        },
        {
          title: "Étude hors ligne avec synchronisation automatique",
          description:
            "Continuez à réviser sur votre appareil mobile sans connexion Internet. Les modifications se synchronisent automatiquement.",
        },
        {
          title: "Importez, exportez et gardez vos données",
          description:
            "Déplacez vos supports d'apprentissage quand vous le souhaitez. Les exports portables contiennent vos cartes, vos étiquettes et les médias associés.",
        },
        {
          title: "Compatible avec les agents IA",
          description:
            "Connectez-vous via MCP ou l'API Agent pour que des agents IA vous aident à créer, améliorer et organiser vos cartes.",
        },
        {
          title: "Gratuit et auto-hébergeable",
          description:
            "Utilisez gratuitement l'application hébergée, consultez le code open source ou exécutez-la sur votre propre infrastructure.",
        },
      ],
    },
    {
      type: "review_cta",
      titleLines: [
        "Laissez Nibomo planifier vos révisions.",
        "Concentrez-vous sur l’apprentissage.",
      ],
      description: "Transformez ce que vous apprenez en cartes, révisez au bon moment et retenez davantage.",
    },
  ],
  body: "",
} as const;
