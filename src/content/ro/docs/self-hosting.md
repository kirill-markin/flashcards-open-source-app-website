---
title: Ghid de găzduire proprie
description: Rulează Nibomo local cu PostgreSQL, autentificare, backend, web și admin, sau implementează stiva de producție AWS CDK documentată.
---

Nibomo acceptă două căi distincte: un mediu de dezvoltare local și o implementare de producție pe AWS. Docker Compose rulează PostgreSQL și migrările pentru dezvoltarea locală; nu este metoda de implementare în producție.

## Cerințe pentru dezvoltarea locală

- Git
- Bash
- GNU Make
- Docker cu Docker Compose
- Node.js 24
- npm

Fișierul Docker Compose furnizat rulează în prezent PostgreSQL 18.4. Nu ai nevoie de o instalare locală separată de PostgreSQL.

## Pornire rapidă locală

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

`make db-up` pornește PostgreSQL și rulează `scripts/deploy/migrate.sh` prin containerul de migrare. Cu parolele implicite copiate din `.env.example`, migrarea configurează aceste conexiuni locale de rulare:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- autentificare: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- raportare: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Dacă schimbi `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` sau `REPORTING_DB_PASSWORD` în `.env`, folosește aceeași parolă modificată în URL-ul de conexiune corespunzător.

### Pornire rapidă doar locală

Ținta Make pentru backend nu încarcă fișierul `.env` din rădăcină. Transmite explicit setările locale necesare:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Rulează clienții în terminale separate:

```bash
make web-dev
make admin-dev
```

Această cale, în mod intenționat, nu pornește `make auth-dev`. `AUTH_MODE=none` este un mod explicit nesigur, doar pentru localhost; nu îl folosi niciodată într-un mediu implementat.
Acoperă dezvoltarea backendului de bază, descoperirea publică prin Agent API, aplicația web și admin, dar nu face disponibil Chat V2.

### Flux local complet cu Cognito

Ținta pentru autentificare încarcă fișierul `.env` din rădăcină, în timp ce ținta pentru backend nu îl încarcă. Mai întâi înlocuiește valoarea veche (legacy) `DATABASE_URL` din `.env` copiat cu URL-ul rolului de autentificare și adaugă valorile tale reale Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Pornește autentificarea:

```bash
make auth-dev
```

În terminalul backendului, încarcă explicit `.env`, apoi suprascrie URL-ul bazei de date pentru autentificare cu URL-ul rolului de backend pentru acel proces:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Rulează `make web-dev` și `make admin-dev` în terminale proprii. Ambele ținte încarcă fișierul `.env` din rădăcină.

Serviciile folosesc aceste adrese locale:

| Serviciu | Adresă |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Autentificare, când este configurată | `http://localhost:8081` |
| API backend | `http://localhost:8080/v1` |
| Aplicația web | `http://localhost:3000` |
| Aplicația admin | `http://localhost:3001` |

Oprește PostgreSQL și containerul de migrare cu:

```bash
make db-down
```

## Configurarea locală

Pornește de la `.env.example`; acesta documentează variabilele disponibile și valorile care sunt doar pentru mediul local. Înlocuiește valoarea veche (legacy) `DATABASE_URL` din el înainte să rulezi autentificarea, așa cum s-a arătat mai sus.

Principalele setări locale sunt:

- `MIGRATION_DATABASE_URL` pentru migrările schemei în Docker
- `DATABASE_URL` setat la rolul `auth_app` în fișierul `.env` din rădăcină pentru `make auth-dev`
- `DATABASE_URL` transmis ca rolul `backend_app` pentru `make backend-dev`
- `AUTH_MODE` și `ALLOW_INSECURE_LOCAL_AUTH` pentru autentificarea backendului
- `BACKEND_ALLOWED_ORIGINS` pentru originile locale ale aplicațiilor web și admin
- `ALLOWED_REDIRECT_URIS` și `COOKIE_DOMAIN` pentru autentificarea în browser
- valorile Cognito și de criptare a sesiunii când testezi OTP real

Agent API face parte din backend. Documentul său public de descoperire local este disponibil la `http://localhost:8080/v1/agent` după pornirea backendului. Operațiile protejate ale Agent API necesită autentificare `ApiKey` și nu sunt disponibile pe calea `AUTH_MODE=none`.

### Funcțiile AI în funcție de cale

Comenzile locale de mai sus nu pornesc workerul asincron de chat. Calea rapidă folosește în plus `AUTH_MODE=none`, pe care Chat V2 îl respinge; adăugarea unei chei OpenAI sau a unei cote pentru vizitatori nu face această cale compatibilă cu AI. Fluxul local complet cu Cognito oferă un mecanism de autentificare acceptat, dar tot nu pornește workerul.

