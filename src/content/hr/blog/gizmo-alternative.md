---
title: "Recenzija Gizmovih kartica za učenje (2026.): ograničenja besplatnog plana, Magic Import i alternative"
description: "Recenzija Gizmovih kartica za učenje na temelju izvora: čekanje između uvoza uz Magic Import u besplatnom planu, AI Tutor, vrste kartica, izvoz, dokazi o radu bez interneta i praktična alternativa."
date: "2026-08-03"
updated: "2026-09-01"
image: "/blog/gizmo-alternative-v2.png"
keywords:
  - "Gizmo kartice za učenje"
  - "recenzija Gizmovih kartica za učenje"
  - "Gizmo AI recenzija"
  - "je li Gizmo besplatan"
  - "Gizmo Magic Import ograničenje"
  - "alternativa Gizmu"
  - "Gizmo izvoz"
---

Ako u Gizmo želite besplatno uvesti tjedan dana bilježaka odjednom, zapamtite **20 minuta**. Trenutačno ograničenje značajke Magic Import jest čekanje od 20 minuta između uvoza, a ne fiksna dnevna kvota. Gizmo Unlimited uklanja to čekanje.

Ova recenzija Gizmovih kartica za učenje temelji se na aktualnim službenim stranicama pomoći. Nisam osobno testirao Gizmo, pa tvrdnje o proizvodu ograničavam na ono što Gizmo dokumentira, a nejasnoće izričito navodim.

