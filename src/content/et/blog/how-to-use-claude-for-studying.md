---
title: "Kuidas kasutada Claude'i õppimiseks 2026. aastal: praktiline töövoog"
description: "Õpi Claude'iga oma märkmete põhjal, vasta ühele küsimusele korraga, kontrolli parandusi ja tee lünkadest õpikaarte, järgides kursuse tehisintellekti reegleid."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "kuidas kasutada Claude'i õppimiseks"
  - "Claude õppimiseks"
  - "Claude'iga õppimise töövoog"
  - "Claude õpijuhendajana"
  - "Claude'i õpikaardid"
  - "Claude'i õpperežiim Learning mode"
---

Kui tahad teada, **kuidas kasutada Claude'i õppimiseks**, alusta väikese koguse kursusemärkmetega. Kontrolli, mida need märkmed tõendavad, ja vasta ühele küsimusele korraga enne abi nägemist. Kontrolli parandused üle ning salvesta lüngad, mida pead uuesti harjutama. Viimase sammu jaoks soovitan [Nibomo pluginat Claude'ile](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): see annab Claude'ile töövood õpikaartide loomiseks, õigel ajal kordamiseks ja segadust tekitavate kaartide parandamiseks.

Kasulik ring on **allika kontroll → vastamine mälu järgi → kontrollimine → salvestamine → kordamine õigel ajal**. Tavalised õppimisjuhised toimivad harilikus Claude'i vestluses; plugin seob selle õppimiskorra salvestatud kaartide ja kordamisgraafikuga.

> **Seotus tootega:** olen Kirill Markin ja arendan [Nibomot](/et/features/). Selle artikli uurimistöös ja toimetamisel kasutati tehisintellekti abi.

**Faktid kontrollitud:** 22. oktoobril 2026.

![Õppelaud, kus allikamärkmed on seotud ühe küsimuse ja kahe kontrollitud teadmistelünka käsitleva õpikaardiga ning ebaselge märge on kõrvale tõstetud](/blog/how-to-use-claude-for-studying-v2.png)

## Claude'iga õppimise lühike töövoog

Kasuta seda ringi ühe loenguosa, lugemismaterjali või harjutuste komplekti jaoks:

1. Kontrolli, milleks sinu kursusel tehisintellekti kasutada tohib.
2. Anna Claude'ile väike, selgelt määratletud kogus allikmaterjali.
3. Palu tal enne õpetamist välja tuua puuduv, vastuoluline või loetamatu teave.
4. Vasta mälu järgi ühele küsimusele korraga.
5. Pane kirja parandus, selle asukoht allikas ja kõik ebakindlused.
6. Kontrolli olulisi vastuseid ise.
7. Salvesta mõni kontrollitud ja pikemaajaliselt oluline lünk Nibomos õpikaardina.
8. Korda salvestatud kaarte siis, kui nende kordamisaeg kätte jõuab, kas Claude'is või Nibomo rakenduses.

Järjekord on oluline. Ebaselge allika põhjal küsimustele vastamine muudab ebaselguse märkamise üksnes raskemaks.

## Seadista Nibomo Claude'is

Ava [Nibomo plugin](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) või mine jaotisse **Customize → Plugins**, otsi Nibomo ja klõpsa **Add**. Kui plugin on juba paigaldatud, veendu, et see on lubatud.

Ühenda pluginaga kaasas olev Nibomo konnektor. Järgi sisselogimise juhiseid, logi oma Nibomo kontole sisse või loo konto ning anna Claude'ile juurdepääsuluba. Kui seda küsitakse, vali soovitud tööruum. Selle viisi puhul pole vaja API-pääsmikku kopeerida ega serveri URL-i sisestada.

