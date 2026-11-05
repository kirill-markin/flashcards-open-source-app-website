---
title: "Doppelte Karten in Anki finden und die richtige Kopie behalten"
description: "Finde doppelte Karten in Anki, vergleiche ihre Notizen und entscheide, welche du behältst. Mit einem Übungsbeispiel und einem Abgleich des Wiederholungsverlaufs."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "doppelte Karten in Anki"
  - "Duplikate in Anki finden"
  - "doppelte Anki-Notizen löschen"
  - "doppelte Notizen in Anki"
  - "Wiederholungsverlauf in Anki"
---

Du erkennst eine Frage aus einer früheren Wiederholung, doch Anki zeigt sie als neue Karte an. Vielleicht kam beim Import eine Kopie dazu. Vielleicht hat Anki aus derselben Notiz eine zweite Frage erzeugt. Das macht beim Löschen einen Unterschied. Über eine einzelne Zeile in der Kartenverwaltung kannst du alle Karten der zugehörigen Notiz löschen, auch die Karte mit der Abfragerichtung, die du behalten wolltest.

Wenn du **doppelte Karten in Anki** aufräumen willst, klär zuerst, warum sie mehrfach auftauchen. Bei getrennten Notizen findest du mögliche Duplikate über **Notes → Find Duplicates**. Übereinstimmungen im ausgewählten Feld zeigen dir, welche Notizen du prüfen solltest. Vergleiche den Inhalt der Notizen und den Verlauf jeder Karte. Entscheide dann für jede Treffergruppe, welche Notiz du behalten willst.

Die Anleitung für Anki Desktop beruht auf der offiziellen Dokumentation und dem veröffentlichten Quellcode, geprüft am 4. Oktober 2026. Das fiktive Beispiel zeigt, welches Ergebnis du beim Aufräumen erwarten kannst.

![Ein Mitglied eines Schachvereins vergleicht einen zusätzlichen hellen Turm mit zwei abgenutzten Türmen auf einem Schachbrett aus Holz](/blog/anki-duplicate-cards.png)

## Finde zuerst heraus, was sich wiederholt

Eine Notiz enthält Felder wie Vorderseite und Rückseite. Anki erzeugt daraus anhand von Vorlagen die Karten. Bei einer Vokabel kannst du so in einer Richtung die Bedeutung erkennen und in der anderen das Wort aus dem Gedächtnis abrufen. Solche Karten aus derselben Notiz heißen Geschwisterkarten. Anki plant die Wiederholungen für jede Karte einzeln. Mehr dazu steht in der [Anki-Dokumentation zu Notizen und Feldern](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields).

