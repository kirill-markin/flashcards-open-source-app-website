---
title: "Kostenlose Quizlet-Alternative 2026: Was ist wirklich kostenlos?"
description: "Ist Flashcards eine kostenlose Quizlet-Alternative? Hier erfährst du, was die gehostete Beta umfasst, welche Limits sowie Import- und Exportregeln gelten, was Self-Hosting kostet und welche Quizlet-Funktionen fehlen."
image: "/blog/free-quizlet-alternative.png"
date: "2026-06-20"
updated: "2026-08-03"
keywords:
  - "kostenlose Quizlet-Alternative"
  - "Quizlet-Alternative kostenlos"
  - "kostenlose Karteikarten-App"
  - "Quizlet-Plus-Alternative"
  - "Open-Source-Quizlet-Alternative"
  - "kostenlose FSRS-Karteikarten-App"
  - "Flashcards Preise"
  - "Self-Hosting-Kosten für Karteikarten"
---

Die gehostete Version von [Flashcards](/) kostet in der Beta 0 US-Dollar, eine Kreditkarte ist nicht nötig. KI und Synchronisierung sind inbegriffen. Für Karten, Dateien und den gesamten Speicherplatz gibt es keine tarifbedingten Obergrenzen. Damit eignet sich Flashcards als **kostenlose Quizlet-Alternative** für klassische Vorder-/Rückseitenkarten. Das Wort „kostenlos“ braucht allerdings zwei Fußnoten: Technische Limits gelten weiterhin, und nicht für jede gehostete Funktion ist versprochen, dass sie dauerhaft kostenlos bleibt.

Die Software steht außerdem unter der MIT-Lizenz. Beim Self-Hosting fällt deshalb keine Lizenzgebühr an, der Produktivbetrieb kostet aber trotzdem Geld. Wer auf Quizlets Learn- oder Test-Modus, öffentliche Sets, KI-Lernwerkzeuge oder Unterrichtsfunktionen angewiesen ist, findet bei Flashcards dafür keinen gleichwertigen Ersatz.

> **Offenlegung:** Ich bin Kirill Markin und entwickle Flashcards. In diesem Artikel geht es um den Preis und die Grenzen des kostenlosen Angebots – auch dort, wo Quizlet Funktionen bietet, die Flashcards fehlen.

**Fakten geprüft:** 3. August 2026.

![Kostenlose Quizlet-Alternative als Box mit Karten und Medien, die durch eine Größenlehre passt, während der Lernstand neben der Self-Hosting-Infrastruktur zurückbleibt](/blog/free-quizlet-alternative.png)

## Kostenlose Quizlet-Alternative: die Kosten auf einen Blick

| Frage | Antwort |
|---|---|
| Ist die gehostete App kostenlos? | Ja, in der Beta. Eine Kreditkarte ist nicht erforderlich. |
| Sind KI und Synchronisierung kostenlos? | Ja, beides ist in der Beta enthalten. |
| Sind Karten oder Speicherplatz durch einen kostenlosen Tarif begrenzt? | Nein. In der Beta gibt es keine Tariflimits für Karten, Dateien oder den gesamten Speicherplatz. Technische Limits pro Datei und Vorgang gelten weiterhin. |
| Ist Self-Hosting kostenlos? | Die Softwarelizenz kostet nichts. AWS-Dienste, Drittanbieter und der Betriebsaufwand dagegen schon. |
| Kann Flashcards Quizlet-Sets importieren? | Nein. Es importiert nur sein eigenes `flashcards.zip`-Paket. |
| Ersetzt es jede wichtige Quizlet-Funktion? | Nein. Für Learn, Test, die Bibliothek öffentlicher Lernsets, Quizlets KI-Lernwerkzeuge und Unterrichtsfunktionen fehlen wichtige Entsprechungen. |

Das Versprechen für die Zeit nach der Beta ist enger als „alles bleibt für immer kostenlos“. Die Kernfunktionen zum Erstellen und Wiederholen von Karten bleiben kostenlos. Wer KI intensiver nutzt, braucht später möglicherweise einen eigenen API-Schlüssel eines Anbieters oder eine kostenpflichtige Option. Das Beta-Angebot garantiert nicht, dass jede gehostete Funktion dauerhaft kostenlos bleibt.

Wenn du die Produkte lieber Funktion für Funktion vergleichst, lies den ausführlicheren [Vergleich der Quizlet-Alternativen](/blog/quizlet-alternative/). Hier geht es bewusst nur um Preis, Limits, Datenportabilität und fehlende Funktionen, die den Wert von „kostenlos“ verändern können.

## Was ist in der gehosteten Beta kostenlos?

Du kannst dich derzeit registrieren und den wichtigsten Lernablauf kostenlos nutzen:

- Vorder-/Rückseitenkarten erstellen und bearbeiten
- Karten mit dem FSRS-6-Scheduler wiederholen
- Änderungen an Karten und Wiederholungen lokal erfassen und später zwischen Web, iOS und Android synchronisieren
- passende Medien an Karten anhängen
- den KI-Chat mit Dateianhängen nutzen
- KI-Clients über MCP anbinden
- die Agent API nutzen
- Flashcards-Workspace-Pakete importieren und exportieren

