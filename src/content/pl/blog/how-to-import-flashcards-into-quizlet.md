---
title: "Jak importować fiszki do Quizlet z Excela, Arkuszy Google lub tekstu"
description: "Zaimportuj dwukolumnową listę słówek do Quizlet, ustaw tabulatory i nowe wiersze oraz popraw podzielone definicje, dodatkowe fiszki i błędy CSV przed publikacją."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "jak importować fiszki do Quizlet"
  - "format importu Quizlet"
  - "import do Quizlet z Excela"
  - "Arkusze Google do Quizlet"
  - "import do Quizlet z tabulatorami"
---

„Red, green, blue” wygląda jak zwyczajna odpowiedź na fiszce. Jeśli jednak przecinki oddzielają pojęcie od definicji, te same znaki sprawiają, że wiersz staje się niejednoznaczny. Kilka znaków interpunkcyjnych wystarczy, by gotowa lista słówek wymagała poprawek.

Aby zaimportować fiszki do Quizlet z Excela, Arkuszy Google lub tekstu, zacznij od dwóch kolumn: jednej z pojęciami, drugiej z definicjami. Skopiuj dane, wklej je do formularza importu na stronie i wybierz tabulatory jako separatory pól oraz nowe wiersze jako separatory fiszek. Najpierw wypróbuj cztery wiersze, żeby sprawdzić każdą parę przed przeniesieniem całej listy.

![Osoba zajmująca się ceramiką ustawia filiżanki z pasującymi spodkami w osobnych rzędach, zanim przeniesie je na półkę](/blog/how-to-import-flashcards-into-quizlet.png)

## Gdzie znaleźć formularz importu Quizlet

Quizlet opisuje import na swojej stronie: pola można oddzielać przecinkami, tabulatorami lub myślnikami, a fiszki — średnikami lub nowymi wierszami. [Oficjalna instrukcja importu](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) podaje następującą kolejność:

1. Zaloguj się i wybierz **Utwórz → Zestaw fiszek** (Create → Flashcard set).
2. Wpisz tytuł, wybierz **Importuj** (Import) i wklej tekst.
3. Dopasuj ustawienia separatorów do danych. W przykładach z tego poradnika wybierz **Tabulator** (Tab) i **Nowy wiersz** (New line).
4. Wybierz **Importuj**, a następnie ustaw języki pojęć i definicji.
5. Sprawdź fiszki, zanim wybierzesz **Utwórz** (Create), aby zapisać i opublikować zestaw.

Instrukcję sprawdzono 15 września 2026 r. Poniższe przykłady wyjaśniają, jak przygotować i sprawdzić tekst; nie opisują testu przeprowadzonego po zalogowaniu.

## Zacznij od małego zakresu w arkuszu

W Excelu lub Arkuszach Google umieść każdą parę pojęcie–definicja w osobnym wierszu. Oto próba z czterema fiszkami:

| Pojęcie | Definicja |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

Skopiuj tylko cztery wiersze danych z obu kolumn. Jeśli nagłówki znajdują się w wierszu 1, zaznacz **A2:B5**. Nie uwzględniaj nagłówków w kopiowanym zakresie.

Wynikiem powinny być cztery fiszki z hiszpańskimi pojęciami i angielskimi definicjami. Na ostatniej fiszce „colores primarios de la luz” powinno pozostać w całości po jednej stronie, a „red, green, blue” — po drugiej. Przecinki są częścią odpowiedzi.

Po sprawdzeniu przykładu przygotuj własny arkusz. Pracuj na kopii, aby zachować oryginał do porównania. Usuń puste wiersze, a notatki i dodatkowe kolumny pozostaw poza zaznaczeniem. Przed kopiowaniem uzupełnij brakujące pojęcia i definicje.

Podczas sortowania zawsze zaznaczaj obie kolumny razem. Posortowanie samych pojęć odłączy je od odpowiedzi, więc nawet import z prawidłową liczbą fiszek może zawierać błędne pary.

## Format tekstowy wymaga prawdziwych tabulatorów

Te same cztery wiersze zapisane jako tekst rozdzielony tabulatorami wyglądają tak: Każdy odstęp między pojęciem a definicją zawiera jeden rzeczywisty znak tabulacji:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Tabulator to konkretny znak. Kilka spacji może wyglądać podobnie, ale nie zastępuje tabulatora oddzielającego pola. Wpisanie znaków `\t` również nie wstawia tabulatora. Jeśli trudno to zrobić w edytorze tekstu, wpisz pary w dwóch kolumnach arkusza i skopiuj komórki.

Każda fiszka powinna zajmować jeden fizyczny wiersz tekstu. Długa definicja może być wyświetlana w dwóch wierszach z powodu wąskiego okna; takie zawijanie nie dodaje znaku nowego wiersza do treści. Dodaje go natomiast ręczne przejście do nowego wiersza wewnątrz komórki arkusza. Usuń takie podziały, zanim użyjesz nowych wierszy jako separatorów fiszek.

