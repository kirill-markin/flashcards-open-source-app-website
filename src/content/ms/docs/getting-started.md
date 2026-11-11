---
title: Cara Bermula
description: Mula dengan aplikasi iPhone, iPad, Mac atau Android, aplikasi web, ejen AI atau pelayan anda sendiri.
---

Berikut ialah beberapa cara untuk bermula, mengikut pilihan yang paling popular:

- **Aplikasi iPhone, iPad dan Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplikasi Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Aplikasi web yang kami hos**: [app.nibomo.com](https://app.nibomo.com)
- **Ejen AI**: [penyambung MCP](/docs/mcp-connector/) atau API di `https://api.nibomo.com/v1/`
- **Pengehosan sendiri**: [Panduan Pengehosan Sendiri](/docs/self-hosting/)

## Aplikasi mudah alih dan desktop

Pasang aplikasi natif untuk peranti anda:

- iPhone, iPad dan Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplikasi menyimpan kad pada peranti anda supaya anda boleh mengulang kaji di luar talian. Kad disegerakkan apabila anda kembali dalam talian. Anda boleh bermula sebagai tetamu dan log masuk kemudian.

### Widget Skrin Utama

Aplikasi Nibomo menyediakan widget Ulang Kaji untuk iPhone, iPad, Mac dan Android. Widget ini tersedia dalam tiga saiz:

- **Kecil**: bilangan kad yang perlu diulang kaji dan rentetan belajar anda
- **Sederhana**: bilangan kad yang perlu diulang kaji dan soalan pada kad seterusnya
- **Besar**: bilangan kad yang perlu diulang kaji, soalan seterusnya dan rentetan belajar anda

Jika tiada kad yang perlu diulang kaji, widget memaparkan “Semua selesai” dan masa kad seterusnya dijadualkan untuk ulang kaji. Widget tidak pernah memaparkan jawapan. Ketik widget untuk membuka Ulang Kaji. Widget Sederhana atau Besar membuka Ulang Kaji terus pada kad yang dipaparkan. Widget percuma untuk semua orang, termasuk tetamu.

Lapan lagi widget menunjukkan kemajuan pembelajaran anda: Aktiviti, Tahun, Hari Ini, Ulang Kaji, Rentetan, Kalendar, Akan Datang dan Papan Pemuka. Pada iPhone dan iPad, anda juga boleh meletakkan widget Kad Perlu Diulang Kaji pada Skrin Kunci. [Panduan widget](/blog/flashcard-widget/) menunjukkan setiap widget.

Untuk menambah widget pada iPhone, iPad atau Mac, buka galeri widget, pilih Nibomo, kemudian pilih saiz. Pada Android, tambah widget Nibomo daripada senarai widget, kemudian ubah saiznya. Reka letak akan menyesuaikan diri dengan saiz tersebut.

## Aplikasi web yang kami hos

Cara terpantas untuk bermula ialah menggunakan aplikasi web yang kami hos:

1. Buka [app.nibomo.com](https://app.nibomo.com)
2. Log masuk tanpa kata laluan menggunakan kod sekali guna (OTP) yang dihantar melalui e-mel
3. Buat kad, ulang kaji kad yang perlu diulang kaji dan gunakan sembang AI dengan data ruang kerja dan lampiran fail

Anda boleh menggunakan aplikasi web tanpa memasang aplikasi atau menyediakan pelayan.

## Menyediakan ejen

Klien MCP seperti Claude, ChatGPT dan Cursor boleh disambungkan dengan mengikuti [panduan penyambung MCP](/docs/mcp-connector/).

Jika anda mahu menyambungkan Claude Code, Codex atau OpenClaw secara terus, mulakan dengan:

```text
GET https://api.nibomo.com/v1/
```

Respons penemuan ini membimbing ejen melalui proses log masuk dengan OTP melalui e-mel, penjanaan kunci API yang sah untuk jangka masa panjang, pemuatan akaun, penyediaan awal ruang kerja dan penggunaan antara muka SQL yang diterbitkan.

Data respons yang sama juga tersedia di `GET /v1/agent`. Titik masuk awam rasmi ialah `/v1/`.

## Pengehosan sendiri

Jika anda mahu menjalankan pemasangan Nibomo anda sendiri, lihat [Panduan Pengehosan Sendiri](/docs/self-hosting/).

## Ciri yang tersedia sekarang

- Aplikasi web yang kami hos untuk membuat kad, mengulang kaji dan bersembang dengan AI
- Aplikasi natif untuk iPhone, iPad, Mac dan Android dengan storan SQLite setempat untuk penggunaan luar talian dan penyegerakan apabila anda kembali dalam talian
- Perkhidmatan bahagian belakang dan pengesahan yang dikongsi, pada domain `api` dan `auth` yang berasingan
- Penyediaan ejen luaran melalui penemuan, OTP dan pengesahan ApiKey
- Kaedah pelaksanaan sumber terbuka pada AWS dengan Postgres sebagai sumber data muktamad

## Hala tuju repositori

Projek ini mengutamakan penggunaan luar talian.

Pada masa ini, repositori merangkumi aplikasi web, aplikasi iOS, perkhidmatan pengesahan, API bahagian belakang, aliran penyediaan ejen luaran dan aplikasi Android yang diterbitkan di Google Play.
