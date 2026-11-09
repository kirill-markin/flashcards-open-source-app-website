---
title: "Ukuhleleka kwamakhadi amasha ku-Anki — ukuqoqa, ukuhlela nokuhlola umugqa"
description: "Qonda izilungiselelo zokuqoqa nokuhlela amakhadi amasha ku-Anki ngesibonelo samakhadi ayisithupha. Hlola imikhawulo yamaqoqwana, izindawo zamakhadi emgqeni neqoqo olikhethele ukufunda."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "ukuhleleka kwamakhadi amasha ku-Anki"
  - "ukulandelana kokuqoqwa kwamakhadi amasha ku-Anki"
  - "ukulandelana kokuhlelwa kwamakhadi amasha ku-Anki"
  - "ukuhlela ngezindawo kusukela kwencane ku-Anki"
  - "amakhadi e-Anki avela ngokulandelana obungakulindele"
---

Ku-Anki, ikhadi elisha elisendaweni engu-10 lingavela ngemva kwelisesendaweni engu-60. Uma uqala ukufunda eqoqweni eliqukethe amaqoqwana, ukhetha ukuqoqa **Ngeqoqo (Deck)** nokuhlela **Ngendlela aqoqwe ngayo (Order gathered)**, i-Anki ingaqeda ukuqoqa amakhadi eqoqwaneni elifika kuqala ngaphambi kokudlulela kwelinamakhadi ahlanganisa lelo elisendaweni engu-10. Ukuhlela amakhadi ngosuku adalwe ngalo esibukweni sokuphequlula (Browser) ngeke kushintshe lowo mugqa wokufunda.

I-Anki isebenzisa izigaba ezimbili ukuze inqume ukulandelana kwamakhadi amasha. **Ukuqoqa** kunquma ukuthi yimaphi amakhadi angena ngaphansi kwemikhawulo yanamuhla. **Ukuhlela** kunquma ukuthi amakhadi aqoqiwe azolandelana kanjani. Qala ngokubheka ukuthi i-Anki ikhetha amakhadi obungawalindele yini, noma ikhetha ofanele kodwa iwabonise ngokulandelana obungakulindele.

Le miyalelo isebenza emaqoqweni avamile e-Anki yamakhompyutha. Isibonelo samakhadi ayisithupha sibalwe ephepheni sisebenzisa imanuwali yamanje nenguqulo ekhishiwe ye-Anki. Yomibili imithombo ihlolwe mhla ziyisi-6 ku-Okthoba 2026. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![Indoda ibambe irekhodi le-vinyl lesine ngenhla kwesikhala esingenalutho endaweni yokubeka amarekhodi, eduze kwamarekhodi amathathu. Ngemuva kwayo kunamakhreyithi amabili anama-albhamu angakhethwanga.](/blog/anki-new-card-order.png)

## Khetha ukuthi ufuna amakhadi alandelane kanjani

Vula **Izinketho (Options)** zeqoqo olicofayo ukuze ufunde, bese uya kokuthi **Ukulandelana kokubonisa (Display Order)**. Uma uqala ukufunda eqoqweni eliqukethe amaqoqwana, izilungiselelo zalo zokubonisa zilawula leso sikhathi sokufunda, kuhlanganise namakhadi avela emaqoqwaneni alo.

| Umphumela owufunayo | Ukulandelana kokuqoqwa kwamakhadi amasha (New Card Gather Order) | Ukulandelana kokuhlelwa kwamakhadi amasha (New Card Sort Order) |
| --- | --- | --- |
| Landela izinombolo zezindawo zamakhadi amasha kusukela kwencane kuye kwenkulu kulo lonke iqoqo elikhethiwe namagatsha alo | Ngezindawo kusukela kwencane (Ascending position) | Ngendlela aqoqwe ngayo |
| Qala ngamaqoqwana ngokulandelana kwezinhlamvu zamagama awo, bese ulandela izinombolo zezindawo eqoqwaneni ngalinye | Ngeqoqo | Ngendlela aqoqwe ngayo |
| Gcina wona lawo makhadi, kodwa uwabonise ngokulandelana okungahleliwe | Indlela oyikhethile yokuqoqa | Ngokungahleliwe (Random) |

