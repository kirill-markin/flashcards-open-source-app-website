---
title: "Apakah Quizlet Memiliki Server MCP pada 2026? Apa yang Bisa Digunakan Claude dan Codex"
description: "Quizlet tidak mendokumentasikan server MCP pada 2026. Bandingkan aplikasi ChatGPT, ekspor khusus pembuat set, dan jalur aman untuk akses rutin Claude atau Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "MCP Quizlet"
  - "server MCP Quizlet"
  - "konektor Quizlet Claude"
  - "menghubungkan Quizlet ke Claude"
  - "Quizlet Codex"
  - "aplikasi Quizlet di ChatGPT"
  - "alternatif API Quizlet"
---

Per 12 September 2026, dokumentasi publik Quizlet tidak mencantumkan server MCP ataupun API pengembang publik yang dapat diakses secara mandiri. Jika Anda mencari URL MCP Quizlet untuk ditempelkan ke Claude, Codex, atau klien MCP lainnya, saat ini tidak ada panduan penyiapan publik dalam dokumentasi Quizlet.

Quizlet memang memiliki aplikasi resmi di ChatGPT. Aplikasi ini dapat mengubah percakapan ChatGPT menjadi set Quizlet baru, tetapi alur khusus tersebut bukan server MCP Quizlet yang bisa digunakan untuk berbagai keperluan. Jika Anda memerlukan akses agen secara rutin ke kartu yang sudah ada, cara praktisnya adalah mengekspor teks dari set buatan Anda, menyimpan salinan mentah, memeriksa hasil pemindahan, lalu menggunakan sistem kartu belajar yang secara eksplisit mendukung operasi baca dan tulis oleh agen.

**Fakta diperiksa:** 12 September 2026.

> **Pengungkapan:** Saya Kirill Markin, pengembang Nibomo. Server MCP dan Agent API Nibomo disebut sebagai alternatif di bawah ini. Nibomo tidak dapat terhubung ke akun Quizlet atau mengimpor URL Quizlet.

![Seorang tukang kebun membawa satu tanaman muda dari rumah kaca tertutup ke petak kebun dengan irigasi tetes bercabang](/blog/quizlet-mcp-server.png)

## Aplikasi ChatGPT, ekspor, dan MCP punya fungsi berbeda

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) adalah standar terbuka untuk menghubungkan aplikasi AI ke sistem eksternal. Server MCP biasanya menyediakan endpoint yang jelas dan sekumpulan alat terdefinisi yang dapat dipanggil oleh klien yang kompatibel.

[Pengumuman resmi Quizlet tentang ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) menjelaskan bentuk integrasi yang berbeda. Anda memasang aplikasi Quizlet di ChatGPT, mengawali prompt dengan `@Quizlet`, melihat pratinjau kartu belajar yang dihasilkan di dalam ChatGPT, lalu membuka set tersebut di Quizlet untuk menyesuaikan isinya dan belajar.

Ini berguna jika tujuannya adalah “mengubah percakapan ChatGPT ini menjadi set Quizlet.” Pengumuman tersebut tidak memublikasikan endpoint MCP Quizlet untuk penggunaan umum, memberikan akses Claude atau Codex ke koleksi Quizlet Anda, ataupun menawarkan kredensial pengembang yang dapat digunakan kembali.

Pernyataan ini tidak menyimpulkan apa pun tentang infrastruktur privat atau internal Quizlet. Ini hanya menjelaskan antarmuka yang disediakan Quizlet dalam dokumentasi publiknya. Batas akses pengembang secara lebih luas dibahas dalam [Apakah Quizlet Memiliki API Publik pada 2026?](/id/blog/quizlet-api/).

Berikut perbedaannya:

| Yang sebenarnya Anda butuhkan | Jalur dengan dukungan paling jelas saat ini | Yang bisa diharapkan |
| --- | --- | --- |
| Membuat set Quizlet baru dari percakapan ChatGPT | Aplikasi resmi Quizlet di ChatGPT | Alur khusus `@Quizlet` di dalam ChatGPT, dilanjutkan dengan penyuntingan dan belajar di Quizlet |
| Memindahkan istilah dan definisi dari set buatan Anda | Ekspor melalui situs web Quizlet | Salinan teks untuk pemindahan satu kali yang Anda simpan dan periksa |
| Mengizinkan Claude, Codex, atau agen lain membaca atau menyunting kartu belajar berulang kali | Sistem kartu belajar dengan server MCP atau API agen yang terdokumentasi | Akses terautentikasi ke ruang kerja tujuan, bukan ke Quizlet |
| Membangun perangkat lunak yang menggunakan data akun Quizlet | Menunggu dokumentasi pengembang resmi atau jalur mitra yang berwenang | Saat ini tidak ada kontrak API atau MCP publik Quizlet yang terdokumentasi dan dapat digunakan secara mandiri |