Öffne die Kartenverwaltung (**Browse**), wechsle in den Modus **Cards** und ruf für jede verdächtige Zeile **Cards → Info** auf. Vergleiche die Notiz-IDs. Gleiche IDs bedeuten, dass die Karten zu einer Notiz gehören. Verschiedene IDs stehen für getrennte Notizen. Ersetze in `nid:123` die Zahl `123` durch die tatsächliche ID und suche danach. So siehst du die Karten der Notiz über alle Stapel hinweg. Die Suchsyntax steht in der [Anki-Dokumentation zu Objekt-IDs](https://docs.ankiweb.net/searching.html#object-ids).

| Was du siehst | Wahrscheinliche Erklärung | Nächster Schritt |
| --- | --- | --- |
| Dieselbe Notiz, entgegengesetzte Abfragerichtungen | Beabsichtigte Geschwisterkarten | Prüfe, ob beide Fragen sinnvoll sind |
| Dieselbe Notiz, identisch angezeigte Fragen | Möglicherweise doppelte Kartenvorlagen | Vergleiche die Vorlagen und ihre Vorschau |
| Verschiedene Notizen, scheinbar identische Fragen | Mögliche doppelte Notizen | Vergleiche die vollständigen Notizen, bevor du dich für eine entscheidest |

Wie die beiden Abfragerichtungen zusammenhängen, erklärt die [Anleitung zu umgekehrten Karten (auf Englisch)](/blog/anki-reverse-cards/). Willst du nur eine Richtung pausieren, kannst du die entsprechende Karte aussetzen. Sie bleibt dann in der Sammlung. Mehr dazu steht in der [Anleitung zum Aussetzen von Karten (auf Englisch)](/blog/anki-bury-vs-suspend/).

Bei identischen Vorlagen hilft die [Anki-Hilfe zu mehrfach angezeigten Karten](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html). Wenn du eine Vorlage entfernst, betrifft das alle Notizen dieses Typs, auch in anderen Stapeln. Prüfe die Auswirkungen auf den ganzen Notiztyp, bevor du eine Vorlage wegen einer einzelnen doppelten Frage löschst.

## Suche doppelte Notizen im passenden Bereich

Öffne **Notes → Find Duplicates** und wähle das Feld, das du vergleichen willst, etwa **Front** für die Vorderseite. Standardmäßig durchsucht Anki alle Notiztypen, die dieses Feld enthalten. Grenze die Suche über **Optional filter** ein und klick auf **Search**. Die Optionen stehen in der [Anki-Dokumentation zur Duplikatsuche](https://docs.ankiweb.net/browsing.html#finding-duplicates).

So sieht der Filter für einen Stapel namens `Cleanup practice` aus.

```text
deck:"Cleanup practice"
```

Die Stapelsuche schließt Unterstapel ein. Entferne den Filter, wenn Kopien in verschiedenen Stapeln liegen könnten und du die ganze Sammlung durchsuchen willst. Auch wenn die Suche in einem Stapel leer bleibt, kann anderswo noch eine Kopie liegen. Details findest du in der [Anki-Dokumentation zur Stapelsuche](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes).

Klick auf eine Treffergruppe, um ihre Notizen anzusehen. **Tag Duplicates** versieht alle passenden Notizen mit dem Schlagwort `duplicate`, auch die, die du behalten willst. Das zeigt der [veröffentlichte Quellcode der Funktion](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py). **Lösch die Treffer für `tag:duplicate` keinesfalls gesammelt.** Nutze das Schlagwort, um die Kandidaten zu finden, und wähle dann einzeln aus, welche Notizen du löschen willst.

Die Suche vergleicht den Inhalt des ausgewählten Felds. Ob zwei Fragen dasselbe Wissen abfragen, musst du selbst beurteilen. Anders formulierte Fragen findest du womöglich erst, wenn du gezielt danach suchst. Identische Fragen können wiederum zu verschiedenen Sprachen oder Kursen gehören.

## Drei Fälle zum Durchspielen auf Papier

Stell dir sechs Notizen im Stapel `Cleanup practice` vor. Der Stapel hat keine Unterstapel. A und B nutzen den Notiztyp **Basic (and reversed card)** mit unveränderten Vorlagen, der je zwei Karten erzeugt. C bis F nutzen **Basic** und erzeugen je eine Karte. Alle acht Karten liegen in diesem Stapel. Die Buchstaben dienen nur dem Beispiel. Echte Notiz- und Karten-IDs in Anki sind Zahlen.

| Notizen | Vorderseite → Rückseite | Fiktiver Lernstand | Entscheidung |
| --- | --- | --- | --- |
| A und B | `le vélo` → `bicycle` | Bei A wurde die Karte zum Erkennen 12-mal wiederholt, die zum Abrufen 3-mal. Beide Karten von B sind neu. | A behalten und zuerst prüfen, ob du B löschen kannst |
| C und D | `Chemical symbol for silver?` → `Ag` | C hat 20 Wiederholungen, D hat 6. | Beide Verläufe vergleichen und entscheiden, mit welcher Karte du weiterlernst |
| E und F | E mit `bank` → `financial institution`, F mit `bank` → `side of a river` | Zwei verschiedene Bedeutungen | Beide behalten und die Fragen durch Kontext eindeutiger machen |

Die Suche nach Duplikaten im Feld **Front** kann alle drei Paare als Treffer anzeigen. Nur beim ersten Paar fällt die Entscheidung leicht. Bevor du B als überflüssig einstufst, vergleiche **jedes Feld**, die Medien, die Schlagwörter und den Notiztyp. Sieh dir auch in der Vorschau an, welche Abfragerichtungen die Notizen erzeugen. Vielleicht enthält B eine Tonaufnahme zur Aussprache, die A fehlt, oder erzeugt eine Frage, die bei A fehlt.

Wenn nützliche Inhalte zum selben Lernziel gehören, übernimm sie gezielt in die Notiz, die du behältst. Sieh dir danach die Vorschau an. Übernimm auch nützliche Schlagwörter aus der anderen Notiz. Wenn du künftig einen anderen Sachverhalt abfragen willst, leg dafür eine neue Frage mit eigenem Lernverlauf an.

Bei C und D ist die Zahl der Wiederholungen ein Anhaltspunkt. Sieh dir bei beiden Karten an, wann du sie wiederholt und wie du sie bewertet hast. Prüfe auch das aktuelle Intervall und die Fälligkeit. Mehr Wiederholungen können auch bedeuten, dass du eine Karte öfter neu lernen musstest. Prüfe, ob Frage und Antwort sinnvoll sind, und entscheide dann, mit welcher Karte du weiterlernen möchtest. Widersprechen sich die Antworten, prüfe zuerst deine Lernquelle. Welche Antwort stimmt, lässt sich aus der Zahl der Wiederholungen nicht ableiten.

Wenn du C behältst und D löschst, **führt Anki die Verläufe nicht zusammen**. Karte C behält ihren eigenen Lernstand. In der Karteninfo zeigt Anki den Verlauf für jede Karte einzeln an. Die Einträge im Wiederholungsverlauf gelöschter Notizen bleiben in der Statistik der gesamten Sammlung sichtbar. Aus der Statistik des jeweiligen Stapels verschwinden sie, und Anki überträgt sie auch nicht auf Karte C. Siehe [Ankis Karteninfo](https://docs.ankiweb.net/stats.html#card-info) und die [Erklärung zur Statistik gelöschter Notizen](https://docs.ankiweb.net/stats.html#more).

Wenn du noch unsicher bist, verschieb das Löschen. Schreib auf, was du prüfen musst, und setz die betreffenden Karten bei Bedarf vorübergehend aus.

## Lösch eine geprüfte Kopie und kontrolliere das Ergebnis

Bevor du echte Lernkarten löschst, synchronisiere zuerst deine anderen Geräte, falls dort noch Änderungen ausstehen. Synchronisiere anschließend Anki Desktop, damit auch die Sammlung dort auf dem aktuellen Stand ist. Den Ablauf beschreibt das [Anki-Handbuch zur Synchronisierung](https://docs.ankiweb.net/syncing.html). Speichere über **File → Export** ein **Anki Collection Package (`.colpkg`)** und aktiviere **Include Media**, um die Medien einzuschließen. Das Paket enthält alle Stapel mit ihrem Lernstand und Wiederholungsverlauf. Bewahre die Datei sicher auf. Beim Import ersetzt die gespeicherte Sammlung die aktuellen Karten im geöffneten Profil vollständig. Mehr dazu steht in der [Anki-Dokumentation zum Sammlungsexport](https://docs.ankiweb.net/exporting.html#collection-colpkg).

Wenn du das Löschen vorher ausprobieren möchtest, leg über **File → Switch Profile** ein eigenes Profil an und importiere die Sicherung dort. Verbinde das Testprofil dabei nicht mit AnkiWeb. Jedes Profil hat eine eigene Sammlung. Wenn du beide Profile mit demselben Konto verbindest, kann die eine Sammlung die andere überschreiben. Mehr dazu findest du in der [Anki-Dokumentation zu Profilen](https://docs.ankiweb.net/profiles.html) und im [Leitfaden zu APKG und COLPKG (auf Englisch)](/blog/anki-apkg-vs-colpkg/).

Im Beispiel heißt die Karte zum Erkennen aus Notiz A kurz A1 und die zum aktiven Abrufen A2. Die entsprechenden Karten aus Notiz B heißen B1 und B2. Notiere unter **Cards → Info** die beiden tatsächlichen Karten-IDs von A, die Fälligkeiten, Intervalle und gut erkennbare Einträge im Wiederholungsverlauf. Halte auch die Notiz-ID von B fest. Mach den Vorher-Nachher-Vergleich in derselben Sitzung, ohne eine der Karten von A oder B zu wiederholen oder neu zu planen.

So löschst du doppelte Anki-Notizen einzeln.

1. Ersetze die Suche in der Kartenverwaltung durch eine `nid:`-Suche mit der tatsächlichen ID von B. Prüfe im Modus **Cards** alle Treffer und sieh dir beide Abfragerichtungen in der Vorschau an. Lass bei echten Notizen den Stapelfilter weg, damit du auch Geschwisterkarten in anderen Stapeln findest.
2. Wechsle in den Modus **Notes**. Prüfe, ob die unerwünschte Notiz B der einzige Treffer ist. Wähle nur diese Zeile aus und ruf **Notes → Delete** auf. Der [Löschbefehl](https://docs.ankiweb.net/browsing.html#notes) entfernt die ausgewählte Notiz mit all ihren Karten, auch wenn du ihn für eine einzelne Zeile im Modus **Cards** aufrufst.
3. Suche erneut nach der Notiz-ID von B und prüfe, ob die Suche leer bleibt. Gib nach `cid:` die beiden notierten Karten-IDs von A mit einem Komma dazwischen ein. Vergleiche dann die Karteninfos mit deinen Aufzeichnungen.
4. Suche nach `deck:"Cleanup practice"` und vergleiche die Anzahl der Zeilen in **Notes** und **Cards**. Prüfe die verbleibenden Notizen anhand der Tabelle.

So sieht der erwartete Stand aus, wenn du nur B löschst.

| Kontrolle | Vorher | Erwarteter Stand danach |
| --- | --- | --- |
| Gesamter Beispielstapel | 6 Notizen / 8 Karten | 5 Notizen / 6 Karten |
| Karten zu `le vélo` | A1, A2, B1, B2 | Nur A1 und A2 |
| Karten-IDs, Fälligkeiten, Intervalle und Verlauf von A | Deine aufgezeichneten Werte | Dieselben Karten mit denselben Fälligkeiten, Intervallen und Verlaufseinträgen |
| Suche nach der Notiz-ID von B | Beide Karten von B | Keine Treffer |
| Notizen zu Silber und `bank` | C, D, E, F | Dieselben vier Notizen bleiben erhalten |

Hier fallen mit einer Notiz zwei Karten weg. Würdest du A löschen, kämen dieselben Zahlen heraus, obwohl dann die bereits gelernten Karten weg wären. Prüfe daher auch die IDs. Verzichte beim Aufräumen darauf, den Lernstand der Karten zurückzusetzen oder ihre Wiederholungen neu zu planen.

Eine Grafik für die gesamte Sammlung kann weiterhin die Wiederholungen gelöschter Karten enthalten. Prüfe den Lernfortschritt daher anhand der ID und der Karteninfo der Karte, die du behältst.

Wenn das Ergebnis für diese Gruppe mit deinen Aufzeichnungen übereinstimmt, nimm dir die nächste Gruppe vor und entscheide erneut, welche Notiz du behältst. Hast du in einem Testprofil geübt, wiederhol zuerst die geprüften Schritte in deinem regulären Profil. Kontrolliere die Sammlung dort und synchronisiere Anki Desktop. Synchronisiere danach deine anderen Geräte, bevor du auf ihnen weiterlernst. Sind die Kopien beim Import entstanden, hilft dir vor dem nächsten Import die [Anleitung zum Aktualisieren bestehender Notizen per CSV (auf Englisch)](/blog/anki-csv-update-existing-notes/). Hast du Notizen kopiert, um denselben Lernstoff mehreren Themen zuzuordnen, kannst du die Themen mit Schlagwörtern abbilden und mit einem einzigen Lernverlauf weiterarbeiten. Mehr dazu steht im [Vergleich von Schlagwörtern und Stapeln (auf Englisch)](/blog/anki-tags-vs-decks/).
