---
title: "Parhaat FSRS-asetukset Ankiin vuonna 2026: muistamistavoite, oppimisvaiheet ja kertausmäärä"
description: "Valitse Anki 26.08:n FSRS-6-asetukset: muistamistavoite, oppimisvaiheet, optimointi ja uudelleenajoitus. Pidä kertausmäärä hallinnassa."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS-asetukset"
  - "parhaat FSRS-asetukset"
  - "Ankin FSRS-asetukset"
  - "FSRS muistamistavoite"
  - "FSRS oppimisvaiheet"
  - "FSRS-simulaattori"
  - "FSRS-parametrien optimointi"
  - "FSRS-6"
---

Ankin muistamistavoitteen nostaminen 90 prosentista 95 prosenttiin kuulostaa pieneltä muutokselta. Työmäärä ei kuitenkaan kasva vain viidellä prosentilla. FSRS:n on lyhennettävä kertausvälejä tavoitteen noustessa, ja pitkään käytössä olleen kokoelman kertausjono voi kasvaa huomattavasti. Jos otat samalla käyttöön **Reschedule cards on change** -asetuksen, osa lisätyöstä voi tulla eteen heti.

Parhaat FSRS-asetukset eivät siis ole kopioitava parametririvi. Ne syntyvät päätöksistä: määritä työmäärä, josta selviydyt säännöllisesti, valitse siihen sopiva muistamistavoite, sovita malli omaan kertaushistoriaasi ja jätä nykyiset eräpäivät ennalleen, ellet tarkoituksella halua laskea niitä uudelleen.

