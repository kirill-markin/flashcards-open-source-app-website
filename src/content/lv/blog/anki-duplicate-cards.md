---
title: "Kā Anki atrast kartīšu dublikātus un izvēlēties, kuru kopiju paturēt"
description: "Atrodiet Anki kartīšu dublikātus, salīdziniet piezīmes un izvēlieties, kuru kopiju paturēt. Neliels piemērs palīdz pārbaudīt, vai saglabājusies atkārtojumu vēsture."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "Anki kartīšu dublikāti"
  - "kā Anki atrast dublikātus"
  - "dzēst Anki piezīmju dublikātus"
  - "Anki piezīmju dublikāti"
  - "Anki atkārtojumu vēsture"
---

Jautājums ir pazīstams no iepriekšējiem atkārtojumiem, bet Anki to rāda kā jaunu. Iespējams, importējot radusies vēl viena kopija. Varbūt redzat otru kartīti, ko Anki izveidojis no tās pašas piezīmes. Izdzēšot vienu rindu kartīšu pārlūkā, varat zaudēt visas attiecīgās piezīmes kartītes, arī to, kuru gribējāt paturēt.

Pirms dzēšat **Anki kartīšu dublikātus**, noskaidrojiet, kāpēc jautājums atkārtojas. Ja kartītes izveidotas no dažādām piezīmēm, meklējiet iespējamos dublikātus ar **Notes → Find Duplicates**. Salīdziniet piezīmju saturu un katras kartītes vēsturi, tad katrā grupā izvēlieties, kuru kopiju paturēt. Ja sakrīt viens lauks, pārbaudiet arī pārējos, pirms kaut ko dzēšat.

Norādījumi attiecas uz Anki datora lietotni un balstās uz dokumentāciju un publicētās versijas pirmkodu, kas pārbaudīti 2026. gada 4. oktobrī. Izvēļņu un pogu nosaukumi un dublikātu birkas piemērs atbilst saskarnei angļu valodā. Turpmākajā teorētiskajā piemērā izmantoti izdomāti dati, lai parādītu, kādu rezultātu sagaidīt pēc dzēšanas.

![Šaha kluba dalībnieks uz koka šaha galdiņa salīdzina lieku gaišu torni ar diviem nodilušiem torņiem](/blog/anki-duplicate-cards.png)

## Vispirms noskaidrojiet, kas atkārtojas

