---
title: Arsitektur
description: Gambaran sistem, domain publik, klien yang didukung, dan alur data offline-first saat ini.
---

## Gambaran Sistem

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Prinsip

1. Domain publik terpisah untuk `app`, `api`, dan `auth`
2. Postgres adalah sumber kebenaran
3. Klien iOS bersifat offline-first dengan SQLite lokal plus sinkronisasi
4. Aplikasi web, aplikasi iOS, dan antarmuka agen eksternal memakai model ruang kerja yang sama
5. Agen eksternal memulai dari `GET https://api.nibomo.com/v1/`

## Klien yang Didukung

- Aplikasi web di `app.nibomo.com`
- Aplikasi iOS di repositori utama dengan penyimpanan SQLite lokal
- Aplikasi Android di Google Play
- Klien agen eksternal melalui discovery, bootstrap OTP, dan `Authorization: ApiKey`

## Model Data

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Alur Data

### Web

1. Peramban masuk melalui `auth.<domain>`.
2. Aplikasi web memuat data ruang kerja dari `api.<domain>`.
3. Permintaan obrolan AI melewati `/chat/local-turn`.
4. Tinjauan yang dikirim memperbarui status penjadwal pada saat penulisan.

### iOS

1. Aplikasi iOS menulis ke SQLite lokal terlebih dahulu.
2. Perubahan lokal dimasukkan ke antrean outbox.
3. Sinkronisasi mengunggah perubahan melalui `/v1/workspaces/{workspaceId}/sync/push`.
4. Sinkronisasi mengunduh pembaruan jarak jauh melalui `/v1/workspaces/{workspaceId}/sync/pull`.
5. Database lokal menerapkan perubahan dan memajukan kursor sinkronisasi.

### Agen Eksternal

1. Agen memulai dengan `GET /v1/`.
2. Bootstrap OTP berjalan di `auth.<domain>`.
3. Agen menerima kunci API berumur panjang.
4. Agen memuat `/v1/agent/me`, menampilkan daftar ruang kerja, memilih salah satu jika perlu, lalu memakai `/v1/agent/sql/query` dan `/v1/agent/sql/execute`.

## Penjadwalan

Nibomo memakai FSRS sebagai penjadwal tinjauan.

Catatan implementasi:

- backend dan iOS memelihara implementasi FSRS yang saling mencerminkan
- aplikasi web mencerminkan kontrak data penjadwalan, tetapi tidak menyertakan salinan penjadwal ketiga
- pengaturan penjadwal tingkat ruang kerja mencakup retensi yang diinginkan, langkah belajar, langkah belajar ulang, interval maksimum, dan fuzz
- stempel waktu tinjauan yang sebenarnya berasal dari `reviewedAtClient`

Untuk kontrak yang lebih rinci, lihat [logika penjadwalan FSRS di repositori utama](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentikasi

- OTP email melalui Cognito
- Cookie sesi peramban dengan domain bersama untuk aplikasi web terkelola
- Bootstrap OTP agen di `auth.<domain>` yang menghasilkan ApiKey berumur panjang
- `AUTH_MODE=none` untuk pengembangan lokal
- `AUTH_MODE=cognito` untuk autentikasi yang menyerupai produksi

## Susunan Deployment

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend Lambda
- `auth.<domain>` -> API Gateway + layanan autentikasi Lambda
- Postgres di AWS RDS

Domain apex dapat tetap dipakai untuk situs pemasaran terpisah. Jika domain itu belum dipakai saat bootstrap, infrastruktur dapat mengalihkannya sementara ke `app.<domain>`.
