---
title: "Kako pronaći duplikate kartica u Ankiju i odlučiti koje zadržati"
description: "Pronađite duplikate kartica u Ankiju, usporedite bilješke i odlučite koju kopiju zadržati. Uz primjer za vježbu provjerite povijest ponavljanja prije i poslije brisanja."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "duplikati kartica u Ankiju"
  - "kako pronaći duplikate u Ankiju"
  - "brisanje duplikata bilježaka u Ankiju"
  - "duplikati bilježaka u Ankiju"
  - "povijest ponavljanja u Ankiju"
---

Prepoznajete pitanje koje ste već vidjeli tijekom ponavljanja, a Anki ga prikazuje kao novo. Možda ste pri uvozu dobili kopiju. Možda je to druga kartica iz iste bilješke. Ako izbrišete redak u pregledniku kartica, možete ukloniti sve kartice iz te bilješke, pa i onu s pitanjem koje ste htjeli zadržati.

Prije nego što uklonite **duplikate kartica u Ankiju**, utvrdite zašto se pitanje pojavljuje više puta. Ako je riječ o zasebnim bilješkama, otvorite **Notes → Find Duplicates**. Podudaranje u odabranom polju pokazuje koje bilješke vrijedi pregledati. Usporedite njihov sadržaj i povijest svake kartice pa odlučite koju kopiju zadržati.

Upute za Anki na računalu temelje se na dokumentaciji i objavljenom izvornom kodu, provjerenima 4. listopada 2026. Nazivi opcija i primjeri upita odnose se na englesko sučelje. Vježba na papiru u nastavku prikazuje očekivane rezultate izmišljenog primjera.

![Član šahovskog kluba uspoređuje dodatni svijetli top s dva istrošena topa na drvenoj šahovskoj ploči](/blog/anki-duplicate-cards.png)

## Prvo utvrdite što se ponavlja

