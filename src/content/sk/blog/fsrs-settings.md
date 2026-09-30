---
title: "Najlepšie nastavenia FSRS pre Anki v roku 2026: zapamätanie, kroky učenia a počet opakovaní"
description: "Zvoľte bezpečné nastavenia FSRS v Anki 26.08 s FSRS-6: požadovanú mieru zapamätania, kroky učenia, optimalizáciu, preplánovanie a objem opakovania."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "nastavenia FSRS"
  - "najlepšie nastavenia FSRS"
  - "nastavenia FSRS Anki"
  - "požadovaná miera zapamätania FSRS"
  - "kroky učenia FSRS"
  - "simulátor FSRS"
  - "optimalizácia parametrov FSRS"
  - "FSRS-6"
---

Zvýšenie požadovanej miery zapamätania v Anki z 90 % na 95 % vyzerá ako malá zmena. Neznamená však o päť percent viac práce. S rastúcim cieľom musí FSRS skracovať intervaly a v zbierke, ktorú používate už dlho, môže výrazne pribudnúť kartičiek na opakovanie. Ak zároveň zapnete **Reschedule cards on change** (preplánovanie kartičiek pri zmene), časť týchto opakovaní sa môže objaviť okamžite.

Najlepšie nastavenia FSRS preto nie sú reťazec parametrov, ktorý stačí skopírovať. Ide o postupnosť rozhodnutí: určite si objem práce, ktorý dlhodobo zvládnete, v jeho rámci si zvoľte cieľ zapamätania, prispôsobte model vlastnej histórii a existujúce termíny opakovania nechajte tak, pokiaľ ich nechcete zámerne prepočítať.

Názvy ovládacích prvkov a ich správanie v tomto článku zodpovedajú [vydaniu Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) a jeho nastaveniam FSRS-6. Ak potrebujete najskôr pochopiť model, prečítajte si [Čo je FSRS?](/blog/what-is-fsrs/). Ak si ešte len vyberáte plánovací algoritmus, začnite porovnaním [FSRS a SM-2](/blog/fsrs-vs-sm-2/).

> **Pre úplnosť:** Volám sa Kirill Markin a vyvíjam [Nibomo](/sk/features/). Anki ponúka prispôsobenie parametrov vlastnej histórii a experimentálne simulátory záťaže, ktoré Nibomo zatiaľ nemá. Porovnanie ku koncu článku tieto rozdiely výslovne uvádza.

**Fakty overené:** 8. septembra 2026.

![Obsluha plavebnej komory skúša prietok vody na zmenšenom modeli pred úpravou skutočnej komory](/blog/fsrs-settings-v2.png)

## Stručná odpoveď: začnite tu

Pre väčšinu používateľov Anki sú nasledujúce voľby bezpečným východiskom, nie univerzálnym nastavením:

| Nastavenie alebo návyk | Bezpečná východisková voľba | Prečo |
| --- | --- | --- |
| Požadovaná miera zapamätania | `0.90` | Je to predvolená hodnota Anki, ktorá vyvažuje zapamätanie a objem opakovania. |
| Parametre FSRS | Použite **Optimize Current Preset**; nevkladajte cudzie váhy ani ich ručne neupravujte | Optimalizátor prispôsobí model vašej histórii opakovania. |
| Frekvencia optimalizácie | Najviac raz mesačne; zvyčajne stačí raz za pár mesiacov | Anki neodporúča častú optimalizáciu. |
| Kroky učenia | Ponechajte malý počet krokov, ktoré dokončíte v ten istý deň | Dlhé postupnosti krokov odďaľujú plánovanie podľa modelu. |
| Kroky opätovného učenia | Čo najmenej krokov, každý kratší než jeden deň | Rovnaké obmedzenie platí po neúspešnom zopakovaní kartičky. |
| Preplánovanie kartičiek pri zmene | Vypnuté | Nové nastavenia sa môžu uplatniť pri budúcich opakovaniach bez prepočítania dnešného zoznamu. |
| Maximálny interval | Ponechajte predvolených 100 rokov | Nižší strop núti častejšie opakovať dobre naučené kartičky. |
| Nové kartičky za deň | Nastavte podľa objemu práce, ktorý dlhodobo zvládnete | Každá nová kartička znamená učenie teraz a opakovanie neskôr. |
| Again verzus Hard | Again znamená, že ste si odpoveď nevybavili; Hard znamená správnu odpoveď s námahou | Nesprávne hodnotenie dodáva modelu nesprávnu históriu. |

