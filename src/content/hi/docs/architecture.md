---
title: Architecture
description: System overview, public domains, supported clients, और current offline-first data flow।
---

## System Overview

```text
iOS app / agent client        -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                       -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth        -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex redirect                 -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principles

1. `app`, `api`, और `auth` के लिए अलग public domains
2. Postgres source of truth है
3. iOS client local SQLite और sync के साथ offline-first है
4. Web app, iOS client, और external agent surface एक ही workspace model share करते हैं
5. External agents `GET https://api.flashcards-open-source-app.com/v1/` से शुरू करते हैं

## Supported Clients

- `app.flashcards-open-source-app.com` पर web app
- Main repository में local SQLite storage वाला iOS app
- Google Play पर Android app
- Discovery, OTP bootstrap, और `Authorization: ApiKey` auth के जरिए external agent clients

## Data Model

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Data Flow

### Web

1. Browser `auth.<domain>` के जरिए sign in करता है।
2. Web app `api.<domain>` से workspace data load करता है।
3. AI chat requests `/chat/local-turn` से गुजरती हैं।
4. Review submissions scheduler state अपडेट करती हैं।

### iOS

1. iOS app पहले local SQLite में लिखता है।
2. Local changes outbox में queue होती हैं।
3. Sync `/v1/workspaces/{workspaceId}/sync/push` से changes upload करती है।
4. Sync `/v1/workspaces/{workspaceId}/sync/pull` से remote updates download करती है।
5. Local database changes apply करती है और sync cursor आगे बढ़ाती है।

### External Agents

1. Agents `GET /v1/` से शुरू करते हैं।
2. पहला OTP stage `auth.<domain>` पर चलता है।
3. Agent को long-lived API key मिलती है।
4. Agent `/v1/agent/me` load करता है, workspaces list करता है, जरूरत पड़ने पर एक चुनता है, और `/v1/agent/sql` इस्तेमाल करता है।

## Scheduling

Flashcards review scheduler के रूप में FSRS इस्तेमाल करता है।

Implementation notes:

- Backend और iOS, FSRS implementations aligned रखते हैं
- Web app scheduling data contract को mirror करता है, लेकिन scheduler की तीसरी implementation ship नहीं करता
- Workspace-level scheduler settings में desired retention, learning steps, relearning steps, max interval, और fuzz शामिल हैं
- Actual review timestamp `reviewedAtClient` से आता है

Detailed contract के लिए [main repository FSRS scheduling logic](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) देखें।

## Authentication

- Cognito के जरिए email OTP
- Hosted web app के लिए shared-domain session cookies
- `auth.<domain>` पर agent OTP bootstrap जो long-lived ApiKey देता है
- Local development के लिए `AUTH_MODE=none`
- Production-like auth के लिए `AUTH_MODE=cognito`

## Deployment Shape

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- AWS RDS पर Postgres

Root domain एक अलग marketing site पर रह सकता है। अगर bootstrap phase में वह unused है, तो infrastructure इसे अस्थायी रूप से `app.<domain>` पर redirect कर सकती है।
