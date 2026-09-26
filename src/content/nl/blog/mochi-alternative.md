---
title: "Mochi-flashcards beoordeeld (2026): gratis abonnement, offline gebruik en vergelijking met Anki"
description: "Een beoordeling van Mochi-flashcards op basis van gecontroleerde bronnen: gratis abonnement, offline apps, Markdown-notities, FSRS, synchronisatie, Anki-import, export en grenzen aan zelf hosten."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi flashcards"
  - "mochi kaarten"
  - "mochi tegenover anki"
  - "anki tegenover mochi"
  - "is mochi gratis"
  - "mochi offline"
  - "mochi prijzen"
  - "mochi hosting"
  - "markdown flashcards"
  - "mochi gespreide herhaling"
---

Mochi begint met een Markdown-document, niet met vaste invoervelden voor de voor- en achterkant. Voeg een regel met drie streepjes toe en het document krijgt afzonderlijke kanten voor het herhalen. Laat het als notitie staan, koppel het aan een andere kaart of archiveer het zodat je het kunt blijven doorzoeken zonder dat het in de herhaalwachtrij komt.

Dat kleine scheidingsteken verklaart voor wie **Mochi-flashcards** geschikt zijn. Mochi past goed bij iemand die notities en gespreide herhaling wil combineren in één app die primair lokaal werkt. Dat geldt vooral als Markdown, terugverwijzingen en een eenvoudige keuze tussen Remembered (onthouden) en Forgot (vergeten) natuurlijk aanvoelen. Het overtuigt minder als je Anki al langer gebruikt en je verzameling afhankelijk is van gegenereerde kaartvarianten, aangepaste HTML/CSS, JavaScript, add-ons of uitgebreide instellingen voor de herhaalplanner.

Als je op één apparaat werkt, biedt het gratis abonnement meer dan een proefperiode: registreren is niet nodig en Mochi beschrijft onbeperkt offline gebruik. De beperking is dat synchronisatie tussen apparaten onder het **Pro-abonnement van US$5 per maand** valt. Voor een Anki-gebruiker zijn de verliezen bij het overzetten de grotere kostenpost. Mochi kan een Anki-pakket en de herhaalgeschiedenis importeren, maar kan niet elk sjabloon, elke opmaak, elk script, elke plannerinstelling of elke functie van add-ons behouden.

> **Over mijn betrokkenheid:** Ik ben Kirill Markin en ik bouw [Nibomo](/nl/). Deze beoordeling van de werkwijze is gebaseerd op gecontroleerde bronnen; ik beweer niet dat ik het product zelf in de praktijk heb getest. Er staan geen affiliatelinks in. De vergelijking draait om Mochi en Anki; mijn product verschijnt pas tegen het einde als duidelijk aangeduid alternatief.

