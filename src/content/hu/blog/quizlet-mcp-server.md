---
title: "Van a Quizletnek MCP-szervere 2026-ban? Mit használhat a Claude és a Codex?"
description: "A Quizlet 2026-ban nem dokumentál MCP-szervert. Hasonlítsd össze a ChatGPT-alkalmazását, a kizárólag a készlet létrehozójának elérhető exportot és a rendszeres Claude- vagy Codex-hozzáférés biztonságos módját."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP-szerver"
  - "Quizlet Claude-csatlakozó"
  - "Quizlet csatlakoztatása a Claude-hoz"
  - "Quizlet Codex"
  - "Quizlet ChatGPT-alkalmazás"
  - "Quizlet API-alternatíva"
---

2026. szeptember 12-én a Quizlet nyilvános dokumentációja nem ír le sem MCP-szervert, sem önkiszolgáló módon elérhető nyilvános fejlesztői API-t. Ha olyan Quizlet MCP URL-t kerestél, amelyet beilleszthetsz a Claude-ba, a Codexbe vagy egy másik MCP-kliensbe, a Quizlet dokumentációjában jelenleg nincs ehhez nyilvános beállítási útmutató.

A Quizletnek van hivatalos alkalmazása a ChatGPT-ben. Ez egy ChatGPT-beszélgetésből új tanulókártya-készletet a Quizletben tud létrehozni, de ez a konkrét munkafolyamat nem egy általánosan újrahasználható Quizlet MCP-szerver. Ha arra van szükséged, hogy egy ügynök rendszeresen hozzáférjen a meglévő kártyáidhoz, a gyakorlatban az a járható út, hogy exportálod egy általad létrehozott készlet szövegét, megőrzöd a nyers másolatot, ellenőrzöd az átvitelt, majd olyan tanulókártya-rendszert használsz, amely kifejezetten támogatja az ügynökök olvasási és írási műveleteit.

**A tények ellenőrzésének dátuma:** 2026. szeptember 12.

> **Érdekeltségi nyilatkozat:** Kirill Markin vagyok, és a Nibomót fejlesztem, amelynek MCP-szervere és Agent API-ja alább alternatívaként szerepel. A Nibomo nem tud Quizlet-fiókhoz csatlakozni vagy Quizlet URL-ről importálni.

![Egy kertész egyetlen fiatal növényt visz át egy zárt üvegházból egy elágazó csepegtető öntözőrendszerrel ellátott kerti ágyásba](/blog/quizlet-mcp-server.png)

## A ChatGPT-alkalmazás, az export és az MCP más-más feladatot old meg

A [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) egy nyílt szabvány, amely mesterségesintelligencia-alkalmazásokat kapcsol össze külső rendszerekkel. Egy MCP-szerver általában ismert végpontot és meghatározott, meghívható eszközkészletet biztosít a kompatibilis klienseknek.

A Quizlet [hivatalos ChatGPT-bejelentése](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) más megoldást ír le. Telepíted a Quizlet alkalmazást a ChatGPT-ben, az utasításodat az `@Quizlet` megjelöléssel kezded, megnézed a létrehozott tanulókártyák előnézetét a ChatGPT-ben, majd megnyitod a készletet a Quizletben, hogy személyre szabd és tanulj vele.

Ez akkor hasznos, ha a feladatod az, hogy „alakítsd ezt a ChatGPT-beszélgetést Quizlet-készletté”. A bejelentés nem tesz közzé általános Quizlet MCP-végpontot, nem ad a Claude-nak vagy a Codexnek hozzáférést a Quizlet-könyvtáradhoz, és nem kínál újrahasználható fejlesztői hitelesítő adatokat.

Ez semmit nem állít a Quizlet privát vagy belső infrastruktúrájáról. Csak azt a felületet írja le, amelyet a Quizlet a nyilvános dokumentációjában elérhetővé tesz. A fejlesztői hozzáférés tágabb korlátairól a [Van a Quizletnek nyilvános API-ja 2026-ban?](/hu/blog/quizlet-api/) című cikk szól.

A különbség világosan összefoglalva:

| Mit szeretnél valójában? | A jelenleg legjobban támogatott megoldás | Mire számíthatsz? |
| --- | --- | --- |
| Új Quizlet-készletet létrehozni egy ChatGPT-beszélgetésből | A Quizlet hivatalos ChatGPT-alkalmazása | Egy konkrét `@Quizlet`-munkafolyamat a ChatGPT-n belül, majd szerkesztés és tanulás a Quizletben |
| Átvinni a kifejezéseket és meghatározásokat egy általad létrehozott készletből | Export a Quizlet weboldalán | Egyszeri szöveges másolat, amelyet megőrzöl és ellenőrzöl |
| Lehetővé tenni, hogy a Claude, a Codex vagy egy másik ügynök rendszeresen olvasson vagy szerkesszen tanulókártyákat | Dokumentált MCP-szerverrel vagy ügynök-API-val rendelkező tanulókártya-rendszer | Hitelesített hozzáférés a célrendszer munkaterületéhez, nem a Quizlethez |
| Szoftvert fejleszteni a Quizlet-fiók adataira építve | Megvárni a hivatalos fejlesztői dokumentációt vagy egy engedélyezett partneri hozzáférést | Jelenleg nincs dokumentált, nyilvános, önkiszolgáló Quizlet API- vagy MCP-specifikáció |

