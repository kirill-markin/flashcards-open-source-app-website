---
title: Architectuur
description: Systeemoverzicht, openbare domeinen, ondersteunde clients en de huidige offline-first datastroom.
---

## Systeemoverzicht

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principes

1. Aparte openbare domeinen voor `app`, `api` en `auth`
2. Postgres is de leidende gegevensbron
3. De iOS-client is offline-first, met lokale SQLite plus synchronisatie
4. De web-app, de iOS-app en de interface voor externe agents delen hetzelfde werkruimtemodel
5. Externe agents beginnen bij `GET https://api.nibomo.com/v1/`

## Ondersteunde clients

- Web-app op `app.nibomo.com`
- iOS-app in de hoofdrepository met lokale SQLite-opslag
- Android-app op Google Play
- Externe agentclients via discovery, OTP-bootstrap en `Authorization: ApiKey`

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

## Datastroom

### Web

1. De browser meldt zich aan via `auth.<domain>`.
2. De web-app laadt werkruimtegegevens van `api.<domain>`.
3. Verzoeken aan de AI-chat lopen via `/chat/local-turn`.
4. Bij het wegschrijven van een ingediende herhaling wordt de planningsstatus direct bijgewerkt.

### iOS

1. De iOS-app schrijft eerst lokaal naar SQLite.
2. Lokale wijzigingen worden in een outbox in de wachtrij gezet.
3. De synchronisatie uploadt wijzigingen via `/v1/workspaces/{workspaceId}/sync/push`.
4. De synchronisatie downloadt updates van de server via `/v1/workspaces/{workspaceId}/sync/pull`.
5. De lokale database past de wijzigingen toe en schuift de synchronisatiecursor op.

### Externe agents

1. Agents beginnen met `GET /v1/`.
2. De OTP-bootstrap draait op `auth.<domain>`.
3. De agent ontvangt een langdurig geldige API-sleutel.
4. De agent laadt `/v1/agent/me`, haalt de lijst met werkruimtes op, selecteert er zo nodig een en gebruikt daarna `/v1/agent/sql/query` en `/v1/agent/sql/execute`.

## Planning

Nibomo gebruikt FSRS als planner voor herhalingen.

Opmerkingen over de implementatie:

- de backend en iOS houden elk een gespiegelde FSRS-implementatie bij
- de web-app volgt hetzelfde datacontract voor de planning, maar levert geen derde kopie van de planner mee
- planningsinstellingen op werkruimteniveau omvatten de gewenste retentie, leerstappen, herleerstappen, het maximale interval en fuzz
- het werkelijke tijdstip van de herhaling komt uit `reviewedAtClient`

Zie voor het gedetailleerde contract de [FSRS-planningslogica in de hoofdrepository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Authenticatie

- OTP per e-mail via Cognito
- Sessiecookies in de browser op het gedeelde domein voor de gehoste web-app
- OTP-bootstrap voor agents op `auth.<domain>`, met een langdurig geldige ApiKey als resultaat
- `AUTH_MODE=none` voor lokale ontwikkeling
- `AUTH_MODE=cognito` voor authenticatie zoals in productie

## Deploymentopzet

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda-backend
- `auth.<domain>` -> API Gateway + Lambda-authenticatiedienst
- Postgres in AWS RDS

Het apexdomein kan op een aparte marketingsite blijven staan. Is het tijdens de eerste inrichting nog vrij, dan kan de infrastructuur het tijdelijk doorsturen naar `app.<domain>`.
