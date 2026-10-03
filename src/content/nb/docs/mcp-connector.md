---
title: MCP-kobling
description: "Koble til Nibomo via Claude-katalogen, eller konfigurer den eksterne MCP-serveren i Claude Code og andre klienter, med OAuth og åtte verktøy for læringskort og repetisjon."
---

## Koble til via Claude-katalogen

Åpne [Nibomo i Claude-katalogen](https://claude.ai/directory/nibomo), koble den til, logg inn på Nibomo-kontoen din og gi tilgang. Nibomo er oppført som en Community-kobling.

I Claude Code bruker du den samme Claude-kontoen med abonnement og sjekker `/mcp` etter tilkoblingen. Innlogging med API-nøkkel eller via tredjepartsleverandører laster ikke inn claude.ai-koblingene dine automatisk.

Du kan også konfigurere Claude Code direkte. Kjør kommandoen nedenfor, åpne deretter `/mcp` i Claude Code og fullfør autoriseringen i nettleseren:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Dokumentasjon om MCP i Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Oversikt

Nibomo kjører en ekstern MCP-server (Model Context Protocol), slik at MCP-klienter og AI-agenter kan lese kortene dine som forfaller, repetere dem sammen med deg ett spørsmål om gangen og lage eller redigere kort og kortstokker for deg.

Agenter kan koble til på to måter: via denne MCP-serveren (best for MCP-klienter som Claude eller Cursor) eller via [discovery-URL-en for Agents API](/docs/api/) for CLI-agenter. Begge gir tilgang til det samme datagrensesnittet per bruker; denne siden handler om MCP-serveren.

Koble til den på:

```text
https://mcp.nibomo.com/mcp
```

Transporten er Streamable HTTP. Serveren tilbyr åtte verktøy for å finne arbeidsområder, lese og skrive kort og kortstokker, hente referanseguider, repetere og se kontobruk.

## Slik legger du den til i klienten din

De fleste klienter legger til en ekstern MCP-server som en egendefinert kobling:

1. Åpne innstillingene for koblinger eller MCP-servere i klienten din.
2. Legg til en egendefinert kobling og lim inn server-URL-en `https://mcp.nibomo.com/mcp`.
3. I interaktive klienter autoriserer du i nettleseren når du blir bedt om det. Serveren bruker OAuth 2.1 med Dynamic Client Registration, så det finnes ingen klienthemmelighet å lime inn og ingen app som må registreres først.
4. Ved headless bruk eller bruk fra CLI setter du headeren `Authorization: Bearer fca_…` med agentens API-nøkkel i stedet for å bruke nettleserflyten.

Etter autoriseringen kaller du `list_workspaces` én gang for å velge et arbeidsområde, og bruker deretter `sql_query` for lesing og `sql_execute` for skriving av kort og kortstokker. For å repetere kaller du `next_review_card`, deretter `reveal_answer` og til slutt `submit_review`.

## Verktøy

Serveren tilbyr åtte verktøy. Lesing og skriving er bevisst delt opp, slik at ett og samme verktøy aldri blander trygge og destruktive operasjoner.

- `get_usage_limits` — utelukkende lesing av kontoens abonnement, grenser og AI-bruk så langt denne måneden; verktøyet verken leser eller endrer kort.
- `sql_query` — utelukkende lesetilgang til kortene og kortstokkene dine (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — skrivetilgang til kortene og kortstokkene dine (`INSERT`, `UPDATE`, `DELETE`) som en atomisk batch.
- `list_workspaces` — utelukkende lesing av listen over arbeidsområdene du har tilgang til, hvert med sin `workspaceId`, navn, antall aktive kort, siste aktivitet og om det er standardvalget ditt for øyeblikket. Bruk en returnert `workspaceId` som verdi for det valgfrie argumentet `workspaceId` i SQL- og repetisjonsverktøyene.
- `get_guide` — utelukkende lesing av referanseguiden for ett emne: `sql_dialect`, `card_authoring`, `bulk_authoring` eller `review_flow`. Verktøyet leser ingen data fra arbeidsområder.
- `next_review_card` — utelukkende lesing: returnerer det neste kortet som skal repeteres, bare forsiden, i samme kørekkefølge som i appene. Valgfrie `tags` eller `deckId` snevrer inn køen.
- `reveal_answer` — utelukkende lesing: returnerer baksiden av ett kort etter at eleven har prøvd å svare på forsiden.
- `submit_review` — registrerer én vurdering, `Again`, `Hard`, `Good` eller `Easy`, og flytter kortets FSRS-plan videre.

SQL-grensesnittet er en bevisst begrenset dialekt og er ikke fullverdig PostgreSQL. Denne dokumentasjonen dekker bare den støttede dialekten og er ingen referanse for kompatibilitet med PostgreSQL. Setninger kan bare berøre ressursene `workspace`, `cards`, `decks` og `review_events`, hver setning er avgrenset til ditt eget arbeidsområde, og lesing og skriving er begrenset til `100` rader per setning.

## Repetisjoner

Repetisjonsverktøyene lar en agent høre en elev i ett kort om gangen og lagre hver vurdering i kortets FSRS-plan:

1. `next_review_card` returnerer en `cardId` og `frontText`, eller `card: null` når ingen kort forfaller.
2. Etter at eleven har svart, returnerer `reveal_answer` kortets `backText`.
3. `submit_review` tar imot `cardId`, en klientgenerert UUID som `reviewId`, en `rating` og `reviewedTimeZone` med elevens IANA-tidssone. Serveren setter tidspunktet for repetisjonen og returnerer kortets nye plan.

Er du usikker på om en innsending gikk gjennom, sender du den på nytt med samme `reviewId`; den registrerer aldri en repetisjon to ganger. En innsending kan også gi svaret:

- `409 REVIEW_EVENT_CONFLICT` — repetisjonen er allerede registrert, og feildetaljene inneholder kortets nåværende plan.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` identifiserer allerede en repetisjon av et annet kort, så ingenting ble lagret; send inn på nytt med en ny `reviewId`.
- `409 REVIEW_STALE` — det lagrede repetisjonstidspunktet for kortet er samtidig med eller senere enn serverens nåværende tid; repeter et annet kort.

Repetisjoner registreres bare via `submit_review`: SQL kan ikke skrive til `review_events` eller FSRS-planleggingstilstanden. Kall `get_guide` med emnet `review_flow` for de fullstendige reglene for repetisjon og vurdering.

## Kortkontrakt

Alle kort følger én kontrakt, og verktøyene er avhengige av den:

- `front_text` er bare et spørsmål eller en repetisjonsoppgave og inneholder aldri svaret.
- `back_text` inneholder svaret, eventuelt med et konkret eksempel.

Agenter som lager kort via `sql_execute`, følger denne kontrakten, så kortene de lager, er klare for intervallrepetisjon med én gang.

## Autentisering

To autoriseringsveier gir tilgang til det samme datagrensesnittet per bruker.

### OAuth 2.1 (interaktive koblingsklienter)

Serveren implementerer autorisasjonskodeflyten med PKCE og Dynamic Client Registration. Legg til MCP-URL-en som en egendefinert kobling og autoriser i nettleseren; ingen klienthemmelighet deles på forhånd. Discovery følger standarden:

- Metadata for den beskyttede ressursen:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata for autorisasjonsserveren:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-nøkkel (headless og CLI)

Skaff en langvarig `fca_`-API-nøkkel for agenter via innloggingsflyten med engangskode på e-post, som er dokumentert i [API-referansen](/docs/api/), og send den deretter som et Bearer-token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Dette er den samme nøkkelen som REST-grensesnittet for agenter godtar, og den krever verken nettleser eller en OAuth-runde.

Den kanoniske maskinlesbare beskrivelsen av begge veiene er discovery-innholdet på `https://api.nibomo.com/v1/` (speilet på `/v1/agent`).

## Sikkerhet og omfang

SQL-verktøyene er trygge å godkjenne, fordi grensesnittet er en avgrenset dialekt som håndheves av en parser, ikke vilkårlig databasetilgang:

- **Lukket liste over tillatte setninger**: `sql_query` godtar bare `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` og `SELECT`; `sql_execute` godtar bare `INSERT`, `UPDATE` og `DELETE`. Alt annet avvises allerede ved parsing.
- **Begrensede ressurser**: setninger kan bare berøre `workspace`, `cards`, `decks` og `review_events`.
- **Avgrensning per arbeidsområde**: hver SQL-setning og hver repetisjon er avgrenset til ett arbeidsområde du har tilgang til, enten den `workspaceId` du sender med, eller standardvalget ditt, uten tilgang på tvers av leietakere.
- **Strenge argumenter**: alle verktøy avviser ukjente argumenter, så en feilstavet `workspaceId` gir en feil i stedet for å kjøre mot standardarbeidsområdet ditt.
- **Grenser**: opptil `100` rader per setning, opptil `50` setninger per batch og en grense for resultatet på omtrent `12k` tokens. Endringsbatcher utføres atomisk.
- **Skille mellom lesing og skriving**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`, `next_review_card` og `reveal_answer` er utelukkende for lesing (`readOnlyHint`) og reparerer aldri data, beregner aldri repetisjonsplanen på nytt og endrer aldri korttilstanden. `sql_execute` og `submit_review` er de eneste verktøyene for skriving (`destructiveHint`): `sql_execute` skriver kort og kortstokker, og `submit_review` registrerer en repetisjon og flytter kortets plan videre.

Hele stakken — app, backend og infrastruktur — har åpen kildekode og kan [selvhostes](/docs/self-hosting/), så du kan kjøre den samme koblingen mot din egen installasjon.
