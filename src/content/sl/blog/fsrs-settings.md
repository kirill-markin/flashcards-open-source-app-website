---
title: "Najboljše nastavitve FSRS za Anki v letu 2026: pomnjenje, koraki in obseg ponavljanja"
description: "Izberite varne nastavitve FSRS za želeno stopnjo pomnjenja, učne korake, optimizacijo, prerazporejanje in obseg dela v Ankiju 26.08 s FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "nastavitve FSRS"
  - "najboljše nastavitve FSRS"
  - "nastavitve Anki FSRS"
  - "želena stopnja pomnjenja FSRS"
  - "učni koraki FSRS"
  - "simulator FSRS"
  - "optimizacija parametrov FSRS"
  - "FSRS-6"
---

Zvišanje želene stopnje pomnjenja v Ankiju z 90 % na 95 % se sliši kot majhna sprememba. Vendar to ne pomeni pet odstotkov več dela. FSRS mora ob višjem cilju skrajšati intervale, zato lahko v zbirki, ki jo uporabljate že dlje časa, nastane precej daljša vrsta za ponavljanje. Če vključite še **Reschedule cards on change**, vas lahko del tega dela pričaka takoj.

Najboljše nastavitve FSRS zato niso niz parametrov, ki ga preprosto kopirate. So zaporedje odločitev: določite obseg dela, ki ga lahko vzdržujete, znotraj njega izberite cilj pomnjenja, prilagodite model svoji zgodovini in pustite obstoječe datume ponavljanj pri miru, razen če jih namenoma želite preračunati.

Spodnja imena nastavitev in opisano delovanje ustrezajo [izdaji Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) ter njenim nastavitvam FSRS-6. Če želite najprej razumeti model, preberite [Kaj je FSRS?](/blog/what-is-fsrs/). Če algoritem za razporejanje še izbirate, začnite s [primerjavo FSRS in SM-2](/blog/fsrs-vs-sm-2/).

> **Razkritje:** Sem Kirill Markin in razvijam [Nibomo](/sl/features/). Anki omogoča osebno prilagajanje parametrov in eksperimentalne simulatorje obsega dela, česar Nibomo trenutno ne ponuja. V primerjavi proti koncu so te razlike jasno navedene.

**Dejstva preverjena:** 8. septembra 2026.

![Upravljavec ladijske zapornice preverja tok vode na pomanjšanem modelu, preden spremeni pravo zapornico](/blog/fsrs-settings-v2.png)

## Kratek odgovor: začnite tukaj

Za večino uporabnikov Ankija so to varne začetne izbire, ne pa univerzalne nastavitve:

| Nastavitev ali navada | Varna začetna izbira | Zakaj |
| --- | --- | --- |
| Želena stopnja pomnjenja | `0.90` | To je privzeta vrednost v Ankiju, ki uravnoteži priklic in obseg ponavljanja. |
| Parametri FSRS | Uporabite **Optimize Current Preset**; uteži ne kopirajte od drugod in jih ne urejajte ročno | Optimizator prilagodi model vaši zgodovini ponavljanj. |
| Pogostost optimizacije | Največ enkrat mesečno; običajno zadostuje enkrat na nekaj mesecev | Anki ne priporoča pogoste optimizacije. |
| Učni koraki | Ohranite le nekaj korakov, ki jih opravite še isti dan | Dolga zaporedja korakov odložijo razporejanje na podlagi modela. |
| Koraki ponovnega učenja | Naj jih bo čim manj in naj bodo krajši od enega dneva | Enaka omejitev velja po neuspešnem priklicu kartice pri ponavljanju. |
| Reschedule cards on change | Izključeno | Nove nastavitve lahko začnejo veljati ob prihodnjih ponavljanjih, ne da bi na novo sestavili današnjo vrsto. |
| Najdaljši interval | Ohranite privzetih 100 let | Nižja zgornja meja pogosteje vrača kartice, ki jih že dobro poznate. |
| Nove kartice na dan | Določite število glede na obseg dela, ki ga lahko vzdržujete | Vsaka nova kartica pomeni učenje zdaj in ponavljanje pozneje. |
| Again in Hard | Again pomeni neuspešen priklic; Hard pomeni uspešen priklic s težavo | Z napačnimi ocenami se v zgodovino modela zapisujejo napačni podatki. |

