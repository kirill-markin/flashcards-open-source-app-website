---
title: "Wie du Claude Code, Codex oder OpenClaw die Flashcards-Anmeldung für dich erledigen lässt"
description: "Flashcards bietet einen Open-Source-Agent-Login-Ablauf mit einer einzigen Discovery-URL, E-Mail-OTP und einem langlebigen API-Key. Gib deinem Agenten einen Link, schick den 8-stelligen Code zurück und lass ihn Konto- und Workspace-Setup selbst abschließen."
date: "2026-03-10"
keywords:
  - "claude code login"
  - "codex login"
  - "email otp api"
  - "agent onboarding"
  - "open source flashcards app"
  - "open source api authentication"
---

Die meisten Login-Abläufe gehen noch immer davon aus, dass der Mensch die komplette Einrichtung von Hand erledigt.

Login-Seite öffnen. Auf den Code warten. Das Token kopieren. Einen API-Key erzeugen. Ihn in ein Tool einfügen. Dem Agenten die Doku erklären. Die Sitzung reparieren, wenn etwas schiefläuft.

Genau diese Arbeit sollte ein Tool dir eigentlich abnehmen.

In [Flashcards](https://flashcards-open-source-app.com/) stellen wir jetzt einen Open-Source-Agent-Login-Ablauf bereit, der mit genau einer Discovery-URL beginnt:

`https://api.flashcards-open-source-app.com/v1/`

Das ist der kanonische Einstiegspunkt. Dieselbe Discovery-Antwort ist auch unter `https://api.flashcards-open-source-app.com/v1/agent` verfügbar, aber der aktuelle Vertrag startet bei `/v1/`.

Gib diese URL an Claude Code, Codex oder OpenClaw weiter. Der Agent kann den Ablauf prüfen, den E-Mail-Code anfordern, ihn verifizieren, den API-Key speichern, das Konto laden und anschließend eigenständig mit dem Workspace-Setup weitermachen.

Der Mensch muss nur zwei Dinge tun:

- die E-Mail-Adresse nennen
- den neuesten 8-stelligen Code aus der E-Mail zurückschicken

Genau das ist der Punkt.

## Ein Link reicht

Der Discovery-Endpunkt liefert in derselben Antwort die Service-Beschreibung, das Auth-Modell, die erste Aktion und die Anweisungen für die nächsten Schritte.

Statt also für jedes Tool eigene Onboarding-Texte zu schreiben, kannst du den Agenten einfach auf diese URL verweisen und ihn den zurückgegebenen Anweisungen folgen lassen.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Auf hoher Ebene lernt der Agent sofort vier Dinge:

- dies ist der Flashcards-Dienst
- Login und Registrierung laufen beide über E-Mail-OTP
- eine erfolgreiche Verifizierung liefert einen langlebigen API-Key
- nach dem Login folgt die Einrichtung von Konto und Workspace

## Wie der Ablauf aussieht

Die Sequenz ist absichtlich klein.

1. Der Agent ruft den Discovery-Endpunkt auf.
2. Der Agent sendet die E-Mail-Adresse des Nutzers an `send-code`.
3. Flashcards verschickt den 8-stelligen Code und gibt ein `otpSessionToken` zurück.
4. Der Agent bittet den Nutzer um diesen neuesten Code.
5. Der Agent verifiziert den Code und erhält einen langlebigen API-Key.
6. Der Agent ruft `/v1/agent/me` und `/v1/agent/workspaces` auf.
7. Der Agent erstellt den richtigen Workspace oder wählt ihn aus und macht dann über `/v1/agent/sql` weiter.

Das ist wichtig, weil der Agent nicht bei "Login erfolgreich" stehen bleibt. Er kann den restlichen Einrichtungsablauf direkt fortsetzen und anschließend echte Lese- und Schreibvorgänge ausführen.

## Beispiel-Prompt für Claude Code oder Codex

Das reicht:

```text
Use this Flashcards discovery URL:
https://api.flashcards-open-source-app.com/v1/

Log in to my Flashcards account, load account context, and select or create the correct workspace.
Ask me only for the latest 8-digit email code when the flow requires it.
```

Danach musst du die Auth-Sequenz nicht mehr selbst erklären. Der Endpunkt tut das bereits.

## Beispiel-Prompt für OpenClaw

Gleiche Idee, nur etwas expliziter:

```text
Connect my Flashcards account using this URL:
https://api.flashcards-open-source-app.com/v1/

Follow the returned instructions, keep the API key secure, load my account, then continue to workspace setup.
If verification is needed, ask me for the latest 8-digit code from the email.
```

## Beispiel: Discovery-Antwort

Das ist der erste Request:

```bash
curl https://api.flashcards-open-source-app.com/v1/
```

Die Antwort ist so aufgebaut, dass Terminal-Agenten ihr ohne Rätselraten folgen können:

```json
{
  "ok": true,
  "data": {
    "service": {
      "name": "flashcards-open-source-app",
      "version": "v1",
      "description": "Offline-first flashcards service with user-owned workspaces and a compact SQL agent surface."
    },
    "authentication": {
      "type": "email_otp_then_api_key",
      "sendCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/send-code",
      "verifyCodeUrl": "https://auth.flashcards-open-source-app.com/api/agent/verify-code"
    },
    "capabilitiesAfterLogin": [
      "Load account context",
      "Select a workspace",
      "Inspect the published SQL surface through OpenAPI and SQL introspection",
      "Read and write cards and decks through /agent/sql"
    ],
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "surface": {
      "accountUrl": "https://api.flashcards-open-source-app.com/v1/agent/me",
      "workspacesUrl": "https://api.flashcards-open-source-app.com/v1/agent/workspaces",
      "sqlUrl": "https://api.flashcards-open-source-app.com/v1/agent/sql"
    }
  },
  "instructions": "Start with POST https://auth.flashcards-open-source-app.com/api/agent/send-code using the user's email, then POST https://auth.flashcards-open-source-app.com/api/agent/verify-code to obtain an API key. After login, call GET https://api.flashcards-open-source-app.com/v1/agent/me, then GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100. If no workspace is selected for this API key, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select or create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After workspace bootstrap, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for all shared card and deck reads and writes. Use https://api.flashcards-open-source-app.com/v1/agent/openapi.json for the full contract. The SQL surface is intentionally limited and is not full PostgreSQL.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

## Beispiel: Den E-Mail-Code anfordern

Sobald der Agent die E-Mail-Adresse des Nutzers kennt, startet er den OTP-Schritt:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com"
  }'
```

Der Server verschickt die E-Mail und liefert eine kurzlebige Verifizierungs-Session zurück:

```json
{
  "ok": true,
  "data": {
    "email": "you@example.com",
    "otpSessionToken": "...",
    "expiresInSeconds": 180,
    "authBaseUrl": "https://auth.flashcards-open-source-app.com",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1"
  },
  "instructions": "A verification code has been sent to the user's email. Ask for the 8-digit code from the email, then call verify_code with code, otpSessionToken, and a label for this agent connection. Read payload from data.* and do not expect resource fields at the top level. Select the next endpoint from instructions and confirm it with actions.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

An dieser Stelle pausiert der Agent nur so lange, bis er nach dem neuesten Code aus dem Posteingang fragen kann.

## Beispiel: Den Code verifizieren und den API-Key erhalten

Sobald der Nutzer den E-Mail-Code zurückgeschickt hat, kann der Agent den Login abschließen:

```bash
curl -X POST https://auth.flashcards-open-source-app.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code": "12345678",
    "otpSessionToken": "...",
    "label": "Claude Code on MacBook"
  }'
