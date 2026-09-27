---
title: "De bedste open source-apps til læringskort i 2026: 6 FOSS-muligheder sammenlignet"
description: "Sammenlign seks vedligeholdte open source-apps til læringskort på kildekode, offlinedata, synkronisering, Anki-import, eksport, egen hosting og gendannelse."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "bedste open source-apps til læringskort"
  - "open source-app til læringskort"
  - "open source intervalbaseret repetition"
  - "læringskort egen hosting"
  - "offline-app til læringskort"
  - "open source-alternativ til Anki"
  - "FOSS læringskort"
---

Anki er stadig den bedste open source-app til læringskort for de fleste i 2026. Det bliver interessant, når »open source« ikke er dit eneste ufravigelige krav.

Måske har du brug for en browserapp på din egen server. Eller et kortsæt, du kan læse som almindelig Markdown. Eller et privat notesystem, der opretter læringskort. De krav peger på forskellige produkter, og et offentligt GitHub-repository afgør ikke valget.

En åben computerapp kan eksistere ved siden af en lukket iPhone-app. En Docker-container kan køre en browsergrænseflade uden at synkronisere med installerede klienter. En import kan bevare ordene og samtidig miste de skabeloner, medier og mange års repetitionshistorik, der gjorde samlingen nyttig.

Seks projekter opfyldte kravene i denne gennemgang. Jeg sammenlignede deres licenserede kildekode, seneste stabile udgave, lokale data, repetitionsplanlægger, synkronisering, Anki-migrering, eksport og præcis hvilke dele man kan hoste selv. Det sidste er vigtigere, end de fleste funktionslister giver indtryk af.

