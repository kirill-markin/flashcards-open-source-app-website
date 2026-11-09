---
title: "Az új kártyák sorrendje az Ankiban – kiválasztás, rendezés és ellenőrzés"
description: "Egy hatkártyás példa mutatja meg, hogyan választja ki és rendezi az Anki az új kártyákat. Ellenőrizd az alpaklik korlátait, a kártyák pozícióját és a tanulásra kiválasztott paklit."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "új kártyák sorrendje az Ankiban"
  - "új kártyák kiválasztási sorrendje az Ankiban"
  - "új kártyák rendezési sorrendje az Ankiban"
  - "Anki növekvő pozíció szerint"
  - "Anki kártyák rossz sorrendben"
---

Az Ankiban egy 10-es pozíciójú új kártya akár egy 60-as pozíciójú után is megjelenhet. Ha egy szülőpakliból tanulsz, a kiválasztás **Pakli szerint** (Deck), a rendezés pedig **Kiválasztási sorrendben** (Order gathered) történik, az Anki befejezheti a kiválasztást egy korábbi alpakliban, mielőtt eljutna a 10-es pozíciójú kártya alpaklijához. A Böngészőben a létrehozás dátuma szerint is rendezheted a táblázatot, de ettől a tanulási sor ugyanaz marad.

Az Anki két lépésben állítja össze az új kártyák sorát. A **kiválasztás** dönti el, mely kártyák férnek bele a mai keretbe, a **rendezés** pedig meghatározza, milyen sorrendben jelennek meg. Először azt tisztázd, hogy más kártyák kerülnek-e be, mint szeretnéd, vagy a megfelelő kártyák jelennek meg váratlan sorrendben.

