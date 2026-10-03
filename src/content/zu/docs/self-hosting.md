---
title: Umhlahlandlela wokuzisingathela
description: Qhuba i-Nibomo kukhompyutha yakho nge-PostgreSQL, ukuqinisekisa ubuwena, i-backend, iwebhu nokuphatha, noma ufake isitaki sokukhiqiza se-AWS CDK esichaziwe.
---

I-Nibomo isekela izindlela ezimbili ezihlukene: indawo yokuthuthukisa yasendaweni nokufakwa kokukhiqiza ku-AWS. I-Docker Compose iqhuba i-PostgreSQL nokuthuthwa kwe-schema ekuthuthukiseni kwasendaweni; ayiyona indlela yokufaka yokukhiqiza.

## Izidingo zokuthuthukisa kwasendaweni

- Git
- Bash
- GNU Make
- I-Docker ene-Docker Compose
- Node.js 24
- npm

Ifayela le-Docker Compose elinikeziwe okwamanje liqhuba i-PostgreSQL 18.4. Awudingi ukufaka i-PostgreSQL ehlukile kukhompyutha yakho.

## Ukuqala ngokushesha kwasendaweni

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

I-`make db-up` iqala i-PostgreSQL bese iqhuba i-`scripts/deploy/migrate.sh` ngesiqukathi sokuthutha i-schema. Ngamaphasiwedi azenzakalelayo akopishwe ku-`.env.example`, ukuthutha kulungiselela lokhu kuxhumana kwesikhathi sokusebenza kwasendaweni:

- i-backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- ukuqinisekisa ubuwena: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- imibiko: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Uma ushintsha i-`BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD`, noma i-`REPORTING_DB_PASSWORD` ku-`.env`, sebenzisa iphasiwedi efanayo eshintshiwe ku-URL yokuxhuma ehambisanayo.

### Ukuqala ngokushesha kwasendaweni kuphela

Ithagethi ye-Make ye-backend ayilayishi i-`.env` yempande. Dlulisa izilungiselelo zayo zasendaweni ezidingekayo ngokucacile:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Qhuba amaklayenti kumatheminali ahlukene:

```bash
make web-dev
make admin-dev
```

Le ndlela ngamabomu ayiqali i-`make auth-dev`. I-`AUTH_MODE=none` iyimodi engavikelekile ngokusobala esebenza ku-localhost kuphela; ungalokothi uyisebenzise endaweni efakiwe.
Ihlanganisa ukuthuthukiswa kwe-backend eyinhloko, ukuthola kwe-Agent API yomphakathi, iwebhu, nokuphatha, kodwa ayenzi i-Chat V2 itholakale.

### Ukugeleza okugcwele kwe-Cognito kwasendaweni

Ithagethi yokuqinisekisa ubuwena ilayisha i-`.env` yempande, kanti ithagethi ye-backend ayiyilayishi. Okokuqala, shintsha i-`DATABASE_URL` endala ku-`.env` ekopishiwe nge-URL yendima yokuqinisekisa ubuwena, bese wengeza amanani akho angempela e-Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Qala ukuqinisekisa ubuwena:

```bash
make auth-dev
```

Kutheminali ye-backend, layisha i-`.env` ngokucacile, bese, kuleyo nqubo kuphela, ufaka i-URL yendima ye-backend esikhundleni se-URL yesizindalwazi yokuqinisekisa ubuwena:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Qhuba i-`make web-dev` ne-`make admin-dev` kumatheminali azo. Womabili lawa mathagethi alayisha i-`.env` yempande.

Amasevisi asebenzisa la makheli asendaweni:

| Isevisi | Ikheli |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Ukuqinisekisa ubuwena, uma kusethiwe | `http://localhost:8081` |
| I-API ye-backend | `http://localhost:8080/v1` |
| Uhlelo lwewebhu | `http://localhost:3000` |
| Uhlelo lokuphatha | `http://localhost:3001` |

Misa i-PostgreSQL nesiqukathi sokuthutha i-schema ngalo myalo:

```bash
make db-down
```

## Ukulungiselelwa kwasendaweni

Qala ngefayela `.env.example`; lichaza okuguquguqukayo okutholakalayo nokuthi yimaphi amanani asendaweni kuphela. Shintsha i-`DATABASE_URL` yalo endala ngaphambi kokuqhuba ukuqinisekisa ubuwena, njengoba kubonisiwe ngenhla.

Izilungiselelo eziyinhloko zasendaweni yilezi:

