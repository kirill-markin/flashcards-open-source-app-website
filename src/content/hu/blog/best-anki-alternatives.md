---
title: "Anki-alternatívák 2026-ban: mit őrzöl meg, mit veszítesz és mit nyersz a váltással?"
description: "Hét Anki-alternatíva összehasonlítása: adatmegőrzés költözéskor, offline használat, ütemezés, ár, forráskód és saját üzemeltetés. Mikor biztonságosabb az Ankinál maradni?"
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "Anki-alternatívák"
  - "Anki-alternatíva"
  - "Ankihoz hasonló alkalmazások"
  - "nyílt forráskódú Anki-alternatíva"
  - "ingyenes Anki-alternatívák"
  - "Anki-alternatíva iOS-re"
  - "költözés Ankiról"
---

Egy Anki-import hiba nélkül is lefuthat úgy, hogy közben éppen az vész el, amitől a paklid jól működik. A szöveg átkerül, a kártyák megnyílnak. Aztán észreveszed, hogy eltűnt a CSS, üres az egyik hangmező, minden kártya újnak számít, vagy egy jegyzetből már nem készülnek el a várt irányú kártyák.

Ez az Anki-alternatívák összehasonlításának költséges része. A letisztultabb szerkesztő vagy az olcsóbb csomag előnye már a váltás előtt látszik. A sablonokkal, az ismétlési előzményekkel, az esedékességekkel, a bővítményekkel, az offline médiahasználattal és a későbbi exportálással kapcsolatos gondok sokszor csak akkor derülnek ki, amikor már megtörtént a baj.

Ez az összehasonlítás ebből indul ki. Hét, az Ankihoz hasonló alkalmazást vesz sorra: melyik mit tud átvenni egy meglévő gyűjteményből, mi változik az import után, és mikor biztonságosabb az Ankinál maradni.

