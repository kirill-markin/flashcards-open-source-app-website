---
title: Справочник API
description: "Внешний API для агентов ИИ: discovery, первичная аутентификация по OTP, настройка workspace и опубликованные SQL-интерфейсы чтения и записи."
---

## Обзор

На этой странице описан текущий внешний контракт Flashcards для агентов ИИ.

Начинайте с канонической точки входа discovery:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Тот же ответ discovery доступен и по `GET /v1/agent`, но основная публичная точка входа — именно `/v1/`.

Ответ discovery подсказывает агенту, как:

- запустить вход по одноразовому коду из письма
- обменять OTP-код на долгоживущий API-ключ
- получить контекст аккаунта
- создать workspace или выбрать существующий
- продолжить работу через опубликованный SQL-интерфейс

## Опубликованные спецификации

Основные URL спецификаций для внешнего интерфейса агентов:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`

В корне также доступны эквивалентные алиасы:

- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

## Первичная аутентификация

Первичный OTP-поток выполняется через сервис аутентификации:

- `POST https://auth.flashcards-open-source-app.com/api/agent/send-code`
- `POST https://auth.flashcards-open-source-app.com/api/agent/verify-code`

Последовательность выглядит так:

1. Вызовите `GET /v1/`.
2. Отправьте email пользователя в `send-code`.
3. Прочитайте `otpSessionToken` из ответа.
4. Попросите пользователя сообщить последний 8-значный код из письма.
5. Вызовите `verify-code`, передав `code`, `otpSessionToken` и `label`.
6. Сохраните возвращённый API-ключ вне памяти чата.

Рекомендуемая переменная окружения:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

В аутентифицированных запросах используется заголовок:

```text
Authorization: ApiKey <key>
```

Пример первичной последовательности:

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
- `POST /v1/agent/sql/query` (только чтение)
- `POST /v1/agent/sql/execute` (запись)

Обычно первичная настройка выглядит так:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. При необходимости `POST /v1/agent/workspaces` с `{"name":"Personal"}`
4. При необходимости `POST /v1/agent/workspaces/{workspaceId}/select`
5. Затем используйте `POST /v1/agent/sql/query` для чтения и `POST /v1/agent/sql/execute` для записи

Выбор workspace выполняется явно для каждого подключения по API-ключу. Агентам следует ориентироваться на текст `instructions` и поле `docs.openapiUrl`, которые возвращаются в каждом таком ответе, а не пытаться угадывать следующий шаг.

## SQL-интерфейс

`POST /v1/agent/sql/query` — интерфейс строго только для чтения (`SHOW TABLES`, `DESCRIBE`, `SELECT`), а `POST /v1/agent/sql/execute` — интерфейс записи (`INSERT`, `UPDATE`, `DELETE`); один вызов должен содержать либо только чтение, либо только запись.

Он намеренно ограничен и не является полноценным PostgreSQL. Эта документация
описывает только поддерживаемый диалект, а не справочник совместимости с
PostgreSQL.

Ни один путь чтения не исправляет данные, не пересчитывает расписание и не
изменяет состояние карточек. Для любой записи используйте
`POST /v1/agent/sql/execute`.

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

- по умолчанию `LIMIT` равен `100`, и это же его максимальное значение
- если нужна стабильная пагинация, используйте `ORDER BY`
- для изучения схемы используйте `SHOW TABLES` или `DESCRIBE cards`
- после выбора workspace внешний агентский контракт ограничен этим workspace

Пример запроса:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Пример запроса карточек:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Пример изменения данных:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Также доступен удалённый MCP-сервер по адресу `https://mcp.flashcards-open-source-app.com/mcp`, использующий OAuth 2.1 (Dynamic Client Registration + PKCE). Он предоставляет то же разделение в виде двух инструментов — `sql_query` (строго только чтение) и `sql_execute` (запись), а также строго доступный только для чтения `list_workspaces`.

### Безопасность и область действия

SQL-интерфейс — это изолированный диалект с проверкой на уровне парсера, а не полноценный PostgreSQL. Действуют такие ограничения:

- **Закрытый список выражений**: только `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` и `SELECT` для чтения и `INSERT`, `UPDATE` и `DELETE` для записи. Всё остальное отклоняется на этапе разбора.
- **Ограниченные ресурсы**: выражения могут обращаться только к ресурсам `workspace`, `cards`, `decks` и `review_events`.
- **Ограничение по workspace**: каждое выражение ограничено выбранным workspace, без доступа к данным других арендаторов.
- **Лимиты**: до `100` строк на выражение, до `50` выражений в пакете и ограничение результата примерно в `12k` токенов. Пакеты изменений применяются атомарно.
- **Разделение чтения и записи**: `sql_query` и `list_workspaces` работают строго только на чтение (`readOnlyHint`) и не исправляют данные, не пересчитывают расписание и не изменяют состояние карточек. `sql_execute` — единственный инструмент записи и выполняет запись (`destructiveHint`); один вызов должен содержать либо только чтение, либо только запись.

## API для пользователей и синхронизации

У Flashcards также есть отдельные API для пользовательских клиентов и offline-first синхронизации, но для внешних агентов это не основной контракт:

- браузерные сценарии используют cookie общего домена и защиту CSRF
- offline-first клиенты используют реализованные маршруты синхронизации `/v1/workspaces/{workspaceId}/sync/push` и `/v1/workspaces/{workspaceId}/sync/pull`
- маршруты синхронизации намеренно не входят во внешний OpenAPI-контракт для агентов
