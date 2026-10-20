---
title: "Har Quizlet en MCP-server i 2026? Hvad Claude og Codex kan bruge"
description: "Quizlet dokumenterer ingen MCP-server i 2026. Sammenlign ChatGPT-appen, eksport forbeholdt sættets opretter og en sikker vej til løbende adgang fra Claude eller Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP-server"
  - "Quizlet Claude-connector"
  - "forbind Quizlet med Claude"
  - "Quizlet Codex"
  - "Quizlet ChatGPT-app"
  - "alternativ til Quizlets API"
---

Pr. 12. september 2026 beskriver Quizlet hverken en MCP-server eller en offentlig udvikler-API med selvbetjeningsadgang i sin offentlige dokumentation. Hvis du ledte efter en Quizlet MCP-URL, som du kunne indsætte i Claude, Codex eller en anden MCP-klient, findes der i dag ingen offentligt beskrevet opsætning i Quizlets dokumentation.

Quizlet har en officiel app i ChatGPT. Den kan omdanne en ChatGPT-samtale til et nyt Quizlet-sæt, men netop den arbejdsgang er ikke en genanvendelig Quizlet MCP-server. Hvis du har brug for, at en agent løbende kan tilgå eksisterende kort, er den praktiske vej at eksportere tekst fra et sæt, du selv har oprettet, gemme en urørt kopi, gennemgå overførslen og bruge et flashcardsystem, der udtrykkeligt understøtter, at agenter læser og skriver data.

**Fakta kontrolleret:** 12. september 2026.

> **Oplysning om tilknytning:** Jeg er Kirill Markin, og jeg udvikler Nibomo, hvis MCP-server og Agent API nævnes som alternativer nedenfor. Nibomo kan ikke oprette forbindelse til en Quizlet-konto eller importere en Quizlet-URL.

![En gartner bærer en ung plante fra et lukket drivhus ud til et havebed med forgrenet drypvanding](/blog/quizlet-mcp-server.png)

## ChatGPT-appen, eksport og MCP løser forskellige opgaver

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) er en åben standard til at forbinde AI-applikationer med eksterne systemer. En MCP-server giver normalt kompatible klienter et kendt endepunkt og et defineret sæt værktøjer, de kan kalde.

Quizlets [officielle annoncering af ChatGPT-appen](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) beskriver en anden løsning. Du installerer Quizlet-appen i ChatGPT, indleder en prompt med `@Quizlet`, får en forhåndsvisning af de genererede flashcards i ChatGPT og åbner derefter sættet i Quizlet for at tilpasse det og øve dig.

Det er nyttigt, når opgaven er at »omdanne denne ChatGPT-samtale til et Quizlet-sæt«. Annonceringen offentliggør ikke et generelt Quizlet MCP-endepunkt, giver ikke Claude eller Codex adgang til dit Quizlet-bibliotek og tilbyder ikke genanvendelige adgangsoplysninger til udviklere.

Det siger intet om Quizlets private eller interne infrastruktur. Det beskriver kun den grænseflade, Quizlet stiller til rådighed i sin offentlige dokumentation. De bredere grænser for udvikleradgang gennemgås i [Har Quizlet en offentlig API i 2026?](/da/blog/quizlet-api/).

Her er den klare forskel:

| Hvad du faktisk vil | Bedst understøttede vej i dag | Hvad du kan forvente |
| --- | --- | --- |
| Oprette et nyt Quizlet-sæt ud fra en ChatGPT-samtale | Quizlets officielle ChatGPT-app | Et særskilt `@Quizlet`-forløb i ChatGPT, efterfulgt af redigering og øvelse i Quizlet |
| Flytte termer og definitioner fra et sæt, du selv har oprettet | Eksport på Quizlets websted | En engangskopi af teksten, som du gemmer og kontrollerer |
| Lade Claude, Codex eller en anden agent læse eller redigere flashcards gentagne gange | Et flashcardsystem med en dokumenteret MCP-server eller agent-API | Autentificeret adgang til arbejdsområdet i destinationssystemet, ikke til Quizlet |
| Bygge software, der bruger Quizlet-kontodata | Vente på officiel udviklerdokumentation eller en godkendt partnerløsning | Der er i dag ingen dokumenteret offentlig Quizlet API- eller MCP-grænseflade med selvbetjeningsadgang |

