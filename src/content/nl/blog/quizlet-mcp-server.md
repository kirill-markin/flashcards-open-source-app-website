---
title: "Heeft Quizlet in 2026 een MCP-server? Wat Claude en Codex kunnen gebruiken"
description: "Quizlet documenteert in 2026 geen MCP-server. Vergelijk de ChatGPT-app, export die alleen voor de maker beschikbaar is en een veilige route voor herhaalde toegang via Claude of Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP-server"
  - "Quizlet Claude-connector"
  - "Quizlet verbinden met Claude"
  - "Quizlet Codex"
  - "Quizlet ChatGPT-app"
  - "alternatief voor de Quizlet-API"
---

Op 12 september 2026 beschrijft de openbare documentatie van Quizlet geen MCP-server of openbare ontwikkelaars-API die je zelfstandig kunt gebruiken. Als je op zoek was naar een Quizlet MCP-URL om in Claude, Codex of een andere MCP-client te plakken, vind je in de documentatie van Quizlet op dit moment geen openbare instructies om dat in te stellen.

Quizlet heeft wel een officiële app in ChatGPT. Die kan een ChatGPT-gesprek omzetten in een nieuwe Quizlet-set, maar die specifieke werkwijze is geen herbruikbare Quizlet MCP-server. Als je een agent herhaaldelijk toegang wilt geven tot bestaande kaarten, is de praktische route: exporteer de tekst van een set die je zelf hebt gemaakt, bewaar een ongewijzigde kopie, controleer de overdracht en gebruik een flashcardsysteem dat lezen en schrijven door agents expliciet ondersteunt.

**Feiten gecontroleerd:** 12 september 2026.

> **Over mijn betrokkenheid:** Ik ben Kirill Markin en ik bouw Nibomo. De MCP-server en Agent API van Nibomo worden hieronder als alternatieven genoemd. Nibomo kan geen verbinding maken met een Quizlet-account en geen Quizlet-URL importeren.

![Een tuinier draagt een jonge plant vanuit een gesloten kas naar een plantbed met vertakkende druppelirrigatie](/blog/quizlet-mcp-server.png)

## De ChatGPT-app, export en MCP dienen verschillende doelen

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) is een open standaard om AI-toepassingen te verbinden met externe systemen. Een MCP-server biedt compatibele clients normaal gesproken een bekend endpoint en een vastgelegde verzameling tools die ze kunnen aanroepen.

De [officiële ChatGPT-aankondiging](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) van Quizlet beschrijft een andere opzet. Je installeert de Quizlet-app in ChatGPT, begint een prompt met `@Quizlet`, bekijkt de gegenereerde flashcards binnen ChatGPT en opent de set vervolgens in Quizlet om die aan te passen en ermee te leren.

Dat is handig als je doel is: ‘zet dit ChatGPT-gesprek om in een Quizlet-set’. De aankondiging publiceert geen algemeen Quizlet-MCP-endpoint, geeft Claude of Codex geen toegang tot je Quizlet-bibliotheek en biedt geen herbruikbare inloggegevens voor ontwikkelaars.

Dit zegt niets over de privé- of interne infrastructuur van Quizlet. Het beschrijft alleen de interface die Quizlet via zijn openbare documentatie beschikbaar stelt. De bredere grenzen van toegang voor ontwikkelaars komen aan bod in [Heeft Quizlet in 2026 een openbare API?](/nl/blog/quizlet-api/).

Dit is het onderscheid:

| Wat je eigenlijk wilt | Best ondersteunde route op dit moment | Wat je kunt verwachten |
| --- | --- | --- |
| Een nieuwe Quizlet-set maken vanuit een ChatGPT-gesprek | De officiële ChatGPT-app van Quizlet | Een specifieke `@Quizlet`-werkwijze binnen ChatGPT, waarna je Quizlet gebruikt om te bewerken en te leren |
| Begrippen en definities overzetten uit een set die je zelf hebt gemaakt | Export via de website van Quizlet | Een eenmalige tekstkopie die je bewaart en controleert |
| Claude, Codex of een andere agent herhaaldelijk flashcards laten lezen of bewerken | Een flashcardsysteem met een gedocumenteerde MCP-server of agent-API | Geauthenticeerde toegang tot de werkruimte in het doelsysteem, niet tot Quizlet |
| Software bouwen die gegevens uit een Quizlet-account gebruikt | Wachten op officiële ontwikkelaarsdocumentatie of een geautoriseerde partnerroute | Er is op dit moment geen openbare Quizlet-API- of MCP-specificatie gedocumenteerd waarmee je zelfstandig aan de slag kunt |

