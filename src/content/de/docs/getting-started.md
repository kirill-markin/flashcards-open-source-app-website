---
title: Erste Schritte
description: Starte mit der gehosteten Web-App, verbinde einen Agenten ueber die Discovery-URL oder betreibe den Stack selbst lokal.
---

## Gehostete Web-App

Der schnellste Einstieg ist die gehostete Web-App:

1. Oeffne [app.flashcards-open-source-app.com](https://app.flashcards-open-source-app.com)
2. Melde dich mit deiner E-Mail ueber passwortloses OTP an
3. Erstelle Karten, wiederhole faellige Elemente und nutze KI-Chat mit Workspace-Daten und Dateianhaengen

Fuer den gehosteten Weg sind keine Installation und kein Server-Setup noetig.

## Agent-Setup

Wenn du Claude Code, Codex oder OpenClaw direkt verbinden willst, starte hier:

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Diese Discovery-Antwort fuehrt den Agenten durch E-Mail-OTP-Login, Erstellung eines langlebigen API-Keys, Account-Laden, Workspace-Bootstrap und die veroeffentlichte SQL-Oberflaeche.

Dieselbe Nutzlast ist auch unter `GET /v1/agent` verfuegbar, aber `/v1/` ist der kanonische oeffentliche Einstiegspunkt.

## Self-Hosting

Wenn du lieber eine eigene Instanz betreibst, sieh dir den [Self-Hosting Guide](/docs/self-hosting/) an.

## Was du heute bekommst

- Gehostete Web-App fuer Karten, Wiederholung und KI-Chat
- iOS-Client im Haupt-Repository mit lokalem SQLite und Offline-First-Sync
- Gemeinsame Backend- und Auth-Dienste auf getrennten `api`- und `auth`-Domains
- Externes Agent-Onboarding ueber Discovery, OTP und ApiKey-Authentifizierung
- Open-Source-Deployment-Pfad auf AWS mit Postgres als Source of Truth

## Projektrichtung

Das Projekt ist Offline-First.

Heute enthaelt das Repository die Web-App, die iOS-App, den Auth-Service, die Backend-API, den externen Agent-Flow und die Android-App auf Google Play.
