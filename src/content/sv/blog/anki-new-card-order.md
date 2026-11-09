---
title: "Ordningen på nya kort i Anki – urval, sortering och kontroll av kön"
description: "Se hur Anki väljer ut och sorterar nya kort i ett exempel med sex kort. Kontrollera underlekarnas gränser, kortens köpositioner och vilken lek du har valt att studera."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "ordning på nya kort i Anki"
  - "urvalsordning för nya kort i Anki"
  - "sorteringsordning för nya kort i Anki"
  - "stigande position i Anki"
  - "Anki visar kort i fel ordning"
---

I Anki kan ett nytt kort på position 10 visas efter ett kort på position 60. Om du studerar en överordnad lek med **Lek** (**Deck**) som urvalsordning och **I urvalsordning** (**Order gathered**) som sortering kan Anki välja klart i en underlek innan programmet går vidare till underleken där kortet på position 10 ligger. Att sortera kortbläddraren efter skapandedatum påverkar inte studiekön.

Anki bestämmer ordningen på nya kort i två steg. **Urvalet** avgör vilka kort som ryms inom dagens gränser. **Sorteringen** avgör i vilken ordning de valda korten visas. Börja med att avgöra om Anki väljer fel kort eller om rätt kort visas i en oväntad ordning.

Det här gäller vanliga kortlekar i datorversionen av Anki. Exemplet med sex kort är ett eget räkneexempel på papper, baserat på den aktuella manualen och den släppta versionen [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). Underlaget kontrollerades den 6 oktober 2026. Exemplet kördes inte i programmet.

![En man håller en fjärde vinylskiva ovanför ett tomt fack i ett ställ, bredvid tre skivor. Bakom honom står två backar med album som inte valts ut.](/blog/anki-new-card-order.png)

## Välj den ordning du vill ha

Öppna **Alternativ** (**Options**) för den lek du klickar på när du ska studera. Inställningarna finns under **Visningsordning** (**Display Order**). När du studerar en överordnad lek styr dess inställningar visningsordningen för hela passet, även för kort från underlekarna.

| Önskat resultat | Urvalsordning för nya kort (New Card Gather Order) | Sorteringsordning för nya kort (New Card Sort Order) |
| --- | --- | --- |
| Följ de sparade positionerna i stigande ordning i hela den valda leken och dess underlekar | Stigande position (Ascending position) | I urvalsordning |
| Prioritera underlekarna i alfabetisk ordning och följ positionerna inom varje underlek | Lek | I urvalsordning |
| Behåll samma urval men blanda korten inför visningen | Den urvalsinställning du valt | Slumpmässigt (Random) |

Kombinationerna följer beskrivningarna av [urvalsordning](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) och [sorteringsordning](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) i Ankis engelskspråkiga manual. **Stigande position** utgår från de sparade positionerna för nya kort. Ordningen kan skilja sig från den efter skapandedatum eftersom både ordningen som korten läggs till i och manuella positionsändringar kan påverka positionerna.

Kontrollera vilket förval leken använder och vilka andra lekar som delar det innan du ändrar något. Inställningarna för visningsordning hör till förvalet. Om du bara vill ändra den här leken kan du först ge den ett eget förval. Så här gör du enligt [guiden om förval för en enskild lek (på engelska)](/blog/anki-deck-options-presets/). Dagliga gränser kan åsidosättas med **Den här leken** (**This deck**) eller **Bara i dag** (**Today only**). Inställningarna för visningsordning delas via förvalet.

## Räkna ut vilka fyra kort som kommer med

Tänk dig en vanlig överordnad lek som heter `OrderLab`, med två underlekar och bara de här sex korten. Varje kort kommer från en egen anteckning av typen **Grundläggande** (**Basic**), som ger ett enda kort. Alla sex har därför samma korttypsnummer, och det finns inga syskonkort.

| Kort | Lek | Sparad position för det nya kortet |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Anta att alla sex är nya. Inget kort är tillfälligt dolt eller pausat, och inget ligger i en filtrerad lek. När passet börjar finns det inga andra kort, inga upprepningar under inlärning och inga repetitionskort. Du har ännu inte studerat några kort i dag. `OrderLab` ligger inte under någon annan lek, och de repetitionsgränser som gäller ger utrymme för alla sex nya kort.

Välj **OrderLab** för studier. Den effektiva gränsen för nya kort är **4**. Gränsen för `01 First` är **3** och för `02 Second` **2**, utan tillfälliga undantag. Använd **I urvalsordning** som sortering i båda jämförelserna. Räkna på papper och utgå från samma orörda samling båda gångerna, utan att besvara några kort mellan jämförelserna.

Med **Lek** som urvalsordning går det till så här.

1. Anki går igenom underlekarna i alfabetisk ordning och kommer till `01 First` före `02 Second`.
2. Anki väljer **A, B, C** i positionsordning. `01 First` har bidragit med tre kort, så den överordnade leken har en plats kvar.
3. Anki väljer **D** från `02 Second` och når därmed den överordnade lekens gräns på fyra kort.

