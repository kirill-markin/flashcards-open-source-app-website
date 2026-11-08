---
title: Kom igång
description: Börja med appen för iPhone, iPad, Mac eller Android, den molndrivna webbappen, en AI-agent eller din egen server.
---

Det finns flera sätt att komma igång, från det populäraste:

- **App för iPhone, iPad och Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **App för Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Molndriven webbapp**: [app.nibomo.com](https://app.nibomo.com)
- **AI-agenter**: [MCP-kopplingen](/docs/mcp-connector/) eller API:t på `https://api.nibomo.com/v1/`
- **Egen server**: [Guide för drift på egen server](/docs/self-hosting/)

## Mobil- och datorappar

Installera den inbyggda appen för din enhet:

- iPhone, iPad och Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Apparna sparar dina kort på enheten, så att du kan repetera offline, och synkar när du är online igen. Du kan börja som gäst och logga in senare.

### Widgetar för hemskärmen

Nibomo-appen lägger till en Repetera-widget på iPhone, iPad, Mac och Android. Den finns i tre storlekar:

- **Liten**: hur många kort som ska repeteras och din studiesvit
- **Medelstor**: hur många kort som ska repeteras och frågan på ditt nästa kort
- **Stor**: hur många kort som ska repeteras, din nästa fråga och din svit

När inget ska repeteras visar widgeten ”Allt klart” och när nästa kort ska repeteras. Den visar aldrig något svar. Tryck på widgeten för att öppna Repetera; en medelstor eller stor widget öppnar Repetera på kortet som den visar. Widgetarna är gratis för alla, även för gäster.

Åtta andra widgetar visar dina framsteg: ”Aktivitet”, ”År”, ”I dag”, ”Repetitioner”, ”Sviter”, ”Kalender”, ”Kommande” och ”Översikt”. På iPhone kan du även lägga widgeten ”Kort att repetera” på låsskärmen, och [widgetguiden](/blog/flashcard-widget/) visar var och en.

På iPhone, iPad eller Mac lägger du till en widget genom att öppna widgetgalleriet, välja Nibomo och sedan en storlek. På Android lägger du till Nibomo-widgeten från widgetlistan och ändrar sedan dess storlek; layouten anpassas efter storleken.

## Molndriven webbapp

Det snabbaste sättet att komma igång är den molndrivna webbappen:

1. Öppna [app.nibomo.com](https://app.nibomo.com)
2. Logga in med din e-postadress via en engångskod (OTP) utan lösenord
3. Skapa kort, repetera de kort som står på tur och använd AI-chatten med data från arbetsytan och bifogade filer

Den molndrivna vägen kräver ingen installation och ingen serverkonfiguration.

## Konfigurera en agent

MCP-klienter som Claude, ChatGPT och Cursor kan ansluta enligt [guiden för MCP-kopplingen](/docs/mcp-connector/).

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
- Inbyggda appar för iPhone, iPad, Mac och Android med lokal lagring i SQLite och offline-först-synk
- Gemensamma backend- och autentiseringstjänster på separata domäner för `api` och `auth`
- Onboarding för externa agenter via discovery, OTP och ApiKey-autentisering
- Driftsättning med öppen källkod på AWS med Postgres som sanningskälla

## Projektets inriktning

Projektet är offline-först.

I dag innehåller repot webbappen, iOS-appen, autentiseringstjänsten, backend-API:t, flödet för externa agenter och Android-appen som är publicerad på Google Play.
