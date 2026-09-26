---
title: "Mochi-oppimiskorttisovelluksen arvio (2026): ilmaisversio, offline-käyttö ja vertailu Ankiin"
description: "Lähteisiin perustuva arvio Mochin oppimiskorteista: ilmaisversio, offline-sovellukset, Markdown-muistiinpanot, FSRS, synkronointi, Anki-tuonti, vienti ja itseylläpidon rajat."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "Mochi-oppimiskortit"
  - "Mochi-kortit"
  - "Mochi vai Anki"
  - "Anki vai Mochi"
  - "onko Mochi ilmainen"
  - "Mochi offline-käyttö"
  - "Mochi hinta"
  - "Mochi itseylläpito"
  - "Markdown-oppimiskortit"
  - "Mochi aikavälikertaus"
---

Mochissa aloitetaan Markdown-dokumentista sen sijaan, että kortin etu- ja kääntöpuoli täytettäisiin erillisiin lomakekenttiin. Lisää omalle rivilleen kolme yhdysmerkkiä, niin dokumenttiin syntyy kerrattavia puolia. Voit myös jättää sen muistiinpanoksi, linkittää sen toiseen korttiin tai arkistoida sen, jolloin se löytyy edelleen haulla mutta ei päädy kertausjonoon.

Tuo pieni erotin kertoo, kenelle **Mochin oppimiskortit** sopivat. Mochi on hyvä valinta, jos haluat muistiinpanot ja aikavälikertauksen samaan, ensisijaisesti paikallisesti toimivaan sovellukseen. Erityisen luonteva se on, jos Markdown, takaisinlinkit ja yksinkertainen Remembered/Forgot-arviointi tuntuvat omilta. Se ei vakuuta yhtä hyvin pitkään Ankia käyttänyttä, jonka kokoelma riippuu automaattisesti muodostettavista korttiversioista, mukautetusta HTML:stä ja CSS:stä, JavaScriptistä, lisäosista tai ajoituksen yksityiskohtaisista säädöistä.

Yhdellä laitteella ilmaisversio on enemmän kuin kokeilu: rekisteröitymistä ei tarvita, ja Mochin ohjeet lupaavat rajattoman offline-käytön. Rajoitus on siinä, että laitteiden välinen synkronointi kuuluu **5 Yhdysvaltain dollaria kuukaudessa maksavaan Pro-tilaukseen**. Ankin käyttäjälle suurempi kustannus voi olla siirrossa katoava tieto ja toiminnallisuus. Mochi voi tuoda Anki-paketin kertaushistorioineen, mutta se ei pysty säilyttämään kaikkia korttipohjia, tyylejä, skriptejä, ajoitusasetuksia tai lisäosien toimintaa.

> **Sidonnaisuus:** Olen Kirill Markin ja kehitän [Nibomoa](/fi/). Tämä on lähteisiin perustuva arvio työnkuluista, ei väite siitä, että olisin testannut tuotetta käytännössä. Artikkelissa ei ole kumppanuuslinkkejä. Vertailun pääosassa ovat Mochi ja Anki; oma tuotteeni esiintyy vasta loppupuolella selvästi merkittynä vaihtoehtona.

