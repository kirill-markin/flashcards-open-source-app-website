---
title: "Как поручить Claude Code, Codex или OpenClaw вход в Flashcards"
description: "Flashcards предоставляет open-source login flow для агентов, который начинается с одного discovery URL, email OTP и long-lived API key. Дайте agent один URL, затем отправьте 8-digit email code, и он завершит account и workspace setup."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
---

Большинство login flows до сих пор предполагают, что все setup steps человек выполнит вручную.

Открыть login page, дождаться code, скопировать key, создать API key, вставить ее в другой tool, объяснить docs agent и разбираться с session, когда что-то ломается.

Именно такую работу инструмент должен брать на себя.

В [Flashcards](https://flashcards-open-source-app.com/) теперь есть open-source login flow для агентов, который начинается с одного discovery URL:

`https://api.flashcards-open-source-app.com/v1/`

Это primary entry point. Тот же payload доступен и по `https://api.flashcards-open-source-app.com/v1/agent`, но current contract начинается с `/v1/`.

Передайте этот URL Claude Code, Codex или OpenClaw. Agent сможет изучить flow, запросить email code, проверить его, сохранить API key, загрузить account и завершить workspace setup самостоятельно.

Человеку нужны только две вещи:

- передать email address
- отправить последний 8-digit email code

Именно в этом и состоит идея.

## Одного URL достаточно

Discovery endpoint возвращает service description, auth model, first action и next-step instructions в одном response.

Вместо отдельного setup prompt для каждого tool можно просто направить agent на URL и позволить ему следовать returned instructions.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

На высоком уровне agent сразу понимает, что:

- это service Flashcards
- login и signup используют email OTP
- successful verification возвращает long-lived API key
- следующий шаг после login — account и workspace bootstrap

## Как выглядит flow

Последовательность намеренно короткая:

1. Agent вызывает discovery endpoint.
2. Agent отправляет user email в `send-code`.
3. Flashcards отправляет 8-digit code и возвращает `otpSessionToken`.
4. Agent просит пользователя прислать последний code.
5. Agent проверяет code и получает long-lived API key.
6. Он вызывает `/v1/agent/me` и `/v1/agent/workspaces`.
7. Создает или выбирает нужный workspace и продолжает через `/v1/agent/sql`.

Важно, что agent не останавливается на фразе “login successful”. Он продолжает setup до конца и затем начинает реальную работу с данными.

## Пример prompt для Claude Code или Codex

Достаточно такого текста:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

После этого вам не нужно вручную объяснять auth sequence. Discovery endpoint уже делает это.

## Первый request

Первый call:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

Затем agent начинает OTP stage:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

После того как пользователь отправит последний code, agent может завершить verification:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Claude Code on MacBook"
  }'
```

Successful response возвращает long-lived API key. Сразу сохраните его вне conversation memory:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## Что происходит дальше

После verification agent переходит от auth к использованию account:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Если нужного workspace нет, `POST /v1/agent/workspaces`
4. При необходимости `POST /v1/agent/workspaces/{workspaceId}/select`
5. Затем `POST /v1/agent/sql`

Таким образом URL становится не просто login gateway, а началом всего пути, который делает agent способным работать прямо внутри вашего account.