> **Napomena o autoru:** Ja sam Kirill Markin i razvijam [Nibomo](https://nibomo.com/hr/), alternativu koju uspoređujem u nastavku. Prema dokumentaciji, Gizmo nudi širi raspon mogućnosti: više formata izvornog materijala, pet vrsta kartica, lekcije uz AI Tutor, raznolike kvizove i napredovanje nalik igri. Nibomo je namjerno užeg opsega.

**Činjenice provjerene:** 1. rujna 2026.

![Prikaz značajke Magic Import, vrsta Gizmovih kartica za učenje i alternativnog načina učenja](/blog/gizmo-alternative-v2.png)

## Je li Gizmo besplatan?

Gizmo ima besplatni plan. Ovo su trenutačna ograničenja koja bi vam najlakše mogla prekinuti učenje:

- [Magic Import](https://help.gizmo.ai/en/articles/15647624-what-is-magic-import) od korisnika besplatnog plana traži 20 minuta čekanja između uvoza. Unlimited uklanja čekanje.
- [AI Tutor](https://help.gizmo.ai/en/articles/15869958-how-many-ai-tutor-sessions-can-i-have-for-free) dopušta pet besplatnih sesija po kalendarskom danu. Brojač se poništava svaki dan, a Unlimited uklanja dnevno ograničenje broja sesija.
- [Hearts](https://help.gizmo.ai/en/articles/15623061-what-are-hearts), odnosno srca, koriste se u načinu Memorise: počinjete s 15, nakon pogrešnog odgovora gubite jedno, a kad ih potrošite, morate čekati 10 minuta prije nastavka kviza. Gizmo navodi da njegov stil pitanja Flashcards-only ne koristi Hearts.
- [Hints](https://help.gizmo.ai/en/articles/15504721-what-are-hints), odnosno pomoć pri odgovaranju, otkrivaju prvo slovo odgovora ili uklanjaju jedan pogrešan ponuđeni odgovor u pitanju s višestrukim izborom. Korisnici besplatnog plana kupuju ih novčićima Coins koje zarađuju u kvizovima; Unlimited uključuje neograničene Hints i Hearts.

Koliko je, dakle, uvoza putem Magic Importa dostupno u besplatnom Gizmu? Službena dokumentacija određuje vrijeme čekanja, ne broj uvoza. Navodi razmak od 20 minuta, ali ne jamči određeni broj uspješnih uvoza dnevno.

## Što Gizmove kartice za učenje zapravo rade

Polazište u Gizmu je materijal koji već imate. Magic Import pretvara ga u kartice, Memorise provjerava znanje s tih kartica, a AI Tutor može poučavati na temelju izvora. Prema Gizmovu [službenom pregledu proizvoda](https://help.gizmo.ai/en/articles/14472668-how-does-gizmo-work), XP, Levels, Leagues i Streaks prate napredovanje kroz cijeli ciklus učenja.

Vodič za Magic Import navodi devet izvora za izradu kartica:

- PDF;
- snimku predavanja ili lekcije napravljenu u aplikaciji;
- zalijepljene bilješke;
- fotografije bilježaka ili ploče;
- PowerPoint;
- Quizlet;
- Anki;
- proračunsku tablicu ili CSV;
- URL web-stranice.

Gizmo generira kartice i označava riječi čije će poznavanje provjeravati. Njegov vodič upućuje učenike da pregledaju špil i dodaju sve što je pri uvozu izostalo. To bih smatrao sastavnim dijelom postupka: usporedite kartice s izvorom, izbrišite loše formulirana pitanja i ispravite pogreške prije nego što počnete redovito ponavljati špil. [Kako ispraviti kartice koje je izradio AI](/blog/how-to-fix-ai-flashcards/) donosi praktičan popis za provjeru i doradu.

AI Tutor ima sličan postupak uvoza. [Službeni vodič za uvoz lekcija](https://help.gizmo.ai/en/articles/15935404-how-do-i-use-magic-import-to-start-an-ai-tutor-lesson) navodi PDF, PowerPoint, YouTube, bilješke, fotografije, snimljena predavanja, skupove iz Quizleta i postojeći Gizmov špil. Tutor zatim poučava na temelju tog materijala i usput postavlja pitanja.

Ta dva dokumentirana popisa izvora nisu jednaka. Anki, proračunske tablice i web-stranice pojavljuju se u vodiču za izradu kartica; YouTube i postojeći Gizmov špil pojavljuju se u vodiču za Tutorove lekcije. Provjerite postupak koji vam stvarno treba, umjesto da pretpostavite da su svi izvori dostupni u oba izbornika.

## Gizmo ima pet vrsta kartica

Gizmova aktualna [dokumentacija o vrstama kartica](https://help.gizmo.ai/en/articles/16527223-what-types-of-flashcards-can-i-make) navodi pet formata:

| Vrsta kartice | Što provjerava | Kako se izrađuje |
| --- | --- | --- |
| **Card text** (tekst kartice) | Tekst ili LaTeX s označenim riječima koje se provjeravaju u kvizu; moguć je i prikaz s otkrivanjem prednje i stražnje strane | Ručno ili putem Magic Importa |
| **Multiple choice** (višestruki izbor) | Pitanje s generiranim ponuđenim odgovorima; pri uređivanju možete dodati pogrešne odgovore | Ručno ili putem Magic Importa |
| **Matching** (povezivanje) | Parove koje Gizmo izmiješa pa ih ponovno povezujete | Samo putem Magic Importa |
| **Ordering** (slaganje u redoslijed) | Stavke koje Gizmo izmiješa pa ih vraćate u pravilan redoslijed | Samo putem Magic Importa |
| **True/False** (točno/netočno) | Tvrdnju za koju odlučujete je li točna ili netočna | Ručno ili putem Magic Importa |

Ponuda je šira od osnovnog špila s prednjom i stražnjom stranom. Magic Import pritom nije samo prečac: Matching i Ordering trenutačno se mogu izraditi samo njime.

U dokumentaciji postoji neslaganje koje treba spomenuti. Stranica o vrstama kartica kaže da Card text može sadržavati slike na prednjoj i stražnjoj strani. Gizmov [vodič za upravljanje karticama](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards) kaže da se fotografije i slike mogu dodavati samo na prednju stranu. Ako su vam slike na stražnjoj strani važne, provjerite aktualni uređivač prije izrade špila. Te dvije službene stranice ne omogućuju pouzdaniji zaključak.

Gizmo također navodi da postavke kviza utječu na stilove pitanja koje vidite. Format spremljene kartice i način na koji kviz provjerava njezin sadržaj povezani su, ali nisu isto.

## Ciklus učenja obuhvaća više od kartica

Memorise je glavni način ponavljanja kartica. Gizmo označava ključne riječi, postavlja pitanja o njima i koristi razmaknuto ponavljanje kako bi vam s vremenom ponovno prikazivao kartice. Magic Import automatski odabire označene riječi, ali ih možete promijeniti.

AI Tutor ima drukčiju ulogu. Može vas voditi kroz gradivo korak po korak, generirati bilješke i postavljati pitanja na temelju izvora. To je korisno kad imate predavanje ili dokument, ali još niste odlučili koji sadržaj vrijedi pretvoriti u karticu za dugoročno ponavljanje.

U oba načina rada Gizmo napredovanju dodaje elemente igre. Odgovaranjem u kvizovima napredujete kroz XP, Levels, Leagues i Streaks, dok Hearts, Hints i Coins utječu na tijek besplatnih kvizova. Ako vam ti elementi olakšavaju svakodnevni povratak učenju, imaju stvarnu ulogu pri odabiru proizvoda.

Ipak, kratko pitanje za prisjećanje i zadatak s više koraka služe različitim svrhama. [Kartice za učenje ili probni testovi](/blog/flashcards-vs-practice-tests/) objašnjava zašto je njihovo kombiniranje obično korisnije od pokušaja da svaku temu smjestite na karticu.

## Četiri ograničenja koja treba provjeriti prije prijenosa gradiva u Gizmo

### Generirane kartice i dalje treba provjeriti

Gizmo izričito preporučuje pregled špila nakon Magic Importa i predlaže podjelu velikih dokumenata na manje cjeline. Praktičan postupak je jednostavan: uvezite jednu jasno ograničenu cjelinu, usporedite rezultat s izvorom, ispravite ili uklonite loše kartice, pa počnite ponavljati. Generiranje štedi tipkanje; provjera i dorada i dalje su potrebne.

### Uređivanje je lakše izvan načina Memorise

Gizmov [vodič za upravljanje karticama](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards) navodi da možete uređivati tekst na prednjoj i stražnjoj strani, dodavati oblikovanje i slike na prednju stranu, mijenjati ponuđene odgovore u pitanjima s višestrukim izborom, premještati kartice i brisati ih.

Ograničenje se pojavljuje u načinu Memorise: ondje možete izbrisati karticu, ali je trenutačno ne možete uređivati usred kviza. Ako tijekom učenja uočite pogrešan odgovor, morate izaći iz tog načina rada da biste ga ispravili.

### Izvoz iz Gizma nije dostupan

Isti službeni vodič navodi da izvoz kartica još nije dostupan. Gizmov [vodič za upravljanje špilovima](https://help.gizmo.ai/en/articles/12995587-how-do-i-make-changes-to-my-decks) navodi da nije dostupan ni izvoz špilova.

To je najjasnije trenutačno ograničenje kontrole nad podacima. Gizmo prihvaća materijal iz više drugih sustava, ali trenutačno ne nudi dokumentiran način da nastale kartice prenesete iz njega. Ako vam je budući prijenos važan, procijenite proizvod prema tom sadašnjem ograničenju, a ne prema mogućnosti da se izvoz pojavi kasnije.

### Dokumentacija nije dovoljna da bi se zajamčio rad bez interneta

Nisam pronašao službeni Gizmov članak pomoći koji jamči izvanmrežni način rada, spremanje promjena najprije na uređaj ili određen postupak sinkronizacije nakon ponovnog povezivanja. Ni pregledane stranice proizvoda ni pretraživanje centra za pomoć za ovu recenziju nisu razjasnili te mogućnosti.

To **ne** dokazuje da Gizmo ne može raditi bez interneta. Znači da pregledani službeni izvori nisu dovoljni da bismo takav rad mogli zajamčiti. Ako vam je učenje bez interneta važno, testirajte aplikaciju koju koristite na svojem uređaju u zrakoplovnom načinu rada: zatvorite i ponovno otvorite aplikaciju, ponovite karticu, napravite izmjenu, ponovno se povežite i provjerite jesu li i izmjena i povijest ponavljanja sačuvane.

Razlika je važna jer su „učitani zaslon i dalje reagira” i „moja povijest ponavljanja sigurno je spremljena i poslije će se sinkronizirati” različite tvrdnje. [Vodič za aplikacije s karticama koje rade bez interneta](/blog/best-offline-flashcards-app/) primjenjuje taj stroži test na nekoliko proizvoda.

## Gizmo i Nibomo na prvi pogled

| Kriterij | Gizmo | Nibomo |
| --- | --- | --- |
| Glavna polazna točka | Ručna izrada kartica ili Magic Import iz raznih izvora za učenje | Ručna izrada ciljanih kartica s prednjom i stražnjom stranom ili izrada uz pomoć AI-ja |
| Formati kartica | Card text, Multiple choice, Matching, Ordering i True/False | Kartice s prednjom i stražnjom stranom |
| Poučavanje uz špil | Lekcije u značajki AI Tutor, bilješke i pitanja na temelju izvora | Izrada kartica uz pomoć AI-ja; aktualne stranice proizvoda ne dokumentiraju način rada s Tutorovim lekcijama |
| Način ponavljanja | Memorise, razmaknuto ponavljanje i razni stilovi pitanja | Razmaknuto ponavljanje uz FSRS |
| Sustav motivacije | XP, Levels, Leagues, Streaks, Hearts, Hints i Coins | Aktualne stranice proizvoda ne dokumentiraju usporediv sustav igre |
| Dokazi o radu bez interneta | U pregledanoj dokumentaciji nije pronađeno službeno jamstvo rada bez interneta | Učenje bez interneta na mobitelu i automatska sinkronizacija dokumentirane su značajke |
| Prijenos podataka iz aplikacije | Izvoz kartica i špilova trenutačno nije dostupan | Prenosivi izvozi uključuju kartice, oznake i pripadajuće medijske datoteke |
| Kontrola nad hostingom | U pregledanim službenim stranicama nema tvrdnje o mogućnosti vlastitog hostinga | Otvoren kôd i mogućnost vlastitog hostinga |

Nibomo je praktična alternativa Gizmu ako vam odgovara uži raspon mogućnosti prikazan u tablici. Njegova aktualna [stranica značajki](/hr/features/) dokumentira FSRS, izradu kartica uz pomoć AI-ja, učenje bez interneta na mobitelu i sinkronizaciju, prenosive izvoze i vlastiti hosting. Ne opisuje ekvivalent Gizmovu Magic Importu s pet formata, Tutorovim lekcijama ni sustavu igre.

## Kada Nibomo bolje odgovara

Odaberite Nibomo kad želite sačuvati provjerenu karticu s prednjom i stražnjom stranom. Možete je izraditi ručno ili zamoliti AI da pomogne u pisanju i doradi, a zatim odlučiti što će se spremiti. Ponavljanje koristi FSRS; [FSRS ili SM-2](/blog/fsrs-vs-sm-2/) detaljnije objašnjava model raspoređivanja ponavljanja.

Dokumentacija jasnije opisuje rad bez interneta i prijenos podataka iz aplikacije. Nibomo dokumentira učenje bez interneta na mobitelu s automatskom sinkronizacijom, dok [vodič za početak rada](/hr/docs/getting-started/) navodi da iOS klijent koristi lokalni SQLite i sinkronizaciju osmišljenu prvenstveno za rad bez interneta. Prenosivi izvozi uključuju kartice, oznake i pripadajuće medijske datoteke te omogućuju prijenos između hostiranih instalacija i onih na vlastitom poslužitelju.

Kompromis je u opsegu mogućnosti. Aktualne Nibomove stranice ne dokumentiraju Gizmov izbornik za uvoz, pet vrsta kartica, lekcije koje vodi Tutor ni sustav nagrada. Ako te značajke rješavaju problem zbog kojeg ste došli ovdje, Gizmo vam vjerojatno bolje odgovara.

## Možete li prijeći iz Gizma u drugu aplikaciju?

Trenutačno to nije jednostavno. Budući da izvoz iz Gizma nije dostupan, nema uobičajenog prijenosa putem datoteke iz Gizma u Nibomo ili drugu aplikaciju.

Sigurno rješenje podrazumijeva ručan prijenos odabranih kartica:

1. Držite pri ruci izvorno predavanje, bilješke, slajdove ili drugi izvor.
2. Ponovno izradite samo kartice koje su i dalje točne i korisne.
3. Preoblikujte nejasna pitanja umjesto da kopirate svaku generiranu karticu.
4. Računajte da će Gizmove oznake riječi, Tutorov kontekst, povijest raspoređivanja ponavljanja, XP i ostali napredak ostati u Gizmu.

To je sporije od automatskog uvoza i dio se podataka gubi. Korisna je posljedica to što prenosite samo kartice koje prođu provjeru kvalitete.

Druga je mogućnost koristiti obje aplikacije. Gizmo može razraditi predavanje ili prezentaciju i ponuditi raznolike vježbe. Nibomo može čuvati manji skup provjerenih kartica s prednjom i stražnjom stranom za ponavljanje uz FSRS. Prijenos i dalje ostaje ručan jer Gizmo ne izvozi kartice.

## Koji vam način rada odgovara?

Odaberite Gizmo kad krećete s neuređenim izvornim materijalom i želite da aplikacija složi početnu strukturu za učenje. Njegove dokumentirane prednosti su raznovrsni izvori, pet vrsta kartica, učenje uz Tutora, raznoliki kvizovi i mehanike napredovanja.

Odaberite Nibomo kad već znate što zaslužuje karticu s prednjom i stražnjom stranom za dugoročno ponavljanje, a FSRS, dokumentirano učenje bez interneta na mobitelu, izvoz ili vlastiti hosting važniji su vam od raznolikosti kvizova i nagrada.

Pri procjeni Gizma nije dovoljno usporediti „s AI-jem ili bez njega”. Oba proizvoda koriste AI; razlikuju se po njegovoj ulozi. Gizmo ga koristi da od opsežnog materijala stvori šire okruženje za učenje. U Nibomu AI pomaže pri radu s karticama užeg opsega, a sami birate što će se spremiti i uključiti u raspored ponavljanja.

Ako vam taj jednostavniji način rada bolje odgovara, istražite [Nibomove značajke](/hr/features/) ili slijedite [vodič za početak rada](/hr/docs/getting-started/).
