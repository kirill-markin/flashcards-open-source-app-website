---
title: "Fungerar Anki offline 2026? Dator, iPhone, Android och synkronisering"
description: "Ja – installerade Anki-appar för dator, iPhone, iPad och Android kan använda en lokal samling offline. Läs om vad som kräver internet, hur synkroniseringen fungerar efteråt och hur du förbereder mediefiler."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "fungerar Anki offline"
  - "kan man använda Anki offline"
  - "fungerar AnkiMobile offline"
  - "fungerar AnkiDroid offline"
  - "Anki synkronisering offline"
  - "AnkiWeb offline"
  - "använda Anki utan internet"
---

Anki behöver inte kontakta en server för att visa nästa kort. **De installerade Anki-apparna fungerar offline 2026:** Anki på Windows, macOS och Linux, AnkiMobile på iPhone och iPad samt AnkiDroid på Android. Varje app använder en samling som lagras på den egna enheten, så du kan repetera, skapa anteckningar och göra vanliga ändringar utan internet.

Det finns en sak som är lätt att missa: AnkiWeb fungerar annorlunda. Det är en webbläsarbaserad tjänst för studier och synkronisering, inte en Anki-app som fungerar offline. En installerad app kan dessutom bara använda de kortlekar och mediefiler som redan har överförts till just den enheten.

**Faktakontrollerad:** 16 augusti 2026.

![En fältforskare lägger till en post i ett lokalt arkiv för foton, ljud och text medan radioförbindelsen i bergen ligger nere](/blog/does-anki-work-offline.png)

## Det korta svaret för varje plattform

