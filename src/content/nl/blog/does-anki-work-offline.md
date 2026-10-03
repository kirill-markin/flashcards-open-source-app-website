---
title: "Werkt Anki offline in 2026? Desktop, iPhone, Android en synchronisatie"
description: "Ja: de geïnstalleerde Anki-apps voor desktop, iPhone, iPad en Android werken offline met een lokale collectie. Lees waarvoor je internet nodig hebt, hoe je later synchroniseert en hoe je media voorbereidt."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "werkt Anki offline"
  - "kun je Anki offline gebruiken"
  - "werkt AnkiMobile offline"
  - "werkt AnkiDroid offline"
  - "Anki offline synchroniseren"
  - "AnkiWeb offline"
  - "Anki gebruiken zonder internet"
---

Anki hoeft geen verbinding met een server te maken om je volgende kaart te tonen. **De geïnstalleerde Anki-apps werken offline in 2026:** Anki op Windows, macOS en Linux; AnkiMobile op iPhone en iPad; en AnkiDroid op Android. Elke app gebruikt een collectie die op het apparaat zelf staat. Je kunt dus kaarten herhalen, notities toevoegen en de inhoud bewerken zonder internet.

Er is één verschil dat je makkelijk over het hoofd ziet: AnkiWeb werkt anders. Het is een online dienst waarmee je in je browser leert en synchroniseert. Ook een geïnstalleerde app kan alleen de kaartensets en media gebruiken die al op dat specifieke apparaat staan.

**Feiten gecontroleerd:** 16 augustus 2026.

