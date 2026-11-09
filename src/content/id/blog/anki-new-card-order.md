---
title: "Urutan Kartu Baru di Anki: Memilih, Mengurutkan, dan Memeriksa Antrean"
description: "Pahami cara Anki memilih dan mengurutkan kartu baru lewat contoh enam kartu. Periksa batas subdek, posisi kartu dalam antrean, dan dek yang dipilih untuk belajar."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "urutan kartu baru Anki"
  - "urutan pemilihan kartu baru Anki"
  - "cara mengurutkan kartu baru Anki"
  - "urutan posisi menaik di Anki"
  - "kartu Anki tampil tidak berurutan"
---

Di Anki, kartu baru di posisi 10 bisa muncul setelah kartu di posisi 60. Saat Anda belajar dari dek induk dengan pemilihan **Dek (Deck)** dan pengurutan **Sesuai urutan pemilihan (Order gathered)**, Anki bisa selesai mengambil kartu dari subdek yang pertama sebelum beralih ke subdek yang berisi kartu di posisi 10. Mengurutkan kartu menurut tanggal pembuatan di penjelajah kartu (Browser) tidak mengubah antrean belajar.

Anki menentukan urutan kartu baru dalam dua tahap. Pada tahap **pemilihan** (*gather*), Anki mengambil kartu sesuai batas yang berlaku hari ini. Pada tahap **pengurutan** (*sort*), Anki menata kartu yang sudah diambil. Mulailah dengan memeriksa apakah kartu yang terpilih berbeda dari perkiraan atau kartunya sudah tepat tetapi tampil dalam urutan yang berbeda.

Panduan ini berlaku untuk dek biasa di Anki desktop. Contoh enam kartu ini dihitung di atas kertas berdasarkan manual yang berlaku dan versi rilis [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). Keduanya diperiksa pada 6 Oktober 2026.

![Seorang pria memegang piringan hitam keempat di atas ruang kosong pada rak, di samping tiga piringan lainnya. Di belakangnya ada dua peti berisi album yang belum dipilih.](/blog/anki-new-card-order.png)

## Pilih urutan yang Anda inginkan

Buka **Opsi (Options)** untuk dek yang Anda klik saat mulai belajar, lalu lihat bagian **Urutan Tampilan (Display Order)**. Saat Anda belajar dari dek induk, pengaturan urutan tampilan dek itu berlaku untuk seluruh sesi, termasuk kartu dari subdeknya.

| Hasil yang diinginkan | Urutan Pemilihan Kartu Baru (New Card Gather Order) | Urutan Pengurutan Kartu Baru (New Card Sort Order) |
| --- | --- | --- |
| Ikuti posisi kartu baru dari angka terkecil ke terbesar di seluruh dek yang dipilih beserta subdeknya | Posisi menaik (Ascending position) | Sesuai urutan pemilihan |
| Dahulukan subdek menurut abjad, lalu ikuti urutan posisi di tiap subdek | Dek | Sesuai urutan pemilihan |
| Pertahankan kumpulan kartu yang terpilih, lalu acak urutan tampilnya | Pengaturan pemilihan yang Anda pilih | Acak (Random) |

Kombinasi ini mengikuti definisi [pemilihan kartu baru](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) dan [pengurutan kartu baru](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) dalam manual Anki berbahasa Inggris. **Posisi menaik** mengikuti angka posisi yang tersimpan untuk kartu baru. Urutannya bisa berbeda dari urutan tanggal pembuatan karena cara Anki menyisipkan kartu dan perubahan posisi secara manual bisa memengaruhi angka tersebut.

Sebelum mengubah pengaturan, periksa preset yang ditetapkan untuk dek itu dan dek lain yang juga memakainya. Pengaturan urutan tampilan tersimpan di preset. Jika perubahan hanya ditujukan untuk satu dek, pisahkan presetnya terlebih dahulu dengan mengikuti [panduan preset khusus satu dek (bahasa Inggris)](/blog/anki-deck-options-presets/). Batas harian bisa diberi nilai khusus lewat **Dek ini (This deck)** atau **Hanya hari ini (Today only)**. Pengaturan urutan tampilan tetap dipakai bersama melalui preset.

## Hitung empat kartu yang masuk

Bayangkan sebuah dek induk biasa bernama `OrderLab` yang memiliki dua subdek dan hanya berisi enam kartu berikut. Setiap kartu berasal dari catatan **Dasar (Basic)** yang berbeda, dan setiap catatan menghasilkan satu kartu. Jadi, keenam kartu punya nomor tipe yang sama dan tidak ada kartu saudara, yaitu kartu lain dari catatan yang sama.

