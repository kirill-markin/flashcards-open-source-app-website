---
title: "Bästa flashcard-apparna med öppen källkod 2026: 6 FOSS-alternativ jämförda"
description: "Jämför sex flashcard-appar som underhålls med öppen källkod utifrån publicerad kod, offlinedata, synkronisering, Anki-import, export, egen drift och återställning."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "bästa flashcard-apparna med öppen källkod"
  - "flashcard-app med öppen källkod"
  - "intervallrepetition med öppen källkod"
  - "flashcards på egen server"
  - "flashcard-app offline"
  - "alternativ till Anki med öppen källkod"
  - "FOSS flashcards"
---

Anki är fortfarande den bästa flashcard-appen med öppen källkod för de flesta 2026. Det intressanta börjar när öppen källkod inte är ditt enda absoluta krav.

Du kanske behöver en webbapp på din egen server. Eller en kortlek som du kan läsa som vanlig Markdown. Eller ett privat anteckningssystem som skapar kort. De kraven pekar mot olika produkter, och ett offentligt GitHub-arkiv avgör inte valet.

En datorapp med öppen källkod kan finnas sida vid sida med en iPhone-app med sluten källkod. En Docker-container kan köra ett webbgränssnitt utan att synkronisera med plattformsspecifika appar. En import kan rädda orden men tappa mallarna, medierna och åratal av repetitionshistorik som gjorde samlingen användbar.

Sex projekt klarade den här granskningen. Jag jämförde deras licensierade källkod, senaste stabila version, lokala data, schemaläggare, synkronisering, flytt från Anki, export och exakt vad som går att drifta själv. Den sista avgränsningen spelar större roll än de flesta funktionslistor medger.

