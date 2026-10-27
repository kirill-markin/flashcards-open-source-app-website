---
title: "Tanulókártyák importálása a Quizletbe Excelből, Google Táblázatokból vagy szövegből"
description: "Importálj kétoszlopos szólistát a Quizletbe tabulátorokkal és új sorokkal. Közzététel előtt javítsd a hibásan feldarabolt definíciókat, a felesleges kártyákat és a CSV-hibákat."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "tanulókártyák importálása Quizletbe"
  - "Quizlet importálási formátum"
  - "Quizlet importálás Excelből"
  - "Google Táblázatokból Quizletbe"
  - "Quizlet tabulátorral tagolt importálás"
---

A „red, green, blue” hétköznapi válasznak tűnik egy tanulókártyán. Ha azonban vesszővel választod el a kifejezést a definíciójától, ugyanezek a vesszők kétértelművé teszik a sort. Néhány írásjel miatt az előkészített szólistát végül újra rendbe kell tenni.

Ha Excelből, Google Táblázatokból vagy szövegből szeretnél tanulókártyákat importálni a Quizletbe, két oszloppal kezdd: az egyikbe kerüljenek a kifejezések, a másikba a definíciók. Másold ki az adatokat, illeszd be őket a weboldal importálási űrlapjára, majd válaszd a tabulátort a mezők, az új sort pedig a kártyák elválasztásához. Először négy sorral próbáld ki, hogy minden párt ellenőrizhess, mielőtt az egész listát átvinnéd.

![Egy fazekas külön sorokban párosítja a kerámiacsészéket a hozzájuk illő csészealjakkal, mielőtt a polcra helyezné őket](/blog/how-to-import-flashcards-into-quizlet.png)

## Hol találod a Quizlet importálási űrlapját

A Quizlet a weboldalán dokumentálja az importálást: a mezők közé vessző, tabulátor vagy kötőjel, a kártyák közé pontosvessző vagy új sor kerülhet. A [hivatalos importálási útmutató](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) ezt a sorrendet adja meg:

1. Jelentkezz be, majd válaszd a **Create → Flashcard set** (Létrehozás → Tanulókártya-készlet) lehetőséget.
2. Adj meg egy címet, válaszd az **Import** (Importálás) lehetőséget, és illeszd be a szöveget.
3. Állítsd be az elválasztókat a bemenetnek megfelelően. Az itteni példákhoz a **Tab** (Tabulátor) és a **New line** (Új sor) beállítást használd.
4. Válaszd az **Import** lehetőséget, majd add meg a kifejezések és a definíciók nyelvét.
5. Nézd át a kártyákat, mielőtt a **Create** lehetőséggel mentenéd és közzétennéd a készletet.

Az útmutatót 2026. szeptember 15-én ellenőriztük. Az alábbi példák a szöveg előkészítését és ellenőrzését mutatják be; nem egy bejelentkezés után elvégzett tesztet írnak le.

## Kezdd egy kis táblázattartománnyal

Az Excelben vagy a Google Táblázatokban minden sorba egy kifejezés–definíció-pár kerüljön. Íme egy négykártyás próba:

| Kifejezés | Definíció |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Csak a két oszlop négy adatsorát másold ki. Ha a fejlécek az 1. sorban vannak, az **A2:B5** tartományt jelöld ki. A fejléceket hagyd ki a másolt tartományból.

Négy kártyát kell kapnod, spanyol kifejezésekkel és angol definíciókkal. Az utolsó kártya egyik oldalán a teljes „colores primarios de la luz”, a másikon a teljes „red, green, blue” szövegnek kell maradnia. A vesszők a válasz részei.

Ha ez a példa már világos, készítsd elő a saját táblázatodat. Egy másolaton dolgozz, hogy az eredeti megmaradjon az összehasonlításhoz. Távolítsd el az üres sorokat, és ne jelölj ki jegyzeteket vagy további oszlopokat. Másolás előtt pótold a hiányzó kifejezéseket és definíciókat.

Rendezéskor tartsd együtt a két oszlopot. Ha csak a kifejezéseket rendezed, elszakadnak a hozzájuk tartozó válaszoktól, és az importált készlet akkor is hibás párokat tartalmazhat, ha a kártyák száma megfelelő.

## Az egyszerű szöveges formátum valódi tabulátorokat használ

Ugyanez a négy sor tabulátorral tagolt szövegként így néz ki. A kifejezést és a definíciót minden sorban egy valódi tabulátor választja el:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

A tabulátor egy konkrét karakter. Több szóköz hasonlóan nézhet ki, de nem helyettesíti a tabulátort. A `\t` karakterek beírása sem szúr be tabulátort. Ha a szövegszerkesztőben ez nehézkes, írd a párokat egy táblázat két oszlopába, és másold ki a cellákat.

Minden kártya egyetlen fizikai sort foglaljon el. Egy hosszú definíció a keskeny ablak miatt két látható sorba tördelődhet; ettől még nem kerül sortörés a tartalomba. A táblázatcellán belül beszúrt sortörés viszont valódi sortörés. Távolítsd el ezeket, mielőtt az új sorokat használnád a kártyák elválasztására.

