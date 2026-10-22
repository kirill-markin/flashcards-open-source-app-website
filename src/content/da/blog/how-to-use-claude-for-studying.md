---
title: "Sådan bruger du Claude til at studere i 2026: en praktisk arbejdsgang"
description: "Studér med Claude ud fra dine egne noter, besvar ét spørgsmål ad gangen, kontrollér rettelser, og lav flashcards af svage punkter inden for fagets AI-regler."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "sådan bruger du Claude til at studere"
  - "Claude til studier"
  - "studiearbejdsgang med Claude"
  - "Claude som tutor"
  - "Claude flashcards"
  - "Claude Learning Mode"
---

Hvis du vil lære, **hvordan du bruger Claude til at studere**, så begynd med en lille portion af dine noter fra faget. Kontrollér, hvad noterne underbygger, og besvar ét spørgsmål ad gangen, før du får hjælp. Kontrollér rettelserne, og gem derefter de svage punkter, du skal øve igen. Jeg anbefaler [Nibomo-pluginet til Claude](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) til den sidste del: Det giver Claude arbejdsgange til at oprette flashcards, repetere kort, når det er tid, og forbedre kort, der forvirrer dig.

En nyttig arbejdsgang er **kontrollér kilden → svar fra hukommelsen → kontrollér svaret → gem → repetér, når det er tid**. Almindelige tutor-prompter fungerer i en normal Claude-chat; pluginet forbinder sessionen med gemte kort og en repetitionsplan.

> **Oplysning om tilknytning:** Jeg hedder Kirill Markin og udvikler [Nibomo](/da/features/). Artiklen er researchet og redigeret med hjælp fra AI.

**Fakta kontrolleret:** 22. oktober 2026.

![Et studiebord, hvor kildenoter er koblet til ét spørgsmål og to kontrollerede kort om svage punkter, mens en tvetydig note er lagt til side](/blog/how-to-use-claude-for-studying-v2.png)

## Den korte arbejdsgang til studier med Claude

Brug denne fremgangsmåde til ét afsnit af en forelæsning, en tekst eller et opgavesæt:

1. Undersøg, hvad dit fag tillader dig at bruge AI til.
2. Giv Claude en lille, tydeligt navngivet samling kildemateriale.
3. Bed det om at markere manglende, modstridende eller ulæselige oplysninger, før undervisningen begynder.
4. Besvar ét spørgsmål ad gangen fra hukommelsen.
5. Notér rettelsen, placeringen i kilden og eventuel usikkerhed.
6. Kontrollér selv vigtige svar.
7. Gem nogle få kontrollerede svage punkter med varig relevans som flashcards i Nibomo.
8. Repetér gemte kort, når det er tid ifølge planen, i Claude eller Nibomo-appen.

Rækkefølgen betyder noget. Spørgsmål baseret på en tvetydig kilde gør blot tvetydigheden sværere at opdage.

## Sæt Nibomo op i Claude

Åbn [Nibomo-pluginet](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory), eller gå til **Customize → Plugins**, find Nibomo, og klik på **Add**. Hvis det allerede er installeret, skal du sikre dig, at det er aktiveret.

Tilslut den Nibomo-connector, der følger med pluginet. Følg loginforløbet, log ind på din Nibomo-konto eller opret en, og giv Claude adgang. Vælg det ønskede arbejdsområde, når du bliver spurgt. Denne fremgangsmåde kræver hverken, at du kopierer et API-token eller indtaster en serveradresse.

