---
title: "Alternativ till RemNote 2026: gratisappar och öppen källkod"
description: "Jämför alternativ till RemNote för anteckningar, PDF-filer, kort, pris och egen drift. Se vad som följer med, vad som går förlorat och hur du testar en säker flytt."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "alternativ till remnote"
  - "remnote alternativ"
  - "remnote öppen källkod"
  - "gratis alternativ till remnote"
  - "remnote jämfört med anki"
  - "alternativ till remnote med öppen källkod"
  - "alternativ till remnote för egen drift"
  - "flashcard-app offline"
---

RemNote kallar sin Anki-export **Flashcards Only**. Listpunkter utan kort hoppas över, och paketet innehåller varken dina sammanlänkade anteckningar, PDF-filer eller ditt arbetsflöde i Reader. Ett alternativ kan ta emot alla frågor och svar och ändå lämna kvar det system som gjorde korten användbara.

Det bästa **alternativet till RemNote** löser skälet till att du vill byta utan att i det tysta ta bort den del av RemNote som fortfarande fungerar. För vissa handlar det om priset. För andra är det vanliga lokala filer, ett mer avancerat kortsystem eller källkod de kan köra själva.

> **Om min koppling till produkterna:** Jag heter Kirill Markin och utvecklar [Nibomo](/sv/), en av produkterna i jämförelsen. Nibomo ersätter inte RemNote fullt ut. RemNote har det starkaste integrerade arbetsflödet för anteckningar och PDF-filer i den här jämförelsen, medan Anki har det mest utvecklade kortsystemet och de mest etablerade formaten för att flytta data.

**Fakta och priser kontrollerade:** 31 augusti 2026. Priserna är offentliga USA-priser med årsbetalning där det anges. Skatter, regioner, appbutiker och betavillkor kan påverka beloppet.

![En arkivkonservator testar en liten överföring från ett intakt sammanlänkat studiearkiv till separata system för kort, filer och block](/blog/remnote-alternative.png)

## Börja med skälet till att du vill byta

- **Pris:** Kontrollera om RemNote Free redan täcker ditt faktiska arbetsflöde. Det inkluderar obegränsat med anteckningar, flashcards och synkroniserade enheter, men begränsar antalet dokument med kommentarer och markeringar samt tillgången till vissa avancerade funktioner.
- **Ett kortflöde som känns för bundet till anteckningar:** Testa Anki. Där kan kort, mallar, import och FSRS stå i centrum för studierna.
- **Vanliga lokala anteckningsfiler:** Dela upp arbetet mellan Obsidian för Markdown-anteckningar och Anki för repetition. Det blir mindre integrerat, men gränsen för vad du själv kontrollerar blir mycket tydligare.
- **Sammanlänkade anteckningar med öppen källkod, PDF-filer och inbyggda kort:** Logseq kommer närmast här, med ett viktigt förbehåll för 2026: den nya databasversionen är i beta, den nya iOS-appen och realtidssynkroniseringen är i alfa, och den nya Android-appen är ännu inte öppen för testning.
- **Källkod och egen drift för ett renodlat kortsystem:** Överväg Nibomo om kort med fram- och baksida räcker och du accepterar ett nytt repetitionsschema samt ett omfattande driftansvar i AWS.
- **PDF-läsning, länkade markeringar och kort på samma ställe:** Stanna hos RemNote. Inget av de andra alternativen återskapar det arbetsflödet på ett smidigt sätt.

Det sista svaret är lätt att förbise. Ett byte är inget framsteg om alternativet ger dig den licens du föredrar men förstör morgondagens studiepass.

## Alternativ till RemNote: jämförelsetabellen

