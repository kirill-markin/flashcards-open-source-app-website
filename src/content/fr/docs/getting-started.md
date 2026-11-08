---
title: Premiers pas
description: Commencez avec l'application iPhone, iPad, Mac ou Android, l'application web, un agent IA ou votre propre serveur.
---

Il existe plusieurs façons de commencer, de la plus populaire à la moins répandue :

- **Application iPhone, iPad et Mac** : [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Application Android** : [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Application web hébergée** : [app.nibomo.com](https://app.nibomo.com)
- **Agents IA** : le [connecteur MCP](/docs/mcp-connector/) ou l'API à l'adresse `https://api.nibomo.com/v1/`
- **Auto-hébergement** : le [guide d'auto-hébergement](/docs/self-hosting/)

## Applications mobiles et de bureau

Installez l'application native pour votre appareil :

- iPhone, iPad et Mac : [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android : [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Les applications conservent vos cartes sur l'appareil : vous pouvez réviser hors ligne, et la synchronisation se fait dès que vous êtes de nouveau en ligne. Vous pouvez commencer en tant qu'invité et vous connecter plus tard.

### Widgets de l'écran d'accueil

L'application Nibomo ajoute un widget Réviser sur iPhone, iPad, Mac et Android. Il existe en trois tailles :

- **Petit** : le nombre de cartes à réviser et votre série d'étude
- **Moyen** : le nombre de cartes à réviser et la question de votre prochaine carte
- **Grand** : le nombre de cartes à réviser, votre prochaine question et votre série

Quand rien n'est à réviser, le widget affiche « Vous êtes à jour » et le moment où la prochaine carte sera à réviser. Il n'affiche jamais de réponse. Touchez le widget pour ouvrir Réviser ; un widget Moyen ou Grand ouvre Réviser sur la carte qu'il affiche. Les widgets sont gratuits pour tous, y compris les invités.

Huit autres widgets suivent vos progrès : « Activité », « Année », « Aujourd'hui », « Révisions », « Séries », « Calendrier », « À venir » et « Tableau de bord ». Sur iPhone, vous pouvez aussi placer le widget « Cartes à réviser » sur l'écran verrouillé, et le [guide des widgets](/blog/flashcard-widget/) les présente tous.

Pour en ajouter un sur iPhone, iPad ou Mac, ouvrez la galerie de widgets, choisissez Nibomo, puis sélectionnez une taille. Sur Android, ajoutez le widget Nibomo depuis la liste des widgets, puis redimensionnez-le ; la mise en page s'adapte à la taille.

## Application web hébergée

Le moyen le plus rapide de commencer est l'application web hébergée :

1. Ouvrez [app.nibomo.com](https://app.nibomo.com)
2. Connectez-vous avec votre adresse e-mail via un code OTP, sans mot de passe
3. Créez des cartes, révisez les éléments dus et utilisez le chat IA avec les données de l'espace de travail et des pièces jointes

Aucune installation ni configuration de serveur n'est nécessaire pour la voie hébergée.

## Configuration d'un agent

Les clients MCP comme Claude, ChatGPT et Cursor peuvent se connecter en suivant le [guide du connecteur MCP](/docs/mcp-connector/).

Si vous voulez connecter directement Claude Code, Codex ou OpenClaw, partez de :

```text
GET https://api.nibomo.com/v1/
```

Cette réponse de découverte guide l'agent à travers la connexion par OTP envoyé par e-mail, la création d'une clé API de longue durée, le chargement du compte, l'initialisation de l'espace de travail et la surface SQL publiée.

La même charge utile est aussi disponible sur `GET /v1/agent`, mais `/v1/` est le point d'entrée public canonique.

## Auto-hébergement

Si vous préférez exécuter votre propre instance, consultez le [guide d'auto-hébergement](/docs/self-hosting/).

## Ce que vous obtenez aujourd'hui

- Application web hébergée pour les cartes, la révision et le chat IA
- Applications natives iPhone, iPad, Mac et Android, avec stockage SQLite local et synchronisation offline-first
- Services backend et d'authentification partagés sur des domaines `api` et `auth` distincts
- Intégration d'agents externes via la découverte, l'OTP et l'authentification ApiKey
- Chemin de déploiement open source sur AWS avec Postgres comme source de vérité

## Direction du dépôt

Le projet est offline-first.

Aujourd'hui, le dépôt contient l'application web, l'application iOS, le service d'authentification, l'API backend, le flux d'agent externe et l'application Android publiée sur Google Play.