Ak opakovanie zvládate a vaše nastavenia sú už podobné, možno netreba nič opravovať. Ladenie nastavení nie je učenie.

## Oddeľte tri rozhodnutia

Požadovaná miera zapamätania, parametre FSRS a denný objem práce sa často zamieňajú. Každé z týchto nastavení však riadi niečo iné:

- **Požadovaná miera zapamätania** je cieľ, ktorý si volíte podľa svojich potrieb a času na učenie.
- **Parametre FSRS** prispôsobujú model pamäti histórii opakovania. Vypočítava ich optimalizátor Anki.
- **Limity nových kartičiek a opakovania** určujú, koľko materiálu pribúda do systému a koľko naplánovaných opakovaní vám Anki môže denne ukázať.

Keď tieto veci oddelíte, problémy sa hľadajú oveľa ľahšie. Veľa kartičiek na opakovanie automaticky neznamená zlé parametre. Balíček s dôležitým obsahom automaticky nepotrebuje samostatnú predvoľbu parametrov. A zníženie požadovanej miery zapamätania nevyrieši tempo pridávania kartičiek, ktoré nikdy nebolo udržateľné.

## Požadovanú mieru zapamätania voľte podľa objemu práce, nie ambícií

Požadovaná miera zapamätania hovorí FSRS, s akou pravdepodobnosťou si chcete vybaviť odpoveď v naplánovanom termíne opakovania. Pri hodnote `0.90` plánuje FSRS opakovanie približne na čas, keď podľa modelu máte 90 % šancu vybaviť si odpoveď. Je to cieľ modelu, nie záruka, že pri každom učení alebo skúške odpoviete správne presne na 90 % otázok.

Tento kompromis funguje oboma smermi:

- Keď požadovanú mieru zapamätania zvýšite, intervaly sa skrátia a opakovaní pribudne.
- Keď ju znížite, intervaly sa predĺžia a neúspešných odpovedí pribudne.
- Ak ju znížite priveľmi, dodatočné učenie zabudnutých kartičiek môže spotrebovať časť času, ktorý ste chceli ušetriť.

