---
title: "Funguje Anki offline v roce 2026? Počítač, iPhone, Android a synchronizace"
description: "Ano — nainstalované aplikace Anki pro počítač, iPhone, iPad i Android umožňují používat místní sbírku offline. Zjistěte, co potřebuje internet, jak funguje pozdější synchronizace a jak připravit média."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "funguje Anki offline"
  - "lze používat Anki offline"
  - "funguje AnkiMobile offline"
  - "funguje AnkiDroid offline"
  - "synchronizace Anki offline"
  - "AnkiWeb offline"
  - "Anki bez internetu"
---

Anki se nemusí spojit se serverem, aby vám zobrazilo další kartičku. **Nainstalované aplikace Anki fungují v roce 2026 offline:** Anki na Windows, macOS a Linuxu, AnkiMobile na iPhonu a iPadu a AnkiDroid na Androidu. Každá používá sbírku uloženou přímo v daném zařízení, takže můžete opakovat kartičky, vytvářet poznámky a provádět běžné úpravy bez internetu.

Jedna věc vás ale může zaskočit: AnkiWeb funguje jinak. Je to služba pro studium a synchronizaci v prohlížeči, nikoli offline aplikace Anki. I nainstalovaná aplikace navíc dokáže používat jen balíčky a média, které už do konkrétního zařízení dorazily.

**Fakta ověřena:** 16. srpna 2026.

![Terénní výzkumník přidává záznam do místního archivu fotografií, zvuku a textu, zatímco rádiové spojení v horách nefunguje](/blog/does-anki-work-offline.png)

## Stručná odpověď pro každou aplikaci

