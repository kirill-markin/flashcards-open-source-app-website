---
title: "Uute kaartide järjekord Ankis – valimine, sortimine ja järjekorra kontroll"
description: "Vaata kuue kaardi näitel, kuidas Anki uusi kaarte valib ja sordib. Kontrolli alampakkide limiite, kaartide salvestatud positsioone ja õppimiseks valitud pakki."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "Anki uute kaartide järjekord"
  - "Anki uute kaartide valimise järjekord"
  - "Anki uute kaartide sortimisjärjekord"
  - "Anki uued kaardid kasvava positsiooni järgi"
  - "Anki kaardid vales järjekorras"
---

Ankis võib uus kaart positsiooniga 10 ilmuda pärast kaarti positsiooniga 60. Kui valid õppimiseks ülempaki ning kasutad kaartide valimiseks seadet **Paki järgi** (Deck) ja sortimiseks seadet **Valimise järjekorras** (Order gathered), võib Anki võtta ühest alampakist kõik sinna mahtuvad kaardid, enne kui jõuab alampakini, kus on kaart positsiooniga 10. Kaardibrauseris loomiskuupäeva järgi sortimine õppejärjekorda ei muuda.

Anki paneb uued kaardid järjekorda kahes etapis. Kõigepealt **valib** ta tänaste limiitide piires kaardid välja. Seejärel **sordib** ta valitud kaardid. Tee esmalt kindlaks, kas Anki valib valed kaardid või näitab õigeid kaarte ootamatus järjekorras.

Juhised käivad Anki töölauaversiooni tavaliste pakkide kohta. Kuue kaardi näide on paberil läbi arvutatud kehtiva juhendi ja avaldatud [Anki versiooni 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3) põhjal. Allikad on kontrollitud 6. oktoobril 2026. Näidet Ankis läbi ei mängitud.

![Mees hoiab neljandat vinüülplaati tühja riiulilahtri kohal. Selle kõrval on kolm plaati ja mehe selja taga kaks kasti plaatidega, mida ta välja ei valinud.](/blog/anki-new-card-order.png)

## Vali järjekord, mida õppides näha tahad

Ava selle paki **Valikud** (Options), mille valid õppimiseks, ja vaata jaotist **Kuvamisjärjekord** (Display Order). Kui alustad õppimist ülempakist, määravad selle kuvamisjärjekorra seaded ka alampakkidest pärit kaartide järjekorra.

| Soovitud tulemus | Uute kaartide valimise järjekord (New Card Gather Order) | Uute kaartide sortimisjärjekord (New Card Sort Order) |
| --- | --- | --- |
| Võta kaardid valitud pakist ja selle alampakkidest ühises kasvavas positsioonijärjekorras | Kasvava positsiooni järgi (Ascending position) | Valimise järjekorras |
| Käi alampakid läbi tähestiku järjekorras ja võta igast pakist kaardid positsiooni järgi | Paki järgi | Valimise järjekorras |
| Jäta kaardivalik samaks ja sega kuvamisjärjekord | Sulle sobiv valimisseade | Juhuslik (Random) |

Need kombinatsioonid lähtuvad Anki ingliskeelse juhendi kirjeldustest, mis käsitlevad [kaartide valimist](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) ja [sortimist](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order). Seade **Kasvava positsiooni järgi** lähtub uue kaardi salvestatud positsioonist. Kaartide lisamise järjekord ja positsioonide käsitsi muutmine võivad neid positsioone mõjutada, nii et loomiskuupäevade järjekord pole tagatud.

Enne muutmist vaata, milline seadistusprofiil on pakile määratud ja millised teised pakid seda kasutavad. Kuvamisjärjekorra seaded kuuluvad profiili juurde. Kui tahad muuta ainult selle paki seadeid, eralda selle profiil esmalt teistest, järgides [ingliskeelset juhendit ühe paki seadistusprofiili kohta](/blog/anki-deck-options-presets/). Päevalimiidile saab määrata erandi valikuga **See pakk** (This deck) või **Ainult täna** (Today only). Kuvamisjärjekorra seadeid jagavad kõik sama profiili kasutavad pakid.

## Millised neli kaarti valikusse pääsevad?

