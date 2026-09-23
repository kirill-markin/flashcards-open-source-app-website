---
title: "Hvernig á að flytja út spjaldasöfn úr Quizlet árið 2026 (og af hverju Export vantar)"
description: "Flyttu spjaldasafn út úr Quizlet samkvæmt núverandi leiðbeiningum fyrir vefinn. Ef Export vantar skaltu athuga hvort þú eigir safnið, hafir afritað það eða sért í farsímaforritinu."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "hvernig á að flytja út úr Quizlet"
  - "hvernig á að flytja út námsspjöld úr Quizlet"
  - "Quizlet Export hnappinn vantar"
  - "sækja námsspjöld úr Quizlet"
  - "Quizlet í CSV"
  - "Quizlet í Anki"
---

Ef **Export** hnappinn vantar í Quizlet skaltu fyrst athuga tvennt: bjóst þú til upprunalega spjaldasafnið og ertu að nota vefsíðu Quizlet? Aðeins sá sem bjó til upprunalega safnið getur flutt það út, og útflutningur er aðeins í boði á vefnum. Ekki er hægt að flytja út afritað safn, þótt afritið birtist nú í safninu þínu.

Ef þú uppfyllir þessi skilyrði tekur útflutningurinn stutta stund: opnaðu spjaldasafnið á vefnum, veldu **More → Export**, stilltu hvernig hugtökum og skilgreiningum er raðað og veldu **Copy text**. Quizlet vistar ekki spjaldastokkinn sem skrá á tækinu þínu. Það setur textann á klemmuspjaldið, án mynda.

