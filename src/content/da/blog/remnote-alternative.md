---
title: "Alternativer til RemNote i 2026: Gratis og open source"
description: "Sammenlign alternativer til RemNote på noter, PDF'er, læringskort, pris og egen hosting. Se, hvad du kan flytte, hvad der går tabt, og hvordan du tester et sikkert skift."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "remnote alternativ"
  - "alternativer til remnote"
  - "remnote open source"
  - "gratis alternativ til remnote"
  - "remnote vs anki"
  - "open source alternativ til remnote"
  - "alternativ til remnote med egen hosting"
  - "offline app til læringskort"
---

RemNote kalder sin Anki-eksport **Flashcards Only**. Punkter uden kort springes over, og pakken indeholder hverken dit system af sammenkædede noter, dine PDF'er eller din arbejdsgang i Reader. En anden app kan importere alle spørgsmål og svar, selv om det system, der gjorde kortene nyttige, ikke følger med.

Det bedste **alternativ til RemNote** løser det problem, der får dig til at skifte, uden samtidig at fjerne den del af RemNote, der stadig fungerer. For nogle handler det om pris. For andre om almindelige lokale filer, et mere avanceret kortsystem eller kildekode, de selv kan køre.

> **Min tilknytning:** Jeg hedder Kirill Markin og udvikler [Nibomo](/da/), et af de produkter, der sammenlignes her. Nibomo er ikke en fuld erstatning for RemNote. RemNote har den stærkeste integrerede arbejdsgang med noter og PDF'er i denne sammenligning, mens Anki har det mest modne kortsystem og de mest modne formater til dataflytning.

**Fakta og priser kontrolleret:** 31. august 2026. Priserne er de offentlige amerikanske priser med årlig betaling, hvor det er angivet. Skatter, regioner, appbutikker og betavilkår kan ændre beløbet.

![En arkivkonservator tester en lille overførsel fra en intakt studiesamling med sammenkædede dokumenter til separate systemer med kort, filer og blokke](/blog/remnote-alternative.png)

## Begynd med grunden til, at du vil skifte

- **Pris:** Undersøg, om RemNote Free allerede dækker din faktiske arbejdsgang. Det omfatter ubegrænsede noter, læringskort og synkroniserede enheder, men begrænser antallet af dokumenter med annotationer og visse avancerede funktioner.
- **En arbejdsgang med kort, der føles for bundet til noter:** Prøv Anki. Her er der mere plads til at lade kort, skabeloner, import og FSRS være omdrejningspunktet.
- **Almindelige lokale notefiler:** Fordel arbejdet mellem Obsidian til Markdown-noter og Anki til repetition. Det er mindre integreret, men det er langt tydeligere, hvilke data du selv har rådighed over.
- **Sammenkædede noter med PDF'er og indbyggede kort i open source:** Logseq kommer tættest på her, med et væsentligt forbehold i 2026: Den nye databaseversion er i beta, den nye iOS-app og synkronisering i realtid er i alfa, og den nye Android-app er endnu ikke åben for test.
- **Kildekode og egen hosting til et fokuseret kortsystem:** Overvej Nibomo, hvis kort med for- og bagside er nok, og du accepterer en ny repetitionsplan samt et betydeligt arbejde med AWS-drift.
- **PDF-læsning, sammenkædede fremhævninger og kort ét sted:** Bliv hos RemNote. Ingen af de andre løsninger gengiver den arbejdsgang uden væsentlige kompromiser.

Det sidste svar er let at overse. Et skift er ikke et fremskridt, hvis alternativet opfylder dit ønske til licensen, men ødelægger morgendagens studiesession.

## Alternativer til RemNote: Sammenlign mulighederne

