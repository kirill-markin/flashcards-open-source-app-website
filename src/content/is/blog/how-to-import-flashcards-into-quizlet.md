---
title: "Hvernig á að flytja námsspjöld inn í Quizlet úr Excel, Sheets eða texta"
description: "Flyttu orðalista í tveimur dálkum inn í Quizlet, veldu dálkaskil og línuskipti og lagaðu skilgreiningar sem skiptast upp, aukaspjöld og CSV-villur fyrir birtingu."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "hvernig á að flytja námsspjöld inn í Quizlet"
  - "snið fyrir innflutning í Quizlet"
  - "flytja inn í Quizlet úr Excel"
  - "Google Sheets í Quizlet"
  - "innflutningur í Quizlet með dálkaskilum"
---

„Red, green, blue“ lítur út eins og venjulegt svar á námsspjaldi. En ef þú notar kommur til að aðgreina hugtak og skilgreiningu gera þessar sömu kommur línuna tvíræða. Nokkur greinarmerki geta orðið til þess að tilbúinn orðalisti þarfnist lagfæringa.

Til að flytja námsspjöld inn í Quizlet úr Excel, Google Sheets eða texta skaltu byrja með tvo dálka: einn fyrir hugtök og annan fyrir skilgreiningar. Afritaðu gögnin, límdu þau í innflutningsformið á vefsíðunni og veldu dálkaskil á milli reita og línuskipti á milli spjalda. Prófaðu fyrst fjórar raðir svo þú getir skoðað hvert par áður en þú flytur allan listann.

![Leirkerasmiður parar leirbolla við tilheyrandi undirskálar í aðskildum röðum áður en allt er fært upp í hillu](/blog/how-to-import-flashcards-into-quizlet.png)

## Hvar er innflutningsform Quizlet?

Quizlet lýsir innflutningi á vefsíðunni sinni, með kommum, dálkaskilum eða strikum á milli reita og semíkommum eða línuskiptum á milli spjalda. Í [opinberum leiðbeiningum um innflutning](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) er þessu ferli lýst:

1. Skráðu þig inn og veldu **Create → Flashcard set** (búa til → spjaldasafn).
2. Sláðu inn titil, veldu **Import** (flytja inn) og límdu textann þinn.
3. Stilltu skilin í samræmi við gögnin þín. Veldu **Tab** (dálkaskil) og **New line** (línuskipti) fyrir dæmin hér.
4. Veldu **Import** og síðan tungumál hugtakanna og skilgreininganna.
5. Farðu yfir spjöldin áður en þú velur **Create** til að vista og birta safnið.

Leiðbeiningarnar voru yfirfarnar 15. september 2026. Dæmin hér að neðan útskýra hvernig á að undirbúa og yfirfara textann; þau lýsa ekki prófun sem var gerð með innskráðum reikningi.

## Byrjaðu á litlu svæði í töflureikni

Settu eitt par af hugtaki og skilgreiningu í hverja röð í Excel eða Google Sheets. Hér er prufa með fjórum spjöldum:

| Hugtak | Skilgreining |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Afritaðu aðeins þessar fjórar gagnaraðir í dálkunum tveimur. Ef dálkaheitin eru í röð 1 skaltu velja **A2:B5**. Slepptu dálkaheitunum þegar þú velur svæðið sem þú ætlar að afrita.

Niðurstaðan á að vera fjögur spjöld með spænskum hugtökum og enskum skilgreiningum. Á síðasta spjaldinu á „colores primarios de la luz“ að vera saman á annarri hliðinni og „red, green, blue“ saman á hinni. Kommurnar eru hluti af svarinu.

Þegar dæmið er orðið skýrt skaltu undirbúa þitt eigið töflublað. Notaðu afrit svo þú hafir frumritið til samanburðar. Fjarlægðu tómar raðir og hafðu hvorki athugasemdir né aukadálka með í valinu. Fylltu inn öll hugtök eða skilgreiningar sem vantar áður en þú afritar.

Haltu dálkunum tveimur saman þegar þú raðar gögnunum. Ef þú raðar aðeins hugtökunum losna þau frá svörunum sínum. Innflutningur getur þá skilað réttum fjölda spjalda en röngum pörum.

## Hreintextasniðið notar raunveruleg dálkaskil

Sömu fjórar línur líta svona út sem texti aðskilinn með dálkaskilum. Milli hvers hugtaks og skilgreiningar þess er eitt raunverulegt dálkaskilstákn:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Dálkaskil eru sérstakt tákn. Nokkur bil geta litið svipað út en þau marka ekki dálkaskil. Að slá inn stafina `\t` setur heldur ekki inn dálkaskil. Ef þetta er erfitt í textaritlinum þínum skaltu setja pörin í tvo dálka í töflureikni og afrita reitina.

Hvert spjald á að vera á einni textalínu, án línuskipta. Löng skilgreining getur birst á tveimur línum vegna þess að glugginn er mjór; það bætir ekki línuskiptum við efnið. Línuskipti sem eru sett inn í reit í töflureikni gera það hins vegar. Fjarlægðu slík innfelld línuskipti áður en þú notar línuskipti til að aðgreina spjöld.