| Kartu | Dek | Posisi kartu baru yang tersimpan |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Anggap keenam kartu masih baru dan semuanya tersedia di dek masing-masing. Artinya, tak satu pun disembunyikan sementara (*buried*), ditangguhkan (*suspended*), atau berada di dek terfilter. Pada awal sesi, tidak ada kartu lain, pengulangan dalam tahap belajar, atau ulasan. Belum ada kartu yang dipelajari hari ini. `OrderLab` tidak punya dek di atasnya, dan batas ulasan yang berlaku masih memberi ruang untuk keenam kartu baru.

Pilih **OrderLab** untuk belajar. Batas kartu baru yang berlaku adalah **4** untuk dek induk, **3** untuk `01 First`, dan **2** untuk `02 Second`, tanpa perubahan batas sementara. Gunakan **Sesuai urutan pemilihan** sebagai pengaturan pengurutan untuk kedua skenario. Hitung keduanya di atas kertas dari kondisi awal koleksi yang sama, tanpa menjawab kartu di antara keduanya.

Jika pengaturan pemilihannya **Dek**, Anki bekerja dalam tiga langkah.

1. Anki memeriksa `01 First` sebelum `02 Second` sesuai urutan abjad.
2. Anki mengambil **A, B, C** sesuai urutan posisi. `01 First` sudah menyumbang tiga kartu, jadi dek induk masih punya satu tempat.
3. Anki mengambil **D** dari `02 Second` dan mencapai batas empat kartu pada dek induk.

Urutan kemunculan pertama kartu baru yang diperkirakan adalah **A → B → C → D**. E dan F tidak terpilih.

Dengan **Posisi menaik**, urutan kandidat dari kedua subdek adalah **D → A → E → B → F → C**. Empat kandidat pertama memenuhi semua batas. Ada dua kartu dari `02 Second` dan dua dari `01 First`, sehingga totalnya empat. Pemilihan berhenti di situ.

Urutan yang diperkirakan adalah **D → A → E → B**. C dan F tidak terpilih. Kode [pemilihan kartu pada versi rilis](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) menerapkan batas dek dan dek induk saat setiap kartu dimasukkan.

`02 Second` boleh menyumbang paling banyak dua kartu. Dengan pemilihan **Dek**, subdek itu hanya menyumbang satu kartu karena `01 First` sudah memakai tiga dari empat tempat yang tersedia. **Posisi menaik** menghasilkan dua kartu dari tiap subdek karena susunan posisi dalam contoh ini. Pembagiannya bisa berbeda di koleksi lain.

## Masukkan keenam kartu untuk memisahkan pemilihan dari urutan tampil

Untuk perbandingan kedua di atas kertas, beri ruang untuk keenam kartu. Tetapkan batas **6** untuk dek induk, **3** untuk `01 First`, dan **3** untuk `02 Second`. Tetap gunakan **Sesuai urutan pemilihan**.

| Pengaturan pemilihan | Batas dek induk / `01 First` / `02 Second` | Perkiraan urutan kemunculan pertama |
| --- | --- | --- |
| Dek | 6 / 3 / 3 | A → B → C → D → E → F |
| Posisi menaik | 6 / 3 / 3 | D → A → E → B → F → C |

Kedua pengaturan memilih keenam kartu. Kali ini hanya urutan tampilnya yang berbeda. Jika batas dek induk saja yang dinaikkan ke enam dan batas `02 Second` tetap dua, hanya lima kartu yang masuk. F tetap di luar antrean. Kenaikan batas ini hanya bagian dari perhitungan contoh.

## Pengurutan hanya bekerja pada kartu yang sudah terpilih

Kembali ke batas awal **4 / 3 / 2**, lalu ubah hanya **Urutan Pengurutan Kartu Baru** ke **Acak**.

| Pengaturan pemilihan | Kartu yang bisa diacak | Kartu yang tidak bisa ditambahkan lewat pengurutan |
| --- | --- | --- |
| Dek | A, B, C, D | E, F |
| Posisi menaik | D, A, E, B | C, F |

Anki mengacak urutan tampil, sementara kumpulan kartunya tetap sama. Tabel ini menunjukkan kartu mana yang bisa muncul, tetapi urutan acaknya tidak bisa diperkirakan dari data tersebut. [Kode pengurutan pada versi rilis Anki](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) menata ulang kartu yang sudah terpilih.

