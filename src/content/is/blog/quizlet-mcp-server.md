---
title: "Er Quizlet með MCP-þjón árið 2026? Það sem Claude og Codex geta notað"
description: "Quizlet birtir engar opinberar leiðbeiningar um MCP-þjón árið 2026. Berðu saman ChatGPT-appið, útflutning sem aðeins höfundar hafa aðgang að og örugga leið fyrir endurtekinn aðgang Claude eða Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP-þjónn"
  - "Quizlet Claude-tengi"
  - "tengja Quizlet við Claude"
  - "Quizlet Codex"
  - "Quizlet ChatGPT-app"
  - "valkostur við Quizlet API"
---

Miðað við stöðuna 12. september 2026 er hvorki MCP-þjóni né opinberum forritaskilum sem forritarar geta fengið aðgang að í sjálfsafgreiðslu lýst í opinberum leiðbeiningum Quizlet. Ef þú leitaðir að slóð á Quizlet MCP til að líma inn í Claude, Codex eða annan MCP-biðlara eru engar opinberar uppsetningarleiðbeiningar í opinberum leiðbeiningum Quizlet eins og staðan er núna.

Quizlet er með opinbert app í ChatGPT. Það getur breytt ChatGPT-samtali í nýtt Quizlet-spjaldasafn, en þetta afmarkaða verkferli er ekki endurnýtanlegur Quizlet MCP-þjónn. Ef þú þarft að veita gervigreindarfulltrúa endurtekinn aðgang að spjöldum sem þegar eru til er raunhæfa leiðin að flytja texta út úr safni sem þú bjóst til, geyma óbreytt afrit, fara yfir flutninginn og nota námsspjaldakerfi sem styður beinlínis að gervigreindarfulltrúar lesi og skrifi gögn.

**Staðreyndir yfirfarnar:** 12. september 2026.

> **Upplýsingar um hagsmunatengsl:** Ég heiti Kirill Markin og þróa Nibomo. MCP-þjónn og Agent API Nibomo eru meðal valkostanna hér að neðan. Nibomo getur hvorki tengst Quizlet-reikningi né flutt inn efni af Quizlet-slóð.

![Garðyrkjumaður ber eina unga plöntu úr lokuðu gróðurhúsi í beð með greinóttu dropavökvunarkerfi](/blog/quizlet-mcp-server.png)

## ChatGPT-appið, útflutningur og MCP leysa ólík verkefni

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) er opinn staðall til að tengja gervigreindarforrit við ytri kerfi. MCP-þjónn veitir samhæfum biðlurum yfirleitt þekktan endapunkt og skilgreint safn verkfæra sem þeir geta kallað á.

[Opinber tilkynning Quizlet um ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) lýsir annars konar fyrirkomulagi. Þú setur Quizlet-appið upp í ChatGPT, byrjar fyrirmæli á `@Quizlet`, forskoðar námsspjöldin sem verða til inni í ChatGPT og opnar síðan safnið í Quizlet til að laga það að þínum þörfum og læra efnið.

Þetta er gagnlegt þegar verkefnið er að „breyta þessu ChatGPT-samtali í Quizlet-safn“. Í tilkynningunni er hvorki birtur almennur Quizlet MCP-endapunktur, Claude eða Codex veittur aðgangur að Quizlet-söfnunum þínum né boðin endurnýtanleg aðgangsskilríki fyrir forritara.

Þetta segir ekkert um óopinbera innviði eða innri kerfi Quizlet. Hér er aðeins lýst viðmótinu sem Quizlet gerir aðgengilegt í opinberum leiðbeiningum sínum. Fjallað er nánar um mörk aðgangs forritara í [Er Quizlet með opinbert API árið 2026?](/is/blog/quizlet-api/).

Munurinn er þessi:

| Það sem þú vilt í raun gera | Leiðin sem er best studd núna | Við hverju má búast |
| --- | --- | --- |
| Búa til nýtt Quizlet-safn úr ChatGPT-samtali | Opinbera ChatGPT-appið frá Quizlet | Afmarkað `@Quizlet`-ferli inni í ChatGPT og síðan breytingar og nám í Quizlet |
| Flytja hugtök og skilgreiningar úr safni sem þú bjóst til | Útflutningur á vef Quizlet | Textaafrit sem þú tekur einu sinni, varðveitir og yfirfer |
| Leyfa Claude, Codex eða öðrum fulltrúa að lesa eða breyta námsspjöldum ítrekað | Námsspjaldakerfi með skjalfestum MCP-þjóni eða API fyrir gervigreindarfulltrúa | Auðkenndur aðgangur að vinnusvæði í móttökukerfinu, ekki að Quizlet |
| Þróa hugbúnað sem notar gögn Quizlet-reiknings | Bíða eftir opinberum leiðbeiningum fyrir forritara eða heimilaðri samstarfsleið | Ekkert opinbert Quizlet API- eða MCP-viðmót sem hægt er að fá aðgang að í sjálfsafgreiðslu er skjalfest eins og staðan er núna |