Predvolená hodnota v Anki je 90 %. [Odporúčania k požadovanej miere zapamätania](https://docs.ankiweb.net/deck-options.html#desired-retention) upozorňujú, že pri približovaní cieľa k 100 % objem práce prudko rastie, a odporúčajú zostať pod 97 %. Oficiálne [vysvetlenie optimálnej miery zapamätania](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) opisuje opačný koniec krivky: aj veľmi nízka miera môže byť neefektívna, pretože zabudnuté kartičky si vyžadujú viac práce.

Začnite na `0.90` a hodnotu zmeňte až po posúdení objemu práce. Vyšší cieľ môže dávať zmysel pri materiáli, ktorého zabudnutie má skutočné následky. Nižší cieľ môže dávať zmysel, keď opakovanie vytláča hodnotnejšie učenie. Ani jedna zmena neopraví nejasné kartičky, nepoctivé hodnotenie ani priveľa nových kartičiek.

### Cieľ zapamätania sa môže vzťahovať na balíček, parametre na celú predvoľbu

V Anki 26.08 môžete nastavenie **Desired retention** použiť pre celú zdieľanú predvoľbu (**Shared Preset**) alebo len pre tento balíček (**This deck**). Súvisiace balíčky tak môžu používať jednu predvoľbu parametrov, zatiaľ čo konkrétny balíček má vlastný cieľ zapamätania.

Samostatnú hodnotu použite vtedy, keď sa líšia následky zabudnutia. Pri balíčku na získanie profesijného oprávnenia môže mať vyšší cieľ väčší zmysel než pri menej dôležitom balíčku doplnkových informácií, hoci oba používajú rovnaký prispôsobený model.

Voľba **This deck** nemení rozsah platnosti parametrov FSRS na jediný balíček. Anki ich predvolene prispôsobuje podľa histórie opakovania všetkých balíčkov priradených k aktuálnej predvoľbe. Ak sa skupiny balíčkov výrazne líšia tým, aké náročné sú pre vás, použite pre ne oddelené predvoľby. Anki tak umožňuje prispôsobiť parametre každej skupine zvlášť.

## Help Me Decide a Simulator odpovedajú na odlišné otázky

Anki 26.08 ponúka dva samostatné experimentálne nástroje:

- **Help Me Decide (Experimental)** zobrazuje pre vás vypočítanú krivku vzťahu medzi mierou zapamätania a objemom práce. Pomôže s otázkou: „Aký cieľ zapamätania zodpovedá počtu opakovaní alebo minútam, ktoré dlhodobo zvládnem?“
- **FSRS Simulator (Experimental)** odhaduje, ako sa môže jedno nastavenie správať v čase. Slúži na porovnanie zmien miery zapamätania, počtu nových kartičiek, limitov opakovania a maximálneho intervalu.

[Dokumentácia simulátora FSRS](https://docs.ankiweb.net/deck-options.html#the-simulator) uvádza tieto hlavné vstupy:

- počet dní simulácie
- počet ďalších nových kartičiek na simuláciu
- nové kartičky za deň
- maximálny počet opakovaní za deň
- maximálny interval
- požadovaná miera zapamätania a parametre FSRS danej predvoľby

Simulácia používa aj skutočné pamäťové stavy kartičiek v predvoľbe. Pre dlhodobo používanú zbierku je preto užitočnejšia než vynásobenie dnešného počtu naplánovaných opakovaní všeobecným percentom.

Pred zmenou používaných nastavení spustite tri scenáre:

1. Vaša súčasná miera zapamätania a počet nových kartičiek.
2. Cieľ zapamätania, o ktorom uvažujete.
3. Rovnaký cieľ s menším počtom nových kartičiek za deň.

Tretia simulácia preverí bežnú alternatívu: zachovať cieľ zapamätania a spomaliť prísun nového materiálu. Ak je výsledná predpoveď zvládnuteľná, nemusíte prijímať viac zabúdania len preto, aby ubudlo opakovaní. Podrobnejšie sa pridávaniu venuje článok [Koľko nových kartičiek denne?](/blog/how-many-new-flashcards-per-day/).

Oba nástroje poskytujú odhady. Pre vynechané dni, úpravy kartičiek, nový materiál či zmeny v hodnotení sa skutočný objem práce môže líšiť od grafu. Porovnanie používajte na výber smeru, nie ako prísľub presného počtu opakovaní o niekoľko mesiacov.

Staršie návody môžu spomínať **Compute Minimum Recommended Retention**, skrátene CMRR. Anki túto funkciu odstránilo vo verzii 25.07. Už nejde o aktuálny postup výberu požadovanej miery zapamätania.

## Parametre FSRS optimalizujte podľa vlastnej histórie

Požadovaná miera zapamätania vyjadruje váš cieľ. Parametre FSRS opisujú, ako sa model prispôsobuje vašim opakovaniam.

V Anki 26.08 použite **Optimize Current Preset** na prispôsobenie parametrov aktívnej predvoľby. Anki predvolene zahŕňa históriu opakovania každého balíčka, ktorý túto predvoľbu používa; ak má byť výber užší, môžete upraviť vyhľadávanie. **Optimize All Presets** aktualizuje všetky predvoľby naraz.

Nezadávajte váhy ručne ani ich nekopírujte z Redditu, videa či cudzieho balíčka. Cudzie kartičky, časy opakovania a zvyky pri hodnotení nie sú vašou históriou. Skopírovaním úhľadného riadka [váh FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) nezískate stratégiu učenia, ktorá fungovala niekomu inému.

Optimalizáciu zopakujte až vtedy, keď v histórii pribudne dostatok nových opakovaní. Príručka Anki uvádza, že stačí raz mesačne, zatiaľ čo pokyny priamo v aplikácii 26.08 hovoria, že stačí raz za pár mesiacov. Praktický záver je rovnaký: nie je dôvod optimalizovať každý týždeň, nieto ešte po každom učení.

### Kontrolu stavu používajte s aktuálnou predvoľbou

Zapnite **Check health when optimizing (slow)**, keď chcete, aby Anki posúdilo, ako dobre sa FSRS dokáže prispôsobiť histórii aktuálnej predvoľby. Táto kontrola sa spúšťa pri **Optimize Current Preset**, nie pri **Optimize All Presets**.

Ak je výsledok slabý, pred úpravou váh preskúmajte údaje. [Odporúčania Anki k parametrom FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) uvádzajú bežné príčiny: menej než niekoľko stoviek opakovaní, použitie Hard po neúspechu a nestlačenie Again, keď si odpoveď nevybavíte. Ak máte málo užitočnej histórie, ponechajte predvolené hodnoty a optimalizujte neskôr. Nepreberajte parametre iného používateľa.

## Again znamená neúspech; Hard je správna odpoveď

Tento návyk je rovnako dôležitý ako ktorékoľvek nastavenie.

Použite **Again**, keď si požadovanú odpoveď nevybavíte alebo odpoviete nesprávne. **Hard** použite iba vtedy, keď odpoviete správne, ale s veľkou námahou alebo váhaním. Good a Easy tiež znamenajú, že ste si odpoveď správne vybavili.

Ak stlačíte Hard len preto, aby ste sa vyhli krátkemu intervalu Again, zaznamenáte po neúspechu úspech. FSRS sa potom učí z nesprávnej udalosti. Tlačidlo vyberajte podľa toho, ako ste si odpoveď vybavili. Neriaďte sa intervalom, ktorý sa vám z možností nad tlačidlami najviac páči.

Nejednoznačné kartičky sťažujú poctivé hodnotenie. Ak otázka žiada päť faktov a vy si pamätáte štyri, problém s plánovaním sa začal už v editore. Kartičku rozdeľte alebo prepíšte. Pri kartičkách, ktoré sa nedarí zapamätať napriek opakovanému učeniu, pomôže článok [Ako opraviť problémové kartičky](/blog/how-to-fix-leech-flashcards/).

## Kroky učenia FSRS nechajte krátke — alebo ich zámerne vymažte

Kroky učenia a opätovného učenia určujú, kedy sa ku kartičke v krátkom čase vrátite, kým prejde na bežný dlhodobý plán. Nie sú ďalším cieľom zapamätania.

Odporúčania Anki pre FSRS stanovujú dve obmedzenia:

- každý krok má byť kratší než jeden deň a má sa dať dokončiť v ten istý deň
- počet opakovaní v rámci jedného dňa má zostať malý

Dlhé postupnosti ako `1m 10m 1d 3d` prenášajú do FSRS starý návyk zo SM-2. Kroky dlhé deň alebo viac odďaľujú plánovanie podľa modelu a môžu viesť k mätúcim intervalom na tlačidlách, napríklad k dlhšiemu intervalu pri Hard než pri Good.

Krátka postupnosť ako `1m 10m` s krokom opätovného učenia `10m` je konzervatívnym východiskom, ak zapadá do vášho učenia. Viac opakovaní v ten istý deň neznamená automaticky lepší výsledok.

Anki 26.08 umožňuje ponechať prázdne ktorékoľvek z polí krokov učenia a opätovného učenia. Pri zapnutom FSRS prázdne pole prenechá príslušné krátkodobé plánovanie FSRS. Ide o experimentálnu funkciu a interval Again môže byť jeden deň alebo dlhší. Ak potrebujete predvídateľný návrat ku kartičke v ten istý deň, ponechajte krátke ručne nastavené kroky. Pole vymažte len vtedy, keď vedome prijímate, že načasovanie vyberie FSRS.

## Pre postupný prechod nechajte Reschedule cards on change vypnuté

Keď je **Reschedule cards on change** vypnuté, čo je predvolené nastavenie, zapnutie FSRS ani zmena požadovanej miery zapamätania či parametrov okamžite neprepíše existujúce termíny opakovania. Nová konfigurácia sa uplatní pri budúcich opakovaniach kartičiek, takže zoznam na opakovanie sa mení postupne.

Ak niektorú z týchto zmien FSRS uložíte so zapnutou voľbou, termíny sa okamžite prepočítajú. V závislosti od nového cieľa a stavov kartičiek môže naraz pribudnúť veľa kartičiek na opakovanie. Anki tiež pridá preplánovaným kartičkám záznamy do histórie opakovania, čím zväčší zbierku.

Táto voľba je užitočná iba vtedy, keď naozaj chcete spätne prepočítať plán. Pri dlhodobo používanej zbierke:

1. Vytvorte novú zálohu a overte si, že viete zmenu vrátiť alebo zbierku obnoviť.
2. Spustite Simulator s navrhovanými nastaveniami.
3. Zvoľte jednu zmenu konfigurácie; nespájajte niekoľko experimentov.
4. Pri ukladaní zapnite preplánovanie len vtedy, keď chcete okamžite prepísať termíny a zvládnete výsledný objem opakovania.

Anki výslovne odporúča zálohu pri prechode zo SM-2 s preplánovaním. Všeobecnejší [návod na zálohovanie kartičiek](/blog/how-to-back-up-flashcards/) vysvetľuje, prečo je postup obnovy rovnako dôležitý ako samotný súbor zálohy.

## Maximálny interval nechajte dostatočne dlhý

Predvolený maximálny interval Anki je 100 rokov. Vyzerá to zvláštne, kým si neuvedomíte, že ide o strop, nie o prísľub, že každá dobre naučená kartička zmizne na storočie.

Zníženie stropu prinúti dobre známe kartičky vracať sa skôr a zvýši objem práce. Na hranici môžu Hard, Good aj Easy ukazovať rovnaký interval, pretože žiadny nesmie prekročiť maximum.

Kratší maximálny interval môže byť rozumný, keď vás čaká skúška v konkrétnom termíne, materiál sa často mení alebo profesijné pravidlá vyžadujú pravidelné opakovanie bez ohľadu na predpoveď modelu. Strop prispôsobte kalendáru a výsledkom simulátora namiesto toho, aby ste zo strachu zvolili malé číslo. Tomuto konkrétnejšiemu prípadu sa venuje článok [Ako sa s FSRS učiť na skúšku](/blog/how-to-study-for-an-exam-with-fsrs/).

Pri bežnom dlhodobom učení nechajte maximálny interval dostatočne dlhý. Požadovaná miera zapamätania už určuje, pri akej predpovedanej šanci na vybavenie odpovede sa má kartička znova zopakovať.

## Pridávanie nových kartičiek je súčasťou rozhodnutia o objeme práce

FSRS dokáže rozložiť opakovanie; nedokáže urobiť neobmedzené pridávanie kartičiek udržateľným. Každá nová kartička znamená učenie teraz a opakovanie neskôr.

Keď je opakovaní priveľa, pred znížením požadovanej miery zapamätania skontrolujte:

- počet nových kartičiek za deň
- veľké importy alebo dávky vygenerovaných kartičiek
- denný limit opakovaní, pre ktorý sa vám časť kartičiek na opakovanie opakovane nezobrazuje
- problémové a nejasné kartičky, pri ktorých opakovane zlyhávate
- vynechané dni opakovania

Ak viete, že balíček bude rásť, použite **Additional new cards to simulate**. Predpoveď založená iba na dnešnej zbierke nezodpovedá objemu práce po veľkom importe.

Ak je výsledný objem priveľký, znížte počet pridávaných kartičiek a simuláciu zopakujte. Zachováte tým cieľ zapamätania bez toho, aby ste od plánovača žiadali tolerovať viac zabúdania.

## Anki a Nibomo ponúkajú odlišné nastavenia FSRS

Oba produkty používajú FSRS-6, ale nastavenia FSRS v Anki nemajú v Nibomo vždy priamy ekvivalent.

| Možnosť | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Požadovaná miera zapamätania | **Shared Preset** alebo **This deck** | Nastaviteľná pre každý pracovný priestor; predvolene `0.90` |
| Parametre FSRS | **Optimize Current Preset** alebo **Optimize All Presets** podľa histórie opakovania | Oficiálne predvolené váhy FSRS-6 sú pevne dané a vo v1 ich používateľ nemôže meniť |
| Kroky učenia | Nastaviteľné; plánovanie FSRS pri prázdnom poli je experimentálne | Nastaviteľné pre každý pracovný priestor; predvolene `1m 10m` |
| Kroky opätovného učenia | Nastaviteľné; plánovanie FSRS pri prázdnom poli je experimentálne | Nastaviteľné pre každý pracovný priestor; predvolene `10m` |
| Maximálny interval | Predvolene 100 rokov | Predvolene 36 500 dní, teda tiež 100 rokov |
| Zmeny nastavení | Predvolene budúce opakovania; voliteľné spätné preplánovanie | Iba budúce opakovania; existujúce termíny sa neprepočítavajú |
| Nástroje na odhad objemu práce | **Help Me Decide (Experimental)** a **FSRS Simulator (Experimental)** | Vo v1 nie je ekvivalentný simulátor záťaže |

Nibomo používa štandardné hodnotenia Again, Hard, Good a Easy a uchováva pamäťový stav FSRS pre každú kartičku. Plánovače backendu, iOS a Androidu sú samostatné implementácie udržiavané tak, aby sa správali rovnako. Opakovanie vo webovej aplikácii používa plánovač backendu, takže nepridáva štvrtú kópiu.

Tieto obmedzenia a predvolené hodnoty opisuje verejná [špecifikácia plánovania FSRS v Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Rozdiel je priamočiary: Nibomo ponúka praktické nastavenie FSRS-6 na úrovni pracovného priestoru, zatiaľ čo Anki umožňuje presnejšie určiť, na ktoré balíčky sa nastavenia vzťahujú, prispôsobiť model vašej histórii a spustiť simuláciu. Ak tieto možnosti potrebujete, Anki je vhodnejšia voľba.

## Bezpečnejší postup pre dlhodobo používanú zbierku

Ak už máte mesiace alebo roky histórie opakovania, postupujte takto:

1. **Opravte spôsob hodnotenia.** Again znamená neúspech; Hard znamená správnu odpoveď s námahou.
2. **Optimalizujte aktuálnu predvoľbu.** Prispôsobte model vlastnej histórii namiesto úprav alebo kopírovania váh.
3. **Podľa potreby spustite kontrolu stavu.** Nedostatočnú alebo nekonzistentnú históriu riešte ako problém údajov.
4. **Použite Help Me Decide.** Zvoľte rozsah miery zapamätania podľa počtu opakovaní alebo minút, ktoré dlhodobo zvládnete.
5. **Spustite Simulator.** Porovnajte súčasné nastavenie, navrhovaný cieľ a nižší počet nových kartičiek.
6. **Zmeňte jednu hodnotu v používaných nastaveniach.** Najskôr upravte mieru zapamätania alebo počet nových kartičiek, potom sledujte skutočný objem opakovania.
7. **Kroky nechajte krátke.** Odstráňte postupnosti učenia a opätovného učenia s krokmi dlhými deň alebo viac; prázdne polia používajte len ako experiment.
8. **Maximálny interval nechajte dostatočne dlhý.** Skráťte ho iba pre konkrétny časový horizont alebo požiadavku.
9. **Preplánovanie nechajte vypnuté.** Ak potrebujete okamžitý prepočet, najskôr zálohujte a počítajte s výsledným objemom opakovania.

Pri tomto postupe môžete zmeny v zabehnutom pláne čo najdlhšie vrátiť späť. Zároveň bráni tomu, aby sa tri odlišné problémy — prispôsobenie modelu, cieľ zapamätania a prísun nového materiálu — zamieňali za jediný problém s nastaveniami.

## Časté otázky o najlepších nastaveniach FSRS

### Je 90 % najlepšia požadovaná miera zapamätania pre FSRS?

Je to najbezpečnejšie všeobecné východisko, pretože ide o predvolenú hodnotu Anki a vyhýba sa najstrmšej časti krivky záťaže pri vysokej miere zapamätania. Najlepšia hodnota pre konkrétny balíček závisí od následkov zabudnutia a objemu práce, ktorý dlhodobo zvládnete. Pred zmenou si pozrite **Help Me Decide (Experimental)**.

### Mám nastaviť požadovanú mieru zapamätania na 95 %?

Až po preverení, koľko opakovaní alebo minút navyše to prinesie. Kvalitný balíček s dôležitým obsahom môže 95 % opodstatniť; veľká zbierka na voľnočasové učenie môže byť zbytočne náročná. Nezapínajte súčasne spätné preplánovanie, pokiaľ zámerne nechcete okamžite prepočítať termíny.

### Ako často mám optimalizovať parametre FSRS?

Raz mesačne je už dostatočne často a pokyny priamo v Anki 26.08 hovoria, že stačí raz za pár mesiacov. Optimalizujte až po dostatočnom počte nových opakovaní, nie podľa denného či týždenného rozvrhu.

### Majú byť kroky učenia FSRS prázdne?

Prázdne kroky učenia alebo opätovného učenia umožnia Anki 26.08 prenechať príslušné krátkodobé plánovanie FSRS. Funkcia je experimentálna a po stlačení Again sa kartička môže zobraziť až o deň alebo neskôr. Malý počet krokov v rámci jedného dňa zostáva konzervatívnou voľbou.

### Preplánuje zmena nastavení FSRS existujúce kartičky Anki?

Predvolene nie. Keď je **Reschedule cards on change** vypnuté, nové nastavenia ovplyvnia budúce opakovania bez okamžitého prepočítania zoznamu. Zapnutím sa termíny zmenia a môže naraz pribudnúť veľa kartičiek na opakovanie, preto si najskôr vytvorte zálohu.

### Je CMRR stále súčasťou Anki?

Nie. Anki odstránilo Compute Minimum Recommended Retention vo verzii 25.07. V Anki 26.08 použite **Help Me Decide (Experimental)** a **FSRS Simulator (Experimental)** na porovnanie miery zapamätania s odhadovaným objemom práce.

### Používa Nibomo rovnaké nastavenia ako Anki?

Používa FSRS-6 a pre každý pracovný priestor umožňuje nastaviť požadovanú mieru zapamätania, kroky učenia, kroky opätovného učenia, maximálny interval a náhodný rozptyl intervalov (fuzz). Nekopíruje celý model nastavení Anki: váhy sú vo v1 pevne dané, zmeny sa uplatňujú iba do budúcnosti a osobná optimalizácia parametrov ani simulátor záťaže nie sú k dispozícii.

## Najskôr určite objem práce, potom percento

Dobré nastavenia FSRS prispôsobia opakovanie skutočnému študijnému plánu. Začnite na 90 %, odhadnite objem práce, kontrolujte prísun nových kartičiek a mieru zapamätania zvyšujte len vtedy, keď lepšie zapamätanie stojí za ďalšie opakovania. Kroky nechajte krátke, maximálny interval dostatočne dlhý a hodnotenie poctivé.

Potom nastavenia zatvorte. Plánovač potrebuje pravidelné opakovanie viac než ďalší večer ladenia.
