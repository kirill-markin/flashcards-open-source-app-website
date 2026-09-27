---
title: "A legjobb nyílt forráskódú tanulókártya-alkalmazások 2026-ban: 6 FOSS megoldás összehasonlítása"
description: "Hat karbantartott, nyílt forráskódú tanulókártya-alkalmazás: forráskód, offline adatok, szinkronizálás, Anki-import, export, saját üzemeltetés és helyreállítás."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "legjobb nyílt forráskódú tanulókártya-alkalmazások"
  - "nyílt forráskódú tanulókártya-alkalmazás"
  - "nyílt forráskódú időközönkénti ismétlés"
  - "saját szerveren futó tanulókártyák"
  - "offline tanulókártya-alkalmazás"
  - "nyílt forráskódú Anki-alternatíva"
  - "FOSS tanulókártyák"
---

2026-ban a legtöbb embernek továbbra is az Anki a legjobb nyílt forráskódú tanulókártya-alkalmazás. A választás akkor válik érdekesebbé, ha a nyílt forráskód mellett más követelményekből sem engedhetsz.

Lehet, hogy saját szerveren futó böngészős alkalmazásra van szükséged. Vagy egyszerű Markdownként olvasható paklira. Esetleg privát jegyzetrendszerre, amelyből tanulókártyák készülnek. Ezek az igények más-más termékhez vezetnek, és egy nyilvános GitHub-tároló önmagában nem dönti el a kérdést.

Egy nyílt asztali kliens mellett lehet zárt iPhone-alkalmazás. Egy Docker-konténer kiszolgálhat böngészős felületet anélkül, hogy szinkronizálná a natív klienseket. Egy import átmentheti a szavakat, miközben elvesznek a sablonok, a média és a gyűjteményt igazán értékessé tevő, többéves ismétlési előzmények.

Hat projekt felelt meg az összehasonlítás feltételeinek. A licencelt forráskódot, a legújabb stabil kiadást, a helyi adatokat, az ütemezőt, a szinkronizálást, az Ankiról való költözést, az exportot és a saját üzemeltetés pontos terjedelmét vizsgáltam. Ez utóbbi többet számít, mint amennyit a legtöbb funkciólista elárul.

