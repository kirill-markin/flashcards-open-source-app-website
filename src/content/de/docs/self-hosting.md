---
title: Self-Hosting-Leitfaden
description: Führe Flashcards lokal mit PostgreSQL, Authentifizierung, Backend, Web und Administration aus oder stelle den dokumentierten Produktions-Stack mit AWS CDK bereit.
---

Flashcards unterstützt zwei unterschiedliche Wege: eine lokale Entwicklungsumgebung und eine Produktionsbereitstellung auf AWS. Docker Compose führt PostgreSQL und Migrationen für die lokale Entwicklung aus; es ist nicht die Methode für die Produktionsbereitstellung.

## Voraussetzungen für die lokale Entwicklung

- Git
- Bash
- GNU Make
- Docker mit Docker Compose
- Node.js 24
- npm

Die bereitgestellte Docker-Compose-Datei führt derzeit PostgreSQL 18.4 aus. Eine separate lokale PostgreSQL-Installation ist nicht erforderlich.

## Lokaler Schnellstart

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

`make db-up` startet PostgreSQL und führt `scripts/deploy/migrate.sh` über den Migrationscontainer aus. Mit den aus `.env.example` kopierten Standardpasswörtern richtet die Migration diese lokalen Laufzeitverbindungen ein:

- Backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- Authentifizierung: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- Reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

Wenn du `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` oder `REPORTING_DB_PASSWORD` in `.env` änderst, verwende dasselbe neue Passwort in der entsprechenden Verbindungs-URL.

### Schneller rein lokaler Start

Das Make-Ziel für das Backend lädt die `.env`-Datei im Stammverzeichnis nicht. Übergib die erforderlichen lokalen Einstellungen ausdrücklich:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Starte die Clients in separaten Terminals:

```bash
make web-dev
make admin-dev
```

Dieser Weg startet bewusst nicht `make auth-dev`. `AUTH_MODE=none` ist ein ausdrücklich unsicherer Modus nur für localhost; verwende ihn niemals in einer bereitgestellten Umgebung.
Er deckt die Entwicklung des zentralen Backends, die öffentliche Erkennung der Agent API sowie die Web- und Admin-App ab, stellt Chat V2 jedoch nicht bereit.

### Vollständiger lokaler Cognito-Ablauf

Das Make-Ziel für die Authentifizierung lädt die `.env`-Datei im Stammverzeichnis, das Backend-Ziel dagegen nicht. Ersetze zuerst den alten Wert für `DATABASE_URL` in der kopierten `.env`-Datei durch die URL der Authentifizierungsrolle und füge deine echten Cognito-Werte hinzu:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

Starte die Authentifizierung:

```bash
make auth-dev
```

Lade im Backend-Terminal ausdrücklich `.env` und überschreibe anschließend für diesen Prozess die Authentifizierungs-Datenbank-URL mit der URL der Backend-Rolle:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

Führe `make web-dev` und `make admin-dev` in eigenen Terminals aus. Beide Ziele laden die `.env`-Datei im Stammverzeichnis.

Die Dienste verwenden diese lokalen Adressen:

| Dienst | Adresse |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Authentifizierung, sofern konfiguriert | `http://localhost:8081` |
| Backend-API | `http://localhost:8080/v1` |
| Web-App | `http://localhost:3000` |
| Admin-App | `http://localhost:3001` |

Beende PostgreSQL und den Migrationscontainer mit:

```bash
make db-down
```

## Lokale Konfiguration

Beginne mit `.env.example`. Die Datei dokumentiert die verfügbaren Variablen und gibt an, welche Werte nur für die lokale Verwendung gedacht sind. Ersetze vor dem Start der Authentifizierung wie oben gezeigt den alten Wert für `DATABASE_URL`.

Die wichtigsten lokalen Einstellungen sind:

- `MIGRATION_DATABASE_URL` für Schemamigrationen innerhalb von Docker
- `DATABASE_URL` mit der Rolle `auth_app` in der `.env`-Datei im Stammverzeichnis für `make auth-dev`
- `DATABASE_URL`, mit der Rolle `backend_app` an `make backend-dev` übergeben
- `AUTH_MODE` und `ALLOW_INSECURE_LOCAL_AUTH` für die Backend-Authentifizierung
- `BACKEND_ALLOWED_ORIGINS` für die lokalen Ursprünge der Web- und Admin-App
- `ALLOWED_REDIRECT_URIS` und `COOKIE_DOMAIN` für die Browserauthentifizierung
- die Werte für Cognito und die Sitzungsverschlüsselung beim Testen echter Einmalcodes

Die Agent API ist Teil des Backends. Ihr öffentliches lokales Erkennungsdokument ist nach dem Start des Backends unter `http://localhost:8080/v1/agent` verfügbar. Geschützte Agent-Operationen erfordern eine `ApiKey`-Authentifizierung und sind über den Weg mit `AUTH_MODE=none` nicht verfügbar.

### KI-Umfang je nach Ausführungsweg

Die oben genannten lokalen Befehle starten den asynchronen Chat-Worker nicht. Der schnelle Weg verwendet außerdem `AUTH_MODE=none`, was Chat V2 ablehnt. Durch das Hinzufügen eines OpenAI-Schlüssels oder eines Gastkontingents wird dieser Weg nicht KI-fähig. Der vollständige lokale Cognito-Ablauf stellt einen unterstützten Authentifizierungstransport bereit, startet den Worker jedoch ebenfalls nicht.

Die AWS-CDK-Bereitstellung erstellt die Worker-Lambda-Funktion und konfiguriert das Backend so, dass es sie aufruft. Anbieterzugangsdaten wie `OPENAI_API_KEY` ermöglichen Modellaufrufe für unterstützte authentifizierte Anfragen. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` aktiviert und begrenzt die KI für Gäste separat; die Variable steuert nicht die KI für angemeldete oder per Bearer-Token authentifizierte Nutzer. Langfuse-Einstellungen sind eine optionale Tracing-Konfiguration.

## Native Clients

Dasselbe Repository enthält die Clients für iOS und Android, die lokalen Web- und Serverbefehle erstellen oder verteilen diese jedoch nicht.

Das iOS-Projekt liest die lokalen API- und Authentifizierungs-Hosts aus:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Erstelle die Datei bei Bedarf aus dem Beispiel:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Die separaten Abläufe für Build und Tests sind in der [iOS-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) und der [Android-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) des Repositorys beschrieben.

## In der Produktion kommt AWS CDK zum Einsatz

Die unterstützte Produktionsbereitstellung ist der enthaltene AWS-CDK-Stack. Er basiert auf AWS, ist also nicht anbieterneutral, und umfasst:

- eine VPC und private Subnetze
- PostgreSQL 18 auf Amazon RDS
- passwortlose Einmalcodes per E-Mail mit Amazon Cognito
- API Gateway und Lambda für Backend, Authentifizierung und MCP-Dienste
- eine Lambda-Funktion für den asynchronen Chat-Worker und eine Lambda-Funktion für den benutzerdefinierten Cognito-E-Mail-Versand
- S3 und CloudFront für die Web- und Admin-App
- Secrets Manager für Datenbank, Sitzungen, E-Mail, Monitoring und optionale KI-Zugangsdaten
- CloudWatch-Alarme, SNS-Benachrichtigungen und einen RDS-Backup-Plan
- eine OIDC-Bereitstellungsrolle für GitHub Actions
- Cloudflare-Einrichtungsskripte für die öffentlichen Domains

Die Bereitstellung stellt `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` und `mcp.<domain>` bereit. Sie kann außerdem eine Weiterleitung der Stammdomain erstellen, wenn diese ansonsten nicht verwendet wird.

Führe das Produktionsskript auf einem Betreiberrechner mit folgender Ausstattung aus:

- Node.js 24 und npm
- Bash und GNU Make
- laufendes Docker
- die AWS CLI, authentifiziert für das Bereitstellungskonto
- die GitHub CLI, authentifiziert für das Ziel-Repository
- `curl`, `jq` und Python 3

Konfiguriere vor der Bereitstellung die Betreiberwerte in der `.env`-Datei im Stammverzeichnis. Erforderlich sind unter anderem AWS-Region, Domain, Benachrichtigungs-E-Mail-Adresse, GitHub-Repository, Cloudflare- und Resend-Zugangsdaten sowie die Sentry-Konfiguration für das Backend. OpenAI- und Langfuse-Zugangsdaten sind optional.

Der bevorzugte Befehl für die erste Bereitstellung aus dem Stammverzeichnis des Repositorys lautet:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Die ausdrückliche Installation des Authentifizierungspakets ist derzeit bei einem sauberen Checkout erforderlich, weil das Bereitstellungsskript dieses Paket bündelt, aber nicht installiert. Das Skript erstellt oder verändert echte Ressourcen in AWS, Cloudflare und GitHub. Prüfe vor der Ausführung die Bereitstellungsdokumentation des Repositorys und die Cloud-Kosten. Es initialisiert CDK, stellt die Infrastruktur bereit, führt Migrationen aus, lädt die Ressourcen der Web- und Admin-App hoch, konfiguriert die öffentlichen DNS-Einträge `app`, `admin`, `api`, `auth` und `mcp`, sofern dies nicht übersprungen wird, und ergänzt fehlende GitHub-Actions-Konfigurationen.

Nach der Bereitstellung:

1. Bestätige das SNS-Abonnement, das an das Postfach `ALERT_EMAIL` gesendet wurde.
2. Konfiguriere und verifiziere separat die DNS-Einträge der Resend-Versanddomain:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` führt standardmäßig `scripts/cloudflare/setup-dns.sh` für die öffentlichen Anwendungsdomains aus. Es führt nicht `setup-resend-domain.sh` aus; dieses Skript erstellt die E-Mail-Absendereinträge für `mail.<domain>` und verifiziert die Domain bei Resend. Wenn du die Bereitstellung mit `--skip-dns` ausführst, konfiguriere die öffentlichen Einträge separat wie im AWS-CDK-Leitfaden beschrieben.