Alla kuvatut asetusten nimet ja toiminta vastaavat [Anki 26.08 -julkaisua](https://github.com/ankitects/anki/releases/tag/26.08) ja sen FSRS-6-asetuksia. Jos haluat ensin ymmärtää mallin, lue [Mikä on FSRS?](/blog/what-is-fsrs/). Jos vasta valitset ajoitusalgoritmia, aloita [FSRS:n ja SM-2:n vertailusta](/blog/fsrs-vs-sm-2/).

> **Sidonnaisuus:** Olen Kirill Markin ja kehitän [Nibomoa](/fi/features/). Anki tarjoaa henkilökohtaisen parametrien sovituksen ja kokeellisia työmääräsimulaattoreita, joita Nibomossa ei tällä hetkellä ole. Lopun vertailussa nämä erot on tuotu selvästi esiin.

**Tiedot tarkistettu:** 8. syyskuuta 2026.

![Kanavasulun hoitaja testaa veden virtausta pienoismallissa ennen täysikokoisen sulun säätämistä](/blog/fsrs-settings-v2.png)

## Lyhyt vastaus: aloita tästä

Useimmille Ankin käyttäjille nämä ovat turvallisia lähtökohtia, eivät kaikille sopivia asetuksia:

| Asetus tai tapa | Turvallinen lähtökohta | Miksi |
| --- | --- | --- |
| Muistamistavoite (Desired retention) | `0.90` | Ankin oletusarvo tasapainottaa muistamisen ja kertausmäärän. |
| FSRS-parametrit | Käytä **Optimize Current Preset** -toimintoa; älä liitä painokertoimia muualta tai muokkaa niitä käsin | Optimoija sovittaa mallin kertaushistoriaasi. |
| Optimointitiheys | Enintään kerran kuussa; muutaman kuukauden välein yleensä riittää | Anki ei suosittele tiheää optimointia. |
| Oppimisvaiheet | Pidä vaiheiden määrä pienenä ja suorita ne saman päivän aikana | Pitkät vaiheketjut viivästyttävät malliin perustuvan ajoituksen alkamista. |
| Uudelleenoppimisen vaiheet | Pidä vaiheiden määrä pienenä ja kertausvälit alle vuorokauden mittaisina | Sama raja pätee epäonnistuneen kertauksen jälkeen. |
| Reschedule cards on change | Pois käytöstä | Uudet asetukset voivat tulla voimaan tulevien kertausten kautta ilman tämän päivän jonon uudelleenlaskentaa. |
| Enimmäiskertausväli | Säilytä 100 vuoden oletusarvo | Lyhyempi yläraja tuo hyvin opitut kortit kertaukseen useammin. |
| Uusia kortteja päivässä | Valitse määrä, jonka aiheuttamasta työmäärästä selviydyt säännöllisesti | Jokainen uusi kortti tuo oppimistyötä nyt ja kertauksia myöhemmin. |
| Again ja Hard | Again tarkoittaa epäonnistunutta muistamista; Hard vaikeaa mutta onnistunutta muistamista | Väärät arviot tuottavat mallille virheellistä historiaa. |

Jos kertaukset pysyvät hallinnassa ja asetuksesi ovat jo lähellä näitä, korjattavaa ei välttämättä ole. Asetusten ylläpito ei ole opiskelua.

## Pidä kolme päätöstä erillään

Muistamistavoite, FSRS-parametrit ja päivittäinen työmäärä sekoittuvat usein yhdeksi asiaksi. Ne ohjaavat eri asioita:

- **Muistamistavoite** kertoo, kuinka todennäköisesti haluat muistaa. Valitset sen tavoitteidesi ja käytettävissä olevan opiskeluajan perusteella.
- **FSRS-parametrit** sovittavat muistimallin kertaushistoriaan. Ankin optimoija laskee ne.
- **Uusien korttien ja kertausten rajat** säätelevät järjestelmään tulevan aineiston määrää ja sitä, kuinka paljon erääntynyttä työtä Anki voi näyttää päivittäin.

Tämä erottelu helpottaa ongelmien selvittämistä. Pitkä jono ei automaattisesti tarkoita, että parametrit ovat väärät. Tärkeä pakka ei automaattisesti tarvitse omaa asetuskokonaisuutta parametreille. Muistamistavoitteen laskeminenkaan ei auta, jos uusia kortteja tulee jatkuvasti enemmän kuin ehdit opiskella.

## Valitse muistamistavoite työmäärän perusteella

Muistamistavoite kertoo FSRS:lle, kuinka suurella todennäköisyydellä haluat muistaa kertauskortin vastauksen sen erääntyessä. Arvolla `0.90` FSRS ajoittaa kertauksen kohtaan, jossa ennustettu muistamisen todennäköisyys on noin 90 %. Tämä on mallin tavoite, ei takuu siitä, että jokaisella opiskelukerralla tai jokaisessa kokeessa täsmälleen 90 % vastauksista olisi oikein.

Muistamisen ja työmäärän suhde muuttuu molempiin suuntiin:

- Kun nostat muistamistavoitetta, kertausvälit lyhenevät ja kertaukset lisääntyvät.
- Kun lasket sitä, kertausvälit pitenevät ja epäonnistumiset lisääntyvät.
- Jos lasket tavoitteen liian alas, unohtamisesta seuraava uudelleenoppiminen voi viedä osan ajasta, jonka toivoit säästäväsi.

Ankin oletusarvo on 90 %. Sen [muistamistavoitetta koskeva ohje](https://docs.ankiweb.net/deck-options.html#desired-retention) varoittaa, että työmäärä kasvaa nopeasti tavoitteen lähestyessä 100 prosenttia, ja suosittelee pysymään alle 97 prosentissa. Virallinen [selitys parhaasta muistamistavoitteesta](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) käsittelee käyrän toista päätä: myös hyvin matala tavoite voi olla tehoton, koska unohtuneet kortit vaativat enemmän työtä.

Aloita arvosta `0.90` ja muuta sitä vasta tarkistettuasi työmäärän. Korkeampi tavoite voi olla perusteltu aineistolle, jonka unohtamisella on todellinen hinta. Matalampi tavoite voi sopia tilanteeseen, jossa kertaukset vievät aikaa arvokkaammalta opiskelulta. Kumpikaan muutos ei korjaa epäselviä kortteja, epärehellisiä arvioita tai liian suurta uusien korttien määrää.

### Pakan muistamistavoite ja asetuskokonaisuuden parametrit koskevat eri asioita

Anki 26.08:ssa **Desired retention** -asetuksen voi kohdistaa kahdella tavalla: **Shared Preset** eli yhteinen asetuskokonaisuus tai **This deck** eli tämä pakka. Voit siis käyttää samankaltaisille pakoille yhteisiä parametreja ja antaa silti yksittäiselle pakalle oman muistamistavoitteen.

Käytä pakkakohtaista tavoitetta, kun unohtamisen seuraukset eroavat. Ammattipätevyyskokeeseen valmistavalle pakalle voi olla perusteltua asettaa korkeampi tavoite kuin vähemmän tärkeälle taustatietopakalle, vaikka molemmille käytettäisiin samaa sovitettua mallia.

FSRS-parametrit eivät muutu pakkakohtaisiksi, kun valitset **This deck**. Oletuksena Anki sovittaa parametrit kaikkien nykyistä asetuskokonaisuutta käyttävien pakkojen kertaushistoriasta. Jos pakkaryhmien koettu vaikeus eroaa huomattavasti, erilliset asetuskokonaisuudet ovat tuettu tapa sovittaa ne erikseen.

## Help Me Decide ja Simulator vastaavat eri kysymyksiin

Anki 26.08:ssa on kaksi erillistä kokeellista työkalua:

- **Help Me Decide (Experimental)** näyttää henkilökohtaisen käyrän muistamistavoitteen ja työmäärän suhteesta. Sen avulla voit kysyä: ”Mikä muistamistavoite sopii siihen kertausmäärään tai opiskeluaikaan, johon pystyn säännöllisesti sitoutumaan?”
- **FSRS Simulator (Experimental)** arvioi, miten tietyt asetukset voivat vaikuttaa ajan kuluessa. Sen avulla voit vertailla muutoksia muistamistavoitteeseen, uusien korttien määrään, kertausrajoihin ja enimmäiskertausväliin.

[FSRS-simulaattorin ohjeessa](https://docs.ankiweb.net/deck-options.html#the-simulator) luetellaan sen keskeiset syötteet:

- simuloitavien päivien määrä
- simuloitavien uusien lisäkorttien määrä
- uusia kortteja päivässä
- kertausten enimmäismäärä päivässä
- enimmäiskertausväli
- muistamistavoite ja asetuskokonaisuuden FSRS-parametrit

Simulaatio käyttää myös asetuskokonaisuuteen kuuluvien korttien todellisia muistitiloja. Siksi se on pitkään käytössä olleelle kokoelmalle hyödyllisempi kuin tämän päivän erääntyneiden korttien määrän kertominen yleisellä prosenttiluvulla.

Aja kolme skenaariota ennen käytössä olevien asetusten muuttamista:

1. Nykyinen muistamistavoite ja uusien korttien määrä.
2. Harkitsemasi muistamistavoite.
3. Sama tavoite mutta vähemmän uusia kortteja päivässä.

Kolmannella ajolla kokeilet tavallista vaihtoehtoa: säilytä muistamistavoite ja hidasta uuden aineiston lisäämistä. Jos ennustettu työmäärä on näin hallittavissa, sinun ei tarvitse hyväksyä suurempaa unohtamista vain jonon keventämiseksi. Aihetta käsittelee tarkemmin opas [Kuinka monta uutta opiskelukorttia päivässä?](/blog/how-many-new-flashcards-per-day/).

Molemmat työkalut tuottavat arvioita. Väliin jääneet päivät, muokatut kortit, uusi aineisto ja muuttuvat arviointitavat voivat saada todellisen työmäärän poikkeamaan kuvaajasta. Valitse vertailun avulla suunta; älä pidä sitä lupauksena täsmällisestä jonosta kuukausien päähän.

Vanhemmissa oppaissa saatetaan mainita **Compute Minimum Recommended Retention** eli CMRR. Anki poisti toiminnon versiossa 25.07. Se ei kuulu nykyiseen muistamistavoitteen valintatapaan.

## Optimoi FSRS-parametrit oman historiasi perusteella

Muistamistavoite ilmaisee tavoitteesi. FSRS-parametrit kuvaavat sitä, miten malli sopii kertauksiisi.

Anki 26.08:ssa **Optimize Current Preset** sovittaa aktiivisen asetuskokonaisuuden parametrit. Oletuksena Anki sisällyttää kaikkien sitä käyttävien pakkojen kertaushistorian. Voit rajata hakua, jos sovitukseen pitäisi käyttää suppeampaa joukkoa. **Optimize All Presets** päivittää kaikki asetuskokonaisuudet kerralla.

Älä syötä painokertoimia käsin tai kopioi niitä Redditistä, videosta tai jonkun toisen pakasta. Toisen käyttäjän kortit, kertausajankohdat ja arviointitavat eivät ole sinun historiaasi. Siisti rivi [FSRS-6:n painokertoimia](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) ei ole siirrettävä opiskelustrategia.

Optimoi uudelleen vasta, kun merkittävästi uutta kertaushistoriaa on kertynyt. Ankin käsikirjan mukaan kerran kuukaudessa riittää, kun taas version 26.08 sovelluksen sisäinen ohje sanoo muutaman kuukauden välein riittävän. Käytännön johtopäätös on sama: optimointia ei tarvitse tehdä viikoittain, saati jokaisen opiskelukerran jälkeen.

### Tarkista nykyisen asetuskokonaisuuden sovituksen laatu

Ota **Check health when optimizing (slow)** käyttöön, kun haluat Ankin arvioivan, kuinka hyvin FSRS pystyy mukautumaan nykyisen asetuskokonaisuuden historiaan. Tämä tarkistus suoritetaan **Optimize Current Preset** -toiminnolla, ei **Optimize All Presets** -toiminnolla.

Jos tulos on huono, tutki tiedot ennen painokertoimiin koskemista. [Ankin FSRS-parametriohje](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) nimeää yleisiä syitä: kertauksia on alle muutama sata, epäonnistumisen jälkeen on käytetty Hard-arviota tai Again-painiketta ei ole painettu vastauksen unohtuessa. Jos käyttökelpoista historiaa on vähän, pidä oletusarvot ja optimoi myöhemmin sen sijaan, että lainaisit toisen käyttäjän parametreja.

## Again tarkoittaa epäonnistumista, Hard onnistumista

Tämä tapa on yhtä tärkeä kuin mikä tahansa asetus.

Valitse **Again**, kun et pystynyt tuottamaan vaadittua vastausta tai vastasit väärin. Valitse **Hard** vain, kun muistit oikein mutta vastaaminen vaati huomattavaa ponnistelua tai epäröintiä. Myös Good ja Easy tarkoittavat onnistunutta muistamista.

Jos painat Hard-painiketta välttääksesi Again-vaihtoehdon lyhyen kertausvälin, kirjaat epäonnistumisen onnistumiseksi. FSRS oppii silloin väärästä tapahtumasta. Valitse painike sen perusteella, miten muistit vastauksen. Älä valitse sitä vain siksi, että sen yläpuolella näkyy haluamasi kertausväli.

Epäselvät kortit vaikeuttavat rehellistä arviointia. Jos kysymys pyytää viittä asiaa ja muistat neljä, ajoitusongelma alkoi jo korttieditorissa. Jaa kortti osiin tai kirjoita se uudelleen. Jos unohdat kortin vastauksen kerta toisensa jälkeen, katso [Näin korjaat jatkuvasti unohtuvat opiskelukortit](/blog/how-to-fix-leech-flashcards/).

## Pidä FSRS:n oppimisvaiheet lyhyinä tai jätä ne tarkoituksella tyhjiksi

Oppimis- ja uudelleenoppimisvaiheet ohjaavat lyhyen aikavälin kertauksia ennen tavallista pitkäaikaista ajoitusta. Ne eivät ole toinen muistamistavoite.

Ankin FSRS-ohje suosittelee kahta rajausta:

- jokaisen vaiheen kertausvälin tulee olla alle vuorokauden mittainen, ja vaihe pitää voida suorittaa saman päivän aikana
- saman päivän toistojen määrä tulee pitää pienenä

Pitkät ketjut, kuten `1m 10m 1d 3d`, tuovat vanhan SM-2-tavan FSRS:ään. Vähintään vuorokauden mittaiset vaiheet viivästyttävät malliin perustuvaa ajoitusta ja voivat aiheuttaa hämmentäviä painiketekstejä: esimerkiksi Hard voi näyttää pidempää väliä kuin Good.

Lyhyt sarja, kuten `1m 10m` ja uudelleenoppimisvaihe `10m`, on varovainen lähtökohta, jos se sopii opiskelukertoihisi. Useammat saman päivän toistot eivät automaattisesti ole parempia.

Anki 26.08:ssa kumman tahansa oppimis- tai uudelleenoppimisvaiheiden kentän voi myös jättää tyhjäksi. Kun FSRS on käytössä, tyhjä kenttä antaa vastaavan lyhyen aikavälin ajoituksen FSRS:n päätettäväksi. Ominaisuus on kokeellinen, ja Again-painikkeen kertausväli voi olla vuorokauden mittainen tai pidempi. Säilytä lyhyet käsin määritetyt vaiheet, jos tarvitset ennakoitavan paluun samana päivänä. Tyhjennä kenttä vain, jos hyväksyt tarkoituksella sen, että FSRS valitsee ajankohdan.

## Pidä Reschedule cards on change pois käytöstä, jos haluat asteittaisen siirtymän

Kun **Reschedule cards on change** on oletuksensa mukaisesti pois käytöstä, FSRS:n käyttöönotto tai muistamistavoitteen tai parametrien muuttaminen ei heti muuta nykyisiä eräpäiviä. Uudet asetukset tulevat voimaan korttien tulevissa kertauksissa, joten jono muuttuu vähitellen.

Jos tallennat jonkin näistä FSRS-muutoksista asetuksen ollessa käytössä, eräpäivät lasketaan uudelleen heti. Uudesta tavoitteesta ja korttien tiloista riippuen suuri määrä kortteja voi erääntyä kerralla. Anki myös lisää uudelleenajoitetuille korteille kertausmerkinnät, mikä kasvattaa kokoelman kokoa.

Tämä asetus on hyödyllinen vain, kun todella haluat laskea ajoituksen takautuvasti uudelleen. Jos kokoelmasi on ollut pitkään käytössä:

1. Tee tuore varmuuskopio ja varmista, että osaat kumota muutoksen tai palauttaa kopion.
2. Aja Simulator-simulaatio ehdotetuilla asetuksilla.
3. Valitse yksi asetusmuutos. Älä yhdistä useita kokeiluja.
4. Kun tallennat muutoksen, ota uudelleenajoitus käyttöön vain, jos haluat muuttaa eräpäivät heti ja pystyt hoitamaan siitä syntyvän työmäärän.

Anki suosittelee nimenomaisesti varmuuskopiota, kun siirryt SM-2:sta ja käytät uudelleenajoitusta. Laajempi [opiskelukorttien varmuuskopiointiopas](/blog/how-to-back-up-flashcards/) selittää, miksi palautusmenetelmä on yhtä tärkeä kuin varmuuskopiotiedosto.

## Pidä enimmäiskertausväli pitkänä

Ankin enimmäiskertausvälin oletus on 100 vuotta. Se näyttää oudolta, kunnes muistat sen olevan yläraja, ei lupaus siitä, että jokainen hyvin opittu kortti katoaisi vuosisadaksi.

Ylärajan lyhentäminen tuo hyvin osatut kortit takaisin aiemmin ja kasvattaa työmäärää. Ylärajalla Hard, Good ja Easy voivat kaikki näyttää samaa viivettä, koska mikään niistä ei saa ylittää enimmäisväliä.

Lyhyempi enimmäiskertausväli voi olla perusteltu, jos koe asettaa todellisen aikarajan, aineisto muuttuu usein tai ammattiin liittyvä sääntö edellyttää toistuvaa kertaamista muistiennusteesta riippumatta. Sovita yläraja kalenteriin ja Simulatorin arvioon sen sijaan, että valitsisit pienen luvun huolestuneena. [Näin opiskelet kokeeseen FSRS:n avulla](/blog/how-to-study-for-an-exam-with-fsrs/) käsittelee tätä rajatumpaa tapausta.

Tavallisessa pitkäaikaisessa oppimisessa pidä yläraja pitkänä. Muistamistavoite säätelee jo sitä, milloin ennustettu muistaminen edellyttää kertausta.

## Uusien korttien määrä kuuluu työmäärää koskevaan päätökseen

FSRS voi jakaa kertaukset ajallisesti, mutta se ei tee rajattomasta uusien korttien virrasta kestävää. Jokainen uusi kortti tuo oppimistyötä nyt ja kertaustyötä myöhemmin.

Kun jono käy liian raskaaksi, tarkista nämä ennen muistamistavoitteen laskemista:

- uusien korttien määrä päivässä
- suuret tuonnit tai luodut korttierät
- kertausten enimmäisraja, joka piilottaa jatkuvasti erääntynyttä työtä
- jatkuvasti unohtuvat ja epäselvät kortit, jotka vaativat toistuvia yrityksiä
- väliin jääneet kertauspäivät

Käytä **Additional new cards to simulate** -kenttää, kun tiedät pakan kasvavan. Vain tämänhetkiseen kokoelmaan perustuva ennuste ei kuvaa suuren tuonnin jälkeistä työmäärää.

Jos ennustettu työmäärä on liian suuri, vähennä uusien korttien määrää ja simuloi uudelleen. Näin säilytät muistamistavoitteen ilman, että pyydät ajoitusalgoritmia sallimaan enemmän unohtamista.

## Anki ja Nibomo tarjoavat erilaiset FSRS-asetukset

Molemmat tuotteet käyttävät FSRS-6:ta, mutta Ankin FSRS-asetukset eivät vastaa yksi yhteen Nibomon asetuksia.

| Ominaisuus | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Muistamistavoite | **Shared Preset** tai **This deck** | Säädettävissä työtilakohtaisesti; oletus `0.90` |
| FSRS-parametrit | **Optimize Current Preset** tai **Optimize All Presets** kertaushistorian perusteella | Viralliset FSRS-6:n oletuspainokertoimet on kiinnitetty, eikä käyttäjä voi muuttaa niitä v1:ssä |
| Oppimisvaiheet | Säädettävissä; tyhjän kentän FSRS-ajoitus on kokeellinen | Säädettävissä työtilakohtaisesti; oletus `1m 10m` |
| Uudelleenoppimisvaiheet | Säädettävissä; tyhjän kentän FSRS-ajoitus on kokeellinen | Säädettävissä työtilakohtaisesti; oletus `10m` |
| Enimmäiskertausväli | Oletus 100 vuotta | Oletus 36 500 päivää eli myös 100 vuotta |
| Asetusmuutokset | Oletuksena tuleviin kertauksiin; takautuva uudelleenajoitus on valinnainen | Vain tuleviin kertauksiin; nykyisiä eräpäiviä ei lasketa uudelleen |
| Työmäärätyökalut | **Help Me Decide (Experimental)** ja **FSRS Simulator (Experimental)** | Ei vastaavaa työmääräsimulaattoria v1:ssä |

Nibomo käyttää tavallisia Again-, Hard-, Good- ja Easy-arvioita ja tallentaa korttikohtaisen FSRS-muistitilan. Sen taustapalvelun, iOS:n ja Androidin ajoitusalgoritmit ovat itsenäisiä toteutuksia, joiden toiminta pidetään yhtenevänä. Verkkosovelluksen kertaukset käyttävät taustapalvelun ajoitusta, joten erillistä neljättä toteutusta ei ole.

Nämä rajaukset ja oletukset on kuvattu julkisessa [Nibomon FSRS-ajoituksen määrittelyssä](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Valinta on selkeä: Nibomo tarjoaa käytännölliset työtilakohtaiset FSRS-6-asetukset, kun taas Anki tarjoaa tarkemman kohdistuksen, henkilökohtaisen sovituksen ja simulaation. Jos tarvitset näitä säätömahdollisuuksia, Anki sopii paremmin.

## Turvallisempi etenemistapa pitkään käytössä olleelle kokoelmalle

Jos sinulla on jo kuukausien tai vuosien kertaushistoria, etene tässä järjestyksessä:

1. **Korjaa arviointitapa.** Again tarkoittaa epäonnistunutta muistamista, Hard vaivalloista mutta onnistunutta muistamista.
2. **Optimoi nykyinen asetuskokonaisuus.** Sovita malli omaan historiaasi painokertoimien muokkaamisen tai kopioimisen sijaan.
3. **Tarkista sovituksen laatu tarvittaessa.** Käsittele niukkaa tai epäjohdonmukaista historiaa aineiston ongelmana.
4. **Käytä Help Me Decide -työkalua.** Valitse muistamistavoitteelle sopiva vaihteluväli sen perusteella, mihin kertausmäärään tai opiskeluaikaan pystyt säännöllisesti sitoutumaan.
5. **Aja Simulator-simulaatio.** Vertaa nykyisiä asetuksia, ehdotettua tavoitetta ja pienempää uusien korttien määrää.
6. **Muuta yhtä käytössä olevaa asetusta.** Säädä ensin muistamistavoitetta tai uusien korttien määrää ja seuraa sitten todellista jonoa.
7. **Pidä vaiheet lyhyinä.** Poista vuorokauden mittaiset oppimis- ja uudelleenoppimisketjut. Käytä tyhjiä kenttiä vain kokeiluna.
8. **Pidä enimmäiskertausväli pitkänä.** Lyhennä sitä vain määritetyn aikarajan tai vaatimuksen vuoksi.
9. **Pidä uudelleenajoitus pois käytöstä.** Jos tarvitset välittömän uudelleenlaskennan, tee ensin varmuuskopio ja suunnittele, miten hoidat syntyvän jonon.

Tämä järjestys pitää vakiintuneen ajoituksen muutokset peruttavina mahdollisimman pitkään. Näin mallin sopivuus, muistamistavoite ja uuden aineiston määrä pysyvät erillisinä kysymyksinä eivätkä sekoitu yhdeksi asetuspulmaksi.

## Usein kysyttyä parhaista FSRS-asetuksista

### Onko 90 % paras muistamistavoite FSRS:lle?

Se on turvallisin yleinen lähtökohta, koska se on Ankin oletusarvo ja välttää korkean muistamistavoitteen työmääräkäyrän jyrkimmän osan. Yksittäisen pakan paras arvo riippuu unohtamisen hinnasta ja työmäärästä, jota pystyt ylläpitämään. Tarkista työmäärä **Help Me Decide (Experimental)** -työkalulla ennen tavoitteen muuttamista.

### Kannattaako muistamistavoitteeksi asettaa 95 %?

Vasta kun olet tarkistanut lisäkertausten tai -minuuttien määrän. Selkeästi laaditulle ja tärkeälle pakalle voi olla perusteltua asettaa 95 prosentin tavoite, mutta suuri harrastuskokoelma voi muuttua turhan raskaaksi. Älä ota takautuvaa uudelleenajoitusta käyttöön samalla, ellet tarkoituksella halua laskea eräpäiviä heti uudelleen.

### Kuinka usein FSRS-parametrit pitäisi optimoida?

Kuukausittain on jo riittävän usein, ja Anki 26.08:n sovelluksen sisäisen ohjeen mukaan muutaman kuukauden välein riittää. Optimoi, kun merkittävästi uutta historiaa on kertynyt, älä päivittäisen tai viikoittaisen aikataulun mukaan.

### Pitäisikö FSRS:n oppimisvaiheet jättää tyhjiksi?

Kun jätät oppimis- tai uudelleenoppimisvaiheiden kentän tyhjäksi Anki 26.08:ssa, vastaava lyhyen aikavälin ajoitus siirtyy FSRS:n päätettäväksi. Ominaisuus on kokeellinen, ja Again voidaan ajoittaa vähintään vuorokauden päähän. Pieni määrä saman päivän vaiheita on edelleen varovainen valinta.

### Ajoittaako FSRS-asetusten muuttaminen nykyiset Anki-kortit uudelleen?

Ei oletuksena. Kun **Reschedule cards on change** on pois käytöstä, uudet asetukset vaikuttavat tuleviin kertauksiin ilman jonon välitöntä uudelleenlaskentaa. Jos otat uudelleenajoituksen käyttöön, eräpäivät muuttuvat ja paljon kortteja voi erääntyä kerralla. Tee siis ensin varmuuskopio.

### Onko CMRR edelleen osa Ankia?

Ei. Anki poisti Compute Minimum Recommended Retention -toiminnon versiossa 25.07. Anki 26.08:ssa voit verrata muistamistavoitetta arvioituun työmäärään **Help Me Decide (Experimental)**- ja **FSRS Simulator (Experimental)** -työkaluilla.

### Käyttääkö Nibomo samoja asetuksia kuin Anki?

Se käyttää FSRS-6:ta ja tarjoaa työtilakohtaiset asetukset muistamistavoitteelle, oppimisvaiheille, uudelleenoppimisvaiheille, enimmäiskertausvälille ja kertausvälien satunnaisvaihtelulle eli fuzzille. Se ei kopioi Ankin koko asetusmallia: painokertoimet on kiinnitetty v1:ssä, muutokset vaikuttavat vain tuleviin kertauksiin eikä henkilökohtaista parametrien optimointia tai työmääräsimulaattoria ole.

## Päätä työmäärä ennen prosenttilukua

Hyvät FSRS-asetukset saavat kertausjonon palvelemaan todellista opiskelusuunnitelmaa. Aloita 90 prosentista, arvioi työmäärä, hallitse uusien korttien määrää ja nosta muistamistavoitetta vain, kun parempi muistaminen on lisäkertausten arvoista. Pidä vaiheet lyhyinä, enimmäiskertausväli pitkänä ja arviointitiedot rehellisinä.

Poistu sitten asetusnäkymästä. Ajoitusalgoritmi tarvitsee säännöllisiä kertauksia enemmän kuin vielä yhden säätämiseen kuluvan illan.