A kifejezéseken és definíciókon belüli tabulátorokat is távolítsd el. Ebben a formátumban tabulátor csak a két mező közé kerülhet.

## Ha a listád CSV-fájlban van

Az import előkészítése előtt nyisd meg a CSV-t egy táblázatkezelőben. Az alábbi CSV-rekord az idézőjelezési szabályok szerint értelmezve két mezőt tartalmaz:

```text
"colores primarios de la luz","red, green, blue"
```

Az idézőjelek közé tett válasz vesszőket tartalmaz. Egy olyan szövegmező, amely vesszőknél bontja fel a bemenetet, nem feltétlenül CSV-olvasó, ezért ne számíts arra, hogy ott az idézőjelek megóvják a választ a felbontástól.

Az Excelben vagy a Google Táblázatokban ellenőrizd, hogy a rekord pontosan két cellát foglal-e el. Ezután másold ki a cellákat a tabulátorral tagolt bevitelhez. Ha a válasz további oszlopokba csúszott szét, előbb javítsd a táblázatkezelő CSV-importálási beállításait. A hibás sor másolásával a hibát is továbbviszed.

Azokat az értékeket is ellenőrizd, amelyeket a táblázatkezelő átértelmezhet. Ha a `0012` egy megtanulandó kód, a `12`-re alakítása megváltoztatja a kártyát. A tartomány másolása előtt hasonlítsd össze az azonosítókat, dátumokat, idézőjeleket és ékezetes szavakat az eredeti fájllal.

## Ha a kártyák nem egyeznek a sorokkal

A próbával keresd meg az első eltérést. Egyszerre csak egy dolgon változtass, majd hasonlítsd össze az eredményt ugyanazzal a négy forrássorral.

| Tünet | Valószínű elválasztási probléma | Mit változtass |
| --- | --- | --- |
| A válasz a vesszőknél szétesik | A mezők között vessző van beállítva | Készíts két oszlopot, és válaszd a Tab beállítást |
| A „well-being” kifejezés kettéválik | A mezők között kötőjel van beállítva | Tartsd meg a kötőjelet, és a mezőket tabulátorral válaszd el |
| Egy válaszból több kártya lesz | A forrásban beágyazott sortörések vannak | Tedd a választ egyetlen fizikai sorba |
| A „Kifejezés” és a „Definíció” kártyaként jelenik meg | A fejlécsort is kimásoltad | Csak az adatsorokat jelöld ki |
| Mindkét mező ugyanazon az oldalon marad | Tabulátor helyett szóközök vannak | Másolj ki egy kétoszlopos táblázattartományt |

Ha például egy válaszban a „first stage” és a „second stage” külön sorban szerepel, átírhatod így: `first stage; second stage`. Így mindkét rész egy sorban marad. Ha a válaszon belül pontosvesszőt használsz, a kártyák között továbbra is a **New line** legyen kiválasztva.

Ha a két szakaszhoz külön kérdés illene, inkább írj két teljes párt. A [jobb tanulókártyák készítéséről szóló útmutató (angolul)](/blog/how-to-make-better-flashcards/) segíthet a döntésben.

## Közzététel előtt ellenőrizd az eredményt

Nézd át a próba mind a négy kártyáját. A teljes listánál hasonlítsd össze az importált kártyákat a megtisztított forrással:

- Megegyezik az összes kártya száma a hiánytalan adatsorok számával?
- Egyezik az első és az utolsó pár, a teljes válaszukkal együtt?
- Változatlanul megmaradtak az írásjelek, ékezetek és kódok?
- Van üres oldal, fejléc, ismétlődés vagy rossz kifejezéshez párosított válasz?
- Továbbra is érthető minden olyan válasz, amelynek a sortöréseit szerkesztetted?

A gyanús párok mellett olvass el néhány szokványosat is. Az egyező darabszám önmagában nem mutatja ki, ha egy érvényes kifejezéshez rossz válasz tartozik. Ha hibát találsz, az import megismétlése előtt javítsd a forrást. A megtisztított fájlt őrizd meg a későbbi javításokhoz.

## Már megírt párok vagy MI-vel generált kártyák?

A Quizlet a megadott anyagból történő, mesterséges intelligenciával támogatott kártyakészítést is bemutatja az [MI-alapú létrehozás áttekintésében](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). A generált szöveg tartalmát külön is ellenőrizni kell. Egy kész kifejezés–definíció-listánál a strukturált importálással összevetheted az átvitel eredményét a már megírt párokkal.

Bekezdésekből indulsz ki? Az importszöveg előkészítése előtt [alakítsd tanulókártyákká a jegyzeteidet (angolul)](/blog/turn-notes-into-flashcards/). Egy készletet az ellenkező irányba vinnél át? Használd a [Quizlet-exportálási útmutatót](/hu/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
