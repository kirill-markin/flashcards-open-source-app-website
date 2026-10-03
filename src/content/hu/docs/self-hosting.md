---
title: Saját üzemeltetési útmutató
description: Futtasd a Nibomót helyben PostgreSQL-lel, hitelesítéssel, backenddel, webes és adminfelülettel, vagy telepítsd a dokumentált AWS CDK-alapú éles rendszert.
---

A Nibomo két külön utat támogat: egy helyi fejlesztői környezetet és egy éles telepítést AWS-en. A Docker Compose a helyi fejlesztéshez futtatja a PostgreSQL-t és a migrációkat; ez nem az éles telepítés módja.

## A helyi fejlesztés követelményei

- Git
- Bash
- GNU Make
- Docker, Docker Compose-zal
- Node.js 24
- npm

A mellékelt Docker Compose-fájl jelenleg a PostgreSQL 18.4-es verzióját futtatja. Nincs szükség külön helyi PostgreSQL-telepítésre.

## Helyi gyors kezdés

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

A `make db-up` elindítja a PostgreSQL-t, és a migrációs konténeren keresztül lefuttatja a `scripts/deploy/migrate.sh` szkriptet. A `.env.example` fájlból átmásolt alapértelmezett jelszavakkal a migráció ezeket a helyi futásidejű kapcsolatokat hozza létre:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Ha a `.env` fájlban módosítod a `BACKEND_DB_PASSWORD`, az `AUTH_DB_PASSWORD` vagy a `REPORTING_DB_PASSWORD` értékét, ugyanazt a módosított jelszót használd a hozzá tartozó kapcsolati URL-ben.

### Gyors, csak helyi indítás

A backend Make-célja nem tölti be a gyökérkönyvtári `.env` fájlt. A szükséges helyi beállításokat explicit módon add át neki:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

A klienseket külön terminálokban futtasd:

```bash
make web-dev
make admin-dev
```

Ez az út szándékosan nem indítja el a `make auth-dev` célt. Az `AUTH_MODE=none` kifejezetten nem biztonságos, csak localhoston használható mód; telepített környezetben soha ne használd.
Lefedi az alapvető backend-, a nyilvános Agent API-felderítési, a webes és az adminfejlesztést, de a Chat V2-t nem teszi elérhetővé.

### Teljes helyi Cognito-folyamat

Az auth-cél betölti a gyökérkönyvtári `.env` fájlt, a backend-cél viszont nem. Először cseréld le az átmásolt `.env` fájlban a régi `DATABASE_URL` értéket az auth-szerepkör URL-jére, és add hozzá a valódi Cognito-értékeidet:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Indítsd el a hitelesítést:

```bash
make auth-dev
```

A backend termináljában explicit módon töltsd be a `.env` fájlt, majd ennél a folyamatnál írd felül az auth-adatbázis URL-jét a backend-szerepkör URL-jével:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

A `make web-dev` és a `make admin-dev` parancsot a saját termináljukban futtasd. Mindkét cél betölti a gyökérkönyvtári `.env` fájlt.

A szolgáltatások ezeket a helyi címeket használják:

| Szolgáltatás | Cím |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Hitelesítés, ha be van állítva | `http://localhost:8081` |
| Backend API | `http://localhost:8080/v1` |
| Webalkalmazás | `http://localhost:3000` |
| Adminalkalmazás | `http://localhost:3001` |

A PostgreSQL-t és a migrációs konténert ezzel állíthatod le:

```bash
make db-down
```

## Helyi konfiguráció

Indulj ki a `.env.example` fájlból; ez dokumentálja az elérhető változókat, és azt, hogy mely értékek csak helyiek. Az auth futtatása előtt cseréld le benne a régi `DATABASE_URL` értéket, ahogy fent látható.

A fő helyi beállítások:

- `MIGRATION_DATABASE_URL` a Dockeren belüli sémamigrációkhoz
- `DATABASE_URL`, a gyökérkönyvtári `.env` fájlban az `auth_app` szerepkörre állítva, a `make auth-dev` számára
- `DATABASE_URL`, a `backend_app` szerepkörként átadva, a `make backend-dev` számára
- `AUTH_MODE` és `ALLOW_INSECURE_LOCAL_AUTH` a backend hitelesítéséhez
- `BACKEND_ALLOWED_ORIGINS` a helyi webes és admin eredetekhez
- `ALLOWED_REDIRECT_URIS` és `COOKIE_DOMAIN` a böngészős hitelesítéshez
- a Cognito- és a munkamenet-titkosítási értékek, ha valódi OTP-t tesztelsz

Az Agent API a backend része. A nyilvános helyi felderítési dokumentuma a backend elindulása után a `http://localhost:8080/v1/agent` címen érhető el. A védett Agent-műveletekhez `ApiKey`-hitelesítés kell, és az `AUTH_MODE=none` úton nem érhetők el.

### Az AI elérhetősége az egyes utakon

A fenti helyi parancsok nem indítják el az aszinkron csevegési workert. A gyors út ráadásul `AUTH_MODE=none` módot használ, amelyet a Chat V2 elutasít; ha OpenAI-kulcsot vagy vendégkvótát adsz hozzá, attól ez az út még nem lesz AI-képes. A teljes helyi Cognito-folyamat biztosít egy támogatott hitelesítési átvitelt, de a workert ez sem indítja el.

Az AWS CDK-telepítés létrehozza a worker Lambdát, és beállítja a backendet, hogy meghívja. Az olyan szolgáltatói hitelesítő adatok, mint az `OPENAI_API_KEY`, lehetővé teszik a modellhívásokat a támogatott, hitelesített kérésekhez. A `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` külön engedélyezi és korlátozza a vendégek AI-használatát; a bejelentkezett vagy bearer tokennel hitelesített felhasználók AI-használatát nem szabályozza. A Langfuse-beállítások opcionális nyomkövetési konfigurációk.

## Natív kliensek

Ugyanaz a tároló tartalmazza az iOS- és az Android-klienst is, de a helyi web- és szerverparancsok nem buildelik és nem terjesztik őket.

Az iOS-projekt innen olvassa be a helyi API- és auth-hosztokat:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Szükség esetén hozd létre a példafájlból:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

A külön build- és tesztfolyamataikért lásd a tároló [iOS README-jét](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) és [Android README-jét](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md).

## Az éles környezet AWS CDK-t használ

A támogatott éles telepítés a mellékelt AWS CDK-stack. AWS-alapú, nem szolgáltatófüggetlen, és a következőket tartalmazza:

- egy VPC és privát alhálózatok
- PostgreSQL 18 az Amazon RDS-en
- jelszó nélküli e-mailes OTP az Amazon Cognitóval
- API Gateway és Lambda a backend-, az auth- és az MCP-szolgáltatáshoz
- egy aszinkron csevegési worker Lambda és egy egyedi Cognito-e-mail-küldő Lambda
- S3 és CloudFront a webes és az adminalkalmazáshoz
- Secrets Manager az adatbázis-, munkamenet-, e-mail-, monitorozási és opcionális AI-hitelesítő adatokhoz
- CloudWatch-riasztások, SNS-értesítések és egy RDS-mentési terv
- egy GitHub Actions OIDC telepítési szerepkör
- Cloudflare-beállító szkriptek a nyilvános domainekhez

A telepítés az `app.<domain>`, az `admin.<domain>`, az `api.<domain>`, az `auth.<domain>` és az `mcp.<domain>` címet teszi elérhetővé. Ha a gyökérdomain egyébként nincs használatban, gyökérdomain-átirányítást is létrehozhat.

Az éles segédszkriptet olyan üzemeltetői gépről futtasd, amelyen:

- Node.js 24 és npm van
- Bash és GNU Make van
- fut a Docker
- az AWS CLI hitelesítve van a telepítési fiókhoz
- a GitHub CLI hitelesítve van a cél tárolóhoz
- elérhető a `curl`, a `jq` és a Python 3

