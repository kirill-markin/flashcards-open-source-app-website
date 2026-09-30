---
title: "Parimad Anki FSRS-i seaded 2026. aastal: meelespüsimine, õppesammud ja kordamiskoormus"
description: "Vali Anki 26.08 ja FSRS-6 jaoks turvalised seaded: soovitud meelespüsimine, õppesammud, optimeerimine, ümberajastamine ja töömaht."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS-i seaded"
  - "parimad FSRS-i seaded"
  - "Anki FSRS-i seaded"
  - "FSRS-i soovitud meelespüsimine"
  - "FSRS-i õppesammud"
  - "FSRS-i simulaator"
  - "FSRS-i parameetrite optimeerimine"
  - "FSRS-6"
---

Anki soovitud meelespüsimise tõstmine 90%-lt 95%-le kõlab väikese muudatusena. Töömaht ei kasva aga lihtsalt viis protsenti. Kõrgema sihi puhul peab FSRS kordamisintervalle lühendama ning pikalt kasutatud kaardikogu kordamisjärjekord võib märgatavalt kasvada. Kui lülitad sisse ka valiku **Reschedule cards on change**, võib osa lisatööst saabuda kohe.

Parimad FSRS-i seaded ei ole seega parameetrite rida, mille saad kelleltki kopeerida. Nendeni jõudmiseks tee järjest järgmised otsused: määra jõukohane töömaht, vali selle piires meelespüsimise siht, sobita mudel oma kordamisajalooga ja jäta olemasolevad kordamiskuupäevad alles, kui sa just ei soovi neid teadlikult ümber arvutada.

