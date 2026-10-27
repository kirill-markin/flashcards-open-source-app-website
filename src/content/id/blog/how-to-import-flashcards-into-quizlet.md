---
title: "Cara Mengimpor Flashcard ke Quizlet dari Excel, Sheets, atau Teks"
description: "Impor daftar kata dua kolom ke Quizlet, pilih tab dan baris baru, lalu perbaiki definisi yang terpecah, kartu berlebih, dan masalah CSV sebelum menerbitkan set."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "cara mengimpor flashcard ke Quizlet"
  - "format impor Quizlet"
  - "impor Quizlet dari Excel"
  - "Google Sheets ke Quizlet"
  - "impor Quizlet dipisahkan tab"
---

“Red, green, blue” terlihat seperti jawaban flashcard biasa. Namun, jika Anda memakai koma untuk memisahkan istilah dan definisinya, koma yang sama membuat batas kedua bagian dalam baris itu menjadi tidak jelas. Beberapa tanda baca saja bisa membuat daftar kata yang sudah siap perlu dirapikan lagi.

Untuk mengimpor flashcard ke Quizlet dari Excel, Google Sheets, atau teks, mulailah dengan dua kolom: satu untuk istilah, satu untuk definisi. Salin datanya, tempelkan ke formulir impor di situs web, lalu pilih tab sebagai pemisah antarkolom dan baris baru sebagai pemisah antarkartu. Coba empat baris terlebih dahulu agar Anda bisa memeriksa setiap pasangan sebelum memindahkan seluruh daftar.

![Seorang perajin memasangkan cangkir keramik dengan tatakan yang sesuai dalam baris terpisah sebelum memindahkannya ke rak](/blog/how-to-import-flashcards-into-quizlet.png)

## Menemukan formulir impor Quizlet

Quizlet menjelaskan cara mengimpor melalui situs webnya, dengan koma, tab, atau tanda hubung sebagai pemisah antarbidang, serta titik koma atau baris baru sebagai pemisah antarkartu. [Petunjuk impor resmi](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) memberikan urutan berikut:

1. Masuk dan pilih **Create → Flashcard set** (Buat → Set flashcard).
2. Masukkan judul, pilih **Import** (Impor), lalu tempelkan teks Anda.
3. Sesuaikan pengaturan pemisah dengan teks yang dimasukkan. Gunakan **Tab** dan **New line** (Baris baru) untuk contoh di sini.
4. Pilih **Import**, lalu pilih bahasa istilah dan definisinya.
5. Periksa kartu sebelum memilih **Create** untuk menyimpan dan menerbitkan set.

Petunjuk ini diperiksa pada 15 September 2026. Contoh di bawah menjelaskan cara menyiapkan dan memeriksa teks; contoh tersebut bukan hasil pengujian setelah masuk ke akun.

## Mulailah dengan rentang kecil di spreadsheet

Di Excel atau Google Sheets, letakkan satu pasangan istilah dan definisi pada setiap baris. Berikut contoh empat kartu untuk uji coba:

| Istilah | Definisi |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Salin hanya empat baris data pada kedua kolom. Jika judul kolom berada di baris 1, pilih **A2:B5**. Jangan sertakan judul kolom dalam rentang yang disalin.

Hasil yang diharapkan adalah empat kartu, dengan istilah berbahasa Spanyol dan definisi berbahasa Inggris. Kartu terakhir harus memuat “colores primarios de la luz” secara utuh di satu sisi dan “red, green, blue” secara utuh di sisi lainnya. Koma tersebut merupakan bagian dari jawaban.

Setelah contoh itu jelas, siapkan spreadsheet Anda sendiri. Kerjakan pada salinan agar versi asli tetap tersedia untuk perbandingan. Hapus baris kosong dan jangan sertakan catatan atau kolom tambahan dalam rentang yang dipilih. Lengkapi istilah atau definisi yang belum terisi sebelum menyalin.

Saat mengurutkan data, sertakan kedua kolom sekaligus. Mengurutkan istilah saja akan memisahkannya dari jawaban yang sesuai. Akibatnya, hasil impor dengan jumlah kartu yang benar pun masih bisa berisi pasangan yang salah.

## Format teks biasa menggunakan karakter tab asli

Keempat baris yang sama terlihat seperti ini dalam teks yang dipisahkan tab. Setiap pemisah antara istilah dan definisinya berupa satu karakter tab asli:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tab adalah karakter khusus. Beberapa spasi mungkin tampak serupa, tetapi tidak berfungsi sebagai pemisah tab. Mengetik karakter `\t` juga tidak menyisipkan tab. Jika editor teks Anda menyulitkan hal ini, masukkan pasangan tersebut ke dalam dua kolom spreadsheet, lalu salin selnya.

Setiap kartu harus menempati satu baris fisik. Definisi panjang mungkin terlihat berlanjut ke baris kedua karena jendelanya sempit; itu tidak menambahkan karakter baris baru ke dalam konten. Sebaliknya, pergantian baris yang disisipkan di dalam sel spreadsheet memang menambahkannya. Hapus pergantian baris di dalam sel sebelum memakai baris baru sebagai pemisah antarkartu.

