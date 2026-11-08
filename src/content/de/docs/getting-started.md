---
title: Erste Schritte
description: Starte mit der App fuer iPhone, iPad, Mac oder Android, der Web-App, einem KI-Agenten oder deinem eigenen Server.
---

Es gibt mehrere Wege zum Einstieg, sortiert nach Beliebtheit:

- **App fuer iPhone, iPad und Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App fuer Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Gehostete Web-App**: [app.nibomo.com](https://app.nibomo.com)
- **KI-Agenten**: der [MCP-Connector](/docs/mcp-connector/) oder die API unter `https://api.nibomo.com/v1/`
- **Self-Hosting**: der [Self-Hosting-Leitfaden](/docs/self-hosting/)

## Mobil- und Desktop-Apps

Installiere die native App fuer dein Geraet:

- iPhone, iPad und Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Die Apps speichern deine Karten auf dem Geraet, sodass du offline wiederholen kannst, und synchronisieren, sobald du wieder online bist. Du kannst als Gast starten und dich spaeter anmelden.

### Widgets fuer den Home-Bildschirm

Die Nibomo-App bringt ein Wiederholen-Widget auf iPhone, iPad, Mac und Android. Es gibt drei Groessen:

- **Klein**: wie viele Karten faellig sind und deine Lernserie
- **Mittel**: wie viele Karten faellig sind und die Frage deiner naechsten Karte
- **Gross**: wie viele Karten faellig sind, deine naechste Frage und deine Lernserie

Wenn nichts faellig ist, zeigt das Widget "Alles erledigt" und wann die naechste Karte faellig ist. Eine Antwort zeigt es nie. Tippe auf das Widget, um Wiederholen zu oeffnen; ein mittleres oder grosses Widget oeffnet Wiederholen direkt bei der angezeigten Karte. Widgets sind fuer alle kostenlos, auch fuer Gaeste.

Auf dem iPhone, iPad oder Mac oeffnest du zum Hinzufuegen die Widget-Galerie, waehlst Nibomo und dann eine Groesse. Auf Android fuegst du das Nibomo-Widget aus der Widget-Liste hinzu und aenderst dann seine Groesse; das Layout passt sich der Groesse an.

## Gehostete Web-App

Der schnellste Einstieg ist die gehostete Web-App:

1. Oeffne [app.nibomo.com](https://app.nibomo.com)
2. Melde dich mit deiner E-Mail ueber passwortloses OTP an
3. Erstelle Karten, wiederhole faellige Elemente und nutze KI-Chat mit Workspace-Daten und Dateianhaengen

Fuer den gehosteten Weg sind keine Installation und kein Server-Setup noetig.

## Agent-Setup

MCP-Clients wie Claude, ChatGPT und Cursor koennen sich ueber die [Anleitung zum MCP-Connector](/docs/mcp-connector/) verbinden.

Wenn du Claude Code, Codex oder OpenClaw direkt verbinden willst, starte hier:

```text
GET https://api.nibomo.com/v1/
```

Diese Discovery-Antwort fuehrt den Agenten durch E-Mail-OTP-Login, Erstellung eines langlebigen API-Keys, Account-Laden, Workspace-Bootstrap und die veroeffentlichte SQL-Oberflaeche.

Dieselbe Nutzlast ist auch unter `GET /v1/agent` verfuegbar, aber `/v1/` ist der kanonische oeffentliche Einstiegspunkt.

## Self-Hosting

Wenn du lieber eine eigene Instanz betreibst, sieh dir den [Self-Hosting-Leitfaden](/docs/self-hosting/) an.

## Was du heute bekommst

- Gehostete Web-App fuer Karten, Wiederholung und KI-Chat
- Native Apps fuer iPhone, iPad, Mac und Android mit lokalem SQLite-Speicher und Offline-First-Sync
- Gemeinsame Backend- und Auth-Dienste auf getrennten `api`- und `auth`-Domains
- Externes Agent-Onboarding ueber Discovery, OTP und ApiKey-Authentifizierung
- Open-Source-Deployment-Pfad auf AWS mit Postgres als Source of Truth

## Projektrichtung

Das Projekt ist Offline-First.

Heute enthaelt das Repository die Web-App, die iOS-App, den Auth-Service, die Backend-API, den externen Agent-Flow und die Android-App auf Google Play.
