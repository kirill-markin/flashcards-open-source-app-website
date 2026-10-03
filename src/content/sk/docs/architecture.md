---
title: Architektúra
description: Prehľad systému, verejné domény, podporovaní klienti a aktuálny tok dát navrhnutý primárne na prácu offline.
---

## Prehľad systému

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Princípy

1. Samostatné verejné domény pre `app`, `api` a `auth`
2. Zdrojom pravdy je Postgres
3. Klient pre iOS je navrhnutý primárne na prácu offline s lokálnym SQLite a synchronizáciou
4. Webová aplikácia, aplikácia pre iOS a rozhranie pre externých agentov zdieľajú rovnaký model pracovného priestoru
5. Externí agenti začínajú na `GET https://api.nibomo.com/v1/`

## Podporovaní klienti

- Webová aplikácia na `app.nibomo.com`
- Aplikácia pre iOS v hlavnom repozitári s lokálnym úložiskom SQLite
- Aplikácia pre Android na Google Play
- Externí agentní klienti cez zisťovanie, prvotné prihlásenie cez OTP a `Authorization: ApiKey`

## Dátový model

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Tok dát

### Web

1. Prehliadač sa prihlási cez `auth.<domain>`.
2. Webová aplikácia načíta dáta pracovného priestoru z `api.<domain>`.
3. Požiadavky AI chatu idú cez `/chat/local-turn`.
4. Odoslané opakovania pri zápise aktualizujú stav plánovača.

### iOS

1. Aplikácia pre iOS zapisuje najprv lokálne do SQLite.
2. Lokálne zmeny sa radia do odchádzajúcej fronty.
3. Synchronizácia nahráva zmeny cez `/v1/workspaces/{workspaceId}/sync/push`.
4. Synchronizácia sťahuje vzdialené zmeny cez `/v1/workspaces/{workspaceId}/sync/pull`.
5. Lokálna databáza zmeny aplikuje a posunie synchronizačný kurzor.

### Externí agenti

1. Agenti začínajú s `GET /v1/`.
2. Prvotné prihlásenie cez OTP prebieha na `auth.<domain>`.
3. Agent dostane dlhodobý API kľúč.
4. Agent načíta `/v1/agent/me`, vypíše pracovné priestory, v prípade potreby jeden vyberie a potom používa `/v1/agent/sql/query` a `/v1/agent/sql/execute`.

## Plánovanie

Nibomo používa ako plánovač opakovaní FSRS.

Poznámky k implementácii:

- backend a iOS majú zrkadlové implementácie FSRS
- webová aplikácia zrkadlí dátový kontrakt plánovania, ale tretiu kópiu plánovača neobsahuje
- nastavenia plánovača na úrovni pracovného priestoru zahŕňajú požadovanú retenciu, kroky učenia, kroky opätovného učenia, maximálny interval a náhodný rozptyl intervalov
- skutočný čas opakovania pochádza z `reviewedAtClient`

Podrobný kontrakt nájdete v [logike plánovania FSRS v hlavnom repozitári](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentifikácia

- E-mailový OTP cez Cognito
- Cookies relácie prehliadača na zdieľanej doméne pre hosťovanú webovú aplikáciu
- Prvotné prihlásenie agenta cez OTP na `auth.<domain>` s výstupom v podobe dlhodobého ApiKey
- `AUTH_MODE=none` pre lokálny vývoj
- `AUTH_MODE=cognito` pre autentifikáciu ako v produkcii

## Podoba nasadenia

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend na Lambde
- `auth.<domain>` -> API Gateway + autentifikačná služba na Lambde
- Postgres v AWS RDS

Hlavná doména môže zostať na samostatnom marketingovom webe. Ak je počas prvotného nasadenia voľná, infraštruktúra ju môže dočasne presmerovať na `app.<domain>`.
