---
title: "Ulasan Kartu Belajar Mochi (2026): Paket Gratis, Penggunaan Offline, dan Perbandingan dengan Anki"
description: "Ulasan kartu belajar Mochi berdasarkan sumber terverifikasi: paket gratis, aplikasi offline, catatan Markdown, FSRS, sinkronisasi, impor Anki, ekspor, dan batas hosting mandiri."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "kartu belajar mochi"
  - "kartu mochi"
  - "mochi vs anki"
  - "anki vs mochi"
  - "apakah mochi gratis"
  - "mochi offline"
  - "harga mochi"
  - "hosting mochi"
  - "kartu belajar markdown"
  - "pengulangan berjarak mochi"
---

Mochi dimulai dari dokumen Markdown, bukan formulir depan-belakang yang biasa dipakai untuk kartu. Tambahkan satu baris berisi tiga tanda hubung, dan dokumen itu memiliki sisi-sisi yang bisa dipakai untuk pengulangan. Anda bisa membiarkannya sebagai catatan, menautkannya ke kartu lain, atau mengarsipkannya agar tetap bisa dicari tanpa masuk antrean pengulangan.

Pemisah sederhana itu menunjukkan siapa yang cocok memakai **kartu belajar Mochi**. Mochi cocok bagi Anda yang ingin menyimpan catatan dan menjalankan pengulangan berjarak dalam satu aplikasi yang mengutamakan data lokal, terutama jika Markdown, tautan balik, dan pilihan sederhana Remembered/Forgot terasa alami. Daya tariknya lebih kecil bagi pengguna lama Anki yang koleksinya bergantung pada varian kartu yang dihasilkan otomatis, HTML/CSS khusus, JavaScript, add-on, atau pengaturan penjadwal yang terperinci.

Untuk penggunaan di satu perangkat, paket gratisnya lebih dari sekadar uji coba: tidak perlu mendaftar, dan dokumentasi Mochi menyebutkan penggunaan offline tanpa batas. Batasnya, sinkronisasi antarperangkat hanya tersedia dalam **paket Pro seharga US$5 per bulan**. Bagi pengguna Anki, biaya yang lebih berat adalah data dan fungsi yang hilang saat migrasi. Mochi dapat mengimpor paket Anki beserta riwayat pengulangannya, tetapi tidak bisa mempertahankan semua templat, gaya tampilan, skrip, pengaturan penjadwal, atau perilaku add-on.

> **Tentang penulis:** Saya Kirill Markin, pembuat [Nibomo](/id/). Ulasan alur kerja ini didasarkan pada sumber yang diperiksa, bukan klaim bahwa saya telah menguji produknya secara langsung. Tidak ada tautan afiliasi. Perbandingan utamanya tetap Mochi dan Anki; produk saya hanya muncul sebagai alternatif yang diberi label jelas menjelang akhir.

