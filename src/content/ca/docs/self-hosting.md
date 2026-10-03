---
title: Guia d'autoallotjament
description: Executa Nibomo en local amb PostgreSQL, autenticació, backend, web i administració, o desplega la pila de producció documentada amb AWS CDK.
---

Nibomo admet dues vies diferents: un entorn de desenvolupament local i un desplegament de producció a AWS. Docker Compose executa PostgreSQL i les migracions per al desenvolupament local; no és el mètode de desplegament de producció.

## Requisits per al desenvolupament local

- Git
- Bash
- GNU Make
- Docker amb Docker Compose
- Node.js 24
- npm

El fitxer de Docker Compose inclòs executa actualment PostgreSQL 18.4. No cal cap instal·lació local de PostgreSQL a part.

## Inici ràpid en local

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

`make db-up` inicia PostgreSQL i executa `scripts/deploy/migrate.sh` a través del contenidor de migració. Amb les contrasenyes predeterminades copiades de `.env.example`, la migració prepara aquestes connexions locals d'execució:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- autenticació: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- informes: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Si canvies `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` o `REPORTING_DB_PASSWORD` a `.env`, fes servir la mateixa contrasenya canviada a l'URL de connexió corresponent.

### Arrencada ràpida només en local

L'objectiu de Make del backend no carrega el `.env` de l'arrel. Passa-li explícitament la configuració local que necessita:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Executa els clients en terminals separats:

```bash
make web-dev
make admin-dev
```

Aquesta via no inicia `make auth-dev` a propòsit. `AUTH_MODE=none` és un mode explícitament insegur només per a localhost; no el facis servir mai en un entorn desplegat.
Cobreix el desenvolupament del backend principal, del descobriment públic de l'Agent API, del web i de l'administració, però Chat V2 no hi està disponible.

### Flux local complet amb Cognito

L'objectiu d'autenticació carrega el `.env` de l'arrel, però el del backend no. Primer substitueix el `DATABASE_URL` antic del `.env` copiat per l'URL del rol d'autenticació i afegeix els teus valors reals de Cognito:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Inicia l'autenticació:

```bash
make auth-dev
```

Al terminal del backend, carrega explícitament `.env` i després substitueix-ne l'URL de la base de dades d'autenticació per l'URL del rol del backend per a aquest procés:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Executa `make web-dev` i `make admin-dev` cadascun al seu terminal. Tots dos objectius carreguen el `.env` de l'arrel.

Els serveis fan servir aquestes adreces locals:

| Servei | Adreça |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Autenticació, si està configurada | `http://localhost:8081` |
| API del backend | `http://localhost:8080/v1` |
| App web | `http://localhost:3000` |
| App d'administració | `http://localhost:3001` |

Atura PostgreSQL i el contenidor de migració amb:

```bash
make db-down
```

## Configuració local

Comença a partir de `.env.example`; hi trobaràs documentades les variables disponibles i quins valors són només per a l'entorn local. Substitueix-ne el `DATABASE_URL` antic abans d'executar l'autenticació, tal com s'ha mostrat més amunt.

Els principals paràmetres locals són:

- `MIGRATION_DATABASE_URL` per a les migracions de l'esquema dins de Docker
- `DATABASE_URL` definit amb el rol `auth_app` al `.env` de l'arrel per a `make auth-dev`
- `DATABASE_URL` passat amb el rol `backend_app` per a `make backend-dev`
- `AUTH_MODE` i `ALLOW_INSECURE_LOCAL_AUTH` per a l'autenticació del backend
- `BACKEND_ALLOWED_ORIGINS` per als orígens locals del web i de l'administració
- `ALLOWED_REDIRECT_URIS` i `COOKIE_DOMAIN` per a l'autenticació al navegador
- els valors de Cognito i de xifratge de sessió quan provis l'OTP real

L'Agent API forma part del backend. El seu document públic de descobriment local està disponible a `http://localhost:8080/v1/agent` un cop s'ha iniciat el backend. Les operacions protegides de l'Agent API requereixen autenticació `ApiKey` i no estan disponibles a la via amb `AUTH_MODE=none`.

### Abast de la IA segons la via

Les ordres locals anteriors no inicien el treballador asíncron del xat. La via ràpida també fa servir `AUTH_MODE=none`, que Chat V2 rebutja; afegir una clau d'OpenAI o una quota per a convidats no fa que aquesta via pugui fer servir la IA. El flux local complet amb Cognito proporciona un mecanisme d'autenticació compatible, però tampoc no inicia el treballador.

