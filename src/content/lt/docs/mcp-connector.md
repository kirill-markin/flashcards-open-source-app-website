---
title: MCP jungtis
description: "Prijunkite Nibomo per Claude katalogą arba sukonfigūruokite jo nuotolinį MCP serverį Claude Code ir kituose klientuose: OAuth ir aštuoni įrankiai kortelėms ir kartojimui."
---

## Prijungimas per Claude katalogą

Atidarykite [Nibomo Claude kataloge](https://claude.ai/directory/nibomo), prijunkite jį, prisijunkite prie savo Nibomo paskyros ir suteikite prieigą. Kataloge Nibomo pažymėta kaip Community jungtis.

Naudodami Claude Code, prisijunkite ta pačia Claude prenumeratos paskyra ir, prijungę jungtį, patikrinkite `/mcp`. Prisijungus API raktu ar per trečiosios šalies teikėją, jūsų claude.ai jungtys automatiškai neįkeliamos.

Claude Code taip pat galite sukonfigūruoti tiesiogiai. Paleiskite toliau pateiktą komandą, tada Claude Code aplinkoje atidarykite `/mcp` ir užbaikite autorizaciją naršyklėje:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Claude Code MCP dokumentacija](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Apžvalga

Nibomo turi nuotolinį MCP (Model Context Protocol) serverį, kad MCP klientai ir
DI agentai galėtų skaityti korteles, kurias jau laikas kartoti, kartoti jas kartu su jumis po vieną klausimą
ir jūsų vardu kurti ar redaguoti korteles bei kalades.

Agentai gali prisijungti dviem būdais: per šį MCP serverį (geriausia MCP klientams, tokiems kaip
Claude ar Cursor) arba per [Agents API aptikimo URL](/docs/api/), skirtą CLI
agentams. Abu būdai pasiekia tą pačią kiekvieno naudotojo duomenų sąsają; šiame puslapyje aprašomas MCP serveris.

Prisijunkite adresu:

```text
https://mcp.nibomo.com/mcp
```

Transportas – Streamable HTTP. Serveris siūlo aštuonis įrankius darbo sritims aptikti, kortelėms ir kaladėms skaityti bei rašyti, informaciniams vadovams, kartojimui ir paskyros naudojimo duomenims.

## Kaip pridėti jį savo kliente

Daugelis klientų nuotolinį MCP serverį prideda kaip pasirinktinę jungtį:

1. Atidarykite savo kliento jungčių arba MCP serverių nustatymus.
2. Pridėkite pasirinktinę jungtį ir įklijuokite serverio URL `https://mcp.nibomo.com/mcp`.
3. Interaktyviuose klientuose, kai paprašoma, suteikite leidimą naršyklėje. Serveris
   naudoja OAuth 2.1 su Dynamic Client Registration, todėl nereikia įklijuoti kliento paslapties
   ir nieko iš anksto registruoti.
4. Jei naudojate be grafinės sąsajos ar per CLI, vietoje naršyklės eigos nustatykite antraštę `Authorization: Bearer fca_…` su savo
   agento API raktu.

Suteikę leidimą, vieną kartą iškvieskite `list_workspaces`, kad pasirinktumėte darbo sritį, tada
skaitymui naudokite `sql_query`, o kortelių ir kaladžių rašymui – `sql_execute`. Norėdami kartoti, iškvieskite
`next_review_card`, tada `reveal_answer`, tada `submit_review`.

## Įrankiai

Serveris siūlo aštuonis įrankius. Skaitymas ir rašymas sąmoningai atskirti, kad vienas
įrankis niekada nemaišytų saugių ir destruktyvių operacijų.

- `get_usage_limits` – griežtai tik skaitymui: paskyros planas, ribos ir šio mėnesio DI naudojimas; kortelių neskaito ir nekeičia.
- `sql_query` – griežtai tik skaitymui skirta prieiga prie jūsų kortelių ir kaladžių (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` – rašymo prieiga prie jūsų kortelių ir kaladžių (`INSERT`, `UPDATE`,
  `DELETE`) atominiu paketu.
- `list_workspaces` – griežtai tik skaitymui: jums prieinamų darbo sričių sąrašas,
  kuriame kiekviena pateikiama su
  `workspaceId`, pavadinimu, aktyvių kortelių skaičiumi, paskutine veikla ir požymiu, ar ji
  šiuo metu pasirinkta kaip numatytoji. Grąžintą `workspaceId` naudokite kaip neprivalomą
  SQL ir kartojimo įrankių argumentą `workspaceId`.
- `get_guide` – griežtai tik skaitymui: vienos temos informacinis vadovas – `sql_dialect`,
  `card_authoring`, `bulk_authoring` arba `review_flow`. Darbo srities duomenų jis neskaito.
- `next_review_card` – griežtai tik skaitymui: grąžina kitą kartotiną kortelę, tik priekinę
  pusę, ta pačia eilės tvarka kaip programėlėse. Neprivalomas `tags` arba `deckId` susiaurina
  eilę.
- `reveal_answer` – griežtai tik skaitymui: grąžina vienos kortelės galinę pusę, kai
  besimokantysis jau pabandė atsakyti į priekinę.
- `submit_review` – įrašo vieną įvertinimą `Again`, `Hard`, `Good` arba `Easy` ir
  atnaujina kortelės FSRS tvarkaraštį.

SQL sąsaja yra sąmoningai apribotas dialektas ir nėra visavertis PostgreSQL.
Šioje dokumentacijoje aprašomas tik palaikomas dialektas; tai nėra PostgreSQL
suderinamumo žinynas. Sakiniai gali kreiptis tik į `workspace`, `cards`, `decks` ir
`review_events` išteklius, kiekvienas sakinys apribotas jūsų darbo sritimi, o
skaitymas ir rašymas ribojami iki `100` eilučių vienam sakiniui.

## Kartojimas

Kartojimo įrankiai leidžia agentui klausinėti besimokantįjį po vieną kortelę ir kiekvieną
įvertinimą įrašyti į kortelės FSRS tvarkaraštį:

1. `next_review_card` grąžina `cardId` ir `frontText` arba `card: null`, kai
   nėra ką kartoti.
2. Besimokančiajam atsakius, `reveal_answer` grąžina tos kortelės `backText`.
3. `submit_review` priima `cardId`, kliento sugeneruotą `reviewId` UUID,
   `rating` ir besimokančiojo IANA `reviewedTimeZone`. Serveris pažymi
   kartojimo laiką ir grąžina naują kortelės tvarkaraštį.

Jei nežinote, ar pateikimas pavyko, pateikite jį dar kartą su tuo pačiu `reviewId` – antras kartojimas niekada
nebus įrašytas. Pateikimas taip pat gali grąžinti:

- `409 REVIEW_EVENT_CONFLICT` – kartojimas jau įrašytas, o klaidos
  informacijoje pateikiamas dabartinis kortelės tvarkaraštis.
- `409 REVIEW_ID_CARD_MISMATCH` – `reviewId` jau žymi kitos kortelės
  kartojimą, todėl niekas neišsaugota; pateikite dar kartą su nauju `reviewId`.
- `409 REVIEW_STALE` – išsaugotas kortelės kartojimo laikas yra lygus dabartiniam serverio
  laikui arba vėlesnis; kartokite kitą kortelę.

Kartojimai įrašomi tik per `submit_review`: SQL negali rašyti į
`review_events` ar FSRS planavimo būsenos. Visas kartojimo ir vertinimo taisykles rasite iškvietę `get_guide` su tema
`review_flow`.

## Kortelių sutartis

Kiekviena kortelė atitinka vieną sutartį, ir įrankiai ja remiasi:

- `front_text` yra tik klausimas arba kartojimo užuomina ir niekada nepateikia atsakymo.
- `back_text` pateikia atsakymą, prireikus su konkrečiu pavyzdžiu.

Agentai, kuriantys korteles per `sql_execute`, laikosi šios sutarties, todėl
jų sukurtos kortelės iš karto tinka kartojimui intervalais.

## Autentifikavimas

Abiem autorizacijos būdais pasiekiama ta pati kiekvieno naudotojo duomenų sąsaja.

### OAuth 2.1 (interaktyvūs jungčių klientai)

Serveris įgyvendina autorizacijos kodo eigą su PKCE ir Dynamic Client
Registration. Pridėkite MCP URL kaip pasirinktinę jungtį ir suteikite leidimą naršyklėje;
iš anksto bendrinama kliento paslaptis nereikalinga. Aptikimas standartinis:

- Saugomo ištekliaus metaduomenys:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Autorizacijos serverio metaduomenys:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API raktas (be grafinės sąsajos ir CLI)

Gaukite ilgalaikį `fca_` agento API raktą per prisijungimo el. pašto vienkartiniu kodu eigą,
aprašytą [API apraše](/docs/api/), tada siųskite jį kaip Bearer prieigos raktą:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Tai tas pats raktas, kurį priima REST agentų sąsaja, ir jam nereikia nei naršyklės, nei
OAuth apsikeitimo.

Kanoninis mašinai skaitomas abiejų būdų aprašas yra aptikimo turinys
adresu `https://api.nibomo.com/v1/` (veidrodinė kopija adresu `/v1/agent`).

## Saugumas ir apimtis

SQL įrankius saugu patvirtinti, nes sąsaja yra uždaras,
analizatoriaus kontroliuojamas dialektas, o ne laisva prieiga prie duomenų bazės:

- **Uždaras leidžiamų sakinių sąrašas**: `sql_query` priima tik `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` ir `SELECT`; `sql_execute` priima tik `INSERT`,
  `UPDATE` ir `DELETE`. Visa kita atmetama analizės metu.
- **Riboti ištekliai**: sakiniai gali paliesti tik `workspace`, `cards`, `decks`
  ir `review_events`.
- **Apribojimas darbo sritimi**: kiekvienas SQL sakinys ir kartojimas apribotas viena
  jums prieinama darbo sritimi – jūsų nurodyta `workspaceId` arba pasirinkta
  numatytoji, be jokios prieigos prie kitų nuomininkų.
- **Griežti argumentai**: kiekvienas įrankis atmeta nežinomą argumentą, todėl iškvietimas su klaidingai parašytu
  `workspaceId` nepavyksta, užuot įvykdytas numatytojoje darbo srityje.
- **Ribos**: iki `100` eilučių vienam sakiniui, iki `50` sakinių vienam paketui ir
  maždaug `12k` žetonų rezultato riba. Keitimų paketai pritaikomi atomiškai.
- **Skaitymo ir rašymo atskyrimas**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` ir `reveal_answer` yra griežtai tik skaitymui (`readOnlyHint`)
  ir niekada netaiso duomenų, neperskaičiuoja planavimo ir nekeičia kortelių būsenos.
  `sql_execute` ir `submit_review` yra vieninteliai rašymo įrankiai (`destructiveHint`):
  `sql_execute` rašo korteles ir kalades, o `submit_review` įrašo kartojimą ir
  atnaujina atitinkamos kortelės tvarkaraštį.

Visa sistema – programėlė, serverinė dalis ir infrastruktūra – yra atvirojo kodo ir ją galima
[talpinti savame serveryje](/docs/self-hosting/), todėl tą pačią jungtį galite naudoti su
savo įdiegta versija.
