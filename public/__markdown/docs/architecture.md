# Architecture

## System Overview

```
Mobile app (planned, iOS first) -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser auth                    -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
```

## Principles

1. Separate public domains for `app`, `api`, and `auth`
2. Postgres is the source of truth
3. Mobile clients are planned around offline-first sync
4. The current public app is a minimal web MVP

## Data Model

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `review_events`
- `applied_operations`
- `sync_state`

## Data Flow

1. Browser clients authenticate through the auth service
2. The web app loads session and profile data from `/v1/me`
3. Cards are created via `/v1/cards`
4. Review work is loaded from `/v1/review-queue`
5. Review submissions write scheduling updates through `/v1/reviews`

## Auth

- Email OTP via Cognito
- Shared-domain cookies for browser flows
- `AUTH_MODE=none` for local development
- `AUTH_MODE=cognito` for production-like auth

## Deployment Shape

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres in AWS RDS

---
*[View the styled HTML version of this page](https://flashcards-open-source-app.com/docs/architecture/)*

*Tip: Append `.md` to any URL on https://flashcards-open-source-app.com to get a clean Markdown version of that page.*