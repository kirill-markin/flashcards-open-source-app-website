---
title: "Kako uvesti kartice za učenje u Quizlet iz Excela, Google tablica ili teksta"
description: "Uvezite popis riječi iz dva stupca u Quizlet uz tabulatore i nove retke te ispravite razdvojene definicije, višak kartica i probleme s CSV-om prije objave."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "kako uvesti kartice za učenje u Quizlet"
  - "format za uvoz u Quizlet"
  - "uvoz u Quizlet iz Excela"
  - "iz Google tablica u Quizlet"
  - "uvoz u Quizlet s tabulatorima"
---

„Red, green, blue” izgleda kao običan odgovor na kartici za učenje. No ako zarezima označavate granicu između pojma i definicije, ti isti zarezi čine redak dvosmislenim. Zbog nekoliko interpunkcijskih znakova pripremljeni popis riječi može zahtijevati dodatno ispravljanje.

Za uvoz kartica za učenje u Quizlet iz Excela, Google tablica ili teksta počnite s dva stupca: jednim za pojmove i drugim za definicije. Kopirajte podatke, zalijepite ih u obrazac za uvoz na web-stranici te odaberite tabulatore između polja i nove retke između kartica. Najprije pokušajte s četiri retka kako biste mogli pregledati svaki par prije prijenosa cijelog popisa.

![Lončar slaže keramičke šalice s pripadajućim tanjurićima u zasebne redove prije nego što ih premjesti na policu](/blog/how-to-import-flashcards-into-quizlet.png)

## Gdje pronaći Quizletov obrazac za uvoz

Quizlet na svojoj web-stranici opisuje uvoz sa zarezima, tabulatorima ili crticama između polja te točkama sa zarezom ili novim redcima između kartica. [Službene upute za uvoz](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) navode ovaj postupak:

1. Prijavite se i odaberite **Create → Flashcard set** (Izradi → Skup kartica).
2. Unesite naslov, odaberite **Import** (Uvoz) i zalijepite tekst.
3. Uskladite postavke razdjelnika s unosom. Za primjere u ovom članku odaberite **Tab** (Tabulator) i **New line** (Novi redak).
4. Odaberite **Import**, a zatim jezike pojmova i definicija.
5. Pregledajte kartice prije nego što odaberete **Create** kako biste spremili i objavili skup.

Upute su provjerene 15. rujna 2026. Primjeri u nastavku objašnjavaju pripremu i provjeru teksta; ne opisuju testiranje u prijavljenom korisničkom računu.

## Počnite s malim rasponom ćelija

U Excelu ili Google tablicama stavite svaki par pojma i definicije u zaseban redak. Evo probnog primjera s četiri kartice:

| Pojam | Definicija |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopirajte samo četiri retka s podacima u ta dva stupca. Ako su zaglavlja u prvom retku, odaberite **A2:B5**. Izostavite zaglavlja iz raspona koji kopirate.

Očekivani rezultat su četiri kartice s pojmovima na španjolskom i definicijama na engleskom. Na posljednjoj kartici „colores primarios de la luz” treba ostati zajedno na jednoj strani, a „red, green, blue” na drugoj. Zarezi su dio odgovora.

Kad vam ovaj primjer bude jasan, pripremite vlastitu tablicu. Radite na kopiji kako biste sačuvali izvornik za usporedbu. Uklonite prazne retke, a bilješke i dodatne stupce izostavite iz odabira. Prije kopiranja unesite sve pojmove i definicije koji nedostaju.

Pri sortiranju zadržite oba stupca zajedno. Sortiranje samo pojmova odvojilo bi ih od odgovora pa bi i uvoz s točnim brojem kartica mogao sadržavati pogrešne parove.

## Obični tekst mora sadržavati prave tabulatore

Ista četiri retka izgledaju ovako kao tekst razdvojen tabulatorima. Svaki razmak između pojma i definicije sadrži jedan stvarni znak tabulatora:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabulator je poseban znak. Nekoliko razmaka može izgledati slično, ali ne služi kao tabulatorski razdjelnik. Ni upisivanje znakova `\t` ne umeće tabulator. Ako vam uređivač teksta to otežava, unesite parove u dva stupca tablice i kopirajte te ćelije.

Svaka kartica treba zauzimati jedan stvarni redak teksta. Duga definicija može se zbog uskog prozora prikazati u dva retka; time se u sadržaj ne dodaje prijelom retka. No prijelom koji umetnete unutar ćelije tablice postaje dio sadržaja. Uklonite takve prijelome prije nego što nove retke upotrijebite kao razdjelnike kartica.