| Løsning | Bedste grund til at vælge den | Noter og PDF'er | Repetitionsplanlægning | Offlinebrug og kontrol over data | Pris kontrolleret 31. august 2026 | Vigtigste begrænsning ved flytning |
|---|---|---|---|---|---|---|
| **Bliv hos RemNote** | Sammenkædede noter, læsning af kilder og kort skal høre sammen | Indbygget vidensbase og Reader med sammenkædede PDF-fremhævninger, noter og kort | FSRS-6 i beta med manuel tilmelding og træning af vægte; SM-2 er stadig standard | Computer- og mobilapps fungerer offline efter login; vidensbaser kun på den lokale computer er mulige | Gratis; Pro 8 USD/måned ved årlig betaling; Pro with AI 18 USD/måned ved årlig betaling | Eksport i eget format er bedst til gendannelse i RemNote, men udelader i øjeblikket billeder og PDF'er |
| **Anki** | Kort, skabeloner, tilføjelser og bevarelse af samlingen kommer først | Intet integreret arbejdsområde til sammenkædede noter eller PDF-læsning | Modne FSRS-indstillinger, optimerede parametre, ønsket genkaldelsesrate og simulering af arbejdsbelastning | Lokale samlinger på computer og mobil; computerappens kerne har åben kildekode, og der findes en officiel synkroniseringsserver til egen hosting | Computerapp, AnkiWeb og AnkiDroid er gratis; den officielle AnkiMobile er en betalt iOS-app | RemNote eksporterer kort til `.apkg`, ikke hele notesystemet; kontrollér planlægningsdata og medier i en prøveimport |
| **Obsidian + Anki** | Du vil have almindelige lokale Markdown-noter uden at opgive en moden repetitionsplanlægger | Obsidian håndterer lokale noter og vedhæftninger; Anki håndterer kort; ingen samlet arbejdsgang fra Reader til repetition | Anki FSRS | Lokal Markdown-vault plus lokal Anki-samling; selve Obsidian er gratis, men proprietær | Obsidian er gratis; valgfri Sync starter ved 4 USD/måned ved årlig betaling; Anki-priser som ovenfor | RemNotes Markdown- og Anki-eksporter skaber to systemer; de aktive forbindelser mellem noter, kilder og kort i RemNote bliver ikke til én flytbar arbejdsgang |
| **Logseq** | Du vil specifikt have en open source-app til hierarkiske noter med PDF'er og indbyggede kort | Sammenkædede blokke, PDF-annotation og kortrepetition med fire svarvurderinger | Indbygget planlægger med fire svarvurderinger; [dokumentationen forbinder den nye algoritme](https://github.com/logseq/docs/blob/master/db-version.md#cards) med det oprindelige FSRS-projekt | App med AGPL-licens; data i databaseversionen kan eksporteres som SQLite, EDN eller standard-Markdown med datatab | Gratis open source-app | Den nuværende databaseversion er i beta; den nye iOS-app og synkronisering i realtid er i alfa, den nye Android-app er endnu ikke åben for test, og gamle SRS-data fra Logseq er ikke kompatible med den nye kortalgoritme |
| **Nibomo** | Du vil have enkle kort i et åbent system med web, mobil og backend | Ingen vidensbase med noter, tilbagehenvisninger, PDF-læser eller selvstændig computerapp | FSRS-6 med faste vægte og færre tilpasningsmuligheder end Anki eller RemNote | Web, iOS og Android med offlinebrug som udgangspunkt; hele systemet har MIT-licens og en vej til produktionsdrift på AWS | Den hostede app er gratis under beta; egen hosting medfører udgifter til infrastruktur og udbydere | Ingen direkte import fra RemNote eller Anki; indhold kan genopbygges, men repetitionshistorik og FSRS-tilstand flyttes ikke med |

Tabellen giver ikke point for funktioner. En studerende, der bruger mange PDF'er, kan miste mere ved at skifte til den »mest åbne« løsning, end licensen giver til gengæld. En person med et enkelt ordforrådskortsæt betaler måske for et notesystem, vedkommende ikke længere bruger. Begynd med den række, der beskriver dit problem, og test derefter, hvad flytningen kan bevare.

Gratis og open source er to forskellige kriterier. RemNote Free og Obsidians grundapp koster ikke noget, men er proprietære. Kildekoden til Ankis computerapp, Logseq og Nibomo er offentligt tilgængelig. AnkiMobile er stadig en betalt iOS-app, og egen hosting af Nibomo giver stadig cloududgifter.

## Bliv hos RemNote, når den sammenhængende arbejdsgang er selve produktet

