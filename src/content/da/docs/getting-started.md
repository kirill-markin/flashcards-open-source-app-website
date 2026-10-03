---
title: Kom godt i gang
description: Start med den hostede webapp, forbind en agent via discovery-URL'en, eller kør den lokale stak selv.
---

## Hostet webapp

Den hurtigste måde at komme i gang på er den hostede webapp:

1. Åbn [app.nibomo.com](https://app.nibomo.com)
2. Log ind uden adgangskode med en engangskode (OTP), som sendes til din e-mail
3. Opret kort, repeter de kort, der forfalder, og brug AI-chat med data fra dit arbejdsområde og vedhæftede filer

Den hostede løsning kræver hverken installation eller serveropsætning.

## Opsætning af agenter

Hvis du vil forbinde Claude Code, Codex eller OpenClaw direkte, så start her:

```text
GET https://api.nibomo.com/v1/
```

Discovery-svaret fører agenten gennem login med engangskode via e-mail, oprettelse af en langtidsgyldig API-nøgle, indlæsning af kontoen, opsætning af arbejdsområdet og den offentliggjorte SQL-grænseflade.

Det samme svar findes også på `GET /v1/agent`, men `/v1/` er det kanoniske offentlige indgangspunkt.

## Selvhostet

Hvis du hellere vil køre din egen instans, så se [vejledningen til selvhosting](/docs/self-hosting/).

## Hvad du får i dag

- Hostet webapp til kort, repetition og AI-chat
- iOS-klient i hovedrepositoriet med lokal SQLite og offline-first-synkronisering
- Fælles backend- og godkendelsestjenester på separate `api`- og `auth`-domæner
- Onboarding af eksterne agenter via discovery, engangskode og ApiKey-godkendelse
- Open source-vej til udrulning på AWS med Postgres som autoritativ datakilde

## Projektets retning

Projektet er offline-first.

I dag indeholder repositoriet webappen, iOS-appen, godkendelsestjenesten, backend-API'et, flowet for eksterne agenter og Android-appen, der er udgivet på Google Play.
