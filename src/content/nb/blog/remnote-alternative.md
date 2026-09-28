---
title: "Alternativer til RemNote i 2026: gratis og med åpen kildekode"
description: "Sammenlign alternativer til RemNote for notater, PDF-er, puggekort, pris og egen drift. Se hva som kan flyttes, hva som går tapt, og hvordan du tester et trygt bytte."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternativ til remnote"
  - "remnote alternativer"
  - "remnote åpen kildekode"
  - "gratis alternativ til remnote"
  - "remnote mot anki"
  - "alternativ til remnote med åpen kildekode"
  - "remnote alternativ egen drift"
  - "puggekort app uten nett"
---

RemNote merker Anki-eksporten sin med **Flashcards Only**. Punkter uten kort hoppes over, og pakken inneholder ikke de sammenkoblede notatene dine, PDF-ene eller arbeidsmåten i Reader. En annen app kan ta imot alle spørsmålene og svarene, mens systemet som gjorde kortene nyttige, blir igjen.

Det beste **alternativet til RemNote** løser grunnen til at du vil bytte, uten å fjerne den delen av RemNote som fortsatt fungerer for deg. For noen handler det om pris. For andre handler det om vanlige lokale filer, et mer avansert kortsystem eller kildekode de kan kjøre selv.

> **Åpenhet om min rolle:** Jeg heter Kirill Markin og utvikler [Nibomo](/nb/), et av produktene i denne sammenligningen. Nibomo er ingen fullverdig erstatning for RemNote. RemNote har den sterkeste integrerte løsningen for notater og PDF-er i sammenligningen, mens Anki har det mest veletablerte kortsystemet og de mest modne formatene for flytting av data.

**Fakta og priser kontrollert:** 31. august 2026. Prisene er offentlig oppgitte priser for USA, med årlig fakturering der det er angitt. Avgifter, regioner, appbutikker og betavilkår kan påvirke beløpet.

![En arkivkonservator tester en liten overføring fra en intakt studiemappe med sammenkoblet innhold til separate systemer for kort, filer og blokker](/blog/remnote-alternative.png)

## Start med grunnen til at du vil bytte

- **Pris:** Sjekk om RemNote Free allerede dekker måten du faktisk jobber på. Abonnementet inkluderer ubegrenset antall notater, puggekort og synkroniserte enheter, men begrenser antall dokumenter med merknader og noen avanserte funksjoner.
- **Kort som føles for tett bundet til notater:** Prøv Anki. Der står kort, maler, import og FSRS i sentrum.
- **Vanlige lokale notatfiler:** Fordel jobben mellom Obsidian for Markdown-notater og Anki for repetisjon. Det er mindre integrert, men det er langt tydeligere hvor dataene dine ligger og hvordan du har kontroll over dem.
- **Sammenkoblede notater med åpen kildekode, PDF-er og innebygde kort:** Logseq kommer nærmest her, med et vesentlig forbehold i 2026: Den nye databaseversjonen er i beta, den nye iOS-appen og sanntidssynkroniseringen er i alfa, og den nye Android-appen er ennå ikke åpen for testing.
- **Kildekode og egen drift for et rendyrket kortsystem:** Vurder Nibomo hvis kort med forside og bakside er nok, og du godtar en ny repetisjonsplan og et betydelig driftsansvar på AWS.
- **PDF-lesing, sammenkoblede markeringer og kort på ett sted:** Bli i RemNote. Ingen av de andre løsningene gjenskaper denne arbeidsmåten uten videre.

Det siste svaret er lett å overse. Et bytte er ikke et fremskritt hvis alternativet gir deg lisensen du foretrekker, men ødelegger morgendagens studieøkt.

## Alternativer til RemNote: sammenligningstabellen

