---
title: Kom i gang
description: Kom i gang med appen for iPhone, iPad, Mac eller Android, nettappen, en AI-agent eller din egen server.
---

Du kan komme i gang på flere måter, og de mest populære står først:

- **App for iPhone, iPad og Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App for Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hostet nettapp**: [app.nibomo.com](https://app.nibomo.com)
- **AI-agenter**: [MCP-koblingen](/docs/mcp-connector/) eller API-et på `https://api.nibomo.com/v1/`
- **Selvhosting**: [guiden til selvhosting](/docs/self-hosting/)

## Apper for mobil og datamaskin

Installer den native appen for enheten din:

- iPhone, iPad og Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Appene lagrer kortene dine på enheten, så du kan repetere uten nett, og de synkroniserer når du er på nett igjen. Du kan starte som gjest og logge inn senere.

### Widgeter på Hjem-skjermen

Nibomo-appen gir deg widgeten «Repeter» på iPhone, iPad, Mac og Android. Den finnes i tre størrelser:

- **Liten**: hvor mange kort som skal repeteres, og dagrekken din
- **Middels**: hvor mange kort som skal repeteres, og spørsmålet på neste kort
- **Stor**: hvor mange kort som skal repeteres, neste spørsmål og dagrekken din

Når ingenting skal repeteres, viser widgeten «Du er ajour» og når neste kort forfaller. Den viser aldri svaret. Trykk på widgeten for å åpne «Repeter»; en middels eller stor widget åpner «Repeter» rett på kortet den viser. Widgetene er gratis for alle, også gjester.

Åtte andre widgeter viser fremdriften din: «Aktivitet», «År», «I dag», «Repetisjoner», «Dagrekker», «Kalender», «Kommende» og «Oversikt». På iPhone og iPad kan du også legge widgeten «Kort til repetisjon» på låseskjermen, og [widgetguiden](/blog/flashcard-widget/) viser hver av dem.

For å legge til en widget på iPhone, iPad eller Mac åpner du widgetgalleriet, velger Nibomo og velger en størrelse. På Android legger du til en Nibomo-widget fra widgetlisten og endrer deretter størrelsen på den; oppsettet tilpasser seg størrelsen.

## Hostet nettapp

Den raskeste måten å komme i gang på er den hostede nettappen:

1. Åpne [app.nibomo.com](https://app.nibomo.com)
2. Logg inn med e-postadressen din via en engangskode (OTP), uten passord
3. Lag kort, repeter kort som forfaller, og bruk AI-chat med data fra arbeidsområdet og vedlagte filer

Den hostede varianten krever verken installasjon eller serveroppsett.

## Ta med puggekortene dine

Har du kort i Quizlet, Anki eller en annen app? Åpne **Bibliotek > Import** og bruk [veiledningen for kortimport](/docs/import-flashcards/) for å velge format og se hva som kan bli med.

## Oppsett for agenter

MCP-klienter som Claude, ChatGPT og Cursor kan koble seg til via [veiledningen for MCP-koblingen](/docs/mcp-connector/).

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
- Native apper for iPhone, iPad, Mac og Android med lokal SQLite-lagring og offline-first-synkronisering
- Felles backend- og autentiseringstjenester på de separate domenene `api` og `auth`
- Onboarding av eksterne agenter via discovery, OTP og ApiKey-autentisering
- Utrullingsvei med åpen kildekode på AWS, med Postgres som autoritativ datakilde

## Retningen for repositoriet

Prosjektet er offline-first.

I dag inneholder repositoriet nettappen, iOS-appen, autentiseringstjenesten, backend-API-et, flyten for eksterne agenter og Android-appen som er publisert på Google Play.
