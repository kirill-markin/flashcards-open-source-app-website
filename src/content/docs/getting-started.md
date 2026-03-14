---
title: Getting Started
description: Start with the hosted web app, connect an agent through the discovery URL, or run the local stack yourself.
---

## Hosted Web App

The fastest way to start is the hosted web app:

1. Open [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. Sign in with your email using passwordless OTP
3. Create cards, review due items, and use AI chat with workspace data and file attachments

No installation or server setup is required for the hosted path.

## Agent Setup

If you want Claude Code, Codex, or OpenClaw to connect directly, start from:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

That discovery response walks the agent through email OTP login, long-lived API key creation, account loading, workspace bootstrap, and the published SQL surface.

The same payload is also available at `GET /v1/agent`, but `/v1/` is the canonical public entrypoint.

## Self-Hosted

If you prefer to run your own instance, see the [Self-Hosting Guide](/docs/self-hosting/).

## What You Get Today

- Hosted web app for cards, review, and AI chat
- iOS client in the main repository with local SQLite and offline-first sync
- Shared backend and auth services on separate `api` and `auth` domains
- External agent onboarding through discovery, OTP, and ApiKey auth
- Open-source deployment path on AWS with Postgres as the source of truth

## Repository Direction

The project is offline-first.

Today the repository includes the web app, the iOS app, the auth service, the backend API, and the external agent flow. Android is the next major client that is still planned later.