Ez az útmutató az asztali Anki normál paklijaira vonatkozik. A hatkártyás példa saját, papíron végigvezetett számítás, amely az aktuális kézikönyvön és a kiadott [Anki 26.09.3-as verzióján](https://github.com/ankitects/anki/releases/tag/26.09.3) alapul. Az ellenőrzés 2026. október 6-án történt, a példát pedig papíron vezettük végig, az alkalmazás kipróbálása nélkül.

![Egy férfi három lemez mellett a tartó üres rekesze fölött tartja a negyedik bakelitlemezt. Mögötte két ládában vannak a ki nem választott albumok.](/blog/anki-new-card-order.png)

## Állítsd be azt a sorrendet, amelyben tanulni szeretnél

Nyisd meg annak a paklinak a **Beállítások** (Options) menüjét, amelyikre a tanulás indításakor kattintasz, majd keresd meg a **Megjelenítési sorrend** (Display Order) részt. Ha egy szülőpakliból indítod a tanulást, annak megjelenítési beállításai az egész tanulási menetre érvényesek, az alpaklikból érkező kártyákra is.

| Kívánt eredmény | Új kártyák kiválasztási sorrendje (New Card Gather Order) | Új kártyák rendezési sorrendje (New Card Sort Order) |
| --- | --- | --- |
| Az új kártyák növekvő pozíció szerint kövessék egymást a kiválasztott pakli és alpaklijai egészében | Növekvő pozíció szerint (Ascending position) | Kiválasztási sorrendben |
| Az alpaklik ábécésorrendben kövessék egymást, az egyes alpaklikon belül pedig a pozíció döntsön | Pakli szerint | Kiválasztási sorrendben |
| Ugyanazok a kártyák kerüljenek be, de kevert sorrendben jelenjenek meg | A választott kiválasztási beállítás | Véletlenszerű (Random) |

Ezek a párosítások az Anki angol nyelvű kézikönyvében leírt [kiválasztási](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) és [rendezési](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) szabályokat követik. A **Növekvő pozíció szerint** beállítás az új kártyák tárolt pozícióját követi. A pozíciók sorrendje eltérhet a létrehozás sorrendjétől, mert a kártyák hozzáadásának sorrendje és a pozíciók kézi módosítása is alakíthatja őket.

Módosítás előtt nézd meg, melyik beállításkészletet használja a pakli, és mely más paklik használják ugyanezt. A megjelenítési sorrend a beállításkészlethez tartozik. Ha csak ennél az egy paklinál szeretnél változtatni, előbb adj neki külön beállításkészletet az [egy pakli beállításainak elkülönítéséről szóló angol nyelvű útmutató](/blog/anki-deck-options-presets/) alapján. A napi korlátokat a **Csak ennél a paklinál** (This deck) vagy a **Csak ma** (Today only) beállítással írhatod felül. A megjelenítési sorrend közös marad az azonos beállításkészletet használó paklikban.

## Számold ki, melyik négy kártya kerül be

Képzelj el egy `OrderLab` nevű normál szülőpaklit két alpaklival és összesen hat kártyával. Mindegyik kártya külön **Alap** (Basic) típusú jegyzetből származik, és minden jegyzethez egyetlen kártya tartozik. Így mind a hat kártya típusszáma azonos, és egyiknek sincs testvérkártyája.

| Kártya | Pakli | Az új kártya tárolt pozíciója |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Tegyük fel, hogy mind a hat kártya új, egyik sincs elrejtve vagy felfüggesztve, és egyik sincs szűrt pakliban. Kezdéskor nincs más kártya, így nincs sem tanulási lépésből visszatérő, sem ismétlésre váró kártya. Ma még egyetlen kártyát sem tanultál. Az `OrderLab` fölött nincs másik pakli, és az érvényes ismétlési korlátok mellett mind a hat új kártyának jutna hely.

Válaszd ki az **OrderLab** paklit tanulásra. Az új kártyákra érvényes korlátja **4**. A `01 First` korlátja **3**, a `02 Second` korlátja **2**, és nincs ideiglenes felülírás. Mindkét esetben **Kiválasztási sorrendben** legyen a rendezés. A két számítást papíron végezd el, ugyanabból a változatlan gyűjteményből kiindulva. A két eset között ne válaszolj meg kártyákat.

**Pakli szerint** az Anki így választja ki a kártyákat.

1. Ábécésorrendben előbb a `01 First` alpaklihoz ér, és csak utána a `02 Second` alpaklihoz.
2. A pozíciójuk szerint kiválasztja az **A, B, C** kártyákat. A `01 First` három kártyát adott, így a szülőpakli keretében egy hely marad.
3. Kiválasztja a **D** kártyát a `02 Second` alpakliból, és ezzel eléri a szülőpakli négykártyás korlátját.

Az új kártyák várható első megjelenési sorrendje **A → B → C → D**. Az E és az F kimarad.

A **Növekvő pozíció szerint** beállítással a két alpakli kártyái együtt ebben a sorrendben jönnek számításba: **D → A → E → B → F → C**. Az első négy minden korlátba belefér. Kettő a `02 Second`, kettő a `01 First` alpakliból érkezik, így összesen négy kártya kerül be. A kiválasztás itt megáll.

A várható sorrend **D → A → E → B**. A C és az F kimarad. A kiadott verzióban a kiválasztás során az Anki minden kártya felvételekor érvényesíti az adott pakli és a szülőpakli korlátját. [A kiválasztás forráskódja](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

A `02 Second` kétkártyás korlátja felső határ. **Pakli szerint** csak egy kártya fér be belőle, mert a `01 First` már elfoglalt hármat a négy helyből. **Növekvő pozíció szerint** az itteni pozíciók miatt jut két-két hely az alpakliknak. Másik gyűjteményben az eloszlás ettől eltérhet.

## Nézd meg, mi változik, ha mind a hat kártya befér

A második papíron végzett számításhoz adj helyet mind a hat kártyának. A szülőpakli korlátja legyen **6**, a `01 First` és a `02 Second` korlátja pedig egyaránt **3**. A rendezés maradjon **Kiválasztási sorrendben**.

| Kiválasztási beállítás | Korlátok a szülőpakli, a `01 First` és a `02 Second` sorrendjében | Várható első megjelenési sorrend |
| --- | --- | --- |
| Pakli szerint | 6 / 3 / 3 | A → B → C → D → E → F |
| Növekvő pozíció szerint | 6 / 3 / 3 | D → A → E → B → F → C |

Mindkét beállítással bekerül mind a hat kártya, így csak a sorrendjük tér el. Ha csak a szülőpakli korlátját emelnéd hatra, a `02 Second` korlátja pedig kettő maradna, öt kártya férne be. Az F továbbra is kimaradna. A magasabb keret a számításhoz kell. A példa nem javasolja a napi újkártya-keret emelését.

## A rendezés csak a bekerült kártyákon változtat

Térj vissza az eredeti **4 / 3 / 2** korlátokhoz, és csak az **Új kártyák rendezési sorrendje** beállítást állítsd át **Véletlenszerű** értékre.

| Kiválasztási beállítás | Ezeket a kártyákat keverheti meg az Anki | Ezeket a kártyákat a rendezés nem tudja hozzáadni |
| --- | --- | --- |
| Pakli szerint | A, B, C, D | E, F |
| Növekvő pozíció szerint | D, A, E, B | C, F |

A megjelenési sorrend megkeveredik, de ugyanazok a kártyák maradnak a sorban. A táblázatból konkrét véletlen sorrendet nem lehet megjósolni. Az Anki kiadott verziója a már kiválasztott kártyákat rendezi át. [A rendezés forráskódja](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

A **Kártyatípus szerint, azon belül kiválasztási sorrendben** (Card type, then order gathered) beállítás is a már kiválasztott kártyákkal dolgozik. A hat Alap típusú jegyzetből származó kártya típusszáma azonos, így ebben a példában megmarad a kiválasztási sorrendjük.

Egy külön példában nézzük meg csak a rendezést. Tegyük fel, hogy az Anki több kártyasablont használó jegyzetekből már kiválasztott négy kártyát, ebben a sorrendben: **W (2-es típus), X (1-es típus), Y (2-es típus), Z (1-es típus)**. A kártyatípus szerinti rendezés eredménye **X → Z → W → Y**. Az 1-es típus kerül előre, az egyes típusokon belül pedig megmarad a kiválasztási sorrend. Ez a példa a kiválasztás után kezdődik. Hogy mely testvérkártyák kerülnének be, azt az elrejtési beállításaid alapján külön kell megállapítani.

A típusszám azt mutatja, hányadik a kártyasablon a jegyzettípuson belül. A sablontól függ, hogy az adott kártya felismerést kér-e, vagy azt, hogy magadtól idézd fel a választ. Nézd meg a konkrét kérdéseket, mielőtt arra számítasz, hogy a típus szerinti rendezés minden eredeti irányú kérdést előre tesz.

## Módosítás előtt ellenőrizd a pozíciókat a Böngészőben

Nyisd meg a **Böngészőt** (Browse), válts **Kártyák** (Cards) módra, és keress a pakliban és az alpaklijaiban. A példában ezt írd be:

```text
deck:OrderLab is:new
```

Az oszlopfejlécek menüjében jelenítsd meg a **Kérdés** (Question), a **Kártya** (Card), a **Pakli** (Deck), az **Esedékesség** (Due) és a **Létrehozás** (Created) oszlopot. Új kártyánál az **Esedékesség** a kártya helyét mutatja a sorban, a **Létrehozás** pedig azt, hogy mikor jött létre a hozzá tartozó jegyzet. A **Rendezési mező** (Sort Field) a jegyzet rendezésre kijelölt mezőjének értékét mutatja. Ha egy oszlop szerint rendezed a Böngészőt, csak a táblázat sorrendje változik. A tárolt pozíciók és a tanuláskor használt kiválasztási beállítás megmaradnak. [A Böngésző oszlopai az Anki angol nyelvű kézikönyvében](https://docs.ankiweb.net/manual/browsing#columns)

Az `is:new` keresés felfüggesztett vagy elrejtett új kártyákat is találhat. Ezeknél az **Esedékesség** értéke zárójelben jelenik meg. A következő, szűkebb keresés ezeket és a jelenleg szűrt pakliban lévő kártyákat is kizárja:

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Az Anki angol nyelvű kézikönyve külön ismerteti a [kártyaállapot szerinti keresést](https://docs.ankiweb.net/manual/searching#card-state) és a [pakli szerinti keresést](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Ha a pakli nevében szóköz van, tedd a nevet idézőjelbe, például így: `deck:"My Deck"`. A keresés csak a szóba jövő kártyákat mutatja. A napi korlátok és a testvérkártyák automatikus elrejtése miatt a találatok egy része kimaradhat a mai sorból. [Angol nyelvű útmutatónk az elrejtés és a felfüggesztés közötti különbségről](/blog/anki-bury-vs-suspend/)

Ha a pozíciók már a kívánt sorrendet adják, hagyd őket úgy. Ha módosítani kell őket, jegyezd fel a régi pozíciókat, jelölj ki néhány konkrét új kártyát, és válaszd a **Kártyák → Pozíció módosítása** (Cards → Reposition) parancsot. Mielőtt jóváhagyod a műveletet, nézd át a párbeszédablakot. A **Meglévő kártyák pozíciójának eltolása** (Shift position of existing cards) a kijelölésen kívüli, nagyobb pozíciószámú kártyák helyét is módosíthatja. Eltolás nélkül az új pozíciók egybeeshetnek már foglalt pozíciókkal. Azonos pozíciószám esetén ebből a számból önmagában nem derül ki, melyik kártya jelenik meg előbb. [A pozíció módosítása az Anki angol nyelvű kézikönyvében](https://docs.ankiweb.net/manual/browsing#cards)

A kiválasztási vagy rendezési beállításokat a tanulási és ismétlési előzmények törlése nélkül módosíthatod. Az ellenőrzéshez az új kártyák pozíciójára és megjelenítési sorrendjére figyelj.

## Nézd meg, melyik pakliból tanulsz, és mennyi hely maradt mára

Az eredeti példában, ha közvetlenül az `OrderLab::02 Second` pakliból indítod a tanulást, csak a D, az E és az F jöhet szóba. Kétkártyás korláttal, **Növekvő pozíció szerint** kiválasztva és **Kiválasztási sorrendben** rendezve a várható sorrend **D → E**. A szülőpakli teljes, még fel nem használt négykártyás keretébe ez a két új kártya akkor is belefér, ha a fölérendelt paklik korlátai érvényesek. Ha a szülőpaklit választod **Pakli szerint** kiválasztással és **4 / 3 / 2** korláttal, a sorrend **A → B → C → D**.

Az `OrderLab` pakliból indított tanuláskor az `OrderLab` megjelenítési beállításai érvényesek. A `02 Second` saját megjelenítési sorrendje akkor számít, ha abból indítod a tanulást. A tanulásra kiválasztott pakli szabja meg a megjelenítési sorrendet és a teljes keretet. Ezen belül az alpaklikra vonatkozó korlátok is érvényesülnek. A **Korlátok alkalmazása a legfelső paklitól** (Limits start from top) kapcsoló dönti el, hogy egy alpakli közvetlen tanulásakor a fölötte lévő paklik korlátai is számítanak-e. Az angol nyelvű kézikönyvben erről az [alpaklik szabályainál](https://docs.ankiweb.net/manual/deck-options#subdecks) és [a fölérendelt paklik korlátainak beállításánál](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top) olvashatsz.

Nézd meg az ismétlési korlátot is. Alapértelmezésben ez az új kártyák számát is korlátozza. Ha bekapcsolod az **Új kártyák az ismétlési korláttól függetlenül** (New cards ignore review limit) beállítást, az ismétlési korlát csak az ismétlésekre vonatkozik. Ez a kapcsoló és a **Korlátok alkalmazása a legfelső paklitól** kapcsoló az egész gyűjteményre érvényes. Jegyezd fel mindkettő állását, mielőtt az új kártyák korlátjából következtetnél arra, hány új kártya fér még bele ma. [A napi korlátok beállítófelülete a kiadott verzió forráskódjában](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

A Böngésző **Előnézet** (Preview) funkciójával válaszadás nélkül nézheted meg a kérdéseket. A következő szokásos tanulási menetnél töltsd ki ezt a rövid ellenőrző táblázatot.

| Mit jegyezz fel? | Mire ad választ? |
| --- | --- |
| A tanuláshoz megnyitott pakli, a beállításkészlete, valamint a kiválasztási és rendezési beállítása | Melyik megjelenítési sorrend érvényes a tanulás során? |
| A várt kártyák és a tárolt pozíciójuk | A kiválasztással vagy a sorrenddel van gond? |
| Az új kártyák és az ismétlések korlátai, a paklira vagy a mai napra érvényes felülírások és a ma már elvégzett tanulás | Mennyi hely maradt a keretben? |
| A fölérendelt paklik korlátai és a két, egész gyűjteményre érvényes kapcsoló állása | Milyen további korlátok érvényesek? |
| Az elrejtett, felfüggesztett vagy szűrt pakliban lévő kártyák, valamint a testvérkártyák | Melyik szóba jövő kártya maradhat ki? |
| Az új kártyák első megjelenési sorrendje, külön a tanulási lépések miatti újbóli megjelenésektől | Egyezik az új kártyák sorrendje a várttal? |

Miután válaszoltál egy új kártyára, az a tanulási lépések miatt később újra megjelenhet, akár más új kártyák között is. Az **Új és ismétlendő kártyák sorrendje** (New/Review Order) az ismétlendő kártyák elé, mögé vagy közé teszi az újakat. A kiválasztási és rendezési beállítások továbbra is azt határozzák meg, mely új kártyák kerülnek be és egymáshoz képest milyen sorrendben jelennek meg. A kiadott verzió az új kártyák rendezése után fűzi össze a kártyák különböző csoportjait. [A tanulási sor összeállításának forráskódja](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Ha a várt kártyák és az első megjelenési sorrendjük egyezik azzal, amit látsz, kész vagy az ellenőrzéssel. Ha még van eltérés, a további vizsgálathoz jegyezd fel a pozíciókat, a beállításokat, a tanulásra kiválasztott paklit, az Anki verzióját, a megfigyelt sorrendet és az érintett bővítményeket. Ha egy témát szeretnél még egyszer átvenni, kövesd a [szűrt paklival végzett gyakorlásról szóló külön angol nyelvű útmutatót](/blog/anki-filtered-decks-without-rescheduling/).
