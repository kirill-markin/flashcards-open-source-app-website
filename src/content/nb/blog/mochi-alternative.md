---
title: "Vurdering av Mochi-puggekort (2026): gratisabonnement, bruk uten nett og sammenligning med Anki"
description: "En vurdering av Mochi-puggekort basert på kontrollerte kilder: gratisabonnement, apper uten nett, Markdown-notater, FSRS, synkronisering, Anki-import, eksport og grenser for egen drift."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi puggekort"
  - "mochi kort"
  - "mochi mot anki"
  - "anki mot mochi"
  - "er mochi gratis"
  - "mochi uten nett"
  - "mochi priser"
  - "mochi egen drift"
  - "markdown puggekort"
  - "mochi intervallrepetisjon"
---

Mochi starter med et Markdown-dokument, ikke et vanlig skjema med forside og bakside. Legg til en linje med tre bindestreker, så får dokumentet sider du kan øve på. La det være et notat, lenk det til et annet kort, eller arkiver det slik at det fortsatt er søkbart uten å havne i repetisjonskøen.

Dette lille skilletegnet sier mye om hvem **Mochi-puggekort** passer for. Mochi er et godt valg for deg som vil ha notater og intervallrepetisjon i samme app med lokal lagring som utgangspunkt, særlig hvis Markdown, tilbakekoblinger og det enkle valget mellom husket og glemt føles naturlig. Det er mindre overbevisende for en etablert Anki-bruker som har en samling basert på genererte kortvarianter, tilpasset HTML/CSS, JavaScript, tillegg eller detaljerte innstillinger for repetisjonsalgoritmen.

Bruker du bare én enhet, er gratisabonnementet mer enn en prøveversjon: Du trenger ikke registrere deg, og Mochi dokumenterer ubegrenset bruk uten nett. Forbeholdet er at synkronisering mellom enheter krever **Pro-abonnementet til 5 USD per måned**. For en Anki-bruker veier det som går tapt ved flytting, tyngre. Mochi kan importere en Anki-pakke og repetisjonshistorikken, men kan ikke bevare alle maler, stiler, skript, algoritmeinnstillinger eller funksjoner fra tillegg.

> **Åpenhet om min rolle:** Jeg heter Kirill Markin og utvikler [Nibomo](/nb/). Vurderingen av arbeidsmåtene er kontrollert mot kildene; jeg hevder ikke å ha testet produktet selv. Artikkelen har ingen provisjonslenker. Hovedsammenligningen er mellom Mochi og Anki; mitt eget produkt omtales bare som et tydelig merket alternativ mot slutten.

