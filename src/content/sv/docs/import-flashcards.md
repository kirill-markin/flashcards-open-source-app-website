---
title: Importera flashcards till Nibomo
description: Flytta dina kort från Quizlet, Anki eller en annan app. Välj rätt exportformat och kontrollera korten innan du importerar en större samling.
---

Öppna [Nibomo](https://app.nibomo.com/?locale=sv), byt till arbetsytan där du vill ha korten och välj **Bibliotek > Importera**. Under **Från en annan app** väljer du appen du använde. Varje app har ett eget alternativ, även när flera appar använder samma filformat.

Alternativen nedan finns i webbappen. Om menyn eller källan du behöver saknas på iPhone, iPad, Mac eller Android använder du webbappen. Om du använder Nibomo som gäst på enheten loggar du först in där. Logga sedan in på samma Nibomo-konto i webbappen och välj arbetsytan där du vill ha korten innan du börjar importera.

## Välj källa

| Källa | Vad du behöver | Så importerar du |
| --- | --- | --- |
| Quizlet | Kopierad exporttext | Klistra in texten på skärmen för Quizlet-import |
| Anki | Kortlek i `.apkg` eller samling i `.colpkg` | Välj filer |
| Noji | `.csv` eller `.ofc` | Välj filer |
| Knowt | `.pdf` | Välj filer |
| RemNote | `.apkg`, `.md` eller `.txt` | Välj filer |
| Brainscape | `.csv` | Välj filer |
| StudySmarter | `.csv` | Välj filer |
| Cram | `.csv` | Välj filer |
| Mochi | `.mochi` | Välj filer |
| SuperMemo | `.xml` | Välj filer |
| AlgoApp (tidigare AnkiApp) | `.zip` eller `.xml` | Välj filer |
| Annan app | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` eller `.zip` | Välj filer under **Importera från en annan app** |
| Kalkylblad | Kopierade rader med en fram- och en baksida för varje kort | Klistra in under **Importera från ett kalkylblad** |
| Nibomo | En `flashcards.zip` som exporterats från Nibomo | Förhandsgranska under **Importera från Nibomo** |

AlgoApp kan fortfarande stå som **AnkiApp** i importmenyn. Anki har ett eget alternativ.

Om du har en äldre Excel-fil i formatet `.xls`, spara den som `.xlsx` eller `.csv` före importen. Du kan också kopiera kolumnerna med fram- och baksidor och [klistra in dem via kalkylbladsimporten](#klistra-in-från-ett-kalkylblad).

## Importera från en annan app

1. Exportera korten du vill flytta från källappen. Öppna ditt set i Quizlet, välj **Exportera** och kopiera texten. Tabb mellan term och definition och ny rad mellan korten fungerar bra.
2. Välj **Bibliotek > Importera** i Nibomo och öppna alternativet för din app. För Quizlet klistrar du in den kopierade texten. För andra källor väljer du filen eller filerna du exporterade. Om din app saknar ett eget alternativ men kan exportera i ett format som stöds, till exempel PDF, väljer du **Importera från en annan app**.
3. Välj **Starta import**. Nibomo öppnar en ny AI-chatt och skickar importbegäran med filerna eller texten du klistrade in. Det kräver internetanslutning. Varje fil får vara högst **30 MiB** vid AI-import. Om filen är större kan du prova att exportera mindre kortlekar eller set var för sig.
4. Kontrollera resultatet i **Bibliotek**. AI-chatten kan spara korten i omgångar. Om importen avbryts, kontrollera vilka kort som redan finns i Nibomo och be AI-chatten fortsätta med resten innan du gör om hela importen.

### Börja med en liten import

Behåll originalexporten och börja med en liten kortlek eller ett litet set. Jämför antalet kort och kontrollera några fram- och baksidor, taggar och bilder eller formatering som du behöver. Om du vill se ett exempel innan något sparas kan du be AI-chatten att visa ett litet urval utan att spara korten. Bifoga då exporten i en ny AI-chatt och skriv en egen begäran i stället för att välja **Starta import**.

Kort som importeras med AI räknas som nya i Nibomo. Tidigare repetitionshistorik och datum för nästa repetition följer inte med. Hur mycket av strukturen, formateringen och medierna som följer med beror på innehållet i exporten och vad AI-chatten kan läsa. Kontrollera resultatet innan du förlitar dig på det eller tar bort något i källappen.

## Klistra in från ett kalkylblad

Använd **Bibliotek > Importera > Importera från ett kalkylblad** för enkla kort med fram- och baksida. Kopiera två kolumner utan rubrikraden och klistra in dem på importskärmen. För kalkylbladsceller kan du börja med **Tabb** mellan fram- och baksida och **Ny rad** mellan korten. Byt avgränsare om texten använder andra tecken.

Förhandsgranska korten, rätta ofullständiga rader och välj de taggar du vill lägga till. Välj sedan knappen **Importera** med antalet kort för att spara dem. Kalkylbladsimporten använder ingen AI-chatt.

## Importera en ZIP-fil från Nibomo

Använd **Bibliotek > Importera > Importera från Nibomo** för en `flashcards.zip` som du har exporterat från Nibomo. Välj ZIP-filen utan att packa upp den, kontrollera korten och de refererade medierna i förhandsgranskningen och bekräfta importen. Den här vägen kan överföra kort, taggar och media i paketet. Den använder ingen AI-chatt.
