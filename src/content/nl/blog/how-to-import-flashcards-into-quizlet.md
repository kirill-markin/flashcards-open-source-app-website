---
title: "Flashcards importeren in Quizlet vanuit Excel, Sheets of tekst"
description: "Importeer een woordenlijst met twee kolommen in Quizlet met tabs en nieuwe regels. Los gesplitste antwoorden, extra kaartjes en CSV-problemen op vóór publicatie."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "flashcards importeren in Quizlet"
  - "Quizlet importformaat"
  - "Quizlet importeren vanuit Excel"
  - "Google Sheets naar Quizlet"
  - "Quizlet importeren met tabs"
---

“Red, green, blue” lijkt een gewoon antwoord op een flashcard. Maar als je komma's gebruikt om een begrip van de definitie te scheiden, maken diezelfde komma's de rij dubbelzinnig. Een paar leestekens kunnen ervoor zorgen dat je een kant-en-klare woordenlijst alsnog moet opschonen.

Wil je flashcards vanuit Excel, Google Sheets of tekst importeren in Quizlet? Begin met twee kolommen: één voor begrippen en één voor definities. Kopieer de gegevens, plak ze in het importformulier op de website en kies tabs tussen de velden en nieuwe regels tussen de kaartjes. Probeer het eerst met vier rijen, zodat je elk paar kunt controleren voordat je de hele lijst importeert.

![Een pottenbakker zet keramische kopjes met hun bijpassende schoteltjes in aparte rijen voordat ze naar een plank gaan](/blog/how-to-import-flashcards-into-quizlet.png)

## Waar vind je het importformulier van Quizlet?

Quizlet beschrijft op zijn website hoe je inhoud importeert, met komma's, tabs of streepjes tussen de velden en puntkomma's of nieuwe regels tussen de kaartjes. De [officiële importinstructies](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) geven deze volgorde:

1. Log in en kies **Create → Flashcard set**.
2. Voer een titel in, selecteer **Import** en plak je tekst.
3. Stem de scheidingstekens af op je invoer. Gebruik **Tab** en **New line** voor de voorbeelden hier.
4. Selecteer **Import** en kies daarna de talen van de begrippen en definities.
5. Controleer de kaartjes voordat je **Create** selecteert om de set op te slaan en te publiceren.

De instructies zijn gecontroleerd op 15 september 2026. De voorbeelden hieronder leggen uit hoe je de tekst voorbereidt en controleert; ze beschrijven geen test met een ingelogd account.

## Begin met een klein celbereik

Zet in Excel of Google Sheets elk begrip met de bijbehorende definitie op één rij. Probeer het eerst met deze vier kaartjes:

| Begrip | Definitie |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopieer alleen de vier gegevensrijen in de twee kolommen. Staan de kolomkoppen op rij 1, selecteer dan **A2:B5**. Neem de kolomkoppen niet mee in het gekopieerde bereik.

Het resultaat moet vier kaartjes zijn, met Spaanse begrippen en Engelse definities. Op het laatste kaartje moet “colores primarios de la luz” bij elkaar op de ene kant staan en “red, green, blue” bij elkaar op de andere. De komma's horen bij het antwoord.

Als dat voorbeeld duidelijk is, kun je je eigen werkblad voorbereiden. Werk in een kopie, zodat je het origineel ter vergelijking kunt bewaren. Verwijder lege rijen en laat notities of extra kolommen buiten de selectie. Vul ontbrekende begrippen of definities aan voordat je gaat kopiëren.

Houd de twee kolommen bij elkaar als je sorteert. Als je alleen de begrippen sorteert, raken ze los van hun antwoorden. De import kan dan het juiste aantal kaartjes opleveren, terwijl de paren toch niet kloppen.

## In platte tekst gebruik je echte tabs

Dezelfde vier rijen zien er als door tabs gescheiden tekst zo uit. Tussen elk begrip en de bijbehorende definitie staat één echt tabteken:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Een tab is een specifiek teken. Een paar spaties kunnen er hetzelfde uitzien, maar zijn geen tabteken. De tekens `\t` typen voegt ook geen tab in. Als dit lastig is in je teksteditor, zet de paren dan in twee spreadsheetkolommen en kopieer die cellen.

Elk kaartje moet op één echte tekstregel staan. Een lange definitie kan op het scherm over twee regels lopen doordat het venster smal is; daardoor komt er geen regeleinde in de inhoud. Een regeleinde dat je binnen een spreadsheetcel invoegt, doet dat wel. Verwijder die regeleinden voordat je nieuwe regels gebruikt om kaartjes te scheiden.

