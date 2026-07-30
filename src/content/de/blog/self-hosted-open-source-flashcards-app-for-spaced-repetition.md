---
title: "Selbst gehostete Open-Source-Lernkarten-App für Spaced Repetition"
description: "Betreibe den Open-Source-Stack von Flashcards zur Entwicklung lokal oder stelle die dokumentierte Produktionsinfrastruktur mit AWS CDK bereit."
date: "2026-03-08"
updated: "2026-07-30"
image: "/home/app-screens-showcase-de.png"
keywords:
  - "Open-Source-Lernkarten-App"
  - "selbst gehostete Lernkarten-App"
  - "Spaced-Repetition-App"
  - "Anki-Alternative"
  - "Quizlet-Alternative"
  - "KI-Lernkarten"
---

Ja, Flashcards kann selbst gehostet werden. Der vollständige Anwendungs- und Infrastrukturcode steht unter der MIT-Lizenz als Open Source zur Verfügung. Du kannst die Dienste zur Entwicklung lokal ausführen oder den dokumentierten Produktions-Stack des Repositorys auf AWS bereitstellen. Wenn du keine Infrastruktur betreiben möchtest, steht weiterhin die [gehostete App](https://app.flashcards-open-source-app.com/) zur Verfügung.

![Mobile Ansichten der Flashcards Open Source App für Wiederholungen, Fortschritt, KI-Chat und Karten](/home/app-screens-showcase-de.png)

## Was selbst gehostet werden kann

Das Repository enthält die Dienste und die Infrastruktur des zentralen Flashcards-Systems:

- die Web-App und die Admin-App
- die Backend-API und den Dienst für passwortlose Authentifizierung
- PostgreSQL-Schema, Migrationen, Synchronisierung und FSRS-basierte Wiederholungsplanung
- den MCP-Server und die maschinenlesbare Agent API
- den AWS-CDK-Stack für Netzwerk, Datenbank, Authentifizierung, APIs, statisches Webhosting, Geheimnisse, Backups, Monitoring und CI/CD

Es enthält außerdem native Clients für iOS und Android. Diese Apps werden separat erstellt; durch die Bereitstellung des AWS-Stacks werden nicht automatisch eigene Versionen im App Store oder bei Google Play veröffentlicht.

Es gibt zwei unterstützte Möglichkeiten, den serverseitigen Stack auszuführen:

1. **Lokale Entwicklung:** Docker Compose führt PostgreSQL und den Migrationsauftrag aus. Die Skripte des Repositorys starten die Entwicklungsserver für Authentifizierung, Backend, Web und Administration auf dem Host.
2. **Produktion auf AWS:** Der enthaltene CDK-Stack stellt die dokumentierte AWS-Architektur bereit und bindet deren öffentliche Domains über Cloudflare an.

Docker Compose ist keine Produktionsbereitstellung mit nur einem Befehl. Der Produktionsweg ist AWS-spezifisch, und das Projekt erhebt keinen Anspruch auf anbieterneutrale Infrastruktur.

## Was das Repository derzeit enthält

Das Projekt ist mehr als ein eigenständiger Lernkarten-Editor. Das aktuelle Repository enthält:

- einen React-Webclient und einen Admin-Client
- native iOS-Clients mit SwiftUI und Android-Clients mit Jetpack Compose
- Offline-First-Speicherung und Synchronisierung für die Clients der Nutzer
- Karten mit Vorder- und Rückseite, Tags, zugehörige Medien und Wiederholungen mit FSRS
- passwortlose Einmalcodes per E-Mail über Amazon Cognito und den Authentifizierungsdienst
- einen KI-Chat mit einem bereitgestellten asynchronen Worker und vom Betreiber bereitgestellten Modellzugangsdaten
- einen MCP-Endpunkt für kompatible KI-Clients
- eine Agent API für Terminalwerkzeuge und andere automatisierte Abläufe

Die [Architekturdokumentation](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md) ist die beste Quelle für die aktuellen Dienstgrenzen. Der öffentliche [API-Leitfaden](/docs/api/) erklärt den Einstiegspunkt der gehosteten Agent API.

## Gehostet oder selbst betrieben

| Bereich | Gehostete App | Selbst betriebene Bereitstellung |
| --- | --- | --- |
| Ersteinrichtung | App öffnen und anmelden | Konten, Geheimnisse und Domains konfigurieren und den AWS-Stack bereitstellen |
| Infrastruktur | Vom Flashcards-Projekt betrieben | In deinen AWS- und Cloudflare-Konten von dir betrieben |
| Datenbank und Backups | Werden für dich verwaltet | RDS, Backup-Richtlinie, Migrationen und Wiederherstellung liegen in deiner Verantwortung |
| Authentifizierung und E-Mail | Werden für dich verwaltet | Cognito sowie deine Zugangsdaten für den E-Mail-Versand und DNS |
| KI | Verwendet die Konfiguration des gehosteten Dienstes | Verwendet den bereitgestellten Worker und deine Modellzugangsdaten; Gastzugriffe haben ein eigenes Kontingent |
| Monitoring | Wird für dich verwaltet | CloudWatch/SNS und deine Sentry-Konfiguration |
| Aktualisierungen | Werden vom gehosteten Dienst ausgeliefert | Du lädst Aktualisierungen, prüfst sie, stellst sie bereit und überwachst sie |
| Kosten | Es gelten die Bedingungen des gehosteten Tarifs | Du bezahlst AWS und andere Anbieter direkt |

Beim Self-Hosting kontrollierst du die Bereitstellung und die Datenbank. Gleichzeitig bist du für Sicherheitsupdates, Geheimnisse, Verfügbarkeit, Backups, E-Mail-Versand, Monitoring und Cloud-Kosten verantwortlich.

## Voraussetzungen und lokaler Schnellstart

Für die lokale Entwicklung sind derzeit Git, Bash, GNU Make, Docker mit Docker Compose, Node.js 24 und npm erforderlich. Die bereitgestellte Compose-Datei führt PostgreSQL 18.4 aus und wendet die Datenbankmigrationen an.

Vom Stammverzeichnis des Repositorys aus:

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

Für den kürzesten rein lokalen Start führst du das Backend mit der von der Migration erstellten Rolle aus und aktivierst ausdrücklich die unsichere lokale Authentifizierung:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

Starte anschließend die Clients in separaten Terminals:

```bash
make web-dev
make admin-dev
```

Dabei wird der Cognito-Authentifizierungsdienst bewusst nicht gestartet. Der [Self-Hosting-Leitfaden](/docs/self-hosting/) enthält die getrennten Datenbank-URLs und die Schritte zum Laden der Umgebungsvariablen für einen vollständigen Cognito-Ablauf mit `make auth-dev`. Die Web-App läuft unter `http://localhost:3000`, die Admin-App unter `http://localhost:3001`, das Backend unter `http://localhost:8080/v1` und die Cognito-Authentifizierung, sofern konfiguriert, unter `http://localhost:8081`.

Dieser Schnellstart deckt die Entwicklung des zentralen Backends sowie der Web- und Admin-App ab. Chat V2 ist damit nicht verfügbar: Der Transport `AUTH_MODE=none` wird von diesen Routen nicht akzeptiert, und die lokalen Befehle starten den asynchronen Chat-Worker nicht.

Verwende für die Produktion statt Docker Compose den Ablauf für die erste Bereitstellung aus dem Repository:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

Die ausdrückliche Installation des Authentifizierungspakets ist derzeit bei einem sauberen Checkout erforderlich, weil das Bereitstellungsskript dieses Paket bündelt, aber nicht installiert. Anschließend erstellt und aktualisiert das Skript echte Cloud-Ressourcen. Lies vor der Ausführung den [Leitfaden zur Bereitstellung von Backend und Web](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md) und den [Leitfaden zur AWS-CDK-Bereitstellung](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md).

## Datenportabilität ist nützlich, aber bewusst begrenzt

Der Paketimport und -export von Flashcards umfasst Karten, deren Tags und zugehörige Medien. **Nicht** übertragen werden der Wiederholungsverlauf, der Zustand des FSRS-Planers, Workspace-Einstellungen, vollständige Deckstrukturen oder Kontodaten.

Dieser Unterschied ist wichtig, wenn du zwischen dem gehosteten Dienst und deiner eigenen Bereitstellung wechselst. Das portable Paket dient der Übertragung von Inhalten, nicht als vollständige Datenbank- oder Kontomigration. Für ein vollständiges betriebliches Backup muss der Betreiber einer selbst gehosteten Instanz auch die vom AWS-Stack erstellte PostgreSQL-Datenbank und den Medienspeicher verwalten.

## KI und Zugangsdaten externer Dienste

Der Quellcode enthält keine Cloud-Konten, Modellguthaben oder Produktionszugangsdaten. Der Betreiber einer selbst gehosteten Instanz stellt die erforderliche Konfiguration bereit:

- AWS-Zugangsdaten und ein AWS-Konto für den CDK-Stack
- eine Domain und Cloudflare-Zugangsdaten für die dokumentierte DNS-Einrichtung
- Resend-Zugangsdaten für den E-Mail-Versand
- eine Sentry-Konfiguration für das erforderliche Backend-Monitoring
- optionale OpenAI- und Langfuse-Zugangsdaten für KI und Tracing
- eine GitHub-Konfiguration für den enthaltenen Bereitstellungsablauf

KI ist bei der AWS-Bereitstellung optional. Der CDK-Stack stellt den asynchronen Chat-Worker bereit, und Modellzugangsdaten ermöglichen unterstützte authentifizierte KI-Anfragen. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` steuert separat die KI-Nutzung durch Gäste; die Variable ist kein globaler Schalter für die KI-Nutzung angemeldeter oder per Bearer-Token authentifizierter Nutzer. Wenn du MCP oder einen anderen externen KI-Client verbindest, können die in einer Anfrage enthaltenen Kartendaten von diesem externen Anbieter nach dessen Bedingungen verarbeitet werden. Das Self-Hosting der Datenbank hält solche Anfragen nicht innerhalb deiner Infrastruktur.

## Ehrliche Beta- und Betriebsgrenzen

Flashcards ist noch ein junges Produkt. Das Repository wird aktiv weiterentwickelt, Migrationen und Bereitstellungskonfiguration können sich ändern, und Self-Hosting setzt voraus, dass du eine AWS-Anwendung betreiben kannst.

Der CDK-Stack enthält Backups, Alarme, Geheimnisse und Automatisierung für die Bereitstellung, aber diese Komponenten benötigen weiterhin einen Betreiber. Du solltest damit rechnen:

- Infrastrukturänderungen vor der Bereitstellung zu prüfen
- Releases und Prüfungen öffentlicher Endpunkte zu überwachen
- Alarmabonnements und die DNS-Einträge der E-Mail-Domain zu bestätigen
- Zugangsdaten zu schützen und zu rotieren
- Wiederherstellungen zu testen und AWS-Kosten einzuplanen
- native mobile Apps separat zu erstellen und zu verteilen, wenn du eigene Versionen veröffentlichen möchtest

Wenn dir diese Betriebsarbeit keinen Nutzen bringt, ist die gehostete App der einfachere Weg.

## Ein kurzer Vergleich mit Anki und Quizlet

Anki ist eine ausgereifte Open-Source-Lösung mit einem großen Ökosystem und leistungsfähigen Desktop-Abläufen. Quizlet ist ein verwalteter Dienst für Endverbraucher und ermöglicht Lernen mit wenig Einrichtungsaufwand. Beide können die richtige Wahl sein, je nachdem, ob du ein etabliertes lokales Werkzeug oder eine vollständig verwaltete Plattform bevorzugst.

Flashcards verfolgt einen anderen Weg: ein offenes Repository für Web, mobile Apps, API und Infrastruktur rund um FSRS, Synchronisierung, KI-Abläufe, MCP und eine Self-Hosting-Option auf AWS. Das Projekt ist jünger als Anki und erfordert beim Self-Hosting erheblich mehr Betriebsaufwand als Quizlet. Du solltest es wählen, wenn diese Kombination zu deinen Anforderungen passt, und nicht, weil alle Lernenden einen Cloud-Stack betreiben sollten.

## Probiere die gehostete App aus oder betreibe deinen eigenen Stack

- [Die gehostete App öffnen](https://app.flashcards-open-source-app.com/)
- [Den Self-Hosting-Leitfaden lesen](/docs/self-hosting/)
- [Den Quellcode auf GitHub ansehen](https://github.com/kirill-markin/flashcards-open-source-app)

Verwende die gehostete Version, wenn du lernen möchtest, ohne Infrastruktur zu warten. Wähle den selbst betriebenen Weg, wenn dir die Kontrolle über die Bereitstellung den Aufwand für AWS, DNS, E-Mail, Monitoring und Aktualisierungen wert ist.
