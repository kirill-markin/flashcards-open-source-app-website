---
title: "Kako izvesti skupove kartica iz Quizleta u 2026. (i zašto nedostaje opcija izvoza)"
description: "Izvezite skup kartica iz Quizleta prema aktualnim uputama za web-stranicu. Ako nema opcije Export, provjerite jeste li izradili izvorni skup, radite li s kopijom ili koristite mobilnu aplikaciju."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "kako izvesti kartice iz Quizleta"
  - "kako izvesti Quizlet kartice za učenje"
  - "nedostaje gumb za izvoz u Quizletu"
  - "preuzimanje Quizlet kartica za učenje"
  - "Quizlet u CSV"
  - "Quizlet u Anki"
---

Ako u Quizletu nedostaje gumb **Export** (Izvoz), prvo provjerite dvije stvari: jeste li vi izradili izvorni skup kartica i koristite li web-stranicu Quizleta? Quizlet dopušta izvoz samo autoru izvornog skupa, a ta je funkcija dostupna samo na webu. Kopirani skup ne može se izvesti, čak ni ako se kopija sada nalazi u vašoj zbirci.

Ako ispunjavate te uvjete, sam izvoz je brz: otvorite skup na web-stranici, odaberite **More → Export**, odredite raspored pojmova i definicija pa odaberite **Copy text** (Kopiraj tekst). Quizlet ne preuzima datoteku sa špilom kartica. Kopira tekst u međuspremnik, bez slika.

