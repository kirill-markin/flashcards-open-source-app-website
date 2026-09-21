---
title: Référence de l'API
description: API d'agent externe pour la découverte, l'amorçage OTP, la configuration de l'espace de travail et les surfaces SQL de lecture et d'écriture publiées.
---

## Vue d'ensemble

Cette page documente le contrat actuel des agents IA externes pour Nibomo.

Si votre client parle MCP, le [connecteur MCP](/docs/mcp-connector/) est le moyen
le plus simple de se connecter et il encapsule cette même surface de données. Cette
page documente le contrat HTTP de découverte, SQL, guides et révision utilisé par les agents en ligne de commande.

Partez du point d'entrée de découverte canonique :

```text
GET https://api.nibomo.com/v1/
```

La même charge utile de découverte est aussi disponible sur `GET /v1/agent`, mais `/v1/` est le point d'entrée public principal.

La réponse de découverte indique à l'agent comment :

- démarrer la connexion par OTP envoyé par e-mail
- échanger l'OTP contre une clé API de longue durée
- charger le contexte du compte
- créer ou sélectionner un espace de travail
- continuer via la surface SQL publiée
- récupérer les guides de référence et réviser les cartes une par une

## Découverte à l'exécution et code source

OpenAPI n'est pas disponible. Les quatre anciennes URL de spécification ci-dessous renvoient désormais le même avis de découverte JSON, avec `"openapiAvailable": false` au lieu d'un schéma :

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Utilisez `GET https://api.nibomo.com/v1/` pour la découverte à l'exécution actuelle. Suivez le `docs.discoveryUrl` renvoyé pour les routes d'exécution et `docs.source.agentRoutesUrl` pour les détails d'implémentation.

## Amorçage de l'authentification

L'amorçage OTP s'exécute sur le service d'authentification :

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Le déroulement est le suivant :

1. Appelez `GET /v1/`.
2. Envoyez l'adresse e-mail de l'utilisateur à `send-code`.
3. Lisez `otpSessionToken` dans la réponse.
4. Demandez à l'utilisateur le dernier code à 8 chiffres reçu par e-mail.
5. Appelez `verify-code` avec `code`, `otpSessionToken` et `label`.
6. Conservez la clé API renvoyée en dehors de la mémoire du chat.

Variable d'environnement recommandée :

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Les requêtes authentifiées utilisent :

```text
Authorization: ApiKey <key>
```

Exemple de séquence d'amorçage :

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Surface d'agent après connexion

Après la vérification, la surface d'agent actuelle est la suivante :

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (lecture seule)
- `POST /v1/agent/sql/execute` (écriture)
- `GET /v1/agent/guide/{topic}` (lecture seule)
- `POST /v1/agent/reviews/next` (lecture seule)
- `POST /v1/agent/reviews/reveal` (lecture seule)
- `POST /v1/agent/reviews/submit` (écriture)

Un amorçage typique ressemble à ceci :

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Si nécessaire, `POST /v1/agent/workspaces` avec `{"name":"Personal"}`
4. Si nécessaire, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Utilisez `POST /v1/agent/sql/query` pour les lectures et `POST /v1/agent/sql/execute` pour les écritures

La sélection de l'espace de travail est explicite pour chaque connexion par clé API. Les agents doivent suivre le texte `instructions` renvoyé et `docs.discoveryUrl` pour les routes d'exécution, ainsi que `docs.source.agentRoutesUrl` pour les détails d'implémentation, au lieu de deviner l'étape suivante.

Les routes SQL et de révision acceptent aussi un `workspaceId` facultatif dans le corps JSON. Il cible cet espace de travail pour un seul appel, sans changer la sélection ; omettez-le pour utiliser l'espace de travail sélectionné. Sans sélection ni `workspaceId`, elles répondent `409 WORKSPACE_SELECTION_REQUIRED`.

## Surface SQL

`POST /v1/agent/sql/query` est la surface strictement en lecture seule (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) et `POST /v1/agent/sql/execute` est la surface d'écriture (`INSERT`, `UPDATE`, `DELETE`) ; un même appel doit contenir soit uniquement des lectures, soit uniquement des écritures.

Elle est volontairement limitée et ne correspond pas à PostgreSQL complet. Cette
documentation ne couvre que le dialecte pris en charge, pas une référence de compatibilité PostgreSQL.

Aucun chemin de lecture ne répare des données, ne recalcule la planification ni ne
modifie l'état d'une carte. Utilisez `POST /v1/agent/sql/execute` pour toute écriture
de carte et de paquet. SQL ne peut pas écrire `review_events` ni l'état de planification
FSRS ; enregistrez les révisions via `POST /v1/agent/reviews/submit`.

Familles d'instructions actuelles :

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Les ressources logiques publiées comprennent actuellement :

- `workspace`
- `cards`
- `decks`
- `review_events`

Remarques :

- `LIMIT` vaut `100` par défaut et est plafonné à `100`
- utilisez `ORDER BY` quand vous avez besoin d'une pagination stable
- utilisez `SHOW TABLES` ou `DESCRIBE cards` pour découvrir le schéma
- chaque appel SQL est limité à un seul espace de travail : le `workspaceId` du corps de la requête, ou l'espace de travail sélectionné