- `MIGRATION_DATABASE_URL` yokuthuthwa kwe-schema ngaphakathi kwe-Docker
- `DATABASE_URL` esethwe endimeni ye-`auth_app` ku-`.env` yempande ye-`make auth-dev`
- `DATABASE_URL` edluliswa njengendima ye-`backend_app` ye-`make backend-dev`
- `AUTH_MODE` ne-`ALLOW_INSECURE_LOCAL_AUTH` zokuqinisekisa ubuwena kwi-backend
- `BACKEND_ALLOWED_ORIGINS` yemvelaphi yasendaweni yewebhu neyokuphatha
- `ALLOWED_REDIRECT_URIS` ne-`COOKIE_DOMAIN` zokuqinisekisa ubuwena esipheqululini
- amanani e-Cognito nawokubethela iseshini lapho uhlola i-OTP yangempela

I-Agent API iyingxenye ye-backend. Idokhumenti yayo yomphakathi yokuthola yasendaweni iyatholakala ku-`http://localhost:8080/v1/agent` ngemva kokuqala kwe-backend. Imisebenzi ye-Agent evikelwe idinga ukuqinisekisa nge-`ApiKey` futhi ayitholakali endleleni ye-`AUTH_MODE=none`.

### Ububanzi be-AI ngokwendlela

Imiyalo yasendaweni engenhla ayiqali isisebenzi sengxoxo esingavumelanisiwe. Indlela esheshayo iphinde isebenzise i-`AUTH_MODE=none`, eyenqatshwa yi-Chat V2; ukwengeza ukhiye we-OpenAI noma isabelo sesivakashi akwenzi leyo ndlela ikwazi ukusebenzisa i-AI. Ukugeleza okugcwele kwe-Cognito kwasendaweni kunikeza indlela yokuqinisekisa ubuwena esekelwayo, kodwa namanje akusiqali isisebenzi.

