---
title: Kuanza
description: Anza na programu ya wavuti iliyopangishwa, unganisha wakala kupitia URL ya ugunduzi, au endesha mrundikano mwenyewe kwenye kompyuta yako.
---

## Programu ya wavuti iliyopangishwa

Njia ya haraka zaidi ya kuanza ni programu ya wavuti iliyopangishwa:

1. Fungua [app.nibomo.com](https://app.nibomo.com)
2. Ingia kwa barua pepe yako ukitumia OTP, bila nenosiri
3. Tengeneza kadi, pitia kadi zinazostahili marudio, na utumie gumzo la AI pamoja na data ya nafasi ya kazi na viambatisho vya faili

Njia iliyopangishwa haihitaji usakinishaji wala kusanidi seva.

## Kuunganisha wakala

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
- Kiteja cha iOS kwenye hazina kuu, chenye SQLite ya ndani na usawazishaji unaotanguliza matumizi bila intaneti
- Huduma za pamoja za backend na uthibitishaji kwenye vikoa tofauti vya `api` na `auth`
- Kuwaunganisha mawakala wa nje kupitia ugunduzi, OTP na uthibitishaji wa ApiKey
- Njia ya usambazaji wa chanzo huria kwenye AWS, ambapo Postgres ndiyo chanzo rasmi cha data

## Mwelekeo wa hazina

Mradi huu unatanguliza matumizi bila intaneti.

Leo hazina inajumuisha programu ya wavuti, programu ya iOS, huduma ya uthibitishaji, API ya backend, mtiririko wa mawakala wa nje, na programu ya Android iliyochapishwa kwenye Google Play.
