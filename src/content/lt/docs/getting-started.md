---
title: Pirmieji žingsniai
description: Pradėkite nuo mūsų talpinamos žiniatinklio programėlės, prijunkite agentą per aptikimo URL arba patys paleiskite vietinę sistemą.
---

## Talpinama žiniatinklio programėlė

Greičiausiai pradėti galite mūsų talpinamoje žiniatinklio programėlėje:

1. Atidarykite [app.nibomo.com](https://app.nibomo.com)
2. Prisijunkite el. paštu vienkartiniu kodu, be slaptažodžio
3. Kurkite korteles, kartokite tas, kurioms atėjo laikas, ir naudokitės DI pokalbiu su darbo srities duomenimis bei pridėtais failais

Renkantis talpinamą variantą nereikia nieko diegti ar konfigūruoti serverio.

## Agento sąranka

Jei norite, kad Claude Code, Codex ar OpenClaw jungtųsi tiesiogiai, pradėkite nuo:

```text
GET https://api.nibomo.com/v1/
```

Šis aptikimo atsakymas žingsnis po žingsnio veda agentą per prisijungimą el. pašto vienkartiniu kodu, ilgalaikio API rakto sukūrimą, paskyros duomenų įkėlimą, darbo srities parengimą ir paskelbtą SQL sąsają.

Tas pats turinys pasiekiamas ir adresu `GET /v1/agent`, tačiau kanoninis viešas įėjimo taškas yra `/v1/`.

## Savame serveryje

Jei norite paleisti savo egzempliorių, žr. [Talpinimo savame serveryje vadovą](/docs/self-hosting/).

## Ką galite naudoti jau dabar

- Talpinama žiniatinklio programėlė kortelėms, kartojimui ir DI pokalbiui
- iOS klientas pagrindinėje saugykloje: vietinė SQLite duomenų bazė ir sinchronizavimas, pirmenybę teikiant darbui neprisijungus
- Bendros serverinės dalies ir autentifikavimo paslaugos atskiruose `api` ir `auth` domenuose
- Išorinių agentų prijungimas per aptikimą, vienkartinį kodą ir ApiKey autentifikavimą
- Atvirojo kodo diegimo kelias AWS, kuriame pagrindinis duomenų šaltinis yra Postgres

## Projekto kryptis

Projektas kuriamas taip, kad pirmenybė būtų teikiama darbui neprisijungus.

Šiuo metu saugykloje yra žiniatinklio programėlė, iOS programėlė, autentifikavimo paslauga, serverinės dalies API, išorinių agentų eiga ir Google Play išleista Android programėlė.
