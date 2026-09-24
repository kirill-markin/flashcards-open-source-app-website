---
title: "Alternativ till Anki 2026: vad du behåller, förlorar och vinner på att byta"
description: "Jämför sju alternativ till Anki utifrån vad som följer med vid flytten, offlineanvändning, schemaläggning, pris, källkod och egen drift – och se när det är säkrare att behålla Anki."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternativ till Anki"
  - "Anki-alternativ"
  - "appar som Anki"
  - "alternativ till Anki med öppen källkod"
  - "gratis alternativ till Anki"
  - "alternativ till Anki för iOS"
  - "flytta från Anki"
---

En Anki-import kan slutföras utan ett enda felmeddelande och ändå förstöra det som gör din kortlek användbar. Texten kommer med. Korten går att öppna. Sedan märker du att CSS-koden är borta, att ett ljudfält är tomt, att alla kort räknas som nya eller att en anteckning inte längre skapar kort i de riktningar du förväntade dig.

Det är den kostsamma delen av att jämföra alternativ till Anki. En smidigare redigerare eller ett billigare abonnemang är lätt att se före bytet. Problem med mallar, repetitionshistorik, repetitionsdatum, tillägg, media offline och möjligheten att flytta vidare märks ofta först när skadan redan är skedd.

Den här jämförelsen börjar där. Den går igenom sju appar som Anki, vad var och en kan ta med från en befintlig samling, vad som förändras efter importen och när det säkrare valet är att behålla Anki.

