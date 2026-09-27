---
title: "Aplikasi Flashcard Open Source Terbaik 2026: Perbandingan 6 Pilihan FOSS"
description: "Bandingkan enam aplikasi flashcard open source yang masih dipelihara berdasarkan cakupan kode sumber, data offline, sinkronisasi, impor Anki, ekspor, hosting mandiri, dan pemulihan."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "aplikasi flashcard open source terbaik"
  - "aplikasi flashcard open source"
  - "pengulangan berjarak open source"
  - "flashcard hosting mandiri"
  - "aplikasi flashcard offline"
  - "alternatif Anki open source"
  - "flashcard FOSS"
---

Anki masih menjadi aplikasi flashcard open source terbaik bagi kebanyakan orang pada 2026. Pilihan lain mulai layak dipertimbangkan ketika “open source” bukan satu-satunya syarat yang harus dipenuhi.

Mungkin Anda membutuhkan aplikasi browser di server sendiri. Atau dek yang bisa dibaca sebagai Markdown biasa. Atau sistem catatan privat yang menghasilkan flashcard. Kebutuhan itu mengarah ke produk yang berbeda, dan adanya repositori GitHub publik belum cukup untuk menentukan pilihan.

Klien desktop dengan kode sumber terbuka bisa berdampingan dengan aplikasi iPhone yang kode sumbernya tertutup. Kontainer Docker bisa menyediakan antarmuka browser tanpa menyinkronkan klien native. Proses impor bisa memindahkan teks kartu, tetapi menghilangkan templat, media, dan riwayat pengulangan bertahun-tahun yang membuat koleksi itu berguna.

Enam proyek lolos penilaian ini. Saya membandingkan kode sumber beserta lisensinya, rilis stabil terbaru, data lokal, penjadwal, sinkronisasi, migrasi Anki, ekspor, dan bagian mana saja yang benar-benar bisa dihosting sendiri. Cakupan hosting mandiri ini lebih penting daripada yang biasanya terlihat di daftar fitur.