![Een veldonderzoeker voegt een item toe aan een lokaal archief met foto's, audio en tekst terwijl de radioverbinding in de bergen uitgevallen is](/blog/does-anki-work-offline.png)

## Het korte antwoord per app

De [officiële Anki-website](https://apps.ankiweb.net/) noemt de desktopapp, AnkiMobile voor iOS, AnkiDroid voor Android en AnkiWeb als onderdelen van hetzelfde ecosysteem. Maar ze kunnen niet allemaal hetzelfde zonder internet.

| App of dienst | Werkt het offline? | Wat je zonder internet kunt doen | Waarvoor je verbinding nodig hebt |
| --- | --- | --- | --- |
| **Anki voor desktop** op Windows, macOS of Linux | **Ja.** De collectie en mediamap staan lokaal. | Kaarten herhalen, notities toevoegen, de inhoud van notities bewerken en media gebruiken die al op de computer staan. | Gedeelde kaartensets downloaden, synchroniseren met AnkiWeb en alles ophalen wat een kaart of add-on van een online dienst opvraagt. |
| **AnkiMobile** op iPhone of iPad | **Ja.** De app bewaart een lokale collectie. | Lokale kaarten herhalen, notities toevoegen, de inhoud van notities bewerken en geluiden afspelen of afbeeldingen tonen die al op het apparaat staan. | De eerste synchronisatie van de collectie en media voltooien, AnkiWeb gebruiken en externe bronnen openen. |
| **AnkiDroid** op Android | **Ja.** AnkiDroid bewaart de collectie op het Android-apparaat. | Lokale kaarten herhalen, notities toevoegen, de inhoud van notities bewerken en media gebruiken die op het apparaat staan. | Synchroniseren of ontbrekend materiaal downloaden, gedeelde kaartensets ophalen en kaartfuncties gebruiken die een netwerkverbinding vereisen. |
| **AnkiWeb** in een browser | **Geen offlinemodus.** Het is een online dienst om te leren en te synchroniseren. | Reken er niet op dat je de dienst kunt gebruiken zodra de verbinding wegvalt. | Een internetverbinding gebruiken of overstappen op een geïnstalleerde app die je vooraf hebt voorbereid. |

Je kunt Anki offline gebruiken als je een geïnstalleerde app gebruikt waarop de juiste collectie al staat. AnkiWeb in een browser heeft nog steeds een verbinding nodig.

## Offline herhalingen en wijzigingen blijven eerst op dat apparaat

Wanneer je offline kaarten beantwoordt, slaat Anki die herhalingen op in de lokale collectie. Anki plant de volgende herhalingen op basis van die lokale gegevens. Nieuwe notities en wijzigingen aan de inhoud blijven ook lokaal. Ze verschijnen pas op een ander apparaat wanneer je weer verbinding maakt en synchroniseert.

Synchroniseren met AnkiWeb is optioneel als je maar op één apparaat leert. Het doel is wijzigingen in de collectie tussen apparaten uit te wisselen. Volgens de [Anki-handleiding over synchronisatie](https://docs.ankiweb.net/syncing.html) kunnen herhalingen en wijzigingen aan notities van verschillende apparaten onder normale omstandigheden worden samengevoegd. Als dezelfde kaart op twee apparaten is herhaald, blijven beide antwoorden in de herhalingsgeschiedenis staan. De status van het meest recente antwoord is dan bepalend.

Met deze werkwijze voorkom je onnodige synchronisatieconflicten:

1. Synchroniseer het apparaat terwijl je nog een betrouwbare verbinding hebt.
2. Herhaal kaarten, voeg notities toe of verbeter de tekst op je kaarten terwijl je offline bent.
3. Maak weer verbinding en synchroniseer dat apparaat voordat je op een ander apparaat verdergaat.
4. Laat het andere apparaat zijn eigen synchronisatie afronden voordat je daar meer wijzigingen aanbrengt.

Wijzigingen in de structuur van de collectie vragen om meer zorg. Een veld toevoegen, een kaartsjabloon verwijderen, notitietypen wijzigen en vergelijkbare ingrepen kunnen een eenrichtingssynchronisatie vereisen in plaats van een samenvoeging. Daarbij vraagt Anki je om de lokale collectie of de AnkiWeb-collectie te behouden. Wijzigingen aan de andere kant kunnen dan worden overschreven.

Blijf tijdens een reis dus gerust kaarten herhalen en notities bewerken, maar stel ingewikkelde wijzigingen aan notitietypen en sjablonen uit als je op meerdere offline apparaten afzonderlijk werkt. Als Anki je om een upload of download vraagt, kijk dan eerst welke collectie het werk bevat dat je wilt behouden voordat je een richting kiest.

## Media zijn pas lokaal als ze op het apparaat staan

Anki slaat geluiden en afbeeldingen apart van de collectiegegevens op. Voor de desktopapp legt de [documentatie over media](https://docs.ankiweb.net/media.html) uit dat bestanden die je aan een notitie toevoegt of erin plakt, naar de lokale map `collection.media` worden gekopieerd. Zodra een mediabestand in die map staat, heeft de kaart geen internet nodig om het te laden.

De voorbereiding is het kwetsbare punt. De collectie en media worden apart gesynchroniseerd. Geluiden en afbeeldingen kunnen dus nog worden overgedragen nadat de kaarten al zichtbaar zijn. De [synchronisatiehandleiding van AnkiMobile](https://docs.ankimobile.net/syncing.html) waarschuwt dat media kunnen ontbreken totdat de eerste synchronisatie volledig is afgerond. Een complete lijst met kaartensets bewijst niet dat een collectie met veel afbeeldingen of audio klaar is voor offline gebruik.

Voordat je offline gaat:

- synchroniseer het apparaat waarop je de media hebt toegevoegd;
- wacht tot de mediasynchronisatie is afgerond;
- synchroniseer het apparaat dat je meeneemt en wacht ook daar tot alles klaar is;
- open kaarten met alle soorten afbeeldingen en audio die je nodig hebt;
- voer waar beschikbaar **Check Media** uit om notities te vinden die naar ontbrekende bestanden verwijzen.

Die laatste controle is vooral nuttig bij gedeelde kaartensets. Soms heeft de maker een afbeelding waarnaar een kaart verwijst nooit meegeleverd. Vaker synchroniseren kan die afbeelding dan ook niet downloaden.

Lokale media maken niet elke kaart volledig zelfstandig. Een kaartsjabloon kan verwijzen naar een afbeelding, script, lettertype of andere bron op het web. Online woordenboeken, downloads van gedeelde kaartensets en add-ons die externe API's aanroepen, hebben nog steeds een verbinding nodig. Tekst-naar-spraak hangt af van de stem en het platform: een geïnstalleerde systeemstem kan offline werken, een stem van een online dienst niet. Test de specifieke functie in plaats van ervan uit te gaan dat alle tekst-naar-spraakfuncties of add-ons hetzelfde werken.

## Hoe Anki synchroniseert wanneer je weer verbinding hebt

Offline synchroniseren met Anki bestaat eigenlijk uit twee stappen: nu lokaal werken en later via het netwerk synchroniseren.

Synchroniseer zodra de verbinding terug is het apparaat met je offline werk. Wacht tot zowel de collectie als de media zijn gesynchroniseerd. Synchroniseer daarna het volgende apparaat voordat je daar kaarten herhaalt of wijzigingen aanbrengt. Met die volgorde is het makkelijker te bepalen welke gegevens het recentst zijn als Anki je vraagt een conflict op te lossen.

Controleer het resultaat ook nadat de synchronisatieanimatie is afgelopen:

- zoek een notitie die je offline hebt toegevoegd;
- controleer of een bewerkt veld de nieuwe tekst bevat;
- bekijk de herhalingsgeschiedenis of het geplande herhaalmoment van een kaart die je hebt beantwoord;
- open op het tweede apparaat minstens één nieuw toegevoegde afbeelding of audiobestand.

Als je dezelfde notitie op twee apparaten hebt bewerkt, lees dan de uiteindelijke notitie. Ga er niet zomaar van uit dat de samenvoeging jouw gewenste formulering heeft behouden. Klik niet uit gewoonte door als een rode synchronisatieknop of een keuze voor een volledige upload of download verschijnt. Een volledige download overschrijft wijzigingen in de lokale collectie. Een volledige upload vervangt de AnkiWeb-collectie, waarna de andere apparaten die downloaden.

## Zonder regelmatig internet kun je de collectie als bestand overzetten

Je kunt een Anki-collectie ook tussen apparaten overzetten zonder regelmatig toegang tot AnkiWeb. Je draagt de collectie dan over van het ene apparaat naar het andere, zonder wijzigingen van meerdere apparaten samen te voegen.

De [handleiding van AnkiMobile voor het overzetten van collecties](https://docs.ankimobile.net/collection-transfer.html) gebruikt een bestand `collection.colpkg` met alle kaartensets en planningsgegevens. Je exporteert de huidige collectie, zet het bestand over via AirDrop of bestandsdeling en importeert het op het andere apparaat. De [AnkiDroid-handleiding](https://docs.ankidroid.org/manual.html) beschrijft een vergelijkbare werkwijze via USB om de collectie tussen Android en desktop over te zetten.

Als je een volledige collectie importeert, vervangt die de collectie die al op het ontvangende apparaat staat. Zo'n bestand kan geen twee offline collecties samenvoegen die onafhankelijk van elkaar zijn gewijzigd. Gebruik één apparaat als de actuele bron: exporteer vanaf dat apparaat, importeer op het volgende, breng daar je wijzigingen aan en zet de nieuwere collectie terug voordat je op het eerste apparaat verdergaat.

Dit is handig bij veldwerk, op schepen, op afgelegen locaties of op netwerken met toegangsbeperkingen waar af en toe bestanden overzetten mogelijk is, maar regelmatig synchroniseren via de cloud niet. Voor een gewone vlucht of je dagelijkse reis naar werk of studie is een volledig afgeronde AnkiWeb-synchronisatie voor vertrek eenvoudiger.

## Synchronisatie is geen Anki-back-up

Synchronisatie houdt de collecties op je apparaten gelijk. Daardoor kan een onbedoelde verwijdering of ongewenste wijziging zich verspreiden naar elk gesynchroniseerd apparaat.

De geïnstalleerde Anki-apps bewaren lokale back-ups, maar media vragen om aparte aandacht. Zo staat in de [handleiding van AnkiMobile over voorkeuren](https://docs.ankimobile.net/preferences.html) dat automatische back-ups kaarten en statistieken bevatten, maar geen geluiden of afbeeldingen. Een volledige collectie-export inclusief media heeft een ander doel dan zowel synchronisatie als de geschiedenis van automatische back-ups.

Als het veel werk zou kosten om je kaartenset opnieuw op te bouwen, bewaar dan regelmatig een volledige export inclusief media op een andere plek dan het apparaat dat je dagelijks gebruikt. De uitgebreidere [handleiding voor back-ups van flashcards](/blog/how-to-back-up-flashcards/) legt uit hoe je die herstelkopie combineert met tekst in een overdraagbaar formaat en de oorspronkelijke bronbestanden.

## Een test van tien minuten in vliegtuigmodus

Doe deze test op precies de laptop, telefoon of tablet die je meeneemt. Een geslaagde test op desktop zegt niets over de mediamap op je telefoon.

1. Open terwijl je online bent de geïnstalleerde Anki-app en synchroniseer. Laat op een nieuw apparaat eerst de volledige collectie downloaden.
2. Wacht tot de mediasynchronisatie klaar is. Stop niet zodra alleen de namen van de kaartensets verschijnen.
3. Open elke kaartenset die je nodig hebt. Probeer enkele kaarten met afbeeldingen, audio, aangepaste lettertypen en bijzondere sjabloonfuncties die je nodig hebt.
4. Schakel vliegtuigmodus in of verbreek op een andere manier alle netwerkverbindingen.
5. Sluit Anki volledig af, open de app opnieuw en start de kaartenset die je nodig hebt. Zo ontdek je of de werkwijze alleen bleef werken doordat het scherm al openstond.
6. Herhaal een paar kaarten. Voeg één duidelijk als test gemarkeerde notitie toe en breng één onschuldige tekstwijziging aan.
7. Sluit de app af en open hem opnieuw terwijl je nog offline bent. Controleer of de herhalingen, nieuwe notitie, wijziging en lokale media bewaard zijn gebleven.
8. Probeer elk woordenboek, elke tekst-naar-spraakstem en elke add-on die je wilt gebruiken. Noteer welke onderdelen een netwerkverbinding nodig hebben.
9. Maak weer verbinding en synchroniseer dit apparaat. Wacht tot zowel de collectie als de media zijn gesynchroniseerd.
10. Synchroniseer een tweede apparaat. Controleer daar de testnotitie, wijziging, herhalingsstatus en media voordat je de testinhoud verwijdert.

Gebruik deze test niet om op twee apparaten notitietypen opnieuw in te richten. Het doel is te controleren of je werkwijze onderweg werkt: de juiste collectie staat lokaal, belangrijke mediabestanden kunnen worden geopend, offline werk blijft na een herstart bewaard en wordt later naar het andere apparaat gesynchroniseerd.

## Anki werkt onderweg als je het apparaat voorbereidt

De geïnstalleerde Anki-apps zijn een goede keuze voor op reis als je een volledige lokale collectie wilt in plaats van een kleine selectie kaarten in de cache. De beperkingen zijn concreet: de collectie en media moeten vooraf op het apparaat staan, AnkiWeb werkt alleen online en kaartfuncties die het netwerk gebruiken hebben nog steeds een verbinding nodig.

Als je verschillende hulpmiddelen voor op reis vergelijkt, beoordeelt de [vergelijking van offline flashcard-apps](/blog/best-offline-flashcards-app/) vijf producten met dezelfde tests voor kaarten, bewerken, voortgang, media en latere synchronisatie. Overweeg je om andere redenen dan de internetverbinding een ander leersysteem, lees dan [Anki versus Nibomo](/blog/anki-vs-flashcards-open-source-app/).

Het praktische antwoord op ‘Werkt Anki offline?’ is ja op desktop, iPhone, iPad en Android, zodra de collectie en media die je nodig hebt op dat specifieke apparaat staan. Synchroniseer voor vertrek, test in vliegtuigmodus en synchroniseer zodra je weer verbinding hebt eerst het apparaat waarop je offline hebt gewerkt.