Fjarlægðu líka öll dálkaskil inni í hugtaki eða skilgreiningu. Í þessu sniði eiga dálkaskil aðeins heima á milli reitanna tveggja.

## Ef listinn þinn er CSV-skrá

Opnaðu CSV-skrána í töflureikni áður en þú undirbýrð innflutninginn. CSV-færsla eins og þessi inniheldur tvo reiti þegar hún er túlkuð samkvæmt reglum sniðsins um gæsalappir:

```text
"colores primarios de la luz","red, green, blue"
```

Svarið innan gæsalappanna inniheldur kommur. Textareitur sem skiptir innslætti við kommur er ekki endilega CSV-lesari. Ekki treysta því að gæsalappir haldi svarinu saman þar.

Gakktu úr skugga um að færslan sé í nákvæmlega tveimur reitum í Excel eða Google Sheets. Afritaðu síðan reitina til að fá texta með dálkaskilum. Ef svarið hefur dreifst yfir aukadálka skaltu fyrst leiðrétta stillingar töflureiknisins fyrir innflutning á CSV. Ef þú afritar röðina með villunni flyst hún með.

Athugaðu líka gildi sem töflureiknir gæti túlkað á annan hátt. Ef `0012` er kóði sem þú þarft að læra breytist spjaldið ef hann verður að `12`. Berðu auðkenni, dagsetningar, gæsalappir og orð með broddum eða öðrum stafmerkjum saman við upprunalegu skrána áður en þú afritar svæðið.

## Þegar spjöldin passa ekki við raðirnar þínar

Notaðu prufuna til að finna fyrsta misræmið. Breyttu einu atriði í einu og berðu síðan niðurstöðuna saman við sömu fjórar raðirnar í frumgögnunum.

| Einkenni | Líklegt vandamál með skil | Hverju á að breyta |
| --- | --- | --- |
| Svar skiptist upp við kommur | Komma valin á milli reita | Undirbúðu tvo dálka og veldu Tab |
| „well-being“ skiptist inni í hugtakinu | Strik valið á milli reita | Haltu bandstrikinu og aðgreindu reiti með dálkaskilum |
| Eitt svar verður að nokkrum spjöldum | Innfelld línuskipti í frumgögnunum | Settu svarið á eina textalínu án línuskipta |
| „Term“ og „Definition“ birtast sem spjald | Dálkaheitin voru afrituð með | Veldu aðeins gagnaraðirnar |
| Báðir reitirnir eru sömu megin á spjaldinu | Bil í stað dálkaskila | Afritaðu svæði með tveimur dálkum úr töflureikni |

Til dæmis gæti svar með „first stage“ og „second stage“ á aðskildum línum orðið að `first stage; second stage`. Þá haldast báðir hlutarnir á einni línu. Hafðu **New line** áfram valið á milli spjalda þegar þú notar semíkommu inni í svari.

Ef eðlilegra er að spyrja um hvort stig fyrir sig skaltu frekar skrifa tvö heil pör. [Leiðbeiningar um að búa til betri námsspjöld (á ensku)](/blog/how-to-make-better-flashcards/) geta hjálpað þér að taka þá ákvörðun.

## Farðu yfir niðurstöðuna áður en þú birtir safnið

Skoðaðu öll fjögur spjöldin í prufunni. Þegar þú flytur allan listann skaltu bera innfluttu spjöldin saman við hreinsuðu frumgögnin:

- Samsvarar heildarfjöldinn fjölda gagnaraða sem eru með báða reiti útfyllta?
- Stemmir fyrsta og síðasta parið, þar á meðal svörin í heild sinni?
- Héldust greinarmerki, stafmerki og kóðar óbreytt?
- Eru þar tómar hliðar, dálkaheiti, tvítekningar eða svör pöruð við röng hugtök?
- Er hvert svar þar sem þú breyttir línuskiptum enn skiljanlegt?

Lestu nokkur venjuleg pör líka, ekki aðeins þau grunsamlegu. Réttur fjöldi einn og sér afhjúpar ekki rangt svar sem hefur tengst gildu hugtaki. Ef eitthvað stenst ekki skaltu laga frumgögnin áður en þú endurtekur innflutninginn. Geymdu hreinsuðu skrána fyrir síðari leiðréttingar.

## Tilbúin pör eða spjöld búin til með gervigreind?

Quizlet lýsir líka gerð spjalda með aðstoð gervigreindar úr innsendu efni í [yfirliti sínu um gerð spjalda með gervigreind](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Texta sem er búinn til þannig þarf að yfirfara sérstaklega með tilliti til innihalds. Þegar listi með hugtökum og skilgreiningum er tilbúinn gerir innflutningur á þessu skipulagða formi þér kleift að bera niðurstöðuna saman við pörin sem þú hefur þegar skrifað.

Ertu að byrja með samfelldan texta? [Breyttu glósunum þínum í námsspjöld (leiðbeiningar á ensku)](/blog/turn-notes-into-flashcards/) áður en þú undirbýrð innflutningstextann. Ertu að flytja safn í hina áttina? Notaðu [leiðbeiningarnar um útflutning úr Quizlet](/is/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
