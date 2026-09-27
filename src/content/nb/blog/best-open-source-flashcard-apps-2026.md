---
title: "De beste appene for puggekort med åpen kildekode i 2026: 6 FOSS-alternativer sammenlignet"
description: "Sammenlign seks vedlikeholdte apper for puggekort med åpen kildekode: kildekode, data uten nett, synkronisering, Anki-import, eksport, egen drift og gjenoppretting."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "beste apper for puggekort med åpen kildekode"
  - "puggekort app åpen kildekode"
  - "intervallrepetisjon åpen kildekode"
  - "puggekort egen drift"
  - "puggekort app uten nett"
  - "Anki alternativ åpen kildekode"
  - "FOSS puggekort"
---

Anki er fortsatt den beste appen for puggekort med åpen kildekode for de fleste i 2026. Valget blir mer interessant når «åpen kildekode» ikke er det eneste ufravikelige kravet ditt.

Kanskje du trenger en nettleserapp på din egen server. Eller en kortstokk du kan lese som ren Markdown. Eller et privat notatsystem som lager puggekort. Slike krav peker mot ulike produkter, og et offentlig GitHub-kodearkiv avgjør ikke valget.

En skrivebordsklient med åpen kildekode kan eksistere side om side med en lukket iPhone-app. En Docker-container kan kjøre et nettlesergrensesnitt uten å synkronisere med de installerte klientene. En import kan hente inn ordene, men miste malene, mediefilene og årene med repetisjonshistorikk som gjorde samlingen nyttig.

Seks prosjekter besto denne gjennomgangen. Jeg sammenlignet den lisensierte kildekoden, siste stabile utgave, lokale data, repetisjonsalgoritmen, synkronisering, migrering fra Anki, eksport og nøyaktig hva du kan drifte selv. Det siste skillet betyr mer enn de fleste funksjonslister gir inntrykk av.

