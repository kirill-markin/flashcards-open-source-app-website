---
title: "Kas Quizletil on 2026. aastal avalik API? Praegune seis ja turvalised alternatiivid"
description: "Kas Quizletil on API? 18. augusti 2026 seisuga puudub dokumenteeritud avalik API, mille kasutamist saaks iseseisvalt alustada. Võrdle toetatud võimalusi."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizleti API"
  - "kas Quizletil on API"
  - "Quizleti avalik API"
  - "Quizleti arendaja-API"
  - "Quizleti API alternatiiv"
  - "õpikaartide automatiseerimine"
---

18. augusti 2026 seisuga ei ole Quizletil dokumenteeritud avalikku arendaja-API-t, mille kasutamist saaks iseseisvalt alustada, ega avalikku arendajaportaali. Sõltumatul arendajal pole praegu ametlikku võimalust registreerida rakendust, hankida Quizleti API-võtit ning kasutada dokumenteeritud otspunkte õpikaartide andmete lugemiseks või muutmiseks.

See järeldus puudutab Quizleti avalikku dokumentatsiooni, mitte ettevõtte sisemisi süsteeme. Quizletil on olemas integratsioonid teiste toodete ja partneritega. Kaks praegust näidet on Quizleti rakendus ChatGPT-s ja Google Classroomi lisandmoodul. Kumbki ei anna teistele rakendustele juurdepääsu üldotstarbelisele Quizleti arendaja-API-le.

**Faktid kontrollitud:** 18. augustil 2026.

> **Minu seos Nibomoga:** Olen Kirill Markin ja arendan Nibomot, mille Agent API-t ja MCP-serverit tutvustan allpool alternatiividena. Nibomo ei ühildu Quizletiga ega impordi Quizleti komplekte automaatselt.

![Arendaja võrdleb Quizleti eksporti, manustamist, konkreetsete toodete integratsioone ja dokumenteeritud õpikaartide API-t](/blog/quizlet-api.png)

## Lühivastus: Quizlet ei dokumenteeri avalikku API-t, mille kasutamist saaks iseseisvalt alustada

Kui otsisid vastust küsimusele „kas Quizletil on API?”, sest soovid Quizleti toiminguid automatiseerida, on praegune praktiline vastus järgmine: **dokumenteeritud avalikku API-t, mille kasutamist saaks iseseisvalt alustada, ei ole**.

Mitmed ametlikud funktsioonid võivad väljastpoolt vaadates meenutada API võimalusi. Need lahendavad siiski kitsamaid ülesandeid:

