---
title: "Har Quizlet en MCP-server i 2026? Dette kan Claude og Codex bruke"
description: "Quizlet dokumenterer ingen MCP-server i 2026. Sammenlign ChatGPT-appen, eksport kun for oppretteren og en trygg fremgangsmåte for gjentatt tilgang fra Claude eller Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP-server"
  - "Quizlet-kobling for Claude"
  - "koble Quizlet til Claude"
  - "Quizlet Codex"
  - "Quizlet-app i ChatGPT"
  - "alternativ til Quizlet-API"
---

Per 12. september 2026 beskriver Quizlet verken en MCP-server eller et offentlig utvikler-API med selvbetjent tilgang i sin offentlige dokumentasjon. Hvis du har søkt etter en Quizlet MCP-URL som du kan lime inn i Claude, Codex eller en annen MCP-klient, finnes det i dag ingen offentlig oppskrift på dette i Quizlets dokumentasjon.

Quizlet har en offisiell app i ChatGPT. Den kan gjøre en ChatGPT-samtale om til et nytt Quizlet-sett, men denne spesifikke arbeidsflyten er ikke en gjenbrukbar Quizlet MCP-server. Hvis du trenger at en agent får gjentatt tilgang til eksisterende kort, er den praktiske fremgangsmåten å eksportere tekst fra et sett du selv har opprettet, beholde en råkopi, kontrollere overføringen og bruke et system for læringskort som uttrykkelig støtter lesing og skriving fra agenter.

**Fakta kontrollert:** 12. september 2026.

> **Om forfatterens tilknytning:** Jeg er Kirill Markin og utvikler Nibomo. Nibomos MCP-server og Agent API er blant alternativene nedenfor. Nibomo kan ikke koble seg til en Quizlet-konto eller importere en Quizlet-URL.

![En gartner bærer en ung plante fra et lukket drivhus til et hagebed med forgrenet dryppvanning](/blog/quizlet-mcp-server.png)

## ChatGPT-appen, eksport og MCP løser ulike oppgaver

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) er en åpen standard for å koble KI-applikasjoner til eksterne systemer. En MCP-server gir normalt kompatible klienter et kjent endepunkt og et definert sett med verktøy de kan kalle.

Quizlets [offisielle kunngjøring om ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) beskriver en annen løsning. Du installerer Quizlet-appen i ChatGPT, begynner en instruksjon med `@Quizlet`, forhåndsviser de genererte læringskortene i ChatGPT og åpner deretter settet i Quizlet for å tilpasse det og øve.

Dette er nyttig når oppgaven er «gjør denne ChatGPT-samtalen om til et Quizlet-sett». Kunngjøringen publiserer ikke noe generelt Quizlet MCP-endepunkt, gir ikke Claude eller Codex tilgang til Quizlet-biblioteket ditt og tilbyr ikke gjenbrukbare tilgangsopplysninger for utviklere.

Dette sier ingenting om Quizlets private eller interne infrastruktur. Det beskriver bare grensesnittet Quizlet gjør tilgjengelig i sin offentlige dokumentasjon. De overordnede grensene for utviklertilgang er beskrevet i [Har Quizlet et offentlig API i 2026?](/nb/blog/quizlet-api/).

Forskjellen er slik:

| Hva du egentlig vil gjøre | Best støttede fremgangsmåte i dag | Hva du kan forvente |
| --- | --- | --- |
| Opprette et nytt Quizlet-sett fra en ChatGPT-samtale | Quizlets offisielle ChatGPT-app | En spesifikk `@Quizlet`-arbeidsflyt inne i ChatGPT, etterfulgt av redigering og øving i Quizlet |
| Flytte begreper og definisjoner fra et sett du har opprettet | Eksport fra Quizlets nettsted | En engangskopi av teksten som du tar vare på og kontrollerer |
| La Claude, Codex eller en annen agent lese eller redigere læringskort gjentatte ganger | Et system for læringskort med en dokumentert MCP-server eller et agent-API | Autentisert tilgang til arbeidsområdet i målsystemet, ikke til Quizlet |
| Bygge programvare som bruker data fra Quizlet-kontoer | Vente på offisiell utviklerdokumentasjon eller en autorisert partnerløsning | Det finnes i dag ingen dokumentert offentlig API- eller MCP-kontrakt for selvbetjent tilgang til Quizlet |

