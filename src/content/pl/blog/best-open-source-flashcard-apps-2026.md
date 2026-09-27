---
title: "Najlepsze aplikacje do fiszek open source w 2026 roku: porównanie 6 programów FOSS"
description: "Porównanie sześciu rozwijanych aplikacji do fiszek open source: dostępny kod, dane offline, synchronizacja, import z Anki, eksport, własny hosting i odzyskiwanie danych."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "najlepsze aplikacje do fiszek open source"
  - "aplikacja do fiszek open source"
  - "powtórki rozłożone w czasie open source"
  - "fiszki na własnym serwerze"
  - "aplikacja do fiszek offline"
  - "alternatywa dla Anki open source"
  - "fiszki FOSS"
---

Anki nadal jest w 2026 roku najlepszą aplikacją do fiszek open source dla większości osób. Ciekawiej robi się wtedy, gdy otwarty kod nie jest twoim jedynym wymaganiem, z którego nie możesz zrezygnować.

Może potrzebujesz aplikacji przeglądarkowej na własnym serwerze. Albo talii, którą odczytasz jako zwykły Markdown. Albo prywatnego systemu notatek, z których powstają fiszki. Każde z tych wymagań prowadzi do innych produktów, a publiczne repozytorium na GitHubie nie rozstrzyga wyboru.

Aplikacja komputerowa z otwartym kodem może mieć zamknięty odpowiednik na iPhone’a. Kontener Docker może udostępniać interfejs przeglądarkowy bez synchronizacji z aplikacjami natywnymi. Import może przenieść tekst, ale zgubić szablony, multimedia i lata historii powtórek, dzięki którym kolekcja była przydatna.

Sześć projektów spełniło przyjęte kryteria. Porównałem zakres dostępnego kodu i jego licencję, najnowsze stabilne wydanie, lokalne dane, algorytm powtórek, synchronizację, migrację z Anki, eksport i dokładny zakres samodzielnego hostingu. Ten ostatni ma większe znaczenie, niż sugeruje większość list funkcji.

