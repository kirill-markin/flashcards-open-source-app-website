---
title: "Röð nýrra spjalda í Anki – val, röðun og athugun á biðröðinni"
description: "Sex spjalda dæmi sýnir hvernig Anki velur ný spjöld og raðar þeim. Athugaðu mörk undirstokka, vistuð stöðunúmer og hvaða stokk þú velur til að læra."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "röð nýrra spjalda í Anki"
  - "valröð nýrra spjalda í Anki"
  - "röðun nýrra spjalda í Anki"
  - "hækkandi stöðunúmer í Anki"
  - "spjöld í óvæntri röð í Anki"
---

Í Anki getur nýtt spjald með stöðunúmerið 10 birst á eftir spjaldi með númerið 60. Ef þú lærir úr yfirstokki með **Eftir stokk** (**Deck**) sem valstillingu og **Í valröð** (**Order gathered**) sem röðunarstillingu getur Anki lokið við að velja spjöld úr fyrri undirstokknum áður en kemur að þeim sem geymir spjald númer 10. Að raða eftir stofndegi í spjaldavafranum hefur engin áhrif á námsbiðröðina.

Anki vinnur í tveimur skrefum. Fyrst **velur** forritið spjöld innan marka dagsins. Síðan **raðar** það spjöldunum sem komust í valið. Byrjaðu á að athuga hvort Anki velji röng spjöld eða hvort réttu spjöldin birtist í óvæntri röð.

Leiðbeiningarnar eiga við um venjulega stokka í tölvuútgáfu Anki. Sex spjalda dæmið var reiknað á blaði út frá gildandi handbók og útgefinni útgáfu af [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). Útreikningurinn var yfirfarinn 6. október 2026 án þess að keyra dæmið í Anki.

![Maður heldur á fjórðu vínylplötunni yfir auðu hólfi í plöturekka við hlið þriggja platna. Fyrir aftan hann eru tveir kassar með plötum sem urðu ekki fyrir valinu.](/blog/anki-new-card-order.png)

## Veldu röðina sem þú vilt fá

Opnaðu **Stillingar** (**Options**) fyrir stokkinn sem þú smellir á til að læra og finndu **Birtingarröð** (**Display Order**). Þegar þú lærir úr yfirstokki ræður birtingarröð hans ferðinni í allri lotunni, líka fyrir spjöld úr undirstokkunum.

| Æskileg niðurstaða | Valröð nýrra spjalda (New Card Gather Order) | Röðun nýrra spjalda (New Card Sort Order) |
| --- | --- | --- |
| Fara eftir hækkandi stöðunúmerum í valda stokknum og öllum undirstokkum hans | Eftir hækkandi stöðunúmeri (Ascending position) | Í valröð |
| Taka undirstokkana í stafrófsröð og fara eftir stöðunúmerum innan hvers þeirra | Eftir stokk | Í valröð |
| Halda sama úrvali og birta spjöldin í tilviljunarkenndri röð | Sú valstilling sem þú kýst | Af handahófi (Random) |

Þessar samsetningar fylgja skilgreiningum ensku handbókar Anki á [vali nýrra spjalda](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) og [röðun þeirra](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order). **Eftir hækkandi stöðunúmeri** miðar við vistuð stöðunúmer nýju spjaldanna. Sú röð getur verið önnur en stofnröðin. Röðin sem spjöld eru sett inn í og handvirk færsla þeirra í biðröðinni geta breytt númerunum.

Áður en þú breytir stillingunum skaltu athuga hvaða forstillingu stokkurinn notar og hvaða aðrir stokkar deila henni. Birtingarstillingarnar tilheyra forstillingunni. Ef breytingin á aðeins að gilda um þennan stokk skaltu fyrst [gera sérstaka forstillingu fyrir hann](/blog/anki-deck-options-presets/) samkvæmt leiðbeiningunum á ensku. Fyrir dagleg mörk má víkja frá forstillingunni með **Þessi stokkur** (**This deck**) eða **Aðeins í dag** (**Today only**). Birtingarstillingarnar gilda áfram um alla stokka sem nota sömu forstillingu.

## Finndu út hvaða fjögur spjöld komast að

Hugsum okkur venjulegan yfirstokk sem heitir `OrderLab` og inniheldur tvo undirstokka með samtals sex spjöldum. Hvert spjald kemur úr sinni eigin færslu af gerðinni **Grunnfærsla** (**Basic**) sem gefur eitt spjald af sér. Öll sex hafa því sama spjaldgerðarnúmer. Ekkert þeirra á systurspjald, það er annað spjald úr sömu færslu.

