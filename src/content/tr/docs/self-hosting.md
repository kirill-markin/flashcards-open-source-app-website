---
title: Kendi Sunucunuzda Barındırma Rehberi
description: Nibomo'yu PostgreSQL, kimlik doğrulama, backend, web ve yönetim paneliyle yerel olarak çalıştırın ya da belgelenmiş AWS CDK üretim yığınını dağıtın.
---

Nibomo birbirinden ayrı iki yolu destekler: yerel bir geliştirme ortamı ve AWS üzerinde üretim dağıtımı. Docker Compose, yerel geliştirme için PostgreSQL'i ve geçişleri çalıştırır; üretim dağıtım yöntemi değildir.

## Yerel geliştirme gereksinimleri

- Git
- Bash
- GNU Make
- Docker ve Docker Compose
- Node.js 24
- npm

Sağlanan Docker Compose dosyası şu anda PostgreSQL 18.4 çalıştırır. Ayrı bir yerel PostgreSQL kurulumuna ihtiyacınız yoktur.

## Yerel hızlı başlangıç

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

`make db-up`, PostgreSQL'i başlatır ve geçiş konteyneri üzerinden `scripts/deploy/migrate.sh` betiğini çalıştırır. `.env.example` dosyasından kopyalanan varsayılan parolalarla geçiş, şu yerel çalışma zamanı bağlantılarını hazırlar:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- raporlama: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

`.env` içinde `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` veya `REPORTING_DB_PASSWORD` değerini değiştirirseniz, değiştirdiğiniz parolayı ilgili bağlantı URL'sinde de kullanın.

### Yalnızca yerel hızlı başlatma

Backend Make hedefi kök dizindeki `.env` dosyasını yüklemez. Hedefin gerektirdiği yerel ayarları açıkça iletin:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

İstemcileri ayrı terminallerde çalıştırın:

```bash
make web-dev
make admin-dev
```

Bu yolda `make auth-dev` bilerek başlatılmaz. `AUTH_MODE=none` açıkça güvensiz, yalnızca localhost'ta kullanılan bir moddur; dağıtılmış bir ortamda asla kullanmayın.
Bu yol temel backend, herkese açık Agent API keşfi, web ve yönetim paneli geliştirmesini kapsar, ancak Chat V2'yi kullanılabilir hâle getirmez.

### Tam yerel Cognito akışı

Auth hedefi kök dizindeki `.env` dosyasını yükler, backend hedefi ise yüklemez. Önce kopyalanan `.env` içindeki eski `DATABASE_URL` değerini auth rolünün URL'siyle değiştirin ve gerçek Cognito değerlerinizi ekleyin:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Auth hizmetini başlatın:

```bash
make auth-dev
```

Backend terminalinde `.env` dosyasını açıkça yükleyin, ardından o süreç için içindeki auth veritabanı URL'sini backend rolünün URL'siyle geçersiz kılın:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

`make web-dev` ve `make admin-dev` komutlarını kendi terminallerinde çalıştırın. Her iki hedef de kök dizindeki `.env` dosyasını yükler.

Hizmetler şu yerel adresleri kullanır:

| Hizmet | Adres |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, yapılandırıldığında | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Web uygulaması | `http://localhost:3000` |
| Yönetim paneli uygulaması | `http://localhost:3001` |

PostgreSQL'i ve geçiş konteynerini şu komutla durdurun:

```bash
make db-down
```

## Yerel yapılandırma

`.env.example` dosyasından başlayın; dosya, kullanılabilir değişkenleri ve hangi değerlerin yalnızca yerel olduğunu belgeler. Yukarıda gösterildiği gibi, auth hizmetini çalıştırmadan önce içindeki eski `DATABASE_URL` değerini değiştirin.

Başlıca yerel ayarlar şunlardır:

- Docker içindeki şema geçişleri için `MIGRATION_DATABASE_URL`
- `make auth-dev` için kök `.env` dosyasında `auth_app` rolüne ayarlanan `DATABASE_URL`
- `make backend-dev` için `backend_app` rolü olarak verilen `DATABASE_URL`
- backend kimlik doğrulaması için `AUTH_MODE` ve `ALLOW_INSECURE_LOCAL_AUTH`
- yerel web ve yönetim paneli kökenleri (origin) için `BACKEND_ALLOWED_ORIGINS`
- tarayıcı kimlik doğrulaması için `ALLOWED_REDIRECT_URIS` ve `COOKIE_DOMAIN`
- gerçek OTP'yi test ederken Cognito ve oturum şifreleme değerleri

Agent API, backend'in bir parçasıdır. Herkese açık yerel keşif belgesi, backend başladıktan sonra `http://localhost:8080/v1/agent` adresinde bulunur. Korumalı Agent işlemleri `ApiKey` kimlik doğrulaması gerektirir ve `AUTH_MODE=none` yolunda kullanılamaz.

### Yola göre AI kapsamı

Yukarıdaki yerel komutlar asenkron sohbet worker'ını başlatmaz. Hızlı yol ayrıca Chat V2'nin reddettiği `AUTH_MODE=none` modunu kullanır; bir OpenAI anahtarı veya misafir kotası eklemek bu yolu AI kullanabilir hâle getirmez. Tam yerel Cognito akışı desteklenen bir kimlik doğrulama aktarımı sağlar, ancak worker'ı yine de başlatmaz.

AWS CDK dağıtımı worker Lambda'sını oluşturur ve backend'i onu çağıracak şekilde yapılandırır. `OPENAI_API_KEY` gibi sağlayıcı kimlik bilgileri, desteklenen kimliği doğrulanmış istekler için model çağrılarını etkinleştirir. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ayrı olarak misafir AI kullanımını etkinleştirir ve sınırlar; giriş yapmış kullanıcıların veya bearer ile kimliği doğrulanmış isteklerin AI kullanımını denetlemez. Langfuse ayarları isteğe bağlı izleme yapılandırmasıdır.

## Native istemciler

Aynı depo iOS ve Android istemcilerini de içerir, ancak yerel web/sunucu komutları bunları derlemez veya dağıtmaz.

