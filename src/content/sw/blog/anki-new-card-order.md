---
title: "Mpangilio wa kadi mpya katika Anki — kuchagua kadi, kuzipanga na kukagua foleni"
description: "Elewa jinsi Anki inavyochagua na kupanga kadi mpya kwa mfano wa kadi sita. Kagua vikomo vya mafungu madogo, nafasi za kadi kwenye foleni na fungu ulilochagua kujifunzia."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "mpangilio wa kadi mpya katika Anki"
  - "utaratibu wa kuchagua kadi mpya katika Anki"
  - "utaratibu wa kupanga kadi mpya katika Anki"
  - "kupanga kadi za Anki kwa nafasi kuanzia ndogo"
  - "kadi za Anki kuonekana nje ya mpangilio"
---

Katika Anki, kadi mpya yenye nafasi ya 10 inaweza kuonekana baada ya kadi yenye nafasi ya 60. Ukianza kujifunza kutoka kwenye fungu kuu lenye chaguo la **Kwa fungu (Deck)** la kuchagua kadi na **Kwa mfuatano wa uteuzi (Order gathered)** la kuzipanga, Anki inaweza kumaliza kuchagua kadi za fungu dogo linalotangulia kabla ya kufikia fungu lenye kadi ya nafasi ya 10. Kupanga kadi kwa tarehe ya kuundwa katika kivinjari cha kadi (Browser) hakubadili foleni ya kujifunzia.

Anki huamua mpangilio wa kadi mpya kwa hatua mbili. Kwanza, **uteuzi** huamua ni kadi zipi zitaingia kwenye foleni ndani ya vikomo vya leo. Kisha, **upangaji** huamua kadi hizo zitaonekana kwa mfuatano gani. Anza kwa kubaini kama Anki imechagua kadi tofauti na ulizotarajia au kama imechagua kadi ulizotarajia lakini inazionyesha kwa mfuatano tofauti.

Maelekezo haya yanahusu mafungu ya kawaida katika Anki ya kompyuta. Mfano wa kadi sita ni hesabu iliyotayarishwa kwa makala hii kwa kutumia mwongozo wa wakati huo na toleo lililotolewa la [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). Hesabu hiyo ilihakikiwa tarehe 6 Oktoba 2026 kwenye karatasi, bila kufanya jaribio ndani ya programu.

![Mwanamume ameshikilia santuri ya nne juu ya sehemu tupu ya rafu, kando ya santuri tatu. Nyuma yake kuna kreti mbili zenye albamu ambazo hakuchagua.](/blog/anki-new-card-order.png)

## Chagua mpangilio unaotaka

Fungua **Mipangilio (Options)** ya fungu unalobofya ili kuanza kujifunza, kisha nenda kwenye **Mpangilio wa kuonyesha kadi (Display Order)**. Ukianza kujifunza kutoka kwenye fungu kuu, mpangilio wake ndio unaotumika katika kipindi hicho, hata kwa kadi za mafungu yake madogo.

| Matokeo unayotaka | Utaratibu wa kuchagua kadi mpya (New Card Gather Order) | Utaratibu wa kupanga kadi mpya (New Card Sort Order) |
| --- | --- | --- |
| Kufuata nafasi za kadi mpya kuanzia ndogo hadi kubwa katika fungu ulilochagua na mafungu yake yote madogo | Kwa nafasi kuanzia ndogo (Ascending position) | Kwa mfuatano wa uteuzi |
| Kutanguliza mafungu madogo kwa mpangilio wa alfabeti, kisha kufuata nafasi za kadi ndani ya kila fungu | Kwa fungu | Kwa mfuatano wa uteuzi |
| Kubakiza kadi zilezile zilizochaguliwa na kuzionyesha kwa mfuatano wa nasibu | Utaratibu wa kuchagua kadi unaotaka | Kwa nasibu (Random) |

Michanganyiko hii inafuata jinsi Anki inavyofafanua [uteuzi wa kadi](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) na [upangaji wa kadi](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) katika mwongozo wake wa Kiingereza. **Kwa nafasi kuanzia ndogo** hufuata nafasi zilizohifadhiwa za kadi mpya. Utaratibu wa kuingiza kadi na uhamishaji wa kadi kwa mkono unaweza kubadili nafasi hizo, hivyo mfuatano wake unaweza kutofautiana na ule wa tarehe za kuundwa.

