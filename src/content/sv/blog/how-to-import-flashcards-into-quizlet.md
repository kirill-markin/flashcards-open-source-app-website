---
title: "Så importerar du flashcards till Quizlet från Excel, Sheets eller text"
description: "Importera en ordlista med två kolumner till Quizlet, välj tabulatorer och nya rader och rätta delade definitioner, extra kort och CSV-problem före publicering."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "importera flashcards till Quizlet"
  - "Quizlet importformat"
  - "importera till Quizlet från Excel"
  - "Google Sheets till Quizlet"
  - "tabulatorseparerad import till Quizlet"
---

”Red, green, blue” ser ut som ett vanligt svar på ett flashcard. Men om du använder kommatecken för att skilja en term från dess definition gör samma kommatecken raden tvetydig. Några skiljetecken kan göra att en färdig ordlista behöver rättas till.

För att importera flashcards till Quizlet från Excel, Google Sheets eller text börjar du med två kolumner: en för termer och en för definitioner. Kopiera innehållet, klistra in det i webbplatsens importformulär och välj tabulatorer mellan fälten och nya rader mellan korten. Prova med fyra rader först, så att du kan kontrollera varje par innan du för över hela listan.

![En krukmakare parar ihop keramikkoppar med tillhörande fat i separata rader innan de flyttas till en hylla](/blog/how-to-import-flashcards-into-quizlet.png)

## Här hittar du Quizlets importformulär

Quizlet beskriver import på sin webbplats, med kommatecken, tabulatorer eller streck mellan fälten och semikolon eller nya rader mellan korten. De [officiella importinstruktionerna](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) anger följande steg:

1. Logga in och välj **Create → Flashcard set** (skapa → kortset).
2. Ange en titel, välj **Import** och klistra in texten.
3. Anpassa avgränsarinställningarna efter innehållet. Använd **Tab** (tabulator) och **New line** (ny rad) för exemplen här.
4. Välj **Import** och sedan språk för termer och definitioner.
5. Granska korten innan du väljer **Create** för att spara och publicera setet.

Instruktionerna kontrollerades den 15 september 2026. Exemplen nedan visar hur du förbereder och granskar texten; de beskriver inget test i inloggat läge.

## Börja med ett litet cellområde

I Excel eller Google Sheets lägger du en term med tillhörande definition på varje rad. Här är ett prov med fyra kort:

| Term | Definition |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopiera bara de fyra dataraderna i de två kolumnerna. Om rubrikerna finns på rad 1 markerar du **A2:B5**. Ta inte med rubrikerna i området du kopierar.

Resultatet ska bli fyra kort, med spanska termer och engelska definitioner. På det sista kortet ska ”colores primarios de la luz” hållas ihop på ena sidan och ”red, green, blue” på den andra. Kommatecknen är en del av svaret.

När du har kontrollerat exemplet kan du förbereda ditt eget kalkylblad. Arbeta i en kopia så att du har originalet kvar att jämföra med. Ta bort tomma rader och lämna anteckningar och extra kolumner utanför markeringen. Fyll i termer eller definitioner som saknas innan du kopierar.

Håll ihop de två kolumnerna när du sorterar. Om du bara sorterar termerna skiljs de från sina svar, och en import med rätt antal kort kan ändå innehålla felaktiga par.

## Textformatet använder riktiga tabulatorer

Samma fyra rader ser ut så här som tabulatorseparerad text. Mellan varje term och dess definition finns ett faktiskt tabulatortecken:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

En tabulator är ett särskilt tecken. Flera mellanslag kan se liknande ut, men de fungerar inte som tabulatoravgränsare. Att skriva tecknen `\t` infogar inte heller någon tabulator. Om det är krångligt i din textredigerare kan du lägga paren i två kolumner i ett kalkylblad och kopiera cellerna.

Varje kort ska uppta en fysisk textrad. En lång definition kan visas på två rader för att fönstret är smalt; det lägger inte till någon radbrytning i innehållet. En radbrytning som infogas inne i en kalkylbladscell gör däremot det. Ta bort sådana inbäddade radbrytningar innan du använder nya rader som avgränsare mellan korten.

