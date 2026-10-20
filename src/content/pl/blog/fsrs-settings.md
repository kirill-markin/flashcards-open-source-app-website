---
title: "Najlepsze ustawienia FSRS w Anki w 2026 roku: retencja, kroki nauki i liczba powtórek"
description: "Dobierz bezpieczne ustawienia FSRS w Anki 26.08 z FSRS-6: docelową retencję, kroki nauki, optymalizację, zmianę terminów i obciążenie powtórkami."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "ustawienia FSRS"
  - "najlepsze ustawienia FSRS"
  - "ustawienia FSRS Anki"
  - "docelowa retencja FSRS"
  - "kroki nauki FSRS"
  - "symulator FSRS"
  - "optymalizacja parametrów FSRS"
  - "FSRS-6"
---

Podniesienie docelowej retencji w Anki z 90% do 95% brzmi jak drobna zmiana. Nie oznacza jednak wzrostu nakładu pracy o pięć procent. Wraz ze wzrostem celu FSRS musi skracać odstępy, a kolekcja używana od dłuższego czasu może wygenerować znacznie większą kolejkę powtórek. Jeśli włączysz też opcję **Reschedule cards on change**, część tej pracy może pojawić się od razu.

Najlepsze ustawienia FSRS nie są więc ciągiem parametrów do skopiowania. To seria decyzji: określ, ile pracy jesteś w stanie regularnie wykonywać, dobierz do tego cel zapamiętywania, dopasuj model do własnej historii i pozostaw dotychczasowe terminy bez zmian, chyba że świadomie chcesz je przeliczyć.

