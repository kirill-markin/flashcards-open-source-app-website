---
title: Connecteur MCP
description: Ajoutez le serveur MCP distant de Nibomo comme connecteur personnalisé, avec OAuth pour les clients, une clé API pour l'usage sans interface, et des outils SQL de lecture et d'écriture séparés.
---

## Vue d'ensemble

Nibomo exécute un serveur MCP (Model Context Protocol) distant pour que les clients
MCP et les agents IA puissent lire vos cartes dues, les réviser avec vous une
question à la fois, et créer ou modifier des cartes et des paquets pour vous.

Les agents peuvent se connecter de deux façons : via ce serveur MCP (idéal pour les
clients MCP comme Claude ou Cursor), ou via l'[URL de découverte de l'API agents](/docs/api/)
pour les agents en ligne de commande. Les deux atteignent la même surface de données
propre à l'utilisateur ; cette page couvre le serveur MCP.

Connectez-vous à cette adresse :

```text
https://mcp.nibomo.com/mcp
```

Le transport est Streamable HTTP, et le serveur expose sept outils : deux outils
SQL sur une surface SQL réduite et volontairement limitée, une liste des espaces de
travail, un guide de référence et trois outils de révision. C'est la même surface de
données propre à l'utilisateur que dans la [référence de l'API](/docs/api/) ; le
serveur MCP est la voie adaptée aux connecteurs pour l'atteindre depuis les clients
qui parlent MCP.

## Comment l'ajouter dans votre client

La plupart des clients ajoutent un serveur MCP distant comme connecteur personnalisé :

1. Ouvrez les réglages de connecteurs ou de serveurs MCP de votre client.
2. Ajoutez un connecteur personnalisé et collez l'URL du serveur `https://mcp.nibomo.com/mcp`.
3. Pour les clients interactifs, autorisez l'accès dans le navigateur quand c'est
   demandé. Le serveur utilise OAuth 2.1 avec l'enregistrement dynamique de client :
   il n'y a donc aucun secret client à coller ni application à enregistrer au préalable.
4. Pour un usage sans interface ou en ligne de commande, envoyez un en-tête
   `Authorization: Bearer fca_…` avec votre clé API d'agent au lieu du flux navigateur.

Après l'autorisation, appelez `list_workspaces` une fois pour choisir un espace de
travail, puis utilisez `sql_query` pour les lectures et `sql_execute` pour écrire les
cartes et les paquets. Pour réviser, appelez `next_review_card`, puis `reveal_answer`,
puis `submit_review`.

## Outils

Le serveur expose sept outils. Les lectures et les écritures sont séparées
volontairement, pour qu'un même outil ne mélange jamais opérations sûres et destructrices.

