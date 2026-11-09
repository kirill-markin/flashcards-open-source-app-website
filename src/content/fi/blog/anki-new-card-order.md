---
title: "Uusien korttien järjestys Ankissa – kerää kortit, lajittele ne ja tarkista jono"
description: "Katso kuuden kortin esimerkistä, miten Anki kerää ja lajittelee uudet kortit. Tarkista alipakkojen rajat, korttien jonopaikat ja opiskeluun valittu pakka."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "uusien korttien järjestys Ankissa"
  - "Anki uusien korttien keräysjärjestys"
  - "Anki uusien korttien lajittelujärjestys"
  - "Anki nouseva sijaintijärjestys"
  - "Anki kortit väärässä järjestyksessä"
---

Ankissa uusi kortti, jonka jonopaikka on 10, voi tulla vastaan vasta jonopaikalla 60 olevan kortin jälkeen. Kun opiskelet yläpakkaa ja keräysasetuksena on **Pakoittain (Deck)** ja lajitteluasetuksena **Keräysjärjestyksessä (Order gathered)**, Anki voi kerätä kortit ensin aakkosissa aiemmasta alipakasta ja siirtyä vasta sitten alipakkaan, jossa jonopaikan 10 kortti on. Luontipäivän mukaan lajittelu korttiselaimessa vaikuttaa vain selaimen näkymään.

Uusien korttien järjestys muodostuu kahdessa vaiheessa. **Keräys** ratkaisee, mitkä kortit mahtuvat päivän rajoihin. **Lajittelu** määrää, missä järjestyksessä ne näytetään. Selvitä ensin, päätyvätkö jonoon väärät kortit vai tulevatko oikeat kortit vastaan odottamattomassa järjestyksessä.

Ohje koskee tavallisia pakkoja Ankin työpöytäsovelluksessa. Kuuden kortin esimerkki on paperilla tehty laskelma, joka perustuu käyttöohjeeseen ja julkaistuun [Anki-versioon 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3). Laskelma tarkistettiin 6. lokakuuta 2026 ilman käytännön testiä sovelluksessa.

![Mies pitää neljättä vinyylilevyä telineen tyhjän lokeron yllä kolmen levyn vieressä. Hänen takanaan on kaksi laatikollista levyjä, jotka jäivät valitsematta.](/blog/anki-new-card-order.png)

## Valitse haluamasi järjestys

Avaa sen pakan **Asetukset (Options)**, jonka valitset opiskeluun, ja etsi kohta **Esitysjärjestys (Display Order)**. Kun aloitat opiskelun yläpakasta, sen esitysjärjestysasetukset koskevat koko opiskelukertaa, myös alipakkojen kortteja.

| Haluttu tulos | Uusien korttien keräysjärjestys (New Card Gather Order) | Uusien korttien lajittelujärjestys (New Card Sort Order) |
| --- | --- | --- |
| Etene pienimmästä jonopaikasta suurimpaan valitussa pakassa ja sen alipakoissa | Nouseva sijaintijärjestys (Ascending position) | Keräysjärjestyksessä |
| Käy alipakat läpi aakkosjärjestyksessä ja etene kussakin pakassa jonopaikan mukaan | Pakoittain | Keräysjärjestyksessä |
| Säilytä samat kortit ja sekoita niiden esitysjärjestys | Haluttu keräysasetus | Satunnainen (Random) |

Yhdistelmät perustuvat Ankin englanninkielisen käyttöohjeen kuvauksiin [keräysjärjestyksestä](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) ja [lajittelujärjestyksestä](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order). **Nouseva sijaintijärjestys** seuraa uusille korteille tallennettuja jonopaikkoja. Luontipäivien mukainen järjestys voi olla toinen, sillä korttien lisäysjärjestys ja jonopaikkojen muuttaminen käsin vaikuttavat tallennettuihin paikkoihin.

Tarkista ennen muutoksia, mikä asetusprofiili pakalla on ja mitkä muut pakat käyttävät sitä. Esitysjärjestysasetukset kuuluvat profiiliin. Jos haluat muuttaa vain tämän pakan asetuksia, anna sille ensin oma profiili englanninkielisen [pakkakohtaisen asetusprofiilin ohjeen](/blog/anki-deck-options-presets/) avulla. Päivärajalle voi asettaa poikkeuksen valitsemalla **Tämä pakka (This deck)** tai **Vain tänään (Today only)**. Esitysjärjestys on yhteinen kaikille samaa profiilia käyttäville pakoille.

## Laske, mitkä neljä korttia pääsevät mukaan

