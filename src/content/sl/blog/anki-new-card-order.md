---
title: "Vrstni red novih kartic v Ankiju – izbor, razvrščanje in preverjanje čakalne vrste"
description: "Na primeru šestih kartic spoznajte, kako Anki izbira in razvršča nove kartice. Preverite omejitve podkompletov, položaje v čakalni vrsti in komplet, izbran za učenje."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "vrstni red novih kartic v Ankiju"
  - "vrstni red izbora novih kartic v Ankiju"
  - "razvrščanje novih kartic v Ankiju"
  - "Anki po naraščajočem položaju"
  - "kartice v Ankiju v napačnem vrstnem redu"
---

V Ankiju se lahko nova kartica na položaju 10 prikaže za kartico na položaju 60. Če se učite iz nadrejenega kompleta in za izbor nastavite **Po kompletih** (**Deck**), za razvrščanje pa **Po vrstnem redu izbora** (**Order gathered**), lahko Anki konča izbor iz podkompleta, ki je po abecedi na vrsti prej, preden pride do podkompleta s kartico na položaju 10. Razvrščanje po datumu nastanka v brskalniku kartic na to čakalno vrsto ne vpliva.

Anki določi vrstni red novih kartic v dveh korakih. Pri **izboru** odloči, katere kartice pridejo v čakalno vrsto v okviru današnjih omejitev. Pri **razvrščanju** določi zaporedje izbranih kartic. Najprej ugotovite, ali Anki izbira napačne kartice ali pa prave kartice prikazuje v nepričakovanem zaporedju.

Navodila veljajo za običajne komplete v namizni različici Ankija. Primer s šestimi karticami je izviren izračun na papirju, preverjen 6. oktobra 2026 po takrat veljavnem priročniku in izdani različici programa. [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3)

![Moški drži četrto vinilno ploščo nad praznim predelkom stojala ob treh drugih ploščah. Za njim sta dva zaboja albumov, ki jih ni izbral.](/blog/anki-new-card-order.png)

## Izberite želeni vrstni red

Odprite **Možnosti** (**Options**) kompleta, ki ga kliknete za učenje, in poiščite razdelek **Vrstni red prikaza** (**Display Order**). Ko se učite iz nadrejenega kompleta, njegove nastavitve prikaza veljajo za celotno sejo, tudi za kartice iz podkompletov.

| Želeni rezultat | Vrstni red izbora novih kartic (New Card Gather Order) | Vrstni red razvrščanja novih kartic (New Card Sort Order) |
| --- | --- | --- |
| Nove kartice naj si sledijo po naraščajočih položajih v izbranem kompletu in vseh njegovih podkompletih | Po naraščajočem položaju (Ascending position) | Po vrstnem redu izbora |
| Podkompleti naj si sledijo po abecedi, kartice znotraj vsakega pa po položaju | Po kompletih | Po vrstnem redu izbora |
| Izbrane kartice naj ostanejo iste, vrstni red prikaza pa naj se premeša | Nastavitev izbora po želji | Naključno (Random) |

Te kombinacije izhajajo iz opisa nastavitev v angleškem priročniku za Anki. Možnost **Po naraščajočem položaju** upošteva shranjeni položaj nove kartice. Ta se lahko razlikuje od položaja v zaporedju po datumu nastanka, saj nanj vplivata vrstni red vstavljanja in ročno prestavljanje kartic. [Izbor novih kartic](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) · [Razvrščanje novih kartic](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order)

Pred spreminjanjem preverite, katero prednastavitev uporablja komplet in kateri drugi kompleti jo uporabljajo. Vrstni red prikaza je del prednastavitve. Če želite spremembo omejiti na en komplet, mu najprej dodelite ločeno prednastavitev. Dnevne omejitve lahko posebej nastavite z možnostma **Ta komplet** (**This deck**) ali **Samo danes** (**Today only**). Nastavitve vrstnega reda prikaza si kompleti še naprej delijo prek prednastavitve. [Postopek za ločeno prednastavitev enega kompleta v angleščini](/blog/anki-deck-options-presets/)

## Katere štiri kartice pridejo v izbor?

Predstavljajte si običajen nadrejeni komplet `OrderLab` z dvema podkompletoma in samo temi šestimi karticami. Vsaka izhaja iz svojega zapiska tipa **Osnovni** (**Basic**), ki ima eno samo kartico. Zato ima vseh šest isto številko tipa kartice in nobena nima para ali drugih kartic iz istega zapiska.

