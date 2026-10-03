---
title: Aloitusopas
description: Aloita isännöidyllä verkkosovelluksella, yhdistä agentti discovery-URL-osoitteen kautta tai aja paikallista pinoa itse.
---

## Isännöity verkkosovellus

Nopein tapa aloittaa on isännöity verkkosovellus:

1. Avaa [app.nibomo.com](https://app.nibomo.com)
2. Kirjaudu sisään sähköpostillasi salasanattomalla kertakäyttökoodilla (OTP)
3. Luo kortteja, kertaa erääntyneet kortit ja käytä tekoälychattia, joka hyödyntää työtilasi tietoja ja liitetiedostoja

Isännöity vaihtoehto ei vaadi asennusta eikä palvelimen määrittämistä.

## Agentin käyttöönotto

Jos haluat yhdistää Claude Coden, Codexin tai OpenClaw'n suoraan, aloita tästä:

```text
GET https://api.nibomo.com/v1/
```

Discovery-vastaus opastaa agentin vaihe vaiheelta sähköpostin OTP-kirjautumisen, pitkäikäisen API-avaimen luonnin, tilin tietojen latauksen, työtilan alustuksen ja julkaistun SQL-rajapinnan läpi.

Sama sisältö on saatavilla myös osoitteesta `GET /v1/agent`, mutta `/v1/` on kanoninen julkinen aloituspiste.

## Itse ylläpidetty

Jos haluat ajaa omaa instanssiasi, katso [itse ylläpidon opas](/docs/self-hosting/).

## Mitä saat jo nyt

- Isännöity verkkosovellus korteille, kertaukselle ja tekoälychatille
- iOS-asiakassovellus päärepositoriossa: paikallinen SQLite ja offline-first-synkronointi
- Yhteinen taustapalvelu ja tunnistautumispalvelu erillisissä `api`- ja `auth`-verkkotunnuksissa
- Ulkoisten agenttien käyttöönotto discoveryn, OTP:n ja ApiKey-tunnistautumisen kautta
- Avoimen lähdekoodin käyttöönottovaihtoehto AWS:ään, jossa Postgres on ensisijainen tietolähde

## Projektin suunta

Projekti on offline-first.

Tällä hetkellä repositorio sisältää verkkosovelluksen, iOS-sovelluksen, tunnistautumispalvelun, taustapalvelun API:n, ulkoisten agenttien käyttöönottokulun ja Google Playssa julkaistun Android-sovelluksen.
