---
title: "Kā izmantot Claude mācībām 2026. gadā: praktiska pieeja"
description: "Mācies ar Claude no saviem pierakstiem, atbildi uz vienu jautājumu reizē, pārbaudi labojumus un veido kartītes par grūtākajām tēmām, ievērojot kursa MI noteikumus."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "kā izmantot Claude mācībām"
  - "Claude mācībām"
  - "mācīšanās ar Claude"
  - "Claude privātskolotājs"
  - "Claude mācību kartītes"
  - "Claude Learning Mode"
---

Ja vēlies saprast, **kā izmantot Claude mācībām**, sāc ar nelielu sava kursa pierakstu kopu. Pārbaudi, ko šie pieraksti pamato, un atbildi uz vienu jautājumu reizē, pirms ieraugi palīdzību. Pārbaudi labojumus, pēc tam saglabā zināšanu robus, pie kuriem jāatgriežas. Pēdējam solim iesaku [Nibomo spraudni darbam ar Claude](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): tas palīdz Claude veidot kartītes, atkārtot tās, kurām pienācis atkārtošanas laiks, un uzlabot neskaidras kartītes.

Noderīgais cikls ir **avota pārbaude → atbilde no atmiņas → pārbaude → saglabāšana → atkārtošana paredzētajā laikā**. Parastas mācību uzvednes darbojas ierastā Claude sarunā; spraudnis sasaista šo sesiju ar saglabātām kartītēm un atkārtošanas grafiku.

> **Atklātībai:** mani sauc Kirill Markin, un es izstrādāju [Nibomo](/lv/features/). Šī raksta izpētē un rediģēšanā izmantota MI palīdzība.

**Fakti pārbaudīti:** 2026. gada 22. oktobrī.

![Mācību darba galds, kur avotu pieraksti sasaistīti ar vienu jautājumu un divām pārbaudītām kartītēm par zināšanu robiem, bet neskaidrs pieraksts nolikts malā](/blog/how-to-use-claude-for-studying-v2.png)

## Īsa mācīšanās secība darbam ar Claude

Izmanto šo ciklu vienai lekcijas daļai, lasāmvielai vai uzdevumu kopai:

1. Pārbaudi, kā tavā kursā drīkst izmantot MI.
2. Iedod Claude nelielu, skaidri nosauktu avotu materiālu kopu.
3. Pirms skaidrošanas lūdz atzīmēt trūkstošu, pretrunīgu vai nesalasāmu informāciju.
4. Atbildi no atmiņas uz vienu jautājumu reizē.
5. Pieraksti labojumu, tā atrašanās vietu avotā un visas neskaidrības.
6. Būtiskās atbildes pārbaudi pats.
7. Saglabā Nibomo dažas kartītes par pārbaudītiem, ilgtermiņā svarīgiem zināšanu robiem.
8. Atkārto saglabātās kartītes paredzētajā laikā sarunā ar Claude vai Nibomo lietotnē.

Secībai ir nozīme. Ja zināšanas pārbauda pēc neskaidra avota, šo neskaidrību kļūst tikai grūtāk pamanīt.

## Iestati Nibomo darbam ar Claude

Atver [Nibomo spraudni](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) vai dodies uz **Customize → Plugins**, atrodi Nibomo un nospied **Add**. Ja tas jau ir instalēts, pārliecinies, ka tas ir ieslēgts.

Pievieno spraudnī iekļauto Nibomo savienotāju. Izpildi pierakstīšanās darbības: pieraksties savā Nibomo kontā vai izveido jaunu un atļauj Claude piekļuvi. Ja tiek prasīts, izvēlies paredzēto darbvietu. Šajā variantā nav jākopē API piekļuves tokens vai jāievada servera URL.

