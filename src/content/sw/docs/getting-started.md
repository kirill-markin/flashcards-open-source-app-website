---
title: Kuanza
description: Anza na programu ya iPhone, iPad, Mac au Android, programu ya wavuti, wakala wa AI, au seva yako mwenyewe.
---

Kuna njia kadhaa za kuanza, kuanzia inayopendwa zaidi:

- **Programu ya iPhone, iPad na Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Programu ya Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Programu ya wavuti iliyopangishwa**: [app.nibomo.com](https://app.nibomo.com)
- **Mawakala wa AI**: [kiunganishi cha MCP](/docs/mcp-connector/) au API kwenye `https://api.nibomo.com/v1/`
- **Kujipangia mwenyewe**: [Mwongozo wa kujipangia mwenyewe](/docs/self-hosting/)

## Programu za simu na kompyuta

Sakinisha programu iliyoundwa mahsusi kwa kifaa chako:

- iPhone, iPad na Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Programu huhifadhi kadi zako kwenye kifaa, kwa hiyo unaweza kufanya marudio bila intaneti, na husawazisha unapounganishwa tena. Unaweza kuanza kama mgeni na kuingia baadaye.

### Wijeti za skrini ya kwanza

Programu ya Nibomo inaongeza wijeti ya Marudio kwenye iPhone, iPad, Mac na Android. Inapatikana katika ukubwa wa aina tatu:

- **Ndogo**: idadi ya kadi zinazostahili marudio na mfululizo wako wa kujifunza
- **Wastani**: idadi ya kadi zinazostahili marudio na swali la kadi yako inayofuata
- **Kubwa**: idadi ya kadi zinazostahili marudio, swali lako linalofuata na mfululizo wako

Ikiwa hakuna kadi inayostahili marudio, wijeti huonyesha “Umemaliza yote” na wakati kadi inayofuata itakapostahili marudio. Haionyeshi jibu kamwe. Gusa wijeti ili kufungua Marudio; wijeti ya Wastani au Kubwa hufungua Marudio kwenye kadi inayoionyesha. Wijeti ni bure kwa kila mtu, wakiwemo watumiaji wageni.

Wijeti nyingine nane zinaonyesha maendeleo yako: “Shughuli”, “Mwaka”, “Leo”, “Idadi ya marudio”, “Mifululizo”, “Kalenda”, “Zinazokuja” na “Dashibodi”. Kwenye iPhone na iPad, unaweza pia kuweka wijeti ya “Kadi za kurudia” kwenye skrini iliyofungwa, na [mwongozo wa wijeti](/blog/flashcard-widget/) unaonyesha kila moja.

Ili kuongeza wijeti kwenye iPhone, iPad au Mac, fungua matunzio ya wijeti, chagua Nibomo, kisha uchague ukubwa. Kwenye Android, ongeza mojawapo ya wijeti za Nibomo kutoka kwenye orodha ya wijeti, kisha ubadilishe ukubwa wake; mpangilio hufuata ukubwa.

## Programu ya wavuti iliyopangishwa

Njia ya haraka zaidi ya kuanza ni programu ya wavuti iliyopangishwa:

1. Fungua [app.nibomo.com](https://app.nibomo.com)
2. Ingia kwa barua pepe yako ukitumia OTP, bila nenosiri
3. Tengeneza kadi, pitia kadi zinazostahili marudio, na utumie gumzo la AI pamoja na data ya nafasi ya kazi na viambatisho vya faili

Njia iliyopangishwa haihitaji usakinishaji wala kusanidi seva.

## Hamisha kadi zako

Je, tayari una kadi katika Quizlet, Anki au programu nyingine? Fungua **Maktaba > Ingiza** na ufuate [mwongozo wa kuingiza kadi](/sw/docs/import-flashcards/) ili uchague umbizo linalofaa na ujue kinachohamishwa.

## Kuunganisha wakala

Viteja vya MCP kama Claude, ChatGPT na Cursor vinaweza kuunganishwa kupitia [mwongozo wa kiunganishi cha MCP](/docs/mcp-connector/).

Ikiwa unataka Claude Code, Codex au OpenClaw viunganishwe moja kwa moja, anza na:

```text
GET https://api.nibomo.com/v1/
```

Jibu hilo la ugunduzi humwongoza wakala hatua kwa hatua: kuingia kwa OTP ya barua pepe, kuunda ufunguo wa API wa muda mrefu, kupakia akaunti, kuandaa nafasi ya kazi, na kutumia kiolesura cha SQL kilichochapishwa.

Data hiyo hiyo inapatikana pia kupitia `GET /v1/agent`, lakini `/v1/` ndiyo sehemu rasmi ya umma ya kuanzia.

## Kujipangia mwenyewe

Ikiwa ungependa kuendesha toleo lako mwenyewe, angalia [Mwongozo wa kujipangia mwenyewe](/docs/self-hosting/).

## Unachopata leo

- Programu ya wavuti iliyopangishwa kwa kadi, marudio na gumzo la AI
- Programu mahsusi za iPhone, iPad, Mac na Android, zenye hifadhi ya ndani ya SQLite na usawazishaji unaotanguliza matumizi bila intaneti
- Huduma za pamoja za backend na uthibitishaji kwenye vikoa tofauti vya `api` na `auth`
- Kuwaunganisha mawakala wa nje kupitia ugunduzi, OTP na uthibitishaji wa ApiKey
- Njia ya usambazaji wa chanzo huria kwenye AWS, ambapo Postgres ndiyo chanzo rasmi cha data

## Mwelekeo wa hazina

Mradi huu unatanguliza matumizi bila intaneti.

Leo hazina inajumuisha programu ya wavuti, programu ya iOS, huduma ya uthibitishaji, API ya backend, mtiririko wa mawakala wa nje, na programu ya Android iliyochapishwa kwenye Google Play.
