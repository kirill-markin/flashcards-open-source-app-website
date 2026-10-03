---
title: Referensi API
description: API agen eksternal untuk discovery, bootstrap OTP, penyiapan ruang kerja, serta antarmuka SQL baca dan tulis yang dipublikasikan.
---

## Ikhtisar

Halaman ini mendokumentasikan kontrak agen AI eksternal Nibomo yang berlaku saat ini.

Jika klien Anda mendukung MCP, [konektor MCP](/docs/mcp-connector/) adalah
cara paling sederhana untuk terhubung, dan konektor itu membungkus akses data yang sama. Halaman ini mendokumentasikan
kontrak HTTP untuk discovery, SQL, panduan, dan tinjauan yang dipakai agen CLI.

Mulailah dari titik masuk discovery yang kanonis:

```text
GET https://api.nibomo.com/v1/
```

Payload discovery yang sama juga tersedia di `GET /v1/agent`, tetapi `/v1/` adalah titik masuk publik utama.

Respons discovery memberi tahu agen cara:

- memulai login OTP lewat email
- menukar OTP dengan kunci API berumur panjang
- memuat konteks akun
- membuat atau memilih ruang kerja
- melanjutkan melalui antarmuka SQL yang dipublikasikan
- mengambil panduan referensi dan meninjau kartu satu per satu

## Discovery Runtime dan Kode Sumber

OpenAPI tidak tersedia. Empat URL spesifikasi lama di bawah ini sekarang mengembalikan pemberitahuan discovery JSON yang sama dengan `"openapiAvailable": false`, bukan skema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Gunakan `GET https://api.nibomo.com/v1/` untuk discovery runtime saat ini. Ikuti `docs.discoveryUrl` yang dikembalikan untuk rute runtime dan `docs.source.agentRoutesUrl` untuk detail implementasi.

## Bootstrap Autentikasi

Bootstrap OTP berjalan di layanan autentikasi:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Alurnya:

1. Panggil `GET /v1/`.
2. Kirim email pengguna ke `send-code`.
3. Baca `otpSessionToken` dari respons.
4. Minta pengguna memberikan kode 8 digit terbaru dari email.
5. Panggil `verify-code` dengan `code`, `otpSessionToken`, dan `label`.
6. Simpan kunci API yang dikembalikan di luar memori obrolan.

Variabel lingkungan yang disarankan:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Permintaan yang diautentikasi memakai:

```text
Authorization: ApiKey <key>
```

Contoh urutan bootstrap:

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Antarmuka Agen Setelah Login

Setelah verifikasi, antarmuka agen yang tersedia saat ini:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (hanya baca)
- `POST /v1/agent/sql/execute` (tulis)
- `GET /v1/agent/guide/{topic}` (hanya baca)
- `POST /v1/agent/reviews/next` (hanya baca)
- `POST /v1/agent/reviews/reveal` (hanya baca)
- `POST /v1/agent/reviews/submit` (tulis)

Bootstrap biasanya berjalan seperti ini:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Jika perlu, `POST /v1/agent/workspaces` dengan `{"name":"Personal"}`
4. Jika perlu, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Gunakan `POST /v1/agent/sql/query` untuk membaca dan `POST /v1/agent/sql/execute` untuk menulis

Pemilihan ruang kerja bersifat eksplisit untuk setiap koneksi kunci API. Agen sebaiknya mengikuti teks `instructions` yang dikembalikan dan `docs.discoveryUrl` untuk rute runtime, serta `docs.source.agentRoutesUrl` untuk detail implementasi, alih-alih menebak langkah berikutnya.

Rute SQL dan tinjauan juga menerima `workspaceId` opsional di body JSON. Parameter ini menargetkan ruang kerja tersebut untuk satu panggilan tanpa mengubah pilihan; jangan sertakan parameter ini untuk memakai ruang kerja yang dipilih. Jika tidak ada pilihan maupun `workspaceId`, rute tersebut merespons dengan `409 WORKSPACE_SELECTION_REQUIRED`.

## Antarmuka SQL

`POST /v1/agent/sql/query` adalah antarmuka yang sepenuhnya hanya baca (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), dan `POST /v1/agent/sql/execute` adalah antarmuka tulis (`INSERT`, `UPDATE`, `DELETE`); satu panggilan harus berisi baca saja atau tulis saja.

Antarmuka ini sengaja dibatasi dan bukan PostgreSQL lengkap. Dokumentasi ini hanya mencakup
dialek yang didukung, bukan referensi kompatibilitas PostgreSQL.

Tidak ada jalur baca yang memperbaiki data, menghitung ulang penjadwalan, atau mengubah status kartu. Gunakan
`POST /v1/agent/sql/execute` untuk setiap penulisan kartu dan dek. SQL tidak dapat menulis
`review_events` atau status penjadwalan FSRS; catat tinjauan melalui
`POST /v1/agent/reviews/submit`.

Kelompok pernyataan saat ini:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Sumber daya logis yang dipublikasikan saat ini mencakup:

- `workspace`
- `cards`
- `decks`
- `review_events`

Catatan:

- `LIMIT` secara default bernilai `100` dan dibatasi maksimal `100`
- gunakan `ORDER BY` jika Anda membutuhkan paginasi yang stabil
- gunakan `SHOW TABLES` atau `DESCRIBE cards` untuk menemukan skema
- setiap panggilan SQL dibatasi pada satu ruang kerja: `workspaceId` di body, atau ruang kerja yang dipilih