De nya korten väntas visas för första gången i ordningen **A → B → C → D**. E och F kommer inte med i urvalet.

Med **Stigande position** går Anki igenom kandidaterna från båda underlekarna i ordningen **D → A → E → B → F → C**. De fyra första ryms inom alla gränser. Det blir två från `02 Second`, två från `01 First` och fyra totalt. Där stannar urvalet.

Den förväntade ordningen är **D → A → E → B**. C och F hamnar utanför urvalet. När Anki tar med ett kort tillämpar programmet gränserna för kortets lek och dess överordnade lekar. Det framgår av den [publicerade urvalskoden](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs).

Gränsen på två för `02 Second` anger hur många kort leken som mest får bidra med. Med **Lek** som urvalsordning bidrar den med ett enda kort eftersom `01 First` redan har fyllt tre av de fyra platserna. Med **Stigande position** blir det två från varje underlek just här på grund av kortens positioner. I en annan samling kan fördelningen se annorlunda ut.

## Låt alla sex komma med så att bara ordningen skiljer sig

Gör en andra jämförelse på papper där alla sex kort får plats. Sätt gränsen för den överordnade leken till **6**, för `01 First` till **3** och för `02 Second` till **3**. Behåll **I urvalsordning**.

| Urvalsinställning | Gränser för överordnad lek / 01 First / 02 Second | Förväntad ordning när korten visas första gången |
| --- | --- | --- |
| Lek | 6 / 3 / 3 | A → B → C → D → E → F |
| Stigande position | 6 / 3 / 3 | D → A → E → B → F → C |

Båda inställningarna väljer alla sex kort. Nu skiljer sig bara ordningen. Om du höjer gränsen för den överordnade leken till sex men låter `02 Second` ligga kvar på två kommer bara fem kort med. F hamnar fortfarande utanför. Höjningen hör till räkneexemplet och är ingen rekommendation om att öka antalet nya kort per dag.

## Sorteringen kan inte lägga till kort som föll bort

Gå tillbaka till de ursprungliga gränserna **4 / 3 / 2** och ändra bara **Sorteringsordning för nya kort** till **Slumpmässigt**.

| Urvalsinställning | Kort som kan blandas | Kort som sorteringen inte kan lägga till |
| --- | --- | --- |
| Lek | A, B, C, D | E, F |
| Stigande position | D, A, E, B | C, F |

Visningsordningen blandas, men samma kort ingår i respektive urval. Tabellen ger ingen bestämd ordning att vänta sig vid slumpmässig sortering. Anki ordnar om de kort som redan valts ut. Det framgår av den [publicerade sorteringskoden](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs).

Även **Efter korttyp, sedan i urvalsordning** (**Card type, then order gathered**) utgår från det befintliga urvalet. Alla sex kort från de grundläggande anteckningarna har samma korttypsnummer, så den inställningen behåller urvalsordningen i det här exemplet.

Ta ett separat exempel som bara gäller sorteringen. Anta att fyra kort från anteckningar med flera kortmallar redan har valts ut i ordningen **W (typ 2), X (typ 1), Y (typ 2), Z (typ 1)**. Sortering efter korttyp ger **X → Z → W → Y**. Typ 1 visas först, och inom varje typ behåller korten sin inbördes ordning från urvalet. Exemplet börjar efter urvalet, så vilka syskonkort som skulle ha kommit med med dina inställningar för att dölja kort ingår inte i beräkningen.

Korttypsnumret anger mallens plats inom anteckningstypen. Vilka mallar som tränar igenkänning respektive aktiv återgivning beror på hur mallarna är gjorda. Titta på frågorna innan du räknar med att sortering efter korttyp lägger alla frågor i framåtriktningen först.

## Kontrollera positionerna i kortbläddraren innan du ändrar dem

Öppna **Bläddra** (**Browse**), välj läget **Kort** (**Cards**) och sök i leken och dess underlekar. I exemplet använder du den här sökningen.

```text
deck:OrderLab is:new
```

