---
title: MCP-connector
description: "Verbind Nibomo via de Claude-directory of stel de externe MCP-server in voor Claude Code en andere clients, met OAuth en acht tools voor flashcards en herhalingen."
---

## Verbinden via de Claude-directory

Open [Nibomo in de Claude-directory](https://claude.ai/directory/nibomo), verbind de connector, meld je aan bij je Nibomo-account en verleen toegang. Nibomo staat vermeld als Community-connector.

Meld je in Claude Code aan met hetzelfde account met Claude-abonnement en controleer na het verbinden `/mcp`. Bij aanmelding met een API-sleutel of via een externe provider worden je claude.ai-connectors niet automatisch geladen.

Je kunt Claude Code ook rechtstreeks configureren. Voer de onderstaande opdracht uit, open daarna `/mcp` in Claude Code en rond de autorisatie in de browser af:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[MCP-documentatie van Claude Code](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Overzicht

Nibomo draait een externe MCP-server (Model Context Protocol), zodat MCP-clients en
AI-agents de kaarten kunnen lezen die bij je aan de beurt zijn, ze vraag voor vraag met je kunnen herhalen
en kaarten en decks voor je kunnen maken of bewerken.

Agents kunnen op twee manieren verbinden: via deze MCP-server (het beste voor MCP-clients zoals
Claude of Cursor) of via de [discovery-URL van de Agents API](/docs/api/) voor CLI-agents.
Beide komen uit bij dezelfde data-interface per gebruiker; deze pagina gaat over de MCP-server.

Verbind ermee via:

```text
https://mcp.nibomo.com/mcp
```

Het transport is Streamable HTTP. De server biedt acht tools: voor het vinden van werkruimtes, het lezen en schrijven van kaarten en decks, naslaggidsen, herhalingen en accountgebruik.

## Zo voeg je de server toe aan je client

De meeste clients voegen een externe MCP-server toe als aangepaste connector:

1. Open in je client de instellingen voor connectors of MCP-servers.
2. Voeg een aangepaste connector toe en plak de server-URL `https://mcp.nibomo.com/mcp`.
3. Bij interactieve clients geef je toestemming in de browser wanneer daarom wordt gevraagd. De server
   gebruikt OAuth 2.1 met Dynamic Client Registration, dus je hoeft geen client secret
   te plakken en niet eerst een app te registreren.
4. Bij headless gebruik of gebruik via de CLI stel je een `Authorization: Bearer fca_…`-header in met je
   agent-API-sleutel in plaats van de browserflow te doorlopen.

Roep na de autorisatie eenmaal `list_workspaces` aan om een werkruimte te kiezen en gebruik daarna
`sql_query` om te lezen en `sql_execute` om kaarten en decks te schrijven. Om te herhalen roep je
eerst `next_review_card` aan, dan `reveal_answer` en tot slot `submit_review`.

## Tools

De server biedt acht tools. Lezen en schrijven zijn bewust gescheiden, zodat één
tool nooit veilige en destructieve bewerkingen combineert.

- `get_usage_limits` — strikt alleen-lezen overzicht van het abonnement van je account, de limieten en het AI-gebruik van de huidige maand; leest of wijzigt geen kaarten.
- `sql_query` — strikt alleen-lezen toegang tot je kaarten en decks (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — schrijftoegang tot je kaarten en decks (`INSERT`, `UPDATE`,
  `DELETE`) als atomaire batch.
- `list_workspaces` — strikt alleen-lezen lijst van de werkruimtes waartoe je toegang hebt,
  elk met de
  `workspaceId`, naam, het aantal actieve kaarten, de laatste activiteit en of het je
  huidige geselecteerde standaardwerkruimte is. Gebruik een teruggegeven `workspaceId` voor het optionele
  argument `workspaceId` van de SQL- en herhaaltools.
- `get_guide` — strikt alleen-lezen naslaggids voor één onderwerp: `sql_dialect`,
  `card_authoring`, `bulk_authoring` of `review_flow`. Leest geen werkruimtegegevens.
- `next_review_card` — strikt alleen-lezen: geeft de volgende kaart om te herhalen terug, alleen de
  voorkant, in dezelfde wachtrijvolgorde als de apps. Met het optionele `tags` of `deckId` beperk je
  de wachtrij.
- `reveal_answer` — strikt alleen-lezen: geeft de achterkant van één kaart terug nadat de
  leerder heeft geprobeerd de voorkant te beantwoorden.
- `submit_review` — legt één beoordeling `Again`, `Hard`, `Good` of `Easy` vast en
  schuift het FSRS-schema van de kaart op.

De SQL-interface is een bewust beperkt dialect en is niet volledig PostgreSQL.
Deze documentatie beschrijft alleen het ondersteunde dialect en is geen referentie voor
compatibiliteit met PostgreSQL. Statements kunnen alleen de resources `workspace`, `cards`, `decks` en
`review_events` aanspreken, elk statement is beperkt tot je eigen werkruimte, en
lezen en schrijven zijn begrensd tot `100` rijen per statement.

## Herhalingen

Met de herhaaltools kan een agent een leerder kaart voor kaart overhoren en elke
beoordeling opslaan in het FSRS-schema van de kaart:

1. `next_review_card` geeft een `cardId` en `frontText` terug, of `card: null` als
   er niets aan de beurt is.
2. Nadat de leerder heeft geantwoord, geeft `reveal_answer` de `backText` van die kaart terug.
3. `submit_review` verwacht de `cardId`, een door de client gegenereerde `reviewId`-UUID, een
   `rating` en de IANA-`reviewedTimeZone` van de leerder. De server legt het
   tijdstip van de herhaling vast en geeft het nieuwe schema van de kaart terug.

Weet je niet zeker of een indiening is aangekomen, probeer het dan opnieuw met dezelfde `reviewId`; er wordt nooit een tweede
herhaling vastgelegd. Een indiening kan ook een van deze antwoorden opleveren:

- `409 REVIEW_EVENT_CONFLICT` — de herhaling was al vastgelegd, en de foutdetails
  bevatten het huidige schema van de kaart.
- `409 REVIEW_ID_CARD_MISMATCH` — de `reviewId` hoort al bij een herhaling van een
  andere kaart, dus er is niets opgeslagen; dien opnieuw in met een nieuwe `reviewId`.
- `409 REVIEW_STALE` — het opgeslagen herhaaltijdstip van de kaart ligt op of na de huidige
  servertijd; herhaal een andere kaart.

Herhalingen worden alleen vastgelegd via `submit_review`: SQL kan niet schrijven naar
`review_events` of de FSRS-planningsstatus. Roep `get_guide` aan met het onderwerp
`review_flow` voor de volledige regels voor herhalen en beoordelen.

## Kaartcontract

Elke kaart volgt één contract, en de tools gaan daarvan uit:

- `front_text` is alleen een vraag of herhaalprompt en bevat nooit het antwoord.
- `back_text` bevat het antwoord, eventueel met een concreet voorbeeld.

Agents die kaarten maken via `sql_execute` volgen dit contract, zodat de
kaarten die ze maken meteen klaar zijn voor gespreide herhaling.

## Authenticatie

Twee autorisatieroutes komen uit bij dezelfde data-interface per gebruiker.

### OAuth 2.1 (interactieve connectorclients)

De server implementeert de authorization-code-flow met PKCE en Dynamic Client
Registration. Voeg de MCP-URL toe als aangepaste connector en geef toestemming in de browser;
er wordt vooraf geen client secret gedeeld. Discovery verloopt volgens de standaard:

- Metadata van de beschermde resource:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Metadata van de autorisatieserver:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API-sleutel (headless en CLI)

Vraag een langdurig geldige agent-API-sleutel met `fca_` aan via de aanmeldflow met een OTP per e-mail
die in de [API-referentie](/docs/api/) is beschreven, en stuur hem mee als Bearer-token:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Dit is dezelfde sleutel die de REST-interface voor agents accepteert, en er is geen browser of
OAuth-uitwisseling voor nodig.

De canonieke machineleesbare beschrijving van beide routes is de discovery-payload
op `https://api.nibomo.com/v1/` (gespiegeld op `/v1/agent`).

## Veiligheid en reikwijdte

Je kunt de SQL-tools veilig goedkeuren: de interface geeft geen willekeurige databasetoegang,
maar is een afgebakend dialect dat door een parser wordt afgedwongen:

- **Gesloten allowlist van statements**: `sql_query` accepteert alleen `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` en `SELECT`; `sql_execute` accepteert alleen `INSERT`,
  `UPDATE` en `DELETE`. Al het andere wordt bij het parsen geweigerd.
- **Beperkte resources**: statements kunnen alleen `workspace`, `cards`, `decks`
  en `review_events` aanraken.
- **Afbakening per werkruimte**: elk SQL-statement en elke herhaling is beperkt tot één
  werkruimte waartoe je toegang hebt, ofwel de `workspaceId` die je meegeeft, ofwel je geselecteerde
  standaardwerkruimte, zonder toegang over tenants heen.
- **Strikte argumenten**: elke tool weigert een onbekend argument, zodat een verkeerd gespelde
  `workspaceId` een fout geeft in plaats van op je standaardwerkruimte te worden uitgevoerd.
- **Limieten**: maximaal `100` rijen per statement, maximaal `50` statements per batch en
  een resultaatlimiet van ongeveer `12k` tokens. Batches met wijzigingen worden atomair toegepast.
- **Scheiding tussen lezen en schrijven**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` en `reveal_answer` zijn strikt alleen-lezen (`readOnlyHint`)
  en repareren nooit data, berekenen de planning nooit opnieuw en wijzigen nooit de status van een kaart.
  `sql_execute` en `submit_review` zijn de enige schrijftools (`destructiveHint`):
  `sql_execute` schrijft kaarten en decks, en `submit_review` legt een herhaling vast en
  schuift het schema van de bijbehorende kaart op.

De hele stack — app, backend en infrastructuur — is open source en kan
[zelf gehost](/docs/self-hosting/) worden, zodat je dezelfde connector op je
eigen deployment kunt draaien.
