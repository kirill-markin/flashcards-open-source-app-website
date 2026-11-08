---
title: Aan de slag
description: Begin met de app voor iPhone, iPad, Mac of Android, de web-app, een AI-agent of je eigen server.
---

Je kunt op verschillende manieren beginnen; de populairste staan bovenaan:

- **App voor iPhone, iPad en Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App voor Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Gehoste web-app**: [app.nibomo.com](https://app.nibomo.com)
- **AI-agents**: de [MCP-connector](/docs/mcp-connector/) of de API op `https://api.nibomo.com/v1/`
- **Selfhosting**: de [handleiding voor selfhosting](/docs/self-hosting/)

## Apps voor mobiel en desktop

Installeer de native app voor je apparaat:

- iPhone, iPad en Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

De apps bewaren je kaarten op het apparaat, zodat je ook offline kunt herhalen, en synchroniseren zodra je weer online bent. Je kunt als gast beginnen en je later aanmelden.

### Widgets voor het beginscherm

De Nibomo-app voegt de widget “Herhalen” toe aan iPhone, iPad, Mac en Android. Je kiest uit drie formaten:

- **Klein**: hoeveel kaarten aan de beurt zijn en je dagreeks
- **Middelgroot**: hoeveel kaarten aan de beurt zijn en de vraag op je volgende kaart
- **Groot**: hoeveel kaarten aan de beurt zijn, je volgende vraag en je dagreeks

Als er niets aan de beurt is, toont de widget “Helemaal bij” en wanneer de volgende kaart aan de beurt is. Een antwoord toont hij nooit. Tik op de widget om het onderdeel Herhalen te openen; een middelgrote of grote widget opent Herhalen meteen bij de kaart die erop staat. Widgets zijn gratis voor iedereen, ook voor gasten.

Acht andere widgets tonen je voortgang: “Activiteit”, “Jaar”, “Vandaag”, “Herhalingen”, “Dagreeksen”, “Kalender”, “Binnenkort” en “Dashboard”. Op de iPhone kun je de widget “Te herhalen kaarten” ook op het toegangsscherm zetten, en de [widgetgids](/blog/flashcard-widget/) laat ze allemaal zien.

Om er een toe te voegen op iPhone, iPad of Mac, open je de widgetgalerij, kies je Nibomo en selecteer je een formaat. Op Android voeg je de Nibomo-widget toe vanuit de widgetlijst en pas je daarna het formaat aan; de indeling past zich aan het formaat aan.

## Gehoste web-app

De snelste manier om te beginnen is de gehoste web-app:

1. Open [app.nibomo.com](https://app.nibomo.com)
2. Meld je zonder wachtwoord aan met je e-mailadres en een eenmalige code (OTP)
3. Maak kaarten, herhaal de kaarten die aan de beurt zijn en gebruik de AI-chat met de gegevens uit je werkruimte en met bijgevoegde bestanden

Voor de gehoste versie hoef je niets te installeren en geen server in te richten.

## Agent instellen

MCP-clients zoals Claude, ChatGPT en Cursor kunnen verbinden via de [handleiding voor de MCP-connector](/docs/mcp-connector/).

Wil je Claude Code, Codex of OpenClaw rechtstreeks laten verbinden, begin dan hier:

```text
GET https://api.nibomo.com/v1/
```

Dat discovery-antwoord leidt de agent stap voor stap door het aanmelden met een OTP per e-mail, het aanmaken van een langdurig geldige API-sleutel, het laden van het account, het opzetten van een werkruimte en de gepubliceerde SQL-interface.

Dezelfde payload is ook beschikbaar via `GET /v1/agent`, maar `/v1/` is het canonieke openbare startpunt.

## Zelf gehost

Draai je liever je eigen instantie, lees dan de [handleiding voor selfhosting](/docs/self-hosting/).

## Wat je nu al krijgt

- Gehoste web-app voor kaarten, herhalen en AI-chat
- Native apps voor iPhone, iPad, Mac en Android met lokale SQLite-opslag en offline-first synchronisatie
- Gedeelde backend- en authenticatiediensten op aparte `api`- en `auth`-domeinen
- Onboarding van externe agents via discovery, OTP en ApiKey-authenticatie
- Open-source deploymentpad op AWS met Postgres als leidende gegevensbron

## Richting van de repository

Het project is offline-first.

Op dit moment bevat de repository de web-app, de iOS-app, de authenticatiedienst, de backend-API, de flow voor externe agents en de Android-app die op Google Play staat.
