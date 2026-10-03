---
title: Pamācība darbināšanai savā serverī
description: Darbini Nibomo lokāli ar PostgreSQL, autentifikāciju, aizmugursistēmu, tīmekļa un administrēšanas lietotni vai izvieto dokumentēto AWS CDK produkcijas steku.
---

Nibomo atbalsta divus atšķirīgus ceļus: lokālu izstrādes vidi un produkcijas izvietojumu AWS. Docker Compose lokālai izstrādei darbina PostgreSQL un migrācijas; tas nav produkcijas izvietošanas veids.

## Prasības lokālai izstrādei

- Git
- Bash
- GNU Make
- Docker ar Docker Compose
- Node.js 24
- npm

Komplektā iekļautais Docker Compose fails pašlaik darbina PostgreSQL 18.4. Atsevišķa lokāla PostgreSQL instalācija nav vajadzīga.

## Ātrs lokāls starts

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

`make db-up` palaiž PostgreSQL un caur migrāciju konteineru izpilda `scripts/deploy/migrate.sh`. Ar noklusējuma parolēm, kas nokopētas no `.env.example`, migrācija izveido šos lokālos izpildes savienojumus:

- aizmugursistēma: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- autentifikācija: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- atskaites: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Ja failā `.env` maini `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` vai `REPORTING_DB_PASSWORD`, izmanto to pašu mainīto paroli atbilstošajā savienojuma URL.

### Ātrs starts tikai lokāli

Aizmugursistēmas Make mērķis neielādē saknes `.env`. Nepieciešamos lokālos iestatījumus nodod tam tieši:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Klientus palaid atsevišķos termināļos:

```bash
make web-dev
make admin-dev
```

Šis ceļš apzināti nepalaiž `make auth-dev`. `AUTH_MODE=none` ir apzināti nedrošs režīms, kas paredzēts tikai localhost; nekad neizmanto to izvietotā vidē.
Ar to var izstrādāt aizmugursistēmas pamatdaļu, publisko Agent API atklāšanu, tīmekļa un administrēšanas lietotni, taču Chat V2 šajā ceļā nav pieejams.

### Pilna lokālā Cognito plūsma

Autentifikācijas mērķis ielādē saknes `.env`, bet aizmugursistēmas mērķis to nedara. Vispirms nokopētajā `.env` aizstāj novecojušo `DATABASE_URL` ar autentifikācijas lomas URL un pievieno savas īstās Cognito vērtības:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Palaid autentifikāciju:

```bash
make auth-dev
```

Aizmugursistēmas terminālī pats ielādē `.env` un pēc tam šim procesam aizstāj tajā norādīto autentifikācijas datubāzes URL ar aizmugursistēmas lomas URL:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Palaid `make web-dev` un `make admin-dev` katru savā terminālī. Abi mērķi ielādē saknes `.env`.

Pakalpojumi izmanto šīs lokālās adreses:

| Pakalpojums | Adrese |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Autentifikācija, ja ir konfigurēta | `http://localhost:8081` |
| Aizmugursistēmas API | `http://localhost:8080/v1` |
| Tīmekļa lietotne | `http://localhost:3000` |
| Administrēšanas lietotne | `http://localhost:3001` |

PostgreSQL un migrāciju konteineru aptur ar:

```bash
make db-down
```

## Lokālā konfigurācija

Sāc ar `.env.example`; tajā aprakstīti pieejamie mainīgie un norādīts, kuras vērtības ir paredzētas tikai lokālai lietošanai. Pirms autentifikācijas palaišanas aizstāj tajā novecojušo `DATABASE_URL`, kā parādīts iepriekš.

Galvenie lokālie iestatījumi:

- `MIGRATION_DATABASE_URL` shēmas migrācijām Docker iekšienē
- `DATABASE_URL`, kas saknes `.env` failā iestatīts uz `auth_app` lomu komandai `make auth-dev`
- `DATABASE_URL`, kas tiek nodots kā `backend_app` loma komandai `make backend-dev`
- `AUTH_MODE` un `ALLOW_INSECURE_LOCAL_AUTH` aizmugursistēmas autentifikācijai
- `BACKEND_ALLOWED_ORIGINS` lokālās tīmekļa un administrēšanas lietotnes izcelsmēm
- `ALLOWED_REDIRECT_URIS` un `COOKIE_DOMAIN` pārlūka autentifikācijai
- Cognito un sesijas šifrēšanas vērtības, testējot īstu OTP

Agent API ir daļa no aizmugursistēmas. Tā publiskais lokālais atklāšanas dokuments pēc aizmugursistēmas palaišanas ir pieejams adresē `http://localhost:8080/v1/agent`. Aizsargātajām Agent darbībām nepieciešama `ApiKey` autentifikācija, un ceļā ar `AUTH_MODE=none` tās nav pieejamas.

### MI iespējas katrā ceļā

Iepriekš minētās lokālās komandas nepalaiž asinhrono sarunu apstrādātāju. Ātrais ceļš turklāt izmanto `AUTH_MODE=none`, ko Chat V2 noraida; OpenAI atslēgas vai viesu kvotas pievienošana neļauj šajā ceļā izmantot MI. Pilnā lokālā Cognito plūsma nodrošina atbalstītu autentifikācijas mehānismu, taču arī tā nepalaiž apstrādātāju.

AWS CDK izvietojums izveido apstrādātāja Lambda funkciju un konfigurē aizmugursistēmu to izsaukt. Pakalpojumu sniedzēju piekļuves dati, piemēram, `OPENAI_API_KEY`, ļauj izsaukt modeļus atbalstītiem autentificētiem pieprasījumiem. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` atsevišķi ieslēdz un ierobežo MI viesiem; tas neattiecas uz MI, ko izmanto pieteikušies lietotāji vai ar bearer marķieri autentificēti pieprasījumi. Langfuse iestatījumi ir neobligāta trasēšanas konfigurācija.

## Natīvie klienti

Tajā pašā repozitorijā ir iOS un Android klienti, taču lokālās tīmekļa un servera komandas tos neveido un neizplata.

iOS projekts lokālos API un autentifikācijas resursdatorus nolasa no:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Ja nepieciešams, izveido to no parauga:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

To atsevišķās būvēšanas un testēšanas darbplūsmas skati repozitorija [iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) un [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md).

## Produkcijā izmanto AWS CDK

Atbalstītais produkcijas izvietojums ir iekļautais AWS CDK steks. Tas ir veidots tieši AWS, nevis neatkarīgs no mākoņpakalpojumu sniedzēja, un ietver:

- VPC un privātus apakštīklus
- PostgreSQL 18 pakalpojumā Amazon RDS
- Amazon Cognito pieteikšanos ar e-pasta OTP bez paroles
- API Gateway un Lambda aizmugursistēmas, autentifikācijas un MCP pakalpojumiem
- asinhronā sarunu apstrādātāja Lambda funkciju un Cognito pielāgotā e-pasta sūtītāja Lambda funkciju
- S3 un CloudFront tīmekļa un administrēšanas lietotnēm
- Secrets Manager datubāzes, sesiju, e-pasta, uzraudzības un neobligātajiem MI piekļuves datiem
- CloudWatch brīdinājumus, SNS paziņojumus un RDS dublējumkopiju plānu
- GitHub Actions OIDC izvietošanas lomu
- Cloudflare iestatīšanas skriptus publiskajiem domēniem

Izvietojums nodrošina `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` un `mcp.<domain>`. Tas var izveidot arī galvenā domēna pāradresāciju, ja saknes domēns netiek citādi izmantots.

Produkcijas palīgrīku palaid no uzturētāja datora, kurā ir:

- Node.js 24 un npm
- Bash un GNU Make
- palaists Docker
- AWS CLI, kas autentificēts izvietošanas kontā
- GitHub CLI, kas autentificēts ar piekļuvi mērķa repozitorijam
- `curl`, `jq` un Python 3

Pirms izvietošanas konfigurē uzturētāja vērtības saknes `.env` failā. Obligātās vērtības ietver AWS reģionu, domēnu, brīdinājumu e-pastu, GitHub repozitoriju, Cloudflare piekļuves datus, Resend piekļuves datus un aizmugursistēmas Sentry konfigurāciju. OpenAI un Langfuse piekļuves dati nav obligāti.

Ieteicamā pirmās izvietošanas komanda no repozitorija saknes:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Atsevišķa autentifikācijas pakotnes instalēšana tīrā repozitorija kopijā pašlaik ir nepieciešama, jo izvietošanas palīgrīks šo pakotni iekļauj komplektā, bet neinstalē. Palīgrīks izveido vai maina reālus AWS, Cloudflare un GitHub resursus. Pirms tā palaišanas izskati repozitorija izvietošanas dokumentāciju un mākoņa izmaksas. Tas veic CDK sākotnējo iestatīšanu (bootstrap), izvieto infrastruktūru, izpilda migrācijas, augšupielādē tīmekļa un administrēšanas lietotnes resursus, konfigurē publiskos `app`, `admin`, `api`, `auth` un `mcp` DNS ierakstus, ja vien šis solis nav izlaists, un aizpilda trūkstošo GitHub Actions konfigurāciju.

Pēc izvietošanas:

1. Apstiprini SNS abonementu, kas nosūtīts uz `ALERT_EMAIL` adresi.
2. Konfigurē un pārbaudi atsevišķos Resend sūtīšanas domēna DNS ierakstus:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` pēc noklusējuma izpilda `scripts/cloudflare/setup-dns.sh` publiskajiem lietotņu domēniem. Tas neizpilda `setup-resend-domain.sh`; šis skripts izveido e-pasta sūtītāja ierakstus domēnam `mail.<domain>` un pārbauda šo domēnu pakalpojumā Resend. Ja izvieto ar `--skip-dns`, publiskos ierakstus konfigurē atsevišķi, kā aprakstīts AWS CDK pamācībā.

