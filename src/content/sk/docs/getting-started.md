---
title: Prvé kroky
description: Začnite s hosťovanou webovou aplikáciou, pripojte agenta cez zisťovaciu URL adresu alebo si sami spustite lokálny stack.
---

## Hosťovaná webová aplikácia

Najrýchlejšie začnete s hosťovanou webovou aplikáciou:

1. Otvorte [app.nibomo.com](https://app.nibomo.com)
2. Prihláste sa e-mailom pomocou jednorazového kódu bez hesla
3. Vytvárajte kartičky, opakujte tie, na ktoré prišiel čas, a používajte AI chat s dátami pracovného priestoru a priloženými súbormi

Pri hosťovanej aplikácii nemusíte nič inštalovať ani nastavovať server.

## Nastavenie agenta

Ak chcete, aby sa Claude Code, Codex alebo OpenClaw pripojili priamo, začnite tu:

```text
GET https://api.nibomo.com/v1/
```

Táto zisťovacia odpoveď prevedie agenta prihlásením cez e-mailový OTP, vytvorením dlhodobého API kľúča, načítaním účtu, prvotným nastavením pracovného priestoru a zverejneným SQL rozhraním.

Rovnaký obsah je dostupný aj na `GET /v1/agent`, ale kanonickým verejným vstupným bodom je `/v1/`.

## Vlastné hosťovanie

Ak radšej prevádzkujete vlastnú inštanciu, pozrite si [Návod na vlastné hosťovanie](/docs/self-hosting/).

## Čo dostanete už dnes

- Hosťovanú webovú aplikáciu na kartičky, opakovanie a AI chat
- Klienta pre iOS v hlavnom repozitári s lokálnym SQLite a synchronizáciou navrhnutou primárne na prácu offline
- Spoločný backend a autentifikačné služby na samostatných doménach `api` a `auth`
- Pripojenie externých agentov cez zisťovanie, OTP a autentifikáciu ApiKey
- Nasadenie s otvoreným zdrojovým kódom na AWS, kde je zdrojom pravdy Postgres

## Smerovanie repozitára

Projekt je navrhnutý primárne na prácu offline.

Repozitár dnes obsahuje webovú aplikáciu, aplikáciu pre iOS, autentifikačnú službu, backendové API, postup pre externých agentov a aplikáciu pre Android zverejnenú na Google Play.
