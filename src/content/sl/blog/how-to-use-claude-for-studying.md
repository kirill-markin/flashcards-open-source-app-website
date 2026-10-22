---
title: "Kako uporabljati Clauda za učenje v letu 2026: praktičen postopek"
description: "Učite se s Claudom iz svojih zapiskov, odgovarjajte na vprašanja po eno, preverite popravke in vrzeli pretvorite v učne kartice v skladu s pravili predmeta o UI."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "kako uporabljati Clauda za učenje"
  - "Claude za učenje"
  - "postopek učenja s Claudom"
  - "Claude kot inštruktor"
  - "učne kartice s Claudom"
  - "Claude Learning Mode"
---

Če se sprašujete, kako uporabljati Clauda za učenje, začnite z majhnim sklopom zapiskov predmeta. Preverite, katere trditve podpirajo, in odgovarjajte na vprašanja po eno, preden vidite pomoč. Preverite popravke in nato zabeležite vrzeli v znanju, ki jih morate še odpraviti. Za ta zadnji korak priporočam [vtičnik Nibomo za Claude](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory): Claudu doda postopke za ustvarjanje učnih kartic, ponavljanje kartic, ki so na vrsti, in izboljševanje kartic, ki vas begajo.

Koristen cikel je **preverjanje virov → odgovor po spominu → preverjanje → shranjevanje → ponavljanje ob predvidenem času**. Običajna navodila za učno pomoč delujejo v navadnem pogovoru s Claudom; vtičnik ta pogovor poveže s shranjenimi karticami in urnikom ponavljanja.

> **Razkritje:** Sem Kirill Markin in razvijam [Nibomo](/sl/features/). Pri raziskovanju in urejanju tega članka je pomagala umetna inteligenca.

**Dejstva preverjena:** 22. oktobra 2026.

![Učna miza, ki povezuje izvorne zapiske z enim vprašanjem in dvema preverjenima karticama za vrzeli v znanju, z dvoumnim zapiskom ob strani](/blog/how-to-use-claude-for-studying-v2.png)

## Kratek postopek učenja s Claudom

Ta postopek uporabite za en del predavanja, besedilo ali sklop vaj:

1. Preverite, kaj vam pravila predmeta dovoljujejo pri uporabi UI.
2. Claudu posredujte majhen, jasno poimenovan sklop izvornega gradiva.
3. Prosite ga, naj pred razlago označi manjkajoče, protislovne ali neberljive informacije.
4. Po spominu odgovarjajte na vprašanja po eno.
5. Zabeležite popravek, mesto v viru in morebitno negotovost.
6. Pomembne odgovore preverite sami.
7. Nekaj preverjenih vrzeli, ki jih je smiselno dolgoročno odpraviti, shranite kot učne kartice v Nibomo.
8. Shranjene kartice ponavljajte ob predvidenem času v Claudu ali aplikaciji Nibomo.

Vrstni red je pomemben. Če se izprašujete iz dvoumnega vira, dvoumnost le težje opazite.

## Nastavite Nibomo v Claudu

Odprite [vtičnik Nibomo](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) ali pojdite na **Customize → Plugins**, poiščite Nibomo in kliknite **Add**. Če je vtičnik že nameščen, preverite, ali je omogočen.

Vzpostavite povezavo prek povezovalnika Nibomo, ki je priložen vtičniku. Sledite postopku prijave, prijavite se v račun Nibomo ali ga ustvarite in odobrite Claudov dostop. Ob pozivu izberite želeni delovni prostor. Pri tem postopku vam ni treba kopirati žetona API ali vnašati naslova strežnika.

