---
title: "Cara Mengekspor Set Quizlet pada 2026 (dan Mengapa Tombol Export Tidak Muncul)"
description: "Ekspor set Quizlet dengan langkah terbaru di situs web. Jika Export tidak muncul, periksa apakah Anda pembuat set, membuat salinan, atau memakai aplikasi seluler."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "cara ekspor Quizlet"
  - "cara mengekspor flashcard Quizlet"
  - "tombol ekspor Quizlet tidak ada"
  - "unduh flashcard Quizlet"
  - "Quizlet ke CSV"
  - "Quizlet ke Anki"
---

Jika tombol **Export** tidak muncul di Quizlet, periksa dua hal terlebih dahulu: apakah Anda yang membuat set aslinya, dan apakah Anda menggunakan situs web Quizlet? Quizlet membatasi ekspor hanya untuk pembuat asli set, dan fitur ini hanya tersedia di situs web. Set hasil salinan tidak dapat diekspor, meskipun salinannya kini muncul di pustaka Anda.

Jika memenuhi syarat tersebut, proses ekspornya cepat: buka set di situs web, pilih **More → Export**, atur pemisah istilah dan definisi, lalu pilih **Copy text**. Quizlet tidak mengunduh file kumpulan kartu. Teksnya disalin ke papan klip, tanpa gambar.

