---
title: Kom i gang
description: Start med den hostede nettappen, koble til en agent via discovery-URL-en, eller kjør den lokale stakken selv.
---

## Hostet nettapp

Den raskeste måten å komme i gang på er den hostede nettappen:

1. Åpne [app.nibomo.com](https://app.nibomo.com)
2. Logg inn med e-postadressen din via en engangskode (OTP), uten passord
3. Lag kort, repeter kort som forfaller, og bruk AI-chat med data fra arbeidsområdet og vedlagte filer

Den hostede varianten krever verken installasjon eller serveroppsett.

## Oppsett for agenter

Hvis du vil at Claude Code, Codex eller OpenClaw skal koble seg til direkte, starter du her:

```text
GET https://api.nibomo.com/v1/
```

Discovery-svaret leder agenten gjennom innlogging med engangskode på e-post, oppretting av en langvarig API-nøkkel, innlasting av kontoen, førstegangsoppsett av arbeidsområdet og det publiserte SQL-grensesnittet.

Det samme innholdet er også tilgjengelig på `GET /v1/agent`, men `/v1/` er det kanoniske offentlige inngangspunktet.

## Selvhostet

Hvis du heller vil kjøre din egen instans, kan du lese [guiden til selvhosting](/docs/self-hosting/).

## Dette får du i dag

- Hostet nettapp for kort, repetisjon og AI-chat
- iOS-klient i hovedrepositoriet med lokal SQLite og offline-first-synkronisering
- Felles backend- og autentiseringstjenester på de separate domenene `api` og `auth`
- Onboarding av eksterne agenter via discovery, OTP og ApiKey-autentisering
- Utrullingsvei med åpen kildekode på AWS, med Postgres som autoritativ datakilde

## Retningen for repositoriet

Prosjektet er offline-first.

I dag inneholder repositoriet nettappen, iOS-appen, autentiseringstjenesten, backend-API-et, flyten for eksterne agenter og Android-appen som er publisert på Google Play.
