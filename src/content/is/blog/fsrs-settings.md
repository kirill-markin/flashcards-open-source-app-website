---
title: "Bestu FSRS-stillingarnar í Anki 2026: minnishlutfall, námsþrep og upprifjunarálag"
description: "Veldu öruggar FSRS-stillingar fyrir æskilegt minnishlutfall, námsþrep, bestun, enduráætlun og vinnuálag í Anki 26.08 með FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS stillingar"
  - "bestu FSRS stillingarnar"
  - "Anki FSRS stillingar"
  - "æskilegt minnishlutfall FSRS"
  - "FSRS námsþrep"
  - "FSRS hermir"
  - "besta FSRS stika"
  - "FSRS-6"
---

Að hækka æskilegt minnishlutfall í Anki úr 90% í 95% hljómar eins og lítil breyting. Vinnan eykst þó ekki bara um fimm prósent. FSRS þarf að stytta bilið milli upprifjana þegar markmiðið hækkar, og í safni sem hefur verið lengi í notkun getur upprifjunarröðin orðið miklu þyngri. Ef þú virkjar líka **Reschedule cards on change** getur hluti þeirrar vinnu fallið til strax.

Bestu FSRS-stillingarnar fást því ekki með því að afrita röð stika. Þær byggjast á röð ákvarðana: ákveða vinnuálag sem þú ræður við til lengdar, velja minnismarkmið innan þeirra marka, laga líkanið að eigin sögu og láta núverandi upprifjunardagsetningar standa nema þú viljir sérstaklega endurreikna þær.

Heitin og virknin hér að neðan miðast við [Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) og FSRS-6-stillingarnar þar. Ef þú þarft fyrst að skilja líkanið skaltu lesa [Hvað er FSRS?](/blog/what-is-fsrs/). Ef þú ert enn að velja tímasetningaralgrím skaltu byrja á [FSRS eða SM-2](/blog/fsrs-vs-sm-2/).

> **Upplýsingar um hagsmunatengsl:** Ég heiti Kirill Markin og þróa [Nibomo](/is/features/). Anki býður upp á persónulega aðlögun stika og tilraunaherma fyrir vinnuálag sem Nibomo býður ekki upp á eins og er. Sá munur kemur skýrt fram í samanburðinum undir lokin.

**Staðreyndir yfirfarnar:** 8. september 2026.

![Starfsmaður við skipastiga prófar vatnsrennsli í líkani áður en hann breytir skipastiganum sjálfum](/blog/fsrs-settings-v2.png)

## Stutta svarið: byrjaðu hér

Flestir Anki-notendur geta byrjað á þessum stillingum með góðu móti. Þær henta þó ekki öllum:

| Stilling eða venja | Góður upphafspunktur | Ástæða |
| --- | --- | --- |
| Æskilegt minnishlutfall | `0.90` | Þetta er sjálfgefið í Anki og vegur saman upprifjunarálag og líkur á að muna. |
| FSRS-stikar | Notaðu **Optimize Current Preset**; ekki líma inn eða breyta vægjum handvirkt | Bestunin lagar líkanið að upprifjunarsögunni þinni. |
| Tíðni bestunar | Í mesta lagi mánaðarlega; á nokkurra mánaða fresti nægir yfirleitt | Anki mælir ekki með tíðri bestun. |
| Námsþrep | Hafðu fá þrep sem hægt er að ljúka sama dag | Langar þreparunur seinka því að líkanið taki við tímasetningunum. |
| Endurnámsþrep | Hafðu þau fá og styttri en einn dag | Sömu mörk eiga við þegar þú manst ekki spjald í upprifjun. |
| Enduráætlun við breytingar (Reschedule cards on change) | Slökkt | Nýjar stillingar geta tekið gildi við síðari upprifjanir án þess að endurreikna röð dagsins. |
| Hámarksbil | Haltu sjálfgefnu 100 ára hámarki | Lægra hámark kallar vel lærð spjöld oftar fram. |
| Ný spjöld á dag | Miðaðu við vinnuálag sem þú ræður við til lengdar | Hvert nýtt spjald skapar námsvinnu núna og upprifjanir síðar. |
| Again eða Hard | Again merkir að þú mundir ekki; Hard merkir að þú mundir með erfiðismunum | Rangt mat gefur líkaninu ranga sögu. |

