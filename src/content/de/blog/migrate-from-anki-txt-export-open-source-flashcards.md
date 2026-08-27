---
title: "So migrierst du 2026 sicher von Anki: ein Workflow mit TXT-Export"
description: "Übertrage textbasierte Anki-Karten, ohne die ursprüngliche Sammlung zu gefährden. Erstelle ein .colpkg-Backup, exportiere Notizen als TXT, teste Felder und Medien und baue anschließend sicher ein kleines Deck neu auf."
date: "2026-03-13"
updated: "2026-08-27"
image: "/blog/migrate-from-anki-txt-export-open-source-flashcards.png"
keywords:
  - "von Anki migrieren"
  - "Anki TXT exportieren"
  - "Anki-Deck exportieren"
  - "Anki zu Flashcards"
  - "Anki-Migration"
  - "Notes in Plain Text"
  - ".colpkg-Backup"
---

Für eine sichere Migration aus Anki brauchst du zwei Exporte, nicht nur einen. Erstelle zuerst eine `.colpkg`-Datei mit Medien, über die du die ursprüngliche Sammlung wiederherstellen kannst. Anschließend exportierst du die zu übertragenden Inhalte im Format **Notes in Plain Text**.

Die beiden Dateien erfüllen unterschiedliche Aufgaben. Das Sammlungspaket sichert den Rückweg. Die TXT-Datei ist deine portable Arbeitskopie. Wenn du diese Rollen auseinanderhältst, behandelst du eine Liste von Kartentexten nicht versehentlich wie ein vollständiges Anki-Backup.