Kujuta ette tavalist ülempakki `OrderLab`, mille kahes alampakis on kokku kuus kaarti. Iga kaart pärineb eraldi **põhitüüpi** (Basic) märkmest, millel on ainult üks kaart. Seega on kõigil kuuel kaardil sama tüübinumber ja ühelgi neist pole teisi samast märkmest pärit kaarte.

| Kaart | Pakk | Uue kaardi salvestatud positsioon |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Oletame, et kõik kuus kaarti on uued. Ükski pole peidetud, peatatud ega filtreeritud pakis. Alguses pole muid kaarte, õppimisetapi kordusi ega kordamiskaarte. Täna pole veel ühtegi kaarti õpitud. Pakist `OrderLab` kõrgemal pole ühtki pakki ja kehtivad kordamislimiidid jätavad ruumi kõigile kuuele uuele kaardile.

Vali õppimiseks **OrderLab**. Selle kehtiv uute kaartide limiit on **4**, pakil `01 First` on see **3** ja pakil `02 Second` **2**. Ajutisi erandeid pole. Kasuta mõlemas võrdluses sortimisseadet **Valimise järjekorras**. Lähtu mõlemal korral samast muutmata kaardikogust ja arvuta tulemus paberil läbi, ilma et vahepeal kaartidele vastaksid.

Valimisseade **Paki järgi** töötab nii.

1. Anki jõuab tähestiku järjekorras pakini `01 First` enne pakki `02 Second`.
2. Ta valib positsiooni järgi kaardid **A, B, C**. Pakist `01 First` on võetud kolm kaarti ja ülempaki limiidist on jäänud üks koht.
3. Anki võtab pakist `02 Second` kaardi **D** ja jõuab ülempaki nelja kaardi limiidini.

Uued kaardid ilmuvad eeldatavasti esimest korda järjekorras **A → B → C → D**. E ja F jäävad valikust välja.

Seadega **Kasvava positsiooni järgi** on kahe alampaki kandidaatide ühine järjestus **D → A → E → B → F → C**. Esimesed neli mahuvad kõigi limiitide piiresse. Kaks kaarti tuleb pakist `02 Second` ja kaks pakist `01 First`. Nelja kaardiga saab ülempaki limiit täis ja valimine lõpeb.

Eeldatav järjekord on **D → A → E → B**. C ja F jäävad valikust välja. Anki selle versiooni [kaartide valimise lähtekood](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) arvestab iga kaardi lisamisel nii selle paki kui ka ülempaki limiiti.

Pakist `02 Second` võib võtta kuni kaks kaarti. Seadega **Paki järgi** tuleb sealt ainult üks, sest `01 First` on neljast kohast juba kolm ära kasutanud. Kasvava positsiooni järgi valides tuleb kummastki pakist kaks kaarti just nende positsioonide tõttu. Teistsuguste positsioonidega võivad kaardid pakkide vahel teisiti jaotuda.

## Kui kõik kuus kaarti mahuvad valikusse, jääb võrrelda järjekorda

Teises paberil tehtavas võrdluses määra ülempaki limiidiks **6**, paki `01 First` limiidiks **3** ja paki `02 Second` limiidiks **3**. Jäta sortimisseadeks **Valimise järjekorras**.

| Valimisseade | Limiidid (ülempakk / 01 First / 02 Second) | Eeldatav esmaesituse järjekord |
| --- | --- | --- |
| Paki järgi | 6 / 3 / 3 | A → B → C → D → E → F |
| Kasvava positsiooni järgi | 6 / 3 / 3 | D → A → E → B → F → C |

Mõlema seadega pääsevad valikusse kõik kuus kaarti. Nüüd erineb ainult nende järjekord. Kui tõstaksid kuuele ainult ülempaki limiidi ja jätaksid paki `02 Second` limiidiks kaks, pääseks valikusse viis kaarti. F jääks endiselt välja. Suuremad limiidid on siin ainult arvutusnäite jaoks. Oma päevast uute kaartide arvu pole vaja tõsta.

## Sortimine ei too valikust välja jäänud kaarti tagasi

Taasta algsed limiidid **4 / 3 / 2** ja muuda ainult uute kaartide sortimisjärjekorda. Vali **Juhuslik**.

| Valimisseade | Kaardid, mida saab juhuslikult järjestada | Kaardid, mida sortimine lisada ei saa |
| --- | --- | --- |
| Paki järgi | A, B, C, D | E, F |
| Kasvava positsiooni järgi | D, A, E, B | C, F |

