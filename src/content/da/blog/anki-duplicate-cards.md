---
title: "Find dubletter i Anki, og vælg, hvilke kort du vil beholde"
description: "Find årsagen til dubletter i Anki, sammenlign noter med samme feltindhold, og vælg, hvilken kopi du vil beholde. Brug øvelsen til at tjekke repetitionshistorikken."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "dubletter i Anki"
  - "find dubletter i Anki"
  - "slet dubletter i Anki"
  - "dubletnoter i Anki"
  - "repetitionshistorik i Anki"
---

Du genkender et spørgsmål, du allerede har repeteret, men Anki viser det som nyt. Måske fulgte der en ekstra kopi med en import. Måske har Anki lavet to spørgsmål ud fra den samme note. Hvis du sletter en række i kortbrowseren, kan alle kort fra noten forsvinde, også det kort, du gerne ville beholde.

Når du rydder op i **dubletter i Anki**, så find først ud af, hvorfor spørgsmålet dukker op igen. Hvis kortene kommer fra forskellige noter, kan du bruge **Notes → Find Duplicates** til at finde mulige dubletter. Ens indhold i ét felt giver dig noget at gå efter. Sammenlign hele noterne og historikken for hvert kort, og afgør for hver gruppe, hvilken kopi du vil beholde.

Vejledningen gælder Anki til computer. Menunavnene og tagget til dubletter følger den engelske brugerflade. Trinnene blev tjekket den 4. oktober 2026 med Ankis dokumentation og den udgivne kildekode. Øvelsen viser det forventede resultat med opdigtede data.

![Et medlem af en skakklub sammenligner et ekstra lyst tårn med to slidte tårne på et skakbræt af træ](/blog/anki-duplicate-cards.png)

## Find først ud af, hvad der gentager sig

