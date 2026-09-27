---
title: "Labākās atvērtā pirmkoda mācību kartīšu lietotnes 2026. gadā: 6 FOSS risinājumu salīdzinājums"
description: "Sešu uzturētu atvērtā pirmkoda mācību kartīšu lietotņu salīdzinājums: pirmkods, bezsaistes dati, sinhronizācija, Anki imports, eksports, pašmitināšana un atjaunošana."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "labākās atvērtā pirmkoda mācību kartīšu lietotnes"
  - "atvērtā pirmkoda mācību kartīšu lietotne"
  - "atvērtā pirmkoda intervālu atkārtošana"
  - "pašmitināmas mācību kartītes"
  - "bezsaistes mācību kartīšu lietotne"
  - "atvērtā pirmkoda Anki alternatīva"
  - "FOSS mācību kartītes"
---

Arī 2026. gadā Anki vairumam cilvēku ir labākā atvērtā pirmkoda mācību kartīšu lietotne. Interesantāk kļūst tad, ja atvērts pirmkods nav jūsu vienīgā obligātā prasība.

Varbūt vajadzīga pārlūkprogrammas lietotne uz sava servera. Vai komplekts, kuru var lasīt kā parastu Markdown failu. Vai privāta piezīmju sistēma, kas veido mācību kartītes. Šīs prasības ved pie dažādiem produktiem, un publisks GitHub repozitorijs pats par sevi izvēli neatrisina.

Atvērtā pirmkoda darbvirsmas klientam līdzās var būt slēgta iPhone lietotne. Docker konteiners var darbināt pārlūkprogrammas saskarni, nesinhronizējot instalētos klientus. Imports var atgūt tekstu, bet zaudēt veidnes, multividi un gadiem uzkrāto atkārtojumu vēsturi, kas padarīja kolekciju noderīgu.

Šo pārbaudi izturēja seši projekti. Salīdzināju to licencēto pirmkodu, jaunāko stabilo laidienu, lokālos datus, plānotāju, sinhronizāciju, migrāciju no Anki, eksportu un tieši to, ko iespējams mitināt pašam. Pēdējais ierobežojums ir svarīgāks, nekā liek domāt vairums funkciju sarakstu.

