---
title: Első lépések
description: Kezdd a felhős webalkalmazással, csatlakoztass egy ügynököt a felderítési URL-en keresztül, vagy futtasd magad a helyi környezetet.
---

## Felhős webalkalmazás

A leggyorsabban a felhős webalkalmazással kezdhetsz:

1. Nyisd meg az [app.nibomo.com](https://app.nibomo.com) oldalt
2. Jelentkezz be az e-mail-címeddel, jelszó nélkül, egyszer használatos kóddal (OTP)
3. Készíts kártyákat, ismételd az esedékes elemeket, és használd az AI-csevegést a munkaterület adataival és csatolt fájlokkal

A felhős változathoz nincs szükség telepítésre vagy szerverbeállításra.

## Ügynök beállítása

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
- iOS-kliens a fő tárolóban, helyi SQLite-tal és offline-first szinkronizálással
- Közös backend- és hitelesítési szolgáltatások külön `api` és `auth` domaineken
- Külső ügynökök bekötése felderítéssel, OTP-vel és ApiKey-hitelesítéssel
- Nyílt forráskódú telepítési útvonal AWS-en, ahol a Postgres az egyetlen hiteles adatforrás

## A tároló fejlesztési iránya

A projekt offline-first megközelítésre épül.

Ma a tároló tartalmazza a webalkalmazást, az iOS-alkalmazást, a hitelesítési szolgáltatást, a backend API-t, a külső ügynökök folyamatát és a Google Playen közzétett Android-alkalmazást.
