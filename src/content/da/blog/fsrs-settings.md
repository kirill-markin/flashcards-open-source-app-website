---
title: "De bedste FSRS-indstillinger til Anki i 2026: fastholdelse, indlæringstrin og arbejdsbyrde"
description: "Vælg sikre FSRS-indstillinger for ønsket fastholdelse, indlæringstrin, optimering, omplanlægning og arbejdsbyrde i Anki 26.08 med FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS-indstillinger"
  - "bedste FSRS-indstillinger"
  - "Anki FSRS-indstillinger"
  - "ønsket fastholdelse FSRS"
  - "FSRS-indlæringstrin"
  - "FSRS-simulator"
  - "optimer FSRS-parametre"
  - "FSRS-6"
---

At hæve Ankis ønskede fastholdelse fra 90 % til 95 % lyder som en lille ændring. Det giver ikke bare fem procent mere arbejde. FSRS må forkorte intervallerne, når målet stiger, og en samling, du har arbejdet med længe, kan få en langt tungere repetitionskø. Slår du samtidig **Reschedule cards on change** til, kan en del af arbejdet komme med det samme.

De bedste FSRS-indstillinger er derfor ikke en parameterstreng, du kan kopiere. De er en række beslutninger: fastlæg en arbejdsbyrde, du kan holde til, vælg et mål for genkaldelse inden for den ramme, tilpas modellen til din egen historik, og lad de eksisterende repetitionsdatoer være, medmindre du bevidst vil beregne dem på ny.

Betegnelserne og adfærden nedenfor svarer til [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) og indstillingerne for FSRS-6. Har du først brug for at forstå modellen, så læs [Hvad er FSRS?](/blog/what-is-fsrs/). Hvis du stadig er ved at vælge en repetitionsalgoritme, kan du begynde med [FSRS vs. SM-2](/blog/fsrs-vs-sm-2/).

> **Om min tilknytning:** Jeg er Kirill Markin og udvikler [Nibomo](/da/features/). Anki tilbyder personlig tilpasning af parametre og eksperimentelle simulatorer for arbejdsbyrden, som Nibomo ikke tilbyder i øjeblikket. Sammenligningen sidst i artiklen gør disse forskelle tydelige.

**Fakta kontrolleret:** 8. september 2026.

![En sluseoperatør afprøver vandstrømmen på en skalamodel, før den rigtige sluse ændres](/blog/fsrs-settings-v2.png)

## Det korte svar: begynd her

For de fleste Anki-brugere er følgende indstillinger et forsigtigt udgangspunkt. De passer ikke nødvendigvis til alle:

| Indstilling eller vane | Et sikkert udgangspunkt | Hvorfor |
| --- | --- | --- |
| Ønsket fastholdelse | `0.90` | Det er Ankis standard og giver en balance mellem, hvor meget du husker, og hvor meget du skal repetere. |
| FSRS-parametre | Brug **Optimize Current Preset**; indsæt eller rediger ikke vægte manuelt | Optimeringen tilpasser modellen til din repetitionshistorik. |
| Hvor ofte du optimerer | Højst månedligt; med nogle måneders mellemrum er som regel nok | Anki anbefaler ikke hyppig optimering. |
| Indlæringstrin | Behold få trin, som afsluttes samme dag | Lange kæder af trin forsinker den modelbaserede planlægning. |
| Genindlæringstrin | Hold dem på et minimum og under én dag | Den samme grænse gælder, når du ikke kan huske et repetitionskort. |
| Reschedule cards on change | Slået fra | Nye indstillinger kan træde i kraft ved fremtidige repetitioner uden at omberegne dagens kø. |
| Maksimalt interval | Behold standarden på 100 år | Et lavere loft tvinger velkendte kort tilbage oftere. |
| Nye kort pr. dag | Vælg ud fra en arbejdsbyrde, du kan holde til | Hvert nyt kort giver indlæring nu og repetition senere. |
| Again kontra Hard | Again betyder, at du ikke huskede svaret; Hard betyder, at du huskede det med besvær | Forkerte vurderinger giver modellen en forkert historik. |

Hvis repetitionerne er overkommelige, og dine indstillinger allerede ligger tæt på dette, er der måske ikke noget at rette. At vedligeholde indstillinger er ikke det samme som at studere.

## Hold tre beslutninger adskilt

