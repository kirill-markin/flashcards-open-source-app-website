---
title: शुरुआत
description: Hosted web app से शुरू करें, किसी agent को discovery URL से जोड़ें, या stack को खुद locally चलाएं।
---

## Hosted Web App

शुरू करने का सबसे तेज़ तरीका hosted web app है:

1. [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com) खोलें
2. Passwordless email OTP के साथ sign in करें
3. Cards बनाएं, due items review करें, और workspace data तथा file attachments के साथ AI chat इस्तेमाल करें

Hosted path के लिए installation या server setup की जरूरत नहीं है।

## Agent Setup

अगर आप Claude Code, Codex, या OpenClaw को सीधे connect करना चाहते हैं, तो यहां से शुरू करें:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

यह discovery response agent को email OTP login, long-lived API key creation, account loading, workspace bootstrap, और published SQL surface तक पहुंचने का तरीका बताती है।

वही payload `GET /v1/agent` से भी उपलब्ध है, लेकिन `/v1/` primary public entry point है।

## Self-Hosting

अगर आप अपनी copy चलाना पसंद करते हैं, तो [self-hosting guide](/docs/self-hosting/) देखें।

## आज आपको क्या मिलता है

- Cards, review, और AI chat के लिए hosted web app
- Main repository में local SQLite और offline-first sync वाला iOS client
- अलग `api` और `auth` domains पर shared backend और auth services
- Discovery, OTP, और ApiKey auth के जरिए external agent setup
- Postgres को source of truth मानते हुए AWS पर open-source deployment path

## Repository Direction

Project offline-first दिशा में बनाया गया है।

आज repository में web app, iOS app, auth service, backend API, external agent flow, और Google Play पर published Android app शामिल हैं।
