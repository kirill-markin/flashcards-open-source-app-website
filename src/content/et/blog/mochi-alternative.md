---
title: "Mochi õpikaartide ülevaade (2026): tasuta pakett, võrguühenduseta kasutus ja võrdlus Ankiga"
description: "Allikate põhjal kontrollitud ülevaade Mochi õpikaartidest: tasuta pakett, võrguühenduseta rakendused, Markdowni märkmed, FSRS, sünkroonimine, Anki import, eksport ja ise majutamise piirangud."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi õpikaardid"
  - "mochi kaardid"
  - "mochi võrdlus ankiga"
  - "anki võrdlus mochiga"
  - "kas mochi on tasuta"
  - "mochi võrguühenduseta"
  - "mochi hind"
  - "mochi majutamine"
  - "markdowni õpikaardid"
  - "mochi intervallkordus"
---

Mochis alustad Markdowni dokumendist, mitte tavalisest esi- ja tagakülje vormist. Lisa rida kolme sidekriipsuga ning dokument jaguneb külgedeks, mida saad õppimisel ükshaaval avada. Jäta see märkmeks, seo teise kaardiga või arhiveeri, et see oleks endiselt otsitav, kuid ei jõuaks kordamisjärjekorda.

See väike eraldaja selgitab, kellele **Mochi õpikaardid** sobivad. Mochi on hea valik inimesele, kes tahab märkmeid ja intervallkordust ühes eelkõige kohalikult töötavas rakenduses, eriti kui Markdown, tagasilingid ja lihtne valik „Mäletasin / Unustasin” tunduvad loomulikud. See on vähem veenev valik pikaajalisele Anki kasutajale, kelle kogu sõltub genereeritud kaardivariantidest, kohandatud HTML-ist ja CSS-ist, JavaScriptist, lisadest või ajastusalgoritmi üksikasjalikest seadistustest.

Ühes seadmes töötamiseks pakub tasuta pakett enamat kui prooviversioon: registreeruda pole vaja ja Mochi dokumenteerib piiramatu võrguühenduseta kasutamise võimalust. Piirang on selles, et seadmetevaheline sünkroonimine kuulub **Pro-paketti hinnaga 5 USA dollarit kuus**. Anki kasutajale on suurem kulu aga see, mis üleviimisel kaotsi läheb. Mochi saab importida Anki paketi ja selle kordamisajaloo, kuid ei suuda säilitada kõiki malle, stiile, skripte, ajastusseadeid ega lisade käitumist.

> **Seotus tootega:** Olen Kirill Markin ja arendan [Nibomot](/et/). See on allikate põhjal kontrollitud töövoo ülevaade, mitte väide, et katsetasin toodet ise. Artiklis pole partnerlinke. Peamine võrdlus on Mochi ja Anki vahel; minu toode ilmub alles lõpuosas selgelt märgistatud alternatiivina.

