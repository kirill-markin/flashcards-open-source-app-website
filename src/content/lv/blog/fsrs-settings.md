---
title: "Labākie Anki FSRS iestatījumi 2026. gadā: atcerēšanās līmenis, soļi un atkārtošanas slodze"
description: "Izvēlieties drošus Anki 26.08 FSRS-6 iestatījumus: vēlamo atcerēšanās līmeni, apguves soļus, optimizāciju, pārplānošanu un mācību slodzi."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS iestatījumi"
  - "labākie FSRS iestatījumi"
  - "Anki FSRS iestatījumi"
  - "FSRS vēlamais atcerēšanās līmenis"
  - "FSRS apguves soļi"
  - "FSRS simulators"
  - "FSRS parametru optimizācija"
  - "FSRS-6"
---

Anki vēlamā atcerēšanās līmeņa palielināšana no 90% līdz 95% izklausās pēc nelielas izmaiņas. Taču tas nenozīmē tikai par pieciem procentiem vairāk darba. Paaugstinoties mērķim, FSRS ir jāsaīsina intervāli, un kolekcijā, ar kuru mācāties jau ilgāku laiku, atkārtojamo kartīšu rinda var kļūt krietni garāka. Ja ieslēdzat arī **Reschedule cards on change**, daļa šīs slodzes var parādīties uzreiz.

Tāpēc labākie FSRS iestatījumi nav parametru virkne, ko nokopēt. Tā ir lēmumu secība: nosakiet slodzi, ko varat uzturēt, izvēlieties tai atbilstošu atcerēšanās mērķi, pielāgojiet modeli savai atkārtošanas vēsturei un atstājiet esošos atkārtošanas datumus mierā, ja vien apzināti nevēlaties tos pārrēķināt.

