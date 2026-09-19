---
title: Guide d'auto-hébergement
description: Exécutez Nibomo en local avec PostgreSQL, l'authentification, le backend, le web et l'admin, ou déployez la pile de production AWS CDK documentée.
---

Nibomo prend en charge deux voies distinctes : un environnement de développement local et un déploiement de production sur AWS. Docker Compose exécute PostgreSQL et les migrations pour le développement local ; ce n'est pas la méthode de déploiement en production.

## Prérequis pour le développement local

- Git
- Bash
- GNU Make
- Docker avec Docker Compose
- Node.js 24
- npm

Le fichier Docker Compose fourni exécute actuellement PostgreSQL 18.4. Vous n'avez pas besoin d'une installation locale de PostgreSQL séparée.

## Démarrage rapide en local

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

`make db-up` démarre PostgreSQL et exécute `scripts/deploy/migrate.sh` dans le conteneur de migration. Avec les mots de passe par défaut copiés depuis `.env.example`, la migration met en place ces connexions d'exécution locales :

- backend : `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth : `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting : `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Si vous changez `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` ou `REPORTING_DB_PASSWORD` dans `.env`, utilisez le même mot de passe modifié dans l'URL de connexion correspondante.

### Démarrage rapide, local uniquement

La cible Make du backend ne charge pas le `.env` racine. Passez explicitement les réglages locaux dont elle a besoin :

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Lancez les clients dans des terminaux séparés :

```bash
make web-dev
make admin-dev
```

Cette voie ne démarre délibérément pas `make auth-dev`. `AUTH_MODE=none` est un mode explicitement non sécurisé, réservé à localhost ; ne l'utilisez jamais dans un environnement déployé.
Elle couvre le développement du backend principal, de la découverte publique de l'API agents, du web et de l'admin, mais elle ne rend pas Chat V2 disponible.

### Flux Cognito local complet

La cible d'authentification charge le `.env` racine, contrairement à la cible du backend. Remplacez d'abord l'ancien `DATABASE_URL` du `.env` copié par l'URL du rôle auth, puis ajoutez vos vraies valeurs Cognito :

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Démarrez l'authentification :

```bash
make auth-dev
```

Dans le terminal du backend, chargez explicitement `.env`, puis remplacez son URL de base de données auth par l'URL du rôle backend pour ce processus :

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Lancez `make web-dev` et `make admin-dev` dans leurs propres terminaux. Les deux cibles chargent le `.env` racine.

Les services utilisent ces adresses locales :

| Service | Adresse |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, une fois configurée | `http://localhost:8081` |
| API backend | `http://localhost:8080/v1` |
| Application web | `http://localhost:3000` |
| Application admin | `http://localhost:3001` |

Arrêtez PostgreSQL et le conteneur de migration avec :

```bash
make db-down
```

## Configuration locale

Partez de `.env.example` ; il documente les variables disponibles et les valeurs réservées au local. Remplacez son ancien `DATABASE_URL` avant de lancer l'authentification, comme montré ci-dessus.

Les principaux réglages locaux sont :

- `MIGRATION_DATABASE_URL` pour les migrations de schéma dans Docker
- `DATABASE_URL` défini sur le rôle `auth_app` dans le `.env` racine pour `make auth-dev`
- `DATABASE_URL` passé avec le rôle `backend_app` pour `make backend-dev`
- `AUTH_MODE` et `ALLOW_INSECURE_LOCAL_AUTH` pour l'authentification du backend
- `BACKEND_ALLOWED_ORIGINS` pour les origines locales du web et de l'admin
- `ALLOWED_REDIRECT_URIS` et `COOKIE_DOMAIN` pour l'authentification navigateur
- les valeurs Cognito et de chiffrement de session quand vous testez de vrais OTP

L'API agents fait partie du backend. Son document de découverte public local est disponible sur `http://localhost:8080/v1/agent` après le démarrage du backend. Les opérations agents protégées exigent une authentification `ApiKey` et ne sont pas disponibles dans la voie `AUTH_MODE=none`.

### Portée de l'IA selon la voie

Les commandes locales ci-dessus ne démarrent pas le worker de chat asynchrone. La voie rapide utilise aussi `AUTH_MODE=none`, que Chat V2 rejette ; ajouter une clé OpenAI ou un quota invité ne rend pas cette voie capable d'IA. Le flux Cognito local complet fournit un transport d'authentification pris en charge, mais il ne démarre toujours pas le worker.

Le déploiement AWS CDK crée la Lambda du worker et configure le backend pour l'invoquer. Les identifiants de fournisseur comme `OPENAI_API_KEY` activent les appels de modèle pour les requêtes authentifiées prises en charge. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` active et limite séparément l'IA pour les invités ; il ne contrôle pas l'IA des utilisateurs connectés ou authentifiés par jeton Bearer. Les réglages Langfuse sont une configuration de traçage facultative.

## Clients natifs

