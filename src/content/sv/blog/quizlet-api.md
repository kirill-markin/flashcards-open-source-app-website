---
title: "Har Quizlet ett publikt API 2026? Aktuell status och säkra alternativ"
description: "Har Quizlet ett API? Den 18 augusti 2026 finns inget dokumenterat publikt API som utvecklare kan få tillgång till på egen hand. Jämför alternativen som stöds."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "har Quizlet ett API"
  - "Quizlet publikt API"
  - "Quizlet API för utvecklare"
  - "alternativ till Quizlet API"
  - "automatisera flashcards"
---

Vid faktakontrollen den 18 augusti 2026 hade Quizlet varken dokumenterat ett publikt utvecklar-API som utvecklare kan få tillgång till på egen hand eller en publik utvecklarportal. Det finns ingen aktuell officiell väg för en oberoende utvecklare att registrera en app, få en Quizlet-API-nyckel och använda dokumenterade endpoints för att läsa eller skriva kortdata.

Detta är ett konstaterande om Quizlets publika dokumentation, inte ett påstående om dess interna system. Quizlet har både produkt- och partnerintegrationer. Appen i ChatGPT och tillägget för Google Classroom är två aktuella exempel. Ingen av dem öppnar ett allmänt Quizlet-API för andra applikationer.

**Faktakontrollerat:** 18 augusti 2026.

> **Intresseförklaring:** Jag heter Kirill Markin och bygger Nibomo, vars Agent API och MCP-server presenteras som alternativ nedan. Nibomo är inte kompatibelt med Quizlet och importerar inte Quizlet-set automatiskt.

![En utvecklare jämför Quizlets export, inbäddning, specifika integrationer och ett dokumenterat API för flashcards](/blog/quizlet-api.png)

## Kort svar: inget dokumenterat Quizlet-API som utvecklare kan ansluta sig till på egen hand

Om du sökte efter ”har Quizlet ett API?” för att automatisera själva Quizlet är det praktiska svaret just nu att **inget publikt API som utvecklare kan få tillgång till på egen hand är dokumenterat**.

Flera officiella funktioner kan vid första anblicken påminna om ett API. De löser mer avgränsade uppgifter:

| Vad du behöver | Väg som stöds | Passar för | Ingår inte |
|---|---|---|---|
| Flytta text från ett set du har skapat | [Export på Quizlets webbplats](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | En engångskopia av termer och definitioner | Bilder, export av kopierade set, studiehistorik eller API-åtkomst |
| Visa ett publikt set på en webbplats eller LMS-sida | [Quizlets inbäddning](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | En studieaktivitet med Quizlets varumärke på din sida | Strukturerade kortdata eller läs- och skrivåtkomst |
| Göra en ChatGPT-konversation till ett Quizlet-set | [Quizlet-appen i ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Att skapa och förhandsgranska ett set via `@Quizlet` | Inloggningsuppgifter eller endpoints för din egen app |
| Tilldela Quizlet-uppgifter i Google Classroom | [Quizlets tillägg för Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Att hitta, tilldela och följa upp aktiviteter i Classroom | Ett allmänt API för egenutvecklad utbildningsprogramvara |
| Bygga en egen Quizlet-integration | Ingen väg till åtkomst på egen hand är dokumenterad just nu | Ett avtal med en specifik partner kan finnas | Publik registrering, API-nycklar eller ett dokumenterat gränssnitt för kortdata |
| Automatisera din egen arbetsyta för flashcards | [Nibomo Agent API](/sv/docs/api/) eller [MCP-anslutning](/sv/docs/mcp-connector/) | Återkommande läsning och skrivning av kort och kortlekar inom en arbetsyta | Quizlet-kompatibilitet eller automatisk import från Quizlet |

Skillnaden är enkel: för att kopiera din egen korttext en gång behöver du export. För att visa Quizlet på en annan sida behöver du inbäddning. En specifik integration fungerar bara inom just det produktflödet. Programvara som återkommande skapar, läser och redigerar kort behöver ett dokumenterat API för läsning och skrivning.

## Export, inbäddning och partneråtkomst är inte publika API:er

Ett publikt API ger externa utvecklare ett definierat gränssnitt: dokumentation, autentisering, åtgärder som stöds, användningsregler och ett sätt att få åtkomstuppgifter. Ingen av Quizlets aktuella publika funktioner erbjuder allt detta så att utvecklare kan komma igång på egen hand.

Quizlets **export** är en manuell överföring. Den som skapade ett set kan använda webbplatsen för att ordna termerna och definitionerna, välja **Kopiera text (Copy text)** och klistra in resultatet någon annanstans. Quizlet anger att bilder inte kan exporteras, att kopierade set inte kan exporteras och att funktionen bara finns på webbplatsen. Det fungerar när du vill flytta innehåll en gång och granskar det noggrant. Det gör inte att programvara kan hålla två system synkroniserade.

**Inbäddning** handlar om visning, inte dataåtkomst. Quizlet låter dig kopiera HTML för ett publikt set i lägena Match, Learn, Test, Flashcards eller Spell. Den inbäddade aktiviteten behåller Quizlets logotyp och användarna arbetar i Quizlets gränssnitt. Din applikation får inte setet som kortposter som den kan redigera.

En **specifik integration** har ett eget överenskommet produktflöde. Quizlet kan samarbeta med ChatGPT eller Google Classroom utan att erbjuda samma gränssnitt till alla utvecklare. Lanseringarna visar att dessa integrationer finns. De visar inte att det bakom dem finns ett publikt Quizlet-API för allmän användning.

Det är också därför en gammal wrapper eller en begäran som syns i webbläsarens utvecklarverktyg inte är ett Quizlet-API som stöds. Det som saknas är publik dokumentation och ett stabilt, definierat gränssnitt för utvecklare.

## Välj den väg som passar uppgiften

### Använd export för en engångskopia eller flytt

Använd Quizlets officiella exportflöde för ett set du själv har skapat. Eftersom flödet slutar med **Kopiera text (Copy text)** bör du spara den första inklistrade kopian oförändrad innan du justerar avgränsare eller mappar fält. Du bevarar termer och definitioner, inte ett nedladdat kortlekspaket som går att återställa. Bilder och studiehistorik följer inte med.

Den praktiska checklistan finns i [Så exporterar du Quizlet-set 2026](/sv/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Den tar upp original- och arbetskopior, UTF-8, tabulatorer, definitioner med flera rader och skillnaden mellan att flytta kortinnehåll och att flytta kortens repetitionsschema och status.

Export passar för en avgränsad flytt. Det passar inte för dagligt skapande, synkronisering eller återkommande redigering från programvara.

### Använd den officiella inbäddningen för att visa ett set

Om användarna ska kunna studera ett publikt Quizlet-set på klassens webbplats eller en LMS-sida använder du inbäddningskoden som Quizlet erbjuder på sin webbplats. Välj aktivitet, välj **Kopiera HTML (Copy HTML)** och lägg in resultatet på sidan. Användarna får en interaktiv Quizlet-aktivitet. Webbplatsen får inga obearbetade kortdata.

Det är ofta allt en lärare behöver. Att kalla det ett API får bara kravet att låta mer komplicerat än det är.

### Använd den specifika integrationen för ChatGPT eller Google Classroom

Quizlets tillkännagivande om ChatGPT den 10 mars 2026 beskriver ett specifikt flöde: anslut Quizlet-appen, börja en prompt med `@Quizlet`, förhandsgranska det genererade setet i ChatGPT och öppna det sedan i Quizlet för att anpassa det och studera. Det är ett sätt som stöds för att skapa ett Quizlet-set från den konversationen. Det ger inte din bot, ditt skript eller din webbplats återanvändbara åtkomstuppgifter till Quizlets API.

Quizlets tillkännagivande om Google Classroom den 30 juni 2026 är lika avgränsat. Tillägget låter lärare hitta och tilldela aktiviteter, bland annat övningsfrågor, flashcards och spel, och sedan följa deltagande och framsteg i Classroom-flödet. Quizlet anger att Google Workspace for Education Plus krävs. Lärare kan behöva be sin IT-administratör att ge behörighet eller tillgång till tillägget.

Använd något av dessa flöden om det redan passar ditt mål. Om du behöver en egen applikation ersätter ingen av integrationerna publik utvecklaråtkomst.

### Välj ett dokumenterat gränssnitt för läsning och skrivning vid återkommande automatisering

Löpande automatisering innebär att din programvara måste kunna utföra samma arbete tillförlitligt mer än en gång: skapa kort från anteckningar, lista kortlekar, uppdatera svar eller hantera en arbetsyta över tid. En export via urklipp kan inte ge det definierade gränssnittet.

Den säkra vägen är ett system för flashcards som uttryckligen publicerar hur extern programvara autentiserar sig och vilka läs- och skrivåtgärder som stöds. Det kan innebära att du väljer ett alternativ till Quizlets API för det automatiserade flödet och fortsätter använda Quizlet för de studieuppgifter som dess publika produkt stöder.

## Vad Nibomo faktiskt erbjuder som API-alternativ

Nibomo erbjuder två dokumenterade vägar till samma begränsade uppsättning data för varje användare:

- Det [externa Agent API:et](/sv/docs/api/) börjar på `GET https://api.nibomo.com/v1/`. Svaret på detta anrop guidar en agent genom inloggning med engångskod via e-post, skapande av API-nyckel och val av arbetsyta. För att läsa data används en query-rutt med SQL-liknande syntax. För att skriva data används en separat execute-rutt.
- Den [fjärranslutna MCP-servern](/sv/docs/mcp-connector/) finns på `https://mcp.nibomo.com/mcp`. MCP-klienter får åtta verktyg: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` och repetitionsverktygen `next_review_card`, `reveal_answer` och `submit_review`.

`get_usage_limits` ger strikt skrivskyddad åtkomst till kontots abonnemang, gränser och AI-användning under den aktuella månaden. Verktyget läser eller ändrar inte kort.

Båda vägarna är avgränsade till en arbetsyta. De publicerade resurserna är `workspace`, `cards`, `decks` och `review_events`, och resultaten är begränsade till 100 rader per sats. Det SQL-liknande gränssnittet är en begränsad dialekt, inte ren PostgreSQL. Det finns inget OpenAPI-schema, så arbetsflöden som är beroende av genererade OpenAPI-klienter behöver ett annat gränssnitt.

Det kan hjälpa en utvecklare eller AI-agent att automatisera hanteringen av egna flashcards. Det kan inte läsa en Quizlet-URL, spegla ett Quizlet-konto eller fungera som en odokumenterad Quizlet-klient. Det finns ingen automatisk Quizlet-import. Vid en flytt exporterar du först termerna och definitionerna från ditt eget set, granskar texten och mappar den sedan till kortfälten i målsystemet. Målsystemet skapar sin egen repetitionsstatus. Quizlets historik följer inte med.

För produktskillnader utöver API-åtkomst, se [jämförelsen med ett Quizlet-alternativ med öppen källkod](/blog/quizlet-alternative/).

## Privata anrop från webbläsaren är ingen säker genväg

Quizlets webbgränssnitt gör nätverksanrop, precis som alla moderna webbapplikationer. Att hitta ett sådant anrop gör det inte till en endpoint som stöds för ditt program.

Privata endpoints som används av webbläsaren kan vara beroende av sessionscookies, interna format, skydd mot missbruk och antaganden kopplade till det aktuella gränssnittet. De kan ändras utan publik versionshantering eller vägledning för migrering. Dessutom förbjuder [Quizlets användarvillkor](https://quizlet.com/tos), senast uppdaterade den 28 maj 2026, skrapning och annan automatiserad extrahering samt obehörig automatiserad användning av tjänsten.

Det är en bräcklig och riskabel grund för ett personligt skript, för att inte tala om en produkt. Jag kommer inte att ge gissade endpoints eller instruktioner för reverse engineering här.

Exportera ditt eget set när du behöver flytta det en gång. Bädda in ett publikt set när användarna behöver det på en annan sida. Använd de specifika ChatGPT- eller Google Classroom-integrationerna för just de flödena. För återkommande läsningar och skrivningar väljer du programvara som dokumenterar gränssnittet för automatisering, eller håller Quizlet-delen manuell tills Quizlet publicerar ett sådant.

## Så märker du om läget förändras

Quizlet kan lansera ett utvecklarprogram efter datumet då den här artikeln faktakontrollerades. Det du ska leta efter är en officiell utvecklarportal eller dokumentation som förklarar vem som får registrera sig, hur autentiseringen fungerar, vilka åtgärder för kort som stöds och vilka användningsregler som gäller.

Ytterligare en wrapper från en tredje part skulle inte ändra svaret. Inte heller ett nytt samarbete med en specifik partner. Tills Quizlet dokumenterar hur utvecklare kan få åtkomst på egen hand bör du vara försiktig med påståenden om ett aktuellt Quizlet-API och välja den väg som stöds och passar den faktiska uppgiften.
