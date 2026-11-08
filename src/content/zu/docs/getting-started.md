---
title: Ukuqalisa
description: Qala ngohlelo lokusebenza lwe-iPhone, i-iPad, i-Mac noma i-Android, ngohlelo lwewebhu, nge-ejenti ye-AI, noma ngeseva yakho.
---

Kunezindlela eziningana zokuqala, kusukela kuleyo edume kakhulu:

- **Uhlelo lokusebenza lwe-iPhone, i-iPad ne-Mac**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Uhlelo lokusebenza lwe-Android**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Uhlelo lwewebhu olusingathiwe**: [app.nibomo.com](https://app.nibomo.com)
- **Ama-ejenti e-AI**: [isixhumi se-MCP](/docs/mcp-connector/) noma i-API ku-`https://api.nibomo.com/v1/`
- **Ukuzisingathela**: [Umhlahlandlela wokuzisingathela](/docs/self-hosting/)

## Izinhlelo zokusebenza zeselula nezekhompyutha

Faka uhlelo lokusebenza olwakhelwe idivayisi yakho:

- I-iPhone, i-iPad ne-Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- I-Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Izinhlelo zokusebenza zigcina amakhadi akho kudivayisi, ngakho ungabuyekeza ngisho ungaxhunyiwe ku-inthanethi, bese zivumelanisa lapho usuxhumekile futhi. Ungaqala njengesivakashi bese ungena ngemuva kwesikhathi.

### Amawijethi esikrini sasekhaya

Uhlelo lokusebenza lwe-Nibomo lwengeza iwijethi ethi Buyekeza ku-iPhone, i-iPad, i-Mac ne-Android. Itholakala ngosayizi abathathu:

- **Encane**: inani lamakhadi asesikhathini sokubuyekezwa nochungechunge lwakho lokufunda
- **Ephakathi**: inani lamakhadi asesikhathini sokubuyekezwa nombuzo osekhadini lakho elilandelayo
- **Enkulu**: inani lamakhadi asesikhathini sokubuyekezwa, umbuzo wakho olandelayo nochungechunge lwakho

Uma kungekho khadi okumele libuyekezwe, iwijethi ibonisa okuthi “Usuqedile konke” nokuthi ikhadi elilandelayo lizobuyekezwa nini. Ayilokothi ibonise impendulo. Thepha iwijethi ukuze uvule ingxenye ethi Buyekeza; iwijethi ephakathi noma enkulu ivula ingxenye ethi Buyekeza ekhadini eliboniswa yiyo. Amawijethi angamahhala kuwo wonke umuntu, kuhlanganise nezivakashi.

Amanye amawijethi ayisishiyagalombili akubonisa inqubekelaphambili yakho: “Umsebenzi”, “Unyaka”, “Namuhla”, “Ukubukeza”, “Uchungechunge”, “Ikhalenda”, “Okuzayo” ne-“Ideshibhodi”. Ku-iPhone, ungabeka newijethi ethi “Amakhadi okubukeza” esikrinini sokukhiya, futhi [umhlahlandlela wamawijethi](/blog/flashcard-widget/) ubonisa ngalinye.

Ukuze wengeze iwijethi ku-iPhone, ku-iPad noma ku-Mac, vula igalari yamawijethi, khetha i-Nibomo, bese ukhetha usayizi. Ku-Android, engeza iwijethi ye-Nibomo ohlwini lwamawijethi, bese ushintsha usayizi wayo; ukubukeka kwayo kulandela usayizi.

## Uhlelo lwewebhu olusingathiwe

Indlela esheshayo yokuqala ukusebenzisa uhlelo lwewebhu olusingathiwe:

1. Vula [app.nibomo.com](https://app.nibomo.com)
2. Ngena nge-imeyili yakho usebenzisa i-OTP engadingi phasiwedi
3. Dala amakhadi, ubuyekeze lawo asesikhathini sokubuyekezwa, futhi usebenzise ingxoxo ne-AI nedatha yendawo yokusebenza namafayela anamathiselwe

Endleleni esingathiwe akudingeki ukufaka lutho noma ukusetha iseva.

## Ukusetha i-ejenti

Amaklayenti e-MCP afana ne-Claude, i-ChatGPT ne-Cursor angaxhuma ngokulandela [umhlahlandlela wesixhumi se-MCP](/docs/mcp-connector/).

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
- Izinhlelo zokusebenza ze-iPhone, i-iPad, i-Mac ne-Android ezakhelwe lawo madivayisi, ezinesitoreji se-SQLite sasendaweni nokuvumelanisa okusebenza kuqala ngaphandle kwe-inthanethi
- Amasevisi e-backend nawokuqinisekisa ubuwena okwabelwana ngawo, ezizindeni ezihlukene `api` no-`auth`
- Ukuxhunywa kwama-ejenti angaphandle ngokuthola, i-OTP nokuqinisekisa nge-ApiKey
- Indlela yokufaka enomthombo ovulekile ku-AWS, lapho i-Postgres iwumthombo weqiniso

## Isiqondiso se-repository

Iphrojekthi isebenza kuqala ngaphandle kwe-inthanethi.

Namuhla i-repository ihlanganisa uhlelo lwewebhu, uhlelo lwe-iOS, isevisi yokuqinisekisa ubuwena, i-API ye-backend, indlela yama-ejenti angaphandle, kanye nohlelo lwe-Android olushicilelwe ku-Google Play.
