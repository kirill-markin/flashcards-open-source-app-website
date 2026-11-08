---
title: Első lépések
description: Kezdd az iPhone-, iPad-, Mac- vagy Android-alkalmazással, a webalkalmazással, egy AI-ügynökkel vagy a saját szervereden.
---

Többféleképpen is elkezdheted, a legnépszerűbb lehetőséggel kezdve:

- **iPhone-, iPad- és Mac-alkalmazás**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android-alkalmazás**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Felhős webalkalmazás**: [app.nibomo.com](https://app.nibomo.com)
- **AI-ügynökök**: az [MCP-csatlakozó](/docs/mcp-connector/) vagy az API a `https://api.nibomo.com/v1/` címen
- **Saját üzemeltetés**: a [saját üzemeltetési útmutató](/docs/self-hosting/)

## Mobil- és asztali alkalmazások

Telepítsd az eszközödhöz való natív alkalmazást:

- iPhone, iPad és Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Az alkalmazások az eszközön tárolják a kártyáidat, így offline is ismételhetsz, és amikor újra online vagy, szinkronizálnak. Vendégként is kezdhetsz, és később bejelentkezhetsz.

### Főképernyő-widgetek

A Nibomo alkalmazás egy Ismétlés widgetet kínál iPhone-ra, iPadre, Macre és Androidra. Három méretben érhető el:

- **Kicsi**: hány kártya esedékes, és a tanulási sorozatod
- **Közepes**: hány kártya esedékes, és a következő kártyád kérdése
- **Nagy**: hány kártya esedékes, a következő kérdésed és a sorozatod

Ha semmi sem esedékes, a widget a „Mindennel végeztél” üzenetet mutatja, és azt, hogy mikor esedékes a következő kártya. Választ soha nem mutat. Koppints a widgetre az Ismétlés megnyitásához; a közepes vagy nagy widget azon a kártyán nyitja meg az Ismétlést, amelyet mutat. A widgetek mindenki számára ingyenesek, a vendégeknek is.

iPhone-on, iPaden vagy Macen a hozzáadáshoz nyisd meg a widgetgalériát, válaszd a Nibomót, majd jelölj ki egy méretet. Androidon add hozzá a Nibomo-widgetet a widgetek listájából, majd méretezd át; az elrendezés a mérethez igazodik.

## Felhős webalkalmazás

A leggyorsabban a felhős webalkalmazással kezdhetsz:

1. Nyisd meg az [app.nibomo.com](https://app.nibomo.com) oldalt
2. Jelentkezz be az e-mail-címeddel, jelszó nélkül, egyszer használatos kóddal (OTP)
3. Készíts kártyákat, ismételd az esedékes elemeket, és használd az AI-csevegést a munkaterület adataival és csatolt fájlokkal

A felhős változathoz nincs szükség telepítésre vagy szerverbeállításra.

## Ügynök beállítása

Az olyan MCP-kliensek, mint a Claude, a ChatGPT és a Cursor, az [MCP-csatlakozó útmutatója](/docs/mcp-connector/) alapján csatlakozhatnak.

Ha azt szeretnéd, hogy a Claude Code, a Codex vagy az OpenClaw közvetlenül csatlakozzon, innen indulj:

```text
GET https://api.nibomo.com/v1/
```

Ez a felderítési válasz végigvezeti az ügynököt az e-mailes OTP-bejelentkezésen, a hosszú élettartamú API-kulcs létrehozásán, a fiók betöltésén, a munkaterület előkészítésén és a közzétett SQL-felületen.

Ugyanez a tartalom a `GET /v1/agent` címen is elérhető, de a kanonikus nyilvános belépési pont a `/v1/`.

## Saját üzemeltetés

Ha inkább saját példányt futtatnál, nézd meg a [saját üzemeltetési útmutatót](/docs/self-hosting/).

## Mit kapsz már most

- Felhős webalkalmazás a kártyákhoz, az ismétléshez és az AI-csevegéshez
- Natív iPhone-, iPad-, Mac- és Android-alkalmazások helyi SQLite-tárolással és offline-first szinkronizálással
- Közös backend- és hitelesítési szolgáltatások külön `api` és `auth` domaineken
- Külső ügynökök bekötése felderítéssel, OTP-vel és ApiKey-hitelesítéssel
- Nyílt forráskódú telepítési útvonal AWS-en, ahol a Postgres az egyetlen hiteles adatforrás

## A tároló fejlesztési iránya

A projekt offline-first megközelítésre épül.

Ma a tároló tartalmazza a webalkalmazást, az iOS-alkalmazást, a hitelesítési szolgáltatást, a backend API-t, a külső ügynökök folyamatát és a Google Playen közzétett Android-alkalmazást.
