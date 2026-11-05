---
title: "Duplikaty kart w Anki. Jak je znaleźć i zdecydować, którą kopię zachować"
description: "Ustal, skąd się wzięły duplikaty kart w Anki, i porównaj notatki. Na przykładzie przećwicz wybór kopii, usuwanie i sprawdzanie historii powtórek."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "duplikaty kart Anki"
  - "jak znaleźć duplikaty w Anki"
  - "usuwanie duplikatów w Anki"
  - "duplikaty notatek Anki"
  - "historia powtórek Anki"
---

Rozpoznajesz pytanie z wcześniejszej powtórki, ale Anki pokazuje je jako nowe. Kopia mogła trafić do kolekcji podczas importu. Możliwe też, że widzisz drugie pytanie utworzone z tej samej notatki. Od tego zależy, co możesz bezpiecznie usunąć. Gdy usuwasz jeden wiersz w przeglądarce Anki, możesz skasować wszystkie karty z danej notatki, także tę, którą chcesz dalej powtarzać.

Zanim usuniesz **duplikaty kart w Anki**, ustal, skąd się wzięły. Jeśli karty pochodzą z osobnych notatek, użyj **Notes → Find Duplicates**, żeby znaleźć notatki do sprawdzenia. Zgodność jednego pola to punkt wyjścia. Przed wyborem kopii porównaj całą treść notatek i historię każdej karty.

Instrukcja dotyczy Anki na komputerze i opiera się na dokumentacji oraz opublikowanym kodzie źródłowym, sprawdzonych 4 października 2026 r. Ćwiczenie pokazuje, jakich wyników można oczekiwać w przykładzie z fikcyjnymi danymi.

![Członek klubu szachowego porównuje dodatkową jasną wieżę z dwiema wytartymi wieżami stojącymi na drewnianej szachownicy](/blog/anki-duplicate-cards.png)

## Ustal, co się powtarza