## Datenportabilität

Der Paketimport und -export für Workspaces überträgt nur Karten, deren Tags und zugehörige Medien. Nicht übertragen werden der Wiederholungsverlauf, der Zustand des FSRS-Planers, Workspace-Einstellungen, vollständige Deckstrukturen oder Kontodaten.

Behandle Pakete als Übertragung von Inhalten, nicht als vollständige Migration zwischen der gehosteten und der selbst betriebenen Variante oder als Backup für die Notfallwiederherstellung. Betreiber sind dafür verantwortlich, die bereitgestellte PostgreSQL-Datenbank und den Medienspeicher zu sichern und wiederherzustellen.

## Verantwortlichkeiten des Betreibers

Beim Self-Hosting stellst du Folgendes bereit und hältst es instand:

- die AWS-Infrastruktur und deren Kosten
- die Cloudflare-DNS- und Domainkonfiguration
- Resend-Zugangsdaten für den E-Mail-Versand und die Domain-Einträge
- die erforderliche Sentry-Monitoring-Konfiguration
- optionale Zugangsdaten für KI-Anbieter und Langfuse
- Geheimnisse, Upgrades, Migrationen, Alarme, Backups und Wiederherstellungstests
- Builds und Distribution nativer mobiler Apps, wenn du eigene iOS- oder Android-Versionen veröffentlichen möchtest

Der Stack automatisiert viele dieser Systeme, benötigt aber weiterhin einen Betreiber. Docker Compose ersetzt diese Produktionsarchitektur nicht.

## Bereitstellungsdokumentation des Repositorys

- [Repository-README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Leitfaden zur Bereitstellung von Backend und Web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [Leitfaden zur AWS-CDK-Bereitstellung](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [AWS-CDK-Infrastruktur](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