Quizlet-appen i ChatGPT håndterer én arbeidsflyt for oppretting. Eksport håndterer en avgrenset overføring. MCP håndterer gjentatt tilgang til et system som bevisst gjør verktøy tilgjengelige. De kan ikke erstatte hverandre.

## Velg den korteste støttede veien

Hvis den offisielle ChatGPT-appen allerede passer til oppgaven, bruk den. Det er ingen grunn til å ta i bruk enda et system bare for å opprette ett Quizlet-sett fra én samtale.

Hvis du bare trenger en sikkerhetskopi eller en engangsflytting, bruk Quizlets eksport. Hvis du trenger at en agent kommer tilbake i morgen, finner en kortstokk, legger til kort og retter dem, trenger du et dokumentert grensesnitt for lesing og skriving i målsystemet. Før Quizlet publiserer et slikt grensesnitt, kan ikke denne gjentatte arbeidsflyten være en støttet direktekobling til Quizlet-kontoen din.

For egenutviklet programvare som er bygget spesielt rundt Quizlet-data, gjelder den samme grensen. En nettleserforespørsel, et gammelt wrapper-bibliotek eller en integrasjon noen har laget ved omvendt utvikling, erstatter ikke oppdatert utviklerdokumentasjon.

## Sørg for at flyttingen kan reverseres når du eksporterer ditt eget sett

Quizlets [offisielle eksportveiledning](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) sier at bare den som har opprettet et sett, kan eksportere det, og bare på nettstedet. Fremgangsmåten er **Mer (More) → Eksporter (Export) → Kopier tekst (Copy text)**. Eksporten inneholder begreper og definisjoner. Quizlet opplyser at bilder ikke kan eksporteres, og at kopierte sett ikke kan eksporteres.

For et sett du selv har opprettet, er en forsiktig overføring enkel:

1. Bruk eksportfunksjonen på Quizlets nettsted og lim resultatet inn i en ren tekstfil.
2. Lagre en urørt UTF-8-kopi før du endrer skilletegn, linjeskift eller formuleringer.
3. Rediger en kopi av filen, ikke råeksporten.
4. Kontroller et utvalg fra begynnelsen, midten og slutten, samt definisjoner over flere linjer og tegn fra andre skriftsystemer enn det latinske.
5. Importer eller legg ved arbeidskopien, forhåndsvis noen for- og baksider, og lagre først deretter kortene.
6. Behold Quizlet-settet og råfilen til kortstokken i målsystemet er åpnet og testet.

