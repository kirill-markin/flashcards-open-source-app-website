---
title: "Tvítekin spjöld í Anki – finndu afrit og veldu hvað þú geymir"
description: "Finndu tvítekin spjöld í Anki, berðu saman færslurnar og veldu hvaða eintak þú geymir. Stutt æfing sýnir hvernig þú athugar upprifjunarsöguna eftir tiltekt."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "tvítekin spjöld í Anki"
  - "finna tvítekin spjöld í Anki"
  - "eyða tvíteknum færslum í Anki"
  - "tvíteknar færslur í Anki"
  - "upprifjunarsaga í Anki"
---

Þú kannast við spurninguna, en Anki sýnir þér hana sem nýja þótt þú hafir svarað henni áður. Kannski varð til afrit við innflutning. Kannski birtist spurningin á öðru spjaldi úr sömu færslu. Ef þú eyðir einni línu í **Browse** geta öll spjöld færslunnar horfið, líka spjaldið sem þú vildir geyma til að æfa í hina áttina.

Þegar þú tekur til í **tvíteknum spjöldum í Anki** skaltu fyrst athuga hvort þau komi úr sömu færslu. Ef þau koma úr ólíkum færslum finnurðu möguleg afrit með **Notes → Find Duplicates**. Berðu saman efnið og upprifjunarsögu hvers spjalds og veldu í hverjum hópi hvaða eintak þú vilt geyma. Þegar einn reitur er eins í tveimur færslum er ástæða til að skoða þær nánar áður en þú eyðir öðru eintakinu.

Leiðbeiningarnar eiga við um Anki fyrir tölvur og byggja á handbókinni og útgefnum frumkóða Anki. Heimildirnar voru yfirfarnar 4. október 2026. Heiti í viðmótinu og dæmið um tvítekningarmerkið miðast við enska viðmótið. Æfingin er tilbúið dæmi sem sýnir við hverju má búast samkvæmt heimildunum.

![Félagi í skákklúbbi ber saman ljósan aukahrók og tvo slitna hróka á viðarskákborði](/blog/anki-duplicate-cards.png)

## Athugaðu fyrst hvað er tvítekið