De Quizlet-app voor ChatGPT ondersteunt één manier om sets te maken. Export is bedoeld voor een afgebakende overdracht. MCP biedt herhaalbare toegang tot een systeem dat daar bewust tools voor beschikbaar stelt. Ze zijn niet onderling uitwisselbaar.

## Kies de kortste ondersteunde route

Als de officiële ChatGPT-app al bij je taak past, gebruik die dan. Er is geen reden om een tweede systeem toe te voegen alleen om van één gesprek één Quizlet-set te maken.

Als je alleen een back-up of een eenmalige overdracht nodig hebt, gebruik dan de exportfunctie van Quizlet. Als een agent morgen moet kunnen terugkomen om een kaartenset te vinden, kaarten toe te voegen en ze te corrigeren, heb je aan de kant van het doelsysteem een gedocumenteerde lees- en schrijfinterface nodig. Zolang Quizlet die niet publiceert, kan die terugkerende werkwijze geen ondersteunde rechtstreekse verbinding met je Quizlet-account zijn.

Voor maatwerksoftware die specifiek rond Quizlet-gegevens is gebouwd, geldt dezelfde grens. Een browserverzoek, een oude wrapper of een integratie die iemand via reverse-engineering heeft gemaakt, vervangt geen actuele ontwikkelaarsdocumentatie.

## Houd de overdracht van je eigen set omkeerbaar

Volgens de [officiële exportinstructies](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) van Quizlet kan alleen de maker een set exporteren, en alleen via de website. De stappen zijn **More → Export → Copy text** (Meer → Exporteren → Tekst kopiëren). De export bevat begrippen en definities; Quizlet vermeldt dat afbeeldingen niet kunnen worden geëxporteerd en dat gekopieerde sets niet in aanmerking komen.

Voor een set die je zelf hebt gemaakt, is een zorgvuldige overdracht eenvoudig:

1. Exporteer via de website van Quizlet en plak het resultaat in een tekstbestand zonder opmaak.
2. Bewaar een ongewijzigde UTF-8-kopie voordat je scheidingstekens, regeleinden of formuleringen aanpast.
3. Bewerk een duplicaat, niet de oorspronkelijke export.
4. Controleer een steekproef uit het begin, midden en einde, en controleer ook definities met meerdere regels en niet-Latijnse tekens.
5. Importeer de werkkopie of voeg die als bijlage toe, bekijk enkele voor- en achterkanten en sla pas daarna kaarten op.
6. Bewaar de Quizlet-set en het oorspronkelijke bestand totdat je de kaartenset in het doelsysteem hebt geopend en getest.

Alle controles voor scheidingstekens, CSV en bestanden staan in [Quizlet-sets exporteren in 2026](/nl/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). De belangrijkste beperking zie je gemakkelijk over het hoofd: de export draagt kaarttekst over, maar geen Quizlet-afbeeldingen, mappen, leergeschiedenis, beheersingsniveau of herhaalplanning.

Daarom is het belangrijk dat je de overdracht kunt terugdraaien. Als een definitie met meerdere regels in twee kaarten verandert of een scheidingsteken de velden verschuift, biedt het oorspronkelijke bestand een ongewijzigde referentie.

## Wat Claude en Codex na de export kunnen gebruiken

Nibomo publiceert een extern MCP-endpoint op:

`https://mcp.nibomo.com/mcp`

