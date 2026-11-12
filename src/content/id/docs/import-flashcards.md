---
title: Mengimpor kartu belajar ke Nibomo
description: Pindahkan kartu dari Quizlet, Anki, atau aplikasi lain. Pilih format ekspor yang sesuai dan periksa hasilnya sebelum mengimpor banyak kartu.
---

Buka [Nibomo](https://app.nibomo.com/?locale=id), pilih ruang kerja tujuan, lalu buka **Pustaka > Impor**. Di bagian **Dari aplikasi lain**, pilih aplikasi asal. Setiap aplikasi memiliki pilihan sendiri, meskipun beberapa aplikasi menggunakan format file yang sama.

Pilihan di bawah ini tersedia di aplikasi web. Jika menu atau pilihan aplikasi asal tidak muncul di iPhone, iPad, Mac, atau Android, gunakan aplikasi web. Jika Anda memakai Nibomo sebagai tamu di perangkat tersebut, masuk dulu di sana. Di aplikasi web, masuk dengan akun Nibomo yang sama dan pilih ruang kerja tujuan sebelum mengimpor kartu.

## Pilih sumber kartu

| Sumber | Yang perlu disiapkan | Cara mengimpor |
| --- | --- | --- |
| Quizlet | Salinan teks hasil ekspor | Tempel di layar impor Quizlet |
| Anki | Dek `.apkg` atau koleksi `.colpkg` | **Pilih file** |
| Noji | `.csv` atau `.ofc` | **Pilih file** |
| Knowt | `.pdf` | **Pilih file** |
| RemNote | `.apkg`, `.md`, atau `.txt` | **Pilih file** |
| Brainscape | `.csv` | **Pilih file** |
| StudySmarter | `.csv` | **Pilih file** |
| Cram | `.csv` | **Pilih file** |
| Mochi | `.mochi` | **Pilih file** |
| SuperMemo | `.xml` | **Pilih file** |
| AlgoApp (sebelumnya AnkiApp) | `.zip` atau `.xml` | **Pilih file** |
| Aplikasi lain | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx`, atau `.zip` | Pilih file di **Impor dari aplikasi lain** |
| Spreadsheet | Salinan baris yang memuat sisi depan dan belakang tiap kartu | Tempel di **Impor dari spreadsheet** |
| Nibomo | File `flashcards.zip` hasil ekspor dari Nibomo | Periksa pratinjau di **Impor dari Nibomo** |

Jika menu impor masih menampilkan nama lama AlgoApp, cari **AnkiApp**. Anki memiliki pilihan sendiri.

Jika Anda punya file Excel lama berformat `.xls`, simpan sebagai `.xlsx` atau `.csv` sebelum mengimpor. Anda juga bisa menyalin kolom sisi depan dan belakang, lalu [menempelkannya di layar impor spreadsheet](#tempel-dari-spreadsheet).

## Impor dari aplikasi kartu belajar lain

1. Di aplikasi asal, ekspor kartu yang ingin dipindahkan. Untuk Quizlet, buka set Anda, pilih **Export**, lalu salin teksnya. Gunakan tab antara istilah dan definisi, serta baris baru untuk setiap kartu. Ekspor hanya tersedia di situs web Quizlet dan hanya untuk set asli yang Anda buat sendiri.
2. Di Nibomo, buka **Pustaka > Impor** dan pilih aplikasi asal. Untuk Quizlet, tempel teks yang disalin. Untuk sumber lain, pilih file hasil ekspor. Jika aplikasi asal tidak ada di menu tetapi dapat mengekspor dalam format yang didukung, misalnya PDF, gunakan **Impor dari aplikasi lain**.
3. Pilih **Mulai impor**. Nibomo membuka chat AI baru dan mengirim permintaan impor beserta file atau teks yang Anda tempel. Langkah ini memerlukan koneksi internet. Batas ukuran setiap file untuk impor dengan AI adalah **30 MiB**. Jika file lebih besar, coba ekspor beberapa dek atau set yang lebih kecil secara terpisah.
4. Periksa hasilnya di **Pustaka**. Chat AI dapat menyimpan kartu secara bertahap. Jika prosesnya terhenti, periksa kartu mana saja yang sudah ada di Nibomo, lalu minta AI melanjutkan dengan kartu yang tersisa sebelum mencoba lagi dari awal.

### Coba dulu dengan beberapa kartu

Simpan file ekspor asli dan mulai dengan satu dek atau set kecil. Cocokkan jumlah kartunya, lalu periksa sisi depan dan belakang beberapa kartu, tag, serta gambar atau format yang Anda perlukan. Jika ingin melihat contoh sebelum kartu disimpan, lampirkan hasil ekspor di chat AI baru dan minta pratinjau beberapa kartu tanpa menyimpannya. Untuk cara ini, tulis permintaan sendiri tanpa memilih **Mulai impor**.

AI memasukkan kartu sebagai kartu baru di Nibomo. Riwayat ulasan dan jadwal ulasan sebelumnya tetap berada di aplikasi asal. Susunan, format, dan media yang bisa dipindahkan bergantung pada isi hasil ekspor dan apa yang dapat dibaca chat AI. Periksa hasilnya sebelum mulai belajar atau menghapus apa pun di aplikasi asal.

## Tempel dari spreadsheet

Masuk dulu ke akun Nibomo Anda. Gunakan **Pustaka > Impor > Impor dari spreadsheet** untuk kartu yang hanya memiliki sisi depan dan belakang. Salin dua kolom dari spreadsheet tanpa menyertakan baris judul, lalu tempel ke layar impor. Untuk sel spreadsheet, pilih **Tab** antara sisi depan dan belakang serta **Baris baru** antara kartu. Ubah pemisah jika teks Anda menggunakan tanda lain.

Periksa pratinjau kartu, perbaiki baris yang belum lengkap, dan pilih tag yang ingin diterapkan. Lalu pilih tombol impor yang menampilkan jumlah kartu untuk menyimpan kartu. Cara ini berjalan tanpa chat AI.

## Impor ZIP dari Nibomo

Masuk dulu ke akun Nibomo Anda. Gunakan **Pustaka > Impor > Impor dari Nibomo** untuk file `flashcards.zip` yang sebelumnya diekspor dari Nibomo. Pilih ZIP tanpa mengekstraknya. Di pratinjau, periksa jumlah kartu dan file media serta peringatan jika ada, lalu konfirmasi impor dan lihat kartu serta media satu per satu di **Pustaka**. Cara ini dapat memindahkan kartu, tag, dan media di dalam paket tanpa chat AI.
