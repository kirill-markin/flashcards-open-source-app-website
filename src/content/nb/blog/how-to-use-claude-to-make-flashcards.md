---
title: "Slik bruker du Claude til å lage flashcards i 2026: prosjekter, filopplasting og repetisjon med FSRS"
description: "En praktisk arbeidsflyt for flashcards med Claude i 2026: bruk prosjekter og filopplasting til å lage mindre, tydeligere kort, og flytt de beste til Nibomo for repetisjon med FSRS."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "slik bruker du Claude til å lage flashcards"
  - "Claude flashcards"
  - "fra Claude til flashcards"
  - "flashcards med Claude Projects"
  - "flashcards fra filopplasting i Claude"
  - "fra PDF til flashcards med Claude"
  - "lag flashcards med Claude"
  - "FSRS flashcards"
---

> [Koble til Claude](https://claude.ai/directory/nibomo) · [Dokumentasjon](/nb/docs/mcp-connector/)

I går la jeg inn en forelesningsdisposisjon og en rotete PDF med lesestoff i Claude og ba om flashcards. Noen var gode. Resten hadde det velkjente KI-preget: teknisk korrekte, unaturlig velformulerte og mye vanskeligere å repetere enn de så ut ved første gjennomlesning.

Det er det egentlige problemet bak **hvordan du bruker Claude til å lage flashcards**.

Claude er flink til å gjøre kildemateriale om til kortutkast. Det betyr ikke at Claude automatisk er flink til å avgjøre hva som fortjener repetisjon over tid, hvor lite et kort bør være, eller om et fint formulert svar fortsatt vil være enkelt å vurdere neste torsdag.

Arbeidsflyten jeg faktisk ville stolt på i 2026, er derfor mer avgrenset enn mange først ønsker seg: hold ett tema i ett Claude-prosjekt, last bare opp materialet for den aktuelle runden, be om enkle kortutkast med forside og bakside, slett med hard hånd, og flytt så de gjenværende kortene til en ordentlig arbeidsflyt for flashcards med FSRS.

![Et skrivebord i varmt lys med prosjektutkast i Claude-stil, kort for filopplasting og utvalgte FSRS-flashcards](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude er endelig tilrettelagt for denne arbeidsflyten

Dette søket er mer relevant nå fordi Claude er bedre tilpasset studier enn før.

Anthropic lanserte **Claude for Education** den **2. april 2025**, med blant annet **Learning Mode** i Projects. Den oppdaterte hjelpedokumentasjonen er like relevant. Anthropics hjelpeside om Projects, datert **16. mars 2026**, sier at prosjekter er tilgjengelige for alle brukere, og at gratiskontoer kan opprette opptil fem. Anthropics hjelpeside om filopplasting, datert **22. april 2026**, sier at Claude støtter filtyper som passer til studier, blant annet **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON og XLSX**.

Det gir **flashcards med Claude** et langt ryddigere utgangspunkt enn den gamle rutinen med å «dumpe alt i én chat og håpe på det beste».

Anthropics rapport om utdanning viser også at dette allerede er vanlig. Ifølge rapporten brukte studentene først og fremst Claude til å lage og forbedre undervisnings- og læringsinnhold i **39,3 %** av de analyserte utdanningsrelaterte samtalene. Det interessante spørsmålet er derfor ikke lenger om folk bruker Claude til studiemateriale. Det gjør de åpenbart. Det bedre spørsmålet er hvordan du gjør materialet om til kort som er verdt å repetere senere.

## Start med ett Claude-prosjekt per emne, eksamen eller tema

Dette er den første vanen jeg ville beholdt, fordi den gjør nesten alt videre enklere.

Claudes oppdaterte dokumentasjon for Projects beskriver prosjekter som avgrensede arbeidsområder med egen chathistorikk og eget kunnskapsgrunnlag. Det er akkurat det du trenger når du lager kortutkast.

Ikke lag ett enormt Claude-arbeidsområde som heter `skole`.

Lag ett prosjekt for:

- ett emne
- én sertifiseringseksamen
- én del du prøver å bli ferdig med denne uken
- én gruppe temaer som faktisk hører sammen

Det gir ryddigere utkast, fordi Claude ikke prøver å blande materiale fra fire ulike fag i ett svar. Oppryddingen blir også mindre irriterende, fordi du vet hva hver runde skulle dekke.

Hvis du bruker Claude mer generelt som veileder, og ikke bare til å lage kortutkast, er [Slik bruker du Claude til studier i 2026](/nb/blog/how-to-use-claude-for-studying/) en bedre artikkel å lese i tillegg. Denne artikkelen er mer avgrenset. Den handler om å gå fra Claude-svar til kort du fortsatt synes holder mål når du repeterer.

## Sett prosjektinstruksjonene én gang for å få bedre utkast hver gang

Dette er en av de nyttigste fordelene ved nettopp Claude.

Anthropics oppdaterte veiledning for Projects sier at du kan angi **prosjektinstruksjoner**, slik at Claude følger de samme kravene på tvers av chatter i prosjektet. For flashcards sparer det deg for å gjenta de samme reglene for format og sletting hver gang du laster opp en ny del.

Jeg ville holdt prosjektinstruksjonen kort og nøktern:

```text
Når jeg ber om flashcards, bruk et enkelt format med forside og bakside. Ett begrep, faktum, skille eller prosesstrinn per kort. Forsiden skal være konkret og mulig å svare på. Hold baksiden kort. Utelat duplikater, vage spørsmål og alt som krever kontekst fra originalkilden som ikke er med på kortet.
```

Legg deretter instruksjonene for den konkrete oppgaven i selve chatten når du laster opp en ny samling materiale.

Denne fordelingen fungerer godt fordi prosjektinstruksjonen setter grunnreglene, mens chatinstruksjonen gjelder forelesningen, kapittelet eller oppgavesettet du arbeider med.

## Last opp mindre porsjoner kildemateriale enn du tror du trenger

Det er her de fleste arbeidsflyter **fra Claude til flashcards** begynner å bli upresise.

Folk ser muligheten for filopplasting og tar det som klarsignal til å dumpe en hel samling kursmateriale i én forespørsel. Vanligvis gir det dårligere kort, ikke bedre.

Anthropics egen dokumentasjon for opplasting gir et nøkternt råd for store dokumenter: del dem opp i mindre deler. Jeg ville gjort akkurat det.

Bedre kildemateriale er:

- notater fra én forelesning
- én del av en lesetekst
- ett sett med rettede øvingsoppgaver
- ett avsnitt i et kapittel
- én ryddig del av en studieguide

Dårligere kildemateriale er:

- hele læreboken
- tolv forelesninger på én gang
- en mappe fra et helt semester som du ikke har ryddet i
- en enorm samling transkripsjoner som du egentlig ikke vil repetere kort for kort

Små porsjoner tvinger frem et ærligere spørsmål: Hva fra denne delen er verdt å kunne hente frem fra hukommelsen senere uten å åpne kilden igjen?

Det spørsmålet holder kortstokken mindre og bedre.

## Claude er flink til å lage utkast fra kilder, ikke til å velge hva som betyr noe

Jeg tror dette er den nyttigste måten å tenke på det på.

Claude kan:

- komprimere en del av en lesetekst
- forklare et begrep tydeligere
- skille ut åpenbare undertemaer
- gjøre notater om til utkast til spørsmål-og-svar-kort
- finne begreper og definisjoner som går igjen

Claude vet ikke automatisk:

- hvilke fakta som allerede er så åpenbare for deg at du kan droppe dem
- hvilke skiller du stadig blander sammen
- hvilket svar som er for langt til at du raskt kan vurdere ditt eget svar
- hvilket kort som bare gir mening fordi du fortsatt husker avsnittet det kom fra

Derfor fungerer det best å **lage flashcards med Claude** når Claude lager utkastene og du redigerer.

Hvis du ber Claude avgjøre alt, får du vanligvis en kortstokk som er for snill med materialet. Den bevarer for mye, forklarer for mye og beholder stoff som virket nyttig der og da, men som ikke fortjener fremtidige repetisjoner.

## Bruk en enkel instruksjon og la kravene gjøre jobben

Du trenger ingen teatralsk instruksjon.

Jeg ville brukt noe i denne retningen i selve chatten:

```text
Gjør denne kilden om til enkle flashcards med forside og bakside.

Regler:
- Ett faktum, skille eller prosesstrinn per kort
- Forsiden må være konkret og mulig å svare på
- Baksiden må være kort og direkte
- Ikke finn på fakta
- Utelat duplikater og vage spørsmål
- Utelat kort som krever kontekst fra originaldokumentet som ikke er med på kortet
- Slett med hard hånd kort som ikke er verdt å repetere over tid
```

Hvis kilden er et rettet oppgavesett, legger du til én setning:

```text
Prioriter feil, misforståelser og skiller jeg sannsynligvis vil bomme på igjen.
```

Det holder.

De nyttige kravene er enkle:

- én ting å huske per kort
- korte svar
- ingen oppdiktede fakta
- ingen brede oppsummeringsspørsmål på forsiden
- ingen kort som fortsatt krever at hele kilden ligger åpen ved siden av

Claude reagerer vanligvis godt på tydelige rammer. Problemet er sjelden mangel på magiske instruksjoner. Problemet er at folk ber om for mye på én gang.

## De beste kortene fra Claude kommer som regel fra tre typer materiale

Jeg stoler mest på Claude når kilden allerede er nær ved å egne seg til kort, men fortsatt trenger opprydding.

De beste utgangspunktene er:

- forelesningsnotater som må komprimeres
- lesetekster der viktige punkter må trekkes ut
- rettede oppgaver som avdekker én konkret feil

Det mønsteret er viktig fordi Claude ikke finner opp et studiesystem fra bunnen av. Claude hjelper deg å gjøre råmateriale om til mer avgrensede ting å hente frem fra hukommelsen.

Hvis du hovedsakelig bruker notater som utgangspunkt, går [Slik gjør du notater om til flashcards i 2026](/blog/turn-notes-into-flashcards/) (på engelsk) grundigere inn på oppryddingen. For filer bør du hente ut en liten, relevant del og kontrollere tekst, ligninger og betegnelser før du godtar kortutkastene.

## Slett kortene som fortsatt høres ut som Claude

Det er her det virkelige kvalitetsløftet skjer.

Kort laget av Claude svikter ofte på gjenkjennelige måter:

- forsiden høres elegant ut, men spørsmålet lar seg ikke besvare ordentlig
- baksiden inneholder tre fakta fordi avsnittet inneholdt tre fakta
- kortet beholder vage formuleringer som «sentrale hensyn» eller «viktige faktorer»
- formuleringen er tydelig nok til å imponere, men irriterende å repetere

Jeg ville fjernet dem med en gang.

Forsiden på et flashcard skal ikke høres ut som åpningssetningen i en studieguide. Den skal høres ut som et spørsmål du enten kan svare på eller bomme på.

Behold kortet bare hvis:

- du kan svare uten å åpne kilden igjen
- baksiden er kort nok til at du raskt kan vurdere svaret ditt
- det tester ett begrep, ikke en hel gruppe
- du fortsatt bryr deg om å huske det om en uke

Hvis ikke, slett det.

Det er hovedforskjellen mellom en Claude-økt som føles produktiv, og en kortstokk som forblir nyttig.

## Ett svakt Claude-kort og versjonen jeg faktisk ville beholdt

Si at Claude leser en tekst om glykolyse og gir deg dette:

- Forside: Hva er de viktigste kjennetegnene og resultatene ved glykolyse?
  Bakside: Glykolyse er en metabolsk reaksjonsvei som foregår i cytoplasmaet, omdanner glukose til pyruvat, produserer ATP og NADH og ikke krever oksygen.

Det er ikke ett kort. Det er et avsnitt med navneskilt.

Den bedre versjonen er som regel flere mindre kort:

- Forside: Hvor foregår glykolyse?
  Bakside: I cytoplasmaet.
- Forside: Hvilket molekyl bryter glykolyse ned?
  Bakside: Glukose.
- Forside: Krever glykolyse oksygen?
  Bakside: Nei.

Kanskje beholder du ett kort til om sluttproduktene hvis det skillet er viktig i emnet ditt.

Poenget er ikke å bevare Claudes velformulerte svar. Det er å bevare de konkrete tingene du skal hente frem fra hukommelsen, som ligger gjemt i svaret.

## Ikke forveksle Claudes minne og kontekst med intervallrepetisjon

Claude har nå bedre verktøy for kontekst enn før. Prosjekter hjelper. Opplastede filer hjelper. Prosjektinstruksjoner hjelper. Alt dette er nyttig.

Det er fortsatt ikke det samme som et repetisjonssystem.

Claude kan bevare kontekst om et tema. Verktøyet kan huske forløpet i økten bedre enn eldre chatverktøy gjorde. Ingenting av dette erstatter den kjedelige delen som faktisk betyr noe senere: å se riktig kort igjen til riktig tid.

Derfor bør **flashcards fra Claude Projects** ende opp i en ordentlig flashcard-app fremfor å bli værende i selve prosjektet.

Claude kan bevare kontekst.

FSRS håndterer glemsel.

Det er to forskjellige oppgaver.

Hvis du vil vite mer om planleggingen av repetisjoner, er [FSRS mot SM-2 i 2026](/blog/fsrs-vs-sm-2/) (på engelsk) den naturlige neste artikkelen.

## Lagre godkjente kort i Nibomo

Åpne [Nibomo i Claude-katalogen](https://claude.ai/directory/nibomo), opprett tilkoblingen, logg inn på Nibomo-kontoen din og gi tilgang. Nibomo er oppført som en Community-tilkobling.

Be Claude bruke Nibomos MCP-tilkobling til å lagre bare kortene du har kontrollert og godkjent. Kontroller hvilket arbeidsområde kortene skal lagres i, og se gjennom forespørselen om å lagre dem. Godkjenn forespørselen, og kontroller deretter de lagrede kortene i Nibomo før du repeterer dem med FSRS. Du kan også kopiere dem manuelt.

[Nibomo](/nb/) passer til denne arbeidsflyten fordi produktet i dag dekker den delen Claude ikke fullfører på egen hånd:

- oppretting og redigering av kort med forside og bakside
- KI-chat med data fra arbeidsområdet og vedlagte filer
- kortstokker og tagger for å organisere de ferdige kortene
- repetisjon med FSRS når kortene er verdt å beholde
- en ferdig driftet nettapp hvis du vil komme raskt i gang
- en mulighet for selvhosting hvis du vil kjøre din egen stakk senere

Hvis du vil komme i gang raskest mulig, dekker [Kom i gang](/nb/docs/getting-started/) den ferdig driftede appen. Hvis det er viktigere å eie stakken selv, er [veiledningen for selvhosting](/nb/docs/self-hosting/) det rette neste steget.

## Arbeidsflyten jeg faktisk ville gjentatt

En god fremgangsmåte for **å bruke Claude til å lage flashcards** er kort nok til at du fortsatt bruker den når nyhetens interesse er borte.

Dette er versjonen jeg ville beholdt:

1. Opprett ett Claude-prosjekt for ett emne, én eksamen eller ett tema.
2. Legg til en kort prosjektinstruksjon med regler for kort med forside og bakside.
3. Last opp én liten samling: en forelesning, en del av en lesetekst eller rettede øvingsoppgaver.
4. Be Claude om enkle kortutkast med forside og bakside.
5. Slett eller skriv om svake kort med en gang.
6. Be Claude bruke Nibomos MCP-tilkobling til å lagre bare kortene du har kontrollert og godkjent. Kontroller hvilket arbeidsområde kortene skal lagres i, og se gjennom forespørselen om å lagre dem. Godkjenn forespørselen, og kontroller deretter de lagrede kortene i Nibomo før du repeterer dem med FSRS. Du kan også kopiere dem manuelt.
7. Repeter den ferdige kortstokken med FSRS.

Det er en mer troverdig arbeidsflyt enn å late som om Claude selv er stedet der kunnskapen skal lagres.

Hvis den KI-genererte kortstokken din allerede føles overlesset, slutter du å godta nye utkast og forbedrer dem du har, med [Slik fikser du KI-genererte flashcards i 2026](/blog/how-to-fix-ai-flashcards/) (på engelsk).

## En bedre regel for å lage flashcards med Claude

Ikke be Claude gjøre hele studiejobben for deg.

Be Claude ta unna rutinearbeidet.

Det er denne versjonen av **å bruke Claude til å lage flashcards** som faktisk holder i 2026:

- ett prosjekt per tema
- én liten samling materiale om gangen
- ett faktum eller skille per kort
- sletting med hard hånd
- ordentlig repetisjon etterpå

Claude er flink til å få deg raskere fra rotete kildemateriale til kortutkast.

Nibomo sammen med FSRS er det som gjør utkastene om til noe du kanskje fortsatt husker om en måned.
