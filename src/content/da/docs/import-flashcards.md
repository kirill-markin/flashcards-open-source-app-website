---
title: Importér flashcards til Nibomo
description: Flyt dine kort fra Quizlet, Anki eller en anden flashcard-app. Find det rigtige eksportformat, og tjek kortene, før du importerer en stor bunke.
---

Åbn [Nibomo](https://app.nibomo.com/?locale=da), vælg det arbejdsområde, hvor du vil gemme kortene, og gå til **Bibliotek > Import**. Under **Fra en anden app** vælger du den app, du har brugt. Hver app har sit eget menupunkt, også når den bruger samme filformat som en anden.

Du finder mulighederne nedenfor i webappen. Hvis du ikke kan se menuen eller den ønskede kilde på iPhone, iPad, Mac eller Android, kan du bruge webappen. Bruger du Nibomo som gæst på din enhed, skal du først logge ind dér. Log derefter ind i webappen med samme Nibomo-konto, og vælg det arbejdsområde, du vil importere til.

## Vælg kilden til dine kort

| Kilde | Det skal du bruge | Sådan importerer du |
| --- | --- | --- |
| Quizlet | Kopieret tekst fra eksporten | Indsæt teksten på importskærmen for Quizlet |
| Anki | En bunke som `.apkg` eller en samling som `.colpkg` | Vælg filer |
| Noji | `.csv` eller `.ofc` | Vælg filer |
| Knowt | `.pdf` | Vælg filer |
| RemNote | `.apkg`, `.md` eller `.txt` | Vælg filer |
| Brainscape | `.csv` | Vælg filer |
| StudySmarter | `.csv` | Vælg filer |
| Cram | `.csv` | Vælg filer |
| Mochi | `.mochi` | Vælg filer |
| SuperMemo | `.xml` | Vælg filer |
| AlgoApp (tidligere AnkiApp) | `.zip` eller `.xml` | Vælg filer |
| Gizmo | `.pdf` | Vælg filer |
| En anden app | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` eller `.zip` | Vælg filer under **Importér fra en anden app** |
| Regneark | Kopierede rækker med forside og bagside til hvert kort | Indsæt dem under **Importér fra et regneark** |
| Nibomo | En `flashcards.zip`-fil eksporteret fra Nibomo | Tjek forhåndsvisningen under **Importér fra Nibomo** |

Hvis importmenuen bruger det gamle navn for AlgoApp, skal du kigge efter **AnkiApp**. Anki har sit eget menupunkt.

Har du en ældre Excel-fil i formatet `.xls`, kan du gemme den som `.xlsx` eller `.csv` inden import. Du kan også kopiere kolonnerne med for- og bagside og [indsætte dem på importskærmen til regneark](#indsæt-kort-fra-et-regneark).

## Importér kort fra en anden flashcard-app

1. Eksportér de kort, du vil flytte, fra den oprindelige app. Åbn dit sæt i Quizlet, vælg **Export** (Eksportér), og kopiér teksten. Brug tabulator mellem begreb og definition og en ny linje for hvert kort. Du kan kun eksportere via Quizlets hjemmeside, og kun de originale sæt, du selv har oprettet.
2. Gå til **Bibliotek > Import** i Nibomo, og vælg den relevante app. Indsæt den kopierede tekst, hvis du kommer fra Quizlet. For andre kilder skal du vælge den eller de eksporterede filer. Hvis din app ikke har sit eget menupunkt, men kan eksportere i et understøttet format som PDF, skal du vælge **Importér fra en anden app**.
3. Vælg **Start import**. Nibomo åbner en ny AI-chat og sender importanmodningen med dine filer eller den indsatte tekst. Det kræver internetforbindelse. Hver fil til AI-import må fylde op til **30 MiB**. Hvis filen er større, så prøv at eksportere mindre bunker eller sæt hver for sig.
4. Tjek resultatet under **Bibliotek**. AI-chatten kan gemme kortene i portioner. Hvis den stopper undervejs, så se, hvilke kort der allerede er gemt, og bed den om at fortsætte med resten, før du prøver hele eksporten igen.

Åbn menuen med de tre prikker på kortbunken i Gizmo, og vælg **Print**. Vælg derefter **Save as PDF** i browseren. Gå til **Bibliotek > Import > Importér fra Gizmo** i Nibomos webapp, vælg PDF-filen, og klik på **Start import**. Sammenlign de gemte kort under **Bibliotek** med PDF-filen. Tjek antallet af kort, og se, om hver forside har den rigtige bagside.

### Start med en lille bunke

Behold den oprindelige eksport, og start med en lille bunke eller et lille sæt. Sammenlign antallet af kort, og tjek for- og bagsiden på et par stykker, deres tags og eventuelle billeder eller særlig formatering, du har brug for. Hvis du vil se eksempler, inden kortene bliver gemt, kan du vedhæfte eksporten i en ny AI-chat og bede om at få vist nogle få kort uden at gemme dem. Det kan du gøre i stedet for at vælge **Start import**.

Kort, du importerer med AI, tilføjes som nye kort i Nibomo. Tidligere repetitionshistorik og datoer for repetition følger ikke med. Hvor meget af den oprindelige struktur, formatering og medier der følger med, afhænger af eksporten, og hvad AI-chatten kan læse. Tjek resultatet, før du bruger kortene eller sletter noget i den oprindelige app.

## Indsæt kort fra et regneark

Log først ind på Nibomo. Brug **Bibliotek > Import > Importér fra et regneark**, hvis kortene blot består af par med en forside og en bagside. Kopiér to kolonner uden overskriftsrækken, og indsæt dem på importskærmen. Til regnearksceller kan du starte med **Tabulator** mellem forside og bagside og **Ny linje** mellem kortene. Vælg andre skilletegn, hvis teksten bruger dem.

Tjek forhåndsvisningen, ret ufuldstændige rækker, og vælg de tags, du vil tilføje. Brug derefter importknappen til at gemme kortene. Denne metode bruger ikke AI-chatten.

## Importér en ZIP-fil fra Nibomo

Log først ind på Nibomo. Brug **Bibliotek > Import > Importér fra Nibomo** til en `flashcards.zip`, som tidligere er eksporteret fra Nibomo. Vælg ZIP-filen uden at pakke den ud. Tjek antallet af kort og mediefiler samt eventuelle advarsler i forhåndsvisningen. Bekræft derefter importen, og se de enkelte kort og mediefiler i **Bibliotek**. Denne metode kan overføre kort, tags og medier fra pakken uden at bruge AI-chatten.
