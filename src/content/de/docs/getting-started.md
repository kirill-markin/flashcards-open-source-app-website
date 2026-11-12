---
title: Erste Schritte
description: Starte mit der App für iPhone, iPad, Mac oder Android, der Web-App, einem KI-Agenten oder deinem eigenen Server.
---

Es gibt mehrere Wege zum Einstieg, sortiert nach Beliebtheit:

- **App für iPhone, iPad und Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App für Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Gehostete Web-App**: [app.nibomo.com](https://app.nibomo.com)
- **KI-Agenten**: der [MCP-Connector](/docs/mcp-connector/) oder die API unter `https://api.nibomo.com/v1/`
- **Self-Hosting**: der [Self-Hosting-Leitfaden](/docs/self-hosting/)

## Mobil- und Desktop-Apps

Installiere die native App für dein Gerät:

- iPhone, iPad und Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Die Apps speichern deine Karten auf dem Gerät, sodass du offline wiederholen kannst, und synchronisieren, sobald du wieder online bist. Du kannst als Gast starten und dich später anmelden.

### Widgets für den Home-Bildschirm

Die Nibomo-App bringt ein Wiederholen-Widget auf iPhone, iPad, Mac und Android. Es gibt drei Größen:

- **Klein**: wie viele Karten fällig sind und deine Lernserie
- **Mittel**: wie viele Karten fällig sind und die Frage deiner nächsten Karte
- **Groß**: wie viele Karten fällig sind, deine nächste Frage und deine Lernserie

Wenn nichts fällig ist, zeigt das Widget "Alles erledigt" und wann die nächste Karte fällig ist. Eine Antwort zeigt es nie. Tippe auf das Widget, um Wiederholen zu öffnen; ein mittleres oder großes Widget öffnet Wiederholen direkt bei der angezeigten Karte. Widgets sind für alle kostenlos, auch für Gäste.

Acht weitere Widgets zeigen deinen Lernfortschritt: „Aktivität“, „Jahr“, „Heute“, „Wiederholungen“, „Serien“, „Kalender“, „Demnächst“ und „Übersicht“. Auf dem iPhone und iPad kannst du außerdem das Widget „Fällige Karten“ auf den Sperrbildschirm legen; der [Widget-Leitfaden](/blog/flashcard-widget/) zeigt jedes davon.

Auf dem iPhone, iPad oder Mac öffnest du zum Hinzufügen die Widget-Galerie, wählst Nibomo und dann eine Größe. Auf Android fügst du ein Nibomo-Widget aus der Widget-Liste hinzu und änderst dann seine Größe; das Layout passt sich der Größe an.

## Gehostete Web-App

Der schnellste Einstieg ist die gehostete Web-App:

1. Öffne [app.nibomo.com](https://app.nibomo.com)
2. Melde dich mit deiner E-Mail über passwortloses OTP an
3. Erstelle Karten, wiederhole fällige Elemente und nutze KI-Chat mit Workspace-Daten und Dateianhängen

Für den gehosteten Weg sind keine Installation und kein Server-Setup nötig.

## Nimm deine Karteikarten mit

Hast du schon Karten in Quizlet, Anki oder einer anderen App? Öffne **Bibliothek > Import** und lies die [Anleitung zum Importieren von Karteikarten](/docs/import-flashcards/). Dort findest du das passende Format und erfährst, was übernommen wird.

## Agent-Setup

MCP-Clients wie Claude, ChatGPT und Cursor können sich über die [Anleitung zum MCP-Connector](/docs/mcp-connector/) verbinden.

Wenn du Claude Code, Codex oder OpenClaw direkt verbinden willst, starte hier:

```text
GET https://api.nibomo.com/v1/
```

Diese Discovery-Antwort führt den Agenten durch E-Mail-OTP-Login, Erstellung eines langlebigen API-Keys, Account-Laden, Workspace-Bootstrap und die veröffentlichte SQL-Oberfläche.

Dieselbe Nutzlast ist auch unter `GET /v1/agent` verfügbar, aber `/v1/` ist der kanonische öffentliche Einstiegspunkt.

## Self-Hosting

Wenn du lieber eine eigene Instanz betreibst, sieh dir den [Self-Hosting-Leitfaden](/docs/self-hosting/) an.

## Was du heute bekommst

- Gehostete Web-App für Karten, Wiederholung und KI-Chat
- Native Apps für iPhone, iPad, Mac und Android mit lokalem SQLite-Speicher und Offline-First-Sync
- Gemeinsame Backend- und Auth-Dienste auf getrennten `api`- und `auth`-Domains
- Externes Agent-Onboarding über Discovery, OTP und ApiKey-Authentifizierung
- Open-Source-Deployment-Pfad auf AWS mit Postgres als Source of Truth

## Projektrichtung

Das Projekt ist Offline-First.

Heute enthält das Repository die Web-App, die iOS-App, den Auth-Service, die Backend-API, den externen Agent-Flow und die Android-App auf Google Play.
