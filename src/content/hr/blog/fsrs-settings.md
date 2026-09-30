---
title: "Najbolje postavke FSRS-a za Anki u 2026.: pamćenje, koraci i opterećenje ponavljanjima"
description: "Odaberite sigurne postavke FSRS-a za željenu stopu pamćenja, korake učenja, optimizaciju, promjenu rasporeda i opterećenje u Ankiju 26.08 s FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "postavke FSRS-a"
  - "najbolje postavke FSRS-a"
  - "postavke Anki FSRS"
  - "željena stopa pamćenja FSRS"
  - "koraci učenja FSRS"
  - "FSRS simulator"
  - "optimizacija parametara FSRS-a"
  - "FSRS-6"
---

Povećanje željene stope pamćenja u Ankiju s 90% na 95% zvuči kao mala promjena. No to ne znači da će posla biti samo pet posto više. FSRS mora skraćivati razmake kako cilj raste, a zbirka koju već dugo učite može donijeti znatno više kartica za ponavljanje. Uključite li i **Reschedule cards on change**, dio tog posla može vas dočekati odmah.

Zato najbolje postavke FSRS-a nisu niz parametara koji možete kopirati. Do njih dolazite kroz nekoliko odluka: odredite koliko posla možete redovito odraditi, u skladu s tim odaberite cilj pamćenja, prilagodite model vlastitoj povijesti ponavljanja i ostavite postojeće datume ponavljanja na miru, osim ako ih svjesno želite preračunati.

Nazivi i ponašanje opisani u nastavku odgovaraju [izdanju Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) i njegovim postavkama za FSRS-6. Ako prvo želite razumjeti model, pročitajte [Što je FSRS?](/blog/what-is-fsrs/). Ako još birate algoritam za raspoređivanje ponavljanja, krenite od članka [FSRS ili SM-2](/blog/fsrs-vs-sm-2/).

> **Napomena o autoru:** Ja sam Kirill Markin i razvijam [Nibomo](/hr/features/). Anki nudi prilagodbu parametara pojedinom korisniku i eksperimentalne simulatore opterećenja koje Nibomo trenutačno nema. U usporedbi pri kraju članka te su razlike jasno navedene.

**Činjenice provjerene:** 8. rujna 2026.

![Operater kanalske prevodnice ispituje protok vode na umanjenom modelu prije promjene na pravoj prevodnici](/blog/fsrs-settings-v2.png)

## Kratak odgovor: krenite od ovoga

Za većinu korisnika Ankija ovo su sigurni početni izbori, a ne univerzalne postavke:

| Postavka ili navika | Siguran početni izbor | Zašto |
| --- | --- | --- |
| Željena stopa pamćenja | `0.90` | To je zadana vrijednost u Ankiju koja uravnotežuje pamćenje i količinu ponavljanja. |
| Parametri FSRS-a | Upotrijebite **Optimize Current Preset**; nemojte lijepiti ni ručno uređivati težine | Optimizator prilagođava model vašoj povijesti ponavljanja. |
| Učestalost optimizacije | Najviše jednom mjesečno; obično je dovoljno svakih nekoliko mjeseci | Anki ne preporučuje čestu optimizaciju. |
| Koraci učenja | Zadržite mali broj koraka koje možete završiti istoga dana | Dugi nizovi koraka odgađaju raspoređivanje prema modelu. |
| Koraci ponovnog učenja | Svedite ih na minimum i neka budu kraći od jednog dana | Isto ograničenje vrijedi kada se pri ponavljanju ne uspijete prisjetiti odgovora. |
| Reschedule cards on change | Isključeno | Nove postavke mogu se primjenjivati kroz buduća ponavljanja, bez preuređivanja današnjeg reda kartica. |
| Najveći razmak | Zadržite zadanih 100 godina | Kraća gornja granica češće vraća dobro naučene kartice. |
| Nove kartice na dan | Odredite broj prema količini posla koju možete redovito odraditi | Svaka nova kartica donosi učenje sada i ponavljanja kasnije. |
| Again ili Hard | Again znači neuspješno prisjećanje; Hard znači teško, ali uspješno prisjećanje | Pogrešne ocjene daju modelu pogrešnu povijest. |

Ako možete odraditi ponavljanja i vaše su postavke već blizu ovima, možda nemate što popravljati. Bavljenje postavkama nije učenje.

## Razdvojite tri odluke

Željena stopa pamćenja, parametri FSRS-a i dnevno opterećenje često se poistovjećuju, iako određuju različite stvari:

- **Željena stopa pamćenja** vaš je cilj prisjećanja. Birate je prema svojim ciljevima i vremenu za učenje.
- **Parametri FSRS-a** prilagođavaju model pamćenja povijesti ponavljanja. Izračunava ih Ankijev optimizator.
- **Ograničenja novih kartica i ponavljanja** određuju koliko gradiva ulazi u sustav i koliko dospjelih kartica Anki može prikazati svakoga dana.

Kad to razdvojite, mnogo je lakše pronaći uzrok problema. Velik broj kartica za ponavljanje ne znači automatski da su parametri pogrešni. Špil s važnim gradivom ne treba automatski zaseban skup parametara. A snižavanje željene stope pamćenja neće popraviti tempo dodavanja kartica koji nikad nije bio održiv.

## Željenu stopu pamćenja birajte prema opterećenju, a ne ambiciji

Željena stopa pamćenja govori FSRS-u koliku vjerojatnost prisjećanja želite u trenutku kada kartica dođe na red za ponavljanje. Pri vrijednosti `0.90` FSRS raspoređuje ponavljanja tako da predviđena vjerojatnost prisjećanja tada bude oko 90%. To je cilj modela, a ne jamstvo da ćete pri svakom učenju ili na ispitu imati točno 90% točnih odgovora.

Svaki smjer promjene ima svoju cijenu:

- Povećate li željenu stopu pamćenja, razmaci se skraćuju, a ponavljanja je više.
- Smanjite li je, razmaci se produljuju, a neuspješnih prisjećanja je više.
- Spustite li je prenisko, dodatno učenje zaboravljenih kartica može potrošiti dio vremena koje ste htjeli uštedjeti.

