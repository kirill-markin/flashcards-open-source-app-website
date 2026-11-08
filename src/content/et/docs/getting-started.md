---
title: Alustamine
description: Alusta iPhone'i, iPadi, Maci või Androidi rakendusega, veebirakendusega, AI-agendiga või oma serveris.
---

Alustamiseks on mitu võimalust, populaarseimast alates:

- **iPhone'i, iPadi ja Maci rakendus**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Androidi rakendus**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Majutatud veebirakendus**: [app.nibomo.com](https://app.nibomo.com)
- **AI-agendid**: [MCP-konnektor](/docs/mcp-connector/) või API aadressil `https://api.nibomo.com/v1/`
- **Ise majutamine**: [ise majutamise juhend](/docs/self-hosting/)

## Mobiili- ja lauaarvutirakendused

Paigalda oma seadmele natiivne rakendus:

- iPhone, iPad ja Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Rakendused hoiavad sinu kaarte seadmes, nii et saad korrata ka võrguühenduseta, ja sünkroonivad andmed, kui oled jälle võrgus. Võid alustada külalisena ja hiljem sisse logida.

### Avakuva vidinad

Nibomo rakendus lisab iPhone'ile, iPadile, Macile ja Androidile vidina Korda. Vidinal on kolm suurust:

- **Väike**: mitu kaarti on kordamiseks valmis ja sinu õppepäevade jada
- **Keskmine**: mitu kaarti on kordamiseks valmis ja sinu järgmise kaardi küsimus
- **Suur**: mitu kaarti on kordamiseks valmis, sinu järgmine küsimus ja õppepäevade jada

Kui kordamiseks pole midagi, näitab vidin teksti „Kõik korratud“ ja seda, millal on järgmise kaardi kord. Vastust see kunagi ei näita. Puuduta vidinat, et avada jaotis Korda; keskmine või suur vidin avab jaotise Korda otse kaardil, mida see näitab. Vidinad on kõigile tasuta, ka külalistele.

Vidina lisamiseks iPhone'is, iPadis või Macis ava vidinagalerii, vali Nibomo ja seejärel suurus. Androidis lisa Nibomo vidin vidinate loendist ja muuda seejärel selle suurust; paigutus kohandub suurusega.

## Majutatud veebirakendus

Kiireim viis alustamiseks on majutatud veebirakendus:

1. Ava [app.nibomo.com](https://app.nibomo.com)
2. Logi e-postiga sisse paroolita ühekordse koodiga
3. Loo kaarte, korda kaarte, mille tähtaeg on käes, ja kasuta AI-vestlust koos tööruumi andmete ja failimanustega

Majutatud variandi puhul ei pea midagi paigaldama ega serverit seadistama.

## Agendi seadistamine

MCP-kliendid, näiteks Claude, ChatGPT ja Cursor, saavad ühenduda [MCP-konnektori juhendi](/docs/mcp-connector/) abil.

Kui tahad, et Claude Code, Codex või OpenClaw ühenduks otse, alusta siit:

```text
GET https://api.nibomo.com/v1/
```

See avastusvastus juhatab agendi läbi e-posti ühekordse koodiga sisselogimise, pikaajalise API-võtme loomise, konto laadimise, tööruumi algseadistuse ja avaldatud SQL-liidese.

Sama sisu on saadaval ka aadressil `GET /v1/agent`, kuid kanooniline avalik sisenemispunkt on `/v1/`.

## Ise majutatud

Kui eelistad käitada oma eksemplari, vaata [ise majutamise juhendit](/docs/self-hosting/).

## Mida saad juba täna

- Majutatud veebirakendus kaartide, kordamise ja AI-vestluse jaoks
- Natiivsed iPhone'i, iPadi, Maci ja Androidi rakendused, mis hoiavad andmeid kohalikus SQLite'is, töötavad eelkõige võrguühenduseta ja sünkroonivad andmeid
- Ühised taustsüsteemi ja autentimisteenused eraldi domeenidel `api` ja `auth`
- Väliste agentide kasutuselevõtt avastuse, ühekordse koodi ja ApiKey-autentimise kaudu
- Avatud lähtekoodiga juurutusviis AWS-is, kus Postgres on põhiandmeallikas

## Projekti suund

Projekt lähtub võrguühenduseta kasutamisest.

Praegu sisaldab koodihoidla veebirakendust, iOS-i rakendust, autentimisteenust, taustsüsteemi API-t, väliste agentide voogu ja Google Plays avaldatud Androidi rakendust.