Ønsket fastholdelse, FSRS-parametre og daglig arbejdsbyrde bliver ofte blandet sammen. De styrer forskellige ting:

- **Ønsket fastholdelse** er dit mål for, hvor meget du vil kunne huske. Du vælger det ud fra dine mål og den tid, du har til at studere.
- **FSRS-parametre** tilpasser hukommelsesmodellen til repetitionshistorikken. Ankis optimering beregner dem.
- **Grænser for nye kort og repetitioner** styrer, hvor meget materiale der kommer ind i systemet, og hvor mange forfaldne repetitioner Anki kan vise hver dag.

Denne opdeling gør det langt lettere at finde årsagen til problemer. En stor kø betyder ikke automatisk, at dine parametre er forkerte. En kortbunke med vigtigt stof behøver ikke automatisk sit eget parametersæt. Og en lavere ønsket fastholdelse løser ikke problemet, hvis du fra starten tilføjede flere kort, end du kunne holde til.

## Vælg ønsket fastholdelse ud fra arbejdsbyrden, ikke ambitionen

Ønsket fastholdelse fortæller FSRS, hvor stor sandsynligheden skal være for, at du husker et repetitionskort, når det skal repeteres. Ved `0.90` planlægger FSRS efter en forventet sandsynlighed på 90 % for at huske svaret. Det er et mål for modellen, ikke en garanti for præcis 90 % rigtige svar i hver studiesession eller til hver eksamen.

Afvejningen virker i begge retninger:

- Hæver du ønsket fastholdelse, bliver intervallerne kortere, og antallet af repetitioner stiger.
- Sænker du den, bliver intervallerne længere, og du glemmer flere svar.
- Sætter du den for lavt, kan den ekstra genindlæring af glemte kort tage noget af den tid, du håbede at spare.

