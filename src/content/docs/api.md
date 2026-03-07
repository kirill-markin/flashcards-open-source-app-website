---
title: API Reference
description: Current web and auth endpoints for sessions, cards, review queue, and reviews.
---

## Overview

The current public API is a focused application API for the Flashcards web client. It is not a generic SQL endpoint. The existing routes cover session discovery, card reads and writes, review queue reads, review submission, and the OTP auth flow.

## Browser Session API

Base URL:

```bash
https://api.flashcards-open-source-app.com/v1
```

Implemented routes:

- `GET /me`
- `GET /cards`
- `POST /cards`
- `GET /review-queue?limit=20`
- `POST /reviews`

Example card creation request:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/cards \
  -H "Content-Type: application/json" \
  -H "Cookie: session=..." \
  -H "X-CSRF-Token: ..." \
  -d '{"frontText":"What is Hono?","backText":"A small web framework"}'
```

Example review submission request:

```bash
curl -X POST https://api.flashcards-open-source-app.com/v1/reviews \
  -H "Content-Type: application/json" \
  -H "Cookie: session=..." \
  -H "X-CSRF-Token: ..." \
  -d '{"cardId":"<card-id>","rating":2,"reviewedAtClient":"2026-03-07T10:00:00.000Z"}'
```

## Auth API

Base URL:

```bash
https://auth.flashcards-open-source-app.com
```

Implemented routes:

- `POST /api/send-code`
- `POST /api/verify-code`
- `POST /api/refresh-token`
- `POST /api/revoke-token`
- `GET /login`

## Notes

- Browser session requests use cookies plus CSRF protection
- Local development can run with `AUTH_MODE=none`
- The planned sync endpoints exist but currently return `501 Not Implemented`
