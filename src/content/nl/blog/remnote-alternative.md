---
title: "RemNote-alternatieven in 2026: gratis en opensource-opties"
description: "Vergelijk RemNote-alternatieven op notities, pdf's, kaarten, prijs en zelf hosten. Ontdek wat meegaat, wat verloren gaat en hoe je een veilige overstap test."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "remnote alternatief"
  - "remnote alternatieven"
  - "remnote open source"
  - "gratis alternatief voor remnote"
  - "remnote tegenover anki"
  - "opensource alternatief voor remnote"
  - "zelf gehost alternatief voor remnote"
  - "offline flashcard-app"
---

RemNote noemt zijn Anki-export **Flashcards Only**: alleen flashcards. Opsommingspunten zonder kaarten worden overgeslagen, en het pakket bevat niet je gekoppelde notities, pdf's of werkwijze in Reader. Een vervanger kan elke vraag en elk antwoord overnemen terwijl het systeem dat die kaarten nuttig maakte achterblijft.

Het beste **RemNote-alternatief** lost het probleem op waarvoor je wilt overstappen, zonder ongemerkt weg te nemen wat in RemNote nog goed werkt. Voor sommigen gaat het om de prijs. Anderen willen gewone lokale bestanden, een uitgebreider kaartensysteem of broncode die ze zelf kunnen draaien.

> **Over mijn betrokkenheid:** Ik ben Kirill Markin en ik bouw [Nibomo](/nl/), een van de producten in deze vergelijking. Nibomo is geen volledige vervanger voor RemNote. RemNote biedt hier de sterkste geïntegreerde werkwijze voor notities en pdf's; Anki heeft het meest volwassen kaartensysteem en de best ontwikkelde migratieformaten.

**Feiten en prijzen gecontroleerd:** 31 augustus 2026. De genoemde prijzen zijn de openbare Amerikaanse prijzen, met jaarlijkse facturering waar vermeld. Belastingen, regio's, appstores en bètavoorwaarden kunnen het bedrag veranderen.

![Een archiefrestaurator test een kleine overdracht vanuit een intact, gekoppeld studiedossier naar afzonderlijke systemen voor kaarten, bestanden en blokken](/blog/remnote-alternative.png)

## Begin bij je reden om te vertrekken

- **Prijs:** Controleer of RemNote Free al aansluit bij hoe je het echt gebruikt. Het biedt onbeperkte notities, flashcards en gesynchroniseerde apparaten, maar beperkt het aantal geannoteerde documenten en sommige geavanceerde functies.
- **Een kaartensysteem dat te sterk aan notities vastzit:** Probeer Anki. Daar krijgen kaarten, sjablonen, import en FSRS meer ruimte om het centrale systeem te vormen.
- **Gewone lokale notitiebestanden:** Verdeel het werk tussen Obsidian voor Markdown-notities en Anki voor het herhalen. Dat is minder geïntegreerd, maar het is veel duidelijker welke gegevens je zelf beheert.
- **Een opensource-app voor gekoppelde notities, pdf's en ingebouwde kaarten:** Logseq komt hier het dichtst bij, met een belangrijk voorbehoud in 2026: de nieuwe databaseversie is bèta, de nieuwe iOS-app en realtime synchronisatie zijn alfa, en de nieuwe Android-app is nog niet beschikbaar om te testen.
- **Broncode en zelf hosten voor een gericht kaartensysteem:** Overweeg Nibomo als kaarten met een voor- en achterkant voldoende zijn en je een nieuwe herhaalplanning plus flink wat AWS-beheer accepteert.
- **Pdf's lezen, gekoppelde markeringen en kaarten op één plek:** Blijf bij RemNote. Geen van de andere opties neemt die werkwijze netjes over.

Dat laatste antwoord zie je makkelijk over het hoofd. Overstappen is geen vooruitgang als het alternatief wel aan je licentievoorkeur voldoet, maar je studiesessie van morgen in de war schopt.

