---
title: "Näin käytät Claudea opiskeluun vuonna 2026: käytännön menetelmä"
description: "Opiskele omista muistiinpanoistasi Clauden avulla, vastaa kysymys kerrallaan, tarkista korjaukset ja tee osaamisaukoista muistikortteja kurssin tekoälysääntöjen mukaan."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "miten käyttää Claudea opiskeluun"
  - "Claude opiskelussa"
  - "opiskelu Clauden avulla"
  - "Claude tutorina"
  - "Claude muistikortit"
  - "Claude Learning mode"
---

Jos mietit, **miten käyttää Claudea opiskeluun**, aloita pienestä osasta omia kurssimuistiinpanojasi. Tarkista, mitä väitteitä ne tukevat, ja vastaa kysymys kerrallaan ennen avun näkemistä. Tarkista korjaukset ja tallenna sitten ne osaamisaukot, joita sinun pitää harjoitella uudelleen. Suosittelen tähän viimeiseen vaiheeseen [Nibomon Claude-lisäosaa](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): se antaa Claudelle työnkulut muistikorttien luomiseen, vuorossa olevien korttien kertaamiseen ja epäselvien korttien parantamiseen.

Hyödyllinen kierros on **lähteiden tarkistus → vastaus muistista → varmistus → tallennus → kertaus ajallaan**. Tavalliset opetukseen tarkoitetut kehotteet toimivat normaalissa Claude-keskustelussa. Lisäosa yhdistää opiskelutuokion tallennettuihin kortteihin ja kertausaikatauluun.

> **Sidonnaisuus:** Olen Kirill Markin ja kehitän [Nibomoa](/fi/features/). Artikkelin taustatutkimuksessa ja toimitustyössä on käytetty tekoälyä.

**Tiedot tarkistettu:** 22. lokakuuta 2026.

![Opiskelupöytä, jolla lähdemuistiinpanot yhdistyvät yhteen kysymykseen ja kahteen tarkistettuun osaamisaukkoja harjoittavaan korttiin; epäselvä muistiinpano on siirretty sivuun](/blog/how-to-use-claude-for-studying-v2.png)

## Opiskelukierros Clauden kanssa lyhyesti

Käytä tätä kierrosta yhden luento-osuuden, lukutekstin tai harjoitustehtäväsarjan opiskeluun:

1. Tarkista, miten kurssillasi saa käyttää tekoälyä.
2. Anna Claudelle pieni, selvästi nimetty lähdeaineisto.
3. Pyydä sitä merkitsemään puuttuvat, ristiriitaiset ja lukukelvottomat tiedot ennen opetusta.
4. Vastaa muistista yhteen kysymykseen kerrallaan.
5. Kirjaa korjaus, lähdekohta ja mahdolliset epävarmuudet.
6. Tarkista tärkeät vastaukset itse.
7. Tallenna muutama tarkistettu, myöhemminkin tärkeä osaamisaukko muistikorteiksi Nibomoon.
8. Kertaa tallennetut kortit ajallaan Claudessa tai Nibomo-sovelluksessa.

Järjestyksellä on väliä. Epäselvään lähteeseen perustuva tenttaus tekee epäselvyydestä vain vaikeammin havaittavaa.

## Ota Nibomo käyttöön Claudessa

Avaa [Nibomo-lisäosa](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) tai siirry kohtaan **Customize → Plugins**, etsi Nibomo ja napsauta **Add**. Jos lisäosa on jo asennettu, varmista, että se on käytössä.

Yhdistä lisäosan mukana tuleva Nibomo-liitin. Seuraa kirjautumisohjeita, kirjaudu Nibomo-tilillesi tai luo tili ja anna Claudelle käyttöoikeus. Valitse haluamasi työtila, kun sitä kysytään. Tällä tavalla käyttöönotto ei vaadi API-tunnisteen kopioimista tai palvelimen URL-osoitteen syöttämistä.