Pluginet indeholder arbejdsgangene til at oprette, repetere og forbedre kort. Dets MCP-connector er forbindelsen, der lader Claude læse og opdatere din Nibomo-konto. Du kan også finde [connectoren i Claudes katalog](https://claude.ai/directory/nibomo). Vores [vejledning til at forbinde Claude](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (på engelsk) og [dokumentation til MCP-connectoren](/da/docs/mcp-connector/) forklarer forbindelsen nærmere.

Anthropic tilbyder i øjeblikket [plugins på Pro-, Max-, Team- og Enterprise-abonnementer](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), i Claude på nettet, på fanen Chat i Claude Desktop og i Cowork. Hvis din konto ikke har plugins, kan du stadig bruge tutor-prompterne nedenfor og kopiere udvalgte kort manuelt til din repetitionsapp.

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

[Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) er tilgængeligt for alle brugere. Gratis konti er i øjeblikket begrænset til fem projekter. Tilføj de konkrete filer fra faget og dine studieinstruktioner til projektets vidensgrundlag, så de er tilgængelige på tværs af projektets chats.

Når hukommelse er aktiveret, kan et projekt også huske kontekst på tværs af samtaler. Brug hukommelsen som baggrund for studierne, ikke som en autoritativ gengivelse af samtalerne eller en erstatning for kildefilerne. Gem det kildegrundlag og de rettelser, du skal genbruge, i projektets vidensgrundlag, og bed Claude om at henvise til originalmaterialet.

Claudes [dokumentation om filuploads](https://support.claude.com/en/articles/8241126-upload-files-to-claude) angiver i øjeblikket PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON og XLSX samt billeder i JPEG, PNG, GIF og WebP. Upload af XLSX kræver, at kodekørsel og filoprettelse er aktiveret. Du kan vedhæfte en fil til én chat eller gemme den i projektets Files-sektion til genbrug.

Brug den mindste nyttige portion: én forelæsning, ét afsnit i et kapitel eller de spørgsmål, du lige har svaret forkert på. Angiv afgrænsningen i prompten, for eksempel ”slide 8–17” eller ”afsnittet med titlen Genetisk kobling”. En mindre portion gør det lettere at finde kildegrundlaget og opdage, hvis indhold utilsigtet bliver blandet sammen.

Anthropic introducerede [**Learning mode** i Claude for Education Projects](https://www.anthropic.com/news/introducing-claude-for-education) som en guidet, sokratisk tilgang, der beder studerende om at ræsonnere frem for straks at give dem svarene. Du kan have adgang til den, hvis dit universitet tilbyder Claude for Education, men du bør ikke regne med, at den findes på alle personlige Claude-konti. Prompterne nedenfor skaber en lignende spørgebaseret session i en almindelig chat.

## Få Claude til at afdække tvetydigheder, før det underviser

På et forelæsningsslide står der måske, at ”kromosomerne adskilles”, uden at det fremgår, hvilke kromosomer der er tale om. Hvis Claude stiltiende udfylder hullet med generel viden, kan du ende med at øve et skråsikkert svar, som din kilde aldrig har underbygget.

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
2. giv kort feedback uden at afsløre hele svaret;
3. henvis til filen og siden, slidet eller overskriften, der underbygger det;
4. hvis svaret er delvist korrekt eller forkert, så giv en ledetråd, og lad mig
   prøve igen, før du viser hele svaret;
5. føj kun reelle huller i min forståelse til loggen over svage punkter.

Hvis kilden er uklar, skal du markere spørgsmålet til kontrol i stedet for at
bede mig om at prøve igen.

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

Hvis det udleverede materiale også dækker anafase II, kan Claude sammenligne de to efter dit nye forsøg. Den forklaring hører hjemme i undervisningssamtalen. Det svage punkt, du skal arbejde videre med, er mindre:

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

## Gem kontrollerede svage punkter i Nibomo

Når du har kontrolleret kildegrundlaget, kan du bede Nibomo-pluginet om at lave gemte kort af udvalgte huller. Angiv arbejdsområdet, og få Claude til at se efter eksisterende kort, før det tilføjer flere. Denne prompt beder om en forhåndsvisning før lagring:

```text
Brug Nibomo til at oprette op til 5 flashcards ud fra den kontrollerede log over
svage punkter ovenfor. Brug mit ønskede arbejdsområde: [arbejdsområdets navn].
Hvis navnet er tvetydigt, skal du afklare, hvilket arbejdsområde det er, før du gemmer.

Se efter eksisterende dubletter eller kort, der tester det samme.
Brug kun huller, der er underbygget af det kildegrundlag, jeg har kontrolleret.
Lad hvert kort teste én ting med en konkret forside, en kort bagside og en
placering i kilden.

Vis mig først de foreslåede kort, deres kildegrundlag og eventuelle matchende
dubletter. Vent på min godkendelse, før du gemmer. Bekræft bagefter, hvad der
blev oprettet, og hvor.
```

Forhåndsvisningen er en præference, du angiver i denne prompt. Du kan vælge, hvor meget du vil gennemgå, før du beder Claude om at gemme eller redigere kort; det er ikke et krav ved enhver handling med pluginet.

Bevar skellet fra eksemplet: Forklaringen hjalp dig med at forstå meiosen, mens det gemte kort tester den bestemte forskel, du overså. Et langt tutorsvar behøver sjældent at blive til et langt kort.

## Repetér planlagte flashcards i Claude

En quiz om nyligt uploadede noter er en undervisningssession. En planlagt repetition i Nibomo bruger kort, du allerede har gemt, og registrerer et resultat, der påvirker, hvornår hvert kort kommer igen. Bed udtrykkeligt om det:

```text
Brug Nibomo til at repetere de flashcards, der står til repetition nu, i
10 minutter i [arbejdsområdets navn]. Brug Europe/Paris som min tidszone.

Vis ét spørgsmål ad gangen, og vent på mit forsøg, før du afslører det gemte
svar. Sammenlign derefter mit oprindelige forsøg med svaret, giv kort feedback,
og registrér den passende vurdering af, hvor godt jeg huskede det. Fortæl mig,
hvilken vurdering du registrerede. Bedøm mit oprindelige forsøg, ikke et rettet
svar, jeg giver efter afsløringen. Stop, når tiden er gået, eller der ikke er
flere kort til repetition nu, og opsummér de repetitioner, Nibomo har bekræftet.
```

Erstat arbejdsområdet og tidszonen med dine egne. Claude oplyser normalt sin vurdering og registrerer den automatisk. Hvis du selv vil vælge hver vurdering, så tilføj: ”Brug manuel vurdering: Når du har afsløret svaret, skal du vente på, at jeg vælger Again, Hard, Good eller Easy, før du registrerer det.”

Hvis du svarer ”søsterkromatider” på kortet om anafase I, bliver det oprindelige forsøg ikke korrekt af, at du genkender rettelsen, efter at svaret er afsløret. Et senere spørgsmål om anafase II kan teste, om du nu skelner mellem de to; det bør ikke forbedre den første vurdering med tilbagevirkende kraft.

Du kan også repetere i [Nibomo-appen](https://app.nibomo.com/). Bekræftede repetitioner opdaterer den samme plan, hvad enten de foregår i appen eller i Claude, så du kan skifte mellem dem uden at vedligeholde to repetitionshistorikker. Bed Claude om tydeligt at oplyse, hvis en registrering mislykkes eller ikke er bekræftet, frem for at behandle den som gemt fremgang.

## Forbedr kort, der bliver ved med at forvirre dig

Gentagne fejl kan afsløre et uklart spørgsmål, et overfyldt svar eller en manglende betingelse. Bed Claude om at gennemgå kortet, før du konkluderer, at du bare har brug for flere repetitioner:

```text
Brug Nibomo til at gennemgå de kort, jeg fandt forvirrende i denne session.
Se efter uklare forsider, flere ting at huske på samme kort, manglende
betingelser, svar uden kildebelæg og dubletter. Sammenhold de foreslåede
rettelser med kildegrundlaget fra faget ovenfor.

Vis det nuværende kort og den foreslåede ændring side om side med en kort
begrundelse og en placering i kilden. Markér alt, som kildegrundlaget ikke kan
afgøre. Vent på min godkendelse, før du redigerer; slet ikke kort, og ændr ikke
uafklarede fakta.
```

Lad kortet stå uændret, hvis spørgsmålet er klart, og du blot ikke kunne huske svaret. Vend tilbage til undervisning eller praktisk øvelse ved huller, der kræver et diagram eller endnu en gennemgået opgave.

Hvis du foretrækker manuel kopiering, så bed Claude om de godkendte kort som almindelige tekstblokke med forside og bagside, og føj dem til din sædvanlige flashcard-app. Kontrollen af kilderne og undervisning med spørgsmål først gælder stadig.

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
- kun nogle få kontrollerede svage punkter med varig relevans er blevet til gemte kort;
- kortene blev gemt i det ønskede arbejdsområde uden unødvendige dubletter;
- du har valgt automatiske eller manuelle vurderinger til planlagte repetitioner;
- vurderingerne afspejler dit oprindelige forsøg, og de registrerede repetitioner er bekræftet;
- du ved, hvor du skal vende tilbage til den næste planlagte repetition.

En nyttig **Claude-tutor** gør mere end at forklare. Den viser, hvor kilden stopper, venter, mens du genkalder svaret, og efterlader en kort oversigt over, hvad der faktisk gik galt. Det er den oversigt, og ikke chattens længde, der gør arbejdsgangen med Claude værd at gentage.