Kuvittele tavallinen `OrderLab`-niminen yläpakka, jossa on kaksi alipakkaa ja vain nämä kuusi korttia. Jokainen kortti on omasta **Perus (Basic)** -tyyppisestä muistiinpanostaan, joka tuottaa yhden kortin. Kaikilla kuudella on siis sama korttityypin numero, eikä yhdelläkään ole samasta muistiinpanosta syntynyttä sisarkorttia.

| Kortti | Pakka | Tallennettu jonopaikka |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Oletetaan, että kaikki kuusi korttia ovat uusia. Yhtäkään ei ole piilotettu (buried) tai poistettu käytöstä (suspended), eikä yksikään ole suodatetussa pakassa. Muita kortteja ei ole, eikä alussa ole vuorossa oppimisvaiheen toistoja tai kertauksia. Tänään ei ole vielä opiskeltu mitään. `OrderLab` on ylimmän tason pakka, ja voimassa olevat kertausrajat jättävät tilaa kaikille kuudelle uudelle kortille.

Valitse opiskeluun **OrderLab**. Sen voimassa oleva uusien korttien raja on **4**. `01 First` -pakan raja on **3** ja `02 Second` -pakan **2**. Tilapäisiä poikkeuksia ei ole. Käytä kummassakin vertailussa lajitteluasetusta **Keräysjärjestyksessä**. Lähde molemmissa laskuissa samasta muuttumattomasta kokoelmasta ja laske tulos paperilla vastaamatta kortteihin vertailujen välissä.

Kun keräysasetuksena on **Pakoittain**, keräys etenee näin.

1. Anki käy alipakat läpi aakkosjärjestyksessä, joten `01 First` tulee ennen `02 Second` -pakkaa.
2. Anki kerää jonopaikan mukaan kortit **A, B, C**. `01 First` on antanut kolme korttia, joten yläpakan rajasta on jäljellä yksi paikka.
3. Anki kerää kortin **D** pakasta `02 Second`. Yläpakan neljän kortin raja tulee täyteen.

Uudet kortit tulevat ensimmäisen kerran vastaan järjestyksessä **A → B → C → D**. E ja F jäävät jonon ulkopuolelle.

Kun keräysasetuksena on **Nouseva sijaintijärjestys**, Anki käy molempien alipakkojen ehdokkaat läpi järjestyksessä **D → A → E → B → F → C**. Neljä ensimmäistä mahtuvat kaikkiin rajoihin. Kummastakin alipakasta tulee kaksi korttia, yhteensä neljä. Keräys päättyy siihen.

Odotettu järjestys on **D → A → E → B**. C ja F jäävät tällä kertaa pois. Julkaistun version [keräyskoodi](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) ottaa pakan ja sen yläpakkojen rajat huomioon sitä mukaa, kun se hyväksyy kortteja jonoon.

`02 Second` -pakan raja sallii enintään kaksi korttia. Pakoittain kerättäessä pakasta tulee vain yksi, koska `01 First` on jo käyttänyt kolme neljästä paikasta. Nousevassa sijaintijärjestyksessä kummastakin pakasta tulee kaksi korttia juuri näiden jonopaikkojen ansiosta. Toisessa kokoelmassa kortit voivat jakautua eri tavalla.

## Ota kaikki kuusi mukaan ja vertaa järjestystä

Anna toisessa paperilla tehtävässä vertailussa tilaa kaikille kuudelle kortille. Aseta yläpakan rajaksi **6**, `01 First` -pakan rajaksi **3** ja `02 Second` -pakan rajaksi **3**. Pidä lajitteluasetuksena **Keräysjärjestyksessä**.

| Keräysasetus | Rajat (yläpakka / 01 First / 02 Second) | Odotettu järjestys ensimmäisellä esityskerralla |
| --- | --- | --- |
| Pakoittain | 6 / 3 / 3 | A → B → C → D → E → F |
| Nouseva sijaintijärjestys | 6 / 3 / 3 | D → A → E → B → F → C |

Molemmat asetukset keräävät kaikki kuusi korttia. Ero näkyy pelkästään niiden järjestyksessä. Jos nostaisit vain yläpakan rajan kuuteen ja pitäisit `02 Second` -pakan rajan kahdessa, mukaan mahtuisi viisi korttia. F jäisi edelleen pois. Suuremmat rajat havainnollistavat tässä vain sitä, mitä järjestykselle tapahtuu, kun kaikki kortit mahtuvat mukaan.

## Lajittelu koskee vain mukaan päässeitä kortteja

Palaa alkuperäisiin rajoihin **4 / 3 / 2** ja vaihda vain **Uusien korttien lajittelujärjestys** asetukseen **Satunnainen**.

| Keräysasetus | Kortit, joiden järjestys sekoitetaan | Kortit, jotka jäävät ulkopuolelle |
| --- | --- | --- |
| Pakoittain | A, B, C, D | E, F |
| Nouseva sijaintijärjestys | D, A, E, B | C, F |

