---
title: Architecture
description: Vue d'ensemble du système, domaines publics, clients pris en charge et flux de données offline-first actuel.
---

## Vue d'ensemble du système

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principes

1. Des domaines publics séparés pour `app`, `api` et `auth`
2. Postgres est la source de vérité
3. Le client iOS est offline-first, avec SQLite local et synchronisation
4. L'application web, l'application iOS et la surface d'agent externe partagent le même modèle d'espace de travail
5. Les agents externes partent de `GET https://api.nibomo.com/v1/`

## Clients pris en charge

- Application web sur `app.nibomo.com`
- Application iOS dans le dépôt principal, avec stockage SQLite local
- Application Android sur Google Play
- Clients agents externes via la découverte, l'amorçage OTP et `Authorization: ApiKey`

## Modèle de données

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Flux de données

### Web

1. Le navigateur se connecte via `auth.<domain>`.
2. L'application web charge les données de l'espace de travail depuis `api.<domain>`.
3. Les requêtes du chat IA passent par `/chat/local-turn`.
4. Les envois de révision mettent à jour l'état du planificateur à l'écriture.

### iOS

1. L'application iOS écrit d'abord localement dans SQLite.
2. Les modifications locales sont mises en file dans une boîte d'envoi.
3. La synchronisation envoie les modifications via `/v1/workspaces/{workspaceId}/sync/push`.
4. La synchronisation récupère les mises à jour distantes via `/v1/workspaces/{workspaceId}/sync/pull`.
5. La base de données locale applique les modifications et avance le curseur de synchronisation.

### Agents externes

1. Les agents commencent par `GET /v1/`.
2. L'amorçage OTP s'exécute sur `auth.<domain>`.
3. L'agent reçoit une clé API de longue durée.
4. L'agent charge `/v1/agent/me`, liste les espaces de travail, en sélectionne un si nécessaire, puis utilise `/v1/agent/sql/query` et `/v1/agent/sql/execute`.

## Planification

Nibomo utilise FSRS comme planificateur de révisions.

Notes d'implémentation :

- le backend et iOS maintiennent des implémentations FSRS miroir
- l'application web reflète le contrat de données de planification, mais n'embarque pas une troisième copie du planificateur
- les réglages du planificateur au niveau de l'espace de travail incluent la rétention souhaitée, les paliers d'apprentissage, les paliers de réapprentissage, l'intervalle maximal et le fuzz
- l'horodatage réel de la révision provient de `reviewedAtClient`

Pour le contrat détaillé, voir [la logique de planification FSRS dans le dépôt principal](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Authentification

- OTP par e-mail via Cognito
- Cookies de session navigateur sur domaine partagé pour l'application web hébergée
- Amorçage OTP des agents sur `auth.<domain>`, avec production d'une ApiKey de longue durée
- `AUTH_MODE=none` pour le développement local
- `AUTH_MODE=cognito` pour une authentification proche de la production

## Forme du déploiement

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda du service d'authentification
- Postgres sur AWS RDS

Le domaine apex peut rester sur un site marketing séparé. S'il est libre pendant l'amorçage, l'infrastructure peut temporairement le rediriger vers `app.<domain>`.