El desplegament amb AWS CDK crea la Lambda del treballador i configura el backend perquè la invoqui. Les credencials del proveïdor, com ara `OPENAI_API_KEY`, habiliten les crides al model per a les sol·licituds autenticades admeses. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` habilita i limita per separat la IA per a convidats; no controla la IA per a usuaris amb sessió iniciada ni per a sol·licituds autenticades amb token Bearer. Els paràmetres de Langfuse són una configuració opcional de traçament.

## Clients natius

El mateix repositori conté els clients d'iOS i d'Android, però les ordres locals de web i servidor no els compilen ni els distribueixen.

El projecte d'iOS llegeix els hosts locals de l'API i de l'autenticació de:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Crea'l a partir de l'exemple quan calgui:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Consulta el [README d'iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) i el [README d'Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) del repositori per als seus fluxos de compilació i de proves, que són independents.

## La producció fa servir AWS CDK

El desplegament de producció admès és la pila d'AWS CDK inclosa. Està basada en AWS, no és independent del proveïdor, i inclou:

- una VPC i subxarxes privades
- PostgreSQL 18 a Amazon RDS
- OTP per correu electrònic sense contrasenya amb Amazon Cognito
- API Gateway i Lambda per als serveis de backend, autenticació i MCP
- una Lambda de treballador asíncron del xat i una Lambda de Cognito per a l'enviament de correus personalitzats
- S3 i CloudFront per a les apps web i d'administració
- Secrets Manager per a les credencials de la base de dades, la sessió, el correu, la monitorització i, opcionalment, la IA
- alarmes de CloudWatch, notificacions de SNS i un pla de còpies de seguretat d'RDS
- un rol de desplegament OIDC per a GitHub Actions
- scripts de configuració de Cloudflare per als dominis públics

El desplegament exposa `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` i `mcp.<domain>`. També pot crear una redirecció del domini arrel quan aquest no es fa servir per a res més.

Executa l'assistent de producció des d'una màquina d'operador amb:

- Node.js 24 i npm
- Bash i GNU Make
- Docker en execució
- l'AWS CLI autenticada al compte de desplegament
- la GitHub CLI autenticada al repositori de destinació
- `curl`, `jq` i Python 3

Abans de desplegar, configura els valors de l'operador al `.env` de l'arrel. El conjunt obligatori inclou la regió d'AWS, el domini, el correu electrònic d'alertes, el repositori de GitHub, les credencials de Cloudflare, les credencials de Resend i la configuració de Sentry del backend. Les credencials d'OpenAI i de Langfuse són opcionals.

L'ordre recomanada per al primer desplegament des de l'arrel del repositori és:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Actualment, la instal·lació explícita de l'autenticació és necessària en una còpia neta del repositori, perquè l'assistent de desplegament empaqueta aquest paquet però no l'instal·la. L'assistent crea o modifica recursos reals d'AWS, Cloudflare i GitHub. Revisa la documentació de desplegament del repositori i els costos del núvol abans d'executar-lo. Inicialitza CDK, desplega la infraestructura, executa les migracions, puja els recursos de les apps web i d'administració, configura els registres DNS públics `app`, `admin`, `api`, `auth` i `mcp`, tret que s'ometi aquest pas, i completa la configuració de GitHub Actions que falti.

Després del desplegament:

1. Confirma la subscripció de SNS enviada a la bústia d'`ALERT_EMAIL`.
2. Configura i verifica, per separat, els registres DNS del domini d'enviament de Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` executa per defecte `scripts/cloudflare/setup-dns.sh` per als dominis públics de l'aplicació. No executa `setup-resend-domain.sh`; aquest últim crea els registres de remitent de correu per a `mail.<domain>` i verifica aquest domini amb Resend. Si desplegues amb `--skip-dns`, configura els registres públics per separat tal com es documenta a la guia d'AWS CDK.

## Portabilitat de les dades

La importació i l'exportació de paquets d'espai de treball només transfereix les targetes, les seves etiquetes i el contingut multimèdia relacionat. No transfereix l'historial de repassos, l'estat del planificador FSRS, la configuració de l'espai de treball, l'estructura completa de les baralles ni les dades del compte.

Tracta els paquets com una transferència de contingut, no com una migració completa d'allotjat a autoallotjat ni com una còpia de seguretat per a la recuperació davant de desastres. Els operadors són responsables de fer còpies de seguretat i restaurar la base de dades PostgreSQL desplegada i l'emmagatzematge multimèdia.

## Responsabilitats de l'operador

Autoallotjar vol dir que tu proporciones i mantens:

- la infraestructura d'AWS i els seus costos
- el DNS de Cloudflare i la configuració del domini
- les credencials d'enviament de correu de Resend i els registres del domini
- la configuració obligatòria de monitorització de Sentry
- les credencials opcionals del proveïdor d'IA i de Langfuse
- els secrets, les actualitzacions, les migracions, les alertes, les còpies de seguretat i les proves de restauració
- les compilacions i la distribució de les apps mòbils natives, si vols publicar les teves pròpies versions d'iOS o d'Android

La pila inclou automatització per a molts d'aquests sistemes, però continua necessitant un operador. Docker Compose no substitueix aquesta arquitectura de producció.

## Documentació de desplegament del repositori

- [README del repositori](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Guia de desplegament del backend i el web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Guia de desplegament d'AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [Infraestructura d'AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
