---
title: "Recenzija Mochijevih kartica za učenje (2026.): besplatni plan, rad bez interneta i usporedba s Ankijem"
description: "Recenzija Mochija provjerena prema izvorima: besplatni plan, rad aplikacija bez interneta, bilješke u Markdownu, FSRS, sinkronizacija, uvoz iz Ankija, izvoz i ograničenja vlastitog hostinga."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "Mochi kartice za učenje"
  - "Mochi kartice"
  - "Mochi ili Anki"
  - "Anki ili Mochi"
  - "je li Mochi besplatan"
  - "Mochi bez interneta"
  - "Mochi cijena"
  - "Mochi hosting"
  - "kartice za učenje u Markdownu"
  - "Mochi razmaknuto ponavljanje"
---

Mochi počinje dokumentom u Markdownu, a ne uobičajenim obrascem za prednju i stražnju stranu kartice. Dodajte redak s tri crtice i dokument dobiva strane za ponavljanje. Ostavite ga kao bilješku, povežite ga s drugom karticom ili ga arhivirajte kako bi ostao pretraživ bez ulaska u red za ponavljanje.

Taj mali razdjelnik objašnjava kome odgovaraju **Mochijeve kartice za učenje**. Mochi je dobar izbor za nekoga tko želi bilješke i razmaknuto ponavljanje u istoj aplikaciji koja podatke primarno čuva lokalno, osobito ako mu odgovaraju Markdown, povratne poveznice i jednostavan odabir Sjetio sam se / Zaboravio sam pri ponavljanju. Manje je uvjerljiv za dugogodišnjeg korisnika Ankija čija kolekcija ovisi o generiranim varijantama kartica, prilagođenom HTML-u i CSS-u, JavaScriptu, dodacima ili detaljnim postavkama raspoređivanja ponavljanja.

Za rad na jednom uređaju besplatni plan nudi više od probne verzije: registracija nije potrebna, a Mochi dokumentira neograničeno korištenje bez interneta. Kvaka je u tome što je sinkronizacija između uređaja dio **plana Pro za 5 USD mjesečno**. Za korisnika Ankija veći su trošak gubici pri prijenosu. Mochi može uvesti paket iz Ankija i njegovu povijest ponavljanja, ali ne može sačuvati svaki predložak, stil, skriptu, postavku raspoređivanja ni ponašanje dodataka.

> **Napomena o autoru:** Ja sam Kirill Markin i razvijam [Nibomo](/hr/). Ovo je recenzija načina rada provjerena prema izvorima, a ne tvrdnja da sam osobno testirao proizvod. Nema poveznica od kojih zarađujem proviziju. Glavna usporedba ostaje između Mochija i Ankija; moj se proizvod pojavljuje tek pri kraju kao jasno označena alternativa.

