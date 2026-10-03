---
title: "Radi li Anki bez interneta u 2026.? Računalo, iPhone, Android i sinkronizacija"
description: "Da — instalirane aplikacije Anki za računalo, iPhone, iPad i Android mogu koristiti lokalnu zbirku bez interneta. Saznajte za što je potrebna veza, kako radi naknadna sinkronizacija i kako pripremiti medije."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "radi li Anki bez interneta"
  - "može li se Anki koristiti offline"
  - "radi li AnkiMobile bez interneta"
  - "radi li AnkiDroid bez interneta"
  - "Anki offline sinkronizacija"
  - "AnkiWeb bez interneta"
  - "korištenje Ankija bez interneta"
---

Anki se ne mora povezati s poslužiteljem prije nego što prikaže sljedeću karticu. **Instalirane aplikacije Anki rade bez interneta i u 2026.:** Anki na Windowsu, macOS-u i Linuxu, AnkiMobile na iPhoneu i iPadu te AnkiDroid na Androidu. Svaka koristi zbirku pohranjenu na tom uređaju pa možete ponavljati kartice, stvarati bilješke i obavljati uobičajene izmjene bez internetske veze.

Jedna vas razlika lako može zateći: AnkiWeb radi drukčije. To je usluga za učenje i sinkronizaciju u pregledniku, a ne aplikacija Anki za rad bez interneta. I instalirana aplikacija može koristiti samo špilove i medije koji su već stigli na taj uređaj.

**Činjenice provjerene:** 16. kolovoza 2026.

![Terenski istraživač dodaje zapis u lokalnu arhivu fotografija, zvuka i teksta dok je radijska veza u planinama prekinuta](/blog/does-anki-work-offline.png)

## Kratak odgovor za svaku aplikaciju

