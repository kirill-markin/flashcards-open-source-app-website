---
title: "Recension av Gizmo Flashcards (2026): gränser i gratisversionen, Magic Import och alternativ"
description: "Källgranskad recension av Gizmo Flashcards: väntetiden för Magic Import i gratisversionen, AI Tutor, korttyper, export, vad som är känt om offlinebruk och ett praktiskt alternativ."
date: "2026-08-03"
updated: "2026-09-01"
image: "/blog/gizmo-alternative-v2.png"
keywords:
  - "Gizmo flashcards"
  - "Gizmo flashcards recension"
  - "Gizmo AI recension"
  - "är Gizmo gratis"
  - "Gizmo Magic Import gräns"
  - "alternativ till Gizmo"
  - "Gizmo export"
---

Om du vill importera en hel veckas anteckningar till Gizmo gratis är det **20 minuter** du behöver hålla reda på. Den nuvarande gränsen för Gizmo Magic Import är 20 minuters väntan mellan importer, inte en fast daglig kvot. Gizmo Unlimited tar bort väntetiden.

Den här recensionen av Gizmo Flashcards bygger på aktuella officiella hjälpsidor. Jag har inte testat Gizmo själv, så jag håller mig till det Gizmo dokumenterar och anger tydligt var underlaget är osäkert.