**Fakta diperiksa:** 7 September 2026. Pada tanggal tersebut, [rilis Mochi](https://mochi.cards/changelog/) terbaru yang terlihat adalah versi 26.8.2, tertanggal 10 Agustus 2026. Harga dan detail di toko aplikasi dapat berubah.

![Seorang konservator buku menguji rangkaian kecil kartu terhubung yang dilipat seperti akordeon, sementara arsip aslinya tersimpan aman dalam kotak](/blog/mochi-alternative-v3.png)

## Ulasan singkat

- **Pilih Mochi** jika Anda ingin catatan Markdown dan kartu dalam satu tempat, penggunaan offline tanpa akun di satu perangkat, tautan balik, dan dua pilihan penilaian saat mengulang kartu.
- **Pilih Anki** jika Anda membutuhkan tipe catatan yang matang, templat HTML/CSS, add-on, layanan sinkronisasi gratis, empat tingkat penilaian, atau pengaturan FSRS yang lebih mendalam.
- **Jangan pindah dulu** jika Anda sudah rutin mengulang kartu dan belum bisa menyebutkan masalah alur kerja yang akan diselesaikan Mochi. Antarmuka baru semata tidak cukup untuk mempertaruhkan data penjadwalan bertahun-tahun dan kartu yang sudah disesuaikan.
- **Uji sebelum bermigrasi** jika Anki sudah menjadi tempat koleksi jangka panjang Anda. Mochi menerima file `.apkg` dan dapat membawa riwayat pengulangan, tetapi mengonversi HTML menjadi Markdown serta menghapus CSS dan JavaScript.

## Sekilas perbandingan Mochi dan Anki

| Pertimbangan | Mochi | Anki |
|---|---|---|
| Paling cocok untuk | Pengguna catatan tertaut dan Markdown yang ingin catatan berdampingan dengan kartu pengulangan | Pelajar yang menginginkan sistem kartu belajar yang matang dan dapat dikonfigurasi |
| Pembuatan kartu | Dokumen Markdown menjadi kartu bersisi banyak saat Anda menambahkan `---`; kolom dan templat juga tersedia | Catatan berisi kolom; templat HTML/CSS menghasilkan satu kartu atau lebih |
| Alur pengulangan | Kartu baru masuk tahap belajar terlebih dahulu; kartu yang sudah dipelajari memakai Forgot / Remembered | Kartu memakai Again / Hard / Good / Easy |
| Penjadwalan | Algoritma Mochi sendiri secara bawaan; FSRS bersifat opsional | FSRS atau SM-2 lama, dengan alat penyesuaian FSRS yang lebih lengkap |
| Penggunaan gratis | Tanpa pendaftaran dan penggunaan offline tanpa batas | Aplikasi desktop dan sinkronisasi AnkiWeb gratis; aplikasi resmi iOS berbayar |
| Sinkronisasi antarperangkat | Pro, US$5 per bulan | Gratis melalui AnkiWeb |
| Platform | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, AnkiMobile resmi, AnkiDroid independen |
| Format untuk memindahkan data | Ekspor format asli `.mochi`, Markdown, dan CSV | Format asli `.colpkg` dan `.apkg`, serta teks yang dipisahkan tab |
| Batas kendali data dan hosting | Mengutamakan data lokal; aplikasi intinya tidak ditawarkan sebagai perangkat lunak sumber terbuka, dan tidak ada dokumentasi layanan sinkronisasi mandiri yang didukung | Repositori utama berlisensi AGPL; server sinkronisasi mandiri resmi didokumentasikan |

Pilihan ini terutama bergantung pada prioritas Anda: **kemudahan mengelola catatan atau kendali atas seluruh koleksi**.

## Dasar rancangan antarmuka Mochi

Antarmuka Mochi lebih mudah dipahami jika Anda mengikuti perjalanan satu kartu di dalamnya.

Setiap kartu berada dalam sebuah dek. Klik **New Card** (Kartu Baru), dan Anda mendapat area penulisan Markdown, bukan kolom pertanyaan dan jawaban yang sudah ditentukan. Satu kartu dapat memuat judul, daftar, kode, gambar, kolom terstruktur, dan tautan. Tambahkan `---` di antara blok untuk membuat dua sisi pengulangan atau lebih. Tambahkan `[[double brackets]]` untuk merujuk kartu lain; Mochi membuat tautan balik secara otomatis. [Penjelasan resmi tentang kartu](https://mochi.cards/docs/cards/) juga mendokumentasikan templat dengan placeholder yang menampilkan nilai kolom terstruktur.

Kartu bisa menjalankan dua fungsi tanpa harus berada dalam sistem terpisah:

- kartu belajar menggunakan beberapa sisi dan masuk ke jadwal pengulangan berjarak;
- catatan referensi dapat tetap berada dalam dek yang sama dan diarsipkan, sehingga keluar dari antrean kartu baru maupun kartu jatuh tempo tanpa menghapus isi, tag, tautan, atau riwayatnya.

[Tampilan dek](https://mochi.cards/docs/decks/custom-views/) adalah kombinasi filter, pengurutan, dan tata letak yang disimpan. Anda dapat memakai tampilan kisi untuk melihat-lihat kartu, lalu membuat tampilan lain berdasarkan tag, status jatuh tempo, retensi rendah, atau pengulangan terbaru. Mochi juga memungkinkan tampilan dijadikan sesi belajar intensif tanpa mengubah penjadwalan normal atau riwayat pengulangan. Ini lebih konkret daripada menyebut antarmukanya “rapi”: dek yang sama dapat berfungsi sebagai buku catatan, basis data terfilter, dan antrean belajar.

[Pengulangan harian](https://mochi.cards/docs/getting-started/reviewing-cards/) memiliki dua tahap. Pada **New cards** (Kartu baru), Anda menambahkan kartu ke jadwal pengulangan atau memilih Again untuk melihatnya lagi sebentar kemudian. Setelah dipelajari, kartu yang jatuh tempo menampilkan sisi berikutnya dan meminta Anda memilih **Forgot** (Lupa) atau **Remembered** (Ingat). Jika Anda lupa, Mochi menggunakan antrean untuk mengulang kembali kartu tersebut sebelum mereset kemajuan belajarnya. Dengan begitu, pilihan saat mengulang kartu sengaja dibatasi.

## Apakah Mochi gratis, dan apa yang bisa digunakan offline?

Ya, tetapi makna “gratis” dan “offline” berbeda tergantung tempat Anda menjalankannya. [Halaman harga Mochi](https://mochi.cards/) mencantumkan:

- **Free:** US$0 selamanya, tanpa perlu mendaftar, dengan penggunaan offline tanpa batas.
- **Pro:** US$5 per bulan, menambahkan sinkronisasi antarperangkat, publikasi dek, kolom dinamis, integrasi AI, dan dukungan melalui email.

Mochi berjalan di macOS, Windows, Linux, iOS, Android, dan web. [Panduan unduh dan instalasinya](https://mochi.cards/docs/getting-started/download-and-install/) menjelaskan batas praktisnya:

| Tempat penggunaan | Makna gratis dan offline |
|---|---|
| Aplikasi desktop atau seluler yang terpasang | Anda dapat memakai Mochi secara offline tanpa akun. Data disimpan di perangkat, sehingga satu aplikasi yang terpasang bisa mencukupi seluruh alur kerja gratis. |
| Aplikasi web tanpa Pro | Konten disimpan dalam penyimpanan offline browser. Mochi memperingatkan bahwa browser dapat menghapus data ini tanpa pemberitahuan. |
| Koleksi yang sama di beberapa perangkat | Sinkronisasi otomatis antarperangkat adalah fitur Pro, meskipun setiap aplikasi yang terpasang dapat bekerja offline. |

Dukungan penggunaan offline tidak otomatis mencakup sinkronisasi. Anda tidak memerlukan Pro hanya untuk membuat atau mengulang kartu dalam aplikasi yang diunduh. Anda memerlukannya jika koleksi yang sama dan selalu mutakhir harus otomatis tersedia dari laptop ke ponsel. Untuk data penting di paket gratis, simpan cadangan format asli, alih-alih menjadikan perangkat, terutama penyimpanan browser, sebagai satu-satunya salinan.

Jika kemampuan offline menjadi faktor penentu, bandingkan alur kerja pada perangkat yang Anda gunakan lewat [Apakah Anki Bisa Digunakan Offline?](/blog/does-anki-work-offline/) dan [panduan aplikasi kartu belajar offline](/blog/best-offline-flashcards-app/) yang lebih luas.

## Kartu belajar Markdown adalah alasan utama memilih Mochi

Keunggulan utama Mochi terletak pada cara Markdown mengubah bentuk materi sumber yang Anda kelola.

Kartu Mochi tetap bisa dibaca sebagai teks. Dokumen yang sama dapat memuat penjelasan singkat, blok kode, tautan ke gagasan terkait, dan pemisah antarsisi pengulangan. Kartu juga bisa memakai kolom dan templat jika struktur berulang dibutuhkan. Saat templat diterapkan, Mochi menampilkan Markdown templat dengan placeholder kolom dan mengabaikan Markdown milik kartu saat menampilkannya, tanpa menghapusnya.

Anki berangkat dari model yang berbeda. Catatan menyimpan kolom, sementara [templat kartu](https://docs.ankiweb.net/templates/intro.html) menentukan kolom yang ditampilkan dan kartu yang dihasilkan. Templat menggunakan HTML, dengan CSS untuk gaya tampilan. Jadi, satu catatan kosakata dapat menghasilkan kartu untuk mengenali kata dan kartu untuk mengingat serta menyebutkannya, sementara data dasarnya tetap disimpan di satu tempat.

Struktur tersebut memberi Anki ruang lebih luas untuk tata letak bersyarat, varian kartu yang dihasilkan otomatis, jawaban yang diketik, gaya khusus, dan alur kerja yang diperluas melalui add-on. Ini juga berarti Anki bukan aplikasi kartu belajar dengan dukungan Markdown bawaan. Alur kerja Anki berbasis Markdown membutuhkan lapisan konversi atau add-on tambahan.

Pertanyaan praktisnya sederhana: apakah Anda ingin catatan yang bisa menjadi kartu, atau tipe catatan terstruktur yang bisa menghasilkan beberapa kartu? Mochi mengutamakan yang pertama. Anki mengutamakan yang kedua.

## Pengulangan berjarak Mochi kini mencakup FSRS

Perbandingan yang menyatakan bahwa Mochi tidak memiliki FSRS sudah ketinggalan. Mochi menambahkan versi pratinjau FSRS pada 2025 dan terus merilis perbaikan terkait penjadwal. Meski begitu, [algoritma Mochi sendiri tetap menjadi pilihan bawaan](https://mochi.cards/docs/reviewing/fsrs/).

Algoritma bawaan mengubah interval dengan pengali tetap setiap kali Anda mengulang kartu, baik saat berhasil mengingat jawabannya maupun saat lupa. Beralihlah ke FSRS di Review Settings (Pengaturan Pengulangan), dan kartu yang sudah dipelajari akan memakai FSRS tanpa kehilangan riwayatnya. Anda dapat menetapkan target retensi, memasukkan parameter khusus, dan beralih kembali nanti.

Mochi tetap memakai dua pilihan penilaian pada kedua penjadwal:

- **Forgot** dipetakan ke Again pada FSRS.
- **Remembered** dipetakan ke Good pada FSRS.

Dokumentasi Mochi menyebutkan bahwa penilaian biner dapat digunakan dengan FSRS, tetapi tidak memberikan sebagian informasi yang bisa diperoleh dari Hard dan Easy. Mochi menerima parameter khusus yang telah dioptimalkan, tetapi tidak memiliki pengoptimal bawaan; pembuatan parameter pribadi memerlukan pengoptimal FSRS eksternal dan riwayat pengulangan Mochi.

[Pengaturan FSRS Anki](https://docs.ankiweb.net/deck-options.html#fsrs) lebih lengkap. Retensi yang diinginkan dan parameter dapat dikaitkan dengan preset, pengoptimal bawaan dapat menyesuaikan parameter berdasarkan riwayat pengulangan, dan simulator memperkirakan jumlah pengulangan atau menit belajar pada pengaturan yang berbeda. Anki juga mencatat empat hasil: Again, Hard, Good, dan Easy.

Tombol tambahan itu hanya membantu jika Anda menggunakannya secara konsisten. Panduan Anki menganggap Hard sebagai keberhasilan mengingat. Menekan Hard saat Anda lupa jawaban memberikan informasi yang salah kepada FSRS dan dapat menghasilkan interval yang terlalu panjang.

Pilih pengulangan biner Mochi jika pilihan berhasil atau gagal mengingat membuat sesi belajar lebih sederhana. Pilih Anki jika Anda menginginkan informasi penilaian tambahan dan akan memakai pengoptimal, pengaturan retensi, preset, atau simulator beban belajarnya. Untuk pembahasan penjadwal, bukan aplikasinya, lihat [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

## Mochi dan Anki mengenakan biaya untuk hal yang berbeda

Untuk belajar di satu komputer, keduanya bisa gratis. Biaya muncul di bagian yang berbeda ketika lebih banyak perangkat masuk ke alur kerja.

Mochi mengenakan **US$5 per bulan** untuk sinkronisasi Pro, satu paket dengan publikasi, kolom dinamis, integrasi AI, dan dukungan. Aplikasi desktop Anki gratis, dan [situs resmi Anki](https://apps.ankiweb.net/) menyebutkan bahwa sinkronisasi AnkiWeb gratis. AnkiMobile adalah aplikasi resmi berbayar untuk iPhone dan iPad; AnkiDroid adalah klien Android gratis yang dikembangkan secara independen.

Jadi, jawaban atas “Mana yang lebih murah?” bergantung pada perangkat Anda:

- satu komputer: keduanya bisa gratis;
- beberapa perangkat desktop atau Android: layanan sinkronisasi gratis Anki menghindarkan Anda dari langganan;
- iPhone atau iPad: Anki menambahkan pembelian aplikasi sekali bayar, sedangkan Mochi menyediakan sinkronisasi antarperangkat melalui paket Pro berlangganan;
- pengguna Mochi yang sudah membutuhkan publikasi, kolom dinamis, atau integrasi AI-nya mungkin memandang sinkronisasi sebagai salah satu bagian paket, bukan satu-satunya alasan membayar.

Periksa App Store di wilayah Anda sebelum membandingkan total biaya iOS secara persis. Ulasan ini tidak menetapkan harga toko aplikasi yang dapat berbeda antarwilayah sebagai angka tetap.

## Hosting Mochi berbeda dari penggunaan yang mengutamakan data lokal

Tiga istilah ini sering dianggap sama:

- **Mengutamakan data lokal (local-first)** berarti salinan data yang Anda gunakan berada di perangkat Anda dan aplikasi dapat terus berjalan tanpa layanan cloud-nya.
- **Sumber terbuka (open source)** berarti kode sumber tersedia dengan lisensi yang mengizinkan pemeriksaan dan perubahan.
- **Hosting mandiri (self-hosted)** berarti produk mendokumentasikan cara yang didukung untuk menjalankan layanan terkait di infrastruktur Anda sendiri.

Mochi mendokumentasikan dengan jelas bahwa aplikasinya mengutamakan data lokal. Mochi tidak menawarkan aplikasi intinya sebagai perangkat lunak sumber terbuka: tautan “Open source” di bagian bawah situs publiknya mengarah ke [kumpulan integrasi](https://github.com/mochi-cards/open-source), bukan aplikasi inti. Situs resminya juga tidak mendokumentasikan cara yang didukung untuk mengganti sinkronisasi Pro dengan layanan di server sendiri.

Jika Anda mencari **hosting Mochi** karena ingin memakai server sendiri, inilah batasnya: Anda dapat menyimpan data lokal dan cadangan format asli, tetapi cara sinkronisasi antarperangkat yang didokumentasikan adalah Mochi Pro. Penyimpanan lokal memberi Anda kendali atas data, tetapi tidak berarti layanannya bisa dihosting sendiri.

Repositori utama Anki [berlisensi AGPL versi 3 atau lebih baru](https://github.com/ankitects/anki/blob/main/LICENSE), dengan pengecualian yang dicantumkan untuk beberapa komponen. Panduan resminya juga mendokumentasikan [server sinkronisasi mandiri](https://docs.ankiweb.net/sync-server.html) untuk pengguna tingkat lanjut. Server tersebut menggantikan sinkronisasi AnkiWeb untuk klien yang kompatibel; server itu bukan salinan situs AnkiWeb yang dihosting sendiri, dan Anki mengharapkan pengelolanya mampu menangani persoalan baris perintah, jaringan, firewall, protokol, dan pembaruan.

## Apa yang dipertahankan dan diubah saat mengimpor dari Anki

[Dokumentasi impor](https://mochi.cards/docs/import-and-export/importing/) Mochi menyatakan dukungan untuk file Anki `.apkg`, termasuk riwayat pengulangan. Namun, “berhasil diimpor” belum berarti “setara”.

Saat mengimpor, Mochi mengonversi HTML menjadi Markdown dan menghapus CSS serta JavaScript. Ini adalah konversi format antara dua model kartu yang berbeda. Kartu sederhana dengan sisi depan dan belakang paling mudah dipindahkan. Kartu yang bergantung pada gaya tampilan, logika templat, interaksi mengetik, atau JavaScript perlu diperiksa setelah diimpor.

Riwayat pengulangan juga memerlukan pilihan ekspor yang eksplisit. [Panduan ekspor](https://docs.ankiweb.net/exporting.html) Anki menyebutkan bahwa **Include Scheduling Information** (Sertakan Informasi Penjadwalan) menentukan apakah riwayat pengulangan masuk ke paket. Jika Anda tidak mengaktifkannya, Mochi tidak dapat memulihkan riwayat yang sejak awal tidak ada dalam `.apkg`.

Sekalipun riwayat terbawa, jangan mengharapkan tanggal jatuh tempo berikutnya identik. Kedua aplikasi dapat memakai penjadwal, penilaian, target retensi, parameter, langkah belajar, dan pengaturan dek yang berbeda. Catatan pengulangan yang dipertahankan menjadi data bagi penjadwal baru; data itu tidak membuat kedua sistem identik.

## Cadangan format asli dan teks portabel punya fungsi berbeda

Sebelum memindahkan apa pun, simpan cadangan yang dapat memulihkan sistem asli. Ekspor yang dapat dibaca memang berguna, tetapi tidak selalu bisa dipakai untuk pemulihan.

[Panduan pencadangan](https://mochi.cards/docs/getting-started/backing-up/) Mochi mendokumentasikan dua opsi pengamanan dalam format aslinya:

- Menyalin seluruh direktori pengguna mempertahankan konten, riwayat pengulangan, lampiran, pengaturan aplikasi, dan status login.
- Ekspor `.mochi` mempertahankan dek, kartu, templat dan kolom, lampiran, tag dan metadata, riwayat pengulangan, urutan kartu, serta struktur dek.

[Ekspor Markdown dan CSV](https://mochi.cards/docs/import-and-export/exporting/) Mochi adalah format untuk membawa data ke aplikasi lain. Markdown membuat satu file per kartu dan folder untuk subdek, tetapi menghilangkan riwayat pengulangan, urutan kartu, templat, dan tag metadata, kecuali tag tersebut berada dalam Markdown. CSV dapat mengekspor kolom templat atau sisi depan-belakang yang sudah dirender, tetapi tidak mempertahankan riwayat pengulangan maupun templat; tag metadata juga hilang kecuali disematkan dalam konten.

Anki membuat pembedaan serupa:

- `.colpkg` mengekspor seluruh koleksi beserta penjadwalan dan dapat menyertakan media. Mengimpornya akan menggantikan kartu dalam koleksi Anki tujuan.
- `.apkg` mengekspor satu dek beserta subdeknya, dengan opsi untuk informasi penjadwalan, preset, dan media.
- Catatan dalam teks biasa memakai kolom yang dipisahkan tab dengan pemformatan HTML tertanam. Format ini mempertahankan konten yang dapat diedit, bukan seluruh perilaku koleksi.

Kembali dari Mochi ke Anki biasanya dilakukan melalui CSV. Anki dapat [memetakan kolom teks ke kolom catatan](https://docs.ankiweb.net/importing/text-files.html), tetapi tautan Mochi, perilaku kartu bersisi banyak, templat, dan riwayat pengulangan tidak menjadi objek Anki yang setara melalui file itu. Simpan ekspor `.mochi` bahkan setelah salinan Anki tampak benar.

## Uji dek yang mewakili koleksi dan pastikan Anda bisa kembali

Dialog migrasi membuktikan bahwa file diterima. Dialog itu tidak membuktikan bahwa koleksi asli Anda masih berfungsi, atau bahwa konten yang dapat digunakan bisa dibawa kembali. Uji kedua arah tanpa mengubah profil Anki yang biasa Anda pakai.

1. **Cadangkan seluruh koleksi Anki.** Ekspor `.colpkg` beserta media dan simpan di luar profil yang digunakan.
2. **Pastikan cadangan bisa dibuka.** Buat profil Anki sementara yang kosong, lalu impor `.colpkg` di sana. Impor paket koleksi menggantikan koleksi tujuan; itulah alasan profil sementara diperlukan.
3. **Buat dek yang mewakili koleksi di profil sementara tersebut.** Batasi ukurannya agar dapat diperiksa kartu demi kartu, tetapi sertakan fungsi yang Anda andalkan: kartu dasar dan terbalik, cloze, templat khusus, CSS, JavaScript, gambar, audio, persamaan, tag, dek bertingkat, dan riwayat pengulangan.
4. **Ekspor dek itu sebagai `.apkg`.** Sertakan informasi penjadwalan, preset, dan media jika dibutuhkan. Opsi tersebut memasukkan data ke paket Anki; opsi itu tidak menjamin Mochi akan mereproduksi setiap pengaturan.
5. **Impor ke dek Mochi baru.** Biarkan profil Anki sehari-hari dan antrean jatuh temponya tetap utuh.
6. **Periksa sebelum mengulang kartu.** Bandingkan konten, pemformatan, kolom, media, tag, struktur dek, dan riwayat. Perhatikan khususnya bagian yang bergantung pada HTML, CSS, JavaScript, atau varian kartu yang dihasilkan otomatis.
7. **Tentukan penjadwal yang akan digunakan.** Mochi mulai dengan algoritmanya sendiri. Aktifkan FSRS hanya jika itulah yang akan Anda gunakan setelah uji coba.
8. **Ulangi kartu salinan selama satu minggu seperti biasa.** Nilai alur pengeditan Markdown, tahap New cards, pilihan Remembered/Forgot, kemampuan offline, serta sinkronisasi pada perangkat yang benar-benar Anda bawa jika Anda membayarnya.
9. **Uji pemindahan kembali ke Anki.** Ekspor dek uji Mochi sebagai `.mochi` untuk cadangan format asli dan sebagai CSV untuk Anki. Gunakan CSV berisi nilai kolom jika kolom yang dapat dipakai ulang penting; gunakan CSV berisi sisi yang sudah dirender jika kebutuhan utama Anda adalah konten depan-belakang yang terlihat. Impor CSV tersebut ke profil Anki kosong lainnya dan petakan kolomnya ke tipe catatan yang sesuai.
10. **Catat setiap data atau fungsi yang rela Anda korbankan.** Periksa pemindahan ke Mochi dan kembali ke Anki secara terpisah. Gaya tampilan yang persis sama, perilaku kartu bersisi banyak, perilaku add-on, varian otomatis, penilaian pengulangan, riwayat, atau tanggal jatuh tempo mendatang mungkin lebih penting dalam penggunaan sehari-hari daripada saat dilihat di tabel perbandingan.

Kembali melalui CSV berarti memigrasikan konten, bukan memulihkan Mochi secara utuh: CSV tidak membawa riwayat pengulangan atau templat, dan hanya membawa tag metadata jika tag tersebut disematkan dalam konten. Jika Mochi tidak menyelesaikan masalah yang Anda sebutkan, hapus dek uji dan lanjutkan dengan profil Anki asli. Jika berhasil, migrasikan dek asli satu per satu dan simpan cadangan Anki `.colpkg` serta Mochi `.mochi` selama beberapa siklus pengulangan biasa.

## Siapa yang sebaiknya memakai kartu belajar Mochi?

Mochi cocok jika:

- Anda sudah terbiasa menulis dan berpikir dengan Markdown;
- catatan dan kartu pengulangan perlu saling tertaut dalam satu ruang kerja;
- Anda menginginkan pilihan sederhana Remembered/Forgot, bukan empat tingkat penilaian;
- penggunaan offline di satu perangkat sudah memenuhi kebutuhan gratis Anda, atau sinkronisasi Pro layak dibayar US$5 per bulan;
- koleksi Anda masih baru atau cukup sederhana sehingga konversi dari Anki berisiko rendah.

Tetaplah memakai Anki jika:

- tipe catatan Anda menghasilkan beberapa varian kartu yang penting;
- templat HTML/CSS, JavaScript, add-on, atau dek yang dibagikan merupakan bagian dari sistem Anda;
- sinkronisasi gratis antarperangkat lebih penting daripada menulis dengan Markdown;
- Anda menginginkan pengoptimal FSRS, pengaturan preset, empat tingkat penilaian, dan simulator beban belajar Anki;
- data pengulangan bertahun-tahun dan fungsi khusus Anda sudah bekerja dengan baik.

Alternatif Mochi yang paling masuk akal bergantung pada alasan kedua pilihan itu tidak cocok. Untuk koleksi baru yang lebih sederhana, [fitur Nibomo](/id/features/) mencakup pengulangan FSRS, belajar offline dan sinkronisasi, transfer kartu/tag/media yang portabel, akses agen, serta jalur hosting mandiri yang didokumentasikan. Saya pembuatnya, dan batasan berikut perlu diperhitungkan: Nibomo tidak menggantikan buku catatan Markdown tertaut milik Mochi atau sistem templat dan add-on Anki yang matang. [Panduan memulai](/docs/getting-started/) menjelaskan pilihan layanan hosting, aplikasi seluler, agen, dan hosting mandiri yang tersedia.

## Kesimpulan

Mochi lebih dari sekadar antarmuka Anki yang lebih menarik. Gagasan utamanya adalah bahwa catatan Markdown, catatan pengetahuan yang saling tertaut, dan kartu pengulangan berjarak dapat menjadi objek yang sama. Paket gratis mencakup penggunaan offline tanpa akun; Pro menambahkan fitur layanan hosting, termasuk sinkronisasi antarperangkat.

Ini pilihan yang masuk akal bagi pelajar yang memulai koleksi baru berbasis Markdown. Pindah dari Anki juga bisa sepadan jika pengujian dek yang mewakili koleksi membuktikan bahwa Markdown bawaan dan pengulangan biner mengurangi hambatan yang nyata.

Bagi pengguna lama Anki, Mochi perlu membuktikan bahwa perpindahan itu layak. Cadangkan koleksi, uji kartu dengan fungsi khusus terbanyak, dan tetap gunakan Anki kecuali Mochi memperbaiki alur kerja dari minggu ke minggu secara cukup berarti untuk mengimbangi fitur pemformatan, templat, penjadwal, dan ekosistem yang harus ditinggalkan.
