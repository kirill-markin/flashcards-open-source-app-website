---
title: "Sådan laver du flashcards med Claude i 2026: Projects, filuploads og repetition med FSRS"
description: "En praktisk metode til flashcards med Claude i 2026: Brug Projects og filuploads til at lave kortere, skarpere kort, og flyt dem, du vil beholde, til Nibomo til rigtig repetition med FSRS."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "sådan laver du flashcards med Claude"
  - "Claude flashcards"
  - "fra Claude til flashcards"
  - "Claude Projects flashcards"
  - "Claude filupload flashcards"
  - "Claude PDF til flashcards"
  - "lav flashcards med Claude"
  - "FSRS flashcards"
---

> [Forbind med Claude](https://claude.ai/directory/nibomo) · [Dokumentation](/da/docs/mcp-connector/)

I går lagde jeg en forelæsningsoversigt og en rodet PDF med pensum ind i Claude og bad om flashcards. Nogle få var gode. Resten havde det velkendte AI-præg: teknisk korrekte, mærkeligt polerede og langt sværere at repetere med, end de så ud ved første gennemlæsning.

Det er det egentlige problem, når man spørger, **hvordan man laver flashcards med Claude**.

Claude er god til at omdanne kildemateriale til kortudkast. Den er ikke automatisk god til at afgøre, hvad der fortjener langsigtet repetition, hvor lille et kort skal være, eller om et velformuleret svar stadig er let at bedømme næste torsdag.

Derfor er den arbejdsgang, jeg faktisk ville stole på i 2026, mere afgrænset, end folk først forestiller sig: Hold ét emne i ét Claude Project, upload kun materialet til den aktuelle portion kort, bed om enkle udkast med forside og bagside, slet med hård hånd, og flyt så de overlevende kort til en rigtig flashcard-arbejdsgang med FSRS.

![Et skrivebord i varmt lys med projektudkast i Claude-stil, kort til filuploads og udvalgte FSRS-flashcards](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude passer endelig til denne arbejdsgang

Spørgsmålet er mere relevant nu, fordi Claude er bedre indrettet til studier end tidligere.

Anthropic lancerede **Claude for Education** den **2. april 2025**, herunder **Learning Mode** i Projects. Den aktuelle hjælpedokumentation er mindst lige så relevant. På Anthropics hjælpeside om Projects, dateret **16. marts 2026**, står der, at Projects er tilgængelige for alle brugere, og at gratis konti kan oprette op til fem. På Anthropics hjælpeside om filuploads, dateret **22. april 2026**, står der, at Claude understøtter filtyper, der egner sig til studier, herunder **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON og XLSX**.

Det giver **flashcards med Claude** et langt bedre udgangspunkt end den gamle metode med at smide alt ind i én chat og håbe på det bedste.

Anthropics uddannelsesrapport viser også, at brugsmønstret allerede er udbredt. Ifølge rapporten brugte studerende primært Claude til at skabe og forbedre undervisningsmateriale i **39,3 %** af de analyserede uddannelsesrelaterede samtaler. Så det interessante spørgsmål er ikke længere, om folk bruger Claude til studiemateriale. Det gør de tydeligvis. Det bedre spørgsmål er, hvordan man laver materialet om til kort, der er værd at repetere med senere.

## Start med ét Claude Project pr. fag, eksamen eller emne

Det er den første vane, jeg ville holde fast i, fordi den forbedrer næsten alt, der følger efter.

Claudes aktuelle dokumentation om Projects beskriver dem som selvstændige arbejdsområder med deres egen chathistorik og vidensbase. Det er præcis, hvad man har brug for, når man laver kortudkast.

Lav ikke ét kæmpe arbejdsområde i Claude med navnet `skole`.

Opret ét Project til:

- ét kursus
- én certificeringseksamen
- ét forløb, du prøver at afslutte denne uge
- én gruppe af emner, der faktisk hører sammen

Det giver skarpere udkast, fordi Claude ikke prøver at blande uvedkommende materiale fra fire fag sammen i ét svar. Det gør også oprydningen mindre irriterende, fordi du ved, hvad hver portion kort skulle dække.

Hvis du bruger Claude mere bredt som underviser og ikke kun til kortudkast, er [Sådan bruger du Claude til studier i 2026](/da/blog/how-to-use-claude-for-studying/) et bedre supplement. Denne artikel har et snævrere fokus. Den handler om at komme fra Claudes svar til kort, du stadig synes er gode, når du repeterer.

## Indstil projektinstruktionerne én gang, så hvert nyt udkast får et bedre udgangspunkt

Det er en af de mest nyttige fordele, der er særlige for Claude.

Ifølge Anthropics aktuelle vejledning til Projects kan du angive **projektinstruktioner**, så Claude følger de samme krav på tværs af chats i det pågældende Project. Til flashcards slipper du dermed for at gentage de samme regler om format og frasortering, hver gang du uploader et nyt afsnit.

Jeg ville holde projektinstruktionen kort og kedelig:

```text
Når jeg beder om flashcards, skal du bruge et enkelt format med forside og bagside. Ét begreb, én oplysning, én forskel eller ét trin i en proces pr. kort. Gør forsiderne konkrete og mulige at besvare. Hold bagsiderne korte. Spring dubletter, vage spørgsmål og alt, der afhænger af manglende kontekst fra den oprindelige kilde, over.
```

Skriv så instruktioner til den konkrete opgave i selve chatten, når du uploader en ny portion materiale.

Den opdeling fungerer godt, fordi projektinstruktionen fastlægger de fælles regler, mens prompten i chatten handler om den aktuelle forelæsning, det aktuelle kapitel eller det aktuelle opgavesæt.

## Upload mindre portioner kildemateriale, end du tror, du behøver

Det er her, de fleste arbejdsgange **fra Claude til flashcards** begynder at halte.

Folk ser muligheden for filuploads som en invitation til at hælde et helt kompendium ind i én forespørgsel. Som regel giver det dårligere kort.

Anthropics egen dokumentation om uploads anbefaler den kedelige løsning til store dokumenter: Del dem op i mindre afsnit. Det er præcis, hvad jeg ville gøre.

Gode input kunne være:

- noter fra én forelæsning
- ét afsnit af pensum
- ét rettet sæt øvelsesopgaver
- ét underafsnit i et kapitel
- ét overskueligt uddrag af en læsevejledning

Dårlige input kunne være:

- hele lærebogen
- tolv forelæsninger på én gang
- en semestermappe, du ikke har ryddet op i
- en kæmpe bunke transskriptioner, som du faktisk ikke har lyst til at gennemgå kort for kort

Små portioner tvinger dig til at stille et mere ærligt spørgsmål: Hvad fra dette afsnit er værd at kunne genkalde senere uden at åbne kilden igen?

Det spørgsmål giver et mindre og bedre kortsæt.

## Claude er god til udkast ud fra kildemateriale, men ikke automatisk til at vælge det væsentlige

For mig er det den mest nyttige måde at forstå Claudes rolle på.

Claude kan:

- forkorte et pensumafsnit
- forklare et begreb mere tydeligt
- adskille oplagte underemner
- omdanne noter til udkast til kort med spørgsmål og svar
- finde tilbagevendende fagudtryk og definitioner

Claude ved ikke automatisk:

- hvilke oplysninger der allerede er så indlysende for dig, at du kan springe dem over
- hvilke forskelle du bliver ved med at blande sammen
- hvilket svar der er for langt til hurtigt at kunne bedømmes
- hvilket kort der kun giver mening, fordi du stadig husker det afsnit, det kom fra

Derfor fungerer det bedst at **lave flashcards med Claude**, når Claude laver udkastene, og du redigerer dem.

Hvis du beder Claude om at beslutte alt, får du som regel et kortsæt, der er for høfligt. Det gemmer for meget, forklarer for meget og beholder materiale, som virkede nyttigt i øjeblikket, men ikke fortjener fremtidige repetitioner.

## Brug en enkel prompt, og lad begrænsningerne gøre arbejdet

Du har ikke brug for en dramatisk prompt.

Jeg ville skrive noget i denne retning i selve chatten:

```text
Lav dette kildemateriale om til enkle flashcards med forside og bagside.

Regler:
- Én oplysning, én forskel eller ét trin i en proces pr. kort
- Forsiden skal være konkret og kunne besvares
- Bagsiden skal være kort og direkte
- Ingen opdigtede oplysninger
- Spring dubletter og vage spørgsmål over
- Spring kort over, der afhænger af manglende kontekst fra det oprindelige dokument
- Slet med hård hånd kort, der ikke er værd at repetere med på lang sigt
```

Hvis kilden er et rettet opgavesæt, tilføjer du én sætning:

```text
Prioritér fejl, misforståelser og forskelle, som jeg sandsynligvis vil overse igen.
```

Det er nok.

De nyttige begrænsninger er enkle:

- én ting at huske pr. kort
- korte svar
- ingen opdigtede oplysninger
- ingen brede spørgsmål, der beder om et resumé
- ingen kort, der stadig kræver, at hele kilden er åben ved siden af

Claude reagerer som regel godt på tydelige rammer. Problemet er sjældent mangel på promptmagi. Problemet er, at folk beder om for meget på én gang.

## De bedste flashcards fra Claude kommer som regel fra tre slags materiale

Jeg stoler mest på Claude, når kildematerialet allerede næsten egner sig til kort, men stadig kræver oprydning.

De bedste udgangspunkter er:

- forelæsningsnoter, der skal forkortes
- pensumtekster, hvor det væsentlige skal trækkes ud
- rettede opgaver, der afslører én bestemt fejl

Det mønster er relevant, fordi Claude ikke opfinder et studiesystem fra bunden. Den hjælper dig med at omdanne råmateriale til mere afgrænsede ting, du skal kunne genkalde.

Hvis dit input mest består af noter, går [Sådan laver du noter om til flashcards i 2026 (på engelsk)](/blog/turn-notes-into-flashcards/) mere i dybden med oprydningen. Ved filer bør du trække et lille, relevant afsnit ud og kontrollere tekst, ligninger og betegnelser, før du godkender kortudkastene.

## Slet de kort, der stadig lyder som Claude

Det er her, kvaliteten virkelig løftes.

Kort lavet af Claude fejler ofte på genkendelige måder:

- forsiden lyder elegant, men kan ikke besvares entydigt
- bagsiden indeholder tre oplysninger, fordi afsnittet indeholdt tre oplysninger
- kortet beholder vage formuleringer som »centrale overvejelser« eller »vigtige faktorer«
- formuleringen er så klar, at man beundrer den, men gør kortet irriterende at repetere

Dem ville jeg straks fjerne.

Forsiden af et flashcard bør ikke lyde som den indledende sætning i en læsevejledning. Den skal lyde som et spørgsmål, du enten kan besvare eller ikke kan.

Behold kun kortet, hvis:

- du kan besvare det uden at åbne kilden igen
- bagsiden er kort nok til hurtigt at kunne bedømmes
- det tester ét begreb frem for en hel gruppe
- du stadig synes, det er værd at huske om en uge

Ellers skal det slettes.

Det er den vigtigste forskel på en Claude-session, der føles produktiv, og et kortsæt, der bliver ved med at være nyttigt.

## Et svagt Claude-kort og den version, jeg faktisk ville beholde

Lad os sige, at Claude læser et afsnit om glykolyse og giver dig dette:

- Forside: Hvad er glykolysens centrale kendetegn og resultater?
  Bagside: Glykolyse er en stofskiftevej, der foregår i cytoplasmaet, omdanner glukose til pyruvat, producerer ATP og NADH og ikke kræver ilt.

Det er ikke ét kort. Det er et afsnit med et navneskilt på.

Den bedre version er som regel flere mindre kort:

- Forside: Hvor foregår glykolysen?
  Bagside: I cytoplasmaet.
- Forside: Hvilket molekyle nedbryder glykolysen?
  Bagside: Glukose.
- Forside: Kræver glykolysen ilt?
  Bagside: Nej.

Måske beholder du ét kort mere om produkterne, hvis den forskel er relevant i dit fag.

Pointen er ikke at bevare Claudes velformulerede svar. Pointen er at bevare de enkelte ting i svaret, du skal kunne genkalde.

## Forveksl ikke Claudes hukommelse og kontekst med intervalrepetition

Claude har nu bedre værktøjer til kontekst end tidligere. Projects hjælper. Uploadede filer hjælper. Projektinstruktioner hjælper. Det er alt sammen nyttigt.

Det er stadig ikke det samme som et repetitionssystem.

Claude kan bevare konteksten omkring et emne. Den kan huske forløbet af din session bedre, end ældre chatværktøjer kunne. Intet af det erstatter den kedelige del, der faktisk betyder noget senere: at se det rigtige kort igen på det rigtige tidspunkt.

Derfor bør **flashcards fra Claude Projects** ende i en rigtig flashcard-app frem for at blive i selve projektet.

Claude kan holde styr på konteksten.

FSRS håndterer glemsel.

Det er to forskellige opgaver.

Hvis du vil vide mere om planlægningen af repetitioner, er [FSRS vs. SM-2 i 2026 (på engelsk)](/blog/fsrs-vs-sm-2/) det direkte næste skridt.

## Gem godkendte kort i Nibomo

Åbn [Nibomo i Claudes katalog](https://claude.ai/directory/nibomo), tilslut Nibomo, log ind på din Nibomo-konto, og godkend adgangen. Nibomo er opført som en Community-connector.

Bed Claude om kun at gemme de kort, du har kontrolleret og godkendt, via Nibomos MCP-connector. Gennemse det valgte arbejdsområde og anmodningen om at skrive data, godkend anmodningen, og kontrollér derefter de gemte kort i Nibomo, før du repeterer dem med FSRS. Du kan stadig kopiere dem manuelt.

[Nibomo](/da/) passer til denne arbejdsgang, fordi produktet i dag dækker den del, Claude ikke selv gør færdig:

- oprettelse og redigering af kort med forside og bagside
- AI-chat med data fra arbejdsområdet og vedhæftede filer
- kortsæt og tags til at organisere de færdige kort
- repetition med FSRS, når kortene er værd at beholde
- en hostet webapp, hvis du vil hurtigt i gang
- mulighed for selv at hoste løsningen, hvis du senere vil drive din egen installation

Hvis du vil hurtigst muligt i gang, gennemgår [Kom godt i gang](/da/docs/getting-started/) den hostede app. Hvis det er vigtigere at drive løsningen selv, er [vejledningen til selvhosting](/da/docs/self-hosting/) det rigtige næste skridt.

## Den arbejdsgang, jeg faktisk ville gentage

En god arbejdsgang til **at lave flashcards med Claude** er kort nok til, at du stadig bruger den, når nyhedens interesse har lagt sig.

Det er denne version, jeg ville holde fast i:

1. Opret ét Claude Project til ét fag, én eksamen eller ét emne.
2. Tilføj en kort projektinstruktion med regler for kortenes forside og bagside.
3. Upload én lille portion materiale: en forelæsning, et pensumafsnit eller rettede øvelsesopgaver.
4. Bed Claude om enkle kortudkast med forside og bagside.
5. Slet eller omskriv svage kort med det samme.
6. Bed Claude om kun at gemme de kort, du har kontrolleret og godkendt, via Nibomos MCP-connector. Gennemse det valgte arbejdsområde og anmodningen om at skrive data, godkend anmodningen, og kontrollér derefter de gemte kort i Nibomo, før du repeterer dem med FSRS. Du kan stadig kopiere dem manuelt.
7. Repetér det færdige kortsæt med FSRS.

Det er en mere troværdig arbejdsgang end at lade, som om Claude selv er det sted, hvor hukommelsen skal bo.

Hvis dit AI-genererede kortsæt allerede føles oppustet, så stop med at acceptere nye udkast, og ret de eksisterende med [Sådan forbedrer du AI-flashcards i 2026 (på engelsk)](/blog/how-to-fix-ai-flashcards/).

## Den bedre regel for at lave flashcards med Claude

Bed ikke Claude om at klare dine studier for dig.

Bed den om at tage sig af rutinearbejdet.

Det er den version af **at lave flashcards med Claude**, der faktisk holder i 2026:

- ét Project pr. emne
- én lille portion ad gangen
- én oplysning eller forskel pr. kort
- slet med hård hånd
- rigtig repetition bagefter

Claude er god til hurtigere at få dig fra rodet kildemateriale til kortudkast.

Nibomo sammen med FSRS gør udkastene til noget, du måske stadig kan huske om en måned.