På [Ankis officiella webbplats](https://apps.ankiweb.net/) listas datorappen, AnkiMobile för iOS, AnkiDroid för Android och AnkiWeb som delar av samma ekosystem. Men vad som fungerar offline skiljer sig åt.

| Plattform | Fungerar den offline? | Vad du kan göra utan internet | Vad som kräver uppkoppling |
| --- | --- | --- | --- |
| **Anki på dator** med Windows, macOS eller Linux | **Ja.** Samlingen och mediemappen lagras lokalt. | Repetera kort, lägga till anteckningar, redigera anteckningarnas innehåll och använda mediefiler som redan finns på datorn. | Hämta delade kortlekar, synkronisera med AnkiWeb och hämta sådant som ett kort eller tillägg begär från en onlinetjänst. |
| **AnkiMobile** på iPhone eller iPad | **Ja.** Appen lagrar en lokal samling. | Repetera lokala kort, lägga till anteckningar, redigera anteckningarnas innehåll och spela upp ljud eller visa bilder som redan finns på enheten. | Slutföra den första synkroniseringen av samlingen och mediefilerna, använda AnkiWeb och komma åt resurser på nätet. |
| **AnkiDroid** på Android | **Ja.** AnkiDroid lagrar samlingen på Android-enheten. | Repetera lokala kort, lägga till anteckningar, redigera anteckningarnas innehåll och använda mediefiler som finns på enheten. | Synkronisera eller hämta material som saknas, hämta delade kortlekar och använda kortfunktioner som kräver nätanslutning. |
| **AnkiWeb** i en webbläsare | **Inget offlineläge.** Det är en onlinetjänst för studier och synkronisering. | Räkna inte med att kunna använda tjänsten när anslutningen försvinner. | Använda en internetanslutning eller byta till en installerad app som du har förberett i förväg. |

Du kan alltså använda Anki offline om du menar en installerad app som redan har rätt samling. AnkiWeb i webbläsaren behöver fortfarande en anslutning.

## Repetitioner och ändringar offline sparas först på den enheten

När du svarar på kort offline registrerar Anki repetitionerna i den lokala samlingen. Schemaläggningen fortsätter utifrån det lokala läget. Nya anteckningar och vanliga ändringar sparas också lokalt. Inget dyker upp på en annan enhet förrän du ansluter igen och synkroniserar.

Synkronisering med AnkiWeb är valfri om du bara studerar på en enhet. Den används för att överföra ändringar i samlingen mellan enheter. Enligt [Ankis synkroniseringsmanual](https://docs.ankiweb.net/syncing.html) kan repetitioner och redigeringar av anteckningar från flera enheter normalt slås samman. Om samma kort har repeterats på två enheter finns båda svaren kvar i repetitionshistoriken, och kortets läge bestäms av det senaste svaret.

Den här rutinen minskar onödiga synkroniseringskonflikter:

1. Synkronisera enheten innan du lämnar en plats med stabil uppkoppling.
2. Repetera, lägg till anteckningar eller rätta vanlig korttext offline.
3. Anslut igen och synkronisera den enheten innan du fortsätter på en annan.
4. Låt den andra enheten slutföra sin egen synkronisering innan du gör fler ändringar där.

Ändringar i samlingens struktur kräver mer försiktighet. Att lägga till ett fält, ta bort en kortmall, ändra anteckningstyper och göra liknande arbete kan kräva enkelriktad synkronisering i stället för en sammanslagning. Vid enkelriktad synkronisering får du välja att behålla antingen den lokala samlingen eller samlingen på AnkiWeb. Ändringarna på den andra sidan kan då skrivas över.

Fortsätt därför gärna med vanliga repetitioner och redigeringar av anteckningar under resan, men vänta med mer omfattande ändringar av anteckningstyper och mallar om flera enheter används offline och samlingarna börjar skilja sig åt. Om Anki ber dig att ladda upp eller hämta samlingen, stanna upp och ta reda på vilken samling som innehåller arbetet du vill behålla innan du väljer riktning.

## Mediefiler är lokala först när de finns på enheten

Anki lagrar ljud och bilder separat från samlingens data. Enligt [dokumentationen om mediefiler](https://docs.ankiweb.net/media.html) kopierar datorappen filer som bifogas eller klistras in i en anteckning till den lokala mappen `collection.media`. När en mediefil finns i den mappen behöver kortet ingen internetanslutning för att läsa in den.

Förberedelserna är den svaga punkten. Samlingen och mediefilerna synkroniseras separat, så ljud och bilder kan fortfarande vara på väg att överföras när korten redan visas. [AnkiMobiles synkroniseringsguide](https://docs.ankimobile.net/syncing.html) varnar för att mediefiler kan saknas tills den första synkroniseringen är helt klar. Att alla kortlekar syns i listan betyder inte att en samling med många bilder eller ljudfiler är redo.

Innan du går offline:

- synkronisera enheten där du lade till mediefilerna;
- vänta tills synkroniseringen av mediefilerna är klar;
- synkronisera enheten du ska ta med dig och vänta även där;
- öppna kort med varje typ av bild och ljud som du behöver;
- kör **Check Media** (kontrollera mediefiler) där funktionen finns för att hitta anteckningar som hänvisar till saknade filer.

Den sista kontrollen spelar roll för delade kortlekar. Ibland har kortlekens skapare aldrig bifogat en bild som ett kort hänvisar till. Då går den inte att hämta genom att synkronisera om och om igen.

Lokala mediefiler gör inte automatiskt varje kort oberoende av nätet. En kortmall kan hänvisa till en bild, ett skript, ett typsnitt eller en annan resurs som finns på webben. Onlineordböcker, hämtning av delade kortlekar och tillägg som anropar externa API:er behöver fortfarande en anslutning. Talsyntes beror på rösten och plattformen: en installerad systemröst kan fungera offline, medan en röst som tillhandahålls av en onlinetjänst inte gör det. Testa den exakta funktionen i stället för att anta att all talsyntes eller alla tillägg fungerar likadant.

## Så synkroniserar du efter att ha arbetat offline

Ankis synkronisering efter arbete offline består egentligen av två steg: lokalt arbete nu och synkronisering över nätet senare.

När anslutningen är tillbaka synkroniserar du den enhet där arbetet offline finns. Vänta tills både samlingen och mediefilerna har synkroniserats. Synkronisera sedan nästa enhet innan du repeterar eller redigerar där. Den ordningen gör det lättare att avgöra vilken samling som har det senaste läget om Anki ber dig lösa en konflikt.

Kontrollera resultatet; det räcker inte att animationen visar att synkroniseringen är klar:

- hitta en anteckning som du lade till offline;
- kontrollera att ett redigerat fält innehåller den nya texten;
- kontrollera repetitionshistoriken eller när ett kort du svarade på ska repeteras igen;
- öppna minst en nytillagd bild eller ljudfil på den andra enheten.

Om du redigerade samma anteckning på två enheter, läs den slutliga anteckningen i stället för att anta att sammanslagningen behöll formuleringen du ville ha. Om synkroniseringsknappen är röd eller du får välja mellan en fullständig uppladdning och hämtning, klicka inte vidare av gammal vana. En fullständig hämtning skriver över ändringarna i den lokala samlingen. En fullständig uppladdning ersätter samlingen på AnkiWeb, som sedan hämtas av de andra enheterna.

## Utan regelbundet internet kan du flytta samlingen som en fil

Du kan fortfarande flytta en Anki-samling mellan enheter utan regelbunden tillgång till AnkiWeb, men då lämnar du över hela samlingen. Du slår inte samman ändringar från flera enheter.

[AnkiMobiles guide för överföring av samlingar](https://docs.ankimobile.net/collection-transfer.html) använder en fil med namnet `collection.colpkg` som innehåller alla kortlekar och all schemaläggningsinformation. Du exporterar den aktuella samlingen, överför filen med AirDrop eller fildelning och importerar den på den andra enheten. [AnkiDroids manual](https://docs.ankidroid.org/manual.html) beskriver ett liknande arbetsflöde via USB för att överföra samlingen mellan Android och dator.

När du importerar en fil med en fullständig samling ersätter den samlingen som redan finns på mottagarenheten. Den kan inte slå samman två samlingar som har ändrats var för sig offline. Låt en enhet åt gången innehålla den aktuella versionen: exportera från den, importera på nästa enhet, gör dina ändringar där och överför den nyare samlingen tillbaka innan du fortsätter på den första enheten.

Det är användbart vid fältarbete, på fartyg, på avlägsna platser eller i begränsade nätverk där enstaka filöverföringar är möjliga men regelbunden molnsynkronisering inte är det. För en vanlig flygresa eller pendling är det enklare att slutföra en synkronisering med AnkiWeb före avfärd.

## Synkronisering ersätter ingen säkerhetskopia

Synkronisering håller enheterna i samma läge. En oavsiktlig radering eller oönskad ändring kan därför spridas till alla synkroniserade enheter.

Ankis installerade appar sparar lokala säkerhetskopior, men mediefilerna behöver hanteras separat. Till exempel anger [AnkiMobiles inställningsguide](https://docs.ankimobile.net/preferences.html) att de automatiska säkerhetskopiorna innehåller kort och statistik, men inte ljud eller bilder. En fullständig export av samlingen som inkluderar mediefiler fyller en annan funktion än både synkronisering och historiken över automatiska säkerhetskopior.

Om kortleken skulle vara besvärlig att återskapa, gör regelbundet en fullständig export med mediefiler och förvara den någon annanstans än på enheten du använder till vardags. Den mer övergripande [guiden till säkerhetskopiering av studiekort](/blog/how-to-back-up-flashcards/) förklarar hur du kombinerar återställningskopian med text i ett flyttbart format och de ursprungliga källfilerna.

## Ett tiominuterstest i flygplansläge

Gör testet på just den dator, telefon eller surfplatta du ska ta med dig. Ett lyckat test på datorn säger inget om vad som finns i telefonens mediemapp.

1. Öppna den installerade Anki-appen medan du är uppkopplad och synkronisera. Om enheten är ny, slutför först den första hämtningen av samlingen.
2. Vänta tills synkroniseringen av mediefilerna är klar. Sluta inte så fort namnen på kortlekarna syns.
3. Öppna varje kortlek du behöver. Testa några kort med bilder, ljud, egna typsnitt och särskilda mallfunktioner som du använder.
4. Slå på flygplansläge eller stäng av alla nätanslutningar på annat sätt.
5. Stäng Anki helt, öppna appen igen och starta kortleken du behöver. Det avslöjar ett arbetsflöde som bara fungerade för att en vy redan var öppen.
6. Repetera flera kort. Lägg till en tydligt märkt testanteckning och gör en ofarlig textändring.
7. Stäng och öppna appen igen medan du fortfarande är offline. Kontrollera att repetitionerna, den nya anteckningen, ändringen och de lokala mediefilerna finns kvar.
8. Testa varje ordbok, talsyntesröst eller tillägg du räknar med att använda. Anteckna vilka delar som behöver nätanslutning.
9. Anslut igen och synkronisera den här enheten. Vänta tills både samlingen och mediefilerna har synkroniserats.
10. Synkronisera en andra enhet och kontrollera sedan testanteckningen, ändringen, kortets repetitionsstatus och mediefilerna där innan du tar bort testinnehållet.

Använd inte testet till att göra om anteckningstyper på två enheter. Målet är att kontrollera arbetsflödet inför resan: rätt samling finns lokalt, viktiga mediefiler går att öppna, arbetet offline finns kvar efter en omstart och synkroniseringen överför det när du ansluter igen.

## Anki fungerar på resan om du förbereder enheten

Ankis installerade appar passar bra för resor när du vill ha en komplett lokal samling i stället för ett litet urval cachade kort. Begränsningarna är konkreta: enheten behöver samlingen och mediefilerna i förväg, AnkiWeb fungerar bara online och kortfunktioner som använder nätet behöver fortfarande en anslutning.

Om du väljer mellan flera verktyg för resan använder [jämförelsen av appar för studiekort offline](/blog/best-offline-flashcards-app/) samma tester av kort, redigering, framsteg, mediefiler och senare synkronisering för fem produkter. Om du funderar på att byta studieverktyg av andra skäl än uppkopplingen, se [Anki vs Nibomo](/blog/anki-vs-flashcards-open-source-app/).

Det praktiska svaret på frågan ”Fungerar Anki offline?” är ja på dator, iPhone, iPad och Android när just den enheten har samlingen och mediefilerna du behöver. Synkronisera före avfärd, testa i flygplansläge och synkronisera enheten där du arbetade offline först när du ansluter igen.
