---
title: "Anki-Alternativen 2026: Was du beim Wechsel behältst, verlierst und gewinnst"
description: "Vergleiche sieben Anki-Alternativen nach Datenübernahme, Offline-Nutzung, Lernplanung, Preis, Quellcodezugriff und Self-Hosting – und erfahre, wann du besser bei Anki bleibst."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "Anki-Alternativen"
  - "Anki-Alternative"
  - "Apps wie Anki"
  - "Open-Source-Alternative zu Anki"
  - "kostenlose Anki-Alternativen"
  - "Anki-Alternative für iOS"
  - "von Anki migrieren"
---

Ein Anki-Import kann fehlerfrei durchlaufen und trotzdem genau das zerstören, was dein Deck für dich brauchbar macht. Der Text ist da. Die Karten lassen sich öffnen. Dann bemerkst du, dass das CSS fehlt, ein Audiofeld leer ist, jede Karte als neu gilt oder eine Notiz nicht mehr die erwarteten Kartenrichtungen erzeugt.

Das ist der teure Teil beim Vergleich von Anki-Alternativen. Einen aufgeräumteren Editor oder einen günstigeren Tarif erkennst du schon vor dem Wechsel. Wie sich Vorlagen verhalten, ob Wiederholungsverlauf und Fälligkeitstermine erhalten bleiben, was mit Add-ons und Offline-Medien passiert und wie du später wieder aus dem neuen System herauskommst, zeigt sich oft erst, wenn bereits etwas verloren gegangen ist.