Ukufakwa kwe-AWS CDK kudala isisebenzi se-Lambda futhi kulungiselela i-backend ukuthi isibize. Imininingwane yokungena yomhlinzeki efana ne-`OPENAI_API_KEY` ivumela ukubizwa kwemodeli ezicelweni eziqinisekisiwe ezisekelwayo. I-`GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ivula futhi ikhawule i-AI yesivakashi ngokwehlukile; ayilawuli i-AI yabangenile noma eqinisekiswe nge-bearer. Izilungiselelo ze-Langfuse ziwukulungiselelwa kokulandelela okungaphoqelekile.

## Amaklayenti endabuko

I-repository efanayo iqukethe amaklayenti e-iOS ne-Android, kodwa imiyalo yasendaweni yewebhu/yeseva ayiwakhi futhi ayiwasabalalisi.

Iphrojekthi ye-iOS ifunda ama-host asendaweni e-API nawokuqinisekisa ubuwena kuleli fayela:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Lidale lisuka esibonelweni lapho kudingeka:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Bheka i-[iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) ne-[Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) ye-repository ukuze uthole izinqubo zazo ezihlukene zokwakha nokuhlola.

## Ukukhiqiza kusebenzisa i-AWS CDK

Ukufakwa kokukhiqiza okusekelwayo yisitaki se-AWS CDK esifakiwe. Sincike ku-AWS esikhundleni sokungancikile kumthengisi othile futhi sihlanganisa:

- i-VPC nama-subnet ayimfihlo
- i-PostgreSQL 18 ku-Amazon RDS
- i-OTP ye-imeyili ye-Amazon Cognito engadingi phasiwedi
- i-API Gateway ne-Lambda yamasevisi e-backend, okuqinisekisa ubuwena, ne-MCP
- isisebenzi se-Lambda sengxoxo esingavumelanisiwe kanye ne-Lambda ye-Cognito yokuthumela ama-imeyili ngokwezifiso
- i-S3 ne-CloudFront zezinhlelo zewebhu nezokuphatha
- i-Secrets Manager yemininingwane yokungena yesizindalwazi, yeseshini, ye-imeyili, yokuqapha, neye-AI engaphoqelekile
- ama-alamu e-CloudWatch, izaziso ze-SNS, nohlelo lwesipele lwe-RDS
- indima yokufaka ye-GitHub Actions OIDC
- ama-script e-Cloudflare okusetha izizinda zomphakathi

Ukufakwa kuveza i-`app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>`, ne-`mcp.<domain>`. Kungaphinde kudale ukuqondisa kabusha kwesizinda esiyimpande uma isizinda esiyimpande singasetshenziswa ngenye indlela.

Qhuba umsizi wokukhiqiza usuka emshinini womqhubi one:

- Node.js 24 ne-npm
- Bash ne-GNU Make
- i-Docker esebenzayo
- i-AWS CLI eqinisekiswe ku-akhawunti yokufaka
- i-GitHub CLI eqinisekiswe ku-repository eqondiwe
- `curl`, `jq`, ne-Python 3

Ngaphambi kokufaka, lungiselela amanani omqhubi ku-`.env` yempande. Amanani adingekayo ahlanganisa isifunda se-AWS, isizinda, i-imeyili yezexwayiso, i-repository ye-GitHub, imininingwane yokungena ye-Cloudflare, imininingwane yokungena ye-Resend, nokulungiselelwa kwe-Sentry ye-backend. Imininingwane yokungena ye-OpenAI ne-Langfuse ayiphoqelekile.

Umyalo wokufaka wokuqala okhethwayo usuka empandeni ye-repository yilo:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Ukufaka ngokucacile kwephakheji yokuqinisekisa ubuwena okwamanje kuyadingeka uma uqala ngekhophi ehlanzekile ngoba umsizi wokufaka uyahlanganisa leyo phakheji kodwa akayifaki. Umsizi udala noma ushintsha izinsiza zangempela ze-AWS, Cloudflare, ne-GitHub. Hlola imibhalo yokufaka ye-repository nezindleko zefu ngaphambi kokuwuqhuba. Uqalisa i-CDK, ufaka ingqalasizinda, uqhuba ukuthuthwa kwe-schema, ulayisha izinto zewebhu nezokuphatha, ulungiselela amarekhodi omphakathi e-DNS e-`app`, `admin`, `api`, `auth`, ne-`mcp` ngaphandle uma kweqiwa, futhi ugcwalisa ukulungiselelwa kwe-GitHub Actions okungekho.

Ngemva kokufaka:

1. Qinisekisa ukubhalisela kwe-SNS okuthunyelwe ebhokisini lokungenayo le-`ALERT_EMAIL`.
2. Lungiselela futhi uqinisekise amarekhodi e-DNS ahlukene esizinda sokuthumela se-Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

I-`first-deploy.sh` iqhuba i-`scripts/cloudflare/setup-dns.sh` yezizinda zomphakathi zohlelo lokusebenza ngokuzenzakalela. Ayiqhubi i-`setup-resend-domain.sh`; lena yakamuva idala amarekhodi okuthumela ama-imeyili e-`mail.<domain>` futhi iqinisekise leso sizinda nge-Resend. Uma ufaka nge-`--skip-dns`, lungiselela amarekhodi omphakathi ngokwehlukile njengoba kuchazwe kumhlahlandlela we-AWS CDK.

## Ukuthutheka kwedatha

Ukungenisa nokukhipha amaphakheji endawo yokusebenza kudlulisa kuphela amakhadi, amathegi awo, nemidiya ehlobene. Akudlulisi umlando wokubuyekeza, isimo sesihleli se-FSRS, izilungiselelo zendawo yokusebenza, izakhiwo eziphelele zamaqoqo amakhadi, noma idatha ye-akhawunti.

Thatha amaphakheji njengokudlulisa okuqukethwe, hhayi njengokuthutha okuphelele kusuka kokusingathiwe kuya kokuzisingathelwe noma njengesipele sokubuyisela ngemva kwenhlekelele. Abaqhubi banesibopho sokwenza isipele nokubuyisela isizindalwazi se-PostgreSQL esifakiwe nendawo yokugcina imidiya.

## Izibopho zomqhubi

Ukuzisingathela kusho ukuthi wena unikeza futhi unakekele:

- ingqalasizinda ye-AWS nezindleko zayo
- i-DNS ye-Cloudflare nokulungiselelwa kwesizinda
- imininingwane yokungena yokuthumela ama-imeyili ye-Resend namarekhodi esizinda
- ukulungiselelwa kokuqapha kwe-Sentry okudingekayo
- imininingwane yokungena engaphoqelekile yomhlinzeki we-AI neye-Langfuse
- izimfihlo, izibuyekezo zezinguqulo, ukuthuthwa kwe-schema, izexwayiso, izipele, nokuhlolwa kokubuyisela
- ukwakhiwa nokusatshalaliswa kwezinhlelo zeselula zendabuko uma ufuna ukukhipha izinguqulo zakho ze-iOS noma ze-Android

Isitaki sihlanganisa ukwenza ngokuzenzakalela kwamaningi ala masistimu, kodwa namanje sidinga umqhubi. I-Docker Compose ayithathi indawo yalesi sakhiwo sokukhiqiza.

## Imibhalo yokufaka ye-repository

- [I-README ye-repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Umhlahlandlela wokufaka i-backend newebhu](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Umhlahlandlela wokufaka nge-AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Ingqalasizinda ye-AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
