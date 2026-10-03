---
title: Arhitektūra
description: Sistēmas pārskats, publiskie domēni, atbalstītie klienti un pašreizējā datu plūsma, kas orientēta uz darbu bezsaistē.
---

## Sistēmas pārskats

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Principi

1. Atsevišķi publiskie domēni `app`, `api` un `auth`
2. Postgres ir autoritatīvais datu avots
3. iOS klients ir orientēts uz darbu bezsaistē, izmantojot lokālu SQLite un sinhronizāciju
4. Tīmekļa lietotne, iOS lietotne un ārējo aģentu saskarne izmanto vienu un to pašu darbvietas modeli
5. Ārējie aģenti sāk ar `GET https://api.nibomo.com/v1/`

## Atbalstītie klienti

- Tīmekļa lietotne domēnā `app.nibomo.com`
- iOS lietotne galvenajā repozitorijā ar lokālu SQLite krātuvi
- Android lietotne Google Play
- Ārējo aģentu klienti caur atklāšanu, OTP sākotnējo iestatīšanu un `Authorization: ApiKey`

## Datu modelis

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Datu plūsma

### Tīmeklis

1. Pārlūks piesakās caur `auth.<domain>`.
2. Tīmekļa lietotne ielādē darbvietas datus no `api.<domain>`.
3. MI sarunas pieprasījumi iet caur `/chat/local-turn`.
4. Atkārtojumu iesniegšana rakstīšanas brīdī atjaunina plānotāja stāvokli.

### iOS

1. iOS lietotne vispirms raksta lokāli SQLite datubāzē.
2. Lokālās izmaiņas tiek ievietotas izejošo izmaiņu rindā.
3. Sinhronizācija augšupielādē izmaiņas caur `/v1/workspaces/{workspaceId}/sync/push`.
4. Sinhronizācija lejupielādē attālās izmaiņas caur `/v1/workspaces/{workspaceId}/sync/pull`.
5. Lokālā datubāze piemēro izmaiņas un pārvieto sinhronizācijas kursoru uz priekšu.

### Ārējie aģenti

1. Aģenti sāk ar `GET /v1/`.
2. OTP sākotnējā iestatīšana notiek domēnā `auth.<domain>`.
3. Aģents saņem ilgtermiņa API atslēgu.
4. Aģents ielādē `/v1/agent/me`, iegūst darbvietu sarakstu, vajadzības gadījumā izvēlas vienu no tām un pēc tam izmanto `/v1/agent/sql/query` un `/v1/agent/sql/execute`.

## Plānošana

Nibomo kā atkārtojumu plānotāju izmanto FSRS.

Implementācijas piezīmes:

- aizmugursistēmā un iOS ir savstarpēji atbilstošas FSRS implementācijas
- tīmekļa lietotne izmanto to pašu plānošanas datu formātu, taču trešo plānotāja kopiju tajā neiekļauj
- darbvietas līmeņa plānotāja iestatījumi ietver vēlamo atcerēšanās līmeni, apguves soļus, atkārtotas apguves soļus, maksimālo intervālu un intervālu nejaušu variēšanu
- faktiskais atkārtojuma laikspiedols tiek ņemts no `reviewedAtClient`

Detalizētu specifikāciju skati dokumentā [FSRS plānošanas loģika galvenajā repozitorijā](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Autentifikācija

- E-pasta OTP caur Cognito
- Kopīgā domēna pārlūka sesijas sīkdatnes mitinātajai tīmekļa lietotnei
- Aģenta OTP sākotnējā iestatīšana domēnā `auth.<domain>`, kuras rezultātā tiek izsniegta ilgtermiņa ApiKey atslēga
- `AUTH_MODE=none` lokālai izstrādei
- `AUTH_MODE=cognito` produkcijai līdzīgai autentifikācijai

## Izvietojuma struktūra

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda aizmugursistēma
- `auth.<domain>` -> API Gateway + Lambda autentifikācijas pakalpojums
- Postgres pakalpojumā AWS RDS

Galveno domēnu var turpināt izmantot atsevišķai mārketinga vietnei. Ja sākotnējās iestatīšanas laikā tas ir brīvs, infrastruktūra var to īslaicīgi pāradresēt uz `app.<domain>`.
