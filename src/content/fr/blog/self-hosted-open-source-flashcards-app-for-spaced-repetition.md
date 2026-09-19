---
title: "Application de cartes mémoire open source et auto-hébergée pour la répétition espacée"
description: "Hébergez vous-même la pile open source de Nibomo en local pour le développement, ou déployez son infrastructure AWS CDK documentée pour une application de répétition espacée en production."
date: "2026-03-08"
updated: "2026-07-30"
image: "/home/app-screens-showcase-fr.png"
keywords:
  - "application de cartes mémoire open source"
  - "application de cartes mémoire auto-hébergée"
  - "application de répétition espacée"
  - "alternative à Anki"
  - "alternative à Quizlet"
  - "flashcards IA"
---

Oui, Nibomo peut être auto-hébergé. Tout le code de l'application et de l'infrastructure est open source sous licence MIT. Vous pouvez exécuter les services en local pour le développement, ou déployer sur AWS la pile de production documentée du dépôt. Si vous ne voulez pas gérer d'infrastructure, l'[application hébergée](https://app.flashcards-open-source-app.com/) reste disponible.

![Écrans mobiles de Nibomo pour la révision, la progression, le chat IA et les cartes](/home/app-screens-showcase-fr.png)

## Ce qui peut être auto-hébergé

Le dépôt contient les services et l'infrastructure du système Nibomo principal :

- l'application web et l'application d'administration
- l'API backend et le service d'authentification sans mot de passe
- le schéma PostgreSQL, les migrations, la synchronisation et la planification des révisions basée sur FSRS
- le serveur MCP et l'API d'agent destinée aux machines
- la pile AWS CDK pour le réseau, la base de données, l'authentification, les API, l'hébergement web statique, les secrets, les sauvegardes, la surveillance et la CI/CD

Le dépôt inclut aussi des clients natifs iOS et Android. Ces applications se compilent séparément ; déployer la pile AWS ne publie pas pour vous vos propres versions sur l'App Store ou Google Play.

Il existe deux façons prises en charge d'exécuter la pile côté serveur :

1. **Développement local :** Docker Compose exécute PostgreSQL et la tâche de migration. Les scripts du dépôt lancent sur la machine hôte les serveurs de développement pour l'authentification, le backend, le web et l'administration.
2. **Production sur AWS :** la pile CDK incluse déploie l'architecture AWS documentée et raccorde ses domaines publics via Cloudflare.

Docker Compose n'est pas un déploiement de production en une commande. La voie de production est spécifique à AWS, et le projet ne prétend pas offrir une infrastructure indépendante du fournisseur.

## Ce que le dépôt contient aujourd'hui

C'est plus qu'un simple éditeur de cartes autonome. Le dépôt actuel contient :

- un client web React et un client d'administration
- des clients natifs iOS en SwiftUI et Android en Jetpack Compose
- un stockage local offline-first et la synchronisation pour les clients utilisés par des humains
- des cartes recto-verso, des tags, des médias associés et la révision FSRS
- des codes OTP par e-mail sans mot de passe, via Amazon Cognito et le service d'authentification
- un chat IA appuyé sur un worker asynchrone déployé et sur des identifiants de modèle fournis par l'opérateur
- un point de terminaison MCP pour les clients IA compatibles
- une API d'agent pour les outils en ligne de commande et d'autres flux de travail automatisés

La [documentation d'architecture](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md) est la meilleure source pour connaître les frontières actuelles entre services. Le [guide de l'API](/docs/api/) public explique le point d'entrée de l'API d'agent hébergée.

## Application hébergée ou auto-hébergement

| Domaine | Application hébergée | Déploiement auto-hébergé |
| --- | --- | --- |
| Configuration initiale | Ouvrir l'application et se connecter | Configurer les comptes, les secrets et les domaines, puis déployer la pile AWS |
| Infrastructure | Gérée par le projet Nibomo | Gérée dans vos comptes AWS et Cloudflare |
| Base de données et sauvegardes | Gérées pour vous | RDS, la politique de sauvegarde, les migrations et la restauration sont à votre charge |
| Authentification et e-mail | Gérés pour vous | Cognito, plus vos identifiants d'envoi d'e-mail et votre DNS |
| IA | Utilise la configuration du service hébergé | Utilise le worker déployé et vos identifiants de modèle ; l'accès invité a un quota distinct |
| Surveillance | Gérée pour vous | CloudWatch/SNS et votre configuration Sentry |
| Mises à jour | Livrées par le service hébergé | Vous récupérez, validez, déployez et surveillez les mises à jour |
| Coût | Les conditions de l'offre hébergée s'appliquent | Vous payez directement AWS et les autres fournisseurs |

L'auto-hébergement vous donne le contrôle du déploiement et de la base de données. Il vous rend aussi responsable des mises à jour de sécurité, des secrets, de la disponibilité, des sauvegardes, de l'envoi d'e-mails, de la surveillance et des coûts cloud.

## Prérequis et démarrage rapide en local

Le développement local demande aujourd'hui Git, Bash, GNU Make, Docker avec Docker Compose, Node.js 24 et npm. Le fichier Compose fourni exécute PostgreSQL 18.4 et applique les migrations de la base de données.

Depuis la racine du dépôt :

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

Pour le démarrage purement local le plus court, lancez le backend avec le rôle créé par la migration et activez explicitement l'authentification locale non sécurisée :

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Lancez ensuite les clients dans des terminaux distincts :

```bash
make web-dev
make admin-dev
```

Cela ne démarre volontairement pas le service d'authentification Cognito. Le [Guide d'auto-hébergement](/docs/self-hosting/) donne les URL de base de données distinctes et les étapes de chargement des variables d'environnement pour un flux Cognito complet avec `make auth-dev`. L'application web tourne sur `http://localhost:3000`, l'application d'administration sur `http://localhost:3001`, le backend sur `http://localhost:8080/v1`, et l'authentification Cognito, une fois configurée, sur `http://localhost:8081`.

