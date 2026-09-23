---
title: "Sådan eksporterer du Quizlet-sæt i 2026 (og hvorfor Eksportér mangler)"
description: "Eksportér et Quizlet-sæt med de aktuelle trin på hjemmesiden. Mangler Eksportér, så tjek, om du ejer sættet, har lavet en kopi eller bruger mobilappen."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "sådan eksporterer du Quizlet"
  - "sådan eksporterer du Quizlet-flashcards"
  - "Quizlet eksportknap mangler"
  - "download Quizlet-flashcards"
  - "Quizlet til CSV"
  - "Quizlet til Anki"
---

Hvis knappen **Eksportér (Export)** mangler i Quizlet, så tjek først to ting: Har du oprettet det oprindelige sæt, og bruger du Quizlets hjemmeside? Quizlet begrænser eksport til den person, der oprindeligt oprettede sættet, og funktionen virker kun på hjemmesiden. Et kopieret sæt kan ikke eksporteres, selvom kopien nu ligger i dit bibliotek.

Hvis du opfylder kravene, går selve eksporten hurtigt: Åbn sættet på hjemmesiden, vælg **Mere → Eksportér (More → Export)**, vælg, hvordan termer og definitioner skal adskilles, og klik på **Kopiér tekst (Copy text)**. Quizlet downloader ikke en fil med kortsættet. Teksten kopieres til udklipsholderen uden billeder.

