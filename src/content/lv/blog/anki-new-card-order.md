---
title: "Jauno kartīšu secība Anki — atlase, kārtošana un rindas pārbaude"
description: "Sešu kartīšu piemērs parāda, kā Anki atlasa un kārto jaunās kartītes. Pārbaudi apakškavu limitus, kartīšu vietas rindā un mācībām izvēlēto kavu."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "Anki jauno kartīšu secība"
  - "Anki jauno kartīšu atlases secība"
  - "Anki jauno kartīšu kārtošanas secība"
  - "Anki atlase augošā pozīciju secībā"
  - "Anki kartītes parādās nepareizā secībā"
---

Anki kartīte ar 10. pozīciju jauno kartīšu rindā var parādīties pēc kartītes ar 60. pozīciju. Ja mācies no virskavas un izmanto atlasi **Pēc kavas** (**Deck**) un kārtošanu **Atlases secībā** (**Order gathered**), Anki var pabeigt atlasi agrākā apakškavā, pirms nonāk līdz tai, kurā ir kartīte ar 10. pozīciju. Kārtojot kartīšu pārlūka tabulu pēc izveides datuma, mācību rinda nemainās.

Anki nosaka jauno kartīšu secību divos posmos. **Atlasē** tas izvēlas kartītes, kas iekļaujas šodienas limitos. **Kārtošanā** tas nosaka, kādā secībā atlasītās kartītes parādīsies. Vispirms noskaidro, vai atšķiras pašas atlasītās kartītes vai tikai to secība.

Šie norādījumi attiecas uz parastajām kavām Anki datora versijā. Sešu kartīšu piemērs ir šim rakstam veidots aprēķins uz papīra, kas 2026. gada 6. oktobrī pārbaudīts pēc tobrīd aktuālās rokasgrāmatas un izlaistās versijas koda. Praktisks tests lietotnē netika veikts. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![Vīrietis tur ceturto vinila plati virs tukša statīva nodalījuma blakus trim platēm. Aiz viņa stāv divas kastes ar albumiem, kas palikuši ārpus atlases.](/blog/anki-new-card-order.png)

## Izvēlies sev vajadzīgo kartīšu secību

Atver **Opcijas** (**Options**) tai kavai, kuru izvēlies, lai sāktu mācīties, un atrodi sadaļu **Rādīšanas secība** (**Display Order**). Ja mācies no virskavas, tās rādīšanas secības iestatījumi attiecas uz visu sesiju, arī uz kartītēm no apakškavām.

| Vēlamais rezultāts | Jauno kartīšu atlases secība (New Card Gather Order) | Jauno kartīšu kārtošanas secība (New Card Sort Order) |
| --- | --- | --- |
| Rādīt kartītes augošā pozīciju secībā visā izvēlētajā kavā un tās apakškavās | Augošā pozīciju secībā (Ascending position) | Atlases secībā |
| Vispirms ņemt vērā apakškavu alfabētisko secību, pēc tam kartīšu pozīcijas katrā apakškavā | Pēc kavas | Atlases secībā |
| Paturēt tās pašas atlasītās kartītes un sajaukt to rādīšanas secību | Tevis izvēlētais atlases iestatījums | Nejaušā secībā (Random) |

Šīs kombinācijas atbilst Anki rokasgrāmatā aprakstītajai darbībai. **Augošā pozīciju secībā** izmanto saglabātās jauno kartīšu pozīcijas. To secība var atšķirties no izveides datumu secības, jo pozīcijas ietekmē gan kartīšu ievietošanas secība, gan manuāla pozīciju maiņa. [Atlase](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) un [kārtošana](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) Anki rokasgrāmatā angļu valodā.

Pirms kaut ko maini, pārbaudi, kura iestatījumu kopa ir piešķirta kavai un kuras citas kavas to izmanto. Rādīšanas secība ir daļa no šīs kopas. Dienas limitiem var norādīt atsevišķu vērtību ar **Šai kavai** (**This deck**) vai **Tikai šodien** (**Today only**). Rādīšanas secības iestatījumi ir kopīgi visām kavām, kurām piešķirta attiecīgā kopa. Ja vēlies mainīt secību tikai vienai kavai, vispirms atdali tās iestatījumu kopu. [Ceļvedis par iestatījumu kopu vienai kavai angļu valodā](/blog/anki-deck-options-presets/)

## Nosaki, kuras četras kartītes iekļūs rindā

