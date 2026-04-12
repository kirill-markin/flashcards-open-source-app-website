---
title: Self-Hosting Guide
description: Fuehre Flashcards lokal mit Postgres, Auth, Backend und Web aus oder deploye den dokumentierten AWS-Stack selbst.
---

## Voraussetzungen

- Docker
- Node.js 20+
- npm
- PostgreSQL 16+ ueber das bereitgestellte Docker-Setup

## Quick Start

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Starte die Dienste danach in separaten Terminals:

```bash
make auth-dev
make backend-dev
make web-dev
```

Dadurch starten:

1. `postgres` auf Port `5432`
2. `auth` auf Port `8081`
3. `backend` auf Port `8080`
4. `web` auf Port `3000`

Lokale URLs:

- `http://localhost:3000` fuer die Web-App
- `http://localhost:8080/v1` fuer die Backend-API
- `http://localhost:8081` fuer den Auth-Service

## Konfiguration

Kopiere `.env.example` nach `.env` und passe an:

- `DATABASE_URL` — Verbindungszeichenfolge fuer Postgres
- `AUTH_MODE` — `none` fuer lokal, `cognito` fuer E-Mail-OTP-Auth
- `BACKEND_ALLOWED_ORIGINS` — erlaubte Browser-Origin fuer sitzungsbasierte API-Anfragen
- `PUBLIC_API_BASE_URL` und `PUBLIC_AUTH_BASE_URL` — optionale Overrides, wenn Discovery-Antworten benutzerdefinierte Hosts bewerben sollen

## Lokale iOS-Konfiguration

Die iOS-App im Haupt-Repository liest lokale API- und Auth-Hosts aus:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

Kopiere bei Bedarf die Beispieldatei:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

Zeige danach auf deine lokalen oder selbst gehosteten `api`- und `auth`-Domains.

## Aktualisieren

```bash
git pull
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
```

Starte die lokalen Dienste nach Aenderungen an Abhaengigkeiten neu.

## AWS-Deployment

Die dokumentierte Produktionsform ist:

- CloudFront + S3 fuer `app.<domain>`
- API Gateway + Lambda fuer `api.<domain>`
- API Gateway + Lambda fuer `auth.<domain>`
- Postgres in AWS RDS
- Cognito fuer passwortloses E-Mail-OTP
- optionaler Apex-Redirect, wenn die Root-Domain sonst ungenutzt bleibt

Details findest du in:

- [Repository README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [Deployment Guide](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/deployment.md)
- [AWS-CDK-Infrastruktur](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