Kabla ya kubadili chochote, angalia fungu hilo linatumia seti gani ya mipangilio (preset) na ni mafungu gani mengine yanayoitumia. Mipangilio ya kuonyesha kadi huhifadhiwa katika seti hiyo. Ukitaka mabadiliko yahusu fungu hili pekee, fuata kwanza [hatua za kutenga seti ya mipangilio kwa fungu moja](/blog/anki-deck-options-presets/) (kwa Kiingereza). Unaweza kuweka vikomo tofauti vya kila siku kwa kutumia **Fungu hili (This deck)** au **Leo tu (Today only)**. Mafungu yanayotumia seti moja ya mipangilio bado yanashiriki mpangilio wa kuonyesha kadi.

## Kokotoa ni kadi zipi nne zitaingia kwenye foleni

Fikiria fungu kuu la kawaida linaloitwa `OrderLab`, lenye mafungu mawili madogo na kadi hizi sita pekee. Kila kadi inatokana na dokezo lake la aina ya **Msingi (Basic)** linalotoa kadi moja tu. Kwa hiyo, kadi zote sita zina nambari ileile ya aina ya kadi, na hakuna kadi zinazoshiriki dokezo moja.

| Kadi | Fungu | Nafasi iliyohifadhiwa ya kadi mpya |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Chukulia kwamba kadi zote sita ni mpya, hakuna iliyofichwa kwa muda (buried) au kusimamishwa (suspended), na hakuna iliyo kwenye fungu lililochujwa (filtered deck). Mwanzoni hakuna kadi nyingine, marudio ya hatua ya kujifunza wala kadi za kupitia upya. Leo bado hujajifunza kadi yoyote. Hakuna fungu lililo juu ya `OrderLab`, na vikomo vinavyotumika vya kupitia kadi upya vinaacha nafasi ya kutosha kwa kadi zote sita mpya.

Chagua **OrderLab** kama fungu la kujifunzia. Kikomo chake cha kadi mpya kinachotumika ni **4**. Kikomo cha `01 First` ni **3**, na cha `02 Second` ni **2**, bila mabadiliko ya muda. Katika hesabu zote mbili za kulinganisha, tumia **Kwa mfuatano wa uteuzi** kupanga kadi. Anza kila hesabu kwenye karatasi kutoka hali ileile ya mkusanyo, bila kujibu kadi kati ya hesabu hizo.

Ukitumia **Kwa fungu** kuchagua kadi, Anki hufuata hatua hizi.

1. Anki hufikia `01 First` kabla ya `02 Second` kwa mpangilio wa alfabeti.
2. Inachagua **A, B, C** kwa kufuata nafasi zao. Kadi tatu zimetoka `01 First`, kwa hiyo nafasi moja imebaki katika kikomo cha fungu kuu.
3. Inachagua **D** kutoka `02 Second` na kufikia kikomo cha kadi nne cha fungu kuu.

Kadi mpya zinatarajiwa kuonekana kwa mara ya kwanza kwa mfuatano wa **A → B → C → D**. E na F zinabaki nje ya uteuzi huo.

Ukitumia **Kwa nafasi kuanzia ndogo**, Anki huzingatia kadi za mafungu yote mawili kwa mfuatano wa **D → A → E → B → F → C**. Kadi nne za kwanza ziko ndani ya vikomo vyote. Mbili zinatoka `02 Second`, mbili zinatoka `01 First`, na jumla ni nne. Uteuzi unaishia hapo.

Mfuatano unaotarajiwa ni **D → A → E → B**. C na F zinabaki nje ya uteuzi huo. [Msimbo wa uteuzi wa kadi](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) katika toleo hilo la Anki hutumia vikomo vya fungu husika na vya fungu kuu kila inapoongeza kadi.

Kikomo cha `02 Second` kinaruhusu hadi kadi mbili. Chaguo la **Kwa fungu** linaingiza kadi moja tu kutoka `02 Second` kwa sababu `01 First` tayari imetumia nafasi tatu kati ya nne. Chaguo la **Kwa nafasi kuanzia ndogo** linaingiza kadi mbili kutoka kila fungu katika mfano huu kwa sababu ya nafasi za kadi hizo. Katika mkusanyo mwingine, idadi inaweza kutofautiana kati ya mafungu.