**Činjenice provjerene:** 7. rujna 2026. Najnovije tada vidljivo [izdanje Mochija](https://mochi.cards/changelog/) bilo je 26.8.2, od 10. kolovoza 2026. Cijene i pojedinosti u trgovinama aplikacija mogu se promijeniti.

![Restaurator knjiga isprobava mali niz povezanih kartica složenih poput harmonike, dok izvorna arhiva ostaje sigurno spremljena u kutiji](/blog/mochi-alternative-v3.png)

## Kratka recenzija

- **Odaberite Mochi** ako želite bilješke u Markdownu i kartice na jednom mjestu, rad bez interneta i računa na jednom uređaju, povratne poveznice te odluku između dviju ocjena pri ponavljanju.
- **Odaberite Anki** ako trebate razrađene tipove bilježaka, HTML/CSS predloške, dodatke, besplatnu sinkronizaciju u oblaku, četiri ocjene pri ponavljanju ili detaljnije postavke FSRS-a.
- **Još nemojte prijeći** ako već redovito ponavljate i ne možete navesti konkretan problem u radu koji bi Mochi riješio. Novo sučelje nije dovoljan razlog da ugrozite godine podataka o rasporedu ponavljanja i prilagođene kartice.
- **Isprobajte prije prijenosa** ako svoju kolekciju već godinama čuvate u Ankiju. Mochi prihvaća datoteke `.apkg` i može prenijeti povijest ponavljanja, ali pretvara HTML u Markdown te uklanja CSS i JavaScript.

## Mochi i Anki na prvi pogled

| Kriterij | Mochi | Anki |
|---|---|---|
| Kome najviše odgovara | Korisnicima povezanih bilježaka i Markdowna koji žele bilješke uz kartice za ponavljanje | Onima koji žele razrađen, prilagodljiv sustav kartica za učenje |
| Izrada kartica | Dokument u Markdownu dobiva više strana kad dodate `---`; dostupna su i polja i predlošci | Bilješke sadrže polja; HTML/CSS predlošci generiraju jednu ili više kartica |
| Tijek ponavljanja | Nove kartice prvo prolaze fazu učenja; naučene kartice koriste Forgot / Remembered | Kartice koriste Again / Hard / Good / Easy |
| Raspoređivanje ponavljanja | Zadano koristi Mochijev vlastiti algoritam; FSRS je opcionalan | FSRS ili stariji SM-2, uz šire mogućnosti podešavanja FSRS-a |
| Besplatno korištenje | Bez registracije i uz neograničen rad bez interneta | Besplatne aplikacije za računala i besplatna sinkronizacija putem AnkiWeba; službena aplikacija za iOS se plaća |
| Sinkronizacija između uređaja | Pro, 5 USD mjesečno | Besplatno putem AnkiWeba |
| Platforme | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, službeni AnkiMobile, neovisni AnkiDroid |
| Formati za prijenos | Izvoz u izvorni format `.mochi`, Markdown i CSV | Izvorni formati `.colpkg` i `.apkg` te tekst s poljima odvojenima tabulatorima |
| Podaci i granice hostinga | Podaci se primarno čuvaju lokalno; osnovna aplikacija nije predstavljena kao aplikacija otvorenog koda i nije dokumentirana podržana usluga sinkronizacije na vlastitom poslužitelju | Glavni repozitorij koristi licencu AGPL; dokumentiran je službeni poslužitelj za sinkronizaciju na vlastitoj infrastrukturi |

Ključna je razlika između **jednostavnosti rada usmjerenog na bilješke i kontrole nad cijelom kolekcijom**.

## Na čemu se temelji Mochijevo sučelje

Mochijevo sučelje postaje jasnije kad kroz njega pratite jednu karticu.

Svaka kartica pripada špilu. Kliknite **New Card** (Nova kartica) i dobit ćete prostor za Markdown umjesto fiksnih polja za pitanje i odgovor. Jedna kartica može sadržavati naslove, popise, kod, slike, strukturirana polja i poveznice. Dodajte `---` između blokova kako biste izradili dvije ili više strana za ponavljanje. Dodajte `[[double brackets]]`, odnosno dvostruke uglate zagrade, za upućivanje na drugu karticu; Mochi automatski stvara povratnu poveznicu. Službeni [pregled kartica](https://mochi.cards/docs/cards/) opisuje i predloške u kojima se rezervirana mjesta popunjavaju vrijednostima strukturiranih polja.

Kartice mogu imati dvije uloge bez razdvajanja u zasebne sustave:

- kartica za ponavljanje koristi strane i ulazi u razmaknuto ponavljanje;
- referentna bilješka može ostati u istom špilu i biti arhivirana, čime se uklanja iz redova novih kartica i kartica dospjelih za ponavljanje bez brisanja sadržaja, oznaka, poveznica ili povijesti.

[Prikazi špilova](https://mochi.cards/docs/decks/custom-views/) spremljene su kombinacije filtara, sortiranja i rasporeda prikaza. Možete zadržati mrežu za uobičajeno pregledavanje, a zatim izraditi drugi prikaz prema oznaci, dospjelosti za ponavljanje, niskoj stopi prisjećanja ili nedavnom ponavljanju. Mochi omogućuje i pretvaranje prikaza u sesiju intenzivnog ponavljanja bez promjene uobičajenog rasporeda ili povijesti ponavljanja. To je konkretnije od opisa sučelja kao „preglednog”: isti špil može služiti kao bilježnica, filtrirana baza podataka i red za učenje.

[Svakodnevno ponavljanje](https://mochi.cards/docs/getting-started/reviewing-cards/) ima dvije faze. U fazi **New cards** (Nove kartice) karticu dodajete u raspored ponavljanja ili odabirete Again (Ponovno) kako biste je ubrzo opet vidjeli. Kad je naučite, kartica dospjela za ponavljanje otkriva sljedeću stranu i traži odabir **Forgot** (Zaboravio sam) ili **Remembered** (Sjetio sam se). Ako je zaboravite, Mochi je stavlja u red za dodatno ponavljanje prije nego što poništi napredak. Time se odluka tijekom ponavljanja namjerno svodi na mali broj mogućnosti.

## Je li Mochi besplatan i što radi bez interneta?

Da, ali „besplatno” i „bez interneta” znače različite stvari ovisno o tome gdje ga koristite. [Mochijev trenutačni cjenik](https://mochi.cards/) navodi:

- **Free:** 0 USD zauvijek, bez obvezne registracije i uz neograničen rad bez interneta.
- **Pro:** 5 USD mjesečno, uz sinkronizaciju između uređaja, objavljivanje špilova, dinamička polja, integraciju AI-ja i podršku e-poštom.

Mochi radi na sustavima macOS, Windows, Linux, iOS i Android te na webu. Njegov [vodič za preuzimanje i instalaciju](https://mochi.cards/docs/getting-started/download-and-install/) određuje praktičnu granicu:

| Okruženje | Što znače besplatno korištenje i rad bez interneta |
|---|---|
| Instalirana aplikacija za računalo ili mobitel | Mochi možete koristiti bez interneta i računa. Podaci se pohranjuju na uređaju, pa u jednoj instaliranoj aplikaciji možete obaviti sve što vam treba za besplatno učenje. |
| Web-aplikacija bez plana Pro | Sadržaj se čuva u izvanmrežnoj pohrani preglednika. Mochi upozorava da preglednik te podatke može obrisati bez upozorenja. |
| Ista kolekcija na više uređaja | Automatska sinkronizacija između uređaja značajka je plana Pro, iako svaka instalirana aplikacija može raditi bez interneta. |

Rad bez interneta i sinkronizacija dva su odvojena obećanja. Pro vam nije potreban samo za izradu ili ponavljanje kartica u preuzetoj aplikaciji. Potreban je ako ista ažurna kolekcija mora automatski biti dostupna na prijenosnom računalu i telefonu. Za važne podatke u besplatnom planu čuvajte sigurnosnu kopiju u izvornom formatu umjesto da uređaj, a posebno pohranu preglednika, smatrate jedinom kopijom.

Ako je rad bez interneta presudan, usporedite konkretan način rada na svojim uređajima u članku [Radi li Anki bez interneta?](/blog/does-anki-work-offline/) i širem [vodiču za aplikacije s karticama za učenje bez interneta](/blog/best-offline-flashcards-app/).

## Kartice u Markdownu pravi su razlog za odabir Mochija

Mochijeva je glavna prednost način na koji Markdown mijenja izvorni materijal koji uređujete.

Mochijeva kartica ostaje čitljiva kao tekst. Isti dokument može sadržavati kratko objašnjenje, blok koda, poveznice na povezane ideje i razdjelnike između strana za ponavljanje. Kartice mogu koristiti i polja i predloške kada je važna struktura koja se ponavlja. Kad primijenite predložak, Mochi prikazuje njegov Markdown s rezerviranim mjestima za polja, a pri prikazu zanemaruje Markdown same kartice, bez njegova brisanja.

Anki polazi od drukčijeg modela. Bilješka pohranjuje polja, a [predlošci kartica](https://docs.ankiweb.net/templates/intro.html) određuju koja se polja prikazuju i koje se kartice generiraju. Predlošci koriste HTML, uz CSS za oblikovanje. Jedna bilješka za učenje riječi tako može generirati kartice za prepoznavanje i samostalno prisjećanje riječi, a da temeljni podaci ostanu na jednom mjestu.

Ta struktura Ankiju daje više mogućnosti za uvjetne rasporede prikaza, generirane varijante kartica, upisivanje odgovora, prilagođeno oblikovanje i načine rada proširene dodacima. Ujedno znači da Anki nije aplikacija za kartice s izvornom podrškom za Markdown. Rad s Markdownom u Ankiju zahtijeva dodatni sloj pretvorbe ili dodatak.

Praktično je pitanje jednostavno: želite li bilješku koja može postati kartica ili strukturirani tip bilješke koji može generirati više kartica? Mochi je prilagođen prvome. Anki drugome.

## Mochijevo razmaknuto ponavljanje sada uključuje FSRS

Usporedbe koje tvrde da Mochi nema FSRS zastarjele su. Mochi je dodao probnu podršku za FSRS 2025. i nastavio objavljivati ispravke povezane s raspoređivanjem. Ipak, [Mochijev vlastiti algoritam ostaje zadani](https://mochi.cards/docs/reviewing/fsrs/).

Zadani algoritam mijenja razmake fiksnim množiteljima nakon svakog ponavljanja u kojem ste se sjetili odgovora ili ga zaboravili. Uključite FSRS u odjeljku Review Settings (Postavke ponavljanja) i već naučene kartice prijeći će na FSRS bez gubitka povijesti. Možete postaviti ciljanu stopu prisjećanja, unijeti prilagođene parametre i poslije se vratiti na prethodni algoritam.

Mochi zadržava dvije ocjene uz oba algoritma:

- **Forgot** odgovara FSRS-ovoj ocjeni Again (Ponovno).
- **Remembered** odgovara FSRS-ovoj ocjeni Good (Dobro).

Mochijeva dokumentacija navodi da ocjenjivanje s dvije mogućnosti radi s FSRS-om, ali gubi dio informacija koje bi pružile ocjene Hard (Teško) i Easy (Lako). Prihvaća optimizirane prilagođene parametre, no nema ugrađeni optimizator; izračun parametara prilagođenih vašem učenju zahtijeva vanjski optimizator za FSRS i Mochijevu povijest ponavljanja.

[Ankijeve postavke FSRS-a](https://docs.ankiweb.net/deck-options.html#fsrs) idu dalje. Željena stopa prisjećanja i parametri mogu se vezati uz skupove postavki, ugrađeni optimizator može prilagoditi parametre povijesti ponavljanja, a simulator procjenjuje broj ponavljanja ili minute učenja pri različitim postavkama. Anki bilježi i četiri ishoda: Again, Hard, Good i Easy.

Ti dodatni gumbi pomažu samo ako ih koristite dosljedno. Ankijev priručnik ocjenu Hard tretira kao uspješno prisjećanje. Ako pritisnete Hard kad ste zaboravili odgovor, FSRS dobiva pogrešnu informaciju i može postaviti preduge razmake.

Odaberite Mochijevo ponavljanje s dvije ocjene ako vam odluka znam / ne znam olakšava učenje. Odaberite Anki ako želite dodatne informacije iz ocjena i koristit ćete njegov optimizator, postavke ciljane stope prisjećanja, skupove postavki ili simulator opterećenja. Za usporedbu algoritama umjesto aplikacija pogledajte [FSRS i SM-2](/blog/fsrs-vs-sm-2/).

## Mochi i Anki naplaćuju različite dijelove korištenja

Za učenje na jednom računalu obje aplikacije mogu biti besplatne. Kad uključite više uređaja, trošak se pojavljuje na različitim mjestima.

Mochi naplaćuje **5 USD mjesečno** za sinkronizaciju u planu Pro, zajedno s objavljivanjem, dinamičkim poljima, integracijom AI-ja i podrškom. Ankijeve aplikacije za računala besplatne su, a [službena Ankijeva stranica](https://apps.ankiweb.net/) navodi da je sinkronizacija putem AnkiWeba besplatna. AnkiMobile je službena plaćena aplikacija za iPhone i iPad; AnkiDroid je besplatan, neovisno razvijen klijent za Android.

Zato odgovor na pitanje „Što je jeftinije?” ovisi o vašim uređajima:

- jedno računalo: obje aplikacije mogu biti besplatne;
- više računala ili Android uređaja: Ankijeva besplatna sinkronizacija u oblaku uklanja potrebu za pretplatom;
- iPhone ili iPad: Anki dodaje jednokratnu kupnju aplikacije, dok Mochi sinkronizaciju između uređaja veže uz redovitu pretplatu Pro;
- korisnici Mochija koji već žele objavljivanje, dinamička polja ili njegovu integraciju AI-ja mogu sinkronizaciju smatrati jednim dijelom paketa, a ne cijelim troškom.

Provjerite regionalni App Store prije usporedbe točnih ukupnih troškova na iOS-u. Ova recenzija ne navodi fiksnu cijenu u trgovini aplikacija koja može ovisiti o tržištu.

## Mochijev hosting nije isto što i primarno lokalni rad

Tri se oznake često svode na jednu:

- **Primarno lokalni rad** znači da se radna kopija nalazi na vašem uređaju i da aplikacija može nastaviti raditi bez svoje usluge u oblaku.
- **Otvoreni kod** znači da je izvorni kod dostupan pod licencom koja dopušta pregled i izmjene.
- **Vlastiti hosting** znači da proizvod dokumentira podržan način pokretanja odgovarajuće usluge na vašoj infrastrukturi.

Mochi jasno dokumentira primarno lokalni rad. Osnovnu aplikaciju ne predstavlja kao aplikaciju otvorenog koda: poveznica „Open source” u podnožju njegove javne stranice vodi na [zbirku integracija](https://github.com/mochi-cards/open-source), a ne na samu aplikaciju. Njegova službena stranica također ne dokumentira podržanu zamjenu za sinkronizaciju Pro koju biste mogli pokrenuti na vlastitoj infrastrukturi.

Ako tražite **Mochi hosting** jer želite vlastiti poslužitelj, granica je sljedeća: možete zadržati lokalne podatke i sigurnosne kopije u izvornom formatu, ali dokumentirani put za rad na više uređaja jest Mochi Pro. Primarno lokalni rad daje korisnu kontrolu nad podacima; nije isto što i vlastiti hosting.

Ankijev glavni repozitorij [koristi licencu AGPL verzije 3 ili novije](https://github.com/ankitects/anki/blob/main/LICENSE), uz navedene iznimke za neke komponente. Službeni priručnik za napredne korisnike dokumentira i [poslužitelj za sinkronizaciju na vlastitoj infrastrukturi](https://docs.ankiweb.net/sync-server.html). Taj poslužitelj zamjenjuje sinkronizaciju putem AnkiWeba za kompatibilne klijente; nije kopija web-stranice AnkiWeb koju možete sami hostati, a Anki očekuje da administrator sam rješava pitanja naredbenog retka, mreže, vatrozida, protokola i ažuriranja.

## Što uvoz iz Ankija čuva, a što mijenja

Prema Mochijevoj [dokumentaciji o uvozu](https://mochi.cards/docs/import-and-export/importing/), prihvaćene su Ankijeve datoteke `.apkg`, uključujući povijest ponavljanja. No „uvezeno” i „jednako izvorniku” nisu isti rezultat.

Pri uvozu Mochi pretvara HTML u Markdown te uklanja CSS i JavaScript. To je pretvorba formata između dvaju različitih modela kartica. Jednostavan materijal s prednjom i stražnjom stranom najlakši je slučaj. Karticu koja ovisi o oblikovanju, logici predloška, upisivanju odgovora ili JavaScriptu treba pregledati nakon uvoza.

Povijest ponavljanja također zahtijeva izričit odabir pri izvozu. Ankijev [priručnik za izvoz](https://docs.ankiweb.net/exporting.html) navodi da opcija **Include Scheduling Information** (Uključi podatke o rasporedu ponavljanja) određuje ulazi li povijest ponavljanja u paket. Ako je isključite, Mochi ne može vratiti povijest koju `.apkg` nikad nije sadržavao.

Čak i kad se povijest prenese, ne očekujte jednake buduće datume ponavljanja. Dvije aplikacije mogu koristiti različite algoritme, ocjene, ciljanu stopu prisjećanja, parametre, korake učenja i postavke špilova. Sačuvani događaji daju novom algoritmu podatke za odlučivanje; ne čine sustave jednakima.

## Sigurnosne kopije u izvornom formatu i prenosivi tekst služe različitim svrhama

Prije bilo kakvog prijenosa spremite sigurnosnu kopiju iz koje možete obnoviti izvorni sustav. Izvoz koji možete pročitati kao tekst koristan je, ali ne omogućuje uvijek vraćanje izvornog sustava.

Mochijev [vodič za sigurnosne kopije](https://mochi.cards/docs/getting-started/backing-up/) dokumentira dva načina izrade sigurnosne kopije u izvornom obliku:

- Kopiranje cijelog korisničkog direktorija čuva sadržaj, povijest ponavljanja, privitke, postavke aplikacije i stanje prijave.
- Izvoz `.mochi` čuva špilove, kartice, predloške i polja, privitke, oznake i metapodatke, povijest ponavljanja, redoslijed kartica i strukturu špilova.

Mochijev [izvoz u Markdown i CSV](https://mochi.cards/docs/import-and-export/exporting/) služi prijenosu u druge sustave. Markdown stvara jednu datoteku po kartici i mape za podšpilove, ali izostavlja povijest ponavljanja, redoslijed kartica, predloške i oznake iz metapodataka, osim ako su oznake u samom Markdownu. CSV može izvesti polja predložaka ili prikazane prednje i stražnje strane, ali ne čuva povijest ponavljanja ni predloške, a oznake iz metapodataka čuva samo ako su ugrađene u sadržaj.

Anki radi sličnu razliku:

- `.colpkg` izvozi cijelu kolekciju s rasporedom ponavljanja i može uključivati medijske sadržaje. Njegov uvoz zamjenjuje kartice u ciljnoj Ankijevoj kolekciji.
- `.apkg` izvozi jedan špil i njegove podšpilove, uz opcije za podatke o rasporedu ponavljanja, skupove postavki i medijske sadržaje.
- Bilješke u običnom tekstu koriste polja odvojena tabulatorima s ugrađenim HTML oblikovanjem. Čuvaju sadržaj koji možete uređivati, a ne cjelokupno ponašanje kolekcije.

Povratak iz Mochija u Anki obično znači CSV. Anki može [povezati stupce teksta s poljima bilježaka](https://docs.ankiweb.net/importing/text-files.html), ali Mochijeve poveznice, ponašanje kartica s više strana, predlošci i povijest ponavljanja putem te datoteke ne postaju odgovarajući objekti u Ankiju. Zadržite izvoz `.mochi` i nakon što kopija u Ankiju izgleda ispravno.

## Provedite test s reprezentativnim špilom uz mogućnost povratka

Poruka o uspješnom prijenosu potvrđuje da je datoteka prihvaćena. Ne dokazuje da vaša stvarna kolekcija i dalje radi niti da možete vratiti upotrebljiv sadržaj. Testirajte oba smjera dok vaš uobičajeni profil u Ankiju ostaje netaknut.

1. **Napravite sigurnosnu kopiju cijelog Ankija.** Izvezite `.colpkg` s medijskim sadržajima i spremite ga izvan radnog profila.
2. **Provjerite da se sigurnosna kopija otvara.** Izradite prazan privremeni profil u Ankiju i ondje uvezite `.colpkg`. Uvoz paketa kolekcije zamjenjuje ciljnu kolekciju, zbog čega je privremeni profil važan.
3. **U tom privremenom profilu izradite reprezentativan špil.** Neka bude dovoljno malen da pregledate svaku karticu, ali uključite ponašanja na koja se oslanjate: osnovne i obrnute kartice, kartice s prazninama za dopunjavanje, prilagođene predloške, CSS, JavaScript, slike, zvuk, jednadžbe, oznake, ugniježđene špilove i povijest ponavljanja.
4. **Izvezite taj špil kao `.apkg`.** Uključite podatke o rasporedu ponavljanja, skupove postavki i medijske sadržaje kada su važni. Te opcije dodaju podatke u Ankijev paket; ne jamče da će Mochi reproducirati svaku postavku.
5. **Uvezite ga u novi Mochijev špil.** Ostavite profil u Ankiju koji svakodnevno koristite i njegov red dospjelih kartica nepromijenjenima.
6. **Pregledajte prije ponavljanja.** Usporedite sadržaj, oblikovanje, polja, medijske sadržaje, oznake, strukturu špilova i povijest. Posebno obratite pozornost na sve što je ovisilo o HTML-u, CSS-u, JavaScriptu ili generiranim varijantama kartica.
7. **Svjesno odaberite algoritam raspoređivanja.** Mochi počinje vlastitim algoritmom. Uključite FSRS samo ako ga namjeravate koristiti nakon isprobavanja.
8. **Ponavljajte kopiju jedan uobičajeni tjedan.** Procijenite uređivanje u Markdownu, fazu New cards, odluku Remembered / Forgot, rad bez interneta i, ako ste je platili, sinkronizaciju na uređajima koje stvarno nosite sa sobom.
9. **Testirajte povratak.** Izvezite probni Mochijev špil kao `.mochi` za sigurnosnu kopiju u izvornom formatu i kao CSV za Anki. Koristite CSV s vrijednostima polja kada su važna polja koja možete ponovno upotrijebiti; koristite CSV s prikazanim stranama kada vam prvenstveno treba vidljivi sadržaj prednje i stražnje strane. Uvezite taj CSV u drugi prazan profil u Ankiju i povežite njegove stupce s odgovarajućim tipom bilješke.
10. **Zapišite svaki gubitak koji prihvaćate.** Odvojeno provjerite prijenos i povratak. Točno oblikovanje, ponašanje kartica s više strana, ponašanje dodataka, generirane varijante, ocjene pri ponavljanju, povijest ili budući datumi ponavljanja mogu u svakodnevnom korištenju biti važniji nego u usporednoj tablici.

Povratak putem CSV-a prijenos je sadržaja, a ne potpuna obnova Mochija: ne prenosi povijest ponavljanja ni predloške, a oznake iz metapodataka prenosi samo ako su ugrađene u sadržaj. Ako Mochi ne rješava problem koji ste naveli, izbrišite probni špil i nastavite s izvornim profilom u Ankiju. Ako ga rješava, prenosite stvarne špilove jedan po jedan te čuvajte Ankijeve sigurnosne kopije `.colpkg` i Mochijeve `.mochi` kroz nekoliko uobičajenih ciklusa ponavljanja.

## Kome odgovaraju Mochijeve kartice za učenje?

Mochi je dobar izbor kada:

- već pišete i razmišljate u Markdownu;
- bilješke i kartice za ponavljanje trebaju biti u istom povezanom radnom prostoru;
- želite jednostavnu odluku Remembered / Forgot umjesto četiriju ocjena;
- besplatan rad bez interneta na jednom uređaju pokriva vaše potrebe ili vam sinkronizacija Pro vrijedi 5 USD mjesečno;
- vaša je kolekcija nova ili dovoljno jednostavna da pretvorba iz Ankija nosi mali rizik.

Ostanite uz Anki kada:

- vaši tipovi bilježaka generiraju više važnih varijanti kartica;
- HTML/CSS predlošci, JavaScript, dodaci ili dijeljeni špilovi čine dio sustava;
- besplatna sinkronizacija između uređaja važnija vam je od pisanja u Markdownu;
- želite Ankijev optimizator za FSRS, upravljanje skupovima postavki, četiri ocjene i simulator opterećenja;
- godine podataka o ponavljanju i prilagođeno ponašanje već dobro služe svojoj svrsi.

Najsmislenija alternativa Mochiju ovisi o tome zašto vam nijedan izbor ne odgovara. Za novu, jednostavniju kolekciju [Nibomove značajke](/hr/features/) uključuju ponavljanje uz FSRS, učenje bez interneta i sinkronizaciju, prijenos kartica, oznaka i medijskih sadržaja, pristup putem agenata i dokumentiran put do vlastitog hostinga. Ja ga razvijam i ograničenja su važna: ne zamjenjuje Mochijevu povezanu bilježnicu u Markdownu ni Ankijev razrađen sustav predložaka i dodataka. [Vodič za početak rada](/docs/getting-started/) prikazuje trenutačne mogućnosti korištenja verzije u oblaku, mobilnih aplikacija, agenata i vlastitog hostinga.

## Konačna ocjena

Mochi nudi više od ljepšeg sučelja za Anki. Njegova je glavna ideja da bilješka u Markdownu, povezani zapis znanja i kartica za razmaknuto ponavljanje mogu biti isti objekt. Besplatni plan pokriva rad bez interneta i računa; Pro dodaje značajke u oblaku, uključujući sinkronizaciju između uređaja.

To je dobar kompromis za nekoga tko započinje novu kolekciju temeljenu na Markdownu. Prijelaz s Ankija također se može isplatiti ako test s reprezentativnim špilom pokaže da izvorna podrška za Markdown i ponavljanje s dvije ocjene uklanjaju stvarne poteškoće.

Dugogodišnjem korisniku Ankija Mochi najprije treba dokazati da se prijelaz isplati. Napravite sigurnosnu kopiju kolekcije, testirajte kartice s najviše prilagođenog ponašanja i zadržite Anki osim ako Mochi dovoljno poboljšava rad iz tjedna u tjedan da opravda odricanje od konkretnih mogućnosti oblikovanja, predložaka i raspoređivanja te prednosti Ankijeva ekosustava.
