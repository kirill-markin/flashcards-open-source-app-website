---
title: "Alternatif RemNote pada 2026: Pilihan Gratis dan Sumber Terbuka"
description: "Bandingkan alternatif RemNote untuk catatan, PDF, kartu, harga, dan hosting mandiri. Pahami apa yang bisa dipindahkan, apa yang hilang, dan cara menguji migrasi dengan aman."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternatif remnote"
  - "aplikasi pengganti remnote"
  - "remnote sumber terbuka"
  - "alternatif remnote gratis"
  - "remnote vs anki"
  - "alternatif remnote sumber terbuka"
  - "alternatif remnote hosting mandiri"
  - "aplikasi kartu belajar offline"
---

RemNote memberi label **Flashcards Only** pada ekspor Anki-nya. Butir catatan tanpa kartu dilewati, dan paket tersebut tidak memuat sistem catatan tertaut, PDF, atau alur kerja Reader Anda. Aplikasi pengganti bisa menerima semua pertanyaan dan jawaban, tetapi tetap meninggalkan sistem yang membuat kartu-kartu itu berguna.

**Alternatif RemNote** terbaik adalah pilihan yang mengatasi alasan Anda ingin pindah tanpa diam-diam menghilangkan bagian RemNote yang masih berguna. Bagi sebagian orang, masalahnya adalah harga. Bagi yang lain, kebutuhannya berupa file lokal biasa, sistem kartu yang lebih lengkap, atau kode sumber yang bisa dijalankan sendiri.

> **Tentang penulis:** Saya Kirill Markin, pembuat [Nibomo](/id/), salah satu produk yang dibandingkan di sini. Nibomo bukan pengganti RemNote sepenuhnya. Dalam perbandingan ini, RemNote memiliki alur kerja catatan dan PDF terintegrasi yang paling kuat, sedangkan Anki memiliki sistem kartu dan format migrasi yang paling matang.

**Fakta dan harga diperiksa:** 31 Agustus 2026. Harga yang tercantum menggunakan harga publik di AS, dengan pembayaran tahunan jika disebutkan; pajak, wilayah, toko aplikasi, dan ketentuan beta bisa mengubah jumlahnya.

![Seorang konservator arsip menguji pemindahan sebagian kecil berkas belajar tertaut yang masih utuh ke sistem kartu, file, dan blok yang terpisah](/blog/remnote-alternative.png)

## Mulai dari alasan Anda ingin pindah

- **Harga:** Periksa apakah RemNote Free sebenarnya sudah memenuhi kebutuhan Anda. Paket ini mencakup catatan, kartu belajar, dan perangkat tersinkronisasi tanpa batas, tetapi membatasi dokumen yang diberi anotasi dan beberapa fitur lanjutan.
- **Alur belajar dengan kartu yang terasa terlalu terikat pada catatan:** Coba Anki. Di sana, kartu, templat, impor, dan FSRS bisa menjadi pusat sistem belajar Anda.
- **File catatan lokal biasa:** Bagi tugas antara Obsidian untuk catatan Markdown dan Anki untuk pengulangan. Integrasinya lebih terbatas, tetapi batas kepemilikan datanya jauh lebih jelas.
- **Catatan tertaut bersumber terbuka dengan PDF dan kartu bawaan:** Logseq adalah pilihan yang paling mendekati, dengan batasan penting pada 2026: versi basis data barunya masih beta, aplikasi iOS baru dan sinkronisasi waktu nyatanya masih alfa, dan aplikasi Android barunya belum dibuka untuk pengujian.
- **Kode sumber dan hosting mandiri untuk sistem yang berfokus pada kartu:** Pertimbangkan Nibomo jika kartu depan-belakang sudah cukup dan Anda siap memulai jadwal pengulangan dari awal serta menangani pengoperasian AWS yang cukup rumit.
- **Membaca PDF, sorotan tertaut, dan kartu dalam satu tempat:** Tetap gunakan RemNote. Tidak ada pilihan lain di sini yang bisa menggantikan alur itu dengan mulus.

Jawaban terakhir itu mudah terlewat. Berpindah aplikasi bukan kemajuan jika alternatifnya memenuhi preferensi lisensi Anda, tetapi merusak sesi belajar besok.