[Oficiální web Anki](https://apps.ankiweb.net/) uvádí aplikaci pro počítač, AnkiMobile pro iOS, AnkiDroid pro Android a AnkiWeb jako součásti jednoho ekosystému. Jejich možnosti bez připojení se ale liší.

| Aplikace | Funguje offline? | Co můžete dělat bez internetu | Co vyžaduje připojení |
| --- | --- | --- | --- |
| **Anki pro počítač** na Windows, macOS nebo Linuxu | **Ano.** Sbírka i složka s médii jsou uložené místně. | Opakovat kartičky, přidávat poznámky, upravovat jejich obsah a používat média, která už jsou v počítači. | Stahovat sdílené balíčky, synchronizovat s AnkiWeb a načítat vše, co kartička nebo doplněk požaduje z online služby. |
| **AnkiMobile** na iPhonu nebo iPadu | **Ano.** Aplikace uchovává místní sbírku. | Opakovat místní kartičky, přidávat poznámky, upravovat jejich obsah a přehrávat zvuky nebo zobrazovat obrázky, které už jsou v zařízení. | Dokončit úvodní synchronizaci sbírky a médií, používat AnkiWeb a přistupovat ke vzdáleným zdrojům. |
| **AnkiDroid** na Androidu | **Ano.** AnkiDroid uchovává sbírku v zařízení s Androidem. | Opakovat místní kartičky, přidávat poznámky, upravovat jejich obsah a používat média uložená v zařízení. | Synchronizovat nebo stáhnout chybějící materiály, získávat sdílené balíčky a používat funkce kartiček, které závisejí na síti. |
| **AnkiWeb** v prohlížeči | **Nemá offline režim.** Je to online služba pro studium a synchronizaci. | Nepočítejte s tím, že ji budete používat po ztrátě připojení. | Připojit se k internetu nebo přejít na nainstalovanou aplikaci, kterou jste si předem připravili. |

Anki tedy můžete používat offline, pokud tím myslíte nainstalovanou aplikaci, ve které už máte správnou sbírku. AnkiWeb v prohlížeči připojení stále potřebuje.

## Opakování a úpravy offline se nejprve ukládají jen v daném zařízení

Když odpovídáte na kartičky offline, Anki zapisuje tato opakování do místní sbírky. Plánovač pokračuje podle jejího aktuálního stavu. Místně se ukládají i nové poznámky a běžné úpravy. V jiném zařízení se nic neobjeví, dokud se znovu nepřipojíte a neprovedete synchronizaci.

Pokud se učíte jen na jednom zařízení, synchronizace přes AnkiWeb je volitelná. Slouží k přenosu změn sbírky mezi zařízeními. Podle [příručky k synchronizaci Anki](https://docs.ankiweb.net/syncing.html) lze za běžných okolností sloučit opakování a úpravy poznámek z více míst. Pokud jste stejnou kartičku opakovali na dvou zařízeních, obě odpovědi zůstanou v historii opakování a výsledný stav určí nejnovější odpověď.

Tento postup omezí zbytečné konflikty při synchronizaci:

1. Synchronizujte zařízení, než opustíte místo se spolehlivým připojením.
2. Offline opakujte kartičky, přidávejte poznámky nebo opravujte běžný text kartiček.
3. Znovu se připojte a synchronizujte toto zařízení, než budete pokračovat na jiném.
4. Nechte druhé zařízení dokončit vlastní synchronizaci, než na něm provedete další změny.

Změny struktury sbírky vyžadují větší opatrnost. Přidání pole, odstranění šablony kartičky, změna typů poznámek a podobné zásahy mohou místo sloučení vyžadovat jednosměrnou synchronizaci. Při ní vybíráte, zda se má zachovat místní sbírka, nebo sbírka na AnkiWeb. Změny na druhé straně mohou být přepsány.

Během cesty tedy klidně pokračujte v běžném opakování a úpravách poznámek. Složitější změny typů poznámek a šablon ale odložte, pokud se několik offline zařízení vyvíjí nezávisle na sobě. Pokud Anki nabídne nahrání nebo stažení sbírky, zastavte se a před výběrem směru zjistěte, která sbírka obsahuje práci, kterou potřebujete zachovat.

## Média jsou místní teprve ve chvíli, kdy dorazí do zařízení

Anki ukládá zvuky a obrázky odděleně od dat sbírky. [Dokumentace k médiím](https://docs.ankiweb.net/media.html) vysvětluje, že v aplikaci pro počítač se soubory přiložené nebo vložené do poznámky kopírují do místní složky `collection.media`. Jakmile v ní soubor je, kartička k jeho načtení nepotřebuje internet.

Slabým místem je příprava. Synchronizace sbírky a synchronizace médií probíhají odděleně, takže přenos zvuků a obrázků může pokračovat i poté, co už vidíte kartičky. [Průvodce synchronizací AnkiMobile](https://docs.ankimobile.net/syncing.html) upozorňuje, že média mohou chybět, dokud se první synchronizace úplně nedokončí. Ani zobrazení všech balíčků ještě neznamená, že je sbírka s velkým množstvím obrázků či zvuků připravená k použití.

Než přejdete offline:

- synchronizujte zařízení, na kterém jste média přidali;
- počkejte na dokončení jeho synchronizace médií;
- synchronizujte zařízení, které si vezmete s sebou, a počkejte i tam;
- otevřete kartičky se všemi typy obrázků a zvuku, které potřebujete;
- tam, kde je tato funkce dostupná, spusťte **Kontrolu médií (Check Media)** a vyhledejte poznámky odkazující na chybějící soubory.

Poslední kontrola je důležitá u sdílených balíčků. Autor někdy odkazovaný obrázek do balíčku vůbec nepřidal, takže ho ani opakovaná synchronizace nemůže stáhnout.

Místní média ještě neznamenají, že každá kartička obsahuje vše potřebné. Šablona kartičky může odkazovat na obrázek, skript, písmo nebo jiný zdroj umístěný na webu. Online slovníky, stahování sdílených balíčků a doplňky, které volají vzdálená API, stále vyžadují připojení. Převod textu na řeč závisí na hlasu a platformě: nainstalovaný systémový hlas může fungovat offline, hlas poskytovaný online službou však ne. Vyzkoušejte konkrétní funkci a nespoléhejte na to, že všechny hlasy nebo doplňky fungují stejně.

## Jak synchronizovat práci v Anki po opětovném připojení

Používání Anki offline a následná synchronizace mají vlastně dvě fáze: teď pracujete místně, později změny synchronizujete přes síť.

Jakmile se připojení obnoví, synchronizujte zařízení, na kterém jste pracovali offline. Počkejte na dokončení synchronizace sbírky i médií. Teprve pak synchronizujte další zařízení a až poté na něm opakujte kartičky nebo je upravujte. Díky tomuto pořadí snáze poznáte nejnovější stav, pokud vás Anki požádá o vyřešení konfliktu.

Ověřte výsledek. Samotná dokončená animace synchronizace nestačí:

- najděte poznámku, kterou jste přidali offline;
- ověřte, že upravené pole obsahuje nový text;
- podívejte se do historie opakování nebo na termín dalšího opakování kartičky, na kterou jste odpověděli;
- na druhém zařízení otevřete alespoň jeden nově přidaný obrázek nebo zvukový soubor.

Pokud jste stejnou poznámku upravili na dvou zařízeních, přečtěte si její výsledné znění. Nepředpokládejte, že sloučení zachovalo právě text, který jste chtěli. Pokud se objeví červené tlačítko synchronizace nebo volba úplného nahrání či stažení, neodklikávejte ji ze zvyku. Úplné stažení přepíše místní změny sbírky. Úplné nahrání přepíše sbírku na AnkiWeb, kterou pak stáhnou ostatní zařízení.

## Bez pravidelného připojení přeneste sbírku jako soubor

Sbírku Anki můžete přenášet mezi zařízeními i bez pravidelného přístupu k AnkiWeb. Jde ale o předání sbírky, nikoli o sloučení práce z více zařízení.

[Průvodce přenosem sbírky v AnkiMobile](https://docs.ankimobile.net/collection-transfer.html) používá soubor `collection.colpkg`, který obsahuje všechny balíčky i údaje o plánování opakování. Vyexportujete aktuální sbírku, přenesete soubor přes AirDrop nebo sdílení souborů a na druhém zařízení ho importujete. [Příručka AnkiDroid](https://docs.ankidroid.org/manual.html) popisuje podobný postup pro přenos sbírky mezi Androidem a počítačem přes USB.

Import souboru s celou sbírkou nahradí sbírku, která už je v cílovém zařízení. Nedokáže sloučit dvě offline sbírky, které se měnily nezávisle na sobě. Jedno zařízení berte jako aktuální hlavní zdroj: exportujte z něj, importujte na další zařízení, proveďte změny tam a novější sbírku přeneste zpět, než znovu začnete pracovat na prvním zařízení.

To se hodí při práci v terénu, na lodích, na odlehlých místech nebo v sítích s omezeným přístupem, kde je občasný přenos souboru možný, ale pravidelná cloudová synchronizace ne. Na běžný let nebo dojíždění je jednodušší dokončit synchronizaci přes AnkiWeb před odjezdem.

## Synchronizace není záloha Anki

Synchronizace udržuje zařízení ve stejném stavu. Náhodné smazání nebo nechtěná změna se proto mohou rozšířit do všech synchronizovaných zařízení.

Nainstalované aplikace Anki uchovávají místní zálohy, média však vyžadují zvláštní pozornost. Například [průvodce nastavením AnkiMobile](https://docs.ankimobile.net/preferences.html) uvádí, že jeho automatické zálohy obsahují kartičky a statistiky, ale nikoli zvuky nebo obrázky. Export celé sbírky včetně médií slouží k jinému účelu než synchronizace i historie automatických záloh.

Pokud by vás obnova balíčku stála hodně práce, pravidelně si ukládejte úplný export včetně médií někam mimo zařízení, které používáte každý den. Podrobnější [průvodce zálohováním kartiček](/blog/how-to-back-up-flashcards/) vysvětluje, jak tuto kopii pro obnovu doplnit o přenositelný text a původní zdrojové soubory.

## Desetiminutová zkouška v režimu letadlo

Vyzkoušejte tento postup na konkrétním notebooku, telefonu nebo tabletu, který si vezmete s sebou. Úspěšný test na počítači nic nevypovídá o stavu složky s médii v telefonu.

1. Ještě online otevřete nainstalovanou aplikaci Anki a spusťte synchronizaci. Pokud jde o nové zařízení, nejprve dokončete úvodní stažení sbírky.
2. Počkejte na dokončení synchronizace médií. Nekončete jen proto, že už vidíte názvy balíčků.
3. Otevřete každý balíček, který potřebujete. Vyzkoušejte několik kartiček s obrázky, zvukem, vlastními písmy a zvláštním chováním šablon, na které spoléháte.
4. Zapněte režim letadlo nebo jinak vypněte všechna síťová připojení.
5. Anki úplně zavřete, znovu ho otevřete a spusťte požadovaný balíček. Tak odhalíte postup, který fungoval jen díky již otevřené obrazovce.
6. Zopakujte několik kartiček. Přidejte jednu jasně označenou testovací poznámku a proveďte jednu neškodnou úpravu textu.
7. Stále offline aplikaci ukončete a znovu otevřete. Ověřte, že se zachovala opakování, nová poznámka, úprava i místní média.
8. Vyzkoušejte každý slovník, hlas pro převod textu na řeč nebo doplněk, který chcete používat. Poznamenejte si, které části potřebují síť.
9. Znovu se připojte a synchronizujte toto zařízení. Počkejte na dokončení synchronizace sbírky i médií.
10. Synchronizujte druhé zařízení. Než testovací obsah smažete, ověřte na něm testovací poznámku, úpravu, stav opakování i média.

Při této zkoušce nepředělávejte typy poznámek na dvou zařízeních. Cílem je ověřit postup pro cestování: správná sbírka je uložená místně, důležitá média se otevírají, práce offline se zachová i po restartu aplikace a pozdější synchronizace ji přenese dál.

## Anki na cestu stačí, když si zařízení připravíte

Nainstalované aplikace Anki se na cesty dobře hodí, pokud chcete mít celou sbírku uloženou místně, nikoli jen malou sadu kartiček v mezipaměti. Omezení jsou konkrétní: sbírku a média musíte mít v zařízení předem, AnkiWeb funguje pouze online a funkce kartiček závislé na síti stále potřebují připojení.

Pokud vybíráte mezi několika nástroji na cesty, [srovnání aplikací na kartičky s offline režimem](/blog/best-offline-flashcards-app/) hodnotí pět produktů podle stejných testů: kartičky, úpravy, pokrok v učení, média a pozdější synchronizace. Pokud zvažujete jiné nástroje pro učení i z jiných důvodů než kvůli připojení, podívejte se na [Anki vs. Nibomo](/blog/anki-vs-flashcards-open-source-app/).

Praktická odpověď na otázku „Funguje Anki offline?“ zní ano: na počítači, iPhonu, iPadu i Androidu, jakmile v konkrétním zařízení máte potřebnou sbírku a média. Před odjezdem synchronizujte, vyzkoušejte režim letadlo a po návratu připojení synchronizujte nejprve zařízení, na kterém jste pracovali offline.
