---
title: "Har Quizlet en MCP-server 2026? Vad Claude och Codex kan använda"
description: "Quizlet dokumenterar ingen MCP-server 2026. Jämför ChatGPT-appen, export som bara skaparen kan göra och en säker väg till återkommande åtkomst för Claude eller Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP-server"
  - "Quizlet-koppling till Claude"
  - "ansluta Quizlet till Claude"
  - "Quizlet Codex"
  - "Quizlets ChatGPT-app"
  - "alternativ till Quizlets API"
---

Den 12 september 2026 dokumenterar Quizlet varken en MCP-server eller ett offentligt utvecklar-API med självbetjäning i sin offentliga dokumentation. Om du letade efter en MCP-URL för Quizlet att klistra in i Claude, Codex eller någon annan MCP-klient finns det i dag inga offentliga installationsanvisningar i Quizlets dokumentation.

Quizlet har däremot en officiell app i ChatGPT. Den kan omvandla en ChatGPT-konversation till en ny Quizlet-uppsättning, men det specifika arbetsflödet är ingen återanvändbar MCP-server för Quizlet. Om du behöver ge en agent återkommande åtkomst till befintliga kort är den praktiska vägen att exportera text från en uppsättning du själv har skapat, behålla en oförändrad kopia, granska överföringen och använda ett system för flashcards som uttryckligen stöder läsning och skrivning via agenter.

**Faktakontrollerat:** 12 september 2026.

> **Upplysning:** Jag heter Kirill Markin och utvecklar Nibomo, vars MCP-server och Agent API presenteras som alternativ nedan. Nibomo kan inte ansluta till ett Quizlet-konto eller importera en Quizlet-URL.

![En trädgårdsmästare bär en ung planta från ett stängt växthus till en odlingsbädd med förgrenad droppbevattning](/blog/quizlet-mcp-server.png)

## ChatGPT-appen, export och MCP löser olika uppgifter

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) är en öppen standard för att ansluta AI-applikationer till externa system. En MCP-server ger normalt kompatibla klienter en känd anslutningspunkt och en definierad uppsättning verktyg som de kan anropa.

Quizlets [officiella tillkännagivande om ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) beskriver ett annat upplägg. Du installerar Quizlet-appen i ChatGPT, inleder en prompt med `@Quizlet`, förhandsgranskar de genererade korten i ChatGPT och öppnar sedan uppsättningen i Quizlet för att anpassa den och studera.

Det är användbart när uppgiften är att ”göra den här ChatGPT-konversationen till en Quizlet-uppsättning”. Tillkännagivandet publicerar ingen generell MCP-anslutningspunkt för Quizlet, ger inte Claude eller Codex åtkomst till ditt Quizlet-bibliotek och erbjuder inga återanvändbara autentiseringsuppgifter för utvecklare.

Detta säger ingenting om Quizlets privata eller interna infrastruktur. Det beskriver bara det gränssnitt som Quizlet gör tillgängligt i sin offentliga dokumentation. De bredare gränserna för utvecklaråtkomst behandlas i [Har Quizlet ett offentligt API 2026?](/sv/blog/quizlet-api/).

Så här skiljer sig alternativen åt:

| Vad du faktiskt vill göra | Vägen med bäst stöd i dag | Vad du kan förvänta dig |
| --- | --- | --- |
| Skapa en ny Quizlet-uppsättning från en ChatGPT-konversation | Quizlets officiella ChatGPT-app | Ett specifikt `@Quizlet`-flöde i ChatGPT, följt av redigering och studier i Quizlet |
| Flytta termer och definitioner från en uppsättning du själv har skapat | Export via Quizlets webbplats | En engångskopia i textformat som du sparar och kontrollerar |
| Låta Claude, Codex eller någon annan agent läsa eller redigera kort upprepade gånger | Ett system för flashcards med en dokumenterad MCP-server eller ett agent-API | Autentiserad åtkomst till målsystemets arbetsyta, inte till Quizlet |
| Bygga programvara som använder kontodata från Quizlet | Vänta på officiell utvecklardokumentation eller en godkänd partnerlösning | Inget offentligt API- eller MCP-kontrakt för Quizlet med självbetjäning är dokumenterat i dag |

Quizlets ChatGPT-app hanterar ett enda flöde för att skapa uppsättningar. Export hanterar en avgränsad överföring. MCP hanterar upprepad åtkomst till ett system som avsiktligt tillhandahåller verktyg. De kan inte ersätta varandra.

## Välj den kortaste vägen med officiellt stöd

Om den officiella ChatGPT-appen redan passar uppgiften, använd den. Det finns ingen anledning att lägga till ett andra system bara för att skapa en Quizlet-uppsättning från en konversation.

Om du bara behöver en säkerhetskopia eller en engångsflytt, använd Quizlets export. Om du behöver en agent som kan komma tillbaka i morgon, hitta en kortlek, lägga till kort och rätta dem behöver målsystemet ha ett dokumenterat gränssnitt för läsning och skrivning. Tills Quizlet publicerar ett sådant kan det återkommande arbetsflödet inte vara en direktanslutning till ditt Quizlet-konto med officiellt stöd.

Samma gräns gäller för anpassad programvara som byggs specifikt kring Quizlet-data. Ett webbläsaranrop, ett gammalt wrapperbibliotek eller en integration som någon har tagit fram genom baklängeskonstruktion ersätter inte aktuell utvecklardokumentation.

## Se till att en överföring av din egen uppsättning går att ångra

Quizlets [officiella exportanvisningar](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) säger att bara skaparen kan exportera en uppsättning, och bara via webbplatsen. Flödet är **Mer → Exportera → Kopiera text**. Exporten innehåller termer och definitioner. Enligt Quizlet kan bilder inte exporteras, och kopierade uppsättningar kan inte heller exporteras.