Piezīmē glabājas tādi lauki kā **Front** un **Back**. Anki pēc veidnēm no tiem izveido kartītes. No vienas vārdu krājuma piezīmes var izveidot kartīti vārda atpazīšanai un kartīti, kurā vārds pašam jāatsauc atmiņā. Katrai ir savs atkārtošanas grafiks, bet abas pieder vienai piezīmei. [Anki skaidrojums par piezīmēm un laukiem](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Atveriet **Browse**, izvēlieties režīmu **Cards** un katrai aizdomīgajai rindai atveriet **Cards → Info**. Salīdziniet piezīmju identifikatorus (**Note ID**). Ja tie sakrīt, kartītes pieder vienai piezīmei. Ja tie atšķiras, katra kartīte nāk no citas piezīmes. Vaicājumā `nid:123` aizstājiet `123` ar īsto identifikatoru, lai apskatītu piezīmes kartītes visā kolekcijā bez komplekta filtra. [Anki identifikatori un meklēšanas sintakse](https://docs.ankiweb.net/searching.html#object-ids)

| Ko redzat | Iespējamais skaidrojums | Nākamais solis |
| --- | --- | --- |
| Viena piezīme, jautājumi pretējos virzienos | Abas kartītes izveidotas ar nolūku | Pārbaudiet, vai abi jautājumi ir noderīgi |
| Viena piezīme, kartītēs redzams viens un tas pats jautājums | Iespējams, dublējas kartīšu veidnes | Salīdziniet veidnes un kartīšu priekšskatījumus |
| Dažādas piezīmes, jautājumi šķiet vienādi | Iespējami piezīmju dublikāti | Salīdziniet piezīmes pilnībā, pirms izvēlaties, kuru paturēt |

Ja jautājumi abos virzienos veidoti ar nolūku, par to darbību lasiet [ceļvedī par apgrieztajām kartītēm (angļu valodā)](/blog/anki-reverse-cards/). Ja vēlaties pārtraukt atkārtot tikai vienu, [apturiet attiecīgo kartīti (ceļvedis angļu valodā)](/blog/anki-bury-vs-suspend/). Apturēta kartīte paliek kolekcijā.

Ja veidnes ir vienādas, rīkojieties pēc [Anki norādījumiem lieko kopiju cēloņa noteikšanai](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Veidnes noņemšana skar visas attiecīgā tipa piezīmes, arī citos komplektos. Kolekcijas struktūru labojiet atsevišķi no dublikātu dzēšanas.

## Izvēlieties, kur meklēt piezīmju dublikātus

Atveriet **Notes → Find Duplicates** un izvēlieties salīdzināmo lauku, piemēram, **Front**. Pēc noklusējuma Anki meklē visos piezīmju tipos, kuros ir šāds lauks. Ar **Optional filter** ierobežojiet meklēšanu un noklikšķiniet uz **Search**. [Funkcijas Find Duplicates iestatījumi Anki rokasgrāmatā](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Lai meklētu komplektā ar nosaukumu `Cleanup practice`, ievadiet šo vaicājumu.

```text
deck:"Cleanup practice"
```

Meklēšanā tiek iekļauti arī apakškomplekti. Ja kopijas var būt dažādos komplektos, noņemiet filtru, lai pārmeklētu visu kolekciju. Arī tad, ja vienā komplektā dublikātu nav, kopija var būt citur. [Anki komplektu meklēšanas sintakse](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Noklikšķiniet uz rezultātu grupas, lai apskatītu tās piezīmes. **Tag Duplicates** pievieno birku `duplicate` visām piezīmēm, kurām lauka saturs sakrīt, arī tai, kuru vēlēsieties paturēt. [Publicētās versijas pirmkodā](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py) redzams, ka birku saņem katra piezīme grupā. **Nedzēsiet visus `tag:duplicate` rezultātus.** Izmantojiet birku, lai vienuviet apskatītu iespējamās kopijas, un pa vienai atlasiet liekās piezīmes.

Anki salīdzina izvēlētā lauka saturu. Vai abos jautājumos prasīts viens un tas pats fakts, jāizvērtē pašiem. Citādi formulēti jautājumi var būt jāmeklē manuāli, savukārt vienādi jautājumi var attiekties uz dažādām valodām vai kursiem.

## Trīs piemēri, kā izlemt, ko paturēt

Iedomājieties sešas piezīmes komplektā `Cleanup practice` bez apakškomplektiem. No A un B piezīmēm Anki izveido pa divām kartītēm, izmantojot nemainītas **Basic (and reversed card)** veidnes. No katras C–F piezīmes ar **Basic** izveido pa vienai. Visas astoņas kartītes ir šajā komplektā. Burti apzīmē tikai šī piemēra piezīmes un kartītes. Anki piezīmju un kartīšu identifikatori ir skaitļi.

| Piezīmes | Front → Back | Izdomāta mācību situācija | Lēmums |
| --- | --- | --- | --- |
| A un B | `le vélo` → `bicycle` | A piezīmes vārda atpazīšanas kartīte atkārtota 12 reizes, kartīte vārda atcerēšanai 3 reizes. Abas B kartītes ir jaunas. | Paturiet A. Vispirms pārbaudiet, vai B var dzēst. |
| C un D | `Chemical symbol for silver?` → `Ag` | C kartīte atkārtota 20 reizes, D kartīte 6 reizes | Salīdziniet abu kartīšu vēsturi un izvēlieties, kuru turpināt atkārtot |
| E un F | E — `bank` → `financial institution`, F — `bank` → `side of a river` | Divas atšķirīgas vārda nozīmes | Paturiet abas piezīmes un papildiniet jautājumus ar kontekstu |

Meklējot pēc lauka **Front**, Anki var sagrupēt visus trīs pārus. Tikai pirmajā pārī izvēle ir vienkārša. Pirms izlemjat, ka B ir lieka, salīdziniet **visus laukus**, multividi, birkas, piezīmju tipus un to, kā izskatās kartītes abos virzienos. Varbūt piezīmē B ir izrunas ieraksts, kura nav piezīmē A, vai arī no B izveidots jautājums, kura A kartītēs nav.

Ja atrastais saturs noder tam pašam mācību mērķim, iekopējiet to piezīmē, kuru paturēsiet, un apskatiet kartīšu priekšskatījumu. Saglabājiet arī noderīgās sākotnējās birkas. Ja maināt pārbaudāmo faktu, izveidojiet jaunu jautājumu ar atsevišķu atkārtojumu vēsturi.

C un D gadījumā atkārtojumu skaits ir tikai viena norāde. Abām kartītēm apskatiet atkārtojumu datumus un vērtējumus, pašreizējo intervālu un informāciju par nākamo atkārtojumu. Ja kartīte atkārtota biežāk, iespējams, tā vienkārši biežāk bijusi jāapgūst no jauna. Pārbaudiet, vai jautājums un atbilde ir noderīgi, un izlemiet, kuras kartītes vēsturi gribat saglabāt turpmākajiem atkārtojumiem. Ja atbildes nesaskan, vispirms pārbaudiet mācību avotu. Atkārtojumu skaits nepasaka, kura atbilde ir pareiza.

Ja paturat C un izdzēšat D, **C saglabā savu līdzšinējo mācību progresu un atkārtojumu vēsturi**. Anki rāda katras kartītes vēsturi atsevišķi skatā [Card Info](https://docs.ankiweb.net/stats.html#card-info). Izdzēsto piezīmju atkārtojumu ieraksti paliek visas kolekcijas statistikā un pazūd no atsevišķu komplektu statistikas. Paturamajai kartītei šie ieraksti netiek pievienoti. [Anki skaidrojums par izdzēsto piezīmju statistiku](https://docs.ankiweb.net/stats.html#more)

Ja vēl šaubāties, atlieciet dzēšanu. Pierakstiet, kas jāpārbauda, un, ja vajag, uz pārbaudes laiku apturiet nevēlamās kartītes.

## Izdzēsiet vienu pārbaudītu kopiju un salīdziniet rezultātu

Pirms ķeraties pie savām kartītēm, sinhronizējiet Anki pārējās ierīcēs. Tad sinhronizējiet Anki datorā, lai arī datora kolekcijā nonāktu jaunākās izmaiņas. [Anki sinhronizācijas rokasgrāmata](https://docs.ankiweb.net/syncing.html)

Izvēlnē **File → Export** saglabājiet **Anki Collection Package (`.colpkg`)** ar ieslēgtu **Include Media**. Failā ir visi komplekti un to atkārtošanas grafiki, arī atkārtojumu vēsture. Glabājiet failu drošā vietā. To importējot, saglabātā kolekcija aizstāj atvērtā profila pašreizējās kartītes. Abas kolekcijas netiek apvienotas. [Kolekcijas eksportēšanas dokumentācija](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Ja vēlaties izmēģināt dzēšanu, izvēlnē **File → Switch Profile** izveidojiet atsevišķu profilu un tajā importējiet rezerves kopiju. Izmēģinājuma profilu nepievienojiet AnkiWeb. [Katram profilam ir sava kolekcija](https://docs.ankiweb.net/profiles.html). Ja abus profilus piesaista vienam kontam, viena kolekcija var pārrakstīt otru. Par to, ko katrs formāts saglabā un kā darbojas imports, lasiet [APKG un COLPKG ceļvedī (angļu valodā)](/blog/anki-apkg-vs-colpkg/).

Piemērā sauksim A vārda atpazīšanas kartīti par A1 un kartīti, kurā vārds jāatsauc atmiņā, par A2. B1 un B2 ir atbilstošās B kartītes. Sadaļā **Cards → Info** pierakstiet abu A kartīšu īstos identifikatorus (**Card ID**), informāciju par nākamo atkārtojumu, intervālus un viegli atpazīstamus ierakstus vēsturē. Pierakstiet arī B piezīmes identifikatoru. Pirms un pēc dzēšanas veiciet pārbaudi vienā reizē. Pa vidu neatkārtojiet un nepārplānojiet nevienu no abām kopijām.

Lai dzēstu Anki piezīmju dublikātus pa vienam, veiciet šīs darbības.

1. Logā **Browse** aizstājiet pašreizējo vaicājumu ar `nid:` vaicājumu, kurā norādīts īstais B piezīmes identifikators. Režīmā **Cards** pārbaudiet visus rezultātus un priekšskatiet abus jautājuma virzienus. Pārbaudot īstas piezīmes, izlaidiet komplekta filtru, lai redzētu arī tās pašas piezīmes kartītes citos komplektos.
2. Pārslēdzieties uz režīmu **Notes**. Pārliecinieties, ka vienīgais rezultāts ir liekā piezīme B, atlasiet tikai to un izvēlieties **Notes → Delete**. Anki [komanda Delete](https://docs.ankiweb.net/browsing.html#notes) izdzēš atlasīto piezīmi un visas tās kartītes arī tad, ja komandu izsaucat no vienas rindas režīmā **Cards**.
3. Vēlreiz meklējiet pēc B piezīmes identifikatora un pārbaudiet, vai rezultātu vairs nav. Ar `cid:` meklējiet pēc pierakstītajiem A kartīšu identifikatoriem, tos atdalot ar komatu. Abu kartīšu skatā **Info** salīdziniet rādīto ar pierakstīto.
4. Meklējiet ar `deck:"Cleanup practice"` un salīdziniet rezultātu rindu skaitu režīmos **Notes** un **Cards**. Salīdziniet atlikušās piezīmes ar tabulu.

| Ko pārbaudīt | Pirms dzēšanas | Gaidāmais rezultāts, dzēšot tikai B |
| --- | --- | --- |
| Viss piemēra komplekts | 6 piezīmes un 8 kartītes | 5 piezīmes un 6 kartītes |
| Piezīmju pāris par velosipēdu | A1, A2, B1, B2 | Tikai A1 un A2 |
| A kartīšu identifikatori, informācija par nākamo atkārtojumu, intervāli un vēsture | Jūsu pierakstītās vērtības | Tās pašas kartītes, grafiks un vēstures ieraksti |
| Meklēšana pēc B piezīmes identifikatora | Abas B kartītes | Nav rezultātu |
| Piezīmes par sudrabu un vārda «bank» nozīmēm | C, D, E, F | Visas tās pašas četras piezīmes |

Šajā piemērā vienas piezīmes dzēšana noņem divas kartītes. Ja B vietā izdzēstu A, skaits sakristu, bet jūs zaudētu kartītes, kuras jau esat mācījušies un gribējāt paturēt. Pārbaudiet gan skaitu, gan identifikatorus. Tīrīšanas laikā neatiestatiet un nepārplānojiet paturamās kartītes.

Visas kolekcijas atkārtojumu diagrammā joprojām var parādīties dzēsto kartīšu atkārtojumi. Lai pārliecinātos, ka paturētās kartītes progress ir saglabājies, pārbaudiet tās identifikatoru un informāciju skatā **Info**.

Kad pārbaudē viss sakrīt ar pierakstīto, pārejiet pie nākamās grupas un izvēlieties, kuru kopiju tajā paturēt. Ja dzēšanu izmēģinājāt atsevišķā profilā, vispirms atkārtojiet pārbaudītās darbības īstajā profilā. Kad kolekcija pārbaudīta, sinhronizējiet Anki datorā un tad pārējās ierīcēs, pirms tur atsākat mācīties. Ja kopijas radušās importējot, pirms nākamā importa izlasiet [ceļvedi par esošo piezīmju atjaunināšanu no CSV (angļu valodā)](/blog/anki-csv-update-existing-notes/). Ja dublējāt piezīmes, lai vienu faktu iekļautu vairākās tēmās, [izmantojiet birkas (ceļvedis angļu valodā)](/blog/anki-tags-vs-decks/). Tad varēsiet vienu piezīmi izmantot vairākās tēmās un saglabāt vienu atkārtojumu vēsturi.