## RemNote-alternatieven: de keuzetabel

| Optie | Beste reden om hiervoor te kiezen | Notities en pdf's | Herhaalplanner | Offline en eigenaarschap | Prijs gecontroleerd op 31 augustus 2026 | Belangrijkste migratiebeperking |
|---|---|---|---|---|---|---|
| **Bij RemNote blijven** | Gekoppelde notities, bronmateriaal lezen en kaarten horen bij elkaar | Eigen kennisbank en Reader met gekoppelde pdf-markeringen, notities en kaarten | FSRS-6 in bèta, handmatig in te schakelen, met training van gewichten; SM-2 blijft de standaard | Desktop en mobiel werken na inloggen offline; kennisbanken die uitsluitend lokaal blijven zijn beschikbaar op desktop | Gratis; Pro US$8/maand bij jaarlijkse betaling; Pro met AI US$18/maand bij jaarlijkse betaling | Het eigen exportformaat is het beste om in RemNote te herstellen, maar bevat momenteel geen afbeeldingen en pdf's |
| **Anki** | Kaarten, sjablonen, add-ons en behoud van de verzameling staan voorop | Geen geïntegreerde werkruimte voor gekoppelde notities of het lezen van pdf's | Volwassen FSRS-instellingen, geoptimaliseerde parameters, gewenste retentie en simulatie van de studielast | Lokale verzamelingen op desktop en mobiel; open kern van de desktopapp en officiële synchronisatieserver om zelf te hosten | Desktop, AnkiWeb en AnkiDroid zijn gratis; de officiële AnkiMobile is een betaalde iOS-app | RemNote exporteert kaarten naar `.apkg`, niet het hele notitiesysteem; controleer planningsgegevens en media met een proefimport |
| **Obsidian + Anki** | Je wilt gewone lokale Markdown-notities zonder een volwassen herhaalplanner op te geven | Obsidian beheert lokale notities en bijlagen; Anki beheert kaarten; geen geïntegreerde cyclus van lezen tot herhalen binnen één app | Anki FSRS | Lokale Markdown-vault plus lokale Anki-verzameling; Obsidian zelf is gratis, maar niet opensource | Obsidian gratis; optionele Sync vanaf US$4/maand bij jaarlijkse betaling; Anki-prijzen zoals hierboven | RemNote-exports naar Markdown en Anki leveren twee systemen op; actieve RemNote-koppelingen tussen notities, bronnen en kaarten worden geen samenhangende, overdraagbare werkwijze |
| **Logseq** | Je wilt specifiek een opensource-app waarin hiërarchische notities centraal staan, met pdf's en ingebouwde kaarten | Gekoppelde blokken, pdf-annotatie en kaarten herhalen met vier beoordelingsopties | Ingebouwde planner met vier beoordelingsopties; de [documentatie koppelt het nieuwe algoritme](https://github.com/logseq/docs/blob/master/db-version.md#cards) aan het oorspronkelijke FSRS-project | App onder de AGPL-licentie; gegevens uit de databaseversie zijn te exporteren als SQLite, EDN of standaard Markdown met informatieverlies | Gratis opensource-app | De huidige databaseversie is bèta; de nieuwe iOS-app en realtime synchronisatie zijn alfa, de nieuwe Android-app is nog niet beschikbaar om te testen, en oude Logseq-SRS-gegevens zijn niet compatibel met het nieuwe kaartalgoritme |
| **Nibomo** | Je wilt eenvoudige kaarten in een open stack voor web, mobiel en backend | Geen notitiekennisbank, terugverwijzingen, pdf-lezer of native desktopapp | FSRS-6 met vaste gewichten en minder afstelmogelijkheden dan Anki of RemNote | Web, iOS en Android met offline gebruik als uitgangspunt; volledige stack onder de MIT-licentie met een productieroute via AWS | Gehoste app gratis tijdens de bèta; zelf hosten brengt infrastructuur- en providerkosten mee | Geen directe RemNote- of Anki-import; inhoud kan opnieuw worden opgebouwd, maar herhaalgeschiedenis en FSRS-status gaan niet mee |

