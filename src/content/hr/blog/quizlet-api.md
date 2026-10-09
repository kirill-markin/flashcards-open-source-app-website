---
title: "Ima li Quizlet javni API u 2026. godini? Trenutačno stanje i sigurne alternative"
description: "Ima li Quizlet API? Na dan 18. kolovoza 2026. nema dokumentiranog javnog API-ja kojem programeri mogu samostalno pristupiti. Usporedite podržane alternative."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "ima li Quizlet API"
  - "javni Quizlet API"
  - "Quizlet API za programere"
  - "alternativa za Quizlet API"
  - "automatizacija kartica za učenje"
---

Na dan 18. kolovoza 2026. Quizlet nema dokumentiran javni API kojem bi programeri mogli samostalno pristupiti ni javni portal za programere. Neovisni programeri trenutačno nemaju službeni način da registriraju aplikaciju, dobiju API ključ za Quizlet i putem dokumentiranih krajnjih točaka čitaju ili zapisuju podatke o karticama za učenje.

To je zaključak o Quizletovoj javnoj dokumentaciji, a ne tvrdnja o njegovim internim sustavima. Quizlet očito ima integracije s drugim proizvodima i partnerima. Dva su aktualna primjera njegova aplikacija u ChatGPT-u i dodatak za Google Classroom. Ni jedno ni drugo drugim aplikacijama ne otvara pristup Quizletovu API-ju opće namjene.

**Činjenice provjerene:** 18. kolovoza 2026.

> **Napomena o povezanosti:** Ja sam Kirill Markin i razvijam Nibomo, čiji se Agent API i MCP poslužitelj u nastavku navode kao alternative. Nibomo nije kompatibilan s Quizletom i ne uvozi automatski Quizletove skupove kartica.

![Programer uspoređuje Quizletov izvoz, ugrađivanje, integracije s pojedinim proizvodima i dokumentirani API za kartice za učenje](/blog/quizlet-api.png)

## Kratak odgovor: Quizlet nema dokumentiran API za samostalan pristup

Ako ste pretraživali „ima li Quizlet API?” jer želite automatizirati rad u samom Quizletu, trenutačni praktični odgovor glasi: **nema dokumentiranog javnog API-ja kojem možete samostalno pristupiti**.

Neke službene značajke na prvi pogled mogu nalikovati API-ju, ali služe konkretnijim, užim namjenama:

| Što vam treba | Podržani način | Za što je koristan | Što ne omogućuje |
|---|---|---|---|
| Prenijeti tekst iz skupa koji ste sami izradili | [Izvoz na Quizletovoj web-stranici](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Jednokratno kopiranje pojmova i definicija | Izvoz slika, kopiranih skupova ili povijesti učenja te pristup API-ju |
| Postaviti javni skup na web-stranicu ili stranicu u sustavu za upravljanje učenjem (LMS) | [Ugrađivanje Quizleta](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Aktivnost za učenje s Quizletovim logotipom unutar vaše stranice | Strukturirane podatke o karticama ni pristup za čitanje i zapisivanje |
| Pretvoriti razgovor u ChatGPT-u u Quizletov skup | [Quizletova aplikacija u ChatGPT-u](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | Izradu i pregled skupa putem `@Quizlet` | Pristupne podatke ni krajnje točke za vlastitu aplikaciju |
| Zadavati Quizletove aktivnosti u Google Classroomu | [Quizletov dodatak za Google Classroom](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Pronalaženje, zadavanje i praćenje aktivnosti u Classroomu | API opće namjene za vlastiti obrazovni softver |
| Izraditi vlastitu integraciju s Quizletom | Trenutačno nije dokumentiran način za samostalan pristup | Može postojati zaseban partnerski dogovor | Javnu registraciju, API ključeve ni dokumentiranu specifikaciju za rad s karticama |
| Automatizirati vlastiti radni prostor s karticama | [Nibomo Agent API](/hr/docs/api/) ili [MCP konektor](/hr/docs/mcp-connector/) | Ponavljano čitanje i zapisivanje kartica i špilova unutar odabranog radnog prostora | Kompatibilnost s Quizletom ni automatski uvoz iz Quizleta |

Razlika je jednostavna: izvoz služi jednokratnom kopiranju teksta vlastitih kartica, a ugrađivanje prikazu Quizleta na drugoj stranici. Integracija s određenim proizvodom omogućuje samo radnje predviđene tom integracijom. Softveru koji redovito izrađuje, čita i uređuje kartice potreban je dokumentiran API za čitanje i zapisivanje.

## Izvoz, ugrađivanje i partnerski pristup nisu javni API-ji

Javni API vanjskim programerima daje jasno definirane uvjete i mogućnosti: dokumentaciju, autentikaciju, podržane operacije, pravila uporabe i način dobivanja pristupnih podataka. Nijedna Quizletova trenutačno javno dostupna mogućnost ne nudi sve što je potrebno za takav samostalan pristup.

Quizletov **izvoz** ručni je prijenos. Autor skupa može na web-stranici odabrati raspored pojmova i definicija, kliknuti **Kopiraj tekst (Copy text)** i zalijepiti rezultat drugdje. Quizlet navodi da izvoz slika nije dostupan, da se kopirani skupovi ne mogu izvesti te da je značajka dostupna samo na web-stranici. To je prikladno za pažljiv jednokratni prijenos. Ne omogućuje softveru da održava dva sustava usklađenima.

**Ugrađivanje** služi prikazu, a ne pristupu podacima. Quizlet omogućuje kopiranje HTML koda za javni skup u načinima rada povezivanje (Match), učenje (Learn), test (Test), kartice (Flashcards) ili pisanje po sluhu (Spell). Ugrađena aktivnost zadržava Quizletov logotip, a učenici rade u Quizletovu sučelju. Vaša aplikacija ne dobiva skup u obliku zapisa o karticama koje može uređivati.

**Integracija s određenim proizvodom** omogućuje dogovoreni skup radnji u tom proizvodu. Quizlet može surađivati s ChatGPT-om ili Google Classroomom bez otvaranja istog sučelja svim programerima. Objave tih integracija potvrđuju da one postoje, ali ne i da iza njih stoji javni Quizlet API dostupan za opću uporabu.

Zato ni stara biblioteka koja posreduje u pristupu Quizletu ni zahtjev vidljiv u razvojnim alatima preglednika ne predstavljaju podržani Quizlet API. Nedostaju javna dokumentacija i stabilna specifikacija za programere.

## Odaberite način koji odgovara zadatku

### Za jednokratnu sigurnosnu kopiju ili migraciju koristite izvoz

Za skup koji ste sami izradili koristite Quizletov službeni postupak izvoza. Budući da postupak završava opcijom **Kopiraj tekst (Copy text)**, sačuvajte prvu zalijepljenu kopiju bez izmjena prije uređivanja razdjelnika ili raspoređivanja podataka u odgovarajuća polja. Tako čuvate pojmove i definicije; ne preuzimate paket iz kojeg biste mogli obnoviti špil. Slike i povijest učenja ostaju u Quizletu.

Praktičan popis koraka nalazi se u vodiču [Kako izvesti Quizletove skupove u 2026.](/hr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Obuhvaća izvornu i radnu kopiju, UTF-8, tabulatore, višeredne definicije te razliku između prijenosa sadržaja kartica i prijenosa podataka o rasporedu ponavljanja.

Izvoz je prikladan za jednokratan prijenos podataka. Nije prikladan za svakodnevnu izradu, sinkronizaciju ili ponavljano uređivanje putem softvera.

### Za prikaz koristite službeno ugrađivanje

Ako učenici trebaju učiti iz javnog Quizletova skupa na stranici razreda ili u LMS-u, upotrijebite kod za ugrađivanje koji Quizlet nudi na svojoj web-stranici. Odaberite aktivnost, kliknite **Kopiraj HTML (Copy HTML)** i dodajte dobiveni kod na stranicu. Učenici dobivaju interaktivnu Quizletovu aktivnost, ali stranica na kojoj je ugrađena ne dobiva izravan pristup podacima o karticama.

Nastavniku je često upravo to dovoljno. Nazivati tu mogućnost API-jem samo stvara dojam da je zadatak složeniji nego što jest.

### Za ChatGPT ili Google Classroom koristite pripadajuću integraciju

Quizletova objava od 10. ožujka 2026. o integraciji s ChatGPT-om opisuje konkretan postupak: povežite Quizletovu aplikaciju, započnite upit s `@Quizlet`, pregledajte generirani skup u ChatGPT-u, a zatim ga otvorite u Quizletu kako biste ga prilagodili i učili iz njega. To je podržan način izrade Quizletova skupa iz tog razgovora. Time vaš bot, skripta ili web-stranica ne dobivaju pristupne podatke za samostalnu uporabu Quizletova API-ja.

Jednako je konkretna i Quizletova objava o Google Classroomu od 30. lipnja 2026. Dodatak nastavnicima omogućuje pronalaženje i zadavanje aktivnosti, uključujući pitanja za vježbu, kartice i igre, a zatim i praćenje sudjelovanja i napretka unutar Classrooma. Quizlet navodi da je potreban Google Workspace for Education Plus; nastavnici će možda morati zatražiti od IT administratora da im odobri pristup ili omogući dodatak.

Ako jedan od tih postupaka već odgovara vašem cilju, koristite ga. Ako vam treba vlastita aplikacija, nijedna od tih integracija ne zamjenjuje javni pristup za programere.

### Za redovitu automatizaciju odaberite dokumentirano sučelje za čitanje i zapisivanje

Za redovitu automatizaciju vaš softver mora pouzdano obavljati isti posao više puta: izrađivati kartice iz bilješki, dohvaćati popis špilova, ažurirati odgovore ili dugoročno upravljati radnim prostorom. Izvoz putem međuspremnika ne pruža sučelje potrebno za takav rad.

Siguran je izbor sustav za kartice s javnom dokumentacijom o autentikaciji vanjskog softvera i podržanim operacijama čitanja i zapisivanja. To može značiti da za automatizirani dio posla odaberete alternativu Quizletovu API-ju, a Quizlet zadržite za oblike učenja koje njegove javno dostupne značajke podržavaju.

## Što zapravo nudi Nibomo kao alternativa Quizletovu API-ju

Nibomo nudi dva načina pristupa istom ograničenom skupu podataka pojedinog korisnika:

- [Vanjski Agent API](/hr/docs/api/) počinje na `GET https://api.nibomo.com/v1/`. Početni odgovor vodi agenta kroz prijavu jednokratnim kodom (OTP) poslanim e-poštom, izradu API ključa i odabir radnog prostora. Za čitanje služi ruta za upite u stilu SQL-a, a za zapisivanje zasebna ruta za izvršavanje naredbi.
- [Udaljeni MCP poslužitelj](/hr/docs/mcp-connector/) dostupan je na `https://mcp.nibomo.com/mcp`. MCP klijenti dobivaju osam alata: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` te alate za ponavljanje `next_review_card`, `reveal_answer` i `submit_review`.

`get_usage_limits` služi isključivo za čitanje podataka o korisničkom planu, ograničenjima i dosadašnjoj uporabi AI-ja u tekućem mjesecu; ne čita niti mijenja kartice.

Oba načina pristupa ograničena su na odabrani radni prostor. Objavljeni resursi su `workspace`, `cards`, `decks` i `review_events`, a rezultati su ograničeni na 100 redaka po naredbi. Sučelje u stilu SQL-a koristi ograničen dijalekt, a ne izravan pristup PostgreSQL-u. Nema OpenAPI sheme, pa je za postupke koji ovise o generiranim OpenAPI klijentima potrebno drugo sučelje.

To programeru ili AI agentu može pomoći da automatizira rad s vlastitim karticama. Nibomo ne može dohvatiti sadržaj s Quizletova URL-a, zrcaliti Quizletov račun ni služiti kao nedokumentirani Quizletov klijent. Automatski uvoz iz Quizleta ne postoji. Za migraciju najprije izvezite pojmove i definicije iz vlastitog skupa, pregledajte tekst, a zatim rasporedite podatke u odgovarajuća polja kartica u odredišnom sustavu. Odredišni sustav stvara vlastite podatke o stanju učenja; povijest iz Quizleta ne prenosi se.

Za razlike među proizvodima koje nadilaze pristup API-ju pogledajte [usporedbu Quizleta i njegove alternative otvorenog koda](/blog/quizlet-alternative/).

## Privatni zahtjevi preglednika nisu siguran prečac

Quizletovo web-sučelje šalje mrežne zahtjeve, kao i svaka moderna web-aplikacija. To što ste pronašli takav zahtjev ne znači da je riječ o podržanoj krajnjoj točki za vaš program.

Privatne krajnje točke kojima pristupa preglednik mogu ovisiti o kolačićima sesije, internim formatima, mehanizmima za sprječavanje zlouporabe i pretpostavkama vezanima uz trenutačno sučelje. Mogu se promijeniti bez javno objavljenih verzija ili uputa za migraciju. Još konkretnije, [Quizletovi uvjeti korištenja](https://quizlet.com/tos), posljednji put ažurirani 28. svibnja 2026., zabranjuju scraping i druge oblike automatiziranog izdvajanja podataka, kao i neovlaštenu automatiziranu uporabu usluge.

To je nepouzdan i rizičan temelj čak i za osobnu skriptu, a kamoli za proizvod. Ovdje neću nagađati adrese krajnjih točaka ni navoditi korake za obrnuti inženjering.

Za vlastiti skup koristite izvoz kada vam treba jednokratan prijenos. Ugradite javni skup kada učenicima treba na drugoj stranici. Za točno određene postupke u ChatGPT-u ili Google Classroomu koristite njihove integracije. Za ponavljano čitanje i zapisivanje odaberite softver s dokumentiranim mogućnostima automatizacije ili nastavite ručno obavljati dio posla u Quizletu dok ne objavi takvu dokumentaciju.

## Kako prepoznati promjenu statusa

Quizlet bi nakon datuma provjere činjenica u ovom članku mogao pokrenuti program za programere. Tražite službeni portal za programere ili dokumentaciju koja objašnjava tko se može registrirati, kako funkcionira autentikacija, koje su operacije nad karticama podržane i koja pravila uporabe vrijede.

Još jedna neslužbena programska biblioteka ne bi promijenila odgovor. Ne bi ga promijenilo ni novo partnerstvo s određenim proizvodom. Dok Quizlet ne dokumentira samostalan pristup za programere, oprezno procjenjujte tvrdnje o trenutačno dostupnom Quizletovu API-ju i odaberite podržani način koji odgovara stvarnom zadatku.
