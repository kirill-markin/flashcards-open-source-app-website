---
title: "Poradie nových kariet v Anki – výber, zoradenie a kontrola frontu"
description: "Na príklade šiestich kariet zistíte, ako Anki vyberá a zoraďuje nové karty. Skontrolujte limity podbalíkov, pozície kariet vo fronte aj to, z ktorého balíka sa učíte."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "poradie nových kariet v Anki"
  - "poradie výberu nových kariet v Anki"
  - "zoradenie nových kariet v Anki"
  - "Anki vzostupne podľa pozície"
  - "nesprávne poradie kariet v Anki"
---

Kartu s pozíciou 10 môžete v Anki vidieť až po karte s pozíciou 60. Ak sa učíte z nadradeného balíka a máte nastavený výber **Podľa balíka** (*Deck*) a zoradenie **V poradí výberu** (*Order gathered*), Anki môže dokončiť výber z podbalíka, ktorý je v abecede skôr, a až potom prejsť k podbalíku s kartou na pozícii 10. Zoradením podľa dátumu vytvorenia v prehliadači kariet poradie pri učení nezmeníte.

Anki postupuje v dvoch krokoch. Pri **výbere** rozhodne, ktoré nové karty sa zmestia do dnešných limitov. Pri **zoradení** určí, v akom poradí sa vybrané karty zobrazia. Najprv si ujasnite, či Anki vyberá iné karty, než čakáte, alebo či sa očakávané karty zobrazujú v inom poradí.

Postup platí pre bežné balíky v počítačovej verzii Anki. Príklad so šiestimi kartami je pôvodný výpočet na papieri, overený 6. októbra 2026 podľa aktuálnej príručky a vydanej verzie Anki. Karty sa pri overovaní v aplikácii neprehrávali. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![Muž drží štvrtú vinylovú platňu nad prázdnou priehradkou stojana vedľa troch platní. Za ním sú dve debny s albumami, ktoré nevybral.](/blog/anki-new-card-order.png)

## Vyberte si poradie, v akom chcete karty vidieť

Pri balíku, z ktorého spúšťate učenie, otvorte **Možnosti** (*Options*) a nájdite sekciu **Poradie zobrazenia** (*Display Order*). Ak spustíte učenie z nadradeného balíka, jeho nastavenia poradia platia aj pre karty z podbalíkov.

| Čo chcete dosiahnuť | Poradie výberu nových kariet (*New Card Gather Order*) | Poradie zoradenia nových kariet (*New Card Sort Order*) |
| --- | --- | --- |
| Postupovať od najnižšej pozície nových kariet naprieč vybraným balíkom a jeho podbalíkmi | Vzostupne podľa pozície (*Ascending position*) | V poradí výberu |
| Prechádzať podbalíky podľa abecedy a v každom postupovať podľa pozície | Podľa balíka | V poradí výberu |
| Zachovať výber kariet a premiešať poradie ich zobrazenia | Nastavenie výberu podľa potreby | Náhodne (*Random*) |