RemNote samler de trin, som de fleste alternativer adskiller. Dets [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) kan holde en PDF åben ved siden af dine noter, indsætte henvisninger til præcise fremhævninger og omdanne noterne eller fremhævningerne til læringskort. Gratisplanen lader dig annotere tre dokumenter. Den nuværende [prisside](https://www.remnote.com/pricing) angiver ubegrænsede dokumenter med annotationer på Pro.

Repetitionsplanlægningen er heller ikke længere en oplagt grund til at skifte. RemNote beskriver nu [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) som en betafunktion, du slår til manuelt. Efter mindst 1.000 repetitioner kan den træne vægte ud fra din egen historik. Anki giver stadig mere detaljeret kontrol, men hvis du kan lide RemNotes noter og PDF'er, behøver du ikke opgive dem blot for at bruge FSRS.

Offlinefunktionen rækker også længere end »virker i en åben browserfane«. RemNotes [computer- og mobilapps](https://help.remnote.com/en/articles/6752029-offline-mode) kan redigere noter og repetere kort offline efter installation og login. Computerappen beholder en komplet lokal kopi af billeder og PDF'er. Mobil- og webappen kan mangle medier, der ikke er gemt i cachen, og webappen kan ikke starte fra en lukket eller genindlæst fane uden forbindelse.

Hvis du begyndte din søgning efter et **gratis alternativ til RemNote**, så test gratisplanen, før du flytter. Hvis problemet er adgang til kildekoden, er lokal tilstand ikke det samme som open source eller egen hosting. Den særskilte gennemgang af, [om RemNote er open source](/blog/is-remnote-open-source/), forklarer den forskel i detaljer.

## RemNote vs Anki: Vælg, hvad der skal være i centrum

Den nyttige forskel mellem **RemNote og Anki** er ikke »noter eller ingen noter«. Anki gemmer også noter, men en Anki-note er et sæt felter, som [kortskabeloner](https://docs.ankiweb.net/templates/intro.html) omdanner til repetitionskort. RemNote tager udgangspunkt i dokumenter og sammenkædede punkter, der kan blive til kort. Det ene er et modent system til at fremstille kort; det andet er et studiearbejdsområde bygget op om noter og kilder.

Vælg Anki, når tilpassede felter, genererede kortvarianter, HTML/CSS-skabeloner, tilføjelser eller flere års repetitionshistorik er centrale. De nuværende [FSRS-indstillinger](https://docs.ankiweb.net/deck-options.html#fsrs) omfatter parameteroptimering, ønsket genkaldelsesrate og simulering af arbejdsbelastning. Dets [eksportformater](https://docs.ankiweb.net/exporting.html) kan bevare en hel samling i `.colpkg`, mens kortsætpakker i `.apkg` kan indeholde planlægningsoplysninger, forudindstillinger og medier.

RemNote giver dig en vej videre til Anki, men navnet betyder noget: [Anki-eksporten er »Flashcards Only«](https://help.remnote.com/en/articles/7898019-exporting-notes). Punkter uden kort udelades. RemNote bevarer konteksten fra overordnede punkter i de eksporterede kort og forenkler multiple choice-funktionaliteten, men eksporten er hverken din vidensbase, dit PDF-bibliotek eller din samlede læsearbejdsgang. RemNotes officielle eksportside lover heller ikke, at alle dine planlægningsdata når frem til Anki. Test det, før du regner med en flytning uden tab.

Anki er det stærkeste valg her, når kort kommer først. Det er ikke den mest ligetil erstatning for RemNote Reader. Hvis du stadig annoterer artikler og skriver sammenkædede noter, så kombinér det med et noteværktøj i stedet for at tvinge Anki til at blive et. Den [bredere guide til Anki-alternativer](/da/blog/best-anki-alternatives/) dækker flere løsninger med kort i centrum.

## Obsidian plus Anki: Lokale filer med en bevidst opdeling

Nogle, der leder efter alternativer til RemNote, har ikke brug for endnu en alt-i-en-app. De vil have noter, der forbliver almindelige filer, og et repetitionssystem, der kan udvikle sig uafhængigt. Med Obsidian plus Anki er opdelingen tydelig.

[Obsidian gemmer noter](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) som almindelig tekst med Markdown-formatering i en lokal mappe. Appen er gratis uden konto. Den valgfrie [Obsidian Sync](https://obsidian.md/pricing) starter ved 4 USD om måneden ved årlig betaling. Obsidian er ikke open source, men notefilerne kan læses direkte og sikkerhedskopieres med almindelige filværktøjer.

Brug RemNotes Markdown-eksport til noterne og `.apkg`-eksporten til kortene. Regn med oprydning. En hierarkisk punktliste eksporteret som læsbar Markdown er ikke det samme som aktive RemNote-henvisninger, portaler, skabeloner eller PDF-pins. Når noter og kort ligger i to apps, bliver ændringer heller ikke længere automatisk overført mellem dem.

Denne løsning fungerer, når kontrollen over lokale filer betyder mere end en ubrudt arbejdsgang med »fremhæv, link, opret kort, repetér«. Det er et dårligt bytte, hvis netop den arbejdsgang var grunden til, at du valgte RemNote.

## Logseq: Open source med noter i centrum er under forandring

Logseq fortjener en plads i en sammenligning af **open source-alternativer til RemNote**, fordi noter faktisk er udgangspunktet. Det officielle [kodelager med AGPL-licens](https://github.com/logseq/logseq) beskriver en app til vidensstyring med sammenkædede blokke og PDF-annotation. Den [nuværende dokumentation for databaseversionen](https://github.com/logseq/docs/blob/master/db-version.md#cards) tilføjer indbyggede kort: Sæt et tag på en blok, se, hvornår den skal repeteres, og repetér den med fire svarvurderinger.

Den aktuelle status betyder mere end funktionslisten. Logseqs eget kodelager siger, at databaseversionen er i beta, mens den nye iOS-app og synkronisering i realtid er i alfa. Den nuværende dokumentation for databaseversionen siger, at Android-appen endnu ikke er åben for alfatest. Logseq advarer udtrykkeligt om risikoen for datatab og anbefaler en testgraf uden kritiske data samt sikkerhedskopier. [Ændringsnoterne til databaseversionen](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) siger også, at den nye kortalgoritme ikke importerer egenskaber eller SRS-data fra ældre Logseq-læringskort.

Muligheden for at flytte data kræver lige så præcise forbehold. Den nuværende [dokumentation for databaseversionens eksport](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) tilbyder SQLite med mediefiler, EDN og standard-Markdown. Den siger, at EDN er den eneste redigerbare eksport, som bevarer alle grafdata, men anbefaler alligevel ikke EDN som eneste sikkerhedskopi. Standard-Markdown udelader egenskaber og tidsstempler.

Logseq er altså værd at undersøge, når open source, sammenkædede noter, PDF'er og indbyggede kort alle er vigtige. Det er ikke den løsning, jeg ville bruge til at flytte en vigtig vidensbase fra medicinstudiet på én dag i august 2026. Brug det først ved siden af RemNote, og giv den igangværende overgang tid til at falde på plads på de enheder, du faktisk bruger.

## Nibomo: Åben kildekode til hele systemet, en afgrænset studiemodel

Nibomo prioriterer næsten omvendt af RemNote. Dets [funktioner](/da/features/) er centreret om Markdown-kort med for- og bagside, kortsæt, tags, medier, FSRS-repetition, klienter med offlinebrug som udgangspunkt og AI-hjælp til kortudkast. Det har ingen vidensbase med sammenkædede noter, PDF-læser, selvstændig computerapp eller direkte RemNote-import.

Kildekoden omfatter meget: Kodelageret med MIT-licens indeholder web, iOS, Android, autentificering, backend, synkronisering og infrastruktur. Den understøttede [guide til egen hosting i produktion](/docs/self-hosting/) bruger AWS CDK. Det er ikke en lokal løsning, du starter med én kommando. Den driftsansvarlige står for cloududgifter, hemmelige nøgler, migreringer, overvågning, sikkerhedskopier, gendannelsestest og særskilt byggede mobilapps.

For en eksisterende RemNote-bruger er selve flytningen den større begrænsning. Nibomo importerer sine egne `flashcards.zip`-pakker, ikke RemNote-Markdown eller Anki `.apkg`. Pakkerne indeholder kort, tags og de medier, kortene henviser til, men ikke repetitionshistorik, FSRS-tilstand, arbejdsområdeindstillinger, den fulde kortsætstruktur eller konti. AI-chat kan omdanne eksporteret tekst til kortudkast, som du gennemgår. Det er en genopbygning af indhold, ikke en fortsættelse af den gamle samling. [Guiden til flytning via TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) viser trin for trin, hvad denne metode taber.

Vælg Nibomo til et nyt eller enkelt arbejdsområde med kort, når adgang til hele systemets kildekode betyder noget. Behold RemNote til studier med sammenkædede noter og kilder, og vælg Anki, når præcis bevarelse af data eller avanceret kortstruktur er vigtig. Vil du have en mere afgrænset sammenligning af kortsystemerne, så se [Anki vs Nibomo](/blog/anki-vs-flashcards-open-source-app/) og [guiden til open source-apps til læringskort](/da/blog/best-open-source-flashcard-apps-2026/).

## Det kan ikke flyttes problemfrit fra RemNote

RemNote har flere nyttige eksportformater, men ingen enkelt fil genskaber produktet i en anden app.

- **Den komplette RemNote-eksport** er det bedste format til gendannelse i RemNote. Den udelader i øjeblikket billeder og PDF'er.
- **Anki-eksporten i `.apkg`** indeholder kun læringskort. Punkter uden kort kommer ikke med, og resultatet er ikke dit system af sammenkædede noter.
- **Markdown, HTML, OPML og tekst** gør indhold lettere at læse andre steder. De får ikke en anden app til at forstå alle forbindelser og arbejdsgange, der er særlige for RemNote.
- **PDF-fremhævninger og kilder** skal kontrolleres særskilt. RemNote Reader kan downloade en PDF med fremhævninger, men antag ikke, at den komplette eksport af vidensbasen indeholder den fil.
- **Indstillinger, temaer og plugins** er ikke med i en manuel RemNote-sikkerhedskopi ifølge [dokumentationen om sikkerhedskopiering](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **Repetitionsstatus** bør kontrolleres kort for kort i den nye app. En import, der bevarer spørgsmål og svar, kan stadig nulstille repetitionsplanen.

Derfor er »understøtter Markdown« eller »importerer Anki« ikke nok. Muligheden for at flytte data består af flere lag: læsbare noter, brugbare medier, sammenkædede kilder, kortstruktur og læringshistorik.

## Lav en prøveflytning, før du opsiger

Sørg for, at flytningen kan fortrydes. En rolig time nu er billigere end at opdage en manglende PDF i eksamensugen.

1. Lav en ny manuel **RemNote (Complete)**-eksport, og behold den uændret.
2. Kopiér de lokale `.db.zip`-sikkerhedskopier og mappen `files` på computeren. Download originale eller annoterede PDF'er, som du ikke kan erstatte.
3. Vælg en lille, krævende stikprøve: noter med flere niveauer, henvisninger, én PDF, billeder, cloze-kort med udeladt tekst eller multiple choice-kort, tags og kort med væsentlig repetitionshistorik.
4. Eksportér stikprøven i alle de formater, den mulige løsning kræver — typisk Markdown til noter og `.apkg` til Anki.
5. Importér til en midlertidig vault, graf, profil eller et arbejdsområde, du kan slette igen. Sammenlign antal, formatering, links, medier, kortenes for- og bagsider samt repetitionsdatoer med RemNote side om side.
6. Arbejd offline på alle de enheder, du vil bruge. Opret derefter forbindelse igen, og kontrollér, at ændringer og repetitioner når frem som forventet.
7. Gendan den komplette sikkerhedskopi i en midlertidig lokal RemNote-vidensbase. Et downloadet arkiv bliver først en gendannelsesplan, når du har åbnet det uden problemer.
8. Gennemfør flere rigtige studiesessioner i begge systemer. Opsig først, når erstatningen har klaret din daglige arbejdsgang, en eksport og en gendannelse.

Behold de oprindelige eksporter også efter flytningen. En vellykket import beviser kompatibilitet med den nuværende version af den nye app, ikke varig adgang til alle dele af det gamle system.

## De mest relevante valg i praksis

- **Bliv hos RemNote**, hvis sammenkædede noter og studier med PDF'er er det værdifulde. Gratisplanen eller en rent lokal vidensbase løser måske allerede problemet.
- **Vælg Anki**, hvis kort, skabeloner, FSRS-indstillinger og præcis bevarelse af data ved flytning kommer først.
- **Vælg Obsidian plus Anki**, hvis almindelige lokale notefiler er værd at bruge to værktøjer for.
- **Undersøg Logseq**, hvis du har brug for sammenkædede noter og indbyggede kort i open source, men hold kritiske data ude af testen, mens den nuværende database og synkronisering stadig er i beta og alfa.
- **Vælg Nibomo**, hvis et enkelt, nyt kortsystem og adgang til hele kildekoden betyder mere end noter, PDF'er eller videreførelse af repetitionsplanen.

Jeg udvikler Nibomo, og jeg ville stadig beholde RemNote til en sammenkædet notesamling med mange PDF'er eller vælge Anki til en kompleks, etableret samling. Nibomo er det mere afgrænsede valg: kort med for- og bagside, et åbent system og en ny repetitionsplan.

Når du ved, hvilken begrænsning du kan acceptere, så test kun den løsning. Hvis Nibomo passer, viser [guiden til at komme i gang](/docs/getting-started/) mulighederne for hostet brug og egen hosting. Hvis det ikke passer, er det også et gyldigt valg at beholde RemNote.
