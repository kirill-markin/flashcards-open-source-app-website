---
title: Справочник API
description: "Внешний API для агентов ИИ: discovery, первичная аутентификация по OTP, настройка workspace и опубликованные SQL-интерфейсы чтения и записи."
---

## Обзор

На этой странице описан текущий внешний контракт Nibomo для агентов ИИ.

Если ваш клиент поддерживает MCP, то [MCP-коннектор](/docs/mcp-connector/) — самый
простой способ подключения, и он даёт доступ к тому же набору данных. На этой странице
описан контракт HTTP discovery, SQL, руководств и повторений, который используют CLI-агенты.

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
- получить справочные руководства и повторять карточки по одной за раз

## Runtime discovery и исходный код

OpenAPI недоступен. Четыре прежних URL спецификаций ниже теперь возвращают одно и то же JSON-уведомление discovery с `"openapiAvailable": false` вместо схемы:

- `https://api.flashcards-open-source-app.com/v1/agent/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/agent/swagger.json`
- `https://api.flashcards-open-source-app.com/v1/openapi.json`
- `https://api.flashcards-open-source-app.com/v1/swagger.json`

Для актуального runtime discovery используйте `GET https://api.flashcards-open-source-app.com/v1/`. В ответе `docs.discoveryUrl` указывает на runtime-маршруты, а `docs.source.agentRoutesUrl` — на детали реализации.

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
- `GET /v1/agent/guide/{topic}` (только чтение)
- `POST /v1/agent/reviews/next` (только чтение)
- `POST /v1/agent/reviews/reveal` (только чтение)
- `POST /v1/agent/reviews/submit` (запись)

Обычно первичная настройка выглядит так:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. При необходимости `POST /v1/agent/workspaces` с `{"name":"Personal"}`
4. При необходимости `POST /v1/agent/workspaces/{workspaceId}/select`
5. Затем используйте `POST /v1/agent/sql/query` для чтения и `POST /v1/agent/sql/execute` для записи

Выбор workspace выполняется явно для каждого подключения по API-ключу. Агентам следует ориентироваться на возвращаемый текст `instructions`, `docs.discoveryUrl` для runtime-маршрутов и `docs.source.agentRoutesUrl` для деталей реализации, а не пытаться угадывать следующий шаг.

SQL-маршруты и маршруты повторений также принимают необязательный `workspaceId` в JSON-теле запроса. Он направляет один вызов в указанный workspace, не меняя выбранный; если его не передать, используется выбранный workspace. Если нет ни выбранного workspace, ни `workspaceId`, эти маршруты отвечают `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-интерфейс

`POST /v1/agent/sql/query` — интерфейс строго только для чтения (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), а `POST /v1/agent/sql/execute` — интерфейс записи (`INSERT`, `UPDATE`, `DELETE`); один вызов должен содержать либо только чтение, либо только запись.

Он намеренно ограничен и не является полноценным PostgreSQL. Эта документация
описывает только поддерживаемый диалект, а не справочник совместимости с
PostgreSQL.

Ни один путь чтения не исправляет данные, не пересчитывает расписание и не
изменяет состояние карточек. Для любой записи карточек и колод используйте
`POST /v1/agent/sql/execute`. SQL не может записывать `review_events` или
состояние FSRS-расписания; записывайте повторения через
`POST /v1/agent/reviews/submit`.

Сейчас доступны следующие семейства выражений:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
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
- каждый SQL-вызов ограничен одним workspace: указанным в теле запроса `workspaceId` или выбранным workspace

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

Также доступен удалённый MCP-сервер по адресу `https://mcp.flashcards-open-source-app.com/mcp`, использующий OAuth 2.1 (Dynamic Client Registration + PKCE). Он предоставляет то же разделение SQL в виде `sql_query` (строго только чтение) и `sql_execute` (запись), а также `list_workspaces`, `get_guide` и инструменты повторения `next_review_card`, `reveal_answer` и `submit_review`; см. [MCP-коннектор](/docs/mcp-connector/).

### Безопасность и область действия

SQL-интерфейс — это изолированный диалект с проверкой на уровне парсера, а не полноценный PostgreSQL. Действуют такие ограничения:

