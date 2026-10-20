---
title: "De beste FSRS-instellingen voor Anki in 2026: retentie, leerstappen en herhaallast"
description: "Kies veilige FSRS-instellingen voor gewenste retentie, leerstappen, optimalisatie, opnieuw inplannen en herhaallast in Anki 26.08 met FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS-instellingen"
  - "beste FSRS-instellingen"
  - "Anki FSRS-instellingen"
  - "gewenste retentie FSRS"
  - "FSRS-leerstappen"
  - "FSRS-simulator"
  - "FSRS-parameters optimaliseren"
  - "FSRS-6"
---

De gewenste retentie in Anki verhogen van 90% naar 95% klinkt als een kleine wijziging. Dat betekent niet dat je maar vijf procent meer werk krijgt. FSRS moet de intervallen verkorten als het doel hoger wordt, en bij een verzameling die al lang in gebruik is kan de rij te herhalen kaarten flink groeien. Als je ook **Reschedule cards on change** inschakelt, kan een deel van dat extra werk meteen op je wachten.

De beste FSRS-instellingen zijn daarom geen reeks parameters die je kunt kopiëren. Je neemt een aantal beslissingen: bepaal hoeveel werk je kunt volhouden, kies daarbinnen hoeveel je wilt onthouden, stem het model af op je eigen geschiedenis en laat bestaande herhaaldatums staan, tenzij je ze bewust opnieuw wilt laten berekenen.

De benamingen en de werking hieronder komen overeen met [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) en de bijbehorende FSRS-6-instellingen. Wil je eerst het model begrijpen voordat je de instellingen aanpast, lees dan [Wat is FSRS?](/blog/what-is-fsrs/). Kies je nog tussen planningsalgoritmen, begin dan bij [FSRS versus SM-2](/blog/fsrs-vs-sm-2/).

> **Ter verduidelijking:** ik ben Kirill Markin en ik bouw [Nibomo](/nl/features/). Anki biedt persoonlijke parameteroptimalisatie en experimentele simulaties van de herhaallast die Nibomo momenteel niet heeft. In de vergelijking verderop benoem ik die verschillen expliciet.

**Feiten gecontroleerd:** 8 september 2026.

![Een sluiswachter test de waterstroming met een schaalmodel voordat hij de echte sluis aanpast](/blog/fsrs-settings-v2.png)

## Het korte antwoord: begin hiermee

Voor de meeste Anki-gebruikers zijn dit veilige uitgangspunten, geen instellingen die voor iedereen gelden:

| Instelling of gewoonte | Veilig uitgangspunt | Waarom |
| --- | --- | --- |
| Gewenste retentie | `0.90` | Dit is de standaard van Anki en biedt een balans tussen onthouden en herhaallast. |
| FSRS-parameters | Gebruik **Optimize Current Preset**; neem geen gewichten over en bewerk ze niet handmatig | De optimalisatie stemt het model af op je herhaalgeschiedenis. |
| Frequentie van optimaliseren | Hooguit maandelijks; eens in de paar maanden is meestal genoeg | Anki raadt af om vaak te optimaliseren. |
| Leerstappen | Houd het bij een klein aantal stappen die je dezelfde dag kunt afronden | Lange reeksen stappen stellen de planning op basis van het model uit. |
| Herleerstappen | Houd ze beperkt en korter dan één dag | Na een mislukte herhaling geldt dezelfde grens. |
| Reschedule cards on change | Uit | Nieuwe instellingen kunnen bij toekomstige herhalingen ingaan zonder de rij voor vandaag opnieuw op te bouwen. |
| Maximuminterval | Behoud de standaard van 100 jaar | Een lager maximum laat kaarten die je goed kent vaker terugkomen. |
| Nieuwe kaarten per dag | Baseer dit op de hoeveelheid werk die je kunt volhouden | Elke nieuwe kaart kost nu leerwerk en later herhalingen. |
| Again tegenover Hard | Again betekent dat je het antwoord niet wist; Hard dat het met moeite lukte | Onjuiste beoordelingen geven het model een onjuiste geschiedenis. |

Kun je de herhalingen goed bijhouden en lijkt je huidige opzet hier al op, dan hoef je misschien niets te veranderen. Aan instellingen sleutelen is geen studeren.

## Houd drie beslissingen uit elkaar

Gewenste retentie, FSRS-parameters en dagelijkse studielast worden vaak op één hoop gegooid. Ze regelen verschillende dingen:

- **Gewenste retentie** is de kans op een juist antwoord waar je naar streeft. Je kiest dit op basis van je doelen en beschikbare studietijd.
- **FSRS-parameters** stemmen het geheugenmodel af op je herhaalgeschiedenis. Anki berekent ze bij het optimaliseren.
- **Limieten voor nieuwe kaarten en herhalingen** bepalen hoeveel materiaal erbij komt en hoeveel herhalingen die aan de beurt zijn Anki per dag kan tonen.

Dit onderscheid maakt problemen veel makkelijker te verklaren. Een lange rij kaarten betekent niet automatisch dat je parameters verkeerd zijn. Een kaartenset voor een belangrijk examen heeft niet automatisch een aparte instellingenset (preset) nodig. En een lagere gewenste retentie maakt een onhoudbare toestroom van nieuwe kaarten niet ineens houdbaar.

## Kies de gewenste retentie op basis van je studielast

Met gewenste retentie geef je FSRS aan hoe groot de kans moet zijn dat je het antwoord op een kaart nog weet wanneer die aan herhaling toe is. Bij `0.90` plant FSRS de herhaling op een moment waarop je naar verwachting 90% kans hebt om het antwoord nog te weten. Dat is een doel voor het model, geen garantie dat je in elke sessie of op elk examen precies 90% goed beantwoordt.

De afweging werkt in beide richtingen:

- Verhoog je de gewenste retentie, dan worden de intervallen korter en krijg je meer herhalingen.
- Verlaag je die, dan worden de intervallen langer en vergeet je vaker een antwoord.
- Zet je de waarde te laag, dan kan het extra herleren na vergeten antwoorden een deel van de gehoopte tijdwinst opslokken.