Contoh permintaan:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Contoh kueri kartu:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Contoh mutasi:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Server MCP jarak jauh juga tersedia di `https://mcp.nibomo.com/mcp` dengan OAuth 2.1 (Dynamic Client Registration + PKCE). Server ini menyediakan pemisahan SQL yang sama dalam bentuk `sql_query` (sepenuhnya hanya baca) dan `sql_execute` (tulis), ditambah `list_workspaces`, `get_guide`, serta alat tinjauan `next_review_card`, `reveal_answer`, dan `submit_review`; lihat [konektor MCP](/docs/mcp-connector/).

### Keamanan dan Cakupan

Antarmuka SQL ini berupa dialek tertutup yang aturannya ditegakkan oleh parser, bukan PostgreSQL mentah. Batas pengamannya:

- **Daftar izin pernyataan yang tertutup**: hanya `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, dan `SELECT` untuk membaca, serta `INSERT`, `UPDATE`, dan `DELETE` untuk menulis. Pernyataan lain ditolak saat parsing.
- **Sumber daya terbatas**: pernyataan hanya dapat menyentuh sumber daya `workspace`, `cards`, `decks`, dan `review_events`.
- **Cakupan per ruang kerja**: setiap pernyataan dibatasi pada satu ruang kerja yang dapat Anda akses, yaitu `workspaceId` di body permintaan atau ruang kerja yang Anda pilih, tanpa akses lintas tenant.
- **Body permintaan yang ketat**: rute SQL dan tinjauan menolak field body yang tidak dikenal, sehingga `workspaceId` yang salah eja akan gagal alih-alih berjalan pada ruang kerja yang dipilih.
- **Batas**: hingga `100` baris per pernyataan, hingga `50` pernyataan per batch, dan batas hasil sekitar `12k` token. Batch mutasi diterapkan secara atomik.
- **Pemisahan baca/tulis**: `sql_query` dan `list_workspaces` sepenuhnya hanya baca (`readOnlyHint`) dan tidak pernah memperbaiki data, menghitung ulang penjadwalan, atau mengubah status kartu. `sql_execute` adalah satu-satunya alat tulis SQL dan memang melakukan penulisan (`destructiveHint`); satu panggilan harus berisi baca saja atau tulis saja. SQL tidak dapat menulis `review_events` atau status penjadwalan FSRS; hanya `POST /v1/agent/reviews/submit` (MCP `submit_review`) yang mencatat tinjauan.

## Panduan

`GET /v1/agent/guide/{topic}` mengembalikan satu panduan referensi di `data.guide`, isi yang sama dengan yang disajikan alat MCP `get_guide`. Topiknya:

- `sql_dialect`: tata bahasa SQL lengkap, batas, dan contoh
- `card_authoring`: kontrak kartu, tag, pemeriksaan duplikat, dan pemformatan
- `bulk_authoring`: memecah dan memverifikasi pekerjaan penulisan besar
- `review_flow`: siklus tinjauan dan penilaian

Topik yang tidak dikenal menghasilkan respons `400` beserta daftar topik yang didukung. Ambil panduan yang sesuai sebelum menyusun kartu, menulis dalam jumlah besar, atau menjalankan tinjauan, dan baca ulang `sql_dialect` setelah sebuah pernyataan ditolak.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Tinjauan

Rute tinjauan memungkinkan agen menguji pelajar kartu demi kartu dan menyimpan setiap penilaian ke jadwal FSRS kartu tersebut. Rute ini menerima argumen JSON yang sama dengan alat tinjauan MCP:

- `POST /v1/agent/reviews/next` mengembalikan `card` dengan `cardId` dan `frontText`, atau `card: null` jika tidak ada yang jatuh tempo. `tags` opsional (cocok dengan salah satunya) atau `deckId` mempersempit antrean, tidak boleh keduanya; permintaan tanpa body tetap valid.
- `POST /v1/agent/reviews/reveal` memerlukan `cardId` dan mengembalikan `backText` kartu tersebut.
- `POST /v1/agent/reviews/submit` memerlukan `cardId`, UUID `reviewId` yang dibuat klien, `rating` berupa `Again`, `Hard`, `Good`, atau `Easy`, dan `reviewedTimeZone` IANA milik pelajar. Server memberi stempel waktu tinjauan dan mengembalikan jadwal baru kartu, termasuk `dueAt`, `state`, `reps`, dan `lapses`.

Ketiga rute menerima `workspaceId` opsional. Simpan `reviewId` sebelum mengirim, dan ulangi pengiriman yang hasilnya tidak pasti dengan permintaan yang identik; tindakan itu tidak pernah mencatat tinjauan kedua. Rute tinjauan juga dapat merespons dengan:

- `409 REVIEW_EVENT_CONFLICT`: tinjauan sudah tercatat, dan `error.details.reviewSchedule` memuat jadwal kartu saat ini.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` sudah mengidentifikasi tinjauan untuk kartu lain, sehingga tidak ada yang disimpan; kirim ulang dengan `reviewId` baru.
- `409 REVIEW_STALE`: waktu tinjauan yang tersimpan pada kartu sama dengan atau setelah waktu server saat ini; tinjau kartu lain.
- `400 REVIEW_INPUT_INVALID`: ada argumen yang hilang, tidak valid, atau tidak didukung, termasuk `tags` yang digabung dengan `deckId` atau tag yang tidak dipakai ruang kerja.

Contoh pengiriman:

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## API untuk Manusia dan Sinkronisasi

Nibomo juga menyertakan API terpisah untuk klien manusia dan sinkronisasi offline-first, tetapi API tersebut bukan kontrak utama untuk agen eksternal:

- alur peramban memakai cookie dengan domain bersama plus perlindungan CSRF
- klien offline-first memakai rute sinkronisasi yang sudah diimplementasikan di `/v1/workspaces/{workspaceId}/sync/push` dan `/v1/workspaces/{workspaceId}/sync/pull`
- rute sinkronisasi terpisah dari antarmuka agen eksternal