**Fakta kontrollert:** 7. september 2026. Den nyeste synlige [Mochi-utgivelsen](https://mochi.cards/changelog/) på dette tidspunktet var versjon 26.8.2, datert 10. august 2026. Priser og opplysninger i appbutikkene kan endre seg.

![En bokkonservator prøver ut en liten trekkspillremse av sammenkoblede kort mens det opprinnelige arkivet ligger trygt i esker](/blog/mochi-alternative-v3.png)

## Den korte vurderingen

- **Velg Mochi** hvis du vil ha Markdown-notater og kort samlet, bruk uten nett og uten konto på én enhet, tilbakekoblinger og to svarvalg under repetisjon.
- **Velg Anki** hvis du trenger veletablerte notattyper, HTML/CSS-maler, tillegg, gratis driftet synkronisering, fire svargrader eller mer omfattende FSRS-innstillinger.
- **Vent med å bytte** hvis du allerede øver jevnlig og ikke kan peke på et problem Mochi vil løse i arbeidsmåten din. Et nytt grensesnitt er ikke grunn nok til å risikere flere år med repetisjonsdata og tilpassede kort.
- **Test før du flytter** hvis Anki allerede rommer samlingen du har bygget opp over tid. Mochi godtar `.apkg`-filer og kan ta med repetisjonshistorikk, men konverterer HTML til Markdown og fjerner CSS og JavaScript.

## Mochi og Anki i korte trekk

| Valggrunnlag | Mochi | Anki |
|---|---|---|
| Passer best for | Brukere av sammenkoblede notater og Markdown som vil ha notater sammen med øvingskort | Deg som vil ha et veletablert, konfigurerbart system for puggekort |
| Oppretting av kort | Et Markdown-dokument får flere sider når du legger til `---`; felt og maler er også tilgjengelige | Notater inneholder felt; HTML/CSS-maler genererer ett eller flere kort |
| Slik foregår repetisjonen | Nye kort går først gjennom en innlæringsfase; innlærte kort bruker Forgot / Remembered (glemt / husket) | Kort bruker Again / Hard / Good / Easy (igjen / vanskelig / bra / lett) |
| Repetisjonsplanlegging | Mochis egen algoritme som standard; FSRS er valgfritt | FSRS eller den eldre SM-2, med flere verktøy for å tilpasse FSRS |
| Gratisbruk | Ingen registrering og ubegrenset bruk uten nett | Gratis skrivebordsapper og gratis AnkiWeb-synkronisering; den offisielle iOS-appen koster penger |
| Synkronisering mellom enheter | Pro, 5 USD per måned | Gratis via AnkiWeb |
| Plattformer | Nett, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, offisielle AnkiMobile, uavhengige AnkiDroid |
| Formater for å ta med data videre | Eksport i eget `.mochi`-format, Markdown og CSV | Egne `.colpkg`- og `.apkg`-formater samt tabulatordelt tekst |
| Grenser for data og drift | Lokal lagring er utgangspunktet; kjerneappen presenteres ikke som åpen kildekode, og ingen støttet synkroniseringstjeneste for egen drift er dokumentert | Hovedkodearkivet er AGPL-lisensiert; en offisiell synkroniseringsserver for egen drift er dokumentert |

Det viktigste skillet er mellom **enkel bruk med notater som utgangspunkt og kontroll over hele samlingen**.

## Hva Mochis grensesnitt er bygget rundt

Mochis grensesnitt gir mer mening når du følger ett kort gjennom det.

Hvert kort tilhører en kortstokk. Klikk på **New Card** (nytt kort), så får du et Markdown-redigeringsfelt i stedet for faste felt for spørsmål og svar. Ett kort kan inneholde overskrifter, lister, kode, bilder, strukturerte felt og lenker. Legg til `---` mellom blokker for å lage to eller flere sider til repetisjon. Bruk `[[double brackets]]`, altså doble hakeparenteser, for å referere til et annet kort; Mochi lager automatisk en tilbakekobling. Den offisielle [oversikten over kort](https://mochi.cards/docs/cards/) dokumenterer også maler der plassholdere viser strukturerte feltverdier.

Kort kan gjøre to jobber uten å ligge i separate systemer:

- Et øvingskort bruker sider og inngår i intervallrepetisjon.
- Et referansenotat kan ligge i samme kortstokk og arkiveres. Da fjernes det fra køene for nye kort og kort som skal repeteres, uten at innhold, etiketter, lenker eller historikk slettes.

[Kortstokkvisninger](https://mochi.cards/docs/decks/custom-views/) er lagrede kombinasjoner av filtre, sortering og oppsett. Du kan ha en rutenettvisning for å bla gjennom kortene og lage en annen visning ut fra en etikett, om kortene skal repeteres, lav huskegrad eller nylig repetisjon. Mochi lar deg også bruke en visning til en intensiv puggeøkt uten å endre den vanlige repetisjonsplanen eller historikken. Det sier mer enn å kalle grensesnittet «rent»: Den samme kortstokken kan fungere som notatbok, filtrert database og øvingskø.

[Den daglige repetisjonen](https://mochi.cards/docs/getting-started/reviewing-cards/) har to trinn. Under **New cards** (nye kort) legger du enten kortet til i repetisjonsplanen eller velger Again (igjen) for å se det på nytt om kort tid. Når et innlært kort skal repeteres, viser Mochi neste side og ber deg velge **Forgot** (glemt) eller **Remembered** (husket). Hvis du glemmer det, bruker Mochi en kø for ny repetisjon før fremdriften nullstilles. Slik begrenser Mochi bevisst valgene du må ta under repetisjonen.

## Er Mochi gratis, og hva fungerer uten nett?

Ja, men «gratis» og «uten nett» betyr ulike ting avhengig av hvor du bruker appen. [Mochis prisside](https://mochi.cards/) oppgir:

- **Free:** 0 USD for alltid, uten krav om registrering, med ubegrenset bruk uten nett.
- **Pro:** 5 USD per måned, med synkronisering mellom enheter, publisering av kortstokker, dynamiske felt, KI-integrasjon og brukerstøtte på e-post.

Mochi finnes for macOS, Windows, Linux, iOS, Android og nettleseren. [Veiledningen for nedlasting og installasjon](https://mochi.cards/docs/getting-started/download-and-install/) trekker den praktiske grensen:

| Plattform | Hva gratisbruk og bruk uten nett betyr |
|---|---|
| Installert skrivebords- eller mobilapp | Du kan bruke Mochi uten nett og uten konto. Data lagres på enheten, så én installert app kan dekke alt du trenger gratis. |
| Nettapp uten Pro | Innhold lagres i nettleserens lokale lagring for bruk uten nett. Mochi advarer om at nettleseren kan slette disse dataene uten varsel. |
| Samme samling på flere enheter | Automatisk synkronisering mellom enheter er en Pro-funksjon, selv om hver installerte app kan fungere uten nett. |

Bruk uten nett og synkronisering er to ulike løfter. Du trenger ikke Pro bare for å lage kort eller øve i en nedlastet app. Du trenger det hvis den samme oppdaterte samlingen skal følge deg automatisk fra datamaskin til telefon. Ta sikkerhetskopi av viktige data fra gratisabonnementet i Mochis eget format, i stedet for å la enheten – og særlig nettleserlagringen – være eneste kopi.

Hvis bruk uten nett er avgjørende, kan du sammenligne den konkrete bruken på enhetene dine i [Fungerer Anki uten nett?](/blog/does-anki-work-offline/) og den bredere [veiledningen til apper for puggekort uten nett](/blog/best-offline-flashcards-app/).

## Markdown-puggekort er den viktigste grunnen til å velge Mochi

Mochis virkelige fordel er hvordan Markdown endrer kildematerialet du vedlikeholder.

Et Mochi-kort forblir lesbart som tekst. Det samme dokumentet kan inneholde en kort forklaring, en kodeblokk, lenker til beslektede ideer og skiller mellom sidene du øver på. Kort kan også bruke felt og maler når gjentakende struktur er viktig. Når en mal er i bruk, viser Mochi malens Markdown med feltplassholdere og ser bort fra kortets egen Markdown ved visning, uten å slette den.

Anki bygger på en annen modell. Et notat lagrer felt, og [kortmalene](https://docs.ankiweb.net/templates/intro.html) bestemmer hvilke felt som vises, og hvilke kort som genereres. Malene bruker HTML, med CSS for utseendet. Ett ordforrådsnotat kan derfor generere både gjenkjenningskort og kort der du må produsere svaret selv, mens de underliggende dataene blir liggende ett sted.

Denne strukturen gir Anki større muligheter for betingede oppsett, genererte kortvarianter, inntastede svar, tilpasset utseende og arbeidsmåter som utvides med tillegg. Det betyr også at Anki ikke er en app med innebygd Markdown-støtte for puggekort. En Markdown-basert arbeidsmåte i Anki trenger et ekstra konverteringstrinn eller tillegg.

Det praktiske spørsmålet er enkelt: Vil du ha et notat som kan bli et kort, eller en strukturert notattype som kan generere flere kort? Mochi er laget for det første. Anki er laget for det andre.

## Mochis intervallrepetisjon inkluderer nå FSRS

Sammenligninger som sier at Mochi ikke har FSRS, er utdaterte. Mochi la til en forhåndsversjon av FSRS i 2025 og har siden fortsatt å levere rettelser knyttet til repetisjonsalgoritmen. Likevel er [Mochis egen algoritme fortsatt standardvalget](https://mochi.cards/docs/reviewing/fsrs/).

Standardalgoritmen endrer intervallene med faste multiplikatorer etter hver repetisjon der du husker eller glemmer svaret. Bytt til FSRS under Review Settings (repetisjonsinnstillinger), så flyttes eksisterende innlærte kort til FSRS uten å miste historikken. Du kan angi ønsket huskegrad, legge inn egne parametere og bytte tilbake senere.

Mochi beholder sine to svargrader uansett algoritme:

- **Forgot** (glemt) tilsvarer Again i FSRS.
- **Remembered** (husket) tilsvarer Good i FSRS.

Mochis dokumentasjon sier at to svargrader fungerer med FSRS, men at noe av informasjonen Hard og Easy ville gitt, går tapt. Mochi godtar optimaliserte, egendefinerte parametere, men har ingen innebygd optimalisering. For å beregne personlige parametere må du bruke et eksternt FSRS-optimaliseringsverktøy og repetisjonshistorikken fra Mochi.

[Ankis FSRS-innstillinger](https://docs.ankiweb.net/deck-options.html#fsrs) går lenger. Ønsket huskegrad og parametere kan knyttes til forhåndsinnstillinger, den innebygde optimaliseringen kan tilpasse parametere til repetisjonshistorikken, og simulatoren anslår antall repetisjoner eller øvingsminutter med ulike innstillinger. Anki registrerer også fire utfall: Again, Hard, Good og Easy.

De ekstra knappene hjelper bare hvis du bruker dem konsekvent. Ankis håndbok regner Hard som vellykket gjenkalling. Trykker du Hard når du har glemt svaret, gir du FSRS feil informasjon, noe som kan føre til for lange intervaller.

Velg Mochis to svarvalg hvis husket/glemt gjør økten oversiktlig. Velg Anki hvis du vil gi mer nyansert tilbakemelding og vil bruke optimaliseringen, innstillingene for huskegrad, forhåndsinnstillingene eller simulatoren for arbeidsmengde. Se [FSRS mot SM-2](/blog/fsrs-vs-sm-2/) for en sammenligning av algoritmene fremfor appene.

## Hva du betaler for, er forskjellig i Mochi og Anki

For øving på én datamaskin kan begge appene være gratis. Når du bruker flere enheter, er det ulike deler av oppsettet du må betale for.

Mochi tar **5 USD per måned** for Pro-synkronisering og inkluderer publisering, dynamiske felt, KI-integrasjon og brukerstøtte. Ankis skrivebordsapper er gratis, og [det offisielle Anki-nettstedet](https://apps.ankiweb.net/) beskriver AnkiWeb-synkronisering som gratis. AnkiMobile er den offisielle betalingsappen for iPhone og iPad; AnkiDroid er en gratis Android-klient utviklet uavhengig av Anki.

Hva som er billigst, avhenger derfor av enhetene dine:

- Én datamaskin: Begge kan være gratis.
- Flere datamaskiner eller Android-enheter: Ankis gratis driftede synkronisering gjør at du slipper abonnement.
- iPhone eller iPad: Anki krever et engangskjøp av appen, mens Mochi legger synkronisering mellom enheter bak det løpende Pro-abonnementet.
- Mochi-brukere som allerede ønsker publisering, dynamiske felt eller KI-integrasjonen, kan se synkronisering som én del av pakken fremfor hele kostnaden.

Sjekk App Store for regionen din før du sammenligner de nøyaktige iOS-kostnadene. Denne vurderingen låser ikke sammenligningen til en appbutikkpris som kan variere mellom markeder.

## Lokal bruk av Mochi er ikke det samme som egen drift

Tre begreper blir ofte blandet sammen:

- **Lokal lagring som utgangspunkt** betyr at arbeidskopien ligger på enheten din, og at appen kan fortsette uten skytjenesten sin.
- **Åpen kildekode** betyr at kildekoden er tilgjengelig under en lisens som tillater innsyn og endringer.
- **Egen drift** betyr at produktet dokumenterer en støttet måte å kjøre den aktuelle tjenesten på din egen infrastruktur.

Mochi dokumenterer tydelig at lokal lagring er utgangspunktet. Kjerneappen presenteres ikke som åpen kildekode: Lenken «Open source» i bunnteksten på nettstedet går til [en samling integrasjoner](https://github.com/mochi-cards/open-source), ikke selve appen. Mochis eget nettsted dokumenterer heller ingen støttet erstatning for Pro-synkronisering som du kan drifte selv.

Hvis du søker etter **egen drift av Mochi** fordi du vil ha din egen server, går grensen her: Du kan beholde lokale data og sikkerhetskopier i Mochis eget format, men den dokumenterte veien mellom enheter er Mochi Pro. Lokal lagring gir nyttig kontroll over dataene; det er ikke egen drift.

Ankis hovedkodearkiv er [lisensiert under AGPL versjon 3 eller nyere](https://github.com/ankitects/anki/blob/main/LICENSE), med oppgitte unntak for enkelte komponenter. Den offisielle håndboken dokumenterer også en [synkroniseringsserver for egen drift](https://docs.ankiweb.net/sync-server.html) for avanserte brukere. Serveren erstatter AnkiWeb-synkronisering for kompatible klienter. Den er ikke en kopi av AnkiWeb-nettstedet som du drifter selv, og Anki forventer at den som drifter serveren, håndterer kommandolinje, nettverk, brannmur, protokoll og oppdateringer.

## Hva en Anki-import bevarer, og hva den endrer

Mochis [importdokumentasjon](https://mochi.cards/docs/import-and-export/importing/) beskriver støtte for Anki-filer i `.apkg`-format, inkludert repetisjonshistorikk. Men at noe er importert, betyr ikke at det fungerer på samme måte.

Ved import konverterer Mochi HTML til Markdown og fjerner CSS og JavaScript. Det er en formatkonvertering mellom to ulike kortmodeller. Enkle kort med forside og bakside er det letteste tilfellet. Kort som er avhengige av utseende, mallogikk, inntastede svar eller JavaScript, må undersøkes etter import.

Repetisjonshistorikken krever også et bevisst valg ved eksport. Ankis [eksporthåndbok](https://docs.ankiweb.net/exporting.html) sier at **Include Scheduling Information** (inkluder planleggingsinformasjon) avgjør om repetisjonshistorikken blir med i pakken. Hvis du lar valget være avslått, kan ikke Mochi gjenopprette historikk som aldri var i `.apkg`-filen.

Selv når historikken følger med, bør du ikke forvente identiske fremtidige repetisjonsdatoer. Appene kan bruke ulike algoritmer, svargrader, ønsket huskegrad, parametere, innlæringstrinn og kortstokkinnstillinger. Bevarte hendelser gir den nye algoritmen et datagrunnlag; de gjør ikke systemene identiske.

## Sikkerhetskopier i appens eget format og teksteksporter har ulike formål

Før du flytter noe, bør du ta en sikkerhetskopi som kan gjenopprette det opprinnelige systemet. En lesbar eksport er nyttig, men kan ikke alltid brukes til gjenoppretting.

Mochis [veiledning for sikkerhetskopiering](https://mochi.cards/docs/getting-started/backing-up/) dokumenterer to alternativer som bevarer data i appens eget format:

- En kopi av hele brukermappen bevarer innhold, repetisjonshistorikk, vedlegg, appinnstillinger og innloggingsstatus.
- En `.mochi`-eksport bevarer kortstokker, kort, maler og felt, vedlegg, etiketter og metadata, repetisjonshistorikk, kortrekkefølge og kortstokkstruktur.

Mochis [Markdown- og CSV-eksporter](https://mochi.cards/docs/import-and-export/exporting/) er formater for å flytte innhold. Markdown lager én fil per kort og mapper for underkortstokker, men utelater repetisjonshistorikk, kortrekkefølge, maler og metadataetiketter, med mindre etikettene står i Markdown-teksten. CSV kan eksportere malfelt eller ferdig gjengitte forsider og baksider, men bevarer ikke repetisjonshistorikk eller maler. Metadataetiketter bevares bare hvis de er innebygd i innholdet.

Anki skiller på en lignende måte:

- En `.colpkg` eksporterer hele samlingen med repetisjonsplanlegging og kan inkludere mediefiler. Import erstatter kortene i Anki-samlingen du importerer til.
- En `.apkg` eksporterer én kortstokk og underkortstokkene, med valg for planleggingsinformasjon, forhåndsinnstillinger og mediefiler.
- Notater i ren tekst bruker tabulatordelte felt med innebygd HTML-formatering. De bevarer redigerbart innhold, ikke all funksjonaliteten i samlingen.

Å flytte fra Mochi tilbake til Anki betyr normalt CSV. Anki kan [koble tekstkolonner til notatfelt](https://docs.ankiweb.net/importing/text-files.html), men Mochi-lenker, flersidige kort, maler og repetisjonshistorikk blir ikke til tilsvarende Anki-objekter gjennom den filen. Behold `.mochi`-eksporten også etter at Anki-kopien ser riktig ut.

## Test en representativ kortstokk slik at du kan gå tilbake

En importdialog beviser at en fil ble godtatt. Den beviser ikke at den virkelige samlingen din fortsatt fungerer, eller at du kan få brukbart innhold tilbake. Test begge retninger mens den vanlige Anki-profilen forblir urørt.

1. **Sikkerhetskopier hele Anki-samlingen.** Eksporter en `.colpkg` med mediefiler og lagre den utenfor profilen du bruker til vanlig.
2. **Bekreft at sikkerhetskopien kan åpnes.** Lag en tom, midlertidig Anki-profil og importer `.colpkg`-filen der. Import av en samlingspakke erstatter målsamlingen, og derfor er den midlertidige profilen viktig.
3. **Lag en representativ kortstokk i den midlertidige profilen.** Hold den liten nok til å sjekke kort for kort, men ta med funksjonene du er avhengig av: vanlige og omvendte kort, cloze-kort med utelatt tekst, egne maler, CSS, JavaScript, bilder, lyd, ligninger, etiketter, underkortstokker og repetisjonshistorikk.
4. **Eksporter kortstokken som `.apkg`.** Inkluder planleggingsinformasjon, forhåndsinnstillinger og mediefiler når de er viktige. Valgene legger dataene i Anki-pakken; de lover ikke at Mochi gjenskaper alle innstillingene.
5. **Importer til en ny Mochi-kortstokk.** La den vanlige Anki-profilen og køen med kort som skal repeteres, være uendret.
6. **Undersøk før du øver.** Sammenlign innhold, formatering, felt, mediefiler, etiketter, kortstokkstruktur og historikk. Se spesielt på alt som var avhengig av HTML, CSS, JavaScript eller genererte kortvarianter.
7. **Velg algoritme bevisst.** Mochi starter med sin egen algoritme. Slå bare på FSRS hvis det er den du vil bruke etter prøveperioden.
8. **Øv med kopien i én vanlig uke.** Vurder redigeringen i Markdown, trinnet for nye kort, valget mellom husket og glemt, bruk uten nett og – hvis du har betalt for det – synkronisering på enhetene du faktisk har med deg.
9. **Test veien tilbake.** Eksporter testkortstokken fra Mochi som `.mochi` for en sikkerhetskopi i eget format og som CSV for Anki. Bruk CSV med feltverdier når gjenbrukbare felt er viktige; bruk CSV med gjengitte kortsider når du hovedsakelig trenger det synlige innholdet på forsiden og baksiden. Importer CSV-filen til en annen tom Anki-profil og koble kolonnene til en egnet notattype.
10. **Skriv ned hvert tap du aksepterer.** Kontroller veien ut og tilbake hver for seg. Nøyaktig utseende, flersidige kort, funksjoner fra tillegg, genererte varianter, svargrader, historikk eller fremtidige repetisjonsdatoer kan bety mer i daglig bruk enn de gjorde i en sammenligningstabell.

Returen via CSV flytter innhold, men gjenoppretter ikke hele Mochi-oppsettet: Repetisjonshistorikk og maler følger ikke med, og metadataetiketter følger bare med hvis de er innebygd i innholdet. Hvis Mochi ikke løser problemet du pekte på, slett testkortstokken og fortsett med den opprinnelige Anki-profilen. Hvis det gjør det, flytt én ekte kortstokk om gangen og behold både Anki-sikkerhetskopien i `.colpkg` og Mochi-sikkerhetskopien i `.mochi` gjennom flere vanlige repetisjonsrunder.

## Hvem bør bruke Mochi-puggekort?

Mochi passer godt når:

- Markdown allerede er måten du skriver og tenker på;
- notater og øvingskort hører hjemme i samme sammenkoblede arbeidsområde;
- du vil ha et enkelt valg mellom husket og glemt fremfor fire svargrader;
- gratis bruk uten nett på én enhet dekker behovene dine, eller Pro-synkronisering er verdt 5 USD per måned;
- samlingen din er ny eller enkel nok til at en konvertering fra Anki innebærer liten risiko.

Bli i Anki når:

- notattypene dine genererer flere viktige kortvarianter;
- HTML/CSS-maler, JavaScript, tillegg eller delte kortstokker er en del av systemet;
- gratis synkronisering mellom enheter betyr mer enn å skrive i Markdown;
- du vil ha Ankis FSRS-optimalisering, styring av forhåndsinnstillinger, fire svargrader og simulator for arbeidsmengde;
- flere år med repetisjonsdata og tilpassede funksjoner allerede fungerer godt.

Det mest fornuftige alternativet til Mochi avhenger av hvorfor ingen av de to passer. For en ny og enklere samling omfatter [Nibomos funksjoner](/nb/features/) FSRS-repetisjon, øving uten nett og synkronisering, overføring av kort, etiketter og mediefiler, tilgang for agenter og en dokumentert løsning for egen drift. Jeg utvikler Nibomo, og begrensningene er relevante: Appen erstatter ikke Mochis sammenkoblede Markdown-notatbok eller Ankis veletablerte system for maler og tillegg. [Kom i gang-veiledningen](/docs/getting-started/) viser de gjeldende alternativene for den driftede tjenesten, mobil, agenter og egen drift.

## Konklusjon

Mochi er mer enn et penere Anki-grensesnitt. Hovedideen er at et Markdown-notat, en kunnskapsoppføring med lenker til andre oppføringer og et kort for intervallrepetisjon kan være samme objekt. Gratisabonnementet dekker arbeid uten nett og uten konto; Pro legger til de driftede funksjonene, blant annet synkronisering mellom enheter.

Det er en god avveining for deg som starter en ny samling med Markdown som utgangspunkt. Det kan også være verdt å bytte fra Anki hvis testen med en representativ kortstokk viser at innebygd Markdown og to svarvalg fjerner konkrete hindringer.

For en etablert Anki-bruker er det Mochi som må bevise at et bytte er verdt det. Sikkerhetskopier samlingen, test kortene med flest tilpasninger, og behold Anki med mindre Mochi forbedrer den ukentlige arbeidsmåten nok til å forsvare de konkrete funksjonene innen formatering, maler, repetisjonsplanlegging og økosystem som du gir slipp på.