| Løsning | Beste grunn til å velge den | Notater og PDF-er | Repetisjonsplanlegging | Bruk uten nett og eierskap | Pris kontrollert 31. august 2026 | Viktigste begrensning ved flytting |
|---|---|---|---|---|---|---|
| **Bli i RemNote** | Sammenkoblede notater, kildelesing og kort hører sammen | Innebygd kunnskapsbase og Reader med sammenkoblede PDF-markeringer, notater og kort | FSRS-6 i beta med manuell aktivering og trening av vekter; SM-2 er fortsatt standard | Skrivebords- og mobilappene fungerer uten nett etter innlogging; skrivebordsappen tilbyr kunnskapsbaser som bare lagres lokalt | Gratis; Pro 8 USD/måned ved årlig betaling; Pro med KI 18 USD/måned ved årlig betaling | Eksport i eget format er best for gjenoppretting i RemNote, men utelater foreløpig bilder og PDF-er |
| **Anki** | Kort, maler, tillegg og bevaring av samlingen kommer først | Ingen integrert arbeidsflate for sammenkoblede notater eller PDF-lesing | Veletablerte FSRS-innstillinger, optimaliserte parametere, ønsket andel kort du husker og simulering av arbeidsmengde | Lokale samlinger på datamaskin og mobil; åpen kildekode for kjernen i skrivebordsappen og en offisiell synkroniseringsserver for egen drift | Skrivebordsappen, AnkiWeb og AnkiDroid er gratis; den offisielle iOS-appen AnkiMobile koster penger | RemNote eksporterer kort til `.apkg`, ikke hele notatsystemet; kontroller repetisjonsdata og medier i en testimport |
| **Obsidian + Anki** | Du vil ha vanlige lokale Markdown-notater uten å gi opp et modent system for kortrepetisjon | Obsidian håndterer lokale notater og vedlegg; Anki håndterer kort; ingen samlet arbeidsflyt fra Reader til repetisjon | Ankis FSRS | Lokalt Markdown-hvelv og lokal Anki-samling; Obsidian er gratis, men proprietært | Obsidian er gratis; valgfri Sync fra 4 USD/måned ved årlig betaling; Anki-priser som over | RemNotes Markdown- og Anki-eksporter skaper to systemer; aktive RemNote-koblinger mellom notater, kilder og kort blir ikke til én flyttbar arbeidsflyt |
| **Logseq** | Du vil spesifikt ha en notatbasert disposisjonsapp med åpen kildekode, PDF-er og innebygde kort | Sammenkoblede blokker, PDF-merknader og kortrepetisjon med fire vurderingsnivåer | Innebygd repetisjonsalgoritme med fire vurderingsnivåer; [dokumentasjonen knytter den nye algoritmen](https://github.com/logseq/docs/blob/master/db-version.md#cards) til det opprinnelige FSRS-prosjektet | AGPL-lisensiert app; data fra databaseversjonen kan eksporteres som SQLite, EDN eller standard Markdown med informasjonstap | Gratis app med åpen kildekode | Den nåværende databaseversjonen er i beta; den nye iOS-appen og sanntidssynkroniseringen er i alfa, den nye Android-appen er ennå ikke åpen for testing, og gamle Logseq-SRS-data er ikke kompatible med den nye kortalgoritmen |
| **Nibomo** | Du vil ha enkle kort i et åpent system som omfatter nett, mobil og backend | Ingen notatbasert kunnskapsbase, tilbakekoblinger, PDF-leser eller egen skrivebordsapp | FSRS-6 med faste vekter og færre justeringsmuligheter enn Anki eller RemNote | Nett, iOS og Android utviklet for bruk uten nett; hele systemet er MIT-lisensiert, med en produksjonsløsning på AWS | Den driftede appen er gratis i betaperioden; egen drift medfører kostnader til infrastruktur og leverandører | Ingen direkte import fra RemNote eller Anki; innhold kan bygges opp på nytt, men repetisjonshistorikk og FSRS-tilstand følger ikke med |

Tabellen gir ikke poeng for antall funksjoner. En student som bruker PDF-er mye, kan tape mer på å velge det «mest åpne» alternativet enn vedkommende vinner på lisensen. En som bare har en enkel kortstokk med gloser, betaler kanskje for et notatsystem som ikke lenger brukes. Start med raden som beskriver begrensningen din, og test deretter hva som faktisk lar seg flytte.

Gratis og åpen kildekode er to ulike kriterier. Selve appen er gratis i RemNote Free og Obsidian, men begge er proprietære. Kjernen i Ankis skrivebordsapp, Logseq og Nibomo har offentlig kildekode. AnkiMobile er likevel en betalt iOS-app, og egen drift av Nibomo gir fortsatt skykostnader.

## Bli i RemNote når den sammenhengende arbeidsmåten er det du trenger

RemNote samler stegene som de fleste alternativer deler opp. [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) kan holde en PDF åpen ved siden av notatene, lime inn referanser til bestemte markeringer og gjøre notatene eller markeringene om til puggekort. Gratisabonnementet lar deg legge til merknader i tre dokumenter. Den gjeldende [prissiden](https://www.remnote.com/pricing) oppgir ubegrenset antall dokumenter med merknader i Pro.

Repetisjonsalgoritmen er heller ikke lenger en opplagt grunn til å bytte. RemNote dokumenterer nå [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) som et betaalternativ du aktiverer manuelt. Etter minst 1 000 repetisjoner kan den trene vekter på din egen historikk. Anki har fortsatt flere innstillingsmuligheter, men den som liker RemNotes notater og PDF-er, trenger ikke å gi dem opp bare for å bruke FSRS.

Støtten for bruk uten nett går også lenger enn «fungerer i en åpen nettleserfane». I RemNotes [skrivebords- og mobilapper](https://help.remnote.com/en/articles/6752029-offline-mode) kan du redigere notater og repetere kort uten nett etter installasjon og innlogging. Skrivebordsappen beholder en fullstendig lokal kopi av bilder og PDF-er. På mobil og nett kan medier som ikke er mellomlagret, mangle, og nettappen kan ikke starte fra en lukket eller oppdatert fane uten nettilkobling.

Hvis du startet søket etter et **gratis alternativ til RemNote**, bør du teste gratisabonnementet før du flytter. Hvis problemet er tilgang til kildekoden, er lokal modus ikke det samme som åpen kildekode eller egen drift. Den separate veiledningen om [hvorvidt RemNote har åpen kildekode](/blog/is-remnote-open-source/) forklarer dette skillet nærmere.

## RemNote mot Anki: velg hva som skal stå i sentrum

Det nyttige skillet mellom **RemNote og Anki** er ikke «notater eller ingen notater». Anki lagrer også notater, men et Anki-notat er et sett med felt som [kortmaler](https://docs.ankiweb.net/templates/intro.html) gjør om til repetisjonskort. RemNote tar utgangspunkt i dokumenter og sammenkoblede punkter som kan bli kort. Det ene er et veletablert system for å lage kort; det andre er et studiearbeidsområde bygget rundt notater og kilder.

Velg Anki når egendefinerte felt, genererte kortvarianter, HTML/CSS-maler, tillegg eller mange års repetisjonshistorikk er sentralt. De gjeldende [FSRS-innstillingene](https://docs.ankiweb.net/deck-options.html#fsrs) omfatter parameteroptimalisering, ønsket andel kort du husker og simulering av arbeidsmengde. [Eksportene](https://docs.ankiweb.net/exporting.html) kan bevare en hel samling i `.colpkg`, mens kortstokkpakker i `.apkg` kan inneholde repetisjonsplaner, forhåndsinnstillinger og medier.

RemNote tilbyr en vei ut til Anki, men navnet er vesentlig: [Anki-eksporten er «Flashcards Only»](https://help.remnote.com/en/articles/7898019-exporting-notes). Punkter uten kort utelates. RemNote beholder konteksten fra overordnede punkter i eksporterte kort og gjør flervalgskort om til vanlige kort, men eksporten er ikke kunnskapsbasen, PDF-biblioteket eller hele arbeidsflyten for lesing. Den offisielle eksportsiden lover heller ikke at alle deler av repetisjonstilstanden kommer frem til Anki. Test før du antar at ingenting går tapt.

Anki er det sterkeste valget her når kortene kommer først. Det er mer krevende å bruke Anki som erstatning for RemNote Reader. Hvis du fortsatt legger inn merknader i artikler og skriver sammenkoblede notater, bør du kombinere Anki med et notatverktøy i stedet for å tvinge Anki inn i den rollen. Den [bredere veiledningen til Anki-alternativer](/nb/blog/best-anki-alternatives/) dekker flere løsninger med kort i sentrum.

## Obsidian pluss Anki: lokale filer, med en bevisst arbeidsdeling

Noen som leter etter alternativer til RemNote, trenger ikke enda en alt-i-ett-app. De vil ha notater som forblir vanlige filer, og et repetisjonssystem som kan utvikle seg uavhengig av dem. Obsidian pluss Anki gir en tydelig arbeidsdeling.

[Obsidian lagrer notater](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) som ren tekst med Markdown-formatering i en lokal mappe. Appen er gratis og krever ingen konto. Den valgfrie tjenesten [Obsidian Sync](https://obsidian.md/pricing) koster fra 4 USD per måned ved årlig fakturering. Obsidian har ikke åpen kildekode, men notatfilene er direkte lesbare og kan sikkerhetskopieres med vanlige filverktøy.

Bruk RemNotes Markdown-eksport for notatene og `.apkg`-eksporten for kortene. Regn med opprydding. En hierarkisk disposisjon eksportert som lesbar Markdown er ikke det samme som aktive RemNote-referanser, portaler, maler eller PDF-festepunkter. Når notater og kort ligger i to apper, overføres heller ikke endringer automatisk mellom dem.

Denne løsningen fungerer når kontroll over lokale filer betyr mer enn en sømløs runde med «marker, lenk, lag kort, repeter». Den er en dårlig byttehandel hvis nettopp denne runden var grunnen til at du valgte RemNote.

## Logseq: alternativet med åpen kildekode og notater i sentrum er under omlegging

Logseq hører hjemme i en sammenligning av **alternativer til RemNote med åpen kildekode**, fordi notatene faktisk står i sentrum. Det offisielle [AGPL-lisensierte kodelageret](https://github.com/logseq/logseq) beskriver en app for kunnskapshåndtering med sammenkoblede blokker og PDF-merknader. [Dokumentasjonen for den nåværende databaseversjonen](https://github.com/logseq/docs/blob/master/db-version.md#cards) beskriver også innebygde kort: Gi en blokk en etikett, se når den skal repeteres, og vurder svaret på ett av fire nivåer.

Den nåværende statusen betyr mer enn funksjonslisten. Logseqs eget kodelager oppgir at databaseversjonen er i beta, mens den nye iOS-appen og sanntidssynkroniseringen er i alfa. Dokumentasjonen for databaseversjonen sier at Android-appen ennå ikke er åpen for alfatesting. Logseq advarer uttrykkelig om mulig datatap og anbefaler en testgraf uten kritiske data, i tillegg til sikkerhetskopier. [Endringsnotatene for databaseversjonen](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) sier også at den nye kortalgoritmen ikke importerer egenskaper eller SRS-data fra eldre Logseq-kort.

Muligheten til å flytte data krever like presise formuleringer. Gjeldende [dokumentasjon for eksport fra databaseversjonen](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) tilbyr SQLite med tilhørende filer, EDN og standard Markdown. Der står det at EDN er den eneste redigerbare eksporten som får med alle grafdata, men EDN anbefales likevel ikke som eneste sikkerhetskopi. Standard Markdown utelater egenskaper og tidsstempler.

Logseq er derfor verdt å vurdere når åpen kildekode, sammenkoblede notater, PDF-er og innebygde kort alle er viktige. Det er ikke løsningen jeg ville brukt til å flytte en kritisk kunnskapsbase for medisinstudiet på én dag i august 2026. Bruk det først parallelt med RemNote, og vent til den nye løsningen har stabilisert seg på enhetene du faktisk bruker.

## Nibomo: åpen kildekode for hele systemet, en avgrenset studiemodell

Nibomo gjør nesten den motsatte avveiningen av RemNote. [Funksjonene](/nb/features/) dreier seg om Markdown-kort med forside og bakside, kortstokker, etiketter, medier, FSRS-repetisjon, klienter utviklet for bruk uten nett og KI-hjelp til å lage kortutkast. Det har ingen kunnskapsbase med sammenkoblede notater, PDF-leser, egen skrivebordsapp eller direkte RemNote-import.

Kildekoden dekker mye: Det MIT-lisensierte kodelageret inkluderer nett, iOS, Android, autentisering, backend, synkronisering og infrastruktur. Den støttede [veiledningen for egen drift i produksjon](/docs/self-hosting/) bruker AWS CDK. Dette er ikke en lokal løsning du starter med én kommando. Den som drifter systemet, har ansvar for skykostnader, hemmeligheter, migreringer, overvåking, sikkerhetskopier, gjenopprettingstester og separate bygg av mobilappene.

For eksisterende RemNote-brukere er flytting den større begrensningen. Nibomo importerer sine egne `flashcards.zip`-pakker, ikke RemNote-Markdown eller Anki-`.apkg`. Pakkene inneholder kort, etiketter og refererte mediefiler, men ikke repetisjonshistorikk, FSRS-tilstand, arbeidsområdeinnstillinger, full kortstokkstruktur eller kontoer. KI-chat kan gjøre eksportert tekst om til kortutkast som du går gjennom. Det er å bygge opp innholdet på nytt, ikke å videreføre den gamle samlingen. [Veiledningen for flytting via TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) viser dette informasjonstapet steg for steg.

Velg Nibomo for et nytt eller enkelt kortarbeidsområde når tilgang til kildekoden for hele systemet er viktig. Behold RemNote for studier der notater og kilder henger sammen, og velg Anki når mest mulig fullstendig dataoverføring eller avansert kortstruktur er viktig. For en mer avgrenset sammenligning av kortsystemene, se [Anki mot Nibomo](/blog/anki-vs-flashcards-open-source-app/) og [veiledningen til puggekortapper med åpen kildekode](/nb/blog/best-open-source-flashcard-apps-2026/).

## Det som ikke lar seg flytte problemfritt fra RemNote

RemNote har flere nyttige eksportformater, men ingen enkeltfil gjenskaper produktet et annet sted.

- **Den komplette RemNote-eksporten** er det beste formatet for gjenoppretting i RemNote. Foreløpig utelater den bilder og PDF-er.
- **Anki-eksporten i `.apkg`** inneholder bare puggekort. Punkter uten kort faller bort, og resultatet er ikke det sammenkoblede notatsystemet ditt.
- **Markdown, HTML, OPML og tekst** gjør innholdet lettere å lese andre steder. De får ikke en annen app til å forstå alle RemNote-spesifikke sammenhenger eller arbeidsmåter.
- **PDF-markeringer og kilder** må kontrolleres særskilt. RemNote Reader kan laste ned en PDF med markeringer, men ikke anta at den komplette kunnskapsbaseeksporten inneholder denne filen.
- **Innstillinger, temaer og programtillegg** følger ikke med i en manuell RemNote-sikkerhetskopi, ifølge [dokumentasjonen for sikkerhetskopiering](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **Repetisjonstilstand** bør kontrolleres kort for kort i målappen. En import som bevarer spørsmål og svar, kan likevel starte repetisjonsplanen på nytt.

Derfor holder det ikke at en app «støtter Markdown» eller «importerer Anki». Flyttbarhet har flere lag: lesbare notater, brukbare medier, sammenkoblede kilder, kortstruktur og læringshistorikk.

## Prøvekjør flyttingen før du sier opp

Sørg for at du kan gå tilbake. En rolig time nå koster mindre enn å oppdage en manglende PDF i eksamensuken.

1. Lag en ny manuell **RemNote (Complete)**-eksport, og behold den uendret.
2. Kopier de lokale `.db.zip`-sikkerhetskopiene og `files`-mappen på datamaskinen. Last ned originale PDF-er og PDF-er med merknader som du ikke kan erstatte.
3. Velg et lite, krevende utvalg: hierarkiske notater, referanser, én PDF, bilder, kort med utfyllingsoppgaver eller flervalg, etiketter og kort med en ordentlig repetisjonshistorikk.
4. Eksporter utvalget i alle formatene den aktuelle løsningen trenger, vanligvis Markdown for notater og `.apkg` for Anki.
5. Importer til et midlertidig hvelv, en graf, en profil eller et arbeidsområde som kan slettes etter testen. Sammenlign antall, formatering, lenker, medier, kortenes forsider og baksider og planlagte repetisjoner side om side med RemNote.
6. Jobb uten nett på hver enhet du planlegger å bruke. Koble deretter til igjen, og kontroller at endringer og repetisjoner dukker opp der de skal.
7. Gjenopprett den komplette sikkerhetskopien i en midlertidig lokal RemNote-kunnskapsbase. Et nedlastet arkiv blir først en gjenopprettingsplan når du har klart å åpne det.
8. Bruk begge systemene i flere faktiske studieøkter. Si først opp når erstatningen har fungert i daglig bruk, og du har gjennomført både en eksport og en gjenoppretting.

Behold de opprinnelige eksportene også etter flyttingen. En vellykket import viser kompatibilitet med dagens versjon av målappen, ikke varig tilgang til alle deler av det gamle systemet.

## De mest aktuelle valgene

- **Bli i RemNote** hvis det er sammenkoblede notater og arbeid med PDF-er som gir deg verdi. Gratisabonnementet eller en kunnskapsbase som bare lagres lokalt, kan allerede løse problemet.
- **Velg Anki** hvis kort, maler, FSRS-innstillinger og mest mulig fullstendig dataoverføring kommer først.
- **Velg Obsidian pluss Anki** hvis vanlige lokale notatfiler er verdt arbeidet med å bruke to verktøy.
- **Vurder Logseq** hvis du trenger sammenkoblede notater med åpen kildekode og innebygde kort. Hold testen fri for kritiske data så lenge den nåværende database- og synkroniseringsløsningen fortsatt er i beta og alfa.
- **Velg Nibomo** hvis et enkelt, nytt kortsystem og tilgang til hele kildekoden betyr mer enn notater, PDF-er eller videreføring av repetisjonsplanen.

Jeg utvikler Nibomo, men ville fortsatt beholdt RemNote for en sammenkoblet notatbok med mye PDF-innhold, eller valgt Anki for en kompleks, etablert samling. Nibomo er det mer avgrensede valget: kort med forside og bakside, et åpent system og en ny repetisjonsplan.

Når du vet hvilke begrensninger du kan akseptere, tester du bare den løsningen. Hvis Nibomo passer, viser [kom i gang-veiledningen](/docs/getting-started/) hvordan du starter med den driftede tjenesten eller egen drift. Hvis det ikke passer, er det også et godt valg å beholde RemNote.
