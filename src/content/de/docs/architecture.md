---
title: Architektur
description: Systemüberblick, öffentliche Domains, unterstützte Clients und der aktuelle Offline-First-Datenfluss.
---

## Systemüberblick

```text
iOS-App / Agent-Client         -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web-App                        -> app.<domain>  -> CloudFront -> SPA
Browser- und Agent-Auth        -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex-Weiterleitung             -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Prinzipien

1. Getrennte öffentliche Domains für `app`, `api` und `auth`
2. Postgres ist die Source of Truth
3. Der iOS-Client ist Offline-First mit lokalem SQLite und Sync
4. Web-App, iOS-App und externe Agent-Oberfläche teilen dasselbe Workspace-Modell
5. Externe Agenten starten bei `GET https://api.nibomo.com/v1/`

## Unterstützte Clients

- Web-App auf `app.nibomo.com`
- iOS-App im Haupt-Repository mit lokalem SQLite-Speicher
- Android-App bei Google Play
- Externe Agent-Clients über Discovery, OTP-Bootstrap und `Authorization: ApiKey`

## Datenmodell

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Datenfluss

### Web

1. Der Browser meldet sich über `auth.<domain>` an.
2. Die Web-App lädt Workspace-Daten von `api.<domain>`.
3. KI-Chat-Anfragen laufen über `/chat/local-turn`.
4. Review-Submissions aktualisieren beim Schreiben den Scheduler-Zustand.

### iOS

1. Die iOS-App schreibt zuerst lokal in SQLite.
2. Lokale Änderungen landen in einer Outbox.
3. Sync lädt Änderungen über `/v1/workspaces/{workspaceId}/sync/push` hoch.
4. Sync holt entfernte Updates über `/v1/workspaces/{workspaceId}/sync/pull`.
5. Die lokale Datenbank übernimmt die Änderungen und schiebt den Sync-Cursor weiter.

### Externe Agenten

1. Agenten starten mit `GET /v1/`.
2. Der OTP-Bootstrap läuft auf `auth.<domain>`.
3. Der Agent erhält einen langlebigen API-Key.
4. Der Agent lädt `/v1/agent/me`, listet Workspaces, wählt bei Bedarf einen aus und nutzt dann `/v1/agent/sql/query` und `/v1/agent/sql/execute`.

## Scheduling

Nibomo verwendet FSRS als Review-Scheduler.

Implementierungshinweise:

- Backend und iOS behalten gespiegelte FSRS-Implementierungen
- die Web-App spiegelt den Scheduling-Datenvertrag, liefert aber keine dritte Scheduler-Kopie aus
- Workspace-weite Scheduler-Einstellungen umfassen Ziel-Retention, Lernschritte, Relearning-Schritte, maximales Intervall und Fuzz
- der echte Review-Zeitstempel kommt aus `reviewedAtClient`

Für den Detailvertrag siehe [FSRS scheduling logic im Haupt-Repository](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Auth

- E-Mail-OTP über Cognito
- Shared-Domain-Session-Cookies für die gehostete Web-App
- Agent-OTP-Bootstrap auf `auth.<domain>` mit langlebigem ApiKey-Ergebnis
- `AUTH_MODE=none` für lokale Entwicklung
- `AUTH_MODE=cognito` für produktionsnahe Auth

## Deployment-Form

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres in AWS RDS

Die Apex-Domain kann auf einer separaten Marketing-Site bleiben. Wenn sie während des Bootstraps frei ist, kann die Infrastruktur sie vorübergehend auf `app.<domain>` umleiten.
