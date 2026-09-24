---
title: "Alternatieven voor Anki in 2026: wat je behoudt, verliest en wint bij een overstap"
description: "Vergelijk zeven alternatieven voor Anki op behoud van gegevens, offline gebruik, planning, prijs, broncode en zelf hosten. En ontdek wanneer je beter bij Anki blijft."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "alternatieven voor Anki"
  - "Anki alternatief"
  - "apps zoals Anki"
  - "opensource alternatief voor Anki"
  - "gratis alternatieven voor Anki"
  - "Anki alternatief voor iOS"
  - "overstappen van Anki"
---

Een Anki-import kan zonder foutmelding worden afgerond en toch precies datgene verliezen waardoor je kaartenset werkt. De tekst komt mee en je kunt de kaarten openen. Pas daarna merk je dat de CSS ontbreekt, een audioveld leeg is, elke kaart als nieuw geldt of een notitie niet meer de verwachte kaarten met hun verschillende vraagrichtingen oplevert.

Daar kan een overstap naar een alternatief voor Anki duur uitpakken. Een overzichtelijkere editor of een goedkoper abonnement zie je meteen. Wat er met sjablonen, herhaalgeschiedenis, geplande herhaaldatums en uitbreidingen gebeurt, merk je vaak pas wanneer de schade al is aangericht. Hetzelfde geldt voor offline toegang tot media en de mogelijkheid om je gegevens weer mee te nemen.

Deze vergelijking begint bij wat er tijdens een migratie behouden blijft. We bekijken zeven apps zoals Anki: wat ze uit een bestaande verzameling kunnen overnemen, wat er na de import verandert en wanneer bij Anki blijven de veiligere uitkomst is.

