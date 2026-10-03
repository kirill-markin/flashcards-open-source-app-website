---
title: MCP-konnektor
description: "Ühenda Nibomo Claude'i kataloogi kaudu või seadista selle kaug-MCP-server Claude Code'is ja teistes klientides – OAuthi ja kaheksa tööriistaga õpikaartide ja kordamiste jaoks."
---

## Ühendamine Claude'i kataloogi kaudu

Ava [Nibomo Claude'i kataloogis](https://claude.ai/directory/nibomo), ühenda see, logi sisse oma Nibomo kontole ja anna juurdepääs. Nibomo on kataloogis märgitud kogukonna konnektoriks.

Claude Code'i puhul kasuta sama Claude'i tellimusega kontot ja kontrolli pärast ühendamist käsuga `/mcp`. API-võtme ja kolmandate osapoolte teenusepakkujate kaudu sisselogimisel ei laadita sinu claude.ai konnektoreid automaatselt.

Claude Code'i saad seadistada ka otse. Käivita allolev käsk, seejärel ava Claude Code'is `/mcp` ja vii brauseris autoriseerimine lõpule:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Claude Code'i MCP dokumentatsioon](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Ülevaade

Nibomo käitab kaug-MCP-serverit (Model Context Protocol), et MCP-kliendid ja AI-agendid saaksid lugeda sinu kordamist ootavaid kaarte, korrata neid koos sinuga üks küsimus korraga ning luua või muuta sinu eest kaarte ja kaardipakke.

Agendid saavad ühenduda kahel viisil: selle MCP-serveri kaudu (parim MCP-klientidele, nagu Claude või Cursor) või CLI-agentide jaoks [Agents API avastus-URL-i](/docs/api/) kaudu. Mõlemad jõuavad sama kasutajapõhise andmeliideseni; see leht käsitleb MCP-serverit.

Ühenda aadressil:

```text
https://mcp.nibomo.com/mcp
```

Transpordiks on Streamable HTTP. Server pakub kaheksat tööriista tööruumide avastamiseks, kaartide ja kaardipakkide lugemiseks ja kirjutamiseks, teatmejuhendite jaoks, kordamiseks ja konto kasutuse vaatamiseks.

## Kuidas see oma kliendis lisada

Enamik kliente lisab kaug-MCP-serveri kohandatud konnektorina:

1. Ava oma kliendi konnektorite või MCP-serverite seaded.
2. Lisa kohandatud konnektor ja kleebi serveri URL `https://mcp.nibomo.com/mcp`.
3. Interaktiivsete klientide puhul anna brauseris luba, kui seda küsitakse. Server kasutab OAuth 2.1 protokolli koos Dynamic Client Registrationiga, seega pole vaja kleepida kliendi saladust ega rakendust eelnevalt registreerida.
4. Ilma kasutajaliideseta või CLI kasutuse korral määra brauserivoo asemel päis `Authorization: Bearer fca_…` oma agendi API-võtmega.

Pärast autoriseerimist kutsu üks kord välja `list_workspaces`, et valida tööruum, seejärel kasuta lugemiseks `sql_query` ning kaartide ja kaardipakkide kirjutamiseks `sql_execute`. Kordamiseks kutsu välja `next_review_card`, seejärel `reveal_answer` ja seejärel `submit_review`.

## Tööriistad

Server pakub kaheksat tööriista. Lugemised ja kirjutamised on teadlikult eraldatud, et ükski tööriist ei teeks korraga nii ohutuid kui ka hävitavaid toiminguid.

- `get_usage_limits` — rangelt ainult lugemiseks: konto pakett, limiidid ja jooksva kuu AI kasutus; see ei loe ega muuda kaarte.
- `sql_query` — rangelt ainult lugemiseks mõeldud juurdepääs sinu kaartidele ja kaardipakkidele (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — kirjutamisjuurdepääs sinu kaartidele ja kaardipakkidele (`INSERT`, `UPDATE`, `DELETE`) atomaarse partiina.
- `list_workspaces` — rangelt ainult lugemiseks: loend tööruumidest, millele sul on juurdepääs, igaühe juures `workspaceId`, nimi, aktiivsete kaartide arv, viimane tegevus ja see, kas see on sinu praegu valitud vaiketööruum. Kasuta tagastatud `workspaceId` väärtust SQL-i ja kordamistööriistade valikulise argumendi `workspaceId` jaoks.
- `get_guide` — rangelt ainult lugemiseks: teatmejuhend ühe teema kohta: `sql_dialect`, `card_authoring`, `bulk_authoring` või `review_flow`. See ei loe tööruumi andmeid.
- `next_review_card` — rangelt ainult lugemiseks: tagastab järgmise korratava kaardi, ainult esikülje, samas järjekorras nagu rakendused. Valikuline `tags` või `deckId` kitsendab järjekorda.
- `reveal_answer` — rangelt ainult lugemiseks: tagastab ühe kaardi tagakülje pärast seda, kui õppija on proovinud selle esiküljele vastata.
- `submit_review` — salvestab ühe hinnangu `Again`, `Hard`, `Good` või `Easy` ja nihutab kaardi FSRS-i ajakava edasi.

SQL-liides on teadlikult piiratud dialekt ega ole täielik PostgreSQL. See dokumentatsioon kirjeldab ainult toetatud dialekti ega ole PostgreSQL-iga ühilduvuse teatmik. Laused saavad pöörduda ainult ressursside `workspace`, `cards`, `decks` ja `review_events` poole, iga lause piirdub sinu enda tööruumiga ning lugemised ja kirjutamised on piiratud `100` reaga lause kohta.

## Kordamised

Kordamistööriistad võimaldavad agendil küsitleda õppijat kaart-kaardilt ja salvestada iga hinnangu kaardi FSRS-i ajakavasse:

1. `next_review_card` tagastab `cardId` ja `frontText` või `card: null`, kui midagi pole vaja korrata.
2. Kui õppija on vastanud, tagastab `reveal_answer` selle kaardi `backText`.
3. `submit_review` võtab vastu `cardId`, kliendi loodud `reviewId` UUID, hinnangu `rating` ja õppija IANA ajavööndi `reviewedTimeZone`. Server märgib kordamise aja ja tagastab kaardi uue ajakava.

Kui saatmise tulemus jääb ebaselgeks, saada see uuesti sama `reviewId` väärtusega; teist kordamist ei salvestata kunagi. Saatmine võib vastata ka järgmiselt:

- `409 REVIEW_EVENT_CONFLICT` — kordamine on juba salvestatud ja vea üksikasjad sisaldavad kaardi praegust ajakava.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` tähistab juba teise kaardi kordamist, seega midagi ei salvestatud; saada uuesti uue `reviewId` väärtusega.
- `409 REVIEW_STALE` — kaardi salvestatud kordamisaeg on serveri praegusest ajast hilisem või sellega võrdne; korda mõnda teist kaarti.

Kordamised salvestatakse ainult `submit_review` kaudu: SQL ei saa kirjutada `review_events` ega FSRS-i ajastamise olekut. Kordamise ja hindamise täielike reeglite saamiseks kutsu välja `get_guide` teemaga `review_flow`.

## Kaardi leping

Iga kaart järgib ühte lepingut ja tööriistad tuginevad sellele:

- `front_text` on ainult küsimus või kordamisviip ega sisalda kunagi vastust.
- `back_text` sisaldab vastust, soovi korral koos konkreetse näitega.

Agendid, mis loovad kaarte `sql_execute` kaudu, järgivad seda lepingut, nii et nende loodud kaarte saab kohe hajutatud kordamisega korrata.

## Autentimine

Kaks autoriseerimisteed jõuavad sama kasutajapõhise andmeliideseni.

### OAuth 2.1 (interaktiivsed konnektorikliendid)

Server rakendab volituskoodi voogu koos PKCE ja Dynamic Client Registrationiga. Lisa MCP URL kohandatud konnektorina ja anna luba brauseris; kliendi saladust eelnevalt ei jagata. Avastus on standardne:

- Kaitstud ressursi metaandmed:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Autoriseerimisserveri metaandmed:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-võti (ilma kasutajaliideseta ja CLI)

Hangi pikaajaline `fca_` agendi API-võti [API viites](/docs/api/) kirjeldatud e-posti ühekordse koodiga sisselogimise kaudu ja saada see seejärel Bearer-tõendina:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

See on sama võti, mida aktsepteerib REST-agendiliides, ning see ei vaja brauserit ega OAuthi edasi-tagasi voogu.

Mõlema tee kanooniline masinloetav kirjeldus on avastuse sisu aadressil `https://api.nibomo.com/v1/` (sama sisu on ka aadressil `/v1/agent`).

## Turvalisus ja ulatus

SQL-tööriistu on ohutu heaks kiita, sest liides on piiratud dialekt, mille reegleid jõustab parser, mitte suvaline juurdepääs andmebaasile:

- **Suletud lubatud lausete loend**: `sql_query` aktsepteerib ainult `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ja `SELECT`; `sql_execute` aktsepteerib ainult `INSERT`, `UPDATE` ja `DELETE`. Kõik muu lükatakse parsimisel tagasi.
- **Piiratud ressursid**: laused saavad puudutada ainult ressursse `workspace`, `cards`, `decks` ja `review_events`.
- **Tööruumipõhine piiramine**: iga SQL-lause ja kordamine piirdub ühe tööruumiga, millele sul on juurdepääs — kas sinu edastatud `workspaceId` või sinu valitud vaiketööruumiga — ning juurdepääs teiste tööruumide andmetele on välistatud.
- **Ranged argumendid**: iga tööriist lükkab tundmatu argumendi tagasi, nii et valesti kirjutatud `workspaceId` põhjustab vea, selle asemel et toiming käivitataks sinu vaiketööruumis.
- **Piirangud**: kuni `100` rida lause kohta, kuni `50` lauset partii kohta ja tulemuse piirang umbes `12k` tokenit. Muutmispartiid rakendatakse atomaarselt.
- **Lugemise ja kirjutamise eraldamine**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` ja `reveal_answer` on rangelt ainult lugemiseks (`readOnlyHint`) ega paranda kunagi andmeid, ei arvuta ajastamist ümber ega muuda kaardi olekut. `sql_execute` ja `submit_review` on ainsad kirjutamistööriistad (`destructiveHint`): `sql_execute` kirjutab kaarte ja kaardipakke ning `submit_review` salvestab kordamise ja nihutab selle kaardi ajakava edasi.

Kogu lahendus — rakendus, taustsüsteem ja taristu — on avatud lähtekoodiga ja seda saab [ise majutada](/docs/self-hosting/), nii et saad sama konnektori ühendada oma juurutusega.
