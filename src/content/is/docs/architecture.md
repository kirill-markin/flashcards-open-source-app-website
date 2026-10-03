---
title: Kerfisuppbygging
description: Yfirlit yfir kerfið, opinber lén, studda biðlara og núverandi gagnaflæði sem virkar fyrst og fremst án nettengingar.
---

## Yfirlit yfir kerfið

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Meginreglur

1. Aðskilin opinber lén fyrir `app`, `api` og `auth`
2. Postgres er meginheimild gagnanna
3. iOS-biðlarinn virkar fyrst og fremst án nettengingar, með staðbundnu SQLite og samstillingu
4. Vefforritið, iOS-forritið og viðmótið fyrir ytri gervigreindarumboð deila sama líkani af vinnusvæðum
5. Ytri gervigreindarumboð byrja á `GET https://api.nibomo.com/v1/`

## Studdir biðlarar

- Vefforrit á `app.nibomo.com`
- iOS-forrit í aðalkóðasafninu með staðbundinni SQLite-geymslu
- Android-forrit á Google Play
- Biðlarar ytri gervigreindarumboða í gegnum uppgötvun, frumstillingu með einnota kóða og `Authorization: ApiKey`

## Gagnalíkan

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Gagnaflæði

### Vefur

1. Vafrinn skráir sig inn í gegnum `auth.<domain>`.
2. Vefforritið hleður gögnum vinnusvæðisins frá `api.<domain>`.
3. Beiðnir í gervigreindarspjallinu fara í gegnum `/chat/local-turn`.
4. Innsendar upprifjanir uppfæra stöðu tímasetningarkerfisins strax við skrif.

### iOS

1. iOS-forritið skrifar fyrst staðbundið í SQLite.
2. Staðbundnar breytingar fara í biðröð í úthólfi.
3. Samstilling sendir breytingar upp í gegnum `/v1/workspaces/{workspaceId}/sync/push`.
4. Samstilling sækir uppfærslur frá þjóninum í gegnum `/v1/workspaces/{workspaceId}/sync/pull`.
5. Staðbundni gagnagrunnurinn beitir breytingunum og færir samstillingarbendilinn áfram.

### Ytri gervigreindarumboð

1. Gervigreindarumboð byrja á `GET /v1/`.
2. Frumstilling með einnota kóða fer fram á `auth.<domain>`.
3. Gervigreindarumboðið fær langlífan API-lykil.
4. Gervigreindarumboðið hleður `/v1/agent/me`, birtir lista yfir vinnusvæði, velur eitt ef þörf krefur og notar svo `/v1/agent/sql/query` og `/v1/agent/sql/execute`.

## Tímasetning upprifjana

Nibomo notar FSRS til að tímasetja upprifjanir.

Athugasemdir um útfærslu:

- bakendinn og iOS halda samsvarandi útfærslum af FSRS
- vefforritið fylgir sömu gagnaskilgreiningu fyrir tímasetningu en inniheldur ekki þriðja eintakið af tímasetningarkerfinu
- stillingar tímasetningar fyrir vinnusvæðið eru æskilegt minnishald, námsskref, endurnámsskref, hámarksbil og slembifrávik
- raunverulegur tími upprifjunar kemur úr `reviewedAtClient`

Nánari skilgreiningu er að finna í [FSRS-tímasetningarrökfræðinni í aðalkóðasafninu](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Auðkenning

- Einnota kóði í tölvupósti í gegnum Cognito
- Lotuvafrakökur á sameiginlegu léni fyrir hýsta vefforritið
- Frumstilling gervigreindarumboða með einnota kóða á `auth.<domain>`, sem skilar langlífum ApiKey
- `AUTH_MODE=none` fyrir staðbundna þróun
- `AUTH_MODE=cognito` fyrir auðkenningu eins og í raunumhverfi

## Uppbygging uppsetningar

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda-bakendi
- `auth.<domain>` -> API Gateway + Lambda-auðkenningarþjónusta
- Postgres í AWS RDS

Grunnlénið getur áfram hýst sérstakan markaðsvef. Ef það er laust við frumuppsetningu geta innviðirnir tímabundið vísað því áfram á `app.<domain>`.
