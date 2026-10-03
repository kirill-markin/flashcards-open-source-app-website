---
title: První kroky
description: Začněte s hostovanou webovou aplikací, připojte agenta přes discovery URL nebo si sami spusťte celý stack lokálně.
---

## Hostovaná webová aplikace

Nejrychleji začnete s hostovanou webovou aplikací:

1. Otevřete [app.nibomo.com](https://app.nibomo.com)
2. Přihlaste se e-mailem pomocí jednorázového kódu (OTP), bez hesla
3. Vytvářejte kartičky, opakujte ty, které jsou na řadě, a používejte AI chat s daty pracovního prostoru a přiloženými soubory

Hostovaná varianta nevyžaduje žádnou instalaci ani nastavení serveru.

## Nastavení agenta

Pokud chcete, aby se Claude Code, Codex nebo OpenClaw připojily přímo, začněte zde:

```text
GET https://api.nibomo.com/v1/
```

Odpověď tohoto discovery endpointu provede agenta přihlášením přes e-mailový OTP, vytvořením dlouhodobého API klíče, načtením účtu, inicializací pracovního prostoru i zveřejněným SQL rozhraním.

Stejný obsah je dostupný i na `GET /v1/agent`, kanonickým veřejným vstupním bodem je ale `/v1/`.

## Vlastní hostování

Pokud raději provozujete vlastní instanci, přečtěte si [návod na vlastní hostování](/docs/self-hosting/).

## Co je k dispozici už dnes

- Hostovaná webová aplikace pro kartičky, opakování a AI chat
- Klient pro iOS v hlavním repozitáři s místní databází SQLite a synchronizací v režimu offline-first
- Sdílený backend a autentizační služby na samostatných doménách `api` a `auth`
- Napojení externích agentů přes discovery, OTP a autentizaci ApiKey
- Nasazení na AWS z otevřeného zdrojového kódu, kde je zdrojem pravdy Postgres

## Směr vývoje repozitáře

Projekt je postavený na principu offline-first.

Repozitář dnes obsahuje webovou aplikaci, aplikaci pro iOS, autentizační službu, backendové API, postup pro externí agenty a aplikaci pro Android zveřejněnou na Google Play.
