---
title: "Alternativer til Anki i 2026: hva du beholder, mister og får ved å bytte"
description: "Sammenlign sju alternativer til Anki etter hva som bevares ved flytting, bruk uten nett, repetisjonsplan, pris, kildekode og egen drift – og se når Anki er tryggest."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternativer til Anki"
  - "Anki-alternativ"
  - "apper som Anki"
  - "Anki-alternativ med åpen kildekode"
  - "gratis alternativer til Anki"
  - "Anki-alternativ for iOS"
  - "flytte fra Anki"
---

En Anki-import kan fullføres uten feilmeldinger og likevel fjerne det som gjør kortstokken din nyttig. Teksten kommer med. Kortene åpnes. Så oppdager du at CSS-en er borte, at et lydfelt er tomt, at alle kort regnes som nye, eller at et notat ikke lenger lager kort i de retningene du forventet.

Det er denne delen av sammenligningen mellom Anki-alternativer som kan bli dyr. En ryddigere editor eller et billigere abonnement er lett å vurdere før du bytter. Problemer med maler, repetisjonshistorikk, forfallsdatoer, tillegg, medier uten nett og muligheten til å flytte videre oppdager du gjerne først etter at skaden har skjedd.

Denne sammenligningen tar utgangspunkt i nettopp det. Den dekker sju apper som Anki, hva hver av dem kan ta med fra en eksisterende samling, hva som endres etter import, og når det er tryggere å beholde Anki.