Hapus juga tab yang ada di dalam istilah atau definisi. Dalam format ini, tab hanya digunakan untuk memisahkan kedua bidang.

## Jika daftar Anda berupa file CSV

Buka CSV di spreadsheet sebelum menyiapkannya untuk diimpor. Entri CSV seperti berikut memiliki dua bidang jika dibaca sesuai aturan tanda kutipnya:

```text
"colores primarios de la luz","red, green, blue"
```

Jawaban di dalam tanda kutip mengandung koma. Kotak teks yang memisahkan masukan berdasarkan koma belum tentu dapat membaca format CSV, jadi jangan mengandalkan tanda kutip untuk menjaga jawaban tetap utuh di sana.

Di Excel atau Google Sheets, pastikan entri tersebut menempati tepat dua sel. Lalu salin sel-sel itu untuk mendapatkan teks yang dipisahkan tab. Jika jawaban tersebar ke kolom tambahan, perbaiki pengaturan impor CSV di spreadsheet terlebih dahulu. Menyalin baris yang sudah rusak akan membawa kesalahan itu ke tahap berikutnya.

Periksa juga nilai yang mungkin ditafsirkan ulang oleh spreadsheet. Jika `0012` adalah kode yang perlu Anda pelajari, mengubahnya menjadi `12` akan mengubah kartu tersebut. Bandingkan pengenal, tanggal, tanda kutip, dan kata beraksen dengan file asli sebelum menyalin rentang.

## Saat kartu tidak sesuai dengan baris sumber

Gunakan uji coba untuk menemukan ketidaksesuaian pertama. Ubah satu hal dalam setiap percobaan, lalu bandingkan hasilnya dengan empat baris sumber yang sama.

| Gejala | Kemungkinan masalah pemisah | Yang perlu diubah |
| --- | --- | --- |
| Jawaban terpecah pada tanda koma | Koma dipilih sebagai pemisah antarbidang | Siapkan dua kolom dan pilih Tab |
| “well-being” terpisah di tengah istilah | Tanda hubung dipilih sebagai pemisah antarbidang | Pertahankan tanda hubung dan pisahkan bidang dengan tab |
| Satu jawaban menjadi beberapa kartu | Ada pergantian baris di dalam konten sumber | Jadikan jawaban satu baris fisik |
| “Term” dan “Definition” muncul sebagai kartu | Baris judul kolom ikut disalin | Pilih hanya baris data |
| Kedua bidang tetap berada di sisi yang sama | Spasi digunakan sebagai pengganti tab | Salin rentang spreadsheet dua kolom |

Misalnya, jawaban dengan “first stage” dan “second stage” pada baris terpisah dapat diubah menjadi `first stage; second stage`. Dengan begitu, kedua bagian tetap berada pada satu baris. Tetap pilih **New line** sebagai pemisah antarkartu saat menggunakan titik koma di dalam jawaban.

Jika kedua tahap itu sebaiknya menjadi pertanyaan terpisah, tulis dua pasangan lengkap. [Panduan membuat flashcard yang lebih baik (bahasa Inggris)](/blog/how-to-make-better-flashcards/) dapat membantu Anda menentukan pilihan.

## Periksa hasilnya sebelum diterbitkan

Periksa keempat kartu uji coba. Untuk daftar lengkap, bandingkan kartu hasil impor dengan sumber yang sudah dirapikan:

- Apakah jumlah totalnya sesuai dengan jumlah baris data yang lengkap?
- Apakah pasangan pertama dan terakhir cocok, termasuk jawaban lengkapnya?
- Apakah tanda baca, aksen, dan kode tetap sama?
- Apakah ada sisi kosong, judul kolom, duplikat, atau jawaban yang dipasangkan dengan istilah yang salah?
- Apakah setiap jawaban yang pergantian barisnya Anda ubah masih masuk akal?

Baca beberapa pasangan biasa selain pasangan yang tampak bermasalah. Jumlah yang sesuai saja tidak akan mendeteksi jawaban salah yang dipasangkan dengan istilah yang valid. Jika ada kesalahan, perbaiki sumbernya sebelum mengulangi impor. Simpan file yang sudah dirapikan untuk perbaikan di kemudian hari.

## Pasangan yang sudah ditulis atau kartu buatan AI?

Quizlet juga menjelaskan pembuatan kartu berbantuan AI dari materi yang diberikan dalam [ringkasan fitur pembuatan kartu dengan AI](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Isi teks yang dihasilkan perlu diperiksa secara terpisah. Untuk daftar istilah dan definisi yang sudah selesai, alur impor terstruktur memungkinkan Anda memeriksa hasil pemindahan dengan membandingkannya dengan pasangan yang sudah Anda tulis.

Masih berupa paragraf? [Ubah catatan Anda menjadi flashcard (bahasa Inggris)](/blog/turn-notes-into-flashcards/) sebelum menyiapkan teks impor. Ingin memindahkan set ke arah sebaliknya? Gunakan [panduan ekspor Quizlet](/id/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
