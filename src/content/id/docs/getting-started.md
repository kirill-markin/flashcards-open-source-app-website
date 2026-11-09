---
title: Langkah Awal
description: Mulai dengan aplikasi iPhone, iPad, Mac, atau Android, aplikasi web, agen AI, atau server Anda sendiri.
---

Ada beberapa cara untuk memulai, diurutkan dari yang paling populer:

- **Aplikasi iPhone, iPad, dan Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplikasi Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Aplikasi web terkelola**: [app.nibomo.com](https://app.nibomo.com)
- **Agen AI**: [konektor MCP](/docs/mcp-connector/) atau API di `https://api.nibomo.com/v1/`
- **Self-hosting**: [Panduan Self-Hosting](/docs/self-hosting/)

## Aplikasi Seluler dan Desktop

Instal aplikasi native untuk perangkat Anda:

- iPhone, iPad, dan Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplikasi menyimpan kartu Anda di perangkat, sehingga Anda tetap bisa meninjau secara offline, lalu data tersinkron saat Anda kembali online. Anda bisa memulai sebagai tamu dan masuk nanti.

### Widget Layar Utama

Aplikasi Nibomo menambahkan widget Pengulangan ke iPhone, iPad, Mac, dan Android. Widget ini tersedia dalam tiga ukuran:

- **Kecil**: jumlah kartu yang jatuh tempo dan rangkaian hari belajar Anda
- **Sedang**: jumlah kartu yang jatuh tempo dan pertanyaan di kartu berikutnya
- **Besar**: jumlah kartu yang jatuh tempo, pertanyaan berikutnya, dan rangkaian hari belajar Anda

Saat tidak ada kartu yang jatuh tempo, widget menampilkan “Semua selesai” dan kapan kartu berikutnya jatuh tempo. Widget tidak pernah menampilkan jawaban. Ketuk widget untuk membuka Pengulangan; widget Sedang atau Besar membuka Pengulangan pada kartu yang ditampilkannya. Widget gratis untuk semua orang, termasuk tamu.

Delapan widget lainnya menampilkan kemajuan belajar Anda: “Aktivitas”, “Tahun”, “Hari ini”, “Grafik pengulangan”, “Rangkaian”, “Kalender”, “Mendatang”, dan “Dasbor”. Di iPhone dan iPad, widget “Kartu jatuh tempo” juga bisa dipasang di Layar Terkunci, dan [panduan widget](/blog/flashcard-widget/) menunjukkan masing-masing.

Untuk menambahkannya di iPhone, iPad, atau Mac, buka galeri widget, pilih Nibomo, lalu pilih ukuran. Di Android, tambahkan salah satu widget Nibomo dari daftar widget, lalu ubah ukurannya; tata letaknya menyesuaikan ukuran.

## Aplikasi Web Terkelola

Cara tercepat untuk memulai adalah aplikasi web terkelola:

1. Buka [app.nibomo.com](https://app.nibomo.com)
2. Masuk dengan email Anda menggunakan OTP tanpa kata sandi
3. Buat kartu, tinjau kartu yang jatuh tempo, dan gunakan obrolan AI dengan data ruang kerja serta lampiran berkas

Jalur terkelola tidak memerlukan instalasi maupun penyiapan server.

## Penyiapan Agen

Klien MCP seperti Claude, ChatGPT, dan Cursor dapat terhubung melalui [panduan konektor MCP](/docs/mcp-connector/).

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
- Aplikasi native iPhone, iPad, Mac, dan Android dengan penyimpanan SQLite lokal dan sinkronisasi offline-first
- Layanan backend dan autentikasi bersama di domain `api` dan `auth` yang terpisah
- Onboarding agen eksternal melalui discovery, OTP, dan autentikasi ApiKey
- Jalur deployment open source di AWS dengan Postgres sebagai sumber kebenaran

## Arah Repositori

Proyek ini bersifat offline-first.

Saat ini repositori mencakup aplikasi web, aplikasi iOS, layanan autentikasi, API backend, alur agen eksternal, dan aplikasi Android yang dipublikasikan di Google Play.
