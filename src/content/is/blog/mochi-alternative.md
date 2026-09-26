---
title: "Umsögn um Mochi-námsspjöld (2026): ókeypis notkun, nám án nets og samanburður við Anki"
description: "Heimildastudd umsögn um Mochi-námsspjöld: ókeypis notkun, öpp án nets, Markdown-glósur, FSRS, samstilling, Anki-innflutningur, útflutningur og takmarkanir eigin hýsingar."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi námsspjöld"
  - "mochi spjöld"
  - "mochi eða anki"
  - "anki eða mochi"
  - "er mochi ókeypis"
  - "mochi án nets"
  - "mochi verð"
  - "mochi hýsing"
  - "markdown námsspjöld"
  - "mochi dreifðar endurtekningar"
---

Mochi byrjar á Markdown-skjali í stað hefðbundins eyðublaðs með framhlið og bakhlið. Bættu við línu með þremur bandstrikum og skjalið fær hliðar sem hægt er að rifja upp. Þú getur líka látið það vera glósu, tengt það við annað spjald eða sett það í geymslu svo það finnist áfram í leit án þess að fara í upprifjunarbiðröðina.

Þetta litla skiltákn skýrir hverjum **Mochi-námsspjöld** henta. Mochi er góður kostur fyrir þann sem vill glósur og dreifðar endurtekningar í sama appi með gögnin fyrst og fremst á eigin tæki, sérstaklega ef Markdown, baktenglar og einföld upprifjun með Remembered/Forgot, eða „Mundi/Gleymdi“, henta vel. Kostirnir eru síður sannfærandi fyrir vanan Anki-notanda sem á safn sem byggist á sjálfvirkt mynduðum spjaldaafbrigðum, sérsniðnu HTML/CSS, JavaScript, viðbótum eða ítarlegum stillingum upprifjunaráætlana.

Fyrir vinnu á einu tæki er ókeypis leiðin meira en prufuútgáfa: skráningar er ekki krafist og Mochi lýsir ótakmarkaðri notkun án nets. Hængurinn er sá að samstilling milli tækja tilheyrir **Pro-áskriftinni á US$5 á mánuði**. Fyrir Anki-notanda getur það sem tapast við flutninginn kostað meira. Mochi getur flutt inn Anki-pakka og upprifjunarsögu hans, en getur ekki varðveitt öll sniðmát, útlit, skriftur, áætlunarstillingar eða virkni viðbóta.

> **Upplýsingar um hagsmunatengsl:** Ég heiti Kirill Markin og þróa [Nibomo](/is/). Þetta er heimildastudd umsögn um vinnuflæði, ekki fullyrðing um að ég hafi sjálfur prófað vöruna í notkun. Greinin inniheldur enga söluþóknunartengla. Aðalsamanburðurinn er áfram milli Mochi og Anki; mín eigin vara birtist aðeins sem skýrt merktur valkostur undir lokin.

