---
title: "Anmeldelse af Mochis læringskort (2026): Gratisplan, offlinebrug og sammenligning med Anki"
description: "En anmeldelse af Mochis læringskort baseret på kontrollerede kilder: gratisplan, offlineapps, Markdown-noter, FSRS, synkronisering, Anki-import, eksport og grænser for egen hosting."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi læringskort"
  - "mochi kort"
  - "mochi vs anki"
  - "anki vs mochi"
  - "er mochi gratis"
  - "mochi offline"
  - "mochi priser"
  - "mochi hosting"
  - "markdown læringskort"
  - "mochi intervalbaseret repetition"
---

Mochi begynder med et Markdown-dokument frem for en almindelig formular med for- og bagside. Tilføj en linje med tre bindestreger, og dokumentet får sider, du kan repetere. Behold det som en note, link til et andet kort, eller arkivér det, så du stadig kan søge efter det, uden at det kommer i repetitionskøen.

Den lille skillelinje siger meget om, hvem **Mochis læringskort** passer til. Mochi er et godt valg, hvis du vil have noter og intervalbaseret repetition i samme app med lokal lagring som udgangspunkt, især hvis Markdown, tilbagehenvisninger og et enkelt valg mellem husket og glemt føles naturligt. Det er mindre oplagt for en erfaren Anki-bruger, hvis samling afhænger af genererede kortvarianter, tilpasset HTML/CSS, JavaScript, tilføjelser eller detaljeret styring af repetitionsplanlægningen.

Bruger du kun én enhed, er gratisplanen mere end en prøveversion: Du behøver ikke tilmelde dig, og Mochi dokumenterer ubegrænset offlinebrug. Hagen er, at synkronisering mellem enheder kræver **Pro til 5 USD om måneden**. For en Anki-bruger vejer tabene ved flytningen tungere. Mochi kan importere en Anki-pakke og dens repetitionshistorik, men kan ikke bevare alle skabeloner, stilarter, scripts, indstillinger for repetitionsplanlægning eller funktioner fra tilføjelser.

> **Min tilknytning:** Jeg hedder Kirill Markin og udvikler [Nibomo](/da/). Dette er en gennemgang af arbejdsgange med kontrollerede kilder, ikke en påstand om, at jeg selv har afprøvet produktet. Der er ingen affiliatelinks. Hovedsammenligningen er mellem Mochi og Anki; mit produkt optræder kun som et tydeligt markeret alternativ mod slutningen.

