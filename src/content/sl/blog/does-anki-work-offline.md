---
title: "Ali Anki leta 2026 deluje brez povezave? Računalnik, iPhone, Android in sinhronizacija"
description: "Da — nameščene aplikacije Anki za računalnik, iPhone, iPad in Android lahko lokalno zbirko uporabljajo brez povezave. Kaj potrebuje internet, kako poteka poznejša sinhronizacija in kako pripraviti predstavnostne datoteke."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "ali Anki deluje brez povezave"
  - "uporaba Ankija brez povezave"
  - "ali AnkiMobile deluje brez povezave"
  - "ali AnkiDroid deluje brez povezave"
  - "sinhronizacija Ankija po delu brez povezave"
  - "AnkiWeb brez povezave"
  - "uporaba Ankija brez interneta"
---

Ankiju ni treba vzpostaviti stika s strežnikom, da vam pokaže naslednjo kartico. **Nameščene aplikacije Anki leta 2026 delujejo brez povezave:** Anki za Windows, macOS in Linux, AnkiMobile za iPhone in iPad ter AnkiDroid za Android. Vsaka uporablja zbirko, shranjeno v svoji napravi, zato lahko brez interneta ponavljate, ustvarjate zapise in urejate njihovo vsebino.

Pri AnkiWebu se lahko hitro zatakne. Ta storitev za učenje in sinhronizacijo deluje v brskalniku in potrebuje povezavo. Tudi nameščena aplikacija lahko uporablja le komplete in predstavnostne datoteke, ki so že preneseni v napravo, na kateri jo uporabljate.

**Dejstva preverjena:** 16. avgusta 2026.

![Raziskovalec na terenu dodaja zapis v lokalni arhiv fotografij, zvoka in besedila, medtem ko radijska povezava v gorah ne deluje](/blog/does-anki-work-offline.png)

## Kratek odgovor za vsako aplikacijo

