---
title: "Az Anki legjobb FSRS-beállításai 2026-ban: felidézési cél, lépések és ismétlési terhelés"
description: "Biztonságos FSRS-beállítások az Anki 26.08-ban: kívánt felidézési arány, tanulási lépések, optimalizálás, újraütemezés és terhelés az FSRS-6-tal."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS beállítások"
  - "legjobb FSRS beállítások"
  - "Anki FSRS beállítások"
  - "FSRS kívánt felidézési arány"
  - "FSRS tanulási lépések"
  - "FSRS szimulátor"
  - "FSRS paraméterek optimalizálása"
  - "FSRS-6"
---

Apró változtatásnak tűnik, ha az Ankiban 90%-ról 95%-ra emeled a kívánt felidézési arányt. Ez azonban nem csupán öt százalékkal több munkát jelent. Ahogy emelkedik a célérték, az FSRS-nek rövidítenie kell az ismétlések közötti időt, és egy régóta használt gyűjteményben jóval több ismétlés gyűlhet össze. Ha a **Reschedule cards on change** beállítást is bekapcsolod, ennek egy része azonnal esedékessé válhat.

A jó FSRS-beállításokat ezért nem egy bemásolható paramétersor jelenti. Egymásra épülő döntésekre van szükség: határozd meg, mennyi munkát tudsz tartósan vállalni, válassz ehhez illő felidézési célt, illeszd a modellt a saját ismétlési előzményeidhez, és hagyd meg a meglévő esedékességeket, hacsak nem szándékosan akarod újraszámolni őket.

