---
title: "Kako izvoziti zbirke iz Quizleta v letu 2026 (in zakaj manjka možnost izvoza)"
description: "Izvozite zbirko iz Quizleta po trenutnem postopku na spletnem mestu. Če možnost Export manjka, preverite, ali ste avtor zbirke, ste jo kopirali ali uporabljate mobilno aplikacijo."
image: "/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png"
date: "2026-06-10"
updated: "2026-08-30"
keywords:
  - "kako izvoziti iz Quizleta"
  - "kako izvoziti učne kartice iz Quizleta"
  - "Quizlet manjka gumb za izvoz"
  - "prenos učnih kartic iz Quizleta"
  - "Quizlet v CSV"
  - "Quizlet v Anki"
---

Če v Quizletu manjka gumb **Export** (Izvoz), najprej preverite dvoje: ali ste ustvarili izvirno zbirko in ali uporabljate Quizletovo spletno mesto? Quizlet izvoz omogoča samo prvotnemu avtorju zbirke, funkcija pa deluje le na spletnem mestu. Kopirane zbirke ni mogoče izvoziti, tudi če je kopija zdaj prikazana v vaši knjižnici.

Če izpolnjujete ta pogoja, je izvoz hiter: odprite zbirko na spletnem mestu, izberite **More → Export** (Več → Izvoz), določite razporeditev izrazov in definicij ter izberite **Copy text** (Kopiraj besedilo). Quizlet ne prenese datoteke s kompletom kartic. Besedilo kopira v odložišče, brez slik.

**Preverjeno:** 30. avgusta 2026 na podlagi [uradnih Quizletovih navodil za izvoz](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets).

![Arhivar preverja oznake lastništva, preden izroči pare besedilnih kartic; pripravljeni sta dve mapi za dokumente, fotografije pa ostanejo za steklom](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards.png)

## Ali bi moral biti gumb Export sploh na voljo?

Preden poskusite učne kartice iz Quizleta prenesti kako drugače, preverite naslednje:

| Vaš položaj | Ali bi moral biti izvoz na voljo? | Naslednji korak |
| --- | --- | --- |
| Ustvarili ste izvirno zbirko in jo odprli na Quizletovem spletnem mestu | Da, glede na Quizletovo stran s pomočjo | Sledite spodnjim korakom |
| Uporabljate aplikacijo za iOS ali Android | Ne; izvoz je na voljo samo na spletnem mestu | Odprite Quizlet v spletnem brskalniku in se prijavite |
| Kopirali ste zbirko drugega uporabnika | Ne; Quizlet navaja, da kopiranih zbirk ni mogoče izvoziti | Ne pričakujte, da bo kopiranje omogočilo izvoz |
| Zbirko si lahko ogledate, vendar je niste ustvarili | Ne; možnost ogleda še ne pomeni, da ste avtor zbirke | Avtorja prosite za izvorno datoteko ali zbirko sestavite na novo iz gradiva, ki ga smete uporabiti |

Če ste ustvarili izvirno zbirko, gumb za izvoz pa še vedno manjka, preverite, ali ste prijavljeni v račun, ki je njen lastnik, in ali ste odprli izvirnik, ne kopije. Quizletova stran s pomočjo ne navaja drugega načina izvoza. V tem primeru se obrnite na Quizletovo podporo, namesto da zaupate orodju za prenos, ki obljublja obhod omejitve.

## Kako izvoziti učne kartice na Quizletovem spletnem mestu

Za zbirko, ki ste jo ustvarili sami:

1. Prijavite se v Quizlet na spletnem mestu.
2. Izberite **Your library** (Vaša knjižnica).
3. Izberite **Flashcard sets** (Zbirke učnih kartic).
4. Odprite zbirko, ki jo želite izvoziti.
5. Odprite meni **More** (Več).
6. Izberite **Export** (Izvoz).
7. Določite, kako naj bodo razporejeni izrazi in definicije.
8. Izberite **Copy text** (Kopiraj besedilo).
9. Rezultat prilepite v urejevalnik navadnega besedila.

To je celoten trenutni postopek. Na koncu ni gumba za prenos datoteke.

Za običajne kartice s sprednjo in zadnjo stranjo priporočam tabulator med izrazom in definicijo ter novo vrstico med karticami. To je praktičen nasvet glede ločil, ne Quizletova zahteva. Tabulatorje je običajno lažje preverjati kot vejice, saj se vejice pogosto pojavljajo že v samih definicijah.

Urejena datoteka z dvema karticama bi bila videti takole, z enim tabulatorjem na sredini vsake vrstice:

```text
photosynthesis	Process plants use to convert light energy into chemical energy
mitosis	Cell division that produces two genetically identical daughter cells
```

## Kaj se ohrani pri izvozu iz Quizleta

Quizlet to funkcijo opredeli ozko: izvozi **izraze in definicije** iz zbirke, ki jo je ustvaril uporabnik sam. Navaja tudi, da slik ni mogoče izvoziti.