**Faktid kontrollitud:** 7. septembril 2026. Sel kuupäeval oli viimane nähtav [Mochi väljalase](https://mochi.cards/changelog/) versioon 26.8.2, kuupäevaga 10. august 2026. Hinnad ja rakenduspoodide andmed võivad muutuda.

![Raamatukonservaator katsetab väikest lõõtsana ühendatud kaartide rida, samal ajal kui algne arhiiv on turvaliselt karbis](/blog/mochi-alternative-v3.png)

## Lühihinnang

- **Vali Mochi**, kui tahad Markdowni märkmeid ja kaarte koos, kontota võrguühenduseta kasutust ühes seadmes, tagasilinke ja kahe valikuga kordamist.
- **Vali Anki**, kui vajad väljakujunenud märkmetüüpe, HTML-i ja CSS-i malle, lisasid, tasuta majutatud sünkroonimist, nelja kordamishinnangut või põhjalikumaid FSRS-i seadistusi.
- **Ära veel vaheta**, kui kordad juba järjepidevalt ega oska nimetada töövoo probleemi, mille Mochi lahendaks. Uus kasutajaliides pole piisav põhjus aastatepikkuste ajastusandmete ja kohandatud kaartide ohtu seadmiseks.
- **Katseta enne üleviimist**, kui Ankis on juba su pikaajaline kogu. Mochi võtab vastu `.apkg` faile ja saab kaasa tuua kordamisajaloo, kuid teisendab HTML-i Markdowniks ning eemaldab CSS-i ja JavaScripti.

## Mochi ja Anki kõrvuti

| Valikukoht | Mochi | Anki |
|---|---|---|
| Kellele sobib kõige paremini | Seotud märkmete ja Markdowni kasutajatele, kes tahavad märkmeid kordamiskaartide kõrvale | Õppijatele, kes tahavad väljakujunenud ja seadistatavat õpikaardisüsteemi |
| Kaartide loomine | Markdowni dokument saab mitu külge, kui lisad `---`; olemas on ka väljad ja mallid | Märkmed sisaldavad välju; HTML-i ja CSS-i mallid genereerivad ühe või mitu kaarti |
| Kordamise käik | Uued kaardid läbivad esmalt õppimisetapi; õpitud kaartidel on valikud Forgot / Remembered ehk Unustasin / Mäletasin | Kaartidel on valikud Again / Hard / Good / Easy ehk Uuesti / Raske / Hea / Lihtne |
| Ajastamine | Vaikimisi Mochi enda algoritm; FSRS on valikuline | FSRS või varasem SM-2, põhjalikumate FSRS-i seadistusvahenditega |
| Tasuta kasutus | Registreerimiseta ja piiramatu võrguühenduseta kasutus | Tasuta töölauarakendused ja tasuta AnkiWebi sünkroonimine; ametlik iOS-i rakendus on tasuline |
| Seadmetevaheline sünkroonimine | Pro, 5 USA dollarit kuus | AnkiWebi kaudu tasuta |
| Platvormid | Veeb, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, ametlik AnkiMobile, sõltumatu AnkiDroid |
| Ülekantavad vormingud | Omavorming `.mochi`, Markdowni ja CSV eksport | Omavormingud `.colpkg` ja `.apkg` ning tabeldusmärkidega eraldatud tekst |
| Andmed ja majutamise piirid | Eelkõige kohalik kasutus; põhirakendust ei esitleta avatud lähtekoodiga tootena ning toetatud ise majutatavat sünkroonimisteenust pole dokumenteeritud | Põhihoidlal on AGPL-litsents; ametlik ise majutatav sünkroonimisserver on dokumenteeritud |

Peamine valik on **märkmetel põhineva lihtsuse ja kogu kaardikogu üksikasjaliku haldamise vahel**.

## Mille ümber Mochi kasutajaliides on ehitatud

Mochi kasutajaliidesest on lihtsam aru saada, kui jälgid ühe kaardi teekonda.

Iga kaart kuulub kaardipakki. Klõpsa **New Card** ehk „Uus kaart” ja saad Markdowni kirjutusala, mitte kindlad küsimuse ja vastuse lahtrid. Üks kaart võib sisaldada pealkirju, loendeid, koodi, pilte, struktureeritud välju ja linke. Lisa plokkide vahele `---`, et luua kaks või enam õppimisel avatavat külge. Teisele kaardile viitamiseks kasuta `[[double brackets]]` ehk topeltnurksulge; Mochi loob tagasilingi automaatselt. Ametlik [kaartide ülevaade](https://mochi.cards/docs/cards/) kirjeldab ka malle, mille kohatäited kuvavad struktureeritud väljade väärtusi.

Kaardid võivad täita kahte ülesannet ilma eraldi süsteemidesse kolimata:

- kordamiskaardil on mitu külge ja seda õpitakse intervallkordusega;
- teatmemärge võib jääda samasse kaardipakki ja olla arhiveeritud, mis eemaldab selle uute ja kordamisele kuuluvate kaartide järjekorrast, kustutamata sisu, silte, linke ega ajalugu.

[Kaardipaki vaated](https://mochi.cards/docs/decks/custom-views/) on salvestatud filtrite, sortimise ja paigutuse kombinatsioonid. Võid jätta tavaliseks sirvimiseks ruudustiku ning luua teise vaate sildi, kordamistähtaja, kehva meelespüsimise või hiljutise kordamise järgi. Mochi lubab vaatest teha ka intensiivse harjutamisseansi, muutmata tavalist ajastust ega kordamisajalugu. See ütleb rohkem kui liidese nimetamine „puhtaks”: sama kaardipakk võib toimida märkmiku, filtreeritud andmebaasi ja õppimisjärjekorrana.

[Igapäevasel kordamisel](https://mochi.cards/docs/getting-started/reviewing-cards/) on kaks etappi. Jaotises **New cards** ehk „Uued kaardid” lisad kaardi kordamisgraafikusse või valid Again ehk „Uuesti”, et seda varsti uuesti näha. Kui kaart on õpitud ja kordamistähtaeg käes, avaneb järgmine külg ning saad valida **Forgot** ehk „Unustasin” või **Remembered** ehk „Mäletasin”. Kui unustad, kasutab Mochi enne edenemise lähtestamist järelkordamise järjekorda. Nii on kordamise ajal vaja teha vaid üks lihtne otsus.

## Kas Mochi on tasuta ja mis töötab võrguühenduseta?

Jah, kuid „tasuta” ja „võrguühenduseta” tähendavad eri keskkondades eri asju. [Mochi hinnakirjas](https://mochi.cards/) on järgmised paketid:

- **Tasuta:** 0 USA dollarit alatiseks, registreeruda pole vaja, võrguühenduseta kasutus on piiramatu.
- **Pro:** 5 USA dollarit kuus; lisanduvad seadmetevaheline sünkroonimine, kaardipakkide avaldamine, dünaamilised väljad, tehisaru integratsioon ja e-posti tugi.

Mochi töötab macOS-is, Windowsis, Linuxis, iOS-is, Androidis ja veebis. Selle [allalaadimise ja paigaldamise juhend](https://mochi.cards/docs/getting-started/download-and-install/) määrab praktilised piirid:

| Keskkond | Mida tasuta ja võrguühenduseta kasutus tähendavad |
|---|---|
| Paigaldatud töölaua- või mobiilirakendus | Saad Mochit kasutada võrguühenduseta ja kontota. Andmed asuvad seadmes, nii et üks paigaldatud rakendus võib pakkuda terviklikku tasuta töövoogu. |
| Veebirakendus ilma Pro-paketita | Sisu hoitakse brauseri võrguühenduseta salvestusruumis. Mochi hoiatab, et brauser võib need andmed ette hoiatamata kustutada. |
| Sama kogu mitmes seadmes | Automaatne seadmetevaheline sünkroonimine on Pro-paketi funktsioon, kuigi iga paigaldatud rakendus saab töötada võrguühenduseta. |

Võrguühenduseta kasutus ja sünkroonimine on eraldi lubadused. Allalaaditud rakenduses kaartide loomiseks või kordamiseks ei ole Pro-paketti vaja. Seda läheb vaja siis, kui sama ajakohane kogu peab automaatselt sülearvutist telefoni kaasa tulema. Tasuta paketi olulistest andmetest hoia omavormingus varukoopiat, selle asemel et jätta seade ja eriti brauseri salvestusruum ainsaks eksemplariks.

Kui määrav on võrguühenduseta käitumine, võrdle oma seadmete täpset töövoogu artiklis [Kas Anki töötab võrguühenduseta?](/blog/does-anki-work-offline/) ja laiemas [võrguühenduseta õpikaardirakenduste juhendis](/blog/best-offline-flashcards-app/).

## Markdowni õpikaardid on peamine põhjus Mochi valimiseks

Mochi tegelik eelis on selles, kuidas Markdown muudab sinu hallatavat lähtematerjali.

Mochi kaart jääb tekstina loetavaks. Sama dokument võib sisaldada lühikest selgitust, koodiplokki, linke seotud mõtetele ja kordamiskülgede eraldajaid. Kui korduv struktuur on oluline, saavad kaardid kasutada ka välju ja malle. Malli rakendamisel kuvab Mochi mallis oleva Markdowni koos väljade kohatäidetega ning jätab kaardi enda Markdowni kuvamisel kõrvale, seda kustutamata.

Anki lähtub teisest mudelist. Märge talletab välju ning [kaardimallid](https://docs.ankiweb.net/templates/intro.html) määravad, milliseid välju näidatakse ja millised kaardid luuakse. Mallides kasutatakse HTML-i, kujunduses CSS-i. Ühest sõnavaramärkest saab nii luua ühe kaardi sõna äratundmiseks ja teise selle iseseisvaks esitamiseks, hoides alusandmeid ühes kohas.

See struktuur annab Ankile rohkem võimalusi tingimuslike paigutuste, genereeritud kaardivariantide, sisestatavate vastuste, kohandatud kujunduse ja lisadega laiendatud töövoogude jaoks. Ühtlasi tähendab see, et Anki pole olemuselt Markdowni õpikaardirakendus. Markdownil põhinev Anki töövoog vajab täiendavat teisendust või lisa.

Praktiline küsimus on lihtne: kas tahad märget, millest saab teha kaardi, või struktureeritud märkmetüüpi, millest saab genereerida mitu kaarti? Mochi keskendub esimesele. Anki teisele.

## Mochi intervallkordus toetab nüüd ka FSRS-i

Võrdlused, mis väidavad, et Mochil puudub FSRS, on aegunud. Mochi lisas FSRS-i eelversiooni 2025. aastal ja on jätkanud ajastusalgoritmiga seotud paranduste avaldamist. Siiski [jääb vaikimisi kasutusele Mochi enda algoritm](https://mochi.cards/docs/reviewing/fsrs/).

Vaikealgoritm muudab intervalle kindlate kordajatega pärast iga kordamist, olenevalt sellest, kas mäletasid või unustasid. Lülita FSRS sisse jaotises Review Settings ehk kordamisseadetes ja olemasolevad õpitud kaardid viiakse FSRS-ile üle ajalugu kaotamata. Saad määrata soovitud meelespüsimise taseme, sisestada kohandatud parameetrid ja hiljem eelmise algoritmi juurde tagasi minna.

Mochi säilitab kahe valikuga hindamise mõlema ajastusalgoritmi puhul:

- **Forgot** ehk „Unustasin” vastab FSRS-i hinnangule Again ehk „Uuesti”.
- **Remembered** ehk „Mäletasin” vastab FSRS-i hinnangule Good ehk „Hea”.

Mochi dokumentatsiooni järgi töötab kahe valikuga hindamine FSRS-iga, kuid jätab kogumata osa teabest, mida annaksid Hard ja Easy ehk „Raske” ja „Lihtne”. Rakendus võtab vastu optimeeritud kohandatud parameetreid, kuid sisseehitatud optimeerijat pole. Isiklike parameetrite saamiseks on vaja välist FSRS-i optimeerijat ja Mochi kordamisajalugu.

[Anki FSRS-i seaded](https://docs.ankiweb.net/deck-options.html#fsrs) pakuvad rohkem võimalusi. Soovitud meelespüsimise taseme ja parameetrid saab siduda eelseadistustega, sisseehitatud optimeerija saab parameetrid kordamisajalooga sobitada ning simulaator hindab eri seadete juures kordamiste arvu või õppimisele kuluvaid minuteid. Anki salvestab ka neli tulemust: Again, Hard, Good ja Easy ehk „Uuesti”, „Raske”, „Hea” ja „Lihtne”.

Lisanupud aitavad ainult siis, kui kasutad neid järjekindlalt samas tähenduses. Anki käsiraamat käsitleb hinnangut Hard eduka meenutamisena. Kui vajutad Hard siis, kui vastus oli ununenud, annad FSRS-ile vale signaali ja võid saada liiga pikad intervallid.

Vali Mochi kahe valikuga kordamine, kui mäletamise ja unustamise eristamine hoiab seansi selgena. Vali Anki, kui tahad üksikasjalikumat hindamisinfot ning kasutad selle optimeerijat, meelespüsimise seadistusi, eelseadistusi või koormuse simulaatorit. Kui sind huvitavad rakenduste asemel ajastusalgoritmid, vaata [FSRS-i ja SM-2 võrdlust](/blog/fsrs-vs-sm-2/).

## Mochi ja Anki puhul maksad eri asjade eest

Ühes arvutis õppides võivad mõlemad rakendused olla tasuta. Rohkemate seadmete lisandumisel tekib kulu eri kohas.

Mochi küsib Pro-paketi sünkroonimise eest **5 USA dollarit kuus** ning lisab paketti avaldamise, dünaamilised väljad, tehisaru integratsiooni ja toe. Anki töölauarakendused on tasuta ning [Anki ametlik sait](https://apps.ankiweb.net/) kirjeldab AnkiWebi sünkroonimist tasuta teenusena. AnkiMobile on tasuline ametlik iPhone'i ja iPadi rakendus; AnkiDroid on tasuta, sõltumatult arendatav Androidi klient.

Seega sõltub vastus küsimusele „Kumb on odavam?” sinu seadmetest:

- üks arvuti: mõlemad võivad olla tasuta;
- mitu arvutit või Androidi seadet: Anki tasuta majutatud sünkroonimine võimaldab tellimustasuta läbi saada;
- iPhone või iPad: Anki puhul lisandub ühekordne rakenduseost, Mochi puhul nõuab seadmetevaheline sünkroonimine korduva tasuga Pro-paketti;
- Mochi kasutajad, kes tahavad juba avaldamist, dünaamilisi välju või tehisaru integratsiooni, võivad näha sünkroonimist ühe osana paketist, mitte kogu kulu põhjusena.

Enne iOS-i täpsete kogukulude võrdlemist kontrolli oma piirkonna App Store'i. See ülevaade ei esita muutumatu faktina rakendusepoe hinda, mis võib turuti erineda.

## Mochi majutamine pole sama mis eelkõige kohalik kasutus

Kolm mõistet pannakse sageli ühte patta:

- **Eelkõige kohalik kasutus** tähendab, et töökoopia asub su seadmes ja rakendus saab jätkata pilveteenuseta.
- **Avatud lähtekood** tähendab, et lähtekood on saadaval litsentsiga, mis lubab seda uurida ja muuta.
- **Ise majutamine** tähendab, et tootel on dokumenteeritud ja toetatud viis vastavat teenust sinu enda taristus käitada.

Mochi dokumenteerib selgelt eelkõige kohalikku kasutust. Põhirakendust ei esitleta avatud lähtekoodiga tootena: avaliku saidi jaluses olev „Open source” ehk „Avatud lähtekood” viib [integratsioonide kogumini](https://github.com/mochi-cards/open-source), mitte põhirakenduseni. Mochi enda saidil pole dokumenteeritud ka toetatud ise majutatavat asendust Pro-paketi sünkroonimisele.

Kui otsid **Mochi majutamise** kohta infot, sest tahad oma serverit, jookseb piir siin: saad hoida kohalikke andmeid ja omavormingus varukoopiaid, kuid dokumenteeritud tee seadmetevaheliseks kasutuseks on Mochi Pro. Eelkõige kohalik kasutus annab kasuliku kontrolli andmete üle; ise majutamine see pole.

Anki põhihoidla on [litsentsitud AGPL-i versiooni 3 või uuema alusel](https://github.com/ankitects/anki/blob/main/LICENSE), loetletud eranditega mõne komponendi jaoks. Ametlik käsiraamat kirjeldab kogenud kasutajatele ka [ise majutatavat sünkroonimisserverit](https://docs.ankiweb.net/sync-server.html). See server asendab ühilduvate klientide jaoks AnkiWebi sünkroonimist; see pole ise majutatav koopia AnkiWebi saidist. Anki eeldab, et käitaja lahendab ise käsurea, võrgu, tulemüüri, protokolli ja uuendustega seotud küsimused.

## Mida Anki import säilitab ja mida muudab

Mochi [importimise dokumentatsiooni](https://mochi.cards/docs/import-and-export/importing/) järgi saab importida Anki `.apkg` faile koos kordamisajalooga. Kuid „imporditud” ja „samaväärne” pole sama tulemus.

Importimisel teisendab Mochi HTML-i Markdowniks ning eemaldab CSS-i ja JavaScripti. See on vormingu teisendamine kahe erineva kaardimudeli vahel. Lihtne esi- ja tagaküljega materjal on kõige kergem juhtum. Kaart, mis sõltub kujundusest, malli loogikast, sisestamist nõudvatest tegevustest või JavaScriptist, vajab pärast importi kontrollimist.

Kordamisajaloo jaoks tuleb teha ka selgesõnaline ekspordivalik. Anki [eksportimise käsiraamatu](https://docs.ankiweb.net/exporting.html) järgi määrab **Include Scheduling Information** ehk „Kaasa ajastusteave”, kas kordamisajalugu pannakse paketti. Kui jätad selle välja lülitatuks, ei saa Mochi taastada ajalugu, mida `.apkg` failis kunagi polnud.

Ka siis, kui ajalugu jõuab kohale, ära oota identseid tulevasi kordamistähtaegu. Rakendused võivad kasutada erinevaid ajastusalgoritme, hinnanguid, meelespüsimise sihttasemeid, parameetreid, õppimissamme ja kaardipakiseadeid. Säilinud sündmused annavad uuele algoritmile alusandmed, kuid ei muuda süsteeme identseks.

## Omavormingus varukoopiatel ja ülekantaval tekstil on eri ülesanded

Enne millegi teisaldamist hoia alles varukoopia, millest saab algse süsteemi taastada. Loetav eksport on kasulik, kuid sellest ei saa alati süsteemi taastada.

Mochi [varundusjuhend](https://mochi.cards/docs/getting-started/backing-up/) kirjeldab kahte võimalust andmete varundamiseks rakenduse enda vormingus:

- Kogu kasutajakataloogi kopeerimine säilitab sisu, kordamisajaloo, manused, rakenduse seaded ja sisselogimise oleku.
- `.mochi` eksport säilitab kaardipakid, kaardid, mallid ja väljad, manused, sildid ja metaandmed, kordamisajaloo, kaartide järjekorra ja kaardipakkide struktuuri.

Mochi [Markdowni ja CSV ekspordid](https://mochi.cards/docs/import-and-export/exporting/) on mõeldud sisu ülekandmiseks. Markdown loob iga kaardi kohta ühe faili ja alampakkide jaoks kaustad, kuid jätab välja kordamisajaloo, kaartide järjekorra, mallid ja metaandmetena talletatud sildid, välja arvatud juhul, kui sildid on Markdowni tekstis. CSV saab eksportida mallivälju või kuvatavaid esi- ja tagakülgi, kuid ei säilita kordamisajalugu ega malle; metaandmetena talletatud sildid säilivad ainult siis, kui need on sisu sisse kirjutatud.

Anki teeb sarnase eristuse:

- `.colpkg` ekspordib terve kaardikogu koos ajastusteabega ja võib sisaldada meediat. Selle importimine asendab sihtkohaks oleva Anki kogu kaardid.
- `.apkg` ekspordib ühe kaardipaki ja selle alampakid, valikutega ajastusteabe, eelseadistuste ja meedia kaasamiseks.
- Lihttekstina eksporditud märkmetes on väljad eraldatud tabeldusmärkidega ning HTML-vormindus on teksti sees. Need säilitavad muudetava sisu, mitte kogu süsteemi käitumist.

Mochist tagasi Ankisse liikumine tähendab tavaliselt CSV-d. Anki saab [siduda tekstiveerge märkmeväljadega](https://docs.ankiweb.net/importing/text-files.html), kuid Mochi lingid, mitme küljega kaartide käitumine, mallid ja kordamisajalugu ei muutu selle faili kaudu samaväärseteks Anki objektideks. Hoia `.mochi` eksport alles ka pärast seda, kui Anki koopia näib korras.

## Katseta kogu esindava kaardipakiga nii, et saad tagasi pöörduda

Üleviimise dialoog tõestab, et fail võeti vastu. See ei tõesta, et su tegelik kogu endiselt töötab või et saad kasutuskõlbliku sisu tagasi tuua. Katseta mõlemat suunda, jättes oma tavalise Anki profiili puutumata.

1. **Varunda kogu Anki.** Ekspordi `.colpkg` koos meediaga ja salvesta see tööprofiilist väljapoole.
2. **Veendu, et varukoopia avaneb.** Loo tühi ajutine Anki profiil ja impordi `.colpkg` sinna. Tervet kaardikogu sisaldava paketi import asendab sihtkogu, mistõttu on ajutine profiil oluline.
3. **Koosta ajutises profiilis oma kogu esindav kaardipakk.** Hoia see piisavalt väike, et saaksid iga kaardi üle vaadata, kuid kaasa kõik, millele toetud: lihtsad ja pöördkaardid, lünktekstid, kohandatud mallid, CSS, JavaScript, pildid, heli, valemid, sildid, alampakid ja kordamisajalugu.
4. **Ekspordi see kaardipakk `.apkg` failina.** Kaasa ajastusteave, eelseadistused ja meedia, kui need on olulised. Need valikud panevad andmed Anki paketti; need ei taga, et Mochi taastab kõik seaded.
5. **Impordi uude Mochi kaardipakki.** Jäta oma igapäevane Anki profiil ja selle kordamisjärjekord muutmata.
6. **Kontrolli enne kordamist.** Võrdle sisu, vormindust, välju, meediat, silte, kaardipakkide struktuuri ja ajalugu. Pööra erilist tähelepanu kõigele, mis sõltus HTML-ist, CSS-ist, JavaScriptist või genereeritud kaardivariantidest.
7. **Vali ajastusalgoritm teadlikult.** Mochi alustab oma algoritmiga. Lülita FSRS sisse ainult siis, kui kavatsed seda ka pärast katset kasutada.
8. **Õpi koopia kaartidega ühe tavalise nädala jooksul.** Hinda Markdownis redigeerimist, uute kaartide etappi New cards, valikut Remembered/Forgot ehk „Mäletasin/Unustasin”, võrguühenduseta käitumist ja tasulise paketi korral sünkroonimist seadmetes, mida päriselt kaasas kannad.
9. **Katseta tagasiteed.** Ekspordi Mochi katsekaardipakk omavormingus varukoopia jaoks `.mochi` failina ja Anki jaoks CSV-na. Kasuta väljaväärtustega CSV-d, kui olulised on korduskasutatavad väljad; kasuta kuvatavate külgedega CSV-d, kui vajad peamiselt nähtavat esi- ja tagakülje sisu. Impordi CSV teise tühja Anki profiili ning seo selle veerud sobiva märkmetüübiga.
10. **Pane kirja iga kadu, millega nõustud.** Kontrolli mineku- ja tagasiteed eraldi. Täpne kujundus, mitme küljega kaartide käitumine, lisade käitumine, genereeritud variandid, kordamishinnangud, ajalugu või tulevased kordamistähtajad võivad igapäevakasutuses olla tähtsamad kui võrdlustabelis paistis.

CSV kaudu naasmine viib üle sisu, kuid ei taasta Mochit täielikult: fail ei kanna kaasa kordamisajalugu ega malle; metaandmetena talletatud sildid kanduvad üle ainult siis, kui need on sisu sisse kirjutatud. Kui Mochi ei lahenda sinu nimetatud probleemi, kustuta katsekaardipakk ja jätka algse Anki profiiliga. Kui lahendab, vii üle üks päris kaardipakk korraga ning hoia Anki `.colpkg` ja Mochi `.mochi` varukoopiad alles mitme tavalise kordamistsükli jooksul.

## Kellele Mochi õpikaardid sobivad?

Mochi sobib hästi, kui:

- kirjutad ja mõtled juba Markdownis;
- märkmed ja kordamiskaardid peaksid kuuluma samasse linkidega seotud tööruumi;
- tahad nelja hinnangu asemel lihtsat valikut Remembered/Forgot ehk „Mäletasin/Unustasin”;
- võrguühenduseta kasutus ühes seadmes katab su tasuta töövoo või on Pro-paketi sünkroonimine väärt 5 USA dollarit kuus;
- su kogu on uus või piisavalt lihtne, et teisendamine Ankist oleks väikese riskiga.

Jää Anki juurde, kui:

- su märkmetüübid genereerivad mitu olulist kaardivarianti;
- HTML-i ja CSS-i mallid, JavaScript, lisad või jagatud kaardipakid on osa su süsteemist;
- tasuta seadmetevaheline sünkroonimine on tähtsam kui Markdownis kirjutamine;
- tahad Anki FSRS-i optimeerijat, eelseadistuste haldamist, nelja hinnangut ja koormuse simulaatorit;
- aastatepikkused kordamisandmed ja kohandatud käitumine töötavad juba hästi.

Kõige mõistlikum Mochi alternatiiv sõltub sellest, miks ei sobi sulle ei Mochi ega Anki. Uue ja lihtsama kogu jaoks on [Nibomo funktsioonide](/et/features/) seas FSRS-iga kordamine, võrguühenduseta õppimine ja sünkroonimine, kaartide, siltide ja meedia ülekandmine, agentide ligipääs ning dokumenteeritud ise majutamise võimalus. Mina arendan seda ja piirangud on olulised: see ei asenda Mochi lingitud märkmetega Markdowni märkmikku ega Anki väljakujunenud mallide ja lisade süsteemi. [Alustamisjuhend](/docs/getting-started/) näitab praeguseid võimalusi majutatud teenuse, mobiilirakenduse, agentide ja ise majutamise jaoks.

## Lõpphinnang

Mochi on enamat kui ilusam Anki kasutajaliides. Selle tegelik idee on, et Markdowni märge, teiste märkmetega lingitud teadmusmärge ja intervallkordusega õpitav kaart võivad olla üks ja sama objekt. Tasuta pakett katab kontota võrguühenduseta töö; Pro lisab majutatud funktsioonid, sealhulgas seadmetevahelise sünkroonimise.

See on hea valik õppijale, kes alustab uut Markdowni-keskset kogu. Ka Ankist üleminek võib end ära tasuda, kui kogu esindava kaardipakiga tehtud katse tõestab, et sisseehitatud Markdowni tugi ja kahe valikuga kordamine teevad töö päriselt sujuvamaks.

Pikaajalise Anki kasutaja puhul peab oma kasu tõestama just uus rakendus. Varunda kogu, katseta kaarte, mille toimimist oled kõige rohkem kohandanud, ja hoia Anki alles, kui Mochi ei paranda iganädalast töövoogu piisavalt, et õigustada konkreetsetest vormindusvõimalustest, mallifunktsioonidest, ajastusseadetest ja ökosüsteemi võimalustest loobumist.
