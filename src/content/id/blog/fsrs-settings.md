---
title: "Pengaturan FSRS Terbaik untuk Anki pada 2026: Retensi, Langkah Belajar, dan Beban Pengulangan"
description: "Pilih pengaturan FSRS Anki yang aman untuk target retensi, langkah belajar, optimasi, penjadwalan ulang, dan beban pengulangan di Anki 26.08 dengan FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "pengaturan FSRS"
  - "pengaturan FSRS terbaik"
  - "pengaturan FSRS Anki"
  - "target retensi FSRS"
  - "langkah belajar FSRS"
  - "simulator FSRS"
  - "optimasi parameter FSRS"
  - "FSRS-6"
---

Menaikkan target retensi Anki dari 90% menjadi 95% terdengar seperti perubahan kecil. Namun, beban belajarnya tidak sekadar naik lima persen. FSRS harus memperpendek interval saat target dinaikkan, dan koleksi yang sudah lama dipelajari bisa menghasilkan antrean pengulangan yang jauh lebih berat. Jika Anda juga mengaktifkan **Reschedule cards on change**, sebagian beban itu bisa langsung muncul.

Karena itu, pengaturan FSRS terbaik bukanlah deretan parameter yang tinggal disalin. Anda perlu mengambil beberapa keputusan: tentukan beban belajar yang sanggup dijalani secara konsisten, pilih target daya ingat yang sesuai dengan beban tersebut, sesuaikan model dengan riwayat pengulangan Anda sendiri, dan biarkan tanggal jatuh tempo yang ada kecuali Anda memang ingin menghitungnya ulang.

