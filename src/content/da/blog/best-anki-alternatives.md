---
title: "Alternativer til Anki i 2026: Hvad du beholder, mister og får ved at skifte"
description: "Sammenlign syv alternativer til Anki på databevaring ved flytning, offlinebrug, repetitionsplanlægning, pris, kildekode og egen hosting – og se, hvornår Anki er det sikreste valg."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternativer til Anki"
  - "alternativ til Anki"
  - "apps som Anki"
  - "open source-alternativ til Anki"
  - "gratis alternativer til Anki"
  - "alternativ til Anki til iOS"
  - "flyt fra Anki"
---

En Anki-import kan gennemføres uden fejl og alligevel fjerne det, der får dit kortsæt til at fungere. Teksten kommer med. Kortene kan åbnes. Så opdager du, at CSS er væk, et lydfelt er tomt, alle kort er nye, eller en note ikke længere danner kort i de retninger, du forventede.

Det er den dyre del af at sammenligne alternativer til Anki. En mere overskuelig editor eller et billigere abonnement er let at få øje på, inden du skifter. Problemer med skabeloner, repetitionshistorik, repetitionsdatoer, tilføjelser, medier offline og muligheden for at flytte ud igen opdager man ofte først, når skaden er sket.

Denne sammenligning tager udgangspunkt i, hvad der følger med, og hvad der går tabt. Den dækker syv apps som Anki, hvad hver af dem kan overtage fra en eksisterende samling, hvad der ændrer sig efter importen, og hvornår det er sikrere at beholde Anki.

