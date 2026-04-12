---
title: "Как дать Claude Code, Codex или OpenClaw войти в Flashcards за вас"
description: "Flashcards предоставляет агентам сценарий входа с открытым исходным кодом: одна discovery-ссылка, одноразовый код по email и долгоживущий API-ключ. Дайте агенту один URL, отправьте ему последний 8-значный код из письма, и он сам завершит настройку аккаунта и рабочего пространства."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
  - "open source api authentication"
---

Большинство сценариев входа до сих пор устроены так, будто всю подготовку человек должен делать вручную.

Открыть страницу входа. Дождаться кода. Скопировать токен. Создать API-ключ. Вставить его в другой инструмент. Объяснить агенту документацию. Разбираться с сессией, если что-то пошло не так.

Именно такую работу инструмент и должен брать на себя.

В [Flashcards](https://flashcards-open-source-app.com/) мы открыли для агентов сценарий входа с открытым исходным кодом, который начинается с одной discovery-ссылки:

`https://api.flashcards-open-source-app.com/v1/`

Это каноническая точка входа. Тот же ответ discovery доступен и по адресу `https://api.flashcards-open-source-app.com/v1/agent`, но текущий контракт начинается именно с `/v1/`.

Передайте этот URL Claude Code, Codex или OpenClaw. Агент сам сможет разобрать сценарий, запросить код из письма, подтвердить его, сохранить API-ключ, загрузить данные аккаунта и продолжить настройку рабочего пространства.

От человека нужны только две вещи:

- сообщить email-адрес
- переслать последний 8-значный код из письма

В этом и состоит вся идея.

## Одной ссылки достаточно

Discovery endpoint в одном ответе возвращает описание сервиса, модель авторизации, первое действие и инструкции по следующим шагам.

Поэтому вместо отдельной инструкции по подключению для каждого инструмента можно просто дать агенту URL и позволить ему следовать инструкциям из ответа.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

На высоком уровне агент сразу узнает четыре вещи:

- перед ним сервис Flashcards
- и вход, и регистрация работают через одноразовый код по email
- после успешной проверки сервис возвращает долгоживущий API-ключ
- после входа следующим шагом идет инициализация аккаунта и рабочего пространства

## Как выглядит сценарий

Последовательность намеренно сделана короткой.

1. Агент вызывает discovery endpoint.
2. Агент отправляет email пользователя в `send-code`.
3. Flashcards отправляет 8-значный код по почте и возвращает `otpSessionToken`.
4. Агент просит пользователя прислать этот последний код.
5. Агент подтверждает код и получает долгоживущий API-ключ.
6. Агент вызывает `/v1/agent/me` и `/v1/agent/workspaces`.
7. Агент создает или выбирает нужное рабочее пространство и затем продолжает через `/v1/agent/sql`.

Это важно, потому что агент не останавливается на этапе "вход выполнен". Он может пройти остальную часть настройки и сразу перейти к реальным чтениям и записям.

## Пример запроса для Claude Code или Codex

Этого достаточно:

```text
Используй этот discovery URL Flashcards:
https://api.flashcards-open-source-app.com/v1/

Войди в мой аккаунт Flashcards, загрузи контекст аккаунта и выбери или создай нужное рабочее пространство.
Спрашивай меня только о последнем 8-значном коде из письма, когда это потребуется по сценарию.
```

После этого вам не нужно вручную объяснять агенту последовательность авторизации. Точка входа уже передает все необходимое сама.

## Пример запроса для OpenClaw

Та же идея, только чуть более явно:

```text
Подключи мой аккаунт Flashcards по этому URL:
https://api.flashcards-open-source-app.com/v1/

Следуй инструкциям из ответа, храни API-ключ безопасно, загрузи мой аккаунт и затем продолжи настройку рабочего пространства.
Если потребуется подтверждение, попроси у меня последний 8-значный код из письма.
```

## Пример: ответ discovery endpoint

Первый запрос выглядит так:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

А ответ специально устроен так, чтобы терминальные агенты могли следовать ему без догадок:

```json
{
  "ok": true,
  "data": {
    "service": {
      "name": "flashcards-open-source-app",
      "version": "v1",
      "description": "Offline-first flashcards service with user-owned workspaces and a compact SQL agent surface."
    },
    "authentication": {
      "type": "email_otp_then_api_key",
      "sendCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/send-code",
      "verifyCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/verify-code"
    },
    "capabilitiesAfterLogin": [
      "Load account context",
      "Select a workspace",
      "Inspect the published SQL surface through OpenAPI and SQL introspection",
      "Read and write cards and decks through /agent/sql"
    ],
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "surface": {
      "accountUrl": "https://api.flashcards-open-source-app.com/v1/agent/me",
      "workspacesUrl": "https://api.flashcards-open-source-app.com/v1/agent/workspaces",
      "sqlUrl": "https://api.flashcards-open-source-app.com/v1/agent/sql"
    }
  },
  "instructions": "Start with POST https://auth.flashcards-open-source-app.com/api/agent/send-code using the user's email, then POST https://auth.flashcards-open-source-app.com/api/agent/verify-code to obtain an API key. After login, call GET https://api.flashcards-open-source-app.com/v1/agent/me, then GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100. If no workspace is selected for this API key, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select or create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After workspace bootstrap, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for all shared card and deck reads and writes. Use https://api.flashcards-open-source-app.com/v1/agent/openapi.json for the full contract. The SQL surface is intentionally limited and is not full PostgreSQL.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

## Пример: отправка кода на email

Как только у агента появляется email пользователя, он запускает этап OTP:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

Сервер отправляет письмо и возвращает короткоживущую сессию верификации:

```json
{
  "ok": true,
  "data": {
    "email": "you@example.com",
    "otpSessionToken": "...",
    "expiresInSeconds": 180,
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1"
  },
  "instructions": "A verification code has been sent to the user's email. Ask for the 8-digit code from the email, then call verify_code with code, otpSessionToken, and a label for this agent connection. Read payload from data.* and do not expect resource fields at the top level. Select the next endpoint from instructions and confirm it with actions.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

На этом этапе агент делает паузу только затем, чтобы попросить пользователя прислать свежий код из входящих.

## Пример: подтверждение кода и получение API-ключа

Когда пользователь отправляет код из письма, агент может завершить вход:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

Успешная проверка возвращает долгоживущий API-ключ и инструкции по следующим шагам:

```json
{
  "ok": true,
  "data": {
    "apiKey": "fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS",
    "authorizationScheme": "ApiKey",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "connection": {
      "connectionId": "connection-1",
      "label": "codex-import-bot",
      "createdAt": "2026-03-11T08:55:00.000Z",
      "lastUsedAt": null,
      "revokedAt": null
    }
  },
  "instructions": "Store this API key outside chat memory now. Use it in the Authorization header as 'ApiKey <key>'. Next call GET /v1/agent/me to load account context. Then call GET /v1/agent/workspaces?limit=100. If exactly one workspace exists, select it if needed. If no workspace exists, create one with POST /v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST /v1/agent/sql for all data access. Use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

Именно в этот момент агент перестает думать об авторизации и начинает работать с аккаунтом.

Сохраните этот ключ вне памяти чата сразу же. Самый чистый вариант: один раз экспортировать его в окружение и затем просто переиспользовать:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## Пример: загрузка аккаунта и переход к рабочим пространствам

Следующий запрос уже выглядит как обычный аутентифицированный вызов API:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

Ответ подсказывает агенту продолжать инициализацию рабочего пространства:

```json
{
  "ok": true,
  "data": {
    "userId": "user-123",
    "selectedWorkspaceId": null,
    "authTransport": "api_key",
    "profile": {
      "email": "you@example.com",
      "locale": "en",
      "createdAt": "2026-03-10T12:00:00.000Z"
    }
  },
  "instructions": "Next call GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100 to inspect available workspaces for this API key. If data.nextCursor is not null, continue with the same endpoint and cursor=data.nextCursor until it becomes null. If no workspace is selected, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select. If no workspace exists, create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for reads, writes, and SQL introspection. Read payload from data.* and use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

Дальше агент уже может:

- загрузить все рабочие пространства
- создать первое рабочее пространство, если их пока нет
- выбрать нужное рабочее пространство, если их несколько
- изучить опубликованный контракт по адресу `/v1/agent/openapi.json`
- использовать `POST /v1/agent/sql` для чтения, записи и SQL-интроспекции

Именно поэтому такой вход полезен на практике, а не просто "технически корректен".

Корневые алиасы спецификации по адресам `/v1/openapi.json` и `/v1/swagger.json` тоже существуют, но ссылки в документации для агентов намеренно указывают на `/v1/agent/openapi.json` и `/v1/agent/swagger.json`.

## Почему это лучше ручной настройки API-ключа

Обычный процесс подключения к API до сих пор выглядит неудобно:

- войти через браузер
- открыть настройки
- вручную создать токен
- скопировать его в другой инструмент
- держать документацию под рукой, чтобы инструмент понимал, что делать дальше

Этот сценарий убирает большую часть лишней ручной работы.

Пользователь подтверждает личность через одноразовый код по email. Сервис выдает долгоживущий API-ключ напрямую агенту. Тот же формат ответа продолжает подсказывать агенту, что делать следующим шагом.

Для пользователя это проще, а для автоматизации гораздо удобнее.

## Проект с открытым исходным кодом

Flashcards - проект с открытым исходным кодом, поэтому весь сценарий можно проверить по исходникам, а не воспринимать его как черный ящик.

- Репозиторий: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Маршрут discovery для агента: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- Маршрут send-code для агента: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Маршрут verify-code для агента: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- Ответы для инициализации аккаунта и рабочего пространства: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

Если вам важны открытая реализация аутентификации API, вход через одноразовый код по email или дизайн сценариев подключения для агентов, именно эти файлы стоит читать в первую очередь.

## Попробуйте сами

Если хотите протестировать сценарий, просто дайте своему агенту этот URL:

`https://api.flashcards-open-source-app.com/v1/`

А дальше позвольте ему сделать остальное.

Полезные ссылки:

- [Flashcards website](https://flashcards-open-source-app.com/)
- [Hosted app](https://app.flashcards-open-source-app.com/)
- [Getting started](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub repository](https://github.com/kirill-markin/flashcards-open-source-app)

Если продукт с открытым исходным кодом, а сценарий авторизации достаточно узкий и понятный, фраза "пусть агент сделает это сам" должна действительно работать. Именно для этого этот поток и был сделан.
