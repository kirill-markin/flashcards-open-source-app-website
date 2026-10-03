---
title: Ukuqalisa
description: Qala ngohlelo lwewebhu olusingathiwe, xhuma i-ejenti nge-URL yokuthola, noma uqhube isitaki sendawo ngokwakho.
---

## Uhlelo lwewebhu olusingathiwe

Indlela esheshayo yokuqala ukusebenzisa uhlelo lwewebhu olusingathiwe:

1. Vula [app.nibomo.com](https://app.nibomo.com)
2. Ngena nge-imeyili yakho usebenzisa i-OTP engadingi phasiwedi
3. Dala amakhadi, ubuyekeze lawo asesikhathini sokubuyekezwa, futhi usebenzise ingxoxo ne-AI nedatha yendawo yokusebenza namafayela anamathiselwe

Endleleni esingathiwe akudingeki ukufaka lutho noma ukusetha iseva.

## Ukusetha i-ejenti

Uma ufuna i-Claude Code, i-Codex noma i-OpenClaw ixhume ngqo, qala lapha:

```text
GET https://api.nibomo.com/v1/
```

Leyo mpendulo yokuthola ihola i-ejenti kuzo zonke izinyathelo: ukungena nge-OTP ye-imeyili, ukudala ukhiye we-API ohlala isikhathi eside, ukulayisha i-akhawunti, ukuqalisa indawo yokusebenza, kanye nengxenye ye-SQL eshicilelwe.

Okuqukethwe okufanayo kuyatholakala naku-`GET /v1/agent`, kodwa `/v1/` yiyona ndawo yokungena esemthethweni yomphakathi.

## Ukuzisingathela

Uma ukhetha ukuqhuba isevisi yakho, bheka [Umhlahlandlela wokuzisingathela](/docs/self-hosting/).

## Okutholayo namuhla

- Uhlelo lwewebhu olusingathiwe lwamakhadi, ukubuyekeza nengxoxo ne-AI
- Iklayenti le-iOS ku-repository eyinhloko, eline-SQLite yasendaweni nokuvumelanisa okusebenza kuqala ngaphandle kwe-inthanethi
- Amasevisi e-backend nawokuqinisekisa ubuwena okwabelwana ngawo, ezizindeni ezihlukene `api` no-`auth`
- Ukuxhunywa kwama-ejenti angaphandle ngokuthola, i-OTP nokuqinisekisa nge-ApiKey
- Indlela yokufaka enomthombo ovulekile ku-AWS, lapho i-Postgres iwumthombo weqiniso

## Isiqondiso se-repository

Iphrojekthi isebenza kuqala ngaphandle kwe-inthanethi.

Namuhla i-repository ihlanganisa uhlelo lwewebhu, uhlelo lwe-iOS, isevisi yokuqinisekisa ubuwena, i-API ye-backend, indlela yama-ejenti angaphandle, kanye nohlelo lwe-Android olushicilelwe ku-Google Play.
