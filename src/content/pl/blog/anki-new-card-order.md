---
title: "Kolejność nowych kart w Anki – jak wybierać i sortować karty oraz sprawdzać kolejkę"
description: "Na przykładzie sześciu kart zobacz, jak Anki wybiera i sortuje nowe karty. Sprawdź limity podtalii, pozycje w kolejce i talię wybraną do nauki."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "kolejność nowych kart w Anki"
  - "kolejność wybierania nowych kart w Anki"
  - "kolejność sortowania nowych kart w Anki"
  - "Anki rosnąco według pozycji"
  - "karty w Anki w niewłaściwej kolejności"
---

Nowa karta o pozycji 10 może pojawić się w Anki po karcie o pozycji 60. Jeśli uczysz się z talii nadrzędnej, a Anki wybiera karty **Według talii** (Deck) i sortuje je **W kolejności wyboru** (Order gathered), program może skończyć wybieranie kart z wcześniejszej podtalii, zanim dotrze do tej z kartą o pozycji 10. Posortowanie kart według daty utworzenia w przeglądarce nie zmieni kolejki nauki.

Anki ustala kolejność nowych kart w dwóch etapach. Najpierw **wybiera** karty w granicach dzisiejszych limitów, a potem **sortuje** wybrany zestaw. Zacznij od ustalenia, czy do kolejki trafiają inne karty, niż oczekujesz, czy właściwe karty pojawiają się w innej kolejności.