> **Over mijn betrokkenheid:** Ik ben Kirill Markin en ik bouw [Nibomo](https://nibomo.com/), een van de producten hieronder. Ik heb het opgenomen vanwege de open broncode, de mogelijkheid om het zelf te hosten en de workflows met AI-agents. Het is niet automatisch de winnaar: het heeft geen directe `.apkg`-import, bij de migratie vanuit Anki gaan gegevens verloren en de zelfgehoste stack beheren is serieus infrastructuurwerk.

**Feiten gecontroleerd op:** 28 augustus 2026. De prijzen zijn de openbare Amerikaanse prijzen of de vermelde lokale prijzen die op die datum beschikbaar waren. Belastingen, regio's, onderwijskortingen en facturering via appstores kunnen het bedrag veranderen.

![Een horlogemaker controleert of het bestaande uurwerk van een zakhorloge in een andere kast past](/blog/best-anki-alternatives.png)

## Het korte antwoord voordat je iets verplaatst

Blijf in principe bij Anki. Stap alleen over als een andere app een terugkerend probleem oplost dat de migratie de moeite waard maakt.

Drie producten accepteren Anki-pakketten met leergegevens, maar hun toezeggingen gaan niet allemaal even ver:

- **Mnemosyne** beschrijft een volledige Anki-import, inclusief aangepaste kaarttypen en leergegevens. Het sluit hier het beste aan bij een traditionele desktopworkflow met lokale gegevens en opensourcesoftware, al heeft het geen native iOS-app.
- **Mochi** importeert `.apkg`-bestanden met herhaalgeschiedenis. Het zet HTML om naar Markdown, verwijdert CSS en JavaScript en vervangt de vier herhaalknoppen van Anki door Remembered of Forgot.
- **RemNote** importeert `.apkg`-bestanden, de meeste notitietypen en herhaalgeschiedenis. De huidige handleiding zegt ook dat geïmporteerde kaarten in een aparte wachtrij **Need to Learn** komen. Lees ‘herhaalgeschiedenis geïmporteerd’ dus niet als ‘de Anki-wachtrij van vandaag exact gekopieerd’.

Bij de overige vier bouw je de inhoud opnieuw op, in plaats van de verzameling te migreren:

- **Quizlet** is handig voor openbare sets, klassen, spellen en begeleid oefenen.
- **Brainscape** biedt groepen een eenvoudiger herhaalproces waarin je op een schaal van 1 tot 5 aangeeft hoe zeker je het antwoord weet.
- **SuperMemo** betekent overstappen naar de eigen, gesloten methode en cursuscatalogus van dat product.
- **Nibomo** biedt web- en native apps onder de MIT-licentie, een zelfgehoste backend en toegang via een API en MCP. De TXT- of CSV-workflow met controle van het resultaat behoudt je leerstatus uit Anki niet.

Als je kaarten afhankelijk zijn van exacte weergave, uitbreidingen of de huidige herhaalwachtrij, is bij Anki blijven geen besluiteloosheid. Het is het antwoord.

## Breng eerst in kaart wat er echt in je Anki-verzameling zit

Een ‘kaartenset’ is niet één object dat je zomaar kunt meenemen. Maak voordat je producten vergelijkt onderscheid tussen de onderdelen die je mogelijk wilt verplaatsen.

| Onderdeel van de verzameling | Wat Anki in een pakket kan opnemen | Wat de doelapp expliciet moet ondersteunen |
| --- | --- | --- |
| **Inhoud van notities** | Tekstvelden en opgeslagen HTML | Toewijzing van velden, invulvragen, niet-Latijnse tekst, code en regeleinden |
| **Kaartgeneratie** | Notitietypen en kaartsjablonen | Kaarten in beide richtingen, aangepaste velden, CSS en JavaScript-gedrag |
| **Media** | Lokale afbeeldingen, audio en andere bestanden als **Include media** is ingeschakeld | Uitpakken van bestanden, verwijzingen, ondersteunde formaten en synchronisatie tussen apparaten |
| **Organisatie** | Kaartensets, onderliggende sets, tags en optionele voorinstellingen voor kaartensets | Hiërarchie, betekenis van tags, voorinstellingen en selectie van te leren materiaal |
| **Leerstatus** | Planningsgegevens en herhaalgeschiedenis als die worden meegenomen | Geplande herhaaldatums, intervallen, momenten waarop je een eerder geleerde kaart weer bent vergeten en omzetting naar de planner van de doelapp |
| **Code voor je workflow** | Uitbreidingen worden niet meegeleverd in het kaartensetpakket | Een vervanging voor hulpmiddelen in de kaartbrowser, bulkbewerkingen, notitiegeneratie en ander gedrag van uitbreidingen |

De [exporthandleiding van Anki](https://docs.ankiweb.net/exporting.html) beschrijft al deze pakketopties. Een tekstimport ziet alleen de eerste rij, en misschien tags. Een directe `.apkg`-import kan meer zien, maar elk product bepaalt zelf wat het omzet en wat het weglaat.

Daarom is ‘importeert Anki’ te vaag om een overstap op te baseren. Stel drie afzonderlijke vragen:

1. **Betekent de kaart nog hetzelfde?** Controleer velden, de vraagrichtingen van gegenereerde kaarten, invulvragen, media en weergave.
2. **Weet de doelapp wat ik al heb geleerd?** Controleer eerdere herhalingen, de huidige status, geplande herhaaldatums en de eerste echte wachtrij.
3. **Kan ik weer vertrekken?** Exporteer vanuit de doelapp en bekijk wat het exportformaat daadwerkelijk bevat.

Een importfunctie kan voor de eerste vraag slagen en voor de andere twee zakken.

## Wat de migratie overleeft

| Product | Importroute vanuit Anki | Leerstatus | Belangrijkste mogelijke verlies om te controleren |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Directe `.apkg`-import](https://help.remnote.com/en/articles/6751471-importing-from-anki) voor de meeste notitietypen, media en herhaalgeschiedenis | De herhaalgeschiedenis komt mee, maar geïmporteerde kaarten komen in de aparte wachtrij **Need to Learn** van RemNote | Uitgebreide CSS, aangepast JavaScript, bepaalde vormen van tekst-naar-spraak en hernoemde velden voor beeldafdekking |
| [Mochi](https://mochi.cards/) | [Directe `.apkg`-import](https://mochi.cards/docs/import-and-export/importing/) inclusief herhaalgeschiedenis | De geschiedenis komt mee; de documentatie belooft geen identieke Anki-wachtrij of herhaaldatums | HTML wordt Markdown; CSS en JavaScript worden verwijderd; toekomstige beoordelingen hebben twee opties |
| [Mnemosyne](https://mnemosyne-proj.org/) | Het project beschrijft [volledige Anki-import](https://mnemosyne-proj.org/features) met aangepaste kaarttypen en leergegevens | Leergegevens worden in een andere planner geïmporteerd | Het exacte gedrag van sjablonen, de omgezette planning en de kaartweergave moet je nog testen |
| [Quizlet](https://quizlet.com/) | [Begrippen en definities plakken](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Niets uit Anki | Notitietypen, sjablonen, kaartensets, mediastructuur en alle planningsgegevens |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX of ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Niets uit Anki | Sjablonen, uitbreidingen, regels voor media en alle planningsgegevens |
| [SuperMemo](https://www.supermemo.com/) | [Vraag-en-antwoordregels met scheidingstekens plakken](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), maximaal 100 tegelijk | Niets uit Anki | Structuur van de verzameling, media, sjablonen en alle planningsgegevens |
| [Nibomo](https://nibomo.com/) | Met AI conceptkaarten opstellen vanuit Anki TXT of CSV en het resultaat controleren | Niets uit Anki | Geen `.apkg`-ondersteuning; sjablonen, getrouwe mediaweergave, de hiërarchie van kaartensets en alle planningsgegevens blijven achter |

## Prijs, offline gebruik, planning en eigenaarschap

| Product | Prijs gecontroleerd op 28 augustus 2026 | Grenzen van offline gebruik | Planner | Broncode en zelf hosten |
| --- | --- | --- | --- | --- |
| **RemNote** | [Gratis; Pro $8 per maand, gefactureerd als $96 per jaar](https://www.remnote.com/pricing) | Geïnstalleerde apps kunnen na inloggen offline bewerken en herhalen. De desktopapp bewaart alle media uit de kennisbank; mobiel worden slechts enkele recente afbeeldingen gecachet. Voor de webversie moet een tabblad open blijven. | [Anki SM-2 of FSRS v6 in bèta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Gesloten kern; geen ondersteunde route voor zelf hosten gedocumenteerd |
| **Mochi** | [Gratis offline; Pro-synchronisatie $5 per maand](https://mochi.cards/#pricing-section) | Geïnstalleerde apps werken volledig offline zonder account. Browseropslag kan worden gewist. | [De eigen planner van Mochi of FSRS](https://mochi.cards/docs/reviewing/fsrs/), beide met Remembered / Forgot | Gesloten kern; openbare repositories bevatten integraties, geen app die je zelf kunt hosten |
| **Mnemosyne** | Gratis | [Lokaal desktopgebruik en offline herhalen op Android](https://mnemosyne-proj.org/download-mnemosyne.php); op Android kun je niet bewerken. Geen native iOS-app. | Adaptieve planning op basis van geheugenscores van 0 tot 5 | Broncode met licenties per component; synchronisatieserver die je zelf op een desktop of zonder grafische interface kunt draaien |
| **Quizlet** | Gratis basisgebruik; [Plus $35,99 per jaar, Plus Unlimited $44,99 per jaar](https://quizlet.com/upgrade?source=signup) | Gedownloade sets werken offline in de iOS- en Android-apps met Flashcards en Match. | [Gespreid herhalen op het web](https://quizlet.com/features/spaced-repetition) voor sets met minstens 100 begrippen; mobiele ondersteuning staat nog als binnenkort beschikbaar vermeld. Learn is een aparte adaptieve oefenvorm. | Gesloten gehoste dienst; geen ondersteunde route voor zelf hosten |
| **Brainscape** | [Gratis; Pro $7,99 per maand bij jaarlijkse facturering](https://www.brainscape.com/pricing) | [De mobiele app kan werk offline bewaren en eerder gedownloade klassen later synchroniseren](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); de documentatie belooft geen volledige lokale bibliotheek. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), met scores van 1 tot 5 | Gesloten gehoste dienst; geen ondersteunde route voor zelf hosten |
| **SuperMemo** | Gratis account met beperkingen; [35,99 PLN per maand of 359 PLN per jaar](https://www.supermemo.com/en/premium-subscription) | Gedownloade mobiele cursussen werken offline; bewerken, AI, zoeken, opnamen en statistieken niet. | [De eigen, gesloten SuperMemo-methode](https://www.supermemo.com/en/supermemo-method) | Gesloten gehoste dienst; geen ondersteunde route voor zelf hosten |
| **Nibomo** | [Gehoste kern gratis tijdens de bèta; software gratis zelf te hosten](/nl/pricing/), plus je infrastructuurkosten | Native apps schrijven lokaal na online inloggen en het voor het eerst volledig laden van de werkruimte; externe media moeten al gecachet zijn. | [FSRS](/docs/architecture/#scheduling) | MIT; de ondersteunde productieomgeving is een volledige stack rond AWS |

Deze tabellen zijn geen scorelijsten. Een directe importfunctie kan belangrijker zijn dan alle andere functies samen als je 30.000 kaarten hebt die je al lange tijd herhaalt. Een native iPhone-app kan de doorslag geven als je daar herhaalt. Toegang tot de broncode heeft alleen waarde als jij of iemand die je vertrouwt de code gaat onderhouden.

Elk product hier heeft een gratis instapmogelijkheid, maar migreren naar een gratis alternatief voor Anki is niet kosteloos. De abonnementsprijs is makkelijk te berekenen. Sjablonen opnieuw bouwen, media controleren en opnieuw beginnen zonder je herhaalgeschiedenis kosten vaak meer.

## RemNote: kaarten onderbrengen in onderling verbonden notities

RemNote verandert waar kaarten vandaan komen. In plaats van een losse kaartenset naast je collegeaantekeningen te onderhouden, maak je kaarten binnen een hiërarchisch overzicht, document of PDF-workflow. Dat is een goede reden om Anki te verlaten als materiaal kopiëren tussen een notitie-app en een flashcardapp het tijdrovende deel is geworden.

De migratieroute is breed, maar de wachtrij vraagt om een zorgvuldige uitleg. De [huidige Anki-importhandleiding](https://help.remnote.com/en/articles/6751471-importing-from-anki) van RemNote zegt dat je een `.apkg` moet exporteren met planningsgegevens, voorinstellingen voor kaartensets en media. De import neemt herhaalgeschiedenis en de meeste notitietypen mee, waaronder basiskaarten, invulvragen en gangbare kaarten met beeldafdekking.

Diezelfde handleiding zegt dat nieuw geïmporteerde kaarten in een aparte wachtrij **Need to Learn** terechtkomen. De geschiedenis is dus beschikbaar voor RemNote, maar de documentatie belooft niet dat je huidige Anki-wachtrij met geplande herhalingen ongewijzigd terugkomt. Uitgebreide CSS verdwijnt ook, aangepast JavaScript wordt niet ondersteund, bepaalde vormen van tekst-naar-spraak tijdens het leren werken niet en import van beeldafdekking is afhankelijk van de verwachte namen van notities en velden.

Importeer een representatieve kaartenset en bekijk zowel de kaarten als de eerste wachtrij. Een import die er netjes uitziet, is maar de helft van de test.

De geïnstalleerde desktop- en mobiele apps werken offline na installatie en inloggen. De [handleiding voor offline gebruik](https://help.remnote.com/en/articles/6752029-offline-mode) maakt een belangrijk onderscheid voor media: de desktopapp slaat alle afbeeldingen en PDF's uit de kennisbank op, terwijl de mobiele app maar een deel van de recente afbeeldingen cachet. De webapp kan doorgaan in een tabblad dat al openstaat, maar kan offline niet opnieuw worden gestart.

Gebruik RemNote als onderling verbonden notities je genoeg opleveren om je verzameling anders in te richten. Blijf bij Anki als kaartsjablonen en uitbreidingen de basis van je werkwijze vormen en geen extraatjes zijn.

## Mochi: lokale Markdown met een volledige eigen export

Mochi is een bescheidener alternatief voor mensen die lokale gegevens, kaarten in Markdown en minder knoppen op het scherm willen. De geïnstalleerde apps draaien op alle grote desktop- en mobiele platforms en zijn [volledig offline zonder account](https://mochi.cards/docs/getting-started/download-and-install/) te gebruiken. Synchronisatie is het betaalde onderdeel en kost $5 per maand.

De directe Anki-import neemt herhaalgeschiedenis mee. Daarmee ligt Mochi ruim voor op de opties die alleen tekst accepteren. Ook de omzetting wordt ongebruikelijk duidelijk beschreven: Mochi verwijdert CSS en JavaScript en zet HTML om naar Markdown. Dat werkt als de betekenis in de tekst en gewone bijlagen zit. Bepaalt het sjabloon de betekenis, dan vraagt die omzetting om extra aandacht.

Mochi biedt inmiddels twee planners. Het eigen algoritme blijft de standaard, maar je kunt [FSRS inschakelen](https://mochi.cards/docs/reviewing/fsrs/) zonder bestaande voortgang in Mochi te resetten. FSRS leidt de kaartstatus af uit de herhaalgeschiedenis die Mochi heeft. De beoordeling blijft ook onder FSRS binair: Remembered of Forgot. Anki-gebruikers die Hard en Easy als afzonderlijke signalen gebruiken, moeten dus rekening houden met een ander dagelijks ritme.

Je gegevens weer exporteren is duidelijker geregeld dan bij de meeste gesloten apps. Een export in het eigen [`.mochi`-formaat](https://mochi.cards/docs/import-and-export/exporting/) bevat kaarten, sjablonen, bijlagen, tags, de structuur van kaartensets en herhaalgeschiedenis. Markdown en CSV zijn elders makkelijker te bekijken, maar laten herhaalgeschiedenis en andere metadata weg.

De openbare GitHub-repositories van Mochi bevatten [integraties en bijbehorende hulpmiddelen](https://github.com/mochi-cards/open-source), niet de kernapp of een ondersteunde synchronisatieserver. Kies het voor offline gebruik en de mogelijkheid om je gegevens mee te nemen, niet voor zeggenschap over de broncode.

## Mnemosyne: overstappen naar opensourcesoftware op de desktop

Mnemosyne komt het dichtst bij het traditionele model van een programma met een lokale database. De huidige versie ondersteunt Windows, macOS en Linux, met een Android-client voor offline herhalen. De functiepagina beschrijft kaarten met rijke inhoud, hiërarchische tags, plug-ins, een beoordelingsschaal van 0 tot 5 en volledige Anki-import met aangepaste kaarttypen en leergegevens.

Dit is hier de meest directe overstap naar opensourcesoftware als je Anki wilt verlaten zonder over te stappen naar een groot notitiesysteem of een clouddienst. Het heeft ook een [ingebouwde synchronisatieserver](https://mnemosyne-proj.org/help/syncing) die op een desktop of een machine zonder grafische interface kan draaien en leergegevens van meerdere clients kan samenvoegen.

De beperkingen horen bij de afweging. De Android-client [kan geen kaarten bewerken](https://mnemosyne-proj.org/help/android-client). iOS-gebruikers moeten herhalen via de browserserver die op een andere machine draait. De officiële functiepagina van die server waarschuwt dat hij geen beveiligingsfuncties heeft. Zelf een synchronisatieserver draaien betekent ook dat je de server bereikbaar moet houden, het netwerk moet configureren en back-ups van de gegevensmap moet maken.

De licenties liggen genuanceerder dan het label ‘GPL’ suggereert: het [licentiebestand van het project](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) verwijst naar verschillende voorwaarden per component. De [licentie van de kern](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) gebruikt AGPL v3 met een extra bepaling voor naam- en auteursvermelding, terwijl [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) LGPL v3 gebruikt. Lees die bestanden als je de software wilt aanpassen of verspreiden.

## Quizlet: overstappen voor de klas, met verlies bij de migratie

Quizlet blinkt uit in een ander soort werk. Openbare leersets, klassen van docenten, delen, Match, Test, Learn en groepsactiviteiten zijn makkelijker aan een klas over te dragen dan een aangepast Anki-profiel.

De migratie blijft beperkt tot platte tekst. Quizlet kan geplakte regels omzetten in begrippen en definities, maar leest geen `.apkg` om notitietypen, sjablonen, planning of herhaalgeschiedenis te reconstrueren. Makers kunnen [hun eigen sets als gekopieerde tekst exporteren](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), zonder afbeeldingen. Sets die van andere gebruikers zijn gekopieerd, kunnen niet worden geëxporteerd. Je kunt dus inhoud meenemen, geen complete verzameling.

De planning van Quizlet is in ontwikkeling. De nieuwe functie [Spaced Repetition](https://quizlet.com/features/spaced-repetition) wordt op het web automatisch actief voor sets met minstens 100 begrippen en gebruikt de beoordelingen Repeat, Hard, Okay en Easy. Quizlet vermeldt mobiele ondersteuning nog als binnenkort beschikbaar. Learn blijft een aparte adaptieve oefenvorm met gebruikslimieten die van je abonnement afhangen.

Offline gebruik betekent ook hier de mobiele apps, niet de website. Quizlet slaat automatisch acht recente sets op en laat je er meer downloaden. [Flashcards en Match werken offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps); de voortgang wordt gesynchroniseerd zodra je weer verbinding hebt.

Stap hiernaar over als verspreiding van materiaal en activiteiten in de klas het doel zijn. Een persoonlijk herhaalschema dat je al lang gebruikt opnieuw opbouwen alleen om die functies te krijgen, is meestal geen goede ruil.

## Brainscape: minder keuzes over de planning, minder diepgang bij migratie

Brainscape vraagt hoe zeker je het antwoord weet, met een score van 1 tot 5, en gebruikt dat signaal om kaarten die je minder goed kent sneller terug te laten komen. De volledige formule is niet openbaar, maar de werkwijze is makkelijk uit te leggen aan een klas die samen leert.

Het accepteert CSV-, TXT-, XLSX- en ODS-bestanden. Dat is handig voor kaarten met een voor- en achterkant, maar betekent ook dat sjablonen, uitbreidingen, regels voor media en Anki-leergegevens achterblijven. Een persoonlijke back-up exporteren is een Pro-functie en levert bestanden op die je in een spreadsheet kunt openen en later opnieuw kunt importeren.

Volgens het huidige helpcentrum van Brainscape hebben de website en mobiele apps nu dezelfde basisfuncties voor zoeken, maken, delen en leren. Het beschrijft ook mobiel gebruik zonder verbinding, handmatig opnieuw synchroniseren en updates van klassen die al naar het apparaat zijn gedownload. Dat biedt een praktische manier om na offline gebruik verder te gaan, maar is geen belofte dat je hele account als volledige lokale bibliotheek beschikbaar is.

Persoonlijke kaartensets exporteren blijft een [Pro-functie](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Er is geen officiële uitgave van de broncode of route om zelf te hosten.

Brainscape is het overwegen waard als Anki te veel configuratie vraagt van de mensen die ermee moeten leren. Het is geen goede uitweg voor iemand die die configuratiemogelijkheden al goed benut.

## SuperMemo: kies de methode en accepteer een nieuwe start

De huidige dienst SuperMemo.com is een platform om talen te leren op het web, iOS en Android, gebouwd rond de eigen, gesloten planningsmethode van SuperMemo. Het staat los van het oudere Windows-product dat mensen die SuperMemo al lang gebruiken wellicht kennen.

Dit is een keuze voor een methode en een catalogus, geen naadloze Anki-migratie. SuperMemo ondersteunt [kaarten in bulk maken door vraag-en-antwoordregels met scheidingstekens te plakken](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), met een limiet van 100 kaarten per import. Ik heb geen actuele officiële `.apkg`-importfunctie of exportroute voor gebruikers van de gehoste dienst gevonden. Sjablonen, uitbreidingen, mediastructuur en herhaalgeschiedenis komen via die gedocumenteerde route dus niet mee.

Met gedownloade cursussen kun je offline leren in de mobiele apps. De [handleiding voor offline gebruik](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) sluit AI-functies, MemoCards toevoegen, zoeken, opnamen, statistieken en de cursuseditor uit. Bereid het materiaal dus voor en synchroniseer voordat je de verbinding verbreekt.

Kies SuperMemo als je de eigen methode of cursuscatalogus graag genoeg wilt gebruiken om een nieuw herhaalschema te beginnen. Als behoud van je bestaande planning vooropstaat, lost het het verkeerde probleem op.

## Nibomo: toegang tot de broncode van de hele stack, met de zwakste Anki-import

Bij Nibomo kun je een groot deel van het systeem zelf in handen nemen. De [repository met MIT-licentie](https://github.com/kirill-markin/flashcards-open-source-app) bevat de webapp, iOS- en Android-clients, backend, offline synchronisatie, infrastructuur, [openbare API](/docs/api/) en [MCP-server](/docs/mcp-connector/). Herhalingen gebruiken [FSRS](/docs/architecture/#scheduling). Web, iOS en Android schrijven eerst lokaal, zetten wijzigingen in een uitgaande wachtrij en synchroniseren zodra er weer verbinding is.

Dat maakt het nog niet compatibel met Anki. Nibomo kan geen `.apkg` of `.colpkg` lezen. De ondersteunde [migratie via Anki TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) is een workflow waarin je met AI conceptkaarten opstelt en controleert, vooral bedoeld voor kaarten die hoofdzakelijk uit tekst bestaan. Sjablonen, uitbreidingen, de hiërarchie van kaartensets, geplande herhaaldatums, intervallen en eerdere herhalingen blijven niet behouden. Mediaverwijzingen in een TXT-bestand zijn geen mediabestanden. Sets met veel media moet je daarom apart opnieuw opbouwen en controleren.

Ook het eigen `flashcards.zip`-pakket van Nibomo is beperkter dan een back-up. Het verplaatst kaarten, tags en bijbehorende media tussen Nibomo-werkruimten. Het neemt geen herhaalgeschiedenis, FSRS-status, volledige structuren van kaartensets, werkruimte-instellingen of accounts mee.

De gehoste kern is [gratis tijdens de bèta](/nl/pricing/). De productiestack zelf hosten is geen Docker-installatie met één commando: de [handleiding voor zelf hosten](/docs/self-hosting/) gebruikt AWS CDK en vereist AWS-diensten plus Cloudflare, Resend, Sentry, beheer van geheime sleutels en andere toegangsgegevens, migraties, back-ups, herstel en upgrades. Docker Compose is de route voor ontwikkeling, niet de ondersteunde productieomgeving.

Gebruik Nibomo als de volledige broncode en een backend onder eigen beheer je reden zijn om over te stappen, en je kaarten eenvoudig genoeg zijn om veilig opnieuw op te bouwen. [Open de gehoste app](https://app.nibomo.com/) om een kleine tijdelijke kaartenset te proberen. Blijf bij Anki, of test RemNote, Mochi of Mnemosyne, als behoud van de leerstatus vooropstaat.

## Welk alternatief voor Anki werkt op iOS zonder nare migratieverrassingen?

Een ‘Anki-alternatief voor iOS’ kan twee dingen betekenen: een native iPhone-app of een vervanging voor [AnkiMobile, dat eenmalig $24,99 kost](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo en Nibomo hebben allemaal iOS-apps. Mnemosyne niet. Daarmee is de migratievraag nog niet beantwoord:

- **Mochi** behoudt meer dan de iOS-opties die alleen tekst accepteren: het importeert herhaalgeschiedenis uit `.apkg`, met omzetting naar Markdown en beoordeling met twee opties.
- **RemNote** importeert ook herhaalgeschiedenis uit `.apkg`, maar test de wachtrij **Need to Learn** in plaats van aan te nemen dat je huidige Anki-planning behouden blijft.
- **Quizlet** is geschikt om materiaal te verspreiden in de klas, maar de route vanuit Anki is beperkt tot tekst en de nieuwe functie voor gespreid herhalen is nog niet beschikbaar op mobiel.
- **Nibomo** is de optie met beschikbare broncode en een native iOS-client, maar de Anki-migratie zet de leerstatus terug naar het begin.
- **Brainscape** en **SuperMemo** zijn alleen logisch als hun herhaalmethode het waard is om kaarten en planning opnieuw op te bouwen.

Vergelijk voordat je AnkiMobile vanwege de prijs verlaat de aanschafprijs met de kosten van een abonnement en de uren die nodig zijn om een migratie te herstellen. Een eenmalige appaankoop kan goedkoper zijn dan een gratis app die van een jarenlang opgebouwde verzameling een berg handwerk maakt.

## Wanneer bij Anki blijven veiliger is

Blijven is een beslissing, geen onvermogen om iets nieuwers te kiezen. Blijf bij Anki als een van deze punten geldt:

- je verzameling is afhankelijk van aangepaste sjablonen, CSS, JavaScript of uitbreidingen;
- Image Occlusion, audio of andere media dragen essentiële betekenis;
- één notitie genereert meerdere kaarten in verschillende richtingen die gekoppeld moeten blijven;
- jaren herhaalgeschiedenis en de huidige geplande herhaaldatums zijn waardevoller dan een nieuwe editor;
- je vertrouwt op een desktopworkflow of combinatie van platforms die het alternatief niet biedt;
- de offline modus van de vervanger werkt alleen in een app of omgeving die je niet gaat gebruiken;
- je wilt in theorie zelf hosten, maar geen server beheren, beveiligen, back-uppen en upgraden;
- het alternatief lost geen terugkerend probleem op, behalve dat het er netter uitziet.

Anki biedt nog steeds een volwassen ecosysteem van uitbreidingen, flexibele notitie- en kaartsjablonen, FSRS en instellingen voor het oudere planningsalgoritme, lokale geïnstalleerde clients en pakketformaten die de verzameling kunnen meenemen. Geen van de bovenstaande producten evenaart dat allemaal.

Lees voor een gerichtere vergelijking van wat je zelf in handen hebt [de gids voor opensource flashcardapps](/blog/best-open-source-flashcard-apps-2026/). Als offline gedrag de doorslag geeft, maakt de [vergelijking van offline flashcardapps](/blog/best-offline-flashcards-app/) onderscheid tussen geïnstalleerde apps, gecachete inhoud en browsertabbladen.

## Een migratiechecklist die nog steeds op ‘nee’ mag uitkomen

Begin niet met je hele verzameling. Zet een test op die mag mislukken.

1. **Maak een herstelpakket.** Exporteer een `.colpkg` met media, bewaar het buiten het Anki-profiel en bewaar een tweede kopie op een andere plek.
2. **Kies de lastige kaartenset.** Neem invulvragen, aangepaste velden, kaarten in beide richtingen, geneste kaartensets, tags, afbeeldingen, audio en genoeg herhaalgeschiedenis op om de omzetting van de planning zichtbaar te maken.
3. **Exporteer het formaat dat de doelapp daadwerkelijk ondersteunt.** Gebruik voor een directe importfunctie `.apkg` met planningsgegevens, voorinstellingen en media. Gebruik Notes in Plain Text alleen als je accepteert dat je uitsluitend de inhoud opnieuw opbouwt.
4. **Leg de beginsituatie vast.** Noteer het aantal notities en kaarten, namen van tags en kaartensets, het aantal mediabestanden, enkele geplande herhaaldatums en intervallen en het verwachte aantal kaarten dat elk notitietype oplevert.
5. **Importeer in een tijdelijke omgeving.** Overschrijf het bronprofiel niet en voeg de eerste test niet samen met een permanente bibliotheek in de doelapp.
6. **Controleer inhoud en leerstatus apart.** Een correcte voor- en achterkant bewijst niet dat invulvragen, media, kaarten die uit dezelfde notitie voortkomen, herhaalgeschiedenis of de volgende herhaaldatum behouden zijn gebleven.
7. **Start de app offline opnieuw op elk apparaat dat je echt gebruikt.** Herhaal, bewerk, sluit de app volledig af, open hem opnieuw zonder verbinding, maak vervolgens weer verbinding en controleer een ander apparaat.
8. **Bekijk de wachtrij voordat de planningen uiteen gaan lopen.** Vergelijk de eerste geplande kaarten en een steekproef van intervallen voordat je dezelfde kaarten uit je echte verzameling in beide apps beoordeelt. Na de eerste herhaling in de andere app zijn de twee planningen onafhankelijk.
9. **Test de uitweg voordat je je vastlegt.** Exporteer vanuit de doelapp en bekijk wat je zou kunnen terughalen als je die volgend jaar verlaat.
10. **Bewaar Anki en de onaangeroerde back-up.** Verwijder geen van beide voordat de vervanger normaal gebruik heeft doorstaan en je elk verlies bewust hebt geaccepteerd.

Als de doelapp alleen tekst accepteert, volg dan de volledige [workflow voor veilig exporteren naar TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Die houdt de `.colpkg` voor herstel gescheiden van het overdraagbare werkbestand en maakt duidelijk dat je leerstatus opnieuw begint.

## Neem de beslissing in deze volgorde

Begin bij het onderdeel dat je niet kunt missen:

1. Als exacte sjablonen, uitbreidingen of de huidige wachtrij essentieel zijn, blijf dan bij Anki tenzij een representatieve `.apkg` aantoont dat een overstap werkt.
2. Als notities en kaarten één systeem moeten worden, test dan RemNote. Controleer de wachtrij **Need to Learn**, niet alleen de geïmporteerde pagina's.
3. Als lokale Markdown en goed te inspecteren exports belangrijker zijn dan de weergave van Anki, test dan Mochi.
4. Als je een gespecialiseerde opensource-desktopapp met directe Anki-import wilt, test dan Mnemosyne en controleer of de mobiele beperkingen bij je routine passen.
5. Als het je gaat om materiaal verspreiden in de klas of om een eenvoudiger gezamenlijk herhaalproces, bouw dan een kleine set opnieuw op in Quizlet of Brainscape.
6. Als je specifiek de methode van SuperMemo wilt, accepteer dan een nieuwe planning. Als je specifiek broncode van de volledige stack, zelf hosten en toegang via API en MCP wilt, accepteer dan het gegevensverlies bij het opnieuw opbouwen van inhoud in Nibomo en het bijbehorende beheerwerk.

Voor een vergelijking per functie van drie heel verschillende modellen, zie [Anki versus Quizlet versus Nibomo](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

De praktische regel is eenvoudig: stap over als de winst concreet is en je het verlies in een echte test hebt beoordeeld en geaccepteerd. Als je representatieve kaartenset niet goed overkomt, is bij Anki blijven geen behoudende noodoplossing. Het is de uitkomst van de vergelijking.