> **Åpenhet om egeninteresse:** Jeg er Kirill Markin og utvikler [Nibomo](https://nibomo.com/), et av produktene nedenfor. Jeg tok det med på grunn av den åpne kildekoden, muligheten for egen drift og arbeidsflytene med agenter. Det er ikke automatisk det beste valget: Det har ingen direkte `.apkg`-import, flytting fra Anki medfører tap av data, og egen drift av hele løsningen krever reelt infrastrukturarbeid.

**Fakta kontrollert:** 28. august 2026. Prisene er offentlige amerikanske priser eller oppgitte lokale priser som var tilgjengelige den dagen. Avgifter, regioner, utdanningstilbud og betaling gjennom appbutikker kan påvirke beløpet.

![En urmaker undersøker om et gjennomarbeidet lommeurverk passer i en annen urkasse](/blog/best-anki-alternatives.png)

## Det korte svaret før du flytter noe

Ta utgangspunkt i å beholde Anki. Bytt bare hvis en annen app løser et tilbakevendende problem som er verdt flyttejobben.

Tre produkter tar imot Anki-pakker med læringsdata, men løftene deres strekker seg ulikt langt:

- **Mnemosyne** dokumenterer full Anki-import med egendefinerte korttyper og læringsdata. Det er alternativet som ligger nærmest en tradisjonell, lokal skrivebordsapp med åpen kildekode, men det har ingen egen iOS-app.
- **Mochi** importerer `.apkg`-filer med repetisjonshistorikk. Det konverterer HTML til Markdown, fjerner CSS og JavaScript og erstatter Ankis fire svarknapper med Remembered og Forgot.
- **RemNote** importerer `.apkg`-filer, de fleste notattyper og repetisjonshistorikk. Den gjeldende veiledningen sier også at importerte kort havner i en egen **Need to Learn**-kø. «Repetisjonshistorikk importert» betyr altså ikke «dagens Anki-kø kopiert nøyaktig».

Med de fire andre bygger du opp innholdet på nytt i stedet for å flytte samlingen:

- **Quizlet** er nyttig for offentlige kortsett, klasser, spill og veiledet øving.
- **Brainscape** gir en gruppe en enklere øvingsrutine med egenvurdering fra 1 til 5.
- **SuperMemo** innebærer å gå over til deres proprietære metode og kurskatalog.
- **Nibomo** gir deg nettklient og egne mobilklienter med MIT-lisens, en backend du kan drifte selv, API og MCP-tilgang. Arbeidsflyten med TXT eller CSV krever gjennomgang av utkastene og bevarer ikke læringstilstanden fra Anki.

Hvis kortene dine er avhengige av nøyaktig visning, tillegg eller den nåværende repetisjonskøen, er det ikke ubesluttsomhet å bli i Anki. Det er svaret.

## Kartlegg først hva Anki-samlingen faktisk inneholder

En «kortstokk» er ikke ett enkelt objekt som kan flyttes fritt. Før du sammenligner produkter, bør du skille mellom de ulike delene du kanskje skal flytte.

| Del av samlingen | Hva Anki kan legge i en pakke | Hva mottakerappen uttrykkelig må støtte |
| --- | --- | --- |
| **Notatinnhold** | Tekstfelt og lagret HTML | Kobling mellom felt, utfyllingskort, ikke-latinsk tekst, kode og linjeskift |
| **Kortgenerering** | Notattyper og kortmaler | Kort i begge retninger, egendefinerte felt, CSS og JavaScript-funksjonalitet |
| **Medier** | Lokale bilder, lyd og andre filer når **Include media** er slått på | Utpakking av filer, referanser, støttede formater og synkronisering mellom enheter |
| **Organisering** | Kortstokker, understokker, tagger og eventuelle forhåndsinnstillinger for kortstokker | Hierarki, betydningen av tagger, forhåndsinnstillinger og avgrensning av hva du øver på |
| **Læringstilstand** | Informasjon om repetisjonsplan og repetisjonshistorikk når dette tas med | Forfallsdatoer, intervaller, tilfeller der du har glemt innlærte kort, og konvertering til mottakerens repetisjonsalgoritme |
| **Kode for arbeidsflyten** | Tillegg følger ikke med i kortstokkpakken | Erstatning for verktøy i kortoversikten, masseredigering, notatgenerering og annen funksjonalitet fra tillegg |

[Ankis eksportmanual](https://docs.ankiweb.net/exporting.html) dokumenterer alle disse pakkevalgene. En tekstimport ser bare den første raden, og kanskje tagger. En direkte `.apkg`-import kan lese mer, men hvert produkt bestemmer hva det konverterer og hva det forkaster.

Derfor er «importerer fra Anki» for upresist til å avgjøre et bytte. Still tre separate spørsmål:

1. **Betyr kortet fortsatt det samme?** Kontroller felt, hvilke kortretninger som genereres, utfyllingskort, medier og visning.
2. **Vet mottakerappen hva jeg har lært?** Kontroller registrerte repetisjoner, gjeldende status, forfallsdatoer og den første faktiske køen.
3. **Kan jeg flytte videre igjen?** Eksporter fra mottakerappen og undersøk hva eksportformatet faktisk inneholder.

En importfunksjon kan bestå det første punktet og stryke på de to andre.

## Hva som overlever flyttingen

| Produkt | Importvei fra Anki | Læringstilstand | Viktigste mulige tap å undersøke |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Direkte `.apkg`-import](https://help.remnote.com/en/articles/6751471-importing-from-anki) av de fleste notattyper, medier og repetisjonshistorikk | Historikken kommer med, men importerte kort havner i RemNotes egen **Need to Learn**-kø | Omfattende CSS, egendefinert JavaScript, noe automatisk tekst-til-tale og felter for bildetildekking som har fått nye navn |
| [Mochi](https://mochi.cards/) | [Direkte `.apkg`-import](https://mochi.cards/docs/import-and-export/importing/) med repetisjonshistorikk | Historikken kommer med; dokumentasjonen lover ikke identisk Anki-kø eller identiske forfallsdatoer | HTML blir Markdown; CSS og JavaScript fjernes; videre svarvurdering har bare to valg |
| [Mnemosyne](https://mnemosyne-proj.org/) | Prosjektet dokumenterer [full Anki-import](https://mnemosyne-proj.org/features) med egendefinerte korttyper og læringsdata | Læringsdata importeres til en annen repetisjonsalgoritme | Nøyaktig maloppførsel, konverterte forfallsdata og kortvisning må fortsatt testes |
| [Quizlet](https://quizlet.com/) | [Lim inn begreper og definisjoner](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Ingen fra Anki | Notattyper, maler, kortstokker, mediestruktur og alle data om repetisjonsplanen |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX eller ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Ingen fra Anki | Maler, tillegg, medieregler og alle data om repetisjonsplanen |
| [SuperMemo](https://www.supermemo.com/) | [Lim inn rader med spørsmål og svar atskilt med skilletegn](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), opptil 100 om gangen | Ingen fra Anki | Samlingsstruktur, medier, maler og alle data om repetisjonsplanen |
| [Nibomo](https://nibomo.com/) | KI-assistert utarbeiding av utkast fra Anki TXT eller CSV, med gjennomgang | Ingen fra Anki | Ingen `.apkg`-støtte; maler, nøyaktig mediegjengivelse, kortstokkhierarki og alle data om repetisjonsplanen blir igjen |

## Pris, bruk uten nett, repetisjonsplan og eierskap

| Produkt | Pris kontrollert 28. august 2026 | Begrensninger uten nett | Repetisjonsalgoritme | Kildekode og egen drift |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratis; Pro $8/måned, fakturert som $96/år](https://www.remnote.com/pricing) | Installerte apper støtter redigering og repetisjon uten nett etter innlogging. Skrivebordsappen lagrer alle medier i kunnskapsbasen; mobilappen mellomlagrer bare enkelte nylig brukte bilder. Nettversjonen trenger en fane som fortsatt er åpen. | [Anki SM-2 eller FSRS v6 i beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Proprietær kjerne; ingen støttet løsning for egen drift er dokumentert |
| **Mochi** | [Gratis uten nett; Pro-synkronisering $5/måned](https://mochi.cards/#pricing-section) | Installerte apper fungerer helt uten nett og uten konto. Nettleserlagring kan bli slettet. | [Mochis algoritme eller FSRS](https://mochi.cards/docs/reviewing/fsrs/), begge med Remembered / Forgot | Proprietær kjerne; offentlige kodearkiver inneholder integrasjoner, ikke en app du kan drifte selv |
| **Mnemosyne** | Gratis | [Lokal bruk på datamaskin og repetisjon uten nett på Android](https://mnemosyne-proj.org/download-mnemosyne.php); Android kan ikke redigere. Ingen egen iOS-app. | Adaptiv planlegging ut fra vurderinger av gjenkalling fra 0 til 5 | Kildekodelisenser varierer mellom komponentene; egen synkroniseringsserver på en datamaskin med eller uten grafisk grensesnitt |
| **Quizlet** | Gratis grunnleggende bruk; [Plus $35.99/år, Plus Unlimited $44.99/år](https://quizlet.com/upgrade?source=signup) | Nedlastede sett fungerer uten nett i iOS- og Android-appene med Flashcards og Match. | [Intervallrepetisjon på nett](https://quizlet.com/features/spaced-repetition) for sett med minst 100 begreper; mobilstøtte er fortsatt merket som kommende. Learn er separat adaptiv øving. | Proprietær driftet tjeneste; ingen støttet løsning for egen drift |
| **Brainscape** | [Gratis; Pro $7.99/måned ved årlig betaling](https://www.brainscape.com/pricing) | [Mobilappen kan beholde arbeid uten nett og senere synkronisere klasser som allerede er lastet ned](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentasjonen lover ikke et komplett lokalt bibliotek. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), med vurdering fra 1 til 5 | Proprietær driftet tjeneste; ingen støttet løsning for egen drift |
| **SuperMemo** | Gratis konto med begrensninger; [35.99 PLN/måned eller 359 PLN/år](https://www.supermemo.com/en/premium-subscription) | Nedlastede mobilkurs fungerer uten nett; redigering, KI, søk, opptak og statistikk gjør det ikke. | [Proprietær SuperMemo-metode](https://www.supermemo.com/en/supermemo-method) | Proprietær driftet tjeneste; ingen støttet løsning for egen drift |
| **Nibomo** | [Den driftede kjernen er gratis i beta; programvaren er gratis å drifte selv](/nb/pricing/), i tillegg kommer dine infrastrukturkostnader | Mobilappene skriver lokalt etter innlogging på nett og første innlasting av arbeidsområdet; eksterne medier må allerede være mellomlagret. | [FSRS](/docs/architecture/#scheduling) | MIT; støttet produksjonsdrift bruker en komplett løsning bygget rundt AWS |

Tabellene gir ingen samlet rangering. Direkte import kan veie tyngre enn alle andre funksjoner hvis du har 30 000 godt innlærte kort. En egen iPhone-app kan avgjøre valget hvis det er der du repeterer. Tilgang til kildekoden er bare nyttig hvis du eller noen du stoler på, vil vedlikeholde den.

Alle produktene her lar deg komme i gang gratis, men det er ikke gratis å flytte til et gratis Anki-alternativ. Abonnementsprisen er lett å regne på. Å bygge opp maler på nytt, kontrollere medier og starte repetisjonshistorikken fra bunnen er ofte de større kostnadene.

## RemNote: flytt kortene inn i sammenkoblede notater

RemNote endrer hvor kortene kommer fra. I stedet for å vedlikeholde en separat kortstokk ved siden av forelesningsnotatene lager du kort inne i en disposisjon, et dokument eller en PDF-arbeidsflyt. Det er en reell grunn til å forlate Anki hvis kopiering mellom notatappen og kortappen har blitt den tidkrevende delen.

Importen dekker mye, men det er viktig å forstå hva som skjer med repetisjonskøen. RemNotes [gjeldende veiledning for Anki-import](https://help.remnote.com/en/articles/6751471-importing-from-anki) ber deg eksportere en `.apkg` med informasjon om repetisjonsplanen, forhåndsinnstillinger for kortstokker og medier. Den importerer repetisjonshistorikk og de fleste notattyper, blant annet grunnleggende kort, utfyllingskort og vanlige kort med bildetildekking.

Den samme veiledningen sier at nylig importerte kort sendes til en egen **Need to Learn**-kø. Historikken er med andre ord tilgjengelig for RemNote, men dokumentasjonen lover ikke at den nåværende køen med forfalte Anki-kort dukker opp uendret. Omfattende CSS fjernes også, egendefinert JavaScript støttes ikke, enkelte former for tekst-til-tale som genereres underveis, fungerer ikke, og import av bildetildekking er avhengig av forventede notat- og feltnavn.

Prøv med en representativ kortstokk, og undersøk både kortene og den første køen. En import som ser ryddig ut, er bare halve testen.

De installerte skrivebords- og mobilappene fungerer uten nett etter installasjon og innlogging. [Veiledningen for bruk uten nett](https://help.remnote.com/en/articles/6752029-offline-mode) trekker en viktig grense for medier: Skrivebordsappen lagrer alle bilder og PDF-er i kunnskapsbasen, mens mobilappen bare mellomlagrer noen nylig brukte bilder. Nettappen kan fortsette i en fane som allerede er åpen, men kan ikke startes på nytt uten nett.

Bruk RemNote når sammenkoblede notater gjør det verdt å endre hvordan samlingen er organisert. Behold Anki hvis kortmaler og tillegg er selve systemet, ikke bare pynt rundt det.

## Mochi: lokal Markdown med fullstendig eksport i eget format

Mochi er et enklere alternativ for deg som vil ha lokale data, kort i Markdown-format og færre kontroller på skjermen. De installerte appene kjører på alle store skrivebords- og mobilplattformer og kan brukes [helt uten nett og uten konto](https://mochi.cards/docs/getting-started/download-and-install/). Synkronisering er delen du betaler for, til $5 per måned.

Den direkte Anki-importen tar med repetisjonshistorikk. Det plasserer Mochi godt foran alternativene som bare tar imot tekst. Konverteringen er også uvanlig tydelig beskrevet: Mochi fjerner CSS og JavaScript og konverterer HTML til Markdown. Det fungerer når meningen ligger i teksten og vanlige vedlegg. Hvis meningen ligger i malen, bør du være på vakt.

Mochi tilbyr nå to repetisjonsalgoritmer. Den egenutviklede algoritmen er fortsatt standard, mens [FSRS kan slås på](https://mochi.cards/docs/reviewing/fsrs/) uten å nullstille eksisterende fremgang i Mochi. FSRS beregner korttilstanden fra repetisjonshistorikken Mochi har. Svarvurderingen har fortsatt bare to valg – Remembered eller Forgot – også med FSRS. Anki-brukere som bruker Hard og Easy som separate signaler, må derfor regne med en annen daglig rytme.

Det er tydeligere hvordan du får data ut igjen enn i de fleste proprietære apper. En eksport i Mochis eget [`.mochi`-format](https://mochi.cards/docs/import-and-export/exporting/) inneholder kort, maler, vedlegg, tagger, kortstokkstruktur og repetisjonshistorikk. Markdown og CSV er lettere å undersøke andre steder, men utelater repetisjonshistorikk og andre metadata.

Mochis offentlige GitHub-arkiver inneholder [integrasjoner og tilhørende verktøy](https://github.com/mochi-cards/open-source), ikke selve appen eller en støttet synkroniseringsserver. Velg det for bruk uten nett og flyttbare data, ikke for kontroll over kildekoden.

## Mnemosyne: skrivebordsalternativet med åpen kildekode

Mnemosyne ligger nærmest den tradisjonelle modellen med «et program og en lokal database». Den gjeldende versjonen støtter Windows, macOS og Linux, med en Android-klient for repetisjon uten nett. Funksjonssiden dokumenterer kort med rikt innhold, hierarkiske tagger, programtillegg, en vurderingsskala fra 0 til 5 og full Anki-import med egendefinerte korttyper og læringsdata.

Dette er den mest direkte flytteveien med åpen kildekode her hvis du vil forlate Anki uten å gå over til et stort notatsystem eller en skytjeneste. Det har også en [innebygd synkroniseringsserver](https://mnemosyne-proj.org/help/syncing) som kan kjøre på en datamaskin med eller uten grafisk grensesnitt og slå sammen læringsdata fra flere klienter.

Begrensningene er en del av vurderingen. Android-klienten [kan ikke redigere kort](https://mnemosyne-proj.org/help/android-client). iOS-brukere må repetere i nettleseren via en server som kjører på en annen maskin, og den offisielle funksjonssiden for serveren advarer om at den ikke har sikkerhetsfunksjoner. Egen synkronisering innebærer også å holde serveren tilgjengelig, konfigurere nettverket og sikkerhetskopiere datamappen.

Lisensieringen er mer spesifikk enn en enkel «GPL»-etikett: [Prosjektets lisensfil](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) viser til ulike vilkår for ulike komponenter. [Kjernelisensen](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) bruker AGPL v3 med en ekstra bestemmelse om navn og kreditering, mens [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) bruker LGPL v3. Les disse filene hvis du planlegger å endre eller videredistribuere programvaren.

## Quizlet: bytt for klasserommet, ikke for å bevare samlingen

Quizlet er best på en annen oppgave. Offentlige øvingssett, klasser opprettet av lærere, deling, Match, Test, Learn og gruppeaktiviteter er lettere å ta i bruk i en klasse enn en spesialtilpasset Anki-profil.

Flyttingen stopper ved ren tekst. Quizlet kan gjøre innlimte rader om til begreper og definisjoner, men leser ikke en `.apkg` for å gjenskape notattyper, maler, repetisjonsplan eller repetisjonshistorikk. De som lager sett, kan [eksportere egne sett som kopiert tekst](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), uten bilder. Sett kopiert fra andre brukere kan ikke eksporteres. Det er innholdet som kan flyttes, ikke samlingen som helhet.

Quizlets repetisjonsplanlegging er i endring. Den nye funksjonen [Spaced Repetition](https://quizlet.com/features/spaced-repetition) aktiveres automatisk på nett for sett med minst 100 begreper og bruker vurderingene Repeat, Hard, Okay og Easy. Quizlet merker fortsatt mobilstøtte som kommende. Learn er fortsatt en separat, adaptiv øvingsform med bruksgrenser knyttet til betaling.

Bruk uten nett gjelder også bare mobilappene, ikke nettstedet. Quizlet lagrer automatisk åtte nylig brukte sett og lar deg laste ned flere. [Flashcards og Match fungerer uten nett](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), og fremgangen synkroniseres når du kobler til igjen.

Flytt hit når målet er distribusjon og aktivitet i klasserommet. Å bygge opp en innarbeidet personlig repetisjonsplan på nytt bare for å få disse funksjonene er som regel en dårlig byttehandel.

## Brainscape: færre valg for repetisjonsplanen, mindre med på flyttelasset

Brainscape ber deg vurdere hvor sikker du er på svaret på en skala fra 1 til 5, og bruker signalet til å vise kort du kan dårlig, tidligere. Hele formelen er ikke publisert, men selve fremgangsmåten er lett å lære bort til en klasse.

Det tar imot CSV-, TXT-, XLSX- og ODS-filer. Det er praktisk for kort med for- og bakside, men betyr at maler, tillegg, medieregler og læringsdata fra Anki blir igjen. Eksport av en personlig sikkerhetskopi er en Pro-funksjon og gir filer som kan åpnes i et regneark og importeres igjen senere.

Brainscapes gjeldende hjelpesenter sier at nettstedet og mobilappene nå har de samme kjernefunksjonene for å finne, opprette, dele og øve. Det beskriver også mobilbruk uten nett, manuell resynkronisering og oppdateringer av klasser som allerede er lastet ned til enheten. Det gjør det praktisk mulig å synkronisere igjen etter bruk uten nett, men er ikke et løfte om at hele kontoen finnes som et komplett lokalt bibliotek.

Eksport av personlige kortstokker er fortsatt en [Pro-funksjon](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Det finnes ingen offisiell utgivelse av kildekoden eller løsning for egen drift.

Brainscape er verdt å vurdere når Anki krever for mye konfigurering for dem som skal øve. Det er ingen god utvei for noen som allerede bruker disse innstillingene godt.

## SuperMemo: velg metoden, aksepter en ny start

Dagens SuperMemo.com er en språklæringsplattform for nett, iOS og Android, bygget rundt SuperMemos proprietære repetisjonsmetode. Den er atskilt fra det eldre Windows-produktet som mangeårige SuperMemo-brukere kanskje kjenner.

Dette er et valg av metode og katalog, ikke en sømløs flytting fra Anki. SuperMemo støtter [masseoppretting ved å lime inn rader med spørsmål og svar atskilt med skilletegn](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), med en grense på 100 kort per import. Jeg fant ingen gjeldende offisiell `.apkg`-import eller eksportmulighet for brukere av den driftede tjenesten. Maler, tillegg, mediestruktur og repetisjonshistorikk følger derfor ikke med gjennom den dokumenterte løsningen.

Nedlastede kurs kan brukes uten nett i mobilappene. [Veiledningen for bruk uten nett](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) utelukker KI-funksjoner, oppretting av MemoCards, søk, opptak, statistikk og kurseditoren. Klargjør derfor materialet og synkroniser før du kobler fra.

Velg SuperMemo hvis du ønsker deres egen metode eller kurskatalog så mye at du er villig til å starte med en ny repetisjonsplan. Hvis det viktigste er å bevare den eksisterende planen, løser det feil problem.

## Nibomo: tilgang til hele kildekoden, med den svakeste Anki-importen

Nibomo gir deg eierskap til en stor del av løsningen. [Kodearkivet med MIT-lisens](https://github.com/kirill-markin/flashcards-open-source-app) inneholder nettappen, iOS- og Android-klientene, backend, synkronisering etter bruk uten nett, infrastruktur, [offentlig API](/docs/api/) og [MCP-server](/docs/mcp-connector/). Repetisjonene planlegges med [FSRS](/docs/architecture/#scheduling). Nett-, iOS- og Android-klientene skriver lokalt først, legger endringer i en utboks og synkroniserer når forbindelsen er tilbake.

Det gjør ikke Nibomo kompatibelt med Anki. Nibomo kan ikke lese `.apkg` eller `.colpkg`. Den støttede [flyttingen fra Anki via TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) er en KI-assistert arbeidsflyt der utkast til hovedsakelig tekstbaserte kort gjennomgås. Den bevarer ikke maler, tillegg, kortstokkhierarki, forfallsdatoer, intervaller eller registrerte repetisjoner. Mediereferanser i en TXT-fil er ikke mediefiler, så kortstokker med mye medier må bygges opp og kontrolleres separat.

Nibomos egen `flashcards.zip`-pakke er også mer begrenset enn en sikkerhetskopi. Den flytter kort, tagger og tilhørende medier mellom arbeidsområder i Nibomo. Den flytter ikke repetisjonshistorikk, FSRS-tilstand, fullstendige kortstokkstrukturer, arbeidsområdeinnstillinger eller kontoer.

Den driftede kjernen er [gratis i beta](/nb/pricing/). Å drifte produksjonsløsningen selv er ikke en Docker-installasjon med én kommando: [Veiledningen for egen drift](/docs/self-hosting/) bruker AWS CDK og krever AWS-tjenester pluss Cloudflare, Resend, Sentry, håndtering av hemmelige nøkler, migreringer, sikkerhetskopier, gjenoppretting og oppgraderinger. Docker Compose brukes til utvikling, ikke til den støttede produksjonsdriften.

Bruk Nibomo når hele kildekoden og en backend under din kontroll er grunnen til å bytte, og kortene dine er enkle nok til å bygges opp på nytt på en trygg måte. [Åpne den driftede appen](https://app.nibomo.com/) for å prøve en liten, midlertidig kortstokk. Behold Anki – eller test RemNote, Mochi eller Mnemosyne – når det viktigste er å bevare læringstilstanden nøyaktig.

## Hvilket Anki-alternativ fungerer på iOS uten ubehagelige overraskelser ved flytting?

Et «Anki-alternativ for iOS» kan bety to forskjellige ting: en egen iPhone-app eller en erstatning for [AnkiMobile, som koster $24.99 som engangskjøp](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo og Nibomo har alle iOS-apper. Mnemosyne har ikke det. Spørsmålet om flytting gjenstår likevel:

- **Mochi** bevarer mer enn iOS-alternativene som bare tar imot tekst: Det importerer repetisjonshistorikk fra `.apkg`, med konvertering til Markdown og bare to valg for svarvurdering.
- **RemNote** importerer også repetisjonshistorikk fra `.apkg`, men test **Need to Learn**-køen i stedet for å anta at dagens Anki-plan overlever.
- **Quizlet** passer til distribusjon i klasserommet, men importveien fra Anki er bare tekst, og den nye funksjonen for intervallrepetisjon finnes ennå ikke på mobil.
- **Nibomo** er alternativet med tilgjengelig kildekode og egen iOS-klient, men flytting fra Anki nullstiller læringstilstanden.
- **Brainscape** og **SuperMemo** er bare aktuelle hvis repetisjonsmetoden deres gjør det verdt å bygge opp kortene og planen på nytt.

Før du forlater AnkiMobile på grunn av prisen, bør du sammenligne den med abonnementsutgifter og timene som trengs for å reparere en import. Et engangskjøp av en app kan være billigere enn en gratisapp som gjør en godt innarbeidet samling til et manuelt prosjekt.

## Når det er tryggere å beholde Anki

Å bli værende er et valg, ikke et tegn på at du har mislyktes i å velge noe nyere. Behold Anki hvis noe av dette stemmer:

- Samlingen din er avhengig av egendefinerte maler, CSS, JavaScript eller tillegg.
- Bildetildekking (Image Occlusion), lyd eller andre medier formidler vesentlig innhold.
- Ett notat genererer kort i flere retninger som må forbli koblet sammen.
- Flere års repetisjonshistorikk og gjeldende forfallsdatoer er mer verdifulle enn en ny editor.
- Du er avhengig av en arbeidsflyt på datamaskinen eller en kombinasjon av plattformer som alternativet ikke dekker.
- Erstatningens modus uten nett fungerer bare i en klient du ikke kommer til å bruke.
- Du ønsker i teorien å drifte selv, men vil ikke drifte, sikre, sikkerhetskopiere og oppgradere en server.
- Alternativet løser ikke noe tilbakevendende problem utover å se ryddigere ut.

Anki tilbyr fortsatt et modent økosystem av tillegg, fleksible notat- og kortmaler, FSRS og innstillinger for eldre repetisjonsalgoritmer, lokale installerte klienter og pakkeformater som kan inneholde samlingen. Ingen av produktene over gjenskaper alt dette.

For en mer avgrenset sammenligning av hva du selv kan eie og kontrollere, les [veiledningen til kortapper med åpen kildekode](/blog/best-open-source-flashcard-apps-2026/). Hvis bruk uten nett avgjør valget, skiller [sammenligningen av kortapper uten nett](/blog/best-offline-flashcards-app/) mellom installerte apper, mellomlagret innhold og nettleserfaner.

## En sjekkliste for flytting som fortsatt kan ende med «nei»

Ikke begynn med hele samlingen. Legg opp til en test der du kan akseptere at flyttingen mislykkes.

1. **Lag en gjenopprettingspakke.** Eksporter en `.colpkg` med medier, lagre den utenfor Anki-profilen og oppbevar en ekstra kopi et annet sted.
2. **Velg den vanskelige kortstokken.** Ta med utfyllingskort, egendefinerte felt, kort i begge retninger, kortstokker med understokker, tagger, bilder, lyd og nok repetisjonshistorikk til å avdekke hvordan planen konverteres.
3. **Eksporter formatet mottakeren faktisk støtter.** Bruk `.apkg` med repetisjonsplan, forhåndsinnstillinger og medier ved direkte import. Bruk Notes in Plain Text bare når du aksepterer å bygge opp samlingen på nytt fra bare innholdet.
4. **Noter utgangspunktet.** Skriv ned antall notater og kort, navn på tagger og kortstokker, antall mediefiler, noen forfallsdatoer og intervaller og forventet antall kort fra hver notattype.
5. **Importer til et midlertidig område.** Ikke overskriv kildeprofilen eller slå den første testen sammen med et permanent bibliotek i mottakerappen.
6. **Undersøk innhold og læringstilstand hver for seg.** En riktig for- og bakside beviser ikke at utfyllingskort, medier, søskenkort, repetisjonshistorikk eller neste forfallsdato har overlevd.
7. **Start appen helt på nytt uten nett på alle enhetene du faktisk bruker.** Repeter, rediger, lukk appen helt, åpne den igjen uten forbindelse, koble så til og sjekk en annen enhet.
8. **Undersøk køen før de to repetisjonsplanene begynner å avvike.** Sammenlign de første forfalte kortene og et utvalg intervaller før du vurderer de samme kortene fra den faktiske samlingen i begge appene. Etter den første repetisjonen i den andre appen er planene uavhengige av hverandre.
9. **Test veien ut før du bestemmer deg.** Eksporter fra mottakerappen og undersøk hva du ville fått tilbake hvis du forlater den neste år.
10. **Behold Anki og den urørte sikkerhetskopien.** Ikke slett noen av dem før erstatningen har tålt vanlig bruk og du bevisst har akseptert hvert enkelt tap.

Hvis mottakeren bare tar imot tekst, følg hele [arbeidsflyten for trygg TXT-eksport](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Den skiller `.colpkg`-filen for gjenoppretting fra den flyttbare arbeidsfilen og gjør nullstillingen tydelig.

## Ta avgjørelsen i denne rekkefølgen

Begynn med det du ikke har råd til å miste:

1. Hvis nøyaktige maler, tillegg eller den nåværende køen er avgjørende, behold Anki med mindre en representativ `.apkg` viser at du kan bytte uten å miste det du trenger.
2. Hvis notater og kort bør bli ett system, test RemNote. Kontroller **Need to Learn**-køen, ikke bare de importerte sidene.
3. Hvis lokal Markdown og eksporter du kan undersøke, er viktigere enn Ankis visning, test Mochi.
4. Hvis du vil ha en rendyrket skrivebordsapp med åpen kildekode og direkte Anki-import, test Mnemosyne – og bekreft at mobilbegrensningene passer med rutinene dine.
5. Hvis distribusjon i klasserommet eller en enklere felles repetisjonsrutine er det faktiske problemet, bygg opp et lite sett på nytt i Quizlet eller Brainscape.
6. Hvis du spesifikt vil ha SuperMemos metode, aksepter en ny repetisjonsplan. Hvis du spesifikt vil ha kildekoden til hele løsningen, egen drift, API- og MCP-tilgang, aksepter at innholdet må bygges opp på nytt i Nibomo med noe datatap, og at egen drift krever arbeid.

For en sammenligning funksjon for funksjon av tre svært ulike modeller, se [Anki vs Quizlet vs Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Den nyttige regelen er enkel: Bytt når gevinsten er konkret og du har undersøkt hva som går tapt gjennom en reell test. Hvis den representative kortstokken din ikke lar seg flytte ordentlig, er det å beholde Anki ikke et forsiktig reservevalg. Det er resultatet av sammenligningen.
