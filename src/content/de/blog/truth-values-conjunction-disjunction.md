---
title: "Wahrheitswerte von Konjunktion und Disjunktion: Tabelle und Beispiele"
description: "Bestimme die Wahrheitswerte von Konjunktion, Disjunktion und Negation: mit Wahrheitstabelle, einem Beispiel zur Zahl 4, Übungen mit Lösungen und Lernkarten."
date: "2026-09-17"
image: "/blog/truth-values-conjunction-disjunction.png"
keywords:
  - "Wahrheitswert einer Konjunktion"
  - "Disjunktion"
  - "Wahrheitstabelle"
  - "Negation einer Aussage"
  - "Konjunktion und Disjunktion in der Logik"
---

„Die Zahl 4 ist gerade und größer als 10“ ist eine falsche Aussage, obwohl ihr erster Teil wahr ist. **Eine Konjunktion ist nur dann wahr, wenn beide Teilaussagen wahr sind.** Ersetze im selben Beispiel „und“ durch „oder“, und die Aussage wird wahr: Beim einschließenden Oder reicht mindestens eine wahre Teilaussage. Die Zahlen bleiben gleich, aber die Verknüpfung ändert das Ergebnis.

Um solche Aufgaben zu lösen, bestimmst du zuerst den Wahrheitswert jeder Teilaussage. Danach wendest du die Regel für die Verknüpfung an. Dass eine Teilaussage wahr ist, reicht allein noch nicht aus, um den Wahrheitswert der gesamten Aussage zu bestimmen.

![Nahaufnahme einer alten Brotdose mit zwei Verschlüssen: Einer ist offen, der andere noch geschlossen. Die Dose lässt sich erst öffnen, wenn beide offen sind.](/blog/truth-values-conjunction-disjunction.png)

## Beginne mit den beiden einfachen Aussagen

Eine logische Aussage ist hier ein Aussagesatz, der entweder wahr oder falsch ist. „Die Zahl 4 ist gerade“ ist zum Beispiel wahr, denn 4 lässt sich ohne Rest durch 2 teilen. „Die Zahl 4 ist größer als 10“ ist dagegen falsch.

Nennen wir die erste Aussage `p` und die zweite `q`. Diese Symbole kürzen die beiden Sätze ab, ohne ihre Bedeutung zu verändern. Wir schreiben den Wahrheitswert jeder Aussage neben ihr Symbol:

- `p`: Die Zahl 4 ist gerade — wahr.
- `q`: Die Zahl 4 ist größer als 10 — falsch.

Achte darauf, ob die Aufgabe eine Variable enthält. Bei „Die Zahl `x` ist größer als 10“ lässt sich erst entscheiden, ob der Satz wahr oder falsch ist, wenn du den Wert von `x` kennst oder genügend Angaben dazu hast. In unseren Beispielen verwenden wir konkrete Zahlen, damit die logische Verknüpfung im Mittelpunkt steht.

## Die Wahrheitstabelle für Konjunktion, Disjunktion und Negation

