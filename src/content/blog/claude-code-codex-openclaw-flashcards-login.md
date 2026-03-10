---
title: "How to Let Claude Code, Codex, or OpenClaw Log In to Flashcards for You"
description: "Flashcards exposes an open-source agent login flow built around one discovery URL, email OTP, and a long-lived API key. Give your agent one link, send back the 8-digit email code, and let it finish account and workspace setup."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
  - "open source api authentication"
---

Most login flows still assume the human will do all the setup work by hand.

Open a login page. Wait for the code. Copy the token. Create an API key. Paste it into a tool. Explain the docs to your agent. Fix the session when something goes wrong.

That is exactly the kind of work a tool should handle for you.

In [Flashcards](https://flashcards-open-source-app.com/), we now expose an open-source agent login flow that starts from one discovery URL:

`https://auth.flashcards-open-source-app.com/api/agent`

Give that URL to Claude Code, Codex, or OpenClaw. The agent can inspect the flow, request the email code, verify it, store the API key, load the account, and continue to workspace setup on its own.

The human only needs to do two things:

- share the email address
- send back the latest 8-digit code from the email

That is the whole point.

## One link is enough

The discovery endpoint returns the service description, the auth model, the first action, and the next-step instructions in the same response.

So instead of writing custom onboarding text for every tool, you can just point the agent to the URL and let it follow the returned actions.

```text
GET https://auth.flashcards-open-source-app.com/api/agent
```

At a high level, the agent learns four things immediately:

- this is the Flashcards service
- login and registration both use email OTP
- successful verification returns a long-lived API key
- after login, the next step is account and workspace bootstrap

## What the flow looks like

The sequence is intentionally small.

1. The agent calls the discovery endpoint.
2. The agent sends the user's email to `send-code`.
3. Flashcards emails the 8-digit code and returns an `otpSessionToken`.
4. The agent asks the user for that latest code.
5. The agent verifies the code and receives a long-lived API key.
6. The agent calls `/v1/me` and `/v1/workspaces`.
7. The agent creates or selects the correct workspace and can start doing real work.

That matters because the agent is not stopping at "login succeeded". It can keep going through the rest of the setup flow.

## Example prompt for Claude Code or Codex

This is enough:

```text
Use this Flashcards discovery URL:
https://auth.flashcards-open-source-app.com/api/agent

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

You do not need to manually explain the auth sequence after that. The endpoint already does it.

## Example prompt for OpenClaw

Same idea, slightly more explicit:

```text
Connect my Flashcards account using this URL:
https://auth.flashcards-open-source-app.com/api/agent

Follow the returned actions, keep the API key secure, load my account, then continue to workspace setup.
If verification is needed, ask me for the latest 8-digit code from the email.
```

## Example: discovery response

This is the first request:

```bash
curl https://auth.flashcards-open-source-app.com/api/agent
```

And the response is shaped so terminal agents can follow it without guessing:

```json
{
  "ok": true,
  "data": {
    "service": {
      "name": "flashcards-open-source-app",
      "description": "Offline-first flashcards service with user-owned workspaces and AI-friendly API onboarding."
    },
    "authentication": {
      "type": "email_otp_then_api_key",
      "registerAndLogin": "The same flow works for both new and existing users."
    }
  },
  "actions": [
    {
      "name": "send_code",
      "method": "POST",
      "url": "https://auth.flashcards-open-source-app.com/api/agent/send-code"
    }
  ]
}
```

## Example: send the email code

Once the agent has the user's email, it starts the OTP step:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

The server sends the email and returns a short-lived verification session:

```json
{
  "ok": true,
  "data": {
    "email": "you@example.com",
    "otpSessionToken": "...",
    "expiresInSeconds": 180
  },
  "actions": [
    {
      "name": "verify_code",
      "method": "POST",
      "url": "https://auth.flashcards-open-source-app.com/api/agent/verify-code"
    }
  ],
  "instructions": "A verification code has been sent to the user's email. Ask for the 8-digit code from the email, then call verify_code with code, otpSessionToken, and a label for this agent connection."
}
```

At this point the agent pauses only long enough to ask the user for the latest code from their inbox.

## Example: verify the code and get the API key

After the user sends back the email code, the agent can finish the login:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

Successful verification returns a long-lived API key and the next action:

```json
{
  "ok": true,
  "data": {
    "apiKey": "...",
    "authorizationScheme": "ApiKey",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1"
  },
  "actions": [
    {
      "name": "load_account",
      "method": "GET",
      "url": "https://api.flashcards-open-source-app.com/v1/me",
      "auth": {
        "scheme": "ApiKey"
      }
    }
  ]
}
```

That is the handoff point where the agent stops thinking about auth and starts using the account.

## Example: load account and continue to workspaces

The next request is a normal authenticated API call:

```bash
curl https://api.flashcards-open-source-app.com/v1/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

The response tells the agent to keep going into workspace bootstrap:

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
  "actions": [
    {
      "name": "list_workspaces",
      "method": "GET",
      "url": "https://api.flashcards-open-source-app.com/v1/workspaces",
      "auth": {
        "scheme": "ApiKey"
      }
    }
  ]
}
```

From there the agent can:

- load all workspaces
- create the first workspace if none exist
- select the correct workspace if several exist

That makes the login flow useful in practice, not just technically correct.

## Why this is better than manual API key setup

The usual API onboarding pattern is still awkward:

- log in in the browser
- open settings
- create a token manually
- copy it into another tool
- keep the docs open so the tool knows what to do next

This flow cuts out most of that.

The user proves identity through email OTP. The service issues a long-lived API key directly to the agent. The same response format keeps telling the agent what comes next.

That is simpler for the user and easier to automate.

## This is open source

Flashcards is open source, so you can inspect the whole flow instead of treating it like a black box.

- Repository: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Agent discovery route: [apps/auth/src/routes/agentInfo.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentInfo.ts)
- Agent send-code route: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Agent verify-code route: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- Account and workspace bootstrap envelopes: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

If you care about open-source API authentication, email OTP login, or agent onboarding design, those files are the important ones to read.

## Try it

If you want to test the flow, give your agent this URL:

`https://auth.flashcards-open-source-app.com/api/agent`

Then let it handle the rest.

Useful links:

- [Flashcards website](https://flashcards-open-source-app.com/)
- [Hosted app](https://app.flashcards-open-source-app.com/)
- [Getting started](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub repository](https://github.com/kirill-markin/flashcards-open-source-app)

If the product is open source and the auth flow is narrow enough, "let the agent handle it" should actually work. That is what this flow is for.
