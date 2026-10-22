---
title: "Kako koristiti Claudea za učenje u 2026.: praktičan postupak"
description: "Učite uz Claudea iz vlastitih bilježaka, odgovarajte na jedno po jedno pitanje, provjerite ispravke i pretvorite slabe točke u kartice, u skladu s pravilima kolegija."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "kako koristiti Claudea za učenje"
  - "Claude za učenje"
  - "postupak učenja uz Claudea"
  - "Claude instruktor"
  - "Claude kartice za učenje"
  - "Claude Learning Mode"
---

Ako želite naučiti **kako koristiti Claudea za učenje**, počnite s manjim skupom bilježaka s kolegija. Provjerite što te bilješke potkrepljuju i odgovarajte na jedno po jedno pitanje prije nego što dobijete pomoć. Provjerite ispravke, a zatim spremite slabe točke koje trebate ponovno uvježbati. Za taj posljednji korak preporučujem [dodatak Nibomo za Claude](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): Claudeu daje postupke za izradu kartica za učenje, ponavljanje kartica kada dođu na red i poboljšavanje kartica koje vas zbunjuju.

Koristan je ciklus **provjera izvora → odgovor iz pamćenja → provjera → spremanje → ponavljanje prema rasporedu**. Upute za poduku funkcioniraju u običnom razgovoru s Claudeom; dodatak povezuje to učenje sa spremljenim karticama i rasporedom ponavljanja.

> **Napomena o autoru:** Ja sam Kirill Markin i razvijam [Nibomo](/hr/features/). Istraživanje za članak i njegovo uređivanje provedeni su uz pomoć umjetne inteligencije.

**Činjenice provjerene:** 22. listopada 2026.

![Radni stol za učenje na kojem su izvorne bilješke povezane s jednim pitanjem i dvjema provjerenim karticama za slabe točke, uz izdvojenu nejasnu bilješku](/blog/how-to-use-claude-for-studying-v2.png)

## Kratki postupak učenja uz Claudea

Primijenite ove korake na jedan dio predavanja, tekst za čitanje ili skup zadataka:

1. Provjerite što pravila kolegija dopuštaju pri korištenju umjetne inteligencije.
2. Dajte Claudeu manji, jasno imenovan skup izvornih materijala.
3. Zatražite da prije poučavanja označi informacije koje nedostaju, proturječe jedne drugima ili su nečitljive.
4. Odgovarajte na jedno po jedno pitanje iz pamćenja.
5. Zabilježite ispravak, mjesto u izvoru i sve neizvjesnosti.
6. Sami provjerite važne odgovore.
7. Spremite nekoliko provjerenih slabih točaka koje vrijedi dugoročno uvježbavati kao kartice u Nibomu.
8. Ponavljajte spremljene kartice kada dođu na red, u Claudeu ili aplikaciji Nibomo.

Redoslijed je važan. Ispitivanje na temelju nejasnog izvora samo otežava uočavanje nejasnoća.

## Postavite Nibomo u Claudeu

Otvorite [dodatak Nibomo](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) ili odaberite **Customize → Plugins**, pronađite Nibomo i kliknite **Add**. Ako je već instaliran, provjerite je li omogućen.

Povežite konektor Nibomo koji dolazi s dodatkom. Slijedite postupak prijave, prijavite se na svoj račun za Nibomo ili ga izradite i odobrite Claudeu pristup. Kada se to od vas zatraži, odaberite željeni radni prostor. Ovaj postupak ne zahtijeva kopiranje API tokena ni unos adrese poslužitelja.

