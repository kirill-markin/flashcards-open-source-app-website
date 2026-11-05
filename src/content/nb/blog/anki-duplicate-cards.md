---
title: "Duplikatkort i Anki – finn kopiene og velg hvilke du vil beholde"
description: "Finn duplikatkort i Anki, sammenlign notatene og velg hvilken kopi du vil beholde. Et øvingseksempel viser hvordan du sjekker repetisjonshistorikken etterpå."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "duplikatkort i Anki"
  - "finne duplikater i Anki"
  - "slette duplikatnotater i Anki"
  - "duplikatnotater i Anki"
  - "repetisjonshistorikk i Anki"
---

Du kjenner igjen et spørsmål du har repetert før, men Anki viser det som nytt. Kanskje fulgte det med en kopi sist du importerte kort. Eller kanskje Anki har laget to kort fra det samme notatet. Sletter du én rad i kortoversikten, kan alle kortene fra notatet forsvinne. Da kan du også miste kortet du ville beholde.

Før du rydder opp i **duplikatkort i Anki**, bør du finne ut hvorfor spørsmålet går igjen. Hvis kortene kommer fra hvert sitt notat, kan du finne mulige duplikater med **Notes → Find Duplicates**. Et felt med samme innhold er et første spor. Sammenlign hele notatene og repetisjonshistorikken til hvert kort før du velger hvilken kopi du vil beholde.

Fremgangsmåten gjelder Anki på datamaskin og bruker navnene fra det engelske grensesnittet. Den bygger på Ankis dokumentasjon og kildekoden til den utgitte versjonen, kontrollert 4. oktober 2026. Øvingseksempelet er oppdiktet og viser det forventede resultatet på papiret.

![Et medlem av en sjakklubb sammenligner et ekstra lyst tårn med to slitte tårn på et sjakkbrett av tre](/blog/anki-duplicate-cards.png)

## Finn først ut hva som gjentar seg

