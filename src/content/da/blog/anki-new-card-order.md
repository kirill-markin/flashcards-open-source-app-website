---
title: "Rækkefølgen for nye kort i Anki – udvælg, sortér og tjek køen"
description: "Se, hvordan Anki udvælger og sorterer nye kort, med et eksempel på seks kort. Tjek understakkenes grænser, kortenes placering i køen og den stak, du har valgt at studere."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "rækkefølge for nye kort i Anki"
  - "udvælgelsesrækkefølge for nye kort i Anki"
  - "sorteringsrækkefølge for nye kort i Anki"
  - "stigende position i Anki"
  - "Anki viser kort i forkert rækkefølge"
---

I Anki kan et nyt kort med position 10 godt dukke op efter et med position 60. Hvis du studerer en overordnet stak og har valgt **Efter stak** (*Deck*) til udvælgelsen og **I den rækkefølge, kortene blev valgt** (*Order gathered*) til sorteringen, kan Anki nå at hente alle de kort, der er plads til fra den første understak, inden programmet går videre til den understak, hvor kortet på position 10 ligger. Studiekøen ændrer sig ikke, hvis du sorterer kortoversigten efter oprettelsesdato.

Anki bestemmer rækkefølgen for nye kort i to trin. Først **udvælger** programmet de kort, der kan komme med inden for dagens grænser. Derefter **sorterer** det de valgte kort. Start med at se, om Anki vælger andre kort end forventet, eller om de rigtige kort dukker op i en uventet rækkefølge.

Vejledningen gælder almindelige stakke i Ankis skrivebordsapp. Eksemplet med seks kort er regnet ud på papir ud fra den gældende manual og den udgivne version af Anki, som begge blev tjekket den 6. oktober 2026. Eksemplet er ikke kørt i programmet. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![En mand holder en fjerde vinylplade over et tomt rum i et stativ ved siden af tre plader. Bag ham står to kasser med plader, han ikke har valgt.](/blog/anki-new-card-order.png)

## Vælg den rækkefølge, du vil have

Åbn **Indstillinger** (*Options*) for den stak, du klikker på for at studere, og find **Visningsrækkefølge** (*Display Order*). Når du studerer en overordnet stak, gælder dens visningsrækkefølge for hele sessionen, også for kort fra understakkene.

| Det vil du opnå | Udvælgelsesrækkefølge for nye kort (*New Card Gather Order*) | Sorteringsrækkefølge for nye kort (*New Card Sort Order*) |
| --- | --- | --- |
| Følg de gemte positioner i stigende rækkefølge på tværs af den valgte stak og dens understakke | Stigende position (*Ascending position*) | I den rækkefølge, kortene blev valgt |
| Gennemgå understakkene alfabetisk og følg positionerne inden for hver understak | Efter stak | I den rækkefølge, kortene blev valgt |
| Behold de valgte kort og bland den rækkefølge, de vises i | Den udvælgelsesrækkefølge, du har valgt | Tilfældig (*Random*) |