Telepítés előtt állítsd be az üzemeltetői értékeket a gyökérkönyvtári `.env` fájlban. A kötelező értékek közé tartozik az AWS-régió, a domain, a riasztási e-mail-cím, a GitHub-tároló, a Cloudflare-hitelesítő adatok, a Resend-hitelesítő adatok és a backend Sentry-konfigurációja. Az OpenAI- és a Langfuse-hitelesítő adatok opcionálisak.

Az első telepítés ajánlott parancsa a tároló gyökérkönyvtárából:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Tiszta checkout esetén jelenleg külön telepíteni kell az auth csomagot, mert a telepítési segédszkript becsomagolja ezt a csomagot, de nem telepíti. A segédszkript valódi AWS-, Cloudflare- és GitHub-erőforrásokat hoz létre vagy módosít. Futtatás előtt nézd át a tároló telepítési dokumentációját és a felhőköltségeket. A szkript elvégzi a CDK bootstrapelését, telepíti az infrastruktúrát, lefuttatja a migrációkat, feltölti a webes és az adminalkalmazás statikus fájljait, beállítja a nyilvános `app`, `admin`, `api`, `auth` és `mcp` DNS-rekordokat, hacsak ezt ki nem hagyod, és kitölti a hiányzó GitHub Actions-konfigurációt.

A telepítés után:

1. Erősítsd meg az `ALERT_EMAIL` postafiókba küldött SNS-feliratkozást.
2. Állítsd be és ellenőrizd a Resend küldő domainjének külön DNS-rekordjait:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

A `first-deploy.sh` alapértelmezés szerint lefuttatja a `scripts/cloudflare/setup-dns.sh` szkriptet a nyilvános alkalmazásdomainekhez. A `setup-resend-domain.sh` szkriptet nem futtatja; ez utóbbi hozza létre az e-mail-küldő rekordokat a `mail.<domain>` számára, és ellenőrzi ezt a domaint a Resendnél. Ha `--skip-dns` kapcsolóval telepítesz, a nyilvános rekordokat külön állítsd be, az AWS CDK-útmutatóban leírtak szerint.

## Adathordozhatóság

A munkaterület-csomagok importálása és exportálása csak a kártyákat, a címkéiket és a kapcsolódó médiát viszi át. Nem viszi át az ismétlési előzményeket, az FSRS-ütemező állapotát, a munkaterület beállításait, a teljes paklistruktúrát vagy a fiókadatokat.

A csomagokat tartalomátvitelként kezeld, ne a felhős rendszerből saját üzemeltetésűbe történő teljes migrációként vagy katasztrófa utáni helyreállításra szolgáló mentésként. A telepített PostgreSQL-adatbázis és a médiatároló mentéséért és visszaállításáért az üzemeltetők felelnek.

## Az üzemeltető felelőssége

Saját üzemeltetés esetén te biztosítod és tartod karban:

- az AWS-infrastruktúrát és annak költségeit
- a Cloudflare DNS- és domainkonfigurációt
- a Resend e-mail-kézbesítési hitelesítő adatait és domainrekordjait
- a kötelező Sentry-monitorozási konfigurációt
- az opcionális AI-szolgáltatói és Langfuse-hitelesítő adatokat
- a titkos kulcsokat, a frissítéseket, a migrációkat, a riasztásokat, a mentéseket és a visszaállítás tesztelését
- a natív mobilbuildeket és azok terjesztését, ha saját iOS- vagy Android-kiadásokat szeretnél

A stack sok ilyen rendszerhez tartalmaz automatizálást, de üzemeltető így is kell hozzá. A Docker Compose nem helyettesíti ezt az éles architektúrát.

## A tároló telepítési dokumentációja

- [A tároló README-je](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Backend- és webtelepítési útmutató](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK telepítési útmutató](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK-infrastruktúra](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
