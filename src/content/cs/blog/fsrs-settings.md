---
title: "Nejlepší nastavení FSRS pro Anki v roce 2026: retence, kroky a objem opakování"
description: "Zvolte bezpečné nastavení FSRS v Anki 26.08 s FSRS-6: požadovanou retenci, kroky učení, optimalizaci, přeplánování a zvládnutelný objem opakování."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "nastavení FSRS"
  - "nejlepší nastavení FSRS"
  - "nastavení FSRS Anki"
  - "požadovaná retence FSRS"
  - "kroky učení FSRS"
  - "simulátor FSRS"
  - "optimalizace parametrů FSRS"
  - "FSRS-6"
---

Zvýšit v Anki požadovanou retenci z 90 % na 95 % vypadá jako drobná změna. Neznamená to ale o pět procent více práce. S vyšším cílem musí FSRS zkracovat intervaly a u sbírky, kterou používáte delší dobu, může výrazně narůst počet kartiček k opakování. Pokud navíc zapnete **Reschedule cards on change** (přeplánovat kartičky při změně), část této práce může přibýt okamžitě.

Nejlepší nastavení FSRS proto nezískáte zkopírováním řady parametrů. Musíte udělat několik rozhodnutí: určete, kolik práce dlouhodobě zvládnete, v těchto mezích zvolte cílovou pravděpodobnost vybavení, přizpůsobte model vlastní historii a stávající termíny ponechte, pokud je nechcete vědomě přepočítat.

Názvy voleb a jejich chování níže odpovídají [verzi Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) a jejím možnostem nastavení FSRS-6. Pokud nejprve potřebujete pochopit model, přečtěte si [Co je FSRS?](/blog/what-is-fsrs/). Pokud si teprve vybíráte plánovací algoritmus, začněte srovnáním [FSRS a SM-2](/blog/fsrs-vs-sm-2/).

> **Pro úplnost:** Jsem Kirill Markin a vyvíjím [Nibomo](/cs/features/). Anki nabízí přizpůsobení parametrů vlastní historii a experimentální simulátory studijní zátěže, které Nibomo zatím nemá. Srovnání ke konci článku tyto rozdíly výslovně uvádí.

**Fakta ověřena:** 8. září 2026.

![Obsluha plavební komory zkouší proudění vody na zmenšeném modelu před změnou skutečné komory](/blog/fsrs-settings-v2.png)

## Stručná odpověď: začněte tady

Pro většinu uživatelů Anki jsou následující volby bezpečným výchozím bodem, nikoli univerzálním nastavením:

| Nastavení nebo návyk | Bezpečná výchozí volba | Proč |
| --- | --- | --- |
| Požadovaná retence | `0.90` | Výchozí hodnota Anki vyvažuje zapamatování a objem opakování. |
| Parametry FSRS | Použijte **Optimize Current Preset**; váhy nevkládejte ani ručně neupravujte | Optimalizátor přizpůsobí model vaší historii opakování. |
| Četnost optimalizace | Nejvýše jednou měsíčně; obvykle stačí jednou za několik měsíců | Anki nedoporučuje častou optimalizaci. |
| Kroky učení | Ponechte jen několik kroků, které dokončíte tentýž den | Dlouhé řetězce kroků oddalují plánování podle modelu. |
| Kroky opětovného učení | Omezte je na minimum a intervaly kratší než jeden den | Stejné omezení platí po neúspěšném opakování. |
| Reschedule cards on change | Vypnuto | Nové nastavení se může projevit při budoucích opakováních, aniž by přestavělo dnešní frontu. |
| Maximální interval | Ponechte výchozích 100 let | Nižší strop vrací dobře naučené kartičky častěji. |
| Nové kartičky za den | Nastavte podle dlouhodobě zvládnutelné zátěže | Každá nová kartička znamená učení teď a opakování později. |
| Again oproti Hard | Again znamená neúspěšné vybavení; Hard obtížné, ale úspěšné vybavení | Chybné hodnocení dává modelu chybnou historii. |

Pokud opakování zvládáte a vaše nastavení se tomuto blíží, možná není co opravovat. Ladění nastavení samo o sobě není studium.

## Oddělte tři různá rozhodnutí

