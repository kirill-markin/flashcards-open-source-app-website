---
title: "Sådan bruger du Claude til at studere i 2026: en praktisk arbejdsgang"
description: "Studér med Claude ud fra dine egne noter, besvar ét spørgsmål ad gangen, kontrollér rettelser, og lav flashcards af svage punkter inden for fagets AI-regler."
date: "2026-05-28"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "sådan bruger du Claude til at studere"
  - "Claude til studier"
  - "studiearbejdsgang med Claude"
  - "Claude som tutor"
  - "Claude flashcards"
  - "Claude Learning Mode"
---

På et forelæsningsslide står der, at ”kromosomerne adskilles”, uden at det fremgår, hvilke kromosomer der er tale om. Hvis Claude stiltiende udfylder hullet med generel viden, kan du ende med at øve et skråsikkert svar, som din kilde aldrig har underbygget.

Den første nyttige prompt er ikke ”stil mig spørgsmål”. Bed Claude om at vise, hvilke påstande materialet underbygger, hvad der er tvetydigt, og hvad det ikke kan læse. Så kan det undervise dig inden for en afgrænsning, du selv kan kontrollere.

Den arbejdsgang, der holder sig til kilderne, er det praktiske svar på, **hvordan du bruger Claude til at studere**: gennemgå materialet, besvar ét spørgsmål ad gangen fra hukommelsen, behold kildegrundlaget ved hver rettelse, og gem kun de svage punkter, der er værd at vende tilbage til. Det fungerer i en almindelig Claude-chat og kræver ingen flashcard-app.

> **Oplysning om tilknytning:** Jeg hedder Kirill Markin og udvikler [Nibomo](/da/features/). Ud over denne oplysning optræder produktet kun i det valgfrie afsnit nedenfor om at overføre kort; studiemetoden afhænger ikke af det. Artiklen er researchet og redigeret med hjælp fra AI.

**Fakta kontrolleret:** 14. september 2026.

![Et studiebord, hvor kildenoter er koblet til ét spørgsmål og to kontrollerede kort om svage punkter, mens en tvetydig note er lagt til side](/blog/how-to-use-claude-for-studying-v2.png)

## Den korte arbejdsgang til studier med Claude

Brug denne fremgangsmåde til ét afsnit af en forelæsning, en tekst eller et opgavesæt:

1. Undersøg, hvad dit fag tillader dig at bruge AI til.
2. Giv Claude en lille, tydeligt navngivet samling kildemateriale.
3. Bed det om at markere manglende, modstridende eller ulæselige oplysninger, før undervisningen begynder.
4. Besvar ét spørgsmål ad gangen fra hukommelsen.
5. Notér rettelsen, placeringen i kilden og eventuel usikkerhed.
6. Kontrollér selv vigtige svar.
7. Behold kun svage punkter med varig relevans til senere øvelse eller flashcards.

Rækkefølgen betyder noget. Spørgsmål baseret på en tvetydig kilde gør blot tvetydigheden sværere at opdage.

## Undersøg fagets regler før den første upload

Start med kursusbeskrivelsen, opgavevejledningen og din uddannelsesinstitutions AI-politik. Reglerne kan variere mellem fag og opgaver, så skriv ned, hvad der er tilladt til netop denne opgave: forklaringer, øvelsesspørgsmål, feedback, hjælp til disposition, hjælp med kildehenvisninger eller ingen af delene.

Anthropics [vejledning til studerende om Claude for Education](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) nævner forklaringer, øvelsesspørgsmål, studievejledninger og flashcards som anvendelser til studier. Samme vejledning siger, at du skal følge institutionens regler for akademisk redelighed og ikke bruge Claude til arbejde, du forventes at udføre selvstændigt.

Det giver dig en praktisk afgrænsning:

- Brug Claude til at øve begreber, når vejledning og øvelse er tilladt.
- Bed det ikke om at løse en igangværende prøve eller bedømt opgave, som du skal gennemføre alene.
- Upload ikke fortroligt, personligt, ophavsretligt beskyttet eller adgangsbegrænset undervisningsmateriale, medmindre du har tilladelse til at dele det med tjenesten.
- Hvis reglerne er uklare, så spørg underviseren, før du begynder på det arbejde, der skal bedømmes.

Dit eget arbejde skal forblive dit. Feedback efter dit eget forsøg kan være tilladt studiestøtte; at aflevere Claudes arbejde som dit eget kan bryde de regler, dit fag har fastsat.

## Læg de rigtige filer det rigtige sted

En enkelt chat er nok til en kort studiesession. Til et fag, du følger over længere tid, kan du oprette ét Claude-projekt og kun tilføje det materiale, der hører til faget.

[Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) er tilgængeligt for alle brugere. Gratis konti er i øjeblikket begrænset til fem projekter. Filer og instruktioner, der tilføjes projektets vidensgrundlag, bliver gemt dér og kan genbruges på tværs af chats i projektet. Almindelig chatkontekst deles ikke automatisk med andre chats, medmindre du tilføjer det relevante materiale til projektets vidensgrundlag.

At placere to chats i samme projekt gør altså ikke i sig selv alle detaljer fra den første chat tilgængelige i den anden.