Nama opsi dan perilaku yang dijelaskan di bawah mengikuti [rilis Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) beserta pengaturan FSRS-6-nya. Jika Anda ingin memahami modelnya terlebih dahulu, baca [Apa Itu FSRS?](/blog/what-is-fsrs/). Jika Anda masih memilih algoritma penjadwalan, mulai dari [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

> **Pengungkapan:** Saya Kirill Markin, pembuat [Nibomo](/id/features/). Anki menyediakan penyesuaian parameter berdasarkan riwayat pribadi dan simulator beban pengulangan eksperimental yang saat ini belum tersedia di Nibomo. Perbandingan menjelang akhir artikel menjelaskan perbedaan tersebut secara rinci.

**Fakta diperiksa:** 8 September 2026.

![Operator pintu air menguji aliran air pada model berskala sebelum mengubah pintu air yang sebenarnya](/blog/fsrs-settings-v2.png)

## Jawaban singkat: mulai dari sini

Bagi sebagian besar pengguna Anki, pilihan berikut merupakan titik awal yang aman, bukan pengaturan yang berlaku untuk semua orang:

| Pengaturan atau kebiasaan | Pilihan awal yang aman | Alasannya |
| --- | --- | --- |
| Target retensi (Desired retention) | `0.90` | Nilai bawaan Anki ini menyeimbangkan kemampuan mengingat dan beban pengulangan. |
| Parameter FSRS | Gunakan **Optimize Current Preset**; jangan menempelkan atau mengedit bobot secara manual | Fitur optimasi menyesuaikan model dengan riwayat pengulangan Anda. |
| Frekuensi optimasi | Paling sering sebulan sekali; biasanya beberapa bulan sekali sudah cukup | Anki tidak menyarankan optimasi terlalu sering. |
| Langkah belajar | Gunakan sedikit langkah yang selesai pada hari yang sama | Rangkaian langkah yang panjang menunda penjadwalan berdasarkan model. |
| Langkah belajar ulang | Buat sesedikit mungkin, masing-masing kurang dari satu hari | Batas yang sama berlaku setelah gagal mengingat kartu saat pengulangan. |
| Reschedule cards on change | Nonaktif | Pengaturan baru bisa berlaku melalui pengulangan berikutnya tanpa menghitung ulang antrean hari ini. |
| Interval maksimum | Pertahankan nilai bawaan 100 tahun | Batas yang lebih pendek membuat kartu yang sudah lama dikuasai muncul lebih sering. |
| Kartu baru per hari | Sesuaikan dengan beban yang sanggup dijalani secara konsisten | Setiap kartu baru perlu dipelajari sekarang dan diulang lagi nanti. |
| Again dan Hard | Again berarti gagal mengingat; Hard berarti berhasil mengingat dengan susah payah | Penilaian yang salah memberikan riwayat yang salah kepada model. |

Jika pengulangan masih terkendali dan pengaturan Anda sudah mendekati ini, mungkin tidak ada yang perlu diperbaiki. Mengutak-atik pengaturan bukanlah belajar.

## Pisahkan tiga keputusan ini

Target retensi, parameter FSRS, dan beban belajar harian sering dianggap sebagai satu hal. Padahal, masing-masing mengatur hal yang berbeda:

- **Target retensi** adalah sasaran kemampuan mengingat Anda. Tentukan berdasarkan tujuan dan waktu belajar yang tersedia.
- **Parameter FSRS** menyesuaikan model memori dengan riwayat pengulangan. Anki menghitungnya melalui fitur optimasi.
- **Batas kartu baru dan pengulangan** mengatur jumlah materi yang masuk serta jumlah pengulangan yang sudah waktunya dikerjakan dan dapat ditampilkan Anki setiap hari.

Pemisahan ini memudahkan Anda mencari sumber masalah. Antrean yang panjang belum tentu berarti parameternya salah. Dek dengan materi penting belum tentu memerlukan preset parameter tersendiri. Menurunkan target retensi juga tidak akan memperbaiki laju penambahan kartu yang sejak awal terlalu tinggi.

## Pilih target retensi berdasarkan beban belajar, bukan ambisi

Target retensi memberi tahu FSRS seberapa besar peluang yang Anda inginkan untuk mengingat kartu ketika jadwal pengulangannya tiba. Pada `0.90`, FSRS mengatur jadwal berdasarkan perkiraan peluang mengingat sebesar 90%. Ini adalah target model, bukan jaminan bahwa setiap sesi atau ujian akan menghasilkan tepat 90% jawaban benar.

Menaikkan maupun menurunkan target memiliki konsekuensi:

- Naikkan target retensi, maka interval memendek dan jumlah pengulangan bertambah.
- Turunkan targetnya, maka interval memanjang dan kegagalan mengingat bertambah.
- Jika target terlalu rendah, tambahan belajar ulang setelah gagal bisa menghabiskan sebagian waktu yang ingin Anda hemat.

Nilai bawaan Anki adalah 90%. [Panduan target retensinya](https://docs.ankiweb.net/deck-options.html#desired-retention) mengingatkan bahwa beban pengulangan naik pesat saat target mendekati 100% dan menyarankan agar nilainya tetap di bawah 97%. [Penjelasan resmi tentang retensi optimal](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) membahas sisi lain kurva tersebut: retensi yang sangat rendah juga bisa tidak efisien karena kartu yang terlupakan perlu dipelajari ulang lebih sering.

Mulai dari `0.90`, lalu ubah hanya setelah memeriksa beban pengulangannya. Target lebih tinggi bisa masuk akal untuk materi yang menimbulkan konsekuensi nyata jika terlupakan. Target lebih rendah bisa masuk akal ketika pengulangan menyita waktu dari kegiatan belajar yang lebih bernilai. Keduanya tidak akan memperbaiki kartu yang tidak jelas, penilaian yang tidak jujur, atau terlalu banyak kartu baru.

### Retensi dek dan parameter preset memiliki cakupan berbeda

Di Anki 26.08, **Desired retention** menyediakan dua cakupan: **Shared Preset** dan **This deck**. Jadi, beberapa dek yang berkaitan bisa tetap menggunakan satu preset parameter, sementara dek tertentu memiliki target retensinya sendiri.

Gunakan pengaturan khusus dek ini ketika konsekuensi lupa berbeda. Dek untuk ujian lisensi mungkin layak memakai target lebih tinggi daripada dek referensi berprioritas rendah, meskipun keduanya menggunakan model hasil penyesuaian yang sama.

Memilih **This deck** tidak membuat parameter FSRS menjadi khusus untuk dek itu. Secara bawaan, Anki menyesuaikan parameter berdasarkan riwayat pengulangan semua dek yang menggunakan preset aktif. Jika tingkat kesulitan yang Anda rasakan sangat berbeda antarkelompok dek, gunakan preset terpisah agar model masing-masing dapat disesuaikan secara terpisah.

## Gunakan Help Me Decide dan Simulator sesuai kebutuhan

Anki 26.08 menyediakan dua alat eksperimental dengan fungsi berbeda:

- **Help Me Decide (Experimental)** menampilkan kurva retensi dan beban pengulangan yang disesuaikan dengan Anda. Gunakan untuk menjawab, “Target retensi berapa yang sesuai dengan jumlah pengulangan atau menit belajar yang sanggup saya jalani?”
- **FSRS Simulator (Experimental)** memperkirakan hasil suatu konfigurasi dalam jangka waktu tertentu. Gunakan untuk membandingkan perubahan target retensi, jumlah kartu baru, batas pengulangan, dan interval maksimum.

[Dokumentasi FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) mencantumkan masukan utamanya:

- jumlah hari yang akan disimulasikan
- jumlah kartu baru tambahan yang akan disimulasikan
- kartu baru per hari
- pengulangan maksimum per hari
- interval maksimum
- target retensi dan parameter FSRS pada preset

Simulasi ini juga menggunakan status memori aktual kartu-kartu dalam preset. Karena itu, hasilnya lebih berguna untuk koleksi yang sudah lama dipelajari daripada sekadar mengalikan jumlah kartu yang harus diulang hari ini dengan suatu persentase umum.

Jalankan tiga skenario sebelum mengubah pengaturan yang sedang digunakan:

1. Target retensi dan jumlah kartu baru Anda saat ini.
2. Target retensi yang sedang Anda pertimbangkan.
3. Target yang sama dengan lebih sedikit kartu baru per hari.

Skenario ketiga menguji alternatif yang sering berguna: pertahankan target kemampuan mengingat dan perlambat penambahan materi baru. Jika perkiraan bebannya menjadi terkendali, Anda tidak perlu mengorbankan daya ingat hanya untuk mengurangi antrean. Panduan lebih lengkap tentang penambahan kartu ada di [Berapa Banyak Kartu Belajar Baru per Hari?](/blog/how-many-new-flashcards-per-day/).

Kedua alat ini memberikan perkiraan. Hari belajar yang terlewat, kartu yang diedit, materi baru, dan perubahan kebiasaan penilaian bisa membuat beban aktual berbeda dari grafik. Gunakan perbandingannya untuk menentukan arah. Jangan menganggapnya sebagai kepastian tentang panjang antrean beberapa bulan mendatang.

Panduan lama mungkin menyebut **Compute Minimum Recommended Retention**, atau CMRR. Anki menghapus fitur tersebut pada versi 25.07. Itu bukan lagi cara yang digunakan untuk memilih target retensi.

## Optimalkan parameter FSRS berdasarkan riwayat Anda sendiri

Target retensi menyatakan tujuan Anda. Parameter FSRS menggambarkan bagaimana model menyesuaikan diri dengan pengulangan Anda.

Di Anki 26.08, gunakan **Optimize Current Preset** untuk menyesuaikan parameter preset aktif. Secara bawaan, Anki menyertakan riwayat pengulangan semua dek yang menggunakan preset tersebut; Anda dapat mengubah kriteria pencarian jika ingin membatasi data yang dipakai. **Optimize All Presets** memperbarui semua preset sekaligus.

Jangan mengetik bobot secara manual atau menyalinnya dari Reddit, video, atau dek orang lain. Kartu, waktu pengulangan, dan kebiasaan penilaian mereka berbeda dari milik Anda. Deretan [bobot FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) yang rapi bukanlah strategi belajar yang bisa dipindahkan begitu saja.

Lakukan optimasi ulang hanya setelah terkumpul cukup banyak data pengulangan baru. Manual Anki menyatakan sebulan sekali sudah cukup, sedangkan petunjuk di aplikasi versi 26.08 menyatakan beberapa bulan sekali sudah cukup. Kesimpulan praktisnya sama: tidak ada alasan untuk mengoptimalkan setiap minggu, apalagi setelah setiap sesi.

### Periksa kecocokan model pada preset aktif

Aktifkan **Check health when optimizing (slow)** ketika Anda ingin Anki menilai seberapa baik FSRS dapat menyesuaikan diri dengan riwayat preset aktif. Pemeriksaan ini berjalan bersama **Optimize Current Preset**, bukan **Optimize All Presets**.

Jika hasilnya buruk, periksa datanya sebelum mengubah bobot. [Panduan parameter FSRS Anki](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) menyebut beberapa penyebab umum: riwayat belum mencapai beberapa ratus pengulangan, menggunakan Hard setelah gagal, dan tidak menekan Again ketika gagal mengingat. Jika riwayat yang berguna masih sedikit, pertahankan nilai bawaan dan optimalkan nanti, alih-alih meminjam parameter pengguna lain.

## Again berarti gagal mengingat; Hard tetap berarti berhasil

Kebiasaan ini sama pentingnya dengan pengaturan mana pun.

Gunakan **Again** ketika Anda tidak bisa memberikan jawaban yang diminta atau menjawab salah. Gunakan **Hard** hanya jika Anda mengingat jawaban dengan benar, tetapi membutuhkan usaha besar atau sempat ragu. Good dan Easy juga menandakan bahwa Anda berhasil mengingat.

Menekan Hard untuk menghindari interval Again yang pendek akan mencatat keberhasilan setelah kegagalan. Akibatnya, FSRS belajar dari kejadian yang salah. Pilih tombol berdasarkan keberhasilan Anda mengingat, bukan karena menginginkan interval yang tertera di atasnya.

Kartu yang ambigu membuat penilaian jujur lebih sulit. Jika satu pertanyaan meminta lima fakta dan Anda hanya mengingat empat, masalah penjadwalannya sudah dimulai di editor. Pecah atau tulis ulang kartunya. Untuk kartu yang tetap sulit diingat meski sudah berulang kali diulang, baca [Cara Memperbaiki Kartu Belajar yang Terus Gagal Diingat](/blog/how-to-fix-leech-flashcards/).

## Gunakan langkah belajar FSRS yang singkat, atau kosongkan dengan sengaja

Langkah belajar dan belajar ulang mengatur kapan kartu muncul lagi dalam waktu dekat, sebelum mengikuti jadwal jangka panjang yang biasa. Keduanya bukan target retensi tambahan.

Panduan FSRS Anki menyarankan dua batasan:

- setiap langkah harus lebih pendek dari satu hari dan dapat diselesaikan pada hari yang sama
- jumlah pengulangan dalam satu hari sebaiknya tetap sedikit

Rangkaian panjang seperti `1m 10m 1d 3d` membawa kebiasaan lama SM-2 ke FSRS. Langkah satu hari atau lebih menunda penjadwalan berdasarkan model dan bisa menghasilkan label tombol yang membingungkan, misalnya interval Hard lebih panjang daripada Good.

Rangkaian singkat seperti `1m 10m`, dengan langkah belajar ulang `10m`, merupakan titik awal yang konservatif jika sesuai dengan sesi belajar Anda. Lebih banyak pengulangan dalam satu hari belum tentu lebih baik.

Anki 26.08 juga mengizinkan kolom langkah belajar maupun belajar ulang dikosongkan. Saat FSRS aktif, kolom kosong menyerahkan penjadwalan jangka pendek tersebut kepada FSRS. Fitur ini masih eksperimental, dan interval Again bisa satu hari atau lebih. Pertahankan langkah manual yang singkat jika Anda membutuhkan pengulangan pada hari yang sama dengan waktu yang dapat diperkirakan; kosongkan kolom hanya jika Anda memang ingin menyerahkan penentuan waktunya kepada FSRS.

## Nonaktifkan Reschedule cards on change agar peralihannya bertahap

Saat **Reschedule cards on change** nonaktif—sesuai pengaturan bawaan—mengaktifkan FSRS atau mengubah target retensi maupun parameter tidak langsung mengubah tanggal jatuh tempo yang ada. Konfigurasi baru berlaku ketika kartu diulang berikutnya, sehingga antrean berubah secara bertahap.

Menyimpan salah satu perubahan FSRS tersebut saat opsi ini aktif akan langsung menghitung ulang tanggal jatuh tempo. Bergantung pada target baru dan status kartu, banyak kartu bisa jatuh tempo sekaligus. Anki juga menambahkan catatan pengulangan untuk kartu yang dijadwalkan ulang, sehingga ukuran koleksi bertambah.

Opsi ini hanya berguna jika Anda memang ingin menghitung ulang jadwal yang sudah ada. Untuk koleksi yang sudah lama dipelajari:

1. Buat cadangan baru dan pastikan Anda tahu cara membatalkan perubahan atau memulihkannya.
2. Jalankan Simulator dengan pengaturan yang diusulkan.
3. Pilih satu perubahan konfigurasi; jangan gabungkan beberapa eksperimen.
4. Saat menyimpannya, aktifkan penjadwalan ulang hanya jika Anda menginginkan perubahan tanggal jatuh tempo seketika dan sanggup menangani hasilnya.

Anki secara tegas menyarankan pencadangan ketika beralih dari SM-2 dengan penjadwalan ulang. [Panduan pencadangan kartu belajar](/blog/how-to-back-up-flashcards/) menjelaskan lebih lanjut mengapa cara memulihkan data sama pentingnya dengan berkas cadangannya.

## Pertahankan interval maksimum yang panjang

Interval maksimum bawaan Anki adalah 100 tahun. Angka ini terlihat aneh sampai Anda ingat bahwa itu hanya batas atas, bukan janji bahwa setiap kartu yang sudah dikuasai akan menghilang selama satu abad.

Memperpendek batas tersebut memaksa kartu yang sudah Anda kuasai muncul lebih cepat dan menambah beban pengulangan. Ketika mencapai batas itu, Hard, Good, dan Easy bisa menampilkan interval yang sama karena semuanya tidak boleh melampaui nilai maksimum.

Interval maksimum yang lebih pendek bisa masuk akal jika ada tenggat ujian, materi sering berubah, atau aturan profesi mewajibkan pengulangan terlepas dari perkiraan daya ingat. Sesuaikan batas tersebut dengan kalender dan Simulator, alih-alih memilih angka kecil karena cemas. [Cara Belajar untuk Ujian dengan FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) membahas kebutuhan khusus tersebut.

Untuk belajar jangka panjang pada umumnya, biarkan batasnya tetap panjang. Target retensi sudah mengatur kapan perkiraan kemampuan mengingat harus memicu pengulangan.

## Penambahan kartu baru ikut menentukan beban belajar

FSRS dapat menyebarkan jadwal pengulangan, tetapi penambahan materi tanpa batas tetap tidak akan sanggup Anda tangani. Setiap kartu baru perlu dipelajari sekarang dan diulang lagi nanti.

Ketika antrean terlalu berat, periksa hal-hal berikut sebelum menurunkan target retensi:

- jumlah kartu baru per hari
- impor besar atau pembuatan kartu dalam jumlah banyak
- batas pengulangan maksimum yang terus menyembunyikan kartu yang sudah waktunya diulang
- kartu yang terus gagal diingat dan pertanyaan yang tidak jelas sehingga harus dicoba berulang kali
- hari pengulangan yang terlewat

Gunakan **Additional new cards to simulate** ketika Anda tahu suatu dek akan bertambah. Perkiraan yang hanya berdasarkan koleksi hari ini tidak akan mencerminkan beban setelah impor besar.

Jika hasilnya terlalu tinggi, kurangi penambahan kartu lalu simulasikan lagi. Dengan demikian, target kemampuan mengingat tetap terjaga tanpa membuat penjadwal membiarkan Anda lebih sering lupa.

## Anki dan Nibomo menyediakan pengaturan FSRS yang berbeda

Kedua produk menggunakan FSRS-6, tetapi pengaturan FSRS Anki tidak memiliki padanan satu per satu di Nibomo.

| Kemampuan | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Target retensi | **Shared Preset** atau **This deck** | Dapat diatur per ruang kerja; bawaan `0.90` |
| Parameter FSRS | **Optimize Current Preset** atau **Optimize All Presets** berdasarkan riwayat pengulangan | Bobot bawaan resmi FSRS-6 dikunci dan tidak dapat diubah pengguna pada v1 |
| Langkah belajar | Dapat diatur; penjadwalan oleh FSRS dengan kolom kosong masih eksperimental | Dapat diatur per ruang kerja; bawaan `1m 10m` |
| Langkah belajar ulang | Dapat diatur; penjadwalan oleh FSRS dengan kolom kosong masih eksperimental | Dapat diatur per ruang kerja; bawaan `10m` |
| Interval maksimum | Bawaan 100 tahun | Bawaan 36.500 hari, juga 100 tahun |
| Perubahan pengaturan | Secara bawaan berlaku untuk pengulangan berikutnya; penjadwalan ulang jadwal lama bersifat opsional | Hanya berlaku untuk pengulangan berikutnya; tanggal jatuh tempo yang ada tidak dihitung ulang |
| Alat perkiraan beban pengulangan | **Help Me Decide (Experimental)** dan **FSRS Simulator (Experimental)** | Tidak ada simulator beban pengulangan yang setara pada v1 |

Nibomo menggunakan penilaian standar Again, Hard, Good, dan Easy serta menyimpan status memori FSRS untuk setiap kartu. Penjadwal backend, iOS, dan Android merupakan tiga implementasi terpisah dengan perilaku yang dijaga agar tetap sama; alur pengulangan web menggunakan penjadwal backend tanpa menambahkan salinan keempat.

Batasan dan nilai bawaan tersebut didokumentasikan dalam [spesifikasi penjadwalan FSRS Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) yang tersedia untuk umum. Pilihannya jelas: Nibomo menyediakan pengaturan FSRS-6 yang praktis pada tingkat ruang kerja, sementara Anki menyediakan cakupan lebih terperinci, penyesuaian model berdasarkan riwayat pribadi, dan simulasi. Jika pengaturan tersebut penting bagi Anda, Anki lebih cocok.

## Alur yang lebih aman untuk koleksi yang sudah lama dipelajari

Jika Anda sudah memiliki riwayat pengulangan berbulan-bulan atau bertahun-tahun, ikuti urutan ini:

1. **Perbaiki cara memberi penilaian.** Again berarti gagal; Hard berarti berhasil dengan susah payah.
2. **Optimalkan preset aktif.** Sesuaikan model dengan riwayat Anda sendiri, jangan mengedit atau menyalin bobot.
3. **Periksa kecocokan model jika perlu.** Perlakukan riwayat yang sedikit atau tidak konsisten sebagai masalah data.
4. **Gunakan Help Me Decide.** Pilih rentang retensi berdasarkan jumlah pengulangan atau menit belajar yang sanggup Anda jalani.
5. **Jalankan Simulator.** Bandingkan pengaturan saat ini, target yang diusulkan, dan jumlah kartu baru yang lebih rendah.
6. **Ubah satu pengaturan terlebih dahulu.** Sesuaikan retensi atau jumlah kartu baru terlebih dahulu, lalu amati antrean sebenarnya.
7. **Pertahankan langkah yang singkat.** Hapus rangkaian langkah belajar dan belajar ulang dengan interval sehari atau lebih; gunakan kolom kosong hanya sebagai eksperimen.
8. **Biarkan interval maksimum tetap panjang.** Perpendek hanya jika ada tenggat atau persyaratan yang jelas.
9. **Biarkan penjadwalan ulang nonaktif.** Jika perlu menghitung ulang jadwal seketika, buat cadangan dahulu dan rencanakan cara menangani antrean yang dihasilkan.

Urutan ini menjaga agar perubahan jadwal koleksi lama tetap dapat dibatalkan selama mungkin. Ini juga mencegah tiga masalah berbeda—kecocokan model, target kemampuan mengingat, dan arus materi baru—bercampur menjadi satu persoalan pengaturan yang rumit.

## Pertanyaan umum tentang pengaturan FSRS terbaik

### Apakah 90% merupakan target retensi terbaik untuk FSRS?

Itulah titik awal umum yang paling aman karena merupakan nilai bawaan Anki dan menghindari bagian kurva tempat beban pengulangan melonjak paling tajam pada retensi tinggi. Nilai terbaik untuk suatu dek bergantung pada konsekuensi lupa dan beban yang sanggup Anda jalani. Periksa **Help Me Decide (Experimental)** sebelum mengubahnya.

### Haruskah saya menetapkan target retensi 95%?

Hanya setelah memeriksa tambahan jumlah pengulangan atau menit belajarnya. Dek yang dirancang dengan baik dan berisi materi penting mungkin layak memakai 95%; koleksi besar untuk belajar santai bisa menimbulkan beban yang tidak perlu. Jangan sekaligus mengaktifkan penjadwalan ulang untuk jadwal lama kecuali Anda memang ingin langsung menghitung ulang tanggal jatuh tempo.

### Seberapa sering saya harus mengoptimalkan parameter FSRS?

Sebulan sekali sudah cukup sering, dan petunjuk di aplikasi Anki 26.08 menyatakan beberapa bulan sekali sudah cukup. Lakukan optimasi setelah terkumpul cukup banyak data pengulangan baru, bukan menurut jadwal harian atau mingguan.

### Apakah langkah belajar FSRS sebaiknya dikosongkan?

Langkah belajar atau belajar ulang yang kosong membuat Anki 26.08 menyerahkan jadwal jangka pendek terkait kepada FSRS. Fitur ini masih eksperimental, dan Again bisa dijadwalkan satu hari atau lebih kemudian. Sedikit langkah yang selesai pada hari yang sama tetap menjadi pilihan konservatif.

### Apakah mengubah pengaturan FSRS menjadwalkan ulang kartu Anki yang sudah ada?

Secara bawaan, tidak. Saat **Reschedule cards on change** nonaktif, pengaturan baru memengaruhi pengulangan berikutnya tanpa langsung menghitung ulang antrean. Mengaktifkannya mengubah tanggal jatuh tempo dan bisa membuat banyak kartu jatuh tempo sekaligus, jadi buat cadangan terlebih dahulu.

### Apakah CMRR masih tersedia di Anki?

Tidak. Anki menghapus Compute Minimum Recommended Retention pada versi 25.07. Di Anki 26.08, gunakan **Help Me Decide (Experimental)** dan **FSRS Simulator (Experimental)** untuk membandingkan retensi dengan perkiraan beban pengulangan.

### Apakah Nibomo menggunakan pengaturan yang sama dengan Anki?

Nibomo menggunakan FSRS-6 dan menyediakan target retensi, langkah belajar, langkah belajar ulang, interval maksimum, serta fuzz per ruang kerja. Nibomo tidak menyalin seluruh model pengaturan Anki: bobot dikunci pada v1, perubahan hanya berlaku untuk pengulangan berikutnya, dan tidak ada optimasi parameter berdasarkan riwayat pribadi atau simulator beban pengulangan.

## Tentukan beban belajar sebelum persentasenya

Pengaturan FSRS yang baik membuat antrean pengulangan mendukung rencana belajar yang nyata. Mulai dari 90%, perkirakan bebannya, kendalikan penambahan kartu baru, dan naikkan retensi hanya jika manfaat mengingat lebih banyak sepadan dengan pengulangan tambahannya. Pertahankan langkah yang singkat, interval maksimum yang panjang, dan data penilaian yang jujur.

Setelah itu, tinggalkan layar pengaturan. Penjadwal lebih membutuhkan pengulangan yang konsisten daripada satu malam lagi untuk mengutak-atiknya.