| Spjald | Stokkur | Vistað stöðunúmer nýs spjalds |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Gerum ráð fyrir að öll sex spjöldin séu ný. Ekkert þeirra er falið tímabundið, tekið úr umferð eða í síuðum stokki. Í upphafi eru engin önnur spjöld, engar endurtekningar í námsfasa og engin spjöld til upprifjunar. Engu spjaldi hefur verið svarað í dag. Enginn stokkur er ofar en `OrderLab` í stigveldinu og gildandi upprifjunarmörk rúma öll sex nýju spjöldin.

Veldu **OrderLab** til að læra. Gildandi hámark nýrra spjalda er **4** í `OrderLab`, **3** í `01 First` og **2** í `02 Second`. Engin tímabundin frávik gilda. Notaðu **Í valröð** í báðum samanburðartilvikum. Reiknaðu bæði tilvikin á blaði út frá sama óbreytta safninu og svaraðu engum spjöldum á milli.

Með valstillingunni **Eftir stokk** fer Anki svona að.

1. Samkvæmt stafrófsröð kemur `01 First` á undan `02 Second`.
2. Anki velur **A, B, C** í röð eftir stöðunúmeri. Þá eru komin þrjú spjöld úr `01 First` og eitt pláss er eftir í yfirstokknum.
3. Anki velur **D** úr `02 Second` og nær þar með fjögurra spjalda hámarki yfirstokksins.

Spjöldin ættu að birtast í fyrsta sinn í röðinni **A → B → C → D**. E og F komast ekki í valið.

Með stillingunni **Eftir hækkandi stöðunúmeri** tekur Anki spjöld úr báðum undirstokkunum til greina í röðinni **D → A → E → B → F → C**. Fyrstu fjögur spjöldin rúmast innan allra marka. Tvö koma úr `02 Second` og tvö úr `01 First`, samtals fjögur. Þar lýkur valinu.

Vænt birtingarröð er **D → A → E → B**. C og F komast ekki að. [Valkóðinn í útgáfu Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) tekur mið af mörkum stokksins og yfirstokka hans þegar hvert spjald er tekið inn.

Mörkin í `02 Second` leyfa allt að tvö spjöld. Þegar valið er eftir stokk kemur aðeins eitt þaðan því `01 First` hefur þegar fyllt þrjú af fjórum plássum. Með hækkandi stöðunúmerum koma tvö spjöld úr hvorum stokki vegna þess hvernig númerin raðast í þessu dæmi. Í öðru safni getur skiptingin orðið önnur.

## Hleyptu öllum sex að til að greina á milli vals og birtingarraðar

Í næsta samanburði á blaði skaltu stilla mörkin þannig að öll spjöldin rúmist. Settu hámark yfirstokksins í **6**, hámark `01 First` í **3** og hámark `02 Second` í **3**. Haltu röðunarstillingunni **Í valröð**.

| Valstilling | Mörk í yfirstokki / 01 First / 02 Second | Vænt röð við fyrstu birtingu |
| --- | --- | --- |
| Eftir stokk | 6 / 3 / 3 | A → B → C → D → E → F |
| Eftir hækkandi stöðunúmeri | 6 / 3 / 3 | D → A → E → B → F → C |

Báðar stillingar velja öll sex spjöldin. Nú er eini munurinn birtingarröðin. Ef aðeins hámark yfirstokksins fer upp í sex og hámark `02 Second` stendur í tveimur komast fimm spjöld að. F verður enn út undan. Hækkunin er liður í útreikningnum á blaði og felur ekki í sér ráðleggingu um að fjölga nýjum spjöldum á dag.

## Röðunin getur ekki bætt við spjaldi sem komst ekki í valið

Farðu aftur í upphaflegu mörkin **4 / 3 / 2** og breyttu aðeins **Röðun nýrra spjalda** í **Af handahófi**.

| Valstilling | Spjöld sem má raða af handahófi | Spjöld sem röðunin getur ekki bætt við |
| --- | --- | --- |
| Eftir stokk | A, B, C, D | E, F |
| Eftir hækkandi stöðunúmeri | D, A, E, B | C, F |

Anki stokkar upp birtingarröðina innan hvors úrvals. Taflan segir því hvaða spjöld geta birst. Nákvæm röð ræðst af slembiröðuninni. [Röðunarkóðinn í útgáfu Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) raðar spjöldunum sem þegar hafa verið valin.

