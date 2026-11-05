---
title: "Duplikált kártyák az Ankiban – keresés és biztonságos törlés"
description: "Derítsd ki, miért jelennek meg duplikált kártyák az Ankiban, és melyiket érdemes megtartani. A példa az ismétlési előzmények ellenőrzésén is végigvezet."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "Anki duplikált kártyák"
  - "Anki duplikátumok keresése"
  - "duplikált Anki-jegyzetek törlése"
  - "Anki duplikált jegyzetek"
  - "Anki ismétlési előzmények"
---

Már gyakoroltad ezt a kérdést, az Anki mégis újként mutatja. Lehet, hogy importáláskor bekerült még egy példány. Az is lehet, hogy az Anki ugyanabból a jegyzetből egy második kérdést hozott létre. A különbség számít, mert a kártyaböngészőben egyetlen sor törlésével a jegyzet összes kártyáját eltávolíthatod, köztük azt is, amelyiket meg akartad tartani.

Ha **duplikált kártyákat** találsz az Ankiban, először derítsd ki, miért ismétlődik a kérdés. Ha külön jegyzetekről van szó, keresd meg a lehetséges duplikátumokat a **Notes → Find Duplicates** menüponttal. Hasonlítsd össze a jegyzetek tartalmát és az egyes kártyák előzményeit, majd csoportonként válaszd ki, melyik példányt tartod meg. Az egyező mező támpont a kereséshez. A törlésről a teljes tartalom és az előzmények alapján dönts.

Az asztali Ankihoz készült útmutató a 2026. október 4-én ellenőrzött dokumentáción és a kiadott verzió forráskódján alapul. A menüpontok és a keresési példák az angol felületet követik. Az alábbi kitalált feladatban azt követheted végig, milyen eredményre számíthatsz.

![Egy sakkklub tagja egy világos tartalék bástyát hasonlít össze két kopott bástyával egy fa sakktáblán](/blog/anki-duplicate-cards.png)

## Először derítsd ki, mi ismétlődik

