---
title: Справочник API
description: Внешний API для AI-агентов: discovery, вход по OTP, настройка workspace и опубликованный SQL-интерфейс.
---

## Обзор

На этой странице описан текущий внешний контракт для AI-агентов в Flashcards.

Начните с основного discovery-эндпоинта:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Тот же ответ доступен и по `GET /v1/agent`, но `/v1/` является основной публичной точкой входа.

Из этого ответа агент узнаёт, как:

- начать вход по OTP-коду из email
- обменять OTP на долгоживущий API-ключ
- загрузить контекст аккаунта
- создать workspace или выбрать существующий
- продолжить работу через опубликованный SQL-интерфейс

## Опубликованные спецификации

Основные URL спецификаций для внешнего интерфейса агентов:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

Также доступны эквивалентные алиасы в корне:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Начальная аутентификация

Начальный OTP-поток работает через сервис аутентификации:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

Последовательность действий:

1. Вызовите `GET /v1/`.
2. Отправьте email пользователя в `send-code`.
3. Прочитайте `otpSessionToken` из ответа.
4. Запросите у пользователя последний 8-значный код из письма.
5. Вызовите `verify-code`, передав `code`, `otpSessionToken` и `label`.
6. Сохраните возвращённый API-ключ вне памяти чата.

Рекомендуемая переменная окружения:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Для аутентифицированных запросов используется заголовок:

```text
Authorization: ApiKey <key>
```

Пример начальной последовательности:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Интерфейс агента после входа

После подтверждения кода агенту доступны следующие эндпоинты:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql`

Обычно начальная настройка выглядит так:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. При необходимости `POST /v1/agent/workspaces` с `{"name":"Personal"}`
4. При необходимости `POST /v1/agent/workspaces/{workspaceId}/select`
5. Затем используйте `POST /v1/agent/sql`

Выбор workspace выполняется явно для каждого подключения по API-ключу. Агентам следует опираться на текст в `instructions` и значение `docs.openapiUrl`, которое возвращается в каждой обёртке ответа, а не пытаться угадывать следующий шаг.

## SQL-интерфейс

`POST /v1/agent/sql` — это общий интерфейс чтения и записи для внешних агентов.

Он намеренно ограничен и не предоставляет полный PostgreSQL.

Сейчас доступны следующие семейства выражений:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Сейчас опубликованы такие логические ресурсы:

- `workspace`
- `cards`
- `decks`
- `review_events`

Примечания:

- по умолчанию `LIMIT` равен `100`, и это же максимальное значение
- если нужна стабильная пагинация, используйте `ORDER BY`
- для изучения схемы используйте `SHOW TABLES` или `DESCRIBE cards`
- после выбора workspace внешний контракт ограничен этим workspace

Пример запроса:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Пример запроса карточек:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Пример изменения данных:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

## API для людей и синхронизации

В Flashcards также есть отдельные API для пользовательских клиентов и offline-first синхронизации, но они не являются основным контрактом для внешних агентов:

- браузерные сценарии используют cookies общего домена и защиту CSRF
- offline-first клиенты используют реализованные sync-маршруты `/v1/workspaces/{workspaceId}/sync/push` и `/v1/workspaces/{workspaceId}/sync/pull`
- sync-маршруты намеренно не включены во внешний OpenAPI-интерфейс агентов