> **Om min koppling till produkterna:** Jag heter Kirill Markin och utvecklar [Nibomo](https://nibomo.com/), en av produkterna nedan. Jag tog med den för dess öppna källkod, möjligheten till egen drift och arbetsflöden med agenter. Den är ingen självklar vinnare: den saknar direktimport av `.apkg`, information går förlorad vid flytt från Anki och egen drift av hela systemet kräver att du faktiskt sköter infrastrukturen.

**Faktakontrollerat:** 28 augusti 2026. Priserna är de offentliga amerikanska priserna eller angivna lokala priserna som fanns det datumet. Skatter, regioner, utbildningserbjudanden och betalning via appbutiker kan påverka beloppet.

![En urmakare kontrollerar om ett beprövat fickursverk passar i en annan boett](/blog/best-anki-alternatives.png)

## Det korta svaret innan du flyttar något

Utgå från att behålla Anki. Byt först när en annan app löser ett återkommande problem som gör flytten värd besväret.

Tre produkter tar emot Anki-paket med inlärningsdata, men deras löften sträcker sig olika långt:

- **Mnemosyne** dokumenterar fullständig Anki-import med anpassade korttyper och inlärningsdata. Det är det alternativ här som ligger närmast ett traditionellt, lokalt arbetsflöde med öppen källkod på datorn, även om det saknar en app utvecklad för iOS.
- **Mochi** importerar `.apkg`-filer med repetitionshistorik. Det omvandlar HTML till Markdown, tar bort CSS och JavaScript och ersätter Ankis fyra repetitionsknappar med Remembered eller Forgot.
- **RemNote** importerar `.apkg`-filer, de flesta anteckningstyper och repetitionshistorik. Den aktuella guiden säger också att importerade kort hamnar i en separat kö, **Need to Learn**. Läs därför inte ”repetitionshistoriken importeras” som ”dagens Anki-kö kopieras exakt”.

Med de övriga fyra bygger du upp innehållet på nytt i stället för att flytta samlingen:

- **Quizlet** är användbart för offentliga studieset, klasser, spel och vägledd övning.
- **Brainscape** ger en grupp ett enklare repetitionsflöde där man bedömer sin säkerhet på en skala från 1 till 5.
- **SuperMemo** innebär ett byte till dess egen metod och kurskatalog.
- **Nibomo** ger dig MIT-licensierade webb- och plattformsspecifika klienter, en backend som du kan drifta själv samt API- och MCP-åtkomst. I arbetsflödet med TXT eller CSV granskar du kortutkasten, men Ankis inlärningsstatus följer inte med.

Om dina kort är beroende av exakt återgivning, tillägg eller den aktuella repetitionskön är det inte obeslutsamhet att stanna i Anki. Det är svaret.

## Börja med att inventera vad din Anki-samling faktiskt innehåller

En ”kortlek” är inte ett enda flyttbart objekt. Innan du jämför produkter behöver du skilja på de olika delar du kan komma att flytta.

| Del av samlingen | Vad Anki kan lägga i ett paket | Vad mottagaren uttryckligen måste stödja |
| --- | --- | --- |
| **Anteckningsinnehåll** | Textfält och sparad HTML | Fältmappning, lucktexter, icke-latinsk text, kod och radbrytningar |
| **Kortgenerering** | Anteckningstyper och kortmallar | Kort i båda riktningarna, anpassade fält, CSS och JavaScript-beteende |
| **Media** | Lokala bilder, ljud och andra filer när **Include media** är aktiverat | Extrahering av filer, referenser, formatstöd och synkronisering mellan enheter |
| **Organisation** | Kortlekar, underkortlekar, taggar och valfria förinställningar för kortlekar | Hierarki, taggarnas betydelse, förinställningar och avgränsning av studiematerial |
| **Inlärningsstatus** | Schemaläggningsinformation och repetitionshistorik när de inkluderas | Repetitionsdatum, intervall, tillfällen då tidigare inlärda kort glömts bort och omvandling till mottagarens schemaläggare |
| **Kod för arbetsflödet** | Tillägg ingår inte i kortlekspaketet | Ersättning för verktyg i kortbläddraren, massredigering, generering av anteckningar och andra tilläggsfunktioner |

[Ankis exportmanual](https://docs.ankiweb.net/exporting.html) beskriver alla dessa paketalternativ. En textimporterare ser bara den första raden och möjligen taggar. En direktimport av `.apkg` kan läsa mer, men varje produkt bestämmer vad som ska omvandlas och vad som ska kastas bort.

Därför är ”importerar Anki” för vagt för att ligga till grund för ett byte. Ställ tre separata frågor:

1. **Betyder kortet fortfarande samma sak?** Kontrollera fält, de riktningar korten genereras i, lucktexter, media och återgivning.
2. **Vet den nya appen vad jag har lärt mig?** Kontrollera repetitionstillfällen, aktuell status, repetitionsdatum och den första riktiga kön.
3. **Kan jag flytta vidare igen?** Exportera från den nya appen och undersök vad exportformatet faktiskt innehåller.

En import kan klara den första frågan och misslyckas med de andra två.

## Vad som följer med vid flytten

| Produkt | Importväg från Anki | Inlärningsstatus | Viktigaste förlusten att testa |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Direktimport av `.apkg`](https://help.remnote.com/en/articles/6751471-importing-from-anki) för de flesta anteckningstyper, media och repetitionshistorik | Historiken följer med, men importerade kort hamnar i RemNotes separata kö **Need to Learn** | Omfattande CSS, anpassad JavaScript, viss genererad talsyntes och omdöpta fält för bildmaskering |
| [Mochi](https://mochi.cards/) | [Direktimport av `.apkg`](https://mochi.cards/docs/import-and-export/importing/) med repetitionshistorik | Historiken följer med; dokumentationen lovar inte en identisk Anki-kö eller identiska repetitionsdatum | HTML blir Markdown; CSS och JavaScript tas bort; framtida bedömningar har två alternativ |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projektet dokumenterar [fullständig Anki-import](https://mnemosyne-proj.org/features) med anpassade korttyper och inlärningsdata | Inlärningsdata importeras till en annan schemaläggare | Mallarnas exakta beteende, den omvandlade repetitionsplanen och kortens återgivning måste fortfarande testas |
| [Quizlet](https://quizlet.com/) | [Klistra in termer och definitioner](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Inget från Anki | Anteckningstyper, mallar, kortlekar, mediestruktur och alla schemaläggningsdata |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX eller ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Inget från Anki | Mallar, tillägg, medieregler och alla schemaläggningsdata |
| [SuperMemo](https://www.supermemo.com/) | [Klistra in avgränsade rader med frågor och svar](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), högst 100 åt gången | Inget från Anki | Samlingens struktur, media, mallar och alla schemaläggningsdata |
| [Nibomo](https://nibomo.com/) | AI-assisterade kortutkast från Anki TXT eller CSV som granskas före import | Inget från Anki | Inget stöd för `.apkg`; mallar, korrekt återgivning av media, kortlekshierarki och alla schemaläggningsdata lämnas kvar |

## Pris, offlineanvändning, schemaläggning och kontroll

| Produkt | Pris kontrollerat 28 augusti 2026 | Begränsningar offline | Schemaläggare | Källkod och egen drift |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratis; Pro 8 USD/månad, debiteras som 96 USD/år](https://www.remnote.com/pricing) | Installerade appar kan redigera och repetera offline efter inloggning. Datorappen lagrar alla media i kunskapsbasen; mobilappen cachar bara vissa nyare bilder. Webbappen kräver att en flik hålls öppen. | [Anki SM-2 eller FSRS v6 i beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Appens kärna har sluten källkod; ingen dokumenterad, officiellt stödd väg till egen drift |
| **Mochi** | [Gratis offline; Pro-synkronisering 5 USD/månad](https://mochi.cards/#pricing-section) | Installerade appar fungerar helt offline utan konto. Webbläsarens lagring kan rensas. | [Mochis schemaläggare eller FSRS](https://mochi.cards/docs/reviewing/fsrs/), båda med Remembered / Forgot | Appens kärna har sluten källkod; offentliga kodarkiv innehåller integrationer, inte en app för egen drift |
| **Mnemosyne** | Gratis | [Lokal användning på dator och offlinerepetition på Android](https://mnemosyne-proj.org/download-mnemosyne.php); Android kan inte redigera. Ingen app utvecklad för iOS. | Adaptiv schemaläggning med minnesbedömningar från 0 till 5 | Källkodslicenser per komponent; egen synkserver på dator eller server utan grafiskt gränssnitt |
| **Quizlet** | Gratis grundfunktioner; [Plus 35,99 USD/år, Plus Unlimited 44,99 USD/år](https://quizlet.com/upgrade?source=signup) | Nedladdade set fungerar offline i iOS- och Android-apparna med Flashcards och Match. | [Intervallrepetition på webben](https://quizlet.com/features/spaced-repetition) för set med minst 100 termer; mobilstöd anges fortfarande som kommande. Learn är separat adaptiv övning. | Sluten molntjänst; ingen officiellt stödd väg till egen drift |
| **Brainscape** | [Gratis; Pro 7,99 USD/månad vid årsbetalning](https://www.brainscape.com/pricing) | [Mobilappen kan spara arbete offline och senare synkronisera tidigare nedladdade klasser](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentationen lovar inte ett fullständigt lokalt bibliotek. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), bedömning 1–5 | Sluten molntjänst; ingen officiellt stödd väg till egen drift |
| **SuperMemo** | Gratis konto med begränsningar; [35,99 PLN/månad eller 359 PLN/år](https://www.supermemo.com/en/premium-subscription) | Nedladdade mobilkurser fungerar offline; redigering, AI, sökning, inspelningar och statistik gör det inte. | [SuperMemos egen slutna metod](https://www.supermemo.com/en/supermemo-method) | Sluten molntjänst; ingen officiellt stödd väg till egen drift |
| **Nibomo** | [Molntjänstens grundfunktioner är gratis under betan; programvaran är gratis att drifta själv](/sv/pricing/), plus dina infrastrukturkostnader | Plattformsspecifika appar skriver lokalt efter inloggning online och första nedladdningen av arbetsytans data; fjärrlagrade media måste redan finnas i cachen. | [FSRS](/docs/architecture/#scheduling) | MIT; den officiellt stödda produktionsdriften är ett komplett system centrerat kring AWS |

Tabellerna ger ingen totalpoäng. En direktimport kan väga tyngre än alla andra funktioner om du har 30 000 väl inlärda kort. En app utvecklad för iPhone kan avgöra valet om det är där du repeterar. Tillgång till källkoden spelar roll först när du eller någon du litar på kommer att underhålla den.

Alla produkter här går att börja använda gratis, men det kostar ändå att flytta till ett gratis alternativ till Anki. Abonnemangspriset är lätt att räkna på. Att bygga om mallar, kontrollera media och börja om med repetitionshistoriken kostar ofta mer.

## RemNote: flytta korten till sammanlänkade anteckningar

RemNote förändrar var korten kommer ifrån. I stället för att underhålla en separat kortlek vid sidan av föreläsningsanteckningarna skapar du kort i en disposition, ett dokument eller ett PDF-arbetsflöde. Det är ett konkret skäl att lämna Anki om kopierandet mellan en anteckningsapp och en kortapp har blivit det tidskrävande momentet.

Importstödet är brett, men det är viktigt att förstå vad som händer med repetitionskön. RemNotes [aktuella guide för Anki-import](https://help.remnote.com/en/articles/6751471-importing-from-anki) säger att du ska exportera en `.apkg` med schemaläggningsinformation, förinställningar för kortlekar och media. Den importerar repetitionshistorik och de flesta anteckningstyper, däribland grundläggande kort, lucktexter och vanliga bildmaskeringskort.

Samma guide säger att nyimporterade kort hamnar i en separat kö, **Need to Learn**. RemNote får alltså tillgång till historiken, men dokumentationen lovar inte att din aktuella Anki-kö med kort som ska repeteras dyker upp oförändrad. Omfattande CSS tas också bort, anpassad JavaScript stöds inte, viss talsyntes som genereras i stunden fungerar inte och import av bildmaskering kräver att anteckningar och fält har de namn importören förväntar sig.

Prova en representativ kortlek och granska både korten och den första kön. En import som ser bra ut är bara halva testet.

De installerade dator- och mobilapparna fungerar offline efter installation och inloggning. [Offlineguiden](https://help.remnote.com/en/articles/6752029-offline-mode) drar en viktig gräns för media: datorappen lagrar alla bilder och PDF-filer i kunskapsbasen, medan mobilappen bara cachar vissa nyare bilder. Webbappen kan fortsätta fungera i en redan öppen flik, men går inte att starta från stängt läge offline.

Använd RemNote om nyttan med sammanlänkade anteckningar är värd att ändra samlingens upplägg för. Behåll Anki om kortmallar och tillägg är själva systemet och inte bara utsmyckning runt det.

## Mochi: lokal Markdown med en fullständig export i eget format

Mochi är ett mer avskalat alternativ för den som vill ha lokala data, kort i Markdown och färre kontroller på skärmen. De installerade apparna finns för alla stora dator- och mobilplattformar och kan användas [helt offline utan konto](https://mochi.cards/docs/getting-started/download-and-install/). Synkroniseringen kostar 5 USD per månad.

Direktimporten från Anki tar med repetitionshistoriken, vilket ger Mochi ett tydligt försprång framför alternativen som bara importerar text. Omvandlingen är också ovanligt tydligt beskriven: Mochi tar bort CSS och JavaScript och omvandlar HTML till Markdown. Det fungerar när betydelsen finns i texten och vanliga bilagor. Det är en varningssignal när mallen bär betydelsen.

Mochi erbjuder nu två schemaläggare. Den egna algoritmen är fortfarande standard, men [FSRS kan aktiveras](https://mochi.cards/docs/reviewing/fsrs/) utan att nollställa befintliga framsteg i Mochi. FSRS beräknar kortens status utifrån den repetitionshistorik som Mochi har. Bedömningen har fortfarande två alternativ – Remembered eller Forgot – även med FSRS. Anki-användare som använder Hard och Easy som separata signaler får alltså räkna med en annan vardagsrytm.

Det är tydligare hur du får ut dina data igen än i de flesta appar med sluten källkod. En export i det egna [`.mochi`-formatet](https://mochi.cards/docs/import-and-export/exporting/) innehåller kort, mallar, bilagor, taggar, kortleksstruktur och repetitionshistorik. Markdown och CSV är lättare att granska i andra program, men utelämnar repetitionshistorik och andra metadata.

Mochis offentliga GitHub-arkiv innehåller [integrationer och relaterade verktyg](https://github.com/mochi-cards/open-source), inte appens kärna eller en officiellt stödd synkserver. Välj det för offlineanvändning och möjligheten att flytta dina data, inte för kontroll över källkoden.

## Mnemosyne: datoralternativet med öppen källkod

Mnemosyne ligger närmast den traditionella modellen med ett program och en lokal databas. Den aktuella versionen stöder Windows, macOS och Linux, med en Android-klient för repetition offline. Funktionssidan beskriver kort med rikt innehåll, hierarkiska taggar, insticksprogram, en repetitionsskala från 0 till 5 och fullständig Anki-import med anpassade korttyper och inlärningsdata.

Det här är den mest direkta flyttvägen till öppen källkod om du vill lämna Anki utan att gå över till ett stort anteckningssystem eller en molntjänst. Det finns också en [inbyggd synkserver](https://mnemosyne-proj.org/help/syncing) som kan köras på en dator eller en maskin utan grafiskt gränssnitt och sammanfoga inlärningsdata från flera klienter.

Ta också med begränsningarna i beslutet. Android-klienten [kan inte redigera kort](https://mnemosyne-proj.org/help/android-client). iOS-användare måste repetera i webbläsaren via en server som körs på en annan maskin, och serverns officiella funktionssida varnar för att den saknar säkerhetsfunktioner. Egen synkdrift innebär också att hålla servern tillgänglig, konfigurera nätverket och säkerhetskopiera datakatalogen.

Licenserna är mer specifika än en enkel ”GPL”-etikett: [projektets licensfil](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) hänvisar till olika villkor för olika komponenter. [Kärnans licens](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) är AGPL v3 med ett extra villkor om namn och angivande av upphovsperson, medan [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) använder LGPL v3. Läs filerna om du planerar att modifiera eller distribuera programvaran vidare.

## Quizlet: byt för klassrummet, inte för att bevara samlingen exakt

Quizlets styrka ligger på ett annat område. Offentliga studieset, klasser som lärare skapar, delning, Match, Test, Learn och gruppaktiviteter är enklare att låta en klass komma igång med än en anpassad Anki-profil.

Gränsen för flytten går vid ren text. Quizlet kan omvandla inklistrade rader till termer och definitioner, men läser inte en `.apkg` och återskapar anteckningstyper, mallar, schemaläggning eller repetitionshistorik. Skapare kan [exportera sina egna set som kopierad text](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), utan bilder. Set som kopierats från andra användare kan inte exporteras. Du kan alltså flytta innehållet, men inte samlingen som helhet.

Quizlets schemaläggning håller på att förändras. Det nya flödet [Spaced Repetition](https://quizlet.com/features/spaced-repetition) aktiveras automatiskt på webben för set med minst 100 termer och använder bedömningarna Repeat, Hard, Okay och Easy. Quizlet anger fortfarande att mobilstöd kommer senare. Learn är fortsatt ett separat adaptivt övningsflöde med användningsgränser kopplade till betalabonnemang.

Offline betyder också mobilapparna, inte webbplatsen. Quizlet sparar automatiskt åtta nyligen använda set och låter dig ladda ned fler. [Flashcards och Match fungerar offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), och framstegen synkroniseras när anslutningen är tillbaka.

Flytta hit när målet är att sprida material och arbeta i klassrummet. Att bygga om ett inarbetat personligt repetitionsschema bara för att få de funktionerna är oftast en dålig bytesaffär.

## Brainscape: färre schemaläggningsval, mindre som följer med

Brainscape ber dig bedöma hur säker du är på svaret från 1 till 5 och använder den signalen för att visa svåra kort igen tidigare. Den fullständiga formeln är inte publicerad, men arbetssättet är lätt att lära ut till en hel klass.

Det tar emot CSV-, TXT-, XLSX- och ODS-filer. Det är praktiskt för kort med fram- och baksida, men innebär att mallar, tillägg, medieregler och Ankis inlärningsdata lämnas kvar. Export av en personlig säkerhetskopia är en Pro-funktion och ger filer som kan öppnas i ett kalkylprogram och importeras igen senare.

Brainscapes aktuella hjälpcenter säger att webbplatsen och mobilapparna nu har samma grundfunktioner för att hitta, skapa, dela och studera material. Det beskriver också mobilanvändning offline, manuell omsynkronisering och uppdateringar av klasser som redan laddats ned till enheten. Det ger en praktisk väg tillbaka när anslutningen återkommer, men inget löfte om att hela kontot finns som ett fullständigt lokalt bibliotek.

Export av egna kortlekar är fortfarande en [Pro-funktion](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Det finns ingen officiellt publicerad källkod eller väg till egen drift.

Brainscape är värt att överväga när Anki kräver för mycket konfigurering för dem som ska studera. Det är ingen bra utväg för någon som redan har nytta av de inställningarna.

## SuperMemo: välj metoden och acceptera en nystart

Den nuvarande tjänsten SuperMemo.com är en plattform för språkinlärning på webben, iOS och Android som bygger på SuperMemos egen slutna schemaläggningsmetod. Den är skild från den äldre Windows-produkt som långvariga SuperMemo-användare kanske känner till.

Här väljer du en metod och en kurskatalog, snarare än en smidig flytt från Anki. SuperMemo stöder [att skapa flera kort åt gången genom att klistra in rader med frågor och svar åtskilda av avgränsare](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), med en gräns på 100 kort per import. Jag hittade ingen aktuell officiell `.apkg`-import eller exportväg för användare av molntjänsten. Mallar, tillägg, mediestruktur och repetitionshistorik följer därför inte med via den dokumenterade vägen.

Nedladdade kurser kan studeras offline i mobilapparna. [Offlineguiden](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) undantar AI-funktioner, tillägg av MemoCards, sökning, inspelningar, statistik och kursredigeraren. Förbered därför materialet och synkronisera innan du kopplar ned.

Välj SuperMemo om du vill ha dess egen metod eller kurskatalog så mycket att du är beredd att börja med ett nytt schema. Om det viktigaste är att behålla ditt befintliga schema löser det fel problem.

## Nibomo: tillgång till hela systemets källkod, men svagast Anki-import

Nibomo ger dig kontroll över en stor del av systemet. Det [MIT-licensierade kodarkivet](https://github.com/kirill-markin/flashcards-open-source-app) innehåller webbappen, iOS- och Android-klienterna, backend, offlinesynkronisering, infrastruktur, [offentligt API](/docs/api/) och [MCP-server](/docs/mcp-connector/). Repetitionerna använder [FSRS](/docs/architecture/#scheduling). Webb-, iOS- och Android-klienterna skriver först lokalt, lägger ändringar i en utkorg och synkroniserar när anslutningen återkommer.

Det gör inte Nibomo kompatibelt med Anki. Nibomo kan inte läsa `.apkg` eller `.colpkg`. Den stödda [flytten via Anki TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) är ett AI-assisterat arbetsflöde där kortutkast granskas, främst för textbaserade kort. Det bevarar inte mallar, tillägg, kortlekshierarki, repetitionsdatum, intervall eller repetitionstillfällen. Mediereferenser i en TXT-fil är inte mediefiler, så kortlekar med mycket media måste byggas om och kontrolleras separat.

Nibomos eget paketformat `flashcards.zip` omfattar också mindre än en säkerhetskopia. Det flyttar kort, taggar och tillhörande media mellan arbetsytor i Nibomo. Det flyttar inte repetitionshistorik, FSRS-status, fullständiga kortleksstrukturer, arbetsyteinställningar eller konton.

Molntjänstens grundfunktioner är [gratis under betan](/sv/pricing/). Egen drift av produktionssystemet är ingen Docker-installation med ett enda kommando: [guiden för egen drift](/docs/self-hosting/) använder AWS CDK och kräver AWS-tjänster samt Cloudflare, Resend och Sentry. Du behöver också hantera hemliga nycklar, migreringar, säkerhetskopior, återställningar och uppgraderingar. Docker Compose är vägen för utveckling, inte den officiellt stödda produktionsdriften.

Använd Nibomo när tillgång till all källkod och en backend som du själv styr är skälet till bytet, och dina kort är tillräckligt enkla för att byggas om säkert. [Öppna molnappen](https://app.nibomo.com/) och prova med en liten tillfällig kortlek. Behåll Anki – eller testa RemNote, Mochi eller Mnemosyne – när det viktigaste är att bevara inlärningsstatus korrekt.

## Vilket alternativ till Anki fungerar på iOS utan obehagliga överraskningar vid flytten?

Ett ”alternativ till Anki för iOS” kan betyda två olika saker: en app utvecklad för iPhone eller ett alternativ till [AnkiMobiles engångsköp på 24,99 USD](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo och Nibomo har alla iOS-appar. Mnemosyne har det inte. Frågan om flytten kvarstår ändå:

- **Mochi** bevarar mer än iOS-alternativen som bara tar emot text: det importerar repetitionshistorik från `.apkg`, med omvandling till Markdown och två bedömningsalternativ.
- **RemNote** importerar också repetitionshistorik från `.apkg`, men testa dess **Need to Learn**-kö i stället för att anta att dagens Anki-schema överlever.
- **Quizlet** passar för att sprida material i klassrummet, men vägen från Anki går bara via text och det nya flödet för intervallrepetition finns ännu inte på mobilen.
- **Nibomo** är alternativet med tillgänglig källkod och en klient utvecklad för iOS, men flytten från Anki nollställer inlärningsstatus.
- **Brainscape** och **SuperMemo** är rimliga val bara om deras repetitionsmetod är värd arbetet med att bygga upp korten och schemat på nytt.

Innan du lämnar AnkiMobile på grund av priset bör du jämföra det med kostnaden för ett abonnemang och timmarna som krävs för att reparera en flytt. Ett engångsköp kan bli billigare än en gratisapp som förvandlar en väl inarbetad samling till ett manuellt projekt.

## När det är säkrare att behålla Anki

Att stanna är också ett beslut, inte ett misslyckande med att välja något nyare. Behåll Anki om något av det här stämmer:

- din samling är beroende av anpassade mallar, CSS, JavaScript eller tillägg;
- bildmaskering (Image Occlusion), ljud eller andra media är avgörande för kortens betydelse;
- en anteckning genererar kort i flera riktningar som måste förbli länkade;
- flera års repetitionshistorik och aktuella repetitionsdatum är mer värda än en ny redigerare;
- du är beroende av ett datorbaserat arbetsflöde eller en kombination av plattformar som alternativet inte motsvarar;
- ersättarens offlineläge fungerar bara i en klient som du inte kommer att använda;
- du vill i teorin drifta själv men vill inte sköta drift, säkerhet, säkerhetskopiering och uppgraderingar av en server;
- alternativet löser inget återkommande problem utöver att se mer avskalat ut.

Anki erbjuder fortfarande ett moget ekosystem av tillägg, flexibla antecknings- och kortmallar, FSRS och inställningar för äldre schemaläggning, lokalt installerade klienter och paketformat som kan bära med sig samlingen. Ingen av produkterna ovan återskapar allt detta.

För en mer avgränsad jämförelse av hur mycket kontroll du får, läs [guiden till kortappar med öppen källkod](/blog/best-open-source-flashcard-apps-2026/). Om offlinebeteendet avgör valet skiljer [jämförelsen av kortappar offline](/blog/best-offline-flashcards-app/) på installerade appar, cachat innehåll och webbläsarflikar.

## En checklista för flytten där svaret fortfarande kan bli nej

Börja inte med hela samlingen. Gör ett test som får misslyckas.

1. **Skapa ett återställningspaket.** Exportera en `.colpkg` med media, spara den utanför Anki-profilen och behåll en andra kopia någon annanstans.
2. **Välj den besvärliga kortleken.** Ta med lucktexter, anpassade fält, kort i båda riktningarna, underkortlekar, taggar, bilder, ljud och tillräckligt mycket repetitionshistorik för att se hur schemat omvandlas.
3. **Exportera det format som mottagaren faktiskt stöder.** Använd `.apkg` med schemaläggning, förinställningar och media för direktimport. Använd Notes in Plain Text bara om du accepterar att enbart bygga upp innehållet på nytt.
4. **Dokumentera utgångsläget.** Skriv ned antalet anteckningar och kort, namn på taggar och kortlekar, antalet mediefiler, några repetitionsdatum och intervall samt hur många kort varje anteckningstyp ska generera.
5. **Importera till en tillfällig miljö.** Skriv inte över källprofilen och slå inte samman det första testet med ett permanent bibliotek i den nya appen.
6. **Granska innehåll och inlärningsstatus var för sig.** En korrekt fram- och baksida bevisar inte att lucktexter, media, syskonkort, repetitionshistorik eller nästa repetitionsdatum har överlevt.
7. **Starta appen från stängt läge offline på varje enhet du faktiskt använder.** Repetera, redigera, stäng appen helt, öppna den igen utan anslutning, återanslut sedan och kontrollera en annan enhet.
8. **Granska kön innan schemana börjar skilja sig åt.** Jämför den första uppsättningen kort som ska repeteras och ett urval intervall innan du bedömer samma ordinarie kort i båda apparna. Efter den första repetitionen i den andra appen är de två schemana oberoende av varandra.
9. **Testa att flytta vidare innan du bestämmer dig.** Exportera från den nya appen och undersök vad du skulle kunna få tillbaka om du lämnar den nästa år.
10. **Behåll Anki och den orörda säkerhetskopian.** Radera ingetdera förrän ersättaren har klarat normal användning och du medvetet har accepterat varje förlust.

Om mottagaren bara tar emot text, följ det fullständiga [arbetsflödet för säker TXT-export](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Det skiljer återställningsfilen `.colpkg` från den flyttbara arbetsfilen och gör nollställningen tydlig.

## Fatta beslutet i den här ordningen

Börja med det du inte har råd att förlora:

1. Om exakta mallar, tillägg eller den aktuella kön är avgörande, behåll Anki om inte ett test med en representativ `.apkg` visar att bytet fungerar.
2. Om anteckningar och kort ska bli ett enda system, testa RemNote. Kontrollera **Need to Learn**-kön, inte bara de importerade sidorna.
3. Om lokal Markdown och exporter som går att granska väger tyngre än Ankis återgivning, testa Mochi.
4. Om du vill ha en fokuserad datorapp med öppen källkod och direkt Anki-import, testa Mnemosyne – och bekräfta att mobilbegränsningarna passar dina rutiner.
5. Om det verkliga problemet är att sprida material i klassrummet eller få ett enklare gemensamt repetitionsflöde, bygg upp ett litet set på nytt i Quizlet eller Brainscape.
6. Om du specifikt vill ha SuperMemos metod, acceptera ett nytt schema. Om du specifikt vill ha källkoden till hela systemet, egen drift samt API- och MCP-åtkomst, acceptera att information går förlorad när innehållet byggs om i Nibomo och att driften kräver arbete.

För en jämförelse funktion för funktion mellan tre mycket olika modeller, se [Anki, Quizlet och Nibomo jämförda](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

En användbar regel är enkel: byt när vinsten är konkret och du har testat vad som går förlorat. Om din representativa kortlek inte klarar flytten ordentligt är det inte en försiktig reservlösning att behålla Anki. Det är jämförelsens resultat.