Dieser Ablauf eignet sich für textbasierte Decks und Zielsysteme, die mit TXT- oder CSV-Dateien arbeiten können. Der Textexport enthält weder den Status des Anki-Schedulers noch Vorlagen, Add-ons oder Mediendateien. Teste deshalb zuerst ein repräsentatives Deck, prüfe jedes Feld und lass die ursprüngliche Sammlung unverändert, bis das Ergebnis im Alltag überzeugt.

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](https://flashcards-open-source-app.com/). Dieser Leitfaden sagt klar, wann du besser bei Anki bleibst oder ein Zielsystem wählst, das `.apkg` importieren kann.

**Fakten geprüft:** 27. August 2026.

![Ein Botaniker lässt die ursprüngliche Pflanze unversehrt neben einem geschützten Sicherungssteckling und drei Teststecklingen](/blog/migrate-from-anki-txt-export-open-source-flashcards.png)

## Entscheide zuerst, ob TXT der richtige Weg ist

Anki speichert weit mehr als die Wörter, die du beim Wiederholen siehst. Eine Notiz kann mehrere Felder haben. Der Notiztyp und seine Kartenvorlagen bestimmen, wie daraus eine oder mehrere Karten entstehen. Zur Sammlung gehören außerdem Informationen zur Lernplanung. Medien liegen dagegen als separate Dateien vor, auf die der Inhalt einer Notiz verweist.

Ein Textexport bildet nur einen Teil dieses Systems ab. Prüfe deshalb diese Tabelle, bevor du Zeit in die Bereinigung der Datei steckst:

| Dein Anki-Setup | Ist TXT ein sinnvoller Migrationsweg? | Sicherere Entscheidung |
| --- | --- | --- |
| Einfache Notizen mit Vorder- und Rückseite sowie wenigen oder keinen Medien | **Ja** | Exportiere ein repräsentatives Deck, ordne die Felder zu und teste das Zielsystem |
| Mehrere vorhersehbare Textfelder wie Begriff, Definition und Beispiel | **Meistens** | Entscheide vor dem Import, welche Felder auf die Vorder- und Rückseite gehören |
| Cloze-Notizen, die du als gewöhnliche Fragen und Antworten neu formulieren würdest | **Manchmal** | Teste einige Lückentexte und prüfe das Ergebnis Karte für Karte |
| Eigenes HTML, das nur der einfachen Formatierung dient | **Manchmal** | Prüfe, ob das Zielsystem das HTML rendert, entfernt oder als Quelltext anzeigt |
| Bilder oder Audiodateien, die nützlich, aber nicht unverzichtbar sind | **Manchmal** | Übertrage zuerst den Text; füge die Medien danach separat hinzu und prüfe sie |
| Vorlagen, CSS, JavaScript, Add-ons oder automatisch erzeugte Rückwärtskarten sind unverzichtbar | **Meistens nein** | Bleibe bei Anki oder wähle ein Zielsystem mit kompatiblem Import von Anki-Paketen |
| Bestehende Fälligkeitstermine, der Wiederholungsverlauf oder dein persönlicher Planungsstand sind unverzichtbar | **Nein** | Lerne weiter mit Anki oder nutze einen Migrationsweg, der die Lernplanung ausdrücklich bewahrt |
| Image Occlusion oder medienlastige Notizen tragen die eigentliche Bedeutung | **Nicht mit TXT allein** | Nutze ein Zielsystem, das Anki-Pakete versteht, und prüfe vor dem Wechsel, ob die Medien korrekt übernommen werden |

Die entscheidende Frage lautet: Bliebe das benötigte Lernmaterial erhalten, wenn du jede Notiz auf ihre Textfelder reduzieren würdest? Falls nicht, ist TXT das falsche Migrationsformat.

## Das Sicherheitsmodell mit zwei Exporten

Lege beide Exporte an, bevor du in Anki etwas änderst oder anderswo ein großes Deck erstellst.

| Datei | Wofür sie gedacht ist | Was sie schützt |
| --- | --- | --- |
| `.colpkg` mit aktivierter Option **Include media** | Wiederherstellung | Notizen, Karten, Decks, Notiztypen, Informationen zur Lernplanung und eingebundene lokale Medien der Sammlung |
| **Notes in Plain Text** `.txt` | Portabilität | Die Inhalte der exportierten Notizfelder, durch Tabulatoren getrennt |

Laut der [Anki-Dokumentation zum Export](https://docs.ankiweb.net/exporting.html) enthält ein Sammlungspaket die gesamte Sammlung einschließlich der Lernplanung. Über die Medienoption legst du fest, ob lokale Bilder, Audio- und andere Dateien mitgesichert werden. Der [Backup-Leitfaden von Anki](https://docs.ankiweb.net/backups.html) empfiehlt, ein manuell erstelltes Sammlungspaket an einem sicheren Ort aufzubewahren, etwa auf einem anderen Gerät oder in einem Cloud-Speicher.

Die TXT-Datei ist bewusst eingeschränkter. Anki schreibt die Notizfelder in eine Textdatei und trennt sie durch Tabulatoren. Beziehst du HTML und Medienreferenzen ein, wird auch das in diesen Feldern gespeicherte Markup sichtbar. So kannst du die Inhalte prüfen und wiederverwenden. Zu einer portablen Kopie des gesamten Anki-Systems wird die Datei dadurch nicht.

Eine `.colpkg` schützt die Sammlungsdaten. Sie enthält jedoch weder die Anki-Anwendung noch den Code deiner Add-ons. Halte daher separat fest, von welchen Add-ons dein Workflow abhängt.

Für eine umfassendere Backup-Routine über diese Migration hinaus hilft dir der Leitfaden zum [Sichern von Flashcards](/de/blog/how-to-back-up-flashcards/).

## Export 1: Erstelle die `.colpkg` für die Wiederherstellung

Arbeite in der Anki-Desktop-App und folge dem Wiederherstellungsweg aus dem offiziellen Handbuch. Wenn deine Karten auf Medien angewiesen sind, führe zuerst **Tools > Check Media** aus. Laut [Ankis Medienleitfaden](https://docs.ankiweb.net/media.html) meldet diese Funktion Dateien, auf die Notizen verweisen, die aber im Medienordner fehlen.

1. Öffne **File > Export**.
2. Wähle **Anki collection package (`.colpkg`)** als Exportformat.
3. Aktiviere **Include media**.
4. Speichere die Datei außerhalb des Anki-Profilordners.
5. Kopiere sie an einen zweiten Ort, der sich nicht auf dem Computer mit deiner Sammlung befindet.

Schreib das Datum in den Dateinamen, zum Beispiel `anki-collection-2026-08-27.colpkg`. Prüfe anschließend, ob die Datei an beiden Orten vorhanden und nicht leer ist.

Spiele dieses Backup nicht testweise in deine aktive Sammlung ein. Anki warnt davor, dass der Import einer `.colpkg` die aktuellen Karten löscht und ersetzt; vorhandene Mediendateien werden dabei nicht gelöscht. Falls du die Datei wiederherstellen musst, folge den offiziellen Anweisungen und rechne damit, dass alle Änderungen an der Sammlung seit dem Backup verloren gehen.

Behalte diese Datei auch dann, wenn die TXT-Migration funktioniert. Sie sichert genau den Zustand der Sammlung, den der Textexport nicht abbilden kann.

## Export 2: Erstelle eine kleine Stichprobe als Notes in Plain Text

Beginne mit einem repräsentativen Deck statt mit der gesamten Sammlung. Wähle eines, das die schwierigen Fälle enthält, die du wirklich nutzt: ein zusätzliches Feld, ein wichtiges Tag, eine formatierte Antwort, einen Lückentext und eine Medienreferenz, sofern diese Elemente auch in der restlichen Sammlung vorkommen.

Dann:

1. Öffne erneut **File > Export**.
2. Wähle **Notes in Plain Text**.
3. Beschränke den Export auf das repräsentative Deck.
4. Aktiviere **Include HTML and media references**, damit Formatierungen und Dateiabhängigkeiten in der Stichprobe sichtbar werden. Die Referenzen bleiben dadurch erhalten; die Mediendateien selbst landen nicht in der TXT-Datei.
5. Aktiviere **Include tags**, wenn du Tags behalten möchtest. Du musst sie im Zielsystem trotzdem zuordnen und prüfen.
6. Speichere das Ergebnis als `.txt`-Datei und lass die Quellsammlung unverändert.

Anki spricht aus gutem Grund von einem Notizexport. Exportiert werden die gespeicherten Felder, nicht die Darstellung jeder gerenderten Karte. Wenn eine Notiz über Vorlagen Karten in beide Richtungen erzeugt, beschreibt die Textdatei weiterhin nur die Notizfelder. Eine vom Zielsystem unabhängig nutzbare Logik, die daraus zwei Lernkarten erzeugt, enthält sie nicht.

Sobald die kleine Stichprobe funktioniert, wiederholst du denselben Ablauf für die übrigen geeigneten Decks. Eine fehlgeschlagene Stichprobe kostet nur etwas Prüfzeit. Eine fehlgeschlagene Komplettmigration beschert dir dagegen ein eigenes Aufräumprojekt.

## Öffne die TXT-Datei, bevor du sie einem Importer oder einer KI übergibst

Behandle den Export nicht wie einen undurchsichtigen Anhang. Öffne ihn in einem Texteditor, der Tabulatoren anzeigen kann, oder importiere eine Kopie in eine Tabellenkalkulation. Das Original bleibt dabei unangetastet.

Neuere Anki-Exporte können mit Zeilen wie `#separator:tab`, `#html:true` oder `#tags column:...` beginnen. Dabei handelt es sich um Dateiheader, nicht um Notizen. Lass sie im unveränderten Original stehen. Kopierst du einige Notizzeilen in eine separate Testdatei für ein Zielsystem, das Anki-Header nicht versteht, schließt du diese Zeilen jedoch aus.

Prüfe fünf Dinge:

1. **Anzahl der Felder:** Jede Zeile sollte die erwartete Anzahl an tabulatorgetrennten Feldern enthalten. Ankis [Leitfaden zum Textimport](https://docs.ankiweb.net/importing/text-files.html) erklärt, warum Feldtrenner wichtig sind und wie du Felder unabhängig voneinander zuordnest.
2. **Reihenfolge der Felder:** Notiere die Bedeutung jeder Spalte: Vorderseite, Rückseite, Beispiel, Quelle oder etwas anderes. In den Rohdaten sind weder die Feldnamen noch ihre Rolle auf den Kartenseiten unbedingt erkennbar.
3. **HTML:** Suche nach Fragmenten wie `<b>`, `<br>` oder `<div>`. Anki bettet Formatierungen als HTML ein, wenn sie in den Export aufgenommen werden. Eine andere App kann dieses HTML rendern, entfernen oder als Text anzeigen.
4. **Cloze-Markup:** Suche nach Zeichenfolgen wie `{{c1::Paris}}`. Ein allgemeines Zielsystem für Karten mit Vorder- und Rückseite übernimmt Ankis Logik zur Erzeugung von Lückentexten nicht allein deshalb, weil diese Zeichenfolge in einem Feld steht.
5. **Medienreferenzen:** Suche nach `<img src="...">` und `[sound:...]`. Die Referenz ist weder die Bild- noch die Audiodatei. Anki speichert diese Dateien separat in seinem Medienordner.

Prüfe auch die Tags, falls du sie brauchst. Ankis [Leitfaden zum Textimport](https://docs.ankiweb.net/importing/text-files.html) unterstützt ein eigenes Tag-Feld und einen `#tags column`-Header, dein Zielsystem verwendet aber möglicherweise ein anderes Format. Tags bleiben nur erhalten, wenn du sie exportiert, bewusst zugeordnet und an den erstellten Karten überprüft hast. Verlass dich nicht darauf, dass eine vertraute `parent::child`-Hierarchie übernommen wurde, nur weil einige Tag-Namen in der Stichprobe auftauchen.

Ersetze zur schnellen Bereinigung nicht einfach jeden Tabulator durch ein Komma. Ein Tabulator markiert die Grenze zwischen Feldern. Änderst du die Trennzeichen ohne korrekte CSV-Zitierung, können Kommas, Anführungszeichen oder Zeilenumbrüche im Inhalt die Zeilenstruktur zerstören.

Lege am besten direkt neben dem Export eine kurze Zuordnungsnotiz an:

```text
Spalte 1 -> Vorderseite
Spalte 2 -> Rückseite
Spalte 3 -> als Beispiel an die Rückseite anhängen
Spalte 4 -> erst nach Prüfung als Tags übernehmen
HTML -> bis auf Zeilenumbrüche entfernen
Cloze-Markup -> manuell neu formulieren
```

Mit dieser kurzen Notiz lässt sich die Migration wiederholen. Zugleich hast du einen konkreten Sollzustand, mit dem du das Ergebnis im Zielsystem vergleichen kannst.

## Was erhalten bleibt – und wo TXT an seine Grenzen stößt

| Anki-Daten oder -Verhalten | In Notes in Plain Text enthalten? | Was du tun solltest |
| --- | --- | --- |
| Text der Notizfelder | **Ja** | Ordne jede durch Tabulatoren getrennte Spalte bewusst zu |
| Einfache Formatierungen | **Als eingebettetes HTML, wenn einbezogen** | Teste, wie das Zielsystem damit umgeht; entferne oder überarbeite es bei Bedarf |
| Tags | **Nur wenn sie in den Export aufgenommen wurden** | Ordne die Tag-Spalte bewusst zu und prüfe Namen und Hierarchie |
| Bilder und Audio | **Referenzen können enthalten sein; die Dateien werden nicht in der TXT übertragen** | Behalte die `.colpkg` für die Wiederherstellung und übertrage benötigte Medien separat |
| Kartenvorlagen und CSS | **Nein** | Baue die Kartenstruktur neu auf oder wähle einen Importer, der Anki-Pakete versteht |
| JavaScript oder Verhalten von Add-ons | **Nein** | Nutze Anki weiter, wenn dieses Verhalten zu deinem Lernworkflow gehört |
| Cloze-Verhalten | **Nein** | Wandle die Cloze-Syntax in unterstützte Kartentypen oder normale Frage-Antwort-Karten um |
| Mehrere Karten, die aus einer Notiz erzeugt werden | **Nicht als Template-Verhalten** | Entscheide, welche Richtungen zu separaten Karten im Zielsystem werden sollen |
| Decknamen und -hierarchie | **Nur wenn sie als Exportmetadaten enthalten sind** | Ordne die Namen bewusst zu; erwarte nicht, dass das Zielsystem die Struktur neu aufbaut |
| Deck-Voreinstellungen | **Nein** | Richte nur die Einstellungen neu ein, die du weiterhin brauchst |
| Fälligkeitstermine, Intervalle, Wiederholungsverlauf und Scheduler-Status | **Nein** | Behandle die Karten im Zielsystem so, als begänne ihr Wiederholungsverlauf neu |

Die letzte Zeile hat die größten Folgen. Karteninhalte und Lernplanung sind zwei getrennte Dinge. Ein erfolgreicher **Anki-TXT-Export** kann die Kartentexte bewahren und trotzdem den Lernstand jeder Karte zurücksetzen.

Nur weil zwei Apps Scheduler aus derselben Familie verwenden, sind ihre Kartenverläufe noch lange nicht austauschbar. Aus bloßem Frage-und-Antwort-Text kann ein Zielsystem weder deine bisherigen Fälligkeitstermine noch Stabilität, Schwierigkeit oder Wiederholungsereignisse ableiten. Wenn dir dieser Verlauf wichtig ist, lies nach, [was FSRS speichert und berechnet](/de/blog/what-is-fsrs/), bevor du dich für einen Neustart entscheidest.

## Führe im Zielsystem einen reversiblen Test durch

Während des Tests bleibt Anki die maßgebliche Quelle. Erstelle im Zielsystem ein temporäres Deck, importiere oder entwirf nur die repräsentative Stichprobe und prüfe jedes Ergebnis. Dafür musst du keine der ursprünglichen Notizen löschen, bearbeiten oder aussetzen.

Deine Prüfung sollte diese Fragen beantworten:

- Hat jede erwartete Notiz die richtige Anzahl an Karten erzeugt?
- Sind die richtigen Felder auf der Vorder- und Rückseite gelandet?
- Sind Tabulatoren, Anführungszeichen, Zeilenumbrüche, nichtlateinische Schriftzeichen und Codeausschnitte erhalten geblieben?
- Wird HTML korrekt gerendert, als Roh-Markup angezeigt oder entfernt?
- Wurden Lückentexte bewusst umgewandelt, statt als fehlerhafte Syntax kopiert zu werden?
- Haben Tags noch dieselbe Bedeutung wie in Anki?
- Sind medienabhängige Karten verständlich und alle benötigten Dateien vorhanden?
- Hat das Zielsystem Duplikate erzeugt?
- Ist klar, dass die Lernplanung von vorn beginnt?

Vergleiche die Stichprobe direkt mit Anki. Gib dich nicht damit zufrieden, dass „das meiste ganz gut aussieht“, wenn ein einziges fehlendes Feld jede Notiz eines großen Exports beeinträchtigen könnte.

Falls der Test scheitert, entfernst du die temporären Karten über die dafür vorgesehene Funktion des Zielsystems. Passe danach die Zuordnung oder die Bereinigung an. Deine Anki-Sammlung und beide Exportdateien bleiben unverändert – genau das macht den Test reversibel.

## Die TXT-Datei mit Flashcards Open Source App verwenden

Flashcards bietet keinen direkten Anki-Importer. Die App kann `.apkg` oder `.colpkg` nicht lesen und daraus Anki-Vorlagen, Medien oder den Wiederholungsverlauf rekonstruieren.

Der derzeit verfügbare gehostete Weg führt über KI-gestützte Entwürfe aus Dateianhängen. Öffne die [gehostete App mithilfe des Leitfadens für die ersten Schritte](/de/docs/getting-started/), hänge die TXT-Datei oder eine sorgfältig vorbereitete CSV-Datei im KI-Chat an und fordere ausdrücklich einen kleinen Entwurf an, ohne etwas speichern zu lassen. Prüfe die vorgeschlagenen Karten im Chat. Erst danach bittest du den Assistenten, den freigegebenen Stapel zu speichern.

Eine gute erste Anfrage beschreibt die Zuordnung genau und vermeidet ungewollte Änderungen:

```text
Lies den angehängten Anki-Export im Format Notes in Plain Text. Speichere noch
keine Karten. Behandle Tabulatoren als Feldtrenner. Verwende Spalte 1 als
Vorderseite und Spalte 2 als Rückseite. Füge Spalte 3 unter der Überschrift
„Beispiel“ an die Rückseite an.
Zeige zuerst eine kleine Stichprobe, übernimm die Formulierungen aus der Quelle
und markiere Zeilen mit HTML, Cloze-Markup, fehlenden Feldern oder
Medienreferenzen, anstatt zu raten.
```

Passe die Anfrage an die Zuordnung an, die du nach der Prüfung der Datei notiert hast. Falls die Entwürfe überladen oder unklar sind, hilft dir die Checkliste zum [Überarbeiten von KI-Flashcards vor dem Lernen](/de/blog/how-to-fix-ai-flashcards/). KI kann dir hier die wiederholte Umstrukturierung abnehmen. Sie beweist aber nicht, dass die Migration die Quelle korrekt bewahrt hat.

Nachdem du einen kleinen Stapel freigegeben hast, speicherst du ihn in einem temporären Test-Deck, versiehst ihn mit einem Migrations-Tag und gehst dieselbe Prüfliste durch. Nur das geprüfte Ergebnis zeigt zuverlässig, ob der Ablauf für genau diese Anki-Sammlung funktioniert.

## Weite die Migration aus, ohne den Wechsel unumkehrbar zu machen

Sobald das repräsentative Deck den Test bestanden hat:

1. Gruppiere die übrigen Decks nach ihrer Notizstruktur, statt alles in eine einzige, schwer verständliche Datei zu exportieren.
2. Exportiere und prüfe eine Gruppe nach der anderen.
3. Verwende eine schriftliche Feldzuordnung nur erneut, wenn die Notiztypen tatsächlich übereinstimmen.
4. Prüfe jeden erstellten Stapel, bevor du den nächsten angehst.
5. Behalte die `.colpkg`, die unveränderten TXT-Dateien und Anki selbst.

Lege einen klaren Zeitpunkt für den Umstieg fest, sobald du mit den neuen Karten lernen möchtest. Wiederholst du dasselbe Material in beiden Apps, entstehen zwei unabhängige Zeitpläne, die sofort auseinanderlaufen. Der alte Anki-Zeitplan bleibt in der Wiederherstellungskopie erhalten, wird aber nicht durch Wiederholungen aktualisiert, die du anderswo absolvierst.

Du gewinnst nichts, wenn du Anki besonders schnell löschst. Behalte die ursprüngliche Sammlung, bis sich das neue Deck im normalen Einsatz bewährt hat und du mit allem einverstanden bist, was über den TXT-Weg nicht übernommen wurde.

## Wann du nicht auf diese Weise von Anki migrieren solltest

Bleibe bei Anki oder wähle ein Zielsystem, das `.apkg` ausdrücklich importiert, wenn du auf Folgendes angewiesen bist:

- komplexe Notiztypen oder mehrere erzeugte Kartenrichtungen;
- benutzerdefinierte Vorlagen, CSS, JavaScript oder Add-ons;
- Cloze-Funktionen, die du nicht neu aufbauen möchtest;
- Image Occlusion, Audiodateien oder Bilder, die unverzichtbare Informationen enthalten;
- Deck-Voreinstellungen und eine Organisation, die exakt übertragen werden müssen;
- einen Wiederholungsverlauf oder eine aktuelle Lernplanung, die du nicht zurücksetzen kannst.

Für solche Workflows ist Anki eine gute Wahl. Die TXT-Migration ist kein Urteil über die App, sondern ein eng begrenztes Werkzeug für Menschen, deren Lernmaterial im Wesentlichen in den Notizinhalten steckt. Der ausführlichere [Vergleich zwischen Anki und Flashcards](/de/blog/anki-vs-flashcards-open-source-app/) behandelt die Unterschiede zwischen den Produkten, ohne davon auszugehen, dass alle wechseln sollten.

## Die sichere Variante ist bewusst unspektakulär

Wenn du von Anki migrieren willst, ohne die ursprüngliche Sammlung zu gefährden, halte den Ablauf schlicht:

1. Exportiere eine `.colpkg` mit Medien und bewahre sie an einem anderen Ort auf.
2. Exportiere ein repräsentatives Deck als **Notes in Plain Text**.
3. Prüfe Tabulatoren, Felder, HTML, Lückentexte, Tags und Medienreferenzen.
4. Schreib die Zuordnung von der Quelle zum Zielsystem eindeutig auf.
5. Erstelle ein temporäres Test-Deck und prüfe jede Karte.
6. Weite die Migration erst aus, wenn die Stichprobe den Test bestanden hat.
7. Behalte Anki und das Wiederherstellungspaket, während sich der neue Workflow bewährt.

Die TXT-Datei überträgt Inhalte. Die `.colpkg` schützt die Sammlung. Sobald du nicht mehr erwartest, dass eine einzige Datei beide Aufgaben übernimmt, lässt sich eine Anki-Migration viel leichter nachvollziehen – und viel leichter rückgängig machen.
