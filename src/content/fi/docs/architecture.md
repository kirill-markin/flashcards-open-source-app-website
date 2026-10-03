---
title: Arkkitehtuuri
description: Järjestelmän yleiskuva, julkiset verkkotunnukset, tuetut asiakassovellukset ja nykyinen offline-first-tietovirta.
---

## Järjestelmän yleiskuva

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Periaatteet

1. Erilliset julkiset verkkotunnukset kohteille `app`, `api` ja `auth`
2. Postgres on ensisijainen tietolähde
3. iOS-asiakassovellus on offline-first: paikallinen SQLite ja synkronointi
4. Verkkosovellus, iOS-sovellus ja ulkoisten agenttien rajapinta käyttävät samaa työtilamallia
5. Ulkoiset agentit aloittavat osoitteesta `GET https://api.nibomo.com/v1/`

## Tuetut asiakassovellukset

- Verkkosovellus osoitteessa `app.nibomo.com`
- iOS-sovellus päärepositoriossa, tallennuksena paikallinen SQLite
- Android-sovellus Google Playssa
- Ulkoiset agenttiasiakkaat discoveryn, OTP-alustuksen ja `Authorization: ApiKey` -otsakkeen kautta

## Tietomalli

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Tietovirta

### Verkko

1. Selain kirjautuu sisään osoitteen `auth.<domain>` kautta.
2. Verkkosovellus lataa työtilan datan osoitteesta `api.<domain>`.
3. Tekoälychatin pyynnöt kulkevat reitin `/chat/local-turn` kautta.
4. Lähetetyt kertaukset päivittävät ajoittimen tilan kirjoituksen yhteydessä.

### iOS

1. iOS-sovellus kirjoittaa ensin paikallisesti SQLiteen.
2. Paikalliset muutokset tallennetaan lähtevien muutosten jonoon (outbox).
3. Synkronointi lähettää muutokset reitin `/v1/workspaces/{workspaceId}/sync/push` kautta.
4. Synkronointi lataa etämuutokset reitin `/v1/workspaces/{workspaceId}/sync/pull` kautta.
5. Paikallinen tietokanta ottaa muutokset käyttöön ja siirtää synkronoinnin kursoria eteenpäin.

### Ulkoiset agentit

1. Agentit aloittavat kutsulla `GET /v1/`.
2. OTP-alustus tapahtuu osoitteessa `auth.<domain>`.
3. Agentti saa pitkäikäisen API-avaimen.
4. Agentti lataa reitin `/v1/agent/me`, listaa työtilat, valitsee tarvittaessa yhden ja käyttää sitten reittejä `/v1/agent/sql/query` ja `/v1/agent/sql/execute`.

## Ajoitus

Nibomo käyttää kertausten ajoittimena FSRS:ää.

Toteutushuomioita:

- taustapalvelussa ja iOS:ssä on keskenään vastaavat FSRS-toteutukset
- verkkosovellus noudattaa samaa ajoitustietojen tietosopimusta, mutta siihen ei sisälly kolmatta kopiota ajoittimesta
- työtilakohtaisiin ajoitusasetuksiin kuuluvat tavoiteltu muistamisaste, oppimisvaiheet, uudelleenoppimisvaiheet, enimmäisväli ja satunnaishajonta (fuzz)
- todellinen kertauksen aikaleima tulee kentästä `reviewedAtClient`

Ajoituksen yksityiskohtainen tietosopimus on kuvattu [päärepositorion FSRS-ajoituslogiikan dokumentissa](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Tunnistautuminen

- Sähköpostin OTP Cognito-palvelun avulla
- Yhteisen verkkotunnuksen selainistuntoevästeet isännöidylle verkkosovellukselle
- Agentin OTP-alustus osoitteessa `auth.<domain>`, tuloksena pitkäikäinen ApiKey
- `AUTH_MODE=none` paikalliseen kehitykseen
- `AUTH_MODE=cognito` tuotannonkaltaiseen tunnistautumiseen

## Käyttöönoton rakenne

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda-taustapalvelu
- `auth.<domain>` -> API Gateway + Lambda-tunnistautumispalvelu
- Postgres AWS RDS:ssä

Juuriverkkotunnus voi jäädä erilliselle markkinointisivustolle. Jos se on alustuksen aikana vapaana, infrastruktuuri voi ohjata sen väliaikaisesti osoitteeseen `app.<domain>`.
