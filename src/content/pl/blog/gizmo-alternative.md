---
title: "Gizmo — recenzja aplikacji do fiszek (2026): limity darmowego planu, Magic Import i alternatywy"
description: "Recenzja Gizmo na podstawie oficjalnych źródeł: przerwa między importami Magic Import w darmowym planie, AI Tutor, typy fiszek, eksport, ustalenia o trybie offline i alternatywa."
date: "2026-08-03"
updated: "2026-09-01"
image: "/blog/gizmo-alternative-v2.png"
keywords:
  - "fiszki Gizmo"
  - "recenzja fiszek Gizmo"
  - "recenzja Gizmo AI"
  - "czy Gizmo jest darmowe"
  - "limit Gizmo Magic Import"
  - "alternatywa dla Gizmo"
  - "eksport z Gizmo"
---

Jeśli chcesz za darmo zaimportować do Gizmo notatki z całego tygodnia, zapamiętaj jedną liczbę: **20 minut**. Obecny limit Gizmo Magic Import oznacza 20 minut oczekiwania między importami, a nie stałą liczbę importów dziennie. Gizmo Unlimited usuwa tę przerwę.

Ta recenzja Gizmo opiera się na aktualnych oficjalnych stronach pomocy. Nie testowałem aplikacji osobiście, więc opisuję funkcje wyłącznie na podstawie jej dokumentacji i wyraźnie zaznaczam kwestie, których nie da się rozstrzygnąć.

