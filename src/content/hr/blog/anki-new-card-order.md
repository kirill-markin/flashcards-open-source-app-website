---
title: "Redoslijed novih kartica u Ankiju: odabir, sortiranje i provjera reda čekanja"
description: "Na primjeru sa šest kartica pogledajte kako Anki odabire i sortira nove kartice. Provjerite ograničenja podšpilova, pozicije u redu čekanja i špil iz kojeg učite."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "redoslijed novih kartica u Ankiju"
  - "redoslijed odabira novih kartica u Ankiju"
  - "redoslijed sortiranja novih kartica u Ankiju"
  - "Anki uzlazno po poziciji"
  - "kartice u Ankiju pogrešnim redoslijedom"
---

U Ankiju se nova kartica na poziciji 10 može prikazati nakon one na poziciji 60. Ako učite iz nadređenog špila uz odabir **Po špilu** (Deck) i sortiranje **Redoslijedom odabira** (Order gathered), Anki može dovršiti odabir iz podšpila koji je ranije na redu prije nego što dođe do onog s karticom na poziciji 10. Sortiranje po datumu nastanka u pregledniku kartica neće promijeniti red čekanja za učenje.

Anki redoslijed novih kartica određuje u dva koraka. **Odabir** određuje koje kartice ulaze u red unutar današnjih ograničenja. **Sortiranje** određuje kojim se redom odabrane kartice prikazuju. Prvo utvrdite ulaze li u red pogrešne kartice ili se prave kartice prikazuju neočekivanim redom.

Ove se upute odnose na obične špilove u računalnoj verziji Ankija. Primjer sa šest kartica izračunat je na papiru prema važećem priručniku i objavljenoj verziji [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). Izračun je provjeren 6. listopada 2026. bez praktičnog testa u aplikaciji.

![Muškarac drži četvrtu vinilnu ploču iznad praznog pretinca stalka, pokraj triju ploča. Iza njega su dvije kutije s albumima koje nije odabrao.](/blog/anki-new-card-order.png)

## Odaberite redoslijed koji želite

Otvorite **Opcije** (Options) špila iz kojeg pokrećete učenje i pronađite odjeljak **Redoslijed prikaza** (Display Order). Kad učite iz nadređenog špila, njegove postavke redoslijeda prikaza vrijede za cijelu sesiju, uključujući kartice iz podšpilova.

| Željeni rezultat | Redoslijed odabira novih kartica (New Card Gather Order) | Redoslijed sortiranja novih kartica (New Card Sort Order) |
| --- | --- | --- |
| Pratiti rastuće pozicije novih kartica u cijelom stablu odabranog špila | Uzlazno po poziciji (Ascending position) | Redoslijedom odabira |
| Proći podšpilove abecednim redom, a unutar svakog pratiti pozicije | Po špilu | Redoslijedom odabira |
| Zadržati odabrane kartice i prikazati ih nasumičnim redom | Postavka odabira koja vam odgovara | Nasumično (Random) |

