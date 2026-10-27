---
title: "Näin tuot muistikortit Quizletiin Excelistä, Sheetsistä tai tekstistä"
description: "Tuo kaksisarakkeinen sanalista Quizletiin sarkaimilla ja rivinvaihdoilla. Korjaa katkenneet vastaukset, ylimääräiset kortit ja CSV-ongelmat ennen julkaisua."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "muistikorttien tuonti Quizletiin"
  - "Quizlet tuontimuoto"
  - "Quizlet tuonti Excelistä"
  - "Google Sheetsistä Quizletiin"
  - "Quizlet sarkaineroteltu tuonti"
---

”Red, green, blue” näyttää tavalliselta muistikortin vastaukselta. Mutta jos erotat termin ja määritelmän toisistaan pilkulla, samat pilkut tekevät rivistä monitulkintaisen. Muutama välimerkki voi muuttaa valmiin sanalistan korjaustyöksi.

Kun tuot muistikortteja Quizletiin Excelistä, Google Sheetsistä tai tekstistä, aloita kahdesta sarakkeesta: toiseen termit, toiseen määritelmät. Kopioi tiedot, liitä ne verkkosivuston tuontilomakkeeseen ja valitse kenttien erottimeksi sarkain ja korttien erottimeksi rivinvaihto. Kokeile ensin neljää riviä, jotta voit tarkistaa jokaisen parin ennen koko listan siirtämistä.

![Savenvalaja asettelee keraamiset kupit ja niihin sopivat aluslautaset omille riveilleen ennen siirtämistä hyllylle](/blog/how-to-import-flashcards-into-quizlet.png)

## Mistä Quizletin tuontilomake löytyy?

Quizletin verkkosivuston ohjeissa kenttien erottimina voi käyttää pilkkuja, sarkaimia tai viivoja ja korttien erottimina puolipisteitä tai rivinvaihtoja. [Viralliset tuontiohjeet](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) etenevät näin:

1. Kirjaudu sisään ja valitse **Create → Flashcard set** (luo → korttipakka).
2. Anna otsikko, valitse **Import** (tuo) ja liitä tekstisi.
3. Valitse syötettä vastaavat erottimet. Käytä näissä esimerkeissä asetuksia **Tab** (sarkain) ja **New line** (rivinvaihto).
4. Valitse **Import** ja sen jälkeen termien ja määritelmien kielet.
5. Tarkista kortit ennen kuin tallennat ja julkaiset pakan valitsemalla **Create**.

Ohjeet tarkistettiin 15. syyskuuta 2026. Alla olevat esimerkit selittävät, miten teksti valmistellaan ja tarkistetaan. Ne eivät kuvaa kirjautuneena tehtyä testiä.

## Aloita pienestä taulukkoalueesta

Laita Excelissä tai Google Sheetsissä yksi termi–määritelmäpari kullekin riville. Tässä on neljän kortin kokeilu:

| Termi | Määritelmä |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Kopioi kahdesta sarakkeesta vain neljä tietoriviä. Jos otsikot ovat rivillä 1, valitse **A2:B5**. Jätä otsikot kopioitavan alueen ulkopuolelle.

Tuloksena pitäisi olla neljä korttia, joissa termit ovat espanjaksi ja määritelmät englanniksi. Viimeisessä kortissa tekstin ”colores primarios de la luz” pitäisi säilyä kokonaisena toisella puolella ja tekstin ”red, green, blue” toisella. Pilkut kuuluvat vastaukseen.

Kun esimerkki on selvä, valmistele oma taulukkosi. Työskentele kopiossa, jotta alkuperäinen säilyy vertailua varten. Poista tyhjät rivit ja jätä muistiinpanot sekä ylimääräiset sarakkeet valinnan ulkopuolelle. Täydennä puuttuvat termit tai määritelmät ennen kopiointia.

Pidä sarakkeet yhdessä, kun lajittelet tietoja. Pelkkien termien lajittelu irrottaisi ne vastauksistaan. Silloin tuonnissa voisi syntyä oikea määrä kortteja, mutta parit olisivat silti väärin.

## Pelkkä teksti tarvitsee oikeat sarkaimet

Samat neljä riviä näyttävät tältä sarkaineroteltuna tekstinä. Termin ja määritelmän välissä on kullakin rivillä yksi sarkainmerkki:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Sarkain on oma merkkinsä. Usea välilyönti voi näyttää samalta, mutta ne eivät muodosta sarkainerotinta. Myöskään merkkien `\t` kirjoittaminen ei lisää sarkainta. Jos se on tekstieditorissasi hankalaa, laita parit taulukon kahteen sarakkeeseen ja kopioi solut.

Kunkin kortin pitää olla yhdellä fyysisellä rivillä. Pitkä määritelmä voi rivittyä näytöllä toiselle riville, koska ikkuna on kapea. Se ei lisää sisältöön rivinvaihtoa. Taulukon solun sisään lisätty rivinvaihto taas on osa sisältöä. Poista solujen sisäiset rivinvaihdot ennen kuin käytät rivinvaihtoja korttien erottimina.

