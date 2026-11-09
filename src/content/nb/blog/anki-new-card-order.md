---
title: "Rekkefølgen på nye kort i Anki – velg, sorter og sjekk køen"
description: "Se hvordan Anki velger og sorterer nye kort i et eksempel med seks kort. Sjekk grensene for understokkene, posisjonene i køen og hvilken kortstokk du starter økten fra."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "rekkefølgen på nye kort i Anki"
  - "utvalgsrekkefølge for nye kort i Anki"
  - "sorteringsrekkefølge for nye kort i Anki"
  - "stigende posisjon i Anki"
  - "Anki-kort i feil rekkefølge"
---

Et nytt kort på plass 10 kan dukke opp etter et kort på plass 60 i Anki. Hvis du øver fra en overordnet kortstokk med **Kortstokk** (*Deck*) som utvalgsrekkefølge og **I utvalgsrekkefølge** (*Order gathered*) som sortering, kan Anki bli ferdig med å velge kort fra en understokk som kommer tidligere i alfabetet, før den når understokken med kortet på plass 10. Å sortere kortoversikten etter opprettelsesdato endrer ikke køen du øver fra.

Anki bestemmer rekkefølgen på nye kort i to trinn. Først **velger** programmet kort innenfor dagens grenser. Så **sorterer** det kortene som kom med. Begynn med å sjekke om Anki velger feil kort, eller om de riktige kortene dukker opp i en uventet rekkefølge.

Dette gjelder vanlige kortstokker i skrivebordsversjonen av Anki. Eksemplet med seks kort er regnet ut på papiret med utgangspunkt i den gjeldende håndboken og den utgitte versjonen av Anki. Grunnlaget ble sjekket 6. oktober 2026. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![En mann holder en fjerde vinylplate over et tomt rom i et stativ ved siden av tre plater. Bak ham står to kasser med album som ikke ble valgt.](/blog/anki-new-card-order.png)

## Velg rekkefølgen du vil ha

Åpne **Innstillinger** (*Options*) for kortstokken du klikker på for å øve, og se under **Visningsrekkefølge** (*Display Order*). Når du starter økten fra en overordnet kortstokk, styrer innstillingene der også rekkefølgen på kort fra understokkene.

| Ønsket resultat | Utvalgsrekkefølge for nye kort (New Card Gather Order) | Sorteringsrekkefølge for nye kort (New Card Sort Order) |
| --- | --- | --- |
| Følg stigende posisjon på tvers av den valgte kortstokken og understokkene | Stigende posisjon (Ascending position) | I utvalgsrekkefølge |
| Prioriter understokkene alfabetisk, og følg posisjonene innenfor hver understokk | Kortstokk | I utvalgsrekkefølge |
| Behold utvalget, men vis kortene i tilfeldig rekkefølge | Utvalgsinnstillingen du har valgt | Tilfeldig (Random) |

