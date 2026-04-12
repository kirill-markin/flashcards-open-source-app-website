---
title: Архитектура
description: System overview, public domains, supported clients и current offline-first data flow.
---

## System Overview

```text
iOS app / agent client        -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                       -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth        -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex redirect                 -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principles

1. Отдельные public domains для `app`, `api` и `auth`
2. Postgres — source of truth
3. iOS client работает в offline-first режиме с local SQLite и sync
4. Web app, iOS client и external agent surface используют одну workspace model
5. External agents начинают с `GET https://api.flashcards-open-source-app.com/v1/`

## Supported Clients

- Web app на `app.flashcards-open-source-app.com`
- iOS app в основном repository с local SQLite storage
- Android app в Google Play
- External agent clients через discovery, OTP bootstrap и `Authorization: ApiKey` auth

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

1. Browser выполняет sign in через `auth.<domain>`
2. Web app загружает workspace data из `api.<domain>`
3. AI chat requests проходят через `/chat/local-turn`
4. Review submissions обновляют состояние scheduler

### iOS

1. iOS app сначала пишет в local SQLite
2. Local changes ставятся в outbox
3. Sync отправляет changes через `/v1/workspaces/{workspaceId}/sync/push`
4. Sync скачивает remote updates через `/v1/workspaces/{workspaceId}/sync/pull`
5. Local database применяет changes и продвигает sync cursor

### External Agents

1. Agents начинают с `GET /v1/`
2. Первый OTP stage работает на `auth.<domain>`
3. Agent получает long-lived API key
4. Agent загружает `/v1/agent/me`, перечисляет workspaces, при необходимости выбирает один и затем использует `/v1/agent/sql`

## Scheduling

Flashcards использует FSRS как review scheduler.

Implementation notes:

- Backend и iOS держат FSRS implementations согласованными
- Web app повторяет scheduling data contract, но не поставляет третью реализацию scheduler
- Workspace-level scheduler settings включают desired retention, learning steps, relearning steps, max interval и fuzz
- Actual review timestamp приходит из `reviewedAtClient`

Для подробного contract см. [main repository FSRS scheduling logic](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Authentication

- Email OTP через Cognito
- Shared-domain session cookies для hosted web app
- Agent OTP bootstrap на `auth.<domain>` с выдачей long-lived ApiKey
- `AUTH_MODE=none` для local development
- `AUTH_MODE=cognito` для production-like auth

## Deployment Shape

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres on AWS RDS

Root domain может оставаться отдельным marketing site. Если он не используется на этапе bootstrap, infrastructure может временно redirect его на `app.<domain>`.
