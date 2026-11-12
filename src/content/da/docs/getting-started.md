---
title: Kom godt i gang
description: Kom i gang med appen til iPhone, iPad, Mac eller Android, webappen, en AI-agent eller din egen server.
---

Der er flere måder at komme i gang på, med de mest populære først:

- **App til iPhone, iPad og Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App til Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hostet webapp**: [app.nibomo.com](https://app.nibomo.com)
- **AI-agenter**: [MCP-connectoren](/docs/mcp-connector/) eller API'et på `https://api.nibomo.com/v1/`
- **Selvhosting**: [vejledningen til selvhosting](/docs/self-hosting/)

## Apps til mobil og computer

Installer den native app til din enhed:

- iPhone, iPad og Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Apperne gemmer dine kort på enheden, så du kan repetere offline, og synkroniserer, når du er online igen. Du kan starte som gæst og logge ind senere.

### Widgets til hjemmeskærmen

Nibomo-appen tilføjer en Repetition-widget på iPhone, iPad, Mac og Android. Den findes i tre størrelser:

- **Lille**: hvor mange kort der er klar til repetition, og din læringsserie
- **Mellemstor**: hvor mange kort der er klar til repetition, og spørgsmålet på dit næste kort
- **Stor**: hvor mange kort der er klar til repetition, dit næste spørgsmål og din læringsserie

Når der ikke er noget at repetere, viser widgetten “Du er ajour”, og hvornår næste kort skal repeteres. Den viser aldrig et svar. Tryk på widgetten for at åbne Repetition; en mellemstor eller stor widget åbner Repetition på det kort, den viser. Widgets er gratis for alle, også gæster.

Otte andre widgets følger dine fremskridt: “Aktivitet”, “År”, “I dag”, “Repetitioner”, “Læringsserier”, “Kalender”, “Kommende” og “Oversigt”. På iPhone og iPad kan du også sætte widgetten “Kort til repetition” på låseskærmen, og [widgetguiden](/blog/flashcard-widget/) viser dem alle.

På iPhone, iPad eller Mac tilføjer du en ved at åbne widgetgalleriet, vælge Nibomo og derefter en størrelse. På Android tilføjer du en Nibomo-widget fra listen over widgets og ændrer derefter dens størrelse; layoutet følger størrelsen.

## Hostet webapp

Den hurtigste måde at komme i gang på er den hostede webapp:

1. Åbn [app.nibomo.com](https://app.nibomo.com)
2. Log ind uden adgangskode med en engangskode (OTP), som sendes til din e-mail
3. Opret kort, repeter de kort, der forfalder, og brug AI-chat med data fra dit arbejdsområde og vedhæftede filer

Den hostede løsning kræver hverken installation eller serveropsætning.

## Tag dine flashcards med

Har du allerede kort i Quizlet, Anki eller en anden app? Åbn **Bibliotek > Import**, og brug [vejledningen til import af flashcards](/docs/import-flashcards/) til at vælge format og se, hvad der følger med.

## Opsætning af agenter

MCP-klienter som Claude, ChatGPT og Cursor kan oprette forbindelse via [vejledningen til MCP-connectoren](/docs/mcp-connector/).

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
- Native apps til iPhone, iPad, Mac og Android med lokal SQLite-lagring og offline-first-synkronisering
- Fælles backend- og godkendelsestjenester på separate `api`- og `auth`-domæner
- Onboarding af eksterne agenter via discovery, engangskode og ApiKey-godkendelse
- Open source-vej til udrulning på AWS med Postgres som autoritativ datakilde

## Projektets retning

Projektet er offline-first.

I dag indeholder repositoriet webappen, iOS-appen, godkendelsestjenesten, backend-API'et, flowet for eksterne agenter og Android-appen, der er udgivet på Google Play.
