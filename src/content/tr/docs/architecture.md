---
title: Mimari
description: Sistem özeti, herkese açık alan adları, desteklenen istemciler ve mevcut çevrimdışı öncelikli veri akışı.
---

## Sistem Özeti

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## İlkeler

1. `app`, `api` ve `auth` için ayrı, herkese açık alan adları
2. Tek doğruluk kaynağı Postgres'tir
3. iOS istemcisi, yerel SQLite ve senkronizasyonla çevrimdışı önceliklidir
4. Web uygulaması, iOS uygulaması ve harici agent arayüzü aynı çalışma alanı modelini paylaşır
5. Harici agent'lar `GET https://api.nibomo.com/v1/` ile başlar

## Desteklenen İstemciler

- `app.nibomo.com` üzerinde web uygulaması
- Ana depoda, yerel SQLite depolamalı iOS uygulaması
- Google Play'de Android uygulaması
- Keşif, OTP ile ilk kurulum ve `Authorization: ApiKey` üzerinden harici agent istemcileri

## Veri Modeli

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Veri Akışı

### Web

1. Tarayıcı `auth.<domain>` üzerinden giriş yapar.
2. Web uygulaması çalışma alanı verilerini `api.<domain>` adresinden yükler.
3. AI sohbet istekleri `/chat/local-turn` üzerinden geçer.
4. Gönderilen tekrarlar, yazma sırasında zamanlayıcı durumunu günceller.

### iOS

1. iOS uygulaması önce yerel olarak SQLite'a yazar.
2. Yerel değişiklikler bir giden kutusunda sıraya alınır.
3. Senkronizasyon, değişiklikleri `/v1/workspaces/{workspaceId}/sync/push` üzerinden yükler.
4. Senkronizasyon, uzak güncellemeleri `/v1/workspaces/{workspaceId}/sync/pull` üzerinden indirir.
5. Yerel veritabanı değişiklikleri uygular ve senkronizasyon imlecini ilerletir.

### Harici Agent'lar

1. Agent'lar `GET /v1/` ile başlar.
2. OTP ile ilk kurulum `auth.<domain>` üzerinde yürür.
3. Agent uzun ömürlü bir API anahtarı alır.
4. Agent `/v1/agent/me` adresini yükler, çalışma alanlarını listeler, gerekirse birini seçer ve ardından `/v1/agent/sql/query` ile `/v1/agent/sql/execute` adreslerini kullanır.

## Zamanlama

Nibomo, tekrar zamanlayıcısı olarak FSRS kullanır.

Uygulama notları:

- backend ve iOS'ta birbirinin aynısı olan FSRS uygulamaları bulunur
- web uygulaması zamanlama veri sözleşmesini birebir yansıtır, ancak üçüncü bir zamanlayıcı kopyası içermez
- çalışma alanı düzeyindeki zamanlayıcı ayarları hedeflenen hatırlama oranını, öğrenme adımlarını, yeniden öğrenme adımlarını, en uzun aralığı ve rastgele sapmayı (fuzz) içerir
- gerçek tekrar zaman damgası `reviewedAtClient` alanından gelir

Ayrıntılı sözleşme için [ana depodaki FSRS zamanlama mantığına](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) bakın.

## Kimlik Doğrulama

- Cognito üzerinden e-posta OTP
- Barındırılan web uygulaması için paylaşılan alan adında tarayıcı oturum çerezleri
- `auth.<domain>` üzerinde, agent'lar için uzun ömürlü ApiKey üreten OTP ile ilk kurulum
- Yerel geliştirme için `AUTH_MODE=none`
- Üretime benzer kimlik doğrulama için `AUTH_MODE=cognito`

## Dağıtım Yapısı

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda kimlik doğrulama hizmeti
- AWS RDS'te Postgres

Kök alan adı ayrı bir pazarlama sitesinde kalabilir. İlk kurulum sırasında boştaysa altyapı onu geçici olarak `app.<domain>` adresine yönlendirebilir.
