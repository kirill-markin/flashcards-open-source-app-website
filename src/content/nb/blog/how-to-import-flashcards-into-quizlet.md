---
title: "Slik importerer du flashcards til Quizlet fra Excel, Sheets eller tekst"
description: "Importer en ordliste med to kolonner til Quizlet, velg tabulatorer og linjeskift, og rett opp delte definisjoner, ekstra kort og CSV-problemer før publisering."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "importere flashcards til Quizlet"
  - "Quizlet importformat"
  - "Quizlet import fra Excel"
  - "Google Sheets til Quizlet"
  - "Quizlet import med tabulator"
---

«Red, green, blue» ser ut som et helt vanlig svar på et flashcard. Men hvis du bruker komma for å skille et begrep fra definisjonen, gjør de samme kommaene raden tvetydig. Noen få skilletegn kan gjøre en ferdig ordliste til en ryddejobb.

Når du skal importere flashcards til Quizlet fra Excel, Google Sheets eller tekst, starter du med to kolonner: én for begreper og én for definisjoner. Kopier dataene, lim dem inn i importskjemaet på nettstedet, og velg tabulatorer mellom feltene og linjeskift mellom kortene. Prøv med fire rader først, slik at du kan kontrollere hvert par før du overfører hele listen.

![En keramiker setter keramikkopper sammen med tilhørende underskåler i hver sin rad før de flyttes til en hylle](/blog/how-to-import-flashcards-into-quizlet.png)

## Her finner du importskjemaet i Quizlet

Quizlet beskriver import på nettstedet sitt, med komma, tabulator eller bindestrek mellom feltene og semikolon eller linjeskift mellom kortene. De [offisielle importinstruksjonene](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) oppgir denne rekkefølgen:

1. Logg inn og velg **Create → Flashcard set** (opprett → kortsett).
2. Skriv inn en tittel, velg **Import**, og lim inn teksten.
3. Tilpass innstillingene for skilletegn til teksten du limer inn. Bruk **Tab** (tabulator) og **New line** (linjeskift) for eksemplene her.
4. Velg **Import**, og velg deretter språk for begrepene og definisjonene.
5. Se gjennom kortene før du velger **Create** for å lagre og publisere settet.

Instruksjonene ble kontrollert 15. september 2026. Eksemplene nedenfor forklarer hvordan du klargjør og kontrollerer teksten; de beskriver ikke en test med innlogget bruker.

## Start med et lite område i regnearket

I Excel eller Google Sheets legger du ett par med begrep og definisjon på hver rad. Her er et prøveoppsett med fire kort:

| Begrep | Definisjon |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopier bare de fire dataradene i de to kolonnene. Hvis overskriftene står på rad 1, velger du **A2:B5**. Ikke ta med overskriftene i området du kopierer.

Det forventede resultatet er fire kort, med spanske begreper og engelske definisjoner. Det siste kortet skal beholde «colores primarios de la luz» samlet på den ene siden og «red, green, blue» samlet på den andre. Kommaene er en del av svaret.

Når du har forstått eksempelet, kan du klargjøre ditt eget regneark. Arbeid i en kopi, slik at du beholder originalen til sammenligning. Fjern tomme rader, og hold notater og ekstra kolonner utenfor utvalget. Fyll inn eventuelle manglende begreper eller definisjoner før du kopierer.

Hold de to kolonnene sammen når du sorterer. Hvis du bare sorterer begrepene, mister de koblingen til svarene. Da kan importen inneholde feil par selv om antallet kort stemmer.

## Ren tekst må inneholde ekte tabulatorer

De samme fire radene ser slik ut som tabulatorseparert tekst. Mellom hvert begrep og definisjonen står det ett faktisk tabulatortegn:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

En tabulator er et bestemt tegn. Flere mellomrom kan se like ut, men de markerer ikke et tabulatorskille. Å skrive tegnene `\t` setter heller ikke inn en tabulator. Hvis tekstredigeringsprogrammet gjør dette vanskelig, kan du legge parene i to kolonner i et regneark og kopiere cellene.

Hvert kort skal stå på én fysisk linje. En lang definisjon kan brytes over to synlige linjer fordi vinduet er smalt; det legger ikke til et linjeskift i innholdet. Et linjeskift som er satt inn i en regnearkcelle, gjør derimot det. Fjern slike interne linjeskift før du bruker linjeskift som skille mellom kort.

