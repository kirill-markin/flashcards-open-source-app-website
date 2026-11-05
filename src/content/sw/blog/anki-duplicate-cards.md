---
title: "Jinsi ya kupata kadi zinazojirudia kwenye Anki na kuchagua za kubakiza"
description: "Tambua chanzo cha kadi zinazojirudia kwenye Anki, linganisha noti zinazofanana na uchague nakala ya kubakiza. Jaribu zoezi fupi la kuondoa nakala na kukagua historia ya mapitio."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "kadi zinazojirudia kwenye Anki"
  - "kutafuta nakala kwenye Anki"
  - "kufuta noti zinazojirudia kwenye Anki"
  - "noti zinazojirudia kwenye Anki"
  - "historia ya mapitio kwenye Anki"
---

Unatambua swali ambalo tayari umelipitia, lakini Anki inalionyesha kana kwamba ni jipya. Huenda nakala nyingine iliingia ulipoingiza kadi. Au huenda hilo ni swali la pili ambalo Anki ilitengeneza kutoka kwenye noti ileile. Ukifuta mstari mmoja kwenye dirisha la **Browse**, unaweza kuondoa kadi zote za noti hiyo, hata kadi yenye swali la upande uliotaka kubakiza.

Ili kuondoa **kadi zinazojirudia kwenye Anki**, anza kwa kutafuta chanzo. Ikiwa swali linatoka kwenye noti tofauti, tumia **Notes → Find Duplicates** kutafuta noti zinazoweza kuwa nakala. Linganisha yaliyomo kwenye kila noti na historia ya kila kadi, kisha chagua nakala ya kubakiza katika kila kundi. Sehemu inayolingana inakupa pa kuanzia. Kagua noti nzima kabla ya kuamua uondoe ipi.

Maelekezo haya yanahusu Anki ya kompyuta. Yanatokana na mwongozo wa Anki na msimbo wa toleo lililotolewa, ambavyo vilikaguliwa tarehe 4 Oktoba 2026. Majina ya menyu na vitufe pamoja na mifano ya utafutaji ni ya kiolesura cha Kiingereza. Zoezi la kubuniwa hapa chini linaonyesha matokeo yanayotarajiwa ukifuata hatua hizo.

![Mwanachama wa klabu ya sataranji analinganisha ngome moja ya ziada yenye rangi iliyopauka na ngome mbili zilizochakaa kwenye ubao wa mbao](/blog/anki-duplicate-cards.png)

## Anza kwa kutambua kinachojirudia

