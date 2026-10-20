---
title: "Izilungiselelo ezihamba phambili ze-FSRS ku-Anki ngo-2026: ukukhumbula, izinyathelo nomsebenzi wokubuyekeza"
description: "Khetha izilungiselelo ezifanele ze-Anki FSRS: amathuba okukhumbula owafunayo, izinyathelo zokufunda, ukulungisa amapharamitha, ukuhlela kabusha nomsebenzi ku-Anki 26.08 ene-FSRS-6."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "izilungiselelo ze-FSRS"
  - "izilungiselelo ezihamba phambili ze-FSRS"
  - "izilungiselelo ze-Anki FSRS"
  - "amathuba okukhumbula afunwayo ku-FSRS"
  - "izinyathelo zokufunda ze-FSRS"
  - "isilingisi se-FSRS"
  - "ukulungisa amapharamitha e-FSRS"
  - "FSRS-6"
---

Ukushintsha amathuba okukhumbula owafunayo ku-Anki asuke ku-90% aye ku-95% kuzwakala kuwushintsho oluncane. Kodwa akusho ukuthi umsebenzi ukhula ngamaphesenti amahlanu. I-FSRS kufanele inciphise izikhawu njengoba umgomo ukhuphuka, futhi iqoqo osunesikhathi ulifunda lingakudalela umsebenzi omningi kakhulu wokubuyekeza. Uma uvula nokuthi **Reschedule cards on change**, omunye walowo msebenzi ungafika ngokushesha.

Ngakho izilungiselelo ezihamba phambili ze-FSRS akulona uhlu lwamapharamitha okufanele ulukopishe. Zidinga izinqumo ezilandelanayo: nquma ukuthi ungakwazi ukubuyekeza kangakanani njalo, khetha umgomo wokukhumbula ohambisana nalowo msebenzi, vumelanisa imodeli nomlando wakho, bese ushiya izinsuku zokubuyekeza ezikhona zinjalo ngaphandle uma ufuna ukuzihlela kabusha ngamabomu.

Amagama ezinkinobho nendlela izinto ezisebenza ngayo ngezansi kuhambisana [nokukhishwa kwe-Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) nezilawuli zayo ze-FSRS-6. Uma udinga ukuqonda imodeli kuqala ngaphambi kwezilungiselelo, funda ukuthi [Iyini i-FSRS?](/blog/what-is-fsrs/). Uma usakhetha indlela yokuhlela ukubuyekeza, qala ngokuthi [I-FSRS ne-SM-2](/blog/fsrs-vs-sm-2/).

> **Ukudalula:** Ngingu-Kirill Markin, futhi ngisebenza ekwakheni i-[Nibomo](/zu/features/). I-Anki ivumela ukulungiswa kwamapharamitha ngokomlando wakho futhi inezilingisi zomsebenzi ezisahlolwa, okuyizinto i-Nibomo engakazinikezi. Ukuqhathanisa okuseduze nasekugcineni kuyawubeka ngokucacile lowo mehluko.

**Amaqiniso ahlolwe:** ngo-8 Septhemba 2026.

![Ophethe isango lokulawula amanzi emseleni uvivinya ukugeleza kwamanzi ngemodeli encane ngaphambi kokushintsha isango elikhulu](/blog/fsrs-settings-v2.png)

## Impendulo emfushane: qala lapha

Kubasebenzisi abaningi be-Anki, lezi yizinketho eziphephile zokuqala, hhayi izilungiselelo ezifanela wonke umuntu:

| Isilungiselelo noma umkhuba | Inketho ephephile yokuqala | Kungani |
| --- | --- | --- |
| Amathuba okukhumbula owafunayo (Desired retention) | `0.90` | Yilokho i-Anki eqala ngakho, futhi kulinganisa ukukhumbula nomsebenzi wokubuyekeza. |
| Amapharamitha e-FSRS | Sebenzisa **Optimize Current Preset**; unganamathiseli noma uhlele izisindo ngesandla | Isilungisi sivumelanisa imodeli nomlando wakho wokubuyekeza. |
| Ukuthi uwalungisa kangaki amapharamitha | Ungakwenzi ngaphezu kokukodwa ngenyanga; ngokuvamile kanye ezinyangeni ezimbalwa kwanele | I-Anki ayincomi ukuwalungisa njalo. |
| Izinyathelo zokufunda | Gcina izinyathelo ezimbalwa ongaziqeda ngosuku olufanayo | Uchungechunge olude lwezinyathelo lubambezela ukuhlela okusekelwe kumodeli. |
| Izinyathelo zokufunda kabusha | Zigcine zimbalwa, futhi ngasinye sibe ngaphansi kosuku olulodwa | Umkhawulo ofanayo uyasebenza ngemva kokwehluleka ukukhumbula ikhadi obulibuyekeza. |
| Ukuhlela amakhadi kabusha lapho kushintshwa izilungiselelo (Reschedule cards on change) | Kuvaliwe | Izilungiselelo ezintsha zingaqala ukusebenza ngokubuyekeza okuzayo ngaphandle kokwakha kabusha uhlu lwanamuhla. |
| Isikhawu eside kunazo zonke | Gcina iminyaka eyi-100 ebekwe ekuqaleni | Umkhawulo omfishane ubuyisa amakhadi osuwazi kahle kaningi. |
| Amakhadi amasha/ngosuku | Nquma ngokomsebenzi ongakwazi ukuwusingatha njalo | Ikhadi ngalinye elisha lidala umsebenzi wokufunda manje nowokubuyekeza kamuva. |
| Again no-Hard | Again kusho ukuthi awukhumbulanga; Hard kusho ukuthi ukhumbulile kodwa kube nzima | Izilinganiso ezingalungile zinikeza imodeli umlando ongafanele. |

Uma ukwazi ukuwusingatha umsebenzi wokubuyekeza futhi izilungiselelo zakho seziseduze nalokhu, kungase kungabi nalutho oludinga ukulungiswa. Ukunakekela izilungiselelo akukhona ukufunda.

## Hlukanisa izinqumo ezintathu

Abantu bavame ukuhlanganisa amathuba okukhumbula abawafunayo, amapharamitha e-FSRS nomsebenzi wansuku zonke kube yinto eyodwa. Ngayinye ilawula okuhlukile:

- **Amathuba okukhumbula owafunayo** awumgomo wakho wokukhumbula. Uwukhetha ngokwezinhloso zakho nesikhathi onaso sokufunda.
- **Amapharamitha e-FSRS** avumelanisa imodeli yenkumbulo nomlando wokubuyekeza. Isilungisi se-Anki siyawabala.
- **Imikhawulo yamakhadi amasha nawokubuyekeza** ilawula ukuthi kungena izinto ezingakanani ohlelweni nokuthi i-Anki ingabonisa umsebenzi ongakanani osufanele wenziwe ngosuku ngalunye.

Lokhu kuhlukanisa kwenza kube lula ukuthola inkinga. Uhlu olude lwamakhadi alusho ngokuzenzakalela ukuthi amapharamitha akho awalungile. Iqoqo lamakhadi elibalulekile alidingi ngokuzenzakalela isethi yalo yezilungiselelo zamapharamitha. Futhi ukwehlisa umgomo wokukhumbula ngeke kulungise ijubane lokwengeza amakhadi obungeke ukwazi ukuhambisana nalo kwasekuqaleni.

## Khetha umgomo wokukhumbula ngokomsebenzi, hhayi ngesifiso nje

I-Desired retention itshela i-FSRS ukuthi ufuna amathuba akho okukhumbula ikhadi abe mangakanani lapho kufika isikhathi sokulibuyekeza. Ku-`0.90`, i-FSRS ihlela ngokwesilinganiso esibikezela ithuba elingu-90% lokukhumbula. Lokho kuwumgomo wemodeli, akusona isiqinisekiso sokuthi njalo lapho ufunda noma ubhala ukuhlolwa uzophendula kahle amaphesenti angu-90 ncamashi emibuzo.

Ukushintsha lo mgomo kunemiphumela nhlangothi zombili:

- Uma uwukhuphula, izikhawu ziba mfushane futhi ukubuyekeza kuyanda.
- Uma uwehlisa, izikhawu ziba zinde futhi ukwehluleka ukukhumbula kuyanda.
- Uma uwehlisa kakhulu, umsebenzi owengeziwe wokufunda kabusha ngemva kokukhohlwa ungadla esinye sesikhathi obuthemba ukusilondoloza.

