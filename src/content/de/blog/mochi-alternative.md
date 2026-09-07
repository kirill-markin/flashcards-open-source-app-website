---
title: "Mochi Flashcards im Test (2026): Kostenlos, offline und im Vergleich mit Anki"
description: "Mochi Flashcards im Test auf Grundlage geprüfter Quellen: kostenloser Tarif, Offline-Apps, Markdown-Notizen, FSRS, Sync, Anki-Import, Exporte und Grenzen beim Self-Hosting."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi flashcards"
  - "mochi lernkarten"
  - "mochi vs anki"
  - "anki vs mochi"
  - "ist mochi kostenlos"
  - "mochi offline"
  - "mochi preise"
  - "mochi hosting"
  - "markdown lernkarten"
  - "mochi spaced repetition"
---

Mochi beginnt nicht mit einem klassischen Formular für Vorder- und Rückseite, sondern mit einem Markdown-Dokument. Eine Zeile aus drei Bindestrichen teilt das Dokument in Seiten, die sich abfragen lassen. Ohne diese Trennlinie bleibt es eine Notiz. Du kannst es mit einer anderen Karte verknüpfen oder archivieren: Dann bleibt es durchsuchbar, erscheint aber nicht in der Wiederholungswarteschlange.

Diese kleine Trennlinie zeigt ziemlich gut, für wen sich **Mochi Flashcards** eignen. Mochi passt zu dir, wenn du Notizen und Spaced Repetition in derselben Local-first-App nutzen möchtest – besonders, wenn Markdown, Backlinks und die einfache Entscheidung zwischen Remembered und Forgot gut zu dir passen. Weniger überzeugend ist Mochi für langjährige Anki-Nutzer, deren Sammlung von generierten Kartenvarianten, individuellem HTML/CSS, JavaScript, Add-ons oder detaillierten Scheduler-Einstellungen abhängt.

Für die Nutzung auf nur einem Gerät ist der kostenlose Tarif mehr als eine Testversion: Du musst dich nicht registrieren, und Mochi dokumentiert eine unbegrenzte Offline-Nutzung. Der Haken: Die geräteübergreifende Synchronisierung gehört zum **Pro-Tarif für US$5 pro Monat**. Für Anki-Nutzer können mögliche Verluste bei der Migration schwerer wiegen. Mochi kann ein Anki-Paket samt Wiederholungsverlauf importieren, aber nicht jede Vorlage, Gestaltung, jedes Skript, jede Scheduler-Einstellung und jedes Add-on-Verhalten bewahren.

> **Offenlegung:** Ich bin Kirill Markin und entwickle die [Flashcards Open Source App](/de/). Dieser Workflow-Test stützt sich auf geprüfte Quellen. Ich behaupte nicht, Mochi selbst praktisch getestet zu haben. Es gibt keine Affiliate-Links. Im Mittelpunkt steht der Vergleich zwischen Mochi und Anki; mein eigenes Produkt erscheint erst gegen Ende als klar gekennzeichnete Alternative.

