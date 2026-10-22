---
title: "Tanulás Claude-dal 2026-ban: gyakorlati útmutató"
description: "Tanulj saját jegyzeteidből Claude-dal: válaszolj egyenként a kérdésekre, ellenőrizd a javításokat, és gyakorold kártyákkal, ami nem ment, a kurzus AI-szabályai szerint."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "hogyan tanuljak Claude-dal"
  - "Claude tanuláshoz"
  - "tanulási módszer Claude-dal"
  - "Claude mint magántanár"
  - "Claude tanulókártyák"
  - "Claude Learning mode tanulási mód"
---

Ha azt keresed, **hogyan érdemes Claude-dal tanulni**, kezdd a kurzusjegyzeteid egy kisebb részével. Ellenőrizd, mit támasztanak alá a jegyzetek, és válaszolj emlékezetből, egyszerre egy kérdésre, mielőtt segítséget kapsz. Ellenőrizd a javításokat, majd mentsd el azokat a hiányosságokat, amelyeket újra gyakorolnod kell. Ehhez az utolsó lépéshez a [Nibomo Claude-bővítményét](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) ajánlom: munkafolyamatokat ad Claude-nak tanulókártyák készítéséhez, az esedékes kártyák ismétléséhez és a félreérthető kártyák javításához.

A tanulás menete: **forrásellenőrzés → válasz emlékezetből → ellenőrzés → mentés → ismétlés, amikor esedékes**. A szokásos tanulási kérések egy egyszerű Claude-beszélgetésben is működnek; a bővítmény a mentett kártyákhoz és az ismétlési ütemtervhez kapcsolja ezt a tanulási alkalmat.

> **Átláthatóság:** Kirill Markin vagyok, és a [Nibomo](/hu/features/) fejlesztője. A cikk kutatásához és szerkesztéséhez AI-segítséget is használtam.

**A tények ellenőrzésének dátuma:** 2026. október 22.

![Tanulóasztal, amelyen a forrásjegyzetek egy kérdéshez és két ellenőrzött, hiányosságot célzó kártyához kapcsolódnak, egy félretett, nem egyértelmű jegyzettel](/blog/how-to-use-claude-for-studying-v2.png)

## A tanulás rövid menete Claude-dal

Egy előadásrészhez, olvasmányhoz vagy feladatsorhoz használd ezt a folyamatot:

1. Ellenőrizd, mire engedi a kurzus az AI használatát.
2. Adj Claude-nak egy kis adag, pontosan megnevezett forrásanyagot.
3. Mielőtt tanítani kezd, kérd meg, hogy jelezze a hiányzó, ellentmondásos vagy olvashatatlan információkat.
4. Válaszolj emlékezetből, egyszerre egy kérdésre.
5. Jegyezd fel a javítást, a forráshelyet és az esetleges bizonytalanságot.
6. A fontos válaszokat magad is ellenőrizd.
7. Ments el néhány ellenőrzött, tartósan fontos hiányosságot tanulókártyaként a Nibomóba.
8. Ismételd át a mentett kártyákat, amikor esedékesek, Claude-ban vagy a Nibomo alkalmazásban.

A sorrend számít. Ha nem egyértelmű forrásból kérdezteted ki magad, csak nehezebb lesz észrevenni a bizonytalanságot.

## A Nibomo beállítása Claude-ban

Nyisd meg a [Nibomo bővítményt](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory), vagy a **Customize → Plugins** menüben keresd meg a Nibomót, és kattints az **Add** gombra. Ha már telepítve van, ellenőrizd, hogy engedélyezve is van-e.

Kapcsold össze a bővítményhez tartozó Nibomo-csatlakozót a fiókoddal. Kövesd a bejelentkezés lépéseit: lépj be a Nibomo-fiókodba, vagy hozz létre egyet, majd engedélyezd Claude hozzáférését. Amikor a rendszer kéri, válaszd ki a kívánt munkaterületet. Ehhez a megoldáshoz nem kell API-tokent másolnod vagy szervercímet megadnod.