Uklonite i tabulatore unutar pojmova ili definicija. U ovom formatu tabulatori služe isključivo za razdvajanje dvaju polja.

## Ako je vaš popis CSV datoteka

Prije pripreme uvoza otvorite CSV u programu za tablične proračune. CSV zapis poput ovoga sadrži dva polja kada se tumači prema pravilima CSV-a o navodnicima:

```text
"colores primarios de la luz","red, green, blue"
```

Odgovor unutar navodnika sadrži zareze. Tekstualno polje koje dijeli unos na zarezima ne mora biti čitač CSV-a, pa se nemojte oslanjati na to da će navodnici ondje sačuvati cjelovitost odgovora.

U Excelu ili Google tablicama provjerite zauzima li zapis točno dvije ćelije. Zatim kopirajte ćelije za unos razdvojen tabulatorima. Ako se odgovor rasporedio u dodatne stupce, najprije ispravite postavke uvoza CSV-a u programu. Kopiranjem pogrešno učitanog retka prenijet ćete i pogrešku.

Provjerite i vrijednosti koje bi program mogao drukčije protumačiti. Ako je `0012` šifra koju trebate naučiti, pretvaranje u `12` mijenja karticu. Prije kopiranja raspona usporedite identifikatore, datume, navodnike i riječi s dijakritičkim znakovima s izvornom datotekom.

## Kad kartice ne odgovaraju vašim redcima

Upotrijebite probni primjer kako biste pronašli prvo odstupanje. Mijenjajte jednu po jednu stvar, a zatim usporedite rezultat s ista četiri izvorna retka.

| Problem | Vjerojatan problem s razdjelnicima | Što promijeniti |
| --- | --- | --- |
| Odgovor se razdvaja na zarezima | Zarez je odabran kao razdjelnik između polja | Pripremite dva stupca i odaberite Tab |
| „well-being” se razdvaja usred pojma | Crtica je odabrana kao razdjelnik između polja | Sačuvajte spojnicu i razdvojite polja tabulatorom |
| Jedan odgovor postaje više kartica | Prijelomi redaka unutar izvornog sadržaja | Stavite odgovor u jedan stvarni redak teksta |
| „Term” i „Definition” pojavljuju se kao kartica | Kopiran je redak zaglavlja | Odaberite samo retke s podacima |
| Oba polja ostaju na istoj strani | Razmaci umjesto tabulatora | Kopirajte raspon ćelija iz dva stupca tablice |

Na primjer, odgovor u kojem su „first stage” i „second stage” u zasebnim redcima mogao bi postati `first stage; second stage`. Tako oba dijela ostaju u jednom retku. Kad u odgovoru upotrebljavate točku sa zarezom, zadržite **New line** kao razdjelnik između kartica.

Ako te dvije faze zaslužuju zasebna pitanja, napišite dva potpuna para. [Vodič za izradu boljih kartica za učenje (na engleskom)](/blog/how-to-make-better-flashcards/) može vam pomoći u toj odluci.

## Provjerite rezultat prije objave

Pregledajte sve četiri probne kartice. Za cijeli popis usporedite uvezene kartice s uređenim izvornim podacima:

- Odgovara li ukupan broj kartica broju potpunih redaka s podacima?
- Podudaraju li se prvi i posljednji par, uključujući cijele odgovore?
- Jesu li interpunkcija, dijakritički znakovi i šifre ostali nepromijenjeni?
- Ima li praznih strana, zaglavlja, duplikata ili odgovora uparenih s pogrešnim pojmovima?
- Ima li svaki odgovor u kojem ste mijenjali prijelome redaka i dalje smisla?

Pročitajte nekoliko uobičajenih parova, kao i one sumnjive. Samo podudaranje broja kartica neće otkriti pogrešan odgovor pridružen valjanom pojmu. Ako nešto nije u redu, ispravite izvorne podatke prije ponovnog uvoza. Sačuvajte uređenu datoteku za buduće ispravke.

## Već napisani parovi ili kartice koje generira AI?

Quizlet opisuje i izradu kartica iz priloženog materijala uz pomoć umjetne inteligencije u svojem [pregledu AI izrade kartica](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Generirani tekst zahtijeva zasebnu provjeru sadržaja. Za gotov popis pojmova i definicija strukturirani postupak uvoza omogućuje vam da provjerite prijenos usporedbom s parovima koje ste već napisali.

Polazite od odlomaka teksta? [Pretvorite bilješke u kartice za učenje (na engleskom)](/blog/turn-notes-into-flashcards/) prije pripreme teksta za uvoz. Prenosite skup u suprotnom smjeru? Poslužite se [vodičem za izvoz iz Quizleta](/hr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
