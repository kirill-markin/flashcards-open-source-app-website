---
title: Architektura
description: Přehled systému, veřejné domény, podporovaní klienti a současný tok dat v režimu offline-first.
---

## Přehled systému

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principy

1. Samostatné veřejné domény pro `app`, `api` a `auth`
2. Zdrojem pravdy je Postgres
3. Klient pro iOS funguje offline-first s místní databází SQLite a synchronizací
4. Webová aplikace, aplikace pro iOS i rozhraní pro externí agenty sdílejí stejný model pracovního prostoru
5. Externí agenti začínají na `GET https://api.nibomo.com/v1/`

## Podporovaní klienti

- Webová aplikace na `app.nibomo.com`
- Aplikace pro iOS v hlavním repozitáři s místním úložištěm SQLite
- Aplikace pro Android na Google Play
- Externí agentní klienti přes discovery, inicializaci pomocí OTP a `Authorization: ApiKey`

## Datový model

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Tok dat

### Web

1. Prohlížeč se přihlašuje přes `auth.<domain>`.
2. Webová aplikace načítá data pracovního prostoru z `api.<domain>`.
3. Požadavky AI chatu jdou přes `/chat/local-turn`.
4. Odeslaná opakování aktualizují stav plánovače při zápisu.

### iOS

1. Aplikace pro iOS zapisuje nejprve lokálně do SQLite.
2. Místní změny se řadí do fronty v outboxu.
3. Synchronizace odesílá změny přes `/v1/workspaces/{workspaceId}/sync/push`.
4. Synchronizace stahuje vzdálené změny přes `/v1/workspaces/{workspaceId}/sync/pull`.
5. Místní databáze změny použije a posune synchronizační kurzor.

### Externí agenti

1. Agenti začínají na `GET /v1/`.
2. Inicializace pomocí OTP probíhá na `auth.<domain>`.
3. Agent obdrží dlouhodobý API klíč.
4. Agent načte `/v1/agent/me`, vypíše pracovní prostory, v případě potřeby jeden vybere a pak používá `/v1/agent/sql/query` a `/v1/agent/sql/execute`.

## Plánování

Nibomo používá jako plánovač opakování FSRS.

Poznámky k implementaci:

- backend a iOS udržují zrcadlové implementace FSRS
- webová aplikace zrcadlí datový kontrakt plánování, ale třetí kopii plánovače neobsahuje
- nastavení plánovače na úrovni pracovního prostoru zahrnuje požadovanou retenci, kroky učení, kroky opětovného učení, maximální interval a fuzz
- skutečný čas opakování pochází z `reviewedAtClient`

Podrobný kontrakt najdete v [logice plánování FSRS v hlavním repozitáři](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentizace

- E-mailový OTP přes Cognito
- Session cookies prohlížeče na sdílené doméně pro hostovanou webovou aplikaci
- Inicializace agenta pomocí OTP na `auth.<domain>`, jejímž výsledkem je dlouhodobý ApiKey
- `AUTH_MODE=none` pro místní vývoj
- `AUTH_MODE=cognito` pro autentizaci jako v produkci

## Podoba nasazení

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend v Lambdě
- `auth.<domain>` -> API Gateway + autentizační služba v Lambdě
- Postgres v AWS RDS

Apex doména může zůstat u samostatného marketingového webu. Pokud je při počátečním nasazení volná, infrastruktura ji může dočasně přesměrovat na `app.<domain>`.