Exemple de requête :

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Exemple de requête sur les cartes :

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Exemple de modification :

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Un serveur MCP distant est également disponible sur `https://mcp.nibomo.com/mcp`, avec OAuth 2.1 (enregistrement dynamique de client + PKCE). Il expose la même séparation SQL sous la forme de `sql_query` (strictement en lecture seule) et `sql_execute` (écriture), plus `list_workspaces`, `get_guide` et les outils de révision `next_review_card`, `reveal_answer` et `submit_review` ; voir le [connecteur MCP](/docs/mcp-connector/).

### Sécurité et portée

La surface SQL est un dialecte restreint, imposé par un analyseur syntaxique, plutôt que du PostgreSQL brut. Les garde-fous sont les suivants :

- **Liste blanche fermée d'instructions** : seuls `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` et `SELECT` pour les lectures, et `INSERT`, `UPDATE` et `DELETE` pour les écritures. Tout le reste est rejeté dès l'analyse.
- **Ressources limitées** : les instructions ne peuvent toucher que les ressources `workspace`, `cards`, `decks` et `review_events`.
- **Portée par espace de travail** : chaque instruction est limitée à un espace de travail auquel vous avez accès, soit le `workspaceId` du corps de la requête, soit votre espace de travail sélectionné, sans accès croisé entre comptes.
- **Corps de requête stricts** : les routes SQL et de révision rejettent tout champ inconnu dans le corps, donc un `workspaceId` mal orthographié échoue au lieu de s'exécuter sur l'espace de travail sélectionné.
- **Plafonds** : jusqu'à `100` lignes par instruction, jusqu'à `50` instructions par lot, et une limite de résultat d'environ `12k` tokens. Les lots de modifications s'appliquent de façon atomique.
- **Séparation lecture/écriture** : `sql_query` et `list_workspaces` sont strictement en lecture seule (`readOnlyHint`) et ne réparent jamais de données, ne recalculent jamais la planification et ne modifient jamais l'état d'une carte. `sql_execute` est le seul outil SQL d'écriture et effectue les écritures (`destructiveHint`) ; un même appel doit contenir soit uniquement des lectures, soit uniquement des écritures. SQL ne peut pas écrire `review_events` ni l'état de planification FSRS ; seul `POST /v1/agent/reviews/submit` (`submit_review` en MCP) enregistre une révision.

## Guides

`GET /v1/agent/guide/{topic}` renvoie un guide de référence dans `data.guide`, le même contenu que celui servi par l'outil MCP `get_guide`. Sujets :

- `sql_dialect` : la grammaire SQL complète, les limites et des exemples
- `card_authoring` : le contrat de carte, les tags, la détection des doublons et la mise en forme
- `bulk_authoring` : découper et vérifier un gros travail d'écriture
- `review_flow` : la boucle de révision et de notation

Un sujet inconnu répond `400` avec la liste des sujets pris en charge. Récupérez le guide correspondant avant de rédiger des cartes, d'écrire en masse ou de lancer une révision, et relisez `sql_dialect` après une instruction rejetée.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Révisions

Les routes de révision permettent à un agent d'interroger un apprenant une carte à la fois et d'enregistrer chaque note dans la planification FSRS de la carte. Elles acceptent les mêmes arguments JSON que les outils de révision MCP :

- `POST /v1/agent/reviews/next` renvoie `card` avec `cardId` et `frontText`, ou `card: null` quand rien n'est dû. Les paramètres facultatifs `tags` (au moins un) ou `deckId` restreignent la file, jamais les deux à la fois ; une requête sans corps est valide.
- `POST /v1/agent/reviews/reveal` exige `cardId` et renvoie le `backText` de cette carte.
- `POST /v1/agent/reviews/submit` exige `cardId`, un UUID `reviewId` généré par le client, un `rating` valant `Again`, `Hard`, `Good` ou `Easy`, et le `reviewedTimeZone` IANA de l'apprenant. Le serveur horodate la révision et renvoie la nouvelle planification de la carte, avec `dueAt`, `state`, `reps` et `lapses`.

Les trois routes acceptent le `workspaceId` facultatif. Conservez le `reviewId` avant l'envoi, et réessayez un envoi incertain avec une requête identique ; il n'enregistre jamais une deuxième révision. Les routes de révision peuvent aussi répondre :

- `409 REVIEW_EVENT_CONFLICT` : la révision a déjà été enregistrée, et `error.details.reviewSchedule` contient la planification actuelle de la carte.
- `409 REVIEW_ID_CARD_MISMATCH` : le `reviewId` identifie déjà une révision d'une autre carte, donc rien n'a été enregistré ; renvoyez la révision avec un nouveau `reviewId`.
- `409 REVIEW_STALE` : l'heure de révision enregistrée pour la carte est égale ou postérieure à l'heure actuelle du serveur ; révisez une autre carte.
- `400 REVIEW_INPUT_INVALID` : un argument est manquant, invalide ou non pris en charge, par exemple `tags` combiné avec `deckId`, ou un tag que l'espace de travail n'utilise pas.

Exemple d'envoi :

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## API humaines et de synchronisation

Nibomo comprend aussi des API distinctes pour les clients humains et la synchronisation offline-first, mais elles ne constituent pas le contrat principal des agents externes :

- les flux navigateur utilisent des cookies de domaine partagé et une protection CSRF
- les clients offline-first utilisent les routes de synchronisation implémentées sous `/v1/workspaces/{workspaceId}/sync/push` et `/v1/workspaces/{workspaceId}/sync/pull`
- les routes de synchronisation sont distinctes de la surface d'agent externe
