---
title: Isakhiwo
description: Ukubuka ngokubanzi kwesistimu, izizinda zomphakathi, amaklayenti asekelwayo, nokugeleza kwedatha kwamanje okusebenza kuqala ngaphandle kwe-inthanethi.
---

## Ukubuka ngokubanzi kwesistimu

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## Imigomo

1. Izizinda zomphakathi ezihlukene ze-`app`, `api` ne-`auth`
2. I-Postgres iwumthombo weqiniso
3. Iklayenti le-iOS lisebenza kuqala ngaphandle kwe-inthanethi, line-SQLite yasendaweni kanye nokuvumelanisa
4. Uhlelo lwewebhu, uhlelo lwe-iOS nengxenye yama-ejenti angaphandle kusebenzisa imodeli efanayo yendawo yokusebenza
5. Ama-ejenti angaphandle aqala ku-`GET https://api.nibomo.com/v1/`

## Amaklayenti asekelwayo

- Uhlelo lwewebhu ku-`app.nibomo.com`
- Uhlelo lwe-iOS ku-repository eyinhloko, olugcina idatha ku-SQLite yasendaweni
- Uhlelo lwe-Android ku-Google Play
- Amaklayenti ama-ejenti angaphandle ngokuthola, ukuqalisa nge-OTP, kanye ne-`Authorization: ApiKey`

## Imodeli yedatha

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## Ukugeleza kwedatha

### Iwebhu

1. Isiphequluli singena nge-`auth.<domain>`.
2. Uhlelo lwewebhu lulayisha idatha yendawo yokusebenza ku-`api.<domain>`.
3. Izicelo zengxoxo ne-AI zidlula ku-`/chat/local-turn`.
4. Ukubuyekeza okuthunyelwayo kuvuselela isimo sesihleli ngesikhathi kubhalwa.

### I-iOS

1. Uhlelo lwe-iOS luqala lubhale endaweni ku-SQLite.
2. Izinguquko zasendaweni zifakwa emgqeni we-outbox.
3. Ukuvumelanisa kuthumela izinguquko nge-`/v1/workspaces/{workspaceId}/sync/push`.
4. Ukuvumelanisa kulanda izibuyekezo ezikude nge-`/v1/workspaces/{workspaceId}/sync/pull`.
5. Isizindalwazi sasendaweni sisebenzisa izinguquko bese sihambisa phambili i-cursor yokuvumelanisa.

### Ama-ejenti angaphandle

1. Ama-ejenti aqala nge-`GET /v1/`.
2. Ukuqalisa nge-OTP kwenzeka ku-`auth.<domain>`.
3. I-ejenti ithola ukhiye we-API ohlala isikhathi eside.
4. I-ejenti ilayisha i-`/v1/agent/me`, ibonisa uhlu lwezindawo zokusebenza, ikhethe eyodwa uma kudingeka, bese isebenzisa i-`/v1/agent/sql/query` ne-`/v1/agent/sql/execute`.

## Ukuhlela isikhathi

I-Nibomo isebenzisa i-FSRS njengesihleli sokubuyekeza.

Amanothi okwakhiwa:

- i-backend ne-iOS zigcina ukwakhiwa kwe-FSRS okufanayo ncamashi
- uhlelo lwewebhu lulandela isivumelwano sedatha yokuhlela, kodwa alufaki ikhophi yesithathu yesihleli
- izilungiselelo zesihleli zendawo yokusebenza zihlanganisa ukukhumbula okufunwayo, izinyathelo zokufunda, izinyathelo zokufunda kabusha, isikhawu esiphezulu, ne-fuzz
- isikhathi sangempela sokubuyekeza sivela ku-`reviewedAtClient`

Ukuze uthole isivumelwano esiningiliziwe, bheka [imithetho yokuhlela ye-FSRS ku-repository eyinhloko](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## Ukuqinisekisa ubuwena

- I-OTP ye-imeyili nge-Cognito
- Amakhukhi eseshini yesiphequluli esizindeni esabiwe ohlelweni lwewebhu olusingathiwe
- Ukuqalisa i-ejenti nge-OTP ku-`auth.<domain>`, okuveza i-ApiKey ehlala isikhathi eside
- `AUTH_MODE=none` yokuthuthukisa kwasendaweni
- `AUTH_MODE=cognito` yokuqinisekisa ubuwena okufana nokokukhiqiza

## Ukwakheka kokufaka

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- I-Postgres ku-AWS RDS

Isizinda esiyimpande singahlala kusayithi lokumaketha elihlukile. Uma singasetshenziswa ngesikhathi sokuqalisa, ingqalasizinda ingasiqondisa kabusha okwesikhashana ku-`app.<domain>`.
