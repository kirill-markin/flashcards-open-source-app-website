---
title: "Har Quizlet et offentlig API i 2026? Dagens status og trygge alternativer"
description: "Har Quizlet et API? Per 18. august 2026 finnes det ikke noe dokumentert offentlig API med selvbetjent tilgang. Sammenlign de støttede alternativene."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "har Quizlet et API"
  - "offentlig Quizlet-API"
  - "Quizlet-API for utviklere"
  - "alternativ til Quizlet-API"
  - "automatisere læringskort"
---

Per 18. august 2026 har Quizlet verken dokumentert et offentlig utvikler-API med selvbetjent tilgang eller en offentlig utviklerportal. En uavhengig utvikler har ingen offisiell fremgangsmåte for å registrere en app, få en Quizlet-API-nøkkel og bruke dokumenterte endepunkter til å lese eller skrive kortdata.

Dette er en konklusjon om Quizlets offentlige dokumentasjon, ikke en påstand om de interne systemene. Quizlet har helt klart produkt- og partnerintegrasjoner. Appen i ChatGPT og tillegget for Google Classroom er to aktuelle eksempler. Ingen av dem gir andre applikasjoner tilgang til et generelt Quizlet-API for utviklere.

**Fakta kontrollert:** 18. august 2026.

> **Om forfatterens tilknytning:** Jeg er Kirill Markin og utvikler Nibomo. Nibomos Agent API og MCP-server er blant alternativene nedenfor. Nibomo er ikke kompatibelt med Quizlet og importerer ikke Quizlet-sett automatisk.

![Utvikler som sammenligner Quizlet-eksport, innbygging, spesifikke integrasjoner og et dokumentert API for læringskort](/blog/quizlet-api.png)

## Kort svar: Quizlet har ikke et dokumentert API med selvbetjent tilgang

Hvis du søkte etter «har Quizlet et API?» fordi du vil automatisere selve Quizlet, er det praktiske svaret i dag at **ingen offentlig API-tilgang med selvbetjening er dokumentert**.

Flere offisielle funksjoner kan ligne på API-tilgang utenfra. De løser mer avgrensede oppgaver:

| Hva du trenger | Støttet fremgangsmåte | Egnet til | Gir ikke |
|---|---|---|---|
| Flytte tekst fra et sett du har opprettet | [Eksport fra Quizlet-nettstedet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | En engangskopi av begreper og definisjoner | Bilder, eksport av kopierte sett, øvingshistorikk eller API-tilgang |
| Vise et offentlig sett på et nettsted eller i en læringsplattform | [Innbygging av Quizlet](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | En Quizlet-aktivitet med Quizlets merkevare inne på siden din | Strukturerte kortdata eller lese- og skrivetilgang |
| Gjøre en ChatGPT-samtale om til et Quizlet-sett | [Quizlet-appen i ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Oppretting og forhåndsvisning av et sett gjennom `@Quizlet` | Tilgangsopplysninger eller endepunkter for din egen app |
| Gi Quizlet-oppgaver i Google Classroom | [Quizlet-tillegget for Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Å finne, tildele og følge opp aktiviteter i Classroom | Et generelt API for egenutviklet undervisningsprogramvare |
| Lage din egen Quizlet-integrasjon | Ingen selvbetjent fremgangsmåte er dokumentert i dag | En avtale med en bestemt partner kan finnes | Offentlig registrering, API-nøkler eller en dokumentert kontrakt for kortdata |
| Automatisere ditt eget arbeidsområde for læringskort | [Nibomo Agent API](/nb/docs/api/) eller [MCP-kobling](/nb/docs/mcp-connector/) | Gjentatt lesing og skriving av kort og kortstokker i et bestemt arbeidsområde | Quizlet-kompatibilitet eller automatisk Quizlet-import |

Skillet er enkelt: Å kopiere din egen korttekst én gang er en eksportoppgave. Å vise Quizlet på en annen side er en innbyggingsoppgave. En spesifikk integrasjon fungerer bare innenfor arbeidsflyten til det aktuelle produktet. Programvare som stadig skal opprette, lese og redigere kort, trenger et dokumentert API med lese- og skrivetilgang.

## Eksport, innbygging og partnertilgang er ikke offentlige API-er

Et offentlig API gir eksterne utviklere en kontrakt: dokumentasjon, autentisering, støttede operasjoner, bruksregler og en måte å få tilgangsopplysninger på. Ingen av Quizlets nåværende offentlige grensesnitt tilbyr hele denne selvbetjente fremgangsmåten.

Quizlets **eksport** er en manuell overføring. Den som har opprettet et sett, kan bruke nettstedet til å velge hvordan begrepene og definisjonene skal ordnes, velge **Kopier tekst (Copy text)** og lime inn resultatet et annet sted. Quizlet opplyser at bilder ikke kan eksporteres, at kopierte sett ikke kan eksporteres, og at funksjonen bare finnes på nettstedet. Dette fungerer for en nøye utført engangsflytting. Det lar ikke programvare holde to systemer synkronisert.

**Innbygging** handler om visning, ikke datatilgang. Quizlet lar deg kopiere HTML for et offentlig sett i modusene Match, Learn, Test, Flashcards eller Spell. Den innebygde aktiviteten beholder Quizlet-logoen, og de som øver, bruker Quizlets grensesnitt. Applikasjonen din får ikke settet som kortposter den kan redigere.

En **spesifikk integrasjon** har sin egen avtalte arbeidsflyt. Quizlet kan samarbeide med ChatGPT eller Google Classroom uten å tilby det samme grensesnittet til alle utviklere. Lanseringene viser at disse integrasjonene finnes. De viser ikke at et offentlig Quizlet-API ligger bak dem og er tilgjengelig for generell bruk.

Derfor er heller ikke et gammelt wrapper-bibliotek eller en forespørsel du ser i nettleserens utviklerverktøy, et støttet Quizlet-API. Det som mangler, er offentlig dokumentasjon og en stabil kontrakt for utviklere.

## Velg fremgangsmåten som passer til oppgaven

### Bruk eksport til en engangskopi eller flytting

Bruk Quizlets offisielle eksportfunksjon for et sett du selv har opprettet. Siden fremgangsmåten ender med **Kopier tekst (Copy text)**, bør du bevare den første innlimte kopien uendret før du rydder opp i skilletegn eller fordeler teksten på felter. Du tar vare på begreper og definisjoner, ikke en kortstokkpakke som kan gjenopprettes. Bilder og øvingshistorikk blir igjen.

Den praktiske sjekklisten finner du i [Slik eksporterer du Quizlet-sett i 2026](/nb/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Den dekker råkopier og arbeidskopier, UTF-8, tabulatorer, definisjoner over flere linjer og forskjellen mellom å flytte kortinnhold og å flytte informasjon om repetisjonsplanen.

Eksport passer til en avgrenset flytting. Det passer ikke til daglig oppretting, synkronisering eller gjentatt redigering fra programvare.

### Bruk den offisielle innbyggingen til visning

Hvis elever eller studenter skal øve på et offentlig Quizlet-sett fra et klassenettsted eller en læringsplattform, bruker du innbyggingskoden Quizlet tilbyr på nettstedet. Velg aktiviteten, velg **Kopier HTML (Copy HTML)** og legg resultatet inn på siden. De som øver, får en interaktiv Quizlet-aktivitet. Nettstedet får ingen tilgang til de underliggende kortdataene.

Dette er ofte alt en lærer trenger. Å kalle det et API gjør bare behovet mer komplisert enn det er.

### Bruk de spesifikke integrasjonene for ChatGPT eller Google Classroom

Quizlets kunngjøring om ChatGPT fra 10. mars 2026 beskriver en bestemt arbeidsflyt: Koble til Quizlet-appen, start en prompt med `@Quizlet`, forhåndsvis det genererte settet i ChatGPT og åpne det deretter i Quizlet for å tilpasse det og øve. Dette er en støttet måte å opprette et Quizlet-sett fra samtalen på. Det gir ikke boten, skriptet eller nettstedet ditt gjenbrukbare tilgangsopplysninger til Quizlet-API-et.

Quizlets kunngjøring om Google Classroom fra 30. juni 2026 er like konkret. Tillegget lar lærere finne og tildele aktiviteter, blant annet øvingsspørsmål, læringskort og spill, og deretter følge med på deltakelse og fremgang i Classroom-arbeidsflyten. Quizlet opplyser at det krever Google Workspace for Education Plus. Lærere kan trenge at IT-administratoren gir tillatelse eller gjør tillegget tilgjengelig.

Hvis en av disse arbeidsflytene allerede passer til målet ditt, bruker du den. Hvis du trenger en egen applikasjon, erstatter ingen av integrasjonene offentlig utviklertilgang.

### Bruk et dokumentert lese- og skrivegrensesnitt til løpende automatisering

Løpende automatisering betyr at programvaren din må utføre det samme arbeidet pålitelig mer enn én gang: opprette kort fra notater, hente en liste over kortstokker, oppdatere svar eller administrere et arbeidsområde over tid. Eksport via utklippstavlen gir ikke en slik kontrakt.

Den trygge fremgangsmåten er å velge et system for læringskort som uttrykkelig dokumenterer hvordan ekstern programvare autentiserer seg, og hvilke lese- og skriveoperasjoner det støtter. Det kan bety å velge et alternativ til Quizlet-API-et for den automatiserte arbeidsflyten, samtidig som du beholder Quizlet til øvingsoppgavene det offentlige produktet støtter.

## Hva Nibomo tilbyr som API-alternativ

Nibomo publiserer to veier til det samme begrensede datagrensesnittet for hver bruker:

- Det [eksterne Agent API-et](/nb/docs/api/) har inngangspunktet `GET https://api.nibomo.com/v1/`. Svaret fra inngangspunktet veileder en agent gjennom innlogging med engangskode på e-post, oppretting av en API-nøkkel og valg av arbeidsområde. Lesing skjer via et endepunkt for spørringer med SQL-lignende syntaks. Skriving skjer via et eget execute-endepunkt.
- Den [eksterne MCP-serveren](/nb/docs/mcp-connector/) finnes på `https://mcp.nibomo.com/mcp`. MCP-klienter får åtte verktøy: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` og repetisjonsverktøyene `next_review_card`, `reveal_answer` og `submit_review`.

`get_usage_limits` gir kun lesetilgang til kontoens abonnement, grenser og gjeldende månedlige AI-bruk. Det leser eller endrer ikke kort.

Begge tilgangsmåtene er avgrenset til et arbeidsområde. De publiserte ressursene er `workspace`, `cards`, `decks` og `review_events`, og resultatene er begrenset til 100 rader per SQL-setning. Det SQL-lignende grensesnittet bruker en begrenset dialekt, ikke direkte PostgreSQL. Det finnes ikke noe OpenAPI-skjema, så arbeidsflyter som avhenger av genererte OpenAPI-klienter, trenger et annet grensesnitt.

Dette kan hjelpe en utvikler eller AI-agent med å automatisere læringskort vedkommende eier. Det kan ikke lese en Quizlet-URL, speile en Quizlet-konto eller fungere som en udokumentert Quizlet-klient. Det finnes ingen automatisk Quizlet-import. Ved flytting må du først eksportere begrepene og definisjonene fra ditt eget sett, kontrollere teksten og deretter fordele den på kortfeltene i målsystemet. Målsystemet oppretter sin egen øvingsstatus. Quizlet-historikken følger ikke med.

For produktforskjeller utover API-tilgang, se [sammenligningen med et Quizlet-alternativ med åpen kildekode](/blog/quizlet-alternative/).

## Private nettleserforespørsler er ikke en trygg snarvei

Quizlets nettgrensesnitt sender nettverksforespørsler, slik alle moderne nettapplikasjoner gjør. Å finne en av disse forespørslene gjør den ikke til et støttet endepunkt for programmet ditt.

Private nettleserendepunkter kan være avhengige av informasjonskapsler for økten, interne formater, tiltak mot misbruk og forutsetninger som er knyttet til det nåværende grensesnittet. De kan endres uten offentlig versjonering eller veiledning for overgang til nye versjoner. Dessuten forbyr [Quizlets bruksvilkår](https://quizlet.com/tos), sist oppdatert 28. mai 2026, skraping og annen automatisert uthenting av data, samt uautorisert automatisert bruk av tjenesten.

Det er et skjørt og risikabelt grunnlag for et personlig skript, og enda mer for et produkt. Jeg oppgir derfor ikke gjetninger om endepunkter eller fremgangsmåter for reversutvikling her.

Eksporter ditt eget sett når du trenger en engangsflytting. Bygg inn et offentlig sett når elever eller studenter trenger det på en annen side. Bruk ChatGPT- eller Google Classroom-integrasjonen til de konkrete arbeidsflytene de støtter. Til gjentatt lesing og skriving velger du programvare som dokumenterer automatiseringskontrakten, eller holder Quizlet-delen manuell til Quizlet publiserer en.

## Slik oppdager du om statusen endres

Quizlet kan lansere et utviklerprogram etter datoen da denne artikkelens fakta ble kontrollert. Se etter en offisiell utviklerportal eller dokumentasjon som forklarer hvem som kan registrere seg, hvordan autentisering fungerer, hvilke kortoperasjoner som støttes, og hvilke bruksregler som gjelder.

Et nytt wrapper-bibliotek fra en tredjepart ville ikke endre svaret. Det ville heller ikke et nytt partnerskap med et bestemt produkt. Inntil Quizlet dokumenterer selvbetjent utviklertilgang, bør du vurdere påstander om et eksisterende Quizlet-API med varsomhet og velge den støttede fremgangsmåten som passer til den faktiske oppgaven.
