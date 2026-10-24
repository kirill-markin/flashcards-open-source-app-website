---
title: "Svona býrðu til námskort með Claude árið 2026: Projects, skráaupphleðsla og upprifjun með FSRS"
description: "Hagnýt leið til að búa til námskort með Claude árið 2026: notaðu Projects og skráaupphleðslu til að útbúa styttri og skýrari kort, færðu síðan þau bestu í Nibomo til að rifja upp með FSRS."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "hvernig á að búa til námskort með Claude"
  - "Claude námskort"
  - "úr Claude í námskort"
  - "námskort með Claude Projects"
  - "námskort úr upphlöðnum skrám í Claude"
  - "úr PDF í námskort með Claude"
  - "búa til námskort með Claude"
  - "FSRS námskort"
---

> [Tengjast Claude](https://claude.ai/directory/nibomo) · [Leiðbeiningar](/is/docs/mcp-connector/)

Í gær setti ég yfirlit yfir einn fyrirlestur og eina óskipulega PDF-skrá með lesefni inn í Claude og bað um námskort. Nokkur voru góð. Hin báru þessi kunnuglegu einkenni gervigreindartexta: þau voru tæknilega rétt, undarlega fáguð og mun erfiðari í upprifjun en þau virtust við fyrsta lestur.

Þetta er raunverulegi vandinn þegar kemur að því **hvernig á að búa til námskort með Claude**.

Claude er gott í að breyta námsefni í tillögur að kortum. Það er ekki sjálfkrafa gott í að ákveða hvað á erindi í langtímaupprifjun, hversu afmarkað hvert kort á að vera eða hvort enn verði auðvelt að meta svarið við fallega orðuðu korti næsta fimmtudag.

Vinnuferlið sem ég myndi treysta árið 2026 er því afmarkaðra en fólk vill í fyrstu: hafðu eitt viðfangsefni í einu Claude-verkefni, hladdu aðeins upp efninu sem tilheyrir hverjum skammti, biddu um einfaldar tillögur með framhlið og bakhlið, eyddu óhikað og færðu svo kortin sem eftir standa í námskortakerfi með FSRS.

![Hlýleg mynd af skrifborði með uppköstum í Claude-verkefni, kortum fyrir skráaupphleðslu og völdum FSRS-námskortum](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude hentar loksins þessu vinnuferli

Það er meiri ástæða til að leita að þessu núna því Claude hentar betur til náms en áður.

Anthropic kynnti **Claude for Education** þann **2. apríl 2025**, þar á meðal **Learning Mode** innan Projects. Núverandi hjálpargögn skipta ekki síður máli. Á hjálparsíðu Anthropic um Projects, dagsettri **16. mars 2026**, segir að Projects séu í boði fyrir alla notendur og að notendur með ókeypis aðgang geti búið til allt að fimm verkefni. Á hjálparsíðunni um skráaupphleðslu, dagsettri **22. apríl 2026**, segir að Claude styðji skráargerðir sem nýtast við nám, meðal annars **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON og XLSX**.

Þetta gefur **námskortagerð með Claude** mun skýrari umgjörð en gamla aðferðin: „henda öllu í eitt spjall og vona það besta“.

Menntunarskýrsla Anthropic sýnir líka að þessi notkun er þegar algeng. Þar kom fram að í **39,3%** greindra samtala sem tengdust menntun notuðu nemendur Claude fyrst og fremst til að búa til og bæta námsefni. Áhugaverða spurningin er því ekki lengur hvort fólk noti Claude fyrir námsefni. Það gerir það greinilega. Gagnlegra er að spyrja hvernig megi breyta efninu í kort sem vert er að rifja upp síðar.

## Byrjaðu á einu Claude-verkefni fyrir hvert námskeið, próf eða viðfangsefni

Þetta er fyrsta venjan sem ég myndi halda í, því hún bætir nánast allt sem á eftir kemur.

Í núverandi leiðbeiningum Claude er Projects lýst sem sjálfstæðum vinnusvæðum með eigin spjallferli og þekkingargrunni. Það er nákvæmlega það sem þarf við gerð uppkasta að námskortum.

Ekki búa til eitt risastórt vinnusvæði í Claude sem heitir `skóli`.

Búðu til eitt verkefni fyrir:

- eitt námskeið
- eitt vottunarpróf
- eina námseiningu sem þú ætlar að klára í þessari viku
- einn hóp viðfangsefna sem eiga raunverulega heima saman

Þetta gerir uppköstin skýrari því Claude er ekki að reyna að blanda saman ótengdu efni úr fjórum námsgreinum í einu svari. Það verður líka minna vesen að hreinsa til, því þú veist hvað hver skammtur átti að ná yfir.

Ef þú notar Claude líka sem einkakennara en ekki aðeins til að gera uppköst að kortum, er [Svona notarðu Claude við nám árið 2026](/is/blog/how-to-use-claude-for-studying/) betri fylgigrein. Þessi grein er afmarkaðri. Hún fjallar um að breyta úttaki frá Claude í kort sem þér finnast enn gagnleg þegar kemur að upprifjun.

## Stilltu verkefnisfyrirmæli einu sinni svo hver skammtur byrji betur

Þetta er einn af gagnlegustu kostunum við Claude.

Í núverandi leiðbeiningum Anthropic um Projects segir að hægt sé að stilla **verkefnisfyrirmæli** svo Claude fylgi sömu kröfum í öllum spjöllum innan verkefnisins. Við námskortagerð sparar þetta þér að endurtaka sömu reglur um snið og hvað á að sleppa í hvert sinn sem þú hleður upp nýjum hluta.

Ég myndi hafa verkefnisfyrirmælin stutt og óspennandi:

```text
Þegar ég bið um námskort skaltu nota einfalt snið með framhlið og bakhlið. Eitt hugtak, ein staðreynd, ein aðgreining eða eitt skref í ferli á hvert kort. Hafðu framhliðar afmarkaðar og þannig að hægt sé að svara þeim. Hafðu bakhliðar stuttar. Slepptu tvítekningum, óljósum spurningum og öllu sem krefst samhengis sem vantar úr upprunalegu heimildinni.
```

Settu síðan fyrirmæli fyrir hvert tiltekið verk í spjallið sjálft þegar þú hleður upp nýjum skammti.

Þessi skipting virkar vel því verkefnisfyrirmælin setja almennu reglurnar en spjallfyrirmælin taka á fyrirlestrinum, kaflanum eða spurningasafninu sem þú ert að vinna með hverju sinni.

## Hladdu upp minni skömmtum af námsefni en þú heldur að þurfi

Hér fer oft að halla undan fæti þegar fólk vill breyta **efni úr Claude í námskort**.

Fólk sér að hægt er að hlaða upp skrám og lítur á það sem leyfi til að setja allt námsefni námskeiðsins í eina beiðni. Yfirleitt verða kortin verri við það.

Upphleðsluleiðbeiningar Anthropic benda sjálfar á óspennandi lausn fyrir stór skjöl: skipta þeim í minni hluta. Ég myndi gera nákvæmlega það.

Betra inntak er til dæmis:

- glósur úr einum fyrirlestri
- einn hluti lesefnis
- eitt safn æfingaspurninga með leiðréttum svörum
- einn undirkafli
- einn vel afmarkaður hluti námsyfirlits

Verra inntak er til dæmis:

- öll kennslubókin
- tólf fyrirlestrar í einu
- mappa með efni heillar annar sem þú hefur ekki tekið til í
- gríðarlegt magn af umrituðu tali sem þú vilt í raun ekki fara yfir kort fyrir kort

Litlir skammtar knýja fram heiðarlegri spurningu: hvað úr þessum hluta er þess virði að geta rifjað upp síðar án þess að opna heimildina aftur?

Sú spurning heldur stokknum minni og betri.

## Claude er gott í að gera uppköst úr námsefni, en velur ekki sjálfkrafa það sem skiptir máli

Mér finnst þetta gagnlegasta leiðin til að hugsa um það.

Claude getur:

- þjappað saman hluta af lesefni
- útskýrt hugtak skýrar
- aðskilið augljós undirviðfangsefni
- breytt glósum í tillögur að spurninga- og svarakortum
- komið auga á endurtekin hugtök og skilgreiningar

Claude veit ekki sjálfkrafa:

- hvaða staðreyndir þú veist þegar nógu vel til að sleppa þeim
- hvaða aðgreiningar vefjast sífellt fyrir þér
- hvaða svar er of langt til að meta fljótt
- hvaða kort er aðeins skiljanlegt vegna þess að þú manst enn málsgreinina sem það kom úr

Þess vegna gengur best að **búa til námskort með Claude** þegar Claude gerir uppköstin og þú ritstýrir.

Ef þú biður Claude að ákveða allt færðu yfirleitt stokk sem er of kurteis. Hann heldur of miklu eftir, útskýrir of mikið og geymir efni sem virtist gagnlegt á stundinni en á ekki skilið tíma í upprifjun síðar.

## Notaðu einföld fyrirmæli og láttu takmarkanirnar vinna verkið

Þú þarft engin tilþrif í fyrirmælin.

Ég myndi nota eitthvað á þessa leið í spjallinu sjálfu:

```text
Breyttu þessu efni í einföld námskort með framhlið og bakhlið.

Reglur:
- Ein staðreynd, ein aðgreining eða eitt skref í ferli á hvert kort
- Framhliðin verður að vera afmörkuð og hægt að svara henni
- Bakhliðin verður að vera stutt og skýr
- Engar uppspunnar staðreyndir
- Slepptu tvítekningum og óljósum spurningum
- Slepptu kortum sem krefjast samhengis sem vantar úr upprunalega skjalinu
- Ekki hika við að eyða kortum sem eru ekki þess virði að rifja upp til lengri tíma
```

Ef efnið er safn spurninga með leiðréttum svörum skaltu bæta við einni setningu:

```text
Leggðu áherslu á mistök sem ég er líklegur til að endurtaka, atriði sem ég rugla saman og aðgreiningar sem ég er líklegur til að missa aftur af.
```

Það nægir.

Gagnlegu takmarkanirnar eru einfaldar:

- eitt atriði til að muna á hverju korti
- stutt svör
- engar uppspunnar staðreyndir
- engar víðtækar samantektarspurningar á framhlið
- engin kort sem krefjast þess enn að öll heimildin sé opin við hliðina

Claude bregst yfirleitt vel við skýrum mörkum. Vandinn er sjaldnast skortur á töfrafyrirmælum. Vandinn er sá að fólk biður um of mikið í einu.

## Bestu námskortin úr Claude koma yfirleitt úr þrenns konar efni

Ég treysti Claude best þegar efnið er þegar næstum tilbúið á kort en þarf enn að laga.

Það á helst við um:

- fyrirlestraglósur sem þarf að þjappa saman
- lesefni sem þarf að draga atriði úr
- spurningar með leiðréttum svörum sem leiða í ljós ein ákveðin mistök

Þetta mynstur skiptir máli því Claude er ekki að finna upp námskerfi frá grunni. Það hjálpar þér að breyta hráefni í afmarkaðri atriði sem hægt er að rifja upp.

Ef inntakið er aðallega glósur fer [Svona breytirðu glósum í námskort árið 2026 (á ensku)](/blog/turn-notes-into-flashcards/) nánar í hreinsunina. Ef þú vinnur með skrár skaltu taka lítinn, viðeigandi hluta úr þeim og athuga texta, jöfnur og merkingar áður en þú samþykkir kortauppköst.

## Eyddu kortunum sem hljóma enn eins og Claude

Hér verða mestu gæðabæturnar.

Kort sem Claude býr til hafa oft sömu gallana:

- framhliðin hljómar vel en erfitt er að svara henni
- bakhliðin inniheldur þrjár staðreyndir vegna þess að málsgreinin innihélt þrjár staðreyndir
- kortið heldur eftir óljósu orðalagi á borð við „lykilatriði sem þarf að hafa í huga“ eða „mikilvægir þættir“
- orðalagið er nógu skýrt til að dást að en pirrandi þegar kemur að upprifjun

Ég myndi henda þessum kortum strax.

Framhlið námskorts ætti ekki að hljóma eins og upphafssetning í námsyfirliti. Hún ætti að vera spurning sem þú getur annaðhvort svarað eða ekki.

Haltu kortinu aðeins ef:

- þú getur svarað án þess að opna heimildina aftur
- bakhliðin er nógu stutt til að hægt sé að meta svarið hratt
- það prófar eitt hugtak, ekki hóp hugtaka
- þér finnst enn skipta máli að muna þetta eftir viku

Annars skaltu eyða því.

Þetta er helsti munurinn á Claude-lotu sem virðist afkastamikil og stokki sem heldur áfram að nýtast.

## Eitt veikt Claude-kort og útgáfan sem ég myndi halda eftir

Segjum að Claude lesi kafla um glýkólýsu og skili þessu:

- Framhlið: Hver eru helstu einkenni og afurðir glýkólýsu?
  Bakhlið: Glýkólýsa er efnaskiptaferli sem á sér stað í umfryminu, breytir glúkósa í pýruvat, myndar ATP og NADH og krefst ekki súrefnis.

Þetta er ekki eitt kort. Þetta er málsgrein með nafnspjald.

Betri útgáfan er yfirleitt nokkur smærri kort:

- Framhlið: Hvar fer glýkólýsa fram?
  Bakhlið: Í umfryminu.
- Framhlið: Hvaða sameind er brotin niður í glýkólýsu?
  Bakhlið: Glúkósi.
- Framhlið: Krefst glýkólýsa súrefnis?
  Bakhlið: Nei.

Kannski heldurðu einu korti til viðbótar um afurðirnar ef sú aðgreining skiptir máli í námskeiðinu þínu.

Markmiðið er ekki að varðveita fágaða svarið frá Claude. Það er að varðveita einstöku atriðin sem leynast í því og þú þarft að geta rifjað upp.

## Ekki rugla minni og samhengi í Claude saman við spaced repetition

Claude hefur nú betri verkfæri til að halda utan um samhengi en áður. Projects hjálpa. Upphlaðnar skrár hjálpa. Verkefnisfyrirmæli hjálpa. Allt þetta er gagnlegt.

Það er samt ekki það sama og upprifjunarkerfi.

Claude getur haldið utan um samhengi viðfangsefnis. Það getur munað framvindu lotunnar betur en eldri spjallverkfæri. Ekkert af þessu kemur í staðinn fyrir óspennandi hlutann sem skiptir raunverulega máli síðar: að sjá rétta kortið aftur á réttum tíma.

Þess vegna ættu **námskort úr Claude Projects** að enda í námskortaforriti í stað þess að verða eftir í verkefninu sjálfu.

Claude getur geymt samhengi.

FSRS sér um gleymskuna.

Þetta eru ólík verkefni.

Ef þú vilt lesa nánar um tímasetningu upprifjunar er [Samanburður á FSRS og SM-2 árið 2026 (á ensku)](/blog/fsrs-vs-sm-2/) beint framhald.

## Vistaðu samþykkt kort í Nibomo

Opnaðu [Nibomo í tengiskrá Claude](https://claude.ai/directory/nibomo), tengdu það, skráðu þig inn á Nibomo-aðganginn þinn og heimilaðu aðgang. Nibomo er skráð sem tenging frá samfélaginu (Community).

Biddu Claude að vista aðeins kortin sem þú hefur yfirfarið og samþykkt í gegnum MCP-tengingu Nibomo. Skoðaðu vinnusvæðið sem á að vista í og beiðnina um að vista kortin, samþykktu hana og athugaðu svo vistuðu kortin í Nibomo áður en þú rifjar þau upp með FSRS. Það er líka hægt að afrita þau handvirkt.

[Nibomo](/is/) hentar þessu vinnuferli því varan sér nú um hlutann sem Claude klárar ekki eitt og sér:

- að búa til og breyta kortum með framhlið og bakhlið
- gervigreindarspjall með gögnum vinnusvæðis og viðhengdum skrám
- stokka og merki til að skipuleggja endanleg kort
- upprifjun með FSRS þegar kortin eru þess virði að geyma
- hýst vefforrit ef þú vilt byrja fljótt
- leið að eigin hýsingu ef þú vilt reka kerfið sjálfur síðar

Ef þú vilt fara fljótustu leiðina fjallar [Fyrstu skrefin](/is/docs/getting-started/) um hýsta forritið. Ef meira máli skiptir að hafa stjórn á kerfinu sjálfur eru [leiðbeiningarnar um eigin hýsingu](/is/docs/self-hosting/) rétta framhaldið.

## Vinnuferlið sem ég myndi halda áfram að nota

Góð útgáfa af því **hvernig á að búa til námskort með Claude** er nógu stutt til að þú haldir áfram að nota hana þegar nýjabrumið er farið.

Þetta er útgáfan sem ég myndi halda mig við:

1. Búðu til eitt Claude-verkefni fyrir eitt námskeið, próf eða viðfangsefni.
2. Bættu við stuttum verkefnisfyrirmælum með reglum fyrir framhlið og bakhlið korta.
3. Hladdu upp einum litlum skammti: fyrirlestri, hluta af lesefni eða æfingaspurningum með leiðréttum svörum.
4. Biddu Claude um einfaldar tillögur með framhlið og bakhlið.
5. Eyddu veikum kortum eða endurskrifaðu þau strax.
6. Biddu Claude að vista aðeins kortin sem þú hefur yfirfarið og samþykkt í gegnum MCP-tengingu Nibomo. Skoðaðu vinnusvæðið sem á að vista í og beiðnina um að vista kortin, samþykktu hana og athugaðu svo vistuðu kortin í Nibomo áður en þú rifjar þau upp með FSRS. Það er líka hægt að afrita þau handvirkt.
7. Rifjaðu upp endanlega stokkinn með FSRS.

Þetta er trúverðugra vinnuferli en að láta sem Claude sjálft sé staðurinn þar sem minnið eigi heima.

Ef stokkurinn sem gervigreindin bjó til virðist þegar ofhlaðinn skaltu hætta að samþykkja ný uppköst og laga þau sem fyrir eru með hjálp [Svona lagarðu námskort úr gervigreind árið 2026 (á ensku)](/blog/how-to-fix-ai-flashcards/).

## Betri regla fyrir námskortagerð með Claude

Ekki biðja Claude um að klára námið fyrir þig.

Biddu það um að sjá um vélrænu vinnuna.

Þetta er sú leið til að **búa til námskort með Claude** sem stenst í raun árið 2026:

- eitt verkefni á hvert viðfangsefni
- einn lítill skammtur í einu
- ein staðreynd eða ein aðgreining á hvert kort
- óhikað brottval korta
- raunveruleg upprifjun á eftir

Claude er gott í að koma þér hraðar frá óskipulegu námsefni yfir í tillögur að kortum.

Nibomo ásamt FSRS breytir þessum tillögum í eitthvað sem þú gætir enn munað eftir mánuð.
