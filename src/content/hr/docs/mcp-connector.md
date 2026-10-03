---
title: MCP konektor
description: "Povežite Nibomo putem Claude direktorija ili konfigurirajte njegov udaljeni MCP poslužitelj u Claude Codeu i drugim klijentima, uz OAuth i osam alata za kartice i ponavljanje."
---

## Povezivanje putem Claude direktorija

Otvorite [Nibomo u Claude direktoriju](https://claude.ai/directory/nibomo), povežite ga, prijavite se u svoj Nibomo račun i odobrite pristup. Nibomo je naveden kao konektor u kategoriji Community.

Za Claude Code koristite isti račun s pretplatom na Claude i nakon povezivanja provjerite `/mcp`. Prijave putem API ključa i vanjskih pružatelja usluga ne učitavaju automatski vaše claude.ai konektore.

Claude Code možete konfigurirati i izravno. Pokrenite naredbu u nastavku, zatim u Claude Codeu otvorite `/mcp` i dovršite autorizaciju u pregledniku:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentacija za MCP u Claude Codeu](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Pregled

Nibomo pokreće udaljeni MCP (Model Context Protocol) poslužitelj kako bi MCP klijenti i AI agenti mogli čitati vaše kartice koje su na redu, ponavljati ih s vama pitanje po pitanje te izrađivati ili uređivati kartice i špilove umjesto vas.

Agenti se mogu povezati na dva načina: putem ovog MCP poslužitelja (najbolje za MCP klijente kao što su Claude ili Cursor) ili putem [URL-a za otkrivanje Agents API-ja](/docs/api/) za CLI agente. Oba načina pristupaju istom sučelju za podatke pojedinog korisnika; ova stranica opisuje MCP poslužitelj.

Povežite se s njim na:

```text
https://mcp.nibomo.com/mcp
```

Transportni protokol je Streamable HTTP. Poslužitelj izlaže osam alata za otkrivanje radnih prostora, čitanje i pisanje kartica i špilova, referentne vodiče, ponavljanje i potrošnju na računu.

## Kako ga dodati u svoj klijent

Većina klijenata dodaje udaljeni MCP poslužitelj kao prilagođeni konektor:

1. Otvorite postavke konektora ili MCP poslužitelja u svom klijentu.
2. Dodajte prilagođeni konektor i zalijepite URL poslužitelja `https://mcp.nibomo.com/mcp`.
3. U interaktivnim klijentima autorizirajte pristup u pregledniku kad se to zatraži. Poslužitelj koristi OAuth 2.1 s Dynamic Client Registration, pa nema klijentske tajne koju treba zalijepiti ni aplikacije koju najprije treba registrirati.
4. Za rad bez sučelja ili putem CLI-ja umjesto toka u pregledniku postavite zaglavlje `Authorization: Bearer fca_…` sa svojim API ključem za agente.

Nakon autorizacije jednom pozovite `list_workspaces` da odaberete radni prostor, a zatim koristite `sql_query` za čitanje i `sql_execute` za pisanje kartica i špilova. Za ponavljanje pozovite `next_review_card`, zatim `reveal_answer`, pa `submit_review`.

## Alati

Poslužitelj izlaže osam alata. Čitanje i pisanje namjerno su razdvojeni kako jedan alat nikad ne bi miješao sigurne i destruktivne operacije.

- `get_usage_limits` — strogo samo za čitanje: plan računa, ograničenja i trenutačna mjesečna potrošnja AI-ja; ne čita i ne mijenja kartice.
- `sql_query` — pristup vašim karticama i špilovima strogo samo za čitanje (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — pristup za pisanje vašim karticama i špilovima (`INSERT`, `UPDATE`, `DELETE`) u atomarnom skupu naredbi.
- `list_workspaces` — strogo samo za čitanje: popis radnih prostora kojima imate pristup, svaki s `workspaceId`, nazivom, brojem aktivnih kartica, zadnjom aktivnošću i podatkom je li trenutačno odabran kao zadani. Vraćeni `workspaceId` koristite za neobavezni argument `workspaceId` SQL alata i alata za ponavljanje.
- `get_guide` — strogo samo za čitanje, referentni vodič za jednu temu: `sql_dialect`, `card_authoring`, `bulk_authoring` ili `review_flow`. Ne čita podatke radnog prostora.
- `next_review_card` — strogo samo za čitanje: vraća sljedeću karticu za ponavljanje, samo prednju stranu, istim redoslijedom kao u aplikacijama. Neobavezni argument `tags` ili `deckId` sužava red.
- `reveal_answer` — strogo samo za čitanje: vraća stražnju stranu jedne kartice nakon što je učenik pokušao odgovoriti na prednju.
- `submit_review` — bilježi jednu ocjenu `Again`, `Hard`, `Good` ili `Easy` i pomiče FSRS raspored kartice.

SQL sučelje je namjerno ograničen dijalekt i nije potpuni PostgreSQL. Ova dokumentacija pokriva samo podržani dijalekt, a ne referencu kompatibilnosti s PostgreSQL-om. Naredbe mogu pristupiti samo resursima `workspace`, `cards`, `decks` i `review_events`, svaka naredba ograničena je na vaš radni prostor, a čitanje i pisanje ograničeni su na `100` redaka po naredbi.

## Ponavljanje

Alati za ponavljanje omogućuju agentu da ispituje učenika karticu po karticu i svaku ocjenu spremi u FSRS raspored kartice:

1. `next_review_card` vraća `cardId` i `frontText` ili `card: null` kad ništa nije na redu.
2. Nakon što učenik odgovori, `reveal_answer` vraća `backText` te kartice.
3. `submit_review` prima `cardId`, UUID `reviewId` koji generira klijent, `rating` i učenikov IANA `reviewedTimeZone`. Poslužitelj bilježi vrijeme ponavljanja i vraća novi raspored kartice.

Slanje čiji ishod nije siguran ponovite s istim `reviewId`; time se nikad ne bilježi drugo ponavljanje. Slanje može vratiti i ove odgovore:

- `409 REVIEW_EVENT_CONFLICT` — ponavljanje je već zabilježeno, a detalji pogreške sadrže trenutačni raspored kartice.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` već označava ponavljanje druge kartice, pa ništa nije spremljeno; pošaljite ponovno s novim `reviewId`.
- `409 REVIEW_STALE` — spremljeno vrijeme ponavljanja kartice jednako je trenutačnom vremenu poslužitelja ili je nakon njega; ponovite neku drugu karticu.

Ponavljanja se bilježe samo putem `submit_review`: SQL ne može pisati `review_events` ni FSRS stanje raspoređivanja. Za potpuna pravila ponavljanja i ocjenjivanja pozovite `get_guide` s temom `review_flow`.

## Ugovor kartice

Svaka kartica slijedi isti ugovor i alati se na njega oslanjaju:

- `front_text` je samo pitanje ili poticaj za ponavljanje i nikad ne sadrži odgovor.
- `back_text` sadrži odgovor, po želji s konkretnim primjerom.

Agenti koji izrađuju kartice putem `sql_execute` slijede ovaj ugovor, pa su kartice koje izrade odmah spremne za razmaknuto ponavljanje.

## Autentifikacija

Postoje dva načina autorizacije i oba pristupaju istom sučelju za podatke pojedinog korisnika.

### OAuth 2.1 (interaktivni klijenti s konektorom)

Poslužitelj implementira tok s autorizacijskim kodom uz PKCE i Dynamic Client Registration. Dodajte MCP URL kao prilagođeni konektor i autorizirajte pristup u pregledniku; nema unaprijed dijeljene klijentske tajne. Otkrivanje je standardno:

- Metapodaci zaštićenog resursa:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metapodaci autorizacijskog poslužitelja:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API ključ (bez sučelja i CLI)

Dugotrajni API ključ za agente s prefiksom `fca_` dobit ćete putem prijave OTP kodom iz e-pošte, dokumentirane u [API referenci](/docs/api/), a zatim ga šaljite kao Bearer token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

To je isti ključ koji prihvaća REST sučelje za agente i ne zahtijeva preglednik ni OAuth razmjenu.

Kanonski strojno čitljiv opis obaju načina je sadržaj za otkrivanje na `https://api.nibomo.com/v1/` (preslikan na `/v1/agent`).

## Sigurnost i opseg

SQL alate sigurno je odobriti jer je sučelje ograničen dijalekt čija pravila provodi parser, a ne proizvoljan pristup bazi podataka:

- **Zatvoreni popis dopuštenih naredbi**: `sql_query` prihvaća samo `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` i `SELECT`; `sql_execute` prihvaća samo `INSERT`, `UPDATE` i `DELETE`. Sve ostalo odbija se već pri parsiranju.
- **Ograničeni resursi**: naredbe mogu pristupiti samo resursima `workspace`, `cards`, `decks` i `review_events`.
- **Ograničenje na radni prostor**: svaka SQL naredba i svako ponavljanje ograničeni su na jedan radni prostor kojem imate pristup, bilo `workspaceId` koji proslijedite bilo vaš odabrani zadani, bez pristupa podacima drugih korisnika.
- **Strogi argumenti**: svaki alat odbija nepoznati argument, pa pogrešno napisan `workspaceId` uzrokuje pogrešku umjesto da se naredba izvrši nad vašim zadanim radnim prostorom.
- **Ograničenja**: do `100` redaka po naredbi, do `50` naredbi po skupu i ograničenje rezultata od otprilike `12k` tokena. Skupovi izmjena primjenjuju se atomarno.
- **Podjela na čitanje i pisanje**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` i `reveal_answer` strogo su samo za čitanje (`readOnlyHint`) i nikad ne popravljaju podatke, ne preračunavaju raspored niti mijenjaju stanje kartica. `sql_execute` i `submit_review` jedini su alati za pisanje (`destructiveHint`): `sql_execute` piše kartice i špilove, a `submit_review` bilježi ponavljanje i pomiče raspored njegove kartice.

Cijeli stack — aplikacija, backend i infrastruktura — otvorenog je koda i može se [hostirati na vlastitoj infrastrukturi](/docs/self-hosting/), pa isti konektor možete koristiti s vlastitom instalacijom.