| Kartica | Komplet | Shranjeni položaj nove kartice |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Vseh šest kartic je novih. Nobena ni začasno skrita, izključena iz učenja ali v filtriranem kompletu. Na začetku ni drugih kartic, ponovitev v fazi učenja ali kartic za ponavljanje. Danes še niste obravnavali nobene kartice. `OrderLab` nima nadrejenega kompleta, veljavne omejitve ponavljanja pa dopuščajo vseh šest novih kartic.

Za učenje izberite **OrderLab**. Njegova veljavna omejitev za nove kartice je **4**. Omejitev podkompleta `01 First` je **3**, podkompleta `02 Second` pa **2**. Začasnih sprememb omejitev ni. V obeh primerjavah uporabite razvrščanje **Po vrstnem redu izbora**. Vsak izračun opravite na papirju iz istega začetnega stanja zbirke, brez odgovarjanja na kartice med primerjavama.

Pri izboru **Po kompletih** Anki ravna tako.

1. Po abecedi pride do `01 First` pred `02 Second`.
2. Po vrstnem redu položajev izbere **A, B, C**. `01 First` prispeva tri kartice, v nadrejenem kompletu pa ostane eno prosto mesto.
3. Iz `02 Second` izbere **D** in s tem doseže omejitev štirih kartic za nadrejeni komplet.

Pričakovano zaporedje prvega prikaza novih kartic je **A → B → C → D**. Kartici E in F ne prideta v izbor.

Pri izboru **Po naraščajočem položaju** si kandidati iz obeh podkompletov sledijo v zaporedju **D → A → E → B → F → C**. Prve štiri kartice ustrezajo vsem omejitvam. Dve sta iz `02 Second`, dve iz `01 First`, skupaj pa so štiri. Izbor se tu konča.

Pričakovano zaporedje je **D → A → E → B**. Kartici C in F ostaneta zunaj izbora. Anki pri vsaki kartici, ki jo vzame v izbor, upošteva omejitve njenega kompleta in nadrejenih kompletov. [Koda za izbor kartic v izdani različici](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs)

Omejitev dveh kartic za `02 Second` je zgornja meja. Pri izboru po kompletih ta podkomplet prispeva samo eno kartico, ker je `01 First` že zasedel tri od štirih razpoložljivih mest. Pri izboru po naraščajočem položaju v tem primeru zaradi konkretnih položajev prideta v izbor po dve kartici iz vsakega podkompleta. Pri drugačnih položajih je lahko razporeditev drugačna.

## Kaj se spremeni, če v izbor pride vseh šest kartic?

Pri drugi primerjavi na papirju nastavite omejitev nadrejenega kompleta na **6**, `01 First` na **3** in `02 Second` na **3**. Obdržite razvrščanje **Po vrstnem redu izbora**.

| Nastavitev izbora | Omejitve za nadrejeni komplet / 01 First / 02 Second | Pričakovano zaporedje prvega prikaza |
| --- | --- | --- |
| Po kompletih | 6 / 3 / 3 | A → B → C → D → E → F |
| Po naraščajočem položaju | 6 / 3 / 3 | D → A → E → B → F → C |

Pri obeh nastavitvah pride v izbor vseh šest kartic. Razlikuje se samo zaporedje. Če bi na šest dvignili le omejitev nadrejenega kompleta, pri `02 Second` pa obdržali omejitev dveh kartic, bi jih v izbor prišlo pet. Kartica F bi še vedno ostala zunaj. Višje omejitve veljajo samo za ta izračun na papirju.

## Razvrščanje ne more vrniti izpuščene kartice

Vrnite se na prvotne omejitve **4 / 3 / 2** in samo pri nastavitvi **Vrstni red razvrščanja novih kartic** izberite **Naključno**.

| Nastavitev izbora | Kartice, ki jih naključno razvrščanje lahko premeša | Kartice, ki jih ne more dodati |
| --- | --- | --- |
| Po kompletih | A, B, C, D | E, F |
| Po naraščajočem položaju | D, A, E, B | C, F |

Anki premeša vrstni red prikaza, izbrane kartice pa ostanejo iste. Iz tabele ne morete napovedati konkretnega naključnega zaporedja. Koda za razvrščanje preuredi kartice, ki jih je Anki že izbral. [Koda za razvrščanje v izdani različici](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs)