**Tiedot tarkistettu:** 7. syyskuuta 2026. Tuolloin viimeisin näkyvissä ollut [Mochin julkaisu](https://mochi.cards/changelog/) oli versio 26.8.2, joka oli päivätty 10. elokuuta 2026. Hinnat ja sovelluskauppojen tiedot voivat muuttua.

![Kirjakonservaattori kokeilee pientä haitariksi taittuvaa, toisiinsa liitettyjen korttien sarjaa alkuperäisen arkiston pysyessä turvallisesti laatikossa](/blog/mochi-alternative-v3.png)

## Arvio lyhyesti

- **Valitse Mochi**, jos haluat Markdown-muistiinpanot ja kortit samaan paikkaan, offline-käytön yhdellä laitteella ilman tiliä, takaisinlinkit ja kaksi arviointivaihtoehtoa kerratessa.
- **Valitse Anki**, jos tarvitset pitkälle kehittyneitä muistiinpanotyyppejä, HTML/CSS-korttipohjia, lisäosia, ilmaisen ylläpidetyn synkronointipalvelun, neljä kertausarviota tai tarkempia FSRS-säätöjä.
- **Älä vaihda vielä**, jos kertaat jo säännöllisesti etkä osaa nimetä työnkulun ongelmaa, jonka Mochi ratkaisisi. Uusi käyttöliittymä ei yksin riitä syyksi vaarantaa vuosien ajoitustietoja ja mukautettuja kortteja.
- **Testaa ennen siirtoa**, jos Anki on jo pitkäaikaisen kokoelmasi koti. Mochi hyväksyy `.apkg`-tiedostot ja voi tuoda kertaushistorian, mutta se muuntaa HTML:n Markdowniksi ja poistaa CSS:n sekä JavaScriptin.

## Mochi ja Anki rinnakkain

| Valintaperuste | Mochi | Anki |
|---|---|---|
| Kenelle sopii parhaiten | Linkitettyjen muistiinpanojen ja Markdownin käyttäjille, jotka haluavat muistiinpanot kertauskorttien rinnalle | Oppijoille, jotka haluavat pitkälle kehittyneen ja säädettävän oppimiskorttijärjestelmän |
| Korttien luominen | Markdown-dokumentista tulee useita puolia sisältävä kortti, kun lisäät `---`-erottimen; myös kenttiä ja korttipohjia voi käyttää | Muistiinpanot sisältävät kenttiä; HTML/CSS-korttipohjat muodostavat yhden tai useamman kortin |
| Kertauksen kulku | Uudet kortit tulevat ensin oppimisvaiheeseen; opituilla korteilla käytetään vaihtoehtoja Forgot / Remembered | Korteilla käytetään vaihtoehtoja Again / Hard / Good / Easy |
| Ajoitus | Oletuksena Mochin oma algoritmi; FSRS on valinnainen | FSRS tai vanhempi SM-2; laajemmat FSRS:n säätötyökalut |
| Ilmaiskäyttö | Ei rekisteröitymistä, rajaton offline-käyttö | Ilmaiset työpöytäsovellukset ja ilmainen AnkiWeb-synkronointi; virallinen iOS-sovellus on maksullinen |
| Synkronointi laitteiden välillä | Pro, 5 Yhdysvaltain dollaria kuukaudessa | Ilmainen AnkiWebin kautta |
| Alustat | Verkko, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, virallinen AnkiMobile, itsenäisesti kehitetty AnkiDroid |
| Siirrettävät tiedostomuodot | Oma `.mochi`-muoto sekä Markdown- ja CSV-vienti | Omat `.colpkg`- ja `.apkg`-muodot sekä sarkaineroteltu teksti |
| Tietojen hallinnan ja ylläpidon rajat | Ensisijaisesti paikallinen; ydinsovellusta ei esitellä avoimena lähdekoodina eikä tuettua itse ylläpidettävää synkronointipalvelua ole dokumentoitu | Päärepositorio on AGPL-lisensoitu; virallinen itse ylläpidettävä synkronointipalvelin on dokumentoitu |

Olennainen ero on painotuksessa: **Mochi tarjoaa muistiinpanoihin perustuvaa yksinkertaisuutta, Anki koko kokoelman hallintaa**.

## Mihin Mochin käyttöliittymä perustuu

Mochin käyttöliittymää on helpompi ymmärtää seuraamalla yhden kortin kulkua.

Jokainen kortti kuuluu pakkaan. Napsauta **New Card** (uusi kortti), niin saat Markdown-muokkausalueen kiinteiden kysymys- ja vastauslaatikoiden sijaan. Yksi kortti voi sisältää otsikoita, luetteloita, koodia, kuvia, rakenteisia kenttiä ja linkkejä. Lisää lohkojen väliin `---`, niin korttiin syntyy vähintään kaksi kerrattavaa puolta. Viittaa toiseen korttiin `[[double brackets]]` -syntaksilla eli kaksinkertaisilla hakasulkeilla; Mochi luo takaisinlinkin automaattisesti. Virallinen [korttien yleiskuvaus](https://mochi.cards/docs/cards/) esittelee myös korttipohjat, joiden paikkamerkit näyttävät rakenteisten kenttien arvot.

Kortit voivat palvella kahta tarkoitusta samassa järjestelmässä:

- kertauskortin eri puolia käytetään aikavälikertauksessa;
- viitemuistiinpano voi pysyä samassa pakassa arkistoituna, jolloin se poistuu uusien ja kerrattaviksi erääntyvien korttien jonoista mutta sen sisältö, tunnisteet, linkit ja historia säilyvät.

[Pakkanäkymät](https://mochi.cards/docs/decks/custom-views/) ovat tallennettuja suodatinten, lajittelun ja asettelun yhdistelmiä. Voit pitää ruudukon tavallista selailua varten ja luoda toisen näkymän tunnisteen, kertausajankohdan, heikon muistamistason tai viimeisimmän kertauksen perusteella. Mochissa näkymän voi myös muuttaa tehoharjoitteluksi ilman, että tavallinen ajoitus tai kertaushistoria muuttuu. Tämä kertoo enemmän kuin käyttöliittymän kutsuminen ”selkeäksi”: sama pakka voi toimia muistikirjana, suodatettuna tietokantana ja opiskelujonona.

[Päivittäisessä kertauksessa](https://mochi.cards/docs/getting-started/reviewing-cards/) on kaksi vaihetta. Uusien korttien vaiheessa (**New cards**) joko lisäät kortin kertausaikatauluun tai valitset Again (uudelleen) nähdäksesi sen pian uudelleen. Kun kortti on opittu ja sen kertausaika tulee, seuraava puoli paljastetaan ja valittavana ovat **Forgot** eli unohdin ja **Remembered** eli muistin. Jos unohdat vastauksen, Mochi käyttää uudelleenkertausjonoa ennen edistymisen nollaamista. Kertaushetken päätös on siis tarkoituksella rajattu.

## Onko Mochi ilmainen, ja mikä toimii ilman verkkoyhteyttä?

On, mutta ”ilmainen” ja ”offline” tarkoittavat eri asioita sen mukaan, missä sovellusta käytät. [Mochin hinnastossa](https://mochi.cards/) vaihtoehdot ovat:

- **Free:** 0 Yhdysvaltain dollaria pysyvästi, ei rekisteröitymistä, rajaton offline-käyttö.
- **Pro:** 5 Yhdysvaltain dollaria kuukaudessa; lisäksi synkronointi laitteiden välillä, pakkojen julkaiseminen, dynaamiset kentät, tekoälyintegraatio ja sähköpostituki.

Mochi toimii macOS:llä, Windowsilla, Linuxilla, iOS:llä, Androidilla ja verkossa. Sen [lataus- ja asennusohje](https://mochi.cards/docs/getting-started/download-and-install/) kertoo käytännön rajat:

| Käyttöympäristö | Mitä ilmaisuus ja offline-käyttö tarkoittavat |
|---|---|
| Asennettu työpöytä- tai mobiilisovellus | Voit käyttää Mochia ilman verkkoyhteyttä ja tiliä. Tiedot tallentuvat laitteelle, joten yksi asennettu sovellus voi kattaa koko työnkulun ilmaiseksi. |
| Verkkosovellus ilman Pro-tilausta | Sisältö säilytetään selaimen offline-tallennustilassa. Mochi varoittaa, että selain voi tyhjentää nämä tiedot varoittamatta. |
| Sama kokoelma usealla laitteella | Automaattinen synkronointi laitteiden välillä on Pro-ominaisuus, vaikka jokainen asennettu sovellus toimii myös ilman verkkoyhteyttä. |

Offline-käyttö ja synkronointi ovat erillisiä lupauksia. Et tarvitse Pro-tilausta pelkästään korttien luomiseen tai kertaamiseen ladatussa sovelluksessa. Tarvitset sen, jos saman ajantasaisen kokoelman on siirryttävä automaattisesti kannettavalta puhelimeen. Säilytä ilmaisversion tärkeistä tiedoista varmuuskopio sovelluksen omassa muodossa sen sijaan, että pitäisit laitetta ja varsinkaan selaimen tallennustilaa ainoana kopiona.

Jos offline-toiminta ratkaisee valinnan, vertaa oman laitteesi käyttötapaa artikkelissa [Toimiiko Anki ilman verkkoyhteyttä?](/blog/does-anki-work-offline/) ja laajemmassa [offline-oppimiskorttisovellusten oppaassa](/blog/best-offline-flashcards-app/).

## Markdown-oppimiskortit ovat varsinainen syy valita Mochi

Mochin todellinen etu on siinä, miten Markdown muuttaa ylläpitämääsi lähdeaineistoa.

Mochi-kortti pysyy luettavana tekstinä. Samassa dokumentissa voi olla lyhyt selitys, koodilohko, linkkejä aiheeseen liittyviin ajatuksiin ja erottimet kerrattavien puolten välissä. Kortit voivat käyttää myös kenttiä ja korttipohjia, kun toistuva rakenne on tärkeä. Kun korttiin liitetään korttipohja, Mochi muodostaa näkymän korttipohjan Markdownista ja kenttien paikkamerkeistä. Kortin oma Markdown jätetään näyttämättä, mutta sitä ei poisteta.

Anki lähtee toisesta mallista. Muistiinpano tallentaa kentät, ja [korttipohjat](https://docs.ankiweb.net/templates/intro.html) määräävät, mitkä kentät näytetään ja mitä kortteja muodostetaan. Korttipohjat käyttävät HTML:ää ja ulkoasun määrittelyyn CSS:ää. Yhdestä sanastomuistiinpanosta voi näin syntyä sekä tunnistamista että tuottamista harjoittavia kortteja, vaikka niiden pohjana olevat tiedot pysyvät yhdessä paikassa.

Tämä rakenne antaa Ankille enemmän mahdollisuuksia ehdollisiin asetteluihin, automaattisesti muodostettaviin korttiversioihin, kirjoitettaviin vastauksiin, mukautettuun ulkoasuun ja lisäosilla laajennettaviin työnkulkuihin. Samalla se tarkoittaa, ettei Anki ole natiivisti Markdownia käyttävä oppimiskorttisovellus. Markdown-pohjainen Anki-työnkulku tarvitsee erillisen muunnoksen tai lisäosan.

Käytännön kysymys on yksinkertainen: haluatko muistiinpanon, josta voi tulla kortti, vai rakenteisen muistiinpanotyypin, josta voi muodostua useita kortteja? Mochi keskittyy ensimmäiseen. Anki keskittyy jälkimmäiseen.

## Mochin aikavälikertaus sisältää nyt myös FSRS:n

Vertailut, joissa väitetään, ettei Mochissa ole FSRS:ää, ovat vanhentuneita. Mochi lisäsi FSRS:n esiversion vuonna 2025 ja on sen jälkeen julkaissut ajoitusalgoritmiin liittyviä korjauksia. Silti [Mochin oma algoritmi on edelleen oletus](https://mochi.cards/docs/reviewing/fsrs/).

Oletusalgoritmi muuttaa kertausvälejä kiinteillä kertoimilla jokaisen muistetun tai unohdetun vastauksen jälkeen. Kun vaihdat FSRS:ään Review Settings -kertausasetuksissa, jo opitut kortit siirtyvät käyttämään FSRS:ää historiaansa menettämättä. Voit asettaa tavoitellun muistamistason, syöttää omat parametrit ja vaihtaa myöhemmin takaisin.

Mochi säilyttää kaksi arviointivaihtoehtoaan kummallakin ajoitusalgoritmilla:

- **Forgot** vastaa FSRS:n Again-arviota.
- **Remembered** vastaa FSRS:n Good-arviota.

Mochin ohjeiden mukaan kaksivaihtoehtoinen arviointi toimii FSRS:n kanssa, mutta osa Hard- ja Easy-arvioiden tuomasta tiedosta jää saamatta. Mochi hyväksyy optimoidut mukautetut parametrit, mutta siinä ei ole sisäänrakennettua optimoijaa. Henkilökohtaisten parametrien tuottamiseen tarvitaan ulkoinen FSRS-optimoija ja Mochin kertaushistoria.

[Ankin FSRS-asetukset](https://docs.ankiweb.net/deck-options.html#fsrs) tarjoavat enemmän. Tavoitellun muistamistason ja parametrit voi liittää asetusprofiileihin, sisäänrakennettu optimoija voi sovittaa parametrit kertaushistoriaan, ja simulaattori arvioi kertausmääriä tai opiskeluun kuluvia minuutteja eri asetuksilla. Anki tallentaa myös neljä tulosta: Again, Hard, Good ja Easy.

Lisäpainikkeista on hyötyä vain, jos käytät niitä johdonmukaisesti. Ankin käyttöohjeessa Hard tarkoittaa onnistunutta mieleen palauttamista. Jos painat Hard-painiketta, vaikka unohdit vastauksen, annat FSRS:lle väärää tietoa ja kertausväleistä voi tulla liian pitkiä.

Valitse Mochin kaksivaihtoehtoinen arviointi, jos valinta onnistumisen ja unohtamisen välillä pitää kertaushetken selkeänä. Valitse Anki, jos haluat tarkempaa arviointitietoa ja aiot käyttää sen optimoijaa, muistamistason säätöjä, asetusprofiileja tai työmääräsimulaattoria. Jos haluat verrata sovellusten sijaan ajoitusalgoritmeja, lue [FSRS:n ja SM-2:n vertailu](/blog/fsrs-vs-sm-2/).

## Mochissa ja Ankissa maksetaan eri asioista

Yhdellä tietokoneella opiskeltaessa kumpikin sovellus voi olla ilmainen. Kustannus tulee vastaan eri kohdassa, kun laitteita on enemmän.

Mochi veloittaa Pro-synkronoinnista **5 Yhdysvaltain dollaria kuukaudessa** ja sisällyttää samaan tilaukseen julkaisemisen, dynaamiset kentät, tekoälyintegraation ja tuen. Ankin työpöytäsovellukset ovat ilmaisia, ja [Ankin virallinen sivusto](https://apps.ankiweb.net/) kertoo AnkiWeb-synkronoinnin olevan ilmaista. AnkiMobile on maksullinen virallinen iPhone- ja iPad-sovellus; AnkiDroid on ilmainen, itsenäisesti kehitetty Android-sovellus.

Siksi vastaus kysymykseen ”Kumpi on halvempi?” riippuu laitteistasi:

- yksi tietokone: kumpikin voi olla ilmainen;
- useita tietokoneita tai Android-laitteita: Ankin ilmaisella ylläpidetyllä synkronoinnilla välttää tilausmaksun;
- iPhone tai iPad: Ankissa maksetaan sovelluksesta kerran, kun taas Mochissa laitteiden välinen synkronointi vaatii jatkuvan Pro-tilauksen;
- Mochin käyttäjät, jotka haluavat jo valmiiksi julkaisemisen, dynaamiset kentät tai tekoälyintegraation, voivat nähdä synkronoinnin yhtenä osana pakettia eivätkä koko maksun syynä.

Tarkista oman alueesi App Store ennen tarkkojen iOS-kokonaiskulujen vertailua. Tässä arviossa ei anneta yhtä kiinteää sovelluskauppahintaa, sillä hinta voi vaihdella markkina-alueittain.

## Mochin itseylläpito ei ole sama asia kuin paikallinen käyttö

Kolme käsitettä niputetaan usein yhteen:

- **Ensisijaisesti paikallinen** tarkoittaa, että käytössä oleva kopio on laitteellasi ja sovellus voi jatkaa toimintaansa ilman pilvipalveluaan.
- **Avoin lähdekoodi** tarkoittaa, että lähdekoodi on saatavilla lisenssillä, joka sallii sen tarkastelun ja muokkaamisen.
- **Itse ylläpidettävä** tarkoittaa, että tuotteelle on dokumentoitu tuettu tapa ajaa kyseistä palvelua omassa infrastruktuurissasi.

Mochi dokumentoi paikallisen toimintatapansa selvästi. Se ei esittele ydinsovellustaan avoimena lähdekoodina: julkisen sivuston alatunnisteen ”Open source” -linkki vie [integraatioiden kokoelmaan](https://github.com/mochi-cards/open-source), ei ydinsovellukseen. Mochin oma sivusto ei myöskään dokumentoi tuettua, itse ylläpidettävää korvaajaa Pro-synkronoinnille.

Jos etsit **Mochin itseylläpitoa**, koska haluat oman palvelimen, raja kulkee tässä: voit säilyttää paikalliset tiedot ja varmuuskopiot sovelluksen omassa muodossa, mutta dokumentoitu tapa käyttää samaa kokoelmaa eri laitteilla on Mochi Pro. Paikallinen toimintatapa auttaa pitämään tiedot omassa hallinnassa, mutta se ei tarkoita palvelun ylläpitämistä itse.

Ankin päärepositorio on [lisensoitu AGPL:n versiolla 3 tai uudemmalla](https://github.com/ankitects/anki/blob/main/LICENSE), ja joillekin komponenteille on lueteltu poikkeuksia. Virallinen käyttöohje dokumentoi myös edistyneille käyttäjille tarkoitetun [itse ylläpidettävän synkronointipalvelimen](https://docs.ankiweb.net/sync-server.html). Palvelin korvaa AnkiWeb-synkronoinnin yhteensopivissa asiakasohjelmissa. Se ei ole itse ylläpidettävä kopio AnkiWeb-sivustosta, ja Anki edellyttää ylläpitäjän hoitavan komentoriviin, verkkoihin, palomuureihin, protokolliin ja päivityksiin liittyvät ongelmat.

## Mitä Anki-tuonnissa säilyy ja mikä muuttuu

Mochin [tuontiohjeen](https://mochi.cards/docs/import-and-export/importing/) mukaan se hyväksyy Ankin `.apkg`-tiedostot kertaushistorioineen. ”Tuotu” ei kuitenkaan tarkoita samaa kuin ”vastaa alkuperäistä”.

Tuonnissa Mochi muuntaa HTML:n Markdowniksi ja poistaa CSS:n sekä JavaScriptin. Kyse on tiedostomuodon muunnoksesta kahden erilaisen korttimallin välillä. Pelkästä etu- ja kääntöpuolesta koostuva aineisto on helpoin tapaus. Kortti, jonka toiminta riippuu ulkoasumäärityksistä, korttipohjan logiikasta, kirjoitettavista vastauksista tai JavaScriptistä, pitää tarkistaa tuonnin jälkeen.

Myös kertaushistoria vaatii nimenomaisen valinnan viennissä. Ankin [vientiohjeen](https://docs.ankiweb.net/exporting.html) mukaan **Include Scheduling Information** eli ajoitustietojen sisällyttäminen määrää, tuleeko kertaushistoria pakettiin. Jos jätät sen valitsematta, Mochi ei voi palauttaa historiaa, jota `.apkg` ei koskaan sisältänyt.

Vaikka historia siirtyisi, älä odota tulevien kertauspäivien pysyvän täsmälleen samoina. Sovellukset voivat käyttää eri ajoitusalgoritmeja, arvioita, tavoiteltua muistamistasoa, parametreja, oppimisvaiheita ja pakka-asetuksia. Säilytetyt tapahtumat antavat uudelle ajoitusalgoritmille lähtötietoja; ne eivät tee järjestelmistä samanlaisia.

## Sovelluksen omat varmuuskopiot ja siirrettävä teksti palvelevat eri tarkoituksia

Ennen kuin siirrät mitään, säilytä varmuuskopio, josta alkuperäisen järjestelmän voi palauttaa. Luettava vientitiedosto on hyödyllinen, mutta sitä ei aina voi käyttää palautukseen.

Mochin [varmuuskopiointiohje](https://mochi.cards/docs/getting-started/backing-up/) dokumentoi kaksi tapaa varmuuskopioida tiedot sovelluksen omassa muodossa:

- Koko käyttäjähakemiston kopioiminen säilyttää sisällön, kertaushistorian, liitteet, sovelluksen asetukset ja kirjautumistilan.
- `.mochi`-vienti säilyttää pakat, kortit, korttipohjat ja kentät, liitteet, tunnisteet ja metatiedot, kertaushistorian, korttien järjestyksen ja pakkojen rakenteen.

Mochin [Markdown- ja CSV-viennit](https://mochi.cards/docs/import-and-export/exporting/) on tarkoitettu tietojen siirtämiseen. Markdown-vienti luo yhden tiedoston kutakin korttia kohti ja kansiot alipakoille, mutta jättää pois kertaushistorian, korttien järjestyksen, korttipohjat ja metatietoina tallennetut tunnisteet, elleivät tunnisteet sisälly Markdowniin. CSV voi viedä korttipohjan kentät tai näytettävät etu- ja kääntöpuolet, mutta se ei säilytä kertaushistoriaa, korttipohjia eikä metatietoina tallennettuja tunnisteita, ellei tunnisteita ole sisällytetty sisältöön.

Ankissa on vastaava ero:

- `.colpkg` vie koko kokoelman ajoitustietoineen ja voi sisältää median. Sen tuonti korvaa kohteena olevan Anki-kokoelman kortit.
- `.apkg` vie yhden pakan ja sen alipakat. Ajoitustietojen, asetusprofiilien ja median sisällyttämisen voi valita.
- Pelkkänä tekstinä vietävissä muistiinpanoissa on sarkainerotellut kentät ja niiden sisällä HTML-muotoilu. Ne säilyttävät muokattavan sisällön, eivät koko kokoelman toimintaa.

Mochista takaisin Ankiin siirrytään yleensä CSV:n kautta. Anki osaa [kohdistaa tekstin sarakkeet muistiinpanon kenttiin](https://docs.ankiweb.net/importing/text-files.html), mutta Mochin linkit, useita puolia sisältävien korttien toiminta, korttipohjat ja kertaushistoria eivät muutu tiedoston avulla vastaaviksi Anki-rakenteiksi. Säilytä `.mochi`-vienti senkin jälkeen, kun Anki-kopio näyttää oikealta.

## Testaa edustavalla pakalla niin, että paluu onnistuu

Siirtoikkuna todistaa, että tiedosto hyväksyttiin. Se ei todista, että varsinainen kokoelmasi toimii yhä tai että saat käyttökelpoisen sisällön takaisin. Testaa molemmat suunnat ja pidä tavallinen Anki-profiilisi koskemattomana.

1. **Varmuuskopioi koko Anki-kokoelma.** Vie `.colpkg` medioineen ja säilytä se käytössä olevan profiilin ulkopuolella.
2. **Varmista, että varmuuskopio avautuu.** Luo tyhjä väliaikainen Anki-profiili ja tuo `.colpkg` siihen. Kokoelmapaketin tuonti korvaa kohdekokoelman, minkä vuoksi väliaikainen profiili on tärkeä.
3. **Rakenna edustava pakka väliaikaiseen profiiliin.** Pidä se niin pienenä, että voit tarkistaa jokaisen kortin, mutta sisällytä siihen tarvitsemasi toiminta: peruskortit ja käänteiset kortit, aukkotehtävät, mukautetut korttipohjat, CSS, JavaScript, kuvat, ääni, yhtälöt, tunnisteet, sisäkkäiset pakat ja kertaushistoria.
4. **Vie pakka `.apkg`-muodossa.** Sisällytä ajoitustiedot, asetusprofiilit ja media, kun niillä on merkitystä. Nämä valinnat lisäävät tiedot Anki-pakettiin; ne eivät takaa, että Mochi jäljentää jokaisen asetuksen.
5. **Tuo tiedosto uuteen Mochi-pakkaan.** Pidä päivittäisessä käytössä oleva Anki-profiili ja sen kertausjono ennallaan.
6. **Tarkista ennen kertaamista.** Vertaa sisältöä, muotoilua, kenttiä, mediaa, tunnisteita, pakkarakennetta ja historiaa. Kiinnitä erityistä huomiota kaikkeen, mikä riippui HTML:stä, CSS:stä, JavaScriptistä tai automaattisesti muodostettavista korttiversioista.
7. **Valitse ajoitusalgoritmi tietoisesti.** Mochi aloittaa omalla algoritmillaan. Ota FSRS käyttöön vain, jos aiot käyttää sitä myös kokeilun jälkeen.
8. **Kertaa kopiota yhden tavallisen viikon ajan.** Arvioi Markdown-muokkauksen sujuvuutta, New cards -vaihetta, Remembered/Forgot-valintaa, offline-toimintaa ja, jos maksoit siitä, synkronointia oikeasti mukana kuljettamillasi laitteilla.
9. **Testaa paluureitti.** Vie Mochin testipakka `.mochi`-muotoon sovelluksen omaksi varmuuskopioksi ja CSV-muotoon Ankia varten. Käytä kenttien arvot sisältävää CSV:tä, kun kenttien uudelleenkäyttö on tärkeää. Käytä näytettävät puolet sisältävää CSV:tä, kun tarvitset lähinnä näkyvän etu- ja kääntöpuolen sisällön. Tuo CSV toiseen tyhjään Anki-profiiliin ja kohdista sen sarakkeet sopivaan muistiinpanotyyppiin.
10. **Kirjaa jokainen hyväksymäsi menetys.** Tarkista meno- ja paluureitti erikseen. Tarkka ulkoasu, useita puolia sisältävien korttien toiminta, lisäosien toiminta, automaattisesti muodostettavat korttiversiot, kertausarviot, historia tai tulevat kertauspäivät voivat olla arjessa tärkeämpiä kuin vertailutaulukossa näytti.

CSV:n kautta palaaminen siirtää sisällön, mutta ei palauta Mochia kokonaisuudessaan: mukana eivät siirry kertaushistoria, korttipohjat tai metatietoina tallennetut tunnisteet, ellei tunnisteita ole sisällytetty sisältöön. Jos Mochi ei ratkaise nimeämääsi ongelmaa, poista testipakka ja jatka alkuperäisellä Anki-profiililla. Jos ratkaisee, siirrä yksi oikea pakka kerrallaan ja säilytä Ankin `.colpkg`- ja Mochin `.mochi`-varmuuskopiot usean tavallisen kertauskierroksen ajan.

## Kenelle Mochin oppimiskortit sopivat?

Mochi on hyvä valinta, kun:

- käytät Markdownia jo kirjoittamiseen ja ajattelun jäsentämiseen;
- muistiinpanot ja kertauskortit kuuluvat samaan linkitettyyn työtilaan;
- haluat yksinkertaisen Remembered/Forgot-valinnan neljän arvion sijaan;
- yhden laitteen offline-käyttö kattaa ilmaisen työnkulkusi tai Pro-synkronointi on 5 Yhdysvaltain dollarin kuukausihinnan arvoinen;
- kokoelmasi on uusi tai riittävän yksinkertainen, jotta muunnos Ankista on vähäriskinen.

Pysy Ankissa, kun:

- muistiinpanotyyppisi muodostavat useita tärkeitä korttiversioita;
- HTML/CSS-korttipohjat, JavaScript, lisäosat tai jaetut pakat ovat osa järjestelmääsi;
- ilmainen synkronointi laitteiden välillä on tärkeämpää kuin Markdownilla kirjoittaminen;
- haluat Ankin FSRS-optimoijan, asetusprofiilien säädöt, neljä arviota ja työmääräsimulaattorin;
- vuosien kertaustiedot ja mukautetut toiminnot palvelevat sinua jo hyvin.

Järkevin vaihtoehto Mochille riippuu siitä, miksi kumpikaan näistä ei sovi. Jos aloitat uuden, yksinkertaisemman kokoelman, [Nibomon ominaisuuksiin](/fi/features/) kuuluvat FSRS-kertaukset, offline-opiskelu ja synkronointi, korttien, tunnisteiden ja median siirto, agenttien käyttömahdollisuus ja dokumentoitu tapa ylläpitää palvelua itse. Kehitän sitä itse, ja sen rajat ovat olennaisia: se ei korvaa Mochin linkitettyä Markdown-muistikirjaa eikä Ankin pitkälle kehittynyttä korttipohja- ja lisäosajärjestelmää. [Aloitusopas](/docs/getting-started/) esittelee nykyiset tavat käyttää ylläpidettyä palvelua, mobiilisovelluksia ja agentteja sekä ylläpitää järjestelmää itse.

## Lopuksi

Mochi on enemmän kuin kauniimpi Anki-käyttöliittymä. Sen varsinainen ajatus on, että Markdown-muistiinpano, linkitetty tietomerkintä ja aikavälikertauksen kortti voivat olla sama asia. Ilmaisversio kattaa offline-työskentelyn ilman tiliä; Pro lisää ylläpidetyt palveluominaisuudet, kuten laitteiden välisen synkronoinnin.

Tämä on toimiva kompromissi oppijalle, joka aloittaa uuden Markdowniin keskittyvän kokoelman. Myös Ankista vaihtaminen voi kannattaa, jos edustavalla pakalla tehty testi osoittaa, että Markdownin suora tuki ja kaksivaihtoehtoinen kertaus helpottavat opiskelua käytännössä.

Pitkään Ankia käyttäneen kohdalla vaihtamisen hyöty pitää osoittaa. Varmuuskopioi kokoelma, testaa eniten mukautettua toimintaa sisältävät kortit ja pysy Ankissa, ellei Mochi paranna viikoittaista työnkulkuasi niin paljon, että kannattaa luopua juuri niistä muotoilun, korttipohjien, ajoituksen ja ekosysteemin ominaisuuksista, jotka siirrossa jäävät taakse.
