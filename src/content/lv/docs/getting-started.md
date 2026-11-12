---
title: Pirmie soļi
description: Sāc ar iPhone, iPad, Mac vai Android lietotni, tīmekļa lietotni, MI aģentu vai savu serveri.
---

Sākt var vairākos veidos – sākot ar populārāko:

- **iPhone, iPad un Mac lietotne**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android lietotne**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Mitinātā tīmekļa lietotne**: [app.nibomo.com](https://app.nibomo.com)
- **MI aģenti**: [MCP savienotājs](/docs/mcp-connector/) vai API adresē `https://api.nibomo.com/v1/`
- **Darbināšana savā serverī**: [pamācība darbināšanai savā serverī](/docs/self-hosting/)

## Mobilās un datora lietotnes

Instalē savai ierīcei paredzēto lietotni:

- iPhone, iPad un Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Lietotnes glabā tavas kartītes ierīcē, tāpēc vari atkārtot arī bezsaistē, un, kad atkal esi tiešsaistē, dati tiek sinhronizēti. Vari sākt kā viesis un pieteikties vēlāk.

### Sākuma ekrāna logrīki

Nibomo lietotnē ir logrīks “Atkārtošana” iPhone, iPad, Mac un Android ierīcēm. Tam ir trīs izmēri:

- **Mazais**: cik kartīšu jāatkārto un tava mācību sērija
- **Vidējais**: cik kartīšu jāatkārto un nākamās kartītes jautājums
- **Lielais**: cik kartīšu jāatkārto, nākamais jautājums un tava sērija

Kad nekas nav jāatkārto, logrīks rāda “Viss atkārtots” un to, kad pienāks laiks nākamajai kartītei. Atbildi tas nekad nerāda. Pieskaries logrīkam, lai atvērtu sadaļu “Atkārtošana”; vidējais vai lielais logrīks tajā uzreiz atver redzamo kartīti. Logrīki ir bez maksas visiem, arī viesiem.

Vēl astoņi logrīki rāda tavu progresu: “Aktivitāte”, “Gads”, “Šodien”, “Atkārtojumi”, “Sērijas”, “Kalendārs”, “Gaidāmie” un “Pārskats”. iPhone un iPad ierīcēs logrīku “Jāatkārto” vari likt arī bloķēšanas ekrānā, un [logrīku ceļvedis](/blog/flashcard-widget/) parāda katru no tiem.

Lai pievienotu logrīku iPhone, iPad vai Mac ierīcē, atver logrīku galeriju, izvēlies Nibomo un norādi izmēru. Android ierīcē pievieno vajadzīgo Nibomo logrīku no logrīku saraksta un pēc tam maini tā izmēru; izkārtojums pielāgojas izmēram.

## Mitinātā tīmekļa lietotne

Ātrākais veids, kā sākt, ir mitinātā tīmekļa lietotne:

1. Atver [app.nibomo.com](https://app.nibomo.com)
2. Piesakies ar savu e-pastu, izmantojot vienreizēju kodu bez paroles
3. Veido kartītes, atkārto tās, kurām pienācis laiks, un izmanto MI sarunu ar darbvietas datiem un pievienotajiem failiem

Mitinātajai versijai nekas nav jāinstalē un serveris nav jāiestata.

## Pārvieto savas kartītes

Vai tev jau ir kartītes Quizlet, Anki vai citā lietotnē? Atver **Bibliotēka > Importēt**. [Kartīšu importēšanas pamācībā](/docs/import-flashcards/) uzzināsi, kuru formātu izvēlēties un ko var pārnest.

## Aģenta iestatīšana

MCP klienti, piemēram, Claude, ChatGPT un Cursor, var pieslēgties, izmantojot [MCP savienotāja pamācību](/docs/mcp-connector/).

Ja vēlies, lai Claude Code, Codex vai OpenClaw pieslēdzas tieši, sāc ar:

```text
GET https://api.nibomo.com/v1/
```

Šī atklāšanas atbilde soli pa solim vada aģentu cauri visam procesam: pieteikšanās ar e-pasta OTP, ilgtermiņa API atslēgas izveide, konta ielāde, darbvietas sākotnējā iestatīšana un publicētā SQL saskarne.

Tie paši dati ir pieejami arī adresē `GET /v1/agent`, taču kanoniskais publiskais ieejas punkts ir `/v1/`.

## Darbināšana savā serverī

Ja vēlies darbināt pats savu instanci, skati [pamācību darbināšanai savā serverī](/docs/self-hosting/).

## Kas pieejams jau šodien

- Mitināta tīmekļa lietotne kartītēm, atkārtošanai un MI sarunai
- Natīvās iPhone, iPad, Mac un Android lietotnes ar lokālu SQLite krātuvi un sinhronizāciju, kas orientēta uz darbu bezsaistē
- Kopīgi aizmugursistēmas un autentifikācijas pakalpojumi atsevišķos `api` un `auth` domēnos
- Ārējo aģentu pieslēgšana caur atklāšanu, OTP un ApiKey autentifikāciju
- Atvērtā pirmkoda izvietošanas ceļš AWS ar Postgres kā autoritatīvo datu avotu

## Repozitorija virziens

Projekts ir orientēts uz darbu bezsaistē.

Pašlaik repozitorijā ir tīmekļa lietotne, iOS lietotne, autentifikācijas pakalpojums, aizmugursistēmas API, ārējo aģentu plūsma un Google Play publicētā Android lietotne.
