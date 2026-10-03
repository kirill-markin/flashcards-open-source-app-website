---
title: Isixhumi se-MCP
description: "Xhuma i-Nibomo ngohlu lwe-Claude noma usethe iseva yayo ye-MCP ekude ku-Claude Code nakwamanye amaklayenti, nge-OAuth namathuluzi ayisishiyagalombili amakhadi okufunda nokubuyekeza."
---

## Xhuma ngohlu lwe-Claude

Vula [i-Nibomo ohlwini lwe-Claude](https://claude.ai/directory/nibomo), uyixhume, ungene ku-akhawunti yakho ye-Nibomo, bese ugunyaza ukufinyelela. I-Nibomo ifakwe ohlwini njengesixhumi se-Community.

Ku-Claude Code, sebenzisa i-akhawunti efanayo yokubhalisela i-Claude bese uhlola i-`/mcp` ngemva kokuxhuma. Ukungena ngokhiye we-API noma ngomhlinzeki wangaphandle akulayishi ngokuzenzakalela izixhumi zakho ze-claude.ai.

Ungasetha futhi i-Claude Code ngqo. Qalisa umyalo ongezansi, bese uvula i-`/mcp` ku-Claude Code futhi uqedele ukugunyaza esipheqululini:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Imibhalo ye-MCP ye-Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Ukubuka ngokubanzi

I-Nibomo iqhuba iseva ye-MCP (Model Context Protocol) ekude ukuze amaklayenti e-MCP
nama-ejenti e-AI akwazi ukufunda amakhadi akho asesikhathini sokubuyekezwa, awabuyekeze nawe ngombuzo owodwa ngesikhathi,
futhi akudalele noma akuhlelele amakhadi namaqoqo amakhadi.

Ama-ejenti angaxhuma ngezindlela ezimbili: ngale seva ye-MCP (ingcono kakhulu kumaklayenti e-MCP afana
ne-Claude noma i-Cursor), noma nge-[URL yokuthola ye-Agents API](/docs/api/) yama-ejenti e-CLI.
Zombili zifinyelela engxenyeni efanayo yedatha yomsebenzisi ngamunye; leli khasi lichaza iseva ye-MCP.

Xhuma kuyo kuleli kheli:

```text
https://mcp.nibomo.com/mcp
```

Indlela yokuthutha yi-Streamable HTTP. Iseva inikeza amathuluzi ayisishiyagalombili okuthola izindawo zokusebenza, ukufunda nokubhala amakhadi namaqoqo amakhadi, imihlahlandlela yereferensi, ukubuyekeza, nokusetshenziswa kwe-akhawunti.

## Ungayengeza kanjani kuklayenti lakho

Iningi lamaklayenti lengeza iseva ye-MCP ekude njengesixhumi sangokwezifiso:

1. Vula izilungiselelo zesixhumi noma zeseva ye-MCP zeklayenti lakho.
2. Engeza isixhumi sangokwezifiso bese unamathisela i-URL yeseva `https://mcp.nibomo.com/mcp`.
3. Kumaklayenti asebenzisanayo, gunyaza esipheqululini lapho ucelwa. Iseva
   isebenzisa i-OAuth 2.1 ne-Dynamic Client Registration, ngakho ayikho imfihlo yeklayenti
   okufanele uyinamathisele futhi alukho uhlelo okufanele uqale ulubhalise.
4. Ekusebenziseni okungenasikrini noma kwe-CLI, setha unhlokweni `Authorization: Bearer fca_…` nokhiye wakho
   we-API we-ejenti esikhundleni sokugunyaza esipheqululini.

Ngemva kokugunyaza, biza i-`list_workspaces` kanye ukuze ukhethe indawo yokusebenza, bese usebenzisa
i-`sql_query` ukuze ufunde ne-`sql_execute` ukuze ubhale amakhadi namaqoqo amakhadi. Ukuze ubuyekeze, biza
i-`next_review_card`, bese i-`reveal_answer`, bese i-`submit_review`.

## Amathuluzi

Iseva inikeza amathuluzi ayisishiyagalombili. Ukufunda nokubhala kuhlukaniswe ngamabomu ukuze ithuluzi
elilodwa lingalokothi lihlanganise imisebenzi ephephile neyonakalisayo.

- `get_usage_limits` — ithuluzi lokufunda kuphela ngokuqinile elibonisa uhlelo lwe-akhawunti, imikhawulo, nokusetshenziswa kwe-AI kwale nyanga kuze kube manje; alifundi futhi alishintshi amakhadi.
- `sql_query` — ukufinyelela kokufunda kuphela ngokuqinile kumakhadi akho namaqoqo amakhadi (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — ukufinyelela kokubhala kumakhadi akho namaqoqo amakhadi (`INSERT`, `UPDATE`,
  `DELETE`) njengesixha esisodwa esisebenza ngokuphelele noma singasebenzi nhlobo.
- `list_workspaces` — uhlu lokufunda kuphela ngokuqinile lwezindawo zokusebenza ongazifinyelela,
  ngayinye
  ine-`workspaceId` yayo, igama, inani lamakhadi asebenzayo, umsebenzi wokugcina, nokuthi yiyona yini
  ezenzakalelayo oyikhethe njengamanje. Sebenzisa i-`workspaceId` ebuyisiwe ku-agumenti engaphoqelekile
  ethi `workspaceId` yamathuluzi e-SQL nawokubuyekeza.
- `get_guide` — umhlahlandlela wereferensi wokufunda kuphela ngokuqinile wesihloko esisodwa: `sql_dialect`,
  `card_authoring`, `bulk_authoring`, noma `review_flow`. Alifundi idatha yendawo yokusebenza.
- `next_review_card` — ukufunda kuphela ngokuqinile: libuyisa ikhadi elilandelayo okufanele libuyekezwe, uhlangothi
  olungaphambili kuphela, ngokulandelana komugqa okufanayo nasezinhlelweni zokusebenza. I-`tags` engaphoqelekile noma i-`deckId` inciphisa
  umugqa.
- `reveal_answer` — ukufunda kuphela ngokuqinile: libuyisa uhlangothi olungemuva lwekhadi elilodwa ngemva kokuthi
  umfundi ezame ukuphendula uhlangothi lwalo olungaphambili.
- `submit_review` — lirekhoda isilinganiso esisodwa esingu-`Again`, `Hard`, `Good`, noma `Easy` futhi
  lihambise phambili uhlelo lwe-FSRS lwekhadi.

Ingxenye ye-SQL iwuhlobo lwe-SQL olulinganiselwe ngamabomu futhi ayiyona i-PostgreSQL ephelele.
Le mibhalo ichaza kuphela uhlobo olusekelwayo, hhayi ireferensi yokuhambisana ne-PostgreSQL.
Imiyalo ingabhekisa kuphela ezinsizeni `workspace`, `cards`, `decks`,
ne-`review_events`, umyalo ngamunye ukhawulelwe endaweni yakho yokusebenza, futhi
ukufunda nokubhala kukhawulelwe emigqeni engu-`100` emyalweni ngamunye.

## Ukubuyekeza

Amathuluzi okubuyekeza avumela i-ejenti ukuthi ibuze umfundi ikhadi elilodwa ngesikhathi futhi igcine isilinganiso
ngasinye ohlelweni lwe-FSRS lwekhadi:

1. I-`next_review_card` ibuyisa i-`cardId` ne-`frontText`, noma i-`card: null` uma
   kungekho okusesikhathini sokubuyekezwa.
2. Ngemva kokuthi umfundi ephendule, i-`reveal_answer` ibuyisa i-`backText` yalelo khadi.
3. I-`submit_review` ithatha i-`cardId`, i-UUID ye-`reviewId` eyenziwe yiklayenti,
   i-`rating`, ne-`reviewedTimeZone` ye-IANA yomfundi. Iseva ibeka isikhathi sokubuyekeza
   futhi ibuyisa uhlelo olusha lwekhadi.

Zama futhi ukuthumela okungaqinisekile nge-`reviewId` efanayo; akulokothi kurekhode ukubuyekeza
kwesibili. Ukuthumela kungaphinde kuphendule ngokuthi:

- `409 REVIEW_EVENT_CONFLICT` — ukubuyekeza kwase kurekhodiwe, futhi imininingwane yephutha
  iqukethe uhlelo lwamanje lwekhadi.
- `409 REVIEW_ID_CARD_MISMATCH` — i-`reviewId` isivele ikhomba ukubuyekezwa kwekhadi
  elihlukile, ngakho akukho okugciniwe; thumela futhi nge-`reviewId` entsha.
- `409 REVIEW_STALE` — isikhathi sokubuyekeza esigcinwe ekhadini silingana noma singemva kwesikhathi samanje
  seseva; buyekeza elinye ikhadi.

Ukubuyekeza kurekhodwa kuphela nge-`submit_review`: i-SQL ayikwazi ukubhala
i-`review_events` noma isimo sokuhlela se-FSRS. Biza i-`get_guide` ngesihloko
`review_flow` ukuze uthole yonke imithetho yokubuyekeza neyokulinganisa.

## Isivumelwano sekhadi

Wonke amakhadi alandela isivumelwano esisodwa, futhi amathuluzi ancike kuso:

- I-`front_text` iwumbuzo noma isicelo sokubuyekeza kuphela futhi ayilokothi iqukathe impendulo.
- I-`back_text` iqukethe impendulo, futhi ingaba nesibonelo esiqondile.

Ama-ejenti adala amakhadi nge-`sql_execute` alandela lesi sivumelwano, ngakho
amakhadi awadalayo angabuyekezwa ngokushesha nge-spaced repetition.

## Ukuqinisekisa ubuwena

Izindlela ezimbili zokugunyaza zifinyelela engxenyeni efanayo yedatha yomsebenzisi ngamunye.

### I-OAuth 2.1 (amaklayenti esixhumi asebenzisanayo)

Iseva isebenzisa ukugeleza kwe-authorization-code ne-PKCE kanye ne-Dynamic Client
Registration. Engeza i-URL ye-MCP njengesixhumi sangokwezifiso bese ugunyaza esipheqululini;
ayikho imfihlo yeklayenti eyabelwana ngayo kusengaphambili. Ukuthola kulandela izindinganiso:

- Imethadatha yensiza evikelwe:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Imethadatha yeseva yokugunyaza:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Ukhiye we-API (okungenasikrini ne-CLI)

Thola ukhiye we-API we-ejenti `fca_` ohlala isikhathi eside ngokungena nge-OTP ye-imeyili
okuchazwe [kureferensi ye-API](/docs/api/), bese uwuthumela njengethokheni ye-Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Lona ukhiye ofanayo owamukelwa yingxenye ye-REST yama-ejenti, futhi awudingi isiphequluli noma
ukuya nokubuya kwe-OAuth.

Incazelo esemthethweni efundeka ngomshini yazo zombili izindlela iyimpendulo yokuthola
ku-`https://api.nibomo.com/v1/` (ephindwe ku-`/v1/agent`).

## Ukuphepha nobubanzi

Amathuluzi e-SQL aphephile ukuwavumela ngoba le ngxenye iwuhlobo lwe-SQL oluvalelekile,
oluphoqelelwa yi-parser, hhayi ukufinyelela kwesizindalwazi okungenamkhawulo:

- **Uhlu oluvaliwe lwemiyalo evunyelwe**: i-`sql_query` yamukela kuphela i-`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, ne-`SELECT`; i-`sql_execute` yamukela kuphela i-`INSERT`,
  `UPDATE`, ne-`DELETE`. Noma yini enye yenqatshwa ngesikhathi sokuhlaziya umyalo.
- **Izinsiza ezilinganiselwe**: imiyalo ingathinta kuphela i-`workspace`, `cards`, `decks`,
  ne-`review_events`.
- **Ububanzi bendawo yokusebenza ngayinye**: wonke umyalo we-SQL nokubuyekeza kukhawulelwe
  endaweni yokusebenza eyodwa ongayifinyelela, kungaba yi-`workspaceId` oyidlulisayo noma ezenzakalelayo
  oyikhethile, kungekho kufinyelela phakathi kwezindawo zokusebenza ezahlukene.
- **Ama-agumenti aqinile**: wonke amathuluzi enqaba i-agumenti engaziwa, ngakho i-`workspaceId`
  ebhalwe ngephutha iyahluleka esikhundleni sokusebenza endaweni yakho yokusebenza ezenzakalelayo.
- **Imikhawulo**: kufika emigqeni engu-`100` emyalweni ngamunye, kufika emiyalweni engu-`50` esixheni ngasinye, kanye
  nomkhawulo womphumela ocishe ube ngamathokheni angu-`12k`. Izixha zokushintsha zisebenza ngokuphelele noma zingasebenzi nhlobo.
- **Ukuhlukaniswa kokufunda nokubhala**: i-`get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card`, ne-`reveal_answer` angamathuluzi okufunda kuphela ngokuqinile (`readOnlyHint`)
  futhi awalokothi alungise idatha, abale kabusha ukuhlela, noma ashintshe isimo sekhadi.
  I-`sql_execute` ne-`submit_review` yiwona kuphela amathuluzi okubhala (`destructiveHint`):
  i-`sql_execute` ibhala amakhadi namaqoqo amakhadi, futhi i-`submit_review` irekhoda ukubuyekeza futhi
  ihambise phambili uhlelo lwekhadi elibuyekeziwe.

Sonke isitaki — uhlelo, i-backend, nengqalasizinda — sinomthombo ovulekile futhi
[singazisingathelwa](/docs/self-hosting/), ngakho ungaqhuba isixhumi esifanayo ekufakweni
kwakho siqu.