Aplikasi Quizlet di ChatGPT menangani satu alur pembuatan. Ekspor menangani pemindahan dengan cakupan terbatas. MCP menangani akses berulang ke sistem yang sengaja menyediakan alat. Ketiganya tidak dapat saling menggantikan.

## Pilih jalur terpendek yang didukung

Jika aplikasi resmi ChatGPT sudah sesuai dengan tugasnya, gunakan saja. Tidak ada alasan menambahkan sistem kedua hanya untuk membuat satu set Quizlet dari satu percakapan.

Jika Anda hanya memerlukan cadangan atau pemindahan satu kali, gunakan ekspor Quizlet. Jika Anda ingin agen kembali besok untuk mencari dek, menambahkan kartu, dan memperbaikinya, Anda memerlukan antarmuka baca/tulis yang terdokumentasi pada sistem tujuan. Sampai Quizlet menerbitkannya, alur berulang seperti itu tidak dapat menjadi koneksi langsung yang didukung ke akun Quizlet Anda.

Untuk perangkat lunak khusus yang dibangun secara spesifik untuk menggunakan data Quizlet, patuhi batas yang sama. Permintaan dari browser, pustaka pembungkus lama, atau integrasi hasil rekayasa balik bukan pengganti dokumentasi pengembang terkini.

## Pastikan pemindahan set buatan Anda bisa dibatalkan

[Petunjuk ekspor resmi Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) menyatakan bahwa hanya pembuat set yang dapat mengekspornya, dan hanya melalui situs web. Alurnya adalah **More → Export → Copy text** (Lainnya → Ekspor → Salin teks). Ekspor mencakup istilah dan definisi; menurut Quizlet, gambar tidak dapat diekspor dan set hasil salinan tidak memenuhi syarat untuk diekspor.

Untuk set buatan Anda, langkah pemindahan yang hati-hati cukup singkat:

1. Gunakan fitur ekspor di situs web Quizlet dan tempelkan hasilnya ke berkas teks biasa.
2. Simpan salinan UTF-8 yang belum diubah sebelum mengubah pemisah, pergantian baris, atau susunan kata.
3. Sunting berkas duplikat, bukan hasil ekspor mentah.
4. Periksa sampel dari bagian awal, tengah, dan akhir, termasuk definisi multibaris dan karakter non-Latin.
5. Impor atau lampirkan salinan kerja, lihat pratinjau sisi depan dan belakang beberapa kartu, baru kemudian simpan kartu-kartu tersebut.
6. Simpan set Quizlet dan berkas mentah sampai dek tujuan sudah dibuka dan diuji.

