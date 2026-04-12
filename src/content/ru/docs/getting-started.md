---
title: Начало работы
description: Начните с hosted web app, подключите agent через discovery URL или запустите stack локально сами.
---

## Hosted Web App

Самый быстрый способ начать — hosted web app:

1. Откройте [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. Войдите через passwordless email OTP
3. Создавайте cards, повторяйте due items и используйте AI chat с workspace data и file attachments

Hosted path не требует installation или server setup.

## Agent Setup

Если вы хотите напрямую подключить Claude Code, Codex или OpenClaw, начните с:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Этот discovery response объясняет agent, как пройти email OTP login, создать long-lived API key, загрузить account, выполнить workspace bootstrap и продолжить через published SQL surface.

Тот же payload доступен и через `GET /v1/agent`, но `/v1/` — primary public entry point.

## Self-Hosting

Если вы предпочитаете запускать свою copy, смотрите [Руководство по self-hosting](/docs/self-hosting/).

## Что доступно уже сегодня

- Hosted web app для cards, review и AI chat
- iOS client в основном repository с local SQLite и offline-first sync
- Раздельные backend и auth services на доменах `api` и `auth`
- External agent setup через discovery, OTP и ApiKey auth
- Open-source deployment path в AWS с Postgres как source of truth

## Направление repository

Project спроектирован в offline-first направлении.

Сегодня repository включает web app, iOS app, auth service, backend API, external agent flow и Android app, опубликованное в Google Play.
