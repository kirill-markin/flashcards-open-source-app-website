---
title: "Slik bruker du Claude til studier i 2026: en praktisk arbeidsflyt"
description: "Studer dine egne notater med Claude, svar på ett spørsmål om gangen, kontroller rettelser og lag flashcards av kunnskapshull innenfor emnets KI-regler."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "slik bruker du Claude til studier"
  - "Claude til studier"
  - "studieteknikk med Claude"
  - "Claude som veileder"
  - "Claude flashcards"
  - "Claude Learning Mode"
---

Når du skal lære **hvordan du bruker Claude til studier**, kan du begynne med en liten samling notater fra emnet ditt. Sjekk hva notatene støtter, og svar på ett spørsmål om gangen før du får hjelp. Kontroller rettelsene, og lagre deretter kunnskapshullene du trenger å øve mer på. Til den siste delen anbefaler jeg [Nibomo-utvidelsen for Claude](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): Den gir Claude arbeidsflyter for å lage flashcards, repetere kort når det er tid for dem, og forbedre kort som forvirrer deg.

Den nyttige arbeidsflyten er **kildekontroll → svar fra hukommelsen → kontroller → lagre → repeter når det er tid**. Vanlige veiledningsinstruksjoner fungerer i en vanlig Claude-chat. Utvidelsen knytter økten til lagrede kort og en repetisjonsplan.

> **Åpenhet:** Jeg er Kirill Markin, og jeg utvikler [Nibomo](/nb/features/). Kildearbeidet og redigeringen av denne artikkelen er gjort med KI-hjelp.

**Fakta kontrollert:** 22. oktober 2026.

![Studiebord der kildenotater er koblet til ett spørsmål og to kontrollerte kort om kunnskapshull, mens et tvetydig notat er lagt til side](/blog/how-to-use-claude-for-studying-v2.png)

## Kortversjonen av studier med Claude

Bruk denne arbeidsflyten på én del av en forelesning, én lesetekst eller ett oppgavesett:

1. Sjekk hva emnet tillater at du bruker KI til.
2. Gi Claude en liten, navngitt samling kildemateriale.
3. Be det flagge manglende, motstridende eller uleselig informasjon før veiledningen starter.
4. Svar på ett spørsmål om gangen fra hukommelsen.
5. Noter rettelsen, hvor i kilden den støttes, og eventuell usikkerhet.
6. Kontroller viktige svar selv.
7. Lagre noen få kontrollerte kunnskapshull med varig relevans som flashcards i Nibomo.
8. Repeter lagrede kort når det er tid for dem, i Claude eller Nibomo-appen.

Rekkefølgen har betydning. Øvingsspørsmål basert på en tvetydig kilde gjør bare tvetydigheten vanskeligere å oppdage.

## Sett opp Nibomo i Claude

Åpne [Nibomo-utvidelsen](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory), eller gå til **Customize → Plugins**, finn Nibomo og klikk på **Add**. Hvis den allerede er installert, sjekker du at den er aktivert.

Koble Nibomo til Claude med tilkoblingen som følger med utvidelsen. Følg påloggingsflyten, logg inn på Nibomo-kontoen din eller opprett en, og gi Claude tilgang. Velg arbeidsområdet du vil bruke, når du blir spurt. Med denne fremgangsmåten trenger du ikke kopiere et API-token eller skrive inn en serveradresse.