Te wskazówki dotyczą zwykłych talii w Anki na komputerze. Przykład z sześcioma kartami to autorskie obliczenie na papierze. Opiera się na aktualnej instrukcji i kodzie wydania [Anki 26.09.3](https://github.com/ankitects/anki/releases/tag/26.09.3), sprawdzonych 6 października 2026 r. Przykładu nie sprawdzano w samej aplikacji.

![Mężczyzna trzyma czwartą płytę winylową nad pustą przegródką stojaka, obok trzech innych płyt. Za nim stoją dwie skrzynki z albumami, których nie wybrał.](/blog/anki-new-card-order.png)

## Ustaw taką kolejność, jakiej potrzebujesz

Otwórz **Opcje** (Options) talii, z której zaczynasz naukę, i przejdź do sekcji **Kolejność wyświetlania** (Display Order). Gdy uczysz się z talii nadrzędnej, jej ustawienia kolejności obowiązują w całej sesji, także dla kart z podtalii.

| Oczekiwany wynik | Kolejność wybierania nowych kart (New Card Gather Order) | Kolejność sortowania nowych kart (New Card Sort Order) |
| --- | --- | --- |
| Zachowaj rosnącą kolejność pozycji w całej wybranej talii i jej podtaliach | Rosnąco według pozycji (Ascending position) | W kolejności wyboru |
| Przechodź przez podtalie alfabetycznie, a w każdej z nich według pozycji kart | Według talii | W kolejności wyboru |
| Zachowaj wybrany zestaw kart i pokaż je w losowej kolejności | Dowolne wybrane ustawienie wybierania | Losowo (Random) |

Tak działają opcje opisane w angielskiej instrukcji Anki. [Wybieranie nowych kart](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) i [sortowanie nowych kart](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order).

Opcja **Rosnąco według pozycji** korzysta z zapisanych pozycji nowych kart. Kolejność może się różnić od kolejności według daty utworzenia, bo na pozycje wpływa zarówno kolejność wstawiania kart, jak i ich ręczne przesuwanie.

Przed zmianą sprawdź, jaki zestaw ustawień jest przypisany do talii i jakie inne talie z niego korzystają. Ustawienia kolejności wyświetlania są wspólne dla tych talii. Jeśli zmiana ma dotyczyć tylko jednej talii, najpierw przypisz jej osobny zestaw. Dzienne limity można ustawić osobno za pomocą opcji **Ta talia** (This deck) i **Tylko dziś** (Today only). [Jak przypisać osobny zestaw ustawień jednej talii (po angielsku)](/blog/anki-deck-options-presets/).

## Sprawdź, które cztery karty wejdą do kolejki

Wyobraź sobie zwykłą talię nadrzędną `OrderLab` z dwiema podtaliami i tylko sześcioma kartami z poniższej tabeli. Każda karta pochodzi z osobnej notatki typu **Podstawowy** (Basic), która tworzy jedną kartę. Wszystkie sześć kart ma więc ten sam numer typu i żadna nie ma pary z tej samej notatki.

| Karta | Talia | Zapisana pozycja nowej karty |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Załóżmy, że wszystkie sześć kart jest nowych. Żadna nie jest zakopana ani zawieszona i żadna nie znajduje się w talii filtrowanej. Na początku nie ma innych kart, ponownych wyświetleń w ramach nauki ani powtórek. Dziś nie przerobiono jeszcze żadnej karty. `OrderLab` nie ma nad sobą żadnej talii, a obowiązujące limity powtórek zostawiają miejsce na wszystkie sześć nowych kart.

W tym porównaniu wybierasz do nauki **OrderLab**. Jej obowiązujący limit nowych kart to **4**. Limit `01 First` wynosi **3**, a `02 Second` ma limit **2**. Nie ma tymczasowych zmian limitów. W obu wariantach sortowanie jest ustawione na **W kolejności wyboru**. Każdy wariant zaczyna się od tego samego stanu kolekcji. Prześledź oba na papierze, bez odpowiadania na karty między porównaniami.

Przy wybieraniu **Według talii** przebiega to tak.

1. Anki przechodzi przez podtalie alfabetycznie, więc trafia do `01 First` przed `02 Second`.
2. Wybiera **A, B, C** według pozycji. Z `01 First` weszły trzy karty, więc w limicie talii nadrzędnej zostało jedno miejsce.
3. Anki wybiera **D** z `02 Second` i osiąga limit czterech kart w talii nadrzędnej.

Oczekiwana kolejność pierwszych wyświetleń to **A → B → C → D**. Karty E i F zostają poza wybranym zestawem.

Przy ustawieniu **Rosnąco według pozycji** Anki rozpatruje karty z obu podtalii w kolejności **D → A → E → B → F → C**. Pierwsze cztery mieszczą się we wszystkich limitach. Dwie pochodzą z `02 Second`, dwie z `01 First`, a łącznie są cztery. Na tym wybieranie się kończy.

Oczekiwana kolejność to **D → A → E → B**. Karty C i F zostają poza zestawem. Przy dodawaniu każdej karty Anki uwzględnia limity jej talii i talii nadrzędnej. [Kod wybierania kart w Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs).

Limit dwóch kart oznacza, że z `02 Second` mogą wejść najwyżej dwie karty. Przy wybieraniu **Według talii** wchodzi tylko jedna, bo `01 First` zajęła już trzy z czterech dostępnych miejsc. Przy wybieraniu **Rosnąco według pozycji** wchodzą po dwie karty z każdej podtalii ze względu na ich konkretne pozycje. W innej kolekcji podział może wyglądać inaczej.

## Co się zmienia, gdy do kolejki wejdzie cała szóstka?

W drugim porównaniu na papierze ustaw limity tak, by zmieściły się wszystkie karty. Przyjmij **6** dla talii nadrzędnej, **3** dla `01 First` i **3** dla `02 Second`. Zachowaj sortowanie **W kolejności wyboru**.

| Ustawienie wybierania | Limity (talia nadrzędna / 01 First / 02 Second) | Oczekiwana kolejność pierwszych wyświetleń |
| --- | --- | --- |
| Według talii | 6 / 3 / 3 | A → B → C → D → E → F |
| Rosnąco według pozycji | 6 / 3 / 3 | D → A → E → B → F → C |

W obu wariantach Anki wybiera wszystkie sześć kart. Różni się tylko kolejność. Gdyby podnieść do sześciu jedynie limit talii nadrzędnej, a w `02 Second` zostawić limit dwóch kart, weszłoby ich tylko pięć. F nadal zostałaby poza kolejką. Wyższe limity służą tu wyłącznie do porównania na papierze.

## Sortowanie nie doda pominiętej karty

Wróć do pierwotnych limitów **4 / 3 / 2** i zmień tylko **Kolejność sortowania nowych kart** na **Losowo**.

| Ustawienie wybierania | Karty, które Anki może potasować | Karty, których sortowanie nie może dodać |
| --- | --- | --- |
| Według talii | A, B, C, D | E, F |
| Rosnąco według pozycji | D, A, E, B | C, F |

Anki tasuje wybrane karty, więc skład obu zestawów pozostaje taki sam. Z tabeli nie da się przewidzieć konkretnej kolejności po losowaniu. [Kod sortowania w Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs).

Opcja **Według typu karty, potem w kolejności wyboru** (Card type, then order gathered) również działa na już wybranym zestawie. Wszystkie sześć kart z notatek typu **Podstawowy** ma ten sam numer typu karty, więc w tym przykładzie sortowanie zachowuje kolejność wyboru.

W osobnym przykładzie załóżmy, że Anki wybrało już cztery karty z notatek o kilku szablonach, w kolejności **W (typ 2), X (typ 1), Y (typ 2), Z (typ 1)**. Sortowanie według typu daje **X → Z → W → Y**. Karty typu 1 pojawiają się pierwsze, a w obrębie każdego typu kolejność wyboru się nie zmienia. Ten przykład zaczyna się po etapie wybierania kart, więc nie rozstrzyga, które karty z tej samej notatki weszłyby do zestawu przy twoich ustawieniach zakopywania.

Numer typu karty oznacza pozycję jej szablonu w obrębie typu notatki. To szablon decyduje, czy karta ćwiczy rozpoznawanie, czy samodzielne formułowanie odpowiedzi. Zanim założysz, że sortowanie według typu pokaże najpierw wszystkie pytania w kierunku podstawowym, sprawdź, jak faktycznie wyglądają te pytania.

## Sprawdź pozycje w przeglądarce, zanim je zmienisz

Otwórz **Przeglądaj** (Browse), wybierz tryb **Karty** (Cards) i przeszukaj talię wraz z jej podtaliami. W tym przykładzie wpisz poniższe zapytanie.

```text
deck:OrderLab is:new
```

Z menu nagłówków włącz kolumny **Pytanie** (Question), **Karta** (Card), **Talia** (Deck), **Termin** (Due) i **Utworzono** (Created). Przy nowej karcie **Termin** pokazuje jej pozycję w kolejce, a **Utworzono** podaje datę utworzenia notatki, z której pochodzi karta. **Pole sortowania** (Sort Field) pokazuje zawartość pola notatki wskazanego do sortowania. Sortowanie według kolumny zmienia tylko układ tabeli. Zapisane pozycje i ustawienie wybierania kart do nauki pozostają bez zmian. [Opis kolumn przeglądarki Anki (po angielsku)](https://docs.ankiweb.net/manual/browsing#columns).

Wyniki wyszukiwania `is:new` mogą obejmować zawieszone lub zakopane nowe karty. Ich pozycje w kolumnie **Termin** są wtedy podane w nawiasach. Poniższe zapytanie wyklucza te karty oraz karty znajdujące się obecnie w taliach filtrowanych.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Jeśli nazwa talii zawiera spacje, ujmij ją w cudzysłów, jak w `deck:"My Deck"`. [Wyszukiwanie według stanu karty](https://docs.ankiweb.net/manual/searching#card-state) i [wyszukiwanie według talii](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) w angielskiej instrukcji Anki.

Wyniki wyszukiwania nie przesądzają o składzie dzisiejszej kolejki. Limity i automatyczne zakopywanie kart z tej samej notatki mogą zmniejszyć liczbę kart, które do niej trafią. [Kiedy karty są zakopane, a kiedy zawieszone (po angielsku)](/blog/anki-bury-vs-suspend/).

Jeśli zapisane pozycje odpowiadają zamierzonej kolejności, zostaw je. Jeśli trzeba je zmienić, zapisz dotychczasowe pozycje, zaznacz kilka konkretnych nowych kart i wybierz **Karty → Zmień pozycję** (Cards → Reposition). Najpierw sprawdź ustawienia w oknie dialogowym. Opcja **Przesuń pozycje istniejących kart** (Shift position of existing cards) może zmienić także pozycje niezaznaczonych kart o wyższych numerach. Jeśli wyłączysz przesuwanie, nowe pozycje mogą pokryć się z dotychczasowymi. Gdy kilka kart ma tę samą pozycję, z jej numeru nie da się wywnioskować kolejności wyświetlania. [Opis polecenia zmiany pozycji w instrukcji Anki (po angielsku)](https://docs.ankiweb.net/manual/browsing#cards).

Ustawienia wybierania i sortowania możesz zmienić bez kasowania historii nauki i powtórek. Przy szukaniu przyczyny skup się na pozycjach nowych kart i ustawieniach kolejności wyświetlania.

## Sprawdź, z której talii zaczynasz i ile miejsc zostało na dziś

W pierwotnym przykładzie wybranie bezpośrednio `OrderLab::02 Second` zawęża pulę do D, E i F. Przy limicie dwóch kart, wybieraniu **Rosnąco według pozycji** i sortowaniu **W kolejności wyboru** oczekiwana kolejność to **D → E**. W talii nadrzędnej nadal są cztery wolne miejsca, więc obie karty zmieszczą się nawet wtedy, gdy obowiązuje limit talii wyższego poziomu. Jeśli wybierzesz talię nadrzędną z ustawieniem **Według talii** i limitami **4 / 3 / 2**, otrzymasz **A → B → C → D**.

Ustawienie kolejności wyświetlania w `02 Second` nie steruje sesją rozpoczętą z `OrderLab`. Talia wybrana do nauki określa kolejność wyświetlania i łączny limit, a w jego granicach obowiązują odpowiednie limity podtalii. Opcja **Uwzględniaj limity od góry** (Limits start from top) decyduje, czy limity talii wyższego poziomu obowiązują także wtedy, gdy zaczynasz naukę bezpośrednio z podtalii. [Zasady dotyczące podtalii](https://docs.ankiweb.net/manual/deck-options#subdecks) i [ustawienie limitów talii wyższego poziomu](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top) w angielskiej instrukcji Anki.

Sprawdź też limity powtórek. Domyślnie limit powtórek ogranicza również liczbę nowych kart. Opcja **Nowe karty ignorują limit powtórek** (New cards ignore review limit) pozwala pominąć to ograniczenie. Ta opcja i **Uwzględniaj limity od góry** obowiązują w całej kolekcji. Zapisz stan obu, zanim ocenisz, ile nowych kart możesz dziś zobaczyć. [Kod interfejsu limitów dziennych w Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte).

Użyj **Podglądu** (Preview) w przeglądarce, żeby obejrzeć pytania bez odpowiadania na nie. Przy najbliższej zwykłej sesji nauki zanotuj poniższe informacje.

| Co zapisać | Co to wyjaśni |
| --- | --- |
| Talia wybrana do nauki, jej zestaw ustawień oraz opcje wybierania i sortowania | Które ustawienia kolejności wyświetlania obowiązują w tej sesji? |
| Oczekiwane karty i ich zapisane pozycje | Czy problem dotyczy wyboru kart, czy ich kolejności? |
| Limity nowych kart i powtórek, ustawienia limitów dla danej talii lub tylko na dziś oraz karty przerobione dzisiaj | Ile miejsc zostało na dziś? |
| Limity talii wyższego poziomu i stan dwóch opcji obowiązujących w całej kolekcji | Jakie dodatkowe limity mają zastosowanie? |
| Karty zakopane, zawieszone, w taliach filtrowanych lub pochodzące z tej samej notatki | Które z tych kart mogą być niedostępne? |
| Kolejność pierwszych wyświetleń, zapisana osobno od kolejnych wyświetleń kart w ramach nauki | Czy kolejność nowych kart zgadza się z przewidywaniem? |

Gdy odpowiesz na nową kartę, jej ponowne wyświetlenia w ramach nauki mogą pojawić się między kolejnymi kartami. Opcja **Kolejność nowych kart i powtórek** (New/Review Order) określa, czy nowe karty pojawiają się przed powtórkami, po nich czy pomiędzy nimi. Wybieranie i sortowanie nowych kart odbywa się tak jak wcześniej. Anki łączy te kategorie po posortowaniu nowych kart. [Kod budowania kolejki w Anki 26.09.3](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs).

Zakończ sprawdzanie, gdy przewidywany zestaw kart i kolejność ich pierwszych wyświetleń zgadzają się z tym, co widzisz. Jeśli nadal coś się rozchodzi, zachowaj zapis pozycji, ustawień, wybranej talii, wersji Anki i zaobserwowanej kolejności. Przy dalszym szukaniu przyczyny uwzględnij też dodatki, które mogą mieć znaczenie. Jeśli chcesz dodatkowo przećwiczyć konkretny temat, skorzystaj z osobnego poradnika. [Jak ćwiczyć z talią filtrowaną bez zmiany harmonogramu (po angielsku)](/blog/anki-filtered-decks-without-rescheduling/).