[Službena web-stranica Ankija](https://apps.ankiweb.net/) navodi računalnu aplikaciju, AnkiMobile za iOS, AnkiDroid za Android i AnkiWeb kao dijelove istog ekosustava. Mogućnosti rada bez interneta razlikuju se među njima.

| Aplikacija ili usluga | Radi li bez interneta? | Što možete raditi bez interneta | Za što je potrebna veza |
| --- | --- | --- | --- |
| **Anki za računalo** na Windowsu, macOS-u ili Linuxu | **Da.** Zbirka i mapa s medijima pohranjene su lokalno. | Ponavljati kartice, dodavati bilješke, uređivati sadržaj bilježaka i koristiti medije koji su već na računalu. | Preuzimanje dijeljenih špilova, sinkronizacija s AnkiWebom i dohvaćanje svega što kartica ili dodatak traži od internetske usluge. |
| **AnkiMobile** na iPhoneu ili iPadu | **Da.** Aplikacija čuva lokalnu zbirku. | Ponavljati lokalne kartice, dodavati bilješke, uređivati sadržaj bilježaka te reproducirati zvukove i prikazivati slike koje su već na uređaju. | Dovršetak prve sinkronizacije zbirke i medija, korištenje AnkiWeba i pristup udaljenim resursima. |
| **AnkiDroid** na Androidu | **Da.** AnkiDroid čuva zbirku na uređaju s Androidom. | Ponavljati lokalne kartice, dodavati bilješke, uređivati sadržaj bilježaka i koristiti medije na uređaju. | Sinkronizacija ili preuzimanje gradiva koje nedostaje, preuzimanje dijeljenih špilova i korištenje funkcija kartica koje ovise o mreži. |
| **AnkiWeb** u pregledniku | **Nema način rada bez interneta.** To je internetska usluga za učenje i sinkronizaciju. | Nemojte računati na korištenje nakon prekida veze. | Internetska veza ili prelazak na instaliranu aplikaciju koju ste unaprijed pripremili. |

Anki možete koristiti bez interneta ako je potrebna zbirka već pohranjena u instaliranoj aplikaciji. AnkiWeb u pregledniku i dalje treba vezu.

## Ponavljanja i izmjene bez interneta najprije ostaju na tom uređaju

Kada odgovarate na kartice bez interneta, Anki bilježi ta ponavljanja u lokalnoj zbirci. Raspored ponavljanja nastavlja se prema tom lokalnom stanju. Nove bilješke i uobičajene izmjene također su lokalne. Ništa se ne pojavljuje na drugom uređaju dok se ponovno ne povežete i sinkronizirate.

Sinkronizacija s AnkiWebom nije obavezna ako učite samo na jednom uređaju. Služi za prijenos promjena u zbirci između uređaja. [Ankijev priručnik za sinkronizaciju](https://docs.ankiweb.net/syncing.html) navodi da se u uobičajenim okolnostima ponavljanja i izmjene bilježaka s više mjesta mogu spojiti. Ako ste istu karticu ponavljali na dva mjesta, oba odgovora ostaju u njezinoj povijesti ponavljanja, a primjenjuje se stanje iz najnovijeg odgovora.

Ovim postupkom možete izbjeći nepotrebne sukobe pri sinkronizaciji:

1. Sinkronizirajte uređaj prije nego što ostanete bez pouzdane veze.
2. Bez interneta ponavljajte kartice, dodajte bilješke ili ispravljajte običan tekst na karticama.
3. Ponovno se povežite i sinkronizirajte taj uređaj prije nego što nastavite na drugom.
4. Pričekajte da i drugi uređaj dovrši sinkronizaciju prije novih izmjena na njemu.

Promjene strukture zbirke traže više opreza. Dodavanje polja, uklanjanje predloška kartice, promjena vrsta bilježaka i slični zahvati mogu zahtijevati jednosmjernu sinkronizaciju umjesto spajanja promjena. Pri jednosmjernoj sinkronizaciji birate hoćete li zadržati lokalnu zbirku ili zbirku na AnkiWebu; promjene na drugoj strani mogu biti zamijenjene.

Tijekom putovanja zato slobodno nastavite s uobičajenim ponavljanjem i uređivanjem bilježaka, ali odgodite složene promjene vrsta bilježaka i predložaka ako se zbirke na više nepovezanih uređaja već razlikuju. Ako Anki zatraži slanje ili preuzimanje zbirke, zastanite i utvrdite koja zbirka sadrži rad koji želite sačuvati prije nego što odaberete smjer.

## Mediji su lokalni tek kad stignu na uređaj

Anki pohranjuje zvukove i slike odvojeno od podataka zbirke. Za računalnu aplikaciju [dokumentacija o medijima](https://docs.ankiweb.net/media.html) objašnjava da se datoteke priložene ili zalijepljene u bilješku kopiraju u lokalnu mapu `collection.media`. Kad se medijska datoteka nađe u toj mapi, kartici ne treba internet da je učita.

Najlakše je pogriješiti pri pripremi. Sinkronizacija zbirke i sinkronizacija medija odvojeni su postupci pa se zvukovi i slike možda još prenose i nakon što se kartice pojave. [Vodič za sinkronizaciju u AnkiMobileu](https://docs.ankimobile.net/syncing.html) upozorava da mediji mogu nedostajati dok se prva sinkronizacija potpuno ne dovrši. Potpun popis špilova nije dokaz da je zbirka s mnogo slika ili zvuka spremna.

Prije nego što ostanete bez interneta:

- sinkronizirajte uređaj na kojem ste dodali medije;
- pričekajte da završi njegova sinkronizacija medija;
- sinkronizirajte uređaj koji ćete ponijeti i pričekajte dovršetak i na njemu;
- otvorite kartice sa svakom vrstom slike i zvuka koja vam treba;
- pokrenite **Check Media** (provjera medija), gdje je ta funkcija dostupna, da pronađete bilješke koje se pozivaju na datoteke koje nedostaju.

Posljednja provjera posebno je važna kod dijeljenih špilova. Autor špila ponekad nije uključio sliku na koju se kartica poziva pa je ponovljena sinkronizacija ne može preuzeti.

Lokalni mediji ne znače da je svaka kartica samostalna cjelina. Predložak kartice može se pozivati na sliku, skriptu, font ili drugi resurs na webu. Internetski rječnici, preuzimanje dijeljenih špilova i dodaci koji pozivaju udaljene API-je i dalje trebaju vezu. Pretvaranje teksta u govor (TTS) ovisi o glasu i platformi: instalirani glas sustava može raditi bez interneta, dok glas iz internetske usluge ne može. Isprobajte točno onu funkciju koju trebate umjesto da pretpostavite da svaki TTS ili dodatak radi jednako.

## Kako se rad bez interneta sinkronizira nakon ponovnog povezivanja

Ankijeva „offline sinkronizacija” zapravo ima dvije faze: sada radite lokalno, a kasnije sinkronizirate putem mreže.

Kad se veza vrati, sinkronizirajte uređaj na kojem ste radili bez interneta. Pričekajte da završe i sinkronizacija zbirke i sinkronizacija medija. Zatim sinkronizirajte sljedeći uređaj prije nego što na njemu ponavljate kartice ili uređujete sadržaj. Taj redoslijed olakšava prepoznavanje najnovijeg stanja ako Anki zatraži rješavanje sukoba.

Provjerite rezultat, a ne samo je li animacija sinkronizacije završila:

- pronađite bilješku koju ste dodali bez interneta;
- provjerite sadrži li izmijenjeno polje novi tekst;
- pogledajte povijest ponavljanja ili termin sljedećeg ponavljanja kartice na koju ste odgovorili;
- na drugom uređaju otvorite barem jednu novododanu sliku ili zvučnu datoteku.

Ako ste istu bilješku uređivali na dva uređaja, pročitajte konačnu bilješku umjesto da pretpostavite da je spajanje sačuvalo tekst koji ste željeli. Ako se pojavi crveni gumb za sinkronizaciju ili izbor između potpunog slanja i preuzimanja, nemojte kliknuti iz navike. Potpuno preuzimanje zamjenjuje lokalne promjene u zbirci; potpuno slanje zamjenjuje zbirku na AnkiWebu prije nego što je drugi uređaji preuzmu.

## Bez redovitog pristupa internetu prenesite zbirku kao datoteku

Anki može prenositi zbirku između uređaja i bez redovitog pristupa AnkiWebu, ali tako predajete zbirku drugom uređaju, a ne spajate promjene s više uređaja.

[Vodič za prijenos zbirke u AnkiMobileu](https://docs.ankimobile.net/collection-transfer.html) koristi datoteku `collection.colpkg` koja sadrži sve špilove i podatke o rasporedu ponavljanja. Izvezete trenutačnu zbirku, prenesete datoteku AirDropom ili dijeljenjem datoteka i uvezete je na drugom uređaju. [Priručnik za AnkiDroid](https://docs.ankidroid.org/manual.html) opisuje sličan postupak prijenosa zbirke između Androida i računala putem USB-a.

Uvoz datoteke s cijelom zbirkom zamjenjuje zbirku koja već postoji na odredišnom uređaju. Ne može spojiti dvije zbirke koje ste neovisno mijenjali bez interneta. Odaberite jedan uređaj kao izvor trenutačno važeće zbirke: izvezite je s njega, uvezite na sljedećem uređaju, ondje napravite izmjene i vratite noviju zbirku prije nego što nastavite rad na prvom uređaju.

To je korisno pri terenskom radu, na brodovima, na udaljenim lokacijama ili u mrežama s ograničenjima, gdje je povremeni prijenos datoteka moguć, ali redovita sinkronizacija putem oblaka nije. Za uobičajen let ili put na posao jednostavnije je dovršiti sinkronizaciju s AnkiWebom prije polaska.

## Sinkronizacija nije sigurnosna kopija Ankija

Sinkronizacija usklađuje uređaje. Slučajno brisanje ili neželjena promjena zato se mogu proširiti na sve sinkronizirane uređaje.

Instalirane aplikacije Anki čuvaju lokalne sigurnosne kopije, ali za medije se morate pobrinuti zasebno. Primjerice, [vodič za postavke AnkiMobilea](https://docs.ankimobile.net/preferences.html) navodi da automatske sigurnosne kopije sadrže kartice i statistiku, ali ne zvukove i slike. Izvoz cijele zbirke koji uključuje medije ima drukčiju svrhu od sinkronizacije i povijesti automatskih sigurnosnih kopija.

Ako bi vam ponovna izrada špila bila težak posao, povremeno napravite potpuni izvoz s medijima i čuvajte ga negdje izvan uređaja koji svakodnevno koristite. Širi [vodič za sigurnosne kopije kartica](/blog/how-to-back-up-flashcards/) objašnjava kako tu kopiju za vraćanje podataka kombinirati s prenosivim tekstom i izvornim datotekama.

## Desetominutna proba u zrakoplovnom načinu rada

Probu napravite na točno onom prijenosnom računalu, telefonu ili tabletu koji ćete ponijeti. Uspješan test na računalu ne govori ništa o stanju mape s medijima na telefonu.

1. Dok ste povezani, otvorite instaliranu aplikaciju Anki i sinkronizirajte je. Ako je uređaj nov, prvo dovršite početno preuzimanje zbirke.
2. Pričekajte da završi sinkronizacija medija. Nemojte stati čim se pojave nazivi špilova.
3. Otvorite svaki špil koji vam treba. Isprobajte nekoliko kartica sa slikama, zvukom, prilagođenim fontovima i posebnim funkcijama predložaka na koje se oslanjate.
4. Uključite zrakoplovni način rada ili na drugi način isključite sve mrežne veze.
5. Potpuno zatvorite Anki, ponovno ga otvorite i započnite ponavljanje u špilu koji vam treba. Tako ćete otkriti slučaj u kojem je učenje radilo samo zato što je odgovarajući zaslon već bio otvoren.
6. Ponovite nekoliko kartica. Dodajte jednu jasno označenu testnu bilješku i napravite jednu bezazlenu izmjenu teksta.
7. Zatvorite i ponovno otvorite aplikaciju dok još nemate vezu. Provjerite jesu li ponavljanja, nova bilješka, izmjena i lokalni mediji sačuvani.
8. Isprobajte svaki rječnik, glas za pretvaranje teksta u govor ili dodatak koji namjeravate koristiti. Zabilježite koji dijelovi trebaju mrežu.
9. Ponovno se povežite i sinkronizirajte taj uređaj. Pričekajte da završe faze sinkronizacije zbirke i medija.
10. Sinkronizirajte drugi uređaj, a zatim na njemu provjerite testnu bilješku, izmjenu, stanje ponavljanja i medije prije nego što izbrišete testni sadržaj.

Nemojte tijekom probe preuređivati vrste bilježaka na dva uređaja. Cilj je potvrditi da postupak za putovanje radi: potrebna zbirka pohranjena je lokalno, važni se mediji otvaraju, rad bez interneta ostaje sačuvan nakon ponovnog pokretanja, a kasnija ga sinkronizacija prenosi na drugi uređaj.

## Anki je spreman za putovanje ako pripremite uređaj

Instalirane aplikacije Anki dobar su izbor za putovanja kada želite cijelu lokalnu zbirku umjesto malog skupa predmemoriranih kartica. Ograničenja su konkretna: uređaj mora unaprijed imati zbirku i medije, AnkiWeb radi samo uz internetsku vezu, a funkcije kartica koje se oslanjaju na mrežu i dalje trebaju vezu.

Ako za putovanje birate između više alata, [usporedba aplikacija za kartice koje rade bez interneta](/blog/best-offline-flashcards-app/) provjerava kartice, uređivanje, napredak, medije i naknadnu sinkronizaciju u pet proizvoda prema istim kriterijima. Ako tražite druge alate za učenje i iz razloga koji nisu vezani uz pristup internetu, pogledajte [Anki i Nibomo u usporedbi](/blog/anki-vs-flashcards-open-source-app/).

U praksi Anki radi bez interneta na računalu, iPhoneu, iPadu i Androidu kad su potrebna zbirka i mediji pohranjeni upravo na tom uređaju. Sinkronizirajte prije polaska, napravite probu u zrakoplovnom načinu rada i nakon ponovnog povezivanja najprije sinkronizirajte uređaj na kojem ste radili bez interneta.