**Stand der Angaben:** 7. September 2026. Die neueste sichtbare [Mochi-Version](https://mochi.cards/changelog/) war Version 26.8.2 vom 10. August 2026. Preise und Angaben in App-Stores können sich ändern.

![Ein Buchrestaurator testet ein kleines Leporello aus verknüpften Karten, während das Originalarchiv sicher verpackt bleibt](/blog/mochi-alternative-v3.png)

## Das kurze Urteil

- **Wähle Mochi**, wenn du Markdown-Notizen und Lernkarten gemeinsam verwalten, auf einem Gerät ohne Konto offline lernen, Backlinks nutzen und bei Wiederholungen nur zwischen zwei Bewertungen wählen möchtest.
- **Wähle Anki**, wenn du ausgereifte Notiztypen, HTML/CSS-Vorlagen, Add-ons, kostenlose gehostete Synchronisierung, vier Bewertungen oder umfassendere FSRS-Einstellungen brauchst.
- **Wechsle noch nicht**, wenn du bereits regelmäßig wiederholst und kein konkretes Workflow-Problem nennen kannst, das Mochi lösen würde. Eine neue Oberfläche reicht nicht als Grund, jahrelange Planungsdaten und individuelle Karten aufs Spiel zu setzen.
- **Teste vor der Migration**, wenn du deine Sammlung langfristig in Anki aufgebaut hast. Mochi akzeptiert `.apkg`-Dateien und kann den Wiederholungsverlauf übernehmen, wandelt HTML jedoch in Markdown um und entfernt CSS sowie JavaScript.

## Mochi vs. Anki auf einen Blick

| Entscheidung | Mochi | Anki |
|---|---|---|
| Am besten geeignet für | Markdown-Nutzer, die mit verknüpften Notizen arbeiten und ihre Notizen neben den Lernkarten führen möchten | Lernende, die ein ausgereiftes, konfigurierbares Lernkartensystem möchten |
| Kartenerstellung | Durch `---` erhält ein Markdown-Dokument mehrere Seiten; Felder und Vorlagen sind ebenfalls verfügbar | Notizen enthalten Felder; HTML/CSS-Vorlagen erzeugen eine oder mehrere Karten |
| Ablauf der Wiederholung | Neue Karten durchlaufen zunächst eine Lernphase; gelernte Karten verwenden Forgot / Remembered | Karten verwenden Again / Hard / Good / Easy |
| Lernplanung | Standardmäßig Mochis eigener Algorithmus; FSRS ist optional | FSRS oder das ältere SM-2 mit umfassenderen Werkzeugen zur FSRS-Anpassung |
| Kostenlose Nutzung | Keine Registrierung und unbegrenzte Offline-Nutzung | Kostenlose Desktop-Apps und kostenlose AnkiWeb-Synchronisierung; die offizielle iOS-App ist kostenpflichtig |
| Geräteübergreifende Synchronisierung | Pro, US$5 pro Monat | Kostenlos über AnkiWeb |
| Plattformen | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, offizielles AnkiMobile, unabhängiges AnkiDroid |
| Übertragbare Formate | Native `.mochi`-Exporte sowie Markdown und CSV | Native `.colpkg`- und `.apkg`-Dateien sowie tabulatorgetrennter Text |
| Grenzen bei Daten und Hosting | Local-first; die Kernanwendung wird nicht als Open Source angeboten, und ein unterstützter selbst gehosteter Sync-Dienst ist nicht dokumentiert | Das Haupt-Repository steht unter der AGPL; ein offizieller selbst gehosteter Sync-Server ist dokumentiert |

Der entscheidende Unterschied ist **die Einfachheit eines notizbasierten Ansatzes gegenüber der Kontrolle über die gesamte Sammlung**.

## Worauf die Mochi-Oberfläche aufbaut

Die Oberfläche von Mochi erschließt sich am besten, wenn du eine einzelne Karte durch den gesamten Ablauf verfolgst.

Jede Karte gehört zu einem Deck. Ein Klick auf **New Card** öffnet eine freie Markdown-Fläche statt fester Felder für Frage und Antwort. Eine Karte kann Überschriften, Listen, Code, Bilder, strukturierte Felder und Links enthalten. Mit `---` zwischen den Blöcken erzeugst du zwei oder mehr abfragbare Seiten. `[[Doppelte Klammern]]` verweisen auf eine andere Karte; Mochi erstellt automatisch einen Backlink. Die offizielle [Kartenübersicht](https://mochi.cards/docs/cards/) beschreibt außerdem Vorlagen, deren Platzhalter strukturierte Feldwerte darstellen.

Karten können zwei Aufgaben übernehmen, ohne in getrennten Systemen zu liegen:

- Eine Lernkarte hat mehrere Seiten und wird per Spaced Repetition eingeplant.
- Eine Referenznotiz kann im selben Deck bleiben und archiviert werden. Dadurch verschwindet sie aus den Warteschlangen für neue und fällige Karten, ohne dass Inhalt, Tags, Links oder Verlauf gelöscht werden.

[Deck-Ansichten](https://mochi.cards/docs/decks/custom-views/) sind gespeicherte Kombinationen aus Filtern, Sortierung und Layout. Du kannst eine Rasteransicht zum normalen Durchsehen behalten und weitere Ansichten für einen Tag, den Fälligkeitsstatus, eine niedrige Behaltensrate oder kürzlich wiederholte Karten anlegen. Eine Ansicht lässt sich außerdem als Paukrunde nutzen, ohne die normale Planung oder den Wiederholungsverlauf zu verändern. Das beschreibt die Oberfläche genauer als das bloße Etikett „aufgeräumt“: Dasselbe Deck kann als Notizbuch, gefilterte Datenbank und Lernwarteschlange dienen.

Die [tägliche Wiederholung](https://mochi.cards/docs/getting-started/reviewing-cards/) besteht aus zwei Phasen. Unter **New cards** nimmst du eine Karte entweder in den Wiederholungsplan auf oder wählst Again, damit sie kurz darauf erneut erscheint. Nach der Lernphase zeigt eine fällige Karte die nächste Seite und fragt nach **Forgot** oder **Remembered**. Bei Forgot landet die Karte zunächst in einer eigenen Warteschlange, bevor Mochi den Lernfortschritt zurücksetzt. Die Entscheidung während einer Wiederholung bleibt damit bewusst einfach.

## Ist Mochi kostenlos, und was funktioniert offline?

Ja. Was „kostenlos“ und „offline“ genau bedeuten, hängt allerdings davon ab, wo du Mochi verwendest. Die [aktuellen Mochi-Preise](https://mochi.cards/) lauten:

- **Free:** dauerhaft US$0, keine Registrierung erforderlich und unbegrenzte Offline-Nutzung.
- **Pro:** US$5 pro Monat, einschließlich geräteübergreifender Synchronisierung, Veröffentlichung von Decks, dynamischer Felder, KI-Integration und E-Mail-Support.

Mochi läuft unter macOS, Windows, Linux, iOS und Android sowie im Web. Die [Anleitung zum Download und zur Installation](https://mochi.cards/docs/getting-started/download-and-install/) zieht in der Praxis folgende Grenze:

| Oberfläche | Was kostenlos und offline bedeutet |
|---|---|
| Installierte Desktop- oder Mobil-App | Du kannst Mochi ohne Konto offline verwenden. Die Daten liegen auf dem Gerät; damit lässt sich die App auf einem einzelnen Gerät vollständig kostenlos nutzen. |
| Web-App ohne Pro | Inhalte liegen im Offline-Speicher des Browsers. Mochi warnt, dass ein Browser diese Daten ohne Vorwarnung löschen kann. |
| Dieselbe Sammlung auf mehreren Geräten | Die automatische geräteübergreifende Synchronisierung ist eine Pro-Funktion, obwohl jede installierte App offline arbeiten kann. |

Offline-Nutzung und Synchronisierung sind zwei getrennte Funktionen. Du brauchst Pro nicht, nur um in einer installierten App Karten zu erstellen oder zu wiederholen. Der Tarif ist aber nötig, wenn dein aktueller Sammlungsstand automatisch auf Laptop und Smartphone verfügbar sein soll. Bewahre wichtige Daten aus dem kostenlosen Tarif zusätzlich als native Sicherung auf, statt ein Gerät – und erst recht den Browser-Speicher – als einzige Kopie zu behandeln.

Wenn das Offline-Verhalten den Ausschlag gibt, vergleiche deinen genauen Geräte-Workflow in [Funktioniert Anki offline?](/de/blog/does-anki-work-offline/) und im umfassenderen [Leitfaden zu Offline-Lernkarten-Apps](/de/blog/best-offline-flashcards-app/).

## Markdown-Lernkarten sind der eigentliche Grund für Mochi

Mochis eigentlicher Vorteil liegt darin, dass du dein Lernmaterial als Markdown pflegst.

Eine Mochi-Karte bleibt als Text lesbar. Dasselbe Dokument kann eine kurze Erklärung, einen Codeblock, Links zu verwandten Ideen und Trennlinien zwischen den abfragbaren Seiten enthalten. Wenn du wiederkehrende Strukturen brauchst, kannst du zusätzlich Felder und Vorlagen verwenden. Ist eine Vorlage zugewiesen, rendert Mochi deren Markdown mit Platzhaltern für die Felder. Das eigene Markdown der Karte erscheint dabei nicht, wird aber auch nicht gelöscht.

Anki folgt einem anderen Modell. Eine Notiz speichert Felder, und [Kartenvorlagen](https://docs.ankiweb.net/templates/intro.html) bestimmen, welche Felder erscheinen und welche Karten daraus entstehen. Die Vorlagen verwenden HTML und CSS für die Gestaltung. Eine einzige Vokabelnotiz kann so eine Karte zum Erkennen und eine zum aktiven Abrufen erzeugen, während die zugrunde liegenden Daten nur einmal gespeichert werden.

Diese Struktur gibt Anki mehr Möglichkeiten für bedingte Layouts, generierte Kartenvarianten, eingetippte Antworten, individuelle Gestaltung und durch Add-ons erweiterte Abläufe. Gleichzeitig ist Anki keine native App für Markdown-Lernkarten. Wer Anki mit Markdown nutzen möchte, braucht eine zusätzliche Konvertierungs- oder Add-on-Ebene.

Die praktische Frage ist einfach: Möchtest du eine Notiz, die zur Karte werden kann, oder einen strukturierten Notiztyp, der mehrere Karten erzeugt? Mochi ist auf das erste Modell zugeschnitten, Anki auf das zweite.

## Mochis Spaced Repetition umfasst inzwischen FSRS

Vergleiche, laut denen Mochi kein FSRS bietet, sind veraltet. Mochi führte 2025 eine Vorschauversion von FSRS ein und hat seitdem weitere Korrekturen am Scheduler veröffentlicht. Dennoch bleibt [Mochis eigener Algorithmus die Standardeinstellung](https://mochi.cards/docs/reviewing/fsrs/).

Der Standardalgorithmus verändert die Intervalle nach jeder Bewertung mit Remembered oder Forgot anhand fester Multiplikatoren. Wenn du in den Review Settings zu FSRS wechselst, werden bereits gelernte Karten ohne Verlust ihres Verlaufs auf FSRS umgestellt. Du kannst eine angestrebte Behaltensrate festlegen, eigene Parameter eingeben und später wieder zurückwechseln.

Mochi behält unter beiden Schedulern seine binären Bewertungen bei:

- **Forgot** entspricht in FSRS der Bewertung Again.
- **Remembered** entspricht in FSRS der Bewertung Good.

Laut Mochis Dokumentation funktioniert die binäre Bewertung mit FSRS, liefert dem Algorithmus aber weniger Informationen als zusätzliche Bewertungen mit Hard und Easy. Mochi akzeptiert optimierte eigene Parameter, enthält jedoch keinen integrierten Optimierer. Für persönliche Parameter brauchst du einen externen FSRS-Optimierer und den Mochi-Wiederholungsverlauf.

[Ankis FSRS-Einstellungen](https://docs.ankiweb.net/deck-options.html#fsrs) gehen weiter. Die gewünschte Behaltensrate und die Parameter lassen sich an Voreinstellungen binden, der integrierte Optimierer kann Parameter an den Wiederholungsverlauf anpassen, und der Simulator schätzt die Zahl der Wiederholungen oder Lernminuten bei verschiedenen Einstellungen. Anki erfasst außerdem vier Ergebnisse: Again, Hard, Good und Easy.

Diese zusätzlichen Buttons helfen nur, wenn du sie konsequent verwendest. Das Anki-Handbuch wertet Hard als erfolgreichen Abruf. Wenn du Hard drückst, obwohl du die Antwort vergessen hast, erhält FSRS die falsche Information und kann zu lange Intervalle erzeugen.

Wähle Mochis binäre Bewertung, wenn die klare Entscheidung zwischen gewusst und vergessen deine Lernsitzung übersichtlich hält. Wähle Anki, wenn du feiner abstufen und den Optimierer, die Steuerung der Behaltensrate, Voreinstellungen oder den Arbeitslast-Simulator nutzen möchtest. Wenn es dir eher um die Lernalgorithmen als um die Apps geht, lies [FSRS vs. SM-2](/de/blog/fsrs-vs-sm-2/).

## Bei Mochi und Anki entstehen die Kosten an anderer Stelle

Wer nur an einem Computer lernt, kann beide Apps kostenlos nutzen. Sobald mehrere Geräte ins Spiel kommen, entstehen die Kosten an unterschiedlicher Stelle.

Mochi verlangt für die Pro-Synchronisierung **US$5 pro Monat** und bündelt sie mit der Veröffentlichung von Decks, dynamischen Feldern, KI-Integration und Support. Ankis Desktop-Apps sind kostenlos, und laut der [offiziellen Anki-Website](https://apps.ankiweb.net/) ist auch die Synchronisierung über AnkiWeb kostenlos. AnkiMobile ist die kostenpflichtige offizielle App für iPhone und iPad; AnkiDroid ist ein kostenloser, unabhängig entwickelter Android-Client.

Welche App günstiger ist, hängt also von deinen Geräten ab:

- Auf einem Computer können beide kostenlos sein.
- Bei mehreren Desktop- oder Android-Geräten kommst du dank Ankis kostenloser gehosteter Synchronisierung ohne Abonnement aus.
- Auf dem iPhone oder iPad kommt bei Anki ein einmaliger App-Kauf hinzu, während Mochi für die geräteübergreifende Synchronisierung ein laufendes Pro-Abo verlangt.
- Wer bei Mochi ohnehin Decks veröffentlichen, dynamische Felder oder die KI-Integration nutzen möchte, sieht die Synchronisierung womöglich als Teil des Pakets und nicht als dessen einzigen Kostenfaktor.

Prüfe den regionalen App Store, bevor du die genauen iOS-Gesamtkosten vergleichst. Dieser Test nennt bewusst keinen festen App-Store-Preis, weil er je nach Markt variieren kann.

## Mochi-Hosting: Local-first ist nicht gleich Self-Hosting

Drei Bezeichnungen werden oft in einen Topf geworfen:

- **Local-first** bedeutet, dass die Arbeitskopie auf deinem Gerät liegt und die App auch ohne ihren Cloud-Dienst funktioniert.
- **Open Source** bedeutet, dass der Quellcode unter einer Lizenz verfügbar ist, die Einsicht und Änderungen erlaubt.
- **Self-hosted** bedeutet, dass das Produkt einen unterstützten Weg dokumentiert, den betreffenden Dienst auf deiner eigenen Infrastruktur zu betreiben.

Mochi ist klar als Local-first-App dokumentiert. Seine Kernanwendung stellt Mochi aber nicht als Open Source dar: Der Link „Open source“ in der Fußzeile der öffentlichen Website führt zu [einer Sammlung von Integrationen](https://github.com/mochi-cards/open-source), nicht zur Kernanwendung. Auch einen unterstützten, selbst gehosteten Ersatz für die Pro-Synchronisierung dokumentiert die Website nicht.

Wenn du nach **Mochi-Hosting** suchst, weil du einen eigenen Server betreiben möchtest, liegt hier die Grenze: Du kannst deine Daten lokal speichern und native Sicherungen anlegen, aber der dokumentierte Weg über mehrere Geräte führt über Mochi Pro. Local-first gibt dir mehr Kontrolle über deine Daten, ist jedoch kein Self-Hosting.

Ankis Haupt-Repository steht [unter der AGPL in Version 3 oder neuer](https://github.com/ankitects/anki/blob/main/LICENSE), wobei für einige Komponenten Ausnahmen aufgeführt sind. Das offizielle Handbuch dokumentiert außerdem einen [selbst gehosteten Sync-Server](https://docs.ankiweb.net/sync-server.html) für fortgeschrittene Nutzer. Dieser Server ersetzt die AnkiWeb-Synchronisierung für kompatible Clients; er ist keine selbst gehostete Kopie der AnkiWeb-Website. Wer ihn betreibt, muss sich selbst um Kommandozeile, Netzwerk, Firewall, Protokoll und Updates kümmern.

## Was ein Anki-Import bewahrt – und was er verändert

Laut Mochis [Importdokumentation](https://mochi.cards/docs/import-and-export/importing/) lassen sich Anki-Dateien im Format `.apkg` einschließlich des Wiederholungsverlaufs importieren. „Importiert“ und „gleichwertig“ sind aber nicht dasselbe.

Beim Import wandelt Mochi HTML in Markdown um und entfernt CSS sowie JavaScript. Das ist eine Formatkonvertierung zwischen zwei unterschiedlichen Kartenmodellen. Einfache Karten mit Vorder- und Rückseite sind der leichteste Fall. Karten, die von Gestaltung, Vorlagenlogik, Texteingaben oder JavaScript abhängen, musst du nach dem Import prüfen.

Auch der Wiederholungsverlauf erfordert beim Export eine ausdrückliche Auswahl. Laut Ankis [Exportanleitung](https://docs.ankiweb.net/exporting.html) bestimmt **Include Scheduling Information**, ob der Wiederholungsverlauf in das Paket gelangt. Wenn du die Option deaktivierst, kann Mochi keinen Verlauf übernehmen, den die `.apkg`-Datei nie enthalten hat.

Selbst mit übernommenem Verlauf solltest du keine identischen künftigen Fälligkeitstermine erwarten. Die beiden Apps können unterschiedliche Scheduler, Bewertungen, angestrebte Behaltensraten, Parameter, Lernschritte und Deck-Einstellungen verwenden. Übernommene Verlaufsdaten liefern dem neuen Scheduler zwar Anhaltspunkte, machen die beiden Systeme aber nicht identisch.

## Native Sicherungen und portabler Text erfüllen unterschiedliche Aufgaben

Bevor du etwas verschiebst, solltest du eine Sicherung anlegen, mit der sich das ursprüngliche System wiederherstellen lässt. Ein lesbarer Export ist nützlich, stellt das System aber nicht zwangsläufig wieder her.

Mochis [Anleitung zu Sicherungen](https://mochi.cards/docs/getting-started/backing-up/) beschreibt zwei native Sicherungsmöglichkeiten:

- Eine Kopie des gesamten Benutzerverzeichnisses bewahrt Inhalte, Wiederholungsverlauf, Anhänge, App-Einstellungen und Anmeldestatus.
- Ein `.mochi`-Export bewahrt Decks, Karten, Vorlagen und Felder, Anhänge, Tags und Metadaten, Wiederholungsverlauf, Kartenreihenfolge und Deck-Struktur.

Mochis [Markdown- und CSV-Exporte](https://mochi.cards/docs/import-and-export/exporting/) sind für den Wechsel zwischen Systemen gedacht. Markdown erstellt eine Datei pro Karte und Ordner für Unterdecks, lässt jedoch Wiederholungsverlauf, Kartenreihenfolge, Vorlagen und Metadaten-Tags weg – außer die Tags stehen im Markdown selbst. CSV kann Vorlagenfelder oder gerenderte Vorder- und Rückseiten exportieren, bewahrt aber weder Wiederholungsverlauf noch Vorlagen oder Metadaten-Tags, sofern sie nicht in den Inhalt eingebettet sind.

Anki unterscheidet ähnlich:

- Eine `.colpkg`-Datei exportiert die gesamte Sammlung einschließlich der Lernplanung und kann Medien enthalten. Beim Import ersetzt sie die Karten in der Anki-Zielsammlung.
- Eine `.apkg`-Datei exportiert ein Deck samt untergeordneten Decks und bietet Optionen für Planungsdaten, Voreinstellungen und Medien.
- Notizen im Klartext verwenden tabulatorgetrennte Felder mit eingebetteter HTML-Formatierung. Sie bewahren bearbeitbare Inhalte, nicht das vollständige Verhalten der Sammlung.

Für den Wechsel von Mochi zurück zu Anki brauchst du normalerweise CSV. Anki kann [Textspalten Notizfeldern zuordnen](https://docs.ankiweb.net/importing/text-files.html), doch Mochi-Links, mehrseitige Karten, Vorlagen und der Wiederholungsverlauf werden durch diese Datei nicht zu gleichwertigen Anki-Objekten. Bewahre den `.mochi`-Export auch dann auf, wenn die Anki-Kopie korrekt aussieht.

## Teste ein repräsentatives Deck, ohne dein Original zu verändern

Ein Migrationsdialog beweist nur, dass eine Datei akzeptiert wurde. Er beweist weder, dass deine echte Sammlung weiterhin funktioniert, noch dass du brauchbare Inhalte zurückübertragen kannst. Teste beide Richtungen, während dein normales Anki-Profil unberührt bleibt.

1. **Sichere deine gesamte Anki-Sammlung.** Exportiere eine `.colpkg`-Datei mit Medien und speichere sie außerhalb des aktiven Profils.
2. **Prüfe, ob sich die Sicherung öffnen lässt.** Erstelle ein leeres temporäres Anki-Profil und importiere dort die `.colpkg`-Datei. Der Import eines Sammlungspakets ersetzt die Zielsammlung – genau deshalb ist das temporäre Profil wichtig.
3. **Erstelle im temporären Profil ein repräsentatives Deck.** Halte es klein genug, um jede Karte einzeln zu prüfen. Nimm trotzdem alle Funktionen auf, auf die du angewiesen bist: einfache Karten, Karten in beide Richtungen, Lückentexte, individuelle Vorlagen, CSS, JavaScript, Bilder, Audio, Formeln, Tags, verschachtelte Decks und Wiederholungsverlauf.
4. **Exportiere dieses Deck als `.apkg`.** Schließe Planungsdaten, Voreinstellungen und Medien ein, wenn sie wichtig sind. Mit diesen Optionen landen die Daten im Anki-Paket; sie versprechen nicht, dass Mochi jede Einstellung nachbilden kann.
5. **Importiere es in ein neues Mochi-Deck.** Dein reguläres Anki-Profil und seine Warteschlange fälliger Karten bleiben unverändert.
6. **Prüfe alles vor der ersten Wiederholung.** Vergleiche Inhalte, Formatierung, Felder, Medien, Tags, Deck-Struktur und Verlauf. Achte besonders auf alles, was von HTML, CSS, JavaScript oder generierten Kartenvarianten abhing.
7. **Wähle den Scheduler bewusst.** Mochi beginnt mit seinem eigenen Algorithmus. Aktiviere FSRS nur, wenn du es nach dem Test weiterverwenden möchtest.
8. **Lerne eine normale Woche lang mit der Kopie.** Beurteile die Bearbeitung in Markdown, die Phase New cards, die Entscheidung Remembered/Forgot, das Offline-Verhalten und – falls du dafür bezahlt hast – die Synchronisierung auf den Geräten, die du tatsächlich nutzt.
9. **Teste den Rückweg.** Exportiere das Mochi-Testdeck als `.mochi` für eine native Sicherung und als CSV für Anki. Verwende eine CSV mit Feldwerten, wenn wiederverwendbare Felder wichtig sind, oder eine CSV mit gerenderten Seiten, wenn es dir hauptsächlich um sichtbare Vorder- und Rückseiten geht. Importiere die CSV-Datei in ein weiteres leeres Anki-Profil und ordne ihre Spalten einem passenden Notiztyp zu.
10. **Schreibe jeden in Kauf genommenen Verlust auf.** Prüfe Hin- und Rückweg getrennt. Exakte Gestaltung, mehrseitige Karten, Add-on-Verhalten, generierte Varianten, Bewertungen, Verlauf oder künftige Fälligkeitstermine können im Alltag wichtiger sein, als es beim Lesen einer Vergleichstabelle scheint.

Der Rückweg per CSV ist eine reine Inhaltsmigration und keine vollständige Mochi-Wiederherstellung: Wiederholungsverlauf, Vorlagen und Metadaten-Tags fehlen, sofern die Tags nicht in den Inhalt eingebettet sind. Wenn Mochi dein zuvor benanntes Problem nicht löst, lösche das Testdeck und arbeite im ursprünglichen Anki-Profil weiter. Wenn der Test überzeugt, migriere jeweils ein echtes Deck und bewahre die Anki-Sicherung im Format `.colpkg` sowie die Mochi-Sicherung im Format `.mochi` über mehrere normale Wiederholungszyklen hinweg auf.

## Für wen eignen sich Mochi Flashcards?

Mochi passt gut, wenn:

- du ohnehin in Markdown schreibst und denkst;
- Notizen und Lernkarten in denselben verknüpften Workspace gehören;
- du lieber knapp zwischen Remembered und Forgot wählst statt zwischen vier Bewertungen;
- dir im kostenlosen Tarif die Offline-Nutzung auf einem Gerät reicht oder die Pro-Synchronisierung US$5 pro Monat wert ist;
- deine Sammlung neu oder einfach genug ist, dass eine Konvertierung aus Anki nur ein geringes Risiko birgt.

Bleib bei Anki, wenn:

- deine Notiztypen mehrere wichtige Kartenvarianten erzeugen;
- HTML/CSS-Vorlagen, JavaScript, Add-ons oder gemeinsam genutzte Decks Teil deines Systems sind;
- kostenlose geräteübergreifende Synchronisierung wichtiger ist als das Schreiben in Markdown;
- du Ankis FSRS-Optimierer, Voreinstellungen, vier Bewertungen und Arbeitslast-Simulator möchtest;
- deine jahrelangen Wiederholungsdaten und individuellen Abläufe bereits zuverlässig funktionieren.

Welche Mochi-Alternative sinnvoll ist, hängt davon ab, warum keine der beiden Optionen passt. Für eine neue, einfachere Sammlung bieten die [Funktionen der Flashcards Open Source App](/de/features/) FSRS-Wiederholungen, Offline-Lernen und Synchronisierung, den Import und Export von Karten, Tags und Medien in portablen Formaten, Agentenzugriff und einen dokumentierten Weg zum Self-Hosting. Ich entwickle die App, und auch ihre Grenzen sind wichtig: Sie ersetzt weder Mochis verknüpftes Markdown-Notizbuch noch Ankis ausgereiftes System aus Vorlagen und Add-ons. Die [Anleitung für den Einstieg](/de/docs/getting-started/) zeigt die aktuellen Wege zur gehosteten oder mobilen Nutzung sowie für Agenten und Self-Hosting.

## Fazit

Mochi ist mehr als eine hübschere Anki-Oberfläche. Im Kern können eine Markdown-Notiz, ein verknüpfter Wissenseintrag und eine Spaced-Repetition-Karte ein und dasselbe Objekt sein. Der kostenlose Tarif deckt die Offline-Nutzung ohne Konto ab; Pro ergänzt die gehosteten Funktionen einschließlich der geräteübergreifenden Synchronisierung.

Für Lernende, die eine neue, auf Markdown ausgerichtete Sammlung beginnen, kann dieser Ansatz gut passen. Auch ein Wechsel von Anki kann sich lohnen, wenn der Test mit einem repräsentativen Deck zeigt, dass natives Markdown und binäre Bewertungen spürbare Hürden beseitigen.

Bei einer etablierten Anki-Sammlung muss Mochi dagegen erst überzeugen. Sichere die Sammlung, teste die Karten mit den meisten individuellen Funktionen und bleib bei Anki, solange Mochi deinen Lernalltag nicht deutlich genug verbessert, um den Verlust der konkreten Formatierungs-, Vorlagen-, Scheduler- und Ökosystem-Funktionen zu rechtfertigen.