En note indeholder felter som **Front** og **Back**. Kortskabelonerne bestemmer, hvilke kort Anki laver ud fra noten. En note om et ord kan give ét kort, hvor du skal genkende ordet, og ét, hvor du selv skal komme i tanke om det. Hvert kort har sin egen repetitionsplan. Kort fra samme note kaldes søskendekort. Se [Ankis forklaring af noter og felter](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

Åbn **Browse**, vælg visningen **Cards**, og åbn **Cards → Info** for hver række, du vil undersøge. Sammenlign værdierne under **Note ID**. Samme note-id betyder, at kortene hører til samme note. Forskellige id'er betyder, at de kommer fra hver sin note. Erstat `123` i `nid:123` med det faktiske note-id for at finde notens kort i hele samlingen. [Ankis dokumentation om søgning efter id](https://docs.ankiweb.net/searching.html#object-ids)

| Det finder du | Sandsynlig forklaring | Næste skridt |
| --- | --- | --- |
| Samme note, spørgsmål i hver sin retning | Søskendekort, der er oprettet med vilje | Tjek, om du har brug for begge spørgsmål |
| Samme note, ens spørgsmål i forhåndsvisningen | Muligvis identiske kortskabeloner | Sammenlign skabelonerne, og se, hvad de viser på kortene |
| Forskellige noter, tilsyneladende ens spørgsmål | Mulige dubletnoter | Sammenlign hele noterne, før du vælger, hvilken du vil beholde |

Hvis søskendekortene er oprettet med vilje, forklarer [guiden til omvendte kort (på engelsk)](/blog/anki-reverse-cards/), hvad de to retninger bruges til. Vil du sætte ét af dem på pause, kan du [suspendere kortet (guide på engelsk)](/blog/anki-bury-vs-suspend/). Kortet bliver i samlingen, og Anki sætter repetitionerne på pause.

Hvis skabelonerne er ens, så følg [Ankis vejledning om ekstra kopier af et kort](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Fjerner du en skabelon, påvirker det alle noter af den type, også i andre kortsæt. Undersøg derfor konsekvenserne for hele notetypen, før du ændrer en skabelon.

## Afgræns søgningen efter dubletnoter

Åbn **Notes → Find Duplicates**, og vælg det felt, du vil sammenligne, f.eks. **Front**. Som udgangspunkt søger Anki på tværs af de notetyper, der indeholder feltet. Brug **Optional filter** til at afgrænse søgningen, og klik på **Search**. [Ankis vejledning til Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Brug dette filter, hvis kortsættet hedder `Cleanup practice`.

```text
deck:"Cleanup practice"
```

En søgning i et kortsæt omfatter også dets underordnede kortsæt. Fjern filteret, hvis kopierne kan ligge i forskellige kortsæt. Selv om søgningen i ét kortsæt ikke finder dubletter, kan der ligge en kopi et andet sted i samlingen. [Ankis syntaks til søgning i kortsæt](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Klik på en gruppe i resultatet for at se dens noter. **Tag Duplicates** giver samtlige noter i hver gruppe tagget `duplicate`, også den note, du måske vil beholde. **Slet aldrig hele søgeresultatet for `tag:duplicate`.** Brug tagget til at finde de mulige dubletter, og vælg én note ad gangen til sletning. [Kildekoden til tagging i den udgivne version](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

Søgningen sammenligner indholdet af det valgte felt. Du kan få brug for en manuel søgning, hvis to spørgsmål tester det samme med forskellige formuleringer. Omvendt kan to ens spørgsmål høre til forskellige sprog eller forskellige kurser.

## Prøv at vælge i tre eksempler

Forestil dig seks noter i `Cleanup practice`. Der er ingen underordnede kortsæt. A og B bruger standardskabelonerne fra **Basic (and reversed card)** uden ændringer og giver to kort hver. C–F bruger **Basic** og giver ét kort hver. Alle otte kort ligger i samme kortsæt. Bogstaverne bruges kun i eksemplet. Ankis note-id'er og kort-id'er er tal.

| Noter | Front → Back | Repetitioner i eksemplet | Valg |
| --- | --- | --- | --- |
| A og B | `le vélo` → `bicycle` | A har 12 repetitioner af genkendelseskortet og 3 af kortet, hvor du selv skal huske ordet. Begge kort fra B er nye. | Behold A. Overvej at slette B først. |
| C og D | `Chemical symbol for silver?` → `Ag` | C har 20 repetitioner, og D har 6. | Sammenlign historikken for begge kort, og vælg, hvilket du vil fortsætte med. |
| E og F | E: `bank` → `financial institution`. F: `bank` → `side of a river`. | To forskellige betydninger | Behold begge, og giv spørgsmålene kontekst, så betydningen er klar. |

En dubletsøgning på **Front** kan samle noterne i de tre par. Kun det første valg er ligetil. Før du sletter B, så sammenlign **alle felter**, medier, tags, notetype og de spørgsmål, Anki viser i hver retning. Måske har B en lydfil med udtalen eller et spørgsmål, som A mangler.

Hvis noget af indholdet hjælper dig med at lære det samme, så kopiér det til den note, du beholder, og tjek resultatet i forhåndsvisningen. Bevar også relevante tags om kilden. Hvis du vil teste noget andet, så lav et nyt spørgsmål med sin egen historik.

For C og D er antallet af repetitioner kun et fingerpeg. Se for begge kort på datoerne for repetitionerne, hvordan du vurderede dine svar, det aktuelle interval og hvornår kortet skal repeteres igen. Et kort kan have flere repetitioner, fordi du har haft brug for at lære svaret igen. Tjek, at spørgsmålet og svaret er brugbare, og vælg, hvilket kort du vil fortsætte med. Hvis svarene modsiger hinanden, så tjek kilden først. Antallet af repetitioner afgør ikke, hvilket svar der er korrekt.

Hvis du beholder C og sletter D, **bevarer C sin egen historik og repetitionsplan**. Anki viser historikken for hvert kort for sig i [Card Info](https://docs.ankiweb.net/stats.html#card-info). Repetitioner af kort fra slettede noter kan stadig ses i statistikken for hele samlingen, men de forsvinder fra statistikken for det enkelte kortsæt. Historikken fra D bliver ikke overført til C. Se [manualens forklaring af statistik for slettede noter](https://docs.ankiweb.net/stats.html#more).

Vent med at slette, hvis du er i tvivl. Skriv ned, hvad du skal tjekke, og suspendér om nødvendigt de kort, du overvejer at slette, mens du undersøger sagen.

## Slet én bekræftet dublet, og tjek resultatet

Inden du sletter noget i din egen samling, skal du synkronisere ændringer fra dine andre enheder. Synkronisér derefter computeren, så den også har ændringerne. [Ankis vejledning til synkronisering](https://docs.ankiweb.net/syncing.html)

Gå til **File → Export**, og gem en **Anki Collection Package (`.colpkg`)** med **Include Media** slået til. Filen indeholder alle kortsæt og deres repetitionsplaner, inklusive repetitionshistorikken. Gem den et sikkert sted. Hvis du importerer den, erstatter den gemte samling kortene i den åbne profil. De to samlinger flettes ikke. [Ankis vejledning til eksport af samlingen](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Hvis du vil prøve sletningen af først, kan du oprette en separat profil via **File → Switch Profile** og importere sikkerhedskopien i den. Lad testprofilen være frakoblet AnkiWeb. [Profiler har hver sin samling](https://docs.ankiweb.net/profiles.html), og hvis du forbinder begge profiler med samme konto, kan den ene samling overskrive den anden. Se [guiden til APKG og COLPKG (på engelsk)](/blog/anki-apkg-vs-colpkg/) for at se, hvad der følger med ved eksport og import.

I øvelsen kalder vi genkendelseskortet fra A for A1 og kortet i den anden retning for A2. B1 og B2 er de tilsvarende kort fra B. Åbn **Cards → Info** for begge kort fra A. Skriv deres faktiske kort-id'er (**Card ID**) ned sammen med oplysningerne om næste repetition, intervallerne og poster, du kan genkende i historikken. Notér også note-id'et for B. Sammenlign før og efter i samme session uden at repetere kortene fra de to noter eller ændre deres repetitionsplaner undervejs.

Følg trinnene for at slette én dubletnote ad gangen i Anki.

1. Erstat søgningen i **Browse** med en `nid:`-søgning på det faktiske note-id for B. Gennemgå hvert resultat i visningen **Cards**, og se begge retninger i forhåndsvisningen. Søg uden filter for kortsæt, så du også finder søskendekort i andre kortsæt, når du arbejder med din egen samling.
2. Skift til visningen **Notes**. Tjek, at det eneste resultat er note B, som du vil slette. Markér kun den, og vælg **Notes → Delete**. Det sletter den valgte note og alle dens kort, også hvis du bruger kommandoen fra en enkelt række i **Cards**. [Ankis vejledning til Delete](https://docs.ankiweb.net/browsing.html#notes)
3. Søg igen efter note-id'et for B, og tjek, at du ikke får nogen resultater. Søg efter kort-id'erne fra A med `cid:` og komma mellem id'erne. Sammenlign oplysningerne i **Info** for begge kort med det, du skrev ned.
4. Søg på `deck:"Cleanup practice"`, og sammenlign antallet af rækker i visningerne **Notes** og **Cards**. Brug tabellen nedenfor til at tjekke, hvilke noter der er tilbage.

Tabellen viser det forventede resultat, når du kun sletter B.

| Tjek | Før | Forventet bagefter |
| --- | --- | --- |
| Hele kortsættet i eksemplet | 6 noter / 8 kort | 5 noter / 6 kort |
| Cykelkortene | A1, A2, B1, B2 | Kun A1 og A2 |
| Kort-id'er, næste repetition, intervaller og historik for A | De værdier, du skrev ned | Samme kort, repetitionsplan og poster i historikken |
| Søgning efter note-id'et for B | De to kort fra B | Ingen resultater |
| Noterne om sølv og de to betydninger af bank | C, D, E, F | De samme fire noter er der stadig |

Her fjerner du to kort ved at slette én note. Hvis du ved en fejl sletter A, ender du også med fem noter og seks kort, men mister de kort, du allerede har repeteret. Tjek derfor både antallet og id'erne. Lad de kort, du beholder, fortsætte med deres eksisterende repetitionsplan og læringstilstand.

En repetitionsgraf for hele samlingen kan stadig omfatte repetitioner af de fjernede kort. Brug kort-id'et og oplysningerne i **Info** til at tjekke, at det kort, du beholdt, stadig har sin historik.

Når resultatet stemmer med det, du skrev ned, kan du tage næste gruppe og vælge, hvad du vil beholde dér. Hvis du øvede dig på en kopi, så gentag først den oprydning, du har tjekket, i din almindelige profil. Tjek samlingen, synkronisér computeren, og synkronisér derefter de andre enheder, inden du repeterer kort på dem. Hvis dubletterne kom fra en import, kan du bruge [guiden til at opdatere eksisterende noter med CSV (på engelsk)](/blog/anki-csv-update-existing-notes/) inden næste import. Hvis du kopierede en note for at placere den under flere emner, kan du [bruge tags til at gruppere den på tværs af emner (guide på engelsk)](/blog/anki-tags-vs-decks/) og nøjes med én repetitionshistorik.
