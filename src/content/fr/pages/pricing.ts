import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratuit pour commencer. Premium pour plus d'IA.",
  description:
    "Commencez gratuitement sur l'application hébergée, passez à Premium pour 6,99 USD par mois et profitez de plus de messages de chat IA, ou auto-hébergez la pile open source sur votre propre infrastructure AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratuit pour commencer. Premium pour plus d'IA.",
      intro:
        "Commencez gratuitement sur l'application hébergée, sans carte bancaire, ajoutez Premium pour plus de messages de chat IA, ou auto-hébergez gratuitement la pile open source sur votre propre infrastructure AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Gratuit",
          price: "Gratuit",
          highlighted: true,
          bullets: [
            "50 messages de chat IA par mois",
            "Utilisez votre propre clé API OpenAI ; son utilisation n'est pas décomptée de la limite mensuelle",
            "Synchronisation incluse entre le web, iOS et Android",
            "Aucun quota lié à une formule sur les cartes, les fichiers ou le stockage total ; les limites techniques habituelles par fichier et par opération s'appliquent",
            "Importez et exportez cartes, étiquettes et médias entre installations hébergées et auto-hébergées",
            "Connexion sans mot de passe avec un code à usage unique envoyé par e-mail",
          ],
          cta: {
            label: "Utiliser l'application hébergée gratuitement",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "auth_tier",
          name: "Premium",
          price: "6,99 $/mois",
          highlighted: false,
          bullets: [
            "Essai gratuit de 7 jours pour les nouveaux abonnés éligibles ; moyen de paiement requis",
            "1000 messages de chat IA par mois",
            "Couleurs d'accentuation personnalisées",
            "Tout ce que comprend la formule Gratuit",
            "Un seul abonnement pour votre compte sur le web, iOS et Android",
            "Prix en USD, taxes comprises ; la page de paiement peut afficher un prix en devise locale",
            "Renouvellement mensuel ; résiliez à tout moment et conservez l'accès jusqu'à la fin de la période",
          ],
          cta: {
            label: "Commencer l'essai gratuit de 7 jours",
            href: "https://app.nibomo.com",
          },
        },
        {
          type: "link_tier",
          name: "Auto-hébergé",
          price: "Gratuit",
          highlighted: false,
          bullets: [
            "Application et infrastructure AWS CDK open source",
            "Chemin de déploiement AWS complet et environnement de développement local Docker/Postgres",
            "Vous fournissez et maintenez l'infrastructure, l'e-mail, la supervision et les identifiants d'IA",
            "Vous payez les coûts d'infrastructure et des fournisseurs tiers",
            "Importez et exportez cartes, étiquettes et médias entre installations hébergées et auto-hébergées",
          ],
          cta: {
            label: "Auto-héberger depuis GitHub",
            href: "https://github.com/kirill-markin/flashcards-open-source-app",
          },
        },
      ],
    },
  ],
  body: "",
} as const;
