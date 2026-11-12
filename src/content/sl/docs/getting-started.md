---
title: Prvi koraki
description: Začnite z aplikacijo za iPhone, iPad, Mac ali Android, spletno aplikacijo, agentom AI ali lastnim strežnikom.
---

Začnete lahko na več načinov, od najbolj priljubljenega naprej:

- **Aplikacija za iPhone, iPad in Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Aplikacija za Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Gostovana spletna aplikacija**: [app.nibomo.com](https://app.nibomo.com)
- **Agenti AI**: [povezovalnik MCP](/docs/mcp-connector/) ali API na `https://api.nibomo.com/v1/`
- **Lastno gostovanje**: [Vodnik za lastno gostovanje](/docs/self-hosting/)

## Mobilne in namizne aplikacije

Namestite izvorno aplikacijo za svojo napravo:

- iPhone, iPad in Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Aplikacije hranijo vaše kartice v napravi, zato lahko ponavljate tudi brez povezave, ko ste spet povezani, pa se sinhronizirajo. Začnete lahko kot gost in se prijavite pozneje.

### Pripomočki za začetni zaslon

Aplikacija Nibomo prinaša pripomoček Ponavljanje za iPhone, iPad, Mac in Android. Na voljo je v treh velikostih:

- **Majhen**: koliko kartic čaka na ponovitev in vaš niz učnih dni
- **Srednji**: koliko kartic čaka na ponovitev in vprašanje na naslednji kartici
- **Velik**: koliko kartic čaka na ponovitev, naslednje vprašanje in vaš niz

Ko ni nobene kartice za ponovitev, pripomoček prikaže »Vse ponovljeno« in kdaj bo na vrsti naslednja kartica. Odgovora nikoli ne prikaže. Tapnite pripomoček, da odprete Ponavljanje; srednji ali velik pripomoček odpre Ponavljanje pri kartici, ki jo prikazuje. Pripomočki so brezplačni za vse, tudi za goste.

Še osem pripomočkov prikazuje vaš napredek: »Dejavnost«, »Leto«, »Danes«, »Ponovitve«, »Nizi«, »Koledar«, »Prihajajoče« in »Pregled«. V iPhonu in iPadu lahko pripomoček »Za ponovitev« postavite tudi na zaklenjeni zaslon, [vodnik po pripomočkih](/blog/flashcard-widget/) pa prikaže vsakega od njih.

Pripomoček v iPhonu, iPadu ali Macu dodate tako, da odprete galerijo pripomočkov, izberete Nibomo in nato velikost. V Androidu dodajte želeni pripomoček Nibomo s seznama pripomočkov in mu nato spremenite velikost; postavitev se prilagodi velikosti.

## Gostovana spletna aplikacija

Najhitreje začnete z gostovano spletno aplikacijo:

1. Odprite [app.nibomo.com](https://app.nibomo.com)
2. Prijavite se brez gesla, z enkratno kodo, ki jo prejmete po e-pošti
3. Ustvarjajte kartice, ponavljajte tiste, ki so na vrsti, in v klepetu z AI uporabljajte podatke delovnega prostora in priložene datoteke

Za gostovano pot ne potrebujete namestitve ali nastavitve strežnika.

## Prenesite svoje kartice

Že imate kartice v Quizletu, Ankiju ali drugi aplikaciji? Odprite **Knjižnica > Uvoz** in si v [vodniku za uvoz kartic](/sl/docs/import-flashcards/) oglejte, katero obliko uporabiti in kaj se prenese.

## Nastavitev agenta

Odjemalci MCP, kot so Claude, ChatGPT in Cursor, se lahko povežejo po navodilih v [vodniku za povezovalnik MCP](/docs/mcp-connector/).

Če želite, da se Claude Code, Codex ali OpenClaw povežejo neposredno, začnite pri:

```text
GET https://api.nibomo.com/v1/
```

Ta odgovor za odkrivanje agenta vodi skozi prijavo z enkratno kodo po e-pošti, ustvarjanje dolgotrajnega ključa API, nalaganje računa, začetno nastavitev delovnega prostora in objavljeni vmesnik SQL.

Isti odgovor je na voljo tudi na `GET /v1/agent`, vendar je `/v1/` kanonična javna vstopna točka.

## Lastno gostovanje

Če raje poganjate lastno instanco, si oglejte [Vodnik za lastno gostovanje](/docs/self-hosting/).

## Kaj dobite danes

- Gostovano spletno aplikacijo za kartice, ponavljanje in klepet z AI
- Izvorne aplikacije za iPhone, iPad, Mac in Android z lokalno shrambo SQLite in sinhronizacijo, zasnovano za delo brez povezave
- Skupni zaledni sistem in storitve za preverjanje pristnosti na ločenih domenah `api` in `auth`
- Uvajanje zunanjih agentov prek odkrivanja, enkratne kode in preverjanja pristnosti ApiKey
- Odprtokodno pot za namestitev na AWS s Postgresom kot virom resnice

## Usmeritev repozitorija

Projekt je zasnovan za delo brez povezave.

Danes repozitorij vključuje spletno aplikacijo, aplikacijo za iOS, storitev za preverjanje pristnosti, zaledni API, tok za zunanje agente in aplikacijo za Android, objavljeno v Google Play.