Lidé často směšují požadovanou retenci, parametry FSRS a denní objem práce. Každá z těchto věcí ale řídí něco jiného:

- **Požadovaná retence** je cílová pravděpodobnost vybavení. Volíte ji podle svých cílů a času na studium.
- **Parametry FSRS** přizpůsobují model paměti historii opakování. Vypočítá je optimalizátor Anki.
- **Limity nových kartiček a opakování** určují, kolik učiva do systému přibývá a kolik naplánované práce vám Anki může každý den zobrazit.

Díky tomuto rozlišení snáze zjistíte, kde je problém. Dlouhá fronta automaticky neznamená špatné parametry. Balíček s důležitým učivem automaticky nepotřebuje samostatnou předvolbu parametrů. A snížení požadované retence nenapraví tempo přidávání kartiček, které nikdy nebylo udržitelné.

## Požadovanou retenci volte podle zátěže, ne podle ambicí

Požadovaná retence říká FSRS, s jakou pravděpodobností si chcete vybavit odpověď na kartičce, až nastane termín jejího opakování. Při `0.90` FSRS plánuje podle předpovídané 90% pravděpodobnosti vybavení. Jde o cíl modelu, nikoli záruku, že při každém učení nebo zkoušce odpovíte správně přesně v 90 % případů.

Změna má své důsledky v obou směrech:

- Zvýšíte-li požadovanou retenci, intervaly se zkrátí a opakování přibude.
- Snížíte-li ji, intervaly se prodlouží a častěji si na odpověď nevzpomenete.
- Pokud ji snížíte příliš, dodatečné učení zapomenutých kartiček může spotřebovat část času, který jste chtěli ušetřit.