[Uradno spletno mesto Anki](https://apps.ankiweb.net/) navaja namizno aplikacijo, AnkiMobile za iOS, AnkiDroid za Android in AnkiWeb kot dele istega ekosistema. Njihove možnosti brez povezave pa se razlikujejo.

| Aplikacija | Ali deluje brez povezave? | Kaj lahko počnete brez interneta | Za kaj potrebujete povezavo |
| --- | --- | --- | --- |
| **Anki za računalnik** z Windows, macOS ali Linuxom | **Da.** Zbirka in mapa s predstavnostnimi datotekami sta lokalni. | Ponavljate kartice, dodajate zapise, urejate njihovo vsebino in uporabljate predstavnostne datoteke, ki so že shranjene v računalniku. | Prenos skupnih kompletov, sinhronizacija z AnkiWebom in pridobivanje vsega, kar kartica ali dodatek zahteva od spletne storitve. |
| **AnkiMobile** za iPhone ali iPad | **Da.** Aplikacija hrani lokalno zbirko. | Ponavljate lokalne kartice, dodajate zapise, urejate njihovo vsebino ter predvajate zvok ali prikazujete slike, ki so že v napravi. | Dokončanje začetne sinhronizacije zbirke in predstavnostnih datotek, uporaba AnkiWeba ter dostop do oddaljenih virov. |
| **AnkiDroid** za Android | **Da.** AnkiDroid hrani zbirko v napravi Android. | Ponavljate lokalne kartice, dodajate zapise, urejate njihovo vsebino in uporabljate predstavnostne datoteke v napravi. | Sinhronizacija ali prenos manjkajočega gradiva, pridobivanje skupnih kompletov in uporaba funkcij kartic, ki potrebujejo omrežje. |
| **AnkiWeb** v brskalniku | **Nima načina brez povezave.** Je spletna storitev za učenje in sinhronizacijo. | Ne računajte, da ga boste lahko uporabljali po prekinitvi povezave. | Internetna povezava ali prehod na nameščeno aplikacijo, ki ste jo pripravili vnaprej. |

Anki torej lahko uporabljate brez povezave, če imate nameščeno aplikacijo in v njej že pravo zbirko. AnkiWeb v brskalniku še vedno potrebuje povezavo.

## Ponavljanja in spremembe brez povezave se najprej shranijo na napravi, ki jo uporabljate

Ko na kartice odgovarjate brez povezave, Anki ponavljanja zabeleži v lokalno zbirko. Razporejevalnik nadaljuje na podlagi tega lokalnega stanja. Tudi novi zapisi in običajne spremembe vsebine so lokalni. Na drugi napravi se ne pojavi nič, dokler ne vzpostavite povezave in sinhronizirate.

Če se učite le na eni napravi, sinhronizacije z AnkiWebom ne potrebujete. Njen namen je prenašati spremembe zbirke med napravami. [Ankijev priročnik za sinhronizacijo](https://docs.ankiweb.net/syncing.html) pravi, da je v običajnih okoliščinah mogoče združiti ponavljanja in spremembe zapisov iz več naprav. Če ste isto kartico ponavljali na dveh napravah, se oba odgovora ohranita v zgodovini ponavljanja, obvelja pa stanje iz najnovejšega odgovora.

S tem postopkom zmanjšate možnost nepotrebnih sporov pri sinhronizaciji:

1. Sinhronizirajte napravo, preden zapustite območje z zanesljivo povezavo.
2. Brez povezave ponavljajte, dodajajte zapise ali popravljajte običajno besedilo kartic.
3. Znova vzpostavite povezavo in sinhronizirajte to napravo, preden nadaljujete na drugi.
4. Počakajte, da druga naprava dokonča svojo sinhronizacijo, preden na njej naredite nove spremembe.

Spremembe strukture zbirke zahtevajo več previdnosti. Dodajanje polja, odstranjevanje predloge kartice, spreminjanje vrst zapisov in podobno delo lahko zahtevajo enosmerno sinhronizacijo namesto združevanja. Pri enosmerni sinhronizaciji izberete, ali boste obdržali lokalno zbirko ali zbirko v AnkiWebu; spremembe na drugi strani se lahko prepišejo.

Na poti lahko zato nadaljujete običajno ponavljanje in urejanje zapisov. Zahtevnejše spremembe vrst zapisov in predlog pa preložite, če zbirko brez povezave spreminjate na več napravah in se njihove različice razhajajo. Če Anki zahteva pošiljanje ali prenos celotne zbirke, se ustavite. Pred izbiro smeri ugotovite, katera zbirka vsebuje delo, ki ga želite ohraniti.

## Predstavnostne datoteke so lokalne šele, ko se prenesejo v napravo

Anki hrani zvok in slike ločeno od podatkov zbirke. [Dokumentacija o predstavnostnih datotekah](https://docs.ankiweb.net/media.html) pojasnjuje, da namizna aplikacija datoteke, ki jih pripnete ali prilepite v zapis, kopira v lokalno mapo `collection.media`. Ko je datoteka v tej mapi, kartica za njeno nalaganje ne potrebuje interneta.

Zaplete se lahko že pri pripravi. Sinhronizacija zbirke in sinhronizacija predstavnostnih datotek potekata ločeno, zato se zvok in slike lahko še prenašajo, ko so kartice že prikazane. [Navodila za sinhronizacijo AnkiMobile](https://docs.ankimobile.net/syncing.html) opozarjajo, da lahko predstavnostne datoteke manjkajo, dokler se prva sinhronizacija povsem ne konča. Popoln seznam kompletov še ne dokazuje, da je zbirka z veliko slikami ali zvokom pripravljena.

Preden ostanete brez povezave:

- sinhronizirajte napravo, na kateri ste dodali predstavnostne datoteke;
- počakajte, da se njihova sinhronizacija konča;
- sinhronizirajte napravo, ki jo boste vzeli s seboj, in počakajte tudi tam;
- odprite kartice z vsemi vrstami slik in zvoka, ki jih potrebujete;
- kjer je na voljo, zaženite **Check Media** (Preveri predstavnostne datoteke), da najdete zapise, ki se sklicujejo na manjkajoče datoteke.

Zadnji pregled je pomemben pri skupnih kompletih. Včasih avtor kompleta sploh ni vključil slike, na katero se zapis sklicuje, zato je tudi večkratna sinhronizacija ne more prenesti.

Lokalne predstavnostne datoteke ne pomenijo, da je vsaka kartica samozadostna. Predloga kartice se lahko sklicuje na sliko, skripto, pisavo ali drug vir na spletu. Spletni slovarji, prenos skupnih kompletov in dodatki, ki kličejo oddaljene API-je, še vedno potrebujejo povezavo. Pretvorba besedila v govor je odvisna od glasu in platforme: nameščen sistemski glas lahko deluje brez povezave, glas spletne storitve pa ne. Preizkusite konkretno funkcijo, namesto da predpostavljate, da vse funkcije pretvorbe besedila v govor ali vsi dodatki delujejo enako.

## Kako poteka sinhronizacija Ankija po ponovni vzpostavitvi povezave

Sinhronizacija po delu brez povezave ima pravzaprav dve stopnji: lokalno delo zdaj in omrežno sinhronizacijo pozneje.

Ko znova vzpostavite povezavo, sinhronizirajte napravo, na kateri ste delali brez povezave. Počakajte, da se končata sinhronizacija zbirke in predstavnostnih datotek. Nato sinhronizirajte naslednjo napravo, preden na njej začnete ponavljati ali urejati. S tem vrstnim redom lažje ugotovite, kje je najnovejše stanje, če Anki zahteva razrešitev spora.

Preverite tudi rezultat. Končana animacija sinhronizacije sama po sebi še ne pove, ali je vse na svojem mestu:

- poiščite zapis, ki ste ga dodali brez povezave;
- preverite, ali je v urejenem polju novo besedilo;
- pri kartici, na katero ste odgovorili, preverite zgodovino ponavljanja ali kdaj je spet na vrsti;
- na drugi napravi odprite vsaj eno pravkar dodano sliko ali zvočno datoteko.

Če ste isti zapis urejali na dveh napravah, preberite končni zapis, namesto da predpostavljate, da je združevanje ohranilo želeno besedilo. Če se pojavi rdeč gumb za sinhronizacijo ali izbira med pošiljanjem in prenosom celotne zbirke, ne klikajte iz navade. Prenos celotne zbirke prepiše lokalne spremembe; pošiljanje celotne zbirke pa prepiše zbirko v AnkiWebu, preden jo prenesejo druge naprave.

## Brez rednega dostopa do interneta zbirko prenesite kot datoteko

Zbirko Anki lahko prenesete med napravami tudi brez rednega dostopa do AnkiWeba. S tem predate trenutno zbirko drugi napravi; sprememb z več naprav pri tem ne združite.

[Navodila za prenos zbirke v AnkiMobile](https://docs.ankimobile.net/collection-transfer.html) opisujejo postopek z datoteko `collection.colpkg`, ki vsebuje vse komplete in podatke o razporejanju. Izvozite trenutno zbirko, datoteko prenesete z AirDropom ali skupno rabo datotek ter jo uvozite v drugo napravo. [Priročnik AnkiDroid](https://docs.ankidroid.org/manual.html) opisuje podoben postopek z USB-jem za prenos zbirke med Androidom in računalnikom.

Uvoz datoteke s celotno zbirko zamenja zbirko, ki je že v ciljni napravi. Ne more združiti dveh zbirk, ki ste ju brez povezave spreminjali neodvisno. Ena naprava naj bo vir trenutno veljavne zbirke: izvozite jo iz te naprave, uvozite v naslednjo in spremembe naredite tam. Novejšo zbirko nato prenesite nazaj, preden nadaljujete na prvi napravi.

To je uporabno pri terenskem delu, na ladjah, odročnih lokacijah ali v omejenih omrežjih, kjer je občasen prenos datotek mogoč, redna sinhronizacija v oblaku pa ne. Za običajen let ali vsakodnevno vožnjo je preprosteje, da pred odhodom dokončate sinhronizacijo z AnkiWebom.

## Sinhronizacija ni varnostna kopija Ankija

Sinhronizacija usklajuje naprave. Nenamerno brisanje ali neželena sprememba se zato lahko razširi na vse sinhronizirane naprave.

Nameščene aplikacije Anki hranijo lokalne varnostne kopije, za predstavnostne datoteke pa morate poskrbeti posebej. [Navodila za nastavitve AnkiMobile](https://docs.ankimobile.net/preferences.html) na primer pravijo, da njegove samodejne varnostne kopije vključujejo kartice in statistiko, ne pa zvoka ali slik. Izvoz celotne zbirke s predstavnostnimi datotekami ima drugačen namen kot sinhronizacija ali shranjene samodejne varnostne kopije.

Če bi komplet težko sestavili znova, občasno naredite popoln izvoz s predstavnostnimi datotekami in ga shranite zunaj naprave, ki jo vsak dan uporabljate. Podrobnejši [vodnik za varnostno kopiranje učnih kartic](/blog/how-to-back-up-flashcards/) pojasnjuje, kako poleg te kopije za obnovitev hraniti še besedilo v prenosljivi obliki in izvirne datoteke gradiva.

## Desetminutni preizkus v letalskem načinu

Preizkus izvedite na prenosniku, telefonu ali tablici, ki jo boste dejansko vzeli s seboj. Uspešen preizkus na računalniku ne pove ničesar o stanju mape s predstavnostnimi datotekami v telefonu.

1. Ko ste povezani, odprite nameščeno aplikacijo Anki in sinhronizirajte. Če je naprava nova, najprej dokončajte začetni prenos zbirke.
2. Počakajte, da se sinhronizacija predstavnostnih datotek konča. Ne ustavite se že, ko se pojavijo imena kompletov.
3. Odprite vsak komplet, ki ga potrebujete. Preizkusite nekaj kartic s slikami, zvokom, pisavami po meri in posebnim delovanjem predlog, na katerega se zanašate.
4. Vklopite letalski način ali kako drugače izklopite vse omrežne povezave.
5. Povsem zaprite Anki, ga ponovno odprite in začnite ponavljati kartice iz kompleta, ki ga potrebujete. Tako preverite, ali lahko brez povezave začnete znova, tudi če aplikacija prej ni bila odprta.
6. Ponovite več kartic. Dodajte en jasno označen testni zapis in naredite eno neškodljivo spremembo besedila.
7. Še vedno brez povezave zaprite in ponovno odprite aplikacijo. Preverite, ali so se ponavljanja, novi zapis, sprememba in lokalne predstavnostne datoteke ohranili.
8. Preizkusite vsak slovar, glas za pretvorbo besedila v govor ali dodatek, ki ga nameravate uporabljati. Zabeležite, kateri deli potrebujejo omrežje.
9. Znova vzpostavite povezavo in sinhronizirajte to napravo. Počakajte, da se končata sinhronizacija zbirke in predstavnostnih datotek.
10. Sinhronizirajte drugo napravo. Preden izbrišete testno vsebino, na njej preverite testni zapis, spremembo, stanje ponavljanja in predstavnostne datoteke.

Med tem preizkusom ne preoblikujte vrst zapisov na dveh napravah. Cilj je preveriti, ali ste pripravljeni za učenje na poti: prava zbirka je shranjena v napravi, pomembne predstavnostne datoteke se odprejo, delo brez povezave se ohrani po ponovnem zagonu, poznejša sinhronizacija pa ga prenese na drugo napravo.

## Anki je uporaben na poti, če napravo pripravite

Nameščene aplikacije Anki so dobra izbira za potovanja, če želite popolno lokalno zbirko namesto majhnega nabora predpomnjenih kartic. Omejitve so konkretne: zbirka in predstavnostne datoteke morajo biti v napravi vnaprej, AnkiWeb deluje le s povezavo, funkcije kartic, ki uporabljajo spletne storitve, pa še vedno potrebujejo povezavo.

Če za potovanja izbirate med več orodji, [primerjava aplikacij za učne kartice brez povezave](/blog/best-offline-flashcards-app/) pet izdelkov preveri po enakih merilih: kartice, urejanje, napredek, predstavnostne datoteke in poznejša sinhronizacija. Če drugo orodje za učenje iščete tudi iz razlogov, ki niso povezani z dostopom do interneta, preberite [primerjavo Ankija in Niboma](/blog/anki-vs-flashcards-open-source-app/).

Praktičen odgovor na vprašanje »Ali Anki deluje brez povezave?« je da: na računalniku, iPhonu, iPadu in Androidu, ko so potrebna zbirka in predstavnostne datoteke shranjene v napravi, ki jo uporabljate. Pred odhodom sinhronizirajte, naredite preizkus v letalskem načinu in po ponovni vzpostavitvi povezave najprej sinhronizirajte napravo, na kateri ste delali brez povezave.