ChatGPT-app Quizlet styður eitt tiltekið ferli til að búa til efni. Útflutningur sér um afmarkaðan flutning. MCP sér um endurtekinn aðgang að kerfi sem býður vísvitandi upp á verkfæri. Þessar leiðir koma ekki hver í annarrar stað.

## Veldu stystu leiðina sem er studd

Ef opinbera ChatGPT-appið hentar verkefninu skaltu nota það. Það er engin ástæða til að bæta við öðru kerfi eingöngu til að búa til eitt Quizlet-safn úr einu samtali.

Ef þú þarft aðeins öryggisafrit eða að flytja efni einu sinni skaltu nota útflutning Quizlet. Ef þú þarft að fulltrúi komi aftur á morgun, finni spjaldastokk, bæti við spjöldum og leiðrétti þau þarftu skjalfest viðmót fyrir lestur og skrif í móttökukerfinu. Þar til Quizlet birtir slíkt viðmót getur þetta endurtekna verkferli ekki farið fram með studdri beinni tengingu við Quizlet-reikninginn þinn.

Sömu mörk gilda um sérsmíðaðan hugbúnað sem byggir sérstaklega á Quizlet-gögnum. Vefbeiðni, gamalt forritasafn sem hjúpar viðmótið eða samþætting sem einhver hefur búið til með bakverkfræði kemur ekki í stað gildandi leiðbeininga fyrir forritara.

## Tryggðu að hægt sé að afturkalla flutning úr safni sem þú bjóst til

Í [opinberum leiðbeiningum Quizlet um útflutning](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) segir að aðeins höfundur geti flutt safn út og að það sé aðeins hægt á vefnum. Ferlið er **Meira → Flytja út → Afrita texta** (**More → Export → Copy text**). Útflutningurinn inniheldur hugtök og skilgreiningar. Quizlet segir að ekki sé hægt að flytja út myndir og að ekki sé hægt að flytja út afrituð söfn.

Varfærinn flutningur á safni sem þú bjóst til tekur fá skref:

1. Notaðu útflutning á vef Quizlet og límdu niðurstöðuna í textaskrá án sniðs.
2. Vistaðu óbreytt UTF-8-afrit áður en þú breytir aðgreinum, línuskiptum eða orðalagi.
3. Breyttu afriti, ekki upprunalegu útflutningsskránni.
4. Skoðaðu sýnishorn úr upphafi, miðju og enda, auk skilgreininga sem ná yfir margar línur og stafa sem eru ekki í latneska stafrófinu.
5. Flyttu vinnuafritið inn eða hengdu það við, forskoðaðu fram- og bakhliðar nokkurra spjalda og vistaðu spjöldin ekki fyrr en því er lokið.
6. Geymdu Quizlet-safnið og upprunalegu skrána þar til búið er að opna og prófa stokkinn í móttökukerfinu.

