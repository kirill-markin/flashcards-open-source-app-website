---
title: "So sicherst du 2026 deine Flashcards: Anki-Backup, Quizlet-Export und ein Deck, das dir weiter gehört"
description: "Du brauchst 2026 einen verlässlichen Backup-Plan für Flashcards? Hier erfährst du, wie du Anki sicherst, welche Exporte Quizlet tatsächlich erlaubt, wie du Medien speicherst, eine Klartext-Kopie behältst und nicht in einer einzigen Lern-App festhängst."
image: "/blog/how-to-back-up-flashcards.png"
date: "2026-06-15"
keywords:
  - "flashcards sichern"
  - "wie sichert man flashcards"
  - "anki backup"
  - "anki deck exportieren"
  - "quizlet export"
  - "flashcards backup"
  - "lerndaten sichern"
  - "open source flashcards"
  - "flashcards klartext"
---

Ein Flashcard-Deck wirkt klein, bis du versuchst, es neu aufzubauen.

Dann sind es plötzlich 1.800 Karten, zwei Jahre Wiederholungsverlauf, ein Stapel Screenshots und ein sehr nerviges Wochenende, das du eigentlich nicht mit Export-Aufräumarbeiten verbringen wolltest.

Genau deshalb ist **Flashcards sichern** 2026 eine so praktische Suchanfrage. Menschen suchen nicht danach, weil Backup verantwortungsbewusst klingt. Sie suchen danach, weil ihnen endlich auffällt, wie viel Lernzeit in einer einzigen App feststeckt.

Dieser Leitfaden bleibt bewusst eng: wie du deine Karten portabel, lesbar und wiederherstellbar hältst, wenn du gerade Anki nutzt, dich gelegentlich auf Quizlet-Exporte verlässt oder dein nächstes Deck von Anfang an leichter selbst besitzen willst.

![Warmer Lernschreibtisch mit Flashcards-Backup, Quellnotizen, Mediendateien und einem Exportbildschirm auf dem Laptop](/blog/how-to-back-up-flashcards.png)

## Warum sich das 2026 dringender anfühlt

