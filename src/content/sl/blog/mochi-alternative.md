---
title: "Pregled učnih kartic Mochi (2026): brezplačni paket, uporaba brez povezave in primerjava z Ankijem"
description: "Pregled Mochija s preverjenimi viri: brezplačni paket, aplikacije brez povezave, zapiski v Markdownu, FSRS, sinhronizacija, uvoz iz Ankija, izvoz in omejitve lastnega gostovanja."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "učne kartice mochi"
  - "kartice mochi"
  - "mochi proti ankiju"
  - "anki proti mochiju"
  - "ali je mochi brezplačen"
  - "mochi brez povezave"
  - "mochi cenik"
  - "gostovanje mochija"
  - "učne kartice markdown"
  - "mochi časovno razmaknjeno ponavljanje"
---

V Mochiju začnete z dokumentom v Markdownu, ne z običajnim obrazcem za sprednjo in zadnjo stran kartice. Dodajte vrstico s tremi vezaji in dokument dobi strani za ponavljanje. Lahko ga pustite kot zapisek, povežete z drugo kartico ali arhivirate, da ostane dostopen pri iskanju, ne da bi se uvrstil v čakalno vrsto za ponavljanje.

To preprosto ločilo dobro pokaže, komu ustrezajo **učne kartice Mochi**. Mochi je dobra izbira za nekoga, ki želi zapiske in časovno razmaknjeno ponavljanje v isti aplikaciji, ki temelji na lokalnih podatkih, zlasti če mu ustrezajo Markdown, povratne povezave in preprosto ponavljanje z izbiro Spomnim se/Pozabil sem. Manj prepričljiv je za dolgoletnega uporabnika Ankija, čigar zbirka je odvisna od ustvarjenih različic kartic, prilagojenega HTML/CSS, JavaScripta, dodatkov ali podrobnih nastavitev razporejevalnika.

Za delo na eni napravi je brezplačni paket več kot preizkusna različica: registracija ni potrebna, Mochi pa dokumentira neomejeno uporabo brez povezave. Omejitev je sinhronizacija med napravami, ki je del **paketa Pro za 5 USD na mesec**. Za uporabnika Ankija je večji strošek izguba podatkov in funkcij pri prenosu. Mochi lahko uvozi Ankijev paket in njegovo zgodovino ponavljanja, ne more pa ohraniti vsake predloge, sloga, skripta, nastavitve razporejevalnika ali delovanja dodatkov.

> **Razkritje:** Sem Kirill Markin in razvijam [Nibomo](/sl/). To je pregled načina dela na podlagi preverjenih virov, ne trditev, da sem izdelek praktično preizkusil. Partnerskih povezav ni. Glavna primerjava ostaja med Mochijem in Ankijem; moj izdelek se pojavi le proti koncu kot jasno označena alternativa.