**Fakta diperiksa:** 30 Agustus 2026, berdasarkan [petunjuk ekspor resmi Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Petugas arsip mencocokkan tanda kepemilikan sebelum menyerahkan kartu teks berpasangan, dengan dua map dokumen yang sudah disiapkan dan foto yang tetap berada di balik kaca](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Pertama, apakah tombol Export seharusnya tersedia?

Periksa hal berikut sebelum mencoba cara lain untuk mengunduh flashcard Quizlet:

| Situasi Anda | Apakah Export seharusnya tersedia? | Langkah berikutnya |
| --- | --- | --- |
| Anda membuat set asli dan membukanya di situs web Quizlet | Ya, menurut halaman bantuan Quizlet | Ikuti langkah di bawah |
| Anda menggunakan aplikasi iOS atau Android | Tidak; ekspor hanya tersedia di situs web | Buka Quizlet di peramban web dan masuk ke akun |
| Anda menyalin set pengguna lain | Tidak; Quizlet menyatakan bahwa set hasil salinan tidak dapat diekspor | Jangan berharap salinan tersebut akan membuka akses ke Export |
| Anda dapat melihat set, tetapi bukan pembuatnya | Tidak; akses untuk melihat berbeda dengan kepemilikan sebagai pembuat | Minta file sumber kepada pembuatnya, atau buat ulang dari materi yang boleh Anda gunakan |

Jika Anda membuat set asli tetapi tombol ekspor Quizlet tetap tidak muncul, pastikan Anda masuk ke akun pemilik set dan membuka set asli, bukan salinannya. Halaman bantuan Quizlet tidak mencantumkan jalur ekspor lain. Pada tahap ini, hubungi dukungan Quizlet alih-alih memercayai alat pengunduh yang mengaku dapat melewati pembatasan tersebut.

## Cara mengekspor flashcard Quizlet di situs web

Untuk set yang Anda buat sendiri:

1. Masuk ke Quizlet melalui situs web.
2. Pilih **Your library**.
3. Pilih **Flashcard sets**.
4. Buka set yang ingin diekspor.
5. Buka menu **More**.
6. Pilih **Export**.
7. Pilih cara mengatur pemisah istilah dan definisi.
8. Pilih **Copy text**.
9. Tempelkan hasilnya ke editor teks biasa.

Itulah seluruh alur yang tersedia saat ini. Tidak ada tombol “unduh” di langkah terakhir.

Untuk kartu biasa dengan sisi depan dan belakang, saya menyarankan tab sebagai pemisah antara istilah dan definisi, serta baris baru sebagai pemisah antarkartu. Pilihan pemisah ini merupakan saran praktis, bukan ketentuan Quizlet. Tab biasanya lebih mudah diperiksa daripada koma karena koma sering muncul di dalam definisi biasa.

File dua kartu yang rapi akan terlihat seperti ini, dengan satu tab di tengah setiap baris:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Apa saja yang dipertahankan saat ekspor dari Quizlet

Quizlet menjelaskan fitur ini dengan cakupan terbatas: yang diekspor adalah **istilah dan definisi** dari set milik pembuatnya sendiri. Quizlet juga menyatakan bahwa gambar tidak dapat diekspor.

Hasil yang ditempelkan adalah acuan paling aman untuk menentukan apa yang bisa disimpan. Jika teks, pemisah, atau pergantian baris muncul di sana, Anda dapat menyimpannya dalam file. Halaman bantuan Quizlet tidak menjanjikan pemindahan folder, mode belajar, format, tingkat penguasaan, riwayat pengulangan, atau penjadwalan.

Jadi, hasilnya berupa salinan teks kartu, bukan cadangan Quizlet yang dapat dipulihkan. Perbedaan ini juga berlaku jika Anda mencari “unduh flashcard Quizlet”: Quizlet menyalin teks ke papan klip, lalu Anda membuat filenya sendiri.

## Simpan salinan mentah dalam UTF-8 sebelum merapikannya

Pastikan Anda bisa kembali ke hasil awal:

1. Tempelkan hasil ekspor ke editor teks biasa.
2. Simpan sebagai UTF-8, misalnya `biology-quizlet-raw.txt`.
3. Buat salinannya dengan nama `biology-quizlet-working.txt`.
4. Biarkan file mentah tetap utuh dan edit hanya salinan kerja.

Sebelum mengimpor file kerja, periksa isinya selagi set Quizlet masih terbuka:

- Aktifkan tampilan karakter tak terlihat (whitespace) dan pastikan letak tab serta pergantian baris.
- Cari pemisah yang Anda pilih di dalam istilah dan definisi. Tab tambahan dapat membentuk kolom ketiga yang tidak diinginkan.
- Periksa definisi yang memiliki pergantian baris di dalamnya; baris tersebut bisa terbaca sebagai kartu tambahan.
- Bandingkan bagian awal, tengah, dan akhir file dengan Quizlet, termasuk definisi yang paling panjang.
- Tutup dan buka kembali file, lalu periksa aksen, aksara non-Latin, simbol, serta tanda baca melengkung seperti tanda kutip tipografis.
- Tandai kolom kosong, duplikat, dan baris yang tidak sesuai pola, alih-alih menebak cara memperbaikinya tanpa mencatat masalahnya.

Bandingkan jumlah baris dengan jumlah kartu hanya jika setiap kartu menempati tepat satu baris. Cara cepat ini tidak berlaku untuk definisi yang terdiri dari beberapa baris.

Tetap simpan file mentah meskipun salinan kerja sudah terlihat benar. Jika proses impor menggeser kolom atau menghilangkan isi, Anda masih memiliki acuan yang tidak berubah.

## Quizlet ke CSV: siapkan format filenya dengan benar

Mengganti nama file `.txt` menjadi `.csv` tidak mengonversi isinya. CSV membutuhkan pemisah yang konsisten dan penggunaan tanda kutip yang benar untuk isi yang mengandung koma, tanda kutip, atau beberapa baris.

Untuk membuat file CSV dari Quizlet dengan aman:

1. Biarkan cadangan teks mentah tetap utuh.
2. Buka salinan kerja di aplikasi spreadsheet dan pilih pemisah yang sama persis dengan yang digunakan di Quizlet.
3. Pastikan setiap entri yang diharapkan memiliki dua kolom: istilah dan definisi.
4. Periksa tanda kutip, pemisah, dan definisi yang terdiri dari beberapa baris.
5. Ekspor sebagai CSV UTF-8.
6. Buka kembali CSV dalam pratinjau baru sebelum menggunakannya di tempat lain.

Aplikasi spreadsheet dapat menambahkan tanda kutip yang diperlukan oleh CSV. Mengganti semua tab dengan koma tidak dapat melakukan hal tersebut secara andal.

## Pindahkan teks ke Nibomo sebagai bahan draf yang perlu diperiksa

[Nibomo](/id/features/) tidak memiliki fitur impor langsung dari Quizlet. Di layanan Nibomo, file TXT atau CSV dilampirkan untuk membuat draf dengan bantuan AI. Proses ini tidak menjamin seluruh data berpindah secara utuh.

1. Simpan file mentah Quizlet di luar aplikasi.
2. Lampirkan TXT yang sudah dirapikan atau CSV yang sudah disiapkan dengan benar di obrolan AI Nibomo.
3. Jelaskan kepada asisten pemisah dan kolom yang digunakan file tersebut.
4. Minta pratinjau kecil dan nyatakan dengan jelas agar kartu belum disimpan.
5. Bandingkan jumlah kartu yang diusulkan serta sisi depan dan belakangnya dengan file kerja.
6. Simpan hanya kartu yang sudah Anda periksa.

[Panduan Memulai](/docs/getting-started/) menjelaskan obrolan AI yang menggunakan data ruang kerja dan lampiran file. Untuk menjaga ketelitian, Anda bisa memakai prompt seperti ini:

> Baca file ini sebagai pasangan istilah dan definisi yang dipisahkan oleh tab. Jangan simpan kartu dulu. Buat draf sampel kecil, pertahankan teks sumber dan karakter non-Latin, lalu buat daftar terpisah untuk baris yang formatnya salah, kosong, atau ambigu tanpa menebak isinya.

Cara ini bisa berguna jika kartu lama juga perlu dirapikan. Namun, cara ini tidak membuktikan bahwa setiap baris sudah dipindahkan dengan benar. Gunakan daftar periksa dalam [Cara Memperbaiki Flashcard Buatan AI](/blog/how-to-fix-ai-flashcards/), lalu uji kumpulan kartu kecil sebelum membuat sisanya.

Kartu yang dibuat di Nibomo memulai riwayat belajar baru. Teks dari Quizlet tidak memuat catatan pengulangan atau status penjadwalan yang diperlukan untuk melanjutkan antrean lama.

> **Pengungkapan:** Saya mengembangkan Nibomo. Alur ini menjelaskan batasan produk saat ini; ini bukan klaim bahwa Nibomo sepenuhnya kompatibel dengan Quizlet.

## Quizlet ke Anki: gunakan pengimpor teks Anki

Menurut [panduan resmi impor teksnya](https://docs.ankiweb.net/importing/text-files.html), Anki mendukung file teks biasa UTF-8 dengan kolom yang dipisahkan oleh koma, titik koma, atau tab.

Untuk salinan kerja yang dipisahkan oleh tab:

1. Buka alur impor Anki dan pilih file teks UTF-8.
2. Pastikan dalam pratinjau bahwa Anki mendeteksi tab; ubah pilihan pemisah jika belum terdeteksi.
3. Pilih jenis catatan dan kumpulan kartu tujuan.
4. Petakan kolom pertama ke sisi depan dan kolom kedua ke sisi belakang.
5. Periksa pratinjau untuk menemukan kolom kosong, bergeser, atau berlebih.
6. Tinjau pengaturan duplikat dan pembaruan sebelum mengimpor.

Anki menentukan jumlah kolom yang diharapkan berdasarkan baris pertama yang bukan komentar. Pada entri berikutnya, kolom yang kurang akan dibiarkan kosong dan kolom berlebih tidak diimpor. Karena itu, pratinjau perlu diperiksa, terutama ketika satu pemisah yang terselip dapat mengubah susunan kolom dalam sebuah baris.

Untuk definisi yang terdiri dari beberapa baris, Anda juga perlu menentukan cara menanganinya. Anki mendukung kolom berisi beberapa baris yang diapit tanda kutip. Sebagai alternatif, Anki dapat membaca `<br>` sebagai pergantian baris jika **Allow HTML in fields** diaktifkan. Gunakan salah satu metode dan periksa salinan sebagian data sebelum mengimpor seluruh file.

Secara bawaan, Anki dapat mencocokkan catatan yang sudah ada dengan jenis yang sama berdasarkan kolom pertamanya, lalu memperbarui kolom lainnya. Opsi impor juga dapat mengabaikan duplikat atau menambahkannya sebagai catatan baru. Memperbarui catatan Anki yang sudah ada dapat mempertahankan penjadwalannya di Anki, tetapi penjadwalan dari Quizlet tidak ikut dipindahkan melalui file teks.

## Simpan set asli sampai kumpulan kartu baru berfungsi

Jalur resmi Quizlet berakhir pada **Copy text** untuk set milik pembuatnya yang dibuka di situs web. Skrip scraping, endpoint privat yang ditebak, dan alat pengunduh pihak ketiga merupakan alur terpisah yang tidak didukung. Semua itu tidak mengubah set hasil salinan atau set yang hanya bisa dilihat menjadi ekspor resmi.

Jika Anda memerlukan otomatisasi berulang, bukan salinan sekali saja, [status API Quizlet saat ini](/blog/quizlet-api/) menjelaskan batas dukungannya. Jika set itu bukan milik Anda, minta file sumber kepada pembuatnya atau buat ulang kumpulan kartu yang lebih kecil dari catatan sendiri. [Cara Membuat Flashcard yang Lebih Baik](/blog/how-to-make-better-flashcards/) dapat membantu Anda memperbaiki hasilnya, alih-alih menyalin setiap baris lama.

Jangan hapus set Quizlet asli sebelum:

- file mentah UTF-8 tersimpan di lokasi yang memiliki cadangan;
- file kerja dapat dibuka kembali dengan karakter dan pemisah yang sesuai;
- kolom dengan beberapa baris, kolom kosong, duplikat, dan baris yang tidak sesuai pola sudah diperiksa;
- konteks penting dari gambar sudah dibuat ulang menggunakan sumber yang boleh Anda gunakan; dan
- pengujian kecil menghasilkan sisi depan dan belakang yang benar di aplikasi tujuan.

Tetap simpan file teks mentah setelahnya. File ini adalah acuan mandiri yang paling mudah digunakan ketika hasil impor berikutnya terlihat salah. Jika Anda masih menentukan tujuan pemindahan kartu, [perbandingan alternatif Quizlet](/blog/quizlet-alternative/) membahas kelebihan dan kekurangannya secara lebih luas.