Če ponavljanja obvladujete in so vaše nastavitve že blizu tem, morda ni treba ničesar popravljati. Ukvarjanje z nastavitvami ni učenje.

## Ločite tri odločitve

Ljudje pogosto združijo želeno stopnjo pomnjenja, parametre FSRS in dnevni obseg dela v eno samo stvar. Vendar vsaka od teh nastavitev vpliva na nekaj drugega:

- **Želena stopnja pomnjenja** je vaš cilj priklica. Izberete jo glede na cilje in čas, ki ga imate za učenje.
- **Parametri FSRS** prilagodijo model spomina zgodovini ponavljanj. Izračuna jih Ankijev optimizator.
- **Omejitve novih kartic in ponavljanj** določajo, koliko gradiva vstopi v sistem in koliko zapadlih kartic vam Anki lahko prikaže vsak dan.

S to ločitvijo veliko lažje poiščete vzrok težav. Dolga vrsta ne pomeni samodejno, da so parametri napačni. Komplet s pomembnim gradivom ne potrebuje nujno ločene prednastavitve parametrov. Znižanje želene stopnje pomnjenja pa ne odpravi prehitrega dodajanja novih kartic, ki že od začetka ni bilo vzdržno.

## Želeno stopnjo pomnjenja izberite glede na obseg dela, ne ambicije

Želena stopnja pomnjenja algoritmu FSRS pove, kolikšna naj bo verjetnost, da se boste odgovora spomnili ob načrtovanem ponavljanju kartice. Pri `0.90` FSRS načrtuje ponavljanja tako, da je napovedana verjetnost priklica približno 90-odstotna. To je cilj modela, ne zagotovilo, da boste pri vsakem učenju ali izpitu pravilno odgovorili na natanko 90 % vprašanj.

Pri izbiri tehtate med pomnjenjem in obsegom dela:

- Če želeno stopnjo pomnjenja zvišate, se intervali skrajšajo, ponavljanj pa je več.
- Če jo znižate, se intervali podaljšajo, neuspešnih priklicev pa je več.
- Če jo znižate preveč, lahko dodatno ponovno učenje po neuspešnih priklicih porabi del časa, ki ste ga želeli prihraniti.

