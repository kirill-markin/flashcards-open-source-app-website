---
title: Getting Started
description: Start with the iPhone, iPad, Mac, or Android app, the web app, an AI agent, or your own server.
---

There are several ways to start, from the most popular:

- **iPhone, iPad, and Mac app**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android app**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hosted web app**: [app.nibomo.com](https://app.nibomo.com?locale=en-ca)
- **AI agents**: the [MCP connector](/docs/mcp-connector/) or the API at `https://api.nibomo.com/v1/`
- **Self-hosting**: the [Self-Hosting Guide](/docs/self-hosting/)

## Mobile and Desktop Apps

Install the native app for your device:

- iPhone, iPad, and Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

The apps keep your cards on the device, so you can review offline, and sync when you are back online. You can start as a guest and sign in later.

### Home Screen Widgets

The Nibomo app adds a Review widget to iPhone, iPad, Mac, and Android. It comes in three sizes:

- **Small**: how many cards are due and your study streak
- **Medium**: how many cards are due and the question on your next card
- **Large**: how many cards are due, your next question, and your streak

When nothing is due, the widget shows "All done" and when the next card is due. It never shows an answer. Tap the widget to open Review; a Medium or Large widget opens Review on the card it shows. Widgets are free for everyone, including guests.

Eight more widgets show your study progress: Activity, Year, Today, Reviews, Streaks, Calendar, Coming up, and Dashboard. On iPhone and iPad, you can also put the Cards due widget on the Lock Screen; the [widget guide](/blog/flashcard-widget/) shows each one.

To add one on iPhone, iPad, or Mac, open the widget gallery, choose Nibomo, and pick a size. On Android, add a Nibomo widget from the widgets list, then resize it; the layout follows the size.

## Hosted Web App

The fastest way to start is the hosted web app:

1. Open [app.nibomo.com](https://app.nibomo.com?locale=en-ca)
2. Sign in with your email using passwordless OTP
3. Create cards, review due items, and use AI chat with workspace data and file attachments

No installation or server setup is required for the hosted path.

## Agent Setup

MCP clients such as Claude, ChatGPT, and Cursor can connect through the [MCP connector guide](/docs/mcp-connector/).

If you want Claude Code, Codex, or OpenClaw to connect directly, start from:

```text
GET https://api.nibomo.com/v1/
```

That discovery response walks the agent through email OTP login, long-lived API key creation, account loading, workspace bootstrap, and the published SQL surface.

The same payload is also available at `GET /v1/agent`, but `/v1/` is the canonical public entrypoint.

## Self-Hosted

If you prefer to run your own instance, see the [Self-Hosting Guide](/docs/self-hosting/).

## What You Get Today

- Hosted web app for cards, review, and AI chat
- Native iPhone, iPad, Mac, and Android apps with local SQLite storage and offline-first sync
- Shared backend and auth services on separate `api` and `auth` domains
- External agent onboarding through discovery, OTP, and ApiKey auth
- Open-source deployment path on AWS with Postgres as the source of truth

## Repository Direction

The project is offline-first.

Today the repository includes the web app, the iOS app, the auth service, the backend API, the external agent flow, and the Android app published on Google Play.