Bilješka sadrži polja poput **Front** i **Back** za prednju i stražnju stranu kartice. Anki iz bilješke stvara kartice prema predlošcima. Iz iste bilješke možete dobiti karticu na kojoj trebate prepoznati riječ i karticu na kojoj je se trebate sami dosjetiti. Svaka ima svoj raspored ponavljanja. [Ankijevo objašnjenje bilježaka i polja](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

U prozoru **Browse** odaberite prikaz kartica (**Cards**). Za svaki sumnjivi redak otvorite **Cards → Info** i usporedite identifikatore bilježaka (**Note ID**). Isti identifikator znači da kartice pripadaju jednoj bilješci, a različiti identifikatori upućuju na zasebne bilješke. U upitu `nid:123` zamijenite `123` stvarnim identifikatorom da vidite kartice te bilješke bez ograničenja na pojedini špil. [Ankijeva dokumentacija o pretraživanju po identifikatoru](https://docs.ankiweb.net/searching.html#object-ids)

| Što ste pronašli | Vjerojatno objašnjenje | Što dalje |
| --- | --- | --- |
| Ista bilješka, pitanja u suprotnim smjerovima | Kartice su predviđene za učenje u oba smjera | Provjerite trebaju li vam oba pitanja |
| Ista bilješka, pitanja na karticama izgledaju jednako | Mogući duplikati predložaka kartica | Usporedite predloške i pretpreglede |
| Različite bilješke, pitanja naizgled jednaka | Mogući duplikati bilježaka | Usporedite cijele bilješke prije nego što odaberete koju ćete zadržati |

Ako su pitanja namjerno postavljena u oba smjera, pogledajte [vodič za obrnute kartice (na engleskom)](/blog/anki-reverse-cards/). Ako želite pauzirati samo jedno pitanje, [obustavite ponavljanje te kartice (vodič na engleskom)](/blog/anki-bury-vs-suspend/). Kartica pritom ostaje u zbirci.

Ako predlošci daju ista pitanja, slijedite [Ankijeve upute za utvrđivanje uzroka viška kartica](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Uklanjanje predloška utječe na svaku bilješku te vrste, pa i na bilješke u drugim špilovima. Promjenu predloška razmotrite zasebno, čak i ako ste danas primijetili samo jedno ponovljeno pitanje.

## Odredite gdje ćete tražiti duplikate bilježaka

Otvorite **Notes → Find Duplicates** i odaberite polje za usporedbu, primjerice **Front**. Anki prema zadanim postavkama pretražuje sve vrste bilježaka koje sadrže to polje. U polju **Optional filter** ograničite pretraživanje pa kliknite **Search**. [Dokumentacija za **Find Duplicates**](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Za špil `Cleanup practice` upotrijebite sljedeći upit.

```text
deck:"Cleanup practice"
```

Upit obuhvaća i podšpilove. Ako sumnjate da su kopije u različitim špilovima, uklonite filtar i pretražite cijelu zbirku. Čak i kad u jednom špilu nema rezultata, kopija može biti drugdje. [Ankijeva sintaksa pretraživanja špilova](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Kliknite skupinu rezultata da pregledate bilješke u njoj. **Tag Duplicates** dodaje oznaku `duplicate` svim bilješkama u svakoj skupini, pa i onoj koju ćete zadržati. [Objavljeni izvorni kod za označavanje](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

Upit `tag:duplicate` upotrijebite za pregled označenih bilježaka. **Nemojte izbrisati sve rezultate tog upita.** Bilješke za brisanje odaberite pojedinačno.

Pretraživanje uspoređuje sadržaj odabranog polja. Sami provjerite ispituju li dva pitanja istu činjenicu. Drukčije formulirana pitanja možda ćete morati potražiti ručno, a ista formulacija može služiti učenju različitih jezika ili pripadati različitim tečajevima.

## Tri primjera za vježbu na papiru

Zamislite šest bilježaka u špilu `Cleanup practice`, bez podšpilova. Bilješke A i B koriste neizmijenjene predloške vrste **Basic (and reversed card)** pa svaka daje dvije kartice. Bilješke C–F vrste su **Basic** i svaka daje jednu karticu. Svih je osam kartica u tom špilu. U vježbi bilješke označavamo slovima. U Ankiju su stvarni identifikatori bilježaka i kartica brojevi.

| Bilješke | Front → Back | Stanje učenja u primjeru | Odluka |
| --- | --- | --- | --- |
| A i B | `le vélo` → `bicycle` | U A kartica za prepoznavanje ima 12 ponavljanja, a kartica za prisjećanje riječi 3. Obje kartice iz B još su nove. | Zadržite A. B je prvi kandidat za brisanje. |
| C i D | `Chemical symbol for silver?` → `Ag` | C ima 20 ponavljanja, a D ih ima 6. | Usporedite obje povijesti i odaberite koju ćete karticu nastaviti ponavljati. |
| E i F | E: `bank` → `financial institution`, F: `bank` → `side of a river` | Kartice provjeravaju različita značenja. | Zadržite obje i dodajte kontekst pitanjima. |

Pretraživanje polja **Front** može grupirati sva tri para. Samo je u prvom paru izbor jednostavan. Prije nego što odlučite izbrisati B, usporedite **sva polja**, medijske datoteke, oznake, vrstu bilješke i prikaz pitanja u oba smjera. B možda sadrži snimku izgovora koja nedostaje u A ili daje pitanje koje u A nemate.

Ako koristan sadržaj služi istom cilju učenja, kopirajte ga u bilješku koju zadržavate i otvorite pretpregled kartica. Sačuvajte i korisne oznake iz izvorne bilješke. Ako mijenjate samu činjenicu koju želite provjeravati, za nju napravite novo pitanje kako bi stara povijest ostala vezana uz izvorno gradivo.

Pri izboru između C i D uzmite u obzir broj ponavljanja. Za obje kartice pogledajte datume i ocjene prethodnih ponavljanja, trenutačni interval i kada su sljedeći put na redu. Karticu s više ponavljanja možda ste samo češće morali iznova učiti. Provjerite odgovaraju li vam pitanje i odgovor pa odlučite s kojom ćete karticom nastaviti učenje. Ako se odgovori razlikuju, provjerite ih prema izvoru iz kojeg učite. Broj ponavljanja ne pokazuje koji je odgovor točan.

Ako zadržite C i izbrišete D, kartica C zadržava vlastito stanje učenja. Anki **ne spaja povijesti ponavljanja**. Svaka kartica ima svoju povijest u prikazu [**Card Info**](https://docs.ankiweb.net/stats.html#card-info). Zapisi o ponavljanju kartica iz izbrisanih bilježaka ostaju u statistici cijele zbirke i nestaju iz statistike pojedinog špila. [Objašnjenje statistike izbrisanih bilježaka u priručniku](https://docs.ankiweb.net/stats.html#more)

Ako se još dvoumite, odgodite brisanje. Zapišite što trebate provjeriti i po potrebi u međuvremenu obustavite ponavljanje kartica koje planirate ukloniti.

## Izbrišite jednu kopiju i provjerite što je ostalo

Prije brisanja sinkronizirajte sve promjene koje još imate na ostalim uređajima. Zatim sinkronizirajte Anki na računalu da i tamošnja zbirka preuzme te promjene. [Ankijev priručnik za sinkronizaciju](https://docs.ankiweb.net/syncing.html)

Otvorite **File → Export**, odaberite **Anki Collection Package (`.colpkg`)** i uključite **Include Media**. Paket sadrži sve špilove, raspored njihovih kartica i povijest ponavljanja. Spremite datoteku na sigurno. Pri uvozu te datoteke spremljena zbirka zamjenjuje postojeće kartice u otvorenom profilu. [Dokumentacija za izvoz zbirke](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Ako najprije želite isprobati brisanje, preko **File → Switch Profile** izradite zaseban profil i uvezite sigurnosnu kopiju u njega. Probni profil nemojte povezivati s AnkiWebom. Svaki profil ima svoju zbirku. Ako oba povežete s istim računom, jedna zbirka može prebrisati drugu. [Ankijev priručnik o profilima](https://docs.ankiweb.net/profiles.html)

Za više pojedinosti o sigurnosnim kopijama i uvozu pogledajte [usporedbu formata APKG i COLPKG (na engleskom)](/blog/anki-apkg-vs-colpkg/).

U vježbi ćemo karticu za prepoznavanje iz bilješke A zvati A1, a karticu za prisjećanje riječi A2. B1 i B2 odgovarajuće su kartice iz bilješke B. Otvorite **Cards → Info** i zapišite stvarne identifikatore (**Card ID**) za obje kartice iz A, podatke o sljedećem ponavljanju, intervale i zapise koje ćete lako prepoznati u povijesti ponavljanja. Zapišite i identifikator bilješke B. Provjere prije i poslije brisanja obavite u istoj sesiji, bez ponavljanja kartica i bez promjena njihova rasporeda.

Duplikate bilježaka brišite jedan po jedan.

1. U prozoru **Browse** umjesto trenutačnog upita upišite `nid:` sa stvarnim identifikatorom bilješke B. U prikazu **Cards** pregledajte svaki rezultat i u pretpregledu provjerite oba smjera. Kad radite sa svojim gradivom, provjerite ima li kartica iste bilješke i u drugim špilovima. U ovom upitu izostavite filtar po špilu.
2. Prijeđite u prikaz bilježaka (**Notes**). Provjerite je li jedini rezultat neželjena bilješka B, označite samo nju i odaberite **Notes → Delete**. Ankijeva [naredba **Delete**](https://docs.ankiweb.net/browsing.html#notes) uklanja odabranu bilješku i sve njezine kartice, čak i kad je pokrenete iz jednog retka u prikazu **Cards**.
3. Ponovite pretraživanje po identifikatoru bilješke B i provjerite da nema rezultata. Potražite zapisane identifikatore kartica bilješke A upitom `cid:`, s identifikatorima odvojenima zarezom, pa usporedite podatke u prikazu **Info** za obje kartice s onim što ste zapisali.
4. Pretražite `deck:"Cleanup practice"` i usporedite broj redaka u prikazima **Notes** i **Cards**. Usporedite preostale bilješke s tablicom.

Ako izbrišete samo B, očekujte sljedeće rezultate.

| Provjera | Prije brisanja | Očekivano nakon brisanja |
| --- | --- | --- |
| Cijeli špil iz primjera | 6 bilježaka / 8 kartica | 5 bilježaka / 6 kartica |
| Par bilježaka za riječ „bicikl” | A1, A2, B1, B2 | Samo A1 i A2 |
| Identifikatori kartica bilješke A, podaci o sljedećem ponavljanju, intervali i povijest | Vrijednosti koje ste zapisali | Iste kartice, isti raspored i isti zapisi ponavljanja |
| Pretraživanje po identifikatoru bilješke B | Dvije kartice bilješke B | Bez rezultata |
| Bilješke za srebro i za riječ `bank` | C, D, E, F | Ostaju iste četiri bilješke |

Brisanjem jedne bilješke ovdje nestaju dvije kartice. Brisanjem A dobili biste iste brojke, ali izgubili biste kartice koje ste već učili i htjeli zadržati. Zato uz broj bilježaka i kartica provjerite i njihove identifikatore. Dok uklanjate duplikate, zadržite postojeći napredak i raspored kartica koje ostaju.

Grafikon ponavljanja za cijelu zbirku i dalje može obuhvaćati ponavljanja izbrisanih kartica. Za provjeru napretka pronađite zadržanu karticu prema identifikatoru i pogledajte njezine podatke u prikazu **Info**.

Ako podaci za prvu skupinu odgovaraju vašim zapisima, prijeđite na sljedeću i za nju odlučite koju ćete bilješku zadržati. Ako ste vježbali na kopiji, ponovite provjereni postupak u glavnom profilu. Kad provjerite zbirku, sinkronizirajte Anki na računalu, a zatim i ostale uređaje prije nego što na njima nastavite učiti.

Ako su kopije nastale pri uvozu, prije sljedećeg uvoza pogledajte [vodič za ažuriranje postojećih bilježaka iz CSV-a (na engleskom)](/blog/anki-csv-update-existing-notes/). Ako ste kopirali bilješke da biste istu činjenicu svrstali u više tema, [upotrijebite više oznaka na istoj bilješci (vodič na engleskom)](/blog/anki-tags-vs-decks/) i vodite jednu povijest učenja.
