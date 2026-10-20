---
title: "Ima li Quizlet MCP poslužitelj u 2026.? Što Claude i Codex mogu koristiti"
description: "Quizlet u 2026. nema dokumentiran MCP poslužitelj. Usporedite njegovu aplikaciju za ChatGPT, izvoz dostupan samo autorima i siguran put do redovitog pristupa iz alata Claude ili Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP poslužitelj"
  - "Quizlet poveznik za Claude"
  - "povezivanje Quizleta s alatom Claude"
  - "Quizlet Codex"
  - "Quizlet aplikacija za ChatGPT"
  - "alternativa za Quizlet API"
---

Prema stanju na dan 12. rujna 2026., Quizletova javna dokumentacija ne opisuje MCP poslužitelj ni javni razvojni API kojem programeri mogu samostalno pristupiti. Ako ste tražili URL za Quizlet MCP koji biste zalijepili u Claude, Codex ili neki drugi MCP klijent, u Quizletovoj dokumentaciji trenutačno nema javno dostupnih uputa za takvo povezivanje.

Quizlet ima službenu aplikaciju unutar ChatGPT-a. Ona može pretvoriti razgovor iz ChatGPT-a u novi Quizletov skup kartica, ali taj konkretan postupak nije Quizletov MCP poslužitelj za višekratnu upotrebu. Ako vam treba redovit pristup agenta postojećim karticama, praktičan je put izvesti tekst iz skupa koji ste sami izradili, sačuvati izvornu kopiju, pregledati prijenos i koristiti sustav kartica za učenje koji izričito omogućuje agentima čitanje i pisanje.

**Činjenice provjerene:** 12. rujna 2026.

> **Napomena o povezanosti:** Ja sam Kirill Markin i razvijam Nibomo, čiji su MCP poslužitelj i Agent API u nastavku navedeni kao alternative. Nibomo se ne može povezati s Quizletovim računom niti uvesti sadržaj putem Quizletova URL-a.

![Vrtlar prenosi jednu mladu biljku iz zatvorenog staklenika u vrtnu gredicu s razgranatim sustavom navodnjavanja kap po kap](/blog/quizlet-mcp-server.png)

## Aplikacija za ChatGPT, izvoz i MCP služe različitim zadacima

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) otvoreni je standard za povezivanje AI aplikacija s vanjskim sustavima. MCP poslužitelj kompatibilnim klijentima obično nudi poznatu krajnju točku i definiran skup alata koje mogu pozivati.

Quizletova [službena objava o ChatGPT-u](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) opisuje drugačiji način rada. Instalirate Quizletovu aplikaciju u ChatGPT, započnete upit s `@Quizlet`, pregledate generirane kartice za učenje unutar ChatGPT-a, a zatim otvorite skup u Quizletu kako biste ga prilagodili i učili iz njega.

To je korisno kada je zadatak „pretvori ovaj razgovor iz ChatGPT-a u Quizletov skup kartica”. Objava ne navodi opću MCP krajnju točku za Quizlet, ne daje alatima Claude ili Codex pristup vašoj biblioteci na Quizletu niti nudi razvojne vjerodajnice za višekratnu upotrebu.

To ništa ne govori o Quizletovoj privatnoj ili internoj infrastrukturi. Opisuje samo sučelje koje Quizlet stavlja na raspolaganje u svojoj javnoj dokumentaciji. Šire granice pristupa za programere obrađene su u članku [Ima li Quizlet javni API u 2026.?](/hr/blog/quizlet-api/).

Razlika je jasna:

| Što zapravo želite | Trenutačno najbolje podržan put | Što možete očekivati |
| --- | --- | --- |
| Izraditi novi Quizletov skup kartica iz razgovora u ChatGPT-u | Quizletova službena aplikacija za ChatGPT | Konkretan postupak s oznakom `@Quizlet` unutar ChatGPT-a, nakon čega slijede uređivanje i učenje u Quizletu |
| Prenijeti pojmove i definicije iz skupa koji ste sami izradili | Izvoz na Quizletovoj web-stranici | Jednokratnu tekstualnu kopiju koju čuvate i provjeravate |
| Omogućiti alatu Claude, Codex ili nekom drugom agentu da opetovano čita ili uređuje kartice za učenje | Sustav kartica za učenje s dokumentiranim MCP poslužiteljem ili agentskim API-jem | Autentificiran pristup odredišnom radnom prostoru, a ne Quizletu |
| Razvijati softver koji radi s podacima Quizletova računa | Pričekati službenu razvojnu dokumentaciju ili ovlašteni partnerski pristup | Trenutačno nije dokumentirano javno API ili MCP sučelje za Quizlet kojem programeri mogu samostalno pristupiti |

