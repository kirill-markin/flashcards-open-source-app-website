---
title: Pirmieji žingsniai
description: Pradėkite nuo iPhone, iPad, Mac ar Android programėlės, žiniatinklio programėlės, DI agento arba savo serverio.
---

Pradėti galite keliais būdais – nuo populiariausio:

- **iPhone, iPad ir Mac programėlė**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android programėlė**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Talpinama žiniatinklio programėlė**: [app.nibomo.com](https://app.nibomo.com)
- **DI agentai**: [MCP jungtis](/docs/mcp-connector/) arba API adresu `https://api.nibomo.com/v1/`
- **Savame serveryje**: [Talpinimo savame serveryje vadovas](/docs/self-hosting/)

## Mobiliosios ir kompiuterio programėlės

Įdiekite savo įrenginiui skirtą programėlę:

- iPhone, iPad ir Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Programėlės saugo jūsų korteles įrenginyje, todėl kartoti galite ir neprisijungę prie interneto, o vėl prisijungus duomenys sinchronizuojami. Pradėti galite kaip svečias, o prisijungti – vėliau.

### Pradžios ekrano valdikliai

Nibomo programėlėje yra valdiklis „Kartojimas“, skirtas iPhone, iPad, Mac ir Android. Jis būna trijų dydžių:

- **Mažas**: kiek kortelių laikas kartoti ir jūsų mokymosi serija
- **Vidutinis**: kiek kortelių laikas kartoti ir kitos kortelės klausimas
- **Didelis**: kiek kortelių laikas kartoti, kitas klausimas ir jūsų serija

Kai kartoti nėra ko, valdiklyje rodoma „Viskas pakartota“ ir kada laikas kartoti kitą kortelę. Atsakymo jis niekada nerodo. Bakstelėkite valdiklį, kad atidarytumėte skiltį „Kartojimas“; vidutinis arba didelis valdiklis joje iškart atveria rodomą kortelę. Valdikliai nemokami visiems, įskaitant svečius.

Norėdami pridėti valdiklį, atidarykite įrenginio valdiklių galeriją, pasirinkite Nibomo ir išsirinkite dydį.

## Talpinama žiniatinklio programėlė

Greičiausiai pradėti galite mūsų talpinamoje žiniatinklio programėlėje:

1. Atidarykite [app.nibomo.com](https://app.nibomo.com)
2. Prisijunkite el. paštu vienkartiniu kodu, be slaptažodžio
3. Kurkite korteles, kartokite tas, kurioms atėjo laikas, ir naudokitės DI pokalbiu su darbo srities duomenimis bei pridėtais failais

Renkantis talpinamą variantą nereikia nieko diegti ar konfigūruoti serverio.

## Agento sąranka

MCP klientai, pavyzdžiui, Claude, ChatGPT ir Cursor, gali prisijungti pagal [MCP jungties vadovą](/docs/mcp-connector/).

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
- iPhone, iPad, Mac ir Android programėlės su vietine SQLite saugykla ir sinchronizavimu, pirmenybę teikiant darbui neprisijungus
- Bendros serverinės dalies ir autentifikavimo paslaugos atskiruose `api` ir `auth` domenuose
- Išorinių agentų prijungimas per aptikimą, vienkartinį kodą ir ApiKey autentifikavimą
- Atvirojo kodo diegimo kelias AWS, kuriame pagrindinis duomenų šaltinis yra Postgres

## Projekto kryptis

Projektas kuriamas taip, kad pirmenybė būtų teikiama darbui neprisijungus.

Šiuo metu saugykloje yra žiniatinklio programėlė, iOS programėlė, autentifikavimo paslauga, serverinės dalies API, išorinių agentų eiga ir Google Play išleista Android programėlė.
