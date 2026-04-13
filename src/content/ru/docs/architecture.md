---
title: Архитектура
description: Обзор системы, публичные домены, поддерживаемые клиенты и текущий поток данных в offline-first модели.
---

## Обзор системы

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Принципы

1. Для `app`, `api` и `auth` используются отдельные публичные домены
2. Postgres остаётся источником истины
3. iOS-приложение работает по модели offline-first: локальная SQLite плюс синхронизация
4. Веб-приложение, iOS-приложение и внешний агентский интерфейс используют одну и ту же модель рабочих пространств
5. Внешние агенты начинают работу с `GET https://api.flashcards-open-source-app.com/v1/`

## Поддерживаемые клиенты

- Веб-приложение на `app.flashcards-open-source-app.com`
- iOS-приложение в основном репозитории с локальным хранилищем SQLite
- Android-приложение в Google Play
- Внешние агенты через discovery, OTP bootstrap и `Authorization: ApiKey`

## Модель данных

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Поток данных

### Веб

1. Браузер выполняет вход через `auth.<domain>`.
2. Веб-приложение загружает данные рабочего пространства из `api.<domain>`.
3. Запросы AI-чата проходят через `/chat/local-turn`.
4. При записи результатов повторения обновляется состояние планировщика.

### iOS

1. iOS-приложение сначала записывает данные в локальную SQLite.
2. Локальные изменения ставятся в очередь outbox.
3. Синхронизация отправляет изменения через `/v1/workspaces/{workspaceId}/sync/push`.
4. Синхронизация получает удалённые обновления через `/v1/workspaces/{workspaceId}/sync/pull`.
5. Локальная база данных применяет изменения и продвигает курсор синхронизации.

### Внешние агенты

1. Агенты начинают с `GET /v1/`.
2. OTP bootstrap выполняется на `auth.<domain>`.
3. Агент получает долгоживущий ключ API.
4. Агент загружает `/v1/agent/me`, получает список рабочих пространств, при необходимости выбирает одно и затем использует `/v1/agent/sql`.

## Планирование повторений

В Flashcards за планирование повторений отвечает FSRS.

Примечания по реализации:

- На backend и в iOS поддерживаются согласованные реализации FSRS
- Веб-приложение повторяет контракт данных планировщика, но не содержит третью отдельную реализацию
- Настройки планировщика на уровне рабочего пространства включают desired retention, learning steps, relearning steps, maximum interval и fuzz
- Фактическое время повторения берётся из `reviewedAtClient`

Подробный контракт описан в [FSRS scheduling logic in the main repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Аутентификация

- Email OTP через Cognito
- Cookies браузерной сессии, общие для всего домена, для размещённого веб-приложения
- OTP bootstrap для агентов на `auth.<domain>` с выдачей долгоживущего ApiKey
- `AUTH_MODE=none` для локальной разработки
- `AUTH_MODE=cognito` для аутентификации, приближенной к боевой среде

## Схема развертывания

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres в AWS RDS

Корневой домен может оставаться на отдельном маркетинговом сайте. Если на этапе начального запуска он свободен, инфраструктура может временно перенаправить его на `app.<domain>`.
