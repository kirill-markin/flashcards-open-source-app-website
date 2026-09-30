---
title: "De beste FSRS-innstillingene for Anki i 2026: hukommelsesmål, læringstrinn og repetisjonsmengde"
description: "Velg trygge FSRS-innstillinger for ønsket gjenkalling, læringstrinn, optimalisering, omplanlegging og arbeidsmengde i Anki 26.08 med FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS-innstillinger"
  - "beste FSRS-innstillinger"
  - "Anki FSRS-innstillinger"
  - "ønsket gjenkalling FSRS"
  - "FSRS læringstrinn"
  - "FSRS-simulator"
  - "optimalisere FSRS-parametere"
  - "FSRS-6"
---

Å øke ønsket gjenkalling i Anki fra 90 % til 95 % høres ut som en liten endring. Men det betyr ikke fem prosent mer arbeid. FSRS må forkorte intervallene når målet øker, og en samling du har brukt lenge, kan få en langt tyngre repetisjonskø. Slår du også på **Reschedule cards on change**, kan deler av arbeidsmengden komme med en gang.

De beste FSRS-innstillingene er derfor ikke en parameterrekke du kan kopiere. De er en serie valg: bestem hvor mye arbeid du kan håndtere over tid, velg et hukommelsesmål innenfor den rammen, tilpass modellen til din egen historikk, og la eksisterende repetisjonsdatoer stå med mindre du bevisst ønsker å beregne dem på nytt.

Navnene og virkemåten nedenfor gjelder [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) og innstillingene for FSRS-6. Trenger du først å forstå modellen, kan du lese [Hva er FSRS?](/blog/what-is-fsrs/). Hvis du fortsatt velger repetisjonsalgoritme, begynn med [FSRS mot SM-2](/blog/fsrs-vs-sm-2/).

> **Om forfatterens tilknytning:** Jeg heter Kirill Markin og utvikler [Nibomo](/nb/features/). Anki tilbyr personlig tilpasning av parametere og eksperimentelle simulatorer for arbeidsmengde som Nibomo foreløpig ikke har. Sammenligningen mot slutten gjør disse forskjellene tydelige.

**Faktasjekket:** 8. september 2026.

![En sluseoperatør tester vannstrømmen i en skalamodell før den virkelige slusen justeres](/blog/fsrs-settings-v2.png)

## Det korte svaret: begynn her

For de fleste Anki-brukere er dette trygge utgangspunkter, ikke innstillinger som passer alle:

| Innstilling eller vane | Trygt utgangspunkt | Hvorfor |
| --- | --- | --- |
| Ønsket gjenkalling (Desired retention) | `0.90` | Dette er standarden i Anki og balanserer gjenkalling mot repetisjonsmengde. |
| FSRS-parametere | Bruk **Optimize Current Preset**; ikke lim inn eller rediger vekter manuelt | Optimaliseringsfunksjonen tilpasser modellen til repetisjonshistorikken din. |
| Hvor ofte du optimaliserer | Høyst månedlig; med noen måneders mellomrom er vanligvis nok | Anki anbefaler ikke hyppig optimalisering. |
| Læringstrinn | Behold noen få trinn som fullføres samme dag | Lange rekker med trinn utsetter planleggingen som bygger på modellen. |
| Gjenlæringstrinn | Bruk så få som mulig, og hold dem under én dag | Den samme grensen gjelder etter at du har glemt et kort ved repetisjon. |
| Omplanlegging ved endring (Reschedule cards on change) | Av | Nye innstillinger kan tre i kraft gjennom fremtidige repetisjoner uten å bygge om dagens kø. |
| Maksimalt intervall | Behold standarden på 100 år | Et lavere tak tvinger innarbeidede kort tilbake oftere. |
| Nye kort per dag | Velg ut fra en arbeidsmengde du kan håndtere over tid | Hvert nytt kort gir læringsarbeid nå og repetisjoner senere. |
| Again eller Hard | Again betyr mislykket gjenkalling; Hard betyr at du husket svaret, men strevde | Feil vurderinger gir modellen feil historikk. |

Hvis repetisjonene er overkommelige og oppsettet ditt allerede ligger nær dette, er det kanskje ingenting å rette. Å vedlikeholde innstillinger er ikke det samme som å studere.

