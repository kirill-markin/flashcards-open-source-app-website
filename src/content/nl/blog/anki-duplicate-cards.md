---
title: "Dubbele kaarten in Anki vinden en bepalen welke je bewaart"
description: "Vind dubbele kaarten in Anki en vergelijk de notities voordat je er een verwijdert. Oefen met een voorbeeld en controleer of de herhaalgeschiedenis behouden blijft."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "dubbele kaarten in Anki"
  - "duplicaten zoeken in Anki"
  - "dubbele Anki-notities verwijderen"
  - "dubbele notities in Anki"
  - "herhaalgeschiedenis in Anki"
---

Je herkent de vraag meteen, maar Anki toont de kaart als nieuw. Misschien is er bij een import een kopie bij gekomen. Misschien komt de vraag van een tweede kaart uit dezelfde notitie. Verwijder je één rij in het kaartoverzicht, dan kun je alle kaarten van die notitie kwijtraken, ook de kaart in de richting die je wilde blijven oefenen.

Zoek bij **dubbele kaarten in Anki** eerst uit of de kaarten bij dezelfde notitie horen. Gaat het om aparte notities, gebruik dan **Notes → Find Duplicates**. Hebben notities een veld met dezelfde inhoud, leg dan de volledige notities naast elkaar. Vergelijk ook de herhaalgeschiedenis per kaart en bepaal per geval welke versie je bewaart.

De instructies voor de desktopapp volgen de documentatie en de gepubliceerde broncode van Anki, beide gecontroleerd op 4 oktober 2026. De oefening hieronder laat met fictieve gegevens zien wat je zou verwachten.

![Een lid van een schaakclub vergelijkt een extra lichtgekleurde toren met twee afgesleten torens op een houten schaakbord](/blog/anki-duplicate-cards.png)

## Kijk eerst bij welke notitie de kaarten horen