Allpool toodud nimetused ja käitumine vastavad [Anki versioonile 26.08](https://github.com/ankitects/anki/releases/tag/26.08) ning selle FSRS-6 seadistusvõimalustele. Kui soovid enne seadeid mudelist aru saada, loe artiklit [Mis on FSRS?](/blog/what-is-fsrs/). Kui alles valid ajastamisalgoritmi, alusta [FSRS-i ja SM-2 võrdlusest](/blog/fsrs-vs-sm-2/).

> **Seotus tootega:** Olen Kirill Markin ja arendan [Nibomot](/et/features/). Anki pakub personaalset parameetrite sobitamist ja eksperimentaalseid koormuse simulaatoreid, mida Nibomol praegu ei ole. Artikli lõpuosas toodud võrdlus kirjeldab neid erinevusi selgelt.

**Faktid kontrollitud:** 8. septembril 2026.

![Lüüsioperaator katsetab veevoolu mõõtkavamudelil enne päris lüüsi muutmist](/blog/fsrs-settings-v2.png)

## Lühivastus: alusta siit

Enamikule Anki kasutajatest sobivad need ettevaatlikuks lähtepunktiks, mitte universaalseteks seadeteks:

| Seade või harjumus | Turvaline lähtevalik | Põhjus |
| --- | --- | --- |
| Soovitud meelespüsimine | `0.90` | See on Anki vaikeväärtus, mis tasakaalustab meelespüsimist ja kordamiskoormust. |
| FSRS-i parameetrid | Kasuta **Optimize Current Preset**; ära kleebi kaale mujalt ega muuda neid käsitsi | Optimeerija sobitab mudeli sinu kordamisajalooga. |
| Optimeerimise sagedus | Kõige sagedamini kord kuus; tavaliselt piisab ühest korrast mõne kuu jooksul | Anki ei soovita sagedast optimeerimist. |
| Õppesammud | Hoia sammude arv väike ja lõpeta need samal päeval | Pikad sammujadad lükkavad mudelipõhist ajastamist edasi. |
| Taasõppesammud | Hoia neid võimalikult vähe ja alla ühe päeva pikkustena | Sama piir kehtib ka pärast ebaõnnestunud kordamist. |
| Reschedule cards on change | Väljas | Uued seaded saavad rakenduda tulevaste kordamiste kaudu, tänast järjekorda ümber arvutamata. |
| Maksimaalne intervall | Jäta alles vaikeväärtus 100 aastat | Lühem ülempiir toob hästi omandatud kaardid sagedamini tagasi. |
| Uusi kaarte päevas | Lähtu jõukohasest töömahust | Iga uus kaart nõuab õppimist praegu ja kordamist hiljem. |
| Again ja Hard | Again tähendab, et vastus ei meenunud; Hard tähendab vaevalist, kuid õiget meenutamist | Valed hinnangud annavad mudelile vale ajaloo. |

Kui kordamiskoormus on jõukohane ja sinu seaded on juba nende lähedal, ei pruugi midagi parandada olla. Seadete sättimine ei ole õppimine.

## Hoia kolm otsust lahus

Soovitud meelespüsimine, FSRS-i parameetrid ja päevane töömaht kipuvad sageli üheks mõisteks sulama. Tegelikult juhivad need eri asju:

- **Soovitud meelespüsimine** on sinu meenutamise siht. Valid selle oma eesmärkide ja õppimiseks saadaoleva aja järgi.
- **FSRS-i parameetrid** sobitavad mälumudeli kordamisajalooga. Need arvutab Anki optimeerija.
- **Uute kaartide ja kordamiste piirangud** määravad, kui palju materjali süsteemi lisandub ja kui palju kordamiseks valmis kaarte Anki iga päev näidata saab.

See eristus teeb probleemide lahendamise palju lihtsamaks. Suur järjekord ei tähenda automaatselt valesid parameetreid. Tähtsa materjaliga kaardipakk ei vaja tingimata eraldi parameetrikomplekti. Ja soovitud meelespüsimise vähendamine ei muuda jõukohaseks sellist uute kaartide lisamise tempot, mis seda kunagi polnud.

## Vali soovitud meelespüsimine töömahu, mitte ambitsiooni järgi

Soovitud meelespüsimine ütleb FSRS-ile, kui suure tõenäosusega soovid kaardi vastust selle kavandatud kordamishetkel mäletada. Väärtusega `0.90` ajastab FSRS kordamise hetkele, mil prognoositav meenutamise tõenäosus on ligikaudu 90%. See on mudeli siht, mitte garantii, et igal õppesessioonil või eksamil tuleb täpselt 90% õigeid vastuseid.

Valikul on mõlemas suunas oma hind:

- Kõrgema soovitud meelespüsimise korral intervallid lühenevad ja kordamisi tuleb juurde.
- Madalama väärtuse korral intervallid pikenevad ja vastus ununeb sagedamini.
- Liiga madala väärtuse korral võib ununenud kaartide taasõpe kulutada osa ajast, mida lootsid säästa.

Anki vaikeväärtus on 90%. [Soovitud meelespüsimise juhend](https://docs.ankiweb.net/deck-options.html#desired-retention) hoiatab, et sihi lähenedes 100%-le kasvab töömaht kiiresti, ja soovitab jääda alla 97%. Ametlik [optimaalse meelespüsimise selgitus](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) käsitleb kõvera teist otsa: ka väga madal meelespüsimine võib olla ebatõhus, sest ununenud kaardid vajavad rohkem tööd.

Alusta väärtusest `0.90` ja muuda seda alles pärast töömahu hindamist. Kõrgem siht võib olla mõistlik materjali puhul, mille unustamisel on tuntav hind. Madalam siht võib sobida siis, kui kordamised tõrjuvad välja väärtuslikuma õppimise. Kumbki muudatus ei paranda ebaselgeid kaarte, ebaausaid hinnanguid ega liiga suurt uute kaartide hulka.

### Meelespüsimise siht võib kehtida pakile, parameetrid kogu seadekomplektile

Anki 26.08-s saad valida, kas **Desired retention** kehtib ühisele seadekomplektile (**Shared Preset**) või ainult sellele kaardipakile (**This deck**). Seega võid kasutada seotud kaardipakkide jaoks üht parameetrikomplekti, andes samal ajal mõnele pakile eraldi meelespüsimise sihi.

Kasuta pakipõhist väärtust siis, kui unustamise hind erineb. Kutseeksami kaardipakk võib õigustada kõrgemat sihti kui vähetähtis teatmematerjal, kuigi mõlemad kasutavad sama sobitatud mudelit.

Valik **This deck** ei muuda FSRS-i parameetreid pakipõhiseks. Vaikimisi sobitab Anki parameetrid kõigi praeguse seadekomplektiga seotud pakkide kordamisajaloo põhjal. Kui pakkide rühmad erinevad sinu jaoks raskuselt väga palju, tuleb nende eraldi sobitamiseks kasutada eraldi seadekomplekte.

## Help Me Decide ja Simulator vastavad eri küsimustele

Anki 26.08 pakub kahte eraldi eksperimentaalset tööriista:

- **Help Me Decide (Experimental)** näitab sinu andmetel põhinevat meelespüsimise ja töömahu kõverat. Sellega saad uurida: „Milline meelespüsimise siht sobib kordamiste arvuga, millega toime tulen, või ajaga, mille saan neile kulutada?”
- **FSRS Simulator (Experimental)** hindab, kuidas üks seadistus võib aja jooksul toimida. Sellega saad võrrelda meelespüsimise, uute kaartide lisamise tempo, kordamispiirangute ja maksimaalse intervalli muudatusi.

[FSRS-i simulaatori dokumentatsioon](https://docs.ankiweb.net/deck-options.html#the-simulator) loetleb selle peamised sisendid:

- simuleeritavate päevade arv
- simuleeritavate täiendavate uute kaartide arv
- uute kaartide arv päevas
- maksimaalne kordamiste arv päevas
- maksimaalne intervall
- soovitud meelespüsimine ja seadekomplekti FSRS-i parameetrid

Simulatsioon kasutab ka seadekomplekti kuuluvate kaartide tegelikke mäluseisundeid. Nii on see pikalt kasutatud kogu puhul kasulikum kui tänaseks ajastatud kaartide arvu korrutamine suvalise protsendiga.

Enne kasutusel olevate seadete muutmist proovi kolme stsenaariumi:

1. Praegune meelespüsimise siht ja uute kaartide lisamise tempo.
2. Meelespüsimise siht, mida kaalud.
3. Sama siht, kuid vähem uusi kaarte päevas.

Kolmas katse kontrollib levinud alternatiivi: säilita meenutamise siht ja vähenda uue materjali lisamise tempot. Kui see annab jõukohase prognoosi, ei pea sa üksnes järjekorra vähendamiseks sagedasema unustamisega leppima. Põhjalikum juhend on artiklis [Mitu uut õpikaarti päevas?](/blog/how-many-new-flashcards-per-day/).

Mõlemad tööriistad annavad hinnanguid. Vahele jäänud päevad, muudetud kaardid, uus materjal ja muutuvad hindamisharjumused võivad tegeliku töömahu graafikust kõrvale viia. Kasuta võrdlust suuna valimiseks; see ei ennusta täpselt, milline on järjekord mitme kuu pärast.

Vanemad juhendid võivad mainida funktsiooni **Compute Minimum Recommended Retention** ehk CMRR. Anki eemaldas selle versioonis 25.07. See ei kuulu enam soovitud meelespüsimise valimise praegusse töövoogu.

## Optimeeri FSRS-i parameetreid enda ajaloo põhjal

Soovitud meelespüsimine väljendab sinu eesmärki. FSRS-i parameetrid kirjeldavad, kuidas mudel sinu kordamistega sobitub.

Anki 26.08 puhul kasuta aktiivse seadekomplekti parameetrite sobitamiseks valikut **Optimize Current Preset**. Vaikimisi kaasab Anki iga seda seadekomplekti kasutava paki kordamisajaloo; kui andmevalim peab olema kitsam, saad otsingut kohandada. **Optimize All Presets** uuendab kõiki seadekomplekte ühe toiminguga.

Ära sisesta kaale käsitsi ega kopeeri neid Redditist, videost või kellegi teise kaardipakist. Nende kaardid, kordamise ajastus ja hindamisharjumused ei ole sinu ajalugu. Kenasti vormistatud rida [FSRS-6 kaale](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) ei ole ülekantav õpistrateegia.

Optimeeri uuesti alles siis, kui on kogunenud arvestatav hulk uut kordamisajalugu. Anki käsiraamat ütleb, et kord kuus on piisav, versiooni 26.08 rakendusesisene juhis peab piisavaks ühte korda mõne kuu jooksul. Praktiline järeldus on sama: iganädalaseks optimeerimiseks pole põhjust, rääkimata optimeerimisest pärast iga õppesessiooni.

### Kasuta sobivuskontrolli praeguse seadekomplektiga

Lülita sisse **Check health when optimizing (slow)**, kui soovid, et Anki hindaks, kui hästi suudab FSRS praeguse seadekomplekti ajalooga kohaneda. See kontroll töötab käsuga **Optimize Current Preset**, mitte käsuga **Optimize All Presets**.

Kui tulemus on kehv, uuri enne kaalude muutmist andmeid. [Anki FSRS-i parameetrite juhend](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nimetab levinud põhjusi: vähem kui mõnisada kordamist, nupu Hard kasutamine ebaõnnestumise järel ja nupu Again vajutamata jätmine, kui vastus ei meenunud. Kui kasulikku ajalugu on vähe, jäta vaikeväärtused alles ja optimeeri hiljem, selle asemel et laenata teise kasutaja parameetreid.

## Again tähendab ebaõnnestumist; Hard on edukas meenutamine

See harjumus loeb sama palju kui ükskõik milline seade.

Vajuta **Again**, kui sa ei suutnud nõutud vastust meenutada või vastasid valesti. Vajuta **Hard** ainult siis, kui meenutasid vastuse õigesti, kuid suure pingutuse või kõhklusega. Ka Good ja Easy tähistavad edukat meenutamist.

Nupu Hard vajutamine lühikese Again-intervalli vältimiseks salvestab ebaõnnestumise järel õnnestumise. FSRS õpib siis vale sündmuse põhjal. Vali nupp, mis kirjeldab meenutamist, mitte intervall, mida nuppude kohal näha soovid.

Ebaselged kaardid muudavad ausa hindamise keerulisemaks. Kui küsimus nõuab viit fakti ja sulle meenub neli, sai ajastamisprobleem alguse juba kaardi koostamisel. Jaga kaart osadeks või kirjuta ümber. Korduvalt ununevate kaartide puhul aitab [juhend raskete õpikaartide parandamiseks](/blog/how-to-fix-leech-flashcards/).

## Hoia FSRS-i õppesammud lühikesed või jäta need teadlikult tühjaks

Õppe- ja taasõppesammud juhivad lühikesi kordusintervalle enne tavapärase pikaajalise ajastamise algust. Need ei ole veel üks meelespüsimise siht.

Anki FSRS-i juhend soovitab kahte piirangut:

- iga samm peab olema lühem kui üks päev ja läbitav samal päeval
- sama päeva kordamiste arv peab jääma väikeseks

Pikad jadad, näiteks `1m 10m 1d 3d`, kannavad vana SM-2 harjumuse üle FSRS-i. Päevased ja pikemad sammud lükkavad mudelipõhist ajastamist edasi ning võivad tekitada segaseid nupusilte, näiteks võib Hard näidata pikemat intervalli kui Good.

Lühike jada nagu `1m 10m` koos taasõppesammuga `10m` on ettevaatlik lähtevalik, kui see sobib sinu õppesessioonidega. Rohkem kordamisi samal päeval ei ole automaatselt parem.

Anki 26.08-s võib ka õppesammude või taasõppesammude välja tühjaks jätta. Kui FSRS on sisse lülitatud, annab tühi väli vastava lühiajalise ajastamise FSRS-i hooleks. See on eksperimentaalne võimalus ning Again-intervall võib olla üks päev või pikem. Säilita lühikesed käsitsi määratud sammud, kui vajad kindlat tagasitulekut samal päeval; tühjenda väli ainult siis, kui annad selle ajastamise teadlikult FSRS-i otsustada.

## Järk-järguliseks üleminekuks hoia Reschedule cards on change välja lülitatuna

Kui **Reschedule cards on change** on välja lülitatud, nagu see on vaikimisi, ei kirjuta FSRS-i sisselülitamine ega soovitud meelespüsimise või parameetrite muutmine olemasolevaid kordamiskuupäevi kohe ümber. Uus seadistus rakendub kaartide edaspidisel kordamisel, seega muutub järjekord tasapisi.

Kui see valik on sisse lülitatud, arvutatakse mõne nimetatud FSRS-i muudatuse salvestamisel kordamiskuupäevad kohe uuesti. Olenevalt uuest sihist ja kaartide seisunditest võib palju kaarte korraga kordamisele tulla. Anki lisab ümberajastatud kaartidele ka kordamiskirjed, mis suurendab kogu mahtu.

See valik on kasulik ainult siis, kui soovidki olemasoleva ajakava ümber arvutada. Pikalt kasutatud kogu puhul:

1. Tee värske varukoopia ja veendu, et oskad muudatuse tagasi võtta või varukoopia taastada.
2. Käivita simulaator kavandatud seadetega.
3. Vali üks seadistusmuudatus; ära ühenda mitut katset.
4. Lülita salvestamisel ümberajastamine sisse ainult siis, kui soovid kordamiskuupäevade kohest muutmist ja tuled tulemusega toime.

Anki soovitab varukoopiat sõnaselgelt siis, kui lähed SM-2-lt üle koos ümberajastamisega. Üldisem [õpikaartide varundamise juhend](/blog/how-to-back-up-flashcards/) selgitab, miks taastamisvõimalus on sama oluline kui varukoopiafail.

## Jäta maksimaalne intervall pikaks

Anki maksimaalse intervalli vaikeväärtus on 100 aastat. See tundub kummaline, kuni meenub, et tegu on ülempiiriga, mitte lubadusega, et iga hästi omandatud kaart kaob sajandiks.

Ülempiiri lühendamine toob hästi tuntud kaardid varem tagasi ja suurendab töömahtu. Ülempiirini jõudes võivad Hard, Good ja Easy kõik näidata sama intervalli, sest ükski neist ei tohi maksimumi ületada.

Lühem maksimaalne intervall võib olla mõistlik, kui eksam seab konkreetse ajalise piiri, materjal muutub sageli või ametialane nõue näeb ette korduvat ülevaatamist sõltumata prognoositud meelespüsimisest. Vali ülempiir oma ajakava ja simulaatori tulemuste järgi, selle asemel et määrata ärevusest väike arv. Seda kitsamat juhtumit käsitleb [FSRS-iga eksamiks õppimise juhend](/blog/how-to-study-for-an-exam-with-fsrs/).

Tavapärase pikaajalise õppimise puhul jäta ülempiir pikaks. Soovitud meelespüsimine määrab juba, millal prognoositav meenutamise tõenäosus peaks uue kordamise käivitama.

## Uute kaartide lisamise tempo on osa töömahu otsusest

FSRS saab kordamisi ajas jaotada, kuid ei saa muuta piiramatut uute kaartide lisamist jõukohaseks. Iga uus kaart nõuab õppimist praegu ja kordamist hiljem.

Kui järjekord on liiga suur, vaata enne soovitud meelespüsimise vähendamist üle:

- uute kaartide arv päevas
- suured impordid või loodud kaartide partiid
- kordamiste ülempiir, mille tõttu jäävad kordamist vajavad kaardid pidevalt nägemata
- korduvalt ununevad ja ebaselged kaardid, millele kulub palju katseid
- vahele jäänud kordamispäevad

Kasuta välja **Additional new cards to simulate**, kui tead, et kaardipakk kasvab. Ainult tänase kogu põhjal tehtud prognoos ei kirjelda töömahtu pärast suurt importi.

Kui prognoositud töömaht on liiga suur, vähenda lisamise tempot ja simuleeri uuesti. Nii säilitad meenutamise sihi ega pea ajastajat seadistama suurema unustamisega leppima.

## Anki ja Nibomo pakuvad erinevaid FSRS-i seadistusvõimalusi

Mõlemad tooted kasutavad FSRS-6, kuid Anki FSRS-i seaded ei kandu üks ühele Nibomosse üle.

| Võimalus | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Soovitud meelespüsimine | **Shared Preset** või **This deck** | Seadistatav tööruumi kaupa; vaikeväärtus `0.90` |
| FSRS-i parameetrid | **Optimize Current Preset** või **Optimize All Presets** kordamisajaloo põhjal | Ametlikud FSRS-6 vaikekaalud on fikseeritud ja kasutaja ei saa neid v1-s muuta |
| Õppesammud | Seadistatavad; tühja välja korral ajastamine FSRS-iga on eksperimentaalne | Seadistatavad tööruumi kaupa; vaikeväärtus `1m 10m` |
| Taasõppesammud | Seadistatavad; tühja välja korral ajastamine FSRS-iga on eksperimentaalne | Seadistatavad tööruumi kaupa; vaikeväärtus `10m` |
| Maksimaalne intervall | Vaikimisi 100 aastat | Vaikimisi 36 500 päeva, samuti 100 aastat |
| Seadete muudatused | Vaikimisi tulevased kordamised; soovi korral olemasoleva ajakava ümberarvutamine | Ainult tulevased kordamised; olemasolevaid kordamiskuupäevi ümber ei arvutata |
| Töömahu hindamise tööriistad | **Help Me Decide (Experimental)** ja **FSRS Simulator (Experimental)** | V1-s samaväärne koormuse simulaator puudub |

Nibomo kasutab tavapäraseid hinnanguid Again, Hard, Good ja Easy ning talletab FSRS-i mäluseisundi iga kaardi kohta. Selle serveripoolne, iOS-i ja Androidi ajastaja on eraldi teostused, mille käitumine hoitakse samana; veebis kordamine kasutab serveripoolset ajastajat, mitte neljandat eraldi teostust.

Need piirid ja vaikeväärtused on kirjas avalikus [Nibomo FSRS-i ajastamise spetsifikatsioonis](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Valik on selge: Nibomo pakub praktilist tööruumipõhist FSRS-6 seadistust, Anki aga rohkem võimalusi valida, millistele pakkidele seaded kehtivad, ning personaalset sobitamist ja simulatsiooni. Kui need võimalused on sulle hädavajalikud, sobib Anki paremini.

## Turvalisem töövoog pikalt kasutatud kaardikogu jaoks

Kui sul on juba kuude või aastate jagu kordamisajalugu, toimi selles järjekorras:

1. **Kasuta hinnanguid õigesti.** Again on ebaõnnestumine; Hard on vaevaline, kuid edukas meenutamine.
2. **Optimeeri praegust seadekomplekti.** Sobita mudel oma ajaloo põhjal, selle asemel et kaale muuta või kopeerida.
3. **Vajaduse korral käivita sobivuskontroll.** Käsitle nappi või ebaühtlast ajalugu andmeprobleemina.
4. **Kasuta Help Me Decide'i.** Vali meelespüsimise vahemik jõukohase kordamiste arvu või minutite põhjal.
5. **Käivita simulaator.** Võrdle praegust seadistust, kavandatud sihti ja väiksemat uute kaartide lisamise tempot.
6. **Muuda korraga üht kasutusel olevat seadet.** Kohanda esmalt meelespüsimist või lisamise tempot, seejärel jälgi tegelikku järjekorda.
7. **Hoia sammud lühikesed.** Eemalda päevadepikkused õppe- ja taasõppejadad; kasuta tühje välju ainult eksperimendina.
8. **Jäta maksimaalne intervall pikaks.** Lühenda seda ainult kindla ajalise piiri või nõude tõttu.
9. **Hoia ümberajastamine välja lülitatuna.** Kui vajad kohest ümberarvutamist, varunda kõigepealt ja arvesta tekkiva järjekorraga.

See järjekord hoiab pikalt kujunenud ajakava muudatused võimalikult kaua tagasipööratavana. Samuti ei lase see kolmel eri küsimusel — mudeli sobivusel, meenutamise sihil ja uue materjali juurdevoolul — üheks seadistusprobleemiks sulada.

## Korduma kippuvad küsimused FSRS-i parimate seadete kohta

### Kas 90% on FSRS-i parim soovitud meelespüsimine?

See on kõige turvalisem üldine lähtepunkt, sest see on Anki vaikeväärtus ja väldib kõrge meelespüsimise töömahukõvera kõige järsemat osa. Ühe kaardipaki parim väärtus sõltub unustamise hinnast ja jõukohasest töömahust. Enne muutmist vaata **Help Me Decide (Experimental)** tulemusi.

### Kas peaksin määrama soovitud meelespüsimiseks 95%?

Alles pärast lisanduvate kordamiste või minutite hindamist. Hästi koostatud ja olulise sisuga pakk võib 95% õigustada; suur, vabal ajal kasutatav kogu võib muutuda asjatult koormavaks. Ära lülita samal ajal sisse olemasolevate kaartide ümberajastamist, kui sa just ei soovi kordamiskuupäevi teadlikult kohe ümber arvutada.

### Kui sageli peaksin FSRS-i parameetreid optimeerima?

Kord kuus on juba piisavalt sage ning Anki 26.08 rakendusesisene juhis peab piisavaks ühte korda mõne kuu jooksul. Optimeeri pärast arvestatava hulga uue ajaloo kogunemist, mitte igapäevase või iganädalase graafiku järgi.

### Kas FSRS-i õppesammud peaksid olema tühjad?

Kui jätad õppe- või taasõppesammude välja tühjaks, annab Anki 26.08 vastava lühiajalise ajastamise FSRS-i hooleks. See võimalus on eksperimentaalne ning nupu Again vajutamise järel võib järgmine kordamine toimuda päeva või veel pikema aja pärast. Mõni lühike sama päeva samm on endiselt ettevaatlikum valik.

### Kas FSRS-i seadete muutmine ajastab olemasolevad Anki kaardid ümber?

Vaikimisi mitte. Kui **Reschedule cards on change** on väljas, mõjutavad uued seaded tulevasi kordamisi ega arvuta järjekorda kohe ümber. Selle sisselülitamine muudab kordamiskuupäevi ja võib tuua palju kaarte korraga kordamisele, seega tee enne varukoopia.

### Kas CMRR on endiselt Ankis olemas?

Ei. Anki eemaldas funktsiooni Compute Minimum Recommended Retention versioonis 25.07. Anki 26.08 puhul kasuta meelespüsimise ja hinnangulise töömahu võrdlemiseks tööriistu **Help Me Decide (Experimental)** ja **FSRS Simulator (Experimental)**.

### Kas Nibomo kasutab samu seadeid mis Anki?

Nibomo kasutab FSRS-6 ning võimaldab tööruumi kaupa seadistada soovitud meelespüsimist, õppesamme, taasõppesamme, maksimaalset intervalli ja intervallide väikest juhuslikku hajutamist ehk fuzz'i. See ei kopeeri Anki kogu seadistusmudelit: kaalud on v1-s fikseeritud, muudatused mõjutavad ainult tulevasi kordamisi ning personaalne parameetrite optimeerimine ja koormuse simulaator puuduvad.

## Määra töömaht enne protsenti

Head FSRS-i seaded aitavad sobitada kordamisjärjekorra sinu tegeliku õppeplaaniga. Alusta 90%-st, hinda töömahtu, kontrolli uute kaartide lisamise tempot ja tõsta meelespüsimise sihti ainult siis, kui rohkemate vastuste mäletamine on lisakordamisi väärt. Hoia sammud lühikesed, maksimaalne intervall pikk ja hindamisandmed ausad.

Seejärel lahku seadete ekraanilt. Ajastaja vajab järjepidevaid kordamisi rohkem kui veel üht õhtut seadete timmimist.