Noti huhifadhi taarifa katika sehemu kama **Front** na **Back**. Anki hutumia violezo kutengeneza kadi kutokana na noti hiyo. Kwa mfano, noti moja ya msamiati inaweza kutoa kadi inayokuuliza maana ya neno na nyingine inayokuuliza neno lenyewe. Kila kadi ina ratiba yake, ingawa zote zinatoka kwenye noti moja. [Maelezo ya Anki kuhusu noti na sehemu zake](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

Katika dirisha la **Browse**, chagua hali ya **Cards** kisha ufungue **Cards → Info** kwa kila mstari unaotaka kukagua. Linganisha vitambulisho vya noti (**Note ID**). Vitambulisho vikilingana, kadi hizo zinatoka kwenye noti moja. Vikitofautiana, zinatoka kwenye noti tofauti. Katika `nid:123`, weka kitambulisho halisi badala ya `123` ili kuona kadi zote za noti hiyo katika mkusanyiko mzima. [Mwongozo wa Anki wa kutafuta kwa kitambulisho](https://docs.ankiweb.net/searching.html#object-ids)

| Unachokuta | Maelezo yanayowezekana | Hatua inayofuata |
| --- | --- | --- |
| Noti moja, nafasi za swali na jibu zimebadilishwa | Kadi mbili zilizokusudiwa kutoka kwenye noti moja | Angalia kama maswali yote mawili yanafaa |
| Noti moja, kadi zinaonyesha swali lilelile | Huenda violezo vya kadi vimejirudia | Linganisha violezo na mwonekano wa kila kadi |
| Noti tofauti, maswali yanaonekana sawa | Huenda noti zimejirudia | Linganisha noti nzima kabla ya kuchagua ya kubakiza |

Mwongozo wa kadi zinazouliza kwa pande mbili unaeleza jinsi kadi hizo zinavyofanya kazi. Unaweza kusitisha mapitio ya kadi moja na kuiacha kwenye mkusanyiko. [Kadi zinazouliza kwa pande mbili (kwa Kiingereza)](/blog/anki-reverse-cards/), [kusimamisha mapitio ya kadi (kwa Kiingereza)](/blog/anki-bury-vs-suspend/)

Ukikuta violezo vinavyofanana kabisa, fuata mwongozo wa Anki wa kutambua chanzo cha kadi za ziada. Ukiondoa kiolezo, utaathiri kila noti ya aina hiyo, hata katika vifurushi vingine. Shughulikia badiliko hilo kando na uamuzi wa kufuta kadi yenye swali linalojirudia. [Mwongozo wa Anki kuhusu kadi za ziada](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Chagua mahali pa kutafuta noti zilizojirudia

Fungua **Notes → Find Duplicates** na uchague sehemu ya kulinganisha, kwa mfano **Front**. Kwa kawaida Anki hutafuta katika aina zote za noti zenye sehemu hiyo. Tumia **Optional filter** kuweka mipaka ya utafutaji, kisha bofya **Search**. [Mwongozo wa kutumia Find Duplicates](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Kwa kifurushi cha kadi kinachoitwa `Cleanup practice`, andika utafutaji huu.

```text
deck:"Cleanup practice"
```

Utafutaji huu unajumuisha vifurushi vidogo vilivyo ndani ya kifurushi hicho. Ikiwa nakala zinaweza kuwa kwenye vifurushi tofauti, ondoa kichujio ili utafute katika mkusanyiko mzima. Usipopata nakala katika kifurushi kimoja, huenda ipo kwingine. [Muundo wa utafutaji wa vifurushi vya kadi kwenye Anki](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Bofya kundi la matokeo ili kukagua noti zake. Kitufe cha **Tag Duplicates** huweka lebo ya `duplicate` kwenye kila noti katika kila kundi, hata ile utakayobakiza. **Usifute matokeo yote ya `tag:duplicate`.** Tumia lebo hiyo kupata noti za kukagua, kisha uchague moja baada ya nyingine zile utakazofuta. [Msimbo uliotolewa wa kipengele cha kuweka lebo](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

Utafutaji huu hulinganisha maandishi katika sehemu uliyochagua. Maswali mawili yanaweza kupima jambo lilelile hata yakiandikwa tofauti, kwa hiyo huenda ukahitaji kuyatafuta mwenyewe. Maswali yanayofanana kabisa yanaweza pia kutoka katika lugha au kozi tofauti.

## Fanya maamuzi haya matatu kwenye karatasi

Fikiria una noti sita katika kifurushi cha `Cleanup practice`, bila vifurushi vidogo ndani yake. A na B zinatumia violezo vya **Basic (and reversed card)** kama vilivyo, hivyo Anki inatengeneza kadi mbili kwa kila noti. Noti C hadi F zinatumia **Basic** na kila moja ina kadi moja. Kadi zote nane ziko kwenye kifurushi hicho. Herufi ni za mfano huu pekee. Kwenye Anki, vitambulisho vya noti (**Note ID**) na vya kadi (**Card ID**) ni nambari.

| Noti | Front → Back | Hali ya kujifunza katika mfano huu | Uamuzi |
| --- | --- | --- | --- |
| A na B | `le vélo` → `bicycle` | Kadi ya A ya kutambua maana imepitiwa mara 12 na ile ya kukumbuka neno mara 3. Kadi zote mbili za B ni mpya | Bakiza A. Kagua B kwanza uone kama unaweza kuifuta |
| C na D | `Chemical symbol for silver?` → `Ag` | C imepitiwa mara 20 na D mara 6 | Linganisha historia zote mbili, kisha uchague kadi utakayoendelea kuipitia |
| E na F | E ina `bank` → `financial institution` na F ina `bank` → `side of a river` | Kila swali lina maana tofauti iliyokusudiwa | Bakiza zote mbili na ongeza muktadha ili kila swali lieleweke wazi |

Ukitafuta katika sehemu ya **Front**, unaweza kupata makundi hayo yote matatu. Ni rahisi kuamua kuhusu jozi ya kwanza. Kabla ya kuamua kwamba B ni nakala ya ziada, linganisha **kila sehemu** ya noti hizo pamoja na faili zake za picha au sauti, lebo, aina ya noti na mwonekano wa kadi za kila upande. Huenda B ina rekodi ya matamshi au swali ambalo halipo kwenye A.

Nakili maudhui yanayofaa kwa lengo lilelile la kujifunza kwenye noti utakayobakiza, kisha angalia jinsi kadi zitakavyoonekana. Nakili pia lebo muhimu kutoka kwenye noti ya awali. Ukitaka kuuliza kuhusu jambo tofauti, tengeneza swali jipya lenye historia yake ya mapitio.

Kwa C na D, idadi kubwa ya mapitio ni dokezo tu. Kwa kila kadi, kagua tarehe za mapitio na alama ulizotoa, muda wa sasa kati ya mapitio na wakati wa kuipitia tena. Huenda kadi iliyopitiwa mara nyingi zaidi ilihitaji kujifunzwa upya mara nyingi zaidi. Hakikisha swali na jibu vinafaa kabla ya kuchagua historia unayotaka kuendeleza. Majibu yakipingana, angalia chanzo cha somo kwanza. Idadi ya mapitio haiwezi kukuambia jibu lipi ni sahihi.

Ukibakiza C na kufuta D, **C itaendelea na historia yake pekee**. Hali yake ya kujifunza itabaki vilevile. Sehemu ya **Card Info** kwenye Anki huonyesha historia ya kila kadi kivyake. Rekodi za mapitio ya kadi za noti zilizofutwa hubaki kwenye takwimu za mkusanyiko mzima, lakini hazionekani tena kwenye takwimu za kifurushi husika wala kuhamishwa kwenye kadi uliyobakiza. [Maelezo ya Anki kuhusu Card Info](https://docs.ankiweb.net/stats.html#card-info), [takwimu za noti zilizofutwa](https://docs.ankiweb.net/stats.html#more)

Ikiwa bado hujaamua, ahirisha kufuta. Andika mambo unayohitaji kukagua na, ikihitajika, simamisha mapitio ya kadi unazofikiria kuondoa huku ukiendelea kuzichunguza.

## Futa nakala moja uliyokagua, kisha linganisha matokeo

Kabla ya kufuta kadi zako, sawazisha mabadiliko yoyote yaliyobaki kwenye vifaa vyako vingine. Kisha sawazisha Anki kwenye kompyuta ili mkusanyiko wake upate mabadiliko hayo. Kupitia **File → Export**, hifadhi faili ya **Anki Collection Package (`.colpkg`)**. Washa **Include Media** ili kujumuisha faili kama picha na sauti. Faili hiyo ina vifurushi vyote vya kadi, ratiba zake na historia ya mapitio. Ihifadhi mahali salama. Ukiingiza faili hiyo, mkusanyiko uliohifadhiwa utachukua nafasi ya kadi zilizopo katika wasifu uliofunguliwa. Mikusanyiko hiyo haitaunganishwa. [Mwongozo wa usawazishaji wa Anki](https://docs.ankiweb.net/syncing.html), [mwongozo wa kuhifadhi mkusanyiko kwenye faili](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Ukitaka kufanya mazoezi ya kufuta, tumia **File → Switch Profile** kuunda wasifu tofauti, kisha ingiza nakala hiyo rudufu humo. Usiunganishe wasifu wa mazoezi na AnkiWeb. Kila wasifu una mkusanyiko wake. Ukiunganisha wasifu wote wawili na akaunti ileile, mkusanyiko mmoja unaweza kuchukua nafasi ya mwingine. [Maelezo ya Anki kuhusu wasifu](https://docs.ankiweb.net/profiles.html), [mwongozo wa kuhifadhi na kuingiza faili za APKG na COLPKG (kwa Kiingereza)](/blog/anki-apkg-vs-colpkg/)

Katika zoezi hili, iite kadi ya A ya kutambua maana A1 na ile ya kukumbuka neno A2. Tumia B1 na B2 kwa kadi zinazolingana za noti B. Katika **Cards → Info**, andika vitambulisho halisi vya kadi mbili za A, wakati wa kuzipitia tena, muda kati ya mapitio na rekodi za mapitio unazoweza kuzitambua baadaye. Andika pia kitambulisho cha noti B. Linganisha hali ya kabla na baada ya kufuta katika kipindi kilekile, bila kupitia kadi hizo wala kubadili ratiba yake.

Fuata hatua hizi ili kufuta noti zinazojirudia kwenye Anki moja baada ya nyingine.

1. Katika **Browse**, tumia `nid:` kutafuta kwa kitambulisho halisi cha noti B. Katika hali ya **Cards**, kagua kila kadi iliyopatikana na uangalie mwonekano wa kadi katika pande zote mbili. Unapokagua noti zako, tafuta pia kadi za noti hiyo zilizo kwenye vifurushi vingine. Ondoa kichujio cha kifurushi katika utafutaji huu.
2. Hamia hali ya **Notes**. Hakikisha utafutaji umeleta noti moja tu, yaani B unayotaka kuondoa. Ichague peke yake, kisha tumia **Notes → Delete**. Amri hiyo huondoa noti iliyochaguliwa na kadi zake zote, hata ukiitumia kwenye mstari mmoja katika hali ya **Cards**. [Maelezo ya Anki kuhusu amri ya Delete](https://docs.ankiweb.net/browsing.html#notes)
3. Tafuta tena kwa kitambulisho cha noti B na uhakikishe hakuna matokeo. Tafuta vitambulisho vya kadi za A ulivyoandika kwa kutumia `cid:`, ukivitenganisha kwa koma. Linganisha taarifa za **Info** za kadi zote mbili na ulizoandika.
4. Tafuta `deck:"Cleanup practice"` na ulinganishe idadi ya mistari katika hali za **Notes** na **Cards**. Kagua noti zilizobaki kwa kutumia jedwali lifuatalo.

Haya ndiyo matokeo yanayotarajiwa ukifuta B pekee.

| Unachokagua | Kabla | Matokeo yanayotarajiwa baada ya kufuta |
| --- | --- | --- |
| Kifurushi kizima cha mfano | Noti 6, kadi 8 | Noti 5, kadi 6 |
| Kadi za baiskeli | A1, A2, B1, B2 | A1 na A2 pekee |
| Vitambulisho vya kadi za A, wakati wa kuzipitia tena, muda kati ya mapitio na historia | Thamani ulizoandika | Kadi, ratiba na rekodi za mapitio zilezile |
| Utafutaji kwa kitambulisho cha noti B | Kadi mbili za B | Hakuna matokeo |
| Noti kuhusu elementi ya fedha na maana za “bank” | C, D, E, F | Noti hizo nne zimebaki |

Katika mfano huu, kufuta noti moja kunaondoa kadi mbili. Ukifuta A badala ya B, utapata idadi ileile huku ukipoteza kadi ulizokwisha kupitia na ulizotaka kubakiza. Kagua vitambulisho pamoja na idadi ya kadi. Acha hali ya kujifunza na ratiba za kadi unazobakiza kama zilivyo wakati wa kuondoa nakala.

Grafu ya mapitio ya mkusanyiko mzima bado inaweza kujumuisha mapitio ya kadi zilizofutwa. Ili kuthibitisha kuwa maendeleo yamehifadhiwa, kagua kitambulisho cha kadi iliyobaki na taarifa zake kwenye **Info**.

Matokeo ya kundi hili yakilingana na rekodi yako, nenda kwenye kundi linalofuata na uchague nakala ya kubakiza humo. Ikiwa ulifanya mazoezi kwenye nakala ya mkusanyiko, rudia hatua ulizothibitisha katika wasifu wako halisi kwanza. Baada ya kukagua mkusanyiko wake, sawazisha Anki kwenye kompyuta. Kisha sawazisha vifaa vyako vingine kabla ya kuendelea kujifunza kwenye vifaa hivyo.

Ikiwa nakala ziliingia ulipoingiza kadi, soma mwongozo wa kusasisha noti kabla ya kuingiza faili nyingine. Ikiwa ulinakili noti ili kuweka jambo lilelile chini ya mada kadhaa, tumia lebo kuonyesha mada hizo na uhifadhi historia moja ya mapitio. [Kusasisha noti zilizopo kwa kutumia CSV (kwa Kiingereza)](/blog/anki-csv-update-existing-notes/), [kuchagua kati ya lebo na vifurushi vya kadi (kwa Kiingereza)](/blog/anki-tags-vs-decks/)