Verwijder ook tabs binnen een begrip of definitie. In dit formaat horen tabs alleen tussen de twee velden.

## Als je lijst een CSV-bestand is

Open het CSV-bestand in een spreadsheet voordat je de import voorbereidt. Een CSV-record zoals dit bevat twee velden wanneer de aanhalingstekens volgens de CSV-regels worden verwerkt:

```text
"colores primarios de la luz","red, green, blue"
```

Het antwoord tussen de aanhalingstekens bevat komma's. Een tekstveld dat de invoer op komma's splitst, kan niet per se het CSV-formaat verwerken. Vertrouw er dus niet op dat aanhalingstekens het antwoord daar bij elkaar houden.

Controleer in Excel of Google Sheets of het record precies twee cellen beslaat. Kopieer die cellen vervolgens voor invoer met tabs als scheidingsteken. Is het antwoord over extra kolommen verdeeld, pas dan eerst de CSV-importinstellingen van de spreadsheet aan. Als je de beschadigde rij kopieert, neem je het probleem mee.

Controleer ook waarden die een spreadsheet anders kan interpreteren. Als `0012` een code is die je wilt leren, verandert het kaartje wanneer daar `12` van wordt gemaakt. Vergelijk codes, datums, aanhalingstekens en woorden met accenten met het oorspronkelijke bestand voordat je het bereik kopieert.

## Als de kaartjes niet overeenkomen met je rijen

Gebruik de proef om de eerste afwijking te vinden. Verander één ding tegelijk en vergelijk het resultaat daarna met dezelfde vier bronrijen.

| Probleem | Waarschijnlijke oorzaak bij het scheiden | Wat je kunt aanpassen |
| --- | --- | --- |
| Een antwoord wordt bij de komma's gesplitst | Komma geselecteerd tussen velden | Maak twee kolommen en selecteer Tab |
| “well-being” wordt binnen het begrip gesplitst | Streepje geselecteerd tussen velden | Behoud het koppelteken en scheid de velden met een tab |
| Eén antwoord wordt meerdere kaartjes | Regeleinden binnen de broninhoud | Zet het antwoord op één echte tekstregel |
| “Begrip” en “Definitie” verschijnen als kaartje | De rij met kolomkoppen is meegekopieerd | Selecteer alleen de gegevensrijen |
| Beide velden blijven aan dezelfde kant staan | Spaties in plaats van een tab | Kopieer een spreadsheetbereik met twee kolommen |

Een antwoord met “first stage” en “second stage” op aparte regels kun je bijvoorbeeld veranderen in `first stage; second stage`. Zo blijven beide delen op één regel. Laat **New line** geselecteerd als scheiding tussen kaartjes wanneer je een puntkomma binnen een antwoord gebruikt.

Als de twee fasen elk een eigen vraag verdienen, schrijf dan twee volledige paren. De [gids voor betere flashcards (Engels)](/blog/how-to-make-better-flashcards/) kan je bij die keuze helpen.

## Controleer het resultaat voordat je publiceert

Bekijk alle vier de kaartjes van je proef. Vergelijk voor de volledige lijst de geïmporteerde kaartjes met de opgeschoonde bron:

- Komt het totaal overeen met het aantal volledige gegevensrijen?
- Kloppen het eerste en het laatste paar, inclusief de volledige antwoorden?
- Zijn leestekens, accenten en codes ongewijzigd overgenomen?
- Zijn er lege kanten, kolomkoppen, dubbele kaartjes of antwoorden die bij het verkeerde begrip staan?
- Is elk antwoord waarvan je de regeleinden hebt aangepast nog steeds begrijpelijk?

Lees naast de verdachte paren ook een aantal gewone paren. Het juiste aantal kaartjes zegt nog niet of een correct begrip het juiste antwoord heeft gekregen. Gaat er iets mis, corrigeer dan de bron voordat je opnieuw importeert. Bewaar het opgeschoonde bestand voor latere correcties.

## Bestaande paren of door AI gegenereerde kaartjes?

Quizlet beschrijft ook hoe je met AI kaartjes kunt maken op basis van aangeleverd materiaal in zijn [overzicht van AI-ondersteunde kaartjescreatie](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Controleer de inhoud van gegenereerde kaartjes afzonderlijk. Heb je al een volledige lijst met begrippen en definities, dan kun je met de gestructureerde import controleren of de paren die je hebt geschreven goed zijn overgenomen.

Begin je met alinea's? [Zet je aantekeningen om in flashcards (Engels)](/blog/turn-notes-into-flashcards/) voordat je de importtekst voorbereidt. Wil je een set de andere kant op verplaatsen? Gebruik dan de [gids voor het exporteren uit Quizlet](/nl/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
