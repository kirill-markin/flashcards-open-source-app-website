---
title: アーキテクチャ
description: System overview、public domains、supported clients、current offline-first data flow。
---

## System Overview

```text
iOS app / agent client        -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                       -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth        -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex redirect                 -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principles

1. `app`、`api`、`auth` の分離された public domains
2. Postgres が source of truth
3. iOS client は local SQLite と sync を持つ offline-first
4. Web app、iOS client、external agent surface は同じ workspace model を共有する
5. External agents は `GET https://api.flashcards-open-source-app.com/v1/` から開始する

## Supported Clients

- `app.flashcards-open-source-app.com` の web app
- Main repository 内の local SQLite storage を持つ iOS app
- Google Play の Android app
- Discovery、OTP bootstrap、`Authorization: ApiKey` auth を使う external agent clients

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

1. Browser は `auth.<domain>` で sign in する
2. Web app は `api.<domain>` から workspace data を load する
3. AI chat requests は `/chat/local-turn` を通る
4. Review submissions が scheduler state を更新する

### iOS

1. iOS app は最初に local SQLite に書き込む
2. Local changes は outbox に queue される
3. Sync は `/v1/workspaces/{workspaceId}/sync/push` で changes を upload する
4. Sync は `/v1/workspaces/{workspaceId}/sync/pull` で remote updates を download する
5. Local database は changes を適用し、sync cursor を進める

### External Agents

1. Agents は `GET /v1/` から始める
2. 最初の OTP stage は `auth.<domain>` で動く
3. Agent は long-lived API key を受け取る
4. Agent は `/v1/agent/me` を load し、workspaces を list し、必要なら選択し、`/v1/agent/sql` を使う

## Scheduling

Flashcards は review scheduler として FSRS を使います。

Implementation notes:

- Backend と iOS は FSRS implementations を揃えている
- Web app は scheduling data contract を mirror するが、scheduler の3つ目の implementation は ship しない
- Workspace-level scheduler settings には desired retention、learning steps、relearning steps、max interval、fuzz が含まれる
- Actual review timestamp は `reviewedAtClient` から来る

詳細は [main repository FSRS scheduling logic](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) を参照してください。

## Authentication

- Cognito による email OTP
- Hosted web app 向けの shared-domain session cookies
- `auth.<domain>` 上の agent OTP bootstrap が long-lived ApiKey を返す
- Local development 用の `AUTH_MODE=none`
- Production-like auth 用の `AUTH_MODE=cognito`

## Deployment Shape

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- AWS RDS 上の Postgres

Root domain は別の marketing site として残せます。Bootstrap phase で未使用なら、infrastructure は一時的に `app.<domain>` へ redirect できます。
