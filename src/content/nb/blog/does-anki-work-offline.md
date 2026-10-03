---
title: "Fungerer Anki uten nett i 2026? Datamaskin, iPhone, Android og synkronisering"
description: "Ja – Ankis installerte apper for datamaskin, iPhone, iPad og Android kan bruke en lokal samling uten nett. Se hva som krever internett, hvordan du synkroniserer etterpå, og hvordan du klargjør mediefiler."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "fungerer Anki uten nett"
  - "kan man bruke Anki offline"
  - "fungerer AnkiMobile uten nett"
  - "fungerer AnkiDroid uten nett"
  - "Anki synkronisering offline"
  - "AnkiWeb offline"
  - "bruke Anki uten internett"
---

Anki trenger ikke å kontakte en server før neste kort vises. **De installerte Anki-appene fungerer uten nett i 2026:** Anki for Windows, macOS og Linux, AnkiMobile for iPhone og iPad, og AnkiDroid for Android. Alle bruker en samling som er lagret på selve enheten. Du kan derfor repetere, lage notater og gjøre vanlige endringer uten internett.

Det er likevel én ting som er lett å overse: AnkiWeb er annerledes. Det er en nettleserbasert tjeneste for læring og synkronisering, ikke en Anki-app som fungerer uten nett. En installert app kan dessuten bare bruke kortstokkene og mediefilene som allerede er overført til akkurat den enheten.

**Fakta kontrollert:** 16. august 2026.

![En feltforsker legger til en oppføring i et lokalt arkiv med bilder, lyd og tekst mens radioforbindelsen i fjellet er nede](/blog/does-anki-work-offline.png)

## Det korte svaret for hver plattform