Lezi zinhlanganisela zilandela izincazelo ezisemanualini ye-Anki yesiNgisi. Inketho ethi **Ngezindawo kusukela kwencane** ilandela izinombolo zezindawo ezigcinwe emakhadini amasha. Indlela amakhadi afakwa ngayo nokuwahambisa ngesandla kungazishintsha lezo zinombolo, ngakho amakhadi angavela ngokulandelana okuhlukile kunokwezinsuku adalwe ngazo. [Ukuqoqa](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) · [Ukuhlela](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Ngaphambi kokushintsha izilungiselelo, hlola ukuthi iqoqo lisebenzisa yiphi iphrofayela yezilungiselelo (preset) nokuthi yimaphi amanye amaqoqo ayisebenzisayo. Izilungiselelo zokubonisa zigcinwa kuleyo phrofayela, ngakho uma ufuna ushintsho lusebenze kuleli qoqo kuphela, qala ngokulinika iphrofayela yalo. Ungabeka imikhawulo yansuku zonke ehlukile ngaphansi kokuthi **Leli qoqo (This deck)** noma **Namuhla kuphela (Today only)**. Izilungiselelo zokubonisa zisebenza kuwo wonke amaqoqo asebenzisa iphrofayela efanayo. [Umhlahlandlela wesiNgisi wokusetha iphrofayela yeqoqo elilodwa](/blog/anki-deck-options-presets/)

## Thola ukuthi yimaphi amakhadi amane angenayo

Cabanga ngeqoqo elivamile elibizwa ngokuthi `OrderLab`. Linamaqoqwana amabili aqukethe la makhadi ayisithupha kuphela. Ikhadi ngalinye livela enothini lalo lohlobo **Oluyisisekelo (Basic)**, elikhiqiza ikhadi elilodwa. Ngakho wonke ayisithupha anenombolo efanayo yohlobo lwekhadi, futhi awekho amakhadi aphuma enothini elilodwa.

| Ikhadi | Iqoqo | Inombolo yendawo egciniwe yekhadi elisha |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Ake sithi wonke ayisithupha masha. Alikho elifihlwe okwesikhashana (buried), elimisiwe (suspended) noma eliseqoqweni elihlungiwe (filtered deck). Ekuqaleni awekho amanye amakhadi, awekho amakhadi asafundwa alinde ukuphindwa, futhi awekho alinde ukubuyekezwa. Akukafundwa lutho namuhla. I-`OrderLab` ayikho ngaphansi kwelinye iqoqo, futhi imikhawulo yokubuyekeza esebenzayo ishiya indawo yawo wonke amakhadi amasha ayisithupha.

Khetha i-**OrderLab** ukuze ufunde. Umkhawulo wayo osebenzayo wamakhadi amasha ngu-**4**. Owe-`01 First` ngu-**3**, kanti owe-`02 Second` ngu-**2**. Ayikho imikhawulo eshintshwe okwesikhashana. Kuzo zombili izimo, sebenzisa ukuhlela **Ngendlela aqoqwe ngayo**. Ekubaleni ngakunye, qala ngesimo esifanayo salo lonke iqoqo lamakhadi ku-Anki. Yenza izibalo ephepheni ukuze ungashintshi leso simo ngokuphendula amakhadi phakathi kokuqhathanisa.

Uma uqoqa **Ngeqoqo**:

1. Ngokulandelana kwezinhlamvu zamagama, i-Anki ifika ku-`01 First` ngaphambi kwe-`02 Second`.
2. Iqoqa u-**A, B, C** ngokulandelana kwezinombolo zezindawo zawo. I-`01 First` isinikeze amakhadi amathathu, ngakho ku-`OrderLab` sekusele indawo eyodwa.
3. Iqoqa u-**D** ku-`02 Second`, bese ifinyelela emkhawulweni wamakhadi amane we-`OrderLab`.

Kulindeleke ukuthi amakhadi amasha avele okokuqala ngokulandelana okuthi **A → B → C → D**. U-E no-F basala ngaphandle.

Uma uqoqa **Ngezindawo kusukela kwencane**, i-Anki icubungula amakhadi awo womabili amaqoqwana ngokulandelana okuthi **D → A → E → B → F → C**. Amane okuqala angena ngaphansi kwayo yonke imikhawulo. Mabili avela ku-`02 Second`, mabili ku-`01 First`, abe mane esewonke. Ukuqoqa kuma lapho.

Ukulandelana okulindelekile ngu-**D → A → E → B**. U-C no-F basala ngaphandle. Lapho ifaka ikhadi, i-Anki isebenzisa umkhawulo weqoqo elikulo noweqoqo elingaphezu kwalo. [Ikhodi yokuqoqa enguqulweni ekhishiwe](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Umkhawulo we-`02 Second` uvumela amakhadi afinyelela kwamabili. Uma uqoqa **Ngeqoqo**, i-`02 Second` inikeza elilodwa kuphela ngoba i-`01 First` isisebenzise izindawo ezintathu kwezine. Ukuqoqa **Ngezindawo kusukela kwencane** kuletha amabili eqoqwaneni ngalinye ngenxa yezinombolo zezindawo ezikulesi sibonelo. Kwelinye iqoqo, inani elivela eqoqwaneni ngalinye lingahluka.

## Vumela wonke ayisithupha ukuze uhlukanise ukukhetha nokulandelana

Esibalweni sesibili esephepheni, nikeza amaqoqo imikhawulo evumela wonke amakhadi ayisithupha ukuba angene. Beka owe-`OrderLab` ku-**6**, owe-`01 First` ku-**3**, nowe-`02 Second` ku-**3**. Qhubeka nokuwahlela **Ngendlela aqoqwe ngayo**.

| Indlela yokuqoqa | Imikhawulo ye-OrderLab / 01 First / 02 Second | Ukulandelana okulindelekile lapho amakhadi evela okokuqala |
| --- | --- | --- |
| Ngeqoqo | 6 / 3 / 3 | A → B → C → D → E → F |
| Ngezindawo kusukela kwencane | 6 / 3 / 3 | D → A → E → B → F → C |

Zombili izindlela zikhetha wonke ayisithupha. Umehluko usekulandeleni kwawo kuphela. Uma ukhuphula umkhawulo we-`OrderLab` kuphela ube yisithupha, owe-`02 Second` uhlale umabili, kuzongena amakhadi amahlanu kuphela. U-F uzosala ngaphandle. Le mikhawulo ingeyokubala umehluko kulesi sibonelo sephepha kuphela.

## Ukuhlela akukwazi ukubuyisa ikhadi elisale ngaphandle

Buyela emikhawulweni yokuqala engu-**4 / 3 / 2**, bese ushintsha **Ukulandelana kokuhlelwa kwamakhadi amasha** kuphela kube **Ngokungahleliwe**.

| Indlela yokuqoqa | Amakhadi angaxutshwa lapho ehlelwa | Amakhadi ukuhlela okungeke kuwafake |
| --- | --- | --- |
| Ngeqoqo | A, B, C, D | E, F |
| Ngezindawo kusukela kwencane | D, A, E, B | C, F |

I-Anki iyakuxuba ukulandelana kokubonisa, kodwa amakhadi akhethiwe ahlala efana. Leli thebula likutshela ukuthi yimaphi amakhadi angaxutshwa. Ukulandelana kwawo ngemva kokuxutshwa akunakubikezelwa ngalo. [Ikhodi yokuhlela enguqulweni ekhishiwe ye-Anki](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Inketho ethi **Ngohlobo lwekhadi, bese kulandelwa indlela aqoqwe ngayo (Card type, then order gathered)** nayo isebenza emakhadini aseqoqiwe. Wonke amakhadi ayisithupha aphuma kumanothi ohlobo lwe-**Basic** anenombolo efanayo yohlobo lwekhadi. Ngakho kuleli cala ahlala elandelana ngendlela aqoqwe ngayo.

Kwesinye isibonelo esigxile ekuhleleni kuphela, ake sithi i-Anki isiqoqe amakhadi amane aphuma kumanothi anezifanekiso eziningi. Aqoqwe ngokulandelana okuthi **W (uhlobo 2), X (uhlobo 1), Y (uhlobo 2), Z (uhlobo 1)**. Ukuhlela ngohlobo lwekhadi kunikeza **X → Z → W → Y**. Uhlobo 1 luza kuqala, futhi ohlotsheni ngalunye amakhadi agcina ukulandelana aqoqwe ngakho. Lesi sibonelo siqala lapho ukuqoqa sekuphelile, ngakho umbuzo wokuthi yimaphi amakhadi aphuma enothini elilodwa angenayo usengowesigaba sokuqoqa, lapho kusebenza khona izilungiselelo zokuwafihla okwesikhashana.

Inombolo yohlobo lwekhadi ikhombisa ukuthi isifanekiso sekhadi sikuyiphi indawo ohlwini lwezifanekiso zalolo hlobo lwenothi. Isifanekiso sakho sinquma ukuthi ikhadi likucela ukuba ubone into osuyaziyo (“recognition”) noma uzikhiqizele impendulo (“production”). Bheka imibuzo uqobo ngaphambi kokulindela ukuthi ukuhlela ngohlobo lwekhadi kubeke kuqala yonke imibuzo ebuzwa isuka ohlangothini lokuqala lwekhadi.

## Hlola izindawo zamakhadi esibukweni sokuphequlula ngaphambi kokuzishintsha

Vula **Phequlula (Browse)**, khetha ukubuka **Amakhadi (Cards)**, bese usesha eqoqweni nasemaqoqwaneni alo. Kulesi sibonelo, sesha ngalo myalo.

```text
deck:OrderLab is:new
```

Sebenzisa imenyu yezihloko zamakholomu ukuze ubonise **Umbuzo (Question)**, **Ikhadi (Card)**, **Iqoqo (Deck)**, **Isikhathi sokufunda (Due)** nokuthi **Kudalwe nini (Created)**. Ekhadini elisha, ikholomu ethi **Due** ibonisa indawo yalo emgqeni. Ethi **Created** ibonisa ukuthi inothi lalo ladalwa nini. **Inkambu yokuhlela (Sort Field)** ibonisa okuqukethwe yinkambu yenothi ekhethelwe ukuhlela. Ukuhlela ngekholomu esibukweni sokuphequlula kushintsha indlela ithebula eliboniswa ngayo kuphela. Izindawo ezigciniwe nendlela yokuqoqa amakhadi okufunda zihlala zinjengoba zinjalo. [Incazelo yamakholomu emanuwalini ye-Anki yesiNgisi](https://docs.ankiweb.net/manual/browsing#columns)

Ukusesha okuthi `is:new` kungaveza namakhadi amasha amisiwe noma afihlwe okwesikhashana. Amanani awo kukholomu ethi **Due** avela phakathi kwabakaki. Lo myalo olandelayo uyawakhipha, ukhiphe nalawo asemaqoqweni ahlungiwe njengamanje.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Uma igama leqoqo lakho linezikhala, lifake ezimpawini zokucaphuna, njengokuthi `deck:"My Deck"`. Sebenzisa imiphumela yokusesha ukuze ubone amakhadi angase angene emgqeni. Imikhawulo nokufihlwa ngokuzenzakalela kwamakhadi aphuma enothini elilodwa kusenganciphisa inani elingena emgqeni wanamuhla. [Ukusesha ngesimo sekhadi emanuwalini yesiNgisi](https://docs.ankiweb.net/manual/searching#card-state) · [Ukusesha ngamaqoqo emanuwalini yesiNgisi](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) · [Umhlahlandlela wethu wesiNgisi ngomehluko phakathi kokufihla nokumisa amakhadi](/blog/anki-bury-vs-suspend/)

Uma izindawo ezigciniwe seziveza ukulandelana okufunayo, ziyeke zinjengoba zinjalo. Uma kudingeka uzishintshe, bhala phansi izindawo ezindala. Khetha kuphela amakhadi amasha ambalwa ofuna ukuwashintsha, bese usebenzisa **Amakhadi → Shintsha izindawo (Cards → Reposition)**. Hlola izinketho ezisewindini elivulekayo ngaphambi kokuqhubeka. Inketho ethi **Hambisa amakhadi asevele esendaweni (Shift position of existing cards)** ingashintsha nezindawo zamakhadi ongawakhethanga anezinombolo eziphezulu. Uma ungawagudluzi amakhadi asevele ekhona, izinombolo ezintsha zingafana nezamakhadi asevele esemgqeni. Uma izinombolo zilingana, inombolo yendawo iyodwa ayikutsheli ukuthi yiliphi ikhadi elizovela kuqala. [Incazelo yokushintsha izindawo emanuwalini ye-Anki yesiNgisi](https://docs.ankiweb.net/manual/browsing#cards)

Ungashintsha izilungiselelo zokuqoqa noma zokuhlela umlando wokufunda nokubuyekeza usekhona. Kulesi sihlolo, gxila ezindaweni zamakhadi amasha nasekulandeleni kwawo lapho eboniswa.

## Hlola iqoqo olicofayo nokuthi mangaki amakhadi asangena namuhla

Esibonelweni sokuqala, uma ukhetha ngokuqondile i-`OrderLab::02 Second`, i-Anki ingakhetha kuphela u-D, u-E no-F. Ngomkhawulo wamakhadi amabili, ukuqoqa **Ngezindawo kusukela kwencane** nokuhlela **Ngendlela aqoqwe ngayo**, lindela ukulandelana okuthi **D → E**. Umkhawulo wamakhadi amane we-`OrderLab` usenazo zonke izindawo ezine. Ngisho noma imikhawulo yamaqoqo angaphezulu isebenza, womabili la makhadi angavela. Uma ukhetha i-`OrderLab` bese uqoqa **Ngeqoqo** ngemikhawulo engu-**4 / 3 / 2**, uzothola ukulandelana okuthi **A → B → C → D**.

Uma ushintsha izilungiselelo zokubonisa ze-`02 Second`, isikhathi sokufunda esiqalwe ku-`OrderLab` silandela ezika-`OrderLab`. Iqoqo olikhethele ukufunda linquma ukulandelana kokubonisa nomkhawulo wenani eliphelele lamakhadi, kanti imikhawulo yamaqoqwana nayo iyasebenza lapho kufanele khona. Inketho ethi **Qala ukubala imikhawulo eqoqweni eliphezulu (Limits start from top)** inquma ukuthi imikhawulo yamaqoqo angaphezulu iyasebenza yini lapho uqala ukufunda eqoqwaneni ngokuqondile. [Imithetho yamaqoqwana emanuwalini yesiNgisi](https://docs.ankiweb.net/manual/deck-options#subdecks) · [Ukulawula imikhawulo yamaqoqo angaphezulu emanuwalini yesiNgisi](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Hlola nemikhawulo yokubuyekeza. Ngokwesilungiselelo esivamile, umkhawulo wokubuyekeza unciphisa namakhadi amasha angangena. Inketho ethi **Amakhadi amasha awabalwa emkhawulweni wokubuyekeza (New cards ignore review limit)** iyakushintsha lokho. Yona nethi **Limits start from top** zisebenza kuwo wonke amaqoqo ku-Anki. Bhala phansi ukuthi ngayinye ivuliwe noma ivaliwe ngaphambi kokunquma ukuthi mangaki amakhadi amasha asangena namuhla. [Isikrini semikhawulo yansuku zonke enguqulweni ekhishiwe](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Esibukweni sokuphequlula, sebenzisa **Buka kuqala (Preview)** ukuze uhlole imibuzo ungayiphenduli. Ngesikhathi esilandelayo lapho ufunda njengokujwayelekile, gcwalisa leli thebula.

| Okubhala phansi | Okukucacisayo |
| --- | --- |
| Iqoqo olicofele ukufunda, iphrofayela yalo nezilungiselelo zalo zokuqoqa nokuhlela | Yiziphi izilungiselelo zokubonisa ezilawula lesi sikhathi sokufunda? |
| Amakhadi owalindele nezinombolo zezindawo zawo ezigciniwe | Inkinga isekukhethweni kwamakhadi noma ekulandelaneni kwawo? |
| Imikhawulo yamakhadi amasha neyokubuyekeza, imikhawulo ebekelwe leli qoqo noma lolu suku, nalokho osukufunde namuhla | Zingaki izindawo ezisele ngaphansi kwemikhawulo? |
| Imikhawulo yamaqoqo angaphezulu nezinketho ezimbili zemikhawulo ezisebenza kuwo wonke amaqoqo | Yimiphi eminye imikhawulo esebenzayo? |
| Amakhadi afihliwe okwesikhashana, amisiwe, asemaqoqweni ahlungiwe noma aphuma enothini elilodwa | Yimaphi amakhadi abonakala engangena kodwa okungenzeka angatholakali? |
| Ukulandelana kwamakhadi ngesikhathi evela okokuqala, kubhalwe ngokwahlukana nokuphindela kwamakhadi asafundwa | Ingabe amakhadi amasha alandelana ngendlela obuyilindele? |

Ngemva kokuphendula ikhadi elisha, ukuphindela kwamakhadi asafundwa kungaphazamisa ukulandelana okubonayo phakathi nesikhathi sokufunda. **Ukulandelana kwamakhadi amasha nawokubuyekeza (New/Review Order)** kubeka amakhadi amasha ngaphambi, ngemva noma phakathi kwamakhadi okubuyekeza. I-Anki iqala ngokuqoqa nokuhlela amakhadi amasha, bese ihlanganisa lezo zigaba zamakhadi lapho yakha umugqa wokufunda. [Ikhodi yokwakha umugqa enguqulweni ekhishiwe](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Qeda ukuhlola uma amakhadi obulindele ukuthi aqoqwe nokulandelana kokuvela kwawo okokuqala kuhambisana nalokho okubonayo. Uma kusenomehluko, gcina izinombolo zezindawo, izilungiselelo, iqoqo olikhethile, inguqulo ye-Anki nokulandelana okubonile. Faka nezandiso ezihlobene nenkinga ukuze ukwazi ukuyihlola ngokuqondile. Uma ufuna ukuphinda uzijwayeze isihloko esithile, sebenzisa indlela ehlukile echazwe emhlahlandleleni wesiNgisi. [Ukuzijwayeza ngeqoqo elihlungiwe](/blog/anki-filtered-decks-without-rescheduling/)
