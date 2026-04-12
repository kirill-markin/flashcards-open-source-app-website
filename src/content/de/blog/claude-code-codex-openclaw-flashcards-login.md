---
title: "So lässt du Claude Code, Codex oder OpenClaw die Anmeldung bei Flashcards für dich übernehmen"
description: "Flashcards bietet einen Open-Source-Anmeldeablauf für Agenten: eine Discovery-URL, E-Mail-OTP und ein langlebiger API-Key. Gib deinem Agenten den Link, schick den aktuellen 8-stelligen Code zurück und lass ihn Konto- und Workspace-Einrichtung selbst abschließen."
date: "2026-03-10"
keywords:
  - "claude code anmeldung"
  - "codex anmeldung"
  - "e-mail-otp-api"
  - "agenten-einrichtung"
  - "flashcards open-source-app"
  - "open-source-api-authentifizierung"
---

Bei den meisten Anmeldeabläufen wird immer noch vorausgesetzt, dass ein Mensch die komplette Einrichtung von Hand übernimmt.

Anmeldeseite öffnen. Auf den Code warten. Das Token kopieren. Einen API-Key erstellen. Ihn in ein Tool einfügen. Dem Agenten die Doku erklären. Die Sitzung reparieren, wenn etwas schiefläuft.

Genau solche Arbeit sollte dir ein Tool abnehmen.