[Ankis offisielle nettsted](https://apps.ankiweb.net/) viser skrivebordsappen, AnkiMobile for iOS, AnkiDroid for Android og AnkiWeb som deler av samme økosystem. Grensene for hva du kan gjøre uten nett, er forskjellige.

| Plattform | Fungerer den uten nett? | Hva du kan gjøre uten internett | Hva som krever nettilkobling |
| --- | --- | --- | --- |
| **Anki for Windows, macOS eller Linux** | **Ja.** Samlingen og mediemappen er lagret lokalt. | Repetere kort, legge til notater, redigere innholdet i notater og bruke mediefiler som allerede er lagret på datamaskinen. | Laste ned delte kortstokker, synkronisere med AnkiWeb og hente innhold som et kort eller en utvidelse ber om fra en nettjeneste. |
| **AnkiMobile** for iPhone eller iPad | **Ja.** Appen lagrer samlingen lokalt. | Repetere lokale kort, legge til notater, redigere innholdet i notater og spille av lyd eller vise bilder som allerede ligger på enheten. | Fullføre den første synkroniseringen av samlingen og mediefilene, bruke AnkiWeb og åpne ressurser på nettet. |
| **AnkiDroid** for Android | **Ja.** AnkiDroid lagrer samlingen på Android-enheten. | Repetere lokale kort, legge til notater, redigere innholdet i notater og bruke mediefiler som ligger på enheten. | Synkronisere eller laste ned manglende materiale, hente delte kortstokker og bruke kortfunksjoner som er avhengige av nett. |
| **AnkiWeb** i nettleseren | **Ingen frakoblet modus.** Dette er en nettbasert tjeneste for læring og synkronisering. | Ikke regn med å kunne bruke den når forbindelsen forsvinner. | Ha en internettforbindelse, eller bytte til en installert app som er klargjort på forhånd. |

Du kan altså bruke Anki uten nett når du bruker en installert app som allerede har riktig samling. AnkiWeb i nettleseren trenger fortsatt en forbindelse.

## Repetisjoner og endringer uten nett lagres først på den enheten

Når du svarer på kort uten nett, registrerer Anki repetisjonene i den lokale samlingen. Planleggingen av videre repetisjoner fortsetter ut fra denne lokale tilstanden. Nye notater og vanlige endringer lagres også lokalt. Ingenting vises på en annen enhet før du kobler til nettet igjen og synkroniserer.

Synkronisering med AnkiWeb er valgfritt hvis du bare bruker én enhet. Formålet er å overføre endringer i samlingen mellom enheter. [Ankis veiledning for synkronisering](https://docs.ankiweb.net/syncing.html) sier at repetisjoner og endringer i notater fra flere steder vanligvis kan slås sammen. Hvis du har repetert det samme kortet to steder, blir begge svarene stående i repetisjonshistorikken, mens kortets tilstand følger det nyeste svaret.

Denne rutinen reduserer unødvendige synkroniseringskonflikter:

1. Synkroniser enheten før du forlater en stabil nettilkobling.
2. Repeter, legg til notater eller rett vanlig korttekst uten nett.
3. Koble til nettet igjen og synkroniser denne enheten før du fortsetter på en annen.
4. La den andre enheten fullføre sin egen synkronisering før du gjør flere endringer der.

Endringer i samlingens struktur krever mer omtanke. Å legge til et felt, fjerne en kortmal, endre notattyper eller gjøre lignende arbeid kan kreve en enveis synkronisering i stedet for en sammenslåing. Ved enveis synkronisering velger du om du vil beholde den lokale samlingen eller samlingen på AnkiWeb. Endringer på den andre siden kan bli erstattet.

Fortsett gjerne med vanlige repetisjoner og endringer i notater på reisen, men utsett kompliserte endringer i notattyper og maler hvis flere frakoblede enheter får ulike versjoner av samlingen. Hvis Anki ber deg velge opplasting eller nedlasting, stopp og finn ut hvilken samling som inneholder arbeidet du trenger, før du velger retning.

## Mediefiler er først lokale når de har nådd enheten

Anki lagrer lyd og bilder separat fra samlingsdataene. Ifølge [veiledningen om mediefiler](https://docs.ankiweb.net/media.html) kopieres filer som legges ved eller limes inn i et notat på datamaskinen, til den lokale mappen `collection.media`. Når en mediefil ligger i den mappen, trenger ikke kortet internett for å laste den inn.

Det svake punktet er klargjøringen. Samlingen og mediefilene synkroniseres separat, så lyd og bilder kan fortsatt være under overføring etter at kortene vises. [AnkiMobiles veiledning for synkronisering](https://docs.ankimobile.net/syncing.html) advarer om at mediefiler kan mangle helt til den første synkroniseringen er ferdig. En fullstendig liste over kortstokker beviser ikke at en samling med mange bilder eller lydfiler er klar.

Før du kobler fra nettet:

- synkroniser enheten der du la til mediefilene;
- vent til synkroniseringen av mediefilene er ferdig;
- synkroniser enheten du skal ha med deg, og vent også der;
- åpne kort med hver bilde- og lydtype du trenger;
- kjør **Check Media** (kontroller mediefiler) der funksjonen er tilgjengelig, for å finne notater som viser til manglende filer.

Den siste kontrollen er særlig nyttig for delte kortstokker. Noen ganger har forfatteren av kortstokken aldri lagt ved et bilde som kortene viser til. Da kan ikke gjentatt synkronisering laste det ned.

Lokale mediefiler betyr ikke at hvert kort inneholder alt det trenger. En kortmal kan vise til et bilde, et skript, en skrifttype eller en annen ressurs som ligger på nettet. Nettordbøker, nedlasting av delte kortstokker og utvidelser som kaller eksterne API-er, trenger fortsatt en forbindelse. Tekst-til-tale avhenger av stemmen og plattformen: en installert systemstemme kan fungere uten nett, mens en stemme som leveres av en nettjeneste, ikke gjør det. Test akkurat den funksjonen du trenger, i stedet for å anta at alle tekst-til-tale-funksjoner eller utvidelser oppfører seg likt.

## Slik synkroniserer Anki når du kobler til nettet igjen

Det vi kaller synkronisering av Anki etter bruk uten nett, består egentlig av to trinn: lokalt arbeid nå, synkronisering over nettet senere.

Når forbindelsen er tilbake, synkroniserer du enheten som inneholder arbeidet du gjorde uten nett. Vent til både samlingen og mediefilene er ferdig synkronisert. Synkroniser deretter den neste enheten før du repeterer eller redigerer der. Denne rekkefølgen gjør det lettere å finne den nyeste tilstanden hvis Anki ber deg løse en konflikt.

Kontroller resultatet. At animasjonen er ferdig, er ikke hele testen:

- finn et notat du la til uten nett;
- bekreft at et redigert felt har den nye teksten;
- se på repetisjonshistorikken eller tidspunktet for neste repetisjon på et kort du svarte på;
- åpne minst én bilde- eller lydfil du nylig har lagt til, på den andre enheten.

Hvis du redigerte samme notat på to enheter, les det ferdige notatet i stedet for å anta at sammenslåingen beholdt formuleringen du ønsket. Hvis synkroniseringsknappen blir rød eller du får valget mellom full opplasting og nedlasting, ikke klikk videre av gammel vane. En full nedlasting erstatter lokale endringer i samlingen. En full opplasting erstatter samlingen på AnkiWeb før de andre enhetene laster den ned.

## Uten jevnlig nettilgang kan du overføre samlingen som en fil

Anki kan fortsatt flytte en samling mellom enheter uten jevnlig tilgang til AnkiWeb. Det innebærer at du overfører den gjeldende samlingen fra én enhet til en annen, ikke at endringer fra flere enheter slås sammen.

[AnkiMobiles veiledning for overføring av samlinger](https://docs.ankimobile.net/collection-transfer.html) bruker en `collection.colpkg`-fil som inneholder alle kortstokker og informasjon om planlagte repetisjoner. Du eksporterer den gjeldende samlingen, flytter filen med AirDrop eller fildeling og importerer den på den andre enheten. [AnkiDroid-manualen](https://docs.ankidroid.org/manual.html) beskriver en lignende fremgangsmåte med USB for å overføre samlingen mellom Android og en datamaskin.

Når du importerer en fil med hele samlingen, erstattes samlingen som allerede ligger på mottakerenheten. Importen kan ikke slå sammen to samlinger som er endret hver for seg uten nett. La én enhet inneholde den gjeldende versjonen: eksporter fra den, importer på neste enhet, gjør endringene der, og overfør den nyere samlingen tilbake før du fortsetter på den første enheten.

Dette er nyttig under feltarbeid, på skip, på avsidesliggende steder eller i nettverk med begrenset tilgang der du av og til kan overføre filer, men ikke synkronisere regelmessig via nettskyen. For en vanlig flyreise eller pendling er det enklere å fullføre en AnkiWeb-synkronisering før avreise.

## Synkronisering er ikke en sikkerhetskopi av Anki

Synkronisering sørger for at enhetene har samme innhold. En utilsiktet sletting eller uønsket endring kan derfor spre seg til alle synkroniserte enheter.

Ankis installerte apper lagrer lokale sikkerhetskopier, men mediefiler krever egen oppfølging. [AnkiMobiles veiledning for innstillinger](https://docs.ankimobile.net/preferences.html) sier for eksempel at de automatiske sikkerhetskopiene inneholder kort og statistikk, men ikke lyd eller bilder. En full eksport av samlingen som inkluderer mediefiler, har et annet formål enn både synkronisering og historikken med automatiske sikkerhetskopier.

Hvis det ville være tungvint å bygge opp kortstokken igjen, bør du med jevne mellomrom lagre en full eksport med mediefiler et annet sted enn på enheten du bruker til daglig. Den mer generelle [veiledningen for sikkerhetskopiering av læringskort](/blog/how-to-back-up-flashcards/) forklarer hvordan du kan kombinere denne kopien for gjenoppretting med tekst som kan brukes i andre programmer, og de opprinnelige kildefilene.

## En ti minutters prøve i flymodus

Gjør dette på akkurat den bærbare datamaskinen, telefonen eller nettbrettet du skal ha med deg. En vellykket test på datamaskinen sier ingenting om tilstanden til mediemappen på telefonen.

1. Mens du er på nett, åpner du den installerte Anki-appen og synkroniserer. Hvis enheten er ny, må du først fullføre den første nedlastingen av samlingen.
2. Vent til synkroniseringen av mediefilene er ferdig. Ikke stopp bare fordi navnene på kortstokkene vises.
3. Åpne hver kortstokk du trenger. Prøv et utvalg kort med bilder, lyd, egendefinerte skrifttyper og eventuelle spesielle malfunksjoner du er avhengig av.
4. Slå på flymodus eller deaktiver alle nettverksforbindelser på annen måte.
5. Lukk Anki helt, åpne appen igjen og start kortstokken du trenger. Dette avdekker en arbeidsflyt som bare fungerte fordi skjermbildet allerede var åpent.
6. Repeter flere kort. Legg til ett tydelig merket testnotat og gjør én ufarlig tekstendring.
7. Avslutt og åpne appen igjen mens du fortsatt er uten nett. Bekreft at repetisjonene, det nye notatet, endringen og de lokale mediefilene er bevart.
8. Prøv hver ordbok, tekst-til-tale-stemme eller utvidelse du forventer å bruke. Noter hvilke deler som trenger nett.
9. Koble til nettet igjen og synkroniser denne enheten. Vent til både samlingen og mediefilene er ferdig synkronisert.
10. Synkroniser en annen enhet. Kontroller deretter testnotatet, tekstendringen, repetisjonstilstanden og mediefilene der før du sletter testinnholdet.

Ikke bruk prøven til å omarbeide notattyper på to enheter. Målet er å bekrefte at arbeidsflyten fungerer på reisen: riktig samling er lagret lokalt, de viktige mediefilene åpnes, arbeidet du gjør uten nett, bevares etter en omstart, og senere synkronisering overfører det til den andre enheten.

## Anki fungerer på reisen hvis du klargjør enheten

Ankis installerte apper passer godt til reiser når du ønsker en full lokal samling fremfor et lite utvalg kort lagret i hurtigbufferen. Begrensningene er konkrete: enheten trenger samlingen og mediefilene på forhånd, AnkiWeb fungerer bare på nett, og kortfunksjoner som bruker nettjenester, trenger fortsatt en forbindelse.

Hvis du velger mellom flere verktøy til reisen, bruker [sammenligningen av apper for læringskort uten nett](/blog/best-offline-flashcards-app/) de samme testene for kort, redigering, fremgang, mediefiler og senere synkronisering på fem produkter. Hvis du vurderer en annen læringsløsning av andre grunner enn nettilgang, se [Anki mot Nibomo](/blog/anki-vs-flashcards-open-source-app/).

Det praktiske svaret på «Fungerer Anki uten nett?» er ja på Windows, macOS, Linux, iPhone, iPad og Android når akkurat den enheten har samlingen og mediefilene du trenger. Synkroniser før du drar, prøv arbeidsflyten i flymodus, og start med å synkronisere enheten der du jobbet uten nett, når du kobler til igjen.