Poniższe nazwy opcji i opis działania odpowiadają [wersji Anki 26.08](https://github.com/ankitects/anki/releases/tag/26.08) i jej ustawieniom FSRS-6. Jeśli najpierw chcesz zrozumieć model, przeczytaj [Czym jest FSRS?](/blog/what-is-fsrs/). Jeśli dopiero wybierasz algorytm planowania powtórek, zacznij od [FSRS a SM-2](/blog/fsrs-vs-sm-2/).

> **Informacja o autorze:** Nazywam się Kirill Markin i tworzę [Nibomo](/pl/features/). Anki oferuje indywidualne dopasowywanie parametrów i eksperymentalne symulatory obciążenia, których Nibomo obecnie nie ma. Porównanie pod koniec artykułu wyraźnie pokazuje te różnice.

**Stan informacji sprawdzony:** 8 września 2026 r.

![Operator śluzy sprawdza przepływ wody na modelu w skali, zanim zmieni ustawienia pełnowymiarowej śluzy](/blog/fsrs-settings-v2.png)

## Krótka odpowiedź: od tego zacznij

Dla większości użytkowników Anki poniższe wybory są bezpiecznym punktem wyjścia, a nie uniwersalnymi ustawieniami:

| Ustawienie lub nawyk | Bezpieczny punkt wyjścia | Dlaczego |
| --- | --- | --- |
| Docelowa retencja | `0.90` | To domyślna wartość Anki, która równoważy zapamiętywanie i liczbę powtórek. |
| Parametry FSRS | Użyj **Optimize Current Preset**; nie wklejaj wag ani nie edytuj ich ręcznie | Optymalizator dopasowuje model do Twojej historii powtórek. |
| Częstotliwość optymalizacji | Najwyżej raz w miesiącu; zwykle wystarczy raz na kilka miesięcy | Anki nie zaleca częstej optymalizacji. |
| Kroki nauki | Zachowaj niewielką liczbę kroków, które kończą się tego samego dnia | Długie sekwencje kroków opóźniają przejście do harmonogramu wyznaczanego przez model. |
| Kroki ponownej nauki | Ogranicz ich liczbę do minimum i stosuj odstępy krótsze niż doba | To samo ograniczenie dotyczy karty, której nie udało się przypomnieć podczas powtórki. |
| Reschedule cards on change | Wyłączone | Nowe ustawienia mogą działać przy kolejnych powtórkach bez przebudowy dzisiejszej kolejki. |
| Maksymalny odstęp | Zachowaj domyślne 100 lat | Niższy limit wymusza częstszy powrót dobrze utrwalonych kart. |
| Nowe karty dziennie | Dopasuj do nakładu pracy, który możesz utrzymać | Każda nowa karta oznacza naukę teraz i powtórki później. |
| Again a Hard | Again oznacza nieudaną próbę przypomnienia; Hard — poprawną odpowiedź przypomnianą z trudem | Błędne oceny sprawiają, że model korzysta z nieprawidłowej historii. |

Jeśli radzisz sobie z powtórkami, a Twoje ustawienia są już zbliżone do tych, być może nie ma czego poprawiać. Zajmowanie się ustawieniami nie jest nauką.

## Oddziel trzy decyzje

Docelowa retencja, parametry FSRS i dzienny nakład pracy bywają traktowane jak jedno zagadnienie. Tymczasem odpowiadają za różne rzeczy:

- **Docelowa retencja** to Twój cel zapamiętywania. Dobierasz ją do swoich celów i czasu na naukę.
- **Parametry FSRS** dopasowują model pamięci do historii powtórek. Oblicza je optymalizator Anki.
- **Limity nowych kart i powtórek** określają, ile materiału trafia do systemu i ile zaległych lub zaplanowanych na dziś powtórek Anki może codziennie pokazać.

Ten podział znacznie ułatwia szukanie przyczyn problemów. Duża kolejka nie musi oznaczać błędnych parametrów. Talia z ważnym materiałem nie musi mieć osobnego zestawu parametrów. A obniżenie docelowej retencji nie rozwiąże problemu, jeśli od początku dodajesz nowe karty w tempie, którego nie da się utrzymać.

## Dobieraj docelową retencję do nakładu pracy, nie do ambicji

Docelowa retencja mówi FSRS, z jakim prawdopodobieństwem chcesz pamiętać odpowiedź z karty w wyznaczonym terminie powtórki. Przy `0.90` FSRS ustala terminy tak, by przewidywane prawdopodobieństwo przypomnienia wynosiło około 90%. To cel modelu, a nie gwarancja dokładnie 90% poprawnych odpowiedzi podczas każdej sesji czy egzaminu.

Ta zależność działa w obie strony:

- Wyższa docelowa retencja skraca odstępy i zwiększa liczbę powtórek.
- Niższa wydłuża odstępy i zwiększa liczbę nieudanych prób przypomnienia.
- Jeśli obniżysz ją za bardzo, dodatkowa nauka zapomnianych kart może pochłonąć część czasu, który chcesz zaoszczędzić.

Domyślna wartość w Anki to 90%. [Zalecenia dotyczące docelowej retencji](https://docs.ankiweb.net/deck-options.html#desired-retention) ostrzegają, że nakład pracy szybko rośnie, gdy cel zbliża się do 100%, i zalecają pozostanie poniżej 97%. Oficjalne [wyjaśnienie optymalnej retencji](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention) opisuje drugi koniec krzywej: bardzo niska retencja też może być nieefektywna, bo zapomniane karty wymagają więcej pracy.

Zacznij od `0.90` i zmieniaj tę wartość dopiero po sprawdzeniu obciążenia. Wyższy cel może mieć sens przy materiale, którego zapomnienie ma realny koszt. Niższy — gdy powtórki wypierają bardziej wartościową naukę. Żadna z tych zmian nie naprawi niejasnych kart, ocen niezgodnych z wynikiem przypomnienia ani nadmiaru nowych kart.

### Retencja talii i parametry zestawu ustawień mają różny zakres

W Anki 26.08 opcja **Desired retention** ma dwa zakresy: **Shared Preset** i **This deck**. Możesz więc używać jednego zestawu parametrów dla powiązanych talii, a konkretnej talii nadać własny cel retencji.

Korzystaj z tej możliwości, gdy koszt zapominania jest różny. Talia do egzaminu uprawniającego do wykonywania zawodu może uzasadniać wyższy cel niż mniej ważna talia z informacjami pomocniczymi, nawet jeśli obie korzystają z tego samego dopasowanego modelu.

Wybranie **This deck** nie sprawia, że parametry FSRS stają się osobne dla tej talii. Domyślnie Anki dopasowuje parametry na podstawie historii powtórek wszystkich talii przypisanych do bieżącego zestawu ustawień. Jeśli poszczególne grupy talii mają dla Ciebie bardzo różny poziom trudności, Anki pozwala dopasować model do każdej z nich osobno przez przypisanie im oddzielnych zestawów ustawień.

## Help Me Decide i Simulator odpowiadają na różne pytania

Anki 26.08 udostępnia dwa oddzielne narzędzia eksperymentalne:

- **Help Me Decide (Experimental)** pokazuje indywidualną krzywą zależności między retencją a nakładem pracy. Pomaga odpowiedzieć na pytanie: „Jaki cel retencji odpowiada liczbie powtórek, którą mogę regularnie wykonywać, lub czasowi, który mogę na nie poświęcać?”.
- **FSRS Simulator (Experimental)** szacuje, jak dana konfiguracja może działać w czasie. Pozwala porównać zmiany retencji, liczby nowych kart, limitów powtórek i maksymalnego odstępu.

[Dokumentacja symulatora FSRS](https://docs.ankiweb.net/deck-options.html#the-simulator) wymienia jego główne dane wejściowe:

- liczba dni do symulacji
- liczba dodatkowych nowych kart do uwzględnienia w symulacji
- liczba nowych kart dziennie
- maksymalna liczba powtórek dziennie
- maksymalny odstęp
- docelowa retencja i parametry FSRS danego zestawu ustawień

Symulacja korzysta też z rzeczywistych stanów pamięci zapisanych dla kart objętych danym zestawem ustawień. Dzięki temu w przypadku kolekcji używanej od dłuższego czasu jest bardziej przydatna niż przemnożenie dzisiejszej liczby kart do powtórki przez dowolny procent.

Zanim zmienisz używane ustawienia, uruchom trzy scenariusze:

1. Obecna retencja i liczba nowych kart.
2. Rozważany cel retencji.
3. Ten sam cel przy mniejszej liczbie nowych kart dziennie.

Trzeci scenariusz sprawdza częstą alternatywę: zachować cel zapamiętywania i wolniej wprowadzać nowy materiał. Jeśli prognozowane obciążenie będzie wtedy do przyjęcia, nie musisz godzić się na większe zapominanie tylko po to, by zmniejszyć kolejkę. Więcej o tempie wprowadzania materiału znajdziesz w poradniku [Ile nowych fiszek dziennie?](/blog/how-many-new-flashcards-per-day/).

Oba narzędzia podają szacunki. Opuszczone dni, edycje kart, nowy materiał i zmiany sposobu oceniania mogą sprawić, że rzeczywisty nakład pracy będzie odbiegać od wykresu. Porównanie pomaga wybrać kierunek, ale nie obiecuje dokładnej wielkości kolejki za kilka miesięcy.

Starsze poradniki mogą zamiast tego wspominać o **Compute Minimum Recommended Retention**, czyli CMRR. Anki usunęło tę funkcję w wersji 25.07. Nie jest to obecny sposób wybierania docelowej retencji.

## Optymalizuj parametry FSRS na podstawie własnej historii

Docelowa retencja wyraża Twój cel. Parametry FSRS opisują dopasowanie modelu do Twoich powtórek.

W Anki 26.08 użyj **Optimize Current Preset**, aby dopasować parametry aktywnego zestawu ustawień. Domyślnie Anki uwzględnia historię powtórek każdej talii korzystającej z tego zestawu; możesz zmienić kryteria wyszukiwania, jeśli dane do dopasowania mają obejmować mniejszy zakres. **Optimize All Presets** aktualizuje wszystkie zestawy ustawień w jednej operacji.

Nie wpisuj wag ręcznie i nie kopiuj ich z Reddita, filmu ani cudzej talii. Cudze karty, terminy powtórek i nawyki oceniania nie są Twoją historią. Gotowa lista [wag FSRS-6](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) nie jest strategią nauki, którą można po prostu przejąć od innej osoby.

Optymalizuj ponownie dopiero wtedy, gdy w historii przybędzie sporo nowych powtórek. Podręcznik Anki mówi, że wystarczy raz w miesiącu, a wskazówka w aplikacji w wersji 26.08 — że wystarczy raz na kilka miesięcy. Praktyczny wniosek jest ten sam: nie ma powodu, by optymalizować co tydzień, a tym bardziej po każdej sesji.

### Uruchamiaj kontrolę jakości dla bieżącego zestawu ustawień

Włącz **Check health when optimizing (slow)**, gdy chcesz, aby Anki oceniło, jak dobrze FSRS może dopasować się do historii bieżącego zestawu ustawień. Ta kontrola działa z **Optimize Current Preset**, a nie z **Optimize All Presets**.

Jeśli wynik jest słaby, przyjrzyj się danym, zanim zaczniesz zmieniać wagi. [Wskazówki Anki dotyczące parametrów FSRS](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) wymieniają typowe przyczyny: mniej niż kilkaset powtórek, używanie Hard po nieudanej próbie oraz nieklikanie Again, gdy nie udało się przypomnieć odpowiedzi. Jeśli historia zawiera niewiele przydatnych danych, zachowaj wartości domyślne i zoptymalizuj później, zamiast pożyczać parametry innego użytkownika.

## Again oznacza nieudaną próbę; Hard to poprawna odpowiedź

Ten nawyk jest równie ważny jak każde ustawienie.

Używaj **Again**, gdy nie potrafisz podać wymaganej odpowiedzi lub odpowiadasz błędnie. Używaj **Hard** tylko wtedy, gdy odpowiedź jest poprawna, ale przypomnienie jej sobie wymagało dużego wysiłku lub długiego namysłu. Good i Easy również oznaczają poprawną odpowiedź.

Naciśnięcie Hard, aby uniknąć krótkiego odstępu Again, zapisuje sukces po nieudanej próbie. FSRS uczy się wtedy na podstawie błędnego zdarzenia. Wybieraj przycisk zgodnie z tym, jak poszło Ci przypomnienie odpowiedzi, zamiast kierować się odstępami widocznymi nad przyciskami.

Niejednoznaczne karty utrudniają rzetelne ocenianie. Jeśli pytanie wymaga pięciu faktów, a pamiętasz cztery, problem z harmonogramem zaczął się już w edytorze. Podziel kartę lub przeredaguj ją. W przypadku kart, z którymi wciąż masz problem mimo licznych powtórek, skorzystaj z poradnika [Jak poprawiać fiszki „pijawki”](/blog/how-to-fix-leech-flashcards/).

## Zachowaj krótkie kroki nauki w FSRS — albo świadomie zostaw puste pola

Kroki nauki i ponownej nauki określają krótkie odstępy przed przejściem do zwykłego harmonogramu długoterminowego. Nie są kolejnym celem retencji.

Wskazówki Anki dotyczące FSRS zalecają dwa ograniczenia:

- każdy krok powinien trwać krócej niż dobę i dać się ukończyć tego samego dnia
- liczba powtórek w ciągu jednego dnia powinna być niewielka

Długie sekwencje, takie jak `1m 10m 1d 3d`, przenoszą dawny nawyk z SM-2 do FSRS. Kroki trwające dobę lub dłużej opóźniają planowanie oparte na modelu i mogą prowadzić do mylących etykiet przycisków — na przykład Hard może pokazywać dłuższy odstęp niż Good.

Krótka sekwencja, taka jak `1m 10m`, z krokiem ponownej nauki `10m`, to zachowawczy punkt wyjścia, jeśli pasuje do Twoich sesji. Więcej powtórek tego samego dnia nie jest automatycznie lepszym rozwiązaniem.

W Anki 26.08 możesz też pozostawić puste pole kroków nauki, ponownej nauki lub oba te pola. Przy włączonym FSRS puste pole przekazuje mu planowanie odpowiednich krótkich odstępów. To funkcja eksperymentalna, a odstęp dla Again może wynosić dobę lub więcej. Zachowaj krótkie kroki ustawione ręcznie, jeśli potrzebujesz przewidywalnego powrotu tego samego dnia; wyczyść pole tylko wtedy, gdy świadomie zgadzasz się, by FSRS ustalał ten termin.

## Wyłącz Reschedule cards on change, aby nowe ustawienia działały stopniowo

Gdy **Reschedule cards on change** jest wyłączone — a tak jest domyślnie — włączenie FSRS albo zmiana docelowej retencji lub parametrów nie nadpisuje od razu istniejących terminów. Nowa konfiguracja zaczyna działać przy kolejnych powtórkach kart, więc kolejka zmienia się stopniowo.

Jeśli zapiszesz jedną z tych zmian FSRS przy włączonej opcji, Anki natychmiast przeliczy terminy. W zależności od nowego celu i stanów kart wiele z nich może od razu wymagać powtórki. Anki dodaje też wpisy historii powtórek dla kart z przeliczonymi terminami, co zwiększa rozmiar kolekcji.

Ta opcja przydaje się tylko wtedy, gdy rzeczywiście chcesz przeliczyć także dotychczasowy harmonogram. W przypadku kolekcji używanej od dłuższego czasu:

1. Utwórz aktualną kopię zapasową i upewnij się, że wiesz, jak cofnąć zmianę lub odtworzyć dane.
2. Uruchom symulator z proponowanymi ustawieniami.
3. Wybierz jedną zmianę konfiguracji; nie łącz kilku eksperymentów.
4. Przy zapisie włącz przeliczanie terminów tylko wtedy, gdy chcesz ich natychmiastowej zmiany i poradzisz sobie z jej skutkami.

Anki wyraźnie zaleca kopię zapasową przy przechodzeniu z SM-2 z przeliczaniem terminów. Szerszy [poradnik tworzenia kopii zapasowych fiszek](/blog/how-to-back-up-flashcards/) wyjaśnia, dlaczego sposób odzyskania danych jest równie ważny jak sam plik kopii.

## Zachowaj wysoki maksymalny odstęp

Domyślny maksymalny odstęp w Anki wynosi 100 lat. Wygląda to dziwnie, dopóki nie przypomnisz sobie, że to górny limit, a nie obietnica, że każda utrwalona karta zniknie na stulecie.

Obniżenie limitu wymusza wcześniejszy powrót dobrze znanych kart i zwiększa nakład pracy. Przy osiągniętym limicie Hard, Good i Easy mogą pokazywać ten sam odstęp, ponieważ żaden nie może przekroczyć maksimum.

Krótszy maksymalny odstęp może być rozsądny, gdy egzamin wyznacza konkretny termin, materiał często się zmienia lub zasady zawodowe wymagają regularnego powracania do niego niezależnie od przewidywanego zapamiętania. Dopasuj ten limit do kalendarza i wyników symulatora, zamiast z niepokoju wybierać małą liczbę. Poradnik [Jak uczyć się do egzaminu z FSRS](/blog/how-to-study-for-an-exam-with-fsrs/) opisuje ten szczególny przypadek.

Przy zwykłej nauce długoterminowej zachowaj wysoki limit. Docelowa retencja już określa, przy jakim przewidywanym prawdopodobieństwie przypomnienia odpowiedzi powinna nastąpić powtórka.

## Liczba nowych kart jest częścią decyzji o nakładzie pracy

FSRS może rozłożyć powtórki w czasie; nie sprawi, że nieograniczony dopływ materiału będzie możliwy do opanowania. Każda nowa karta wymaga nauki teraz i powtórek później.

Gdy kolejka jest zbyt duża, przed obniżeniem docelowej retencji sprawdź:

- liczbę nowych kart dziennie
- duże importy lub partie wygenerowanych kart
- limit maksymalnej liczby powtórek, który stale ukrywa karty wymagające powtórzenia
- „pijawki” i niejasne karty pochłaniające kolejne próby
- dni z opuszczonymi powtórkami

Użyj **Additional new cards to simulate**, gdy wiesz, że talia będzie się powiększać. Prognoza oparta wyłącznie na dzisiejszej kolekcji nie odzwierciedli obciążenia po dużym imporcie.

Jeśli prognozowane obciążenie jest zbyt duże, zmniejsz liczbę nowych kart i uruchom symulację ponownie. Dzięki temu zachowasz cel zapamiętywania bez oczekiwania od algorytmu większej tolerancji na zapominanie.

## Anki i Nibomo udostępniają różne ustawienia FSRS

Oba produkty korzystają z FSRS-6, ale ustawienia FSRS w Anki nie przekładają się bezpośrednio na Nibomo.

| Możliwość | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Docelowa retencja | **Shared Preset** lub **This deck** | Konfigurowana dla przestrzeni roboczej; domyślnie `0.90` |
| Parametry FSRS | **Optimize Current Preset** lub **Optimize All Presets** na podstawie historii powtórek | Oficjalne domyślne wagi FSRS-6 są ustalone; w v1 użytkownik nie może ich zmieniać |
| Kroki nauki | Konfigurowalne; planowanie przez FSRS przy pustym polu jest eksperymentalne | Konfigurowane dla przestrzeni roboczej; domyślnie `1m 10m` |
| Kroki ponownej nauki | Konfigurowalne; planowanie przez FSRS przy pustym polu jest eksperymentalne | Konfigurowane dla przestrzeni roboczej; domyślnie `10m` |
| Maksymalny odstęp | Domyślnie 100 lat | Domyślnie 36 500 dni, czyli również 100 lat |
| Zmiany ustawień | Domyślnie przy przyszłych powtórkach; opcjonalnie także przeliczenie istniejących terminów | Wyłącznie przy przyszłych powtórkach; istniejące terminy nie są przeliczane |
| Narzędzia do szacowania obciążenia | **Help Me Decide (Experimental)** i **FSRS Simulator (Experimental)** | Brak odpowiednika symulatora obciążenia w v1 |

Nibomo używa standardowych ocen Again, Hard, Good i Easy oraz przechowuje stan pamięci FSRS dla każdej karty. Algorytmy planowania w backendzie, iOS i Androidzie są osobnymi implementacjami, które są utrzymywane tak, by działały jednakowo; przeglądarkowy tryb powtórek korzysta z algorytmu backendu, zamiast dodawać czwartą kopię.

Te ograniczenia i wartości domyślne opisuje publiczna [specyfikacja planowania FSRS w Nibomo](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Kompromis jest prosty: Nibomo zapewnia praktyczną konfigurację FSRS-6 na poziomie przestrzeni roboczej, a Anki daje dokładniejszy wybór zakresu ustawień, indywidualne dopasowanie i symulację. Jeśli te możliwości są dla Ciebie niezbędne, Anki będzie lepszym wyborem.

## Jak bezpieczniej zmieniać ustawienia kolekcji z długą historią

Jeśli masz już miesiące lub lata historii powtórek, zachowaj tę kolejność:

1. **Popraw sposób oceniania.** Again oznacza nieudaną próbę; Hard — poprawną odpowiedź przypomnianą z trudem.
2. **Zoptymalizuj bieżący zestaw ustawień.** Dopasuj model do własnej historii, zamiast edytować lub kopiować wagi.
3. **W razie potrzeby uruchom kontrolę jakości.** Traktuj skąpą lub niespójną historię jako problem z danymi.
4. **Użyj Help Me Decide.** Dobierz zakres retencji do liczby powtórek, którą jesteś w stanie regularnie wykonywać, lub czasu, który możesz na nie poświęcać.
5. **Uruchom symulator.** Porównaj obecną konfigurację, proponowany cel i mniejszą liczbę nowych kart.
6. **Zmień jedną wartość w używanej konfiguracji.** Zacznij od retencji lub liczby nowych kart, a potem obserwuj rzeczywistą kolejkę.
7. **Zachowaj krótkie kroki.** Usuń sekwencje nauki i ponownej nauki obejmujące odstępy dobowe lub dłuższe; puste pola stosuj tylko jako eksperyment.
8. **Pozostaw wysoki maksymalny odstęp.** Skróć go tylko ze względu na konkretny horyzont czasowy lub wymóg.
9. **Pozostaw przeliczanie terminów wyłączone.** Jeśli potrzebujesz natychmiastowej przebudowy harmonogramu, najpierw utwórz kopię zapasową i zaplanuj pracę z powstałą kolejką.

Ta kolejność pozwala jak najdłużej zachować możliwość cofnięcia zmian w dotychczasowym harmonogramie. Zapobiega też sprowadzaniu trzech różnych problemów — dopasowania modelu, celu zapamiętywania i tempa wprowadzania nowego materiału — do jednej zagadki z ustawieniami.

## Najczęstsze pytania o najlepsze ustawienia FSRS

### Czy 90% to najlepsza docelowa retencja w FSRS?

To najbezpieczniejszy ogólny punkt wyjścia, ponieważ jest domyślną wartością Anki i pozwala uniknąć najbardziej stromego fragmentu krzywej obciążenia przy wysokiej retencji. Najlepsza wartość dla konkretnej talii zależy od kosztu zapominania i nakładu pracy, który możesz utrzymać. Przed zmianą sprawdź **Help Me Decide (Experimental)**.

### Czy ustawić docelową retencję na 95%?

Dopiero po sprawdzeniu, ile dodatkowych powtórek lub minut to oznacza. Dobrze przygotowana talia z bardzo ważnym materiałem może uzasadniać 95%; duża kolekcja do nauki hobbystycznej może stać się niepotrzebnie obciążająca. Nie włączaj jednocześnie przeliczania istniejących terminów, chyba że świadomie chcesz natychmiast przebudować harmonogram.

### Jak często optymalizować parametry FSRS?

Raz w miesiącu to już wystarczająco często, a wskazówka w aplikacji Anki 26.08 mówi, że wystarczy raz na kilka miesięcy. Optymalizuj wtedy, gdy w historii przybędzie sporo nowych powtórek, zamiast robić to codziennie lub co tydzień.

### Czy kroki nauki w FSRS powinny być puste?

Puste pola kroków nauki lub ponownej nauki pozwalają Anki 26.08 przekazać odpowiednie planowanie krótkoterminowe do FSRS. Funkcja jest eksperymentalna, a po wybraniu Again następna powtórka może wypaść za dobę lub później. Niewielka liczba kroków kończących się tego samego dnia pozostaje zachowawczym wyborem.

### Czy zmiana ustawień FSRS zmienia terminy istniejących kart w Anki?

Domyślnie nie. Gdy **Reschedule cards on change** jest wyłączone, nowe ustawienia wpływają na przyszłe powtórki bez natychmiastowej przebudowy kolejki. Włączenie tej opcji zmienia terminy i może sprawić, że wiele kart będzie od razu wymagać powtórki, więc najpierw utwórz kopię zapasową.

### Czy CMRR nadal jest częścią Anki?

Nie. Anki usunęło Compute Minimum Recommended Retention w wersji 25.07. W Anki 26.08 do porównania retencji z szacowanym nakładem pracy służą **Help Me Decide (Experimental)** i **FSRS Simulator (Experimental)**.

### Czy Nibomo używa tych samych ustawień co Anki?

Korzysta z FSRS-6 i udostępnia docelową retencję, kroki nauki, kroki ponownej nauki, maksymalny odstęp oraz losowe zróżnicowanie odstępów (fuzz) dla każdej przestrzeni roboczej. Nie odwzorowuje całego modelu ustawień Anki: wagi w v1 są ustalone, zmiany dotyczą tylko przyszłych powtórek, a indywidualnej optymalizacji parametrów i symulatora obciążenia nie ma.

## Najpierw nakład pracy, potem procent

Dobre ustawienia FSRS sprawiają, że kolejka powtórek służy rzeczywistemu planowi nauki. Zacznij od 90%, oszacuj nakład pracy, kontroluj liczbę nowych kart i podnoś retencję tylko wtedy, gdy lepsze zapamiętywanie jest warte dodatkowych powtórek. Zachowaj krótkie kroki, wysoki maksymalny odstęp i rzetelne oceny.

Potem zamknij ekran ustawień. Algorytm bardziej potrzebuje regularnych powtórek niż kolejnego wieczoru dostrajania.