Visa **Fråga** (**Question**), **Kort** (**Card**), **Lek** (**Deck**), **Förfallodatum** (**Due**) och **Skapad** (**Created**) via menyn för kolumnrubrikerna. För ett nytt kort visar **Förfallodatum** kortets position i kön, medan **Skapad** visar när anteckningen skapades. **Sorteringsfält** (**Sort Field**) visar innehållet i det anteckningsfält som valts för sortering. När du sorterar efter en kolumn i kortbläddraren ändras bara visningen i tabellen. De sparade positionerna och studiepassets urvalsinställning påverkas inte. Ankis engelskspråkiga manual beskriver [vad kolumnerna visar](https://docs.ankiweb.net/manual/browsing#columns).

Sökningen `is:new` kan också hitta nya kort som är pausade eller tillfälligt dolda. Deras värden i kolumnen **Förfallodatum** visas inom parentes. Med en snävare sökning kan du utesluta både dem och kort som just nu ligger i filtrerade lekar.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Ankis manual på engelska beskriver hur du [söker på kortens status](https://docs.ankiweb.net/manual/searching#card-state) och [söker efter lekar](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Sätt citattecken runt lekens namn om det innehåller mellanslag, som i `deck:"My Deck"`. Sökresultatet visar fortfarande inte vilka kort som kommer med i dagens kö. Gränserna och inställningarna för att automatiskt dölja syskonkort kan minska urvalet. Läs om vilka kort som blir otillgängliga i vår [guide om att dölja och pausa kort (på engelska)](/blog/anki-bury-vs-suspend/).

Låt positionerna vara om de redan motsvarar den ordning du vill ha. Om de behöver ändras, skriv upp de gamla positionerna, markera de få nya kort du vill ändra och använd **Kort → Ändra position** (**Cards → Reposition**). Kontrollera dialogrutan först. **Förskjut befintliga korts positioner** (**Shift position of existing cards**) kan också flytta kort med högre positioner utanför markeringen. Om du låter befintliga kort ligga kvar kan flera kort få samma position. Då räcker positionen inte för att avgöra i vilken ordning de visas. Läs mer i [Ankis instruktioner för att ändra position (på engelska)](https://docs.ankiweb.net/manual/browsing#cards).

Du kan ändra urvals- och sorteringsinställningarna med inlärnings- och repetitionshistoriken kvar. Håll felsökningen till de nya kortens positioner och visningsordning.

## Kontrollera vilken lek du klickar på och hur många kort som ryms i dag

Om du i det ursprungliga exemplet väljer `OrderLab::02 Second` direkt är D, E och F de enda kandidaterna. Med underlekens gräns på två kort, **Stigande position** och **I urvalsordning** väntas **D → E**. Den överordnade leken har alla fyra platser kvar, så de två korten ryms även om gränserna för överordnade lekar gäller. Om du väljer den överordnade leken med **Lek** som urvalsordning och gränserna **4 / 3 / 2** får du i stället **A → B → C → D**.

Visningsordningen för `02 Second` styr inte ett pass som startas från `OrderLab`. Den lek du väljer styr visningsordningen och sätter taket för det totala antalet kort. Samtidigt gäller de gränser som är tillämpliga för underlekarna. **Tillämpa gränser uppifrån** (**Limits start from top**) avgör om gränserna för överordnade lekar också gäller när du väljer en underlek direkt. Ankis engelskspråkiga manual beskriver [reglerna för underlekar](https://docs.ankiweb.net/manual/deck-options#subdecks) och [inställningen för överordnade lekars gränser](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Kontrollera också repetitionsgränserna. Som standard begränsar repetitionsgränsen även antalet nya kort. Det kan du ändra med **Nya kort ignorerar repetitionsgränsen** (**New cards ignore review limit**). Den inställningen och **Tillämpa gränser uppifrån** gäller för hela samlingen. Det framgår av den [publicerade koden för gränssnittet för dagliga gränser](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Anteckna hur båda är inställda innan du bedömer hur många nya kort som faktiskt ryms i dag.

Använd **Förhandsgranska** (**Preview**) i kortbläddraren för att se frågorna utan att besvara dem. Anteckna följande inför och under nästa vanliga studiepass.

| Anteckna | Vad det hjälper dig att avgöra |
| --- | --- |
| Leken du klickade på för att studera, dess förval och inställningarna för urval och sortering | Vilken visningsordning styr passet? |
| Vilka kort du väntar dig och deras sparade positioner | Gäller problemet urvalet eller ordningen? |
| Gränserna för nya kort och repetitioner, undantag för leken eller för i dag och vad du redan har studerat i dag | Hur mycket utrymme finns kvar? |
| Gränserna för överordnade lekar och de två gränsinställningarna för hela samlingen | Vilka ytterligare gränser gäller? |
| Dolda eller pausade kort, kort i filtrerade lekar och syskonkort | Vilka kort som verkar kunna komma med kan vara otillgängliga? |
| Ordningen när nya kort visas första gången, separat från senare visningar under inlärningen | Stämmer ordningen för de nya korten med den du räknade fram? |

När du har besvarat ett nytt kort kan kort som ska visas igen under inlärningen komma emellan. **Ordning för nya kort och repetitioner** (**New/Review Order**) styr om nya kort visas före, efter eller bland repetitionskorten. Inställningarna för urval och sortering gäller fortfarande. Anki kombinerar de här kategorierna efter att de nya korten har sorterats. Det framgår av den [publicerade koden som bygger studiekön](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs).

Du kan avsluta felsökningen när det förväntade urvalet och ordningen för första visningen stämmer med det du ser. Om något fortfarande avviker, spara positionerna, inställningarna, den valda leken, Anki-versionen och den ordning du faktiskt såg. Anteckna också relevanta tillägg för att kunna felsöka mer riktat. Om du vill öva extra på ett ämne finns en separat [guide till övning med filtrerade lekar (på engelska)](/blog/anki-filtered-decks-without-rescheduling/).
