---
title: "Sådan importerer du flashcards til Quizlet fra Excel, Sheets eller tekst"
description: "Importér en ordliste med to kolonner til Quizlet, vælg tabulatorer og linjeskift, og ret opdelte svar, ekstra kort og CSV-problemer før udgivelse."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "importere flashcards til Quizlet"
  - "Quizlet importformat"
  - "import til Quizlet fra Excel"
  - "Google Sheets til Quizlet"
  - "tabulatorsepareret import til Quizlet"
---

“Red, green, blue” ligner et helt almindeligt svar på et flashcard. Men hvis du bruger kommaer til at adskille et begreb fra dets definition, gør de samme kommaer rækken tvetydig. Et par tegn kan gøre en færdig ordliste til noget, du først skal rydde op i.

Når du vil importere flashcards til Quizlet fra Excel, Google Sheets eller tekst, skal du begynde med to kolonner: én til begreber og én til definitioner. Kopiér dataene, indsæt dem i importformularen på hjemmesiden, og vælg tabulatorer mellem felterne og linjeskift mellem kortene. Prøv med fire rækker først, så du kan kontrollere hvert par, inden du overfører hele listen.

![En keramiker sætter keramikkopper sammen med de tilhørende underkopper i hver sin række, før de flyttes til en hylde](/blog/how-to-import-flashcards-into-quizlet.png)

## Her finder du Quizlets importformular

Quizlets vejledning beskriver import på hjemmesiden med kommaer, tabulatorer eller bindestreger mellem felterne og semikoloner eller linjeskift mellem kortene. Den [officielle importvejledning](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) angiver denne rækkefølge:

1. Log ind, og vælg **Create → Flashcard set** (Opret → Flashcardsæt).
2. Indtast en titel, vælg **Import** (Importér), og indsæt din tekst.
3. Tilpas indstillingerne for skilletegn til din tekst. Brug **Tab** (Tabulator) og **New line** (Linjeskift) til eksemplerne her.
4. Vælg **Import**, og vælg derefter sprog for begreber og definitioner.
5. Gennemgå kortene, før du vælger **Create** for at gemme og udgive sættet.

Vejledningen blev kontrolleret den 15. september 2026. Eksemplerne nedenfor forklarer, hvordan du klargør og kontrollerer teksten; de beskriver ikke en test med en indlogget konto.

## Begynd med et lille celleområde

I Excel eller Google Sheets skal hvert begreb og dets definition stå på samme række. Her er en prøve med fire kort:

| Begreb | Definition |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopiér kun de fire datarækker i de to kolonner. Hvis overskrifterne står i række 1, skal du markere **A2:B5**. Lad overskrifterne være uden for det kopierede område.

Det forventede resultat er fire kort med spanske begreber og engelske definitioner. Det sidste kort skal have hele “colores primarios de la luz” på den ene side og hele “red, green, blue” på den anden. Kommaerne er en del af svaret.

Når eksemplet giver mening, kan du klargøre dit eget regneark. Arbejd i en kopi, så du beholder originalen til sammenligning. Fjern tomme rækker, og udelad noter og ekstra kolonner fra markeringen. Udfyld manglende begreber eller definitioner, før du kopierer.

Hold de to kolonner samlet, når du sorterer. Hvis du kun sorterer begreberne, bliver de skilt fra deres svar, og en import med det rigtige antal kort kan stadig indeholde forkerte par.

## Ren tekst kræver rigtige tabulatorer

De samme fire rækker ser sådan ud som tabulatorsepareret tekst. Afstanden mellem et begreb og dets definition består af præcis ét tabulatortegn:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

En tabulator er et bestemt tegn. Flere mellemrum kan se ud på samme måde, men de adskiller ikke felterne med en tabulator. Du indsætter heller ikke en tabulator ved at skrive tegnene `\t`. Hvis det er besværligt i din teksteditor, kan du sætte parrene i to regnearkskolonner og kopiere cellerne.

Hvert kort skal stå på én fysisk linje. En lang definition kan blive vist på to linjer, fordi vinduet er smalt; det tilføjer ikke et linjeskift i indholdet. Det gør et linjeskift, som du indsætter inde i en regnearkscelle. Fjern disse interne linjeskift, før du bruger linjeskift til at adskille kortene.