Notatka zawiera pola, na przykład Front i Back. Anki tworzy z niej karty na podstawie szablonów. Z jednej notatki ze słówkiem może powstać karta, na której rozpoznajesz znaczenie, i druga, na której przywołujesz obce słowo z pamięci. To karty siostrzane. Każda ma własny harmonogram powtórek. [Notatki i pola w instrukcji Anki](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

W przeglądarce Anki (**Browse**) włącz tryb **Cards** i dla każdego podejrzanego wiersza otwórz **Cards → Info**. Porównaj identyfikatory notatek (Note ID). Wspólny identyfikator oznacza, że karty pochodzą z jednej notatki. Różne identyfikatory wskazują na osobne notatki. W zapytaniu `nid:123` zastąp `123` rzeczywistym identyfikatorem, żeby zobaczyć karty danej notatki bez ograniczania wyników do jednej talii. [Identyfikatory i ich wyszukiwanie w Anki](https://docs.ankiweb.net/searching.html#object-ids)

| Co widzisz | Prawdopodobna przyczyna | Co sprawdzić dalej |
| --- | --- | --- |
| Ta sama notatka, pytania w przeciwnych kierunkach | Celowo utworzone karty siostrzane | Sprawdź, czy oba pytania się przydają |
| Ta sama notatka, identyczne pytania w podglądzie | Możliwe powielenie szablonów kart | Porównaj szablony i podglądy kart |
| Różne notatki, pozornie identyczne pytania | Możliwe duplikaty notatek | Porównaj całe notatki, zanim wybierzesz kopię do zachowania |

Jeśli obie karty powstały celowo, [poradnik o kartach odwróconych](/blog/anki-reverse-cards/) (po angielsku) wyjaśnia, jak działają oba kierunki. Jeśli chcesz zrobić przerwę od powtarzania jednej z nich, [zawieś tę kartę](/blog/anki-bury-vs-suspend/) (poradnik po angielsku). Zawieszenie wstrzymuje powtórki, a karta pozostaje w kolekcji.

Jeśli szablony są identyczne, skorzystaj z [instrukcji Anki o dodatkowych kopiach karty](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Usunięcie szablonu to osobna zmiana w strukturze kolekcji. Dotyczy wszystkich notatek danego typu, także w innych taliach.

## Wybierz, gdzie szukać duplikatów notatek

Otwórz **Notes → Find Duplicates** i wybierz pole do porównania, na przykład **Front**. Domyślnie Anki przeszukuje wszystkie typy notatek zawierające to pole. Użyj **Optional filter**, żeby określić zakres, i kliknij **Search**. [Opcje wyszukiwania duplikatów w instrukcji Anki](https://docs.ankiweb.net/browsing.html#finding-duplicates)

W przypadku talii o nazwie `Cleanup practice` wpisz poniższe zapytanie.

```text
deck:"Cleanup practice"
```

Wyszukiwanie w talii obejmuje także jej podtalie. Jeśli kopie mogą znajdować się w różnych taliach, usuń filtr i przeszukaj całą kolekcję. Brak duplikatów w jednej talii nie wyklucza kopii w innej. [Składnia wyszukiwania według talii](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Kliknij grupę wyników, żeby sprawdzić notatki. Przycisk **Tag Duplicates** dodaje tag `duplicate` do każdej notatki w grupie, także do tej, którą chcesz zachować. Tak działa [funkcja tagowania w opublikowanej wersji Anki](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py). **Nie usuwaj wszystkich wyników wyszukiwania `tag:duplicate`.** Użyj tagu, żeby zebrać potencjalne duplikaty, a zbędne notatki wybierz pojedynczo.

Anki porównuje treść wybranego pola. Pytań o tę samą rzecz, ale sformułowanych inaczej, czasem trzeba poszukać ręcznie. Z kolei pytania o identycznej treści mogą dotyczyć różnych języków albo mieć inny kontekst w różnych kursach.

## Trzy przypadki do przećwiczenia na papierze

Wyobraź sobie sześć notatek w talii `Cleanup practice` bez podtalii. Notatki A i B korzystają z niezmienionych szablonów typu **Basic (and reversed card)**, więc z każdej powstają dwie karty. Z notatek C–F typu **Basic** powstaje po jednej karcie. Wszystkie osiem kart znajduje się w tej samej talii. Litery to oznaczenia z ćwiczenia. W Anki identyfikatory notatek i kart (Note ID i Card ID) to liczby.

| Notatki | Front → Back | Przykładowy stan nauki | Decyzja |
| --- | --- | --- | --- |
| A i B | `le vélo` → `bicycle` | W A karta do rozpoznawania słowa ma 12 powtórek, a karta do przywoływania go z pamięci ma 3. W B obie karty są nowe | Zachowaj A. Najpierw rozważ usunięcie B |
| C i D | `Chemical symbol for silver?` → `Ag` | Karta z C ma 20 powtórek, a karta z D ma 6 | Porównaj historie powtórek i wybierz kartę do dalszej nauki |
| E i F | E (`bank` → `financial institution`), F (`bank` → `side of a river`) | Pytania dotyczą różnych znaczeń | Zachowaj obie notatki i doprecyzuj pytania, dodając kontekst |

Wyszukiwanie według pola Front może znaleźć wszystkie trzy pary. Tylko w pierwszej wybór wydaje się prosty. Zanim uznasz B za zbędną notatkę, porównaj **każde pole**, multimedia, tagi i typ notatki. Obejrzyj też w podglądzie karty w obu kierunkach. Być może w B jest nagranie wymowy lub pytanie, którego brakuje w A.

Jeśli przydatna treść służy temu samemu celowi nauki, skopiuj ją do notatki, którą zachowujesz, i sprawdź efekt w podglądzie. Zachowaj też przydatne tagi z notatki źródłowej. Jeśli zmieniasz to, co ma sprawdzać karta, utwórz nowe pytanie. Dotychczasowa historia dotyczy poprzedniego materiału.

W przypadku C i D większa liczba powtórek to wskazówka. Na obu kartach sprawdź daty i oceny powtórek, bieżące odstępy oraz terminy kolejnych powtórek. Karta z większą liczbą powtórek mogła częściej wymagać ponownej nauki. Sprawdź, czy pytanie i odpowiedź nadal ci się przydadzą, a potem zdecyduj, z którą kartą i jej historią chcesz kontynuować naukę. Jeśli odpowiedzi się różnią, najpierw sprawdź materiał źródłowy. Sama liczba powtórek nie rozstrzyga, która odpowiedź jest poprawna.

Zachowanie C i usunięcie D **nie połączy ich historii**. C zachowa własny stan nauki. W widoku [Card Info](https://docs.ankiweb.net/stats.html#card-info) Anki pokazuje historię każdej karty osobno. Powtórki kart z usuniętych notatek nadal liczą się w statystykach całej kolekcji, ale znikają ze statystyk danej talii. Historia zachowanej karty ich nie przejmuje. [Statystyki usuniętych notatek w instrukcji Anki](https://docs.ankiweb.net/stats.html#more)

Jeśli trudno ci zdecydować, odłóż usuwanie. Zapisz, co jeszcze trzeba sprawdzić. W razie potrzeby zawieś na ten czas karty, których nie chcesz powtarzać.

## Usuń potwierdzony duplikat i sprawdź wynik

Zanim zaczniesz usuwać notatki ze swojej kolekcji, zsynchronizuj zmiany z innych urządzeń. Potem zsynchronizuj Anki na komputerze, żeby te zmiany trafiły do kolekcji, którą będziesz porządkować. Szczegóły znajdziesz w [instrukcji synchronizacji Anki](https://docs.ankiweb.net/syncing.html). W **File → Export** zapisz **Anki Collection Package (`.colpkg`)** z włączoną opcją **Include Media**. Pakiet zawiera wszystkie talie, harmonogramy i historię powtórek. Przechowuj go w bezpiecznym miejscu. Import pakietu zastępuje bieżące karty w otwartym profilu zapisaną kolekcją. [Eksport kolekcji w instrukcji Anki](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Jeśli chcesz przećwiczyć usuwanie, utwórz osobny profil przez **File → Switch Profile** i zaimportuj do niego kopię zapasową. Nie łącz profilu testowego z AnkiWeb. [Każdy profil ma własną kolekcję](https://docs.ankiweb.net/profiles.html). Podłączenie dwóch profili do tego samego konta może spowodować zastąpienie jednej kolekcji drugą. [Poradnik o różnicach między APKG a COLPKG](/blog/anki-apkg-vs-colpkg/) (po angielsku) wyjaśnia, co obejmuje kopia zapasowa i jak działa import.

W ćwiczeniu karta A1 służy do rozpoznawania słowa z notatki A, a A2 do przywoływania go z pamięci. W notatce B tym samym kierunkom odpowiadają B1 i B2. W **Cards → Info** odczytaj i zapisz rzeczywiste identyfikatory obu kart z notatki A, terminy i odstępy powtórek oraz wpisy z historii, które łatwo rozpoznasz. Zapisz też identyfikator notatki B. Porównaj stan przed usunięciem i po nim w tej samej sesji. W międzyczasie nie powtarzaj kart z żadnej kopii i nie zmieniaj ich harmonogramu.

Usuwaj duplikaty notatek pojedynczo, według poniższych kroków.

1. W przeglądarce **Browse** wpisz `nid:` z rzeczywistym identyfikatorem notatki B. W trybie **Cards** sprawdź każdy wynik i obejrzyj podgląd kart w obu kierunkach. W swojej kolekcji sprawdź też, czy karty siostrzane są w innych taliach. W tym wyszukiwaniu pomiń filtr talii.
2. Przełącz się na tryb **Notes**. Upewnij się, że jedyny wynik to zbędna notatka B, zaznacz tylko ją i wybierz **Notes → Delete**. Polecenie [Delete w Anki](https://docs.ankiweb.net/browsing.html#notes) usuwa wybraną notatkę wraz ze wszystkimi kartami, nawet jeśli uruchomisz je z jednego wiersza w trybie **Cards**.
3. Ponownie wyszukaj identyfikator notatki B i sprawdź, czy nie ma wyników. Wyszukaj zapisane identyfikatory kart A za pomocą `cid:`, rozdzielając je przecinkiem. Porównaj dane obu kart w **Info** z zapisanymi wartościami.
4. Wyszukaj `deck:"Cleanup practice"` i porównaj liczbę wierszy w trybach **Notes** i **Cards**. Sprawdź pozostałe notatki według poniższej tabeli.

Po usunięciu tylko notatki B wyniki powinny wyglądać tak.

| Co sprawdzić | Przed usunięciem | Oczekiwany wynik po usunięciu |
| --- | --- | --- |
| Cała przykładowa talia | 6 notatek i 8 kart | 5 notatek i 6 kart |
| Karty ze słowem `le vélo` | A1, A2, B1, B2 | Tylko A1 i A2 |
| Identyfikatory kart z notatki A, terminy, odstępy i historia | Zapisane wartości | Te same karty, harmonogram i wpisy w historii |
| Wyszukiwanie według identyfikatora notatki B | Dwie karty notatki B | Brak wyników |
| Notatki o srebrze i znaczeniach słowa `bank` | C, D, E, F | Te same cztery notatki |

Usunięcie jednej notatki oznacza tu usunięcie dwóch kart. Po skasowaniu A zamiast B liczby byłyby takie same, choć zniknęłyby karty, które już powtarzasz. Sprawdzaj więc zarówno liczbę kart, jak i ich identyfikatory. Podczas porządków nie resetuj zachowanej kopii i nie zmieniaj harmonogramu jej powtórek.

Wykres powtórek dla całej kolekcji może nadal uwzględniać powtórki usuniętych kart. Sprawdź identyfikator zachowanej karty i jej dane w **Info**, żeby upewnić się, że zachowała dotychczasowe postępy.

Gdy wyniki dla jednej grupy zgadzają się z Twoimi zapiskami, przejdź do kolejnej i osobno zdecyduj, którą kopię zachować. Jeśli ćwiczenie było w osobnym profilu, najpierw powtórz sprawdzone kroki w swoim właściwym profilu. Po sprawdzeniu kolekcji zsynchronizuj Anki na komputerze, a potem na pozostałych urządzeniach, zanim wrócisz na nich do nauki. Jeśli kopie powstały podczas importu, przed kolejnym importem zajrzyj do [poradnika o aktualizacji notatek z CSV](/blog/anki-csv-update-existing-notes/) (po angielsku). Jeśli powielasz notatki, żeby przypisać ten sam materiał do kilku tematów, [użyj do tego tagów](/blog/anki-tags-vs-decks/) (poradnik po angielsku). Wystarczy wtedy jedna historia powtórek.
