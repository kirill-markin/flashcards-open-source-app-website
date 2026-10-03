---
title: Povezovalnik MCP
description: "Povežite Nibomo prek imenika Claude ali nastavite njegov oddaljeni strežnik MCP v Claude Code in drugih odjemalcih, z OAuth in osmimi orodji za učne kartice in ponavljanje."
---

## Povezava prek imenika Claude

Odprite [Nibomo v imeniku Claude](https://claude.ai/directory/nibomo), ga povežite, se prijavite v svoj račun Nibomo in odobrite dostop. Nibomo je naveden kot povezovalnik skupnosti.

Za Claude Code uporabite isti račun z naročnino Claude in po povezavi preverite `/mcp`. Prijave s ključem API in prek zunanjih ponudnikov ne naložijo samodejno vaših povezovalnikov s claude.ai.

Claude Code lahko nastavite tudi neposredno. Zaženite spodnji ukaz, nato v Claude Code odprite `/mcp` in dokončajte odobritev v brskalniku:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentacija Claude Code o MCP](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Pregled

Nibomo poganja oddaljeni strežnik MCP (Model Context Protocol), da lahko odjemalci MCP in
agenti AI berejo vaše kartice, ki so na vrsti, jih z vami ponavljajo vprašanje za vprašanjem
ter za vas ustvarjajo ali urejajo kartice in komplete.

Agenti se lahko povežejo na dva načina: prek tega strežnika MCP (najprimernejše za odjemalce MCP, kot sta
Claude ali Cursor) ali prek [URL-ja za odkrivanje Agents API](/docs/api/) za agente CLI.
Oba načina dostopata do istega podatkovnega vmesnika posameznega uporabnika; ta stran opisuje strežnik MCP.

Povežite se nanj na naslovu:

```text
https://mcp.nibomo.com/mcp
```

Kot transport se uporablja Streamable HTTP. Strežnik ponuja osem orodij za odkrivanje delovnih prostorov, branje in pisanje kartic in kompletov, referenčne vodnike, ponavljanje in porabo računa.

## Kako ga dodate v svojega odjemalca

Večina odjemalcev doda oddaljeni strežnik MCP kot povezovalnik po meri:

1. Odprite nastavitve povezovalnikov ali strežnikov MCP v svojem odjemalcu.
2. Dodajte povezovalnik po meri in prilepite URL strežnika `https://mcp.nibomo.com/mcp`.
3. Pri interaktivnih odjemalcih dostop odobrite v brskalniku, ko se prikaže poziv. Strežnik
   uporablja OAuth 2.1 z Dynamic Client Registration, zato vam ni treba prilepiti
   skrivnosti odjemalca niti najprej registrirati aplikacije.
4. Za uporabo brez grafičnega vmesnika ali v CLI namesto toka v brskalniku nastavite glavo `Authorization: Bearer fca_…` s svojim
   ključem API za agente.

Po odobritvi enkrat pokličite `list_workspaces`, da izberete delovni prostor, nato pa
`sql_query` uporabljajte za branje in `sql_execute` za pisanje kartic in kompletov. Za ponavljanje pokličite
`next_review_card`, nato `reveal_answer` in nato `submit_review`.

## Orodja

Strežnik ponuja osem orodij. Branje in pisanje sta namenoma ločena, tako da eno
orodje nikoli ne meša varnih in destruktivnih operacij.

- `get_usage_limits` — strogo samo za branje: paket računa, omejitve in trenutna mesečna poraba AI; kartic ne bere in ne spreminja.
- `sql_query` — dostop strogo samo za branje do vaših kartic in kompletov (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — dostop za pisanje do vaših kartic in kompletov (`INSERT`, `UPDATE`,
  `DELETE`) kot atomarni paket.
- `list_workspaces` — strogo samo za branje: seznam delovnih prostorov, do katerih imate dostop,
  vsak s svojim
  `workspaceId`, imenom, številom aktivnih kartic, zadnjo dejavnostjo in podatkom, ali je to vaš
  trenutno izbrani privzeti delovni prostor. Vrnjeni `workspaceId` uporabite za neobvezni
  argument `workspaceId` orodij za SQL in ponavljanje.
- `get_guide` — strogo samo za branje: vrne referenčni vodnik za eno od tem `sql_dialect`,
  `card_authoring`, `bulk_authoring` ali `review_flow`. Ne bere podatkov delovnega prostora.
- `next_review_card` — strogo samo za branje: vrne naslednjo kartico za ponavljanje, samo
  sprednjo stran, v enakem vrstnem redu čakalne vrste kot aplikacije. Neobvezni argument `tags` ali `deckId` zoži
  čakalno vrsto.
- `reveal_answer` — strogo samo za branje: vrne zadnjo stran ene kartice, potem ko je
  učenec poskusil odgovoriti na njeno sprednjo stran.
- `submit_review` — zabeleži eno oceno `Again`, `Hard`, `Good` ali `Easy` in
  premakne razpored FSRS kartice naprej.

Vmesnik SQL je namenoma omejeno narečje in ni celoten PostgreSQL.
Ta dokumentacija zajema samo podprto narečje, ni pa referenca za združljivost
s PostgreSQL. Stavki lahko naslavljajo samo vire `workspace`, `cards`, `decks` in
`review_events`, vsak stavek je omejen na vaš lastni delovni prostor,
branje in pisanje pa sta omejena na `100` vrstic na stavek.

## Ponavljanje

Orodja za ponavljanje agentu omogočajo, da učenca sprašuje kartico za kartico in vsako
oceno shrani v razpored FSRS kartice:

1. `next_review_card` vrne `cardId` in `frontText` ali `card: null`, ko
   ni nič na vrsti.
2. Ko učenec odgovori, `reveal_answer` vrne `backText` te kartice.
3. `submit_review` sprejme `cardId`, UUID `reviewId`, ustvarjen v odjemalcu,
   `rating` in učenčev `reviewedTimeZone` po IANA. Strežnik zabeleži
   čas ponovitve in vrne nov razpored kartice.

Če niste prepričani, ali je oddaja uspela, jo ponovite z istim `reviewId`; druge
ponovitve to nikoli ne zabeleži. Oddaja lahko vrne tudi:

- `409 REVIEW_EVENT_CONFLICT` — ponovitev je že zabeležena, podrobnosti napake
  pa vsebujejo trenutni razpored kartice.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` že označuje ponovitev
  druge kartice, zato ni bilo nič shranjeno; oddajte znova z novim `reviewId`.
- `409 REVIEW_STALE` — shranjeni čas ponovitve kartice je enak trenutnemu času
  strežnika ali poznejši; ponavljajte drugo kartico.

Ponovitve se beležijo samo prek `submit_review`: SQL ne more pisati v
`review_events` ali stanje razporejanja FSRS. Za celotna pravila ponavljanja in ocenjevanja pokličite `get_guide` s temo
`review_flow`.

## Pogodba za kartice

Vse kartice sledijo isti pogodbi, na katero se zanašajo orodja:

- `front_text` je samo vprašanje ali poziv za ponavljanje in nikoli ne vsebuje odgovora.
- `back_text` vsebuje odgovor, po želji s konkretnim primerom.

Agenti, ki ustvarjajo kartice prek `sql_execute`, sledijo tej pogodbi, zato so
kartice, ki jih ustvarijo, takoj pripravljene za ponavljanje v časovnih razmikih.

## Preverjanje pristnosti

Do istega podatkovnega vmesnika posameznega uporabnika vodita dve poti avtorizacije.

### OAuth 2.1 (interaktivni odjemalci s povezovalniki)

Strežnik podpira tok avtorizacijske kode s PKCE in Dynamic Client
Registration. URL MCP dodajte kot povezovalnik po meri in dostop odobrite v brskalniku;
vnaprej deljena skrivnost odjemalca ni potrebna. Odkrivanje je standardno:

- Metapodatki zaščitenega vira:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metapodatki avtorizacijskega strežnika:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### Ključ API (brez grafičnega vmesnika in CLI)

Dolgotrajni ključ API za agente `fca_` pridobite s prijavo z enkratno kodo po e-pošti,
opisano v [referenci API](/docs/api/), nato pa ga pošljite kot žeton Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

To je isti ključ, ki ga sprejema vmesnik REST za agente, in z njim ne potrebujete ne brskalnika
ne postopka OAuth.

Kanonični strojno berljivi opis obeh poti je odgovor za odkrivanje
na `https://api.nibomo.com/v1/` (zrcaljen na `/v1/agent`).

## Varnost in obseg

Orodja SQL lahko varno odobrite, ker je vmesnik omejeno narečje,
ki ga uveljavlja razčlenjevalnik, in ne poljuben dostop do zbirke podatkov:

- **Zaprt seznam dovoljenih stavkov**: `sql_query` sprejme samo `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` in `SELECT`; `sql_execute` sprejme samo `INSERT`,
  `UPDATE` in `DELETE`. Vse drugo je zavrnjeno že pri razčlenjevanju.
- **Omejeni viri**: stavki lahko dostopajo samo do `workspace`, `cards`, `decks`
  in `review_events`.
- **Omejitev na delovni prostor**: vsak stavek SQL in vsaka ponovitev sta omejena na en
  delovni prostor, do katerega imate dostop, bodisi na `workspaceId`, ki ga podate, bodisi na izbrani
  privzeti delovni prostor, brez dostopa do drugih najemnikov.
- **Strogi argumenti**: vsako orodje zavrne neznan argument, zato napačno črkovan
  `workspaceId` povzroči napako, namesto da bi se klic izvedel nad vašim privzetim delovnim prostorom.
- **Omejitve**: največ `100` vrstic na stavek, največ `50` stavkov na paket in
  omejitev rezultata na približno `12k` žetonov. Paketi sprememb se uveljavijo atomarno.
- **Ločitev branja in pisanja**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` in `reveal_answer` so strogo samo za branje (`readOnlyHint`)
  in nikoli ne popravljajo podatkov, ne preračunavajo razporeda in ne spreminjajo stanja kartic.
  `sql_execute` in `submit_review` sta edini orodji za pisanje (`destructiveHint`):
  `sql_execute` piše kartice in komplete, `submit_review` pa zabeleži ponovitev in
  premakne razpored njene kartice naprej.

Celoten sistem — aplikacija, zaledni sistem in infrastruktura — je odprtokoden in ga lahko
[gostite sami](/docs/self-hosting/), tako da lahko isti povezovalnik uporabljate z
lastno namestitvijo.