Le même dépôt contient les clients iOS et Android, mais les commandes locales web et serveur ne les compilent ni ne les distribuent.

Le projet iOS lit les hôtes locaux d'API et d'authentification depuis :

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Créez-le à partir de l'exemple si nécessaire :

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Consultez le [README iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) et le [README Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) du dépôt pour leurs flux de compilation et de test distincts.

## La production utilise AWS CDK

Le déploiement de production pris en charge est la pile AWS CDK incluse. Elle repose sur AWS plutôt que d'être neutre vis-à-vis du fournisseur, et comprend :

- un VPC et des sous-réseaux privés
- PostgreSQL 18 sur Amazon RDS
- l'OTP par e-mail sans mot de passe d'Amazon Cognito
- API Gateway et Lambda pour les services backend, d'authentification et MCP
- une Lambda worker de chat asynchrone et une Lambda d'envoi d'e-mails personnalisé pour Cognito
- S3 et CloudFront pour les applications web et admin
- Secrets Manager pour les identifiants de base de données, de session, d'e-mail, de supervision et, en option, d'IA
- des alarmes CloudWatch, des notifications SNS et un plan de sauvegarde RDS
- un rôle de déploiement OIDC pour GitHub Actions
- des scripts de configuration Cloudflare pour les domaines publics

Le déploiement expose `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` et `mcp.<domain>`. Il peut aussi créer une redirection apex quand le domaine racine n'est pas utilisé par ailleurs.

Exécutez le script d'aide de production depuis une machine d'opérateur disposant de :

- Node.js 24 et npm
- Bash et GNU Make
- Docker en cours d'exécution
- la CLI AWS authentifiée sur le compte de déploiement
- la CLI GitHub authentifiée sur le dépôt cible
- `curl`, `jq` et Python 3

Avant de déployer, configurez les valeurs d'opérateur dans le `.env` racine. L'ensemble requis comprend la région AWS, le domaine, l'adresse e-mail d'alerte, le dépôt GitHub, les identifiants Cloudflare, les identifiants Resend et la configuration Sentry du backend. Les identifiants OpenAI et Langfuse sont facultatifs.

La commande de premier déploiement recommandée, depuis la racine du dépôt, est :

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

L'installation explicite du paquet auth est actuellement nécessaire depuis un checkout propre, car le script de déploiement empaquette ce module mais ne l'installe pas. Le script crée ou modifie de vraies ressources AWS, Cloudflare et GitHub. Lisez la documentation de déploiement du dépôt et évaluez les coûts cloud avant de le lancer. Il amorce CDK, déploie l'infrastructure, exécute les migrations, envoie les ressources web et admin, configure les enregistrements DNS publics `app`, `admin`, `api`, `auth` et `mcp` sauf si cette étape est ignorée, et complète la configuration GitHub Actions manquante.

Après le déploiement :

1. Confirmez l'abonnement SNS envoyé à la boîte `ALERT_EMAIL`.
2. Configurez et vérifiez les enregistrements DNS du domaine d'envoi Resend, qui sont distincts :

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` exécute par défaut `scripts/cloudflare/setup-dns.sh` pour les domaines publics de l'application. Il n'exécute pas `setup-resend-domain.sh` ; ce dernier crée les enregistrements d'expéditeur d'e-mail pour `mail.<domain>` et vérifie ce domaine auprès de Resend. Si vous déployez avec `--skip-dns`, configurez les enregistrements publics séparément, comme documenté dans le guide AWS CDK.

## Portabilité des données

L'import et l'export de packs d'espace de travail ne transfèrent que les cartes, leurs tags et les médias associés. Ils ne transfèrent ni l'historique de révision, ni l'état du planificateur FSRS, ni les réglages de l'espace de travail, ni la structure complète des paquets, ni les données de compte.

Considérez les packs comme un transfert de contenu, pas comme une migration complète de l'hébergé vers l'auto-hébergé ni comme une sauvegarde de reprise après sinistre. Les opérateurs sont responsables de la sauvegarde et de la restauration de la base PostgreSQL déployée et du stockage des médias.

## Responsabilités de l'opérateur

L'auto-hébergement signifie que vous fournissez et maintenez :

- l'infrastructure AWS et ses coûts
- la configuration DNS et de domaine Cloudflare
- les identifiants de distribution d'e-mails Resend et les enregistrements de domaine
- la configuration de supervision Sentry requise
- les identifiants facultatifs du fournisseur d'IA et de Langfuse
- les secrets, les mises à niveau, les migrations, les alertes, les sauvegardes et les tests de restauration
- les builds mobiles natifs et leur distribution si vous voulez vos propres versions iOS ou Android

La pile inclut de l'automatisation pour beaucoup de ces systèmes, mais elle nécessite tout de même un opérateur. Docker Compose ne remplace pas cette architecture de production.

## Documentation de déploiement du dépôt

- [README du dépôt](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guide de déploiement backend et web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Guide de déploiement AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infrastructure AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