| Vajadus | Toetatud võimalus | Milleks sobib | Mida ei võimalda |
|---|---|---|---|
| Viia enda loodud komplektist tekst mujale | [Eksport Quizleti veebisaidil](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Mõistete ja definitsioonide ühekordne kopeerimine | Piltide, kopeeritud komplektide või õppimisajaloo eksport ega API-juurdepääs |
| Lisada avalik komplekt veebisaidile või õpihaldussüsteemi lehele | [Quizleti manustamine](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Quizleti kaubamärgiga õppetegevuse kuvamine oma lehel | Struktureeritud kaardiandmed ega lugemis- ja kirjutamisvõimalus |
| Muuta ChatGPT vestlus Quizleti komplektiks | [Quizleti rakendus ChatGPT-s](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Komplekti loomine ja eelvaade käsuga `@Quizlet` | Autentimisandmed ega otspunktid oma rakenduse jaoks |
| Anda Quizleti ülesandeid Google Classroomis | [Quizleti Google Classroomi lisandmoodul](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Õppetegevuste leidmine, õpilastele määramine ja jälgimine Classroomis | Üldotstarbeline API enda loodud õppetarkvara jaoks |
| Luua oma Quizleti integratsioon | Praegu puudub dokumenteeritud võimalus iseseisvalt juurdepääsu saada | Võimalik, et olemas on eraldi partnerkokkulepe | Avalik registreerimine, API-võtmed ega kaardiandmetega töötamise dokumenteeritud reeglid |
| Automatiseerida oma õpikaartide tööruumi | [Nibomo Agent API](/et/docs/api/) või [MCP-ühendus](/et/docs/mcp-connector/) | Kaartide ja kaardipakkide korduv lugemine ja muutmine ühe tööruumi piires | Ühilduvus Quizletiga ega automaatne import Quizletist |

Oluline erinevus on lihtne: oma kaartide teksti ühekordne kopeerimine on eksport. Quizleti kuvamine teisel lehel on manustamine. Konkreetse toote integratsioon töötab ainult selle toote töövoos. Tarkvara, mis korduvalt kaarte loob, loeb ja muudab, vajab dokumenteeritud lugemis- ja kirjutamisliidest.

## Eksport, manustamine ja partnerjuurdepääs ei ole avalikud API-d

Avalik API annab välistele arendajatele selge aluse tarkvara loomiseks: dokumentatsiooni, autentimisviisi, toetatud toimingud, kasutusreeglid ja võimaluse hankida autentimisandmed. Ükski Quizleti praegune avalik võimalus ei paku kõike, mida arendaja vajab iseseisvalt alustamiseks.

Quizleti **eksport** tähendab käsitsi andmete ülekandmist. Komplekti looja saab veebisaidil määrata mõistete ja definitsioonide paigutuse, valida **Kopeeri tekst (Copy text)** ning kleepida tulemuse mujale. Quizleti sõnul ei saa pilte ega kopeeritud komplekte eksportida ning funktsioon on saadaval ainult veebisaidil. See sobib hoolikalt tehtud ühekordseks üleviimiseks. Tarkvara ei saa selle abil kaht süsteemi sünkroonis hoida.

**Manustamine** võimaldab sisu kuvada, mitte andmetele juurde pääseda. Quizlet lubab kopeerida avaliku komplekti HTML-koodi režiimides Paaride leidmine (Match), Õppimine (Learn), Test (Test), Õpikaardid (Flashcards) või Õigekiri (Spell). Manustatud tegevusel säilib Quizleti logo ja õppijad kasutavad Quizleti kasutajaliidest. Sinu rakendus ei saa komplekti muudetavate kaardikirjetena.

**Konkreetse toote integratsioonil** on oma kokkulepitud töövoog. Quizlet saab teha koostööd ChatGPT või Google Classroomiga, pakkumata sama liidest kõigile arendajatele. Nende integratsioonide avaldamine kinnitab koostööd vastavate toodetega, kuid ei tõenda üldiseks kasutamiseks mõeldud avaliku Quizleti API olemasolu.

Samal põhjusel ei ole vana API-teek ega brauseri arendustööriistades nähtav päring toetatud Quizleti API. Puudu on avalik dokumentatsioon ja arendajatele mõeldud stabiilne liides koos selgete kasutustingimustega.

## Vali ülesandele sobiv võimalus

### Ühekordseks varundamiseks või üleviimiseks kasuta eksporti

Kasuta enda loodud komplekti jaoks Quizleti ametlikku ekspordivõimalust. Kuna toiming lõpeb valikuga **Kopeeri tekst (Copy text)**, säilita esimene kleebitud koopia muutmata kujul, enne kui eraldajaid korrastad või välju vastendad. Sel viisil saad mõisted ja definitsioonid, kuid mitte taastatavat kaardipakifaili. Pildid ja õppimisajalugu kaasa ei tule.

Praktilise kontrollnimekirja leiad juhendist [Kuidas eksportida Quizleti komplekte 2026. aastal](/et/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Seal käsitletakse alg- ja töökoopiaid, UTF-8 kodeeringut, tabeldusmärke, mitmerealisi definitsioone ning seda, mille poolest erineb kaartide sisu üleviimine kordamisgraafiku andmete üleviimisest.

Eksport sobib ühekordseks üleviimiseks. See ei sobi kaartide igapäevaseks loomiseks, sünkroonimiseks ega korduvaks muutmiseks tarkvara kaudu.

### Kuvamiseks kasuta ametlikku manustamist

Kui õppijad peavad saama kasutada avalikku Quizleti komplekti klassi veebisaidil või õpihaldussüsteemi lehel, kasuta Quizleti veebisaidilt saadavat manustamiskoodi. Vali tegevus, klõpsa **Kopeeri HTML (Copy HTML)** ja lisa tulemus lehele. Õppijad saavad interaktiivse Quizleti tegevuse, kuid seda kuvav sait ei saa kaartide lähteandmeid.

Sageli on see kõik, mida õpetajal vaja läheb. Selle nimetamine API-ks jätab ülesandest asjatult keerulise mulje.

### ChatGPT või Google Classroomi jaoks kasuta vastavat integratsiooni

Quizleti 10. märtsi 2026 ChatGPT-teadaanne kirjeldab kindlat töövoogu: ühenda Quizleti rakendus, alusta viipa märgendiga `@Quizlet`, vaata loodud komplekti eelvaadet ChatGPT-s ning ava see siis Quizletis, et komplekti kohandada ja õppida. See on toetatud viis Quizleti komplekti loomiseks selle vestluse põhjal. See ei anna sinu robotile, skriptile ega veebisaidile korduvkasutatavaid Quizleti API autentimisandmeid.

Sama konkreetne on Quizleti 30. juuni 2026 Google Classroomi teadaanne. Lisandmoodul võimaldab õpetajatel leida õppetegevusi, sealhulgas harjutusküsimusi, õpikaarte ja mänge, määrata neid õpilastele ning jälgida osalemist ja edenemist otse Classroomis. Quizleti sõnul eeldab see paketti Google Workspace for Education Plus; õpetajatel võib olla vaja IT-administraatori luba või abi lisandmooduli kättesaadavaks tegemisel.

Kui üks neist töövoogudest juba vastab sinu eesmärgile, kasuta seda. Kui vajad oma rakendust, ei asenda kumbki integratsioon arendajatele avatud juurdepääsu.

### Korduva automatiseerimise jaoks vali dokumenteeritud lugemis- ja kirjutamisliides

Pidev automatiseerimine tähendab, et sinu tarkvara peab suutma samu toiminguid usaldusväärselt korrata: luua märkmetest kaarte, loetleda kaardipakke, uuendada vastuseid või hallata tööruumi pikema aja jooksul. Lõikelaua kaudu eksportimine ei paku selleks kindlat, dokumenteeritud liidest.

Turvaline lahendus on õpikaardisüsteem, mis kirjeldab selgelt, kuidas väline tarkvara end autendib ning milliseid lugemis- ja kirjutamistoiminguid süsteem toetab. See võib tähendada, et valid automatiseeritud töövoo jaoks Quizleti API alternatiivi, kuid jätkad Quizleti kasutamist nende õpitegevuste jaoks, mida see kasutajatele pakub.

## Mida Nibomo pakub Quizleti API alternatiivina

Nibomo avaldab kaks juurdepääsuviisi samadele piiratud, kasutajapõhistele andmetele:

- [Välistele rakendustele mõeldud Agent API](/et/docs/api/) kasutamine algab päringust `GET https://api.nibomo.com/v1/`. Vastus juhendab agenti e-postiga saadetava ühekordse koodiga (OTP) sisselogimisel, API-võtme loomisel ja tööruumi valimisel. Andmete lugemiseks on SQL-i laadne päringuotspunkt, kirjutamiskäskude täitmiseks eraldi otspunkt.
- [Kaug-MCP-server](/et/docs/mcp-connector/) asub aadressil `https://mcp.nibomo.com/mcp`. MCP-klientidele on saadaval kaheksa tööriista: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` ning kordamistööriistad `next_review_card`, `reveal_answer` ja `submit_review`.

Kaheksas tööriist, `get_usage_limits`, võimaldab üksnes vaadata konto paketti, kasutuspiiranguid ja jooksva kuu AI-kasutust. See ei loe ega muuda kaarte.

Mõlemad juurdepääsuviisid toimivad ühe tööruumi piires. Avaldatud ressursid on `workspace`, `cards`, `decks` ja `review_events` ning iga SQL-lause tulemus on piiratud 100 reaga. SQL-i laadne liides kasutab piiratud dialekti, mitte täielikku PostgreSQL-i. OpenAPI skeem puudub, seega vajavad genereeritud OpenAPI klientidest sõltuvad töövood teist liidest.

See võib aidata arendajal või AI-agendil automatiseerida endale kuuluvate õpikaartidega töötamist. Selle abil ei saa Quizleti URL-ilt andmeid lugeda, Quizleti kontot peegeldada ega Quizleti dokumenteerimata liideseid kasutada. Automaatne import Quizletist puudub. Üleviimiseks ekspordi kõigepealt oma komplekti mõisted ja definitsioonid, vaata tekst üle ning vastenda seejärel andmed sihtsüsteemi kaardiväljadega. Sihtsüsteem loob õppimise jälgimiseks oma andmed; Quizleti ajalugu kaasa ei tule.

Muude tooteerinevuste kohta peale API-juurdepääsu loe [avatud lähtekoodiga Quizleti alternatiivi võrdlust](/blog/quizlet-alternative/).

## Privaatsed brauseripäringud ei ole turvaline otsetee

Quizleti veebiliides teeb võrgupäringuid nagu iga tänapäevane veebirakendus. Ühe sellise päringu leidmine ei muuda seda sinu programmi jaoks toetatud otspunktiks.

Brauseri kasutatavad privaatsed otspunktid võivad sõltuda seansiküpsistest, sisemistest vormingutest, kuritarvitusi takistavatest meetmetest ja praeguse kasutajaliidese ülesehitusest. Need võivad muutuda ilma avalike versioonide või üleminekujuhisteta. Lisaks keelavad [Quizleti kasutustingimused](https://quizlet.com/tos), mida uuendati viimati 28. mail 2026, veebikraapimise ja muu automatiseeritud andmete väljavõtmise ning teenuse loata automatiseeritud kasutamise.

See on habras ja riskantne alus isegi isikliku skripti jaoks, tootest rääkimata. Ma ei esita siin oletuslikke otspunkte ega pöördprojekteerimise juhiseid.

Oma komplekti ühekordseks üleviimiseks kasuta eksporti. Manusta avalik komplekt, kui õppijad vajavad seda teisel lehel. ChatGPT või Google Classroomi konkreetsete töövoogude jaoks kasuta vastavat integratsiooni. Korduvaks lugemiseks ja kirjutamiseks vali tarkvara, mille dokumentatsioon kirjeldab automatiseerimise võimalusi ja reegleid, või tee Quizletiga seotud toiminguid käsitsi, kuni Quizlet sellise liidese avaldab.

## Kuidas teada saada, kas olukord muutub?

Quizlet võib pärast selle artikli faktide kontrollimise kuupäeva käivitada arendajaprogrammi. Otsi ametlikku arendajaportaali või dokumentatsiooni, mis selgitab, kes saab registreeruda, kuidas autentimine toimib, milliseid kaarditoiminguid toetatakse ja millised kasutusreeglid kehtivad.

Veel üks kolmanda osapoole API-teek vastust ei muuda. Samuti ei muuda seda uus partnerlus mõne konkreetse tootega. Kuni Quizlet pole dokumenteerinud arendajatele võimalust iseseisvalt juurdepääsu saada, suhtu väidetesse praeguse Quizleti API kohta ettevaatlikult ning vali toetatud võimalus, mis vastab tegelikule ülesandele.
