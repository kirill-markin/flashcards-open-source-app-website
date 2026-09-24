---
title: "Alternative Ankiju u 2026.: što zadržavate, gubite i dobivate prelaskom"
description: "Usporedite sedam alternativa Ankiju prema očuvanju podataka pri migraciji, radu bez interneta, rasporedu ponavljanja, cijeni, pristupu kodu i vlastitom hostingu te saznajte kada je sigurnije ostati na Ankiju."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternative Ankiju"
  - "alternativa Ankiju"
  - "aplikacije poput Ankija"
  - "alternativa Ankiju otvorenog koda"
  - "besplatne alternative Ankiju"
  - "alternativa Ankiju za iOS"
  - "migracija iz Ankija"
---

Uvoz iz Ankija može završiti bez pogreške, a ipak ukloniti upravo ono zbog čega vaš špil funkcionira. Tekst je tu. Kartice se otvaraju. Onda primijetite da nema CSS-a, da je polje sa zvukom prazno, da je svaka kartica nova ili da jedna bilješka više ne stvara kartice u očekivanim smjerovima.

Tu pogrešan izbor alternative Ankiju može skupo stajati. Uredniji uređivač ili jeftiniji paket lako je uočiti prije prelaska. Probleme s predlošcima, poviješću ponavljanja, datumima sljedećeg ponavljanja, dodacima, dostupnošću medija bez interneta i ponovnim izvozom podataka često otkrijete tek kad je šteta već učinjena.

Ova usporedba polazi upravo od toga što se pri prijenosu očuva, a što izgubi. Obuhvaća sedam aplikacija poput Ankija: što svaka može preuzeti iz postojeće zbirke, što se mijenja nakon uvoza i kada je ostanak na Ankiju sigurniji ishod.

