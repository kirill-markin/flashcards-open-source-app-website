---
title: MCP-tengi
description: "Tengdu Nibomo í gegnum Claude-skrána eða stilltu fjartengda MCP-þjóninn í Claude Code og öðrum biðlurum, með OAuth og átta tólum fyrir námskort og upprifjun."
---

## Tengjast í gegnum Claude-skrána

Opnaðu [Nibomo í Claude-skránni](https://claude.ai/directory/nibomo), tengdu það, skráðu þig inn á Nibomo-aðganginn þinn og veittu aðgang. Nibomo er skráð sem Community-tengi.

Í Claude Code skaltu nota sama Claude-áskriftaraðganginn og athuga `/mcp` eftir tenginguna. Innskráning með API-lykli eða í gegnum þriðja aðila hleður ekki claude.ai-tengjunum þínum sjálfkrafa.

Þú getur líka stillt Claude Code beint. Keyrðu skipunina hér að neðan, opnaðu síðan `/mcp` í Claude Code og ljúktu heimildaveitingunni í vafranum:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Skjölun Claude Code um MCP](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Yfirlit

Nibomo keyrir fjartengdan MCP-þjón (Model Context Protocol) svo að MCP-biðlarar og
gervigreindarumboð geti lesið spjöldin þín sem eru á dagskrá, rifjað þau upp með þér eina spurningu í einu
og búið til eða breytt spjöldum og stokkum fyrir þig.

Gervigreindarumboð geta tengst á tvo vegu: í gegnum þennan MCP-þjón (best fyrir MCP-biðlara eins og
Claude eða Cursor) eða í gegnum [uppgötvunarslóð Agents API](/docs/api/) fyrir gervigreindarumboð
í skipanalínu. Báðar leiðirnar ná til sömu gagna hvers notanda; þessi síða fjallar um MCP-þjóninn.

Tengstu honum á:

```text
https://mcp.nibomo.com/mcp
```

Flutningsleiðin er Streamable HTTP. Þjónninn býður upp á átta tól fyrir uppgötvun vinnusvæða, lestur og skrif á spjöldum og stokkum, leiðbeiningar, upprifjun og notkun aðgangsins.

## Hvernig þú bætir því við í biðlaranum þínum

Flestir biðlarar bæta fjartengdum MCP-þjóni við sem sérsniðnu tengi:

1. Opnaðu stillingar biðlarans fyrir tengi eða MCP-þjóna.
2. Bættu við sérsniðnu tengi og límdu inn slóð þjónsins `https://mcp.nibomo.com/mcp`.
3. Í gagnvirkum biðlurum skaltu veita heimild í vafranum þegar beðið er um það. Þjónninn
   notar OAuth 2.1 með Dynamic Client Registration, svo það er ekkert biðlaraleyndarmál
   til að líma inn og ekkert forrit sem þarf að skrá fyrst.
4. Fyrir notkun án viðmóts eða í skipanalínu skaltu setja hausinn `Authorization: Bearer fca_…` með
   API-lykli gervigreindarumboðsins í stað vafraflæðisins.

Eftir heimildaveitinguna skaltu kalla einu sinni á `list_workspaces` til að velja vinnusvæði og nota síðan
`sql_query` til lestrar og `sql_execute` til að skrifa spjöld og stokka. Til að rifja upp skaltu kalla á
`next_review_card`, síðan `reveal_answer` og loks `submit_review`.

## Tól

Þjónninn býður upp á átta tól. Lestri og skrifum er haldið aðskildum af ásettu ráði svo að ekkert
tól blandi saman öruggum aðgerðum og aðgerðum sem breyta gögnum.

- `get_usage_limits` — eingöngu til lestrar: áskriftarleið aðgangsins, takmörk og núverandi mánaðarleg notkun gervigreindar; það hvorki les né breytir spjöldum.
- `sql_query` — aðgangur eingöngu til lestrar að spjöldum þínum og stokkum (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — skrifaðgangur að spjöldum þínum og stokkum (`INSERT`, `UPDATE`,
  `DELETE`) sem órjúfanleg lota.
- `list_workspaces` — listi eingöngu til lestrar yfir vinnusvæðin sem þú hefur aðgang að,
  hvert með
  `workspaceId`, heiti, fjölda virkra spjalda, síðustu virkni og hvort það er
  sjálfgefna vinnusvæðið sem þú hefur valið. Notaðu `workspaceId` úr svarinu fyrir valfrjálsu
  færibreytuna `workspaceId` í SQL- og upprifjunartólunum.
- `get_guide` — leiðbeiningar eingöngu til lestrar um eitt efni: `sql_dialect`,
  `card_authoring`, `bulk_authoring` eða `review_flow`. Það les engin gögn úr vinnusvæðum.
- `next_review_card` — eingöngu til lestrar: skilar næsta spjaldi til upprifjunar, aðeins
  framhlið þess, í sömu röð og forritin nota. Valfrjálst `tags` eða `deckId` þrengir
  röðina.
- `reveal_answer` — eingöngu til lestrar: skilar bakhlið eins spjalds eftir að
  nemandinn hefur reynt við framhliðina.
- `submit_review` — skráir eina einkunn, `Again`, `Hard`, `Good` eða `Easy`, og
  færir FSRS-áætlun spjaldsins áfram.

SQL-viðmótið er takmörkuð mállýska af ásettu ráði og jafngildir ekki fullu PostgreSQL.
Þessi skjölun nær aðeins yfir studdu mállýskuna og er ekki tilvísun um samhæfni
við PostgreSQL. Skipanir geta aðeins vísað til auðlindanna `workspace`, `cards`, `decks` og
`review_events`, hver skipun nær aðeins til þíns eigin vinnusvæðis, og
lestur og skrif takmarkast við `100` raðir á hverja skipun.

## Upprifjun

Upprifjunartólin gera gervigreindarumboði kleift að spyrja nemanda út úr einu spjaldi í einu og vista hverja
einkunn í FSRS-áætlun spjaldsins:

1. `next_review_card` skilar `cardId` og `frontText`, eða `card: null` þegar
   ekkert er á dagskrá.
2. Eftir að nemandinn svarar skilar `reveal_answer` `backText` þess spjalds.
3. `submit_review` tekur við `cardId`, `reviewId` UUID sem biðlarinn býr til,
   `rating` og IANA `reviewedTimeZone` nemandans. Þjónninn stimplar
   tíma upprifjunarinnar og skilar nýrri áætlun spjaldsins.

Endurtaktu óvissa innsendingu með sama `reviewId`; hún skráir aldrei aðra
upprifjun. Innsending getur einnig svarað með:

- `409 REVIEW_EVENT_CONFLICT` — upprifjunin hefur þegar verið skráð og upplýsingar villunnar
  innihalda núverandi áætlun spjaldsins.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` auðkennir þegar upprifjun á
  öðru spjaldi, svo ekkert var vistað; sendu aftur inn með nýju `reviewId`.
- `409 REVIEW_STALE` — vistaður upprifjunartími spjaldsins er sá sami og núverandi tími
  þjónsins eða síðar; rifjaðu upp annað spjald.

Upprifjanir eru eingöngu skráðar í gegnum `submit_review`: SQL getur ekki skrifað í
`review_events` eða tímasetningarstöðu FSRS. Kallaðu á `get_guide` með efninu
`review_flow` til að fá allar reglur um upprifjun og einkunnagjöf.

## Reglur um spjöld

Öll spjöld fylgja sömu reglum og tólin reiða sig á þær:

- `front_text` er aðeins spurning eða kveikja að upprifjun og inniheldur aldrei svarið.
- `back_text` inniheldur svarið, eftir atvikum með áþreifanlegu dæmi.

Gervigreindarumboð sem búa til spjöld í gegnum `sql_execute` fylgja þessum reglum, svo að
spjöldin sem þau búa til eru strax tilbúin til upprifjunar með spaced repetition.

## Auðkenning

Tvær heimildaleiðir ná til sömu gagna hvers notanda.

### OAuth 2.1 (gagnvirkir biðlarar með tengi)

Þjónninn útfærir heimildakóðaflæðið með PKCE og Dynamic Client
Registration. Bættu MCP-slóðinni við sem sérsniðnu tengi og veittu heimild í vafranum;
ekkert biðlaraleyndarmál er deilt fyrir fram. Uppgötvun fylgir stöðlum:

- Lýsigögn varinnar auðlindar:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Lýsigögn heimildaþjóns:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-lykill (án viðmóts og í skipanalínu)

Fáðu langlífan `fca_` API-lykil fyrir gervigreindarumboð í gegnum innskráningarflæðið með einnota kóða í tölvupósti
sem lýst er í [API-tilvísuninni](/docs/api/), og sendu hann svo sem Bearer-tóka:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Þetta er sami lykill og REST-viðmót gervigreindarumboða tekur við, og hann krefst hvorki vafra né
OAuth-hringferðar.

Opinbera véllæsilega lýsingin á báðum leiðum er uppgötvunarsvarið
á `https://api.nibomo.com/v1/` (speglað á `/v1/agent`).

## Öryggi og umfang

Óhætt er að samþykkja SQL-tólin vegna þess að viðmótið er afmörkuð mállýska
sem þáttarinn framfylgir, ekki ótakmarkaður aðgangur að gagnagrunni:

- **Lokaður listi yfir leyfðar skipanir**: `sql_query` tekur aðeins við `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` og `SELECT`; `sql_execute` tekur aðeins við `INSERT`,
  `UPDATE` og `DELETE`. Öllu öðru er hafnað við þáttun.
- **Takmarkaðar auðlindir**: skipanir geta aðeins snert `workspace`, `cards`, `decks`
  og `review_events`.
- **Afmörkun við vinnusvæði**: hver SQL-skipun og hver upprifjun nær aðeins til eins
  vinnusvæðis sem þú hefur aðgang að, annaðhvort þess sem tilgreint er með `workspaceId` sem þú sendir eða þess sjálfgefna
  sem þú hefur valið, án aðgangs þvert á leigjendur.
- **Strangar færibreytur**: hvert tól hafnar óþekktri færibreytu, svo rangt stafsett
  `workspaceId` leiðir til villu í stað þess að keyra á sjálfgefna vinnusvæðinu þínu.
- **Hámörk**: allt að `100` raðir á hverja skipun, allt að `50` skipanir í hverri lotu og
  hámark á niðurstöðum sem nemur um það bil `12k` tókum. Lotur með breytingum eru framkvæmdar í heild eða alls ekki.
- **Skipting lestrar og skrifa**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` og `reveal_answer` eru eingöngu til lestrar (`readOnlyHint`)
  og lagfæra aldrei gögn, endurreikna tímasetningu eða breyta stöðu spjalda.
  `sql_execute` og `submit_review` eru einu tólin sem skrifa (`destructiveHint`):
  `sql_execute` skrifar spjöld og stokka, og `submit_review` skráir upprifjun og
  færir áætlun spjaldsins áfram.

Allur staflinn — forritið, bakendinn og innviðirnir — er opinn hugbúnaður og hægt er að
[hýsa hann á eigin innviðum](/docs/self-hosting/), svo að þú getur keyrt sama tengið á þinni
eigin uppsetningu.
