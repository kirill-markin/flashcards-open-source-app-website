import type { PageContent } from "@/lib/content/types";

export const FEATURES_PAGE_CONTENT: PageContent = {
  title: "Fonctionnalités de Nibomo",
  description:
    "Découvrez des cartes mémoire gratuites et open source avec répétition espacée FSRS, création assistée par IA, étude hors ligne et synchronisation, exports portables et auto-hébergement.",
  slug: "features",
  sections: [
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
            "Continuez à réviser sur votre mobile sans connexion internet. Les modifications se synchronisent automatiquement pour reprendre sur le web, iOS ou Android.",
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
  ],
  body: "",
} as const;