Tālāk minētie nosaukumi un darbība atbilst [Anki 26.08 versijai](https://github.com/ankitects/anki/releases/tag/26.08) un tās FSRS-6 vadīklām. Ja vispirms vēlaties izprast pašu modeli, lasiet [Kas ir FSRS?](/blog/what-is-fsrs/). Ja vēl izvēlaties plānošanas algoritmu, sāciet ar [FSRS un SM-2 salīdzinājumu](/blog/fsrs-vs-sm-2/).

> **Atklātībai:** es esmu Kirill Markin un veidoju [Nibomo](/lv/features/). Anki piedāvā individuālu parametru pielāgošanu un eksperimentālus slodzes simulatorus, ko Nibomo pašlaik nepiedāvā. Salīdzinājumā raksta beigās šīs atšķirības ir skaidri norādītas.

**Fakti pārbaudīti:** 2026. gada 8. septembrī.

![Kanāla slūžu operators pārbauda ūdens plūsmu samazinātā modelī, pirms veic izmaiņas īstajās slūžās](/blog/fsrs-settings-v2.png)

## Īsā atbilde: sāciet ar šo

Vairumam Anki lietotāju šīs ir drošas sākuma izvēles, nevis universāli iestatījumi:

| Iestatījums vai ieradums | Droša sākuma izvēle | Kāpēc |
| --- | --- | --- |
| Vēlamais atcerēšanās līmenis | `0.90` | Tā ir Anki noklusējuma vērtība, kas līdzsvaro atcerēšanos un atkārtošanas slodzi. |
| FSRS parametri | Izmantojiet **Optimize Current Preset**; neielīmējiet un manuāli nerediģējiet svarus | Optimizētājs pielāgo modeli jūsu atkārtošanas vēsturei. |
| Optimizācijas biežums | Ne biežāk kā reizi mēnesī; parasti pietiek ar reizi dažos mēnešos | Anki neiesaka biežu optimizāciju. |
| Apguves soļi | Atstājiet nelielu skaitu soļu, ko var pabeigt tajā pašā dienā | Garas soļu virknes aizkavē pāreju uz modeļa noteikto grafiku. |
| Atkārtotas apguves soļi | Atstājiet pēc iespējas mazāk soļu, katru īsāku par dienu | Tā pati robeža attiecas uz kartītēm pēc neveiksmīgas atcerēšanās. |
| Kartīšu pārplānošana pēc izmaiņām (Reschedule cards on change) | Izslēgta | Jaunie iestatījumi var stāties spēkā turpmākajos atkārtojumos, nepārrēķinot šodienas rindu. |
| Maksimālais intervāls | Saglabājiet noklusējuma 100 gadus | Īsāks ierobežojums liek biežāk atkārtot jau labi apgūtas kartītes. |
| Jaunas kartītes dienā | Nosakiet pēc slodzes, ko varat uzturēt | Katra jauna kartīte rada apguves darbu tagad un atkārtošanas darbu vēlāk. |
| Again un Hard | Again nozīmē, ka neatcerējāties; Hard — atcerējāties ar grūtībām | Nepareizi vērtējumi dod modelim nepareizu vēsturi. |

Ja atkārtošanas slodze ir panesama un jūsu iestatījumi jau ir līdzīgi šiem, iespējams, nekas nav jālabo. Iestatījumu uzturēšana nav mācīšanās.

## Nošķiriet trīs lēmumus

Vēlamo atcerēšanās līmeni, FSRS parametrus un ikdienas slodzi bieži uztver kā vienu lietu. Taču tie regulē atšķirīgus aspektus:

- **Vēlamais atcerēšanās līmenis** ir jūsu atcerēšanās mērķis. To izvēlaties atbilstoši saviem mērķiem un mācībām pieejamajam laikam.
- **FSRS parametri** pielāgo atmiņas modeli atkārtošanas vēsturei. Tos aprēķina Anki optimizētājs.
- **Jauno kartīšu un atkārtojumu limiti** nosaka, cik daudz materiāla nonāk sistēmā un cik daudz kartīšu, kurām pienācis atkārtošanas laiks, Anki var parādīt katru dienu.

Šāds nošķīrums krietni atvieglo problēmu risināšanu. Gara rinda pati par sevi nenozīmē, ka parametri ir nepareizi. Svarīgai kartīšu kopai ne vienmēr vajag atsevišķu parametru iestatījumu komplektu. Un vēlamā atcerēšanās līmeņa pazemināšana nepalīdzēs ilgstoši tikt galā ar jauno kartīšu pievienošanas tempu, kas jau sākotnēji bija pārāk straujš.

## Izvēlieties vēlamo atcerēšanās līmeni pēc slodzes, nevis ambīcijām

Vēlamais atcerēšanās līmenis norāda FSRS, cik lielai jābūt varbūtībai, ka atcerēsieties kartīti tās plānotajā atkārtošanas brīdī. Pie `0.90` FSRS veido grafiku, balstoties uz prognozētu 90% atcerēšanās varbūtību. Tas ir modeļa mērķis, nevis garantija, ka katrā mācību reizē vai eksāmenā pareizi atbildēsiet tieši uz 90% jautājumu.

Mainot mērķi, jāņem vērā abas iespējas:

- Palielinot vēlamo atcerēšanās līmeni, intervāli kļūst īsāki un atkārtojumu — vairāk.
- Samazinot to, intervāli kļūst garāki un neveiksmīgu mēģinājumu — vairāk.
- Ja samazināt to pārāk daudz, papildu darbs aizmirsto kartīšu atkārtotai apguvei var patērēt daļu laika, ko cerējāt ietaupīt.

Anki noklusējuma vērtība ir 90%. [Norādījumos par vēlamo atcerēšanās līmeni](https://docs.ankiweb.net/deck-options.html#desired-retention) ir brīdināts, ka slodze strauji pieaug, mērķim tuvojoties 100%, un ieteikts palikt zem 97%. Oficiālais [skaidrojums par optimālo atcerēšanās līmeni](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) aplūko līknes otru galu: arī ļoti zems atcerēšanās līmenis var būt neefektīvs, jo aizmirstās kartītes prasa vairāk darba.

Sāciet ar `0.90` un mainiet to tikai pēc slodzes izvērtēšanas. Augstāks mērķis var būt pamatots materiālam, kura aizmiršanai ir reālas sekas. Zemāks mērķis var būt pamatots, ja atkārtojumi izspiež vērtīgākas mācības. Neviena no šīm izmaiņām neizlabos neskaidras kartītes, negodīgus vērtējumus vai pārmērīgu jauno kartīšu skaitu.

### Kopas atcerēšanās mērķim un iestatījumu komplekta parametriem ir atšķirīgs tvērums

Anki 26.08 iestatījumam **Desired retention** ir divi tvērumi: **Shared Preset** un **This deck**. Tātad saistītām kopām varat izmantot vienu parametru iestatījumu komplektu, bet atsevišķai kopai piešķirt savu atcerēšanās mērķi.

Iestatiet atsevišķai kopai savu mērķi, ja aizmiršanas sekas atšķiras. Profesionālās licences iegūšanas eksāmena kartīšu kopai var būt pamatots augstāks mērķis nekā mazāk svarīgai uzziņu kopai, pat ja abām izmantojat vienu pielāgoto modeli.

Izvēloties **This deck**, FSRS parametri nekļūst individuāli šai kopai. Pēc noklusējuma Anki pielāgo parametrus, izmantojot visu pašreizējam iestatījumu komplektam piesaistīto kopu atkārtošanas vēsturi. Ja kopu grupas pēc subjektīvās grūtības būtiski atšķiras, tās var pielāgot atsevišķi, izmantojot atsevišķus iestatījumu komplektus.

## Help Me Decide un Simulator risina atšķirīgus jautājumus

Anki 26.08 piedāvā divus atsevišķus eksperimentālus rīkus:

- **Help Me Decide (Experimental)** parāda individuāli aprēķinātu atcerēšanās līmeņa un slodzes līkni. Izmantojiet to, lai noskaidrotu: «Kāds atcerēšanās mērķis atbilst atkārtojumu skaitam, ar ko varu regulāri tikt galā, vai laikam, ko varu tiem atvēlēt?»
- **FSRS Simulator (Experimental)** aplēš, kā viena konfigurācija varētu darboties laika gaitā. Izmantojiet to, lai salīdzinātu atcerēšanās līmeņa, jauno kartīšu skaita, atkārtojumu limitu un maksimālā intervāla izmaiņas.

[FSRS Simulator dokumentācijā](https://docs.ankiweb.net/deck-options.html#the-simulator) ir uzskaitīti galvenie ievaddati:

- simulējamo dienu skaits
- simulācijā iekļaujamo papildu jauno kartīšu skaits
- jaunas kartītes dienā
- maksimālais atkārtojumu skaits dienā
- maksimālais intervāls
- vēlamais atcerēšanās līmenis un iestatījumu komplekta FSRS parametri

Simulācijā tiek izmantoti arī šim iestatījumu komplektam piesaistīto kartīšu faktiskie atmiņas stāvokļi. Tāpēc ilgstoši apgūtai kolekcijai tā ir noderīgāka nekā šodienas atkārtojamo kartīšu skaita reizināšana ar vispārīgu procentu.

Pirms maināt faktiskos iestatījumus, izmēģiniet trīs scenārijus:

1. Pašreizējais atcerēšanās līmenis un jauno kartīšu pievienošanas temps.
2. Atcerēšanās mērķis, ko apsverat.
3. Tas pats mērķis ar mazāku jauno kartīšu skaitu dienā.

Trešais scenārijs pārbauda izplatītu alternatīvu: saglabāt atcerēšanās mērķi un palēnināt jauna materiāla pievienošanu. Ja šādi prognozētā slodze kļūst panesama, nav jāsamierinās ar biežāku aizmiršanu tikai tādēļ, lai saīsinātu rindu. Plašāki ieteikumi par jauno kartīšu skaitu ir rakstā [Cik jaunu mācību kartīšu apgūt dienā?](/blog/how-many-new-flashcards-per-day/).

Abi rīki sniedz aplēses. Izlaistu dienu, rediģētu kartīšu, jauna materiāla un mainīgu vērtēšanas ieradumu dēļ reālā slodze var atšķirties no grafikā prognozētās. Izmantojiet salīdzinājumu, lai izvēlētos virzienu, nevis paredzētu precīzu rindas garumu pēc vairākiem mēnešiem.

Vecākos ceļvežos var būt minēts **Compute Minimum Recommended Retention** jeb CMRR. Anki šo funkciju izņēma 25.07 versijā. Tā vairs nav pašreizējā metode vēlamā atcerēšanās līmeņa izvēlei.

## Optimizējiet FSRS parametrus pēc savas vēstures

Vēlamais atcerēšanās līmenis izsaka jūsu mērķi. FSRS parametri raksturo to, kā modelis pielāgojas jūsu atkārtojumiem.

Anki 26.08 izmantojiet **Optimize Current Preset**, lai pielāgotu aktīvā iestatījumu komplekta parametrus. Pēc noklusējuma Anki iekļauj visu šo komplektu izmantojošo kopu atkārtošanas vēsturi; ja pielāgošanai jāizmanto šaurāka datu atlase, varat mainīt meklēšanas nosacījumus. **Optimize All Presets** atjaunina visus iestatījumu komplektus vienā reizē.

Neievadiet svarus manuāli un nekopējiet tos no Reddit, video vai kāda cita kartīšu kopas. Citu cilvēku kartītes, atkārtošanas laiki un vērtēšanas ieradumi nav jūsu vēsture. Glīta [FSRS-6 svaru](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) rinda nav pārnesama mācību stratēģija.

Optimizējiet atkārtoti tikai tad, kad ir uzkrājies ievērojams jaunas atkārtošanas vēstures apjoms. Anki rokasgrāmatā teikts, ka pietiek ar reizi mēnesī, savukārt 26.08 versijas norādījumos pašā lietotnē — ar reizi dažos mēnešos. Praktiskais secinājums ir viens: nav iemesla optimizēt katru nedēļu, kur nu vēl pēc katras mācību reizes.

### Pārbaudiet pašreizējā iestatījumu komplekta datu kvalitāti

Ieslēdziet **Check health when optimizing (slow)**, ja vēlaties, lai Anki novērtē, cik labi FSRS spēj pielāgoties pašreizējā iestatījumu komplekta vēsturei. Šī pārbaude darbojas ar **Optimize Current Preset**, nevis **Optimize All Presets**.

Ja rezultāts ir slikts, pirms svaru mainīšanas pārskatiet datus. [Anki norādījumos par FSRS parametriem](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) minēti bieži iemesli: mazāk nekā daži simti atkārtojumu, Hard izmantošana pēc neveiksmīga mēģinājuma un Again nenospiešana, kad atbildi neizdodas atcerēties. Ja noderīgas vēstures ir maz, saglabājiet noklusējuma vērtības un optimizējiet vēlāk, nevis aizņemieties cita lietotāja parametrus.

## Again nozīmē, ka neatcerējāties; Hard ir sekmīga atbilde

Šis ieradums ir tikpat svarīgs kā jebkurš iestatījums.

Izmantojiet **Again**, ja nevarējāt sniegt prasīto atbildi vai atbildējāt nepareizi. **Hard** izmantojiet tikai tad, ja atcerējāties pareizi, taču ar lielu piepūli vai vilcināšanos. Arī Good un Easy ir sekmīgi vērtējumi.

Nospiežot Hard, lai izvairītos no īsā Again intervāla, jūs reģistrējat sekmīgu atbildi, lai gan atcerēties neizdevās. FSRS tad mācās no nepareizi reģistrēta notikuma. Izvēlieties pogu pēc tā, cik labi atcerējāties atbildi, nevis pēc tā, kurš virs pogām norādītais intervāls jums patīk labāk.

Neskaidras kartītes apgrūtina godīgu vērtēšanu. Ja jautājums prasa piecus faktus un atceraties četrus, plānošanas problēma sākās jau redaktorā. Sadaliet vai pārrakstiet kartīti. Kartītēm, kuras neizdodas atcerēties par spīti daudziem atkārtojumiem, izmantojiet rakstu [Kā labot mācību kartītes, kas pastāvīgi sagādā grūtības](/blog/how-to-fix-leech-flashcards/).

## Atstājiet FSRS apguves soļus īsus vai apzināti atstājiet laukus tukšus

Apguves un atkārtotas apguves soļi nosaka īsos intervālus, pirms sāk darboties parastais ilgtermiņa grafiks. Tie nav vēl viens atcerēšanās mērķis.

Anki norādījumos par FSRS ieteikts ievērot divus ierobežojumus:

- katram solim jābūt īsākam par vienu dienu un izpildāmam tajā pašā dienā
- atkārtojumu skaitam vienā dienā jābūt nelielam

Garas virknes, piemēram, `1m 10m 1d 3d`, pārnes vecu SM-2 ieradumu uz FSRS. Soļi, kuru intervāls ir diena vai vairāk, aizkavē modeļa vadīto plānošanu un var radīt mulsinošas norādes uz pogām, piemēram, Hard var rādīt garāku intervālu nekā Good.

Īsa virkne, piemēram, `1m 10m`, ar `10m` atkārtotas apguves soli ir piesardzīgs sākuma variants, ja tas atbilst jūsu mācību reizēm. Vairāk atkārtojumu tajā pašā dienā nav automātiski labāk.

Anki 26.08 ļauj arī atstāt tukšu apguves vai atkārtotas apguves soļu lauku. Kad FSRS ir ieslēgts, tukšs lauks uztic attiecīgo īstermiņa plānošanu FSRS. Tā ir eksperimentāla iespēja, un Again intervāls var būt viena diena vai ilgāks. Saglabājiet īsus manuālus soļus, ja vēlaties paredzamu atkārtojumu tajā pašā dienā; iztukšojiet lauku tikai tad, ja apzināti piekrītat, ka šo laiku izvēlēsies FSRS.

## Pakāpeniskai pārejai atstājiet Reschedule cards on change izslēgtu

Ja **Reschedule cards on change** ir izslēgts — tā ir noklusējuma izvēle —, FSRS ieslēgšana vai vēlamā atcerēšanās līmeņa vai parametru maiņa uzreiz nepārraksta esošos atkārtošanas datumus. Jaunā konfigurācija tiek piemērota turpmākajos kartīšu atkārtojumos, tāpēc rinda mainās pakāpeniski.

Ja šī opcija ir ieslēgta, saglabājot kādu no minētajām FSRS izmaiņām, atkārtošanas datumi tiek pārrēķināti uzreiz. Atkarībā no jaunā mērķa un kartīšu stāvokļiem daudzām kartītēm atkārtošanas termiņš var pienākt vienlaikus. Anki pārplānotajām kartītēm arī pievieno atkārtošanas ierakstus, palielinot kolekcijas apjomu.

Šī opcija ir noderīga tikai tad, ja tiešām vēlaties pārrēķināt jau esošo grafiku. Ilgstoši apgūtai kolekcijai:

1. Izveidojiet jaunu dublējumu un pārliecinieties, ka zināt, kā atsaukt izmaiņas vai atjaunot kolekciju.
2. Palaidiet simulatoru ar iecerētajiem iestatījumiem.
3. Izvēlieties vienu konfigurācijas izmaiņu; neapvienojiet vairākus eksperimentus.
4. Saglabājot izmaiņu, ieslēdziet pārplānošanu tikai tad, ja vēlaties tūlītēju datumu pārrēķinu un varat tikt galā ar rezultātu.

Pārejot no SM-2 ar pārplānošanu, Anki īpaši iesaka izveidot dublējumu. Plašākajā [mācību kartīšu dublēšanas ceļvedī](/blog/how-to-back-up-flashcards/) skaidrots, kāpēc atjaunošanas iespēja ir tikpat svarīga kā pats dublējuma fails.

## Saglabājiet lielu maksimālo intervālu

Anki maksimālā intervāla noklusējuma vērtība ir 100 gadi. Tas izskatās savādi, līdz atceraties, ka tā ir augšējā robeža, nevis solījums, ka katra labi apgūta kartīte pazudīs uz veselu gadsimtu.

Samazinot šo robežu, labi zināmas kartītes jāatkārto ātrāk un slodze pieaug. Sasniedzot ierobežojumu, Hard, Good un Easy var rādīt vienu un to pašu intervālu, jo neviens nedrīkst pārsniegt maksimumu.

Īsāks maksimālais intervāls var būt pamatots, ja eksāmens nosaka konkrētu termiņu, materiāls bieži mainās vai profesionālie noteikumi prasa regulāru atkārtošanu neatkarīgi no prognozētās atmiņas. Saskaņojiet šo robežu ar kalendāru un simulatoru, nevis satraukuma dēļ izvēlieties mazu skaitli. Rakstā [Kā mācīties eksāmenam ar FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) aplūkots šis konkrētais gadījums.

Parastām ilgtermiņa mācībām atstājiet augstu robežu. Vēlamais atcerēšanās līmenis jau nosaka, pie kādas prognozētās atcerēšanās varbūtības jāieplāno atkārtojums.

## Jauno kartīšu pievienošana ir daļa no lēmuma par slodzi

FSRS var sadalīt atkārtojumus laikā; tas nevar padarīt neierobežotu jauno kartīšu pievienošanu panesamu. Katra jauna kartīte rada apguves darbu tagad un atkārtošanas darbu vēlāk.

Ja rinda kļūst pārāk gara, pirms vēlamā atcerēšanās līmeņa pazemināšanas pārbaudiet:

- jauno kartīšu skaitu dienā
- lielus importus vai ģenerētu kartīšu partijas
- maksimālo atkārtojumu limitu, kas pastāvīgi slēpj kartītes, kurām jau pienācis atkārtošanas laiks
- problemātiskas un neskaidras kartītes, kas prasa daudz atkārtotu mēģinājumu
- izlaistas atkārtošanas dienas

Izmantojiet **Additional new cards to simulate**, ja zināt, ka kopa augs. Prognoze, kas balstīta tikai uz pašreizējo kolekciju, neatspoguļos slodzi pēc liela importa.

Ja prognozētā slodze ir pārāk liela, samaziniet jauno kartīšu skaitu un simulējiet vēlreiz. Tā var saglabāt atcerēšanās mērķi, neprasot plānotājam pieļaut biežāku aizmiršanu.

## Anki un Nibomo piedāvā atšķirīgas FSRS vadīklas

Abi produkti izmanto FSRS-6, taču Anki FSRS iestatījumi nav tieši pārnesami uz Nibomo.

| Iespēja | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Vēlamais atcerēšanās līmenis | **Shared Preset** vai **This deck** | Iestatāms katrai darbvietai; noklusējums `0.90` |
| FSRS parametri | **Optimize Current Preset** vai **Optimize All Presets**, izmantojot atkārtošanas vēsturi | Fiksēti oficiālie FSRS-6 noklusējuma svari; v1 lietotājs tos nevar mainīt |
| Apguves soļi | Iestatāmi; FSRS plānošana ar tukšu lauku ir eksperimentāla | Iestatāmi katrai darbvietai; noklusējums `1m 10m` |
| Atkārtotas apguves soļi | Iestatāmi; FSRS plānošana ar tukšu lauku ir eksperimentāla | Iestatāmi katrai darbvietai; noklusējums `10m` |
| Maksimālais intervāls | Noklusējums — 100 gadi | Noklusējums — 36 500 dienas, arī 100 gadi |
| Iestatījumu izmaiņas | Pēc noklusējuma turpmākajiem atkārtojumiem; pēc izvēles var pārplānot esošos | Tikai turpmākajiem atkārtojumiem; esošie datumi netiek pārrēķināti |
| Slodzes rīki | **Help Me Decide (Experimental)** un **FSRS Simulator (Experimental)** | V1 nav līdzvērtīga slodzes simulatora |

Nibomo izmanto standarta Again, Hard, Good un Easy vērtējumus un glabā FSRS atmiņas stāvokli katrai kartītei. Servera, iOS un Android plānotāji ir izstrādāti neatkarīgi, taču to darbība ir saskaņota. Atkārtošanai tīmekļa lietotnē tiek izmantots servera plānotājs, nevis ceturtā realizācija.

Šīs robežas un noklusējuma vērtības ir dokumentētas publiskajā [Nibomo FSRS plānošanas specifikācijā](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Kompromiss ir skaidrs: Nibomo piedāvā praktisku FSRS-6 konfigurāciju darbvietas līmenī, savukārt Anki piedāvā detalizētāku iestatījumu tvērumu, individuālu pielāgošanu un simulāciju. Ja šīs vadīklas ir būtiskas, Anki ir piemērotāka izvēle.

## Drošāka darbību secība ilgstoši apgūtai kolekcijai

Ja jums jau ir vairāku mēnešu vai gadu atkārtošanas vēsture, rīkojieties šādā secībā:

1. **Sakārtojiet vērtējumu lietošanu.** Again ir neveiksme; Hard — pareiza atbilde ar grūtībām.
2. **Optimizējiet pašreizējo iestatījumu komplektu.** Pielāgojiet to savai vēsturei, nevis rediģējiet vai kopējiet svarus.
3. **Vajadzības gadījumā palaidiet datu kvalitātes pārbaudi.** Nepietiekamu vai nekonsekventu vēsturi uztveriet kā datu problēmu.
4. **Izmantojiet Help Me Decide.** Izvēlieties atcerēšanās līmeņa diapazonu atbilstoši atkārtojumu skaitam, ar ko varat regulāri tikt galā, vai laikam, ko varat tiem atvēlēt.
5. **Palaidiet simulatoru.** Salīdziniet pašreizējos iestatījumus, iecerēto mērķi un mazāku jauno kartīšu skaitu.
6. **Mainiet vienu faktiski izmantotu iestatījumu.** Vispirms pielāgojiet atcerēšanās līmeni vai jauno kartīšu skaitu, tad vērojiet reālo rindu.
7. **Atstājiet soļus īsus.** Izņemiet apguves un atkārtotas apguves soļus ar dienu gariem vai garākiem intervāliem; tukšus laukus izmantojiet tikai kā eksperimentu.
8. **Saglabājiet lielu maksimālo intervālu.** Saīsiniet to tikai konkrēta termiņa vai prasības dēļ.
9. **Atstājiet pārplānošanu izslēgtu.** Ja vajadzīgs tūlītējs pārrēķins, vispirms izveidojiet dublējumu un ieplānojiet darbu ar radušos rindu.

Šī secība pēc iespējas ilgāk saglabā iespēju atgriezties pie kolekcijas iepriekšējā grafika. Tā arī neļauj trim atšķirīgām problēmām — modeļa pielāgošanai, atcerēšanās mērķim un jauna materiāla plūsmai — saplūst vienā iestatījumu mīklā.

## Bieži uzdotie jautājumi par labākajiem FSRS iestatījumiem

### Vai 90% ir labākais FSRS vēlamais atcerēšanās līmenis?

Tas ir drošākais vispārīgais sākuma punkts, jo tā ir Anki noklusējuma vērtība un tā ļauj izvairīties no slodzes līknes stāvākās daļas pie augsta atcerēšanās līmeņa. Labākā vērtība konkrētai kopai ir atkarīga no aizmiršanas sekām un slodzes, ko varat uzturēt. Pirms tās maiņas apskatiet **Help Me Decide (Experimental)**.

### Vai vēlamo atcerēšanās līmeni iestatīt uz 95%?

Tikai pēc papildu atkārtojumu vai minūšu izvērtēšanas. Labi veidotai, svarīgai kartīšu kopai 95% var būt pamatoti; lielai kolekcijai, ko apgūstat brīvajā laikā, tas var radīt nevajadzīgi lielu slodzi. Vienlaikus neieslēdziet esošo kartīšu pārplānošanu, ja vien apzināti nevēlaties tūlītēju datumu pārrēķinu.

### Cik bieži jāoptimizē FSRS parametri?

Reizi mēnesī jau ir pietiekami bieži, un Anki 26.08 norādījumos pašā lietotnē teikts, ka pietiek ar reizi dažos mēnešos. Optimizējiet pēc ievērojama jaunas vēstures apjoma uzkrāšanās, nevis katru dienu vai nedēļu pēc grafika.

### Vai FSRS apguves soļiem jābūt tukšiem?

Tukši apguves vai atkārtotas apguves soļu lauki ļauj Anki 26.08 uzticēt attiecīgo īstermiņa grafiku FSRS. Šī iespēja ir eksperimentāla, un Again var tikt ieplānots pēc dienas vai vēlāk. Neliels skaits soļu tajā pašā dienā joprojām ir piesardzīgākā izvēle.

### Vai FSRS iestatījumu maiņa pārplāno esošās Anki kartītes?

Pēc noklusējuma — nē. Ja **Reschedule cards on change** ir izslēgts, jaunie iestatījumi ietekmē turpmākos atkārtojumus, uzreiz nepārrēķinot rindu. Ieslēdzot šo opciju, datumi mainās un daudzām kartītēm var pienākt atkārtošanas termiņš, tāpēc vispirms izveidojiet dublējumu.

### Vai CMRR joprojām ir Anki sastāvdaļa?

Nē. Anki izņēma Compute Minimum Recommended Retention 25.07 versijā. Anki 26.08 izmantojiet **Help Me Decide (Experimental)** un **FSRS Simulator (Experimental)**, lai salīdzinātu atcerēšanās līmeni ar aplēsto slodzi.

### Vai Nibomo izmanto tādus pašus iestatījumus kā Anki?

Tas izmanto FSRS-6 un ļauj katrai darbvietai iestatīt vēlamo atcerēšanās līmeni, apguves soļus, atkārtotas apguves soļus, maksimālo intervālu un intervālu nejaušo izkliedi (fuzz). Tas nepārņem pilnu Anki iestatījumu modeli: v1 svari ir fiksēti, izmaiņas attiecas tikai uz turpmākajiem atkārtojumiem, un nav individuālas parametru optimizācijas vai slodzes simulatora.

## Vispirms nosakiet slodzi, pēc tam procentu

Labi FSRS iestatījumi liek atkārtojumu rindai kalpot reālam mācību plānam. Sāciet ar 90%, aplēsiet darbu, kontrolējiet jauno kartīšu skaitu un paaugstiniet atcerēšanās mērķi tikai tad, ja labāka atcerēšanās ir papildu atkārtojumu vērta. Atstājiet soļus īsus, maksimālo intervālu lielu un vērtējiet atbildes godīgi.

Pēc tam aizveriet iestatījumu ekrānu. Plānotājam regulāri atkārtojumi ir vajadzīgi vairāk nekā vēl viens vakars, kas pavadīts tā regulēšanā.
