---
title: MCP konektor
description: "Pripojte Nibomo cez adresár Claude alebo nastavte jeho vzdialený MCP server v Claude Code a ďalších klientoch, s OAuth a ôsmimi nástrojmi na kartičky a opakovanie."
---

## Pripojenie cez adresár Claude

Otvorte [Nibomo v adresári Claude](https://claude.ai/directory/nibomo), pripojte ho, prihláste sa do svojho účtu Nibomo a autorizujte prístup. Nibomo je uvedené ako komunitný konektor.

V Claude Code použite rovnaký účet s predplatným Claude a po pripojení skontrolujte `/mcp`. Pri prihlásení cez API kľúč alebo cez poskytovateľa tretej strany sa vaše konektory z claude.ai nenačítajú automaticky.

Claude Code môžete nakonfigurovať aj priamo. Spustite príkaz nižšie, potom v Claude Code otvorte `/mcp` a dokončite autorizáciu v prehliadači:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentácia MCP pre Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Prehľad

Nibomo prevádzkuje vzdialený MCP (Model Context Protocol) server, aby MCP klienti a
AI agenti mohli čítať vaše kartičky, na ktoré prišiel čas, opakovať ich s vami po jednej otázke
a vytvárať či upravovať za vás kartičky a balíčky.

Agenti sa môžu pripojiť dvoma spôsobmi: cez tento MCP server (najlepšie pre MCP klientov, ako je
Claude alebo Cursor), alebo cez [zisťovaciu URL adresu Agents API](/docs/api/) pre agentov
v CLI. Oba spôsoby vedú k rovnakému dátovému rozhraniu jednotlivého používateľa; táto stránka sa venuje MCP serveru.

Pripojte sa k nemu na adrese:

```text
https://mcp.nibomo.com/mcp
```

Transportom je Streamable HTTP. Server sprístupňuje osem nástrojov na zisťovanie pracovných priestorov, čítanie a zápis kartičiek a balíčkov, referenčné príručky, opakovanie a využitie účtu.

## Ako ho pridať do klienta

Väčšina klientov pridáva vzdialený MCP server ako vlastný konektor:

1. Otvorte v klientovi nastavenia konektorov alebo MCP serverov.
2. Pridajte vlastný konektor a vložte URL adresu servera `https://mcp.nibomo.com/mcp`.
3. V interaktívnych klientoch autorizujte prístup v prehliadači, keď o to budete požiadaní. Server
   používa OAuth 2.1 s Dynamic Client Registration, takže nevkladáte žiadny klientsky tajný kľúč
   a nemusíte vopred registrovať žiadnu aplikáciu.
4. Pri použití bez grafického rozhrania alebo v CLI namiesto postupu v prehliadači nastavte hlavičku `Authorization: Bearer fca_…`
   so svojím API kľúčom agenta.

Po autorizácii raz zavolajte `list_workspaces` a vyberte pracovný priestor, potom používajte
`sql_query` na čítanie a `sql_execute` na zápis kartičiek a balíčkov. Na opakovanie zavolajte
`next_review_card`, potom `reveal_answer` a potom `submit_review`.

## Nástroje

Server sprístupňuje osem nástrojov. Čítanie a zápis sú zámerne oddelené, aby jeden
nástroj nikdy nemiešal bezpečné a deštruktívne operácie.

- `get_usage_limits` — výhradne na čítanie: plán účtu, limity a aktuálne mesačné využitie AI; kartičky nečíta ani nemení.
- `sql_query` — prístup výhradne na čítanie k vašim kartičkám a balíčkom (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — prístup na zápis k vašim kartičkám a balíčkom (`INSERT`, `UPDATE`,
  `DELETE`) ako atomická dávka.
- `list_workspaces` — výhradne na čítanie: zoznam pracovných priestorov, ku ktorým máte prístup,
  každý so svojím
  `workspaceId`, názvom, počtom aktívnych kartičiek, poslednou aktivitou a informáciou, či je to váš
  aktuálne vybraný predvolený priestor. Vrátený `workspaceId` použite pre voliteľný
  argument `workspaceId` nástrojov SQL a opakovania.
- `get_guide` — výhradne na čítanie: referenčná príručka k jednej téme: `sql_dialect`,
  `card_authoring`, `bulk_authoring` alebo `review_flow`. Nečíta žiadne dáta pracovného priestoru.
- `next_review_card` — výhradne na čítanie: vráti ďalšiu kartičku na opakovanie, iba prednú
  stranu, v rovnakom poradí fronty ako aplikácie. Voliteľné `tags` alebo `deckId` zúži
  frontu.
- `reveal_answer` — výhradne na čítanie: vráti zadnú stranu jednej kartičky, keď
  učiaci sa skúsil odpovedať na jej prednú stranu.
- `submit_review` — zaznamená jedno hodnotenie `Again`, `Hard`, `Good` alebo `Easy` a
  posunie plán FSRS kartičky.

SQL rozhranie je zámerne obmedzený dialekt a nie je to plnohodnotné PostgreSQL.
Táto dokumentácia pokrýva iba podporovaný dialekt a nie je referenciou kompatibility
s PostgreSQL. Príkazy môžu pracovať iba so zdrojmi `workspace`, `cards`, `decks` a
`review_events`, každý príkaz sa vzťahuje na váš vlastný pracovný priestor a
čítanie aj zápis sú obmedzené na `100` riadkov na príkaz.

## Opakovanie

Nástroje na opakovanie umožňujú agentovi skúšať učiaceho sa po jednej kartičke a ukladať každé
hodnotenie do plánu FSRS danej kartičky:

1. `next_review_card` vráti `cardId` a `frontText`, alebo `card: null`, keď
   nie je na rade nič.
2. Keď učiaci sa odpovie, `reveal_answer` vráti `backText` danej kartičky.
3. `submit_review` prijme `cardId`, UUID `reviewId` vygenerované klientom,
   `rating` a IANA `reviewedTimeZone` učiaceho sa. Server zaznamená
   čas opakovania a vráti nový plán kartičky.

Odoslanie s neistým výsledkom zopakujte s rovnakým `reviewId`; opakovaný pokus nikdy nezaznamená druhé
opakovanie. Odoslanie môže odpovedať aj takto:

- `409 REVIEW_EVENT_CONFLICT` — opakovanie už bolo zaznamenané a podrobnosti chyby
  obsahujú aktuálny plán kartičky.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` už označuje opakovanie
  inej kartičky, takže sa nič neuložilo; hodnotenie odošlite znova s novým `reviewId`.
- `409 REVIEW_STALE` — uložený čas opakovania kartičky je rovnaký alebo neskorší ako aktuálny
  čas servera; opakujte inú kartičku.

Opakovania sa zaznamenávajú iba cez `submit_review`: SQL nemôže zapisovať
`review_events` ani stav plánovania FSRS. Úplné pravidlá opakovania a hodnotenia získate,
keď zavoláte `get_guide` s témou `review_flow`.

## Kontrakt kartičky

Každá kartička dodržiava jeden kontrakt a nástroje sa naň spoliehajú:

- `front_text` je iba otázka alebo podnet na opakovanie a nikdy neobsahuje odpoveď.
- `back_text` obsahuje odpoveď, prípadne s konkrétnym príkladom.

Agenti, ktorí vytvárajú kartičky cez `sql_execute`, tento kontrakt dodržiavajú, takže
kartičky, ktoré vytvoria, sú hneď pripravené na opakovanie v rozostupoch.

## Autentifikácia

K rovnakému dátovému rozhraniu jednotlivého používateľa vedú dva spôsoby autorizácie.

### OAuth 2.1 (interaktívni klienti s konektormi)

Server implementuje tok autorizačného kódu s PKCE a Dynamic Client
Registration. Pridajte URL adresu MCP ako vlastný konektor a autorizujte prístup v prehliadači;
žiadny klientsky tajný kľúč sa vopred nezdieľa. Zisťovanie je štandardné:

- Metadáta chráneného zdroja:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadáta autorizačného servera:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API kľúč (bez grafického rozhrania a v CLI)

Dlhodobý API kľúč agenta `fca_` získate cez prihlásenie e-mailovým OTP
opísané v [referenčnej príručke API](/docs/api/) a potom ho posielajte ako token Bearer:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Je to ten istý kľúč, ktorý prijíma REST rozhranie pre agentov, a nepotrebuje prehliadač ani
výmenu cez OAuth.

Kanonický strojovo čitateľný opis oboch spôsobov je zisťovací obsah
na `https://api.nibomo.com/v1/` (zrkadlený na `/v1/agent`).

## Bezpečnosť a rozsah

SQL nástroje môžete bezpečne schváliť, pretože rozhranie je uzavretý dialekt
vynucovaný parserom, nie ľubovoľný prístup k databáze:

- **Uzavretý zoznam povolených príkazov**: `sql_query` prijíma iba `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` a `SELECT`; `sql_execute` prijíma iba `INSERT`,
  `UPDATE` a `DELETE`. Čokoľvek iné sa odmietne už pri parsovaní.
- **Obmedzené zdroje**: príkazy môžu pracovať iba so zdrojmi `workspace`, `cards`, `decks`
  a `review_events`.
- **Obmedzenie na pracovný priestor**: každý SQL príkaz a každé opakovanie sa vzťahuje na jeden
  pracovný priestor, ku ktorému máte prístup, buď na `workspaceId`, ktorý zadáte, alebo na váš vybraný
  predvolený priestor, bez prístupu k iným nájomcom.
- **Prísne argumenty**: každý nástroj odmietne neznámy argument, takže preklep v
  `workspaceId` skončí chybou namiesto toho, aby sa príkaz vykonal nad vaším predvoleným pracovným priestorom.
- **Limity**: najviac `100` riadkov na príkaz, najviac `50` príkazov v dávke a
  limit výsledku približne `12k` tokenov. Dávky zmien sa aplikujú atomicky.
- **Oddelenie čítania a zápisu**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` a `reveal_answer` sú výhradne na čítanie (`readOnlyHint`)
  a nikdy neopravujú dáta, neprepočítavajú plánovanie ani nemenia stav kartičky.
  `sql_execute` a `submit_review` sú jediné nástroje na zápis (`destructiveHint`):
  `sql_execute` zapisuje kartičky a balíčky a `submit_review` zaznamená opakovanie a
  posunie plán príslušnej kartičky.

Celý stack — aplikácia, backend aj infraštruktúra — má otvorený zdrojový kód a dá sa
[hosťovať vlastnými silami](/docs/self-hosting/), takže rovnaký konektor môžete používať
s vlastným nasadením.