Færsla geymir reiti á borð við **Front** og **Back**. Anki notar sniðmát til að búa til spjöld úr færslunni. Úr einni orðaforðafærslu geta orðið til tvö spjöld. Á öðru reynir á hvort þú þekkir orðið þegar þú sérð það og á hinu hvort þú getir rifjað það upp án þess að sjá það. Hvort spjald hefur sína eigin upprifjunaráætlun. Spjöld úr sömu færslu kallast systkinaspjöld. [Útskýring Anki á færslum og reitum](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Opnaðu **Browse**, veldu **Cards** og opnaðu **Cards → Info** fyrir hvert spjald sem gæti verið tvítekið. Berðu saman færsluauðkennin (**Note ID**). Ef auðkennin eru eins koma spjöldin úr sömu færslu. Annars koma þau úr ólíkum færslum. Sláðu inn `nid:123` og settu raunverulegt auðkenni í stað `123` til að sjá öll spjöld færslunnar, óháð því í hvaða stokki þau eru. [Leit eftir auðkennum í handbók Anki](https://docs.ankiweb.net/searching.html#object-ids)

| Það sem þú sérð | Líkleg skýring | Næsta skref |
| --- | --- | --- |
| Sama færsla, spurt í báðar áttir | Systkinaspjöld sem eiga að vera til | Athugaðu hvort báðar spurningarnar nýtist |
| Sama færsla, spjöldin sýna sömu spurningu | Hugsanlega tvítekin spjaldasniðmát | Berðu saman sniðmátin og forskoðaðu spjöldin |
| Aðskildar færslur, spurningarnar virðast eins | Mögulega tvíteknar færslur | Berðu færslurnar saman í heild áður en þú velur eintak til að geyma |

Ef bæði systkinaspjöldin eiga að vera til geturðu lesið nánar um spurningar í báðar áttir í [leiðbeiningunum um öfug spjöld](/blog/anki-reverse-cards/) (á ensku). Ef þú vilt gera hlé á öðru spjaldinu geturðu tekið það tímabundið úr upprifjun með **Suspend**. Spjaldið verður áfram í safninu. [Leiðbeiningar um Suspend](/blog/anki-bury-vs-suspend/) (á ensku)

Ef sniðmátin eru eins skaltu fylgja leiðbeiningum Anki um aukaspjöld. Ef þú fjarlægir sniðmát hefur það áhrif á allar færslur af þeirri gerð, líka í öðrum stokkum. Taktu slíka breytingu á uppbyggingu safnsins fyrir í sér lagi. [Leiðbeiningar Anki um aukaspjöld](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Afmarkaðu leitina að tvíteknum færslum

Opnaðu **Notes → Find Duplicates** og veldu reitinn sem þú vilt bera saman, til dæmis **Front**. Sjálfgefið leitar Anki í öllum færslugerðum sem hafa þennan reit. Afmarkaðu leitina í **Optional filter** og smelltu svo á **Search**. [Stillingar Find Duplicates í handbók Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Ef stokkurinn heitir `Cleanup practice` slærðu inn eftirfarandi.

```text
deck:"Cleanup practice"
```

Leit í stokki nær líka til undirstokka hans. Ef eintökin gætu verið í ólíkum stokkum skaltu fjarlægja síuna og leita í öllu safninu. Þótt ekkert finnist í einum stokki getur afrit leynst annars staðar. [Leit eftir stokkum í handbók Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Smelltu á hóp í leitarniðurstöðunum til að skoða færslurnar í honum. **Tag Duplicates** setur merkið `duplicate` á allar færslur í hverjum hópi, líka þær sem þú ætlar að geyma. **Ekki eyða öllum niðurstöðum úr leitinni `tag:duplicate`.** Notaðu merkið til að finna möguleg afrit og veldu svo hverja færslu sem á að eyða fyrir sig. [Útgefinn frumkóði fyrir merkinguna](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

Leitin ber saman efni reitsins sem þú valdir. Stundum þarf sérstaka leit að öðru orðalagi til að komast að því hvort tvær spurningar reyni á sama atriði. Eins orðaðar spurningar geta líka átt við ólík tungumál eða námsefni.

## Berðu saman þrjú pör á blaði

Hugsaðu þér að í stokknum `Cleanup practice` séu sex færslur og engir undirstokkar. A og B nota óbreytt sniðmát af gerðinni **Basic (and reversed card)** og úr hvorri færslu verða til tvö spjöld. C–F nota **Basic** og úr hverri þeirra verður til eitt spjald. Öll átta spjöldin eru í sama stokknum. Bókstafirnir eiga aðeins við um þetta dæmi. Raunveruleg auðkenni færslna (**Note ID**) og spjalda (**Card ID**) í Anki eru tölur.

| Færslur | Front → Back | Námsstaða í dæminu | Ákvörðun |
| --- | --- | --- | --- |
| A og B | `le vélo` → `bicycle` | Í A var spjaldið sem sýnir franska orðið rifjað upp 12 sinnum og spjaldið sem biður um orðið 3 sinnum. B er með tvö ný spjöld. | Geymdu A. Byrjaðu á að athuga hvort eyða megi B. |
| C og D | `Chemical symbol for silver?` → `Ag` | C hefur 20 upprifjanir og D hefur 6. | Berðu saman upprifjunarsögu spjaldanna og veldu hvort þeirra þú vilt halda áfram með. |
| E og F | E: `bank` → `financial institution`; F: `bank` → `side of a river` | Orðið hefur ólíka merkingu í færslunum. | Geymdu báðar og bættu við samhengi til að skýra spurningarnar. |

Leit í **Front** getur flokkað færslurnar í þessi þrjú pör. Valið er aðeins einfalt í fyrsta parinu. Áður en þú ákveður að eyða B skaltu bera saman **alla reiti**, myndir, hljóð og annað margmiðlunarefni, merki, færslugerðir og hvernig spjöldin birtast í báðar áttir. Kannski fylgir B hljóðupptaka af framburðinum sem vantar í A, eða kannski býr B til spurningu sem A hefur ekki.

Ef gagnlegt efni á við sama námsmarkmið skaltu afrita það í færsluna sem þú geymir og forskoða niðurstöðuna. Varðveittu líka gagnleg merki úr upprunalegu færslunni. Ef spurningin á að reyna á annað atriði skaltu búa til nýja spurningu svo að fyrri upprifjunarsagan fylgi því atriði sem þú varst að læra.

Þegar þú berð saman C og D er fjöldi upprifjana ein vísbending. Skoðaðu dagsetningar og mat á fyrri svörum, núverandi upprifjunarbil og hvenær hvort spjald kemur næst upp. Fleiri upprifjanir geta einfaldlega þýtt að þú þurftir oftar að læra svarið upp á nýtt. Athugaðu hvort spurningin og svarið nýtist áður en þú velur hvaða upprifjunarsögu þú vilt byggja á áfram. Ef svörin stangast á skaltu fletta upp í námsefninu. Fjöldi upprifjana sker ekki úr um hvort svarið sé rétt.

Ef þú geymir C og eyðir D **sameinast upprifjunarsögur þeirra ekki**. C heldur sinni eigin námsstöðu. Í **Card Info** sérðu upprifjunarsögu hvers spjalds. Upprifjanir úr eyddum færslum sjást áfram í tölfræði alls safnsins en hverfa úr tölfræði einstakra stokka. Þær flytjast ekki yfir á spjaldið sem þú geymir. Í handbók Anki má lesa nánar um [Card Info](https://docs.ankiweb.net/stats.html#card-info) og [tölfræði fyrir eyddar færslur](https://docs.ankiweb.net/stats.html#more).

Ef þú ert óviss skaltu bíða með að eyða. Skráðu hvað þarf að athuga og notaðu **Suspend** ef þú þarft að taka óæskileg spjöld úr upprifjun á meðan.

## Eyddu einu afriti og athugaðu hvað er eftir

Áður en þú eyðir efni úr safninu þínu skaltu samstilla allar breytingar frá hinum tækjunum. Samstilltu síðan tölvuna svo að breytingarnar skili sér í safnið þar. [Samstillingarhandbók Anki](https://docs.ankiweb.net/syncing.html)

Veldu **File → Export** og vistaðu **Anki Collection Package (`.colpkg`)** með **Include Media** valið. Skráin geymir alla stokka ásamt upprifjunaráætlun og upprifjunarsögu spjaldanna. Geymdu skrána á öruggum stað. Ef þú flytur hana inn kemur vistaða safnið í stað spjaldanna sem eru fyrir í opna notandasniðinu. [Útflutningur safns í handbók Anki](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Ef þú vilt æfa þig í að eyða afriti skaltu búa til sérstakt notandasnið í **File → Switch Profile** og flytja öryggisafritið inn þar. Hafðu æfingasniðið ótengt AnkiWeb. Hvert notandasnið hefur sitt eigið safn. Ef bæði sniðin tengjast sama reikningi getur annað safnið yfirskrifað hitt. Nánar um þetta í [handbók Anki um notandasnið](https://docs.ankiweb.net/profiles.html) og [leiðbeiningunum um afritun og innflutning með APKG og COLPKG](/blog/anki-apkg-vs-colpkg/) (á ensku).

Í æfingunni heitir spjaldið úr A sem sýnir franska orðið A1. Spjaldið sem biður þig um að rifja orðið upp heitir A2. Samsvarandi spjöld úr B heita B1 og B2. Opnaðu **Cards → Info**. Skráðu raunveruleg auðkenni beggja spjaldanna úr A, hvenær þau koma næst upp, núverandi upprifjunarbil og nokkrar færslur úr upprifjunarsögunni sem auðvelt er að þekkja aftur. Skráðu líka auðkenni færslunnar B. Berðu stöðuna saman fyrir og eftir eyðingu í sömu lotu. Bíddu með að rifja upp eða breyta áætlun spjaldanna þar til samanburðinum er lokið.

Farðu svona að til að eyða tvíteknum færslum í Anki einni í einu.

1. Skiptu leitinni í **Browse** út fyrir `nid:` með raunverulegu auðkenni færslunnar B. Skoðaðu allar niðurstöðurnar í **Cards** og forskoðaðu spjöldin í báðar áttir. Þegar þú tekur til í eigin safni skaltu líka athuga hvort systkinaspjöld séu í öðrum stokkum. Slepptu stokkasíunni í þessari leit.
2. Skiptu yfir í **Notes**. Gakktu úr skugga um að eina niðurstaðan sé færslan B sem þú vilt eyða. Veldu hana eina og smelltu á **Notes → Delete**. Aðgerðin eyðir færslunni og öllum spjöldunum hennar, jafnvel þegar þú velur aðeins eina línu í **Cards**. [Delete-aðgerðin í handbók Anki](https://docs.ankiweb.net/browsing.html#notes)
3. Endurtaktu leitina að auðkenni færslunnar B og athugaðu að hún skili engu. Leitaðu að spjaldaauðkennunum sem þú skráðir fyrir A með `cid:` og settu kommu á milli þeirra. Berðu upplýsingarnar í **Info** fyrir bæði spjöldin saman við það sem þú skráðir.
4. Leitaðu að `deck:"Cleanup practice"` og berðu saman fjölda lína í **Notes** og **Cards**. Athugaðu hvaða færslur eru eftir og berðu þær saman við töfluna hér að neðan.

Ef þú eyðir aðeins B ættirðu að sjá eftirfarandi breytingu.

| Athugun | Fyrir eyðingu | Væntanleg niðurstaða |
| --- | --- | --- |
| Allur æfingastokkurinn | 6 færslur / 8 spjöld | 5 færslur / 6 spjöld |
| Spjöldin fyrir „le vélo“ | A1, A2, B1, B2 | Aðeins A1 og A2 |
| Auðkenni spjaldanna úr A, næsta upprifjun, upprifjunarbil og upprifjunarsaga | Það sem þú skráðir | Sömu auðkenni, næsta upprifjun, upprifjunarbil og færslur í upprifjunarsögunni |
| Leit eftir auðkenni færslunnar B | Tvö spjöld úr B | Engar niðurstöður |
| Færslurnar fyrir silfur og orðið „bank“ | C, D, E, F | Sömu fjórar færslur eru eftir |

Hér hverfa tvö spjöld þegar einni færslu er eytt. Fækkunin yrði sú sama ef þú eyddir A í stað B, en þá hyrfu spjöldin sem þú hefur þegar lært. Athugaðu því bæði fjölda og auðkenni. Varðveittu námsstöðu og upprifjunaráætlun spjaldsins sem þú geymir.

Graf yfir upprifjanir í öllu safninu getur enn sýnt upprifjanir á eyddum spjöldum. Til að athuga hvort námsstaðan hafi haldist skaltu skoða auðkenni spjaldsins sem er eftir og upplýsingarnar í **Info**.

Þegar niðurstaðan stemmir við það sem þú skráðir geturðu farið í næsta hóp og ákveðið hvaða eintak þú geymir þar. Ef þú æfðir þig í afriti skaltu fyrst endurtaka tiltektina í venjulega notandasniðinu þínu. Athugaðu safnið þar og samstilltu svo tölvuna. Samstilltu hin tækin áður en þú notar þau til að læra. Ef afritin urðu til við innflutning skaltu lesa [leiðbeiningarnar um að uppfæra færslur með CSV](/blog/anki-csv-update-existing-notes/) (á ensku) fyrir næsta innflutning. Ef þú bjóst til afrit til að flokka sama atriðið undir fleiri en eitt efni geturðu notað merki á sömu færslu og haldið einni upprifjunarsögu. [Leiðbeiningar um merki og stokka](/blog/anki-tags-vs-decks/) (á ensku)