> **Keterbukaan penulis:** Saya Kirill Markin, pembuat [Nibomo](https://nibomo.com/), salah satu dari enam aplikasi di bawah ini. Repositori MIT-nya mencakup aplikasi web, klien native, backend, sinkronisasi, dan infrastruktur. Saya tidak menempatkannya di urutan pertama. Anki lebih aman sebagai pilihan awal, Mnemosyne memiliki jalur migrasi Anki yang lebih mapan, dan beberapa pilihan di sini jauh lebih mudah dioperasikan.

**Fakta diperiksa:** 5 September 2026. Rilis stabil dibedakan dari pekerjaan yang baru tersedia di branch utama.

![Seorang pendaki membandingkan enam ransel terbuka dan menguji perlengkapan cadangan sebelum memilih aplikasi flashcard open source](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Jawaban singkat

| Kebutuhan utama Anda | Pilihan paling sesuai | Alasannya | Batasan yang perlu diuji lebih dulu |
| --- | --- | --- | --- |
| Sistem serbaguna yang bisa diandalkan atau koleksi lama yang rumit | [Anki](https://apps.ankiweb.net/) | Kartu dan templat yang matang, FSRS, add-on, beragam klien, serta ekspor paket yang lengkap | Aplikasi iOS resmi dan AnkiWeb bukan bagian dari kode desktop open source; hosting mandiri menyediakan sinkronisasi, bukan AnkiWeb |
| Alternatif desktop yang fokus dengan impor Anki yang mapan | [Mnemosyne](https://mnemosyne-proj.org/) | Belajar secara lokal, impor jenis kartu dan data pembelajaran Anki, serta server sinkronisasi yang bisa dijalankan sendiri | Versi 2.11 masih menjadi rilis stabil terbaru; Android bisa digunakan untuk pengulangan, tetapi tidak untuk mengedit |
| Catatan dan flashcard dalam satu basis pengetahuan lokal | [SiYuan](https://b3log.org/siyuan/en/) | Aplikasi native offline, FSRS bawaan, dan aplikasi browser sungguhan yang dihosting melalui Docker | Klien Docker tidak bisa disinkronkan dengan aplikasi native, dan beberapa perintah impor/ekspor tidak tersedia di Docker |
| Kode sumber untuk web, perangkat seluler, backend, dan infrastruktur | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Satu monorepo MIT dengan dokumentasi deployment produksi | Stack produksi yang didukung berpusat pada AWS, dan migrasi dari Anki menghilangkan sebagian data |
| Aplikasi desktop baru yang mengutamakan data lokal dengan impor APKG langsung | [Recall](https://github.com/Madlezz/Recall) | FSRS, build desktop, PWA, basis data lokal, dan relay terenkripsi opsional | Impor hanya mempertahankan salinan status penjadwalan pada satu waktu, membaca dua kolom catatan pertama, dan melewatkan audio |
| Dek Markdown yang bisa dibaca langsung tanpa ketergantungan jaringan | [Essentialist](https://github.com/essentialist-app/essentialist) | Berkas dek biasa dan aplikasi desktop/Android yang sengaja dibuat offline | Tidak ada sinkronisasi, dan kemajuan belajar tersimpan di basis data tersembunyi yang terpisah |

Ini bukan penilaian berdasarkan jumlah fitur. Mulailah dari kegagalan yang tidak bisa Anda terima. Jika Anda memiliki riwayat pengulangan Anki selama sepuluh tahun, keutuhan data setelah migrasi lebih penting daripada antarmuka yang lebih rapi. Jika Anda mengelola instalasi untuk sekolah, akses browser dan pemulihan yang sudah terbukti bisa lebih penting daripada add-on.

## Kriteria aplikasi flashcard open source dalam perbandingan ini

Saya memakai empat syarat:

1. **Pengalaman belajar inti memiliki kode sumber publik dan lisensi open source yang jelas.** Direktori integrasi untuk aplikasi inti yang kodenya tidak dipublikasikan tidak termasuk.
2. **Pengulangan berjarak sudah berfungsi sekarang.** Entri dalam roadmap atau mode kuis umum belum cukup.
3. **Ada build yang sudah dirilis atau deployment resmi yang didokumentasikan dengan jelas.** Adanya commit terbaru saja tidak menjadikan prototipe aman untuk direkomendasikan.
4. **Sumber resmi menjelaskan cakupan data dengan cukup rinci untuk diperiksa.** Saya membutuhkan jawaban konkret tentang penyimpanan offline, sinkronisasi, impor/ekspor, atau hosting, bukan janji samar bahwa pengguna “memiliki data mereka.”

Jumlah bintang bukan syarat. Bintang mencerminkan umur proyek dan publisitas sama besarnya dengan kecocokan produk. Namun, kematangan tetap penting. Anki, Mnemosyne, dan SiYuan memiliki rilis serta model operasional yang mapan. Recall dan Essentialist mendapat tempat untuk kebutuhan yang lebih terbatas karena cara kerja versi rilisnya didokumentasikan dengan cukup jelas untuk mendukung rekomendasi tertentu.

“Masih dipelihara” juga perlu diperiksa dari dua sisi. Rilis bertag menunjukkan apa yang bisa dipasang pengguna; branch utama menunjukkan arah proyek. Essentialist adalah contoh paling jelas. Rilis stabilnya mendokumentasikan SM-2, sedangkan branch saat ini mendokumentasikan FSRS. Tabel di bawah mencatat SM-2.

## Perbandingan enam aplikasi flashcard FOSS

| Aplikasi | Versi stabil yang diperiksa | Platform | Data offline | Penjadwal | Sinkronisasi | Migrasi Anki dan cara membawa data keluar | Bagian yang bisa dihosting sendiri |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 Agustus 2026 | Windows, macOS, Linux; klien Android dan iOS terpisah; AnkiWeb | Klien terpasang menggunakan koleksi lokal untuk belajar | FSRS atau SM-2 lama | AnkiWeb atau server sinkronisasi resmi yang dihosting sendiri | Mengimpor teks, APKG/COLPKG, dan basis data Mnemosyne; mengekspor teks atau paket dengan pilihan penyertaan media dan penjadwalan | **Hanya server sinkronisasi.** Tidak ada AnkiWeb atau antarmuka belajar browser yang bisa dihosting sendiri |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 November 2023; aktivitas repositori berlanjut pada 2026 | Windows, macOS, Linux, Android; pengulangan melalui browser terbatas | Desktop menyimpan data lokal; Android bisa mengulang offline, tetapi tidak bisa mengedit | Penilaian daya ingat adaptif 0–5 | Sinkronisasi bawaan ke instans desktop atau tanpa antarmuka grafis | Secara resmi mendokumentasikan impor Anki lengkap dengan jenis kartu khusus dan data pembelajaran; ekspor untuk berbagi bukan cadangan lengkap | **Sinkronisasi serta pengulangan browser terbatas.** Server browser tidak memiliki fitur keamanan |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 Agustus 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; browser melalui Docker | Klien native menyimpan ruang kerja secara lokal | FSRS | Sinkronisasi resmi berbayar dengan enkripsi ujung ke ujung (E2EE) atau integrasi S3/WebDAV pihak ketiga berbayar | Aplikasi secara umum mengimpor Markdown/data dan mengekspor beberapa format dokumen/data; tidak ada pengimpor APKG yang terdokumentasi | **Aplikasi browser lengkap.** Docker tidak bisa menyinkronkan klien native dan meniadakan beberapa perintah impor/ekspor |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 September 2026 | Web, iOS, Android | IndexedDB di web; SQLite di iOS; Room di atas SQLite pada Android; perubahan lokal masuk antrean sinkronisasi | FSRS | Backend layanan yang tersedia atau yang di-deploy sendiri oleh operator | ZIP miliknya memindahkan kartu, tag, metadata sumber, dan media yang dirujuk, tetapi tidak dek, status pembelajaran, pengaturan, atau akun; tidak ada pengimpor APKG | **Stack web/backend lengkap.** Deployment produksi berpusat pada AWS; build native privat dibuat terpisah |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 Juli 2026 | Windows, macOS, Linux; PWA yang bisa dipasang | SQLite di desktop; IndexedDB di browser; secara bawaan tidak memerlukan akun dan tidak mengaktifkan telemetri | FSRS | Sinkronisasi folder desktop atau relay Cloudflare Worker/R2 terenkripsi opsional | Impor APKG desktop membaca dua kolom pertama, dek, tag, perkiraan status penjadwalan pada satu waktu, dan gambar; ekspor JSON dan arsip Recall | **Hanya relay snapshot terenkripsi.** Tidak menghosting PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 Oktober 2025; aktivitas kode sumber berlanjut pada 2026 | APK Android, DMG macOS, Flatpak Linux; Windows dibangun dari kode sumber | Tanpa akses jaringan; konten dek berupa Markdown | Rilis stabil: SM-2; branch utama: FSRS | Tidak ada | Markdown menyimpan konten kartu; basis data pendamping tersembunyi menyimpan kemajuan belajar | **Tidak ada yang perlu dihosting.** Cadangkan berkas Markdown beserta berkas pendampingnya |

## 1. Anki paling aman sebagai pilihan awal

Anki unggul pada hal-hal penting yang jarang menjadi sorotan. Aplikasi ini bisa merepresentasikan jenis catatan yang rumit, menghasilkan kartu turunan dari templat, menyimpan media bersama koleksi, serta membawa data penjadwalan bertahun-tahun. Rilis desktop stabil untuk pemeriksaan ini adalah [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Build 26.09b2 yang lebih baru ditandai sebagai beta, sehingga tidak menjadi dasar perbandingan di sini.

Cakupan open source-nya tidak seragam. [Repositori desktop berlisensi AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), dengan pengecualian yang dicantumkan untuk komponen yang disertakan. [AnkiDroid](https://github.com/ankidroid/Anki-Android) adalah proyek Android open source yang terpisah. AnkiMobile dan AnkiWeb merupakan produk resmi, tetapi kode sumbernya tidak termasuk dalam repositori tersebut. Penjelasan lebih lengkap ada di [Apakah Anki Open Source?](/blog/is-anki-open-source/).

Klien terpasang menyimpan koleksi lokal, sehingga pengulangan biasa berjalan tanpa koneksi. AnkiWeb adalah layanan online-nya. Jika kemampuan offline menjadi penentu, [Apakah Anki Bisa Digunakan Offline?](/blog/does-anki-work-offline/) menjelaskan apa yang tetap lokal dan apa yang harus menunggu sinkronisasi.

Anki mendukung [FSRS dan penjadwal lamanya](https://docs.ankiweb.net/deck-options.html). Format ekspornya menjadi titik awal migrasi paling lengkap dalam kelompok ini. [COLPKG memuat seluruh koleksi beserta penjadwalan](https://docs.ankiweb.net/exporting.html), sedangkan ekspor APKG bisa menyertakan informasi penjadwalan dan media jika Anda memilih opsi tersebut. Anki juga mengimpor teks, paket Anki, dan basis data Mnemosyne 2.0.

Paket sumber yang lengkap itu tidak menjamin impor sempurna di aplikasi lain. Aplikasi tujuan tetap harus memahami templat, aturan pembuatan kartu, referensi media, dan kolom penjadwal di dalamnya. Namun, informasi yang tersedia untuk diproses memang lebih banyak daripada dalam berkas CSV.

[Server resmi yang bisa dihosting sendiri](https://docs.ankiweb.net/sync-server.html) sengaja dibuat dengan cakupan kecil. Server ini menyinkronkan klien Anki yang kompatibel; tidak menyediakan AnkiWeb, pengulangan melalui browser, atau portal akun. Secara bawaan server menerima koneksi HTTP tanpa enkripsi, dan panduannya menyarankan penggunaan di jaringan lokal atau di belakang VPN maupun reverse proxy HTTPS. Versi klien dan server juga harus tetap kompatibel.

Pilih Anki ketika keutuhan koleksi, templat, add-on, atau dukungan klien yang luas menjadi prioritas. Pertimbangkan aplikasi lain hanya jika kebutuhan tertentu, seperti antarmuka browser yang dihosting sendiri atau seluruh kode aplikasi seluler yang dipublikasikan, lebih penting.

## 2. Mnemosyne menjaga fokus belajar lokal

Mnemosyne terasa seperti alat belajar desktop karena memang itulah fungsinya. Aplikasi ini tidak sekaligus membawa basis pengetahuan atau platform cloud. Anda mendapat basis data lokal, alur pengulangan berjarak tradisional, aplikasi pendamping Android untuk mengulang, dan server sinkronisasi yang bisa berjalan di desktop atau mesin tanpa antarmuka grafis.

Rilis stabil terbarunya masih [2.11 dari November 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Repositori menerima perubahan pada 2026, tetapi perubahan itu belum otomatis menjadi installer stabil. Uji 2.11 pada sistem operasi yang ingin Anda gunakan selama beberapa tahun ke depan.

Lisensinya juga tidak bisa diringkas menjadi satu label. [Pemetaan lisensi di direktori utama](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) menetapkan LGPL v3 untuk openSM2sync dan ketentuan terpisah untuk bagian Mnemosyne lainnya. [Lisensi program utama](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) menerapkan AGPL v3 beserta ketentuan tambahan yang mengharuskan nama Mnemosyne tetap terlihat jelas pada karya turunan, dengan bentuk pastinya dibicarakan bersama pengelola. Baca ketentuan itu sebelum mendistribusikan ulang build yang dimodifikasi.

[Klien Android bisa digunakan untuk pengulangan offline, tetapi tidak bisa mengedit kartu](https://mnemosyne-proj.org/help/android-client). Perangkat lain bisa memakai server pengulangan browser yang dijalankan dari aplikasi desktop, tetapi halaman fitur resmi memperingatkan bahwa server itu tidak memiliki fitur keamanan. Ini antarmuka LAN yang praktis, bukan aplikasi web publik yang siap pakai.

Migrasi adalah alasan terkuat untuk memilih Mnemosyne daripada sekadar tetap memakai Anki. Halaman fitur resmi mendokumentasikan [impor Anki lengkap, termasuk jenis kartu khusus dan data pembelajaran](https://mnemosyne-proj.org/features). [Sinkronisasi bawaannya](https://mnemosyne-proj.org/help/syncing) menggabungkan kartu dan data pembelajaran, serta bisa diarahkan ke mesin yang Anda kendalikan.

Perintah ekspor biasa bisa menyesatkan jika dipakai untuk membuat cadangan. Fungsinya untuk membagikan kartu tertentu, sehingga tidak menyertakan data pembelajaran. Untuk memindahkan atau memulihkan seluruh sistem, [panduan penggunaan beberapa komputer](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) meminta Anda menyalin seluruh direktori data.

Mnemosyne adalah alternatif Anki open source paling kuat di sini untuk kebutuhan belajar yang terfokus. Konsekuensinya adalah jarak antar-rilis stabil yang panjang, penyuntingan seluler yang terbatas, dan akses browser yang perlu dibatasi secara hati-hati di jaringan.

## 3. SiYuan cocok ketika catatan menjadi pusat sistem

SiYuan adalah aplikasi pengelolaan pengetahuan yang mengutamakan privasi, dengan flashcard yang dibangun dalam model blok dan dokumen yang sama. Ini berguna ketika catatan Anda menghasilkan bahan pengulangan. Namun, sistemnya terasa besar jika Anda hanya ingin antrean kartu.

[Repositori AGPL-3.0](https://github.com/siyuan-note/siyuan) menautkan antarmuka, kernel, aplikasi seluler, lapisan data, dan komponen FSRS. Versi [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) adalah rilis stabil yang diperiksa di sini. Klien desktop dan seluler menyimpan ruang kerja secara lokal dan tetap berfungsi offline.

Sinkronisasi tidak termasuk dalam paket penyimpanan lokal gratis. [Halaman harga resmi](https://b3log.org/siyuan/en/pricing.html) menawarkan sinkronisasi resmi dengan enkripsi ujung ke ujung melalui langganan, sedangkan fitur Pro berbayar menambahkan integrasi dengan penyimpanan S3 atau WebDAV milik Anda sendiri. Proyek ini juga memperingatkan agar ruang kerja aktif tidak ditempatkan di folder sinkronisasi berkas umum karena penyuntingan bersamaan bisa merusak atau menimpa data.

Docker menjalankan aplikasi browser sungguhan, tetapi tidak menjadikannya server sinkronisasi bagi aplikasi yang terpasang. [Dokumentasi Docker v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) menyebutkan bahwa klien desktop dan seluler tidak bisa terhubung dengannya. Docker juga meniadakan impor Markdown serta ekspor PDF, HTML, dan Word. Perintah itu ada di aplikasi native secara umum, sehingga menyalin daftar fitur umum ke rencana deployment Docker akan menyesatkan.

Saya tidak menemukan pengimpor APKG resmi. SiYuan bisa memindahkan Markdown dan format datanya sendiri, tetapi koleksi Anki perlu dibangun ulang dengan perencanaan lebih matang.

Pilih SiYuan ketika basis pengetahuan adalah produk utama dan flashcard memang perlu berada di dalamnya. Jika Anda mencari pengganti Anki secara langsung, Mnemosyne dan Anki memiliki cakupan migrasi yang lebih jelas.

## 4. Nibomo membuka lebih banyak kode—dan meminta Anda mengoperasikannya

Nibomo memublikasikan kode sumber dengan cakupan produk terluas dalam perbandingan ini. Monorepo MIT-nya mencakup aplikasi web, klien iOS dan Android, backend, layanan autentikasi, sinkronisasi, aplikasi admin, migrasi basis data, dan infrastruktur AWS. Rilis stabil yang digunakan di sini adalah [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Perubahan yang lebih baru di branch utama tidak dianggap sudah tersedia dalam rilis tersebut.

[Arsitekturnya](/docs/architecture/) mengutamakan penggunaan offline, tetapi arti “offline” sedikit berbeda di setiap klien. Aplikasi web menyimpan data acuan lokalnya di IndexedDB. iOS menggunakan SQLite, sedangkan Android menggunakan Room di atas SQLite. Perubahan ditulis secara lokal dan dimasukkan ke antrean keluar sebelum disinkronkan. Desain itu menangani koneksi yang terputus; tidak membuat penyimpanan browser menjadi permanen atau menghilangkan kebutuhan untuk menguji aplikasi saat dibuka dari kondisi berhenti pada setiap perangkat.

Paket ZIP milik Nibomo adalah format pemindahan konten, bukan cadangan akun. Pada v1.23.0, [skema paketnya](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) membawa konten depan dan belakang, tag, jenis kartu, metadata sumber, dan metadata paket; media yang dirujuk dikemas terpisah. Paket itu tidak membawa struktur dek, riwayat pengulangan, status FSRS, pengaturan ruang kerja, atau akun.

Tidak ada pengimpor APKG pada v1.23.0. [Alur migrasi TXT/CSV Anki yang terdokumentasi](/blog/migrate-from-anki-txt-export-open-source-flashcards/) menggunakan teks hasil ekspor untuk membangun ulang kartu dan memerlukan pemeriksaan manusia. Templat, status penjadwalan, struktur dek, dan media dalam paket tidak otomatis dipertahankan melalui jalur ini. Cara ini masuk akal untuk dek teks sederhana dan kurang cocok untuk koleksi yang banyak dikustomisasi.

[Panduan hosting mandiri](/docs/self-hosting/) juga sama jelasnya. Produksi menggunakan stack AWS CDK dengan RDS, Cognito, API Gateway dan Lambda, S3 dan CloudFront, secret, alarm, serta cadangan. Konfigurasi DNS Cloudflare, email Resend, dan Sentry berada di luar AWS. Docker Compose menjalankan lingkungan pengembangan lokal; bukan paket produksi yang didukung. Operator yang menginginkan biner iOS atau Android privat harus membangun dan mendistribusikannya secara terpisah.

Pilih Nibomo ketika kepemilikan seluruh kode web/native/backend sepadan dengan pekerjaan operasional tersebut. Pilih Anki atau Mnemosyne ketika mempertahankan koleksi lama menjadi kebutuhan yang lebih sulit dipenuhi.

## 5. Recall terasa modern, tetapi pengimpornya perlu dibaca teliti

Recall adalah proyek termuda di antara rekomendasi utama. Aplikasi ini masuk daftar karena [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) menyediakan build desktop berversi, PWA yang bisa dipasang, penyimpanan lokal yang terdokumentasi dengan jelas, FSRS, ekspor data, dan desain sinkronisasi yang bisa dihosting sendiri serta terdokumentasi.

Aplikasi desktop berlisensi MIT ini menggunakan SQLite; PWA-nya menggunakan IndexedDB. Keduanya tidak memerlukan akun, dan proyek menyatakan telemetri dinonaktifkan secara bawaan. Rilis desktop tersedia untuk Windows, macOS, dan Linux.

Pengimpor APKG-nya berguna, tetapi istilah “riwayat pengulangan” dalam README terlalu luas dibanding implementasi pada versi bertag. [Kode pengimpor v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) tidak membaca log pengulangan Anki. Kode itu membaca status kartu saat ini, interval, jumlah pengulangan dan kejadian lupa, serta stabilitas dan tingkat kesulitan FSRS jika Anki menyimpannya. Untuk kartu lama tanpa kolom FSRS tersebut, Recall memperkirakannya dari nilai SM-2.

Konversi kontennya juga memiliki batasan yang perlu diperhatikan. Pengimpor menggunakan dua kolom catatan pertama sebagai sisi depan dan belakang, alih-alih mereproduksi jenis catatan dan templat Anki. Nama dek dan tag dipertahankan. Pengimpor mengekstrak format gambar umum dan menulis ulang referensinya, tetapi melewatkan audio serta media lain. Karena pengimpor merupakan perintah Tauri, migrasi APKG langsung adalah fitur desktop, bukan fitur PWA browser.

Hasil itu jauh lebih baik daripada membangun ulang dari teks biasa, tetapi belum mempertahankan koleksi secara utuh. Uji cloze, kartu turunan dari catatan yang sama, kolom tambahan, HTML/CSS, gambar, audio, tanggal jatuh tempo, dan catatan berulang sebelum mempercayakan migrasi besar kepadanya.

Recall memiliki dua jalur sinkronisasi. Desktop bisa menulis snapshot lengkap (salinan data pada satu waktu) ke folder yang dikelola Dropbox, Drive, atau alat sinkronisasi berkas lain. Relay opsional menggunakan Cloudflare Worker dan bucket R2. Menurut [desain sinkronisasi versi bertag](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md), klien mengenkripsi snapshot dengan AES-GCM sebelum diunggah; relay hanya melihat teks terenkripsi, bukan data kartu atau kuncinya. Pembaruan menggunakan konkurensi optimistis dan mencoba ulang satu konflik, tetapi tetap menggabungkan snapshot lengkap, bukan masing-masing kolom. Tidak ada relay publik yang dibiayai pengelola—Anda melakukan deployment sendiri dan memasukkan URL-nya.

Ekspor JSON dan arsip Recall memberi Anda cara untuk membawa data keluar. Pulihkan salah satunya ke profil kosong sebelum menganggapnya sebagai cadangan.

Pilih Recall ketika Anda menginginkan pengalaman desktop/PWA modern yang mengutamakan data lokal, dan bisa menerima proyek muda serta pengimpor yang mempertahankan snapshot yang berguna alih-alih seluruh sistem Anki.

## 6. Dek Essentialist mudah dibaca, tetapi status belajarnya tersimpan terpisah

Essentialist memiliki cakupan paling kecil di sini. Setiap dek adalah berkas Markdown yang bisa dibuka di editor teks, disimpan dalam kontrol versi, atau disalin dengan alat berkas biasa. Aplikasi ini sengaja tidak membuat permintaan jaringan apa pun.

Rilis stabil terbaru adalah [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Aset rilisnya mencakup build Android, macOS, dan Linux; pengguna Windows membangun dari kode sumber. [README versi bertag](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) menyebut SM-2 sebagai penjadwalnya.

[README branch utama](https://github.com/essentialist-app/essentialist/blob/main/README.md) kini menyebut FSRS, dan repositori menerima perubahan kode pada 2026. Itu menunjukkan arah yang berguna, tetapi bukan alasan untuk menyebut biner 2025 sebagai versi FSRS.

Berkas Markdown juga tidak menyimpan semua data yang mungkin Anda bayangkan. Teks kartu berada dalam berkas yang terlihat, sedangkan kemajuan belajar tersimpan di basis data tersembunyi bernama `.<deck file>.db`. Menyalin `sample.md` tanpa `.sample.md.db` menyimpan pertanyaan dan jawaban, tetapi menghilangkan status pembelajaran.

Tidak ada sinkronisasi perangkat bawaan atau server. Anda bisa menaruh berkasnya di folder tersinkronisasi sendiri, tetapi penanganan konflik dan pemulihan kemudian menjadi tanggung jawab Anda.

Pilih Essentialist ketika Markdown yang mudah dibaca dan alur kerja tanpa jaringan memang menjadi tujuan. Aplikasi ini bukan sistem lintas perangkat yang berjalan mulus, dan satu berkas yang terlihat bukan cadangan lengkap.

## Empat proyek aktif yang layak dipantau

Proyek-proyek ini memang dikembangkan pada 2026. Semuanya belum masuk enam pilihan utama karena rekomendasi membutuhkan lebih dari sekadar kode sumber yang menarik.

| Proyek | Yang sudah tersedia secara konkret | Yang masih menghalangi rekomendasi utama |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Kode sumber AGPL, penjadwal FSRS/SM-2/Leitner, deployment Docker, layanan terkelola, impor CSV, dan ekspor data | Dibuat pada Juli 2026; belum ada rilis aplikasi berversi. Rilis GitHub-nya berupa paket audio, bukan rilis aplikasi |
| [Openlet](https://github.com/ChloeVPin/openlet) | Aplikasi web MIT dengan FSRS, impor CSV, penutupan bagian gambar untuk latihan, dan arsitektur Supabase/Vercel yang terdokumentasi | Belum ada rilis bertag, dan dokumentasi resmi belum menjelaskan sepenuhnya cakupan penggunaan offline, ekspor, serta pemulihan pada hosting mandiri |
| [Prep](https://github.com/Zamua/prep-app) | Kode sumber MIT, FSRS, layanan siap pakai, dan deployment terdokumentasi pada runtime celld yang bisa dihosting sendiri | Belum ada rilis bertag; hosting mandiri juga berarti mengoperasikan celld dan penyimpanan objek, bukan sekadar men-deploy biner flashcard mandiri |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Aplikasi seluler Kotlin GPLv3, FSRS/SM-2, rilis Android, dan impor APKG beserta templat dan media | Dibuat pada 2026; iOS memerlukan build dari kode sumber, dan dokumentasi resmi tidak menjelaskan sinkronisasi antarponsel secara umum |

Beberapa nama yang sudah dikenal tidak lolos karena alasan yang lebih sederhana. [Repositori open source](https://github.com/mochi-cards/open-source) Mochi berisi kumpulan integrasi, bukan aplikasi intinya. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) bersifat open source dan bisa dihosting sendiri, tetapi README resminya masih menempatkan pengulangan berjarak di bagian “Features coming soon” atau fitur yang akan datang. [OpenCards](https://github.com/holgerbrandl/opencards) belum merilis versi baru sejak [v2.5.1 pada Januari 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), dan repositorinya belum menerima perubahan kode sejak 2018.

Jika akses kode sumber bukan syarat wajib, [perbandingan alternatif Anki yang lebih luas](/id/blog/best-anki-alternatives/) mencakup produk untuk kebutuhan yang berbeda.

## Uji migrasi pada lima lapisan terpisah

“Mendukung impor Anki” hampir tidak berarti tanpa penjelasan lanjut. Migrasi bisa berhasil pada satu lapisan dan gagal pada empat lapisan lainnya.

| Lapisan | Yang perlu dibandingkan | Tanda keberhasilan yang menyesatkan |
| --- | --- | --- |
| Konten kartu | Setiap kolom, penanda cloze, tag, karakter khusus, dan catatan berulang | Jumlah total kartu hampir sama |
| Struktur | Jenis catatan, templat, kartu turunan dari catatan yang sama, dan dek bertingkat | Teks depan dan belakang muncul di suatu tempat |
| Media | Gambar dan audio tersalin, bisa ditemukan secara lokal, dan bisa diputar offline | Pengimpor mengenali nama berkasnya |
| Status pembelajaran | Log pengulangan, status, tanggal jatuh tempo, interval, kejadian lupa, dan parameter penjadwal | Kartu hasil impor ada, tetapi diam-diam dimulai lagi sebagai kartu baru |
| Ekspor dan pemulihan | Ekspor atau cadangan yang terdokumentasi bisa membangun ulang sistem yang sama di tempat lain | Ekspor teks yang bisa dibaca dianggap sebagai cadangan lengkap |

Buat satu dek uji yang sengaja rumit sebelum memindahkan koleksi sebenarnya. Sertakan kolom tambahan, cloze, templat arah maju dan balik, dek bertingkat, tag, gambar, audio, serta riwayat pengulangan yang cukup untuk mengungkap apakah aplikasi tujuan mempertahankannya.

Simpan cadangan sumber tanpa mengubahnya. Setelah impor, bandingkan jumlah catatan, kartu, dan media secara terpisah. Periksa tanggal jatuh tempo alih-alih mempercayai pesan “penjadwalan diimpor.” Lakukan pengulangan offline pada setiap perangkat yang ingin Anda gunakan. Lalu buat perubahan uji yang saling bertentangan pada dua perangkat dan amati cara sinkronisasi menanganinya.

Jalankan kedua sistem selama beberapa hari. Menghapus koleksi lama adalah langkah terakhir, bukan bukti bahwa sistem baru berhasil.

## Hosting mandiri belum lengkap sebelum pemulihan diuji

Produk di atas menggunakan istilah “hosting mandiri” untuk bentuk yang sangat berbeda:

- Anki dan Mnemosyne menjalankan **layanan sinkronisasi**, sementara klien terpasang tetap menjadi antarmuka belajar.
- SiYuan Docker menjalankan **aplikasi browser** yang tidak bisa digunakan klien native sebagai server sinkronisasinya.
- Recall menjalankan **relay snapshot terenkripsi**, bukan PWA itu sendiri.
- Nibomo men-deploy **stack web dan backend lengkap**, sedangkan aplikasi native tetap dibuat sebagai build terpisah.
- Essentialist **tidak memiliki server**; yang Anda miliki dan kelola adalah berkas lokal.

Setelah cakupan itu jelas, uji bagian yang cenderung ditunda operator:

1. Buat kartu, lampirkan media, selesaikan pengulangan, dan sinkronkan dari dua klien.
2. Simpan setiap basis data, bucket penyimpanan objek, berkas lokal, secret, dan nilai konfigurasi yang disebutkan dalam dokumentasi.
3. Pulihkan ke akun kosong, mesin kosong, atau deployment yang terisolasi.
4. Bandingkan jumlah kartu, media, riwayat pengulangan, status jatuh tempo, login, dan sinkronisasi klien.
5. Tingkatkan versi salinan yang dipulihkan dan selesaikan satu siklus pengulangan lagi.

Jika pembangunan ulang masih bergantung pada mesin lama, Anda memiliki layanan yang berjalan. Anda belum memiliki cadangan yang terverifikasi.

## Pertanyaan yang sering diajukan

### Apa aplikasi flashcard open source terbaik pada 2026?

Anki adalah pilihan awal terbaik bagi kebanyakan pelajar. Aplikasi ini menggabungkan model koleksi yang matang, FSRS, dukungan klien yang luas, serta format cadangan dan ekspor resmi paling lengkap. Batasannya, aplikasi iOS resmi dan layanan web-nya tidak tercakup dalam repositori desktop open source, dan server yang dihosting sendiri menyediakan sinkronisasi, bukan belajar melalui browser.

### Apa alternatif Anki open source terbaik?

Mnemosyne adalah alternatif paling mapan untuk kebutuhan belajar yang terfokus dan secara resmi mendokumentasikan impor jenis kartu khusus serta data pembelajaran Anki. Recall terlihat lebih modern dan mengimpor berkas APKG langsung di desktop, tetapi mengonversi dua kolom catatan pertama, hanya mempertahankan salinan status penjadwalan pada satu waktu, mengimpor gambar tanpa audio, dan tidak membawa log pengulangan lengkap.

### Bisakah saya menghosting Anki sendiri?

Ya, Anda bisa menjalankan server sinkronisasi resmi Anki untuk klien yang kompatibel. Namun, itu bukan pengganti AnkiWeb yang dihosting sendiri: tidak ada antarmuka belajar melalui browser.

### Apakah open source berarti bisa digunakan offline?

Tidak. Open source menjelaskan lisensi dan akses ke kode sumber. Kemampuan offline bergantung pada tempat klien menyimpan data dan tindakan mana yang memerlukan layanan. Kebalikannya juga berlaku: aplikasi bisa menyimpan datanya secara lokal tanpa memublikasikan kode sumber intinya.

### Apakah hosting mandiri menjamin portabilitas?

Tidak. Hosting mandiri memberi kendali atas tempat layanan berjalan. Portabilitas bergantung pada ekspor, cadangan lengkap, dan pemulihan yang sudah benar-benar Anda uji. Basis data di server sendiri masih bisa sulit dimigrasikan, dan dek Markdown yang mudah dibaca masih bisa tidak menyertakan status pengulangan yang tersimpan di berkas pendampingnya.

## Rekomendasi saya

Tetap gunakan atau pilih **Anki** kecuali salah satu batasannya menimbulkan masalah nyata. Pilih **Mnemosyne** untuk belajar lokal di desktop dengan fokus yang jelas dan impor Anki yang mapan. Gunakan **SiYuan** ketika flashcard perlu menjadi bagian dari basis pengetahuan yang lebih besar. Pertimbangkan **Nibomo** ketika kepemilikan seluruh kode web/native/backend sepadan dengan mengoperasikan stack produksi AWS. Pilih **Recall** untuk klien modern yang mengutamakan data lokal setelah menguji batasan konversinya. Pilih **Essentialist** ketika Markdown biasa dan tanpa akses jaringan lebih penting daripada sinkronisasi.

Aplikasi flashcard open source terbaik bukan repositori dengan daftar fitur terpanjang. Pilihan terbaik adalah aplikasi yang cakupan kode sumber, data offline, migrasi, sinkronisasi, hosting, dan pemulihannya sesuai dengan sistem yang memang siap Anda kelola.
