---
title: Arkitektur
description: Systemöversikt, publika domäner, klienter som stöds och det nuvarande offline-först-dataflödet.
---

## Systemöversikt

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principer

1. Separata publika domäner för `app`, `api` och `auth`
2. Postgres är sanningskällan
3. iOS-klienten är offline-först med lokal SQLite plus synk
4. Webbappen, iOS-appen och ytan för externa agenter delar samma modell för arbetsytor
5. Externa agenter börjar med `GET https://api.nibomo.com/v1/`

## Klienter som stöds

- Webbapp på `app.nibomo.com`
- iOS-app i huvudrepot med lokal SQLite-lagring
- Android-app på Google Play
- Externa agentklienter via discovery, OTP-uppstart och `Authorization: ApiKey`

## Datamodell

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Dataflöde

### Webb

1. Webbläsaren loggar in via `auth.<domain>`.
2. Webbappen läser in data för arbetsytan från `api.<domain>`.
3. Förfrågningar till AI-chatten går via `/chat/local-turn`.
4. När en repetition skickas in uppdateras schemaläggarens tillstånd direkt vid skrivningen.

### iOS

1. iOS-appen skriver först lokalt till SQLite.
2. Lokala ändringar köas i en utkorg.
3. Synken laddar upp ändringar via `/v1/workspaces/{workspaceId}/sync/push`.
4. Synken laddar ned fjärruppdateringar via `/v1/workspaces/{workspaceId}/sync/pull`.
5. Den lokala databasen tillämpar ändringarna och flyttar fram synkmarkören.

### Externa agenter

1. Agenter börjar med `GET /v1/`.
2. OTP-uppstarten körs på `auth.<domain>`.
3. Agenten får en långlivad API-nyckel.
4. Agenten läser in `/v1/agent/me`, listar arbetsytor, väljer en vid behov och använder sedan `/v1/agent/sql/query` och `/v1/agent/sql/execute`.

## Schemaläggning

Nibomo använder FSRS som schemaläggare för repetitioner.

Implementeringsanteckningar:

- backend och iOS har speglade FSRS-implementeringar
- webbappen speglar datakontraktet för schemaläggningen men levererar ingen tredje kopia av schemaläggaren
- schemaläggarens inställningar på arbetsytenivå omfattar önskad retention, inlärningssteg, steg för ominlärning, maximalt intervall och fuzz
- den faktiska tidpunkten för repetitionen kommer från `reviewedAtClient`

Det detaljerade kontraktet finns i [FSRS-schemaläggningslogiken i huvudrepot](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentisering

- Engångskod via e-post genom Cognito
- Sessionscookies i webbläsaren på delad domän för den molndrivna webbappen
- OTP-uppstart för agenter på `auth.<domain>` som ger en långlivad ApiKey
- `AUTH_MODE=none` för lokal utveckling
- `AUTH_MODE=cognito` för produktionslik autentisering

## Driftsättningens upplägg

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda-backend
- `auth.<domain>` -> API Gateway + Lambda-autentiseringstjänst
- Postgres i AWS RDS

Apex-domänen kan ligga kvar på en separat marknadsföringswebbplats. Om den är ledig vid den första driftsättningen kan infrastrukturen tillfälligt omdirigera den till `app.<domain>`.
