---
title: "Die besten Open-Source-Karteikarten-Apps 2026"
description: "Vergleiche die besten Open-Source-Karteikarten-Apps nach Lizenz, Plattformen, Offline-Nutzung, Scheduler, Sync, Import, Export und echtem Selbsthosting."
date: "2026-08-02"
image: "/blog/best-open-source-flashcard-apps-2026.png"
keywords:
  - "beste Open-Source-Karteikarten-Apps"
  - "Open-Source-Karteikarten-App"
  - "selbst gehostete Karteikarten"
  - "Offline-Karteikarten-App"
  - "Spaced-Repetition-App"
  - "Open-Source-Spaced-Repetition"
---

Ein GitHub-Link verrät erstaunlich wenig über eine Karteikarten-App. Der Desktop-Client kann quelloffen sein, während die iPhone-App proprietär bleibt. Ein Docker-Image kann zwar eine Browser-App bereitstellen, aber keine Synchronisierung für native Clients. Und selbst eine Offline-Karteikarten-App kann im Kern vollständig geschlossen sein.

Dieser Vergleich der **besten Open-Source-Karteikarten-Apps** prüft deshalb, worauf es nach der Installation wirklich ankommt: Lizenz, Plattformen, Offline-Nutzung, Scheduler, Synchronisierung, Import und Export sowie den genauen Umfang des Selbsthostings. In die engere Auswahl kommen Anki, Flashcards, Mnemosyne und SiYuan. Als proprietäre Local-first-Vergleichsoption folgt danach Mochi.

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](https://flashcards-open-source-app.com/), eines der hier verglichenen Produkte. Die App gehört in diese Auswahl, weil das Repository die Web-App, native Clients, Backend, Synchronisierung und Produktionsinfrastruktur unter der MIT-Lizenz enthält. Ich erkläre sie deshalb nicht automatisch zum Sieger. Anki ist ausgereifter, Mnemosyne bietet einen fokussierten Desktop-Ablauf und eine bessere Anki-Migration, SiYuan ist ein umfassenderes Wissenssystem und Mochi kommt leichter infrage, wenn Open Source für dich kein Muss ist.

**Fakten geprüft:** 2. August 2026.

![Warmer Schreibtisch zum Vergleich von fünf Open-Source- und Offline-Lernkartensystemen nach Planung, Synchronisierung, Export und Selbsthosting](/blog/best-open-source-flashcard-apps-2026.png)

## Was „Open Source“, „offline“ und „selbst gehostet“ hier bedeuten

Ich habe ein Produkt in die Open-Source-Gruppe aufgenommen, wenn der Quellcode der zentralen App für Endnutzer veröffentlicht ist und klare Lizenzbedingungen vorliegen. Anschließend habe ich alle Optionen anhand derselben praktischen Fragen geprüft, statt GitHub-Sterne als Qualitätswertung zu behandeln.

- **Open Source** beschreibt die rechtlichen Bedingungen, unter denen der Code genutzt werden darf. Der Begriff verspricht weder Offline-Zugriff noch eine gepflegte mobile App oder einen installierbaren Server.
- **Offline-Nutzung** bedeutet, dass ein installierter Client Karten anhand lokaler Daten erstellen oder wiederholen kann, ohne einen Server zu kontaktieren. Auch proprietäre Software kann diese Anforderung erfüllen.
- **Selbst gehostete Synchronisierung** bedeutet, dass du den Dienst betreibst, der Daten zwischen den Clients austauscht. Dieser Dienst muss keinerlei Browser-Oberfläche bieten.
- **Selbsthosting der vollständigen Web-App** bedeutet, dass deine Bereitstellung eine Anwendung umfasst, die Menschen im Browser verwenden können. Native Clients können trotzdem eigene Builds, eine separate Verteilung oder ein anderes Synchronisierungssystem erfordern.

Diese Unterschiede sind der Kern des Artikels. „Quellcode vorhanden“, „funktioniert offline“ und „läuft in Docker“ sind keine austauschbaren Versprechen.

## Open-Source-Karteikarten-Apps im Vergleich

Die vier tatsächlich quelloffenen Einträge stehen zuerst. Mochi folgt am Ende, weil die Offline-Nutzung und die portablen Formate für dieselbe Suche relevant sind, die Kernanwendung aber proprietär ist.

| Produkt | Lizenz / Quellcode-Status | Plattformen | Offline | Scheduler | Synchronisierung | Import / Export | Genauer Umfang des Selbsthostings |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Anki](https://github.com/ankitects/anki) | [Desktop-Kern: AGPL-3.0-or-later, einige Teile unter BSD-3-Clause](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE); AnkiDroid ist ein separates Open-Source-Projekt; das offizielle AnkiMobile ist proprietär | Windows, macOS, Linux; Android über AnkiDroid; iOS über AnkiMobile; gehostetes Lernen im Browser über AnkiWeb | Native Desktop- und Mobil-Clients funktionieren offline | [FSRS und das ältere SM-2](https://docs.ankiweb.net/deck-options) | AnkiWeb oder der offizielle selbst gehostete Synchronisierungsserver | [Import von Text, gepackten Anki-Stapeln und Mnemosyne-`.db`](https://docs.ankiweb.net/importing/intro.html); [Export von Text, `.apkg` und `.colpkg`](https://docs.ankiweb.net/exporting.html) | **Nur Synchronisierung.** Der offizielle Server ist kein selbst gehostetes AnkiWeb und fügt keine Browser-Oberfläche zum Lernen hinzu |
| [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | MIT; Web, iOS, Android, Backend, Synchronisierung und Infrastruktur befinden sich in einem Repository | [Web, iOS, Android](https://github.com/kirill-markin/flashcards-open-source-app#available-on) | Local-first: Die App schreibt in IndexedDB oder SQLite und synchronisiert Änderungen aus der Warteschlange, sobald die Verbindung wieder steht | [FSRS](/docs/architecture/#scheduling) | Gehostete Synchronisierung oder der selbst gehostete Produktions-Stack | `flashcards.zip` überträgt nur Karten, Tags und zugehörige Medien; geprüfte, KI-gestützte Kartenentwürfe aus TXT/CSV sind verlustbehaftet; kein direkter `.apkg`-Import | **Vollständiger Stack mit Einschränkungen.** Die Produktionsumgebung ist auf AWS ausgerichtet und hängt von mehreren externen Diensten ab; Docker Compose dient nur der Entwicklung |
| [Mnemosyne](https://mnemosyne-proj.org/) | [Die Lizenz hängt von der Komponente ab](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE): Der [Kern verwendet AGPL v3 mit einer zusätzlichen Namens-/Attributionsklausel](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE), [openSM2sync dagegen LGPL v3](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) | [Windows, macOS, Linux, Android; Wiederholung im Browser über einen laufenden Desktop-Server](https://mnemosyne-proj.org/download-mnemosyne.php) | Lokale Desktop-Nutzung und Offline-Wiederholung unter Android; unter Android lassen sich keine Karten bearbeiten | Adaptive Planung anhand von Erinnerungsbewertungen von 0 bis 5 | Integrierte Synchronisierung mit deinem eigenen Desktop- oder Headless-Server | [Vollständiger Anki-Import mit benutzerdefinierten Kartentypen und Lerndaten](https://mnemosyne-proj.org/features), dazu Klartext und ältere Formate; Freigabe- und Textexporte sind keine vollständigen Sicherungen | **Synchronisierung plus eingeschränkte Wiederholung im Browser.** Du betreibst eine Mnemosyne-Instanz; sie ist kein gehostetes Webprodukt |
| [SiYuan](https://github.com/siyuan-note/siyuan) | AGPL-3.0; das offizielle Projekt verlinkt außerdem quelloffene Clients für Android, iOS und HarmonyOS | Windows, macOS, Linux, Android, iOS, HarmonyOS; Browser-Nutzung über Docker | Vollständige lokale Offline-Nutzung | [FSRS](https://b3log.org/siyuan/en/) | Offizielle Ende-zu-Ende-verschlüsselte Synchronisierung oder Unterstützung für kostenpflichtigen Cloud-Speicher von Drittanbietern | Die allgemeine App unterstützt den Import von Markdown und Daten sowie den Export von Markdown, PDF, Word, HTML und Daten; kein dokumentierter `.apkg`-Importer | **Vollständige Browser-App über Docker.** Docker ist ausschließlich für den Browser gedacht und dient nicht zur Synchronisierung von Desktop- oder Mobil-Clients |
| [Mochi](https://mochi.cards/) | Proprietärer Kern; die [öffentlichen Repositorys enthalten Integrationen](https://github.com/mochi-cards/open-source), nicht die App selbst | [Web, Windows, macOS, Linux, iOS, Android](https://mochi.cards/docs/getting-started/download-and-install/) | Vollständig offline und ohne Konto nutzbar; der Browser kann seinen lokalen Speicher löschen | Nicht offengelegter adaptiver Scheduler mit den Antworten Remembered / Forgot und einer voreingestellten Ziel-Erinnerungsrate von 90 % | Gehostete, kostenpflichtige Synchronisierung | Import von `.mochi`, Anki-`.apkg`, Markdown und CSV; Export von `.mochi`, Markdown und CSV mit unterschiedlichem Umfang der Metadaten | **Keines.** Es gibt weder eine unterstützte selbst gehostete Kern-App noch einen entsprechenden Synchronisierungsdienst |

Die Tabelle ist eine Entscheidungshilfe und keine Wertung nach Funktionsumfang. Ein direkter `.apkg`-Importer kann wichtiger sein als Selbsthosting, wenn du zehn Jahre Wiederholungsverlauf mitbringst. Im Unterricht kann eine Browser-Oberfläche wichtiger sein als das Bearbeiten auf Mobilgeräten. Beginne mit der Anforderung, wegen der du eine App ausschließen würdest.

## Anki: ausgereift, flexibel und an den Rändern kompliziert

Anki bleibt die sicherste Wahl für eine komplexe bestehende Sammlung. Kartenvorlagen, das Ökosystem aus Erweiterungen, die Scheduler-Einstellungen und die Paketformate konnten über viele Jahre reifen. Wenn du Anki genau wegen dieser Stärken nutzt, löst der Wechsel zu einer jüngeren App womöglich gar nichts.

Beim Quellcode ist die Lage gemischt, nicht durchgehend offen. Die [Desktop-Lizenz](https://raw.githubusercontent.com/ankitects/anki/main/LICENSE) ist AGPL-3.0-or-later, einige Teile stehen unter BSD-3-Clause und mitgelieferte Komponenten unter weiteren Lizenzen. [AnkiDroid](https://github.com/ankidroid/Anki-Android) ist ein separates Open-Source-Projekt für Android. Die offizielle iOS-App AnkiMobile ist proprietär, AnkiWeb ein gehosteter Browser-Dienst. Die nativen Clients funktionieren offline; im gehosteten Ökosystem ermöglicht AnkiWeb den Zugriff per Browser.

Anki unterstützt sowohl [FSRS als auch den älteren SM-2-Scheduler](https://docs.ankiweb.net/deck-options). Die Migrationsmöglichkeiten sind die stärksten in diesem Vergleich: Anki importiert Textdateien, gepackte Stapel und Mnemosyne-2.0-Datenbanken. Exporte sind als Text, `.apkg` oder `.colpkg` möglich; Medien und Planungsdaten lassen sich dabei konfigurieren.

Beim Selbsthosting ist der Umfang enger. Der [offizielle Synchronisierungsserver](https://docs.ankiweb.net/sync-server.html) synchronisiert kompatible Anki-Clients und richtet sich an erfahrene Betreiber, die AnkiWeb nicht nutzen möchten. Er hostet die AnkiWeb-Oberfläche nicht und bietet daher weder Lernen im Browser noch eine selbst gehostete Website zur Kontoverwaltung. Da sich das Protokoll ändert, müssen außerdem die Versionen von Client und Server kompatibel bleiben.

Wähle Anki wegen seiner ausgereiften Vorlagen, Erweiterungen, zuverlässigen Paketmigration und breiten Client-Verfügbarkeit. Der Nachteil in diesem Vergleich liegt nicht im Funktionsumfang, sondern in der Aufteilung auf einen offenen Desktop-Kern, ein separates Android-Projekt, einen proprietären offiziellen iOS-Client und einen gehosteten Webdienst.

## Flashcards: vollständiger Quellcode, Betriebsaufwand in AWS-Dimensionen

Flashcards setzt andere Prioritäten. Das MIT-lizenzierte Repository enthält die Browser-App, iOS- und Android-Clients, Backend, Offline-Synchronisierung und Infrastruktur. Betreiber erhalten damit Zugriff auf mehr Teile des Produkts als beim offiziellen Synchronisierungsserver von Anki. Dafür fällt auch erheblich mehr Betriebsarbeit an.

Die Web-App speichert lokale Daten in IndexedDB, iOS verwendet SQLite und Android Room auf Basis von SQLite. Die [Offline-first-Architektur](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync) schreibt zuerst lokal, legt Vorgänge in einer Outbox ab und überträgt sie, sobald ein Client wieder verbunden ist. Die Wiederholungen verwenden [FSRS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Gehostete und selbst gehostete Installationen bieten dasselbe Produktmodell mit Web-App, Synchronisierung und API.

„Selbsthosting des vollständigen Stacks“ braucht eine ausführlichere Erklärung. Die unterstützte [Anleitung zum Selbsthosting in der Produktion](/docs/self-hosting/) verwendet AWS CDK und kein anbieterneutrales Docker-Paket für den Produktivbetrieb. Erforderlich sind AWS-Infrastruktur und Cognito, Cloudflare DNS, Resend für den E-Mail-Versand sowie eine Sentry-Konfiguration. Du bist für Secrets, Migrationen, Alarme, Sicherungen, Wiederherstellungstests und Upgrades verantwortlich. Die Docker-Compose-Konfiguration im Repository startet PostgreSQL und Migrationen für die lokale Entwicklung; sie ist ausdrücklich nicht für die Produktion vorgesehen. Die nativen Apps befinden sich zwar im Repository, private iOS- und Android-Builds müssen jedoch separat erstellt und verteilt werden. Lies die [Architekturübersicht](/docs/architecture/), bevor du von einer Ein-Kommando-Bereitstellung sprichst.

Die Migration ist für Nutzer die größere Einschränkung. Ein `flashcards.zip`-Paket überträgt Karten, Tags und zugehörige Medien zwischen Flashcards-Workspaces. Es überträgt weder den Wiederholungsverlauf noch den FSRS-Zustand, Workspace-Einstellungen, vollständige Stapelstrukturen oder Konten. Das ist ein Inhaltstransfer, keine vollständige Sicherung und keine verlustfreie Migration von einer gehosteten zu einer selbst gehosteten Installation.

Einen direkten Importer für Anki-`.apkg` gibt es nicht. Beim unterstützten [TXT-/CSV-Migrationsablauf](/blog/migrate-from-anki-txt-export-open-source-flashcards/) erstellt eine KI Kartenentwürfe aus exportiertem Text, die der Nutzer anschließend prüfen muss. Vorlagen, Planungszustand und Stapelstruktur bleiben nicht erhalten, und selbst einfache Inhalte müssen kontrolliert werden. Der Ablauf eignet sich zum Neuaufbau überwiegend textbasierter Karten, nicht als Beleg für eine exakte Anki-Kompatibilität.

Wähle Flashcards, wenn du ausdrücklich einen modernen quelloffenen Web- und Native-Stack, FSRS, Offline-first-Clients und ein vom Betreiber kontrolliertes Backend suchst. Wähle Anki, wenn dir die originalgetreue Übernahme deiner Sammlung wichtiger ist, oder Mnemosyne, wenn eine klassische lokale App mit selbst betriebener Synchronisierung die gewünschte Kontrolle abdeckt.

## Mnemosyne: fokussiertes Lernen am Desktop und selbst betriebene Synchronisierung

Mnemosyne ist die schlankste Option in diesem Vergleich. Es handelt sich um eine klassische Desktop-App für Spaced Repetition mit zuverlässiger lokaler Nutzung, einem Android-Client zum Wiederholen, Anki-Migration und einem Synchronisierungsprotokoll, das du über eine Desktop- oder Headless-Instanz selbst hosten kannst.

Die Lizenzierung muss genau beschrieben werden. Laut der [Lizenzdatei im Stammverzeichnis](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) gelten für verschiedene Komponenten unterschiedliche Lizenzen. Die [Lizenz des Mnemosyne-Kerns](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE) ist AGPL v3 mit einer zusätzlichen Klausel: Der Name Mnemosyne muss in abgeleiteten Werken deutlich sichtbar sein, wobei die genaue Form mit den Verantwortlichen besprochen werden soll. Die untergeordnete [Lizenz von openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) ist LGPL v3. Ein einzelner Link kann beide Komponenten nicht korrekt beschreiben.

Die aktuelle Download-Seite führt Version 2.11 für Windows, macOS und Linux sowie einen Android-Client für Offline-Wiederholungen und die Synchronisierung mit dem Desktop auf. Auf anderen mobilen Plattformen ist die dokumentierte Option das Wiederholen im Browser über einen Webserver, der auf deinem Desktop läuft. Der [Android-Client unterstützt das Bearbeiten von Karten nicht](https://mnemosyne-proj.org/help/android-client) und ist daher ein Begleiter zum Wiederholen, kein vollwertiger mobiler Editor.

Bei der Wiederholung bewertest du deine Erinnerung auf einer Skala von 0 bis 5, damit Mnemosyne die künftigen Intervalle anpassen kann. Die Plugin-Architektur erlaubt außerdem, zentrale Teile wie den Scheduler oder die Datenbank zu ersetzen. Die [integrierte Synchronisierung](https://mnemosyne-proj.org/help/syncing) führt Karten und Lerndaten von mehreren Geräten zusammen; ein Desktop- oder Headless-Prozess kann dabei als Server dienen. Der Desktop-Webserver kann Wiederholungen im Browser bereitstellen. Die offizielle Funktionsseite warnt jedoch, dass dieser Browser-Server keinerlei Sicherheitsfunktionen bietet. Er ist kein ausgereifter Webdienst für mehrere Nutzer.

Der Import ist einer der besten Gründe für einen Wechsel zu Mnemosyne: Das Projekt dokumentiert den vollständigen Anki-Import mit benutzerdefinierten Kartentypen und Lerndaten sowie Klartext-, SuperMemo- und CueCard-Formate. Beim Export ist mehr Vorsicht nötig. Der `.cards`-Ablauf dient dem [Teilen ausgewählter Karten](https://mnemosyne-proj.org/help/sharing-cards), nicht dem Erhalt des vollständigen Lernstands. Für einen vollständigen Umzug oder eine Sicherung empfiehlt die [Anleitung für mehrere Computer](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers), stattdessen das Datenverzeichnis zu kopieren.

Wähle Mnemosyne, wenn du deine Daten lokal auf dem Desktop kontrollieren und die Synchronisierung selbst hosten möchtest, ohne einen Cloud-Anwendungsstack betreiben zu müssen. Prüfe die Einschränkung beim Bearbeiten unter Android und die fehlende Absicherung des Browser-Servers, bevor du dich außerhalb deines Desktops darauf verlässt.

## SiYuan: eine selbst gehostete Wissensdatenbank, die auch Karteikarten bietet

SiYuan ist der Ausreißer in der Open-Source-Gruppe. Im Kern ist es ein auf Datenschutz ausgerichtetes Wissensmanagementsystem mit Blockreferenzen, Dokumenten, Datenbanken und integrierten FSRS-Karteikarten. Das ist attraktiv, wenn aus deinen Notizen die Karten entstehen. Wenn du nur eine Wiederholungswarteschlange brauchst, kann sich SiYuan dagegen nach ziemlich viel Software anfühlen.

Das [offizielle Repository](https://github.com/siyuan-note/siyuan) steht unter AGPL-3.0 und verlinkt die quelloffenen Projekte für Benutzeroberfläche, Kernel, Android, iOS und HarmonyOS. Desktop- und Mobil-Apps speichern Daten lokal und funktionieren weiterhin offline. Die nativen Apps können SiYuans Ende-zu-Ende-verschlüsselte Cloud-Synchronisierung verwenden; zahlende Mitglieder können unterstützten Cloud-Speicher von Drittanbietern konfigurieren. Dieser native Synchronisierungsweg ist vom Docker-Hosting getrennt.

Docker führt eine echte, im Browser zugängliche SiYuan-Anwendung aus. Das Repository nennt jedoch drei wichtige Einschränkungen: Desktop- und Mobil-Apps können sich nicht damit verbinden, der Markdown-Import ist nicht verfügbar und der Export als PDF, HTML oder Word fehlt. Der Docker-Modus ist also ausschließlich für den Browser gedacht und kein privater Synchronisierungsserver für native Clients.

Die allgemeine Anwendung bietet mehr Möglichkeiten für Import und Export. Importiert werden können unter anderem Markdown und SiYuan-Datenpakete; exportiert werden Markdown samt Assets, PDF, Word, HTML und Datenformate. Diese allgemeinen Funktionen dürfen nicht ohne die genannten Einschränkungen in die Docker-Spalte übernommen werden. In der offiziellen Dokumentation habe ich keinen direkten Importer für Anki-`.apkg` gefunden.

Wähle SiYuan, wenn dein Hauptziel eine lokale oder selbst gehostete Wissensdatenbank ist und Karteikarten darin leben sollen. Für eine gezielte Anki-Migration bieten Anki oder Mnemosyne ein direkteres Kartenmodell und eine klarere Übertragung der Lerndaten.

## Mochi: hervorragende Offline-Funktionen machen den Kern nicht quelloffen

Mochi gehört in diesen Vergleich, obwohl es die Anforderungen für die Open-Source-Auswahl nicht erfüllt. Es ist eine angenehm schlichte, Markdown-orientierte App für Karteikarten und Notizen unter macOS, Windows, Linux, iOS, Android und im Web. Die Desktop- und Mobil-Apps können [vollständig offline und ohne Konto](https://mochi.cards/docs/getting-started/download-and-install/) laufen. Auch die Webversion nutzt lokalen Browser-Speicher, den der Browser laut Dokumentation unerwartet löschen kann.

Der Scheduler bietet zwei Antworten: Remembered und Forgot. Die Dokumentation beschreibt adaptive Intervalle, erneutes Lernen und eine [voreingestellte Ziel-Erinnerungsrate von 90 %](https://mochi.cards/docs/reviewing/due-today/), veröffentlicht aber nicht die Formel. Die geräteübergreifende Synchronisierung ist eine kostenpflichtige gehostete Funktion.

Portabilität ist eine Stärke. Mochi [importiert Anki-`.apkg`-Dateien einschließlich Wiederholungsverlauf](https://mochi.cards/docs/import-and-export/importing/), entfernt dabei aber CSS und JavaScript und wandelt HTML in Markdown um. Benutzerdefinierte Darstellungen werden daher nicht unverändert übernommen. Außerdem importiert Mochi Markdown, CSV und das eigene `.mochi`-Format.

Das [native `.mochi`-Archiv](https://mochi.cards/docs/import-and-export/mochi-format-reference/) kann Stapel, Karten, Anhänge, Tags, Vorlagen und Wiederholungen enthalten. [Markdown- und CSV-Exporte](https://mochi.cards/docs/import-and-export/exporting/) lassen sich in anderen Werkzeugen leichter prüfen, verlieren aber dokumentierte Metadaten wie Wiederholungsverlauf, Reihenfolge oder Vorlagen. Die aktuelle Dokumentation stützt daher die frühere Behauptung nicht, Mochi-Exporte könnten niemals Wiederholungsverläufe enthalten; das native Format kann sie übertragen.

Mochis [Open-Source-Repositorys](https://github.com/mochi-cards/open-source) enthalten Integrationen, Plugins und verwandte Werkzeuge, nicht die Kernanwendung oder einen bereitstellbaren Synchronisierungsdienst. Einen unterstützten Weg zum Selbsthosting gibt es nicht. Wähle Mochi, wenn Offline-Nutzung, Markdown und die `.apkg`-Migration wichtiger sind als der Zugang zum Quellcode.

## Welche Spaced-Repetition-App passt zu deiner wichtigsten Anforderung?

Es gibt keinen automatischen Sieger. Eine sinnvolle Entscheidung beginnt mit dem Punkt, bei dem du keine Kompromisse eingehen willst.

- **Wähle Anki** für die ausgereiftesten Vorlagen, Erweiterungen, Paketmigration und das breiteste Client-Ökosystem. Das offizielle Selbsthosting deckt die Synchronisierung ab, nicht AnkiWeb.
- **Wähle Flashcards** für ein einziges MIT-lizenziertes Repository mit Web-App, nativen Clients und Backend sowie eine unterstützte vollständige Produktionsbereitstellung. Akzeptiere dafür den auf AWS ausgerichteten Stack, die Abhängigkeiten von externen Diensten, den Betriebsaufwand und die verlustbehaftete Anki-Migration.
- **Wähle Mnemosyne** für fokussiertes lokales Lernen am Desktop, einen starken Anki-Import und einen selbst betriebenen Synchronisierungsserver. Unter Android lassen sich keine Karten bearbeiten, und die Wiederholung im Browser ist an deine laufende Instanz gebunden.
- **Wähle SiYuan**, wenn Notizen und Dokumente dein Hauptsystem bilden und FSRS-Karteikarten darin leben sollen. Docker bietet eine Browser-App, keine Synchronisierung für native Clients.
- **Wähle Mochi**, wenn eine proprietäre, aber vollständig offline nutzbare Markdown-App mit direktem `.apkg`-Import für dich in Ordnung ist. Der Kern ist weder quelloffen noch selbst hostbar.

Wenn Anki bereits gut funktioniert und dich keine dieser Einschränkungen stört, ist es vernünftig, dabei zu bleiben. Der Wechsel einer Spaced-Repetition-App verursacht echte Arbeit, besonders wenn Vorlagen, Medien und jahrelanger Planungsverlauf betroffen sind. Weitere Produkte außerhalb der Open-Source-Anforderung findest du im [breiteren Vergleich der Anki-Alternativen](/blog/best-anki-alternatives/).

## Checkliste für die Migration der gesamten Sammlung

Teste zuerst mit einem repräsentativen Stapel, bevor du die vollständige Sammlung anfasst. Nimm auch die schwierigen Karten auf: benutzerdefinierte Felder, Lückentexte, Bilder, Audio, verschachtelte Stapel, Tags und genug Wiederholungsverlauf, um Unterschiede zwischen den Schedulern sichtbar zu machen.

1. Exportiere eine vollständige Sicherung aus der aktuellen App und lasse diese Datei unverändert.
2. Halte die Anzahl der Karten, Feldnamen, Tags, Stapelstruktur, Medienanzahl und eine Auswahl von Fälligkeitsterminen fest.
3. Prüfe, ob das Ziel das native Format oder nur Text, CSV beziehungsweise Markdown lesen kann. Nur die Wörter zu importieren ist nicht dasselbe wie die Sammlung zu erhalten.
4. Kontrolliere nach dem Testimport Formatierung, Lückentexte, Vorlagen, Medien, Tags und Wiederholungsverlauf jeweils separat.
5. Wiederhole Karten offline auf jedem Gerät, das du verwenden möchtest. Prüfe, welche Änderungen lokal in die Warteschlange kommen und welche weiterhin einen Server erfordern.
6. Erzeuge absichtlich widersprüchliche Teständerungen und prüfe, wie die Synchronisierung sie auflöst, bevor du ihr echtes Material anvertraust.
7. Führe bei selbst gehosteten Karteikarten ein Upgrade, eine Sicherung und eine tatsächliche Wiederherstellung durch. Ein laufender Container ist noch kein Wiederherstellungsplan.
8. Lerne mehrere Tage in beiden Apps, bevor du die alte Installation löschst, einfrierst oder zurücksetzt.

Exportformate verdienen eine eigene Prüfung. Anki-Pakete können deutlich mehr als Text erhalten. Mnemosynes Freigabeexport lässt Lerndaten aus. Flashcards-Pakete übertragen Inhalte statt des vollständigen Lernstands. Mochis natives Archiv enthält mehr Metadaten als seine Markdown- und CSV-Exporte. Bei einer SiYuan-Bereitstellung mit Docker fehlen Import- und Exportbefehle, die in der allgemeinen App verfügbar sind.

## Warum Scholarsome und OpenCards nicht auf der Auswahlliste stehen

[Scholarsome](https://scholarsome.com/) ist quelloffen und selbst hostbar. Auf der offiziellen Startseite steht „Spaced repetition system implementation“ jedoch weiterhin unter den noch geplanten Funktionen. Damit scheidet Scholarsome aus einem Vergleich aus, bei dem regelmäßige, zeitlich geplante Wiederholungen im Mittelpunkt stehen, auch wenn die anderen Lernmodi nützlich sind.

[OpenCards](https://github.com/holgerbrandl/opencards) ist eine Desktop-Karteikarten-App, die auf PowerPoint- und Markdown-Dateien aufbaut. Ich habe sie nicht aufgenommen, weil die [neueste gekennzeichnete Version v2.5.1 von Januar 2017 stammt](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) und der [letzte Commit im Repository von Juni 2018](https://github.com/holgerbrandl/opencards/commits/master/). Das sind konkrete Fakten zum Projekt und keine Behauptung, die Software habe keinen Wert. Für eine neue Einrichtung auf mehreren Geräten im Jahr 2026 lässt sie sich damit jedoch nur schwer empfehlen.

## Die ehrliche Auswahlliste

Anki bietet das umfangreichste und ausgereifteste Karteikarten-Ökosystem. „Open-Source-Anki“ ergibt allerdings ein gemischtes Bild, sobald Android, iOS, gehosteter Webzugriff und selbst gehostete Synchronisierung getrennt betrachtet werden. Flashcards legt hier den größten Teil des vollständigen Produkt-Stacks offen, verlangt dafür aber den höchsten Betriebsaufwand in der Produktion und bietet die schwächste verlustfreie Migration. Mnemosyne konzentriert sich auf lokales Lernen und selbst betriebene Synchronisierung. SiYuan stellt eine echte, über Docker gehostete Browser-App rund um ein erheblich größeres Notizsystem bereit. Mochi zeigt, dass hervorragende Offline-Funktionen und Portabilität keinen quelloffenen Kern voraussetzen.

Die beste Open-Source-Karteikarten-App ist diejenige, bei der der Umfang deiner Kontrolle zu deinen tatsächlichen Anforderungen passt. Prüfe die Lizenz, teste den schwierigsten Migrationsfall und entscheide, ob du lokale Daten, selbst gehostete Synchronisierung oder eine vollständige Bereitstellung für den Browser brauchst. Diese Optionen lösen unterschiedliche Probleme.