A bővítmény adja a kártyakészítési, ismétlési és javítási munkafolyamatokat. Az MCP-csatlakozó biztosítja a kapcsolatot, amelyen keresztül Claude olvashatja és módosíthatja a Nibomo-fiókod tartalmát. A [csatlakozót Claude katalógusában](https://claude.ai/directory/nibomo) is megtalálod. A [Claude-csatlakozási útmutatónk](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (angol nyelvű) és az [MCP-csatlakozó dokumentációja](/hu/docs/mcp-connector/) részletesebben is bemutatja a kapcsolatot.

Az Anthropic jelenleg a [Pro, Max, Team és Enterprise csomagokban teszi elérhetővé a bővítményeket](https://support.claude.com/en/articles/13837440-use-plugins-in-claude): a Claude webes felületén, a Claude Desktop Chat lapján és a Coworkban. Ha a fiókodban nincsenek bővítmények, az alábbi tanulási kéréseket akkor is használhatod, a kiválasztott kártyákat pedig kézzel bemásolhatod az ismétléshez használt alkalmazásodba.

## Az első feltöltés előtt nézd meg a kurzus szabályait

Kezdd a kurzusleírással, a feladat utasításaival és az intézmény AI-szabályzatával. A szabályok kurzusonként és feladatonként is eltérhetnek, ezért írd le, ennél a konkrét feladatnál mi megengedett: magyarázat, gyakorlókérdések, visszajelzés, vázlatkészítés, segítség a hivatkozásokhoz, vagy ezek közül semmi.

Az Anthropic [hallgatóknak szóló Claude for Education útmutatója](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) a tanulási felhasználások közé sorolja a magyarázatokat, gyakorlókérdéseket, tanulási segédleteket és tanulókártyákat. Ugyanez az útmutató előírja az intézményi tanulmányi tisztességi szabályok betartását, és azt, hogy ne használd Claude-ot olyan munkára, amelyet önállóan kell elvégezned.

Ebből jól használható határok következnek:

- Gyakorold Claude-dal a fogalmakat, ha a korrepetálás és a gyakorlás megengedett.
- Ne kérd meg, hogy oldjon meg egy folyamatban lévő számonkérést, amelyen önállóan kell dolgoznod.
- Ne tölts fel bizalmas, személyes adatot tartalmazó, szerzői joggal védett vagy korlátozottan megosztható tananyagot, ha nincs engedélyed megosztani a szolgáltatással.
- Ha a szabályzat nem egyértelmű, még az értékelt munka megkezdése előtt kérdezd meg az oktatót.

A saját munkád maradjon a tiéd. A saját próbálkozásodra kapott visszajelzés megengedett tanulási segítség lehet; Claude munkáját sajátként beadni viszont sértheti a kurzus szabályait.

## A megfelelő fájlokat a megfelelő helyre tedd

Egy rövid tanulási alkalomhoz elég egy külön beszélgetés. Ha hosszabb távon tanulsz egy kurzusra, hozz létre egy Claude Projectet, és csak az oda tartozó anyagot add hozzá.

A [Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) minden felhasználó számára elérhető; a Free-fiókokban jelenleg legfeljebb öt projekt hozható létre. A kurzus pontos forrásfájljait és a tanulási utasításokat add hozzá a projekt tudásbázisához, hogy a projekten belüli beszélgetésekben is elérhetők legyenek.

Ha a memória engedélyezve van, a projekt a beszélgetések között is megőrizhet bizonyos kontextust. Ezt tanulási háttérként kezeld, ne hiteles beszélgetési jegyzőkönyvként vagy a forrásfájlok helyettesítőjeként. Azokat a forrásrészleteket és javításokat, amelyekre később is szükséged lesz, tartsd a projekt tudásbázisában, és kérj Claude-tól hivatkozást az eredeti anyagra.

Claude [fájlfeltöltési dokumentációja](https://support.claude.com/en/articles/8241126-upload-files-to-claude) jelenleg a PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON és XLSX formátumokat, valamint a JPEG, PNG, GIF és WebP képeket sorolja fel. Az XLSX-feltöltéshez engedélyezni kell a kódfuttatást és a fájllétrehozást. A fájlt csatolhatod egyetlen beszélgetéshez, vagy későbbi használatra elhelyezheted a projekt Files részében.

A legkisebb, még hasznos adagot válaszd: egy előadást, egy fejezetrészt vagy az imént elrontott feladatokat. A kérésben nevezd meg pontosan a határokat, például „a 8–17. dia” vagy „a Genetikai kapcsoltság című rész”. Kisebb anyagban könnyebb megtalálni az alátámasztást és észrevenni, ha Claude véletlenül máshonnan kever bele információt.

Az Anthropic a [**Learning mode** funkciót a Claude for Education projektjeiben](https://www.anthropic.com/news/introducing-claude-for-education) vezette be: ez egy vezetett, szókratészi tanulási mód, amely az azonnali válaszadás helyett gondolkodásra ösztönzi a hallgatókat. Ha az egyetemed biztosít Claude for Education hozzáférést, elérhető lehet számodra, de ne feltételezd, hogy minden személyes Claude-fiókban megtalálod. Az alábbi kérésekkel egy szokásos beszélgetésben is kialakíthatsz hasonló, kérdésekkel vezetett tanulást.

## Mielőtt tanítani kezd, tárasd fel Claude-dal a bizonytalanságokat

Egy előadás diáján az állhat, hogy „a kromoszómák szétválnak”, de az már nem derül ki, melyek. Ha Claude ezt észrevétlenül kiegészíti az általános tudásából, könnyen olyan magabiztos választ gyakorolhatsz be, amelyet a forrásod valójában nem támaszt alá.

Csatold az anyagot, jelöld ki a pontos határokat, és először a források ellenőrzését kérd:

```text
Ehhez a tanulási alkalomhoz csak az általam megnevezett fájlokat és részeket
használd. Ne pótold a hiányokat általános tudásból, hacsak ezt külön nem kérem.

Mielőtt tanítani kezdesz, készíts forrástérképet a következőkről:
- az anyagban világosan elmagyarázott fogalmak;
- nem egyértelmű vagy hiányos kifejezések, ábrák és szövegrészek;
- megbízhatóan nem olvasható szöveg, képletek, feliratok vagy oldalak;
- a megadott források közötti ellentmondások;
- az anyag által feltételezett, de el nem magyarázott előismeretek.

Minden tételnél add meg a fájl nevét és az oldalt, diát vagy címsort. Aminek nincs
közvetlen alátámasztása, azt jelöld NINCS ALÁTÁMASZTVA címkével. Még ne kezdj
kikérdezni.
```

Vesd össze a térképet a fájlokkal. Ha Claude szerint egy meghatározás a 12. dián szerepel, nyisd meg a 12. diát. Ha egy diagram felirata olvashatatlan, másold be a vonatkozó szöveget, vagy tölts fel tisztább képet. Ha a kurzus két forrása ellentmond egymásnak, hagyd láthatóan megjelölve az eltérést, és kérdezd meg az oktatót, vagy használd a kurzus által mérvadónak tekintett forrást.

Később kérhetsz külső magyarázatot is. Ezt különítsd el:

```text
A kurzus forrásanyaga nem magyarázza el ezt az előismeretet. Magyarázd el általános
tudásból, A KURZUS ANYAGÁN KÍVÜL című részben. Ne tüntesd fel úgy a magyarázatot,
mintha a fájljaimból származna.
```

Ez a címke segít elkerülni, hogy a háttértudás észrevétlenül a kurzus bizonyító erejű forrásává váljon.

## Egy kérdés, aztán várakozás

Ha a forrástérkép rendben van, kezdődhet a felidézés gyakorlása: előbb te fogalmazd meg a választ, ahelyett, hogy csak felismernéd a helyes választ a Claude által már megmutatott, szépen megírt magyarázatban.

```text
Csak a forrástérképben szereplő, alátámasztott anyagból taníts.

Egyszerre egy kérdést tegyél fel, és várd meg a válaszomat. Ne rejts segítséget
a kérdésbe. Miután válaszoltam:
1. minősítsd így: Helyes, Részben helyes, Helytelen vagy A forrás nem egyértelmű;
2. adj rövid visszajelzést anélkül, hogy elárulnád a teljes választ;
3. hivatkozz az alátámasztó fájlra és oldalra, diára vagy címsorra;
4. ha a válaszom részben helyes vagy helytelen, adj egy támpontot, és engedj újra
   próbálkozni, mielőtt megmutatod a teljes választ;
5. csak valódi hiányosságot vegyél fel a hiányosságnaplóba.

Ha a forrás nem egyértelmű, jelöld meg a kérdést ellenőrzésre, ne kérj újabb
próbálkozást.

Váltogasd a közvetlen felidézést, a hasonló fogalmak megkülönböztetését és a rövid
alkalmazási feladatokat. Még ne készíts tanulókártyákat. Tíz kérdés után állj meg,
és mutasd meg a naplót.
```

Ha egyszerre csak egy kérdést látsz, a későbbiek nem árulnak el támpontokat, és az egyes próbálkozásokat is könnyebb értékelni. Egy tízes listán könnyű átugrani a kellemetlen kérdéseket, vagy csak azokra a részekre válaszolni, amelyeket tudsz.

Kérd meg Claude-ot, hogy a kérdéstípusokat is váltogassa. A definíciókból kiderül, mely kifejezéseket nem ismered. Az összehasonlítások megmutatják, mely fogalmakat kevered össze. A rövid alkalmazási feladatokból pedig az derül ki, hogy használni is tudod-e az elvet, vagy csak a megfogalmazását ismétled. A többlépéses számításokat papíron végezd el, és mutasd meg a lépéseket; a végeredmény önmagában kevés támpontot ad Claude-nak a hiba feltárásához.

## Vezess naplót az alátámasztásról és a bizonytalanságról

A hiányosságnapló az ellenőrzés menetét tegye követhetővé, ne pusztán pontszámokat mutasson. Használj egy rövid táblázatot:

| Kérdés | Válaszod | Minősítés | Javítás | Alátámasztás | Bizonytalanság | Következő lépés |
| --- | --- | --- | --- | --- | --- | --- |
| Mi válik szét az I. anafázisban? | A testvérkromatidák | Helytelen | A homológ kromoszómák válnak szét; a testvérkromatidák együtt maradnak | 4. előadás, 18. dia | Nincs | Újrapróbálás, majd esetleg egy kártya |

Kérd meg Claude-ot, hogy írja azt: „A forrás nem egyértelmű”, ha az alátámasztás alapján nem dönthető el a válasz. Ezt a sort ne alakítsd megtanulandó ismeretté. Előbb tisztázd.

A bizonytalanság oszlopa a kevésbé feltűnő problémákat is láthatóvá teszi: egy ábrát, amelyet Claude nem tudott elolvasni, egy kifejezést, amelyet az előadó a tankönyvtől eltérően használ, vagy egy ki nem mondott feltételezésre épülő következtetést. A „valószínűleg helyes” és a „18. dia alátámasztja” nem ugyanazt jelenti.

## Konkrét példa: magyarázat és egy tartósan hasznos kártya

Tegyük fel, hogy a megadott kurzusjegyzet ezt írja:

> Az I. anafázis során a homológ kromoszómák az ellentétes pólusok felé mozognak. A testvérkromatidák a centromerájuknál összekapcsolva maradnak.

Claude megkérdezi: „Mi válik szét az I. anafázis során?” Te azt válaszolod: „A testvérkromatidák.”

A hasznos tanári visszajelzés rövid és konkrét:

```text
Helytelen. A testvérkromatidák az I. anafázis során együtt maradnak. Nézd meg újra
a két mondatot: mi mozog az ellentétes pólusok felé?
```

Ha a megadott anyag a II. anafázist is tárgyalja, Claude az újabb próbálkozás után összehasonlíthatja a kettőt. Ez a magyarázat a tanulóbeszélgetésbe tartozik. A később is gyakorlandó hiányosság ennél kisebb:

```text
Előlap: Mi válik szét a meiózis I. anafázisa során?
Hátlap: A homológ kromoszómák; a testvérkromatidák együtt maradnak.
Alátámasztás: 4. előadás, 18. dia
```

Egy hibából egy célzott, egyértelműen értékelhető kártya született. A rávezetés, az újrapróbálás, a magyarázat és a bátorítás akkor és ott elvégezte a feladatát; nem kell mindet magaddal vinned a későbbi ismétlésekhez.

## Ellenőrizd a javítást, mielőtt megbízol benne

Claude úgy is biztosnak tüntethet fel egy választ, hogy közben félreolvas egy fájlt, külső tudást kever bele, vagy elfogad egy pontatlan választ. Az ellenőrzés módját igazítsd az állításhoz:

1. **A kurzushoz kötődő tények:** nyisd meg a hivatkozott oldalt vagy diát, és magad hasonlítsd össze a megfogalmazást, a feltételeket és a kivételeket.
2. **Kidolgozott feladatmegoldások:** önállóan ismételd meg a lépéseket, ellenőrizd a mértékegységeket és az előjeleket, majd vesd össze a megoldásodat a hivatalos megoldókulccsal vagy az oktatói útmutatással, ha van ilyen.
3. **Aktuális tények:** ha a modelleddel és a fiókodban elérhető a webes keresés, kérd meg Claude-ot, hogy keressen és hivatkozzon elsődleges forrásokra. Nyisd meg a linkeket; a hivatkozás lehetővé teszi az ellenőrzést, de nem végzi el helyetted.
4. **Nagy jelentőségű vagy vitatott kérdések:** használd a kijelölt tankönyvet, kérdezd az oktatókat, vagy fordulj a kurzus által elismert más hiteles forráshoz.

Az Anthropic [webes keresési útmutatója](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) szerint a keresésre épülő válaszok hivatkozásokat is tartalmaznak, és azt javasolja, hogy a fontos információkat hiteles forrásokkal is vessük össze. A keresés elérhetősége eltérhet; ha nálad nem elérhető, közvetlenül használj megbízható forrást, ne hagyd, hogy Claude találgasson.

Egy hasznos ellenőrző kérés szándékosan szigorú:

```text
Ellenőrizd a hiányosságnaplót. Minden javításhoz add meg a pontos forráshelyet és
egy rövid, alátámasztó idézetet. Ha a forrás nem támasztja alá közvetlenül a
választ, módosítsd a minősítést erre: NINCS ALÁTÁMASZTVA. Sorold fel azokat a
válaszokat, amelyek külső tudástól, következtetéstől vagy olvashatatlan tartalomtól
függenek. Ne próbáld találgatással pótolni ezeket a hiányokat.
```

Ezután magad is nézd meg a hivatkozott anyagot. Claude az alátámasztás megtalálásában segít, nem helyettesíti azt.

## Döntsd el, mi érdemel újabb ismétlést

Nem kell minden javításból tanulókártyát készíteni. Egyes hiányosságokhoz kidolgozott példa, ábra, oktatói konzultáció vagy újabb gyakorlófeladat kell.

Akkor érdemes egy kártyajavaslatot megtartani, ha:

- olyan válaszból született, amelyet elrontottál, lassan adtál meg, vagy összekevertél egy hasonló fogalommal;
- az adott kérdésen túl is fontos;
- egy világos kérdéssel és egy rövid válasszal ellenőrizhető;
- olyan forrás támasztja alá, amelyet megnéztél;
- a Claude-beszélgetés nélkül is érthető marad.

Hagyd ki, ha:

- maga a forrás továbbra sem egyértelmű;
- könnyen és következetesen helyesen válaszoltál rá;
- a kérdés egy egész esszét vagy folyamatot kér számon;
- a válasz ki nem mondott feltételektől függ;
- a készség gyakorlása többet segítene egy mondat bemagolásánál.

Kész pakli helyett javaslatokat kérj Claude-tól:

```text
Nézd át az ellenőrzött hiányosságnaplót. Csak olyan visszatérő vagy fontos
hiányosságokra javasolj kártyát, amelyek egyértelműen számonkérhetők.

Egy kártya egyetlen megtanulandó ismeretet célozzon. Az előlap legyen konkrét, a
hátlap rövid. Add meg az alátámasztás helyét és minden fennmaradó bizonytalanságot.
A csak gyakorlással kezelhető hiányosságokat külön listázd, egy-egy megfelelő
feladattal. Még ne ments el semmit.
```

A többit engedd el. Egy Claude-dal töltött tanulási alkalom akkor is hasznos lehet, ha egyetlen kártya sem készül belőle.

## Mentsd az ellenőrzött hiányosságokat a Nibomóba

Ha ellenőrizted az alátámasztást, kérd meg a Nibomo bővítményt, hogy a kiválasztott hiányosságokból készítsen mentett kártyákat. Nevezd meg a munkaterületet, és kérd Claude-ot, hogy új kártyák felvétele előtt nézze meg a meglévőket. Az alábbi kéréssel mentés előtt át is nézheted a javaslatokat:

```text
A Nibomóval készíts legfeljebb 5 tanulókártyát a fenti, ellenőrzött
hiányosságnaplóból. Ezt a munkaterületet használd: [munkaterület neve]. Ha a név
nem egyértelmű, mentés előtt tisztázd, melyik munkaterületről van szó.

Nézd meg, vannak-e már azonos kártyák vagy ugyanazt az ismeretet számonkérő
kártyák. Csak az általam ellenőrzött forrásokkal alátámasztott hiányosságokat
használd. Egy kártya egyetlen megtanulandó ismeretet célozzon, konkrét előlappal,
rövid hátlappal és a forrás helyével.

Először mutasd meg a javasolt kártyákat, az alátámasztásukat és az esetleges
egyezéseket. Mentés előtt várd meg a jóváhagyásomat. Mentés után erősítsd meg,
mi készült el és hol.
```

Ebben a kérésben te kéred a mentés előtti előnézetet. Te döntöd el, mennyire szeretnéd átnézni a kártyákat, mielőtt mentésre vagy szerkesztésre kéred Claude-ot; ez nem minden bővítményművelet általános követelménye.

Őrizd meg a különbséget a kidolgozott példából: a magyarázat a meiózis megértését segítette, a mentett kártya pedig azt a konkrét különbséget kéri számon, amelyet eltévesztettél. Egy hosszú tanári válaszból ritkán kell hosszú kártyát készíteni.

## Esedékes tanulókártyák ismétlése Claude-ban

Az újonnan feltöltött jegyzetekből készülő kikérdezés tanulóbeszélgetés. A Nibomo esedékes ismétlésekor már mentett kártyákat gyakorolsz, és a rögzített eredmény befolyásolja, mikor kerülnek elő újra. Ezt kérd kifejezetten:

```text
A Nibomóval ismételjük át az esedékes tanulókártyáimat 10 percig ezen a
munkaterületen: [munkaterület neve]. Időzónaként a Europe/Paris értéket használd.

Egyszerre egy kérdést mutass, és várd meg a próbálkozásomat, mielőtt megmutatod
a mentett választ. Ezután vesd össze az eredeti próbálkozásomat a válasszal,
adj rövid visszajelzést, és rögzítsd a felidézésnek megfelelő értékelést.
Mondd meg, melyik értékelést rögzítetted. Az eredeti próbálkozásomat értékeld,
ne azt a javított választ, amelyet a megoldás megmutatása után adok.
Állj meg, ha lejárt az idő, vagy elfogytak az esedékes kártyák, és foglald össze
a Nibomo által visszaigazolt ismétléseket.
```

A munkaterületet és az időzónát cseréld a sajátodra. Claude általában közli az értékelését, és automatikusan rögzíti. Ha minden értékelést te szeretnél kiválasztani, tedd hozzá: „Használj kézi értékelési módot: miután megmutattad a választ, várd meg, amíg az Again, Hard, Good vagy Easy értékelést választom, és csak azután rögzítsd.”

Ha az I. anafázisról szóló kártyára azt válaszolod, hogy „a testvérkromatidák”, a javítás felismerése a válasz megmutatása után nem teszi helyessé az eredeti próbálkozásodat. Egy későbbi, II. anafázisra vonatkozó kérdés ellenőrizheti, hogy most már megkülönbözteted-e a kettőt, de visszamenőleg nem javíthatja az első értékelést.

A [Nibomo alkalmazásban](https://app.nibomo.com/) is ismételhetsz. A visszaigazolt ismétlések ugyanazt az ütemtervet frissítik az alkalmazásban és Claude-ban is, így két külön ismétlési előzmény vezetése nélkül válthatsz közöttük. Kérd meg Claude-ot, hogy egyértelműen jelezze a sikertelen vagy vissza nem igazolt beküldést, ne számítsa bele az elmentett eredményekbe.

## Javítsd a kártyákat, amelyek rendre összezavarnak

A visszatérő hibák homályos kérdésre, túlzsúfolt válaszra vagy hiányzó feltételre is utalhatnak. Mielőtt arra jutnál, hogy egyszerűen több ismétlésre van szükséged, kérd meg Claude-ot, hogy vizsgálja meg a kártyát:

```text
A Nibomóval vizsgáld át azokat a kártyákat, amelyek ezen az alkalmon összezavartak.
Keress homályos előlapokat, több ismeretet egyszerre számonkérő kártyákat,
hiányzó feltételeket, alá nem támasztott válaszokat és ismétlődő kártyákat.
A javasolt javításokat vesd össze a kurzus fenti forrásanyagával.

Mutasd meg egymás mellett a jelenlegi kártyát és a javasolt módosítást, rövid
indoklással és a forrás helyével. Jelöld meg, amit a forrás alapján nem lehet
eldönteni. Szerkesztés előtt várd meg a jóváhagyásomat; ne törölj kártyákat,
és ne módosíts tisztázatlan tényeket.
```

Hagyd változatlanul a kártyát, ha a kérdés világos, és egyszerűen nem jutott eszedbe a válasz. Az ábrát vagy újabb kidolgozott feladatot igénylő hiányosságoknál térj vissza a magyarázathoz vagy a közvetlen gyakorláshoz.

Ha szívesebben másolod kézzel a kártyákat, kérd el Claude-tól a jóváhagyott kártyákat egyszerű előlap/hátlap blokkokként, és add őket a megszokott tanulókártya-alkalmazásodhoz. A forrásellenőrzés és a válasz megmutatása előtti kikérdezés ekkor is érvényes.

## Amiben Claude továbbra is felügyeletet igényel

Ez a módszer csökkenti az elkerülhető hibákat, de nem teszi Claude-ot hiteles szaktekintéllyé.

- A forráshoz kötött válasz is lehet hibás, ha a forrás hibás.
- A fájlokból kinyert tartalom elveszítheti az összefüggéseit, különösen ábrák, táblázatok és szkennelt oldalak esetén.
- Claude túl elnézően vagy túl szó szerint értékelhet egy kifejtős választ.
- Egy hosszú tanulóbeszélgetés eltávolodhat az eredeti keretektől.
- A könnyű rávezetések felismerést eredményezhetnek tartós felidézési képesség nélkül.

Ha a beszélgetés eltér az eredeti témától, indulj újra a megnevezett forrásból. Ha változik egy magyarázat, kérj hozzá új, pontos forráshelyet. Bizonyításokhoz, esszéíráshoz, kiejtéshez, labormunkához vagy programozáshoz a felidézési kérdések mellett közvetlen gyakorlásra és emberi visszajelzésre is szükség van.

## Záró ellenőrzőlista, ha Claude-dal tanulsz

Mielőtt befejezed, ellenőrizd, hogy:

- az AI használata megfelel a kurzus és a feladat szabályainak;
- Claude megnevezett mindent, ami nem egyértelmű, olvashatatlan vagy nincs alátámasztva;
- egyszerre egy kérdésre válaszoltál, még mielőtt segítséget kaptál;
- minden javítás olyan alátámasztásra mutat, amelyet magad is megnyitottál;
- a külső tudást külön jelölés választja el a kurzus anyagától;
- a feloldatlan bizonytalanságból nem lett tanulókártya;
- csak néhány ellenőrzött, tartósan fontos hiányosságból készült mentett kártya;
- a mentett kártyák a kívánt munkaterületre kerültek, szükségtelen másolatok nélkül;
- kiválasztottad az automatikus vagy kézi értékelést az esedékes ismétlésekhez;
- az értékelések az eredeti próbálkozásodat tükrözik, és a rendszer visszaigazolta a rögzített ismétléseket;
- tudod, hová térj vissza a következő ütemezett ismétléshez.

A hasznos **Claude-magántanár** a magyarázatnál többet ad. Megmutatja, hol ér véget a forrás, megvárja, amíg emlékezetből válaszolsz, és rövid feljegyzést hagy arról, mi nem ment. Ez a feljegyzés teszi érdemessé a Claude-dal végzett tanulás megismétlését, nem a beszélgetés hossza.
