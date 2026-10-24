---
title: "Tanulókártyák készítése Claude-dal 2026-ban: projektek, fájlfeltöltés és FSRS-alapú ismétlés"
description: "Gyakorlati módszer tanulókártyák készítésére Claude-dal 2026-ban: a Projects és a fájlfeltöltés segítségével készíts rövidebb, letisztultabb kártyákat, majd a megtartottakat vidd át a Nibomóba valódi FSRS-alapú ismétléshez."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "hogyan készíts tanulókártyákat Claude-dal"
  - "Claude tanulókártyák"
  - "tanulókártyák készítése Claude-dal"
  - "Claude Projects tanulókártyák"
  - "Claude fájlfeltöltés tanulókártyák"
  - "Claude PDF-ből tanulókártyák"
  - "tanulókártya-készítés Claude segítségével"
  - "FSRS tanulókártyák"
---

> [Csatlakozás a Claude-hoz](https://claude.ai/directory/nibomo) · [Dokumentáció](/hu/docs/mcp-connector/)

Tegnap feltöltöttem a Claude-ba egy előadásvázlatot és egy rendezetlen olvasmányt PDF-ben, majd tanulókártyákat kértem. Néhány egész jó lett. A többin érződött az ismerős MI-szag: tartalmilag helyesek voltak, furcsán csiszoltnak hatottak, és sokkal nehezebb volt velük ismételni, mint első olvasásra látszott.

Ez az igazi probléma, amikor arról beszélünk, **hogyan készítsünk tanulókártyákat Claude-dal**.

A Claude jól alakítja át a forrásanyagot kártyajavaslatokká. Abban viszont nem automatikusan jó, hogy eldöntse, mit érdemes hosszú távon ismételni, milyen rövid legyen egy kártya, vagy hogy a szép válaszról jövő csütörtökön is könnyen el tudod-e dönteni, mennyire sikerült felidézned.

Ezért az a munkafolyamat, amelyben 2026-ban tényleg megbíznék, szűkebb annál, mint amit elsőre sokan szeretnének: egy témát tarts egy Claude-projekten belül, csak az adott adaghoz tartozó anyagot töltsd fel, kérj egyszerű előlap–hátlap formátumú kártyajavaslatokat, törölj bátran, majd a megmaradtakat vidd át egy valódi, FSRS-t használó tanulókártyás rendszerbe.

![Meleg hangulatú íróasztal Claude-stílusú projektvázlatokkal, fájlfeltöltési kártyákkal és kiválasztott FSRS-tanulókártyákkal](/blog/how-to-use-claude-to-make-flashcards.png)

## A Claude végre alkalmas erre a munkafolyamatra

Ma már még inkább érdemes utánajárni ennek, mert a Claude jobban támogatja a tanulást, mint korábban.

Az Anthropic **2025. április 2-án** mutatta be a **Claude for Education** szolgáltatást, benne a Projects funkción belüli **Learning Mode** tanulási móddal. A jelenlegi súgóoldalak legalább ennyire lényegesek. Az Anthropic Projects-súgóoldala **2026. március 16-i** dátummal azt írja, hogy a projektek minden felhasználó számára elérhetők, az ingyenes fiókokban pedig legfeljebb öt hozható létre. A fájlfeltöltésről szóló, **2026. április 22-i** súgóoldal szerint a Claude a tanuláshoz is hasznos fájltípusokat támogat, köztük a **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON és XLSX** formátumot.

Ez sokkal rendezettebb kiindulópontot ad a **Claude-dal készített tanulókártyákhoz**, mint a régi „öntsünk mindent egy csevegésbe, aztán reménykedjünk” módszer.

Az Anthropic oktatási jelentése is azt mutatja, hogy ez már bevett használati mód. A jelentés szerint az elemzett, oktatáshoz kapcsolódó beszélgetések **39,3%-ában** a diákok elsősorban tananyagok készítésére és javítására használták a Claude-ot. Már nem az az érdekes kérdés, hogy használják-e tananyagokhoz. Egyértelműen igen. Inkább az, hogyan lesz az anyagból olyan kártya, amelyet később is megéri ismételni.

## Tantárgyanként, vizsgánként vagy témánként hozz létre egy Claude-projektet

Ezt a szokást vezetném be elsőként, mert szinte minden későbbi lépést megkönnyít.

A Claude jelenlegi dokumentációja a projekteket önálló munkaterületekként írja le, saját csevegési előzményekkel és tudásbázissal. Pontosan erre van szükség a kártyavázlatok készítéséhez.

Ne hozz létre egyetlen óriási Claude-munkaterületet `school` néven.

Külön projektet készíts:

- egy tantárgyhoz
- egy szakmai minősítő vizsgához
- egy tananyagegységhez, amellyel ezen a héten szeretnél végezni
- egy valóban összetartozó témacsoporthoz

Így tisztábbak lesznek a vázlatok, mert a Claude nem próbál négy tantárgy egymáshoz nem kapcsolódó anyagából egyetlen választ összegyúrni. A rendrakás is kevésbé bosszantó, mert tudod, hogy az egyes adagoknak mit kellett lefedniük.

Ha nemcsak kártyavázlatok készítésére használod a Claude-ot, hanem általánosabban, tanárként is, a [Hogyan használd a Claude-ot tanuláshoz 2026-ban](/hu/blog/how-to-use-claude-for-studying/) jobb kísérő olvasmány. Ez a cikk szűkebb témáról szól: hogyan jutsz el a Claude válaszától olyan kártyákig, amelyeket ismétlés közben is jónak tartasz majd.

## Állítsd be egyszer a projektutasításokat, hogy minden adaggal könnyebb legyen kezdeni

Ez a Claude egyik leghasznosabb előnye.

Az Anthropic jelenlegi Projects-útmutatója szerint megadhatsz **projektutasításokat**, így a Claude ugyanazokat a követelményeket követi az adott projekten belüli csevegésekben. Tanulókártyáknál ezzel megspórolod, hogy minden új szakasz feltöltésekor elismételd ugyanazokat a formázási és törlési szabályokat.

Én rövid és egyszerű projektutasítást adnék:

```text
Amikor tanulókártyákat kérek, egyszerű előlap–hátlap formátumot használj. Egy kártyán egy fogalom, tény, különbségtétel vagy egy folyamat egyetlen lépése szerepeljen. Az előlap legyen konkrét és megválaszolható. A hátlap legyen rövid. Hagyd ki az ismétlődéseket, a homályos kérdéseket és mindent, ami az eredeti forrás további szövegkörnyezete nélkül nem érthető.
```

Az adott feladatra vonatkozó utasításokat pedig az új adag feltöltésekor, magában a csevegésben add meg.

Ez a felosztás jól működik: a projektutasítás rögzíti az általános szabályokat, a csevegésben adott kérés pedig az aktuális előadással, fejezettel vagy feladatsorral foglalkozik.

## Kisebb adagokban töltsd fel a forrást, mint amekkorákra szerinted szükség van

A **Claude-dal végzett tanulókártya-készítés** általában itt válik túl engedékennyé.

Sokan meglátják a fájlfeltöltést, és úgy veszik, hogy most már egyetlen kérésbe belezúdíthatják egy teljes kurzus anyagát. Ettől általában rosszabb kártyák születnek.

Az Anthropic saját feltöltési dokumentációja is az egyszerű megoldás felé terel a nagy dokumentumoknál: bontsd őket kisebb szakaszokra. Én pontosan ezt tenném.

Jó kiinduló anyag például:

- egy előadás jegyzete
- az olvasmány egy szakasza
- egy kijavított gyakorlófeladatsor
- egy fejezet alfejezete
- egy tanulási útmutató rendezett részlete

Rosszabb kiinduló anyag:

- a teljes tankönyv
- tizenkét előadás egyszerre
- egy egész félév mappája, amelyben még nem raktál rendet
- egy hatalmas szöveges átirat, amelyet valójában nem akarsz kártyánként átismételni

A kis adagok egy őszintébb kérdésre kényszerítenek: ebből a szakaszból mit érdemes később úgy felidézni, hogy ne kelljen újra megnyitni a forrást?

Ettől marad kisebb és jobb a pakli.

## A Claude a forrásanyagból jól készít vázlatot, a fontosságot neked kell megítélned

Szerintem ez a leghasznosabb kiindulópont.

A Claude képes:

- tömöríteni az olvasmány egy szakaszát
- világosabban megfogalmazni egy fogalmat
- különválasztani a nyilvánvaló altémákat
- a jegyzetekből kérdés–válasz kártyajavaslatokat készíteni
- felismerni a visszatérő szakkifejezéseket és meghatározásokat

Azt viszont nem tudja automatikusan:

- mely tények annyira egyértelműek már neked, hogy kihagyhatók
- mely különbségek felismerése okoz újra meg újra gondot
- melyik válasz túl hosszú a gyors értékeléshez
- melyik kártya csak azért érthető, mert még emlékszel az eredeti bekezdésre

Ezért működik a legjobban a **tanulókártyák készítése Claude-dal**, ha a Claude vázlatot ad, te pedig szerkesztesz.

Ha minden döntést a Claude-ra bízol, általában túl engedékeny paklit kapsz. Túl sok mindent őriz meg, túl sokat magyaráz, és megtart olyan anyagot is, amely akkor hasznosnak tűnt, de nem érdemli meg a későbbi ismétléseket.

## Használj egyszerű kérést, és hagyd, hogy a korlátok dolgozzanak

Nincs szükség színpadias promptra.

Magában a csevegésben valami ilyesmit használnék:

```text
Alakítsd át ezt a forrást egyszerű előlap–hátlap tanulókártyákká.

Szabályok:
- Egy kártyán egy tény, különbségtétel vagy egy folyamat egyetlen lépése legyen
- Az előlap legyen konkrét és megválaszolható
- A hátlap legyen rövid és lényegre törő
- Ne találj ki tényeket
- Hagyd ki az ismétlődéseket és a homályos kérdéseket
- Hagyd ki azokat a kártyákat, amelyek az eredeti dokumentum további szövegkörnyezete nélkül nem érthetők
- Bátran töröld azokat a kártyákat, amelyeket nem érdemes hosszú távon ismételni
```

Ha a forrás egy kijavított feladatsor, egészítsd ki egy mondattal:

```text
Helyezd előtérbe azokat a hibákat, félreértéseket és különbségtételeket, amelyeknél valószínűleg újra tévednék.
```

Ennyi elég.

A hasznos korlátok egyszerűek:

- kártyánként egy megjegyzendő elem
- rövid válaszok
- kitalált tények nélkül
- átfogó összefoglalást kérő előlapok nélkül
- olyan kártyák nélkül, amelyek mellé továbbra is meg kell nyitni a teljes forrást

A Claude általában jól reagál az egyértelmű határokra. Ritkán az a baj, hogy hiányzik valamilyen varázsprompt. Inkább az, hogy az emberek túl sokat kérnek egyszerre.

## A legjobb Claude-tanulókártyák általában háromféle anyagból születnek

A Claude-ban akkor bízom leginkább, ha a forrás már majdnem alkalmas kártyák készítésére, de még rendezni kell.

A legjobb alapok:

- előadásjegyzetek, amelyeket tömöríteni kell
- olvasmányok, amelyekből ki kell emelni a lényeget
- kijavított feladatok, amelyek egy konkrét hibára mutatnak rá

Ez azért számít, mert a Claude ilyenkor nem a semmiből talál ki egy tanulási rendszert. Abban segít, hogy a nyersanyagból szűkebben meghatározott, felidézendő elemek legyenek.

Ha főként jegyzetekből indulsz ki, a [Hogyan alakítsd a jegyzeteidet tanulókártyákká 2026-ban – angol nyelvű cikk](/blog/turn-notes-into-flashcards/) részletesebben foglalkozik a rendrakással. Fájloknál emelj ki egy rövid, releváns szakaszt, és ellenőrizd a szöveget, az egyenleteket és a jelöléseket, mielőtt elfogadod a kártyavázlatokat.

## Töröld azokat a kártyákat, amelyeken még mindig érződik a Claude

Itt történik az igazi minőségi ugrás.

A Claude által készített kártyák gyakran felismerhető módon hibásak:

- az előlap elegánsan hangzik, de nem lehet egyértelműen megválaszolni
- a hátlap három tényt tartalmaz, mert a bekezdésben is három tény volt
- a kártyán maradnak az olyan homályos kifejezések, mint a „fő szempontok” vagy a „fontos tényezők”
- a megfogalmazás elég világos ahhoz, hogy szépnek találd, de ismétlés közben bosszantó

Ezeket azonnal kiszűrném.

Egy tanulókártya előlapja ne úgy hangozzon, mint egy tanulási útmutató nyitómondata. Olyan kérdés legyen, amelyre vagy tudsz válaszolni, vagy nem.

Csak akkor tartsd meg a kártyát, ha:

- a forrás újbóli megnyitása nélkül is meg tudod válaszolni
- a hátlap elég rövid ahhoz, hogy gyorsan értékeld a válaszodat
- egyetlen fogalmat kér számon, nem egy egész fogalomcsoportot
- egy hét múlva is fontos lesz neked, hogy emlékezz rá

Ha nem ilyen, töröld.

Ez a fő különbség egy hasznosnak érződő Claude-beszélgetés és egy tartósan hasznos pakli között.

## Egy gyenge Claude-kártya és a változat, amelyet tényleg megtartanék

Tegyük fel, hogy a Claude elolvas egy részletet a glikolízisről, majd ezt adja:

- Előlap: Mik a glikolízis fő jellemzői és eredményei?
  Hátlap: A glikolízis a citoplazmában zajló anyagcsere-folyamat, amely a glükózt piruváttá alakítja, ATP-t és NADH-t termel, és nem igényel oxigént.

Ez nem egy kártya. Ez egy bekezdés, amelyre névtáblát tűztek.

A jobb változat általában több kisebb kártyából áll:

- Előlap: Hol zajlik a glikolízis?
  Hátlap: A citoplazmában.
- Előlap: Melyik molekulát bontja le a glikolízis?
  Hátlap: A glükózt.
- Előlap: Igényel oxigént a glikolízis?
  Hátlap: Nem.

Talán megtartasz még egy kártyát a folyamat termékeiről is, ha ez a különbségtétel számít az adott tantárgyban.

Nem a Claude gördülékeny válaszát kell megőrizned. A benne rejlő, külön felidézhető elemeket érdemes megtartani.

## Ne keverd össze a Claude memóriáját és szövegkörnyezetét a szakaszos ismétléssel

A Claude ma már jobb eszközökkel kezeli a szövegkörnyezetet, mint korábban. Segítenek a projektek. Segítenek a feltöltött fájlok. Segítenek a projektutasítások. Ez mind hasznos.

De ettől még nem lesz ismétlési rendszer.

A Claude képes egy téma körül megőrizni az összefüggéseket. Jobban tudja követni a beszélgetés menetét, mint a régebbi csevegőeszközök. Ez azonban nem helyettesíti azt az unalmas részt, amely később igazán számít: hogy a megfelelő kártyát a megfelelő időben lásd újra.

Ezért a **Claude Projects segítségével készített tanulókártyáknak** egy valódi tanulókártya-alkalmazásban kell kikötniük, nem magában a projektben.

A Claude megőrzi a szövegkörnyezetet.

Az FSRS kezeli a felejtést.

Ez két külön feladat.

Ha az ismétlések ütemezéséről olvasnál részletesebben, az [FSRS és SM-2 összehasonlítása 2026-ban – angol nyelvű cikk](/blog/fsrs-vs-sm-2/) a közvetlen folytatás.

## Mentsd a jóváhagyott kártyákat a Nibomóba

Nyisd meg a [Nibomo oldalát a Claude csatlakozókatalógusában](https://claude.ai/directory/nibomo), csatlakoztasd, jelentkezz be a Nibomo-fiókodba, és engedélyezd a hozzáférést. A Nibomo Community, azaz közösségi csatlakozóként szerepel a katalógusban.

Kérd meg a Claude-ot, hogy a Nibomo MCP-csatlakozóján keresztül csak azokat a kártyákat mentse el, amelyeket ellenőriztél és jóváhagytál. Nézd át a célként megadott munkaterületet és az írási kérést, hagyd jóvá, majd az FSRS-alapú ismétlés előtt ellenőrizd az elmentett kártyákat a Nibomóban. A kézi másolás továbbra is lehetőség.

A [Nibomo](/hu/) azért illik ebbe a munkafolyamatba, mert a jelenlegi termék lefedi azt a részt, amelyet a Claude önmagában nem végez el:

- előlap–hátlap kártyák készítése és szerkesztése
- MI-csevegés a munkaterület adataival és fájlmellékletekkel
- paklik és címkék a végleges kártyák rendszerezéséhez
- FSRS-alapú ismétlés, ha már érdemes megtartani a kártyákat
- üzemeltetett webalkalmazás, ha gyorsan szeretnél elindulni
- saját üzemeltetési lehetőség, ha később magad szeretnéd futtatni a rendszert

Ha a leggyorsabb utat keresed, az [Első lépések](/hu/docs/getting-started/) útmutató az üzemeltetett alkalmazást mutatja be. Ha fontosabb, hogy te kezeld a teljes rendszert, a [saját üzemeltetési útmutató](/hu/docs/self-hosting/) a következő olvasmány.

## A munkafolyamat, amelyet tényleg újra és újra használnék

A **Claude-dal történő tanulókártya-készítés** jó változata elég rövid ahhoz, hogy akkor is használd, amikor már elmúlt az újdonság varázsa.

Én ezt a változatot tartanám meg:

1. Hozz létre egy Claude-projektet egy tantárgyhoz, vizsgához vagy témához.
2. Adj meg egy rövid projektutasítást az előlap–hátlap kártyák szabályaival.
3. Tölts fel egy kis adagot: egy előadás anyagát, egy olvasmányrészletet vagy kijavított gyakorlófeladatokat.
4. Kérj a Claude-tól egyszerű előlap–hátlap kártyajavaslatokat.
5. A gyenge kártyákat azonnal töröld vagy írd át.
6. Kérd meg a Claude-ot, hogy a Nibomo MCP-csatlakozóján keresztül csak azokat a kártyákat mentse el, amelyeket ellenőriztél és jóváhagytál. Nézd át a célként megadott munkaterületet és az írási kérést, hagyd jóvá, majd az FSRS-alapú ismétlés előtt ellenőrizd az elmentett kártyákat a Nibomóban. A kézi másolás továbbra is lehetőség.
7. A végleges paklit FSRS-sel ismételd.

Ez hihetőbb munkafolyamat, mint úgy tenni, mintha magának a Claude-nak kellene gondoskodnia arról, hogy emlékezz az anyagra.

Ha az MI-vel készített paklid már túlzsúfoltnak érződik, ne fogadj el újabb vázlatokat, hanem javítsd ki a meglévőket a [Hogyan javítsd ki az MI-vel készített tanulókártyákat 2026-ban – angol nyelvű cikk](/blog/how-to-fix-ai-flashcards/) segítségével.

## Jobb szabály a Claude-dal történő tanulókártya-készítéshez

Ne kérd a Claude-ot, hogy tanuljon helyetted.

Kérd arra, hogy vegye le rólad az adminisztratív munkát.

A **Claude-dal történő tanulókártya-készítésnek** ez a változata állja meg a helyét 2026-ban:

- témánként egy projekt
- egyszerre egy kis adag
- kártyánként egy tény vagy különbségtétel
- határozott törlés
- utána valódi ismétlés

A Claude abban jó, hogy a rendezetlen forrásanyagból gyorsabban eljuttat a kártyajavaslatokig.

A Nibomo és az FSRS teszi lehetővé, hogy ezekből a javaslatokból olyan tudás legyen, amelyre talán egy hónap múlva is emlékszel.
