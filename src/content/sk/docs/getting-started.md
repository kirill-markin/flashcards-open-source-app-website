---
title: Prvé kroky
description: Začnite s aplikáciou pre iPhone, iPad, Mac alebo Android, webovou aplikáciou, AI agentom alebo vlastným serverom.
---

Začať môžete viacerými spôsobmi, od najobľúbenejšieho:

- **Aplikácia pre iPhone, iPad a Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplikácia pre Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hosťovaná webová aplikácia**: [app.nibomo.com](https://app.nibomo.com)
- **AI agenti**: [MCP konektor](/docs/mcp-connector/) alebo API na adrese `https://api.nibomo.com/v1/`
- **Vlastné hosťovanie**: [Návod na vlastné hosťovanie](/docs/self-hosting/)

## Mobilné a desktopové aplikácie

Nainštalujte si natívnu aplikáciu pre svoje zariadenie:

- iPhone, iPad a Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplikácie ukladajú kartičky v zariadení, takže môžete opakovať aj offline, a keď ste znova online, synchronizujú sa. Môžete začať ako hosť a prihlásiť sa neskôr.

### Widgety na ploche

Aplikácia Nibomo pridáva widget „Opakovanie“ na iPhone, iPad, Mac a Android. Je dostupný v troch veľkostiach:

- **Malý**: koľko kartičiek čaká na opakovanie a vaša séria učenia
- **Stredný**: koľko kartičiek čaká na opakovanie a otázka z ďalšej kartičky
- **Veľký**: koľko kartičiek čaká na opakovanie, ďalšia otázka a vaša séria

Keď nie je čo opakovať, widget zobrazí „Všetko zopakované“ a čas, keď príde na rad ďalšia kartička. Odpoveď nikdy nezobrazuje. Ťuknutím na widget otvoríte sekciu Opakovanie; stredný alebo veľký widget ju otvorí priamo na zobrazenej kartičke. Widgety sú bezplatné pre všetkých vrátane hostí.

Ďalších osem widgetov ukazuje váš pokrok: „Aktivita“, „Rok“, „Dnes“, „Opakovania“, „Série“, „Kalendár“, „Nadchádzajúce“ a „Prehľad“. Na iPhone môžete widget „Na opakovanie“ pridať aj na zamknutú obrazovku a [sprievodca widgetmi](/blog/flashcard-widget/) ukazuje každý z nich.

Ak ho chcete pridať na iPhone, iPade alebo Macu, otvorte galériu widgetov, vyberte Nibomo a zvoľte veľkosť. V Androide pridajte widget Nibomo zo zoznamu widgetov a potom zmeňte jeho veľkosť; rozloženie sa prispôsobí veľkosti.

## Hosťovaná webová aplikácia

Najrýchlejšie začnete s hosťovanou webovou aplikáciou:

1. Otvorte [app.nibomo.com](https://app.nibomo.com)
2. Prihláste sa e-mailom pomocou jednorazového kódu bez hesla
3. Vytvárajte kartičky, opakujte tie, na ktoré prišiel čas, a používajte AI chat s dátami pracovného priestoru a priloženými súbormi

Pri hosťovanej aplikácii nemusíte nič inštalovať ani nastavovať server.

## Nastavenie agenta

MCP klienti ako Claude, ChatGPT a Cursor sa môžu pripojiť podľa [návodu na MCP konektor](/docs/mcp-connector/).

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
- Natívne aplikácie pre iPhone, iPad, Mac a Android s lokálnym úložiskom SQLite a synchronizáciou navrhnutou primárne na prácu offline
- Spoločný backend a autentifikačné služby na samostatných doménach `api` a `auth`
- Pripojenie externých agentov cez zisťovanie, OTP a autentifikáciu ApiKey
- Nasadenie s otvoreným zdrojovým kódom na AWS, kde je zdrojom pravdy Postgres

## Smerovanie repozitára

Projekt je navrhnutý primárne na prácu offline.

Repozitár dnes obsahuje webovú aplikáciu, aplikáciu pre iOS, autentifikačnú službu, backendové API, postup pre externých agentov a aplikáciu pre Android zverejnenú na Google Play.