Ce démarrage rapide couvre le développement du backend principal, du web et de l'administration. Il ne rend pas Chat V2 disponible : le transport `AUTH_MODE=none` n'est pas accepté par ces routes, et les commandes locales ne démarrent pas le worker de chat asynchrone.

Pour la production, utilisez le flux de premier déploiement du dépôt plutôt que Docker Compose :

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

L'installation explicite du paquet auth est aujourd'hui nécessaire depuis un checkout propre, car le script de déploiement empaquette ce module mais ne l'installe pas. Le script crée et met à jour ensuite de vraies ressources cloud. Lisez le [guide de déploiement du backend et du web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md) et le [guide de déploiement AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md) avant de le lancer.

## La portabilité des données est utile, mais volontairement limitée

L'import et l'export de packs Nibomo couvrent les cartes, leurs tags et les médias associés. Ils ne transfèrent **pas** l'historique de révision, l'état du planificateur FSRS, les réglages de l'espace de travail, la structure complète des paquets ni les données de compte.

Cette distinction compte si vous passez du service hébergé à votre propre déploiement, ou l'inverse. Le pack portable sert à transférer du contenu ; ce n'est pas une migration complète de la base de données ni du compte. Pour une sauvegarde opérationnelle complète, un opérateur auto-hébergé doit aussi gérer la base de données PostgreSQL et le stockage des médias créés par la pile AWS.

## IA et identifiants de services externes

Le code source ne contient ni comptes cloud, ni crédits de modèle, ni identifiants de production. Un opérateur auto-hébergé fournit la configuration correspondante :

- des identifiants AWS et un compte AWS pour la pile CDK
- un domaine et des identifiants Cloudflare pour la configuration DNS documentée
- des identifiants Resend pour l'envoi d'e-mails
- une configuration Sentry pour la surveillance backend obligatoire
- des identifiants OpenAI et Langfuse optionnels pour l'IA et le tracing
- une configuration GitHub pour le workflow de déploiement inclus

L'IA est optionnelle dans le déploiement AWS. La pile CDK déploie le worker de chat asynchrone, et les identifiants de modèle activent les requêtes IA authentifiées prises en charge. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` contrôle séparément l'usage de l'IA par les invités ; ce n'est pas un interrupteur global pour l'IA des utilisateurs connectés ou authentifiés par jeton bearer. Si vous connectez MCP ou un autre client IA externe, les données de cartes incluses dans une requête peuvent être traitées par ce fournisseur externe selon ses propres conditions ; auto-héberger la base de données ne garde pas ces requêtes à l'intérieur de votre infrastructure.

## Limites honnêtes de la bêta et de l'exploitation

Nibomo reste un produit à un stade précoce. Le dépôt est actif, les migrations et la configuration de déploiement peuvent changer, et l'auto-hébergement suppose que vous savez faire tourner une application AWS.

La pile CDK inclut les sauvegardes, les alarmes, les secrets et l'automatisation du déploiement, mais ces composants ont toujours besoin d'un opérateur. Attendez-vous à devoir :

- relire les changements d'infrastructure avant de les déployer
- surveiller les mises en production et les vérifications des points de terminaison publics
- confirmer les abonnements aux alertes et le DNS du domaine d'e-mail
- protéger et faire tourner les identifiants
- tester les restaurations et prévoir les coûts AWS
- compiler et distribuer séparément les applications mobiles natives si vous voulez vos propres versions

Si ce travail d'exploitation ne vous apporte rien, l'application hébergée est la voie la plus simple.

## Une brève comparaison avec Anki et Quizlet

Anki est un choix open source mature, avec un grand écosystème et de solides flux de travail sur ordinateur. Quizlet est un service grand public géré, avec une expérience d'étude qui demande peu de configuration. L'un comme l'autre peut être le bon choix, selon que vous préférez un outil local bien établi ou une plateforme entièrement gérée.

Nibomo prend un autre chemin : un dépôt ouvert pour le web, le mobile, l'API et l'infrastructure, construit autour de FSRS, de la synchronisation, des flux de travail IA, de MCP et d'une option d'auto-hébergement sur AWS. Il est plus jeune qu'Anki et demande nettement plus de travail d'administration que Quizlet une fois auto-hébergé. La raison de le choisir, c'est que cette combinaison correspond à vos besoins, pas que chaque personne qui apprend devrait faire tourner une pile cloud.

## Essayez l'application hébergée ou faites tourner votre propre pile

- [Ouvrir l'application hébergée](https://app.flashcards-open-source-app.com/)
- [Lire le Guide d'auto-hébergement](/docs/self-hosting/)
- [Voir le code source sur GitHub](https://github.com/kirill-markin/flashcards-open-source-app)

Utilisez la version hébergée quand vous voulez étudier sans maintenir d'infrastructure. Utilisez la voie auto-hébergée quand le contrôle du déploiement vaut le travail d'AWS, de DNS, d'e-mail, de surveillance et de mises à jour.