**Podatki preverjeni:** 7. septembra 2026. Takrat je bila zadnja vidna [izdaja Mochija](https://mochi.cards/changelog/) različica 26.8.2 z dne 10. avgusta 2026. Cene in podatki v trgovinah z aplikacijami se lahko spremenijo.

![Konservator knjig preizkuša majhen, harmonikasto zložen niz povezanih kartic, medtem ko izvirni arhiv ostaja varno shranjen v škatlah](/blog/mochi-alternative-v3.png)

## Kratek pregled

- **Izberite Mochi**, če želite zapiske v Markdownu in kartice na enem mestu, uporabo brez povezave in brez računa na eni napravi, povratne povezave ter izbiro med dvema ocenama pri ponavljanju.
- **Izberite Anki**, če potrebujete uveljavljene vrste zapiskov, predloge HTML/CSS, dodatke, brezplačno gostovano sinhronizacijo, štiri ocene pri ponavljanju ali podrobnejše nastavitve FSRS.
- **Za zdaj ne menjajte aplikacije**, če že redno ponavljate in ne znate poimenovati težave pri delu, ki bi jo Mochi rešil. Nov vmesnik ni zadosten razlog, da bi ogrozili leta podatkov o razporedu ponavljanja in prilagojene kartice.
- **Pred prenosom opravite preizkus**, če svojo zbirko že dolgo hranite v Ankiju. Mochi sprejme datoteke `.apkg` in lahko prenese zgodovino ponavljanja, vendar HTML pretvori v Markdown ter odstrani CSS in JavaScript.

## Mochi in Anki na kratko

| Merilo | Mochi | Anki |
|---|---|---|
| Komu najbolj ustreza | Uporabnikom povezanih zapiskov in Markdowna, ki želijo zapiske ob karticah za ponavljanje | Učencem, ki želijo uveljavljen in nastavljiv sistem učnih kartic |
| Ustvarjanje kartic | Dokument v Markdownu dobi več strani, ko dodate `---`; na voljo so tudi polja in predloge | Zapiski vsebujejo polja; predloge HTML/CSS ustvarijo eno ali več kartic |
| Potek ponavljanja | Nove kartice najprej vstopijo v fazo učenja; naučene kartice uporabljajo Pozabil sem / Spomnim se | Kartice uporabljajo ocene Znova / Težko / Dobro / Lahko |
| Razporejanje | Privzeto Mochijev lastni algoritem; FSRS je izbiren | FSRS ali starejši SM-2, z obsežnejšimi orodji za prilagajanje FSRS |
| Brezplačna uporaba | Brez registracije in z neomejeno uporabo brez povezave | Brezplačne namizne aplikacije in sinhronizacija AnkiWeb; uradna aplikacija za iOS je plačljiva |
| Sinhronizacija med napravami | Pro, 5 USD na mesec | Brezplačno prek AnkiWeba |
| Platforme | Splet, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, uradni AnkiMobile, neodvisni AnkiDroid |
| Prenosljivi formati | Izvozi v lastnem formatu `.mochi`, Markdownu in CSV | Lastna formata `.colpkg` in `.apkg` ter besedilo s tabulatorji kot ločili |
| Podatki in omejitve gostovanja | Temelji na lokalnih podatkih; osnovna aplikacija ni predstavljena kot odprtokodna, podprta storitev za sinhronizacijo na lastnem strežniku pa ni dokumentirana | Glavni repozitorij ima licenco AGPL; uradni strežnik za sinhronizacijo z lastnim gostovanjem je dokumentiran |

Bistvena razlika je med **preprostim delom, ki izhaja iz zapiskov, in nadzorom nad celotno zbirko**.

## Kako je zasnovan Mochijev vmesnik

Mochijev vmesnik postane bolj razumljiv, ko sledite eni kartici skozi celoten postopek.

Vsaka kartica pripada kompletu. Kliknite **New Card** (Nova kartica) in dobite prostor za Markdown namesto vnaprej določenih polj za vprašanje in odgovor. Ena kartica lahko vsebuje naslove, sezname, kodo, slike, strukturirana polja in povezave. Med bloke dodajte `---`, da ustvarite dve ali več strani za ponavljanje. Dodajte `[[double brackets]]`, torej dvojne oglate oklepaje, za sklic na drugo kartico; Mochi samodejno ustvari povratno povezavo. Uradni [pregled kartic](https://mochi.cards/docs/cards/) dokumentira tudi predloge, v katerih nadomestne oznake ob prikazu zamenjajo vrednosti strukturiranih polj.

Kartice lahko opravljajo dve nalogi, ne da bi bile v ločenih sistemih:

- kartica za ponavljanje uporablja strani in vstopi v časovno razmaknjeno ponavljanje;
- referenčni zapisek lahko ostane v istem kompletu in ga arhivirate, s tem ga odstranite iz čakalnih vrst novih kartic in kartic, predvidenih za ponavljanje, pri tem pa ohranite njegovo vsebino, oznake, povezave in zgodovino.

[Pogledi kompletov](https://mochi.cards/docs/decks/custom-views/) so shranjene kombinacije filtrov, razvrščanja in postavitve. Za običajno brskanje lahko ohranite mrežo, nato pa ustvarite drug pogled za oznako, rok ponavljanja, nizko stopnjo pomnjenja ali nedavno ponavljanje. Mochi omogoča tudi intenzivno učenje iz izbranega pogleda, ne da bi spremenil običajni razpored ali zgodovino ponavljanja. To je konkretneje kot trditev, da je vmesnik »pregleden«: isti komplet lahko deluje kot zvezek, filtrirana podatkovna zbirka in čakalna vrsta za učenje.

[Dnevno ponavljanje](https://mochi.cards/docs/getting-started/reviewing-cards/) ima dve stopnji. V razdelku **New cards** (Nove kartice) kartico dodate v razpored ponavljanja ali izberete Again (Znova), da jo kmalu spet vidite. Ko je kartica naučena in pride na vrsto za ponavljanje, razkrije naslednjo stran in zahteva izbiro **Forgot** (Pozabil sem) ali **Remembered** (Spomnim se). Če odgovor pozabite, Mochi pred ponastavitvijo napredka uporabi čakalno vrsto za ponovno ponavljanje. Odločitev med ponavljanjem je tako namenoma omejena.

## Ali je Mochi brezplačen in kaj deluje brez povezave?

Da, vendar »brezplačno« in »brez povezave« pomenita različne stvari glede na to, kje ga uporabljate. [Mochijev cenik](https://mochi.cards/) navaja:

- **Brezplačni paket (Free):** 0 USD za vedno, brez obvezne registracije, z neomejeno uporabo brez povezave.
- **Pro:** 5 USD na mesec, kar doda sinhronizacijo med napravami, objavljanje kompletov, dinamična polja, integracijo z umetno inteligenco (UI) in podporo po e-pošti.

Mochi deluje v sistemih macOS, Windows, Linux, iOS in Android ter na spletu. Njegov [vodnik za prenos in namestitev](https://mochi.cards/docs/getting-started/download-and-install/) pojasni praktične omejitve:

| Okolje | Kaj pomenita brezplačna uporaba in delo brez povezave |
|---|---|
| Nameščena namizna ali mobilna aplikacija | Mochi lahko uporabljate brez povezave in brez računa. Podatki so shranjeni v napravi, zato lahko ena nameščena aplikacija zadošča za povsem brezplačno delo. |
| Spletna aplikacija brez paketa Pro | Vsebina je shranjena v brskalnikovem pomnilniku za delo brez povezave. Mochi opozarja, da lahko brskalnik te podatke izbriše brez opozorila. |
| Ista zbirka na več napravah | Samodejna sinhronizacija med napravami je funkcija paketa Pro, čeprav lahko vsaka nameščena aplikacija deluje brez povezave. |

Uporaba brez povezave in sinhronizacija sta ločeni funkciji. Paketa Pro ne potrebujete zgolj za ustvarjanje ali ponavljanje v preneseni aplikaciji. Potrebujete ga, če vam mora ista posodobljena zbirka samodejno slediti s prenosnika na telefon. Za pomembne podatke v brezplačnem paketu hranite varnostno kopijo v lastnem formatu aplikacije, namesto da bi napravo, zlasti pa brskalnikov pomnilnik, obravnavali kot edino kopijo.

Če je delovanje brez povezave odločilno, primerjajte natančen način dela na svojih napravah v članku [Ali Anki deluje brez povezave?](/blog/does-anki-work-offline/) in širšem [vodniku po aplikacijah za učne kartice brez povezave](/blog/best-offline-flashcards-app/).

## Učne kartice v Markdownu so pravi razlog za izbiro Mochija

Mochijeva prava prednost je v tem, kako Markdown spremeni izvorno gradivo, ki ga vzdržujete.

Mochijeva kartica ostane berljiva kot besedilo. Isti dokument lahko vsebuje kratko razlago, blok kode, povezave do sorodnih zamisli in ločila med stranmi za ponavljanje. Kartice lahko uporabljajo tudi polja in predloge, kadar je pomembna ponavljajoča se struktura. Ko uporabite predlogo, Mochi prikaže njen Markdown in nadomestne oznake zamenja z vrednostmi polj. Lastni Markdown kartice pri prikazu prezre, ne da bi ga izbrisal.

Anki izhaja iz drugačnega modela. Zapisek hrani polja, [predloge kartic](https://docs.ankiweb.net/templates/intro.html) pa določajo, katera polja se prikažejo in katere kartice nastanejo. Predloge uporabljajo HTML, za oblikovanje pa CSS. En zapisek za besedišče lahko zato ustvari kartice za prepoznavanje in samostojni priklic besede, pri čemer osnovni podatki ostanejo na enem mestu.

Ta struktura daje Ankiju več možnosti za pogojne postavitve, ustvarjene različice kartic, vtipkane odgovore, oblikovanje po meri in načine dela, razširjene z dodatki. Pomeni tudi, da Anki ni aplikacija z izvorno podporo za učne kartice v Markdownu. Delo z Markdownom v Ankiju zahteva dodatno pretvorbo ali dodatek.

Praktično vprašanje je preprosto: želite zapisek, ki lahko postane kartica, ali strukturirano vrsto zapiska, ki lahko ustvari več kartic? Mochi je prilagojen prvemu. Anki drugemu.

## Mochijevo časovno razmaknjeno ponavljanje zdaj vključuje FSRS

Primerjave, ki trdijo, da Mochi ne podpira FSRS, so zastarele. Mochi je leta 2025 dodal predogledno različico FSRS in odtlej izdajal popravke razporejevalnika. Kljub temu [Mochijev lastni algoritem ostaja privzet](https://mochi.cards/docs/reviewing/fsrs/).

Privzeti algoritem spreminja intervale s stalnimi množitelji po vsakem ponavljanju, pri katerem se odgovora spomnite ali ga pozabite. V nastavitvah ponavljanja (Review Settings) preklopite na FSRS in obstoječe naučene kartice preidejo nanj brez izgube zgodovine. Nastavite lahko ciljno stopnjo pomnjenja, vnesete parametre po meri in pozneje preklopite nazaj.

Mochi pri obeh razporejevalnikih ohrani dve oceni:

- **Forgot** (Pozabil sem) ustreza oceni FSRS Again (Znova).
- **Remembered** (Spomnim se) ustreza oceni FSRS Good (Dobro).

Mochijeva dokumentacija pravi, da ocenjevanje z dvema možnostma deluje s FSRS, vendar izgubi del informacij, ki bi jih dali oceni Hard (Težko) in Easy (Lahko). Sprejme optimizirane parametre po meri, nima pa vgrajenega optimizatorja; za izračun osebnih parametrov potrebujete zunanji optimizator FSRS in Mochijevo zgodovino ponavljanja.

[Ankijeve nastavitve FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) ponujajo več. Želeno stopnjo pomnjenja in parametre lahko povežete s prednastavitvami, vgrajeni optimizator lahko parametre prilagodi zgodovini ponavljanja, simulator pa oceni število ponovitev ali minute učenja pri različnih nastavitvah. Anki beleži tudi štiri izide: Again (Znova), Hard (Težko), Good (Dobro) in Easy (Lahko).

Dodatni gumbi pomagajo le, če jih uporabljate dosledno. Ankijev priročnik oceno Hard obravnava kot uspešen priklic. Če izberete Hard, ko ste odgovor pozabili, FSRS sporočite napačen podatek, kar lahko privede do predolgih intervalov.

Izberite Mochijevo ponavljanje z dvema ocenama, če izbira med uspešnim in neuspešnim priklicem ohranja učenje pregledno. Izberite Anki, če želite dodatne podatke iz ocen in boste uporabljali njegov optimizator, nastavitve pomnjenja, prednastavitve ali simulator učne obremenitve. Če vas zanima primerjava algoritmov za razporejanje, si oglejte [FSRS v primerjavi s SM-2](/blog/fsrs-vs-sm-2/).

## Pri Mochiju in Ankiju plačujete različne stvari

Za učenje na enem računalniku sta lahko obe aplikaciji brezplačni. Ko vključite več naprav, se strošek pojavi na različnih mestih.

Mochi zaračuna **5 USD na mesec** za sinhronizacijo Pro ter jo združi z objavljanjem, dinamičnimi polji, integracijo z UI in podporo. Ankijeve namizne aplikacije so brezplačne, [uradno Ankijevo spletno mesto](https://apps.ankiweb.net/) pa sinhronizacijo AnkiWeb opisuje kot brezplačno. AnkiMobile je plačljiva uradna aplikacija za iPhone in iPad; AnkiDroid je brezplačen, neodvisno razvit odjemalec za Android.

Odgovor na vprašanje »Kateri je cenejši?« je zato odvisen od vaših naprav:

- en računalnik: oba sta lahko brezplačna;
- več računalnikov ali naprav Android: Ankijeva brezplačna gostovana sinhronizacija ne zahteva naročnine;
- iPhone ali iPad: Anki doda enkratni nakup aplikacije, Mochi pa sinhronizacijo med napravami veže na redno plačevanje paketa Pro;
- uporabniki Mochija, ki že želijo objavljanje, dinamična polja ali njegovo integracijo z UI, lahko sinhronizacijo vidijo kot del paketa in ne kot edini razlog za strošek.

Pred primerjavo natančnih skupnih stroškov za iOS preverite regionalno trgovino App Store. V tem pregledu ne navajam točne cene aplikacije, saj se lahko razlikuje glede na trg.

## Gostovanje Mochija ni isto kot uporaba lokalnih podatkov

Tri oznake se pogosto združujejo v eno:

- **Prednost lokalnim podatkom (local-first)** pomeni, da je delovna kopija v vaši napravi in da lahko aplikacija deluje brez svoje storitve v oblaku.
- **Odprta koda** pomeni, da je izvorna koda na voljo pod licenco, ki dovoljuje pregledovanje in spreminjanje.
- **Lastno gostovanje** pomeni, da je v dokumentaciji izdelka opisan podprt način zagona ustrezne storitve na vaši infrastrukturi.

Mochi jasno dokumentira delovanje z lokalnimi podatki. Svoje osnovne aplikacije ne predstavlja kot odprtokodne: povezava »Open source« v nogi njegovega javnega spletnega mesta vodi do [zbirke integracij](https://github.com/mochi-cards/open-source), ne do osnovne aplikacije. Njegovo uradno spletno mesto tudi ne dokumentira podprte zamenjave za sinhronizacijo Pro, ki bi jo gostovali sami.

Če iščete **gostovanje Mochija**, ker želite lasten strežnik, je meja naslednja: lahko hranite lokalne podatke in varnostne kopije v lastnem formatu, dokumentirana možnost sinhronizacije med napravami pa je Mochi Pro. Lokalno shranjevanje daje uporaben nadzor nad podatki; ne pomeni lastnega gostovanja.

Ankijev glavni repozitorij ima [licenco AGPL različice 3 ali novejše](https://github.com/ankitects/anki/blob/main/LICENSE), z navedenimi izjemami za nekatere komponente. Uradni priročnik za napredne uporabnike dokumentira tudi [strežnik za sinhronizacijo z lastnim gostovanjem](https://docs.ankiweb.net/sync-server.html). Ta strežnik pri združljivih odjemalcih nadomesti sinhronizacijo AnkiWeb; ni kopija spletnega mesta AnkiWeb na lastnem strežniku. Anki pričakuje, da bo njegov upravljavec reševal težave z ukazno vrstico, omrežjem, požarnim zidom, protokolom in posodobitvami.

## Kaj uvoz iz Ankija ohrani in kaj spremeni

Mochijeva [dokumentacija za uvoz](https://mochi.cards/docs/import-and-export/importing/) navaja podporo za Ankijeve datoteke `.apkg`, vključno z zgodovino ponavljanja. Toda »uvoženo« in »enakovredno« ne pomenita istega rezultata.

Med uvozom Mochi pretvori HTML v Markdown ter odstrani CSS in JavaScript. Gre za pretvorbo formata med dvema različnima modeloma kartic. Preprosto gradivo s sprednjo in zadnjo stranjo je najlažji primer. Kartico, ki je odvisna od oblikovanja, logike predloge, vtipkavanja odgovorov ali JavaScripta, morate po uvozu pregledati.

Za zgodovino ponavljanja morate izrecno izbrati ustrezno možnost izvoza. Ankijev [priročnik za izvoz](https://docs.ankiweb.net/exporting.html) pravi, da **Include Scheduling Information** (Vključi podatke o razporedu ponavljanja) določa, ali paket vsebuje zgodovino ponavljanja. Če možnost izklopite, Mochi ne more obnoviti zgodovine, ki je `.apkg` nikoli ni vseboval.

Tudi če se zgodovina prenese, ne pričakujte enakih prihodnjih datumov ponavljanja. Aplikaciji lahko uporabljata različne razporejevalnike, ocene, ciljne stopnje pomnjenja, parametre, korake učenja in nastavitve kompletov. Ohranjena zgodovina daje novemu razporejevalniku podatke za izračun; zaradi nje sistema še ne delujeta enako.

## Varnostne kopije v lastnem formatu in besedilni izvozi služijo različnim namenom

Preden kar koli premaknete, shranite varnostno kopijo, s katero lahko obnovite izvirni sistem. Berljiv izvoz je uporaben, vendar z njim ni vedno mogoče obnoviti vsega.

Mochijev [vodnik za varnostno kopiranje](https://mochi.cards/docs/getting-started/backing-up/) dokumentira dve možnosti za ohranitev izvirnih podatkov:

- Kopiranje celotne uporabniške mape ohrani vsebino, zgodovino ponavljanja, priloge, nastavitve aplikacije in stanje prijave.
- Izvoz `.mochi` ohrani komplete, kartice, predloge in polja, priloge, oznake in metapodatke, zgodovino ponavljanja, vrstni red kartic ter strukturo kompletov.

Mochijeva [izvoza v Markdown in CSV](https://mochi.cards/docs/import-and-export/exporting/) sta namenjena prenosljivosti. Markdown ustvari eno datoteko za vsako kartico in mape za podkomplete, vendar izpusti zgodovino ponavljanja, vrstni red kartic, predloge in metapodatkovne oznake, razen če so oznake zapisane v Markdownu. CSV lahko izvozi polja predlog ali prikazano sprednjo in zadnjo stran, ne ohrani pa zgodovine ponavljanja, predlog ali metapodatkovnih oznak, razen če so oznake vključene v vsebino.

Anki podobno ločuje med formati:

- `.colpkg` izvozi celotno zbirko z razporedom ponavljanja in lahko vključuje predstavnostne datoteke. Uvoz nadomesti kartice v ciljni Ankijevi zbirki.
- `.apkg` izvozi en komplet in njegove podkomplete, z možnostmi vključitve podatkov o razporedu ponavljanja, prednastavitev in predstavnostnih datotek.
- Zapiski v navadnem besedilu uporabljajo polja, ločena s tabulatorji, z vključenim oblikovanjem HTML. Ohranijo vsebino, ki jo lahko urejate, ne pa celotnega delovanja zbirke.

Za vrnitev iz Mochija v Anki običajno uporabite CSV. Anki lahko [poveže besedilne stolpce s polji zapiskov](https://docs.ankiweb.net/importing/text-files.html), vendar Mochijeve povezave, delovanje kartic z več stranmi, predloge in zgodovina ponavljanja prek te datoteke ne postanejo enakovredni objekti v Ankiju. Izvoz `.mochi` obdržite tudi po tem, ko je kopija v Ankiju videti pravilna.

## Preizkusite reprezentativen komplet tako, da se lahko vrnete nazaj

Potrditev uvoza v pogovornem oknu dokazuje le, da je bila datoteka sprejeta. Ne dokazuje, da vaša dejanska zbirka še vedno deluje ali da lahko uporabno vsebino prenesete nazaj. Preizkusite obe smeri, medtem ko vaš običajni profil v Ankiju ostane nedotaknjen.

1. **Varnostno kopirajte celotno zbirko v Ankiju.** Izvozite `.colpkg` s predstavnostnimi datotekami in ga shranite zunaj delovnega profila.
2. **Preverite, da se varnostna kopija odpre.** Ustvarite prazen začasni profil v Ankiju in vanj uvozite `.colpkg`. Uvoz paketa celotne zbirke nadomesti ciljno zbirko, zato je začasni profil pomemben.
3. **V začasnem profilu sestavite reprezentativen komplet.** Naj bo dovolj majhen, da pregledate vsako kartico, vendar vključite funkcije, na katere se zanašate: osnovne in obrnjene kartice, kartice z izpuščenim besedilom, predloge po meri, CSS, JavaScript, slike, zvok, enačbe, oznake, ugnezdene komplete in zgodovino ponavljanja.
4. **Komplet izvozite kot `.apkg`.** Vključite podatke o razporedu ponavljanja, prednastavitve in predstavnostne datoteke, kadar so pomembni. Te možnosti podatke vključijo v Ankijev paket; ne zagotavljajo, da bo Mochi poustvaril vsako nastavitev.
5. **Uvozite v nov Mochijev komplet.** Svoj vsakdanji profil v Ankiju in njegovo čakalno vrsto za ponavljanje pustite nespremenjena.
6. **Pred ponavljanjem preglejte uvoz.** Primerjajte vsebino, oblikovanje, polja, predstavnostne datoteke, oznake, strukturo kompletov in zgodovino. Posebej preverite vse, kar je bilo odvisno od HTML, CSS, JavaScripta ali ustvarjenih različic kartic.
7. **Razporejevalnik izberite zavestno.** Mochi začne s svojim algoritmom. FSRS vklopite le, če ga nameravate uporabljati po preizkusu.
8. **En običajen teden ponavljajte kartice iz kopije.** Ocenite urejanje v Markdownu, fazo novih kartic, izbiro Spomnim se/Pozabil sem, delovanje brez povezave in, če ste jo plačali, sinhronizacijo na napravah, ki jih dejansko nosite s seboj.
9. **Preizkusite pot nazaj.** Mochijev preizkusni komplet izvozite kot `.mochi` za varnostno kopijo v lastnem formatu in kot CSV za Anki. Kadar so pomembna polja za ponovno uporabo, uporabite CSV z vrednostmi polj; kadar potrebujete predvsem vidno vsebino sprednje in zadnje strani, uporabite CSV s prikazanimi stranmi. Ta CSV uvozite v drug prazen profil v Ankiju in njegove stolpce povežite z ustrezno vrsto zapiska.
10. **Zapišite vsako izgubo, ki jo sprejmete.** Ločeno preverite prenos v Mochi in vrnitev. Natančno oblikovanje, delovanje kartic z več stranmi, dodatki, ustvarjene različice, ocene pri ponavljanju, zgodovina ali prihodnji datumi ponavljanja so lahko pri vsakdanji uporabi pomembnejši, kot so bili v primerjalni tabeli.

Vrnitev prek CSV prenese vsebino, ne obnovi pa celotnega Mochija: ne vsebuje zgodovine ponavljanja, predlog ali metapodatkovnih oznak, razen če so oznake vključene v vsebino. Če Mochi ne reši težave, zaradi katere ste ga preizkusili, izbrišite preizkusni komplet in nadaljujte z izvirnim profilom v Ankiju. Če jo reši, prenašajte po en dejanski komplet naenkrat ter Ankijevo varnostno kopijo `.colpkg` in Mochijevo `.mochi` ohranite skozi več običajnih ciklov ponavljanja.

## Komu ustrezajo učne kartice Mochi?

Mochi je dobra izbira, kadar:

- že pišete in razmišljate v Markdownu;
- zapiski in kartice za ponavljanje sodijo v isti povezani delovni prostor;
- želite preprosto izbiro Spomnim se/Pozabil sem namesto štirih ocen;
- uporaba brez povezave na eni napravi zadošča za brezplačno delo ali pa je sinhronizacija Pro vredna 5 USD na mesec;
- je vaša zbirka nova ali dovolj preprosta, da pretvorba iz Ankija pomeni majhno tveganje.

Ostanite pri Ankiju, kadar:

- vaše vrste zapiskov ustvarjajo več pomembnih različic kartic;
- so predloge HTML/CSS, JavaScript, dodatki ali deljeni kompleti del vašega sistema;
- je brezplačna sinhronizacija med napravami pomembnejša od pisanja v Markdownu;
- želite Ankijev optimizator FSRS, upravljanje prednastavitev, štiri ocene in simulator učne obremenitve;
- vam dolgoletna zgodovina ponavljanja in prilagojene funkcije že dobro služijo.

Najbolj smiselna alternativa Mochiju je odvisna od tega, zakaj vam ne ustreza nobena od teh možnosti. Za novo, preprostejšo zbirko [Nibomo](/sl/features/) ponuja ponavljanje s FSRS, učenje brez povezave in sinhronizacijo, prenos kartic, oznak in predstavnostnih datotek, dostop za agente ter dokumentirano možnost lastnega gostovanja. Razvijam ga in pri izbiri je treba upoštevati njegove omejitve: ne nadomesti Mochijevega povezanega zvezka v Markdownu ali Ankijevega uveljavljenega sistema predlog in dodatkov. [Vodnik za začetek](/docs/getting-started/) prikazuje trenutne možnosti gostovane in mobilne uporabe, dostopa za agente ter lastnega gostovanja.

## Končna presoja

Mochi je več kot lepši vmesnik za Anki. Njegova osnovna zamisel je, da je lahko isti zapis hkrati zapisek v Markdownu, del povezanega znanja in kartica za časovno razmaknjeno ponavljanje. Brezplačni paket pokriva delo brez računa in brez povezave; Pro doda gostovane funkcije, vključno s sinhronizacijo med napravami.

To je smiselna izbira za nekoga, ki začenja novo zbirko s poudarkom na Markdownu. Tudi prehod iz Ankija je lahko vreden truda, če preizkus reprezentativnega kompleta pokaže, da izvorna podpora Markdownu in ponavljanje z dvema ocenama odpravita dejanske ovire pri delu.

Za dolgoletnega uporabnika Ankija mora biti razlog za prehod bolj prepričljiv. Varnostno kopirajte zbirko, preizkusite kartice z največ prilagojenimi funkcijami in ostanite pri Ankiju, razen če Mochi dovolj izboljša vsakotedensko delo, da upraviči opustitev konkretnih možnosti oblikovanja, predlog, razporejevalnika in ekosistema.