Quizletova aplikacija za ChatGPT pokriva jedan postupak izrade. Izvoz služi za jednokratan prijenos. MCP omogućuje ponovljiv pristup sustavu koji namjerno stavlja alate na raspolaganje. Ti pristupi nisu međusobno zamjenjivi.

## Odaberite najkraći podržani put

Ako službena aplikacija za ChatGPT već odgovara zadatku, koristite je. Nema razloga uvoditi drugi sustav samo da biste iz jednog razgovora izradili jedan Quizletov skup kartica.

Ako vam treba samo sigurnosna kopija ili jednokratan prijenos, koristite Quizletov izvoz. Ako vam treba agent koji će se sutra vratiti, pronaći špil, dodati kartice i ispraviti ih, u odredišnom sustavu trebate dokumentirano sučelje za čitanje i pisanje. Dok ga Quizlet ne objavi, takav ponavljajući postupak ne može biti podržana izravna veza s vašim Quizletovim računom.

Za prilagođeni softver izrađen upravo za rad s Quizletovim podacima vrijedi ista granica. Zahtjev iz preglednika, stara omotna biblioteka ili integracija koju je netko izradio obrnutim inženjerstvom nisu zamjena za aktualnu razvojnu dokumentaciju.

## Sačuvajte mogućnost povratka pri izvozu vlastitog skupa

Quizletove [službene upute za izvoz](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) navode da skup može izvesti samo njegov autor, i to samo na web-stranici. Postupak je **Više → Izvoz → Kopiraj tekst**. Izvoz obuhvaća pojmove i definicije; Quizlet navodi da se slike ne mogu izvesti i da kopirani skupovi ne ispunjavaju uvjete za izvoz.

Za skup koji ste sami izradili dovoljan je kratak, oprezan postupak prijenosa:

1. Upotrijebite izvoz na Quizletovoj web-stranici i zalijepite rezultat u običnu tekstualnu datoteku.
2. Prije mijenjanja razdjelnika, prijeloma redaka ili formulacija spremite netaknutu kopiju u kodiranju UTF-8.
3. Uređujte duplikat, a ne izvorni izvoz.
4. Provjerite uzorak s početka, sredine i kraja te definicije u više redaka i nelatinične znakove.
5. Uvezite ili priložite radnu kopiju, pregledajte prednju i stražnju stranu nekoliko kartica i tek ih onda spremite.
6. Zadržite Quizletov skup i izvornu datoteku dok ne otvorite i isprobate odredišni špil.