Iedomājies parastu virskavu `OrderLab` ar divām apakškavām un tikai šīm sešām kartītēm. Katra nāk no atsevišķas **Pamata** (**Basic**) tipa piezīmes, kurai ir viena kartīte. Tāpēc visām sešām ir vienāds kartītes tipa numurs, un nevienai nav citas kartītes no tās pašas piezīmes.

| Kartīte | Kava | Saglabātā jaunās kartītes pozīcija |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Pieņemsim, ka visas sešas kartītes ir jaunas. Neviena nav paslēpta, apturēta vai ievietota filtrētā kavā. Sākumā nav citu kartīšu, apguves posma atkārtojumu vai kartīšu, kas gaida kārtējo atkārtošanu. Šodien vēl neesi mācījies. Virs `OrderLab` nav citas kavas, un spēkā esošie atkārtošanas limiti ļauj atlasīt visas sešas jaunās kartītes.

Mācībām izvēlies **OrderLab**. Tās spēkā esošais jauno kartīšu limits ir **4**, `01 First` limits ir **3**, un `02 Second` limits ir **2**. Pagaidu izņēmumu nav. Abos variantos kārtošanai izmanto **Atlases secībā**. Katru variantu izrēķini uz papīra no viena un tā paša sākumstāvokļa, starp variantiem neatbildot uz kartītēm.

Ar atlasi **Pēc kavas** Anki rīkojas šādi.

1. Alfabētiskā secībā vispirms nonāk pie `01 First`, pēc tam pie `02 Second`.
2. No `01 First` atlasa **A, B, C** pozīciju secībā. Virskavas limitā atliek viena vieta.
3. No `02 Second` atlasa **D** un sasniedz virskavas četru kartīšu limitu.

Jaunajām kartītēm pirmoreiz jāparādās secībā **A → B → C → D**. E un F atlasē neiekļūst.

Ar atlasi **Augošā pozīciju secībā** Anki izskata abu apakškavu kartītes secībā **D → A → E → B → F → C**. Pirmās četras iekļaujas visos limitos. Divas nāk no `02 Second`, divas no `01 First`, un kopā ir četras. Tur atlase apstājas.