> **Informacja od autora:** Nazywam się Kirill Markin i tworzę [Nibomo](https://nibomo.com/), alternatywę porównywaną poniżej. Gizmo ma szerszy udokumentowany zakres funkcji: więcej formatów materiałów źródłowych, siedem typów fiszek, lekcje AI Tutor, zróżnicowane quizy i mechanizmy postępu przypominające grę. Nibomo celowo ma węższy zakres.

**Weryfikacja faktów:** 1 września 2026 r.

![Ilustracja do recenzji Gizmo: Magic Import, typy fiszek i alternatywny sposób nauki](/blog/gizmo-alternative-v2.png)

## Czy Gizmo jest darmowe?

Tak, Gizmo oferuje darmowy plan. Obecne limity, które najczęściej mogą przerwać naukę, wyglądają tak:

- [Magic Import](https://help.gizmo.ai/en/articles/15647624-what-is-magic-import) wymaga od użytkowników darmowego planu 20 minut przerwy między importami. Unlimited usuwa tę przerwę.
- [AI Tutor](https://help.gizmo.ai/en/articles/15869958-how-many-ai-tutor-sessions-can-i-have-for-free) pozwala na pięć darmowych sesji na dzień kalendarzowy. Licznik zeruje się codziennie, a Unlimited usuwa dzienny limit sesji.
- [Hearts](https://help.gizmo.ai/en/articles/15623061-what-are-hearts), czyli serca, są używane w trybie Memorise: zaczynasz z 15 sercami, tracisz jedno po błędnej odpowiedzi, a gdy się skończą, musisz odczekać 10 minut, żeby wrócić do quizu. Gizmo podaje, że przy ustawieniu pytań wyłącznie na Flashcards nie zużywasz Hearts.
- [Hints](https://help.gizmo.ai/en/articles/15504721-what-are-hints), czyli podpowiedzi, odsłaniają pierwszą literę odpowiedzi albo usuwają błędną opcję z pytania wielokrotnego wyboru. W darmowym planie kupujesz je za Coins zdobywane w quizach; Unlimited obejmuje nieograniczone Hints i Hearts.

Ile importów Magic Import daje więc darmowe Gizmo? Oficjalna odpowiedź określa czas oczekiwania, a nie liczbę. Dokumentacja gwarantuje 20-minutową przerwę; nie gwarantuje konkretnej liczby udanych importów dziennie.

## Jak działa nauka z fiszkami w Gizmo

Punktem wyjścia w Gizmo są materiały, które już masz. Magic Import zamienia je w fiszki, Memorise sprawdza ich znajomość w quizach, a AI Tutor może uczyć na podstawie materiału źródłowego. Według [oficjalnego opisu produktu](https://help.gizmo.ai/en/articles/14472668-how-does-gizmo-work) XP, Levels, Leagues i Streaks dodają do tego cyklu nauki mechanizmy postępu.

Osobny poradnik Magic Import wymienia dziewięć źródeł, z których można tworzyć fiszki:

- PDF;
- nagranie wykładu lub lekcji wykonane w aplikacji;
- wklejone notatki;
- zdjęcia notatek lub tablicy;
- PowerPoint;
- Quizlet;
- Anki;
- arkusz kalkulacyjny lub CSV;
- adres strony internetowej.

Gizmo generuje fiszki i wyróżnia słowa, o które zamierza pytać. Jego własny poradnik zaleca osobom uczącym się przejrzenie talii i dodanie tego, co import pominął. Traktowałbym to jako część pracy, a nie drobny dopisek: porównaj fiszki ze źródłem, usuń słabe pytania i popraw błędy, zanim zaczniesz regularne powtórki. Artykuł [Jak poprawiać fiszki generowane przez AI](/blog/how-to-fix-ai-flashcards/) zawiera praktyczną listę rzeczy do sprawdzenia.

Do lekcji AI Tutor też można importować materiały. [Oficjalny poradnik importowania materiałów do lekcji](https://help.gizmo.ai/en/articles/15935404-how-do-i-use-magic-import-to-start-an-ai-tutor-lesson) wymienia PDF, PowerPoint, YouTube, notatki, zdjęcia, nagrania wykładów, zestawy Quizlet i istniejącą talię Gizmo. Tutor następnie uczy na podstawie tych materiałów i po drodze sprawdza wiedzę pytaniami.

Te dwie udokumentowane listy źródeł nie są identyczne. Anki, arkusze i strony internetowe pojawiają się w poradniku tworzenia fiszek; YouTube i istniejące talie Gizmo — w poradniku lekcji Tutor. Sprawdź opcje importu dla funkcji, której rzeczywiście potrzebujesz, zamiast zakładać, że oba menu przyjmują te same materiały.

## Gizmo ma siedem typów fiszek

Aktualna [dokumentacja typów fiszek](https://help.gizmo.ai/en/articles/16527223-what-types-of-flashcards-can-i-make) Gizmo wymienia siedem formatów:

| Typ fiszki | Co sprawdza | Jak można ją utworzyć |
| --- | --- | --- |
| **Q&A** | Pytanie i odpowiedź z tekstem lub LaTeX-em | Ręcznie lub przez Magic Import |
| **Multi-select** | Pytanie z co najmniej jedną prawidłową odpowiedzią | Ręcznie lub przez Magic Import |
| **Fill the blanks** | Uzupełnianie brakujących słów w tekście | Ręcznie lub przez Magic Import |
| **Match pairs** | Pary, których elementy Gizmo miesza, a ty ponownie je łączysz | Ręcznie lub przez Magic Import |
| **Order items** | Elementy, które Gizmo miesza, a ty układasz je w odpowiedniej kolejności | Ręcznie lub przez Magic Import |
| **True or False** | Stwierdzenie, które oceniasz jako prawdziwe lub fałszywe | Ręcznie lub przez Magic Import |
| **Image question** | Odsłanianie etykiet na schemacie lub zdjęciu | Ręcznie |

W dokumentacji występuje jedna sprzeczność, którą trzeba zaznaczyć. Strona o typach fiszek podaje, że Q&A może zawierać obrazy na awersie i rewersie. Z kolei [poradnik zarządzania fiszkami](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards) Gizmo mówi, że zdjęcia i obrazy można dodawać tylko na awersie. Jeśli obrazy na rewersie są dla ciebie ważne, sprawdź aktualny edytor, zanim zaczniesz budować talię. Te dwie oficjalne strony nie pozwalają udzielić pewniejszej odpowiedzi.

Gizmo zaznacza też, że ustawienia quizu wpływają na wyświetlane style pytań. Zapisany format fiszki i sposób, w jaki quiz sprawdza jej treść, są powiązane, ale nie są tym samym.

## Nauka nie kończy się na fiszkach

Memorise jest głównym trybem powtarzania fiszek. Gizmo wyróżnia kluczowe słowa, pyta o nie w quizach i wykorzystuje powtórki rozłożone w czasie, żeby ponownie pokazywać fiszki w kolejnych terminach. Magic Import wybiera wyróżnienia automatycznie, ale możesz je zmieniać.

AI Tutor służy do czegoś innego. Może omawiać materiał krok po kroku, generować notatki i zadawać pytania na podstawie źródła. Przydaje się to, gdy masz wykład lub dokument, ale jeszcze nie wiesz, co warto zamienić w fiszkę do regularnych powtórek.

W obu trybach Gizmo nadaje postępom formę gry. Quizy pozwalają zdobywać XP i robić postępy w Levels, Leagues oraz Streaks, a Hearts, Hints i Coins wpływają na przebieg darmowych sesji quizowych. Jeśli te mechanizmy pomagają ci wracać codziennie do nauki, mają rzeczywiste znaczenie przy wyborze produktu — nie są tylko ozdobą.

Krótkie pytanie sprawdzające pamięć i wieloetapowe zadanie praktyczne służą jednak różnym celom.

## Cztery ograniczenia do sprawdzenia, zanim przeniesiesz kurs do Gizmo

### Wygenerowane fiszki nadal trzeba sprawdzić

Gizmo wprost zaleca przegląd talii po użyciu Magic Import i sugeruje dzielenie dużych dokumentów na mniejsze części. Kolejność jest prosta: zaimportuj jeden wyraźnie wydzielony fragment, porównaj wynik ze źródłem, popraw lub usuń słabe fiszki i dopiero potem zacznij powtórki. Generowanie oszczędza pisanie, ale treść nadal trzeba sprawdzić i poprawić.

### Łatwiej edytować poza trybem Memorise

[Poradnik zarządzania fiszkami](https://help.gizmo.ai/en/articles/13761411-how-do-i-edit-or-manage-my-cards) Gizmo podaje, że można edytować tekst awersu i rewersu, dodawać formatowanie i obrazy na awersie, zmieniać warianty odpowiedzi w pytaniach wielokrotnego wyboru, przenosić fiszki i je usuwać.

Ograniczenie pojawia się w trybie Memorise: możesz tam usunąć fiszkę, ale obecnie nie możesz jej edytować w trakcie quizu. Jeśli podczas nauki zauważysz błędną odpowiedź, musisz wyjść z quizu, żeby ją poprawić.

### Drukowanie fiszek i zapis do PDF

Otwórz menu talii, wybierz **Print**, a w oknie drukowania przeglądarki wybierz **Save as PDF**. Gizmo opisuje [eksport do PDF](https://help.gizmo.ai/en/articles/18228622-how-do-i-export-print-or-download-my-cards-as-a-pdf) również dla talii utworzonych przez Gizmo. Zachowaj oryginalną talię, jeśli potrzebujesz interaktywnych pytań i historii powtórek.

### Dokumentacja nie wystarcza, by obiecać działanie offline

Nie znalazłem oficjalnego artykułu pomocy Gizmo, który gwarantowałby tryb offline, zapisywanie zmian najpierw lokalnie lub konkretny sposób synchronizacji po odzyskaniu połączenia. Strony produktu i wyniki wyszukiwania w centrum pomocy sprawdzone na potrzeby tej recenzji nie określają tych warunków.

To **nie** dowodzi, że Gizmo nie może działać offline. Oznacza, że przejrzane tu oficjalne źródła nie wystarczają, aby to zagwarantować. Jeśli nauka offline jest ważna, przetestuj konkretną aplikację i urządzenie w trybie samolotowym: zamknij i ponownie otwórz aplikację, powtórz fiszkę, wprowadź zmianę, połącz się z internetem i sprawdź, czy zarówno zmiana, jak i historia powtórek zostały zachowane.

To rozróżnienie ma znaczenie, bo „załadowany ekran nadal reaguje” i „moja historia powtórek jest bezpiecznie zapisana i zsynchronizuje się później” to dwie różne deklaracje. [Poradnik o aplikacjach do fiszek offline](/blog/best-offline-flashcards-app/) stosuje ten bardziej wymagający test do kilku produktów.

## Gizmo i Nibomo w skrócie

| Kryterium wyboru | Gizmo | Nibomo |
| --- | --- | --- |
| Główny punkt wyjścia | Fiszki tworzone ręcznie lub Magic Import z różnych materiałów do nauki | Ręczne lub wspomagane przez AI tworzenie konkretnych fiszek z awersem i rewersem |
| Formaty fiszek | Q&A, Multi-select, Fill the blanks, Match pairs, Order items, True or False, Image question | Fiszki z awersem i rewersem |
| Nauka poza powtarzaniem fiszek | Lekcje AI Tutor, notatki i pytania oparte na materiale źródłowym | Tworzenie fiszek z pomocą AI; aktualne strony produktu nie opisują trybu lekcji Tutor |
| Sposób powtarzania | Memorise, powtórki rozłożone w czasie i zróżnicowane style pytań | Powtórki rozłożone w czasie z FSRS |
| Mechanizmy motywacyjne | XP, Levels, Leagues, Streaks, Hearts, Hints i Coins | Aktualne strony produktu nie opisują porównywalnych mechanizmów gry |
| Potwierdzenie działania offline | W sprawdzonej dokumentacji nie znaleziono oficjalnej gwarancji działania offline | Nauka offline na urządzeniach mobilnych i automatyczna synchronizacja są udokumentowanymi funkcjami |
| Możliwość wyeksportowania danych | Drukowanie talii lub zapis do PDF | Eksport umożliwiający przenoszenie danych obejmuje fiszki, tagi i powiązane multimedia |
| Kontrola nad wdrożeniem | Sprawdzone oficjalne strony nie deklarują możliwości samodzielnego hostowania | Otwarty kod źródłowy i możliwość samodzielnego hostowania |

Nibomo jest praktyczną alternatywą dla Gizmo tylko w węższym zakresie pokazanym w tej tabeli. Aktualna [strona funkcji](/pl/features/) opisuje FSRS, tworzenie fiszek z pomocą AI, naukę offline na urządzeniach mobilnych i synchronizację, eksport umożliwiający przenoszenie danych oraz samodzielne hostowanie.

## Kiedy Nibomo lepiej pasuje do twoich potrzeb

Wybierz Nibomo, jeśli chcesz zachować sprawdzoną fiszkę z awersem i rewersem. Możesz utworzyć ją ręcznie albo poprosić AI o pomoc w napisaniu i poprawieniu treści, a następnie zdecydować, co zapisać. Powtórkami zarządza FSRS; artykuł [FSRS a SM-2](/blog/fsrs-vs-sm-2/) dokładniej wyjaśnia ten model planowania.

Deklaracje dotyczące trybu offline i eksportu danych są tu bardziej jednoznaczne. Nibomo dokumentuje naukę offline na urządzeniach mobilnych z automatyczną synchronizacją, a jego [poradnik na początek](/pl/docs/getting-started/) wskazuje, że klient iOS używa lokalnej bazy SQLite i synchronizacji zaprojektowanej z myślą o pracy offline. Eksport obejmuje fiszki, tagi i powiązane multimedia oraz umożliwia przenoszenie danych między instalacją hostowaną a instalacją na własnym serwerze.

Gizmo sprawdzi się lepiej, jeśli korzystasz z interaktywnych typów pytań, lekcji Tutor lub nagród.

## Czy można przenieść się z Gizmo do innej aplikacji?

Użyj PDF-u jako materiału źródłowego do nowych fiszek. W aplikacji webowej Nibomo wybierz **Biblioteka > Import > Importuj z innej aplikacji** i wskaż plik PDF. Trafi do czatu AI. W tym przeglądzie nie testowałem przenoszenia PDF-u z Gizmo. Porównaj wynik z oryginałem. Zobacz [instrukcję importowania](/docs/import-flashcards/).

Pytania zależne od interaktywnych formatów Gizmo odtwórz w razie potrzeby ręcznie.

1. Miej pod ręką oryginalny wykład, notatki, slajdy lub inny materiał źródłowy.
2. Odtwórz tylko te fiszki, które nadal są poprawne i przydatne.
3. Przeredaguj niejasne pytania zamiast kopiować każdą wygenerowaną fiszkę.
4. Załóż, że wyróżnienia Gizmo, kontekst Tutor, historia planowania powtórek, XP i pozostałe postępy zostaną w Gizmo.

Inną opcją jest korzystanie z obu aplikacji. Gizmo może pomóc rozpracować wykład lub prezentację i zapewnić różnorodne ćwiczenia. Nibomo może przechowywać mniejszy zestaw sprawdzonych fiszek z awersem i rewersem do powtórek z FSRS.

## Który sposób nauki pasuje do ciebie?

Wybierz Gizmo, jeśli zaczynasz od nieuporządkowanych materiałów i chcesz, żeby aplikacja wstępnie przygotowała je do nauki. Jego udokumentowane mocne strony to różnorodność źródeł, siedem typów fiszek, nauka prowadzona przez Tutor, zróżnicowane quizy i mechanizmy postępu.

Wybierz Nibomo, jeśli już wiesz, co warto utrwalić na fiszce z awersem i rewersem, a FSRS, udokumentowana nauka offline na urządzeniach mobilnych, eksport lub samodzielne hostowanie są dla ciebie ważniejsze niż różnorodność quizów i nagrody.

Przydatna recenzja Gizmo AI powinna porównywać miejsce AI w nauce, a nie samą jego obecność. Oba produkty korzystają z AI. Gizmo zamienia za jego pomocą obszerne materiały w rozbudowane środowisko nauki. Nibomo używa AI w węższym procesie pracy z fiszkami, w którym to ty wybierasz, co zostanie zapisane i objęte harmonogramem powtórek.

Jeśli ten węższy zakres jest bliższy twoim potrzebom, zobacz [funkcje Nibomo](/pl/features/) lub skorzystaj z [poradnika na początek](/pl/docs/getting-started/).