Anki ima privzeto vrednost 90 %. Njegova [navodila za želeno stopnjo pomnjenja](https://docs.ankiweb.net/deck-options.html#desired-retention) opozarjajo, da ob približevanju cilja 100 % obseg dela hitro raste, in priporočajo vrednost pod 97 %. Uradna [razlaga optimalne stopnje pomnjenja](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) obravnava drugo stran krivulje: tudi zelo nizka stopnja je lahko neučinkovita, saj pozabljene kartice zahtevajo več dela.

Začnite z `0.90` in vrednost spremenite šele po pregledu obsega dela. Višji cilj je lahko smiseln pri gradivu, pri katerem ima pozabljanje resnične posledice. Nižji cilj je lahko smiseln, kadar ponavljanja izpodrivajo koristnejše učenje. Nobena od teh sprememb ne odpravi nejasnih kartic, neiskrenih ocen ali preveč novih kartic.

### Stopnja pomnjenja kompleta in parametri prednastavitve veljajo na različnih ravneh

V Ankiju 26.08 lahko določite, na kateri ravni velja nastavitev **Desired retention**: za skupno prednastavitev (**Shared Preset**) ali za ta komplet (**This deck**). Sorodni kompleti lahko zato uporabljajo isto prednastavitev parametrov, posamezen komplet pa ima svoj cilj pomnjenja.

Cilj za posamezen komplet določite, ko se posledice pozabljanja razlikujejo. Komplet za licenčni izpit lahko upraviči višji cilj kot manj pomemben referenčni komplet, tudi če oba uporabljata isti prilagojeni model.

Če izberete **This deck**, parametri FSRS ne postanejo specifični za ta komplet. Anki jih privzeto prilagodi na podlagi zgodovine ponavljanj vseh kompletov, ki uporabljajo trenutno prednastavitev. Če se skupine kompletov močno razlikujejo po tem, kako težke se vam zdijo, jih lahko ločeno prilagodite z ločenimi prednastavitvami.

## Help Me Decide in Simulator odgovarjata na različni vprašanji

Anki 26.08 ponuja dve ločeni eksperimentalni orodji:

- **Help Me Decide (Experimental)** prikaže osebno prilagojeno krivuljo razmerja med pomnjenjem in obsegom dela. Z njim odgovorite na vprašanje: »Kateri cilj pomnjenja ustreza številu ponavljanj, ki jih zmorem, oziroma času, ki ga lahko redno namenjam učenju?«
- **FSRS Simulator (Experimental)** oceni, kako bi lahko neka konfiguracija delovala skozi čas. Z njim primerjajte spremembe stopnje pomnjenja, dodajanja novih kartic, omejitev ponavljanja in najdaljšega intervala.

[Dokumentacija simulatorja FSRS](https://docs.ankiweb.net/deck-options.html#the-simulator) navaja njegove glavne vhodne podatke:

- število dni za simulacijo
- dodatne nove kartice za simulacijo
- nove kartice na dan
- največje število ponavljanj na dan
- najdaljši interval
- želeno stopnjo pomnjenja in parametre FSRS prednastavitve

Simulacija upošteva tudi dejansko stanje spomina, ki ga model vodi za vsako kartico v prednastavitvi. Zato je za zbirko z daljšo zgodovino uporabnejša od množenja današnjega števila zapadlih kartic z nekim splošnim odstotkom.

Pred spremembo dejanskih nastavitev preizkusite tri scenarije:

1. Trenutno stopnjo pomnjenja in število novih kartic.
2. Ciljno stopnjo pomnjenja, o kateri razmišljate.
3. Isti cilj z manj novimi karticami na dan.

Tretji preizkus preveri pogosto uporabno alternativo: ohranite cilj priklica in upočasnite dotok novega gradiva. Če je napovedani obseg dela tako obvladljiv, vam ni treba sprejeti več pozabljanja zgolj zato, da skrajšate vrsto. Podrobnejša navodila so v članku [Koliko novih učnih kartic na dan?](/blog/how-many-new-flashcards-per-day/).

Obe orodji podajata ocene. Izpuščeni dnevi, spremembe kartic, novo gradivo in spremembe ocenjevalnih navad lahko povzročijo, da se dejanski obseg dela razlikuje od grafa. Primerjavo uporabite za izbiro smeri, ne kot obljubo natančne dolžine vrste čez nekaj mesecev.

Starejši vodiči morda omenjajo **Compute Minimum Recommended Retention** ali CMRR. Anki je to funkcijo odstranil v različici 25.07. Ta postopek za izbiro želene stopnje pomnjenja torej ni več na voljo.

## Parametre FSRS optimizirajte na podlagi lastne zgodovine

Želena stopnja pomnjenja izraža vaš cilj. Parametri FSRS določajo, kako se model prilagodi vašim ponavljanjem.

V Ankiju 26.08 uporabite **Optimize Current Preset**, da prilagodite parametre aktivne prednastavitve. Anki privzeto vključi zgodovino ponavljanj vseh kompletov, ki uporabljajo to prednastavitev; če želite ožji izbor za prilagajanje, lahko spremenite iskalni pogoj. **Optimize All Presets** posodobi vse prednastavitve naenkrat.

Uteži ne vnašajte ročno in jih ne kopirajte z Reddita, iz videoposnetka ali tujega kompleta. Kartice, čas ponavljanj in ocenjevalne navade nekoga drugega niso vaša zgodovina. Lepo urejen niz [uteži FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) ni učna strategija, ki bi jo lahko preprosto prenesli nase.

Ponovno optimizirajte šele, ko se nabere dovolj pomembnih novih podatkov o ponavljanjih. Priročnik za Anki pravi, da zadostuje enkrat mesečno, navodila v aplikaciji 26.08 pa, da zadostuje enkrat na nekaj mesecev. Praktični sklep je enak: ni razloga za tedensko optimizacijo, kaj šele za optimizacijo po vsakem učenju.

### Preverjanje kakovosti izvedite pri trenutni prednastavitvi

Vključite **Check health when optimizing (slow)**, kadar želite, da Anki oceni, kako dobro se lahko FSRS prilagodi zgodovini trenutne prednastavitve. To preverjanje se izvede z **Optimize Current Preset**, ne pa z **Optimize All Presets**.

Če je rezultat slab, preglejte podatke, preden posežete v uteži. [Ankijeva navodila za parametre FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) navajajo pogoste vzroke: manj kot nekaj sto ponavljanj, uporaba Hard po neuspešnem priklicu in neuporaba Again, ko priklic ne uspe. Če imate malo uporabne zgodovine, ohranite privzete vrednosti in optimizirajte pozneje, namesto da bi si izposodili parametre drugega uporabnika.

## Again pomeni neuspešen priklic; Hard pomeni uspeh

Ta navada je prav tako pomembna kot katerakoli nastavitev.

Uporabite **Again**, kadar zahtevanega odgovora niste znali povedati ali je bil napačen. **Hard** uporabite samo, če ste odgovor pravilno priklicali, vendar z veliko truda ali oklevanja. Tudi Good in Easy pomenita uspešen priklic.

Če pritisnete Hard, da se izognete kratkemu intervalu Again, po neuspehu zabeležite uspeh. FSRS se nato uči iz napačnega dogodka. Gumb izberite glede na to, kako ste se spomnili odgovora, ne glede na to, kateri od prikazanih intervalov vam najbolj ustreza.

Dvoumne kartice otežijo iskreno ocenjevanje. Če vprašanje zahteva pet dejstev, vi pa se spomnite štirih, se je težava z razporejanjem začela že v urejevalniku. Kartico razdelite ali preoblikujte. Za kartice, pri katerih vam kljub ponavljanjem vedno znova spodleti, preberite [Kako popraviti kartice, ki jih vedno znova pozabljate](/blog/how-to-fix-leech-flashcards/).

## Učni koraki FSRS naj bodo kratki — ali pa jih namenoma pustite prazne

Koraki učenja in ponovnega učenja določajo, kdaj boste kartico v kratkem spet videli, preden začne zanjo veljati običajni dolgoročni urnik. Niso dodaten cilj pomnjenja.

Ankijeva navodila za FSRS priporočajo dve omejitvi:

- vsak korak naj bo krajši od enega dneva in izvedljiv še isti dan
- število ponovitev v istem dnevu naj bo majhno

Dolga zaporedja, kot je `1m 10m 1d 3d`, prenašajo staro navado iz SM-2 v FSRS. Koraki, dolgi dan ali več, odložijo razporejanje na podlagi modela in lahko povzročijo zavajajoče prikaze intervalov na gumbih, na primer daljši interval pri Hard kot pri Good.

Kratko zaporedje, kot je `1m 10m`, s korakom ponovnega učenja `10m`, je previdno izhodišče, če ustreza vašemu učenju. Več ponovitev v istem dnevu ni nujno boljša izbira.

Anki 26.08 dovoljuje tudi, da katerokoli od polj za korake učenja ali ponovnega učenja pustite prazno. Ko je FSRS vključen, prazno polje prepusti to kratkoročno razporejanje algoritmu FSRS. To je eksperimentalno in interval Again je lahko en dan ali več. Če želite zanesljivo vedeti, da boste kartico spet videli še isti dan, ohranite kratke ročne korake; polje izpraznite le, če zavestno sprejmete, da čas določi FSRS.

## Za postopen prehod pustite Reschedule cards on change izključeno

Ko je **Reschedule cards on change** izključeno, kar je privzeto stanje, vklop FSRS ali sprememba želene stopnje pomnjenja oziroma parametrov ne spremeni takoj obstoječih datumov ponavljanja. Nova konfiguracija se uporabi ob prihodnjih ponavljanjih kartic, zato se vrsta spreminja postopoma.

Če eno od teh sprememb FSRS shranite z vključeno možnostjo, se datumi takoj preračunajo. Glede na novi cilj in stanja kartic lahko veliko kartic zapade naenkrat. Anki prerazporejenim karticam doda tudi zapise ponavljanj, kar poveča velikost zbirke.

Ta možnost je uporabna samo, kadar res želite na novo določiti obstoječi urnik. Pri zbirki z daljšo zgodovino:

1. Ustvarite svežo varnostno kopijo in preverite, ali veste, kako spremembo razveljaviti ali podatke obnoviti iz varnostne kopije.
2. Zaženite Simulator s predlaganimi nastavitvami.
3. Izberite eno spremembo konfiguracije; ne združujte več poskusov.
4. Ob shranjevanju vključite prerazporejanje samo, če želite takojšnjo spremembo datumov in lahko obvladate posledice.

Anki izrecno priporoča varnostno kopijo pri prehodu s SM-2 s prerazporejanjem. Širši [vodič za varnostno kopiranje učnih kartic](/blog/how-to-back-up-flashcards/) pojasnjuje, zakaj je postopek obnove enako pomemben kot sama datoteka varnostne kopije.

## Ohranite dovolj dolg najdaljši interval

Ankijev najdaljši interval je privzeto 100 let. To je videti nenavadno, dokler se ne spomnite, da gre za zgornjo mejo, ne za obljubo, da bo vsaka dobro utrjena kartica izginila za celo stoletje.

Nižja zgornja meja vrne dobro znane kartice prej in poveča obseg dela. Pri tej meji lahko Hard, Good in Easy vsi pokažejo enak zamik, saj nobeden ne sme preseči najdaljšega intervala.

Krajši najdaljši interval je lahko smiseln, kadar izpit določa konkreten rok, se gradivo pogosto spreminja ali poklicno pravilo zahteva redno ponavljanje ne glede na napoved modela spomina. Mejo uskladite s koledarjem in Simulatorjem, namesto da bi iz zaskrbljenosti izbrali majhno številko. Članek [Kako se s FSRS pripraviti na izpit](/blog/how-to-study-for-an-exam-with-fsrs/) obravnava ta ožji primer.

Pri običajnem dolgoročnem učenju pustite zgornjo mejo visoko. Želena stopnja pomnjenja že določa, kdaj naj napoved priklica sproži ponavljanje.

## Dodajanje novih kartic je del odločitve o obsegu dela

FSRS lahko razporeja ponavljanja, ne more pa narediti neomejenega dodajanja novih kartic vzdržnega. Vsaka nova kartica pomeni učenje zdaj in ponavljanje pozneje.

Če je vrsta preobsežna, pred znižanjem želene stopnje pomnjenja preverite:

- število novih kartic na dan
- velike uvoze ali sklope ustvarjenih kartic
- omejitev največjega števila ponavljanj, ki nenehno skriva zapadlo delo
- težavne in nejasne kartice, ki zahtevajo ponavljajoče se poskuse
- izpuščene dneve ponavljanja

Uporabite **Additional new cards to simulate**, kadar veste, da bo komplet rasel. Napoved, ki temelji samo na današnji zbirki, ne bo odražala obsega dela po velikem uvozu.

Če je napovedani obseg dela prevelik, zmanjšajte število novih kartic in simulacijo ponovite. Tako ohranite cilj priklica, ne da bi od algoritma zahtevali dopuščanje več pozabljanja.

## Anki in Nibomo ponujata različne nastavitve FSRS

Oba izdelka uporabljata FSRS-6, vendar se Ankijeve nastavitve FSRS ne preslikajo neposredno v Nibomo.

| Zmožnost | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Želena stopnja pomnjenja | **Shared Preset** ali **This deck** | Nastavljiva za vsak delovni prostor; privzeto `0.90` |
| Parametri FSRS | **Optimize Current Preset** ali **Optimize All Presets** na podlagi zgodovine ponavljanj | Uradne privzete uteži FSRS-6 so fiksirane in jih uporabnik v v1 ne more spreminjati |
| Učni koraki | Nastavljivi; razporejanje s FSRS pri praznem polju je eksperimentalno | Nastavljivi za vsak delovni prostor; privzeto `1m 10m` |
| Koraki ponovnega učenja | Nastavljivi; razporejanje s FSRS pri praznem polju je eksperimentalno | Nastavljivi za vsak delovni prostor; privzeto `10m` |
| Najdaljši interval | Privzeto 100 let | Privzeto 36.500 dni, prav tako 100 let |
| Spremembe nastavitev | Privzeto veljajo za prihodnja ponavljanja; prerazporejanje obstoječih datumov je izbirno | Samo prihodnja ponavljanja; obstoječi datumi se ne preračunajo |
| Orodja za obseg dela | **Help Me Decide (Experimental)** in **FSRS Simulator (Experimental)** | V v1 ni primerljivega simulatorja obsega dela |

Nibomo uporablja standardne ocene Again, Hard, Good in Easy ter hrani stanje spomina FSRS za vsako kartico. Njegovi algoritmi za razporejanje na zalednem strežniku, v iOS in Androidu so neodvisne implementacije z usklajenim delovanjem; spletno ponavljanje uporablja zaledni algoritem, namesto da bi dodajalo četrto kopijo.

Te omejitve in privzete vrednosti so opisane v javni [specifikaciji razporejanja FSRS v Nibomu](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Izbira je jasna: Nibomo ponuja praktično konfiguracijo FSRS-6 na ravni delovnega prostora, Anki pa natančnejše določanje, za katere komplete veljajo posamezne nastavitve, osebno prilagajanje parametrov in simulacijo. Če so vam te možnosti nujne, je Anki primernejši.

## Varnejši postopek za zbirko z dolgo zgodovino

Če imate že mesece ali leta zgodovine ponavljanj, sledite temu vrstnemu redu:

1. **Uskladite ocene z njihovim pomenom.** Again pomeni neuspeh; Hard pomeni uspeh s težavo.
2. **Optimizirajte trenutno prednastavitev.** Model prilagodite svoji zgodovini, namesto da urejate ali kopirate uteži.
3. **Po potrebi zaženite preverjanje kakovosti.** Pomanjkljivo ali nedosledno zgodovino obravnavajte kot težavo s podatki.
4. **Uporabite Help Me Decide.** Razpon stopnje pomnjenja izberite glede na število ponavljanj, ki jih zmorete, ali čas, ki ga lahko redno namenjate učenju.
5. **Zaženite Simulator.** Primerjajte trenutno konfiguracijo, predlagani cilj in manjše število novih kartic.
6. **Spremenite eno dejansko nastavitev.** Najprej prilagodite stopnjo pomnjenja ali dodajanje kartic, nato opazujte dejansko vrsto.
7. **Koraki naj ostanejo kratki.** Odstranite zaporedja učenja in ponovnega učenja s koraki, dolgimi dan ali več; prazna polja uporabljajte samo kot poskus.
8. **Najdaljši interval naj ostane dovolj dolg.** Skrajšajte ga samo zaradi določenega roka ali zahteve.
9. **Prerazporejanje pustite izključeno.** Če potrebujete takojšen preračun, najprej ustvarite varnostno kopijo in načrtujte delo z novo vrsto.

S tem zaporedjem pri spreminjanju ustaljenega urnika čim dlje ohranite možnost vrnitve na prejšnje stanje. Hkrati preprečite, da bi tri različne težave — prilagajanje modela, cilj priklica in dotok novega gradiva — postale ena sama uganka z nastavitvami.

## Pogosta vprašanja o najboljših nastavitvah FSRS

### Je 90 % najboljša želena stopnja pomnjenja za FSRS?

To je najvarnejše splošno izhodišče, saj gre za Ankijevo privzeto vrednost in se izogne najstrmejšemu delu krivulje obsega dela pri visoki stopnji pomnjenja. Najboljša vrednost za določen komplet je odvisna od posledic pozabljanja in obsega dela, ki ga lahko vzdržujete. Pred spremembo preverite **Help Me Decide (Experimental)**.

### Naj želeno stopnjo pomnjenja nastavim na 95 %?

Šele ko preverite, koliko dodatnih ponavljanj ali minut bi to zahtevalo. Dobro urejen komplet s pomembnim gradivom lahko upraviči 95 %; velika zbirka za občasno učenje pa lahko postane po nepotrebnem obremenjujoča. Hkrati ne vključite prerazporejanja obstoječih kartic, razen če namenoma želite takojšen preračun datumov.

### Kako pogosto naj optimiziram parametre FSRS?

Enkrat mesečno je že dovolj pogosto, navodila v Ankiju 26.08 pa pravijo, da zadostuje enkrat na nekaj mesecev. Optimizirajte, ko se nabere dovolj pomembne nove zgodovine, ne po dnevnem ali tedenskem urniku.

### Naj bodo učni koraki FSRS prazni?

Prazni koraki učenja ali ponovnega učenja omogočijo Ankiju 26.08, da pripadajoče kratkoročno razporejanje prepusti FSRS. Funkcija je eksperimentalna, po izbiri Again pa je naslednje ponavljanje lahko šele čez en dan ali več. Nekaj kratkih korakov, ki jih opravite še isti dan, ostaja previdnejša izbira.

### Ali sprememba nastavitev FSRS prerazporedi obstoječe kartice v Ankiju?

Privzeto ne. Ko je **Reschedule cards on change** izključeno, nove nastavitve vplivajo na prihodnja ponavljanja brez takojšnjega preračuna vrste. Če možnost vključite, se datumi spremenijo in veliko kartic lahko zapade naenkrat, zato najprej ustvarite varnostno kopijo.

### Je CMRR še del Ankija?

Ne. Anki je Compute Minimum Recommended Retention odstranil v različici 25.07. V Ankiju 26.08 uporabite **Help Me Decide (Experimental)** in **FSRS Simulator (Experimental)**, da primerjate pomnjenje z ocenjenim obsegom dela.

### Ali Nibomo uporablja iste nastavitve kot Anki?

Uporablja FSRS-6 ter omogoča nastavitev želene stopnje pomnjenja, učnih korakov, korakov ponovnega učenja, najdaljšega intervala in naključnega odmika intervalov (fuzz) za vsak delovni prostor. Ne posnema celotnega Ankijevega modela nastavitev: uteži so v v1 fiksirane, spremembe veljajo samo za prihodnja ponavljanja, osebno prilagajanje parametrov in simulator obsega dela pa nista na voljo.

## Najprej določite obseg dela, nato odstotek

Dobre nastavitve FSRS poskrbijo, da vrsta za ponavljanje podpira dejanski učni načrt. Začnite pri 90 %, ocenite delo, nadzorujte dodajanje novih kartic in stopnjo pomnjenja zvišajte samo, kadar boljše pomnjenje odtehta dodatna ponavljanja. Koraki naj ostanejo kratki, najdaljši interval dovolj dolg, ocene pa iskrene.

Potem zaprite zaslon z nastavitvami. Algoritem bolj potrebuje redna ponavljanja kot še en večer prilagajanja.
