---
title: Arkitektur
description: Systemoversikt, offentlige domener, støttede klienter og den nåværende offline-first-dataflyten.
---

## Systemoversikt

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Prinsipper

1. Separate offentlige domener for `app`, `api` og `auth`
2. Postgres er den autoritative datakilden
3. iOS-klienten er offline-first med lokal SQLite pluss synkronisering
4. Nettappen, iOS-appen og grensesnittet for eksterne agenter deler samme modell for arbeidsområder
5. Eksterne agenter starter fra `GET https://api.nibomo.com/v1/`

## Støttede klienter

- Nettapp på `app.nibomo.com`
- iOS-app i hovedrepositoriet med lokal SQLite-lagring
- Android-app på Google Play
- Eksterne agentklienter via discovery, førstegangsoppsett med OTP og `Authorization: ApiKey`

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

## Dataflyt

### Web

1. Nettleseren logger inn via `auth.<domain>`.
2. Nettappen laster inn data for arbeidsområdet fra `api.<domain>`.
3. Forespørsler til AI-chatten går gjennom `/chat/local-turn`.
4. Innsendte repetisjoner oppdaterer planleggerens tilstand ved skriving.

### iOS

1. iOS-appen skriver først lokalt til SQLite.
2. Lokale endringer settes i kø i en utboks.
3. Synkroniseringen laster opp endringer via `/v1/workspaces/{workspaceId}/sync/push`.
4. Synkroniseringen laster ned eksterne oppdateringer via `/v1/workspaces/{workspaceId}/sync/pull`.
5. Den lokale databasen tar i bruk endringene og flytter synkroniseringsmarkøren fremover.

### Eksterne agenter

1. Agenter starter med `GET /v1/`.
2. Førstegangsoppsettet med OTP kjører på `auth.<domain>`.
3. Agenten mottar en langvarig API-nøkkel.
4. Agenten laster inn `/v1/agent/me`, lister arbeidsområdene, velger ett ved behov og bruker deretter `/v1/agent/sql/query` og `/v1/agent/sql/execute`.

## Repetisjonsplanlegging

Nibomo bruker FSRS til å planlegge repetisjonene.

Merknader om implementasjonen:

- backend og iOS har speilede FSRS-implementasjoner
- nettappen speiler datakontrakten for repetisjonsplanleggingen, men leverer ikke en tredje kopi av planleggeren
- planleggerinnstillingene på arbeidsområdenivå omfatter ønsket gjenkalling, læringstrinn, gjenlæringstrinn, maksimalt intervall og fuzz
- det faktiske tidspunktet for repetisjonen kommer fra `reviewedAtClient`

Den detaljerte kontrakten finner du i [FSRS-planleggingslogikken i hovedrepositoriet](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentisering

- Engangskode på e-post via Cognito
- Øktinformasjonskapsler i nettleseren på et delt domene for den hostede nettappen
- Førstegangsoppsett med OTP for agenter på `auth.<domain>`, som gir en langvarig ApiKey
- `AUTH_MODE=none` for lokal utvikling
- `AUTH_MODE=cognito` for produksjonslik autentisering

## Utrullingsoppsett

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda-backend
- `auth.<domain>` -> API Gateway + Lambda-autentiseringstjeneste
- Postgres i AWS RDS

Apex-domenet kan fortsatt brukes til et eget markedsføringsnettsted. Hvis det er ledig under førstegangsoppsettet, kan infrastrukturen midlertidig omdirigere det til `app.<domain>`.