**Tipe kartu, lalu urutan pemilihan (Card type, then order gathered)** juga bekerja pada kumpulan kartu yang sudah terpilih. Keenam kartu bertipe catatan Dasar memiliki nomor tipe kartu yang sama, jadi pengaturan ini mempertahankan urutan pemilihannya.

Untuk contoh yang hanya membahas pengurutan, anggap empat kartu dari catatan dengan beberapa templat sudah terpilih dalam urutan **W (tipe 2), X (tipe 1), Y (tipe 2), Z (tipe 1)**. Pengurutan menurut tipe kartu menghasilkan **X → Z → W → Y**. Tipe 1 tampil lebih dulu, dan kartu dalam tiap tipe tetap mengikuti urutan pemilihan. Contoh ini dimulai setelah pemilihan selesai, sehingga kartu saudara mana yang bisa masuk dengan pengaturan penyembunyian sementara Anda berada di luar cakupannya.

Nomor tipe menunjukkan posisi templat kartu dalam tipe catatannya. Apakah sebuah kartu meminta Anda mengenali sesuatu atau menghasilkan jawaban bergantung pada templatnya. Periksa pertanyaan pada kartu sebelum menganggap pengurutan menurut tipe akan mendahulukan semua pertanyaan dengan arah maju.

## Periksa posisi di penjelajah kartu sebelum mengubahnya

Buka **Jelajahi (Browse)**, pilih mode **Kartu (Cards)**, lalu cari kartu di dek beserta subdeknya. Untuk contoh ini, gunakan pencarian berikut.

```text
deck:OrderLab is:new
```

