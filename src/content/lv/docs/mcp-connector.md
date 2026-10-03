---
title: MCP savienotājs
description: "Pieslēdz Nibomo caur Claude katalogu vai konfigurē tā attālo MCP serveri Claude Code un citos klientos — ar OAuth un astoņiem rīkiem kartītēm un atkārtošanai."
---

## Pieslēgšana caur Claude katalogu

Atver [Nibomo Claude katalogā](https://claude.ai/directory/nibomo), pieslēdz to, piesakies savā Nibomo kontā un atļauj piekļuvi. Nibomo ir norādīts kā kopienas savienotājs.

Claude Code lietošanai izmanto to pašu Claude abonementa kontu un pēc pieslēgšanas pārbaudi `/mcp`. Ja pieteikšanās notikusi ar API atslēgu vai caur trešās puses pakalpojumu sniedzēju, tavi claude.ai savienotāji netiek ielādēti automātiski.

Claude Code var konfigurēt arī tieši. Izpildi tālāk norādīto komandu, pēc tam Claude Code vidē atver `/mcp` un pabeidz autorizāciju pārlūkā:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Claude Code MCP dokumentācija](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Pārskats

Nibomo darbina attālu MCP (Model Context Protocol) serveri, lai MCP klienti un
MI aģenti varētu lasīt tavas atkārtojamās kartītes, atkārtot tās kopā ar tevi pa vienam jautājumam
un tavā vārdā veidot vai rediģēt kartītes un kartīšu komplektus.

Aģenti var pieslēgties divos veidos: caur šo MCP serveri (vislabāk MCP klientiem, piemēram,
Claude vai Cursor) vai caur [Agents API atklāšanas URL](/docs/api/) CLI
aģentiem. Abi veidi piekļūst vienai un tai pašai katra lietotāja datu saskarnei; šajā lapā aprakstīts MCP serveris.

Pieslēdzies tam adresē:

```text
https://mcp.nibomo.com/mcp
```

Transports ir Streamable HTTP. Serveris nodrošina astoņus rīkus darbvietu atklāšanai, kartīšu un kartīšu komplektu lasīšanai un rakstīšanai, uzziņu ceļvežiem, atkārtošanai un konta lietojumam.

## Kā to pievienot savā klientā

Lielākā daļa klientu attālu MCP serveri pievieno kā pielāgotu savienotāju:

1. Atver sava klienta savienotāju vai MCP serveru iestatījumus.
2. Pievieno pielāgotu savienotāju un ielīmē servera URL `https://mcp.nibomo.com/mcp`.
3. Interaktīvos klientos, kad tiek prasīts, veic autorizāciju pārlūkā. Serveris
   izmanto OAuth 2.1 ar Dynamic Client Registration, tāpēc nav jāielīmē klienta noslēpums
   un iepriekš nav jāreģistrē lietotne.
4. CLI lietojumam vai lietojumam bez grafiskās saskarnes iestati pārlūka plūsmas vietā galveni `Authorization: Bearer fca_…` ar savu
   aģenta API atslēgu.

Pēc autorizācijas vienreiz izsauc `list_workspaces`, lai izvēlētos darbvietu, pēc tam izmanto
`sql_query` lasīšanai un `sql_execute` kartīšu un kartīšu komplektu rakstīšanai. Lai atkārtotu, izsauc
`next_review_card`, pēc tam `reveal_answer` un tad `submit_review`.

## Rīki

Serveris nodrošina astoņus rīkus. Lasīšana un rakstīšana ir nodalīta apzināti, lai neviens
rīks nejauktu drošas un destruktīvas darbības.

- `get_usage_limits` — stingri tikai lasīšanai: konta plāns, ierobežojumi un pašreizējā mēneša MI lietojums; tas nelasa un nemaina kartītes.
- `sql_query` — stingri tikai lasīšanas piekļuve tavām kartītēm un kartīšu komplektiem (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — rakstīšanas piekļuve tavām kartītēm un kartīšu komplektiem (`INSERT`, `UPDATE`,
  `DELETE`) vienā atomārā paketē.
- `list_workspaces` — stingri tikai lasīšanai: tev pieejamo darbvietu saraksts,
  katrai norādot
  `workspaceId`, nosaukumu, aktīvo kartīšu skaitu, pēdējo aktivitāti un to, vai tā ir tava
  pašlaik izvēlētā noklusējuma darbvieta. Atgriezto `workspaceId` izmanto SQL un atkārtošanas rīku
  neobligātajam argumentam `workspaceId`.
- `get_guide` — stingri tikai lasīšanai: uzziņu ceļvedis par vienu no tēmām — `sql_dialect`,
  `card_authoring`, `bulk_authoring` vai `review_flow`. Tas nelasa darbvietas datus.
- `next_review_card` — stingri tikai lasīšanai: atgriež nākamo atkārtojamo kartīti, tikai
  priekšpusi, tādā pašā rindas secībā kā lietotnēs. Neobligāts `tags` vai `deckId` sašaurina
  rindu.
- `reveal_answer` — stingri tikai lasīšanai: atgriež vienas kartītes otru pusi pēc tam, kad
  lietotājs ir mēģinājis atbildēt uz jautājumu tās priekšpusē.
- `submit_review` — reģistrē vienu vērtējumu `Again`, `Hard`, `Good` vai `Easy` un
  virza uz priekšu kartītes FSRS grafiku.

SQL saskarne ir apzināti ierobežots dialekts un nav pilnvērtīgs PostgreSQL.
Šī dokumentācija aptver tikai atbalstīto dialektu, un tā nav PostgreSQL saderības
rokasgrāmata. Vaicājumi var attiekties tikai uz resursiem `workspace`, `cards`, `decks` un
`review_events`, katrs vaicājums attiecas tikai uz tavu darbvietu, un
lasīšana un rakstīšana ir ierobežota līdz `100` rindām vienā vaicājumā.

## Atkārtošana

Atkārtošanas rīki ļauj aģentam pa vienai kartītei pārbaudīt lietotāja zināšanas un saglabāt katru
vērtējumu kartītes FSRS grafikā:

1. `next_review_card` atgriež `cardId` un `frontText` vai `card: null`, ja
   nekas nav jāatkārto.
2. Kad lietotājs ir atbildējis, `reveal_answer` atgriež šīs kartītes `backText`.
3. `submit_review` pieņem `cardId`, klienta ģenerētu `reviewId` UUID,
   `rating` un lietotāja IANA laika joslu `reviewedTimeZone`. Serveris piešķir
   atkārtojuma laiku un atgriež kartītes jauno grafiku.

Ja nav skaidrs, vai iesniegšana izdevās, atkārto to ar to pašu `reviewId`; otrs atkārtojums nekad
netiek reģistrēts. Iesniedzot var saņemt arī šādas atbildes:

- `409 REVIEW_EVENT_CONFLICT` — atkārtojums jau ir reģistrēts, un kļūdas
  detaļās ir kartītes pašreizējais grafiks.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` jau identificē citas
  kartītes atkārtojumu, tāpēc nekas netika saglabāts; iesniedz vēlreiz ar jaunu `reviewId`.
- `409 REVIEW_STALE` — kartītes saglabātais atkārtošanas laiks ir vienāds ar pašreizējo
  servera laiku vai vēlāks par to; atkārto citu kartīti.

Atkārtojumus reģistrē tikai ar `submit_review`: SQL nevar rakstīt
`review_events` vai FSRS plānošanas stāvokli. Pilnus atkārtošanas un
vērtēšanas noteikumus iegūsi, izsaucot `get_guide` ar tēmu `review_flow`.

## Kartīšu struktūra

Visām kartītēm ir vienota struktūra, un rīki uz to paļaujas:

- `front_text` ir tikai jautājums vai uzdevums atkārtošanai, un tajā nekad nav atbildes.
- `back_text` satur atbildi, pēc izvēles arī ar konkrētu piemēru.

Aģenti, kas veido kartītes ar `sql_execute`, ievēro šo struktūru, tāpēc
to izveidotās kartītes var uzreiz atkārtot ar spaced repetition.

## Autentifikācija

Uz vienu un to pašu katra lietotāja datu saskarni ved divi autorizācijas ceļi.

### OAuth 2.1 (interaktīvi savienotāju klienti)

Serveris īsteno autorizācijas koda plūsmu ar PKCE un Dynamic Client
Registration. Pievieno MCP URL kā pielāgotu savienotāju un veic autorizāciju pārlūkā;
iepriekš kopīgots klienta noslēpums nav vajadzīgs. Atklāšana notiek standarta veidā:

- Aizsargātā resursa metadati:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Autorizācijas servera metadati:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API atslēga (CLI un lietojums bez grafiskās saskarnes)

Iegūsti ilgtermiņa `fca_` aģenta API atslēgu ar e-pasta OTP pieteikšanās plūsmu,
kas aprakstīta [API aprakstā](/docs/api/), un pēc tam sūti to kā Bearer marķieri:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Tā ir tā pati atslēga, ko pieņem REST aģentu saskarne, un tai nav vajadzīgs ne pārlūks, ne
OAuth apmaiņa.

Kanoniskais mašīnlasāmais abu ceļu apraksts ir atklāšanas dati
adresē `https://api.nibomo.com/v1/` (spoguļoti adresē `/v1/agent`).

## Drošība un darbības joma

SQL rīkus ir droši apstiprināt, jo saskarne ir norobežots dialekts, kura ievērošanu
nodrošina parsētājs, nevis patvaļīga piekļuve datubāzei:

- **Slēgts atļauto vaicājumu saraksts**: `sql_query` pieņem tikai `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` un `SELECT`; `sql_execute` pieņem tikai `INSERT`,
  `UPDATE` un `DELETE`. Viss pārējais tiek noraidīts parsēšanas laikā.
- **Ierobežoti resursi**: vaicājumi var piekļūt tikai `workspace`, `cards`, `decks`
  un `review_events`.
- **Ierobežojums vienā darbvietā**: katrs SQL vaicājums un atkārtojums attiecas uz vienu
  darbvietu, kurai tev ir piekļuve, — vai nu tevis nodoto `workspaceId`, vai tavu izvēlēto
  noklusējuma darbvietu — bez piekļuves citām darbvietām.
- **Stingri argumenti**: katrs rīks noraida nezināmu argumentu, tāpēc kļūdaini uzrakstīts
  `workspaceId` izraisa kļūdu, nevis izpildi tavā noklusējuma darbvietā.
- **Ierobežojumi**: līdz `100` rindām vienā vaicājumā, līdz `50` vaicājumiem vienā paketē un
  rezultāta ierobežojums aptuveni `12k` tokenu. Izmaiņu paketes tiek piemērotas atomāri.
- **Lasīšanas un rakstīšanas nodalīšana**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` un `reveal_answer` ir stingri tikai lasīšanai (`readOnlyHint`)
  un nekad nelabo datus, nepārrēķina plānojumu un nemaina kartītes stāvokli.
  `sql_execute` un `submit_review` ir vienīgie rakstīšanas rīki (`destructiveHint`):
  `sql_execute` raksta kartītes un kartīšu komplektus, bet `submit_review` reģistrē atkārtojumu un
  virza uz priekšu attiecīgās kartītes grafiku.

Visa sistēma — lietotne, aizmugursistēma un infrastruktūra — ir atvērtā pirmkoda, un to var
[darbināt savā serverī](/docs/self-hosting/), tāpēc to pašu savienotāju vari izmantot ar savu
izvietojumu.