**Činjenice provjerene:** 30. kolovoza 2026., prema [službenim Quizletovim uputama za izvoz](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Djelatnik arhiva provjerava oznake vlasništva prije predaje kartica s uparenim tekstom; dvije mape za dokumente spremne su za preuzimanje, a fotografije ostaju iza stakla](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Treba li gumb Export uopće biti dostupan?

Provjerite ovo prije nego što pokušate preuzeti kartice iz Quizleta na neki drugi način:

| Vaša situacija | Treba li izvoz biti dostupan? | Sljedeći korak |
| --- | --- | --- |
| Izradili ste izvorni skup i otvorili ga na web-stranici Quizleta | Da, prema Quizletovoj stranici za pomoć | Slijedite korake u nastavku |
| Koristite aplikaciju za iOS ili Android | Ne; izvoz je dostupan samo na webu | Otvorite Quizlet u pregledniku i prijavite se |
| Kopirali ste skup drugog korisnika | Ne; Quizlet navodi da se kopirani skupovi ne mogu izvesti | Ne očekujte da će kopiranje omogućiti izvoz |
| Možete pregledavati skup, ali niste ga izradili | Ne; pristup za pregled ne znači da ste autor skupa | Zatražite izvornu datoteku od autora ili ponovno izradite kartice iz materijala koji smijete koristiti |

Ako ste izradili izvorni skup, a gumb za izvoz iz Quizleta i dalje nedostaje, provjerite jeste li prijavljeni na račun kojem skup pripada i jeste li otvorili izvornik, a ne kopiju. Quizletova stranica za pomoć ne navodi drugi način izvoza. U tom se slučaju obratite Quizletovoj podršci umjesto da vjerujete alatu za preuzimanje koji tvrdi da zaobilazi ograničenje.

## Kako izvesti kartice za učenje s web-stranice Quizleta

Za skup koji ste sami izradili:

1. Prijavite se na web-stranicu Quizleta.
2. Odaberite **Your library** (Vaša zbirka).
3. Odaberite **Flashcard sets** (Skupovi kartica za učenje).
4. Otvorite skup koji želite izvesti.
5. Otvorite izbornik **More** (Više).
6. Odaberite **Export** (Izvoz).
7. Odaberite kako želite rasporediti pojmove i definicije.
8. Odaberite **Copy text** (Kopiraj tekst).
9. Zalijepite rezultat u uređivač običnog teksta.

To je cijeli postupak koji je trenutačno dostupan. Na kraju nema gumba za preuzimanje.

Za obične kartice s prednjom i stražnjom stranom preporučujem tabulator između pojma i definicije te novi redak između kartica. Taj odabir razdjelnika praktičan je savjet, a ne Quizletov zahtjev. Tabulatore je obično lakše provjeriti nego zareze jer se zarezi često pojavljuju u samim definicijama.

Uredna datoteka s dvije kartice izgledala bi ovako, s jednim tabulatorom u sredini svakog retka:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Što se zadržava pri izvozu iz Quizleta

Quizlet ovu funkciju opisuje vrlo usko: izvozi **pojmove i definicije** iz skupa koji je korisnik sam izradio. Također navodi da se slike ne mogu izvesti.

Najsigurnije je računati samo na ono što vidite u zalijepljenom rezultatu. Ako se u njemu nalazi neki tekst, razdjelnik ili prijelom retka, možete ga sačuvati u datoteci. Quizletova stranica za pomoć ne obećava prijenos mapa, načina učenja, oblikovanja, razine usvojenosti, povijesti ponavljanja ni rasporeda ponavljanja.

Dakle, riječ je o kopiji teksta kartica, a ne o sigurnosnoj kopiji iz koje možete obnoviti stanje u Quizletu. Ta je razlika važna i ako ste tražili „preuzimanje Quizlet kartica”: Quizlet kopira tekst u međuspremnik, a datoteku izrađujete sami.

## Prije uređivanja spremite neizmijenjenu kopiju u UTF-8 formatu

Omogućite povratak na izvorni rezultat izvoza:

1. Zalijepite izvezeni tekst u uređivač običnog teksta.
2. Spremite ga u UTF-8 formatu, primjerice kao `biology-quizlet-raw.txt`.
3. Napravite kopiju pod nazivom `biology-quizlet-working.txt`.
4. Ne mijenjajte izvornu datoteku; uređujte samo radnu kopiju.

Prije uvoza radne datoteke provjerite je dok je skup u Quizletu još otvoren:

- Uključite prikaz nevidljivih znakova i provjerite gdje se nalaze tabulatori i prijelomi redaka.
- Potražite odabrani razdjelnik unutar pojmova i definicija. Dodatni tabulator može stvoriti neočekivano treće polje.
- Pronađite definicije koje sadrže prijelome redaka; uvoz ih može pogrešno protumačiti kao dodatne kartice.
- Usporedite početak, sredinu i kraj datoteke s Quizletom, uključujući najdulje definicije.
- Zatvorite pa ponovno otvorite datoteku i provjerite dijakritičke znakove, nelatinična pisma, simbole i tipografske navodnike.
- Označite prazna polja, duplikate i nepravilne retke umjesto da ih prešutno popravljate nagađanjem.

Broj redaka uspoređujte s brojem kartica samo ako svaka kartica zauzima točno jedan redak. Taj prečac ne vrijedi za definicije koje se protežu kroz više redaka.

Sačuvajte izvornu datoteku čak i kada radna kopija izgleda dobro. Ako uvoz pomakne polje ili izostavi sadržaj, i dalje ćete imati neizmijenjeni zapis za usporedbu.

## Iz Quizleta u CSV: pažljivo pripremite datoteku

Preimenovanje datoteke iz `.txt` u `.csv` ne pretvara je u CSV. CSV zahtijeva dosljedne razdjelnike i pravilno stavljanje polja u navodnike kada sadrže zareze, navodnike ili prijelome redaka.

Za pouzdanu izradu CSV datoteke iz Quizleta:

1. Ostavite sigurnosnu kopiju izvornog teksta netaknutom.
2. Otvorite radnu kopiju u programu za proračunske tablice i odaberite točno onaj razdjelnik koji ste koristili u Quizletu.
3. Provjerite ima li svaki očekivani zapis dva stupca: pojam i definiciju.
4. Pregledajte navodnike, razdjelnike i definicije u više redaka.
5. Izvezite datoteku kao CSV u UTF-8 formatu.
6. Prije daljnje upotrebe ponovno otvorite CSV u novom pretpregledu.

Program za proračunske tablice može dodati navodnike koje CSV zahtijeva. Zamjena svih tabulatora zarezima to ne može pouzdano učiniti.

## Prenesite tekst u Nibomo kao materijal za nacrt koji ćete pregledati

[Nibomo](/hr/features/) nema izravan uvoz iz Quizleta. U hostiranoj aplikaciji TXT i CSV datoteke služe kao prilozi iz kojih AI priprema nacrte kartica; to nije prijenos bez gubitka podataka.

1. Sačuvajte izvornu Quizlet datoteku izvan aplikacije.
2. Priložite uređeni TXT ili pažljivo pripremljeni CSV u razgovoru s AI-jem u Nibomu.
3. Recite asistentu koji razdjelnik i koja polja datoteka koristi.
4. Zatražite mali uzorak za pregled i izričito navedite da još ne sprema kartice.
5. Usporedite predloženi broj kartica, prednje strane i stražnje strane s radnom datotekom.
6. Spremite samo kartice koje ste pregledali.

[Vodič za početak rada](/docs/getting-started/) opisuje AI razgovor s podacima iz radnog prostora i priloženim datotekama. Za oprezan početak možete upotrijebiti ovakvu uputu:

> Pročitaj ovu datoteku kao parove pojmova i definicija razdvojene tabulatorom. Još nemoj spremati kartice. Pripremi nacrt malog uzorka, sačuvaj izvorni tekst i nelatinične znakove te zasebno navedi nepravilne, prazne ili dvosmislene retke umjesto da nagađaš.

To može biti korisno ako stare kartice ujedno treba urediti. No ne dokazuje da je svaki redak pravilno prenesen. Upotrijebite popis za provjeru iz članka [Kako popraviti kartice koje je izradio AI](/blog/how-to-fix-ai-flashcards/), a zatim isprobajte mali špil prije izrade ostalih kartica.

Kartice izrađene u Nibomu počinju s novom poviješću učenja. Tekst iz Quizleta ne sadrži zapise o ponavljanjima ni podatke o rasporedu potrebne za nastavak postojećeg niza ponavljanja.

> **Napomena o autoru:** Razvijam Nibomo. Ovaj postupak navodi trenutačna ograničenja proizvoda; ne tvrdi da je prijenos iz Quizleta potpuno podržan.

## Iz Quizleta u Anki: upotrijebite Ankijev uvoz teksta

Ankijev [službeni priručnik za uvoz teksta](https://docs.ankiweb.net/importing/text-files.html) navodi podršku za obične tekstne datoteke u UTF-8 formatu čija su polja razdvojena zarezima, točkama sa zarezom ili tabulatorima.

Za radnu kopiju s tabulatorima kao razdjelnicima:

1. Pokrenite uvoz u Ankiju i odaberite tekstnu datoteku u UTF-8 formatu.
2. U pretpregledu provjerite je li Anki prepoznao tabulator; ako nije, promijenite postavku razdjelnika.
3. Odaberite vrstu bilješke i odredišni špil.
4. Povežite prvo polje s prednjom, a drugo sa stražnjom stranom kartice.
5. U pretpregledu potražite prazna, pomaknuta ili dodatna polja.
6. Prije uvoza provjerite postavku za duplikate i ažuriranje.

Anki određuje očekivani broj polja prema prvom retku koji nije komentar. U kasnijim zapisima nedostajuća polja ostaju prazna, a dodatna se ne uvoze. Zato je pretpregled važan, osobito kada jedan zalutali razdjelnik može promijeniti strukturu retka.

I za definicije u više redaka morate odabrati način obrade. Anki podržava polja u navodnicima koja se protežu kroz više redaka. Umjesto toga može protumačiti `<br>` kao prijelom retka kada je uključena opcija **Allow HTML in fields** (Dopusti HTML u poljima). Odaberite jednu metodu i pregledajte kopirani uzorak prije uvoza cijele datoteke.

Prema zadanim postavkama Anki može prepoznati postojeću bilješku iste vrste prema prvom polju i ažurirati ostala polja. U postavkama uvoza možete umjesto toga odabrati zanemarivanje duplikata ili njihovo dodavanje kao novih bilješki. Ažuriranjem postojeće bilješke u Ankiju može se sačuvati njezin raspored ponavljanja u Ankiju, ali tekstna datoteka ne prenosi nikakav raspored iz Quizleta.

## Sačuvajte izvornik dok novi špil ne proradi

Službeni postupak u Quizletu završava opcijom **Copy text** za skupove koje je korisnik sam izradio i otvorio na web-stranici. Skripte za prikupljanje sadržaja, pristup privatnim API adresama dobivenima nagađanjem i alati drugih proizvođača za preuzimanje zasebni su, nepodržani postupci. Njima kopirani skup ili skup kojem imate samo pristup za pregled ne postaje dostupan za službeni izvoz.

Ako vam je potrebna automatizacija koja se ponavlja, a ne jednokratna kopija, članak o [trenutačnom stanju Quizletova API-ja](/blog/quizlet-api/) objašnjava što je podržano. Ako skup nije vaš, zatražite izvornu datoteku od autora ili izradite manji špil iz vlastitih bilježaka. Članak [Kako izraditi bolje kartice za učenje](/blog/how-to-make-better-flashcards/) može vam pomoći da pri ponovnoj izradi poboljšate kartice umjesto da kopirate svaki stari redak.

Nemojte izbrisati izvorni skup iz Quizleta dok ne provjerite sljedeće:

- izvorna UTF-8 datoteka spremljena je na mjestu za koje postoji sigurnosna kopija;
- radna datoteka ponovno se otvara s očekivanim znakovima i razdjelnicima;
- provjerena su polja u više redaka, praznine, duplikati i nepravilni retci;
- važan slikovni kontekst ponovno je izrađen iz izvora koji smijete koristiti; i
- mali probni uvoz dao je ispravne prednje i stražnje strane kartica na odredištu.

Sačuvajte izvornu tekstnu datoteku i nakon toga. Ona je najjednostavniji neovisni zapis za usporedbu ako kasniji uvoz izgleda pogrešno. Ako još odlučujete kamo prenijeti kartice, [usporedba alternativa Quizletu](/blog/quizlet-alternative/) opisuje šire prednosti i ograničenja pojedinih rješenja.