Et notat inneholder felt som **Front** (forside) og **Back** (bakside). Kortmalene bestemmer hvilke kort Anki lager fra notatet. Et ordforrådsnotat kan gi deg ett kort der du skal kjenne igjen ordet og ett der du skal hente det fram selv. Kortene har hver sin repetisjonsplan, og Anki kaller dem søskenkort. Se [Ankis forklaring av notater og felt](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

Åpne **Browse** og velg visningen **Cards**. Åpne **Cards → Info** for hver rad du vil undersøke, og sammenlign verdiene for **Note ID**. Samme ID betyr at kortene kommer fra samme notat. Ulike ID-er betyr at de kommer fra hvert sitt. Bytt ut `123` i `nid:123` med den faktiske ID-en for å se alle kortene fra notatet, uansett hvilken kortstokk de ligger i. Se [Ankis dokumentasjon om ID-er og søk](https://docs.ankiweb.net/searching.html#object-ids).

| Det du finner | Sannsynlig forklaring | Neste steg |
| --- | --- | --- |
| Samme notat, spørsmål i motsatt retning | Søskenkort som er laget med vilje | Sjekk om begge spørsmålene er nyttige |
| Samme notat, identiske spørsmål i forhåndsvisningen | Mulige duplikater blant kortmalene | Sammenlign kortmalene og forhåndsvisningene |
| Ulike notater, spørsmål som ser identiske ut | Mulige duplikatnotater | Sammenlign hele notatene før du velger hvilket du vil beholde |

Vil du se hvordan de to retningene fungerer, kan du lese [veiledningen om omvendte kort](/blog/anki-reverse-cards/) (på engelsk). Hvis du bare vil sette den ene retningen på pause, kan du [suspendere det kortet](/blog/anki-bury-vs-suspend/) (veiledning på engelsk). Da blir kortet liggende i samlingen.

Hvis to maler ser ut til å lage samme kort, kan du følge [Ankis veiledning for å finne årsaken til ekstra kopier](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Å fjerne en mal påvirker alle notater av den typen, også i andre kortstokker. Behandle derfor fjerning av en mal som en egen endring som gjelder hele samlingen.

## Avgrens søket etter duplikatnotater

Åpne **Notes → Find Duplicates** og velg feltet du vil sammenligne, for eksempel **Front**. Som standard søker Anki på tvers av notattyper som har dette feltet. Bruk **Optional filter** til å avgrense søket og klikk deretter på **Search**. Se [Ankis dokumentasjon for Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates).

Bruk dette søket hvis kortstokken heter `Cleanup practice`.

```text
deck:"Cleanup practice"
```

Søk i en kortstokk omfatter også eventuelle understokker. Fjern filteret for å søke i hele samlingen hvis kopiene kan ligge i ulike kortstokker. Selv om søket i én kortstokk er tomt, kan det finnes en kopi et annet sted. Se [Ankis søkesyntaks for kortstokker](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes).

Klikk på en gruppe i søkeresultatet for å se notatene. Med engelsk grensesnitt setter **Tag Duplicates** taggen `duplicate` på alle notatene i hver treffgruppe, også dem du vil beholde. Det fremgår av [kildekoden for tagging i den utgitte versjonen](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py). Bruk `tag:duplicate` til å samle mulige duplikater. **Velg hvert notat du vil slette, for seg.**

Søket sammenligner innholdet i feltet du valgte. Spørsmål som tester det samme, kan ha ulik ordlyd. Da må du kanskje lete etter dem selv. Spørsmål med identisk ordlyd kan likevel høre til ulike språk eller kurs.

## Prøv tre valg på papiret

Se for deg seks notater i `Cleanup practice`, en kortstokk uten understokker. A og B bruker de uendrede malene fra **Basic (and reversed card)** og gir to kort hver. C–F bruker **Basic** og gir ett kort hver. Alle åtte kortene ligger i samme kortstokk. Bokstavene er bare til bruk i eksempelet. Anki bruker tall som notat- og kort-ID-er.

| Notater | Forside → Bakside | Øvingsdata | Hva du gjør |
| --- | --- | --- | --- |
| A og B | `le vélo` → `bicycle` | A: 12 repetisjoner der du skulle kjenne igjen ordet, 3 der du skulle hente det fram selv. Begge kortene fra B er nye. | Behold A. Undersøk B først hvis du skal slette en kopi. |
| C og D | `Chemical symbol for silver?` → `Ag` | C: 20 repetisjoner. D: 6 repetisjoner. | Sammenlign historikken til begge før du velger hvilket kort du vil fortsette å repetere. |
| E og F | E: `bank` → `financial institution`. F: `bank` → `side of a river`. | Kortene gjelder ulike betydninger av ordet. | Behold begge. Legg til kontekst som gjør betydningen tydelig. |

Et duplikatsøk på **Front** kan finne alle tre parene. Valget er enklest for det første paret. Før du bestemmer deg for å slette B, bør du sammenligne **alle feltene**, mediefilene, taggene, notattypen og forhåndsvisningen av kortene i begge retninger. Kanskje B har et lydopptak av uttalen som A mangler, eller gir et spørsmål som A ikke har.

Hvis du finner nyttig innhold som dekker samme læringsmål, kan du kopiere det til notatet du beholder og sjekke forhåndsvisningen. Ta også vare på nyttige tagger som viser hvor stoffet kommer fra. Hvis du endrer hva kortet skal teste, lag et nytt spørsmål med egen historikk.

C har flere repetisjoner enn D, men tallet er bare ett holdepunkt. Se på datoene i repetisjonsloggen, svarvurderingene, gjeldende intervall og når hvert kort skal repeteres neste gang. Et kort kan ha flere repetisjoner fordi du har måttet lære det på nytt. Sjekk at spørsmålet og svaret er nyttige, og velg hvilket kort du vil fortsette å repetere med den historikken det har. Hvis svarene spriker, sjekk kilden til fagstoffet først. Antallet repetisjoner sier ingenting om hvilket svar som stemmer.

Hvis du beholder C og sletter D, **beholder C bare sin egen historikk og repetisjonsplan**. Anki viser historikken for hvert kort i [Card Info](https://docs.ankiweb.net/stats.html#card-info). Loggoppføringene for slettede notater blir værende i statistikken for hele samlingen. De forsvinner fra statistikken for den enkelte kortstokken. Se [Anki-manualens forklaring om statistikk for slettede notater](https://docs.ankiweb.net/stats.html#more).

Er du usikker, vent med å slette. Skriv ned hva du må sjekke, og suspender om nødvendig de uønskede kortene mens du undersøker saken.

## Slett én kopi du har sjekket, og kontroller resultatet

Før du sletter noe i samlingen du bruker til vanlig, bør du synkronisere endringene fra de andre enhetene dine. Synkroniser så Anki på datamaskinen for å få med disse endringene. Se [Ankis veiledning for synkronisering](https://docs.ankiweb.net/syncing.html). Velg **File → Export** og lagre en **Anki Collection Package (`.colpkg`)** med **Include Media** slått på. Pakken inneholder alle kortstokkene med repetisjonsplaner og repetisjonshistorikk. Oppbevar filen et trygt sted. Importerer du den, erstatter den lagrede samlingen alle kortene i profilen som er åpen. Se [Ankis dokumentasjon for eksport av samlinger](https://docs.ankiweb.net/exporting.html#collection-colpkg).

Vil du øve på slettingen først, opprett en egen profil via **File → Switch Profile** og importer sikkerhetskopien der. La øvingsprofilen være frakoblet AnkiWeb. Hver profil har sin egen samling. Hvis du kobler begge profilene til samme konto, kan den ene samlingen overskrive den andre. Se [Ankis veiledning om profiler](https://docs.ankiweb.net/profiles.html) og [veiledningen om forskjellen på APKG og COLPKG](/blog/anki-apkg-vs-colpkg/) (på engelsk).

I eksempelet er A1 kortet fra A der du skal kjenne igjen ordet, og A2 kortet der du skal hente det fram selv. B1 og B2 er de tilsvarende kortene fra B. Åpne **Cards → Info** og skriv ned kort-ID-ene til A1 og A2, når de skal repeteres neste gang, intervallene og noen oppføringer du kan kjenne igjen i repetisjonshistorikken. Skriv også ned notat-ID-en til B. Sammenlign før og etter i samme økt, uten å repetere eller endre repetisjonsplanen for kortene fra A og B.

Med disse stegene kan du slette ett duplikatnotat om gangen og sjekke resultatet.

1. Bytt ut søket i **Browse** med et `nid:`-søk på den faktiske notat-ID-en til B. Sjekk alle treffene i **Cards** og forhåndsvis begge spørsmålsretningene. I din egen samling bør du også se etter søskenkort i andre kortstokker. Søk derfor uten kortstokkfilter.
2. Bytt til **Notes**. Sjekk at det eneste treffet er B, notatet du vil fjerne. Marker bare det, og velg **Notes → Delete**. Handlingen fjerner notatet og alle kortene som hører til, også når den brukes på én rad i **Cards**. Se [Ankis dokumentasjon for Delete](https://docs.ankiweb.net/browsing.html#notes).
3. Søk etter notat-ID-en til B på nytt for å bekrefte at du får null treff. Søk etter kort-ID-ene du noterte for A med `cid:`, med komma mellom ID-ene. Åpne **Info** for begge kortene og sammenlign med det du skrev ned.
4. Søk etter `deck:"Cleanup practice"` og sammenlign antallet rader i **Notes** og **Cards**. Sjekk de gjenværende notatene mot tabellen nedenfor.

Tabellen viser hva som skal være igjen hvis du bare sletter B.

| Hva du sjekker | Før | Forventet etterpå |
| --- | --- | --- |
| Hele kortstokken i eksempelet | 6 notater / 8 kort | 5 notater / 6 kort |
| Kortene om sykkel | A1, A2, B1, B2 | Bare A1 og A2 |
| Kort-ID-er, neste repetisjon, intervaller og historikk for A | Verdiene du skrev ned | De samme kortene, tidspunktene, intervallene og historikkoppføringene |
| Søk etter notat-ID-en til B | Begge kortene fra B | Ingen treff |
| Notatene om sølv og «bank» | C, D, E, F | De samme fire notatene ligger der fortsatt |

Ett slettet notat fjerner to kort i dette eksempelet. Hvis du sletter A ved en feil, ender du med samme antall kort og notater, men mister kortene du allerede har repetert og ville beholde. Kontroller derfor ID-ene i tillegg til antallet. La repetisjonsplanen til kortene du beholder stå som den er, og unngå å nullstille dem mens du rydder.

Repetisjonsgrafen for hele samlingen kan fortsatt telle repetisjoner av slettede kort. Bruk kort-ID-en og **Info** på kortet du beholdt for å sjekke at historikken fortsatt er der.

Når resultatet for den første gruppen stemmer med sjekklisten, kan du gå videre og velge hva du vil beholde i neste gruppe. Hvis du øvde i en kopi, kan du nå gjenta slettingen du sjekket, i profilen du bruker til vanlig. Sjekk samlingen og synkroniser Anki på datamaskinen. Synkroniser deretter de andre enhetene før du repeterer på dem. Hvis kopiene kom fra en import, se [veiledningen om å oppdatere eksisterende notater med CSV](/blog/anki-csv-update-existing-notes/) (på engelsk) før neste import. Hvis du kopierte et notat for å plassere det samme stoffet under flere emner, kan du bruke tagger og beholde én repetisjonshistorikk. Se [veiledningen om tagger og kortstokker](/blog/anki-tags-vs-decks/) (på engelsk).