> **Szerzői érdekeltség:** Kirill Markin vagyok, és az alább bemutatott termékek egyikét, a [Nibomót](https://nibomo.com/) fejlesztem. A nyílt forráskódja, a saját üzemeltetés lehetősége és az AI-ügynökökkel használható munkafolyamatai miatt vettem fel a listára. Nem tekintem alapértelmezett győztesnek: nincs közvetlen `.apkg`-importálója, az Ankiról való költözés adatvesztéssel jár, a saját telepítés fenntartása pedig komoly infrastruktúrás munkával jár.

**A tények ellenőrzésének dátuma:** 2026. augusztus 28. Az árak az ezen a napon elérhető nyilvános amerikai vagy feltüntetett helyi árak. Az adók, a régiók, az oktatási kedvezmények és az alkalmazásbolti számlázás módosíthatják az összeget.

![Egy órás azt ellenőrzi, hogy egy régi, bevált zsebóra szerkezete beleillik-e egy másik tokba](/blog/best-anki-alternatives.png)

## A rövid válasz, mielőtt bármit átköltöztetsz

Alapesetben maradj az Ankinál. Akkor válts, ha egy másik alkalmazás megszüntet egy olyan visszatérő problémát, amelynek a megoldásáért megéri végigcsinálni a költözést.

Három termék fogad Anki-csomagokat tanulási adatokkal együtt, de mindegyik mást ígér:

- A **Mnemosyne** dokumentációja teljes Anki-importot ír le, egyéni kártyatípusokkal és tanulási adatokkal. Ez áll a legközelebb a hagyományos, helyben futó, nyílt forráskódú asztali munkafolyamathoz, bár natív iOS-alkalmazása nincs.
- A **Mochi** az ismétlési előzményekkel együtt importálja az `.apkg`-fájlokat. A HTML-t Markdownná alakítja, a CSS-t és a JavaScriptet eltávolítja, az Anki négy értékelőgombja helyett pedig a Remembered (emlékeztem) és a Forgot (elfelejtettem) lehetőséget kínálja.
- A **RemNote** importálja az `.apkg`-fájlokat, a legtöbb jegyzettípust és az ismétlési előzményeket. A jelenlegi útmutatója viszont azt is írja, hogy az importált kártyák külön **Need to Learn** (megtanulandó) sorba kerülnek. Az „ismétlési előzmények importálva” tehát nem azt jelenti, hogy „a mai Anki-sor pontosan átmásolva”.

A másik négy alkalmazásnál a tartalmat építed újra, nem a gyűjteményt költözteted át:

- A **Quizlet** nyilvános kártyakészletekhez, osztályokhoz, játékokhoz és irányított gyakorláshoz hasznos.
- A **Brainscape** egyszerűbb ismétlési folyamatot kínál a csoportoknak: a tanulók 1-től 5-ig értékelik, mennyire biztosak a válaszukban.
- A **SuperMemo** esetében a szolgáltatás saját módszerére és tanfolyamkatalógusára váltasz.
- A **Nibomo** MIT-licencű webes és natív klienseket, saját üzemeltetésű backendet, API- és MCP-hozzáférést kínál. Az ellenőrzéssel kiegészített TXT- vagy CSV-alapú munkafolyamata nem őrzi meg az Anki tanulási állapotát.

Ha a kártyáid a pontos megjelenítésre, bővítményekre vagy a jelenlegi ismétlési sorra támaszkodnak, az Ankinál maradni nem határozatlanság. Ez a válasz.

## Először vedd számba, mi van valójában az Anki-gyűjteményedben

A „pakli” nem egyetlen, mindenestül átvihető egység. Mielőtt termékeket hasonlítasz össze, válaszd szét, mit kellene átköltöztetned.

| A gyűjtemény része | Mit tud az Anki a csomagba tenni? | Mit kell a célalkalmazásnak kifejezetten támogatnia? |
| --- | --- | --- |
| **Jegyzettartalom** | Szövegmezők és tárolt HTML | Mezők megfeleltetése, szövegkiegészítéses kártyák, nem latin betűs szöveg, kód és sortörések |
| **Kártyagenerálás** | Jegyzettípusok és kártyasablonok | Normál és fordított irányú kártyák, egyéni mezők, CSS és JavaScript működése |
| **Média** | Helyi képek, hangok és más fájlok, ha az **Include media** (média hozzáadása) be van kapcsolva | Fájlok kinyerése, hivatkozások, támogatott formátumok és eszközök közötti szinkronizálás |
| **Rendszerezés** | Paklik, alpaklik, címkék és opcionálisan paklibeállítások | Hierarchia, címkék jelentése, beállítások és a tanulandó részhalmazok |
| **Tanulási állapot** | Ütemezési információk és ismétlési előzmények, ha ezeket is exportálod | Esedékességek, időközök, a már tanult kártyák elfelejtése és az adatok átalakítása a célalkalmazás ütemezőjéhez |
| **A munkafolyamatot támogató kód** | A bővítmények nem kerülnek bele a paklicsomagba | A kártyaböngésző eszközeinek, a tömeges szerkesztésnek, a jegyzetgenerálásnak és más bővítményfunkcióknak a pótlása |

Az [Anki exportálási kézikönyve](https://docs.ankiweb.net/exporting.html) mindezeket a csomagolási lehetőségeket dokumentálja. Egy szöveges importáló csak az első sort látja, esetleg a címkéket is. Egy közvetlen `.apkg`-importáló többet is láthat, de minden termék maga dönti el, mit alakít át és mit dob el.

Ezért az „importál Ankiról” túl homályos ahhoz, hogy erre alapozd a váltást. Három külön kérdést tegyél fel:

1. **Ugyanazt jelenti még a kártya?** Ellenőrizd a mezőket, a generált kártyák irányát, a szövegkiegészítéseket, a médiát és a megjelenítést.
2. **Tudja a célalkalmazás, mit tanultam már meg?** Ellenőrizd az ismétlési eseményeket, az aktuális állapotot, az esedékességeket és az első tényleges ismétlési sort.
3. **El tudok majd költözni innen is?** Exportálj a célalkalmazásból, és nézd meg, mit tartalmaz valójában az exportformátum.

Egy importáló az első feltételt teljesítheti úgy is, hogy a másik kettőnek nem felel meg.

## Mi marad meg a költözés után?

| Termék | Importálás Ankiról | Tanulási állapot | A legfontosabb lehetséges veszteség, amit tesztelni kell |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Közvetlen `.apkg`-import](https://help.remnote.com/en/articles/6751471-importing-from-anki) a legtöbb jegyzettípushoz, médiához és ismétlési előzményhez | Az előzmények megérkeznek, de az importált kártyák a RemNote külön **Need to Learn** sorába kerülnek | Összetett CSS, egyéni JavaScript, bizonyos generált beszédhangok és átnevezett képkitakarásos mezők |
| [Mochi](https://mochi.cards/) | [Közvetlen `.apkg`-import](https://mochi.cards/docs/import-and-export/importing/) az ismétlési előzményekkel együtt | Az előzmények megérkeznek; a dokumentáció nem ígér az Ankival azonos sort vagy esedékességeket | A HTML Markdownná alakul; a CSS és a JavaScript eltűnik; a későbbi értékelés kétértékű |
| [Mnemosyne](https://mnemosyne-proj.org/) | A projekt [teljes Anki-importot](https://mnemosyne-proj.org/features) dokumentál egyéni kártyatípusokkal és tanulási adatokkal | A tanulási adatok egy másik ütemezőbe kerülnek | A sablonok pontos működését, az átalakított esedékességeket és a kártyák megjelenítését itt is tesztelni kell |
| [Quizlet](https://quizlet.com/) | [Kifejezések és definíciók beillesztése](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Nem kerül át tanulási állapot az Ankiból | Jegyzettípusok, sablonok, paklik, médiaszerkezet és minden ütemezési adat |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX vagy ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Nem kerül át tanulási állapot az Ankiból | Sablonok, bővítmények, médiaszabályok és minden ütemezési adat |
| [SuperMemo](https://www.supermemo.com/) | [Elválasztójelekkel tagolt kérdés-válasz sorok beillesztése](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), egyszerre legfeljebb 100 | Nem kerül át tanulási állapot az Ankiból | A gyűjtemény szerkezete, média, sablonok és minden ütemezési adat |
| [Nibomo](https://nibomo.com/) | Ellenőrzött, AI-segítséggel készülő kártyavázlatok Anki TXT- vagy CSV-exportból | Nem kerül át tanulási állapot az Ankiból | Nincs `.apkg`-támogatás; a sablonok, a média hű átvitele, a paklihierarchia és minden ütemezési adat elvész |

## Ár, offline használat, ütemezés és saját kézben tartott rendszer

| Termék | Ár, ellenőrizve: 2026. augusztus 28. | Az offline használat korlátai | Ütemező | Forráskód és saját üzemeltetés |
| --- | --- | --- | --- | --- |
| **RemNote** | [Ingyenes; Pro: havi 8 USD, évi 96 USD egy összegben számlázva](https://www.remnote.com/pricing) | A telepített alkalmazásokban bejelentkezés után offline is lehet szerkeszteni és ismételni. Az asztali verzió a tudásbázis összes médiafájlját tárolja; a mobilalkalmazás csak néhány nemrég használt képet gyorsítótáraz. A webes verzióhoz nyitva maradt böngészőlap kell. | [Anki SM-2 vagy béta FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Zárt forráskódú alapalkalmazás; nincs dokumentált, támogatott saját üzemeltetési mód |
| **Mochi** | [Offline ingyenes; Pro szinkronizálás: havi 5 USD](https://mochi.cards/#pricing-section) | A telepített alkalmazások fiók nélkül, teljesen offline működnek. A böngésző tárhelye törlődhet. | [A Mochi saját ütemezője vagy FSRS](https://mochi.cards/docs/reviewing/fsrs/), mindkettő Remembered / Forgot értékeléssel | Zárt forráskódú alapalkalmazás; a nyilvános repók integrációkat tartalmaznak, nem saját szerveren futtatható alkalmazást |
| **Mnemosyne** | Ingyenes | [Helyi asztali használat és offline ismétlés Androidon](https://mnemosyne-proj.org/download-mnemosyne.php); Androidon nem lehet szerkeszteni. Nincs natív iOS-alkalmazás. | Adaptív ütemezés 0–5-ös felidézési értékelés alapján | Komponensenként eltérő forráskódlicencek; saját szinkronszerver asztali vagy grafikus felület nélküli gépen |
| **Quizlet** | Az alaphasználat ingyenes; [Plus: évi 35,99 USD, Plus Unlimited: évi 44,99 USD](https://quizlet.com/upgrade?source=signup) | A letöltött készletek offline is használhatók az iOS- és Android-alkalmazás Flashcards és Match módjában. | [Időközönkénti ismétlés a weben](https://quizlet.com/features/spaced-repetition) legalább 100 kifejezést tartalmazó készletekhez; a mobilos változatot továbbra is hamarosan érkezőként jelölik. A Learn külön adaptív gyakorlás. | Zárt forráskódú, szolgáltatónál futó rendszer; nincs támogatott saját üzemeltetési mód |
| **Brainscape** | [Ingyenes; Pro: havi 7,99 USD éves számlázással](https://www.brainscape.com/pricing) | [A mobilalkalmazás offline is megőrizheti a munkát, majd később szinkronizálhatja a korábban letöltött osztályokat](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); a dokumentáció nem ígér teljes helyi könyvtárat. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), 1–5-ös értékeléssel | Zárt forráskódú, szolgáltatónál futó rendszer; nincs támogatott saját üzemeltetési mód |
| **SuperMemo** | Ingyenes fiók korlátozásokkal; [havi 35,99 PLN vagy évi 359 PLN](https://www.supermemo.com/en/premium-subscription) | A mobilra letöltött tanfolyamok offline működnek; a szerkesztés, az AI, a keresés, a felvételek és a statisztikák nem. | [A SuperMemo saját, zárt módszere](https://www.supermemo.com/en/supermemo-method) | Zárt forráskódú, szolgáltatónál futó rendszer; nincs támogatott saját üzemeltetési mód |
| **Nibomo** | [A szolgáltatónál futó alapfunkciók a béta alatt ingyenesek; a saját üzemeltetéshez a szoftver ingyenes](/hu/pricing/), az infrastruktúra költségeit te fizeted | A natív alkalmazások online bejelentkezés és a munkaterület első letöltése után helyben írják az adatokat; a távoli médiának már a gyorsítótárban kell lennie. | [FSRS](/docs/architecture/#scheduling) | MIT; a támogatott éles telepítés egy AWS-központú teljes rendszer |

Ezek a táblázatok nem pontozólapok. Egy közvetlen importáló minden más funkciónál fontosabb lehet, ha 30 000, régóta tanult kártyád van. Egy natív iPhone-alkalmazás eldöntheti a kérdést, ha azon a készüléken ismételsz. A forráskódhoz való hozzáférés akkor számít, ha te vagy valaki, akiben megbízol, karban is tartja a kódot.

Mindegyik terméket elkezdheted ingyen használni, de az ingyenes Anki-alternatívákra való költözésnek is van ára. Az előfizetési díjat könnyű kiszámolni. A sablonok újraépítése, a média ellenőrzése és a tanulási előzmények újbóli felépítése gyakran többe kerül.

## RemNote: kártyák összekapcsolt jegyzetekben

A RemNote megváltoztatja, honnan származnak a kártyák. Nem az előadásjegyzetek mellett tartasz fenn egy külön paklit, hanem vázlatban, dokumentumban vagy PDF-feldolgozás közben készíted el őket. Ez valódi ok lehet az Anki elhagyására, ha már sok időt visz el a jegyzetelő- és a kártyaalkalmazás közötti másolgatás.

Sok mindent át tud venni, de érdemes pontosan megnézni, mi történik az ismétlési sorral. A RemNote [jelenlegi Anki-importálási útmutatója](https://help.remnote.com/en/articles/6751471-importing-from-anki) azt kéri, hogy az `.apkg`-export tartalmazza az ütemezést, a paklibeállításokat és a médiát. Importálja az ismétlési előzményeket és a legtöbb jegyzettípust, köztük az alap-, a szövegkiegészítéses és a gyakori képkitakarásos kártyákat.

Ugyanez az útmutató azt is írja, hogy az újonnan importált kártyák külön **Need to Learn** sorba kerülnek. Vagyis az előzmények rendelkezésre állnak a RemNote-ban, de a dokumentáció nem ígéri, hogy a jelenlegi Anki-esedékességi sor változatlanul megjelenik. Az összetett CSS is elvész, az egyéni JavaScript nem támogatott, bizonyos, használat közben generált szövegfelolvasások nem működnek, a képkitakarásos import pedig az elvárt jegyzet- és mezőnevektől függ.

Próbálj ki egy reprezentatív paklit, és ellenőrizd a kártyákat és az első ismétlési sort is. A jól kinéző import csak a próba fele.

Az asztali és mobilalkalmazások telepítés és bejelentkezés után offline is működnek. Az [offline útmutató](https://help.remnote.com/en/articles/6752029-offline-mode) fontos különbséget tesz a médiánál: az asztali verzió a tudásbázis összes képét és PDF-jét tárolja, a mobilalkalmazás viszont csak néhány nemrég használt képet gyorsítótáraz. A webalkalmazás egy már megnyitott böngészőlapon tovább működhet, de offline, teljesen bezárt állapotból nem indítható el.

Akkor válaszd a RemNote-ot, ha az összekapcsolt jegyzetek miatt megéri átalakítani a gyűjteményed működését. Maradj az Ankinál, ha a kártyasablonok és a bővítmények a rendszered alapját adják, nem pusztán kiegészítik azt.

## Mochi: helyi Markdown és teljes, saját formátumú export

A Mochi egyszerűbb költözési cél azoknak, akik helyi adatokat, Markdown-alapú kártyákat és kevesebb kezelőelemet szeretnének a képernyőn. Telepíthető alkalmazásai minden fő asztali és mobilplatformon futnak, és [fiók nélkül, teljesen offline is használhatók](https://mochi.cards/docs/getting-started/download-and-install/). A szinkronizálás fizetős: havi 5 USD.

A közvetlen Anki-importáló átviszi az ismétlési előzményeket, amivel a Mochi jóval a csak szöveget fogadó lehetőségek előtt jár. Az átalakítás leírása is szokatlanul egyértelmű: a Mochi eltávolítja a CSS-t és a JavaScriptet, a HTML-t pedig Markdownná alakítja. Ez akkor működik jól, ha a jelentést a szöveg és a szokásos mellékletek hordozzák. Ha a sablon hordozza a jelentést, ez figyelmeztető jel.

A Mochi már két ütemezőt kínál. Továbbra is a saját algoritmusa az alapértelmezett, de az [FSRS bekapcsolható](https://mochi.cards/docs/reviewing/fsrs/) a Mochiban elért tanulási eredmények lenullázása nélkül. Az FSRS a Mochiban rendelkezésre álló ismétlési előzményekből számítja ki a kártyák állapotát. Az értékelés FSRS mellett is kétértékű marad: Remembered, azaz emlékeztem, vagy Forgot, azaz elfelejtettem. Azok az Anki-felhasználók tehát más napi ritmusra számíthatnak, akik a Hard és az Easy értékelést külön jelzésként használják.

Az adatok exportálásának lehetőségei világosabbak, mint a legtöbb zárt forráskódú alkalmazásban. A saját [`.mochi`-export](https://mochi.cards/docs/import-and-export/exporting/) tartalmazza a kártyákat, sablonokat, mellékleteket, címkéket, a pakliszerkezetet és az ismétlési előzményeket. A Markdown és a CSV máshol könnyebben megvizsgálható, de az ismétlési előzményeket és más metaadatokat kihagyja.

A Mochi nyilvános GitHub-repói [integrációkat és kapcsolódó eszközöket](https://github.com/mochi-cards/open-source) tartalmaznak, nem magát az alapalkalmazást vagy egy támogatott szinkronszervert. Az offline használat és a hordozhatóság miatt válaszd; a forráskód felett nem kapsz irányítást.

## Mnemosyne: a nyílt forráskódú asztali út

A Mnemosyne áll a legközelebb a hagyományos „program és helyi adatbázis” felálláshoz. A jelenlegi kiadás Windows, macOS és Linux rendszeren fut, az offline ismétléshez pedig Android-kliens is van. A funkciókat bemutató oldal sokféle tartalmat kezelő kártyákat, hierarchikus címkéket, bővítményeket, 0–5-ös értékelési skálát és teljes Anki-importot dokumentál, egyéni kártyatípusokkal és tanulási adatokkal.

A listán ez a legközvetlenebb nyílt forráskódú költözési út, ha úgy hagynád el az Ankit, hogy nem költözöl át egy nagy jegyzetrendszerbe vagy felhőszolgáltatásba. Van [beépített szinkronszervere](https://mnemosyne-proj.org/help/syncing) is, amely asztali vagy grafikus felület nélküli gépen futhat, és több kliens tanulási adatait egyesítheti.

A korlátok is hozzátartoznak a döntéshez. Az Android-kliensben [nem lehet kártyákat szerkeszteni](https://mnemosyne-proj.org/help/android-client). Az iOS-felhasználók egy másik gépen futó, böngészős hozzáférést adó szerveren keresztül ismételhetnek, és a szerver hivatalos funkcióoldala figyelmeztet, hogy nincsenek benne biztonsági funkciók. A saját szinkronizálás azt is jelenti, hogy neked kell elérhetően tartanod a szervert, beállítanod a hálózatot és biztonsági mentést készítened az adatkönyvtárról.

A licencelés pontosabb leírást kíván egy egyszerű „GPL” címkénél: a [projekt licencfájlja](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) komponensenként eltérő feltételekre mutat. Az [alaprendszer licence](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) AGPL v3, kiegészítő név- és szerzőmegjelölési kikötéssel, az [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) pedig LGPL v3-at használ. Olvasd el ezeket a fájlokat, ha módosítani vagy továbbterjeszteni szeretnéd a szoftvert.

## Quizlet: tanórai használatra válts, ne a gyűjtemény hű átviteléért

A Quizlet más feladatban erős. A nyilvános kártyakészleteket, a tanárok által létrehozott osztályokat, a megosztást, a Match, Test és Learn módot, valamint a csoportos feladatokat könnyebb bevezetni egy osztályban, mint egy testre szabott Anki-profilt.

A költözés során csak egyszerű szöveget vihetsz át. A Quizlet a beillesztett sorokból kifejezéseket és definíciókat készít, de nem olvas `.apkg`-t, és nem építi újra a jegyzettípusokat, sablonokat, ütemezést vagy ismétlési előzményeket. A szerzők [kimásolt szövegként exportálhatják saját készleteiket](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), képek nélkül; más felhasználóktól másolt készleteket nem lehet exportálni. Ez a tartalom hordozhatósága, nem a gyűjteményé.

A Quizlet ütemezése változóban van. Új [Spaced Repetition](https://quizlet.com/features/spaced-repetition) funkciója weben automatikusan bekapcsol a legalább 100 kifejezést tartalmazó készleteknél, és Repeat, Hard, Okay, illetve Easy értékelést használ. A Quizlet továbbra is hamarosan érkezőként jelöli a mobilos támogatást. A Learn továbbra is külön adaptív gyakorlási mód, amelynek használati korlátai a fizetős csomagtól függnek.

Az offline használat is a mobilalkalmazásokat jelenti, nem a weboldalt. A Quizlet automatikusan elment nyolc nemrég használt készletet, és továbbiakat is letölthetsz; a [Flashcards és a Match offline is működik](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), majd a kapcsolat helyreállásakor szinkronizálja a haladást.

Akkor költözz ide, ha a tananyag megosztása és a tanórai használat a cél. Egy régóta működő személyes ütemezést pusztán ezekért a funkciókért újraépíteni általában rossz csere.

## Brainscape: kevesebb ütemezési döntés, kevesebb átvitt adat

A Brainscape arra kér, hogy 1-től 5-ig értékeld, mennyire vagy biztos a válaszodban, és ennek alapján veszi elő hamarabb a gyengébben tudott kártyákat. A teljes képlet nem nyilvános, de ezt a használati módot könnyű megtanítani egy osztálynak.

CSV-, TXT-, XLSX- és ODS-fájlokat fogad. Ez kényelmes az előlap-hátlap típusú kártyáknál, de azt jelenti, hogy a sablonok, bővítmények, médiaszabályok és az Anki tanulási adatai nem költöznek át. A személyes biztonsági mentés exportálása Pro funkció; az így készült fájlok táblázatkezelőben megnyithatók és később újra importálhatók.

A Brainscape jelenlegi súgóközpontja szerint a weboldal és a mobilalkalmazások már ugyanazokat az alapvető keresési, létrehozási, megosztási és tanulási funkciókat kínálják. Leírja az offline mobilhasználatot, a kézi újraszinkronizálást és az eszközre már letöltött osztályok frissítését is. Ezek alapján az offline munka után vissza lehet kapcsolódni és szinkronizálni, de a dokumentáció nem ígéri, hogy a fiók teljes tartalma helyben is elérhető.

A személyes paklik exportálása továbbra is [Pro funkció](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Nincs hivatalosan kiadott forráskód vagy saját üzemeltetési lehetőség.

A Brainscape-et akkor érdemes mérlegelni, ha az Anki túl sok beállítást kíván azoktól, akiknek tanulniuk kellene. Annak, aki már jól használja ezeket a beállításokat, nem jó menekülőút.

## SuperMemo: válaszd a módszert, és fogadd el az újrakezdést

A jelenlegi SuperMemo.com szolgáltatás weben, iOS-en és Androidon elérhető nyelvtanulási platform, amely a SuperMemo saját, zárt ütemezési módszerére épül. Nem azonos azzal a régi Windows-alkalmazással, amelyet a régebbi SuperMemo-felhasználók ismerhetnek.

Itt módszert és katalógust választasz, nem zökkenőmentes Anki-költözést. A SuperMemo támogatja a [tömeges létrehozást elválasztójelekkel tagolt kérdés-válasz sorok beillesztésével](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), importálásonként legfeljebb 100 kártyával. Nem találtam jelenlegi hivatalos `.apkg`-importálót vagy felhasználói exportálási lehetőséget a szolgáltatónál futó rendszerhez. A sablonok, bővítmények, a médiaszerkezet és az ismétlési előzmények ezért ezen a dokumentált úton nem vihetők át.

A letöltött tanfolyamok a mobilalkalmazásokban offline is tanulhatók. Az [offline útmutató](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) kizárja az AI-funkciókat, a MemoCards hozzáadását, a keresést, a felvételeket, a statisztikákat és a tanfolyamszerkesztőt, ezért még a kapcsolat bontása előtt készítsd elő az anyagot és szinkronizálj.

Akkor válaszd a SuperMemót, ha annyira szeretnéd a saját módszerét vagy tanfolyamkatalógusát, hogy megérje új ütemezést kezdened. Ha a meglévő ütemezés megőrzése az elsődleges, nem a te problémádat oldja meg.

## Nibomo: a teljes rendszer forráskódja, a leggyengébb Anki-importtal

A Nibomónál a rendszer nagy részét saját kézben tarthatod. Az [MIT-licencű repó](https://github.com/kirill-markin/flashcards-open-source-app) tartalmazza a webalkalmazást, az iOS- és Android-klienseket, a backendet, az offline szinkronizálást, az infrastruktúrát, a [nyilvános API-t](/docs/api/) és az [MCP-szervert](/docs/mcp-connector/). Az ismétléseket [FSRS](/docs/architecture/#scheduling) ütemezi. A webes, iOS- és Android-kliensek először helyben írják az adatokat, a változtatásokat egy kimenő sorba teszik, majd újracsatlakozás után szinkronizálnak.

Ettől még nem lesz Anki-kompatibilis. A Nibomo nem tud `.apkg`- vagy `.colpkg`-fájlokat olvasni. A támogatott [Anki TXT-költözés](/blog/migrate-from-anki-txt-export-open-source-flashcards/) ellenőrzéssel kiegészített, AI-segítséggel végzett vázlatkészítési folyamat, főként szöveges kártyákhoz. Nem őrzi meg a sablonokat, bővítményeket, paklihierarchiát, esedékességeket, időközöket vagy ismétlési eseményeket. A TXT-fájl médiahivatkozásai nem médiafájlok, ezért a sok médiát tartalmazó paklikat külön újra kell építeni és ellenőrizni.

A Nibomo saját `flashcards.zip` csomagja is szűkebb körű egy biztonsági mentésnél. Kártyákat, címkéket és kapcsolódó médiát mozgat Nibomo-munkaterületek között. Nem viszi át az ismétlési előzményeket, az FSRS állapotát, a teljes pakliszerkezeteket, a munkaterület beállításait vagy a fiókokat.

A szolgáltatónál futó alapfunkciók [a béta alatt ingyenesek](/hu/pricing/). Az éles rendszer saját üzemeltetése nem egyparancsos Docker-telepítés: a [saját üzemeltetési útmutató](/docs/self-hosting/) AWS CDK-t használ, és AWS-szolgáltatásokat, valamint Cloudflare-t, Resendet, Sentryt, titkos hozzáférési adatokat, migrációkat, biztonsági mentéseket, visszaállításokat és frissítéseket igényel. A Docker Compose a fejlesztési környezethez való, nem a támogatott éles telepítéshez.

Akkor használd a Nibomót, ha a teljes forráskód és az üzemeltető által irányított backend miatt váltanál, és a kártyáid elég egyszerűek a biztonságos újraépítéshez. [Nyisd meg a szolgáltatónál futó alkalmazást](https://app.nibomo.com/), és próbálj ki egy kis, ideiglenes paklit. Maradj az Ankinál — vagy teszteld a RemNote-ot, a Mochit vagy a Mnemosyne-t —, ha a tanulási állapot hű megőrzése az elsődleges.

## Melyik Anki-alternatíva működik iOS-en kellemetlen költözési meglepetés nélkül?

Az „Anki-alternatíva iOS-re” két külön dolgot jelenthet: natív iPhone-alkalmazást, vagy az [AnkiMobile egyszeri, 24,99 USD-s megvásárlásának](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387) kiváltását.

A RemNote, a Mochi, a Quizlet, a Brainscape, a SuperMemo és a Nibomo is rendelkezik iOS-alkalmazással. A Mnemosyne nem. A költözés kérdése ettől még nyitva marad:

- A **Mochi** többet őriz meg a csak szöveget fogadó iOS-es lehetőségeknél: importálja az `.apkg` ismétlési előzményeit, Markdown-átalakítással és kétértékű értékeléssel.
- A **RemNote** szintén importálja az `.apkg` ismétlési előzményeit, de teszteld a **Need to Learn** sorát, ne feltételezd, hogy a mai Anki-ütemezés megmarad.
- A **Quizlet** jól használható a tananyag osztályon belüli megosztására, de az Ankiról csak szöveget vesz át, és az új, időközönkénti ismétlésre épülő funkciója mobilon még nem érhető el.
- A **Nibomo** hozzáférhető forráskódot és natív iOS-klienst kínál, de az Ankiról való költözés lenullázza a tanulási állapotot.
- A **Brainscape** és a **SuperMemo** akkor indokolt, ha az ismétlési módszerük megéri a kártyák és az ütemezés újraépítését.

Mielőtt az ára miatt elhagyod az AnkiMobile-t, vesd össze az egyszeri díjat az előfizetés költségével és a költözés javítgatására fordított órákkal. Egy egyszer megvásárolt alkalmazás olcsóbb lehet, mint egy ingyenes, amely egy régóta működő gyűjteményből kézi munkát igénylő projektet csinál.

## Mikor biztonságosabb az Ankinál maradni?

A maradás is döntés, nem annak a jele, hogy nem tudsz valami újabbat választani. Maradj az Ankinál, ha az alábbiak bármelyike igaz:

- a gyűjteményed egyéni sablonoktól, CSS-től, JavaScripttől vagy bővítményektől függ;
- az Image Occlusion (képkitakarás), a hang vagy más média nélkül elvész a kártya lényegi tartalma;
- egy jegyzet többféle irányú kártyát generál, amelyeknek összekapcsolva kell maradniuk;
- az évek alatt felgyűlt ismétlési előzmények és a jelenlegi esedékességek többet érnek egy új szerkesztőnél;
- olyan asztali munkafolyamatra vagy platformkombinációra támaszkodsz, amelyet az alternatíva nem kínál;
- az új alkalmazás offline módja csak olyan felületen működik, amelyet nem fogsz használni;
- elméletben szeretnél saját üzemeltetést, de nem akarsz szervert működtetni, védeni, menteni és frissíteni;
- az alternatíva a letisztultabb kinézeten túl nem old meg visszatérő problémát.

Az Anki továbbra is kiforrott bővítménykínálatot, rugalmas jegyzet- és kártyasablonokat, FSRS-t és a régebbi ütemezés beállításait, helyben telepített klienseket, valamint a gyűjteményt hordozni képes csomagformátumokat kínál. A fenti termékek egyike sem adja vissza mindezt együtt.

Ha kifejezetten azt hasonlítanád össze, hogy a rendszer mely részei tarthatók saját kézben, olvasd el a [nyílt forráskódú tanulókártya-alkalmazásokról szóló útmutatót](/blog/best-open-source-flashcard-apps-2026/). Ha az offline működés dönt, az [offline tanulókártya-alkalmazások összehasonlítása](/blog/best-offline-flashcards-app/) külön tárgyalja a telepített alkalmazásokat, a gyorsítótárazott tartalmat és a böngészőlapokat.

## Költözési ellenőrzőlista, amelynek a végén még mondhatsz nemet

Ne a teljes gyűjteménnyel kezdj. Olyan próbát állíts össze, amely meg is bukhat.

1. **Készíts helyreállítási csomagot.** Exportálj egy `.colpkg`-t a médiával együtt, tárold az Anki-profilon kívül, és egy második példányt is őrizz meg máshol.
2. **Válaszd a problémás paklit.** Legyenek benne szövegkiegészítések, egyéni mezők, normál és fordított irányú kártyák, egymásba ágyazott paklik, címkék, képek, hangok és elég ismétlési előzmény ahhoz, hogy látszódjon az ütemezés átalakítása.
3. **A célalkalmazás által ténylegesen támogatott formátumot exportáld.** Közvetlen importálóhoz használj `.apkg`-t ütemezéssel, paklibeállításokkal és médiával. A Notes in Plain Text (jegyzetek egyszerű szövegként) lehetőséget csak akkor válaszd, ha elfogadod, hogy csupán a tartalmat építed újra.
4. **Rögzítsd a kiindulási állapotot.** Jegyezd fel a jegyzetek és kártyák számát, a címke- és paklineveket, a médiafájlok számát, néhány esedékességet és időközt, valamint azt, hogy az egyes jegyzettípusokból várhatóan hány kártya keletkezik.
5. **Ideiglenes helyre importálj.** Ne írd felül az eredeti profilt, és az első próbát ne egyesítsd a célalkalmazás végleges könyvtárával.
6. **Külön ellenőrizd a tartalmat és a tanulási állapotot.** A helyes előlap és hátlap nem bizonyítja, hogy a szövegkiegészítések, a média, az egy jegyzetből származó testvérkártyák, az ismétlési előzmények vagy a következő esedékesség megmaradtak.
7. **Minden ténylegesen használt eszközön indítsd el offline, teljesen bezárt állapotból.** Ismételj, szerkessz, zárd be teljesen az alkalmazást, nyisd meg újra kapcsolat nélkül, majd csatlakozz vissza, és ellenőrizd egy másik eszközön is.
8. **Figyeld meg a sort, mielőtt eltérne a két rendszerben.** Hasonlítsd össze az első esedékes kártyákat és néhány időközt, mielőtt ugyanazokat az éles kártyákat mindkét alkalmazásban értékelnéd. A másik alkalmazásban végzett első ismétlés után a két ütemezés már független.
9. **A végleges váltás előtt teszteld az exportálást is.** Exportálj a célalkalmazásból, és nézd meg, mit tudnál visszanyerni, ha jövőre otthagynád.
10. **Tartsd meg az Ankit és az érintetlen biztonsági mentést.** Egyiket se töröld addig, amíg az új alkalmazás nem bizonyított a mindennapi használatban, és tudatosan el nem fogadtál minden veszteséget.

Ha a célalkalmazás csak szöveget fogad, kövesd a teljes [biztonságos TXT-exportálási folyamatot](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Ez külön kezeli a helyreállításra való `.colpkg`-t és a hordozható munkafájlt, és egyértelművé teszi a tanulási állapot lenullázását.

## Ebben a sorrendben dönts

Kezdd azzal, amit nem engedhetsz meg magadnak elveszíteni:

1. Ha a pontos sablonok, a bővítmények vagy a jelenlegi ismétlési sor nélkülözhetetlenek, maradj az Ankinál, hacsak egy reprezentatív `.apkg`-val végzett próba nem bizonyítja az ellenkezőjét.
2. Ha a jegyzeteket és a kártyákat egy rendszerbe szeretnéd összevonni, teszteld a RemNote-ot. A **Need to Learn** sort is ellenőrizd, ne csak az importált oldalakat.
3. Ha a helyben tárolt Markdown és az ellenőrizhető export fontosabb, mint az Anki megjelenítése, teszteld a Mochit.
4. Ha kifejezetten tanulókártyázásra készült, nyílt forráskódú asztali alkalmazást szeretnél közvetlen Anki-importtal, teszteld a Mnemosyne-t, és ellenőrizd, hogy a mobilos korlátai beleférnek-e a napi rutinodba.
5. Ha a valódi probléma a tananyag osztályon belüli megosztása vagy egy egyszerűbb közös ismétlési folyamat, építs újra egy kis készletet Quizletben vagy Brainscape-ben.
6. Ha kifejezetten a SuperMemo módszerét szeretnéd, fogadd el az új ütemezést. Ha kifejezetten a teljes rendszer forráskódját, saját üzemeltetést, API- és MCP-hozzáférést szeretnél, fogadd el a Nibomo veszteséges tartalom-újraépítését és az üzemeltetési munkát.

Három nagyon eltérő modell funkciónkénti összehasonlításához lásd az [Anki, Quizlet és Nibomo összevetését](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

A döntési szabály egyszerű: akkor válts, ha a nyereség konkrét, és valódi próbával felmérted, mit veszítesz. Ha a reprezentatív paklid nem vihető át rendesen, az Ankinál maradni nem óvatos tartalékmegoldás. Ez az összehasonlítás eredménye.
