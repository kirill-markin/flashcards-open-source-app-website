---
title: Panduan Self-Hosting
description: Jalankan Nibomo secara lokal dengan PostgreSQL, autentikasi, backend, web, dan admin, atau deploy stack produksi AWS CDK yang terdokumentasi.
---

Nibomo mendukung dua jalur yang berbeda: lingkungan pengembangan lokal dan deployment produksi di AWS. Docker Compose menjalankan PostgreSQL dan migrasi untuk pengembangan lokal; Docker Compose bukan metode deployment produksi.

## Persyaratan pengembangan lokal

- Git
- Bash
- GNU Make
- Docker dengan Docker Compose
- Node.js 24
- npm

Berkas Docker Compose yang disediakan saat ini menjalankan PostgreSQL 18.4. Anda tidak perlu memasang PostgreSQL lokal secara terpisah.

## Mulai cepat secara lokal

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

`make db-up` menjalankan PostgreSQL dan mengeksekusi `scripts/deploy/migrate.sh` melalui kontainer migrasi. Dengan kata sandi default yang disalin dari `.env.example`, migrasi menyiapkan koneksi runtime lokal berikut:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Jika Anda mengubah `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD`, atau `REPORTING_DB_PASSWORD` di `.env`, gunakan kata sandi yang sudah diubah itu juga di URL koneksi yang bersesuaian.

### Mulai cepat khusus lokal

Target Make backend tidak memuat `.env` di root. Berikan pengaturan lokal yang dibutuhkannya secara eksplisit:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Jalankan klien di terminal terpisah:

```bash
make web-dev
make admin-dev
```

Jalur ini sengaja tidak menjalankan `make auth-dev`. `AUTH_MODE=none` adalah mode khusus localhost yang secara eksplisit tidak aman; jangan pernah memakainya di lingkungan yang sudah di-deploy.
Jalur ini mencakup pengembangan backend inti, discovery Agent API publik, web, dan admin, tetapi Chat V2 tidak tersedia di jalur ini.

### Alur Cognito lokal lengkap

Target auth memuat `.env` di root, sedangkan target backend tidak. Pertama, ganti `DATABASE_URL` lama di `.env` hasil salinan dengan URL peran auth dan tambahkan nilai Cognito Anda yang sebenarnya:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Jalankan auth:

```bash
make auth-dev
```

Di terminal backend, muat `.env` secara eksplisit, lalu timpa URL database auth-nya dengan URL peran backend untuk proses tersebut:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Jalankan `make web-dev` dan `make admin-dev` di terminal masing-masing. Kedua target memuat `.env` di root.

Layanan memakai alamat lokal berikut:

| Layanan | Alamat |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, jika dikonfigurasi | `http://localhost:8081` |
| API backend | `http://localhost:8080/v1` |
| Aplikasi web | `http://localhost:3000` |
| Aplikasi admin | `http://localhost:3001` |

Hentikan PostgreSQL dan kontainer migrasi dengan:

```bash
make db-down
```

## Konfigurasi lokal

Mulailah dari `.env.example`; berkas ini mendokumentasikan variabel yang tersedia dan nilai mana yang khusus lokal. Ganti `DATABASE_URL` lama di dalamnya sebelum menjalankan auth, seperti ditunjukkan di atas.

Pengaturan lokal utama adalah:

- `MIGRATION_DATABASE_URL` untuk migrasi skema di dalam Docker
- `DATABASE_URL` yang diatur ke peran `auth_app` di `.env` root untuk `make auth-dev`
- `DATABASE_URL` yang diberikan sebagai peran `backend_app` untuk `make backend-dev`
- `AUTH_MODE` dan `ALLOW_INSECURE_LOCAL_AUTH` untuk autentikasi backend
- `BACKEND_ALLOWED_ORIGINS` untuk origin web dan admin lokal
- `ALLOWED_REDIRECT_URIS` dan `COOKIE_DOMAIN` untuk autentikasi peramban
- nilai Cognito dan enkripsi sesi saat menguji OTP sungguhan

Agent API adalah bagian dari backend. Dokumen discovery lokal publiknya tersedia di `http://localhost:8080/v1/agent` setelah backend berjalan. Operasi Agent yang dilindungi memerlukan autentikasi `ApiKey` dan tidak tersedia di jalur `AUTH_MODE=none`.

### Cakupan AI per jalur

Perintah lokal di atas tidak menjalankan worker obrolan asinkron. Jalur cepat juga memakai `AUTH_MODE=none`, yang ditolak oleh Chat V2; menambahkan kunci OpenAI atau kuota tamu tidak membuat jalur itu mendukung AI. Alur Cognito lokal lengkap menyediakan transport autentikasi yang didukung, tetapi tetap tidak menjalankan worker.