> **Par manu saistību ar Nibomo:** esmu Kirill Markin un izstrādāju [Nibomo](https://nibomo.com/), vienu no sešām tālāk apskatītajām lietotnēm. Tās MIT licences repozitorijs aptver tīmekļa lietotni, instalētās lietotnes, servera daļu, sinhronizāciju un infrastruktūru. Neesmu to ierindojis pirmajā vietā. Anki ir drošāka noklusējuma izvēle, Mnemosyne piedāvā ilgāk pārbaudītu migrācijas ceļu no Anki, un vairākus šeit minētos risinājumus ir daudz vieglāk uzturēt.

**Fakti pārbaudīti:** 2026. gada 5. septembrī. Stabilie laidieni ir nošķirti no izmaiņām, kas pieejamas tikai noklusējuma zarā.

![Pārgājiena dalībnieks salīdzina sešas atvērtas mugursomas un pārbauda rezerves komplektu, pirms izvēlēties atvērtā pirmkoda mācību kartīšu lietotni](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Īsā atbilde

| Galvenā prasība | Piemērotākais risinājums | Kāpēc | Ierobežojums, kas jāpārbauda vispirms |
| --- | --- | --- | --- |
| Uzticama universāla sistēma vai sarežģīta esoša kolekcija | [Anki](https://apps.ankiweb.net/) | Nobriedis kartīšu un veidņu modelis, FSRS, papildinājumi, plašs klientu klāsts un bagātīgs pakotņu eksports | Oficiālā iOS lietotne un AnkiWeb neietilpst darbvirsmas atvērtajā pirmkodā; pašmitināšana dod sinhronizāciju, nevis AnkiWeb |
| Specializēta darbvirsmas alternatīva ar pārbaudītu Anki importu | [Mnemosyne](https://mnemosyne-proj.org/) | Lokāla mācīšanās, Anki kartīšu tipu un apguves datu imports, paša darbināms sinhronizācijas serveris | 2.11 joprojām ir jaunākā stabilā versija; Android ļauj atkārtot, bet ne rediģēt |
| Piezīmes un mācību kartītes vienā lokālā zināšanu bāzē | [SiYuan](https://b3log.org/siyuan/en/) | Instalētās lietotnes darbojas bezsaistē, iebūvēts FSRS, pilnvērtīga pārlūkprogrammas lietotne Docker vidē | Docker klienti nevar sinhronizēties ar instalētajām lietotnēm, un Docker versijā nav pieejamas vairākas importa un eksporta komandas |
| Pirmkods tīmeklim, mobilajām lietotnēm, servera daļai un infrastruktūrai | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Viens MIT monorepozitorijs ar dokumentētu izvietošanu produkcijas vidē | Atbalstītā produkcijas vide balstās uz AWS, un migrācijā no Anki tiek zaudēta daļa datu |
| Jaunāka darbvirsmas lietotne ar lokālu datu glabāšanu un tiešu APKG importu | [Recall](https://github.com/Madlezz/Recall) | FSRS, darbvirsmas laidieni, PWA, lokālas datubāzes un izvēles šifrētu datu pārsūtīšanas serveris | Imports saglabā tikai plānošanas stāvokļa momentuzņēmumu, apstrādā pirmos divus piezīmes laukus un izlaiž audio |
| Cilvēkam lasāmi Markdown komplekti bez atkarības no tīkla | [Essentialist](https://github.com/essentialist-app/essentialist) | Vienkārši komplektu faili un apzināti bezsaistes darbam veidota darbvirsmas/Android lietotne | Sinhronizācijas nav, un progress glabājas atsevišķā slēptā datubāzē |

Šajā tabulā lietotnēm netiek piešķirti punkti par funkciju skaitu. Sāciet ar kļūmi, kuru nevarat pieņemt. Ja jums ir desmit gadu Anki atkārtojumu dati, migrācijas precizitāte ir svarīgāka par glītāku saskarni. Ja uzturat sistēmu skolai, piekļuve pārlūkprogrammā un pārbaudīta atjaunošana var būt svarīgākas par papildinājumiem.

## Ko uzskatīju par atvērtā pirmkoda mācību kartīšu lietotni

Izmantoju četrus atlases kritērijus:

1. **Mācīšanās pamatfunkcijām ir publicēts pirmkods un skaidri norādīta atvērtā pirmkoda licence.** Integrāciju katalogs ap nepublicētu lietotnes kodolu neder.
2. **Intervālu atkārtošana darbojas jau tagad.** Ieraksts attīstības plānā vai vispārīgs viktorīnas režīms nav pietiekams.
3. **Ir pieejams laidiens vai skaidri dokumentēts oficiāls izvietošanas veids.** Nesen veiktas koda izmaiņas vien nepadara prototipu par drošu ieteikumu.
4. **Oficiālie avoti pietiekami skaidri apraksta datu iespējas un ierobežojumus, lai tos varētu pārbaudīt.** Bija vajadzīgas konkrētas atbildes par bezsaistes glabāšanu, sinhronizāciju, importu/eksportu vai mitināšanu, nevis miglains solījums, ka lietotājiem “pieder viņu dati”.

GitHub zvaigžņu skaits nebija atlases kritērijs. Tas atspoguļo projekta vecumu un publicitāti tikpat daudz kā produkta piemērotību. Tomēr briedumam ir nozīme. Anki, Mnemosyne un SiYuan ir nostiprināta laidienu un uzturēšanas prakse. Recall un Essentialist iesaku šaurākam lietojumam, jo to izlaisto versiju darbība ir dokumentēta pietiekami labi, lai tās varētu ieteikt konkrētam lietojumam.

Arī vārdam “uzturēts” vajadzīgas divas pārbaudes. Laidiens ar versijas tagu parāda, ko lietotājs var instalēt; noklusējuma zars parāda projekta virzību. Essentialist ir skaidrākais piemērs. Stabilā laidiena dokumentācijā norādīts SM-2, savukārt pašreizējā zara dokumentācijā — FSRS. Tālāk redzamajā tabulā norādīts SM-2.

## Sešu FOSS mācību kartīšu lietotņu salīdzinājums

| Lietotne | Pārbaudītā stabilā versija | Platformas | Bezsaistes dati | Plānotājs | Sinhronizācija | Migrācija no Anki un datu pārnešana uz citu sistēmu | Ko var mitināt pašam |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 2026. gada 5. augusts | Windows, macOS, Linux; atsevišķi Android un iOS klienti; AnkiWeb | Instalētie klienti mācībām izmanto lokālas kolekcijas | FSRS vai agrākais SM-2 | AnkiWeb vai oficiālais pašmitināmais sinhronizācijas serveris | Importē tekstu, APKG/COLPKG un Mnemosyne datubāzes; eksportē tekstu vai pakotnes ar izvēles multividi un plānošanas datiem | **Tikai sinhronizācijas serveris.** Nav pašmitināma AnkiWeb vai mācību saskarnes pārlūkprogrammā |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 2023. gada 12. novembris; darbs repozitorijā turpinājās 2026. gadā | Windows, macOS, Linux, Android; ierobežota atkārtošana pārlūkprogrammā | Darbvirsmas dati ir lokāli; Android ļauj atkārtot bezsaistē, bet ne rediģēt | Adaptīva atcerēšanās vērtēšana skalā 0–5 | Iebūvēta sinhronizācija ar darbvirsmas vai bezgrafiskā režīmā darbinātu instanci | Oficiāli dokumentēts pilns Anki imports ar pielāgotiem kartīšu tipiem un apguves datiem; kopīgošanai paredzētais eksports nav pilna rezerves kopija | **Sinhronizācija un ierobežota atkārtošana pārlūkprogrammā.** Pārlūkprogrammas serverim nav drošības funkciju |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 2026. gada 30. augusts | Windows, macOS, Linux, Android, iOS, HarmonyOS; pārlūkprogramma caur Docker | Instalētie klienti glabā darbvietu lokāli | FSRS | Maksas oficiālā sinhronizācija ar šifrēšanu no gala līdz galam (E2EE) vai maksas integrācija ar ārēju S3/WebDAV krātuvi | Lietotne kopumā importē Markdown/datus un eksportē vairākus dokumentu/datu formātus; nav dokumentēta APKG importētāja | **Pilna pārlūkprogrammas lietotne.** Docker nevar sinhronizēt instalētos klientus, un tajā nav dažu importa/eksporta komandu |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 2026. gada 1. septembris | Tīmeklis, iOS, Android | IndexedDB tīmeklī; SQLite iOS; Room virs SQLite Android; lokālās izmaiņas nonāk sinhronizācijas rindā | FSRS | Mitināts vai paša izvietots servera pakalpojums | Paša ZIP formāts pārnes kartītes, birkas, avota metadatus un saistīto multividi, bet ne komplektus, apguves stāvokli, iestatījumus vai kontus; APKG importētāja nav | **Pilna tīmekļa un servera sistēma.** Produkcijas izvietošana balstās uz AWS; privātie instalēto lietotņu būvējumi ir atsevišķi |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 2026. gada 31. jūlijs | Windows, macOS, Linux; instalējama PWA | SQLite darbvirsmā; IndexedDB pārlūkprogrammā; pēc noklusējuma bez konta un telemetrijas | FSRS | Darbvirsmas mapes sinhronizācija vai izvēles šifrētu datu pārsūtīšanas serveris ar Cloudflare Worker/R2 | Darbvirsmas APKG imports nolasa pirmos divus laukus, komplektus, birkas, aptuvenu plānošanas stāvokļa momentuzņēmumu un attēlus; JSON un Recall arhīva eksports | **Tikai šifrētu momentuzņēmumu pārsūtīšanas serveris.** Tas nemitina PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 2025. gada 10. oktobris; darbs pie pirmkoda turpinājās 2026. gadā | Android APK, macOS DMG, Linux Flatpak; Windows jābūvē no pirmkoda | Nav piekļuves tīklam; komplekta saturs ir Markdown | Stabilais laidiens: SM-2; noklusējuma zars: FSRS | Nav | Markdown saglabā kartīšu saturu; atsevišķa slēpta datubāze saglabā progresu | **Nav ko mitināt.** Markdown fails un tam blakus glabātā datubāze jākopē kopā |

## 1. Anki ir drošākā noklusējuma izvēle

Anki uzvar mazāk pamanāmajās lietās. Tas var attēlot sarežģītus piezīmju tipus, no veidnēm ģenerēt vienas piezīmes kartīšu variantus, glabāt multividi kopā ar kolekciju un pārnest gadiem uzkrātus plānošanas datus. Šajā pārbaudē izmantotais stabilais darbvirsmas laidiens ir [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Jaunākais no šiem būvējumiem, 26.09b2, ir atzīmēts kā beta versija, tāpēc tas šeit nav atskaites punkts.

Atvērtā pirmkoda tvērums ir nevienmērīgs. [Darbvirsmas repozitorijam ir AGPL-3.0-or-later licence](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), ar uzskaitītiem izņēmumiem komplektā iekļautajām sastāvdaļām. [AnkiDroid](https://github.com/ankidroid/Anki-Android) ir atsevišķs atvērtā pirmkoda Android projekts. AnkiMobile un AnkiWeb ir oficiāli produkti, taču to pirmkods šajos repozitorijos nav iekļauts. Plašāk par to rakstā [Vai Anki ir atvērtā pirmkoda lietotne?](/blog/is-anki-open-source/).

Instalētie klienti glabā kolekcijas lokāli, tāpēc parastai atkārtošanai savienojums nav vajadzīgs. AnkiWeb ir tiešsaistes risinājums. Ja noteicošā ir darbība bezsaistē, rakstā [Vai Anki darbojas bezsaistē?](/blog/does-anki-work-offline/) nošķirts tas, kas paliek lokāli, no tā, kam jāgaida sinhronizācija.

Anki atbalsta [FSRS un agrāko plānotāju](https://docs.ankiweb.net/deck-options.html). Tā eksporta formāti šajā grupā dod vislabāko sākumpunktu migrācijai. [COLPKG satur visu kolekciju ar plānošanas datiem](https://docs.ankiweb.net/exporting.html), savukārt APKG eksportā var iekļaut plānošanas informāciju un multividi, izvēloties attiecīgās opcijas. Anki importē arī tekstu, Anki pakotnes un Mnemosyne 2.0 datubāzes.

Tik pilnīga avota pakotne negarantē nevainojamu importu citur. Mērķa lietotnei joprojām jāsaprot tajā esošās veidnes, kartīšu ģenerēšanas noteikumi, multivides atsauces un plānotāja lauki. Tai vienkārši ir vairāk informācijas nekā CSV failā.

[Oficiālais pašmitināmais serveris](https://docs.ankiweb.net/sync-server.html) ir apzināti neliels. Tas sinhronizē saderīgus Anki klientus; tas nenodrošina AnkiWeb, atkārtošanu pārlūkprogrammā vai kontu portālu. Pēc noklusējuma tas izmanto nešifrētu HTTP, un pamācībā ieteikts to turēt lokālajā tīklā vai aizsargāt ar VPN vai HTTPS reverso starpniekserveri. Arī klienta un servera versijām jāpaliek savstarpēji saderīgām.

Izvēlieties Anki, ja galvenā ir precīza kolekcijas saglabāšana, veidnes, papildinājumi vai plašs klientu atbalsts. Citur skatieties tad, ja būtiskāks ir kāds konkrēts ierobežojums, piemēram, vajadzīga pašmitināta pārlūkprogrammas saskarne vai pilnībā publicēts mobilo lietotņu pirmkods.

## 2. Mnemosyne ļauj koncentrēties uz lokālu mācīšanos

Mnemosyne rada darbvirsmas mācību rīka iespaidu, jo tāds tas arī ir. Līdzi nenāk zināšanu bāze vai mākoņplatforma. Jūs iegūstat lokālu datubāzi, tradicionālu intervālu atkārtošanu, Android lietotni atkārtošanai un sinhronizācijas serveri, ko var darbināt darbvirsmā vai datorā bez grafiskās saskarnes.

Jaunākais stabilais laidiens joprojām ir [2.11 no 2023. gada novembra](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Repozitorijā izmaiņas veiktas arī 2026. gadā, bet tas tās vēl nepadara par stabilu instalācijas pakotni. Izmēģiniet 2.11 operētājsistēmās, kuras plānojat lietot tuvākajos gados.

Arī licenci nevar raksturot ar vienu nozīmīti. [Licenču sadalījums repozitorija saknē](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) piešķir LGPL v3 komponentam openSM2sync un atsevišķus noteikumus pārējai Mnemosyne daļai. [Galvenās programmas licence](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) ir AGPL v3 ar papildu nosacījumu: atvasinātajā darbā Mnemosyne nosaukumam jāpaliek skaidri redzamam, par precīzu veidu vienojoties ar uzturētājiem. Izlasiet šo tekstu, pirms izplatāt modificētu būvējumu.

[Android klients ļauj atkārtot bezsaistē, bet ne rediģēt kartītes](https://mnemosyne-proj.org/help/android-client). Citās ierīcēs var izmantot pārlūkprogrammas atkārtošanas serveri, ko palaiž no darbvirsmas lietotnes, taču oficiālā funkciju lapa brīdina, ka serverim nav drošības funkciju. Tā ir ērta saskarne lokālajam tīklam, nevis noslīpēta publiska tīmekļa lietotne.

Migrācija ir spēcīgākais Mnemosyne arguments, lai nepaliktu pie Anki. Oficiālajā funkciju lapā dokumentēts [pilns Anki imports, tostarp pielāgoti kartīšu tipi un apguves dati](https://mnemosyne-proj.org/features). [Iebūvētā sinhronizācija](https://mnemosyne-proj.org/help/syncing) apvieno kartītes un apguves datus, un tās mērķis var būt jūsu pārvaldīts dators.

Parastā eksporta komanda var maldināt, veidojot rezerves kopiju. Tā ir paredzēta atlasītu kartīšu kopīgošanai un neiekļauj apguves datus. Lai pārvietotu vai atjaunotu visu sistēmu, [pamācībā par vairākiem datoriem](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) norādīts kopēt visu datu direktoriju.

Mnemosyne šeit ir spēcīgākā atvērtā pirmkoda alternatīva, kas koncentrējas tieši uz Anki pamatuzdevumu. Jārēķinās ar retiem stabiliem laidieniem, ierobežotu rediģēšanu mobilajās ierīcēs un pārlūkprogrammas saskarni, kurai rūpīgi jāierobežo piekļuve tīklā.

## 3. SiYuan der, ja sistēmas pamatā ir piezīmes

SiYuan ir zināšanu pārvaldības lietotne, kuras prioritāte ir privātums un kurā mācību kartītes iekļautas tajā pašā bloku un dokumentu modelī. Tas ir noderīgi, ja atkārtošanas materiāls rodas no piezīmēm. Ja vajag tikai kartīšu rindu, šī sistēma var būt pārlieku apjomīga.

[AGPL-3.0 repozitorijā](https://github.com/siyuan-note/siyuan) ir saites uz saskarni, kodolu, mobilajām lietotnēm, datu slāni un FSRS komponentu. Šeit pārbaudītais stabilais laidiens ir [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Darbvirsmas un mobilie klienti glabā darbvietu lokāli un turpina darboties bezsaistē.

Sinhronizācija neietilpst bezmaksas lokālās glabāšanas plānā. [Oficiālajā cenu lapā](https://b3log.org/siyuan/en/pricing.html) abonementā piedāvāta oficiālā sinhronizācija ar šifrēšanu no gala līdz galam, savukārt maksas Pro funkcijas pievieno integrācijas ar jūsu S3 vai WebDAV krātuvi. Projekts arī brīdina neievietot aktīvo darbvietu parastā failu sinhronizācijas mapē, jo vienlaicīga rediģēšana var sabojāt vai pārrakstīt datus.

Docker darbina pilnvērtīgu pārlūkprogrammas lietotni, bet nekļūst par instalēto lietotņu sinhronizācijas serveri. [v3.8.2 Docker dokumentācijā](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) teikts, ka darbvirsmas un mobilie klienti tam nevar pievienoties. Docker versijā nav arī Markdown importa un PDF, HTML un Word eksporta. Šīs komandas ir pieejamas pilnajā instalētajā lietotnē, tāpēc vispārīgā funkciju saraksta pārkopēšana Docker izvietošanas plānā būtu maldinoša.

Oficiālu APKG importētāju neatradu. SiYuan var pārnest Markdown un savus datu formātus, bet Anki kolekcijas pārcelšana prasa rūpīgāku pārveidošanu.

Izvēlieties SiYuan, ja galvenais produkts ir zināšanu bāze un mācību kartītēm jābūt tās daļai. Ja meklējat tiešu Anki aizstājēju, Mnemosyne un Anki migrācijas iespējas ir skaidrākas.

## 4. Nibomo publicē vairāk sistēmas pirmkoda — un prasa to uzturēt

Nibomo šajā salīdzinājumā publicē visplašāko produkta pirmkoda kopumu. MIT monorepozitorijā ir tīmekļa lietotne, iOS un Android klienti, servera daļa, autentifikācijas pakalpojums, sinhronizācija, administrēšanas lietotne, datubāzes migrācijas un AWS infrastruktūra. Šeit izmantotais stabilais laidiens ir [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Vēlākās izmaiņas noklusējuma zarā netiek uzskatītas par jau izlaistām iespējām.

[Arhitektūra](/docs/architecture/) ir veidota vispirms darbam bezsaistē, taču katrā klientā “bezsaistē” nozīmē mazliet ko citu. Tīmekļa lietotnes primārie lokālie dati glabājas IndexedDB. iOS izmanto SQLite, bet Android — Room virs SQLite. Izmaiņas vispirms ieraksta lokāli un ievieto izejošo izmaiņu rindā sinhronizācijai. Šāda uzbūve tiek galā ar pārtrauktu savienojumu; tā nepadara pārlūkprogrammas krātuvi pastāvīgu un neatceļ vajadzību katrā ierīcē pārbaudīt palaišanu no pilnībā aizvērtas lietotnes.

Nibomo ZIP pakotne ir satura pārneses formāts, nevis konta rezerves kopija. Versijā v1.23.0 tās [pakotnes shēma](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) ietver priekšpuses un aizmugures saturu, birkas, kartītes tipu, avota metadatus un pakotnes metadatus; saistītā multivide tiek pievienota atsevišķi. Tā nepārnes komplektu struktūru, atkārtojumu vēsturi, FSRS stāvokli, darbvietas iestatījumus vai kontus.

Versijā v1.23.0 nav APKG importētāja. Dokumentētā [Anki TXT/CSV migrācijas darbplūsma](/blog/migrate-from-anki-txt-export-open-source-flashcards/) izmanto eksportētu tekstu kartīšu atjaunošanai, un rezultāts jāpārbauda cilvēkam. Veidnes, plānošanas stāvoklis, komplektu struktūra un pakotnē iekļautā multivide šajā ceļā netiek automātiski saglabāta. Tas ir saprātīgs variants vienkāršam teksta komplektam un slikta izvēle ļoti pielāgotai kolekcijai.

Tikpat skaidra ir [pašmitināšanas pamācība](/docs/self-hosting/). Produkcijas vidē izmanto AWS CDK sistēmu ar RDS, Cognito, API Gateway un Lambda, S3 un CloudFront, slepenajiem piekļuves datiem, brīdinājumiem un rezerves kopijām. Cloudflare DNS, Resend e-pasta un Sentry konfigurācija atrodas ārpus AWS. Docker Compose darbina lokālo izstrādes vidi; tā nav atbalstītā produkcijas pakotne. Uzturētājiem, kuri vēlas privātus iOS vai Android būvējumus, tie jābūvē un jāizplata atsevišķi.

Izvēlieties Nibomo, ja kontrole pār pilnu tīmekļa, instalēto lietotņu un servera pirmkodu attaisno šos uzturēšanas darbus. Izvēlieties Anki vai Mnemosyne, ja svarīgākā prasība ir esošās kolekcijas saglabāšana.

## 5. Recall ir moderns, bet importētājs jāizpēta rūpīgi

Recall ir jaunākais no galvenajiem ieteikumiem. Tas iekļauts sarakstā, jo [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) piedāvā versijotus darbvirsmas būvējumus, instalējamu PWA, skaidri aprakstītu lokālo glabāšanu, FSRS, datu eksportu un dokumentētu pašmitinātas sinhronizācijas risinājumu.

Darbvirsmas lietotne ar MIT licenci izmanto SQLite; PWA izmanto IndexedDB. Nevienai nav vajadzīgs konts, un projekts norāda, ka telemetrija pēc noklusējuma ir izslēgta. Darbvirsmas laidieni pieejami Windows, macOS un Linux.

APKG importētājs ir noderīgs, taču README frāze “review history” jeb “atkārtojumu vēsture” sola vairāk, nekā īstenots šajā versijā. [v1.3.0 importētāja pirmkods](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) nenolasa Anki atkārtojumu žurnālu. Tas nolasa pašreizējo kartītes stāvokli, intervālu, atkārtojumu un aizmiršanas reižu skaitu, kā arī FSRS stabilitāti un grūtību, ja Anki tās ir saglabājis. Vecākām kartītēm bez šiem FSRS laukiem Recall tos aprēķina aptuveni no SM-2 vērtībām.

Arī satura pārveidošanai ir būtiski ierobežojumi. Importētājs izmanto pirmos divus piezīmes laukus kā priekšpusi un aizmuguri, neatveidojot Anki piezīmju tipus un veidnes. Tas saglabā komplektu nosaukumus un birkas. Tas izvelk izplatīto formātu attēlus un pārraksta to atsauces, bet izlaiž audio un citu multividi. Tā kā importētājs ir Tauri komanda, tieša APKG migrācija ir darbvirsmas funkcija, nevis pārlūkprogrammas PWA iespēja.

Tas ir daudz labāk par atjaunošanu no vienkārša teksta, tomēr kolekcija netiek saglabāta pilnīgi precīzi. Pirms lielas migrācijas pārbaudiet aizpildāmos teksta izlaidumus, vienas piezīmes kartīšu variantus, papildu laukus, HTML/CSS, attēlus, audio, nākamo atkārtojumu datumus un atkārtotas piezīmes.

Recall ir divi sinhronizācijas ceļi. Darbvirsmas lietotne var ierakstīt momentuzņēmumu mapē, ko pārvalda Dropbox, Drive vai cits failu sinhronizācijas rīks. Izvēles pārsūtīšanas serveris izmanto Cloudflare Worker un R2 krātuvi. Saskaņā ar šīs versijas [sinhronizācijas aprakstu](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) klienti pirms augšupielādes šifrē momentuzņēmumus ar AES-GCM; serveris redz šifrētus datus, nevis kartīšu datus vai atslēgu. Atjauninājumiem izmanto optimistisko vienlaicīguma kontroli un pēc viena konflikta mēģina vēlreiz, tomēr joprojām tiek apvienoti veseli momentuzņēmumi, nevis atsevišķi lauki. Uzturētāju apmaksāta publiska pārsūtīšanas servera nav — jums tas jāizvieto un jānorāda tā URL.

JSON un Recall arhīva eksports ļauj paņemt datus līdzi, pārejot uz citu sistēmu. Pirms saukt eksportu par rezerves kopiju, atjaunojiet to tukšā profilā.

Izvēlieties Recall, ja vēlaties modernu darbvirsmas/PWA lietotni ar lokāliem datiem un varat pieņemt jaunu projektu un importētāju, kas saglabā noderīgu stāvokļa momentuzņēmumu, nevis visu Anki sistēmu.

## 6. Essentialist komplektu var lasīt kā tekstu, bet progress glabājas atsevišķi

Essentialist sistēmas tvērums šajā salīdzinājumā ir visšaurākais. Katrs komplekts ir Markdown fails, kuru var atvērt teksta redaktorā, glabāt versiju kontrolē vai kopēt ar parastiem failu rīkiem. Lietotne apzināti neveic nevienu tīkla pieprasījumu.

Jaunākais stabilais laidiens ir [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Tam pievienoti Android, macOS un Linux būvējumi; Windows lietotājiem jābūvē no pirmkoda. [Šīs versijas README](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) kā plānotāju norāda SM-2.

[Noklusējuma zara README](https://github.com/essentialist-app/essentialist/blob/main/README.md) jau norāda FSRS, un 2026. gadā repozitorijā turpinājās pirmkoda izmaiņas. Tas parāda attīstības virzienu, bet nedod pamatu 2025. gada bināro laidienu saukt par FSRS lietotni.

Arī Markdown aptver mazāk, nekā sākumā šķiet. Kartīšu teksts atrodas redzamajā failā, bet progress — slēptā datubāzē ar nosaukumu `.<deck file>.db`. Kopējot `sample.md` bez `.sample.md.db`, jūs saglabājat jautājumus un atbildes, bet zaudējat apguves stāvokli.

Nav ne iebūvētas ierīču sinhronizācijas, ne servera. Failus var ievietot savā sinhronizētajā mapē, bet tad konfliktu risināšana un atjaunošana paliek jūsu ziņā.

Izvēlieties Essentialist, ja galvenais ir lasāms Markdown un darbs bez tīkla. Tā nav nemanāmi sinhronizēta vairāku ierīču sistēma, un viens redzams fails nav pilna rezerves kopija.

## Četri aktīvi projekti, kuriem sekot

Šajos projektos 2026. gadā patiešām noticis darbs. Tie paliek ārpus galvenā sešinieka, jo ieteikumam vajag vairāk nekā interesantu pirmkodu.

| Projekts | Kas jau ir pieejams | Kas vēl liedz to iekļaut galvenajā sarakstā |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL pirmkods, FSRS/SM-2/Leitner plānotāji, Docker izvietošana, pārvaldīts pakalpojums, CSV imports un datu eksports | Izveidots 2026. gada jūlijā; nav versijota lietotnes laidiena. GitHub laidiens ir audio pakotne, nevis lietotnes versija |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT tīmekļa lietotne ar FSRS, CSV importu, attēlu daļu aizklāšanu un dokumentētu Supabase/Vercel arhitektūru | Nav laidiena ar versijas tagu, un oficiālā dokumentācija vēl pilnībā neapraksta bezsaistes darbības, eksporta un pašmitinātas atjaunošanas iespējas |
| [Prep](https://github.com/Zamua/prep-app) | MIT pirmkods, FSRS, mitināta lietošana un dokumentēta izvietošana pašmitināmajā celld izpildvidē | Nav laidiena ar versijas tagu; pašmitināšana nozīmē arī celld un objektu krātuves uzturēšanu, nevis atsevišķas kartīšu programmas izvietošanu |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Kotlin mobilā lietotne ar GPLv3 licenci, FSRS/SM-2, Android laidiens un APKG imports ar veidnēm un multividi | Izveidots 2026. gadā; iOS jābūvē no pirmkoda, un oficiālā dokumentācija neapraksta vispārīgu sinhronizāciju starp tālruņiem |

Vairāki pazīstami nosaukumi atlasi neiztur vienkāršāku iemeslu dēļ. Mochi [atvērtā pirmkoda repozitorijs](https://github.com/mochi-cards/open-source) ir integrāciju kopums, nevis pamatlietotne. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) ir atvērtā pirmkoda un pašmitināms, taču oficiālajā README intervālu atkārtošana joprojām atrodas sadaļā “Features coming soon” jeb gaidāmās funkcijas. [OpenCards](https://github.com/holgerbrandl/opencards) nav bijis jauna laidiena kopš [v2.5.1 2017. gada janvārī](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), un tā repozitorijā kods nav mainīts kopš 2018. gada.

Ja piekļuve pirmkodam nav obligāta, [plašākajā Anki alternatīvu salīdzinājumā](/lv/blog/best-anki-alternatives/) ir produkti citām prasībām.

## Pārbaudiet migrāciju piecos atsevišķos slāņos

Apgalvojums “importē Anki” bez nākamā teikuma ir gandrīz bezjēdzīgs. Migrācija var izdoties vienā slānī un neizdoties četros pārējos.

| Slānis | Ko salīdzināt | Maldinoša izdošanās pazīme |
| --- | --- | --- |
| Kartīšu saturs | Katrs lauks, teksta izlaiduma marķieris, birka, īpašā rakstzīme un atkārtotā piezīme | Kopējais kartīšu skaits ir līdzīgs |
| Struktūra | Piezīmju tipi, veidnes, ģenerētie vienas piezīmes kartīšu varianti un ligzdotie komplekti | Priekšpuses un aizmugures teksts kaut kur parādījās |
| Multivide | Attēli un audio ir nokopēti, atsauces darbojas lokāli, un saturu var atvērt vai atskaņot bezsaistē | Importētājs atpazina failu nosaukumus |
| Apguves stāvoklis | Atkārtojumu žurnāls, stāvoklis, nākamā atkārtojuma datums, intervāls, aizmiršanas reizes un plānotāja parametri | Importētās kartītes ir klāt, bet nemanāmi sāk mācīšanos no jauna |
| Datu pārnešana un atjaunošana | Dokumentēts eksports vai rezerves kopija ļauj citur atjaunot to pašu sistēmu | Lasāms teksta eksports tiek uzskatīts par pilnu rezerves kopiju |

Pirms īstās kolekcijas pārcelšanas izveidojiet vienu apzināti sarežģītu izmēģinājuma komplektu. Iekļaujiet papildu laukus, aizpildāmus teksta izlaidumus, parastās un apgrieztās veidnes, ligzdotus komplektus, birkas, attēlus, audio un pietiekami daudz atkārtojumu vēstures, lai varētu noteikt, vai mērķa lietotne to saglabājusi.

Saglabājiet neskartu sākotnējo rezerves kopiju. Pēc importa atsevišķi salīdziniet piezīmju, kartīšu un multivides skaitu. Pārbaudiet nākamo atkārtojumu datumus, nepaļaujoties uz paziņojumu “plānošanas dati importēti”. Atkārtojiet bezsaistē katrā ierīcē, ko plānojat izmantot. Tad divās ierīcēs izveidojiet izmēģinājuma konfliktējošas izmaiņas un vērojiet sinhronizācijas darbību.

Dažas dienas lietojiet abas sistēmas. Vecās kolekcijas izdzēšana ir pēdējais solis, nevis pierādījums, ka jaunā darbojas.

## Pašmitināšana ir pabeigta tikai pēc atjaunošanas

Iepriekš minētie produkti ar “pašmitināšanu” apzīmē ļoti atšķirīgas lietas:

- Anki un Mnemosyne darbina **sinhronizācijas pakalpojumus**, bet mācīšanās saskarne paliek instalētajos klientos.
- SiYuan Docker darbina **pārlūkprogrammas lietotni**, kuru instalētie klienti nevar izmantot kā savu sinhronizācijas serveri.
- Recall darbina **šifrētu momentuzņēmumu pārsūtīšanas serveri**, nevis pašu PWA.
- Nibomo izvieto **pilnu tīmekļa un servera sistēmu**, bet instalētās lietotnes joprojām jābūvē atsevišķi.
- Essentialist **nav servera**; viss jūsu pārvaldāmais atrodas lokālajos failos.

Kad šis tvērums ir skaidrs, pārbaudiet to daļu, ko uzturētāji mēdz atlikt:

1. Izveidojiet kartītes, pievienojiet multividi, veiciet atkārtojumus un sinhronizējiet no diviem klientiem.
2. Saglabājiet visas dokumentētās datubāzes, objektu krātuves, lokālos failus, slepenos piekļuves datus un konfigurācijas vērtības.
3. Atjaunojiet datus tukšā kontā, datorā vai izolētā izvietojumā.
4. Salīdziniet kartīšu skaitu, multividi, atkārtojumu vēsturi, atkārtošanas termiņu stāvokli, pieteikšanos un klientu sinhronizāciju.
5. Atjauniniet atjaunoto kopiju un pabeidziet vēl vienu atkārtošanas ciklu.

Ja atjaunošana joprojām ir atkarīga no vecā datora, jums ir strādājošs pakalpojums. Pārbaudītas rezerves kopijas jums vēl nav.

## Bieži uzdotie jautājumi

### Kura ir labākā atvērtā pirmkoda mācību kartīšu lietotne 2026. gadā?

Anki ir labākā noklusējuma izvēle vairumam cilvēku, kuri mācās. Tas apvieno nobriedušu kolekcijas modeli, FSRS, plašu klientu klāstu un vispilnīgākos paša produkta rezerves kopiju un eksporta formātus. Jāpatur prātā, ka oficiālā iOS lietotne un tīmekļa pakalpojums neietilpst darbvirsmas atvērtā pirmkoda repozitorijā un pašmitinātais serveris nodrošina sinhronizāciju, nevis mācīšanos pārlūkprogrammā.

### Kura ir labākā atvērtā pirmkoda Anki alternatīva?

Mnemosyne ir šeit aplūkotā specializētā alternatīva ar visilgāko pieredzi, un tajā oficiāli dokumentēts Anki pielāgoto kartīšu tipu un apguves datu imports. Recall izskatās modernāk un darbvirsmā tieši importē APKG failus, taču tas pārveido pirmos divus piezīmes laukus, saglabā tikai plānošanas stāvokļa momentuzņēmumu, importē attēlus, bet ne audio, un nepārnes pilnu atkārtojumu žurnālu.

### Vai Anki var mitināt pats?

Jā, saderīgiem klientiem var darbināt Anki oficiālo sinhronizācijas serveri. Taču tas nav pašmitināms AnkiWeb aizstājējs: tajā nav mācību saskarnes pārlūkprogrammā.

### Vai atvērts pirmkods nozīmē darbību bezsaistē?

Nē. Atvērts pirmkods raksturo licencēšanu un piekļuvi kodam. Darbība bezsaistē ir atkarīga no tā, kur klients glabā datus un kurām darbībām vajadzīgs pakalpojums. Spēkā ir arī pretējais: lietotne var glabāt datus lokāli, nepublicējot savu pamatkodu.

### Vai pašmitināšana garantē datu pārnesamību?

Nē. Pašmitināšana dod kontroli pār to, kur pakalpojums darbojas. Pārnesamība ir atkarīga no eksporta, pilnām rezerves kopijām un atjaunošanas, ko tiešām esat pārbaudījis. Arī datubāzi uz sava servera var būt grūti migrēt, un lasāms Markdown komplekts var neietvert tam blakus glabāto atkārtojumu stāvokli.

## Mans ieteikums

Palieciet pie **Anki** vai izvēlieties to, ja vien kāds no tā ierobežojumiem nerada reālu problēmu. Izvēlieties **Mnemosyne** mērķtiecīgām mācībām datorā ar lokāliem datiem un pārbaudītam Anki importam. Izmantojiet **SiYuan**, ja mācību kartītēm jābūt daļai no plašākas zināšanu bāzes. Apsveriet **Nibomo**, ja kontrole pār pilnu tīmekļa, instalēto lietotņu un servera pirmkodu attaisno AWS produkcijas vides uzturēšanu. Izvēlieties **Recall** modernam klientam ar lokāliem datiem, vispirms pārbaudot pārveidošanas ierobežojumus. Izvēlieties **Essentialist**, ja parasts Markdown un pilnīga atteikšanās no tīkla ir svarīgāki par sinhronizāciju.

Labākā atvērtā pirmkoda mācību kartīšu lietotne nav repozitorijs ar garāko funkciju sarakstu. Tā ir lietotne, kuras pirmkoda, bezsaistes datu, migrācijas, sinhronizācijas, mitināšanas un atjaunošanas iespējas atbilst sistēmai, par kuru esat gatavs uzņemties atbildību.