Usuń też tabulatory wewnątrz pojęć i definicji. W tym formacie tabulatory powinny występować wyłącznie między dwoma polami.

## Jeśli lista jest w pliku CSV

Przed przygotowaniem importu otwórz plik CSV w arkuszu. Poniższy rekord CSV zawiera dwa pola, jeśli zostanie odczytany zgodnie z regułami zapisu w cudzysłowach:

```text
"colores primarios de la luz","red, green, blue"
```

Odpowiedź w cudzysłowie zawiera przecinki. Pole tekstowe, które dzieli dane według przecinków, nie musi obsługiwać formatu CSV, więc nie zakładaj, że cudzysłowy ochronią w nim całą odpowiedź przed podziałem.

W Excelu lub Arkuszach Google upewnij się, że rekord zajmuje dokładnie dwie komórki. Następnie skopiuj komórki, aby uzyskać dane rozdzielone tabulatorami. Jeśli odpowiedź została rozbita na dodatkowe kolumny, najpierw popraw ustawienia importu CSV w arkuszu. Skopiowanie błędnie podzielonego wiersza przeniesie ten sam błąd dalej.

Sprawdź także wartości, które arkusz może automatycznie przekształcić. Jeśli `0012` to kod, którego chcesz się nauczyć, zmiana na `12` zmienia treść fiszki. Przed skopiowaniem zakresu porównaj identyfikatory, daty, cudzysłowy i słowa ze znakami diakrytycznymi z oryginalnym plikiem.

## Gdy fiszki nie odpowiadają wierszom

Użyj próbnego importu, aby znaleźć pierwszą rozbieżność. Zmieniaj jedną rzecz naraz, a potem porównuj wynik z tymi samymi czterema wierszami źródłowymi.

| Objaw | Prawdopodobny problem z separatorem | Co zmienić |
| --- | --- | --- |
| Odpowiedź dzieli się przy przecinkach | Wybrano przecinek między polami | Przygotuj dwie kolumny i wybierz Tabulator |
| „well-being” dzieli się wewnątrz pojęcia | Wybrano myślnik między polami | Zachowaj łącznik i oddziel pola tabulatorem |
| Jedna odpowiedź staje się kilkoma fiszkami | W treści źródłowej są znaki nowego wiersza | Umieść odpowiedź w jednym fizycznym wierszu |
| „Term” i „Definition” pojawiają się jako fiszka | Skopiowano wiersz nagłówków | Zaznacz tylko wiersze danych |
| Oba pola pozostają po tej samej stronie | Użyto spacji zamiast tabulatora | Skopiuj zakres z dwóch kolumn arkusza |

Na przykład odpowiedź z „first stage” i „second stage” w osobnych wierszach można zapisać jako `first stage; second stage`. Obie części pozostaną wtedy w jednym wierszu. Jeśli używasz średnika wewnątrz odpowiedzi, pozostaw wybraną opcję **Nowy wiersz** jako separator fiszek.

Jeśli oba etapy zasługują na osobne pytania, zapisz zamiast tego dwie pełne pary. [Poradnik tworzenia lepszych fiszek](/blog/how-to-make-better-flashcards/) (po angielsku) pomoże podjąć tę decyzję.

## Sprawdź wynik przed publikacją

Sprawdź wszystkie cztery próbne fiszki. W przypadku pełnej listy porównaj zaimportowane fiszki z uporządkowanym źródłem:

- Czy liczba fiszek odpowiada liczbie kompletnych wierszy danych?
- Czy pierwsza i ostatnia para są zgodne ze źródłem, wraz z pełnymi odpowiedziami?
- Czy interpunkcja, znaki diakrytyczne i kody pozostały bez zmian?
- Czy są puste strony fiszek, nagłówki, duplikaty lub odpowiedzi przypisane do niewłaściwych pojęć?
- Czy każda odpowiedź, w której zmieniono podziały wierszy, nadal ma sens?

Przeczytaj kilka zwykłych par oprócz tych, które budzą podejrzenia. Sama zgodność liczby fiszek nie ujawni błędnej odpowiedzi przypisanej do poprawnego pojęcia. Jeśli coś się nie zgadza, popraw źródło przed ponownym importem. Zachowaj uporządkowany plik na potrzeby przyszłych poprawek.

## Gotowe pary czy fiszki wygenerowane przez AI?

Quizlet opisuje również tworzenie fiszek z dostarczonych materiałów z pomocą AI w swoim [omówieniu tworzenia fiszek z AI](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai). Wygenerowana treść wymaga osobnej kontroli merytorycznej. Jeśli masz gotową listę pojęć i definicji, import danych o ustalonej strukturze pozwala porównać przeniesione pary z tymi, które masz już zapisane.

Zaczynasz od akapitów tekstu? [Zamień notatki w fiszki](/blog/turn-notes-into-flashcards/) (poradnik po angielsku), zanim przygotujesz tekst do importu. Przenosisz zestaw w przeciwnym kierunku? Skorzystaj z [poradnika eksportu z Quizlet](/pl/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/).