Tieto kombinácie vychádzajú z pravidiel výberu a zoradenia v príručke Anki. Voľba **Vzostupne podľa pozície** používa uloženú pozíciu novej karty. Tú môže zmeniť poradie vkladania aj ručné presunutie, takže sa nemusí zhodovať s poradím podľa dátumu vytvorenia. [Výber nových kariet v príručke Anki (anglicky)](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order), [zoradenie nových kariet v príručke Anki (anglicky)](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Pred úpravou si overte, ktorú predvoľbu má balík priradenú a ktoré ďalšie balíky ju používajú. Poradie zobrazenia sa nastavuje v predvoľbe. Ak chcete zmeniť poradie len pre tento balík, najprv mu priraďte samostatnú predvoľbu. Denné limity môžete upraviť voľbou **Tento balík** (*This deck*) alebo **Len dnes** (*Today only*), kým nastavenia poradia zobrazenia sa zdieľajú cez predvoľbu. [Postup nastavenia predvoľby pre jeden balík (anglicky)](/blog/anki-deck-options-presets/)

## Ktoré štyri karty sa zmestia do limitu

Predstavte si bežný nadradený balík `OrderLab`, ktorý obsahuje dva podbalíky a spolu len týchto šesť kariet. Každá vznikla zo samostatnej poznámky typu **Základná** (*Basic*), z ktorej sa vytvorila jediná karta. Všetkých šesť má preto rovnaké číslo typu karty a žiadna nemá súrodeneckú kartu, teda ďalšiu kartu z tej istej poznámky.

| Karta | Balík | Uložená pozícia novej karty |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Všetkých šesť kariet je nových. Žiadna nie je dočasne skrytá, pozastavená ani zaradená do filtrovaného balíka. Na začiatku nie sú k dispozícii ďalšie karty, žiadne opakovania v rámci učenia ani karty naplánované na opakovanie. Dnes ste sa ešte neučili. `OrderLab` nemá nadradený balík a platné limity opakovania nechávajú priestor pre všetkých šesť nových kariet.

Na učenie vyberte **OrderLab**. Jeho platný limit nových kariet je **4**, limit `01 First` je **3** a limit `02 Second` je **2**. Žiadny z limitov nemá dočasnú úpravu. V oboch porovnaniach použite zoradenie **V poradí výberu**. Pri každom vychádzajte z rovnakého východiskového stavu kolekcie a poradie si vypočítajte na papieri. Medzi porovnaniami na karty neodpovedajte.

Pri výbere **Podľa balíka** Anki postupuje takto.

1. Podľa abecedy prejde najprv na `01 First`, až potom na `02 Second`.
2. Z `01 First` vyberie podľa pozície **A, B, C**. Podbalík dodal tri karty a v limite nadradeného balíka zostáva jedno miesto.
3. Z `02 Second` vyberie **D** a tým dosiahne limit štyroch kariet nadradeného balíka.

Nové karty sa prvýkrát zobrazia v poradí **A → B → C → D**. Karty E a F sa do výberu nedostanú.

Pri výbere **Vzostupne podľa pozície** Anki posudzuje karty z oboch podbalíkov v poradí **D → A → E → B → F → C**. Prvé štyri sa zmestia do všetkých limitov. Dve sú z `02 Second`, dve z `01 First` a spolu zaplnia limit nadradeného balíka. Tým sa výber končí.

Očakávané poradie je **D → A → E → B**. Karty C a F zostanú mimo výberu. Pri pridávaní každej karty Anki uplatňuje limity jej balíka aj nadradených balíkov. [Kód výberu kariet v Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Limit dvoch kariet pre `02 Second` je horná hranica. Pri výbere podľa balíka pripadne na `02 Second` iba jedna karta, pretože `01 First` už obsadil tri zo štyroch miest. Pri vzostupnom výbere vyjdú v tomto príklade dve karty z každého podbalíka vďaka ich konkrétnym pozíciám. Pri iných pozíciách sa môžu karty rozdeliť inak.

## Keď sa zmestí všetkých šesť kariet, mení sa iba poradie

V druhom porovnaní na papieri nastavte limity tak, aby sa do výberu zmestili všetky karty. Pre nadradený balík nastavte **6**, pre `01 First` **3** a pre `02 Second` tiež **3**. Ponechajte zoradenie **V poradí výberu**.

| Nastavenie výberu | Limity (nadradený balík / `01 First` / `02 Second`) | Očakávané poradie prvého zobrazenia |
| --- | --- | --- |
| Podľa balíka | 6 / 3 / 3 | A → B → C → D → E → F |
| Vzostupne podľa pozície | 6 / 3 / 3 | D → A → E → B → F → C |

Obe nastavenia vyberú všetkých šesť kariet. Líšia sa iba poradím. Ak by ste zvýšili limit nadradeného balíka na šesť a v `02 Second` ponechali limit dva, do výberu by sa dostalo len päť kariet. Karta F by zostala mimo. Vyššie limity slúžia len na porovnanie v tomto príklade.

## Zoradenie pracuje iba s vybranými kartami

Vráťte sa k pôvodným limitom **4 / 3 / 2** a zmeňte iba **Poradie zoradenia nových kariet** na **Náhodne**.

| Nastavenie výberu | Karty, ktoré môže náhodné zoradenie premiešať | Karty, ktoré nemôže pridať |
| --- | --- | --- |
| Podľa balíka | A, B, C, D | E, F |
| Vzostupne podľa pozície | D, A, E, B | C, F |

Premieša sa poradie zobrazenia vybraných kariet. Z tabuľky sa konkrétne náhodné poradie nedá predpovedať. Anki v tomto kroku mení poradie kariet, ktoré už prešli výberom. [Kód zoraďovania v Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

S už vybranými kartami pracuje aj voľba **Podľa typu karty, potom v poradí výberu** (*Card type, then order gathered*). Všetkých šesť kariet z poznámok typu **Základná** má rovnaké číslo typu karty, takže sa v tomto príklade zachová poradie výberu.

V samostatnom príklade predpokladajme, že Anki už z poznámok s viacerými šablónami vybralo štyri karty v poradí **W (typ 2), X (typ 1), Y (typ 2), Z (typ 1)**. Zoradením podľa typu vznikne poradie **X → Z → W → Y**. Ako prvé sa zobrazia karty typu 1 a v rámci každého typu sa zachová poradie výberu. Príklad sa začína až po výbere, takže z neho nezistíte, ktoré súrodenecké karty by sa doň dostali pri vašom nastavení dočasného skrývania.

Číslo typu karty označuje pozíciu jej šablóny v rámci typu poznámky. Či karta precvičuje rozpoznávanie alebo aktívne vybavenie odpovede, závisí od šablóny. Ak čakáte, že zoradenie podľa typu zobrazí najprv všetky otázky v pôvodnom smere, overte si to podľa znenia otázok.

## Pred zmenou pozícií ich skontrolujte v prehliadači

Otvorte **Prehliadať** (*Browse*), prepnite do režimu **Karty** (*Cards*) a vyhľadajte karty vo vybranom balíku a jeho podbalíkoch. Pre tento príklad použite nasledujúci príkaz.

```text
deck:OrderLab is:new
```

Cez ponuku v záhlaví tabuľky zobrazte stĺpce **Otázka** (*Question*), **Karta** (*Card*), **Balík** (*Deck*), **Termín** (*Due*) a **Vytvorené** (*Created*). Pri novej karte ukazuje **Termín** jej pozíciu vo fronte a **Vytvorené** dátum vytvorenia jej poznámky. **Pole zoradenia** (*Sort Field*) zobrazuje obsah poľa poznámky určeného na zoraďovanie. Zoradenie podľa stĺpca mení len zobrazenie tabuľky. Uložené pozície ani nastavenie výberu pri učení tým nezmeníte. [Stĺpce prehliadača v príručke Anki (anglicky)](https://docs.ankiweb.net/manual/browsing#columns)

Vyhľadávanie `is:new` môže nájsť aj pozastavené alebo dočasne skryté nové karty. Ich pozície sa v stĺpci **Termín** zobrazujú v zátvorkách. Nasledujúci príkaz vylúči tieto karty aj tie, ktoré sú práve vo filtrovaných balíkoch.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Ak názov balíka obsahuje medzery, uzavrite ho do úvodzoviek, napríklad `deck:"My Deck"`. Aj z takto zúženého zoznamu sa dnes môže do frontu dostať menej kariet. Záleží na limitoch a automatickom skrývaní súrodeneckých kariet. [Vyhľadávanie podľa stavu karty (anglicky)](https://docs.ankiweb.net/manual/searching#card-state), [vyhľadávanie podľa balíka (anglicky)](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes), [sprievodca dočasným skrytím a pozastavením kariet (anglicky)](/blog/anki-bury-vs-suspend/)

Ak uložené pozície zodpovedajú želanému poradiu, nechajte ich tak. Ak ich potrebujete zmeniť, zapíšte si pôvodné pozície, označte len niekoľko konkrétnych nových kariet a použite **Karty → Zmeniť pozíciu** (*Cards → Reposition*). Najprv skontrolujte nastavenia v dialógovom okne. Voľba **Posunúť pozície existujúcich kariet** (*Shift position of existing cards*) môže posunúť aj karty na vyšších pozíciách mimo výberu. Bez posunu môžu mať niektoré karty rovnakú pozíciu. Pri zhode sa ich poradie zobrazenia nedá určiť len podľa čísla pozície. [Príkaz na zmenu pozície v príručke Anki (anglicky)](https://docs.ankiweb.net/manual/browsing#cards)

Výber aj zoradenie môžete upraviť bez vymazania histórie učenia alebo opakovania. Pri hľadaní príčiny sa sústreďte na pozície nových kariet a poradie zobrazenia.

## Skontrolujte, z ktorého balíka sa učíte a koľko miest dnes zostáva

Ak v pôvodnom príklade vyberiete priamo `OrderLab::02 Second`, do úvahy prichádzajú iba D, E a F. Pri limite dvoch kariet, výbere **Vzostupne podľa pozície** a zoradení **V poradí výberu** očakávajte **D → E**. Aj keby sa uplatnil limit nadradeného balíka, stále sú v ňom voľné štyri miesta, takže sa doň obe karty zmestia. Ak vyberiete nadradený balík s nastavením **Podľa balíka** a limitmi **4 / 3 / 2**, dostanete **A → B → C → D**.

Pri učení spustenom z `OrderLab` rozhoduje poradie zobrazenia nastavené pre `OrderLab`. Balík, ktorý vyberiete na učenie, určuje aj celkový limit a popri ňom platia príslušné limity podbalíkov. Voľba **Uplatňovať limity od najvyššieho balíka** (*Limits start from top*) určuje, či pri učení spustenom priamo z podbalíka platia aj limity jeho nadradených balíkov. [Pravidlá pre podbalíky (anglicky)](https://docs.ankiweb.net/manual/deck-options#subdecks), [nastavenie limitov nadradených balíkov (anglicky)](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Skontrolujte aj limity opakovania. V predvolenom nastavení limit opakovania obmedzuje aj počet nových kariet. Toto správanie mení prepínač **Nové karty ignorujú limit opakovania** (*New cards ignore review limit*). Tento prepínač aj voľba **Uplatňovať limity od najvyššieho balíka** platia pre celú kolekciu. Zapíšte si nastavenia oboch skôr, než z limitu nových kariet odhadnete, koľko ich dnes ešte uvidíte. [Kód rozhrania denných limitov v Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

Ak si chcete prezrieť otázky bez odpovedania na karty, použite v prehliadači **Náhľad** (*Preview*). Pri najbližšom bežnom učení si zapíšte tieto údaje.

| Čo si zapísať | Čo tým zistíte |
| --- | --- |
| Balík, z ktorého ste spustili učenie, jeho predvoľbu a nastavenia výberu a zoradenia | Ktoré nastavenia poradia platia pri učení? |
| Očakávané karty a ich uložené pozície | Je problém vo výbere alebo v poradí? |
| Limity nových kariet a opakovania, úpravy limitov pre tento balík alebo len na dnes a čo ste sa dnes už učili | Koľko miest dnes ešte zostáva? |
| Limity nadradených balíkov a stav oboch prepínačov limitov pre celú kolekciu | Ktoré ďalšie limity platia? |
| Dočasne skryté, pozastavené a súrodenecké karty aj karty vo filtrovaných balíkoch | Ktoré z kariet, ktoré prichádzajú do úvahy, môžu byť nedostupné? |
| Poradie prvého zobrazenia nových kariet, oddelene od ich ďalších zobrazení v rámci učenia | Zodpovedá poradie nových kariet očakávaniu? |

Keď odpoviete na novú kartu, môže sa ešte počas učenia zobraziť znova a prerušiť sled nových kariet. Voľba **Poradie nových kariet a opakovania** (*New/Review Order*) určuje, či sa nové karty zobrazia pred kartami na opakovanie, po nich alebo medzi nimi. Anki najprv vyberie a zoradí nové karty podľa ich vlastných nastavení a až potom spojí obe skupiny pri zostavovaní frontu. [Kód zostavovania frontu v Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Keď očakávaný výber a poradie prvého zobrazenia vysvetľujú, čo pri učení vidíte, kontrola je hotová. Ak výsledok stále nesedí, na presnejšie určenie príčiny si odložte pozície, nastavenia, názov vybraného balíka, verziu Anki, pozorované poradie aj údaje o doplnkoch, ktoré s tým môžu súvisieť. Ak si chcete navyše precvičiť konkrétnu tému, použite samostatný postup pre filtrovaný balík. [Precvičovanie vo filtrovanom balíku bez zmeny termínov (anglicky)](/blog/anki-filtered-decks-without-rescheduling/)