> **Om min koppling till produkterna:** Jag heter Kirill Markin och utvecklar [Nibomo](https://nibomo.com/), en av de sex apparna nedan. Dess MIT-licensierade kodarkiv omfattar webbappen, plattformsspecifika klienter, backend, synkronisering och infrastruktur. Jag har inte placerat den först. Anki är det säkrare standardvalet, Mnemosyne har en mer etablerad väg för flytt från Anki och flera av alternativen här är betydligt enklare att drifta.

**Faktakontrollerat:** 5 september 2026. Stabila versioner hålls isär från arbete som bara finns på projektets standardgren.

![En vandrare jämför sex öppna ryggsäckar och testar reservutrustningen innan valet av en flashcard-app med öppen källkod](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Det korta svaret

| Ditt viktigaste krav | Bästa valet | Varför | Begränsningen att testa först |
| --- | --- | --- | --- |
| Ett pålitligt allroundsystem eller en komplex befintlig samling | [Anki](https://apps.ankiweb.net/) | Välutvecklade korttyper och mallar, FSRS, tillägg, brett klientstöd och innehållsrika paketexporter | Den officiella iOS-appen och AnkiWeb ingår inte i datorappens öppna källkod; egen drift ger dig synkronisering, inte AnkiWeb |
| Ett fokuserat alternativ för datorn med etablerad Anki-import | [Mnemosyne](https://mnemosyne-proj.org/) | Lokala studier, import av Ankis korttyper och inlärningsdata samt en synkserver som du kan köra själv | Version 2.11 är fortfarande den senaste stabila versionen; Android kan repetera men inte redigera |
| Anteckningar och kort i en lokal kunskapsbas | [SiYuan](https://b3log.org/siyuan/en/) | Plattformsspecifika appar som fungerar offline, inbyggd FSRS och en riktig webbapp i Docker | Docker-klienter kan inte synkronisera med de plattformsspecifika apparna, och flera import- och exportkommandon saknas i Docker |
| Källkod för webb, mobil, backend och infrastruktur | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Ett MIT-licensierat monorepo med dokumenterad produktionsdrift | Den stödda produktionsmiljön är centrerad kring AWS, och information går förlorad vid flytt från Anki |
| En yngre datorapp som prioriterar lokal lagring och har direkt APKG-import | [Recall](https://github.com/Madlezz/Recall) | FSRS, datorversioner, en PWA, lokala databaser och en valfri krypterad relätjänst | Importen bevarar bara en ögonblicksbild av schemaläggningen, hanterar de första två anteckningsfälten och hoppar över ljud |
| Läsbara Markdown-kortlekar utan nätverksberoende | [Essentialist](https://github.com/essentialist-app/essentialist) | Enkla kortleksfiler och en dator-/Android-app byggd för offlineanvändning | Synkronisering saknas, och framstegen lagras i en separat dold databas |

Det här är ingen poängtabell över funktioner. Börja med det som absolut inte får gå fel. Om du har tio års Anki-repetitioner är en korrekt flytt viktigare än ett renare gränssnitt. Om du sköter en installation för en skola kan webbläsaråtkomst och en beprövad återställning väga tyngre än tillägg.

## Vad som räknades som en flashcard-app med öppen källkod

Jag använde fyra urvalskrav:

1. **Själva studiefunktionen har publicerad källkod och en uttrycklig licens för öppen källkod.** En katalog med integrationer runt en opublicerad kärna räknas inte.
2. **Intervallrepetition fungerar i dag.** En punkt i en utvecklingsplan eller ett allmänt frågesportsläge räcker inte.
3. **Det finns en utgiven version eller en tydligt dokumenterad officiell installation.** Nya incheckningar i kodarkivet gör inte i sig en prototyp till ett säkert val.
4. **Officiella källor beskriver datahanteringen tillräckligt väl för att den ska gå att granska.** Jag behövde konkreta svar om offlinelagring, synkronisering, import/export eller drift – inte ett vagt löfte om att användarna ”äger sina data”.

Antalet stjärnor var inget urvalskrav. De belönar ålder och uppmärksamhet lika mycket som hur väl produkten passar. Mognad spelar ändå roll. Anki, Mnemosyne och SiYuan har etablerade utgåvor och driftmodeller. Recall och Essentialist fick mer avgränsade rekommendationer eftersom deras utgivna funktioner är tillräckligt väl dokumenterade för ett specifikt användningsfall.

Även påståendet att ett projekt underhålls kräver två kontroller. En taggad version visar vad användare kan installera; standardgrenen visar vart projektet är på väg. Essentialist är det tydligaste exemplet. Den stabila versionen dokumenterar SM-2, medan den aktuella grenen dokumenterar FSRS. Tabellen nedan anger SM-2.

## Sex FOSS-appar för flashcards jämförda

| App | Kontrollerad stabil version | Plattformar | Offlinedata | Schemaläggare | Synkronisering | Flytt från Anki och möjlighet att flytta vidare | Vad du kan drifta själv |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 augusti 2026 | Windows, macOS, Linux; separata Android- och iOS-klienter; AnkiWeb | Installerade klienter använder lokala samlingar för studier | FSRS eller äldre SM-2 | AnkiWeb eller den officiella synkservern för egen drift | Importerar text, APKG/COLPKG och Mnemosyne-databaser; exporterar text eller paket med valfria media och schemaläggningsdata | **Enbart synkserver.** Inget AnkiWeb eller studiegränssnitt i webbläsaren för egen drift |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 november 2023; kodarkivet var fortsatt aktivt 2026 | Windows, macOS, Linux, Android; begränsad repetition i webbläsaren | Datorappen är lokal; Android kan repetera offline men inte redigera | Adaptiv minnesbedömning 0–5 | Inbyggd synkronisering till en dator eller en instans utan grafiskt gränssnitt | Dokumenterar officiellt fullständig Anki-import med anpassade korttyper och inlärningsdata; exporten för delning är ingen fullständig säkerhetskopia | **Synkronisering och begränsad repetition i webbläsaren.** Webbservern saknar säkerhetsfunktioner |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 augusti 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; webbläsare via Docker | Plattformsspecifika klienter lagrar arbetsytan lokalt | FSRS | Betald officiell synkronisering med totalsträckskryptering eller betald integration med extern S3/WebDAV | Appen i sin helhet importerar Markdown/data och exporterar flera dokument- och dataformat; ingen dokumenterad APKG-import | **Fullständig webbapp.** Docker kan inte synkronisera med plattformsspecifika klienter och saknar vissa import-/exportkommandon |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 september 2026 | Webb, iOS, Android | IndexedDB på webben; SQLite på iOS; Room ovanpå SQLite på Android; lokala skrivningar köas för synkronisering | FSRS | Molntjänstens backend eller en backend som operatören själv driftsätter | Det egna ZIP-formatet flyttar kort, taggar, källmetadata och refererade media, men inte kortlekar, inlärningsstatus, inställningar eller konton; ingen APKG-import | **Komplett webb- och backendsystem.** Produktionsdriften är centrerad kring AWS; egna plattformsspecifika appar byggs separat |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 juli 2026 | Windows, macOS, Linux; installerbar PWA | SQLite på datorn; IndexedDB i webbläsaren; inget konto eller telemetri som standard | FSRS | Mappsynkronisering på datorn eller en valfri krypterad relätjänst med Cloudflare Worker/R2 | APKG-import på datorn läser de första två fälten, kortlekar, taggar, en ungefärlig ögonblicksbild av schemaläggningen och bilder; export till JSON och Recall-arkiv | **Enbart krypterad relätjänst för ögonblicksbilder.** Den kör inte PWA:n |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 oktober 2025; källkoden utvecklades vidare 2026 | Android APK, macOS DMG, Linux Flatpak; Windows byggs från källkod | Ingen nätverksåtkomst; kortleksinnehållet är Markdown | Stabil version: SM-2; standardgren: FSRS | Ingen | Markdown bevarar kortinnehållet; en dold databas bredvid filen bevarar framstegen | **Inget att drifta.** Säkerhetskopiera Markdown-filen och dess databas tillsammans |

## 1. Anki är det säkraste standardvalet

Anki vinner på de mindre glamorösa delarna. Det kan hantera komplexa anteckningstyper, generera syskonkort från mallar, hålla medierna tillsammans med samlingen och bevara åratal av schemaläggningsdata. Den stabila datorversionen i den här granskningen är [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Den nyare versionen 26.09b2 är märkt som beta och används därför inte som utgångspunkt här.

Vilka delar som har öppen källkod varierar. [Datorappens kodarkiv använder AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), med angivna undantag för medföljande komponenter. [AnkiDroid](https://github.com/ankidroid/Anki-Android) är ett separat Android-projekt med öppen källkod. AnkiMobile och AnkiWeb är officiella produkter, men deras källkod ingår inte i de arkiven. Den längre förklaringen finns i [Har Anki öppen källkod?](/blog/is-anki-open-source/).

Installerade klienter lagrar samlingar lokalt, så vanlig repetition fungerar utan anslutning. AnkiWeb är onlinedelen. Om offlinebeteendet avgör valet skiljer [Fungerar Anki offline?](/blog/does-anki-work-offline/) på vad som finns lokalt och vad som får vänta på synkronisering.

Anki stöder [FSRS och sin äldre schemaläggare](https://docs.ankiweb.net/deck-options.html). Dess exportformat ger den starkaste utgångspunkten för en flytt i den här gruppen. En [COLPKG innehåller hela samlingen med schemaläggning](https://docs.ankiweb.net/exporting.html), medan APKG-exporter kan innehålla schemaläggningsinformation och media när du väljer de alternativen. Anki importerar också text, Anki-paket och Mnemosyne 2.0-databaser.

Ett så innehållsrikt källpaket lovar inte en perfekt import i en annan app. Mottagaren måste fortfarande förstå mallarna, reglerna för kortgenerering, mediereferenserna och schemaläggningsfälten i paketet. Det ger bara mer information att arbeta med än en CSV-fil.

Den [officiella servern för egen drift](https://docs.ankiweb.net/sync-server.html) är medvetet liten. Den synkroniserar kompatibla Anki-klienter; den ger dig inte AnkiWeb, repetition i webbläsaren eller en kontoportal. Som standard tar den emot trafik via okrypterad HTTP, och guiden rekommenderar ett lokalt nätverk eller en VPN eller omvänd HTTPS-proxy framför servern. Klient- och serverversionerna måste också fortsätta vara kompatibla.

Välj Anki när en intakt samling, mallar, tillägg eller brett klientstöd kommer först. Sök dig vidare först när en specifik begränsning väger tyngre, till exempel behovet av ett webbgränssnitt på egen server eller helt publicerad källkod för mobilapparna.

## 2. Mnemosyne fokuserar på lokala studier

Mnemosyne känns som ett studieverktyg för datorn eftersom det är just vad det är. Du får ingen kunskapsbas eller molnplattform på köpet. Du får en lokal databas, ett traditionellt arbetsflöde för intervallrepetition, en Android-app för repetition och en synkserver som kan köras på en dator eller en maskin utan grafiskt gränssnitt.

Den senaste stabila versionen är fortfarande [2.11 från november 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Kodarkivet fick ändringar under 2026, men det gör inte ändringarna till ett stabilt installationspaket. Testa 2.11 på de operativsystem du tänker använda de kommande åren.

Licensvillkoren låter sig inte heller sammanfattas med en enda etikett. [Licensöversikten i arkivets rot](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) anger LGPL v3 för openSM2sync och separata villkor för resten av Mnemosyne. [Huvudprogrammets licens](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) tillämpar AGPL v3 med ett extra villkor: namnet Mnemosyne måste förbli tydligt synligt i bearbetningar, och den exakta utformningen ska diskuteras med projektets underhållare. Läs texten innan du distribuerar en ändrad version.

[Android-klienten kan repetera offline men inte redigera kort](https://mnemosyne-proj.org/help/android-client). Andra enheter kan använda en server för repetition i webbläsaren som startas från datorappen, men den officiella funktionssidan varnar för att servern saknar säkerhetsfunktioner. Det är ett praktiskt gränssnitt för det lokala nätverket, inte en färdigslipad offentlig webbapp.

Flyttmöjligheterna är Mnemosynes starkaste argument mot att helt enkelt stanna i Anki. Den officiella funktionssidan dokumenterar [fullständig Anki-import, inklusive anpassade korttyper och inlärningsdata](https://mnemosyne-proj.org/features). Den [inbyggda synkroniseringen](https://mnemosyne-proj.org/help/syncing) slår samman kort och inlärningsdata och kan använda en maskin som du kontrollerar.

Det vanliga exportkommandot är en fälla om du tänker använda det för säkerhetskopiering. Det är gjort för att dela utvalda kort och utelämnar dina inlärningsdata. För att flytta eller återställa hela systemet säger [guiden för flera datorer](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) att du ska kopiera hela datakatalogen.

Mnemosyne är det starkaste fokuserade Anki-alternativet med öppen källkod här. Du får acceptera långa intervall mellan stabila utgåvor, begränsad mobilredigering och ett webbgränssnitt vars nätverksåtkomst måste avgränsas noggrant.

## 3. SiYuan passar när anteckningarna är själva systemet

SiYuan är en app för kunskapshantering med integritet i första rummet och flashcards inbyggda i samma block- och dokumentmodell. Det är användbart när dina anteckningar blir repetitionsmaterial. Det är ett stort system om du bara vill ha en kö med kort.

Det [AGPL-3.0-licensierade kodarkivet](https://github.com/siyuan-note/siyuan) länkar till gränssnittet, kärnan, mobilapparna, datalagret och FSRS-komponenten. Version [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) är den stabila utgåva som granskats här. Dator- och mobilklienterna lagrar arbetsytan lokalt och fortsätter fungera offline.

Synkronisering ingår inte i gratisnivån med lokal lagring. Den [officiella prissidan](https://b3log.org/siyuan/en/pricing.html) erbjuder officiell synkronisering med totalsträckskryptering i abonnemanget, medan betalda Pro-funktioner lägger till integrationer med egen S3- eller WebDAV-lagring. Projektet varnar också för att lägga en aktiv arbetsyta i en vanlig filsynkroniseringsmapp, eftersom samtidiga ändringar kan skada eller skriva över data.

Docker kör en riktig webbapp, men blir inte en synkserver för de installerade apparna. [Docker-dokumentationen för v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) säger att dator- och mobilklienter inte kan ansluta till den. I Docker saknas också Markdown-import och export till PDF, HTML och Word. De kommandona finns i den plattformsspecifika appen i övrigt, så det vore missvisande att kopiera den allmänna funktionslistan till en plan för Docker-drift.

Jag hittade ingen officiell APKG-import. SiYuan kan flytta Markdown och sina egna dataformat, men en Anki-samling kräver en mer genomtänkt ombyggnad.

Välj SiYuan när kunskapsbasen är huvudprodukten och korten hör hemma i den. Om du vill ersätta Anki direkt är det tydligare vad som går att flytta med Mnemosyne och Anki.

## 4. Nibomo publicerar mer av systemet – men du får sköta driften

Nibomo publicerar källkoden till flest delar av produkten i den här jämförelsen. Det MIT-licensierade monorepot innehåller webbappen, iOS- och Android-klienterna, backend, autentiseringstjänsten, synkronisering, administrationsappen, databasmigreringar och AWS-infrastruktur. Den stabila versionen här är [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Senare arbete på standardgrenen räknas inte som utgiven funktionalitet.

[Arkitekturen](/docs/architecture/) är byggd för offlineanvändning, men ”offline” betyder lite olika saker i olika klienter. Webbappen har sin lokala datakälla i IndexedDB. iOS använder SQLite och Android använder Room ovanpå SQLite. Ändringar skrivs lokalt och köas i en utkorg före synkronisering. Det hanterar en avbruten anslutning; det gör inte webbläsarlagringen permanent och tar inte bort behovet av att testa start från helt stängt läge på varje enhet.

Nibomos eget ZIP-paket är ett format för innehållsöverföring, inte en säkerhetskopia av kontot. I v1.23.0 omfattar dess [paketschema](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) innehåll på fram- och baksida, taggar, korttyp, källmetadata och paketmetadata; refererade media packas separat. Kortleksstruktur, repetitionshistorik, FSRS-status, arbetsyteinställningar och konton ingår inte.

Det finns ingen APKG-import i v1.23.0. Det dokumenterade [arbetsflödet för flytt via Anki TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) bygger upp kort på nytt från exporterad text och kräver mänsklig granskning. Mallar, schemaläggningsstatus, kortleksstruktur och medföljande media följer inte automatiskt med den vägen. Den är rimlig för en enkel textkortlek och ett dåligt val för en kraftigt anpassad samling.

[Guiden för egen drift](/docs/self-hosting/) är lika tydlig. Produktionsmiljön använder en AWS CDK-stack med RDS, Cognito, API Gateway och Lambda, S3 och CloudFront, hemliga nycklar, larm och säkerhetskopior. Cloudflare DNS, Resend för e-post och Sentry-konfiguration ligger utanför AWS. Docker Compose används för lokal utveckling; det är inte det stödda produktionspaketet. Den som vill ha egna privata iOS- eller Android-appar bygger och distribuerar dem separat.

Välj Nibomo när tillgången till all källkod för webb, plattformsspecifika appar och backend är värd driftarbetet. Välj Anki eller Mnemosyne när det viktigaste kravet är att bevara en befintlig samling.

## 5. Recall är modernt, men granska importen noga

Recall är det yngsta projektet bland huvudrekommendationerna. Det kom med eftersom [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) erbjuder versionsmärkta datorappar, en installerbar PWA, tydligt dokumenterad lokal lagring, FSRS, dataexport och en dokumenterad konstruktion för synkronisering i egen drift.

Den MIT-licensierade datorappen använder SQLite; PWA:n använder IndexedDB. Ingen av dem kräver ett konto, och projektet säger att telemetri är avstängd som standard. Datorversioner finns för Windows, macOS och Linux.

APKG-importen är användbar, men formuleringen ”review history” i README lovar för mycket jämfört med den taggade implementationen. [Importkoden i v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) läser inte Ankis repetitionslogg. Den läser kortets aktuella status, intervall, antal repetitioner och antal tillfällen då inlärda kort glömts bort, samt FSRS-värden för stabilitet och svårighet när Anki har lagrat dem. För äldre kort utan de FSRS-fälten uppskattar Recall värdena utifrån SM-2.

Även innehållsomvandlingen har tydliga begränsningar. Importen använder de första två anteckningsfälten som fram- och baksida i stället för att återskapa Ankis anteckningstyper och mallar. Kortleksnamn och taggar behålls. Vanliga bildformat extraheras och referenserna skrivs om, men ljud och andra media hoppas över. Eftersom importen är ett Tauri-kommando fungerar direkt APKG-flytt i datorappen, inte i PWA:n i webbläsaren.

Det är betydligt bättre än att bygga upp allt från ren text, men bevarar inte hela samlingen oförändrad. Testa lucktexter, syskonkort, extra fält, HTML/CSS, bilder, ljud, repetitionsdatum och upprepade anteckningar innan du litar på en stor flytt.

Recall har två vägar för synkronisering. Datorappen kan skriva en ögonblicksbild till en mapp som hanteras av Dropbox, Drive eller ett annat filsynkroniseringsverktyg. Den valfria relätjänsten använder en Cloudflare Worker och en R2-bucket. Enligt den taggade [synkroniseringsdesignen](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) krypterar klienterna ögonblicksbilder med AES-GCM före uppladdning; relätjänsten ser chiffertext, inte kortdata eller nyckeln. Uppdateringar använder optimistisk samtidighetskontroll och gör högst ett nytt försök vid en konflikt, men slår fortfarande samman hela ögonblicksbilder i stället för enskilda fält. Det finns ingen offentlig relätjänst som projektets underhållare bekostar – du driftsätter den och anger dess URL.

Export till JSON och Recall-arkiv ger dig en väg vidare. Återställ en export i en ren profil innan du kallar den en säkerhetskopia.

Välj Recall om du vill ha en modern datorapp eller PWA med lokal lagring i första hand och kan acceptera ett ungt projekt samt en import som bevarar en användbar ögonblicksbild snarare än hela Anki-systemet.

## 6. Essentialist gör kortleken lättläst, men inlärningsstatusen ligger separat

Essentialist gör minst av apparna här. Varje kortlek är en Markdown-fil som du kan öppna i en textredigerare, versionshantera eller kopiera med vanliga filverktyg. Appen gör avsiktligt inga nätverksanrop.

Den senaste stabila versionen är [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Bland dess installationsfiler finns versioner för Android, macOS och Linux; Windows-användare bygger från källkod. Den [taggade README-filen](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) anger SM-2 som schemaläggare.

[README på standardgrenen](https://github.com/essentialist-app/essentialist/blob/main/README.md) anger nu FSRS, och kodarkivet fick ändringar under 2026. Det visar vart projektet är på väg, men är inget skäl att påstå att 2025 års programversion använder FSRS.

Markdown omfattar också mindre än man först kan tro. Korttexten finns i den synliga filen, medan framstegen finns i en dold databas med namnet `.<deck file>.db`. Om du kopierar `sample.md` utan `.sample.md.db` sparar du frågor och svar men förlorar inlärningsstatusen.

Det finns ingen inbyggd enhetssynkronisering eller server. Du kan lägga filerna i en egen synkroniserad mapp, men då får du själv sköta konflikthantering och återställning.

Välj Essentialist när läsbar Markdown och ett arbetsflöde utan nätverk är poängen. Det är inget sömlöst system för flera enheter, och en synlig fil är inte en fullständig säkerhetskopia.

## Fyra aktiva projekt att hålla ögonen på

De här projekten har konkret utvecklingsarbete från 2026 bakom sig. De hamnar utanför de sex huvudvalen eftersom en rekommendation kräver mer än intressant källkod.

| Projekt | Vad som redan finns | Vad som fortfarande hindrar en huvudrekommendation |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-källkod, FSRS/SM-2/Leitner-schemaläggare, Docker-installation, en tjänst som projektet sköter driften av, CSV-import och dataexport | Skapades i juli 2026; ingen versionsmärkt apputgåva. Dess GitHub-utgåva är ett ljudpaket snarare än en appversion |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-licensierad webbapp med FSRS, CSV-import, bildmaskering och dokumenterad Supabase/Vercel-arkitektur | Ingen taggad utgåva, och den officiella dokumentationen beskriver ännu inte fullständigt vad som fungerar offline, går att exportera och kan återställas vid egen drift |
| [Prep](https://github.com/Zamua/prep-app) | MIT-källkod, FSRS, en driftad version och dokumenterad installation på körmiljön celld, som går att drifta själv | Ingen taggad utgåva; egen drift innebär också att sköta celld och objektlagring, inte att installera en fristående flashcard-app |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3-licensierad mobilapp i Kotlin, FSRS/SM-2, en Android-utgåva och APKG-import med mallar och media | Skapades 2026; iOS kräver bygge från källkod, och den officiella dokumentationen beskriver ingen generell synkronisering mellan telefoner |

Flera välbekanta namn faller bort av enklare skäl. Mochis [arkiv med öppen källkod](https://github.com/mochi-cards/open-source) är en samling integrationer, inte själva appen. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) har öppen källkod och kan driftas själv, men dess officiella README placerar fortfarande intervallrepetition under ”Features coming soon”. [OpenCards](https://github.com/holgerbrandl/opencards) har inte fått en utgåva sedan [v2.5.1 i januari 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), och kodarkivet har inte fått någon kodändring sedan 2018.

Om tillgång till källkoden inte är ett krav innehåller den [bredare jämförelsen av Anki-alternativ](/sv/blog/best-anki-alternatives/) produkter som besvarar en annan fråga.

## Testa flytten i fem separata delar

”Importerar Anki” är nästan oanvändbart utan nästa mening. En flytt kan lyckas i en del och misslyckas i fyra andra.

| Del | Vad du ska jämföra | Den missvisande signalen om att allt lyckats |
| --- | --- | --- |
| Kortinnehåll | Varje fält, lucktextmarkör, tagg, specialtecken och upprepad anteckning | Det totala antalet kort stämmer ungefär |
| Struktur | Anteckningstyper, mallar, genererade syskonkort och underkortlekar | Texten från fram- och baksidan dök upp någonstans |
| Media | Bilder och ljud har kopierats, referenserna fungerar lokalt och innehållet går att visa eller spela upp offline | Importen kände igen filnamnen |
| Inlärningsstatus | Repetitionslogg, status, repetitionsdatum, intervall, tillfällen då inlärda kort glömts bort och schemaläggningsparametrar | Importerade kort finns där men börjar om som nya utan förvarning |
| Flytt vidare och återställning | En dokumenterad export eller säkerhetskopia kan bygga upp samma system någon annanstans | En läsbar textexport behandlas som en fullständig säkerhetskopia |

Bygg en avsiktligt besvärlig testkortlek innan du flyttar den riktiga samlingen. Ta med extra fält, lucktexter, mallar för båda riktningarna, underkortlekar, taggar, bilder, ljud och tillräckligt med repetitionshistorik för att se om mottagaren bevarar den.

Behåll den orörda säkerhetskopian från källan. Jämför antalet anteckningar, kort och mediefiler var för sig efter importen. Granska repetitionsdatumen i stället för att lita på meddelandet ”schemaläggning importerad”. Repetera offline på varje enhet du tänker använda. Skapa sedan tillfälliga motstridiga ändringar på två enheter och se vad synkroniseringen gör.

Kör båda systemen i några dagar. Att radera den gamla samlingen är det sista steget, inte beviset på att den nya fungerade.

## Egen drift är inte färdig förrän du har återställt systemet

Produkterna ovan använder ”egen drift” för mycket olika saker:

- Anki och Mnemosyne kör **synkroniseringstjänster**, medan installerade klienter förblir studiegränssnittet.
- SiYuan i Docker kör en **webbapp** som de plattformsspecifika klienterna inte kan använda som sin synkserver.
- Recall kör en **krypterad relätjänst för ögonblicksbilder**, inte själva PWA:n.
- Nibomo driftsätter ett **komplett webb- och backendsystem**, medan de plattformsspecifika apparna byggs separat.
- Essentialist har **ingen server**; det du äger och hanterar är de lokala filerna.

När det är tydligt vad du ska drifta, testa den del som driftansvariga brukar skjuta upp:

1. Skapa kort, bifoga media, genomför repetitioner och synkronisera från två klienter.
2. Spara varje dokumenterad databas, bucket i objektlagringen, lokal fil, hemlig nyckel och konfigurationsvärde.
3. Återställ till ett tomt konto, en tom maskin eller en isolerad installation.
4. Jämför antalet kort, media, repetitionshistorik, vilka kort som ska repeteras, inloggning och klientsynkronisering.
5. Uppgradera den återställda kopian och genomför ännu en repetitionsomgång.

Om återuppbyggnaden fortfarande är beroende av den gamla maskinen har du en tjänst som körs. Du har ingen verifierad säkerhetskopia.

## Vanliga frågor

### Vilken är den bästa flashcard-appen med öppen källkod 2026?

Anki är det bästa standardvalet för de flesta som studerar. Det kombinerar en mogen samlingsmodell, FSRS, brett klientstöd och de mest innehållsrika officiella formaten för säkerhetskopiering och export. Begränsningen är att den officiella iOS-appen och webbtjänsten inte omfattas av datorappens öppna kodarkiv, och servern för egen drift ger synkronisering snarare än studier i webbläsaren.

### Vilket är det bästa Anki-alternativet med öppen källkod?

Mnemosyne är det mest etablerade fokuserade alternativet och dokumenterar officiellt import av Ankis anpassade korttyper och inlärningsdata. Recall ser modernare ut och importerar APKG-filer direkt på datorn, men omvandlar de första två anteckningsfälten, bevarar bara en ögonblicksbild av schemaläggningen, importerar bilder men inte ljud och tar inte med hela repetitionsloggen.

### Kan jag drifta Anki själv?

Ja, du kan köra Ankis officiella synkserver för kompatibla klienter. Den är däremot ingen ersättare för AnkiWeb i egen drift: det finns inget studiegränssnitt i webbläsaren.

### Betyder öppen källkod att appen fungerar offline?

Nej. Öppen källkod beskriver licensiering och tillgång till källkoden. Offlinebeteendet beror på var klienten lagrar data och vilka åtgärder som kräver en tjänst. Det omvända gäller också: en app kan lagra data lokalt utan att publicera sin centrala källkod.

### Garanterar egen drift att mina data går att flytta?

Nej. Egen drift avgör var en tjänst körs. Flyttbarhet beror på exporter, fullständiga säkerhetskopior och en återställning som du faktiskt har testat. En databas på din server kan fortfarande vara svår att flytta, och en läsbar Markdown-kortlek kan fortfarande sakna repetitionsstatus som lagras bredvid den.

## Min rekommendation

Behåll eller välj **Anki** om ingen av dess begränsningar orsakar ett verkligt problem. Välj **Mnemosyne** för fokuserade lokala studier på datorn och etablerad Anki-import. Använd **SiYuan** när korten hör hemma i en större kunskapsbas. Överväg **Nibomo** när tillgången till hela källkoden för webb, plattformsspecifika appar och backend motiverar en produktionsmiljö på AWS. Välj **Recall** för en modern klient som prioriterar lokal lagring, efter att du har testat importens begränsningar. Välj **Essentialist** när vanlig Markdown och noll nätverksåtkomst väger tyngre än synkronisering.

Den bästa flashcard-appen med öppen källkod är inte arkivet med den längsta funktionslistan. Det är den vars källkod, offlinedata, flyttmöjligheter, synkronisering, drift och återställning passar det system du faktiskt är beredd att äga och sköta.
