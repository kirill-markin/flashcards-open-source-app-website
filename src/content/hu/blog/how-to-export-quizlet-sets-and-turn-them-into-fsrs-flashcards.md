---
title: "Quizlet-készletek exportálása 2026-ban (és miért hiányozhat az Export gomb)"
description: "Így exportálhatsz Quizlet-készletet a weboldalon. Ha hiányzik az Export gomb, ellenőrizd, te készítetted-e az eredetit, másolatot nyitottál-e meg, vagy a mobilappot használod-e."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "Quizlet exportálása"
  - "Quizlet tanulókártyák exportálása"
  - "Quizlet export gomb hiányzik"
  - "Quizlet tanulókártyák letöltése"
  - "Quizlet CSV export"
  - "Quizlet Anki import"
---

Ha hiányzik az **Export** gomb a Quizletben, először két dolgot ellenőrizz: te hoztad létre az eredeti készletet, és a Quizlet weboldalát használod? A Quizlet csak a készlet eredeti létrehozójának engedi az exportálást, és a funkció kizárólag a weboldalon működik. Másolt készletet akkor sem lehet exportálni, ha a másolat már a saját könyvtáradban jelenik meg.

Ha jogosult vagy rá, maga az exportálás gyors: nyisd meg a készletet a weboldalon, válaszd a **More → Export** menüpontot, állítsd be a fogalmak és meghatározások elrendezését, majd kattints a **Copy text** gombra. A Quizlet nem tölt le paklifájlt. A szöveget a vágólapra másolja, képek nélkül.

**A tények ellenőrzésének dátuma:** 2026. augusztus 30., a [Quizlet hivatalos exportálási útmutatója](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) alapján.

