---
title: API-referentie
description: API voor externe agents voor discovery, OTP-bootstrap, het opzetten van een werkruimte en de gepubliceerde SQL-interfaces voor lezen en schrijven.
---

## Overzicht

Deze pagina beschrijft het huidige contract voor externe AI-agents van Nibomo.

Spreekt je client MCP, dan is de [MCP-connector](/docs/mcp-connector/) de
eenvoudigste manier om te verbinden en biedt toegang tot dezelfde data-interface. Deze pagina beschrijft
het HTTP-contract voor discovery, SQL, naslaggidsen en herhalingen dat CLI-agents gebruiken.

Begin bij het canonieke discovery-startpunt:

```text
GET https://api.nibomo.com/v1/
```

Dezelfde discovery-payload is ook beschikbaar via `GET /v1/agent`, maar `/v1/` is het primaire openbare startpunt.

Het discovery-antwoord vertelt een agent hoe hij:

- het aanmelden met een OTP per e-mail start
- de OTP inwisselt voor een langdurig geldige API-sleutel
- de accountcontext laadt
- een werkruimte aanmaakt of selecteert
- verdergaat via de gepubliceerde SQL-interface
- naslaggidsen ophaalt en kaarten één voor één herhaalt

## Runtime-discovery en broncode

OpenAPI is niet beschikbaar. De vier voormalige specificatie-URL's hieronder geven nu dezelfde JSON-discoverymelding met `"openapiAvailable": false` terug in plaats van een schema:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Gebruik `GET https://api.nibomo.com/v1/` voor de actuele runtime-discovery. Volg de teruggegeven `docs.discoveryUrl` voor runtime-routes en `docs.source.agentRoutesUrl` voor implementatiedetails.

## Authenticatie-bootstrap

De OTP-bootstrap draait op de authenticatiedienst:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Het verloop is:

1. Roep `GET /v1/` aan.
2. Stuur het e-mailadres van de gebruiker naar `send-code`.
3. Lees `otpSessionToken` uit het antwoord.
4. Vraag de gebruiker om de meest recente 8-cijferige code uit de e-mail.
5. Roep `verify-code` aan met `code`, `otpSessionToken` en `label`.
6. Bewaar de teruggegeven API-sleutel buiten het chatgeheugen.

Aanbevolen omgevingsvariabele:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Geauthenticeerde verzoeken gebruiken:

```text
Authorization: ApiKey <key>
```

Voorbeeld van een bootstrapreeks:

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## Agent-interface na het aanmelden

Na de verificatie bestaat de huidige agent-interface uit:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (alleen lezen)
- `POST /v1/agent/sql/execute` (schrijven)
- `GET /v1/agent/guide/{topic}` (alleen lezen)
- `POST /v1/agent/reviews/next` (alleen lezen)
- `POST /v1/agent/reviews/reveal` (alleen lezen)
- `POST /v1/agent/reviews/submit` (schrijven)

Een typische bootstrap ziet er zo uit:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Indien nodig `POST /v1/agent/workspaces` met `{"name":"Personal"}`
4. Indien nodig `POST /v1/agent/workspaces/{workspaceId}/select`
5. Gebruik `POST /v1/agent/sql/query` om te lezen en `POST /v1/agent/sql/execute` om te schrijven

De werkruimte wordt per API-sleutelverbinding expliciet geselecteerd. Agents moeten de teruggegeven `instructions`-tekst en `docs.discoveryUrl` volgen voor runtime-routes, plus `docs.source.agentRoutesUrl` voor implementatiedetails, in plaats van de volgende stap te raden.

De SQL- en herhaalroutes accepteren ook een optionele `workspaceId` in de JSON-body. Daarmee richt je één aanroep op die werkruimte zonder de selectie te wijzigen; laat hem weg om de geselecteerde werkruimte te gebruiken. Zonder selectie en zonder `workspaceId` antwoorden ze met `409 WORKSPACE_SELECTION_REQUIRED`.

## SQL-interface

`POST /v1/agent/sql/query` is de strikt alleen-lezen interface (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) en `POST /v1/agent/sql/execute` is de schrijfinterface (`INSERT`, `UPDATE`, `DELETE`); één aanroep moet volledig uit leesopdrachten of volledig uit schrijfopdrachten bestaan.

De interface is bewust beperkt en is niet volledig PostgreSQL. Deze documentatie beschrijft alleen
het ondersteunde dialect en is geen referentie voor compatibiliteit met PostgreSQL.

Geen enkel leespad repareert data, berekent de planning opnieuw of wijzigt de status van een kaart. Gebruik
`POST /v1/agent/sql/execute` voor elke schrijfactie op kaarten en decks. SQL kan niet schrijven naar
`review_events` of de FSRS-planningsstatus; leg herhalingen vast via
`POST /v1/agent/reviews/submit`.

Huidige soorten statements:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Gepubliceerde logische resources zijn op dit moment onder meer:

- `workspace`
- `cards`
- `decks`
- `review_events`

Opmerkingen:

- `LIMIT` is standaard `100` en maximaal `100`
- gebruik `ORDER BY` als je stabiele paginering nodig hebt
- gebruik `SHOW TABLES` of `DESCRIBE cards` om het schema te verkennen
- elke SQL-aanroep is beperkt tot één werkruimte: de `workspaceId` in de body of de geselecteerde werkruimte

Voorbeeldverzoek:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Voorbeeld van een kaartquery:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Voorbeeld van een wijziging:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