iOS projesi yerel API ve auth sunucu adreslerini şu dosyadan okur:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Gerektiğinde dosyayı örnekten oluşturun:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Ayrı derleme ve test iş akışları için deponun [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ve [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) dosyalarına bakın.

## Üretim ortamı AWS CDK kullanır

Desteklenen üretim dağıtımı, depoyla birlikte gelen AWS CDK yığınıdır. Sağlayıcıdan bağımsız değil, AWS tabanlıdır ve şunları içerir:

- bir VPC ve özel alt ağlar
- Amazon RDS üzerinde PostgreSQL 18
- Amazon Cognito ile parolasız e-posta OTP
- backend, auth ve MCP hizmetleri için API Gateway ve Lambda
- bir asenkron sohbet worker Lambda'sı ve bir Cognito özel e-posta gönderici Lambda'sı
- web ve yönetim paneli uygulamaları için S3 ve CloudFront
- veritabanı, oturum, e-posta, izleme ve isteğe bağlı AI kimlik bilgileri için Secrets Manager
- CloudWatch alarmları, SNS bildirimleri ve bir RDS yedekleme planı
- bir GitHub Actions OIDC dağıtım rolü
- herkese açık alan adları için Cloudflare kurulum betikleri

Dağıtım `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ve `mcp.<domain>` adreslerini yayına açar. Kök alan adı başka bir amaçla kullanılmıyorsa bir kök alan adı yönlendirmesi de oluşturabilir.

Üretim yardımcı betiğini şunlara sahip bir operatör makinesinden çalıştırın:

- Node.js 24 ve npm
- Bash ve GNU Make
- çalışan Docker
- dağıtım hesabında kimliği doğrulanmış AWS CLI
- hedef depoda kimliği doğrulanmış GitHub CLI
- `curl`, `jq` ve Python 3

Dağıtmadan önce operatör değerlerini kök dizindeki `.env` dosyasında yapılandırın. Gerekli değerler AWS bölgesini, alan adını, uyarı e-postasını, GitHub deposunu, Cloudflare kimlik bilgilerini, Resend kimlik bilgilerini ve backend Sentry yapılandırmasını içerir. OpenAI ve Langfuse kimlik bilgileri isteğe bağlıdır.

Depo kök dizininden önerilen ilk dağıtım komutu şudur:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Temiz bir checkout'tan başlarken auth paketini açıkça kurmak şu anda gereklidir; çünkü dağıtım yardımcısı bu paketi derlemeye dahil eder ama kurmaz. Yardımcı betik gerçek AWS, Cloudflare ve GitHub kaynakları oluşturur veya değiştirir. Çalıştırmadan önce deponun dağıtım belgelerini ve bulut maliyetlerini gözden geçirin. Betik CDK bootstrap işlemini çalıştırır, altyapıyı dağıtır, geçişleri çalıştırır, web ve yönetim paneli dosyalarını yükler, atlanmadıkça herkese açık `app`, `admin`, `api`, `auth` ve `mcp` DNS kayıtlarını yapılandırır ve eksik GitHub Actions yapılandırmasını doldurur.

Dağıtımdan sonra:

1. `ALERT_EMAIL` gelen kutusuna gönderilen SNS aboneliğini onaylayın.
2. Ayrı Resend gönderim alan adı DNS kayıtlarını yapılandırın ve doğrulayın:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh`, varsayılan olarak herkese açık uygulama alan adları için `scripts/cloudflare/setup-dns.sh` betiğini çalıştırır. `setup-resend-domain.sh` betiğini çalıştırmaz; o betik `mail.<domain>` için e-posta gönderici kayıtlarını oluşturur ve bu alan adını Resend ile doğrular. `--skip-dns` ile dağıtırsanız herkese açık kayıtları AWS CDK rehberinde belgelendiği şekilde ayrıca yapılandırın.

## Veri taşınabilirliği

Çalışma alanı paketlerinin içe ve dışa aktarımı yalnızca kartları, etiketlerini ve ilgili medyayı aktarır. Tekrar geçmişini, FSRS zamanlayıcı durumunu, çalışma alanı ayarlarını, tam deste yapılarını veya hesap verilerini aktarmaz.

Paketleri, barındırılan sürümden kendi sunucunuza eksiksiz bir geçiş aracı veya felaket kurtarma yedeği olarak değil, içerik aktarımı olarak görün. Dağıtılmış PostgreSQL veritabanını ve medya depolamasını yedeklemek ve geri yüklemek operatörlerin sorumluluğundadır.

## Operatör sorumlulukları

Kendi sunucunuzda barındırmak, şunları sizin sağlayıp sürdürmeniz anlamına gelir:

- AWS altyapısı ve maliyetleri
- Cloudflare DNS ve alan adı yapılandırması
- Resend e-posta teslim kimlik bilgileri ve alan adı kayıtları
- gerekli Sentry izleme yapılandırması
- isteğe bağlı AI sağlayıcısı ve Langfuse kimlik bilgileri
- gizli anahtarlar, yükseltmeler, geçişler, uyarılar, yedekler ve geri yükleme testleri
- kendi iOS veya Android sürümlerinizi istiyorsanız native mobil derlemeler ve dağıtım

Yığın bu sistemlerin birçoğu için otomasyon içerir, ancak yine de bir operatör gerektirir. Docker Compose bu üretim mimarisinin yerini tutmaz.

## Depo dağıtım belgeleri

- [Depo README dosyası](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Backend ve web dağıtım rehberi](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK dağıtım rehberi](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK altyapısı](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