Vtičnik prinaša postopke za ustvarjanje, ponavljanje in izboljševanje kartic. Njegov povezovalnik MCP Claudu omogoča branje in posodabljanje vašega računa Nibomo. [Povezovalnik najdete tudi v Claudovem imeniku](https://claude.ai/directory/nibomo). Povezavo podrobneje pojasnjujeta naš [vodič za povezavo s Claudom](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (v angleščini) in [dokumentacija povezovalnika MCP](/sl/docs/mcp-connector/).

Anthropic trenutno omogoča [uporabo vtičnikov v paketih Pro, Max, Team in Enterprise](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), in sicer v spletnem Claudu, na zavihku Chat v Claude Desktop in v Cowork. Če vaš račun nima vtičnikov, lahko še vedno uporabljate spodnja navodila za učno pomoč in izbrane kartice ročno kopirate v aplikacijo za ponavljanje.

## Pred prvim nalaganjem preverite pravila predmeta

Začnite z učnim načrtom, navodili za nalogo in pravili vaše ustanove o UI. Pravila se lahko razlikujejo glede na predmet in nalogo, zato si zapišite, kaj je dovoljeno prav pri tej nalogi: razlage, vprašanja za vajo, povratne informacije, priprava osnutka, pomoč pri navajanju virov ali nič od tega.

Anthropicova [navodila za študente za Claude for Education](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) med načini uporabe za učenje navajajo razlage, vprašanja za vajo, učne vodiče in učne kartice. Ista navodila pravijo, da morate upoštevati pravila ustanove o akademski integriteti in da Clauda ne smete uporabljati za delo, ki naj bi ga opravili samostojno.

To vam daje praktične meje:

- Clauda uporabljajte za utrjevanje pojmov, kadar sta pomoč pri učenju in vaja dovoljeni.
- Ne prosite ga, naj reši trenutno preverjanje znanja, ki ga morate opraviti sami.
- Ne nalagajte zaupnega, osebnega, avtorsko zaščitenega ali omejeno dostopnega gradiva predmeta, če nimate dovoljenja, da ga delite s storitvijo.
- Če so pravila nejasna, vprašajte izvajalca predmeta, preden začnete delo za oceno.

Izvirno delo naj ostane vaše. Povratne informacije po vašem poskusu so lahko dovoljena učna pomoč; oddaja Claudovega dela kot lastnega pa lahko krši pravila predmeta.

## Prave datoteke postavite na pravo mesto

Za krajše učenje zadostuje enkraten pogovor. Za predmet, pri katerem se boste učili dlje časa, ustvarite en projekt v Claudu in vanj dodajte le gradivo, ki sodi k njemu.

[Projekti v Claudu](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) so na voljo vsem uporabnikom, pri čemer so računi Free trenutno omejeni na pet projektov. V zbirko znanja projekta dodajte točno tiste datoteke predmeta in navodila za učenje, ki jih potrebujete, da bodo na voljo v vseh njegovih pogovorih.

Ko je omogočen spomin, lahko projekt med pogovori prenese tudi zapomnjeni kontekst. Ta spomin obravnavajte kot učni kontekst, ne kot merodajen prepis ali nadomestilo za izvorne datoteke. Dokaze in popravke, ki jih boste potrebovali znova, hranite v zbirki znanja projekta, Clauda pa prosite, naj navaja izvirno gradivo.

Claudova [dokumentacija o nalaganju datotek](https://support.claude.com/en/articles/8241126-upload-files-to-claude) trenutno navaja PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON in XLSX ter slike JPEG, PNG, GIF in WebP. Za nalaganje datotek XLSX morata biti omogočena izvajanje kode in ustvarjanje datotek. Datoteko lahko priložite enemu pogovoru ali jo shranite v razdelek Files v projektu za ponovno uporabo.

Uporabite najmanjši uporaben sklop: eno predavanje, del poglavja ali vprašanja, na katera ste pravkar odgovorili napačno. V navodilu določite meje, na primer »prosojnice 8–17« ali »razdelek z naslovom Genska vezanost«. Pri manjšem sklopu lažje poiščete dokaze in opazite nenamerno mešanje gradiva.

Anthropic je [**Learning mode** v projektih Claude for Education](https://www.anthropic.com/news/introducing-claude-for-education) predstavil kot voden sokratski pristop, ki študente spodbuja k razmišljanju, namesto da bi jim takoj ponudil odgovore. Morda ga imate na voljo, če vaša univerza zagotavlja Claude for Education, vendar ne predpostavljajte, da je dostopen v vsakem osebnem računu Claude. Spodnja navodila omogočajo podoben pogovor, voden z vprašanji, tudi v običajnem klepetu.

## Naj Claude razkrije dvoumnosti, preden začne razlagati

Na prosojnici s predavanja lahko piše »kromosomi se ločijo«, ne da bi bilo navedeno, kateri. Če Claude vrzel neopazno zapolni s splošnim znanjem, lahko na koncu vadite samozavestno podan odgovor, ki ga vaš vir sploh ne potrjuje.

Priložite gradivo, natančno določite obseg in najprej zahtevajte pregled virov:

```text
Za to učenje uporabljaj le datoteke in razdelke, ki jih navedem. Vrzeli ne
zapolnjuj s splošnim znanjem, razen če te za to izrecno prosim.

Preden me začneš učiti, pripravi pregled virov, ki vključuje:
- pojme, ki jih gradivo jasno razloži;
- izraze, diagrame ali odlomke, ki so dvoumni ali nepopolni;
- besedilo, formule, oznake ali strani, ki jih ne moreš zanesljivo prebrati;
- protislovja med posredovanimi viri;
- predznanje, ki ga gradivo predpostavlja, vendar ga ne razloži.

Za vsako postavko navedi ime datoteke in stran, prosojnico ali naslov razdelka.
Vse brez neposredne podpore označi kot NEPODPRTO. Ne začni še z izpraševanjem.
```

Pregled primerjajte z datotekami. Če Claude trdi, da je definicija na prosojnici 12, jo odprite. Če je oznaka na grafu neberljiva, prilepite ustrezno besedilo ali naložite jasnejšo sliko. Če si dva vira pri predmetu nasprotujeta, neskladje ohranite vidno in vprašajte izvajalca predmeta ali uporabite vir, ki ga pri predmetu določajo kot merodajnega.

Za zunanjo razlago lahko prosite pozneje. Ohranite jo ločeno:

```text
Gradivo predmeta tega predznanja ne razloži. Razloži ga s splošnim znanjem v
razdelku z oznako ZUNAJ GRADIVA PREDMETA. Razlage ne predstavi, kot da izvira iz
mojih datotek.
```

Ta oznaka pomaga preprečiti, da bi splošno znanje neopazno postalo dokaz iz gradiva predmeta.

## Eno vprašanje, nato počakajte

Ko je pregled virov videti ustrezen, začnite vaditi priklic: odgovor oblikujte, preden ga vidite, namesto da le prepoznate lepo napisano razlago, potem ko jo Claude že pokaže.

```text
Uči me samo snov, ki je v pregledu virov podprta z gradivom.

Zastavi le eno vprašanje in počakaj na moj odgovor. V vprašanje ne vključi
namigov. Ko odgovorim:
1. odgovor označi kot Pravilno, Delno pravilno, Napačno ali Vir ni jasen;
2. podaj kratko povratno informacijo, ne da bi razkril celoten odgovor;
3. navedi datoteko, ki podpira odgovor, in stran, prosojnico ali naslov razdelka;
4. če je moj odgovor delno pravilen ali napačen, daj namig in mi dovoli,
   da poskusim znova, preden pokažeš celoten odgovor;
5. v dnevnik vrzeli v znanju dodaj le dejansko vrzel.

Če vir ni jasen, vprašanje označi za preverjanje, namesto da zahtevaš ponoven
poskus.

Izmenjuj neposredni priklic, razlikovanje med podobnimi idejami in kratke naloge
za uporabo znanja. Ne ustvarjaj še učnih kartic. Po 10 vprašanjih se ustavi in
pokaži dnevnik.
```

Če vprašanja dobivate po eno, poznejša vprašanja ne morejo namigovati na odgovor, vsak poskus pa je lažje ovrednotiti. Pri seznamu desetih vprašanj zlahka preskočite neprijetna ali odgovorite le na dele, ki jih poznate.

Clauda prosite tudi, naj spreminja vrsto vprašanj. Definicije razkrijejo manjkajoče izraze. Primerjave pokažejo pojme, ki jih zamenjujete. Kratke naloge za uporabo znanja pokažejo, ali znate idejo uporabiti, ne le ponoviti njene ubeseditve. Večstopenjski izračun rešite na papirju in pokažite korake; sama končna številka Claudu pove zelo malo o tem, kje se zatika.

## Vodite dnevnik dokazov in negotovosti

Dnevnik vrzeli v znanju naj omogoča preverjanje postopka, ne pa le beleženja rezultatov. Uporabite majhno tabelo:

| Vprašanje | Vaš odgovor | Ocena | Popravek | Dokaz | Negotovost | Naslednji korak |
| --- | --- | --- | --- | --- | --- | --- |
| Kaj se loči v anafazi I? | Sestrski kromatidi | Napačno | Homologni kromosomi se ločijo; sestrski kromatidi ostaneta povezani | Predavanje 4, prosojnica 18 | Je ni | Ponovni poskus, nato razmislek o eni kartici |

Clauda prosite, naj zapiše »Vir ni jasen«, kadar dokazi ne zadoščajo za presojo odgovora. Te vrstice ne spremenite v cilj pomnjenja. Najprej jo razjasnite.

Stolpec za negotovost ujame tudi manj očitne težave: diagram, ki ga Claude ni mogel prebrati, izraz, ki ga predavatelj uporablja drugače kot učbenik, ali sklep, ki temelji na neizrečeni predpostavki. »Verjetno pravilno« in »podprto s prosojnico 18« nista enaka statusa.

## Konkreten primer: razlaga pri učenju in ena dolgoročno uporabna kartica

Recimo, da v posredovanih zapiskih predmeta piše:

> Med anafazo I se homologni kromosomi pomikajo proti nasprotnima poloma. Sestrski kromatidi ostaneta povezani v centromeri.

Claude vpraša: »Kaj se loči med anafazo I?« Odgovorite: »Sestrski kromatidi.«

Koristna povratna informacija je kratka in konkretna:

```text
Napačno. Sestrski kromatidi med anafazo I ostaneta povezani. Še enkrat preveri
oba stavka: kaj se pomika proti nasprotnima poloma?
```

Če posredovano gradivo obravnava tudi anafazo II, lahko Claude po ponovnem poskusu primerja obe fazi. Ta razlaga sodi v učni pogovor. Vrzel, ki jo je vredno dolgoročno odpraviti, je ožja:

```text
Sprednja stran: Kaj se loči med anafazo I mejoze?
Zadnja stran: Homologni kromosomi; sestrski kromatidi ostaneta povezani.
Dokaz: Predavanje 4, prosojnica 18
```

Iz ene napake je nastala ena osredotočena kartica, pri kateri lahko jasno ocenite odgovor. Namig, ponovni poskus, razlaga in spodbuda so opravili svojo nalogo v tistem trenutku; ni treba, da vas vsi spremljajo pri prihodnjem ponavljanju.

## Preverite popravek, preden mu zaupate

Claude lahko odgovor predstavi kot dokončen, čeprav napačno prebere datoteko, vnese zunanje znanje ali sprejme nejasen odgovor. Način preverjanja naj ustreza trditvi:

1. **Dejstva, specifična za predmet:** odprite navedeno stran ali prosojnico ter sami primerjajte besedilo, pogoje in izjeme.
2. **Rešene naloge:** korake ponovno izvedite samostojno, preverite enote in predznake, nato pa jih primerjajte z uradnimi rešitvami ali navodili izvajalca predmeta, če so na voljo.
3. **Aktualna dejstva:** če je za vaš model in račun na voljo spletno iskanje, prosite Clauda, naj poišče in navede primarne vire. Odprite povezave; navedbe virov preverjanje omogočijo, ne opravijo pa ga samodejno.
4. **Trditve z resnimi posledicami ali sporna vprašanja:** uporabite predpisani učbenik, pomoč izvajalcev predmeta ali drug vir, ki ga pri predmetu priznavajo kot merodajnega.

Anthropicov [vodič za spletno iskanje](https://support.claude.com/en/articles/10684626-enable-and-use-web-search) navaja, da odgovori z iskanjem vključujejo navedbe virov, in bralcem svetuje, naj pomembne informacije preverijo pri merodajnih virih. Dostopnost iskanja se lahko razlikuje; če ni na voljo, neposredno uporabite zaupanja vreden vir, namesto da bi Claude ugibal.

Koristno navodilo za preverjanje je namenoma strogo:

```text
Preglej dnevnik vrzeli v znanju. Za vsak popravek navedi natančno mesto v viru in
kratek odlomek, ki ga podpira. Če vir odgovora ne podpira neposredno, spremeni
oceno v NEPODPRTO. Navedi vsak odgovor, ki je odvisen od zunanjega znanja,
sklepanja ali neberljive vsebine. Teh vrzeli ne zapolnjuj z ugibanjem.
```

Nato navedeno gradivo preglejte sami. Claude vam pomaga najti dokaze, ne nadomešča pa jih.

## Odločite se, kaj si zasluži ponovno obravnavo

Vsakega popravka ni treba pretvoriti v učno kartico. Za nekatere vrzeli potrebujete rešen primer, diagram, govorilne ure ali dodatno nalogo za vajo.

Predlog za učno kartico ohranite, če:

- izhaja iz odgovora, pri katerem ste se zmotili, potrebovali veliko časa ali pomešali podobne pojme;
- je pomemben tudi zunaj trenutnega vprašanja;
- ga lahko preverite z enim jasnim vprašanjem in enim kratkim odgovorom;
- ga podpira vir, ki ste ga preverili;
- bo smiseln tudi brez pogovora s Claudom ob njem.

Izpustite ga, če:

- sam vir ostaja dvoumen;
- ste nanj zlahka in dosledno odgovarjali;
- vprašanje zahteva celoten esej ali postopek;
- se odgovor spreminja glede na nenavedene pogoje;
- bi vaja veščine pomagala bolj kot pomnjenje stavka.

Clauda prosite za predloge, ne za dokončan komplet:

```text
Preglej preverjeni dnevnik vrzeli v znanju. Predlagaj kartice le za ponavljajoče
se ali pomembne vrzeli, ki jih je mogoče jasno preveriti.

Na vsaki kartici naj bo en cilj pomnjenja. Vsaka sprednja stran naj bo konkretna,
vsaka zadnja pa kratka. Navedi mesto v viru in morebitno preostalo negotovost.
Vrzeli, ki zahtevajo samo vajo, daj na ločen seznam z ustrezno vajo. Ne shrani še
ničesar.
```

Preostalo zavrzite. Učenje s Claudom je lahko koristno tudi, če pri njem ne nastane nobena kartica.

## Preverjene vrzeli shranite v Nibomo

Ko preverite dokaze, prosite vtičnik Nibomo, naj izbrane vrzeli pretvori v shranjene kartice. Navedite delovni prostor in prosite Clauda, naj pred dodajanjem preveri obstoječe kartice. S tem navodilom zahtevate predogled pred shranjevanjem:

```text
Z Nibomom ustvari največ 5 učnih kartic iz zgornjega preverjenega dnevnika
vrzeli v znanju. Uporabi moj želeni delovni prostor: [ime delovnega prostora].
Če ime ni enoznačno, pred shranjevanjem preveri, za kateri prostor gre.

Med obstoječimi karticami poišči podvojitve ali kartice z istim ciljem pomnjenja.
Uporabi le vrzeli, ki jih podpirajo dokazi, ki sem jih preveril. Vsaka kartica
naj ima en cilj pomnjenja, konkretno sprednjo stran, kratek odgovor na zadnji
strani in mesto v viru.

Najprej pokaži predlagane kartice, dokaze zanje in morebitne ujemajoče se
obstoječe kartice. Pred shranjevanjem počakaj na mojo odobritev. Po shranjevanju
potrdi, kaj je bilo ustvarjeno in kje.
```

Predogled je vaša izbira, izražena v tem navodilu. Sami lahko določite, koliko pregleda želite, preden Claudu naročite shranjevanje ali urejanje kartic; predogled ni pogoj za vsako dejanje vtičnika.

Ohranite razliko iz konkretnega primera: razlaga vam je pomagala razumeti mejozo, shranjena kartica pa preverja prav razliko, pri kateri ste se zmotili. Dolgega odgovora inštruktorja je le redko treba pretvoriti v dolgo kartico.

## V Claudu ponavljajte učne kartice, ki so na vrsti

Izpraševanje iz pravkar naloženih zapiskov je učni pogovor. Ponavljanje v Nibomu uporablja kartice, ki ste jih že shranili, in beleži rezultat, ki vpliva na to, kdaj bo posamezna kartica znova na vrsti. To izrecno zahtevajte:

```text
Z Nibomom 10 minut ponavljaj moje učne kartice, ki so na vrsti, v delovnem
prostoru [ime delovnega prostora]. Uporabi časovni pas Europe/Paris.

Pokaži eno vprašanje naenkrat in počakaj na moj poskus, preden razkriješ
shranjeni odgovor. Nato primerjaj moj prvotni poskus s tem odgovorom, podaj
kratko povratno informacijo in zabeleži ustrezno oceno priklica. Povej mi,
katero oceno si zabeležil. Oceni prvotni poskus, ne popravljenega odgovora,
ki ga podam po razkritju. Ustavi se, ko zmanjka časa ali kartic, ki so na vrsti,
in povzemi ponavljanja, ki jih je Nibomo potrdil.
```

Ime delovnega prostora in časovni pas zamenjajte s svojima. Claude običajno pove svojo oceno in jo samodejno zabeleži. Če želite vsako oceno izbrati sami, dodajte: »Uporabi način ročnega ocenjevanja: po razkritju odgovora počakaj, da izberem Again, Hard, Good ali Easy, preden zabeležiš oceno.«

Če na kartico o anafazi I odgovorite »sestrski kromatidi«, prepoznavanje popravka po razkritju še ne pomeni, da je bil prvotni poskus pravilen. Poznejše vprašanje o anafazi II lahko preveri, ali zdaj razlikujete med obema fazama; ne sme pa za nazaj izboljšati prve ocene.

Ponavljate lahko tudi v [aplikaciji Nibomo](https://app.nibomo.com/). Potrjena ponavljanja posodabljajo isti urnik, ne glede na to, ali potekajo v aplikaciji ali v Claudu, zato lahko prehajate med njima brez dveh ločenih zgodovin ponavljanja. Clauda prosite, naj jasno pove, če beleženje spodleti ali ni potrjeno, namesto da ga obravnava kot shranjen napredek.

## Izboljšajte kartice, ki vas vedno znova begajo

Ponavljajoče se napake lahko razkrijejo nejasno vprašanje, preobsežen odgovor ali manjkajoč pogoj. Prosite Clauda, naj pregleda kartico, preden sklenete, da potrebujete le več ponovitev:

```text
Z Nibomom preglej kartice, ki so me pri tem ponavljanju begale. Poišči nejasna
vprašanja na sprednjih straneh, več ciljev pomnjenja, manjkajoče pogoje,
nepodprte odgovore in podvojitve. Predlagane popravke primerjaj z zgornjimi
dokazi iz gradiva predmeta.

Drugo ob drugi pokaži trenutno kartico in predlagano spremembo, s kratkim
razlogom in mestom v viru. Označi vse, česar dokazi ne morejo razjasniti.
Pred urejanjem počakaj na mojo odobritev; ne briši kartic in ne spreminjaj
nerazjasnjenih dejstev.
```

Kartico ohranite nespremenjeno, če je vprašanje jasno in se odgovora preprosto niste mogli spomniti. Pri vrzelih, ki zahtevajo diagram ali še eno rešeno nalogo, se vrnite k učni pomoči ali neposredni vaji.

Če raje kopirate ročno, prosite Clauda za potrjene kartice v navadnih besedilnih blokih s sprednjo in zadnjo stranjo ter jih dodajte v svojo običajno aplikacijo za učne kartice. Preverjanje virov in učenje z vprašanji še vedno veljata.

## Kje Claude še vedno potrebuje nadzor

Ta metoda zmanjša število napak, ki bi se jim lahko izognili; Clauda ne spremeni v merodajen vir.

- Odgovor, omejen na vir, je lahko še vedno napačen, če je napačen vir.
- Izluščena vsebina datotek lahko izgubi kontekst, zlasti pri diagramih, tabelah in skeniranih straneh.
- Claude lahko odgovor na odprto vprašanje oceni preveč prizanesljivo ali preveč dobesedno.
- Dolg učni pogovor se lahko oddalji od prvotno določenega obsega.
- Lahki namigi lahko ustvarijo občutek prepoznavanja brez dolgoročnega priklica.

Ko pogovor zaide, znova začnite pri poimenovanem viru. Ko se razlaga spremeni, zahtevajte novo navedbo mesta v viru. Pri veščinah, kot so dokazovanje, pisanje esejev, izgovarjava, laboratorijsko delo ali programiranje, vprašanja za priklic dopolnite z neposredno vajo in povratnimi informacijami ljudi.

## Končni kontrolni seznam za učenje s Claudom

Preden končate učenje, preverite, da:

- uporaba UI ustreza pravilom tega predmeta in naloge;
- je Claude označil vse dvoumno, neberljivo ali nepodprto;
- ste odgovarjali na vprašanja po eno, preden ste videli pomoč;
- vsak popravek kaže na dokaz, ki ste ga sami odprli;
- je zunanje znanje označeno ločeno od gradiva predmeta;
- nerešena negotovost ni postala učna kartica;
- je le nekaj preverjenih vrzeli, ki jih je vredno dolgoročno odpraviti, postalo shranjenih kartic;
- so se kartice shranile v želeni delovni prostor brez nepotrebnih podvojitev;
- ste za ponavljanje kartic, ki so na vrsti, izbrali samodejno ali ročno ocenjevanje;
- ocene odražajo vaše prvotne poskuse in je beleženje ponavljanj potrjeno;
- veste, kam se vrniti za naslednje ponavljanje po urniku.

**Claude kot inštruktor** je koristen, ko naredi več kot le razloži snov. Pokaže, kje se vir konča, počaka, da prikličete odgovor, in vam pusti kratek zapis tega, kar se je dejansko zataknilo. Zaradi tega zapisa, ne zaradi dolžine pogovora, je postopek učenja s Claudom vredno ponoviti.
