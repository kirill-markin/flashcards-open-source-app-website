---
title: MCP-koppling
description: "Anslut Nibomo via Claude-katalogen eller konfigurera dess fjärranslutna MCP-server i Claude Code och andra klienter, med OAuth och åtta verktyg för flashcards och repetitioner."
---

## Anslut via Claude-katalogen

Öppna [Nibomo i Claude-katalogen](https://claude.ai/directory/nibomo), anslut den, logga in på ditt Nibomo-konto och godkänn åtkomsten. Nibomo är listad som en Community-koppling.

I Claude Code använder du samma Claude-konto med prenumeration och kontrollerar `/mcp` när du har anslutit. Inloggningar med API-nyckel eller via tredjepartsleverantör läser inte automatiskt in dina kopplingar från claude.ai.

Du kan också konfigurera Claude Code direkt. Kör kommandot nedan, öppna sedan `/mcp` i Claude Code och slutför godkännandet i webbläsaren:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentation om MCP i Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Översikt

Nibomo kör en fjärransluten MCP-server (Model Context Protocol) så att MCP-klienter och
AI-agenter kan läsa de kort som står på tur, repetera dem med dig en fråga i taget
och skapa eller redigera kort och kortlekar åt dig.

Agenter kan ansluta på två sätt: via den här MCP-servern (bäst för MCP-klienter som
Claude eller Cursor) eller via [discovery-URL:en för Agents API](/docs/api/) för CLI-agenter.
Båda når samma datayta per användare; den här sidan handlar om MCP-servern.

Anslut till den på:

```text
https://mcp.nibomo.com/mcp
```

Transporten är Streamable HTTP. Servern exponerar åtta verktyg för att hitta arbetsytor, läsa och skriva kort och kortlekar, hämta referensguider, repetera och visa kontots användning.

## Så lägger du till den i din klient

De flesta klienter lägger till en fjärransluten MCP-server som en anpassad koppling:

1. Öppna klientens inställningar för kopplingar eller MCP-servrar.
2. Lägg till en anpassad koppling och klistra in serverns URL `https://mcp.nibomo.com/mcp`.
3. I interaktiva klienter godkänner du i webbläsaren när du uppmanas. Servern
   använder OAuth 2.1 med Dynamic Client Registration, så det finns ingen klienthemlighet
   att klistra in och ingen app att registrera först.
4. För användning utan gränssnitt eller via CLI anger du i stället för webbläsarflödet en
   `Authorization: Bearer fca_…`-header med din agent-API-nyckel.

Efter godkännandet anropar du `list_workspaces` en gång för att välja en arbetsyta och använder sedan
`sql_query` för läsning och `sql_execute` för skrivning av kort och kortlekar. För att repetera anropar du
`next_review_card`, sedan `reveal_answer` och sedan `submit_review`.

## Verktyg

Servern exponerar åtta verktyg. Läsning och skrivning är avsiktligt uppdelade så att ett enskilt
verktyg aldrig blandar säkra och destruktiva åtgärder.

- `get_usage_limits` — strikt skrivskyddad: kontots plan, gränser och aktuell AI-användning för månaden; läser och ändrar inga kort.
- `sql_query` — strikt skrivskyddad åtkomst till dina kort och kortlekar (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — skrivåtkomst till dina kort och kortlekar (`INSERT`, `UPDATE`,
  `DELETE`) som en atomär batch.
- `list_workspaces` — strikt skrivskyddad lista över de arbetsytor du har åtkomst till,
  var och en med sitt
  `workspaceId`, namn, antal aktiva kort, senaste aktivitet och om den är din
  nuvarande valda standardarbetsyta. Använd ett returnerat `workspaceId` för det valfria
  argumentet `workspaceId` i SQL- och repetitionsverktygen.
- `get_guide` — strikt skrivskyddad referensguide för ett ämne: `sql_dialect`,
  `card_authoring`, `bulk_authoring` eller `review_flow`. Den läser inga data från arbetsytan.
- `next_review_card` — strikt skrivskyddad: returnerar nästa kort att repetera, endast
  framsidan, i samma köordning som i apparna. Valfria `tags` eller `deckId` smalnar av
  kön.
- `reveal_answer` — strikt skrivskyddad: returnerar baksidan av ett kort efter att
  användaren har försökt besvara framsidan.
- `submit_review` — registrerar en bedömning `Again`, `Hard`, `Good` eller `Easy` och
  flyttar fram kortets FSRS-schema.

SQL-ytan är en avsiktligt begränsad dialekt och är inte fullständig PostgreSQL.
Den här dokumentationen täcker bara den dialekt som stöds och är ingen referens för
kompatibilitet med PostgreSQL. Satser kan bara adressera resurserna `workspace`, `cards`, `decks` och
`review_events`, varje sats gäller din egen arbetsyta, och
läsningar och skrivningar begränsas till `100` rader per sats.

## Repetitioner

Med repetitionsverktygen kan en agent förhöra användaren på ett kort i taget och spara varje
bedömning i kortets FSRS-schema:

1. `next_review_card` returnerar ett `cardId` och `frontText`, eller `card: null` när
   inget står på tur.
2. När användaren har svarat returnerar `reveal_answer` kortets `backText`.
3. `submit_review` tar emot `cardId`, ett klientgenererat `reviewId` i form av en UUID, en
   `rating` och användarens IANA-tidszon `reviewedTimeZone`. Servern sätter
   tidpunkten för repetitionen och returnerar kortets nya schema.

Om du är osäker på om en inskickning gick fram kan du försöka igen med samma `reviewId`;
den registrerar aldrig en andra repetition. En inskickning kan också ge svaret:

- `409 REVIEW_EVENT_CONFLICT` — repetitionen har redan registrerats, och feldetaljerna
  innehåller kortets nuvarande schema.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` identifierar redan en repetition av ett
  annat kort, så ingenting sparades; skicka in igen med ett nytt `reviewId`.
- `409 REVIEW_STALE` — kortets lagrade repetitionstid är samma som eller senare än serverns
  aktuella tid; repetera ett annat kort.

Repetitioner registreras endast via `submit_review`: SQL kan inte skriva
`review_events` eller FSRS-schemaläggningens tillstånd. Anropa `get_guide` med ämnet
`review_flow` för de fullständiga reglerna för repetition och bedömning.

## Kortkontrakt

Varje kort följer ett och samma kontrakt, och verktygen förlitar sig på det:

- `front_text` är bara en fråga eller en uppmaning för repetitionen och innehåller aldrig svaret.
- `back_text` innehåller svaret, eventuellt med ett konkret exempel.

Agenter som skapar kort via `sql_execute` följer det här kontraktet, så de
kort de skapar kan direkt repeteras med intervallrepetition.

## Autentisering

Två auktoriseringsvägar leder till samma datayta per användare.

### OAuth 2.1 (interaktiva klienter med kopplingar)

Servern implementerar auktoriseringskodflödet med PKCE och Dynamic Client
Registration. Lägg till MCP-URL:en som en anpassad koppling och godkänn i webbläsaren;
ingen klienthemlighet delas i förväg. Discovery följer standarden:

- Metadata för den skyddade resursen:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata för auktoriseringsservern:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-nyckel (utan gränssnitt och CLI)

Skaffa en långlivad agent-API-nyckel med prefixet `fca_` genom inloggningsflödet med engångskod via e-post
som dokumenteras i [API-referensen](/docs/api/), och skicka den sedan som en Bearer-token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Det är samma nyckel som REST-agentytan accepterar, och den kräver varken webbläsare eller
OAuth-flöde.

Den kanoniska maskinläsbara beskrivningen av båda vägarna är discovery-innehållet
på `https://api.nibomo.com/v1/` (speglat på `/v1/agent`).

## Säkerhet och omfattning

SQL-verktygen är säkra att godkänna eftersom ytan är en avgränsad dialekt
som kontrolleras av en parser, inte godtycklig databasåtkomst:

- **Stängd lista över tillåtna satser**: `sql_query` accepterar endast `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` och `SELECT`; `sql_execute` accepterar endast `INSERT`,
  `UPDATE` och `DELETE`. Allt annat avvisas vid parsningen.
- **Begränsade resurser**: satser kan bara röra `workspace`, `cards`, `decks`
  och `review_events`.
- **Avgränsning per arbetsyta**: varje SQL-sats och repetition gäller en enda
  arbetsyta som du har åtkomst till, antingen det `workspaceId` du skickar eller din valda
  standardarbetsyta, utan åtkomst mellan olika tenants.
- **Strikta argument**: alla verktyg avvisar okända argument, så ett felstavat
  `workspaceId` misslyckas i stället för att köras mot din standardarbetsyta.
- **Tak**: upp till `100` rader per sats, upp till `50` satser per batch och
  ett tak för resultatet på ungefär `12k` tokens. Ändringsbatcher tillämpas atomärt.
- **Uppdelning mellan läsning och skrivning**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` och `reveal_answer` är strikt skrivskyddade (`readOnlyHint`)
  och reparerar aldrig data, räknar aldrig om schemaläggningen och ändrar aldrig kortens tillstånd.
  `sql_execute` och `submit_review` är de enda verktygen för skrivning (`destructiveHint`):
  `sql_execute` skriver kort och kortlekar, och `submit_review` registrerar en repetition och
  flyttar fram kortets schema.

Hela stacken — app, backend och infrastruktur — har öppen källkod och kan
[köras på egen server](/docs/self-hosting/), så att du kan använda samma koppling mot din
egen driftsättning.
