---
title: "Kako najti podvojene kartice v Ankiju in izbrati, katero obdržati"
description: "Poiščite vzrok za podvojene kartice v Ankiju, primerjajte zapiske in izberite kopijo, ki jo boste obdržali. Vaja pokaže, kako preveriti zgodovino ponavljanj."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "podvojene kartice v Ankiju"
  - "iskanje dvojnikov v Ankiju"
  - "brisanje podvojenih zapiskov v Ankiju"
  - "podvojeni zapiski v Ankiju"
  - "zgodovina ponavljanj v Ankiju"
---

Prepoznate vprašanje, ki ste ga že ponavljali, Anki pa ga prikaže kot novo. Morda ste pri uvozu dobili še eno kopijo ali pa je iz istega zapiska nastalo drugo vprašanje. Če v pregledovalniku izbrišete eno vrstico, lahko izbrišete vse kartice iz tega zapiska, tudi kartico za smer, ki jo še želite vaditi.

Pri čiščenju **podvojenih kartic v Ankiju** najprej ugotovite, zakaj se vprašanje ponavlja. Če gre za ločene zapiske, jih poiščite z ukazom **Notes → Find Duplicates**. Ujemanje v enem polju vam pove, katere zapiske je vredno pregledati. Primerjajte njihovo vsebino in zgodovino posameznih kartic, nato pa v vsaki skupini posebej izberite kopijo, ki jo želite obdržati.

Navodila veljajo za namizni Anki, imena ukazov in oznaka za dvojnike pa za angleški vmesnik. Temeljijo na Ankijevi dokumentaciji in objavljeni izvorni kodi, preverjeni 4. oktobra 2026. Vaja je izmišljena, pričakovani rezultati pa izhajajo iz teh dveh virov.

![Član šahovskega kluba primerja dodatno svetlo trdnjavo z dvema obrabljenima trdnjavama na leseni šahovnici](/blog/anki-duplicate-cards.png)

## Najprej ugotovite, kaj se ponavlja

