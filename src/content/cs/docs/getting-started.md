---
title: První kroky
description: Začněte s aplikací pro iPhone, iPad, Mac nebo Android, s webovou aplikací, s AI agentem nebo na vlastním serveru.
---

Začít můžete několika způsoby, od nejoblíbenějšího:

- **Aplikace pro iPhone, iPad a Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplikace pro Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Hostovaná webová aplikace**: [app.nibomo.com](https://app.nibomo.com)
- **AI agenti**: [MCP konektor](/docs/mcp-connector/) nebo API na adrese `https://api.nibomo.com/v1/`
- **Vlastní hostování**: [návod na vlastní hostování](/docs/self-hosting/)

## Mobilní a desktopové aplikace

Nainstalujte si nativní aplikaci pro své zařízení:

- iPhone, iPad a Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplikace ukládají kartičky přímo v zařízení, takže můžete opakovat i offline, a po návratu online se synchronizují. Začít můžete jako host a přihlásit se později.

### Widgety na ploše

Aplikace Nibomo přidává na iPhone, iPad, Mac a Android widget Opakování. Nabízí se ve třech velikostech:

- **Malý**: kolik kartiček čeká na opakování a vaše studijní série
- **Střední**: kolik kartiček čeká na opakování a otázka z vaší další kartičky
- **Velký**: kolik kartiček čeká na opakování, vaše další otázka a vaše série

Když není nic na řadě, widget ukáže „Vše hotovo“ a kdy přijde na řadu další kartička. Odpověď nikdy neukazuje. Klepnutím na widget otevřete Opakování; střední nebo velký widget otevře Opakování přímo na kartičce, kterou zobrazuje. Widgety jsou zdarma pro všechny, včetně hostů.

Dalších osm widgetů sleduje váš pokrok: „Aktivita“, „Rok“, „Dnes“, „Graf opakování“, „Série“, „Kalendář“, „Nadcházející“ a „Přehled“. Na iPhonu a iPadu můžete widget „K opakování“ přidat i na zamčenou obrazovku a [průvodce widgety](/blog/flashcard-widget/) ukazuje každý z nich.

Na iPhonu, iPadu nebo Macu widget přidáte tak, že otevřete galerii widgetů, vyberete Nibomo a zvolíte velikost. Na Androidu přidejte požadovaný widget Nibomo ze seznamu widgetů a pak změňte jeho velikost; rozvržení se velikosti přizpůsobí.

## Hostovaná webová aplikace

Nejrychleji začnete s hostovanou webovou aplikací:

1. Otevřete [app.nibomo.com](https://app.nibomo.com)
2. Přihlaste se e-mailem pomocí jednorázového kódu (OTP), bez hesla
3. Vytvářejte kartičky, opakujte ty, které jsou na řadě, a používejte AI chat s daty pracovního prostoru a přiloženými soubory

Hostovaná varianta nevyžaduje žádnou instalaci ani nastavení serveru.

## Nastavení agenta

MCP klienti jako Claude, ChatGPT a Cursor se mohou připojit podle [návodu k MCP konektoru](/docs/mcp-connector/).

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
- Nativní aplikace pro iPhone, iPad, Mac a Android s místním úložištěm SQLite a synchronizací v režimu offline-first
- Sdílený backend a autentizační služby na samostatných doménách `api` a `auth`
- Napojení externích agentů přes discovery, OTP a autentizaci ApiKey
- Nasazení na AWS z otevřeného zdrojového kódu, kde je zdrojem pravdy Postgres

## Směr vývoje repozitáře

Projekt je postavený na principu offline-first.

Repozitář dnes obsahuje webovou aplikaci, aplikaci pro iOS, autentizační službu, backendové API, postup pro externí agenty a aplikaci pro Android zveřejněnou na Google Play.
