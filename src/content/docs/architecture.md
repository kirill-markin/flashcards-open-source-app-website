---
title: Architecture
description: System overview, public domains, supported clients, and the current offline-first data flow.
---

## System Overview

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principles

1. Separate public domains for `app`, `api`, and `auth`
2. Postgres is the source of truth
3. The iOS client is offline-first with local SQLite plus sync
4. The web app, iOS app, and external agent surface share the same workspace model
5. External agents start from `GET https://api.flashcards-open-source-app.com/v1/`

## Supported Clients

- Web app on `app.flashcards-open-source-app.com`
- iOS app in the main repository with local SQLite storage
- Android app on Google Play
- External agent clients through discovery, OTP bootstrap, and `Authorization: ApiKey`

## Data Model

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Data Flow

### Web

1. The browser signs in through `auth.<domain>`.
2. The web app loads workspace data from `api.<domain>`.
3. AI chat requests go through `/chat/local-turn`.
4. Review submissions update scheduler state on write.

### iOS

1. The iOS app writes locally to SQLite first.
2. Local changes are queued in an outbox.
3. Sync uploads changes through `/v1/workspaces/{workspaceId}/sync/push`.
4. Sync downloads remote updates through `/v1/workspaces/{workspaceId}/sync/pull`.
5. The local database applies changes and advances the sync cursor.

### External Agents

1. Agents start with `GET /v1/`.
2. OTP bootstrap runs on `auth.<domain>`.
3. The agent receives a long-lived API key.
4. The agent loads `/v1/agent/me`, lists workspaces, selects one if needed, and then uses `/v1/agent/sql`.

## Scheduling

Flashcards uses FSRS as the review scheduler.

Implementation notes:

- backend and iOS keep mirrored FSRS implementations
- the web app mirrors the scheduling data contract, but does not ship a third scheduler copy
- workspace-level scheduler settings include desired retention, learning steps, relearning steps, maximum interval, and fuzz
- the real review timestamp comes from `reviewedAtClient`

For the detailed contract, see [FSRS scheduling logic in the main repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Auth

- Email OTP via Cognito
- Shared-domain browser session cookies for the hosted web app
- Agent OTP bootstrap on `auth.<domain>` with long-lived ApiKey output
- `AUTH_MODE=none` for local development
- `AUTH_MODE=cognito` for production-like auth

## Deployment Shape

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres in AWS RDS

The apex domain can stay on a separate marketing site. If it is free during bootstrap, the infrastructure can temporarily redirect it to `app.<domain>`.