Tudi možnost **Po tipu kartice, nato po vrstnem redu izbora** (**Card type, then order gathered**) razvrsti že izbrane kartice. Vseh šest kartic iz osnovnih zapiskov ima isto številko tipa kartice, zato ta nastavitev v našem primeru ohrani vrstni red izbora.

Za ločen primer razvrščanja vzemimo štiri kartice iz zapiskov z več predlogami. Anki jih je že izbral v zaporedju **W (tip 2), X (tip 1), Y (tip 2), Z (tip 1)**. Razvrščanje po tipu kartice da zaporedje **X → Z → W → Y**. Najprej pridejo kartice tipa 1, znotraj vsakega tipa pa se ohrani vrstni red izbora. Primer se začne po izboru, zato iz njega ne morete sklepati, katere kartice iz istega zapiska bi prišle v izbor pri vaših nastavitvah začasnega skrivanja.

Številka označuje položaj predloge kartice znotraj tipa zapiska. Od predloge je odvisno, ali kartica preverja prepoznavanje ali tvorjenje odgovora. Preden sklepate, da bodo pri razvrščanju po tipu kartice vsa vprašanja v osnovni smeri na začetku, poglejte, kako so vprašanja zastavljena.

## Pred spreminjanjem položajev jih preverite v brskalniku kartic

Odprite **Brskanje** (**Browse**), izberite način **Kartice** (**Cards**) in poiščite kartice v kompletu in njegovih podkompletih. Za naš primer uporabite to iskanje.

```text
deck:OrderLab is:new
```