Lisäosa tarjoaa korttien luomisen, kertaamisen ja parantamisen työnkulut. Sen MCP-liitin on yhteys, jonka kautta Claude voi lukea ja päivittää Nibomo-tilisi tietoja. Löydät [liittimen myös Clauden hakemistosta](https://claude.ai/directory/nibomo). [Claude-yhteyden käyttöönotto-ohjeemme](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (englanniksi) ja [MCP-liittimen dokumentaatio](/fi/docs/mcp-connector/) kertovat yhteydestä tarkemmin.

Anthropic tarjoaa tällä hetkellä [lisäosat Pro-, Max-, Team- ja Enterprise-tilaajille](https://support.claude.com/en/articles/13837440-use-plugins-in-claude) Clauden verkkoversiossa, Claude Desktopin Chat-välilehdellä ja Coworkissa. Jos tililläsi ei ole lisäosia, voit silti käyttää alla olevia opetuskehotteita ja kopioida valitut kortit kertausohjelmaasi käsin.

## Tarkista kurssin säännöt ennen ensimmäisen tiedoston lataamista

Aloita kurssikuvauksesta, tehtävänannosta ja oppilaitoksesi tekoälyohjeista. Säännöt voivat vaihdella kurssin ja tehtävän mukaan. Kirjaa siis, mikä on sallittua juuri tässä tehtävässä: selitykset, harjoituskysymykset, palaute, jäsentely, apu lähdeviitteisiin vai ei mikään näistä.

Anthropicin [Claude for Educationin opiskelijaohje](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) mainitsee opiskelukäyttönä selitykset, harjoituskysymykset, opiskeluoppaat ja muistikortit. Sama ohje kehottaa noudattamaan oppilaitoksen akateemisen rehellisyyden sääntöjä ja olemaan käyttämättä Claudea töihin, jotka opiskelijan odotetaan tekevän itsenäisesti.

Tästä syntyy käytännöllinen raja:

- Käytä Claudea käsitteiden harjoitteluun, kun ohjaus ja harjoittelu ovat sallittuja.
- Älä pyydä sitä ratkaisemaan käynnissä olevaa arvioitavaa tehtävää, joka sinun pitää tehdä yksin.
- Älä lataa palveluun luottamuksellista, henkilökohtaista, tekijänoikeudella suojattua tai jakelultaan rajoitettua kurssiaineistoa ilman lupaa jakaa sitä palvelun kanssa.
- Jos ohje on epäselvä, kysy opettajalta ennen arvioitavan työn aloittamista.

Pidä varsinainen työ omana työnäsi. Oman yrityksen jälkeen saatu palaute voi olla sallittua opiskelun tukea. Clauden työn palauttaminen omissa nimissäsi voi rikkoa kurssin sääntöjä.

## Laita oikeat tiedostot oikeaan paikkaan

Yksittäinen keskustelu riittää lyhyeen opiskelutuokioon. Pidempää kurssia varten voit luoda yhden Claude-projektin ja lisätä siihen vain kyseisen kurssin aineistot.

[Claude-projektit](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) ovat kaikkien käyttäjien saatavilla. Free-tileillä raja on tällä hetkellä viisi projektia. Lisää kurssin varsinaiset lähdetiedostot ja opiskeluohjeet projektin tietopohjaan, jotta ne ovat käytettävissä sen eri keskusteluissa.

Kun muisti on käytössä, projekti voi myös välittää muistettua asiayhteyttä keskustelujen välillä. Käsittele muistia opiskelun taustatietona, älä luotettavana keskustelutallenteena tai lähdetiedostojen korvikkeena. Säilytä uudelleen tarvitsemasi lähdetuki ja korjaukset projektin tietopohjassa ja pyydä Claudea viittaamaan alkuperäiseen aineistoon.

Clauden [tiedostojen latausohjeessa](https://support.claude.com/en/articles/8241126-upload-files-to-claude) luetellaan tällä hetkellä PDF-, DOCX-, CSV-, TXT-, HTML-, ODT-, RTF-, EPUB-, JSON- ja XLSX-tiedostot sekä JPEG-, PNG-, GIF- ja WebP-kuvat. XLSX-tiedostojen lataaminen edellyttää, että koodin suoritus ja tiedostojen luonti ovat käytössä. Voit liittää tiedoston yhteen keskusteluun tai säilyttää sen projektin Files-osiossa myöhempää käyttöä varten.

Valitse pienin hyödyllinen aineisto: yksi luento, luvun yksi osio tai juuri väärin ratkaisemasi tehtävät. Kerro rajaus kehotteessa, esimerkiksi ”kalvot 8–17” tai ”osio nimeltä Geenien kytkentä”. Pienestä aineistosta on helpompi löytää väitteitä tukevat kohdat ja huomata, jos sisältöjä sekoittuu vahingossa keskenään.

Anthropic esitteli [**Learning mode** -tilan Claude for Educationin projekteissa](https://www.anthropic.com/news/introducing-claude-for-education) ohjaavana, sokraattisena opiskelutapana: se pyytää opiskelijaa päättelemään sen sijaan, että antaisi vastaukset heti. Se voi olla käytössäsi, jos yliopistosi tarjoaa Claude for Educationin. Sen ei kuitenkaan pidä olettaa kuuluvan jokaiseen henkilökohtaiseen Claude-tiliin. Seuraavat kehotteet luovat samantapaisen kysymyksiin perustuvan opiskelutuokion tavallisessa keskustelussa.

## Pyydä Claudea näyttämään epäselvyydet ennen opetusta

Luentokalvolla lukee ”kromosomit erkanevat”, mutta siitä ei selviä, mitkä kromosomit. Jos Claude täydentää aukon huomaamatta yleistiedolla, saatat harjoitella varmalta kuulostavaa vastausta, jolle lähteesi ei koskaan antanut tukea.

Liitä aineisto, määrittele tarkka rajaus ja pyydä ensin lähteiden tarkistusta:

```text
Käytä tässä opiskelutuokiossa vain nimeämiäni tiedostoja ja osioita. Älä täydennä
aukkoja yleistiedolla, ellen erikseen pyydä sitä.

Tee ennen opetusta lähdekartta, jossa on:
- käsitteet, jotka aineisto selittää selvästi;
- epäselvät tai puutteelliset termit, kaaviot ja tekstikohdat;
- tekstit, kaavat, merkinnät tai sivut, joita et pysty lukemaan luotettavasti;
- annettujen lähteiden väliset ristiriidat;
- esitiedot, joita aineisto edellyttää mutta ei selitä.

Anna jokaisesta kohdasta tiedostonimi sekä sivu, kalvo tai otsikko. Merkitse
kaikki ilman suoraa lähdetukea olevat kohdat tunnisteella EI LÄHDETUKEA.
Älä aloita kysymyksiä vielä.
```

Vertaa karttaa tiedostoihin. Jos Claude väittää määritelmän löytyvän kalvolta 12, avaa kalvo 12. Jos kaavion merkintää ei voi lukea, liitä tarvittava teksti tai lataa selkeämpi kuva. Jos kaksi kurssilähdettä on ristiriidassa, pidä ristiriita näkyvissä ja kysy opettajalta tai käytä kurssin ensisijaiseksi määrittelemää lähdettä.

Voit pyytää ulkopuolista selitystä myöhemmin. Pidä se erillään:

```text
Kurssilähde ei selitä tätä esitietoa. Selitä se yleistiedon pohjalta osiossa,
jonka otsikko on KURSSIAINEISTON ULKOPUOLELTA. Älä esitä selitystä niin kuin
se olisi peräisin tiedostoistani.
```

Merkintä auttaa estämään taustatiedon muuttumisen huomaamatta kurssin lähdeaineistoksi.

## Yksi kysymys, sitten odotus

Kun lähdekartta näyttää luotettavalta, aloita mieleenpalautusharjoittelu: tuota vastaus ennen sen näkemistä sen sijaan, että vain tunnistaisit Clauden jo näyttämän sujuvan selityksen.

```text
Opeta minua vain siitä aineistosta, jolle lähdekartassa on osoitettu tuki.

Kysy yksi kysymys kerrallaan ja odota vastaustani. Älä sisällytä kysymykseen
vihjeitä. Kun olen vastannut:
1. arvioi vastaus: Oikein, Osittain oikein, Väärin tai Lähde epäselvä;
2. anna lyhyt palaute paljastamatta koko vastausta;
3. viittaa vastausta tukevaan tiedostoon ja sivuun, kalvoon tai otsikkoon;
4. jos vastaukseni on osittain oikein tai väärin, anna vihje ja anna minun
   yrittää uudelleen ennen kuin näytät koko vastauksen;
5. lisää osaamisaukkolistaan vain todellinen puute.

Jos lähde on epäselvä, merkitse kysymys tarkistettavaksi sen sijaan, että
pyytäisit minua yrittämään uudelleen.

Vuorottele kysymyksiä, jotka vaativat suoraa mieleenpalautusta, samankaltaisten
asioiden erottelua tai lyhyttä soveltamista. Älä tee vielä muistikortteja. Lopeta 10 kysymyksen
jälkeen ja näytä lista.
```

Yksi kysymys kerrallaan estää myöhempiä kysymyksiä antamasta vihjeitä ja helpottaa jokaisen yrityksen arviointia. Kymmenen kysymyksen listasta on helppo ohittaa epämukavat kysymykset tai vastata vain niihin osiin, jotka osaa.

Pyydä Claudea myös vaihtelemaan kysymystyyppejä. Määritelmät paljastavat puuttuvat termit. Vertailut paljastavat käsitteet, jotka sekoitat keskenään. Pienet soveltavat tehtävät näyttävät, osaatko käyttää ajatusta etkä vain toistaa sen sanamuotoa. Ratkaise monivaiheinen lasku paperilla ja näytä vaiheet. Pelkkä lopputulos antaa Claudelle hyvin vähän tietoa virheen paikantamiseen.

## Pidä kirjaa lähdetuesta ja epävarmuudesta

Osaamisaukkolistan tarkoitus on näyttää, mihin korjaukset perustuvat, ei kerätä pisteitä. Käytä pientä taulukkoa:

| Kysymys | Oma vastauksesi | Arvio | Korjaus | Lähdetuki | Epävarmuus | Seuraava askel |
| --- | --- | --- | --- | --- | --- | --- |
| Mitkä erkanevat anafaasi I:ssä? | Sisarkromatidit | Väärin | Vastinkromosomit erkanevat; sisarkromatidit pysyvät yhdessä | Luento 4, kalvo 18 | Ei epävarmuutta | Yritä uudelleen ja harkitse sitten yhtä korttia |

Pyydä Claudea kirjoittamaan ”Lähde epäselvä”, kun lähdetuki ei riitä vastauksen ratkaisemiseen. Älä tee tällaisesta rivistä ulkoa opeteltavaa asiaa. Selvitä se ensin.

Epävarmuussarake tuo esiin myös vähemmän ilmeisiä ongelmia: kaavion, jota Claude ei pystynyt lukemaan, termin, jota luennoitsija käyttää eri tavoin kuin oppikirja, tai päätelmän, joka riippuu lausumattomasta oletuksesta. ”Luultavasti oikein” ja ”kalvon 18 tukema” eivät tarkoita samaa.

## Esimerkki: ohjaava palaute ja yksi myöhemminkin hyödyllinen kortti

Oletetaan, että annetussa kurssimuistiinpanossa sanotaan:

> Anafaasi I:n aikana vastinkromosomit siirtyvät vastakkaisiin napoihin. Sisarkromatidit pysyvät kiinni toisissaan sentromeereistään.

Claude kysyy: ”Mitkä erkanevat anafaasi I:n aikana?” Vastaat: ”Sisarkromatidit.”

Hyödyllinen ohjaava palaute on lyhyttä ja täsmällistä:

```text
Väärin. Sisarkromatidit pysyvät yhdessä anafaasi I:n aikana. Lue nuo kaksi
lausetta uudelleen: mitkä siirtyvät vastakkaisiin napoihin?
```

Jos antamasi aineisto käsittelee myös anafaasi II:ta, Claude voi vertailla näitä kahta uuden yrityksen jälkeen. Selitys kuuluu opetuskeskusteluun. Myöhemmin kerrattava osaamisaukko on pienempi:

```text
Etupuoli: Mitkä erkanevat meioosin anafaasi I:n aikana?
Kääntöpuoli: Vastinkromosomit; sisarkromatidit pysyvät yhdessä.
Lähdetuki: Luento 4, kalvo 18
```

Yhdestä virheestä syntyi yksi rajattu kortti, jonka vastauksen voi arvioida selvästi. Vihje, uusi yritys, selitys ja kannustus hoitivat tehtävänsä sillä hetkellä. Kaiken ei tarvitse kulkea mukana myöhempiin kertauksiin.

## Tarkista korjaus ennen kuin luotat siihen

Claude voi saada vastauksen kuulostamaan varmalta, vaikka se lukisi tiedoston väärin, toisi mukaan ulkopuolista tietoa tai hyväksyisi epämääräisen vastauksen. Tarkistustavan pitää sopia väitteeseen:

1. **Kurssikohtaiset tiedot:** avaa viitattu sivu tai kalvo ja vertaa itse sanamuotoa, ehtoja ja poikkeuksia.
2. **Laskut ja muut ratkaistavat tehtävät:** tee vaiheet uudelleen itsenäisesti, tarkista yksiköt ja etumerkit ja vertaa sitten viralliseen malliratkaisuun tai opettajan ohjeisiin, jos sellaiset ovat saatavilla.
3. **Ajantasaiset tiedot:** jos mallillasi ja tililläsi voi käyttää verkkohakua, pyydä Claudea hakemaan tietoa ja viittaamaan alkuperäislähteisiin. Avaa linkit. Lähdeviitteet mahdollistavat tarkistamisen, mutta eivät tee sitä puolestasi.
4. **Erityisen tärkeät tai kiistanalaiset kohdat:** käytä kurssin oppikirjaa, opetushenkilöstöä tai muuta kurssin hyväksymää asiantuntevaa lähdettä.

Anthropicin [verkkohakuohjeen](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) mukaan hakuvastauksissa on lähdeviitteet. Ohje neuvoo myös tarkistamaan tärkeät tiedot luotettavista lähteistä. Haun saatavuus voi vaihdella. Jos hakua ei voi käyttää, turvaudu suoraan luotettavaan lähteeseen sen sijaan, että antaisit Clauden arvata.

Hyödyllinen tarkistuskehote on tarkoituksella tiukka:

```text
Tarkista osaamisaukkolista. Anna jokaiselle korjaukselle tarkka lähdekohta ja
lyhyt sitä tukeva lainaus. Jos lähde ei suoraan tue vastausta, muuta arvioksi
EI LÄHDETUKEA. Listaa kaikki vastaukset, jotka riippuvat ulkopuolisesta
tiedosta, päättelystä tai sisällöstä, jota et pysty lukemaan. Älä täytä näitä
aukkoja arvaamalla.
```

Tutki sen jälkeen viitattu aineisto itse. Claude auttaa löytämään lähdetuen, mutta ei korvaa sitä.

## Päätä, mihin kannattaa palata

Kaikista korjauksista ei kannata tehdä muistikortteja. Joihinkin aukkoihin auttaa esimerkkiratkaisu, kaavio, opettajan vastaanotto tai uusi harjoitustehtävä.

Säilytä muistikorttiehdotus, kun:

- se syntyi vastauksesta, joka meni väärin, tuli hitaasti tai sekoittui samankaltaiseen asiaan;
- asia on tärkeä tämän yksittäisen kysymyksen ulkopuolellakin;
- sitä voi testata yhdellä selkeällä kysymyksellä ja yhdellä lyhyellä vastauksella;
- sen tukena on lähde, jonka tarkistit;
- se on ymmärrettävä myös ilman vieressä olevaa Claude-keskustelua.

Jätä kortti tekemättä, kun:

- itse lähde on yhä epäselvä;
- vastasit helposti ja johdonmukaisesti;
- kysymys edellyttää kokonaista esseetä tai prosessin kuvausta;
- vastaus muuttuu sellaisten ehtojen mukana, joita ei ole kerrottu;
- taidon harjoittelu auttaisi enemmän kuin lauseen opettelu ulkoa.

Pyydä Claudelta ehdotuksia, älä valmista pakkaa:

```text
Käy läpi tarkistettu osaamisaukkolista. Ehdota kortteja vain toistuviin tai
tärkeisiin puutteisiin, joita voi testata selkeästi.

Käytä jokaisessa kortissa yhtä muistettavaa asiaa. Tee etupuolesta täsmällinen
ja kääntöpuolesta lyhyt. Lisää lähdekohta ja mahdollinen jäljellä oleva
epävarmuus. Laita vain harjoittelua vaativat puutteet erilliselle listalle
ja ehdota sopivaa harjoitusta. Älä tallenna vielä mitään.
```

Jätä loput pois. Opiskelutuokio Clauden kanssa voi olla hyödyllinen, vaikka siitä ei syntyisi yhtään korttia.

## Tallenna tarkistetut osaamisaukot Nibomoon

Kun olet tarkistanut lähdetuen, pyydä Nibomo-lisäosaa tekemään valituista osaamisaukoista muistikortteja ja tallentamaan ne. Nimeä työtila ja pyydä Claudea tarkistamaan olemassa olevat kortit ennen uusien lisäämistä. Tämä kehote pyytää esikatselun ennen tallentamista:

```text
Luo Nibomon avulla enintään 5 muistikorttia yllä olevasta tarkistetusta
osaamisaukkolistasta. Käytä työtilaa [työtilan nimi]. Jos nimi on epäselvä,
varmista ennen tallentamista, mistä työtilasta on kyse.

Tarkista, onko olemassa olevissa korteissa kaksoiskappaleita tai samaa
muistettavaa asiaa testaavia kortteja. Käytä vain osaamisaukkoja, joille
tarkistamani aineisto antaa tuen. Testaa yhdessä kortissa yhtä asiaa.
Tee etupuolesta täsmällinen, pidä kääntöpuoli lyhyenä ja lisää lähdekohta.

Näytä ensin ehdotetut kortit, niiden lähdetuki ja mahdolliset vastaavat kortit.
Odota hyväksyntääni ennen tallentamista. Vahvista tallentamisen jälkeen,
mitä luotiin ja mihin.
```

Esikatselu on tässä kehotteessa asettamasi toive. Voit itse valita, kuinka paljon haluat tarkistaa ennen kuin pyydät Claudea tallentamaan tai muokkaamaan kortteja. Esikatselu ei ole jokaisen lisäosatoiminnon vaatimus.

Muista esimerkin ero: selitys auttoi ymmärtämään meioosia, kun taas tallennettu kortti testaa juuri sitä eroa, jota et muistanut. Pitkästä opetusvastauksesta tarvitsee harvoin tehdä pitkää korttia.

## Kertaa vuorossa olevat muistikortit Claudessa

Uusiin muistiinpanoihin perustuva tenttaus on opetustuokio. Nibomon ajastettu kertaus käyttää jo tallennettuja kortteja ja kirjaa tuloksen, joka vaikuttaa kunkin kortin seuraavaan kertausajankohtaan. Pyydä tätä erikseen:

```text
Kertaa kanssani Nibomon avulla vuorossa olevia muistikortteja 10 minuutin ajan
työtilassa [työtilan nimi]. Käytä aikavyöhykkeenäni Europe/Paris.

Näytä yksi kysymys kerrallaan ja odota vastausyritystäni ennen kuin paljastat
tallennetun vastauksen. Vertaa sitten alkuperäistä yritystäni siihen, anna
lyhyt palaute ja kirjaa arvio siitä, miten hyvin muistin vastauksen. Kerro,
minkä arvion kirjasit. Arvioi alkuperäinen yritys, älä vastauksen paljastamisen jälkeen antamaani
korjattua vastausta. Lopeta, kun aika loppuu tai vuorossa olevia kortteja ei
enää ole, ja tee yhteenveto Nibomon vahvistamista kertauksista.
```

Korvaa työtila ja aikavyöhyke omillasi. Claude kertoo tavallisesti arvionsa ja tallentaa sen automaattisesti. Jos haluat valita jokaisen arvion itse, lisää: ”Käytä manuaalista arviointitilaa: paljastettuasi vastauksen odota, että valitsen Again, Hard, Good tai Easy, ennen kuin kirjaat arvion.”

Jos vastaat anafaasi I:tä koskevaan korttiin ”sisarkromatidit”, korjauksen tunnistaminen vastauksen paljastamisen jälkeen ei tee alkuperäisestä yrityksestä oikeaa. Myöhempi kysymys anafaasi II:sta voi testata, erotatko nämä nyt toisistaan. Sen ei pidä parantaa ensimmäistä arviota jälkikäteen.

Voit kerrata myös [Nibomo-sovelluksessa](https://app.nibomo.com/). Vahvistetut kertaukset päivittävät samaa aikataulua sekä sovelluksessa että Claudessa, joten voit vaihdella niiden välillä ylläpitämättä kahta kertaushistoriaa. Pyydä Claudea ilmoittamaan epäonnistuneesta tai vahvistamatta jääneestä kirjauksesta selvästi sen sijaan, että se käsittelisi sitä tallennettuna edistymisenä.

## Paranna kortteja, jotka hämmentävät toistuvasti

Toistuvat virheet voivat paljastaa epämääräisen kysymyksen, liian laajan vastauksen tai puuttuvan ehdon. Pyydä Claudea tutkimaan kortti ennen kuin päättelet tarvitsevasi vain lisää toistoja:

```text
Tarkista Nibomon avulla kortit, jotka tuntuivat epäselviltä tässä tuokiossa.
Etsi epämääräisiä etupuolia, useita muistettavia asioita samassa kortissa,
puuttuvia ehtoja, vailla lähdetukea olevia vastauksia ja kaksoiskappaleita.
Vertaa korjausehdotuksia yllä olevaan kurssiaineistoon.

Näytä nykyinen kortti ja ehdotettu muutos rinnakkain. Lisää lyhyt perustelu
ja lähdekohta. Merkitse kohdat, joita aineisto ei ratkaise. Odota hyväksyntääni
ennen muokkaamista. Älä poista kortteja tai muuta ratkaisematta olevia tietoja.
```

Säilytä kortti ennallaan, jos kysymys on selkeä etkä vain muistanut vastausta. Jos osaamisaukkoon auttaa kaavio tai toinen esimerkkiratkaisu, palaa opetuskeskusteluun tai suoraan harjoitteluun.

Jos haluat kopioida kortit käsin, pyydä Claudea palauttamaan hyväksytyt kortit tavallisina etupuoli–kääntöpuoli-tekstiosioina ja lisää ne tavalliseen muistikorttisovellukseesi. Lähteiden tarkistaminen ja vastausyrityksestä alkava opetus toimivat silloinkin.

## Missä Claude tarvitsee edelleen valvontaa

Menetelmä vähentää vältettävissä olevia virheitä, mutta ei tee Claudesta auktoriteettia.

- Lähteisiin rajattu vastaus voi silti olla väärä, jos lähde on väärässä.
- Tiedostosta poimittu sisältö voi menettää asiayhteyttään, etenkin kaavioiden, taulukoiden ja skannattujen sivujen kohdalla.
- Claude saattaa arvioida avoimen vastauksen liian suopeasti tai liian kirjaimellisesti.
- Pitkä opetuskeskustelu voi ajautua alkuperäisen rajauksen ulkopuolelle.
- Helpot vihjeet voivat auttaa tunnistamaan vastauksen ilman, että sen palauttaminen mieleen myöhemmin vahvistuu.

Palaa nimettyyn lähteeseen, kun keskustelu ajautuu sivuun. Pyydä lähdekohta uudelleen, kun selitys muuttuu. Todistusten, esseiden, ääntämisen, laboratoriotyön ja ohjelmoinnin kaltaisissa taidoissa käytä mieleenpalautuskysymysten rinnalla suoraa harjoittelua ja ihmiseltä saatua palautetta.

## Lopputarkistus Clauden kanssa opiskeluun

Tarkista ennen tuokion lopettamista, että:

- tekoälyn käyttö noudattaa tämän kurssin ja tehtävän sääntöjä;
- Claude nimesi epäselvät, lukukelvottomat ja ilman lähdetukea olevat kohdat;
- vastasit yhteen kysymykseen kerrallaan ennen avun näkemistä;
- jokainen korjaus viittaa lähdekohtaan, jonka avasit itse;
- ulkopuolinen tieto on merkitty erilleen kurssiaineistosta;
- ratkaisemattomista epävarmuuksista ei syntynyt muistikortteja;
- vain muutama tarkistettu, myöhemminkin tärkeä osaamisaukko tallennettiin korteiksi;
- kortit tallennettiin haluttuun työtilaan ilman tarpeettomia kaksoiskappaleita;
- valitsit automaattisen tai manuaalisen arvioinnin ajastettuihin kertauksiin;
- arviot perustuvat alkuperäisiin vastausyrityksiisi ja kirjatut kertaukset vahvistettiin;
- tiedät, mihin palaat seuraavaa ajastettua kertausta varten.

Hyödyllinen **Claude-tutori** tekee muutakin kuin selittää. Se näyttää, mihin lähdeaineisto riittää, odottaa, kun palautat vastauksen mieleesi, ja jättää lyhyen kirjauksen siitä, missä osaaminen petti. Juuri tämä kirjaus tekee opiskelutavasta toistamisen arvoisen, ei keskustelun pituus.
