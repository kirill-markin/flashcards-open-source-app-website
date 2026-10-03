---
title: Pirmie soļi
description: Sāc ar mitināto tīmekļa lietotni, pieslēdz aģentu caur atklāšanas URL vai pats darbini lokālo sistēmu.
---

## Mitinātā tīmekļa lietotne

Ātrākais veids, kā sākt, ir mitinātā tīmekļa lietotne:

1. Atver [app.nibomo.com](https://app.nibomo.com)
2. Piesakies ar savu e-pastu, izmantojot vienreizēju kodu bez paroles
3. Veido kartītes, atkārto tās, kurām pienācis laiks, un izmanto MI sarunu ar darbvietas datiem un pievienotajiem failiem

Mitinātajai versijai nekas nav jāinstalē un serveris nav jāiestata.

## Aģenta iestatīšana

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
- iOS klients galvenajā repozitorijā ar lokālu SQLite un sinhronizāciju, kas orientēta uz darbu bezsaistē
- Kopīgi aizmugursistēmas un autentifikācijas pakalpojumi atsevišķos `api` un `auth` domēnos
- Ārējo aģentu pieslēgšana caur atklāšanu, OTP un ApiKey autentifikāciju
- Atvērtā pirmkoda izvietošanas ceļš AWS ar Postgres kā autoritatīvo datu avotu

## Repozitorija virziens

Projekts ir orientēts uz darbu bezsaistē.

Pašlaik repozitorijā ir tīmekļa lietotne, iOS lietotne, autentifikācijas pakalpojums, aizmugursistēmas API, ārējo aģentu plūsma un Google Play publicētā Android lietotne.
