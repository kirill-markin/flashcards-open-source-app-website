---
title: "Så exporterar du Quizlet-set 2026 (och varför Export saknas)"
description: "Exportera ett Quizlet-set med de aktuella stegen på webbplatsen. Saknas Export? Kontrollera om du äger originalet, har gjort en kopia eller använder mobilappen."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "så exporterar du Quizlet"
  - "exportera flashcards från Quizlet"
  - "Quizlet exportknapp saknas"
  - "ladda ner flashcards från Quizlet"
  - "Quizlet till CSV"
  - "Quizlet till Anki"
---

Om knappen **Export** saknas i Quizlet, börja med att kontrollera två saker: skapade du originalsetet, och använder du Quizlets webbplats? Quizlet låter bara den som skapade originalet exportera ett set, och funktionen finns enbart på webbplatsen. Ett kopierat set går inte att exportera, även om kopian nu ligger i ditt bibliotek.

Om du uppfyller kraven går själva exporten snabbt: öppna setet på webbplatsen, välj **More → Export**, välj hur termer och definitioner ska ordnas och klicka på **Copy text**. Quizlet laddar inte ner någon kortleksfil. Texten kopieras till urklipp, utan bilder.

**Faktakontrollerat:** 30 augusti 2026, mot [Quizlets officiella exportinstruktioner](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![En arkivarie kontrollerar ägarbevis innan textkort i par lämnas ut, med två dokumentmappar redo och fotografier kvar bakom glas](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Ska exportknappen finnas där?

Kontrollera detta innan du försöker ladda ner flashcards från Quizlet på något annat sätt:

| Din situation | Ska Export vara tillgängligt? | Nästa steg |
| --- | --- | --- |
| Du skapade originalsetet och har öppnat det på Quizlets webbplats | Ja, enligt Quizlets hjälpsida | Följ stegen nedan |
| Du använder iOS- eller Android-appen | Nej, export finns bara på webbplatsen | Öppna Quizlet i en webbläsare och logga in |
| Du har kopierat en annan användares set | Nej, enligt Quizlet går kopierade set inte att exportera | Räkna inte med att kopian ger tillgång till Export |
| Du kan se setet men har inte skapat det | Nej, att kunna se ett set är inte samma sak som att vara dess skapare | Be skaparen om en källfil, eller bygg upp korten på nytt från material du får använda |

Om du skapade originalsetet men exportknappen i Quizlet ändå saknas, kontrollera att du är inloggad på kontot som äger det och att du har öppnat originalet, inte en kopia. Quizlets hjälpsida beskriver ingen annan exportväg. Kontakta då Quizlets support i stället för att lita på ett nedladdningsverktyg som påstår sig kunna kringgå begränsningen.

## Så exporterar du flashcards från Quizlets webbplats

För ett set som du själv har skapat:

1. Logga in på Quizlets webbplats.
2. Välj ditt bibliotek (**Your library**).
3. Välj kortset (**Flashcard sets**).
4. Öppna setet du vill exportera.
5. Öppna menyn **More**.
6. Välj **Export**.
7. Välj hur termer och definitioner ska ordnas.
8. Välj **Copy text**.
9. Klistra in resultatet i en textredigerare för ren text.

Det är alla steg som behövs i dag. Det finns ingen avslutande knapp för att ladda ner filen.

För vanliga kort med fram- och baksida rekommenderar jag en tabulator mellan term och definition och en ny rad mellan korten. Det valet av avgränsare är ett praktiskt råd, inte ett krav från Quizlet. Tabulatorer är oftast enklare att kontrollera än kommatecken, eftersom kommatecken ofta förekommer i själva definitionerna.

En korrekt fil med två kort skulle se ut så här, med en tabulator mitt på varje rad:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Vad följer med i exporten från Quizlet?

Quizlet beskriver funktionen snävt: den exporterar **termer och definitioner** från ett set som användaren själv har skapat. Quizlet anger också att bilder inte går att exportera.

Utgå från det inklistrade resultatet när du bedömer vad som följer med. Text, avgränsare och radbrytningar som finns där kan du bevara i en fil. Quizlets hjälpsida lovar inte att mappar, studielägen, formatering, inlärningsstatus, repetitionshistorik eller schemaläggning följer med.

Du får alltså en kopia av kortens text, inte en Quizlet-säkerhetskopia som går att återställa. Samma skillnad gäller om du sökte efter ”ladda ner flashcards från Quizlet”: Quizlet kopierar text till urklipp, och du skapar filen själv.

## Spara en orörd UTF-8-kopia innan du börjar städa

Se till att du kan backa dina ändringar:

1. Klistra in exporten i en textredigerare för ren text.
2. Spara den som UTF-8, till exempel `biology-quizlet-raw.txt`.
3. Gör en kopia med namnet `biology-quizlet-working.txt`.
4. Låt originalfilen vara och redigera bara arbetskopian.

Kontrollera arbetsfilen innan du importerar den, medan Quizlet-setet fortfarande är öppet:

- Slå på visning av blanktecken och kontrollera var tabulatorer och radbrytningar finns.
- Sök efter den valda avgränsaren inne i termer och definitioner. En extra tabulator kan skapa ett oväntat tredje fält.
- Leta efter definitioner som innehåller egna radbrytningar. De kan misstas för extra kort.
- Jämför början, mitten och slutet av filen med Quizlet, även de längsta definitionerna.
- Stäng och öppna filen igen. Kontrollera sedan accenter, andra skriftsystem än det latinska, symboler och typografiska citattecken och apostrofer.
- Markera tomma fält, dubbletter och avvikande rader i stället för att rätta dem på chans utan att dokumentera ändringarna.

Jämför antalet rader med antalet kort bara om varje kort tar upp exakt en rad. Definitioner som sträcker sig över flera rader gör den genvägen opålitlig.

Behåll originalfilen även när arbetskopian ser bra ut. Om en import förskjuter ett fält eller tappar innehåll har du fortfarande en oförändrad fil att jämföra med.

## Quizlet till CSV: skapa filen på rätt sätt

Att byta filändelse från `.txt` till `.csv` konverterar inte filen. CSV kräver konsekventa avgränsare och korrekt hantering av citattecken i fält som innehåller kommatecken, citattecken eller flera rader.

Så skapar du en CSV-fil från Quizlet utan att tappa kontrollen över innehållet:

1. Låt säkerhetskopian med originaltexten vara orörd.
2. Öppna arbetskopian i ett kalkylprogram och välj exakt den avgränsare du använde i Quizlet.
3. Kontrollera att varje förväntad post har två kolumner: term och definition.
4. Granska citattecken, avgränsare och definitioner med flera rader.
5. Exportera som CSV med UTF-8-kodning.
6. Öppna CSV-filen i en ny förhandsvisning innan du använder den någon annanstans.

Ett kalkylprogram kan lägga till de citattecken som CSV kräver. Att ersätta alla tabulatorer med kommatecken ger inte ett tillförlitligt resultat.

## Använd texten som underlag för granskade kortutkast i Nibomo

[Nibomo](/sv/features/) har ingen direktimport från Quizlet. I Nibomos onlinetjänst används bifogade TXT- eller CSV-filer för att skapa kortutkast med AI-hjälp. Det är inte en migrering där allt innehåll garanterat följer med oförändrat.

1. Behåll den orörda Quizlet-filen utanför appen.
2. Bifoga den städade TXT-filen eller den korrekt förberedda CSV-filen i Nibomos AI-chatt.
3. Berätta för assistenten vilka avgränsare och fält filen använder.
4. Be om en liten förhandsvisning och säg uttryckligen att inga kort ska sparas ännu.
5. Jämför det föreslagna antalet kort samt deras fram- och baksidor med arbetsfilen.
6. Spara bara de kort du har granskat.

[Kom igång-guiden](/docs/getting-started/) beskriver AI-chatt med arbetsytans data och bifogade filer. En försiktigt formulerad instruktion kan se ut så här:

> Läs den här filen som tabulatorseparerade par av termer och definitioner. Spara inga kort ännu. Skapa ett litet urval av utkast, behåll källans formuleringar och tecken från andra skriftsystem än det latinska, och lista felaktiga, tomma eller tvetydiga rader separat i stället för att gissa.

Det här kan vara användbart när de gamla korten också behöver städas. Det bevisar inte att varje rad överfördes korrekt. Använd checklistan i [Så rättar du AI-genererade flashcards](/blog/how-to-fix-ai-flashcards/) och testa sedan en liten kortlek innan du skapar resten.

Kort som skapas i Nibomo börjar med en ny inlärningshistorik. Texten från Quizlet innehåller inte den historik över repetitioner eller de uppgifter om schemaläggning som behövs för att fortsätta den gamla repetitionskön.

> **Om min koppling till Nibomo:** Jag utvecklar Nibomo. Det här arbetsflödet beskriver produktens nuvarande begränsningar och innebär inget löfte om fullständig kompatibilitet med Quizlet.

## Quizlet till Anki: använd Ankis textimport

Ankis [officiella handbok för textimport](https://docs.ankiweb.net/importing/text-files.html) beskriver stöd för rena textfiler i UTF-8 med fält separerade av kommatecken, semikolon eller tabulatorer.

För en tabulatorseparerad arbetskopia:

1. Öppna importfunktionen i Anki och välj textfilen i UTF-8.
2. Kontrollera i förhandsvisningen att Anki har identifierat tabulatorn. Ändra inställningen för avgränsare om det inte stämmer.
3. Välj anteckningstyp och den kortlek som ska ta emot korten.
4. Koppla det första fältet till framsidan och det andra till baksidan.
5. Leta efter tomma, förskjutna eller extra fält i förhandsvisningen.
6. Granska inställningen för dubbletter och uppdateringar före importen.

Anki avgör det förväntade antalet fält utifrån den första raden som inte är en kommentar. I senare poster blir saknade fält tomma, och extra fält importeras inte. Därför är förhandsvisningen viktig, särskilt när en enda avgränsare på fel plats kan ändra hur en rad delas upp.

Du behöver också välja hur definitioner med flera rader ska hanteras. Anki stöder fält inom citattecken som sträcker sig över flera rader. Alternativt kan Anki tolka `<br>` som en radbrytning om inställningen för att tillåta HTML i fält (**Allow HTML in fields**) är aktiverad. Använd en av metoderna och granska ett kopierat urval innan du importerar hela filen.

Som standard kan Anki matcha en befintlig anteckning av samma typ med hjälp av dess första fält och uppdatera de andra fälten. Importinställningarna kan i stället ignorera dubbletter eller lägga till dem som nya anteckningar. En uppdatering av en befintlig Anki-anteckning kan bevara dess schemaläggning i Anki, men ingen schemaläggning från Quizlet följer med i textfilen.

## Behåll originalet tills den nya kortleken fungerar

Quizlets officiella exportväg slutar vid **Copy text** och gäller set som du själv har skapat och öppnar på webbplatsen. Skrapningsskript, gissade privata API-anrop och nedladdningsverktyg från tredje part är separata arbetsflöden som saknar officiellt stöd. De gör inte ett kopierat set, eller ett set som du bara kan se, till en officiell export.

Om du behöver återkommande automatisering i stället för en engångskopia beskriver [Quizlet-API:ets aktuella status](/blog/quizlet-api/) vad som stöds. Om setet inte är ditt, be skaparen om en källfil eller bygg upp en mindre kortlek från dina egna anteckningar. [Så gör du bättre flashcards](/blog/how-to-make-better-flashcards/) kan hjälpa dig att förbättra korten när du bygger upp dem igen, i stället för att kopiera varje gammal rad.

Radera inte originalsetet i Quizlet förrän:

- den orörda UTF-8-filen har sparats på en plats som säkerhetskopieras;
- arbetsfilen går att öppna igen med rätt tecken och avgränsare;
- fält med flera rader, tomma fält, dubbletter och avvikande rader har kontrollerats;
- viktig information som bilder bidrog med har återskapats från en källa du får använda; och
- ett litet test har gett rätt fram- och baksidor i målappen.

Behåll den orörda textfilen även efteråt. Den är enklast att använda som oberoende referens om en senare import ser fel ut. Om du fortfarande funderar på vart korten ska flyttas tar [jämförelsen av Quizlet-alternativ](/blog/quizlet-alternative/) upp fler för- och nackdelar att väga in.