Plugin annab kaartide loomise, kordamise ja parandamise töövood. Selle MCP-konnektor võimaldab Claude'il sinu Nibomo kontolt andmeid lugeda ja neid uuendada. [Konnektori leiad ka Claude'i kataloogist](https://claude.ai/directory/nibomo). Ühendust selgitavad lähemalt meie [Claude'iga ühendamise juhend](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (inglise keeles) ja [MCP-konnektori teatmik](/et/docs/mcp-connector/).

Anthropic pakub praegu [pluginaid Pro, Max, Team ja Enterprise'i pakettides](https://support.claude.com/en/articles/13837440-use-plugins-in-claude): Claude'i veebiversioonis, Claude Desktopi vahekaardil Chat ja Coworkis. Kui sinu kontol pole pluginaid, saad siiski kasutada allolevaid õppimisjuhiseid ja kopeerida valitud kaardid käsitsi oma kordamisrakendusse.

## Kontrolli kursuse reegleid enne esimest üleslaadimist

Alusta ainekavast, ülesande juhistest ja oma õppeasutuse tehisintellekti kasutamise korrast. Reeglid võivad kursuste ja ülesannete lõikes erineda, seega pane kirja, mis on selle konkreetse ülesande puhul lubatud: selgitused, harjutusküsimused, tagasiside, kavandi koostamine, abi viitamisel või mitte ükski neist.

Anthropicu [Claude for Educationi juhend üliõpilastele](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) loetleb õppeotstarbeliste kasutusviisidena selgitused, harjutusküsimused, õppematerjalid ja õpikaardid. Sama juhend ütleb, et tuleb järgida õppeasutuse akadeemilise aususe reegleid ning mitte kasutada Claude'i tööks, mille peaksid tegema iseseisvalt.

Praktikas tähendab see järgmist:

- Kasuta Claude'i mõistete harjutamiseks, kui juhendamine ja harjutamine on lubatud.
- Ära palu tal lahendada käimasolevat hinnatavat ülesannet, mille pead tegema üksi.
- Ära laadi üles konfidentsiaalset, isiklikku, autoriõigusega kaitstud või piiratud kasutusega kursusematerjali, kui sul pole luba seda teenusega jagada.
- Kui reeglid on ebamäärased, küsi õppejõult enne hinnatava töö alustamist.

Tee oma töö ise. Tagasiside pärast sinu enda katset võib olla lubatud õpiabi; Claude'i töö esitamine enda omana võib rikkuda kursuse reegleid.

## Pane õiged failid õigesse kohta

Lühikeseks õppimiskorraks piisab ühest vestlusest. Pikemaks kursuseks loo üks Claude'i projekt ja lisa sinna ainult selle kursuse materjal.

[Claude'i projektid](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) on saadaval kõigile kasutajatele, kusjuures Free-kontodega saab praegu luua kuni viis projekti. Lisa täpsed kursusefailid ja õppimisjuhised projekti teadmistebaasi, et need oleksid kättesaadavad selle eri vestlustes.

Kui mälu on lubatud, võib projekt kanda vestluste vahel edasi ka meelde jäetud konteksti. Käsitle seda õppimise taustana, mitte autoriteetse vestlusprotokolli või allikafailide asendajana. Hoia tõendid ja edaspidi vajalikud parandused projekti teadmistebaasis ning palu Claude'il viidata algmaterjalile.

Claude'i [failide üleslaadimise dokumentatsioon](https://support.claude.com/en/articles/8241126-upload-files-to-claude) loetleb praegu vormingud PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON ja XLSX ning pildid vormingutes JPEG, PNG, GIF ja WebP. XLSX-failide üleslaadimiseks peab koodi käivitamine ja failide loomine olema lubatud. Võid lisada faili ühte vestlusse või hoida seda korduvaks kasutamiseks projekti jaotises Files.

Kasuta väikseimat kasulikku materjalikogust: üht loengut, peatüki üht osa või küsimusi, millele just valesti vastasid. Määra juhises piir, näiteks „slaidid 8–17” või osa pealkirjaga „Geneetiline aheldatus”. Väiksemast materjalikogusest on tõendeid lihtsam leida ja materjalide tahtmatut segiajamist kergem märgata.

Anthropic tutvustas [**Learning mode'i** Claude for Educationi projektides](https://www.anthropic.com/news/introducing-claude-for-education) sokraatilise juhendamisviisina, mis palub üliõpilastel arutleda, selle asemel et kohe vastused ette anda. See võib olla sulle kättesaadav, kui sinu ülikool pakub Claude for Educationit, kuid ära eelda, et see on olemas igal isiklikul Claude'i kontol. Allolevad juhised aitavad luua sarnase küsimustel põhineva õppimiskorra tavalises vestluses.

## Palu Claude'il enne õpetamist ebaselgused välja tuua

Loenguslaidil seisab „kromosoomid lahknevad”, kuid pole täpsustatud, millised. Kui Claude täidab selle lünga vaikselt üldteadmiste põhjal, võid hakata harjutama kindlas kõneviisis esitatud vastust, millele sinu allikas tegelikult alust ei andnud.

Lisa materjal, määra täpsed piirid ja palu esmalt allikad üle vaadata:

```text
Kasuta selle õppimiskorra jooksul ainult minu nimetatud faile ja osi. Ära täida
lünki üldteadmistega, kui ma seda selgesõnaliselt ei palu.

Enne minu juhendamist koosta allikaülevaade, mis sisaldab:
- mõisteid, mida materjal selgelt seletab;
- termineid, jooniseid või lõike, mis on mitmetähenduslikud või puudulikud;
- teksti, valemeid, tähiseid või lehekülgi, mida sa ei suuda usaldusväärselt lugeda;
- vastuolusid esitatud allikate vahel;
- eelteadmisi, mida materjal eeldab, kuid ei selgita.

Lisa iga kirje juurde faili nimi ning lehekülg, slaid või pealkiri. Märgista
kõik, millel puudub otsene alus allikas, sõnaga TÕENDAMATA. Ära veel küsimusi esita.
```

Võrdle ülevaadet failidega. Kui Claude väidab, et definitsioon on slaidil 12, ava slaid 12. Kui diagrammi tähis on loetamatu, kleebi vajalik tekst või laadi üles selgem pilt. Kui kaks kursuseallikat on vastuolus, jäta see vastuolu nähtavale ja küsi õppejõult või kasuta allikat, mille kursus määrab otsustavaks.

Välise selgituse võid küsida hiljem. Hoia see eraldi:

```text
Kursuse allikas ei selgita seda eelteadmist. Selgita seda üldteadmiste põhjal
jaotises pealkirjaga VÄLJASPOOL KURSUSEMATERJALI. Ära esita seda selgitust nii,
nagu pärineks see minu failidest.
```

See märgistus aitab vältida olukorda, kus taustateadmistest saavad märkamatult kursuse allikapõhised tõendid.

## Küsi üks küsimus ja oota vastust

Kui allikaülevaade tundub korrektne, alusta meenutamisharjutusi: sõnasta vastus enne selle nägemist, selle asemel et Claude'i näidatud ladusat selgitust lihtsalt ära tunda.

```text
Juhenda mind ainult allikaülevaates oleva tõendatud materjali põhjal.

Esita üks küsimus korraga ja oota minu vastust. Ära lisa küsimusse vihjeid.
Pärast minu vastust:
1. anna hinnang: Õige, Osaliselt õige, Vale või Allikas ebaselge;
2. anna lühike tagasiside täielikku vastust avaldamata;
3. viita toetavale failile ning leheküljele, slaidile või pealkirjale;
4. kui mu vastus on osaliselt õige või vale, anna vihje ja lase mul enne
   täieliku vastuse näitamist uuesti proovida;
5. lisa lünkade loendisse ainult tegelik puudujääk.

Kui allikas on ebaselge, märgi küsimus kontrollimist vajavaks, selle asemel et
paluda mul uuesti proovida.

Vahelda otsest meenutamist, sarnaste ideede eristamist ja lühikesi rakendusülesandeid.
Ära veel õpikaarte koosta. Peatu pärast 10 küsimust ja näita loendit.
```

Üks küsimus korraga väldib hilisematest küsimustest saadavaid vihjeid ja teeb iga katse hindamise lihtsamaks. Kümnest küsimusest koosnevas loendis on lihtne ebamugavad vahele jätta või vastata ainult neile osadele, mida juba tead.

Palu Claude'il ka küsimuste tüüpe vaheldada. Definitsioonid toovad välja puuduvad terminid. Võrdlused näitavad mõisteid, mida segi ajad. Väikesed rakendusülesanded näitavad, kas oskad ideed kasutada, mitte üksnes selle sõnastust korrata. Mitmesammulise arvutuse puhul lahenda ülesanne paberil ja näita samme; ainult lõpparv annab Claude'ile vea põhjuse leidmiseks väga vähe teavet.

## Pea tõendite ja ebakindluste loendit

Lünkade loend peaks näitama, millel järeldused põhinevad, mitte olema lihtsalt punktitabel. Kasuta väikest tabelit:

| Küsimus | Sinu vastus | Hinnang | Parandus | Tõend | Ebakindlus | Järgmine samm |
| --- | --- | --- | --- | --- | --- | --- |
| Mis lahkneb anafaasis I? | Õdekromatiidid | Vale | Homoloogilised kromosoomid lahknevad; õdekromatiidid jäävad ühendatuks | Loeng 4, slaid 18 | Puudub | Proovi uuesti, seejärel kaalu üht kaarti |

Palu Claude'il kirjutada „Allikas ebaselge”, kui tõendid ei võimalda vastust kindlaks teha. Ära muuda seda rida päheõpitavaks teadmiseks. Lahenda ebaselgus kõigepealt.

Ebakindluse veerg aitab tabada ka vähem ilmseid probleeme: joonist, mida Claude ei suutnud lugeda, terminit, mida õppejõud kasutab õpikust erinevalt, või järeldust, mis sõltub väljaütlemata eeldusest. „Tõenäoliselt õige” ja „slaidiga 18 toetatud” ei tähenda sama asja.

## Näide: juhendav tekst ja üks kaart pikemaks kordamiseks

Oletame, et esitatud kursusemärkmes seisab:

> Anafaasis I liiguvad homoloogilised kromosoomid vastaspoolustele. Õdekromatiidid jäävad tsentromeeride kaudu ühendatuks.

Claude küsib: „Mis lahkneb anafaasis I?” Sina vastad: „Õdekromatiidid.”

Kasulik juhendav tagasiside on lühike ja konkreetne:

```text
Vale. Õdekromatiidid jäävad anafaasis I ühendatuks. Vaata neid kahte lauset
uuesti: mis liigub vastaspoolustele?
```

Kui sinu esitatud materjal käsitleb ka anafaasi II, võib Claude pärast uut katset neid kahte võrrelda. See selgitus kuulub juhendavasse vestlusse. Teadmine, mida tasub edaspidi korrata, on kitsam:

```text
Esikülg: Mis lahkneb meioosi anafaasis I?
Tagakülg: Homoloogilised kromosoomid; õdekromatiidid jäävad ühendatuks.
Tõend: Loeng 4, slaid 18
```

Ühest veast sai üks konkreetne kaart, mille vastust saab hinnata. Vihje, uus katse, selgitus ja julgustus täitsid oma ülesande sel hetkel; kõiki neid pole vaja tulevastesse kordamistesse kaasa võtta.

## Kontrolli parandust enne selle usaldamist

Claude võib vastuse kindlana kõlama panna ka siis, kui loeb faili valesti, toob sisse väliseid teadmisi või aktsepteerib ebamäärast vastust. Kontrollimise viis peaks vastama väitele:

1. **Kursusepõhised faktid:** ava viidatud lehekülg või slaid ja võrdle ise sõnastust, tingimusi ning erandeid.
2. **Lahendatud ülesanded:** tee sammud iseseisvalt uuesti läbi, kontrolli ühikuid ja märke ning võrdle seejärel ametlike vastuste või õppejõu juhistega, kui need on olemas.
3. **Ajakohased faktid:** kui sinu mudelil ja kontol on veebiotsing saadaval, palu Claude'il otsida ja viidata algallikatele. Ava lingid; viited võimaldavad kontrollida, kuid ei tee kontrolli automaatselt ära.
4. **Oluliste tagajärgedega või vaieldavad küsimused:** kasuta kohustuslikku õpikut, kursuse õppejõude või muud allikat, mida kursusel usaldusväärseks peetakse.

Anthropicu [veebiotsingu juhend](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) ütleb, et otsinguvastused sisaldavad viiteid, ning soovitab olulist teavet usaldusväärsete allikatega võrrelda. Otsingu kättesaadavus võib erineda; kui seda pole, kasuta usaldusväärset allikat otse, selle asemel et lasta Claude'il oletada.

Kasulik kontrollijuhis on tahtlikult range:

```text
Vaata lünkade loend kriitiliselt üle. Anna iga paranduse kohta täpne asukoht
allikas ja lühike toetav väljavõte. Kui allikas vastust otseselt ei toeta,
muuda hinnanguks TÕENDAMATA. Loetle kõik vastused, mis sõltuvad välistest
teadmistest, järeldusest või loetamatust sisust. Ära täida neid lünki oletustega.
```

Seejärel vaata viidatud materjal ise üle. Claude aitab sul tõendeid leida, kuid ei asenda neid.

## Otsusta, mida tasub uuesti korrata

Iga parandus ei pea muutuma õpikaardiks. Mõne lünga täitmiseks on vaja lahenduskäiguga näidet, joonist, konsultatsiooni või veel üht harjutusülesannet.

Jäta õpikaardi kandidaat alles, kui see:

- pärineb vastusest, mille andsid valesti või aeglaselt või mille ajasid sarnase ideega segi;
- on oluline ka väljaspool praegust küsimust;
- on kontrollitav ühe selge küsimuse ja ühe lühikese vastusega;
- toetub allikale, mida oled kontrollinud;
- on mõistetav ka ilma kõrval oleva Claude'i vestluseta.

Jäta see kõrvale, kui:

- allikas ise on endiselt ebaselge;
- vastasid sellele kergesti ja järjekindlalt õigesti;
- küsimus nõuab tervet esseed või protsessi kirjeldust;
- vastus muutub sõltuvalt väljaütlemata tingimustest;
- oskuse harjutamisest oleks rohkem kasu kui ühe lause päheõppimisest.

Palu Claude'ilt kaardikandidaate, mitte valmis kaardipakki:

```text
Vaata kontrollitud lünkade loend üle. Paku kaarte ainult korduvate või oluliste
lünkade jaoks, mida saab üheselt kontrollida.

Pane igale kaardile üks meeldejäetav teadmine. Hoia iga esikülg konkreetne ja
iga tagakülg lühike. Lisa tõendi asukoht ning allesjäänud ebakindlus. Pane ainult
harjutamist vajavad lüngad eraldi loendisse koos sobiva harjutusega. Ära veel
midagi salvesta.
```

Ülejäänu jäta kõrvale. Claude'iga õppimisest võib kasu olla ka siis, kui sellest ei sünni ühtki kaarti.

## Salvesta kontrollitud lüngad Nibomosse

Kui oled tõendid üle kontrollinud, palu Nibomo pluginal luua valitud lünkadest õpikaardid ja need salvestada. Nimeta tööruum ja lase Claude'il enne uute kaartide lisamist olemasolevad üle vaadata. Järgmise juhisega palud kaarte enne salvestamist näha:

```text
Loo Nibomos ülaloleva kontrollitud lünkade loendi põhjal kuni 5 õpikaarti.
Kasuta soovitud tööruumi: [tööruumi nimi]. Kui nimi on mitmetähenduslik,
täpsusta enne salvestamist, millist tööruumi mõtlen.

Kontrolli olemasolevaid kaarte, et leida duplikaadid või sama teadmist
käsitlevad kaardid. Kasuta ainult lünki, mida toetavad minu kontrollitud
tõendid. Pane igale kaardile üks meeldejäetav teadmine, konkreetne küsimus,
lühike vastus ja allika asukoht.

Näita mulle esmalt pakutud kaarte, nende tõendeid ja leitud duplikaate.
Oota enne salvestamist minu heakskiitu. Pärast salvestamist kinnita,
mis loodi ja kuhu.
```

Eelvaade on selles juhises sinu valitud eelistus. Saad ise otsustada, kui põhjalikult tahad kaarte enne üle vaadata, kui palud Claude'il need salvestada või neid muuta; eelvaade pole iga pluginatoimingu nõue.

Pea meeles näites toodud eristust: selgitus aitas sul meioosist aru saada, salvestatud kaart aga kontrollib konkreetset erinevust, mille juures eksisid. Pikk juhendav vastus peab harva muutuma pikaks kaardiks.

## Korda Claude'is õpikaarte, mille kordamisaeg on kätte jõudnud

Uute üleslaaditud märkmete põhjal küsimustele vastamine on juhendav õppimiskord. Nibomo ajastatud kordamine kasutab juba salvestatud kaarte ja registreerib tulemuse, mis mõjutab iga kaardi järgmist kordamisaega. Küsi seda selgelt:

```text
Kasuta Nibomot, et korrata 10 minuti jooksul minu õpikaarte, mille kordamisaeg
on kätte jõudnud, tööruumis [tööruumi nimi]. Kasuta ajavööndit Europe/Paris.

Näita üht küsimust korraga ja oota minu vastusekatset enne salvestatud vastuse
avaldamist. Seejärel võrdle minu esialgset vastust kaardi vastusega, anna
lühike tagasiside ja salvesta sobiv meenutamishinnang. Ütle, millise hinnangu
salvestasid. Hinda esialgset katset, mitte parandatud vastust, mille annan
pärast õige vastuse nägemist. Lõpeta, kui aeg saab täis või pole enam kaarte,
mille kordamisaeg on kätte jõudnud, ja tee kokkuvõte kordamistest, mille Nibomo kinnitas.
```

Asenda tööruum ja ajavöönd enda omadega. Tavaliselt ütleb Claude oma hinnangu välja ja salvestab selle automaatselt. Kui tahad iga hinnangu ise valida, lisa: „Kasuta käsitsi hindamist: pärast vastuse avaldamist oota, kuni valin Again, Hard, Good või Easy, enne kui hinnangu salvestad.”

Kui vastad anafaasi I kaardile „õdekromatiidid”, ei muuda paranduse äratundmine pärast vastuse avaldamist esialgset katset õigeks. Hilisem küsimus anafaasi II kohta võib kontrollida, kas nüüd eristad neid kahte; see ei tohiks tagantjärele esimese vastuse hinnangut parandada.

Korrata saad ka [Nibomo rakenduses](https://app.nibomo.com/). Kinnitatud kordamised uuendavad sama graafikut nii rakenduses kui ka Claude'is, seega saad nende vahel vahetada ilma kahte kordamisajalugu pidamata. Palu Claude'il ebaõnnestunud või kinnitamata salvestamisest selgelt teada anda, mitte käsitleda seda salvestatud edusammuna.

## Paranda kaarte, mis tekitavad pidevalt segadust

Korduvad eksimused võivad osutada ebamäärasele küsimusele, liiga mahukale vastusele või puuduvale tingimusele. Palu Claude'il kaart üle vaadata, enne kui otsustad, et vajad lihtsalt rohkem kordamisi:

```text
Vaata Nibomo abil üle kaardid, mis mulle selle õppimiskorra jooksul segadust
tekitasid. Otsi ebamääraseid küsimusi, mitut meeldejäetavat teadmist ühel
kaardil, puuduvaid tingimusi, tõendamata vastuseid ja duplikaate. Võrdle
pakutud parandusi ülalolevate kursusematerjali tõenditega.

Näita praegust kaarti ja pakutud muudatust kõrvuti koos lühikese põhjenduse
ja allika asukohaga. Märgi kõik, mida tõendid ei võimalda kindlaks teha.
Oota enne muutmist minu heakskiitu; ära kustuta kaarte ega muuda veel
lahendamata faktiküsimusi.
```

Jäta kaart muutmata, kui küsimus on selge ja vastus lihtsalt ei meenunud. Kui lünga täitmiseks on vaja joonist või veel üht lahenduskäiguga näidet, mine tagasi juhendamise või vahetu harjutamise juurde.

Kui eelistad käsitsi kopeerimist, palu Claude'il esitada heakskiidetud kaardid lihtsate esi- ja tagakülje plokkidena ning lisa need oma tavapärasesse õpikaardirakendusse. Allikate kontroll ja küsimusele enne abi nägemist vastamine kehtivad endiselt.

## Kus Claude endiselt järelevalvet vajab

See meetod vähendab välditavaid vigu; see ei muuda Claude'i eksimatuks allikaks.

- Allikatega piiritletud vastus võib olla vale, kui allikas on vale.
- Failist eraldatud sisust võib kontekst kaduma minna, eriti jooniste, tabelite ja skannitud lehekülgede puhul.
- Claude võib avatud vastust hinnata liiga leebelt või liiga sõnasõnaliselt.
- Pikk juhendav vestlus võib algsetest piiridest eemalduda.
- Lihtsad vihjed võivad tekitada äratundmise ilma püsiva meenutamisoskuseta.

Kui vestlus kaldub kõrvale, alusta uuesti nimetatud allikast. Kui selgitus muutub, küsi uuesti täpset kohta allikas. Selliste oskuste puhul nagu tõestamine, esseede kirjutamine, hääldus, laboritöö või programmeerimine kasuta meenutamisküsimuste kõrval ka vahetut harjutamist ja inimeste tagasisidet.

## Viimane kontrollnimekiri Claude'iga õppimiseks

Enne õppimiskorra lõpetamist kontrolli, et:

- tehisintellekti kasutamine vastab selle kursuse ja ülesande reeglitele;
- Claude tõi välja kõik ebaselged, loetamatud või tõendamata kohad;
- vastasid ühele küsimusele korraga enne abi nägemist;
- iga parandus viitab tõendile, mille oled ise avanud;
- välised teadmised on kursusematerjalist eraldi märgistatud;
- lahendamata ebaselgusest ei saanud õpikaarti;
- salvestatud kaartideks sai vaid mõni kontrollitud ja pikemaajaliselt oluline lünk;
- kaardid salvestati soovitud tööruumi ilma tarbetute duplikaatideta;
- valisid ajastatud kordamisteks automaatse või käsitsi hindamise;
- hinnangud kajastavad sinu esialgset vastusekatset ja salvestatud kordamised said kinnituse;
- tead, kus järgmise ajastatud kordamise ajal jätkata.

**Claude õpijuhendajana** on kasulik siis, kui ta teeb enamat kui selgitab. Ta näitab, kus allikas enam vastust ei anna, ootab, kuni sa vastust meenutad, ja jätab sulle lühikese ülevaate sellest, kus sa tegelikult hätta jäid. Just see ülevaade, mitte vestluse pikkus, teeb Claude'iga õppimise töövoo kordamist väärt.