Ef þú ræður við upprifjanirnar og stillingarnar eru þegar nálægt þessu þarf hugsanlega engu að breyta. Að sinna stillingum er ekki það sama og að læra.

## Aðgreindu þrjár ákvarðanir

Fólk blandar oft saman æskilegu minnishlutfalli, FSRS-stikum og daglegu vinnuálagi. Þetta stýrir ólíkum hlutum:

- **Æskilegt minnishlutfall** er markmið um líkur á að muna. Þú velur það út frá markmiðum þínum og þeim tíma sem þú hefur til náms.
- **FSRS-stikar** laga minnislíkanið að upprifjunarsögunni. Bestunaraðgerð Anki reiknar þá út.
- **Mörk fyrir ný spjöld og upprifjanir** stýra því hversu mikið efni kemur inn í kerfið og hversu margar áætlaðar upprifjanir Anki getur sýnt á hverjum degi.

Þessi aðgreining auðveldar bilanaleit til muna. Löng röð þýðir ekki sjálfkrafa að stikarnir séu rangir. Námsspjaldastokkur með mikilvægu efni þarf ekki sjálfkrafa eigið stillingasafn fyrir stika. Og lægra minnishlutfall leysir ekki vandann ef fjöldi nýrra spjalda var aldrei viðráðanlegur.

## Veldu minnishlutfall út frá vinnuálagi, ekki metnaði

Æskilegt minnishlutfall segir FSRS hvaða líkur þú vilt hafa á að muna svarið þegar kemur að áætlaðri upprifjun spjaldsins. Við `0.90` tímasetur FSRS út frá spá um 90% líkur á að muna. Þetta er markmið líkansins, ekki trygging fyrir nákvæmlega 90% réttum svörum í hverri námslotu eða hverju prófi.

Þú þarft að vega saman vinnuálag og líkur á að muna:

- Hærra minnishlutfall styttir bilið milli upprifjana og fjölgar þeim.
- Lægra hlutfall lengir bilið og eykur líkurnar á að þú munir ekki.
- Ef þú lækkar það of mikið getur viðbótarvinna við að læra gleymd spjöld aftur tekið hluta tímans sem þú ætlaðir að spara.

