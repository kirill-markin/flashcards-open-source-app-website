---
title: "Har Quizlet et offentligt API i 2026? Aktuel status og sikre alternativer"
description: "Har Quizlet et API? Pr. 18. august 2026 findes der intet dokumenteret offentligt API med selvbetjent adgang. Sammenlign de understøttede alternativer."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "har Quizlet et API"
  - "Quizlet offentligt API"
  - "Quizlet udvikler-API"
  - "alternativ til Quizlet API"
  - "automatiser flashcards"
---

Pr. 18. august 2026 har Quizlet ingen dokumentation for et offentligt udvikler-API med selvbetjent adgang eller en offentlig udviklerportal. En uafhængig udvikler har i øjeblikket ingen officiel mulighed for at registrere en app, få en Quizlet API-nøgle og bruge dokumenterede endpoints til at læse eller skrive flashcard-data.

Det er en konklusion om Quizlets offentlige dokumentation, ikke en påstand om virksomhedens interne systemer. Quizlet har tydeligvis produkt- og partnerintegrationer. Appen i ChatGPT og tilføjelsesprogrammet til Google Classroom er to aktuelle eksempler. Ingen af dem giver andre applikationer adgang til et generelt Quizlet-udvikler-API.

**Fakta kontrolleret:** 18. august 2026.

> **Til orientering:** Jeg hedder Kirill Markin og udvikler Nibomo, hvis Agent API og MCP-server beskrives som alternativer nedenfor. Nibomo er ikke kompatibelt med Quizlet og importerer ikke automatisk Quizlet-sæt.

![Udvikler sammenligner Quizlet-eksport, indlejring, specifikke integrationer og et dokumenteret flashcard-API](/blog/quizlet-api.png)

## Kort svar: Intet dokumenteret Quizlet-API med selvbetjent adgang

Hvis du søgte efter »har Quizlet et API?«, fordi du vil automatisere selve Quizlet, er det praktiske svar i øjeblikket, at **der ikke er dokumenteret et offentligt API med selvbetjent adgang**.

Flere officielle funktioner kan ved første øjekast ligne API-adgang. De løser mere afgrænsede opgaver:

| Dit behov | Understøttet mulighed | Velegnet til | Giver ikke adgang til |
|---|---|---|---|
| Flytte tekst fra et sæt, du selv har oprettet | [Eksport på Quizlets hjemmeside](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | En engangskopi af termer og definitioner | Billeder, eksport af kopierede sæt, læringshistorik eller API-adgang |
| Vise et offentligt sæt på en hjemmeside eller LMS-side | [Quizlet-indlejring](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | En Quizlet-læringsaktivitet med Quizlets branding på din side | Strukturerede kortdata eller læse- og skriveadgang |
| Omdanne en ChatGPT-samtale til et Quizlet-sæt | [Quizlet-appen i ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | At oprette og forhåndsvise et sæt via `@Quizlet` | Loginoplysninger eller endpoints til din egen app |
| Tildele Quizlet-opgaver i Google Classroom | [Quizlets tilføjelsesprogram til Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | At finde, tildele og følge aktiviteter i Classroom | Et generelt API til specialudviklet undervisningssoftware |
| Bygge din egen Quizlet-integration | Ingen selvbetjent adgang er dokumenteret i øjeblikket | Der kan findes en aftale med en specifik partner | Offentlig tilmelding, API-nøgler eller en dokumenteret specifikation for kortdata |
| Automatisere dit eget arbejdsområde med flashcards | [Nibomo Agent API](/da/docs/api/) eller [MCP-connector](/da/docs/mcp-connector/) | Gentagen læsning og skrivning af kort og kortsæt inden for et arbejdsområde | Quizlet-kompatibilitet eller automatisk Quizlet-import |

Forskellen er enkel: At kopiere din egen korttekst én gang er en eksportopgave. At vise Quizlet på en anden side er en indlejringsopgave. En specifik integration fungerer kun i det pågældende produktforløb. Software, der løbende opretter, læser og redigerer kort, kræver et dokumenteret API med læse- og skriveadgang.

## Eksport, indlejring og partneradgang er ikke offentlige API'er

Et offentligt API giver eksterne udviklere et klart grundlag at arbejde ud fra: dokumentation, autentificering, understøttede operationer, brugsregler og en måde at få adgangsoplysninger på. Ingen af Quizlets nuværende offentligt tilgængelige muligheder giver hele dette forløb med selvbetjent adgang.

Quizlets **eksport** er en manuel overførsel. Den, der har oprettet et sæt, kan på hjemmesiden vælge formatet for termer og definitioner, vælge **Kopiér tekst (Copy text)** og indsætte resultatet et andet sted. Quizlet oplyser, at billeder ikke kan eksporteres, at kopierede sæt ikke kan eksporteres, og at funktionen kun findes på hjemmesiden. Det fungerer til en engangsflytning, hvor du gennemgår indholdet omhyggeligt. Det giver ikke software mulighed for at holde to systemer synkroniseret.

**Indlejring** handler om at vise indhold, ikke om dataadgang. Quizlet lader dig kopiere HTML til et offentligt sæt i tilstandene Match, Learn, Test, Flashcards eller Spell. Den indlejrede aktivitet beholder Quizlet-logoet, og brugerne øver sig i Quizlets grænseflade. Din applikation modtager ikke sættet som kortdata, den kan redigere.

En **specifik integration** har sit eget aftalte produktforløb. Quizlet kan samarbejde med ChatGPT eller Google Classroom uden at tilbyde samme grænseflade til alle udviklere. Lanceringerne dokumenterer, at de pågældende integrationer findes; de dokumenterer ikke, at der bag dem findes et offentligt Quizlet-API til generel brug.

Derfor er en gammel wrapper eller en forespørgsel, der kan ses i browserens udviklerværktøjer, heller ikke et understøttet Quizlet-API. Det, der mangler, er offentlig dokumentation og en stabil specifikation, som udviklere kan arbejde ud fra.

## Vælg den mulighed, der passer til opgaven

### Brug eksport til en enkelt sikkerhedskopi eller flytning

Brug Quizlets officielle eksportforløb til et sæt, du selv har oprettet. Da forløbet slutter med **Kopiér tekst (Copy text)**, skal du gemme den første indsatte kopi uændret, før du rydder op i skilletegn eller knytter indholdet til felter. Du bevarer termer og definitioner; du downloader ikke en pakke med et kortsæt, der kan gendannes. Billeder og læringshistorik følger ikke med.

Den praktiske tjekliste findes i [Sådan eksporterer du Quizlet-sæt i 2026](/da/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Den gennemgår uændrede kopier og arbejdskopier, UTF-8, tabulatorer, definitioner over flere linjer og forskellen på at flytte kortindhold og at flytte oplysninger om repetitionsplanen.

Eksport passer til en afgrænset flytning. Den passer ikke til daglig oprettelse, synkronisering eller gentagne redigeringer fra software.

### Brug officiel indlejring til at vise indhold

Hvis brugerne skal øve sig med et offentligt Quizlet-sæt på en klasses hjemmeside eller en LMS-side, skal du bruge den indlejringskode, Quizlet tilbyder på sin hjemmeside. Vælg aktiviteten, vælg **Kopiér HTML (Copy HTML)**, og føj resultatet til siden. Brugerne får en interaktiv Quizlet-aktivitet; hjemmesiden modtager ingen rå kortdata.

Det er ofte alt, en lærer har brug for. At kalde det et API får blot behovet til at lyde mere kompliceret, end det er.

### Brug den specifikke integration til ChatGPT eller Google Classroom

Quizlets meddelelse om ChatGPT-integrationen den 10. marts 2026 beskriver et bestemt forløb: Tilslut Quizlet-appen, start en prompt med `@Quizlet`, forhåndsvis det genererede sæt i ChatGPT, og åbn det derefter i Quizlet for at tilpasse det og øve dig. Det er en understøttet måde at oprette et Quizlet-sæt ud fra samtalen på. Det giver ikke din bot, dit script eller din hjemmeside genanvendelige adgangsoplysninger til Quizlets API.

Quizlets meddelelse om Google Classroom-integrationen den 30. juni 2026 er lige så specifik. Tilføjelsesprogrammet lader undervisere finde og tildele aktiviteter, herunder øvelsesspørgsmål, flashcards og spil, og derefter følge deltagelse og fremskridt i Classroom-forløbet. Quizlet oplyser, at det kræver Google Workspace for Education Plus; undervisere kan have brug for, at deres IT-administrator giver tilladelse eller gør tilføjelsesprogrammet tilgængeligt.

Hvis et af disse forløb allerede passer til dit mål, så brug det. Hvis du har brug for en specialudviklet applikation, kan ingen af integrationerne erstatte offentlig udvikleradgang.

### Vælg en dokumenteret grænseflade med læse- og skriveadgang til løbende automatisering

Løbende automatisering kræver, at din software pålideligt kan udføre de samme opgaver igen og igen: oprette kort fra noter, hente en liste over kortsæt, opdatere svar eller administrere et arbejdsområde over tid. En eksport til udklipsholderen giver ikke et fast grundlag for det.

Den sikre vej er et flashcard-system, der udtrykkeligt dokumenterer, hvordan ekstern software autentificerer sig, og hvilke læse- og skriveoperationer det understøtter. Det kan betyde, at du vælger et alternativ til Quizlets API til det automatiserede forløb, mens du beholder Quizlet til de læringsopgaver, dets offentligt tilgængelige produkt understøtter.

## Hvad Nibomo tilbyder som API-alternativ

Nibomo dokumenterer to adgangsveje til de samme begrænsede data for hver bruger:

- Det [eksterne Agent API](/da/docs/api/) starter ved `GET https://api.nibomo.com/v1/`. Svaret fra dette endpoint guider en agent gennem login med en engangskode via e-mail, oprettelse af en API-nøgle og valg af arbejdsområde. Læsning sker via en SQL-lignende forespørgselsrute; skrivning sker via en separat execute-rute.
- Den [eksterne MCP-server](/da/docs/mcp-connector/) er tilgængelig på `https://mcp.nibomo.com/mcp`. MCP-klienter får otte værktøjer: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` og repetitionsværktøjerne `next_review_card`, `reveal_answer` og `submit_review`.

`get_usage_limits` — giver udelukkende læseadgang til kontoens abonnement, grænser og aktuelle månedlige AI-forbrug; det læser eller ændrer ikke kort.

Begge adgangsveje er afgrænset til et arbejdsområde. De offentliggjorte ressourcer er `workspace`, `cards`, `decks` og `review_events`, og resultater er begrænset til 100 rækker pr. SQL-sætning. Den SQL-lignende grænseflade bruger en begrænset dialekt, ikke rå PostgreSQL. Der findes intet OpenAPI-skema, så forløb, der afhænger af genererede OpenAPI-klienter, har brug for en anden grænseflade.

Det kan hjælpe en udvikler eller AI-agent med at automatisere flashcards, de selv ejer. Det kan ikke læse en Quizlet-URL, spejle en Quizlet-konto eller fungere som en udokumenteret Quizlet-klient. Der er ingen automatisk Quizlet-import. Ved en flytning skal du først eksportere termer og definitioner fra dit eget sæt, gennemgå teksten og derefter overføre indholdet til de relevante kortfelter i det nye system. Det nye system opretter sine egne repetitionsdata; Quizlet-historikken følger ikke med.

Læs [sammenligningen af open source-alternativet til Quizlet](/blog/quizlet-alternative/) for at se forskellene mellem produkterne ud over API-adgang.

## Private browserforespørgsler er ikke en sikker genvej

Quizlets webgrænseflade sender netværksforespørgsler, ligesom alle moderne webapplikationer. At finde en af dem gør den ikke til et understøttet endpoint for dit program.

Private browser-endpoints kan afhænge af sessionscookies, interne formater, foranstaltninger mod misbrug og antagelser knyttet til den aktuelle grænseflade. De kan ændre sig uden offentlig versionering eller vejledning om overgangen til nye versioner. Desuden forbyder [Quizlets servicevilkår](https://quizlet.com/tos), senest opdateret den 28. maj 2026, scraping og anden automatisk udtrækning af data samt uautoriseret automatiseret brug af tjenesten.

Det er et skrøbeligt og risikabelt grundlag for et personligt script, og endnu mere for et produkt. Jeg giver ikke gættede endpoints eller anvisninger på reverse engineering her.

Brug eksport til dit eget sæt, når du har brug for en enkelt flytning. Indlejr et offentligt sæt, når brugerne skal kunne øve sig på en anden side. Brug de specifikke ChatGPT- eller Google Classroom-integrationer til netop de forløb. Til gentagen læsning og skrivning skal du vælge software, der dokumenterer grænsefladen og vilkårene for automatisering — eller håndtere Quizlet-delen manuelt, indtil Quizlet selv dokumenterer det.

## Sådan opdager du, hvis status ændrer sig

Quizlet kan lancere et udviklerprogram efter datoen, hvor fakta i denne artikel blev kontrolleret. Hold øje med en officiel udviklerportal eller dokumentation, der forklarer, hvem der kan registrere sig, hvordan autentificering fungerer, hvilke kortoperationer der understøttes, og hvilke brugsregler der gælder.

Endnu en wrapper fra en tredjepart ville ikke ændre svaret. Det ville et nyt samarbejde med en specifik partner heller ikke. Indtil Quizlet dokumenterer selvbetjent udvikleradgang, skal du være varsom med påstande om et aktuelt Quizlet-API og vælge den understøttede mulighed, der passer til den faktiske opgave.