> **Om författaren:** Jag heter Kirill Markin och bygger [Nibomo](https://nibomo.com/sv/), alternativet som jämförs nedan. Gizmo har ett bredare dokumenterat arbetsflöde: fler källformat, fem korttyper, lektioner med AI Tutor, varierade quiz och framsteg som i ett spel. Nibomo har medvetet ett smalare fokus.

**Fakta kontrollerade:** 1 september 2026.

![Recension av Gizmo Flashcards som visar Magic Import, korttyper och ett alternativt sätt att plugga](/blog/gizmo-alternative-v2.png)

## Är Gizmo gratis?

Ja. Gizmo har en gratisversion. De begränsningar som just nu mest sannolikt kan avbryta ett studiepass är:

- [Magic Import](https://help.gizmo.ai/en/articles/15647624-what-is-magic-import) kräver att gratisanvändare väntar 20 minuter mellan importer. Unlimited tar bort väntetiden.
- [AI Tutor](https://help.gizmo.ai/en/articles/15869958-how-many-ai-tutor-sessions-can-i-have-for-free) tillåter fem gratispass per kalenderdag. Räknaren nollställs varje dag, och Unlimited tar bort det dagliga taket för antal pass.
- [Hearts](https://help.gizmo.ai/en/articles/15623061-what-are-hearts) används i Memorise: du börjar med 15, förlorar ett efter ett felaktigt svar och måste vänta 10 minuter innan du kan göra quiz igen om de tar slut. Enligt Gizmo används inga Hearts i frågestilen med enbart Flashcards.
- [Hints](https://help.gizmo.ai/en/articles/15504721-what-are-hints) visar svarets första bokstav eller tar bort ett felaktigt alternativ i en flervalsfråga. Gratisanvändare köper dem med Coins som de tjänar genom quiz; Unlimited ger obegränsat med Hints och Hearts.

Hur många gånger får du då använda Magic Import i gratisversionen av Gizmo? Det officiella svaret är en väntetid snarare än ett antal. Dokumentationen anger 20 minuters väntan; den lovar inte ett visst antal lyckade importer per dag.

## Vad Gizmo Flashcards faktiskt gör

Gizmo utgår från material du redan har. Magic Import gör kort av materialet, Memorise förhör dig på korten och AI Tutor kan undervisa utifrån källan. XP, Levels, Leagues och Streaks låter dig också följa dina framsteg medan du pluggar, enligt Gizmos [officiella produktöversikt](https://help.gizmo.ai/en/articles/14472668-how-does-gizmo-work).

Den särskilda guiden för Magic Import listar nio källor som kan användas för att skapa kort:

- PDF;
- en föreläsning eller lektion inspelad i appen;
- inklistrade anteckningar;
- foton av anteckningar eller en whiteboard;
- PowerPoint;
- Quizlet;
- Anki;
- ett kalkylblad eller en CSV-fil;
- en webbadress.

Gizmo genererar kort och markerar de ord som ska testas. Appens egen guide uppmanar studenter att granska kortleken och lägga till sådant som importen missade. Jag skulle se det som en del av arbetsflödet: jämför korten med källan, ta bort svaga frågor och rätta fel innan kortleken börjar användas för regelbunden repetition. [Så rättar du AI-genererade flashcards](/blog/how-to-fix-ai-flashcards/) innehåller en praktisk checklista för den genomgången.

AI Tutor har ett liknande importflöde. Den [officiella guiden för lektionsimport](https://help.gizmo.ai/en/articles/15935404-how-do-i-use-magic-import-to-start-an-ai-tutor-lesson) listar PDF, PowerPoint, YouTube, anteckningar, foton, inspelade föreläsningar, Quizlet-set och en befintlig Gizmo-kortlek. Tutor undervisar sedan utifrån materialet och ställer frågor längs vägen.

De två listorna över källor skiljer sig åt. Anki, kalkylblad och webbplatser finns i guiden för att skapa kort; YouTube och befintliga Gizmo-kortlekar finns i guiden för Tutor-lektioner. Kontrollera det importflöde du faktiskt behöver i stället för att utgå från att båda menyerna erbjuder samma val.

## Gizmo har fem korttyper

Gizmos nuvarande [dokumentation om korttyper](https://help.gizmo.ai/en/articles/16527223-what-types-of-flashcards-can-i-make) listar fem format:

| Korttyp | Vad den testar | Hur den kan skapas |
| --- | --- | --- |
| **Card text** | Text eller LaTeX, där markerade ord testas i quizet; du kan också välja att visa fram- och baksidan som på ett vanligt kort | Manuellt eller med Magic Import |
| **Multiple choice** | En fråga med genererade svarsalternativ; du kan lägga till felaktiga alternativ när du redigerar | Manuellt eller med Magic Import |
| **Matching** | Par som Gizmo blandar och som du ska para ihop igen | Endast med Magic Import |
| **Ordering** | Delar som Gizmo blandar och som du ska ordna i rätt följd | Endast med Magic Import |
| **True/False** | Ett påstående som du bedömer som sant eller falskt | Manuellt eller med Magic Import |

Det här är bredare än en enkel kortlek med fram- och baksidor, och Magic Import är mer än en genväg: Matching och Ordering kan för närvarande bara skapas med Magic Import.

En motsägelse i dokumentationen bör lyftas fram. Sidan om korttyper säger att Card text kan innehålla bilder på både fram- och baksidan. Gizmos [guide för korthantering](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards) säger att foton och bilder bara kan läggas till på framsidan. Om bilder på baksidan är viktiga för dig bör du kontrollera den aktuella redigeraren innan du bygger kortleken. De två officiella sidorna ger inget underlag för ett säkrare svar.

Gizmo påpekar också att quizinställningarna påverkar vilka frågestilar du får se. Kortets lagrade format och hur ett quiz testar innehållet hänger ihop, men är inte samma sak.

## Pluggandet omfattar mer än kort

Memorise är huvudläget för kortrepetition. Gizmo markerar nyckelord, förhör dig på dem och använder intervallrepetition för att återkomma till korten över tid. Magic Import väljer markeringarna automatiskt, men du kan ändra dem.

AI Tutor fyller en annan funktion. Den kan gå igenom materialet steg för steg, generera anteckningar och ställa frågor utifrån källan. Det är användbart när du har en föreläsning eller ett dokument men ännu inte har bestämt vad som ska bli ett kort värt att behålla.

Runt båda lägena gör Gizmo framstegen till ett spel. Quiz bidrar till XP, Levels, Leagues och Streaks, medan Hearts, Hints och Coins påverkar hur gratispassen fungerar. Om de mekanismerna gör det lättare att komma tillbaka varje dag är de en verklig del av produktvalet.

En kort fråga som kräver att du minns ett svar och en övningsfråga med flera steg fyller dock olika funktioner. [Flashcards jämfört med övningsprov](/blog/flashcards-vs-practice-tests/) förklarar varför det oftast är mer användbart att kombinera dem än att pressa in varje ämne i ett kort.

## Fyra begränsningar att kontrollera innan du lägger in en kurs i Gizmo

### Genererade kort behöver fortfarande granskas

Gizmo rekommenderar uttryckligen att du granskar kortleken efter Magic Import och föreslår att stora dokument delas upp i mindre avsnitt. Den praktiska ordningen är enkel: importera ett avgränsat avsnitt, jämför resultatet med källan, rätta eller ta bort svaga kort och börja sedan repetera. Genereringen sparar skrivarbete; granskningen behövs fortfarande.

### Det är lättare att redigera utanför Memorise

Gizmos [guide för korthantering](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards) säger att du kan redigera texten på fram- och baksidan, formatera texten, lägga till bilder på framsidan, ändra flervalsalternativ, flytta kort och ta bort dem.

Begränsningen märks i Memorise: du kan ta bort ett kort där, men för närvarande inte redigera det mitt under ett quiz. Om du upptäcker ett felaktigt svar medan du pluggar behöver du lämna quizet för att rätta det.

### Det går inte att exportera från Gizmo

Samma officiella guide säger att kortexport ännu inte är tillgänglig. Gizmos [guide för hantering av kortlekar](https://help.gizmo.ai/en/articles/12995587-how-do-i-make-changes-to-my-decks) säger att det inte heller går att exportera kortlekar.

Det här är den tydligaste begränsningen för kontrollen över dina data i det nuvarande arbetsflödet. Gizmo tar emot material från flera andra system, men erbjuder för närvarande inget dokumenterat sätt att få ut de resulterande korten igen. Om möjligheten att byta app senare är viktig bör du bedöma produkten utifrån den begränsning som finns idag, snarare än möjligheten till en framtida exportfunktion.

### Dokumentationen ger inget tydligt löfte om offlinebruk

Jag hittade ingen officiell hjälpartikel från Gizmo som lovar ett offlineläge, att ändringar sparas lokalt först eller en viss synkprocess när anslutningen återkommer. Produktsidorna och sökningarna i hjälpcentret som kontrollerades för den här recensionen klargör inte hur det fungerar.

Det bevisar **inte** att Gizmo inte kan fungera offline. Det betyder att det officiella underlag som granskats här inte räcker för att lova att det fungerar. Om du behöver plugga offline bör du testa just den app och enhet du ska använda i flygplansläge: stäng och öppna appen igen, repetera ett kort, gör en ändring, anslut igen och kontrollera att både ändringen och repetitionshistoriken finns kvar.

Skillnaden spelar roll eftersom ”en redan laddad vy reagerar fortfarande” och ”min repetitionshistorik sparas säkert och synkas senare” är olika påståenden. [Guiden till flashcard-appar för offlinebruk](/blog/best-offline-flashcards-app/) använder det striktare testet för flera produkter.

## Gizmo och Nibomo i korthet

| Vad du väljer utifrån | Gizmo | Nibomo |
| --- | --- | --- |
| Huvudsaklig utgångspunkt | Manuella kort eller Magic Import från olika slags studiematerial | Fokuserade kort med fram- och baksida, skapade manuellt eller med AI-stöd |
| Kortformat | Card text, Multiple choice, Matching, Ordering och True/False | Kort med fram- och baksida |
| Undervisning utöver kortleken | AI Tutor-lektioner, anteckningar och frågor utifrån källan | AI-stöd för att skapa kort; inget Tutor-lektionsläge dokumenteras på de aktuella produktsidorna |
| Repetitionssätt | Memorise, intervallrepetition och varierade frågestilar | Intervallrepetition med FSRS |
| Motivation | XP, Levels, Leagues, Streaks, Hearts, Hints och Coins | Inga motsvarande spelmekanismer dokumenteras på de aktuella produktsidorna |
| Underlag för offlinebruk | Ingen officiell offlinegaranti hittades i den granskade dokumentationen | Plugg offline i mobilen och automatisk synk är dokumenterade funktioner |
| Att få ut sina data | Kort och kortlekar kan för närvarande inte exporteras | Exporter som kan flyttas mellan installationer innehåller kort, taggar och tillhörande media |
| Kontroll över driften | Inget påstående om drift på egen server på de granskade officiella sidorna | Öppen källkod och möjligt att köra på egen server |

Nibomo är ett praktiskt alternativ till Gizmo för det mer avgränsade sätt att studera som tabellen visar. Den aktuella [funktionssidan](/sv/features/) dokumenterar FSRS, AI-stöd för att skapa kort, plugg offline i mobilen med synk, export som kan flyttas mellan installationer och drift på egen server. Den beskriver ingen motsvarighet till Gizmos Magic Import med fem kortformat, Tutor-lektioner eller spelmekanismer.

## När Nibomo passar bättre

Välj Nibomo när det du vill behålla är ett granskat kort med fram- och baksida. Du kan skapa det manuellt eller be AI om hjälp att skriva och förbättra det, och sedan bestämma vad som sparas. Repetitionerna använder FSRS; [FSRS jämfört med SM-2](/blog/fsrs-vs-sm-2/) förklarar schemaläggningsmodellen mer ingående.

Påståendena om offlinebruk och möjligheten att få ut sina data är tydligare. Nibomo dokumenterar plugg offline i mobilen med automatisk synk, och [kom igång-guiden](/sv/docs/getting-started/) anger att iOS-klienten använder en lokal SQLite-databas och synk som är byggd för offlinebruk från början. Exporterna innehåller kort, taggar och tillhörande media, och kan även användas för överföring mellan den molndrivna tjänsten och installationer på egen server.

Avvägningen gäller omfattningen. De aktuella Nibomo-sidorna dokumenterar inte Gizmos importmeny, fem korttyper, Tutor-ledda lektioner eller belöningssystem. Om det är de funktionerna som löser problemet du kom hit för är Gizmo förmodligen ett bättre val.

## Kan du flytta från Gizmo till en annan app?

Det finns inget smidigt sätt idag. Eftersom Gizmo saknar export går det inte att göra en vanlig filbaserad överföring från Gizmo till Nibomo eller någon annan app.

Den säkra omvägen är manuell och selektiv:

1. Ha den ursprungliga föreläsningen, anteckningarna, presentationen eller den andra källan bredvid dig.
2. Återskapa bara de kort som fortfarande är korrekta och användbara.
3. Skriv om otydliga frågor i stället för att kopiera alla genererade kort.
4. Räkna med att Gizmos markeringar, Tutor-kontext, schemaläggningshistorik, XP och andra framsteg stannar kvar där.

Det går långsammare än med en importfunktion och allt följer inte med. Den användbara bieffekten är att du bara tar med kort som klarar en kvalitetsgranskning.

Ett annat alternativ är att använda båda apparna. Gizmo kan hjälpa dig att reda ut en föreläsning eller presentation och ge varierad övning. Nibomo kan innehålla en mindre uppsättning granskade kort med fram- och baksida för repetition med FSRS. Kopplingen mellan dem är fortfarande manuell eftersom Gizmo inte exporterar korten.

## Vilket arbetsflöde passar dig?

Välj Gizmo när du börjar med rörigt källmaterial och vill att appen hjälper dig att få struktur på pluggandet. De dokumenterade styrkorna är många möjliga källformat, fem korttyper, Tutor-ledda studier, varierade quiz och spelmekanismer som låter dig följa dina framsteg.

Välj Nibomo när du redan vet vad du vill spara som ett kort med fram- och baksida, och prioriterar FSRS, dokumenterat plugg offline i mobilen, export eller drift på egen server framför varierade quiz och belöningar.

En användbar recension av Gizmo AI behöver gå längre än ”AI eller ingen AI”. Båda produkterna använder AI. Skillnaden ligger i vilken roll den har. Gizmo använder AI för att omvandla brett material till en större studiemiljö. Nibomo använder AI i ett mindre arbetsflöde för kort där du väljer vad som sparas och schemaläggs för repetition.

Om det smalare arbetsflödet passar dig bättre kan du utforska [Nibomos funktioner](/sv/features/) eller följa [kom igång-guiden](/sv/docs/getting-started/).