Pemeriksaan lengkap untuk pemisah, CSV, dan berkas dijelaskan dalam [Cara Mengekspor Set Quizlet pada 2026](/id/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Ada batas penting yang mudah terlewat: ekspor memindahkan teks kartu, bukan gambar, folder, riwayat belajar, status penguasaan, ataupun penjadwalan dari Quizlet.

Itulah sebabnya Anda perlu bisa kembali ke data awal jika pemindahan bermasalah. Jika satu definisi multibaris berubah menjadi dua kartu atau pemisah menggeser kolom, berkas mentah menjadi acuan yang utuh.

## Yang dapat digunakan Claude dan Codex setelah ekspor

Nibomo menyediakan endpoint MCP jarak jauh di:

`https://mcp.nibomo.com/mcp`

> [Hubungkan ke Claude](https://claude.ai/directory/nibomo) · [Dokumentasi](/id/docs/mcp-connector/)

[Dokumentasi konektor MCP](/id/docs/mcp-connector/) Nibomo mendefinisikan delapan alat: `list_workspaces`, `sql_query` untuk membaca, `sql_execute` untuk menulis, `get_guide` untuk panduan referensi, serta `next_review_card`, `reveal_answer`, dan `submit_review` untuk pengulangan belajar. Klien MCP interaktif dapat memberikan otorisasi melalui OAuth. Agen terminal dapat memulai dari [dokumentasi Agent API](/id/docs/api/) dan menggunakan alur HTTP yang dipublikasikan.

`get_usage_limits` — hanya membaca paket akun, batas penggunaan, dan penggunaan AI bulanan saat ini; alat ini tidak membaca atau mengubah kartu.

Ini tidak menjadikan Nibomo sebagai konektor Quizlet. Alur yang didukung adalah:

1. mengekspor teks dari set Quizlet buatan Anda sendiri;
2. menyimpan berkas mentah dan memeriksa salinan kerja;
3. meninjau hasil pemetaan kartu sebelum menyimpannya di Nibomo; dan
4. menghubungkan ruang kerja Nibomo yang dihasilkan ke klien yang kompatibel untuk operasi baca dan tulis berikutnya.

Untuk Claude, langkah-langkah menghubungkan konektornya tersedia di [Cara Menghubungkan Nibomo ke Claude dengan MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex dan agen lain dapat menggunakan jalur MCP atau Agent API terdokumentasi yang didukung oleh lingkungan masing-masing.

Nibomo tidak dapat membaca URL Quizlet, membuat cerminan akun Quizlet, menyinkronkan perubahan Quizlet di kemudian hari, atau memulihkan gambar dan riwayat belajar yang tidak disertakan dalam ekspor. Nibomo membuat kartu sendiri dan status penjadwalan baru dari materi yang Anda pilih untuk dipindahkan.

Jika Anda sedang mempertimbangkan apakah manfaat pemindahan ini sepadan dengan keterbatasannya di luar kebutuhan akses agen, lihat [perbandingan alternatif Quizlet sumber terbuka](/blog/quizlet-alternative/).

## Batasi izin agar tidak melebihi kebutuhan tugas

Kontrak antarmuka publik mengurangi sebagian ketidakpastian integrasi, tetapi tidak membuat setiap tindakan MCP menjadi aman. OAuth mengautentikasi koneksi. OAuth tidak menjamin bahwa kartu buatan AI sudah benar, tidak menjaga agar data kartu yang dikembalikan tetap berada di dalam layanan kartu belajar, dan tidak menentukan apakah suatu suntingan sesuai dengan maksud Anda.

Nibomo memisahkan operasi baca dari alat tulisnya: `sql_execute` untuk kartu dan dek, `submit_review` untuk pengulangan belajar. Kredensial OAuth tetap mencakup seluruh antarmuka konektor, sehingga pemblokiran alat dan mekanisme persetujuan bergantung pada klien. Mulailah dengan ruang kerja kecil tanpa data sensitif. Izinkan agen membaca hanya data yang diperlukan untuk tugas tersebut, wajibkan persetujuan untuk setiap pemanggilan alat tulis jika klien mendukungnya, dan periksa ruang kerja serta usulan perubahan sebelum menyetujuinya.

Jangan hubungkan materi belajar pribadi sebelum memeriksa ketentuan retensi dan penanganan data dari klien AI. Untuk pemindahan pertama, aturan sederhana sudah cukup: simpan ekspor mentah, lihat pratinjau beberapa kartu, setujui operasi tulis dengan cakupan terbatas, dan periksa hasilnya di aplikasi tujuan sebelum melanjutkan.

## Jangan jadikan lalu lintas browser privat sebagai API

Permintaan yang terlihat di alat pengembang browser bukan API publik Quizlet. Endpoint privat dapat bergantung pada cookie sesi, format internal, dan perilaku yang berubah tanpa pemberitahuan. Setiap penggunaan otomatis juga harus mematuhi [Ketentuan Layanan Quizlet](https://quizlet.com/tos) serta izin yang Anda miliki atas materi tersebut.

Artikel ini tidak menyediakan petunjuk scraping atau endpoint hasil rekayasa balik. Jika aplikasi resmi ChatGPT sesuai dengan tugasnya, gunakan itu. Jika Anda membuat set tersebut dan perlu memindahkannya sekali saja, ekspor set itu. Jika Anda memerlukan operasi baca dan tulis oleh agen secara rutin, pindahkan konten yang telah ditinjau ke sistem yang memublikasikan antarmuka tersebut, lalu tetap lakukan langkah di sisi Quizlet secara manual kecuali Quizlet mendokumentasikan sesuatu yang baru.