Er is ook een externe MCP-server beschikbaar op `https://mcp.nibomo.com/mcp` met OAuth 2.1 (Dynamic Client Registration + PKCE). Die biedt dezelfde SQL-splitsing als `sql_query` (strikt alleen lezen) en `sql_execute` (schrijven), plus `list_workspaces`, `get_guide` en de herhaaltools `next_review_card`, `reveal_answer` en `submit_review`; zie de [MCP-connector](/docs/mcp-connector/).

### Veiligheid en reikwijdte

De SQL-interface is een afgebakend dialect dat door een parser wordt afgedwongen, geen kale PostgreSQL. De waarborgen zijn:

- **Gesloten allowlist van statements**: alleen `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` en `SELECT` om te lezen, en `INSERT`, `UPDATE` en `DELETE` om te schrijven. Al het andere wordt bij het parsen geweigerd.
- **Beperkte resources**: statements kunnen alleen de resources `workspace`, `cards`, `decks` en `review_events` aanraken.
- **Afbakening per werkruimte**: elk statement is beperkt tot één werkruimte waartoe je toegang hebt, ofwel de `workspaceId` in de body van het verzoek, ofwel je geselecteerde werkruimte, zonder toegang tussen tenants.
- **Strikte request-bodies**: de SQL- en herhaalroutes weigeren een onbekend veld in de body, zodat een verkeerd gespelde `workspaceId` een fout geeft in plaats van op de geselecteerde werkruimte te worden uitgevoerd.
- **Limieten**: maximaal `100` rijen per statement, maximaal `50` statements per batch en een resultaatlimiet van ongeveer `12k` tokens. Batches met wijzigingen worden atomair toegepast.
- **Scheiding tussen lezen en schrijven**: `sql_query` en `list_workspaces` zijn strikt alleen-lezen (`readOnlyHint`) en repareren nooit data, berekenen de planning nooit opnieuw en wijzigen nooit de status van een kaart. `sql_execute` is de enige SQL-schrijftool en voert de schrijfacties uit (`destructiveHint`); één aanroep moet volledig uit leesopdrachten of volledig uit schrijfopdrachten bestaan. SQL kan niet schrijven naar `review_events` of de FSRS-planningsstatus; alleen `POST /v1/agent/reviews/submit` (MCP `submit_review`) legt een herhaling vast.

## Naslaggidsen

`GET /v1/agent/guide/{topic}` geeft één naslaggids terug in `data.guide`, dezelfde inhoud die de MCP-tool `get_guide` levert. Onderwerpen:

- `sql_dialect`: de volledige SQL-grammatica, limieten en voorbeelden
- `card_authoring`: het kaartcontract, tags, controles op duplicaten en opmaak
- `bulk_authoring`: een grote schrijfopdracht opsplitsen en controleren
- `review_flow`: de cyclus van herhalen en beoordelen

Een onbekend onderwerp geeft `400` terug met de lijst van ondersteunde onderwerpen. Haal de bijbehorende naslaggids op voordat je kaarten opstelt, in bulk schrijft of een herhaling uitvoert, en lees `sql_dialect` opnieuw na een geweigerd statement.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Herhalingen

Met de herhaalroutes kan een agent een leerder kaart voor kaart overhoren en elke beoordeling opslaan in het FSRS-schema van de kaart. Ze accepteren dezelfde JSON-argumenten als de MCP-herhaaltools:

- `POST /v1/agent/reviews/next` geeft `card` terug met `cardId` en `frontText`, of `card: null` als er niets aan de beurt is. Met het optionele `tags` (minstens één van de tags) of `deckId` beperk je de wachtrij, nooit met beide tegelijk; een verzoek zonder body is geldig.
- `POST /v1/agent/reviews/reveal` vereist `cardId` en geeft de `backText` van die kaart terug.
- `POST /v1/agent/reviews/submit` vereist `cardId`, een door de client gegenereerde `reviewId`-UUID, een `rating` van `Again`, `Hard`, `Good` of `Easy`, en de IANA-`reviewedTimeZone` van de leerder. De server legt het tijdstip van de herhaling vast en geeft het nieuwe schema van de kaart terug, inclusief `dueAt`, `state`, `reps` en `lapses`.

Alle drie de routes accepteren de optionele `workspaceId`. Bewaar de `reviewId` voordat je indient, en verstuur een indiening waarvan de uitkomst onzeker is opnieuw met exact hetzelfde verzoek; er wordt nooit een tweede herhaling vastgelegd. De herhaalroutes kunnen ook een van deze antwoorden geven:

- `409 REVIEW_EVENT_CONFLICT`: de herhaling was al vastgelegd, en `error.details.reviewSchedule` bevat het huidige schema van de kaart.
- `409 REVIEW_ID_CARD_MISMATCH`: de `reviewId` hoort al bij een herhaling van een andere kaart, dus er is niets opgeslagen; dien opnieuw in met een nieuwe `reviewId`.
- `409 REVIEW_STALE`: het opgeslagen herhaaltijdstip van de kaart ligt op of na de huidige servertijd; herhaal een andere kaart.
- `400 REVIEW_INPUT_INVALID`: een argument ontbreekt, is ongeldig of wordt niet ondersteund, waaronder `tags` in combinatie met `deckId` of een tag die de werkruimte niet gebruikt.

Voorbeeld van een indiening:

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## API's voor mensen en synchronisatie

Nibomo heeft ook aparte API's voor clients die door mensen worden gebruikt en voor offline-first synchronisatie, maar die vormen niet het hoofdcontract voor externe agents:

- browserflows gebruiken cookies op het gedeelde domein plus CSRF-bescherming
- offline-first clients gebruiken de geïmplementeerde synchronisatieroutes onder `/v1/workspaces/{workspaceId}/sync/push` en `/v1/workspaces/{workspaceId}/sync/pull`
- synchronisatieroutes staan los van de interface voor externe agents