Sve provjere razdjelnika, CSV-a i datoteka opisane su u članku [Kako izvesti Quizletove skupove u 2026.](/hr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Važno ograničenje lako promakne: izvoz prenosi tekst kartica, ali ne i Quizletove slike, mape, povijest učenja, stanje usvojenosti gradiva ili raspored ponavljanja.

Zato je važno sačuvati mogućnost povratka. Ako se definicija u više redaka pretvori u dvije kartice ili razdjelnik pomakne polja, izvorna datoteka pruža vam pouzdan izvornik za usporedbu.

## Što Claude i Codex mogu koristiti nakon izvoza

Nibomo objavljuje udaljenu MCP krajnju točku na adresi:

`https://mcp.nibomo.com/mcp`

> [Povežite s alatom Claude](https://claude.ai/directory/nibomo) · [Dokumentacija](/hr/docs/mcp-connector/)

[Dokumentacija Nibomova MCP poveznika](/hr/docs/mcp-connector/) definira osam alata: `list_workspaces`, `sql_query` za čitanje, `sql_execute` za pisanje, `get_guide` za referentne vodiče te `next_review_card`, `reveal_answer` i `submit_review` za ponavljanje gradiva. Interaktivni MCP klijenti mogu se autorizirati putem OAutha. Agenti u terminalu mogu umjesto toga krenuti od [dokumentacije za Agent API](/hr/docs/api/) i koristiti objavljeni HTTP postupak.

`get_usage_limits` — isključivo za čitanje podataka o pretplatničkom paketu računa, ograničenjima i trenutačnoj mjesečnoj potrošnji AI-ja; ne čita niti mijenja kartice.

Time Nibomo ne postaje poveznik za Quizlet. Podržani postupak je sljedeći:

1. izvezite tekst iz Quizletova skupa čiji ste autor;
2. sačuvajte izvornu datoteku i pregledajte radnu kopiju;
3. pregledajte kako je sadržaj raspoređen u kartice prije nego što ih spremite u Nibomo;
4. povežite nastali radni prostor u Nibomu s kompatibilnim klijentom za buduće čitanje i pisanje.

Za Claude su koraci povezivanja opisani u članku [Kako povezati Nibomo s alatom Claude putem MCP-a](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex i drugi agenti mogu koristiti dokumentirani MCP ili Agent API pristup koji njihovo okruženje podržava.

Nibomo ne može pročitati Quizletov URL, zrcaliti Quizletov račun, sinkronizirati kasnije promjene na Quizletu niti vratiti slike i povijest učenja koje izvoz nije obuhvatio. Iz materijala koji odlučite prenijeti stvara vlastite kartice i novo stanje rasporeda ponavljanja.

Ako procjenjujete isplati li se takva promjena i zbog drugih razloga osim agentskog pristupa, pogledajte [usporedbu s alternativom Quizletu otvorenog koda](/blog/quizlet-alternative/).

## Ograničite ovlasti na ono što zadatak zahtijeva

Javno definirano sučelje smanjuje dio nagađanja pri integraciji, ali ne čini svaku MCP radnju sigurnom. OAuth autentificira vezu. Ne jamči da je kartica koju je generirao AI točna, ne zadržava vraćene podatke s kartica unutar servisa za kartice za učenje i ne odlučuje odgovara li izmjena vašoj namjeri.

Nibomo odvaja operacije čitanja od svojih alata za pisanje: `sql_execute` za kartice i špilove, `submit_review` za ponavljanja gradiva. Vjerodajnica za OAuth i dalje vrijedi za cijelo sučelje poveznika, pa blokiranje alata i način odobravanja ovise o klijentu. Počnite s malim radnim prostorom bez osjetljivih podataka. Dopustite agentu da čita samo podatke potrebne za zadatak, zahtijevajte zasebno odobrenje za svaki poziv za pisanje kada klijent to podržava te pregledajte radni prostor i predloženu izmjenu prije nego što je prihvatite.

Nemojte povezivati privatne materijale za učenje dok ne provjerite uvjete AI klijenta o zadržavanju podataka i postupanju s njima. Za prvi prijenos dovoljno je jednostavno pravilo: sačuvajte izvorni izvoz, pregledajte nekoliko kartica, odobrite usko ograničen upis i provjerite rezultat u odredišnoj aplikaciji prije nego što nastavite.

## Ne pretvarajte privatni promet preglednika u API

Zahtjev vidljiv u razvojnim alatima preglednika nije javni Quizletov API. Privatne krajnje točke mogu ovisiti o kolačićima sesije, internim formatima i ponašanju koje se mijenja bez najave. Svaka automatizirana upotreba također mora biti u skladu s [Quizletovim uvjetima korištenja](https://quizlet.com/tos) i dopuštenjima koja imate za taj materijal.

Ovaj članak ne daje upute za automatsko prikupljanje podataka niti krajnje točke dobivene obrnutim inženjerstvom. Ako službena aplikacija za ChatGPT odgovara zadatku, koristite je. Ako ste sami izradili skup i trebate jednokratan prijenos, izvezite ga. Ako agent treba redovito čitati i pisati, prenesite pregledani sadržaj u sustav koji javno opisuje takvo sučelje, a radnje u Quizletu i dalje obavljajte ručno dok Quizlet ne dokumentira nešto novo.
