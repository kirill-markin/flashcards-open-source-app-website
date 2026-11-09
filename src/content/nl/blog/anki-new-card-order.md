---
title: "Volgorde van nieuwe kaarten in Anki: verzamelen, sorteren en de wachtrij controleren"
description: "Zie aan de hand van zes kaarten hoe Anki nieuwe kaarten verzamelt en sorteert. Controleer de limieten van substapels, de posities in de wachtrij en de stapel waarmee je de leersessie start."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "volgorde van nieuwe kaarten in Anki"
  - "verzamelvolgorde van nieuwe kaarten in Anki"
  - "sorteervolgorde van nieuwe kaarten in Anki"
  - "oplopende positie in Anki"
  - "Anki-kaarten in de verkeerde volgorde"
---

Een nieuwe kaart op positie 10 kan in Anki ná een kaart op positie 60 verschijnen. Stel dat je een leersessie start vanuit een bovenliggende stapel, met **Stapel** (*Deck*) als verzamelvolgorde en **Volgorde van verzamelen** (*Order gathered*) als sorteervolgorde. Anki kan dan eerst alle kaarten verzamelen die binnen de limieten van een eerdere substapel passen en pas daarna bij de substapel met positie 10 komen. Sorteren op aanmaakdatum in de kaartbrowser verandert die wachtrij niet.

Anki bepaalt de volgorde van nieuwe kaarten in twee stappen. Bij het **verzamelen** kiest Anki welke kaarten binnen de limieten van vandaag passen. Bij het **sorteren** bepaalt Anki in welke volgorde de gekozen kaarten verschijnen. Ga eerst na of Anki de verkeerde kaarten kiest of de juiste kaarten in een onverwachte volgorde toont.

Deze uitleg geldt voor gewone stapels in de desktopversie van Anki. Het voorbeeld met zes kaarten is speciaal voor dit artikel op papier uitgewerkt aan de hand van de actuele handleiding en de uitgebrachte versie. Die bronnen zijn op 6 oktober 2026 gecontroleerd. Het voorbeeld is niet in de app getest. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![Een man houdt een vierde vinylplaat boven een leeg vak in een rek, naast drie andere platen. Achter hem staan twee kratten met platen die buiten de selectie zijn gebleven.](/blog/anki-new-card-order.png)

## Kies de volgorde die je wilt

Open **Opties** (*Options*) voor de stapel waarmee je de leersessie start en ga naar **Weergavevolgorde** (*Display Order*). Start je vanuit een bovenliggende stapel, dan bepalen de instellingen van die stapel de weergavevolgorde voor de hele sessie, ook voor kaarten uit de substapels.

| Gewenst resultaat | Verzamelvolgorde voor nieuwe kaarten (*New Card Gather Order*) | Sorteervolgorde voor nieuwe kaarten (*New Card Sort Order*) |
| --- | --- | --- |
| Volg oplopende kaartposities in de gekozen stapel en alle substapels | Oplopende positie (*Ascending position*) | Volgorde van verzamelen |
| Doorloop de substapels alfabetisch en volg binnen elke substapel de kaartposities | Stapel | Volgorde van verzamelen |
| Toon dezelfde selectie in willekeurige volgorde | De verzamelinstelling van je keuze | Willekeurig (*Random*) |

