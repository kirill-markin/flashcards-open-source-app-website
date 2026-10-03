---
title: MCP-connector
description: "Forbind Nibomo via Claude-kataloget, eller konfigurer dens remote MCP-server i Claude Code og andre klienter, med OAuth og otte værktøjer til flashcards og repetitioner."
---

## Forbind via Claude-kataloget

Åbn [Nibomo i Claude-kataloget](https://claude.ai/directory/nibomo), forbind den, log ind på din Nibomo-konto, og giv adgang. Nibomo er opført som en Community-connector.

I Claude Code skal du bruge den samme konto med Claude-abonnement og tjekke `/mcp`, når du har forbundet. Login med API-nøgle eller via tredjepartsudbydere indlæser ikke automatisk dine connectors fra claude.ai.

Du kan også konfigurere Claude Code direkte. Kør kommandoen nedenfor, åbn derefter `/mcp` i Claude Code, og gennemfør godkendelsen i browseren:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Claude Code-dokumentation om MCP](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Oversigt

Nibomo kører en remote MCP-server (Model Context Protocol), så MCP-klienter og
AI-agenter kan læse dine kort, der forfalder, repetere dem sammen med dig ét spørgsmål ad gangen
og oprette eller redigere kort og bunker for dig.

Agenter kan forbinde på to måder: via denne MCP-server (bedst til MCP-klienter som
Claude eller Cursor) eller via [discovery-URL'en for Agents API](/docs/api/) til CLI-agenter.
Begge giver adgang til den samme datagrænseflade pr. bruger; denne side handler om MCP-serveren.

Forbind til den på:

```text
https://mcp.nibomo.com/mcp
```

Transporten er Streamable HTTP. Serveren stiller otte værktøjer til rådighed til at finde arbejdsområder, læse og skrive kort og bunker, hente referencevejledninger, repetere og se kontoens forbrug.

## Sådan tilføjer du den i din klient

De fleste klienter tilføjer en remote MCP-server som en brugerdefineret connector:

1. Åbn klientens indstillinger for connectors eller MCP-servere.
2. Tilføj en brugerdefineret connector, og indsæt serverens URL `https://mcp.nibomo.com/mcp`.
3. I interaktive klienter godkender du i browseren, når du bliver bedt om det. Serveren
   bruger OAuth 2.1 med Dynamic Client Registration, så der er ingen klienthemmelighed,
   du skal indsætte, og ingen app, du først skal registrere.
4. Til headless brug eller CLI-brug skal du i stedet for browserflowet sætte en `Authorization: Bearer fca_…`-header med din
   API-nøgle til agenter.

Når du har givet adgang, så kald `list_workspaces` én gang for at vælge et arbejdsområde, og brug derefter
`sql_query` til læsning og `sql_execute` til skrivning af kort og bunker. For at repetere skal du kalde
`next_review_card`, derefter `reveal_answer` og derefter `submit_review`.

## Værktøjer

Serveren stiller otte værktøjer til rådighed. Læsning og skrivning er bevidst adskilt, så et enkelt
værktøj aldrig blander sikre og destruktive operationer.

- `get_usage_limits` — udelukkende læsning: kontoens abonnement, grænser og det aktuelle månedlige AI-forbrug; værktøjet hverken læser eller ændrer kort.
- `sql_query` — udelukkende læseadgang til dine kort og bunker (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — skriveadgang til dine kort og bunker (`INSERT`, `UPDATE`,
  `DELETE`) som en atomisk batch.
- `list_workspaces` — udelukkende læsning: liste over de arbejdsområder, du har adgang til,
  hver med sit
  `workspaceId`, navn, antal aktive kort, seneste aktivitet, og om det er dit
  aktuelt valgte standardarbejdsområde. Brug et returneret `workspaceId` til det valgfrie
  argument `workspaceId` i SQL- og repetitionsværktøjerne.
- `get_guide` — udelukkende læsning: referencevejledningen til ét af emnerne `sql_dialect`,
  `card_authoring`, `bulk_authoring` eller `review_flow`. Værktøjet læser ingen data fra arbejdsområdet.
- `next_review_card` — udelukkende læsning: returnerer kun forsiden af det næste kort, der skal repeteres,
  i samme rækkefølge som i apps. Et valgfrit `tags` eller `deckId` afgrænser
  køen.
- `reveal_answer` — udelukkende læsning: returnerer bagsiden af ét kort, efter at
  den lærende har forsøgt at svare på forsiden.
- `submit_review` — registrerer én bedømmelse, `Again`, `Hard`, `Good` eller `Easy`, og
  flytter kortets FSRS-plan frem.

SQL-grænsefladen er en bevidst begrænset dialekt og ikke fuld PostgreSQL.
Denne dokumentation dækker kun den understøttede dialekt og er ikke en reference for kompatibilitet
med PostgreSQL. Sætninger kan kun tilgå ressourcerne `workspace`, `cards`, `decks` og
`review_events`, hver sætning er afgrænset til dit eget arbejdsområde, og
læsning og skrivning er begrænset til `100` rækker pr. sætning.

## Repetitioner

Repetitionsværktøjerne lader en agent overhøre en lærende ét kort ad gangen og gemme hver
bedømmelse i kortets FSRS-plan:

1. `next_review_card` returnerer et `cardId` og `frontText` eller `card: null`, når
   intet forfalder.
2. Når den lærende har svaret, returnerer `reveal_answer` kortets `backText`.
3. `submit_review` tager `cardId`, et `reviewId` i form af et UUID genereret af klienten, en
   `rating` og den lærendes IANA-`reviewedTimeZone`. Serveren tidsstempler
   repetitionen og returnerer kortets nye plan.

Er du i tvivl om, hvorvidt en indsendelse gik igennem, så send den igen med det samme `reviewId`; det registrerer aldrig
en repetition to gange. En indsendelse kan også returnere:

- `409 REVIEW_EVENT_CONFLICT` — repetitionen er allerede registreret, og fejlens
  detaljer indeholder kortets nuværende plan.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` identificerer allerede en repetition af et
  andet kort, så intet blev gemt; indsend igen med et nyt `reviewId`.
- `409 REVIEW_STALE` — kortets gemte repetitionstidspunkt er lig med eller senere end serverens
  nuværende tid; repeter et andet kort.

Repetitioner registreres kun via `submit_review`: SQL kan ikke skrive
`review_events` eller FSRS-planlægningstilstand. Kald `get_guide` med emnet
`review_flow` for at få de fulde regler for repetition og bedømmelse.

## Kortkontrakt

Hvert kort følger én kontrakt, og værktøjerne bygger på den:

- `front_text` er kun et spørgsmål eller en prompt til repetition og indeholder aldrig svaret.
- `back_text` indeholder svaret, eventuelt med et konkret eksempel.

Agenter, der genererer kort via `sql_execute`, følger denne kontrakt, så de
kort, de opretter, straks kan repeteres med spaced repetition.

## Godkendelse

To godkendelsesveje giver adgang til den samme datagrænseflade pr. bruger.

### OAuth 2.1 (interaktive connector-klienter)

Serveren implementerer authorization code-flowet med PKCE og Dynamic Client
Registration. Tilføj MCP-URL'en som en brugerdefineret connector, og giv adgang i browseren;
der deles ingen klienthemmelighed på forhånd. Discovery følger standarden:

- Metadata for den beskyttede ressource:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata for autorisationsserveren:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-nøgle (headless og CLI)

Hent en langtidsgyldig `fca_`-API-nøgle til agenter via login-flowet med engangskode på e-mail,
som er dokumenteret i [API-referencen](/docs/api/), og send den derefter som et Bearer-token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Det er den samme nøgle, som REST-agentgrænsefladen accepterer, og den kræver hverken browser eller
en OAuth-rundtur.

Den kanoniske maskinlæsbare beskrivelse af begge veje er discovery-svaret
på `https://api.nibomo.com/v1/` (spejlet på `/v1/agent`).

## Sikkerhed og afgrænsning

SQL-værktøjerne er sikre at godkende, fordi grænsefladen er en lukket dialekt,
som en parser håndhæver, og ikke vilkårlig adgang til databasen:

- **Lukket liste over tilladte sætninger**: `sql_query` accepterer kun `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` og `SELECT`; `sql_execute` accepterer kun `INSERT`,
  `UPDATE` og `DELETE`. Alt andet afvises allerede ved parsingen.
- **Begrænsede ressourcer**: sætninger kan kun berøre `workspace`, `cards`, `decks`
  og `review_events`.
- **Afgrænsning pr. arbejdsområde**: hver SQL-sætning og hver repetition er afgrænset til ét
  arbejdsområde, du har adgang til, enten det `workspaceId`, du angiver, eller dit valgte
  standardarbejdsområde, uden adgang på tværs af lejere.
- **Strenge argumenter**: hvert værktøj afviser ukendte argumenter, så et fejlstavet
  `workspaceId` giver en fejl i stedet for at blive kørt mod dit standardarbejdsområde.
- **Lofter**: op til `100` rækker pr. sætning, op til `50` sætninger pr. batch og
  et loft over resultatet på cirka `12k` tokens. Batches med ændringer udføres atomisk.
- **Opdeling i læsning og skrivning**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` og `reveal_answer` er udelukkende til læsning (`readOnlyHint`)
  og reparerer aldrig data, genberegner ikke planlægningen og ændrer ikke kortenes tilstand.
  `sql_execute` og `submit_review` er de eneste skriveværktøjer (`destructiveHint`):
  `sql_execute` skriver kort og bunker, og `submit_review` registrerer en repetition og
  flytter det pågældende korts plan frem.

Hele stakken — app, backend og infrastruktur — er open source og kan
[selvhostes](/docs/self-hosting/), så du kan køre den samme connector mod din
egen udrulning.