Sjálfgefið hlutfall í Anki er 90%. Í [leiðbeiningunum um æskilegt minnishlutfall](https://docs.ankiweb.net/deck-options.html#desired-retention) er varað við því að vinnuálag aukist hratt þegar markmiðið nálgast 100%, og mælt er með að vera undir 97%. Opinbera [skýringin á hagkvæmasta minnishlutfallinu](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) fjallar um hinn enda ferilsins: mjög lágt hlutfall getur líka verið óhagkvæmt því gleymd spjöld krefjast meiri vinnu.

Byrjaðu á `0.90` og breyttu því aðeins eftir að hafa skoðað vinnuálagið. Hærra markmið getur átt við þegar það hefur raunverulegar afleiðingar að gleyma efninu. Lægra markmið getur átt við þegar upprifjanir taka tíma frá verðmætara námi. Hvorug breytingin lagar óskýr spjöld, óheiðarlegt mat eða of mörg ný spjöld.

### Minnishlutfall stokks og stikar stillingasafns hafa ólíkt gildissvið

Í Anki 26.08 býður **Desired retention** upp á tvö gildissvið: **Shared Preset** og **This deck**. Þú getur því látið skylda stokka nota sama stillingasafn fyrir stika en gefið tilteknum stokki eigið minnismarkmið.

Stilltu minnismarkmiðið sérstaklega fyrir stokk þegar afleiðingar þess að gleyma eru aðrar. Stokkur fyrir réttindapróf getur réttlætt hærra markmið en stokkur með uppflettiefni sem er í minni forgangi, jafnvel þótt báðir noti sama aðlagaða líkanið.

FSRS-stikarnir verða ekki sértækir fyrir stokk þegar þú velur **This deck**. Sjálfgefið aðlagar Anki stika út frá upprifjunarsögu allra stokka sem tilheyra núverandi stillingasafni. Ef þér finnst mjög misjafnt hversu erfiðir ólíkir hópar stokka eru geturðu notað aðskilin stillingasöfn og aðlagað líkanið að hverjum hópi fyrir sig. Þannig styður Anki aðskilda aðlögun.

## Help Me Decide og hermirinn svara ólíkum spurningum

Anki 26.08 býður upp á tvö aðskilin verkfæri á tilraunastigi:

- **Help Me Decide (Experimental)** sýnir persónulegan feril sem tengir minnishlutfall og vinnuálag. Notaðu það til að svara: „Hvaða minnismarkmið passar við þann fjölda upprifjana eða mínútna sem ég ræð við til lengdar?“
- **FSRS Simulator (Experimental)** metur hvernig tilteknar stillingar kunna að reynast með tímanum. Notaðu það til að bera saman breytingar á minnishlutfalli, fjölda nýrra spjalda, mörkum upprifjana og hámarksbili.

[Leiðbeiningar fyrir FSRS-herminn](https://docs.ankiweb.net/deck-options.html#the-simulator) telja upp helstu inntaksgögn hans:

- fjölda daga sem á að herma
- fjölda nýrra viðbótarspjalda sem á að taka með í hermuninni
- ný spjöld á dag
- hámarksfjölda upprifjana á dag
- hámarksbil
- æskilegt minnishlutfall og FSRS-stika stillingasafnsins

Hermunin notar líka raunverulegt minnisástand spjalda í stillingasafninu. Það gerir hana gagnlegri fyrir safn sem hefur verið lengi í notkun en að margfalda fjölda spjalda sem á að rifja upp í dag með einhverri almennri prósentu.

Prófaðu þrjár sviðsmyndir áður en þú breytir stillingunum sem eru í notkun:

1. Núverandi minnishlutfall og fjölda nýrra spjalda.
2. Minnismarkmiðið sem þú ert að íhuga.
3. Sama markmið með færri nýjum spjöldum á dag.

Þriðja keyrslan prófar algengan valkost: halda minnismarkmiðinu en hægja á innstreymi nýs efnis. Ef spáin verður viðráðanleg þannig þarftu ekki að sætta þig við meiri gleymsku bara til að létta á röðinni. Nánari leiðbeiningar eru í [Hversu mörg ný námsspjöld á dag?](/blog/how-many-new-flashcards-per-day/).

Bæði verkfærin byggja á áætlunum. Dagar sem falla úr, breytt spjöld, nýtt efni og breyttar matsvenjur geta valdið því að raunverulegt vinnuálag víki frá grafinu. Notaðu samanburðinn til að velja stefnu, án þess að gera ráð fyrir nákvæmum fjölda upprifjana mörgum mánuðum síðar.

Eldri leiðbeiningar kunna í staðinn að nefna **Compute Minimum Recommended Retention**, eða CMRR. Anki fjarlægði þann eiginleika í útgáfu 25.07. Hann er ekki hluti af núverandi ferli við að velja æskilegt minnishlutfall.

## Bestaðu FSRS-stika út frá eigin sögu

Æskilegt minnishlutfall lýsir markmiðinu þínu. FSRS-stikar lýsa því hvernig líkanið aðlagast upprifjunarsögunni þinni.

Í Anki 26.08 skaltu nota **Optimize Current Preset** til að aðlaga stika virka stillingasafnsins. Sjálfgefið tekur Anki með upprifjunarsögu úr öllum stokkum sem nota það stillingasafn; þú getur breytt leitinni ef aðlögunin á að byggjast á þrengra gagnasafni. **Optimize All Presets** uppfærir öll stillingasöfn í einni aðgerð.

Ekki slá inn vægi handvirkt eða afrita þau af Reddit, úr myndbandi eða úr stokki einhvers annars. Spjöld annarra, tímasetningar þeirra og matsvenjur endurspegla ekki þína upprifjunarsögu. Snyrtileg röð af [FSRS-6-vægjum](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) er ekki námsaðferð sem hægt er að flytja á milli fólks.

Bestaðu aftur þegar umtalsverð ný upprifjunarsaga hefur safnast. Handbók Anki segir að einu sinni í mánuði sé nóg, en leiðbeiningarnar inni í útgáfu 26.08 segja að á nokkurra mánaða fresti sé nóg. Niðurstaðan er sú sama: það er engin ástæða til að besta í hverri viku, hvað þá eftir hverja námslotu.

### Notaðu gæðaskoðunina með núverandi stillingasafni

Virkjaðu **Check health when optimizing (slow)** þegar þú vilt að Anki meti hversu vel FSRS getur lagað sig að sögu núverandi stillingasafns. Þessi skoðun keyrir með **Optimize Current Preset**, ekki **Optimize All Presets**.

Ef niðurstaðan er slæm skaltu skoða gögnin áður en þú snertir vægin. [Leiðbeiningar Anki um FSRS-stika](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nefna algengar ástæður: færri en nokkur hundruð upprifjanir, að velja Hard þegar þú mundir ekki og að velja ekki Again þegar upprifjun mistókst. Ef lítið er af gagnlegri sögu skaltu halda sjálfgefnum gildum og besta síðar í stað þess að fá stika lánaða frá öðrum notanda.

## Again merkir að þú mundir ekki; Hard merkir rétt svar

Þessi venja skiptir jafn miklu máli og hvaða stilling sem er.

Notaðu **Again** þegar þú gast ekki kallað fram svarið sem beðið var um eða svaraðir rangt. Notaðu **Hard** aðeins þegar þú mundir rétt, en þurftir að leggja mikið á þig eða hikaðir verulega. Good og Easy merkja líka að þú mundir rétt.

Að ýta á Hard til að forðast stutt Again-bil skráir árangur þegar þú mundir ekki. FSRS lærir þá af röngum atburði. Veldu hnapp eftir því hvernig gekk að muna svarið. Láttu ekki bilið sem birtist fyrir ofan hnappinn ráða matinu.

Óljós spjöld gera heiðarlegt mat erfiðara. Ef spurt er um fimm staðreyndir og þú manst fjórar byrjaði tímasetningarvandinn í ritlinum. Skiptu spjaldinu upp eða endurskrifaðu það. Ef þú heldur áfram að gleyma svörum við sömu spjöldum þrátt fyrir endurteknar upprifjanir skaltu lesa [Hvernig laga má námsspjöld sem gleymast aftur og aftur](/blog/how-to-fix-leech-flashcards/).

## Hafðu FSRS-námsþrep stutt — eða skildu þau vísvitandi eftir auð

Námsþrep og endurnámsþrep ráða því hvenær spjöld birtast aftur til skamms tíma, áður en hefðbundin langtímaáætlun tekur við. Þau eru ekki annað minnismarkmið.

FSRS-leiðbeiningar Anki mæla með að hafa tvennt í huga:

- hvert þrep ætti að vera styttra en einn dagur og hægt að ljúka því sama dag
- fjöldi endurtekninga innan dags ætti að vera lítill

Langar runur á borð við `1m 10m 1d 3d` flytja gamlan SM-2-vana yfir í FSRS. Þrep sem taka dag eða meira seinka tímasetningu samkvæmt líkaninu og geta valdið ruglingslegum hnappamerkingum, þar á meðal að Hard sýni lengra bil en Good.

Stutt runa á borð við `1m 10m`, með `10m` endurnámsþrepi, er varfærinn upphafspunktur ef hún passar við námsloturnar þínar. Fleiri endurtekningar sama dag eru ekki sjálfkrafa betri.

Í Anki 26.08 má líka skilja reitinn fyrir námsþrep, endurnámsþrep eða báða eftir auða. Þegar FSRS er virkt sér það um viðkomandi skammtímatímasetningu ef reiturinn er auður. Þetta er á tilraunastigi og Again-bilið getur verið einn dagur eða lengra. Haltu stuttum handvirkum þrepum ef þú vilt vita fyrir fram að spjaldið birtist aftur sama dag. Tæmdu reit aðeins ef þú vilt fela FSRS að velja tímasetninguna.

## Hafðu slökkt á enduráætlun við breytingar til að færa þig smám saman yfir

Þegar slökkt er á **Reschedule cards on change** — eins og er sjálfgefið — breytast núverandi upprifjunardagsetningar ekki strax þótt þú virkir FSRS eða breytir æskilegu minnishlutfalli eða stikum. Nýju stillingarnar taka gildi eftir því sem spjöld eru rifjuð upp síðar, svo röðin breytist smám saman.

Ef þú vistar einhverja þessara FSRS-breytinga með valkostinn virkan eru dagsetningarnar endurreiknaðar strax. Nýja markmiðið og ástand spjaldanna ráða því hvort mörg spjöld koma til upprifjunar í einu. Anki bætir líka við færslum í upprifjunarsögu þeirra spjalda sem fá nýja áætlun, sem stækkar safnið.

Þessi valkostur er aðeins gagnlegur þegar þú vilt í raun endurreikna fyrirliggjandi áætlun. Fyrir safn sem hefur verið lengi í notkun:

1. Taktu nýtt afrit og gakktu úr skugga um að þú kunnir að afturkalla breytinguna eða endurheimta afritið.
2. Keyrðu herminn með fyrirhuguðum stillingum.
3. Veldu eina breytingu; ekki sameina nokkrar tilraunir.
4. Þegar þú vistar hana skaltu aðeins virkja enduráætlun ef þú vilt breyta dagsetningunum strax og ræður við afleiðingarnar.

Anki mælir sérstaklega með afriti þegar skipt er úr SM-2 með enduráætlun. Almennari [leiðbeiningar um afritun námsspjalda](/blog/how-to-back-up-flashcards/) útskýra hvers vegna leiðin til endurheimtar skiptir jafn miklu máli og afritaskráin.

## Hafðu hámarksbilið rúmt

Sjálfgefið hámarksbil Anki er 100 ár. Það virðist skrítið þar til þú manst að þetta er þak, ekki loforð um að hvert vel lært spjald hverfi í heila öld.

Lægra þak kallar vel þekkt spjöld fyrr fram og eykur vinnuálagið. Við hámarkið geta Hard, Good og Easy öll sýnt sama biðtíma því ekkert þeirra má fara yfir hámarkið.

Styttra hámarksbil getur verið skynsamlegt þegar próf setur raunveruleg tímamörk, efnið breytist oft eða starfsreglur krefjast endurtekinnar yfirferðar óháð spá um minni. Samræmdu hámarkið við dagatalið og herminn í stað þess að velja lága tölu af kvíða. [Hvernig læra má fyrir próf með FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) fjallar um það afmarkaða tilvik.

Fyrir venjulegt langtímanám skaltu hafa þakið rúmt. Æskilegt minnishlutfall stýrir nú þegar því hvenær líkurnar á að muna eru orðnar nógu lágar til að kalla á upprifjun.

## Fjöldi nýrra spjalda er hluti af ákvörðuninni um vinnuálag

FSRS getur dreift upprifjunum; það getur ekki gert ótakmarkað innstreymi viðráðanlegt. Hvert nýtt spjald skapar námsvinnu núna og upprifjunarvinnu síðar.

Þegar röðin er of þung skaltu skoða eftirfarandi áður en þú lækkar æskilegt minnishlutfall:

- ný spjöld á dag
- stóran innflutning eða stórar lotur af spjöldum sem hafa verið búin til sjálfvirkt
- hámarksfjölda upprifjana sem felur sífellt spjöld sem þegar er komið að því að rifja upp
- spjöld sem gleymast aftur og aftur og óljós spjöld sem krefjast margra tilrauna
- daga þegar upprifjun féll niður

Notaðu **Additional new cards to simulate** þegar þú veist að stokkur mun stækka. Spá sem byggist aðeins á safni dagsins í dag endurspeglar ekki vinnuálagið eftir stóran innflutning.

Ef niðurstaðan er of há skaltu fækka nýjum spjöldum og herma aftur. Þannig heldurðu minnismarkmiðinu án þess að biðja tímasetningaralgrímið um að sætta sig við meiri gleymsku.

## Anki og Nibomo bjóða upp á ólíkar FSRS-stillingar

Báðar vörurnar nota FSRS-6, en FSRS-stillingar Anki eiga ekki allar beina samsvörun í Nibomo.

| Möguleiki | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Æskilegt minnishlutfall | **Shared Preset** eða **This deck** | Stillanlegt fyrir hvert vinnusvæði; sjálfgefið `0.90` |
| FSRS-stikar | **Optimize Current Preset** eða **Optimize All Presets** út frá upprifjunarsögu | Opinber sjálfgefin FSRS-6-vægi eru föst og notendur geta ekki breytt þeim í v1 |
| Námsþrep | Stillanleg; tímasetning FSRS fyrir auðan reit er á tilraunastigi | Stillanleg fyrir hvert vinnusvæði; sjálfgefið `1m 10m` |
| Endurnámsþrep | Stillanleg; tímasetning FSRS fyrir auðan reit er á tilraunastigi | Stillanleg fyrir hvert vinnusvæði; sjálfgefið `10m` |
| Hámarksbil | Sjálfgefið 100 ár | Sjálfgefið 36.500 dagar, einnig 100 ár |
| Stillingabreytingar | Gilda sjálfgefið fyrir síðari upprifjanir; valkvæð enduráætlun fyrirliggjandi spjalda | Gilda aðeins fyrir síðari upprifjanir; núverandi dagsetningar eru ekki endurreiknaðar |
| Verkfæri fyrir vinnuálag | **Help Me Decide (Experimental)** og **FSRS Simulator (Experimental)** | Enginn sambærilegur hermir fyrir vinnuálag í v1 |

Nibomo notar hefðbundnu matskostina Again, Hard, Good og Easy og geymir FSRS-minnisástand hvers spjalds. Bakendinn, iOS og Android nota þrjár sjálfstæðar útfærslur tímasetningaralgrímsins sem er haldið samræmdum; upprifjanir í vefviðmótinu nota algrím bakendans í stað þess að bæta við fjórðu útfærslunni.

Þessi mörk og sjálfgefnu gildi eru skráð í opinberri [lýsingu á FSRS-tímasetningum Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Málamiðlunin er einföld: Nibomo býður upp á hagnýta FSRS-6-uppsetningu fyrir hvert vinnusvæði, en Anki gerir þér kleift að stýra nánar hvaða stokka stillingar ná til og býður upp á persónulega aðlögun og hermun. Ef þeir möguleikar eru nauðsynlegir hentar Anki betur.

## Öruggara verklag fyrir safn sem hefur verið lengi í notkun

Ef þú átt þegar margra mánaða eða ára upprifjunarsögu skaltu fylgja þessari röð:

1. **Notaðu matshnappana rétt.** Again merkir að þú mundir ekki; Hard merkir að þú mundir með erfiðismunum.
2. **Bestaðu núverandi stillingasafn.** Aðlagaðu líkanið að eigin sögu í stað þess að breyta eða afrita vægi.
3. **Keyrðu gæðaskoðunina ef þarf.** Líttu á litla eða ósamræmda sögu sem gagnavanda.
4. **Notaðu Help Me Decide.** Veldu bil fyrir minnishlutfall út frá upprifjunum eða mínútum sem þú ræður við til lengdar.
5. **Keyrðu herminn.** Berðu saman núverandi uppsetningu, fyrirhugað markmið og færri ný spjöld.
6. **Breyttu einni stillingu í einu.** Breyttu fyrst minnishlutfalli eða fjölda nýrra spjalda og fylgstu svo með raunverulegri röðinni.
7. **Hafðu þrepin stutt.** Fjarlægðu náms- og endurnámsrunur með dagslöngum þrepum; notaðu aðeins auða reiti sem tilraun.
8. **Hafðu hámarksbilið áfram rúmt.** Styttu það aðeins vegna skilgreindra tímamarka eða kröfu.
9. **Hafðu slökkt á enduráætlun.** Ef þú þarft tafarlausan endurreikning skaltu fyrst taka afrit og gera ráð fyrir röðinni sem verður til.

Þessi röð gerir þér kleift að afturkalla breytingar á rótgróinni áætlun eins lengi og hægt er. Hún kemur líka í veg fyrir að þrír ólíkir þættir — aðlögun líkansins, minnismarkmiðið og innstreymi nýs efnis — renni saman í eina stillingagátu.

## Algengar spurningar um bestu FSRS-stillingarnar

### Er 90% besta æskilega minnishlutfallið fyrir FSRS?

Það er öruggasti almenni upphafspunkturinn því það er sjálfgefið í Anki og forðast brattasta hluta ferilsins þar sem hátt minnishlutfall eykur vinnuálag. Besta gildið fyrir tiltekinn stokk fer eftir afleiðingum þess að gleyma og vinnuálaginu sem þú ræður við til lengdar. Skoðaðu **Help Me Decide (Experimental)** áður en þú breytir því.

### Ætti ég að stilla æskilegt minnishlutfall á 95%?

Aðeins eftir að hafa skoðað viðbótarupprifjanirnar eða mínúturnar. Vel gerður stokkur með mjög mikilvægu efni getur réttlætt 95%; stórt safn sem þú notar þér til ánægju getur orðið óþarflega þungt. Ekki virkja enduráætlun fyrirliggjandi spjalda um leið nema þú viljir vísvitandi endurreikna dagsetningar strax.

### Hversu oft ætti ég að besta FSRS-stika?

Mánaðarlega er þegar nógu oft, og leiðbeiningar inni í Anki 26.08 segja að á nokkurra mánaða fresti sé nóg. Bestaðu eftir að umtalsverð ný saga hefur safnast, ekki samkvæmt daglegri eða vikulegri áætlun.

### Ættu FSRS-námsþrep að vera auð?

Ef reitirnir fyrir námsþrep eða endurnámsþrep eru auðir felur Anki 26.08 FSRS að sjá um viðkomandi skammtímatímasetningu. Eiginleikinn er á tilraunastigi og Again getur verið tímasett eftir dag eða meira. Fá þrep sem hægt er að ljúka sama dag eru áfram varfærnari kosturinn.

### Breytast dagsetningar núverandi Anki-spjalda þegar FSRS-stillingum er breytt?

Ekki sjálfgefið. Þegar slökkt er á **Reschedule cards on change** hafa nýjar stillingar áhrif á síðari upprifjanir án þess að endurreikna röðina strax. Ef þú kveikir á því breytast dagsetningar og mörg spjöld geta komið til upprifjunar í einu, svo taktu afrit fyrst.

### Er CMRR enn hluti af Anki?

Nei. Anki fjarlægði Compute Minimum Recommended Retention í útgáfu 25.07. Í Anki 26.08 skaltu nota **Help Me Decide (Experimental)** og **FSRS Simulator (Experimental)** til að bera minnishlutfall saman við áætlað vinnuálag.

### Notar Nibomo sömu stillingar og Anki?

Það notar FSRS-6 og gerir þér kleift að stilla æskilegt minnishlutfall, námsþrep, endurnámsþrep, hámarksbil og tilviljunarkennda dreifingu bila (fuzz) fyrir hvert vinnusvæði. Það afritar ekki allt stillingalíkan Anki: vægin eru föst í v1, breytingar gilda aðeins fram á við og þar er hvorki persónuleg bestun stika né hermir fyrir vinnuálag.

## Ákveddu vinnuálagið á undan prósentunni

Góðar FSRS-stillingar láta upprifjunarröðina þjóna raunverulegri námsáætlun. Byrjaðu á 90%, áætlaðu vinnuna, stjórnaðu fjölda nýrra spjalda og hækkaðu minnishlutfallið aðeins þegar ávinningurinn af því að muna meira er viðbótarupprifjananna virði. Hafðu þrepin stutt, hámarksbilið rúmt og matsgögnin heiðarleg.

Farðu svo út af stillingaskjánum. Reglulegar upprifjanir gagnast tímasetningaralgríminu betur en enn eitt kvöld við fínstillingar.