Výchozí hodnota Anki je 90 %. [Doporučení Anki k požadované retenci](https://docs.ankiweb.net/deck-options.html#desired-retention) varuje, že s přibližováním cíle ke 100 % zátěž rychle roste, a doporučuje zůstat pod 97 %. Oficiální [vysvětlení optimální retence](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) popisuje druhý konec křivky: i velmi nízká retence může být neefektivní, protože zapomenuté kartičky vyžadují více práce.

Začněte na `0.90` a hodnotu měňte až po posouzení zátěže. Vyšší cíl může dávat smysl u učiva, kde má zapomenutí skutečné následky. Nižší cíl může pomoci, když opakování vytlačuje hodnotnější studium. Ani jedna změna nevyřeší nejasné kartičky, nepřesné hodnocení nebo příliš mnoho nových kartiček.

### Retence může platit pro jeden balíček, parametry pro celou předvolbu

V Anki 26.08 můžete u **Desired retention** zvolit, kde má nastavení platit: **Shared Preset** (sdílená předvolba) a **This deck** (tento balíček). Související balíčky tak mohou sdílet jednu předvolbu parametrů, zatímco konkrétní balíček má vlastní cílovou retenci.

Vlastní cíl pro balíček použijte, pokud má zapomenutí učiva jiné důsledky. U balíčku ke zkoušce pro získání profesní licence může být oprávněné nastavit vyšší cíl než u méně důležitého balíčku pro průběžné připomínání znalostí, i když oba používají stejný přizpůsobený model.

Volbou **This deck** se parametry FSRS nestávají specifickými pro daný balíček. Ve výchozím nastavení Anki přizpůsobuje parametry podle historie opakování všech balíčků přiřazených k aktuální předvolbě. Pokud se skupiny balíčků výrazně liší subjektivní obtížností, podporovaným řešením pro jejich samostatné přizpůsobení jsou oddělené předvolby.

## Help Me Decide a Simulator odpovídají na různé otázky

Anki 26.08 nabízí dva samostatné experimentální nástroje:

- **Help Me Decide (Experimental)** zobrazuje křivku vztahu mezi retencí a zátěží podle vašich dat. Pomůže s otázkou: „Jaká cílová retence odpovídá počtu opakování nebo minutám, které dlouhodobě zvládnu?“
- **FSRS Simulator (Experimental)** odhaduje, jak se může určité nastavení projevit v čase. Slouží ke srovnání změn retence, přísunu nových kartiček, limitů opakování a maximálního intervalu.

[Dokumentace simulátoru FSRS](https://docs.ankiweb.net/deck-options.html#the-simulator) uvádí jeho hlavní vstupy:

- počet simulovaných dnů
- počet dalších nových kartiček k simulaci
- nové kartičky za den
- maximální počet opakování za den
- maximální interval
- požadovaná retence a parametry FSRS dané předvolby

Simulace také používá skutečné paměťové stavy kartiček, které patří pod danou předvolbu. U dlouhodobě používané sbírky je proto užitečnější než násobení dnešního počtu naplánovaných kartiček obecným procentem.

Než změníte skutečné nastavení, vyzkoušejte tři scénáře:

1. Současnou retenci a přísun nových kartiček.
2. Cílovou retenci, o které uvažujete.
3. Stejný cíl s menším počtem nových kartiček za den.

Třetí běh ověří běžnou alternativu: ponechat cíl vybavení a zpomalit přísun nového učiva. Pokud simulace předpoví zvládnutelnou zátěž, nemusíte se smiřovat s častějším zapomínáním jen proto, abyste zkrátili frontu. Přísunu nového učiva se podrobněji věnuje článek [Kolik nových kartiček denně?](/blog/how-many-new-flashcards-per-day/).

Oba nástroje poskytují odhady. Vynechané dny, upravené kartičky, nové učivo a změny v hodnocení mohou způsobit, že se skutečná zátěž bude od grafu lišit. Srovnání použijte k volbě směru, ne jako příslib přesného počtu kartiček za několik měsíců.

Starší návody mohou místo toho zmiňovat **Compute Minimum Recommended Retention**, zkráceně CMRR. Anki tuto funkci odstranilo ve verzi 25.07. Do současného postupu pro volbu požadované retence už nepatří.

## Parametry FSRS optimalizujte podle vlastní historie

Požadovaná retence vyjadřuje váš cíl. Parametry FSRS určují, jak model odpovídá vaší historii opakování.

V Anki 26.08 použijte **Optimize Current Preset** k přizpůsobení parametrů aktivní předvolby. Anki ve výchozím nastavení zahrne historii opakování všech balíčků s touto předvolbou; má-li být výběr užší, můžete upravit vyhledávací dotaz. **Optimize All Presets** aktualizuje všechny předvolby najednou.

Váhy nezadávejte ručně ani je nekopírujte z Redditu, videa nebo cizího balíčku. Cizí kartičky, načasování opakování a zvyklosti při hodnocení nejsou vaše historie. Úhledná řada [vah FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) není studijní strategie, kterou lze přenést na kohokoli.

Optimalizaci opakujte až poté, co přibude dostatek nové historie opakování. Příručka Anki uvádí, že jednou měsíčně stačí, zatímco nápověda v aplikaci 26.08 říká, že stačí jednou za několik měsíců. Praktický závěr je stejný: není důvod optimalizovat každý týden, natož po každém učení.

### Kontrolu kvality používejte s aktuální předvolbou

Zapněte **Check health when optimizing (slow)**, pokud chcete posoudit, jak dobře se FSRS dokáže přizpůsobit historii aktuální předvolby. Tato kontrola se spouští s **Optimize Current Preset**, nikoli s **Optimize All Presets**.

Pokud je výsledek špatný, prohlédněte data, než začnete sahat na váhy. [Doporučení Anki k parametrům FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) uvádí běžné příčiny: méně než několik set opakování, používání Hard po neúspěchu a vynechávání hodnocení Again, když si na odpověď nevzpomenete. Pokud máte málo použitelné historie, ponechte výchozí hodnoty a optimalizujte později, místo abyste přebírali parametry jiného uživatele.

## Again znamená neúspěch; Hard je úspěšné vybavení

Tento návyk je stejně důležitý jako kterékoli nastavení.

**Again** použijte, když jste si požadovanou odpověď nedokázali vybavit nebo jste odpověděli chybně. **Hard** volte jen tehdy, když jste si ji vybavili správně, ale s velkou námahou nebo váháním. Good a Easy také znamenají úspěch.

Pokud stisknete Hard, abyste se vyhnuli krátkému intervalu Again, zaznamenáte po neúspěchu úspěch. FSRS se pak učí z nesprávné události. Tlačítko vybírejte podle toho, jak jste si odpověď vybavili. Nerozhodujte se podle intervalu uvedeného nad tlačítkem.

Nejednoznačné kartičky ztěžují poctivé hodnocení. Pokud otázka požaduje pět faktů a vy si vzpomenete na čtyři, problém s plánováním vznikl už v editoru. Kartičku rozdělte nebo přeformulujte. Pro kartičky, které se nedaří ani po mnoha opakováních, použijte návod [Jak opravit problémové kartičky („leeches“)](/blog/how-to-fix-leech-flashcards/).

## Kroky učení ve FSRS udržujte krátké, nebo je vědomě nechte prázdné

Kroky učení a opětovného učení určují, kdy se ke kartičce znovu vrátíte v krátkém časovém odstupu, než ji převezme běžné dlouhodobé plánování. Nejsou dalším cílem retence.

Doporučení Anki pro FSRS uvádí dvě omezení:

- každý krok má být kratší než jeden den a má jít dokončit tentýž den
- počet opakování během jednoho dne má zůstat malý

Dlouhé řetězce jako `1m 10m 1d 3d` přenášejí do FSRS starý návyk ze SM-2. Kroky dlouhé den nebo více oddalují plánování podle modelu a mohou vést k matoucím údajům na tlačítkách, například když Hard ukazuje delší interval než Good.

Krátká posloupnost jako `1m 10m` s krokem opětovného učení `10m` je opatrný výchozí bod, pokud se hodí k vašemu způsobu studia. Více opakování během téhož dne není automaticky lepší.

Anki 26.08 také umožňuje nechat kterékoli z polí pro kroky učení či opětovného učení prázdné. Se zapnutým FSRS prázdné pole předává příslušné krátkodobé plánování FSRS. Jde o experimentální funkci a interval po hodnocení Again může být jeden den i delší. Pokud potřebujete předvídatelný návrat ještě tentýž den, ponechte krátké, ručně nastavené kroky. Pole vymažte pouze tehdy, když vědomě přijímáte, že načasování zvolí FSRS.

## Pro pozvolný přechod nechte volbu Reschedule cards on change vypnutou

Když je volba **Reschedule cards on change** vypnutá, což je výchozí stav, zapnutí FSRS ani změna požadované retence či parametrů okamžitě nepřepíše stávající termíny. Nové nastavení se uplatní při budoucích opakováních, takže se fronta mění postupně.

Pokud některou z těchto změn FSRS uložíte se zapnutou volbou, termíny se ihned přepočítají. Podle nového cíle a stavů kartiček může být potřeba mnoho kartiček zopakovat najednou. Anki také k přeplánovaným kartičkám přidává záznamy do historie opakování, čímž zvětšuje sbírku.

Tato volba se hodí pouze tehdy, když opravdu chcete zpětný přepočet. U dlouhodobě používané sbírky:

1. Vytvořte čerstvou zálohu a ověřte, že víte, jak změnu vrátit nebo zálohu obnovit.
2. Spusťte Simulator s navrhovaným nastavením.
3. Zvolte jednu změnu nastavení; nekombinujte několik pokusů.
4. Při ukládání zapněte přeplánování jen tehdy, pokud chcete okamžitě přepsat termíny a zvládnete výslednou zátěž.

Anki výslovně doporučuje zálohu při přechodu ze SM-2 se zapnutým přeplánováním. Obecnější [průvodce zálohováním kartiček](/blog/how-to-back-up-flashcards/) vysvětluje, proč na postupu obnovy záleží stejně jako na souboru se zálohou.

## Maximální interval ponechte dostatečně dlouhý

Výchozí maximální interval v Anki je 100 let. To zní zvláštně, dokud si neuvědomíte, že jde o strop, nikoli slib, že každá dobře naučená kartička zmizí na století.

Nižší strop vrací dobře známé kartičky dříve a zvyšuje objem práce. Při dosažení stropu mohou Hard, Good a Easy zobrazovat stejný interval, protože žádné z nich nesmí maximum překročit.

Kratší maximální interval může dávat smysl, pokud máte konkrétní termín zkoušky, učivo se často mění nebo profesní pravidla vyžadují pravidelné opakování učiva bez ohledu na odhad toho, co si pamatujete. Strop slaďte s kalendářem a simulátorem, místo abyste ze strachu zvolili malé číslo. Tomuto konkrétnímu případu se věnuje článek [Jak se s FSRS připravovat na zkoušku](/blog/how-to-study-for-an-exam-with-fsrs/).

Pro běžné dlouhodobé učení nechte strop vysoký. Požadovaná retence už určuje, při jaké předpovídané pravděpodobnosti vybavení má přijít opakování.

## Přísun nových kartiček patří do rozhodování o zátěži

FSRS umí rozložit opakování v čase. Neomezený přísun nového učiva ale dlouhodobě zvládnutelným neudělá. Každá nová kartička vytváří práci s učením teď a s opakováním později.

Pokud je fronta příliš dlouhá, před snížením požadované retence zkontrolujte:

- počet nových kartiček za den
- velké importy nebo dávky vygenerovaných kartiček
- limit maximálního počtu opakování, který neustále skrývá naplánovanou práci
- problémové a nejasné kartičky, které vyžadují stále další pokusy
- vynechané dny opakování

Pokud víte, že se balíček bude rozrůstat, použijte **Additional new cards to simulate**. Předpověď vycházející jen z dnešní sbírky neukáže zátěž po velkém importu.

Pokud je odhadovaná zátěž příliš vysoká, přidávejte méně nových kartiček a simulaci zopakujte. Zachováte tím cílovou pravděpodobnost vybavení, aniž byste po plánovači chtěli tolerovat více zapomínání.

## Anki a Nibomo nabízejí různé možnosti nastavení FSRS

Oba produkty používají FSRS-6, ale nastavení FSRS v Anki nemá v Nibomo přesné protějšky.

| Možnost | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Požadovaná retence | **Shared Preset** nebo **This deck** | Nastavitelná pro každý pracovní prostor; výchozí hodnota `0.90` |
| Parametry FSRS | **Optimize Current Preset** nebo **Optimize All Presets** podle historie opakování | Oficiální výchozí váhy FSRS-6 jsou pevně dané a ve v1 je uživatel nemůže nastavit |
| Kroky učení | Nastavitelné; plánování pomocí FSRS při prázdném poli je experimentální | Nastavitelné pro každý pracovní prostor; výchozí `1m 10m` |
| Kroky opětovného učení | Nastavitelné; plánování pomocí FSRS při prázdném poli je experimentální | Nastavitelné pro každý pracovní prostor; výchozí `10m` |
| Maximální interval | Výchozích 100 let | Výchozích 36 500 dnů, tedy také 100 let |
| Změny nastavení | Ve výchozím stavu budoucí opakování; volitelně zpětné přeplánování | Pouze budoucí opakování; stávající termíny se nepřepočítávají |
| Nástroje pro odhad zátěže | **Help Me Decide (Experimental)** a **FSRS Simulator (Experimental)** | Ve v1 není obdobný simulátor zátěže |

Nibomo používá standardní hodnocení Again, Hard, Good a Easy a uchovává stav paměti FSRS pro každou kartičku. Plánovače v backendu, iOS a Androidu mají nezávislé implementace, jejichž chování se udržuje shodné; webové opakování využívá plánovač backendu, místo aby přidávalo čtvrtou kopii.

Tato omezení a výchozí hodnoty popisuje veřejná [specifikace plánování FSRS v Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Rozdíl je přímočarý: Nibomo nabízí praktické nastavení FSRS-6 na úrovni pracovního prostoru, zatímco Anki poskytuje přesnější volbu toho, pro které balíčky nastavení platí, přizpůsobení parametrů vlastní historii a simulaci. Pokud jsou pro vás tyto možnosti zásadní, vhodnější je Anki.

## Bezpečnější postup pro dlouhodobě používanou sbírku

Pokud už máte historii opakování za měsíce nebo roky, postupujte v tomto pořadí:

1. **Srovnejte si význam hodnocení.** Again je neúspěch; Hard je obtížné, ale úspěšné vybavení.
2. **Optimalizujte aktuální předvolbu.** Přizpůsobte model vlastní historii, místo abyste váhy upravovali nebo kopírovali.
3. **V případě potřeby spusťte kontrolu kvality.** Nedostatečnou nebo nekonzistentní historii berte jako problém v datech.
4. **Použijte Help Me Decide.** Rozmezí retence vyberte podle počtu opakování nebo minut, které dlouhodobě zvládnete.
5. **Spusťte Simulator.** Porovnejte současné nastavení, navržený cíl a menší přísun nových kartiček.
6. **V používaném nastavení změňte jen jednu věc.** Nejprve upravte retenci nebo přísun a sledujte skutečnou frontu.
7. **Udržujte kroky krátké.** Odstraňte vícedenní řetězce učení a opětovného učení i kroky dlouhé celý den; prázdná pole používejte jen jako experiment.
8. **Maximální interval ponechte dostatečně dlouhý.** Zkraťte ho jen kvůli konkrétnímu časovému horizontu nebo požadavku.
9. **Přeplánování ponechte vypnuté.** Pokud potřebujete okamžitý přepočet, nejprve zálohujte a počítejte s výslednou frontou.

Díky tomuto pořadí lze změny zavedeného plánu co nejdéle vracet. Také zabrání tomu, aby se tři různé problémy — přizpůsobení modelu, cíl vybavení a přísun nového učiva — slily do jedné hádanky v nastavení.

## Časté otázky k nejlepšímu nastavení FSRS

### Je 90 % nejlepší požadovaná retence pro FSRS?

Je to nejbezpečnější obecný výchozí bod, protože jde o výchozí hodnotu Anki a vyhýbá se nejstrmější části křivky zátěže při vysoké retenci. Nejlepší hodnota pro konkrétní balíček závisí na důsledcích zapomenutí a zátěži, kterou dlouhodobě zvládnete. Před změnou vyzkoušejte **Help Me Decide (Experimental)**.

### Mám nastavit požadovanou retenci na 95 %?

Až po ověření, kolik opakování nebo minut navíc to přinese. U dobře zpracovaného balíčku s důležitým učivem může 95 % dávat smysl; velkou sbírku pro běžné zájmové učení to může zbytečně zatížit. Současně nezapínejte zpětné přeplánování, pokud vědomě nechcete okamžitý přepočet termínů.

### Jak často mám optimalizovat parametry FSRS?

Jednou měsíčně už bohatě stačí a nápověda v Anki 26.08 uvádí, že stačí jednou za několik měsíců. Optimalizujte, až přibude dostatek nové historie, nikoli podle denního nebo týdenního rozvrhu.

### Mají být kroky učení FSRS prázdné?

Prázdné kroky učení nebo opětovného učení dovolují Anki 26.08 předat příslušné krátkodobé plánování FSRS. Funkce je experimentální a opakování po hodnocení Again může být naplánováno za den i déle. Opatrnější volbou zůstává minimum kroků dokončených tentýž den.

### Přeplánuje změna nastavení FSRS stávající kartičky v Anki?

Ve výchozím stavu ne. S vypnutou volbou **Reschedule cards on change** ovlivní nové nastavení budoucí opakování bez okamžité přestavby fronty. Zapnutí mění termíny a může způsobit, že bude potřeba zopakovat mnoho kartiček najednou. Nejprve proto zálohujte.

### Je CMRR stále součástí Anki?

Ne. Anki odstranilo Compute Minimum Recommended Retention ve verzi 25.07. V Anki 26.08 použijte **Help Me Decide (Experimental)** a **FSRS Simulator (Experimental)** ke srovnání retence s odhadovanou zátěží.

### Používá Nibomo stejné nastavení jako Anki?

Používá FSRS-6 a umožňuje nastavit požadovanou retenci, kroky učení, kroky opětovného učení, maximální interval a náhodné rozptýlení intervalů (fuzz) pro každý pracovní prostor. Nepřebírá celý model nastavení Anki: ve v1 jsou váhy pevné, změny platí pouze do budoucna a chybí optimalizace parametrů podle vlastní historie i simulátor zátěže.

## Nejdřív určete zátěž, potom procenta

Dobré nastavení FSRS podřídí frontu opakování skutečnému studijnímu plánu. Začněte na 90 %, odhadněte práci, řiďte přísun nových kartiček a retenci zvyšujte jen tehdy, když lepší zapamatování stojí za další opakování. Kroky ponechte krátké, maximální interval dostatečně dlouhý a hodnocení poctivé.

Potom obrazovku nastavení zavřete. Plánovač potřebuje pravidelné opakování víc než další večer ladění.
