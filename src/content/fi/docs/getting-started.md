---
title: Aloitusopas
description: Aloita iPhone-, iPad-, Mac- tai Android-sovelluksella, verkkosovelluksella, tekoälyagentilla tai omalla palvelimellasi.
---

Aloittamiseen on useita tapoja, suosituimmasta alkaen:

- **iPhone-, iPad- ja Mac-sovellus**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android-sovellus**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Isännöity verkkosovellus**: [app.nibomo.com](https://app.nibomo.com)
- **Tekoälyagentit**: [MCP-liitin](/docs/mcp-connector/) tai API osoitteessa `https://api.nibomo.com/v1/`
- **Itse ylläpito**: [itse ylläpidon opas](/docs/self-hosting/)

## Mobiili- ja tietokonesovellukset

Asenna laitteellesi natiivisovellus:

- iPhone, iPad ja Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Sovellukset säilyttävät korttisi laitteella, joten voit kerrata myös offline-tilassa, ja ne synkronoivat tiedot, kun olet taas verkossa. Voit aloittaa vieraana ja kirjautua sisään myöhemmin.

### Koti-valikon widgetit

Nibomo-sovellus tuo iPhoneen, iPadiin, Maciin ja Androidiin Kertaa-widgetin. Sitä on kolmea kokoa:

- **Pieni**: montako korttia on erääntynyt ja opiskelusi päiväputki
- **Keskikokoinen**: montako korttia on erääntynyt ja seuraavan korttisi kysymys
- **Suuri**: montako korttia on erääntynyt, seuraava kysymyksesi ja päiväputkesi

Kun mitään ei ole erääntynyt, widget näyttää tekstin ”Kaikki kerrattu” ja sen, milloin seuraava kortti erääntyy. Vastausta se ei näytä koskaan. Avaa Kertaa-näkymä napauttamalla widgetiä; keskikokoinen tai suuri widget avaa Kertaa-näkymän suoraan siihen korttiin, jonka se näyttää. Widgetit ovat ilmaisia kaikille, myös vieraskäyttäjille.

Lisää widget avaamalla laitteesi widgetgallerian, valitsemalla Nibomon ja sitten haluamasi koon.

## Isännöity verkkosovellus

Nopein tapa aloittaa on isännöity verkkosovellus:

1. Avaa [app.nibomo.com](https://app.nibomo.com)
2. Kirjaudu sisään sähköpostillasi salasanattomalla kertakäyttökoodilla (OTP)
3. Luo kortteja, kertaa erääntyneet kortit ja käytä tekoälychattia, joka hyödyntää työtilasi tietoja ja liitetiedostoja

Isännöity vaihtoehto ei vaadi asennusta eikä palvelimen määrittämistä.

## Agentin käyttöönotto

MCP-asiakkaat, kuten Claude, ChatGPT ja Cursor, voivat muodostaa yhteyden [MCP-liittimen oppaan](/docs/mcp-connector/) avulla.

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
- Natiivit iPhone-, iPad-, Mac- ja Android-sovellukset: paikallinen SQLite-tallennus ja offline-first-synkronointi
- Yhteinen taustapalvelu ja tunnistautumispalvelu erillisissä `api`- ja `auth`-verkkotunnuksissa
- Ulkoisten agenttien käyttöönotto discoveryn, OTP:n ja ApiKey-tunnistautumisen kautta
- Avoimen lähdekoodin käyttöönottovaihtoehto AWS:ään, jossa Postgres on ensisijainen tietolähde

## Projektin suunta

Projekti on offline-first.

Tällä hetkellä repositorio sisältää verkkosovelluksen, iOS-sovelluksen, tunnistautumispalvelun, taustapalvelun API:n, ulkoisten agenttien käyttöönottokulun ja Google Playssa julkaistun Android-sovelluksen.