Anki sekoittaa esitysjärjestyksen kummankin joukon sisällä. Taulukosta näkee, mitkä kortit sekoitetaan, mutta niiden satunnaista järjestystä ei voi ennustaa. Julkaistun version [lajittelukoodi](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) järjestää jo kerätyt kortit uudelleen.

Myös **Ensin korttityypin mukaan, sitten keräysjärjestyksessä (Card type, then order gathered)** käsittelee vain jo kerättyjä kortteja. Kaikilla kuudella Perus-tyyppisestä muistiinpanosta tehdyllä kortilla on sama korttityypin numero, joten asetus säilyttää tässä niiden keräysjärjestyksen.

Otetaan erillinen esimerkki lajittelusta. Oletetaan, että useita korttipohjia käyttävistä muistiinpanoista on jo kerätty neljä korttia järjestyksessä **W (tyyppi 2), X (tyyppi 1), Y (tyyppi 2), Z (tyyppi 1)**. Korttityypin mukaan lajiteltuna järjestys on **X → Z → W → Y**. Tyypin 1 kortit tulevat ensin, ja kummankin tyypin sisällä keräysjärjestys säilyy. Esimerkki alkaa keräyksen jälkeen, joten siitä ei voi päätellä, mitkä sisarkortit pääsisivät mukaan omilla piilotusasetuksillasi.

Numero kertoo korttipohjan paikan muistiinpanotyypin pohjien järjestyksessä. Korttipohjat määräävät, harjoitellaanko kortilla tunnistamista vai tuottamista. Tarkista kysymykset, jos haluat varmistaa, että korttityypin mukainen lajittelu näyttää ensin kaikki kortit, jotka kysyvät asian alkuperäiseen suuntaan.

## Tarkista jonopaikat selaimessa ennen kuin muutat niitä

Avaa **Selaa (Browse)**, valitse **Kortit (Cards)** -tila ja hae valitun pakan ja sen alipakkojen kortit. Käytä esimerkissä tätä hakua.

```text
deck:OrderLab is:new
```

