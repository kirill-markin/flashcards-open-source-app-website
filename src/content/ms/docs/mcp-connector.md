---
title: Penyambung MCP
description: Gunakan Nibomo dengan Claude, Claude Code dan klien MCP yang lain.
---

## Sambung melalui direktori Claude

Buka [Nibomo dalam direktori Claude](https://claude.ai/directory/nibomo), sambungkannya, log masuk ke akaun Nibomo anda dan benarkan akses. Nibomo disenaraikan sebagai penyambung Komuniti (Community).

Untuk Claude Code, gunakan akaun langganan Claude yang sama dan semak `/mcp` selepas membuat sambungan. Log masuk menggunakan kunci API atau penyedia pihak ketiga tidak memuatkan penyambung claude.ai anda secara automatik.

Anda juga boleh mengkonfigurasi Claude Code secara terus. Jalankan perintah berikut, kemudian buka `/mcp` dalam Claude Code dan lengkapkan proses kebenaran dalam pelayar:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentasi MCP Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Gambaran keseluruhan

Nibomo menjalankan pelayan MCP (Model Context Protocol) jauh supaya klien MCP dan ejen AI boleh membaca kad yang perlu diulang kaji, membantu anda mengulang kaji satu soalan pada satu masa, serta membuat atau menyunting kad dan dek untuk anda.

Ejen boleh disambungkan dengan dua cara: melalui pelayan MCP ini, yang paling sesuai untuk klien MCP seperti Claude atau Cursor, atau melalui [URL penemuan API ejen](/docs/api/) untuk ejen CLI. Kedua-dua kaedah memberikan akses kepada data pengguna yang sama, mengikut kebenaran pengguna berkenaan. Halaman ini menerangkan pelayan MCP.

Sambung menggunakan URL berikut:

```text
https://mcp.nibomo.com/mcp
```

Pelayan menggunakan protokol pengangkutan Streamable HTTP. Pelayan menyediakan lapan alat untuk mencari ruang kerja, membaca dan menulis kad serta dek, melihat panduan rujukan, mengulang kaji dan menyemak penggunaan akaun.

## Cara menambah penyambung dalam klien anda

Kebanyakan klien membolehkan anda menambah pelayan MCP jauh sebagai penyambung tersuai:

1. Buka tetapan penyambung atau pelayan MCP dalam klien anda.
2. Tambah penyambung tersuai dan tampal URL pelayan `https://mcp.nibomo.com/mcp`.
3. Untuk klien interaktif, benarkan akses dalam pelayar apabila diminta. Pelayan menggunakan OAuth 2.1 dengan Pendaftaran Klien Dinamik (Dynamic Client Registration), jadi anda tidak perlu menampal rahsia klien atau mendaftarkan aplikasi terlebih dahulu.
4. Untuk penggunaan tanpa antara muka grafik atau melalui CLI, gunakan kunci API ejen anda dalam pengepala `Authorization: Bearer fca_…` sebagai ganti proses kebenaran melalui pelayar.

Selepas memberikan kebenaran, panggil `list_workspaces` sekali untuk memilih ruang kerja, kemudian gunakan `sql_query` untuk membaca dan `sql_execute` untuk menulis kad dan dek. Untuk mengulang kaji, panggil `next_review_card`, diikuti `reveal_answer` dan kemudian `submit_review`.

## Alat

Pelayan menyediakan lapan alat. Operasi baca dan tulis diasingkan supaya tiada satu alat pun yang menggabungkan operasi selamat dengan operasi yang boleh merosakkan data.

- `get_usage_limits` menyediakan akses baca sahaja kepada pelan akaun, had dan penggunaan AI pada bulan semasa. Alat ini tidak membaca atau mengubah kad.
- `sql_query` memberikan akses baca sahaja kepada kad dan dek anda (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` memberikan akses tulis kepada kad dan dek anda (`INSERT`, `UPDATE`, `DELETE`) dalam satu kelompok atomik.
- `list_workspaces` menyenaraikan ruang kerja yang boleh anda akses dalam mod baca sahaja. Setiap entri mengandungi `workspaceId`, nama, bilangan kad aktif, aktiviti terakhir dan statusnya sebagai ruang kerja lalai yang dipilih pada masa ini. Gunakan `workspaceId` daripada hasil ini sebagai argumen pilihan `workspaceId` bagi alat SQL dan alat ulang kaji.
- `get_guide` menyediakan panduan rujukan baca sahaja bagi satu topik: `sql_dialect`, `card_authoring`, `bulk_authoring` atau `review_flow`. Alat ini tidak membaca data ruang kerja.
- `next_review_card` beroperasi dalam mod baca sahaja. Alat ini mengembalikan bahagian hadapan kad seterusnya untuk diulang kaji mengikut turutan yang sama seperti dalam aplikasi. Argumen pilihan `tags` atau `deckId` mengecilkan senarai kad.
- `reveal_answer` beroperasi dalam mod baca sahaja. Alat ini mengembalikan bahagian belakang satu kad selepas pelajar cuba menjawab soalan pada bahagian hadapan.
- `submit_review` merekodkan satu penilaian `Again`, `Hard`, `Good` atau `Easy` dan mengemas kini jadual FSRS kad itu untuk ulang kaji seterusnya.

Antara muka SQL menggunakan dialek yang sengaja dihadkan kepada sebahagian daripada keupayaan PostgreSQL. Dokumentasi ini merangkumi dialek yang disokong sahaja. Pernyataan hanya boleh merujuk kepada sumber `workspace`, `cards`, `decks` dan `review_events`. Setiap pernyataan terhad kepada ruang kerja anda sendiri. Operasi baca dan tulis dihadkan kepada `100` baris bagi setiap pernyataan.

## Ulang kaji

Alat ulang kaji membolehkan ejen menyoal pelajar satu kad pada satu masa dan menyimpan setiap penilaian pada jadual FSRS kad:

1. `next_review_card` mengembalikan `cardId` dan `frontText`, atau `card: null` apabila tiada kad yang perlu diulang kaji.
2. Selepas pelajar menjawab, `reveal_answer` mengembalikan `backText` kad tersebut.
3. `submit_review` menerima `cardId`, UUID `reviewId` yang dijana oleh klien, `rating` dan zon waktu IANA pelajar dalam `reviewedTimeZone`. Pelayan merekodkan masa ulang kaji dan mengembalikan jadual baharu kad.

Jika anda tidak pasti sama ada penyerahan berjaya, cuba lagi dengan `reviewId` yang sama. Cara ini tidak akan merekodkan ulang kaji kali kedua. Penyerahan juga boleh mengembalikan respons berikut:

- `409 REVIEW_EVENT_CONFLICT`: ulang kaji telah direkodkan dan butiran ralat mengandungi jadual semasa kad.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` sudah merujuk kepada ulang kaji kad lain, jadi tiada data disimpan. Hantar semula dengan `reviewId` baharu.
- `409 REVIEW_STALE`: masa ulang kaji yang tersimpan untuk kad ini sama dengan atau lebih lewat daripada masa semasa pelayan. Ulang kaji kad lain.

Ulang kaji direkodkan hanya melalui `submit_review`. SQL tidak boleh menulis ke `review_events` atau mengubah keadaan penjadualan FSRS. Panggil `get_guide` dengan topik `review_flow` untuk peraturan lengkap ulang kaji dan penilaian.

## Peraturan kandungan kad

Setiap kad mengikut peraturan yang sama, dan alat bergantung pada peraturan ini:

- `front_text` hanya mengandungi soalan atau petunjuk ulang kaji. Jawapan tidak boleh dimasukkan di sini.
- `back_text` mengandungi jawapan dan boleh menyertakan contoh yang khusus.

Ejen yang menghasilkan kad melalui `sql_execute` mengikut peraturan ini supaya kad yang dibuat boleh terus diulang kaji dengan ulangan berjarak.

## Pengesahan

Kedua-dua kaedah memberikan akses kepada antara muka yang sama untuk data pengguna berkenaan.

### OAuth 2.1 (klien penyambung interaktif)

Pelayan melaksanakan aliran kod kebenaran dengan PKCE dan Pendaftaran Klien Dinamik. Tambah URL MCP sebagai penyambung tersuai dan benarkan akses dalam pelayar. Tiada rahsia klien yang perlu dikongsi terlebih dahulu. Penemuan mengikut piawaian:

- Metadata sumber terlindung:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata pelayan kebenaran:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Kunci API (tanpa antara muka grafik dan CLI)

Dapatkan kunci API ejen `fca_` yang sah untuk jangka masa panjang melalui proses log masuk menggunakan OTP melalui e-mel seperti yang diterangkan dalam [rujukan API](/docs/api/), kemudian hantarkannya sebagai token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Antara muka ejen REST menerima kunci yang sama. Kunci ini boleh digunakan tanpa pelayar atau proses OAuth.

Data respons penemuan di `https://api.nibomo.com/v1/` ialah huraian rasmi yang boleh dibaca mesin bagi kedua-dua kaedah. Data yang sama juga tersedia di `/v1/agent`.

## Keselamatan dan skop

Anda boleh membenarkan penggunaan alat SQL dengan selamat kerana penghurai mengehadkan capaian pangkalan data kepada dialek yang ditetapkan:

- **Senarai pernyataan yang dibenarkan**: `sql_query` hanya menerima `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` dan `SELECT`. `sql_execute` hanya menerima `INSERT`, `UPDATE` dan `DELETE`. Penghurai menolak semua pernyataan lain.
- **Sumber terhad**: pernyataan hanya boleh mengakses `workspace`, `cards`, `decks` dan `review_events`.
- **Skop bagi setiap ruang kerja**: setiap pernyataan SQL dan ulang kaji terhad kepada satu ruang kerja yang boleh anda akses, sama ada melalui `workspaceId` yang anda berikan atau ruang kerja lalai yang anda pilih. Capaian merentas penyewa tidak dibenarkan.
- **Argumen yang ketat**: setiap alat menolak argumen yang tidak dikenali. Jika `workspaceId` tersalah eja, operasi gagal dan tidak dijalankan pada ruang kerja lalai anda.
- **Had**: sehingga `100` baris bagi setiap pernyataan, sehingga `50` pernyataan bagi setiap kelompok dan kira-kira `12k` token bagi hasil. Semua perubahan dalam satu kelompok dilaksanakan sebagai satu operasi atomik.
- **Pengasingan operasi baca dan tulis**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` dan `reveal_answer` ialah alat baca sahaja (`readOnlyHint`). Alat ini tidak pernah membaiki data, mengira semula jadual atau mengubah keadaan kad. Hanya `sql_execute` dan `submit_review` boleh menulis data (`destructiveHint`). `sql_execute` menulis kad dan dek. `submit_review` merekodkan ulang kaji dan mengemas kini jadual kad untuk ulang kaji seterusnya.

Aplikasi, bahagian belakang dan infrastruktur semuanya sumber terbuka dan boleh [dihoskan sendiri](/docs/self-hosting/), jadi anda boleh menggunakan penyambung yang sama dengan pemasangan anda sendiri.