Te kombinacije slijede definicije iz Ankijeva priručnika na engleskom. [Odabir novih kartica](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) · [Sortiranje novih kartica](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Uz postavku **Uzlazno po poziciji** Anki prati pohranjene pozicije novih kartica. One mogu odstupati od redoslijeda po datumu nastanka jer na njih utječu redoslijed umetanja i ručne promjene pozicija.

Prije izmjene provjerite koji je profil postavki dodijeljen špilu i koji ga drugi špilovi koriste. Postavke redoslijeda prikaza pripadaju profilu i vrijede za sve špilove koji ga koriste. Dnevna ograničenja možete zasebno zadati opcijama **Ovaj špil** (This deck) ili **Samo danas** (Today only). Ako promjena redoslijeda prikaza treba vrijediti samo za jedan špil, prvo mu dodijelite zaseban profil. [Upute za zaseban profil jednog špila (na engleskom)](/blog/anki-deck-options-presets/)

## Utvrdite koje četiri kartice ulaze u red

Zamislite običan nadređeni špil `OrderLab` s dva podšpila i samo ovih šest kartica. Svaka dolazi iz zasebne bilješke tipa **Osnovno** (Basic) koja ima samo jednu karticu. Svih šest zato ima isti broj tipa kartice, a nijedna ne dijeli bilješku s drugom karticom.

| Kartica | Špil | Pohranjena pozicija nove kartice |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Pretpostavimo da je svih šest kartica novo, da nijedna nije privremeno skrivena ni obustavljena i da nijedna nije u filtriranom špilu. Na početku nema drugih kartica, ponovnih prikaza u fazi učenja ni kartica za ponavljanje. Danas još niste učili. `OrderLab` nema nadređeni špil, a primjenjiva ograničenja ponavljanja ostavljaju mjesta za svih šest novih kartica.

Odaberite **OrderLab** za učenje. Za njega vrijedi ograničenje od **4** nove kartice. Za `01 First` vrijedi **3**, a za `02 Second` **2**, bez privremenih izmjena. U obje usporedbe sortirajte **Redoslijedom odabira**. Svaki ishod izračunajte na papiru, polazeći od istog početnog stanja zbirke, bez odgovaranja na kartice između usporedbi.

Kad je odabir postavljen na **Po špilu**, Anki radi ovako.

1. Ide abecednim redom, pa `01 First` dolazi prije `02 Second`.
2. Odabire **A, B, C** prema poziciji. Iz `01 First` ušle su tri kartice, pa u nadređenom špilu ostaje još jedno mjesto.
3. Odabire **D** iz `02 Second` i time doseže ograničenje od četiri kartice u nadređenom špilu.

Očekivani redoslijed prvih prikaza novih kartica jest **A → B → C → D**. E i F ostaju izvan odabranog skupa.

Uz postavku **Uzlazno po poziciji** redoslijed kandidata iz oba podšpila jest **D → A → E → B → F → C**. Prve četiri kartice stanu unutar svih ograničenja. Ulaze dvije iz `02 Second` i dvije iz `01 First`, ukupno četiri. Odabir tu staje.

Očekivani redoslijed jest **D → A → E → B**. C i F ostaju izvan tog skupa. Pri uvrštavanju svake kartice Anki primjenjuje ograničenja njezina špila i nadređenog špila. [Objavljeni kod za odabir kartica](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Iz `02 Second` mogu ući najviše dvije kartice. Uz odabir **Po špilu** ulazi samo jedna jer je `01 First` već zauzeo tri od četiri mjesta. Uz odabir **Uzlazno po poziciji** iz svakog podšpila ulaze dvije kartice zbog pozicija u ovom primjeru. U drugoj zbirci raspodjela može biti drukčija.

## Uvrstite svih šest da odvojite odabir od redoslijeda

Za drugu usporedbu na papiru postavite ograničenja tako da svih šest kartica može ući u red. Nadređenom špilu zadajte **6**, a podšpilovima `01 First` i `02 Second` po **3**. Zadržite sortiranje **Redoslijedom odabira**.

| Postavka odabira | Ograničenja (nadređeni špil / 01 First / 02 Second) | Očekivani redoslijed prvih prikaza |
| --- | --- | --- |
| Po špilu | 6 / 3 / 3 | A → B → C → D → E → F |
| Uzlazno po poziciji | 6 / 3 / 3 | D → A → E → B → F → C |

Obje postavke odabiru svih šest kartica. Razlikuje se samo redoslijed prikaza. Kad biste samo ograničenje nadređenog špila povisili na šest, a `02 Second` ostavili na dvije kartice, u red bi ih ušlo samo pet. F bi i dalje ostala izvan reda. Povećanje ograničenja služi samo ovoj usporedbi na papiru.

## Sortiranjem ne možete vratiti izostavljenu karticu

Vratite početna ograničenja **4 / 3 / 2** i samo u postavci **Redoslijed sortiranja novih kartica** odaberite **Nasumično**.

| Postavka odabira | Kartice koje se mogu prikazati nasumičnim redom | Kartice koje sortiranje ne može dodati |
| --- | --- | --- |
| Po špilu | A, B, C, D | E, F |
| Uzlazno po poziciji | D, A, E, B | C, F |

Anki mijenja redoslijed već odabranih kartica, pa skupovi ostaju isti. Iz tablice ne možete predvidjeti kojim će se redom kartice prikazati nakon nasumičnog sortiranja. [Objavljeni kod za sortiranje kartica](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Postavka **Po tipu kartice, zatim redoslijedom odabira** (Card type, then order gathered) također radi s već odabranim karticama. Svih šest kartica iz bilješki tipa **Osnovno** ima isti broj tipa kartice, pa ta postavka ovdje zadržava redoslijed odabira.

Za zaseban primjer sortiranja uzmite četiri kartice iz bilješki s više predložaka. Pretpostavimo da su već odabrane redom **W (tip 2), X (tip 1), Y (tip 2), Z (tip 1)**. Sortiranje po tipu kartice daje **X → Z → W → Y**. Prvo dolaze kartice tipa 1, a unutar svakog tipa ostaje redoslijed odabira. Ovaj primjer počinje nakon odabira. Koje bi kartice iz iste bilješke uopće ušle u red ovisi o postavkama privremenog skrivanja.

Broj tipa kartice označava položaj njezina predloška unutar tipa bilješke. O predlošku ovisi hoće li kartica tražiti prepoznavanje ili samostalno prisjećanje odgovora. Provjerite stvarna pitanja prije nego što pretpostavite da će sortiranje po tipu kartice prvo prikazati sva pitanja u osnovnom smjeru.

## Provjerite pozicije u pregledniku prije nego što ih promijenite

Otvorite **Preglednik** (Browse), odaberite prikaz **Kartice** (Cards) i pretražite odabrani špil sa svim njegovim podšpilovima. Za ovaj primjer upotrijebite sljedeći upit.

```text
deck:OrderLab is:new
```

U izborniku zaglavlja tablice uključite stupce **Pitanje** (Question), **Kartica** (Card), **Špil** (Deck), **Dospijeće** (Due) i **Datum nastanka** (Created). Za novu karticu **Dospijeće** prikazuje njezinu poziciju u redu čekanja, a **Datum nastanka** pokazuje kada je nastala bilješka kojoj kartica pripada. **Polje za sortiranje** (Sort Field) prikazuje sadržaj polja bilješke odabranog za sortiranje. Sortiranjem po stupcu mijenjate samo prikaz tablice. Pohranjene pozicije i postavka odabira za učenje ostaju iste. [Ankijev opis stupaca u pregledniku (na engleskom)](https://docs.ankiweb.net/manual/browsing#columns)

Upit `is:new` može obuhvatiti i obustavljene ili privremeno skrivene nove kartice. Njihove se vrijednosti u stupcu **Dospijeće** prikazuju u zagradama. Uži upit izostavlja te kartice, kao i kartice koje se trenutačno nalaze u filtriranim špilovima.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Ako naziv špila sadrži razmake, stavite ga u navodnike kao u upitu `deck:"My Deck"`. Pravila pretraživanja opisana su u Ankijevu priručniku na engleskom. [Pretraživanje po stanju kartice](https://docs.ankiweb.net/manual/searching#card-state) · [Pretraživanje po špilu](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes)

I taj uži upit služi samo provjeri kandidata. Dnevna ograničenja i automatsko privremeno skrivanje drugih kartica iz iste bilješke mogu smanjiti broj kartica koje danas ulaze u red. [Vodič o privremenom skrivanju i obustavljanju kartica (na engleskom)](/blog/anki-bury-vs-suspend/)

Ako pozicije već odgovaraju željenom redoslijedu, ostavite ih kakve jesu. Ako ih trebate promijeniti, zabilježite stare pozicije, označite samo nekoliko novih kartica koje želite premjestiti i upotrijebite **Kartice → Promijeni poziciju** (Cards → Reposition). Prvo provjerite postavke u dijaloškom okviru. Opcija **Pomakni pozicije postojećih kartica** (Shift position of existing cards) može promijeniti i pozicije kartica izvan odabira koje imaju veći broj pozicije. Bez tog pomicanja nove se pozicije mogu poklopiti s postojećima. Kad više kartica ima istu poziciju, iz nje ne možete zaključiti kojim će se redom prikazati. [Opis naredbe za promjenu pozicije u Ankijevu priručniku (na engleskom)](https://docs.ankiweb.net/manual/browsing#cards)

Postavke odabira i sortiranja možete promijeniti bez brisanja povijesti učenja ili ponavljanja. Pri provjeri se usredotočite na pozicije novih kartica i redoslijed prikaza.

## Provjerite iz kojeg špila učite i koliko je mjesta danas preostalo

Ako u početnom primjeru izravno odaberete `OrderLab::02 Second`, kandidati su D, E i F. Uz ograničenje od dvije kartice, odabir **Uzlazno po poziciji** i sortiranje **Redoslijedom odabira**, očekujte **D → E**. U nadređenom špilu još su slobodna sva četiri mjesta, pa i uz primjenu njegova ograničenja ima mjesta za obje kartice. Ako odaberete nadređeni špil uz odabir **Po špilu** i ograničenja **4 / 3 / 2**, dobit ćete **A → B → C → D**.

Za sesiju pokrenutu iz špila `OrderLab` vrijedi njegov redoslijed prikaza. Odabrani špil određuje redoslijed prikaza i ograničava ukupan broj novih kartica, uz primjenjiva ograničenja podšpilova. Postavka **Primijeni ograničenja od vrha** (Limits start from top) određuje vrijede li i ograničenja nadređenih špilova kad izravno učite iz podšpila. Ankijev priručnik na engleskom opisuje oba pravila. [Pravila za podšpilove](https://docs.ankiweb.net/manual/deck-options#subdecks) · [Primjena ograničenja nadređenih špilova](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Provjerite i ograničenja ponavljanja. Prema zadanim postavkama ograničenje ponavljanja vrijedi i za nove kartice. To možete promijeniti postavkom **Nove kartice zanemaruju ograničenje ponavljanja** (New cards ignore review limit). Ona i postavka **Primijeni ograničenja od vrha** vrijede za cijelu zbirku. Zabilježite jesu li uključene prije nego što iz ograničenja za nove kartice zaključite koliko ih još danas možete vidjeti. [Objavljeni kod sučelja za dnevna ograničenja](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

U pregledniku otvorite **Pretpregled** (Preview) da pogledate pitanja bez odgovaranja. Pri sljedećoj redovitoj sesiji učenja ispunite ovu kratku provjeru.

| Što zabilježiti | Što time provjeravate |
| --- | --- |
| Špil iz kojeg ste pokrenuli učenje, njegov profil te postavke odabira i sortiranja | Koji redoslijed prikaza vrijedi za sesiju? |
| Kartice koje očekujete i njihove pohranjene pozicije | Je li problem u odabiru ili u redoslijedu? |
| Ograničenja za nove kartice i ponavljanja, posebna ograničenja za taj špil ili samo za danas te koliko ste kartica danas već učili | Koliko je mjesta još preostalo? |
| Ograničenja nadređenih špilova i stanje dviju postavki koje vrijede za cijelu zbirku | Koja se dodatna ograničenja primjenjuju? |
| Privremeno skrivene i obustavljene kartice, kartice u filtriranim špilovima i druge kartice iz iste bilješke | Koji bi kandidati mogli biti nedostupni? |
| Redoslijed prvih prikaza novih kartica, odvojeno od ponovnih prikaza u fazi učenja | Odgovara li redoslijed novih kartica očekivanju? |

Nakon što odgovorite na novu karticu, njezini ponovni prikazi u fazi učenja mogu prekinuti niz prvih prikaza. Postavka **Redoslijed novih kartica i ponavljanja** (New/Review Order) određuje hoće li se nove kartice prikazivati prije kartica za ponavljanje, poslije njih ili među njima. Odabir i sortiranje imaju zasebne postavke. Anki spaja te kategorije nakon što sortira nove kartice. [Objavljeni kod za sastavljanje reda čekanja](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Provjera je gotova kad očekivani skup kartica i redoslijed njihovih prvih prikaza odgovaraju onome što vidite u sesiji. Ako još ima odstupanja, za daljnju provjeru sačuvajte pozicije, postavke, naziv odabranog špila, verziju Ankija i redoslijed koji ste vidjeli te zabilježite relevantne dodatke. Za dodatno uvježbavanje neke teme možete upotrijebiti filtrirani špil. [Upute za vježbanje u filtriranom špilu (na engleskom)](/blog/anki-filtered-decks-without-rescheduling/)
