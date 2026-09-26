---
title: "Mochi tanulókártyák: értékelés (2026), ingyenes csomag, offline használat és összehasonlítás az Ankival"
description: "Források alapján ellenőrzött Mochi-értékelés: ingyenes csomag, offline alkalmazások, Markdown-jegyzetek, FSRS, szinkronizálás, Anki-import, export és a saját üzemeltetés korlátai."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi tanulókártyák"
  - "mochi kártyák"
  - "mochi vagy anki"
  - "anki vagy mochi"
  - "ingyenes-e a mochi"
  - "mochi offline"
  - "mochi árak"
  - "mochi saját üzemeltetés"
  - "markdown tanulókártyák"
  - "mochi időközönkénti ismétlés"
---

A Mochiban egy Markdown-dokumentummal kezdesz, nem a megszokott előlap–hátlap űrlappal. Írj egy sorba három kötőjelet, és a dokumentum ismételhető oldalakra válik szét. Meghagyhatod jegyzetnek, összekapcsolhatod egy másik kártyával, vagy archiválhatod, hogy kereshető maradjon, de ne kerüljön az ismétlési sorba.

Ez az apró elválasztójel jól megmutatja, kinek valók a **Mochi tanulókártyái**. A Mochi jó választás, ha a jegyzeteidet és az időközönkénti ismétlést ugyanabban, elsősorban helyi adatokkal dolgozó alkalmazásban szeretnéd kezelni, különösen akkor, ha kézre áll a Markdown, a visszahivatkozások és az egyszerű Emlékeztem/Elfelejtettem értékelés. Kevésbé meggyőző annak a régi Anki-felhasználónak, akinek a gyűjteménye generált kártyaváltozatokra, egyéni HTML/CSS-re, JavaScriptre, bővítményekre vagy részletes ütemezési beállításokra épül.

Egyetlen eszközön az ingyenes csomag több egy próbaverziónál: nem kell regisztrálni, és a Mochi korlátlan offline használatot dokumentál. A bökkenő az, hogy az eszközök közötti szinkronizálás a **havi 5 USD-s Pro csomaghoz** tartozik. Egy Anki-felhasználónak a költözéssel járó veszteség lehet a nagyobb ár. A Mochi be tud importálni egy Anki-csomagot az ismétlési előzményekkel együtt, de nem tud minden sablont, stílust, szkriptet, ütemezési beállítást és bővítményfunkciót megőrizni.

> **A szerző érdekeltsége:** Kirill Markin vagyok, a [Nibomo](/hu/) fejlesztője. Ez a munkafolyamatokat bemutató, források alapján ellenőrzött értékelés; nem állítom, hogy személyesen, használat közben teszteltem a terméket. A cikkben nincsenek jutalékos partnerlinkek. Az összehasonlítás középpontjában a Mochi és az Anki marad; a saját termékem csak a cikk vége felé jelenik meg, egyértelműen megjelölt alternatívaként.