> [Verbinden met Claude](https://claude.ai/directory/nibomo) · [Documentatie](/nl/docs/mcp-connector/)

De [documentatie van de MCP-connector](/nl/docs/mcp-connector/) beschrijft acht tools: `list_workspaces`, `sql_query` voor lezen, `sql_execute` voor schrijven, `get_guide` voor naslaggidsen, plus `next_review_card`, `reveal_answer` en `submit_review` voor herhalingen. In interactieve MCP-clients kun je via OAuth toestemming geven voor de verbinding. Terminalagents kunnen in plaats daarvan beginnen bij de [documentatie van de Agent API](/nl/docs/api/) en de gepubliceerde HTTP-werkwijze gebruiken.

`get_usage_limits` — uitsluitend leestoegang tot het abonnement, de limieten en het AI-gebruik van het account in de huidige maand; deze tool leest of wijzigt geen kaarten.

Dit maakt Nibomo nog geen Quizlet-connector. De ondersteunde werkwijze is:

1. exporteer tekst uit een Quizlet-set die je zelf hebt gemaakt;
2. bewaar het oorspronkelijke bestand en controleer een werkkopie;
3. controleer hoe de tekst in kaarten is ingedeeld voordat je ze in Nibomo opslaat; en
4. verbind de resulterende Nibomo-werkruimte met een compatibele client om voortaan te kunnen lezen en schrijven.

Voor Claude staan de stappen voor de connector in [Nibomo verbinden met Claude via MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex en andere agents kunnen de gedocumenteerde MCP- of Agent API-route gebruiken die hun omgeving ondersteunt.

Nibomo kan geen Quizlet-URL lezen of Quizlet-account spiegelen. Het kan ook geen latere wijzigingen in Quizlet synchroniseren of afbeeldingen en leergeschiedenis herstellen die niet in de export zitten. Het maakt eigen kaarten en bouwt daarvoor een nieuwe herhaalplanning op op basis van materiaal dat je zelf kiest om over te zetten.

Als je wilt bepalen of die afweging ook los van agenttoegang de moeite waard is, bekijk dan de [vergelijking met een opensource-alternatief voor Quizlet](/blog/quizlet-alternative/).

## Houd de toegangsrechten beperkt tot wat de taak nodig heeft

Een openbare specificatie neemt een deel van het giswerk rond integraties weg, maar maakt niet elke MCP-actie veilig. OAuth authenticeert de verbinding. Het garandeert niet dat een door AI gegenereerde kaart klopt, houdt opgevraagde kaartgegevens niet binnen de flashcarddienst en bepaalt niet of een bewerking overeenkomt met je bedoeling.

Nibomo scheidt leesbewerkingen van de schrijftools: `sql_execute` voor kaarten en kaartensets, `submit_review` voor herhalingen. De OAuth-toegangsgegevens gelden nog steeds voor de volledige connector, dus het blokkeren van tools en de manier waarop goedkeuring werkt, hangen af van de client. Begin met een kleine werkruimte zonder gevoelige gegevens. Laat de agent alleen de gegevens lezen die nodig zijn voor de taak, vereis voor elke schrijfaanroep afzonderlijk goedkeuring als de client dat ondersteunt en bekijk de werkruimte en de voorgestelde wijziging voordat je die accepteert.

Verbind geen privéleermateriaal voordat je de voorwaarden van de AI-client voor gegevensbewaring en gegevensverwerking hebt gecontroleerd. Het uitgebreide dreigingsmodel staat in [Is MCP veilig voor flashcards?](/blog/is-mcp-safe-for-flashcards/). Voor een eerste overdracht volstaat een eenvoudige regel: bewaar de oorspronkelijke export, bekijk een paar kaarten, keur een beperkte schrijfactie goed en controleer het resultaat in de doelapp voordat je verdergaat.

## Maak van privébrowserverkeer geen API

Een verzoek dat zichtbaar is in de ontwikkelaarstools van je browser, is geen openbare Quizlet-API. Privé-endpoints kunnen afhankelijk zijn van sessiecookies, interne formaten en gedrag dat zonder aankondiging verandert. Elk geautomatiseerd gebruik moet ook voldoen aan de [gebruiksvoorwaarden van Quizlet](https://quizlet.com/tos) en aan de rechten die je voor het materiaal hebt.

Dit artikel bevat geen instructies voor scraping of via reverse-engineering achterhaalde endpoints. Als de officiële ChatGPT-app bij je taak past, gebruik die dan. Als je de set zelf hebt gemaakt en die eenmalig wilt verplaatsen, exporteer die dan. Als je agents herhaaldelijk wilt laten lezen en schrijven, zet gecontroleerde inhoud dan over naar een systeem dat die interface publiceert. Blijf de Quizlet-kant daarna handmatig beheren, tenzij Quizlet iets nieuws documenteert.