Fjern også tabulatorer inde i et begreb eller en definition. I dette format hører tabulatorer kun hjemme mellem de to felter.

## Hvis din liste er en CSV-fil

Åbn CSV-filen i et regneark, før du klargør importen. En CSV-post som denne har to felter, når den fortolkes efter CSV-formatets regler for anførselstegn:

```text
"colores primarios de la luz","red, green, blue"
```

Svaret i anførselstegn indeholder kommaer. Et tekstfelt, der deler indhold ved kommaer, er ikke nødvendigvis en CSV-læser, så regn ikke med, at anførselstegn beskytter svaret dér.

Kontrollér i Excel eller Google Sheets, at posten fylder præcis to celler. Kopiér derefter cellerne for at få tabulatorsepareret tekst. Hvis svaret er blevet fordelt på flere kolonner, skal du først rette regnearkets indstillinger for CSV-import. Kopierer du den fejlbehæftede række, følger fejlen med.

Kontrollér også værdier, som et regneark kan finde på at ændre automatisk. Hvis `0012` er en kode, du skal lære, ændrer det kortet, hvis den bliver til `12`. Sammenlign identifikatorer, datoer, anførselstegn og ord med accenter med den oprindelige fil, før du kopierer området.

## Når kortene ikke svarer til dine rækker

Brug de fire prøverækker til at finde den første afvigelse. Ret én ting ad gangen, og sammenlign derefter resultatet med de samme fire kilderækker.

| Symptom | Sandsynligt problem med opdelingen | Det skal du ændre |
| --- | --- | --- |
| Et svar bliver delt ved kommaerne | Komma er valgt som skilletegn mellem felter | Klargør to kolonner, og vælg Tab |
| “well-being” bliver delt midt i begrebet | Bindestreg er valgt som skilletegn mellem felter | Bevar bindestregen, og adskil felterne med en tabulator |
| Ét svar bliver til flere kort | Interne linjeskift i kilden | Sæt svaret på én fysisk linje |
| “Term” og “Definition” dukker op som et kort | Overskriftsrækken er blevet kopieret | Markér kun datarækkerne |
| Begge felter bliver på samme side | Mellemrum i stedet for en tabulator | Kopiér et celleområde med to kolonner |

Et svar med “first stage” og “second stage” på hver sin linje kan for eksempel blive til `first stage; second stage`. Så står begge dele på én linje. Behold **New line** som skilletegn mellem kortene, når du bruger et semikolon inde i et svar.

Hvis de to trin fortjener hver sit spørgsmål, skal du i stedet skrive to komplette par. [Guiden til bedre flashcards](/blog/how-to-make-better-flashcards/) (på engelsk) kan hjælpe dig med den beslutning.

## Kontrollér resultatet før udgivelse

Gennemgå alle fire prøvekort. Når du importerer hele listen, skal du sammenligne kortene med den klargjorte kilde:

- Svarer antallet til antallet af komplette datarækker?
- Stemmer det første og sidste par, inklusive de fulde svar?
- Er tegnsætning, accenter og koder bevaret uændret?
- Er der tomme sider, overskrifter, dubletter eller svar, der er parret med forkerte begreber?
- Giver alle svar, hvor du har ændret linjeskift, stadig mening?

Læs flere almindelige par ud over dem, der ser mistænkelige ud. At antallet stemmer, afslører ikke et forkert svar, der er knyttet til et gyldigt begreb. Hvis noget er forkert, skal du rette kilden, før du gentager importen. Gem den klargjorte fil til senere rettelser.

## Færdigskrevne par eller AI-genererede kort?

Quizlet beskriver også AI-assisteret oprettelse af kort ud fra indsendt materiale i sin [oversigt over AI-oprettelse](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Genererede formuleringer kræver en særskilt gennemgang af indholdet. Har du en færdig liste over begreber og definitioner, kan du bruge den strukturerede import og sammenligne de importerede kort med de par, du allerede har skrevet.

Begynder du med sammenhængende tekst? [Lav dine noter om til flashcards](/blog/turn-notes-into-flashcards/) (på engelsk), før du klargør importteksten. Skal et sæt flyttes den modsatte vej? Brug [guiden til eksport fra Quizlet](/da/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