Egy jegyzet mezőkből áll, ilyen például a **Front** (előlap) és a **Back** (hátlap). A mezők tartalmából sablonok alapján készülnek a kártyák. Ha például új szót tanulsz, ugyanabból a jegyzetből készülhet egy kártya a szó felismerésére, egy másik pedig az önálló felidézésére. Ezek testvérkártyák, és mindkettőnek saját ütemezése van. [Az Anki útmutatója a jegyzetekről és mezőkről](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

A **Browse** ablakban válts **Cards** nézetre, és minden gyanús sornál nyisd meg a **Cards → Info** menüpontot. Hasonlítsd össze a jegyzetazonosítókat (Note ID). Azonos érték esetén a kártyák egy jegyzethez tartoznak. Eltérő értékek külön jegyzeteket jelentenek. A `nid:123` keresésben cseréld ki a `123` értéket a tényleges azonosítóra, hogy pakliszűrés nélkül lásd az adott jegyzet kártyáit. [Az Anki azonosítói és a hozzájuk tartozó keresések](https://docs.ankiweb.net/searching.html#object-ids)

| Mit találsz? | Valószínű magyarázat | Következő lépés |
| --- | --- | --- |
| Ugyanaz a jegyzet, ellentétes irányú kérdések | Szándékosan létrehozott testvérkártyák | Nézd meg, hogy mindkét kérdés hasznos-e |
| Ugyanaz a jegyzet, a megjelenített kérdések egyformák | Lehetséges, hogy megkettőződött egy kártyasablon | Hasonlítsd össze a sablonokat és az előnézeteket |
| Külön jegyzetek, látszólag egyforma kérdések | Lehetséges duplikált jegyzetek | Nézd át a teljes jegyzeteket, mielőtt választasz |

Ha szándékosan készültek kártyák mindkét irányban, a [fordított kártyákról szóló útmutató (angolul)](/blog/anki-reverse-cards/) bemutatja a két irány szerepét. Ha csak az egyiket szeretnéd szüneteltetni, [függeszd fel az adott kártyát (angol útmutató)](/blog/anki-bury-vs-suspend/). A felfüggesztett kártya a gyűjteményben marad.

Ha két sablon egyforma, kövesd az Anki útmutatóját a hiba okának megkereséséhez. Egy sablon törlése minden olyan jegyzetet érint, amely az adott jegyzettípust használja, más paklikban is. Kezeld ezt külön szerkezeti módosításként, még akkor is, ha egy ismétlődő kérdés miatt vetted észre. [Az Anki útmutatója a többször megjelenő kártyákhoz](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Állítsd be, hol keresel duplikált jegyzeteket

Nyisd meg a **Notes → Find Duplicates** menüpontot, és válaszd ki az összehasonlítandó mezőt, például a **Front** mezőt. Az Anki alapból minden olyan jegyzettípusban keres, amelyben szerepel ez a mező. Az **Optional filter** mezőben szűkítheted a keresést. Ezután kattints a **Search** gombra. [A Find Duplicates funkció beállításai](https://docs.ankiweb.net/browsing.html#finding-duplicates)

A `Cleanup practice` nevű paklihoz ezt írd be.

```text
deck:"Cleanup practice"
```

A paklira szűkített keresés az alpaklikra is kiterjed. Ha a példányok külön paklikban lehetnek, töröld a szűrőt, és keress az egész gyűjteményben. Akkor is lehet másolat egy másik pakliban, ha a kiválasztott pakliban nincs találat. [Az Anki útmutatója a pakli szerinti kereséshez](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Kattints egy találati csoportra, és nézd át a jegyzeteit. A **Tag Duplicates** gomb a csoport minden jegyzetéhez hozzáadja a `duplicate` címkét, ahhoz is, amelyiket megtartod. **Ne töröld egyszerre a `tag:duplicate` keresés összes találatát.** A címkével gyűjtsd össze a lehetséges duplikátumokat, majd egyenként válaszd ki a törlendő jegyzeteket. [A címkézés forráskódja a kiadott verzióban](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

A keresés a kiválasztott mező tartalmát hasonlítja össze. Két eltérően megfogalmazott kérdés ugyanarra az ismeretre kérdezhet rá, így ezeket esetenként kézzel kell megkeresned. Az egyformán megfogalmazott kérdések viszont különböző nyelvekhez vagy tananyagokhoz is tartozhatnak.

## Három példa arra, hogy mit érdemes megtartani

Képzelj el egy `Cleanup practice` nevű paklit hat jegyzettel, alpaklik nélkül. Az A és B jelű jegyzet a **Basic (and reversed card)** típus változatlan sablonjait használja, így mindkettőből két kártya készül. A C–F jelű jegyzetek típusa **Basic**, így mindegyikből egy kártya készül. Mind a nyolc kártya ebben a pakliban van. A betűk a példában segítenek eligazodni. Az Ankiban a jegyzet- és kártyaazonosítók számok.

| Jegyzetek | Előlap → hátlap | Kitalált tanulási állapot | Döntés |
| --- | --- | --- | --- |
| A és B | `le vélo` → `bicycle` | Az A jegyzet felismerési kártyáján 12, a felidézési kártyáján 3 ismétlés szerepel. A B mindkét kártyája új. | Tartsd meg az A-t. A törléshez először a B-t vizsgáld meg. |
| C és D | `Chemical symbol for silver?` → `Ag` | A C kártyáján 20, a D kártyáján 6 ismétlés szerepel. | Hasonlítsd össze az előzményeket, és válaszd ki, melyik kártyával tanulsz tovább. |
| E és F | E: `bank` → `financial institution`, F: `bank` → `side of a river` | Két különböző jelentés | Tartsd meg mindkettőt, és pontosítsd a kérdéseket a megfelelő kontextussal. |

A **Front** mező szerinti kereséssel mindhárom párt megtalálhatod. Csak az első párnál kézenfekvő, melyik maradjon. Mielőtt feleslegesnek ítélnéd a B-t, hasonlítsd össze **az összes mezőt**, a médiafájlokat, a címkéket, a jegyzettípust és azt, hogy a kártyák melyik irányban kérdeznek. Lehet, hogy a B-hez olyan kiejtési hanganyag tartozik, amely az A-ból hiányzik. Vagy olyan kérdés készül belőle, amely az A-ból nem.

Ha találsz hasznos tartalmat ugyanahhoz a kérdéshez, másold át a megtartott jegyzetbe, majd ellenőrizd az előnézetet. Őrizd meg a forrást jelölő hasznos címkéket is. Ha már más ismeretet szeretnél gyakorolni, készíts hozzá új kérdést. Így a korábbi ismétlések ahhoz a kérdéshez tartoznak, amelyet ténylegesen gyakoroltál.

A C és D esetében az ismétlések száma csak támpont. Mindkét kártyán nézd meg az ismétlések dátumát, a válaszértékeléseket, az aktuális időközt és az esedékességet. Lehet, hogy azért van több ismétlés az egyik kártyán, mert többször kellett újratanulnod. Ellenőrizd, hogy hasznos-e a kérdés és a válasz, aztán döntsd el, melyik kártya előzményeire építve folytatod. Ha a válaszok ellentmondanak egymásnak, előbb nézd meg a tananyag eredeti forrását. A több ismétlés nem igazolja a válasz helyességét.

Ha megtartod a C-t és törlöd a D-t, **a C megőrzi a saját ismétlési előzményeit és ütemezését**. A **Card Info** ablak kártyánként mutatja az előzményeket. A törölt jegyzetek ismétlései továbbra is beleszámítanak az egész gyűjtemény statisztikájába, de a pakli statisztikájából eltűnnek, és a megtartott kártyára sem kerülnek át. [A Card Info ablak](https://docs.ankiweb.net/stats.html#card-info) · [A törölt jegyzetek statisztikája](https://docs.ankiweb.net/stats.html#more)

Ha még bizonytalan vagy, halaszd el a törlést. Írd fel, mit kell ellenőrizned, és ha szükséges, addig függeszd fel a feleslegesnek tűnő kártyákat.

## Törölj egy biztos duplikátumot, majd ellenőrizd az eredményt

Mielőtt törölnél a saját gyűjteményedből, szinkronizáld a többi eszközön végzett ismétléseket és módosításokat. Utána szinkronizáld az asztali Ankit is, hogy az ottani gyűjteményben minden változás szerepeljen. [Az Anki szinkronizálási útmutatója](https://docs.ankiweb.net/syncing.html)

A **File → Export** menüben ments **Anki Collection Package (`.colpkg`)** formátumban, bekapcsolt **Include Media** opcióval. A csomagban minden pakli, ütemezés és ismétlési előzmény benne van. Tartsd a fájlt biztonságos helyen. Importáláskor a mentett gyűjtemény felülírja a megnyitott profilban lévő kártyákat. [A gyűjtemény exportálásának dokumentációja](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Ha előbb kipróbálnád a törlést, hozz létre külön profilt a **File → Switch Profile** menüben, és oda importáld a mentést. A próbaprofilt ne csatlakoztasd az AnkiWebhez. Minden profilnak külön gyűjteménye van. Ha mindkét profilt ugyanahhoz a fiókhoz kapcsolod, az egyik gyűjtemény felülírhatja a másikat. [Az Anki útmutatója a profilokról](https://docs.ankiweb.net/profiles.html) · [Az APKG és a COLPKG mentési és importálási különbségei (angolul)](/blog/anki-apkg-vs-colpkg/)

A példában legyen A1 az A felismerési kártyája, A2 pedig a felidézési kártyája. A B megfelelő kártyái legyenek B1 és B2. A **Cards → Info** ablakban írd fel az A két tényleges kártyaazonosítóját (Card ID), az esedékességet, az ismétlési időközt és az előzmények néhány könnyen azonosítható bejegyzését mindkét kártyáról. A B jegyzetazonosítóját is írd fel. A törlés előtti és utáni állapotot ugyanabban a munkamenetben hasonlítsd össze. Közben egyik példányt se gyakorold és ne ütemezd át.

Az Anki duplikált jegyzeteit így törölheted egyenként.

1. A **Browse** keresőmezőjében keress a B tényleges jegyzetazonosítójára a `nid:` előtaggal. **Cards** nézetben nézd át az összes találatot, és nyisd meg mindkét irány előnézetét. Valódi tananyagnál nézd meg, vannak-e testvérkártyák más paklikban is. Ehhez a kereséshez hagyd ki a pakliszűrőt.
2. Válts **Notes** nézetre. Ellenőrizd, hogy az egyetlen találat a törölni kívánt B jegyzet. Csak ezt jelöld ki, majd válaszd a **Notes → Delete** parancsot. A művelet a kijelölt jegyzetet és az összes hozzá tartozó kártyát törli, akkor is, ha a **Cards** nézet egyetlen sorából indítod. [Az Anki törlési parancsa](https://docs.ankiweb.net/browsing.html#notes)
3. Ismételd meg a keresést a B jegyzetazonosítójával, és ellenőrizd, hogy nincs találat. Keress rá az A feljegyzett kártyaazonosítóira a `cid:` előtaggal, az azonosítókat vesszővel elválasztva. Mindkét kártyánál vesd össze az **Info** ablak adatait azzal, amit felírtál.
4. Keress rá a `deck:"Cleanup practice"` kifejezésre, és hasonlítsd össze a sorok számát **Notes** és **Cards** nézetben. Nézd meg, hogy a megmaradt jegyzetek egyeznek-e az alábbi táblázattal.

Ha csak a B-t törölted, ezt az eredményt várd.

| Mit ellenőrizz? | Törlés előtt | Elvárt eredmény törlés után |
| --- | --- | --- |
| A teljes példapakli | 6 jegyzet / 8 kártya | 5 jegyzet / 6 kártya |
| A biciklis pár | A1, A2, B1, B2 | Csak A1 és A2 |
| Az A kártyaazonosítói, esedékessége, ismétlési időközei és előzményei | A feljegyzett értékek | Ugyanazok a kártyák, ütemezési adatok és előzménybejegyzések |
| Keresés a B jegyzetazonosítójára | A B két kártyája | Nincs találat |
| Az ezüstről és a „bank” jelentéseiről szóló jegyzetek | C, D, E, F | Ugyanez a négy jegyzet maradt meg |

Itt egy jegyzet törlésével két kártya tűnik el. Ha a B helyett az A-t törölnéd, ugyanennyi kártya maradna, de elveszítenéd azokat, amelyeket már gyakoroltál és meg akartál tartani. A darabszámok mellett ellenőrizd az azonosítókat is. A rendrakás során ne nullázd le és ne ütemezd át a megtartott kártyákat.

A teljes gyűjtemény grafikonján továbbra is szerepelhetnek a törölt kártyák ismétlései. A haladás ellenőrzéséhez keresd meg a megmaradt kártyát az azonosítója alapján, és nézd meg az **Info** ablak adatait.

Ha a csoport megfelel a feljegyzéseidnek, jöhet a következő. Annál külön döntsd el, melyik példányt tartod meg. Ha másolaton gyakoroltál, előbb végezd el az ellenőrzött törlést a tényleges profilodban. Az ottani ellenőrzés után szinkronizáld az asztali Ankit, majd a többi eszközödet is, mielőtt azokon tanulnál. Ha importáláskor keletkeztek a másolatok, a következő import előtt nézd meg a [CSV-s jegyzetfrissítés útmutatóját (angolul)](/blog/anki-csv-update-existing-notes/). Ha azért másoltál jegyzeteket, mert ugyanaz az ismeret több témához tartozik, [címkékkel is jelölheted az átfedést (angol útmutató)](/blog/anki-tags-vs-decks/), így nem keletkeznek újabb ismétlési előzmények ugyanahhoz az ismerethez.