Najzanesljiveje se je opreti na to, kar se dejansko prilepi. Če so besedilo, ločilo ali prelom vrstice v prilepljenem rezultatu, jih lahko shranite v datoteko. Quizletova stran s pomočjo ne obljublja prenosa map, načinov učenja, oblikovanja, stopnje usvojenosti, zgodovine ponavljanja ali razporeda ponavljanja.

To je torej kopija besedila kartic, ne varnostna kopija, iz katere bi lahko obnovili stanje v Quizletu. Enako razliko je dobro poznati, če ste iskali »prenos učnih kartic iz Quizleta«: Quizlet kopira besedilo v odložišče, datoteko pa ustvarite sami.

## Pred urejanjem shranite neobdelano kopijo v UTF-8

Poskrbite, da se boste lahko vrnili na izvirni izvoz:

1. Izvoz prilepite v urejevalnik navadnega besedila.
2. Shranite ga v kodiranju UTF-8, na primer kot `biology-quizlet-raw.txt`.
3. Ustvarite kopijo z imenom `biology-quizlet-working.txt`.
4. Neobdelane datoteke ne spreminjajte; urejajte samo delovno kopijo.

Pred uvozom preverite delovno datoteko, medtem ko je zbirka v Quizletu še odprta:

- Vklopite prikaz nevidnih znakov in preverite, kje so tabulatorji in prelomi vrstic.
- Poiščite izbrano ločilo tudi znotraj izrazov in definicij. Dodaten tabulator lahko ustvari nepričakovano tretje polje.
- Poiščite definicije, ki vsebujejo prelome vrstic; ti se lahko napačno razumejo kot dodatne kartice.
- Primerjajte začetek, sredino in konec datoteke z zbirko v Quizletu, vključno z najdaljšimi definicijami.
- Datoteko zaprite in znova odprite ter preverite naglasna znamenja, nelatinične pisave, simbole ter tipografske narekovaje in opuščaje.
- Označite prazna polja, dvojnike in nepravilne vrstice, namesto da bi brez opozorila ugibali, kako jih popraviti.

Število vrstic primerjajte s številom kartic samo, če vsaka kartica zavzame natanko eno vrstico. Pri večvrstičnih definicijah ta bližnjica ne deluje.

Neobdelano datoteko obdržite tudi potem, ko je delovna kopija videti ustrezna. Če uvoz zamakne polje ali izpusti vsebino, boste še vedno imeli nespremenjeno referenco.

## Iz Quizleta v CSV: datoteko pripravite premišljeno

S preimenovanjem datoteke iz `.txt` v `.csv` je ne pretvorite. CSV zahteva dosledna ločila in pravilno uporabo narekovajev pri vejicah, narekovajih in večvrstični vsebini.

Datoteko CSV iz Quizletovega izvoza varno pripravite takole:

1. Neobdelano varnostno kopijo besedila pustite nedotaknjeno.
2. Delovno kopijo odprite v preglednici in izberite točno tisto ločilo, ki ste ga uporabili v Quizletu.
3. Preverite, ali ima vsak pričakovani zapis dva stolpca: izraz in definicijo.
4. Preglejte narekovaje, ločila in večvrstične definicije.
5. Izvozite kot CSV v kodiranju UTF-8.
6. CSV znova odprite v novem predogledu, preden ga uporabite drugje.

Program za preglednice lahko doda narekovaje, ki jih CSV potrebuje. Zamenjava vseh tabulatorjev z vejicami tega ne more zanesljivo opraviti.

## Besedilo prenesite v Nibomo kot gradivo za osnutke, ki jih boste pregledali

[Nibomo](/sl/features/) nima neposrednega uvoznika za Quizlet. V gostovani aplikaciji datoteke TXT ali CSV uporabite kot priponko za pripravo osnutkov z umetno inteligenco, ne za prenos brez izgub.

1. Neobdelano Quizletovo datoteko hranite zunaj aplikacije.
2. Očiščeno datoteko TXT ali skrbno pripravljeno datoteko CSV priložite v klepetu z umetno inteligenco v Nibomu.
3. Pomočniku povejte, katero ločilo in polja uporablja datoteka.
4. Prosite za kratek predogled in izrecno navedite, naj kartic še ne shrani.
5. Predlagano število kartic ter njihove sprednje in zadnje strani primerjajte z delovno datoteko.
6. Shranite samo kartice, ki ste jih pregledali.

[Vodič za začetek uporabe](/docs/getting-started/) opisuje klepet z umetno inteligenco, ki uporablja podatke delovnega prostora in priložene datoteke. Previdno oblikovano navodilo bi lahko bilo:

> Preberi to datoteko kot pare izrazov in definicij, ločenih s tabulatorji. Kartic še ne shranjuj. Pripravi majhen vzorec osnutkov, ohrani izvorno besedilo in nelatinične znake ter nepravilne, prazne ali dvoumne vrstice navedi ločeno, namesto da ugibaš.

