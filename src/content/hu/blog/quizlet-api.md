---
title: "Van nyilvános Quizlet API 2026-ban? Helyzetkép és biztonságos alternatívák"
description: "Van a Quizletnek API-ja? 2026. augusztus 18-án nincs dokumentált, önállóan igénybe vehető nyilvános API. Hasonlítsd össze a támogatott alternatívákat."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "van a Quizletnek API-ja"
  - "nyilvános Quizlet API"
  - "Quizlet fejlesztői API"
  - "Quizlet API alternatíva"
  - "tanulókártyák automatizálása"
---

2026. augusztus 18-án a Quizlet nem dokumentál önállóan igénybe vehető nyilvános fejlesztői API-t vagy nyilvános fejlesztői portált. Egy független fejlesztő jelenleg nem tud hivatalos úton alkalmazást regisztrálni, Quizlet API-kulcsot szerezni, majd dokumentált végpontokon keresztül tanulókártya-adatokat olvasni vagy írni.

Ez a megállapítás a Quizlet nyilvános dokumentációjára vonatkozik, nem a belső rendszereire. A Quizletnek egyértelműen vannak termék- és partnerintegrációi. A ChatGPT-alkalmazása és a Google Classroom-bővítménye két jelenlegi példa. Egyik sem tesz elérhetővé általános célú Quizlet fejlesztői API-t más alkalmazások számára.

**A tények ellenőrzésének dátuma:** 2026. augusztus 18.

> **A szerző érdekeltsége:** Kirill Markin vagyok, és én fejlesztem a Nibomót, amelynek Agent API-ja és MCP-szervere alább alternatívaként szerepel. A Nibomo nem kompatibilis a Quizlettel, és nem importál automatikusan Quizlet-készleteket.

![Egy fejlesztő a Quizlet exportálási és beágyazási funkcióit, konkrét integrációit és egy dokumentált tanulókártya-API-t hasonlít össze](/blog/quizlet-api.png)

## Röviden: nincs dokumentált, önállóan igénybe vehető Quizlet API

Ha azért kerestél rá arra, hogy „van a Quizletnek API-ja?”, mert magát a Quizletet szeretnéd automatizálni, a jelenlegi gyakorlati válasz: **nincs dokumentált nyilvános API, amelyhez önállóan hozzáférhetnél**.

Kívülről több hivatalos funkció is API-szerűnek tűnhet. Ezek azonban szűkebb feladatokra valók:

| Mire van szükséged? | Támogatott megoldás | Mire jó? | Mit nem ad? |
|---|---|---|---|
| Szöveg átvitele egy általad létrehozott készletből | [Exportálás a Quizlet weboldalán](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | A fogalmak és meghatározások egyszeri másolata | Képek, másolt készletek exportálása, tanulási előzmények vagy API-hozzáférés |
| Nyilvános készlet elhelyezése egy weboldalon vagy LMS-oldalon | [Quizlet-beágyazás](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Quizlet-márkajelzéssel ellátott tanulási feladat az oldaladon belül | Strukturált kártyaadatok vagy olvasási és írási hozzáférés |
| ChatGPT-beszélgetés átalakítása Quizlet-készletté | [Quizlet-alkalmazás a ChatGPT-ben](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Készlet létrehozása és előnézete az `@Quizlet` használatával | Hozzáférési adatok vagy végpontok a saját alkalmazásodhoz |
| Quizlet-feladatok kiosztása a Google Classroomban | [Quizlet Google Classroom-bővítmény](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Feladatok keresése, kiosztása és követése a Classroomban | Általános API egyedi oktatási szoftverekhez |
| Saját Quizlet-integráció fejlesztése | Jelenleg nincs dokumentált út az önálló hozzáféréshez | Létezhet külön partnermegállapodás | Nyilvános regisztráció, API-kulcsok vagy dokumentált interfész a kártyaadatokhoz |
| Saját tanulókártyás munkaterület automatizálása | [Nibomo Agent API](/hu/docs/api/) vagy [MCP-csatlakozó](/hu/docs/mcp-connector/) | Kártyák és paklik rendszeres olvasása és írása egy adott munkaterületen | Quizlet-kompatibilitás vagy automatikus Quizlet-importálás |

A lényegi különbség egyszerű: ha a saját kártyáid szövegét egyszer szeretnéd átmásolni, exportálásra van szükséged. Ha a Quizletet egy másik oldalon szeretnéd megjeleníteni, beágyazásra. Egy konkrét integráció csak az adott termék munkafolyamatában működik. A kártyákat rendszeresen létrehozó, olvasó és szerkesztő szoftverhez dokumentált olvasási és írási API kell.

## Az exportálás, a beágyazás és a partneri hozzáférés nem nyilvános API

Egy nyilvános API meghatározza a külső fejlesztők számára az együttműködés kereteit: dokumentációt, hitelesítést, támogatott műveleteket, használati szabályokat és módot a hozzáférési adatok megszerzésére. A Quizlet jelenlegi nyilvános felületei közül egyik sem biztosítja ezt a teljes, önállóan igénybe vehető hozzáférést.

A Quizlet **exportálási funkciója** kézi adatátvitelt tesz lehetővé. A készlet létrehozója a weboldalon beállíthatja a fogalmak és meghatározások elrendezését, kiválaszthatja a szöveg másolását (**Copy text**), majd máshová illesztheti az eredményt. A Quizlet szerint képek és másolt készletek nem exportálhatók, a funkció pedig kizárólag a weboldalon érhető el. Egy körültekintő, egyszeri átköltöztetéshez ez megfelelő. Arra nem alkalmas, hogy egy szoftver két rendszert folyamatosan szinkronban tartson.

A **beágyazás** megjelenítést biztosít, nem adathozzáférést. A Quizlet egy nyilvános készlet HTML-kódját engedi kimásolni a Match, Learn, Test, Flashcards vagy Spell módban. A beágyazott feladat megtartja a Quizlet logóját, és a tanulók a Quizlet felületét használják. Az alkalmazásod nem kapja meg a készletet szerkeszthető kártyarekordok formájában.

Egy **konkrét partnerintegráció** a partnerek között egyeztetett munkafolyamatot támogatja. A Quizlet együttműködhet a ChatGPT-vel vagy a Google Classroommal anélkül, hogy ugyanazt az interfészt minden fejlesztő számára elérhetővé tenné. Ezeknek az integrációknak a bevezetése az adott együttműködések létezését bizonyítja; azt nem, hogy mögöttük általánosan használható, nyilvános Quizlet API áll.

Ezért egy régi API-wrapper vagy a böngésző fejlesztői eszközeiben látható kérés sem jelent támogatott Quizlet API-t. Hiányzik hozzá a nyilvános dokumentáció és a stabil, dokumentált fejlesztői interfész.

## Válaszd a feladatnak megfelelő megoldást

### Egyszeri biztonsági másolathoz vagy átköltöztetéshez használd az exportálást

Egy általad létrehozott készlethez használd a Quizlet hivatalos exportálási folyamatát. Mivel a folyamat a szöveg másolásával (**Copy text**) ér véget, az első beillesztett másolatot őrizd meg változatlanul, mielőtt javítanád az elválasztókat vagy hozzárendelnéd a mezőket. A fogalmakat és meghatározásokat mented el, nem egy visszaállítható paklicsomagot töltesz le. A képek és a tanulási előzmények nem kerülnek át.

A gyakorlati ellenőrzőlistát a [Quizlet-készletek exportálása 2026-ban](/hu/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) című útmutatóban találod. Kitér a változatlan eredeti másolatra és a munkapéldányra, az UTF-8-ra, a tabulátorokra, a többsoros meghatározásokra, valamint a kártyatartalom és az ismétlések ütemezését leíró állapot átvitelének különbségére.

Az exportálás egy egyszeri, lezárható átvitelhez illik. Napi kártyalétrehozásra, szinkronizálásra vagy szoftverből végzett rendszeres szerkesztésre nem alkalmas.

### Megjelenítéshez használd a hivatalos beágyazást

Ha a tanulóknak egy osztály weboldalán vagy LMS-oldalon kell egy nyilvános Quizlet-készlettel tanulniuk, használd a Quizlet weboldalán elérhető beágyazási kódot. Válaszd ki a feladatot, kattints a HTML másolására (**Copy HTML**), majd add hozzá az eredményt az oldalhoz. A tanulók interaktív Quizlet-feladatot kapnak; a befogadó weboldal nem kap nyers kártyaadatokat.

Gyakran ennyi elég is egy tanárnak. Ha ezt API-nak nevezed, csak bonyolultabbnak hangzik a követelmény, mint amilyen valójában.

### ChatGPT-hez vagy Google Classroomhoz használd az adott integrációt

A Quizlet 2026. március 10-i ChatGPT-bejelentése egy konkrét folyamatot ír le: csatlakoztasd a Quizlet-alkalmazást, kezdd az utasítást az `@Quizlet` megjelöléssel, nézd meg a létrehozott készlet előnézetét a ChatGPT-ben, majd nyisd meg a Quizletben, hogy személyre szabd és tanulj vele. Ez támogatott módja annak, hogy az adott beszélgetésből Quizlet-készletet hozz létre. Nem ad többször használható Quizlet API-hitelesítő adatot a botodnak, szkriptednek vagy weboldaladnak.

A Quizlet 2026. június 30-i Google Classroom-bejelentése hasonlóan konkrét. A bővítménnyel a tanárok feladatokat kereshetnek és oszthatnak ki, köztük gyakorlókérdéseket, tanulókártyákat és játékokat, majd a Classroom munkafolyamatán belül követhetik a részvételt és az előrehaladást. A Quizlet szerint ehhez Google Workspace for Education Plus szükséges; előfordulhat, hogy az informatikai rendszergazdának kell engedélyeznie vagy elérhetővé tennie a bővítményt.

Ha valamelyik meglévő munkafolyamat megfelel a célodnak, használd azt. Ha egyedi alkalmazásra van szükséged, egyik integráció sem helyettesíti a nyilvános fejlesztői hozzáférést.

### Rendszeres automatizáláshoz válassz dokumentált olvasási és írási interfészt

A folyamatos automatizálás azt jelenti, hogy a szoftverednek többször is megbízhatóan kell elvégeznie ugyanazt a munkát: kártyákat létrehoznia jegyzetekből, listáznia a paklikat, frissítenie a válaszokat vagy hosszabb távon kezelnie egy munkaterületet. A vágólapra történő exportálás ehhez nem biztosít megfelelő interfészt.

A biztonságos megoldás egy olyan tanulókártya-rendszer, amely dokumentálja a külső szoftverek hitelesítését és a támogatott olvasási és írási műveleteket. Ez azt is jelentheti, hogy az automatizált munkafolyamathoz Quizlet API-alternatívát választasz, miközben a Quizletet továbbra is a felhasználóknak kínált tanulási funkcióihoz használod.

## Mit biztosít valójában a Nibomo API-alternatívája?

A Nibomo két hozzáférési módot tesz közzé ugyanahhoz a korlátozott, felhasználónként elkülönített adatkörhöz:

- A [külső Agent API](/hu/docs/api/) belépési pontja a `GET https://api.nibomo.com/v1/`. A belépési pont válasza végigvezeti az ágenst az e-mailben kapott egyszer használatos kóddal (OTP) történő bejelentkezésen, az API-kulcs létrehozásán és a munkaterület kiválasztásán. Az olvasás SQL-jellegű lekérdezési útvonalon, az írás külön végrehajtási útvonalon történik.
- A [távoli MCP-szerver](/hu/docs/mcp-connector/) a `https://mcp.nibomo.com/mcp` címen érhető el. Az MCP-kliensek nyolc eszközt kapnak: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide`, valamint az ismétléshez használható `next_review_card`, `reveal_answer` és `submit_review` eszközöket.

A `get_usage_limits` kizárólag olvasásra szolgál: megadja a fiók előfizetési csomagját, korlátait és az aktuális havi AI-használatot; kártyákat nem olvas és nem módosít.

Mindkét hozzáférési mód egy adott munkaterületre korlátozódik. Az elérhető erőforrások a `workspace`, `cards`, `decks` és `review_events`, és az eredmény utasításonként legfeljebb 100 sort tartalmazhat. Az SQL-jellegű interfész egy korlátozott SQL-dialektust használ, nem közvetlen PostgreSQL-hozzáférést ad. Nincs OpenAPI-séma, ezért a generált OpenAPI-kliensekre épülő munkafolyamatokhoz más interfészre lesz szükség.

Ez segíthet egy fejlesztőnek vagy AI-ágensnek a saját tanulókártyái automatizálásában. Quizlet-URL-t nem tud beolvasni, Quizlet-fiókot nem tud tükrözni, és nem használható nem dokumentált Quizlet-kliensként. Nincs automatikus Quizlet-importáló. Átköltöztetéshez először exportáld a fogalmakat és meghatározásokat a saját készletedből, ellenőrizd a szöveget, majd rendeld hozzá a célrendszer kártyamezőihez. A célrendszer saját tanulási állapotot hoz létre; a Quizlet-előzmények nem kerülnek át.

Az API-hozzáférésen túli termékkülönbségekről a [nyílt forráskódú Quizlet-alternatívát bemutató összehasonlításban](/blog/quizlet-alternative/) olvashatsz.

## A privát böngészőkérések nem jelentenek biztonságos kerülőutat

A Quizlet webes felülete hálózati kéréseket küld, ahogy minden modern webalkalmazás. Attól, hogy megtalálsz egy ilyen kérést, a hozzá tartozó végpont még nem válik a programod számára hivatalosan támogatott interfésszé.

A böngészőből használt privát végpontok függhetnek a munkamenet-sütiktől, a belső adatformátumoktól, a visszaélés elleni védelemtől és az aktuális felület működésére vonatkozó feltételezésektől. Nyilvános verziózás vagy átállási útmutató nélkül is megváltozhatnak. A [Quizlet felhasználási feltételei](https://quizlet.com/tos) ennél is egyértelműbb korlátot szabnak: a legutóbb 2026. május 28-án frissített feltételek tiltják a webes adatgyűjtést (scraping) és más automatizált adatkinyerést, valamint a szolgáltatás jogosulatlan automatizált használatát.

Ez már egy saját szkripthez is megbízhatatlan és kockázatos alap, egy termékhez pedig még inkább. Itt nem adok meg feltételezett végpontokat vagy visszafejtési lépéseket.

Saját készletednél használd az exportálást, ha egyszeri átvitelre van szükséged. Ágyazz be nyilvános készletet, ha a tanulóknak egy másik oldalon kell használniuk. A ChatGPT- vagy Google Classroom-integrációt az azokhoz tartozó konkrét munkafolyamatokhoz használd. Rendszeres olvasáshoz és íráshoz válassz olyan szoftvert, amely dokumentálja az automatizálás kereteit, vagy kezeld kézzel a Quizlethez tartozó részt, amíg a Quizlet nem tesz közzé ilyen dokumentációt.

## Honnan tudhatod, ha változik a helyzet?

A Quizlet a cikk tényellenőrzési dátuma után elindíthat egy fejlesztői programot. Egy hivatalos fejlesztői portált vagy olyan dokumentációt keress, amely leírja, ki regisztrálhat, hogyan működik a hitelesítés, milyen kártyaműveletek támogatottak, és milyen használati szabályok vonatkoznak rájuk.

Egy újabb külső API-wrapper nem változtatná meg a választ. Egy új partneri együttműködés sem. Amíg a Quizlet nem dokumentál önállóan igénybe vehető fejlesztői hozzáférést, kezeld óvatosan a jelenleg elérhető Quizlet API-ról szóló állításokat, és válaszd a tényleges feladatnak megfelelő, támogatott megoldást.