Deployment AWS CDK membuat Lambda worker dan mengonfigurasi backend untuk memanggilnya. Kredensial penyedia seperti `OPENAI_API_KEY` mengaktifkan panggilan model untuk permintaan terautentikasi yang didukung. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` secara terpisah mengaktifkan dan membatasi AI untuk tamu; variabel ini tidak mengatur AI untuk pengguna yang sudah masuk atau yang diautentikasi dengan bearer. Pengaturan Langfuse adalah konfigurasi tracing opsional.

## Klien native

Repositori yang sama berisi klien iOS dan Android, tetapi perintah web/server lokal tidak membangun atau mendistribusikannya.

Proyek iOS membaca host API dan auth lokal dari:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Buat berkas itu dari contoh bila diperlukan:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Lihat [README iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) dan [README Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) di repositori untuk alur build dan pengujian masing-masing yang terpisah.

## Produksi memakai AWS CDK

Deployment produksi yang didukung adalah stack AWS CDK yang disertakan. Stack ini berbasis AWS, bukan netral vendor, dan mencakup:

- VPC dan subnet privat
- PostgreSQL 18 di Amazon RDS
- OTP email tanpa kata sandi dari Amazon Cognito
- API Gateway dan Lambda untuk layanan backend, auth, dan MCP
- Lambda worker obrolan asinkron dan Lambda pengirim email kustom Cognito
- S3 dan CloudFront untuk aplikasi web dan admin
- Secrets Manager untuk kredensial database, sesi, email, pemantauan, dan AI opsional
- alarm CloudWatch, notifikasi SNS, dan rencana backup RDS
- peran deployment OIDC GitHub Actions
- skrip penyiapan Cloudflare untuk domain publik

Deployment ini mengekspos `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>`, dan `mcp.<domain>`. Deployment ini juga dapat membuat pengalihan apex jika domain root tidak dipakai untuk hal lain.

Jalankan helper produksi dari mesin operator dengan:

- Node.js 24 dan npm
- Bash dan GNU Make
- Docker yang sedang berjalan
- AWS CLI yang sudah diautentikasi ke akun deployment
- GitHub CLI yang sudah diautentikasi ke repositori target
- `curl`, `jq`, dan Python 3

Sebelum melakukan deployment, konfigurasikan nilai operator di `.env` root. Nilai yang wajib diisi mencakup region AWS, domain, email peringatan, repositori GitHub, kredensial Cloudflare, kredensial Resend, dan konfigurasi Sentry backend. Kredensial OpenAI dan Langfuse bersifat opsional.

Perintah deployment pertama yang disarankan dari root repositori adalah:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Saat memulai dari checkout yang bersih, auth saat ini perlu dipasang secara eksplisit karena helper deployment membundel paket tersebut tetapi tidak memasangnya. Helper ini membuat atau mengubah sumber daya AWS, Cloudflare, dan GitHub yang nyata. Tinjau dokumentasi deployment di repositori dan biaya cloud sebelum menjalankannya. Helper ini melakukan bootstrap CDK, men-deploy infrastruktur, menjalankan migrasi, mengunggah aset web dan admin, mengonfigurasi record DNS publik `app`, `admin`, `api`, `auth`, dan `mcp` kecuali dilewati, serta mengisi konfigurasi GitHub Actions yang belum ada.

Setelah deployment:

1. Konfirmasi langganan SNS yang dikirim ke kotak masuk `ALERT_EMAIL`.
2. Konfigurasikan dan verifikasi record DNS domain pengirim Resend yang terpisah:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` secara default menjalankan `scripts/cloudflare/setup-dns.sh` untuk domain aplikasi publik. Skrip ini tidak menjalankan `setup-resend-domain.sh`; skrip yang disebut terakhir membuat record pengirim email untuk `mail.<domain>` dan memverifikasi domain tersebut dengan Resend. Jika Anda melakukan deployment dengan `--skip-dns`, konfigurasikan record publik secara terpisah seperti yang didokumentasikan dalam panduan AWS CDK.

## Portabilitas data

Impor dan ekspor paket ruang kerja hanya memindahkan kartu, tag-nya, dan media terkait. Fitur ini tidak memindahkan riwayat tinjauan, status penjadwal FSRS, pengaturan ruang kerja, struktur dek lengkap, atau data akun.

Perlakukan paket sebagai pemindahan konten, bukan sebagai migrasi lengkap dari terkelola ke self-hosted atau sebagai backup pemulihan bencana. Operator bertanggung jawab mencadangkan dan memulihkan database PostgreSQL yang di-deploy beserta penyimpanan media.

## Tanggung jawab operator

Self-hosting berarti Anda menyediakan dan memelihara:

- infrastruktur AWS dan biayanya
- DNS Cloudflare dan konfigurasi domain
- kredensial pengiriman email Resend dan record domain
- konfigurasi pemantauan Sentry yang wajib
- kredensial penyedia AI dan Langfuse yang opsional
- secret, upgrade, migrasi, peringatan, backup, dan pengujian pemulihan
- build dan distribusi aplikasi seluler native jika Anda menginginkan rilis iOS atau Android sendiri

Stack ini menyertakan otomatisasi untuk banyak sistem tersebut, tetapi tetap membutuhkan operator. Docker Compose tidak menggantikan arsitektur produksi ini.

## Dokumentasi deployment di repositori

- [README repositori](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Panduan deployment backend dan web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Panduan deployment AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infrastruktur AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
