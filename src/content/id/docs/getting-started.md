---
title: Langkah Awal
description: Mulai dengan aplikasi web terkelola, hubungkan agen melalui URL discovery, atau jalankan stack lokal sendiri.
---

## Aplikasi Web Terkelola

Cara tercepat untuk memulai adalah aplikasi web terkelola:

1. Buka [app.nibomo.com](https://app.nibomo.com)
2. Masuk dengan email Anda menggunakan OTP tanpa kata sandi
3. Buat kartu, tinjau kartu yang jatuh tempo, dan gunakan obrolan AI dengan data ruang kerja serta lampiran berkas

Jalur terkelola tidak memerlukan instalasi maupun penyiapan server.

## Penyiapan Agen

Jika Anda ingin Claude Code, Codex, atau OpenClaw terhubung secara langsung, mulailah dari:

```text
GET https://api.nibomo.com/v1/
```

Respons discovery tersebut memandu agen melalui login OTP lewat email, pembuatan kunci API berumur panjang, pemuatan akun, bootstrap ruang kerja, dan antarmuka SQL yang dipublikasikan.

Payload yang sama juga tersedia di `GET /v1/agent`, tetapi `/v1/` adalah titik masuk publik yang kanonis.

## Self-Hosted

Jika Anda lebih suka menjalankan instans sendiri, lihat [Panduan Self-Hosting](/docs/self-hosting/).

## Yang Anda Dapatkan Saat Ini

- Aplikasi web terkelola untuk kartu, tinjauan, dan obrolan AI
- Klien iOS di repositori utama dengan SQLite lokal dan sinkronisasi offline-first
- Layanan backend dan autentikasi bersama di domain `api` dan `auth` yang terpisah
- Onboarding agen eksternal melalui discovery, OTP, dan autentikasi ApiKey
- Jalur deployment open source di AWS dengan Postgres sebagai sumber kebenaran

## Arah Repositori

Proyek ini bersifat offline-first.

Saat ini repositori mencakup aplikasi web, aplikasi iOS, layanan autentikasi, API backend, alur agen eksternal, dan aplikasi Android yang dipublikasikan di Google Play.