To je lahko koristno, če je treba stare kartice tudi urediti. Ne dokazuje pa, da je bila vsaka vrstica pravilno prenesena. Uporabite kontrolni seznam v članku [Kako popraviti učne kartice, ustvarjene z umetno inteligenco](/blog/how-to-fix-ai-flashcards/), nato pa preizkusite majhen komplet, preden ustvarite preostale kartice.

Kartice, ustvarjene v Nibomu, dobijo novo zgodovino učenja. Besedilo iz Quizleta ne vsebuje zapisov o ponavljanju ali podatkov o razporedu, ki bi omogočali nadaljevanje prejšnjega zaporedja ponavljanja.

> **Razkritje:** Razvijam Nibomo. Ta postopek opisuje trenutne omejitve izdelka; z njim ne trdim, da je izdelek v celoti združljiv s Quizletom.

## Iz Quizleta v Anki: uporabite Ankijev uvoznik besedila

Ankijev [uradni priročnik za uvoz besedila](https://docs.ankiweb.net/importing/text-files.html) opisuje podporo za datoteke z navadnim besedilom v kodiranju UTF-8, v katerih so polja ločena z vejicami, podpičji ali tabulatorji.

Za delovno kopijo s tabulatorji kot ločili:

1. V Ankiju odprite postopek uvoza in izberite besedilno datoteko v kodiranju UTF-8.
2. V predogledu preverite, ali je Anki zaznal tabulator; če ga ni, spremenite nastavitev ločila.
3. Izberite vrsto zapiska in ciljni komplet.
4. Prvo polje povežite s sprednjo stranjo, drugo pa z zadnjo.
5. V predogledu preverite, ali so kakšna polja prazna, zamaknjena ali odvečna.
6. Pred uvozom preverite nastavitve za dvojnike in posodabljanje.

Anki določi pričakovano število polj iz prve vrstice, ki ni komentar. V poznejših zapisih manjkajoča polja ostanejo prazna, dodatna pa se ne uvozijo. Zato je predogled pomemben, še posebej ker lahko že eno odvečno ločilo spremeni strukturo vrstice.

Tudi pri večvrstičnih definicijah morate izbrati način obravnave. Anki podpira polja v narekovajih, ki segajo čez več vrstic. Če omogočite **Allow HTML in fields** (Dovoli HTML v poljih), lahko oznako `<br>` namesto tega razume kot prelom vrstice. Uporabite en način in preglejte kopirani vzorec, preden uvozite celotno datoteko.

Anki lahko privzeto prepozna obstoječi zapisek iste vrste po prvem polju in posodobi preostala polja. V možnostih uvoza lahko namesto tega izberete, naj dvojnike prezre ali jih doda kot nove zapiske. Posodobitev obstoječega zapiska v Ankiju lahko ohrani njegov razpored ponavljanja v Ankiju, vendar se razpored iz Quizleta prek besedilne datoteke ne prenese.

## Izvirnik obdržite, dokler novi komplet ne deluje

Uradni Quizletov postopek se pri zbirkah, ki ste jih ustvarili sami, konča z možnostjo **Copy text** (Kopiraj besedilo) na spletnem mestu. Skripte za zajem podatkov, uporaba ugibanih zasebnih končnih točk in orodja za prenos tretjih ponudnikov so ločeni, nepodprti postopki. Tudi z njimi izvoz kopirane zbirke ali zbirke, ki si jo lahko samo ogledujete, ne postane uradno podprt.

Če potrebujete ponavljajočo se avtomatizacijo namesto enkratne kopije, članek o [trenutnem stanju Quizletovega API-ja](/blog/quizlet-api/) pojasnjuje meje uradno podprte uporabe. Če zbirka ni vaša, prosite njenega avtorja za izvorno datoteko ali pa iz svojih zapiskov na novo sestavite manjši komplet. Članek [Kako ustvariti boljše učne kartice](/blog/how-to-make-better-flashcards/) vam lahko pomaga izboljšati novo zbirko, namesto da prekopirate vsako staro vrstico.

Izvirne zbirke v Quizletu ne izbrišite, dokler:

- ne shranite neobdelane datoteke UTF-8 na mesto, ki se varnostno kopira;
- se delovna datoteka ob ponovnem odpiranju ne prikaže s pričakovanimi znaki in ločili;
- ne preverite večvrstičnih polj, praznih polj, dvojnikov in nepravilnih vrstic;
- ne obnovite pomembnih informacij iz slik z virom, ki ga smete uporabiti; in
- majhen preizkus v ciljni aplikaciji ne ustvari pravilnih sprednjih in zadnjih strani.

Neobdelano besedilno datoteko obdržite tudi pozneje. To je najpreprostejša neodvisna referenca, če je kakšen poznejši uvoz videti napačen. Če se še odločate, kam prenesti kartice, [primerjava alternativ Quizletu](/blog/quizlet-alternative/) obravnava širše prednosti in slabosti.