> **Informacja od autora:** Nazywam się Kirill Markin i tworzę [Nibomo](https://nibomo.com/), jedną z sześciu aplikacji poniżej. Jej repozytorium na licencji MIT obejmuje aplikację webową, klientów natywnych, backend, synchronizację i infrastrukturę. Nie umieściłem jej na pierwszym miejscu. Anki jest bezpieczniejszym wyborem domyślnym, Mnemosyne ma lepiej ugruntowaną ścieżkę migracji z Anki, a kilka opisanych tu rozwiązań jest znacznie łatwiejszych w utrzymaniu.

**Informacje sprawdzone:** 5 września 2026 r. Oddzielam stabilne wydania od prac dostępnych wyłącznie w domyślnej gałęzi repozytorium.

![Turysta porównuje sześć otwartych plecaków i sprawdza zestaw zapasowy przed wyborem aplikacji do fiszek open source](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Krótka odpowiedź

| Główne wymaganie | Najlepszy wybór | Dlaczego | Co najpierw sprawdzić |
| --- | --- | --- | --- |
| Niezawodny system ogólnego przeznaczenia lub złożona istniejąca kolekcja | [Anki](https://apps.ankiweb.net/) | Dojrzały model kart i szablonów, FSRS, dodatki, szeroki wybór klientów i rozbudowany eksport pakietów | Oficjalna aplikacja iOS i AnkiWeb nie należą do otwartego kodu wersji komputerowej; własny hosting daje synchronizację, a nie AnkiWeb |
| Skupiona na nauce alternatywa komputerowa z ugruntowanym importem z Anki | [Mnemosyne](https://mnemosyne-proj.org/) | Nauka lokalna, import typów kart i danych o nauce z Anki oraz serwer synchronizacji do samodzielnego uruchomienia | Wersja 2.11 nadal jest najnowszym stabilnym wydaniem; Android pozwala powtarzać, ale nie edytować |
| Notatki i fiszki w jednej lokalnej bazie wiedzy | [SiYuan](https://b3log.org/siyuan/en/) | Natywne aplikacje offline, wbudowany FSRS i pełna aplikacja przeglądarkowa uruchamiana przez Docker | Wersja uruchomiona w Dockerze nie synchronizuje się z aplikacjami natywnymi, a część poleceń importu i eksportu jest w Dockerze niedostępna |
| Kod aplikacji webowej, mobilnej, backendu i infrastruktury | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Jedno monorepo MIT z udokumentowanym wdrożeniem produkcyjnym | Wspierany stos produkcyjny opiera się na AWS, a migracja z Anki wiąże się z utratą części danych |
| Młodsza aplikacja komputerowa stawiająca na lokalne przechowywanie danych i bezpośrednim importem APKG | [Recall](https://github.com/Madlezz/Recall) | FSRS, wersje komputerowe, PWA, lokalne bazy danych i opcjonalny szyfrowany serwer pośredniczący | Import zachowuje tylko migawkę stanu harmonogramu, obsługuje pierwsze dwa pola notatki i pomija dźwięk |
| Czytelne talie Markdown bez zależności od sieci | [Essentialist](https://github.com/essentialist-app/essentialist) | Zwykłe pliki talii i aplikacja zaprojektowana wyłącznie do pracy offline na komputery i Androida | Brak synchronizacji, a postęp znajduje się w osobnej ukrytej bazie danych |

To nie ranking liczby funkcji. Zacznij od straty, na którą nie możesz sobie pozwolić. Jeśli masz dziesięć lat powtórek w Anki, wierność migracji jest ważniejsza niż ładniejszy interfejs. Jeśli utrzymujesz wdrożenie dla szkoły, dostęp przez przeglądarkę i sprawdzone odtwarzanie danych mogą znaczyć więcej niż dodatki.

## Co uznałem za aplikację do fiszek open source

Zastosowałem cztery kryteria:

1. **Podstawowe funkcje nauki mają opublikowany kod i jednoznaczną licencję open source.** Katalog integracji wokół nieopublikowanej głównej aplikacji się nie liczy.
2. **Powtórki rozłożone w czasie działają już teraz.** Wpis w planie rozwoju lub zwykły tryb quizu nie wystarcza.
3. **Istnieje wydana wersja aplikacji albo jasno opisana oficjalna metoda wdrożenia.** Same świeże commity nie czynią prototypu bezpieczną rekomendacją.
4. **Oficjalne źródła opisują dość szczegółowo obsługę danych, by dało się ją ocenić.** Potrzebowałem konkretnych odpowiedzi o przechowywaniu offline, synchronizacji, imporcie i eksporcie lub hostingu, a nie ogólnej obietnicy, że użytkownicy „są właścicielami swoich danych”.

Nie ustaliłem minimalnej liczby gwiazdek. Odzwierciedlają one wiek i rozgłos projektu równie mocno jak jego przydatność. Dojrzałość nadal jednak ma znaczenie. Anki, Mnemosyne i SiYuan mają ustaloną historię wydań i sprawdzone sposoby użytkowania. Recall i Essentialist otrzymały węższe rekomendacje, ponieważ zachowanie ich wydanych wersji jest dostatecznie dobrze opisane, by wskazać konkretne zastosowania.

Żeby uznać aplikację za nadal rozwijaną, trzeba też sprawdzić dwie rzeczy. Wydanie oznaczone tagiem pokazuje, co użytkownicy mogą zainstalować; domyślna gałąź pokazuje kierunek projektu. Essentialist jest dobrym przykładem. Dokumentacja stabilnego wydania mówi o SM-2, a bieżącej gałęzi o FSRS. Poniższa tabela podaje SM-2.

## Porównanie sześciu aplikacji do fiszek FOSS

| Aplikacja | Sprawdzone stabilne wydanie | Platformy | Dane offline | Algorytm powtórek | Synchronizacja | Migracja z Anki i możliwość przeniesienia danych dalej | Zakres własnego hostingu |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 sierpnia 2026 r. | Windows, macOS, Linux; osobne aplikacje na Androida i iOS; AnkiWeb | Zainstalowane aplikacje korzystają podczas nauki z lokalnych kolekcji | FSRS lub starszy SM-2 | AnkiWeb lub oficjalny samodzielnie hostowany serwer synchronizacji | Import tekstu, APKG/COLPKG i baz Mnemosyne; eksport tekstu lub pakietów z opcjonalnymi multimediami i harmonogramem | **Tylko serwer synchronizacji.** Bez własnego AnkiWeb czy interfejsu nauki w przeglądarce |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 listopada 2023 r.; prace w repozytorium trwały w 2026 r. | Windows, macOS, Linux, Android; ograniczone powtórki w przeglądarce | Wersja komputerowa działa lokalnie; Android umożliwia powtórki offline, ale bez edycji | Adaptacyjne planowanie na podstawie oceny przypomnienia 0–5 | Wbudowana synchronizacja z instancją komputerową lub bez interfejsu graficznego | Oficjalnie udokumentowany pełny import z Anki z własnymi typami kart i danymi o nauce; eksport do udostępniania nie jest pełną kopią zapasową | **Synchronizacja i ograniczone powtórki w przeglądarce.** Serwer przeglądarkowy nie ma zabezpieczeń |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 sierpnia 2026 r. | Windows, macOS, Linux, Android, iOS, HarmonyOS; przeglądarka przez Docker | Klienci natywni przechowują obszar roboczy lokalnie | FSRS | Płatna oficjalna synchronizacja E2EE lub płatna integracja z zewnętrznym S3/WebDAV | Pełna aplikacja obsługuje import Markdown/danych i eksport do kilku formatów dokumentów/danych; brak udokumentowanego importera APKG | **Pełna aplikacja przeglądarkowa.** Docker nie synchronizuje klientów natywnych i wyłącza część poleceń importu/eksportu |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 września 2026 r. | Web, iOS, Android | IndexedDB w przeglądarce; SQLite na iOS; Room na SQLite na Androidzie; lokalne zapisy trafiają do kolejki synchronizacji | FSRS | Hostowany backend lub backend wdrożony przez administratora | Własny ZIP przenosi karty, tagi, metadane źródeł i powiązane multimedia, ale nie talie, stan nauki, ustawienia ani konta; brak importera APKG | **Pełny stos webowy i backend.** Wdrożenie produkcyjne opiera się na AWS; prywatne wersje natywne buduje się osobno |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 lipca 2026 r. | Windows, macOS, Linux; instalowalna PWA | SQLite na komputerze; IndexedDB w przeglądarce; domyślnie bez konta i telemetrii | FSRS | Synchronizacja folderu na komputerze lub opcjonalny szyfrowany serwer pośredniczący Cloudflare Worker/R2 | Komputerowy import APKG odczytuje pierwsze dwa pola, talie, tagi, przybliżoną migawkę harmonogramu i obrazy; eksport JSON i archiwów Recall | **Tylko pośrednik dla szyfrowanych migawek.** Nie hostuje samej PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 października 2025 r.; prace nad kodem trwały w 2026 r. | Android APK, macOS DMG, Linux Flatpak; Windows kompilowany ze źródeł | Bez dostępu do sieci; treść talii w Markdown | Stabilne wydanie: SM-2; domyślna gałąź: FSRS | Brak | Markdown zachowuje treść kart; ukryta towarzysząca baza danych zachowuje postęp | **Nie ma czego hostować.** Twórz kopię pliku Markdown razem z towarzyszącą bazą |

## 1. Anki to najbezpieczniejszy wybór domyślny

Anki wygrywa w mało efektownych kwestiach. Potrafi odwzorować złożone typy notatek, generować powiązane karty z szablonów, przechowywać multimedia razem z kolekcją i zachować lata danych harmonogramu. Stabilne wydanie komputerowe przyjęte w tym przeglądzie to [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Nowsza wersja 26.09b2 jest oznaczona jako beta, więc nie stanowi tu punktu odniesienia.

Zakres otwartego kodu jest zróżnicowany. [Repozytorium wersji komputerowej ma licencję AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE), z wymienionymi wyjątkami dla dołączonych komponentów. [AnkiDroid](https://github.com/ankidroid/Anki-Android) to osobny projekt open source na Androida. AnkiMobile i AnkiWeb są oficjalnymi produktami, ale ich kod nie znajduje się w tych repozytoriach. Więcej na ten temat znajdziesz w artykule [Czy Anki jest open source?](/blog/is-anki-open-source/).

Zainstalowani klienci przechowują lokalne kolekcje, więc zwykłe powtórki działają bez połączenia. AnkiWeb jest wersją internetową. Jeśli decyduje praca offline, artykuł [Czy Anki działa offline?](/blog/does-anki-work-offline/) rozdziela to, co pozostaje lokalne, od tego, co czeka na synchronizację.

Anki obsługuje [FSRS i swój starszy algorytm powtórek](https://docs.ankiweb.net/deck-options.html). Jego formaty eksportu dają w tej grupie najlepszy punkt wyjścia do migracji. [COLPKG zawiera całą kolekcję wraz z harmonogramem](https://docs.ankiweb.net/exporting.html), a eksport APKG może zawierać dane harmonogramu i multimedia, jeśli zaznaczysz odpowiednie opcje. Anki importuje też tekst, pakiety Anki i bazy Mnemosyne 2.0.

Tak bogaty pakiet źródłowy nie gwarantuje idealnego importu do innej aplikacji. Program docelowy nadal musi rozumieć zawarte w nim szablony, reguły generowania kart, odwołania do multimediów i pola algorytmu powtórek. Po prostu ma do dyspozycji więcej informacji niż w pliku CSV.

[Oficjalny serwer do samodzielnego hostowania](https://docs.ankiweb.net/sync-server.html) ma celowo wąski zakres. Synchronizuje zgodnych klientów Anki; nie zapewnia AnkiWeb, powtórek w przeglądarce ani panelu zarządzania kontami. Domyślnie nasłuchuje po nieszyfrowanym HTTP, a instrukcja zaleca pozostawienie go w sieci lokalnej lub umieszczenie przed nim VPN albo odwrotnego proxy HTTPS. Wersje klienta i serwera muszą też pozostawać zgodne.

Wybierz Anki, gdy najważniejsze są wierne zachowanie kolekcji, szablony, dodatki lub szeroki wybór klientów. Szukaj gdzie indziej dopiero wtedy, gdy konkretne ograniczenie — na przykład brak własnego interfejsu przeglądarkowego albo w pełni opublikowanego stosu mobilnego — ma większe znaczenie.

## 2. Mnemosyne skupia się na lokalnej nauce

Mnemosyne przypomina komputerowe narzędzie do nauki, bo właśnie nim jest. Nie dostajesz przy okazji bazy wiedzy ani platformy chmurowej. Masz lokalną bazę danych, tradycyjne powtórki rozłożone w czasie, pomocniczą aplikację Android do powtórek i serwer synchronizacji, który może działać na komputerze z interfejsem graficznym lub bez niego.

Najnowszym stabilnym wydaniem nadal jest [2.11 z listopada 2023 r.](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). W repozytorium pojawiały się zmiany w 2026 r., ale to nie czyni z nich stabilnego instalatora. Przetestuj 2.11 na systemach operacyjnych, których zamierzasz używać przez kilka kolejnych lat.

Licencji również nie da się opisać jednym oznaczeniem. [Główny wykaz licencji](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) przypisuje LGPL v3 do openSM2sync i osobne warunki do reszty Mnemosyne. [Licencja głównego programu](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) stosuje AGPL v3 z dodatkowym zapisem wymagającym, by nazwa Mnemosyne pozostała wyraźnie widoczna w utworach zależnych; dokładną formę należy omówić z opiekunami projektu. Przeczytaj ten tekst przed rozpowszechnianiem zmodyfikowanej wersji.

[Klient Android umożliwia powtórki offline, ale nie edycję kart](https://mnemosyne-proj.org/help/android-client). Inne urządzenia mogą korzystać z serwera powtórek w przeglądarce uruchamianego z aplikacji komputerowej, ale oficjalna lista funkcji ostrzega, że serwer nie ma zabezpieczeń. To przydatny interfejs w sieci LAN, a nie dopracowana publiczna aplikacja webowa.

Migracja jest najmocniejszym argumentem Mnemosyne przeciwko pozostaniu przy Anki. Oficjalna lista funkcji dokumentuje [pełny import z Anki, w tym własnych typów kart i danych o nauce](https://mnemosyne-proj.org/features). [Wbudowana synchronizacja](https://mnemosyne-proj.org/help/syncing) scala karty i dane o nauce, i pozwala korzystać z własnego komputera jako serwera.

Zwykłe polecenie eksportu to pułapka przy tworzeniu kopii zapasowych. Służy udostępnianiu wybranych kart i pomija dane o nauce. Aby przenieść lub odzyskać cały system, [poradnik pracy na wielu komputerach](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) zaleca skopiowanie całego katalogu danych.

Mnemosyne to tutaj najmocniejsza alternatywa open source dla Anki skupiona na samej nauce. Ceną są rzadkie stabilne wydania, ograniczona edycja mobilna i interfejs przeglądarkowy wymagający starannego ograniczenia dostępu z sieci.

## 3. SiYuan sprawdza się, gdy podstawą są notatki

SiYuan to aplikacja do zarządzania wiedzą stawiająca prywatność na pierwszym miejscu, z fiszkami wbudowanymi w ten sam model bloków i dokumentów. To przydatne, gdy materiał do powtórek powstaje z twoich notatek. Jeśli chcesz tylko kolejki kart, dostajesz dużo dodatkowej złożoności.

[Repozytorium AGPL-3.0](https://github.com/siyuan-note/siyuan) prowadzi do interfejsu, jądra, aplikacji mobilnych, warstwy danych i komponentu FSRS. Sprawdzonym tu stabilnym wydaniem jest [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Klienci komputerowi i mobilni przechowują obszar roboczy lokalnie i nadal działają offline.

Synchronizacja nie należy do darmowego wariantu z lokalnym przechowywaniem danych. [Oficjalny cennik](https://b3log.org/siyuan/en/pricing.html) oferuje w subskrypcji oficjalną synchronizację z szyfrowaniem end-to-end, a płatne funkcje Pro dodają integracje z własnym S3 lub WebDAV. Projekt ostrzega też przed umieszczaniem aktywnego obszaru roboczego w zwykłym folderze synchronizowanym przez narzędzie do plików, ponieważ równoczesne zmiany mogą uszkodzić lub nadpisać dane.

Docker uruchamia pełną aplikację przeglądarkową, ale nie staje się serwerem synchronizacji dla zainstalowanych aplikacji. [Dokumentacja Dockera dla v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) podaje, że klienci komputerowi i mobilni nie mogą się z nim łączyć. Wersja w Dockerze nie obsługuje też importu Markdown ani eksportu do PDF, HTML i Worda. Te polecenia istnieją w szerszej aplikacji natywnej, więc przeniesienie ogólnej listy funkcji do planu wdrożenia Docker byłoby mylące.

Nie znalazłem oficjalnego importera APKG. SiYuan potrafi przenosić Markdown i własne formaty danych, ale kolekcja Anki wymaga bardziej przemyślanego odtworzenia.

Wybierz SiYuan, gdy podstawowym produktem ma być baza wiedzy, a fiszki powinny być jej częścią. Jeśli chcesz bezpośredniego zamiennika Anki, Mnemosyne i Anki mają jaśniej określony zakres migracji.

## 4. Nibomo udostępnia więcej elementów systemu, które trzeba samodzielnie utrzymywać

Nibomo publikuje kod obejmujący najszerszą część produktu w tym porównaniu. Monorepo MIT zawiera aplikację webową, klientów iOS i Android, backend, usługę uwierzytelniania, synchronizację, panel administracyjny, migracje bazy danych i infrastrukturę AWS. Przyjęte tu stabilne wydanie to [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Późniejszych prac w domyślnej gałęzi nie traktuję jako funkcji już wydanych.

[Architekturę](/docs/architecture/) zaprojektowano przede wszystkim do pracy offline, ale „offline” znaczy coś nieco innego w każdym kliencie. Aplikacja webowa przechowuje lokalne źródło prawdy w IndexedDB. iOS korzysta z SQLite, a Android z Room na SQLite. Zmiany są zapisywane lokalnie i przed synchronizacją trafiają do kolejki wysyłkowej. Ten model radzi sobie z przerwanym połączeniem; nie czyni pamięci przeglądarki trwałą ani nie zwalnia z przetestowania uruchomienia aplikacji od zera na każdym urządzeniu.

Własny pakiet ZIP Nibomo służy przenoszeniu treści, a nie tworzeniu kopii konta. W v1.23.0 jego [schemat](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) zawiera treść przodu i tyłu, tagi, typ karty, metadane źródła i metadane pakietu; wskazane multimedia są dołączane osobno. Nie zawiera struktury talii, historii powtórek, stanu FSRS, ustawień obszaru roboczego ani kont.

W v1.23.0 nie ma importera APKG. Udokumentowana [migracja z Anki przez TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) odtwarza karty z wyeksportowanego tekstu i wymaga sprawdzenia przez człowieka. Szablony, stan harmonogramu, struktura talii i dołączone multimedia nie przechodzą tą drogą automatycznie. To rozsądna metoda dla prostej talii tekstowej, ale słaba dla kolekcji z licznymi własnymi modyfikacjami.

[Instrukcja własnego hostingu](/docs/self-hosting/) jest równie konkretna. Wdrożenie produkcyjne korzysta ze stosu AWS CDK z RDS, Cognito, API Gateway i Lambda, S3 i CloudFront, sekretami, alarmami i kopiami zapasowymi. Cloudflare DNS, poczta Resend i konfiguracja Sentry pozostają poza AWS. Docker Compose uruchamia lokalne środowisko programistyczne; nie jest wspieranym pakietem produkcyjnym. Administratorzy chcący mieć prywatne wersje iOS lub Android budują je i dystrybuują osobno.

Wybierz Nibomo, gdy dostęp do pełnego kodu webowego, natywnego i backendowego uzasadnia tę pracę administracyjną. Wybierz Anki lub Mnemosyne, gdy większym wyzwaniem jest zachowanie istniejącej kolekcji.

## 5. Recall ma nowoczesną formę, ale przyjrzyj się importerowi

Recall to najmłodszy z głównych polecanych projektów. Trafił na listę, ponieważ [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) zapewnia wersjonowane wydania komputerowe, instalowalną PWA, jasno opisane lokalne przechowywanie danych, FSRS, eksporty i udokumentowany projekt synchronizacji na własnej infrastrukturze.

Aplikacja komputerowa na licencji MIT używa SQLite; PWA korzysta z IndexedDB. Żadna nie wymaga konta, a projekt deklaruje domyślnie wyłączoną telemetrię. Wydania komputerowe obejmują Windows, macOS i Linux.

Importer APKG jest przydatny, ale określenie „review history” („historia powtórek”) z README obiecuje za dużo w porównaniu z implementacją w wydaniu oznaczonym tagiem. [Kod importera v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) nie odczytuje dziennika powtórek Anki. Odczytuje bieżący stan karty, odstęp między powtórkami, liczbę powtórek i przypadków zapomnienia oraz stabilność i trudność FSRS, jeśli Anki je zapisało. Dla starszych kart bez tych pól FSRS Recall szacuje je na podstawie wartości SM-2.

Konwersja treści też ma ograniczenia. Importer używa pierwszych dwóch pól notatki jako przodu i tyłu, zamiast odtwarzać typy notatek i szablony Anki. Zachowuje nazwy talii i tagi. Wypakowuje popularne formaty obrazów i aktualizuje odwołania do nich, ale pomija dźwięk i inne multimedia. Ponieważ importer jest poleceniem Tauri, bezpośrednia migracja APKG działa w wersji komputerowej, a nie w przeglądarkowej PWA.

To znacznie więcej niż odtworzenie z samego tekstu, ale nadal nie zapewnia wiernego przeniesienia kolekcji. Przed dużą migracją sprawdź luki cloze, powiązane karty z jednej notatki, dodatkowe pola, HTML/CSS, obrazy, dźwięk, terminy powtórek i powtarzające się notatki.

Recall ma dwie drogi synchronizacji. Wersja komputerowa może zapisać migawkę do folderu obsługiwanego przez Dropbox, Drive lub inne narzędzie do synchronizacji plików. Opcjonalny serwer pośredniczący używa Cloudflare Worker i zasobnika R2. Według [projektu synchronizacji z wydania oznaczonego tagiem](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) klienci szyfrują migawki za pomocą AES-GCM przed wysłaniem; pośrednik widzi szyfrogram, a nie dane kart czy klucz. Mechanizm aktualizacji stosuje optymistyczną kontrolę współbieżności i w razie konfliktu ponawia próbę jeden raz, ale nadal scala całe migawki, a nie poszczególne pola. Nie ma publicznego pośrednika finansowanego przez opiekunów projektu — wdrażasz go samodzielnie i wpisujesz jego URL.

Eksport do JSON i archiwów Recall pozwalają przenieść dane dalej. Odtwórz taki eksport w czystym profilu, zanim uznasz go za kopię zapasową.

Wybierz Recall, gdy chcesz nowoczesnej aplikacji komputerowej lub PWA stawiającej na lokalne dane i akceptujesz młody projekt oraz importer, który zachowuje przydatną migawkę zamiast całego systemu Anki.

## 6. W Essentialist łatwo odczytasz talię, ale nie cały stan nauki

Essentialist jest najprostszym rozwiązaniem w tym zestawieniu. Każda talia jest plikiem Markdown, który możesz otworzyć w edytorze tekstu, trzymać w systemie kontroli wersji albo kopiować zwykłymi narzędziami do plików. Aplikacja celowo nie wykonuje żadnych żądań sieciowych.

Najnowsze stabilne wydanie to [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Dołączono do niego wersje na Androida, macOS i Linux; użytkownicy Windows kompilują ze źródeł. [README tego wydania](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) podaje SM-2 jako algorytm powtórek.

[README domyślnej gałęzi](https://github.com/essentialist-app/essentialist/blob/main/README.md) wskazuje już FSRS, a w repozytorium pojawiały się zmiany kodu w 2026 r. To przydatna informacja o kierunku rozwoju, ale nie powód, by przypisywać FSRS plikowi binarnemu z 2025 r.

Markdown obejmuje też mniej, niż może się wydawać. Tekst kart znajduje się w widocznym pliku, a postęp w ukrytej bazie o nazwie `.<deck file>.db`. Gdy skopiujesz `sample.md` bez `.sample.md.db`, zachowasz pytania i odpowiedzi, ale stracisz stan nauki.

Nie ma wbudowanej synchronizacji urządzeń ani serwera. Możesz umieścić pliki we własnym synchronizowanym folderze, ale wtedy obsługa konfliktów i odzyskiwanie danych stają się twoim problemem.

Wybierz Essentialist, gdy najważniejsze są czytelny Markdown i praca bez sieci. To nie jest system zapewniający płynną pracę na wielu urządzeniach, a jeden widoczny plik nie stanowi kompletnej kopii zapasowej.

## Cztery aktywne projekty, które warto obserwować

Te projekty były aktywnie rozwijane w 2026 r. Pozostają poza główną szóstką, ponieważ do rekomendacji potrzeba więcej niż ciekawego kodu.

| Projekt | Co już działa lub zostało udokumentowane | Co nadal blokuje rekomendację na głównej liście |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | Kod AGPL, algorytmy FSRS/SM-2/Leitnera, wdrożenie Docker, usługa zarządzana, import CSV i eksport danych | Powstał w lipcu 2026 r.; brak wersjonowanego wydania aplikacji. Wydanie na GitHubie to pakiet audio, a nie wydanie programu |
| [Openlet](https://github.com/ChloeVPin/openlet) | Aplikacja webowa MIT z FSRS, importem CSV, zasłanianiem fragmentów obrazów i opisaną architekturą Supabase/Vercel | Brak wydania oznaczonego tagiem, a oficjalna dokumentacja nie określa jeszcze pełnego zakresu pracy offline, eksportu i odtwarzania własnego wdrożenia |
| [Prep](https://github.com/Zamua/prep-app) | Kod MIT, FSRS, wersja hostowana i opisane wdrożenie w środowisku uruchomieniowym celld, które można samodzielnie hostować | Brak wydania oznaczonego tagiem; własny hosting oznacza też utrzymanie celld i magazynu obiektowego, a nie uruchomienie samodzielnego programu do fiszek |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Aplikacja mobilna Kotlin na GPLv3, FSRS/SM-2, wydanie na Androida i import APKG z szablonami i multimediami | Powstał w 2026 r.; iOS wymaga kompilacji ze źródeł, a oficjalna dokumentacja nie opisuje ogólnej synchronizacji między telefonami |

Kilka znanych nazw nie spełnia kryteriów z prostszych powodów. [Repozytorium open source Mochi](https://github.com/mochi-cards/open-source) to zbiór integracji, a nie główna aplikacja. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) ma otwarty kod i można je samodzielnie hostować, ale oficjalne README nadal umieszcza powtórki rozłożone w czasie pod „Features coming soon” („Funkcje planowane”). [OpenCards](https://github.com/holgerbrandl/opencards) nie miało wydania od [v2.5.1 ze stycznia 2017 r.](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1), a w jego repozytorium nie zmieniano kodu od 2018 r.

Jeśli dostęp do kodu jest opcjonalny, [szersze porównanie alternatyw dla Anki](/pl/blog/best-anki-alternatives/) uwzględnia produkty odpowiadające na inne potrzeby.

## Sprawdź migrację w pięciu osobnych warstwach

„Importuje z Anki” mówi bardzo niewiele bez kolejnego zdania. Migracja może udać się w jednej warstwie i zawieść w czterech pozostałych.

| Warstwa | Co porównać | Mylący sygnał sukcesu |
| --- | --- | --- |
| Treść kart | Każde pole, znacznik luki cloze, tag, znak specjalny i powtarzająca się notatka | Łączna liczba kart jest zbliżona |
| Struktura | Typy notatek, szablony, wygenerowane karty z tej samej notatki i zagnieżdżone talie | Tekst przodu i tyłu gdzieś się pojawił |
| Multimedia | Obrazy i dźwięk zostały skopiowane, odwołania działają lokalnie, a pliki są dostępne offline | Importer rozpoznał nazwy plików |
| Stan nauki | Dziennik powtórek, stan, termin, odstęp, przypadki zapomnienia i parametry algorytmu | Zaimportowane karty są widoczne, ale po cichu zaczynają od nowa |
| Przeniesienie i odzyskanie danych | Udokumentowany eksport lub kopia zapasowa pozwala odtworzyć ten sam system gdzie indziej | Czytelny eksport tekstowy uchodzi za pełną kopię zapasową |

Przed przeniesieniem właściwej kolekcji zbuduj jedną celowo kłopotliwą talię testową. Uwzględnij dodatkowe pola, luki cloze, szablony w obie strony, zagnieżdżone talie, tagi, obrazy, dźwięk i dość historii powtórek, by było widać, czy program docelowy ją zachował.

Zachowaj nienaruszoną kopię źródłową. Po imporcie porównaj osobno liczbę notatek, kart i plików multimedialnych. Sprawdź terminy powtórek, zamiast ufać komunikatowi „zaimportowano harmonogram”. Powtarzaj offline na każdym urządzeniu, którego zamierzasz używać. Następnie wprowadź próbne, sprzeczne zmiany na dwóch urządzeniach i zobacz, co zrobi synchronizacja.

Przez kilka dni korzystaj z obu systemów. Usunięcie starej kolekcji jest ostatnim krokiem, a nie dowodem, że nowa zadziałała.

## Własny hosting jest gotowy dopiero po próbie odtworzenia

Powyższe produkty używają określenia „własny hosting” dla bardzo różnych rozwiązań:

- Anki i Mnemosyne uruchamiają **usługi synchronizacji**, a interfejsem do nauki pozostają zainstalowani klienci.
- SiYuan Docker uruchamia **aplikację przeglądarkową**, której klienci natywni nie mogą używać jako serwera synchronizacji.
- Recall uruchamia **pośrednika dla szyfrowanych migawek**, a nie samą PWA.
- Nibomo wdraża **pełny stos webowy i backendowy**, a aplikacje natywne nadal buduje się osobno.
- Essentialist **nie ma serwera**; kontrola sprowadza się do lokalnych plików.

Gdy ten zakres jest jasny, przetestuj część, którą administratorzy zwykle odkładają:

1. Utwórz karty, dołącz multimedia, wykonaj powtórki i zsynchronizuj dwóch klientów.
2. Zabezpiecz każdą bazę danych, zasobnik magazynu obiektowego, lokalny plik, sekret i wartość konfiguracji wymienioną w dokumentacji.
3. Odtwórz system na pustym koncie, komputerze lub odizolowanym wdrożeniu.
4. Porównaj liczbę kart, multimedia, historię powtórek, stan terminów, logowanie i synchronizację klientów.
5. Zaktualizuj odtworzoną kopię i przejdź kolejny cykl powtórek.

Jeśli odtworzenie nadal zależy od starego komputera, masz działającą usługę. Nie masz sprawdzonej kopii zapasowej.

## Często zadawane pytania

### Jaka jest najlepsza aplikacja do fiszek open source w 2026 roku?

Anki to najlepszy wybór domyślny dla większości uczących się. Łączy dojrzały model kolekcji, FSRS, szeroki wybór klientów i najbogatsze własne formaty kopii zapasowych oraz eksportu. Zastrzeżenie dotyczy oficjalnych wersji iOS i webowej: nie obejmuje ich otwarte repozytorium wersji komputerowej, a samodzielnie hostowany serwer zapewnia synchronizację zamiast nauki w przeglądarce.

### Jaka jest najlepsza alternatywa open source dla Anki?

Mnemosyne to najbardziej ugruntowana alternatywa skupiona na nauce; oficjalnie dokumentuje import własnych typów kart i danych o nauce z Anki. Recall wygląda nowocześniej i bezpośrednio importuje APKG na komputerze, ale konwertuje pierwsze dwa pola notatki, zachowuje tylko migawkę harmonogramu, importuje obrazy bez dźwięku i nie przenosi pełnego dziennika powtórek.

### Czy mogę hostować Anki samodzielnie?

Tak, możesz uruchomić oficjalny serwer synchronizacji Anki dla zgodnych klientów. Nie jest to jednak samodzielnie hostowany zamiennik AnkiWeb: nie ma interfejsu do nauki w przeglądarce.

### Czy open source oznacza działanie offline?

Nie. Open source opisuje licencję i dostęp do kodu. Działanie offline zależy od tego, gdzie klient przechowuje dane i jakie działania wymagają usługi. Działa to też w drugą stronę: aplikacja może przechowywać dane lokalnie bez publikowania swojego głównego kodu.

### Czy własny hosting gwarantuje możliwość przeniesienia danych?

Nie. Własny hosting daje kontrolę nad miejscem uruchomienia usługi. Możliwość przeniesienia zależy od eksportów, pełnych kopii zapasowych i rzeczywiście przetestowanego odtworzenia. Baza danych na twoim serwerze nadal może być trudna do migracji, a czytelna talia Markdown może pomijać stan powtórek zapisany obok niej.

## Moja rekomendacja

Zostań przy **Anki** lub wybierz je, chyba że któreś z jego ograniczeń powoduje rzeczywisty problem. Wybierz **Mnemosyne**, jeśli chcesz skupić się na lokalnej nauce na komputerze i skorzystać ze sprawdzonego importu z Anki. Korzystaj z **SiYuan**, gdy fiszki powinny być częścią większej bazy wiedzy. Rozważ **Nibomo**, gdy dostęp do pełnego kodu webowego, natywnego i backendowego uzasadnia utrzymanie produkcyjnego stosu AWS. Wybierz **Recall** jako nowoczesnego klienta z lokalnymi danymi, po sprawdzeniu ograniczeń konwersji. Wybierz **Essentialist**, gdy zwykły Markdown i brak dostępu do sieci znaczą więcej niż synchronizacja.

Najlepsza aplikacja do fiszek open source to nie repozytorium z najdłuższą listą funkcji. To aplikacja, której zakres dostępnego kodu, pracy offline, migracji, synchronizacji, hostingu i odzyskiwania danych odpowiada temu, czym naprawdę chcesz samodzielnie zarządzać.
