---
title: ਆਰਕੀਟੈਕਚਰ
description: ਸਿਸਟਮ ਦੀ ਝਲਕ, ਜਨਤਕ ਡੋਮੇਨ, ਸਮਰਥਿਤ ਕਲਾਇੰਟ ਅਤੇ ਮੌਜੂਦਾ ਆਫ਼ਲਾਈਨ-ਫ਼ਸਟ ਡਾਟਾ ਪ੍ਰਵਾਹ।
---

## ਸਿਸਟਮ ਦੀ ਝਲਕ

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## ਸਿਧਾਂਤ

1. `app`, `api` ਅਤੇ `auth` ਲਈ ਵੱਖਰੇ ਜਨਤਕ ਡੋਮੇਨ
2. Postgres ਡਾਟੇ ਦਾ ਮੁੱਖ ਸਰੋਤ ਹੈ
3. iOS ਕਲਾਇੰਟ ਆਫ਼ਲਾਈਨ-ਫ਼ਸਟ ਹੈ, ਲੋਕਲ SQLite ਅਤੇ ਸਿੰਕ ਨਾਲ
4. ਵੈੱਬ ਐਪ, iOS ਐਪ ਅਤੇ ਬਾਹਰੀ ਏਜੰਟਾਂ ਦਾ ਇੰਟਰਫ਼ੇਸ ਇੱਕੋ ਵਰਕਸਪੇਸ ਮਾਡਲ ਸਾਂਝਾ ਕਰਦੇ ਹਨ
5. ਬਾਹਰੀ ਏਜੰਟ `GET https://api.nibomo.com/v1/` ਤੋਂ ਸ਼ੁਰੂ ਕਰਦੇ ਹਨ

## ਸਮਰਥਿਤ ਕਲਾਇੰਟ

- `app.nibomo.com` ਉੱਤੇ ਵੈੱਬ ਐਪ
- ਮੁੱਖ ਰਿਪੋਜ਼ਿਟਰੀ ਵਿੱਚ iOS ਐਪ, ਲੋਕਲ SQLite ਸਟੋਰੇਜ ਸਮੇਤ
- Google Play ਉੱਤੇ Android ਐਪ
- ਡਿਸਕਵਰੀ, OTP ਬੂਟਸਟ੍ਰੈਪ ਅਤੇ `Authorization: ApiKey` ਰਾਹੀਂ ਬਾਹਰੀ ਏਜੰਟ ਕਲਾਇੰਟ

## ਡਾਟਾ ਮਾਡਲ

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## ਡਾਟਾ ਪ੍ਰਵਾਹ

### ਵੈੱਬ

1. ਬ੍ਰਾਊਜ਼ਰ `auth.<domain>` ਰਾਹੀਂ ਸਾਈਨ ਇਨ ਕਰਦਾ ਹੈ।
2. ਵੈੱਬ ਐਪ `api.<domain>` ਤੋਂ ਵਰਕਸਪੇਸ ਦਾ ਡਾਟਾ ਲੋਡ ਕਰਦੀ ਹੈ।
3. AI ਚੈਟ ਦੀਆਂ ਬੇਨਤੀਆਂ `/chat/local-turn` ਰਾਹੀਂ ਜਾਂਦੀਆਂ ਹਨ।
4. ਭੇਜੀਆਂ ਗਈਆਂ ਦੁਹਰਾਈਆਂ ਲਿਖਣ ਵੇਲੇ ਹੀ ਸ਼ਡਿਊਲਰ ਦੀ ਸਥਿਤੀ ਅੱਪਡੇਟ ਕਰ ਦਿੰਦੀਆਂ ਹਨ।

### iOS

1. iOS ਐਪ ਪਹਿਲਾਂ ਲੋਕਲ SQLite ਵਿੱਚ ਲਿਖਦੀ ਹੈ।
2. ਲੋਕਲ ਤਬਦੀਲੀਆਂ ਆਊਟਬਾਕਸ ਦੀ ਕਤਾਰ ਵਿੱਚ ਰੱਖੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।
3. ਸਿੰਕ `/v1/workspaces/{workspaceId}/sync/push` ਰਾਹੀਂ ਤਬਦੀਲੀਆਂ ਅੱਪਲੋਡ ਕਰਦਾ ਹੈ।
4. ਸਿੰਕ `/v1/workspaces/{workspaceId}/sync/pull` ਰਾਹੀਂ ਰਿਮੋਟ ਅੱਪਡੇਟ ਡਾਊਨਲੋਡ ਕਰਦਾ ਹੈ।
5. ਲੋਕਲ ਡਾਟਾਬੇਸ ਤਬਦੀਲੀਆਂ ਲਾਗੂ ਕਰਦਾ ਹੈ ਅਤੇ ਸਿੰਕ ਕਰਸਰ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦਾ ਹੈ।

### ਬਾਹਰੀ ਏਜੰਟ

