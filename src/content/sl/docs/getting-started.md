---
title: Prvi koraki
description: Začnite z gostovano spletno aplikacijo, povežite agenta prek URL-ja za odkrivanje ali sami poženite lokalni sistem.
---

## Gostovana spletna aplikacija

Najhitreje začnete z gostovano spletno aplikacijo:

1. Odprite [app.nibomo.com](https://app.nibomo.com)
2. Prijavite se brez gesla, z enkratno kodo, ki jo prejmete po e-pošti
3. Ustvarjajte kartice, ponavljajte tiste, ki so na vrsti, in v klepetu z AI uporabljajte podatke delovnega prostora in priložene datoteke

Za gostovano pot ne potrebujete namestitve ali nastavitve strežnika.

## Nastavitev agenta

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
- Odjemalca za iOS v glavnem repozitoriju z lokalnim SQLite in sinhronizacijo, zasnovanega za delo brez povezave
- Skupni zaledni sistem in storitve za preverjanje pristnosti na ločenih domenah `api` in `auth`
- Uvajanje zunanjih agentov prek odkrivanja, enkratne kode in preverjanja pristnosti ApiKey
- Odprtokodno pot za namestitev na AWS s Postgresom kot virom resnice

## Usmeritev repozitorija

Projekt je zasnovan za delo brez povezave.

Danes repozitorij vključuje spletno aplikacijo, aplikacijo za iOS, storitev za preverjanje pristnosti, zaledni API, tok za zunanje agente in aplikacijo za Android, objavljeno v Google Play.