> **Szerzői érdekeltség:** Kirill Markin vagyok, és az alábbi hat alkalmazás egyikét, a [Nibomót](https://nibomo.com/) fejlesztem. Az MIT-licencű tárolója a webalkalmazást, a natív klienseket, a backendet, a szinkronizálást és az infrastruktúrát is tartalmazza. Nem tettem az első helyre. Az Anki biztonságosabb alapválasztás, a Mnemosyne Anki-importja régebb óta bevált, és több itt szereplő megoldás üzemeltetése jóval egyszerűbb.

**A tények ellenőrzésének dátuma:** 2026. szeptember 5. Külön kezelem a stabil kiadásokat és a csak az alapértelmezett fejlesztési ágon elérhető módosításokat.

![Egy túrázó hat nyitott hátizsákot hasonlít össze, és kipróbál egy tartalék felszerelést, mielőtt nyílt forráskódú tanulókártya-alkalmazást választ](/blog/best-open-source-flashcard-apps-2026-v2.png)

## A rövid válasz

| A legfontosabb igényed | Legjobb választás | Miért? | A korlát, amelyet először ellenőrizz |
| --- | --- | --- | --- |
| Megbízható, általános rendszer vagy összetett meglévő gyűjtemény | [Anki](https://apps.ankiweb.net/) | Kiforrott kártyák és sablonok, FSRS, bővítmények, sokféle kliens és részletes csomagexport | A hivatalos iOS-alkalmazás és az AnkiWeb nem része a nyílt asztali kódnak; saját szerveren szinkronizálást kapsz, AnkiWebet nem |
| Célzott asztali alternatíva bevált Anki-importtal | [Mnemosyne](https://mnemosyne-proj.org/) | Helyi tanulás, Anki-kártyatípusok és tanulási adatok importja, saját magad által futtatható szinkronizáló szerver | Még mindig a 2.11 a legújabb stabil verzió; Androidon ismételhetsz, de szerkeszteni nem tudsz |
| Jegyzetek és tanulókártyák egyetlen helyi tudásbázisban | [SiYuan](https://b3log.org/siyuan/en/) | Offline natív alkalmazások, beépített FSRS és valódi, Dockerben futó böngészős alkalmazás | A Dockeres kliensek nem szinkronizálnak a natív alkalmazásokkal, és több import-/exportparancs sem érhető el Dockerben |
| A web, a mobil, a backend és az infrastruktúra forráskódja | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Egyetlen MIT-licencű monorepo dokumentált éles telepítéssel | A támogatott éles rendszer AWS-re épül, az Ankiról való költözés pedig adatvesztéssel jár |
| Fiatalabb, elsősorban helyben működő asztali alkalmazás közvetlen APKG-importtal | [Recall](https://github.com/Madlezz/Recall) | FSRS, asztali kiadások, PWA, helyi adatbázisok és opcionális titkosított közvetítő | Az import csak az ütemezés pillanatnyi állapotát tartja meg, az első két jegyzetmezőt kezeli, a hangot kihagyja |
| Ember által olvasható Markdown-paklik hálózati függőség nélkül | [Essentialist](https://github.com/essentialist-app/essentialist) | Egyszerű paklifájlok és tudatosan offline asztali/Android-alkalmazás | Nincs szinkronizálás, és a tanulási előrehaladás külön, rejtett adatbázisban él |

Ez a táblázat nem pontozza az alkalmazásokat a funkcióik száma alapján. Abból indulj ki, milyen veszteséget nem engedhetsz meg magadnak. Tíz évnyi Anki-ismétlésnél az adatok hű átvitele fontosabb a letisztultabb felületnél. Egy iskolai rendszer üzemeltetésénél a böngészős elérés és a kipróbált helyreállítás többet érhet a bővítményeknél.

## Mit tekintettem nyílt forráskódú tanulókártya-alkalmazásnak?

Négy feltételt használtam:

1. **A tanulás alapfunkcióinak forráskódja nyilvános, egyértelmű nyílt forráskódú licenccel.** Egy nem nyilvános alapalkalmazáshoz tartozó integrációgyűjtemény nem elég.
2. **Az időközönkénti ismétlés már működik.** Egy fejlesztési tervben szereplő ígéret vagy általános kvízmód kevés.
3. **Van kiadott alkalmazás vagy egyértelműen dokumentált hivatalos telepítési mód.** A friss commitok önmagukban még nem tesznek egy prototípust biztonságosan ajánlhatóvá.
4. **A hivatalos forrásokból eléggé megismerhető az adatkezelés ahhoz, hogy ellenőrizni lehessen.** Konkrét válaszokat kerestem az offline tárolásról, szinkronizálásról, importról/exportról vagy üzemeltetésről, nem homályos ígéreteket arról, hogy a felhasználók „birtokolják az adataikat”.

A GitHub-csillagok száma nem volt kizárási feltétel. Az életkort és az ismertséget éppúgy jutalmazzák, mint azt, hogy egy termék megfelel-e az igényeidnek. A kiforrottság azért számít. Az Anki, a Mnemosyne és a SiYuan mögött bevált kiadások és üzemeltetési modellek állnak. A Recall és az Essentialist szűkebb felhasználási körben került be, mert a kiadott verzióik működése elég jól dokumentált egy konkrét ajánláshoz.

A „karbantartott” jelzőhöz is két dolgot kell ellenőrizni. A verziócímkével ellátott kiadás mutatja, mit telepíthetnek a felhasználók; az alapértelmezett ág azt, merre tart a projekt. Az Essentialist jó példa. Stabil kiadásának dokumentációja SM-2-t, jelenlegi fejlesztési ága FSRS-t ír. Az alábbi táblázatban SM-2 szerepel.

## Hat FOSS tanulókártya-alkalmazás összehasonlítása

| Alkalmazás | Ellenőrzött stabil verzió | Platformok | Offline adatok | Ütemező | Szinkronizálás | Anki-költözés és későbbi adatkivitel | Mi futtatható saját szerveren? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 2026. augusztus 5. | Windows, macOS, Linux; külön Android- és iOS-kliensek; AnkiWeb | A telepített kliensekkel helyi gyűjteményből tanulhatsz | FSRS vagy a régi SM-2 | AnkiWeb vagy a hivatalos, saját szerveren futó szinkronizáló | Szöveget, APKG/COLPKG-csomagokat és Mnemosyne-adatbázisokat importál; szöveget vagy választható médiával és ütemezéssel ellátott csomagokat exportál | **Csak szinkronizáló szerver.** Nincs saját AnkiWeb vagy böngészős tanulófelület |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 2023. november 12.; a tároló 2026-ban is aktív volt | Windows, macOS, Linux, Android; korlátozott böngészős ismétlés | Az asztali kliens helyi; Androidon offline ismételhetsz, de nem szerkeszthetsz | Adaptív, 0–5-ös felidézési értékelés | Beépített szinkronizálás asztali vagy grafikus felület nélküli példánnyal | Hivatalosan dokumentált teljes Anki-import egyéni kártyatípusokkal és tanulási adatokkal; a megosztási export nem teljes biztonsági mentés | **Szinkronizálás és korlátozott böngészős ismétlés.** A böngészős szervernek nincsenek biztonsági funkciói |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 2026. augusztus 30. | Windows, macOS, Linux, Android, iOS, HarmonyOS; böngésző Dockerrel | A natív kliensek helyben tárolják a munkaterületet | FSRS | Fizetős hivatalos, végpontok közötti titkosított szinkronizálás vagy fizetős S3/WebDAV-integráció | A natív alkalmazás Markdownt és adatokat importál, és többféle dokumentum- és adatformátumba exportál; dokumentált APKG-import nincs | **Teljes böngészős alkalmazás.** A Docker nem szinkronizál a natív kliensekkel, és egyes import-/exportparancsok hiányoznak |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 2026. szeptember 1. | Web, iOS, Android | Weben IndexedDB; iOS-en SQLite; Androidon Room SQLite felett; a helyi írások sorba állnak a szinkronizáláshoz | FSRS | Szolgáltatói vagy saját telepítésű backend | Saját ZIP-formátuma kártyákat, címkéket, forrásmetaadatokat és hivatkozott médiát visz át, de paklikat, tanulási állapotot, beállításokat és fiókokat nem; nincs APKG-import | **Teljes webes/backend rendszer.** Az éles telepítés AWS-re épül; a saját natív alkalmazásokat külön kell elkészíteni |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 2026. július 31. | Windows, macOS, Linux; telepíthető PWA | Asztalon SQLite; böngészőben IndexedDB; alapértelmezés szerint nincs szükség fiókra, és nincs telemetria | FSRS | Asztali mappaszinkronizálás vagy opcionális titkosított Cloudflare Worker/R2 közvetítő | Az asztali APKG-import az első két mezőt, a paklikat, címkéket, az ütemezés közelítő pillanatképét és képeket olvas be; JSON- és Recall-archívumexport | **Csak titkosított pillanatképek közvetítője.** A PWA-t nem szolgálja ki |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 2025. október 10.; a forráskód fejlesztése 2026-ban is folytatódott | Android APK, macOS DMG, Linux Flatpak; Windows forrásból | Nincs hálózati hozzáférés; a pakli tartalma Markdown | Stabil kiadás: SM-2; alapértelmezett ág: FSRS | Nincs | A Markdown őrzi a kártyatartalmat; a haladást egy mellette lévő rejtett adatbázis tárolja | **Nincs mit szerveren futtatni.** A Markdown-fájlról és a hozzá tartozó adatbázisról együtt készíts mentést |

## 1. Az Anki a legbiztonságosabb alapválasztás

Az Anki a kevésbé látványos részletekben erős. Összetett jegyzettípusokat kezel, sablonokból összetartozó kártyákat generál, a gyűjteménnyel együtt tartja a médiát, és több évnyi ütemezési adatot őriz meg. Ebben az összehasonlításban a stabil asztali kiadás a [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Az újabb 26.09b2 béta jelölésű, ezért nem azt vettem alapul.

Az egyes Anki-alkalmazások forráskódja nem egyformán hozzáférhető. Az [asztali tároló AGPL-3.0-or-later licencű](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), a csomagolt komponensekhez felsorolt kivételekkel. Az [AnkiDroid](https://github.com/ankidroid/Anki-Android) külön nyílt forráskódú Android-projekt. Az AnkiMobile és az AnkiWeb hivatalos termékek, de a forrásuk nincs benne ezekben a tárolókban. Részletesebben erről a [Nyílt forráskódú az Anki?](/blog/is-anki-open-source/) című cikkben olvashatsz.

A telepített kliensek helyben tárolják a gyűjteményeket, így a szokásos ismétlés kapcsolat nélkül is működik. Az AnkiWeb az online felület. Ha az offline működés döntő, a [Működik az Anki offline?](/blog/does-anki-work-offline/) különválasztja, mi marad helyben elérhető, és mi vár a szinkronizálásra.

Az Anki támogatja az [FSRS-t és a régebbi ütemezőjét](https://docs.ankiweb.net/deck-options.html). Ebben a mezőnyben az exportformátumai adják a legerősebb kiindulópontot a költözéshez. A [COLPKG a teljes gyűjteményt tartalmazza az ütemezéssel együtt](https://docs.ankiweb.net/exporting.html), az APKG-exportba pedig ütemezési információkat és médiát is tehetsz a megfelelő beállításokkal. Az Anki szöveget, Anki-csomagokat és Mnemosyne 2.0-adatbázisokat is importál.

A gazdag forráscsomag nem garantál tökéletes importot egy másik rendszerben. A célalkalmazásnak értenie kell a benne lévő sablonokat, kártyagenerálási szabályokat, médiahivatkozásokat és ütemezési mezőket. Egyszerűen több információból dolgozhat, mint egy CSV-fájlnál.

A [hivatalos, saját szerveren futtatható szinkronizáló](https://docs.ankiweb.net/sync-server.html) szándékosan szűk feladatot lát el. Kompatibilis Anki-klienseket szinkronizál; nem ad AnkiWebet, böngészős ismétlést vagy fiókkezelő portált. Alapértelmezés szerint titkosítatlan HTTP-n figyel, az útmutató pedig helyi hálózatot, illetve elé helyezett VPN-t vagy HTTPS-es fordított proxyt javasol. A kliens- és szerververzióknak is kompatibilisnek kell maradniuk.

Válaszd az Ankit, ha a gyűjtemény hű megőrzése, a sablonok, a bővítmények vagy a széles kliensválaszték az első. Akkor keress mást, ha valamilyen konkrét korlát fontosabb, például saját szerveren futó böngészős felületre vagy teljesen nyilvános mobilos forráskódra van szükséged.

## 2. A Mnemosyne a helyi tanulásra összpontosít

A Mnemosyne kifejezetten asztali tanulóeszköz, és ez a használatán is érződik. Nem kapsz mellé tudásbázist vagy felhőplatformot. Helyi adatbázist, hagyományos időközönkénti ismétlést, androidos ismétlőklienst és asztali vagy grafikus felület nélküli gépen is futtatható szinkronizáló szervert ad.

A legújabb stabil kiadás továbbra is a [2023 novemberében megjelent 2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). A tároló 2026-ban is kapott módosításokat, de ettől még nem kerültek bele egy stabil telepítőbe. Próbáld ki a 2.11-et azokon az operációs rendszereken, amelyeket a következő néhány évben használni szeretnél.

A licencet sem lehet egyetlen jelvényből megítélni. A [gyökérkönyvtár licencleírása](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) az openSM2sync számára LGPL v3-at, a Mnemosyne többi részére külön feltételeket ad meg. A [főprogram licence](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) AGPL v3-at ír elő egy kiegészítéssel: a származtatott munkákban a Mnemosyne névnek jól láthatónak kell maradnia, a pontos formáról pedig a karbantartókkal kell egyeztetni. Módosított változat terjesztése előtt olvasd el ezt a szöveget.

Az [Android-klienssel offline is ismételhetsz, de kártyát nem szerkeszthetsz](https://mnemosyne-proj.org/help/android-client). Más eszközök az asztali alkalmazásból indított böngészős ismétlőszervert használhatják, de a hivatalos funkcióoldal figyelmeztet: a szervernek nincsenek biztonsági funkciói. Helyi hálózaton hasznos felület, nyilvános webalkalmazásként viszont nem kiforrott megoldás.

A költözés a Mnemosyne legerősebb érve az Ankinál maradással szemben. A hivatalos funkcióoldal [teljes Anki-importot dokumentál, egyéni kártyatípusokkal és tanulási adatokkal együtt](https://mnemosyne-proj.org/features). A [beépített szinkronizálás](https://mnemosyne-proj.org/help/syncing) egyesíti a kártyákat és a tanulási adatokat, és saját ellenőrzésed alatt álló gépre is irányítható.

A szokásos exportparancs biztonsági mentésként csapda. Kiválasztott kártyák megosztására készült, a tanulási adatokat kihagyja. A teljes rendszer költöztetéséhez vagy helyreállításához a [több gépes használat útmutatója](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) a teljes adatkönyvtár másolását írja elő.

A Mnemosyne itt a legerősebb, kifejezetten tanulásra összpontosító nyílt Anki-alternatíva. Cserébe ritkák a stabil kiadások, korlátozott a mobilos szerkesztés, és a böngészős felületnél gondosan meg kell szabni a hálózati hozzáférést.

## 3. A SiYuan akkor jó, ha a jegyzetek adják a rendszer alapját

A SiYuan az adatvédelmet előtérbe helyező tudáskezelő alkalmazás. A tanulókártyák ugyanabba a blokk- és dokumentummodellbe épülnek, mint a jegyzetek. Ez hasznos, ha a jegyzeteidből lesz az ismétlendő anyag. Ha csak egy ismétlendő kártyasort szeretnél, ehhez képest túl sok mindent kell kezelned.

Az [AGPL-3.0-licencű tároló](https://github.com/siyuan-note/siyuan) hivatkozik a felületre, a kernelre, a mobilalkalmazásokra, az adatrétegre és az FSRS-komponensre. Az itt ellenőrzött stabil kiadás a [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Az asztali és mobilos kliensek helyben tárolják a munkaterületet, és offline is működnek.

A szinkronizálás nem része az ingyenes, helyi tárolásra épülő csomagnak. A [hivatalos árlista](https://b3log.org/siyuan/en/pricing.html) az előfizetéshez végpontok közötti titkosított hivatalos szinkronizálást kínál, a fizetős Pro-funkciók pedig saját S3- vagy WebDAV-tárhely integrációját adják. A projekt arra is figyelmeztet, hogy aktív munkaterületet ne tegyél általános fájlszinkronizáló mappába: a párhuzamos szerkesztések adatsérülést vagy felülírást okozhatnak.

Dockerben valódi böngészős alkalmazás fut, de ettől még nem lesz a telepített alkalmazások szinkronizáló szervere. A [v3.8.2 Docker-dokumentációja](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) szerint az asztali és mobilos kliensek nem csatlakozhatnak hozzá. Dockerben a Markdown-import, valamint a PDF-, HTML- és Word-export is hiányzik. A teljes natív alkalmazásban ezek a parancsok elérhetők, ezért félrevezető lenne az általános funkciólistát egy Dockeres telepítési tervbe átmásolni.

Hivatalos APKG-importálót nem találtam. A SiYuan át tud vinni Markdownt és saját adatformátumokat, de egy Anki-gyűjteményt körültekintőbben kell újraépíteni.

Válaszd a SiYuant, ha a tudásbázis az elsődleges, és a tanulókártyáknak azon belül van helyük. Ha közvetlen Anki-helyettesítőt keresel, a Mnemosyne és az Anki költözési lehetőségei egyértelműbbek.

## 4. A Nibomo több forráskódot ad, több üzemeltetési munkával

Ebben az összehasonlításban a Nibomo teszi nyilvánossá a termék legtöbb részét. Az MIT-licencű monorepo tartalmazza a webalkalmazást, az iOS- és Android-klienseket, a backendet, a hitelesítési szolgáltatást, a szinkronizálást, az adminalkalmazást, az adatbázis-migrációkat és az AWS-infrastruktúrát. Az itt használt stabil kiadás a [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Az alapértelmezett ág későbbi fejlesztéseit nem számítom kiadott funkciónak.

Az [architektúra](/docs/architecture/) offline használatra épül, de az „offline” kliensenként kissé mást jelent. A webalkalmazás elsődleges helyi adattára az IndexedDB. Az iOS SQLite-ot, az Android SQLite feletti Roomot használ. A módosítások először helyben íródnak ki, és szinkronizálás előtt kimenő sorba kerülnek. Ez a kialakítás kezeli a kapcsolat megszakadását; a böngészős tárhelyet nem teszi véglegessé, és nem váltja ki, hogy minden eszközön kipróbáld az alkalmazás offline, teljesen bezárt állapotból történő indítását.

A Nibomo saját ZIP-csomagja tartalomátviteli formátum, nem fiókmentés. A v1.23.0 [csomagsémája](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) az elő- és hátoldali tartalmat, a címkéket, a kártyatípust, a forrásmetaadatokat és a csomag metaadatait viszi át; a hivatkozott média külön kerül a csomagba. Paklistruktúrát, ismétlési előzményeket, FSRS-állapotot, munkaterület-beállításokat és fiókokat nem tartalmaz.

A v1.23.0-ban nincs APKG-importáló. A dokumentált [Anki TXT/CSV-költözési folyamat](/blog/migrate-from-anki-txt-export-open-source-flashcards/) exportált szövegből építi újra a kártyákat, emberi ellenőrzéssel. A sablonok, az ütemezési állapot, a paklistruktúra és a csomagolt média ezen az úton nem kerülnek át automatikusan. Egyszerű szöveges paklinál ésszerű, erősen testreszabott gyűjteménynél rossz választás.

A [saját üzemeltetés útmutatója](/docs/self-hosting/) ugyanolyan egyértelmű. Az éles rendszer AWS CDK-ra épül RDS-sel, Cognitóval, API Gatewayjel és Lambdával, S3-mal és CloudFronttal, titkokkal, riasztásokkal és biztonsági mentésekkel. A Cloudflare DNS, a Resend e-mail és a Sentry konfigurációja az AWS-en kívül van. A Docker Compose a helyi fejlesztést szolgálja; nem ez a támogatott éles telepítési csomag. Aki saját iOS- vagy Android-alkalmazást szeretne, annak ezeket külön kell lefordítania és terjesztenie.

Válaszd a Nibomót, ha a teljes webes, natív és backendforrás birtoklása megéri ezt az üzemeltetési munkát. Válaszd az Ankit vagy a Mnemosynét, ha a meglévő gyűjtemény megőrzése a szigorúbb követelmény.

## 5. A Recall modern, de nézd meg alaposan az importálót

A fő ajánlások közül a Recall a legfiatalabb. Azért került be, mert a [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) verziózott asztali kiadásokat, telepíthető PWA-t, egyértelműen leírt helyi tárolást, FSRS-t, adatexportot és dokumentált, saját üzemeltetésű szinkronizálást kínál.

Az MIT-licencű asztali alkalmazás SQLite-ot, a PWA IndexedDB-t használ. Egyikhez sem kell fiók, és a projekt szerint a telemetria alapértelmezés szerint ki van kapcsolva. Az asztali kiadások Windowsra, macOS-re és Linuxra érhetők el.

Az APKG-importáló hasznos, de a README „ismétlési előzmények” kifejezése többet ígér annál, amit a verziócímkézett megvalósítás tud. A [v1.3.0 importálójának forrása](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) nem olvassa be az Anki ismétlési naplóját. Az aktuális kártyaállapotot, az időközt, az ismétlések és elfelejtések számát, továbbá az FSRS stabilitási és nehézségi értékeit veszi át, ha az Anki tárolta őket. Régebbi, ilyen FSRS-mezők nélküli kártyáknál az SM-2 értékeiből becsüli meg ezeket.

A tartalomátalakításnak is vannak éles korlátai. Az importáló az első két jegyzetmezőt használja elő- és hátoldalként, nem állítja elő újra az Anki jegyzettípusait és sablonjait. A paklineveket és címkéket megtartja. Kinyeri az elterjedt képformátumokat, és átírja a hivatkozásaikat, de a hangot és más médiát kihagyja. Mivel az importáló Tauri-parancs, a közvetlen APKG-költözés asztali funkció, a böngészős PWA-ban nem érhető el.

Ez sokkal több egy egyszerű szöveges újraépítésnél, de nem a gyűjtemény hű átvitele. Nagy költözés előtt próbáld ki a szövegkiegészítéses kártyákat, az egy jegyzetből generált összetartozó kártyákat, a további mezőket, a HTML/CSS-t, a képeket, a hangot, az esedékességeket és az ismétlődő jegyzeteket.

A Recall kétféle szinkronizálást kínál. Az asztali kliens pillanatképet írhat egy Dropbox, Drive vagy más fájlszinkronizáló által kezelt mappába. Az opcionális közvetítő Cloudflare Workert és R2-tárhelyet használ. A verziócímkézett [szinkronizálási terv](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) szerint a kliensek feltöltés előtt AES-GCM-mel titkosítják a pillanatképeket; a közvetítő titkosított adatot lát, kártyaadatot és kulcsot nem. A frissítések optimista párhuzamosság-kezelést használnak, és ütközés esetén egyszer újrapróbálkoznak, de továbbra is teljes pillanatképeket egyesítenek, nem mezőket. Nincs a karbantartó által finanszírozott nyilvános közvetítő: neked kell telepítened és megadnod az URL-jét.

A JSON- és Recall-archívumexport lehetőséget ad az adatok kivitelére. Mielőtt biztonsági mentésnek tekintenéd, állítsd vissza egy üres profilba.

Válaszd a Recallt, ha modern, elsősorban helyben működő asztali/PWA-élményt szeretnél, és elfogadod a fiatal projektet, valamint azt, hogy az importáló a teljes Anki-rendszer helyett egy hasznos pillanatképet őriz meg.

## 6. Az Essentialist paklija könnyen olvasható, a teljes állapot nem

Az Essentialist vállalja itt a legszűkebb feladatot. Minden pakli Markdown-fájl, amelyet megnyithatsz szövegszerkesztőben, verziókezelőben tarthatsz vagy szokásos fájleszközökkel másolhatsz. Az alkalmazás szándékosan nem indít hálózati kéréseket.

A legújabb stabil kiadás a [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Letölthető fájljai között Android-, macOS- és Linux-változatok vannak; Windowson forrásból kell fordítani. A [kiadáshoz tartozó README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) SM-2-t nevez meg ütemezőként.

Az [alapértelmezett ág README-je](https://github.com/essentialist-app/essentialist/blob/main/README.md) már FSRS-t ír, és 2026-ban is módosult a forráskód. Ez hasznos jelzés a fejlesztés irányáról, de nem ok arra, hogy a 2025-ös binárist FSRS-t használó kiadásként tüntessük fel.

A Markdown is kevesebbet fed le, mint elsőre látszik. A kártyaszöveg a látható fájlban, a tanulási előrehaladás viszont egy `.<deck file>.db` nevű rejtett adatbázisban él. Ha a `sample.md` mellől kihagyod a `.sample.md.db` fájlt, a kérdéseket és válaszokat megmented, de a tanulási állapot elvész.

Nincs beépített eszközszinkronizálás vagy szerver. Elhelyezheted a fájlokat saját szinkronizált mappában, de onnantól az ütközések kezelése és a helyreállítás a te feladatod.

Válaszd az Essentialistet, ha az olvasható Markdown és a hálózatmentes működés a cél. Nem kínál zökkenőmentes többeszközös rendszert, és az egyetlen látható fájl nem teljes biztonsági mentés.

## Négy aktív projekt, amelyet érdemes figyelni

Ezek mögött a projektek mögött tényleges 2026-os fejlesztés áll. Azért nem kerültek be a hat fő ajánlás közé, mert egy ajánláshoz több kell érdekes forráskódnál.

| Projekt | Ami már kézzelfogható | Ami még akadályozza a fő listára kerülést |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-forrás, FSRS/SM-2/Leitner ütemezők, Docker-telepítés, szolgáltatói üzemeltetés, CSV-import és adatexport | 2026 júliusában indult; nincs verziózott alkalmazáskiadás. A GitHub-kiadása hangcsomag, nem alkalmazásverzió |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-licencű webalkalmazás FSRS-sel, CSV-importtal, képrészlet-kitakarással és dokumentált Supabase/Vercel-architektúrával | Nincs verziócímkézett kiadás, és a hivatalos dokumentáció még nem határozza meg teljesen az offline működést, az exportot és a saját telepítés helyreállítását |
| [Prep](https://github.com/Zamua/prep-app) | MIT-forrás, FSRS, szolgáltatói használat és dokumentált telepítés a saját szerveren is futtatható celld futtatókörnyezetre | Nincs verziócímkézett kiadás; a saját telepítéshez a celld-t és az objektumtárhelyet is üzemeltetni kell, nem csupán egy önálló tanulókártya-programot telepíteni |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3-licencű Kotlin-mobilalkalmazás, FSRS/SM-2, Android-kiadás és APKG-import sablonokkal és médiával | 2026-ban indult; iOS-re forrásból kell fordítani, és a hivatalos dokumentáció nem ír le általános telefonok közötti szinkronizálást |

Több ismerős név egyszerűbb okból nem teljesíti a feltételeket. A Mochi [nyílt forráskódú tárolója](https://github.com/mochi-cards/open-source) integrációgyűjtemény, nem az alapalkalmazás. A [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) nyílt forráskódú és saját szerveren futtatható, de hivatalos README-je az időközönkénti ismétlést még mindig a „Features coming soon”, azaz hamarosan érkező funkciók között sorolja fel. Az [OpenCards](https://github.com/holgerbrandl/opencards) legutóbbi kiadása a [2017 januári v2.5.1](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), a tárolójában pedig 2018 óta nem változott a kód.

Ha nem feltétel a forráskód elérése, a [tágabb Anki-alternatíva-összehasonlítás](/hu/blog/best-anki-alternatives/) más igényekre választ adó termékeket is bemutat.

## Öt külön rétegben teszteld a költözést

Az „Anki-import” önmagában alig mond valamit. Egy költözés egy rétegben sikerülhet, négy másikban pedig elbukhat.

| Réteg | Mit hasonlíts össze? | A félrevezető sikerjelzés |
| --- | --- | --- |
| Kártyatartalom | Minden mező, szövegkiegészítés-jelölő, címke, különleges karakter és ismétlődő jegyzet | A teljes kártyaszám nagyjából stimmel |
| Struktúra | Jegyzettípusok, sablonok, generált összetartozó kártyák és egymásba ágyazott paklik | Az elő- és hátoldali szöveg megjelent valahol |
| Média | A képek és hangok átmásolódtak, helyben elérhetők, és offline is működnek | Az importáló felismerte a fájlneveket |
| Tanulási állapot | Ismétlési napló, állapot, esedékesség, időköz, elfelejtések és ütemezőparaméterek | Az importált kártyák megvannak, de csendben újként indulnak |
| Adatkivitel és helyreállítás | Dokumentált exportból vagy mentésből másutt újraépíthető ugyanaz a rendszer | Egy olvasható szöveges exportot teljes mentésnek tekintesz |

A valódi gyűjtemény költöztetése előtt készíts szándékosan kényes tesztpaklit. Legyenek benne további mezők, szövegkiegészítések, normál és fordított sablonok, egymásba ágyazott paklik, címkék, képek, hangok és annyi ismétlési előzmény, hogy kiderüljön, megtartotta-e őket a célalkalmazás.

Őrizd meg az érintetlen forrásmentést. Import után külön hasonlítsd össze a jegyzetek, kártyák és médiafájlok számát. Nézd meg az esedékességeket, ne csak az „ütemezés importálva” üzenetnek higgy. Ismételj offline minden használni kívánt eszközön. Utána végezz két eszközön eldobható, egymásnak ellentmondó próbaszerkesztéseket, és figyeld, mit tesz a szinkronizálás.

Használd mindkét rendszert néhány napig. A régi gyűjtemény törlése az utolsó lépés; nem bizonyíték arra, hogy az új működik.

## A saját üzemeltetéshez kipróbált helyreállítás is kell

A fenti termékek nagyon különböző dolgokat értenek saját üzemeltetés alatt:

- Az Anki és a Mnemosyne **szinkronizáló szolgáltatásokat** futtat, a tanulófelület továbbra is a telepített kliens.
- A SiYuan Docker **böngészős alkalmazást** futtat, amelyet a natív kliensek nem használhatnak szinkronizáló szerverként.
- A Recall **titkosított pillanatképeket továbbító közvetítőt** futtat, nem magát a PWA-t.
- A Nibomo **teljes webes és backendrendszert** telepít, a natív alkalmazások továbbra is külön készülnek.
- Az Essentialistnek **nincs szervere**; a saját kezelésedben lévő rendszer a helyi fájlokból áll.

Ha már világos, mit üzemeltetsz, próbáld ki azt a részt is, amelyet az üzemeltetők hajlamosak halogatni:

1. Készíts kártyákat, csatolj médiát, végezz ismétléseket, és szinkronizálj két kliensről.
2. Ments el minden dokumentált adatbázist, objektumtárhelyet, helyi fájlt, titkot és konfigurációs értéket.
3. Állítsd helyre a rendszert üres fiókban, gépen vagy elkülönített telepítésben.
4. Hasonlítsd össze a kártyaszámot, a médiát, az ismétlési előzményeket, az esedékességi állapotot, a bejelentkezést és a kliensek szinkronizálását.
5. Frissítsd a helyreállított példányt, és végezz el még egy ismétlési ciklust.

Ha az újraépítéshez még mindig kell a régi gép, van egy működő szolgáltatásod. Ellenőrzött biztonsági mentésed nincs.

## Gyakori kérdések

### Melyik a legjobb nyílt forráskódú tanulókártya-alkalmazás 2026-ban?

A legtöbb tanulónak az Anki a legjobb alapválasztás. Kiforrott gyűjteménymodellt, FSRS-t, sokféle klienst és a leggazdagabb hivatalos mentési és exportformátumokat kínálja. A megszorítás az, hogy a hivatalos iOS- és webes felületek nem tartoznak a nyílt asztali tárolóhoz, a saját szerver pedig szinkronizálást ad, nem böngészős tanulást.

### Melyik a legjobb nyílt forráskódú Anki-alternatíva?

A Mnemosyne a legrégebb óta bevált, kifejezetten tanulásra összpontosító alternatíva, és hivatalosan dokumentálja az egyéni Anki-kártyatípusok és tanulási adatok importját. A Recall modernebbnek hat, és asztalon közvetlenül importál APKG-fájlokat, de csak az első két jegyzetmezőt alakítja át, az ütemezésből pillanatképet őriz meg, képeket importál, hangot nem, a teljes ismétlési naplót pedig nem viszi át.

### Futtathatom az Ankit saját szerveren?

Igen, a kompatibilis kliensekhez futtathatod az Anki hivatalos szinkronizáló szerverét. Ez viszont nem az AnkiWeb saját szerveres helyettesítője: nincs böngészős tanulófelülete.

### A nyílt forráskód offline működést jelent?

Nem. A nyílt forráskód a licencről és a forrás elérhetőségéről szól. Az offline működés attól függ, hol tárolja a kliens az adatokat, és mely műveletekhez kell szolgáltatás. A fordítottja is igaz: egy alkalmazás helyben tarthatja az adatait anélkül, hogy közzétenné az alapalkalmazás forrását.

### A saját üzemeltetés garantálja az adatok hordozhatóságát?

Nem. Saját üzemeltetésnél azt szabályozod, hol fut a szolgáltatás. A hordozhatóság az exportokon, a teljes mentéseken és a ténylegesen kipróbált helyreállításon múlik. A saját szervereden lévő adatbázist is lehet nehéz költöztetni, és egy olvasható Markdown-pakliból is hiányozhat a mellette tárolt ismétlési állapot.

## Az én ajánlásom

Maradj az **Ankinál**, vagy válaszd azt, hacsak valamelyik korlátja nem okoz valódi problémát. Válaszd a **Mnemosynét** célzott helyi asztali tanuláshoz és bevált Anki-importhoz. Használd a **SiYuant**, ha a tanulókártyáknak egy nagyobb tudásbázisban van a helyük. Fontold meg a **Nibomót**, ha a teljes webes, natív és backendforrás birtoklása megéri az AWS-alapú éles rendszer üzemeltetését. Válaszd a **Recallt** modern, elsősorban helyben működő kliensként, miután kipróbáltad az átalakítás korlátait. Válaszd az **Essentialistet**, ha az egyszerű Markdown és a nulla hálózati hozzáférés fontosabb a szinkronizálásnál.

A legjobb nyílt forráskódú tanulókártya-alkalmazást nem a tároló leghosszabb funkciólistája alapján találod meg. Azt válaszd, amelynek forráskódja, offline adatkezelése, költözési lehetőségei, szinkronizálása, üzemeltetése és helyreállítása illik ahhoz a rendszerhez, amelyért ténylegesen vállalni szeretnéd a felelősséget.