## Ruhusu kadi zote sita ili kutenganisha uteuzi na mfuatano

Kwa ulinganisho wa pili kwenye karatasi, weka vikomo vinavyotosha kadi zote sita. Weka kikomo cha fungu kuu kuwa **6**, cha `01 First` kuwa **3**, na cha `02 Second` kuwa **3**. Endelea kutumia **Kwa mfuatano wa uteuzi** kupanga kadi.

| Utaratibu wa kuchagua kadi | Vikomo vya fungu kuu / `01 First` / `02 Second` | Mfuatano unaotarajiwa kadi zinapoonekana kwa mara ya kwanza |
| --- | --- | --- |
| Kwa fungu | 6 / 3 / 3 | A → B → C → D → E → F |
| Kwa nafasi kuanzia ndogo | 6 / 3 / 3 | D → A → E → B → F → C |

Taratibu zote mbili zinachagua kadi zote sita. Sasa tofauti pekee ni mfuatano. Ukiongeza kikomo cha fungu kuu pekee hadi sita na kuacha cha `02 Second` kuwa mbili, kadi tano tu zitaingia. F bado itabaki nje. Ongezeko hilo la vikomo ni la kukokotoa mfano huu tu.

## Upangaji hauwezi kurudisha kadi iliyoachwa nje

Rudisha vikomo vya awali vya **4 / 3 / 2**, kisha badili **Utaratibu wa kupanga kadi mpya** pekee uwe **Kwa nasibu**.

| Utaratibu wa kuchagua kadi | Kadi zinazopangwa kwa nasibu | Kadi ambazo upangaji hauwezi kuongeza |
| --- | --- | --- |
| Kwa fungu | A, B, C, D | E, F |
| Kwa nafasi kuanzia ndogo | D, A, E, B | C, F |

Anki inachanganya mfuatano wa kuonyesha kadi huku ikibakiza kadi zilezile katika kila kundi. Jedwali hili halionyeshi ni mfuatano gani hasa utakaotokea kwa nasibu. [Msimbo wa upangaji wa kadi](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) katika toleo hilo la Anki hupanga upya kadi zilizokwisha kuchaguliwa.

Chaguo la **Kwa aina ya kadi, kisha kwa mfuatano wa uteuzi (Card type, then order gathered)** pia hutumia kadi zilizokwisha kuchaguliwa. Kadi zote sita zinazotokana na madokezo ya aina ya Msingi zina nambari ileile ya aina ya kadi. Kwa hiyo, chaguo hili linahifadhi mfuatano wa uteuzi katika mfano huu.

Kwa mfano mwingine wa upangaji pekee, tuseme Anki tayari imechagua kadi nne kutoka kwenye madokezo yenye violezo zaidi ya kimoja kwa mfuatano wa **W (aina ya 2), X (aina ya 1), Y (aina ya 2), Z (aina ya 1)**. Upangaji kwa aina ya kadi unatoa **X → Z → W → Y**. Kadi za aina ya 1 zinatangulia, na ndani ya kila aina kadi zinabaki katika mfuatano wa uteuzi. Mfano huu unaanzia baada ya uteuzi. Ni mipangilio yako ya kuficha kadi kwa muda inayoathiri ni kadi zipi za dokezo moja zinaweza kuchaguliwa.

Nambari hiyo inaonyesha nafasi ya kiolezo cha kadi ndani ya aina ya dokezo. Maana kama “kutambua” au “kutoa jibu” hutegemea jinsi violezo vyako vilivyoundwa. Angalia maswali yenyewe kabla ya kudhani kwamba kupanga kwa aina ya kadi kutatanguliza kila swali linaloulizwa kutoka upande wa mbele wa kadi.

## Kagua nafasi katika kivinjari cha kadi kabla ya kuzibadili

Fungua **Kivinjari cha kadi (Browse)**, chagua hali ya **Kadi (Cards)**, kisha tafuta katika fungu lako pamoja na mafungu yake madogo. Kwa mfano huu, tumia amri hii ya utafutaji.

```text
deck:OrderLab is:new
```

