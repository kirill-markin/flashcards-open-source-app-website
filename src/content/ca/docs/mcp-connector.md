---
title: Connector MCP
description: "Connecta Nibomo des del directori de Claude o configura el seu servidor MCP remot a Claude Code i altres clients, amb OAuth i vuit eines per a targetes d'estudi i repassos."
---

## Connecta't des del directori de Claude

Obre [Nibomo al directori de Claude](https://claude.ai/directory/nibomo), connecta'l, inicia la sessió al teu compte de Nibomo i autoritza l'accés. Nibomo hi apareix com a connector Community.

A Claude Code, fes servir el mateix compte de subscripció de Claude i comprova `/mcp` després de connectar-lo. Els inicis de sessió amb una clau d'API o amb un proveïdor extern no carreguen automàticament els teus connectors de claude.ai.

També pots configurar Claude Code directament. Executa l'ordre següent i després obre `/mcp` a Claude Code i completa l'autorització al navegador:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Documentació de MCP de Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Visió general

Nibomo ofereix un servidor MCP (Model Context Protocol) remot perquè els clients MCP i els agents d'IA puguin llegir les teves targetes pendents, repassar-les amb tu pregunta a pregunta i crear o editar targetes i baralles per tu.

Els agents s'hi poden connectar de dues maneres: per aquest servidor MCP (la millor opció per a clients MCP com Claude o Cursor) o per l'[URL de descobriment de l'Agents API](/docs/api/) per a agents de línia d'ordres. Totes dues donen accés a la mateixa interfície de dades de cada usuari; aquesta pàgina tracta del servidor MCP.

Connecta-t'hi a:

```text
https://mcp.nibomo.com/mcp
```

El transport és Streamable HTTP. El servidor exposa vuit eines per descobrir espais de treball, llegir i escriure targetes i baralles, consultar guies de referència, fer repassos i consultar l'ús del compte.

## Com afegir-lo al teu client

La majoria de clients afegeixen un servidor MCP remot com a connector personalitzat:

1. Obre la configuració de connectors o de servidors MCP del teu client.
2. Afegeix un connector personalitzat i enganxa l'URL del servidor `https://mcp.nibomo.com/mcp`.
3. En clients interactius, autoritza l'accés al navegador quan t'ho demani. El servidor fa servir OAuth 2.1 amb Dynamic Client Registration, de manera que no cal enganxar cap secret de client ni registrar abans cap app.
4. Per a un ús sense interfície o des de la línia d'ordres, defineix una capçalera `Authorization: Bearer fca_…` amb la teva clau d'API d'agent en lloc del flux del navegador.

Després d'autoritzar, crida `list_workspaces` una vegada per triar un espai de treball i després fes servir `sql_query` per a les lectures i `sql_execute` per a les escriptures de targetes i baralles. Per repassar, crida `next_review_card`, després `reveal_answer` i després `submit_review`.

## Eines

El servidor exposa vuit eines. Les lectures i les escriptures estan separades a propòsit perquè una mateixa eina mai barregi operacions segures i destructives.

- `get_usage_limits` — pla del compte, límits i ús mensual actual d'IA, estrictament de només lectura; no llegeix ni canvia targetes.
- `sql_query` — accés estrictament de només lectura a les teves targetes i baralles (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — accés d'escriptura a les teves targetes i baralles (`INSERT`, `UPDATE`, `DELETE`) com a lot atòmic.
- `list_workspaces` — llista estrictament de només lectura dels espais de treball als quals tens accés, cadascun amb el seu `workspaceId`, el nom, el nombre de targetes actives, l'última activitat i si és el teu espai predeterminat seleccionat actualment. Fes servir un `workspaceId` retornat per a l'argument opcional `workspaceId` de les eines SQL i de repàs.
- `get_guide` — guia de referència estrictament de només lectura sobre un tema: `sql_dialect`, `card_authoring`, `bulk_authoring` o `review_flow`. No llegeix cap dada de l'espai de treball.
- `next_review_card` — estrictament de només lectura: retorna la següent targeta per repassar, només l'anvers, en el mateix ordre de cua que les apps. Opcionalment, `tags` o `deckId` restringeixen la cua.
- `reveal_answer` — estrictament de només lectura: retorna el revers d'una targeta després que qui aprèn hagi intentat respondre l'anvers.
- `submit_review` — registra una valoració `Again`, `Hard`, `Good` o `Easy` i fa avançar la planificació FSRS de la targeta.

La interfície SQL és un dialecte limitat a propòsit i no és un PostgreSQL complet. Aquesta documentació només descriu el dialecte admès; no és una referència de compatibilitat amb PostgreSQL. Les instruccions només poden adreçar-se als recursos `workspace`, `cards`, `decks` i `review_events`, cada instrucció s'aplica al teu propi espai de treball, i les lectures i les escriptures tenen un límit de `100` files per instrucció.

## Repassos

Les eines de repàs permeten que un agent posi a prova qui aprèn, targeta a targeta, i desi cada valoració a la planificació FSRS de la targeta:

1. `next_review_card` retorna un `cardId` i un `frontText`, o `card: null` quan no hi ha res pendent.
2. Després que qui aprèn respongui, `reveal_answer` retorna el `backText` d'aquella targeta.
3. `submit_review` rep el `cardId`, un UUID `reviewId` generat pel client, un `rating` i el `reviewedTimeZone` IANA de qui aprèn. El servidor registra l'hora del repàs i retorna la nova planificació de la targeta.

Si no saps si un enviament ha arribat, torna'l a provar amb el mateix `reviewId`; mai no es registra un segon repàs. Un enviament també pot respondre:

- `409 REVIEW_EVENT_CONFLICT` — el repàs ja s'havia registrat, i els detalls de l'error contenen la planificació actual de la targeta.
- `409 REVIEW_ID_CARD_MISMATCH` — el `reviewId` ja identifica un repàs d'una altra targeta, de manera que no s'ha desat res; torna a enviar-lo amb un `reviewId` nou.
- `409 REVIEW_STALE` — l'hora de repàs desada de la targeta és igual o posterior a l'hora actual del servidor; repassa una altra targeta.

Els repassos només es registren a través de `submit_review`: SQL no pot escriure a `review_events` ni modificar l'estat de planificació de FSRS. Crida `get_guide` amb el tema `review_flow` per conèixer totes les regles de repàs i valoració.

## Contracte de les targetes

Totes les targetes segueixen un mateix contracte, i les eines en depenen:

- `front_text` només conté una pregunta o una indicació de repàs i mai conté la resposta.
- `back_text` conté la resposta, opcionalment amb un exemple concret.

Els agents que generen targetes amb `sql_execute` segueixen aquest contracte, de manera que les targetes que creen es poden repassar immediatament amb repetició espaiada.

## Autenticació

Dues vies d'autorització donen accés a la mateixa interfície de dades de cada usuari.

### OAuth 2.1 (clients de connector interactius)

El servidor implementa el flux de codi d'autorització amb PKCE i Dynamic Client Registration. Afegeix l'URL de MCP com a connector personalitzat i autoritza l'accés al navegador; no hi ha cap secret de client compartit prèviament. El descobriment segueix l'estàndard:

- Metadades del recurs protegit:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadades del servidor d'autorització:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Clau d'API (sense interfície i línia d'ordres)

Obtén una clau d'API d'agent `fca_` de llarga durada amb el flux d'inici de sessió amb OTP per correu electrònic documentat a la [referència de l'API](/docs/api/) i envia-la com a token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

És la mateixa clau que accepta la interfície REST per a agents, i no necessita navegador ni cap anada i tornada d'OAuth.

La descripció canònica, llegible per màquina, de totes dues vies és la resposta de descobriment a `https://api.nibomo.com/v1/` (replicada a `/v1/agent`).

## Seguretat i abast

Les eines SQL es poden aprovar amb seguretat perquè la interfície és un dialecte acotat i controlat per l'analitzador, no un accés arbitrari a la base de dades:

- **Llista tancada d'instruccions permeses**: `sql_query` només accepta `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` i `SELECT`; `sql_execute` només accepta `INSERT`, `UPDATE` i `DELETE`. Qualsevol altra cosa es rebutja en el moment de l'anàlisi.
- **Recursos limitats**: les instruccions només poden afectar `workspace`, `cards`, `decks` i `review_events`.
- **Abast per espai de treball**: cada instrucció SQL i cada repàs s'apliquen a un sol espai de treball al qual tinguis accés, ja sigui el `workspaceId` que passis o el teu espai predeterminat seleccionat, sense accés entre inquilins.
- **Arguments estrictes**: totes les eines rebutgen qualsevol argument desconegut, de manera que un `workspaceId` mal escrit falla en lloc d'executar-se contra el teu espai de treball predeterminat.
- **Límits**: fins a `100` files per instrucció, fins a `50` instruccions per lot i un límit de resultat d'aproximadament `12k` tokens. Els lots de modificació s'apliquen de manera atòmica.
- **Separació de lectura i escriptura**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` i `reveal_answer` són estrictament de només lectura (`readOnlyHint`) i mai reparen dades, recalculen la planificació ni canvien l'estat de les targetes. `sql_execute` i `submit_review` són les úniques eines d'escriptura (`destructiveHint`): `sql_execute` escriu targetes i baralles, i `submit_review` registra un repàs i fa avançar la planificació de la seva targeta.

Tota la pila (app, backend i infraestructura) és de codi obert i es pot [autoallotjar](/docs/self-hosting/), de manera que pots fer servir el mateix connector amb el teu propi desplegament.
