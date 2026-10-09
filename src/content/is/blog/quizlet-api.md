---
title: "Er Quizlet með opinbert API árið 2026? Núverandi staða og öruggir valkostir"
description: "Er Quizlet með API? Miðað við stöðuna 18. ágúst 2026 er ekkert opinbert API í sjálfsafgreiðslu skjalfest. Berðu saman studdar leiðir."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "er Quizlet með API"
  - "opinbert Quizlet API"
  - "Quizlet API fyrir forritara"
  - "valkostur við Quizlet API"
  - "sjálfvirknivæðing minniskorta"
---

Miðað við stöðuna 18. ágúst 2026 er hvorki að finna skjölun um opinbert Quizlet API sem forritarar geta fengið aðgang að í sjálfsafgreiðslu né opinbera vefgátt fyrir forritara. Sjálfstæðir forritarar hafa því enga opinbera leið til að skrá forrit, fá Quizlet API-lykil og nota skjalfesta endapunkta til að lesa eða skrifa minniskortagögn.

Þessi niðurstaða snýst um opinbera skjölun Quizlet, ekki innri kerfi fyrirtækisins. Quizlet býður vissulega upp á samþættingar við aðrar vörur og þjónustur samstarfsaðila. Quizlet-appið í ChatGPT og viðbótin fyrir Google Classroom eru tvö dæmi. Hvorug samþættingin veitir öðrum forritum aðgang að almennu Quizlet API fyrir forritara.

**Staðreyndir yfirfarnar:** 18. ágúst 2026.

> **Upplýsingar um hagsmunatengsl:** Ég heiti Kirill Markin og þróa Nibomo. Agent API og MCP-þjónn Nibomo eru meðal valkostanna hér að neðan. Nibomo er ekki samhæft við Quizlet og flytur Quizlet-sett ekki inn sjálfkrafa.

![Forritari ber saman útflutning úr Quizlet, innfellingu, tilteknar samþættingar og skjalfest API fyrir minniskort](/blog/quizlet-api.png)

## Stutta svarið: ekkert skjalfest Quizlet API í sjálfsafgreiðslu

Ef þú leitaðir að „er Quizlet með API?“ vegna þess að þú vilt sjálfvirknivæða vinnu í Quizlet er svarið eins og staðan er núna: **ekkert opinbert API í sjálfsafgreiðslu er skjalfest**.

Sumar aðgerðir sem Quizlet býður upp á geta við fyrstu sýn minnt á API. Þær leysa þó afmarkaðri verkefni:

| Hvað þú þarft | Studd leið | Hentar fyrir | Veitir ekki |
|---|---|---|---|
| Flytja texta úr setti sem þú bjóst til | [Útflutningur á vef Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Að afrita hugtök og skilgreiningar einu sinni | Myndir, útflutning afritaðra setta, námsferil eða API-aðgang |
| Birta opinbert sett á vefsíðu eða í námsumsjónarkerfi | [Innfelling Quizlet-setts](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Námsverkefni með vörumerki Quizlet inni á síðunni þinni | Skipulögð kortagögn eða les- og skrifaðgang |
| Breyta ChatGPT-samtali í Quizlet-sett | [Quizlet-appið í ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Að búa til sett og forskoða það með `@Quizlet` | Auðkenningarupplýsingar eða endapunkta fyrir þitt eigið forrit |
| Úthluta Quizlet-verkefnum í Google Classroom | [Quizlet-viðbótin fyrir Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Að finna verkefni, úthluta þeim og fylgjast með vinnu í Classroom | Almennt API fyrir sérsmíðaðan námshugbúnað |
| Smíða eigin samþættingu við Quizlet | Engin leið í sjálfsafgreiðslu er skjalfest eins og er | Sérstakt samstarfssamkomulag kann að vera í boði | Opna skráningu, API-lykla eða skjalfesta skilgreiningu á aðgangi að kortagögnum |
| Sjálfvirknivæða vinnu á eigin minniskortavinnusvæði | [Nibomo Agent API](/is/docs/api/) eða [MCP-tenging](/is/docs/mcp-connector/) | Endurteknar les- og skrifaðgerðir á kortum og stokkum innan tiltekins vinnusvæðis | Samhæfni við Quizlet eða sjálfvirkan innflutning úr Quizlet |

Munurinn er einfaldur: að afrita eigin kortatexta einu sinni er útflutningur. Að birta Quizlet á annarri síðu er innfelling. Tiltekin samþætting virkar aðeins innan þess vinnuferlis sem hún var gerð fyrir. Hugbúnaður sem á að búa til, lesa og breyta kortum aftur og aftur þarf skjalfest API með les- og skrifaðgangi.

## Útflutningur, innfelling og samstarfsaðgangur eru ekki opinber API

Opinbert API gefur utanaðkomandi forriturum skýrar forsendur: skjölun, auðkenningu, studdar aðgerðir, notkunarreglur og leið til að fá auðkenningarupplýsingar. Engin af þeim leiðum sem Quizlet býður almenningi núna veitir alla þessa þætti í sjálfsafgreiðslu.

**Útflutningur** úr Quizlet er handvirkur flutningur. Höfundur setts getur raðað hugtökum þess og skilgreiningum á vefnum, valið **Afrita texta (Copy text)** og límt niðurstöðuna annars staðar. Samkvæmt Quizlet er ekki hægt að flytja út myndir eða afrituð sett og eiginleikinn er aðeins í boði á vefnum. Þetta hentar fyrir vandlega yfirfærslu í eitt skipti. Það gerir hugbúnaði ekki kleift að halda tveimur kerfum samstilltum.

**Innfelling** birtir efni en veitir ekki aðgang að gögnunum. Hjá Quizlet geturðu afritað HTML-kóða fyrir opinbert sett og valið námsaðferð: samstæðuleik (Match), nám (Learn), próf (Test), minniskort (Flashcards) eða stafsetningu (Spell). Innfellda verkefnið ber áfram merki Quizlet og nemendur nota viðmót Quizlet. Forritið þitt fær ekki aðgang að einstökum kortafærslum sem það getur breytt.

**Samþætting við tiltekna vöru** fylgir eigin umsömdu vinnuferli. Quizlet getur unnið með ChatGPT eða Google Classroom án þess að bjóða öllum forriturum sama viðmót. Tilkynningar um þessar samþættingar staðfesta að þær séu til. Þær staðfesta ekki að þar að baki sé opinbert Quizlet API sem hver sem er getur notað.

Af sömu ástæðu telst gamalt hugbúnaðarsafn sem hjúpar aðgang að Quizlet ekki vera stutt API. Það sama á við um beiðni sem sést í þróunarverkfærum vafrans. Það sem vantar er opinber skjölun og stöðug skilgreining á því sem forritarar mega reiða sig á.

## Veldu leiðina sem hentar verkefninu

### Notaðu útflutning til að taka öryggisafrit eða færa efni í eitt skipti

Notaðu opinbera útflutningsferlið hjá Quizlet fyrir sett sem þú bjóst til. Ferlinu lýkur með **Afrita texta (Copy text)**. Varðveittu því óbreytt afrit af textanum sem þú límir áður en þú lagar aðgreiningartákn eða raðar efninu í gagnareiti. Þannig varðveitirðu hugtök og skilgreiningar en færð ekki heilan stokk sem hægt er að endurheimta. Myndir og námsferill fylgja ekki með.

Í greininni [Hvernig á að flytja út Quizlet-sett árið 2026](/is/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) er hagnýtur gátlisti. Þar er fjallað um óbreytt frumafrit og vinnuafrit, UTF-8, dálkaskil, skilgreiningar sem ná yfir margar línur og muninn á því að flytja innihald korta og upplýsingar um hvenær á að rifja þau upp.

Útflutningur hentar fyrir afmarkaðan flutning. Hann hentar ekki fyrir daglega kortagerð, samstillingu eða endurteknar breytingar úr hugbúnaði.

### Notaðu opinberu innfellinguna til að birta efni

Ef nemendur eiga að geta lært með opinberu Quizlet-setti á vef bekkjarins eða síðu í námsumsjónarkerfi skaltu nota innfellingarkóðann sem Quizlet veitir á vefnum sínum. Veldu verkefnið, smelltu á **Afrita HTML (Copy HTML)** og bættu kóðanum við síðuna. Nemendur fá gagnvirkt Quizlet-verkefni, en vefurinn sem birtir það fær engan straum af hráum kortagögnum.

Þetta er oft allt sem kennari þarf. Að kalla það API lætur verkefnið aðeins hljóma flóknara en það er.

### Notaðu viðeigandi samþættingu fyrir ChatGPT eða Google Classroom

Tilkynning Quizlet frá 10. mars 2026 um ChatGPT lýsir tilteknu ferli: tengdu Quizlet-appið, byrjaðu fyrirmæli á `@Quizlet`, forskoðaðu settið sem verður til í ChatGPT og opnaðu það síðan í Quizlet til að laga það að þínum þörfum og læra með því. Þetta er studd leið til að búa til Quizlet-sett úr samtalinu. Hún veitir vélmenninu þínu, skriftunni eða vefsíðunni ekki auðkenningarupplýsingar sem hægt er að nota aftur til að tengjast Quizlet API.

Tilkynning Quizlet frá 30. júní 2026 um Google Classroom er jafn afmörkuð. Viðbótin gerir kennurum kleift að finna og úthluta verkefnum, þar á meðal æfingaspurningum, minniskortum og leikjum, og fylgjast síðan með þátttöku og framförum innan Classroom. Samkvæmt Quizlet þarf Google Workspace for Education Plus til að nota hana. Kennarar gætu þurft að fá kerfisstjóra til að veita heimild eða gera viðbótina aðgengilega.

Ef annað þessara vinnuferla hentar því sem þú þarft að gera skaltu nota það. Ef þú þarft sérsmíðað forrit kemur hvorug samþættingin í stað opinbers aðgangs fyrir forritara.

### Veldu skjalfest les- og skrifviðmót fyrir reglulegar sjálfvirkar aðgerðir

Viðvarandi sjálfvirknivæðing krefst þess að hugbúnaðurinn geti unnið sömu verkefnin á áreiðanlegan hátt oftar en einu sinni: búið til kort úr glósum, sótt lista yfir stokka, uppfært svör eða séð um vinnusvæði til lengri tíma. Útflutningur með afritun á klemmuspjald veitir ekki slíkan grundvöll.

Örugga leiðin er minniskortakerfi sem birtir skýrar upplýsingar um hvernig utanaðkomandi hugbúnaður auðkennir sig og hvaða les- og skrifaðgerðir eru studdar. Það getur þýtt að velja valkost við Quizlet API fyrir sjálfvirka vinnuferlið en halda áfram að nota Quizlet fyrir þau námsverkefni sem almenna þjónustan styður.

## Hvað býður Nibomo sem valkostur við Quizlet API?

Nibomo skjalfestir tvær aðgangsleiðir að sömu afmörkuðu gögnum hvers notanda:

- [Agent API fyrir utanaðkomandi hugbúnað](/is/docs/api/) byrjar á `GET https://api.nibomo.com/v1/`. Svarið frá þeim endapunkti leiðir gervigreindarfulltrúa í gegnum innskráningu með einnota kóða í tölvupósti, stofnun API-lykils og val á vinnusvæði. Lesaðgerðir nota fyrirspurnaendapunkt með SQL-líkri málskipan; skrifaðgerðir nota sérstakan endapunkt til að keyra skipanir.
- [Fjartengdi MCP-þjónninn](/is/docs/mcp-connector/) er aðgengilegur á `https://mcp.nibomo.com/mcp`. MCP-biðlar fá átta verkfæri: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` og upprifjunarverkfærin `next_review_card`, `reveal_answer` og `submit_review`.

`get_usage_limits` veitir eingöngu lesaðgang að áskriftarleið reikningsins, takmörkunum og núverandi gervigreindarnotkun mánaðarins. Það les hvorki né breytir kortum.

Báðar leiðir takmarka aðgang við tiltekið vinnusvæði. Tiltæk gagnatilföng eru `workspace`, `cards`, `decks` og `review_events` og hver skipun getur skilað að hámarki 100 línum. SQL-líka viðmótið notar afmarkað afbrigði af SQL og veitir ekki beinan PostgreSQL-aðgang. Ekkert OpenAPI-skema er í boði, svo vinnuferli sem reiða sig á sjálfvirkt myndaða OpenAPI-biðlara þurfa annað viðmót.

Þetta getur hjálpað forritara eða gervigreindarfulltrúa að sjálfvirknivæða vinnu með eigin minniskort. Viðmótin geta ekki lesið efni af Quizlet-slóð, speglað Quizlet-reikning eða þjónað sem óskjalfestur Quizlet-biðlari. Enginn sjálfvirkur innflutningur úr Quizlet er í boði. Við yfirfærslu skaltu fyrst flytja út hugtök og skilgreiningar úr eigin setti, fara yfir textann og raða honum síðan í kortareiti nýja kerfisins. Nýja kerfið byrjar með eigin námsstöðu; námsferillinn úr Quizlet fylgir ekki með.

Um annan mun á vörunum en API-aðgang má lesa í [samanburði á Quizlet og valkosti með opnum frumkóða](/blog/quizlet-alternative/).

## Innri vafrabeiðnir eru ekki örugg flýtileið

Vefviðmót Quizlet sendir netbeiðnir, eins og öll nútímavefforrit. Það að finna eina slíka beiðni gerir hana ekki að studdum endapunkti fyrir forritið þitt.

Innri endapunktar sem vafrinn notar geta reitt sig á vafrakökur fyrir setuna, innri gagnasnið, varnir gegn misnotkun og forsendur sem tengjast núverandi viðmóti. Þeir geta breyst án þess að gefin sé út opinber útgáfa eða leiðbeiningar um aðlögun. Auk þess banna [þjónustuskilmálar Quizlet](https://quizlet.com/tos), síðast uppfærðir 28. maí 2026, vefskrap og aðra sjálfvirka gagnaöflun, ásamt óheimilli sjálfvirkri notkun þjónustunnar.

Það er ótraustur og áhættusamur grunnur jafnvel fyrir eigin skriftu, hvað þá heila vöru. Hér mun ég hvorki giska á endapunkta né gefa leiðbeiningar um bakverkfræði.

Flyttu þitt eigið sett út þegar þú þarft að færa það einu sinni. Felldu opinbert sett inn á aðra síðu þegar nemendur þurfa að nota það þar. Notaðu samþættinguna við ChatGPT eða Google Classroom fyrir nákvæmlega þau vinnuferli sem hún styður. Fyrir endurtekinn lestur og skrif skaltu velja hugbúnað sem skjalfestir skilyrði og aðgerðir sjálfvirknivæðingar, eða vinna Quizlet-hlutann áfram handvirkt þar til Quizlet birtir slíka skjölun.

## Hvernig þú sérð hvort staðan hefur breyst

Quizlet gæti sett á fót aðgangskerfi fyrir forritara eftir þann dag sem staðreyndir þessarar greinar voru yfirfarnar. Leitaðu að opinberri vefgátt fyrir forritara eða skjölun sem útskýrir hverjir geta skráð sig, hvernig auðkenning virkar, hvaða kortaaðgerðir eru studdar og hvaða notkunarreglur gilda.

Nýtt hugbúnaðarsafn frá þriðja aðila sem hjúpar aðgang að Quizlet myndi ekki breyta svarinu. Ekki heldur nýtt samstarf við tiltekinn aðila. Þar til Quizlet skjalfestir aðgang fyrir forritara í sjálfsafgreiðslu skaltu taka fullyrðingum um núverandi Quizlet API með fyrirvara og velja studda leið sem hentar því sem þú þarft að gera.
