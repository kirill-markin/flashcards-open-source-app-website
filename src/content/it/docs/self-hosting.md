---
title: Guida al self-hosting
description: Esegui Nibomo in locale con PostgreSQL, autenticazione, backend, web e admin, oppure fai il deploy dello stack di produzione AWS CDK documentato.
---

Nibomo prevede due percorsi distinti: un ambiente di sviluppo locale e un deploy di produzione su AWS. Docker Compose esegue PostgreSQL e le migrazioni per lo sviluppo locale; non è il metodo di deploy in produzione.

## Requisiti per lo sviluppo locale

- Git
- Bash
- GNU Make
- Docker con Docker Compose
- Node.js 24
- npm

Il file Docker Compose fornito esegue attualmente PostgreSQL 18.4. Non serve un'installazione locale separata di PostgreSQL.

## Avvio rapido in locale

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

`make db-up` avvia PostgreSQL ed esegue `scripts/deploy/migrate.sh` tramite il container delle migrazioni. Con le password predefinite copiate da `.env.example`, la migrazione crea queste connessioni locali di runtime:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Se modifichi `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` o `REPORTING_DB_PASSWORD` in `.env`, usa la stessa password modificata nell'URL di connessione corrispondente.

### Avvio veloce, solo in locale

Il target Make del backend non carica il `.env` della root. Passagli esplicitamente le impostazioni locali richieste:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Esegui i client in terminali separati:

```bash
make web-dev
make admin-dev
```

Questo percorso volutamente non avvia `make auth-dev`. `AUTH_MODE=none` è una modalità esplicitamente non sicura, solo per localhost; non usarla mai in un ambiente distribuito.
Copre lo sviluppo delle funzioni principali del backend, della discovery pubblica dell'Agent API, del web e dell'admin, ma non rende disponibile Chat V2.

### Flusso Cognito completo in locale

Il target auth carica il `.env` della root, mentre il target backend no. Per prima cosa sostituisci il `DATABASE_URL` legacy nel `.env` copiato con l'URL del ruolo auth e aggiungi i tuoi valori Cognito reali:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Avvia auth:

```bash
make auth-dev
```

Nel terminale del backend, carica esplicitamente `.env`, poi, solo per quel processo, sostituisci il suo URL del database di auth con l'URL del ruolo backend:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Esegui `make web-dev` e `make admin-dev` ciascuno nel proprio terminale. Entrambi i target caricano il `.env` della root.

I servizi usano questi indirizzi locali:

| Servizio | Indirizzo |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth, se configurato | `http://localhost:8081` |
| API di backend | `http://localhost:8080/v1` |
| Web app | `http://localhost:3000` |
| App admin | `http://localhost:3001` |

Arresta PostgreSQL e il container delle migrazioni con:

```bash
make db-down
```

## Configurazione locale

Parti da `.env.example`: documenta le variabili disponibili e quali valori sono solo per l'uso locale. Sostituisci il suo `DATABASE_URL` legacy prima di eseguire auth, come mostrato sopra.

Le principali impostazioni locali sono:

- `MIGRATION_DATABASE_URL` per le migrazioni dello schema all'interno di Docker
- `DATABASE_URL` impostato sul ruolo `auth_app` nel `.env` della root per `make auth-dev`
- `DATABASE_URL` passato come ruolo `backend_app` per `make backend-dev`
- `AUTH_MODE` e `ALLOW_INSECURE_LOCAL_AUTH` per l'autenticazione del backend
- `BACKEND_ALLOWED_ORIGINS` per le origini locali del web e dell'admin
- `ALLOWED_REDIRECT_URIS` e `COOKIE_DOMAIN` per l'autenticazione nel browser
- i valori di Cognito e della cifratura della sessione quando provi l'OTP reale

L'Agent API fa parte del backend. Il suo documento pubblico di discovery locale è disponibile su `http://localhost:8080/v1/agent` dopo l'avvio del backend. Le operazioni protette dell'Agent API richiedono l'autenticazione `ApiKey` e non sono disponibili nel percorso `AUTH_MODE=none`.

### Funzioni AI per percorso

I comandi locali qui sopra non avviano il worker asincrono della chat. Il percorso rapido usa anche `AUTH_MODE=none`, che Chat V2 rifiuta; aggiungere una chiave OpenAI o una quota per gli ospiti non abilita l'AI in quel percorso. Il flusso Cognito completo in locale fornisce un trasporto di autenticazione supportato, ma comunque non avvia il worker.

