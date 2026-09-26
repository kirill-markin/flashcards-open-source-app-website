---
title: "Recenzja Mochi Flashcards (2026): darmowy plan, nauka offline i porównanie z Anki"
description: "Recenzja Mochi oparta na źródłach: darmowy plan, aplikacje offline, notatki Markdown, FSRS, synchronizacja, import z Anki, eksport i ograniczenia własnego hostingu."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "fiszki Mochi"
  - "karty Mochi"
  - "Mochi a Anki"
  - "Anki a Mochi"
  - "czy Mochi jest darmowe"
  - "Mochi offline"
  - "cennik Mochi"
  - "hosting Mochi"
  - "fiszki Markdown"
  - "Mochi powtórki rozłożone w czasie"
---

W Mochi zaczynasz od dokumentu Markdown, a nie od tradycyjnego formularza z przodem i tyłem fiszki. Dodaj wiersz z trzema myślnikami, a dokument zyska strony do powtarzania. Możesz też zostawić go jako notatkę, połączyć z inną fiszką lub zarchiwizować, by nadal dało się go wyszukać, ale nie trafiał do kolejki powtórek.

Ten niewielki separator dobrze pokazuje, dla kogo są **fiszki Mochi**. Mochi sprawdza się u osób, które chcą mieć notatki i powtórki rozłożone w czasie w jednej aplikacji przechowującej dane przede wszystkim lokalnie. Szczególnie jeśli Markdown, odnośniki zwrotne i prosty wybór „Pamiętam” lub „Nie pamiętam” są dla nich naturalne. Mniej przekonuje jako propozycja dla wieloletniego użytkownika Anki, którego kolekcja opiera się na generowanych wariantach kart, własnym HTML/CSS, JavaScripcie, dodatkach lub szczegółowej kontroli harmonogramu powtórek.

Przy nauce na jednym urządzeniu darmowy plan daje więcej niż wersja próbna: nie wymaga rejestracji, a Mochi dokumentuje nieograniczone korzystanie offline. Haczyk polega na tym, że synchronizacja między urządzeniami należy do **planu Pro za 5 USD miesięcznie**. Dla użytkownika Anki większym kosztem może być to, co straci podczas migracji. Mochi potrafi zaimportować pakiet Anki wraz z historią powtórek, ale nie zachowa każdego szablonu, stylu, skryptu, ustawienia algorytmu ani działania dodatku.

> **Informacja o autorze:** Nazywam się Kirill Markin i tworzę [Nibomo](/pl/). Ta recenzja sposobu pracy opiera się na sprawdzonych źródłach; nie twierdzę, że osobiście przetestowałem produkt. Nie ma tu linków afiliacyjnych. Główne porównanie dotyczy Mochi i Anki, a mój produkt pojawia się dopiero pod koniec jako wyraźnie oznaczona alternatywa.

