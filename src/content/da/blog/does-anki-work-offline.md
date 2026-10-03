---
title: "Virker Anki offline i 2026? Computer, iPhone, Android og synkronisering"
description: "Ja – Ankis installerede apps til computer, iPhone, iPad og Android kan bruge en lokal samling offline. Se, hvad der kræver internet, hvordan du synkroniserer bagefter, og hvordan du gør medier klar."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "virker Anki offline"
  - "kan man bruge Anki offline"
  - "virker AnkiMobile offline"
  - "virker AnkiDroid offline"
  - "Anki offline synkronisering"
  - "AnkiWeb offline"
  - "brug Anki uden internet"
---

Anki behøver ikke kontakte en server for at vise dit næste kort. **Ankis installerede apps virker offline i 2026:** Anki på Windows, macOS og Linux, AnkiMobile på iPhone og iPad samt AnkiDroid på Android. Hver app bruger en samling, der er gemt på den pågældende enhed, så du kan repetere kort, oprette noter og lave almindelige rettelser uden internet.

Der er dog en nem fælde at falde i: AnkiWeb fungerer anderledes. Det er en browserbaseret tjeneste til repetition og synkronisering, ikke en Anki-app med offlinefunktion. En installeret app kan også kun bruge de kortsæt og medier, der allerede er nået frem til netop den enhed.

**Fakta kontrolleret:** 16. august 2026.

![En feltforsker føjer en post til et lokalt arkiv med fotos, lyd og tekst, mens radioforbindelsen i bjergene er nede](/blog/does-anki-work-offline.png)

## Det korte svar for hver platform