> **Om min tilknytning:** Jeg er Kirill Markin, og jeg utvikler [Nibomo](https://nibomo.com/), en av de seks appene nedenfor. MIT-kodearkivet omfatter nettappen, de plattformspesifikke klientene, backend, synkronisering og infrastruktur. Jeg har ikke satt den på førsteplass. Anki er det tryggere standardvalget, Mnemosyne har en mer etablert vei for migrering fra Anki, og flere av alternativene her er mye enklere å drifte.

**Fakta kontrollert:** 5. september 2026. Stabile utgaver er skilt fra arbeid som bare finnes i standardgrenen.

![En turgåer sammenligner seks åpne ryggsekker og tester et reservesett før valget av en app for puggekort med åpen kildekode](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Det korte svaret

| Ditt viktigste krav | Beste valg | Hvorfor | Begrensningen du bør teste først |
| --- | --- | --- | --- |
| Et pålitelig allroundsystem eller en kompleks eksisterende samling | [Anki](https://apps.ankiweb.net/) | Modne kort og maler, FSRS, tillegg, mange klienter og innholdsrike pakkeeksporter | Den offisielle iOS-appen og AnkiWeb inngår ikke i den åpne skrivebordskoden; egen drift gir deg synkronisering, ikke AnkiWeb |
| Et rendyrket skrivebordsalternativ med etablert Anki-import | [Mnemosyne](https://mnemosyne-proj.org/) | Lokal øving, import av Anki-korttyper og læringsdata, og en synkroniseringsserver du kan kjøre selv | Versjon 2.11 er fortsatt siste stabile utgave; Android kan repetere, men ikke redigere |
| Notater og puggekort i én lokal kunnskapsbase | [SiYuan](https://b3log.org/siyuan/en/) | Installerte apper som fungerer uten nett, innebygd FSRS og en fullverdig nettleserapp via Docker | Docker-klienter kan ikke synkronisere med de installerte appene, og flere import- og eksportkommandoer mangler i Docker |
| Kildekode for nett, mobil, backend og infrastruktur | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Ett MIT-monorepo med dokumentert produksjonsoppsett | Det støttede produksjonsoppsettet er bygget rundt AWS, og migrering fra Anki medfører tap |
| En nyere skrivebordsapp med lokal lagring som utgangspunkt og direkte APKG-import | [Recall](https://github.com/Madlezz/Recall) | FSRS, skrivebordsutgaver, PWA, lokale databaser og en valgfri kryptert relétjeneste | Importen bevarer bare et øyeblikksbilde av repetisjonsplanen, bruker de to første notatfeltene og hopper over lyd |
| Lesbare Markdown-kortstokker uten nettverksavhengighet | [Essentialist](https://github.com/essentialist-app/essentialist) | Vanlige kortstokkfiler og en skrivebords-/Android-app som bevisst fungerer helt uten nett | Ingen synkronisering, og fremdriften ligger i en separat skjult database |

Dette er ingen poengtabell for funksjoner. Begynn med feilene du ikke kan godta. Har du ti år med Anki-repetisjoner, betyr det mer å bevare samlingen ved migrering enn å få et penere grensesnitt. Drifter du en løsning for en skole, kan nettlesertilgang og en utprøvd gjenoppretting bety mer enn tillegg.

## Hva som kvalifiserte som en app for puggekort med åpen kildekode

Jeg brukte fire krav:

1. **Kjernefunksjonene for læring har publisert kildekode og en uttrykkelig lisens for åpen kildekode.** En samling integrasjoner rundt en upublisert kjerne teller ikke.
2. **Intervallrepetisjon fungerer i dag.** En planlagt funksjon eller en generell quizmodus er ikke nok.
3. **Det finnes en utgitt programversjon eller et tydelig dokumentert offisielt driftsoppsett.** Nylige commits alene gjør ikke en prototype til en trygg anbefaling.
4. **Offisielle kilder beskriver datahåndteringen godt nok til at den kan etterprøves.** Jeg trengte konkrete svar om lagring uten nett, synkronisering, import/eksport eller drift, ikke et vagt løfte om at brukerne «eier dataene sine».

Antall stjerner var ikke et opptakskrav. De belønner alder og omtale like mye som hvor godt produktet passer. Modenhet betyr likevel noe. Anki, Mnemosyne og SiYuan har etablerte utgaver og driftsmodeller. Recall og Essentialist fikk mer avgrensede anbefalinger fordi funksjonaliteten i de utgitte versjonene er godt nok dokumentert til å gi et konkret råd.

«Vedlikeholdt» må også vurderes på to måter. En tagget utgave viser hva brukerne kan installere; standardgrenen viser hvor prosjektet er på vei. Essentialist er det tydeligste eksemplet. Den stabile utgaven dokumenterer SM-2, mens den nåværende grenen dokumenterer FSRS. Tabellen nedenfor oppgir SM-2.

## Seks FOSS-apper for puggekort sammenlignet

| App | Kontrollert stabil versjon | Plattformer | Data uten nett | Repetisjonsalgoritme | Synkronisering | Anki-migrering og veien ut | Hva du kan drifte selv |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. august 2026 | Windows, macOS, Linux; separate Android- og iOS-klienter; AnkiWeb | Installerte klienter bruker lokale samlinger til øving | FSRS eller eldre SM-2 | AnkiWeb eller den offisielle synkroniseringsserveren for egen drift | Importerer tekst, APKG/COLPKG og Mnemosyne-databaser; eksporterer tekst eller pakker med valgfri inkludering av mediefiler og repetisjonsplanlegging | **Bare synkroniseringsserver.** Ingen AnkiWeb eller øvingsgrensesnitt i nettleseren for egen drift |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. november 2023; aktivitet i kodearkivet fortsatte i 2026 | Windows, macOS, Linux, Android; begrenset repetisjon i nettleseren | Skrivebordsappen er lokal; Android kan repetere uten nett, men ikke redigere | Tilpasser repetisjonen etter vurdering av gjenkalling fra 0 til 5 | Innebygd synkronisering med en skrivebordsinstans eller en instans uten grafisk grensesnitt | Dokumenterer offisielt full Anki-import med egendefinerte korttyper og læringsdata; eksporten for deling er ikke en full sikkerhetskopi | **Synkronisering og begrenset repetisjon i nettleseren.** Nettleserserveren har ingen sikkerhetsfunksjoner |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. august 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; nettleser via Docker | Installerte klienter lagrer arbeidsområdet lokalt | FSRS | Betalt offisiell ende-til-ende-kryptert synkronisering eller betalt integrasjon med tredjeparts S3/WebDAV | Den installerte appen importerer Markdown/data og eksporterer flere dokument- og dataformater; ingen dokumentert APKG-import | **Full nettleserapp.** Docker kan ikke synkronisere med installerte klienter og mangler enkelte import-/eksportkommandoer |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. september 2026 | Nett, iOS, Android | IndexedDB på nett; SQLite på iOS; Room over SQLite på Android; lokale endringer legges i kø for synkronisering | FSRS | Driftet backend eller en backend du setter opp selv | Eget ZIP-format flytter kort, etiketter, kildemetadata og refererte mediefiler, men ikke kortstokker, læringstilstand, innstillinger eller kontoer; ingen APKG-import | **Full nett-/backend-løsning.** Produksjonsdrift er bygget rundt AWS; private mobilutgaver bygges separat |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. juli 2026 | Windows, macOS, Linux; installerbar PWA | SQLite på skrivebordet; IndexedDB i nettleseren; som standard ingen konto eller telemetri | FSRS | Mappesynkronisering på skrivebordet eller en valgfri kryptert relétjeneste med Cloudflare Worker/R2 | APKG-import på skrivebordet leser de to første feltene, kortstokker, etiketter, et omtrentlig øyeblikksbilde av repetisjonsplanen og bilder; eksport til JSON og Recall-arkiv | **Bare kryptert relétjeneste for øyeblikksbilder.** Den er ikke vert for PWA-en |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. oktober 2025; kildekodearbeid fortsatte i 2026 | Android APK, macOS DMG, Linux Flatpak; Windows bygges fra kildekoden | Ingen nettverkstilgang; kortstokkinnholdet er Markdown | Stabil utgave: SM-2; standardgren: FSRS | Ingen | Markdown bevarer kortinnholdet; en skjult database ved siden av filen bevarer fremdriften | **Ingenting å drifte.** Sikkerhetskopier Markdown-filen og den tilhørende databasen sammen |

## 1. Anki er det tryggeste standardvalget

Anki vinner på de lite glamorøse delene. Appen kan håndtere komplekse notattyper, generere flere kort fra samme notat ved hjelp av maler, lagre mediefiler med samlingen og bevare mange år med repetisjonsdata. Den stabile skrivebordsutgaven i denne gjennomgangen er [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Den nyere 26.09b2-utgaven er merket som beta og er derfor ikke sammenligningsgrunnlaget her.

Hvor mye som er åpen kildekode, varierer. [Skrivebordskodearkivet er lisensiert under AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), med oppgitte unntak for medfølgende komponenter. [AnkiDroid](https://github.com/ankidroid/Anki-Android) er et separat Android-prosjekt med åpen kildekode. AnkiMobile og AnkiWeb er offisielle deler av tilbudet, men kildekoden deres inngår ikke i disse arkivene. Den lengre forklaringen finner du i [Har Anki åpen kildekode?](/blog/is-anki-open-source/).

Installerte klienter har lokale samlinger, så vanlig repetisjon fungerer uten nett. AnkiWeb er nettløsningen. Hvis bruk uten nett avgjør valget, skiller [Fungerer Anki uten nett?](/blog/does-anki-work-offline/) mellom det som forblir lokalt, og det som må vente på synkronisering.

Anki støtter [FSRS og den eldre repetisjonsalgoritmen](https://docs.ankiweb.net/deck-options.html). Eksportformatene gir det beste utgangspunktet for migrering i denne gruppen. En [COLPKG inneholder hele samlingen med repetisjonsplanlegging](https://docs.ankiweb.net/exporting.html), mens APKG-eksporter kan inkludere planleggingsinformasjon og mediefiler når du velger det. Anki importerer også tekst, Anki-pakker og Mnemosyne 2.0-databaser.

En så innholdsrik kildepakke lover ikke en perfekt import et annet sted. Målappen må fortsatt forstå malene, reglene for kortgenerering, mediereferansene og algoritmefeltene inni den. Den har bare mer informasjon å jobbe med enn en CSV-fil gir.

Den [offisielle serveren for egen drift](https://docs.ankiweb.net/sync-server.html) er bevisst avgrenset. Den synkroniserer kompatible Anki-klienter, men tilbyr verken AnkiWeb, repetisjon i nettleseren eller en kontoportal. Som standard lytter den over ukryptert HTTP, og veiledningen anbefaler å holde den på et lokalnett eller plassere en VPN eller en omvendt HTTPS-proxy foran. Klient- og serverversjonene må også forbli kompatible.

Velg Anki når det viktigste er å bevare samlingen, bruke maler og tillegg eller ha bred klientstøtte. Se etter andre alternativer først når et konkret krav, som et nettlesergrensesnitt du kan drifte selv eller fullstendig publisert mobilkildekode, veier tyngre.

## 2. Mnemosyne holder seg til lokal øving

Mnemosyne føles som et øvingsverktøy for skrivebordet fordi det er akkurat det det er. Du får ikke en kunnskapsbase eller skyplattform med på kjøpet. Du får en lokal database, tradisjonell intervallrepetisjon, en Android-app for repetisjon og en synkroniseringsserver som kan kjøre på en datamaskin med eller uten grafisk grensesnitt.

Siste stabile utgave er fortsatt [2.11 fra november 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Det kom endringer i kodearkivet i 2026, men det gjør dem ikke til en stabil installasjonspakke. Test 2.11 på operativsystemene du planlegger å bruke de neste årene.

Lisensvilkårene kan heller ikke oppsummeres med én etikett. [Lisensoversikten i rotmappen](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) oppgir LGPL v3 for openSM2sync og separate vilkår for resten av Mnemosyne. [Lisensen for hovedprogrammet](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) bruker AGPL v3 med en ekstra bestemmelse som krever at Mnemosyne-navnet forblir tydelig synlig i avledede verk, med den nøyaktige formen avklart med vedlikeholderne. Les teksten før du videredistribuerer en modifisert utgave.

[Android-klienten kan repetere uten nett, men ikke redigere kort](https://mnemosyne-proj.org/help/android-client). Andre enheter kan bruke en server for nettleserbasert repetisjon som startes fra skrivebordsappen, men den offisielle funksjonssiden advarer om at serveren ikke har sikkerhetsfunksjoner. Den er et praktisk grensesnitt på lokalnettet, ikke en ferdig løsning for offentlig nettilgang.

Migrering er Mnemosynes beste argument mot å bare bli i Anki. Den offisielle funksjonssiden dokumenterer [full Anki-import, inkludert egendefinerte korttyper og læringsdata](https://mnemosyne-proj.org/features). Den [innebygde synkroniseringen](https://mnemosyne-proj.org/help/syncing) slår sammen kort og læringsdata og kan bruke en maskin du kontrollerer.

Den vanlige eksportkommandoen er en felle hvis du skal ta sikkerhetskopi. Den er laget for å dele utvalgte kort og utelater læringsdataene dine. For å flytte eller gjenopprette hele systemet sier [veiledningen for flere datamaskiner](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) at du skal kopiere hele datamappen.

Mnemosyne er det sterkeste rendyrkede Anki-alternativet med åpen kildekode her. Avveiningen er sjeldne stabile utgaver, begrenset redigering på mobil og et nettlesergrensesnitt som krever at du er nøye med nettverkstilgangen.

## 3. SiYuan passer når notatene er selve systemet

SiYuan er en app for kunnskapsstyring med personvern som utgangspunkt og puggekort innebygd i den samme blokk- og dokumentmodellen. Det er nyttig når notatene dine blir til repetisjonsmateriale. Det er mye å ta i bruk hvis du bare vil ha en kø med kort.

[AGPL-3.0-kodearkivet](https://github.com/siyuan-note/siyuan) lenker til grensesnittet, kjernen, mobilappene, datalaget og FSRS-komponenten. Versjon [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) er den stabile utgaven som er kontrollert her. Skrivebords- og mobilklientene lagrer arbeidsområdet lokalt og fortsetter å fungere uten nett.

Synkronisering inngår ikke i gratisnivået med lokal lagring. Den [offisielle prissiden](https://b3log.org/siyuan/en/pricing.html) tilbyr ende-til-ende-kryptert offisiell synkronisering med abonnementet, mens betalte Pro-funksjoner gir integrasjoner for egen S3- eller WebDAV-lagring. Prosjektet advarer også mot å legge et aktivt arbeidsområde i en vanlig filsynkroniseringsmappe, fordi samtidige endringer kan ødelegge eller overskrive data.

Docker kjører en fullverdig nettleserapp, men blir ikke en synkroniseringsserver for de installerte appene. [Docker-dokumentasjonen for v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) sier at skrivebords- og mobilklienter ikke kan koble seg til den. Docker mangler også Markdown-import og eksport til PDF, HTML og Word. Disse kommandoene finnes i den installerte appen, så det ville være misvisende å kopiere den generelle funksjonslisten inn i en plan for Docker-drift.

Jeg fant ingen offisiell APKG-import. SiYuan kan flytte Markdown og sine egne dataformater, men en Anki-samling må bygges opp igjen med mer planlegging.

Velg SiYuan når kunnskapsbasen er hovedproduktet og puggekortene hører hjemme der. Hvis du vil erstatte Anki direkte, er det tydeligere hva migreringen omfatter hos Mnemosyne og Anki.

## 4. Nibomo åpner mer av systemet, men egen drift krever arbeid

Nibomo publiserer kildekoden til den største delen av produktet i denne sammenligningen. MIT-monorepoet omfatter nettappen, iOS- og Android-klienter, backend, autentiseringstjeneste, synkronisering, administrasjonsapp, databasemigreringer og AWS-infrastruktur. Den stabile utgaven som brukes her, er [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Senere arbeid i standardgrenen regnes ikke som utgitt funksjonalitet.

[Arkitekturen](/docs/architecture/) er bygget for bruk uten nett først, men «uten nett» betyr litt ulike ting på hver klient. Nettappen har sin lokale hovedkopi av dataene i IndexedDB. iOS bruker SQLite, og Android bruker Room over SQLite. Endringer skrives lokalt og legges i en utboks før synkronisering. Dette håndterer forbindelsesbrudd, men gjør ikke nettleserlagringen permanent. Du må fortsatt teste at appen starter når den har vært helt avsluttet, på hver enhet.

Nibomos eget ZIP-format overfører innhold; det er ikke en sikkerhetskopi av kontoen. I v1.23.0 inneholder [pakkeskjemaet](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) innhold på for- og bakside, etiketter, korttype, kildemetadata og pakkemetadata. Refererte mediefiler pakkes separat. Det inneholder ikke kortstokkstruktur, repetisjonshistorikk, FSRS-tilstand, innstillinger for arbeidsområdet eller kontoer.

Det finnes ingen APKG-import i v1.23.0. Den dokumenterte [fremgangsmåten for Anki-migrering med TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) bruker eksportert tekst til å bygge opp kortene igjen og krever en manuell gjennomgang. Maler, lagret repetisjonstilstand, kortstokkstruktur og medfølgende mediefiler blir ikke automatisk med gjennom denne prosessen. Fremgangsmåten er grei for en enkel tekstkortstokk og et dårlig valg for en samling med mange tilpasninger.

[Veiledningen for egen drift](/docs/self-hosting/) er like tydelig. Produksjonsløsningen bruker et AWS CDK-oppsett med RDS, Cognito, API Gateway og Lambda, S3 og CloudFront, hemmeligheter, alarmer og sikkerhetskopier. Cloudflare DNS, Resend for e-post og Sentry-konfigurasjon ligger utenfor AWS. Docker Compose brukes til lokal utvikling; det er ikke den støttede produksjonspakken. De som vil ha private iOS- eller Android-utgaver, må bygge og distribuere dem separat.

Velg Nibomo når det å eie hele kildekoden for nett, installerte apper og backend forsvarer driftsarbeidet. Velg Anki eller Mnemosyne når det viktigste kravet er å bevare en eksisterende samling.

## 5. Recall er moderne, men se nøye på importen

Recall er det yngste prosjektet blant hovedanbefalingene. Det kom med fordi [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) har versjonerte skrivebordsutgaver, en installerbar PWA, tydelig beskrevet lokal lagring, FSRS, dataeksport og dokumentert synkronisering for egen drift.

Den MIT-lisensierte skrivebordsappen bruker SQLite; PWA-en bruker IndexedDB. Ingen av dem trenger en konto, og prosjektet sier at telemetri er slått av som standard. Skrivebordsutgavene dekker Windows, macOS og Linux.

APKG-importen er nyttig, men README-filens uttrykk «review history» (repetisjonshistorikk) favner for vidt for implementasjonen i den taggede utgaven. [Importkoden i v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) leser ikke Ankis repetisjonslogg. Den leser gjeldende korttilstand, intervall, antall repetisjoner og antall ganger kortet er glemt, samt FSRS-stabilitet og vanskelighetsgrad når Anki har lagret dem. For eldre kort uten disse FSRS-feltene anslår Recall verdiene ut fra SM-2-data.

Innholdskonverteringen har også tydelige begrensninger. Importen bruker de to første notatfeltene som for- og bakside fremfor å gjenskape Ankis notattyper og maler. Den bevarer kortstokknavn og etiketter. Den trekker ut vanlige bildeformater og skriver om referansene, men hopper over lyd og andre mediefiler. Fordi importen er en Tauri-kommando, er direkte APKG-migrering en skrivebordsfunksjon, ikke en funksjon i nettleser-PWA-en.

Dette er mye bedre enn å bygge opp samlingen fra ren tekst, men det bevarer ikke samlingen fullt ut. Test utfyllingskort (cloze), kort fra samme notat, ekstra felt, HTML/CSS, bilder, lyd, repetisjonsdatoer og gjentatte notater før du stoler på en stor migrering.

Recall har to veier for synkronisering. Skrivebordsappen kan skrive et øyeblikksbilde til en mappe som håndteres av Dropbox, Drive eller et annet filsynkroniseringsverktøy. Den valgfrie relétjenesten bruker en Cloudflare Worker og en R2-bucket. Ifølge det taggede [synkroniseringsdesignet](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) krypterer klientene øyeblikksbilder med AES-GCM før opplasting. Relétjenesten ser kryptert tekst, ikke kortdata eller nøkkelen. Oppdateringer bruker optimistisk samtidighetskontroll og gjør ett nytt forsøk ved konflikt, men slår fortsatt sammen hele øyeblikksbilder fremfor enkeltfelt. Det finnes ingen offentlig relétjeneste finansiert av vedlikeholderne. Du setter den opp selv og oppgir nettadressen.

Eksport til JSON og Recall-arkiv gir deg en vei ut. Gjenopprett en eksport i en tom profil før du kaller den en sikkerhetskopi.

Velg Recall når du ønsker en moderne skrivebordsapp/PWA med lokal lagring som utgangspunkt og kan godta et ungt prosjekt med en import som bevarer et nyttig øyeblikksbilde fremfor hele Anki-systemet.

## 6. Essentialist gjør kortene lesbare, men lagrer fremdriften separat

Essentialist har det minste omfanget her. Hver kortstokk er en Markdown-fil du kan åpne i et tekstredigeringsprogram, legge i versjonskontroll eller kopiere med vanlige filverktøy. Appen gjør bevisst ingen nettverksforespørsler.

Siste stabile utgave er [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Nedlastingene inkluderer Android-, macOS- og Linux-utgaver; Windows-brukere bygger fra kildekoden. Den [taggede README-filen](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) oppgir SM-2 som repetisjonsalgoritme.

[README-filen i standardgrenen](https://github.com/essentialist-app/essentialist/blob/main/README.md) oppgir nå FSRS, og kodearkivet fikk kildekodeendringer i 2026. Det er en nyttig pekepinn om retningen, men ingen grunn til å merke programutgaven fra 2025 som FSRS.

Markdown dekker også mindre enn det først ser ut til. Kortteksten ligger i den synlige filen, mens fremdriften ligger i en skjult database kalt `.<deck file>.db`. Kopierer du `sample.md` uten `.sample.md.db`, bevarer du spørsmål og svar, men mister læringstilstanden.

Appen har verken innebygd synkronisering mellom enheter eller en server. Du kan legge filene i din egen synkroniserte mappe, men da blir håndtering av konflikter og gjenoppretting ditt ansvar.

Velg Essentialist når lesbar Markdown og arbeid helt uten nettverk er selve poenget. Det er ikke et sømløst system for flere enheter, og én synlig fil er ikke en full sikkerhetskopi.

## Fire aktive prosjekter det er verdt å følge

Disse prosjektene har faktisk utviklingsarbeid fra 2026 bak seg. De står utenfor de seks hovedvalgene fordi en anbefaling trenger mer enn interessant kildekode.

| Prosjekt | Hva som allerede er på plass | Hva som fortsatt hindrer en hovedanbefaling |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-kildekode, FSRS/SM-2/Leitner-algoritmer, Docker-oppsett, en driftet tjeneste, CSV-import og dataeksport | Opprettet i juli 2026; ingen versjonert apputgave. GitHub-utgivelsen er en lydpakke, ikke en milepæl for appen |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-nettapp med FSRS, CSV-import, tildekking av bilder og dokumentert Supabase/Vercel-arkitektur | Ingen tagget utgave, og den offisielle dokumentasjonen avklarer ennå ikke fullt ut bruk uten nett, eksport og gjenoppretting ved egen drift |
| [Prep](https://github.com/Zamua/prep-app) | MIT-kildekode, FSRS, en driftet tjeneste og dokumentert oppsett på celld-kjøremiljøet, som kan driftes selv | Ingen tagget utgave; egen drift innebærer også drift av celld og objektlagring, ikke bare utrulling av en frittstående puggekortapp |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3-mobilapp i Kotlin, FSRS/SM-2, en Android-utgave og APKG-import med maler og mediefiler | Opprettet i 2026; iOS krever bygging fra kildekoden, og den offisielle dokumentasjonen beskriver ikke generell synkronisering mellom telefoner |

Flere kjente navn faller utenfor av enklere grunner. Mochis [åpne kodearkiv](https://github.com/mochi-cards/open-source) er en samling integrasjoner, ikke kjerneappen. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) har åpen kildekode og kan driftes selv, men den offisielle README-filen plasserer fortsatt intervallrepetisjon under «Features coming soon». [OpenCards](https://github.com/holgerbrandl/opencards) har ikke kommet med en utgave siden [v2.5.1 i januar 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), og kodearkivet har ikke fått en kodeendring siden 2018.

Hvis tilgang til kildekoden er valgfritt, tar den [bredere sammenligningen av Anki-alternativer](/nb/blog/best-anki-alternatives/) med produkter som svarer på et annet spørsmål.

## Test migreringen på fem separate nivåer

«Importerer fra Anki» er nesten ubrukelig uten setningen som følger. En migrering kan lykkes på ett nivå og mislykkes på fire andre.

| Nivå | Hva du bør sammenligne | Det misvisende tegnet på suksess |
| --- | --- | --- |
| Kortinnhold | Alle felt, markører for utfyllingskort (cloze), etiketter, spesialtegn og gjentatte notater | Det totale antallet kort er omtrent riktig |
| Struktur | Notattyper, maler, genererte kort fra samme notat og underkortstokker | Teksten på for- og baksiden dukket opp et sted |
| Mediefiler | Bilder og lyd er kopiert, finnes via lokale referanser og fungerer uten nett | Importen gjenkjente filnavnene |
| Læringstilstand | Repetisjonslogg, tilstand, repetisjonsdato, intervall, ganger kortet er glemt og algoritmeparametere | Importerte kort er på plass, men behandles som nye uten at du får beskjed |
| Veien ut og gjenoppretting | En dokumentert eksport eller sikkerhetskopi kan bygge opp det samme systemet et annet sted | En lesbar teksteksport behandles som en full sikkerhetskopi |

Lag én testkortstokk som bevisst er litt vrien, før du flytter den ekte samlingen. Ta med ekstra felt, utfyllingskort, maler for vanlige og omvendte kort, underkortstokker, etiketter, bilder, lyd og nok repetisjonshistorikk til å se om målappen bevarte den.

Behold den urørte sikkerhetskopien fra kildesystemet. Etter import sammenligner du antall notater, kort og mediefiler hver for seg. Undersøk repetisjonsdatoene fremfor å stole på en melding om at «repetisjonsplanlegging er importert». Repeter uten nett på alle enhetene du vil bruke. Lag deretter midlertidige, motstridende endringer på to enheter og se hva synkroniseringen gjør.

Bruk begge systemene i noen dager. Å slette den gamle samlingen er det siste trinnet, ikke et bevis på at den nye fungerer.

## Egen drift er først komplett etter en gjenoppretting

Produktene over bruker «egen drift» om svært ulike oppsett:

- Anki og Mnemosyne kjører **synkroniseringstjenester**, mens de installerte klientene fortsatt er grensesnittet for øving.
- SiYuan Docker kjører en **nettleserapp** som de installerte klientene ikke kan bruke som synkroniseringsserver.
- Recall kjører en **kryptert relétjeneste for øyeblikksbilder**, ikke selve PWA-en.
- Nibomo setter opp en **full nett- og backend-løsning**, mens de plattformspesifikke appene fortsatt bygges separat.
- Essentialist har **ingen server**; eierskapet er knyttet til de lokale filene.

Når det er avklart hva du drifter, bør du teste den delen driftsansvarlige ofte utsetter:

1. Lag kort, legg ved mediefiler, gjennomfør repetisjoner og synkroniser fra to klienter.
2. Ta vare på alle dokumenterte databaser, lagringsområder for objekter (buckets), lokale filer, hemmeligheter og konfigurasjonsverdier.
3. Gjenopprett til en tom konto, en ren maskin eller et isolert driftsoppsett.
4. Sammenlign antall kort, mediefiler, repetisjonshistorikk, hvilke kort som skal repeteres, innlogging og klientsynkronisering.
5. Oppgrader den gjenopprettede kopien og gjennomfør en ny repetisjonsrunde.

Hvis gjenoppbyggingen fortsatt er avhengig av den gamle maskinen, har du en kjørende tjeneste. Du har ikke en kontrollert sikkerhetskopi.

## Vanlige spørsmål

### Hva er den beste appen for puggekort med åpen kildekode i 2026?

Anki er det beste standardvalget for de fleste som skal lære noe. Den kombinerer en moden samlingsmodell, FSRS, bred klientdekning og de mest innholdsrike sikkerhetskopi- og eksportformatene fra selve produktet. Forbeholdet er at den offisielle iOS-appen og nettløsningen ikke omfattes av det åpne skrivebordskodearkivet, og at serveren for egen drift tilbyr synkronisering fremfor øving i nettleseren.

### Hva er det beste Anki-alternativet med åpen kildekode?

Mnemosyne er det mest etablerte rendyrkede alternativet og dokumenterer offisielt import av Ankis egendefinerte korttyper og læringsdata. Recall ser mer moderne ut og importerer APKG-filer direkte på skrivebordet, men konverterer de to første notatfeltene, bevarer bare et øyeblikksbilde av repetisjonsplanen, importerer bilder fremfor lyd og tar ikke med hele repetisjonsloggen.

### Kan jeg drifte Anki selv?

Ja, du kan kjøre Ankis offisielle synkroniseringsserver for kompatible klienter. Den erstatter derimot ikke AnkiWeb med en løsning du drifter selv: Det finnes ikke noe øvingsgrensesnitt i nettleseren.

### Betyr åpen kildekode at appen fungerer uten nett?

Nei. Åpen kildekode beskriver lisensiering og tilgang til koden. Bruk uten nett avhenger av hvor klienten lagrer data, og hvilke handlinger som trenger en tjeneste. Det motsatte gjelder også: En app kan lagre data lokalt uten å publisere kildekoden til kjernen.

### Garanterer egen drift at dataene kan flyttes?

Nei. Egen drift styrer hvor en tjeneste kjører. Flyttbarhet avhenger av eksport, fullstendige sikkerhetskopier og en gjenoppretting du faktisk har testet. En database på din egen server kan fortsatt være vanskelig å migrere, og en lesbar Markdown-kortstokk kan fortsatt mangle repetisjonstilstanden som er lagret ved siden av.

## Min anbefaling

Behold eller velg **Anki** med mindre en av begrensningene skaper et reelt problem. Velg **Mnemosyne** for fokusert lokal øving på skrivebordet og etablert Anki-import. Bruk **SiYuan** når puggekortene hører hjemme i en større kunnskapsbase. Vurder **Nibomo** når eierskap til all kildekoden for nett, installerte apper og backend forsvarer et produksjonsoppsett på AWS. Velg **Recall** for en moderne klient med lokal lagring som utgangspunkt, etter å ha testet begrensningene i konverteringen. Velg **Essentialist** når ren Markdown og null nettverkstilgang betyr mer enn synkronisering.

Den beste appen for puggekort med åpen kildekode er ikke kodearkivet med den lengste funksjonslisten. Det er den der kildekode, data uten nett, migrering, synkronisering, drift og gjenoppretting passer til systemet du faktisk er villig til å eie.