Dit is geen puntentelling voor functies. Een student die veel met pdf's werkt, kan door de overstap naar de ‘meest open’ optie meer verliezen dan de licentie oplevert. Iemand met een eenvoudige woordenschatset betaalt misschien voor een notitiesysteem dat niet meer wordt gebruikt. Begin met de rij die jouw beperking beschrijft en test vervolgens wat er bij het overzetten verloren gaat.

Gratis en opensource zijn twee afzonderlijke criteria. De kernapps van RemNote Free en Obsidian kosten niets, maar zijn niet opensource. De broncode van Anki's desktopkern, Logseq en Nibomo is openbaar; AnkiMobile blijft een betaalde iOS-app, en zelf Nibomo hosten brengt nog steeds cloudkosten mee.

## Blijf bij RemNote als juist de samenhang waardevol is

RemNote combineert stappen die de meeste alternatieven uit elkaar halen. In de [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) kun je een pdf naast je notities openhouden, verwijzingen naar specifieke markeringen plakken en die notities of markeringen in flashcards omzetten. Met het Free-abonnement kun je drie documenten annoteren; de huidige [prijspagina](https://www.remnote.com/pricing) vermeldt onbeperkte geannoteerde documenten voor Pro.

De herhaalplanner is niet meer vanzelfsprekend een reden om te vertrekken. RemNote beschrijft [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) nu als een bètaoptie die je handmatig inschakelt. Na minstens 1.000 herhalingen kan het de gewichten trainen op basis van je eigen geschiedenis. Anki biedt nog steeds uitgebreidere instellingen, maar wie graag met RemNotes notities en pdf's werkt, hoeft die niet op te geven alleen om FSRS te gebruiken.

Ook offline kan het meer dan alleen ‘werken in een geopend browsertabblad’. Met RemNotes [desktop- en mobiele apps](https://help.remnote.com/en/articles/6752029-offline-mode) kun je na installatie en inloggen offline notities bewerken en kaarten herhalen. De desktopapp bewaart een volledige lokale kopie van afbeeldingen en pdf's. Op mobiel en in de webapp kunnen media ontbreken die niet in de cache staan, en de webapp kan zonder verbinding niet starten vanuit een gesloten of vernieuwd tabblad.

Zocht je oorspronkelijk een **gratis alternatief voor RemNote**, test dan eerst het Free-abonnement. Als toegang tot de broncode het probleem is, biedt de lokale modus niet hetzelfde als opensource of zelf hosten. De aparte gids over [de vraag of RemNote opensource is](/blog/is-remnote-open-source/) gaat uitgebreid op dat verschil in.

## RemNote tegenover Anki: kies wat centraal staat

Bij de vergelijking **RemNote tegenover Anki** gaat het niet simpelweg om ‘wel of geen notities’. Anki slaat ook notities op, maar een Anki-notitie is een verzameling velden die [kaartsjablonen](https://docs.ankiweb.net/templates/intro.html) omzetten in kaarten om te herhalen. RemNote begint met documenten en gekoppelde opsommingspunten waar kaarten uit kunnen ontstaan. Het ene is een volwassen systeem om kaarten te maken; het andere een studiewerkruimte rond notities en bronnen.

Kies Anki als aangepaste velden, gegenereerde kaartvarianten, HTML/CSS-sjablonen, add-ons of jaren aan herhaalgeschiedenis centraal staan. De huidige [FSRS-instellingen](https://docs.ankiweb.net/deck-options.html#fsrs) bieden parameteroptimalisatie, gewenste retentie en simulatie van de studielast. Met de [exportfuncties](https://docs.ankiweb.net/exporting.html) kun je een volledige verzameling bewaren in `.colpkg`; pakketten met kaartensets in `.apkg` kunnen planningsgegevens, instellingenprofielen en media bevatten.

RemNote biedt een route naar Anki, maar let op het label: [de Anki-export is ‘Flashcards Only’](https://help.remnote.com/en/articles/7898019-exporting-notes). Opsommingspunten zonder kaarten worden uitgesloten. RemNote behoudt de context van bovenliggende notities in geëxporteerde kaarten en zet meerkeuzekaarten om naar een eenvoudiger vorm, maar de export bevat niet je kennisbank, pdf-bibliotheek of volledige leeswerkwijze. De officiële RemNote-exportpagina belooft ook niet dat alle planningsgegevens in Anki aankomen. Test dat voordat je ervan uitgaat dat er niets verloren gaat.

Anki is hier de sterkste keuze als kaarten vooropstaan. Het is geen naadloze vervanger voor RemNote Reader. Als je nog steeds artikelen annoteert en gekoppelde notities schrijft, combineer Anki dan met een notitieapp in plaats van het die rol op te leggen. De [bredere gids met Anki-alternatieven](/nl/blog/best-anki-alternatives/) behandelt meer opties die zich op kaarten richten.

## Obsidian plus Anki: lokale bestanden, bewust over twee apps verdeeld

Sommige mensen die RemNote-alternatieven zoeken, hebben geen andere alles-in-één-app nodig. Ze willen notities die gewone bestanden blijven en een herhaalsysteem dat zich zelfstandig kan ontwikkelen. Obsidian plus Anki is een heldere invulling van die verdeling.

[Obsidian bewaart notities](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) als platte tekst met Markdown-opmaak in een lokale map. De app is gratis en vereist geen account; de optionele [Obsidian Sync](https://obsidian.md/pricing) begint bij US$4 per maand bij jaarlijkse betaling. Obsidian is niet opensource, maar de notitiebestanden zijn direct leesbaar en je kunt er met gewone bestandstools een back-up van maken.

Gebruik RemNotes Markdown-export voor de notities en de `.apkg`-export voor de kaarten. Reken op opruimwerk. Een geneste structuur die als leesbare Markdown is geëxporteerd, is niet hetzelfde als actieve RemNote-verwijzingen, portals, sjablonen of pdf-pins. Zodra notities en kaarten in twee apps staan, worden wijzigingen ook niet meer automatisch tussen beide doorgegeven.

Deze optie werkt als controle over lokale bestanden zwaarder weegt dan een naadloze cyclus van ‘markeren, koppelen, kaart maken, herhalen’. Het is een slechte ruil als juist die cyclus je reden was om voor RemNote te kiezen.

## Logseq: een opensource-app voor notities in een overgangsfase

Logseq hoort thuis in een vergelijking van **opensource alternatieven voor RemNote**, omdat notities er echt centraal staan. De officiële [repository met AGPL-licentie](https://github.com/logseq/logseq) beschrijft een app voor kennisbeheer met gekoppelde blokken en pdf-annotatie. De [huidige documentatie van de databaseversie](https://github.com/logseq/docs/blob/master/db-version.md#cards) voegt ingebouwde kaarten toe: geef een blok een tag, bekijk wanneer het aan de beurt is en herhaal het met vier mogelijke beoordelingen.

De huidige ontwikkelfase telt zwaarder dan de functielijst. Volgens Logseqs eigen repository is de databaseversie bèta, terwijl de nieuwe iOS-app en realtime synchronisatie alfa zijn; de huidige documentatie van de databaseversie zegt dat de Android-app nog niet beschikbaar is voor alfatests. Logseq waarschuwt expliciet voor mogelijk gegevensverlies en raadt een testgraph zonder cruciale gegevens, met back-ups aan. De [wijzigingsnotities van de databaseversie](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) melden ook dat het nieuwe kaartalgoritme geen eigenschappen of SRS-gegevens uit oudere Logseq-flashcards importeert.

Ook overdraagbaarheid vraagt om precieze bewoordingen. De huidige [exportdocumentatie van de databaseversie](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) biedt SQLite met bijbehorende bestanden, EDN en standaard Markdown. Volgens die documentatie is EDN de enige bewerkbare export die de gegevens van de graph volledig vastlegt, maar wordt EDN toch niet aanbevolen als enige back-up. Standaard Markdown laat eigenschappen en tijdstempels weg.

Logseq is dus de optie om te onderzoeken als opensource, gekoppelde notities, pdf's en ingebouwde kaarten allemaal belangrijk zijn. Ik zou het in augustus 2026 niet gebruiken om in één dag een cruciale kennisbank voor een geneeskundestudie over te zetten. Gebruik het eerst naast RemNote en kijk hoe de huidige overgang uitpakt op de apparaten die je echt gebruikt.

## Nibomo: de volledige stack is open, het studiemodel is beperkt

Nibomo maakt vrijwel de tegenovergestelde afweging als RemNote. De [functies](/nl/features/) draaien om Markdown-kaarten met een voor- en achterkant, kaartensets, tags, media, herhalen met FSRS, apps die primair offline werken en kaartvoorstellen met hulp van AI. Het heeft geen kennisbank met gekoppelde notities, pdf-lezer, native desktopapp of directe RemNote-import.

De broncode omvat de hele stack: de repository onder de MIT-licentie bevat web, iOS, Android, authenticatie, backend, synchronisatie en infrastructuur. De ondersteunde [handleiding voor zelf hosten in productie](/docs/self-hosting/) gebruikt AWS CDK. Het is geen lokaal systeem dat je met één opdracht start. Beheerders zijn verantwoordelijk voor cloudkosten, geheime sleutels, migraties, monitoring, back-ups, hersteltests en apart gebouwde mobiele apps.

Voor een bestaande RemNote-gebruiker is migratie de grotere beperking. Nibomo importeert zijn eigen `flashcards.zip`-pakketten, geen RemNote-Markdown of Anki-`.apkg`. Die pakketten bevatten kaarten, tags en de media waarnaar wordt verwezen, maar geen herhaalgeschiedenis, FSRS-status, werkruimte-instellingen, volledige structuur van kaartensets of accounts. Via AI-chat kun je geëxporteerde tekst omzetten in kaartvoorstellen die je controleert; daarmee bouw je inhoud opnieuw op in plaats van door te gaan met de oude verzameling. De [handleiding voor migreren via TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) laat stap voor stap zien wat daarbij verloren gaat.

Kies Nibomo voor een nieuwe of eenvoudige kaartenwerkruimte als toegang tot de broncode van de hele stack belangrijk is. Houd RemNote voor studeren met gekoppelde notities en bronnen, en kies Anki als behoud van je verzameling bij migratie of een geavanceerde kaartstructuur telt. Voor een gerichtere vergelijking van kaartensystemen kun je [Anki tegenover Nibomo](/blog/anki-vs-flashcards-open-source-app/) en de [gids met opensource flashcard-apps](/nl/blog/best-open-source-flashcard-apps-2026/) lezen.

## Wat je niet probleemloos uit RemNote kunt overzetten

RemNote heeft verschillende nuttige exportformaten, maar geen enkel bestand bouwt het hele product elders opnieuw op.

- **De volledige RemNote-export** is het beste formaat om RemNote te herstellen. Momenteel ontbreken daarin afbeeldingen en pdf's.
- **De Anki-`.apkg`-export** bevat alleen flashcards. Opsommingspunten zonder kaarten vallen bij deze route weg, en het resultaat is niet je gekoppelde notitiesysteem.
- **Markdown, HTML, OPML en tekst** maken inhoud elders makkelijker leesbaar. Ze zorgen er niet voor dat een andere app elke RemNote-specifieke relatie of werkwijze begrijpt.
- **Pdf-markeringen en bronnen** vragen om een aparte controle. RemNote Reader kan een pdf met markeringen downloaden, maar ga er niet van uit dat de volledige kennisbankexport dat bestand bevat.
- **Instellingen, thema's en plugins** zitten volgens de [back-updocumentatie](https://help.remnote.com/en/articles/6301627-remnote-backups) niet in een handmatige RemNote-back-up.
- **De herhaalstatus** moet je kaart voor kaart in de nieuwe app controleren. Een import die vraag en antwoord behoudt, kan de planning toch opnieuw laten beginnen.

Daarom is ‘ondersteunt Markdown’ of ‘importeert Anki’ niet voldoende. Overdraagbaarheid heeft meerdere lagen: leesbare notities, bruikbare media, gekoppelde bronnen, kaartstructuur en leergeschiedenis.

## Oefen de overstap voordat je opzegt

Zorg dat je terug kunt. Een rustig uur nu kost minder dan tijdens je tentamenweek ontdekken dat een pdf ontbreekt.

1. Maak een nieuwe handmatige **RemNote (Complete)**-export en bewaar die ongewijzigd.
2. Kopieer op desktop de lokale `.db.zip`-back-ups en de map `files`. Download alle originele of geannoteerde pdf's die je niet kunt vervangen.
3. Kies een kleine, lastige proefselectie: geneste notities, verwijzingen, één pdf, afbeeldingen, invulkaarten of meerkeuzekaarten, tags en kaarten met een relevante herhaalgeschiedenis.
4. Exporteer die selectie in elk formaat dat de beoogde optie nodig heeft, meestal Markdown voor notities en `.apkg` voor Anki.
5. Importeer in een tijdelijke vault, graph, profiel of werkruimte die je weer kunt verwijderen. Leg het resultaat naast RemNote en vergelijk aantallen, opmaak, links, media, voor- en achterkanten van kaarten en geplande herhalingen.
6. Werk offline op elk apparaat dat je wilt gebruiken. Maak daarna opnieuw verbinding en controleer of wijzigingen en herhalingen op de verwachte plek aankomen.
7. Herstel de volledige back-up in een tijdelijke lokale RemNote-kennisbank. Een gedownload archief is pas een herstelplan als je het met succes hebt geopend.
8. Studeer minstens een paar echte sessies in beide systemen. Zeg pas op wanneer de vervanger de dagelijkse werkwijze, een export en een herstel heeft doorstaan.

Bewaar de oorspronkelijke exports ook na de overstap. Een geslaagde import bewijst dat de gegevens compatibel zijn met de huidige versie van de nieuwe app, niet dat elk onderdeel van het oude systeem voorgoed toegankelijk blijft.

## De praktische shortlist

- **Blijf bij RemNote** als gekoppelde notities en studeren met pdf's de waarde leveren. Het Free-abonnement of een uitsluitend lokale kennisbank kan je beperking al oplossen.
- **Kies Anki** als kaarten, sjablonen, FSRS-instellingen en behoud van je verzameling bij migratie vooropstaan.
- **Kies Obsidian plus Anki** als gewone lokale notitiebestanden het werken met twee tools waard zijn.
- **Onderzoek Logseq** als je een opensource-app voor gekoppelde notities en ingebouwde kaarten nodig hebt, maar gebruik geen cruciale gegevens in je test zolang de huidige database- en synchronisatiestack nog in bèta en alfa zijn.
- **Kies Nibomo** als een eenvoudig, nieuw kaartensysteem en toegang tot de broncode van de hele stack belangrijker zijn dan notities, pdf's of voortzetting van je planning.

Ik bouw Nibomo en zou zelf nog steeds RemNote houden voor een notitieboek met onderlinge koppelingen en veel pdf's, of Anki kiezen voor een complexe, bestaande verzameling. Nibomo is de beperktere keuze: kaarten met een voor- en achterkant, een open stack en een nieuwe planning.

Zodra je weet welke beperking je kunt accepteren, hoef je alleen die optie te testen. Als Nibomo past, laat de [startgids](/docs/getting-started/) zien waar je begint met de gehoste of zelf gehoste versie. Zo niet, dan is bij RemNote blijven ook een geldige keuze.