Ítarlegar leiðbeiningar um aðgreina, CSV og yfirferð skráa eru í [Hvernig á að flytja Quizlet-söfn út árið 2026](/is/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Auðvelt er að missa af mikilvægri takmörkun: útflutningurinn flytur texta spjaldanna, ekki myndir, möppur, námssögu, stöðu þekkingar á efninu eða endurtekningaráætlun úr Quizlet.

Þess vegna skiptir máli að geta snúið við flutningnum. Ef skilgreining sem nær yfir margar línur verður að tveimur spjöldum eða aðgreinir færir efni milli reita hefurðu óbreyttu skrána til viðmiðunar.

## Það sem Claude og Codex geta notað eftir útflutninginn

Nibomo birtir fjartengdan MCP-endapunkt á slóðinni:

`https://mcp.nibomo.com/mcp`

> [Tengja við Claude](https://claude.ai/directory/nibomo) · [Leiðbeiningar](/is/docs/mcp-connector/)

Í [leiðbeiningum um MCP-tengið](/is/docs/mcp-connector/) eru skilgreind átta verkfæri: `list_workspaces`, `sql_query` fyrir lestur, `sql_execute` fyrir skrif, `get_guide` fyrir leiðbeiningar til uppflettingar og `next_review_card`, `reveal_answer` og `submit_review` fyrir upprifjun. MCP-biðlarar með notendaviðmóti geta fengið aðgangsheimild með OAuth. Gervigreindarfulltrúar í skipanalínu geta í staðinn byrjað á [leiðbeiningum um Agent API](/is/docs/api/) og notað HTTP-ferlið sem þar er birt.

`get_usage_limits` — les eingöngu upplýsingar um áskriftarleið reikningsins, notkunarmörk og gervigreindarnotkun í yfirstandandi mánuði; það les hvorki né breytir spjöldum.

Þetta gerir Nibomo ekki að Quizlet-tengi. Verkferlið sem er stutt er:

1. að flytja texta út úr Quizlet-safni sem þú bjóst til;
2. að varðveita upprunalegu skrána og skoða vinnuafrit;
3. að yfirfara hvernig efnið raðast á spjöldin áður en þau eru vistuð í Nibomo; og
4. að tengja Nibomo-vinnusvæðið sem verður til við samhæfan biðlara fyrir lestur og skrif síðar.

Fyrir Claude eru tengiskrefin í [Hvernig á að tengja Nibomo við Claude með MCP](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex og aðrir fulltrúar geta notað þá skjalfestu MCP- eða Agent API-leið sem umhverfi þeirra styður.

Nibomo getur hvorki lesið efni af Quizlet-slóð, speglað Quizlet-reikning, samstillt síðari breytingar í Quizlet né endurheimt myndir og námssögu sem útflutningurinn sleppir. Það býr til eigin spjöld og nýja endurtekningaráætlun úr efninu sem þú velur að flytja yfir.

Ef þú ert að meta hvort það borgi sig að skipta um kerfi af fleiri ástæðum en aðgangi gervigreindarfulltrúa skaltu skoða [samanburðinn á valkosti við Quizlet með opinn frumkóða](/blog/quizlet-alternative/).

## Takmarkaðu heimildir við það sem verkefnið krefst

Opinber viðmótslýsing dregur úr ágiskunum við samþættingu, en hún gerir ekki allar MCP-aðgerðir öruggar. OAuth auðkennir tenginguna. Það tryggir hvorki að spjald sem gervigreind býr til sé rétt né að spjaldagögn sem eru sótt haldist innan námsspjaldakerfisins. Það metur heldur ekki hvort breyting samræmist ætlun þinni.

Nibomo heldur lesaðgerðum aðskildum frá verkfærum sem skrifa gögn: `sql_execute` fyrir spjöld og stokka og `submit_review` fyrir upprifjun. OAuth-aðgangsskilríkið nær þó áfram yfir viðmót tengisins, þannig að það fer eftir biðlaranum hvernig hægt er að loka á verkfæri og krefjast samþykkis. Byrjaðu á litlu vinnusvæði án viðkvæmra gagna. Leyfðu fulltrúanum aðeins að lesa þau gögn sem þarf fyrir verkefnið, láttu hverja skrifaðgerð krefjast sérstaks samþykkis ef biðlarinn styður það og skoðaðu vinnusvæðið og breytinguna sem er lögð til áður en þú samþykkir hana.

Ekki veita aðgang að einkagögnum sem þú notar við nám fyrr en þú hefur skoðað skilmála gervigreindarbiðlarans um varðveislu og meðhöndlun gagna. Fyrir fyrsta flutning dugar einföld regla: geymdu upprunalega útflutninginn, forskoðaðu nokkur spjöld, samþykktu afmarkaða skrifaðgerð og staðfestu niðurstöðuna í móttökuforritinu áður en þú heldur áfram.

## Ekki gera óopinber vafrasamskipti að API

Beiðni sem sést í þróunarverkfærum vafrans er ekki opinbert Quizlet API. Óopinberir endapunktar geta reitt sig á setukökur, innri gagnasnið og hegðun sem breytist án fyrirvara. Öll sjálfvirk notkun þarf líka að samræmast [þjónustuskilmálum Quizlet](https://quizlet.com/tos) og þeim heimildum sem þú hefur fyrir efninu.

Þessi grein veitir hvorki leiðbeiningar um vefskrap né endapunkta sem fundist hafa með bakverkfræði. Ef opinbera ChatGPT-appið hentar verkefninu skaltu nota það. Ef þú bjóst til safnið og þarft að flytja það einu sinni skaltu flytja það út. Ef þú þarft að gervigreindarfulltrúar geti lesið og skrifað gögn ítrekað skaltu flytja yfirfarið efni í kerfi sem birtir slíkt viðmót. Haltu síðan áfram að vinna handvirkt í Quizlet nema Quizlet birti nýjar leiðbeiningar.
