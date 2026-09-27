---
title: "De beste opensource-flashcardapps in 2026: 6 FOSS-opties vergeleken"
description: "Vergelijk zes onderhouden opensource-flashcardapps op beschikbare broncode, offline gegevens, synchronisatie, Anki-import, export, zelf hosten en herstel."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "beste opensource-flashcardapps"
  - "opensource-flashcardapp"
  - "opensource gespreide herhaling"
  - "zelfgehoste flashcards"
  - "offline flashcardapp"
  - "opensource alternatief voor Anki"
  - "FOSS-flashcards"
---

Anki is ook in 2026 voor de meeste mensen de beste opensource-flashcardapp. Het wordt pas interessant wanneer open broncode niet je enige harde eis is.

Misschien wil je een browserapp op je eigen server. Of een kaartenset die je als gewone Markdown kunt lezen. Of een privénotitiesysteem waarmee je flashcards maakt. Die eisen leiden naar verschillende producten. Een openbare GitHub-repository geeft op zichzelf nog geen antwoord.

Een opensource-desktopclient kan naast een gesloten iPhone-app bestaan. Een Docker-container kan een browserinterface aanbieden zonder native clients te synchroniseren. Een import kan de woorden redden, terwijl de sjablonen, media en jaren aan herhaalgeschiedenis verloren gaan die de verzameling juist waardevol maakten.

Zes projecten kwamen door deze beoordeling. Ik vergeleek hun broncode en licenties, laatste stabiele release, lokale gegevens, herhaalalgoritme, synchronisatie, Anki-migratie, export en wat je precies zelf kunt hosten. Dat laatste onderscheid telt zwaarder dan de meeste functielijsten doen vermoeden.