## Datu pārnesamība

Darbvietas pakotņu imports un eksports pārnes tikai kartītes, to birkas un saistīto multividi. Tas nepārnes atkārtošanas vēsturi, FSRS plānotāja stāvokli, darbvietas iestatījumus, pilnu kartīšu komplektu struktūru vai konta datus.

Uzskati pakotnes par satura pārnešanu, nevis par pilnu migrāciju no mitinātās versijas uz savu serveri vai dublējumkopiju avārijas atkopšanai. Uzturētāji paši atbild par izvietotās PostgreSQL datubāzes un multivides krātuves dublēšanu un atjaunošanu.

## Uzturētāja pienākumi

Darbinot sistēmu savā serverī, tu pats nodrošini un uzturi:

- AWS infrastruktūru un tās izmaksas
- Cloudflare DNS un domēna konfigurāciju
- Resend e-pasta piegādes piekļuves datus un domēna ierakstus
- obligāto Sentry uzraudzības konfigurāciju
- neobligātos MI pakalpojumu sniedzēja un Langfuse piekļuves datus
- noslēpumus, atjauninājumus, migrācijas, brīdinājumus, dublējumkopijas un atjaunošanas testēšanu
- natīvo mobilo lietotņu būvēšanu un izplatīšanu, ja vēlies savus iOS vai Android laidienus

Steks ietver automatizāciju daudzām no šīm sistēmām, taču tam joprojām vajadzīgs uzturētājs. Docker Compose neaizstāj šo produkcijas arhitektūru.

## Repozitorija izvietošanas dokumentācija

- [Repozitorija README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Aizmugursistēmas un tīmekļa lietotnes izvietošanas pamācība](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [AWS CDK izvietošanas pamācība](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS CDK infrastruktūra](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
