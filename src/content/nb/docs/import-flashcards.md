---
title: Importer puggekort til Nibomo
description: Flytt kort fra Quizlet, Anki eller en annen app. Finn riktig eksportformat og sjekk kortene før en stor import.
---

Åpne [Nibomo](https://app.nibomo.com/?locale=nb), velg arbeidsområdet du vil importere kortene til, og gå til **Bibliotek > Import**. Under **Fra en annen app** velger du appen du brukte. Hver app har sitt eget valg, også når flere bruker samme filformat.

Valgene nedenfor finnes i nettappen. Bruk nettappen hvis du ikke finner menyen eller kilden på iPhone, iPad, Mac eller Android. Bruker du Nibomo som gjest på enheten, logger du inn der først. Logg deretter inn med samme Nibomo-konto i nettappen og velg arbeidsområdet som skal få kortene.

## Velg kilde

| Kilde | Det du trenger | Importmåte |
| --- | --- | --- |
| Quizlet | Kopiert eksporttekst | Lim inn på importskjermen for Quizlet |
| Anki | En kortstokk i `.apkg` eller en samling i `.colpkg` | Velg filer |
| Noji | `.csv` eller `.ofc` | Velg filer |
| Knowt | `.pdf` | Velg filer |
| RemNote | `.apkg`, `.md` eller `.txt` | Velg filer |
| Brainscape | `.csv` | Velg filer |
| StudySmarter | `.csv` | Velg filer |
| Cram | `.csv` | Velg filer |
| Mochi | `.mochi` | Velg filer |
| SuperMemo | `.xml` | Velg filer |
| AlgoApp (tidligere AnkiApp) | `.zip` eller `.xml` | Velg filer |
| En annen app | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` eller `.zip` | Velg filer under **Importer fra en annen app** |
| Regneark | Kopierte rader med for- og bakside for hvert kort | Lim inn under **Importer fra et regneark** |
| Nibomo | En `flashcards.zip` eksportert fra Nibomo | Forhåndsvis under **Importer fra Nibomo** |

Se etter **AnkiApp** hvis menyen viser det gamle navnet på AlgoApp. Anki har et eget valg.

Har du en eldre Excel-fil i `.xls`-format, lagrer du den som `.xlsx` eller `.csv` før importen. Du kan også kopiere kolonnene for for- og bakside og [lime dem inn i regnearkimporten](#lim-inn-fra-et-regneark).

## Importer fra en annen puggekortapp

1. Eksporter kortene du vil flytte, fra appen du brukte. I Quizlet åpner du kortsettet ditt, velger **Export** og kopierer teksten. Tabulator mellom begrep og definisjon og ny linje mellom kort fungerer godt. Du kan bare eksportere på Quizlets nettsted, og bare originale kortsett du har laget selv.
2. Gå til **Bibliotek > Import** i Nibomo og åpne valget for appen din. Lim inn den kopierte teksten for Quizlet. For andre kilder velger du eksportfilene. Hvis appen ikke står på listen, men du har en fil i et støttet format, for eksempel PDF, velger du **Importer fra en annen app**.
3. Velg **Start import**. Nibomo åpner en ny AI-chat og sender importforespørselen med filene eller teksten. Du trenger internettforbindelse. Hver fil til AI-import kan være opptil **30 MiB**. Eksporter mindre kortstokker eller sett hver for seg hvis filen er for stor.
4. Sjekk resultatet i **Bibliotek**. AI-chatten kan lagre kort i puljer underveis. Hvis den stopper, se hvilke kort som allerede ligger i Nibomo og be chatten fortsette med resten før du prøver hele eksporten på nytt.

### Prøv en liten import først

Behold originaleksporten og begynn med én liten kortstokk eller ett lite sett. Sammenlign antallet kort og sjekk noen for- og baksider, etiketter, bilder og eventuell formatering du trenger. Vil du se et utvalg før kortene lagres, kan du legge ved eksportfilen i en ny AI-chat og be om å få se noen kort uten å lagre dem. Da skriver du forespørselen selv i stedet for å velge **Start import**.

Kort som importeres med AI, starter som nye i Nibomo. Repetisjonshistorikk og planlagte datoer følger ikke med. Hvor mye av den opprinnelige strukturen, formateringen og mediene som blir med, avhenger av hva eksporten inneholder og hva AI-chatten kan lese. Sjekk resultatet før du tar kortene i bruk eller sletter noe i kildeappen.

## Lim inn fra et regneark

Bruk **Bibliotek > Import > Importer fra et regneark** for enkle par med for- og bakside. Kopier to kolonner uten overskriftsraden og lim dem inn på importskjermen. Bruk **Tabulator** mellom for- og bakside og **Ny linje** mellom kortene. Endre skilletegnene hvis teksten bruker noe annet.

Se over forhåndsvisningen, rett opp ufullstendige rader og velg eventuelle etiketter. Velg deretter **Importer** for å lagre kortene. Denne importen bruker ikke AI-chat.

## Importer en Nibomo-ZIP

Bruk **Bibliotek > Import > Importer fra Nibomo** for en `flashcards.zip` som er eksportert fra Nibomo. Velg ZIP-filen uten å pakke den ut. Sjekk antall kort og mediefiler og eventuelle advarsler i forhåndsvisningen. Bekreft deretter importen og se gjennom enkeltkort og mediefiler i **Bibliotek**. Kort, etiketter og medier i pakken kan følge med. Denne importen bruker ikke AI-chat.
