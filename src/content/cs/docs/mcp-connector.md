---
title: MCP konektor
description: "Připojte Nibomo přes adresář Claude nebo nastavte jeho vzdálený MCP server v Claude Code a dalších klientech, s OAuth a osmi nástroji pro kartičky a opakování."
---

## Připojení přes adresář Claude

Otevřete [Nibomo v adresáři Claude](https://claude.ai/directory/nibomo), připojte ho, přihlaste se ke svému účtu Nibomo a povolte přístup. Nibomo je v adresáři uvedené jako konektor Community.

V Claude Code použijte stejný účet s předplatným Claude a po připojení zkontrolujte `/mcp`. Při přihlášení API klíčem nebo přes poskytovatele třetí strany se vaše konektory z claude.ai automaticky nenačtou.

Claude Code můžete nastavit i přímo. Spusťte níže uvedený příkaz, pak v Claude Code otevřete `/mcp` a dokončete autorizaci v prohlížeči:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentace MCP pro Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Přehled

Nibomo provozuje vzdálený MCP (Model Context Protocol) server, aby MCP klienti a AI agenti mohli číst vaše kartičky, které jsou na řadě, opakovat je s vámi po jedné otázce a vytvářet nebo upravovat kartičky a balíčky za vás.

Agenti se mohou připojit dvěma způsoby: přes tento MCP server (nejlepší pro MCP klienty, jako je Claude nebo Cursor), nebo přes [discovery URL Agents API](/docs/api/) pro CLI agenty. Oba způsoby vedou ke stejnému datovému rozhraní konkrétního uživatele; tato stránka se věnuje MCP serveru.

Připojte se na adrese:

```text
https://mcp.nibomo.com/mcp
```

Transportem je Streamable HTTP. Server nabízí osm nástrojů pro zjištění pracovních prostorů, čtení a zápis kartiček a balíčků, referenční příručky, opakování a využití účtu.

## Jak ho přidat do klienta

Většina klientů přidává vzdálený MCP server jako vlastní konektor:

1. Otevřete v klientovi nastavení konektorů nebo MCP serverů.
2. Přidejte vlastní konektor a vložte URL serveru `https://mcp.nibomo.com/mcp`.
3. U interaktivních klientů po vyzvání proveďte autorizaci v prohlížeči. Server používá OAuth 2.1 s Dynamic Client Registration, takže není potřeba vkládat žádný client secret ani předem registrovat aplikaci.
4. Pro použití bez grafického rozhraní nebo z CLI nastavte místo postupu v prohlížeči hlavičku `Authorization: Bearer fca_…` se svým API klíčem agenta.

Po autorizaci jednou zavolejte `list_workspaces` a vyberte pracovní prostor, pak používejte `sql_query` pro čtení a `sql_execute` pro zápis kartiček a balíčků. K opakování zavolejte `next_review_card`, potom `reveal_answer` a nakonec `submit_review`.

## Nástroje

Server nabízí osm nástrojů. Čtení a zápis jsou záměrně oddělené, aby jeden nástroj nikdy nemíchal bezpečné a destruktivní operace.

- `get_usage_limits` – výhradně pro čtení: tarif účtu, limity a aktuální měsíční využití AI; kartičky nečte ani nemění.
- `sql_query` – přístup výhradně pro čtení k vašim kartičkám a balíčkům (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` – přístup pro zápis k vašim kartičkám a balíčkům (`INSERT`, `UPDATE`, `DELETE`) jako atomická dávka.
- `list_workspaces` – výhradně pro čtení: seznam pracovních prostorů, ke kterým máte přístup, u každého s `workspaceId`, názvem, počtem aktivních kartiček, poslední aktivitou a informací, zda je to váš aktuálně vybraný výchozí prostor. Vrácené `workspaceId` použijte pro volitelný argument `workspaceId` nástrojů pro SQL a opakování.
- `get_guide` – výhradně pro čtení; vrací referenční příručku k jednomu tématu: `sql_dialect`, `card_authoring`, `bulk_authoring` nebo `review_flow`. Nečte žádná data pracovního prostoru.
- `next_review_card` – výhradně pro čtení: vrací další kartičku k opakování, pouze její přední stranu, ve stejném pořadí fronty jako aplikace. Frontu zúží volitelné `tags` nebo `deckId`.
- `reveal_answer` – výhradně pro čtení: vrací zadní stranu jedné kartičky poté, co se studující pokusil odpovědět na její přední stranu.
- `submit_review` – zaznamená jedno hodnocení `Again`, `Hard`, `Good` nebo `Easy` a posune plán FSRS kartičky.

SQL rozhraní je záměrně omezený dialekt a nejde o plnohodnotný PostgreSQL. Tato dokumentace popisuje pouze podporovaný dialekt a neslouží jako přehled kompatibility s PostgreSQL. Příkazy mohou pracovat pouze se zdroji `workspace`, `cards`, `decks` a `review_events`, každý příkaz se týká jen vašeho vlastního pracovního prostoru a čtení i zápisy jsou omezené na `100` řádků na příkaz.

## Opakování

Nástroje pro opakování umožňují agentovi zkoušet studujícího po jedné kartičce a ukládat každé hodnocení do plánu FSRS dané kartičky:

1. `next_review_card` vrací `cardId` a `frontText`, nebo `card: null`, když není nic na řadě.
2. Jakmile studující odpoví, `reveal_answer` vrátí `backText` dané kartičky.
3. `submit_review` přijímá `cardId`, UUID `reviewId` vygenerované klientem, `rating` a IANA časové pásmo studujícího `reviewedTimeZone`. Server doplní čas opakování a vrátí nový plán kartičky.

Nejisté odeslání zopakujte se stejným `reviewId`; druhé opakování se tím nikdy nezaznamená. Odeslání může vrátit také:

- `409 REVIEW_EVENT_CONFLICT` – opakování už bylo zaznamenáno a podrobnosti chyby obsahují aktuální plán kartičky.
- `409 REVIEW_ID_CARD_MISMATCH` – `reviewId` už označuje opakování jiné kartičky, takže se nic neuložilo; odešlete znovu s novým `reviewId`.
- `409 REVIEW_STALE` – uložený čas opakování kartičky je stejný jako aktuální čas serveru nebo pozdější; opakujte jinou kartičku.

Opakování se zaznamenávají pouze přes `submit_review`: SQL nemůže zapisovat do `review_events` ani do stavu plánování FSRS. Úplná pravidla opakování a hodnocení získáte voláním `get_guide` s tématem `review_flow`.

## Kontrakt kartičky

Každá kartička se řídí jedním kontraktem a nástroje se na něj spoléhají:

- `front_text` je pouze otázka nebo podnět k opakování a nikdy neobsahuje odpověď.
- `back_text` obsahuje odpověď, volitelně s konkrétním příkladem.

Agenti, kteří vytvářejí kartičky přes `sql_execute`, tento kontrakt dodržují, takže kartičky, které vytvoří, lze hned zařadit do rozloženého opakování.

## Autentizace

Ke stejnému datovému rozhraní konkrétního uživatele vedou dva způsoby autorizace.

### OAuth 2.1 (interaktivní klienti s konektory)

Server implementuje tok autorizačního kódu (authorization code) s PKCE a Dynamic Client Registration. Přidejte MCP URL jako vlastní konektor a proveďte autorizaci v prohlížeči; žádný client secret se předem nesdílí. Discovery je standardní:

- Metadata chráněného zdroje:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata autorizačního serveru:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API klíč (bez grafického rozhraní a CLI)

Dlouhodobý API klíč agenta `fca_` získáte přes přihlášení e-mailovým OTP popsané v [referenční příručce API](/docs/api/) a pak ho posílejte jako bearer token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Jde o stejný klíč, jaký přijímá REST rozhraní pro agenty, a nepotřebuje prohlížeč ani průchod přes OAuth.

Kanonickým strojově čitelným popisem obou cest je discovery odpověď na `https://api.nibomo.com/v1/` (zrcadlená na `/v1/agent`).

## Bezpečnost a rozsah

SQL nástroje lze bezpečně schválit, protože rozhraní je uzavřený dialekt vynucovaný parserem, nikoli libovolný přístup k databázi:

- **Uzavřený seznam povolených příkazů**: `sql_query` přijímá pouze `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` a `SELECT`; `sql_execute` přijímá pouze `INSERT`, `UPDATE` a `DELETE`. Cokoli jiného je odmítnuto už při parsování.
- **Omezené zdroje**: příkazy mohou pracovat pouze s `workspace`, `cards`, `decks` a `review_events`.
- **Omezení na pracovní prostor**: každý SQL příkaz i každé opakování se týká jednoho pracovního prostoru, ke kterému máte přístup, buď toho, jehož `workspaceId` předáte, nebo vašeho vybraného výchozího prostoru, bez přístupu napříč tenanty.
- **Striktní argumenty**: každý nástroj odmítne neznámý argument, takže překlep v `workspaceId` skončí chybou, místo aby se příkaz provedl nad vaším výchozím pracovním prostorem.
- **Limity**: nejvýše `100` řádků na příkaz, nejvýše `50` příkazů na dávku a výsledek omezený zhruba na `12k` tokenů. Dávky změn se provádějí atomicky.
- **Oddělení čtení a zápisu**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` a `reveal_answer` jsou výhradně pro čtení (`readOnlyHint`) a nikdy neopravují data, nepřepočítávají plánování ani nemění stav kartiček. `sql_execute` a `submit_review` jsou jediné nástroje pro zápis (`destructiveHint`): `sql_execute` zapisuje kartičky a balíčky a `submit_review` zaznamenává opakování a posouvá plán příslušné kartičky.

Celý systém – aplikace, backend i infrastruktura – má otevřený zdrojový kód a můžete ho [hostovat sami](/docs/self-hosting/), takže stejný konektor můžete napojit na vlastní nasazení.