Quizlets ChatGPT-app håndterer ét oprettelsesforløb. Eksport håndterer en afgrænset overførsel. MCP håndterer gentagen adgang til et system, der bevidst stiller værktøjer til rådighed. De kan ikke erstatte hinanden.

## Vælg den korteste understøttede vej

Hvis den officielle ChatGPT-app allerede passer til opgaven, så brug den. Der er ingen grund til at tilføje endnu et system blot for at oprette ét Quizlet-sæt ud fra én samtale.

Hvis du kun har brug for en sikkerhedskopi eller en engangsflytning, så brug Quizlets eksport. Hvis en agent skal kunne vende tilbage i morgen, finde et kortsæt, tilføje kort og rette dem, har du brug for en dokumenteret læse- og skrivegrænseflade i destinationssystemet. Indtil Quizlet offentliggør en sådan, kan den løbende arbejdsgang ikke være en understøttet direkte forbindelse til din Quizlet-konto.

For specialudviklet software, der er bygget specifikt omkring Quizlet-data, gælder samme grænse. En browserforespørgsel, et gammelt wrapperbibliotek eller en integration, som nogen har rekonstrueret via reverse engineering, erstatter ikke aktuel udviklerdokumentation.

## Sørg for, at en eksport af dit eget sæt kan rulles tilbage

Quizlets [officielle eksportvejledning](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) siger, at kun sættets opretter kan eksportere det, og kun på webstedet. Forløbet er **Mere → Eksportér → Kopiér tekst**. Eksporten indeholder termer og definitioner; ifølge Quizlet kan billeder ikke eksporteres, og kopierede sæt kan heller ikke eksporteres.

For et sæt, du selv har oprettet, kræver en forsigtig overførsel kun få trin:

1. Brug eksportfunktionen på Quizlets websted, og indsæt resultatet i en ren tekstfil.
2. Gem en urørt UTF-8-kopi, før du ændrer skilletegn, linjeskift eller formuleringer.
3. Rediger en kopi, ikke den oprindelige eksportfil.
4. Kontrollér en stikprøve fra begyndelsen, midten og slutningen samt definitioner over flere linjer og ikke-latinske tegn.
5. Importér eller vedhæft arbejdskopien, få en forhåndsvisning af et par korts forsider og bagsider, og gem først derefter kortene.
6. Behold Quizlet-sættet og den oprindelige fil, indtil kortsættet i destinationssystemet er blevet åbnet og afprøvet.

