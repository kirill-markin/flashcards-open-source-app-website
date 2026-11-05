---
title: "Cara Mencari Kartu Duplikat di Anki dan Memilih yang Akan Disimpan"
description: "Cari tahu penyebab kartu duplikat di Anki, bandingkan catatan yang cocok, dan pilih salinan yang akan disimpan. Ada lembar kerja singkat untuk mengecek riwayat pengulangan."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "kartu duplikat Anki"
  - "cara mencari duplikat di Anki"
  - "hapus catatan duplikat Anki"
  - "catatan duplikat Anki"
  - "riwayat pengulangan Anki"
---

Anki menampilkan kartu baru, padahal Anda ingat pernah menjawab pertanyaannya. Mungkin ada salinan yang ikut masuk saat impor. Bisa juga itu pertanyaan kedua dari catatan yang sama. Cari tahu dulu penyebabnya. Menghapus satu baris di jendela **Browse** bisa menghapus semua kartu dari catatan itu, termasuk kartu dengan arah pertanyaan yang ingin Anda simpan.

Jika **kartu duplikat di Anki** berasal dari catatan yang berbeda, gunakan **Notes → Find Duplicates** untuk mencari calon duplikat. Kecocokan satu kolom membantu mempersempit pencarian. Untuk tiap kelompok hasil, bandingkan isi catatan dan riwayat tiap kartu sebelum memilih salinan yang akan disimpan.

Petunjuk untuk Anki desktop ini mengacu pada dokumentasi dan kode sumber rilis Anki yang diperiksa pada 4 Oktober 2026. Lembar kerja fiktif di bawah menggambarkan hasil yang diharapkan tanpa pengujian langsung.

![Seorang anggota klub catur membandingkan benteng cadangan berwarna pucat dengan dua benteng yang sudah aus di atas papan kayu](/blog/anki-duplicate-cards.png)

## Cari tahu dulu apa yang berulang