**A tények ellenőrzésének dátuma:** 2026. szeptember 7. Az akkor látható legfrissebb [Mochi-kiadás](https://mochi.cards/changelog/) a 2026. augusztus 10-i 26.8.2-es verzió volt. Az árak és az alkalmazásboltokban szereplő részletek változhatnak.

![Egy könyvrestaurátor összekapcsolt, harmonikaszerűen hajtogatott kártyasort próbál ki, miközben az eredeti archívum biztonságban, dobozban marad](/blog/mochi-alternative-v3.png)

## Rövid értékelés

- **Válaszd a Mochit**, ha együtt szeretnéd kezelni a Markdown-jegyzeteket és a kártyákat, egy eszközön fiók nélkül tanulnál offline, visszahivatkozásokat használnál, és ismétléskor két lehetőség közül döntenél.
- **Válaszd az Ankit**, ha kiforrott jegyzettípusokra, HTML/CSS-sablonokra, bővítményekre, ingyenes, a szolgáltató által üzemeltetett szinkronizálásra, négyféle értékelésre vagy részletesebb FSRS-beállításokra van szükséged.
- **Egyelőre ne válts**, ha már rendszeresen ismételsz, és nem tudod megnevezni, milyen problémát oldana meg a Mochi a munkafolyamatodban. Egy új felület önmagában nem elég indok arra, hogy többévnyi ütemezési adatot és egyéni kártyát kockáztass.
- **Költözés előtt tesztelj**, ha már régóta az Ankiban tartod a gyűjteményedet. A Mochi fogad `.apkg`-fájlokat, és át tudja venni az ismétlési előzményeket, de a HTML-t Markdownná alakítja, a CSS-t és a JavaScriptet pedig eltávolítja.

## Mochi és Anki: gyors összehasonlítás

| Szempont | Mochi | Anki |
|---|---|---|
| Kinek való leginkább | Összekapcsolt jegyzeteket és Markdownt használóknak, akik a jegyzeteket az ismétlőkártyák mellett szeretnék tartani | Tanulóknak, akik kiforrott, testreszabható tanulókártya-rendszert keresnek |
| Kártyakészítés | A Markdown-dokumentum a `---` hozzáadásával többoldalassá válik; mezők és sablonok is rendelkezésre állnak | A jegyzetek mezőket tartalmaznak; a HTML/CSS-sablonok egy vagy több kártyát generálnak |
| Az ismétlés menete | Az új kártyák először tanulási szakaszba kerülnek; a megtanult kártyák értékelése Elfelejtettem / Emlékeztem | A kártyák értékelése Újra / Nehéz / Jó / Könnyű |
| Ütemezés | Alapértelmezésben a Mochi saját algoritmusa; az FSRS választható | FSRS vagy a régebbi SM-2, több FSRS-hangolási lehetőséggel |
| Ingyenes használat | Regisztráció nélkül, korlátlanul offline | Ingyenes asztali alkalmazások és ingyenes AnkiWeb-szinkronizálás; a hivatalos iOS-alkalmazás fizetős |
| Eszközök közötti szinkronizálás | Pro, havi 5 USD | Ingyenes az AnkiWeben keresztül |
| Platformok | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, hivatalos AnkiMobile, független AnkiDroid |
| Hordozható formátumok | Natív `.mochi`, Markdown- és CSV-export | Natív `.colpkg` és `.apkg`, valamint tabulátorral tagolt szöveg |
| Adatok és üzemeltetési korlátok | Elsősorban helyi adatokkal működik; az alapalkalmazást nem nyílt forráskódúként mutatják be, és nincs dokumentált, támogatott, saját üzemeltetésű szinkronszolgáltatás | A fő kódtár AGPL-licencű; dokumentált hivatalos, saját üzemeltetésű szinkronszerver |

A lényegi különbség a **jegyzetközpontú egyszerűség és a teljes gyűjtemény feletti irányítás** között van.

## Mire épül a Mochi felülete?

A Mochi felülete könnyebben érthető, ha végigköveted rajta egy kártya útját.

Minden kártya egy paklihoz tartozik. Kattints a **New Card (új kártya)** gombra, és rögzített kérdés- és válaszmezők helyett egy Markdown-szerkesztőfelületet kapsz. Egyetlen kártyán lehetnek címsorok, listák, kód, képek, strukturált mezők és hivatkozások. A blokkok közé írt `---` két vagy több ismétlési oldalt hoz létre. Egy másik kártyára `[[double brackets]]` formában, dupla szögletes zárójellel hivatkozhatsz; a Mochi automatikusan visszahivatkozást készít. A hivatalos [kártyaáttekintés](https://mochi.cards/docs/cards/) olyan sablonokat is dokumentál, amelyek helyőrzői strukturált mezőértékeket jelenítenek meg.

A kártyák két feladatot is elláthatnak anélkül, hogy külön rendszerekbe kerülnének:

- az ismétlőkártya oldalakat használ, és bekerül az időközönkénti ismétlésbe;
- a referenciaként használt jegyzet ugyanabban a pakliban maradhat, és archiválható: ezzel kikerül az új és az esedékes kártyák sorából, de a tartalma, címkéi, hivatkozásai és előzményei nem törlődnek.

A [paklinézetek](https://mochi.cards/docs/decks/custom-views/) szűrők, rendezési szabályok és elrendezések mentett kombinációi. A szokásos böngészéshez megtarthatsz egy rácsnézetet, majd létrehozhatsz egy másikat egy címkéhez, az esedékességhez, az alacsony felidézési arányhoz vagy a legutóbbi ismétléshez. A Mochiban egy nézetből intenzív gyakorlást is indíthatsz anélkül, hogy megváltoztatnád a normál ütemezést vagy az ismétlési előzményeket. Ez konkrétabb annál, hogy a felületet „letisztultnak” nevezzük: ugyanaz a pakli jegyzetfüzetként, szűrt adatbázisként és ismétlésre váró kártyák soraként is működhet.

A [napi ismétlésnek](https://mochi.cards/docs/getting-started/reviewing-cards/) két szakasza van. A **New cards (új kártyák)** szakaszban vagy hozzáadod a kártyát az ismétlési ütemezéshez, vagy az Again (újra) lehetőséget választod, hogy hamarosan ismét lásd. Ha már megtanultad, az esedékes kártya megmutatja a következő oldalt, majd a **Forgot (elfelejtettem)** és a **Remembered (emlékeztem)** közül kell választanod. Ha elfelejted, a Mochi előbb egy újraismétlési sorba teszi, és csak utána nullázza a haladást. Így ismétléskor szándékosan kevés lehetőség közül kell döntened.

## Ingyenes a Mochi, és mi működik offline?

Igen, de az „ingyenes” és az „offline” mást jelent attól függően, hol használod. A [Mochi ellenőrzéskor érvényes árai](https://mochi.cards/) a következők:

- **Ingyenes:** örökre 0 USD, regisztráció nélkül, korlátlan offline használattal.
- **Pro:** havi 5 USD; eszközök közötti szinkronizálást, paklik közzétételét, dinamikus mezőket, MI-integrációt és e-mailes támogatást ad hozzá.

A Mochi macOS-en, Windowson, Linuxon, iOS-en, Androidon és a weben is működik. A [letöltési és telepítési útmutató](https://mochi.cards/docs/getting-started/download-and-install/) így határolja el a használati módokat:

| Felület | Mit jelent az ingyenes és offline használat? |
|---|---|
| Telepített asztali vagy mobilalkalmazás | A Mochit fiók nélkül is használhatod offline. Az adatokat az eszköz tárolja, így egyetlen telepített alkalmazással teljes, ingyenes munkafolyamatod lehet. |
| Webalkalmazás Pro nélkül | A tartalom a böngésző offline tárhelyén marad. A Mochi figyelmeztet, hogy a böngésző előzetes jelzés nélkül törölheti ezeket az adatokat. |
| Ugyanaz a gyűjtemény több eszközön | Az automatikus, eszközök közötti szinkronizálás Pro funkció, még akkor is, ha mindegyik telepített alkalmazás működik offline. |

Az offline használat és a szinkronizálás két külön szolgáltatás. Nem kell Pro ahhoz, hogy egy letöltött alkalmazásban kártyát készíts vagy ismételj. Akkor kell, ha azt szeretnéd, hogy a laptopodon és a telefonodon automatikusan ugyanaz a naprakész gyűjtemény legyen elérhető. Az ingyenes csomagban tárolt fontos adatokról tarts natív biztonsági mentést; ne az eszközön lévő példány legyen az egyetlen, különösen ne a böngésző tárhelyén tárolt változat.

Ha az offline működés dönt, hasonlítsd össze a konkrét eszközhasználatot a [Működik az Anki offline?](/blog/does-anki-work-offline/) című cikk és az átfogóbb [útmutató az offline tanulókártya-alkalmazásokhoz](/blog/best-offline-flashcards-app/) alapján.

## A Markdown-tanulókártyák miatt érdemes igazán a Mochit választani

A Mochi valódi előnye az, hogy a Markdown más formát ad a rendszeresen szerkesztett tananyagodnak.

Egy Mochi-kártya szövegként is olvasható marad. Ugyanaz a dokumentum tartalmazhat rövid magyarázatot, kódblokkot, kapcsolódó gondolatokra mutató hivatkozásokat és az ismétlési oldalak közötti elválasztójeleket. A kártyák mezőket és sablonokat is használhatnak, ha fontos az ismétlődő szerkezet. Sablon alkalmazásakor a Mochi a sablon Markdownját jeleníti meg, a helyőrzők helyére beillesztve a mezők értékeit; a kártya saját Markdownját ilyenkor figyelmen kívül hagyja, de nem törli.

Az Anki más modellből indul ki. A jegyzet mezőket tárol, a [kártyasablonok](https://docs.ankiweb.net/templates/intro.html) pedig meghatározzák, mely mezők jelenjenek meg, és milyen kártyák készüljenek. A sablonok HTML-t használnak, a formázáshoz CSS-t. Így egyetlen szókincsjegyzet felismerést és önálló felidézést gyakorló kártyákat is generálhat, miközben az alapadatok egy helyen maradnak.

Ez a szerkezet több lehetőséget ad az Ankiban a feltételes elrendezésekre, a generált kártyaváltozatokra, a begépelt válaszokra, az egyéni formázásra és a bővítményekkel kiegészített munkafolyamatokra. Ugyanakkor az Anki nem natív Markdown-tanulókártya-alkalmazás. A Markdown-alapú Anki-munkafolyamathoz külön átalakítási vagy bővítményréteg kell.

A gyakorlati kérdés egyszerű: olyan jegyzetet szeretnél, amelyből kártya lehet, vagy olyan strukturált jegyzettípust, amely több kártyát generálhat? A Mochi az elsőre épít. Az Anki a másodikra.

## A Mochi időközönkénti ismétlése már az FSRS-t is támogatja

Elavultak azok az összehasonlítások, amelyek szerint a Mochiban nincs FSRS. A Mochi 2025-ben vezette be az FSRS előzetes változatát, és azóta is adott ki javításokat az ütemezőhöz. Ettől még [továbbra is a Mochi saját algoritmusa az alapértelmezett](https://mochi.cards/docs/reviewing/fsrs/).

Az alapértelmezett algoritmus rögzített szorzókkal módosítja az időközöket minden sikeres vagy sikertelen felidézés után. Az ismétlési beállításoknál, a Review Settings alatt FSRS-re válthatsz, és a már megtanult kártyák az előzményeik elvesztése nélkül átkerülnek az FSRS alá. Beállíthatod a kívánt felidézési arányt, megadhatsz egyéni paramétereket, és később vissza is válthatsz.

A Mochi mindkét ütemezővel megtartja a kétértékű értékelést:

- A **Forgot (elfelejtettem)** az FSRS Again (újra) értékelésének felel meg.
- A **Remembered (emlékeztem)** az FSRS Good (jó) értékelésének felel meg.

A Mochi dokumentációja szerint a kétértékű értékelés működik az FSRS-sel, bár így elvész a Hard (nehéz) és az Easy (könnyű) által nyújtott információ egy része. Optimalizált egyéni paramétereket fogad, de nincs beépített optimalizálója; személyes paraméterek előállításához külső FSRS-optimalizáló és a Mochi ismétlési előzményei szükségesek.

[Az Anki FSRS-beállításai](https://docs.ankiweb.net/deck-options.html#fsrs) ennél többet tudnak. A kívánt felidézési arány és a paraméterek beállításkészletekhez rendelhetők, a beépített optimalizáló az ismétlési előzményekhez igazíthatja a paramétereket, a szimulátor pedig megbecsüli az ismétlések számát vagy a tanulásra fordítandó percek számát különböző beállítások mellett. Az Anki négy kimenetelt rögzít: Again (újra), Hard (nehéz), Good (jó) és Easy (könnyű).

A plusz gombok csak akkor segítenek, ha következetesen használod őket. Az Anki kézikönyve a Hard értékelést sikeres felidézésnek tekinti. Ha elfelejtetted a választ, de a Hard gombot nyomod meg, téves jelzést adsz az FSRS-nek, ami túl hosszú időközökhöz vezethet.

Válaszd a Mochi kétértékű ismétlését, ha a sikerült/nem sikerült döntés átláthatóbbá teszi a gyakorlást. Válaszd az Ankit, ha szükséged van a részletesebb értékelési adatokra, és használni fogod az optimalizálóját, a felidézési arány beállításait, a beállításkészleteket vagy a terhelésszimulátort. Ha az alkalmazások helyett az ütemezők érdekelnek, olvasd el az [FSRS és SM-2 összehasonlítását](/blog/fsrs-vs-sm-2/).

## A Mochinál és az Ankinál másért fizetsz

Egyetlen asztali gépen mindkét alkalmazással ingyen tanulhatsz. Ha több eszköz is része a munkafolyamatnak, a költség máshol jelenik meg.

A Mochi **havi 5 USD-t** kér a Pro szinkronizálásért, amelyhez közzététel, dinamikus mezők, MI-integráció és támogatás is jár. Az Anki asztali alkalmazásai ingyenesek, és a [hivatalos Anki-oldal](https://apps.ankiweb.net/) az AnkiWeb-szinkronizálást is ingyenesként írja le. Az AnkiMobile a fizetős hivatalos iPhone- és iPad-alkalmazás; az AnkiDroid ingyenes, függetlenül fejlesztett Android-kliens.

A „Melyik olcsóbb?” kérdés tehát az eszközeidtől függ:

- egy számítógépen mindkettő ingyenes lehet;
- több asztali gépen vagy Android-eszközön az Anki ingyenes, a szolgáltató által üzemeltetett szinkronizálásával elkerülhető az előfizetés;
- iPhone-on vagy iPaden az Anki egyszeri alkalmazásvásárlást igényel, míg a Mochiban az eszközök közötti szinkronizáláshoz rendszeresen fizetendő Pro csomag kell;
- aki a Mochiban egyébként is szeretne közzétételt, dinamikus mezőket vagy MI-integrációt, annak a szinkronizálás a csomag egyik része lehet, nem a teljes költség oka.

A pontos iOS-költségek összevetése előtt nézd meg a saját régiód App Store-ját. Ez az értékelés nem rögzít egy olyan alkalmazásbolti árat, amely piaconként eltérhet.

## A Mochi saját üzemeltetése nem ugyanaz, mint a helyi adatokra épülő használat

Három fogalmat gyakran összemosnak:

- A **helyi adatokra épülő működés (local-first)** azt jelenti, hogy a munkapéldány az eszközödön van, és az alkalmazás a felhőszolgáltatása nélkül is tovább használható.
- A **nyílt forráskód** azt jelenti, hogy a forráskód megtekintést és módosítást engedő licenc alatt elérhető.
- A **saját üzemeltetés** azt jelenti, hogy a termék dokumentált, támogatott módot kínál az adott szolgáltatás saját infrastruktúrán történő futtatására.

A Mochi egyértelműen dokumentálja a helyi adatokra épülő működését. Az alapalkalmazást nem nyílt forráskódúként mutatja be: a nyilvános weboldal láblécében az „Open source” hivatkozás [integrációk gyűjteményére](https://github.com/mochi-cards/open-source) vezet, nem az alapalkalmazáshoz. A hivatalos oldal a Pro szinkronizálás támogatott, saját üzemeltetésű helyettesítőjét sem dokumentálja.

Ha azért keresel rá a **Mochi saját üzemeltetésére**, mert saját szervert szeretnél, itt húzódik a határ: tarthatsz helyi adatokat és natív biztonsági mentéseket, de az eszközök közötti használat dokumentált útja a Mochi Pro. A helyi adatokra épülő működés hasznos kontrollt ad az adatok felett; ettől még nem saját üzemeltetés.

Az Anki fő kódtára [AGPL 3-as vagy újabb verziójú licenc alatt érhető el](https://github.com/ankitects/anki/blob/main/LICENSE), egyes komponenseknél felsorolt kivételekkel. A hivatalos kézikönyv haladó felhasználóknak egy [saját üzemeltetésű szinkronszervert](https://docs.ankiweb.net/sync-server.html) is dokumentál. Ez a szerver az AnkiWeb-szinkronizálást helyettesíti a kompatibilis kliensek számára; nem az AnkiWeb weboldal saját szerveren futó másolata. Az Anki elvárja az üzemeltetőtől, hogy kezelni tudja a parancssori, hálózati, tűzfal-, protokoll- és frissítési problémákat.

## Mit őriz meg az Anki-import, és mit változtat meg?

A Mochi [importálási dokumentációja](https://mochi.cards/docs/import-and-export/importing/) szerint az Anki `.apkg`-fájljai az ismétlési előzményekkel együtt beolvashatók. De az „importált” és az „egyenértékű” nem ugyanaz az eredmény.

Importáláskor a Mochi a HTML-t Markdownná alakítja, a CSS-t és a JavaScriptet pedig eltávolítja. Ez két eltérő kártyamodell közötti formátumátalakítás. Az egyszerű előlap–hátlap tartalom a legkönnyebb eset. Ha egy kártya formázásra, sablonlogikára, válaszok begépelésére vagy JavaScriptre épül, importálás után ellenőrizni kell.

Az ismétlési előzményekhez is külön exportálási beállítás szükséges. Az Anki [exportálási kézikönyve](https://docs.ankiweb.net/exporting.html) szerint az **Include Scheduling Information (ütemezési információk hozzáadása)** szabályozza, hogy bekerülnek-e az ismétlési előzmények a csomagba. Ha kikapcsolva hagyod, a Mochi nem tudja visszaállítani azt az előzményt, amelyet az `.apkg` soha nem tartalmazott.

Akkor se számíts azonos jövőbeli esedékességekre, ha az előzmények átkerülnek. A két alkalmazás eltérő ütemezőt, értékeléseket, kívánt felidézési arányt, paramétereket, tanulási lépéseket és paklibeállításokat használhat. A megőrzött ismétlési események támpontot adnak az új ütemezőnek; nem teszik azonossá a két rendszert.

## A natív mentés és a hordozható szöveg más feladatra való

Mielőtt bármit átköltöztetsz, készíts olyan biztonsági mentést, amelyből visszaállítható az eredeti rendszer. Az olvasható export hasznos, de nem mindig alkalmas visszaállításra.

A Mochi [biztonsági mentési útmutatója](https://mochi.cards/docs/getting-started/backing-up/) két natív megoldást dokumentál:

- A teljes felhasználói könyvtár másolása megőrzi a tartalmat, az ismétlési előzményeket, a mellékleteket, az alkalmazás beállításait és a bejelentkezési állapotot.
- A `.mochi`-export megőrzi a paklikat, kártyákat, sablonokat és mezőket, mellékleteket, címkéket és metaadatokat, ismétlési előzményeket, a kártyák sorrendjét és a pakliszerkezetet.

A Mochi [Markdown- és CSV-exportja](https://mochi.cards/docs/import-and-export/exporting/) hordozhatóságra való. A Markdown kártyánként egy fájlt készít, az alpaklikhoz pedig mappákat, de elhagyja az ismétlési előzményeket, a kártyák sorrendjét, a sablonokat és a metaadatként tárolt címkéket; a címkék csak akkor maradnak meg, ha a Markdownban szerepelnek. A CSV sablonmezőket vagy a megjelenített előlapot és hátlapot tudja exportálni, de nem őrzi meg az ismétlési előzményeket, a sablonokat vagy a metaadatként tárolt címkéket, hacsak a címkék nincsenek beágyazva a tartalomba.

Az Anki hasonló különbséget tesz:

- A `.colpkg` az egész gyűjteményt exportálja az ütemezéssel, és médiát is tartalmazhat. Importálása lecseréli a célként használt Anki-gyűjtemény kártyáit.
- Az `.apkg` egy paklit és annak alpaklijait exportálja; választható az ütemezési információk, a beállításkészletek és a média hozzáadása.
- Az egyszerű szöveges jegyzetek tabulátorral elválasztott mezőket használnak, beágyazott HTML-formázással. A szerkeszthető tartalmat őrzik meg, nem a gyűjtemény teljes működését.

A Mochiból az Ankiba való visszaköltözés általában CSV-t jelent. Az Anki [a szöveg oszlopait jegyzetmezőkhöz tudja rendelni](https://docs.ankiweb.net/importing/text-files.html), de ettől a fájltól a Mochi hivatkozásai, többoldalas működése, sablonjai és ismétlési előzményei nem válnak egyenértékű Anki-objektumokká. Akkor is tartsd meg a `.mochi`-exportot, ha az Ankiban lévő másolat már helyesnek látszik.

## Végezz visszafordítható próbát egy reprezentatív paklival

Az importálási párbeszédablak csak azt bizonyítja, hogy az alkalmazás elfogadta a fájlt. Azt nem, hogy a valódi gyűjteményed továbbra is működik, vagy hogy használható tartalmat tudsz visszahozni belőle. Mindkét irányt teszteld úgy, hogy a szokásos Anki-profilod érintetlen maradjon.

1. **Készíts teljes Anki-mentést.** Exportálj egy `.colpkg`-t a médiával együtt, és tárold a használt profilon kívül.
2. **Bizonyosodj meg róla, hogy a mentés megnyitható.** Hozz létre egy üres, ideiglenes Anki-profilt, és oda importáld a `.colpkg`-t. A gyűjteménycsomag importálása lecseréli a célgyűjteményt, ezért fontos az ideiglenes profil.
3. **Állíts össze reprezentatív paklit ebben az ideiglenes profilban.** Legyen elég kicsi ahhoz, hogy kártyánként átnézhesd, de tartalmazza azokat a funkciókat, amelyekre támaszkodsz: alap- és fordított kártyákat, szövegkiegészítést, egyéni sablonokat, CSS-t, JavaScriptet, képeket, hangot, egyenleteket, címkéket, egymásba ágyazott paklikat és ismétlési előzményeket.
4. **Exportáld a paklit `.apkg`-ként.** Add hozzá az ütemezési információkat, a beállításkészleteket és a médiát, ha szükséged van rájuk. Ezekkel az opciókkal az adatok bekerülnek az Anki-csomagba; azt nem ígérik, hogy a Mochi minden beállítást visszaad.
5. **Importáld egy új Mochi-pakliba.** A mindennap használt Anki-profilodat és az esedékes kártyáinak sorát hagyd változatlanul.
6. **Ismétlés előtt ellenőrizd.** Hasonlítsd össze a tartalmat, a formázást, a mezőket, a médiát, a címkéket, a pakliszerkezetet és az előzményeket. Külön figyelj mindenre, ami HTML-re, CSS-re, JavaScriptre vagy generált kártyaváltozatokra épült.
7. **Tudatosan válassz ütemezőt.** A Mochi a saját algoritmusával indul. Csak akkor kapcsold be az FSRS-t, ha a próba után is azt szeretnéd használni.
8. **Egy átlagos héten át ismételj a másolattal.** Értékeld a Markdown-szerkesztés menetét, az új kártyák tanulási szakaszát, az Emlékeztem/Elfelejtettem döntést, az offline működést és — ha előfizettél rá — a szinkronizálást azokon az eszközökön, amelyeket valóban magaddal hordasz.
9. **Teszteld a visszautat.** Exportáld a Mochi-próbapaklit `.mochi`-ként natív mentéshez, és CSV-ként az Ankihoz. A mezőértékeket tartalmazó CSV-t használd, ha az újrahasználható mezők fontosak; a megjelenített oldalakat tartalmazót, ha főleg a látható előlap–hátlap tartalomra van szükséged. Importáld ezt a CSV-t egy másik üres Anki-profilba, és rendeld az oszlopait egy megfelelő jegyzettípus mezőihez.
10. **Írj le minden elfogadott veszteséget.** Külön ellenőrizd az oda- és a visszautat. A pontos formázás, a többoldalas működés, a bővítményfunkciók, a generált változatok, az ismétlési értékelések, az előzmények vagy a jövőbeli esedékességek fontosabbak lehetnek a napi használatban, mint az összehasonlító táblázatban tűntek.

A CSV-s visszaút tartalomköltözés, nem teljes Mochi-visszaállítás: nem viszi át az ismétlési előzményeket, a sablonokat vagy a metaadatként tárolt címkéket, hacsak a címkék nincsenek beágyazva a tartalomba. Ha a Mochi nem oldja meg a megnevezett problémát, töröld a próbapaklit, és folytasd az eredeti Anki-profillal. Ha megoldja, egyszerre egy valódi paklit költöztess át, és több szokásos ismétlési cikluson át tartsd meg az Anki `.colpkg`- és a Mochi `.mochi`-mentéseit.

## Kinek valók a Mochi tanulókártyái?

A Mochi jó választás, ha:

- már most is Markdownban írsz és gondolkodsz;
- a jegyzeteidet és az ismétlőkártyáidat ugyanabban az összekapcsolt munkatérben szeretnéd tartani;
- négy értékelés helyett az egyszerű Emlékeztem/Elfelejtettem döntést szeretnéd;
- egy eszköz offline használata lefedi az ingyenes munkafolyamatodat, vagy a Pro szinkronizálás megér havi 5 USD-t;
- új a gyűjteményed, vagy elég egyszerű ahhoz, hogy az Ankiról való átalakítás kis kockázattal járjon.

Maradj az Ankinál, ha:

- a jegyzettípusaid több fontos kártyaváltozatot generálnak;
- a HTML/CSS-sablonok, a JavaScript, a bővítmények vagy a megosztott paklik a rendszered részei;
- az ingyenes, eszközök közötti szinkronizálás fontosabb a Markdown-szerkesztésnél;
- szükséged van az Anki FSRS-optimalizálójára, a beállításkészletek kezelésére, a négy értékelésre és a terhelésszimulátorra;
- a többévnyi ismétlési adat és a testreszabott működés már bevált a tanulásban.

Az, hogy melyik Mochi-alternatíva a legészszerűbb, attól függ, miért nem felel meg neked sem a Mochi, sem az Anki. Egy új, egyszerűbb gyűjteményhez a [Nibomo funkciói](/hu/features/) között szerepel az FSRS-alapú ismétlés, az offline tanulás és szinkronizálás, a kártyák, címkék és média hordozható átvitele, az MI-ágensek hozzáférése és a dokumentált saját üzemeltetés. Én fejlesztem, és a korlátai itt lényegesek: nem helyettesíti a Mochi összekapcsolt Markdown-jegyzetfüzetét, sem az Anki kiforrott sablon- és bővítményrendszerét. Az [első lépések útmutatója](/docs/getting-started/) bemutatja a szolgáltatásként elérhető, a mobilos, az MI-ágenseken keresztüli és a saját üzemeltetésű használat jelenlegi lehetőségeit.

## Mire alapozd a döntést?

A Mochi több egy szebb Anki-felületnél. Az alapötlete az, hogy egy Markdown-jegyzet, egy más jegyzetekhez kapcsolt tudáselem és egy időközönkénti ismétléshez használt kártya ugyanaz az objektum lehet. Az ingyenes csomag lefedi a fiók nélküli, offline munkát; a Pro ehhez a szolgáltató által üzemeltetett funkciókat ad, köztük az eszközök közötti szinkronizálást.

Ez jó kompromisszum annak, aki új, Markdown-központú gyűjteményt kezd. Az Ankiról is megérheti váltani, ha a reprezentatív paklival végzett próba igazolja, hogy a natív Markdown és a kétértékű ismétlés valóban könnyebbé teszi a használatot.

Egy régi Anki-felhasználónál viszont a váltás előnyét kell bizonyítani. Mentsd el a gyűjteményt, teszteld a legtöbb egyéni működést tartalmazó kártyákat, és tartsd meg az Ankit, hacsak a Mochi nem javít annyit a hétről hétre végzett munkán, hogy az megérje a feladott formázási, sablon-, ütemezési és ökoszisztéma-funkciókat.