A Quizlet ChatGPT-alkalmazása egyetlen létrehozási munkafolyamatot kezel. Az export egy egyszeri, véges átvitelt szolgál. Az MCP olyan rendszerhez biztosít ismételhető hozzáférést, amely szándékosan tesz elérhetővé eszközöket. Ezek nem helyettesítik egymást.

## Válaszd a legrövidebb támogatott utat

Ha a hivatalos ChatGPT-alkalmazás megfelel a feladatnak, használd azt. Nincs okod egy második rendszert bevezetni csak azért, hogy egyetlen beszélgetésből egyetlen Quizlet-készletet készíts.

Ha csak biztonsági másolatra vagy egyszeri átköltözésre van szükséged, használd a Quizlet exportját. Ha azt szeretnéd, hogy egy ügynök holnap is visszatérjen, megkeressen egy paklit, kártyákat adjon hozzá és javítsa őket, a célrendszerben dokumentált olvasási és írási felületre van szükséged. Amíg a Quizlet nem tesz közzé ilyet, ez a rendszeres munkafolyamat nem valósítható meg a Quizlet-fiókodhoz vezető támogatott közvetlen kapcsolattal.

A kifejezetten Quizlet-adatokra épülő egyedi szoftvereknél is ugyanennél a határnál állj meg. Egy böngészőből indított kérés, egy régi API-burkoló könyvtár vagy egy mások által visszafejtett integráció nem helyettesíti az aktuális fejlesztői dokumentációt.

## Tedd visszafordíthatóvá a saját készleted átvitelét

A Quizlet [hivatalos exportálási útmutatója](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) szerint csak a készítő exportálhat egy készletet, és kizárólag a weboldalon. A lépések: **Továbbiak → Exportálás → Szöveg másolása**. Az export a kifejezéseket és a meghatározásokat tartalmazza; a Quizlet szerint képeket nem lehet exportálni, a másolt készletek pedig nem exportálhatók.

Egy általad létrehozott készlet körültekintő átvitele néhány lépésből áll:

1. Exportáld a készletet a Quizlet weboldalán, és illeszd be az eredményt egy egyszerű szövegfájlba.
2. Ments el egy érintetlen UTF-8-as másolatot, mielőtt módosítanád az elválasztójeleket, a sortöréseket vagy a szöveget.
3. Egy másolatot szerkessz, ne a nyers exportot.
4. Ellenőrizz néhány elemet az elejéről, a közepéről és a végéről, valamint a többsoros meghatározásokat és a nem latin karaktereket is.
5. Importáld vagy csatold a munkapéldányt, nézd meg néhány kártya elő- és hátoldalának előnézetét, és csak ezután mentsd a kártyákat.
6. Őrizd meg a Quizlet-készletet és a nyers fájlt addig, amíg a célrendszerben meg nem nyitottad és ki nem próbáltad a paklit.

Az elválasztójelek, a CSV és a fájlok ellenőrzésének teljes leírását a [Quizlet-készletek exportálása 2026-ban](/hu/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) című cikkben találod. Egy fontos korlátot könnyű figyelmen kívül hagyni: az export a kártyák szövegét viszi át, a Quizlet képeit, mappáit, tanulási előzményeit, az elsajátítás szintjét és az ismétlési ütemezést nem.

Ezért fontos, hogy az átköltözés visszafordítható maradjon. Ha egy többsoros meghatározásból két kártya lesz, vagy egy elválasztójel eltolja a mezőket, a nyers fájl változatlan viszonyítási alapot ad.

## Mit használhat a Claude és a Codex az export után?

A Nibomo ezen a címen tesz elérhetővé távoli MCP-végpontot:

`https://mcp.nibomo.com/mcp`