Ankis standard er 90 %. [Vejledningen om ønsket fastholdelse](https://docs.ankiweb.net/deck-options.html#desired-retention) advarer om, at arbejdsbyrden stiger hurtigt, når målet nærmer sig 100 %, og anbefaler at holde sig under 97 %. Den officielle [forklaring af optimal fastholdelse](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) dækker den anden ende af kurven: meget lav fastholdelse kan også være ineffektiv, fordi glemte kort kræver mere arbejde.

Begynd med `0.90`, og ændr først værdien, når du har undersøgt arbejdsbyrden. Et højere mål kan give mening for stof, hvor det har en reel omkostning at glemme. Et lavere mål kan give mening, hvis repetitionerne fortrænger mere værdifuldt studiearbejde. Ingen af delene løser problemer med uklare kort, uærlige vurderinger eller for mange nye kort.

### Fastholdelse for en kortbunke og parametre for et indstillingssæt gælder på forskellige niveauer

I Anki 26.08 kan **Desired retention** indstilles på to niveauer: **Shared Preset** og **This deck**. Du kan altså lade beslægtede kortbunker dele ét indstillingssæt med fælles parametre, mens en bestemt kortbunke får sit eget mål for fastholdelse.

Brug denne særskilte indstilling, når konsekvensen af at glemme er forskellig. En kortbunke til en autorisationseksamen kan berettige et højere mål end en referencebunke med lav prioritet, selvom begge bruger den samme tilpassede model.

FSRS-parametrene bliver ikke specifikke for kortbunken, når du vælger **This deck**. Som standard tilpasser Anki parametrene ud fra repetitionshistorikken for alle kortbunker, der bruger det aktuelle indstillingssæt. Hvis der er stor forskel på, hvor svære du oplever forskellige grupper af kortbunker, kan du bruge separate indstillingssæt til at tilpasse modellen til hver gruppe.

## Brug Help Me Decide og Simulator til forskellige spørgsmål

Anki 26.08 har to separate eksperimentelle værktøjer:

- **Help Me Decide (Experimental)** viser en personlig kurve over fastholdelse og arbejdsbyrde. Brug den til at spørge: »Hvilket mål for fastholdelse passer til det antal repetitioner eller minutter, jeg kan holde til?«
- **FSRS Simulator (Experimental)** anslår, hvordan én konfiguration kan udvikle sig over tid. Brug den til at sammenligne ændringer i fastholdelse, tilførsel af nye kort, repetitionsgrænser og maksimalt interval.

[Dokumentationen til FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) angiver disse centrale input:

- antal dage, der skal simuleres
- antal ekstra nye kort, der skal simuleres
- nye kort pr. dag
- maksimalt antal repetitioner pr. dag
- maksimalt interval
- ønsket fastholdelse og indstillingssættets FSRS-parametre

Simuleringen bruger også den faktiske hukommelsestilstand for hvert kort, der hører til indstillingssættet. Det gør den mere nyttig for en veletableret samling end at gange dagens antal forfaldne kort med en generel procentsats.

Kør tre scenarier, før du ændrer de aktive indstillinger:

1. Din nuværende fastholdelse og tilførsel af nye kort.
2. Det mål for fastholdelse, du overvejer.
3. Det samme mål med færre nye kort pr. dag.

Den tredje kørsel afprøver et almindeligt alternativ: behold målet for genkaldelse, og sænk tilførslen af nyt materiale. Hvis prognosen så bliver overkommelig, behøver du ikke acceptere at glemme mere bare for at få køen ned. Læs mere om tilførsel af kort i [Hvor mange nye flashcards om dagen?](/blog/how-many-new-flashcards-per-day/).

Begge værktøjer giver estimater. Dage, du springer over, redigerede kort, nyt materiale og ændrede vurderingsvaner kan få den faktiske arbejdsbyrde til at afvige fra grafen. Brug sammenligningen til at vælge retning, ikke til at love en bestemt kø flere måneder frem.

Ældre vejledninger nævner måske i stedet **Compute Minimum Recommended Retention**, forkortet CMRR. Anki fjernede funktionen i version 25.07. Den hører ikke til den nuværende fremgangsmåde til at vælge ønsket fastholdelse.

## Optimer FSRS-parametrene ud fra din egen historik

Ønsket fastholdelse udtrykker dit mål. FSRS-parametrene beskriver, hvordan modellen passer til dine repetitioner.

I Anki 26.08 bruger du **Optimize Current Preset** til at tilpasse parametrene for det aktive indstillingssæt. Som standard medtager Anki repetitionshistorikken fra alle kortbunker med det indstillingssæt. Du kan justere søgningen, hvis du vil afgrænse datagrundlaget. **Optimize All Presets** opdaterer alle indstillingssæt på én gang.

Indtast ikke vægte manuelt, og kopier dem ikke fra Reddit, en video eller en andens kortbunke. Deres kort, repetitionstidspunkter og vurderingsvaner er ikke din historik. En pæn række [FSRS-6-vægte](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) er ikke en studiestrategi, du kan overføre til dig selv.

Optimer først igen, når der er kommet en væsentlig mængde ny repetitionshistorik til. Ankis manual siger, at én gang om måneden er nok, mens vejledningen i selve Anki 26.08 siger, at en gang med nogle måneders mellemrum er nok. Den praktiske konklusion er den samme: der er ingen grund til at optimere hver uge, og slet ikke efter hver session.

### Brug sundhedstjekket med det aktuelle indstillingssæt

Slå **Check health when optimizing (slow)** til, når du vil have Anki til at vurdere, hvor godt FSRS kan tilpasse sig historikken for det aktuelle indstillingssæt. Tjekket køres med **Optimize Current Preset**, ikke med **Optimize All Presets**.

Hvis resultatet er dårligt, så undersøg dataene, før du ændrer vægtene. [Ankis vejledning om FSRS-parametre](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nævner almindelige årsager: færre end nogle få hundrede repetitioner, brug af Hard efter et forkert svar og manglende brug af Again, når svaret ikke kan huskes. Hvis du kun har lidt brugbar historik, så behold standardværdierne, og optimer senere i stedet for at låne en anden brugers parametre.

## Again betyder glemt; Hard er et korrekt svar

Denne vane betyder lige så meget som indstillingerne.

Brug **Again**, når du ikke kunne give det krævede svar, eller når du svarede forkert. Brug kun **Hard**, når du huskede svaret korrekt, men med stor anstrengelse eller tøven. Good og Easy tæller også som korrekte svar.

Trykker du Hard for at undgå det korte Again-interval, registrerer du et korrekt svar, selvom du ikke kunne huske det. FSRS lærer så af den forkerte hændelse. Vælg den knap, der beskriver, hvor godt du huskede svaret. Lad ikke dit foretrukne interval blandt dem, der står over knapperne, afgøre valget.

Tvetydige kort gør ærlige vurderinger sværere. Hvis et spørgsmål beder om fem fakta, og du husker fire, begyndte planlægningsproblemet allerede i editoren. Del kortet op, eller skriv det om. Hvis et kort bliver ved med at drille trods gentagne repetitioner, kan du læse [Sådan retter du flashcards, du bliver ved med at glemme](/blog/how-to-fix-leech-flashcards/).

## Hold FSRS-indlæringstrin korte, eller lad dem bevidst være tomme

Indlærings- og genindlæringstrin styrer de korte intervaller, før den almindelige langsigtede planlægning tager over. De er ikke endnu et mål for fastholdelse.

Ankis FSRS-vejledning anbefaler to begrænsninger:

- hvert trin skal være kortere end én dag og kunne gennemføres samme dag
- antallet af gentagelser samme dag skal være lavt

Lange kæder som `1m 10m 1d 3d` fører en gammel SM-2-vane videre ind i FSRS. Trin på én dag eller mere forsinker den modelbaserede planlægning og kan give forvirrende knaptekster, hvor Hard blandt andet kan vise et længere interval end Good.

En kort sekvens som `1m 10m`, med `10m` som genindlæringstrin, er et forsigtigt udgangspunkt, hvis det passer til dine studiesessioner. Flere gentagelser samme dag er ikke automatisk bedre.

Anki 26.08 tillader også, at du lader indlærings- eller genindlæringsfeltet være tomt. Når FSRS er slået til, overlader et tomt felt den pågældende kortsigtede planlægning til FSRS. Det er eksperimentelt, og et Again-interval kan være én dag eller længere. Behold korte manuelle trin, hvis du har brug for en forudsigelig gentagelse samme dag. Ryd kun et felt, når du bevidst accepterer, at FSRS vælger tidspunktet.

## Lad Reschedule cards on change være slået fra for en gradvis overgang

Når indstillingen **Reschedule cards on change** er slået fra, hvilket er standarden, ændres eksisterende repetitionsdatoer ikke straks, når du aktiverer FSRS eller ændrer ønsket fastholdelse eller parametre. Den nye konfiguration anvendes, efterhånden som kortene repeteres fremover, så køen ændrer sig gradvist.

Hvis du gemmer en af disse FSRS-ændringer med indstillingen slået til, beregnes repetitionsdatoerne straks på ny. Afhængigt af det nye mål og kortenes tilstand kan mange kort skulle repeteres på én gang. Anki tilføjer også poster i repetitionshistorikken for omplanlagte kort, hvilket øger samlingens størrelse.

Denne indstilling er kun nyttig, når du faktisk vil omberegne den eksisterende plan. For en samling, du har arbejdet med længe:

1. Lav en ny sikkerhedskopi, og kontroller, at du ved, hvordan du fortryder ændringen eller gendanner samlingen fra kopien.
2. Kør Simulator med de foreslåede indstillinger.
3. Vælg én ændring i konfigurationen; kombiner ikke flere eksperimenter.
4. Når du gemmer, skal du kun slå omplanlægning til, hvis du ønsker at ændre repetitionsdatoerne straks og kan håndtere resultatet.

Anki anbefaler udtrykkeligt en sikkerhedskopi, når du skifter fra SM-2 med omplanlægning. Den mere generelle [guide til sikkerhedskopiering af flashcards](/blog/how-to-back-up-flashcards/) forklarer, hvorfor muligheden for at gendanne er lige så vigtig som selve sikkerhedskopien.

## Giv det maksimale interval god plads

Ankis maksimale interval er som standard 100 år. Det ser mærkeligt ud, indtil man husker, at det er et loft, ikke et løfte om, at hvert kort, du har lært godt forsvinder i et århundrede.

Et lavere loft tvinger velkendte kort tilbage tidligere og øger arbejdsbyrden. Ved loftet kan Hard, Good og Easy alle vise det samme interval, fordi ingen af dem må overskride maksimum.

Et kortere maksimalt interval kan give mening, når en eksamen sætter en konkret tidshorisont, stoffet ofte ændrer sig, eller faglige regler kræver gentagen gennemgang, uanset hvor godt modellen forventer, at du husker stoffet. Afstem loftet med kalenderen og Simulator i stedet for at vælge et lavt tal af bekymring. [Sådan læser du til eksamen med FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) dækker dette mere afgrænsede tilfælde.

Til almindelig langsigtet læring kan du roligt lade loftet være højt. Ønsket fastholdelse styrer allerede, hvornår den forventede sandsynlighed for genkaldelse skal udløse en repetition.

## Tilførslen af nye kort er en del af arbejdsbyrden

FSRS kan fordele repetitioner; det kan ikke gøre ubegrænset tilførsel overkommelig. Hvert nyt kort giver indlæringsarbejde nu og repetitionsarbejde senere.

Når køen bliver for tung, så undersøg disse ting, før du sænker ønsket fastholdelse:

- nye kort pr. dag
- store importer eller portioner af genererede kort
- et maksimalt antal daglige repetitioner, der bliver ved med at skjule kort, du burde repetere
- problemkort og uklare kort, som kræver gentagne forsøg
- dage, hvor du ikke repeterede

Brug **Additional new cards to simulate**, når du ved, at en kortbunke vil vokse. En prognose, der kun bygger på dagens samling, viser ikke arbejdsbyrden efter en stor import.

Hvis resultatet er for højt, så tilføj færre kort, og simuler igen. Det bevarer målet for genkaldelse uden at bede algoritmen acceptere, at du glemmer mere.

## Anki og Nibomo giver adgang til forskellige FSRS-indstillinger

Begge produkter bruger FSRS-6, men Ankis FSRS-indstillinger kan ikke overføres direkte til Nibomo.

| Mulighed | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Ønsket fastholdelse | **Shared Preset** eller **This deck** | Kan indstilles pr. arbejdsområde; standard `0.90` |
| FSRS-parametre | **Optimize Current Preset** eller **Optimize All Presets** ud fra repetitionshistorikken | De officielle FSRS-6-standardvægte er fastlagt og kan ikke ændres af brugeren i v1 |
| Indlæringstrin | Kan indstilles; FSRS-planlægning ved tomt felt er eksperimentel | Kan indstilles pr. arbejdsområde; standard `1m 10m` |
| Genindlæringstrin | Kan indstilles; FSRS-planlægning ved tomt felt er eksperimentel | Kan indstilles pr. arbejdsområde; standard `10m` |
| Maksimalt interval | Standard 100 år | Standard 36.500 dage, også 100 år |
| Ændring af indstillinger | Fremtidige repetitioner som standard; valgfri omplanlægning af eksisterende kort | Kun fremtidige repetitioner; eksisterende repetitionsdatoer beregnes ikke på ny |
| Værktøjer til arbejdsbyrde | **Help Me Decide (Experimental)** og **FSRS Simulator (Experimental)** | Ingen tilsvarende simulator for arbejdsbyrde i v1 |

Nibomo bruger standardvurderingerne Again, Hard, Good og Easy og gemmer FSRS-hukommelsestilstanden for hvert kort. Planlægningsalgoritmerne i backend, iOS og Android er implementeret hver for sig, men holdes i overensstemmelse, så de fungerer ens. Repetition i webappen genbruger backendens algoritme i stedet for at tilføje en fjerde kopi.

Disse afgrænsninger og standardværdier er dokumenteret i den offentlige [specifikation for Nibomos FSRS-planlægning](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Afvejningen er enkel: Nibomo giver en praktisk FSRS-6-opsætning pr. arbejdsområde, mens Anki giver mere detaljeret kontrol over, hvilke kortbunker indstillingerne gælder for, samt personlig tilpasning og simulering. Hvis disse muligheder er afgørende for dig, passer Anki bedre.

## En mere sikker fremgangsmåde for en veletableret samling

Hvis du allerede har måneder eller år med repetitionshistorik, så brug denne rækkefølge:

1. **Få styr på vurderingerne.** Again er et mislykket forsøg; Hard er et korrekt svar med besvær.
2. **Optimer det aktuelle indstillingssæt.** Tilpas til din egen historik i stedet for at redigere eller kopiere vægte.
3. **Kør sundhedstjekket ved behov.** Betragt sparsom eller inkonsekvent historik som et dataproblem.
4. **Brug Help Me Decide.** Vælg et interval for fastholdelse ud fra det antal repetitioner eller minutter, du kan holde til.
5. **Kør Simulator.** Sammenlign de nuværende indstillinger, det foreslåede mål og en lavere tilførsel af nye kort.
6. **Ændr én aktiv indstilling.** Juster først fastholdelse eller tilførsel, og hold derefter øje med den faktiske kø.
7. **Hold trinene korte.** Fjern indlærings- og genindlæringskæder med døgnlange trin; brug kun tomme felter som et eksperiment.
8. **Lad det maksimale interval være højt.** Forkort det kun for en fastlagt tidshorisont eller et konkret krav.
9. **Lad omplanlægning være slået fra.** Har du brug for at omberegne planen straks, så lav først en sikkerhedskopi, og planlæg efter den kø, der følger.

Med denne rækkefølge bevarer du så længe som muligt muligheden for at fortryde ændringer i en veletableret repetitionsplan. Den holder også tre forskellige problemer adskilt: modellens tilpasning, målet for genkaldelse og tilførslen af nyt materiale. Ellers ender de let som ét stort indstillingsproblem.

## Ofte stillede spørgsmål om de bedste FSRS-indstillinger

### Er 90 % den bedste ønskede fastholdelse for FSRS?

Det er det sikreste generelle udgangspunkt, fordi det er Ankis standard og undgår den stejleste del af kurven, hvor høj fastholdelse giver stor arbejdsbyrde. Den bedste værdi for en bestemt kortbunke afhænger af omkostningen ved at glemme og den arbejdsbyrde, du kan holde til. Se **Help Me Decide (Experimental)**, før du ændrer den.

### Bør jeg sætte ønsket fastholdelse til 95 %?

Kun efter at have undersøgt, hvor mange ekstra repetitioner eller minutter det vil kræve. En velformuleret kortbunke med vigtigt stof kan berettige 95 %; en stor samling til mere uforpligtende læring kan blive unødigt tung. Slå ikke samtidig omplanlægning af eksisterende kort til, medmindre du bevidst vil omberegne repetitionsdatoerne straks.

### Hvor ofte bør jeg optimere FSRS-parametre?

Månedligt er allerede hyppigt nok, og vejledningen i Anki 26.08 siger, at en gang med nogle måneders mellemrum er tilstrækkeligt. Optimer, når der er kommet en væsentlig mængde ny historik til, ikke efter en daglig eller ugentlig plan.

### Bør FSRS-indlæringstrin være tomme?

Tomme indlærings- eller genindlæringstrin lader Anki 26.08 overlade den tilsvarende kortsigtede planlægning til FSRS. Funktionen er eksperimentel, og Again kan blive planlagt til én dag eller mere ude i fremtiden. Få trin, der afsluttes samme dag, er stadig det forsigtige valg.

### Omplanlægger ændrede FSRS-indstillinger eksisterende Anki-kort?

Ikke som standard. Når **Reschedule cards on change** er slået fra, påvirker nye indstillinger fremtidige repetitioner uden straks at omberegne køen. Slår du den til, ændres repetitionsdatoerne, og mange kort kan pludselig kræve repetition. Lav derfor først en sikkerhedskopi.

### Er CMRR stadig en del af Anki?

Nej. Anki fjernede Compute Minimum Recommended Retention i version 25.07. I Anki 26.08 bruger du **Help Me Decide (Experimental)** og **FSRS Simulator (Experimental)** til at sammenligne fastholdelse med den anslåede arbejdsbyrde.

### Bruger Nibomo de samme indstillinger som Anki?

Nibomo bruger FSRS-6 og lader dig indstille ønsket fastholdelse, indlæringstrin, genindlæringstrin, maksimalt interval og intervalvariation (fuzz) pr. arbejdsområde. Det kopierer ikke hele Ankis indstillingsmodel: vægtene er fastlagt i v1, ændringer gælder kun fremover, og der er hverken personlig parameteroptimering eller en simulator for arbejdsbyrden.

## Fastlæg arbejdsbyrden før procentsatsen

Gode FSRS-indstillinger får repetitionskøen til at understøtte en konkret studieplan. Begynd ved 90 %, anslå arbejdet, styr tilførslen af nye kort, og hæv kun fastholdelsen, når det er de ekstra repetitioner værd at huske mere. Hold trinene korte, det maksimale interval højt og vurderingerne ærlige.

Luk så indstillingsvinduet. Algoritmen har mere brug for regelmæssige repetitioner end for endnu en aften med finjustering.
