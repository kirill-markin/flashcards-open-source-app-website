---
title: "Indlela yokuthola amakhadi aphindiwe ku-Anki nokukhetha ozowagcina"
description: "Thola ukuthi kungani amakhadi ephinda ku-Anki, qhathanisa amanothi afanayo bese ukhetha ikhophi ozoyigcina. Zilolonge ngesibonelo esifushane bese uhlola umlando wokubuyekeza."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "amakhadi aphindiwe ku-Anki"
  - "ukuthola amakhophi ku-Anki"
  - "ukususa amanothi aphindiwe ku-Anki"
  - "amanothi afanayo ku-Anki"
  - "umlando wokubuyekeza ku-Anki"
---

Uthi uyabuyekeza, uhlangane nombuzo osuwuphendulile, kodwa i-Anki iwuveza njengomusha. Kungenzeka ukuthi kungene enye ikhophi ngesikhathi ungenisa amakhadi. Kungenzeka futhi ukuthi umbuzo wesibili uvela enothini elifanayo. Ukususa umugqa owodwa ku-**Browse** kungasusa wonke amakhadi alelo nothi, kuhlanganise nekhadi obufuna ukuligcina.

Ukuze ususe **amakhadi aphindiwe ku-Anki**, qala ngokuthola ukuthi avelaphi. Uma evela emanothini ahlukene, sebenzisa **Notes → Find Duplicates** ukuze uthole amanothi okufanele uwahlole. Qhathanisa okuqukethwe kwawo nomlando wekhadi ngalinye, bese ukhetha ikhophi ozoyigcina eqenjini ngalinye. Uma amanothi efana enkambini eyodwa, qala lapho bese uhlola konke okuqukethwe ngaphambi kokususa noma yini.

Le miyalelo ye-Anki yekhompyutha ilandela imanuwali nekhodi yomthombo yenguqulo ekhishiwe. Kokubili kwahlolwa mhla ka-4 Okthoba 2026. Amagama amamenyu nezibonelo zokusesha lapha ngezenguqulo yesiNgisi. Amanothi aqanjiwe angezansi abonisa imiphumela elindelekile uma uzilolonga ephepheni.

![Ilungu leqembu le-chess liqhathanisa i-rook ekhanyayo eyengeziwe nama-rook amabili asegugile ebhodini lokhuni](/blog/anki-duplicate-cards.png)

## Qala ngokuthola ukuthi yini ephindayo

