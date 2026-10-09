---
title: "Ali ima Quizlet leta 2026 javni API? Trenutno stanje in varne alternative"
description: "Ali ima Quizlet API? Na dan 18. avgusta 2026 javni API s samostojno registracijo ni dokumentiran. Primerjajte podprte alternative."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "ali ima Quizlet API"
  - "javni API Quizlet"
  - "Quizlet API za razvijalce"
  - "alternativa za Quizlet API"
  - "avtomatizacija učnih kartic"
---

Na dan 18. avgusta 2026 Quizlet nima dokumentiranega javnega API-ja, do katerega bi razvijalci lahko samostojno pridobili dostop, niti javnega portala za razvijalce. Neodvisni razvijalec trenutno nima uradnega načina, da bi registriral aplikacijo, pridobil ključ za Quizlet API ter prek dokumentiranih končnih točk bral ali zapisoval podatke učnih kartic.

Ta ugotovitev se nanaša na javno dokumentacijo Quizleta, ne na njegove notranje sisteme. Quizlet ima integracije z drugimi izdelki in partnerji. Aktualna primera sta njegova aplikacija v ChatGPT in dodatek za Google Classroom. Nobena od teh integracij drugim aplikacijam ne omogoča splošnonamenskega dostopa do Quizleta prek API-ja za razvijalce.

**Dejstva preverjena:** 18. avgusta 2026.

> **Razkritje:** Sem Kirill Markin in razvijam Nibomo, katerega Agent API in strežnik MCP sta spodaj predstavljena kot alternativi. Nibomo ni združljiv s Quizletom in ne omogoča samodejnega uvoza njegovih zbirk.

![Razvijalec primerja izvoz iz Quizleta, vdelavo, integracije s posameznimi izdelki in dokumentiran API za učne kartice](/blog/quizlet-api.png)

## Kratek odgovor: Quizlet nima dokumentiranega API-ja s samostojno registracijo

Če ste iskali »ali ima Quizlet API«, ker želite avtomatizirati delo v samem Quizletu, je trenutni praktični odgovor: **javni API s samostojno registracijo ni dokumentiran**.

Nekatere uradne funkcije so na prvi pogled podobne API-ju. Vendar so namenjene ožjim nalogam:

| Kaj potrebujete | Podprta možnost | Za kaj je primerna | Česa ne omogoča |
|---|---|---|---|
| Prenos besedila iz zbirke, ki ste jo ustvarili | [Izvoz na spletnem mestu Quizlet](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Enkratno kopiranje pojmov in definicij | Izvoza slik, kopiranih zbirk ali zgodovine učenja ter dostopa do API-ja |
| Prikaz javne zbirke na spletnem mestu ali strani sistema za upravljanje učenja (LMS) | [Vdelava Quizleta](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Učna dejavnost z logotipom Quizlet na vaši strani | Strukturiranih podatkov kartic ali dostopa za branje in pisanje |
| Pretvorba pogovora v ChatGPT v zbirko Quizlet | [Aplikacija Quizlet v ChatGPT](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Ustvarjanje in predogled zbirke prek `@Quizlet` | Poverilnic ali končnih točk za vašo aplikacijo |
| Dodeljevanje nalog iz Quizleta v Google Classroom | [Dodatek Quizlet za Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Iskanje, dodeljevanje in spremljanje dejavnosti v Classroomu | Splošnega API-ja za izobraževalno programsko opremo po meri |
| Izdelava lastne integracije s Quizletom | Pot s samostojno registracijo trenutno ni dokumentirana | Morda obstaja dogovor s posameznim partnerjem | Javne registracije, ključev API ali dokumentirane specifikacije za delo s karticami |
| Avtomatizacija lastnega delovnega prostora z učnimi karticami | [Nibomo Agent API](/sl/docs/api/) ali [povezovalnik MCP](/sl/docs/mcp-connector/) | Ponavljajoče se branje in zapisovanje kartic in kompletov znotraj izbranega delovnega prostora | Združljivosti s Quizletom ali samodejnega uvoza iz Quizleta |

Razlika je preprosta: za enkratno kopiranje besedila lastnih kartic uporabite izvoz, za prikaz Quizleta na drugi strani pa vdelavo. Posamezna integracija deluje le v okviru predvidenega postopka v določenem izdelku. Programska oprema, ki redno ustvarja, bere in ureja kartice, potrebuje dokumentiran API za branje in pisanje.

## Izvoz, vdelava in partnerski dostop niso javni API-ji

Javni API zunanjim razvijalcem zagotavlja jasno specifikacijo: dokumentacijo, način avtentikacije, podprte operacije, pravila uporabe in način pridobitve poverilnic. Nobena od trenutnih javno dostopnih možnosti Quizleta ne omogoča vseh teh korakov, da bi razvijalec lahko samostojno pridobil dostop in začel uporabljati API.

Quizletov **izvoz** je ročni prenos. Ustvarjalec zbirke lahko na spletnem mestu določi razporeditev pojmov in definicij, izbere **Kopiraj besedilo (Copy text)** ter rezultat prilepi drugam. Quizlet navaja, da izvoz slik ni na voljo, da kopiranih zbirk ni mogoče izvoziti in da je funkcija dostopna samo na spletnem mestu. To je uporabno za skrbno izvedeno enkratno selitev. Programski opremi pa ne omogoča sprotnega usklajevanja dveh sistemov.

**Vdelava** je namenjena prikazu, ne dostopu do podatkov. Quizlet omogoča kopiranje kode HTML za javno zbirko v načinih povezovanja (Match), učenja (Learn), preizkusa (Test), učnih kartic (Flashcards) ali črkovanja (Spell). Vdelana dejavnost ohrani logotip Quizlet, uporabniki pa se učijo v njegovem vmesniku. Vaša aplikacija zbirke ne prejme v obliki zapisov kartic, ki bi jih lahko urejala.

**Integracija z določenim izdelkom** ima svoj dogovorjeni način delovanja. Quizlet lahko sodeluje s ChatGPT ali Google Classroom, ne da bi isti vmesnik ponudil vsem razvijalcem. Objavi teh integracij potrjujeta njun obstoj; ne dokazujeta pa, da je API, na katerem temeljita, javno na voljo tudi drugim razvijalcem.

Zato tudi stara ovojna knjižnica ali zahteva, ki jo vidite v razvijalskih orodjih brskalnika, ni podprt API Quizlet. Manjkata javna dokumentacija in stabilna specifikacija za razvijalce.

## Izberite možnost, ki ustreza nalogi

### Za enkratno varnostno kopijo ali selitev uporabite izvoz

Za zbirko, ki ste jo ustvarili sami, uporabite uradni postopek izvoza iz Quizleta. Ker se postopek konča z možnostjo **Kopiraj besedilo (Copy text)**, prvo prilepljeno kopijo ohranite nespremenjeno, preden uredite ločilne znake ali preslikate polja. Shranjujete pojme in definicije, ne prenašate paketa, iz katerega bi lahko obnovili celoten komplet. Slike in zgodovina učenja ostanejo v Quizletu.

Praktični kontrolni seznam najdete v vodniku [Kako izvoziti zbirke Quizlet leta 2026](/sl/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Obravnava izvirne in delovne kopije, UTF-8, tabulatorje, večvrstične definicije ter razliko med prenosom vsebine kartic in prenosom podatkov o razporedu ponavljanja.

Izvoz je primeren za enkratno selitev. Ni pa primeren za vsakodnevno ustvarjanje, sinhronizacijo ali ponavljajoče se urejanje prek programske opreme.

### Za prikaz uporabite uradno vdelavo

Če naj se učenci učijo iz javne zbirke Quizlet na razrednem spletnem mestu ali strani LMS, uporabite kodo za vdelavo, ki jo Quizlet ponuja na svojem spletnem mestu. Izberite dejavnost, kliknite **Kopiraj HTML (Copy HTML)** in rezultat dodajte na stran. Učenci dobijo interaktivno dejavnost Quizlet; spletno mesto, ki jo gosti, ne dobi neposrednega dostopa do podatkov kartic.

To je pogosto vse, kar učitelj potrebuje. Če to poimenujemo API, po nepotrebnem zapletemo opis tega, kar dejansko potrebujemo.

### Za ChatGPT ali Google Classroom uporabite namensko integracijo

Quizletova objava o ChatGPT z dne 10. marca 2026 opisuje konkreten postopek: povežite aplikacijo Quizlet, začnite poziv z `@Quizlet`, v ChatGPT si oglejte predogled ustvarjene zbirke, nato pa jo odprite v Quizletu, kjer jo lahko prilagodite in se iz nje učite. To je podprt način za ustvarjanje zbirke Quizlet iz tega pogovora. Pri tem pa ne dobite poverilnic za Quizlet API, ki bi jih lahko znova uporabili v svojem botu, skriptu ali na spletnem mestu.

Podobno konkretna je Quizletova objava o Google Classroom z dne 30. junija 2026. Dodatek učiteljem omogoča iskanje in dodeljevanje dejavnosti, vključno z vprašanji za vajo, učnimi karticami in igrami, nato pa še spremljanje sodelovanja in napredka znotraj Classrooma. Quizlet navaja, da je potreben Google Workspace for Education Plus; učitelji bodo morda potrebovali skrbnika IT, da jim odobri dostop ali omogoči dodatek.

Če kateri od teh postopkov že ustreza vašemu cilju, ga uporabite. Če potrebujete aplikacijo po meri, nobena od teh integracij ne nadomesti javnega dostopa za razvijalce.

### Za ponavljajočo se avtomatizacijo izberite dokumentiran vmesnik za branje in pisanje

Pri redni avtomatizaciji mora programska oprema isto delo zanesljivo opravljati večkrat: ustvarjati kartice iz zapiskov, pridobivati sezname kompletov, posodabljati odgovore ali dolgoročno upravljati delovni prostor. Izvoz prek odložišča ne more zagotoviti takšnega vmesnika.

Varna izbira je sistem učnih kartic, ki jasno dokumentira avtentikacijo zunanje programske opreme ter podprte operacije branja in pisanja. To lahko pomeni, da za avtomatizirani del izberete alternativo za Quizlet API, Quizlet pa obdržite za učne naloge, ki jih podpirajo njegove javno dostopne funkcije.

## Kaj dejansko ponuja API Nibomo kot alternativa

Nibomo objavlja dva načina dostopa do istega omejenega nabora podatkov posameznega uporabnika:

- Vstopna točka [zunanjega Agent API-ja](/sl/docs/api/) je `GET https://api.nibomo.com/v1/`. Odgovor na začetno zahtevo vodi agenta skozi prijavo z enkratno kodo OTP po e-pošti, ustvarjanje ključa API in izbiro delovnega prostora. Za branje se uporablja končna točka za poizvedbe v slogu SQL, za pisanje pa ločena končna točka za izvajanje ukazov.
- [Oddaljeni strežnik MCP](/sl/docs/mcp-connector/) je na voljo na naslovu `https://mcp.nibomo.com/mcp`. Odjemalcem MCP je na voljo osem orodij: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` ter orodja za ponavljanje `next_review_card`, `reveal_answer` in `submit_review`.

Osmo orodje, `get_usage_limits`, omogoča izključno vpogled v naročniški paket računa, omejitve in trenutno mesečno porabo funkcij umetne inteligence; kartic ne bere in jih ne spreminja.

Oba načina dostopa sta omejena na izbrani delovni prostor. Dokumentirani viri so `workspace`, `cards`, `decks` in `review_events`, rezultati pa so omejeni na 100 vrstic na stavek SQL. Vmesnik uporablja omejen dialekt SQL in ne omogoča neposrednega dostopa do PostgreSQL. Sheme OpenAPI ni, zato bodo postopki, ki temeljijo na samodejno ustvarjenih odjemalcih OpenAPI, potrebovali drugačen vmesnik.

To lahko razvijalcu ali agentu umetne inteligence pomaga avtomatizirati delo z lastnimi učnimi karticami. Ne more pa prebrati URL-ja Quizlet, zrcaliti računa Quizlet ali delovati kot nedokumentiran odjemalec Quizleta. Samodejnega uvoznika za Quizlet ni. Za selitev najprej izvozite pojme in definicije iz lastne zbirke, preglejte besedilo in ga nato preslikajte v polja kartic v ciljnem sistemu. Ta ustvari lastno stanje učenja; zgodovina iz Quizleta se ne prenese.

Razlike med izdelkoma, ki presegajo dostop do API-ja, so opisane v [primerjavi z odprtokodno alternativo Quizletu](/blog/quizlet-alternative/).

## Zahteve brskalnika do zasebnih končnih točk niso varna bližnjica

Quizletov spletni vmesnik pošilja omrežne zahteve, tako kot vsaka sodobna spletna aplikacija. Če eno od njih najdete, s tem še ne postane podprta končna točka za vaš program.

Zasebne končne točke, ki jih uporablja brskalnik, so lahko odvisne od sejnih piškotkov, notranjih formatov, mehanizmov za preprečevanje zlorab in predpostavk, vezanih na trenutni vmesnik. Spremenijo se lahko brez javnega označevanja različic ali navodil za prehod. Poleg tega [Quizletovi pogoji uporabe](https://quizlet.com/tos), nazadnje posodobljeni 28. maja 2026, prepovedujejo spletno strganje (scraping) in drugo avtomatizirano pridobivanje podatkov ter nepooblaščeno avtomatizirano uporabo storitve.

To je nezanesljiva in tvegana podlaga že za osebni skript, kaj šele za izdelek. Zato tukaj ne bom ugibal o naslovih končnih točk ali opisoval postopkov obratnega inženirstva.

Lastno zbirko izvozite, kadar jo morate enkrat prenesti. Javno zbirko vdelajte, kadar jo učenci potrebujejo na drugi strani. Za postopke, ki jih podpirata integraciji s ChatGPT ali Google Classroom, uporabite ti integraciji. Za ponavljajoče se branje in pisanje izberite programsko opremo z dokumentiranim vmesnikom za avtomatizacijo — ali pa delo v Quizletu opravljajte ročno, dokler takega vmesnika ne objavi.

## Kako ugotoviti, ali se je stanje spremenilo

Quizlet bi lahko po datumu preverjanja dejstev v tem članku uvedel program za razvijalce. Poiščite uradni portal za razvijalce ali dokumentacijo, ki pojasnjuje, kdo se lahko registrira, kako deluje avtentikacija, katere operacije s karticami so podprte in kakšna pravila uporabe veljajo.

Še ena ovojna knjižnica neodvisnega razvijalca ne bi spremenila odgovora. Prav tako ga ne bi novo partnerstvo s konkretnim ponudnikom. Dokler Quizlet ne dokumentira samostojnega dostopa za razvijalce, trditve o trenutno dostopnem API-ju Quizlet presojajte previdno in izberite podprto možnost, ki ustreza dejanski nalogi.