> [Csatlakoztatás a Claude-hoz](https://claude.ai/directory/nibomo) · [Dokumentáció](/hu/docs/mcp-connector/)

Az [MCP-csatlakozó dokumentációja](/hu/docs/mcp-connector/) nyolc eszközt határoz meg: `list_workspaces`, `sql_query` az olvasáshoz, `sql_execute` az íráshoz, `get_guide` a segédletek lekéréséhez, valamint `next_review_card`, `reveal_answer` és `submit_review` az ismétléshez. Az interaktív MCP-kliensek OAuth segítségével kaphatnak hozzáférést. A terminálban futó ügynökök ehelyett az [Agent API dokumentációjából](/hu/docs/api/) indulhatnak ki, és a közzétett HTTP-folyamatot használhatják.

`get_usage_limits` — kizárólag olvasási hozzáférés a fiók előfizetési csomagjához, korlátaihoz és az aktuális havi mesterségesintelligencia-használathoz; kártyákat nem olvas és nem módosít.

Ettől a Nibomo nem válik Quizlet-csatlakozóvá. A támogatott munkafolyamat a következő:

1. exportáld egy saját magad által létrehozott Quizlet-készlet szövegét;
2. őrizd meg a nyers fájlt, és ellenőrizd a munkapéldányt;
3. ellenőrizd a mezők megfeleltetésével létrejött kártyákat, mielőtt elmented őket a Nibomóban; majd
4. csatlakoztasd az így létrejött Nibomo-munkaterületet egy kompatibilis klienshez a későbbi olvasási és írási műveletekhez.

A Claude esetében a csatlakoztatás lépéseit a [Nibomo csatlakoztatása a Claude-hoz MCP-vel](/blog/how-to-connect-flashcards-to-claude-with-mcp/) című cikk írja le. A Codex és más ügynökök a dokumentált MCP- vagy Agent API-hozzáférést használhatják, attól függően, hogy a környezetük melyiket támogatja.

A Nibomo nem tud Quizlet URL-t beolvasni, Quizlet-fiókot tükrözni, a későbbi Quizlet-módosításokat szinkronizálni, vagy az exportból kimaradt képeket és tanulási előzményeket visszaállítani. Az általad átvitelre kiválasztott anyagból saját kártyákat hoz létre, amelyek ismétlését újonnan kezdi ütemezni.

Ha azt mérlegeled, hogy az ügynökhozzáférésen túl is megéri-e ez a váltás, nézd meg a [nyílt forráskódú Quizlet-alternatíva összehasonlítását](/blog/quizlet-alternative/).

## Szűkítsd a jogosultságokat a feladathoz szükséges körre

Egy nyilvános specifikáció csökkenti az integráció körüli találgatást, de nem tesz minden MCP-műveletet biztonságossá. Az OAuth hitelesíti a kapcsolatot. Nem garantálja, hogy egy mesterséges intelligencia által létrehozott kártya helyes, nem tartja a visszaadott kártyaadatokat a tanulókártya-szolgáltatáson belül, és nem dönti el, hogy egy módosítás megfelel-e a szándékodnak.

A Nibomo különválasztja az olvasási műveleteket az írási eszközöktől: a `sql_execute` a kártyákat és paklikat, a `submit_review` az ismétléseket kezeli. Az OAuth-hitelesítő adat ettől még a csatlakozó teljes felületére érvényes, ezért az eszközök blokkolása és a jóváhagyás működése a klienstől függ. Kezdd egy kis munkaterülettel, amely nem tartalmaz érzékeny adatokat. Az ügynök csak a feladathoz szükséges adatokat olvassa, az írási műveleteknél tartsd meg a hívásonkénti jóváhagyást, ha a kliens ezt támogatja, és elfogadás előtt nézd át a munkaterületet és a javasolt módosítást.

Ne csatlakoztass privát tananyagot, amíg nem ellenőrizted az AI-kliens adatmegőrzési és adatkezelési feltételeit. Az első átvitelhez elég egy egyszerű szabály: őrizd meg a nyers exportot, nézd meg néhány kártya előnézetét, hagyj jóvá egy szűk körű írási műveletet, és mielőtt továbbmennél, ellenőrizd az eredményt a célalkalmazásban.

## Ne alakítsd API-vá a böngésző privát forgalmát

A böngésző fejlesztői eszközeiben látható kérés nem nyilvános Quizlet API. A privát végpontok munkamenetsütiktől, belső formátumoktól és előzetes értesítés nélkül változó működéstől függhetnek. Bármilyen automatizált használatnak meg kell felelnie a [Quizlet felhasználási feltételeinek](https://quizlet.com/tos), valamint az anyagra vonatkozó jogosultságaidnak is.

Ez a cikk nem ad útmutatót webes adatkinyeréshez, és nem közöl visszafejtett végpontokat. Ha a hivatalos ChatGPT-alkalmazás megfelel a feladatnak, használd azt. Ha te hoztad létre a készletet, és egyszer szeretnéd átköltöztetni, exportáld. Ha rendszeres ügynöki olvasásra és írásra van szükséged, vidd át az ellenőrzött tartalmat egy olyan rendszerbe, amely közzéteszi ezt a felületet, a Quizlet oldalán pedig maradj a kézi műveleteknél, amíg a Quizlet nem dokumentál új lehetőséget.