Kombinationerne følger Ankis definitioner af udvælgelse og sortering. **Stigende position** følger den gemte position for hvert nyt kort. Den rækkefølge kan afvige fra oprettelsesdatoen, fordi både rækkefølgen, kortene indsættes i, og manuelle ændringer kan påvirke deres positioner. [Udvælgelse i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) · [Sortering i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Tjek først, hvilken indstillingsprofil stakken bruger, og hvilke andre stakke der deler den. Indstillingerne for visningsrækkefølge hører til profilen. Hvis ændringen kun skal gælde denne stak, så giv den sin egen profil, inden du ændrer rækkefølgen. De daglige grænser kan du tilpasse med **Denne stak** (*This deck*) eller **Kun i dag** (*Today only*). Visningsrækkefølgen deles via profilen. [Engelsksproget vejledning til en særskilt profil for én stak](/blog/anki-deck-options-presets/)

## Find ud af, hvilke fire kort der kommer med

Forestil dig en almindelig overordnet stak ved navn `OrderLab` med to understakke og i alt seks kort. Hvert kort kommer fra sin egen note af typen **Grundlæggende** (*Basic*), og hver note har kun ét kort. Alle seks kort har derfor samme korttypenummer, og ingen af dem har søskendekort, altså andre kort fra samme note.

| Kort | Stak | Gemt position som nyt kort |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Antag, at alle seks kort er nye, og at ingen er lagt til side (*buried*), suspenderet eller ligger i en filtreret stak. Ved start er der ingen andre kort, ingen gentagelser af kort under indlæring og ingen repetitionskort. Du har endnu ikke studeret nogen kort i dag. `OrderLab` har ingen stak over sig, og de gældende repetitionsgrænser giver plads til alle seks nye kort.

Vælg **OrderLab** som den stak, du vil studere. Dens gældende grænse for nye kort er **4**. Grænsen i `01 First` er **3**, og grænsen i `02 Second` er **2**, uden midlertidige ændringer. Brug **I den rækkefølge, kortene blev valgt** som sortering i begge sammenligninger. Regn begge igennem på papir med samme urørte samling som udgangspunkt, uden at besvare kort mellem sammenligningerne.

Med **Efter stak** foregår udvælgelsen sådan.

1. Anki gennemgår understakkene alfabetisk og når derfor `01 First` før `02 Second`.
2. Anki vælger **A, B, C** efter position. `01 First` har nu bidraget med tre kort, så der er én plads tilbage i den overordnede stak.
3. Anki vælger **D** fra `02 Second` og når dermed den overordnede staks grænse på fire kort.

Kortene forventes at blive vist første gang i rækkefølgen **A → B → C → D**. E og F kommer ikke med.

Med **Stigende position** kommer kandidaterne fra de to understakke i rækkefølgen **D → A → E → B → F → C**. De første fire holder sig inden for alle grænserne, med to fra `02 Second`, to fra `01 First` og fire i alt. Her stopper udvælgelsen.

Den forventede rækkefølge er **D → A → E → B**. C og F kommer ikke med. I den udgivne version anvender Anki grænserne for kortets egen stak og de overordnede stakke, efterhånden som kortene tages med. [Ankis udvælgelseskode](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Grænsen i `02 Second` giver plads til højst to kort. Med **Efter stak** kommer der kun ét kort med fra `02 Second`, fordi `01 First` allerede har brugt tre af de fire pladser. Med **Stigende position** giver netop disse positioner to kort fra hver understak. I en anden samling kan fordelingen se anderledes ud.

## Giv plads til alle seks, og skil udvælgelse fra rækkefølge

Giv plads til alle seks kort i det næste regneeksempel. Sæt grænsen for den overordnede stak til **6** og grænserne for både `01 First` og `02 Second` til **3**. Behold sorteringen **I den rækkefølge, kortene blev valgt**.

| Udvælgelsesrækkefølge | Grænser for overordnet stak / First / Second | Forventet rækkefølge ved første visning |
| --- | --- | --- |
| Efter stak | 6 / 3 / 3 | A → B → C → D → E → F |
| Stigende position | 6 / 3 / 3 | D → A → E → B → F → C |

Begge indstillinger vælger alle seks kort. Nu er det kun rækkefølgen, der varierer. Hvis du kun hævede grænsen for den overordnede stak til seks og lod `02 Second` stå på to, ville kun fem kort komme med. F ville stadig mangle. De højere grænser bruges kun til regneeksemplet og er ingen anbefaling om at tage flere nye kort om dagen.

## Sorteringen kan kun blande de kort, der kom med

Gå tilbage til de oprindelige grænser på **4 / 3 / 2**, og skift kun **Sorteringsrækkefølge for nye kort** til **Tilfældig**.

| Udvælgelsesrækkefølge | Kort, som den tilfældige sortering kan blande | Kort, som sorteringen ikke kan tilføje |
| --- | --- | --- |
| Efter stak | A, B, C, D | E, F |
| Stigende position | D, A, E, B | C, F |

Anki blander visningsrækkefølgen for de kort, der allerede er valgt. Tabellen viser, hvilke kort der kan blive blandet. Den konkrete rækkefølge kan du ikke udlede af den. [Sorteringskoden i den udgivne version af Anki](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

**Efter korttype, derefter i udvælgelsesrækkefølge** (*Card type, then order gathered*) sorterer også kun de kort, der allerede er valgt. De seks kort fra Basic-noterne har samme korttypenummer, så med den indstilling vises de i den rækkefølge, de blev valgt.

Tag et separat eksempel, hvor udvælgelsen allerede er sket. Fire kort fra noter med flere kortskabeloner er valgt i rækkefølgen **W (type 2), X (type 1), Y (type 2), Z (type 1)**. Sortering efter korttype giver **X → Z → W → Y**. Type 1 kommer først, og inden for hver type ligger kortene stadig i den rækkefølge, de blev valgt. Eksemplet siger derfor ikke, hvilke søskendekort der kommer med under dine indstillinger for at lægge kort til side.

Korttypenummeret angiver kortskabelonens placering inden for notetypen. Om kortet tester genkendelse eller kræver, at du selv formulerer svaret, afhænger af skabelonen. Se på de konkrete spørgsmål, før du regner med, at sortering efter korttype viser alle spørgsmål i den fremadrettede retning først.

## Tjek positionerne i kortoversigten, før du ændrer dem

Åbn **Gennemse** (*Browse*), vælg visningen **Kort** (*Cards*), og søg i stakken og dens understakke. I eksemplet bruger du denne søgning.

```text
deck:OrderLab is:new
```

Brug menuen ved kolonneoverskrifterne til at vise **Spørgsmål** (*Question*), **Kort** (*Card*), **Stak** (*Deck*), **Forfalder** (*Due*) og **Oprettet** (*Created*). For et nyt kort viser **Forfalder** kortets position i køen, mens **Oprettet** viser, hvornår kortets note blev oprettet. **Sorteringsfelt** (*Sort Field*) viser indholdet af det notefelt, der er valgt til sortering. Når du sorterer efter en kolonne, ændrer du kun tabellens visning. Anki beholder de gemte positioner og den udvælgelsesindstilling, der gælder for studiet. [Kolonner i kortoversigten i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/browsing#columns)

Søgningen `is:new` kan også finde nye kort, der er suspenderet eller lagt til side. For de kort vises værdierne under **Forfalder** i parentes. Med en mere præcis søgning kan du udelade dem og de kort, der lige nu ligger i en filtreret stak.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Hvis stakkens navn indeholder mellemrum, så sæt navnet i anførselstegn som i `deck:"My Deck"`. Selv den afgrænsede søgning kan vise flere kort, end der kommer med i dagens kø. Grænserne og den automatiske funktion, der lægger søskendekort til side, kan begrænse udvalget. [Søgning efter kortstatus i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/searching#card-state) · [Søgning efter stakke i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) · [Vores engelsksprogede vejledning om at lægge kort til side eller suspendere dem](/blog/anki-bury-vs-suspend/)

Hvis positionerne allerede afspejler den rækkefølge, du vil have, så lad dem stå. Hvis de skal ændres, så skriv de gamle positioner ned, markér kun de få nye kort, du vil flytte, og vælg **Kort → Skift position** (*Cards → Reposition*). Tjek dialogboksen først. **Forskyd eksisterende korts positioner** (*Shift position of existing cards*) kan også ændre positionen for kort uden for markeringen, hvis de har højere positionsnumre. Uden forskydning kan flere kort ende på samme position, så positionen alene ikke fortæller, hvilket kort der vises først. [Funktionen Reposition i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/browsing#cards)

Du kan ændre udvælgelsen eller sorteringen uden at rydde historikken for indlæring eller repetition. Hold fejlsøgningen til de nye korts positioner og visningsrækkefølgen.

## Tjek, hvilken stak du studerer, og hvor mange kort der er plads til i dag

Hvis du i det oprindelige eksempel vælger `OrderLab::02 Second` direkte, kommer kun D, E og F i betragtning. Med stakkens grænse på to kort, **Stigende position** og **I den rækkefølge, kortene blev valgt** kan du forvente **D → E**. Den overordnede stak har stadig alle fire pladser ledige, så der er plads til begge kort, selv hvis dens grænse gælder. Vælger du i stedet den overordnede stak med **Efter stak** som udvælgelsesrækkefølge og grænserne **4 / 3 / 2**, får du **A → B → C → D**.

Når du starter en session fra `OrderLab`, gælder dens visningsrækkefølge. Visningsrækkefølgen for `02 Second` bruges, når du vælger den stak direkte. Den valgte stak sætter også den samlede grænse, og de relevante grænser for understakkene gælder samtidig. **Anvend grænser fra øverste stak** (*Limits start from top*) afgør, om grænserne for overordnede stakke også gælder, når du studerer en understak direkte. [Regler for understakke i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/deck-options#subdecks) · [Grænser for overordnede stakke i Ankis engelsksprogede manual](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Tjek også repetitionsgrænserne. Som standard begrænser repetitionsgrænsen også antallet af nye kort. Det kan du ændre med **Nye kort ignorerer repetitionsgrænsen** (*New cards ignore review limit*). Både den indstilling og **Anvend grænser fra øverste stak** gælder for hele samlingen, som det fremgår af koden til den udgivne version. Notér, hvordan begge er indstillet, før du regner med, at grænsen for nye kort giver plads til flere kort i dag. [Ankis kode til indstillingerne for daglige grænser](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Brug **Forhåndsvisning** (*Preview*) i kortoversigten til at se spørgsmålene uden at besvare dem. Notér følgende ved din næste almindelige studiesession.

| Notér | Det kan du afklare |
| --- | --- |
| Den stak, du klikker på for at studere, samt dens profil, udvælgelsesrækkefølge og sorteringsrækkefølge | Hvilken visningsrækkefølge gælder for sessionen? |
| De kort, du forventer at se, og deres gemte positioner | Ligger problemet i udvælgelsen eller i rækkefølgen? |
| Grænserne for nye kort og repetition, eventuelle særgrænser for stakken eller for i dag, og hvad du allerede har studeret i dag | Hvor mange kort er der plads til endnu? |
| Grænserne for overordnede stakke og de to grænseindstillinger, der gælder for hele samlingen | Hvilke yderligere grænser gælder? |
| Kort, der er lagt til side, suspenderet eller ligger i en filtreret stak, samt søskendekort | Hvilke af de mulige kort kan være utilgængelige? |
| Rækkefølgen, hvor de nye kort vises første gang, adskilt fra de gange, de dukker op igen under indlæring | Stemmer rækkefølgen for nye kort med det, du forventede? |

Når du har besvaret et nyt kort, kan gentagelser under indlæring dukke op mellem de andre kort i sessionen. **Rækkefølge for nye kort og repetitionskort** (*New/Review Order*) placerer de nye kort før, efter eller mellem repetitionskortene. Indstillingerne for udvælgelse og sortering gælder stadig. I den udgivne version kombinerer Anki først kortkategorierne, efter at de nye kort er sorteret. [Ankis kode til opbygning af køen](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Afslut fejlsøgningen, når både det forventede udvalg og rækkefølgen ved første visning stemmer med det, du ser. Hvis der stadig er en forskel, så gem kortenes positioner, indstillingerne, den valgte stak, Anki-versionen og den rækkefølge, du faktisk så. Notér også relevante tilføjelser, så du kan indsnævre fejlsøgningen. Hvis du vil øve et emne en ekstra gang, kan du bruge en særskilt fremgangsmåde med en filtreret stak. [Engelsksproget vejledning til ekstra øvelse med en filtreret stak](/blog/anki-filtered-decks-without-rescheduling/)