Paredzamā secība ir **D → A → E → B**. C un F paliek ārpus atlases. Anki 26.09.3 piemēro kavas un virskavas limitus brīdī, kad pievieno kartītes atlasei. [Atlases kods](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

`02 Second` divu kartīšu limits nosaka maksimālo skaitu. Atlasot **Pēc kavas**, no `02 Second` iekļūst tikai viena kartīte, jo `01 First` jau aizņem trīs no četrām vietām. Augošā pozīciju secībā šajā piemērā sanāk pa divām no katras apakškavas tieši šo pozīciju dēļ. Citā kolekcijā sadalījums var būt nevienāds.

## Iekļauj visas sešas, lai nošķirtu atlasi no secības

Otrajā aprēķinā uz papīra atvēli vietu visām sešām kartītēm. Virskavai paredzi limitu **6**, `01 First` limitu **3** un `02 Second` limitu **3**. Kārtošanai paturi **Atlases secībā**.

| Atlases iestatījums | Limiti (virskava / 01 First / 02 Second) | Paredzamā pirmās parādīšanās secība |
| --- | --- | --- |
| Pēc kavas | 6 / 3 / 3 | A → B → C → D → E → F |
| Augošā pozīciju secībā | 6 / 3 / 3 | D → A → E → B → F → C |

Abos variantos Anki atlasa visas sešas kartītes. Atšķiras tikai to secība. Ja līdz sešām kartītēm palielinātu tikai virskavas limitu un `02 Second` joprojām būtu divu kartīšu limits, atlasē iekļūtu piecas. F paliktu ārpus tās. Lielākie limiti paredzēti tikai šim aprēķinam.

## Kārtošana nevar pievienot atlasē izlaistu kartīti

Atgriezies pie sākotnējiem limitiem **4 / 3 / 2** un maini tikai iestatījumu **Jauno kartīšu kārtošanas secība**, izvēloties **Nejaušā secībā**.

| Atlases iestatījums | Kartītes, kuru secību var sajaukt | Kartītes, ko kārtošana nevar pievienot |
| --- | --- | --- |
| Pēc kavas | A, B, C, D | E, F |
| Augošā pozīciju secībā | D, A, E, B | C, F |

Anki sajauc rādīšanas secību, un katrā variantā atlasītas paliek tās pašas kartītes. No tabulas nevar paredzēt konkrētu nejaušo secību. Anki 26.09.3 pārkārto jau atlasītās kartītes. [Kārtošanas kods](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Arī opcija **Pēc kartītes tipa, pēc tam atlases secībā** (**Card type, then order gathered**) kārto jau atlasītās kartītes. Visām sešām kartītēm no Pamata tipa piezīmēm ir vienāds kartītes tipa numurs, tāpēc šajā piemērā tā saglabā atlases secību.

Atsevišķā piemērā pieņemsim, ka no piezīmēm ar vairākām veidnēm jau atlasītas četras kartītes secībā **W (2. tips), X (1. tips), Y (2. tips), Z (1. tips)**. Kārtojot pēc tipa, sanāk **X → Z → W → Y**. Vispirms parādās 1. tipa kartītes, un katrā tipā saglabājas atlases secība. Šis piemērs sākas pēc atlases, tāpēc tas neparāda, kuras kartītes no vienas piezīmes iekļūtu atlasē ar taviem paslēpšanas iestatījumiem.

Tipa numurs norāda kartītes veidnes vietu attiecīgajā piezīmes tipā. Tas, vai kartīte pārbauda atpazīšanu vai spēju pašam atsaukt atbildi atmiņā, ir atkarīgs no veidnes. Apskati pašus jautājumus, pirms paļaujies uz to, ka kārtošana pēc tipa vispirms parādīs visus jautājumus pamata virzienā.

## Pirms pozīciju maiņas pārbaudi tās kartīšu pārlūkā

Atver kartīšu pārlūku ar **Pārlūkot** (**Browse**), izvēlies režīmu **Kartītes** (**Cards**) un meklē izvēlētajā kavā un tās apakškavās. Piemērā izmanto šo vaicājumu.

```text
deck:OrderLab is:new
```

Kolonnu virsrakstu izvēlnē ieslēdz kolonnas **Jautājums** (**Question**), **Kartīte** (**Card**), **Kava** (**Deck**), **Termiņš** (**Due**) un **Izveidota** (**Created**). Jaunai kartītei kolonnā **Termiņš** redzama tās pozīcija rindā, bet kolonnā **Izveidota** redzams, kad izveidota tās piezīme. **Kārtošanas lauks** (**Sort Field**) rāda tā piezīmes lauka saturu, kas norādīts kārtošanai. Kārtojot pēc kādas pārlūka kolonnas, mainās tikai tabulā redzamā secība. Saglabātās pozīcijas un mācību atlases iestatījums paliek spēkā. [Anki pārlūka kolonnu apraksts angļu valodā](https://docs.ankiweb.net/manual/browsing#columns)

Vaicājuma `is:new` rezultātos var būt arī apturētas vai paslēptas jaunās kartītes. To vērtības kolonnā **Termiņš** redzamas iekavās. Šaurāks vaicājums izslēdz gan tās, gan kartītes, kas tobrīd atrodas filtrētās kavās.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Ja kavas nosaukumā ir atstarpes, liec to pēdiņās, piemēram, `deck:"My Deck"`. Vaicājumu sintakse aprakstīta Anki rokasgrāmatā angļu valodā. [Meklēšana pēc kartītes stāvokļa](https://docs.ankiweb.net/manual/searching#card-state) un [meklēšana pēc kavas](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes)

Arī šaurākais vaicājums vēl nepasaka, kas iekļūs šodienas rindā. Limiti un vienas piezīmes kartīšu automātiska paslēpšana var samazināt atlasāmo kartīšu skaitu. [Ceļvedis par kartīšu paslēpšanu un apturēšanu angļu valodā](/blog/anki-bury-vs-suspend/)

Ja pozīcijas jau atbilst vēlamajai secībai, atstāj tās, kā ir. Ja tās tiešām jāmaina, pieraksti līdzšinējās pozīcijas, rūpīgi atlasi nelielu jauno kartīšu grupu un izmanto **Kartītes → Mainīt pozīciju** (**Cards → Reposition**). Pirms apstiprināšanas pārbaudi dialoglodziņa iestatījumus. Opcija **Nobīdīt esošo kartīšu pozīcijas** (**Shift position of existing cards**) var mainīt arī ārpus atlases esošu kartīšu pozīcijas, ja tām ir lielāki pozīciju numuri. Ja nobīdi neizmanto, jaunās pozīcijas var sakrist ar esošajām. Tad ar pozīciju vien nepietiek, lai noteiktu šo kartīšu rādīšanas secību. [Anki rokasgrāmatas sadaļa par pozīcijas maiņu angļu valodā](https://docs.ankiweb.net/manual/browsing#cards)

Lai mainītu atlases vai kārtošanas iestatījumus, apguves un atkārtošanas vēsture nav jādzēš. Pārbaudē pieturies pie jauno kartīšu pozīcijām un rādīšanas secības.

## Pārbaudi, no kuras kavas mācies un cik vietu šodien vēl atlicis

Ja sākotnējā piemērā mācībām izvēlies tieši `OrderLab::02 Second`, Anki izskata tikai D, E un F. Ar divu kartīšu limitu, atlasi **Augošā pozīciju secībā** un kārtošanu **Atlases secībā** sagaidi **D → E**. Virskavas četru kartīšu limits vēl nav izmantots, tāpēc abām kartītēm pietiek vietas arī tad, ja piemēro augstāka līmeņa kavu limitus. Ja izvēlies pašu virskavu ar atlasi **Pēc kavas** un limitiem **4 / 3 / 2**, secība ir **A → B → C → D**.

Sesiju, kuru sāc no `OrderLab`, vada `OrderLab` rādīšanas secības iestatījumi arī tad, ja maini pašas `02 Second` iestatījumus. Mācībām izvēlētā kava nosaka rādīšanas secību un kopējo limitu, un vienlaikus darbojas attiecīgie apakškavu limiti. **Limitus piemērot no augšas** (**Limits start from top**) nosaka, vai augstāka līmeņa kavu limiti ir spēkā arī tad, ja mācies tieši no apakškavas. Anki rokasgrāmatā angļu valodā aprakstīti [apakškavu noteikumi](https://docs.ankiweb.net/manual/deck-options#subdecks) un [augstāka līmeņa kavu limitu iestatījums](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Pārbaudi arī atkārtošanas limitus. Pēc noklusējuma atkārtošanas limits ierobežo arī jauno kartīšu skaitu. To var mainīt ar iestatījumu **Jaunajām kartītēm nepiemērot atkārtošanas limitu** (**New cards ignore review limit**). Gan šis iestatījums, gan **Limitus piemērot no augšas** attiecas uz visu kolekciju. Pirms pēc jauno kartīšu limita spried, cik vēl šodien varēsi apgūt, pieraksti, kā iestatīti abi slēdži. [Dienas limitu saskarnes kods](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Pārlūkā izmanto **Priekšskatījumu** (**Preview**), lai apskatītu jautājumus, uz tiem neatbildot. Nākamajā ierastajā mācību sesijā aizpildi šo tabulu.

| Ko pierakstīt | Ko tas palīdz noskaidrot |
| --- | --- |
| Mācībām izvēlētā kava, tās iestatījumu kopa, atlases iestatījums un kārtošanas iestatījums | Kuri rādīšanas secības iestatījumi nosaka sesijas secību? |
| Paredzamās kartītes un to saglabātās pozīcijas | Vai atšķiras atlasītās kartītes vai to secība? |
| Jauno kartīšu un atkārtošanas limiti, izņēmumi šai kavai vai šodienai un šodien jau apgūtais un atkārtotais | Cik vietu šodien vēl atlicis? |
| Augstāka līmeņa kavu limiti un abi visas kolekcijas limitu slēdži | Kādi papildu ierobežojumi ir spēkā? |
| Paslēptās un apturētās kartītes, kartītes filtrētās kavās un citas kartītes no tām pašām piezīmēm | Kuras šķietami pieejamās kartītes var palikt ārpus atlases? |
| Secība, kādā kartītes parādās pirmoreiz, atsevišķi no atkārtotas parādīšanās apguves posmā | Vai jauno kartīšu secība sakrīt ar paredzēto? |

Kad atbildi uz jaunu kartīti, tās apguves atkārtojumi var iestarpināties sesijas gaitā. **Jauno un atkārtojamo kartīšu secība** (**New/Review Order**) nosaka, vai jaunās kartītes parādās pirms atkārtojamajām, pēc tām vai pamīšus. Jauno kartīšu atlasi un kārtošanu joprojām nosaka attiecīgie iestatījumi. Anki 26.09.3 apvieno šīs kartīšu grupas pēc jauno kartīšu sakārtošanas. [Rindas veidošanas kods](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Pārbaudi vari beigt, kad paredzētais kartīšu kopums un to pirmās parādīšanās secība sakrīt ar sesijā redzēto. Ja vēl ir atšķirības, saglabā pozīcijas, iestatījumus, izvēlēto kavu, Anki versiju un novēroto secību, lai varētu precīzāk atrast cēloni. Pieraksti arī papildinājumus, kas varētu ietekmēt rezultātu. Ja vēlies papildus pavingrināties kādā tēmā, izmanto atsevišķo [ceļvedi par vingrināšanos filtrētā kavā angļu valodā](/blog/anki-filtered-decks-without-rescheduling/).