## Hold tre valg fra hverandre

Folk blander ofte ønsket gjenkalling, FSRS-parametere og daglig arbeidsmengde sammen. De styrer forskjellige ting:

- **Ønsket gjenkalling** er målet ditt for hvor mye du skal huske. Du velger det ut fra målene dine og tiden du har til å studere.
- **FSRS-parametere** tilpasser hukommelsesmodellen til repetisjonshistorikken. Ankis optimaliseringsfunksjon beregner dem.
- **Grenser for nye kort og repetisjoner** styrer hvor mye stoff som kommer inn, og hvor mye av det som er klart for repetisjon, Anki kan vise hver dag.

Dette skillet gjør det mye enklere å finne årsaken til problemer. En stor kø betyr ikke automatisk at parameterne dine er feil. En kortstokk med viktig stoff trenger ikke automatisk et eget parameteroppsett. Å senke ønsket gjenkalling løser heller ikke problemet hvis du hele tiden legger til flere nye kort enn du kan håndtere.

## Velg ønsket gjenkalling ut fra arbeidsmengde, ikke ambisjon

Ønsket gjenkalling forteller FSRS hvor stor sannsynlighet du ønsker for å huske et repetisjonskort når det skal repeteres. Med `0.90` planlegger FSRS ut fra en beregnet sannsynlighet på 90 % for å huske svaret. Det er et mål for modellen, ingen garanti for at du får nøyaktig 90 % riktige svar i hver økt eller på en eksamen.

Avveiningen går begge veier:

- Øker du ønsket gjenkalling, blir intervallene kortere og repetisjonene flere.
- Senker du den, blir intervallene lengre og du glemmer oftere.
- Setter du den for lavt, kan ekstra gjenlæring etter feil spise opp noe av tiden du håpet å spare.

