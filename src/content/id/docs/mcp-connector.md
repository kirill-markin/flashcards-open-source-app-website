---
title: Konektor MCP
description: "Hubungkan Nibomo melalui direktori Claude atau konfigurasikan server MCP jarak jauhnya di Claude Code dan klien lain, dengan OAuth dan delapan alat untuk kartu dan tinjauan."
---

## Hubungkan melalui direktori Claude

Buka [Nibomo di direktori Claude](https://claude.ai/directory/nibomo), hubungkan, masuk ke akun Nibomo Anda, lalu otorisasi akses. Nibomo terdaftar sebagai konektor Community.

Untuk Claude Code, gunakan akun langganan Claude yang sama dan periksa `/mcp` setelah terhubung. Login dengan kunci API atau penyedia pihak ketiga tidak otomatis memuat konektor claude.ai Anda.

Anda juga dapat mengonfigurasi Claude Code secara langsung. Jalankan perintah di bawah ini, lalu buka `/mcp` di Claude Code dan selesaikan otorisasi di peramban:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentasi MCP Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Ikhtisar

Nibomo menjalankan server MCP (Model Context Protocol) jarak jauh agar klien MCP dan
agen AI dapat membaca kartu Anda yang jatuh tempo, meninjaunya bersama Anda pertanyaan demi pertanyaan,
serta membuat atau mengedit kartu dan dek untuk Anda.

Agen dapat terhubung dengan dua cara: melalui server MCP ini (paling cocok untuk klien MCP seperti
Claude atau Cursor), atau melalui [URL discovery Agents API](/docs/api/) untuk agen
CLI. Keduanya mengakses data per pengguna yang sama; halaman ini membahas server MCP.

Hubungkan ke:

```text
https://mcp.nibomo.com/mcp
```

Transport-nya adalah Streamable HTTP. Server ini menyediakan delapan alat untuk menemukan ruang kerja, membaca dan menulis kartu serta dek, panduan referensi, tinjauan, dan penggunaan akun.

## Cara Menambahkannya di Klien Anda

Sebagian besar klien menambahkan server MCP jarak jauh sebagai konektor kustom:

1. Buka pengaturan konektor atau server MCP di klien Anda.
2. Tambahkan konektor kustom dan tempelkan URL server `https://mcp.nibomo.com/mcp`.
3. Untuk klien interaktif, lakukan otorisasi di peramban saat diminta. Server ini
   memakai OAuth 2.1 dengan Dynamic Client Registration, jadi tidak ada client secret
   yang perlu ditempel dan tidak ada aplikasi yang perlu didaftarkan terlebih dahulu.
4. Untuk penggunaan headless atau CLI, atur header `Authorization: Bearer fca_…` dengan
   kunci API agen Anda, alih-alih memakai alur peramban.

Setelah otorisasi, panggil `list_workspaces` sekali untuk memilih ruang kerja, lalu gunakan
`sql_query` untuk membaca dan `sql_execute` untuk menulis kartu dan dek. Untuk meninjau, panggil
`next_review_card`, lalu `reveal_answer`, lalu `submit_review`.

## Alat

Server ini menyediakan delapan alat. Baca dan tulis sengaja dipisahkan agar satu
alat tidak pernah mencampur operasi yang aman dan yang destruktif.

- `get_usage_limits` — paket akun, batas, dan penggunaan AI bulanan saat ini, sepenuhnya hanya baca; alat ini tidak membaca atau mengubah kartu.
- `sql_query` — akses yang sepenuhnya hanya baca ke kartu dan dek Anda (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — akses tulis ke kartu dan dek Anda (`INSERT`, `UPDATE`,
  `DELETE`) sebagai batch atomik.
- `list_workspaces` — daftar ruang kerja yang dapat Anda akses, sepenuhnya hanya baca,
  masing-masing dengan
  `workspaceId`, nama, jumlah kartu aktif, aktivitas terakhir, dan apakah ruang kerja itu
  default yang sedang Anda pilih. Gunakan `workspaceId` yang dikembalikan untuk argumen
  opsional `workspaceId` pada alat SQL dan tinjauan.
- `get_guide` — panduan referensi untuk satu topik, sepenuhnya hanya baca: `sql_dialect`,
  `card_authoring`, `bulk_authoring`, atau `review_flow`. Alat ini tidak membaca data ruang kerja.
- `next_review_card` — sepenuhnya hanya baca: mengembalikan kartu berikutnya untuk ditinjau, hanya
  sisi depannya, dengan urutan antrean yang sama seperti di aplikasi. `tags` atau `deckId` opsional mempersempit
  antrean.
- `reveal_answer` — sepenuhnya hanya baca: mengembalikan sisi belakang satu kartu setelah
  pelajar mencoba menjawab sisi depannya.
- `submit_review` — mencatat satu penilaian `Again`, `Hard`, `Good`, atau `Easy` dan
  memajukan jadwal FSRS kartu tersebut.

Antarmuka SQL ini adalah dialek yang sengaja dibatasi dan bukan PostgreSQL lengkap.
Dokumentasi ini hanya mencakup dialek yang didukung, bukan referensi kompatibilitas
PostgreSQL. Pernyataan hanya dapat mengakses sumber daya `workspace`, `cards`, `decks`, dan
`review_events`, setiap pernyataan dibatasi pada ruang kerja Anda sendiri, dan
baca maupun tulis dibatasi hingga `100` baris per pernyataan.

## Tinjauan

Alat tinjauan memungkinkan agen menguji pelajar kartu demi kartu dan menyimpan setiap
penilaian ke jadwal FSRS kartu tersebut:

1. `next_review_card` mengembalikan `cardId` dan `frontText`, atau `card: null` jika
   tidak ada yang jatuh tempo.
2. Setelah pelajar menjawab, `reveal_answer` mengembalikan `backText` kartu tersebut.
3. `submit_review` menerima `cardId`, UUID `reviewId` yang dibuat klien,
   `rating`, dan `reviewedTimeZone` IANA milik pelajar. Server memberi stempel
   waktu tinjauan dan mengembalikan jadwal baru kartu.

Ulangi pengiriman yang hasilnya tidak pasti dengan `reviewId` yang sama; tindakan itu tidak pernah mencatat tinjauan
kedua. Pengiriman juga dapat menerima respons berikut:

- `409 REVIEW_EVENT_CONFLICT` — tinjauan sudah tercatat, dan detail error
  memuat jadwal kartu saat ini.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` sudah mengidentifikasi tinjauan untuk
  kartu lain, sehingga tidak ada yang disimpan; kirim ulang dengan `reviewId` baru.
- `409 REVIEW_STALE` — waktu tinjauan yang tersimpan pada kartu sama dengan atau setelah waktu
  server saat ini; tinjau kartu lain.

Tinjauan hanya dicatat melalui `submit_review`: SQL tidak dapat menulis
`review_events` atau status penjadwalan FSRS. Panggil `get_guide` dengan topik
`review_flow` untuk aturan tinjauan dan penilaian selengkapnya.

## Kontrak Kartu

Setiap kartu mengikuti satu kontrak, dan alat-alat ini bergantung padanya:

- `front_text` hanya berisi pertanyaan atau pemicu tinjauan dan tidak pernah memuat jawabannya.
- `back_text` berisi jawabannya, opsional dengan contoh konkret.

Agen yang membuat kartu melalui `sql_execute` mengikuti kontrak ini, sehingga
kartu yang mereka buat langsung dapat ditinjau dengan pengulangan berjarak.

## Autentikasi

Dua jalur otorisasi mengakses data per pengguna yang sama.

### OAuth 2.1 (klien konektor interaktif)

Server ini mengimplementasikan alur authorization code dengan PKCE dan Dynamic Client
Registration. Tambahkan URL MCP sebagai konektor kustom dan lakukan otorisasi di peramban;
tidak ada client secret yang dibagikan sebelumnya. Discovery-nya standar:

- Metadata protected resource:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata authorization server:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Kunci API (headless dan CLI)

Dapatkan kunci API agen `fca_` berumur panjang melalui alur login OTP email
yang didokumentasikan dalam [referensi API](/docs/api/), lalu kirimkan sebagai token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Ini adalah kunci yang sama dengan yang diterima antarmuka agen REST, dan kunci ini tidak memerlukan peramban maupun
proses bolak-balik OAuth.

Deskripsi kanonis yang dapat dibaca mesin untuk kedua jalur adalah payload discovery
di `https://api.nibomo.com/v1/` (dicerminkan di `/v1/agent`).

## Keamanan dan Cakupan

Alat SQL aman untuk disetujui karena antarmukanya berupa dialek tertutup
yang aturannya ditegakkan oleh parser, bukan akses bebas ke database:

- **Daftar izin pernyataan yang tertutup**: `sql_query` hanya menerima `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, dan `SELECT`; `sql_execute` hanya menerima `INSERT`,
  `UPDATE`, dan `DELETE`. Pernyataan lain ditolak saat parsing.
- **Sumber daya terbatas**: pernyataan hanya dapat menyentuh `workspace`, `cards`, `decks`,
  dan `review_events`.
- **Cakupan per ruang kerja**: setiap pernyataan SQL dan tinjauan dibatasi pada satu
  ruang kerja yang dapat Anda akses, yaitu `workspaceId` yang Anda berikan atau default
  yang Anda pilih, tanpa akses lintas tenant.
- **Argumen yang ketat**: setiap alat menolak argumen yang tidak dikenal, sehingga
  `workspaceId` yang salah eja akan gagal alih-alih berjalan pada ruang kerja default Anda.
- **Batas**: hingga `100` baris per pernyataan, hingga `50` pernyataan per batch, dan
  batas hasil sekitar `12k` token. Batch mutasi diterapkan secara atomik.
- **Pemisahan baca/tulis**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card`, dan `reveal_answer` sepenuhnya hanya baca (`readOnlyHint`)
  dan tidak pernah memperbaiki data, menghitung ulang penjadwalan, atau mengubah status kartu.
  `sql_execute` dan `submit_review` adalah satu-satunya alat tulis (`destructiveHint`):
  `sql_execute` menulis kartu dan dek, dan `submit_review` mencatat tinjauan serta
  memajukan jadwal kartunya.

Seluruh stack — aplikasi, backend, dan infrastruktur — bersifat open source dan dapat
[di-hosting sendiri](/docs/self-hosting/), sehingga Anda dapat menjalankan konektor yang sama di
deployment Anda sendiri.