![Levéltáros ellenőrzi a tulajdonjogot igazoló jelzéseket a párosított szöveges kártyák átadása előtt; két irattartó készen áll, a fényképek az üveg mögött maradnak](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Egyáltalán meg kellene jelennie az Export gombnak?

Mielőtt más módon próbálnád letölteni a Quizlet-tanulókártyákat, ellenőrizd az alábbiakat:

| A helyzeted | Elérhetőnek kellene lennie az Export gombnak? | Következő lépés |
| --- | --- | --- |
| Te hoztad létre az eredeti készletet, és a Quizlet weboldalán nyitottad meg | Igen, a Quizlet súgója szerint | Kövesd az alábbi lépéseket |
| Az iOS- vagy Android-alkalmazást használod | Nem; exportálni csak a weboldalon lehet | Nyisd meg a Quizletet egy böngészőben, és jelentkezz be |
| Lemásoltad egy másik felhasználó készletét | Nem; a Quizlet szerint a másolt készletek nem exportálhatók | A másolás nem teszi elérhetővé az exportálást |
| Meg tudod nézni a készletet, de nem te hoztad létre | Nem; a megtekintési hozzáférés nem jelent létrehozói jogosultságot | Kérj forrásfájlt a létrehozótól, vagy készítsd el újra olyan anyagból, amelyet felhasználhatsz |

Ha te hoztad létre az eredeti készletet, de továbbra is hiányzik a Quizlet exportgombja, ellenőrizd, hogy a készlet tulajdonosának fiókjával jelentkeztél-e be, és az eredetit nyitottad-e meg, nem egy másolatot. A Quizlet súgója nem ír le másik exportálási lehetőséget. Ilyenkor fordulj a Quizlet ügyfélszolgálatához ahelyett, hogy egy, a korlátozás megkerülését ígérő letöltőre hagyatkoznál.

## Quizlet-tanulókártyák exportálása a weboldalon

Saját készlet exportálásához:

1. Jelentkezz be a Quizlet weboldalán.
2. Nyisd meg a könyvtáradat (**Your library**).
3. Válaszd a tanulókártya-készleteket (**Flashcard sets**).
4. Nyisd meg az exportálni kívánt készletet.
5. Nyisd meg a további lehetőségek menüjét (**More**).
6. Válaszd az exportálást (**Export**).
7. Állítsd be a fogalmak és meghatározások elrendezését.
8. Kattints a szöveg másolására (**Copy text**).
9. Illeszd be az eredményt egy egyszerű szövegszerkesztőbe.

Jelenleg ennyiből áll a teljes folyamat. A végén nincs külön „letöltés” gomb.

A szokásos, elő- és hátlapból álló kártyáknál azt javaslom, hogy a fogalmat és a meghatározást tabulátor válassza el, a kártyák pedig külön sorba kerüljenek. Ez gyakorlati tanács az elválasztó megválasztásához, nem a Quizlet előírása. A tabulátorokat általában könnyebb ellenőrizni, mint a vesszőket, mert a meghatározások szövegében gyakran szerepel vessző.

Egy megfelelően rendezett, két kártyát tartalmazó fájl így néz ki, minden sor közepén egy tabulátorral:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Mit őriz meg a Quizlet exportja?

A Quizlet szűken határozza meg ezt a funkciót: a létrehozó saját készletéből a **fogalmakat és meghatározásokat** exportálja. Azt is közli, hogy képek nem exportálhatók.

Abból érdemes kiindulni, amit a beillesztés után ténylegesen látsz. Ha egy szövegrész, elválasztó vagy sortörés szerepel benne, azt fájlban is megőrizheted. A Quizlet súgója nem ígéri a mappák, tanulási módok, formázás, elsajátítási állapot, ismétlési előzmények vagy ütemezés átvitelét.

Ez tehát a kártyák szövegének másolata, nem visszaállítható Quizlet-biztonsági mentés. Ugyanez a különbség akkor is számít, ha a „Quizlet tanulókártyák letöltése” kifejezésre kerestél: a Quizlet a vágólapra másolja a szöveget, a fájlt pedig te hozod létre.

## Mielőtt bármit javítanál, ments egy nyers UTF-8-másolatot

Gondoskodj róla, hogy vissza tudj térni az eredetihez:

1. Illeszd be az exportált szöveget egy egyszerű szövegszerkesztőbe.
2. Mentsd UTF-8-kódolással, például `biology-quizlet-raw.txt` néven.
3. Készíts róla másolatot `biology-quizlet-working.txt` néven.
4. A nyers fájlt hagyd érintetlenül, és csak a munkapéldányt szerkeszd.

A munkapéldány importálása előtt ellenőrizd az alábbiakat, miközben a Quizlet-készlet még nyitva van:

- Kapcsold be a láthatatlan karakterek megjelenítését, és ellenőrizd a tabulátorok és sortörések helyét.
- Keress rá a választott elválasztóra a fogalmak és meghatározások szövegében. Egy plusz tabulátor váratlan harmadik mezőt hozhat létre.
- Keresd meg azokat a meghatározásokat, amelyek saját sortörést tartalmaznak; ezeket az importáló további kártyáknak nézheti.
- Hasonlítsd össze a fájl elejét, közepét és végét a Quizletben látható szöveggel, a leghosszabb meghatározásokat is beleértve.
- Zárd be, majd nyisd meg újra a fájlt, és ellenőrizd az ékezeteket, a nem latin írásjegyeket, a szimbólumokat és a tipográfiai idézőjeleket.
- Jelöld meg az üres mezőket, a duplikátumokat és a szabálytalan sorokat ahelyett, hogy ellenőrzés nélkül kitalálnád, hogyan javítsd őket.

Csak akkor hasonlítsd össze a sorok és a kártyák számát, ha minden kártya pontosan egy sort foglal el. Többsoros meghatározásoknál ez az egyszerű ellenőrzés nem működik.

A nyers fájlt akkor is őrizd meg, ha a munkapéldány már rendben van. Ha importáláskor elcsúszik egy mező vagy elveszik valamilyen tartalom, így lesz egy változatlan összehasonlítási alapod.

## Quizletből CSV: tudatosan készítsd el a fájlt

Egy `.txt` fájl átnevezése `.csv` kiterjesztésűre nem alakítja át a tartalmát. A CSV következetes elválasztóhasználatot és helyes idézőjelezést igényel a vesszőt, idézőjelet vagy többsoros szöveget tartalmazó mezőknél.

Így készíthetsz biztonságosan CSV-fájlt a Quizletből:

1. Hagyd érintetlenül a nyers szöveges biztonsági másolatot.
2. Nyisd meg a munkapéldányt egy táblázatkezelőben, és pontosan azt az elválasztót válaszd, amelyet a Quizletben használtál.
3. Ellenőrizd, hogy minden várt rekord két oszlopból áll-e: fogalomból és meghatározásból.
4. Vizsgáld meg az idézőjeleket, az elválasztókat és a többsoros meghatározásokat.
5. Exportáld UTF-8-kódolású CSV-ként.
6. Nyisd meg újra a CSV-t egy friss előnézetben, mielőtt máshol felhasználnád.

A táblázatkezelő hozzá tudja adni a CSV-hez szükséges idézőjeleket. Ha egyszerűen minden tabulátort vesszőre cserélsz, azzal ezt nem tudod megbízhatóan megoldani.

## Vidd át a szöveget a Nibomóba ellenőrzendő kártyavázlatként

A [Nibomónak](/hu/features/) nincs közvetlen Quizlet-importálója. A szolgáltatásban a TXT- vagy CSV-fájlokat csatolmányként adhatod át az AI-nak, amely kártyavázlatokat készít belőlük; ez nem veszteségmentes átköltöztetés.

1. Őrizd meg a nyers Quizlet-fájlt az alkalmazáson kívül.
2. Csatold a megtisztított TXT-t vagy a gondosan előkészített CSV-t a Nibomo AI-csevegésében.
3. Mondd meg az asszisztensnek, milyen elválasztót és mezőket használ a fájl.
4. Kérj egy kis előnézeti mintát, és kifejezetten jelezd, hogy még ne mentse el a kártyákat.
5. Hasonlítsd össze a javasolt kártyaszámot, előlapokat és hátlapokat a munkapéldánnyal.
6. Csak az ellenőrzött kártyákat mentsd el.

A [kezdő lépéseket bemutató útmutató](/docs/getting-started/) leírja, hogyan használja az AI-csevegés a munkaterület adatait és a fájlcsatolmányokat. Egy körültekintő utasítás például ilyen lehet:

> Olvasd be ezt a fájlt tabulátorral elválasztott fogalom–meghatározás párokként. Még ne ments el kártyákat. Készíts egy kis mintát, őrizd meg a forrás megfogalmazását és a nem latin karaktereket, a hibás, üres vagy kétértelmű sorokat pedig találgatás helyett külön sorold fel.

Ez hasznos lehet, ha a régi kártyákra egyébként is ráfér a javítás. Azt azonban nem bizonyítja, hogy minden sor helyesen került át. Használd az [AI-val készített tanulókártyák javításáról szóló útmutató](/blog/how-to-fix-ai-flashcards/) ellenőrzőlistáját, majd próbálj ki egy kis paklit, mielőtt létrehoznád a többit.

A Nibomóban létrehozott kártyák tanulási előzményei nulláról indulnak. A Quizletből kinyert szöveg nem tartalmazza a korábbi ismétlések adatait és az ütemezés állapotát, amelyek nélkül nem folytathatod a régi ismétlési sort.

> **Átláthatóság:** Én fejlesztem a Nibomót. Ez a munkafolyamat a termék jelenlegi korlátait írja le; nem állít teljes Quizlet-kompatibilitást.

## Quizletből Ankiba: használd az Anki szövegimportálóját

Az Anki [hivatalos szövegimportálási kézikönyve](https://docs.ankiweb.net/importing/text-files.html) szerint UTF-8-kódolású egyszerű szövegfájlok importálhatók, amelyekben a mezőket vessző, pontosvessző vagy tabulátor választja el.

Tabulátorral elválasztott munkapéldánynál:

1. Indítsd el az importálást az Ankiban, és válaszd ki az UTF-8-kódolású szövegfájlt.
2. Az előnézetben ellenőrizd, hogy az Anki felismerte-e a tabulátort; ha nem, módosítsd az elválasztó beállítását.
3. Válaszd ki a jegyzettípust és a célpaklit.
4. Rendeld az első mezőt az előlaphoz, a másodikat a hátlaphoz.
5. Az előnézetben keresd meg az üres, elcsúszott vagy felesleges mezőket.
6. Importálás előtt ellenőrizd a duplikátumokra és frissítésre vonatkozó beállítást.

Az Anki az első, nem megjegyzésként megadott sorból határozza meg a várt mezőszámot. A későbbi rekordokban a hiányzó mezők üresek lesznek, a többletmezőket pedig nem importálja. Emiatt fontos az előnézet, különösen akkor, ha egyetlen véletlen elválasztó is megváltoztathatja egy sor szerkezetét.

A többsoros meghatározások kezeléséről is külön döntened kell. Az Anki támogatja az idézőjelek közé tett, több soron át tartó mezőket. Másik lehetőségként a `<br>` jelölést is sortörésként tudja értelmezni, ha engedélyezed az **Allow HTML in fields** beállítást. Válassz egy módszert, és ellenőrizd egy kimásolt mintán, mielőtt a teljes fájlt importálnád.

Alapértelmezés szerint az Anki az első mező alapján egyezést találhat egy meglévő, azonos típusú jegyzettel, és frissítheti annak többi mezőjét. Az importálási beállításokkal ehelyett figyelmen kívül is hagyhatod a duplikátumokat, vagy új jegyzetként adhatod hozzá őket. Egy meglévő Anki-jegyzet frissítése megőrizheti annak Anki-ütemezését, de a szövegfájlon keresztül semmilyen Quizlet-ütemezés nem kerül át.

## Őrizd meg az eredetit, amíg az új pakli nem működik

A Quizlet hivatalos exportálási folyamata a weboldalon, a saját készleteknél a **Copy text** gombbal ér véget. Az adatkinyerő szkriptek, a találgatással felderített privát végpontok és a külső letöltők különálló, nem támogatott megoldások. Egy másolt vagy csak megtekinthető készlet exportálását nem teszik hivatalosan támogatottá.

Ha egyszeri másolás helyett rendszeres automatizálásra van szükséged, a [Quizlet API jelenlegi helyzetéről szóló cikk](/blog/quizlet-api/) ismerteti a támogatott lehetőségek határait. Ha nem a tiéd a készlet, kérj forrásfájlt a létrehozójától, vagy készíts egy kisebb paklit a saját jegyzeteidből. A [jobb tanulókártyák készítéséről szóló útmutató](/blog/how-to-make-better-flashcards/) segíthet abban, hogy javíts az új paklin, ahelyett, hogy minden régi sort lemásolnál.

Csak akkor töröld az eredeti Quizlet-készletet, ha:

- elmentetted a nyers UTF-8-fájlt olyan helyre, amelyről készül biztonsági mentés;
- a munkapéldány újranyitásakor a várt karakterek és elválasztók jelennek meg;
- ellenőrizted a többsoros mezőket, az üres értékeket, a duplikátumokat és a szabálytalan sorokat;
- pótoltad a képek által hordozott fontos információkat olyan forrásból, amelyet felhasználhatsz; és
- egy kis próbával meggyőződtél róla, hogy az elő- és hátlapok helyesen jelennek meg a célalkalmazásban.

A nyers szövegfájlt ezután is tartsd meg. Ez a legegyszerűbb független összehasonlítási alap, ha egy későbbi importálás eredménye hibásnak tűnik. Ha még nem döntötted el, hová kerüljenek a kártyák, a [Quizlet-alternatívákat összehasonlító cikk](/blog/quizlet-alternative/) a tágabb szempontokat is áttekinti.
