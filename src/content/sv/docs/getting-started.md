---
title: Kom igång
description: Börja med den molndrivna webbappen, anslut en agent via discovery-URL:en eller kör den lokala stacken själv.
---

## Molndriven webbapp

Det snabbaste sättet att komma igång är den molndrivna webbappen:

1. Öppna [app.nibomo.com](https://app.nibomo.com)
2. Logga in med din e-postadress via en engångskod (OTP) utan lösenord
3. Skapa kort, repetera de kort som står på tur och använd AI-chatten med data från arbetsytan och bifogade filer

Den molndrivna vägen kräver ingen installation och ingen serverkonfiguration.

## Konfigurera en agent

Om du vill att Claude Code, Codex eller OpenClaw ska ansluta direkt börjar du här:

```text
GET https://api.nibomo.com/v1/
```

Discovery-svaret guidar agenten genom inloggning med engångskod via e-post, skapande av en långlivad API-nyckel, inläsning av kontot, uppstart av en arbetsyta och den publicerade SQL-ytan.

Samma innehåll finns också på `GET /v1/agent`, men `/v1/` är den kanoniska publika startpunkten.

## Egen server

Om du hellre vill köra en egen instans kan du läsa [Guide för drift på egen server](/docs/self-hosting/).

## Det här får du i dag

- Molndriven webbapp för kort, repetition och AI-chatt
- iOS-klient i huvudrepot med lokal SQLite och offline-först-synk
- Gemensamma backend- och autentiseringstjänster på separata domäner för `api` och `auth`
- Onboarding för externa agenter via discovery, OTP och ApiKey-autentisering
- Driftsättning med öppen källkod på AWS med Postgres som sanningskälla

## Projektets inriktning

Projektet är offline-först.

I dag innehåller repot webbappen, iOS-appen, autentiseringstjänsten, backend-API:t, flödet för externa agenter och Android-appen som är publicerad på Google Play.