Genau dort setzt dieser Vergleich an. Er behandelt sieben Apps wie Anki, zeigt, was sie aus einer bestehenden Sammlung übernehmen, was sich nach dem Import ändert und wann du besser bei Anki bleibst.

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](https://flashcards-open-source-app.com/), eines der Produkte in diesem Vergleich. Ich habe es wegen des offenen Quellcodes, der Self-Hosting-Option und der Workflows für KI-Agenten aufgenommen. Es ist hier nicht automatisch die beste Wahl: Es hat keinen direkten `.apkg`-Importer, die Migration aus Anki ist verlustbehaftet, und der Betrieb des selbst gehosteten Stacks ist eine echte Infrastrukturaufgabe.

**Fakten geprüft:** 28. August 2026. Die Preise sind die an diesem Tag verfügbaren öffentlichen US-Preise oder angegebenen lokalen Preise. Steuern, Regionen, Bildungsangebote und die Abrechnung über App-Stores können den Betrag verändern.

![Ein Uhrmacher prüft, ob das eingespielte Werk einer Taschenuhr in ein anderes Gehäuse passt](/blog/best-anki-alternatives.png)

## Die kurze Antwort, bevor du etwas verschiebst

Bleib zunächst bei Anki. Wechsle nur, wenn eine andere App ein wiederkehrendes Problem löst, das den Aufwand der Migration wert ist.

Drei Produkte akzeptieren Anki-Pakete samt Lerndaten, allerdings reicht die Übernahme jeweils unterschiedlich weit:

- **Mnemosyne** dokumentiert einen vollständigen Anki-Import mit benutzerdefinierten Kartentypen und Lerndaten. Für einen klassischen lokalen Open-Source-Workflow am Desktop kommt es Anki in diesem Vergleich am nächsten, hat allerdings keine native iOS-App.
- **Mochi** importiert `.apkg`-Dateien samt Wiederholungsverlauf. Es wandelt HTML in Markdown um, entfernt CSS und JavaScript und ersetzt Ankis vier Bewertungsoptionen durch Remembered oder Forgot.
- **RemNote** importiert `.apkg`-Dateien, die meisten Notiztypen und den Wiederholungsverlauf. Die aktuelle Anleitung weist außerdem darauf hin, dass importierte Karten in einer eigenen **Need to Learn**-Warteschlange landen. Lies „Wiederholungsverlauf importiert“ also nicht als „heutige Anki-Warteschlange exakt kopiert“.

Bei den übrigen vier Produkten baust du Inhalte neu auf, statt eine Sammlung zu migrieren:

- **Quizlet** eignet sich für öffentliche Lernsets, Klassen, Spiele und angeleitetes Üben.
- **Brainscape** bietet Gruppen eine einfachere Bewertungsschleife von 1 bis 5.
- **SuperMemo** ist ein Wechsel zu seiner proprietären Methode und seinem Kurskatalog.
- **Flashcards** bietet MIT-lizenzierte Web- und native Clients, ein selbst hostbares Backend sowie API- und MCP-Zugriff. Der geprüfte Workflow mit TXT oder CSV erhält den Anki-Lernstatus nicht.

Wenn deine Karten von exakter Darstellung, Add-ons oder der aktuellen Wiederholungswarteschlange abhängen, ist es keine Unentschlossenheit, bei Anki zu bleiben. Es ist die richtige Antwort.

## Zähle zuerst, was tatsächlich in deiner Anki-Sammlung steckt

Ein „Deck“ ist keine einzelne portable Einheit. Bevor du Produkte vergleichst, trenne die Bestandteile, die du möglicherweise verschiebst.

| Teil der Sammlung | Was Anki in ein Paket aufnehmen kann | Was ein Zielsystem ausdrücklich unterstützen muss |
| --- | --- | --- |
| **Notizinhalte** | Textfelder und gespeichertes HTML | Feldzuordnung, Lückentexte, nichtlateinische Schrift, Code und Zeilenumbrüche |
| **Kartenerzeugung** | Notiztypen und Kartenvorlagen | Vorwärts-/Rückwärtskarten, benutzerdefinierte Felder sowie CSS- und JavaScript-Verhalten |
| **Medien** | Lokale Bilder, Audiodateien und andere Dateien, wenn **Include media** aktiviert ist | Entpacken der Dateien, Verweise, unterstützte Formate und Gerätesynchronisierung |
| **Organisation** | Decks, untergeordnete Decks, Tags und optionale Deck-Voreinstellungen | Hierarchie, Bedeutung der Tags, Voreinstellungen und Lernbereiche |
| **Lernstatus** | Planungsinformationen und Wiederholungsverlauf, wenn sie einbezogen werden | Fälligkeitstermine, Intervalle, Fehlschläge und die Übertragung in den Scheduler des Zielsystems |
| **Workflow-Code** | Add-ons werden nicht als Teil des Deck-Pakets gebündelt | Ersatz für Funktionen des Kartenbrowsers, Massenbearbeitungen, Notizerzeugung und anderes Add-on-Verhalten |

Das [Anki-Handbuch zum Export](https://docs.ankiweb.net/exporting.html) dokumentiert all diese Paketoptionen. Ein Textimporter sieht nur die erste Tabellenzeile und vielleicht Tags. Ein direkter `.apkg`-Importer kann mehr erkennen, doch jedes Produkt entscheidet selbst, was es umwandelt und was es verwirft.

Deshalb ist „importiert Anki“ zu ungenau, um einen Wechsel zu beurteilen. Stelle drei getrennte Fragen:

1. **Bedeutet die Karte noch dasselbe?** Prüfe Felder, erzeugte Kartenrichtungen, Lückentexte, Medien und Darstellung.
2. **Weiß das Zielsystem, was ich bereits gelernt habe?** Prüfe Wiederholungsereignisse, den aktuellen Lernstatus, Fälligkeitstermine und die erste echte Lernwarteschlange.
3. **Kann ich später wieder wechseln?** Exportiere aus dem Zielsystem und prüfe, was das Exportformat beim Ausstieg tatsächlich enthält.

Ein Importer kann die erste Frage bestehen und bei den anderen beiden scheitern.

## Was die Migration übersteht

| Produkt | Importweg aus Anki | Lernstatus | Wichtigster Verlust, den du prüfen solltest |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | [Direkter `.apkg`-Import](https://help.remnote.com/en/articles/6751471-importing-from-anki) für die meisten Notiztypen, Medien und den Wiederholungsverlauf | Der Wiederholungsverlauf kommt an, importierte Karten landen aber in RemNotes eigener **Need to Learn**-Warteschlange | Umfangreiches CSS, benutzerdefiniertes JavaScript, manche automatisch erzeugte Sprachausgabe und umbenannte Felder für Image Occlusion |
| [Mochi](https://mochi.cards/) | [Direkter `.apkg`-Import](https://mochi.cards/docs/import-and-export/importing/) einschließlich Wiederholungsverlauf | Der Verlauf kommt an; die Dokumentation verspricht weder eine identische Anki-Warteschlange noch identische Fälligkeitstermine | HTML wird zu Markdown; CSS und JavaScript werden entfernt; künftige Bewertungen sind nur noch binär |
| [Mnemosyne](https://mnemosyne-proj.org/) | Das Projekt dokumentiert einen [vollständigen Anki-Import](https://mnemosyne-proj.org/features) mit benutzerdefinierten Kartentypen und Lerndaten | Die Lerndaten werden in einen anderen Scheduler importiert | Exaktes Vorlagenverhalten, umgewandelte Fälligkeitsdaten und Kartendarstellung müssen weiterhin getestet werden |
| [Quizlet](https://quizlet.com/) | [Begriffe und Definitionen einfügen](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Kein Anki-Lernstatus | Notiztypen, Vorlagen, Decks, Medienstruktur und sämtliche Planungsdaten |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX oder ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Kein Anki-Lernstatus | Vorlagen, Add-ons, Medienregeln und sämtliche Planungsdaten |
| [SuperMemo](https://www.supermemo.com/) | [Frage-und-Antwort-Zeilen mit Trennzeichen einfügen](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), bis zu 100 auf einmal | Kein Anki-Lernstatus | Sammlungsstruktur, Medien, Vorlagen und sämtliche Planungsdaten |
| [Flashcards](https://flashcards-open-source-app.com/) | Geprüfter, KI-gestützter Entwurfsworkflow mit Anki-TXT oder -CSV | Kein Anki-Lernstatus | Keine `.apkg`-Unterstützung; Vorlagen, Medientreue, Deck-Hierarchie und sämtliche Planungsdaten bleiben zurück |

## Preis, Offline-Nutzung, Lernplanung und Kontrolle

| Produkt | Preis, Stand 28. August 2026 | Was offline funktioniert | Scheduler | Quellcode und Self-Hosting |
| --- | --- | --- | --- | --- |
| **RemNote** | [Kostenlos; Pro $8/Monat, abgerechnet als $96/Jahr](https://www.remnote.com/pricing) | Installierte Apps können nach der Anmeldung offline bearbeiten und wiederholen. Am Desktop liegen alle Medien der Wissensdatenbank; mobil werden nur einige aktuelle Bilder zwischengespeichert. Die Web-App funktioniert nur weiter, wenn der Tab bereits geöffnet ist. | [Anki SM-2 oder FSRS v6 als Beta](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Proprietärer Kern; kein unterstützter Weg zum Self-Hosting dokumentiert |
| **Mochi** | [Offline kostenlos; Pro-Synchronisierung $5/Monat](https://mochi.cards/#pricing-section) | Installierte Apps funktionieren ohne Konto vollständig offline. Der Browserspeicher kann allerdings geleert werden. | [Mochis Scheduler oder FSRS](https://mochi.cards/docs/reviewing/fsrs/), beide mit Remembered / Forgot | Proprietärer Kern; öffentliche Repositorys enthalten Integrationen, aber keine selbst hostbare App |
| **Mnemosyne** | Kostenlos | [Lokale Desktop-Nutzung und Offline-Wiederholungen unter Android](https://mnemosyne-proj.org/download-mnemosyne.php); unter Android ist keine Bearbeitung möglich. Keine native iOS-App. | Adaptive Planung anhand einer Selbsteinschätzung von 0 bis 5 | Komponentenspezifische Quellcode-Lizenzen; selbst betriebener Synchronisierungsserver auf einem Desktop- oder Headless-System |
| **Quizlet** | Grundlegende Nutzung kostenlos; [Plus $35.99/Jahr, Plus Unlimited $44.99/Jahr](https://quizlet.com/upgrade?source=signup) | Heruntergeladene Sets funktionieren in den iOS- und Android-Apps mit Flashcards und Match offline. | [Spaced Repetition im Web](https://quizlet.com/features/spaced-repetition) für Sets mit mindestens 100 Begriffen; mobil weiterhin als „coming soon“ gekennzeichnet. Learn ist ein getrennter adaptiver Übungsmodus. | Proprietärer gehosteter Dienst; kein unterstützter Weg zum Self-Hosting |
| **Brainscape** | [Kostenlos; Pro $7.99/Monat bei jährlicher Abrechnung](https://www.brainscape.com/pricing) | [Die mobile App kann Eingaben offline speichern und zuvor heruntergeladene Klassen später synchronisieren](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); die Dokumentation verspricht keine vollständige lokale Bibliothek. | [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/), bewertet von 1 bis 5 | Proprietärer gehosteter Dienst; kein unterstützter Weg zum Self-Hosting |
| **SuperMemo** | Kostenloses Konto mit Einschränkungen; [35.99 PLN/Monat oder 359 PLN/Jahr](https://www.supermemo.com/en/premium-subscription) | Heruntergeladene mobile Kurse funktionieren offline; Bearbeitung, KI, Suche, Aufnahmen und Statistiken nicht. | [Proprietäre SuperMemo-Methode](https://www.supermemo.com/en/supermemo-method) | Proprietärer gehosteter Dienst; kein unterstützter Weg zum Self-Hosting |
| **Flashcards** | [Gehosteter Kern während der Beta kostenlos; Software zum Selbsthosten kostenlos](/pricing/), zuzüglich deiner Infrastrukturkosten | Native Apps schreiben nach der Online-Anmeldung und dem erstmaligen Laden des Workspace lokal; entfernte Medien müssen bereits im Cache liegen. | [FSRS](/docs/architecture/#scheduling) | MIT; das unterstützte Produktiv-Deployment ist ein vollständiger, AWS-basierter Stack |

Diese Tabellen sind keine Ranglisten. Bei 30.000 ausgereiften Karten kann ein direkter Importer wichtiger sein als jede andere Funktion. Eine native iPhone-App kann die Entscheidung bestimmen, wenn du dort wiederholst. Quellcodezugriff ist nur dann relevant, wenn du oder eine Person deines Vertrauens den Code auch pflegen wird.

Jedes Produkt hier bietet einen kostenlosen Einstieg, doch die Migration zu einer kostenlosen Anki-Alternative ist nicht kostenlos. Den Preis eines Abos kannst du leicht ausrechnen. Vorlagen neu aufzubauen, Medien zu prüfen und mit dem Lernverlauf neu anzufangen kostet oft mehr.

## RemNote: Karten in verknüpfte Notizen verschieben

RemNote verändert, wo Karten entstehen. Statt ein separates Deck neben den Vorlesungsnotizen zu pflegen, erstellst du Karten direkt in einer Gliederung, einem Dokument oder einem PDF-Workflow. Das ist ein echter Grund, Anki zu verlassen, wenn das ständige Kopieren zwischen Notiz- und Karteikarten-App inzwischen den größten Aufwand verursacht.

Der Import deckt viel ab, doch bei der Warteschlange kommt es auf die Details an. RemNotes [aktuelle Anleitung zum Anki-Import](https://help.remnote.com/en/articles/6751471-importing-from-anki) fordert dich auf, eine `.apkg`-Datei mit Planungsinformationen, Deck-Voreinstellungen und Medien zu exportieren. Importiert werden der Wiederholungsverlauf und die meisten Notiztypen, darunter einfache Karten, Lückentexte und gängige Image-Occlusion-Karten.

Dieselbe Anleitung sagt, dass neu importierte Karten in eine eigene **Need to Learn**-Warteschlange geleitet werden. Der Verlauf steht RemNote also zur Verfügung, doch die Dokumentation verspricht nicht, dass deine heutige Anki-Warteschlange mit allen Fälligkeiten unverändert wieder auftaucht. Umfangreiches CSS wird ebenfalls verworfen, benutzerdefiniertes JavaScript wird nicht unterstützt, manche zur Laufzeit erzeugte Sprachausgabe funktioniert nicht, und der Import von Image Occlusion hängt von den erwarteten Notiz- und Feldnamen ab.

Importiere ein repräsentatives Deck und prüfe sowohl die Karten als auch die erste Warteschlange. Ein sauber aussehender Import ist nur die Hälfte des Tests.

Die installierten Desktop- und Mobil-Apps funktionieren nach Installation und Anmeldung offline. Die [Offline-Anleitung](https://help.remnote.com/en/articles/6752029-offline-mode) zieht eine wichtige Grenze bei Medien: Am Desktop werden alle Bilder und PDFs der Wissensdatenbank gespeichert, mobil nur einige zuletzt verwendete Bilder. Die Web-App kann in einem bereits geöffneten Tab weiterlaufen, lässt sich offline aber nicht neu öffnen.

Nutze RemNote, wenn dir verknüpfte Notizen den Umbau deiner Sammlung wert sind. Bleib bei Anki, wenn deine eigentliche Arbeitsweise auf Kartenvorlagen und Add-ons beruht.

## Mochi: lokales Markdown und vollständiger Export im eigenen Format

Mochi ist eine schlankere Alternative für Menschen, die lokale Daten, Markdown-basierte Karten und weniger Bedienelemente auf dem Bildschirm möchten. Die installierten Apps laufen auf allen gängigen Desktop- und Mobilplattformen und lassen sich [ohne Konto vollständig offline nutzen](https://mochi.cards/docs/getting-started/download-and-install/). Kostenpflichtig ist nur die Synchronisierung mit $5 pro Monat.

Der direkte Anki-Importer übernimmt den Wiederholungsverlauf. Damit liegt Mochi deutlich vor den Optionen, die nur Text akzeptieren. Auch die Umwandlung ist ungewöhnlich klar dokumentiert: Mochi entfernt CSS und JavaScript und wandelt HTML in Markdown um. Das funktioniert, wenn die Bedeutung im Text und in normalen Anhängen steckt. Wenn dagegen die Vorlage selbst die Bedeutung trägt, ist das ein Warnsignal.

Mochi bietet inzwischen zwei Scheduler. Der eigene Algorithmus bleibt die Standardeinstellung, während du [FSRS aktivieren kannst](https://mochi.cards/docs/reviewing/fsrs/), ohne deinen bisherigen Lernfortschritt in Mochi zurückzusetzen. FSRS leitet den Kartenstatus aus dem Wiederholungsverlauf ab, der Mochi vorliegt. Die Bewertung bleibt auch unter FSRS binär – Remembered oder Forgot. Anki-Nutzer, die Hard und Easy als getrennte Signale verwenden, sollten daher mit einem anderen täglichen Rhythmus rechnen.

Der Weg zurück aus der App ist klarer als bei den meisten proprietären Produkten. Ein Export im nativen [`.mochi`-Format](https://mochi.cards/docs/import-and-export/exporting/) enthält Karten, Vorlagen, Anhänge, Tags, Deckstruktur und Wiederholungsverlauf. Markdown und CSV lassen sich in anderen Systemen leichter prüfen, lassen aber den Wiederholungsverlauf und weitere Metadaten weg.

Mochis öffentliche GitHub-Repositorys enthalten [Integrationen und verwandte Werkzeuge](https://github.com/mochi-cards/open-source), nicht die Kern-App oder einen unterstützten Synchronisierungsserver. Wähle Mochi wegen seiner Offline-Nutzung und Portabilität, nicht weil du den Quellcode selbst kontrollieren willst.

## Mnemosyne: der Open-Source-Weg am Desktop

Mnemosyne kommt dem klassischen Modell aus „Programm und lokaler Datenbank“ am nächsten. Die aktuelle Version unterstützt Windows, macOS und Linux; für Offline-Wiederholungen gibt es einen Android-Client. Die Funktionsübersicht nennt Karten mit umfangreicher Formatierung, hierarchische Tags, Plugins, eine Bewertungsskala von 0 bis 5 und einen vollständigen Anki-Import mit benutzerdefinierten Kartentypen und Lerndaten.

Wenn du Anki verlassen möchtest, ohne in ein großes Notizsystem oder einen Cloud-Dienst zu wechseln, ist Mnemosyne in diesem Vergleich der direkteste Weg in eine Open-Source-App. Es bietet außerdem einen [integrierten Synchronisierungsserver](https://mnemosyne-proj.org/help/syncing), der auf einem Desktop- oder Headless-System laufen und Lerndaten mehrerer Clients zusammenführen kann.

Die Ecken und Kanten gehören zur Entscheidung. Im Android-Client [lassen sich Karten nicht bearbeiten](https://mnemosyne-proj.org/help/android-client). iOS-Nutzer müssen über den Browser-Server auf einem anderen Rechner lernen; dessen offizielle Funktionsseite warnt, dass er keinerlei Sicherheitsfunktionen hat. Ein eigener Sync-Server bedeutet außerdem, ihn erreichbar zu halten, das Netzwerk einzurichten und das Datenverzeichnis zu sichern.

Die Lizenzlage ist genauer als das einfache Etikett „GPL“: Die [Lizenzdatei des Projekts](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) verweist je nach Komponente auf unterschiedliche Bedingungen. Die [Lizenz des Kerns](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) verwendet AGPL v3 mit einer zusätzlichen Vorgabe zu Name und Namensnennung, während [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) LGPL v3 verwendet. Lies diese Dateien, wenn Änderungen oder Weitergabe Teil deines Plans sind.

## Quizlet: Wechsel für den Unterricht, nicht für eine originalgetreue Sammlung

Quizlet löst eine andere Aufgabe. Öffentliche Lernsets, von Lehrkräften verwaltete Klassen, das Teilen von Inhalten sowie Match, Test, Learn und Gruppenaktivitäten lassen sich im Unterricht leichter einsetzen als ein individuell angepasstes Anki-Profil.

Beim Import endet die Migration bei reinem Text. Quizlet kann eingefügte Zeilen in Begriffe und Definitionen umwandeln, liest aber keine `.apkg`-Datei und baut daraus weder Notiztypen noch Vorlagen, Planungsdaten oder den Wiederholungsverlauf neu auf. Wer ein Set erstellt hat, kann [das eigene Set als kopierten Text exportieren](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), allerdings ohne Bilder; kopierte Sets anderer Nutzer lassen sich nicht exportieren. Das ist Portabilität von Inhalten, nicht von Sammlungen.

Bei Quizlets Lernplanung ändert sich gerade einiges. Der neue Ablauf für [Spaced Repetition](https://quizlet.com/features/spaced-repetition) wird im Web bei Sets mit mindestens 100 Begriffen automatisch aktiviert und verwendet die Bewertungen Repeat, Hard, Okay und Easy. Quizlet kennzeichnet die mobile Unterstützung weiterhin als „coming soon“. Learn bleibt ein eigener adaptiver Übungsmodus mit tarifabhängigen Nutzungslimits.

Offline bedeutet hier ebenfalls: mobile Apps, nicht die Website. Quizlet speichert automatisch acht zuletzt verwendete Sets und lässt dich weitere herunterladen. [Flashcards und Match funktionieren offline](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps); nach der nächsten Verbindung wird der Fortschritt synchronisiert.

Wechsle zu Quizlet, wenn du Lernsets im Unterricht verteilen und gemeinsam nutzen möchtest. Nur für diese Funktionen einen ausgereiften persönlichen Lernplan neu aufzubauen lohnt sich meistens nicht.

## Brainscape: einfachere Lernlogik, aber weniger Tiefe beim Import

Brainscape fragt nach einer Selbsteinschätzung von 1 bis 5 und nutzt dieses Signal, um schwache Karten früher wieder zu zeigen. Die vollständige Formel ist nicht veröffentlicht, doch die Bedienung lässt sich in einer Lerngruppe leicht erklären.

Brainscape akzeptiert CSV-, TXT-, XLSX- und ODS-Dateien. Das ist praktisch für einfache Karten mit Vorder- und Rückseite, bedeutet aber auch, dass Vorlagen, Add-ons, Medienregeln und Anki-Lerndaten zurückbleiben. Der Export einer persönlichen Sicherung ist eine Pro-Funktion und erzeugt Dateien, die du in einem Tabellenprogramm öffnen und später erneut importieren kannst.

Laut dem aktuellen Help Center bieten die Website und die mobilen Apps von Brainscape inzwischen dieselben Kernfunktionen zum Suchen, Erstellen, Teilen und Lernen. Es beschreibt außerdem die mobile Offline-Nutzung, die manuelle Neusynchronisierung und Aktualisierungen bereits auf das Gerät heruntergeladener Klassen. Damit ist der Wechsel zwischen Offline-Nutzung und Synchronisierung praktikabel. Die Dokumentation verspricht jedoch nicht, dass das ganze Konto als vollständige lokale Bibliothek vorliegt.

Der Export eigener Decks bleibt eine [Pro-Funktion](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Es gibt weder eine offizielle Quellcodeveröffentlichung noch einen Weg zum Self-Hosting.

Brainscape ist einen Blick wert, wenn Anki für die Lerngruppe zu viele Einstellungen mitbringt. Für jemanden, der diese Einstellungen bereits gut nutzt, ist es keine gute Wechseloption.

## SuperMemo: Wähle die Methode und akzeptiere einen Neustart

Der aktuelle Dienst SuperMemo.com ist eine Sprachlernplattform für Web, iOS und Android, die auf SuperMemos proprietärer Planungsmethode basiert. Er ist ein anderes Produkt als die ältere Windows-Version, die langjährige SuperMemo-Nutzer möglicherweise kennen.

Hier entscheidest du dich für eine Methode und einen Katalog, nicht für eine saubere Anki-Migration. SuperMemo unterstützt das [Erstellen mehrerer Karten durch Einfügen von Frage-und-Antwort-Zeilen mit Trennzeichen](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning), begrenzt auf 100 Karten pro Import. Ich habe für den gehosteten Dienst weder einen aktuellen offiziellen `.apkg`-Importer noch einen Exportweg für Nutzer gefunden. Vorlagen, Add-ons, Medienstruktur und Wiederholungsverlauf kommen über diesen dokumentierten Weg also nicht mit.

Heruntergeladene Kurse lassen sich in den mobilen Apps offline lernen. Die [Offline-Anleitung](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) schließt KI-Funktionen, das Hinzufügen von MemoCards, Suche, Aufnahmen, Statistiken und den Kurseditor aus. Bereite das Material deshalb vor und synchronisiere es, bevor du die Verbindung trennst.

Wähle SuperMemo, wenn dir die eigene Methode oder der Kurskatalog wichtig genug ist, um mit einem neuen Lernplan zu beginnen. Wenn dein bestehender Lernplan erhalten bleiben soll, löst das Produkt das falsche Problem.

## Flashcards: Quellcodezugriff auf den gesamten Stack, aber der schwächste Anki-Import

Flashcards legt den gesamten Stack offen. Das [MIT-lizenzierte Repository](https://github.com/kirill-markin/flashcards-open-source-app) enthält die Web-App, iOS- und Android-Clients, das Backend, Offline-Synchronisierung, Infrastruktur, eine [öffentliche API](/docs/api/) und einen [MCP-Server](/docs/mcp-connector/). Wiederholungen verwenden [FSRS](/docs/architecture/#scheduling). Web, iOS und Android schreiben zuerst lokal, sammeln Änderungen in einer Outbox und synchronisieren sie nach der nächsten Verbindung.

Das macht Flashcards nicht mit Anki kompatibel. Flashcards kann weder `.apkg` noch `.colpkg` lesen. Die unterstützte [Anki-Migration per TXT](/blog/migrate-from-anki-txt-export-open-source-flashcards/) ist ein geprüfter, KI-gestützter Workflow zum Entwerfen überwiegend textbasierter Karten. Vorlagen, Add-ons, Deck-Hierarchie, Fälligkeitstermine, Intervalle und Wiederholungsereignisse bleiben nicht erhalten. Medienverweise in einer TXT-Datei sind keine Mediendateien. Decks mit vielen Medien müssen daher getrennt neu aufgebaut und geprüft werden.

Auch das eigene `flashcards.zip`-Paket von Flashcards sichert weniger als ein vollständiges Backup. Es verschiebt Karten, Tags und zugehörige Medien zwischen Flashcards-Workspaces. Wiederholungsverlauf, FSRS-Status, vollständige Deck-Strukturen, Workspace-Einstellungen und Konten werden nicht übertragen.

Der gehostete Kern ist [während der Beta kostenlos](/pricing/). Das Selbsthosting des Produktiv-Stacks ist keine Docker-Installation mit einem einzigen Befehl: Der [Self-Hosting-Leitfaden](/docs/self-hosting/) verwendet AWS CDK und erfordert AWS-Dienste sowie Cloudflare, Resend, Sentry, Secrets, Migrationen, Backups, Wiederherstellungen und Upgrades. Docker Compose ist für die Entwicklung gedacht, nicht als unterstütztes Produktiv-Deployment.

Nutze Flashcards, wenn der vollständige Zugriff auf den Quellcode und ein vom Betreiber kontrolliertes Backend der Grund für den Wechsel sind und deine Karten einfach genug für einen sicheren Neuaufbau sind. [Öffne die gehostete App](https://app.flashcards-open-source-app.com/), um ein kleines temporäres Deck auszuprobieren. Bleib bei Anki – oder teste RemNote, Mochi oder Mnemosyne –, wenn die originalgetreue Übernahme des Lernstatus Vorrang hat.

## Welche Anki-Alternative funktioniert unter iOS ohne böse Überraschungen bei der Migration?

Eine „Anki-Alternative für iOS“ kann zwei Dinge meinen: eine native iPhone-App oder einen Ersatz für den [einmaligen Kaufpreis von $24.99 für AnkiMobile](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387).

RemNote, Mochi, Quizlet, Brainscape, SuperMemo und Flashcards haben alle iOS-Apps. Mnemosyne nicht. Damit bleibt die Frage nach der Migration:

- **Mochi** erhält mehr Daten als die iOS-Optionen mit reinem Textimport: Es importiert den Wiederholungsverlauf aus `.apkg`, wandelt die Inhalte aber in Markdown um und verwendet binäre Bewertungen.
- **RemNote** importiert ebenfalls den Wiederholungsverlauf aus `.apkg`. Teste jedoch die **Need to Learn**-Warteschlange, statt anzunehmen, dass der heutige Anki-Lernplan erhalten bleibt.
- **Quizlet** eignet sich zum Verteilen von Sets im Unterricht, doch der Anki-Weg ist rein textbasiert und der neue Spaced-Repetition-Ablauf noch nicht auf Mobilgeräten verfügbar.
- **Flashcards** ist die Open-Source-Option mit nativem iOS-Client, setzt bei der Migration aus Anki aber den Lernstatus zurück.
- **Brainscape** und **SuperMemo** sind nur sinnvoll, wenn dir ihre jeweilige Wiederholungsmethode den Neuaufbau der Karten und des Lernplans wert ist.

Bevor du AnkiMobile wegen des Preises verlässt, vergleiche diesen Preis mit den Kosten eines Abos und den Stunden für die Nacharbeit an der Migration. Ein einmaliger App-Kauf kann günstiger sein als eine kostenlose App, die eine ausgereifte Sammlung in ein manuelles Projekt verwandelt.

## Wann es sicherer ist, bei Anki zu bleiben

Bei Anki zu bleiben ist eine bewusste Entscheidung, kein Versäumnis, etwas Neueres zu wählen. Bleib bei Anki, wenn einer dieser Punkte zutrifft:

- deine Sammlung hängt von benutzerdefinierten Vorlagen, CSS, JavaScript oder Add-ons ab;
- Image Occlusion, Audio oder andere Medien sind für den Inhalt entscheidend;
- eine Notiz erzeugt mehrere Kartenrichtungen, die verknüpft bleiben müssen;
- jahrelanger Wiederholungsverlauf und aktuelle Fälligkeitstermine sind wertvoller als ein neuer Editor;
- du bist auf einen Desktop-Workflow oder eine Plattformkombination angewiesen, die die Alternative nicht abdeckt;
- der Offline-Modus des Ersatzes funktioniert nur in einer App-Version, die du nicht nutzen wirst;
- du möchtest theoretisch selbst hosten, aber keinen Server betreiben, absichern, regelmäßig sichern und aktualisieren;
- die Alternative löst kein wiederkehrendes Problem und sieht lediglich aufgeräumter aus.

Anki bietet weiterhin ein ausgereiftes Add-on-Ökosystem, flexible Notiz- und Kartenvorlagen, FSRS- und klassische Scheduler-Einstellungen, lokal installierbare Clients und Paketformate, die eine ganze Sammlung transportieren können. Keines der oben genannten Produkte bildet all das vollständig nach.

Für einen engeren Vergleich der Kontrollgrenzen lies den [Leitfaden zu Open-Source-Karteikarten-Apps](/blog/best-open-source-flashcard-apps-2026/). Wenn das Offline-Verhalten entscheidet, unterscheidet der [Vergleich von Offline-Flashcard-Apps](/blog/best-offline-flashcards-app/) zwischen installierten Apps, zwischengespeicherten Inhalten und Browser-Tabs.

## Eine Migrationscheckliste, die auch mit „Nein“ enden darf

Beginne nicht mit deiner gesamten Sammlung. Richte einen Test ein, der scheitern darf.

1. **Erstelle ein Wiederherstellungspaket.** Exportiere eine `.colpkg`-Datei mit Medien, speichere sie außerhalb des Anki-Profils und lege eine zweite Kopie an einem anderen Ort ab.
2. **Wähle das schwierige Deck.** Nimm Lückentexte, benutzerdefinierte Felder, Vorwärts- und Rückwärtskarten, verschachtelte Decks, Tags, Bilder, Audio und genug Wiederholungsverlauf in das Testdeck auf, damit die Umwandlung des Lernplans sichtbar wird.
3. **Exportiere das Format, das das Zielsystem tatsächlich unterstützt.** Verwende für einen direkten Importer `.apkg` mit Planungsinformationen, Voreinstellungen und Medien. Nutze Notes in Plain Text nur, wenn du einen reinen Neuaufbau der Inhalte akzeptierst.
4. **Dokumentiere den Ausgangszustand.** Notiere die Anzahl von Notizen und Karten, Tag- und Deck-Namen, die Zahl der Medien, einige Fälligkeitstermine und Intervalle sowie die erwartete Zahl der Karten, die jeder Notiztyp erzeugt.
5. **Importiere in einen temporären Bereich.** Überschreibe das Quellprofil nicht und importiere den ersten Test nicht in eine dauerhafte Bibliothek im Zielsystem.
6. **Prüfe Inhalte und Lernstatus getrennt.** Korrekte Vorder- und Rückseiten beweisen nicht, dass Lückentexte, Medien, Geschwisterkarten, Wiederholungsverlauf oder der nächste Fälligkeitstermin erhalten blieben.
7. **Teste den Offline-Kaltstart auf jedem echten Gerät.** Wiederhole und bearbeite Karten, schließe die App vollständig, öffne sie ohne Internetverbindung erneut, stelle die Verbindung wieder her und prüfe anschließend ein anderes Gerät.
8. **Beobachte die Warteschlange, bevor die Lernpläne auseinanderlaufen.** Vergleiche die ersten fälligen Karten und einige Intervalle, bevor du dieselben Karten aus deinem normalen Lernbetrieb in beiden Apps bewertest. Nach der ersten Wiederholung im anderen System sind die beiden Lernpläne unabhängig.
9. **Teste den Ausstieg, bevor du dich festlegst.** Exportiere aus dem Zielsystem und prüfe, was du wiederherstellen könntest, wenn du es im nächsten Jahr verlässt.
10. **Behalte Anki und das unveränderte Backup.** Lösche beides erst, wenn der Ersatz den Alltagstest bestanden hat und du jeden Verlust bewusst akzeptiert hast.

Wenn das Zielsystem nur Text akzeptiert, folge dem vollständigen [sicheren Workflow für den TXT-Export](/blog/migrate-from-anki-txt-export-open-source-flashcards/). Er trennt die `.colpkg`-Wiederherstellung vom portablen Arbeitsformat und zeigt ausdrücklich, dass die Lernplanung neu beginnt.

## Triff die Entscheidung in dieser Reihenfolge

Beginne mit dem Teil, den du auf keinen Fall verlieren kannst:

1. Wenn exakte Vorlagen, Add-ons oder die aktuelle Warteschlange unverzichtbar sind, bleib bei Anki, sofern ein repräsentativer `.apkg`-Test nichts anderes beweist.
2. Wenn Notizen und Karten ein gemeinsames System bilden sollen, teste RemNote. Prüfe die **Need to Learn**-Warteschlange, nicht nur die importierten Seiten.
3. Wenn lokales Markdown und prüfbare Exporte wichtiger sind als die Darstellung aus Anki, teste Mochi.
4. Wenn du eine auf Karteikarten spezialisierte Open-Source-Desktop-App mit direktem Anki-Import möchtest, teste Mnemosyne – und prüfe, ob die mobilen Einschränkungen zu deiner Routine passen.
5. Wenn der Einsatz im Unterricht oder eine einfachere gemeinsame Wiederholungsschleife das eigentliche Problem ist, baue ein kleines Set in Quizlet oder Brainscape neu auf.
6. Wenn du ausdrücklich SuperMemos Methode möchtest, akzeptiere einen neuen Lernplan. Wenn du ausdrücklich Zugriff auf den Quellcode des gesamten Stacks, Self-Hosting, API- und MCP-Zugriff möchtest, akzeptiere den verlustbehafteten Neuaufbau der Inhalte und den Betriebsaufwand von Flashcards.

Einen Funktionsvergleich dreier sehr unterschiedlicher Modelle findest du unter [Anki vs. Quizlet vs. Flashcards](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/).

Eine einfache Regel hilft: Wechsle, wenn der Gewinn konkret ist und der Verlust einen echten Test überstanden hat. Wenn dein repräsentatives Deck diese Prüfung nicht sauber besteht, ist es keine konservative Notlösung, bei Anki zu bleiben. Es ist das Ergebnis des Vergleichs.
