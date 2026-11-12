---
title: Importowanie fiszek do Nibomo
description: Przenieś fiszki z Quizlet, Anki lub innej aplikacji. Wybierz właściwy format i sprawdź fiszki przed większym importem.
---

Otwórz [Nibomo](https://app.nibomo.com/?locale=pl), wybierz obszar roboczy, do którego mają trafić fiszki, i przejdź do **Biblioteka > Import**. W sekcji **Z innej aplikacji** wybierz aplikację, z której korzystasz. Każda aplikacja ma własną pozycję, nawet jeśli obsługuje ten sam format co inne.

Poniższe opcje są dostępne w aplikacji webowej. Skorzystaj z niej, jeśli na iPhonie, iPadzie, Macu lub urządzeniu z Androidem brakuje menu lub odpowiedniej pozycji. Jeśli korzystasz z Nibomo jako gość, zaloguj się najpierw na swoim urządzeniu. Następnie zaloguj się w aplikacji webowej na to samo konto Nibomo i wybierz docelowy obszar roboczy.

## Wybierz źródło

| Źródło | Co przygotować | Sposób importu |
| --- | --- | --- |
| Quizlet | Skopiowany tekst z eksportu | Wklej na ekranie importu z Quizlet |
| Anki | Talia `.apkg` lub kolekcja `.colpkg` | Wybierz pliki |
| Noji | `.csv` lub `.ofc` | Wybierz pliki |
| Knowt | `.pdf` | Wybierz pliki |
| RemNote | `.apkg`, `.md` lub `.txt` | Wybierz pliki |
| Brainscape | `.csv` | Wybierz pliki |
| StudySmarter | `.csv` | Wybierz pliki |
| Cram | `.csv` | Wybierz pliki |
| Mochi | `.mochi` | Wybierz pliki |
| SuperMemo | `.xml` | Wybierz pliki |
| AlgoApp (dawniej AnkiApp) | `.zip` lub `.xml` | Wybierz pliki |
| Inna aplikacja | `.csv`, `.txt`, `.xlsx`, `.pdf`, `.json`, `.xml`, `.md`, `.docx` lub `.zip` | Wybierz pliki w sekcji **Importuj z innej aplikacji** |
| Arkusz kalkulacyjny | Skopiowane wiersze z przodem i tyłem każdej fiszki | Wklej w sekcji **Importuj z arkusza kalkulacyjnego** |
| Nibomo | Plik `flashcards.zip` wyeksportowany z Nibomo | Sprawdź podgląd w sekcji **Importuj z Nibomo** |

Poszukaj pozycji **AnkiApp**, jeśli menu pokazuje dawną nazwę AlgoApp. Anki ma osobną pozycję.

Jeśli masz starszy plik Excela w formacie `.xls`, zapisz go najpierw jako `.xlsx` lub `.csv`. Możesz też skopiować kolumny z przodem i tyłem fiszek i [wkleić je na ekranie importu z arkusza](#wklejanie-z-arkusza-kalkulacyjnego).

## Importowanie z innej aplikacji do fiszek

1. Wyeksportuj fiszki ze źródłowej aplikacji. W Quizlet otwórz swój zestaw, wybierz **Export** i skopiuj tekst. Sprawdza się tabulator między pojęciem a definicją i nowy wiersz między fiszkami. Eksport jest dostępny tylko na stronie Quizlet i tylko dla oryginalnych zestawów, które utworzyłeś samodzielnie.
2. W Nibomo przejdź do **Biblioteka > Import** i wybierz swoją aplikację. W przypadku Quizlet wklej skopiowany tekst. W pozostałych przypadkach wybierz wyeksportowane pliki. Jeśli Twojej aplikacji nie ma na liście, a eksportuje w obsługiwanym formacie, na przykład PDF, wybierz **Importuj z innej aplikacji**.
3. Kliknij **Rozpocznij import**. Nibomo otworzy nowy czat AI i wyśle polecenie importu razem z plikami lub wklejonym tekstem. Potrzebujesz połączenia z internetem. Każdy plik importowany przez AI może mieć do **30 MiB**. Jeśli jest większy, spróbuj wyeksportować mniejsze talie lub zestawy osobno.
4. Sprawdź wynik w sekcji **Biblioteka**. Czat AI może zapisywać fiszki partiami. Jeśli zatrzyma się w trakcie, sprawdź, które fiszki są już w Nibomo, i poproś o dokończenie importu przed ponownym wysłaniem całego eksportu.

### Najpierw wypróbuj import małego zestawu

Zachowaj oryginalny eksport i zacznij od jednej małej talii lub zestawu. Porównaj liczbę fiszek i sprawdź obie strony kilku z nich, tagi, obrazy oraz istotne dla Ciebie formatowanie. Jeśli chcesz najpierw zobaczyć próbkę, załącz eksport w nowym czacie AI i poproś o pokazanie kilku fiszek bez zapisywania. Wpisz własną prośbę zamiast klikać **Rozpocznij import**.

Fiszki zaimportowane przez AI zaczynają w Nibomo jako nowe. Historia i terminy powtórek pozostają w aplikacji źródłowej. To, ile z układu, formatowania i multimediów się przeniesie, zależy od zawartości eksportu i od tego, co potrafi odczytać czat AI. Sprawdź wynik, zanim zaczniesz korzystać z nowych fiszek lub usuniesz cokolwiek w aplikacji źródłowej.

## Wklejanie z arkusza kalkulacyjnego

Do prostych fiszek z przodem i tyłem użyj **Biblioteka > Import > Importuj z arkusza kalkulacyjnego**. Skopiuj dwie kolumny z arkusza, pomijając nagłówki, i wklej je na ekranie importu. Ustaw **Tabulator** między przodem a tyłem oraz **Nowy wiersz** między fiszkami. Zmień separatory, jeśli w skopiowanym tekście są inne.

Sprawdź podgląd, uzupełnij brakujące pola i wybierz tagi, jeśli chcesz je zastosować. Następnie kliknij przycisk importu, aby zapisać fiszki. Ta metoda działa bez czatu AI.

## Importowanie pliku ZIP z Nibomo

Dla wcześniej wyeksportowanego z Nibomo pliku `flashcards.zip` wybierz **Biblioteka > Import > Importuj z Nibomo**. Wskaż plik ZIP bez rozpakowywania. W podglądzie sprawdź liczbę fiszek i plików multimedialnych oraz ewentualne ostrzeżenia. Następnie potwierdź import i obejrzyj poszczególne fiszki i multimedia w sekcji **Biblioteka**. W ten sposób możesz przenieść fiszki, tagi i multimedia z pakietu. Ta metoda działa bez czatu AI.