- **Закрытый список выражений**: только `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` и `SELECT` для чтения и `INSERT`, `UPDATE` и `DELETE` для записи. Всё остальное отклоняется на этапе разбора.
- **Ограниченные ресурсы**: выражения могут обращаться только к ресурсам `workspace`, `cards`, `decks` и `review_events`.
- **Ограничение по workspace**: каждое выражение ограничено одним доступным вам workspace — указанным в теле запроса `workspaceId` или выбранным вами workspace, без доступа к данным других арендаторов.
- **Строгие тела запросов**: SQL-маршруты и маршруты повторений отклоняют неизвестное поле в теле запроса, поэтому `workspaceId` с опечаткой приводит к ошибке, а не к выполнению в выбранном workspace.
- **Лимиты**: до `100` строк на выражение, до `50` выражений в пакете и ограничение результата примерно в `12k` токенов. Пакеты изменений применяются атомарно.
- **Разделение чтения и записи**: `sql_query` и `list_workspaces` работают строго только на чтение (`readOnlyHint`) и не исправляют данные, не пересчитывают расписание и не изменяют состояние карточек. `sql_execute` — единственный SQL-инструмент записи и выполняет запись (`destructiveHint`); один вызов должен содержать либо только чтение, либо только запись. SQL не может записывать `review_events` или состояние FSRS-расписания; повторение записывает только `POST /v1/agent/reviews/submit` (в MCP — `submit_review`).

## Руководства

`GET /v1/agent/guide/{topic}` возвращает одно справочное руководство в `data.guide` — тот же текст, который отдаёт MCP-инструмент `get_guide`. Темы:

- `sql_dialect`: полная грамматика SQL, лимиты и примеры
- `card_authoring`: контракт карточки, теги, проверка на дубликаты и форматирование
- `bulk_authoring`: разбиение большого задания на запись на части и проверка результата
- `review_flow`: цикл повторения и оценки

На неизвестную тему маршрут отвечает `400` со списком поддерживаемых тем. Загрузите подходящее руководство перед созданием карточек, массовой записью или запуском повторения и перечитайте `sql_dialect` после отклонённого выражения.

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Повторения

Маршруты повторений позволяют агенту проверять знания учащегося по одной карточке за раз и сохранять каждую оценку в FSRS-расписание карточки. Они принимают те же JSON-аргументы, что и MCP-инструменты повторения:

- `POST /v1/agent/reviews/next` возвращает `card` с `cardId` и `frontText` или `card: null`, если повторять пока нечего. Необязательный `tags` (любой из перечисленных тегов) или `deckId` сужает очередь, но не оба сразу; запрос без тела допустим.
- `POST /v1/agent/reviews/reveal` требует `cardId` и возвращает `backText` этой карточки.
- `POST /v1/agent/reviews/submit` требует `cardId`, сгенерированный клиентом UUID `reviewId`, `rating` со значением `Again`, `Hard`, `Good` или `Easy` и часовой пояс учащегося в формате IANA `reviewedTimeZone`. Сервер проставляет время повторения и возвращает новое расписание карточки, включая `dueAt`, `state`, `reps` и `lapses`.

Все три маршрута принимают необязательный `workspaceId`. Сохраните `reviewId` до отправки, а если не уверены, что отправка прошла, повторите её с идентичным запросом; второе повторение при этом никогда не записывается. Маршруты повторений также могут вернуть:

- `409 REVIEW_EVENT_CONFLICT`: повторение уже записано, а `error.details.reviewSchedule` содержит текущее расписание карточки.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` уже обозначает повторение другой карточки, поэтому ничего не сохранено; отправьте повторение заново с новым `reviewId`.
- `409 REVIEW_STALE`: сохранённое время повторения карточки совпадает с текущим временем сервера или позже него; повторите другую карточку.
- `400 REVIEW_INPUT_INVALID`: аргумент отсутствует, недопустим или не поддерживается, в том числе `tags` вместе с `deckId` или тег, который не используется в workspace.

Пример отправки:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## API для пользователей и синхронизации

У Nibomo также есть отдельные API для пользовательских клиентов и offline-first синхронизации, но для внешних агентов это не основной контракт:

- браузерные сценарии используют cookie общего домена и защиту CSRF
- offline-first клиенты используют реализованные маршруты синхронизации `/v1/workspaces/{workspaceId}/sync/push` и `/v1/workspaces/{workspaceId}/sync/pull`
- маршруты синхронизации отделены от внешнего интерфейса для агентов