Poista myös termien tai määritelmien sisällä olevat sarkaimet. Tässä muodossa sarkaimet kuuluvat vain kahden kentän väliin.

## Jos listasi on CSV-tiedostossa

Avaa CSV taulukkolaskentaohjelmassa ennen tuonnin valmistelua. Seuraavanlainen CSV-tietue sisältää kaksi kenttää, kun sitä tulkitaan CSV:n lainausmerkkisääntöjen mukaisesti:

```text
"colores primarios de la luz","red, green, blue"
```

Lainausmerkeissä oleva vastaus sisältää pilkkuja. Tekstikenttä, joka jakaa syötteen pilkkujen kohdalta, ei välttämättä osaa lukea CSV:tä. Älä siis luota siihen, että lainausmerkit suojaavat vastausta siellä.

Varmista Excelissä tai Google Sheetsissä, että tietue on täsmälleen kahdessa solussa. Kopioi sitten solut sarkaineroteltua tuontia varten. Jos vastaus on jakautunut ylimääräisiin sarakkeisiin, korjaa ensin taulukkolaskentaohjelman CSV-tuontiasetukset. Virheellisen rivin kopiointi siirtää virheen eteenpäin.

Tarkista myös arvot, joita taulukkolaskentaohjelma saattaa tulkita uudelleen. Jos `0012` on koodi, jota haluat opiskella, sen muuttuminen muotoon `12` muuttaa korttia. Vertaa tunnisteita, päivämääriä, lainausmerkkejä ja tarkkeita sisältäviä sanoja alkuperäiseen tiedostoon ennen alueen kopiointia.

## Kun kortit eivät vastaa rivejäsi

Etsi ensimmäinen poikkeama neljän kortin kokeilulla. Muuta yhtä asiaa kerrallaan ja vertaa tulosta sitten samoihin neljään lähderiviin.

| Oire | Todennäköinen erottimiin liittyvä ongelma | Korjaus |
| --- | --- | --- |
| Vastaus katkeaa pilkkujen kohdalta | Kenttien erottimeksi on valittu pilkku | Valmistele kaksi saraketta ja valitse Tab |
| ”well-being” katkeaa termin sisältä | Kenttien erottimeksi on valittu viiva | Säilytä yhdysmerkki ja erota kentät sarkaimella |
| Yhdestä vastauksesta tulee useita kortteja | Lähteessä on tekstin sisäisiä rivinvaihtoja | Laita vastaus yhdelle fyysiselle riville |
| ”Term” ja ”Definition” näkyvät korttina | Otsikkorivi kopioitiin mukaan | Valitse vain tietorivit |
| Molemmat kentät jäävät samalle puolelle | Sarkaimen sijaan on välilyöntejä | Kopioi kaksisarakkeinen taulukkoalue |

Esimerkiksi vastaus, jossa ”first stage” ja ”second stage” ovat eri riveillä, voisi olla muodossa `first stage; second stage`. Näin molemmat osat pysyvät yhdellä rivillä. Pidä korttien erottimena **New line**, kun käytät puolipistettä vastauksen sisällä.

Jos vaiheista kannattaa tehdä omat kysymyksensä, kirjoita sen sijaan kaksi kokonaista paria. [Opas parempien muistikorttien tekemiseen (englanniksi)](/blog/how-to-make-better-flashcards/) voi auttaa päätöksessä.

## Tarkista tulos ennen julkaisua

Tarkista kaikki neljä kokeilukorttia. Vertaa koko listan tuonnin jälkeen kortteja siistittyyn lähteeseen:

- Vastaako kokonaismäärä täydellisten tietorivien määrää?
- Täsmäävätkö ensimmäinen ja viimeinen pari kokonaisine vastauksineen?
- Säilyivätkö välimerkit, tarkkeet ja koodit muuttumattomina?
- Onko mukana tyhjiä puolia, otsikoita, kaksoiskappaleita tai vääriin termeihin yhdistettyjä vastauksia?
- Ovatko kaikki vastaukset edelleen ymmärrettäviä niissä kohdissa, joiden rivinvaihtoja muokkasit?

Lue epäilyttävien parien lisäksi myös muutama tavallinen pari. Pelkkä määrien täsmääminen ei paljasta väärää vastausta oikean termin yhteydessä. Jos jokin on pielessä, korjaa lähde ennen tuonnin toistamista. Säilytä siistitty tiedosto tulevia korjauksia varten.

## Valmiit parit vai tekoälyn luomat kortit?

Quizlet kuvaa myös korttien luomista annetusta aineistosta tekoälyn avulla [tekoälyavusteisen luonnin esittelyssään](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Luodun tekstin sisältö pitää tarkistaa erikseen. Kun termi–määritelmälista on valmis, tämä tuontitapa antaa mahdollisuuden verrata siirron tulosta jo kirjoittamiisi pareihin.

Aloitatko tekstikappaleista? [Muuta muistiinpanosi muistikorteiksi (englanniksi)](/blog/turn-notes-into-flashcards/) ennen tuontitekstin valmistelua. Siirrätkö pakkaa toiseen suuntaan? Käytä [Quizletin vientiopasta](/fi/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