```

Eine erfolgreiche Verifizierung liefert einen langlebigen API-Key plus die Anweisungen für den nächsten Schritt:

```json
{
  "ok": true,
  "data": {
    "apiKey": "fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS",
    "authorizationScheme": "ApiKey",
    "apiBaseUrl": "https://api.flashcards-open-source-app.com/v1",
    "connection": {
      "connectionId": "connection-1",
      "label": "codex-import-bot",
      "createdAt": "2026-03-11T08:55:00.000Z",
      "lastUsedAt": null,
      "revokedAt": null
    }
  },
  "instructions": "Store this API key outside chat memory now. Use it in the Authorization header as 'ApiKey <key>'. Next call GET /v1/agent/me to load account context. Then call GET /v1/agent/workspaces?limit=100. If exactly one workspace exists, select it if needed. If no workspace exists, create one with POST /v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST /v1/agent/sql for all data access. Use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

An diesem Punkt hört der Agent auf, über Auth nachzudenken, und beginnt, das Konto tatsächlich zu benutzen.

Speichere diesen Schlüssel sofort außerhalb des Chat-Speichers. Das sauberste Muster ist, ihn einmal als Umgebungsvariable zu exportieren und den Agenten ihn wiederverwenden zu lassen:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## Beispiel: Konto laden und mit Workspaces weitermachen

Der nächste Request ist ein normaler authentifizierter API-Aufruf:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

Die Antwort sagt dem Agenten, dass er mit der Workspace-Einrichtung weitermachen soll:

```json
{
  "ok": true,
  "data": {
    "userId": "user-123",
    "selectedWorkspaceId": null,
    "authTransport": "api_key",
    "profile": {
      "email": "you@example.com",
      "locale": "en",
      "createdAt": "2026-03-10T12:00:00.000Z"
    }
  },
  "instructions": "Next call GET https://api.flashcards-open-source-app.com/v1/agent/workspaces?limit=100 to inspect available workspaces for this API key. If data.nextCursor is not null, continue with the same endpoint and cursor=data.nextCursor until it becomes null. If no workspace is selected, call POST https://api.flashcards-open-source-app.com/v1/agent/workspaces/{workspaceId}/select. If no workspace exists, create one with POST https://api.flashcards-open-source-app.com/v1/agent/workspaces using {\"name\":\"Personal\"}. After a workspace is selected, use POST https://api.flashcards-open-source-app.com/v1/agent/sql for reads, writes, and SQL introspection. Read payload from data.* and use docs.openapiUrl for the full contract.",
  "docs": {
    "openapiUrl": "https://api.flashcards-open-source-app.com/v1/agent/openapi.json"
  }
}
```

Von dort aus kann der Agent:

- alle Workspaces laden
- den ersten Workspace anlegen, falls noch keiner existiert
- den richtigen Workspace auswählen, falls es mehrere gibt
- den veröffentlichten Vertrag unter `/v1/agent/openapi.json` prüfen
- `POST /v1/agent/sql` für Lesevorgänge, Schreibvorgänge und SQL-Introspektion verwenden

Genau dadurch ist der Login-Ablauf in der Praxis nützlich und nicht nur technisch korrekt.

Die Alias-Spezifikationen unter `/v1/openapi.json` und `/v1/swagger.json` gibt es ebenfalls, aber die agentenspezifischen Doku-Links zeigen bewusst auf `/v1/agent/openapi.json` und `/v1/agent/swagger.json`.

## Warum das besser ist als ein manuelles API-Key-Setup

Das übliche API-Onboarding ist noch immer umständlich:

- im Browser einloggen
- die Einstellungen öffnen
- manuell ein Token erzeugen
- es in ein anderes Tool kopieren
- die Doku offenhalten, damit das Tool weiß, was als Nächstes zu tun ist

Dieser Ablauf schneidet den größten Teil davon weg.

Der Nutzer bestätigt seine Identität per E-Mail-OTP. Der Dienst stellt dem Agenten direkt einen langlebigen API-Key aus. Dasselbe Antwortformat sagt dem Agenten anschließend immer weiter, was als Nächstes zu tun ist.

Das ist für den Nutzer einfacher und für die Automatisierung besser geeignet.

## Das ist Open Source

Flashcards ist Open Source. Du kannst also den kompletten Ablauf prüfen, statt ihn wie eine Blackbox zu behandeln.

- Repository: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Agent-Discovery-Route: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- Agent-`send-code`-Route: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Agent-`verify-code`-Route: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- Envelopes für Konto- und Workspace-Einrichtung: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

Wenn dich Open-Source-API-Authentifizierung, Login per E-Mail-OTP oder das Design von Agent-Onboarding interessiert, sind das die wichtigsten Dateien.

## Probier es aus

Wenn du den Ablauf testen willst, gib deinem Agenten diese URL:

`https://api.flashcards-open-source-app.com/v1/`

Und dann lass ihn den Rest erledigen.

Nützliche Links:

- [Flashcards-Website](https://flashcards-open-source-app.com/)
- [Gehostete App](https://app.flashcards-open-source-app.com/)
- [Erste Schritte](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub-Repository](https://github.com/kirill-markin/flashcards-open-source-app)

Wenn das Produkt Open Source ist und der Auth-Ablauf schmal genug bleibt, sollte "lass den Agenten das erledigen" tatsächlich funktionieren. Genau dafür ist dieser Ablauf gedacht.