Stillingin **Eftir spjaldgerð, síðan í valröð** (**Card type, then order gathered**) vinnur líka með spjöldin sem þegar hafa komist í valið. Öll sex spjöldin úr grunnfærslunum hafa sama spjaldgerðarnúmer og haldast því í valröð í þessu dæmi.

Tökum annað dæmi sem snýst eingöngu um röðun. Úr færslum með fleiri en einu spjaldsniðmáti hafa fjögur spjöld þegar verið valin í röðinni **W (gerð 2), X (gerð 1), Y (gerð 2), Z (gerð 1)**. Röðun eftir spjaldgerð gefur **X → Z → W → Y**. Gerð 1 kemur fyrst og innan hvorrar gerðar helst valröðin. Dæmið hefst eftir að valinu lýkur og segir því ekkert um hvaða systurspjöld kæmust að miðað við stillingar þínar fyrir tímabundna felun.

Spjaldgerðarnúmerið segir til um sæti spjaldsniðmátsins innan færslugerðarinnar. Hvort spjald reynir á að þekkja svar eða kalla það fram úr minni fer eftir sniðmátinu. Skoðaðu spurningarnar sjálfar áður en þú gerir ráð fyrir að röðun eftir spjaldgerð setji allar spurningar sem ganga í framátt fremst.

## Athugaðu stöðunúmerin í spjaldavafranum áður en þú breytir þeim

Opnaðu **Spjaldavafrann** (**Browse**), veldu **Spjöld** (**Cards**) og leitaðu í stokknum og undirstokkum hans. Í dæminu er leitin svona.

```text
deck:OrderLab is:new
```