I-Anki iqala ku-90%. [Imiyalelo yayo ye-desired retention](https://docs.ankiweb.net/deck-options.html#desired-retention) ixwayisa ngokuthi umsebenzi ukhula ngokushesha njengoba umgomo usondela ku-100%, futhi incoma ukuhlala ngaphansi kuka-97%. [Incazelo esemthethweni yomgomo wokukhumbula osebenza kahle](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) ichaza nolunye uhlangothi: umgomo ophansi kakhulu nawo ungamosha isikhathi, ngoba amakhadi akhohliwe adinga umsebenzi owengeziwe.

Qala ku-`0.90`, bese ushintsha kuphela ngemva kokuhlola umsebenzi. Umgomo ophakeme ungafaneleka ezintweni lapho ukukhohlwa kunezindleko zangempela. Ophansi ungafaneleka lapho ukubuyekeza kudla isikhathi sokufunda okubaluleke kakhulu. Akukho kulokhu okuzolungisa amakhadi angacacile, izilinganiso ezingathembekile noma amakhadi amasha amaningi ngokweqile.

### Umgomo wokukhumbula weqoqo usebenza ezingeni elihlukile kwelamapharamitha esethi yezilungiselelo

Ku-Anki 26.08, **Desired retention** inikeza izindlela ezimbili zokusebenzisa umgomo: **Shared Preset** nesithi **This deck**. Ngakho ungagcina amaqoqo ahlobene esebenzisa isethi eyodwa yamapharamitha, kodwa unike iqoqo elithile umgomo walo wokukhumbula.

Sebenzisa lowo mgomo weqoqo uma izindleko zokukhohlwa zehlukile. Iqoqo lokulungiselela ukuhlolwa kwelayisensi lingadinga umgomo ophakeme kuneqoqo lezinto ongazibheka ezingabalulekile kangako, ngisho noma womabili esebenzisa imodeli efanayo elungisiwe.

Amapharamitha e-FSRS awagcini kulelo qoqo kuphela uma ukhetha **This deck**. Ngokuzenzakalela, i-Anki iwalungisa ngomlando wokubuyekeza wawo wonke amaqoqo abelwe isethi yezilungiselelo yamanje. Uma amaqembu amaqoqo ehluka kakhulu ngokuthi wena uwathola enzima kangakanani, amasethi ahlukene ayindlela esekelwayo yokulungisela ngalinye imodeli ngokwehlukana.

## Sebenzisa i-Help Me Decide ne-Simulator ukuphendula imibuzo ehlukene

I-Anki 26.08 inezilawuli ezimbili ezihlukene ezisahlolwa:

- **Help Me Decide (Experimental)** ibonisa igrafu yobudlelwano phakathi kokukhumbula nomsebenzi, esekelwe kuwena. Yisebenzise ukubuza ukuthi, “Yimuphi umgomo wokukhumbula ohambisana nenani lamakhadi engikwazi ukuwabuyekeza noma nesikhathi engingasinikela njalo?”
- **FSRS Simulator (Experimental)** ilinganisela ukuthi izilungiselelo ezithile zingase zisebenze kanjani ngokuhamba kwesikhathi. Yisebenzise ukuqhathanisa izinguquko zomgomo wokukhumbula, ukungenisa amakhadi amasha, imikhawulo yokubuyekeza nesikhawu eside kunazo zonke.

[Imiyalelo ye-FSRS Simulator](https://docs.ankiweb.net/deck-options.html#the-simulator) ibala izinto eziyinhloko ezifakwa kuyo:

- inani lezinsuku okufanele zilingiswe
- amakhadi amasha engeziwe okufanele afakwe ekulingiseni
- amakhadi amasha ngosuku
- inani elikhulu kakhulu lokubuyekeza ngosuku
- isikhawu eside kunazo zonke
- umgomo wokukhumbula namapharamitha e-FSRS esethi yezilungiselelo

Ukulingisa kusebenzisa nezimo zangempela zenkumbulo zamakhadi akuleyo sethi yezilungiselelo. Lokho kwenza kube wusizo kakhulu eqoqweni osunesikhathi ulifunda kunokuphindaphinda nje inani lamakhadi afanele ukubuyekezwa namuhla ngephesenti elijwayelekile.

Lingisa izimo ezintathu ngaphambi kokushintsha izilungiselelo ozisebenzisayo:

1. Umgomo wakho wamanje wokukhumbula nenani lamanje lamakhadi amasha.
2. Umgomo wokukhumbula ocabanga ukuwusebenzisa.
3. Wona lowo mgomo, kodwa ngamakhadi amasha ambalwa ngosuku.

Isimo sesithathu sivivinya enye indlela evamile: gcina umgomo wokukhumbula bese unciphisa ukungena kwezinto ezintsha. Uma lokho kuveza isilinganiso somsebenzi okwazi ukuwusingatha, akudingeki wamukele ukukhohlwa okwengeziwe ukuze nje unciphise uhlu. Umhlahlandlela onemininingwane yokwengeza amakhadi uthi [Mangaki Amakhadi Okufunda Amasha Ngosuku?](/blog/how-many-new-flashcards-per-day/).

Womabili amathuluzi anikeza izilinganiso. Izinsuku ongazifundanga, amakhadi okubhalwe kuwo kushintshiwe, izinto ezintsha nokushintsha indlela okhetha ngayo izilinganiso kungabangela ukuba umsebenzi wangempela uhluke kulokho okuboniswa igrafu. Sebenzisa ukuqhathanisa ukuze ukhethe indlela ozoyithatha, hhayi ukuze uthembise inani eliqondile lamakhadi ezinyangeni ezizayo.

Imihlahlandlela emidala ingase ikhulume nge-**Compute Minimum Recommended Retention**, noma i-CMRR. I-Anki yasusa leso sici enguqulweni 25.07. Asiseyona indlela esetshenziswa manje ukukhetha umgomo wokukhumbula.

## Lungisa amapharamitha e-FSRS ngomlando wakho uqobo

I-Desired retention iveza umgomo wakho. Amapharamitha e-FSRS achaza ukuthi imodeli ihambisana kanjani nokubuyekeza kwakho.

Ku-Anki 26.08, sebenzisa **Optimize Current Preset** ukuze ulungise amapharamitha esethi yezilungiselelo oyisebenzisayo. Ngokuzenzakalela, i-Anki ihlanganisa umlando wokubuyekeza wawo wonke amaqoqo asebenzisa leyo sethi; ungashintsha usesho uma kufanele kufakwe ingxenye encane kuphela. **Optimize All Presets** ilungisa wonke amasethi ngesikhathi esisodwa.

Ungathayiphi izisindo ngesandla noma uzikopishe ku-Reddit, kuvidiyo noma eqoqweni lomunye umuntu. Amakhadi akhe, izikhathi zakhe zokubuyekeza nemikhuba yakhe yokunikeza izilinganiso akuwona umlando wakho. Uhlu oluhleleke kahle [lwezisindo ze-FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) akulona isu lokufunda elidluliseka komunye umuntu.

Phinda ulungise amapharamitha kuphela lapho sekuqoqeke umlando omusha owanele wokubuyekeza. Incwadi yemiyalelo ye-Anki ithi kanye ngenyanga kwanele, kanti imiyalelo engaphakathi kohlelo enguqulweni 26.08 ithi kanye ezinyangeni ezimbalwa kwanele. Zombili zisho okufanayo uma usukusebenzisa: asikho isizathu sokwenza lokhu masonto onke, ingasaphathwa eyokukwenza njalo ngemva kokufunda.

### Sebenzisa ukuhlola ukufaneleka kwedatha kusethi yamanje

Vula **Check health when optimizing (slow)** uma ufuna i-Anki ihlole ukuthi i-FSRS ingavumelana kahle kangakanani nomlando wesethi yezilungiselelo yamanje. Lokhu kuhlola kusebenza no-**Optimize Current Preset**, hhayi no-**Optimize All Presets**.

Uma umphumela ungemuhle, hlola idatha ngaphambi kokuthinta izisindo. [Imiyalelo ye-Anki yamapharamitha e-FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) ibala izimbangela ezivamile: ukubuyekeza okungakafinyeleli emakhulwini ambalwa, ukusebenzisa u-Hard ngemva kokwehluleka, nokungacindezeli u-Again lapho uhlulekile ukukhumbula. Uma umlando owusizo usemncane, gcina amanani asekuqaleni bese ulungisa kamuva, esikhundleni sokuboleka amapharamitha omunye umuntu.

## U-Again usho ukwehluleka ukukhumbula; u-Hard usho ukuphumelela

Lo mkhuba ubaluleke njenganoma yisiphi isilungiselelo.

Sebenzisa **Again** uma ungakwazanga ukunikeza impendulo edingekayo noma uphendule kabi. Sebenzisa **Hard** kuphela uma ukhumbule kahle, kodwa ngomzamo omkhulu noma ngokungabaza. U-Good no-Easy nabo basho ukuphumelela.

Ukucindezela u-Hard ukuze ugweme isikhawu esifushane sika-Again kuqopha ukuphumelela ngemva kokwehluleka. I-FSRS ibe isifunda esehlakalweni esingabhalwanga kahle. Khetha inkinobho echaza ukuthi ukhumbule kanjani, hhayi isikhawu osifunayo kulokho okubhalwe ngaphezu kwezinkinobho.

Amakhadi angacacile enza kube nzima ukunikeza izilinganiso ezithembekile. Uma umbuzo ufuna amaqiniso amahlanu bese ukhumbula amane, inkinga yokuhlela iqale ngesikhathi kwakhiwa ikhadi. Lihlukanise noma ulibhale kabusha. Ngamakhadi oqhubeka nokuwehluleka naphezu kokuwabuyekeza kaningi, sebenzisa umhlahlandlela othi [Indlela Yokulungisa Amakhadi Ohlale Uwahluleka](/blog/how-to-fix-leech-flashcards/).

## Gcina izinyathelo zokufunda ze-FSRS zimfushane—noma uzishiye zingenalutho ngamabomu

Izinyathelo zokufunda nezokufunda kabusha zilawula ukubuya kwamakhadi ngokushesha ngaphambi kokuba kuqale uhlelo oluvamile lwesikhathi eside. Aziwona omunye umgomo wokukhumbula.

Imiyalelo ye-Anki ye-FSRS incoma imikhawulo emibili:

- isinyathelo ngasinye kufanele sibe ngaphansi kosuku futhi sikwazi ukuqedwa ngosuku olufanayo
- inani lokuphinda ngosuku olufanayo kufanele lihlale lincane

Uchungechunge olude olufana nokuthi `1m 10m 1d 3d` luletha umkhuba omdala we-SM-2 ku-FSRS. Izinyathelo zosuku noma ngaphezulu zibambezela ukuhlela okusekelwe kumodeli futhi zingadala imibhalo yezinkinobho edidayo, njengokuthi u-Hard abonise isikhawu eside kunesika-Good.

Uchungechunge olufushane olufana nokuthi `1m 10m`, nesinyathelo sokufunda kabusha esingu-`10m`, luyisiqalo esiqaphelekile uma luhambisana nezikhathi zakho zokufunda. Ukuphinda kakhulu ngosuku olufanayo akuhlali kungcono.

I-Anki 26.08 ivumela nokuthi noma iyiphi yezinkambu zezinyathelo zokufunda noma zokufunda kabusha ishiywe ingenalutho. Uma i-FSRS ivuliwe, inkambu engenalutho idlulisela lokho kuhlela kwesikhathi esifushane ku-FSRS. Lokhu kusahlolwa, futhi isikhawu sika-Again singaba usuku olulodwa noma ngaphezulu. Gcina izinyathelo ezimfushane ozibekayo uma udinga ukuthi ikhadi libuye ngesikhathi esibikezelekayo ngosuku olufanayo; sula inkambu kuphela uma wamukela ngamabomu ukuthi i-FSRS ikhethe leso sikhathi.

## Gcina i-Reschedule cards on change ivaliwe ukuze ushintsho lwenzeke kancane

Uma **Reschedule cards on change** ivaliwe—okuyisimo sasekuqaleni—ukuvula i-FSRS noma ukushintsha umgomo wokukhumbula noma amapharamitha akuguquli ngokushesha izinsuku zokubuyekeza ezikhona. Izilungiselelo ezintsha zisebenza lapho amakhadi ebuyekezwa esikhathini esizayo, ngakho uhlu lushintsha kancane.

Uma ulondoloza olunye lwalezo zinguquko ze-FSRS le nketho ivuliwe, izinsuku zokubuyekeza zibalwa kabusha ngokushesha. Kuye ngomgomo omusha nezimo zamakhadi, amakhadi amaningi angase afanele ukubuyekezwa ngasikhathi sinye. I-Anki iphinde ingeze amarekhodi okubuyekeza amakhadi ahlelwe kabusha, ikhulise usayizi weqoqo.

Le nketho iwusizo kuphela uma ufuna ngempela ukwakha kabusha uhlelo lwamakhadi asekhona. Eqoqweni osunesikhathi ulifunda:

1. Dala ikhophi eyisipele entsha bese uqinisekisa ukuthi uyakwazi ukuhlehlisa ushintsho noma ukubuyisela ikhophi.
2. Sebenzisa i-Simulator ngezilungiselelo ozihlongozayo.
3. Khetha ushintsho olulodwa lwezilungiselelo; ungahlanganisi izivivinyo eziningana.
4. Lapho ulugcina, vula ukuhlela kabusha kuphela uma ufuna izinsuku zishintshwe ngokushesha futhi ungakwazi ukuwusingatha umphumela.

I-Anki incoma ngokucacile ikhophi eyisipele uma usuka ku-SM-2 bese uhlela amakhadi kabusha. [Umhlahlandlela obanzi wamakhophi ayisipele amakhadi okufunda](/blog/how-to-back-up-flashcards/) uchaza ukuthi kungani indlela yokubuyisela ibaluleke njengefayela eliyisipele.

## Gcina isikhawu eside kunazo zonke siside ngokwanele

Isikhawu eside kunazo zonke ku-Anki siqala eminyakeni eyi-100. Lokho kubonakala kuxakile uze ukhumbule ukuthi kuwumkhawulo, hhayi isithembiso sokuthi ikhadi ngalinye osulifunde kahle lizonyamalala iminyaka eyikhulu.

Ukunciphisa umkhawulo kuphoqa amakhadi owazi kahle ukuthi abuye ngokushesha, kwandise umsebenzi. Lapho sekufinyelelwe emkhawulweni, u-Hard, u-Good no-Easy bangabonisa isikhawu esifanayo ngoba akukho sikhawu esingawudlula.

Umkhawulo omfishane ungafaneleka uma kunosuku lokuhlolwa oluqondile, izinto ozifundayo zishintsha njalo, noma umthetho womsebenzi udinga ukuba uzibone kaningi kungakhathaliseki ukuthi imodeli ithi usazikhumbula yini. Vumelanisa lowo mkhawulo nekhalenda ne-Simulator esikhundleni sokukhetha inombolo encane ngenxa yokukhathazeka. [Indlela Yokulungiselela Ukuhlolwa Nge-FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) ichaza leso simo esikhethekile.

Ekufundeni okuvamile kwesikhathi eside, shiya umkhawulo umude ngokwanele. Umgomo wokukhumbula usuvele ulawula ukuthi amathuba okukhumbula abikezelwe kufanele enze ikhadi libuyekezwe nini.

## Ukwengeza amakhadi amasha kuyingxenye yesinqumo ngomsebenzi

I-FSRS ingasabalalisa ukubuyekeza; ayikwazi ukwenza ukungenisa amakhadi angenamkhawulo kube umsebenzi ongakwazi ukuwusingatha njalo. Ikhadi ngalinye elisha lidala umsebenzi wokufunda manje nowokubuyekeza kamuva.

Uma umsebenzi usumningi kakhulu, hlola lezi zinto ngaphambi kokwehlisa umgomo wokukhumbula:

- amakhadi amasha ngosuku
- ukungeniswa kwamakhadi amaningi noma amaqoqo amakhulu akhiqiziwe
- umkhawulo wokubuyekeza olokhu ufihla umsebenzi osufanele wenziwe
- amakhadi ohlale wehluleka ukuwakhumbula namakhadi angacacile adla imizamo ephindaphindiwe
- izinsuku oweqe ngazo ukubuyekeza

Sebenzisa **Additional new cards to simulate** uma wazi ukuthi iqoqo lizokhula. Isibikezelo esisekelwe eqoqweni lanamuhla kuphela ngeke simele umsebenzi ozoba khona ngemva kokungenisa amakhadi amaningi.

Uma umphumela uphakeme kakhulu, nciphisa amakhadi angenayo bese ulingisa futhi. Lokho kugcina umgomo wokukhumbula ngaphandle kokucela uhlelo lokuhlela ukuthi lwamukele ukukhohlwa okwengeziwe.

## I-Anki ne-Nibomo zinikeza izilawuli ze-FSRS ezihlukene

Yomibili imikhiqizo isebenzisa i-FSRS-6, kodwa izilungiselelo ze-Anki FSRS azihambelani zonke ngazinye neze-Nibomo.

| Okungenziwa | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Umgomo wokukhumbula | **Shared Preset** noma **This deck** | Ungashintshwa endaweni yokusebenza ngayinye; uqala ku-`0.90` |
| Amapharamitha e-FSRS | **Optimize Current Preset** noma **Optimize All Presets** ngomlando wokubuyekeza | Izisindo ezisemthethweni zasekuqaleni ze-FSRS-6 zibekiwe futhi umsebenzisi akakwazi ukuzishintsha ku-v1 |
| Izinyathelo zokufunda | Ziyashintshwa; ukuhlela nge-FSRS uma inkambu ingenalutho kusahlolwa | Ziyashintshwa endaweni yokusebenza ngayinye; ziqala ku-`1m 10m` |
| Izinyathelo zokufunda kabusha | Ziyashintshwa; ukuhlela nge-FSRS uma inkambu ingenalutho kusahlolwa | Ziyashintshwa endaweni yokusebenza ngayinye; ziqala ku-`10m` |
| Isikhawu eside kunazo zonke | Siqala eminyakeni eyi-100 | Siqala ezinsukwini ezingu-36,500, nazo eziyiminyaka eyi-100 |
| Izinguquko zezilungiselelo | Zisebenza ekubuyekezeni okuzayo ngokuzenzakalela; ungakhetha ukuhlela kabusha amakhadi asekhona | Zisebenza ekubuyekezeni okuzayo kuphela; izinsuku zokubuyekeza ezikhona azakhiwa kabusha |
| Amathuluzi omsebenzi | **Help Me Decide (Experimental)** ne-**FSRS Simulator (Experimental)** | Asikho isilingisi somsebenzi esifanayo ku-v1 |

I-Nibomo isebenzisa izilinganiso ezijwayelekile ezithi Again, Hard, Good no-Easy, futhi igcina isimo senkumbulo se-FSRS sekhadi ngalinye. Izinhlelo zayo zokuhlela ku-backend, ku-iOS naku-Android zakhiwe ngokwehlukana kodwa zigcinwa zisebenza ngendlela efanayo; ukubuyekeza kuwebhu kusebenzisa uhlelo lwe-backend kunokwengeza olwesine.

Le mikhawulo namanani asekuqaleni kuchazwe [embhalweni womphakathi ochaza ukuhlela kwe-FSRS ku-Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Umehluko ucacile: i-Nibomo inikeza izilungiselelo ze-FSRS-6 ezisebenzisekayo ezingeni lendawo yokusebenza, kanti i-Anki inikeza ukukhetha okunemininingwane yokuthi izilungiselelo zisebenza kuphi, ukulungiswa kwemodeli ngokomlando wakho nokulingisa. Uma lezo zilawuli zibalulekile kuwe, i-Anki ifaneleka kangcono.

## Indlela ephephe kakhudlwana yeqoqo osunesikhathi ulifunda

Uma usunomlando wokubuyekeza wezinyanga noma weminyaka, landela lolu hlelo:

1. **Lungisa indlela osebenzisa ngayo izilinganiso.** Again kusho ukwehluleka; Hard kusho ukuphumelela okunzima.
2. **Lungisa amapharamitha esethi yamanje.** Sebenzisa umlando wakho kunokuhlela noma ukukopisha izisindo.
3. **Hlola ukufaneleka kwedatha uma kudingeka.** Phatha umlando omncane noma onezilinganiso ezingahambisani njengenkinga yedatha.
4. **Sebenzisa i-Help Me Decide.** Khetha ibanga lomgomo wokukhumbula ngokwenani lamakhadi ongawabuyekeza noma isikhathi ongasinikela njalo.
5. **Sebenzisa i-Simulator.** Qhathanisa izilungiselelo zamanje, umgomo ohlongozwayo nokwengeza amakhadi amasha ambalwa.
6. **Shintsha isilungiselelo esisodwa.** Lungisa umgomo wokukhumbula noma inani lamakhadi angenayo kuqala, bese ubheka umsebenzi wangempela.
7. **Gcina izinyathelo zimfushane.** Susa uchungechunge lwezinyathelo zokufunda nokufunda kabusha ezithatha usuku noma ngaphezulu; sebenzisa izinkambu ezingenalutho njengokuzama kuphela.
8. **Shiya isikhawu eside kunazo zonke siside ngokwanele.** Sinciphise kuphela uma kunomkhawulo wesikhathi noma imfuneko ecacile.
9. **Gcina ukuhlela kabusha kuvaliwe.** Uma udinga ukwakha kabusha ngokushesha, yenza ikhophi eyisipele kuqala bese uhlelela umsebenzi ozovela.

Ukulandela lolu hlelo kugcina ithuba lokuhlehlisa izinguquko ohlelweni lwakho oludala isikhathi eside ngangokunokwenzeka. Kuphinde kuvimbele izinkinga ezintathu ezahlukene—ukuvumelana kwemodeli nedatha, umgomo wokukhumbula nokungena kwezinto ezintsha—ukuba zihlangane zibe yinkinga eyodwa edidayo yezilungiselelo.

## Imibuzo evamile ngezilungiselelo ezihamba phambili ze-FSRS

### Ingabe u-90% ungumgomo wokukhumbula ongcono kakhulu we-FSRS?

Uyisiqalo esiphephe kakhulu kubantu abaningi ngoba i-Anki iqala ngawo futhi ugwema ingxenye lapho umsebenzi ukhuphuka kakhulu ngenxa yomgomo ophakeme. Inani elifanele iqoqo elithile lincike ezindlekweni zokukhohlwa nomsebenzi ongakwazi ukuwusingatha njalo. Hlola **Help Me Decide (Experimental)** ngaphambi kokulishintsha.

### Ingabe kufanele ngibeke umgomo wokukhumbula ku-95%?

Kuphela ngemva kokuhlola inani lokubuyekeza noma imizuzu eyengeziwe. Iqoqo lamakhadi acacile ngezinto ezibaluleke kakhulu lingakufanelekela u-95%; iqoqo elikhulu olifunda nje lingasinda ngokungenasidingo. Ungavuli ukuhlela kabusha amakhadi asekhona ngesikhathi esifanayo ngaphandle uma ufuna ngamabomu ukuthi izinsuku zokubuyekeza zakhiwe kabusha ngokushesha.

### Kufanele ngilungise amapharamitha e-FSRS kangaki?

Kanye ngenyanga sekwanele, kanti imiyalelo engaphakathi kwe-Anki 26.08 ithi kanye ezinyangeni ezimbalwa kwanele. Walungise lapho sekuqoqeke umlando omusha owanele, hhayi ngosuku ngalunye noma ngesonto ngalinye.

### Ingabe izinyathelo zokufunda ze-FSRS kufanele zishiywe zingenalutho?

Izinyathelo zokufunda noma zokufunda kabusha ezingenalutho zivumela i-Anki 26.08 idlulisele ukuhlela kwesikhathi esifushane okuhambisana nazo ku-FSRS. Lesi sici sisahlolwa, futhi u-Again angahlelelwa usuku noma ngaphezulu kamuva. Izinyathelo ezimbalwa zosuku olufanayo ziseyinketho eqaphelekile.

### Ingabe ukushintsha izilungiselelo ze-FSRS kuhlela kabusha amakhadi e-Anki asekhona?

Hhayi ngokuzenzakalela. Uma **Reschedule cards on change** ivaliwe, izilungiselelo ezintsha zithinta ukubuyekeza okuzayo ngaphandle kokwakha kabusha uhlu ngokushesha. Ukuyivula kushintsha izinsuku zokubuyekeza futhi kungabangela ukuba kufike isikhathi sokubuyekeza amakhadi amaningi ngasikhathi sinye, ngakho yenza ikhophi eyisipele kuqala.

### Ingabe i-CMRR iseyingxenye ye-Anki?

Cha. I-Anki yasusa i-Compute Minimum Recommended Retention enguqulweni 25.07. Ku-Anki 26.08, sebenzisa **Help Me Decide (Experimental)** ne-**FSRS Simulator (Experimental)** ukuqhathanisa umgomo wokukhumbula nomsebenzi olinganiselwe.

### Ingabe i-Nibomo isebenzisa izilungiselelo ezifanayo ne-Anki?

Isebenzisa i-FSRS-6 futhi inikeza umgomo wokukhumbula, izinyathelo zokufunda, izinyathelo zokufunda kabusha, isikhawu eside kunazo zonke ne-fuzz endaweni yokusebenza ngayinye. Ayikopishi zonke izilungiselelo ze-Anki: izisindo zibekiwe ku-v1, izinguquko zisebenza kokuzayo kuphela, futhi akukho ukulungiswa kwamapharamitha ngokomlando womuntu noma isilingisi somsebenzi.

## Nquma umsebenzi ngaphambi kwephesenti

Izilungiselelo ezinhle ze-FSRS zenza uhlu lokubuyekeza lusekele uhlelo lwangempela lokufunda. Qala ku-90%, linganisela umsebenzi, lawula ukungena kwamakhadi amasha, bese ukhuphula umgomo wokukhumbula kuphela lapho inzuzo yokukhumbula okwengeziwe ifanele umsebenzi owengeziwe wokubuyekeza. Gcina izinyathelo zimfushane, isikhawu eside kunazo zonke siside ngokwanele, nedatha yezilinganiso ithembekile.

Bese uphuma esikrinini sezilungiselelo. Ukubuyekeza njalo kusiza uhlelo lokuhlela kakhulu kunokuchitha obunye ubusuku ulokhu ulungisa izilungiselelo.