> **Over mijn betrokkenheid:** Ik ben Kirill Markin en ik bouw [Nibomo](https://nibomo.com/), een van de zes apps hieronder. De MIT-repository bevat de webapp, native clients, backend, synchronisatie en infrastructuur. Ik heb het niet op de eerste plaats gezet. Anki is de veiligere standaardkeuze, Mnemosyne heeft een beproefdere migratieroute vanuit Anki en verschillende opties in dit overzicht zijn veel eenvoudiger te beheren.

**Feiten gecontroleerd op:** 5 september 2026. Stabiele releases worden apart behandeld van werk dat alleen op de standaardbranch staat.

![Een wandelaar vergelijkt zes open rugzakken en test een reserveset voordat hij een opensource-flashcardapp kiest](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Het korte antwoord

| Je belangrijkste eis | Beste keuze | Waarom | Wat je eerst moet testen |
| --- | --- | --- | --- |
| Een betrouwbaar systeem voor algemeen gebruik of een complexe bestaande verzameling | [Anki](https://apps.ankiweb.net/) | Volwassen kaarten en sjablonen, FSRS, uitbreidingen, veel clients en uitgebreide pakketexports | De officiële iOS-app en AnkiWeb vallen buiten de open desktopbroncode; zelf hosten levert synchronisatie op, geen AnkiWeb |
| Een gericht desktopalternatief met een gevestigde Anki-import | [Mnemosyne](https://mnemosyne-proj.org/) | Lokaal leren, import van Anki-kaarttypen en leergegevens, en een syncserver die je zelf kunt draaien | Versie 2.11 is nog steeds de laatste stabiele release; op Android kun je herhalen, maar niet bewerken |
| Notities en flashcards in één lokale kennisbank | [SiYuan](https://b3log.org/siyuan/en/) | Offline native apps, ingebouwde FSRS en een echte browserapp in Docker | Docker-clients kunnen niet met de native apps synchroniseren en verschillende import- en exportopdrachten ontbreken in Docker |
| Broncode voor web, mobiel, backend en infrastructuur | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Eén MIT-monorepo met een gedocumenteerde productie-installatie | De ondersteunde productiestack draait hoofdzakelijk op AWS en bij migratie vanuit Anki gaan gegevens verloren |
| Een jongere desktopapp die lokaal werkt en direct APKG importeert | [Recall](https://github.com/Madlezz/Recall) | FSRS, desktopbuilds, een PWA, lokale databases en een optionele versleutelde relay | De import bewaart alleen een momentopname van de planning, verwerkt de eerste twee notitievelden en slaat audio over |
| Leesbare Markdown-kaartensets zonder netwerkafhankelijkheid | [Essentialist](https://github.com/essentialist-app/essentialist) | Gewone bestanden voor kaartensets en een bewust offline desktop- en Android-app | Er is geen synchronisatie en de voortgang staat in een aparte verborgen database |

Dit is geen puntentelling van functies. Begin bij wat er voor jou absoluut niet mis mag gaan. Heb je tien jaar aan Anki-herhalingen, dan weegt een getrouwe migratie zwaarder dan een strakkere interface. Beheer je een installatie voor een school, dan kunnen browsertoegang en bewezen herstelmogelijkheden belangrijker zijn dan uitbreidingen.

## Wat telde als opensource-flashcardapp

Ik gebruikte vier toelatingscriteria:

1. **De broncode voor het leren zelf is gepubliceerd, met een expliciete opensourcelicentie.** Een verzameling integraties rond een gesloten kern telt niet mee.
2. **Gespreide herhaling werkt nu.** Een vermelding op de roadmap of een algemene quizmodus is niet genoeg.
3. **Er is een uitgebrachte build of een duidelijk gedocumenteerde officiële installatie.** Recente commits alleen maken een prototype nog geen veilige aanbeveling.
4. **Officiële bronnen maken voldoende duidelijk wat er met gegevens gebeurt om dat te kunnen beoordelen.** Ik zocht concrete antwoorden over offline opslag, synchronisatie, import en export of hosting, geen vage belofte dat gebruikers ‘eigenaar van hun gegevens’ zijn.

Het aantal sterren was geen selectiecriterium. Die belonen ouderdom en publiciteit net zo goed als geschiktheid. Volwassenheid telt wel mee. Anki, Mnemosyne en SiYuan hebben gevestigde releases en werkwijzen voor beheer. Recall en Essentialist kregen een beperktere aanbeveling, omdat de werking van hun uitgebrachte versies goed genoeg is gedocumenteerd om ze voor een concreet gebruik aan te raden.

Ook ‘onderhouden’ vraagt om twee controles. Een getagde release laat zien wat gebruikers kunnen installeren; de standaardbranch laat zien waar het project naartoe gaat. Essentialist is het duidelijkste voorbeeld. De stabiele release documenteert SM-2, terwijl de huidige branch FSRS documenteert. De onderstaande tabel vermeldt SM-2.

## Zes FOSS-flashcardapps vergeleken

| App | Gecontroleerde stabiele versie | Platforms | Offline gegevens | Herhaalalgoritme | Synchronisatie | Anki-migratie en gegevens meenemen | Wat je zelf host |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 augustus 2026 | Windows, macOS, Linux; aparte Android- en iOS-clients; AnkiWeb | Geïnstalleerde clients werken met lokale verzamelingen | FSRS of het oudere SM-2 | AnkiWeb of de officiële zelfgehoste syncserver | Importeert tekst, APKG/COLPKG en Mnemosyne-databases; exporteert tekst of pakketten met optioneel media en planning | **Alleen een syncserver.** Geen zelfgehost AnkiWeb of browserinterface om te leren |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 november 2023; repository bleef actief in 2026 | Windows, macOS, Linux, Android; beperkte herhaling via browser | Desktop werkt lokaal; Android kan offline herhalen, maar niet bewerken | Adaptief, met een score van 0–5 voor hoe goed je het antwoord wist | Ingebouwde synchronisatie met een desktop- of headless instantie | Documenteert officieel volledige Anki-import met aangepaste kaarttypen en leergegevens; de export om kaarten te delen is geen volledige back-up | **Synchronisatie en beperkt herhalen via browser.** De browserserver heeft geen beveiligingsfuncties |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 augustus 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; browser via Docker | Native clients bewaren de werkruimte lokaal | FSRS | Betaalde officiële E2EE-synchronisatie of betaalde integratie met externe S3/WebDAV-opslag | De volledige app importeert Markdown en gegevens en exporteert verschillende document- en gegevensformaten; geen gedocumenteerde APKG-import | **Volledige browserapp.** Docker kan native clients niet synchroniseren en mist sommige import- en exportopdrachten |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 september 2026 | Web, iOS, Android | IndexedDB op web; SQLite op iOS; Room bovenop SQLite op Android; lokale wijzigingen gaan in een synchronisatiewachtrij | FSRS | Gehoste backend of een backend die je zelf uitrolt | Eigen ZIP-formaat verplaatst kaarten, tags, bronmetadata en gekoppelde media, maar geen kaartensets, leerstatus, instellingen of accounts; geen APKG-import | **Volledige web- en backendstack.** Productie draait hoofdzakelijk op AWS; eigen native builds staan daar los van |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 juli 2026 | Windows, macOS, Linux; installeerbare PWA | SQLite op desktop; IndexedDB in de browser; standaard geen account of telemetrie | FSRS | Mapsynchronisatie op desktop of een optionele versleutelde Cloudflare Worker/R2-relay | APKG-import op desktop leest de eerste twee velden, kaartensets, tags, een benaderende momentopname van de planning en afbeeldingen; export naar JSON en Recall-archieven | **Alleen een relay voor versleutelde momentopnamen.** Die host de PWA niet |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 oktober 2025; broncode bleef in ontwikkeling in 2026 | Android APK, macOS DMG, Linux Flatpak; Windows vanuit broncode | Geen netwerktoegang; kaartinhoud staat in Markdown | Stabiele release: SM-2; standaardbranch: FSRS | Geen | Markdown bewaart de kaartinhoud; een bijbehorende verborgen database bewaart de voortgang | **Niets te hosten.** Neem het Markdown-bestand en de bijbehorende database samen op in je back-up |

## 1. Anki is de veiligste standaardkeuze

Anki wint op de minder opvallende onderdelen. Het kan complexe notitietypen vastleggen, meerdere kaarten uit dezelfde notitie genereren via sjablonen, media bij de verzameling bewaren en jaren aan planningsgegevens meenemen. De stabiele desktoprelease in deze beoordeling is [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). De nieuwere build 26.09b2 is als bèta gemarkeerd en vormt hier dus niet het uitgangspunt.

Niet alles valt onder dezelfde open broncode. De [desktoprepository gebruikt AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), met vermelde uitzonderingen voor meegeleverde onderdelen. [AnkiDroid](https://github.com/ankidroid/Anki-Android) is een apart opensourceproject voor Android. AnkiMobile en AnkiWeb zijn officiële producten, maar hun broncode zit niet in die repositories. De uitgebreidere uitleg staat in [Is Anki opensource?](/blog/is-anki-open-source/).

Geïnstalleerde clients bewaren verzamelingen lokaal, zodat gewone herhalingen zonder verbinding werken. AnkiWeb is de online variant. Als offline gebruik de doorslag geeft, maakt [Werkt Anki offline?](/blog/does-anki-work-offline/) duidelijk wat lokaal blijft en wat op synchronisatie wacht.

Anki ondersteunt [FSRS en zijn oudere herhaalalgoritme](https://docs.ankiweb.net/deck-options.html). De exportformaten bieden van deze groep het sterkste vertrekpunt voor migratie. Een [COLPKG bevat de hele verzameling inclusief planning](https://docs.ankiweb.net/exporting.html), terwijl APKG-exports planningsgegevens en media kunnen bevatten als je die opties selecteert. Anki importeert ook tekst, Anki-pakketten en Mnemosyne 2.0-databases.

Zo'n uitgebreid bronpakket garandeert geen perfecte import in een andere app. De bestemming moet de sjablonen, regels voor kaartgeneratie, mediaverwijzingen en planningsvelden nog steeds begrijpen. De doelapp krijgt simpelweg meer informatie om mee te werken dan bij een CSV-bestand.

De [officiële zelfgehoste server](https://docs.ankiweb.net/sync-server.html) is bewust beperkt. Hij synchroniseert compatibele Anki-clients en biedt geen AnkiWeb, herhalingen in de browser of accountportaal. Standaard luistert hij via onversleutelde HTTP. De handleiding raadt aan hem op een lokaal netwerk te houden of er een VPN of HTTPS-reverseproxy voor te zetten. Ook de client- en serverversies moeten compatibel blijven.

Kies Anki als het behoud van je verzameling, sjablonen, uitbreidingen of brede clientondersteuning vooropstaat. Kijk pas verder als iets specifieks, zoals een zelfgehoste browserinterface of volledig gepubliceerde mobiele stack, zwaarder weegt.

## 2. Mnemosyne houdt lokaal leren overzichtelijk

Mnemosyne voelt als een desktopprogramma om te leren, omdat het dat ook is. Je krijgt er geen kennisbank of cloudplatform bij. Wel een lokale database, een traditionele werkwijze met gespreide herhaling, een Android-app om te herhalen en een syncserver die op een desktop of headless machine kan draaien.

De laatste stabiele release is nog steeds [2.11 uit november 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). De repository kreeg in 2026 wijzigingen, maar daarmee zitten die nog niet in een stabiel installatiepakket. Test 2.11 op de besturingssystemen die je de komende jaren wilt blijven gebruiken.

Ook de licentie laat zich niet in één badge samenvatten. Het [licentieoverzicht in de hoofdmap](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) kent LGPL v3 toe aan openSM2sync en aparte voorwaarden aan de rest van Mnemosyne. De [licentie van het hoofdprogramma](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) gebruikt AGPL v3 plus een extra bepaling: de naam Mnemosyne moet duidelijk zichtbaar blijven in afgeleid werk, waarbij de precieze vorm met de beheerders wordt besproken. Lees die tekst voordat je een aangepaste build verspreidt.

Met de [Android-client kun je offline herhalen, maar geen kaarten bewerken](https://mnemosyne-proj.org/help/android-client). Andere apparaten kunnen een browserserver voor herhalingen gebruiken die je vanuit de desktopapp start. De officiële functiepagina waarschuwt wel dat die server geen beveiligingsfuncties heeft. Het is een handige LAN-interface, geen uitgewerkte openbare webapplicatie.

Migratie is het sterkste argument van Mnemosyne om niet gewoon bij Anki te blijven. De officiële functiepagina documenteert [volledige Anki-import, inclusief aangepaste kaarttypen en leergegevens](https://mnemosyne-proj.org/features). De [ingebouwde synchronisatie](https://mnemosyne-proj.org/help/syncing) voegt kaarten en leergegevens samen en kan een machine gebruiken die je zelf beheert.

De gewone exportopdracht is een valkuil bij back-ups. Ze is bedoeld om geselecteerde kaarten te delen en laat je leergegevens weg. Om het volledige systeem te verplaatsen of te herstellen, moet je volgens de [handleiding voor meerdere computers](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) de hele gegevensmap kopiëren.

Mnemosyne is hier het sterkste gerichte opensource-alternatief voor Anki. Daar staan een laag tempo van stabiele releases, beperkte bewerking op mobiel en een browserinterface die zorgvuldige netwerkafscherming vraagt tegenover.

## 3. SiYuan past wanneer je notities de basis vormen

SiYuan is een kennisbeheerapp met privacy als uitgangspunt. Flashcards zijn ingebouwd in hetzelfde model van blokken en documenten. Dat is handig als je notities het materiaal voor je herhalingen leveren. Dat is veel functionaliteit als je alleen een wachtrij met kaarten wilt.

De [AGPL-3.0-repository](https://github.com/siyuan-note/siyuan) verwijst naar de interface, kernel, mobiele apps, gegevenslaag en FSRS-component. Versie [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2) is de hier gecontroleerde stabiele release. Desktop- en mobiele clients slaan de werkruimte lokaal op en blijven offline werken.

Synchronisatie valt niet onder de gratis versie met lokale opslag. De [officiële prijspagina](https://b3log.org/siyuan/en/pricing.html) biedt officiële end-to-end versleutelde synchronisatie bij het abonnement. Betaalde Pro-functies voegen integraties met je eigen S3- of WebDAV-opslag toe. Het project waarschuwt ook tegen het plaatsen van een actieve werkruimte in een gewone gesynchroniseerde map: gelijktijdige bewerkingen kunnen gegevens beschadigen of overschrijven.

Docker draait een echte browserapplicatie, maar wordt daarmee geen syncserver voor de geïnstalleerde apps. Volgens de [Docker-documentatie van v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) kunnen desktop- en mobiele clients er geen verbinding mee maken. In Docker ontbreken ook Markdown-import en export naar PDF, HTML en Word. Die opdrachten bestaan wel in de bredere native applicatie. De algemene functielijst overnemen in een Docker-installatieplan zou dus misleidend zijn.

Ik vond geen officiële APKG-import. SiYuan kan Markdown en zijn eigen gegevensformaten verplaatsen, maar een Anki-verzameling moet je gerichter opnieuw opbouwen.

Kies SiYuan als de kennisbank het hoofdproduct is en flashcards daarin thuishoren. Zoek je een directe vervanger voor Anki, dan zijn bij Mnemosyne en Anki de mogelijkheden en grenzen van migratie duidelijker.

## 4. Nibomo publiceert meer van de stack en vraagt je die te beheren

Van de apps in deze vergelijking publiceert Nibomo de broncode voor de meeste productonderdelen. De MIT-monorepo bevat de webapp, iOS- en Android-clients, backend, authenticatieservice, synchronisatie, beheerapplicatie, databasemigraties en AWS-infrastructuur. De hier gebruikte stabiele release is [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Later werk op de standaardbranch telt niet mee als uitgebrachte functionaliteit.

De [architectuur](/docs/architecture/) is offline-first, maar ‘offline’ betekent per client iets anders. In de webapp is de lokale database in IndexedDB leidend. iOS gebruikt SQLite en Android gebruikt Room bovenop SQLite. Wijzigingen worden lokaal opgeslagen en vóór synchronisatie in een outbox geplaatst. Dat ontwerp vangt een onderbroken verbinding op. Het maakt browseropslag niet permanent en neemt de noodzaak niet weg om op elk apparaat een koude start te testen.

Het eigen ZIP-pakket van Nibomo is een formaat om inhoud over te dragen, geen accountback-up. In v1.23.0 bevat het [pakketschema](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) de inhoud van voor- en achterkant, tags, kaarttype, bronmetadata en pakketmetadata. Gekoppelde media worden apart gebundeld. Het bevat geen structuur van kaartensets, herhaalgeschiedenis, FSRS-status, werkruimte-instellingen of accounts.

In v1.23.0 is er geen APKG-import. De gedocumenteerde [migratieworkflow via Anki TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) gebruikt geëxporteerde tekst om kaarten opnieuw op te bouwen en vereist menselijke controle. Sjablonen, planningsstatus, structuur van kaartensets en gebundelde media blijven via deze route niet automatisch behouden. Voor een eenvoudige tekstset is dat een redelijke aanpak; voor een sterk aangepaste verzameling is het een slechte keuze.

De [handleiding voor zelf hosten](/docs/self-hosting/) is even expliciet. Productie gebruikt een AWS CDK-stack met RDS, Cognito, API Gateway en Lambda, S3 en CloudFront, secrets, alarmen en back-ups. Cloudflare DNS, Resend-e-mail en de Sentry-configuratie staan buiten AWS. Docker Compose is voor lokale ontwikkeling en is niet het ondersteunde productiepakket. Wie eigen iOS- of Android-binaries wil, moet die apart bouwen en verspreiden.

Kies Nibomo als het bezit van de volledige web-, native en backendbroncode dat beheerwerk rechtvaardigt. Kies Anki of Mnemosyne als behoud van een bestaande verzameling de zwaardere eis is.

## 5. Recall is modern, maar bekijk de import goed

Recall is de jongste van de hoofdkeuzes. Het staat in de lijst omdat [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) desktopbuilds met versienummers, een installeerbare PWA, expliciete lokale opslag, FSRS, gegevensexports en een gedocumenteerd ontwerp voor zelfgehoste synchronisatie biedt.

De desktopapp met MIT-licentie gebruikt SQLite; de PWA gebruikt IndexedDB. Geen van beide heeft een account nodig en volgens het project staat telemetrie standaard uit. Desktopreleases zijn beschikbaar voor Windows, macOS en Linux.

De APKG-import is nuttig, maar de term ‘review history’ in de README belooft te veel voor de getagde implementatie. De [broncode van de importer in v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) leest het herhaallogboek van Anki niet. De importer leest de huidige kaartstatus, het interval, het aantal herhalingen en het aantal keren dat een eerder geleerde kaart weer is vergeten, plus de FSRS-stabiliteit en -moeilijkheid als Anki die heeft opgeslagen. Voor oudere kaarten zonder die FSRS-velden schat Recall ze op basis van SM-2-waarden.

Ook de omzetting van inhoud heeft beperkingen. De importer gebruikt de eerste twee notitievelden als voor- en achterkant, in plaats van Anki-notitietypen en sjablonen na te bouwen. Namen van kaartensets en tags blijven behouden. Gangbare afbeeldingsformaten worden uitgepakt en hun verwijzingen herschreven, maar audio en andere media worden overgeslagen. Omdat de importer een Tauri-opdracht is, werkt directe APKG-migratie alleen op desktop, niet in de browser-PWA.

Dat is veel beter dan opnieuw beginnen met platte tekst, maar het bewaart de verzameling niet getrouw. Test invuloefeningen, meerdere kaarten uit dezelfde notitie, extra velden, HTML/CSS, afbeeldingen, audio, geplande herhaaldatums en herhaalde notities voordat je erop vertrouwt voor een grote overstap.

Recall heeft twee synchronisatieroutes. De desktopapp kan een momentopname schrijven naar een map die Dropbox, Drive of een ander synchronisatieprogramma beheert. De optionele relay gebruikt een Cloudflare Worker en R2-bucket. Volgens het getagde [synchronisatieontwerp](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) versleutelen clients momentopnamen vóór het uploaden met AES-GCM. De relay ziet versleutelde gegevens, geen kaartinhoud of sleutel. Updates gebruiken optimistische gelijktijdigheidscontrole en doen bij een conflict één nieuwe poging, maar voegen nog steeds volledige momentopnamen samen in plaats van losse velden. Er is geen openbare relay die de beheerders financieren: je rolt hem zelf uit en voert de URL in.

Exports naar JSON en Recall-archieven bieden een manier om je gegevens mee te nemen. Herstel er eerst een in een schoon profiel voordat je het een back-up noemt.

Kies Recall als je een moderne desktopapp of PWA wilt die lokaal werkt en kunt leven met een jong project en een importer die een bruikbare momentopname bewaart in plaats van het hele Anki-systeem.

## 6. Essentialist maakt de kaartenset leesbaar, maar niet de hele leerstatus

Essentialist is de eenvoudigste app in dit overzicht. Elke kaartenset is een Markdown-bestand dat je in een teksteditor kunt openen, in versiebeheer kunt bewaren of met gewone bestandsprogramma's kunt kopiëren. De applicatie doet bewust geen netwerkverzoeken.

De laatste stabiele release is [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Er zijn builds voor Android, macOS en Linux; Windows-gebruikers bouwen vanuit de broncode. De [getagde README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) vermeldt SM-2 als herhaalalgoritme.

De [README op de standaardbranch](https://github.com/essentialist-app/essentialist/blob/main/README.md) vermeldt inmiddels FSRS en de repository kreeg in 2026 broncodewijzigingen. Dat laat zien welke kant het opgaat, maar is geen reden om de binary uit 2025 als FSRS-versie te beschrijven.

Markdown omvat ook minder dan het op het eerste gezicht lijkt. De kaarttekst staat in het zichtbare bestand, terwijl de voortgang in een verborgen database met de naam `.<deck file>.db` staat. Kopieer je `sample.md` zonder `.sample.md.db`, dan bewaar je de vragen en antwoorden, maar verlies je de leerstatus.

Er is geen ingebouwde synchronisatie tussen apparaten en geen server. Je kunt de bestanden in een eigen gesynchroniseerde map plaatsen, maar dan moet je zelf conflicten en herstel regelen.

Kies Essentialist als leesbare Markdown en werken zonder netwerk precies zijn wat je zoekt. Het is geen naadloos systeem voor meerdere apparaten en één zichtbaar bestand is geen volledige back-up.

## Vier actieve projecten om te volgen

Aan deze projecten is in 2026 echt gewerkt. Ze vallen buiten de zes hoofdkeuzes omdat interessante broncode alleen niet genoeg is voor een aanbeveling.

| Project | Wat er al concreet is | Wat een plek in de hoofdlijst nog in de weg staat |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-broncode, FSRS/SM-2/Leitner-algoritmen, Docker-installatie, een beheerde dienst, CSV-import en gegevensexport | Gestart in juli 2026; geen applicatierelease met versienummer. De GitHub-release is een audiopakket in plaats van een apprelease |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-webapp met FSRS, CSV-import, afbeeldingen afdekken en een gedocumenteerde Supabase/Vercel-architectuur | Geen getagde release; de officiële documentatie beschrijft nog niet volledig wat offline gebruik, export en herstel bij zelf hosten omvatten |
| [Prep](https://github.com/Zamua/prep-app) | MIT-broncode, FSRS, gehost gebruik en een gedocumenteerde installatie op de zelf te hosten celld-runtime | Geen getagde release; zelf hosten betekent ook celld en objectopslag beheren, in plaats van één zelfstandige flashcardbinary uitrollen |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Mobiele Kotlin-app onder GPLv3, FSRS/SM-2, een Android-release en APKG-import met sjablonen en media | Gestart in 2026; iOS vereist bouwen vanuit broncode en de officiële documentatie beschrijft geen algemene synchronisatie tussen telefoons |

Een paar bekende namen vallen om eenvoudigere redenen af. De [opensourcerepository van Mochi](https://github.com/mochi-cards/open-source) is een verzameling integraties, niet de kernapplicatie. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) is opensource en zelf te hosten, maar de officiële README plaatst gespreide herhaling nog steeds onder ‘Features coming soon’. [OpenCards](https://github.com/holgerbrandl/opencards) heeft sinds [v2.5.1 in januari 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) geen release uitgebracht en sinds 2018 geen codewijziging in de repository gekregen.

Als toegang tot de broncode optioneel is, bevat de [bredere vergelijking van Anki-alternatieven](/nl/blog/best-anki-alternatives/) producten die een andere vraag beantwoorden.

## Test migratie op vijf afzonderlijke niveaus

‘Importeert Anki’ zegt bijna niets zonder de zin erna. Een migratie kan op één niveau slagen en op vier andere mislukken.

| Niveau | Wat je vergelijkt | Het misleidende teken van succes |
| --- | --- | --- |
| Kaartinhoud | Elk veld, elke markering voor invuloefeningen, tag, speciaal teken en herhaalde notitie | Het totale aantal kaarten komt ongeveer overeen |
| Structuur | Notitietypen, sjablonen, gegenereerde kaarten uit dezelfde notitie en geneste kaartensets | De tekst van voor- en achterkant is ergens verschenen |
| Media | Afbeeldingen en audio zijn gekopieerd, worden lokaal gevonden en werken offline | De importer herkende de bestandsnamen |
| Leerstatus | Herhaallogboek, status, geplande herhaaldatum, interval, momenten waarop een eerder geleerde kaart weer is vergeten en algoritmeparameters | Geïmporteerde kaarten zijn aanwezig, maar beginnen stilletjes opnieuw als nieuwe kaarten |
| Gegevens meenemen en herstellen | Een gedocumenteerde export of back-up kan hetzelfde systeem elders opnieuw opbouwen | Een leesbare tekstexport wordt behandeld als een volledige back-up |

Maak een bewust lastige testset voordat je de echte verzameling verplaatst. Voeg extra velden, invuloefeningen, sjablonen voor beide vraagrichtingen, geneste kaartensets, tags, afbeeldingen, audio en voldoende herhaalgeschiedenis toe om te zien of de bestemming die bewaart.

Bewaar de onaangeroerde bronback-up. Vergelijk na de import de aantallen notities, kaarten en mediabestanden afzonderlijk. Controleer de geplande herhaaldatums in plaats van te vertrouwen op een melding dat de planning is geïmporteerd. Herhaal offline op elk apparaat dat je wilt gebruiken. Maak daarna op twee apparaten tijdelijke, conflicterende testbewerkingen en kijk wat de synchronisatie doet.

Gebruik beide systemen een paar dagen naast elkaar. De oude verzameling verwijderen is de laatste stap, geen bewijs dat de nieuwe werkt.

## Zelf hosten is pas compleet na een hersteltest

De bovenstaande producten bedoelen heel verschillende dingen met ‘zelfgehost’:

- Anki en Mnemosyne draaien **synchronisatiediensten**, terwijl je in de geïnstalleerde clients blijft leren.
- SiYuan Docker draait een **browserapplicatie** die native clients niet als syncserver kunnen gebruiken.
- Recall draait een **relay voor versleutelde momentopnamen**, niet de PWA zelf.
- Nibomo rolt een **volledige web- en backendstack** uit, terwijl native apps apart gebouwd blijven worden.
- Essentialist heeft **geen server**; je beheert de lokale bestanden.

Zodra duidelijk is wat je beheert, test je het deel dat beheerders vaak uitstellen:

1. Maak kaarten, voeg media toe, voltooi herhalingen en synchroniseer vanuit twee clients.
2. Maak een kopie van alle gedocumenteerde databases, buckets voor objectopslag, lokale bestanden, secrets en configuratiewaarden.
3. Herstel alles in een leeg account, op een lege machine of in een geïsoleerde installatie.
4. Vergelijk het aantal kaarten, de media, de herhaalgeschiedenis en welke kaarten aan de beurt zijn. Controleer ook of inloggen en clientsynchronisatie werken.
5. Werk de herstelde kopie bij naar een nieuwere versie en voltooi nog een herhaalronde.

Als het herstel nog afhankelijk is van de oude machine, heb je een werkende dienst. Je hebt dan nog geen gecontroleerde back-up.

## Veelgestelde vragen

### Wat is de beste opensource-flashcardapp in 2026?

Anki is voor de meeste mensen de beste standaardkeuze. Het combineert een volwassen verzamelingsmodel, FSRS, veel verschillende clients en de uitgebreidste eigen back-up- en exportformaten. De kanttekening is dat de officiële iOS- en webproducten niet onder de open desktoprepository vallen en dat de zelfgehoste server synchronisatie biedt, geen leeromgeving in de browser.

### Wat is het beste opensource-alternatief voor Anki?

Mnemosyne is het meest gevestigde gerichte alternatief en documenteert officieel de import van aangepaste Anki-kaarttypen en leergegevens. Recall oogt moderner en importeert APKG-bestanden rechtstreeks op desktop, maar zet alleen de eerste twee notitievelden om, bewaart uitsluitend een momentopname van de planning, importeert afbeeldingen maar geen audio en neemt het volledige herhaallogboek niet mee.

### Kan ik Anki zelf hosten?

Ja, je kunt de officiële syncserver van Anki voor compatibele clients draaien. Het is alleen geen zelfgehoste vervanging voor AnkiWeb: er is geen browserinterface om te leren.

### Betekent opensource ook offline?

Nee. Opensource gaat over licenties en toegang tot broncode. Offline werking hangt af van waar de client gegevens opslaat en welke handelingen een dienst nodig hebben. Het omgekeerde geldt ook: een app kan gegevens lokaal bewaren zonder zijn kernbroncode te publiceren.

### Garandeert zelf hosten dat ik mijn gegevens kan meenemen?

Nee. Met zelf hosten bepaal je waar een dienst draait. Overdraagbaarheid hangt af van exports, volledige back-ups en herstel dat je daadwerkelijk hebt getest. Een database op je eigen server kan nog steeds lastig te migreren zijn. Een leesbare Markdown-kaartenset kan nog steeds de herhaalstatus missen die ernaast is opgeslagen.

## Mijn aanbeveling

Blijf bij **Anki** of kies het, tenzij een van zijn beperkingen echt een probleem oplevert. Kies **Mnemosyne** voor gericht lokaal leren op desktop en een gevestigde Anki-import. Gebruik **SiYuan** als flashcards in een grotere kennisbank thuishoren. Overweeg **Nibomo** als bezit van de volledige web-, native en backendbroncode een AWS-productiestack rechtvaardigt. Kies **Recall** voor een moderne client die lokaal werkt, nadat je de conversiebeperkingen hebt getest. Kies **Essentialist** als gewone Markdown en nul netwerktoegang zwaarder wegen dan synchronisatie.

De beste opensource-flashcardapp is niet de repository met de langste functielijst. Het is de app waarvan de mogelijkheden en beperkingen rond broncode, offline gegevens, migratie, synchronisatie, hosting en herstel passen bij het systeem dat je daadwerkelijk wilt beheren.