Kuvamisjärjekord segatakse ja valitud kaardid jäävad samaks. Tabelist ei saa konkreetset juhuslikku järjestust ette öelda. Anki selle versiooni [sortimise lähtekood](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) järjestab ümber juba valitud kaardid.

Ka seade **Kaarditüübi järgi, seejärel valimise järjekorras** (Card type, then order gathered) töötab juba valitud kaartidega. Kõigil kuuel põhitüüpi märkmest pärit kaardil on sama tüübinumber, nii et selles näites säilib valimise järjekord.

Eraldi sortimisnäites on mitme kaardimalliga märkmetest juba valitud neli kaarti järjekorras **W (tüüp 2), X (tüüp 1), Y (tüüp 2), Z (tüüp 1)**. Kaarditüübi järgi sortides on tulemus **X → Z → W → Y**. Kõigepealt tulevad 1. tüüpi kaardid ja kummagi tüübi sees säilib valimise järjekord. Näide algab pärast valimist. Seda, millised sama märkme kaardid sinu peitmisseadetega valikusse pääseksid, tuleb eraldi vaadata.

Tüübinumber näitab kaardimalli kohta märkmetüübi mallide järjestuses. See, kas kaart harjutab äratundmist või vastuse ise meenutamist, sõltub mallist. Enne kui eeldad, et kaarditüübi järgi sortimine toob kõik pärisuunas küsivad kaardid ettepoole, vaata, mida kaardid tegelikult küsivad.

## Kontrolli kaardibrauseris positsioone enne muutmist

Ava **Sirvi** (Browse), vali režiim **Kaardid** (Cards) ja otsi soovitud pakist koos alampakkidega. Näite puhul kasuta järgmist otsingut.

```text
deck:OrderLab is:new
```