Utvidelsen gir arbeidsflytene for å opprette, repetere og forbedre kort. MCP-tilkoblingen er forbindelsen som lar Claude lese og oppdatere Nibomo-kontoen din. Du finner også [tilkoblingen i Claudes katalog](https://claude.ai/directory/nibomo). [Veiledningen for Claude-tilkoblingen](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (på engelsk) og [dokumentasjonen for MCP-tilkoblingen](/nb/docs/mcp-connector/) forklarer forbindelsen nærmere.

Anthropic tilbyr for tiden [utvidelser på abonnementene Pro, Max, Team og Enterprise](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), i Claude på nettet, Chat-fanen i Claude Desktop og Cowork. Hvis kontoen din ikke har utvidelser, kan du fortsatt bruke veiledningsinstruksjonene nedenfor og kopiere utvalgte kort manuelt til appen du bruker til repetisjon.

## Sjekk emnets regler før første opplasting

Start med emnebeskrivelsen, oppgaveinstruksjonene og lærestedets KI-retningslinjer. Reglene kan variere mellom emner og oppgaver, så skriv ned hva som er tillatt for akkurat denne oppgaven: forklaringer, øvingsspørsmål, tilbakemeldinger, disposisjoner, hjelp med kildehenvisninger eller ingen av delene.

Anthropics [studentveiledning for Claude for Education](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) nevner forklaringer, øvingsspørsmål, studieguider og flashcards som bruksområder. Den samme veiledningen sier at du skal følge lærestedets regler for akademisk redelighet og ikke bruke Claude til arbeid du forventes å utføre selvstendig.

Det gir deg en praktisk grense:

- Bruk Claude til å øve på begreper når veiledning og øving er tillatt.
- Ikke be det løse en pågående vurderingsoppgave som du må gjennomføre alene.
- Ikke last opp konfidensielt, personlig, opphavsrettsbeskyttet eller adgangsbegrenset kursmateriale med mindre du har tillatelse til å dele det med tjenesten.
- Hvis reglene er uklare, spør faglæreren før arbeidet som skal vurderes, begynner.

La ditt eget arbeid være utgangspunktet. Tilbakemelding etter at du selv har forsøkt, kan være tillatt studiestøtte. Å levere Claudes arbeid som ditt eget kan bryte reglene for emnet.

## Legg de riktige filene på riktig sted

En enkeltstående chat er nok til en kort studieøkt. For et emne du skal jobbe med over tid, kan du opprette ett Claude-prosjekt og bare legge til materialet som hører til der.

[Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) er tilgjengelig for alle brukere. Gratiskontoer er for tiden begrenset til fem prosjekter. Legg de konkrete filene fra emnet og studieinstruksjonene i prosjektets kunnskapsgrunnlag, slik at de er tilgjengelige på tvers av chattene der.

Når minnefunksjonen er aktivert, kan et prosjekt også bevare kontekst mellom samtaler. Behandle minnet som studiekontekst, ikke som en autoritativ samtalelogg eller en erstatning for kildefilene. Behold kildegrunnlaget og rettelser du trenger å bruke igjen, i prosjektets kunnskapsgrunnlag, og be Claude vise til originalmaterialet.

Claudes [dokumentasjon for filopplasting](https://support.claude.com/en/articles/8241126-upload-files-to-claude) lister for tiden PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON og XLSX, samt bilder i JPEG, PNG, GIF og WebP. Opplasting av XLSX krever at kjøring av kode og oppretting av filer er aktivert. Du kan legge ved en fil i én chat eller beholde den i prosjektets Files-del for gjenbruk.

Bruk den minste samlingen som er nyttig: én forelesning, én del av et kapittel eller spørsmålene du nettopp svarte feil på. Oppgi avgrensningen i instruksjonen, for eksempel «lysbilde 8–17» eller «delen med overskriften Genetisk kobling». En mindre samling gjør det lettere å finne kildegrunnlaget og oppdage utilsiktet sammenblanding.

Anthropic introduserte [**Learning mode** i Claude for Education-prosjekter](https://www.anthropic.com/news/introducing-claude-for-education) som en veiledet, sokratisk læringsform der studentene blir bedt om å resonnere fremfor å få svaret med en gang. Du kan ha tilgang hvis universitetet ditt tilbyr Claude for Education, men du bør ikke gå ut fra at funksjonen finnes på alle personlige Claude-kontoer. Instruksjonene nedenfor skaper en lignende, spørsmålsdrevet økt i en vanlig chat.

## Få Claude til å avdekke tvetydigheter før veiledningen starter

Et forelesningslysbilde kan si «kromosomene skilles» uten å spesifisere hvilke. Hvis Claude stilltiende fyller hullet med generell kunnskap, kan du ende opp med å øve inn et skråsikkert svar som kilden din aldri ga grunnlag for.

Legg ved materialet, oppgi den nøyaktige avgrensningen, og be først om en gjennomgang av kildene:

```text
Bruk bare filene og delene jeg navngir for denne studieøkten. Ikke fyll hull
med generell kunnskap med mindre jeg uttrykkelig ber deg om det.

Før du veileder meg, lag en kildeoversikt med:
- begrepene materialet forklarer tydelig;
- ord, diagrammer eller avsnitt som er tvetydige eller ufullstendige;
- tekst, formler, etiketter eller sider du ikke kan lese pålitelig;
- motsetninger mellom de oppgitte kildene;
- forkunnskaper materialet forutsetter, men ikke forklarer.

Oppgi filnavn og side, lysbilde eller overskrift for hvert punkt. Merk alt
uten direkte støtte som UTEN KILDEGRUNNLAG. Ikke begynn med spørsmålene ennå.
```

Sammenlign oversikten med filene. Hvis Claude hevder at en definisjon står på lysbilde 12, åpner du lysbilde 12. Hvis en etikett i en figur er uleselig, limer du inn den relevante teksten eller laster opp et tydeligere bilde. Hvis to kilder i emnet er uenige, lar du uenigheten stå synlig og spør faglæreren eller bruker kilden emnet utpeker som autoritativ.

Du kan be om en forklaring utenfra senere. Hold den adskilt:

```text
Kursmaterialet forklarer ikke denne forkunnskapen. Forklar den ut fra generell
kunnskap i en del merket UTENFOR KURSMATERIALET. Ikke presenter forklaringen
som om den kom fra filene mine.
```

Den merkingen bidrar til at bakgrunnskunnskap ikke stilltiende blir til dokumentasjon fra emnet.

## Still ett spørsmål, og vent

Når kildeoversikten ser riktig ut, starter du med aktiv gjenkalling: Formuler svaret før du ser det, i stedet for å kjenne igjen en velformulert forklaring etter at Claude har vist den.

```text
Veiled meg bare i det kildeoversikten har dekning for.

Still ett spørsmål om gangen og vent på svaret mitt. Ikke legg hint i
spørsmålet. Etter at jeg har svart:
1. vurder svaret som Riktig, Delvis riktig, Feil eller Uklar kilde;
2. gi kort tilbakemelding uten å avsløre hele svaret;
3. henvis til filen og siden, lysbildet eller overskriften som støtter vurderingen;
4. hvis svaret mitt er delvis riktig eller feil, gi et hint og la meg prøve
   igjen før du viser hele svaret;
5. legg bare reelle kunnskapshull til i loggen.

Hvis kilden er uklar, merk spørsmålet for kontroll i stedet for å be meg
prøve igjen.

Bland spørsmål som krever direkte gjenkalling, at jeg skiller mellom lignende
ideer, og at jeg bruker kunnskapen i korte oppgaver.
Ikke lag flashcards ennå. Stopp etter 10 spørsmål og vis loggen.
```

Ett spørsmål om gangen fjerner ledetråder fra senere spørsmål og gjør hvert forsøk lettere å vurdere. Med en liste på ti er det lett å hoppe over de ubehagelige spørsmålene eller bare svare på delene du kan.

Be også Claude variere spørsmålstypen. Definisjoner avdekker manglende begrepskunnskap. Sammenligninger avdekker begreper du blander sammen. Små anvendelser viser om du kan bruke ideen, fremfor bare å gjenta formuleringen. Ved en beregning med flere trinn bør du regne på papir og vise fremgangsmåten. Sluttallet alene gir Claude svært lite å vurdere ut fra.

## Før en logg over kildegrunnlag og usikkerhet

Loggen over kunnskapshull bør gjøre vurderingene etterprøvbare, ikke bare telle poeng. Bruk en liten tabell:

| Spørsmål | Ditt svar | Vurdering | Rettelse | Kildegrunnlag | Usikkerhet | Neste steg |
| --- | --- | --- | --- | --- | --- | --- |
| Hva skilles i anafase I? | Søsterkromatider | Feil | Homologe kromosomer skilles; søsterkromatidene forblir festet til hverandre | Forelesning 4, lysbilde 18 | Ingen | Prøv igjen, og vurder deretter ett kort |

Be Claude skrive «Uklar kilde» når kildegrunnlaget ikke kan avgjøre svaret. Ikke gjør den raden til noe du skal lære utenat. Avklar den først.

Usikkerhetskolonnen fanger også opp mindre åpenbare problemer: et diagram Claude ikke klarte å lese, et begrep foreleseren bruker annerledes enn læreboken, eller en konklusjon som avhenger av en uutalt forutsetning. «Sannsynligvis riktig» og «støttet av lysbilde 18» er ikke samme status.

## Et konkret eksempel: veiledningstekst og ett kort til senere repetisjon

Anta at notatet fra emnet sier:

> Under anafase I beveger homologe kromosomer seg mot motsatte poler. Søsterkromatidene forblir festet til hverandre ved sentromerene.

Claude spør: «Hva skilles under anafase I?» Du svarer: «Søsterkromatider.»

Nyttig tilbakemelding er kort og konkret:

```text
Feil. Søsterkromatidene forblir festet til hverandre under anafase I. Les de to
setningene en gang til: Hva beveger seg mot motsatte poler?
```

Hvis materialet du har lagt ved, også dekker anafase II, kan Claude sammenligne de to etter det nye forsøket. Den forklaringen hører hjemme i veiledningssamtalen. Kunnskapshullet det er verdt å beholde, er mindre:

```text
Forside: Hva skilles under anafase I i meiosen?
Bakside: Homologe kromosomer; søsterkromatidene forblir festet til hverandre.
Kildegrunnlag: Forelesning 4, lysbilde 18
```

Én feil ga ett avgrenset kort med et svar som er enkelt å vurdere. Hintet, det nye forsøket, forklaringen og oppmuntringen gjorde nytten sin der og da. Alt dette trenger ikke følge med til senere repetisjoner.

## Kontroller før du stoler på rettelsen

Claude kan få et svar til å virke avklart selv om det feiltolker en fil, henter inn kunnskap utenfra eller godtar et vagt svar. Kontrollen bør passe til påstanden:

1. **Fakta som er spesifikke for emnet:** Åpne siden eller lysbildet det henvises til, og sammenlign formuleringer, betingelser og unntak selv.
2. **Regneoppgaver og løsningsforslag:** Gjør trinnene om igjen på egen hånd, sjekk enheter og fortegn, og sammenlign deretter med en offisiell fasit eller faglærerens veiledning hvis det finnes.
3. **Oppdaterte fakta:** Hvis nettsøk er tilgjengelig for modellen og kontoen din, ber du Claude søke og vise til primærkilder. Åpne lenkene. Kildehenvisninger gjør kontroll mulig, men gjennomfører den ikke for deg.
4. **Viktige eller omstridte spørsmål:** Bruk den oppgitte læreboken, undervisningspersonalet eller en annen autoritet emnet anerkjenner.

Anthropics [veiledning for nettsøk](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) sier at søkesvar inneholder kildehenvisninger, og anbefaler å kontrollere viktig informasjon mot autoritative kilder. Tilgangen til søk kan variere. Hvis søk ikke er tilgjengelig, bruker du en pålitelig kilde direkte i stedet for å la Claude gjette.

En nyttig instruksjon for kontroll er bevisst streng:

```text
Gå gjennom loggen over kunnskapshull. For hver rettelse skal du oppgi nøyaktig
sted i kilden og et kort utdrag som støtter den. Hvis kilden ikke direkte
støtter svaret, endrer du vurderingen til UTEN KILDEGRUNNLAG. List opp alle
svar som avhenger av kunnskap utenfra, en slutning eller uleselig innhold.
Ikke fyll disse hullene ved å gjette.
```

Se deretter på materialet det henvises til, selv. Claude hjelper deg å finne kildegrunnlaget, men erstatter det ikke.

## Avgjør hva som fortjener en ny repetisjon

Ikke alle rettelser bør bli flashcards. Noen kunnskapshull trenger et gjennomarbeidet eksempel, et diagram, en veiledningstime eller en ny øvingsoppgave.

Behold et forslag til flashcard når det:

- bygger på noe du svarte feil på, brukte lang tid på å svare på eller blandet sammen med en lignende idé;
- har betydning utover det aktuelle spørsmålet;
- kan testes med ett tydelig spørsmål og ett kort svar;
- støttes av en kilde du har kontrollert;
- fortsatt gir mening uten Claude-samtalen ved siden av.

Dropp det når:

- selve kilden fortsatt er tvetydig;
- du svarte lett og riktig flere ganger;
- spørsmålet ber om et helt essay eller en hel prosess;
- svaret endrer seg med betingelser som ikke er oppgitt;
- det er nyttigere å øve på ferdigheten enn å lære en setning utenat.

Be Claude om forslag, ikke en ferdig kortstokk:

```text
Gå gjennom den kontrollerte loggen over kunnskapshull. Foreslå kort bare for
hull som går igjen eller er viktige, og som kan testes tydelig.

Bruk ett læringsmål per kort. La hver forside være konkret og hver bakside kort.
Ta med stedet i kilden og eventuell gjenværende usikkerhet. Sett hull som
bare trenger praktisk øving, i en egen liste med en passende øvelse.
Ikke lagre noe ennå.
```

Forkast resten. En studieøkt med Claude kan være nyttig selv om den ikke gir et eneste kort.

## Lagre kontrollerte kunnskapshull i Nibomo

Når du har kontrollert kildegrunnlaget, ber du Nibomo-utvidelsen gjøre utvalgte kunnskapshull til lagrede kort. Oppgi arbeidsområdet, og be Claude sjekke eksisterende kort før det legger til flere. Her er en instruksjon som ber om en forhåndsvisning før lagring:

```text
Bruk Nibomo til å opprette opptil 5 flashcards fra den kontrollerte loggen
ovenfor. Bruk dette arbeidsområdet: [navn på arbeidsområdet]. Bekreft hvilket
arbeidsområde det er før lagring hvis navnet er tvetydig.

Sjekk eksisterende kort for duplikater eller kort som tester samme læringsmål.
Bruk bare kunnskapshull som støttes av kildegrunnlaget jeg har kontrollert.
Bruk ett læringsmål per kort, med en konkret forside, en kort bakside og
henvisning til stedet i kilden.

Vis meg kortforslagene, kildegrunnlaget og eventuelle duplikater først.
Vent på godkjenningen min før du lagrer. Etter lagring skal du bekrefte hva
som ble opprettet, og hvor.
```

Forhåndsvisningen er et valg du gjør i denne instruksjonen. Du kan selv velge hvor grundig du vil gå gjennom kortene før du ber Claude lagre eller redigere dem. Det er ikke et krav ved hver handling med utvidelsen.

Behold skillet fra eksemplet: Forklaringen hjalp deg å forstå meiosen, mens det lagrede kortet tester det konkrete skillet du bommet på. En lang veiledningstekst trenger sjelden å bli et langt kort.

## Repeter kortene som står for tur i Claude

Spørsmål om nylig opplastede notater er en veiledningsøkt. En planlagt repetisjon i Nibomo bruker kort du allerede har lagret, og registrerer et resultat som påvirker når hvert kort kommer tilbake. Be uttrykkelig om det:

```text
Bruk Nibomo til å repetere kortene som står for tur, i 10 minutter
i arbeidsområdet [navn på arbeidsområdet]. Bruk Europe/Paris som tidssonen min.

Vis ett spørsmål om gangen, og vent på forsøket mitt før du avslører det
lagrede svaret. Sammenlign så det opprinnelige forsøket mitt med svaret,
gi kort tilbakemelding og registrer en passende vurdering av hvor godt jeg
husket det. Fortell meg hvilken vurdering du registrerte.
Vurder det opprinnelige forsøket, ikke et rettet svar jeg gir etter avsløringen.
Stopp når tiden er ute eller det ikke er flere kort som skal repeteres nå,
og oppsummer repetisjonene som Nibomo har bekreftet.
```

Bytt ut arbeidsområdet og tidssonen med dine egne. Claude forteller normalt hvilken vurdering det har valgt, og registrerer den automatisk. Hvis du vil velge hver vurdering selv, legger du til: «Bruk manuell vurdering: Etter at du har vist svaret, skal du vente på at jeg velger Again, Hard, Good eller Easy før du registrerer det.»

Hvis du svarer «søsterkromatider» på kortet om anafase I, blir ikke det opprinnelige forsøket riktig av at du kjenner igjen rettelsen etter at svaret er vist. Et senere spørsmål om anafase II kan teste om du nå skiller mellom de to, men skal ikke forbedre den første vurderingen i ettertid.

Du kan også repetere i [Nibomo-appen](https://app.nibomo.com/). Bekreftede repetisjoner oppdaterer den samme planen enten du øver i appen eller i Claude. Dermed kan du bytte mellom dem uten å holde styr på to repetisjonshistorikker. Be Claude si tydelig fra om mislykkede eller ubekreftede registreringer, fremfor å regne dem som lagret fremgang.

## Forbedre kort som stadig forvirrer deg

Gjentatte feil kan avdekke et vagt spørsmål, et svar som dekker for mye, eller en manglende betingelse. Be Claude undersøke kortet før du konkluderer med at du bare trenger flere repetisjoner:

```text
Bruk Nibomo til å gå gjennom kortene jeg syntes var forvirrende i denne økten.
Se etter vage forsider, flere læringsmål, manglende betingelser, svar uten
kildegrunnlag og duplikater. Sammenlign foreslåtte rettelser med materialet
fra emnet ovenfor.

Vis det nåværende kortet og endringsforslaget ved siden av hverandre, med en
kort begrunnelse og henvisning til stedet i kilden. Merk alt kildegrunnlaget
ikke kan avklare. Vent på godkjenningen min før du redigerer. Ikke slett kort
eller endre fakta som fortsatt er uavklart.
```

La kortet stå uendret hvis spørsmålet er tydelig og du bare ikke klarte å huske svaret. For kunnskapshull som trenger et diagram eller enda en gjennomarbeidet oppgave, går du tilbake til veiledning eller praktisk øving.

Hvis du foretrekker å kopiere manuelt, ber du Claude gi deg de godkjente kortene som enkle blokker med forside og bakside og legger dem til i flashcard-appen du vanligvis bruker. Kildekontrollen og veiledningen med spørsmål før svar gjelder fortsatt.

## Her trenger Claude fortsatt oppfølging

Denne metoden reduserer feil som kan unngås. Den gjør ikke Claude til en autoritet.

- Et svar som holder seg til kildene, kan fortsatt være feil hvis kilden er feil.
- Innhold hentet ut av filer kan miste kontekst, særlig ved diagrammer, tabeller og skannede sider.
- Claude kan vurdere et åpent svar for velvillig eller for bokstavelig.
- En lang veiledningssamtale kan gli bort fra den opprinnelige avgrensningen.
- Lette hint kan skape gjenkjennelse uten varig evne til å hente frem svaret selv.

Start på nytt fra den navngitte kilden når samtalen glir ut. Be om en ny, konkret kildehenvisning når en forklaring endrer seg. For ferdigheter som bevisføring, essayskriving, uttale, laboratoriearbeid eller programmering bør du bruke praktisk øving og tilbakemelding fra mennesker i tillegg til spørsmål som trener gjenkalling.

## En siste sjekkliste for studier med Claude

Før du avslutter økten, sjekk at:

- KI-bruken er innenfor reglene for dette emnet og denne oppgaven;
- Claude har pekt ut alt som er tvetydig, uleselig eller uten kildegrunnlag;
- du svarte på ett spørsmål om gangen før du fikk hjelp;
- hver rettelse viser til kildegrunnlag du selv har åpnet;
- kunnskap utenfra er merket og holdt adskilt fra kursmaterialet;
- uavklart usikkerhet ikke har blitt til et flashcard;
- bare noen få kontrollerte kunnskapshull med varig relevans har blitt til lagrede kort;
- kortene ble lagret i riktig arbeidsområde uten unødvendige duplikater;
- du har valgt automatisk eller manuell vurdering for planlagte repetisjoner;
- vurderingene gjenspeiler de opprinnelige forsøkene dine, og registrerte repetisjoner er bekreftet;
- du vet hvor du skal komme tilbake til neste planlagte repetisjon.

En nyttig **Claude-veileder** gjør mer enn å forklare. Den viser hvor kilden slutter, venter mens du henter frem svaret, og etterlater en kort oversikt over hva du faktisk sto fast på. Det er denne oversikten, fremfor lengden på chatten, som gjør arbeidsflyten med Claude verdt å gjenta.