Den fullstendige gjennomgangen av skilletegn, CSV og filkontroll finnes i [Slik eksporterer du Quizlet-sett i 2026](/nb/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Den viktige begrensningen er lett å overse: Eksporten overfører korttekst, ikke Quizlet-bilder, mapper, øvingshistorikk, mestringsstatus eller repetisjonsplaner.

Derfor er det viktig at flyttingen kan reverseres. Hvis en definisjon over flere linjer blir til to kort, eller et skilletegn forskyver feltene, gir råfilen deg en urørt referanse.

## Dette kan Claude og Codex bruke etter eksporten

Nibomo publiserer et eksternt MCP-endepunkt på:

`https://mcp.nibomo.com/mcp`

> [Koble til Claude](https://claude.ai/directory/nibomo) · [Dokumentasjon](/nb/docs/mcp-connector/)

[Dokumentasjonen for MCP-koblingen](/nb/docs/mcp-connector/) definerer åtte verktøy: `list_workspaces`, `sql_query` for lesing, `sql_execute` for skriving, `get_guide` for referanseveiledninger, samt `next_review_card`, `reveal_answer` og `submit_review` for repetisjoner. Interaktive MCP-klienter kan få autorisert tilgang med OAuth. Terminalagenter kan i stedet begynne med [dokumentasjonen for Agent API](/nb/docs/api/) og bruke den publiserte HTTP-fremgangsmåten.

`get_usage_limits` — kun lesetilgang til kontoens abonnement, grenser og inneværende måneds KI-bruk. Verktøyet verken leser eller endrer kort.

Dette gjør ikke Nibomo til en Quizlet-kobling. Den støttede arbeidsflyten er:

1. Eksporter tekst fra et Quizlet-sett du selv har opprettet.
2. Ta vare på råfilen og kontroller en arbeidskopi.
3. Kontroller hvordan teksten er fordelt på kort før du lagrer dem i Nibomo.
4. Koble det nye Nibomo-arbeidsområdet til en kompatibel klient for fremtidig lesing og skriving.

For Claude finner du tilkoblingstrinnene i [Slik kobler du Nibomo til Claude med MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex og andre agenter kan bruke den dokumenterte MCP- eller Agent API-fremgangsmåten som miljøet deres støtter.

Nibomo kan ikke lese en Quizlet-URL, speile en Quizlet-konto, synkronisere senere endringer i Quizlet eller gjenopprette bilder og øvingshistorikk som ikke fulgte med eksporten. Nibomo oppretter egne kort og en ny repetisjonsplan ut fra materialet du velger å overføre.

Hvis du vurderer om fordelene veier opp for begrensningene også utover agenttilgang, kan du lese [sammenligningen av et alternativ til Quizlet med åpen kildekode](/blog/quizlet-alternative/).

## Hold tilgangsrettighetene strammere enn oppgaven

En offentlig grensesnittkontrakt fjerner noe av gjettingen rundt integrasjonen, men gjør ikke alle MCP-handlinger trygge. OAuth autentiserer tilkoblingen. Det garanterer ikke at et KI-generert kort er korrekt, sørger ikke for at returnerte kortdata forblir innenfor tjenesten for læringskort, og avgjør ikke om en redigering samsvarer med det du ønsket.

Nibomo skiller leseoperasjoner fra skriveverktøyene: `sql_execute` for kort og kortstokker, `submit_review` for repetisjoner. OAuth-tilgangsopplysningene dekker likevel hele grensesnittet til koblingen, så blokkering av verktøy og krav om godkjenning avhenger av klienten. Begynn med et lite arbeidsområde uten sensitive opplysninger. La agenten bare lese dataene oppgaven krever, krev godkjenning for hvert skrivekall når klienten støtter det, og kontroller arbeidsområdet og den foreslåtte endringen før du godtar den.

Ikke koble til privat studiemateriale før du har kontrollert KI-klientens vilkår for lagring og behandling av data. Den detaljerte trusselmodellen finnes i [Er MCP trygt for læringskort?](/blog/is-mcp-safe-for-flashcards/). For en første overføring holder det med en enkel regel: Behold råeksporten, forhåndsvis noen kort, godkjenn en avgrenset skriveoperasjon og kontroller resultatet i målappen før du gjør mer.

## Ikke gjør privat nettlesertrafikk til et API

En forespørsel som er synlig i nettleserens utviklerverktøy, er ikke et offentlig Quizlet-API. Private endepunkter kan være avhengige av øktinformasjonskapsler, interne formater og oppførsel som endres uten varsel. All automatisert bruk må også være i samsvar med [Quizlets bruksvilkår](https://quizlet.com/tos) og rettighetene du har til materialet.

Denne artikkelen inneholder verken instruksjoner for skraping eller endepunkter funnet gjennom omvendt utvikling. Hvis den offisielle ChatGPT-appen passer til oppgaven, bruk den. Hvis du opprettet settet og trenger en engangsflytting, eksporter det. Hvis du trenger gjentatt lesing og skriving fra agenter, flytt kontrollert innhold til et system som publiserer et slikt grensesnitt. Fortsett deretter å håndtere Quizlet-siden manuelt, med mindre Quizlet dokumenterer noe nytt.