Een notitie bevat velden zoals **Front** en **Back**. Anki maakt daar kaarten van met sjablonen. Eén woordenschatnotitie kan bijvoorbeeld een kaart opleveren waarop je een woord moet herkennen en een kaart waarop je zelf op het woord moet komen. Deze kaarten uit dezelfde notitie heten *siblings*. Elke kaart heeft een eigen planning. [Anki-handleiding over notities en velden](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Open **Browse** en kies de weergave **Cards**. Bekijk voor elke kaart die dubbel lijkt via **Cards → Info** de waarde bij **Note ID**. Kaarten met hetzelfde ID komen uit dezelfde notitie. Verschillen de ID's, dan gaat het om aparte notities. Vervang `123` in `nid:123` door het werkelijke notitie-ID om alle kaarten van die notitie te vinden, ook als ze in verschillende kaartensets staan. [Anki-handleiding over zoeken op ID](https://docs.ankiweb.net/searching.html#object-ids)

| Wat je aantreft | Waarschijnlijke oorzaak | Volgende stap |
| --- | --- | --- |
| Dezelfde notitie, vragen in twee richtingen | De kaarten zijn bewust zo gemaakt | Kijk of beide vragen nuttig zijn |
| Dezelfde notitie, precies dezelfde vraag op beide kaarten | Mogelijk dubbele kaartsjablonen | Vergelijk de sjablonen en bekijk de kaarten in de voorvertoning |
| Verschillende notities, vragen lijken identiek | Mogelijk dubbele notities | Vergelijk de volledige notities voordat je er één kiest |

De [gids over omgekeerde kaarten (Engelstalig)](/blog/anki-reverse-cards/) legt uit hoe je in twee richtingen oefent. Wil je één kaart tijdelijk uit je herhalingen halen, [schort die kaart dan op met **Suspend** (Engelstalige uitleg)](/blog/anki-bury-vs-suspend/). Zo blijft de kaart in je collectie staan.

Leveren twee sjablonen dezelfde vraag op, volg dan [Anki's uitleg over extra kopieën van een kaart](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Verwijder je een sjabloon, dan heeft dat gevolgen voor alle notities van dat type, ook in andere kaartensets. Controleer die wijziging apart voordat je een sjabloon weghaalt.

## Bepaal waar je naar dubbele notities zoekt

Open **Notes → Find Duplicates** en kies het veld dat je wilt vergelijken, bijvoorbeeld **Front**. Standaard doorzoekt Anki alle notitietypen die dat veld bevatten. Baken de zoekopdracht af met **Optional filter** en klik op **Search**. [Anki-handleiding over Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Voor een kaartenset met de naam `Cleanup practice` vul je dit filter in.

```text
deck:"Cleanup practice"
```

Een zoekopdracht op kaartenset neemt ook onderliggende sets mee. Haal het filter weg om in de hele collectie te zoeken als kopieën in verschillende sets kunnen staan. Ook als je in één set niets vindt, kan er elders nog een kopie staan. [Anki-handleiding over zoeken op kaartenset](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Klik op een groep resultaten om de notities te bekijken. **Tag Duplicates** geeft elke notitie in de groep de tag `duplicate`, dus ook de notitie die je wilt bewaren. Dat zie je in de [broncode van de gepubliceerde versie](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py). **Wis de resultaten van `tag:duplicate` nooit in één keer.** Gebruik de tag om mogelijke duplicaten terug te vinden en bepaal per notitie of die weg kan.

De zoekfunctie vergelijkt de inhoud van één veld. Of twee vragen hetzelfde feit toetsen, bepaal je zelf. Soms moet je handmatig zoeken naar een andere formulering van dezelfde vraag. En als de vraagtekst wel gelijk is, kan die nog steeds bij verschillende talen of cursussen horen.

## Maak op papier drie keuzes

Stel dat `Cleanup practice` zes notities bevat en geen onderliggende kaartensets heeft. A en B gebruiken de ongewijzigde sjablonen van **Basic (and reversed card)** en leveren elk twee kaarten op. C tot en met F gebruiken **Basic** en leveren elk één kaart op. Alle acht kaarten staan in dezelfde set. De letters zijn bedoeld voor deze oefening. In Anki zijn notitie-ID's en kaart-ID's getallen.

| Notities | Front → Back | Fictieve leerstatus | Keuze |
| --- | --- | --- | --- |
| A en B | `le vélo` → `bicycle` | A heeft 12 herhalingen op de herkenningskaart en 3 op de kaart waarop je zelf het woord geeft. Bij B zijn beide kaarten nieuw | Bewaar A. Controleer eerst of je B kunt verwijderen |
| C en D | `Chemical symbol for silver?` → `Ag` | C is 20 keer herhaald en D 6 keer | Vergelijk de herhaalgeschiedenis van beide kaarten en kies met welke je verdergaat |
| E en F | E: `bank` → `financial institution`. F: `bank` → `side of a river` | Twee verschillende betekenissen | Bewaar beide en voeg context toe aan de vragen |

Een zoekopdracht op **Front** kan alle drie de paren vinden. Alleen bij het eerste paar ligt de keuze voor de hand. Vergelijk toch **alle velden**, de media, de tags en het notitietype voordat je B verwijdert. Bekijk in de voorvertoning ook welke vraag de kaarten in elke richting stellen. Misschien heeft B een uitspraakopname of een vraag die bij A ontbreekt.

Heeft de andere notitie nuttige inhoud voor hetzelfde leerdoel, neem die dan bewust over en bekijk het resultaat in de voorvertoning. Neem ook nuttige tags over. Wil je voortaan een ander feit toetsen, maak daar dan een nieuwe vraag voor met een eigen herhaalgeschiedenis.

Bij C en D is het aantal herhalingen maar één aanwijzing. Bekijk voor beide kaarten de datums en beoordelingen van eerdere herhalingen, het huidige interval en wanneer de kaart weer aan de beurt is. Misschien heeft een kaart meer herhalingen omdat je het antwoord vaker vergat en opnieuw moest leren. Kijk of de vraag en het antwoord bruikbaar zijn en kies met welke herhaalgeschiedenis je verdergaat. Spreken de antwoorden elkaar tegen, zoek het dan eerst op in de bron die je gebruikt om te leren. Het aantal herhalingen helpt je niet bepalen welk antwoord klopt.

Bewaar je C en verwijder je D, dan gaat C **verder met zijn eigen herhaalgeschiedenis en leerstatus**. In [Card Info](https://docs.ankiweb.net/stats.html#card-info) zie je de geschiedenis per kaart. De herhalingen van verwijderde notities blijven meetellen in de statistieken van de hele collectie. Ze verdwijnen uit de statistieken per kaartenset en gaan niet over naar de bewaarde kaart. [Anki-handleiding over statistieken voor verwijderde notities](https://docs.ankiweb.net/stats.html#more)

Twijfel je nog, stel het verwijderen dan uit. Noteer wat je wilt uitzoeken en schort de kaarten die je voorlopig niet wilt zien zo nodig op.

## Verwijder één duplicaat en controleer wat er overblijft

Synchroniseer je andere apparaten voordat je kaarten verwijdert. Synchroniseer daarna Anki op je computer om de laatste wijzigingen ook daar op te halen. [Anki-handleiding over synchronisatie](https://docs.ankiweb.net/syncing.html)

Ga naar **File → Export**, kies **Anki Collection Package (`.colpkg`)** en zet **Include Media** aan. Dat pakket bevat alle kaartensets, hun planning en hun herhaalgeschiedenis. Bewaar het bestand op een veilige plek. Als je het importeert, vervangt de opgeslagen collectie de huidige kaarten van het geopende profiel volledig. [Anki-handleiding over het exporteren van een collectie](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Wil je eerst oefenen met verwijderen, maak dan via **File → Switch Profile** een apart profiel aan en importeer daar de back-up. Houd dat oefenprofiel los van AnkiWeb. Elk profiel heeft een eigen collectie. Koppel je beide profielen aan hetzelfde account, dan kan de ene collectie de andere overschrijven. [Anki-handleiding over profielen](https://docs.ankiweb.net/profiles.html) [Gids over APKG en COLPKG (Engelstalig)](/blog/anki-apkg-vs-colpkg/)

Noem in deze oefening de herkenningskaart van A ‘A1’ en de kaart waarop je zelf het woord moet geven ‘A2’. De kaarten van B heten ‘B1’ en ‘B2’. Noteer via **Cards → Info** de werkelijke kaart-ID's van A1 en A2, hun geplande herhaalmomenten, hun intervallen en een paar herkenbare regels uit hun herhaalgeschiedenis. Noteer ook het notitie-ID van B. Vergelijk de gegevens vóór en na het verwijderen in dezelfde sessie. Wacht met kaarten herhalen of opnieuw inplannen tot je klaar bent met de controle.

Verwijder dubbele Anki-notities één voor één.

1. Zoek in **Browse** met `nid:` en het werkelijke notitie-ID van B. Controleer in de weergave **Cards** elk resultaat en bekijk beide vraagrichtingen in de voorvertoning. Laat het filter op kaartenset weg. Zo zie je bij je eigen materiaal ook kaarten van dezelfde notitie die in andere sets staan.
2. Schakel over naar de weergave **Notes**. Controleer of het enige resultaat de ongewenste notitie B is, selecteer alleen die rij en kies **Notes → Delete**. De [opdracht Delete](https://docs.ankiweb.net/browsing.html#notes) verwijdert de geselecteerde notitie en alle bijbehorende kaarten, ook als je de opdracht vanuit één rij in **Cards** uitvoert.
3. Zoek opnieuw op het notitie-ID van B en controleer of je geen resultaten krijgt. Zoek met `cid:` op de genoteerde kaart-ID's van A, gescheiden door een komma. Open voor beide kaarten **Info** en vergelijk de gegevens met wat je had genoteerd.
4. Zoek op `deck:"Cleanup practice"` en vergelijk het aantal rijen in de weergaven **Notes** en **Cards**. Controleer aan de hand van de tabel welke notities over zijn.

Als je alleen B verwijdert, zou je dit moeten zien.

| Controle | Vóór het verwijderen | Verwacht resultaat erna |
| --- | --- | --- |
| Hele voorbeeldset | 6 notities / 8 kaarten | 5 notities / 6 kaarten |
| Kaarten bij ‘le vélo’ | A1, A2, B1, B2 | Alleen A1 en A2 |
| Kaart-ID's, geplande herhalingen, intervallen en herhaalgeschiedenis van A | De gegevens die je hebt genoteerd | Dezelfde kaarten, planning en geregistreerde herhalingen |
| Zoekopdracht op het notitie-ID van B | De twee kaarten van B | Geen resultaten |
| Notities over zilver en de betekenissen van ‘bank’ | C, D, E, F | Dezelfde vier notities blijven staan |

Met één notitie verdwijnen hier twee kaarten. Wis je per ongeluk A, dan kloppen de aantallen nog steeds, terwijl je juist de kaarten kwijtraakt die je al hebt geoefend. Controleer daarom ook de kaart-ID's. Laat de leerstatus en planning van de bewaarde kaarten intact.

In een herhaalgrafiek voor de hele collectie kunnen herhalingen van verwijderde kaarten nog meetellen. Controleer de voortgang aan de hand van het ID en de gegevens onder **Info** van de bewaarde kaart.

Kloppen de gegevens met je aantekeningen, bepaal dan voor de volgende groep opnieuw welke notitie je bewaart. Heb je in een kopie geoefend, voer de gecontroleerde stappen dan eerst in je gewone profiel uit. Controleer die collectie en synchroniseer Anki op je computer. Synchroniseer daarna je andere apparaten voordat je daar weer leert.

Zijn de duplicaten bij een import ontstaan, lees dan vóór de volgende import de [CSV-gids voor het bijwerken van bestaande notities (Engelstalig)](/blog/anki-csv-update-existing-notes/). Had je een notitie gekopieerd om hetzelfde feit bij meerdere onderwerpen onder te brengen, dan kun je [die onderwerpen met tags aangeven (Engelstalig)](/blog/anki-tags-vs-decks/) en met één herhaalgeschiedenis verdergaan.
