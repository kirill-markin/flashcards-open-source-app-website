import type { PageContent } from "@/lib/content/types";

export const PRICING_PAGE_CONTENT: PageContent = {
  title: "Gratuit à l'usage. Gratuit à auto-héberger.",
  description:
    "Utilisez gratuitement l'application hébergée, avec l'IA et la synchronisation incluses pendant la bêta, ou auto-hébergez la pile open source sur votre propre infrastructure AWS.",
  slug: "pricing",
  sections: [
    {
      type: "pricing_tiers",
      title: "Gratuit à l'usage. Gratuit à auto-héberger.",
      intro:
        "Utilisez gratuitement l'application hébergée, sans carte bancaire, ou exécutez la pile open source sur votre propre infrastructure AWS.",
      tiers: [
        {
          type: "auth_tier",
          name: "Hébergé",
          price: "Gratuit",
          highlighted: true,
          bullets: [
            "Fonctions d'IA incluses pendant la bêta",
            "Synchronisation incluse entre le web, iOS et Android",
            "Aucun quota lié à une formule sur les cartes, les fichiers ou le stockage total pendant la bêta ; les limites techniques habituelles par fichier et par opération s'appliquent",
            "Importez et exportez cartes, étiquettes et médias entre installations hébergées et auto-hébergées",
            "Connexion sans mot de passe avec un code à usage unique envoyé par e-mail",
            "La création et la révision de cartes resteront gratuites ; un usage plus intensif de l'IA pourra plus tard demander votre propre clé d'API fournisseur ou une option payante",
          ],
          cta: {
            label: "Utiliser l'application hébergée gratuitement",
            href: "https://app.flashcards-open-source-app.com",
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