Kombinasjonene følger definisjonene i den engelske Anki-håndboken. **Stigende posisjon** følger kortenes lagrede posisjoner. Rekkefølgen kan avvike fra opprettelsesdatoen, blant annet fordi innsettingsrekkefølgen og manuell flytting kan endre posisjonene. [Utvalgsrekkefølge](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) · [Sorteringsrekkefølge](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Sjekk hvilket forhåndsoppsett kortstokken bruker, og hvilke andre kortstokker som deler det, før du endrer noe. Innstillingene for visningsrekkefølge hører til forhåndsoppsettet. Dagsgrensene kan overstyres med **Denne kortstokken** (*This deck*) eller **Bare i dag** (*Today only*). Visningsrekkefølgen deles fortsatt gjennom forhåndsoppsettet. Hvis endringen bare skal gjelde denne kortstokken, kan du først gi den et eget oppsett. [Veiledning for å gi én kortstokk et eget oppsett (på engelsk)](/blog/anki-deck-options-presets/)

## Regn ut hvilke fire kort som kommer med

Se for deg en vanlig overordnet kortstokk som heter `OrderLab`. Den har to understokker og til sammen bare seks kort. Hvert kort kommer fra et eget notat av typen **Grunnleggende** (*Basic*), med ett kort per notat. Alle seks har dermed samme korttypenummer, og ingen har søskenkort.

| Kort | Kortstokk | Lagret posisjon som nytt kort |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Gå ut fra at alle seks er nye, at ingen er skjult eller suspendert, og at ingen ligger i en filtrert kortstokk. Ved start er det ingen andre kort, ingen gjentakelser under innlæring og ingen repetisjoner. Du har ennå ikke øvd på noen kort i dag. `OrderLab` ligger ikke under noen annen kortstokk, og de gjeldende repetisjonsgrensene gir plass til alle seks nye kort.

Velg **OrderLab** for å øve. Den gjeldende grensen for nye kort er **4**. Grensen for `01 First` er **3**, og grensen for `02 Second` er **2**. Ingen av grensene er midlertidig overstyrt. Bruk **I utvalgsrekkefølge** som sortering i begge sammenligningene. Ta utgangspunkt i den samme urørte samlingen begge ganger, og regn ut hva som skjer på papiret uten å svare på kort mellom sammenligningene.

Med **Kortstokk** som utvalgsrekkefølge går Anki fram slik.

1. Anki går gjennom understokkene alfabetisk og kommer derfor til `01 First` før `02 Second`.
2. Anki velger **A, B, C** etter posisjon. `01 First` har brukt tre av plassene, så den overordnede kortstokken har én plass igjen.
3. Anki velger **D** fra `02 Second` og når dermed grensen på fire kort for den overordnede kortstokken.

Kortene vises for første gang i den forventede rekkefølgen **A → B → C → D**. E og F kommer ikke med i utvalget.

Med **Stigende posisjon** vurderer Anki kortene fra begge understokkene i rekkefølgen **D → A → E → B → F → C**. De fire første får plass innenfor alle grensene, med to fra `02 Second`, to fra `01 First` og fire totalt. Der stopper utvalget.

Den forventede rekkefølgen er **D → A → E → B**. C og F blir stående utenfor. I den utgitte versjonen håndhever Anki grensene for kortstokken og den overordnede kortstokken etter hvert som kortene tas inn. [Koden som velger kort](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Grensen på to for `02 Second` angir hvor mange kort understokken kan bidra med på det meste. Med **Kortstokk** som utvalgsrekkefølge får den bare med ett kort fordi `01 First` allerede har brukt tre av de fire plassene. Med **Stigende posisjon** kommer det to fra hver understokk her på grunn av posisjonene i eksemplet. Fordelingen kan bli annerledes i en annen samling.

## La alle seks komme med for å skille utvalg fra rekkefølge

I neste regnestykke setter du grensen for den overordnede kortstokken til **6**, for `01 First` til **3** og for `02 Second` til **3**. Behold **I utvalgsrekkefølge** som sortering.

| Utvalgsinnstilling | Grenser for overordnet kortstokk / 01 First / 02 Second | Forventet rekkefølge ved første visning |
| --- | --- | --- |
| Kortstokk | 6 / 3 / 3 | A → B → C → D → E → F |
| Stigende posisjon | 6 / 3 / 3 | D → A → E → B → F → C |

Begge innstillingene velger alle seks kortene. Nå er det bare rekkefølgen som varierer. Hvis du bare økte grensen for den overordnede kortstokken til seks og beholdt grensen på to for `02 Second`, ville bare fem kort komme med. F ville fortsatt falle utenfor. De høyere grensene gjelder bare regneeksemplet.

## Sortering kan bare flytte på kortene som kom med

Gå tilbake til de opprinnelige grensene på **4 / 3 / 2**, og endre bare **Sorteringsrekkefølge for nye kort** til **Tilfeldig**.

| Utvalgsinnstilling | Kort som kan vises i tilfeldig rekkefølge | Kort som faller utenfor sorteringen |
| --- | --- | --- |
| Kortstokk | A, B, C, D | E, F |
| Stigende posisjon | D, A, E, B | C, F |

Anki stokker om på kortene som allerede er valgt. Utvalget er det samme, og tabellen gir ikke grunnlag for å forutsi en bestemt tilfeldig rekkefølge. [Sorteringskoden i den utgitte versjonen](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

**Korttype, deretter i utvalgsrekkefølge** (*Card type, then order gathered*) sorterer også kortene som allerede er valgt. Alle seks kortene fra notattypen **Grunnleggende** har samme korttypenummer. Dermed bevarer denne sorteringen utvalgsrekkefølgen i eksemplet.

Ta et eget eksempel på sortering. Fire kort fra notater med flere kortmaler er allerede valgt i rekkefølgen **W (type 2), X (type 1), Y (type 2), Z (type 1)**. Sortering etter korttype gir **X → Z → W → Y**. Type 1 kommer først, og kortene beholder utvalgsrekkefølgen innenfor hver type. Eksemplet starter etter at kortene er valgt. Hvilke søskenkort som kan komme med i utvalget, avhenger av innstillingene for skjuling.

Korttypenummeret angir hvor kortmalen ligger i rekken av maler for notattypen. Om et kort øver «gjenkjenning» eller «produksjon», avhenger av malene dine. Se på selve spørsmålene før du regner med at korttypesorteringen viser alle spørsmålene i den vanlige retningen først.

## Sjekk posisjonene i kortoversikten før du endrer dem

Åpne **Kortoversikt** (*Browse*), velg **Kort** (*Cards*) som visningsmodus og søk i kortstokken og understokkene. For `OrderLab` bruker du dette søket.

```text
deck:OrderLab is:new
```

Bruk menyen i kolonneoverskriftene til å vise **Spørsmål** (*Question*), **Kort** (*Card*), **Kortstokk** (*Deck*), **Forfall** (*Due*) og **Opprettet** (*Created*). For et nytt kort viser **Forfall** posisjonen i køen. **Opprettet** viser når notatet ble opprettet. **Sorteringsfelt** (*Sort Field*) viser innholdet i notatfeltet som er valgt for sortering. Sorterer du etter en kolonne i kortoversikten, endrer du bare visningen av tabellen. Posisjonene og øktens utvalgsinnstilling styres separat. [Kolonnene i kortoversikten (Anki-håndboken på engelsk)](https://docs.ankiweb.net/manual/browsing#columns)

Søket `is:new` kan også finne nye kort som er suspendert eller skjult. For disse kortene står verdiene i kolonnen **Forfall** i hakeparenteser. Dette søket utelater dem og kort som for øyeblikket ligger i filtrerte kortstokker.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Hvis navnet på kortstokken inneholder mellomrom, setter du det i anførselstegn, som i `deck:"My Deck"`. Søkereglene er beskrevet i den engelske Anki-håndboken. [Søk etter kortstatus](https://docs.ankiweb.net/manual/searching#card-state) · [Søk etter kortstokk](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes)

Søket viser hvilke kort som kan komme med. Dagens grenser og automatisk skjuling av søskenkort kan fortsatt gjøre køen kortere. [Veiledning om skjulte og suspenderte kort (på engelsk)](/blog/anki-bury-vs-suspend/)

Hvis posisjonene allerede gir rekkefølgen du ønsker, kan du la dem stå. Hvis de må endres, noter de gamle posisjonene, merk noen få bestemte nye kort og bruk **Kort → Endre posisjon** (*Cards → Reposition*). Sjekk dialogboksen først. **Forskyv posisjonen til eksisterende kort** (*Shift position of existing cards*) kan også flytte kort med høyere posisjonsnumre utenfor utvalget. Uten forskyvning kan nye og eksisterende posisjoner overlappe. Når flere kort har samme posisjon, kan du ikke avgjøre visningsrekkefølgen ut fra posisjonen alene. [Endre posisjon (Anki-håndboken på engelsk)](https://docs.ankiweb.net/manual/browsing#cards)

Du kan endre innstillingene for utvalg og sortering uten å slette innlærings- eller repetisjonshistorikken. Hold feilsøkingen til posisjonene for nye kort og visningsrekkefølgen.

## Sjekk hvilken kortstokk du starter fra, og hvor mye plass som er igjen i dag

Hvis du velger `OrderLab::02 Second` direkte i det opprinnelige eksemplet, er D, E og F de eneste kandidatene. Med grensen på to kort, **Stigende posisjon** og **I utvalgsrekkefølge** kan du forvente **D → E**. Den overordnede kortstokken har fortsatt alle fire plassene ledige, så begge kortene får plass selv om grensen ovenfra gjelder. Starter du økten fra den overordnede kortstokken med **Kortstokk** som utvalgsrekkefølge og grensene **4 / 3 / 2**, får du **A → B → C → D**.

Når du starter økten fra `OrderLab`, gjelder visningsrekkefølgen der, uavhengig av visningsrekkefølgen for `02 Second`. Kortstokken du velger, styrer visningsrekkefølgen og setter grensen for hvor mange kort som kan komme med totalt. Gjeldende grenser for understokkene gjelder samtidig. **Bruk grenser fra øverste nivå** (*Limits start from top*) avgjør om grensene for kortstokker høyere opp i hierarkiet også gjelder når du øver direkte fra en understokk. [Regler for understokker](https://docs.ankiweb.net/manual/deck-options#subdecks) · [Grenser fra øverste nivå (Anki-håndboken på engelsk)](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Sjekk også repetisjonsgrensene. Som standard begrenser repetisjonsgrensen også antallet nye kort. Det kan du endre med **Nye kort ignorerer repetisjonsgrensen** (*New cards ignore review limit*). Både denne innstillingen og **Bruk grenser fra øverste nivå** gjelder for hele samlingen. Noter hva de står på før du avgjør om det er plass til flere nye kort i dag. [Grensesnittet for dagsgrenser i den utgitte versjonen](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Bruk **Forhåndsvisning** (*Preview*) i kortoversikten for å se spørsmålene uten å svare på dem. Fyll ut sjekklisten ved neste vanlige økt.

| Noter | Dette avklarer du |
| --- | --- |
| Kortstokken du startet økten fra, forhåndsoppsettet og innstillingene for utvalg og sortering | Hvilken visningsrekkefølge styrer økten? |
| Kortene du forventer å se, og de lagrede posisjonene deres | Gjelder problemet utvalget eller rekkefølgen? |
| Grensene for nye kort og repetisjoner, overstyringer for kortstokken eller dagen og det du allerede har øvd på i dag | Hvor mye plass er igjen innenfor grensene? |
| Grenser for kortstokker høyere opp i hierarkiet og de to grenseinnstillingene som gjelder hele samlingen | Hvilke ekstra grenser gjelder? |
| Skjulte og suspenderte kort, kort i filtrerte kortstokker og søskenkort | Hvilke av kandidatene kan være utilgjengelige? |
| Rekkefølgen kortene vises i første gang, registrert separat fra gjentakelser under innlæring | Kommer de nye kortene i forventet rekkefølge? |

Etter at du har svart på et nytt kort, kan det dukke opp igjen under innlæring og bryte opp rekken av nye kort. **Rekkefølge for nye kort og repetisjoner** (*New/Review Order*) plasserer nye kort før, etter eller innimellom repetisjonene. Innstillingene for utvalg og sortering styrer fortsatt hvilke nye kort som kommer med, og rekkefølgen på dem. I den utgitte versjonen setter Anki sammen køen av disse kategoriene etter at de nye kortene er sortert. [Koden som bygger køen](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Avslutt sjekken når det forventede utvalget og rekkefølgen ved første visning stemmer med det du ser. Hvis det fortsatt er avvik, ta vare på posisjonene, innstillingene, kortstokken du valgte, Anki-versjonen og rekkefølgen du observerte. Noter også relevante tillegg, så blir det lettere å finne årsaken. Hvis du vil øve litt ekstra på et tema, kan du bruke en filtrert kortstokk. [Veiledning for øving med filtrerte kortstokker (på engelsk)](/blog/anki-filtered-decks-without-rescheduling/)
