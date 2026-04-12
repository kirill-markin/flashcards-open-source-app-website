---
title: API Reference
description: Внешний agent API для discovery, OTP bootstrap, настройки workspace и published SQL surface.
---

## Overview

Эта страница документирует current external contract для AI agents в Flashcards.

Primary discovery entry point:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Тот же payload также доступен через `GET /v1/agent`, но `/v1/` — primary public entry point.

Discovery response сообщает agent, как:

- начать email OTP login
- обменять OTP на long-lived API key
- загрузить account context
- создать или выбрать workspace
- перейти к published SQL surface

## Published Specs

Основные spec URLs внешнего agent surface:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

Есть и root aliases:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Auth Bootstrap

Первый OTP stage работает на auth service:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

Flow:

1. Выполните `GET /v1/`
2. Отправьте user email в `send-code`
3. Прочитайте `otpSessionToken` из response
4. Попросите у user последний 8-digit email code
5. Вызовите `verify-code` с `code`, `otpSessionToken` и `label`
6. Сохраните returned API key вне conversation memory

Suggested environment variable:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Authenticated requests use:

```text
Authorization: ApiKey <key>
```

## Post-Login Agent Surface

После verification current surface выглядит так:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

Typical bootstrap:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. При необходимости `POST /v1/agent/workspaces` с `{"name":"Personal"}`
4. При необходимости `POST /v1/agent/workspaces/{workspaceId}/select`
5. Используйте `POST /v1/agent/sql`

Workspace selection явный для каждого API key connection. Agents должны следовать returned `instructions` и `docs.openapiUrl`, а не строить догадки.

## SQL Surface

`POST /v1/agent/sql` — общий read/write surface для external agents.

Он намеренно ограничен и не является full PostgreSQL.

Current command families:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Current published logical resources:

- `workspace`
- `cards`
- `decks`
- `review_events`

Notes:

- Default `LIMIT` равен `100`, maximum тоже `100`
- Используйте `ORDER BY`, если нужна stable pagination
- Для schema discovery используйте `SHOW TABLES` или `DESCRIBE cards`
- External contract после selection ограничен текущим workspace

Example request:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

## Human And Sync APIs

Flashcards также включает отдельные APIs для human clients и offline-first sync, но это не primary contract для external agents:

- Browser flows используют shared-domain cookies с CSRF protection
- Offline-first clients используют sync routes под `/v1/workspaces/{workspaceId}/sync/push` и `/v1/workspaces/{workspaceId}/sync/pull`
- Sync routes намеренно оставлены вне external agent OpenAPI surface