In [Flashcards](https://flashcards-open-source-app.com/) gibt es jetzt einen Open-Source-Anmeldeablauf für Agenten, der mit genau einer Discovery-URL beginnt:

`https://api.flashcards-open-source-app.com/v1/`

Das ist der maßgebliche Einstiegspunkt. Dieselbe Discovery-Antwort ist auch unter `https://api.flashcards-open-source-app.com/v1/agent` verfügbar, aber der aktuelle Vertrag beginnt bei `/v1/`.

Gib diese URL an Claude Code, Codex oder OpenClaw weiter. Der Agent kann den Ablauf selbst nachvollziehen, den E-Mail-Code anfordern, ihn verifizieren, den API-Key speichern, das Konto laden und danach eigenständig mit der Workspace-Einrichtung weitermachen.

Der Mensch muss nur zwei Dinge tun:

- die E-Mail-Adresse nennen
- den aktuellen 8-stelligen Code aus der E-Mail zurückschicken

Genau darum geht es.

## Ein Link genügt

Der Discovery-Endpunkt liefert in derselben Antwort die Service-Beschreibung, das Authentifizierungsmodell, die erste Aktion und die Anweisungen für die nächsten Schritte.

Anstatt für jedes Tool eigene Einführungstexte zu schreiben, gibst du dem Agenten einfach diese URL und lässt ihn den Anweisungen aus der Antwort folgen.

```text
GET https://api.flashcards-open-source-app.com/v1/
```

Auf einen Blick erfährt der Agent vier Dinge:

- dass es sich um den Flashcards-Dienst handelt
- dass Anmeldung und Registrierung beide per E-Mail-OTP laufen
- dass eine erfolgreiche Verifizierung einen langlebigen API-Key liefert
- dass danach die Einrichtung von Konto und Workspace folgt

## Wie der Ablauf funktioniert

Der Ablauf ist bewusst schlank.

1. Der Agent ruft den Discovery-Endpunkt auf.
2. Der Agent sendet die E-Mail-Adresse des Nutzers an `send-code`.
3. Flashcards verschickt den 8-stelligen Code und gibt ein `otpSessionToken` zurück.
4. Der Agent fragt den Nutzer nach dem aktuellen Code.
5. Der Agent verifiziert den Code und erhält einen langlebigen API-Key.
6. Der Agent ruft `/v1/agent/me` und `/v1/agent/workspaces` auf.
7. Der Agent erstellt den passenden Workspace oder wählt ihn aus und arbeitet dann über `/v1/agent/sql` weiter.

Das ist wichtig, weil der Agent nicht bei "Login erfolgreich" stehen bleibt. Er kann den restlichen Einrichtungsablauf direkt fortsetzen und danach echte Lese- und Schreibzugriffe ausführen.

## Beispiel-Prompt für Claude Code oder Codex

Das genügt:

```text
Nutze diese Flashcards-Discovery-URL:
https://api.flashcards-open-source-app.com/v1/

Melde dich bei meinem Flashcards-Konto an, lade den Kontokontext und wähle den richtigen Workspace aus oder lege ihn an.
Frag mich nur dann nach dem aktuellen 8-stelligen Code aus der E-Mail, wenn der Ablauf ihn benötigt.
```

Danach musst du die Authentifizierungsabfolge nicht mehr selbst erklären. Der Endpunkt tut das bereits.

## Beispiel-Prompt für OpenClaw

Gleiche Idee, nur etwas expliziter:

```text
Verbinde mein Flashcards-Konto über diese URL:
https://api.flashcards-open-source-app.com/v1/

Folge den zurückgegebenen Anweisungen, behandle den API-Key sicher, lade mein Konto und fahre dann mit der Workspace-Einrichtung fort.
Falls zur Verifizierung nötig, frage mich nach dem aktuellen 8-stelligen Code aus der E-Mail.
```

## Beispiel: Discovery-Antwort

Das ist die erste Anfrage:

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

Der Server verschickt die E-Mail und gibt eine kurzlebige Verifizierungssitzung zurück:

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

An dieser Stelle pausiert der Agent nur kurz, um nach dem aktuellen Code aus dem Posteingang zu fragen.

## Beispiel: Den Code verifizieren und den API-Key erhalten

Sobald der Nutzer den E-Mail-Code zurückgeschickt hat, kann der Agent die Anmeldung abschließen:

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

Ab hier ist die Authentifizierung erledigt, und der Agent nutzt das Konto ganz normal weiter.

Speichere diesen Schlüssel sofort außerhalb des Chatverlaufs. Am saubersten exportierst du ihn einmal als Umgebungsvariable, damit dein Agent ihn wiederverwenden kann:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

## Beispiel: Konto laden und mit den Workspaces weitermachen

Die nächste Anfrage ist ein normaler authentifizierter API-Aufruf:

```bash
curl https://api.flashcards-open-source-app.com/v1/agent/me \
  -H "Authorization: ApiKey YOUR_API_KEY"
```

Die Antwort weist den Agenten an, mit der Workspace-Einrichtung fortzufahren:

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
- den ersten Workspace anlegen, wenn noch keiner existiert
- den richtigen Workspace auswählen, wenn es mehrere gibt
- den veröffentlichten Vertrag unter `/v1/agent/openapi.json` prüfen
- `POST /v1/agent/sql` für Lese- und Schreibzugriffe sowie SQL-Introspektion verwenden

Genau so wird der Anmeldeablauf im Alltag nützlich und nicht nur technisch korrekt.

Die Alias-Spezifikationen unter `/v1/openapi.json` und `/v1/swagger.json` gibt es ebenfalls, aber die agentenspezifischen Doku-Links verweisen bewusst auf `/v1/agent/openapi.json` und `/v1/agent/swagger.json`.

## Warum das besser ist als ein manuelles API-Key-Setup

Die übliche API-Einrichtung ist immer noch umständlich:

- im Browser anmelden
- die Einstellungen öffnen
- manuell ein Token erstellen
- es in ein anderes Tool kopieren
- die Doku offen lassen, damit das Tool weiß, wie es weitergeht

Dieser Ablauf nimmt dir den Großteil davon ab.

Der Nutzer bestätigt seine Identität per E-Mail-OTP. Der Dienst gibt dem Agenten direkt einen langlebigen API-Key. Im selben Antwortformat steht außerdem immer, welcher Schritt als Nächstes folgt.

Das ist für Nutzer einfacher und deutlich leichter zu automatisieren.

## Das Ganze ist Open Source

Flashcards ist Open Source. Du kannst also den gesamten Ablauf prüfen, statt ihn als Blackbox hinzunehmen.

- Repository: [github.com/kirill-markin/flashcards-open-source-app](https://github.com/kirill-markin/flashcards-open-source-app)
- Agent-Discovery-Route: [apps/backend/src/agentDiscovery.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentDiscovery.ts)
- Agent-`send-code`-Route: [apps/auth/src/routes/agentSendCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentSendCode.ts)
- Agent-`verify-code`-Route: [apps/auth/src/routes/agentVerifyCode.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/auth/src/routes/agentVerifyCode.ts)
- Antwortformate für Konto- und Workspace-Einrichtung: [apps/backend/src/agentSetup.ts](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/backend/src/agentSetup.ts)

Wenn dich Open-Source-API-Authentifizierung, Anmeldung per E-Mail-OTP oder das Onboarding von Agenten interessiert, sind das die Dateien, die du dir ansehen solltest.

## Probier es aus

Wenn du den Ablauf testen möchtest, gib deinem Agenten diese URL:

`https://api.flashcards-open-source-app.com/v1/`

Danach kann er den Rest selbst übernehmen.

Nützliche Links:

- [Flashcards-Website](https://flashcards-open-source-app.com/)
- [Gehostete App](https://app.flashcards-open-source-app.com/)
- [Erste Schritte](https://flashcards-open-source-app.com/docs/getting-started/)
- [GitHub-Repository](https://github.com/kirill-markin/flashcards-open-source-app)

Wenn ein Produkt Open Source ist und der Authentifizierungsablauf bewusst schmal gehalten wird, sollte "lass den Agenten das erledigen" tatsächlich funktionieren. Genau dafür ist dieser Ablauf da.