För en uppsättning du själv har skapat är en försiktig överföring enkel:

1. Använd exportfunktionen på Quizlets webbplats och klistra in resultatet i en vanlig textfil.
2. Spara en orörd UTF-8-kopia innan du ändrar avgränsare, radbrytningar eller formuleringar.
3. Redigera en kopia, inte den ursprungliga exportfilen.
4. Kontrollera ett urval från början, mitten och slutet, samt definitioner med flera rader och tecken utanför det latinska alfabetet.
5. Importera eller bifoga arbetskopian, förhandsgranska några fram- och baksidor och spara först därefter korten.
6. Behåll Quizlet-uppsättningen och originalfilen tills kortleken i målsystemet har öppnats och testats.

De fullständiga kontrollerna av avgränsare, CSV och filer finns i [Så exporterar du Quizlet-uppsättningar 2026](/sv/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Den viktiga begränsningen är lätt att missa: exporten överför kortens text, inte Quizlets bilder, mappar, studiehistorik, kunskapsnivåer eller repetitionsschema.

Därför behöver överföringen gå att ångra. Om en definition med flera rader blir två kort eller en avgränsare förskjuter fälten har du originalfilen som en oförändrad referens att jämföra med.

## Vad Claude och Codex kan använda efter exporten

Nibomo publicerar en fjärranslutningspunkt för MCP på:

`https://mcp.nibomo.com/mcp`

> [Anslut till Claude](https://claude.ai/directory/nibomo) · [Dokumentation](/sv/docs/mcp-connector/)

[Dokumentationen för MCP-kopplingen](/sv/docs/mcp-connector/) definierar åtta verktyg: `list_workspaces`, `sql_query` för läsning, `sql_execute` för skrivning, `get_guide` för referensguider samt `next_review_card`, `reveal_answer` och `submit_review` för repetitioner. I interaktiva MCP-klienter kan du godkänna åtkomsten via OAuth. Terminalagenter kan i stället börja med [dokumentationen för Agent API](/sv/docs/api/) och använda det publicerade HTTP-flödet.

`get_usage_limits` — enbart läsning av kontots abonnemang, gränser och aktuell AI-användning under månaden. Verktyget varken läser eller ändrar kort.

Detta gör inte Nibomo till en Quizlet-koppling. Arbetsflödet som stöds är att:

1. exportera text från en Quizlet-uppsättning du själv har skapat;
2. behålla originalfilen och granska en arbetskopia;
3. granska hur innehållet har fördelats på kort innan du sparar dem i Nibomo; och
4. ansluta den resulterande Nibomo-arbetsytan till en kompatibel klient för framtida läsning och skrivning.

För Claude finns anslutningsstegen i [Så ansluter du Nibomo till Claude med MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex och andra agenter kan använda den dokumenterade MCP- eller Agent API-väg som deras miljö stöder.

Nibomo kan inte läsa en Quizlet-URL, spegla ett Quizlet-konto, synkronisera senare ändringar i Quizlet eller återskapa bilder och studiehistorik som inte ingår i exporten. Det skapar egna kort och ett nytt repetitionsschema utifrån det material du väljer att ta med dig.

Om du funderar på om bytet är värt att göra av fler skäl än agentåtkomsten, se [jämförelsen med ett Quizlet-alternativ med öppen källkod](/blog/quizlet-alternative/).

## Begränsa behörigheterna till mindre än hela uppgiften

Ett offentligt gränssnittskontrakt minskar en del av gissandet vid integrationen, men gör inte varje MCP-åtgärd säker. OAuth autentiserar anslutningen. Det garanterar inte att ett AI-genererat kort är korrekt, håller inte returnerade kortdata inom tjänsten för flashcards och avgör inte om en ändring motsvarar din avsikt.

Nibomo skiljer läsåtgärder från sina skrivverktyg: `sql_execute` för kort och kortlekar, `submit_review` för repetitioner. OAuth-autentiseringsuppgiften omfattar fortfarande hela kopplingens gränssnitt, så möjligheterna att blockera verktyg och kräva godkännanden beror på klienten. Börja med en liten arbetsyta utan känsligt innehåll. Låt agenten bara läsa de data som behövs för uppgiften, kräv godkännande för varje skrivanrop när klienten stöder det och granska arbetsytan och den föreslagna ändringen innan du accepterar den.

Anslut inte privat studiematerial förrän du har kontrollerat AI-klientens villkor för datalagring och datahantering. Vid en första överföring räcker en enkel regel: behåll originalexporten, förhandsgranska några kort, godkänn en avgränsad skrivning och kontrollera resultatet i målappen innan du fortsätter.

## Gör inte privat webbläsartrafik till ett API

Ett anrop som syns i webbläsarens utvecklarverktyg är inte ett offentligt Quizlet-API. Privata anslutningspunkter kan vara beroende av sessionskakor, interna format och beteenden som ändras utan förvarning. All automatiserad användning måste också följa [Quizlets användarvillkor](https://quizlet.com/tos) och de behörigheter du har för materialet.

Den här artikeln ger inga instruktioner för webbskrapning eller anslutningspunkter som tagits fram genom baklängeskonstruktion. Om den officiella ChatGPT-appen passar uppgiften, använd den. Om du har skapat uppsättningen och behöver flytta den en gång, exportera den. Om du behöver återkommande läsning och skrivning via agenter, flytta granskat innehåll till ett system som publicerar ett sådant gränssnitt. Fortsätt sedan att hantera Quizlet-sidan manuellt tills Quizlet eventuellt dokumenterar något nytt.