## Alternatif RemNote: tabel untuk mengambil keputusan

| Pilihan | Alasan utama memilihnya | Catatan dan PDF | Penjadwal | Penggunaan offline dan kepemilikan | Harga diperiksa 31 Agustus 2026 | Batas utama migrasi |
|---|---|---|---|---|---|---|
| **Tetap menggunakan RemNote** | Catatan tertaut, bacaan sumber, dan kartu perlu berada dalam satu tempat | Basis pengetahuan dan Reader bawaan dengan sorotan PDF, catatan, dan kartu yang saling tertaut | FSRS-6 beta yang harus diaktifkan manual dan mendukung pelatihan bobot; SM-2 tetap menjadi bawaan | Desktop dan seluler bisa digunakan offline setelah login; tersedia basis pengetahuan khusus lokal di desktop | Gratis; Pro US$8/bulan dengan pembayaran tahunan; Pro dengan AI US$18/bulan dengan pembayaran tahunan | Ekspor bawaan paling cocok untuk pemulihan ke RemNote, tetapi saat ini tidak menyertakan gambar dan PDF |
| **Anki** | Kartu, templat, add-on, dan keutuhan koleksi menjadi prioritas | Tidak ada ruang kerja terpadu untuk catatan tertaut atau membaca PDF | Pengaturan FSRS yang matang, parameter yang dioptimalkan, target retensi, dan simulasi beban belajar | Koleksi lokal di desktop/seluler; inti aplikasi desktop bersumber terbuka dan server sinkronisasi resmi bisa dihosting sendiri | Desktop, AnkiWeb, dan AnkiDroid gratis; AnkiMobile resmi adalah aplikasi iOS berbayar | RemNote mengekspor kartu ke `.apkg`, bukan seluruh sistem catatan; periksa data penjadwalan dan media lewat uji impor |
| **Obsidian + Anki** | Anda ingin catatan Markdown lokal biasa tanpa kehilangan penjadwal kartu yang matang | Obsidian menangani catatan dan lampiran lokal; Anki menangani kartu; tidak ada satu alur terpadu dari Reader hingga pengulangan | FSRS di Anki | Vault Markdown lokal dan koleksi Anki lokal; Obsidian sendiri gratis tetapi proprieter | Obsidian gratis; Sync opsional mulai US$4/bulan dengan pembayaran tahunan; harga Anki seperti di atas | Ekspor Markdown dan Anki dari RemNote menghasilkan dua sistem; tautan aktif RemNote antara catatan, sumber, dan kartu tidak berubah menjadi satu alur kerja portabel |
| **Logseq** | Anda secara khusus menginginkan aplikasi sumber terbuka yang berpusat pada catatan bertingkat, dengan PDF dan kartu bawaan | Blok tertaut, anotasi PDF, dan pengulangan kartu dengan empat tingkat penilaian | Penjadwal bawaan dengan empat tingkat penilaian; [dokumentasinya mengaitkan algoritma baru](https://github.com/logseq/docs/blob/master/db-version.md#cards) dengan proyek FSRS asli | Aplikasi berlisensi AGPL; data versi basis data bisa diekspor sebagai SQLite, EDN, atau Markdown standar dengan sebagian informasi hilang | Aplikasi sumber terbuka gratis | Versi basis data saat ini masih beta; aplikasi iOS baru dan sinkronisasi waktu nyatanya masih alfa, aplikasi Android barunya belum dibuka untuk pengujian, dan status SRS Logseq lama tidak kompatibel dengan algoritma kartu baru |
| **Nibomo** | Anda ingin kartu sederhana dalam sistem web/seluler/backend yang terbuka | Tidak ada basis pengetahuan catatan, tautan balik, pembaca PDF, atau aplikasi desktop native | FSRS-6 dengan bobot tetap dan lebih sedikit pengaturan dibanding Anki atau RemNote | Web, iOS, dan Android mengutamakan penggunaan offline; seluruh sistem berlisensi MIT dengan opsi AWS untuk produksi | Aplikasi yang dihosting gratis selama beta; hosting mandiri menambah biaya infrastruktur dan penyedia layanan | Tidak ada pengimpor langsung untuk RemNote atau Anki; konten bisa dibuat ulang, tetapi riwayat pengulangan dan status FSRS tidak ikut berpindah |

Tabel ini bukan penilaian jumlah fitur. Pelajar yang banyak menggunakan PDF bisa kehilangan lebih banyak saat pindah ke pilihan yang “paling terbuka” daripada manfaat yang didapat dari lisensinya. Orang yang hanya punya kumpulan kartu kosakata sederhana mungkin membayar sistem catatan yang tidak lagi dipakai. Mulai dari baris yang sesuai dengan kendala Anda, lalu uji batas migrasinya.

Gratis dan sumber terbuka adalah dua kriteria berbeda. RemNote Free dan Obsidian tidak memungut biaya untuk aplikasi intinya, tetapi keduanya proprieter. Inti desktop Anki, Logseq, dan Nibomo memublikasikan kode sumber; AnkiMobile tetap merupakan aplikasi iOS berbayar, dan hosting mandiri Nibomo tetap menimbulkan biaya cloud.

## Tetap gunakan RemNote jika alur kerja terhubung adalah nilai utamanya

RemNote menggabungkan langkah-langkah yang dipisahkan oleh kebanyakan alternatif. [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader)-nya bisa menampilkan PDF di samping catatan, menempelkan referensi yang mengarah ke sorotan tertentu, dan mengubah catatan atau sorotan itu menjadi kartu belajar. Paket Free memungkinkan anotasi pada tiga dokumen; [halaman harga](https://www.remnote.com/pricing) saat ini mencantumkan dokumen beranotasi tanpa batas pada Pro.

Penjadwalnya juga tidak lagi menjadi alasan kuat untuk pindah. Dokumentasi RemNote kini menyebut [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) sebagai pilihan beta yang Anda aktifkan secara manual. Setelah setidaknya 1.000 pengulangan, RemNote bisa melatih bobot algoritmanya berdasarkan riwayat Anda sendiri. Anki masih menawarkan pengaturan yang lebih mendalam, tetapi pengguna yang menyukai catatan dan PDF RemNote tidak perlu meninggalkannya hanya demi memakai FSRS.

Kemampuan offline-nya juga lebih baik daripada sekadar “bisa digunakan di tab browser yang masih terbuka”. [Aplikasi desktop dan seluler](https://help.remnote.com/en/articles/6752029-offline-mode) RemNote bisa mengedit catatan dan mengulang kartu secara offline setelah instalasi dan login. Desktop menyimpan salinan lokal lengkap gambar dan PDF. Seluler dan web mungkin tidak memiliki media yang belum tersimpan dalam cache, dan aplikasi web tidak bisa dimulai dari tab yang sudah ditutup atau dimuat ulang tanpa koneksi.

Jika pencarian ini berawal dari kebutuhan akan **alternatif RemNote gratis**, coba paket Free sebelum pindah. Jika masalahnya adalah akses kode sumber, mode lokal tidak sama dengan sumber terbuka atau hosting mandiri. Panduan terpisah tentang [apakah RemNote bersumber terbuka](/blog/is-remnote-open-source/) membahas batas tersebut secara terperinci.

## RemNote vs Anki: tentukan apa yang menjadi pusatnya

Perbedaan **RemNote vs Anki** yang berguna bukanlah “punya catatan atau tidak”. Anki juga menyimpan catatan, tetapi catatan Anki berupa sekumpulan bidang data yang diubah [templat kartu](https://docs.ankiweb.net/templates/intro.html) menjadi kartu untuk diulang. RemNote berawal dari dokumen dan butir catatan tertaut yang bisa menjadi kartu. Yang satu adalah sistem pembuatan kartu yang matang; yang lain adalah ruang belajar yang berpusat pada catatan dan sumber.

Pilih Anki jika bidang data khusus, varian kartu yang dihasilkan otomatis, templat HTML/CSS, add-on, atau riwayat pengulangan bertahun-tahun menjadi kebutuhan utama. [Pengaturan FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) saat ini mencakup optimasi parameter, target retensi, dan simulasi beban belajar. [Ekspornya](https://docs.ankiweb.net/exporting.html) bisa mempertahankan koleksi lengkap dalam `.colpkg`, sedangkan paket kumpulan kartu `.apkg` bisa menyertakan informasi penjadwalan, preset, dan media.

RemNote menyediakan jalur pindah ke Anki, tetapi perhatikan labelnya: [ekspor Anki adalah “Flashcards Only”](https://help.remnote.com/en/articles/7898019-exporting-notes). Butir catatan tanpa kartu tidak disertakan. RemNote mempertahankan konteks catatan induk pada kartu yang diekspor dan menyederhanakan perilaku pilihan ganda, tetapi hasil ekspor itu bukan basis pengetahuan, perpustakaan PDF, atau alur membaca lengkap Anda. Halaman ekspor resmi RemNote juga tidak menjanjikan bahwa semua bagian status penjadwalan Anda akan sampai ke Anki. Uji lebih dahulu sebelum menganggap jalur ini mempertahankan semuanya.

Anki adalah pilihan terkuat di sini jika kartu menjadi prioritas. Namun, Anki bukan pengganti RemNote Reader yang paling mulus. Jika Anda masih memberi anotasi pada makalah dan menulis catatan tertaut, padukan Anki dengan aplikasi catatan alih-alih memaksanya menjalankan peran itu. [Panduan alternatif Anki yang lebih luas](/id/blog/best-anki-alternatives/) membahas lebih banyak pilihan yang berfokus pada kartu.

## Obsidian plus Anki: file lokal dengan pembagian tugas yang disengaja

Sebagian orang yang mencari alternatif RemNote tidak membutuhkan aplikasi serbaada lain. Mereka menginginkan catatan yang tetap berupa file biasa dan sistem pengulangan yang bisa berkembang secara mandiri. Obsidian plus Anki mewujudkan pembagian itu dengan jelas.

[Obsidian menyimpan catatan](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) sebagai teks biasa berformat Markdown di folder lokal. Aplikasinya gratis tanpa akun; [Obsidian Sync](https://obsidian.md/pricing) opsional mulai US$4 per bulan dengan pembayaran tahunan. Obsidian bukan sumber terbuka, tetapi file catatannya bisa dibaca langsung dan dicadangkan menggunakan alat pengelolaan file biasa.

Gunakan ekspor Markdown RemNote untuk catatan dan ekspor `.apkg` untuk kartu. Bersiaplah merapikan hasilnya. Kerangka catatan bertingkat yang diekspor menjadi Markdown yang bisa dibaca tidak sama dengan referensi aktif, portal, templat, atau pin PDF di RemNote. Setelah catatan dan kartu berada di dua aplikasi, perubahan juga tidak lagi diteruskan secara otomatis di antara keduanya.

Pilihan ini cocok jika kepemilikan file lokal lebih penting daripada alur mulus “sorot, tautkan, buat kartu, ulangi”. Pilihan ini merugikan jika alur itulah alasan Anda memilih RemNote.

## Logseq: pilihan sumber terbuka yang mengutamakan catatan sedang dalam masa peralihan

Logseq layak masuk perbandingan **alternatif RemNote sumber terbuka** karena memang mengutamakan catatan. [Repositori resmi berlisensi AGPL](https://github.com/logseq/logseq) menggambarkannya sebagai aplikasi pengelolaan pengetahuan dengan blok tertaut dan anotasi PDF. [Dokumentasi versi basis data saat ini](https://github.com/logseq/docs/blob/master/db-version.md#cards) menambahkan kartu bawaan: beri tag pada blok, lihat jadwal pengulangannya, lalu ulangi dengan empat tingkat penilaian.

Status saat ini lebih penting daripada daftar fiturnya. Repositori Logseq sendiri menyebut versi basis datanya masih beta, sementara aplikasi iOS baru dan sinkronisasi waktu nyatanya masih alfa; dokumentasi versi basis data saat ini menyatakan aplikasi Android belum dibuka untuk pengujian alfa. Logseq secara tegas memperingatkan kemungkinan kehilangan data dan menyarankan graph percobaan yang tidak memuat data penting, disertai cadangan. [Catatan perubahan versi basis data](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) juga menyatakan bahwa algoritma kartu baru tidak mengimpor properti atau data SRS dari kartu belajar Logseq lama.

Portabilitasnya perlu dijelaskan sama cermatnya. [Dokumentasi ekspor versi basis data](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) saat ini menawarkan SQLite beserta aset, EDN, dan Markdown standar. Dokumentasi itu menyebut EDN sebagai satu-satunya ekspor yang dapat diedit dan memuat seluruh data graph, tetapi tidak menyarankan EDN sebagai satu-satunya cadangan. Markdown standar tidak menyertakan properti dan cap waktu.

Jadi, Logseq patut dievaluasi jika sumber terbuka, catatan tertaut, PDF, dan kartu bawaan sama-sama penting. Pada Agustus 2026, saya tidak akan memilihnya untuk memindahkan basis pengetahuan penting perkuliahan kedokteran dalam sehari. Gunakan dulu bersama RemNote sambil menunggu sistem barunya lebih stabil di perangkat yang benar-benar Anda pakai.

## Nibomo: seluruh sistem terbuka, model belajar lebih terbatas

Nibomo mengambil pendekatan dengan kelebihan dan keterbatasan yang hampir berlawanan dengan RemNote. [Fiturnya](/id/features/) berpusat pada kartu Markdown depan-belakang, kumpulan kartu, tag, media, pengulangan FSRS, aplikasi yang mengutamakan penggunaan offline, dan pembuatan draf kartu dengan bantuan AI. Nibomo tidak memiliki basis pengetahuan catatan tertaut, pembaca PDF, aplikasi desktop native, atau pengimpor langsung dari RemNote.

Cakupan kode sumbernya luas: repositori berlisensi MIT mencakup web, iOS, Android, autentikasi, backend, sinkronisasi, dan infrastruktur. [Panduan hosting mandiri untuk produksi](/docs/self-hosting/) yang didukung menggunakan AWS CDK. Ini bukan perangkat lunak lokal yang siap digunakan lewat satu perintah. Pengelola bertanggung jawab atas biaya cloud, kredensial rahasia, migrasi, pemantauan, pencadangan, uji pemulihan, dan aplikasi seluler yang harus dibangun secara terpisah.

Migrasi menjadi keterbatasan yang lebih besar bagi pengguna RemNote lama. Nibomo mengimpor paket `flashcards.zip` miliknya sendiri, bukan Markdown RemNote atau `.apkg` Anki. Paket itu membawa kartu, tag, dan media yang dirujuk, tetapi tidak membawa riwayat pengulangan, status FSRS, pengaturan ruang kerja, struktur lengkap kumpulan kartu, atau akun. Obrolan AI bisa mengubah teks ekspor menjadi draf kartu yang Anda periksa; itu berarti membangun ulang konten, bukan melanjutkan koleksi lama. [Panduan migrasi TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) menjelaskan tahap demi tahap informasi yang hilang dalam proses tersebut.

Pilih Nibomo untuk ruang belajar berbasis kartu yang baru atau sederhana jika akses kode sumber seluruh sistem penting bagi Anda. Tetap gunakan RemNote untuk belajar dengan materi yang saling terhubung, dan pilih Anki jika keutuhan data saat migrasi atau struktur kartu lanjutan menjadi prioritas. Untuk perbandingan yang lebih khusus pada sistem kartu, lihat [Anki vs Nibomo](/blog/anki-vs-flashcards-open-source-app/) dan [panduan aplikasi kartu belajar sumber terbuka](/id/blog/best-open-source-flashcard-apps-2026/).

## Apa yang tidak bisa dipindahkan dengan mulus dari RemNote

RemNote memiliki beberapa format ekspor yang berguna, tetapi tidak ada satu file yang bisa menciptakan kembali seluruh produknya di aplikasi lain.

- **Ekspor RemNote lengkap** adalah format terbaik untuk pemulihan ke RemNote. Saat ini, ekspor tersebut tidak menyertakan gambar dan PDF.
- **Ekspor Anki `.apkg`** hanya berisi kartu belajar. Butir catatan tanpa kartu tidak ikut melalui jalur ini, dan hasilnya bukan sistem catatan tertaut Anda.
- **Markdown, HTML, OPML, dan teks** membuat konten lebih mudah dibaca di tempat lain. Format-format itu tidak membuat aplikasi lain memahami setiap hubungan atau alur kerja khas RemNote.
- **Sorotan dan sumber PDF** perlu diperiksa tersendiri. RemNote Reader bisa mengunduh PDF beserta sorotannya, tetapi jangan menganggap ekspor basis pengetahuan lengkap memuat file tersebut.
- **Pengaturan, tema, dan plugin** tidak disertakan dalam cadangan manual RemNote, menurut [dokumentasi pencadangan](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **Status pengulangan** perlu diperiksa kartu demi kartu di aplikasi tujuan. Impor yang mempertahankan pertanyaan dan jawaban tetap bisa memulai ulang jadwal.

Itulah sebabnya “mendukung Markdown” atau “bisa mengimpor Anki” belum cukup. Portabilitas memiliki beberapa lapisan: catatan yang bisa dibaca, media yang bisa digunakan, sumber tertaut, struktur kartu, dan riwayat belajar.

## Uji perpindahan sebelum membatalkan langganan

Pastikan Anda bisa kembali ke sistem semula. Meluangkan satu jam dengan tenang sekarang lebih ringan daripada baru menyadari ada PDF yang hilang saat pekan ujian.

1. Buat ekspor manual **RemNote (Complete)** terbaru dan simpan tanpa diubah.
2. Di desktop, salin cadangan lokal `.db.zip` dan folder `files`. Unduh semua PDF asli atau beranotasi yang tidak bisa Anda ganti.
3. Pilih sampel kecil yang cukup rumit: catatan bertingkat, referensi, satu PDF, gambar, kartu isian rumpang atau pilihan ganda, tag, dan kartu yang riwayat pengulangannya penting bagi Anda.
4. Ekspor sampel itu dalam setiap format yang dibutuhkan calon sistem tujuan, biasanya Markdown untuk catatan dan `.apkg` untuk Anki.
5. Impor ke vault, graph, profil, atau ruang kerja sementara. Bandingkan jumlah, format, tautan, media, sisi depan dan belakang kartu, serta status jadwal pengulangan dengan RemNote secara berdampingan.
6. Gunakan secara offline di setiap perangkat yang akan Anda pakai. Lalu sambungkan kembali dan pastikan perubahan serta hasil pengulangan tersinkronisasi ke tempat yang semestinya.
7. Pulihkan cadangan lengkap ke basis pengetahuan lokal RemNote sementara. Arsip yang diunduh baru menjadi rencana pemulihan setelah Anda berhasil membukanya.
8. Belajarlah di kedua sistem selama setidaknya beberapa sesi sungguhan. Batalkan langganan hanya setelah penggantinya berhasil menjalani alur harian, ekspor, dan pemulihan.

Simpan ekspor sumber bahkan setelah pindah. Impor yang berhasil membuktikan kompatibilitas dengan versi aplikasi tujuan saat ini, bukan akses permanen ke setiap bagian sistem lama.

## Pilihan praktisnya

- **Tetap gunakan RemNote** jika nilai utamanya adalah catatan tertaut dan belajar dengan PDF. Paket Free atau basis pengetahuan khusus lokalnya mungkin sudah mengatasi kendala Anda.
- **Pilih Anki** jika kartu, templat, pengaturan FSRS, dan keutuhan data saat migrasi menjadi prioritas.
- **Pilih Obsidian plus Anki** jika file catatan lokal biasa cukup penting bagi Anda untuk memakai dua aplikasi.
- **Evaluasi Logseq** jika Anda membutuhkan catatan tertaut bersumber terbuka dan kartu bawaan, tetapi gunakan data yang tidak penting untuk pengujian selama basis data dan sistem sinkronisasinya masih dalam tahap beta dan alfa.
- **Pilih Nibomo** jika sistem kartu baru yang sederhana dan akses kode sumber seluruh sistem lebih penting daripada catatan, PDF, atau kelanjutan jadwal.

Saya membangun Nibomo, dan saya tetap akan memakai RemNote untuk buku catatan tertaut yang banyak bergantung pada PDF, atau memilih Anki untuk koleksi lama yang kompleks. Nibomo adalah pilihan yang lebih terbatas: kartu depan-belakang, sistem terbuka, dan jadwal baru.

Setelah tahu batas mana yang bisa Anda terima, uji pilihan itu saja. Jika Nibomo cocok, [panduan memulai](/docs/getting-started/) menunjukkan cara mengakses layanan yang dihosting maupun menghosting sendiri. Jika tidak cocok, tetap menggunakan RemNote juga merupakan pilihan yang masuk akal.