Ankis standard er 90 %. [Veiledningen om ønsket gjenkalling](https://docs.ankiweb.net/deck-options.html#desired-retention) advarer om at arbeidsmengden stiger raskt når målet nærmer seg 100 %, og anbefaler å holde seg under 97 %. Den offisielle [forklaringen av optimal gjenkalling](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) tar for seg den andre enden av kurven: svært lav gjenkalling kan også være lite effektivt fordi glemte kort krever mer arbeid.

Begynn med `0.90`, og endre først etter at du har vurdert arbeidsmengden. Et høyere mål kan være fornuftig for stoff det har reelle konsekvenser å glemme. Et lavere mål kan passe når repetisjonene tar tid fra viktigere studiearbeid. Ingen av endringene løser uklare kort, uærlige vurderinger eller for mange nye kort.

### Kortstokkens hukommelsesmål og oppsettets parametere gjelder på ulike nivåer

I Anki 26.08 kan **Desired retention** gjelde på to nivåer: **Shared Preset** og **This deck**. Du kan dermed la beslektede kortstokker dele ett parameteroppsett, samtidig som en bestemt kortstokk får sitt eget hukommelsesmål.

Bruk overstyringen når konsekvensene av å glemme er forskjellige. En kortstokk til en autorisasjonseksamen kan forsvare et høyere mål enn en lite prioritert kortstokk med oppslagsstoff, selv om begge bruker den samme tilpassede modellen.

FSRS-parameterne blir ikke spesifikke for kortstokken når du velger **This deck**. Som standard tilpasser Anki parameterne ut fra repetisjonshistorikken til alle kortstokker som bruker det gjeldende oppsettet. Hvis grupper av kortstokker oppleves som svært forskjellige i vanskelighetsgrad, er separate oppsett den støttede måten å tilpasse dem hver for seg på.

## Bruk Help Me Decide og Simulator til ulike spørsmål

Anki 26.08 har to separate eksperimentelle verktøy:

- **Help Me Decide (Experimental)** viser en personlig kurve for sammenhengen mellom gjenkalling og arbeidsmengde. Bruk den til å spørre: «Hvilket hukommelsesmål passer til antallet repetisjoner eller tiden jeg kan sette av over tid?»
- **FSRS Simulator (Experimental)** anslår hvordan ett oppsett kan fungere over tid. Bruk den til å sammenligne endringer i gjenkalling, tilførsel av nye kort, repetisjonsgrenser og maksimalt intervall.

[Dokumentasjonen for FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) oppgir disse sentrale inndataene:

- antall dager som skal simuleres
- antall ekstra nye kort som skal simuleres
- nye kort per dag
- maksimalt antall repetisjoner per dag
- maksimalt intervall
- ønsket gjenkalling og oppsettets FSRS-parametere

Simuleringen bruker også de faktiske hukommelsestilstandene til kortene i oppsettet. Det gjør den mer nyttig for en godt innarbeidet samling enn å gange antallet kort som skal repeteres i dag, med en generell prosentsats.

Kjør tre scenarioer før du endrer oppsettet du bruker:

1. Nåværende mål for gjenkalling og tilførsel av nye kort.
2. Hukommelsesmålet du vurderer.
3. Det samme målet med færre nye kort per dag.

Den tredje kjøringen tester et vanlig alternativ: behold hukommelsesmålet og reduser tilførselen av nytt stoff. Hvis det gir en overkommelig prognose, trenger du ikke godta mer glemsel bare for å få køen under kontroll. [Hvor mange nye puggekort per dag?](/blog/how-many-new-flashcards-per-day/) går nærmere inn på tilførselen av nye kort.

Begge verktøyene gir anslag. Dager du hopper over, redigerte kort, nytt stoff og endrede vurderingsvaner kan få den faktiske arbeidsmengden til å avvike fra grafen. Bruk sammenligningen til å velge retning, ikke til å love en bestemt kø flere måneder frem i tid.

Eldre veiledninger nevner kanskje **Compute Minimum Recommended Retention**, eller CMRR. Anki fjernet denne funksjonen i versjon 25.07. Den er ikke lenger fremgangsmåten for å velge ønsket gjenkalling.

## Optimaliser FSRS-parametere ut fra din egen historikk

Ønsket gjenkalling uttrykker målet ditt. FSRS-parameterne beskriver hvordan modellen passer til repetisjonshistorikken din.

I Anki 26.08 bruker du **Optimize Current Preset** til å tilpasse parameterne for det aktive oppsettet. Som standard tar Anki med repetisjonshistorikken fra alle kortstokker som bruker oppsettet. Du kan justere søket hvis datagrunnlaget skal være snevrere. **Optimize All Presets** oppdaterer alle oppsett i én operasjon.

Ikke skriv inn vekter manuelt eller kopier dem fra Reddit, en video eller en annens kortstokk. Deres kort, repetisjonstidspunkter og vurderingsvaner er ikke din historikk. En ryddig rekke med [FSRS-6-vekter](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) er ikke en studiestrategi du kan overta.

Optimaliser på nytt først når du har samlet en vesentlig mengde ny repetisjonshistorikk. Anki-manualen sier at én gang i måneden er tilstrekkelig, mens veiledningen inne i Anki 26.08 sier at én gang med noen måneders mellomrom er nok. Den praktiske konklusjonen er den samme: det er ingen grunn til å optimalisere hver uke, langt mindre etter hver økt.

### Bruk tilstandssjekken på det gjeldende oppsettet

Slå på **Check health when optimizing (slow)** når du vil at Anki skal vurdere hvor godt FSRS kan tilpasse seg historikken i det gjeldende oppsettet. Sjekken kjøres med **Optimize Current Preset**, ikke **Optimize All Presets**.

Er resultatet dårlig, undersøk dataene før du rører vektene. [Ankis veiledning om FSRS-parametere](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nevner vanlige årsaker: færre enn noen hundre repetisjoner, bruk av Hard etter at du har glemt svaret, og at du unnlater å trykke Again når du ikke husker. Har du lite nyttig historikk, behold standardverdiene og optimaliser senere fremfor å låne en annen brukers parametere.

## Again betyr at du ikke husket; Hard er bestått

Denne vanen betyr like mye som enhver innstilling.

Bruk **Again** når du ikke klarte å hente frem svaret som var påkrevd, eller svarte feil. Bruk **Hard** bare når du husket riktig, men med stor anstrengelse eller nøling. Good og Easy betyr også at du husket svaret.

Trykker du Hard for å unngå et kort Again-intervall, registrerer du vellykket gjenkalling etter en feil. FSRS lærer da av feil hendelse. Velg knappen ut fra hvordan du husket svaret, ikke ut fra hvilket av intervallene over knappene du helst vil ha.

Tvetydige kort gjør ærlige vurderinger vanskeligere. Hvis et spørsmål ber om fem fakta og du husker fire, begynte planleggingsproblemet i kortredigeringen. Del opp eller skriv om kortet. For kort du stadig glemmer til tross for gjentatte repetisjoner, se [Slik fikser du puggekort du stadig glemmer](/blog/how-to-fix-leech-flashcards/).

## Hold læringstrinnene korte, eller la dem stå tomme med vilje

Lærings- og gjenlæringstrinn styrer de korte intervallene før den vanlige langtidsplanleggingen tar over. De er ikke et ekstra hukommelsesmål.

Ankis FSRS-veiledning anbefaler to begrensninger:

- hvert trinn bør være kortere enn én dag og kunne fullføres samme dag
- antallet repetisjoner på samme dag bør være lavt

Lange rekker som `1m 10m 1d 3d` tar med seg en gammel SM-2-vane inn i FSRS. Trinn på én dag eller mer utsetter modellbasert planlegging og kan gi forvirrende knappetekster, som at Hard viser et lengre intervall enn Good.

En kort rekke som `1m 10m`, med `10m` som gjenlæringstrinn, er et forsiktig utgangspunkt når den passer til øktene dine. Flere repetisjoner på samme dag er ikke automatisk bedre.

Anki 26.08 lar deg også la ett eller begge feltene for lærings- og gjenlæringstrinn stå tomme. Når FSRS er aktivert, overlater et tomt felt denne korttidsplanleggingen til FSRS. Dette er eksperimentelt, og et Again-intervall kan bli én dag eller lengre. Behold korte, manuelle trinn hvis du trenger at kortet kommer tilbake samme dag på en forutsigbar måte. Tøm et felt bare når du bevisst godtar at FSRS velger tidspunktet.

## La Reschedule cards on change være av for en gradvis overgang

Når **Reschedule cards on change** er av, som er standarden, blir ikke eksisterende repetisjonsdatoer umiddelbart skrevet om når du aktiverer FSRS eller endrer ønsket gjenkalling eller parametere. Det nye oppsettet brukes etter hvert som kortene repeteres, slik at køen endres gradvis.

Lagrer du en av disse FSRS-endringene med alternativet på, beregnes repetisjonsdatoene på nytt med en gang. Avhengig av det nye målet og kortenes tilstand kan mange kort bli klare for repetisjon samtidig. Anki legger også til historikkoppføringer for kort som omplanlegges, noe som øker samlingens størrelse.

Dette alternativet er nyttig bare når du faktisk ønsker en omberegning som også gjelder eksisterende datoer. For en innarbeidet samling:

1. Lag en ny sikkerhetskopi, og sørg for at du vet hvordan du angrer endringen eller gjenoppretter fra sikkerhetskopien.
2. Kjør Simulator med innstillingene du vurderer.
3. Velg én endring i oppsettet; ikke kombiner flere eksperimenter.
4. Når du lagrer, slå på omplanlegging bare hvis du ønsker at repetisjonsdatoene skal skrives om umiddelbart, og kan håndtere resultatet.

Anki anbefaler uttrykkelig en sikkerhetskopi når du bytter fra SM-2 med omplanlegging. Den mer generelle [veiledningen til sikkerhetskopiering av puggekort](/blog/how-to-back-up-flashcards/) forklarer hvorfor muligheten til å gjenopprette er like viktig som selve sikkerhetskopifilen.

## Behold et romslig maksimalt intervall

Ankis maksimale intervall er som standard 100 år. Det virker rart til du husker at dette er et tak, ikke et løfte om at hvert godt innlært kort skal forsvinne i et århundre.

Et lavere tak tvinger kort du kjenner godt, tilbake tidligere og øker arbeidsmengden. Ved taket kan Hard, Good og Easy vise samme intervall, fordi ingen av dem kan overskride maksimumet.

Et kortere maksimalt intervall kan være fornuftig når en eksamen gir en konkret tidshorisont, stoffet endres ofte, eller faglige krav pålegger gjentatt gjennomgang uavhengig av beregnet hukommelse. Tilpass taket til kalenderen og Simulator fremfor å velge et lavt tall av bekymring. [Slik studerer du til eksamen med FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) tar for seg dette mer avgrensede tilfellet.

For vanlig langtidslæring bør taket forbli romslig. Ønsket gjenkalling styrer allerede når den beregnede sannsynligheten for å huske skal utløse en repetisjon.

## Antallet nye kort er en del av arbeidsmengden

FSRS kan fordele repetisjoner; det kan ikke gjøre ubegrenset tilførsel overkommelig. Hvert nytt kort gir læringsarbeid nå og repetisjonsarbeid senere.

Når køen blir for tung, undersøk dette før du senker ønsket gjenkalling:

- nye kort per dag
- store importer eller grupper med genererte kort
- en grense for maksimalt antall repetisjoner som stadig skjuler kort som skulle vært repetert
- kort du stadig glemmer, og uklare kort som krever gjentatte forsøk
- dager du har hoppet over repetisjonene

Bruk **Additional new cards to simulate** når du vet at en kortstokk vil vokse. En prognose som bare bygger på dagens samling, viser ikke arbeidsmengden etter en stor import.

Blir resultatet for høyt, reduser tilførselen og simuler igjen. Da beholder du hukommelsesmålet uten å be algoritmen godta mer glemsel.

## Anki og Nibomo tilbyr ulike FSRS-innstillinger

Begge produktene bruker FSRS-6, men FSRS-innstillingene i Anki kan ikke overføres én til én til Nibomo.

| Mulighet | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Ønsket gjenkalling | **Shared Preset** eller **This deck** | Kan stilles inn per arbeidsområde; standard `0.90` |
| FSRS-parametere | **Optimize Current Preset** eller **Optimize All Presets** ut fra repetisjonshistorikken | De offisielle standardvektene for FSRS-6 er fastsatt og kan ikke endres av brukeren i v1 |
| Læringstrinn | Kan stilles inn; FSRS-planlegging med tomt felt er eksperimentell | Kan stilles inn per arbeidsområde; standard `1m 10m` |
| Gjenlæringstrinn | Kan stilles inn; FSRS-planlegging med tomt felt er eksperimentell | Kan stilles inn per arbeidsområde; standard `10m` |
| Maksimalt intervall | Standard 100 år | Standard 36 500 dager, også 100 år |
| Endring av innstillinger | Gjelder fremtidige repetisjoner som standard; valgfri omplanlegging av eksisterende datoer | Gjelder bare fremtidige repetisjoner; eksisterende repetisjonsdatoer beregnes ikke på nytt |
| Verktøy for arbeidsmengde | **Help Me Decide (Experimental)** og **FSRS Simulator (Experimental)** | Ingen tilsvarende simulator for arbeidsmengde i v1 |

Nibomo bruker standardvurderingene Again, Hard, Good og Easy og lagrer FSRS-hukommelsestilstand for hvert kort. Planleggingsalgoritmene i backend, iOS og Android er implementert hver for seg, men vedlikeholdes slik at de gir samme resultater. Repetisjoner i nettappen bruker algoritmen i backend, så det finnes ingen fjerde kopi.

Disse grensene og standardverdiene er dokumentert i den offentlige [spesifikasjonen for FSRS-planlegging i Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Avveiningen er enkel: Nibomo tilbyr et praktisk FSRS-6-oppsett per arbeidsområde, mens Anki gir finere kontroll over hvilke kort innstillingene gjelder for, personlig tilpasning og simulering. Hvis disse funksjonene er avgjørende, passer Anki bedre.

## En tryggere fremgangsmåte for en innarbeidet samling

Hvis du allerede har måneder eller år med repetisjonshistorikk, bruk denne rekkefølgen:

1. **Bruk vurderingene riktig.** Again betyr at du ikke husket; Hard betyr at du husket, men strevde.
2. **Optimaliser det gjeldende oppsettet.** Tilpass modellen til din egen historikk fremfor å redigere eller kopiere vekter.
3. **Kjør tilstandssjekken ved behov.** Behandle sparsom eller inkonsekvent historikk som et dataproblem.
4. **Bruk Help Me Decide.** Velg et passende spenn for ønsket gjenkalling ut fra antallet repetisjoner eller tiden du kan sette av over tid.
5. **Kjør Simulator.** Sammenlign dagens oppsett, det foreslåtte målet og lavere tilførsel av nye kort.
6. **Endre én innstilling i oppsettet du bruker.** Juster gjenkalling eller tilførsel først, og følg så med på den faktiske køen.
7. **Hold trinnene korte.** Fjern lærings- og gjenlæringstrinn på én dag eller mer; bruk tomme felt bare som et eksperiment.
8. **Behold et romslig maksimalt intervall.** Forkort det bare når du har en bestemt tidshorisont eller et konkret krav.
9. **La omplanlegging være av.** Trenger du en umiddelbar omberegning, ta sikkerhetskopi først og planlegg for køen som følger.

Denne rekkefølgen gjør det mulig å reversere endringer i en innarbeidet repetisjonsplan så lenge som mulig. Den hindrer også at tre ulike problemer, modelltilpasning, hukommelsesmål og tilførsel av nytt stoff, blir blandet sammen til én innstillingsfloke.

## Vanlige spørsmål om de beste FSRS-innstillingene

### Er 90 % den beste verdien for ønsket gjenkalling i FSRS?

Det er det tryggeste generelle utgangspunktet fordi det er Ankis standard og unngår den bratteste delen av arbeidsmengdekurven ved høy gjenkalling. Den beste verdien for en bestemt kortstokk avhenger av konsekvensene av å glemme og arbeidsmengden du kan håndtere over tid. Se på **Help Me Decide (Experimental)** før du endrer den.

### Bør jeg sette ønsket gjenkalling til 95 %?

Bare etter å ha vurdert de ekstra repetisjonene eller minuttene. En ryddig kortstokk med viktig stoff kan forsvare 95 %; en stor samling brukt på hobbybasis kan bli unødvendig tung. Ikke slå på omplanlegging av eksisterende datoer samtidig, med mindre du bevisst ønsker en umiddelbar omberegning av dem.

### Hvor ofte bør jeg optimalisere FSRS-parametere?

Månedlig er allerede ofte nok, og veiledningen inne i Anki 26.08 sier at én gang med noen måneders mellomrom er tilstrekkelig. Optimaliser når du har samlet vesentlig ny historikk, ikke etter en daglig eller ukentlig rutine.

### Bør FSRS-læringstrinn være tomme?

Tomme lærings- eller gjenlæringstrinn lar Anki 26.08 overlate den tilsvarende korttidsplanleggingen til FSRS. Funksjonen er eksperimentell, og Again kan bli planlagt en dag eller mer frem i tid. Noen få trinn samme dag er fortsatt det forsiktige valget.

### Endrer FSRS-innstillinger repetisjonsdatoene til eksisterende Anki-kort?

Ikke som standard. Med **Reschedule cards on change** av påvirker nye innstillinger fremtidige repetisjoner uten å bygge om køen med en gang. Slår du det på, endres repetisjonsdatoene, og mange kort kan bli klare for repetisjon. Ta derfor sikkerhetskopi først.

### Er CMRR fortsatt en del av Anki?

Nei. Anki fjernet Compute Minimum Recommended Retention i versjon 25.07. I Anki 26.08 bruker du **Help Me Decide (Experimental)** og **FSRS Simulator (Experimental)** til å sammenligne gjenkalling med anslått arbeidsmengde.

### Bruker Nibomo de samme innstillingene som Anki?

Nibomo bruker FSRS-6 og lar deg stille inn ønsket gjenkalling, læringstrinn, gjenlæringstrinn, maksimalt intervall og tilfeldig intervallvariasjon (fuzz) per arbeidsområde. Det kopierer ikke hele innstillingsmodellen fra Anki: vektene er fastsatt i v1, endringer gjelder bare fremover, og det finnes ingen personlig parameteroptimalisering eller simulator for arbeidsmengde.

## Bestem arbeidsmengden før prosenten

Gode FSRS-innstillinger gjør at repetisjonskøen passer til en konkret studieplan. Begynn på 90 %, anslå arbeidet, styr tilførselen av nye kort, og øk ønsket gjenkalling bare når det er verdt de ekstra repetisjonene å huske mer. Hold trinnene korte, det maksimale intervallet romslig og vurderingsdataene ærlige.

Lukk deretter innstillingssiden. Algoritmen trenger jevnlige repetisjoner mer enn den trenger enda en kveld med finjustering.