**Informacje sprawdzone:** 7 września 2026 r. Najnowszym widocznym wtedy [wydaniem Mochi](https://mochi.cards/changelog/) była wersja 26.8.2 z 10 sierpnia 2026 r. Ceny i informacje w sklepach z aplikacjami mogą się zmieniać.

![Konserwator książek sprawdza niewielką harmonijkę połączonych kart, podczas gdy oryginalne archiwum pozostaje bezpiecznie w pudełku](/blog/mochi-alternative-v3.png)

## Recenzja w skrócie

- **Wybierz Mochi**, jeśli chcesz połączyć notatki Markdown z fiszkami, korzystać offline bez konta na jednym urządzeniu, używać odnośników zwrotnych i wybierać jedną z dwóch ocen podczas powtórek.
- **Wybierz Anki**, jeśli potrzebujesz dojrzałych typów notatek, szablonów HTML/CSS, dodatków, darmowej hostowanej synchronizacji, czterech ocen odpowiedzi lub większej kontroli nad FSRS.
- **Jeszcze się nie przenoś**, jeśli już regularnie powtarzasz materiał i nie potrafisz wskazać problemu, który Mochi rozwiąże w twojej nauce. Nowy interfejs to za mało, by ryzykować utratę wieloletnich danych o harmonogramie i własnych kart.
- **Przetestuj migrację**, jeśli od dawna gromadzisz kolekcję w Anki. Mochi przyjmuje pliki `.apkg` i potrafi przenieść historię powtórek, ale konwertuje HTML na Markdown oraz usuwa CSS i JavaScript.

## Mochi i Anki w jednym zestawieniu

| Kryterium | Mochi | Anki |
|---|---|---|
| Dla kogo | Dla użytkowników Markdown i połączonych notatek, którzy chcą mieć notatki obok fiszek do powtórek | Dla osób szukających dojrzałego systemu fiszek z dużymi możliwościami konfiguracji |
| Tworzenie kart | Dokument Markdown zyskuje wiele stron po dodaniu `---`; dostępne są też pola i szablony | Notatki zawierają pola; szablony HTML/CSS generują jedną lub więcej kart |
| Przebieg powtórek | Nowe karty najpierw przechodzą etap nauki; opanowane karty ocenia się przyciskami Forgot / Remembered | Karty ocenia się przyciskami Again / Hard / Good / Easy |
| Planowanie powtórek | Domyślnie własny algorytm Mochi; FSRS jest opcjonalny | FSRS lub starszy SM-2, z szerszym zestawem narzędzi do dostrajania FSRS |
| Darmowe korzystanie | Bez rejestracji i bez ograniczeń offline | Darmowe aplikacje komputerowe i synchronizacja AnkiWeb; oficjalna aplikacja na iOS jest płatna |
| Synchronizacja między urządzeniami | Pro, 5 USD miesięcznie | Darmowa przez AnkiWeb |
| Platformy | Przeglądarka, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, oficjalny AnkiMobile, niezależny AnkiDroid |
| Formaty przenoszenia danych | Eksport we własnym formacie `.mochi`, do Markdown i CSV | Własne formaty `.colpkg` i `.apkg` oraz tekst rozdzielany tabulatorami |
| Granice kontroli nad danymi i hostingiem | Dane przede wszystkim lokalne; główna aplikacja nie jest przedstawiana jako oprogramowanie o otwartym kodzie, a dokumentacja nie opisuje wspieranej usługi synchronizacji na własnym serwerze | Główne repozytorium ma licencję AGPL; dokumentacja opisuje oficjalny serwer synchronizacji do samodzielnego hostowania |

Najważniejsza różnica to **prostota pracy opartej na notatkach albo kontrola nad całą kolekcją**.

## Wokół czego zbudowano interfejs Mochi

Interfejs Mochi łatwiej zrozumieć, śledząc drogę jednej karty.

Każda karta należy do talii. Klikasz **New Card** („Nowa karta”) i dostajesz edytor Markdown zamiast stałych pól na pytanie i odpowiedź. Jedna karta może zawierać nagłówki, listy, kod, obrazy, pola z uporządkowanymi danymi i odnośniki. Dodaj `---` między blokami, aby utworzyć dwie lub więcej stron do powtarzania. Użyj `[[double brackets]]`, czyli podwójnych nawiasów kwadratowych, aby odwołać się do innej karty; Mochi automatycznie utworzy odnośnik zwrotny. Oficjalny [przegląd funkcji kart](https://mochi.cards/docs/cards/) opisuje też szablony, w których w miejsca symboli zastępczych wstawiane są wartości pól.

Karty mogą pełnić dwie funkcje bez rozdzielania ich między różne systemy:

- fiszka do powtórek ma strony i trafia do systemu powtórek rozłożonych w czasie;
- notatka, do której wracasz po informacje może pozostać w tej samej talii i zostać zarchiwizowana. Znika wtedy z kolejek nowych kart i kart do powtórki, ale zachowuje treść, tagi, odnośniki i historię.

[Widoki talii](https://mochi.cards/docs/decks/custom-views/) to zapisane połączenia filtrów, sortowania i układu. Możesz zostawić siatkę do zwykłego przeglądania, a potem utworzyć osobny widok dla tagu, terminu powtórki, niskiego poziomu zapamiętania lub ostatniej powtórki. Mochi pozwala też przekształcić widok w sesję intensywnej nauki bez zmieniania zwykłego harmonogramu ani historii powtórek. To konkretniejszy opis niż „przejrzysty” interfejs: ta sama talia może działać jak notatnik, filtrowana baza danych i kolejka do nauki.

[Codzienne powtórki](https://mochi.cards/docs/getting-started/reviewing-cards/) mają dwa etapy. W sekcji **New cards** („Nowe karty”) dodajesz kartę do harmonogramu powtórek albo wybierasz Again („Ponownie”), by zobaczyć ją za chwilę. Gdy karta jest już opanowana i nadchodzi jej termin, odsłaniasz następną stronę i wybierasz **Forgot** („Nie pamiętam”) lub **Remembered** („Pamiętam”). Jeśli nie pamiętasz odpowiedzi, Mochi umieszcza kartę w kolejce ponownego sprawdzenia, zanim zresetuje postęp. Dzięki temu podczas powtórki podejmujesz prostą decyzję — tak zaprojektowano ten etap nauki.

## Czy Mochi jest darmowe i co działa offline?

Tak, ale zakres darmowych funkcji i pracy offline zależy od używanej wersji aplikacji. [Cennik Mochi](https://mochi.cards/) wymienia:

- **Free (plan darmowy):** 0 USD na zawsze, bez konieczności rejestracji, z nieograniczonym korzystaniem offline.
- **Pro:** 5 USD miesięcznie za dodatkową synchronizację między urządzeniami, publikowanie talii, pola dynamiczne, integrację z AI i wsparcie e-mailowe.

Mochi działa na macOS, Windows, Linuksie, iOS, Androidzie i w przeglądarce. [Instrukcja pobierania i instalacji](https://mochi.cards/docs/getting-started/download-and-install/) pokazuje praktyczne granice:

| Wersja | Co oznacza darmowe korzystanie i tryb offline |
|---|---|
| Zainstalowana aplikacja komputerowa lub mobilna | Możesz używać Mochi offline bez konta. Dane są zapisane na urządzeniu, więc jedna zainstalowana aplikacja może wystarczyć do całkowicie darmowej nauki. |
| Aplikacja przeglądarkowa bez Pro | Treść jest przechowywana w pamięci przeglądarki dostępnej offline. Mochi ostrzega, że przeglądarka może usunąć te dane bez uprzedzenia. |
| Ta sama kolekcja na kilku urządzeniach | Automatyczna synchronizacja między urządzeniami jest funkcją Pro, choć każda zainstalowana aplikacja może działać offline. |

Praca offline i synchronizacja to dwie odrębne funkcje. Nie potrzebujesz Pro tylko po to, by tworzyć fiszki lub powtarzać je w pobranej aplikacji. Potrzebujesz go, jeśli ta sama aktualna kolekcja ma automatycznie trafiać z laptopa na telefon. Ważne dane z darmowego planu zabezpieczaj kopią we własnym formacie aplikacji, zamiast traktować urządzenie, a zwłaszcza pamięć przeglądarki, jako jedyne miejsce ich przechowywania.

Jeśli decydujące znaczenie ma praca offline, porównaj konkretny sposób pracy na swoich urządzeniach z opisem w artykule [Czy Anki działa offline?](/blog/does-anki-work-offline/) i szerszym [przewodniku po aplikacjach do fiszek offline](/blog/best-offline-flashcards-app/).

## Fiszki w Markdown to główny powód, by wybrać Mochi

Główną zaletą Mochi jest to, jak Markdown zmienia postać materiału, nad którym pracujesz.

Karta Mochi pozostaje czytelna jako tekst. Ten sam dokument może zawierać krótkie wyjaśnienie, blok kodu, odnośniki do powiązanych pojęć i separatory między stronami do powtarzania. Karty mogą też korzystać z pól i szablonów, gdy liczy się powtarzalna struktura. Po zastosowaniu szablonu Mochi wyświetla jego Markdown, wstawiając wartości pól w miejsca symboli zastępczych. Podczas wyświetlania pomija własny Markdown karty, ale go nie usuwa.

Anki wychodzi od innego modelu. Notatka przechowuje pola, a [szablony kart](https://docs.ankiweb.net/templates/intro.html) określają, które pola się pojawiają i jakie karty powstają. Szablony używają HTML oraz CSS do stylowania. Jedna notatka ze słówkiem może więc generować karty do rozpoznawania i samodzielnego podawania odpowiedzi, a dane źródłowe pozostają w jednym miejscu.

Ta struktura daje Anki większe możliwości tworzenia układów warunkowych, generowanych wariantów kart, wpisywanych odpowiedzi, własnych stylów i sposobów pracy rozszerzanych dodatkami. Oznacza też, że Anki nie jest aplikacją do fiszek z natywną obsługą Markdown. Praca w Markdown wymaga w Anki dodatkowej konwersji lub dodatku.

Praktyczne pytanie jest proste: wolisz notatkę, która może stać się fiszką, czy ustrukturyzowany typ notatki, który generuje kilka kart? Mochi skupia się na pierwszym podejściu. Anki na drugim.

## Powtórki rozłożone w czasie w Mochi obejmują już FSRS

Porównania twierdzące, że Mochi nie ma FSRS, są nieaktualne. Mochi dodało wstępną wersję FSRS w 2025 r. i od tego czasu wydawało kolejne poprawki dotyczące planowania powtórek. Nadal jednak [domyślny pozostaje własny algorytm Mochi](https://mochi.cards/docs/reviewing/fsrs/).

Domyślny algorytm zmienia odstępy między powtórkami za pomocą stałych mnożników, zależnie od tego, czy pamiętasz odpowiedź. Przełącz się na FSRS w Review Settings („Ustawienia powtórek”), a już opanowane karty przejdą na FSRS bez utraty historii. Możesz ustawić docelowy poziom zapamiętania, wprowadzić własne parametry i później wrócić do poprzedniego algorytmu.

Mochi zachowuje dwie oceny niezależnie od algorytmu:

- **Forgot** („Nie pamiętam”) odpowiada ocenie Again („Ponownie”) w FSRS.
- **Remembered** („Pamiętam”) odpowiada ocenie Good („Dobrze”) w FSRS.

Dokumentacja Mochi podaje, że dwustopniowa ocena działa z FSRS, choć traci się część informacji, które dałyby oceny Hard („Trudno”) i Easy („Łatwo”). Mochi przyjmuje zoptymalizowane własne parametry, ale nie ma wbudowanego optymalizatora. Wyznaczenie parametrów dopasowanych do twojej nauki wymaga zewnętrznego optymalizatora FSRS i historii powtórek z Mochi.

[Ustawienia FSRS w Anki](https://docs.ankiweb.net/deck-options.html#fsrs) idą dalej. Docelowy poziom zapamiętania i parametry można przypisać do zestawów ustawień, wbudowany optymalizator dopasowuje parametry do historii powtórek, a symulator szacuje liczbę powtórek lub czas nauki w minutach przy różnych ustawieniach. Anki zapisuje też cztery wyniki: Again („Ponownie”), Hard („Trudno”), Good („Dobrze”) i Easy („Łatwo”).

Dodatkowe przyciski pomagają tylko wtedy, gdy używasz ich konsekwentnie. Instrukcja Anki traktuje Hard jako poprawne przypomnienie sobie odpowiedzi. Kliknięcie Hard, gdy nie pamiętasz odpowiedzi, przekazuje FSRS błędną informację i może prowadzić do zbyt długich odstępów.

Wybierz dwustopniowe oceny Mochi, jeśli wybór między „Pamiętam” a „Nie pamiętam” upraszcza sesję. Wybierz Anki, jeśli chcesz przekazywać więcej informacji w ocenach i będziesz korzystać z optymalizatora, kontroli poziomu zapamiętania, zestawów ustawień lub symulatora obciążenia nauką. Porównanie samych algorytmów zamiast aplikacji znajdziesz w artykule [FSRS a SM-2](/blog/fsrs-vs-sm-2/).

## W Mochi i Anki płacisz za różne rzeczy

Przy nauce na jednym komputerze obie aplikacje mogą być darmowe. Koszty pojawiają się w różnych miejscach, gdy dodajesz kolejne urządzenia.

Mochi pobiera **5 USD miesięcznie** za synchronizację Pro i łączy ją z publikowaniem, polami dynamicznymi, integracją z AI i wsparciem. Aplikacje komputerowe Anki są darmowe, a [oficjalna strona Anki](https://apps.ankiweb.net/) opisuje synchronizację AnkiWeb jako bezpłatną. AnkiMobile to płatna oficjalna aplikacja na iPhone'a i iPada; AnkiDroid jest darmowym, rozwijanym niezależnie klientem na Androida.

Odpowiedź na pytanie „Co jest tańsze?” zależy więc od twoich urządzeń:

- jeden komputer: obie aplikacje mogą być darmowe;
- kilka komputerów lub urządzeń z Androidem: darmowa hostowana synchronizacja Anki pozwala uniknąć subskrypcji;
- iPhone lub iPad: Anki wymaga jednorazowego zakupu aplikacji, a Mochi udostępnia synchronizację między urządzeniami w planie Pro opłacanym w ramach subskrypcji;
- użytkownicy Mochi, którzy i tak potrzebują publikowania, pól dynamicznych lub integracji z AI, mogą traktować synchronizację jako część pakietu, a nie jedyny powód ponoszenia kosztu.

Sprawdź lokalny App Store przed porównywaniem dokładnych kosztów na iOS. Nie podaję tu stałej ceny z App Store, bo może się różnić w zależności od rynku.

## Hosting Mochi to nie to samo co lokalne dane

Trzy określenia często niesłusznie sprowadza się do jednego:

- **Local-first** oznacza, że robocza kopia danych znajduje się na twoim urządzeniu, a aplikacja może działać bez swojej usługi chmurowej.
- **Open source** oznacza, że kod źródłowy jest dostępny na licencji pozwalającej go analizować i modyfikować.
- **Samodzielny hosting** oznacza, że dokumentacja produktu opisuje wspierany sposób uruchomienia danej usługi na własnej infrastrukturze.

Mochi jasno dokumentuje działanie z danymi lokalnymi. Nie przedstawia swojej głównej aplikacji jako oprogramowania o otwartym kodzie: odnośnik „Open source” w stopce publicznej strony prowadzi do [zbioru integracji](https://github.com/mochi-cards/open-source), a nie do głównej aplikacji. Oficjalna strona nie dokumentuje też wspieranego zamiennika synchronizacji Pro, który można uruchomić na własnym serwerze.

Jeśli szukasz **hostingu Mochi**, bo chcesz mieć własny serwer, granica przebiega właśnie tutaj: możesz zachowywać lokalne dane i kopie we własnym formacie aplikacji, ale opisana w dokumentacji droga do synchronizacji między urządzeniami prowadzi przez Mochi Pro. Lokalne przechowywanie daje kontrolę nad danymi, lecz nie oznaczają własnego hostingu.

Główne repozytorium Anki jest [udostępnione na licencji AGPL w wersji 3 lub nowszej](https://github.com/ankitects/anki/blob/main/LICENSE), z wymienionymi wyjątkami dla części komponentów. Oficjalna instrukcja opisuje też [serwer synchronizacji do samodzielnego hostowania](https://docs.ankiweb.net/sync-server.html) dla zaawansowanych użytkowników. Serwer zastępuje synchronizację AnkiWeb w zgodnych klientach; nie jest samodzielnie hostowaną kopią strony AnkiWeb. Anki zakłada, że jego administrator poradzi sobie z wierszem poleceń, siecią, zaporą, protokołem i aktualizacjami.

## Co zachowuje import z Anki, a co zmienia

[Dokumentacja importu Mochi](https://mochi.cards/docs/import-and-export/importing/) opisuje obsługę plików Anki `.apkg`, w tym historii powtórek. „Zaimportowane” nie oznacza jednak „równoważne”.

Podczas importu Mochi konwertuje HTML na Markdown oraz usuwa CSS i JavaScript. To konwersja formatu między dwoma różnymi modelami kart. Najłatwiej przenieść proste materiały z przodem i tyłem. Karta zależna od stylowania, logiki szablonu, wpisywania odpowiedzi lub JavaScriptu wymaga sprawdzenia po imporcie.

Historia powtórek wymaga też świadomego wyboru przy eksporcie. [Instrukcja eksportu Anki](https://docs.ankiweb.net/exporting.html) podaje, że opcja **Include Scheduling Information** („Uwzględnij informacje o harmonogramie”) decyduje o dołączeniu historii powtórek do pakietu. Jeśli ją wyłączysz, Mochi nie odzyska historii, której plik `.apkg` nigdy nie zawierał.

Nawet po przeniesieniu historii nie oczekuj identycznych przyszłych terminów powtórek. Obie aplikacje mogą używać różnych algorytmów, ocen, docelowych poziomów zapamiętania, parametrów, kroków nauki i ustawień talii. Zachowane zdarzenia dostarczają nowemu algorytmowi danych; nie sprawiają, że oba systemy stają się identyczne.

## Kopie w formacie aplikacji i eksport tekstowy służą różnym celom

Zanim cokolwiek przeniesiesz, zachowaj kopię zapasową pozwalającą odtworzyć pierwotny system. Czytelny eksport jest przydatny, ale nie zawsze da się z niego odtworzyć całość.

[Poradnik tworzenia kopii zapasowych Mochi](https://mochi.cards/docs/getting-started/backing-up/) opisuje dwa sposoby zabezpieczenia danych we własnym formacie:

- Skopiowanie całego katalogu użytkownika zachowuje treść, historię powtórek, załączniki, ustawienia aplikacji i stan zalogowania.
- Eksport `.mochi` zachowuje talie, karty, szablony i pola, załączniki, tagi i metadane, historię powtórek, kolejność kart i strukturę talii.

[Eksport Mochi do Markdown i CSV](https://mochi.cards/docs/import-and-export/exporting/) służy przenoszeniu treści. Markdown tworzy jeden plik na kartę i foldery dla podtalii, ale pomija historię powtórek, kolejność kart, szablony i tagi zapisane w metadanych, chyba że te tagi znajdują się w samym Markdown. CSV może wyeksportować pola szablonów lub przód i tył kart po zastosowaniu szablonu, ale nie zachowuje historii powtórek, szablonów ani tagów z metadanych, chyba że tagi są osadzone w treści.

Anki stosuje podobne rozróżnienie:

- Plik `.colpkg` eksportuje całą kolekcję z harmonogramem i może zawierać multimedia. Import zastępuje karty w docelowej kolekcji Anki.
- Plik `.apkg` eksportuje jedną talię wraz z podtaliami, z opcjami dołączenia informacji o harmonogramie, zestawów ustawień i multimediów.
- Notatki w zwykłym tekście używają pól rozdzielanych tabulatorami z osadzonym formatowaniem HTML. Zachowują edytowalną treść, ale nie pełne działanie kolekcji.

Powrót z Mochi do Anki zwykle odbywa się przez CSV. Anki potrafi [przypisać kolumny tekstowe do pól notatki](https://docs.ankiweb.net/importing/text-files.html), ale odnośniki Mochi, działanie kart wielostronnych, szablony i historia powtórek nie zostaną w ten sposób odtworzone jako równoważne elementy Anki. Zachowaj eksport `.mochi`, nawet gdy kopia w Anki wygląda już poprawnie.

## Przetestuj reprezentatywną talię i sprawdź możliwość powrotu

Okno migracji dowodzi, że aplikacja przyjęła plik. Nie dowodzi, że twoja rzeczywista kolekcja nadal działa ani że można przenieść z powrotem użyteczną treść. Sprawdź oba kierunki, nie ruszając zwykłego profilu Anki.

1. **Zrób kopię całego Anki.** Wyeksportuj `.colpkg` z multimediami i zapisz go poza profilem używanym do nauki.
2. **Sprawdź, czy kopię da się otworzyć.** Utwórz pusty, tymczasowy profil Anki i zaimportuj tam `.colpkg`. Import pakietu kolekcji zastępuje kolekcję docelową, dlatego tymczasowy profil ma znaczenie.
3. **Zbuduj reprezentatywną talię w tym tymczasowym profilu.** Powinna być na tyle mała, by sprawdzić każdą kartę, ale obejmować funkcje, na których polegasz: karty podstawowe i odwrócone, luki, własne szablony, CSS, JavaScript, obrazy, dźwięk, równania, tagi, zagnieżdżone talie i historię powtórek.
4. **Wyeksportuj tę talię jako `.apkg`.** Dołącz informacje o harmonogramie, zestawy ustawień i multimedia, jeśli są istotne. Te opcje umieszczają dane w pakiecie Anki; nie gwarantują, że Mochi odtworzy każde ustawienie.
5. **Zaimportuj do nowej talii Mochi.** Nie zmieniaj swojego codziennego profilu Anki ani jego kolejki kart do powtórki.
6. **Sprawdź karty przed powtarzaniem.** Porównaj treść, formatowanie, pola, multimedia, tagi, strukturę talii i historię. Zwróć szczególną uwagę na wszystko, co zależało od HTML, CSS, JavaScriptu lub generowanych wariantów kart.
7. **Świadomie wybierz algorytm.** Mochi zaczyna od własnego algorytmu. Włącz FSRS tylko wtedy, gdy zamierzasz go używać po próbie.
8. **Korzystaj z kopii przez tydzień zwykłych powtórek.** Oceń edytowanie w Markdown, etap New cards („Nowe karty”), wybór Remembered/Forgot („Pamiętam”/„Nie pamiętam”), działanie offline oraz, jeśli za nią płacisz, synchronizację na urządzeniach, które faktycznie nosisz ze sobą.
9. **Sprawdź drogę powrotną.** Wyeksportuj testową talię Mochi jako `.mochi`, aby mieć kopię we własnym formacie aplikacji, oraz jako CSV dla Anki. Użyj CSV z wartościami pól, gdy ważne są pola do ponownego wykorzystania; wybierz CSV z stronami kart po zastosowaniu szablonu, gdy potrzebujesz głównie widocznej treści przodu i tyłu. Zaimportuj ten CSV do kolejnego pustego profilu Anki i przypisz kolumny do odpowiedniego typu notatki.
10. **Zapisz każdą zaakceptowaną stratę.** Sprawdź osobno przenoszenie do Mochi i powrót. Dokładne stylowanie, działanie kart wielostronnych, dodatków i generowanych wariantów, oceny powtórek, historia lub przyszłe terminy mogą mieć w codziennym użyciu większe znaczenie niż w tabeli porównawczej.

Powrót przez CSV przenosi treść, ale nie odtwarza w pełni Mochi: nie przenosi historii powtórek, szablonów ani tagów z metadanych, chyba że tagi są osadzone w treści. Jeśli Mochi nie rozwiązuje wskazanego przez ciebie problemu, usuń testową talię i ucz się dalej na pierwotnym profilu Anki. Jeśli rozwiązuje, przenoś rzeczywiste talie pojedynczo i zachowaj kopie Anki `.colpkg` oraz Mochi `.mochi` przez kilka zwykłych cykli powtórek.

## Kto powinien korzystać z fiszek Mochi?

Mochi pasuje do ciebie, gdy:

- już piszesz i organizujesz myśli w Markdown;
- chcesz mieć notatki i fiszki do powtórek w jednym miejscu i łączyć je odnośnikami;
- wolisz prosty wybór „Pamiętam”/„Nie pamiętam” od czterech ocen;
- darmowe korzystanie offline na jednym urządzeniu ci wystarcza albo synchronizacja Pro jest dla ciebie warta 5 USD miesięcznie;
- twoja kolekcja jest nowa lub na tyle prosta, że konwersja z Anki niesie małe ryzyko.

Zostań przy Anki, gdy:

- twoje typy notatek generują kilka ważnych wariantów kart;
- szablony HTML/CSS, JavaScript, dodatki lub udostępniane talie są częścią twojego systemu;
- darmowa synchronizacja między urządzeniami jest ważniejsza niż tworzenie treści w Markdown;
- chcesz używać optymalizatora FSRS, zestawów ustawień, czterech ocen i symulatora obciążenia nauką w Anki;
- wieloletnie dane o powtórkach i własne rozwiązania już dobrze się sprawdzają.

Najrozsądniejsza alternatywa dla Mochi zależy od tego, dlaczego żadna z tych dwóch opcji ci nie odpowiada. Dla nowej, prostszej kolekcji [funkcje Nibomo](/pl/features/) obejmują powtórki FSRS, naukę offline i synchronizację, przenoszenie kart, tagów i multimediów, dostęp dla agentów oraz opisaną w dokumentacji ścieżkę samodzielnego hostingu. Tworzę ten produkt i jego ograniczenia mają tu znaczenie: nie zastępuje połączonego odnośnikami notatnika Markdown w Mochi ani dojrzałego systemu szablonów i dodatków Anki. [Przewodnik na początek](/docs/getting-started/) pokazuje dostępne sposoby korzystania z wersji hostowanej i mobilnej, agentów oraz własnego hostingu.

## Co ostatecznie wybrać

Mochi to więcej niż ładniejszy interfejs Anki. Jego istotą jest możliwość połączenia notatki Markdown, wpisu w sieci powiązanej wiedzy i fiszki do powtórek rozłożonych w czasie w jednym obiekcie. Darmowy plan obejmuje pracę offline bez konta; Pro dodaje funkcje hostowane, w tym synchronizację między urządzeniami.

To dobry kompromis dla osoby, która zaczyna nową kolekcję opartą na Markdown. Przejście z Anki też może mieć sens, jeśli test reprezentatywnej talii wykaże, że natywny Markdown i dwustopniowe oceny usuwają rzeczywiste trudności w nauce.

Jeśli od lat korzystasz z Anki, potrzebujesz konkretnego uzasadnienia zmiany. Zrób kopię kolekcji, przetestuj karty z największą liczbą własnych rozwiązań i zostań przy Anki, chyba że Mochi na tyle poprawi codzienną pracę w kolejnych tygodniach, by uzasadnić rezygnację z konkretnych możliwości formatowania, szablonów, planowania powtórek i ekosystemu.