**Staðreyndir yfirfarnar:** 30. ágúst 2026, með hliðsjón af [opinberum leiðbeiningum Quizlet um útflutning](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Starfsmaður skjalasafns ber saman eignarhaldsmerki áður en hann afhendir pöruð textaspjöld; tvær skjalamöppur eru tilbúnar en ljósmyndir verða eftir bak við gler](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Á Export hnappurinn að vera sýnilegur?

Farðu yfir þetta áður en þú reynir að sækja námsspjöld úr Quizlet með öðrum hætti:

| Aðstæður þínar | Á Export að vera í boði? | Næsta skref |
| --- | --- | --- |
| Þú bjóst til upprunalega safnið og opnaðir það á vefsíðu Quizlet | Já, samkvæmt hjálparsíðu Quizlet | Fylgdu skrefunum hér að neðan |
| Þú ert í iOS- eða Android-forritinu | Nei; útflutningur er aðeins í boði á vefnum | Opnaðu Quizlet í vafra og skráðu þig inn |
| Þú afritaðir safn annars notanda | Nei; Quizlet segir að ekki sé hægt að flytja út afrituð söfn | Ekki gera ráð fyrir að afritið opni aðgang að Export |
| Þú getur skoðað safnið en bjóst það ekki til | Nei; skoðunaraðgangur jafngildir ekki eignarhaldi höfundar | Biddu höfundinn um frumskrá eða búðu safnið til aftur úr efni sem þú mátt nota |

Ef þú bjóst til upprunalega safnið en útflutningshnappinn vantar enn skaltu ganga úr skugga um að þú hafir skráð þig inn á reikninginn sem á það og opnað frumritið, ekki afrit. Hjálparsíða Quizlet lýsir engri annarri útflutningsleið. Þá er rétt að hafa samband við þjónustuver Quizlet frekar en að treysta niðurhalstóli sem segist geta farið fram hjá takmörkuninni.

## Hvernig á að flytja út námsspjöld af vefsíðu Quizlet

Fyrir safn sem þú bjóst til:

1. Skráðu þig inn á vefsíðu Quizlet.
2. Veldu **Your library**.
3. Veldu **Flashcard sets**.
4. Opnaðu safnið sem þú vilt flytja út.
5. Opnaðu valmyndina **More**.
6. Veldu **Export**.
7. Veldu hvernig hugtökum og skilgreiningum á að raða.
8. Veldu **Copy text**.
9. Límdu niðurstöðuna í ritil fyrir hreinan texta.

Þetta er allt ferlið eins og það er núna. Enginn lokahnappur til að sækja skrá birtist.

Fyrir venjuleg spjöld með framhlið og bakhlið mæli ég með dálkaskilum (tab) á milli hugtaks og skilgreiningar og línuskilum á milli spjalda. Þetta er hagnýtt ráð um skilju, ekki krafa frá Quizlet. Yfirleitt er auðveldara að fara yfir dálkaskil en kommur, enda eru kommur algengar í venjulegum skilgreiningum.

Vel frágengin skrá með tveimur spjöldum lítur svona út, með einum dálkaskilstaf í miðri hvorri línu:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Hvað fylgir með í útflutningi úr Quizlet?

Quizlet lýsir eiginleikanum afmarkað: hann flytur út **hugtök og skilgreiningar** úr safni sem höfundurinn hefur sjálfur búið til. Þar kemur líka fram að ekki sé hægt að flytja út myndir.

Öruggast er að miða við það sem birtist þegar þú límir textann. Ef texti, skilja eða línuskil eru þar geturðu varðveitt þau í skrá. Hjálparsíða Quizlet lofar ekki að möppur, námsstillingar, snið, upplýsingar um hversu vel þú kannt efnið, upprifjunarsaga eða áætlun um upprifjun fylgi með.

Þetta er því afrit af texta spjaldanna, ekki öryggisafrit sem hægt er að endurheimta í Quizlet. Sami greinarmunur skiptir máli ef þú leitaðir að „sækja námsspjöld úr Quizlet“: Quizlet afritar textann á klemmuspjaldið og þú þarft svo að búa til skrána.

## Vistaðu óbreytt afrit í UTF-8 áður en þú lagfærir nokkuð

Sjáðu til þess að þú getir alltaf farið til baka:

1. Límdu útflutta textann í ritil fyrir hreinan texta.
2. Vistaðu hann með UTF-8 stafakóðun, til dæmis sem `biology-quizlet-raw.txt`.
3. Búðu til afrit sem heitir `biology-quizlet-working.txt`.
4. Láttu frumskrána vera og breyttu aðeins vinnuafritinu.

Áður en þú flytur vinnuskrána inn skaltu fara yfir hana á meðan Quizlet-safnið er enn opið:

- Kveiktu á birtingu ósýnilegra tákna og staðfestu hvar dálkaskil og línuskil eru.
- Leitaðu að skiljunni sem þú valdir inni í hugtökum og skilgreiningum. Auka dálkaskilstafur getur búið til óvæntan þriðja reit.
- Leitaðu að skilgreiningum sem innihalda línuskil; þær geta verið túlkaðar sem aukaspjöld.
- Berðu upphaf, miðju og enda skrárinnar saman við Quizlet, þar á meðal lengstu skilgreiningarnar.
- Lokaðu skránni og opnaðu hana aftur. Athugaðu síðan broddstafi, önnur ritkerfi en það latneska, tákn og bogin gæsalöpputákn.
- Merktu tóma reiti, tvítekningar og óreglulegar línur í stað þess að leiðrétta þær með ágiskunum án þess að taka það fram.

Berðu línufjölda aðeins saman við spjaldafjölda ef hvert spjald tekur nákvæmlega eina línu. Sú flýtileið virkar ekki þegar skilgreiningar ná yfir margar línur.

Geymdu frumskrána þótt vinnuafritið líti vel út. Ef reitur færist til eða efni tapast við innflutning hefurðu enn óbreytt viðmið.

## Úr Quizlet í CSV: búðu skrána til með réttum hætti

Að breyta endingunni úr `.txt` í `.csv` breytir ekki skráarsniðinu. CSV krefst samræmdra skilja og réttra gæsalappa utan um efni sem inniheldur kommur, gæsalappir eða margar línur.

Til að búa til CSV-skrá úr Quizlet með öruggum hætti:

1. Haltu óbreytta textaafritinu ósnertu.
2. Opnaðu vinnuafritið í töflureikni og veldu nákvæmlega þá skilju sem þú notaðir í Quizlet.
3. Staðfestu að hver færsla hafi tvo dálka eins og til stóð: hugtak og skilgreiningu.
4. Farðu yfir gæsalappir, skiljur og skilgreiningar sem ná yfir margar línur.
5. Flyttu út sem UTF-8 CSV.
6. Opnaðu CSV-skrána í nýrri forskoðun áður en þú notar hana annars staðar.

Töflureiknir getur bætt við þeim gæsalöppum sem CSV þarf. Ekki er hægt að gera það áreiðanlega með því að skipta einfaldlega öllum dálkaskilum út fyrir kommur.

## Flyttu textann í Nibomo sem drög sem þú ferð yfir

[Nibomo](/is/features/) býður ekki upp á beinan innflutning úr Quizlet. Í vefþjónustunni er leiðin fyrir TXT eða CSV að láta gervigreind gera drög úr viðhengdri skrá. Það er ekki flutningur sem tryggir að allt varðveitist óbreytt.

1. Geymdu óbreyttu Quizlet-skrána utan forritsins.
2. Hengdu lagfærðu TXT-skrána eða vandlega útbúnu CSV-skrána við í gervigreindarspjalli Nibomo.
3. Segðu aðstoðarmanninum hvaða skilju og reiti skráin notar.
4. Biddu um lítið sýnishorn og taktu skýrt fram að ekki eigi að vista spjöld enn.
5. Berðu fyrirhugaðan spjaldafjölda, framhliðar og bakhliðar saman við vinnuskrána.
6. Vistaðu aðeins spjöld sem þú hefur farið yfir.

[Leiðbeiningar fyrir fyrstu skrefin](/docs/getting-started/) lýsa gervigreindarspjalli með gögnum vinnusvæðisins og viðhengjum. Varfærin fyrirmæli gætu verið:

> Lestu þessa skrá sem pör af hugtökum og skilgreiningum, aðskilin með dálkaskilum. Ekki vista spjöld enn. Gerðu lítið sýnishorn, varðveittu orðalag frumtextans og stafi úr öðrum ritkerfum en því latneska og taktu rangt sniðnar, tómar eða óljósar línur saman sérstaklega í stað þess að giska.

Þetta getur nýst þegar gömlu spjöldin þurfa líka lagfæringu. Það sannar þó ekki að hver einasta lína hafi flust rétt yfir. Notaðu gátlistann í [Hvernig á að laga námsspjöld frá gervigreind](/blog/how-to-fix-ai-flashcards/) og prófaðu síðan lítinn spjaldastokk áður en þú býrð til restina.

Spjöld sem eru búin til í Nibomo byrja með nýja námssögu. Textinn úr Quizlet inniheldur hvorki skráningar á fyrri upprifjunum né stöðu upprifjunaráætlunarinnar sem þarf til að halda áfram með gömlu upprifjunarröðina.

> **Upplýsingar um tengsl:** Ég þróa Nibomo. Þetta ferli lýsir núverandi takmörkunum vörunnar; það er ekki fullyrðing um fullt samhæfi við Quizlet.

## Úr Quizlet í Anki: notaðu textainnflutning Anki

Samkvæmt [opinberum leiðbeiningum Anki um textainnflutning](https://docs.ankiweb.net/importing/text-files.html) styður Anki hreinar UTF-8 textaskrár þar sem reitir eru aðskildir með kommum, semíkommum eða dálkaskilum.

Fyrir vinnuafrit með dálkaskilum:

1. Opnaðu innflutning í Anki og veldu UTF-8 textaskrána.
2. Staðfestu í forskoðuninni að Anki hafi greint dálkaskil; breyttu skiljustillingunni ef svo er ekki.
3. Veldu glósutegund og spjaldastokkinn sem á að taka við glósunum.
4. Tengdu fyrsta reitinn við framhliðina og annan reitinn við bakhliðina.
5. Leitaðu að tómum reitum, reitum á röngum stað eða umframreitum í forskoðuninni.
6. Farðu yfir stillingar fyrir tvítekningar og uppfærslur áður en þú flytur inn.

Anki ákvarðar væntanlegan reitafjölda út frá fyrstu línunni sem er ekki athugasemd. Í síðari færslum verða reitir sem vantar tómir og umframreitir eru ekki fluttir inn. Þess vegna skiptir forskoðunin máli, sérstaklega þar sem ein skilja á röngum stað getur breytt uppbyggingu línu.

Einnig þarf að ákveða sérstaklega hvernig á að meðhöndla skilgreiningar sem ná yfir margar línur. Anki styður reiti innan gæsalappa sem ná yfir línuskil. Það getur líka túlkað `<br>` sem línuskil þegar **Allow HTML in fields** er virkt. Veldu eina aðferð og skoðaðu afritað sýnishorn áður en þú flytur alla skrána inn.

Sjálfgefið getur Anki fundið fyrirliggjandi glósu af sömu tegund út frá fyrsta reitnum og uppfært hina reitina. Í innflutningsstillingum má í staðinn velja að hunsa tvítekningar eða bæta þeim við sem nýjum glósum. Við uppfærslu á fyrirliggjandi Anki-glósu er hægt að varðveita tímasetningar hennar í Anki, en engar tímasetningar frá Quizlet fylgja textaskránni.

## Geymdu upprunalega safnið þar til nýi stokkurinn virkar

Opinbera útflutningsleiðin í Quizlet endar á **Copy text** á vefnum, fyrir söfn sem þú bjóst til. Skriptur sem safna gögnum af vefsíðum, ágiskanir um innri API-endapunkta og niðurhalstól frá þriðju aðilum eru aðrar leiðir sem Quizlet styður ekki. Þær veita ekki opinberan útflutningsaðgang að afrituðu safni eða safni sem þú getur aðeins skoðað.

Ef þú þarft reglulega sjálfvirkni frekar en afrit í eitt skipti útskýrir greinin um [núverandi stöðu Quizlet API](/blog/quizlet-api/) hvað er stutt. Ef þú átt ekki safnið skaltu biðja höfundinn um frumskrá eða búa til minni stokk úr eigin glósum. [Hvernig á að búa til betri námsspjöld](/blog/how-to-make-better-flashcards/) getur hjálpað þér að bæta nýja stokkinn í stað þess að afrita hverja einustu gamla línu.

Ekki eyða upprunalega Quizlet-safninu fyrr en:

- óbreytta UTF-8 skráin er vistuð á stað sem er tekinn öryggisafrit af;
- vinnuskráin opnast aftur með réttum stöfum og skiljum;
- farið hefur verið yfir marglínureiti, tóma reiti, tvítekningar og óreglulegar línur;
- mikilvægar upplýsingar úr myndum hafa verið endurgerðar úr heimild sem þú mátt nota; og
- lítil prófun hefur skilað réttum framhliðum og bakhliðum í móttökuforritinu.

Geymdu óbreyttu textaskrána eftir það. Hún er einfaldasta óháða viðmiðið ef eitthvað virðist rangt við síðari innflutning. Ef þú ert enn að velja hvert spjöldin eiga að fara fer [samanburðurinn á valkostum við Quizlet](/blog/quizlet-alternative/) yfir helstu kosti og galla.