Valitse sarakeotsikon valikosta näkyviin **Kysymys (Question)**, **Kortti (Card)**, **Pakka (Deck)**, **Erääntyy (Due)** ja **Luotu (Created)**. Uuden kortin **Erääntyy**-sarake näyttää sen jonopaikan. **Luotu** kertoo, milloin kortin muistiinpano luotiin. **Lajittelukenttä (Sort Field)** näyttää lajittelua varten valitun muistiinpanokentän sisällön. Sarakkeen mukaan lajittelu vaikuttaa vain selaimen taulukon järjestykseen. Ankin englanninkielinen käyttöohje kuvaa näiden arvojen erot kohdassa [selaimen sarakkeet](https://docs.ankiweb.net/manual/browsing#columns).

Haku `is:new` voi näyttää myös piilotettuja tai käytöstä poistettuja uusia kortteja. Niiden **Erääntyy**-arvot näkyvät sulkeissa. Seuraava haku rajaa pois ne sekä kortit, jotka ovat parhaillaan suodatetuissa pakoissa.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Ankin englanninkielinen käyttöohje kuvaa [kortin tilaan perustuvat haut](https://docs.ankiweb.net/manual/searching#card-state) ja [pakkahaut](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes). Jos pakan nimessä on välilyöntejä, laita nimi lainausmerkkeihin, kuten haussa `deck:"My Deck"`. Hakutulos näyttää mahdolliset ehdokkaat. Päivän rajat ja sisarkorttien automaattinen piilotus voivat vielä karsia jonoon pääseviä kortteja. Englanninkielinen [opas korttien piilottamiseen ja käytöstä poistamiseen](/blog/anki-bury-vs-suspend/) kertoo, milloin kortit jäävät pois opiskelusta.

Jos jonopaikat vastaavat jo haluamaasi järjestystä, jätä ne ennalleen. Jos niitä pitää muuttaa, kirjaa vanhat paikat muistiin, valitse pieni joukko uusia kortteja ja käytä toimintoa **Kortit → Muuta jonopaikkaa (Cards → Reposition)**. Tarkista ensin valintaikkunan asetukset. **Siirrä muiden korttien jonopaikkoja (Shift position of existing cards)** voi siirtää myös valinnan ulkopuolisia kortteja, joilla on suurempi paikkanumero. Ilman siirtoa uusille ja aiemmille korteille voi osua sama paikkanumero. Silloin esitysjärjestystä ei voi päätellä pelkästä jonopaikasta. Katso Ankin englanninkielinen [ohje jonopaikkojen muuttamiseen](https://docs.ankiweb.net/manual/browsing#cards).

Keräys- ja lajitteluasetuksia voi muuttaa oppimis- ja kertaushistoriaa tyhjentämättä. Keskity tässä selvityksessä uusien korttien jonopaikkoihin ja esitysjärjestykseen.

## Tarkista valittu pakka ja paljonko päivän rajasta on jäljellä

Jos valitset alkuperäisessä esimerkissä suoraan pakan `OrderLab::02 Second`, ehdokkaita ovat vain D, E ja F. Kun raja on kaksi korttia, keräysasetuksena on **Nouseva sijaintijärjestys** ja lajitteluasetuksena **Keräysjärjestyksessä**, odotettu järjestys on **D → E**. Yläpakan neljästä paikasta ei ole käytetty yhtään, joten molemmat kortit mahtuvat mukaan, vaikka yläpakan raja olisi voimassa. Kun taas aloitat yläpakasta asetuksella **Pakoittain** ja rajoilla **4 / 3 / 2**, saat järjestyksen **A → B → C → D**.

Kun aloitat opiskelun `OrderLab`-pakasta, esitysjärjestys tulee sen asetuksista. Opiskeluun valittu pakka määrää myös kokonaisrajan, ja samalla Anki soveltaa voimassa olevia alipakkojen rajoja. **Sovella rajoja ylimmästä pakasta alkaen (Limits start from top)** määrää, sovelletaanko ylempien pakkojen rajoja myös silloin, kun aloitat suoraan alipakasta. Ankin englanninkielinen käyttöohje kuvaa [alipakkojen säännöt](https://docs.ankiweb.net/manual/deck-options#subdecks) ja [ylempien pakkojen rajoja koskevan asetuksen](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top).

Tarkista myös kertausrajat. Oletuksena kertausraja rajoittaa myös uusien korttien määrää. **Kertausraja ei koske uusia kortteja (New cards ignore review limit)** poistaa tämän rajoituksen. Molemmat kytkimet koskevat koko kokoelmaa. Ne näkyvät julkaistun version [päivärajojen käyttöliittymässä](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte). Kirjaa, ovatko ne päällä, ennen kuin päättelet uusien korttien rajasta, montako uutta korttia voit vielä saada tänään.

Selaimen **Esikatselussa (Preview)** voit tarkistaa kysymykset vastaamatta niihin. Käytä seuraavalla tavallisella opiskelukerralla tätä tarkistuslistaa.

| Kirjaa | Mitä tieto kertoo |
| --- | --- |
| Opiskeluun valittu pakka sekä sen asetusprofiili, keräysasetus ja lajitteluasetus | Mitkä esitysjärjestysasetukset ovat voimassa? |
| Odotetut kortit ja niiden tallennetut jonopaikat | Onko ongelma korttien valinnassa vai järjestyksessä? |
| Uusien korttien rajat ja kertausrajat, pakka- ja päiväkohtaiset poikkeukset sekä tänään jo opiskellut kortit | Paljonko päivän rajoista on jäljellä? |
| Ylempien pakkojen rajat ja koko kokoelmaa koskevat kaksi rajakytkintä | Mitkä muut rajat ovat voimassa? |
| Piilotetut ja käytöstä poistetut kortit, suodatetuissa pakoissa olevat kortit sekä sisarkortit | Mitkä ehdokkaat voivat jäädä jonon ulkopuolelle? |
| Järjestys, jossa uudet kortit tulivat vastaan ensimmäisen kerran, erillään oppimisvaiheen toistoista | Vastaako uusien korttien järjestys ennustetta? |

Kun vastaat uuteen korttiin, sen oppimisvaiheen toistot voivat tulla väliin saman opiskelukerran aikana. **Uusien korttien ja kertausten järjestys (New/Review Order)** määrää, tulevatko uudet kortit ennen kertauksia, niiden jälkeen vai niiden lomassa. Keräys- ja lajitteluasetukset määräävät edelleen uusien korttien joukon ja niiden keskinäisen järjestyksen. Julkaistun version [jononmuodostuskoodi](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) yhdistää korttiryhmät uusien korttien lajittelun jälkeen.

Selvitys on valmis, kun laskemasi korttijoukko ja sen esitysjärjestys vastaavat havaintojasi. Jos tulos poikkeaa edelleen odotetusta, kirjaa tarkempaa selvitystä varten jonopaikat, asetukset, valittu pakka, Ankin versio, havaittu järjestys ja asiaan liittyvät lisäosat. Jos haluat harjoitella tiettyä aihetta vielä kerran, katso erillinen englanninkielinen [ohje harjoitteluun suodatetulla pakalla](/blog/anki-filtered-decks-without-rescheduling/).
