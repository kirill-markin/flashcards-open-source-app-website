---
title: "Mochi mācību kartīšu apskats (2026): bezmaksas plāns, darbs bezsaistē un salīdzinājums ar Anki"
description: "Avotos pārbaudīts Mochi mācību kartīšu apskats: bezmaksas plāns, bezsaistes lietotnes, Markdown piezīmes, FSRS, sinhronizācija, Anki imports, eksports un pašmitināšanas ierobežojumi."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi mācību kartītes"
  - "mochi kartītes"
  - "mochi un anki salīdzinājums"
  - "anki un mochi salīdzinājums"
  - "vai mochi ir bez maksas"
  - "mochi bezsaistē"
  - "mochi cenas"
  - "mochi mitināšana"
  - "markdown mācību kartītes"
  - "mochi intervālu atkārtošana"
---

Mochi kartītes veidošanu sāk ar Markdown dokumentu, nevis ierastajiem laukiem kartītes priekšpusei un aizmugurei. Pievienojiet rindu ar trim defisēm, un dokuments sadalās pusēs, ko var izmantot atkārtošanai. Atstājiet to kā piezīmi, sasaistiet ar citu kartīti vai arhivējiet, lai tas paliktu atrodams meklēšanā, nenonākot atkārtošanas rindā.

Šis nelielais atdalītājs palīdz saprast, kam **Mochi mācību kartītes** ir piemērotas. Mochi labi der tiem, kuri vēlas piezīmes un intervālu atkārtošanu vienā lietotnē, kuras pamatā ir lokāla datu glabāšana, īpaši tad, ja Markdown, atpakaļsaites un vienkārša izvēle Remembered/Forgot (atcerējos/aizmirsu) šķiet dabiska. Tas ir mazāk pārliecinošs risinājums ilggadējam Anki lietotājam, kura kolekcija ir atkarīga no ģenerētiem kartīšu variantiem, pielāgota HTML/CSS, JavaScript, papildinājumiem vai detalizētiem plānotāja iestatījumiem.

Lietojot vienu ierīci, bezmaksas plāns ir kas vairāk par izmēģinājumu: reģistrācija nav vajadzīga, un Mochi dokumentācijā norādīta neierobežota lietošana bezsaistē. Ierobežojums ir sinhronizācija starp ierīcēm — tā ietilpst **Pro plānā par 5 USD mēnesī**. Anki lietotājam būtiskāks ir tas, ko pārejot nāksies zaudēt. Mochi var importēt Anki pakotni un tās atkārtojumu vēsturi, bet nevar saglabāt katru veidni, stilu, skriptu, plānotāja iestatījumu vai papildinājuma darbību.

> **Par manu saistību ar Nibomo:** esmu Kirill Markin un izstrādāju [Nibomo](/lv/). Šis ir avotos pārbaudīts darbplūsmas apskats; es neapgalvoju, ka būtu pats izmēģinājis produktu praksē. Partneru saišu nav. Galvenais salīdzinājums ir starp Mochi un Anki; mans produkts parādās tikai beigās kā skaidri norādīta alternatīva.

