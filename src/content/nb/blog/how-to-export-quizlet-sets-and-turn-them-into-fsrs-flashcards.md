---
title: "Slik eksporterer du Quizlet-sett i 2026 (og hvorfor Eksporter mangler)"
description: "Eksporter et Quizlet-sett med dagens fremgangsmåte på nettstedet. Mangler Eksporter? Sjekk om du eier settet, har laget en kopi eller bruker mobilappen."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "hvordan eksportere fra Quizlet"
  - "hvordan eksportere Quizlet-kort"
  - "Quizlet eksportknapp mangler"
  - "laste ned Quizlet-kort"
  - "Quizlet til CSV"
  - "Quizlet til Anki"
---

Hvis **Eksporter (Export)** mangler i Quizlet, bør du først sjekke to ting: Opprettet du det opprinnelige settet, og bruker du Quizlet-nettstedet? Quizlet lar bare den som opprinnelig opprettet et sett, eksportere det, og funksjonen virker bare på nettstedet. Et kopiert sett kan ikke eksporteres, selv om kopien nå ligger i biblioteket ditt.

Hvis du oppfyller kravene, går selve eksporten raskt: Åpne settet på nettstedet, velg **Mer → Eksporter (More → Export)**, velg hvordan begrepene og definisjonene skal ordnes, og velg **Kopier tekst (Copy text)**. Quizlet laster ikke ned en kortstokkfil. Teksten legges på utklippstavlen, uten bilder.