Deze combinaties volgen de definities in de Engelstalige Anki-handleiding. Bij **Oplopende positie** telt de opgeslagen positie van elke nieuwe kaart. De volgorde waarin kaarten worden toegevoegd en latere handmatige wijzigingen kunnen die posities beïnvloeden. De volgorde op aanmaakdatum kan daardoor afwijken. [Verzamelvolgorde](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) · [Sorteervolgorde](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Controleer vóór je iets wijzigt welke voorinstelling aan de stapel is toegewezen en welke andere stapels die gebruiken. De instellingen voor de weergavevolgorde maken deel uit van die gedeelde voorinstelling. Wil je alleen deze stapel aanpassen, geef hem dan eerst een eigen voorinstelling. Voor daglimieten zijn er aparte instellingen onder **Deze stapel** (*This deck*) en **Alleen vandaag** (*Today only*). [Engelstalige uitleg over een eigen voorinstelling voor één stapel](/blog/anki-deck-options-presets/)

## Reken uit welke vier kaarten in de wachtrij komen

Neem een gewone bovenliggende stapel met de naam `OrderLab`, met twee substapels en in totaal zes kaarten. Elke kaart komt uit een eigen notitie van het type **Basis** (*Basic*), die één kaart oplevert. Alle zes hebben dus hetzelfde kaarttypenummer en geen twee kaarten komen uit dezelfde notitie.

| Kaart | Stapel | Opgeslagen positie van de nieuwe kaart |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Alle zes de kaarten zijn nieuw. Geen ervan is begraven of opgeschort en geen ervan zit in een gefilterde stapel. Bij aanvang zijn er geen andere kaarten, leerherhalingen of gewone herhalingen. Je hebt vandaag nog geen kaarten doorgenomen. `OrderLab` heeft zelf geen bovenliggende stapel en de geldende herhalingslimieten bieden ruimte voor alle zes de nieuwe kaarten.

Start de sessie vanuit **OrderLab**. De geldende limiet voor nieuwe kaarten is **4**. Voor `01 First` is de limiet **3** en voor `02 Second` **2**, zonder tijdelijke uitzonderingen. Gebruik voor beide vergelijkingen **Volgorde van verzamelen** als sorteervolgorde. Reken beide varianten op papier uit, telkens vanuit dezelfde beginsituatie en zonder tussendoor kaarten te beantwoorden.

Met **Stapel** als verzamelvolgorde doorloopt Anki de substapels als volgt.

1. Anki komt in alfabetische volgorde eerst bij `01 First` en daarna bij `02 Second`.
2. Anki verzamelt **A, B, C** op volgorde van positie. `01 First` heeft drie kaarten geleverd. Binnen de limiet van de bovenliggende stapel is nog één plek vrij.
3. Anki verzamelt **D** uit `02 Second` en bereikt daarmee de limiet van vier kaarten voor `OrderLab`.

Je verwacht de nieuwe kaarten voor het eerst te zien in de volgorde **A → B → C → D**. E en F vallen buiten de selectie.

Met **Oplopende positie** komen de kaarten uit beide substapels in aanmerking in de volgorde **D → A → E → B → F → C**. De eerste vier passen binnen alle limieten. Twee komen uit `02 Second` en twee uit `01 First`. Na vier kaarten stopt het verzamelen.

Je verwacht dus **D → A → E → B**. C en F vallen buiten de selectie. In deze versie past Anki bij elke kaart die het opneemt de limieten van de stapel en de bovenliggende stapels toe. [Broncode voor het verzamelen](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

De limiet van twee betekent dat `02 Second` maximaal twee kaarten kan leveren. Bij **Stapel** levert `02 Second` er maar één, omdat `01 First` al drie van de vier plekken heeft gevuld. Bij **Oplopende positie** komen er hier twee kaarten uit elke substapel. Dat volgt uit de kaartposities in dit voorbeeld. In een andere collectie kan de verdeling anders uitvallen.

## Laat alle zes toe om selectie en volgorde uit elkaar te houden

Geef de stapels voor een tweede vergelijking op papier genoeg ruimte voor alle kaarten. Zet de limiet van de bovenliggende stapel op **6** en die van `01 First` en `02 Second` elk op **3**. Houd **Volgorde van verzamelen** aan als sorteervolgorde.

| Verzamelinstelling | Limieten voor bovenliggende stapel / 01 First / 02 Second | Verwachte volgorde bij de eerste weergave |
| --- | --- | --- |
| Stapel | 6 / 3 / 3 | A → B → C → D → E → F |
| Oplopende positie | 6 / 3 / 3 | D → A → E → B → F → C |

Beide instellingen selecteren alle zes de kaarten. Alleen de volgorde verschilt. Als je alleen de limiet van de bovenliggende stapel verhoogt naar zes en die van `02 Second` op twee laat staan, komen er vijf kaarten in de wachtrij. F valt dan nog steeds buiten de selectie. De hogere limieten dienen alleen voor deze berekening. Hoeveel nieuwe kaarten je per dag wilt leren, staat los van dit voorbeeld.

## Met sorteren haal je een uitgesloten kaart niet terug

Ga terug naar de oorspronkelijke limieten van **4 / 3 / 2** en zet alleen de **Sorteervolgorde voor nieuwe kaarten** op **Willekeurig**.

| Verzamelinstelling | Kaarten die Anki willekeurig kan ordenen | Kaarten buiten de selectie |
| --- | --- | --- |
| Stapel | A, B, C, D | E, F |
| Oplopende positie | D, A, E, B | C, F |

Anki husselt de kaarten die het al heeft verzameld. De selectie blijft dus hetzelfde. Uit de tabel kun je geen specifieke willekeurige volgorde voorspellen. [Sorteercode van deze Anki-versie](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Ook **Kaarttype, daarna volgorde van verzamelen** (*Card type, then order gathered*) sorteert de kaarten die al verzameld zijn. De zes kaarten uit Basis-notities hebben hetzelfde kaarttypenummer. In dit voorbeeld behouden ze daardoor hun verzamelvolgorde.

Neem voor een apart sorteervoorbeeld vier kaarten uit notities met meerdere kaartsjablonen. Anki heeft ze al verzameld in de volgorde **W (type 2), X (type 1), Y (type 2), Z (type 1)**. Sorteren op kaarttype geeft **X → Z → W → Y**. Type 1 komt eerst. Binnen elk type blijft de verzamelvolgorde behouden. Dit voorbeeld begint pas na het verzamelen. Welke kaarten uit dezelfde notitie jouw instellingen voor automatisch begraven toelaten, valt er dus niet uit af te leiden.

Het kaarttypenummer geeft de positie van het kaartsjabloon binnen het notitietype aan. Of een kaart herkenning of productie oefent, hangt af van het sjabloon. Bekijk de vragen zelf voordat je ervan uitgaat dat sorteren op kaarttype alle vragen in de oorspronkelijke richting vooraan zet.

## Controleer de posities in de kaartbrowser voordat je ze wijzigt

Open de **Kaartbrowser** (*Browse*) en kies de modus **Kaarten** (*Cards*). Met de volgende zoekopdracht doorzoek je de stapel uit het voorbeeld en alle substapels.

```text
deck:OrderLab is:new
```

Zet via het menu van de kolomkoppen de kolommen **Vraag** (*Question*), **Kaart** (*Card*), **Stapel** (*Deck*), **Vervaldatum** (*Due*) en **Aangemaakt** (*Created*) aan. Bij een nieuwe kaart geeft **Vervaldatum** de positie in de wachtrij aan. **Aangemaakt** toont wanneer de bijbehorende notitie is gemaakt. **Sorteerveld** (*Sort Field*) bevat de waarde van het notitieveld dat is aangewezen voor sortering. Sorteren op een kolom verandert alleen de volgorde in de tabel. De opgeslagen posities en de verzamelinstelling voor je leersessie blijven hetzelfde. [Engelstalige uitleg over de kolommen in de kaartbrowser](https://docs.ankiweb.net/manual/browsing#columns)

De zoekopdracht `is:new` kan ook opgeschorte of begraven nieuwe kaarten opleveren. Bij die kaarten staat de waarde in **Vervaldatum** tussen haakjes. De volgende zoekopdracht sluit deze kaarten uit, net als kaarten die op dat moment in een gefilterde stapel zitten.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Bevat de stapelnaam spaties, zet de naam dan tussen aanhalingstekens, zoals in `deck:"My Deck"`. Ook met de gerichtere zoekopdracht kan de wachtrij van vandaag kleiner uitvallen dan de lijst met resultaten. Limieten en het automatisch begraven van kaarten uit dezelfde notitie kunnen de selectie verkleinen. [Zoeken op kaartstatus in de Engelstalige handleiding](https://docs.ankiweb.net/manual/searching#card-state) · [Zoeken op stapel in de Engelstalige handleiding](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) · [Engelstalige uitleg over begraven en opschorten](/blog/anki-bury-vs-suspend/)

Kloppen de posities al met de gewenste volgorde, laat ze dan staan. Moeten ze echt veranderen, noteer dan de oude posities, selecteer zelf een kleine groep nieuwe kaarten en kies **Kaarten → Positie wijzigen** (*Cards → Reposition*). Controleer het dialoogvenster voordat je bevestigt. **Positie van bestaande kaarten opschuiven** (*Shift position of existing cards*) kan ook kaarten met een hogere positie buiten je selectie opschuiven. Zonder die optie kunnen nieuwe posities samenvallen met bestaande posities. Bij gelijke posities kun je uit de positie alleen niet afleiden welke kaart eerst verschijnt. [Engelstalige handleiding voor Positie wijzigen](https://docs.ankiweb.net/manual/browsing#cards)

Je kunt de verzamel- en sorteervolgorde aanpassen met behoud van je leer- en herhaalgeschiedenis. Kijk bij het uitzoeken van de oorzaak naar de posities van nieuwe kaarten en de weergavevolgorde.

## Controleer welke stapel je aanklikt en hoeveel ruimte je vandaag nog hebt

Start je in het oorspronkelijke voorbeeld rechtstreeks vanuit `OrderLab::02 Second`, dan komen alleen D, E en F in aanmerking. Met de limiet van twee kaarten, **Oplopende positie** en **Volgorde van verzamelen** verwacht je **D → E**. Zelfs als de limiet van de bovenliggende stapel geldt, biedt die met vier ongebruikte plekken ruimte voor beide kaarten. Start je vanuit `OrderLab` met **Stapel** als verzamelvolgorde en de limieten **4 / 3 / 2**, dan krijg je **A → B → C → D**.

Bij een sessie die je vanuit `OrderLab` start, telt de weergavevolgorde van `OrderLab`. De aangeklikte stapel bepaalt ook het totale maximum, terwijl de geldende limieten per substapel mee blijven tellen. **Limieten gelden vanaf de bovenste stapel** (*Limits start from top*) bepaalt of de limieten van bovenliggende stapels ook gelden als je rechtstreeks vanuit een substapel begint. [Regels voor substapels in de Engelstalige handleiding](https://docs.ankiweb.net/manual/deck-options#subdecks) · [Instelling voor bovenliggende limieten in de Engelstalige handleiding](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Controleer ook de herhalingslimieten. Standaard begrenst de herhalingslimiet ook het aantal nieuwe kaarten. Met **Nieuwe kaarten negeren de herhalingslimiet** (*New cards ignore review limit*) schakel je dat gedrag uit. Die instelling en **Limieten gelden vanaf de bovenste stapel** gelden voor de hele collectie. Noteer hoe beide schakelaars staan voordat je bepaalt hoeveel nieuwe kaarten er vandaag nog bij kunnen. [Interface voor daglimieten in deze Anki-versie](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Gebruik **Voorbeeld** (*Preview*) in de kaartbrowser om vragen te bekijken zonder ze te beantwoorden. Gebruik bij je volgende gewone leersessie deze korte checklist.

| Wat je noteert | Wat je daarmee kunt nagaan |
| --- | --- |
| De aangeklikte stapel met de bijbehorende voorinstelling, verzamelvolgorde en sorteervolgorde | Welke instellingen bepalen de weergavevolgorde van de sessie? |
| De kaarten die je verwacht en hun opgeslagen posities | Zit het probleem in de selectie of in de volgorde? |
| Limieten voor nieuwe kaarten en herhalingen, uitzonderingen voor deze stapel of vandaag en wat je vandaag al hebt doorgenomen | Hoeveel ruimte is er nog? |
| Limieten van bovenliggende stapels en de twee schakelaars voor de hele collectie | Welke extra limieten gelden? |
| Begraven of opgeschorte kaarten, kaarten in gefilterde stapels en kaarten uit dezelfde notitie | Welke kaarten lijken in aanmerking te komen, maar zijn mogelijk niet beschikbaar? |
| De volgorde waarin je nieuwe kaarten voor het eerst ziet, apart van de leerherhalingen | Komt de volgorde overeen met je verwachting? |

Nadat je een nieuwe kaart hebt beantwoord, kunnen leerherhalingen tussendoor verschijnen. **Volgorde van nieuwe kaarten en herhalingen** (*New/Review Order*) bepaalt of nieuwe kaarten vóór, na of tussen gewone herhalingen verschijnen. Anki verzamelt en sorteert de nieuwe kaarten volgens de bijbehorende instellingen en voegt de categorieën daarna samen in de wachtrij. [Broncode voor het opbouwen van de wachtrij](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Je bent klaar zodra de verwachte selectie en de volgorde waarin je de kaarten voor het eerst ziet, overeenkomen met je sessie. Zie je nog een verschil, bewaar dan de posities, de instellingen, de gekozen stapel, de Anki-versie en de waargenomen volgorde. Noteer ook relevante add-ons, zodat je de oorzaak gericht kunt uitzoeken. Wil je een onderwerp extra oefenen, gebruik dan de aparte werkwijze met een gefilterde stapel. [Engelstalige uitleg over oefenen met een gefilterde stapel zonder de planning te wijzigen](/blog/anki-filtered-decks-without-rescheduling/)
