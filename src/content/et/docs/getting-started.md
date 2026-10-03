---
title: Alustamine
description: Alusta majutatud veebirakendusest, ühenda agent avastus-URL-i kaudu või käivita kogu lahendus ise kohalikult.
---

## Majutatud veebirakendus

Kiireim viis alustamiseks on majutatud veebirakendus:

1. Ava [app.nibomo.com](https://app.nibomo.com)
2. Logi e-postiga sisse paroolita ühekordse koodiga
3. Loo kaarte, korda kaarte, mille tähtaeg on käes, ja kasuta AI-vestlust koos tööruumi andmete ja failimanustega

Majutatud variandi puhul ei pea midagi paigaldama ega serverit seadistama.

## Agendi seadistamine

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
- iOS-i klient peamises koodihoidlas, mis kasutab kohalikku SQLite'i, töötab eelkõige võrguühenduseta ja sünkroonib andmeid
- Ühised taustsüsteemi ja autentimisteenused eraldi domeenidel `api` ja `auth`
- Väliste agentide kasutuselevõtt avastuse, ühekordse koodi ja ApiKey-autentimise kaudu
- Avatud lähtekoodiga juurutusviis AWS-is, kus Postgres on põhiandmeallikas

## Projekti suund

Projekt lähtub võrguühenduseta kasutamisest.

Praegu sisaldab koodihoidla veebirakendust, iOS-i rakendust, autentimisteenust, taustsüsteemi API-t, väliste agentide voogu ja Google Plays avaldatud Androidi rakendust.