> **Napomena o autoru:** Ja sam Kirill Markin i razvijam [Nibomo](https://nibomo.com/), jedan od proizvoda u nastavku. Uključio sam ga zbog otvorenog koda, mogućnosti vlastitog hostinga i rada s agentima. Nije automatski pobjednik: nema izravan uvoz datoteka `.apkg`, migracijom iz Ankija gube se podaci, a pokretanje i održavanje sustava na vlastitoj infrastrukturi zahtijeva stvaran rad.

**Činjenice provjerene:** 28. kolovoza 2026. Cijene su javno dostupne američke ili navedene lokalne cijene na taj datum. Iznos može ovisiti o porezima, regiji, posebnim ponudama za obrazovanje i naplati putem trgovina aplikacijama.

![Urar provjerava hoće li provjereni mehanizam džepnog sata stati u drugo kućište](/blog/best-anki-alternatives.png)

## Kratak odgovor prije nego što išta premjestite

Krenite od toga da ćete zadržati Anki. Prijeđite na drugu aplikaciju samo ako uklanja problem koji se ponavlja i zbog kojeg se migracija isplati.

Tri proizvoda prihvaćaju pakete iz Ankija s podacima o učenju, ali svaki obećava očuvati drukčiji dio zbirke:

- **Mnemosyne** u dokumentaciji navodi potpun uvoz iz Ankija, s prilagođenim vrstama kartica i podacima o učenju. Od ovih je aplikacija najbliži tradicionalnom radu u lokalnoj računalnoj aplikaciji otvorenog koda, iako nema izvornu aplikaciju za iOS.
- **Mochi** uvozi datoteke `.apkg` s poviješću ponavljanja. Pretvara HTML u Markdown, uklanja CSS i JavaScript te četiri Ankijeva gumba za ocjenjivanje zamjenjuje opcijama Remembered (sjetio sam se) i Forgot (zaboravio sam).
- **RemNote** uvozi datoteke `.apkg`, većinu vrsta bilježaka i povijest ponavljanja. Njegov trenutačni vodič također kaže da uvezene kartice odlaze u zaseban red **Need to Learn** (treba naučiti), pa „povijest ponavljanja je uvezena” nemojte čitati kao „današnji red iz Ankija točno je preslikan”.

Preostale četiri aplikacije služe za ponovnu izradu sadržaja, a ne za migraciju zbirke:

- **Quizlet** je koristan za javne skupove kartica, razrede, igre i vođeno vježbanje.
- **Brainscape** grupi nudi jednostavniji ciklus ponavljanja uz ocjenu sigurnosti u odgovor od 1 do 5.
- **SuperMemo** znači prelazak na njegovu vlasničku metodu i katalog tečajeva.
- **Nibomo** nudi web i izvorne klijente pod licencom MIT, backend koji možete sami hostati te pristup putem API-ja i MCP-a. Njegov postupak rada s TXT-om ili CSV-om, koji uključuje pregled rezultata, ne čuva Ankijevo stanje učenja.

Ako vaše kartice ovise o točnom prikazu, dodacima ili trenutačnom redu za ponavljanje, ostanak na Ankiju nije neodlučnost. To je odgovor.

## Prvo utvrdite što se zapravo nalazi u vašoj zbirci u Ankiju

„Špil” nije jedinstvena cjelina koju možete prenijeti bez razmišljanja o njezinim dijelovima. Prije usporedbe proizvoda razdvojite dijelove koje biste mogli premještati.

| Dio zbirke | Što Anki može uključiti u paket | Što odredišna aplikacija mora izričito podržavati |
| --- | --- | --- |
| **Sadržaj bilježaka** | Tekstualna polja i spremljeni HTML | Mapiranje polja, zadatke s izostavljenim dijelovima teksta (cloze), nelatinični tekst, kod i prijelome redaka |
| **Generiranje kartica** | Vrste bilježaka i predloške kartica | Kartice u oba smjera, prilagođena polja te ponašanje CSS-a i JavaScripta |
| **Mediji** | Lokalne slike, zvuk i druge datoteke kad je uključena opcija **Include media** (uključi medije) | Izdvajanje datoteka, reference, podržane formate i sinkronizaciju između uređaja |
| **Organizacija** | Špilove, podšpilove, oznake i po želji skupove postavki špilova | Hijerarhiju, značenje oznaka, skupove postavki i odabir gradiva za učenje |
| **Stanje učenja** | Podatke o rasporedu i povijest ponavljanja, ako su uključeni | Datume sljedećeg ponavljanja, intervale, zaboravljanja već naučenih kartica i pretvorbu u odredišni algoritam raspoređivanja |
| **Kod za prilagodbu rada** | Dodaci nisu uključeni u paket špila | Zamjenu za alate preglednika kartica, skupno uređivanje, generiranje bilježaka i druge funkcije dodataka |

[Ankijev priručnik za izvoz](https://docs.ankiweb.net/exporting.html) opisuje sve te mogućnosti paketa. Alat za uvoz teksta vidi samo prvi redak, a možda i oznake. Alat za izravan uvoz datoteka `.apkg` može pročitati više, ali svaki proizvod odlučuje što će pretvoriti, a što odbaciti.

Zato je tvrdnja „uvozi iz Ankija” previše neodređena da biste na temelju nje odlučili o prelasku. Postavite tri zasebna pitanja:

1. **Znači li kartica i dalje isto?** Provjerite polja, smjerove generiranih kartica, cloze zadatke, medije i prikaz.
2. **Zna li odredišna aplikacija što sam naučio?** Provjerite zapise pojedinačnih ponavljanja, trenutačno stanje, datume sljedećeg ponavljanja i prvi stvarni red za ponavljanje.
3. **Mogu li ponovno otići?** Izvezite podatke iz odredišne aplikacije i provjerite što izlazni format zapravo sadrži.

Alat za uvoz može zadovoljiti prvi uvjet, a ne zadovoljiti druga dva.

## Što se očuva pri migraciji

| Proizvod | Način uvoza iz Ankija | Stanje učenja | Glavni mogući gubitak koji treba provjeriti |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Izravan uvoz `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) za većinu vrsta bilježaka, medije i povijest ponavljanja | Povijest ponavljanja prenosi se, ali uvezene kartice ulaze u zaseban RemNoteov red **Need to Learn** | Složen CSS, prilagođeni JavaScript, dio generiranog govora iz teksta (TTS) i preimenovana polja za prekrivanje dijelova slike |
| [Mochi](https://mochi.cards/) | [Izravan uvoz `.apkg`](https://mochi.cards/docs/import-and-export/importing/), uključujući povijest ponavljanja | Povijest se prenosi; dokumentacija ne obećava isti red ni iste datume ponavljanja kao u Ankiju | HTML postaje Markdown; CSS i JavaScript se uklanjaju; buduće ocjenjivanje ima samo dvije mogućnosti |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projekt dokumentira [potpun uvoz iz Ankija](https://mnemosyne-proj.org/features) s prilagođenim vrstama kartica i podacima o učenju | Podaci o učenju uvoze se u drukčiji algoritam raspoređivanja | I dalje treba ispitati točno ponašanje predložaka, datume ponavljanja nakon pretvorbe i prikaz kartica |
| [Quizlet](https://quizlet.com/) | [Lijepljenje pojmova i definicija](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Ništa iz Ankija | Vrste bilježaka, predlošci, špilovi, struktura medija i svi podaci o rasporedu |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX ili ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Ništa iz Ankija | Predlošci, dodaci, pravila za medije i svi podaci o rasporedu |
| [SuperMemo](https://www.supermemo.com/) | [Lijepljenje redaka s pitanjima i odgovorima odvojenima razdjelnikom](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), do 100 odjednom | Ništa iz Ankija | Struktura zbirke, mediji, predlošci i svi podaci o rasporedu |
| [Nibomo](https://nibomo.com/) | Izrada nacrta uz pomoć AI-ja iz Ankijeva TXT-a ili CSV-a, uz pregled rezultata | Ništa iz Ankija | Nema podrške za `.apkg`; ne prenose se predlošci, vjeran prikaz medija, hijerarhija špilova ni podaci o rasporedu |

## Cijena, rad bez interneta, raspored ponavljanja i kontrola nad sustavom

| Proizvod | Cijena provjerena 28. kolovoza 2026. | Granice rada bez interneta | Algoritam raspoređivanja | Izvorni kod i vlastiti hosting |
| --- | --- | --- | --- | --- |
| **RemNote** | [Besplatno; Pro 8 USD mjesečno, uz naplatu 96 USD godišnje](https://www.remnote.com/pricing) | Instalirane aplikacije omogućuju uređivanje i ponavljanje bez interneta nakon prijave. Računalna aplikacija čuva sve medije iz baze znanja; mobilna predmemorira samo neke nedavne slike. Na webu kartica preglednika mora ostati otvorena. | [Anki SM-2 ili beta FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Vlasnička jezgra; nije dokumentiran podržan način vlastitog hostinga |
| **Mochi** | [Besplatno bez interneta; Pro sinkronizacija 5 USD mjesečno](https://mochi.cards/#pricing-section) | Instalirane aplikacije rade potpuno bez interneta i bez računa. Pohrana u pregledniku može se obrisati. | [Mochijev algoritam ili FSRS](https://mochi.cards/docs/reviewing/fsrs/), oba s opcijama Remembered / Forgot | Vlasnička jezgra; javni repozitoriji sadrže integracije, a ne aplikaciju koju možete sami hostati |
| **Mnemosyne** | Besplatno | [Lokalni rad na računalu i ponavljanje bez interneta na Androidu](https://mnemosyne-proj.org/download-mnemosyne.php); Android ne omogućuje uređivanje. Nema izvorne aplikacije za iOS. | Prilagodljivo raspoređivanje na temelju ocjena prisjećanja od 0 do 5 | Licence izvornog koda razlikuju se po komponentama; vlastiti poslužitelj za sinkronizaciju na računalu ili uređaju bez grafičkog sučelja |
| **Quizlet** | Osnovno korištenje besplatno; [Plus 35,99 USD godišnje, Plus Unlimited 44,99 USD godišnje](https://quizlet.com/upgrade?source=signup) | Preuzeti skupovi rade bez interneta u aplikacijama za iOS i Android u načinima Flashcards i Match. | [Ponavljanje s vremenskim razmacima na webu](https://quizlet.com/features/spaced-repetition) za skupove sa 100 ili više pojmova; mobilna podrška još je označena kao „uskoro”. Learn je zasebno prilagodljivo vježbanje. | Vlasnička hostana usluga; nema podržanog načina vlastitog hostinga |
| **Brainscape** | [Besplatno; Pro 7,99 USD mjesečno uz godišnju naplatu](https://www.brainscape.com/pricing) | [Mobilna aplikacija može sačuvati rad bez interneta i naknadno sinkronizirati prethodno preuzete razrede](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentacija ne obećava potpunu lokalnu zbirku. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), uz ocjene od 1 do 5 | Vlasnička hostana usluga; nema podržanog načina vlastitog hostinga |
| **SuperMemo** | Besplatan račun s ograničenjima; [35,99 PLN mjesečno ili 359 PLN godišnje](https://www.supermemo.com/en/premium-subscription) | Preuzeti mobilni tečajevi rade bez interneta; uređivanje, AI, pretraživanje, snimke i statistika ne rade. | [Vlasnička metoda SuperMemo](https://www.supermemo.com/en/supermemo-method) | Vlasnička hostana usluga; nema podržanog načina vlastitog hostinga |
| **Nibomo** | [Osnovne funkcije hostane usluge besplatne tijekom bete; softver besplatan za vlastiti hosting](/hr/pricing/), uz troškove vaše infrastrukture | Izvorne aplikacije zapisuju lokalno nakon mrežne prijave i početnog preuzimanja podataka radnog prostora; udaljeni mediji već moraju biti u predmemoriji. | [FSRS](/docs/architecture/#scheduling) | MIT; podržana produkcijska instalacija obuhvaća cijeli sustav koji se oslanja na AWS |

Ove tablice nisu bodovne ljestvice. Izravan uvoz može biti važniji od svih ostalih funkcija ako imate 30.000 dobro naučenih kartica. Izvorna aplikacija za iPhone može presuditi pri izboru ako na njemu ponavljate. Pristup kodu važan je samo ako ćete ga vi ili netko kome vjerujete održavati.

Svaki proizvod ovdje nudi besplatan početak, ali migracija na besplatne alternative Ankiju nije besplatna. Cijenu pretplate lako je izračunati. Ponovna izrada predložaka, provjera medija i započinjanje nove povijesti ponavljanja često su veći troškovi.

## RemNote: premjestite kartice u povezane bilješke

RemNote mijenja mjesto nastanka kartica. Umjesto da uz bilješke s predavanja održavate zaseban špil, kartice izrađujete u strukturiranim bilješkama, dokumentu ili tijekom rada s PDF-om. To je stvaran razlog za napuštanje Ankija ako vam prebacivanje gradiva između aplikacije za bilješke i aplikacije za kartice oduzima previše vremena.

Mogućnosti migracije široke su, ali red za ponavljanje treba precizno opisati. RemNoteov [trenutačni vodič za uvoz iz Ankija](https://help.remnote.com/en/articles/6751471-importing-from-anki) upućuje na izvoz datoteke `.apkg` s podacima o rasporedu, skupovima postavki špilova i medijima. Uvozi povijest ponavljanja i većinu vrsta bilježaka, uključujući osnovne kartice, cloze kartice i uobičajene kartice s prekrivenim dijelovima slike.

Isti vodič kaže da se novouvezene kartice usmjeravaju u zaseban red **Need to Learn**. Drugim riječima, RemNote ima pristup povijesti, ali dokumentacija ne obećava da će se vaš trenutačni red dospjelih kartica iz Ankija pojaviti nepromijenjen. Složen CSS također se odbacuje, prilagođeni JavaScript nije podržan, neki načini pretvaranja teksta u govor tijekom korištenja ne rade, a uvoz kartica s prekrivenim dijelovima slike ovisi o očekivanim nazivima bilježaka i polja.

Isprobajte reprezentativan špil i pregledajte i kartice i prvi red za ponavljanje. Uvoz koji izgleda uredno tek je pola provjere.

Instalirane računalne i mobilne aplikacije rade bez interneta nakon instalacije i prijave. [Vodič za rad bez interneta](https://help.remnote.com/en/articles/6752029-offline-mode) navodi važnu granicu za medije: računalna aplikacija pohranjuje sve slike i PDF-ove iz baze znanja, dok mobilna predmemorira samo neke nedavne slike. Web-aplikacija može nastaviti raditi u već otvorenoj kartici preglednika, ali bez interneta ne može se otvoriti iznova.

Koristite RemNote kad su povezane bilješke dovoljno važne da promijenite način organizacije zbirke. Zadržite Anki ako su predlošci kartica i dodaci temelj vašeg sustava, a ne usputni ukras.

## Mochi: lokalni Markdown s potpunim izvozom u vlastitom formatu

Mochi je jednostavnija aplikacija za ljude koji žele lokalne podatke, kartice u Markdownu i manje kontrola na zaslonu. Njegove instalirane aplikacije rade na svim glavnim računalnim i mobilnim platformama te se mogu koristiti [potpuno bez interneta i bez računa](https://mochi.cards/docs/getting-started/download-and-install/). Plaća se sinkronizacija, 5 USD mjesečno.

Izravan uvoz iz Ankija prenosi povijest ponavljanja, što Mochi stavlja znatno ispred opcija koje prihvaćaju samo tekst. I sama je pretvorba neuobičajeno jasno opisana: Mochi uklanja CSS i JavaScript te pretvara HTML u Markdown. To funkcionira kad značenje nose tekst i obični privici. Ako značenje nosi predložak, to je upozorenje.

Mochi sada nudi dva algoritma raspoređivanja. Njegov vlastiti algoritam ostaje zadani, dok se [FSRS može uključiti](https://mochi.cards/docs/reviewing/fsrs/) bez poništavanja postojećeg napretka u Mochiju. FSRS izvodi stanje kartice iz povijesti ponavljanja koju Mochi ima. Ocjenjivanje i dalje ima samo dvije mogućnosti, Remembered ili Forgot, čak i uz FSRS, pa korisnici Ankija koji se oslanjaju na Hard i Easy kao zasebne signale trebaju očekivati drukčiji dnevni ritam.

Jasnije je što možete ponovno izvesti nego kod većine vlasničkih aplikacija. Izvoz u vlastitom formatu [`.mochi`](https://mochi.cards/docs/import-and-export/exporting/) sadrži kartice, predloške, privitke, oznake, strukturu špilova i povijest ponavljanja. Markdown i CSV lakše je pregledati drugdje, ali ne sadrže povijest ponavljanja ni druge metapodatke.

Mochijevi javni repozitoriji na GitHubu sadrže [integracije i povezane alate](https://github.com/mochi-cards/open-source), a ne samu aplikaciju ili podržani poslužitelj za sinkronizaciju. Odaberite ga zbog rada bez interneta i prenosivosti, a ne zbog kontrole nad izvornim kodom.

## Mnemosyne: računalna aplikacija otvorenog koda

Mnemosyne je najbliži tradicionalnom modelu „program i lokalna baza podataka”. Trenutačna verzija podržava Windows, macOS i Linux, uz klijent za Android za ponavljanje bez interneta. Stranica s funkcijama opisuje kartice s bogatim sadržajem, hijerarhijske oznake, dodatke, ljestvicu ocjena od 0 do 5 te potpun uvoz iz Ankija s prilagođenim vrstama kartica i podacima o učenju.

Ovo je najizravniji put do aplikacije otvorenog koda među navedenim opcijama ako želite napustiti Anki bez prelaska u velik sustav za bilješke ili uslugu u oblaku. Ima i [ugrađen poslužitelj za sinkronizaciju](https://mnemosyne-proj.org/help/syncing) koji može raditi na računalu ili uređaju bez grafičkog sučelja te objedinjavati podatke o učenju s više klijenata.

Ograničenja su dio odluke. Klijent za Android [ne može uređivati kartice](https://mnemosyne-proj.org/help/android-client). Korisnici iOS-a moraju ponavljati u pregledniku preko poslužitelja koji radi na drugom računalu, a njegova službena stranica s funkcijama upozorava da nema sigurnosnih mehanizama. Vlastita sinkronizacija također znači održavanje dostupnosti poslužitelja, konfiguriranje mreže i sigurnosno kopiranje direktorija s podacima.

Licenciranje je preciznije od jednostavne oznake „GPL”: [datoteka licence projekta](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) upućuje na različite uvjete po komponentama. [Licenca jezgre](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) koristi AGPL v3 uz dodatnu odredbu o nazivu i navođenju autorstva, dok [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) koristi LGPL v3. Pročitajte te datoteke ako planirate izmjene ili daljnju distribuciju.

## Quizlet: prijeđite zbog nastave, uz prihvaćanje gubitaka pri prijenosu zbirke

Quizlet bolje rješava drukčiji zadatak. Javne skupove za učenje, virtualne razrede koje vode nastavnici, dijeljenje, načine Match, Test i Learn te grupne aktivnosti lakše je uvesti u nastavu nego prilagođeni profil u Ankiju.

Migracija je ograničena na običan tekst. Quizlet može pretvoriti zalijepljene retke u pojmove i definicije, ali ne čita `.apkg` i ne rekonstruira vrste bilježaka, predloške, raspored ili povijest ponavljanja. Autori mogu [izvesti vlastite skupove kao kopirani tekst](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), bez slika; skupovi kopirani od drugih korisnika ne mogu se izvesti. Prenosiv je sadržaj, a ne cijela zbirka.

Quizletov način raspoređivanja mijenja se. Nova funkcija [Spaced Repetition](https://quizlet.com/features/spaced-repetition) automatski se uključuje na webu za skupove s najmanje 100 pojmova i koristi ocjene Repeat, Hard, Okay i Easy. Quizlet još uvijek najavljuje mobilnu podršku kao „uskoro”. Learn ostaje zaseban način prilagodljivog vježbanja s ograničenjima korištenja koja ovise o plaćenom paketu.

Rad bez interneta također se odnosi na mobilne aplikacije, ne na web-stranicu. Quizlet automatski sprema osam nedavnih skupova i omogućuje preuzimanje dodatnih; [Flashcards i Match rade bez interneta](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), a napredak se sinkronizira nakon ponovnog povezivanja.

Prijeđite ovamo kada su cilj dijeljenje gradiva i aktivnosti u nastavi. Ponovno graditi ustaljeni osobni raspored samo radi tih funkcija obično se ne isplati.

## Brainscape: manje odluka o rasporedu, manje prenesenih podataka

Brainscape traži ocjenu sigurnosti u odgovor od 1 do 5 i prema njoj ranije vraća kartice koje slabije znate. Cijela formula nije objavljena, ali takav je način rada lako objasniti svima u razredu.

Prihvaća datoteke CSV, TXT, XLSX i ODS. To je praktično za kartice s prednjom i stražnjom stranom, no znači da se predlošci, dodaci, pravila za medije i Ankijevi podaci o učenju ne prenose. Izvoz osobne sigurnosne kopije funkcija je paketa Pro i daje datoteke koje se mogu otvoriti u tabličnom kalkulatoru te kasnije ponovno uvesti.

Brainscapeov trenutačni centar za pomoć navodi da web-stranica i mobilne aplikacije sada imaju iste osnovne funkcije za pronalaženje, izradu i dijeljenje kartica te učenje. Opisuje i korištenje mobilne aplikacije bez interneta, ručnu ponovnu sinkronizaciju i ažuriranje razreda koji su već preuzeti na uređaj. To omogućuje praktičan nastavak rada nakon povezivanja, ali ne obećava da je cijeli račun dostupan kao potpuna lokalna zbirka.

Izvoz osobnih špilova i dalje je [funkcija paketa Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Nema službeno objavljenog izvornog koda ni načina za vlastiti hosting.

Brainscape vrijedi razmotriti ako Anki traži previše podešavanja od ljudi koji samo žele učiti. Nije dobar izlaz za nekoga tko se tim postavkama već dobro služi.

## SuperMemo: odaberite metodu i prihvatite novi početak

Trenutačna usluga SuperMemo.com platforma je za učenje jezika na webu, iOS-u i Androidu, izgrađena oko SuperMemove vlasničke metode raspoređivanja. Odvojena je od starijeg proizvoda za Windows koji dugogodišnji korisnici SuperMema možda poznaju.

Ovdje birate metodu i katalog, a ne besprijekornu migraciju iz Ankija. SuperMemo podržava [skupnu izradu lijepljenjem redaka s pitanjima i odgovorima odvojenima razdjelnikom](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), uz ograničenje od 100 kartica po uvozu. Nisam pronašao trenutačni službeni alat za uvoz `.apkg` ni mogućnost korisničkog izvoza za hostanu uslugu. Dokumentiranim se postupkom zato ne prenose predlošci, dodaci, struktura medija ni povijest ponavljanja.

Preuzeti tečajevi mogu se učiti bez interneta u mobilnim aplikacijama. [Vodič za rad bez interneta](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) izuzima AI funkcije, dodavanje kartica MemoCards, pretraživanje, snimke, statistiku i uređivač tečajeva, pa pripremite materijal i sinkronizirajte ga prije prekida veze.

Odaberite SuperMemo ako vam je njegova vlastita metoda ili katalog tečajeva dovoljno važan da započnete novi raspored. Ako je prioritet očuvati postojeći raspored, on rješava pogrešan problem.

## Nibomo: pristup izvornom kodu cijelog sustava, uz najslabiji uvoz iz Ankija

Nibomo daje široku kontrolu nad sustavom. [Repozitorij pod licencom MIT](https://github.com/kirill-markin/flashcards-open-source-app) sadrži web-aplikaciju, klijente za iOS i Android, backend, sinkronizaciju za rad bez interneta, infrastrukturu, [javni API](/docs/api/) i [MCP poslužitelj](/docs/mcp-connector/). Ponavljanja koriste [FSRS](/docs/architecture/#scheduling). Web, iOS i Android prvo zapisuju lokalno, dodaju promjene u red za slanje i sinkroniziraju ih nakon ponovnog povezivanja.

To ga ne čini kompatibilnim s Ankijem. Nibomo ne može čitati `.apkg` ni `.colpkg`. Podržana [migracija iz Ankija putem TXT-a](/blog/migrate-from-anki-txt-export-open-source-flashcards/) postupak je izrade nacrta uz pomoć AI-ja i naknadne provjere rezultata, namijenjen uglavnom tekstualnim karticama. Ne čuva predloške, dodatke, hijerarhiju špilova, datume sljedećeg ponavljanja, intervale ni zapise ponavljanja. Reference na medije u TXT datoteci nisu same medijske datoteke, pa špilovi s mnogo medija zahtijevaju zasebnu ponovnu izradu i provjeru.

Ni Nibomov vlastiti paket `flashcards.zip` nije potpuna sigurnosna kopija. Prenosi kartice, oznake i povezane medije između radnih prostora u Nibomu. Ne prenosi povijest ponavljanja, stanje FSRS-a, potpune strukture špilova, postavke radnog prostora ni račune.

Osnovne funkcije hostane usluge [besplatne su tijekom bete](/hr/pricing/). Vlastiti hosting produkcijskog sustava nije instalacija Dockera jednom naredbom: [vodič za vlastiti hosting](/docs/self-hosting/) koristi AWS CDK i zahtijeva AWS usluge te Cloudflare, Resend, Sentry, tajne podatke za pristup, migracije, sigurnosne kopije, vraćanje podataka i nadogradnje. Docker Compose služi za razvoj, a ne za podržanu produkcijsku instalaciju.

Koristite Nibomo ako su razlog prelaska potpun izvorni kod i backend pod kontrolom osobe koja ga održava, a vaše su kartice dovoljno jednostavne da ih možete sigurno ponovno izraditi. [Otvorite hostanu aplikaciju](https://app.nibomo.com/) i isprobajte mali privremeni špil. Zadržite Anki ili isprobajte RemNote, Mochi ili Mnemosyne kada je najvažnije vjerno očuvati stanje učenja.

## Koja alternativa Ankiju radi na iOS-u bez neugodnog iznenađenja pri migraciji?

„Alternativa Ankiju za iOS” može značiti dvije različite stvari: izvornu aplikaciju za iPhone ili zamjenu za [jednokratnu kupnju AnkiMobilea od 24,99 USD](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo i Nibomo imaju aplikacije za iOS. Mnemosyne je nema. I dalje ostaje pitanje migracije:

- **Mochi** čuva više od opcija za iOS koje prihvaćaju samo tekst: uvozi povijest ponavljanja iz `.apkg`, uz pretvorbu u Markdown i ocjenjivanje s dvije mogućnosti.
- **RemNote** također uvozi povijest ponavljanja iz `.apkg`, ali ispitajte njegov red **Need to Learn** umjesto da pretpostavite kako će se današnji raspored iz Ankija očuvati.
- **Quizlet** odgovara dijeljenju gradiva u nastavi, ali njegov je put iz Ankija ograničen na tekst, a nova funkcija ponavljanja s vremenskim razmacima još nije dostupna na mobilnim uređajima.
- **Nibomo** je opcija s dostupnim izvornim kodom i izvornim klijentom za iOS, ali migracija iz Ankija poništava stanje učenja.
- **Brainscape** i **SuperMemo** imaju smisla samo ako njihova metoda ponavljanja opravdava ponovnu izradu kartica i rasporeda.

Prije nego što napustite AnkiMobile zbog cijene, usporedite je s troškom pretplate i satima potrebnima za popravljanje migracije. Jednokratna kupnja aplikacije može biti jeftinija od besplatne aplikacije zbog koje ćete ustaljenu zbirku morati ručno prepravljati.

## Kada je sigurnije zadržati Anki

Ostanak je svjesna odluka. Ne morate odabrati nešto novije. Zadržite Anki ako vrijedi bilo što od sljedećeg:

- vaša zbirka ovisi o prilagođenim predlošcima, CSS-u, JavaScriptu ili dodacima;
- Image Occlusion (prekrivanje dijelova slike), zvuk ili drugi mediji nose ključno značenje;
- jedna bilješka generira kartice u više smjerova koje moraju ostati povezane;
- godine povijesti ponavljanja i trenutačni datumi sljedećeg ponavljanja vrjedniji su od novog uređivača;
- oslanjate se na rad na računalu ili kombinaciju platformi koju alternativa ne podržava jednako dobro;
- način rada bez interneta u zamjenskoj aplikaciji dostupan je samo u verziji koju nećete koristiti;
- u teoriji želite vlastiti hosting, ali ne želite upravljati poslužiteljem, osiguravati ga, izrađivati sigurnosne kopije i nadograđivati ga;
- alternativa izgleda urednije, ali ne rješava nijedan problem koji se ponavlja.

Anki i dalje nudi razvijen ekosustav dodataka, prilagodljive predloške bilježaka i kartica, FSRS i kontrole starijeg algoritma raspoređivanja, lokalne instalirane klijente te formate paketa koji mogu prenijeti zbirku. Nijedan od navedenih proizvoda ne nudi sve to zajedno.

Za užu usporedbu kontrole nad sustavom pročitajte [vodič kroz aplikacije za kartice otvorenog koda](/blog/best-open-source-flashcard-apps-2026/). Ako je presudan rad bez interneta, [usporedba aplikacija za kartice bez interneta](/blog/best-offline-flashcards-app/) objašnjava razlike između instaliranih aplikacija, predmemoriranog sadržaja i otvorenih kartica preglednika.

## Kontrolni popis za migraciju koji još uvijek može završiti odgovorom „ne”

Nemojte početi s cijelom zbirkom. Osmislite probu koja smije završiti neuspjehom.

1. **Izradite paket za oporavak.** Izvezite `.colpkg` s medijima, spremite ga izvan profila u Ankiju i sačuvajte drugu kopiju na drugom mjestu.
2. **Odaberite zahtjevan špil.** Uključite cloze zadatke, prilagođena polja, kartice u oba smjera, ugniježđene špilove, oznake, slike, zvuk i dovoljno povijesti ponavljanja da se vidi kako se raspored pretvara.
3. **Izvezite format koji odredište doista podržava.** Za izravan uvoz koristite `.apkg` s rasporedom, skupovima postavki i medijima. Notes in Plain Text (bilješke u običnom tekstu) koristite samo ako prihvaćate ponovnu izradu isključivo sadržaja.
4. **Zabilježite početno stanje.** Zapišite broj bilježaka i kartica, nazive oznaka i špilova, broj medijskih datoteka, nekoliko datuma sljedećeg ponavljanja i intervala te očekivani broj kartica generiranih iz svake vrste bilješke.
5. **Uvezite u privremeni prostor.** Nemojte prebrisati izvorni profil ni spojiti prvi probni uvoz s trajnom odredišnom zbirkom.
6. **Zasebno pregledajte sadržaj i stanje učenja.** Ispravna prednja i stražnja strana ne dokazuju da su se očuvali cloze zadaci, mediji, druge kartice iz iste bilješke, povijest ponavljanja ili datum sljedećeg ponavljanja.
7. **Na svakom uređaju koji stvarno koristite pokrenite aplikaciju iznova bez interneta.** Ponovite kartice, uredite ih, potpuno zatvorite aplikaciju, ponovno je otvorite bez veze, zatim se povežite i provjerite drugi uređaj.
8. **Promatrajte red prije nego što se rasporedi počnu razlikovati.** Usporedite prvi skup dospjelih kartica i uzorak intervala prije nego što iste stvarne kartice ocijenite u obje aplikacije. Nakon prvog ponavljanja u drugoj aplikaciji dva su rasporeda neovisna.
9. **Isprobajte izlazak prije konačne odluke.** Izvezite podatke iz odredišne aplikacije i provjerite što biste mogli vratiti ako je napustite sljedeće godine.
10. **Zadržite Anki i netaknutu sigurnosnu kopiju.** Nemojte izbrisati ni Anki ni sigurnosnu kopiju dok se zamjena ne pokaže dobrom u uobičajenom radu i dok svjesno ne prihvatite svaki gubitak.

Ako odredišna aplikacija prihvaća samo tekst, slijedite cijeli [postupak sigurnog izvoza u TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/). On odvaja `.colpkg` za oporavak od prenosive radne datoteke i jasno navodi da se stanje učenja poništava.

## Odlučujte ovim redoslijedom

Krenite od onoga što si ne možete priuštiti izgubiti:

1. Ako su presudni točni predlošci, dodaci ili trenutačni red za ponavljanje, zadržite Anki osim ako proba s reprezentativnim `.apkg` paketom pokaže da se mogu očuvati.
2. Ako bilješke i kartice trebaju postati jedan sustav, isprobajte RemNote. Provjerite red **Need to Learn**, a ne samo uvezene stranice.
3. Ako su lokalni Markdown i izvoz koji možete pregledati važniji od Ankijeva prikaza, isprobajte Mochi.
4. Ako želite računalnu aplikaciju otvorenog koda usmjerenu na kartice, s izravnim uvozom iz Ankija, isprobajte Mnemosyne i potvrdite da se njegova mobilna ograničenja uklapaju u vašu rutinu.
5. Ako je stvarni problem dijeljenje gradiva u nastavi ili jednostavniji zajednički način ponavljanja, ponovno izradite mali skup u Quizletu ili Brainscapeu.
6. Ako želite baš SuperMemovu metodu, prihvatite novi raspored. Ako želite baš izvorni kod cijelog sustava, vlastiti hosting te pristup putem API-ja i MCP-a, računajte na ponovnu izradu sadržaja u Nibomu, gubitak dijela podataka i održavanje sustava.

Za usporedbu funkcija triju vrlo različitih modela pogledajte [Anki, Quizlet i Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Korisno je pravilo jednostavno: prijeđite kada je dobitak konkretan, a stvarna je proba pokazala da su gubici prihvatljivi. Ako se vaš reprezentativni špil ne može prenijeti bez problema, zadržavanje Ankija nije konzervativna rezervna opcija. To je rezultat usporedbe.