Dodatak donosi postupke za izradu, ponavljanje i poboljšavanje kartica. Njegov MCP konektor omogućuje Claudeu čitanje i ažuriranje vašeg računa za Nibomo. [Konektor možete pronaći i u Claudeovu katalogu](https://claude.ai/directory/nibomo). Naš [vodič za povezivanje s Claudeom](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (na engleskom) i [dokumentacija MCP konektora](/hr/docs/mcp-connector/) detaljnije objašnjavaju tu vezu.

Anthropic trenutačno omogućuje [dodatke u pretplatama Pro, Max, Team i Enterprise](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), u Claudeu na webu, na kartici Chat u aplikaciji Claude Desktop te u Coworku. Ako vaš račun nema dodatke, i dalje možete koristiti upute za poduku u nastavku i ručno kopirati odabrane kartice u svoju aplikaciju za ponavljanje.

## Provjerite pravila kolegija prije prvog učitavanja

Počnite od izvedbenog plana kolegija, uputa za zadatak i pravila ustanove o korištenju umjetne inteligencije. Pravila se mogu razlikovati među kolegijima i zadacima, pa zapišite što je dopušteno za ovaj konkretan zadatak: objašnjenja, pitanja za vježbu, povratne informacije, izrada nacrta, pomoć s citiranjem ili ništa od navedenog.

Anthropicove [upute za studente koji koriste Claude for Education](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) navode objašnjenja, pitanja za vježbu, vodiče za učenje i kartice kao načine korištenja pri učenju. Iste upute kažu da treba poštovati pravila ustanove o akademskoj čestitosti i ne koristiti Claudea za rad koji trebate obaviti samostalno.

Iz toga proizlaze praktične granice:

- Koristite Claudea za uvježbavanje pojmova kada su poduka i vježba dopuštene.
- Nemojte tražiti da riješi provjeru znanja koja je u tijeku i koju morate obaviti sami.
- Nemojte učitavati povjerljive, osobne, autorskim pravom zaštićene ili ograničeno dostupne materijale kolegija ako nemate dopuštenje za dijeljenje s tom uslugom.
- Ako su pravila nejasna, pitajte nastavnika prije početka rada koji se ocjenjuje.

Rad neka bude vaš. Povratne informacije nakon vlastitog pokušaja mogu biti dopuštena pomoć pri učenju; predaja Claudeova rada kao vlastitog može prekršiti pravila kolegija.

## Stavite prave datoteke na pravo mjesto

Za kratko učenje dovoljan je jedan razgovor. Za kolegij koji pratite dulje vrijeme izradite jedan Claude Project i dodajte samo materijale koji mu pripadaju.

[Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) dostupni su svim korisnicima, a računi Free trenutačno su ograničeni na pet projekata. U bazu znanja projekta dodajte upravo one datoteke kolegija i upute za učenje koje želite koristiti kako bi bile dostupne u svim razgovorima unutar projekta.

Kada je memorija omogućena, projekt može prenositi zapamćeni kontekst između razgovora. Tu memoriju koristite kao kontekst za učenje, a ne kao mjerodavan prijepis ili zamjenu za izvorne datoteke. Dokaze i ispravke koje trebate ponovno koristiti čuvajte u bazi znanja projekta te tražite od Claudea da navede izvorni materijal.

Claudeova [dokumentacija o učitavanju datoteka](https://support.claude.com/en/articles/8241126-upload-files-to-claude) trenutačno navodi PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON i XLSX te slike JPEG, PNG, GIF i WebP. Za učitavanje XLSX datoteka moraju biti omogućeni izvršavanje koda i izrada datoteka. Datoteku možete priložiti jednom razgovoru ili je pohraniti u odjeljak Files projekta za ponovnu upotrebu.

Koristite najmanji koristan skup: jedno predavanje, dio poglavlja ili pitanja na koja ste upravo pogrešno odgovorili. U uputi jasno odredite opseg, primjerice „slajdovi 8–17” ili „odjeljak pod naslovom Vezanost gena”. U manjem skupu lakše je pronaći dokaze i primijetiti nenamjerno miješanje sadržaja.

Anthropic je predstavio [**Learning mode** unutar projekata Claude for Education](https://www.anthropic.com/news/introducing-claude-for-education) kao vođeni, sokratovski način učenja koji od studenata traži da razmišljaju umjesto da im odmah daje odgovore. Možda vam je dostupan ako vaše sveučilište pruža Claude for Education, no nemojte pretpostaviti da postoji na svakom osobnom računu za Claude. Upute u nastavku omogućuju slično učenje kroz pitanja u običnom razgovoru.

## Neka Claude otkrije nejasnoće prije poučavanja

Na slajdu s predavanja može pisati „kromosomi se razdvajaju”, ali bez naznake koji. Ako Claude neprimjetno popuni tu prazninu općim znanjem, možete početi uvježbavati samouvjeren odgovor koji vaš izvor zapravo ne potkrepljuje.

Priložite materijal, točno odredite opseg i prvo zatražite pregled izvora:

```text
Za ovo učenje koristi samo datoteke i odjeljke koje navedem. Nemoj popunjavati
praznine općim znanjem ako to izričito ne zatražim.

Prije nego što me počneš poučavati, napravi pregled izvora koji sadrži:
- pojmove koje materijal jasno objašnjava;
- termine, dijagrame ili odlomke koji su dvosmisleni ili nepotpuni;
- tekst, formule, oznake ili stranice koje ne možeš pouzdano pročitati;
- proturječja među priloženim izvorima;
- predznanje koje materijal pretpostavlja, ali ne objašnjava.

Za svaku stavku navedi naziv datoteke i stranicu, slajd ili naslov odjeljka.
Sve što nema izravnu potporu označi kao NEPOTKRIJEPLJENO. Još nemoj početi ispitivanje.
```

Usporedite pregled s datotekama. Ako Claude tvrdi da je definicija na slajdu 12, otvorite slajd 12. Ako je oznaka na grafikonu nečitljiva, zalijepite odgovarajući tekst ili učitajte jasniju sliku. Ako se dva izvora s kolegija ne slažu, zadržite to neslaganje vidljivim i pitajte nastavnika ili koristite izvor koji je na kolegiju određen kao mjerodavan.

Vanjsko objašnjenje možete zatražiti kasnije. Odvojite ga od gradiva:

```text
Izvor s kolegija ne objašnjava ovo potrebno predznanje. Objasni ga iz općeg
znanja u odjeljku označenom IZVAN GRADIVA KOLEGIJA. Nemoj to objašnjenje
prikazati kao da potječe iz mojih datoteka.
```

Ta oznaka pomaže spriječiti da opće znanje neprimjetno postane dokaz iz gradiva kolegija.

## Jedno pitanje, pa čekanje

Kada pregled izvora izgleda pouzdano, počnite vježbati dosjećanje: oblikujte odgovor prije nego što ga vidite, umjesto da samo prepoznajete dotjerano objašnjenje nakon što ga Claude prikaže.

```text
Poučavaj me samo o gradivu koje je potkrijepljeno u pregledu izvora.

Postavljaj jedno po jedno pitanje i čekaj moj odgovor. Nemoj uključivati
natuknice u pitanje. Nakon što odgovorim:
1. označi odgovor kao Točan, Djelomično točan, Netočan ili Izvor je nejasan;
2. daj kratku povratnu informaciju bez otkrivanja potpunog odgovora;
3. navedi datoteku i stranicu, slajd ili naslov odjeljka koji podupiru odgovor;
4. ako je moj odgovor djelomično točan ili netočan, daj natuknicu i dopusti mi
   da pokušam ponovno prije nego što pokažeš potpuni odgovor;
5. u evidenciju slabih točaka dodaj samo stvarnu prazninu u znanju.

Ako je izvor nejasan, označi pitanje za provjeru umjesto da tražiš da pokušam
ponovno odgovoriti.

Kombiniraj izravno dosjećanje, razlikovanje sličnih ideja i kratke primjene.
Još nemoj izrađivati kartice. Stani nakon 10 pitanja i pokaži evidenciju.
```

Jedno po jedno pitanje uklanja tragove iz kasnijih pitanja i olakšava procjenu svakog pokušaja. Uz popis od deset pitanja lako je preskočiti ona neugodna ili odgovoriti samo na dijelove koje znate.

Zatražite i da Claude mijenja vrstu pitanja. Definicije otkrivaju termine koje ne znate. Usporedbe otkrivaju pojmove koje miješate. Kratki zadaci primjene pokazuju možete li upotrijebiti ideju, a ne samo ponoviti njezinu formulaciju. Račun s više koraka riješite na papiru i pokažite postupak; sam konačni broj Claudeu daje vrlo malo osnove za otkrivanje problema.

## Vodite evidenciju dokaza i neizvjesnosti

Evidencija slabih točaka trebala bi omogućiti provjeru postupka, a ne samo bilježiti bodove. Koristite malu tablicu:

| Pitanje | Vaš odgovor | Procjena | Ispravak | Dokaz | Neizvjesnost | Sljedeći korak |
| --- | --- | --- | --- | --- | --- | --- |
| Što se razdvaja u anafazi I? | Sestrinske kromatide | Netočno | Homologni kromosomi se razdvajaju; sestrinske kromatide ostaju spojene | Predavanje 4, slajd 18 | Nema je | Pokušati ponovno, zatim razmotriti jednu karticu |

Zatražite da Claude napiše „Izvor je nejasan” kada se na temelju dokaza ne može utvrditi odgovor. Nemojte taj redak pretvarati u nešto što trebate zapamtiti. Prvo ga razjasnite.

Stupac s neizvjesnostima otkriva i manje očite probleme: dijagram koji Claude nije mogao pročitati, termin koji predavač koristi drukčije od udžbenika ili zaključak koji ovisi o neizrečenoj pretpostavci. „Vjerojatno točno” i „potkrijepljeno slajdom 18” nisu ista procjena.

## Primjer: povratne informacije tijekom učenja i jedna trajno korisna kartica

Pretpostavimo da u priloženoj bilješci s kolegija piše:

> Tijekom anafaze I homologni kromosomi pomiču se prema suprotnim polovima. Sestrinske kromatide ostaju spojene na centromerama.

Claude pita: „Što se razdvaja tijekom anafaze I?” Vi odgovorite: „Sestrinske kromatide.”

Korisna povratna informacija instruktora kratka je i konkretna:

```text
Netočno. Sestrinske kromatide ostaju spojene tijekom anafaze I. Ponovno pročitaj
te dvije rečenice: što se pomiče prema suprotnim polovima?
```

Ako priloženo gradivo obrađuje i anafazu II, Claude ih nakon ponovnog pokušaja može usporediti. To objašnjenje pripada razgovoru tijekom učenja. Slaba točka koju vrijedi trajno uvježbavati uža je:

```text
Prednja strana: Što se razdvaja tijekom anafaze I mejoze?
Stražnja strana: Homologni kromosomi; sestrinske kromatide ostaju spojene.
Dokaz: Predavanje 4, slajd 18
```

Iz jedne pogreške nastala je jedna usmjerena kartica čiji se odgovor može jasno ocijeniti. Natuknica, ponovni pokušaj, objašnjenje i ohrabrenje obavili su svoju ulogu u tom trenutku; ne morate ih sve nositi u buduća ponavljanja.

## Provjerite prije nego što povjerujete ispravku

Claude može prikazati odgovor kao konačan, a pritom pogrešno pročitati datoteku, unijeti vanjsko znanje ili prihvatiti neodređen odgovor. Provjera treba odgovarati tvrdnji:

1. **Činjenice specifične za kolegij:** otvorite navedenu stranicu ili slajd i sami usporedite formulacije, uvjete i iznimke.
2. **Riješeni zadaci:** samostalno ponovite postupak, provjerite mjerne jedinice i predznake, a zatim usporedite sa službenim rješenjima ili uputama nastavnika, ako su dostupni.
3. **Aktualne činjenice:** ako je za vaš model i račun dostupno pretraživanje weba, zatražite da Claude pretraži i navede primarne izvore. Otvorite poveznice; navedeni izvori omogućuju provjeru, ali je ne obavljaju umjesto vas.
4. **Važne ili sporne tvrdnje:** koristite propisani udžbenik, obratite se nastavnicima ili drugom autoritetu koji vaš kolegij priznaje.

Anthropicov [vodič za web-pretraživanje](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) kaže da odgovori dobiveni pretraživanjem uključuju izvore i savjetuje čitateljima da važne informacije provjere u mjerodavnim izvorima. Dostupnost pretraživanja može se razlikovati; ako nije dostupno, sami upotrijebite pouzdan izvor umjesto da dopustite Claudeu da nagađa.

Korisna uputa za provjeru namjerno je stroga:

```text
Provjeri evidenciju slabih točaka. Za svaki ispravak navedi točno mjesto u izvoru
i kratak izvadak koji ga potkrepljuje. Ako izvor ne podupire odgovor izravno,
promijeni procjenu u NEPOTKRIJEPLJENO. Navedi svaki odgovor koji ovisi o vanjskom
znanju, zaključivanju ili nečitljivom sadržaju. Nemoj te praznine popunjavati
nagađanjem.
```

Zatim sami pregledajte navedeni materijal. Claude vam pomaže pronaći dokaze, ali ih ne zamjenjuje.

## Odlučite što vrijedi ponoviti

Ne mora svaki ispravak postati kartica. Za neke praznine u znanju potreban je riješen primjer, dijagram, konzultacije ili još jedan zadatak za vježbu.

Zadržite prijedlog kartice ako:

- proizlazi iz odgovora koji ste dali pogrešno, sporo ili ste ga pomiješali sa sličnom idejom;
- je važan i izvan trenutačnog pitanja;
- se može provjeriti jednim jasnim pitanjem i jednim kratkim odgovorom;
- je potkrijepljen izvorom koji ste provjerili;
- će imati smisla i bez priloženog razgovora s Claudeom.

Preskočite ga ako:

- sam izvor ostaje nejasan;
- odgovarate na njega lako i dosljedno;
- pitanje traži cijeli esej ili postupak;
- odgovor ovisi o uvjetima koji nisu navedeni;
- bi uvježbavanje vještine pomoglo više od pamćenja rečenice.

Zatražite od Claudea prijedloge, a ne dovršen špil:

```text
Pregledaj provjerenu evidenciju slabih točaka. Predloži kartice samo za praznine
u znanju koje se ponavljaju ili su važne, a mogu se jasno provjeriti.

Svaka kartica neka provjerava samo jednu stvar za pamćenje. Prednja strana neka
bude konkretna, a stražnja kratka. Uključi mjesto u izvoru koje potkrepljuje odgovor i sve preostale
neizvjesnosti. Praznine koje traže samo vježbu stavi na poseban popis s
odgovarajućom vježbom. Još ništa nemoj spremati.
```

Ostalo odbacite. Učenje uz Claudea može biti korisno i kada ne nastane nijedna kartica.

## Spremite provjerene slabe točke u Nibomo

Nakon što provjerite dokaze, zatražite od dodatka Nibomo da odabrane praznine u znanju pretvori u spremljene kartice. Navedite radni prostor i tražite da Claude provjeri postojeće kartice prije dodavanja novih. Ova uputa traži pregled prijedloga prije spremanja:

```text
Koristi Nibomo za izradu najviše 5 kartica za učenje iz gornje provjerene
evidencije slabih točaka. Koristi moj željeni radni prostor: [naziv radnog
prostora]. Ako je naziv dvosmislen, prije spremanja potvrdi o kojem je prostoru riječ.

Provjeri postoje li duplikati ili kartice koje provjeravaju isto znanje.
Koristi samo praznine potkrijepljene dokazima koje sam provjerio. Svaka kartica
neka provjerava samo jednu stvar, s konkretnom prednjom stranom, kratkom
stražnjom stranom i mjestom u izvoru.

Prvo mi pokaži predložene kartice, njihove dokaze i moguće duplikate.
Čekaj moje odobrenje prije spremanja. Nakon spremanja potvrdi što je izrađeno
i gdje.
```

Pregled prijedloga vaša je postavka u ovoj uputi. Možete odabrati koliko želite pregledavati prije nego što zatražite da Claude spremi ili uredi kartice; to nije uvjet za svaku radnju dodatka.

Zadržite razliku iz primjera: objašnjenje vam je pomoglo razumjeti mejozu, a spremljena kartica provjerava baš razliku koju ste propustili. Dug odgovor instruktora rijetko treba postati duga kartica.

## Ponavljajte kartice u Claudeu kada dođu na red

Ispitivanje o upravo učitanim bilješkama jest poduka. Ponavljanje u Nibomu koristi već spremljene kartice koje su došle na red i bilježi rezultat koji utječe na to kada će se svaka ponovno pojaviti. Zatražite to izričito:

```text
Koristi Nibomo za desetominutno ponavljanje mojih kartica koje su došle na red
u radnom prostoru [naziv radnog prostora]. Kao moju vremensku zonu koristi
Europe/Paris.

Pokaži jedno po jedno pitanje i čekaj moj pokušaj prije nego što otkriješ
spremljeni odgovor. Zatim usporedi moj izvorni pokušaj s tim odgovorom, daj kratku
povratnu informaciju i zabilježi odgovarajuću ocjenu dosjećanja. Reci mi koju si
ocjenu zabilježio. Ocijeni izvorni pokušaj, a ne ispravljeni odgovor koji dam
nakon otkrivanja rješenja. Stani kada vrijeme istekne ili više nema kartica koje
su došle na red te sažmi ponavljanja čije je bilježenje Nibomo potvrdio.
```

Zamijenite radni prostor i vremensku zonu vlastitima. Claude obično iznosi svoju procjenu i automatski bilježi ocjenu. Ako želite sami odabrati svaku ocjenu, dodajte: „Koristi ručni način ocjenjivanja: nakon otkrivanja odgovora čekaj da odaberem Again, Hard, Good ili Easy prije nego što zabilježiš ocjenu.”

Ako na karticu o anafazi I odgovorite „sestrinske kromatide”, prepoznavanje ispravka nakon otkrivanja odgovora ne čini izvorni pokušaj točnim. Kasnije pitanje o anafazi II može provjeriti razlikujete li ih sada; ne bi smjelo naknadno poboljšati prvu ocjenu.

Možete ponavljati i u [aplikaciji Nibomo](https://app.nibomo.com/). Potvrđena ponavljanja ažuriraju isti raspored bez obzira na to odvijaju li se u aplikaciji ili Claudeu, pa možete prelaziti iz jednog u drugo bez održavanja dviju povijesti ponavljanja. Tražite da Claude jasno prijavi neuspjelo ili nepotvrđeno bilježenje, umjesto da ga smatra spremljenim napretkom.

## Poboljšajte kartice koje vas stalno zbunjuju

Ponavljane pogreške mogu otkriti nejasno pitanje, preopširan odgovor ili uvjet koji nedostaje. Zatražite da Claude pregleda karticu prije nego što zaključite da vam samo treba više ponavljanja:

```text
Koristi Nibomo za pregled kartica koje su me zbunjivale tijekom ovog učenja.
Provjeri nejasne prednje strane, više stvari za pamćenje na jednoj kartici,
uvjete koji nedostaju, nepotkrijepljene odgovore i duplikate. Usporedi predložene
ispravke s gore navedenim dokazima iz gradiva kolegija.

Pokaži postojeću karticu i predloženu izmjenu jednu uz drugu, uz kratak razlog
i mjesto u izvoru. Označi sve što se ne može razriješiti dokazima. Čekaj moje
odobrenje prije uređivanja; nemoj brisati kartice ni mijenjati nerazjašnjene činjenice.
```

Ostavite karticu kakva jest ako je pitanje jasno, a vi se samo niste mogli prisjetiti odgovora. Za praznine koje traže dijagram ili još jedan riješeni zadatak vratite se poduci ili izravnoj vježbi.

Ako radije ručno kopirate, zatražite od Claudea odobrene kartice kao obične blokove s prednjom i stražnjom stranom te ih dodajte u svoju uobičajenu aplikaciju za kartice. Provjere izvora i poduka koja počinje pitanjem i dalje vrijede.

## Gdje Claude i dalje treba nadzor

Ova metoda smanjuje pogreške koje se mogu izbjeći; ne čini Claudea mjerodavnim izvorom.

- Odgovor ograničen na izvor i dalje može biti pogrešan ako je izvor pogrešan.
- Izdvojeni sadržaj datoteka može izgubiti kontekst, osobito kod dijagrama, tablica i skeniranih stranica.
- Claude može odgovor na otvoreno pitanje ocijeniti preblago ili previše doslovno.
- Dug razgovor tijekom učenja može odlutati izvan početno zadanog opsega.
- Natuknice koje previše olakšavaju odgovor mogu dovesti do prepoznavanja bez trajne sposobnosti dosjećanja.

Vratite se na imenovani izvor kada razgovor odluta. Kada se objašnjenje promijeni, ponovno zatražite mjesto u izvoru. Za vještine poput dokazivanja, pisanja eseja, izgovora, laboratorijskog rada ili programiranja uz pitanja za dosjećanje koristite izravnu vježbu i povratne informacije ljudi.

## Završni popis za provjeru učenja uz Claudea

Prije kraja učenja provjerite:

- korištenje umjetne inteligencije odgovara pravilima ovog kolegija i zadatka;
- Claude je naveo sve što je dvosmisleno, nečitljivo ili nepotkrijepljeno;
- odgovarali ste na jedno po jedno pitanje prije nego što ste dobili pomoć;
- svaki ispravak upućuje na dokaz koji ste sami otvorili;
- vanjsko znanje označeno je odvojeno od gradiva kolegija;
- nerazriješena neizvjesnost nije postala kartica;
- samo je nekoliko provjerenih slabih točaka koje vrijedi dugoročno uvježbavati postalo spremljenim karticama;
- kartice su spremljene u željeni radni prostor bez nepotrebnih duplikata;
- odabrali ste automatsko ili ručno ocjenjivanje ponavljanja prema rasporedu;
- ocjene odražavaju vaš izvorni pokušaj, a bilježenje ponavljanja je potvrđeno;
- znate gdje ćete se vratiti za sljedeće zakazano ponavljanje.

Koristan **instruktor Claude** radi više od samog objašnjavanja. Pokazuje gdje izvor završava, čeka dok se pokušavate prisjetiti i ostavlja vam kratak zapis onoga što je doista zapelo. Taj zapis, a ne duljina razgovora, čini ovaj postupak učenja uz Claudea vrijednim ponavljanja.