| Alternativ | Främsta skälet att välja det | Anteckningar och PDF-filer | Schemaläggare | Offline och kontroll över data | Pris kontrollerat 31 augusti 2026 | Viktigaste begränsningen vid flytt |
|---|---|---|---|---|---|---|
| **Stanna hos RemNote** | Sammanlänkade anteckningar, läsning av källmaterial och kort hör ihop | Inbyggd kunskapsbas och Reader med länkade PDF-markeringar, anteckningar och kort | FSRS-6 i beta med manuell aktivering och träning av vikter; SM-2 är fortfarande standard | Dator- och mobilappar fungerar offline efter inloggning; lokala kunskapsbaser utan synkronisering finns på dator | Free är gratis; Pro 8 USD/månad med årsbetalning; Pro with AI 18 USD/månad med årsbetalning | Export i det egna formatet är bäst för återställning i RemNote, men saknar för närvarande bilder och PDF-filer |
| **Anki** | Kort, mallar, tillägg och att bevara samlingen så fullständigt som möjligt kommer först | Ingen integrerad arbetsyta för sammanlänkade anteckningar eller PDF-läsning | Välutvecklade FSRS-inställningar, optimerade parametrar, önskad minnesbehållning och simulering av arbetsbelastning | Lokala samlingar på dator och mobil; datorappens kärna har öppen källkod och en officiell synkserver för egen drift finns | Datorappen, AnkiWeb och AnkiDroid är gratis; officiella AnkiMobile är en betalapp för iOS | RemNote exporterar kort till `.apkg`, inte hela anteckningssystemet; kontrollera schemaläggningsdata och media med en testimport |
| **Obsidian + Anki** | Du vill ha vanliga lokala Markdown-anteckningar utan att ge upp en välutvecklad schemaläggare för kort | Obsidian hanterar lokala anteckningar och bilagor; Anki hanterar kort; inget sammanhållet flöde från Reader till repetition | Ankis FSRS | Lokalt Markdown-valv och lokal Anki-samling; Obsidian är gratis men proprietärt | Obsidian gratis; valfri Sync från 4 USD/månad med årsbetalning; Ankis priser enligt ovan | RemNotes Markdown- och Anki-exporter skapar två system; RemNotes levande länkar mellan anteckningar, källor och kort blir inte ett gemensamt portabelt arbetsflöde |
| **Logseq** | Du vill specifikt ha ett verktyg med öppen källkod för hierarkiska anteckningar, PDF-filer och inbyggda kort | Sammanlänkade block, kommentarer och markeringar i PDF-filer samt kortrepetition med fyra betyg | Inbyggd schemaläggare med fyra betyg; [dokumentationen länkar dess nya algoritm](https://github.com/logseq/docs/blob/master/db-version.md#cards) till det ursprungliga FSRS-projektet | AGPL-licensierad app; databasversionens data kan exporteras som SQLite, EDN eller vanlig Markdown med informationsförlust | Gratisapp med öppen källkod | Den nuvarande databasversionen är i beta; den nya iOS-appen och realtidssynkroniseringen är i alfa, den nya Android-appen är ännu inte öppen för testning, och äldre SRS-data i Logseq är inte kompatibla med den nya kortalgoritmen |
| **Nibomo** | Du vill ha enkla kort i ett system med öppen källkod för webb, mobil och backend | Ingen kunskapsbas för anteckningar, inga bakåtlänkar, ingen PDF-läsare eller separat datorapp | FSRS-6 med fasta vikter och färre justeringsmöjligheter än Anki eller RemNote | Webb, iOS och Android med offlineanvändning som grund; hela systemet är MIT-licensierat med en väg till produktionsdrift i AWS | Molntjänsten är gratis under betan; egen drift medför kostnader för infrastruktur och leverantörer | Ingen direktimport från RemNote eller Anki; innehållet kan byggas upp på nytt, men repetitionshistorik och FSRS-tillstånd följer inte med |

Det här är ingen poängsättning av funktioner. En student som arbetar mycket med PDF-filer kan förlora mer på att välja det ”mest öppna” alternativet än licensen ger tillbaka. Den som har en enkel gloskortlek kanske betalar för ett anteckningssystem som inte längre används. Börja med raden som beskriver ditt problem och testa sedan vad som faktiskt följer med vid en flytt.

Gratis och öppen källkod är separata urvalskriterier. RemNote Free och Obsidians grundapp kostar inget men är proprietära. Källkoden är offentlig för kärnan i Ankis datorapp, Logseq och Nibomo. AnkiMobile är fortfarande en betalapp för iOS, och egen drift av Nibomo medför fortfarande molnkostnader.

## Stanna hos RemNote när det sammanhängande arbetsflödet är själva poängen

RemNote förenar de steg som de flesta alternativ delar upp. Dess [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) kan hålla en PDF öppen bredvid anteckningarna, klistra in hänvisningar till exakta markeringar och göra flashcards av anteckningarna eller markeringarna. Free-abonnemanget låter dig kommentera och markera i tre dokument. Den aktuella [prissidan](https://www.remnote.com/pricing) anger obegränsat antal sådana dokument för Pro.

Schemaläggaren är inte längre ett självklart skäl att lämna. RemNote dokumenterar nu [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) som ett betaalternativ som du aktiverar manuellt. Efter minst 1 000 repetitioner kan RemNote träna vikter utifrån din egen historik. Anki har fortfarande fler inställningar, men den som gillar RemNotes anteckningar och PDF-funktioner behöver inte överge dem bara för att använda FSRS.

Offlinestödet är också bättre än ”fungerar i en öppen webbläsarflik”. I RemNotes [dator- och mobilappar](https://help.remnote.com/en/articles/6752029-offline-mode) kan du redigera anteckningar och repetera kort offline efter installation och inloggning. Datorappen lagrar en fullständig lokal kopia av bilder och PDF-filer. Mobil- och webbversionen kan sakna media som inte har cachelagrats, och webbappen kan inte starta från en stängd eller omladdad flik utan anslutning.

Om du började söka efter ett **gratis alternativ till RemNote**, testa Free-abonnemanget innan du flyttar. Om problemet är tillgång till källkoden är lokalt läge inte samma sak som öppen källkod eller egen drift. Den separata guiden om [huruvida RemNote har öppen källkod](/blog/is-remnote-open-source/) går igenom den gränsen i detalj.

## RemNote jämfört med Anki: välj vad som ska stå i centrum

Den användbara skillnaden mellan **RemNote och Anki** är inte ”anteckningar eller inga anteckningar”. Anki lagrar också anteckningar, men en Anki-anteckning är en uppsättning fält som [kortmallar](https://docs.ankiweb.net/templates/intro.html) gör till repetitionskort. RemNote utgår från dokument och sammanlänkade listpunkter som kan bli kort. Det ena är ett välutvecklat system för att skapa kort, det andra en studiearbetsyta kring anteckningar och källor.

Välj Anki när egna fält, genererade kortvarianter, HTML/CSS-mallar, tillägg eller flera års repetitionshistorik är centrala. De aktuella [FSRS-inställningarna](https://docs.ankiweb.net/deck-options.html#fsrs) omfattar parameteroptimering, önskad minnesbehållning och simulering av arbetsbelastning. Ankis [exporter](https://docs.ankiweb.net/exporting.html) kan bevara en hel samling i `.colpkg`, medan kortlekspaket i `.apkg` kan inkludera schemaläggningsinformation, förinställningar och media.

RemNote erbjuder en väg till Anki, men beteckningen spelar roll: [Anki-exporten är ”Flashcards Only”](https://help.remnote.com/en/articles/7898019-exporting-notes). Listpunkter utan kort utelämnas. RemNote behåller sammanhang från överordnade punkter i de exporterade korten och förenklar flervalsfunktionen, men exporten är inte din kunskapsbas, ditt PDF-bibliotek eller hela ditt läsflöde. RemNotes officiella exportsida lovar inte heller att alla delar av schemaläggningstillståndet följer med till Anki. Testa innan du betraktar flytten som förlustfri.

Anki är det starkaste valet här för den som sätter korten först. Det är inte den smidigaste ersättaren för RemNote Reader. Om du fortfarande kommenterar artiklar och skriver sammanlänkade anteckningar, kombinera det med ett anteckningsverktyg i stället för att tvinga Anki att bli ett. Den [bredare guiden till Anki-alternativ](/sv/blog/best-anki-alternatives/) tar upp fler alternativ med korten i centrum.

## Obsidian plus Anki: lokala filer med en medveten uppdelning

Vissa som söker alternativ till RemNote behöver inte ännu en allt-i-ett-app. De vill ha anteckningar som förblir vanliga filer och ett repetitionssystem som kan utvecklas oberoende av dem. Obsidian plus Anki ger en tydlig sådan uppdelning.

[Obsidian lagrar anteckningar](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) som ren text med Markdown-formatering i en lokal mapp. Appen är gratis utan konto. Tillvalstjänsten [Obsidian Sync](https://obsidian.md/pricing) kostar från 4 USD per månad med årsbetalning. Obsidian har inte öppen källkod, men anteckningsfilerna går att läsa direkt och kan säkerhetskopieras med vanliga filverktyg.

Använd RemNotes Markdown-export för anteckningarna och dess `.apkg`-export för korten. Räkna med efterarbete. En hierarkisk disposition som exporteras till läsbar Markdown är inte samma sak som fungerande RemNote-referenser, portaler, mallar eller PDF-fästpunkter. När anteckningar och kort finns i två appar förs ändringar inte heller automatiskt över mellan dem.

Det här fungerar när kontroll över lokala filer väger tyngre än ett sömlöst arbetsflöde: ”markera, länka, skapa kort, repetera”. Det är en dålig affär när just det flödet var skälet till att du valde RemNote.

## Logseq: alternativet med öppen källkod och anteckningar i centrum är under omställning

Logseq hör hemma i en jämförelse av **alternativ till RemNote med öppen källkod**, eftersom anteckningar faktiskt är grunden. Det officiella [AGPL-licensierade kodarkivet](https://github.com/logseq/logseq) beskriver en app för kunskapshantering med sammanlänkade block och stöd för kommentarer och markeringar i PDF-filer. Den [aktuella dokumentationen för databasversionen](https://github.com/logseq/docs/blob/master/db-version.md#cards) beskriver också inbyggda kort: tagga ett block, se när det ska repeteras och repetera det med fyra betyg.

Det aktuella utvecklingsläget spelar större roll än funktionslistan. Logseqs eget kodarkiv anger att databasversionen är i beta medan den nya iOS-appen och realtidssynkroniseringen är i alfa. Den aktuella dokumentationen för databasversionen säger att Android-appen ännu inte är öppen för alfatestning. Logseq varnar uttryckligen för möjlig dataförlust och rekommenderar en testgraf utan kritiska data samt säkerhetskopior. I [ändringsanteckningarna för databasversionen](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) står också att den nya kortalgoritmen inte importerar egenskaper eller SRS-data från äldre Logseq-kort.

Möjligheterna att flytta data behöver beskrivas lika noggrant. Den aktuella [exportdokumentationen för databasversionen](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) erbjuder SQLite med tillhörande filer, EDN och vanlig Markdown. Den anger att EDN är den enda redigerbara exporten som fångar grafens data fullständigt, men rekommenderar ändå inte EDN som enda säkerhetskopia. Vanlig Markdown utelämnar egenskaper och tidsstämplar.

Logseq är alltså alternativet att utvärdera när öppen källkod, sammanlänkade anteckningar, PDF-filer och inbyggda kort alla spelar roll. Jag skulle inte använda det för att på en dag flytta en oumbärlig kunskapsbas för läkarstudier i augusti 2026. Kör det först parallellt med RemNote och låt den pågående omställningen stabiliseras på de enheter du faktiskt använder.

## Nibomo: öppen källkod för hela systemet, med fokus på kort

Nibomo gör nästan motsatt avvägning mot RemNote. Dess [funktioner](/sv/features/) kretsar kring Markdown-kort med fram- och baksida, kortlekar, taggar, media, FSRS-repetition, klienter byggda för offlineanvändning och AI-stödda kortutkast. Det saknar kunskapsbas för sammanlänkade anteckningar, PDF-läsare, separat datorapp och direktimport från RemNote.

Källkoden täcker hela systemet: det MIT-licensierade kodarkivet inkluderar webb, iOS, Android, autentisering, backend, synkronisering och infrastruktur. Den officiellt stödda [guiden till egen produktionsdrift](/docs/self-hosting/) använder AWS CDK. Det är inte ett lokalt system du startar med ett enda kommando. Den som driver det ansvarar för molnkostnader, hantering av hemliga nycklar och andra autentiseringsuppgifter, migreringar, övervakning, säkerhetskopior, återställningstester och separat byggda mobilappar.

Flytten är den större begränsningen för den som redan använder RemNote. Nibomo importerar sina egna `flashcards.zip`-paket, inte RemNotes Markdown eller Ankis `.apkg`. Paketen innehåller kort, taggar och refererade media, men inte repetitionshistorik, FSRS-tillstånd, arbetsyteinställningar, fullständig kortleksstruktur eller konton. AI-chatten kan göra granskade kortutkast av exporterad text. Det innebär att bygga upp innehåll på nytt, inte att fortsätta med den gamla samlingen. [Guiden till flytt via TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) visar steg för steg vad som går förlorat.

Välj Nibomo för en ny eller enkel kortarbetsyta när tillgång till hela systemets källkod är viktig. Behåll RemNote när anteckningar, källor och kort behöver hänga ihop, och välj Anki när du behöver bevara samlingen vid en flytt eller använda avancerad kortstruktur. För en mer avgränsad jämförelse av kortsystemen, se [Anki jämfört med Nibomo](/blog/anki-vs-flashcards-open-source-app/) och [guiden till flashcard-appar med öppen källkod](/sv/blog/best-open-source-flashcard-apps-2026/).

## Det här följer inte med problemfritt från RemNote

RemNote har flera användbara exporter, men ingen enskild fil återskapar produkten någon annanstans.

- **Den fullständiga RemNote-exporten** är det bästa formatet för återställning i RemNote. Den utelämnar för närvarande bilder och PDF-filer.
- **Anki-exporten i `.apkg`** innehåller bara flashcards. Listpunkter utan kort försvinner vid den flytten, och resultatet är inte ditt sammanlänkade anteckningssystem.
- **Markdown, HTML, OPML och text** gör innehållet lättare att läsa någon annanstans. De får inte en annan app att förstå alla relationer eller arbetsflöden som är specifika för RemNote.
- **PDF-markeringar och källor** behöver kontrolleras separat. RemNote Reader kan ladda ned en PDF med markeringar, men förutsätt inte att den fullständiga kunskapsbasexporten innehåller filen.
- **Inställningar, teman och tillägg** ingår inte i en manuell RemNote-säkerhetskopia, enligt [dokumentationen för säkerhetskopiering](https://help.remnote.com/en/articles/6301627-remnote-backups).
- **Repetitionstillståndet** bör kontrolleras kort för kort i målappen. En import som bevarar fråga och svar kan ändå börja om med schemat.

Därför räcker det inte med ”stöder Markdown” eller ”importerar Anki”. Flyttbarhet har flera nivåer: läsbara anteckningar, användbara media, länkade källor, kortstruktur och inlärningshistorik.

## Testa flytten innan du säger upp abonnemanget

Se till att du kan gå tillbaka. En lugn timme nu kostar mindre än att upptäcka en saknad PDF under tentaveckan.

1. Skapa en ny manuell **RemNote (Complete)**-export och spara den oförändrad.
2. Kopiera de lokala `.db.zip`-säkerhetskopiorna och mappen `files` på datorn. Ladda ned de originalfiler eller PDF-filer med kommentarer och markeringar som du inte kan ersätta.
3. Välj ett litet, krångligt urval: hierarkiska anteckningar, referenser, en PDF, bilder, lucktexter eller flervalskort, taggar och kort med betydelsefull repetitionshistorik.
4. Exportera urvalet i alla format som alternativet behöver, vanligtvis Markdown för anteckningar och `.apkg` för Anki.
5. Importera till ett tillfälligt valv, en testgraf, en profil eller en arbetsyta som kan raderas. Jämför antal, formatering, länkar, media, kortens fram- och baksidor samt schemalagda repetitioner sida vid sida med RemNote.
6. Arbeta offline på varje enhet du tänker använda. Anslut sedan igen och bekräfta att ändringar och repetitioner kommer fram dit de ska.
7. Återställ den fullständiga säkerhetskopian till en tillfällig lokal kunskapsbas i RemNote. Ett nedladdat arkiv blir en återställningsplan först när du har lyckats öppna det.
8. Studera i båda systemen under åtminstone flera riktiga pass. Säg upp abonnemanget först när ersättaren har klarat det dagliga arbetsflödet, en export och en återställning.

Behåll originalexporterna även efter flytten. En lyckad import visar kompatibilitet med dagens version av målappen, inte permanent åtkomst till varje del av det gamla systemet.

## De praktiska valen

- **Stanna hos RemNote** om sammanlänkade anteckningar och PDF-studier är det värdefulla. Free-abonnemanget eller en helt lokal kunskapsbas kanske redan löser ditt problem.
- **Välj Anki** om kort, mallar, FSRS-inställningar och att bevara samlingen vid en flytt kommer först.
- **Välj Obsidian plus Anki** om vanliga lokala anteckningsfiler motiverar att använda två verktyg.
- **Utvärdera Logseq** om du behöver sammanlänkade anteckningar med öppen källkod och inbyggda kort, men använd inga kritiska data i testet medan den aktuella databas- och synkroniseringslösningen fortfarande är i beta och alfa.
- **Välj Nibomo** om ett enkelt, nytt kortsystem och tillgång till hela källkoden väger tyngre än anteckningar, PDF-filer eller att behålla repetitionsschemat.

Jag utvecklar Nibomo, och jag skulle ändå behålla RemNote för en sammanlänkad anteckningsbok med mycket PDF-material eller välja Anki för en komplex, etablerad samling. Nibomo är det smalare valet: kort med fram- och baksida, ett öppet system och ett nytt schema.

När du vet vilka begränsningar du kan acceptera, testa bara det alternativet. Om Nibomo passar visar [kom igång-guiden](/docs/getting-started/) vägarna in via molntjänsten och egen drift. Om det inte passar är det också ett giltigt beslut att behålla RemNote.