Am **2. Februar 2026** veröffentlichten die Anki-Foren die Ankündigung ["Anki's Growing Up"](https://forums.ankiweb.net/t/ankis-growing-up/68610) zum Eigentümerwechsel des Projekts.

Diese Ankündigung bedeutete nicht, dass dein Deck über Nacht unsicher wurde. Sie hat aber viele Menschen an einen nützlichen Unterschied erinnert: Einem Tool zu vertrauen ist nicht dasselbe wie die eigenen Lerndaten selbst zu besitzen.

Auf der Quizlet-Seite zeigt sich dasselbe, nur weniger dramatisch. Es gibt einen Exportpfad, aber er ist enger, als viele erwarten. Wenn deine Karten wichtig sind, solltest du Portabilität nicht erst auf den Abend verschieben, an dem du migrieren willst.

## Sync hilft. Ein Backup rettet dich.

Menschen sagen oft, sie hätten ein Backup, obwohl sie eigentlich nur meinen, dass ihr Deck auf mehreren Geräten synchronisiert wird.

Besser als nichts, ja. Dasselbe ist es nicht.

Sync schützt Bequemlichkeit. Ein Backup schützt die Wiederherstellung.

Wenn eine schlechte Bearbeitung, ein kaputter Import oder eine versehentliche Löschung überallhin synchronisiert wird, hast du das Problem nur schneller verteilt.

## Der langweilige Backup-Stack, den ich wirklich nutzen würde

Die erste nützliche Regel lautet: Hör auf, nach dem einen perfekten Backup-Format zu suchen.

Ich würde vier Ebenen behalten:

1. ein vollständiges app-eigenes Backup
2. eine Klartext- oder Markdown-Kopie des wichtigen Karteninhalts
3. eine Kopie der Medien oder der ursprünglichen Quelldateien
4. einen zweiten Speicherort außerhalb des Geräts, das ich täglich benutze

Das klingt leicht übertrieben, bis eine Ebene versagt und die anderen drei das Deck retten.

Jede Ebene deckt einen anderen Ausfall ab:

- ein app-eigenes Backup hilft dir, Deck-Struktur und Wiederholungsstatus wiederherzustellen
- Klartext hält den Inhalt portabel
- ein Medien-Backup schützt Bilder, Audio und Anhänge, die im Textformat verloren gehen können
- ein zweiter Speicherort schützt dich davor, Laptop, Handy oder lokale Festplatte samt Daten zu verlieren

Wenn du nur die app-eigene Ebene behältst, vertraust du darauf, dass ein Produkt für immer lesbar bleibt. Wenn du nur Klartext behältst, verlierst du Wiederholungsstatus und oft auch Medien. Dieser Stack funktioniert, weil die Ebenen unterschiedliche Aufgaben haben.

## Für Anki solltest du sowohl die Wiederherstellungskopie als auch die portable Kopie behalten

Hier hören viele Anki-Backup-Pläne zu früh auf.

Die [Anki-Backup-Dokumentation](https://docs.ankiweb.net/backups.html) trennt das ziemlich klar:

- automatische Backups enthalten Kartentext und Scheduling-Informationen
- automatische Backups enthalten keine Sound- oder Bilddateien
- ein manueller `.colpkg`-Export mit `include media` erstellt die vollständigere Sammlungskopie

Die [Anki-Export-Dokumentation](https://docs.ankiweb.net/exporting.html) ergänzt das andere wichtige Detail: Ein Collection Package exportiert deine gesamte Sammlung inklusive Scheduling.

Ich würde mir deshalb drei Anki-Gewohnheiten zulegen, nicht nur eine:

1. Anki seine normalen automatischen Backups für schnelle Wiederherstellung machen lassen
2. regelmäßig einen `.colpkg`-Export mit Medien als echten Wiederherstellungspunkt anlegen
3. wichtige Notizinhalte als Klartext exportieren, wenn du Portabilität außerhalb von Anki willst

Dieser dritte Schritt ist wichtig, weil ein Anki-Backup sehr gut darin ist, Anki wiederherzustellen. Es hilft dir deutlich weniger dabei, das Deck später mit normalen Tools zu prüfen.

Ein weiteres Detail lohnt sich, klar auszusprechen, weil viele es auf die harte Tour lernen: Das verlässliche Muster ist, sauber zu exportieren und dann den Export zu speichern. Nicht: "Dropbox auf die Live-Datenbank zeigen lassen und hoffen, dass das als Anki-Backup zählt."

## Für Quizlet gilt: früh exportieren und weniger erwarten, als du gern hättest

Quizlet-Export ist nützlich. Er ist keine vollständige Kopie deines Lern-Setups.

Stand **15. Juni 2026** sagt [Quizlets Hilfe zum Export](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), dass du Begriffe und Definitionen aus deinen eigenen Sets exportieren kannst. Die praktischen Grenzen sind genauso wichtig:

- kopierte Sets lassen sich nicht exportieren
- Bild-Exporte sind nicht verfügbar
- Export ist auf der Website möglich, nicht in der App

Wenn dir ein Quizlet-Set wichtig ist, exportiere es also, solange es noch:

- deins ist
- größtenteils aus Text besteht
- leicht zu identifizieren ist
- noch nah am ursprünglichen Quellmaterial liegt

Warte nicht bis zu dem Abend, an dem du migrieren willst. Warte nicht, bis du vergessen hast, welche Sets kopiert waren. Und geh nicht davon aus, dass Screenshots ein echtes Backup-Format sind.

Deshalb gibt es im Repo bereits einen eigenen Leitfaden zum [Exportieren von Quizlet-Sets und Umwandeln in FSRS-Flashcards](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Der Export-Schritt ist nicht glamourös, aber er entscheidet darüber, ob du später wirklich einen sauberen Ausweg hast.

## Klartext ist das am meisten unterschätzte Flashcards-Backup

Wenn ich zusätzlich zum app-eigenen Backup nur eine weitere Kopie behalten dürfte, würde ich fast immer Klartext oder Markdown wählen.

Das bewahrt nicht alles. Genau deshalb ist es nützlich. Es hält den Karteninhalt außerhalb des Produkts lebendig, in dem er dieses Jahr gerade untergebracht ist.

Eine Klartext-Kopie ist auf die richtige Weise hässlich:

- du kannst sie auf jedem Rechner öffnen
- du kannst sie ohne Spezial-Tools prüfen
- du kannst sie schnell durchsuchen
- du kannst sie versionieren
- du kannst sie später in einen neuen Importpfad einspeisen
- du kannst sie einem anderen Tool geben, ohne dein eigenes Lernsystem per Screen-Scraping retten zu müssen

Das ist heute noch wichtiger, weil viele Decks aus Notizen, Transkripten, OCR, PDFs und KI-gestützter Bereinigung entstehen. Sobald der nützliche Teil als lesbarer Text gespeichert ist, werden deine späteren Optionen deutlich besser.

Deshalb ist [Flashcards](/features/) nach der Bereinigung auch ein sinnvoller nächster Ort. Das aktuelle Produkt unterstützt KI-Chat mit Klartext und Dateianhängen, also muss ein bereinigter Export nicht als totes Backup-Material herumliegen. Er kann zum Entwurfs-Input für ein besseres Deck werden.

## Sichere die Quelle, nicht nur die fertige Karte

Das ist die Gewohnheit, die viele überspringen, wenn sie nur in Apps denken.

Wenn du mit Folgendem lernst:

- deinen eigenen Markdown-Notizen
- einem Klartext-Export aus einer anderen App
- OCR aus handschriftlichen Seiten
- Transkript-Ausschnitten
- deinen eigenen Vokabellisten
- Fehlerprotokollen aus Fragenbanken

dann gehören diese Quelldateien ebenfalls zum Backup.

Manchmal ist ein Neuaufbau aus der Quelle leichter, als ein unordentliches altes Deck wiederherzustellen. Manchmal ist das Deck aufgebläht, aber die Quellnotizen sind noch sauber.

Manchmal willst du gar nicht jede alte Karte zurück. Du willst ein kleineres und besseres Set aus dem Material, das noch wichtig ist.

Genau deshalb sind Backups der Quellen wichtig. Sie geben dir später zwei ehrliche Optionen: das alte Deck wiederherstellen, wenn das am einfachsten ist, oder die guten Teile neu aufbauen, wenn das klüger ist.

## Medien sind der Punkt, an dem viele Backup-Pläne leise scheitern

Textbasierte Decks sind der einfache Fall. Schwierig wird es, wenn dein Deck auf Folgendem beruht:

- Anatomie-Bildern
- Diagramm-Screenshots
- Audio zur Aussprache
- Whiteboard-Fotos
- Ausschnitten aus handschriftlichen Notizen
- Lernmaterial im Stil von Image Occlusion

Wenn dein Backup den Text speichert, aber die Dateien verliert, hast du das Deck technisch gesehen behalten und funktional trotzdem genau das verloren, womit du gelernt hast.

Darum brauchen Medien einen eigenen Sicherungspunkt und einen eigenen Ordner, nicht nur das vage Versprechen, dass sie vermutlich irgendwo angehängt sind.

Für Anki heißt das: den Exportpfad mit Medien verwenden, wenn du ein echtes Collection-Backup willst. Für Quizlet heißt das: die Exportgrenze früh akzeptieren und die ursprünglichen Bilder oder Quelldateien separat aufbewahren. Für deine eigenen KI-gestützten Workflows heißt das: das ursprüngliche PDF, den Screenshot-Stapel, das Transkript oder den Notizen-Export an einem klar benannten, offensichtlichen Ort ablegen.

Ich hätte lieber einen langweiligen Ordner namens `flashcards-sources-2026-06` als einen schlechten Abend, an dem ich merke, dass ich zwar die Prompts gespeichert habe, aber nicht die Diagramme.

## Ein gutes Flashcards-Backup macht Migration auch leichter

Diesen Teil übersehen viele. Backups sind nicht nur für die Wiederherstellung nach einem Desaster da.

Sie sind auch für den Tag da, an dem du entscheidest, dass dein Workflow dem Tool entwachsen ist.

Genau das hat die Diskussion rund um den Eigentümerwechsel bei Anki nützlich gemacht. Selbst Menschen, die gar nicht wechseln wollten, begannen über Portabilität nachzudenken. Dieser Impuls war gesund.

Wenn dein Material gesichert ist als:

- vollständiger Collection-Export
- portable Textkopie
- aufbewahrte Quelldateien

dann wird ein späterer Wechsel viel weniger dramatisch.

Das gilt, egal ob du von Anki, von Quizlet oder von irgendeinem KI-Lerntool wechselst, das bei der Generierung stark und bei der Langzeitwiederholung schwach war.

Wenn dich gerade die Anki-Seite dieses Problems betrifft, ist der praktische nächste Artikel schon da:

- [Wie du 2026 von Anki migrierst](/blog/migrate-from-anki-txt-export-open-source-flashcards/)

Wenn es dir allgemeiner um Eigentum und Prüfbarkeit geht, passt als Nächstes dieser hier:

- [Self-Hosted Open Source Flashcards App for Spaced Repetition](/blog/self-hosted-open-source-flashcards-app-for-spaced-repetition/)

## Wo Flashcards hineinpasst, wenn dir dein nächstes Deck leichter gehören soll

Wenn ich ein neues Deck mit Blick auf Eigentum aufsetzen würde, wären mir zuerst ein paar Produkteigenschaften wichtig:

- Open-Source-Code
- ein gehosteter Weg jetzt und ein Self-Hosting-Pfad später
- offline-first Clients, wo es wichtig ist
- schlichte Vorder-/Rückseitenkarten, die portabel bleiben
- KI, die an echte Daten angebunden ist, nicht nur an One-Shot-Generierungsdemos

Das ist die Richtung, in die [Flashcards](/) sich bereits bewegt.

Die aktuellen öffentlichen Docs reichen aus, um diese Richtung konkret zu machen:

- die [Architektur-Dokumentation](/docs/architecture/) beschreibt das gemeinsame Workspace-Modell über Web, iOS und externe Agents hinweg
- der iOS-Client ist als lokales SQLite mit Sync dokumentiert
- der Einstieg für externe Agents beginnt an einer veröffentlichten Discovery-URL
- der [Self-Hosting Guide](/docs/self-hosting/) gibt dir einen realen Pfad, den Stack selbst zu betreiben

Das nimmt dir den Bedarf an Backups nicht ab. Nichts tut das.

Es gibt dir aber eine gesündere Ausgangslage für das nächste Deck:

- rohe Quelltexte behalten
- Karten in der App entwerfen oder bereinigen
- mit FSRS wiederholen
- den Stack prüfbar halten
- Self-Hosting verfügbar lassen, falls du es irgendwann willst

Das kommt echtem Eigentum näher, als all deine Lernarbeit in einer geschlossenen Oberfläche zu lassen und zu hoffen, dass die Export-Geschichte später noch gut bleibt.

## Die Flashcards-Backup-Checkliste, die ich wirklich behalten würde

Wenn du die kürzeste nützliche Version willst, dann mach Folgendes:

1. Exportiere ein vollständiges Backup aus der App, die du gerade nutzt.
2. Behalte eine Klartext- oder Markdown-Kopie des wichtigen Karteninhalts.
3. Speichere die Medien oder ursprünglichen Quelldateien in einem separaten Ordner.
4. Lege eine Kopie auf einem zweiten Gerät oder in einem Cloud-Speicher ab.
5. Wiederhole das Backup nach größeren Deck-Änderungen, nicht nur einmal pro Jahr.
6. Bevorzuge bei neuen Decks Tools und Workflows, die Export und Self-Hosting offenhalten.

Das reicht aus, um den größten Teil des realen Risikos abzudecken, ohne Lernen in ein Hobby für Dateiverwaltung zu verwandeln.

## Die praktische Regel für Flashcards-Backups im Jahr 2026

Wenn es wehtun würde, dein Deck zu verlieren, verdient es ein langweiliges Backup.

Behalte die vollständige app-eigene Kopie. Behalte den portablen Text. Behalte die Medien. Behalte eine Kopie an einem anderen Ort. Und baue die nächste Stufe deines Lern-Workflows in einem Produkt auf, das Portabilität nicht wie eine Nebenaufgabe behandelt.

Wenn du dafür mit dem nächsten Deck einen saubereren Ort willst, starte mit [Getting Started](/docs/getting-started/), wirf einen Blick auf [Features](/features/) und behalte den [Self-Hosting Guide](/docs/self-hosting/) im Hinterkopf.

Das ist die Version von **Flashcards sichern**, der ich 2026 vertraue: langweilige Exporte, lesbarer Text, separat gesicherte Medien und ein Lern-Stack, der dir später Optionen lässt.
