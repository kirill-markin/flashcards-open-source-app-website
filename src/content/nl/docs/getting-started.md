---
title: Aan de slag
description: Begin met de gehoste web-app, verbind een agent via de discovery-URL of draai de lokale stack zelf.
---

## Gehoste web-app

De snelste manier om te beginnen is de gehoste web-app:

1. Open [app.nibomo.com](https://app.nibomo.com)
2. Meld je zonder wachtwoord aan met je e-mailadres en een eenmalige code (OTP)
3. Maak kaarten, herhaal de kaarten die aan de beurt zijn en gebruik de AI-chat met de gegevens uit je werkruimte en met bijgevoegde bestanden

Voor de gehoste versie hoef je niets te installeren en geen server in te richten.

## Agent instellen

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
- iOS-client in de hoofdrepository met lokale SQLite en offline-first synchronisatie
- Gedeelde backend- en authenticatiediensten op aparte `api`- en `auth`-domeinen
- Onboarding van externe agents via discovery, OTP en ApiKey-authenticatie
- Open-source deploymentpad op AWS met Postgres als leidende gegevensbron

## Richting van de repository

Het project is offline-first.

Op dit moment bevat de repository de web-app, de iOS-app, de authenticatiedienst, de backend-API, de flow voor externe agents en de Android-app die op Google Play staat.