Ta också bort tabulatorer inne i en term eller definition. I det här formatet hör tabulatorer bara hemma mellan de två fälten.

## Om din lista är en CSV-fil

Öppna CSV-filen i ett kalkylprogram innan du förbereder importen. En CSV-post som den här har två fält när den tolkas enligt CSV-formatets regler för citattecken:

```text
"colores primarios de la luz","red, green, blue"
```

Svaret inom citattecken innehåller kommatecken. Ett textfält som delar upp innehållet vid kommatecken är inte nödvändigtvis en CSV-läsare, så räkna inte med att citattecknen skyddar svaret där.

Kontrollera i Excel eller Google Sheets att posten upptar exakt två celler. Kopiera sedan cellerna för att få tabulatorseparerat innehåll. Om svaret har spridits över extra kolumner behöver du först rätta kalkylprogrammets inställningar för CSV-import. Om du kopierar den felaktiga raden följer felet med.

Kontrollera också värden som kalkylprogrammet kan tolka om. Om `0012` är en kod du behöver lära dig förändras kortet om koden blir `12`. Jämför identifierare, datum, citattecken och ord med accenter med originalfilen innan du kopierar området.

## När korten inte stämmer med raderna

Använd provet för att hitta den första avvikelsen. Ändra en sak i taget och jämför sedan resultatet med samma fyra källrader.

| Symtom | Troligt problem med avgränsningen | Vad du ska ändra |
| --- | --- | --- |
| Ett svar delas upp vid kommatecken | Kommatecken har valts som avgränsare mellan fälten | Förbered två kolumner och välj Tab |
| ”well-being” delas upp inne i termen | Streck har valts som avgränsare mellan fälten | Behåll bindestrecket och skilj fälten med en tabulator |
| Ett svar blir flera kort | Inbäddade radbrytningar i källan | Lägg svaret på en fysisk textrad |
| ”Term” och ”Definition” visas som ett kort | Rubrikraden har kopierats | Markera bara dataraderna |
| Båda fälten hamnar på samma sida | Mellanslag i stället för en tabulator | Kopiera ett cellområde med två kolumner |

Ett svar med ”first stage” och ”second stage” på separata rader kan till exempel bli `first stage; second stage`. Då ligger båda delarna på en rad. Behåll **New line** som avgränsare mellan korten när du använder semikolon inne i ett svar.

Om de två stegen förtjänar var sin fråga skriver du i stället två fullständiga par. [Guiden till bättre flashcards (på engelska)](/blog/how-to-make-better-flashcards/) kan hjälpa dig att avgöra det.

## Kontrollera resultatet före publicering

Granska alla fyra korten i provet. När du importerar hela listan jämför du korten med det korrigerade underlaget:

- Stämmer det totala antalet med antalet fullständiga datarader?
- Stämmer det första och sista paret, inklusive hela svaren?
- Har skiljetecken, accenter och koder bevarats oförändrade?
- Finns det tomma sidor, rubriker, dubbletter eller svar som har kopplats till fel termer?
- Är alla svar där du ändrat radbrytningarna fortfarande begripliga?

Läs flera vanliga par också, inte bara de misstänkta. Att antalet stämmer räcker inte för att upptäcka ett felaktigt svar som kopplats till en giltig term. Om något inte stämmer rättar du källan innan du upprepar importen. Spara den korrigerade filen för framtida rättelser.

## Färdiga par eller AI-genererade kort?

Quizlet beskriver också hur man skapar kort med AI-hjälp utifrån material du lägger in i sin [översikt över hur du skapar kort med AI](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Genererade formuleringar behöver en egen innehållsgranskning. För en färdig lista med termer och definitioner gör den strukturerade importen att du kan kontrollera överföringen mot de par du redan har skrivit.

Utgår du från löpande text? [Gör om dina anteckningar till flashcards (på engelska)](/blog/turn-notes-into-flashcards/) innan du förbereder importtexten. Flyttar du ett set åt andra hållet? Använd [guiden till export från Quizlet](/sv/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