Ankijeva zadana vrijednost iznosi 90%. Njegove [upute za željenu stopu pamćenja](https://docs.ankiweb.net/deck-options.html#desired-retention) upozoravaju da opterećenje brzo raste kako se cilj približava 100% i preporučuju vrijednost manju od 97%. Službeno [objašnjenje optimalne stope pamćenja](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) pokriva drugi kraj krivulje: i vrlo niska stopa može biti neučinkovita jer zaboravljene kartice traže više rada.

Krenite od `0.90` i mijenjajte tu vrijednost tek nakon što provjerite opterećenje. Viši cilj može imati smisla za gradivo kod kojeg zaboravljanje ima stvarne posljedice. Niži cilj može imati smisla kada ponavljanja oduzimaju vrijeme vrednijem učenju. Nijedna promjena neće popraviti nejasne kartice, neiskrene ocjene ili previše novih kartica.

### Cilj pamćenja može vrijediti za jedan špil, a parametri za više njih

U Ankiju 26.08 postavka **Desired retention** nudi dvije razine primjene: **Shared Preset** i **This deck**. Tako povezani špilovi mogu dijeliti isti skup parametara, dok za pojedini špil postavljate zaseban cilj pamćenja.

Tu zasebnu vrijednost upotrijebite kada posljedice zaboravljanja nisu iste. Špil za stručni ispit može opravdati viši cilj od manje važnog špila s referentnim podacima, čak i ako oba koriste isti prilagođeni model.

Odabirom **This deck** parametri FSRS-a ne postaju zasebni za taj špil. Anki ih prema zadanim postavkama prilagođava na temelju povijesti ponavljanja svih špilova dodijeljenih trenutačnom skupu postavki. Ako se skupine špilova jako razlikuju po subjektivnoj težini, zasebni skupovi postavki podržani su način da model prilagodite svakoj skupini zasebno.

## Help Me Decide i Simulator služe za različita pitanja

Anki 26.08 nudi dva zasebna eksperimentalna alata:

- **Help Me Decide (Experimental)** prikazuje krivulju odnosa stope pamćenja i opterećenja prilagođenu vama. Upotrijebite ga za pitanje: „Koji cilj pamćenja odgovara broju ponavljanja koji mogu redovito odraditi ili vremenu koje imam na raspolaganju?”
- **FSRS Simulator (Experimental)** procjenjuje kako bi se određene postavke mogle ponašati tijekom vremena. Upotrijebite ga za usporedbu promjena stope pamćenja, broja novih kartica, ograničenja ponavljanja i najvećeg razmaka.

[Dokumentacija simulatora FSRS-a](https://docs.ankiweb.net/deck-options.html#the-simulator) navodi njegove glavne ulazne podatke:

- broj dana za simulaciju
- broj dodatnih novih kartica za simulaciju
- broj novih kartica na dan
- najveći broj ponavljanja na dan
- najveći razmak
- željena stopa pamćenja i parametri FSRS-a iz skupa postavki

Simulacija koristi i stvarna stanja pamćenja kartica iz tog skupa postavki. Zato je za zbirku koju dugo učite korisnija od množenja današnjeg broja dospjelih kartica nekim općim postotkom.

Prije promjene stvarnih postavki pokrenite tri scenarija:

1. Trenutačna stopa pamćenja i broj novih kartica.
2. Cilj pamćenja koji razmatrate.
3. Isti cilj uz manje novih kartica na dan.

Treći scenarij ispituje čestu alternativu: zadržati cilj prisjećanja i usporiti priljev novog gradiva. Ako takva prognoza izgleda održivo, ne morate prihvatiti više zaboravljanja samo da biste smanjili broj kartica za ponavljanje. Detaljniji vodič o dodavanju kartica potražite u članku [Koliko novih kartica za učenje na dan?](/blog/how-many-new-flashcards-per-day/).

Oba alata daju procjene. Zbog preskočenih dana, izmjena kartica, novog gradiva i promjena navika ocjenjivanja stvarno se opterećenje može razlikovati od prikazanog grafikona. Usporedbom odaberite smjer, ali nemojte je shvatiti kao obećanje točnog broja kartica za nekoliko mjeseci.

Stariji vodiči mogu spominjati **Compute Minimum Recommended Retention**, odnosno CMRR. Anki je tu značajku uklonio u verziji 25.07. Ona više nije aktualan način odabira željene stope pamćenja.

## Optimizirajte parametre FSRS-a prema vlastitoj povijesti

Željena stopa pamćenja izražava vaš cilj. Parametri FSRS-a određuju koliko se model podudara s vašom poviješću ponavljanja.

U Ankiju 26.08 upotrijebite **Optimize Current Preset** za prilagodbu parametara aktivnog skupa postavki. Anki prema zadanim postavkama uključuje povijest ponavljanja svakog špila koji koristi taj skup; pretragom možete suziti skup podataka na kojem se model prilagođava. **Optimize All Presets** ažurira sve skupove postavki odjednom.

Nemojte ručno upisivati težine ni kopirati ih s Reddita, iz videa ili tuđeg špila. Tuđe kartice, vrijeme ponavljanja i navike ocjenjivanja nisu vaša povijest. Uredan niz [težina FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) nije strategija učenja koju možete preuzeti.

Ponovno optimizirajte tek kada prikupite dovoljno nove povijesti ponavljanja da to ima smisla. Ankijev priručnik kaže da je jednom mjesečno dovoljno, a upute u aplikaciji 26.08 navode da je dovoljno jednom u nekoliko mjeseci. Praktičan zaključak je isti: nema razloga optimizirati svaki tjedan, a kamoli nakon svakog učenja.

### Provjeru prikladnosti pokrenite za trenutačni skup postavki

Uključite **Check health when optimizing (slow)** kada želite da Anki procijeni koliko se dobro FSRS može prilagoditi povijesti trenutačnog skupa postavki. Ta se provjera izvodi uz **Optimize Current Preset**, a ne uz **Optimize All Presets**.

Ako je rezultat loš, proučite podatke prije nego što dirate težine. [Ankijeve upute za parametre FSRS-a](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) navode česte uzroke: manje od nekoliko stotina ponavljanja, odabir ocjene Hard nakon neuspješnog prisjećanja i izostanak ocjene Again kada se ne možete prisjetiti odgovora. Ako imate malo korisne povijesti, zadržite zadane vrijednosti i optimizirajte kasnije umjesto da posuđujete tuđe parametre.

## Again znači neuspješno prisjećanje; Hard je prolazna ocjena

Ova je navika jednako važna kao i bilo koja postavka.

Upotrijebite **Again** kada se niste mogli prisjetiti traženog odgovora ili ste pogriješili. **Hard** upotrijebite samo kada ste se točno prisjetili odgovora, ali uz znatan trud ili oklijevanje. Good i Easy također su prolazne ocjene.

Pritisnete li Hard da biste izbjegli kratak razmak uz Again, bilježite uspjeh nakon neuspjeha. FSRS tada uči iz pogrešnog događaja. Odaberite gumb prema tome kako ste se prisjetili odgovora, a ne prema razmaku koji biste željeli dobiti.

Nejasne kartice otežavaju iskreno ocjenjivanje. Ako pitanje traži pet činjenica, a vi se sjećate četiri, problem s raspoređivanjem počeo je u uređivaču. Podijelite ili preoblikujte karticu. Za kartice koje stalno zaboravljate unatoč ponavljanjima pročitajte [Kako popraviti kartice koje stalno zaboravljate](/blog/how-to-fix-leech-flashcards/).

## Neka koraci učenja u FSRS-u budu kratki — ili ih svjesno ostavite praznima

Koraci učenja i ponovnog učenja određuju kada ćete ponovno vidjeti karticu unutar kratkog razdoblja, prije nego što prijeđe na redoviti dugoročni raspored. Oni nisu još jedan cilj pamćenja.

Ankijeve upute za FSRS preporučuju dva ograničenja:

- svaki korak treba biti kraći od jednog dana i izvediv istoga dana
- broj ponavljanja unutar istoga dana treba ostati malen

Dugi nizovi poput `1m 10m 1d 3d` prenose staru naviku iz SM-2 u FSRS. Koraci od jednog dana ili dulji odgađaju raspoređivanje prema modelu i mogu stvoriti zbunjujuće oznake na gumbima, primjerice kada Hard prikazuje dulji razmak od Good.

Kratak niz poput `1m 10m`, uz korak ponovnog učenja `10m`, oprezan je početni izbor ako odgovara vašem načinu učenja. Više ponavljanja istoga dana nije automatski bolje.

Anki 26.08 dopušta i da bilo koje od polja za korake učenja ili ponovnog učenja ostane prazno. Kada je FSRS uključen, prazno polje prepušta mu to kratkoročno raspoređivanje. Ta je mogućnost eksperimentalna, a razmak za Again može iznositi jedan dan ili više. Zadržite kratke ručne korake ako želite predvidljiv povratak kartice istoga dana; ispraznite polje samo ako namjerno prihvaćate da FSRS odabere taj trenutak.

## Za postupan prijelaz ostavite opciju Reschedule cards on change isključenu

Kada je opcija **Reschedule cards on change** isključena, što je zadana postavka, uključivanje FSRS-a ili promjena željene stope pamćenja ili parametara neće odmah promijeniti postojeće datume ponavljanja. Nove se postavke primjenjuju pri sljedećim ponavljanjima kartica, pa se red kartica mijenja postupno.

Spremanje jedne od tih promjena FSRS-a uz uključenu opciju odmah preračunava datume ponavljanja. Ovisno o novom cilju i stanju kartica, velik broj kartica može odjednom doći na red. Anki za kartice s promijenjenim rasporedom dodaje i zapise ponavljanja, čime se povećava veličina zbirke.

Ova je opcija korisna samo kada doista želite retroaktivno preračunati raspored. Za zbirku koju već dugo učite:

1. Napravite novu sigurnosnu kopiju i provjerite znate li poništiti promjenu ili vratiti zbirku iz sigurnosne kopije.
2. Pokrenite Simulator s predloženim postavkama.
3. Odaberite jednu promjenu postavki; nemojte spajati nekoliko eksperimenata.
4. Pri spremanju uključite promjenu rasporeda samo ako želite odmah preračunati datume ponavljanja i možete odraditi kartice koje će doći na red.

Anki izričito preporučuje sigurnosnu kopiju pri prelasku sa SM-2 uz promjenu rasporeda. Širi [vodič za sigurnosno kopiranje kartica](/blog/how-to-back-up-flashcards/) objašnjava zašto je postupak oporavka jednako važan kao i datoteka sigurnosne kopije.

## Ostavite visoku gornju granicu razmaka

Ankijev najveći razmak prema zadanim postavkama iznosi 100 godina. To zvuči neobično dok se ne sjetite da je riječ o gornjoj granici, a ne obećanju da će svaka dobro naučena kartica nestati na stoljeće.

Snižavanje te granice prisilno vraća dobro poznate kartice ranije i povećava opterećenje. Na toj granici Hard, Good i Easy mogu prikazivati jednak razmak jer nijedan ne smije premašiti maksimum.

Niža gornja granica razmaka može imati smisla kada ispit određuje stvarni rok, gradivo se često mijenja ili pravila struke zahtijevaju redovito ponavljanje bez obzira na predviđeno pamćenje. Uskladite tu granicu s kalendarom i Simulatorom umjesto da iz zabrinutosti odaberete malen broj. Članak [Kako učiti za ispit uz FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) obrađuje taj uži slučaj.

Za uobičajeno dugoročno učenje ostavite visoku gornju granicu. Željena stopa pamćenja već određuje kada predviđena vjerojatnost prisjećanja padne dovoljno da karticu treba ponoviti.

## Dodavanje novih kartica dio je odluke o opterećenju

FSRS može rasporediti ponavljanja; ne može učiniti neograničeno dodavanje kartica održivim. Svaku novu karticu morate naučiti sada i ponavljati kasnije.

Kada imate previše kartica za ponavljanje, prije snižavanja željene stope pamćenja provjerite:

- broj novih kartica na dan
- velike uvoze ili skupine generiranih kartica
- ograničenje najvećeg broja ponavljanja koje stalno skriva dospjele kartice
- kartice koje stalno zaboravljate i nejasne kartice na koje trošite vrijeme iz pokušaja u pokušaj
- propuštene dane ponavljanja

Upotrijebite **Additional new cards to simulate** kada znate da će špil rasti. Prognoza koja se temelji samo na današnjoj zbirci neće prikazati opterećenje nakon velikog uvoza.

Ako je procijenjeno opterećenje previsoko, smanjite broj novih kartica i ponovno pokrenite simulaciju. Time zadržavate cilj prisjećanja bez traženja od algoritma da dopusti više zaboravljanja.

## Anki i Nibomo nude različite postavke FSRS-a

Oba proizvoda koriste FSRS-6, ali Ankijeve postavke FSRS-a ne preslikavaju se izravno u Nibomo.

| Mogućnost | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Željena stopa pamćenja | **Shared Preset** ili **This deck** | Podesiva po radnom prostoru; zadano `0.90` |
| Parametri FSRS-a | **Optimize Current Preset** ili **Optimize All Presets** prema povijesti ponavljanja | Službene zadane težine FSRS-6 fiksirane su i korisnik ih u v1 ne može mijenjati |
| Koraci učenja | Podesivi; raspoređivanje FSRS-om uz prazno polje eksperimentalno je | Podesivi po radnom prostoru; zadano `1m 10m` |
| Koraci ponovnog učenja | Podesivi; raspoređivanje FSRS-om uz prazno polje eksperimentalno je | Podesivi po radnom prostoru; zadano `10m` |
| Najveći razmak | Zadano 100 godina | Zadano 36.500 dana, također 100 godina |
| Promjene postavki | Zadano za buduća ponavljanja; moguća retroaktivna promjena rasporeda | Samo za buduća ponavljanja; postojeći datumi ne preračunavaju se |
| Alati za opterećenje | **Help Me Decide (Experimental)** i **FSRS Simulator (Experimental)** | Nema odgovarajućeg simulatora opterećenja u v1 |

Nibomo koristi standardne ocjene Again, Hard, Good i Easy te čuva FSRS-ovo stanje pamćenja za svaku karticu. Algoritmi za raspoređivanje u backendu, iOS-u i Androidu neovisne su implementacije koje se održavaju tako da se ponašaju jednako; ponavljanje na webu koristi backendov algoritam umjesto dodavanja četvrte kopije.

Ta ograničenja i zadane vrijednosti opisani su u javnoj [specifikaciji raspoređivanja FSRS-om u Nibomu](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Razlika je jednostavna: Nibomo nudi praktične postavke FSRS-6 na razini radnog prostora, dok Anki nudi precizniji odabir razine primjene, osobnu prilagodbu parametara i simulaciju. Ako su vam te mogućnosti nužne, Anki je bolji izbor.

## Sigurniji postupak za zbirku koju dugo učite

Ako već imate mjesece ili godine povijesti ponavljanja, slijedite ovaj redoslijed:

1. **Ispravno ocjenjujte prisjećanje.** Again je neuspjeh; Hard je težak, ali uspješan odgovor.
2. **Optimizirajte trenutačni skup postavki.** Prilagodite model vlastitoj povijesti umjesto uređivanja ili kopiranja težina.
3. **Po potrebi pokrenite provjeru prikladnosti.** Oskudnu ili nedosljednu povijest tretirajte kao problem s podacima.
4. **Upotrijebite Help Me Decide.** Odaberite raspon stope pamćenja prema broju ponavljanja koji možete redovito odraditi ili vremenu koje imate na raspolaganju.
5. **Pokrenite Simulator.** Usporedite trenutačne postavke, predloženi cilj i manji broj novih kartica.
6. **Promijenite jednu postavku u primjeni.** Najprije prilagodite stopu pamćenja ili broj novih kartica pa pratite koliko vas kartica doista čeka za ponavljanje.
7. **Zadržite kratke korake.** Uklonite nizove učenja i ponovnog učenja s koracima od jednog dana ili duljima; prazna polja koristite samo kao eksperiment.
8. **Zadržite visoku gornju granicu razmaka.** Snizite je samo zbog određenog roka ili zahtjeva.
9. **Ostavite promjenu rasporeda isključenu.** Ako trebate trenutačno preračunavanje, prvo napravite sigurnosnu kopiju i planirajte kako odraditi dobiveni red kartica.

Ovim postupkom što dulje zadržavate mogućnost povratka na postojeći raspored. Ujedno sprječavate da se tri različita problema — prilagodba modela, cilj prisjećanja i priljev novog gradiva — pretvore u jednu zagonetku s postavkama.

## Česta pitanja o najboljim postavkama FSRS-a

### Je li 90% najbolja željena stopa pamćenja za FSRS?

To je najsigurnija opća početna vrijednost jer je zadana u Ankiju i izbjegava najstrmiji dio krivulje opterećenja pri visokoj stopi pamćenja. Najbolja vrijednost za pojedini špil ovisi o posljedicama zaboravljanja i količini posla koju možete redovito odraditi. Prije promjene provjerite **Help Me Decide (Experimental)**.

### Trebam li postaviti željenu stopu pamćenja na 95%?

Tek nakon što provjerite koliko to donosi dodatnih ponavljanja ili minuta. Dobro sastavljen špil s važnim gradivom može opravdati 95%; velika zbirka za povremeno učenje može postati nepotrebno zahtjevna. Nemojte istodobno uključiti retroaktivnu promjenu rasporeda osim ako svjesno želite trenutačno preračunavanje datuma ponavljanja.

### Koliko često trebam optimizirati parametre FSRS-a?

Jednom mjesečno već je dovoljno često, a upute u Ankiju 26.08 kažu da je dovoljno jednom u nekoliko mjeseci. Optimizirajte nakon što se nakupi dovoljno nove povijesti, a ne prema dnevnom ili tjednom rasporedu.

### Trebaju li koraci učenja u FSRS-u biti prazni?

Prazna polja za korake učenja ili ponovnog učenja omogućuju Ankiju 26.08 da odgovarajući kratkoročni raspored prepusti FSRS-u. Ta je značajka eksperimentalna, a nakon odabira Again kartica može doći na red tek za jedan dan ili kasnije. Minimalni koraci unutar istoga dana i dalje su oprezniji izbor.

### Mijenja li promjena postavki FSRS-a raspored postojećih kartica u Ankiju?

Prema zadanim postavkama ne. Uz isključenu opciju **Reschedule cards on change**, nove postavke utječu na buduća ponavljanja bez trenutačnog preuređivanja reda kartica. Uključivanje te opcije mijenja datume ponavljanja i može odjednom vratiti mnogo kartica na red, pa prvo napravite sigurnosnu kopiju.

### Je li CMRR još dio Ankija?

Nije. Anki je uklonio Compute Minimum Recommended Retention u verziji 25.07. U Ankiju 26.08 upotrijebite **Help Me Decide (Experimental)** i **FSRS Simulator (Experimental)** za usporedbu stope pamćenja s procijenjenim opterećenjem.

### Koristi li Nibomo iste postavke kao Anki?

Koristi FSRS-6 i omogućuje podešavanje željene stope pamćenja, koraka učenja, koraka ponovnog učenja, najvećeg razmaka i nasumičnog odstupanja razmaka (fuzz) po radnom prostoru. Ne kopira cijeli Ankijev model postavki: težine su u v1 fiksirane, promjene vrijede samo za buduća ponavljanja, a osobna optimizacija parametara i simulator opterećenja nisu dostupni.

## Odredite opterećenje prije postotka

Dobre postavke FSRS-a usklađuju broj kartica za ponavljanje sa stvarnim planom učenja. Krenite od 90%, procijenite posao, kontrolirajte broj novih kartica i povećajte stopu pamćenja samo kada bolje pamćenje vrijedi dodatnih ponavljanja. Zadržite kratke korake i visoku gornju granicu razmaka te iskreno ocjenjujte prisjećanje.

Zatim zatvorite zaslon s postavkama. Algoritmu su dosljedna ponavljanja potrebnija od još jedne večeri podešavanja.