Zapisek vsebuje polja, kot sta **Front** (sprednja stran) in **Back** (zadnja stran). Predloge določajo, kako iz teh polj nastanejo kartice. Iz enega zapiska za besedišče lahko nastaneta dve sorodni kartici, ena za prepoznavanje izraza in druga za priklic. Vsaka ima svoj razpored ponavljanj. [Ankijeva razlaga zapiskov in polj](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

V pregledovalniku **Browse** preklopite v način **Cards** in za vsako sumljivo vrstico odprite **Cards → Info**. Primerjajte identifikatorje zapiskov (**Note ID**). Kartice z istim identifikatorjem pripadajo istemu zapisku, različni identifikatorji pa pomenijo ločene zapiske. Če želite pregledati kartice enega zapiska v vseh kompletih, v poizvedbi `nid:123` nadomestite `123` z njegovim dejanskim identifikatorjem. [Ankijeva navodila za iskanje po identifikatorjih](https://docs.ankiweb.net/searching.html#object-ids)

| Kaj najdete | Verjetna razlaga | Kaj storiti |
| --- | --- | --- |
| Isti zapisek, vprašanji v nasprotnih smereh | Namerno ustvarjeni kartici iz istega zapiska | Preverite, ali vam koristita obe vprašanji |
| Isti zapisek, na karticah se prikaže enako vprašanje | Morda so podvojene predloge kartic | Primerjajte predloge in predoglede |
| Različni zapiski, na videz enaka vprašanja | Možni podvojeni zapiski | Preglejte celotne zapiske in nato izberite, katerega obdržati |

Obe smeri kartic iz istega zapiska prikazuje [vodnik o obrnjenih karticah (v angleščini)](/blog/anki-reverse-cards/). Če želite eno kartico začasno izločiti iz ponavljanja, uporabite **Suspend**. Kartica pri tem ostane v zbirki. [Vodnik o ukazih Bury in Suspend (v angleščini)](/blog/anki-bury-vs-suspend/)

Če najdete enaki predlogi, ju obravnavajte ločeno od čiščenja dvojnikov. Brisanje predloge vpliva na vse zapiske te vrste, tudi na tiste v drugih kompletih. [Ankijeva navodila za ugotavljanje vzroka odvečnih kopij](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Kje iskati podvojene zapiske

Odprite **Notes → Find Duplicates** in izberite polje za primerjavo, na primer **Front**. Anki privzeto išče med vsemi vrstami zapiskov s tem poljem. Obseg iskanja določite v polju **Optional filter** in nato kliknite **Search**. [Ankijeva navodila za iskanje dvojnikov](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Za komplet z imenom `Cleanup practice` vnesite naslednjo poizvedbo.

```text
deck:"Cleanup practice"
```

Iskanje po kompletu zajame tudi njegove podkomplete. Če so kopije morda v različnih kompletih, odstranite filter in preiščite celotno zbirko. Tudi če v enem kompletu ni zadetkov, je lahko kopija drugje. [Ankijeva sintaksa za iskanje po kompletih](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Kliknite skupino zadetkov, da si ogledate njene zapiske. Ukaz **Tag Duplicates** doda oznako `duplicate` vsakemu zapisku v skupini, tudi tistemu, ki ga boste morda obdržali. **Zadetkov za `tag:duplicate` ne izbrišite kar vseh naenkrat.** Z oznako zberite možne dvojnike, nato pa posebej izberite zapiske, ki jih želite odstraniti. [Objavljena izvorna koda za označevanje dvojnikov](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

Iskanje primerja vsebino izbranega polja. Ali dve vprašanji preverjata isti podatek, presodite sami. Drugače zastavljena vprašanja boste morda morali poiskati ročno. Tudi povsem enaka vprašanja se lahko nanašajo na različne jezike ali različno učno gradivo.

## Na papirju preizkusite tri odločitve

Predstavljajte si šest zapiskov v kompletu `Cleanup practice` brez podkompletov. Zapiska A in B uporabljata nespremenjeni predlogi vrste **Basic (and reversed card)**, zato iz vsakega nastaneta dve kartici. Zapiski od C do F uporabljajo vrsto **Basic** in imajo po eno kartico. Vseh osem kartic je v istem kompletu. Črke veljajo samo za to vajo. Dejanski identifikatorji zapiskov in kartic so v Ankiju številke.

| Zapiski | Sprednja stran → zadnja stran | Izmišljeni podatki o učenju | Odločitev |
| --- | --- | --- | --- |
| A in B | `le vélo` → `bicycle` | Pri A ima kartica za prepoznavanje 12 ponavljanj, kartica za priklic pa 3. Obe kartici iz zapiska B sta novi. | Obdržite A. B je prvi kandidat za brisanje. |
| C in D | `Chemical symbol for silver?` → `Ag` | C ima 20 ponavljanj, D pa 6. | Primerjajte obe zgodovini in izberite, s katero kartico boste nadaljevali. |
| E in F | E: `bank` → `financial institution`, F: `bank` → `side of a river` | Zapiska preverjata različna pomena. | Obdržite oba in vprašanjema dodajte kontekst. |

Iskanje po polju **Front** lahko pokaže vse tri pare. Odločitev je na prvi pogled preprosta le pri prvem paru. Preden se odločite, da je B odveč, primerjajte **vsa polja**, predstavnostne datoteke, oznake in vrsto zapiska. V predogledu preverite tudi smer vprašanj. V B je morda še posnetek izgovarjave ali pa iz njega nastane dodatno vprašanje.

Če koristna vsebina sodi k istemu učnemu cilju, jo premišljeno prenesite v zapisek, ki ga boste obdržali, in si oglejte predogled. Ohranite tudi koristne oznake iz izvornega zapiska. Če želite preverjati drugo znanje, zanj ustvarite novo vprašanje z lastno zgodovino.

Pri C in D je večje število ponavljanj le namig. Pri obeh karticah preverite datume in ocene preteklih ponavljanj, trenutni interval in podatek o naslednjem ponavljanju. Morda ste se morali pri kartici z več ponavljanji snov le večkrat naučiti na novo. Preverite, ali sta vprašanje in odgovor uporabna, nato se odločite, s katero zgodovino želite nadaljevati. Če si odgovora nasprotujeta, pravilnost preverite v učnem gradivu. Število ponavljanj vam ne pove, kateri odgovor je pravilen.

Če obdržite C in izbrišete D, C **ohrani samo svojo zgodovino in svoje stanje učenja**. V oknu **Card Info** si lahko ogledate zgodovino posamezne kartice. Vnosi o ponavljanjih izbrisanih zapiskov ostanejo v statistiki celotne zbirke, izginejo pa iz statistike posameznih kompletov. [Ankijeva navodila za Card Info](https://docs.ankiweb.net/stats.html#card-info) in [razlaga statistike izbrisanih zapiskov](https://docs.ankiweb.net/stats.html#more)

Če še niste prepričani, brisanje odložite. Zapišite, kaj morate preveriti. Po potrebi vmes iz ponavljanja začasno izločite kartice, ki jih morda ne želite obdržati.

## Izbrišite en odvečni zapisek in preverite rezultat

Pred brisanjem v svoji zbirki sinhronizirajte druge naprave, da se prenesejo vse spremembe. Nato sinhronizirajte še namizni Anki, da jih prenesete v njegovo zbirko. [Ankijeva navodila za sinhronizacijo](https://docs.ankiweb.net/syncing.html)

Z ukazom **File → Export** shranite **Anki Collection Package (`.colpkg`)** in vključite možnost **Include Media**. Paket zajema vse komplete, razporede kartic in zgodovino ponavljanj. Datoteko shranite na varno. Če jo uvozite, shranjena zbirka nadomesti trenutne kartice v odprtem profilu. [Ankijeva navodila za izvoz zbirke](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Če želite brisanje najprej vaditi, z ukazom **File → Switch Profile** ustvarite ločen profil in vanj uvozite varnostno kopijo. Poskusni profil naj ostane brez povezave z AnkiWebom. Profili imajo ločene zbirke. Če oba profila povežete z istim računom, lahko ena zbirka prepiše drugo. [Ankijeva navodila za profile](https://docs.ankiweb.net/profiles.html) in [vodnik po izvozu in uvozu APKG in COLPKG (v angleščini)](/blog/anki-apkg-vs-colpkg/)

V vaji je A1 kartica za prepoznavanje iz zapiska A, A2 pa njegova kartica za priklic. B1 in B2 sta ustrezni kartici iz zapiska B. Z ukazom **Cards → Info** poiščite dejanska identifikatorja obeh kartic iz zapiska A (**Card ID**). Zabeležite ju skupaj s podatki o naslednjih ponavljanjih, intervalih in nekaj vnosi iz zgodovine, ki jih boste pozneje zlahka prepoznali. Zabeležite tudi identifikator zapiska B. Stanje pred brisanjem in po njem primerjajte v isti seji. Vmes ne ponavljajte nobene kartice iz teh dveh zapiskov in ne spreminjajte njihovih razporedov.

Podvojene zapiske brišite po enega.

1. V pregledovalniku **Browse** zamenjajte trenutno poizvedbo s poizvedbo `nid:` z dejanskim identifikatorjem zapiska B. V načinu **Cards** preglejte vse zadetke in si oglejte predogled obeh smeri. Pri svojem gradivu preverite tudi, ali iz istega zapiska izvirajo kartice v drugih kompletih. Pri tem iskanju izpustite filter po kompletu.
2. Preklopite v način **Notes**. Preverite, da je edini zadetek odvečni zapisek B. Izberite samo ta zapisek in kliknite **Notes → Delete**. Ukaz izbriše izbrani zapisek in vse njegove kartice, tudi če ga uporabite v eni sami vrstici v načinu **Cards**. [Opis ukaza Delete v Ankijevih navodilih](https://docs.ankiweb.net/browsing.html#notes)
3. Ponovite iskanje po identifikatorju zapiska B in preverite, da je brez zadetkov. Kartici iz A poiščite s poizvedbo `cid:` in zabeleženima identifikatorjema, ločenima z vejico. Podatke o obeh karticah v oknu **Info** primerjajte z vrednostmi, ki ste si jih zapisali.
4. Poiščite `deck:"Cleanup practice"` in primerjajte število vrstic v načinih **Notes** in **Cards**. Preostale zapiske preverite s spodnjo tabelo.

Če izbrišete samo B, pričakujte naslednje.

| Kaj preverite | Pred brisanjem | Pričakovano po brisanju |
| --- | --- | --- |
| Celoten komplet iz vaje | 6 zapiskov / 8 kartic | 5 zapiskov / 6 kartic |
| Par zapiskov o kolesu | A1, A2, B1, B2 | Samo A1 in A2 |
| Identifikatorji kartic A, podatki o naslednjem ponavljanju, intervali in zgodovina | Vrednosti, ki ste jih zabeležili | Iste kartice, isti razpored in isti vnosi v zgodovini |
| Iskanje po identifikatorju zapiska B | Obe kartici iz zapiska B | Brez zadetkov |
| Zapiski o srebru in pomenih besede bank | C, D, E, F | Ostanejo isti štirje zapiski |

Z brisanjem enega zapiska tu odstranite dve kartici. Tudi če bi izbrisali A, bi v kompletu ostalo pet zapiskov in šest kartic. S tem bi izgubili ravno tisti kartici, ki ste ju že ponavljali in ju želite obdržati. Zato poleg števila preverite tudi identifikatorje. Kartic, ki jih obdržite, med čiščenjem ne ponastavljajte in jim ne spreminjajte razporeda.

Graf ponavljanj za celotno zbirko lahko še vedno zajema ponavljanja odstranjenih kartic. Napredek kartice, ki je ostala, preverite po njenem identifikatorju in podatkih v oknu **Info**.

Ko preverite, da se rezultat ujema z zabeleženim, se lotite naslednje skupine. Tudi v njej posebej izberite zapisek, ki ga boste obdržali. Če ste vadili v ločenem profilu, preverjeni postopek najprej ponovite v pravem profilu. Preglejte zbirko in sinhronizirajte namizni Anki. Pred učenjem na drugih napravah sinhronizirajte še te.

Če so kopije nastale pri uvozu, pred naslednjim uvozom preberite [vodnik za posodabljanje zapiskov prek CSV (v angleščini)](/blog/anki-csv-update-existing-notes/). Če ste zapiske podvojili, da bi isto dejstvo uvrstili pod več tem, lahko enemu zapisku dodate več oznak in ohranite eno samo zgodovino učenja. [Vodnik o oznakah in kompletih (v angleščini)](/blog/anki-tags-vs-decks/)