Claudes [dokumentation om filuploads](https://support.claude.com/en/articles/8241126-upload-files-to-claude) angiver i øjeblikket PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON og XLSX samt billeder i JPEG, PNG, GIF og WebP. Upload af XLSX kræver, at kodekørsel og filoprettelse er aktiveret. Du kan vedhæfte en fil til én chat eller gemme den i projektets Files-sektion til genbrug.

Brug den mindste nyttige portion: én forelæsning, ét afsnit i et kapitel eller de spørgsmål, du lige har svaret forkert på. Angiv afgrænsningen i prompten, for eksempel ”slide 8–17” eller ”afsnittet med titlen Genetisk kobling”. En mindre portion gør det lettere at finde kildegrundlaget og opdage, hvis indhold utilsigtet bliver blandet sammen.

Anthropic introducerede [**Learning mode** i Claude for Education Projects](https://www.anthropic.com/news/introducing-claude-for-education) som en guidet, sokratisk tilgang, der beder studerende om at ræsonnere frem for straks at give dem svarene. Du kan have adgang til den, hvis dit universitet tilbyder Claude for Education, men du bør ikke regne med, at den findes på alle personlige Claude-konti. Prompterne nedenfor skaber en lignende spørgebaseret session i en almindelig chat.

## Få Claude til at afdække tvetydigheder, før det underviser

Vedhæft materialet, angiv den præcise afgrænsning, og bed først om en gennemgang af kilderne:

```text
Brug kun de filer og afsnit, jeg navngiver til denne studiesession. Udfyld ikke
huller med generel viden, medmindre jeg udtrykkeligt beder dig om det.

Før du underviser mig, skal du lave en kildeoversigt med:
- de begreber, materialet forklarer tydeligt;
- termer, diagrammer eller passager, der er tvetydige eller ufuldstændige;
- tekst, formler, etiketter eller sider, du ikke kan læse pålideligt;
- modstridende oplysninger i de udleverede kilder;
- forudsætninger, materialet antager, men ikke forklarer.

Angiv filnavn og side, slide eller overskrift for hvert punkt. Markér alt uden
direkte kildebelæg som IKKE UNDERBYGGET. Start ikke spørgsmålene endnu.
```

Sammenhold oversigten med filerne. Hvis Claude hævder, at en definition står på slide 12, så åbn slide 12. Hvis en etiket på en graf er ulæselig, så indsæt den relevante tekst eller upload et tydeligere billede. Hvis to kilder fra faget er uenige, så lad uenigheden stå synligt, og spørg underviseren, eller brug den kilde, faget udpeger som autoritativ.

Du kan bede om en forklaring udefra senere. Hold den adskilt:

```text
Kilden fra faget forklarer ikke denne forudsætning. Forklar den ud fra generel
viden i et afsnit med mærkaten UDEN FOR FAGETS MATERIALE. Præsenter ikke
forklaringen, som om den kommer fra mine filer.
```

Den mærkat hjælper med at forhindre, at baggrundsviden ubemærket bliver til kildebelæg fra faget.

## Stil ét spørgsmål, og vent så

Når kildeoversigten ser fornuftig ud, kan du begynde at øve aktiv genkaldelse: formulér svaret, før du ser det, frem for blot at genkende en velformuleret forklaring, efter at Claude har vist den.

```text
Undervis mig kun i det underbyggede materiale i kildeoversigten.

Stil ét spørgsmål ad gangen, og vent på mit svar. Giv ingen ledetråde i
spørgsmålet. Når jeg har svaret:
1. markér svaret som Korrekt, Delvist korrekt, Forkert eller Uklar kilde;
2. sig præcist, hvad der var rigtigt, og hvad der manglede;
3. henvis til filen og siden, slidet eller overskriften, der underbygger det;
4. bed mig om at prøve én gang til, før du viser hele svaret;
5. føj kun reelle huller i min forståelse til loggen over svage punkter.

Bland direkte genkaldelse, skelnen mellem lignende begreber og korte anvendelsesopgaver.
Lav ikke flashcards endnu. Stop efter 10 spørgsmål, og vis loggen.
```

Ét spørgsmål ad gangen fjerner ledetråde fra senere spørgsmål og gør det lettere at vurdere hvert forsøg. Med en liste på ti er det nemt at springe de ubehagelige spørgsmål over eller kun svare på de dele, du kender.

Bed også Claude om at variere spørgsmålstypen. Definitioner afslører manglende fagudtryk. Sammenligninger afslører begreber, du forveksler. Små anvendelsesopgaver viser, om du kan bruge idéen frem for at gentage formuleringen. Ved en beregning med flere trin skal du regne på papir og vise trinnene; det endelige tal alene giver Claude meget lidt at vurdere ud fra.

## Før en log over kildegrundlag og usikkerhed

Loggen over svage punkter skal gøre det muligt at efterprøve rettelserne, ikke bare tælle point. Brug en lille tabel:

| Spørgsmål | Dit svar | Vurdering | Rettelse | Kildegrundlag | Usikkerhed | Næste skridt |
| --- | --- | --- | --- | --- | --- | --- |
| Hvad adskilles i anafase I? | Søsterkromatider | Forkert | Homologe kromosomer adskilles; søsterkromatider forbliver forbundne | Forelæsning 4, slide 18 | Ingen | Prøv igen, og overvej derefter ét kort |

Bed Claude om at skrive ”Uklar kilde”, når kildegrundlaget ikke kan afgøre svaret. Gør ikke den række til noget, du skal lære udenad. Afklar den først.

Kolonnen med usikkerhed fanger også mindre indlysende problemer: et diagram, Claude ikke kunne læse, et fagudtryk, som forelæseren bruger anderledes end lærebogen, eller en konklusion, der afhænger af en uudtalt antagelse. ”Sandsynligvis korrekt” og ”underbygget af slide 18” er ikke samme status.

## Et eksempel: fra undervisningssamtale til ét kort med varig værdi

Antag, at den udleverede note fra faget siger:

> Under anafase I bevæger homologe kromosomer sig mod modsatte poler. Søsterkromatider forbliver forbundne ved deres centromerer.

Claude spørger: ”Hvad adskilles under anafase I?” Du svarer: ”Søsterkromatider.”

Nyttig feedback er kort og konkret:

```text
Forkert. Søsterkromatider forbliver forbundne under anafase I. Se på de to
sætninger igen: Hvad bevæger sig mod modsatte poler?
```

Efter dit nye forsøg kan Claude forklare, hvordan det adskiller sig fra anafase II. Den forklaring hører hjemme i undervisningssamtalen. Det svage punkt, du skal arbejde videre med, er mindre:

```text
Forside: Hvad adskilles under meiosens anafase I?
Bagside: Homologe kromosomer; søsterkromatider forbliver forbundne.
Kildegrundlag: Forelæsning 4, slide 18
```

Én fejl gav ét fokuseret kort med et svar, der er let at vurdere. Ledetråden, det nye forsøg, forklaringen og opmuntringen gjorde deres arbejde i øjeblikket; det hele behøver ikke at følge med til fremtidige repetitioner.

## Kontrollér rettelsen, før du stoler på den

Claude kan få et svar til at lyde afklaret, selv om det har læst en fil forkert, hentet viden udefra eller accepteret et vagt svar. Kontrollen skal passe til påstanden:

1. **Fakta, der er specifikke for faget:** Åbn den angivne side eller det angivne slide, og sammenlign selv formuleringen, betingelserne og undtagelserne.
2. **Opgaveløsninger:** Gennemgå trinnene selvstændigt, kontrollér enheder og fortegn, og sammenlign derefter med en officiel facitliste eller underviserens vejledning, hvis den findes.
3. **Aktuelle fakta:** Hvis websøgning er tilgængelig for din model og konto, så bed Claude om at søge og henvise til primærkilder. Åbn linkene; kildehenvisninger gør kontrol mulig, ikke automatisk.
4. **Punkter med store konsekvenser eller faglig uenighed:** Brug den anbefalede lærebog, fagets undervisere eller en anden autoritet, som faget anerkender.

Anthropics [vejledning til websøgning](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) siger, at søgeresultater indeholder kildehenvisninger, og anbefaler læserne at kontrollere vigtige oplysninger mod autoritative kilder. Adgangen til søgning kan variere; hvis den ikke er tilgængelig, så brug en pålidelig kilde direkte frem for at lade Claude gætte.

En nyttig kontrolprompt er bevidst streng:

```text
Gennemgå loggen over svage punkter. Angiv for hver rettelse den præcise placering
i kilden og et kort uddrag, der underbygger den. Hvis kilden ikke direkte
underbygger svaret, skal du ændre vurderingen til IKKE UNDERBYGGET. Oplist alle
svar, der afhænger af viden udefra, en slutning eller ulæseligt indhold. Udfyld
ikke disse huller ved at gætte.
```

Se derefter selv på det citerede materiale. Claude hjælper dig med at finde kildegrundlaget, men erstatter det ikke.

## Afgør, hvad der fortjener en repetition mere

Ikke enhver rettelse bør blive til et flashcard. Nogle huller kræver et gennemgået eksempel, et diagram, vejledning hos underviseren eller endnu en øvelsesopgave.

Behold et forslag til et flashcard, når det:

- stammer fra et svar, du gav forkert eller langsomt, eller fra noget, du forvekslede med et lignende begreb;
- har betydning ud over det aktuelle spørgsmål;
- kan testes med ét tydeligt spørgsmål og ét kort svar;
- er underbygget af en kilde, du har kontrolleret;
- stadig giver mening uden Claude-samtalen ved siden af.

Spring det over, når:

- selve kilden stadig er tvetydig;
- du svarede let og konsekvent rigtigt;
- spørgsmålet kræver et helt essay eller en fuld procesbeskrivelse;
- svaret ændrer sig med betingelser, der ikke er angivet;
- det vil hjælpe mere at øve færdigheden end at huske en sætning.

Bed Claude om forslag, ikke et færdigt kortsæt:

```text
Gennemgå den kontrollerede log over svage punkter. Foreslå kun kort til
tilbagevendende eller vigtige huller, der kan testes entydigt.

Lad hvert kort teste én ting, jeg skal huske. Gør hver forside konkret og hver bagside kort.
Medtag placeringen i kilden og eventuel resterende usikkerhed. Sæt huller, der
kræver praktisk øvelse, på en separat liste med en passende øvelse. Gem ikke
noget endnu.
```

Kassér resten. En studiesession med Claude kan være nyttig, selv om den ikke giver nogen kort.

## Valgfrit: Gem og repetér udvalgte kort

Den enkleste overførsel fungerer med enhver flashcard-app. Bed Claude om kun at returnere de godkendte kort som almindelige tekstblokke med forside og bagside, kontrollér dem én gang til, og kopiér dem ind i dit sædvanlige repetitionssystem.

Hvis du bruger Nibomo, kan du forbinde Claude via MCP, som er forbindelsen mellem assistenten og Nibomo. Bed Claude om at vise de foreslåede kort, og gem dem først, når du har godkendt dem. Så bliver de udvalgte svage punkter til kort, du kan vende tilbage til.

Når det er tid til repetition, kan du bruge [webappen](https://app.nibomo.com/) eller en chat med Claude eller Codex, som du har forbundet til Nibomo via MCP. I chatten viser assistenten ét spørgsmål ad gangen og venter på dit forsøg, før den afslører svaret. Du vurderer selv, hvor godt du huskede det, og assistenten registrerer din vurdering i Nibomo. Nibomo holder styr på den samme repetitionsplan, uanset om du øver i appen eller i chatten.

> [Forbind til Claude](https://claude.ai/directory/nibomo) · [Dokumentation](/docs/mcp-connector/)

Se [vejledningen til Claude-connectoren](/blog/how-to-connect-flashcards-to-claude-with-mcp/) og [MCP-connectorens dokumentation](/docs/mcp-connector/) for hjælp til at oprette forbindelsen. Begge er på engelsk. Manuel kopiering er stadig en mulighed, hvis du foretrækker det.

## Hvor Claude stadig har brug for opsyn

Metoden reducerer fejl, der kan undgås; den gør ikke Claude til en autoritet.

- Et svar, der holder sig til kilden, kan stadig være forkert, hvis kilden er forkert.
- Indhold udtrukket fra filer kan miste kontekst, især omkring diagrammer, tabeller og scannede sider.
- Claude kan bedømme et åbent svar for gavmildt eller for bogstaveligt.
- En lang undervisningssamtale kan bevæge sig væk fra den oprindelige afgrænsning.
- Nemme ledetråde kan skabe genkendelse uden varig evne til at genkalde stoffet.

Start forfra med den navngivne kilde, når samtalen glider væk fra den. Bed om en ny kildehenvisning, når en forklaring ændrer sig. Til færdigheder som beviser, essays, udtale, laboratoriearbejde eller programmering skal du bruge praktisk øvelse og menneskelig feedback sammen med spørgsmål til aktiv genkaldelse.

## En sidste tjekliste til studier med Claude

Før du afslutter sessionen, skal du kontrollere, at:

- AI-brugen følger reglerne for faget og opgaven;
- Claude har udpeget alt, der er tvetydigt, ulæseligt eller ikke underbygget;
- du besvarede ét spørgsmål ad gangen, før du fik hjælp;
- hver rettelse peger på kildegrundlag, du selv har åbnet;
- viden udefra er mærket særskilt fra fagets materiale;
- uafklaret usikkerhed ikke er blevet til et flashcard;
- kun nogle få svage punkter med varig relevans er tilbage;
- alle skrivehandlinger via en connector er blevet forhåndsvist og godkendt;
- du har en plan for at vende tilbage til hvert udvalgt svagt punkt.

En nyttig **Claude-tutor** gør mere end at forklare. Den viser, hvor kilden stopper, venter, mens du genkalder svaret, og efterlader en kort oversigt over, hvad der faktisk gik galt. Det er den oversigt, og ikke chattens længde, der gør arbejdsgangen med Claude værd at gentage.