> **Min tilknytning:** Jeg hedder Kirill Markin og udvikler [Nibomo](https://nibomo.com/), en af de seks apps nedenfor. Dets MIT-repository dækker webappen, de native klienter, backend, synkronisering og infrastruktur. Jeg har ikke placeret det øverst. Anki er det sikrere standardvalg, Mnemosyne har en mere etableret vej til migrering fra Anki, og flere af mulighederne her er langt nemmere at drive.

**Fakta kontrolleret:** 5. september 2026. Stabile udgivelser holdes adskilt fra arbejde, der kun findes på standardbranchen.

![En vandrer sammenligner seks åbne rygsække og afprøver et reservesæt, inden en open source-app til læringskort vælges](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Det korte svar

| Dit vigtigste krav | Bedste match | Hvorfor | Begrænsningen, du bør teste først |
| --- | --- | --- | --- |
| Et pålideligt alsidigt system eller en kompleks eksisterende samling | [Anki](https://apps.ankiweb.net/) | Modne kort og skabeloner, FSRS, tilføjelser, mange klienter og omfattende pakkeeksport | Den officielle iOS-app og AnkiWeb er ikke en del af computerappens åbne kildekode; egen hosting giver synkronisering, ikke AnkiWeb |
| Et fokuseret alternativ til computer med etableret Anki-import | [Mnemosyne](https://mnemosyne-proj.org/) | Lokal læring, import af Ankis korttyper og læringsdata samt en synkroniseringsserver, du selv kan køre | Version 2.11 er stadig den seneste stabile udgave; Android kan repetere, men ikke redigere |
| Noter og læringskort i én lokal vidensbase | [SiYuan](https://b3log.org/siyuan/en/) | Native apps med offlinebrug, indbygget FSRS og en reel browserapp hostet med Docker | Docker-klienter kan ikke synkronisere med de native apps, og flere import- og eksportkommandoer mangler i Docker |
| Kildekode til web, mobil, backend og infrastruktur | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Ét MIT-monorepo med dokumenteret produktionsopsætning | Den understøttede produktionsløsning er bygget omkring AWS, og migrering fra Anki medfører datatab |
| En nyere computerapp med lokale data som udgangspunkt og direkte APKG-import | [Recall](https://github.com/Madlezz/Recall) | FSRS, computerudgaver, en PWA, lokale databaser og valgfri krypteret videresendelse | Importen bevarer kun et øjebliksbillede af repetitionsplanen, bruger de første to notefelter og springer lyd over |
| Læsbare Markdown-kortsæt uden netværksafhængighed | [Essentialist](https://github.com/essentialist-app/essentialist) | Almindelige kortsætfiler og en bevidst offline app til computer og Android | Ingen synkronisering, og fremskridt ligger i en separat skjult database |

Tabellen giver ikke point for antallet af funktioner. Begynd med det, der under ingen omstændigheder må gå galt. Har du ti års Anki-repetitioner, er en trofast migrering vigtigere end en pænere grænseflade. Driver du en løsning på en skole, kan browseradgang og en afprøvet gendannelse være vigtigere end tilføjelser.

## Hvad der talte som en open source-app til læringskort

Jeg stillede fire krav:

1. **Den centrale læringsfunktion har offentliggjort kildekode og en udtrykkelig open source-licens.** En mappe med integrationer omkring en lukket kerne tæller ikke.
2. **Intervalbaseret repetition fungerer i dag.** Et punkt på køreplanen eller en almindelig quiztilstand er ikke nok.
3. **Der findes en udgivet app eller en tydeligt dokumenteret officiel driftsopsætning.** Nye commits alene gør ikke en prototype til en sikker anbefaling.
4. **Officielle kilder beskriver datahåndteringen grundigt nok til, at den kan gennemgås.** Jeg skulle have konkrete svar om offlinelagring, synkronisering, import/eksport eller hosting frem for løse løfter om, at brugerne »ejer deres data«.

Antallet af stjerner var ikke et adgangskrav. De belønner alder og omtale lige så meget som produktets egnethed. Modenhed betyder dog stadig noget. Anki, Mnemosyne og SiYuan har etablerede udgivelser og driftsmodeller. Recall og Essentialist kom med som anbefalinger til mere afgrænsede behov, fordi funktionerne i deres udgivne versioner er dokumenteret godt nok til det.

»Vedligeholdt« kræver også to kontroller. En tagget udgivelse viser, hvad brugerne kan installere; standardbranchen viser, hvor projektet er på vej hen. Essentialist er det tydeligste eksempel. Dokumentationen til den stabile udgave angiver SM-2, mens dokumentationen på standardbranchen angiver FSRS. Tabellen nedenfor angiver SM-2.

## Seks FOSS-apps til læringskort sammenlignet

| App | Kontrolleret stabil version | Platforme | Offlinedata | Repetitionsplanlægger | Synkronisering | Anki-migrering og mulighed for at flytte videre | Hvad du kan hoste selv |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. august 2026 | Windows, macOS, Linux; separate Android- og iOS-klienter; AnkiWeb | Installerede klienter bruger lokale samlinger til læring | FSRS eller ældre SM-2 | AnkiWeb eller den officielle synkroniseringsserver til egen hosting | Importerer tekst, APKG/COLPKG og Mnemosyne-databaser; eksporterer tekst eller pakker med valgfri medtagelse af medier og planlægningsdata | **Kun synkroniseringsserver.** Hverken selvhostet AnkiWeb eller en repetitionsgrænseflade i browseren |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. november 2023; fortsat aktivitet i repositoryet i 2026 | Windows, macOS, Linux, Android; begrænset repetition i browser | Computerappen er lokal; Android kan repetere offline, men ikke redigere | Adaptiv vurdering af genkaldelse fra 0 til 5 | Indbygget synkronisering til en computer eller en instans uden skærm | Dokumenterer officielt fuld Anki-import med brugerdefinerede korttyper og læringsdata; eksport til deling er ikke en fuld sikkerhedskopi | **Synkronisering og begrænset repetition i browser.** Browserserveren har ingen sikkerhedsfunktioner |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. august 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; browser via Docker | Native klienter gemmer arbejdsområdet lokalt | FSRS | Betalt officiel synkronisering med ende-til-ende-kryptering eller betalt integration til tredjeparts S3/WebDAV | Appen som helhed importerer Markdown/data og eksporterer flere dokument- og dataformater; ingen dokumenteret APKG-import | **Komplet browserapp.** Docker kan ikke synkronisere med native klienter og udelader visse import- og eksportkommandoer |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. september 2026 | Web, iOS, Android | IndexedDB på web; SQLite på iOS; Room oven på SQLite på Android; lokale ændringer sættes i kø til synkronisering | FSRS | Hostet backend eller backend opsat af den driftsansvarlige | Eget ZIP-format flytter kort, tags, kildemetadata og tilknyttede medier, men ikke kortsæt, læringstilstand, indstillinger eller konti; ingen APKG-import | **Komplet web- og backendløsning.** Produktionsopsætningen er bygget omkring AWS; private native apps bygges separat |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. juli 2026 | Windows, macOS, Linux; installerbar PWA | SQLite på computer; IndexedDB i browseren; ingen konto eller telemetri som standard | FSRS | Mappesynkronisering på computer eller valgfri krypteret videresendelse via Cloudflare Worker/R2 | APKG-import på computer læser de første to felter, kortsæt, tags, et omtrentligt øjebliksbillede af repetitionsplanen og billeder; eksport som JSON og Recall-arkiv | **Kun krypteret videresendelse af øjebliksbilleder.** Den hoster ikke PWA'en |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. oktober 2025; fortsat arbejde på kildekoden i 2026 | Android APK, macOS DMG, Linux Flatpak; Windows bygges fra kildekoden | Ingen netværksadgang; kortsættenes indhold er Markdown | Stabil udgave: SM-2; standardbranch: FSRS | Ingen | Markdown bevarer kortenes indhold; en skjult ledsagende database bevarer fremskridt | **Intet at hoste.** Sikkerhedskopiér Markdown-filen og den tilhørende database sammen |

## 1. Anki er det sikreste standardvalg

Anki vinder på de mindre glamourøse detaljer. Det kan håndtere komplekse notetyper, generere flere kort fra samme note via skabeloner, opbevare medier sammen med samlingen og bevare årevis af planlægningsdata. Den stabile computerudgave i denne gennemgang er [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Den nyere 26.09b2 er markeret som beta og danner derfor ikke grundlag her.

Det varierer, hvilke dele der er open source. [Computerappens repository bruger AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), med angivne undtagelser for medfølgende komponenter. [AnkiDroid](https://github.com/ankidroid/Anki-Android) er et separat open source-projekt til Android. AnkiMobile og AnkiWeb er officielle produkter, men deres kildekode indgår ikke i de repositories. Den længere forklaring findes i [Er Anki open source?](/blog/is-anki-open-source/).

Installerede klienter opbevarer samlingerne lokalt, så almindelig repetition fungerer uden forbindelse. AnkiWeb er onlineløsningen. Hvis offlinebrug er afgørende, skelner [Virker Anki offline?](/blog/does-anki-work-offline/) mellem det, der bliver lokalt, og det, der venter på synkronisering.

Anki understøtter [FSRS og sin ældre planlægger](https://docs.ankiweb.net/deck-options.html). Dets eksportformater giver det stærkeste udgangspunkt for migrering i denne gruppe. En [COLPKG indeholder hele samlingen med planlægningsdata](https://docs.ankiweb.net/exporting.html), mens APKG-eksporter kan medtage planlægningsoplysninger og medier, hvis du vælger det. Anki importerer også tekst, Anki-pakker og Mnemosyne 2.0-databaser.

En så omfattende kildepakke garanterer ikke en perfekt import andre steder. Modtageren skal stadig forstå pakkens skabeloner, regler for kortgenerering, mediereferencer og planlægningsfelter. Den har blot flere oplysninger at arbejde med end i en CSV-fil.

Den [officielle server til egen hosting](https://docs.ankiweb.net/sync-server.html) er bevidst begrænset. Den synkroniserer kompatible Anki-klienter; den leverer ikke AnkiWeb, repetition i browseren eller en kontoportal. Som standard lytter den via ukrypteret HTTP, og vejledningen anbefaler at holde den på et lokalt netværk eller sætte en VPN eller HTTPS-reverseproxy foran. Klient- og serverversionerne skal også forblive kompatible.

Vælg Anki, når bevarelse af samlingen, skabeloner, tilføjelser eller bred klientunderstøttelse kommer først. Se kun andre steder hen, når et konkret krav, såsom en selvhostet browsergrænseflade eller fuldt offentliggjort mobilkode, vejer tungere.

## 2. Mnemosyne holder fokus på lokal læring

Mnemosyne føles som et læringsværktøj til computeren, fordi det er præcis, hvad det er. Du får ikke en vidensbase eller cloudplatform med i købet. Du får en lokal database, en traditionel arbejdsgang med intervalbaseret repetition, en Android-app til repetition og en synkroniseringsserver, der kan køre på en computer med eller uden skærm.

Den seneste stabile udgave er stadig [2.11 fra november 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Repositoryet fik ændringer i 2026, men det gør ikke ændringerne til en stabil installationspakke. Test 2.11 på de operativsystemer, du regner med at beholde de næste par år.

Licensvilkårene kan heller ikke beskrives med én enkelt licensbetegnelse. [Licensoversigten i roden](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) tildeler openSM2sync LGPL v3 og resten af Mnemosyne separate vilkår. [Hovedprogrammets licens](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) anvender AGPL v3 med en ekstra bestemmelse om, at navnet Mnemosyne skal forblive tydeligt synligt i afledte værker, og at den præcise udformning drøftes med vedligeholderne. Læs teksten, før du distribuerer en ændret udgave.

[Android-klienten kan repetere offline, men kan ikke redigere kort](https://mnemosyne-proj.org/help/android-client). Andre enheder kan bruge en server til repetition i browseren, som startes fra computerappen, men den officielle funktionsside advarer om, at serveren ikke har sikkerhedsfunktioner. Det er en praktisk grænseflade på lokalnettet, ikke en færdig offentlig webapp.

Migrering er Mnemosynes bedste argument mod blot at blive hos Anki. Den officielle funktionsside dokumenterer [fuld Anki-import, inklusive brugerdefinerede korttyper og læringsdata](https://mnemosyne-proj.org/features). Den [indbyggede synkronisering](https://mnemosyne-proj.org/help/syncing) fletter kort og læringsdata og kan bruge en maskine, du selv kontrollerer.

Den normale eksportkommando er en fælde, hvis du vil sikkerhedskopiere. Den er beregnet til at dele udvalgte kort og udelader dine læringsdata. For at flytte eller gendanne hele systemet siger [vejledningen til flere computere](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers), at du skal kopiere hele datamappen.

Mnemosyne er det stærkeste fokuserede open source-alternativ til Anki her. Til gengæld er der langt mellem stabile udgivelser, redigering på mobil er begrænset, og browserløsningen kræver omhyggelig afgrænsning på netværket.

## 3. SiYuan passer, når noterne er det egentlige system

SiYuan er en app til videnshåndtering med privatliv i centrum og læringskort indbygget i samme model af blokke og dokumenter. Det er nyttigt, når dine noter skaber repetitionsmaterialet. Det er et stort apparat, hvis du bare vil have en kø af kort.

[AGPL-3.0-repositoryet](https://github.com/siyuan-note/siyuan) linker til grænsefladen, kernen, mobilapps, datalaget og FSRS-komponenten. Version [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) er den stabile udgave, der er kontrolleret her. Computer- og mobilklienter gemmer arbejdsområdet lokalt og fortsætter med at fungere offline.

Synkronisering er ikke en del af den gratis løsning med lokal lagring. Den [officielle prisside](https://b3log.org/siyuan/en/pricing.html) tilbyder officiel synkronisering med ende-til-ende-kryptering i abonnementet, mens betalte Pro-funktioner tilføjer integration til dit eget S3- eller WebDAV-lager. Projektet advarer også mod at placere et aktivt arbejdsområde i en almindelig filsynkroniseringsmappe, fordi samtidige ændringer kan beskadige eller overskrive data.

Docker kører en reel browserapp, men bliver ikke til en synkroniseringsserver for de installerede apps. [Docker-dokumentationen til v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) siger, at computer- og mobilklienter ikke kan oprette forbindelse til den. Docker udelader også Markdown-import og eksport til PDF, HTML og Word. De kommandoer findes i den native app, så det ville være misvisende at kopiere den generelle funktionsliste ind i en plan for Docker-drift.

Jeg fandt ingen officiel APKG-import. SiYuan kan flytte Markdown og sine egne dataformater, men en Anki-samling kræver en mere bevidst genopbygning.

Vælg SiYuan, når vidensbasen er det primære produkt, og læringskort hører hjemme i den. Hvis du vil have en direkte erstatning for Anki, har Mnemosyne og Anki tydeligere rammer for migrering.

## 4. Nibomo åbner mere af systemet og lader dig stå for driften

Nibomo offentliggør den største del af det samlede produkt i denne sammenligning. MIT-monorepoet indeholder webappen, iOS- og Android-klienter, backend, autentificeringstjeneste, synkronisering, administrationsapp, databasemigreringer og AWS-infrastruktur. Den stabile udgave her er [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Senere arbejde på standardbranchen regnes ikke som udgivne funktioner.

[Arkitekturen](/docs/architecture/) tager udgangspunkt i offlinebrug, men »offline« betyder noget lidt forskelligt på hver klient. Webappen opbevarer sin lokale primære datakopi i IndexedDB. iOS bruger SQLite, og Android bruger Room oven på SQLite. Ændringer skrives lokalt og sættes i en udbakke før synkronisering. Det håndterer en afbrudt forbindelse; det gør ikke browserlager permanent og fjerner ikke behovet for at teste opstart fra lukket tilstand på hver enhed.

Nibomos eget ZIP-format overfører indhold og er ikke en sikkerhedskopi af en konto. I v1.23.0 indeholder dets [pakkeskema](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) indhold på for- og bagside, tags, korttype, kildemetadata og pakkemetadata; de medier, der henvises til, pakkes separat. Det indeholder ikke kortsættenes struktur, repetitionshistorik, FSRS-tilstand, arbejdsområdeindstillinger eller konti.

Der er ingen APKG-import i v1.23.0. Den dokumenterede [arbejdsgang til migrering via Anki TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) bruger eksporteret tekst til at genopbygge kort og kræver en menneskelig gennemgang. Skabeloner, planlægningstilstand, kortsættenes struktur og medfølgende medier overføres ikke automatisk ad den vej. Det er rimeligt til et enkelt tekstbaseret kortsæt og et dårligt valg til en stærkt tilpasset samling.

[Vejledningen til egen hosting](/docs/self-hosting/) er lige så tydelig. Produktion bruger en AWS CDK-stack med RDS, Cognito, API Gateway og Lambda, S3 og CloudFront, hemmeligheder, alarmer og sikkerhedskopier. Cloudflare DNS, Resend-mail og Sentry-konfiguration ligger uden for AWS. Docker Compose bruges til lokal udvikling; det er ikke den understøttede produktionspakke. Driftsansvarlige, der vil have private iOS- eller Android-apps, bygger og distribuerer dem separat.

Vælg Nibomo, når ejerskab over hele kildekoden til web, native apps og backend retfærdiggør driftsarbejdet. Vælg Anki eller Mnemosyne, når bevarelse af en eksisterende samling er det vigtigste krav.

## 5. Recall er moderne, men læs importfunktionen grundigt

Recall er det yngste projekt blandt hovedanbefalingerne. Det kom med, fordi [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) tilbyder versionsmærkede computerudgaver, en installerbar PWA, udtrykkeligt beskrevet lokal lagring, FSRS, dataeksport og en dokumenteret synkroniseringsløsning til egen hosting.

Computerappen har MIT-licens og bruger SQLite; PWA'en bruger IndexedDB. Ingen af dem kræver en konto, og ifølge projektet er telemetri slået fra som standard. Computerudgaverne dækker Windows, macOS og Linux.

APKG-importen er nyttig, men README-filens formulering »review history« lover for meget i forhold til den taggede implementering. [Importkoden i v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) læser ikke Ankis repetitionslog. Den læser kortets aktuelle tilstand, interval, antal repetitioner og glemte svar på tidligere indlærte kort samt FSRS-stabilitet og -sværhedsgrad, når Anki har gemt dem. For ældre kort uden de FSRS-felter estimerer Recall værdierne ud fra SM-2.

Der er også begrænsninger i konverteringen af indhold. Importen bruger notens første to felter som for- og bagside frem for at genskabe Ankis notetyper og skabeloner. Den bevarer kortsætnavne og tags. Den udpakker almindelige billedformater og omskriver henvisningerne til dem, men springer lyd og andre medier over. Da importfunktionen er en Tauri-kommando, er direkte APKG-migrering en computerfunktion, ikke en funktion i browser-PWA'en.

Det er langt bedre end at genopbygge ud fra ren tekst, men bevarer ikke samlingen fuldt ud. Test cloze-kort med udeladt tekst, kort fra samme note, ekstra felter, HTML/CSS, billeder, lyd, repetitionsdatoer og gentagne noter, før du stoler på en større flytning.

Recall har to veje til synkronisering. Computerappen kan skrive et øjebliksbillede til en mappe, som Dropbox, Drive eller et andet filsynkroniseringsværktøj håndterer. Den valgfrie videresendelsestjeneste bruger en Cloudflare Worker og en R2-bucket. Ifølge det taggede [synkroniseringsdesign](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) krypterer klienterne øjebliksbilleder med AES-GCM før upload; tjenesten ser krypteret tekst, ikke kortdata eller nøglen. Opdateringer bruger optimistisk samtidighedskontrol med ét nyt forsøg ved en konflikt, men fletter stadig komplette øjebliksbilleder frem for enkelte felter. Der er ingen offentlig videresendelsestjeneste betalt af vedligeholderne; du sætter den selv op og indtaster dens URL.

Eksport som JSON og Recall-arkiv giver en vej ud. Gendan en af dem i en ren profil, før du kalder den en sikkerhedskopi.

Vælg Recall, når du vil have en moderne computerapp/PWA med lokale data som udgangspunkt og kan acceptere et ungt projekt samt en import, der bevarer et nyttigt øjebliksbillede frem for hele Anki-systemet.

## 6. Essentialist gør kortsættet let at læse, men gemmer tilstanden separat

Essentialist er den mest afgrænsede løsning her. Hvert kortsæt er en Markdown-fil, som du kan åbne i en teksteditor, lægge i versionsstyring eller kopiere med almindelige filværktøjer. Appen foretager bevidst ingen netværksanmodninger.

Den seneste stabile udgave er [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Den omfatter pakker til Android, macOS og Linux; Windows-brugere bygger fra kildekoden. Den [taggede README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) angiver SM-2 som repetitionsplanlægger.

[README-filen på standardbranchen](https://github.com/essentialist-app/essentialist/blob/main/README.md) angiver nu FSRS, og repositoryets kildekode fik ændringer i 2026. Det viser en nyttig retning, men er ingen grund til at kalde den færdigbyggede 2025-udgave for FSRS-baseret.

Markdown dækker også mindre, end det først ser ud til. Kortteksten ligger i den synlige fil, mens fremskridt ligger i en skjult database med navnet `.<deck file>.db`. Kopierer du `sample.md` uden `.sample.md.db`, bevarer du spørgsmål og svar, men mister læringstilstanden.

Der er hverken indbygget synkronisering mellem enheder eller en server. Du kan lægge filerne i din egen synkroniserede mappe, men så står du selv for konflikthåndtering og gendannelse.

Vælg Essentialist, når læsbar Markdown og en arbejdsgang uden netværk er selve pointen. Det er ikke et gnidningsfrit system på tværs af enheder, og én synlig fil er ikke en komplet sikkerhedskopi.

## Fire aktive projekter, der er værd at følge

Disse projekter har haft reel udvikling i 2026. De ligger uden for de seks hovedvalg, fordi en anbefaling kræver mere end interessant kildekode.

| Projekt | Det, der allerede er konkret | Det, der stadig forhindrer en hovedanbefaling |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-kildekode, FSRS/SM-2/Leitner-planlæggere, Docker-opsætning, en administreret tjeneste, CSV-import og dataeksport | Oprettet i juli 2026; ingen versionsmærket appudgivelse. GitHub-udgivelsen er en lydpakke frem for en milepæl for appen |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-webapp med FSRS, CSV-import, billedmaskering og dokumenteret Supabase/Vercel-arkitektur | Ingen tagget udgivelse, og den officielle dokumentation afgrænser endnu ikke offlinebrug, eksport og gendannelse ved egen hosting fuldt ud |
| [Prep](https://github.com/Zamua/prep-app) | MIT-kildekode, FSRS, hostet brug og dokumenteret opsætning på celld-kørselsmiljøet, der kan hostes selv | Ingen tagget udgivelse; egen hosting kræver også drift af celld og objektlager frem for blot en selvstændig app til læringskort |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Kotlin-mobilapp med GPLv3, FSRS/SM-2, en Android-udgivelse og APKG-import med skabeloner og medier | Oprettet i 2026; iOS kræver bygning fra kildekoden, og den officielle dokumentation beskriver ikke generel synkronisering mellem telefoner |

Flere kendte navne falder fra af enklere grunde. Mochis [open source-repository](https://github.com/mochi-cards/open-source) er en samling integrationer, ikke selve appen. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) er open source og kan hostes selv, men den officielle README placerer stadig intervalbaseret repetition under »Features coming soon«. [OpenCards](https://github.com/holgerbrandl/opencards) har ikke haft en udgivelse siden [v2.5.1 i januar 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), og repositoryet har ikke fået kodeændringer siden 2018.

Hvis adgang til kildekoden er valgfrit, indeholder den [bredere sammenligning af Anki-alternativer](/da/blog/best-anki-alternatives/) produkter, der besvarer et andet spørgsmål.

## Test migrering i fem separate lag

»Importerer Anki« siger næsten ingenting uden en forklaring på, hvad der faktisk følger med. En migrering kan lykkes i ét lag og fejle i fire andre.

| Lag | Hvad du skal sammenligne | Det misvisende tegn på succes |
| --- | --- | --- |
| Kortindhold | Alle felter, cloze-markører, tags, specialtegn og gentagne noter | Det samlede antal kort er nogenlunde rigtigt |
| Struktur | Notetyper, skabeloner, genererede kort fra samme note og indlejrede kortsæt | Teksten fra for- og bagsiden dukkede op et sted |
| Medier | Billeder og lyd blev kopieret, kan findes lokalt og fungerer offline | Importen genkendte filnavnene |
| Læringstilstand | Repetitionslog, tilstand, repetitionsdato, interval, glemte svar på tidligere indlærte kort og planlæggerparametre | De importerede kort findes, men begynder ubemærket forfra som nye |
| Flytning videre og gendannelse | En dokumenteret eksport eller sikkerhedskopi kan genopbygge samme system et andet sted | En læsbar teksteksport behandles som en fuld sikkerhedskopi |

Lav et bevidst besværligt testkortsæt, før du flytter den rigtige samling. Medtag ekstra felter, cloze-kort, skabeloner til almindelige og omvendte kort, indlejrede kortsæt, tags, billeder, lyd og nok repetitionshistorik til at afsløre, om modtageren bevarede den.

Behold den urørte sikkerhedskopi af kilden. Sammenlign antal noter, kort og medier hver for sig efter importen. Undersøg repetitionsdatoerne frem for at stole på en besked om, at »planlægningsdata er importeret«. Repetér offline på hver enhed, du vil bruge. Lav derefter midlertidige, modstridende ændringer på to enheder, og se, hvad synkroniseringen gør.

Brug begge systemer i et par dage. At slette den gamle samling er det sidste trin, ikke bevis på, at den nye virker.

## Egen hosting er først gennemført efter en gendannelse

Produkterne ovenfor bruger »egen hosting« om meget forskellige løsninger:

- Anki og Mnemosyne kører **synkroniseringstjenester**, mens de installerede klienter fortsat er grænsefladen til læring.
- SiYuan Docker kører en **browserapp**, som native klienter ikke kan bruge som synkroniseringsserver.
- Recall kører en **krypteret videresendelsestjeneste for øjebliksbilleder**, ikke selve PWA'en.
- Nibomo sætter en **komplet web- og backendløsning** i drift, mens native apps bygges separat.
- Essentialist har **ingen server**; det, du ejer og kontrollerer, er de lokale filer.

Når det står klart, skal du teste den del, som driftsansvarlige ofte udskyder:

1. Opret kort, vedhæft medier, gennemfør repetitioner og synkroniser fra to klienter.
2. Gem alle dokumenterede databaser, buckets til objektlagring, lokale filer, hemmeligheder og konfigurationsværdier.
3. Gendan i en tom konto, på en tom maskine eller i en isoleret opsætning.
4. Sammenlign antal kort, medier, repetitionshistorik, hvilke kort der er klar til repetition, login og klientsynkronisering.
5. Opgradér den gendannede kopi, og gennemfør endnu en repetitionscyklus.

Hvis genopbygningen stadig afhænger af den gamle maskine, har du en kørende tjeneste. Du har ikke en verificeret sikkerhedskopi.

## Ofte stillede spørgsmål

### Hvad er den bedste open source-app til læringskort i 2026?

Anki er det bedste standardvalg for de fleste, der vil lære. Det kombinerer en moden samlingsmodel, FSRS, bred klientunderstøttelse og de mest omfattende egne formater til sikkerhedskopiering og eksport. Forbeholdet er, at den officielle iOS-app og webløsning ikke er omfattet af computerappens open source-repository, og at serveren til egen hosting leverer synkronisering frem for læring i browseren.

### Hvad er det bedste open source-alternativ til Anki?

Mnemosyne er det mest etablerede fokuserede alternativ og dokumenterer officielt import af Ankis brugerdefinerede korttyper og læringsdata. Recall ser mere moderne ud og importerer APKG-filer direkte på computer, men konverterer de første to notefelter, bevarer kun et øjebliksbillede af repetitionsplanen, importerer billeder frem for lyd og medtager ikke den fulde repetitionslog.

### Kan jeg hoste Anki selv?

Ja, du kan køre Ankis officielle synkroniseringsserver til kompatible klienter. Den er dog ikke en selvhostet erstatning for AnkiWeb: Der er ingen grænseflade til læring i browseren.

### Betyder open source, at appen fungerer offline?

Nej. Open source beskriver licensvilkår og adgang til kildekoden. Offlinefunktioner afhænger af, hvor klienten gemmer data, og hvilke handlinger der kræver en tjeneste. Det omvendte gælder også: En app kan gemme data lokalt uden at offentliggøre sin centrale kildekode.

### Garanterer egen hosting, at data kan flyttes?

Nej. Egen hosting bestemmer, hvor en tjeneste kører. Muligheden for at flytte data afhænger af eksport, komplette sikkerhedskopier og en gendannelse, du faktisk har testet. En database på din egen server kan stadig være svær at migrere, og et læsbart Markdown-kortsæt kan stadig udelade repetitionstilstand, der ligger i en fil ved siden af.

## Min anbefaling

Behold eller vælg **Anki**, medmindre en af begrænsningerne giver et reelt problem. Vælg **Mnemosyne** til fokuseret lokal læring på computer og etableret Anki-import. Brug **SiYuan**, når læringskort hører hjemme i en større vidensbase. Overvej **Nibomo**, når ejerskab over hele kildekoden til web, native apps og backend retfærdiggør en produktionsløsning på AWS. Vælg **Recall** til en moderne klient med lokale data som udgangspunkt, efter at du har testet konverteringens begrænsninger. Vælg **Essentialist**, når almindelig Markdown og nul netværksadgang betyder mere end synkronisering.

Den bedste open source-app til læringskort er ikke repositoryet med den længste funktionsliste. Det er den, hvis kildekode, offlinedata, migrering, synkronisering, hosting og gendannelse passer til det system, du faktisk er villig til at eje og drive.