Kuva veerupäise menüüst veerud **Küsimus** (Question), **Kaart** (Card), **Pakk** (Deck), **Tähtaeg** (Due) ja **Loodud** (Created). Uue kaardi puhul näitab **Tähtaeg** selle positsiooni järjekorras ja **Loodud** märkme loomise aega. Veerus **Sortimisväli** (Sort Field) kuvatakse sortimiseks määratud märkmevälja sisu. Veeru järgi sortimine muudab ainult tabeli kuvamisjärjekorda. Salvestatud positsioonid ja õppimisel kasutatav valimisseade jäävad samaks. Neid väärtusi kirjeldab [Anki ingliskeelne juhend kaardibrauseri veergude kohta](https://docs.ankiweb.net/manual/browsing#columns).

Otsing `is:new` võib leida ka peatatud või peidetud uusi kaarte. Nende väärtused on veerus **Tähtaeg** sulgudes. Täpsem otsing jätab välja nii need kaardid kui ka parasjagu filtreeritud pakkides olevad kaardid.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Anki ingliskeelne juhend kirjeldab [otsingut kaardi oleku järgi](https://docs.ankiweb.net/manual/searching#card-state) ja [otsingut paki järgi](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Kui paki nimes on tühikuid, pane nimi jutumärkidesse, näiteks `deck:"My Deck"`. Ka see otsing ei näita ette tänast õppejärjekorda. Limiidid ja sama märkme kaartide automaatne peitmine võivad valikut vähendada. Peidetud ja peatatud kaartide vahet selgitab [meie ingliskeelne juhend](/blog/anki-bury-vs-suspend/).

Kui positsioonid juba vastavad soovitud järjekorrale, jäta need paika. Kui neid on vaja muuta, pane vanad positsioonid kirja, vali välja mõni konkreetne uus kaart ja kasuta käsku **Kaardid → Muuda positsiooni** (Cards → Reposition). Vaata esmalt dialoogi seaded üle. Valik **Nihuta olemasolevate kaartide positsioone** (Shift position of existing cards) võib nihutada ka valikust välja jäänud suurema positsiooninumbriga kaarte. Kui nihutamine on välja lülitatud, võivad uued positsioonid olemasolevatega kattuda. Sama positsiooniga kaartide kuvamisjärjekorda ei saa ainult positsiooni põhjal tuletada. Vaata [positsiooni muutmise käsu kirjeldust Anki ingliskeelses juhendis](https://docs.ankiweb.net/manual/browsing#cards).

Valimis- ja sortimisseadeid saab muuta õppimis- ja kordamisajalugu kustutamata. Keskendu probleemi uurides uute kaartide positsioonidele ja kuvamisjärjekorrale.

## Kontrolli, millise paki valid ja kui palju tänasest limiidist alles on

Kui valid algses näites õppimiseks otse paki `OrderLab::02 Second`, on kandidaadid D, E ja F. Selle paki kahe kaardi limiidi ning seadete **Kasvava positsiooni järgi** ja **Valimise järjekorras** korral on eeldatav järjekord **D → E**. Ülempaki nelja kaardi limiit on veel kasutamata, seega mahuvad mõlemad kaardid valikusse ka siis, kui ülempaki limiit kehtib. Kui valid ülempaki ning kasutad valimisseadet **Paki järgi** ja limiite **4 / 3 / 2**, saad järjekorra **A → B → C → D**.

Paki `02 Second` kuvamisjärjekorra seadmine ei määra pakist `OrderLab` alustatud õppesessiooni järjekorda. Õppimiseks valitud pakk määrab kuvamisjärjekorra ja kaartide kogulimiidi. Lisaks kehtivad asjakohased alampakkide limiidid. Seade **Arvesta limiite kõige ülemisest pakist alates** (Limits start from top) määrab, kas otse alampakist õppides kehtivad ka sellest kõrgemal olevate pakkide limiidid. Anki ingliskeelne juhend kirjeldab [alampakkide reegleid](https://docs.ankiweb.net/manual/deck-options#subdecks) ja [kõrgemate pakkide limiitide seadet](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Kontrolli ka kordamislimiite. Vaikimisi piirab kordamislimiit ka uute kaartide arvu. Seda muudab valik **Kordamislimiit ei piira uusi kaarte** (New cards ignore review limit). Nii see valik kui ka **Arvesta limiite kõige ülemisest pakist alates** kehtivad kogu kaardikogule. Seda näitab selle versiooni [päevalimiitide kasutajaliidese lähtekood](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Pane mõlema seade olek kirja, enne kui järeldad uute kaartide limiidi põhjal, et täna peaks ilmuma rohkem kaarte.

Kaardibrauseri **Eelvaade** (Preview) laseb küsimusi vaadata ilma neile vastamata. Järgmise tavapärase õppesessiooni jaoks pane kirja järgmised andmed.

| Pane kirja | Mida see aitab selgitada |
| --- | --- |
| Õppimiseks valitud pakk ning selle seadistusprofiil, valimisseade ja sortimisseade | Milline kuvamisjärjekord sessioonil kehtib? |
| Oodatavad kaardid ja nende salvestatud positsioonid | Kas probleem on kaartide valikus või järjekorras? |
| Uute kaartide ja kordamiste limiidid, pakipõhised ja ainult tänaseks tehtud erandid ning täna juba õpitud kaardid | Kui palju limiitidest on alles? |
| Kõrgemate pakkide limiidid ja mõlemad kogu kaardikogu limiite mõjutavad seaded | Millised lisapiirangud kehtivad? |
| Peidetud, peatatud või filtreeritud pakis olevad kaardid ning sama märkme teised kaardid | Millised kaardid võivad valikust välja jääda? |
| Uute kaartide esmakordne ilmumine, eraldi õppimisetapi kordustest | Kas uued kaardid ilmuvad eeldatud järjekorras? |

Pärast uuele kaardile vastamist võivad õppimisetapi kordused teiste kaartide vahele tulla. Seade **Uute ja kordamiskaartide järjekord** (New/Review Order) määrab, kas uued kaardid tulevad enne kordamiskaarte, pärast neid või nende vahel. Uute kaartide valimine ja sortimine käib endiselt oma seadete järgi. Selle versiooni [õppejärjekorra koostamise lähtekood](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) ühendab need kaardirühmad pärast uute kaartide sortimist.

Kontroll on tehtud, kui eeldatav kaardivalik ja esmaesituse järjekord selgitavad seda, mida õppides näed. Kui need ikka ei klapi, pane täpsemaks uurimiseks kirja kaartide positsioonid, seaded, valitud pakk, Anki versioon, tegelik järjekord ja asjakohased lisamoodulid. Kui tahad mõnda teemat lisaks harjutada, vaata [eraldi ingliskeelset juhendit filtreeritud pakiga harjutamiseks](/blog/anki-filtered-decks-without-rescheduling/).