[Ankis officielle hjemmeside](https://apps.ankiweb.net/) viser computerappen, AnkiMobile til iOS, AnkiDroid til Android og AnkiWeb som dele af det samme økosystem. Der er forskel på, hvad de kan uden internet.

| Platform | Virker den offline? | Hvad du kan gøre uden internet | Hvad der kræver en forbindelse |
| --- | --- | --- | --- |
| **Anki til computer** på Windows, macOS eller Linux | **Ja.** Samlingen og mediemappen er lokale. | Repetere kort, tilføje noter, redigere noteindhold og bruge medier, der allerede er gemt på computeren. | Hente delte kortsæt, synkronisere med AnkiWeb og hente det, som et kort eller en tilføjelse anmoder om fra en onlinetjeneste. |
| **AnkiMobile** på iPhone eller iPad | **Ja.** Appen gemmer en lokal samling. | Repetere lokale kort, tilføje noter, redigere noteindhold og afspille lyd eller vise billeder, der allerede er på enheden. | Gennemføre den første synkronisering af samling og medier, bruge AnkiWeb og tilgå eksterne ressourcer. |
| **AnkiDroid** på Android | **Ja.** AnkiDroid gemmer samlingen på Android-enheden. | Repetere lokale kort, tilføje noter, redigere noteindhold og bruge medier, der findes på enheden. | Synkronisere eller hente manglende materiale, hente delte kortsæt og bruge kortfunktioner, der afhænger af netværket. |
| **AnkiWeb** i en browser | **Ingen offlinetilstand.** Det er en onlinetjeneste til repetition og synkronisering. | Regn ikke med at kunne bruge den, når forbindelsen forsvinder. | Bruge en internetforbindelse eller skifte til en installeret app, som du har gjort klar på forhånd. |

Du kan altså bruge Anki offline, hvis du mener en installeret app, der allerede har den rigtige samling. AnkiWeb i en browser kræver stadig en forbindelse.

## Repetition og rettelser offline gemmes først på den enhed, du bruger

Når du besvarer kort offline, registrerer Anki repetitionerne i den lokale samling. Planlægningsalgoritmen fortsætter ud fra denne lokale tilstand. Nye noter og almindelige rettelser gemmes også lokalt. Intet dukker op på en anden enhed, før du igen har forbindelse og synkroniserer.

Synkronisering med AnkiWeb er valgfri, hvis du kun studerer på én enhed. Den flytter ændringer i samlingen mellem enheder. [Ankis synkroniseringsmanual](https://docs.ankiweb.net/syncing.html) forklarer, at repetitioner og noterettelser fra flere enheder normalt kan flettes. Hvis du har repeteret det samme kort to steder, bevares begge svar i repetitionshistorikken, og kortets tilstand bestemmes af det seneste svar.

Denne rutine mindsker risikoen for unødige synkroniseringskonflikter:

1. Synkroniser enheden, før du forlader en stabil forbindelse.
2. Repetér kort, tilføj noter eller ret almindelig korttekst offline.
3. Opret forbindelse igen, og synkroniser enheden, før du fortsætter på en anden.
4. Lad den anden enhed afslutte sin egen synkronisering, før du foretager flere ændringer der.

Ændringer i samlingens struktur kræver mere omtanke. Hvis du tilføjer et felt, fjerner en kortskabelon, ændrer notetyper eller laver lignende ændringer, kan det kræve synkronisering i én retning frem for en fletning. Her skal du vælge at beholde enten den lokale samling eller samlingen på AnkiWeb. Ændringer på den anden side kan blive erstattet.

Fortsæt derfor gerne med almindelig repetition og noterettelser på rejsen, men udskyd større ændringer i notetyper og skabeloner, hvis du ændrer samlingen forskelligt på flere enheder, mens de er offline. Hvis Anki beder dig vælge upload eller download, så stop og find ud af, hvilken samling der indeholder det arbejde, du vil bevare, før du vælger retning.

## Medier er først lokale, når de er nået frem til enheden

Anki gemmer lyd og billeder adskilt fra samlingsdataene. For computerappen forklarer [mediedokumentationen](https://docs.ankiweb.net/media.html), at filer, som du vedhæfter eller indsætter i en note, kopieres til den lokale mappe `collection.media`. Når mediefilen ligger i den mappe, behøver kortet ikke internet for at indlæse den.

Forberedelsen er det svage punkt. Samlingen og medierne synkroniseres hver for sig, så lyd og billeder kan stadig være under overførsel, efter at kortene er dukket op. [AnkiMobiles synkroniseringsvejledning](https://docs.ankimobile.net/syncing.html) advarer om, at medier kan mangle, indtil den første synkronisering er helt færdig. En komplet liste over kortsæt beviser ikke, at en samling med mange billeder eller lydfiler er klar.

Før du går offline:

- synkroniser på den enhed, hvor du tilføjede medierne;
- vent, til mediesynkroniseringen er færdig;
- synkroniser den enhed, du tager med, og vent også der;
- åbn kort med hver af de billed- og lydtyper, du har brug for;
- kør **Check Media**, hvor funktionen findes, for at finde noter, der henviser til manglende filer.

Det sidste tjek er relevant for delte kortsæt. Nogle gange har forfatteren aldrig inkluderet et billede, som et kort henviser til. Så kan gentagen synkronisering heller ikke hente det.

Selv med lokale medier kan et kort være afhængigt af nettet. En kortskabelon kan henvise til et billede, et script, en skrifttype eller en anden ressource på nettet. Onlineordbøger, download af delte kortsæt og tilføjelser, der kalder eksterne API'er, kræver stadig en forbindelse. Tekst-til-tale afhænger af stemmen og platformen: En installeret systemstemme kan virke offline, mens en stemme fra en onlinetjeneste ikke gør. Test den konkrete funktion i stedet for at antage, at al tekst-til-tale eller alle tilføjelser fungerer ens.

## Sådan synkroniserer Anki dit offlinearbejde, når forbindelsen er tilbage

Ankis offlinesynkronisering består egentlig af to trin: lokalt arbejde nu og synkronisering over netværket senere.

Når forbindelsen er tilbage, skal du synkronisere den enhed, der indeholder offlinearbejdet. Vent, til både samlingen og medierne er synkroniseret. Synkroniser derefter den næste enhed, før du repeterer eller redigerer der. Den rækkefølge gør det nemmere at identificere den nyeste tilstand, hvis Anki beder dig løse en konflikt.

Tjek resultatet, selv om synkroniseringsanimationen er færdig:

- find en note, du tilføjede offline;
- bekræft, at et redigeret felt har den nye tekst;
- se repetitionshistorikken eller næste repetitionsdato for et kort, du besvarede;
- åbn mindst ét nyt billede eller én ny lydfil på den anden enhed.

Hvis du redigerede den samme note på to enheder, skal du læse den endelige note i stedet for at antage, at fletningen bevarede den ordlyd, du ønskede. Hvis der vises en rød synkroniseringsknap eller et valg mellem fuld upload og download, så klik ikke videre af vane. En fuld download erstatter lokale ændringer i samlingen. En fuld upload erstatter samlingen på AnkiWeb, før de andre enheder henter den.

## Uden regelmæssig internetadgang kan du flytte samlingen som en fil

Anki kan stadig flytte en samling mellem enheder uden regelmæssig adgang til AnkiWeb. Det er dog en overdragelse, ikke en fletning af flere enheders ændringer.

[AnkiMobiles vejledning til overførsel af samlinger](https://docs.ankimobile.net/collection-transfer.html) bruger en fil med navnet `collection.colpkg`, som indeholder alle kortsæt og planlægningsoplysninger. Du eksporterer den aktuelle samling, flytter filen med AirDrop eller fildeling og importerer den på den anden enhed. [AnkiDroids manual](https://docs.ankidroid.org/manual.html) beskriver en tilsvarende arbejdsgang med USB til at overføre samlingen mellem Android og computer.

Import af en fil med en fuld samling erstatter samlingen, der allerede findes på modtagerenheden. Den kan ikke kombinere to offlinesamlinger, som du har ændret uafhængigt af hinanden. Lad én enhed indeholde den gældende samling: Eksportér fra den, importér på den næste enhed, lav dine ændringer der, og overfør den nyere samling tilbage, før du fortsætter på den første enhed.

Det er nyttigt ved feltarbejde, om bord på skibe, på fjerntliggende arbejdssteder eller på netværk med adgangsbegrænsninger, hvor lejlighedsvis filoverførsel er mulig, men løbende synkronisering via skyen ikke er. Til en almindelig flyrejse eller pendlertur er det nemmere at afslutte en AnkiWeb-synkronisering inden afgang.

## Synkronisering er ikke en Anki-sikkerhedskopi

Synkronisering holder enhederne ajour med hinanden. Derfor kan en utilsigtet sletning eller en uønsket ændring sprede sig til alle synkroniserede enheder.

Ankis installerede apps gemmer lokale sikkerhedskopier, men medier kræver særskilt opmærksomhed. [AnkiMobiles vejledning til indstillinger](https://docs.ankimobile.net/preferences.html) siger for eksempel, at de automatiske sikkerhedskopier indeholder kort og statistik, men ikke lyd eller billeder. En fuld eksport af samlingen med medier har et andet formål end både synkronisering og historikken med automatiske sikkerhedskopier.

Hvis det ville være besværligt at genopbygge kortsættet, så gem med jævne mellemrum en fuld eksport med medier et andet sted end på den enhed, du bruger til daglig. Den mere generelle [vejledning til sikkerhedskopiering af flashcards](/blog/how-to-back-up-flashcards/) forklarer, hvordan du kombinerer en kopi til gendannelse med tekst i et format, du kan flytte mellem værktøjer, og de oprindelige kildefiler.

## En prøve i flytilstand på ti minutter

Lav denne test på præcis den computer, telefon eller tablet, du tager med. En vellykket test på computeren siger intet om tilstanden i telefonens mediemappe.

1. Åbn den installerede Anki-app, mens du har internet, og synkroniser. Hvis enheden er ny, skal du først hente hele samlingen.
2. Vent, til mediesynkroniseringen er færdig. Stop ikke, bare fordi navnene på kortsættene er dukket op.
3. Åbn alle de kortsæt, du skal bruge. Prøv kort med billeder, lyd, brugerdefinerede skrifttyper og de særlige skabelonfunktioner, du er afhængig af.
4. Slå flytilstand til, eller deaktiver på anden vis alle netværksforbindelser.
5. Luk Anki helt, åbn appen igen, og start det kortsæt, du skal bruge. Det afslører, hvis du kun kunne fortsætte, fordi kortene allerede var åbne i appen.
6. Repetér flere kort. Tilføj én tydeligt markeret testnote, og lav én harmløs tekstændring.
7. Luk og genåbn appen, mens du stadig er offline. Bekræft, at repetitionerne, den nye note, rettelsen og de lokale medier er bevaret.
8. Prøv de ordbøger, tekst-til-tale-stemmer og tilføjelser, du forventer at bruge. Notér, hvilke dele der kræver netværk.
9. Opret forbindelse igen, og synkroniser enheden. Vent, til både samlingen og medierne er synkroniseret.
10. Synkroniser en anden enhed, og tjek derefter testnoten, rettelsen, kortets repetitionstilstand og medierne der, før du sletter testindholdet.

Brug ikke prøven til at lave om på notetyper på to enheder. Målet er at bekræfte, at du kan bruge Anki på rejsen: Den rigtige samling er gemt lokalt, de vigtige medier kan åbnes, offlinearbejdet overlever en genstart, og den senere synkronisering overfører det til en anden enhed.

## Anki kan klare rejsen, hvis du gør enheden klar

Ankis installerede apps er velegnede til rejser, når du vil have en komplet lokal samling frem for et lille udvalg af kort i cachen. Begrænsningerne er konkrete: Enheden skal have samlingen og medierne på forhånd, AnkiWeb kræver fortsat internet, og kortfunktioner, der bruger netværket, kræver stadig en forbindelse.

Hvis du vælger mellem flere værktøjer til rejsen, tester [sammenligningen af flashcard-apps med offlinefunktion](/blog/best-offline-flashcards-app/) kort, redigering, læringsfremskridt, medier og senere synkronisering på samme måde i fem produkter. Hvis du overvejer andre læringsværktøjer af andre grunde end internetforbindelsen, så læs [Anki vs. Nibomo](/blog/anki-vs-flashcards-open-source-app/).

Det praktiske svar på “Virker Anki offline?” er ja på computer, iPhone, iPad og Android, når netop den enhed har den samling og de medier, du skal bruge. Synkroniser før afgang, test i flytilstand, og synkroniser først enheden med dit offlinearbejde, når forbindelsen er tilbage.
