---
title: "Heeft Quizlet in 2026 een openbare API? Huidige status en veilige alternatieven"
description: "Heeft Quizlet een API? Op 18 augustus 2026 is er geen gedocumenteerde openbare API waarvoor je je zelfstandig kunt aanmelden. Vergelijk de ondersteunde alternatieven."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "heeft Quizlet een API"
  - "openbare Quizlet API"
  - "Quizlet API voor ontwikkelaars"
  - "alternatief voor Quizlet API"
  - "flashcards automatiseren"
---

Op 18 augustus 2026 documenteert Quizlet geen openbare API voor ontwikkelaars waarvoor je je zelfstandig kunt aanmelden, en ook geen openbaar ontwikkelaarsportaal. Een onafhankelijke ontwikkelaar heeft momenteel geen officiële manier om een app te registreren, een Quizlet-API-sleutel te krijgen en via gedocumenteerde endpoints flashcardgegevens te lezen of te schrijven.

Dit is een bevinding over de openbare documentatie van Quizlet, geen uitspraak over de interne systemen. Quizlet heeft duidelijk product- en partnerintegraties. De ChatGPT-app en de Google Classroom-add-on zijn twee actuele voorbeelden. Geen van beide stelt een algemene Quizlet-API voor ontwikkelaars beschikbaar aan andere applicaties.

**Feiten gecontroleerd:** 18 augustus 2026.

> **Transparantie:** ik ben Kirill Markin en ik bouw Nibomo. De Agent API en MCP-server van Nibomo worden hieronder als alternatieven genoemd. Nibomo is niet compatibel met Quizlet en importeert Quizlet-sets niet automatisch.

![Ontwikkelaar die export en insluiting van Quizlet-sets, specifieke integraties en een gedocumenteerde flashcard-API vergelijkt](/blog/quizlet-api.png)

## Kort antwoord: geen gedocumenteerde Quizlet-API waarvoor je je zelfstandig kunt aanmelden

Zocht je op ‘heeft Quizlet een API?’ omdat je Quizlet zelf wilt automatiseren, dan is het praktische antwoord op dit moment: **er is geen openbare API gedocumenteerd waarvoor je je zelfstandig kunt aanmelden**.

Verschillende officiële functies kunnen van buitenaf op een API lijken. Ze zijn bedoeld voor beperktere taken:

| Wat je nodig hebt | Ondersteunde manier | Geschikt voor | Niet beschikbaar |
|---|---|---|---|
| Tekst overzetten uit een set die je zelf hebt gemaakt | [Export via de Quizlet-website](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Een eenmalige kopie van begrippen en definities | Afbeeldingen, export van gekopieerde sets, leergeschiedenis of API-toegang |
| Een openbare set op een website of LMS-pagina plaatsen | [Quizlet insluiten](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Een Quizlet-leeractiviteit met de Quizlet-huisstijl op je eigen pagina | Gestructureerde kaartgegevens of lees- en schrijftoegang |
| Een ChatGPT-gesprek omzetten in een Quizlet-set | [Quizlet-app in ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Een set maken en bekijken via `@Quizlet` | Inloggegevens of endpoints voor je eigen app |
| Quizlet-opdrachten toewijzen in Google Classroom | [Quizlet-add-on voor Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Activiteiten zoeken, toewijzen en volgen in Classroom | Een algemene API voor eigen onderwijssoftware |
| Je eigen Quizlet-integratie bouwen | Er is momenteel geen manier gedocumenteerd om dit zelfstandig te regelen | Er kan een overeenkomst met een specifieke partner bestaan | Openbare aanmelding, API-sleutels of een gedocumenteerd contract voor kaartgegevens |
| Je eigen werkruimte met flashcards automatiseren | [Nibomo Agent API](/nl/docs/api/) of [MCP-connector](/nl/docs/mcp-connector/) | Herhaaldelijk kaarten en kaartensets lezen en schrijven binnen een werkruimte | Quizlet-compatibiliteit of automatische Quizlet-import |

Het onderscheid is eenvoudig: de tekst van je eigen kaarten eenmalig kopiëren is een exporttaak. Om Quizlet op een andere pagina te tonen, gebruik je de insluitfunctie. Een specifieke integratie werkt alleen binnen de werkwijze waarvoor die is gemaakt. Software die herhaaldelijk kaarten maakt, leest en bewerkt, heeft een gedocumenteerde lees- en schrijf-API nodig.

## Export, insluiten en partnertoegang zijn geen openbare API's

Een openbare API biedt externe ontwikkelaars een contract: documentatie, authenticatie, ondersteunde bewerkingen, gebruiksregels en een manier om toegangsgegevens te verkrijgen. Geen van de huidige openbare mogelijkheden van Quizlet biedt zo'n volledige route voor zelfstandige toegang.

De **exportfunctie** van Quizlet is een handmatige overdracht. De maker van een set kan op de website instellen hoe de begrippen en definities worden geordend, **Tekst kopiëren (Copy text)** kiezen en het resultaat elders plakken. Volgens Quizlet kun je geen afbeeldingen exporteren, kun je gekopieerde sets niet exporteren en is deze functie alleen op de website beschikbaar. Dit werkt voor een zorgvuldige, eenmalige migratie. Software kan er geen twee systemen mee gesynchroniseerd houden.

**Insluiten** draait om weergave, niet om toegang tot gegevens. Quizlet laat je HTML kopiëren voor een openbare set in de modus Match, Learn, Test, Flashcards of Spell. De ingesloten activiteit behoudt het Quizlet-logo en leerlingen gebruiken de interface van Quizlet. Je applicatie ontvangt de set niet als bewerkbare kaartrecords.

Een **specifieke integratie** heeft een eigen, afgesproken werkwijze binnen een product. Quizlet kan samenwerken met ChatGPT of Google Classroom zonder dezelfde interface aan elke ontwikkelaar aan te bieden. Die lanceringen bewijzen dat de specifieke integraties bestaan. Ze bewijzen niet dat daarachter een openbare Quizlet-API voor algemeen gebruik beschikbaar is.

Daarom is een oude wrapper of een verzoek dat je in de ontwikkelaarstools van je browser ziet, ook geen ondersteunde Quizlet-API. Openbare documentatie en een stabiel contract voor ontwikkelaars ontbreken.

## Kies de aanpak die past bij je taak

### Gebruik export voor een eenmalige back-up of migratie

Gebruik de officiële exportstappen van Quizlet voor een set die je zelf hebt gemaakt. Omdat de stappen eindigen met **Tekst kopiëren (Copy text)**, bewaar je de eerste geplakte kopie ongewijzigd voordat je scheidingstekens aanpast of velden koppelt. Je bewaart begrippen en definities; je downloadt geen kaartenset die je volledig kunt herstellen. Afbeeldingen en leergeschiedenis blijven achter.

De praktische checklist staat in [Quizlet-sets exporteren in 2026](/nl/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Die behandelt onbewerkte kopieën en werkkopieën, UTF-8, tabs, definities over meerdere regels en het verschil tussen kaartinhoud en herhalingsplanning overzetten.

Export past bij een eenmalige overdracht. Het is niet geschikt voor dagelijks kaarten maken, synchronisatie of herhaalde bewerkingen vanuit software.

### Gebruik de officiële insluitfunctie voor weergave

Wil je dat leerlingen met een openbare Quizlet-set leren op een klaswebsite of LMS-pagina, gebruik dan de insluitcode die Quizlet op zijn website aanbiedt. Kies de activiteit, selecteer **HTML kopiëren (Copy HTML)** en voeg het resultaat toe aan de pagina. Leerlingen krijgen een interactieve Quizlet-activiteit; de website waarop die staat, krijgt geen ruwe kaartgegevens aangeleverd.

Dat is vaak alles wat een docent nodig heeft. Het een API noemen maakt de vraag alleen ingewikkelder dan nodig.

### Gebruik voor ChatGPT of Google Classroom de specifieke integratie

De ChatGPT-aankondiging van Quizlet van 10 maart 2026 beschrijft een specifieke werkwijze: koppel de Quizlet-app, begin een prompt met `@Quizlet`, bekijk een voorbeeld van de gemaakte set in ChatGPT en open de set daarna in Quizlet om die aan te passen en ermee te leren. Dit is een ondersteunde manier om vanuit dat gesprek een Quizlet-set te maken. Je bot, script of website krijgt daarmee geen herbruikbare Quizlet-API-toegangsgegevens.

De Google Classroom-aankondiging van Quizlet van 30 juni 2026 is net zo specifiek. Met de add-on kunnen docenten activiteiten zoeken en toewijzen, waaronder oefenvragen, flashcards en spellen. Daarna kunnen ze deelname en voortgang in Classroom volgen. Volgens Quizlet is Google Workspace for Education Plus vereist; docenten moeten hun IT-beheerder mogelijk vragen om toestemming of om de add-on beschikbaar te stellen.

Past een van deze specifieke werkwijzen al bij je doel, gebruik die dan. Wil je een eigen applicatie bouwen, dan vervangt geen van beide integraties openbare toegang voor ontwikkelaars.

### Kies voor terugkerende automatisering een gedocumenteerde lees- en schrijfinterface

Bij doorlopende automatisering moet je software hetzelfde werk betrouwbaar kunnen herhalen: kaarten maken van aantekeningen, kaartensets opvragen, antwoorden bijwerken of een werkruimte langere tijd beheren. Een export via het klembord biedt dat contract niet.

De veilige aanpak is een flashcardsysteem dat expliciet publiceert hoe externe software zich authenticeert en welke lees- en schrijfbewerkingen het ondersteunt. Dat kan betekenen dat je voor de geautomatiseerde werkwijze een alternatief voor de Quizlet-API kiest, terwijl je Quizlet blijft gebruiken voor de leertaken die het openbare product ondersteunt.

## Wat het API-alternatief van Nibomo precies biedt

Nibomo publiceert twee manieren om toegang te krijgen tot dezelfde beperkte gegevens, per gebruiker:

- De [externe Agent API](/nl/docs/api/) begint bij `GET https://api.nibomo.com/v1/`. Het antwoord op dit eerste verzoek begeleidt een agent bij het inloggen met een eenmalige code per e-mail, het maken van een API-sleutel en het selecteren van een werkruimte. Gegevens lezen gaat via een queryroute met SQL-achtige opdrachten; schrijven via een aparte execute-route.
- De [externe MCP-server](/nl/docs/mcp-connector/) is beschikbaar op `https://mcp.nibomo.com/mcp`. MCP-clients krijgen acht tools: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` en de herhalingstools `next_review_card`, `reveal_answer` en `submit_review`.

Met `get_usage_limits` kun je uitsluitend het abonnement van het account, de limieten en het huidige maandelijkse AI-gebruik opvragen; deze tool leest of wijzigt geen kaarten.

Beide manieren beperken de toegang tot de gekozen werkruimte. De gepubliceerde resources zijn `workspace`, `cards`, `decks` en `review_events`. Resultaten zijn beperkt tot 100 rijen per opdracht. De SQL-achtige interface gebruikt een beperkt dialect en biedt geen rechtstreekse toegang tot PostgreSQL. Er is geen OpenAPI-schema, dus werkwijzen die afhankelijk zijn van gegenereerde OpenAPI-clients hebben een andere interface nodig.

Dit kan een ontwikkelaar of AI-agent helpen eigen flashcards te automatiseren. Via deze interfaces kun je geen Quizlet-URL uitlezen, een Quizlet-account spiegelen of als ongedocumenteerde Quizlet-client werken. Er is geen automatische Quizlet-importfunctie. Exporteer voor een migratie eerst de begrippen en definities uit je eigen set, controleer de tekst en koppel die daarna aan de kaartvelden van de doelapp. De doelapp maakt haar eigen leerstatus aan; de Quizlet-geschiedenis komt niet mee.

Voor productverschillen buiten API-toegang kun je de [vergelijking met een opensource-alternatief voor Quizlet](/blog/quizlet-alternative/) bekijken.

## Niet-openbare browserverzoeken zijn geen veilige omweg

De webinterface van Quizlet doet netwerkverzoeken, zoals elke moderne webapplicatie. Zo'n verzoek vinden maakt het nog geen ondersteund endpoint voor je programma.

Niet-openbare browserendpoints kunnen afhankelijk zijn van sessiecookies, interne formaten, maatregelen tegen misbruik en aannames die bij de huidige interface horen. Ze kunnen veranderen zonder openbare versieaanduiding of migratie-instructies. Bovendien verbieden de [gebruiksvoorwaarden van Quizlet](https://quizlet.com/tos), voor het laatst bijgewerkt op 28 mei 2026, scraping en andere geautomatiseerde gegevensextractie, evenals ongeautoriseerd geautomatiseerd gebruik van de dienst.

Dat is een kwetsbare en riskante basis voor een persoonlijk script, laat staan voor een product. Ik geef hier geen gegokte endpoints of stappen voor reverse-engineering.

Exporteer je eigen set als je die eenmalig wilt overzetten. Sluit een openbare set in als leerlingen die op een andere pagina nodig hebben. Gebruik de specifieke ChatGPT- of Google Classroom-integratie voor precies die werkwijzen. Kies voor terugkerende lees- en schrijfbewerkingen software die het automatiseringscontract documenteert, of houd het Quizlet-deel handmatig totdat Quizlet zo'n contract publiceert.

## Hoe je ziet of de status verandert

Quizlet kan na de datum waarop de feiten in dit artikel zijn gecontroleerd een ontwikkelaarsprogramma lanceren. Let op een officieel ontwikkelaarsportaal of documentatie die uitlegt wie zich kan registreren, hoe authenticatie werkt, welke kaartbewerkingen worden ondersteund en welke gebruiksregels gelden.

Een nieuwe wrapper van een derde partij verandert het antwoord niet. Een nieuwe samenwerking met een specifieke partner evenmin. Zolang Quizlet geen toegang voor ontwikkelaars documenteert waarvoor je je zelfstandig kunt aanmelden, ga je voorzichtig om met claims over een actuele Quizlet-API en kies je de ondersteunde aanpak die bij je werkelijke taak past.