**Fakti pārbaudīti:** 2026. gada 7. septembrī. Tolaik jaunākais publiski redzamais [Mochi laidiens](https://mochi.cards/changelog/) bija versija 26.8.2, kas datēta ar 2026. gada 10. augustu. Cenas un informācija lietotņu veikalos var mainīties.

![Grāmatu restaurators pārbauda nelielu akordeona locījumā savienotu kartīšu virkni, kamēr sākotnējais arhīvs droši glabājas kastē](/blog/mochi-alternative-v3.png)

## Īsais vērtējums

- **Izvēlieties Mochi**, ja vēlaties Markdown piezīmes kopā ar kartītēm, darbu bezsaistē vienā ierīcē bez konta, atpakaļsaites un divus atbildes vērtējumus atkārtošanā.
- **Izvēlieties Anki**, ja vajadzīgi nobrieduši piezīmju tipi, HTML/CSS veidnes, papildinājumi, bezmaksas mitināta sinhronizācija, četri atbildes vērtējumi vai plašāki FSRS iestatījumi.
- **Pagaidām nepārejiet**, ja jau regulāri atkārtojat un nevarat nosaukt darbplūsmas problēmu, ko Mochi atrisinās. Jauna saskarne nav pietiekams iemesls riskēt ar gadiem uzkrātiem plānošanas datiem un pielāgotām kartītēm.
- **Pirms migrācijas izmēģiniet**, ja Anki jau glabā jūsu ilgi veidoto kolekciju. Mochi pieņem `.apkg` failus un var pārnest atkārtojumu vēsturi, taču pārveido HTML par Markdown un noņem CSS un JavaScript.

## Īss Mochi un Anki salīdzinājums

| Izvēles kritērijs | Mochi | Anki |
|---|---|---|
| Kam vislabāk der | Saistītu piezīmju un Markdown lietotājiem, kuri vēlas piezīmes līdzās atkārtošanas kartītēm | Tiem, kuri vēlas nobriedušu, konfigurējamu mācību kartīšu sistēmu |
| Kartīšu veidošana | Markdown dokuments iegūst vairākas puses, pievienojot `---`; pieejami arī lauki un veidnes | Piezīmes satur laukus; HTML/CSS veidnes ģenerē vienu vai vairākas kartītes |
| Atkārtošanas gaita | Jaunas kartītes vispirms nonāk apguves posmā; apgūtajām izmanto Forgot / Remembered (aizmirsu / atcerējos) | Kartītēm izmanto Again / Hard / Good / Easy (vēlreiz / grūti / labi / viegli) |
| Plānošana | Pēc noklusējuma Mochi paša algoritms; FSRS var ieslēgt pēc izvēles | FSRS vai agrākais SM-2, ar plašākiem FSRS pielāgošanas rīkiem |
| Bezmaksas lietošana | Bez reģistrācijas un ar neierobežotu lietošanu bezsaistē | Bezmaksas darbvirsmas lietotnes un AnkiWeb sinhronizācija; oficiālā iOS lietotne ir maksas |
| Sinhronizācija starp ierīcēm | Pro, 5 USD mēnesī | Bez maksas caur AnkiWeb |
| Platformas | Tīmeklis, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, oficiālā AnkiMobile, neatkarīgā AnkiDroid |
| Pārnesami formāti | Eksports paša Mochi `.mochi` formātā, Markdown un CSV | Paša Anki `.colpkg` un `.apkg` formāti, kā arī ar tabulācijas zīmēm atdalīts teksts |
| Datu un mitināšanas iespēju robežas | Pamatā lokāla datu glabāšana; pamatlietotne netiek piedāvāta kā atvērtā pirmkoda produkts, un nav dokumentēta atbalstīta pašmitināma sinhronizācijas pakalpojuma | Galvenajam repozitorijam ir AGPL licence; dokumentēts oficiāls pašmitināms sinhronizācijas serveris |

Galvenā izvēle ir starp **vienkāršu darbu ar piezīmēm un kontroli pār visu kolekciju**.

## Kā veidota Mochi saskarne

Mochi saskarni ir vieglāk saprast, izsekojot vienas kartītes ceļam.

Katra kartīte pieder komplektam. Nospiežot **New Card** (jauna kartīte), atveras Markdown redaktors, nevis fiksēti jautājuma un atbildes lodziņi. Vienā kartītē var būt virsraksti, saraksti, kods, attēli, strukturēti lauki un saites. Pievienojiet `---` starp blokiem, lai izveidotu divas vai vairākas atkārtošanas puses. Izmantojiet `[[double brackets]]` jeb dubultās kvadrātiekavas, lai atsauktos uz citu kartīti; Mochi automātiski izveido atpakaļsaiti. Oficiālajā [kartīšu pārskatā](https://mochi.cards/docs/cards/) aprakstītas arī veidnes, kuru vietturi attēlo strukturēto lauku vērtības.

Vienā un tajā pašā sistēmā kartītes var pildīt divus uzdevumus:

- atkārtošanas kartīte izmanto puses un nonāk intervālu atkārtošanas procesā;
- uzziņas piezīme var palikt tajā pašā komplektā un tikt arhivēta; tas izņem to no jauno un atkārtojamo kartīšu rindām, neizdzēšot saturu, birkas, saites vai vēsturi.

[Komplektu skati](https://mochi.cards/docs/decks/custom-views/) ir saglabātas filtru, kārtošanas un izkārtojuma kombinācijas. Ikdienas pārlūkošanai var atstāt režģi, tad izveidot citu skatu pēc birkas, atkārtošanas termiņa, zema atcerēšanās rādītāja vai nesena atkārtojuma. Mochi ļauj skatu izmantot arī intensīvai atkārtošanas sesijai, nemainot parasto grafiku vai atkārtojumu vēsturi. Tas pasaka vairāk nekā saskarnes raksturojums “pārskatāma”: viens un tas pats komplekts var kalpot kā piezīmju grāmata, filtrēta datubāze un mācību rinda.

[Ikdienas atkārtošanai](https://mochi.cards/docs/getting-started/reviewing-cards/) ir divi posmi. Posmā **New cards** (jaunās kartītes) kartīti var pievienot atkārtošanas grafikam vai izvēlēties Again (vēlreiz), lai drīz to redzētu atkārtoti. Kad kartīte ir apgūta un pienācis tās atkārtošanas laiks, tiek parādīta nākamā puse un piedāvāts izvēlēties **Forgot** (aizmirsu) vai **Remembered** (atcerējos). Ja esat aizmirsis, pirms progresa atiestatīšanas Mochi ievieto kartīti atkārtotas pārskatīšanas rindā. Tādējādi izvēle atkārtošanas brīdī ir apzināti ierobežota.

## Vai Mochi ir bez maksas, un kas darbojas bezsaistē?

Jā, taču “bez maksas” un “bezsaistē” nozīmē dažādas lietas atkarībā no tā, kur lietotni izmantojat. [Mochi cenu lapā](https://mochi.cards/) norādīts:

- **Free:** 0 USD bez termiņa ierobežojuma, bez obligātas reģistrācijas un ar neierobežotu lietošanu bezsaistē.
- **Pro:** 5 USD mēnesī; papildus pieejama sinhronizācija starp ierīcēm, komplektu publicēšana, dinamiskie lauki, MI integrācija un atbalsts e-pastā.

Mochi darbojas macOS, Windows, Linux, iOS, Android un tīmeklī. [Lejupielādes un instalēšanas pamācība](https://mochi.cards/docs/getting-started/download-and-install/) precizē praktiskās robežas:

| Vide | Ko nozīmē bezmaksas un bezsaistes lietošana |
|---|---|
| Instalēta darbvirsmas vai mobilā lietotne | Mochi var lietot bezsaistē bez konta. Dati glabājas ierīcē, tāpēc viena instalēta lietotne var nodrošināt pilnvērtīgu bezmaksas darbplūsmu. |
| Tīmekļa lietotne bez Pro | Saturs glabājas pārlūka bezsaistes krātuvē. Mochi brīdina, ka pārlūks šos datus var izdzēst bez brīdinājuma. |
| Viena kolekcija vairākās ierīcēs | Automātiska sinhronizācija starp ierīcēm ir Pro funkcija, lai gan katra instalētā lietotne var darboties bezsaistē. |

Bezsaistes lietošana un sinhronizācija ir divi atsevišķi solījumi. Lai lejupielādētā lietotnē veidotu vai atkārtotu kartītes, Pro nav vajadzīgs. Tas ir vajadzīgs, ja tai pašai aktuālajai kolekcijai automātiski jābūt pieejamai gan klēpjdatorā, gan tālrunī. Svarīgiem bezmaksas plāna datiem saglabājiet rezerves kopiju pašas lietotnes formātā, nevis paļaujieties uz ierīci — un jo īpaši pārlūka krātuvi — kā vienīgo kopiju.

Ja izšķiroša ir darbība bezsaistē, salīdziniet konkrēto ierīču darbplūsmu rakstā [Vai Anki darbojas bezsaistē?](/blog/does-anki-work-offline/) un plašākajā [bezsaistes kartīšu lietotņu ceļvedī](/blog/best-offline-flashcards-app/).

## Markdown kartītes ir īstais iemesls izvēlēties Mochi

Mochi galvenā priekšrocība ir tā, kā Markdown maina materiālu, kuru veidojat un uzturat.

Mochi kartīte paliek lasāma kā teksts. Tajā pašā dokumentā var būt īss skaidrojums, koda bloks, saites uz saistītām idejām un atdalītāji starp atkārtošanas pusēm. Kartītēs var izmantot arī laukus un veidnes, ja vairākām kartītēm vajadzīga vienāda struktūra. Kad kartītei lietota veidne, Mochi attēlo tās Markdown ar lauku vietturiem un attēlošanas laikā ignorē pašas kartītes Markdown, to neizdzēšot.

Anki pamatā ir cits modelis. Piezīme glabā laukus, un [kartīšu veidnes](https://docs.ankiweb.net/templates/intro.html) nosaka, kuri lauki būs redzami un kādas kartītes tiks ģenerētas. Veidnēs izmanto HTML, bet noformējumam — CSS. Tāpēc viena vārdu krājuma piezīme var ģenerēt kartītes gan vārda atpazīšanai, gan tā patstāvīgai atsaukšanai atmiņā, pamatdatus saglabājot vienuviet.

Šī struktūra Anki dod plašākas iespējas izkārtojumiem, kas mainās atkarībā no nosacījumiem, ģenerētiem kartīšu variantiem, rakstiski ievadāmām atbildēm, pielāgotam noformējumam un darbplūsmām, ko paplašina papildinājumi. Tas arī nozīmē, ka Anki nav kartīšu lietotne ar iebūvētu Markdown atbalstu. Uz Markdown balstītai Anki darbplūsmai vajadzīgs papildu pārveidošanas vai papildinājuma slānis.

Praktiskais jautājums ir vienkāršs: vai vēlaties piezīmi, kas var kļūt par kartīti, vai strukturētu piezīmes tipu, kas var ģenerēt vairākas kartītes? Mochi ir veidots pirmajam variantam. Anki — otrajam.

## Mochi intervālu atkārtošana tagad ietver arī FSRS

Salīdzinājumi, kuros teikts, ka Mochi nav FSRS, ir novecojuši. Mochi pievienoja FSRS priekšskatījuma versiju 2025. gadā un turpināja izlaist plānotāja labojumus. Tomēr [Mochi paša algoritms joprojām ir noklusējuma izvēle](https://mochi.cards/docs/reviewing/fsrs/).

Noklusējuma algoritms pēc katra atkārtojuma ar atcerētu vai aizmirstu atbildi maina intervālus, izmantojot fiksētus reizinātājus. Ieslēdziet FSRS sadaļā Review Settings (atkārtošanas iestatījumi), un jau apgūtās kartītes pāries uz FSRS, nezaudējot vēsturi. Var iestatīt vēlamo atcerēšanās līmeni, ievadīt pielāgotus parametrus un vēlāk pārslēgties atpakaļ.

Ar abiem plānotājiem Mochi saglabā divus atbildes vērtējumus:

- **Forgot** (aizmirsu) atbilst FSRS vērtējumam Again (vēlreiz).
- **Remembered** (atcerējos) atbilst FSRS vērtējumam Good (labi).

Mochi dokumentācijā teikts, ka divu vērtējumu sistēma darbojas ar FSRS, taču zaudē daļu informācijas, ko sniegtu Hard (grūti) un Easy (viegli). Mochi pieņem optimizētus pielāgotus parametrus, bet tam nav iebūvēta optimizētāja; personīgo parametru ģenerēšanai vajadzīgs ārējs FSRS optimizētājs un Mochi atkārtojumu vēsture.

[Anki FSRS iestatījumi](https://docs.ankiweb.net/deck-options.html#fsrs) piedāvā vairāk. Vēlamo atcerēšanās līmeni un parametrus var piesaistīt iestatījumu sagatavēm, iebūvētais optimizētājs var pielāgot parametrus atkārtojumu vēsturei, un simulators novērtē atkārtojumu skaitu vai mācībām vajadzīgās minūtes ar dažādiem iestatījumiem. Anki reģistrē arī četrus rezultātus: Again (vēlreiz), Hard (grūti), Good (labi) un Easy (viegli).

Šīs papildu pogas palīdz tikai tad, ja tās lietojat konsekventi. Anki rokasgrāmatā Hard tiek uzskatīts par veiksmīgu atcerēšanos. Nospiežot Hard, kad atbildi esat aizmirsis, FSRS saņem nepareizu informāciju, un intervāli var kļūt pārāk gari.

Izvēlieties Mochi divus vērtējumus, ja izvēle “atcerējos vai aizmirsu” palīdz saglabāt sesiju vienkāršu. Izvēlieties Anki, ja vēlaties detalizētāku vērtējumu un izmantosiet tā optimizētāju, atcerēšanās līmeņa iestatījumus, iestatījumu sagataves vai slodzes simulatoru. Pašu plānotāju, nevis lietotņu salīdzinājumu lasiet rakstā [FSRS un SM-2 salīdzinājums](/blog/fsrs-vs-sm-2/).

## Par ko jāmaksā Mochi un Anki

Mācoties vienā datorā, abas lietotnes var neko nemaksāt. Pievienojot darbplūsmai vairāk ierīču, izmaksas rodas dažādās vietās.

Mochi par Pro sinhronizāciju prasa **5 USD mēnesī**, iekļaujot arī publicēšanu, dinamiskos laukus, MI integrāciju un atbalstu. Anki darbvirsmas lietotnes ir bezmaksas, un [oficiālajā Anki vietnē](https://apps.ankiweb.net/) AnkiWeb sinhronizācija aprakstīta kā bezmaksas pakalpojums. AnkiMobile ir maksas oficiālā iPhone un iPad lietotne; AnkiDroid ir bezmaksas, neatkarīgi izstrādāts Android klients.

Tāpēc atbilde uz jautājumu “Kas ir lētāk?” ir atkarīga no jūsu ierīcēm:

- viens dators: abas var būt bez maksas;
- vairāki datori vai Android ierīces: Anki bezmaksas mitinātā sinhronizācija ļauj iztikt bez abonementa;
- iPhone vai iPad: Anki prasa vienreizēju lietotnes pirkumu, savukārt Mochi sinhronizācija starp ierīcēm pieejama regulāri apmaksājamā Pro plānā;
- Mochi lietotāji, kuri jau vēlas publicēšanu, dinamiskos laukus vai MI integrāciju, var uztvert sinhronizāciju kā vienu pakalpojumu komplekta daļu, nevis visu, par ko maksā.

Pirms salīdzināt precīzas iOS kopējās izmaksas, pārbaudiet sava reģiona App Store. Šajā apskatā nav norādīta viena nemainīga lietotņu veikala cena, jo dažādos tirgos tā var atšķirties.

## Mochi mitināšana nav tas pats, kas lokāla datu glabāšana

Trīs apzīmējumus bieži sajauc:

- **Lokāla datu glabāšana kā pamats** nozīmē, ka darba kopija atrodas jūsu ierīcē un lietotne var turpināt darboties bez sava mākoņpakalpojuma.
- **Atvērtais pirmkods** nozīmē, ka pirmkods ir pieejams ar licenci, kas atļauj to izpētīt un mainīt.
- **Pašmitināšana** nozīmē, ka produkta dokumentācijā aprakstīts atbalstīts veids, kā attiecīgo pakalpojumu darbināt savā infrastruktūrā.

Mochi skaidri dokumentē darbību ar lokāli glabātiem datiem. Tā pamatlietotne netiek piedāvāta kā atvērtā pirmkoda produkts: publiskās vietnes kājenes saite “Open source” (atvērtais pirmkods) ved uz [integrāciju kolekciju](https://github.com/mochi-cards/open-source), nevis pamatlietotni. Arī oficiālajā vietnē nav dokumentēts atbalstīts pašmitināms Pro sinhronizācijas aizvietotājs.

Ja meklējat **Mochi mitināšanu**, jo vēlaties savu serveri, iespēju robeža ir šāda: varat glabāt lokālus datus un rezerves kopijas paša Mochi formātā, taču dokumentētais ceļš darbam vairākās ierīcēs ir Mochi Pro. Lokāla datu glabāšana dod noderīgu kontroli pār datiem, taču tā nav pašmitināšana.

Anki galvenajam repozitorijam ir [AGPL 3. versijas vai jaunākas versijas licence](https://github.com/ankitects/anki/blob/main/LICENSE), ar norādītiem izņēmumiem dažiem komponentiem. Oficiālajā rokasgrāmatā pieredzējušiem lietotājiem dokumentēts arī [pašmitināms sinhronizācijas serveris](https://docs.ankiweb.net/sync-server.html). Šis serveris saderīgos klientos aizstāj AnkiWeb sinhronizāciju; tā nav pašmitināta AnkiWeb vietnes kopija. Anki sagaida, ka servera uzturētājs pats risinās komandrindas, tīkla, ugunsmūra, protokola un atjaunināšanas jautājumus.

## Ko saglabā Anki imports un ko tas maina

Mochi [importēšanas dokumentācijā](https://mochi.cards/docs/import-and-export/importing/) norādīts, ka tas pieņem Anki `.apkg` failus, ieskaitot atkārtojumu vēsturi. Taču “importēts” un “līdzvērtīgs” nav viens un tas pats rezultāts.

Importēšanas laikā Mochi pārveido HTML par Markdown un noņem CSS un JavaScript. Tā ir formāta pārveidošana starp diviem atšķirīgiem kartīšu modeļiem. Vienkāršs priekšpuses un aizmugures saturs ir vieglākais gadījums. Kartīte, kas atkarīga no noformējuma, veidnes loģikas, rakstiski ievadāmām atbildēm vai JavaScript, pēc importa jāpārbauda.

Arī atkārtojumu vēstures pārnešanai vajadzīga apzināta izvēle eksportējot. Anki [eksportēšanas rokasgrāmatā](https://docs.ankiweb.net/exporting.html) teikts, ka **Include Scheduling Information** (iekļaut plānošanas informāciju) nosaka, vai pakotnē nonāk atkārtojumu vēsture. Ja šo opciju neieslēdzat, Mochi nevar atgūt vēsturi, kuras `.apkg` failā nekad nav bijis.

Arī tad, ja vēsture tiek pārnesta, negaidiet identiskus nākamo atkārtojumu datumus. Abas lietotnes var izmantot atšķirīgus plānotājus, vērtējumus, vēlamo atcerēšanās līmeni, parametrus, apguves soļus un komplektu iestatījumus. Saglabātie notikumi dod jaunajam plānotājam datus, uz kuriem balstīties; tie nepadara sistēmas identiskas.

## Rezerves kopijas lietotnes formātā un pārnesams teksts kalpo dažādiem mērķiem

Pirms kaut ko pārvietojat, saglabājiet rezerves kopiju, no kuras var atjaunot sākotnējo sistēmu. Lasāms eksports ir noderīgs, taču no tā ne vienmēr var visu atjaunot.

Mochi [rezerves kopiju pamācībā](https://mochi.cards/docs/getting-started/backing-up/) aprakstīti divi veidi, kā saglabāt datus lietotnes formātā:

- Visas lietotāja mapes kopēšana saglabā saturu, atkārtojumu vēsturi, pielikumus, lietotnes iestatījumus un pieteikšanās stāvokli.
- Eksports `.mochi` formātā saglabā komplektus, kartītes, veidnes un laukus, pielikumus, birkas un metadatus, atkārtojumu vēsturi, kartīšu secību un komplektu struktūru.

Mochi [Markdown un CSV eksports](https://mochi.cards/docs/import-and-export/exporting/) ir paredzēts pārnesamībai. Markdown izveido vienu failu katrai kartītei un mapes apakškomplektiem, bet nesaglabā atkārtojumu vēsturi, kartīšu secību, veidnes un metadatu birkas, ja vien birkas nav pašā Markdown tekstā. CSV var eksportēt veidņu laukus vai attēloto priekšpusi un aizmuguri, bet nesaglabā atkārtojumu vēsturi, veidnes vai metadatu birkas, ja vien tās nav iekļautas saturā.

Anki ir līdzīgs nošķīrums:

- `.colpkg` eksportē visu kolekciju ar plānošanas datiem un var ietvert multividi. Tā importēšana aizstāj kartītes mērķa Anki kolekcijā.
- `.apkg` eksportē vienu komplektu un tā apakškomplektus, piedāvājot iekļaut plānošanas informāciju, iestatījumu sagataves un multividi.
- Piezīmes vienkāršā tekstā izmanto ar tabulācijas zīmēm atdalītus laukus ar iegultu HTML formatējumu. Tās saglabā rediģējamu saturu, nevis visu kolekcijas darbību.

Pāreja no Mochi atpakaļ uz Anki parasti nozīmē CSV izmantošanu. Anki var [sasaistīt teksta kolonnas ar piezīmes laukiem](https://docs.ankiweb.net/importing/text-files.html), taču ar šo failu Mochi saites, vairāku pušu darbību, veidnes un atkārtojumu vēsturi nevar pārnest kā līdzvērtīgus Anki objektus. Saglabājiet `.mochi` eksportu arī pēc tam, kad Anki kopija šķiet pareiza.

## Izmēģiniet atgriezenisku pāreju ar kolekcijai raksturīgu komplektu

Migrācijas dialogs pierāda, ka fails ir pieņemts. Tas nepierāda, ka jūsu īstā kolekcija joprojām darbojas vai ka lietojamu saturu varēsiet pārnest atpakaļ. Pārbaudiet abus virzienus, atstājot ikdienas Anki profilu neskartu.

1. **Izveidojiet visas Anki kolekcijas rezerves kopiju.** Eksportējiet `.colpkg` ar multividi un glabājiet to ārpus darba profila.
2. **Pārliecinieties, ka rezerves kopiju var atvērt.** Izveidojiet tukšu pagaidu Anki profilu un importējiet tajā `.colpkg`. Kolekcijas pakotnes imports aizstāj mērķa kolekciju, tāpēc pagaidu profils ir svarīgs.
3. **Šajā pagaidu profilā izveidojiet kolekcijai raksturīgu komplektu.** Veidojiet to pietiekami mazu, lai pārbaudītu katru kartīti, bet iekļaujiet visu, uz ko paļaujaties: parastās un apgrieztās kartītes, kartītes ar aizpildāmiem teksta izlaidumiem, pielāgotas veidnes, CSS, JavaScript, attēlus, audio, vienādojumus, birkas, ligzdotus komplektus un atkārtojumu vēsturi.
4. **Eksportējiet šo komplektu kā `.apkg`.** Iekļaujiet plānošanas informāciju, iestatījumu sagataves un multividi, ja tās ir svarīgas. Šīs opcijas ievieto datus Anki pakotnē; tās nesola, ka Mochi atveidos katru iestatījumu.
5. **Importējiet jaunā Mochi komplektā.** Atstājiet savu ikdienas Anki profilu un tā atkārtojamo kartīšu rindu nemainītu.
6. **Pārbaudiet pirms atkārtošanas.** Salīdziniet saturu, formatējumu, laukus, multividi, birkas, komplektu struktūru un vēsturi. Īpašu uzmanību pievērsiet visam, kas bija atkarīgs no HTML, CSS, JavaScript vai ģenerētiem kartīšu variantiem.
7. **Izvēlieties plānotāju apzināti.** Mochi sāk ar savu algoritmu. Ieslēdziet FSRS tikai tad, ja to plānojat lietot arī pēc izmēģinājuma.
8. **Vienu ierastu mācību nedēļu atkārtojiet kartītes no kopijas.** Novērtējiet Markdown rediģēšanu, New cards (jauno kartīšu) posmu, izvēli Remembered/Forgot (atcerējos/aizmirsu), darbību bezsaistē un, ja par to samaksājāt, sinhronizāciju ierīcēs, ko patiešām nēsājat līdzi.
9. **Pārbaudiet atpakaļceļu.** Eksportējiet Mochi izmēģinājuma komplektu kā `.mochi`, lai saglabātu rezerves kopiju paša produkta formātā, un kā CSV lietošanai Anki. Izmantojiet CSV ar lauku vērtībām, ja svarīgi ir atkārtoti izmantojami lauki; CSV ar attēloto pušu saturu izvēlieties tad, ja galvenokārt vajadzīgs redzamais priekšpuses un aizmugures saturs. Importējiet šo CSV citā tukšā Anki profilā un sasaistiet tā kolonnas ar piemērotu piezīmes tipu.
10. **Pierakstiet katru datu vai iespēju zudumu, ko esat gatavs pieņemt.** Atsevišķi pārbaudiet pāreju turp un atpakaļ. Precīzs noformējums, vairāku pušu darbība, papildinājumu darbība, ģenerētie varianti, atbildes vērtējumi, vēsture vai nākamo atkārtojumu datumi ikdienā var izrādīties svarīgāki nekā salīdzinājuma tabulā.

Atgriešanās ar CSV ir satura migrācija, nevis pilnīga Mochi atjaunošana: tā nepārnes atkārtojumu vēsturi, veidnes vai metadatu birkas, ja vien šīs birkas nav iegultas saturā. Ja Mochi neatrisina jūsu nosaukto problēmu, izdzēsiet izmēģinājuma komplektu un turpiniet lietot sākotnējo Anki profilu. Ja atrisina, pārvietojiet pa vienam īstajam komplektam un saglabājiet Anki `.colpkg` un Mochi `.mochi` rezerves kopijas vairāku parastu atkārtošanas ciklu garumā.

## Kam vajadzētu izmantot Mochi mācību kartītes?

Mochi ir piemērots, ja:

- Markdown jau ir jūsu rakstīšanas un domāšanas veids;
- piezīmēm un atkārtošanas kartītēm jāatrodas vienā savstarpēji saistītā darbvietā;
- vēlaties vienkāršu izvēli Remembered/Forgot (atcerējos/aizmirsu), nevis četrus vērtējumus;
- bezmaksas lietošanai pietiek ar darbu bezsaistē vienā ierīcē vai Pro sinhronizācija jums ir 5 USD mēnesī vērta;
- jūsu kolekcija ir jauna vai pietiekami vienkārša, lai pārveidošana no Anki būtu ar nelielu risku.

Palieciet pie Anki, ja:

- jūsu piezīmju tipi ģenerē vairākus svarīgus kartīšu variantus;
- HTML/CSS veidnes, JavaScript, papildinājumi vai koplietoti komplekti ir sistēmas daļa;
- bezmaksas sinhronizācija starp ierīcēm ir svarīgāka par satura veidošanu Markdown formātā;
- vēlaties Anki FSRS optimizētāju, iestatījumu sagatavju pārvaldību, četrus vērtējumus un slodzes simulatoru;
- gadiem uzkrātie atkārtojumu dati un pielāgotā darbība jau labi kalpo.

Piemērotākā Mochi alternatīva ir atkarīga no tā, kāpēc neviens no abiem variantiem neder. Jaunai, vienkāršākai kolekcijai [Nibomo funkcijas](/lv/features/) ietver FSRS atkārtošanu, mācīšanos bezsaistē un sinhronizāciju, kartīšu, birku un multivides pārnešanu, iespēju aģentiem piekļūt lietotnei un dokumentētu pašmitināšanas ceļu. Es to izstrādāju, un ierobežojumi ir būtiski: tas neaizstāj ne Mochi savstarpēji saistīto Markdown piezīmju grāmatu, ne Anki nobriedušo veidņu un papildinājumu sistēmu. [Darba sākšanas pamācībā](/docs/getting-started/) parādītas pašreizējās iespējas izmantot mitināto pakalpojumu, mobilās lietotnes, aģentus un pašmitināšanu.

## Ko ņemt vērā, pieņemot lēmumu

Mochi ir vairāk nekā glītāka Anki saskarne. Tā pamatideja ir iespēja Markdown piezīmei, saistītam zināšanu ierakstam un intervālu atkārtošanas kartītei būt vienam objektam. Bezmaksas plāns ļauj strādāt bezsaistē bez konta; Pro pievieno mitinātās funkcijas, tostarp sinhronizāciju starp ierīcēm.

Tas ir labs kompromiss cilvēkam, kurš sāk jaunu kolekciju ar Markdown tās centrā. Var būt vērts arī pāriet no Anki, ja izmēģinājums ar kolekcijai raksturīgu komplektu pierāda, ka iebūvētais Markdown atbalsts un divi atbildes vērtējumi novērš reālas neērtības.

Ilggadējam Anki lietotājam vajadzīgs pārliecinošs pamatojums, lai pārietu uz citu lietotni. Izveidojiet kolekcijas rezerves kopiju, pārbaudiet kartītes, kuru darbība ir visvairāk pielāgota, un palieciet pie Anki, ja vien Mochi neuzlabo iknedēļas darbplūsmu tik ļoti, lai būtu vērts atteikties no konkrētām noformējuma, veidņu, plānotāja un ekosistēmas iespējām.