Anki gebruikt standaard 90%. De [uitleg over gewenste retentie](https://docs.ankiweb.net/deck-options.html#desired-retention) waarschuwt dat het werk snel toeneemt naarmate het doel dichter bij 100% komt en raadt aan onder 97% te blijven. De officiële [uitleg over optimale retentie](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) behandelt de andere kant van de curve: een heel lage retentie kan ook inefficiënt zijn, omdat vergeten kaarten meer werk vragen.

Begin met `0.90` en wijzig die waarde alleen nadat je de herhaallast hebt bekeken. Een hoger doel kan zinvol zijn bij materiaal waarbij vergeten echte gevolgen heeft. Een lager doel kan passen als herhalingen ten koste gaan van waardevollere studie. Geen van beide lost vage kaarten, oneerlijke beoordelingen of te veel nieuwe kaarten op.

### Retentie kun je per kaartenset kiezen; parameters gelden per instellingenset

In Anki 26.08 kun je bij **Desired retention** kiezen waar het retentiedoel geldt: **Shared Preset** en **This deck**. Je kunt verwante kaartensets dus dezelfde instellingenset laten gebruiken, terwijl je voor één set een eigen retentiedoel instelt.

Gebruik die afzonderlijke instelling als de gevolgen van vergeten verschillen. Voor een kaartenset voor een beroepskwalificatie kan een hoger doel gerechtvaardigd zijn dan voor een naslagset met lage prioriteit, ook als beide hetzelfde afgestemde model gebruiken.

Als je **This deck** kiest, worden de FSRS-parameters niet specifiek voor die kaartenset. Standaard stemt Anki de parameters af op de herhaalgeschiedenis van alle kaartensets die aan de huidige instellingenset zijn toegewezen. Verschillen groepen kaartensets sterk in hoe moeilijk je ze vindt, dan zijn afzonderlijke instellingensets de ondersteunde manier om de parameters apart af te stemmen.

## Gebruik Help Me Decide en de Simulator voor verschillende vragen

Anki 26.08 biedt twee afzonderlijke experimentele hulpmiddelen:

- **Help Me Decide (Experimental)** toont een persoonlijke curve van retentie tegenover herhaallast. Gebruik dit voor de vraag: “Welk retentiedoel past bij het aantal herhalingen of minuten dat ik kan volhouden?”
- **FSRS Simulator (Experimental)** schat hoe één configuratie zich in de loop van de tijd kan gedragen. Gebruik dit om wijzigingen in retentie, nieuwe kaarten, herhaallimieten en maximuminterval te vergelijken.

De [documentatie van de FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) noemt de belangrijkste invoerwaarden:

- het aantal te simuleren dagen
- het aantal extra nieuwe kaarten om mee te simuleren
- nieuwe kaarten per dag
- het maximumaantal herhalingen per dag
- het maximuminterval
- de gewenste retentie en de FSRS-parameters van de instellingenset

De simulatie gebruikt ook de werkelijke geheugenstatus van de kaarten binnen de instellingenset. Dat maakt haar nuttiger voor een verzameling met veel herhaalgeschiedenis dan het aantal kaarten dat vandaag aan de beurt is met een algemeen percentage vermenigvuldigen.

Simuleer drie scenario's voordat je de echte instellingen wijzigt:

1. Je huidige retentie en aantal nieuwe kaarten.
2. Het retentiedoel dat je overweegt.
3. Hetzelfde doel met minder nieuwe kaarten per dag.

Het derde scenario test een veelgebruikt alternatief: behoud het retentiedoel en voeg minder snel nieuw materiaal toe. Levert dat een haalbare voorspelling op, dan hoef je niet te accepteren dat je meer vergeet om de stapel te herhalen kaarten te verkleinen. Meer over de instroom lees je in [Hoeveel nieuwe flashcards per dag?](/blog/how-many-new-flashcards-per-day/).

Beide hulpmiddelen geven schattingen. Overgeslagen dagen, bewerkte kaarten, nieuw materiaal en andere beoordelingsgewoonten kunnen ervoor zorgen dat het werk in de praktijk afwijkt van de grafiek. Gebruik de vergelijking om een richting te kiezen, niet als belofte van een exact aantal kaarten over een paar maanden.

Oudere handleidingen noemen mogelijk **Compute Minimum Recommended Retention**, oftewel CMRR. Anki heeft die functie in versie 25.07 verwijderd. Het is niet meer de huidige werkwijze om de gewenste retentie te kiezen.

## Optimaliseer FSRS-parameters op basis van je eigen geschiedenis

Gewenste retentie drukt je doel uit. FSRS-parameters beschrijven hoe het model aansluit op je herhalingen.

Gebruik in Anki 26.08 **Optimize Current Preset** om de parameters van de actieve instellingenset af te stemmen. Standaard gebruikt Anki de herhaalgeschiedenis van elke kaartenset met die instellingenset; je kunt de zoekopdracht aanpassen als je een beperktere selectie wilt gebruiken. **Optimize All Presets** werkt alle instellingensets in één keer bij.

Voer geen gewichten met de hand in en kopieer ze niet van Reddit, een video of andermans kaartenset. Hun kaarten, herhaalmomenten en beoordelingsgewoonten zijn niet jouw geschiedenis. Een nette rij [FSRS-6-gewichten](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) is geen studiestrategie die je zomaar kunt overnemen.

Optimaliseer pas opnieuw als er een behoorlijke hoeveelheid nieuwe herhaalgeschiedenis bij is gekomen. Volgens de Anki-handleiding is eens per maand voldoende; de uitleg in Anki 26.08 zegt dat eens in de paar maanden genoeg is. De praktische conclusie is dezelfde: er is geen reden om elke week te optimaliseren, laat staan na elke sessie.

### Gebruik de controle voor de huidige instellingenset

Schakel **Check health when optimizing (slow)** in als je wilt laten beoordelen hoe goed FSRS zich kan aanpassen aan de geschiedenis van de huidige instellingenset. Deze controle werkt met **Optimize Current Preset**, niet met **Optimize All Presets**.

Is het resultaat slecht, bekijk dan eerst de gegevens voordat je aan de gewichten komt. De [uitleg van Anki over FSRS-parameters](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) noemt veelvoorkomende oorzaken: minder dan een paar honderd herhalingen, Hard gebruiken na een fout antwoord en niet op Again drukken als je het antwoord niet wist. Heb je weinig bruikbare geschiedenis, behoud dan de standaardwaarden en optimaliseer later, in plaats van de parameters van een andere gebruiker te lenen.

## Again betekent fout; Hard is een goed antwoord

Deze gewoonte is net zo belangrijk als welke instelling dan ook.

Gebruik **Again** als je het gevraagde antwoord niet kon geven of een fout antwoord gaf. Gebruik **Hard** alleen als je het juiste antwoord gaf, maar met veel moeite of aarzeling. Good en Easy gelden ook als geslaagde antwoorden.

Als je op Hard drukt om het korte interval van Again te vermijden, registreer je een succes terwijl je het antwoord niet wist. FSRS leert dan van de verkeerde gebeurtenis. Kies de knop die aangeeft hoe goed je het antwoord nog wist, niet de knop met het interval dat je graag wilt.

Onduidelijke kaarten maken eerlijk beoordelen lastiger. Vraagt een kaart naar vijf feiten en weet je er vier, dan is het planningsprobleem al bij het maken van de kaart ontstaan. Splits de kaart op of herschrijf de vraag. Voor kaarten die ondanks herhaalde oefening fout blijven gaan, lees [Hardnekkig moeilijke flashcards verbeteren](/blog/how-to-fix-leech-flashcards/).

## Houd FSRS-leerstappen kort, of laat ze bewust leeg

Leer- en herleerstappen bepalen de herhalingen op korte termijn voordat de gewone langetermijnplanning het overneemt. Ze vormen geen tweede retentiedoel.

De FSRS-uitleg van Anki raadt twee grenzen aan:

- elke stap moet korter dan één dag zijn en op dezelfde dag afgerond kunnen worden
- het aantal herhalingen op dezelfde dag moet klein blijven

Lange reeksen zoals `1m 10m 1d 3d` nemen een oude SM-2-gewoonte mee naar FSRS. Stappen van een dag of langer stellen de planning op basis van het model uit en kunnen verwarrende knoppen opleveren, bijvoorbeeld Hard met een langer interval dan Good.

Een korte reeks zoals `1m 10m`, met een herleerstap van `10m`, is een voorzichtig uitgangspunt als dat bij je sessies past. Meer herhalingen op dezelfde dag zijn niet automatisch beter.

In Anki 26.08 mag je ook elk van beide velden voor leer- en herleerstappen leeg laten. Met FSRS ingeschakeld draagt een leeg veld die kortetermijnplanning over aan FSRS. Dit is experimenteel en het interval voor Again kan een dag of langer zijn. Behoud korte handmatige stappen als je wilt kunnen rekenen op een herhaling op dezelfde dag; maak een veld alleen leeg als je bewust accepteert dat FSRS het tijdstip kiest.

## Laat Reschedule cards on change uit voor een geleidelijke overgang

Als **Reschedule cards on change** uitstaat, wat standaard zo is, verandert het inschakelen van FSRS of het aanpassen van gewenste retentie of parameters niet meteen de bestaande herhaaldatums. De nieuwe configuratie wordt toegepast wanneer je kaarten in de toekomst herhaalt. De rij verandert dus geleidelijk.

Sla je een van die FSRS-wijzigingen op terwijl de optie aanstaat, dan worden de herhaaldatums meteen opnieuw berekend. Afhankelijk van het nieuwe doel en de status van de kaarten kunnen veel kaarten tegelijk aan herhaling toe zijn. Anki voegt voor opnieuw ingeplande kaarten ook herhaalgegevens toe, waardoor de verzameling groter wordt.

Deze optie is alleen nuttig als je de bestaande planning daadwerkelijk opnieuw wilt opbouwen. Voor een verzameling die al lang in gebruik is:

1. Maak een nieuwe back-up en controleer of je weet hoe je de wijziging ongedaan maakt of de back-up terugzet.
2. Gebruik de Simulator met de voorgestelde instellingen.
3. Kies één configuratiewijziging; combineer geen verschillende experimenten.
4. Schakel bij het opslaan alleen opnieuw inplannen in als je de herhaaldatums direct wilt aanpassen en het resultaat aankunt.

Anki raadt expliciet een back-up aan als je overstapt van SM-2 en kaarten opnieuw laat inplannen. De uitgebreidere [handleiding voor back-ups van flashcards](/blog/how-to-back-up-flashcards/) legt uit waarom weten hoe je herstelt net zo belangrijk is als het back-upbestand zelf.

## Houd het maximuminterval ruim

Het maximuminterval van Anki is standaard 100 jaar. Dat lijkt vreemd totdat je bedenkt dat het een bovengrens is, geen belofte dat elke kaart die je goed kent een eeuw verdwijnt.

Een lager maximum dwingt kaarten die je goed kent eerder terug en verhoogt de herhaallast. Bij die grens kunnen Hard, Good en Easy allemaal hetzelfde interval tonen, omdat geen ervan boven het maximum mag uitkomen.

Een korter maximuminterval kan redelijk zijn als een examen een concrete deadline oplevert, het materiaal vaak verandert of een beroepsregel vereist dat je de stof regelmatig herhaalt, ongeacht wat het geheugenmodel voorspelt. Stem die grens af op je kalender en de Simulator, in plaats van uit bezorgdheid een laag getal te kiezen. [Met FSRS voor een examen leren](/blog/how-to-study-for-an-exam-with-fsrs/) gaat in op dat specifieke geval.

Houd de bovengrens ruim als je gewoon voor de lange termijn leert. De gewenste retentie bepaalt al bij welke voorspelde kans op een juist antwoord een herhaling nodig is.

## Nieuwe kaarten horen bij de beslissing over je studielast

FSRS kan herhalingen spreiden; het kan een onbeperkte instroom niet houdbaar maken. Elke nieuwe kaart kost nu leerwerk en later herhaalwerk.

Wordt de rij te zwaar, bekijk dan deze punten voordat je de gewenste retentie verlaagt:

- het aantal nieuwe kaarten per dag
- grote imports of grote aantallen gegenereerde kaarten
- een herhaallimiet die werk dat al aan de beurt is steeds verbergt
- hardnekkig moeilijke en vage kaarten die veel pogingen kosten
- overgeslagen herhaaldagen

Gebruik **Additional new cards to simulate** als je weet dat een kaartenset gaat groeien. Een voorspelling op basis van alleen je huidige verzameling geeft niet de herhaallast na een grote import weer.

Valt de voorspelling te hoog uit, verminder dan de instroom en simuleer opnieuw. Zo behoud je het retentiedoel zonder het algoritme te vragen te accepteren dat je meer vergeet.

## Anki en Nibomo bieden verschillende FSRS-instellingen

Beide producten gebruiken FSRS-6, maar de FSRS-instellingen van Anki komen niet één op één overeen met die van Nibomo.

| Mogelijkheid | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Gewenste retentie | **Shared Preset** of **This deck** | Instelbaar per werkruimte; standaard `0.90` |
| FSRS-parameters | **Optimize Current Preset** of **Optimize All Presets** op basis van herhaalgeschiedenis | De officiële standaardgewichten van FSRS-6 staan vast en zijn in v1 niet door gebruikers aan te passen |
| Leerstappen | Instelbaar; planning door FSRS met een leeg veld is experimenteel | Instelbaar per werkruimte; standaard `1m 10m` |
| Herleerstappen | Instelbaar; planning door FSRS met een leeg veld is experimenteel | Instelbaar per werkruimte; standaard `10m` |
| Maximuminterval | Standaard 100 jaar | Standaard 36.500 dagen, eveneens 100 jaar |
| Instellingen wijzigen | Standaard voor toekomstige herhalingen; optioneel bestaande kaarten opnieuw inplannen | Alleen voor toekomstige herhalingen; bestaande herhaaldatums worden niet opnieuw berekend |
| Hulpmiddelen voor herhaallast | **Help Me Decide (Experimental)** en **FSRS Simulator (Experimental)** | Geen vergelijkbare simulator in v1 |

Nibomo gebruikt de standaardbeoordelingen Again, Hard, Good en Easy en bewaart de FSRS-geheugenstatus per kaart. De planningsalgoritmen in de backend, iOS en Android zijn drie onafhankelijke implementaties waarvan het gedrag gelijk wordt gehouden. Herhalen via de webapp gebruikt de backendplanner en voegt dus geen vierde implementatie toe.

Deze grenzen en standaardwaarden staan beschreven in de openbare [specificatie van de FSRS-planning van Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). De afweging is eenvoudig: Nibomo biedt een praktische FSRS-6-opzet per werkruimte, terwijl Anki fijnmazigere instellingen, persoonlijke afstemming en simulatie biedt. Zijn die mogelijkheden essentieel voor je, dan past Anki beter.

## Een veiligere werkwijze voor een bestaande verzameling

Heb je al maanden of jaren aan herhaalgeschiedenis, houd dan deze volgorde aan:

1. **Gebruik beoordelingen correct.** Again betekent dat je het antwoord niet wist; Hard betekent dat het met moeite lukte.
2. **Optimaliseer de huidige instellingenset.** Stem af op je eigen geschiedenis in plaats van gewichten te bewerken of te kopiëren.
3. **Voer zo nodig de controle uit.** Behandel een beperkte of inconsistente geschiedenis als een gegevensprobleem.
4. **Gebruik Help Me Decide.** Kies een retentiebereik op basis van het aantal herhalingen of minuten dat je kunt volhouden.
5. **Gebruik de Simulator.** Vergelijk de huidige opzet, het voorgestelde doel en een lagere instroom van nieuwe kaarten.
6. **Pas één instelling toe.** Pas eerst de retentie of de instroom aan en bekijk daarna wat er werkelijk met de rij gebeurt.
7. **Houd stappen kort.** Verwijder leer- en herleerreeksen met stappen van een dag of langer; gebruik lege velden alleen als experiment.
8. **Houd het maximuminterval ruim.** Verkort het alleen vanwege een concrete termijn of vereiste.
9. **Laat opnieuw inplannen uit.** Moet de planning meteen opnieuw worden opgebouwd, maak dan eerst een back-up en houd rekening met de resulterende rij kaarten.

Met deze volgorde kun je wijzigingen in een bestaande planning zo lang mogelijk terugdraaien. Je voorkomt ook dat drie verschillende problemen, de afstemming van het model, het retentiedoel en de instroom van nieuw materiaal, samen één instellingenpuzzel worden.

## Veelgestelde vragen over de beste FSRS-instellingen

### Is 90% de beste gewenste retentie voor FSRS?

Het is het veiligste algemene uitgangspunt, omdat het de standaard van Anki is en je wegblijft van het steilste deel van de curve waar hoge retentie veel extra werk vraagt. De beste waarde voor een kaartenset hangt af van de gevolgen van vergeten en hoeveel werk je kunt volhouden. Bekijk **Help Me Decide (Experimental)** voordat je de waarde aanpast.

### Moet ik de gewenste retentie op 95% zetten?

Alleen nadat je hebt bekeken hoeveel extra herhalingen of minuten dat kost. Voor een goed opgebouwde kaartenset met belangrijke leerstof kan 95% gerechtvaardigd zijn; een grote verzameling voor minder dringende doelen kan er onnodig zwaar door worden. Schakel niet tegelijk het opnieuw inplannen van bestaande kaarten in, tenzij je de herhaaldatums bewust meteen opnieuw wilt laten berekenen.

### Hoe vaak moet ik FSRS-parameters optimaliseren?

Maandelijks is al vaak genoeg, en volgens de uitleg in Anki 26.08 volstaat eens in de paar maanden. Optimaliseer nadat er een behoorlijke hoeveelheid nieuwe geschiedenis is bijgekomen, niet volgens een dagelijks of wekelijks schema.

### Moeten de FSRS-leerstappen leeg zijn?

Met lege leer- of herleerstappen kan Anki 26.08 de bijbehorende kortetermijnplanning aan FSRS overlaten. De functie is experimenteel en Again kan een dag of langer in de toekomst worden ingepland. Een beperkt aantal stappen op dezelfde dag blijft de voorzichtige keuze.

### Worden bestaande Anki-kaarten opnieuw ingepland als ik FSRS-instellingen wijzig?

Standaard niet. Als **Reschedule cards on change** uitstaat, gelden nieuwe instellingen voor toekomstige herhalingen zonder de rij meteen opnieuw op te bouwen. Schakel je het in, dan veranderen de herhaaldatums en kunnen veel kaarten ineens aan de beurt zijn. Maak daarom eerst een back-up.

### Zit CMRR nog in Anki?

Nee. Anki heeft Compute Minimum Recommended Retention in versie 25.07 verwijderd. Gebruik in Anki 26.08 **Help Me Decide (Experimental)** en **FSRS Simulator (Experimental)** om retentie te vergelijken met de geschatte herhaallast.

### Gebruikt Nibomo dezelfde instellingen als Anki?

Nibomo gebruikt FSRS-6 en biedt gewenste retentie, leerstappen, herleerstappen, maximuminterval en fuzz per werkruimte. Het neemt niet het volledige instellingenmodel van Anki over: de gewichten staan vast in v1, wijzigingen gelden alleen voor toekomstige herhalingen en er is geen persoonlijke parameteroptimalisatie of simulator voor de herhaallast.

## Bepaal de studielast vóór het percentage

Goede FSRS-instellingen laten de rij te herhalen kaarten aansluiten op een echt studieplan. Begin met 90%, schat het werk in, beheers de instroom van nieuwe kaarten en verhoog de retentie alleen als meer onthouden de extra herhalingen waard is. Houd stappen kort, het maximuminterval ruim en je beoordelingen eerlijk.

Sluit daarna het instellingenscherm. Het planningsalgoritme heeft meer aan consequent herhalen dan aan nog een avond sleutelen.