In der Beta gibt es keinen kostenpflichtigen Tarif, der KI oder die geräteübergreifende Synchronisierung erst freischaltet. Auf der [Preisseite](/pricing/) findest du den aktuellen Stand des gehosteten Angebots und seine künftigen Grenzen.

Dass eine Funktion im Angebot enthalten ist, heißt nicht, dass sie offline funktioniert. Änderungen an Karten und Wiederholungen lassen sich lokal erfassen und nach dem nächsten Verbindungsaufbau synchronisieren. KI-Anfragen und die Synchronisierung selbst brauchen weiterhin eine Netzwerkverbindung.

## Die kostenlose gehostete App hat technische Limits

Keine Tariflimits bedeuten nicht, dass es überhaupt keine technischen Grenzen gibt. Flashcards begrenzt Beta-Konten nicht nach der Gesamtzahl ihrer Karten oder Dateien und auch nicht nach dem insgesamt belegten Speicherplatz. Für einzelne Anfragen und Übertragungen gelten trotzdem Größenbeschränkungen.

Für `flashcards.zip`-Pakete gelten derzeit folgende Limits:

| Paketvorgang | Limit |
|---|---:|
| Karten in einem Paket | 5.000 |
| Mediendateien in einem Paket | 10.000 |
| Einzelne Mediendatei | 16 MiB |
| Alle Medien in einem Paket zusammen | 64 MiB |
| Importierte ZIP-Datei | 80 MiB |

Diese Werte gelten jeweils für einen einzelnen Import- oder Exportvorgang. Es sind weder kontoweite Obergrenzen für Karten, Dateien oder Speicherplatz noch die Schwelle zu einem versteckten Bezahl-Tarif. Einen größeren Workspace musst du möglicherweise in mehreren Paketen übertragen. Für KI-Anfragen und Anhänge gelten außerdem eigene Vorgaben pro Anfrage und für unterstützte Dateitypen.

## Import und Export können weniger, als die Begriffe vermuten lassen

Flashcards hat genau ein natives Austauschformat: das `flashcards.zip`-Workspace-Paket.

Die App kann ein gültiges Paket importieren, das zuvor aus Flashcards exportiert wurde. Quizlet-Sets, CSV-, TSV- oder andere Textdateien mit Trennzeichen kann sie nicht einlesen. Bei Quizlet lassen sich dagegen [Sets aus Text mit Trennzeichen erstellen](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content). Eine vergleichbare Oberfläche für Textimporte gibt es in Flashcards nicht.

Das Paket enthält die Lerninhalte, die Flashcards wiederherstellen kann:

- Karten
- die Tags der Karten
- Medien, auf die die Karten verweisen

Nicht enthalten ist der Zustand rund um diese Inhalte:

- Wiederholungsverlauf
- Zustand des FSRS-Schedulers
- Workspace-Einstellungen
- vollständige Deck-Strukturen
- Kontodaten

Mit `flashcards.zip` kannst du also ausgewählte Lerninhalte zwischen gehosteten und selbst gehosteten Flashcards-Workspaces übertragen. Ein Konto lässt sich damit nicht vollständig nachbilden, und der exakte Wiederholungsplan wird nicht fortgesetzt. Das Paket ist auch kein Backup für die Notfallwiederherstellung: Wer Flashcards selbst hostet, muss Datenbank und Medien weiterhin separat sichern.

### Bestehende Quizlet-Sets müssen neu aufgebaut werden

Auf der Quizlet-Website können Ersteller [Begriffe und Definitionen aus ihren eigenen Sets exportieren](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets). Kopierte Sets und Bilder nimmt der Export nicht mit.

Das Ergebnis ist Text, kein Paket, das Flashcards akzeptiert. Du kannst ausgewählte Karten von Hand neu erstellen oder den Text im Flashcards-KI-Chat als Ausgangsmaterial für Entwürfe von Vorder-/Rückseitenkarten verwenden. In beiden Fällen musst du die neu erstellten Karten prüfen und speichern. Ein direkter Import ist keiner der beiden Wege.

Der [Leitfaden zum Quizlet-Export](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) erklärt, wie du den exportierten Text bereinigst. Der Umzug ist nicht verlustfrei: Bilder und Lernstand fehlen im Export, und Flashcards kann den Text nicht als natives Austauschformat einlesen.

## Self-Hosting kostet keine Lizenzgebühr, aber trotzdem Geld

Der Flashcards-Code steht unter der MIT-Lizenz. Du kannst ihn prüfen, verändern und bereitstellen, ohne eine Softwarelizenz zu kaufen. Kosten entstehen trotzdem durch die Produktionsserver und die Arbeit rund um ihren Betrieb.

Der unterstützte Weg für den Produktivbetrieb ist der AWS-CDK-Stack des Repositorys. Die Docker- und PostgreSQL-Konfiguration dient der lokalen Entwicklung; sie ist keine dokumentierte Abkürzung für eine produktive Bereitstellung.

