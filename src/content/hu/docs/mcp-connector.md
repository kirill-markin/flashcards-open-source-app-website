---
title: MCP-csatlakozó
description: "Csatlakoztasd a Nibomót a Claude-címtárból, vagy állítsd be a távoli MCP-szerverét a Claude Code-ban és más kliensekben, OAuth-tal és nyolc eszközzel a tanulókártyákhoz és az ismétlésekhez."
---

## Csatlakozás a Claude-címtáron keresztül

Nyisd meg a [Nibomót a Claude-címtárban](https://claude.ai/directory/nibomo), csatlakoztasd, jelentkezz be a Nibomo-fiókodba, és engedélyezd a hozzáférést. A Nibomo közösségi (Community) csatlakozóként szerepel a listában.

A Claude Code-ban ugyanazt a Claude-előfizetéses fiókot használd, és csatlakozás után ellenőrizd az eredményt a `/mcp` paranccsal. API-kulccsal vagy külső szolgáltatón keresztül bejelentkezve a claude.ai-os csatlakozóid nem töltődnek be automatikusan.

A Claude Code-ot közvetlenül is beállíthatod. Futtasd az alábbi parancsot, majd a Claude Code-ban nyisd meg a `/mcp` menüt, és fejezd be az engedélyezést a böngészőben:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[A Claude Code MCP-dokumentációja](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Áttekintés

A Nibomo távoli MCP-szervert (Model Context Protocol) futtat, hogy az MCP-kliensek és az AI-ügynökök olvashassák az esedékes kártyáidat, kérdésről kérdésre átismételhessék őket veled, és kártyákat és paklikat hozhassanak létre vagy szerkeszthessenek helyetted.

Az ügynökök kétféleképpen csatlakozhatnak: ezen az MCP-szerveren keresztül (ez a legjobb az olyan MCP-kliensekhez, mint a Claude vagy a Cursor), vagy – parancssori ügynökök esetén – az [Agents API felderítési URL-jén](/docs/api/) keresztül. Mindkettő ugyanazt a felhasználónkénti adatfelületet éri el; ez az oldal az MCP-szerverről szól.

Ezen a címen csatlakozhatsz hozzá:

```text
https://mcp.nibomo.com/mcp
```

Az átvitel Streamable HTTP. A szerver nyolc eszközt kínál a munkaterületek felderítéséhez, a kártyák és paklik olvasásához és írásához, a referencia-útmutatókhoz, az ismétlésekhez és a fiókhasználathoz.

## Hogyan add hozzá a kliensedhez

A legtöbb kliens egyéni csatlakozóként ad hozzá távoli MCP-szervert:

1. Nyisd meg a kliensed csatlakozó- vagy MCP-szerver-beállításait.
2. Adj hozzá egy egyéni csatlakozót, és illeszd be a szerver URL-jét: `https://mcp.nibomo.com/mcp`.
3. Interaktív klienseknél engedélyezd a hozzáférést a böngészőben, amikor a rendszer kéri. A szerver OAuth 2.1-et használ Dynamic Client Registrationnel, így nincs beillesztendő kliens-titok, és előbb semmilyen alkalmazást sem kell regisztrálni.
4. Felhasználói felület nélküli vagy parancssori használatnál a böngészős folyamat helyett állíts be egy `Authorization: Bearer fca_…` fejlécet az ügynöki API-kulcsoddal.

Az engedélyezés után hívd meg egyszer a `list_workspaces` eszközt egy munkaterület kiválasztásához, majd olvasáshoz a `sql_query`, kártyák és paklik írásához a `sql_execute` eszközt használd. Ismétléshez hívd meg a `next_review_card`, majd a `reveal_answer`, végül a `submit_review` eszközt.

## Eszközök

A szerver nyolc eszközt kínál. Az olvasás és az írás szándékosan külön eszközökre van bontva, így egyetlen eszköz sem keveri a biztonságos és a destruktív műveleteket.

- `get_usage_limits` — szigorúan csak olvasható: a fiók csomagja, korlátai és az aktuális havi AI-használat; nem olvas és nem módosít kártyákat.
- `sql_query` — szigorúan csak olvasási hozzáférés a kártyáidhoz és paklijaidhoz (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — írási hozzáférés a kártyáidhoz és paklijaidhoz (`INSERT`, `UPDATE`, `DELETE`) atomikus kötegként.
- `list_workspaces` — szigorúan csak olvasható lista azokról a munkaterületekről, amelyekhez hozzáférsz, mindegyiknél a `workspaceId`, a név, az aktív kártyák száma, az utolsó aktivitás, és hogy jelenleg ez-e a kiválasztott alapértelmezett munkaterületed. Az SQL- és ismétlési eszközök opcionális `workspaceId` argumentumához egy visszaadott `workspaceId` értéket használj.
- `get_guide` — szigorúan csak olvasható referencia-útmutató egy témához: `sql_dialect`, `card_authoring`, `bulk_authoring` vagy `review_flow`. Munkaterület-adatot nem olvas.
- `next_review_card` — szigorúan csak olvasható: visszaadja a következő ismétlendő kártyát, csak az előoldalát, ugyanabban a sorrendben, mint az alkalmazások. Az opcionális `tags` vagy `deckId` szűkíti a sort.
- `reveal_answer` — szigorúan csak olvasható: visszaadja egy kártya hátoldalát, miután a tanuló megpróbált válaszolni az előoldalon lévő kérdésre.
- `submit_review` — rögzít egy `Again`, `Hard`, `Good` vagy `Easy` értékelést, és továbblépteti a kártya FSRS-ütemtervét.

Az SQL-felület szándékosan korlátozott dialektus, nem teljes értékű PostgreSQL. Ez a dokumentáció csak a támogatott dialektust írja le, nem PostgreSQL-kompatibilitási referencia. Az utasítások csak a `workspace`, a `cards`, a `decks` és a `review_events` erőforrást érhetik el, minden utasítás a saját munkaterületedre vonatkozik, és az olvasás és az írás is legfeljebb `100` sorra korlátozott utasításonként.

## Ismétlések

Az ismétlési eszközökkel egy ügynök kártyánként kikérdezheti a tanulót, és minden értékelést elmenthet a kártya FSRS-ütemtervébe:

1. A `next_review_card` egy `cardId` és egy `frontText` értéket ad vissza, vagy `card: null` értéket, ha semmi sem esedékes.
2. Miután a tanuló válaszolt, a `reveal_answer` visszaadja az adott kártya `backText` értékét.
3. A `submit_review` megkapja a `cardId` értéket, egy kliens által generált `reviewId` UUID-t, egy `rating` értéket és a tanuló IANA szerinti `reviewedTimeZone` időzónáját. A szerver rögzíti az ismétlés időpontját, és visszaadja a kártya új ütemtervét.

Egy bizonytalan kimenetelű beküldést ugyanazzal a `reviewId` értékkel próbálj újra; ez soha nem rögzít második ismétlést. Egy beküldésre ezek a válaszok is érkezhetnek:

- `409 REVIEW_EVENT_CONFLICT` — az ismétlést már rögzítették, és a hiba részletei tartalmazzák a kártya aktuális ütemtervét.
- `409 REVIEW_ID_CARD_MISMATCH` — a `reviewId` már egy másik kártya ismétlését azonosítja, ezért semmi sem lett mentve; küldd be újra egy új `reviewId` értékkel.
- `409 REVIEW_STALE` — a kártya tárolt ismétlési időpontja megegyezik a szerver aktuális idejével, vagy későbbi annál; ismételj egy másik kártyát.

Ismétlést csak a `submit_review` rögzít: SQL-lel nem lehet a `review_events` erőforrásba vagy az FSRS ütemezési állapotába írni. Az ismétlés és az értékelés teljes szabályaiért hívd meg a `get_guide` eszközt a `review_flow` témával.

## Kártyaszerződés

Minden kártya egyetlen szerződést követ, és az eszközök erre támaszkodnak:

- A `front_text` csak kérdést vagy ismétlési feladatot tartalmaz, a választ soha.
- A `back_text` tartalmazza a választ, adott esetben egy konkrét példával.

A `sql_execute` eszközzel kártyákat generáló ügynökök ezt a szerződést követik, így az általuk létrehozott kártyák azonnal bekerülhetnek a szakaszos ismétlésbe.

## Hitelesítés

Két engedélyezési út éri el ugyanazt a felhasználónkénti adatfelületet.

### OAuth 2.1 (interaktív csatlakozókliensek)

A szerver a PKCE-vel és Dynamic Client Registrationnel kiegészített engedélyezési kódos folyamatot valósítja meg. Add hozzá az MCP URL-jét egyéni csatlakozóként, és engedélyezd a hozzáférést a böngészőben; előre megosztott kliens-titokra nincs szükség. A felderítés szabványos:

- Védett erőforrás metaadatai: `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Engedélyezési szerver metaadatai: `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-kulcs (felhasználói felület nélkül és parancssorból)

Szerezz egy hosszú élettartamú, `fca_` kezdetű ügynöki API-kulcsot az [API-referenciában](/docs/api/) dokumentált e-mailes OTP-bejelentkezési folyamattal, majd küldd el Bearer tokenként:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Ez ugyanaz a kulcs, amelyet a REST-alapú ügynöki felület is elfogad, és nem igényel sem böngészőt, sem OAuth-os oda-vissza irányítást.

Mindkét út kanonikus, géppel olvasható leírása a `https://api.nibomo.com/v1/` címen elérhető felderítési tartalom (tükrözve a `/v1/agent` címen).

## Biztonság és hatókör

Az SQL-eszközöket nyugodtan engedélyezheted, mert a felület egy zárt, az elemző által kikényszerített dialektus, nem tetszőleges adatbázis-hozzáférés:

- **Zárt utasításlista**: a `sql_query` csak a `SHOW TABLES`, a `DESCRIBE`, a `SHOW COLUMNS` és a `SELECT`, a `sql_execute` csak az `INSERT`, az `UPDATE` és a `DELETE` utasítást fogadja el. Minden mást a rendszer már az elemzéskor elutasít.
- **Korlátozott erőforrások**: az utasítások csak a `workspace`, a `cards`, a `decks` és a `review_events` erőforrást érhetik el.
- **Munkaterületenkénti hatókör**: minden SQL-utasítás és ismétlés egyetlen, számodra elérhető munkaterületre vonatkozik, vagyis az általad megadott `workspaceId` munkaterületére vagy a kiválasztott alapértelmezett munkaterületedre, bérlők közötti hozzáférés nélkül.
- **Szigorú argumentumok**: minden eszköz elutasítja az ismeretlen argumentumot, így egy elgépelt `workspaceId` hibát ad, ahelyett hogy az alapértelmezett munkaterületeden futna le.
- **Korlátok**: legfeljebb `100` sor utasításonként, legfeljebb `50` utasítás kötegenként, és nagyjából `12k` tokenes eredménykorlát. A módosító kötegek atomikusan hajtódnak végre.
- **Olvasás és írás szétválasztása**: a `get_usage_limits`, a `sql_query`, a `list_workspaces`, a `get_guide`, a `next_review_card` és a `reveal_answer` szigorúan csak olvasható (`readOnlyHint`), és soha nem javít adatot, nem számolja újra az ütemezést, és nem módosítja a kártya állapotát. Írni csak a `sql_execute` és a `submit_review` eszköz tud (`destructiveHint`): a `sql_execute` kártyákat és paklikat ír, a `submit_review` pedig rögzít egy ismétlést, és továbblépteti a kártya ütemtervét.

A teljes stack — alkalmazás, backend és infrastruktúra — nyílt forráskódú, és [saját magad is üzemeltetheted](/docs/self-hosting/), így ugyanezt a csatlakozót a saját telepítéseddel is használhatod.
