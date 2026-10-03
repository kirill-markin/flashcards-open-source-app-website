---
title: Muundo
description: Muhtasari wa mfumo, vikoa vya umma, viteja vinavyotumika, na mtiririko wa sasa wa data unaotanguliza matumizi bila intaneti.
---

## Muhtasari wa mfumo

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Kanuni

1. Vikoa tofauti vya umma kwa `app`, `api` na `auth`
2. Postgres ndiyo chanzo rasmi cha data
3. Kiteja cha iOS kinatanguliza matumizi bila intaneti, kwa SQLite ya ndani pamoja na usawazishaji
4. Programu ya wavuti, programu ya iOS na kiolesura cha mawakala wa nje hutumia muundo mmoja wa nafasi ya kazi
5. Mawakala wa nje huanza na `GET https://api.nibomo.com/v1/`

## Viteja vinavyotumika

- Programu ya wavuti kwenye `app.nibomo.com`
- Programu ya iOS kwenye hazina kuu, yenye hifadhi ya ndani ya SQLite
- Programu ya Android kwenye Google Play
- Viteja vya mawakala wa nje kupitia ugunduzi, uanzishaji wa OTP na `Authorization: ApiKey`

## Muundo wa data

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Mtiririko wa data

### Wavuti

1. Kivinjari huingia kupitia `auth.<domain>`.
2. Programu ya wavuti hupakia data ya nafasi ya kazi kutoka `api.<domain>`.
3. Maombi ya gumzo la AI hupitia `/chat/local-turn`.
4. Marudio yanayowasilishwa husasisha hali ya kipanga ratiba wakati wa kuandika.

### iOS

1. Programu ya iOS huandika kwanza kwenye SQLite ya ndani.
2. Mabadiliko ya ndani huwekwa kwenye foleni ya kusubiri kutumwa.
3. Usawazishaji hupakia mabadiliko kupitia `/v1/workspaces/{workspaceId}/sync/push`.
4. Usawazishaji hupakua masasisho ya mbali kupitia `/v1/workspaces/{workspaceId}/sync/pull`.
5. Hifadhidata ya ndani hutekeleza mabadiliko na kusogeza mbele kiashiria cha usawazishaji.

### Mawakala wa nje

1. Mawakala huanza na `GET /v1/`.
2. Uanzishaji wa OTP hufanyika kwenye `auth.<domain>`.
3. Wakala hupokea ufunguo wa API wa muda mrefu.
4. Wakala hupakia `/v1/agent/me`, huorodhesha nafasi za kazi, huchagua moja ikihitajika, kisha hutumia `/v1/agent/sql/query` na `/v1/agent/sql/execute`.

## Upangaji wa ratiba

Nibomo hutumia FSRS kama kipanga ratiba cha marudio.

Maelezo ya utekelezaji:

- backend na iOS zina utekelezaji wa FSRS unaolingana
- programu ya wavuti hufuata mkataba uleule wa data ya ratiba, lakini haina nakala ya tatu ya kipanga ratiba
- mipangilio ya kipanga ratiba ya kiwango cha nafasi ya kazi inajumuisha kiwango cha kukumbuka kinacholengwa, hatua za kujifunza, hatua za kujifunza upya, muda wa juu kabisa kati ya marudio, na mtawanyiko wa nasibu wa vipindi
- muda halisi wa marudio hutoka kwenye `reviewedAtClient`

Kwa mkataba wa kina, angalia [mantiki ya upangaji wa ratiba ya FSRS kwenye hazina kuu](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Uthibitishaji

- OTP ya barua pepe kupitia Cognito
- Vidakuzi vya kipindi cha kivinjari vya kikoa cha pamoja kwa programu ya wavuti iliyopangishwa
- Uanzishaji wa OTP wa wakala kwenye `auth.<domain>`, unaotoa ApiKey ya muda mrefu
- `AUTH_MODE=none` kwa uendelezaji wa ndani
- `AUTH_MODE=cognito` kwa uthibitishaji unaofanana na wa uzalishaji

## Muundo wa usambazaji

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + backend ya Lambda
- `auth.<domain>` -> API Gateway + huduma ya uthibitishaji ya Lambda
- Postgres kwenye AWS RDS

Kikoa kikuu kinaweza kubaki kwenye tovuti tofauti ya masoko. Ikiwa hakitumiki wakati wa usanidi wa awali, miundombinu inaweza kukielekeza kwa muda kwenda `app.<domain>`.
