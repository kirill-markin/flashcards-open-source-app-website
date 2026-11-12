---
title: Tanulókártyák importálása a Nibomóba
description: Hozd át kártyáidat a Quizletből, az Ankiból vagy más alkalmazásból. Válaszd ki a megfelelő exportformátumot, és ellenőrizd a kártyákat a nagyobb importálás előtt.
---

Nyisd meg a [Nibomót](https://app.nibomo.com/?locale=hu), válts arra a munkaterületre, ahová a kártyákat szeretnéd tenni, majd válaszd a **Könyvtár > Importálás** menüpontot. A **Másik alkalmazásból** szakaszban válaszd ki a korábban használt alkalmazást. Minden alkalmazásnak külön menüpontja van, még akkor is, ha többen ugyanazt a fájlformátumot használják.

Az alábbi lehetőségek elérhetők a webalkalmazásban. Ha iPhone-on, iPaden, Macen vagy Androidon nem látod az importálási menüt vagy a keresett alkalmazást, használd a webes felületet. Ha az eszközödön vendégként használod a Nibomót, előbb ott jelentkezz be. A webalkalmazásban ugyanazzal a Nibomo-fiókkal jelentkezz be, majd importálás előtt válaszd ki a célként használt munkaterületet.

## Válaszd ki a forrást

| Forrás | Amit elő kell készítened | Importálás módja |
| --- | --- | --- |
| Quizlet | Az exportból kimásolt szöveg | Illeszd be a Quizlet importálási képernyőjén |
| Anki | `.apkg` pakli vagy `.colpkg` gyűjtemény | **Fájlok kiválasztása** |
| Noji | `.csv` vagy `.ofc` | **Fájlok kiválasztása** |
| Knowt | `.pdf` | **Fájlok kiválasztása** |
| RemNote | `.apkg`, `.md` vagy `.txt` | **Fájlok kiválasztása** |
| Brainscape | `.csv` | **Fájlok kiválasztása** |
| StudySmarter | `.csv` | **Fájlok kiválasztása** |
| Cram | `.csv` | **Fájlok kiválasztása** |
| Mochi | `.mochi` | **Fájlok kiválasztása** |
| SuperMemo | `.xml` | **Fájlok kiválasztása** |
| AlgoApp (korábban AnkiApp) | `.zip` vagy `.xml` | **Fájlok kiválasztása** |
| Másik alkalmazás | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` vagy `.zip` | Válaszd ki a fájlokat az **Importálás másik alkalmazásból** menüpontban |
| Táblázat | Kimásolt sorok a kártyák elő- és hátlapjával | Illeszd be az **Importálás táblázatból** képernyőn |
| Nibomo | A Nibomóból exportált `flashcards.zip` | Nézd meg az előnézetet az **Importálás a Nibomóból** menüpontban |

Ha az importálási menüben még az AlgoApp korábbi neve látható, keresd az **AnkiApp** menüpontot. Az Anki külön menüpontot kapott.

Ha régi, `.xls` formátumú Excel-fájlod van, importálás előtt mentsd `.xlsx` vagy `.csv` formátumba. Az elő- és hátlap oszlopait ki is másolhatod, majd [beillesztheted a táblázatimportáló képernyőn](#beillesztés-táblázatból).

## Importálás másik tanulókártya-alkalmazásból

1. Exportáld az áthelyezni kívánt kártyákat a forrásalkalmazásból. Quizletben nyisd meg a készletet, válaszd az **Export** lehetőséget, és másold ki a szöveget. A kifejezés és a meghatározás közé tabulátor, a kártyák közé sortörés kerüljön. Csak a Quizlet weboldalán exportálhatsz, és csak olyan eredeti készleteket, amelyeket te hoztál létre.
2. A Nibomóban válaszd a **Könyvtár > Importálás** menüpontot, majd nyisd meg a megfelelő lehetőséget. Quizlet esetén illeszd be a kimásolt szöveget. A többi forrásnál válaszd ki az exportált fájlokat. Ha az alkalmazásodnak nincs külön menüpontja, de támogatott formátumba, például PDF-be exportál, válaszd az **Importálás másik alkalmazásból** lehetőséget.
3. Válaszd az **Importálás indítása** gombot. A Nibomo új AI-csevegést nyit, és elküldi az importálási kérést a fájlokkal vagy a beillesztett szöveggel. Ehhez internetkapcsolat kell. Az AI-val importált fájlok egyenként legfeljebb **30 MiB** méretűek lehetnek. Nagyobb fájl esetén próbálj kisebb paklikat vagy készleteket külön exportálni.
4. Ellenőrizd az eredményt a **Könyvtár** lapon. Az AI-csevegés menet közben több részletben is mentheti a kártyákat. Ha leáll, nézd meg, mely kártyák vannak már a Nibomóban, és kérd meg az AI-t, hogy folytassa a többivel, mielőtt a teljes exporttal újra próbálkoznál.

### Próbáld ki először kevés kártyával

Tartsd meg az eredeti exportot, és kezdj egy kis paklival vagy készlettel. Hasonlítsd össze a kártyák számát, és ellenőrizd néhány kártya elő- és hátlapját, címkéit, valamint a számodra fontos képeket és formázást. Ha mentés előtt mintát szeretnél látni, csatold az exportot egy új AI-csevegéshez, és kérj előnézetet néhány kártyáról mentés nélkül. Ekkor az **Importálás indítása** helyett magad írod meg a kérést.

Az AI a Nibomóban új kártyaként hozza létre az importált kártyákat. A korábbi ismétlések előzményei és esedékességi dátumai a forrásalkalmazásban maradnak. Hogy mennyi marad meg az eredeti rendszerezésből, formázásból és médiából, az az export tartalmától és attól függ, mit tud belőle kiolvasni az AI-csevegés. Ellenőrizd az eredményt, mielőtt használni kezdenéd vagy bármit törölnél a forrásalkalmazásból.

## Beillesztés táblázatból

Először jelentkezz be a Nibomo-fiókodba. Az egyszerű elő- és hátlap párokhoz válaszd a **Könyvtár > Importálás > Importálás táblázatból** menüpontot. Másolj ki két oszlopot a táblázatból a fejléc nélkül, majd illeszd be őket az importálási képernyőn. Táblázatcelláknál kezdd a **Tabulátor** beállítással az elő- és hátlap között, illetve az **Új sor** beállítással a kártyák között. Ha a szöveg mást használ, állítsd át az elválasztókat.

Nézd át a kártyák előnézetét, javítsd a hiányos sorokat, és válaszd ki a hozzáadni kívánt címkéket. Ezután a kártyák számát mutató importálási gombbal mentsd a kártyákat. Ehhez nincs szükség AI-csevegésre.

## ZIP importálása a Nibomóból

Először jelentkezz be a Nibomo-fiókodba. A korábban a Nibomóból exportált `flashcards.zip` fájlhoz válaszd a **Könyvtár > Importálás > Importálás a Nibomóból** menüpontot. Válaszd ki a ZIP-et kicsomagolás nélkül. Az előnézetben ellenőrizd a kártyák és a médiafájlok számát, valamint az esetleges figyelmeztetéseket. Ezután erősítsd meg az importálást, majd nézd meg az egyes kártyákat és médiafájlokat a **Könyvtár** nézetben. Így a csomagban található kártyákat, címkéket és médiafájlokat is átviheted AI-csevegés nélkül.