Catatan menyimpan isi beberapa kolom, misalnya **Front** dan **Back**. Anki menggunakan templat untuk membuat kartu dari catatan itu. Satu catatan kosakata bisa menghasilkan kartu untuk mengenali arti kata dan kartu untuk mengingat kata dari artinya. Keduanya berasal dari catatan yang sama dan masing-masing punya jadwal sendiri. Lihat [penjelasan Anki tentang catatan dan kolom](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

Di jendela Browse, gunakan mode **Cards** dan buka **Cards → Info** untuk setiap baris yang ingin diperiksa. Bandingkan ID catatannya (Note ID). Jika ID sama, kartu-kartu itu berasal dari catatan yang sama. Jika ID berbeda, catatannya terpisah. Ganti `123` di `nid:123` dengan ID yang sebenarnya untuk melihat kartu dari catatan tersebut tanpa membatasi pencarian ke dek tertentu. Lihat [dokumentasi Anki tentang ID dan cara mencarinya](https://docs.ankiweb.net/searching.html#object-ids).

| Temuan | Kemungkinan penyebab | Langkah berikutnya |
| --- | --- | --- |
| Catatan sama, arah pertanyaan berlawanan | Dua kartu yang memang dibuat berpasangan | Periksa apakah kedua pertanyaan berguna |
| Catatan sama, pertanyaan yang tampil identik | Mungkin ada templat kartu yang sama | Bandingkan templat dan pratinjau kartu |
| Catatan berbeda, pertanyaan tampak identik | Catatan mungkin duplikat | Bandingkan isi lengkap kedua catatan sebelum memilih mana yang akan disimpan |

Untuk kartu yang memang dibuat berpasangan, [panduan kartu dua arah (bahasa Inggris)](/blog/anki-reverse-cards/) menjelaskan kedua arah pertanyaannya. Jika ingin berhenti mengulang salah satunya, gunakan **Suspend** pada kartu itu agar tetap tersimpan dalam koleksi. Lihat [panduan Suspend (bahasa Inggris)](/blog/anki-bury-vs-suspend/).

Jika templatnya identik, ikuti [panduan Anki untuk mencari penyebab munculnya kartu tambahan](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Menghapus templat memengaruhi semua catatan dengan jenis tersebut, termasuk di dek lain. Tangani perubahan templat secara terpisah dari penghapusan catatan duplikat.

## Tentukan cakupan pencarian catatan duplikat

Buka **Notes → Find Duplicates**, lalu pilih kolom yang ingin dibandingkan, misalnya **Front**. Secara bawaan, Anki mencari di semua jenis catatan yang memiliki kolom tersebut. Gunakan **Optional filter** untuk menentukan cakupan, lalu klik **Search**. Lihat [dokumentasi opsi Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates).

Untuk dek bernama `Cleanup practice`, gunakan pencarian berikut.

```text
deck:"Cleanup practice"
```

Pencarian dek juga mencakup subdek. Hapus filter jika salinannya mungkin tersebar di beberapa dek agar pencarian mencakup seluruh koleksi. Meski hasil di satu dek kosong, salinannya masih bisa ada di dek lain. [Sintaks pencarian dek di Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Klik salah satu kelompok hasil untuk memeriksa catatannya. **Tag Duplicates** menambahkan tag `duplicate` ke semua catatan yang cocok, termasuk yang akan Anda simpan. [Kode sumber rilis Anki](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py) menunjukkan bahwa fitur ini menandai setiap catatan dalam tiap kelompok hasil. **Jangan hapus semua hasil `tag:duplicate`.** Gunakan tag itu untuk mengumpulkan calon duplikat, lalu pilih satu per satu catatan yang ingin dihapus.

Pencarian ini membandingkan kolom yang dipilih. Untuk tahu apakah dua pertanyaan menguji fakta yang sama, Anda perlu membaca isinya. Pertanyaan dengan redaksi berbeda mungkin perlu dicari secara manual, sementara pertanyaan yang identik bisa saja digunakan untuk bahasa atau materi pelajaran yang berbeda.

## Latihan memilih catatan yang akan disimpan

Bayangkan ada enam catatan di dek `Cleanup practice` tanpa subdek. A dan B menggunakan templat bawaan **Basic (and reversed card)** tanpa perubahan, sehingga masing-masing menghasilkan dua kartu. C–F memakai **Basic** dan masing-masing menghasilkan satu kartu. Kedelapan kartu ada di dek yang sama. Huruf-huruf ini hanya penanda dalam contoh. Di Anki, ID catatan dan ID kartu berupa angka.

| Catatan | Front → Back | Status belajar dalam contoh | Keputusan |
| --- | --- | --- | --- |
| A dan B | `le vélo` → `bicycle` | Untuk A, kartu untuk mengenali arti sudah diulang 12 kali dan kartu untuk mengingat kata 3 kali. Kedua kartu B masih baru. | Simpan A. B adalah calon pertama untuk dihapus. |
| C dan D | `Chemical symbol for silver?` → `Ag` | Kartu C sudah diulang 20 kali dan kartu D 6 kali. | Bandingkan kedua riwayat, lalu pilih kartu yang akan terus dipelajari. |
| E dan F | E memakai `bank` → `financial institution` dan F memakai `bank` → `side of a river` | Makna yang diuji berbeda. | Simpan keduanya dan tambahkan konteks agar pertanyaannya lebih jelas. |

Pencarian pada kolom **Front** bisa menemukan ketiga pasangan itu. Hanya pasangan pertama yang mudah dipilah. Sebelum menghapus B, bandingkan **semua kolom**, media, tag, jenis catatan, dan arah pertanyaan di pratinjau. Mungkin B punya audio pelafalan yang tidak ada di A atau menghasilkan pertanyaan tambahan.

Jika ada materi berguna dengan tujuan belajar yang sama, salin bagian tersebut ke catatan yang Anda simpan dan periksa pratinjaunya. Pertahankan juga tag sumber yang masih berguna. Jika Anda mengganti fakta yang diuji, buat pertanyaan baru agar riwayat lama tetap mencerminkan materi yang sudah dipelajari.

Untuk C dan D, jumlah pengulangan hanya memberi petunjuk awal. Periksa tanggal dan penilaian tiap pengulangan, interval saat ini, serta informasi jatuh tempo kedua kartu. Kartu yang lebih sering diulang mungkin memang lebih sering perlu dipelajari ulang. Pastikan pertanyaan dan jawabannya berguna, lalu pilih riwayat mana yang ingin dilanjutkan. Jika jawabannya berbeda, periksa dulu sumber materi. Jumlah pengulangan tidak menentukan jawaban yang benar.

Menyimpan C dan menghapus D **tidak menggabungkan riwayat keduanya**. C tetap memakai status belajarnya sendiri. [Card Info di Anki](https://docs.ankiweb.net/stats.html#card-info) menampilkan riwayat per kartu. Statistik seluruh koleksi masih mencakup pengulangan dari catatan yang dihapus, sementara statistik per dek tidak lagi menghitungnya. Riwayat tersebut tidak berpindah ke kartu yang Anda simpan. Lihat [penjelasan tentang statistik catatan yang dihapus](https://docs.ankiweb.net/stats.html#more).

Jika masih ragu, tunda penghapusan dan catat apa yang perlu diperiksa. Gunakan **Suspend** bila perlu untuk menjeda pengulangan kartu yang sedang Anda periksa.

## Hapus satu duplikat, lalu periksa kartu yang tersisa

Sebelum menghapus kartu dari koleksi Anda, sinkronkan dulu perubahan dari perangkat lain. Setelah itu, sinkronkan Anki desktop agar koleksinya memuat perubahan tersebut. Lihat [panduan sinkronisasi Anki](https://docs.ankiweb.net/syncing.html). Buka **File → Export**, lalu simpan **Anki Collection Package (`.colpkg`)** dengan opsi **Include Media** aktif. Paket ini berisi semua dek beserta jadwal dan riwayat pengulangannya. Simpan berkas itu dengan aman. Saat Anda mengimpornya, koleksi dalam berkas akan menggantikan semua kartu di profil yang sedang terbuka. [Dokumentasi ekspor koleksi](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Jika ingin mencoba langkah penghapusan dulu, buat profil terpisah melalui **File → Switch Profile**, lalu impor cadangan ke profil itu. Jangan hubungkan profil latihan ke AnkiWeb. [Setiap profil memiliki koleksi tersendiri](https://docs.ankiweb.net/profiles.html). Jika kedua profil terhubung ke akun yang sama, satu koleksi bisa menimpa koleksi lainnya. Untuk mengetahui apa yang dicadangkan dan apa yang terjadi saat impor, baca [panduan APKG dan COLPKG (bahasa Inggris)](/blog/anki-apkg-vs-colpkg/).

Di lembar kerja ini, A1 adalah kartu untuk mengenali arti kata dan A2 adalah kartu untuk mengingat kata dari artinya. Kartu yang sepadan dari B adalah B1 dan B2. Di **Cards → Info**, catat ID kedua kartu A (**Card ID**), informasi jatuh tempo, interval, dan entri riwayat yang mudah dikenali. Catat juga ID catatan B. Bandingkan keadaan sebelum dan sesudah penghapusan dalam sesi yang sama. Selama proses itu, jangan pelajari atau jadwalkan ulang kartu dari kedua catatan.

Untuk menghapus catatan duplikat di Anki satu per satu, ikuti langkah berikut.

1. Di **Browse**, ganti pencarian dengan `nid:` yang memakai ID catatan B yang sebenarnya. Di mode **Cards**, periksa setiap hasil dan lihat pratinjau kedua arah pertanyaan. Saat memeriksa koleksi Anda sendiri, cari juga kartu dari catatan yang sama di dek lain. Jalankan pencarian ini tanpa filter dek.
2. Beralih ke mode **Notes**. Pastikan satu-satunya hasil adalah catatan B yang ingin dibuang. Pilih hanya catatan itu, lalu klik **Notes → Delete**. [Perintah Delete di Anki](https://docs.ankiweb.net/browsing.html#notes) menghapus catatan terpilih beserta semua kartunya, bahkan ketika Anda menjalankannya dari satu baris di mode **Cards**.
3. Cari lagi ID catatan B dan pastikan hasilnya kosong. Cari kedua ID kartu A yang tadi dicatat dengan `cid:`, pisahkan ID dengan koma, lalu cocokkan Info kedua kartu dengan catatan Anda.
4. Cari `deck:"Cleanup practice"` dan bandingkan jumlah baris di mode **Notes** dan **Cards**. Cocokkan catatan yang tersisa dengan tabel di bawah.

Berikut hasil yang diharapkan jika hanya B yang dihapus.

| Pemeriksaan | Sebelum | Hasil yang diharapkan sesudahnya |
| --- | --- | --- |
| Seluruh dek contoh | 6 catatan / 8 kartu | 5 catatan / 6 kartu |
| Pasangan catatan tentang sepeda | A1, A2, B1, B2 | Hanya A1 dan A2 |
| ID kartu A, informasi jatuh tempo, interval, dan riwayat | Nilai yang Anda catat | Kartu, jadwal, dan entri riwayat tetap sama |
| Pencarian ID catatan B | Kedua kartu B | Hasil kosong |
| Catatan tentang perak dan dua makna kata bank | C, D, E, F | Keempat catatan tetap ada |

Dalam contoh ini, menghapus satu catatan sekaligus menghapus dua kartu. Jika yang terhapus adalah A, jumlah akhirnya sama, tetapi kartu yang sudah dipelajari dan ingin Anda simpan ikut hilang. Periksa ID selain jumlahnya, dan hindari mengatur ulang atau menjadwalkan ulang kartu yang disimpan saat merapikan duplikat.

Grafik pengulangan seluruh koleksi masih bisa mencakup pengulangan kartu yang sudah dihapus. Untuk memastikan kemajuan belajar tersimpan, cocokkan ID dan informasi di **Cards → Info** untuk kartu yang tersisa dengan data yang Anda catat sebelum penghapusan.

Jika hasil untuk kelompok pertama sudah cocok dengan catatan Anda, lanjutkan ke kelompok berikutnya dan pilih salinan yang akan disimpan. Jika tadi Anda berlatih di profil terpisah, ulangi penghapusan yang sudah Anda pastikan di profil utama. Setelah memeriksa koleksi di profil utama, sinkronkan Anki desktop, lalu sinkronkan perangkat lain sebelum belajar di sana. Jika duplikat muncul saat impor, baca [panduan memperbarui catatan lewat CSV (bahasa Inggris)](/blog/anki-csv-update-existing-notes/) sebelum impor berikutnya. Jika Anda menyalin catatan agar satu fakta muncul di beberapa topik, gunakan beberapa tag pada catatan yang sama agar cukup satu riwayat belajar. Lihat [panduan tag dan dek (bahasa Inggris)](/blog/anki-tags-vs-decks/).