Notaðu valmyndina í dálkhausnum til að birta dálkana **Spurning** (**Question**), **Spjald** (**Card**), **Stokkur** (**Deck**), **Á dagskrá** (**Due**) og **Stofnað** (**Created**). Fyrir nýtt spjald sýnir **Á dagskrá** stöðu þess í biðröðinni. **Stofnað** sýnir hvenær færslan að baki spjaldinu var búin til. **Röðunarreitur** (**Sort Field**) sýnir þann reit færslunnar sem var valinn til röðunar. Með því að raða eftir dálki breytirðu aðeins birtingu töflunnar í spjaldavafranum. Vistuðu stöðunúmerin og valstilling námslotunnar haldast óbreytt. Í ensku handbók Anki má sjá [hvað hver dálkur í spjaldavafranum sýnir](https://docs.ankiweb.net/manual/browsing#columns).

Leitin `is:new` getur líka skilað nýjum spjöldum sem eru falin tímabundið eða tekin úr umferð. Hjá þeim birtist gildið í **Á dagskrá** innan sviga. Með þrengri leit geturðu sleppt þeim og spjöldum sem eru í síuðum stokkum í augnablikinu.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Enska handbók Anki lýsir [leit eftir stöðu spjalda](https://docs.ankiweb.net/manual/searching#card-state) og [leit eftir stokkum](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Ef heiti stokksins inniheldur bil skaltu setja það innan gæsalappa, til dæmis `deck:"My Deck"`. Leitarniðurstöðurnar duga þó ekki til að spá fyrir um biðröð dagsins. Mörkin og sjálfvirk tímabundin felun systurspjalda geta fækkað spjöldunum sem komast að. Í [leiðbeiningum okkar á ensku um tímabundna felun og að taka spjöld úr umferð](/blog/anki-bury-vs-suspend/) kemur fram hvenær þessi spjöld eru ótiltæk.

Ef stöðunúmerin gefa þegar þá röð sem þú vilt skaltu láta þau standa. Ef þau þurfa að breytast skaltu skrá gömlu númerin, velja afmarkaðan hóp nýrra spjalda og nota **Spjöld → Breyta stöðu** (**Cards → Reposition**). Skoðaðu stillingarnar í glugganum fyrst. **Hliðra stöðu spjalda sem fyrir eru** (**Shift position of existing cards**) getur líka breytt hærri stöðunúmerum hjá spjöldum utan valsins. Án hliðrunar geta nýju númerin skarast við númer sem þegar eru í notkun. Ef tvö eða fleiri spjöld fá sama númer segir númerið eitt og sér ekki til um birtingarröð þeirra. Sjá [aðgerðina til að breyta stöðu í ensku handbók Anki](https://docs.ankiweb.net/manual/browsing#cards).

Þú getur breytt vali eða röðun án þess að hreinsa feril náms og upprifjunar. Beindu athuguninni að stöðunúmerum nýrra spjalda og birtingarröðinni.

## Athugaðu hvaða stokk þú velur og hversu mörg spjöld komast enn að í dag

Ef þú velur `OrderLab::02 Second` beint í upphaflega dæminu koma aðeins D, E og F til greina. Með tveggja spjalda hámarki stokksins, vali eftir **hækkandi stöðunúmeri** og röðun **í valröð** má búast við **D → E**. Öll fjögur pláss yfirstokksins eru enn laus, svo mörk hans geta ekki fækkað þessum tveimur spjöldum, jafnvel þótt þau gildi. Ef þú velur yfirstokkinn með **Eftir stokk** og mörkunum **4 / 3 / 2** færðu **A → B → C → D**.

Breyting á birtingarröð `02 Second` hefur engin áhrif á lotu sem þú byrjar úr `OrderLab`. Stokkurinn sem þú velur ræður birtingarröðinni og setur heildarhámarkið. Gildandi mörk undirstokkanna eiga líka við. **Mörk reiknuð frá efsta stokki** (**Limits start from top**) ræður því hvort mörk stokka ofar í stigveldinu gilda líka þegar þú lærir beint úr undirstokki. Enska handbók Anki lýsir [reglunum um undirstokka](https://docs.ankiweb.net/manual/deck-options#subdecks) og [stillingunni fyrir mörk stokka ofar í stigveldinu](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Athugaðu líka upprifjunarmörkin. Sjálfgefið takmarka þau líka fjölda nýrra spjalda. Stillingin **Ný spjöld fylgja ekki upprifjunarmörkum** (**New cards ignore review limit**) breytir því. Bæði sú stilling og **Mörk reiknuð frá efsta stokki** gilda um allt safnið, eins og sést í [kóðanum fyrir viðmót daglegra marka í útgáfu Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Skráðu hvernig báðar eru stilltar áður en þú notar hámark nýrra spjalda til að áætla hvað kemst að í dag.

Notaðu **Forskoðun** (**Preview**) í spjaldavafranum til að skoða spurningar án þess að svara þeim. Skráðu eftirfarandi fyrir næstu venjulegu námslotu.

| Það sem þú skráir | Það sem skráningin skýrir |
| --- | --- |
| Stokkurinn sem þú smellir á til að læra, forstilling hans og stillingar fyrir val og röðun | Hvaða birtingarröð gildir í lotunni? |
| Spjöldin sem þú býst við að sjá og vistuð stöðunúmer þeirra | Liggur vandinn í því hvaða spjöld eru valin eða í hvaða röð þau birtast? |
| Mörk nýrra spjalda og upprifjunar, frávik fyrir stokkinn eða daginn og spjöld sem þú hefur þegar svarað í dag | Hversu mörg spjöld komast enn að? |
| Mörk stokka ofar í stigveldinu og báðar stillingarnar fyrir mörk sem gilda um allt safnið | Hvaða viðbótarmörk gilda? |
| Spjöld sem eru falin tímabundið, tekin úr umferð eða í síuðum stokki, ásamt systurspjöldum | Hvaða spjöld virðast koma til greina en kunna að vera ótiltæk? |
| Röðin sem þú sérð við fyrstu birtingu, skráð sérstaklega frá endurtekningum í námsfasa | Birtast nýju spjöldin í þeirri röð sem þú bjóst við? |

Þegar þú hefur svarað nýju spjaldi geta endurtekningar í námsfasa skotist inn í lotuna. **Röð nýrra spjalda og upprifjunar** (**New/Review Order**) ræður því hvort ný spjöld birtast á undan upprifjunarspjöldum, á eftir þeim eða í bland við þau. Stillingarnar fyrir val og röðun gilda áfram um nýju spjöldin. [Kóðinn sem byggir biðröðina í útgáfu Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) sameinar þessa flokka eftir að nýju spjöldunum hefur verið raðað.

Ljúktu athuguninni þegar bæði spjöldin sem þú býst við og röð þeirra við fyrstu birtingu stemma við það sem þú sérð. Ef enn ber á milli skaltu halda til haga stöðunúmerunum, stillingunum, valda stokknum, útgáfu Anki og röðinni sem þú sást. Hafðu viðeigandi viðbætur með í athuguninni þegar þú leitar að orsökinni. Ef markmiðið er að æfa tiltekið efni aukalega skaltu fylgja sérstöku [leiðbeiningunum á ensku um æfingu með síuðum stokki án þess að breyta námsáætluninni](/blog/anki-filtered-decks-without-rescheduling/).