Implementarea AWS CDK creează funcția Lambda a workerului și configurează backendul să o invoce. Credențialele furnizorului, cum ar fi `OPENAI_API_KEY`, permit apelurile către model pentru cererile autentificate acceptate. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` activează și limitează separat AI-ul pentru vizitatori; nu controlează AI-ul pentru utilizatorii conectați sau autentificați cu token bearer. Setările Langfuse sunt o configurare opțională de urmărire (tracing).

## Clienții nativi

Același repository conține clienții iOS și Android, dar comenzile locale pentru web și server nu îi compilează și nu îi distribuie.

Proiectul iOS citește gazdele locale pentru API și autentificare din:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Creează-l din exemplu când este nevoie:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Consultă [README-ul iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) și [README-ul Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) din repository pentru fluxurile lor separate de compilare și testare.

## Producția folosește AWS CDK

Implementarea de producție acceptată este stiva AWS CDK inclusă. Este bazată pe AWS, nu independentă de furnizor, și include:

- un VPC și subrețele private
- PostgreSQL 18 pe Amazon RDS
- Amazon Cognito cu OTP pe e-mail, fără parolă
- API Gateway și Lambda pentru serviciile de backend, autentificare și MCP
- o funcție Lambda pentru workerul asincron de chat și o funcție Lambda Cognito pentru trimiterea personalizată a e-mailurilor
- S3 și CloudFront pentru aplicațiile web și admin
- Secrets Manager pentru credențialele bazei de date, sesiunii, e-mailului, monitorizării și, opțional, AI
- alarme CloudWatch, notificări SNS și un plan de backup RDS
- un rol de implementare OIDC pentru GitHub Actions
- scripturi de configurare Cloudflare pentru domeniile publice

Implementarea expune `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` și `mcp.<domain>`. Poate crea și o redirecționare pentru domeniul rădăcină (apex) atunci când acesta nu este folosit altfel.

Rulează utilitarul de producție de pe o mașină de operator care are:

- Node.js 24 și npm
- Bash și GNU Make
- Docker pornit
- AWS CLI autentificat în contul de implementare
- GitHub CLI autentificat în repository-ul țintă
- `curl`, `jq` și Python 3

Înainte de implementare, configurează valorile operatorului în fișierul `.env` din rădăcină. Setul obligatoriu include regiunea AWS, domeniul, adresa de e-mail pentru alerte, repository-ul GitHub, credențialele Cloudflare, credențialele Resend și configurarea Sentry pentru backend. Credențialele OpenAI și Langfuse sunt opționale.

Comanda recomandată pentru prima implementare, din rădăcina repository-ului, este:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Instalarea explicită a pachetului de autentificare este necesară în prezent pe un checkout curat, deoarece utilitarul de implementare include acel pachet în bundle, dar nu îl instalează. Utilitarul creează sau modifică resurse reale AWS, Cloudflare și GitHub. Citește documentația de implementare din repository și verifică costurile cloud înainte să îl rulezi. Acesta inițializează CDK, implementează infrastructura, rulează migrările, încarcă resursele aplicațiilor web și admin, configurează înregistrările DNS publice `app`, `admin`, `api`, `auth` și `mcp`, dacă pasul nu este omis, și completează configurarea lipsă din GitHub Actions.

După implementare:

1. Confirmă abonarea SNS trimisă în căsuța de e-mail `ALERT_EMAIL`.
2. Configurează și verifică înregistrările DNS separate pentru domeniul de trimitere Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` rulează implicit `scripts/cloudflare/setup-dns.sh` pentru domeniile publice ale aplicației. Nu rulează `setup-resend-domain.sh`; acesta din urmă creează înregistrările pentru trimiterea e-mailurilor de pe `mail.<domain>` și verifică acel domeniu în Resend. Dacă implementezi cu `--skip-dns`, configurează separat înregistrările publice, așa cum este documentat în ghidul AWS CDK.

## Portabilitatea datelor

Importul și exportul arhivelor spațiului de lucru transferă doar fișele, etichetele lor și fișierele media asociate. Nu transferă istoricul recapitulărilor, starea planificatorului FSRS, setările spațiului de lucru, structurile complete ale pachetelor sau datele contului.

Tratează arhivele ca transfer de conținut, nu ca o migrare completă de la varianta găzduită la găzduirea proprie și nici ca backup pentru recuperarea în caz de dezastru. Operatorii sunt responsabili pentru backupul și restaurarea bazei de date PostgreSQL implementate și a spațiului de stocare pentru fișiere media.

## Responsabilitățile operatorului

Găzduirea proprie înseamnă că tu asiguri și întreții:

- infrastructura AWS și costurile ei
- configurarea DNS Cloudflare și a domeniului
- credențialele Resend pentru livrarea e-mailurilor și înregistrările de domeniu
- configurarea obligatorie a monitorizării Sentry
- credențialele opționale pentru furnizorul AI și Langfuse
- secretele, actualizările, migrările, alertele, backupurile și testarea restaurării
- compilarea și distribuirea aplicațiilor mobile native, dacă vrei propriile versiuni iOS sau Android

Stiva include automatizări pentru multe dintre aceste sisteme, dar tot necesită un operator. Docker Compose nu înlocuiește această arhitectură de producție.

## Documentația de implementare din repository

- [README-ul repository-ului](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Ghid de implementare pentru backend și web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Ghid de implementare AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infrastructura AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
