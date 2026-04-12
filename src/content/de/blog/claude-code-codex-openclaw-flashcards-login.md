---
title: "Wie du Claude Code, Codex oder OpenClaw die Anmeldung bei Flashcards ueberlassen kannst"
description: "Flashcards bietet einen Open-Source-Agent-Login-Flow rund um eine einzige Discovery-URL, E-Mail-OTP und einen langlebigen API-Key. Gib deinem Agenten einen Link, sende den 8-stelligen Code zurueck und lass ihn Konto- und Workspace-Setup abschliessen."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
---

Die meisten Login-Flows gehen immer noch davon aus, dass der Mensch jede Einrichtungsaufgabe selbst erledigt.

Login-Seite oeffnen. Auf den Code warten. Token kopieren. API-Key erstellen. In ein Tool einfuegen. Dem Agenten die Doku erklaeren. Die Sitzung reparieren, wenn etwas schiefgeht.

Genau diese Arbeit sollte eigentlich das Tool fuer dich uebernehmen.

In [Flashcards](https://flashcards-open-source-app.com/) stellen wir jetzt einen Open-Source-Agent-Login-Flow bereit, der mit genau einer Discovery-URL startet:

`https://api.flashcards-open-source-app.com/v1/`

Das ist der kanonische Einstiegspunkt. Dieselbe Nutzlast ist auch unter `https://api.flashcards-open-source-app.com/v1/agent` verfuegbar, aber der aktuelle Vertrag beginnt bei `/v1/`.

Gib diese URL an Claude Code, Codex oder OpenClaw weiter. Der Agent kann den Flow inspizieren, den E-Mail-Code anfordern, ihn verifizieren, den API-Key speichern, den Account laden und selbststaendig mit dem Workspace-Setup fortfahren.

Der Mensch muss nur zwei Dinge tun:

- die E-Mail-Adresse teilen
- den neuesten 8-stelligen Code aus der E-Mail schicken

Genau darum geht es.

## Ein Link reicht

Der Discovery-Endpunkt liefert Servicebeschreibung, Auth-Modell, erste Aktion und Hinweise fuer den naechsten Schritt in derselben Antwort.

Statt fuer jedes Tool eigene Onboarding-Texte zu schreiben, kannst du den Agenten einfach auf diese URL zeigen lassen und den Anweisungen folgen lassen.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Auf hoher Ebene lernt der Agent sofort:

- dies ist der Flashcards-Dienst
- Login und Registrierung laufen ueber E-Mail-OTP
- erfolgreiche Verifikation liefert einen langlebigen API-Key
- nach dem Login folgt Account- und Workspace-Bootstrap

## So sieht der Flow aus

Die Sequenz ist absichtlich klein:

1. Der Agent ruft den Discovery-Endpunkt auf.
2. Der Agent sendet die E-Mail des Nutzers an `send-code`.
3. Flashcards verschickt den 8-stelligen Code und liefert ein `otpSessionToken`.
4. Der Agent bittet den Nutzer um diesen neuesten Code.
5. Der Agent verifiziert den Code und erhaelt einen langlebigen API-Key.
6. Der Agent ruft `/v1/agent/me` und `/v1/agent/workspaces` auf.
7. Der Agent erstellt oder waehlt den richtigen Workspace und macht dann ueber `/v1/agent/sql` weiter.

Wichtig ist: Der Agent stoppt nicht bei "Login erfolgreich". Er kann mit dem restlichen Setup und echten Lese- und Schreibvorgaengen weitermachen.

## Beispiel-Prompt fuer Claude Code oder Codex

Das reicht:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

Danach musst du den Auth-Ablauf nicht mehr manuell erklaeren. Der Endpunkt macht das bereits selbst.

## Die ersten Requests

Der erste Aufruf:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

Danach startet der Agent den OTP-Schritt:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

Sobald der Nutzer den neuesten Code schickt, kann der Agent die Anmeldung abschliessen:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Claude Code on MacBook"
  }'
```

Die erfolgreiche Antwort liefert einen langlebigen API-Key. Speichere ihn sofort ausserhalb des Chat-Speichers:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## Was danach passiert

Nach der Verifikation wechselt der Agent von Auth-Denken zu echter Account-Arbeit:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Falls kein passender Workspace existiert, `POST /v1/agent/workspaces`
4. Falls noetig, `POST /v1/agent/workspaces/{workspaceId}/select`
5. Danach `POST /v1/agent/sql`

Damit ist die URL nicht nur ein Login-Einstieg, sondern der Beginn eines durchgaengigen Flows, in dem dein Agent direkt in deinem Flashcards-Konto weiterarbeiten kann.