Spraudnis nodrošina kartīšu veidošanas, atkārtošanas un uzlabošanas darbplūsmas. Tā MCP savienotājs ļauj Claude lasīt un atjaunināt datus tavā Nibomo kontā. [Savienotājs ir atrodams arī Claude katalogā](https://claude.ai/directory/nibomo). Sīkāk savienojums aprakstīts mūsu [Claude savienošanas ceļvedī](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (angļu valodā) un [MCP savienotāja dokumentācijā](/lv/docs/mcp-connector/).

Anthropic pašlaik piedāvā [spraudņus Pro, Max, Team un Enterprise plānos](https://support.claude.com/en/articles/13837440-use-plugins-in-claude): Claude tīmekļa versijā, Claude Desktop cilnē Chat un Cowork. Ja tavā kontā spraudņi nav pieejami, vari izmantot tālāk dotās mācību uzvednes un atlasītās kartītes manuāli pārkopēt savā atkārtošanas lietotnē.

## Pirms pirmās augšupielādes pārbaudi kursa noteikumus

Sāc ar kursa programmu, uzdevuma norādījumiem un savas izglītības iestādes MI izmantošanas noteikumiem. Dažādos kursos un uzdevumos tie var atšķirties, tāpēc pieraksti, kas ir atļauts tieši šajā darbā: skaidrojumi, treniņjautājumi, atsauksmes, darba plāna veidošana, palīdzība ar atsaucēm vai nekas no minētā.

Anthropic [norādījumos studentiem par Claude for Education](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) skaidrojumi, treniņjautājumi, mācību ceļveži un kartītes minēti kā izmantošanas veidi mācībām. Tajos pašos norādījumos teikts ievērot iestādes akadēmiskā godīguma noteikumus un neizmantot Claude darbiem, kas jāveic patstāvīgi.

Tas nosaka praktiskas robežas:

- Izmanto Claude jēdzienu atkārtošanai, ja mācību palīdzība un vingrināšanās ir atļauta.
- Nelūdz tam atrisināt aktuālu pārbaudes darbu, kas tev jāpilda vienam.
- Neaugšupielādē konfidenciālus materiālus, personas datus, ar autortiesībām aizsargātus vai ierobežotas pieejamības kursa materiālus, ja tev nav atļaujas tos kopīgot ar šo pakalpojumu.
- Ja noteikumi ir neskaidri, pajautā pasniedzējam pirms vērtējamā darba sākšanas.

Darbs joprojām jāveic tev pašam. Atgriezeniskā saite pēc tava paša mēģinājuma var būt atļauts mācību atbalsts; Claude veidota darba iesniegšana kā sava var pārkāpt kursa noteikumus.

## Ievieto vajadzīgos failus pareizajā vietā

Īsai mācību sesijai pietiek ar atsevišķu sarunu. Ilgākam kursam izveido vienu Claude projektu un pievieno tikai uz šo kursu attiecināmos materiālus.

[Claude projekti](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) ir pieejami visiem lietotājiem; bezmaksas kontos pašlaik var būt ne vairāk kā pieci projekti. Pievieno konkrētos kursa failus un mācību norādījumus projekta zināšanu bāzei, lai tie būtu pieejami dažādās projekta sarunās.

Ja ir ieslēgta atmiņa, projekts var pārnest arī atcerēto kontekstu starp sarunām. Uztver šo atmiņu kā mācību kontekstu, nevis precīzu sarunas protokolu vai avotu failu aizstājēju. Pamatojumu un labojumus, kurus vajadzēs izmantot atkārtoti, glabā projekta zināšanu bāzē un lūdz Claude atsaukties uz sākotnējo materiālu.

Claude [failu augšupielādes dokumentācijā](https://support.claude.com/en/articles/8241126-upload-files-to-claude) pašlaik norādīti PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON un XLSX faili, kā arī JPEG, PNG, GIF un WebP attēli. Lai augšupielādētu XLSX failus, jābūt ieslēgtai koda izpildei un failu veidošanai. Failu var pievienot vienai sarunai vai glabāt projekta sadaļā Files, lai izmantotu atkārtoti.

Izvēlies mazāko noderīgo materiālu kopu: vienu lekciju, vienu nodaļas daļu vai jautājumus, kuros tikko kļūdījies. Uzvednē skaidri nosaki robežas, piemēram, «8.–17. slaids» vai «sadaļa ar nosaukumu Gēnu saistītā iedzimšana». Mazākā materiālu kopā ir vieglāk atrast pamatojumu un pamanīt nejaušu informācijas sajaukšanu.

Anthropic ieviesa [**Learning mode** Claude for Education projektos](https://www.anthropic.com/news/introducing-claude-for-education) kā vadītu, sokratisku mācīšanās veidu, kas mudina studentus spriest, nevis uzreiz dod atbildes. Tas var būt pieejams, ja tava universitāte nodrošina Claude for Education, taču nevajag pieņemt, ka tas ir katrā personīgajā Claude kontā. Tālāk dotās uzvednes ļauj līdzīgu, jautājumos balstītu sesiju izveidot parastā sarunā.

## Lūdz Claude atklāt neskaidrības pirms skaidrošanas

Lekcijas slaidā var būt rakstīts «hromosomas atdalās», nenorādot, kuras tieši. Ja Claude nemanāmi aizpilda šo robu ar vispārīgām zināšanām, tu vari sākt iegaumēt pārliecinoši formulētu atbildi, kuru tavs avots nemaz neapstiprina.

Pievieno materiālu, precīzi nosaki tā robežas un vispirms lūdz pārbaudīt avotus:

```text
Šajā mācību sesijā izmanto tikai manis nosauktos failus un sadaļas. Neaizpildi
robus ar vispārīgām zināšanām, ja vien es to nepārprotami nelūdzu.

Pirms sāc man palīdzēt mācīties, izveido avotu pārskatu, norādot:
- jēdzienus, kurus materiāls izskaidro skaidri;
- terminus, diagrammas vai fragmentus, kas ir neskaidri vai nepilnīgi;
- tekstu, formulas, apzīmējumus vai lapas, kuras nevari droši nolasīt;
- pretrunas starp iesniegtajiem avotiem;
- priekšzināšanas, kas vajadzīgas materiāla izpratnei, bet tajā nav izskaidrotas.

Katram punktam norādi faila nosaukumu un lapu, slaidu vai virsrakstu.
Visu, kam nav tieša pamatojuma, atzīmē kā NEPAMATOTS. Vēl nesāc zināšanu pārbaudi.
```

Salīdzini pārskatu ar failiem. Ja Claude apgalvo, ka definīcija ir 12. slaidā, atver 12. slaidu. Ja diagrammas apzīmējums nav salasāms, iekopē attiecīgo tekstu vai augšupielādē skaidrāku attēlu. Ja divi kursa avoti ir pretrunā, saglabā šo pretrunu redzamu un jautā pasniedzējam vai izmanto avotu, kuru kurss nosaka par autoritatīvu.

Vēlāk vari lūgt skaidrojumu no citiem avotiem. Turi to atsevišķi:

```text
Kursa avots neizskaidro šīs nepieciešamās priekšzināšanas. Izskaidro tās,
balstoties uz vispārīgām zināšanām, sadaļā ar atzīmi ĀRPUS KURSA MATERIĀLA.
Nepasniedz šo skaidrojumu tā, it kā tas būtu no maniem failiem.
```

Šī atzīme palīdz nepieļaut, ka fona zināšanas nemanāmi kļūst par kursa materiālos atrodamu pamatojumu.

## Viens jautājums, pēc tam pauze

Kad avotu pārskats šķiet uzticams, sāc vingrināt atcerēšanos: mēģini pats formulēt atbildi, pirms to ieraugi, nevis tikai atpazīsti glīti uzrakstītu skaidrojumu, ko Claude jau ir parādījis.

```text
Palīdzi man mācīties tikai to, kas avotu pārskatā ir pamatots ar materiālu.

Uzdod vienu jautājumu reizē un gaidi manu atbildi. Neiekļauj jautājumā mājienus.
Kad esmu atbildējis:
1. novērtē atbildi kā Pareizi, Daļēji pareizi, Nepareizi vai Avots ir neskaidrs;
2. sniedz īsu atgriezenisko saiti, neatklājot pilno atbildi;
3. norādi pamatojošo failu un lapu, slaidu vai virsrakstu;
4. ja atbilde ir daļēji pareiza vai nepareiza, dod mājienu un ļauj mēģināt vēlreiz,
   pirms rādi pilno atbildi;
5. zināšanu robu žurnālam pievieno tikai īstu robu.

Ja avots ir neskaidrs, atzīmē jautājumu pārbaudei, nevis liec man mēģināt vēlreiz.

Maini jautājumu veidus: tieša atcerēšanās, līdzīgu ideju atšķiršana un īsi
pielietojuma uzdevumi. Vēl neveido kartītes. Pēc 10 jautājumiem apstājies un parādi žurnālu.
```

Viens jautājums reizē neļauj nākamajiem jautājumiem dot priekšā pavedienus un padara katru mēģinājumu vieglāk novērtējamu. Saņemot uzreiz desmit jautājumu sarakstu, ir viegli izlaist neērtos vai atbildēt tikai uz zināmajām daļām.

Lūdz Claude mainīt arī jautājumu veidu. Definīcijas atklāj trūkstošos terminus. Salīdzinājumi parāda jēdzienus, kurus jauc. Nelieli pielietojuma uzdevumi rāda, vai spēj ideju izmantot, nevis tikai atkārtot tās formulējumu. Vairāku soļu aprēķinu risini uz papīra un parādi soļus; no gala skaitļa vien Claude nevar daudz secināt par kļūdas cēloni.

## Veido pamatojuma un neskaidrību žurnālu

Zināšanu robu žurnālam jāļauj izsekot pārbaudei, nevis tikai saskaitīt punktus. Izmanto nelielu tabulu:

| Jautājums | Tava atbilde | Vērtējums | Labojums | Pamatojums | Neskaidrība | Nākamais solis |
| --- | --- | --- | --- | --- | --- | --- |
| Kas atdalās anafāzē I? | Māsu hromatīdas | Nepareizi | Atdalās homologās hromosomas; māsu hromatīdas paliek savienotas | 4. lekcija, 18. slaids | Nav | Mēģināt vēlreiz, tad apsvērt vienu kartīti |

Lūdz Claude rakstīt «Avots ir neskaidrs», ja pieejamais pamatojums neļauj noteikt atbildi. Nepārvērt šādu ierakstu par iegaumējamu faktu. Vispirms atrisini neskaidrību.

Neskaidrību aile palīdz pamanīt arī mazāk acīmredzamas problēmas: diagrammu, kuru Claude nespēja nolasīt, terminu, ko pasniedzējs lieto citādi nekā mācību grāmata, vai secinājumu, kas atkarīgs no neizteikta pieņēmuma. «Droši vien pareizi» un «pamatots ar 18. slaidu» nav viens un tas pats vērtējums.

## Piemērs: skaidrojums sarunā un viena ilgtermiņā noderīga kartīte

Pieņemsim, ka iesniegtajā kursa pierakstā teikts:

> Anafāzē I homologās hromosomas pārvietojas uz pretējiem poliem. Māsu hromatīdas paliek savienotas centromēru vietās.

Claude jautā: «Kas atdalās anafāzē I?» Tu atbildi: «Māsu hromatīdas.»

Noderīga atgriezeniskā saite ir īsa un konkrēta:

```text
Nepareizi. Anafāzē I māsu hromatīdas paliek savienotas. Vēlreiz apskati abus
teikumus: kas pārvietojas uz pretējiem poliem?
```

Ja iesniegtais materiāls aptver arī anafāzi II, pēc atkārtota mēģinājuma Claude var tās salīdzināt. Šim skaidrojumam ir vieta mācību sarunā. Turpmākai atkārtošanai pietiek ar konkrētāku jautājumu:

```text
Priekšpuse: Kas atdalās mejozes anafāzē I?
Aizmugure: Homologās hromosomas; māsu hromatīdas paliek savienotas.
Pamatojums: 4. lekcija, 18. slaids
```

Viena kļūda radīja vienu konkrētu kartīti, kuras atbildi var skaidri novērtēt. Mājiens, atkārtotais mēģinājums, skaidrojums un iedrošinājums bija noderīgi tajā brīdī; tiem visiem nav jānāk līdzi uz turpmāko atkārtošanu.

## Pārbaudi, pirms uzticies labojumam

Claude var pasniegt atbildi kā drošu arī tad, ja ir nepareizi nolasījis failu, pievienojis ārējas zināšanas vai pieņēmis neskaidru atbildi. Pārbaudes veidam jāatbilst apgalvojumam:

1. **Kursam specifiski fakti:** atver norādīto lapu vai slaidu un pats salīdzini formulējumu, nosacījumus un izņēmumus.
2. **Atrisināti uzdevumi:** patstāvīgi atkārto soļus, pārbaudi mērvienības un zīmes, pēc tam salīdzini ar oficiālajām atbildēm vai pasniedzēja norādījumiem, ja tie ir pieejami.
3. **Aktuāli fakti:** ja tavam modelim un kontam ir pieejama tīmekļa meklēšana, lūdz Claude meklēt un norādīt pirmavotus. Atver saites; atsauces ļauj pārbaudīt, taču neveic pārbaudi tavā vietā.
4. **Jautājumi ar nopietnām sekām vai strīdīgi jautājumi:** izmanto kursā noteikto mācību grāmatu, vērsies pie pasniedzējiem vai pie cita kursā atzīta autoritatīva avota.

Anthropic [tīmekļa meklēšanas ceļvedī](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) teikts, ka meklēšanā balstītās atbildes ietver atsauces, un ieteikts svarīgu informāciju pārbaudīt autoritatīvos avotos. Meklēšanas pieejamība var atšķirties; ja tā nav pieejama, izmanto uzticamu avotu tieši, nevis ļauj Claude minēt.

Noderīga pārbaudes uzvedne ir apzināti stingra:

```text
Pārbaudi zināšanu robu žurnālu. Katram labojumam norādi precīzu vietu avotā un
īsu fragmentu, kas to pamato. Ja avots atbildi tieši nepamato, maini vērtējumu
uz NEPAMATOTS. Uzskaiti visas atbildes, kas atkarīgas no ārējām zināšanām,
secinājuma vai nesalasāma satura. Neaizpildi šos robus ar minējumiem.
```

Pēc tam pats apskati norādīto materiālu. Claude palīdz atrast pamatojumu, nevis to aizstāj.

## Izlem, ko ir vērts atkārtot

Ne katram labojumam jākļūst par kartīti. Dažu robu novēršanai vajadzīgs soli pa solim atrisināts piemērs, diagramma, pasniedzēja konsultācija vai vēl viens praktisks uzdevums.

Paturi kartītes kandidātu, ja tas:

- radies no atbildes, kurā kļūdījies, atbildēji lēni vai sajauci to ar līdzīgu ideju;
- ir nozīmīgs arī ārpus pašreizējā jautājuma;
- ir pārbaudāms ar vienu skaidru jautājumu un vienu īsu atbildi;
- ir pamatots ar avotu, kuru esi pārbaudījis;
- būs saprotams arī bez Claude sarunas blakus.

Izlaid to, ja:

- pats avots joprojām ir neskaidrs;
- tu atbildēji viegli un atkārtoti pareizi;
- jautājums prasa veselu eseju vai visu procesa aprakstu;
- atbilde mainās atkarībā no nenorādītiem nosacījumiem;
- prasmes vingrināšana palīdzētu vairāk nekā teikuma iegaumēšana.

Lūdz Claude ieteikt kandidātus, nevis uzreiz izveidot gatavu kartīšu komplektu:

```text
Pārskati pārbaudīto zināšanu robu žurnālu. Ierosini kartītes tikai atkārtotiem
vai svarīgiem robiem, kurus var skaidri pārbaudīt.

Katrā kartītē iekļauj vienu iegaumējamu vienību. Priekšpusei jābūt konkrētai,
aizmugurei — īsai. Pievieno pamatojuma atrašanās vietu un visas atlikušās
neskaidrības. Robus, kam vajadzīga tikai praktiska vingrināšanās, ievieto
atsevišķā sarakstā ar piemērotu uzdevumu. Vēl neko nesaglabā.
```

Pārējo atmet. Mācību sesija ar Claude var būt noderīga arī tad, ja tajā nerodas neviena kartīte.

## Saglabā Nibomo kartītes par pārbaudītajiem zināšanu robiem

Kad esi pārbaudījis pamatojumu, lūdz Nibomo spraudnim izveidot un saglabāt kartītes par atlasītajiem zināšanu robiem. Nosauc darbvietu un lūdz Claude pārbaudīt esošās kartītes pirms jaunu pievienošanas. Šajā uzvednē ir lūgts parādīt priekšskatījumu pirms saglabāšanas:

```text
Izmanto Nibomo, lai izveidotu līdz 5 kartītēm no iepriekšējā pārbaudīto zināšanu
robu žurnāla. Izmanto manu paredzēto darbvietu: [darbvietas nosaukums]. Ja
nosaukums ir neskaidrs, pirms saglabāšanas precizē, kura darbvieta domāta.

Pārbaudi esošās kartītes, meklējot dublikātus un kartītes par to pašu iegaumējamo
vienību. Izmanto tikai robus, kurus pamato manis pārbaudītie avoti. Katrā kartītē
iekļauj vienu iegaumējamu vienību: konkrētu priekšpusi, īsu aizmuguri un vietu avotā.

Vispirms parādi ierosinātās kartītes, to pamatojumu un atrastos iespējamos
dublikātus. Pirms saglabāšanas sagaidi manu apstiprinājumu. Pēc saglabāšanas
apstiprini, kas un kur tika izveidots.
```

Priekšskatījums ir tava izvēle, ko nosaki šajā uzvednē. Vari izvēlēties, cik rūpīgi vēlies pārskatīt kartītes, pirms lūdz Claude tās saglabāt vai rediģēt; tā nav prasība katrai spraudņa darbībai.

Paturi prātā piemēra atšķirību: skaidrojums palīdzēja saprast mejozi, bet saglabātā kartīte pārbauda konkrēto atšķirību, kurā kļūdījies. Garai mācību atbildei reti jākļūst par garu kartīti.

## Atkārto kartītes paredzētajā laikā sarunā ar Claude

Jautājumi par tikko augšupielādētiem pierakstiem ir mācību sesija. Nibomo plānotajā atkārtošanā izmanto jau saglabātās kartītes un reģistrē rezultātu, kas ietekmē to, kad katra kartīte atgriezīsies. Lūdz to nepārprotami:

```text
Izmanto Nibomo, lai 10 minūtes atkārtotu manas kartītes, kurām pienācis
atkārtošanas laiks, darbvietā [darbvietas nosaukums]. Izmanto Europe/Paris kā manu laika joslu.

Rādi vienu jautājumu reizē un sagaidi manu mēģinājumu, pirms atklāj saglabāto
atbildi. Tad salīdzini manu sākotnējo mēģinājumu ar šo atbildi, sniedz īsu
atgriezenisko saiti un reģistrē atbilstošo atcerēšanās vērtējumu. Pasaki, kuru
vērtējumu reģistrēji. Vērtē sākotnējo mēģinājumu, nevis laboto atbildi, ko sniedzu
pēc atklāšanas. Apstājies, kad laiks beidzies vai vairs nav kartīšu, kurām pienācis atkārtošanas laiks,
un apkopo atkārtojumus, kuru reģistrēšanu Nibomo apstiprināja.
```

Aizstāj darbvietu un laika joslu ar savējām. Claude parasti paziņo savu vērtējumu un to reģistrē automātiski. Ja katru vērtējumu vēlies izvēlēties pats, pievieno: «Izmanto manuālo vērtēšanas režīmu: pēc atbildes atklāšanas sagaidi, līdz izvēlos Again, Hard, Good vai Easy, un tikai tad reģistrē vērtējumu.»

Ja uz kartīti par anafāzi I atbildi «māsu hromatīdas», labojuma atpazīšana pēc atbildes atklāšanas nepadara sākotnējo mēģinājumu pareizu. Vēlāks jautājums par anafāzi II var pārbaudīt, vai tagad tās atšķir; tam nevajadzētu ar atpakaļejošu spēku uzlabot pirmo vērtējumu.

Vari atkārtot arī [Nibomo lietotnē](https://app.nibomo.com/). Apstiprinātie atkārtojumi atjaunina vienu un to pašu grafiku gan lietotnē, gan Claude, tāpēc vari pārslēgties starp tiem, neuzturot divas atkārtošanas vēstures. Lūdz Claude skaidri ziņot par neizdevušos vai neapstiprinātu vērtējuma reģistrēšanu, nevis uzskatīt to par saglabātu progresu.

## Uzlabo kartītes, kas joprojām mulsina

Atkārtotas kļūdas var norādīt uz neskaidru jautājumu, pārāk plašu atbildi vai trūkstošu nosacījumu. Lūdz Claude apskatīt kartīti, pirms secini, ka vienkārši vajag vairāk atkārtojumu:

```text
Izmanto Nibomo, lai pārbaudītu kartītes, kuras šajā sesijā mani mulsināja. Meklē
neskaidras priekšpuses, vairākas iegaumējamās vienības vienā kartītē, trūkstošus
nosacījumus, nepamatotas atbildes un dublikātus. Salīdzini ierosinātos labojumus
ar iepriekš norādītajiem kursa avotiem.

Parādi esošo kartīti un ierosināto izmaiņu blakus, norādot īsu pamatojumu un
vietu avotā. Atzīmē visu, ko avoti neļauj noskaidrot. Pirms rediģēšanas sagaidi
manu apstiprinājumu; nedzēs kartītes un nemaini nenoskaidrotus faktus.
```

Atstāj kartīti nemainītu, ja jautājums ir skaidrs un tu vienkārši nespēji atcerēties atbildi. Ja robam vajadzīga diagramma vai vēl viens atrisināts piemērs, atgriezies pie skaidrojumiem vai praktiskas vingrināšanās.

Ja dod priekšroku manuālai kopēšanai, lūdz Claude atgriezt apstiprinātās kartītes vienkāršos priekšpuses un aizmugures teksta blokos un pievieno tās savai ierastajai kartīšu lietotnei. Avotu pārbaude un atbildēšana pirms palīdzības saņemšanas joprojām ir spēkā.

## Kur Claude joprojām vajadzīga uzraudzība

Šī metode mazina novēršamas kļūdas; tā nepadara Claude par autoritatīvu avotu.

- Pat tikai avotā balstīta atbilde var būt nepareiza, ja nepareizs ir pats avots.
- No failiem iegūtais saturs var zaudēt kontekstu, īpaši diagrammās, tabulās un skenētās lapās.
- Claude var novērtēt brīvi formulētu atbildi pārāk pielaidīgi vai pārāk burtiski.
- Gara mācību saruna var attālināties no sākotnēji noteiktajām robežām.
- Viegli mājieni var radīt atpazīšanu, neveidojot noturīgu spēju atcerēties.

Ja saruna novirzās, sāc no jauna ar nosaukto avotu. Ja skaidrojums mainās, lūdz atkārtoti norādīt vietu avotā. Tādām prasmēm kā pierādījumu veidošana, eseju rakstīšana, izruna, laboratorijas darbs vai programmēšana līdzās atcerēšanās jautājumiem izmanto tiešu vingrināšanos un cilvēku atsauksmes.

## Noslēguma pārbaudes saraksts mācībām ar Claude

Pirms beidz sesiju, pārbaudi, vai:

- MI izmantošana atbilst šī kursa un uzdevuma noteikumiem;
- Claude norādīja visu neskaidro, nesalasāmo un nepamatoto;
- tu atbildēji uz vienu jautājumu reizē, pirms ieraudzīji palīdzību;
- katrs labojums norāda uz pamatojumu, kuru pats atvēri;
- ārējās zināšanas ir marķētas atsevišķi no kursa materiāla;
- neatrisinātas neskaidrības nav kļuvušas par kartītēm;
- par saglabātām kartītēm kļuva tikai daži pārbaudīti, ilgtermiņā svarīgi zināšanu robi;
- kartītes tika saglabātas paredzētajā darbvietā bez nevajadzīgiem dublikātiem;
- plānotajai atkārtošanai izvēlējies automātisku vai manuālu vērtēšanu;
- vērtējumi atspoguļo sākotnējos mēģinājumus un reģistrētie atkārtojumi ir apstiprināti;
- zini, kur atgriezties nākamajai plānotajai atkārtošanai.

Noderīgs **Claude privātskolotājs** dara vairāk nekā tikai skaidro. Tas parāda, kur beidzas avota sniegtā informācija, gaida, kamēr mēģini atcerēties, un atstāj īsu pierakstu par to, kas īsti sagādāja grūtības. Tieši šis pieraksts, nevis sarunas garums, ir iemesls šo mācīšanās paņēmienu izmantot atkal.