Dari menu pada judul kolom, tampilkan **Pertanyaan (Question)**, **Kartu (Card)**, **Dek (Deck)**, **Jatuh Tempo (Due)**, dan **Dibuat (Created)**. Untuk kartu baru, **Jatuh Tempo** menunjukkan posisi kartu dalam antrean, sedangkan **Dibuat** menunjukkan kapan catatannya dibuat. **Bidang Pengurutan (Sort Field)** menampilkan isi bidang catatan yang ditetapkan sebagai dasar pengurutan. Mengurutkan tabel menurut salah satu kolom hanya mengubah tampilan tabel. Posisi yang tersimpan dan pengaturan pemilihan kartu untuk belajar tetap sama. [Dokumentasi kolom penjelajah Anki (bahasa Inggris)](https://docs.ankiweb.net/manual/browsing#columns) menjelaskan perbedaan nilai-nilai ini.

Pencarian `is:new` bisa mencakup kartu baru yang ditangguhkan atau disembunyikan sementara. Nilai **Jatuh Tempo** untuk kartu tersebut tampil dalam tanda kurung. Gunakan pencarian yang lebih spesifik untuk mengecualikan kartu-kartu itu serta kartu yang sedang berada di dek terfilter.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Manual Anki berbahasa Inggris menjelaskan [pencarian menurut status kartu](https://docs.ankiweb.net/manual/searching#card-state) dan [pencarian menurut dek](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Jika nama dek mengandung spasi, apit namanya dengan tanda kutip, seperti pada `deck:"My Deck"`. Hasil pencarian ini masih bisa berbeda dari antrean hari ini karena batas yang berlaku dan penyembunyian otomatis kartu saudara bisa mengurangi jumlah kartu yang masuk. [Panduan tentang menyembunyikan sementara dan menangguhkan kartu (bahasa Inggris)](/blog/anki-bury-vs-suspend/) menjelaskan kapan kartu seperti ini tidak tersedia.

Jika posisi yang tersimpan sudah sesuai dengan urutan yang Anda inginkan, biarkan seperti semula. Jika memang perlu diubah, catat posisi lama, pilih beberapa kartu baru yang ingin Anda ubah, lalu gunakan **Kartu → Ubah Posisi (Cards → Reposition)**. Periksa dialognya dulu. Opsi **Geser posisi kartu yang sudah ada (Shift position of existing cards)** juga bisa menggeser kartu di luar pilihan yang angka posisinya lebih tinggi. Tanpa penggeseran, beberapa kartu bisa mendapat angka posisi yang sama. Dalam keadaan itu, angka posisi saja tidak cukup untuk mengetahui urutan tampilnya. Lihat [panduan Anki untuk mengubah posisi kartu (bahasa Inggris)](https://docs.ankiweb.net/manual/browsing#cards).

Anda bisa mengubah pengaturan pemilihan atau pengurutan tanpa menghapus riwayat belajar atau ulasan. Untuk menelusuri masalah ini, fokuskan pemeriksaan pada posisi kartu baru dan pengaturan urutan tampilan.

## Periksa dek yang Anda klik dan sisa jatah hari ini

Pada contoh awal, jika Anda langsung memilih `OrderLab::02 Second`, kandidatnya hanya D, E, dan F. Dengan batas dua kartu, pemilihan **Posisi menaik**, dan pengurutan **Sesuai urutan pemilihan**, perkiraan urutannya **D → E**. Jatah empat kartu di dek induk masih utuh, jadi kedua kartu itu tetap bisa muncul sekalipun batas dek di atasnya berlaku. Jika Anda memilih dek induk dengan pemilihan **Dek** dan batas **4 / 3 / 2**, urutannya menjadi **A → B → C → D**.

Untuk sesi yang dimulai dari `OrderLab`, Anki memakai pengaturan urutan tampilan `OrderLab`. Dek yang dipilih juga menetapkan batas total kartu, dengan tetap memperhitungkan batas subdek yang berlaku. Opsi **Terapkan batas mulai dari dek teratas (Limits start from top)** menentukan apakah batas dek di atasnya ikut berlaku saat Anda belajar langsung dari subdek. Manual Anki berbahasa Inggris menjelaskan [aturan subdek](https://docs.ankiweb.net/manual/deck-options#subdecks) dan [opsi untuk menerapkan batas dek di atasnya](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Periksa juga batas ulasan. Secara bawaan, batas ini ikut membatasi kartu baru. Opsi **Kartu baru mengabaikan batas ulasan (New cards ignore review limit)** mengubah perilaku tersebut. Opsi ini dan **Terapkan batas mulai dari dek teratas** berlaku untuk seluruh koleksi, seperti terlihat pada [kode antarmuka batas harian pada versi rilis](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Catat apakah kedua opsi itu aktif sebelum memperkirakan berapa banyak kartu baru yang masih bisa muncul hari ini.

Gunakan **Pratinjau (Preview)** di penjelajah kartu untuk melihat pertanyaan tanpa menjawabnya. Isi catatan singkat ini untuk sesi belajar biasa berikutnya.

| Yang perlu dicatat | Yang bisa Anda pastikan |
| --- | --- |
| Dek yang diklik untuk belajar, beserta preset dan pengaturan pemilihan serta pengurutannya | Urutan tampilan mana yang berlaku untuk sesi ini? |
| Kartu yang diperkirakan muncul dan posisi yang tersimpan | Apakah masalahnya ada pada pemilihan kartu atau urutan tampilnya? |
| Batas kartu baru dan ulasan, batas khusus untuk dek atau hari ini, serta kartu yang sudah dipelajari hari ini | Berapa jatah yang tersisa? |
| Batas dek di atasnya dan kedua opsi batas yang berlaku untuk seluruh koleksi | Batas tambahan mana yang berlaku? |
| Kartu yang disembunyikan sementara, ditangguhkan, berada di dek terfilter, atau merupakan kartu saudara | Kandidat mana yang mungkin tidak tersedia? |
| Urutan kemunculan pertama yang Anda amati, dicatat terpisah dari kemunculan ulang dalam tahap belajar | Apakah urutan kartu baru sesuai dengan perkiraan? |

Setelah Anda menjawab kartu baru, kartu yang masih dalam tahap belajar bisa muncul lagi di tengah sesi. **Urutan Kartu Baru dan Ulasan (New/Review Order)** menempatkan kartu baru sebelum, sesudah, atau di sela-sela kartu ulasan. Pemilihan dan pengurutan kartu baru tetap mengikuti pengaturannya masing-masing. [Kode penyusunan antrean pada versi rilis](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) menggabungkan kategori-kategori itu setelah kartu baru diurutkan.

Pemeriksaan selesai ketika kumpulan kartu yang terpilih dan urutan kemunculan pertamanya sesuai dengan perkiraan. Jika masih ada selisih, simpan catatan posisi, pengaturan, dek yang dipilih, versi Anki, urutan yang Anda amati, dan add-on yang relevan agar penyebabnya lebih mudah ditelusuri. Jika Anda ingin berlatih lagi untuk satu topik, ikuti [panduan latihan dengan dek terfilter (bahasa Inggris)](/blog/anki-filtered-decks-without-rescheduling/).