**Fakta kontrolleret:** 7. september 2026. Den seneste synlige [Mochi-udgivelse](https://mochi.cards/changelog/) var på den dato version 26.8.2, dateret 10. august 2026. Priser og oplysninger i appbutikker kan ændre sig.

![En bogkonservator afprøver en lille harmonikafoldet række af sammenkædede kort, mens det originale arkiv ligger sikkert i en æske](/blog/mochi-alternative-v3.png)

## Den korte vurdering

- **Vælg Mochi**, hvis du vil have Markdown-noter og kort samlet, offlinebrug uden konto på én enhed, tilbagehenvisninger og et binært valg under repetition.
- **Vælg Anki**, hvis du har brug for modne notetyper, HTML/CSS-skabeloner, tilføjelser, gratis hostet synkronisering, fire svarvurderinger eller mere detaljeret styring af FSRS.
- **Vent med at skifte**, hvis du allerede repeterer regelmæssigt og ikke kan pege på det problem i din arbejdsgang, Mochi skal løse. En ny grænseflade er ikke grund nok til at sætte flere års planlægningsdata og tilpassede kort på spil.
- **Test før flytning**, hvis Anki allerede rummer din langsigtede samling. Mochi accepterer `.apkg`-filer og kan medtage repetitionshistorik, men konverterer HTML til Markdown og fjerner CSS og JavaScript.

## Hurtigt overblik over Mochi og Anki

| Valg | Mochi | Anki |
|---|---|---|
| Passer bedst til | Brugere af sammenkædede noter og Markdown, som vil have noter ved siden af repetitionskort | Folk, der vil have et modent læringskortsystem, som kan tilpasses |
| Oprettelse af kort | Et Markdown-dokument får flere sider, når du tilføjer `---`; felter og skabeloner er også tilgængelige | Noter indeholder felter; HTML/CSS-skabeloner genererer ét eller flere kort |
| Repetitionsforløb | Nye kort begynder i en indlæringsfase; indlærte kort bruger Forgot / Remembered (glemt / husket) | Kort bruger Again / Hard / Good / Easy (igen / svært / godt / let) |
| Planlægning | Mochis egen algoritme som standard; FSRS er valgfrit | FSRS eller den ældre SM-2 med flere værktøjer til tilpasning af FSRS |
| Gratis brug | Ingen tilmelding og ubegrænset offlinebrug | Gratis computerapps og gratis AnkiWeb-synkronisering; den officielle iOS-app koster penge |
| Synkronisering mellem enheder | Pro, 5 USD om måneden | Gratis via AnkiWeb |
| Platforme | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, den officielle AnkiMobile og den uafhængige AnkiDroid |
| Formater til overførsel | Eksport i eget `.mochi`-format samt Markdown og CSV | Egne formater `.colpkg` og `.apkg` samt tabulatorsepareret tekst |
| Grænser for data og hosting | Lokal lagring som udgangspunkt; selve appen præsenteres ikke som open source, og der er ingen dokumenteret, understøttet synkroniseringstjeneste til egen hosting | Hovedrepositoryet har AGPL-licens; en officiel synkroniseringsserver til egen hosting er dokumenteret |

Den væsentlige forskel er **enkelhed med noter i centrum over for kontrol over hele samlingen**.

## Hvad Mochis grænseflade er bygget op omkring

Mochis grænseflade giver mere mening, når du følger ét kort gennem den.

Hvert kort tilhører et kortsæt. Klik på **New Card** (nyt kort), og du får et tomt Markdown-dokument frem for faste felter til spørgsmål og svar. Ét kort kan indeholde overskrifter, lister, kode, billeder, strukturerede felter og links. Tilføj `---` mellem blokke for at skabe to eller flere sider til repetition. Brug dobbelte firkantede parenteser, `[[double brackets]]`, for at henvise til et andet kort; Mochi opretter automatisk en tilbagehenvisning. Den officielle [oversigt over kort](https://mochi.cards/docs/cards/) dokumenterer også skabeloner, hvor pladsholdere viser værdier fra strukturerede felter.

Kort kan udfylde to roller uden at ligge i separate systemer:

- Et repetitionskort bruger sider og indgår i intervalbaseret repetition.
- En opslagsnote kan blive i samme kortsæt og arkiveres. Det fjerner den fra køerne med nye kort og kort klar til repetition uden at slette indhold, tags, links eller historik.

[Visninger af kortsæt](https://mochi.cards/docs/decks/custom-views/) er gemte kombinationer af filtre, sortering og layout. Du kan beholde en gittervisning til almindelig gennemgang og oprette en anden visning efter et tag, repetitionsstatus, lav genkaldelsesrate eller nylig repetition. Mochi lader dig også bruge en visning til intensiv øvelse uden at ændre den normale planlægning eller repetitionshistorik. Det er mere konkret end at kalde grænsefladen »enkel«: Samme kortsæt kan fungere som notesbog, filtreret database og øvelseskø.

Den [daglige repetition](https://mochi.cards/docs/getting-started/reviewing-cards/) har to faser. Under **New cards** (nye kort) føjer du enten et kort til repetitionsplanen eller vælger Again (igen) for at se det om lidt. Når et kort er indlært og klar til repetition, viser det den næste side og beder dig vælge **Forgot** (glemt) eller **Remembered** (husket). Hvis du glemmer det, bruger Mochi en kø til endnu en repetition, før kortets fremskridt nulstilles. Resultatet er et bevidst begrænset valg under repetitionen.

## Er Mochi gratis, og hvad virker offline?

Ja, men »gratis« og »offline« betyder forskellige ting, alt efter hvor du bruger appen. [Mochis aktuelle priser](https://mochi.cards/) angiver:

- **Free (gratis):** 0 USD for altid, uden krav om tilmelding og med ubegrænset offlinebrug.
- **Pro:** 5 USD om måneden, som tilføjer synkronisering mellem enheder, publicering af kortsæt, dynamiske felter, AI-integration og support via e-mail.

Mochi kører på macOS, Windows, Linux, iOS, Android og web. Mochis [vejledning til download og installation](https://mochi.cards/docs/getting-started/download-and-install/) beskriver den praktiske grænse:

| Hvor du bruger appen | Hvad gratis og offline betyder |
|---|---|
| Installeret computer- eller mobilapp | Du kan bruge Mochi offline uden konto. Data gemmes på enheden, så én installeret app kan dække hele din arbejdsgang gratis. |
| Webapp uden Pro | Indholdet gemmes i browserens offlinelager. Mochi advarer om, at browseren kan slette disse data uden varsel. |
| Samme samling på flere enheder | Automatisk synkronisering mellem enheder er en Pro-funktion, selv om hver installeret app kan fungere offline. |

Offlinebrug og synkronisering er to forskellige løfter. Du behøver ikke Pro blot for at oprette kort eller repetere i en downloadet app. Du behøver det, hvis samme opdaterede samling automatisk skal følge dig fra computer til telefon. Gem en sikkerhedskopi i Mochis eget format af vigtige data på gratisplanen frem for at lade enheden, og især browserens lager, være den eneste kopi.

Hvis offlinefunktionerne er afgørende, så sammenlign arbejdsgangen på dine konkrete enheder i [Virker Anki offline?](/blog/does-anki-work-offline/) og den bredere [guide til apps med læringskort til offlinebrug](/blog/best-offline-flashcards-app/).

## Læringskort i Markdown er den egentlige grund til at vælge Mochi

Mochis reelle fordel er, hvordan Markdown ændrer det kildemateriale, du vedligeholder.

Et Mochi-kort kan stadig læses som tekst. Samme dokument kan indeholde en kort forklaring, en kodeblok, links til beslægtede idéer og separatorer mellem siderne til repetition. Kort kan også bruge felter og skabeloner, når en gentagen struktur er vigtig. Når du anvender en skabelon, viser Mochi skabelonens Markdown med feltpladsholdere og ignorerer kortets egen Markdown ved visningen uden at slette den.

Anki tager udgangspunkt i en anden model. En note gemmer felter, og [kortskabeloner](https://docs.ankiweb.net/templates/intro.html) bestemmer, hvilke felter der vises, og hvilke kort der genereres. Skabelonerne bruger HTML til strukturen og CSS til udseendet. Én ordforrådsnote kan derfor generere kort til både genkendelse og aktiv gengivelse, mens de underliggende data bliver på ét sted.

Den struktur giver Anki flere muligheder for betingede layouts, genererede kortvarianter, indtastede svar, tilpasset udseende og arbejdsgange udvidet med tilføjelser. Det betyder også, at Anki ikke er en app med indbygget understøttelse af læringskort i Markdown. En Markdown-baseret arbejdsgang i Anki kræver et ekstra konverteringslag eller en tilføjelse.

Det praktiske spørgsmål er enkelt: Vil du have en note, der kan blive til et kort, eller en struktureret notetype, der kan generere flere kort? Mochi er indrettet til det første. Anki er indrettet til det andet.

## Mochis intervalbaserede repetition omfatter nu FSRS

Sammenligninger, der siger, at Mochi ikke har FSRS, er forældede. Mochi tilføjede en prøveversion af FSRS i 2025 og har siden fortsat med at udgive rettelser til repetitionsplanlægningen. [Mochis egen algoritme er dog stadig standarden](https://mochi.cards/docs/reviewing/fsrs/).

Standardalgoritmen ændrer intervallerne med faste multiplikatorer efter hver repetition, hvor du husker eller glemmer svaret. Skift til FSRS under Review Settings (repetitionsindstillinger), og eksisterende indlærte kort overgår til FSRS uden at miste historikken. Du kan angive en ønsket genkaldelsesrate, indtaste egne parametre og skifte tilbage senere.

Mochi beholder sine binære svarvurderinger med begge planlæggere:

- **Forgot** (glemt) svarer til Again i FSRS.
- **Remembered** (husket) svarer til Good i FSRS.

Mochis dokumentation siger, at binære vurderinger fungerer med FSRS, men at man mister nogle af de oplysninger, Hard og Easy ville give. Mochi accepterer optimerede brugerdefinerede parametre, men har intet indbygget optimeringsværktøj; personlige parametre kræver et eksternt FSRS-optimeringsværktøj og repetitionshistorik fra Mochi.

[Ankis FSRS-indstillinger](https://docs.ankiweb.net/deck-options.html#fsrs) går længere. Ønsket genkaldelsesrate og parametre kan knyttes til forudindstillinger, det indbyggede optimeringsværktøj kan tilpasse parametre til repetitionshistorikken, og simulatoren anslår antal repetitioner eller øvelsesminutter ved forskellige indstillinger. Anki registrerer også fire udfald: Again, Hard, Good og Easy.

De ekstra knapper hjælper kun, hvis du bruger dem konsekvent. Ankis manual behandler Hard som et svar, du faktisk huskede. Trykker du på Hard, når du har glemt svaret, giver du FSRS forkerte oplysninger, og det kan føre til for lange intervaller.

Vælg Mochis binære repetition, hvis et valg mellem bestået og ikke bestået gør sessionen overskuelig. Vælg Anki, hvis du vil have de ekstra oplysninger fra svarvurderingerne og vil bruge optimeringsværktøjet, styringen af genkaldelsesrate, forudindstillingerne eller simulatoren for arbejdsbelastning. Se [FSRS vs SM-2](/blog/fsrs-vs-sm-2/), hvis du vil sammenligne planlæggerne frem for appsene.

## Mochis og Ankis priser dækker forskellige omkostninger

Til læring på én computer kan begge apps være gratis. Omkostningen opstår forskellige steder, når flere enheder indgår i din arbejdsgang.

Mochi tager **5 USD om måneden** for Pro-synkronisering og inkluderer publicering, dynamiske felter, AI-integration og support. Ankis computerapps er gratis, og den [officielle Anki-hjemmeside](https://apps.ankiweb.net/) beskriver AnkiWeb-synkronisering som gratis. AnkiMobile er den officielle betalingsapp til iPhone og iPad; AnkiDroid er en gratis Android-klient udviklet uafhængigt.

Så »Hvilken er billigst?« afhænger af dine enheder:

- Én computer: Begge kan være gratis.
- Flere computere eller Android-enheder: Ankis gratis hostede synkronisering sparer dig for et abonnement.
- iPhone eller iPad: Anki kræver et engangskøb af appen, mens Mochi kræver et løbende Pro-abonnement til synkronisering mellem enheder.
- Mochi-brugere, der allerede ønsker publicering, dynamiske felter eller AI-integrationen, kan se synkronisering som én del af pakken frem for hele omkostningen.

Kontrollér din regionale App Store, før du sammenligner de præcise samlede iOS-priser. Denne anmeldelse angiver ikke en fast pris fra appbutikken, da den kan variere mellem markeder.

## Mochi-hosting er ikke det samme som at arbejde lokalt

Tre betegnelser bliver ofte blandet sammen:

- **Local-first** betyder, at arbejdskopien ligger på din enhed, og at appen kan fortsætte uden sin skytjeneste.
- **Open source** betyder, at kildekoden er tilgængelig under en licens, der tillader gennemgang og ændringer.
- **Egen hosting** betyder, at produktet dokumenterer en understøttet måde at køre den relevante tjeneste på din egen infrastruktur.

Mochi dokumenterer tydeligt sin local-first-model. Selve appen præsenteres ikke som open source: Linket »Open source« i hjemmesidens sidefod fører til [en samling integrationer](https://github.com/mochi-cards/open-source), ikke til selve applikationen. Mochis egen hjemmeside dokumenterer heller ikke en understøttet erstatning for Pro-synkronisering, som du selv kan hoste.

Hvis du søger efter **Mochi-hosting**, fordi du vil have din egen server, går grænsen her: Du kan beholde lokale data og sikkerhedskopier i eget format, men den dokumenterede løsning til synkronisering mellem enheder er Mochi Pro. Local-first giver nyttig kontrol over data; det er ikke egen hosting.

Ankis hovedrepository er [licenseret under AGPL version 3 eller senere](https://github.com/ankitects/anki/blob/main/LICENSE) med angivne undtagelser for nogle komponenter. Den officielle manual dokumenterer også en [synkroniseringsserver til egen hosting](https://docs.ankiweb.net/sync-server.html) for avancerede brugere. Serveren erstatter AnkiWeb-synkronisering for kompatible klienter; den er ikke en selvhostet kopi af AnkiWeb-hjemmesiden. Anki forventer, at den, der driver serveren, håndterer problemer med kommandolinje, netværk, firewall, protokol og opdateringer.

## Hvad en Anki-import bevarer, og hvad den ændrer

Ifølge Mochis [importdokumentation](https://mochi.cards/docs/import-and-export/importing/) accepterer appen Anki-filer i `.apkg`-format, inklusive repetitionshistorik. Men en vellykket import betyder ikke, at kortene fungerer på samme måde.

Under importen konverterer Mochi HTML til Markdown og fjerner CSS og JavaScript. Det er en formatkonvertering mellem to forskellige kortmodeller. Enkelt materiale med for- og bagside er det nemmeste tilfælde. Et kort, der afhænger af udseende, skabelonlogik, indtastede svar eller JavaScript, skal gennemgås efter importen.

Repetitionshistorikken kræver også et udtrykkeligt valg ved eksport. Ankis [eksportmanual](https://docs.ankiweb.net/exporting.html) siger, at **Include Scheduling Information** (medtag planlægningsoplysninger) styrer, om repetitionshistorikken kommer med i pakken. Hvis du slår det fra, kan Mochi ikke genskabe historik, som `.apkg`-filen aldrig indeholdt.

Selv når historikken følger med, skal du ikke forvente identiske fremtidige repetitionsdatoer. De to apps kan bruge forskellige planlæggere, svarvurderinger, ønskede genkaldelsesrater, parametre, indlæringstrin og indstillinger for kortsæt. De bevarede hændelser giver den nye planlægger et datagrundlag; de gør ikke systemerne identiske.

## Sikkerhedskopier i appens eget format og teksteksport har forskellige formål

Før du flytter noget, skal du gemme en sikkerhedskopi, der kan gendanne det oprindelige system. En læsbar eksport er nyttig, men kan ikke altid bruges til gendannelse.

Mochis [vejledning til sikkerhedskopiering](https://mochi.cards/docs/getting-started/backing-up/) beskriver to måder at bevare data i appens eget format på:

- En kopi af hele brugermappen bevarer indhold, repetitionshistorik, vedhæftninger, appindstillinger og loginstatus.
- En `.mochi`-eksport bevarer kortsæt, kort, skabeloner og felter, vedhæftninger, tags og metadata, repetitionshistorik, kortrækkefølge og kortsættenes struktur.

Mochis [Markdown- og CSV-eksporter](https://mochi.cards/docs/import-and-export/exporting/) er formater til at flytte indhold. Markdown opretter én fil pr. kort og mapper til underordnede kortsæt, men udelader repetitionshistorik, kortrækkefølge, skabeloner og metadata-tags, medmindre taggene står i Markdown-teksten. CSV kan eksportere skabelonfelter eller gengivne for- og bagsider, men bevarer ikke repetitionshistorik, skabeloner eller metadata-tags, medmindre taggene er indlejret i indholdet.

Anki skelner på en lignende måde:

- En `.colpkg`-fil indeholder en eksport af hele samlingen med repetitionsplanlægning og kan medtage medier. Ved import erstatter den kortene i den Anki-samling, du importerer til.
- En `.apkg`-fil indeholder en eksport af ét kortsæt og dets underordnede kortsæt med valgmuligheder for planlægningsoplysninger, forudindstillinger og medier.
- Noter i ren tekst bruger tabulatorseparerede felter med indlejret HTML-formatering. De bevarer redigerbart indhold, ikke hele samlingens funktionalitet.

Flytning fra Mochi tilbage til Anki foregår normalt via CSV. Anki kan [knytte tekstkolonner til notefelter](https://docs.ankiweb.net/importing/text-files.html), men Mochi-links, funktionalitet med flere sider, skabeloner og repetitionshistorik bliver ikke til tilsvarende Anki-objekter gennem den fil. Behold `.mochi`-eksporten, selv når Anki-kopien ser korrekt ud.

## Test med et repræsentativt kortsæt, så du kan fortryde

En importdialog beviser, at en fil blev accepteret. Den beviser ikke, at din rigtige samling stadig fungerer, eller at du kan få brugbart indhold tilbage. Test begge retninger, mens din normale Anki-profil forbliver urørt.

1. **Sikkerhedskopiér hele Anki.** Eksportér en `.colpkg` med medier, og gem den uden for den profil, du arbejder i.
2. **Kontrollér, at sikkerhedskopien kan åbnes.** Opret en tom, midlertidig Anki-profil, og importér `.colpkg`-filen dér. Import af en samlingspakke erstatter målsamlingen; derfor er den midlertidige profil vigtig.
3. **Byg et repræsentativt kortsæt i den midlertidige profil.** Hold det lille nok til at gennemgå kort for kort, men medtag den funktionalitet, du bruger: almindelige og omvendte kort, cloze-kort med udeladt tekst, tilpassede skabeloner, CSS, JavaScript, billeder, lyd, ligninger, tags, underordnede kortsæt og repetitionshistorik.
4. **Eksportér kortsættet som `.apkg`.** Medtag planlægningsoplysninger, forudindstillinger og medier, når de er relevante. De valg lægger dataene i Anki-pakken; de lover ikke, at Mochi gengiver alle indstillinger.
5. **Importér til et nyt Mochi-kortsæt.** Lad din daglige Anki-profil og dens repetitionskø være uændret.
6. **Gennemgå kortene, før du repeterer.** Sammenlign indhold, formatering, felter, medier, tags, kortsættenes struktur og historik. Vær særlig opmærksom på alt, der afhang af HTML, CSS, JavaScript eller genererede kortvarianter.
7. **Vælg planlæggeren bevidst.** Mochi begynder med sin egen algoritme. Slå kun FSRS til, hvis det er den, du vil bruge efter forsøget.
8. **Repetér kopien i en almindelig uge.** Vurdér redigeringen i Markdown, fasen New cards, valget mellem Remembered og Forgot, offlinefunktionerne og, hvis du har betalt for det, synkronisering på de enheder, du faktisk har med dig.
9. **Test vejen tilbage.** Eksportér testkortsættet i Mochi som `.mochi` til en sikkerhedskopi i eget format og som CSV til Anki. Brug CSV med feltværdier, når genanvendelige felter er vigtige; brug CSV med gengivne sider, når du hovedsageligt har brug for det synlige indhold på for- og bagside. Importér CSV-filen til endnu en tom Anki-profil, og knyt kolonnerne til en passende notetype.
10. **Skriv alle accepterede tab ned.** Kontrollér flytningen frem og tilbage hver for sig. Den præcise formatering, funktionalitet med flere sider, funktioner fra tilføjelser, genererede varianter, svarvurderinger, historik eller fremtidige repetitionsdatoer kan betyde mere i daglig brug end i en sammenligningstabel.

Tilbageflytning via CSV flytter indhold, men gendanner ikke Mochi fuldt ud: Den medtager ikke repetitionshistorik, skabeloner eller metadata-tags, medmindre taggene er indlejret i indholdet. Hvis Mochi ikke løser det problem, du pegede på, så slet testkortsættet og fortsæt med den oprindelige Anki-profil. Hvis Mochi løser problemet, så flyt ét rigtigt kortsæt ad gangen, og behold sikkerhedskopierne i Ankis `.colpkg`- og Mochis `.mochi`-format gennem flere almindelige repetitionscyklusser.

## Hvem bør bruge Mochis læringskort?

Mochi passer godt, når:

- Markdown allerede er den måde, du skriver og tænker på;
- noter og repetitionskort hører hjemme i samme sammenkædede arbejdsområde;
- du ønsker et enkelt valg mellem Remembered og Forgot frem for fire vurderinger;
- offlinebrug på én enhed dækker din gratis arbejdsgang, eller Pro-synkronisering er 5 USD om måneden værd;
- din samling er ny eller enkel nok til, at en konvertering fra Anki indebærer lav risiko.

Bliv hos Anki, når:

- dine notetyper genererer flere vigtige kortvarianter;
- HTML/CSS-skabeloner, JavaScript, tilføjelser eller delte kortsæt er en del af systemet;
- gratis synkronisering mellem enheder er vigtigere end at skrive i Markdown;
- du vil have Ankis FSRS-optimeringsværktøj, styring af forudindstillinger, fire svarvurderinger og simulator for arbejdsbelastning;
- flere års repetitionsdata og tilpasset funktionalitet allerede fungerer godt.

Det mest fornuftige alternativ til Mochi afhænger af, hvorfor ingen af de to passer. Til en ny, enklere samling omfatter [Nibomos funktioner](/da/features/) FSRS-repetition, offlineøvelser og synkronisering, overførsel af kort, tags og medier, adgang for agenter og en dokumenteret vej til egen hosting. Jeg udvikler det, og begrænsningerne er relevante: Det erstatter ikke Mochis sammenkædede Markdown-notesbog eller Ankis modne system af skabeloner og tilføjelser. [Vejledningen til at komme i gang](/docs/getting-started/) viser de nuværende muligheder for hostet brug, mobil, agenter og egen hosting.

## Den samlede vurdering

Mochi er mere end en pænere Anki-grænseflade. Den egentlige idé er, at en Markdown-note, en vidensnote med links til andre noter og et kort til intervalbaseret repetition kan være samme objekt. Gratisplanen dækker offlinearbejde uden konto; Pro tilføjer de hostede funktioner, herunder synkronisering mellem enheder.

Det er et godt kompromis for en, der begynder på en ny samling med Markdown i centrum. Det kan også være værd at skifte fra Anki, hvis testen med et repræsentativt kortsæt viser, at indbygget Markdown og binære svarvurderinger løser konkrete problemer i din arbejdsgang.

For en erfaren Anki-bruger ligger bevisbyrden den anden vej. Sikkerhedskopiér samlingen, test de kort, der har mest tilpasset funktionalitet, og behold Anki, medmindre Mochi forbedrer din ugentlige arbejdsgang nok til at opveje de konkrete funktioner til formatering, skabeloner og planlægning samt de muligheder i økosystemet, du giver afkald på.