**Fakta kontrollert:** 30. august 2026, mot [Quizlets offisielle eksportveiledning](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Arkivmedarbeider som kontrollerer eierskapsbrikker før tekstkort i par leveres ut, med to dokumentmapper klare og fotografier som blir igjen bak glass](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Skal eksportknappen være der?

Sjekk dette før du prøver å laste ned Quizlet-kort på andre måter:

| Situasjonen din | Skal Eksporter være tilgjengelig? | Neste steg |
| --- | --- | --- |
| Du opprettet det opprinnelige settet og åpnet det på Quizlet-nettstedet | Ja, ifølge Quizlets hjelpeside | Følg trinnene nedenfor |
| Du bruker iOS- eller Android-appen | Nei; eksport er bare tilgjengelig på nettstedet | Åpne Quizlet i en nettleser og logg inn |
| Du kopierte en annen brukers sett | Nei; Quizlet sier at kopierte sett ikke kan eksporteres | Ikke forvent at kopien gir tilgang til Eksporter |
| Du kan se settet, men opprettet det ikke | Nei; lesetilgang gjør deg ikke til settets oppretter | Be oppretteren om en kildefil, eller bygg settet på nytt fra materiale du kan bruke |

Hvis du opprettet det opprinnelige settet, men eksportknappen i Quizlet fortsatt mangler, må du kontrollere at du er logget inn på kontoen som eier det, og at du har åpnet originalen, ikke en kopi. Quizlets hjelpeside beskriver ingen alternativ eksportmetode. Kontakt i så fall Quizlets kundestøtte fremfor å stole på et nedlastingsverktøy som hevder å omgå begrensningen.

## Slik eksporterer du Quizlet-kort på nettstedet

For et sett du selv har opprettet:

1. Logg inn på Quizlet-nettstedet.
2. Velg **Biblioteket ditt (Your library)**.
3. Velg **Kortsett (Flashcard sets)**.
4. Åpne settet du vil eksportere.
5. Åpne menyen **Mer (More)**.
6. Velg **Eksporter (Export)**.
7. Velg hvordan begrepene og definisjonene skal ordnes.
8. Velg **Kopier tekst (Copy text)**.
9. Lim inn resultatet i et tekstredigeringsprogram som støtter ren tekst.

Dette er hele fremgangsmåten slik den fungerer nå. Det finnes ingen avsluttende «last ned»-knapp.

For vanlige kort med forside og bakside anbefaler jeg en tabulator mellom begrep og definisjon, og et linjeskift mellom kortene. Dette valget av skilletegn er et praktisk råd, ikke et krav fra Quizlet. Tabulatorer er vanligvis lettere å kontrollere enn kommaer, fordi kommaer forekommer så ofte i vanlige definisjoner.

En ryddig fil med to kort vil se slik ut, med én tabulator midt på hver linje:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Hva Quizlet-eksporten tar vare på

Quizlet beskriver funksjonen snevert: Den eksporterer **begrepene og definisjonene** fra et sett som brukeren selv har opprettet. Quizlet opplyser også at bilder ikke kan eksporteres.

Det tryggeste er å forholde seg til resultatet du limer inn. Hvis teksten, skilletegnet eller linjeskiftet finnes der, kan du bevare det i en fil. Quizlets hjelpeside lover ikke at mapper, øvingsmoduser, formatering, mestringsstatus, repetisjonshistorikk eller repetisjonsplan følger med.

Dette er altså en kopi av kortteksten, ikke en Quizlet-sikkerhetskopi som kan gjenopprettes. Det samme skillet gjelder hvis du søkte etter «laste ned Quizlet-kort»: Quizlet kopierer tekst til utklippstavlen, og du oppretter filen selv.

## Lagre en urørt UTF-8-kopi før du rydder opp

Sørg for at du kan gå tilbake til utgangspunktet:

1. Lim inn eksporten i et tekstredigeringsprogram som støtter ren tekst.
2. Lagre den som UTF-8, for eksempel `biology-quizlet-raw.txt`.
3. Lag en kopi med navnet `biology-quizlet-working.txt`.
4. La originalfilen være urørt, og rediger bare arbeidskopien.

Før du importerer arbeidsfilen, kontrollerer du den mens Quizlet-settet fortsatt er åpent:

- Slå på visning av usynlige tegn, og kontroller hvor tabulatorer og linjeskift står.
- Søk etter det valgte skilletegnet inne i begreper og definisjoner. En ekstra tabulator kan opprette et uventet tredje felt.
- Se etter definisjoner med egne linjeskift; de kan bli tolket som ekstra kort.
- Sammenlign begynnelsen, midten og slutten av filen med Quizlet, også de lengste definisjonene.
- Lukk filen og åpne den på nytt. Kontroller aksenter, ikke-latinske skriftsystemer, symboler og typografiske tegn som buede anførselstegn.
- Merk tomme felt, duplikater og uregelmessige rader i stedet for å rette dem ut fra antakelser uten å si fra.

Sammenlign bare antall linjer med antall kort når hvert kort opptar nøyaktig én linje. Definisjoner over flere linjer gjør denne snarveien upålitelig.

Behold originalfilen også etter at arbeidskopien ser riktig ut. Hvis en import forskyver et felt eller utelater innhold, har du fortsatt en uendret referanse.

## Quizlet til CSV: opprett filen riktig

Å endre filendelsen fra `.txt` til `.csv` konverterer ikke filen. CSV krever konsekvente skilletegn og korrekt bruk av anførselstegn rundt innhold med kommaer, anførselstegn og linjeskift.

Slik lager du en CSV-fil fra Quizlet på en trygg måte:

1. La sikkerhetskopien av råteksten være urørt.
2. Åpne arbeidskopien i et regneark, og velg nøyaktig det skilletegnet som ble brukt i Quizlet.
3. Kontroller at hver forventede post har to kolonner: begrep og definisjon.
4. Kontroller anførselstegn, skilletegn og definisjoner over flere linjer.
5. Eksporter som CSV med UTF-8-koding.
6. Åpne CSV-filen i en ny forhåndsvisning før du bruker den andre steder.

Et regneark kan legge til anførselstegnene som CSV krever. Å erstatte alle tabulatorer med kommaer gir ikke pålitelige resultater.

## Bruk teksten som utkast i Nibomo, og kontroller kortene

[Nibomo](/nb/features/) har ingen direkte Quizlet-import. I den nettbaserte tjenesten brukes TXT- eller CSV-filer som vedlegg til å lage KI-assisterte utkast. Dette er ikke en overføring som garanterer at alt bevares uendret.

1. Behold den urørte Quizlet-filen utenfor appen.
2. Legg ved den ryddede TXT-filen eller CSV-filen du har klargjort, i Nibomos KI-chat.
3. Fortell assistenten hvilket skilletegn og hvilke felt filen bruker.
4. Be om en liten forhåndsvisning, og si uttrykkelig at kortene ikke skal lagres ennå.
5. Sammenlign foreslått antall kort, forsider og baksider med arbeidsfilen.
6. Lagre bare kortene du har kontrollert.

[Kom i gang-veiledningen](/docs/getting-started/) beskriver KI-chat med data fra arbeidsområdet og filvedlegg. En forsiktig instruksjon kan være:

> Les denne filen som tabulatorseparerte par av begreper og definisjoner. Ikke lagre kort ennå. Lag et lite utvalg som utkast, bevar ordlyden i kilden og ikke-latinske tegn, og før opp rader med feil format, tomme rader og tvetydige rader separat i stedet for å gjette.

Dette kan være nyttig når de gamle kortene også trenger opprydding. Det beviser ikke at hver rad ble overført riktig. Bruk sjekklisten i [Slik retter du KI-genererte kort](/blog/how-to-fix-ai-flashcards/), og prøv deretter en liten kortstokk før du oppretter resten.

Kort som opprettes i Nibomo, starter med ny læringshistorikk. Quizlet-teksten inneholder ikke repetisjonshendelsene eller tilstanden til repetisjonsplanen som trengs for å videreføre den gamle køen.

> **Om tilknytningen min:** Jeg utvikler Nibomo. Denne fremgangsmåten beskriver produktets nåværende begrensninger; den innebærer ingen påstand om full kompatibilitet med Quizlet.

## Quizlet til Anki: bruk Ankis tekstimport

Ifølge Ankis [offisielle veiledning for tekstimport](https://docs.ankiweb.net/importing/text-files.html) støtter programmet rene tekstfiler i UTF-8 der feltene er skilt med kommaer, semikolon eller tabulatorer.

For en tabulatorseparert arbeidskopi:

1. Åpne importfunksjonen i Anki, og velg UTF-8-tekstfilen.
2. Kontroller i forhåndsvisningen at Anki har gjenkjent tabulator som skilletegn; endre innstillingen hvis det ikke stemmer.
3. Velg notattype og kortstokken kortene skal legges i.
4. Knytt det første feltet til forsiden og det andre til baksiden.
5. Kontroller forhåndsvisningen for tomme, forskjøvede eller ekstra felt.
6. Se over innstillingen for duplikater og oppdateringer før du importerer.

Anki bestemmer forventet antall felt ut fra den første linjen som ikke er en kommentar. I senere poster blir manglende felt tomme, mens ekstra felt ikke importeres. Derfor er forhåndsvisningen viktig, særlig når ett feilplassert skilletegn kan endre oppdelingen av en rad.

Definisjoner over flere linjer krever også et bevisst valg. Anki støtter felt i anførselstegn som går over flere linjer. Programmet kan i stedet tolke `<br>` som linjeskift når **Tillat HTML i felt (Allow HTML in fields)** er aktivert. Velg én metode, og kontroller en kopiert prøve før du importerer hele filen.

Som standard kan Anki gjenkjenne et eksisterende notat av samme type ut fra det første feltet og oppdatere de andre feltene. I importinnstillingene kan du i stedet velge å ignorere duplikater eller legge dem til som nye notater. Når et eksisterende Anki-notat oppdateres, kan repetisjonsplanen i Anki bevares, men ingen repetisjonsplan fra Quizlet følger med i tekstfilen.

## Behold originalen til den nye kortstokken fungerer

Den offisielle eksportmetoden i Quizlet slutter ved **Kopier tekst (Copy text)** for sett du selv har opprettet, på nettstedet. Skrapeskript, gjetting på private endepunkter og tredjeparts nedlastingsverktøy er egne fremgangsmåter uten offisiell støtte. De gjør ikke et kopiert sett eller et sett med bare lesetilgang til en offisiell eksport.

Hvis du trenger jevnlig automatisering fremfor en engangskopi, forklarer [gjeldende status for Quizlets API](/blog/quizlet-api/) hva som støttes. Hvis settet ikke er ditt, kan du be oppretteren om en kildefil eller bygge en mindre kortstokk fra dine egne notater. [Slik lager du bedre kort](/blog/how-to-make-better-flashcards/) kan hjelpe deg med å forbedre det nye settet i stedet for å kopiere hver eneste gamle rad.

Ikke slett det opprinnelige Quizlet-settet før:

- den urørte UTF-8-filen er lagret et sted som sikkerhetskopieres;
- arbeidsfilen åpnes igjen med forventede tegn og skilletegn;
- felt over flere linjer, tomme felt, duplikater og uregelmessige rader er kontrollert;
- viktig informasjon fra bilder er gjenskapt fra en kilde du kan bruke; og
- en liten test har gitt riktige forsider og baksider i målprogrammet.

Behold den urørte tekstfilen etterpå. Den er den enkleste uavhengige referansen hvis en senere import ser feil ut. Hvis du fortsatt vurderer hvor kortene skal flyttes, gir [sammenligningen av Quizlet-alternativer](/blog/quizlet-alternative/) en bredere gjennomgang av fordeler og ulemper.