Il deploy AWS CDK crea la Lambda del worker e configura il backend perché la invochi. Le credenziali del provider, come `OPENAI_API_KEY`, abilitano le chiamate al modello per le richieste autenticate supportate. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` abilita e limita separatamente l'AI per gli ospiti; non regola l'AI per gli utenti che hanno effettuato l'accesso né per le richieste autenticate con bearer token. Le impostazioni di Langfuse sono una configurazione di tracing facoltativa.

## Client nativi

Lo stesso repository contiene i client iOS e Android, ma i comandi locali per web e server non li compilano né li distribuiscono.

Il progetto iOS legge gli host locali di API e auth da:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Crealo dall'esempio quando serve:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Consulta il [README di iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) e il [README di Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) del repository per i rispettivi flussi di build e di test.

## La produzione usa AWS CDK

Il deploy di produzione supportato è lo stack AWS CDK incluso. È basato su AWS anziché neutrale rispetto ai fornitori e include:

- una VPC e subnet private
- PostgreSQL 18 su Amazon RDS
- OTP via email senza password con Amazon Cognito
- API Gateway e Lambda per i servizi di backend, auth e MCP
- una Lambda per il worker asincrono della chat e una Lambda come custom email sender di Cognito
- S3 e CloudFront per le app web e admin
- Secrets Manager per le credenziali di database, sessione, email, monitoraggio e quelle facoltative dell'AI
- allarmi CloudWatch, notifiche SNS e un piano di backup per RDS
- un ruolo di deploy OIDC per GitHub Actions
- script di configurazione Cloudflare per i domini pubblici

Il deploy espone `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` e `mcp.<domain>`. Può anche creare un redirect per il dominio apex quando il dominio principale non è usato per altro.

Esegui lo script di produzione da una macchina dell'operatore con:

- Node.js 24 e npm
- Bash e GNU Make
- Docker in esecuzione
- l'AWS CLI autenticata sull'account di deploy
- la GitHub CLI autenticata sul repository di destinazione
- `curl`, `jq` e Python 3

Prima del deploy, configura i valori dell'operatore nel `.env` della root. L'insieme obbligatorio comprende la regione AWS, il dominio, l'email per gli avvisi, il repository GitHub, le credenziali Cloudflare, le credenziali Resend e la configurazione Sentry del backend. Le credenziali OpenAI e Langfuse sono facoltative.

Il comando consigliato per il primo deploy, dalla root del repository, è:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

L'installazione esplicita di auth è attualmente necessaria partendo da un checkout pulito, perché lo script di deploy include quel pacchetto nel bundle ma non lo installa. Lo script crea o modifica risorse reali su AWS, Cloudflare e GitHub. Prima di eseguirlo, leggi la documentazione di deploy del repository e verifica i costi del cloud. Lo script esegue il bootstrap di CDK, fa il deploy dell'infrastruttura, esegue le migrazioni, carica gli asset web e admin, configura i record DNS pubblici `app`, `admin`, `api`, `auth` e `mcp`, a meno che tu non scelga di saltare questo passaggio, e completa la configurazione mancante di GitHub Actions.

Dopo il deploy:

1. Conferma l'iscrizione SNS inviata alla casella `ALERT_EMAIL`.
2. Configura e verifica i record DNS separati del dominio di invio di Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

Per impostazione predefinita, `first-deploy.sh` esegue `scripts/cloudflare/setup-dns.sh` per i domini pubblici dell'applicazione. Non esegue `setup-resend-domain.sh`; quest'ultimo crea i record del mittente email per `mail.<domain>` e verifica quel dominio con Resend. Se fai il deploy con `--skip-dns`, configura i record pubblici separatamente, come descritto nella guida AWS CDK.

## Portabilità dei dati

L'importazione e l'esportazione dei pacchetti dello spazio di lavoro trasferiscono solo le carte, i loro tag e i media collegati. Non trasferiscono lo storico dei ripassi, lo stato dello scheduler FSRS, le impostazioni dello spazio di lavoro, la struttura completa dei mazzi né i dati dell'account.

Considera i pacchetti un trasferimento di contenuti, non una migrazione completa dalla versione ospitata al self-hosting né un backup per il disaster recovery. Gli operatori sono responsabili del backup e del ripristino del database PostgreSQL del deploy e dello storage dei media.

## Responsabilità dell'operatore

Fare self-hosting significa che fornisci e mantieni tu:

- l'infrastruttura AWS e i relativi costi
- il DNS di Cloudflare e la configurazione del dominio
- le credenziali di invio email di Resend e i record del dominio
- la configurazione obbligatoria del monitoraggio Sentry
- le credenziali facoltative del provider AI e di Langfuse
- segreti, aggiornamenti, migrazioni, avvisi, backup e test di ripristino
- le build e la distribuzione delle app mobili native, se vuoi pubblicare tue versioni per iOS o Android

Lo stack include automazioni per molti di questi sistemi, ma richiede comunque un operatore. Docker Compose non sostituisce questa architettura di produzione.

## Documentazione di deploy del repository

- [README del repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guida al deploy del backend e del web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Guida al deploy AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infrastruttura AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