**Staðreyndir yfirfarnar:** 7. september 2026. Nýjasta sýnilega [útgáfa Mochi](https://mochi.cards/changelog/) á þeim tíma var 26.8.2, dagsett 10. ágúst 2026. Verð og upplýsingar í appaverslunum geta breyst.

![Bókaforvörður prófar litla röð samtengdra spjalda sem eru brotin saman eins og harmónikka á meðan upprunalega safnið liggur öruggt í kassa](/blog/mochi-alternative-v3.png)

## Stutt umsögn

- **Veldu Mochi** ef þú vilt Markdown-glósur og spjöld saman, notkun án nets og reiknings á einu tæki, baktengla og tvo valkosti við mat á svörum.
- **Veldu Anki** ef þú þarft vel þróaðar færslugerðir, HTML/CSS-sniðmát, viðbætur, ókeypis hýsta samstillingu, fjórar einkunnir við mat á svörum eða ítarlegri FSRS-stillingar.
- **Bíddu með að skipta** ef þú rifjar þegar reglulega upp og getur ekki nefnt hvaða vandamál í vinnuflæðinu Mochi á að leysa. Nýtt viðmót eitt og sér réttlætir ekki að stofna margra ára áætlunargögnum og sérsniðnum spjöldum í hættu.
- **Prófaðu áður en þú flytur** ef langtímasafnið þitt er þegar í Anki. Mochi tekur við `.apkg`-skrám og getur flutt inn upprifjunarsögu, en breytir HTML í Markdown og fjarlægir CSS og JavaScript.

## Mochi og Anki í fljótu bragði

| Ákvörðun | Mochi | Anki |
|---|---|---|
| Hentar best | Notendum tengdra glósna og Markdown sem vilja hafa glósur við hlið upprifjunarspjalda | Námsfólki sem vill vel þróað og stillanlegt námsspjaldakerfi |
| Gerð spjalda | Markdown-skjal fær margar hliðar þegar þú bætir við `---`; reitir og sniðmát eru líka í boði | Færslur innihalda reiti; HTML/CSS-sniðmát mynda eitt eða fleiri spjöld |
| Upprifjunarferli | Ný spjöld fara fyrst í upphafsnám; lærð spjöld nota Forgot / Remembered (Gleymdi / Mundi) | Spjöld nota Again / Hard / Good / Easy (Aftur / Erfitt / Gott / Auðvelt) |
| Upprifjunaráætlun | Eigin reiknirit Mochi er sjálfgefið; FSRS er valfrjálst | FSRS eða eldra SM-2, með fleiri verkfærum til að stilla FSRS |
| Ókeypis notkun | Engin skráning og ótakmörkuð notkun án nets | Ókeypis skjáborðsforrit og ókeypis AnkiWeb-samstilling; opinbera iOS-appið kostar |
| Samstilling milli tækja | Pro, US$5 á mánuði | Ókeypis í gegnum AnkiWeb |
| Kerfi | Vefur, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, opinbera AnkiMobile-appið, sjálfstætt þróað AnkiDroid |
| Snið til gagnaflutnings | Útflutningur á eigin `.mochi`-sniði, Markdown og CSV | Eigin sniðin `.colpkg` og `.apkg`, ásamt texta með reitum aðskildum með dálkaskiptatáknum |
| Mörk gagnastjórnunar og hýsingar | Gögn fyrst og fremst staðbundin; kjarnaappið er ekki kynnt sem opinn hugbúnaður og engri studdri samstillingarþjónustu í eigin hýsingu er lýst | Aðalkóðasafnið er með AGPL-leyfi; opinberum samstillingarþjóni til eigin hýsingar er lýst |

Gagnlegasti greinarmunurinn er **einfaldleiki með glósur í forgrunni eða stjórn yfir safninu í heild**.

## Á hverju byggist viðmót Mochi?

Viðmót Mochi verður skýrara þegar þú fylgir einu spjaldi í gegnum það.

Hvert spjald tilheyrir stokki. Smelltu á **New Card** (Nýtt spjald) og þú færð Markdown-ritil í stað fastra reita fyrir spurningu og svar. Eitt spjald getur innihaldið fyrirsagnir, lista, kóða, myndir, skipulagða reiti og tengla. Settu `---` milli efnisbúta til að búa til tvær eða fleiri hliðar til upprifjunar. Settu inn `[[double brackets]]`, það er tvöfalda hornklofa, til að vísa á annað spjald; Mochi býr sjálfkrafa til baktengil. Opinbera [yfirlitið um spjöld](https://mochi.cards/docs/cards/) lýsir líka sniðmátum þar sem staðgenglar birta gildi úr skipulögðum reitum.

Spjöld geta gegnt tveimur hlutverkum án þess að vera í aðskildum kerfum:

- upprifjunarspjald notar hliðar og fer í dreifðar endurtekningar;
- glósa til uppflettingar getur verið í sama stokki og farið í geymslu, sem fjarlægir hana úr biðröðum nýrra spjalda og spjalda sem komið er að því að rifja upp, án þess að eyða efni, merkjum, tenglum eða sögu hennar.

[Stokkasýn](https://mochi.cards/docs/decks/custom-views/) er vistuð samsetning af síum, röðun og framsetningu. Þú getur haft reitasýn fyrir venjulega skoðun og búið svo til aðra sýn fyrir tiltekið merki, stöðu næstu upprifjunar, lágt hlutfall svara sem þú manst eða nýlega upprifjun. Mochi leyfir þér líka að nota sýn fyrir hraðæfingu án þess að breyta venjulegri áætlun eða upprifjunarsögu. Þetta er nákvæmari lýsing en að kalla viðmótið „hreint“: sami stokkur getur virkað sem glósubók, síaður gagnagrunnur og námsbiðröð.

[Dagleg upprifjun](https://mochi.cards/docs/getting-started/reviewing-cards/) skiptist í tvö stig. Í **New cards** (Ný spjöld) bætirðu spjaldi annaðhvort við upprifjunaráætlunina eða velur Again (Aftur) til að sjá það fljótlega aftur. Þegar spjald hefur verið lært og komið er að næstu upprifjun birtist næsta hlið og þú velur **Forgot** (Gleymdi) eða **Remembered** (Mundi). Ef þú gleymir því notar Mochi sérstaka biðröð til að rifja spjaldið upp aftur áður en framvindan er núllstillt. Ákvörðunin við upprifjun er því vísvitandi einföld.

## Er Mochi ókeypis og hvað virkar án nets?

Já, en „ókeypis“ og „án nets“ þýða ólíka hluti eftir því hvar þú notar appið. [Verðskrá Mochi](https://mochi.cards/) tilgreinir:

- **Ókeypis leið:** US$0 til frambúðar, engin skráning nauðsynleg og ótakmörkuð notkun án nets.
- **Pro:** US$5 á mánuði, með samstillingu milli tækja, birtingu stokka, kvikum reitum, gervigreindarsamþættingu og aðstoð í tölvupósti.

Mochi virkar á macOS, Windows, Linux, iOS, Android og vefnum. [Leiðbeiningarnar um niðurhal og uppsetningu](https://mochi.cards/docs/getting-started/download-and-install/) draga hagnýt mörk:

| Umhverfi | Hvað ókeypis notkun og notkun án nets þýða |
|---|---|
| Uppsett skjáborðs- eða farsímaapp | Þú getur notað Mochi án nets og án reiknings. Gögnin eru geymd á tækinu, svo eitt uppsett app getur nægt fyrir allt vinnuflæðið án endurgjalds. |
| Vefapp án Pro | Efnið er geymt í staðbundinni geymslu vafrans. Mochi varar við því að vafri geti hreinsað þessi gögn án fyrirvara. |
| Sama safn á mörgum tækjum | Sjálfvirk samstilling milli tækja er Pro-eiginleiki, þótt hvert uppsett app geti virkað án nets. |

Notkun án nets og samstilling eru tveir aðskildir eiginleikar. Þú þarft ekki Pro eingöngu til að búa til spjöld eða rifja upp í niðurhöluðu appi. Þú þarft það ef sama uppfærða safnið á að fylgja þér sjálfkrafa úr fartölvunni í símann. Taktu öryggisafrit á eigin sniði appsins af mikilvægum gögnum á ókeypis leiðinni svo eina eintakið sé ekki á tækinu eða, það sem verra er, í vafrageymslunni.

Ef virkni án nets ræður úrslitum skaltu bera saman nákvæma notkun á þínum tækjum í [Virkar Anki án nets?](/blog/does-anki-work-offline/) og almennari [leiðarvísinum um námsspjaldaforrit án nets](/blog/best-offline-flashcards-app/).

## Markdown-námsspjöld eru helsta ástæðan til að velja Mochi

Raunverulegur kostur Mochi er hvernig Markdown breytir grunnefninu sem þú heldur við.

Mochi-spjald er áfram læsilegt sem texti. Sama skjal getur innihaldið stutta skýringu, kóðablokk, tengla á skyldar hugmyndir og skiltákn milli hliða til upprifjunar. Spjöld geta líka notað reiti og sniðmát þegar endurtekið skipulag skiptir máli. Þegar sniðmát er notað birtir Mochi Markdown-texta sniðmátsins með staðgenglum fyrir reiti og hunsar eigin Markdown-texta spjaldsins við birtingu, án þess að eyða honum.

Anki byggist á annarri grunnhugmynd. Færsla geymir reiti og [spjaldasniðmát](https://docs.ankiweb.net/templates/intro.html) ráða hvaða reitir birtast og hvaða spjöld verða til. Sniðmát nota HTML fyrir uppbyggingu og CSS fyrir útlit. Ein orðaforðafærsla getur því myndað bæði spjöld þar sem þú þekkir orðið og spjöld þar sem þú þarft að kalla það sjálfur fram, á meðan grunngögnin haldast á einum stað.

Þessi uppbygging gefur Anki meira svigrúm fyrir skilyrta framsetningu, sjálfvirkt mynduð spjaldaafbrigði, innslátt svara, sérsniðið útlit og vinnuflæði sem viðbætur víkka út. Hún þýðir líka að Anki er ekki námsspjaldaforrit sem byggist frá grunni á Markdown. Markdown-vinnuflæði í Anki þarf aukalega umbreytingu eða viðbót.

Hagnýta spurningin er einföld: viltu glósu sem getur orðið að spjaldi eða skipulagða færslugerð sem getur myndað mörg spjöld? Mochi leggur áherslu á hið fyrra. Anki leggur áherslu á hið síðara.

## Mochi býður nú líka FSRS fyrir dreifðar endurtekningar

Samanburður sem segir að Mochi hafi ekki FSRS er úreltur. Mochi bætti við prufuútgáfu af FSRS árið 2025 og hefur haldið áfram að gefa út lagfæringar á áætlunarkerfinu. Samt er [eigin reiknirit Mochi enn sjálfgefið](https://mochi.cards/docs/reviewing/fsrs/).

Sjálfgefna reikniritið breytir bilum milli upprifjana með föstum margföldurum eftir hvert svar sem þú manst eða gleymir. Skiptu yfir í FSRS í Review Settings (upprifjunarstillingum) og spjöld sem þegar eru lærð færast yfir í FSRS án þess að tapa sögu sinni. Þú getur stillt hlutfall svara sem þú stefnir á að muna, slegið inn sérsniðnar færibreytur og skipt til baka síðar.

Mochi heldur tveggja valkosta svarmati sínu með báðum áætlunarkerfum:

- **Forgot** (Gleymdi) samsvarar Again (Aftur) í FSRS.
- **Remembered** (Mundi) samsvarar Good (Gott) í FSRS.

Leiðbeiningar Mochi segja að tveggja valkosta svarmat virki með FSRS, en við það tapist hluti upplýsinganna sem Hard (Erfitt) og Easy (Auðvelt) myndu veita. Kerfið tekur við sérsniðnum færibreytum sem hafa verið fínstilltar, en hefur ekkert innbyggt fínstillingarverkfæri; til að reikna persónulegar færibreytur þarf utanaðkomandi FSRS-fínstillingarverkfæri og upprifjunarsögu úr Mochi.

[FSRS-stillingar Anki](https://docs.ankiweb.net/deck-options.html#fsrs) ganga lengra. Hægt er að tengja markmið um hlutfall svara sem þú manst og færibreytur við forstillingar, innbyggða fínstillingarverkfærið getur lagað færibreytur að upprifjunarsögunni og hermirinn áætlar fjölda upprifjana eða námsmínútna við mismunandi stillingar. Anki skráir líka fjórar niðurstöður: Again (Aftur), Hard (Erfitt), Good (Gott) og Easy (Auðvelt).

Þessir aukahnappar hjálpa aðeins ef þú notar þá á samræmdan hátt. Í handbók Anki merkir Hard að þér hafi tekist að rifja svarið upp. Ef þú ýtir á Hard þegar þú gleymdir svarinu gefurðu FSRS rangar upplýsingar og getur fengið of löng bil milli upprifjana.

Veldu tveggja valkosta upprifjun Mochi ef það að meta einfaldlega hvort þú mundir svarið heldur æfingunni skýrri. Veldu Anki ef þú vilt fleiri upplýsingar úr svarmatinu og munt nota fínstillingarverkfærið, stillingar fyrir hlutfall svara sem þú vilt muna, forstillingar eða vinnuálagsherminn. Um reikniritin sjálf, fremur en öppin, sjá [FSRS eða SM-2](/blog/fsrs-vs-sm-2/).

## Þú greiðir fyrir ólíka hluti í Mochi og Anki

Við nám á einni tölvu geta bæði forritin verið ókeypis. Kostnaðurinn kemur fram á ólíkum stöðum þegar fleiri tæki bætast við.

Mochi rukkar **US$5 á mánuði** fyrir Pro-samstillingu og innifelur birtingu stokka, kvika reiti, gervigreindarsamþættingu og aðstoð. Skjáborðsforrit Anki eru ókeypis og [opinberi Anki-vefurinn](https://apps.ankiweb.net/) lýsir AnkiWeb-samstillingu sem ókeypis. AnkiMobile er opinbera gjaldskylda appið fyrir iPhone og iPad; AnkiDroid er ókeypis Android-biðill sem er þróaður sjálfstætt.

Svarið við „Hvort er ódýrara?“ fer því eftir tækjunum þínum:

- ein tölva: bæði geta verið ókeypis;
- margar tölvur eða Android-tæki: ókeypis hýst samstilling Anki kemur í veg fyrir áskriftarkostnað;
- iPhone eða iPad: hjá Anki greiðirðu einu sinni fyrir appið, en hjá Mochi krefst samstilling milli tækja reglulegra greiðslna fyrir Pro-áskrift;
- Mochi-notendur sem vilja hvort sem er birtingu stokka, kvika reiti eða gervigreindarsamþættingu geta litið á samstillinguna sem einn hluta pakkans fremur en allan kostnaðinn.

Athugaðu App Store á þínu markaðssvæði áður en þú berð saman nákvæman heildarkostnað á iOS. Hér er ekkert eitt verð úr appaverslun gefið upp, enda getur það verið mismunandi eftir mörkuðum.

## Hýsing Mochi er ekki það sama og staðbundin notkun

Þremur hugtökum er oft steypt saman í eitt:

- **Staðbundin gögn í forgangi (local-first)** þýðir að vinnueintakið er á tækinu þínu og appið getur haldið áfram án skýjaþjónustu sinnar.
- **Opinn hugbúnaður** þýðir að frumkóðinn er aðgengilegur með leyfi sem heimilar skoðun og breytingar.
- **Eigin hýsing** þýðir að varan lýsir studdri leið til að keyra viðkomandi þjónustu á eigin innviðum.

Mochi lýsir skýrt hvernig það vinnur fyrst og fremst með staðbundin gögn. Kjarnaappið er ekki kynnt sem opinn hugbúnaður: tengillinn „Open source“ í síðufæti opinbera vefsins leiðir á [safn samþættinga](https://github.com/mochi-cards/open-source), ekki kjarna appsins. Opinberi vefurinn lýsir heldur ekki studdum staðgengli fyrir Pro-samstillingu sem hægt er að hýsa sjálfur.

Ef þú leitar að **hýsingu Mochi** vegna þess að þú vilt eigin þjón liggja mörkin hér: þú getur geymt staðbundin gögn og afrit á eigin sniði appsins, en skjalfesta leiðin milli tækja er Mochi Pro. Staðbundin gögn veita gagnleg yfirráð yfir gögnunum; þau fela ekki í sér eigin hýsingu.

Aðalkóðasafn Anki er [með AGPL-leyfi, útgáfu 3 eða nýrri](https://github.com/ankitects/anki/blob/main/LICENSE), með tilgreindum undantekningum fyrir suma kerfishluta. Opinbera handbókin lýsir líka [samstillingarþjóni í eigin hýsingu](https://docs.ankiweb.net/sync-server.html) fyrir vana notendur. Sá þjónn kemur í stað AnkiWeb-samstillingar fyrir samhæfa biðla; hann er ekki sjálfhýst afrit af AnkiWeb-vefnum. Anki gerir ráð fyrir að rekstraraðilinn leysi sjálfur vandamál tengd skipanalínu, neti, eldvegg, samskiptareglum og uppfærslum.

## Hvað innflutningur úr Anki varðveitir og hverju hann breytir

Samkvæmt [innflutningsleiðbeiningum Mochi](https://mochi.cards/docs/import-and-export/importing/) tekur það við Anki-skrám á `.apkg`-sniði, þar á meðal upprifjunarsögu. En innflutt gögn eru ekki endilega jafngild upprunalegu gögnunum.

Við innflutning breytir Mochi HTML í Markdown og fjarlægir CSS og JavaScript. Þetta er umbreyting milli sniða í tveimur ólíkum spjaldakerfum. Einfalt efni á framhlið og bakhlið er auðveldasta tilvikið. Spjald sem byggist á útliti, rökvirkni sniðmáts, innslætti eða JavaScript þarf að skoða eftir innflutning.

Upprifjunarsagan krefst líka meðvitaðs vals við útflutning. [Útflutningshandbók Anki](https://docs.ankiweb.net/exporting.html) segir að **Include Scheduling Information** (Taka áætlunarupplýsingar með) ráði því hvort upprifjunarsagan fari í pakkann. Ef sá valkostur er óvirkur getur Mochi ekki endurheimt sögu sem `.apkg`-skráin innihélt aldrei.

Jafnvel þegar sagan flyst með skaltu ekki búast við sömu dagsetningum næstu upprifjana. Öppin tvö geta notað ólík áætlunarkerfi, svarmat, markmið um hlutfall svara sem þú manst, færibreytur, námsskref og stillingar stokka. Varðveittir atburðir gefa nýja áætlunarkerfinu gögn til að byggja á; þeir gera kerfin ekki eins.

## Öryggisafrit á eigin sniði og færanlegur texti þjóna ólíkum tilgangi

Áður en þú flytur nokkuð skaltu geyma öryggisafrit sem getur endurheimt upprunalega kerfið. Læsilegur útflutningur er gagnlegur, en dugir ekki alltaf til endurheimtar.

[Leiðbeiningar Mochi um afrit](https://mochi.cards/docs/getting-started/backing-up/) lýsa tveimur leiðum til að varðveita gögn á eigin sniði kerfisins:

- Afrit af allri notandamöppunni varðveitir efni, upprifjunarsögu, viðhengi, stillingar appsins og innskráningarstöðu.
- Útflutningur á `.mochi`-sniði varðveitir stokka, spjöld, sniðmát og reiti, viðhengi, merki og lýsigögn, upprifjunarsögu, röð spjalda og uppbyggingu stokka.

[Markdown- og CSV-útflutningur Mochi](https://mochi.cards/docs/import-and-export/exporting/) er ætlaður til að flytja efni milli kerfa. Markdown býr til eina skrá fyrir hvert spjald og möppur fyrir undirstokka, en sleppir upprifjunarsögu, röð spjalda, sniðmátum og lýsigagnamerkjum, nema merkin séu í Markdown-textanum. CSV getur flutt út reiti sniðmáts eða framhlið og bakhlið eins og þær birtast, en varðveitir hvorki upprifjunarsögu né sniðmát. Lýsigagnamerki varðveitast aðeins ef þau eru hluti af efninu.

Anki gerir svipaðan greinarmun:

- `.colpkg` flytur út allt safnið með upprifjunaráætlunum og getur tekið margmiðlun með. Við innflutning koma spjöldin úr pakkanum í stað spjaldanna í Anki-safninu sem tekur við honum.
- `.apkg` flytur út einn stokk og undirstokka hans, með valkostum fyrir áætlunarupplýsingar, forstillingar og margmiðlun.
- Færslur á venjulegu textasniði nota reiti aðskilda með dálkaskiptatáknum og innbyggðu HTML-sniði. Þær varðveita breytanlegt efni, ekki alla virkni safnsins.

Flutningur úr Mochi aftur í Anki fer yfirleitt í gegnum CSV. Anki getur [tengt textadálka við reiti færslna](https://docs.ankiweb.net/importing/text-files.html), en tenglar Mochi, virkni margra hliða, sniðmát og upprifjunarsaga verða ekki að jafngildum Anki-hlutum í gegnum þá skrá. Geymdu `.mochi`-útflutninginn áfram þótt Anki-afritið virðist rétt.

## Prófaðu dæmigerðan stokk þannig að hægt sé að fara til baka

Staðfesting í innflutningsglugga sannar að skrá var samþykkt. Hún sannar ekki að raunverulega safnið þitt virki enn eða að þú getir flutt nothæft efni til baka. Prófaðu báðar áttir á meðan venjulegi Anki-notandaprófíllinn þinn er ósnertur.

1. **Taktu afrit af öllu Anki-safninu.** Flyttu út `.colpkg` með margmiðlun og geymdu utan notandaprófílsins sem þú vinnur í.
2. **Staðfestu að afritið opnist.** Búðu til tóman tímabundinn Anki-notandaprófíl og flyttu `.colpkg`-skrána inn þar. Innflutningur safnpakka kemur í stað móttökusafnsins og þess vegna skiptir tímabundni prófíllinn máli.
3. **Búðu til dæmigerðan stokk innan tímabundna prófílsins.** Hafðu hann nógu lítinn til að skoða hvert spjald fyrir sig, en taktu með þá virkni sem þú reiðir þig á: grunnspjöld og spjöld í öfuga átt, eyðufyllingar, sérsniðin sniðmát, CSS, JavaScript, myndir, hljóð, jöfnur, merki, stokka með undirstokkum og upprifjunarsögu.
4. **Flyttu stokkinn út sem `.apkg`.** Taktu með áætlunarupplýsingar, forstillingar og margmiðlun þegar það skiptir máli. Þessir valkostir setja gögnin í Anki-pakkann; þeir lofa ekki að Mochi endurskapi hverja einustu stillingu.
5. **Flyttu inn í nýjan Mochi-stokk.** Haltu daglega Anki-notandaprófílnum og biðröð hans fyrir næstu upprifjanir óbreyttum.
6. **Skoðaðu áður en þú rifjar upp.** Berðu saman efni, snið, reiti, margmiðlun, merki, uppbyggingu stokka og sögu. Gefðu sérstakan gaum að öllu sem byggðist á HTML, CSS, JavaScript eða sjálfvirkt mynduðum spjaldaafbrigðum.
7. **Veldu áætlunarkerfið meðvitað.** Mochi byrjar með eigin reiknirit. Kveiktu aðeins á FSRS ef það er kerfið sem þú hyggst nota eftir prufuna.
8. **Rifjaðu upp með afritinu í eina venjulega viku.** Mettu hvernig gengur að breyta Markdown, vinna í New cards (Ný spjöld), velja Remembered/Forgot (Mundi/Gleymdi), nota appið án nets og, ef þú greiddir fyrir samstillingu, samstilla á þeim tækjum sem þú hefur í raun meðferðis.
9. **Prófaðu leiðina til baka.** Flyttu Mochi-prufustokkinn út sem `.mochi` fyrir afrit á eigin sniði og sem CSV fyrir Anki. Notaðu CSV með reitagildum þegar endurnýtanlegir reitir skipta máli; notaðu CSV með birtum hliðum þegar þú þarft aðallega sýnilegt efni framhliðar og bakhliðar. Flyttu CSV-skrána inn í annan tóman Anki-notandaprófíl og tengdu dálkana við hentuga færslugerð.
10. **Skráðu allt tap sem þú sættir þig við.** Athugaðu flutninginn í hvora átt fyrir sig. Nákvæmt útlit, virkni margra hliða, viðbætur, sjálfvirkt mynduð afbrigði, svarmat, saga eða dagsetningar næstu upprifjana geta skipt meira máli í daglegri notkun en í samanburðartöflu.

Leiðin til baka með CSV flytur efni en endurheimtir ekki Mochi að fullu: skráin flytur hvorki upprifjunarsögu né sniðmát og lýsigagnamerki fylgja aðeins með ef þau eru hluti af efninu. Ef Mochi leysir ekki vandamálið sem þú nefndir skaltu eyða prufustokknum og halda áfram með upprunalega Anki-notandaprófílinn. Ef það leysir vandamálið skaltu flytja einn raunverulegan stokk í einu og geyma bæði Anki-afritið á `.colpkg`-sniði og Mochi-afritið á `.mochi`-sniði í gegnum nokkrar venjulegar upprifjunarlotur.

## Hverjum henta Mochi-námsspjöld?

Mochi hentar vel þegar:

- þú notar þegar Markdown til að skrifa og skipuleggja hugsanir;
- glósur og upprifjunarspjöld eiga heima á sama tengda vinnusvæði;
- þú vilt einfalda ákvörðun, Remembered/Forgot (Mundi/Gleymdi), í stað fjögurra einkunna;
- notkun án nets á einu tæki nægir fyrir ókeypis vinnuflæðið eða Pro-samstilling er US$5 á mánuði virði;
- safnið þitt er nýtt eða nógu einfalt til að umbreyting úr Anki feli í sér litla áhættu.

Haltu þig við Anki þegar:

- færslugerðirnar þínar mynda mörg mikilvæg spjaldaafbrigði;
- HTML/CSS-sniðmát, JavaScript, viðbætur eða deildir stokkar eru hluti af kerfinu;
- ókeypis samstilling milli tækja skiptir meira máli en að skrifa í Markdown;
- þú vilt FSRS-fínstillingarverkfæri Anki, stjórn á forstillingum, fjórar einkunnir og vinnuálagshermi;
- margra ára upprifjunargögn og sérsniðin virkni skila þegar góðum árangri.

Skynsamlegasti valkosturinn við Mochi fer eftir því hvers vegna hvorugt þessara tveggja kerfa hentar. Fyrir nýtt og einfaldara safn bjóða [eiginleikar Nibomo](/is/features/) upp á FSRS-upprifjun, nám án nets og samstillingu, möguleika á að flytja spjöld, merki og margmiðlun, aðgang fyrir gervigreindarfulltrúa og skjalfesta leið að eigin hýsingu. Ég þróa það og takmarkanirnar skipta máli: það kemur ekki í stað tengdrar Markdown-glósubókar Mochi eða vel þróaðs sniðmáta- og viðbótakerfis Anki. [Leiðbeiningarnar fyrir fyrstu skrefin](/docs/getting-started/) sýna núverandi leiðir fyrir hýstu þjónustuna, farsíma, gervigreindarfulltrúa og eigin hýsingu.

## Hvernig á að meta valið

Mochi er meira en fallegra Anki-viðmót. Grunnhugmyndin er að Markdown-glósa, tengd þekkingarfærsla og spjald fyrir dreifðar endurtekningar geti verið einn og sami hluturinn. Ókeypis leiðin nær yfir vinnu án nets og án reiknings; Pro bætir við hýstum eiginleikum, þar á meðal samstillingu milli tækja.

Þetta er góður kostur fyrir námsmann sem er að byrja á nýju safni þar sem Markdown er í forgrunni. Það getur líka borgað sig að skipta úr Anki ef prófun með dæmigerðum stokki sýnir að innbyggður Markdown-stuðningur og tveggja valkosta upprifjun leysi raunveruleg vandamál í daglegri vinnu.

Fyrir vanan Anki-notanda þarf hins vegar að sýna fram á ávinninginn af því að skipta. Taktu afrit af safninu, prófaðu spjöldin sem hafa mesta sérsniðna virkni og haltu þig við Anki nema Mochi bæti vinnuflæðið frá viku til viku nægilega til að réttlæta að sleppa þeim tilteknu eiginleikum í sniði, sniðmátum, áætlunum og vistkerfinu sem verða eftir.