Die Konjunktion mit dem Symbol `∧` bedeutet „und“: Beide Aussagen müssen wahr sein. Die einschließende Disjunktion mit dem Symbol `∨` bedeutet „oder“: Mindestens eine der beiden Aussagen muss wahr sein; sie können auch beide wahr sein. Die Negation mit dem Symbol `¬` kehrt den Wahrheitswert einer Aussage um. Diese Regeln erklärt die [OpenStax-Lektion zum Erstellen von Wahrheitstabellen](https://openstax.org/books/contemporary-mathematics/pages/2-3-constructing-truth-tables).

| `p` | `q` | Konjunktion `p ∧ q` | Disjunktion `p ∨ q` | Negation `¬p` |
| --- | --- | --- | --- | --- |
| wahr | wahr | wahr | wahr | falsch |
| wahr | falsch | falsch | wahr | falsch |
| falsch | wahr | falsch | wahr | wahr |
| falsch | falsch | falsch | falsch | wahr |

Lies die Tabelle zeilenweise. Wähle zuerst die Zeile, die zu den Wahrheitswerten von `p` und `q` passt. Gehe dann zur Spalte der gesuchten Verknüpfung. Die letzte Spalte hängt nur von `p` ab. Der Wahrheitswert von `¬p` bleibt deshalb gleich, wenn sich nur `q` ändert.

Als Merkhilfe: Die Konjunktion ist nur in einem Fall wahr, die einschließende Disjunktion nur in einem Fall falsch. Wenn du weißt, wann eine Verknüpfung wahr ist, musst du nicht alle vier Fälle einzeln auswendig lernen.

## Das Beispiel mit der Zahl 4 Schritt für Schritt lösen

Gesucht ist der Wahrheitswert der Aussage: „Die Zahl 4 ist gerade und größer als 10“.

1. Zerlege den Satz am „und“: „4 ist gerade“ und „4 ist größer als 10“.
2. Beurteile jede Teilaussage: Die erste ist wahr, die zweite falsch.
3. Bestimme die Verknüpfung: „und“ steht für die Konjunktion `p ∧ q`.
4. Wende die Regel an: Eine Konjunktion aus wahr und falsch ergibt falsch, weil nicht beide Bedingungen erfüllt sind.

Die vollständige Antwort lautet: **Die Aussage ist falsch, denn 4 ist nicht größer als 10, und bei einer Konjunktion müssen beide Teilaussagen wahr sein.** Schreibe die Begründung dazu. So wird deutlich, an welcher Teilaussage die Konjunktion scheitert.

Verwende jetzt dieselben Teilaussagen mit anderen Verknüpfungen:

| Aussage | Wahrheitswert | Begründung |
| --- | --- | --- |
| 4 ist gerade oder größer als 10 | wahr | Die erste Teilaussage ist wahr. Das genügt beim einschließenden Oder. |
| 4 ist nicht größer als 10 | wahr | Negation der falschen Aussage „4 ist größer als 10“ |
| 4 ist gerade und nicht größer als 10 | wahr | Beide Teilaussagen sind wahr. |

Wenn du „Die Konjunktion ist wahr, weil 4 gerade ist“ schreibst, hast du nur eine Teilaussage geprüft. Schau dir auch die zweite an und prüfe, ob beide Bedingungen erfüllt sind. Prüfe auf diese Weise auch Aufgaben mit anderen Zahlen oder einer anderen Reihenfolge der Aussagen.

## Beim logischen „oder“ dürfen beide Aussagen wahr sein

Hier verwenden wir die **einschließende Disjunktion**. Zum Beispiel ist „Die Zahl 12 ist gerade oder durch 3 teilbar“ wahr. Beide Teilaussagen sind wahr, und das macht die Disjunktion nicht falsch.

Im Alltag kann „oder“ bedeuten, dass man genau eine Möglichkeit wählen soll, etwa bei einem Angebot, bei dem du genau ein Getränk auswählen darfst. Deshalb übertragen wir die Bedeutung aus einem Gespräch nicht automatisch auf das Symbol `∨`. Verlangt eine Aufgabe „genau eine der beiden Aussagen, aber nicht beide“, beschreibt sie eine ausschließende Disjunktion: Sie ist wahr, wenn genau eine Aussage wahr ist, und falsch, wenn beide wahr oder beide falsch sind. Die [OpenStax-Lektion zu zusammengesetzten Aussagen](https://openstax.org/books/contemporary-mathematics/pages/2-2-compound-statements) erklärt diese unterschiedlichen Bedeutungen von „oder“.

## Achte darauf, worauf sich die Negation bezieht

Die Negation von „Die Zahl 4 ist größer als 10“ lautet „Die Zahl 4 ist nicht größer als 10“. Für reelle Zahlen ist die Negation von `x > 10` die Aussage `x ≤ 10`. Die Negation schließt also auch den Fall `x = 10` ein.

Bei der Negation einer zusammengesetzten Aussage musst du auf die Klammern achten. Im ersten Beispiel ist `p` wahr und `q` falsch:

- `¬(p ∧ q)` ist wahr: Zuerst bestimmen wir den Wert der Konjunktion und erhalten falsch. Anschließend negieren wir das Ergebnis.
- `(¬p) ∧ q` ist falsch: Wir negieren nur `p`. Damit ist `¬p` falsch; die Konjunktion mit der ebenfalls falschen Aussage `q` ist also falsch.

In `¬(p ∧ q)` bezieht sich die Negation auf alles innerhalb der Klammern. Deshalb bestimmen wir zuerst den Wahrheitswert der Konjunktion und negieren ihn danach. Bei `(¬p) ∧ q` betrifft die Negation nur `p`. Achte deshalb genau darauf, worauf sich das Negationszeichen bezieht: Das kann, wie hier, das Ergebnis verändern.

## Versuche es selbst, bevor du die Lösungen liest

Notiere zu jeder Aufgabe den Wahrheitswert und eine kurze Begründung. Vergleiche besonders die ersten beiden Aufgaben: Die Teilaussagen sind gleich, nur die Verknüpfung ändert sich.

1. „Die Zahl 9 ist ungerade und kleiner als 5.“
2. „Die Zahl 9 ist ungerade oder kleiner als 5.“
3. „Die Zahl 8 ist ungerade oder größer als 20.“
4. „Die Zahl 15 ist kein Vielfaches von 5.“
5. Welchen Wahrheitswert hat `p ∨ (¬q)`, wenn `p` falsch und `q` wahr ist?
6. „Die Zahl 18 ist gerade oder ein Vielfaches von 3.“ Bestimme den Wahrheitswert und erkläre, wie es sich auswirkt, dass beide Teilaussagen wahr sind.

### Lösungen mit Begründung

1. **Falsch.** Die Zahl 9 ist zwar ungerade, aber nicht kleiner als 5. Eine Konjunktion aus wahr und falsch ergibt falsch.
2. **Wahr.** Die Wahrheitswerte der Teilaussagen bleiben gleich. Für die einschließende Disjunktion genügt jedoch die wahre Teilaussage „9 ist ungerade“.
3. **Falsch.** Die Zahl 8 ist weder ungerade noch größer als 20. Das ist der einzige Fall, in dem die einschließende Disjunktion falsch ist: Beide Teilaussagen sind falsch.
4. **Falsch.** Die Zahl 15 ist ein Vielfaches von 5, denn `15 = 3 × 5`. Die Aussage „15 ist ein Vielfaches von 5“ ist wahr, ihre Negation also falsch.
5. **Falsch.** Weil `q` wahr ist, ist `¬q` falsch. Es bleibt eine Disjunktion aus zwei falschen Aussagen.
6. **Wahr.** Die Zahl 18 ist gerade und ein Vielfaches von 3. Wenn beide Teilaussagen wahr sind, ist auch die einschließende Disjunktion wahr. Sie verlangt nicht, dass genau eine Aussage wahr ist.

## Mach aus deinem Fehler eine Lernkarte

Formuliere die Lernkarte so, dass du damit gezielt die Ursache deines Fehlers übst. Wenn du die beiden Verknüpfungen verwechselt hast, behalte dieselben Wahrheitswerte bei und ändere in der Frage die Verknüpfung. Lag der Fehler bei der Negation, mache auf der Vorderseite deutlich, worauf sie sich bezieht.

| Vorderseite | Rückseite |
| --- | --- |
| `p` ist wahr und `q` ist falsch. Welchen Wahrheitswert hat `p ∧ q`? Warum? | Falsch; bei einer Konjunktion müssen beide Aussagen wahr sein. |
| `p` ist wahr und `q` ist falsch. Welchen Wahrheitswert hat `p ∨ q`? | Wahr; mindestens eine Aussage ist wahr. |
| Wie lautet die Negation von `x > 10` für reelle Zahlen? | `x ≤ 10`; die Negation schließt die Gleichheit ein. |
| `p` ist falsch und `q` ist wahr. Bestimme `p ∨ (¬q)`. | Falsch; die Negation von `q` ist falsch, und eine Disjunktion aus falsch und falsch ergibt falsch. |

Beantworte die Frage, bevor du die Karte umdrehst. Löse danach ein Beispiel mit neuen Zahlen auf Papier. Du kannst Papierkarten oder Karten mit Vorder- und Rückseite in der App verwenden. Wie das geht, zeigt dir die [Anleitung für den Einstieg](/de/docs/getting-started/). Mehr dazu findest du unter [Lernkarten für Mathematik verwenden](/de/blog/how-to-use-flashcards-for-math/) und [klarere Lernkarten formulieren](/de/blog/how-to-make-better-flashcards/).
