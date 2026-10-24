---
title: "Kako izraditi kartice za učenje uz Claude u 2026.: Projects, prijenos datoteka i ponavljanje uz FSRS"
description: "Praktičan način izrade kartica uz Claude u 2026.: u značajci Projects učitaj datoteke, izradi kraće i jasnije kartice pa najbolje prebaci u Nibomo za ponavljanje uz FSRS."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "kako izraditi kartice za učenje uz Claude"
  - "Claude kartice za učenje"
  - "iz Claudea u kartice za učenje"
  - "Claude Projects kartice za učenje"
  - "Claude prijenos datoteka kartice za učenje"
  - "Claude iz PDF-a u kartice za učenje"
  - "izrada kartica za učenje uz Claude"
  - "FSRS kartice za učenje"
---

> [Poveži s Claudeom](https://claude.ai/directory/nibomo) · [Dokumentacija](/hr/docs/mcp-connector/)

Jučer sam u Claude ubacio plan jednog predavanja i jedan neuredan PDF s gradivom za čitanje te zatražio kartice za učenje. Nekoliko ih je bilo dobro. Na ostalima se prepoznavao onaj poznati prizvuk umjetne inteligencije: bile su tehnički točne, neobično uglađene i mnogo teže za ponavljanje nego što se činilo pri prvom čitanju.

Upravo je to pravi problem kad se pitamo **kako izraditi kartice za učenje uz Claude**.

Claude dobro pretvara izvorno gradivo u prijedloge kartica. No to ne znači da dobro procjenjuje što vrijedi dugoročno ponavljati, koliko kartica treba biti kratka ili hoćeš li sljedećeg četvrtka i dalje lako moći ocijeniti odgovor koji sada lijepo zvuči.

Zato je postupak kojem bih u 2026. stvarno vjerovao uži nego što ljudi isprva žele: drži jednu temu u jednom Claudeovu projektu, učitaj samo gradivo za tu skupinu kartica, zatraži jednostavne prijedloge s prednjom i stražnjom stranom, nemilosrdno briši, a ono što ostane prebaci u pravi sustav za učenje s karticama i FSRS-om.

![Topao prizor radnog stola s nacrtima projekata u stilu Claudea, prikazima prijenosa datoteka i odabranim karticama za ponavljanje uz FSRS](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude je napokon prilagođen ovakvom radu

Ovo pitanje danas ima više smisla jer je Claude bolje prilagođen učenju nego prije.

Anthropic je predstavio **Claude for Education** **2. travnja 2025.**, uključujući **Learning Mode** unutar značajke Projects. Jednako je važna njegova aktualna dokumentacija. Anthropicova stranica pomoći za Projects, s datumom **16. ožujka 2026.**, navodi da su projekti dostupni svim korisnicima i da besplatni računi mogu izraditi do pet projekata. Stranica pomoći za prijenos datoteka, s datumom **22. travnja 2026.**, navodi da Claude podržava vrste datoteka pogodne za učenje, među kojima su **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON i XLSX**.

To daje **karticama za učenje izrađenima uz Claude** mnogo bolju polaznu točku od starog postupka „ubaci sve u jedan razgovor i nadaj se najboljem”.

Anthropicovo izvješće o obrazovanju pokazuje i da je takva upotreba već uobičajena. Prema izvješću, studenti su Claude prvenstveno koristili za izradu i poboljšavanje obrazovnog sadržaja u **39,3 %** analiziranih razgovora povezanih s obrazovanjem. Zanimljivo pitanje zato više nije koriste li ljudi Claude za gradivo za učenje. Očito ga koriste. Korisnije je pitanje kako to gradivo pretvoriti u kartice koje će se kasnije isplatiti ponavljati.

## Kreni s jednim Claudeovim projektom za svaki kolegij, ispit ili temu

To je prva navika koju bih zadržao jer poboljšava gotovo sve što slijedi.

Claudeova aktualna dokumentacija opisuje Projects kao zasebne radne prostore s vlastitom poviješću razgovora i bazom znanja. Upravo to trebaš za izradu prijedloga kartica.

Nemoj napraviti jedan golemi Claudeov radni prostor nazvan `škola`.

Napravi zaseban projekt za:

- jedan kolegij
- jedan certifikacijski ispit
- jednu nastavnu cjelinu koju želiš završiti ovaj tjedan
- jednu skupinu tema koje stvarno pripadaju zajedno

Prijedlozi će tako biti jasniji jer Claude neće pokušavati spojiti nepovezano gradivo iz četiri predmeta u jedan odgovor. I uređivanje će biti manje zamorno jer znaš što je svaka skupina kartica trebala obuhvatiti.

Ako Claude koristiš i šire, kao pomoć pri učenju, a ne samo za izradu kartica, bolji popratni tekst je [Kako koristiti Claude za učenje u 2026.](/hr/blog/how-to-use-claude-for-studying/). Ovaj je članak uži. Bavi se prijelazom od Claudeova odgovora do kartica koje će ti i pri ponavljanju djelovati smisleno.

## Jednom postavi upute projekta kako bi svaka skupina kartica bila bolja od početka

To je jedna od najkorisnijih prednosti koje nudi baš Claude.

Anthropicove aktualne upute za Projects navode da možeš postaviti **upute projekta** kako bi se Claude držao istih zahtjeva u svim razgovorima unutar tog projekta. Kod kartica to znači da ne moraš ponavljati ista pravila oblikovanja i izbacivanja sadržaja svaki put kad učitaš novi odjeljak.

Upute projekta zadržao bih kratkima i jednostavnima:

```text
Kad zatražim kartice za učenje, koristi jednostavan format s prednjom i stražnjom stranom. Jedan pojam, činjenica, razlika ili korak postupka po kartici. Pitanja na prednjoj strani moraju biti konkretna i takva da je na njih moguće odgovoriti. Odgovori na stražnjoj strani neka budu kratki. Preskoči duplikate, nejasna pitanja i sve za što je potreban kontekst izvornog gradiva koji nije naveden na kartici.
```

Upute za pojedini zadatak zatim napiši u samom razgovoru kad učitaš novu skupinu gradiva.

Ta podjela dobro funkcionira: upute projekta postavljaju opća pravila, a poruka u razgovoru bavi se aktualnim predavanjem, poglavljem ili skupom pitanja.

## Učitavaj manje cjeline gradiva nego što misliš da trebaš

Tu većina postupaka **izrade kartica za učenje uz Claude** počne gubiti kvalitetu.

Ljudi vide mogućnost prijenosa datoteka i shvate je kao poziv da u jedan zahtjev ubace materijale cijelog kolegija. To obično daje lošije kartice.

I Anthropicova dokumentacija o prijenosu datoteka za velike dokumente preporučuje jednostavan pristup: podijeli ih na manje odjeljke. Upravo bih to napravio.

Bolji ulazni materijali su:

- bilješke s jednog predavanja
- jedan odjeljak zadanog teksta
- jedan skup ispravljenih pitanja za vježbu
- jedan pododjeljak poglavlja
- jedan sređen dio vodiča za učenje

Lošiji ulazni materijali su:

- cijeli udžbenik
- dvanaest predavanja odjednom
- jedna nesređena mapa s gradivom za cijeli semestar
- golema hrpa prijepisa koju zapravo ne želiš ponavljati karticu po karticu

Male cjeline tjeraju te na iskrenije pitanje: što iz ovog odjeljka vrijedi kasnije dozvati iz pamćenja bez ponovnog otvaranja izvora?

To pitanje pomaže da špil ostane manji i bolji.

## Claude dobro izrađuje prijedloge iz gradiva, ali ti biraš što je važno

Mislim da je to najkorisniji način gledanja na ovaj postupak.

Claude može:

- sažeti odjeljak teksta
- jasnije preformulirati pojam
- razdvojiti očite podteme
- pretvoriti bilješke u prijedloge kartica s pitanjima i odgovorima
- uočiti ponovljene izraze i definicije

Claude ne zna automatski:

- koje su ti činjenice već dovoljno očite da ih možeš preskočiti
- koje te razlike stalno zbunjuju
- koji je odgovor predug za brzo ocjenjivanje
- koja kartica ima smisla samo zato što se još sjećaš odlomka iz kojeg je nastala

Zato **izrada kartica za učenje uz Claude** najbolje funkcionira kad Claude predlaže, a ti uređuješ.

Ako zatražiš da Claude odluči o svemu, obično dobiješ špil koji previše čuva izvorni sadržaj. Zadržava previše, objašnjava previše i uključuje gradivo koje se u tom trenutku činilo korisnim, ali ne zaslužuje buduća ponavljanja.

## Napiši jednostavan zahtjev i prepusti jasnim pravilima da odrade posao

Ne treba ti teatralan zahtjev.

U samom razgovoru upotrijebio bih nešto poput ovoga:

```text
Pretvori ovo gradivo u jednostavne kartice za učenje s prednjom i stražnjom stranom.

Pravila:
- Jedna činjenica, razlika ili korak postupka po kartici
- Pitanje na prednjoj strani mora biti konkretno i takvo da je na njega moguće odgovoriti
- Stražnja strana mora biti kratka i izravna
- Bez izmišljenih činjenica
- Preskoči duplikate i nejasna pitanja
- Preskoči kartice za koje je potreban kontekst izvornog dokumenta koji nije naveden na kartici
- Nemilosrdno izbaci kartice koje nisu vrijedne dugoročnog ponavljanja
```

Ako je izvor skup ispravljenih pitanja, dodaj jednu rečenicu:

```text
Daj prednost pogreškama, nedoumicama i razlikama kod kojih ću vjerojatno ponovno pogriješiti.
```

To je dovoljno.

Korisna su pravila jednostavna:

- jedan cilj prisjećanja po kartici
- kratki odgovori
- bez izmišljenih činjenica
- bez širokih pitanja koja traže sažetak
- bez kartica uz koje i dalje moraš držati otvoreno cijelo izvorno gradivo

Claude obično dobro reagira na jasne granice. Problem je rijetko u nedostatku čarobne formulacije. Problem je u tome što ljudi traže previše odjednom.

## Najbolje Claudeove kartice obično nastaju iz tri vrste gradiva

Claudeu najviše vjerujem kad je izvorno gradivo već gotovo spremno za kartice, ali ga još treba srediti.

Najbolji su primjeri:

- bilješke s predavanja koje treba sažeti
- tekstovi iz kojih treba izvući bitno
- ispravljena pitanja koja otkrivaju jednu konkretnu pogrešku

Taj je obrazac važan jer Claude ne izmišlja sustav učenja od nule. Pomaže ti pretvoriti sirovo gradivo u preciznije ciljeve prisjećanja.

Ako uglavnom polaziš od bilježaka, članak [Kako pretvoriti bilješke u kartice za učenje u 2026. (na engleskom)](/blog/turn-notes-into-flashcards/) detaljnije obrađuje sređivanje gradiva. Kod datoteka izdvoji mali, relevantan odjeljak te provjeri tekst, jednadžbe i oznake prije nego što prihvatiš prijedloge kartica.

## Izbriši kartice koje još zvuče kao Claude

Tu se događa pravi skok u kvaliteti.

Kartice koje Claude izradi često imaju prepoznatljive nedostatke:

- prednja strana zvuči elegantno, ali na pitanje nije moguće jasno odgovoriti
- stražnja strana sadrži tri činjenice jer su u odlomku bile tri činjenice
- kartica zadržava neodređene izraze poput „ključna razmatranja” ili „važni čimbenici”
- tekst je dovoljno jasan da mu se diviš, ali naporan za ponavljanje

Takve bih odmah izbacio.

Prednja strana kartice ne treba zvučati kao uvodna rečenica vodiča za učenje. Treba zvučati kao pitanje na koje ili znaš odgovor ili ne znaš.

Zadrži karticu samo ako:

- možeš odgovoriti bez ponovnog otvaranja izvora
- odgovor je dovoljno kratak da ga brzo ocijeniš
- provjerava jedan pojam, a ne cijelu skupinu
- i za tjedan dana želiš pamtiti taj sadržaj

Ako nije tako, izbriši je.

To je glavna razlika između razgovora s Claudeom koji djeluje produktivno i špila koji ostaje koristan.

## Jedna slaba Claudeova kartica i verzija koju bih stvarno zadržao

Recimo da Claude pročita odlomak o glikolizi i ponudi ti ovo:

- Prednja strana: Koja su ključna obilježja i ishodi glikolize?
  Stražnja strana: Glikoliza je metabolički put koji se odvija u citoplazmi, pretvara glukozu u piruvat, proizvodi ATP i NADH te ne zahtijeva kisik.

To nije jedna kartica. To je odlomak s naljepnicom.

Bolja verzija obično je nekoliko manjih kartica:

- Prednja strana: Gdje se odvija glikoliza?
  Stražnja strana: U citoplazmi.
- Prednja strana: Koju molekulu glikoliza razgrađuje?
  Stražnja strana: Glukozu.
- Prednja strana: Zahtijeva li glikoliza kisik?
  Stražnja strana: Ne.

Možda zadržiš još jednu karticu o produktima ako je ta razlika važna na tvojem kolegiju.

Cilj nije sačuvati Claudeov uglađeni odgovor. Cilj je sačuvati ono što se iz tog odgovora može zasebno provjeriti prisjećanjem.

## Nemoj brkati Claudeovo pamćenje i kontekst s razmaknutim ponavljanjem

Claude danas ima bolje alate za kontekst nego prije. Projekti pomažu. Učitane datoteke pomažu. Upute projekta pomažu. Sve je to korisno.

Ipak, to nije isto što i sustav za ponavljanje.

Claude može zadržati kontekst određene teme. Može bolje pamtiti tijek razgovora nego stariji alati za razgovor. Ništa od toga ne zamjenjuje onaj dosadni dio koji je kasnije stvarno važan: ponovno vidjeti pravu karticu u pravo vrijeme.

Zato bi **kartice izrađene u značajci Claude Projects** trebale završiti u pravoj aplikaciji za kartice, umjesto da ostanu unutar samog projekta.

Claude može čuvati kontekst.

FSRS se bavi zaboravljanjem.

To su različiti zadaci.

Ako te detaljnije zanima raspoređivanje ponavljanja, izravan nastavak je [FSRS i SM-2 u 2026. (na engleskom)](/blog/fsrs-vs-sm-2/).

## Spremi odobrene kartice u Nibomo

Otvori [Nibomo u Claudeovu direktoriju](https://claude.ai/directory/nibomo), poveži ga, prijavi se na svoj Nibomo račun i odobri pristup. Nibomo je naveden među konektorima zajednice (Community).

Zatraži od Claudea da putem Nibomova MCP konektora spremi samo kartice koje si provjerio i odobrio. Pregledaj odredišni radni prostor i zahtjev za upis, odobri ga, a zatim provjeri spremljene kartice u Nibomu prije nego što ih počneš ponavljati uz FSRS. I dalje ih možeš kopirati ručno.

[Nibomo](/hr/) se uklapa u ovaj postupak jer trenutačno pokriva dio koji Claude sam ne dovršava:

- izradu i uređivanje kartica s prednjom i stražnjom stranom
- razgovor s umjetnom inteligencijom uz podatke radnog prostora i priložene datoteke
- špilove i oznake za organiziranje konačnih kartica
- ponavljanje uz FSRS kad kartice postanu vrijedne čuvanja
- web-aplikaciju dostupnu na mreži ako želiš brzo početi
- mogućnost samostalnog hostanja ako kasnije želiš pokrenuti vlastiti sustav

Za najbrži početak tu su [Prvi koraci](/hr/docs/getting-started/) s uputama za web-aplikaciju dostupnu na mreži. Ako ti je važnija kontrola nad vlastitim sustavom, pravi je nastavak [vodič za samostalno hostanje](/hr/docs/self-hosting/).

## Postupak koji bih stvarno ponavljao

Dobar odgovor na pitanje **kako izraditi kartice za učenje uz Claude** dovoljno je kratak da ga nastaviš primjenjivati i kad prođe početno oduševljenje.

Ovu bih verziju zadržao:

1. Napravi jedan Claudeov projekt za jedan kolegij, ispit ili temu.
2. Dodaj kratke upute projekta s pravilima za prednju i stražnju stranu kartica.
3. Učitaj jednu malu cjelinu: predavanje, odjeljak teksta ili ispravljena pitanja za vježbu.
4. Zatraži od Claudea jednostavne prijedloge s prednjom i stražnjom stranom.
5. Odmah izbriši ili prepravi slabe kartice.
6. Zatraži od Claudea da putem Nibomova MCP konektora spremi samo kartice koje si provjerio i odobrio. Pregledaj odredišni radni prostor i zahtjev za upis, odobri ga, a zatim provjeri spremljene kartice u Nibomu prije nego što ih počneš ponavljati uz FSRS. I dalje ih možeš kopirati ručno.
7. Ponavljaj konačni špil uz FSRS.

Takav je postupak uvjerljiviji od pretvaranja da je sam Claude mjesto kojem treba povjeriti pamćenje gradiva.

Ako tvoj špil izrađen uz umjetnu inteligenciju već djeluje pretrpano, prestani prihvaćati nove prijedloge i popravi postojeće uz članak [Kako popraviti kartice izrađene uz umjetnu inteligenciju u 2026. (na engleskom)](/blog/how-to-fix-ai-flashcards/).

## Bolje pravilo za izradu kartica uz Claude

Nemoj tražiti od Claudea da odradi učenje umjesto tebe.

Traži da ukloni administrativni dio posla.

To je pristup **izradi kartica za učenje uz Claude** koji stvarno drži vodu u 2026.:

- jedan projekt po temi
- jedna mala cjelina odjednom
- jedna činjenica ili razlika po kartici
- nemilosrdno brisanje
- pravo ponavljanje nakon toga

Claude ti pomaže da brže dođeš od neurednog izvornog gradiva do prijedloga kartica.

Nibomo i FSRS te prijedloge pretvaraju u nešto čega ćeš se možda sjećati i za mjesec dana.