- `sql_query` — accès strictement en lecture seule à vos cartes et paquets (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — accès en écriture à vos cartes et paquets (`INSERT`, `UPDATE`,
  `DELETE`) sous forme de lot atomique.
- `list_workspaces` — liste strictement en lecture seule des espaces de travail
  auxquels vous avez accès, chacun avec son
  `workspaceId`, son nom, son nombre de cartes actives, sa dernière activité et
  l'indication s'il s'agit de votre espace par défaut actuellement sélectionné.
  Utilisez un `workspaceId` renvoyé pour l'argument facultatif `workspaceId` des
  outils SQL et de révision.
- `get_guide` — guide de référence strictement en lecture seule pour un sujet :
  `sql_dialect`, `card_authoring`, `bulk_authoring` ou `review_flow`. Il ne lit
  aucune donnée d'espace de travail.
- `next_review_card` — strictement en lecture seule : renvoie la prochaine carte à
  réviser, recto seulement, dans le même ordre de file que les applications. Les
  paramètres facultatifs `tags` ou `deckId` restreignent la file.
- `reveal_answer` — strictement en lecture seule : renvoie le verso d'une carte
  après que l'apprenant a répondu à son recto.
- `submit_review` — enregistre une note `Again`, `Hard`, `Good` ou `Easy` et fait
  avancer la planification FSRS de la carte.

La surface SQL est un dialecte volontairement limité et ne correspond pas à
PostgreSQL complet. Cette documentation ne couvre que le dialecte pris en charge,
pas une référence de compatibilité PostgreSQL. Les instructions ne peuvent adresser
que les ressources `workspace`, `cards`, `decks` et `review_events`, chaque
instruction est limitée à votre propre espace de travail, et les lectures comme les
écritures sont plafonnées à `100` lignes par instruction.

## Révisions

Les outils de révision permettent à un agent d'interroger un apprenant une carte à
la fois et d'enregistrer chaque note dans la planification FSRS de la carte :

1. `next_review_card` renvoie un `cardId` et un `frontText`, ou `card: null` quand
   rien n'est dû.
2. Après la réponse de l'apprenant, `reveal_answer` renvoie le `backText` de cette carte.
3. `submit_review` prend le `cardId`, un UUID `reviewId` généré par le client, un
   `rating` et le `reviewedTimeZone` IANA de l'apprenant. Le serveur horodate la
   révision et renvoie la nouvelle planification de la carte.

Réessayez un envoi incertain avec le même `reviewId` ; il n'enregistre jamais une
deuxième révision. Un envoi peut aussi répondre :

- `409 REVIEW_EVENT_CONFLICT` — la révision a déjà été enregistrée, et les détails
  de l'erreur contiennent la planification actuelle de la carte.
- `409 REVIEW_ID_CARD_MISMATCH` — le `reviewId` identifie déjà une révision d'une
  autre carte, donc rien n'a été enregistré ; renvoyez la révision avec un nouveau `reviewId`.
- `409 REVIEW_STALE` — l'heure de révision enregistrée pour la carte est égale ou
  postérieure à l'heure actuelle du serveur ; révisez une autre carte.

Les révisions ne sont enregistrées que par `submit_review` : SQL ne peut pas écrire
`review_events` ni l'état de planification FSRS. Appelez `get_guide` avec le sujet
`review_flow` pour les règles complètes de révision et de notation.

## Contrat de carte

Chaque carte suit un même contrat, et les outils s'appuient dessus :

- `front_text` est uniquement une question ou une invite de révision, et ne contient jamais la réponse.
- `back_text` contient la réponse, éventuellement avec un exemple concret.

Les agents qui génèrent des cartes via `sql_execute` respectent ce contrat, donc les
cartes qu'ils créent sont immédiatement révisables en répétition espacée.

## Authentification

Deux voies d'autorisation mènent à la même surface de données propre à l'utilisateur.

### OAuth 2.1 (clients connecteurs interactifs)

Le serveur implémente le flux de code d'autorisation avec PKCE et enregistrement
dynamique de client. Ajoutez l'URL MCP comme connecteur personnalisé et autorisez
l'accès dans le navigateur ; aucun secret client n'est partagé à l'avance. La
découverte est standard :

- Métadonnées de la ressource protégée :
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Métadonnées du serveur d'autorisation :
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Clé API (sans interface et en ligne de commande)

Obtenez une clé API d'agent `fca_` de longue durée via le flux de connexion par OTP
par e-mail documenté dans la [référence de l'API](/docs/api/), puis envoyez-la comme
jeton Bearer :

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

C'est la même clé que celle acceptée par la surface d'agent REST, et elle ne
nécessite ni navigateur ni aller-retour OAuth.

La description canonique lisible par machine des deux voies est la charge utile de
découverte sur `https://api.nibomo.com/v1/` (répliquée sur `/v1/agent`).

## Sécurité et portée

Les outils SQL peuvent être approuvés sans risque, car la surface est un dialecte
restreint, imposé par un analyseur syntaxique, plutôt qu'un accès arbitraire à la
base de données :

- **Liste blanche fermée d'instructions** : `sql_query` n'accepte que `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` et `SELECT` ; `sql_execute` n'accepte que `INSERT`,
  `UPDATE` et `DELETE`. Tout le reste est rejeté dès l'analyse.
- **Ressources limitées** : les instructions ne peuvent toucher que `workspace`,
  `cards`, `decks` et `review_events`.
- **Portée par espace de travail** : chaque instruction SQL et chaque révision est
  limitée à un espace de travail auquel vous avez accès, soit le `workspaceId` que
  vous passez, soit votre espace par défaut sélectionné, sans accès croisé entre comptes.
- **Arguments stricts** : chaque outil rejette tout argument inconnu, donc un
  `workspaceId` mal orthographié échoue au lieu de s'exécuter sur votre espace de
  travail par défaut.
- **Plafonds** : jusqu'à `100` lignes par instruction, jusqu'à `50` instructions par
  lot, et une limite de résultat d'environ `12k` tokens. Les lots de modifications
  s'appliquent de façon atomique.
- **Séparation lecture/écriture** : `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` et `reveal_answer` sont strictement en lecture seule
  (`readOnlyHint`) et ne réparent jamais de données, ne recalculent jamais la
  planification et ne modifient jamais l'état d'une carte. `sql_execute` et
  `submit_review` sont les seuls outils d'écriture (`destructiveHint`) :
  `sql_execute` écrit les cartes et les paquets, et `submit_review` enregistre une
  révision et fait avancer la planification de sa carte.

L'ensemble de la pile — application, backend et infrastructure — est open source et
peut être [auto-hébergée](/docs/self-hosting/), donc vous pouvez faire fonctionner le
même connecteur avec votre propre déploiement.