**Feiten gecontroleerd:** 7 september 2026. De nieuwste zichtbare [Mochi-release](https://mochi.cards/changelog/) was op die datum versie 26.8.2, van 10 augustus 2026. Prijzen en gegevens in appstores kunnen veranderen.

![Een boekrestaurator test een kleine reeks gekoppelde kaarten die als een harmonica is gevouwen terwijl het oorspronkelijke archief veilig in dozen blijft](/blog/mochi-alternative-v3.png)

## Het korte oordeel

- **Kies Mochi** als je Markdown-notities en kaarten bij elkaar wilt, offline gebruik zonder account op één apparaat, terugverwijzingen en een keuze uit twee beoordelingen bij het herhalen.
- **Kies Anki** als je beproefde notitietypen, HTML/CSS-sjablonen, add-ons, gratis gehoste synchronisatie, vier beoordelingen of uitgebreidere FSRS-instellingen nodig hebt.
- **Stap nog niet over** als je al consequent herhaalt en niet kunt benoemen welk probleem Mochi in je werkwijze oplost. Een nieuwe interface is onvoldoende reden om jaren aan planningsgegevens en aangepaste kaarten op het spel te zetten.
- **Test voordat je overstapt** als je verzameling al lange tijd in Anki staat. Mochi accepteert `.apkg`-bestanden en kan de herhaalgeschiedenis meenemen, maar zet HTML om naar Markdown en verwijdert CSS en JavaScript.

## Mochi en Anki in één oogopslag

| Afweging | Mochi | Anki |
|---|---|---|
| Past het beste bij | Gebruikers van gekoppelde notities en Markdown die notities naast herhaalkaarten willen | Mensen die een beproefd, instelbaar flashcardsysteem willen |
| Kaarten maken | Een Markdown-document krijgt meerdere kanten als je `---` toevoegt; velden en sjablonen zijn ook beschikbaar | Notities bevatten velden; HTML/CSS-sjablonen genereren één of meer kaarten |
| Herhalen | Nieuwe kaarten doorlopen eerst een leerfase; geleerde kaarten gebruiken Forgot / Remembered (vergeten / onthouden) | Kaarten gebruiken Again / Hard / Good / Easy (opnieuw / moeilijk / goed / makkelijk) |
| Planning | Standaard Mochi's eigen algoritme; FSRS is optioneel | FSRS of het oudere SM-2, met uitgebreidere hulpmiddelen om FSRS af te stellen |
| Gratis gebruik | Geen registratie en onbeperkt offline gebruik | Gratis desktopapps en gratis AnkiWeb-synchronisatie; de officiële iOS-app is betaald |
| Synchronisatie tussen apparaten | Pro, US$5 per maand | Gratis via AnkiWeb |
| Platforms | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, het officiële AnkiMobile, het onafhankelijk ontwikkelde AnkiDroid |
| Overdraagbare formaten | Export in het eigen `.mochi`-formaat, Markdown en CSV | De eigen formaten `.colpkg` en `.apkg`, plus tekst met tabs als scheidingstekens |
| Grenzen aan gegevensbeheer en hosting | Werkt primair lokaal; de kernapp wordt niet als open source aangeboden en er is geen ondersteunde synchronisatiedienst voor zelf hosten gedocumenteerd | De hoofdrepository heeft een AGPL-licentie; er is een officiële synchronisatieserver voor zelf hosten gedocumenteerd |

Het bruikbare onderscheid is **eenvoud met notities als uitgangspunt tegenover controle over de hele verzameling**.

## Waar de interface van Mochi om draait

De interface van Mochi wordt duidelijker als je één kaart door het proces volgt.

Elke kaart hoort bij een kaartenset. Klik op **New Card** (nieuwe kaart) en je krijgt een Markdown-werkvlak in plaats van vaste vakken voor vraag en antwoord. Eén kaart kan koppen, lijsten, code, afbeeldingen, gestructureerde velden en links bevatten. Voeg `---` tussen blokken toe om twee of meer kanten voor het herhalen te maken. Gebruik dubbele vierkante haken, zoals in `[[double brackets]]`, om naar een andere kaart te verwijzen; Mochi maakt automatisch een terugverwijzing aan. Het officiële [overzicht van kaarten](https://mochi.cards/docs/cards/) beschrijft ook sjablonen waarvan de plaatsaanduidingen waarden uit gestructureerde velden weergeven.

Kaarten kunnen twee functies vervullen zonder in aparte systemen te staan:

- een herhaalkaart heeft meerdere kanten en wordt ingepland voor gespreide herhaling;
- een naslagnotitie kan in dezelfde kaartenset blijven en worden gearchiveerd. Daardoor verdwijnt die uit de wachtrijen voor nieuwe kaarten en kaarten die aan de beurt zijn, zonder de inhoud, tags, links of geschiedenis te verwijderen.

[Weergaven van kaartensets](https://mochi.cards/docs/decks/custom-views/) zijn opgeslagen combinaties van filters, sortering en indeling. Je kunt een rasterweergave houden om gewoon te bladeren en daarnaast een weergave maken voor kaarten met een bepaalde tag, kaarten die aan de beurt zijn, kaarten die je vaak vergeet of kaarten die je onlangs hebt herhaald. Mochi kan een weergave ook gebruiken voor een stampsessie zonder de normale planning of herhaalgeschiedenis te veranderen. Dat zegt meer dan de interface ‘overzichtelijk’ noemen: dezelfde kaartenset kan dienen als notitieboek, gefilterde database en leerwachtrij.

Het [dagelijks herhalen](https://mochi.cards/docs/getting-started/reviewing-cards/) heeft twee fasen. Bij **New cards** (nieuwe kaarten) voeg je een kaart toe aan het herhaalschema of kies je Again (opnieuw) om die binnenkort nog eens te zien. Zodra een geleerde kaart aan de beurt is, toon je de volgende kant en kies je **Forgot** (vergeten) of **Remembered** (onthouden). Als je het antwoord vergeten bent, plaatst Mochi de kaart eerst in een wachtrij om opnieuw te herhalen voordat het de voortgang terugzet. Zo blijft de keuze tijdens het herhalen bewust beperkt.

## Is Mochi gratis en wat werkt offline?

Mochi is gratis te gebruiken, maar ‘gratis’ en ‘offline’ betekenen iets anders afhankelijk van waar je het gebruikt. De [prijspagina van Mochi](https://mochi.cards/) vermeldt:

- **Free:** voor altijd US$0, zonder registratie, met onbeperkt offline gebruik.
- **Pro:** US$5 per maand, met daarnaast synchronisatie tussen apparaten, kaartensets publiceren, dynamische velden, AI-integratie en ondersteuning per e-mail.

Mochi werkt op macOS, Windows, Linux, iOS, Android en het web. De [download- en installatiegids](https://mochi.cards/docs/getting-started/download-and-install/) maakt het praktische onderscheid:

| Omgeving | Wat gratis en offline betekenen |
|---|---|
| Geïnstalleerde desktop- of mobiele app | Je kunt Mochi offline gebruiken zonder account. Gegevens staan op het apparaat, waardoor één geïnstalleerde app voldoende kan zijn om volledig gratis te werken. |
| Webapp zonder Pro | De inhoud staat in de offline opslag van de browser. Mochi waarschuwt dat een browser deze gegevens zonder waarschuwing kan wissen. |
| Dezelfde verzameling op meerdere apparaten | Automatische synchronisatie tussen apparaten is een Pro-functie, ook al kan elke geïnstalleerde app offline werken. |

Offline gebruik en synchronisatie zijn afzonderlijke beloften. Je hebt Pro niet nodig om kaarten te maken of te herhalen in een gedownloade app. Je hebt het wel nodig als dezelfde bijgewerkte verzameling automatisch van je laptop naar je telefoon moet meegaan. Bewaar voor belangrijke gegevens uit het gratis abonnement een back-up in het eigen formaat. Laat een apparaat, en zeker de browseropslag, niet je enige kopie zijn.

Als offline gebruik de doorslag geeft, vergelijk dan het precieze gebruik op je apparaten in [Werkt Anki offline?](/blog/does-anki-work-offline/) en de bredere [gids voor offline flashcard-apps](/blog/best-offline-flashcards-app/).

## Markdown-flashcards zijn de echte reden om Mochi te kiezen

Het echte voordeel van Mochi is dat Markdown verandert hoe je je bronmateriaal bijhoudt.

Een Mochi-kaart blijft leesbaar als tekst. Hetzelfde document kan een korte uitleg, een codeblok, links naar verwante ideeën en scheidingstekens tussen de te herhalen kanten bevatten. Kaarten kunnen ook velden en sjablonen gebruiken als een terugkerende structuur belangrijk is. Als je een sjabloon toepast, geeft Mochi de Markdown van het sjabloon weer met plaatsaanduidingen voor velden. De eigen Markdown van de kaart wordt bij die weergave genegeerd, maar niet verwijderd.

Anki vertrekt vanuit een ander model. Een notitie slaat velden op en [kaartsjablonen](https://docs.ankiweb.net/templates/intro.html) bepalen welke velden verschijnen en welke kaarten worden gegenereerd. Sjablonen gebruiken HTML, met CSS voor de opmaak. Eén woordenschatnotitie kan daardoor kaarten voor herkenning en actieve reproductie genereren, terwijl de onderliggende gegevens op één plek blijven.

Die structuur geeft Anki meer mogelijkheden voor voorwaardelijke indelingen, gegenereerde kaartvarianten, getypte antwoorden, aangepaste opmaak en werkwijzen die met add-ons zijn uitgebreid. Het betekent ook dat Anki geen flashcard-app met ingebouwde Markdown-ondersteuning is. Werken met Markdown in Anki vraagt een extra conversiestap of add-on.

De praktische vraag is eenvoudig: wil je een notitie die een kaart kan worden, of een gestructureerd notitietype dat meerdere kaarten kan genereren? Mochi richt zich op het eerste. Anki op het tweede.

## Gespreide herhaling in Mochi ondersteunt nu ook FSRS

Vergelijkingen die zeggen dat Mochi geen FSRS heeft, zijn verouderd. Mochi voegde in 2025 een proefversie van FSRS toe en heeft sindsdien fouten rond de herhaalplanner verholpen. Toch blijft [Mochi's eigen algoritme de standaard](https://mochi.cards/docs/reviewing/fsrs/).

Het standaardalgoritme past intervallen met vaste vermenigvuldigingsfactoren aan na elke herhaling waarbij je het antwoord onthield of vergat. Schakel in Review Settings (herhaalinstellingen) over naar FSRS en bestaande geleerde kaarten gaan over op FSRS zonder hun geschiedenis te verliezen. Je kunt de gewenste retentie instellen, eigen parameters invoeren en later terugschakelen.

Mochi houdt bij beide herhaalplanners vast aan twee beoordelingen:

- **Forgot** (vergeten) komt overeen met Again (opnieuw) in FSRS.
- **Remembered** (onthouden) komt overeen met Good (goed) in FSRS.

Volgens de documentatie van Mochi werkt beoordelen met twee keuzes met FSRS, al gaat een deel van de informatie die Hard (moeilijk) en Easy (makkelijk) zouden geven verloren. Mochi accepteert geoptimaliseerde eigen parameters, maar heeft geen ingebouwde optimizer. Om persoonlijke parameters te berekenen heb je een externe FSRS-optimizer en je Mochi-herhaalgeschiedenis nodig.

[Anki's FSRS-instellingen](https://docs.ankiweb.net/deck-options.html#fsrs) gaan verder. Je kunt de gewenste retentie en parameters aan instellingenprofielen koppelen, de ingebouwde optimizer kan parameters op de herhaalgeschiedenis afstemmen en de simulator schat het aantal herhalingen of leerminuten bij verschillende instellingen. Anki registreert ook vier uitkomsten: Again, Hard, Good en Easy (opnieuw, moeilijk, goed en makkelijk).

Die extra knoppen helpen alleen als je ze consequent gebruikt. In Anki's handleiding betekent Hard dat je het antwoord wel wist. Als je Hard kiest terwijl je het antwoord vergeten bent, geef je FSRS de verkeerde informatie en kunnen de intervallen te lang worden.

Kies de twee beoordelingen van Mochi als de keuze tussen weten en niet weten je herhaalsessie overzichtelijk houdt. Kies Anki als je de extra beoordelingsinformatie wilt en de optimizer, retentie-instellingen, instellingenprofielen of simulator voor de studielast gaat gebruiken. Voor een vergelijking van de herhaalplanners in plaats van de apps lees je [FSRS tegenover SM-2](/blog/fsrs-vs-sm-2/).

## Bij Mochi en Anki betaal je voor andere dingen

Als je op één computer leert, kun je beide apps gratis gebruiken. Zodra je meer apparaten gebruikt, komen de kosten op een andere plek te liggen.

Mochi vraagt **US$5 per maand** voor Pro-synchronisatie en bundelt die met publiceren, dynamische velden, AI-integratie en ondersteuning. Anki's desktopapps zijn gratis en de [officiële Anki-site](https://apps.ankiweb.net/) beschrijft AnkiWeb-synchronisatie als gratis. AnkiMobile is de betaalde officiële app voor iPhone en iPad; AnkiDroid is een gratis, onafhankelijk ontwikkelde Android-app.

‘Welke is goedkoper?’ hangt dus af van je apparaten:

- één computer: beide kunnen gratis zijn;
- meerdere computers of Android-apparaten: met Anki's gratis gehoste synchronisatie heb je geen abonnement nodig;
- iPhone of iPad: bij Anki koop je de app eenmalig, terwijl Mochi synchronisatie tussen apparaten onder het doorlopende Pro-abonnement plaatst;
- Mochi-gebruikers die toch al willen publiceren of dynamische velden of AI-integratie willen gebruiken, kunnen synchronisatie zien als één onderdeel van de bundel in plaats van de volledige kostenpost.

Controleer de regionale App Store voordat je exacte totaalbedragen voor iOS vergelijkt. Deze beoordeling noemt geen vast bedrag voor een appstoreprijs die per markt kan verschillen.

## Mochi hosten is iets anders dan primair lokaal werken

Drie begrippen worden vaak op één hoop gegooid:

- **Primair lokaal (local-first)** betekent dat de werkkopie op je apparaat staat en de app zonder zijn clouddienst kan blijven werken.
- **Open source** betekent dat de broncode beschikbaar is onder een licentie die inzage en aanpassing toestaat.
- **Zelf hosten** betekent dat het product een ondersteunde manier beschrijft om de betreffende dienst op je eigen infrastructuur te draaien.

Mochi beschrijft duidelijk dat het primair lokaal werkt. Het presenteert zijn kernapp niet als open source: de link ‘Open source’ onderaan de openbare website leidt naar [een verzameling integraties](https://github.com/mochi-cards/open-source), niet naar de kernapplicatie. De eigen website beschrijft ook geen ondersteunde vervanger voor Pro-synchronisatie die je zelf kunt hosten.

Als je zoekt naar **Mochi-hosting** omdat je een eigen server wilt, is dit de grens: je kunt lokale gegevens en back-ups in het eigen formaat bewaren, maar de gedocumenteerde route voor gebruik op meerdere apparaten is Mochi Pro. Primair lokaal werken geeft nuttige controle over je gegevens; je host daarmee niet zelf de synchronisatiedienst.

Anki's hoofdrepository heeft [een AGPL-licentie, versie 3 of later](https://github.com/ankitects/anki/blob/main/LICENSE), met vermelde uitzonderingen voor enkele onderdelen. De officiële handleiding beschrijft ook een [synchronisatieserver om zelf te hosten](https://docs.ankiweb.net/sync-server.html) voor gevorderde gebruikers. Die server vervangt AnkiWeb-synchronisatie voor compatibele apps. Het is geen zelfgehoste kopie van de AnkiWeb-website en Anki verwacht dat de beheerder zelf problemen rond de opdrachtregel, netwerken, firewalls, protocollen en updates kan oplossen.

## Wat een Anki-import behoudt en wat er verandert

Volgens de [importdocumentatie](https://mochi.cards/docs/import-and-export/importing/) accepteert Mochi Anki-bestanden in `.apkg`-formaat, inclusief herhaalgeschiedenis. Dat een kaart is geïmporteerd, betekent nog niet dat die hetzelfde werkt.

Tijdens het importeren zet Mochi HTML om naar Markdown en verwijdert het CSS en JavaScript. Dat is een conversie tussen twee verschillende kaartmodellen. Eenvoudige kaarten met een voor- en achterkant zijn het makkelijkste geval. Een kaart die afhankelijk is van opmaak, sjabloonlogica, interacties met getypte invoer of JavaScript moet je na het importeren controleren.

Voor de herhaalgeschiedenis moet je bij het exporteren ook bewust een optie kiezen. Volgens Anki's [exporthandleiding](https://docs.ankiweb.net/exporting.html) bepaalt **Include Scheduling Information** (planningsgegevens opnemen) of de herhaalgeschiedenis in het pakket komt. Laat je die optie uit, dan kan Mochi geen geschiedenis terughalen die nooit in het `.apkg`-bestand zat.

Verwacht ook bij een overgezette geschiedenis geen identieke toekomstige herhaaldatums. De twee apps kunnen verschillende herhaalplanners, beoordelingen, retentiedoelen, parameters, leerstappen en instellingen voor kaartensets gebruiken. Bewaarde gebeurtenissen geven de nieuwe planner informatie; ze maken de systemen niet identiek.

## Back-ups in het eigen formaat en overdraagbare tekst hebben andere doelen

Bewaar voordat je iets overzet een back-up waarmee je het oorspronkelijke systeem kunt herstellen. Een leesbare export is nuttig, maar daarmee kun je niet altijd alles herstellen.

Mochi's [back-upgids](https://mochi.cards/docs/getting-started/backing-up/) beschrijft twee manieren om een back-up in het eigen formaat te bewaren:

- Een kopie van de hele gebruikersmap bewaart de inhoud, herhaalgeschiedenis, bijlagen, appinstellingen en inlogstatus.
- Een `.mochi`-export bewaart kaartensets, kaarten, sjablonen en velden, bijlagen, tags en metadata, herhaalgeschiedenis, kaartvolgorde en de structuur van kaartensets.

Mochi's [Markdown- en CSV-exports](https://mochi.cards/docs/import-and-export/exporting/) zijn bedoeld voor overdraagbaarheid. Markdown maakt één bestand per kaart en mappen voor onderliggende kaartensets, maar bewaart geen herhaalgeschiedenis, kaartvolgorde of sjablonen. Metadatatags blijven alleen behouden als ze in de Markdown staan. CSV kan sjabloonvelden of weergegeven voor- en achterkanten exporteren, maar bewaart geen herhaalgeschiedenis of sjablonen. Metadatatags blijven alleen behouden als ze in de inhoud zijn opgenomen.

Anki maakt een vergelijkbaar onderscheid:

- Een `.colpkg` exporteert de hele verzameling met planning en kan media bevatten. Bij het importeren vervangt het de kaarten in de Anki-doelverzameling.
- Een `.apkg` exporteert één kaartenset en de onderliggende kaartensets, met opties voor planningsgegevens, instellingenprofielen en media.
- Notities in platte tekst gebruiken velden met tabs als scheidingstekens en ingesloten HTML-opmaak. Ze bewaren bewerkbare inhoud, niet de volledige werking van de verzameling.

Van Mochi teruggaan naar Anki betekent meestal CSV gebruiken. Anki kan [tekstkolommen aan notitievelden koppelen](https://docs.ankiweb.net/importing/text-files.html), maar Mochi-links, de werking van kaarten met meerdere kanten, sjablonen en herhaalgeschiedenis worden via dat bestand geen gelijkwaardige Anki-objecten. Bewaar de `.mochi`-export ook nadat de Anki-kopie correct lijkt.

## Test met een representatieve kaartenset en houd de weg terug open

Een importvenster bewijst dat een bestand is geaccepteerd. Het bewijst niet dat je echte verzameling nog werkt of dat je bruikbare inhoud kunt terugbrengen. Test beide richtingen terwijl je normale Anki-profiel onaangeroerd blijft.

1. **Maak een back-up van heel Anki.** Exporteer een `.colpkg` met media en bewaar die buiten het profiel waarin je werkt.
2. **Controleer of de back-up opent.** Maak een leeg tijdelijk Anki-profiel en importeer de `.colpkg` daarin. Een import van een verzamelingspakket vervangt de doelverzameling; daarom is dat tijdelijke profiel belangrijk.
3. **Maak een representatieve kaartenset in dat tijdelijke profiel.** Houd die klein genoeg om kaart voor kaart te bekijken, maar neem alle functies op waarop je vertrouwt: basiskaarten en omgekeerde kaarten, invulkaarten (cloze), aangepaste sjablonen, CSS, JavaScript, afbeeldingen, audio, vergelijkingen, tags, geneste kaartensets en herhaalgeschiedenis.
4. **Exporteer die kaartenset als `.apkg`.** Neem planningsgegevens, instellingenprofielen en media mee als die van belang zijn. Die opties zetten de gegevens in het Anki-pakket; ze beloven niet dat Mochi elke instelling overneemt.
5. **Importeer in een nieuwe Mochi-kaartenset.** Laat je dagelijkse Anki-profiel en de wachtrij met kaarten die aan de beurt zijn ongewijzigd.
6. **Controleer voordat je gaat herhalen.** Vergelijk inhoud, opmaak, velden, media, tags, de structuur van kaartensets en geschiedenis. Let vooral op alles wat afhankelijk was van HTML, CSS, JavaScript of gegenereerde kaartvarianten.
7. **Kies de herhaalplanner bewust.** Mochi begint met zijn eigen algoritme. Schakel FSRS alleen in als je dat na de proef wilt gebruiken.
8. **Herhaal de kaarten in de kopie een gewone week lang.** Beoordeel het bewerken in Markdown, de fase New cards (nieuwe kaarten), de keuze Remembered/Forgot (onthouden/vergeten), het offline gedrag en, als je ervoor hebt betaald, synchronisatie op de apparaten die je echt bij je draagt.
9. **Test de terugweg.** Exporteer de Mochi-testset als `.mochi` voor een back-up in het eigen formaat en als CSV voor Anki. Gebruik CSV met veldwaarden als herbruikbare velden belangrijk zijn; gebruik CSV met weergegeven kanten als je vooral de zichtbare inhoud van voor- en achterkant nodig hebt. Importeer die CSV in een ander leeg Anki-profiel en koppel de kolommen aan een geschikt notitietype.
10. **Noteer elk verlies dat je accepteert.** Controleer de heen- en terugweg afzonderlijk. Exacte opmaak, de werking van kaarten met meerdere kanten, functies van add-ons, gegenereerde varianten, beoordelingen, geschiedenis of toekomstige herhaaldatums kunnen in dagelijks gebruik belangrijker blijken dan in een vergelijkingstabel.

Teruggaan via CSV zet inhoud over en herstelt Mochi niet volledig: herhaalgeschiedenis en sjablonen gaan niet mee, en metadatatags alleen als ze in de inhoud zijn opgenomen. Als Mochi het probleem dat je benoemde niet oplost, verwijder dan de testset en ga verder met je oorspronkelijke Anki-profiel. Lost het dat wel op, zet dan één echte kaartenset tegelijk over en bewaar de Anki-back-up in `.colpkg` en de Mochi-back-up in `.mochi` gedurende meerdere gewone herhaalcycli.

## Voor wie zijn Mochi-flashcards geschikt?

Mochi past goed als:

- Markdown al de manier is waarop je schrijft en denkt;
- notities en herhaalkaarten in dezelfde gekoppelde werkruimte horen;
- je een eenvoudige keuze tussen Remembered/Forgot (onthouden/vergeten) wilt in plaats van vier beoordelingen;
- offline gebruik op één apparaat voldoende is om gratis te werken, of Pro-synchronisatie je US$5 per maand waard is;
- je verzameling nieuw of eenvoudig genoeg is om met weinig risico vanuit Anki over te zetten.

Blijf bij Anki als:

- je notitietypen meerdere belangrijke kaartvarianten genereren;
- HTML/CSS-sjablonen, JavaScript, add-ons of gedeelde kaartensets onderdeel van je systeem zijn;
- gratis synchronisatie tussen apparaten belangrijker is dan schrijven in Markdown;
- je Anki's FSRS-optimizer, instellingenprofielen, vier beoordelingen en simulator voor de studielast wilt;
- jaren aan herhaalgegevens en aangepaste functies al goed voor je werken.

Het meest logische Mochi-alternatief hangt af van waarom geen van beide bij je past. Voor een nieuwe, eenvoudigere verzameling bieden de [functies van Nibomo](/nl/features/) onder meer herhalen met FSRS, offline leren en synchronisatie, overdracht van kaarten, tags en media, toegang voor agents en een gedocumenteerde route om zelf te hosten. Ik bouw het zelf en de beperkingen doen ertoe: het vervangt niet Mochi's gekoppelde Markdown-notitieboek of Anki's beproefde systeem van sjablonen en add-ons. De [startgids](/docs/getting-started/) laat de huidige mogelijkheden zien voor gehost gebruik, mobiel, agents en zelf hosten.

## Het eindoordeel

Mochi is meer dan een mooiere Anki-interface. De kern is dat een Markdown-notitie, een aan andere notities gekoppelde kennisnotitie en een kaart voor gespreide herhaling hetzelfde object kunnen zijn. Het gratis abonnement dekt offline werken zonder account; Pro voegt de gehoste functies toe, waaronder synchronisatie tussen apparaten.

Dat is een goede keuze voor iemand die een nieuwe verzameling opbouwt met Markdown als uitgangspunt. Overstappen vanuit Anki kan ook de moeite waard zijn als de test met een representatieve kaartenset laat zien dat ingebouwde Markdown-ondersteuning en twee beoordelingen echte obstakels wegnemen.

Voor iemand met een bestaande Anki-verzameling ligt de bewijslast andersom. Maak een back-up, test de kaarten met de meeste aangepaste functies en blijf bij Anki tenzij Mochi je wekelijkse werkwijze voldoende verbetert om het verlies van specifieke functies rond opmaak, sjablonen, de herhaalplanner en het ecosysteem te rechtvaardigen.