Az alábbi elnevezések és működésleírások az [Anki 26.08-as kiadásának](https://github.com/ankitects/anki/releases/tag/26.08) FSRS-6-beállításaira vonatkoznak. Ha előbb magát a modellt szeretnéd megérteni, olvasd el a [Mi az FSRS?](/blog/what-is-fsrs/) című cikket. Ha még az ütemezők között választasz, kezdd az [FSRS és az SM-2 összehasonlításával](/blog/fsrs-vs-sm-2/).

> **A szerző érintettsége:** Kirill Markin vagyok, a [Nibomo](/hu/features/) fejlesztője. Az Anki személyre szabott paraméterillesztést és kísérleti terhelésszimulátorokat is kínál; ezek jelenleg nem érhetők el a Nibomóban. A cikk végi összehasonlítás ezeket a különbségeket is egyértelműen bemutatja.

**A tények ellenőrzésének dátuma:** 2026. szeptember 8.

![Egy zsilipkezelő méretarányos modellen teszteli a víz áramlását, mielőtt módosítaná a teljes méretű zsilipet](/blog/fsrs-settings-v2.png)

## Röviden: innen érdemes indulni

A legtöbb Anki-felhasználónak ezek biztonságos kiindulópontok, nem mindenkire érvényes beállítások:

| Beállítás vagy szokás | Biztonságos kiindulópont | Miért? |
| --- | --- | --- |
| Kívánt felidézési arány | `0.90` | Ez az Anki alapértéke, amely egyensúlyt teremt a felidézés és az ismétlési terhelés között. |
| FSRS-paraméterek | Használd az **Optimize Current Preset** lehetőséget; ne másolj be és ne szerkessz kézzel súlyokat | Az optimalizáló az ismétlési előzményeidhez illeszti a modellt. |
| Optimalizálás gyakorisága | Legfeljebb havonta; általában néhány havonta is elég | Az Anki nem javasolja a gyakori optimalizálást. |
| Tanulási lépések | Kevés, még aznap befejezhető lépést tarts meg | A hosszú lépéssorok késleltetik a modellalapú ütemezést. |
| Újratanulási lépések | Legyen belőlük kevés, és mindegyik legyen egy napnál rövidebb | Ugyanez a korlát érvényes akkor is, ha ismétléskor nem sikerült felidézned a választ. |
| Kártyák újraütemezése változtatáskor (Reschedule cards on change) | Kikapcsolva | Az új beállítások a későbbi ismétlések során is életbe léphetnek a mai ismétlési sor újraszámolása nélkül. |
| Maximális intervallum | Tartsd meg a 100 éves alapértéket | Az alacsonyabb felső határ gyakrabban hozza vissza a már jól megtanult kártyákat. |
| Új kártyák naponta | A tartósan vállalható terheléshez igazítsd | Minden új kártya most tanulási, később ismétlési feladatot jelent. |
| Again vagy Hard | Az Again sikertelen felidézést, a Hard nehéz, de sikeres felidézést jelent | A hibás értékelésekből a modell hibás előzményeket kap. |

Ha az ismétlések kezelhetők, és a beállításaid már közel állnak ehhez, lehet, hogy nincs mit javítani. A beállítások karbantartása nem tanulás.

## Három külön döntést hozz

A kívánt felidézési arányt, az FSRS-paramétereket és a napi terhelést gyakran egyetlen dologként kezelik. Pedig mást szabályoznak:

- **A kívánt felidézési arány** a felidézési célod. Ezt a céljaid és a tanulásra szánt idő alapján választod meg.
- **Az FSRS-paraméterek** az ismétlési előzményekhez illesztik a memóriamodellt. Az Anki optimalizálója számítja ki őket.
- **Az új kártyák és az ismétlések korlátai** azt szabályozzák, mennyi új anyag kerül a rendszerbe, és mennyi esedékes feladatot mutathat az Anki naponta.

Ha ezeket külön kezeled, sokkal könnyebb megtalálni a problémák okát. A hosszú ismétlési sor nem feltétlenül jelent rossz paramétereket. Attól, hogy egy pakli anyagának ismeretén sok múlik, még nem feltétlenül kell hozzá külön beállításkészlet. A kívánt felidézési arány csökkentése pedig nem teszi fenntarthatóvá az eleve túl sok új kártyát.

## A terhelésből indulj ki, amikor felidézési célt választasz

A kívánt felidézési arány azt mondja meg az FSRS-nek, hogy mekkora valószínűséggel szeretnéd felidézni a választ, amikor a kártya ismét esedékessé válik. `0.90` esetén az FSRS úgy ütemez, hogy a becsült felidézési esély nagyjából 90% legyen. Ez a modell célértéke, nem garancia arra, hogy minden tanulási alkalommal vagy vizsgán pontosan a válaszok 90%-a lesz helyes.

Mindkét irányú változtatásnak ára van:

- Ha emeled a kívánt felidézési arányt, rövidülnek az intervallumok, és több lesz az ismétlés.
- Ha csökkented, hosszabbak lesznek az intervallumok, és gyakoribbá válnak a sikertelen felidézések.
- Ha túl alacsonyra állítod, a sikertelen felidézések utáni többlet-újratanulás elviheti a remélt időmegtakarítás egy részét.

Az Anki alapértéke 90%. A [kívánt felidézési arányról szóló útmutatója](https://docs.ankiweb.net/deck-options.html#desired-retention) figyelmeztet, hogy a terhelés gyorsan nő, ahogy a cél közelít a 100%-hoz, és azt javasolja, hogy maradj 97% alatt. A [megfelelő felidézési arány hivatalos magyarázata](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) a görbe másik végét is bemutatja: a nagyon alacsony arány is ronthatja a tanulás hatékonyságát, mert az elfelejtett kártyák több munkát igényelnek.

Indulj `0.90`-ről, és csak a terhelés ellenőrzése után változtass. Magasabb célértéknek olyan anyagnál lehet értelme, amelynél a felejtésnek valódi ára van. Alacsonyabb célérték akkor lehet indokolt, ha az ismétlések értékesebb tanulástól veszik el az időt. Egyik változtatás sem javítja meg a homályosan megfogalmazott kártyákat, az őszintétlen értékeléseket vagy a túl sok új kártyát.

### A pakli felidézési célja és a beállításkészlet paraméterei külön állíthatók

Az Anki 26.08-ban a **Desired retention** célértékét a közös beállításkészletre (**Shared Preset**) vagy csak az adott paklira (**This deck**) is megadhatod. Így a kapcsolódó paklik ugyanazt a paraméterkészletet használhatják, miközben egy adott paklinak saját felidézési célt adhatsz.

A pakliszintű felülírást akkor használd, ha eltér a felejtés ára. Egy szakmai jogosultság megszerzéséhez szükséges vizsga paklija indokolhat magasabb célt, mint egy kevésbé fontos referenciaanyag, akkor is, ha mindkettő ugyanazt az illesztett modellt használja.

Az FSRS-paraméterek nem válnak paklispecifikussá attól, hogy a **This deck** lehetőséget választod. Az Anki alapértelmezés szerint az aktuális beállításkészlethez rendelt összes pakli ismétlési előzményeiből illeszti a paramétereket. Ha a paklicsoportokat nagyon eltérő nehézségűnek érzed, rendelj hozzájuk külön beállításkészleteket: így mindegyik csoporthoz külön illesztheted a modellt.

## Más kérdésre ad választ a Help Me Decide és a Simulator

Az Anki 26.08 két külön kísérleti eszközt kínál:

- A **Help Me Decide (Experimental)** személyre szabott görbén mutatja meg a felidézési arány és a terhelés kapcsolatát. Arra adhat választ, hogy milyen cél fér bele a tartósan vállalható ismétlésszámba vagy tanulási időbe.
- Az **FSRS Simulator (Experimental)** megbecsüli, hogyan alakulhat a tanulás a választott beállításokkal. A felidézési arány, az új kártyák mennyisége, az ismétlési korlátok és a maximális intervallum változtatásait hasonlíthatod össze vele.

Az [FSRS Simulator dokumentációja](https://docs.ankiweb.net/deck-options.html#the-simulator) felsorolja a fő bemeneteit:

- a szimulálandó napok száma
- a szimulációban hozzáadandó új kártyák száma
- az új kártyák napi száma
- az ismétlések napi maximuma
- a maximális intervallum
- a kívánt felidézési arány és a beállításkészlet FSRS-paraméterei

A szimuláció a beállításkészlethez tartozó kártyák tényleges memóriaállapotát is felhasználja. Ezért egy régóta használt gyűjteménynél hasznosabb, mint a mai esedékes kártyák számát megszorozni valamilyen általános százalékos értékkel.

Mielőtt az éles beállításokon változtatnál, futtass három forgatókönyvet:

1. A jelenlegi felidézési cél és az új kártyák jelenlegi üteme.
2. A tervezett felidézési cél.
3. Ugyanez a cél kevesebb új kártyával naponta.

A harmadik futtatás egy gyakori alternatívát vizsgál: tartsd meg a felidézési célt, és lassítsd az új anyag bevezetését. Ha ettől kezelhetővé válik a becsült terhelés, nem kell több felejtést elfogadnod pusztán azért, hogy rövidebb legyen az ismétlési sor. Erről részletesebben a [Hány új tanulókártyát érdemes tanulni naponta?](/blog/how-many-new-flashcards-per-day/) című útmutatóban olvashatsz.

Mindkét eszköz becslést ad. A kihagyott napok, az átszerkesztett kártyák, az új anyag és az értékelési szokások változása eltérítheti a tényleges terhelést a grafikontól. Az összehasonlítás segít eldönteni, merre változtass, de hónapokra előre nem tudja pontosan megjósolni az ismétlésszámot.

A régebbi útmutatók a **Compute Minimum Recommended Retention**, röviden CMRR funkciót is említhetik. Ezt az Anki a 25.07-es verzióban eltávolította. A kívánt felidézési arányt ma már nem ezzel választjuk ki.

## A saját előzményeidből optimalizáld az FSRS-paramétereket

A kívánt felidézési arány a célodat fejezi ki. Az FSRS-paraméterek azt írják le, hogyan illeszkedik a modell az ismétléseidhez.

Az Anki 26.08-ban az **Optimize Current Preset** lehetőséggel illesztheted az aktív beállításkészlet paramétereit. Alapértelmezés szerint az Anki az adott készletet használó összes pakli ismétlési előzményeit figyelembe veszi; a keresés módosításával szűkítheted az illesztéshez használt kártyák körét. Az **Optimize All Presets** egyetlen művelettel frissít minden beállításkészletet.

Ne írd be kézzel a súlyokat, és ne másold át őket a Redditről, egy videóból vagy más paklijából. Mások kártyái, ismétlési időpontjai és értékelési szokásai nem a te előzményeid. Egy szépen rendezett [FSRS-6-súlysor](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) önmagában nem olyan tanulási stratégia, amelyet másoktól átvehetsz.

Csak akkor optimalizálj újra, ha már számottevő új ismétlési előzmény gyűlt össze. Az Anki kézikönyve szerint havi egy alkalom elég, a 26.08-as alkalmazás útmutatója szerint pedig néhány havonta is elegendő. A gyakorlati következtetés ugyanaz: nincs ok hetente optimalizálni, minden tanulási alkalom után pedig végképp nem.

### Az aktuális beállításkészletnél használd az állapotellenőrzést

Kapcsold be a **Check health when optimizing (slow)** lehetőséget, ha szeretnéd, hogy az Anki felmérje, mennyire tud az FSRS alkalmazkodni az aktuális beállításkészlet előzményeihez. Az ellenőrzés az **Optimize Current Preset** futtatásakor működik; az **Optimize All Presets** nem végzi el.

Ha gyenge az eredmény, a súlyok módosítása előtt az adatokat vizsgáld meg. Az [Anki FSRS-paraméterekről szóló útmutatója](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) felsorolja a gyakori okokat: néhány száznál kevesebb ismétlés, Hard választása sikertelen felidézés után, illetve az Again mellőzése akkor, amikor nem sikerül felidézni a választ. Ha kevés a használható előzmény, tartsd meg az alapértékeket, és optimalizálj később ahelyett, hogy más felhasználó paramétereit vennéd át.

## Az Again sikertelen felidézést jelent; a Hard sikereset

Ez a szokás legalább annyit számít, mint bármelyik beállítás.

Válaszd az **Again** gombot, ha nem tudtad felidézni a szükséges választ, vagy rosszul válaszoltál. A **Hard** csak akkor helyes, ha jól idézted fel, de komoly erőfeszítéssel vagy bizonytalankodva. A Good és az Easy szintén sikeres felidézést jelent.

Ha azért választod a Hard gombot, hogy elkerüld az Again rövid intervallumát, sikerként rögzítesz egy sikertelen felidézést. Az FSRS ezután téves eseményből tanul. Aszerint válassz gombot, hogy hogyan sikerült felidézned a választ, ne a gombok fölött látható intervallum alapján.

A kétértelmű kártyák megnehezítik az őszinte értékelést. Ha a kártya öt tény felidézését kéri, de csak négyre emlékszel, az ütemezési probléma már a szerkesztőben elkezdődött. Bontsd fel vagy fogalmazd át a kártyát. Ha egy kártya sok ismétlés ellenére is rendszeresen kifog rajtad, olvasd el a [Makacsul nehéz tanulókártyák javítása](/blog/how-to-fix-leech-flashcards/) című útmutatót.

## Legyenek rövidek az FSRS tanulási lépései – vagy tudatosan hagyd őket üresen

A tanulási és újratanulási lépések azt szabályozzák, milyen hamar jelenjen meg újra egy kártya, mielőtt átkerül a szokásos hosszú távú ütemezésbe. Nem jelentenek újabb felidézési célt.

Az Anki FSRS-útmutatója két megkötést ajánl:

- minden lépés legyen egy napnál rövidebb, és még aznap elvégezhető
- az aznapi ismétlések száma maradjon alacsony

Az olyan hosszú sorozatok, mint az `1m 10m 1d 3d`, egy régi SM-2-szokást visznek át az FSRS-be. Az egynapos vagy hosszabb lépések késleltetik a modellalapú ütemezést, és zavaró gombfeliratokat eredményezhetnek: például a Hard hosszabb intervallumot mutathat, mint a Good.

Egy rövid sorozat, például az `1m 10m`, `10m` újratanulási lépéssel, óvatos kiindulópont, ha belefér abba az időbe, amelyet egy-egy alkalommal tanulásra szánsz. A több aznapi ismétlés nem feltétlenül jobb.

Az Anki 26.08-ban a tanulási és az újratanulási lépések mezőjét külön-külön üresen is hagyhatod. Bekapcsolt FSRS mellett az üres mező az FSRS-re bízza az adott rövid távú ütemezést. Ez kísérleti funkció, és az Again intervalluma egy nap vagy hosszabb is lehet. Ha kiszámítható, még aznapi visszatérésre van szükséged, tartsd meg a rövid kézi lépéseket; csak akkor üríts ki egy mezőt, ha tudatosan elfogadod, hogy ezt az időzítést az FSRS válassza meg.

## A fokozatos átálláshoz hagyd kikapcsolva az újraütemezést

Ha a **Reschedule cards on change** ki van kapcsolva – ez az alapértelmezés –, az FSRS bekapcsolása, a kívánt felidézési arány vagy a paraméterek módosítása nem írja át azonnal a meglévő esedékességeket. Az új konfiguráció a kártyák későbbi ismétlésekor lép életbe, így az ismétlési sor fokozatosan változik.

Ha bekapcsolt opció mellett mentesz egy ilyen FSRS-módosítást, az Anki azonnal újraszámolja az esedékességeket. Az új céltól és a kártyák állapotától függően sok kártya válhat egyszerre esedékessé. Az Anki ismétlési bejegyzéseket is hozzáad az újraütemezett kártyákhoz, ami növeli a gyűjtemény méretét.

Ennek az opciónak csak akkor van értelme, ha valóban visszamenőleg szeretnéd újraszámolni az ütemezést. Régóta használt gyűjteménynél:

1. Készíts friss biztonsági mentést, és győződj meg róla, hogy tudod, hogyan vonhatod vissza a változtatást vagy állíthatod vissza a mentést.
2. Futtasd a Simulatort a tervezett beállításokkal.
3. Egyetlen beállítást változtass meg; ne vonj össze több kísérletet.
4. Mentéskor csak akkor kapcsold be az újraütemezést, ha valóban azonnal át szeretnéd írni az esedékességeket, és belefér az eredményül kapott terhelés.

Az Anki kifejezetten javasolja a biztonsági mentést, ha SM-2-ről újraütemezéssel váltasz át. Az általánosabb [tanulókártya-mentési útmutató](/blog/how-to-back-up-flashcards/) bemutatja, miért számít legalább annyira a visszaállítás módja, mint maga a mentési fájl.

## Hagyd magas értéken a maximális intervallumot

Az Anki maximális intervalluma alapértelmezés szerint 100 év. Ez furcsán hangzik, amíg eszedbe nem jut, hogy felső határról van szó, nem arról az ígéretről, hogy minden jól megtanult kártya egy évszázadra eltűnik.

Az alacsonyabb felső határ hamarabb visszahozza a jól ismert kártyákat, és növeli a terhelést. A határnál a Hard, a Good és az Easy ugyanazt az időt mutathatja, mert egyik sem lépheti túl a maximumot.

Rövidebb maximális intervallum akkor lehet indokolt, ha egy vizsga időpontjához kell igazodnod, az anyag gyakran változik, vagy valamilyen szakmai szabály a becsült felidézési esélytől függetlenül rendszeres ismétlést ír elő. Igazítsd ezt a határt a rendelkezésre álló időhöz és a Simulator eredményéhez, ahelyett, hogy aggodalomból választanál egy alacsony számot. A [Hogyan készülj vizsgára FSRS-sel?](/blog/how-to-study-for-an-exam-with-fsrs/) című cikk ezt a szűkebb esetet tárgyalja.

Általános, hosszú távú tanuláshoz hagyd magasan a felső határt. A kívánt felidézési arány már szabályozza, mikor indokol újabb ismétlést a becsült felidézési esély.

## Az új kártyák mennyisége is része a terhelésről szóló döntésnek

Az FSRS el tudja osztani az ismétléseket; korlátlan mennyiségű új anyagot nem tud fenntarthatóvá tenni. Minden új kártya most tanulást, később ismétlést igényel.

Ha túl nagy az ismétlési teher, a kívánt felidézési arány csökkentése előtt ezeket vizsgáld meg:

- az új kártyák napi száma
- nagy importok vagy egyszerre létrehozott kártyatömegek
- olyan napi ismétlési maximum, amely folyamatosan elrejti az esedékes feladatokat
- a sok próbálkozást felemésztő, makacsul nehéz vagy homályos kártyák
- kihagyott ismétlési napok

Használd az **Additional new cards to simulate** mezőt, ha tudod, hogy a pakli bővülni fog. A kizárólag a mai gyűjteményből készült előrejelzés nem mutatja meg a nagy import utáni terhelést.

Ha a becsült terhelés túl nagy, csökkentsd az új kártyák mennyiségét, és szimulálj újra. Így megtarthatod a felidézési célt anélkül, hogy több felejtést kellene elfogadtatnod az ütemezővel.

## Az Anki és a Nibomo eltérő FSRS-beállításokat kínál

Mindkét termék FSRS-6-ot használ, de az Anki FSRS-beállításai nem feleltethetők meg egy az egyben a Nibomo beállításainak.

| Lehetőség | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Kívánt felidézési arány | **Shared Preset** vagy **This deck** | Munkaterületenként beállítható; alapértéke `0.90` |
| FSRS-paraméterek | **Optimize Current Preset** vagy **Optimize All Presets** az ismétlési előzmények alapján | A hivatalos FSRS-6-alapsúlyok rögzítettek; a v1-ben a felhasználó nem módosíthatja őket |
| Tanulási lépések | Beállíthatók; üres mezőnél az FSRS általi ütemezés kísérleti | Munkaterületenként beállíthatók; alapértékük `1m 10m` |
| Újratanulási lépések | Beállíthatók; üres mezőnél az FSRS általi ütemezés kísérleti | Munkaterületenként beállíthatók; alapértékük `10m` |
| Maximális intervallum | Alapértelmezés szerint 100 év | Alapértelmezés szerint 36 500 nap, szintén 100 év |
| Beállítások módosítása | Alapértelmezés szerint a későbbi ismétlésekre érvényes; választható visszamenőleges újraütemezés | Csak a későbbi ismétlésekre érvényes; a meglévő esedékességeket nem számolja újra |
| Terhelési eszközök | **Help Me Decide (Experimental)** és **FSRS Simulator (Experimental)** | A v1-ben nincs hasonló terhelésszimulátor |

A Nibomo a szokásos Again, Hard, Good és Easy értékeléseket használja, és kártyánként tárolja az FSRS memóriaállapotát. A backend, az iOS és az Android ütemezőjének kódja külön készül, de a működésüket összehangolják. A webes felületen végzett ismétléseket a backend ütemezője kezeli, így ehhez nem tartozik negyedik megvalósítás.

Ezeket a korlátokat és alapértékeket a nyilvános [Nibomo FSRS-ütemezési specifikáció](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) dokumentálja. A különbség világos: a Nibomo praktikus, munkaterületszintű FSRS-6-beállításokat ad, az Ankiban pedig részletesebben megadhatod, mely paklikra vonatkozzanak a beállítások, személyre szabhatod a modell illesztését, és szimulációkat futtathatsz. Ha ezekre feltétlenül szükséged van, az Anki a jobb választás.

## Biztonságosabb lépéssor egy régóta használt gyűjteményhez

Ha már több hónapnyi vagy évnyi ismétlési előzményed van, ebben a sorrendben haladj:

1. **Használd helyesen az értékelőgombokat.** Az Again sikertelen, a Hard nehéz, de sikeres felidézés.
2. **Optimalizáld az aktuális beállításkészletet.** A saját előzményeidhez illessz, ne szerkeszd és ne másold a súlyokat.
3. **Szükség esetén futtasd az állapotellenőrzést.** A kevés vagy következetlen előzményt adatproblémaként kezeld.
4. **Használd a Help Me Decide eszközt.** A vállalható ismétlésszám vagy tanulási idő alapján válassz felidézési tartományt.
5. **Futtasd a Simulatort.** Hasonlítsd össze a jelenlegi beállításokkal, a tervezett célértékkel és a kevesebb új kártyával kapott eredményeket.
6. **Egyetlen éles beállítást módosíts.** Először a felidézési célt vagy az új kártyák mennyiségét változtasd meg, majd figyeld, hogyan alakul a tényleges ismétlési sor.
7. **Legyenek rövidek a lépések.** Hagyd el az egynapos vagy hosszabb tanulási és újratanulási lépéssorokat; az üres mezőket csak kísérletként használd.
8. **Hagyd magasan a maximális intervallumot.** Csak konkrét határidő vagy követelmény miatt rövidítsd.
9. **Hagyd kikapcsolva az újraütemezést.** Ha azonnali újraszámolásra van szükséged, előbb készíts mentést, és számolj az így keletkező ismétlési teherrel.

Ezzel a sorrenddel a lehető legtovább visszafordítható marad a meglévő ütemezés módosítása. Azt is elkerülöd, hogy három külön probléma – a modell illeszkedése, a felidézési cél és az új anyag bevezetésének üteme – egyetlen beállítási fejtörővé váljon.

## Gyakori kérdések a legjobb FSRS-beállításokról

### A 90% a legjobb kívánt felidézési arány az FSRS-hez?

Ez a legbiztonságosabb általános kiindulópont, mert az Anki alapértéke, és elkerüli a magas felidézési arányhoz tartozó terhelési görbe legmeredekebb részét. Egy adott paklihoz a legjobb érték a felejtés árától és a vállalható terheléstől függ. Változtatás előtt nézd meg a **Help Me Decide (Experimental)** eszközt.

### Állítsam 95%-ra a kívánt felidézési arányt?

Csak akkor, ha már ellenőrizted a többletismétlések számát vagy a plusz tanulási időt. Egy jól megírt paklinál, amelynek ismeretén sok múlik, indokolt lehet a 95%; egy nagy, kedvtelésből tanult gyűjtemény feleslegesen megterhelővé válhat tőle. Ne kapcsold be ezzel egyidejűleg a visszamenőleges újraütemezést, hacsak nem szándékosan akarod azonnal újraszámolni az esedékességeket.

### Milyen gyakran optimalizáljam az FSRS-paramétereket?

Havonta már bőven elég, az Anki 26.08 alkalmazáson belüli útmutatója szerint pedig néhány havonta is elegendő. Akkor optimalizálj, amikor számottevő új előzmény gyűlt össze, ne napi vagy heti menetrend szerint.

### Üresen kell hagyni az FSRS tanulási lépéseit?

Az üres tanulási vagy újratanulási mezővel az Anki 26.08 az FSRS-re bízza az adott rövid távú ütemezést. A funkció kísérleti, és az Again után a kártya akár csak egy nap vagy még hosszabb idő múlva jelenhet meg újra. Néhány rövid, aznap elvégezhető lépés továbbra is az óvatosabb választás.

### Az FSRS-beállítások módosítása újraütemezi a meglévő Anki-kártyákat?

Alapértelmezés szerint nem. Kikapcsolt **Reschedule cards on change** mellett az új beállítások a későbbi ismétlésekre hatnak, és nem számolják újra azonnal az ismétlési sort. A bekapcsolás megváltoztatja az esedékességeket, és sok kártyát tehet esedékessé, ezért előbb készíts biztonsági mentést.

### A CMRR még része az Ankinak?

Nem. Az Anki a 25.07-es verzióban eltávolította a Compute Minimum Recommended Retention funkciót. Az Anki 26.08-ban a **Help Me Decide (Experimental)** és az **FSRS Simulator (Experimental)** segítségével vetheted össze a felidézési arányt a becsült terheléssel.

### Ugyanazokat a beállításokat használja a Nibomo, mint az Anki?

A Nibomo FSRS-6-ot használ, és munkaterületenként állítható benne a kívánt felidézési arány, a tanulási és újratanulási lépések, a maximális intervallum és az intervallumok kis véletlenszerű eltérése, a fuzz. Nem veszi át az Anki teljes beállítási modelljét: a súlyok a v1-ben rögzítettek, a módosítások csak a későbbi ismétlésekre hatnak, és nincs személyre szabott paraméteroptimalizálás vagy terhelésszimulátor.

## Előbb a terhelést határozd meg, utána a százalékot

A jó FSRS-beállításokkal az ismétlési sor a valódi tanulási tervedet szolgálja. Indulj 90%-ról, becsüld meg a munkát, szabályozd az új kártyák mennyiségét, és csak akkor emeld a felidézési célt, ha a jobb emlékezés megéri a több ismétlést. Legyenek rövidek a lépések, maradjon magas a maximális intervallum, az értékeléseid pedig tükrözzék őszintén a felidézést.

Aztán lépj ki a beállításokból. Az ütemezőnek nagyobb szüksége van a rendszeres ismétléseidre, mint még egy estére, amit a finomhangolásával töltesz.