1. ਏਜੰਟ `GET /v1/` ਨਾਲ ਸ਼ੁਰੂ ਕਰਦੇ ਹਨ।
2. OTP ਬੂਟਸਟ੍ਰੈਪ `auth.<domain>` ਉੱਤੇ ਚੱਲਦਾ ਹੈ।
3. ਏਜੰਟ ਨੂੰ ਲੰਮੇ ਸਮੇਂ ਤੱਕ ਚੱਲਣ ਵਾਲੀ API ਕੁੰਜੀ ਮਿਲਦੀ ਹੈ।
4. ਏਜੰਟ `/v1/agent/me` ਲੋਡ ਕਰਦਾ ਹੈ, ਵਰਕਸਪੇਸਾਂ ਦੀ ਸੂਚੀ ਲੈਂਦਾ ਹੈ, ਲੋੜ ਹੋਵੇ ਤਾਂ ਇੱਕ ਚੁਣਦਾ ਹੈ, ਅਤੇ ਫਿਰ `/v1/agent/sql/query` ਤੇ `/v1/agent/sql/execute` ਵਰਤਦਾ ਹੈ।

## ਸ਼ਡਿਊਲਿੰਗ

Nibomo ਦੁਹਰਾਈ ਦੇ ਸ਼ਡਿਊਲਰ ਵਜੋਂ FSRS ਵਰਤਦਾ ਹੈ।

ਲਾਗੂ ਕਰਨ ਬਾਰੇ ਨੋਟ:

- ਬੈਕਐਂਡ ਅਤੇ iOS ਵਿੱਚ FSRS ਦੇ ਇੱਕ-ਦੂਜੇ ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਲਾਗੂਕਰਨ ਰੱਖੇ ਜਾਂਦੇ ਹਨ
- ਵੈੱਬ ਐਪ ਸ਼ਡਿਊਲਿੰਗ ਡਾਟੇ ਦਾ ਉਹੀ ਕੰਟਰੈਕਟ ਅਪਣਾਉਂਦੀ ਹੈ, ਪਰ ਆਪਣੇ ਨਾਲ ਸ਼ਡਿਊਲਰ ਦੀ ਤੀਜੀ ਕਾਪੀ ਨਹੀਂ ਰੱਖਦੀ
- ਵਰਕਸਪੇਸ ਪੱਧਰ ਦੀਆਂ ਸ਼ਡਿਊਲਰ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਲੋੜੀਂਦੀ ਯਾਦ-ਧਾਰਨ ਦਰ, ਸਿੱਖਣ ਦੇ ਪੜਾਅ, ਮੁੜ ਸਿੱਖਣ ਦੇ ਪੜਾਅ, ਵੱਧ ਤੋਂ ਵੱਧ ਅੰਤਰਾਲ ਅਤੇ ਹਲਕਾ ਬੇਤਰਤੀਬ ਫੈਲਾਅ ਸ਼ਾਮਲ ਹਨ
- ਦੁਹਰਾਈ ਦਾ ਅਸਲ ਸਮਾਂ `reviewedAtClient` ਤੋਂ ਆਉਂਦਾ ਹੈ

ਵਿਸਤ੍ਰਿਤ ਕੰਟਰੈਕਟ ਲਈ [ਮੁੱਖ ਰਿਪੋਜ਼ਿਟਰੀ ਵਿੱਚ FSRS ਸ਼ਡਿਊਲਿੰਗ ਦਾ ਤਰਕ](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) ਵੇਖੋ।

## ਪ੍ਰਮਾਣੀਕਰਨ

- Cognito ਰਾਹੀਂ ਈਮੇਲ OTP
- ਹੋਸਟ ਕੀਤੀ ਵੈੱਬ ਐਪ ਲਈ ਸਾਂਝੇ ਡੋਮੇਨ ਵਾਲੀਆਂ ਬ੍ਰਾਊਜ਼ਰ ਸੈਸ਼ਨ ਕੂਕੀਜ਼
- `auth.<domain>` ਉੱਤੇ ਏਜੰਟ OTP ਬੂਟਸਟ੍ਰੈਪ, ਜਿਸ ਤੋਂ ਲੰਮੇ ਸਮੇਂ ਤੱਕ ਚੱਲਣ ਵਾਲੀ ApiKey ਮਿਲਦੀ ਹੈ
- ਲੋਕਲ ਡਿਵੈਲਪਮੈਂਟ ਲਈ `AUTH_MODE=none`
- ਪ੍ਰੋਡਕਸ਼ਨ ਵਰਗੇ ਪ੍ਰਮਾਣੀਕਰਨ ਲਈ `AUTH_MODE=cognito`

## ਡਿਪਲੌਇਮੈਂਟ ਦਾ ਢਾਂਚਾ

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda ਬੈਕਐਂਡ
- `auth.<domain>` -> API Gateway + Lambda ਪ੍ਰਮਾਣੀਕਰਨ ਸੇਵਾ
- AWS RDS ਵਿੱਚ Postgres

ਮੁੱਖ ਡੋਮੇਨ ਇੱਕ ਵੱਖਰੀ ਮਾਰਕੀਟਿੰਗ ਸਾਈਟ ਉੱਤੇ ਰਹਿ ਸਕਦਾ ਹੈ। ਜੇ ਬੂਟਸਟ੍ਰੈਪ ਵੇਲੇ ਇਹ ਕਿਸੇ ਹੋਰ ਕੰਮ ਲਈ ਨਾ ਵਰਤਿਆ ਜਾ ਰਿਹਾ ਹੋਵੇ, ਤਾਂ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਇਸ ਨੂੰ ਆਰਜ਼ੀ ਤੌਰ ਉੱਤੇ `app.<domain>` ਵੱਲ ਰੀਡਾਇਰੈਕਟ ਕਰ ਸਕਦਾ ਹੈ।
