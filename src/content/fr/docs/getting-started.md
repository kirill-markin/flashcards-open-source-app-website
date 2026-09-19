---
title: Premiers pas
description: Commencez avec l'application web hébergée, connectez un agent via l'URL de découverte, ou exécutez vous-même la pile en local.
---

## Application web hébergée

Le moyen le plus rapide de commencer est l'application web hébergée :

1. Ouvrez [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. Connectez-vous avec votre adresse e-mail via un code OTP, sans mot de passe
3. Créez des cartes, révisez les éléments dus et utilisez le chat IA avec les données de l'espace de travail et des pièces jointes

Aucune installation ni configuration de serveur n'est nécessaire pour la voie hébergée.

## Configuration d'un agent

Si vous voulez connecter directement Claude Code, Codex ou OpenClaw, partez de :

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Cette réponse de découverte guide l'agent à travers la connexion par OTP envoyé par e-mail, la création d'une clé API de longue durée, le chargement du compte, l'initialisation de l'espace de travail et la surface SQL publiée.

La même charge utile est aussi disponible sur `GET /v1/agent`, mais `/v1/` est le point d'entrée public canonique.

## Auto-hébergement

Si vous préférez exécuter votre propre instance, consultez le [guide d'auto-hébergement](/docs/self-hosting/).

## Ce que vous obtenez aujourd'hui

- Application web hébergée pour les cartes, la révision et le chat IA
- Client iOS dans le dépôt principal, avec SQLite local et synchronisation offline-first
- Services backend et d'authentification partagés sur des domaines `api` et `auth` distincts
- Intégration d'agents externes via la découverte, l'OTP et l'authentification ApiKey
- Chemin de déploiement open source sur AWS avec Postgres comme source de vérité

## Direction du dépôt

Le projet est offline-first.

Aujourd'hui, le dépôt contient l'application web, l'application iOS, le service d'authentification, l'API backend, le flux d'agent externe et l'application Android publiée sur Google Play.