**Fakta kontrolleret:** 30. august 2026 ud fra [Quizlets officielle eksportvejledning](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Arkivmedarbejder kontrollerer ejerskabsbrikker, før parrede tekstkort udleveres, med to dokumentmapper klar og fotografier, der bliver bag glasset](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Skal knappen Eksportér overhovedet være der?

Tjek dette, før du forsøger at downloade Quizlet-flashcards på en anden måde:

| Din situation | Bør Eksportér være tilgængelig? | Næste skridt |
| --- | --- | --- |
| Du oprettede det oprindelige sæt og har åbnet det på Quizlets hjemmeside | Ja, ifølge Quizlets hjælpeside | Følg trinene nedenfor |
| Du bruger iOS- eller Android-appen | Nej; eksport findes kun på hjemmesiden | Åbn Quizlet i en browser, og log ind |
| Du har kopieret en anden brugers sæt | Nej; Quizlet oplyser, at kopierede sæt ikke kan eksporteres | Forvent ikke, at kopien giver adgang til Eksportér |
| Du kan se sættet, men har ikke oprettet det | Nej; adgang til at se et sæt gør dig ikke til dets oprindelige ejer | Bed den, der oprettede sættet, om en kildefil, eller genskab det ud fra materiale, du må bruge |

Hvis du oprettede det oprindelige sæt, men eksportknappen i Quizlet stadig mangler, så kontrollér, at du er logget ind på den konto, der ejer sættet, og at du har åbnet originalen og ikke en kopi. Quizlets hjælpeside beskriver ingen anden eksportmetode. Kontakt i så fald Quizlets support frem for at stole på et downloadværktøj, der hævder at kunne omgå begrænsningen.

## Sådan eksporterer du Quizlet-flashcards på hjemmesiden

For et sæt, du selv har oprettet:

1. Log ind på Quizlets hjemmeside.
2. Vælg **Dit bibliotek (Your library)**.
3. Vælg **Flashcard-sæt (Flashcard sets)**.
4. Åbn det sæt, du vil eksportere.
5. Åbn menuen **Mere (More)**.
6. Vælg **Eksportér (Export)**.
7. Vælg, hvordan termer og definitioner skal adskilles.
8. Vælg **Kopiér tekst (Copy text)**.
9. Indsæt resultatet i et program til redigering af ren tekst.

Det er hele den aktuelle fremgangsmåde. Der er ingen afsluttende downloadknap.

Til almindelige kort med en forside og en bagside anbefaler jeg en tabulator mellem termen og definitionen og et linjeskift mellem kortene. Det er et praktisk råd om skilletegn, ikke et krav fra Quizlet. Tabulatorer er som regel lettere at kontrollere end kommaer, fordi kommaer så ofte indgår i almindelige definitioner.

En korrekt formateret fil med to kort ville se sådan ud med én tabulator midt på hver linje:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Hvad Quizlet-eksporten bevarer

Quizlet beskriver funktionen snævert: Den eksporterer **termer og definitioner** fra et sæt, man selv har oprettet. Quizlet oplyser også, at billeder ikke kan eksporteres.

Det indsatte resultat er det sikreste udgangspunkt for, hvad du kan bevare. Hvis teksten, skilletegnet eller linjeskiftet er med dér, kan du gemme det i en fil. Quizlets hjælpeside lover ikke, at mapper, studietilstande, formatering, beherskelsesniveau, repetitionshistorik eller planlagte repetitionstidspunkter følger med.

Det er altså en kopi af kortenes tekst, ikke en Quizlet-sikkerhedskopi, der kan gendannes. Den samme forskel er relevant, hvis du søgte efter »download Quizlet-flashcards«: Quizlet kopierer tekst til udklipsholderen, og du opretter selv filen.

## Gem en uændret UTF-8-kopi, før du rydder op

Sørg for, at du kan gå tilbage til udgangspunktet:

1. Indsæt eksporten i et program til redigering af ren tekst.
2. Gem den som UTF-8, for eksempel `biology-quizlet-raw.txt`.
3. Lav en kopi med navnet `biology-quizlet-working.txt`.
4. Lad den uændrede fil være, og redigér kun arbejdskopien.

Kontrollér arbejdsfilen, før du importerer den, mens Quizlet-sættet stadig er åbent:

- Slå visning af blanktegn til, og kontrollér, hvor tabulatorer og linjeskift står.
- Søg efter det valgte skilletegn inde i termer og definitioner. En ekstra tabulator kan skabe et uventet tredje felt.
- Se efter definitioner med egne linjeskift; de kan blive opfattet som ekstra kort.
- Sammenlign filens begyndelse, midte og slutning med Quizlet, også de længste definitioner.
- Luk filen, og åbn den igen. Kontrollér derefter accenter, ikke-latinske skriftsystemer, symboler og typografiske anførselstegn.
- Markér tomme felter, dubletter og uregelmæssige rækker frem for at gætte dig til rettelser uden at gøre opmærksom på dem.

Sammenlign kun antallet af linjer med antallet af kort, når hvert kort fylder præcis én linje. Definitioner over flere linjer gør den genvej ubrugelig.

Behold den uændrede fil, selv når arbejdskopien ser rigtig ud. Hvis en import forskyder et felt eller udelader indhold, har du stadig en uændret reference.

## Quizlet til CSV: Opret filen med de rette indstillinger

En `.txt`-fil bliver ikke konverteret til CSV, fordi du ændrer filendelsen til `.csv`. CSV kræver ensartede skilletegn og korrekt brug af anførselstegn omkring felter, der indeholder kommaer, anførselstegn eller tekst over flere linjer.

Sådan laver du en CSV-fil fra Quizlet på en sikker måde:

1. Behold sikkerhedskopien med den oprindelige tekst uændret.
2. Åbn arbejdskopien i et regneark, og vælg præcis det skilletegn, du brugte i Quizlet.
3. Kontrollér, at hver forventet post har to kolonner: term og definition.
4. Gennemgå anførselstegn, skilletegn og definitioner over flere linjer.
5. Eksportér som UTF-8 CSV.
6. Åbn CSV-filen i en ny forhåndsvisning, før du bruger den andre steder.

Et regneark kan tilføje de anførselstegn, CSV kræver. Det kan du ikke gøre pålideligt ved blot at erstatte alle tabulatorer med kommaer.

## Brug teksten som udkast i Nibomo, og gennemgå kortene

[Nibomo](/da/features/) har ingen direkte Quizlet-import. I den hostede app kan AI lave udkast ud fra vedhæftede TXT- eller CSV-filer. Det er ikke en overførsel uden tab.

1. Behold den uændrede Quizlet-fil uden for appen.
2. Vedhæft den rensede TXT-fil eller den korrekt forberedte CSV-fil i Nibomos AI-chat.
3. Fortæl assistenten, hvilket skilletegn og hvilke felter filen bruger.
4. Bed om en lille forhåndsvisning, og sig udtrykkeligt, at kortene ikke skal gemmes endnu.
5. Sammenlign det foreslåede antal kort samt deres forsider og bagsider med arbejdsfilen.
6. Gem kun de kort, du har gennemgået.

[Kom godt i gang-vejledningen](/docs/getting-started/) beskriver AI-chat med data fra dit arbejdsområde og vedhæftede filer. En forsigtig prompt kunne være:

> Læs denne fil som par af termer og definitioner adskilt af tabulatorer. Gem ikke kort endnu. Lav et lille udvalg af udkast, bevar kildens ordlyd og ikke-latinske tegn, og angiv fejlformaterede, tomme eller tvetydige rækker separat i stedet for at gætte.

Det kan være nyttigt, når de gamle kort også trænger til oprydning. Det beviser ikke, at hver række blev overført korrekt. Brug tjeklisten i [Sådan retter du AI-flashcards](/blog/how-to-fix-ai-flashcards/), og afprøv derefter et lille kortsæt, før du opretter resten.

Kort, der oprettes i Nibomo, starter med en ny læringshistorik. Quizlet-teksten indeholder ikke de oplysninger om tidligere og planlagte repetitioner, der er nødvendige for at fortsætte den gamle repetitionskø.

> **Til orientering:** Jeg udvikler Nibomo. Denne fremgangsmåde beskriver produktets aktuelle begrænsninger; den er ikke en påstand om fuld kompatibilitet med Quizlet.

## Quizlet til Anki: Brug Ankis tekstimport

Ankis [officielle vejledning til tekstimport](https://docs.ankiweb.net/importing/text-files.html) beskriver understøttelse af UTF-8-filer med ren tekst, hvor felterne er adskilt med kommaer, semikolon eller tabulatorer.

For en arbejdskopi med tabulatorseparerede felter:

1. Åbn Ankis importfunktion, og vælg UTF-8-tekstfilen.
2. Kontrollér i forhåndsvisningen, at Anki har registreret en tabulator; ret indstillingen for skilletegn, hvis det ikke er tilfældet.
3. Vælg notetype og det kortsæt, indholdet skal ind i.
4. Knyt det første felt til forsiden og det andet til bagsiden.
5. Gennemgå forhåndsvisningen for tomme, forskudte eller ekstra felter.
6. Kontrollér indstillingen for dubletter og opdateringer, før du importerer.

Anki fastlægger det forventede antal felter ud fra den første linje, der ikke er en kommentar. I efterfølgende poster bliver manglende felter tomme, og ekstra felter importeres ikke. Derfor er forhåndsvisningen vigtig, især når et enkelt fejlplaceret skilletegn kan ændre en rækkes struktur.

Definitioner over flere linjer kræver også et bevidst valg. Anki understøtter felter i anførselstegn, som strækker sig over flere linjer. Det kan i stedet fortolke `<br>` som et linjeskift, når **Tillad HTML i felter (Allow HTML in fields)** er aktiveret. Brug én metode, og kontrollér et kopieret udsnit, før du importerer hele filen.

Som standard kan Anki genkende en eksisterende note af samme type ud fra dens første felt og opdatere de øvrige felter. Importindstillingerne kan i stedet ignorere dubletter eller tilføje dem som nye noter. Opdatering af en eksisterende Anki-note kan bevare dens repetitionsplan i Anki, men ingen planlægning fra Quizlet følger med tekstfilen.

## Behold originalen, indtil det nye kortsæt virker

Quizlets officielle fremgangsmåde slutter ved **Kopiér tekst (Copy text)** på hjemmesiden for sæt, du selv har oprettet. Scraping-scripts, gættede private endpoints og downloadværktøjer fra tredjeparter er separate fremgangsmåder, som ikke er officielt understøttet. De giver ikke adgang til officiel eksport af et kopieret sæt eller et sæt, du kun har læseadgang til.

Hvis du har brug for løbende automatisering frem for en engangskopi, forklarer [den aktuelle status for Quizlets API](/blog/quizlet-api/), hvad der er understøttet. Hvis sættet ikke er dit, så bed den, der oprettede det, om en kildefil, eller genskab et mindre kortsæt ud fra dine egne noter. [Sådan laver du bedre flashcards](/blog/how-to-make-better-flashcards/) kan hjælpe dig med at forbedre det nye sæt frem for at kopiere alle de gamle rækker.

Slet ikke det oprindelige Quizlet-sæt, før:

- den uændrede UTF-8-fil er gemt et sted med sikkerhedskopiering;
- arbejdsfilen kan åbnes igen med de forventede tegn og skilletegn;
- felter over flere linjer, tomme felter, dubletter og uregelmæssige rækker er kontrolleret;
- vigtig kontekst fra billeder er genskabt ud fra en kilde, du må bruge; og
- en lille test har givet de korrekte forsider og bagsider i den nye app.

Behold den uændrede tekstfil bagefter. Den er den nemmeste uafhængige reference, hvis en senere import ser forkert ud. Hvis du stadig overvejer, hvor kortene skal flyttes hen, gennemgår [sammenligningen af alternativer til Quizlet](/blog/quizlet-alternative/) de bredere fordele og ulemper.