Wer eine produktive Installation betreibt, ist verantwortlich für:

- AWS-Dienste für Datenbank, Speicher, Rechenleistung und Netzwerk
- eine Domain und die DNS-Konfiguration
- die E-Mail-Zustellung
- Monitoring und Alarmierung
- die optionale Nutzung eines KI-Anbieters samt Zugangsdaten
- die Verwaltung von Secrets
- Datenbank- und Medien-Backups einschließlich Wiederherstellungstests
- Upgrades, Migrationen, Sicherheitsarbeit und die dafür nötige Arbeitszeit

Der Stack automatisiert Teile der Bereitstellung, nimmt dir diese Aufgaben aber nicht ab. Eine allgemeingültige monatliche Kostenschätzung gibt es nicht: Region, Datenverkehr, Speicherplatz, Backup-Richtlinie, E-Mail-Volumen, KI-Nutzung und die Entscheidungen des Betreibers verändern die Rechnung. Der [Self-Hosting-Leitfaden](/docs/self-hosting/) dokumentiert die AWS-Architektur und erklärt, wo die Grenze zur lokalen Entwicklung verläuft.

Self-Hosting verändert also, wer für den Stack bezahlt und ihn betreibt. Cloud-Infrastruktur wird dadurch nicht kostenlos. Wenn du keine Kontrolle über die Infrastruktur brauchst, erspart dir die gehostete Beta den Betriebsaufwand, solange das Angebot kostenlos bleibt.

## Wichtige Quizlet-Funktionen ohne gleichwertigen Ersatz

In vier Bereichen von Quizlet, die wichtiger sein können als der Preis, bietet Flashcards derzeit keinen direkten Ersatz:

- eigene Learn- und Test-Modi einschließlich eines automatisch erzeugten Multiple-Choice-Ablaufs
- eine vergleichbare öffentliche Bibliothek mit Lernsets
- Quizlets KI-Suite aus Study Guides, Practice Tests und Ask Quizlet
- das Ökosystem für Unterricht und Lehrkräfte rund um Quizlet Live, Kurse und Fortschrittsberichte

Quizlets Übersicht beschreibt [Learn, Test, Practice Tests, Study Guides und Quizlet Live](https://help.quizlet.com/hc/en-us/articles/360030841732-Studying-on-Quizlet). Auch der kostenlose Quizlet-Zugang hat Grenzen: Nutzer ohne Abo erhalten nur eine begrenzte Anzahl an Learn-Runden und einen Übungstest pro Set. Lernende in einem berechtigten, von einer Lehrkraft verwalteten Kurs können [unbegrenzten und werbefreien Zugang zu Learn und Test für die Sets des Kurses erhalten](https://help.quizlet.com/hc/en-us/articles/34270983035149-Free-student-access-to-Learn-and-Test-modes).

Wenn geführte Modi, fertige öffentliche Inhalte oder Unterrichtswerkzeuge fest zu deiner Lernroutine gehören, ersetzt auch ein kostenloses Flashcards-Konto diese Funktionen nicht. Die Beta deckt einen anderen Ablauf ab: Vorder-/Rückseitenkarten, Wiederholungen mit FSRS-6, lokal gespeicherte Änderungen mit späterer Synchronisierung, Medien, KI-Chat und Agentenzugriff.

## Die ehrliche Antwort zur kostenlosen Quizlet-Alternative

Flashcards ist in der Beta eine **kostenlose Quizlet-Alternative** für Vorder-/Rückseitenkarten, Wiederholungen mit FSRS-6, Offline-First-Nutzung im Web und auf Mobilgeräten, Synchronisierung, Medien und KI-Unterstützung. Eine Kreditkarte ist nicht erforderlich. Auch Tariflimits für Karten, Dateien oder den gesamten Speicherplatz gibt es nicht. Die technischen Grenzen für Pakete und Anfragen gelten weiterhin.

Die App ist kein gleichwertiger Ersatz für Quizlets Learn- oder Test-Modus, die Bibliothek öffentlicher Lernsets, KI-Lernformate oder das Unterrichtssystem. Bestehende Quizlet-Inhalte müssen außerdem aus zulässigen Textexporten neu aufgebaut werden; direkt importieren lassen sie sich nicht.

Am klarsten sind die Kosten, wenn du sie getrennt betrachtest. Die gehostete Beta kostet heute 0 US-Dollar. Das Erstellen und Wiederholen von Karten bleibt kostenlos; für eine intensivere KI-Nutzung könnte später ein eigener API-Schlüssel eines Anbieters oder eine kostenpflichtige Option nötig sein. Beim Self-Hosting entfällt die Softwarelizenzgebühr, dafür kommen Infrastruktur, Drittanbieterdienste, Wartung und Arbeitszeit hinzu. Wenn diese Grenzen zu deinen Anforderungen passen, [öffne Flashcards](https://app.flashcards-open-source-app.com/) und probiere den gehosteten Lernablauf aus.
