---
title: "Quizlet-sets exporteren in 2026 (en waarom Export ontbreekt)"
description: "Exporteer een Quizlet-set via de huidige stappen op de website. Ontbreekt Export? Controleer of je de maker bent, een kopie hebt of de mobiele app gebruikt."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "Quizlet exporteren"
  - "Quizlet-flashcards exporteren"
  - "Quizlet exportknop ontbreekt"
  - "Quizlet-flashcards downloaden"
  - "Quizlet naar CSV"
  - "Quizlet naar Anki"
---

Ontbreekt de knop **Export** in Quizlet? Controleer dan eerst twee dingen: heb je de oorspronkelijke set zelf gemaakt en gebruik je de Quizlet-website? Quizlet staat alleen de oorspronkelijke maker toe een set te exporteren, en dat kan alleen via de website. Een gekopieerde set kun je niet exporteren, ook niet als die kopie inmiddels in je bibliotheek staat.

Als je aan die voorwaarden voldoet, gaat het exporteren snel: open de set op de website, kies **More → Export**, stel in hoe de begrippen en definities worden gescheiden en kies **Copy text**. Quizlet downloadt geen bestand met kaarten. Het plaatst de tekst op je klembord, zonder afbeeldingen.

**Feiten gecontroleerd:** 30 augustus 2026, aan de hand van [de officiële exportinstructies van Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Archiefmedewerker die eigendomsbewijzen controleert voordat hij tekstkaarten in paren overhandigt, met twee documentmappen die klaarstaan en foto's die achter glas blijven](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Zou de knop Export zichtbaar moeten zijn?

Loop dit eerst na voordat je op een andere manier Quizlet-flashcards probeert te downloaden:

| Jouw situatie | Zou Export beschikbaar moeten zijn? | Volgende stap |
| --- | --- | --- |
| Je hebt de oorspronkelijke set gemaakt en die op de Quizlet-website geopend | Ja, volgens de helppagina van Quizlet | Volg de stappen hieronder |
| Je gebruikt de iOS- of Android-app | Nee; exporteren kan alleen via de website | Open Quizlet in een webbrowser en log in |
| Je hebt de set van een andere gebruiker gekopieerd | Nee; volgens Quizlet kun je gekopieerde sets niet exporteren | Verwacht niet dat de kopie toegang geeft tot Export |
| Je kunt de set bekijken, maar hebt hem niet gemaakt | Nee; een set mogen bekijken maakt je niet de maker | Vraag de maker om een bronbestand of bouw de set opnieuw op met materiaal dat je mag gebruiken |

Heb je de oorspronkelijke set zelf gemaakt, maar ontbreekt de exportknop nog steeds? Controleer dan of je bent ingelogd op het account dat eigenaar is van de set en of je het origineel hebt geopend, niet een kopie. De helppagina van Quizlet beschrijft geen andere manier om te exporteren. Neem in dat geval contact op met Quizlet Support in plaats van te vertrouwen op een downloadtool die beweert de beperking te omzeilen.

## Quizlet-flashcards exporteren via de website

Voor een set die je zelf hebt gemaakt:

1. Log in op de Quizlet-website.
2. Kies je bibliotheek (**Your library**).
3. Kies **Flashcard sets**.
4. Open de set die je wilt exporteren.
5. Open het menu **More**.
6. Kies **Export**.
7. Kies hoe je de begrippen en definities wilt scheiden.
8. Kies **Copy text**.
9. Plak het resultaat in een editor voor platte tekst.

Dit is de volledige huidige werkwijze. Er volgt geen knop om het bestand te downloaden.

Voor gewone kaarten met een voor- en achterkant raad ik een tab aan tussen het begrip en de definitie, en een nieuwe regel tussen de kaarten. Dat is een praktisch advies, geen vereiste van Quizlet. Tabs zijn meestal makkelijker te controleren dan komma's, omdat komma's zo vaak in gewone definities voorkomen.

Een netjes opgebouwd bestand met twee kaarten ziet er zo uit, met één tab in het midden van elke regel:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Wat de Quizlet-export bewaart

Quizlet omschrijft deze functie beperkt: je exporteert de **begrippen en definities** uit een set die je zelf hebt gemaakt. Quizlet vermeldt ook dat afbeeldingen niet kunnen worden geëxporteerd.

Ga uit van wat er daadwerkelijk in de geplakte tekst staat. Tekst, scheidingstekens en regeleinden die daarin voorkomen, kun je in een bestand bewaren. De helppagina van Quizlet belooft niet dat mappen, leermodi, opmaak, beheersingsniveau, herhalingsgeschiedenis of planning worden meegenomen.

Je krijgt dus een kopie van de kaarttekst, geen Quizlet-back-up die je kunt terugzetten. Dat onderscheid geldt ook als je zocht op ‘Quizlet-flashcards downloaden’: Quizlet kopieert tekst naar het klembord en je maakt zelf het bestand.

## Bewaar een onbewerkte UTF-8-kopie voordat je iets aanpast

Zorg dat je altijd terug kunt naar het origineel:

1. Plak de export in een editor voor platte tekst.
2. Sla de tekst op als UTF-8, bijvoorbeeld als `biology-quizlet-raw.txt`.
3. Maak een kopie met de naam `biology-quizlet-working.txt`.
4. Laat het onbewerkte bestand intact en pas alleen de werkkopie aan.

Controleer de werkkopie voordat je die importeert, terwijl de Quizlet-set nog openstaat:

- Maak witruimtetekens zichtbaar en controleer waar tabs en regeleinden staan.
- Zoek binnen begrippen en definities naar het gekozen scheidingsteken. Een extra tab kan een onverwacht derde veld opleveren.
- Let op definities met eigen regeleinden; die kunnen ten onrechte als extra kaarten worden gelezen.
- Vergelijk het begin, het midden en het einde van het bestand met Quizlet, inclusief de langste definities.
- Sluit het bestand, open het opnieuw en controleer accenten, niet-Latijnse schriften, symbolen en typografische aanhalingstekens.
- Markeer lege velden, dubbele vermeldingen en afwijkende regels in plaats van stilzwijgend te gokken hoe je ze moet herstellen.

Vergelijk het aantal regels alleen met het aantal kaarten als elke kaart precies één regel beslaat. Bij definities over meerdere regels werkt die snelle controle niet.

Bewaar het onbewerkte bestand ook als de werkkopie er goed uitziet. Als bij een import een veld verschuift of inhoud verloren gaat, heb je nog een ongewijzigde referentie.

## Quizlet naar CSV: maak het bestand zorgvuldig

Een `.txt`-bestand hernoemen naar `.csv` is geen conversie. CSV vereist consistente scheidingstekens en correct geplaatste aanhalingstekens rond inhoud met komma's, aanhalingstekens of meerdere regels.

Zo maak je zorgvuldig een CSV-bestand van je Quizlet-export:

1. Laat de back-up van de onbewerkte tekst intact.
2. Open de werkkopie in een spreadsheetprogramma en kies precies het scheidingsteken dat je in Quizlet hebt gebruikt.
3. Controleer of elke verwachte rij twee kolommen heeft: begrip en definitie.
4. Controleer aanhalingstekens, scheidingstekens en definities die meerdere regels beslaan.
5. Exporteer als CSV met UTF-8-codering.
6. Open de CSV opnieuw in een nieuw voorbeeldvenster voordat je het bestand ergens anders gebruikt.

Een spreadsheetprogramma kan de aanhalingstekens toevoegen die CSV nodig heeft. Alle tabs door komma's vervangen doet dat niet op een betrouwbare manier.

## Gebruik de tekst in Nibomo als conceptmateriaal dat je controleert

[Nibomo](/nl/features/) heeft geen directe Quizlet-importfunctie. In de gehoste app gebruik je TXT- of CSV-bestanden als bijlage om met AI conceptkaarten te maken. Dat is geen migratie waarbij gegarandeerd alles behouden blijft.

1. Bewaar het onbewerkte Quizlet-bestand buiten de app.
2. Voeg het opgeschoonde TXT-bestand of de zorgvuldig voorbereide CSV toe als bijlage in de AI-chat van Nibomo.
3. Vertel de assistent welk scheidingsteken en welke velden het bestand gebruikt.
4. Vraag om een klein voorbeeld en zeg uitdrukkelijk dat er nog geen kaarten mogen worden opgeslagen.
5. Vergelijk het voorgestelde aantal kaarten en de voor- en achterkanten met de werkkopie.
6. Sla alleen de kaarten op die je hebt gecontroleerd.

De [handleiding om aan de slag te gaan](/docs/getting-started/) beschrijft hoe je de AI-chat met werkruimtegegevens en bestandsbijlagen gebruikt. Een voorzichtige prompt kan er zo uitzien:

> Lees dit bestand als paren van begrippen en definities, gescheiden door tabs. Sla nog geen kaarten op. Maak een klein aantal conceptkaarten, behoud de oorspronkelijke formulering en niet-Latijnse tekens, en vermeld onjuist opgebouwde, lege of onduidelijke regels apart in plaats van te gokken.

Dit kan handig zijn als de oude kaarten ook moeten worden opgeschoond. Het bewijst niet dat elke rij correct is overgezet. Gebruik de checklist in [AI-flashcards verbeteren](/blog/how-to-fix-ai-flashcards/) en test vervolgens een kleine kaartenset voordat je de rest maakt.

Kaarten die je in Nibomo maakt, beginnen met een nieuwe leergeschiedenis. De Quizlet-tekst bevat niet de herhalingsgegevens of planningsstatus die nodig zijn om je bestaande herhalingen voort te zetten.

> **Transparantie:** ik bouw Nibomo. Deze werkwijze beschrijft de huidige beperkingen van het product; ik beweer hiermee niet dat Nibomo volledig compatibel is met Quizlet.

## Quizlet naar Anki: gebruik de tekstimport van Anki

Volgens de [officiële handleiding voor tekstimport](https://docs.ankiweb.net/importing/text-files.html) ondersteunt Anki platte tekstbestanden in UTF-8 met velden die zijn gescheiden door komma's, puntkomma's of tabs.

Voor een werkkopie met tabs als scheidingsteken:

1. Open de importfunctie van Anki en selecteer het UTF-8-tekstbestand.
2. Controleer in het voorbeeld of Anki een tab heeft herkend; pas het scheidingsteken aan als dat niet zo is.
3. Kies het notitietype en de kaartenset waarin je wilt importeren.
4. Koppel het eerste veld aan de voorkant en het tweede aan de achterkant.
5. Controleer het voorbeeld op lege, verschoven of extra velden.
6. Controleer vóór het importeren de instelling voor dubbele vermeldingen en het bijwerken van bestaande notities.

Anki bepaalt het verwachte aantal velden aan de hand van de eerste regel die geen commentaarregel is. In latere records blijven ontbrekende velden leeg en worden extra velden niet geïmporteerd. Daarom is het voorbeeld belangrijk, zeker als één verkeerd geplaatst scheidingsteken de indeling van een rij kan veranderen.

Ook bij definities over meerdere regels moet je bewust een keuze maken. Anki ondersteunt velden tussen aanhalingstekens die meerdere regels beslaan. Je kunt ook `<br>` als regeleinde laten interpreteren door **Allow HTML in fields** in te schakelen. Kies één methode en controleer een gekopieerd voorbeeld voordat je het volledige bestand importeert.

Standaard kan Anki een bestaande notitie van hetzelfde type herkennen aan het eerste veld en de overige velden bijwerken. Met de importinstellingen kun je dubbele vermeldingen ook negeren of als nieuwe notities toevoegen. Bij het bijwerken van een bestaande Anki-notitie kan de Anki-planning behouden blijven, maar via het tekstbestand wordt geen Quizlet-planning meegenomen.

## Bewaar het origineel totdat de nieuwe kaartenset werkt

De officiële exportmethode van Quizlet eindigt bij **Copy text**, voor sets die je zelf hebt gemaakt en op de website opent. Scraping-scripts, het raden van niet-openbare API-endpoints en downloadtools van derden zijn andere, niet-ondersteunde werkwijzen. Ze maken van een gekopieerde set of een set die je alleen mag bekijken geen officiële export.

Heb je terugkerende automatisering nodig in plaats van een eenmalige kopie? De [huidige status van de Quizlet-API](/blog/quizlet-api/) legt uit wat er wordt ondersteund. Is de set niet van jou, vraag de maker dan om een bronbestand of maak een kleinere kaartenset op basis van je eigen aantekeningen. [Betere flashcards maken](/blog/how-to-make-better-flashcards/) kan je helpen die nieuwe set te verbeteren in plaats van elke oude rij over te nemen.

Verwijder de oorspronkelijke Quizlet-set pas als:

- het onbewerkte UTF-8-bestand is opgeslagen op een plek waarvan een back-up wordt gemaakt;
- de werkkopie bij het opnieuw openen de verwachte tekens en scheidingstekens bevat;
- velden over meerdere regels, lege velden, dubbele vermeldingen en afwijkende rijen zijn gecontroleerd;
- belangrijke informatie uit afbeeldingen opnieuw is toegevoegd vanuit een bron die je mag gebruiken; en
- een kleine test in de doelapp de juiste voor- en achterkanten heeft opgeleverd.

Bewaar het onbewerkte tekstbestand ook daarna. Het is de eenvoudigste onafhankelijke referentie als een latere import er verkeerd uitziet. Weet je nog niet waar je de kaarten wilt onderbrengen, dan bespreekt de [vergelijking van alternatieven voor Quizlet](/blog/quizlet-alternative/) de bredere afwegingen.