Fjern også eventuelle tabulatorer inne i begreper eller definisjoner. I dette formatet skal tabulatorer bare stå mellom de to feltene.

## Hvis listen din er en CSV-fil

Åpne CSV-filen i et regneark før du klargjør importen. En CSV-post som denne har to felt når den tolkes etter reglene for anførselstegn:

```text
"colores primarios de la luz","red, green, blue"
```

Svaret i anførselstegn inneholder komma. Et tekstfelt som deler inndata ved komma, er ikke nødvendigvis en CSV-leser. Du kan derfor ikke regne med at anførselstegnene beskytter svaret der.

Kontroller i Excel eller Google Sheets at posten fyller nøyaktig to celler. Kopier deretter cellene for å få tabulatorseparert tekst. Hvis svaret er blitt fordelt over flere kolonner, må du først rette innstillingene for CSV-import i regnearket. Hvis du kopierer den ødelagte raden, følger feilen med videre.

Kontroller også verdier som regnearket kan tolke på en annen måte. Hvis `0012` er en kode du skal lære, endres kortet hvis koden blir til `12`. Sammenlign identifikatorer, datoer, anførselstegn og ord med aksenter med originalfilen før du kopierer området.

## Når kortene ikke stemmer med radene

Bruk prøveoppsettet til å finne det første avviket. Endre én ting om gangen, og sammenlign deretter resultatet med de samme fire kilderadene.

| Symptom | Sannsynlig problem med skilletegn | Hva du bør endre |
| --- | --- | --- |
| Et svar deles ved kommaene | Komma er valgt som skille mellom feltene | Klargjør to kolonner og velg Tab |
| «well-being» deles inne i begrepet | Bindestrek er valgt som skille mellom feltene | Behold bindestreken og skill feltene med en tabulator |
| Ett svar blir til flere kort | Interne linjeskift i kilden | Samle svaret på én fysisk linje |
| «Begrep» og «Definisjon» vises som et kort | Overskriftsraden ble kopiert | Velg bare dataradene |
| Begge feltene blir stående på samme side | Mellomrom i stedet for en tabulator | Kopier et regnearkområde med to kolonner |

Et svar med «first stage» og «second stage» på hver sin linje kan for eksempel bli til `first stage; second stage`. Da blir begge delene stående på én linje. Behold **New line** som skille mellom kortene når du bruker semikolon inne i et svar.

Hvis de to trinnene fortjener hvert sitt spørsmål, skriver du heller to fullstendige par. [Veiledningen til bedre flashcards (på engelsk)](/blog/how-to-make-better-flashcards/) kan hjelpe deg med den vurderingen.

## Kontroller resultatet før du publiserer

Se gjennom alle de fire prøvekortene. For hele listen sammenligner du de importerte kortene med den ryddede kilden:

- Stemmer totalen med antallet fullstendige datarader?
- Stemmer det første og siste paret, inkludert hele svarene?
- Er tegnsetting, aksenter og koder bevart uendret?
- Finnes det tomme sider, overskrifter, duplikater eller svar koblet til feil begrep?
- Gir alle svar der du har endret linjeskiftene, fortsatt mening?

Les noen vanlige par i tillegg til dem som ser mistenkelige ut. Riktig antall alene avslører ikke et feil svar som er koblet til et gyldig begrep. Hvis noe ikke stemmer, retter du kilden før du gjentar importen. Behold den ryddede filen til senere rettelser.

## Ferdigskrevne par eller KI-genererte kort?

Quizlet beskriver også hvordan KI kan lage kort fra materiale du legger inn, i sin [oversikt over KI-basert oppretting](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Generert tekst trenger en egen innholdskontroll. Har du en ferdig liste over begreper og definisjoner, kan du bruke den strukturerte importen og kontrollere overføringen mot parene du allerede har skrevet.

Starter du med tekst i avsnitt? [Gjør notatene dine om til flashcards (på engelsk)](/blog/turn-notes-into-flashcards/) før du klargjør importteksten. Skal du flytte et sett i motsatt retning? Bruk [veiledningen til eksport fra Quizlet](/nb/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