Inothi ligcina izinkambu ezifana ne-**Front** ne-**Back**. Izifanekiso zakha amakhadi alelo nothi. Ngokwesibonelo, ikhadi elilodwa lingakubonisa igama ukuze ukhumbule incazelo yalo. Elinye lingakunika incazelo ukuze ukhumbule igama. Ikhadi ngalinye lineshejuli yalo, yize womabili evela enothini elilodwa. Bheka [incazelo ye-Anki yamanothi nezinkambu](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

Ku-**Browse**, khetha imodi ethi **Cards** bese uvula **Cards → Info** emgqeni ngamunye ofuna ukuwuhlola. Qhathanisa izinombolo ze-**Note ID**. Uma izinombolo zifana, amakhadi avela enothini elilodwa. Uma zehlukile, avela emanothini ahlukene. Sebenzisa `nid:123` ukuze uhlole amakhadi alelo nothi kuwo wonke amasethi. Faka inombolo yangempela esikhundleni sika-`123`. Bheka [incazelo ye-Anki yezinombolo ze-ID nendlela yokusesha ngazo](https://docs.ankiweb.net/searching.html#object-ids).

| Okutholayo | Incazelo engaba khona | Okulandelayo |
| --- | --- | --- |
| Inothi elilodwa, ikhadi ngalinye libuza ngolunye uhlangothi | Inothi lenzelwe ukukhiqiza womabili la makhadi | Bheka ukuthi yomibili imibuzo iyakusiza yini |
| Inothi elilodwa, amakhadi abonisa umbuzo ofanayo | Kungenzeka ukuthi isifanekiso sekhadi siphindiwe | Qhathanisa izifanekiso bese ubuka ukuthi amakhadi azovela kanjani |
| Amanothi ahlukene, imibuzo ibukeka ifana | Kungenzeka ukuthi inothi liphindwe | Qhathanisa amanothi aphelele ngaphambi kokukhetha ozoligcina |

Uma womabili amakhadi enziwe ngenhloso, bheka [umhlahlandlela wamakhadi abuzwa ezinhlangothini zombili](/blog/anki-reverse-cards/) (ngesiNgisi). Uma ufuna ukuyeka ukubuyekeza elilodwa, [limise nge-Suspend](/blog/anki-bury-vs-suspend/) (umhlahlandlela ungowesiNgisi). Ikhadi elisimisiwe lisahlala eqoqweni.

Uma izifanekiso zifana, landela [imiyalelo ye-Anki yokuhlola amakhadi engeziwe](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Ukususa isifanekiso kuthinta wonke amanothi alolo hlobo, ngisho nakwamanye amasethi. Hlola lawo manothi ngokwahlukana ngaphambi kokushintsha izifanekiso.

## Khetha ukuthi uzowasesha kuphi amanothi aphindiwe

Vula **Notes → Find Duplicates** bese ukhetha inkambu ofuna ukuyiqhathanisa, njenge-**Front**. Uma ungafaki umkhawulo, i-Anki isesha kuzo zonke izinhlobo zamanothi ezinaleyo nkambu. Sebenzisa **Optional filter** ukukhetha ukuthi iseshe kuphi, bese uchofoza **Search**. Bheka [imiyalelo ye-Anki ye-Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates).

Uma isethi ibizwa ngokuthi `Cleanup practice`, faka lokhu.

```text
deck:"Cleanup practice"
```

Ukusesha isethi kuhlanganisa namasethi angaphansi kwayo. Uma kungenzeka ukuthi amakhophi akumasethi ahlukene, susa isihlungi ukuze useshe iqoqo lonke. Noma ungatholi lutho esethini eyodwa, ikhophi isengaba kwenye. [Indlela yokusesha amasethi ku-Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Chofoza iqembu emiphumeleni ukuze uhlole amanothi alo. Inkinobho ethi **Tag Duplicates** ifaka ithegi ethi `duplicate` kuwo wonke amanothi afanayo, kuhlanganise nalelo ozoligcina. [Ikhodi ekhishiwe ye-Anki yokufaka le thegi](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py) isebenza kuwo wonke amanothi aseqenjini ngalinye. **Ungayisusi yonke imiphumela etholakala ngo-`tag:duplicate`.** Sebenzisa ithegi ukuthola amanothi okufanele uwahlole, bese ukhetha ngalinye ofuna ukulisusa.

Lokhu kusesha kuqhathanisa inkambu oyikhethile. Ukuze uthole ukuthi imibuzo emibili ihlola ulwazi olufanayo yini, kudingeka uzibhekele yona. Imibuzo ebhalwe ngamagama ahlukene ingadinga ukuthi uyifune ngokwakho. Kanti imibuzo ebhalwe ngendlela efanayo ingaba ngeyezilimi noma yezifundo ezihlukene.

## Zama ukwenza lezi zinqumo ezintathu ephepheni

Cabanga ukuthi unamanothi ayisithupha esethini ethi `Cleanup practice` futhi awekho amasethi angaphansi kwayo. Amanothi A no-B asebenzisa izifanekiso ze-**Basic (and reversed card)** ezingakashintshwa, ngakho ngalinye lakha amakhadi amabili. Amanothi C kuya ku-F asebenzisa **Basic**, ngalinye lakhe ikhadi elilodwa. Wonke amakhadi ayisishiyagalombili akule sethi. Izinhlamvu ezalesi sibonelo kuphela. Ku-Anki, ama-**Note ID** nama-**Card ID** ayizinombolo.

| Amanothi | Front → Back | Isimo sokufunda esiqanjiwe | Isinqumo |
| --- | --- | --- | --- |
| A no-B | `le vélo` → `bicycle` | A: ukubuyekeza izikhathi eziyi-12 usuka egameni, ezi-3 usuka encazelweni. B: womabili amakhadi masha | Gcina inothi A. Cabanga ngokususa u-B kuqala |
| C no-D | `Chemical symbol for silver?` → `Ag` | C: ukubuyekeza izikhathi ezingama-20. D: ukubuyekeza izikhathi ezi-6 | Qhathanisa yomibili imilando, bese ukhetha ikhadi ozoqhubeka nalo |
| E no-F | E: `bank` → `financial institution`. F: `bank` → `side of a river` | Izincazelo ezihlukene | Gcina womabili amanothi bese wengeza umongo ukuze imibuzo icace |

Ukusesha nge-**Front** kungathola womathathu la mapheya, ngalinye livele njengeqembu. Kulula ukunquma ngepheya lokuqala kuphela. Ngaphambi kokunquma ukuthi u-B angasuswa, qhathanisa **zonke izinkambu**, imidiya, amathegi, izinhlobo zamanothi nemibuzo evela emakhadini azo zombili izinhlangothi. Kungenzeka ukuthi inothi B linomsindo wokuphimisela ongekho ku-A, noma lakhe umbuzo ongekho ku-A.

Uma okuqukethwe okuwusizo kusekela umgomo ofanayo wokufunda, kukopishele enothini ozoligcina bese ubuka ukuthi ikhadi lizovela kanjani. Gcina namathegi awusizo avela enothini lokuqala. Uma ufuna ukuhlola olunye ulwazi, lwakhele umbuzo omusha onomlando wawo wokufunda.

Ku-C no-D, inani lokubuyekeza liwumkhondo owodwa kuphela. Bheka amarekhodi abhalwe nezinsuku zokubuyekeza, izilinganiso ozikhethile, izikhawu zamanje nokuthi amakhadi womabili abuye abuyekezwe nini. Mhlawumbe ikhadi elibuyekezwe kaningi bekunzima ukulikhumbula. Qinisekisa ukuthi umbuzo nempendulo kuyasiza, bese ukhetha ikhadi ofuna ukuqhubeka nomlando walo. Uma izimpendulo zingqubuzana, qala ngokuhlola umthombo ofunda kuwo. Inani lezikhathi zokubuyekeza alikwazi ukukutshela ukuthi impendulo ilungile yini.

Uma ugcina u-C bese ususa u-D, **imilando yawo ayihlangani**. Ikhadi eliku-C liqhubeka nesimo salo sokufunda. I-[Card Info](https://docs.ankiweb.net/stats.html#card-info) ye-Anki ibonisa umlando wekhadi ngalinye. Amarekhodi okubuyekeza amakhadi amanothi asusiwe asabonakala ezibalweni zeqoqo lonke, kodwa ayanyamalala ezibalweni zesethi ngayinye. Ikhadi oligcinayo liqhubeka nomlando walo kuphela. Bheka [incazelo yezibalo zamanothi asusiwe](https://docs.ankiweb.net/stats.html#more) emanuwalini ye-Anki.

Uma ungakaqiniseki, linda ngaphambi kokususa. Bhala phansi okusadingeka ukuhlole. Uma kudingeka, misa amakhadi osacabanga ukuwasusa ngesikhathi usawahlola.

## Qinisekisa ukuthi ikhophi iyaphinda, uyisuse bese uhlola amarekhodi

Ngaphambi kokususa okuthile okufundayo, vumelanisa amanye amadivayisi akho ukuze ulondoloze umsebenzi osalindile. Bese uvumelanisa i-Anki yekhompyutha ukuze lowo msebenzi ufinyelele eqoqweni layo. [Imanuwali ye-Anki yokuvumelanisa](https://docs.ankiweb.net/syncing.html) ichaza indlela yokwenza lokhu. Ku-**File → Export**, khetha **Anki Collection Package (`.colpkg`)** bese uvula inketho ethi **Include Media** ngaphambi kokugcina ifayela. Ifayela liqukethe wonke amasethi namashejuli awo, kuhlanganise nomlando wokubuyekeza. Ligcine endaweni ephephile. Uma ulingenisa, iqoqo eligcinwe kulo lithatha indawo yawo wonke amakhadi asephrofayeleni evuliwe ngaleso sikhathi. [Imiyalelo yokukhipha iqoqo](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Uma ufuna ukuzilolonga ngokususa, dala iphrofayela ehlukile ku-**File → Switch Profile** bese ungenisa ikhophi eyisipele kuleyo phrofayela. Yishiye ingaxhunyiwe ku-AnkiWeb. [Iphrofayela ngayinye ineqoqo layo](https://docs.ankiweb.net/profiles.html). Uma uxhuma amaphrofayela womabili ku-akhawunti eyodwa, elinye iqoqo lingathatha indawo yelinye. [Umhlahlandlela we-APKG ne-COLPKG](/blog/anki-apkg-vs-colpkg/) uchaza ukuthi ifayela ngalinye ligcina ini nokuthi kwenzekani lapho ulingenisa (ngesiNgisi).

Esibonelweni, biza ikhadi lika-A elibonisa igama ngokuthi u-A1, nelikucela ukuba ulikhumbule ngokuthi u-A2. U-B1 no-B2 amakhadi ka-B ahambisana nawo. Ku-**Cards → Info**, bhala phansi ama-**Card ID** angempela amakhadi womabili ka-A, ukuthi azobuyekezwa nini, izikhawu zawo namarekhodi ozowabona kalula emlandweni wawo. Bhala ne-**Note ID** ka-B. Yenza ukuqhathanisa ngaphambi nangemva kokususa ngesikhathi esisodwa sokuhlola. Phakathi naleso sikhathi, gwema ukubuyekeza amakhadi noma ukushintsha ishejuli yawo.

Landela lezi zinyathelo ukuze ususe inothi elilodwa ngesikhathi.

1. Ku-**Browse**, shintsha okuseshayo ufake i-`nid:` enenombolo yangempela ka-B. Uma uku-**Cards**, hlola yonke imiphumela bese ubuka ukuthi womabili amakhadi abuza kanjani. Uma uhlola okokufunda kwangempela, bheka nokuthi akhona yini amanye amakhadi alelo nothi kwamanye amasethi. Sesha ngaphandle kwesihlungi sesethi.
2. Shintshela kumodi ethi **Notes**. Qinisekisa ukuthi kuvela umphumela owodwa kuphela, inothi B ofuna ukulisusa. Khetha lona lodwa bese uchofoza **Notes → Delete**. Umyalo we-Anki othi [Delete](https://docs.ankiweb.net/browsing.html#notes) ususa inothi elikhethiwe nawo wonke amakhadi alo, ngisho noma uwusebenzisa emgqeni owodwa ku-**Cards**.
3. Sesha futhi usebenzisa i-**Note ID** ka-B ukuze uqinisekise ukuthi akusaveli miphumela. Sesha ama-**Card ID** owabhalele u-A ngo-`cid:`, uwahlukanise ngokhefana, bese uqhathanisa imininingwane ye-**Info** yawo womabili amakhadi nalokho okubhalile.
4. Sesha `deck:"Cleanup practice"` bese uqhathanisa inani lemigqa kumodi ethi **Notes** nakwethi **Cards**. Qhathanisa amanothi asele nalawo asethebula elingezansi.

Uma ususa u-B kuphela, lindela lokhu.

| Okuhlolwayo | Ngaphambi kokususa | Okufanele kusale ngemva kokususa |
| --- | --- | --- |
| Isethi yonke yesibonelo | Amanothi ayi-6 / amakhadi ayi-8 | Amanothi ama-5 / amakhadi ayi-6 |
| Amakhadi amayelana nebhayisikili | A1, A2, B1, B2 | U-A1 no-A2 kuphela |
| Ama-Card ID ka-A, ukuthi azobuyekezwa nini, izikhawu nomlando | Imininingwane oyibhalile | Amakhadi afanayo, ishejuli efanayo namarekhodi afanayo omlando |
| Ukusesha nge-Note ID ka-B | Amakhadi amabili ka-B | Ayikho imiphumela |
| Amanothi esiliva nalawo egama elithi “bank” | C, D, E, F | Womane lawo manothi asekhona |

Kulesi sibonelo, ukususa inothi elilodwa kususa amakhadi amabili. Ukususa u-A esikhundleni sika-B bekuzoshiya inani elifanayo, kodwa bekuzosusa amakhadi osuwafundile obufuna ukuwagcina. Hlola izinombolo ze-ID kanye namanani. Shiya isimo sokufunda neshejuli yekhadi oligcinayo zinjalo.

Igrafu yokubuyekeza yeqoqo lonke isengabonisa ukubuyekezwa kwamakhadi asusiwe. Ukuze uqinisekise ukuthi inqubekela phambili isagciniwe, hlola i-**Card ID** nemininingwane ye-**Info** yekhadi elisele.

Uma leli qembu selihambisana nokubhale phansi, dlulela kwelilandelayo bese ukhetha ikhophi ozoyigcina kulelo qembu. Uma ubuzilolonga ngekhophi, phinda izinyathelo osuziqinisekisile kuphrofayela yakho yangempela kuqala. Uma usulihlolile lelo qoqo, vumelanisa i-Anki yekhompyutha, bese uvumelanisa amanye amadivayisi ngaphambi kokufunda kuwo. Uma amakhophi evele ngesikhathi ungenisa amanothi, funda [umhlahlandlela wokubuyekeza amanothi akhona nge-CSV](/blog/anki-csv-update-existing-notes/) ngaphambi kokungenisa okulandelayo (ngesiNgisi). Uma uphinde amanothi ukuze ulwazi olufanayo luvele ezihlokweni eziningi, [ungasebenzisa amathegi ukuluxhumanisa nazo zonke lezo zihloko](/blog/anki-tags-vs-decks/) (umhlahlandlela ungowesiNgisi). Ngaleyo ndlela uphatha umlando wokufunda owodwa.
