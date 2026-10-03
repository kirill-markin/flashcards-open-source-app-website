---
title: Arkitektur
description: Systemoverblik, offentlige domæner, understøttede klienter og det nuværende offline-first-dataflow.
---

## Systemoverblik

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principper

1. Separate offentlige domæner til `app`, `api` og `auth`
2. Postgres er den autoritative datakilde
3. iOS-klienten er offline-first med lokal SQLite plus synkronisering
4. Webappen, iOS-appen og grænsefladen for eksterne agenter deler den samme model for arbejdsområder
5. Eksterne agenter starter fra `GET https://api.nibomo.com/v1/`

## Understøttede klienter

- Webapp på `app.nibomo.com`
- iOS-app i hovedrepositoriet med lokal SQLite-lagring
- Android-app på Google Play
- Eksterne agentklienter via discovery, opstart med engangskode og `Authorization: ApiKey`

## Datamodel

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Dataflow

### Web

1. Browseren logger ind via `auth.<domain>`.
2. Webappen henter arbejdsområdets data fra `api.<domain>`.
3. Forespørgsler til AI-chatten går gennem `/chat/local-turn`.
4. Indsendte repetitioner opdaterer planlæggerens tilstand ved skrivning.

### iOS

1. iOS-appen skriver først lokalt til SQLite.
2. Lokale ændringer sættes i kø i en udbakke.
3. Synkroniseringen uploader ændringer via `/v1/workspaces/{workspaceId}/sync/push`.
4. Synkroniseringen henter opdateringer fra serveren via `/v1/workspaces/{workspaceId}/sync/pull`.
5. Den lokale database anvender ændringerne og flytter synkroniseringsmarkøren frem.

### Eksterne agenter

1. Agenter starter med `GET /v1/`.
2. Opstarten med engangskode kører på `auth.<domain>`.
3. Agenten modtager en langtidsgyldig API-nøgle.
4. Agenten indlæser `/v1/agent/me`, henter listen over arbejdsområder, vælger et om nødvendigt og bruger derefter `/v1/agent/sql/query` og `/v1/agent/sql/execute`.

## Planlægning

Nibomo bruger FSRS som planlægger for repetitioner.

Implementeringsnoter:

- backend og iOS har spejlede FSRS-implementeringer
- webappen spejler datakontrakten for planlægningen, men leverer ikke en tredje kopi af planlæggeren
- planlæggerens indstillinger på arbejdsområdeniveau omfatter ønsket retention, læringstrin, genindlæringstrin, maksimalt interval og fuzz
- det faktiske tidspunkt for repetitionen kommer fra `reviewedAtClient`

Den detaljerede kontrakt finder du i [FSRS-planlægningslogikken i hovedrepositoriet](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Godkendelse

- Engangskode på e-mail via Cognito
- Browsersessionscookies på det fælles domæne til den hostede webapp
- Opstart af agenter med engangskode på `auth.<domain>`, som udsteder en langtidsgyldig ApiKey
- `AUTH_MODE=none` til lokal udvikling
- `AUTH_MODE=cognito` til produktionslignende godkendelse

## Udrulningens opbygning

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda-backend
- `auth.<domain>` -> API Gateway + Lambda-godkendelsestjeneste
- Postgres i AWS RDS

Apex-domænet kan blive på et separat marketingsite. Hvis det er ledigt under opstarten, kan infrastrukturen midlertidigt omdirigere det til `app.<domain>`.