V meniju glave tabele vklopite stolpce **Vprašanje** (**Question**), **Kartica** (**Card**), **Komplet** (**Deck**), **Rok** (**Due**) in **Ustvarjeno** (**Created**). Pri novi kartici **Rok** kaže njen položaj v čakalni vrsti, **Ustvarjeno** pa, kdaj je nastal njen zapisek. **Polje za razvrščanje** (**Sort Field**) prikazuje vsebino polja zapiska, določenega za razvrščanje. Ko tabelo razvrstite po stolpcu, se spremeni le njen prikaz. Shranjeni položaji in nastavitev izbora za učenje ostanejo enaki. [Opis stolpcev brskalnika v angleškem priročniku za Anki](https://docs.ankiweb.net/manual/browsing#columns)

Iskanje `is:new` lahko vrne tudi nove kartice, ki so izključene iz učenja ali začasno skrite. Njihove vrednosti v stolpcu **Rok** so v oklepajih. Ožje iskanje izloči te kartice in tiste, ki so trenutno v filtriranih kompletih.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Če ime kompleta vsebuje presledke, ga vpišite v narekovajih, denimo `deck:"My Deck"`. Omejitve in samodejno začasno skrivanje kartic iz istega zapiska lahko izbor še zožijo, zato zadetki sami ne napovejo današnje čakalne vrste. [Iskanje po stanju kartice v angleškem priročniku](https://docs.ankiweb.net/manual/searching#card-state) · [Iskanje po kompletih v angleškem priročniku](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) · [Vodnik po začasnem skrivanju in izključitvi kartic iz učenja v angleščini](/blog/anki-bury-vs-suspend/)

Če položaji že ustrezajo želenemu vrstnemu redu, jih pustite pri miru. Če jih je treba spremeniti, zapišite stare položaje, označite le manjšo skupino novih kartic, ki jih želite premakniti, in izberite **Kartice → Spremeni položaj** (**Cards → Reposition**). Pred potrditvijo preverite pogovorno okno. Možnost **Zamakni položaje obstoječih kartic** (**Shift position of existing cards**) lahko spremeni tudi položaje neoznačenih kartic z višjimi številkami. Brez zamika se lahko novi položaji prekrivajo z obstoječimi. Če imata kartici isti položaj, iz te številke ne morete razbrati, katera se bo prikazala prej. [Opis ukaza za spreminjanje položajev v angleškem priročniku](https://docs.ankiweb.net/manual/browsing#cards)

Nastavitve izbora in razvrščanja lahko spremenite brez brisanja zgodovine učenja ali ponavljanja. Pri iskanju vzroka se osredotočite na položaje novih kartic in vrstni red prikaza.

## Preverite izbrani komplet in koliko mest je danes še na voljo

Če v prvotnem primeru neposredno izberete `OrderLab::02 Second`, so kandidati samo D, E in F. Pri omejitvi dveh kartic, izboru **Po naraščajočem položaju** in razvrščanju **Po vrstnem redu izbora** pričakujte **D → E**. V nadrejenem kompletu so še vsa štiri mesta, zato sta za ti dve kartici na voljo tudi, če veljajo omejitve nadrejenih kompletov. Če izberete nadrejeni komplet z izborom **Po kompletih** in omejitvami **4 / 3 / 2**, dobite **A → B → C → D**.

Ko začnete sejo iz kompleta `OrderLab`, vrstni red prikaza določa njegova nastavitev, tudi če ste spremenili nastavitev podkompleta `02 Second`. Izbrani komplet določa vrstni red prikaza in skupno zgornjo mejo, hkrati pa veljajo ustrezne omejitve podkompletov. Možnost **Upoštevaj omejitve od vrha hierarhije** (**Limits start from top**) določa, ali pri neposrednem učenju iz podkompleta veljajo tudi omejitve njegovih nadrejenih kompletov. [Pravila za podkomplete v angleškem priročniku](https://docs.ankiweb.net/manual/deck-options#subdecks) · [Nastavitev omejitev nadrejenih kompletov v angleškem priročniku](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top)

Preverite tudi omejitve ponavljanja. Privzeto omejitev ponavljanja vpliva tudi na število novih kartic. To lahko spremenite z možnostjo **Nove kartice prezrejo omejitev ponavljanja** (**New cards ignore review limit**). Ta možnost in možnost **Upoštevaj omejitve od vrha hierarhije** veljata za celotno zbirko. Zapišite si obe nastavitvi, preden iz omejitve za nove kartice sklepate, da je danes na voljo še več kartic. [Vmesnik za dnevne omejitve v izdani različici](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte)

V brskalniku kartic uporabite **Predogled** (**Preview**), da si ogledate vprašanja brez odgovarjanja. Ob naslednji običajni učni seji izpolnite spodnjo tabelo.

| Kaj zabeležiti | Kaj s tem preverite |
| --- | --- |
| Komplet, ki ste ga kliknili za učenje, njegovo prednastavitev ter nastavitvi izbora in razvrščanja | Kateri vrstni red prikaza velja za sejo? |
| Pričakovane kartice in njihove shranjene položaje | Je težava v izboru ali v zaporedju? |
| Omejitve novih kartic in ponavljanja, posebne omejitve za ta komplet ali samo za danes ter koliko kartic ste danes že obravnavali | Koliko mest je še na voljo? |
| Omejitve nadrejenih kompletov in obe nastavitvi omejitev, ki veljata za celotno zbirko | Katere dodatne omejitve veljajo? |
| Začasno skrite kartice, kartice, izključene iz učenja, kartice v filtriranih kompletih in kartice iz istih zapiskov | Katere od navidezno razpoložljivih kartic lahko odpadejo? |
| Opaženo zaporedje prvih prikazov, ločeno od ponovnih prikazov v fazi učenja | Ali se zaporedje novih kartic ujema z napovedjo? |

Ko odgovorite na novo kartico, se lahko med naslednjimi prikazi pojavijo ponovitve iz faze učenja. Nastavitev **Vrstni red novih kartic in kartic za ponavljanje** (**New/Review Order**) določa, ali se nove kartice prikažejo pred karticami za ponavljanje, za njimi ali med njimi. Izbor in razvrščanje novih kartic še vedno določata njuni nastavitvi. Pri sestavljanju čakalne vrste Anki združi te skupine, potem ko razvrsti nove kartice. [Koda za sestavljanje čakalne vrste v izdani različici](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs)

Preverjanje je končano, ko se pričakovani izbor in zaporedje prvih prikazov ujemata s tem, kar vidite. Če se še vedno razlikujeta, za natančnejše iskanje vzroka zabeležite položaje, nastavitve, izbrani komplet, različico Ankija, opaženo zaporedje in dodatke, ki bi lahko vplivali nanj. Če želite določeno temo samo še enkrat ponoviti, uporabite ločen postopek s filtriranim kompletom. [Postopek za vajo s filtriranim kompletom v angleščini](/blog/anki-filtered-decks-without-rescheduling/)