Den fulde gennemgang af skilletegn, CSV og filkontrol findes i [Sådan eksporterer du Quizlet-sæt i 2026](/da/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Den vigtigste begrænsning er let at overse: Eksporten overfører kortenes tekst, men ikke Quizlet-billeder, mapper, læringshistorik, mestringsstatus eller repetitionsplanlægning.

Derfor er det vigtigt at kunne rulle flytningen tilbage. Hvis en definition over flere linjer bliver til to kort, eller et skilletegn forskyder felterne, har du den oprindelige fil som en urørt reference.

## Hvad Claude og Codex kan bruge efter eksporten

Nibomo stiller et eksternt MCP-endepunkt til rådighed på:

`https://mcp.nibomo.com/mcp`

> [Opret forbindelse til Claude](https://claude.ai/directory/nibomo) · [Dokumentation](/da/docs/mcp-connector/)

Nibomos [dokumentation til MCP-connectoren](/da/docs/mcp-connector/) definerer otte værktøjer: `list_workspaces`, `sql_query` til læsning, `sql_execute` til skrivning, `get_guide` til opslagsvejledninger samt `next_review_card`, `reveal_answer` og `submit_review` til repetition. Interaktive MCP-klienter kan godkende adgang med OAuth. Terminalagenter kan i stedet begynde med [Agent API-dokumentationen](/da/docs/api/) og bruge det offentliggjorte HTTP-forløb.

`get_usage_limits` — udelukkende læseadgang til kontoens abonnement, grænser og aktuelle månedlige AI-forbrug; værktøjet hverken læser eller ændrer kort.

Det gør ikke Nibomo til en Quizlet-connector. Den understøttede arbejdsgang er:

1. Eksportér tekst fra et Quizlet-sæt, du selv har oprettet.
2. Gem den oprindelige fil, og gennemgå en arbejdskopi.
3. Gennemgå, hvordan indholdet er fordelt på kortenes felter, før du gemmer kortene i Nibomo.
4. Forbind det nye Nibomo-arbejdsområde med en kompatibel klient, så den fremover kan læse og skrive data.

For Claude findes trinene i [Sådan forbinder du Nibomo med Claude via MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex og andre agenter kan bruge den dokumenterede MCP- eller Agent API-løsning, som deres miljø understøtter.

Nibomo kan ikke læse en Quizlet-URL, spejle en Quizlet-konto, synkronisere senere ændringer i Quizlet eller genskabe billeder og læringshistorik, der ikke kom med i eksporten. Det opretter sine egne kort med en ny plan for repetition ud fra det materiale, du vælger at overføre.

Hvis du overvejer, om den afvejning er umagen værd ud over agentadgangen, kan du læse [sammenligningen med et open source-alternativ til Quizlet](/blog/quizlet-alternative/).

## Begræns tilladelserne til mindre end hele opgaven

En offentlig grænsefladebeskrivelse fjerner noget af gætværket ved integration, men gør ikke enhver MCP-handling sikker. OAuth autentificerer forbindelsen. Det garanterer ikke, at et AI-genereret kort er korrekt, holder ikke returnerede kortdata inden for flashcardtjenesten og afgør ikke, om en redigering svarer til din hensigt.

Nibomo adskiller læseoperationer fra sine skriveværktøjer: `sql_execute` til kort og kortsæt og `submit_review` til repetition. OAuth-adgangsoplysningerne dækker stadig hele connectorens grænseflade, så blokering af værktøjer og håndtering af godkendelser afhænger af klienten. Begynd med et lille arbejdsområde uden følsomme data. Lad kun agenten læse de data, opgaven kræver, kræv fortsat godkendelse af hvert enkelt skrivekald, når klienten understøtter det, og gennemgå arbejdsområdet og den foreslåede ændring, før du accepterer den.

Giv ikke adgang til privat studiemateriale, før du har kontrolleret AI-klientens vilkår for opbevaring og behandling af data. Ved den første overførsel er en enkel regel nok: Behold den oprindelige eksport, få en forhåndsvisning af et par kort, godkend en afgrænset skrivehandling, og kontrollér resultatet i destinationsappen, før du fortsætter.

## Gør ikke privat browsertrafik til en API

En forespørgsel, som du kan se i browserens udviklerværktøjer, er ikke en offentlig Quizlet-API. Private endepunkter kan afhænge af sessionscookies, interne formater og adfærd, der ændrer sig uden varsel. Enhver automatiseret brug skal også overholde [Quizlets brugsvilkår](https://quizlet.com/tos) og de tilladelser, du har til materialet.

Denne artikel giver ingen vejledning i scraping eller endepunkter fundet via reverse engineering. Hvis den officielle ChatGPT-app passer til opgaven, så brug den. Hvis du selv har oprettet sættet og har brug for en engangsflytning, så eksportér det. Hvis du har brug for løbende læsning og skrivning via en agent, så flyt gennemgået indhold til et system, der offentliggør den grænseflade, og håndter derefter Quizlet-delen manuelt, medmindre Quizlet dokumenterer noget nyt.
