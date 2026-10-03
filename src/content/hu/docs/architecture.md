---
title: Architektúra
description: Rendszeráttekintés, nyilvános domainek, támogatott kliensek és a jelenlegi offline-first adatfolyam.
---

## Rendszeráttekintés

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Alapelvek

1. Külön nyilvános domain az `app`, az `api` és az `auth` számára
2. A Postgres az egyetlen hiteles adatforrás
3. Az iOS-kliens offline-first: helyi SQLite-ot és szinkronizálást használ
4. A webalkalmazás, az iOS-alkalmazás és a külső ügynöki felület ugyanazt a munkaterület-modellt használja
5. A külső ügynökök a `GET https://api.nibomo.com/v1/` címről indulnak

## Támogatott kliensek

- Webalkalmazás az `app.nibomo.com` címen
- iOS-alkalmazás a fő tárolóban, helyi SQLite-tárolással
- Android-alkalmazás a Google Playen
- Külső ügynökkliensek felderítéssel, OTP-alapú előkészítéssel és `Authorization: ApiKey` fejléccel

## Adatmodell

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Adatfolyam

### Web

1. A böngésző az `auth.<domain>` címen keresztül jelentkezik be.
2. A webalkalmazás az `api.<domain>` címről tölti be a munkaterület adatait.
3. Az AI-csevegés kérései a `/chat/local-turn` útvonalon mennek át.
4. A beküldött ismétlések íráskor frissítik az ütemező állapotát.

### iOS

1. Az iOS-alkalmazás először helyben, SQLite-ba ír.
2. A helyi változások egy kimenő sorba (outbox) kerülnek.
3. A szinkronizálás a `/v1/workspaces/{workspaceId}/sync/push` útvonalon tölti fel a változásokat.
4. A szinkronizálás a `/v1/workspaces/{workspaceId}/sync/pull` útvonalon tölti le a távoli frissítéseket.
5. A helyi adatbázis alkalmazza a változásokat, és továbblépteti a szinkronizálási kurzort.

### Külső ügynökök

1. Az ügynökök a `GET /v1/` hívással indulnak.
2. Az OTP-alapú előkészítés az `auth.<domain>` címen fut.
3. Az ügynök hosszú élettartamú API-kulcsot kap.
4. Az ügynök betölti a `/v1/agent/me` végpontot, kilistázza a munkaterületeket, szükség esetén kiválaszt egyet, majd a `/v1/agent/sql/query` és a `/v1/agent/sql/execute` végpontot használja.

## Ütemezés

A Nibomo az FSRS-t használja ismétlésütemezőként.

Megvalósítási megjegyzések:

- a backend és az iOS egymást tükröző FSRS-implementációt tart fenn
- a webalkalmazás tükrözi az ütemezési adatszerződést, de nem tartalmaz harmadik ütemezőpéldányt
- a munkaterület szintű ütemezőbeállítások közé tartozik a kívánt felidézési arány, a tanulási lépések, az újratanulási lépések, a maximális időköz és a véletlenszerű szórás (fuzz)
- az ismétlés valódi időpontja a `reviewedAtClient` mezőből származik

A részletes szerződést lásd: [FSRS-ütemezési logika a fő tárolóban](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Hitelesítés

- E-mailes OTP a Cognitón keresztül
- Közös domainen érvényes böngészős munkamenet-sütik a felhős webalkalmazáshoz
- Ügynöki OTP-előkészítés az `auth.<domain>` címen, hosszú élettartamú ApiKey-kimenettel
- `AUTH_MODE=none` helyi fejlesztéshez
- `AUTH_MODE=cognito` éleshez hasonló hitelesítéshez

## Telepítési felépítés

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda hitelesítési szolgáltatás
- Postgres az AWS RDS-ben

A gyökérdomainen maradhat egy külön marketingoldal. Ha a kezdeti telepítéskor még szabad, az infrastruktúra ideiglenesen átirányíthatja az `app.<domain>` címre.