> **Min tilknytning:** Jeg hedder Kirill Markin og udvikler [Nibomo](https://nibomo.com/), et af produkterne nedenfor. Jeg har taget det med på grund af den åbne kildekode, muligheden for egen hosting og arbejdsgangene med agenter. Det er ikke vinderen på forhånd: Nibomo har ingen direkte `.apkg`-import, overførsel fra Anki medfører tab, og at drive hele systemet selv kræver reelt arbejde med infrastrukturen.

**Fakta kontrolleret:** 28. august 2026. Priserne er de offentlige amerikanske priser eller de angivne lokale priser, der var tilgængelige den dag. Skatter, regioner, uddannelsestilbud og betaling via appbutikker kan ændre beløbet.

![En urmager undersøger, om et ældre, gennemprøvet lommeursværk passer i en anden urkasse](/blog/best-anki-alternatives.png)

## Det korte svar, før du flytter noget

Behold som udgangspunkt Anki. Skift kun, hvis en anden app løser et tilbagevendende problem, som gør flytningen umagen værd.

Tre produkter accepterer Anki-pakker med læringsdata, men der er forskel på, hvad de lover at bevare:

- **Mnemosyne** dokumenterer fuld Anki-import med brugerdefinerede korttyper og læringsdata. Det er den løsning her, der kommer tættest på en traditionel, lokal arbejdsgang med et open source-program på computeren, men der findes ingen native iOS-app.
- **Mochi** importerer `.apkg`-filer med repetitionshistorik. HTML konverteres til Markdown, CSS og JavaScript fjernes, og Ankis fire repetitionsknapper erstattes af Remembered eller Forgot.
- **RemNote** importerer `.apkg`-filer, de fleste notetyper og repetitionshistorik. Den aktuelle vejledning siger også, at importerede kort placeres i en særskilt **Need to Learn**-kø. Læs derfor ikke “repetitionshistorik importeret” som “dagens Anki-kø kopieret nøjagtigt”.

Med de øvrige fire genopbygger du indholdet frem for at flytte samlingen:

- **Quizlet** er nyttigt til offentlige kortsæt, klasser, spil og guidede øvelser.
- **Brainscape** giver en gruppe en enklere repetitionsrutine, hvor man vurderer, hvor sikker man er på svaret, fra 1 til 5.
- **SuperMemo** er et skift til produktets proprietære metode og kursuskatalog.
- **Nibomo** giver dig web- og native klienter under MIT-licensen, en backend på egen infrastruktur samt API- og MCP-adgang. Arbejdsgangen med AI-assisterede udkast fra TXT eller CSV og efterfølgende gennemgang bevarer ikke læringstilstanden fra Anki.

Hvis dine kort afhænger af præcis visning, tilføjelser eller den aktuelle repetitionskø, er det ikke ubeslutsomhed at blive i Anki. Det er svaret.

## Start med at opgøre, hvad din Anki-samling faktisk indeholder

Et “kortsæt” er ikke én samlet, flytbar enhed. Del de elementer op, du måske skal flytte, før du sammenligner produkter.

| Del af samlingen | Hvad Anki kan lægge i en pakke | Hvad modtagerappen udtrykkeligt skal understøtte |
| --- | --- | --- |
| **Noteindhold** | Tekstfelter og gemt HTML | Felttilknytning, cloze-kort med udeladt tekst, ikke-latinsk tekst, kode og linjeskift |
| **Kortgenerering** | Notetyper og kortskabeloner | Kort i begge retninger, brugerdefinerede felter, CSS og JavaScript-funktionalitet |
| **Medier** | Lokale billeder, lyd og andre filer, når **Include media** er slået til | Udpakning af filer, referencer, understøttede formater og synkronisering mellem enheder |
| **Organisering** | Kortsæt, underordnede kortsæt, tags og eventuelt forudindstillinger for kortsæt | Hierarki, betydningen af tags, forudindstillinger og afgrænsning af det materiale, der øves |
| **Læringstilstand** | Planlægningsoplysninger og repetitionshistorik, når de medtages | Repetitionsdatoer, intervaller, glemte svar på tidligere indlærte kort og konvertering til modtagerappens planlægningsalgoritme |
| **Kode til arbejdsgange** | Tilføjelser følger ikke med som en del af kortsætpakken | En erstatning for værktøjer i kortbrowseren, masseredigering, notegenerering og anden funktionalitet fra tilføjelser |

[Ankis eksportmanual](https://docs.ankiweb.net/exporting.html) dokumenterer alle disse pakkemuligheder. En tekstimport ser kun den første række og måske tags. En direkte `.apkg`-import kan se mere, men hvert produkt bestemmer selv, hvad det konverterer, og hvad det kasserer.

Derfor er “importerer Anki” for upræcist som grundlag for et skift. Stil tre separate spørgsmål:

1. **Betyder kortet stadig det samme?** Tjek felter, de retninger kortene dannes i, cloze-kort, medier og visning.
2. **Ved modtagerappen, hvad jeg har lært?** Tjek registrerede repetitioner, aktuel status, repetitionsdatoer og den første rigtige kø.
3. **Kan jeg flytte ud igen?** Eksportér fra modtagerappen, og undersøg, hvad eksportformatet faktisk indeholder.

En import kan opfylde det første krav og svigte på de to andre.

## Hvad overlever flytningen?

| Produkt | Importvej fra Anki | Læringstilstand | Vigtigste tab at undersøge |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Direkte `.apkg`-import](https://help.remnote.com/en/articles/6751471-importing-from-anki) af de fleste notetyper, medier og repetitionshistorik | Historikken kommer med, men importerede kort placeres i RemNotes særskilte **Need to Learn**-kø | Omfattende CSS, brugerdefineret JavaScript, visse former for genereret talesyntese og omdøbte felter til billedmaskering |
| [Mochi](https://mochi.cards/) | [Direkte `.apkg`-import](https://mochi.cards/docs/import-and-export/importing/) inklusive repetitionshistorik | Historikken kommer med; dokumentationen lover ikke en identisk Anki-kø eller identiske repetitionsdatoer | HTML bliver til Markdown; CSS og JavaScript fjernes; fremtidige vurderinger har kun to muligheder |
| [Mnemosyne](https://mnemosyne-proj.org/) | Projektet dokumenterer [fuld Anki-import](https://mnemosyne-proj.org/features) med brugerdefinerede korttyper og læringsdata | Læringsdata importeres til en anden planlægningsalgoritme | Skabelonernes præcise funktion, konverterede repetitionsdatoer og kortvisning skal stadig afprøves |
| [Quizlet](https://quizlet.com/) | [Indsæt begreber og definitioner](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Ingen fra Anki | Notetyper, skabeloner, kortsæt, mediestruktur og alle planlægningsdata |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX eller ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Ingen fra Anki | Skabeloner, tilføjelser, medieregler og alle planlægningsdata |
| [SuperMemo](https://www.supermemo.com/) | [Indsæt rækker med spørgsmål og svar adskilt af skilletegn](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), højst 100 ad gangen | Ingen fra Anki | Samlingens struktur, medier, skabeloner og alle planlægningsdata |
| [Nibomo](https://nibomo.com/) | AI-assisteret udarbejdelse af udkast fra Anki TXT eller CSV med efterfølgende gennemgang | Ingen fra Anki | Ingen `.apkg`-understøttelse; skabeloner, nøjagtig mediegengivelse, kortsæthierarki og alle planlægningsdata kommer ikke med |

## Pris, offlinebrug, repetitionsplanlægning og ejerskab

| Produkt | Pris kontrolleret 28. august 2026 | Begrænsninger offline | Planlægningsalgoritme | Kildekode og egen hosting |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratis; Pro 8 USD/måned, faktureret som 96 USD/år](https://www.remnote.com/pricing) | Installerede apps kan redigere og repetere offline efter login. Computerappen gemmer alle medier i vidensbasen; mobilappen cacher kun nogle nylige billeder. Webappen kræver en fane, der stadig er åben. | [Anki SM-2 eller FSRS v6 i beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Proprietær kerne; ingen dokumenteret, understøttet løsning til egen hosting |
| **Mochi** | [Gratis offline; Pro-synkronisering 5 USD/måned](https://mochi.cards/#pricing-section) | Installerede apps fungerer helt offline uden konto. Browserlager kan blive ryddet. | [Mochis algoritme eller FSRS](https://mochi.cards/docs/reviewing/fsrs/), begge med Remembered / Forgot | Proprietær kerne; offentlige repositories indeholder integrationer, ikke en app, du kan hoste selv |
| **Mnemosyne** | Gratis | [Lokal brug på computer og offline repetition på Android](https://mnemosyne-proj.org/download-mnemosyne.php); Android kan ikke redigere. Ingen native iOS-app. | Adaptiv planlægning ud fra vurderinger af genkaldelse fra 0 til 5 | Kildekodelicenser varierer efter komponent; egen synkroniseringsserver på en computer eller uden grafisk brugerflade |
| **Quizlet** | Gratis basisbrug; [Plus 35,99 USD/år, Plus Unlimited 44,99 USD/år](https://quizlet.com/upgrade?source=signup) | Downloadede sæt fungerer offline i iOS- og Android-apps med Flashcards og Match. | [Spaced repetition på web](https://quizlet.com/features/spaced-repetition) til sæt med mindst 100 begreber; mobilunderstøttelse står stadig som kommende. Learn er en separat, adaptiv øveform. | Proprietær hostet tjeneste; ingen understøttet løsning til egen hosting |
| **Brainscape** | [Gratis; Pro 7,99 USD/måned ved årlig betaling](https://www.brainscape.com/pricing) | [Mobilappen kan gemme arbejde offline og senere synkronisere tidligere downloadede klasser](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); dokumentationen lover ikke et komplet lokalt bibliotek. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), vurderet fra 1 til 5 | Proprietær hostet tjeneste; ingen understøttet løsning til egen hosting |
| **SuperMemo** | Gratis konto med begrænsninger; [35,99 PLN/måned eller 359 PLN/år](https://www.supermemo.com/en/premium-subscription) | Downloadede mobilkurser fungerer offline; redigering, AI, søgning, optagelser og statistik gør ikke. | [Proprietær SuperMemo-metode](https://www.supermemo.com/en/supermemo-method) | Proprietær hostet tjeneste; ingen understøttet løsning til egen hosting |
| **Nibomo** | [Den hostede kerne er gratis under beta; softwaren er gratis at hoste selv](/da/pricing/), plus dine infrastrukturomkostninger | Native apps skriver lokalt efter online login og første indlæsning af arbejdsområdets data; eksterne medier skal allerede være cachet. | [FSRS](/docs/architecture/#scheduling) | MIT; den understøttede produktionsopsætning er et komplet system bygget op omkring AWS |

Tabellerne giver ikke produkterne en samlet karakter. En direkte importfunktion kan betyde mere end alle andre funktioner, hvis du har 30.000 indarbejdede kort. En native iPhone-app kan afgøre valget, hvis det er dér, du repeterer. Adgang til kildekoden betyder kun noget, hvis du eller en, du stoler på, vil vedligeholde den.

Du kan komme gratis i gang med alle produkterne her, men det er ikke gratis at flytte til gratis alternativer til Anki. Abonnementsprisen er let at regne ud. Genopbygning af skabeloner, kontrol af medier og en ny start på repetitionshistorikken er ofte de større omkostninger.

## RemNote: flyt kortene ind i forbundne noter

RemNote ændrer, hvor kortene kommer fra. I stedet for at vedligeholde et separat kortsæt ved siden af forelæsningsnoterne opretter du kort i en disposition, et dokument eller en arbejdsgang med PDF-filer. Det er en reel grund til at forlade Anki, hvis kopiering mellem en noteapp og en flashcard-app er blevet den dyre del.

Importen understøtter meget, men læs nøje, hvad der sker med repetitionskøen. RemNotes [aktuelle vejledning til Anki-import](https://help.remnote.com/en/articles/6751471-importing-from-anki) beder dig eksportere en `.apkg` med planlægningsoplysninger, forudindstillinger for kortsæt og medier. Den importerer repetitionshistorik og de fleste notetyper, herunder basiskort, cloze-kort og almindelige kort med billedmaskering.

Samme vejledning siger, at nyimporterede kort placeres i en særskilt **Need to Learn**-kø. Historikken er altså tilgængelig for RemNote, men dokumentationen lover ikke, at din aktuelle Anki-kø med kort til repetition dukker op uændret. Omfattende CSS fjernes også, brugerdefineret JavaScript understøttes ikke, visse former for talesyntese, der genereres undervejs, virker ikke, og import af billedmaskering afhænger af de forventede note- og feltnavne.

Prøv med et repræsentativt kortsæt, og undersøg både kortene og den første kø. En import, der ser pæn ud, er kun halvdelen af testen.

De installerede computer- og mobilapps fungerer offline efter installation og login. [Offlinevejledningen](https://help.remnote.com/en/articles/6752029-offline-mode) beskriver en vigtig begrænsning for medier: Computerappen gemmer alle billeder og PDF-filer i vidensbasen, mens mobilappen kun cacher nogle nylige billeder. Webappen kan fortsætte i en allerede åben fane, men kan ikke startes fra bunden offline.

Brug RemNote, når forbundne noter gør det værd at ændre den måde, samlingen er bygget op på. Behold Anki, hvis kortskabeloner og tilføjelser er selve systemet og ikke blot pynt omkring det.

## Mochi: lokal Markdown med komplet eksport i eget format

Mochi er et mindre omfattende alternativ til dem, der vil have lokale data, kort i Markdown og færre betjeningselementer på skærmen. De installerede apps kører på alle større computer- og mobilplatforme og kan bruges [helt offline uden en konto](https://mochi.cards/docs/getting-started/download-and-install/). Det er synkronisering, du betaler for: 5 USD om måneden.

Den direkte Anki-import tager repetitionshistorikken med, hvilket placerer Mochi et godt stykke foran mulighederne, der kun tager tekst. Konverteringen er også usædvanligt klart beskrevet: Mochi fjerner CSS og JavaScript og konverterer HTML til Markdown. Det fungerer, når betydningen ligger i teksten og almindelige vedhæftninger. Det er et advarselstegn, når skabelonen bærer betydningen.

Mochi tilbyder nu to planlægningsalgoritmer. Den egenudviklede algoritme er stadig standard, mens [FSRS kan aktiveres](https://mochi.cards/docs/reviewing/fsrs/) uden at nulstille eksisterende fremskridt i Mochi. FSRS beregner kortenes tilstand ud fra den repetitionshistorik, Mochi har. Vurderingen har stadig kun to muligheder – Remembered eller Forgot – også med FSRS. Anki-brugere, der benytter Hard og Easy som særskilte signaler, skal derfor forvente en anden daglig rytme.

Det er tydeligere, hvordan data kommer ud igen, end i de fleste proprietære apps. En [`.mochi`-eksport](https://mochi.cards/docs/import-and-export/exporting/) i appens eget format indeholder kort, skabeloner, vedhæftninger, tags, kortsætstruktur og repetitionshistorik. Markdown og CSV er lettere at undersøge andre steder, men udelader repetitionshistorik og andre metadata.

Mochis offentlige GitHub-repositories indeholder [integrationer og relaterede værktøjer](https://github.com/mochi-cards/open-source), ikke selve appen eller en understøttet synkroniseringsserver. Vælg det for offlinebrug og flytbare data, ikke for kontrol over kildekoden.

## Mnemosyne: open source på computeren

Mnemosyne ligger tættest på den traditionelle model med et program og en lokal database. Den aktuelle version understøtter Windows, macOS og Linux og har en Android-klient til offline repetition. Funktionssiden dokumenterer kort med tekst og medier, hierarkiske tags, plugins, en repetitionsskala fra 0 til 5 og fuld Anki-import med brugerdefinerede korttyper og læringsdata.

Det er den mest direkte flytning til open source her, hvis du vil væk fra Anki uden at flytte ind i et stort notesystem eller en cloudtjeneste. Der er også en [indbygget synkroniseringsserver](https://mnemosyne-proj.org/help/syncing), som kan køre på en almindelig computer eller en maskine uden grafisk brugerflade og sammenflette læringsdata fra flere klienter.

Begrænsningerne hører med til beslutningen. Android-klienten [kan ikke redigere kort](https://mnemosyne-proj.org/help/android-client). iOS-brugere må repetere i browseren via en server, der kører på en anden maskine, og serverens officielle funktionsside advarer om, at den ikke har sikkerhedsfunktioner. Egen synkronisering betyder også, at du skal holde serveren tilgængelig, konfigurere netværket og sikkerhedskopiere datamappen.

Licenserne er mere specifikke end blot mærkatet “GPL”: [Projektets licensfil](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) henviser til forskellige vilkår for hver komponent. [Kernens licens](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) er AGPL v3 med en ekstra bestemmelse om navn og kreditering, mens [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) bruger LGPL v3. Læs filerne, hvis du planlægger at ændre eller videredistribuere softwaren.

## Quizlet: skift for undervisningens skyld, ikke for at bevare samlingen nøjagtigt

Quizlet løser en anden opgave. Offentlige kortsæt, læreroprettede klasser, deling, Match, Test, Learn og gruppeaktiviteter er lettere at tage i brug i en klasse end en specialtilpasset Anki-profil.

Flytningen er begrænset til ren tekst. Quizlet kan omdanne indsatte rækker til begreber og definitioner, men læser ikke en `.apkg` og genskaber notetyper, skabeloner, repetitionsplaner eller historik. Forfattere kan [eksportere deres egne sæt som kopieret tekst](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), uden billeder; kopierede sæt fra andre brugere kan ikke eksporteres. Det er indholdet, der kan flyttes, ikke samlingen som helhed.

Quizlets repetitionsplanlægning er under forandring. Den nye [Spaced Repetition](https://quizlet.com/features/spaced-repetition)-funktion aktiveres automatisk på web for sæt med mindst 100 begreber og bruger vurderingerne Repeat, Hard, Okay og Easy. Quizlet angiver stadig mobilunderstøttelse som kommende. Learn er fortsat en separat adaptiv øveform med forbrugsgrænser, der afhænger af betaling.

Offline betyder også mobilapps, ikke hjemmesiden. Quizlet gemmer automatisk otte nylige sæt og lader dig downloade flere; [Flashcards og Match fungerer offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps), hvorefter fremskridt synkroniseres, når forbindelsen vender tilbage.

Flyt hertil, når målet er distribution og aktiviteter i undervisningen. At genopbygge en indarbejdet personlig repetitionsplan bare for at få de funktioner er som regel et dårligt bytte.

## Brainscape: færre valg om planlægning, mindre med i flytningen

Brainscape beder dig vurdere, hvor sikker du er på svaret, fra 1 til 5 og bruger vurderingen til at vise de kort, du er usikker på, igen tidligere. Den fulde formel er ikke offentliggjort, men betjeningen er let at lære fra sig i en klasse.

Det accepterer CSV-, TXT-, XLSX- og ODS-filer. Det er praktisk til kort med en for- og bagside, men betyder, at skabeloner, tilføjelser, medieregler og læringsdata fra Anki bliver tilbage. Eksport af en personlig sikkerhedskopi er en Pro-funktion og giver filer, der kan åbnes i et regneark og importeres igen senere.

Brainscapes aktuelle hjælpecenter siger, at hjemmesiden og mobilapps nu har de samme grundfunktioner til at finde, oprette, dele og øve indhold. Det beskriver også mobilbrug offline, manuel gensynkronisering og opdateringer af klasser, der allerede er downloadet til enheden. Det gør det muligt at synkronisere igen efter offlinebrug, men er ikke et løfte om, at hele kontoen findes som et komplet lokalt bibliotek.

Eksport af personlige kortsæt er fortsat en [Pro-funktion](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Der findes ingen officiel udgivelse af kildekoden eller løsning til egen hosting.

Brainscape er værd at overveje, når Anki kræver for meget opsætning af dem, der skal lære stoffet. Det er ikke et oplagt skift for en person, der allerede har god nytte af de indstillingsmuligheder.

## SuperMemo: vælg metoden, og accepter en ny start

Den aktuelle SuperMemo.com-tjeneste er en sprogindlæringsplatform til web, iOS og Android, bygget omkring SuperMemos proprietære repetitionsmetode. Den er adskilt fra det ældre Windows-produkt, som mangeårige SuperMemo-brugere måske kender.

Det er et valg af metode og katalog, ikke en problemfri Anki-flytning. SuperMemo understøtter [oprettelse af mange kort ved at indsætte rækker med spørgsmål og svar adskilt af skilletegn](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), med en grænse på 100 kort pr. import. Jeg fandt ingen aktuel officiel `.apkg`-import eller mulighed for, at brugeren selv kan eksportere fra den hostede tjeneste. Skabeloner, tilføjelser, mediestruktur og repetitionshistorik kommer derfor ikke med ad den dokumenterede vej.

Downloadede kurser kan bruges offline i mobilapps. [Offlinevejledningen](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) udelukker AI-funktioner, tilføjelse af MemoCards, søgning, optagelser, statistik og kursuseditoren, så forbered materialet og synkronisér, før du afbryder forbindelsen.

Vælg SuperMemo, hvis du vil have netop SuperMemos metode eller kursuskatalog så meget, at du vil begynde på en ny repetitionsplan. Hvis det vigtigste er at bevare din eksisterende plan, løser det det forkerte problem.

## Nibomo: adgang til hele systemets kildekode, men den svageste Anki-import

Nibomo giver dig mulighed for at eje og kontrollere en stor del af systemet. [Repositoryet under MIT-licensen](https://github.com/kirill-markin/flashcards-open-source-app) indeholder webappen, iOS- og Android-klienter, backend, offlinesynkronisering, infrastruktur, et [offentligt API](/docs/api/) og en [MCP-server](/docs/mcp-connector/). Repetitionerne bruger [FSRS](/docs/architecture/#scheduling). Web, iOS og Android skriver først lokalt, lægger ændringer i en udbakke og synkroniserer, når forbindelsen vender tilbage.

Det gør ikke Nibomo kompatibelt med Anki. Nibomo kan ikke læse `.apkg` eller `.colpkg`. Den understøttede [flytning fra Anki via TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) er en arbejdsgang med AI-assisterede udkast og efterfølgende gennemgang til primært tekstbaserede kort. Den bevarer ikke skabeloner, tilføjelser, kortsæthierarki, repetitionsdatoer, intervaller eller registrerede repetitioner. Mediereferencer i en TXT-fil er ikke mediefiler, så kortsæt med mange medier skal genopbygges og kontrolleres særskilt.

Nibomos egen `flashcards.zip`-pakke er også mere begrænset end en sikkerhedskopi. Den flytter kort, tags og tilknyttede medier mellem Nibomo-arbejdsområder. Den flytter ikke repetitionshistorik, FSRS-tilstand, komplette kortsætstrukturer, arbejdsområdeindstillinger eller konti.

Den hostede kerne er [gratis under beta](/da/pricing/). Egen hosting af produktionssystemet er ikke en Docker-installation med én kommando: [Vejledningen til egen hosting](/docs/self-hosting/) bruger AWS CDK og kræver AWS-tjenester samt Cloudflare, Resend, Sentry, hemmelige nøgler, migreringer, sikkerhedskopier, gendannelser og opgraderinger. Docker Compose er løsningen til udvikling, ikke den understøttede produktionsopsætning.

Brug Nibomo, når adgang til hele kildekoden og en backend under din egen driftskontrol er grunden til at skifte, og dine kort er enkle nok til at genopbygge sikkert. [Åbn den hostede app](https://app.nibomo.com/) for at prøve et lille, midlertidigt kortsæt. Behold Anki – eller prøv RemNote, Mochi eller Mnemosyne – når det vigtigste er at bevare læringstilstanden korrekt.

## Hvilket alternativ til Anki fungerer på iOS uden ubehagelige overraskelser ved flytning?

Et “alternativ til Anki til iOS” kan betyde to forskellige ting: en native iPhone-app eller en erstatning for [AnkiMobiles engangskøb til 24,99 USD](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo og Nibomo har alle iOS-apps. Mnemosyne har ikke. Det besvarer dog ikke spørgsmålet om flytningen:

- **Mochi** bevarer mere end iOS-alternativerne, der kun importerer tekst: Det importerer repetitionshistorik fra `.apkg` med konvertering til Markdown og vurdering med to muligheder.
- **RemNote** importerer også repetitionshistorik fra `.apkg`, men prøv **Need to Learn**-køen i stedet for at antage, at dagens Anki-plan overlever.
- **Quizlet** passer til deling i undervisningen, men vejen fra Anki går kun via tekst, og den nye spaced repetition-funktion findes endnu ikke på mobil.
- **Nibomo** er muligheden med tilgængelig kildekode og en native iOS-klient, men flytning fra Anki nulstiller læringstilstanden.
- **Brainscape** og **SuperMemo** giver kun mening, hvis repetitionsmetoden er arbejdet med at genopbygge kort og plan værd.

Før du forlader AnkiMobile på grund af prisen, så sammenlign med udgiften til et abonnement og de timer, det tager at rette op på en flytning. Et engangskøb af en app kan være billigere end en gratis app, der gør en indarbejdet samling til et manuelt projekt.

## Hvornår det er sikrere at beholde Anki

At blive er en beslutning, ikke et mislykket forsøg på at vælge noget nyere. Behold Anki, hvis noget af dette gælder:

- Din samling afhænger af brugerdefinerede skabeloner, CSS, JavaScript eller tilføjelser.
- Image Occlusion, lyd eller andre medier bærer væsentlig betydning.
- En note danner flere kort med forskellige retninger mellem spørgsmål og svar, og kortene skal forblive knyttet sammen.
- År med repetitionshistorik og aktuelle repetitionsdatoer er mere værd end en ny editor.
- Du er afhængig af en arbejdsgang på computeren eller en kombination af platforme, som alternativet ikke matcher.
- Erstatningens offlinefunktion virker kun på en platform, du ikke vil bruge.
- Du vil gerne have egen hosting i teorien, men vil ikke drive, sikre, sikkerhedskopiere og opgradere en server.
- Alternativet løser intet tilbagevendende problem ud over at se mere overskueligt ud.

Anki tilbyder stadig et modent økosystem af tilføjelser, fleksible note- og kortskabeloner, indstillinger til FSRS og ældre planlægningsalgoritmer, lokale installerede klienter og pakkeformater, der kan rumme samlingen. Ingen af produkterne ovenfor gengiver alt dette.

Vil du have en mere afgrænset sammenligning af, hvad du kan eje og kontrollere, så læs [guiden til open source-flashcard-apps](/blog/best-open-source-flashcard-apps-2026/). Hvis offlinebrug er afgørende, skelner [sammenligningen af offline-flashcard-apps](/blog/best-offline-flashcards-app/) mellem installerede apps, cachet indhold og browserfaner.

## En tjekliste til flytning, der stadig kan ende med et nej

Begynd ikke med hele samlingen. Lav en test, der gerne må mislykkes.

1. **Opret en pakke til gendannelse.** Eksportér en `.colpkg` med medier, gem den uden for Anki-profilen, og opbevar endnu en kopi et andet sted.
2. **Vælg det besværlige kortsæt.** Medtag cloze-kort, brugerdefinerede felter, kort i begge retninger, indlejrede kortsæt, tags, billeder, lyd og nok repetitionshistorik til at afsløre, hvordan planen konverteres.
3. **Eksportér det format, modtagerappen faktisk understøtter.** Brug `.apkg` med planlægning, forudindstillinger og medier til en direkte import. Brug kun Notes in Plain Text, når du accepterer at genopbygge alene ud fra indholdet.
4. **Registrér udgangspunktet.** Notér antal noter og kort, tag- og kortsætnavne, antal mediefiler, nogle repetitionsdatoer og intervaller samt det forventede antal kort fra hver notetype.
5. **Importér til et midlertidigt område.** Overskriv ikke kildeprofilen, og flet ikke den første test ind i et permanent bibliotek i modtagerappen.
6. **Undersøg indhold og læringstilstand hver for sig.** En korrekt for- og bagside beviser ikke, at cloze-kort, medier, kort fra samme note, repetitionshistorik eller næste repetitionsdato overlevede.
7. **Start appen fra lukket tilstand offline på hver enhed, du faktisk bruger.** Repetér, redigér, luk appen helt, åbn den igen uden forbindelse, gå derefter online, og kontrollér en anden enhed.
8. **Undersøg køen, før planerne begynder at afvige.** Sammenlign de første kort til repetition og udvalgte intervaller, før du vurderer de samme kort fra din rigtige samling i begge apps. Efter den første repetition i en anden app er de to planer uafhængige.
9. **Afprøv vejen ud, før du beslutter dig.** Eksportér fra modtagerappen, og undersøg, hvad du ville kunne få tilbage, hvis du forlader den næste år.
10. **Behold Anki og den urørte sikkerhedskopi.** Slet ingen af dem, før erstatningen har klaret almindelig brug, og du bevidst har accepteret hvert tab.

Hvis modtagerappen kun accepterer tekst, så følg hele [arbejdsgangen til sikker TXT-eksport](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Den adskiller `.colpkg`-filen til gendannelse fra den flytbare arbejdsfil og gør nulstillingen tydelig.

## Træf beslutningen i denne rækkefølge

Begynd med det, du ikke har råd til at miste:

1. Hvis præcise skabeloner, tilføjelser eller den aktuelle kø er afgørende, så behold Anki, medmindre en repræsentativ `.apkg` beviser, at et skift kan fungere.
2. Hvis noter og kort skal være ét system, så prøv RemNote. Kontrollér **Need to Learn**-køen, ikke kun de importerede sider.
3. Hvis lokal Markdown og eksporter, du kan undersøge, betyder mere end Ankis visning, så prøv Mochi.
4. Hvis du vil have en fokuseret open source-app til computeren med direkte Anki-import, så prøv Mnemosyne – og bekræft, at begrænsningerne på mobil passer til din rutine.
5. Hvis det egentlige problem er deling i undervisningen eller en enklere fælles repetitionsrutine, så genopbyg et lille sæt i Quizlet eller Brainscape.
6. Hvis du specifikt vil have SuperMemos metode, så accepter en ny repetitionsplan. Hvis du specifikt vil have kildekode til hele systemet, egen hosting samt API- og MCP-adgang, så accepter Nibomos genopbygning af indhold med tab og det nødvendige driftsarbejde.

Vil du se tre meget forskellige modeller sammenlignet funktion for funktion, så læs [Anki vs. Quizlet vs. Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Reglen er enkel: Skift, når gevinsten er konkret, og du har afprøvet i praksis, hvad der går tabt. Hvis dit repræsentative kortsæt ikke kan flyttes ordentligt, er det at beholde Anki ikke en konservativ nødløsning. Det er sammenligningens resultat.