Tumia menyu ya vichwa vya safu wima kuonyesha **Swali (Question)**, **Kadi (Card)**, **Fungu (Deck)**, **Zamu (Due)** na **Tarehe ya kuundwa (Created)**. Kwa kadi mpya, **Zamu** huonyesha nafasi yake kwenye foleni, na **Tarehe ya kuundwa** huonyesha wakati dokezo lake lilipoundwa. **Sehemu ya kupanga (Sort Field)** huonyesha maudhui ya sehemu ya dokezo iliyoteuliwa kutumika kwa upangaji. Kupanga jedwali kwa safu wima hubadili jinsi linavyoonekana katika kivinjari pekee. Nafasi zilizohifadhiwa na mpangilio wa kuchagua kadi za kujifunzia hubaki kama zilivyo. [Mwongozo wa Anki kuhusu safu wima za kivinjari cha kadi](https://docs.ankiweb.net/manual/browsing#columns) (kwa Kiingereza) unaeleza tofauti kati ya taarifa hizo.

Utafutaji wa `is:new` unaweza kujumuisha kadi mpya zilizosimamishwa au zilizofichwa kwa muda. Thamani zake katika safu ya **Zamu** huonekana ndani ya mabano. Utafutaji huu unaziondoa kwenye matokeo pamoja na kadi zilizo kwenye mafungu yaliyochujwa kwa sasa.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Mwongozo wa Anki wa Kiingereza unaeleza jinsi ya [kutafuta kwa hali ya kadi](https://docs.ankiweb.net/manual/searching#card-state) na [kutafuta kwa fungu](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Jina la fungu likiwa na nafasi kati ya maneno, liweke ndani ya alama za kunukuu, kama katika `deck:"My Deck"`. Hata utafutaji huu unaonyesha kadi zinazoweza kuchaguliwa pekee. Vikomo na ufichaji wa muda wa kiotomatiki wa kadi zinazotokana na dokezo moja vinaweza kupunguza idadi ya kadi zinazoingia kwenye foleni ya leo. [Mwongozo wetu kuhusu kuficha kadi kwa muda na kuzisimamisha](/blog/anki-bury-vs-suspend/) (kwa Kiingereza) unaeleza kwa nini kadi hizo hazipatikani.

Ikiwa nafasi zilizopo tayari zinafuata mpangilio unaotaka, ziache kama zilivyo. Ukihitaji kuzibadili, andika nafasi za awali, teua kadi chache mpya unazotaka kuhamisha, kisha tumia **Kadi → Badili nafasi (Cards → Reposition)**. Kagua dirisha la chaguo kwanza. **Sogeza nafasi za kadi zilizopo (Shift position of existing cards)** linaweza pia kubadili nafasi za kadi ambazo hukuteua na ambazo zina nambari kubwa zaidi za nafasi. Usipotumia chaguo hilo, nafasi mpya zinaweza kutumika tayari. Kadi zikishiriki nafasi moja, nambari hiyo pekee haitakuambia ipi itaonekana kwanza. Angalia [maelezo ya Anki kuhusu kubadili nafasi](https://docs.ankiweb.net/manual/browsing#cards) katika mwongozo wake wa Kiingereza.

Unaweza kubadili mipangilio ya uteuzi au upangaji bila kufuta historia ya kujifunza au ya kupitia kadi upya. Katika ukaguzi huu, zingatia nafasi za kadi mpya na mpangilio wa kuzionyesha.

## Kagua fungu unalobofya na nafasi iliyobaki leo

Katika mfano wa awali, ukichagua `OrderLab::02 Second` moja kwa moja, Anki huzingatia D, E na F pekee. Kwa kikomo chake cha kadi mbili, ukitumia **Kwa nafasi kuanzia ndogo** na **Kwa mfuatano wa uteuzi**, tarajia **D → E**. Nafasi zote nne za fungu kuu bado zipo, hivyo kadi hizo mbili zinaingia hata kama vikomo vya mafungu ya juu vinatumika. Ukichagua fungu kuu na kutumia **Kwa fungu** pamoja na vikomo vya **4 / 3 / 2**, mfuatano unaotarajiwa ni **A → B → C → D**.

Ukianza kipindi kutoka `OrderLab`, Anki hutumia mpangilio wa kuonyesha kadi wa `OrderLab` hata ukibadili ule wa `02 Second`. Fungu ulilochagua ndilo huamua mpangilio wa kuonyesha kadi na kikomo cha jumla, huku vikomo vinavyohusika vya mafungu madogo vikiendelea kutumika. **Tumia vikomo kuanzia juu (Limits start from top)** huamua kama vikomo vya mafungu ya juu vinatumika pia unapochagua fungu dogo moja kwa moja. Mwongozo wa Anki wa Kiingereza unaeleza [kanuni za mafungu madogo](https://docs.ankiweb.net/manual/deck-options#subdecks) na [chaguo la kutumia vikomo vya mafungu ya juu](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Kagua pia vikomo vya kupitia kadi upya. Kwa chaguo-msingi, kikomo cha kupitia kadi upya pia huwekea kadi mpya kikomo. **Kadi mpya zisifuate kikomo cha kupitia kadi upya (New cards ignore review limit)** hubadili utaratibu huo. Chaguo hili na **Tumia vikomo kuanzia juu** yanatumika katika mkusanyo mzima, kama inavyoonekana kwenye [msimbo wa kiolesura cha vikomo vya kila siku](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte) wa toleo hilo. Andika hali ya kila chaguo kabla ya kuamua kama kikomo cha kadi mpya bado kinaacha nafasi ya kuona kadi zaidi leo.

Tumia **Hakiki (Preview)** katika kivinjari cha kadi ili kuona maswali bila kuyajibu. Katika kipindi chako kijacho cha kawaida cha kujifunza, jaza jedwali hili fupi.

| Andika | Swali linalojibiwa |
| --- | --- |
| Fungu ulilobofya ili kujifunza, seti yake ya mipangilio, utaratibu wa kuchagua kadi na utaratibu wa kuzipanga | Ni mpangilio upi wa kuonyesha kadi unaotumika katika kipindi hiki? |
| Kadi unazotarajia na nafasi zake zilizohifadhiwa | Tatizo liko kwenye uteuzi wa kadi au kwenye mfuatano wake? |
| Vikomo vya kadi mpya na vya kupitia kadi upya, vikomo maalumu vya fungu au vya leo, na kadi ambazo tayari umeshughulikia leo | Nafasi ngapi zimebaki ndani ya vikomo hivyo? |
| Vikomo vya mafungu ya juu na hali ya chaguo mbili za vikomo zinazotumika katika mkusanyo mzima | Ni vikomo gani vya ziada vinavyotumika? |
| Kadi zilizofichwa kwa muda, zilizosimamishwa, zilizo katika mafungu yaliyochujwa au zinazoshiriki dokezo moja | Ni kadi zipi ambazo zinaonekana kuwa na nafasi ya kuingia lakini huenda zisipatikane? |
| Mfuatano wa kadi ulipoziona mara ya kwanza, kando na marudio katika hatua ya kujifunza | Je, mfuatano wa kadi mpya unalingana na ule uliotarajia? |

Baada ya kujibu kadi mpya, inaweza kujitokeza tena katika hatua ya kujifunza na kukatiza mfuatano wa kipindi hicho. **Mpangilio wa kadi mpya na za kupitia upya (New/Review Order)** huweka kadi mpya kabla ya kadi za kupitia upya, baada yake au katikati yake. Uteuzi na upangaji wa kadi mpya bado hufuata mipangilio yake. [Msimbo wa kuunda foleni](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) katika toleo hilo huunganisha makundi hayo baada ya kupanga kadi mpya.

Maliza ukaguzi pale kadi ulizotarajia zichaguliwe na mfuatano wa kuonekana kwake kwa mara ya kwanza vinapolingana na unachoona. Ikiwa bado kuna tofauti, hifadhi nafasi za kadi, mipangilio, fungu ulilochagua, toleo la Anki na mfuatano ulioona ili uweze kuchunguza tofauti hiyo. Jumuisha pia viendelezi vinavyohusika. Ukitaka kufanya mazoezi ya ziada kuhusu mada fulani, fuata [hatua za kufanya mazoezi kwa kutumia fungu lililochujwa](/blog/anki-filtered-decks-without-rescheduling/) (kwa Kiingereza).
