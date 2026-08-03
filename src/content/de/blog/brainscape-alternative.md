---
title: "Brainscape-Alternative (2026): Brainscape vs Flashcards"
description: "Vergleich von Brainscape und Flashcards: Confidence-Based Repetition vs FSRS, Offline-Nutzung, mobile Apps, Zusammenarbeit, KI, Preise, Import, Export und Kontrolle."
date: "2026-03-21"
updated: "2026-08-03"
image: "/blog/brainscape-alternative.png"
keywords:
  - "brainscape alternative"
  - "brainscape vs flashcards"
  - "confidence-based repetition vs FSRS"
  - "offline lernkarten app"
  - "open source lernkarten app"
  - "Brainscape Preise"
  - "Brainscape Export"
  - "FSRS lernkarten app"
---

Der wichtigste Unterschied zwischen Brainscape und Flashcards steckt in einem Feld, das du bei Brainscape nie verwalten musst: dem genauen Fälligkeitszeitpunkt einer Karte. Brainscape fragt auf einer Skala von 1 bis 5, wie sicher du dir bei der Antwort bist, und hält das Deck für weitere Durchgänge offen. Bei Flashcards wählst du Again, Hard, Good oder Easy. Anschließend legt FSRS-6 für diese Karte einen konkreten Zeitpunkt für die nächste Wiederholung fest.

Dieser Unterschied in der Lernplanung prägt fast jede Entscheidung im Vergleich **Brainscape vs Flashcards**. Brainscape ist die bessere Wahl für gemeinsam genutzte Klassen, Bearbeitungsrechte, Analysen für Lehrkräfte, den Import gängiger Tabellenformate und einen geführten Lernmodus, den du jederzeit zum Pauken nutzen kannst. [Flashcards](/features/) ist die stärkere **Brainscape-Alternative**, wenn du eine klare Fälligkeitswarteschlange, Offline-first-Bearbeitung auf allen unterstützten Plattformen, Zugriff für KI-Agenten, MIT-lizenzierten Code oder eine selbst gehostete Installation möchtest.

> **Offenlegung:** Ich bin Kirill Markin und entwickle Flashcards, eines der beiden hier verglichenen Produkte. In mehreren wichtigen Kategorien liegt Brainscape vorn. Ich habe den Vergleich auf Funktionen beschränkt, die auf offiziellen Produktseiten, in Hilfeartikeln und in den Quellcode-Repositorys dokumentiert sind.

**Stand der Angaben:** 3. August 2026. Die Preise entsprechen den öffentlich ausgewiesenen US-Preisen an diesem Tag. Steuern, regionale Preise, die Abrechnung über App-Stores, individuelle Angebote für Institutionen und künftige Beta-Bedingungen können abweichen.

![Brainscape-Alternative im Vergleich: Vertrauensbewertungen, FSRS-Fälligkeitswarteschlange, mobiles Offline-Lernen und Open-Source-Kontrolle](/blog/brainscape-alternative.png)

## Die Kurzantwort

Wähle **Brainscape**, wenn du Klassen teilen, Bearbeitungsrechte für Karten verwalten, den Lernfortschritt verfolgen, gängige Tabellendateien importieren oder ein Deck jederzeit wiederholen möchtest, ohne auf fällige Karten zu warten. Confidence-Based Repetition mit Bewertungen von 1 bis 5 bleibt auch für eine kurzfristige Lerneinheit vor der Prüfung verfügbar.

Wähle **Flashcards**, wenn FSRS-6 anhand einer angestrebten Behaltensrate eine eindeutige Fälligkeitswarteschlange erstellen soll, Bearbeitungen und Wiederholungen im Web sowie unter iOS und Android zunächst lokal gespeichert werden müssen oder du eine Open-Source-Lernkarten-App mit KI-Chat, MCP, Agent API und dokumentiertem Self-Hosting suchst.

Bleib bei Brainscape, wenn Klassen oder Analysen zu deinem tatsächlichen Lernalltag gehören. Flashcards ersetzt diese Funktionen derzeit nicht. Bei einem Umzug der Karten würde außerdem der bisherige Planungsverlauf aus Brainscape zurückbleiben.

## Brainscape vs Flashcards auf einen Blick

| Entscheidung | Brainscape | Flashcards | Besser geeignet |
|---|---|---|---|
| Wiederholungsmodell | Confidence-Based Repetition; Bewertung von 1 bis 5, wobei Karten mit niedriger Vertrauensbewertung häufiger und solche mit hoher Bewertung seltener ausgewählt werden | FSRS-6; Bewertung mit Again/Hard/Good/Easy und Speicherung eines eindeutigen `due_at` | Brainscape für flexible Wiederholungen und Pauken auf Abruf; Flashcards für eine Fälligkeitswarteschlange und Kontrolle über die Behaltensrate |
| Details der Lernplanung | Relative Auswahl aus Bewertungsstufen, sobald du die nächste Karte anforderst; selbst Decks mit ausschließlich 5er-Bewertungen bleiben lernbar | D/S/R-Gedächtniszustand; angestrebte Behaltensrate von 0,90; Lernschritte nach 1 und 10 Minuten; Wiedererlernschritt nach 10 Minuten; maximal 36.500 Tage; Fuzz; im Code fest hinterlegte, nicht personalisierte Gewichte | Hängt von der gewünschten Warteschlange ab |
| Plattformen | Web, iOS, Android | Web, iOS, Android; kein Desktop-Client | Gleichstand bei den unterstützten Plattformen |
| Offline-Verhalten | Zuvor heruntergeladene Karten lassen sich mobil offline lernen; Erstellen und Bearbeiten benötigen eine Verbindung | Wiederholungen und Bearbeitungen werden zuerst lokal gespeichert: in IndexedDB im Web, SQLite unter iOS und Room/SQLite unter Android; anschließend werden sie synchronisiert | Flashcards für Offline-Erstellung und -Bearbeitung |
| Zusammenarbeit | Klassen, Freigabelinks, Bearbeitungsrechte und ausführliche Analysen in Tarifen für Schulen und Gruppen | Keine vergleichbaren per Link geteilten Klassen, Bearbeitungsrechte für Karten oder Fortschrittsanalysen für Lehrkräfte | Brainscape |
| KI | Mit Basic lassen sich „Hunderte“ KI-Lernkarten erstellen; Pro nennt unbegrenzte KI-Nutzung; Abläufe vom Quellmaterial zur Karte und zur Bereinigung von Importen | KI-Chat, unterstützte Dateianhänge, Lese- und Schreibaktionen im Workspace, MCP und Agent API | Brainscape für geführte Massenerstellung; Flashcards für Agentenzugriff |
| Import | Liste einfügen oder CSV-, TXT-, XLSX- beziehungsweise ODS-Datei hochladen; mobil werden außerdem Dateien, Bilder und Kameraaufnahmen akzeptiert | Direkter Import nur für das eigene Format `flashcards.zip`; andere unterstützte Dateien können als Quellmaterial für von der KI entworfene und anschließend geprüfte Karten dienen | Brainscape für den Import gängiger Formate |
| Export | Der Deckexport mit Pro erzeugt Tabellendateien, die sich in Excel öffnen lassen | `flashcards.zip` überträgt aktive Karten, Tags und referenzierte Medien zwischen Flashcards-Workspaces oder -Instanzen | Kommt darauf an: Brainscape für Tabellen, Flashcards für die Übertragung zwischen eigenen Workspaces |
| Preis, geprüft am 3. August 2026 | Basic kostenlos; Pro bei jährlicher Abrechnung mit 7,99 US-Dollar pro Monat angegeben; Enterprise auf Anfrage | Gehostete App während der Beta kostenlos; Self-Hosting der Software kostenlos zuzüglich Infrastruktur- und Anbieterkosten | Hängt von Nutzung und Hosting-Modell ab |
| Kontrolle | Proprietärer gehosteter Dienst; Export mit Pro verfügbar | Vollständige Anwendung und Infrastruktur MIT-lizenziert; dokumentiertes Self-Hosting auf AWS | Flashcards |

Diese Tabelle ist eine Entscheidungshilfe, keine Rangliste nach Funktionsumfang. Eine Lehrkraft mit sechs Klassen kann sich völlig nachvollziehbar für Brainscape entscheiden, auch wenn die Kontrolle durch Open Source attraktiv klingt. Wer allein lernt und Karten bei unzuverlässiger Verbindung bearbeitet, kann zum gegenteiligen Ergebnis kommen.

## Confidence-Based Repetition vs FSRS-6

Beide Systeme reagieren nach jeder Wiederholung auf deine Rückmeldung. Sie nutzen diese Rückmeldung allerdings unterschiedlich.

### Brainscape priorisiert relativ und lässt dich jederzeit weiterlernen

Bei Brainscapes [Definition von Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/) bewertest du auf einer Skala von 1 bis 5, wie sicher du dir bei der Antwort bist. Karten mit einer 1 oder 2 kehren mit höherer Wahrscheinlichkeit bald zurück, Karten mit einer 4 oder 5 erscheinen seltener.

Der [offizielle Vergleich der Algorithmen](https://www.brainscape.com/academy/comparing-spaced-repetition-algorithms/) beschreibt CBR als relative Lernplanung. Wenn du die nächste Karte anforderst, wählt Brainscape zunächst eine Bewertungsstufe aus, statt ein vorab festgelegtes Datum samt Uhrzeit für diese Karte zu prüfen. Ein Deck, dessen Karten alle mit 5 bewertet wurden, wird nicht gesperrt. Du kannst einfach weiterlernen.

Das passt, wenn du einen geführten Lernmodus möchtest, ohne Intervalle selbst einzustellen. Auch zum Pauken eignet sich das Modell: Du öffnest das Deck, lernst weiter und verbringst mehr Zeit mit dem Material, bei dem du dir weniger sicher bist. Dafür bietet Brainscape keine kalenderähnliche Warteschlange, in der jede Karte einen konkreten Fälligkeitszeitpunkt hat.

### Flashcards plant eine Fälligkeitswarteschlange nach Behaltensrate

Flashcards verwendet [FSRS-6](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md). Das [offene FSRS-Modell](https://github.com/open-spaced-repetition/free-spaced-repetition-scheduler) bildet den Gedächtniszustand einer Karte über Schwierigkeit (D), Stabilität (S) und Abrufbarkeit (R) ab. Nach Again, Hard, Good oder Easy aktualisiert Flashcards diesen Zustand und speichert einen eindeutigen `due_at`-Zeitstempel.

Die Standardeinstellungen sind konkret: Die angestrebte Behaltensrate beträgt 0,90, die Lernschritte liegen bei 1 und 10 Minuten, der Wiedererlernschritt bei 10 Minuten, das maximale Intervall bei 36.500 Tagen und Fuzz ist aktiviert. Flashcards hinterlegt die offiziellen Standardgewichte von FSRS-6 fest im Code, statt sie anhand des Verlaufs einzelner Nutzer zu personalisieren. Änderungen an den Einstellungen gelten für künftige Wiederholungen; bereits getroffene Planungsentscheidungen werden nicht nachträglich umgeschrieben.

Dieses Modell passt zu Lernenden, für die „Was ist jetzt fällig?“ eine verbindliche Grenze sein soll. Die angestrebte Behaltensrate macht außerdem den Zusammenhang mit dem Arbeitsaufwand sichtbar: Wer vom Scheduler eine höhere Behaltensrate verlangt, muss in der Regel mehr Wiederholungen einplanen.

Es gibt hier keine geprüfte Grundlage für die Behauptung, FSRS sei grundsätzlich wirksamer als Brainscape. Die praktische Entscheidung ist deutlich enger:

- Brainscape priorisiert Karten relativ zueinander und lässt dich ein Deck jederzeit weiterlernen.
- Flashcards weist Fälligkeitszeitpunkte zu und baut anhand einer angestrebten Behaltensrate eine Warteschlange auf.

Wähle Brainscape, wenn flexible Wiederholungen und jederzeitiges Pauken wichtig sind. Flashcards passt besser, wenn eine Fälligkeitswarteschlange entscheiden soll, was heute Aufmerksamkeit braucht. Mehr über dieses Modell erfährst du im Vergleich [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

## Mobiler Lernalltag und Offline-Verhalten

Beide Produkte laufen im Web sowie unter iOS und Android. Keines beschränkt dich auf einen reinen Smartphone-Workflow, doch ihre Offline-Grenzen unterscheiden sich.

Laut Brainscape lassen sich [zuvor heruntergeladene Karten in den mobilen Apps offline lernen](https://brainscape.zendesk.com/hc/en-us/articles/360001017252-Do-I-need-WiFi-or-a-4G-LTE-connection). Zum Erstellen oder Bearbeiten von Lernkarten ist WLAN oder eine mobile Datenverbindung erforderlich. Das passt, wenn du dein Material mit bestehender Verbindung vorbereitest und vor allem auf dem Arbeitsweg oder im Flugzeug offline wiederholen möchtest.

Flashcards folgt einer [Offline-first-Synchronisierungsarchitektur](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/architecture.md#offline-first-sync). Die Web-App schreibt in IndexedDB, iOS in SQLite und Android über Room in SQLite. Wiederholungen und Bearbeitungen werden zunächst auf dem Gerät gespeichert, gehen danach in den Synchronisierungsablauf ein und werden hochgeladen, sobald die Verbindung wieder verfügbar ist.

Welche App praktisch vorn liegt, hängt von der jeweiligen Aktion ab. Beide ermöglichen auf Mobilgeräten die Offline-Wiederholung von Karten, die bereits auf dem Gerät liegen. Flashcards geht weiter: Der dokumentierte Local-first-Ablauf umfasst das Erstellen, Bearbeiten und Wiederholen, auch im Browser, sobald Web-App und Daten verfügbar sind. Nach dem Wiederherstellen der Verbindung läuft die Synchronisierung weiter. Flashcards hat keinen nativen Desktop-Client für Windows, macOS oder Linux; am Computer nutzt du die App im Browser.

Wenn lokale Schreibvorgänge der Grund für deine Suche nach einer **Offline-Lernkarten-App** sind, hilft der [Vergleich von Offline-Lernkarten-Apps](/blog/best-offline-flashcards-app/) weiter.

## Bei Zusammenarbeit und Klassenverwaltung liegt Brainscape vorn

Der [Basic-Tarif](https://www.brainscape.com/pricing) von Brainscape umfasst das Teilen von Lernkarten und die Verwaltung von Bearbeitungsrechten. Nutzer können Material in Klassen organisieren und über Freigabelinks verteilen. Für eine Lerngruppe ist das bereits hilfreicher, als statische Kopien von Decks hin- und herzuschicken.

Die [Angebote für Lehrkräfte und Schulen](https://www.brainscape.com/teachers) ergänzen ausführliche Analysen zum Lernfortschritt, private Inhalte und Gruppenlizenzen. Enterprise bietet außerdem eine private Landingpage im eigenen Branding. Eine Lehrkraft kann gemeinsam genutztes Material verwalten und sehen, wie die Lernenden vorankommen, statt sich auf deren eigene Angaben verlassen zu müssen.

Flashcards bietet derzeit keine gleichwertigen, per Link geteilten Klassen, keine Verwaltung von Bearbeitungsrechten und keine Fortschrittsanalysen für Lehrkräfte. Workspaces und Agentenschnittstellen sind nicht mit fertigen Funktionen für die Zusammenarbeit im Unterricht gleichzusetzen. Wenn mehrere Personen gemeinsam ein Klassendeck verwalten müssen oder Fortschrittsberichte zur Aufgabe gehören, liegt Brainscape klar vorn.

## KI: Massenerstellung oder Agentenzugriff

Brainscape bindet KI in einen geführten Ablauf zur Kartenerstellung ein. Laut [Basic-Tarif](https://www.brainscape.com/pricing) können Nutzer „Hunderte“ KI-Lernkarten erstellen, während Pro unbegrenzte KI-Nutzung aufführt. Brainscape kann Anweisungen oder Quellmaterial in Karten verwandeln und nach einem eingefügten oder hochgeladenen Import eine KI-gestützte Bereinigung anbieten. Das ist praktisch, wenn die Aufgabe mit „Verwandle dieses Material in ein Deck“ beginnt.

Flashcards verfolgt einen stärker am Workspace ausgerichteten Ansatz. [KI-Chat und unterstützte Dateianhänge](/docs/getting-started/) helfen beim Entwerfen und Überarbeiten von Karten. Der Assistent kann begrenzte Lese- und Schreibaktionen im Workspace ausführen. Über [MCP](/docs/mcp-connector/) und die [Agent API](/docs/api/) können kompatible KI-Clients und Terminal-Agenten dokumentierte Schnittstellen nutzen.

Diese Schnittstellen bieten weder Brainscapes Bibliothek mit Certified-Inhalten noch dessen Unterrichtsabläufe. KI-gestützte Kartenerstellung ist außerdem kein verlustfreier Import: Ein Assistent interpretiert das Quellmaterial und schlägt Karten vor. Prüfe in beiden Produkten die erzeugten Fakten, bevor du sie durch wiederholtes Lernen festigst.

Brainscape ist die einfachere Wahl für eine geführte Massenerstellung innerhalb eines Lernprodukts für Endnutzer. Flashcards bietet mehr Möglichkeiten, wenn externe Agenten an der Pflege des Workspaces mitwirken sollen.

## Preise: Abo, Beta und Self-Hosting-Kosten

Brainscape Basic ist kostenlos. Am 3. August 2026 wies die [Preisseite von Brainscape](https://www.brainscape.com/pricing) für Pro bei jährlicher Abrechnung **7,99 US-Dollar pro Monat** aus. Pro enthält unbegrenzte KI-Nutzung, unbegrenzten Zugriff auf Certified- und nutzergenerierte Inhalte, Medien, Lesezeichen, umgekehrte Karten und private Inhalte. Enterprise wird individuell angeboten und wirbt mit Einsparungen von bis zu 70 Prozent gegenüber Pro für Endnutzer.

Die gehostete Flashcards-App ist [während der Beta kostenlos](/pricing/), einschließlich KI und Synchronisierung zu den aktuellen Beta-Bedingungen. Abgesehen von technischen Grenzen gibt es während der Beta keine tarifbedingten Obergrenzen für Karten, Dateien oder den gesamten Speicherplatz. Die grundlegende Kartenerstellung und Wiederholung sollen kostenlos bleiben. Der derzeitige gehostete Preis von 0 US-Dollar garantiert jedoch nicht, dass jede gehostete Funktion dauerhaft kostenlos bleibt. Für eine intensivere KI-Nutzung könnte später ein eigener Anbieterschlüssel oder eine kostenpflichtige Option nötig werden.

Auch die selbst gehostete Flashcards-Software ist unter der MIT-Lizenz kostenlos, ihr Betrieb aber nicht. Der Betreiber trägt die Kosten für Infrastruktur und externe Anbieter und ist für die Wartung verantwortlich. Eine Softwarelizenz für 0 US-Dollar und ein Gesamtsystem ohne monatliche Kosten sind zwei verschiedene Dinge.

Brainscape bietet derzeit das besser kalkulierbare Angebot für Endnutzer. Flashcards hat den niedrigeren gehosteten Beta-Preis und ermöglicht durch Self-Hosting die Kontrolle über das System. Künftige Bedingungen für die gehostete KI und die Betriebskosten gehören trotzdem in die Entscheidung.

## Import und Export sind nicht dasselbe wie eine Migration

Brainscape bietet den breiteren Importweg für gängige Formate. Der [offizielle Importleitfaden](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) beschreibt eingefügte Listen und das Hochladen von CSV-, TXT-, XLSX- und ODS-Dateien. Mobil kann derselbe Ablauf mit einer Datei, einem Bild aus der Fotobibliothek oder einer Kameraaufnahme beginnen. Für vorhandene Tabellen oder einen Arbeitsablauf mit fotografierten Notizen ist das ein deutlicher Vorteil.

Ein Export ist verfügbar, allerdings [erfordert der Deckexport von Brainscape Pro](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Die erzeugten Dateien lassen sich in Excel öffnen und später wieder hochladen. Brainscape dokumentiert nicht, dass dieser Export Vertrauensbewertungen, Lernverlauf, Analysen, Klassen oder Berechtigungen enthält. Behandle ihn daher als Sicherung der Karteninhalte und nicht als übertragbare Kopie der gesamten Lernumgebung.

Flashcards importiert und exportiert sein eigenes [`flashcards.zip`-Paket](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/apps/web/src/screens/settings/workspace/packages). Es überträgt aktive Karten, Tags und referenzierte Medien zwischen Flashcards-Workspaces beziehungsweise zwischen gehosteten und selbst gehosteten Instanzen. Nicht enthalten sind Wiederholungsverlauf, FSRS-Zustand, Workspace-Einstellungen, vollständige Deckstruktur oder Kontodaten. Einen direkten Import für Brainscape-Tabellen oder Anki-Pakete gibt es nicht.

Du kannst unterstützte Dateien an den KI-Chat von Flashcards anhängen und ihn bitten, Karten zu entwerfen. Das kann beim gezielten Neuaufbau helfen, bleibt aber ein KI-gestützter Erstellungsprozess. Prüfe jede vorgeschlagene Karte, gleiche sie mit der Quelle ab und rechne mit einem vollständig neuen FSRS-Planungszustand.

Brainscape liegt beim Übertragen gängiger Dateien in ein Deck vorn. Keines der beiden Produkte bietet eine verlustfreie Migration von Brainscape zu Flashcards.

## Kontrolle: Exportzugriff oder eigener Betrieb des gesamten Stacks

Brainscape ist ein proprietärer gehosteter Dienst. Nutzer können dort Inhalte erstellen und teilen, und Pro bietet einen dokumentierten Deckexport. Den Anwendungs-Stack von Brainscape können sie weder prüfen noch ändern oder selbst betreiben.

Die vollständige Flashcards-Anwendung samt Infrastruktur ist auf [GitHub unter der MIT-Lizenz](https://github.com/kirill-markin/flashcards-open-source-app) veröffentlicht. Der [Self-Hosting-Leitfaden](/docs/self-hosting/) beschreibt die produktive Bereitstellung im eigenen AWS-Konto des Betreibers. Dadurch erhält dieser die Kontrolle über Code, Infrastruktur und Datenbank.

Self-Hosting bringt auch Arbeit mit: Der Betreiber ist für AWS-Einrichtung und -Kosten, Domains, E-Mail, KI-Anbieter, Monitoring, Backups, Upgrades und Wiederherstellungen verantwortlich. Kostenlose Software bedeutet keine kostenlose Infrastruktur. Auch bei der gehosteten Flashcards-App nutzt du einen gehosteten Dienst; allein die Verfügbarkeit des Quellcodes bringt die gehostete Datenbank nicht unter deine Kontrolle.

Flashcards liegt vorn, wenn eine **Open-Source-Lernkarten-App** für dich bedeutet, den gesamten Stack prüfen, ändern und betreiben zu können. Brainscape ist einfacher, wenn der Anbieter alles betreiben soll und dir ein Tabellenexport mit Pro als Möglichkeit zur Datenübertragung genügt.

## Eine praktische Wechsel-Checkliste

Kündige Brainscape nicht und lösche keine Klasse, bevor du den vorgesehenen Ersatzablauf getestet hast.

1. Liste die Brainscape-Funktionen auf, die du in der vergangenen Woche tatsächlich genutzt hast: Klassen, Freigabelinks, Bearbeitungsrechte, Analysen, Certified-Inhalte, Medien, umgekehrte Karten, KI-Erstellung und jederzeitiges Pauken.
2. Markiere jeden Punkt, den Flashcards nicht ersetzt. Zusammenarbeit und Analysen für Lehrkräfte sind die wahrscheinlichsten Hindernisse.
3. Wenn du Pro hast, exportiere ein repräsentatives Brainscape-Deck und bewahre die Originaltabelle unverändert auf. Nutzt du nur Basic, berücksichtige vor der Planung des Wechsels, dass der Export Pro voraussetzt.
4. Teste ein kleines Deck mit einfachen Karten, einer Karte mit Tag, Medien und den Formatierungen, die dir wichtig sind. Nutze den Export lediglich als Quellmaterial für anschließend geprüfte, KI-gestützte Entwürfe; einen direkten Import gibt es nicht.
5. Vergleiche die Anzahl der Karten, Vorder- und Rückseiten, Medien und Tags. Gehe davon aus, dass Vertrauensbewertungen, Wiederholungsverlauf, Klassen, Berechtigungen und Analysen zurückbleiben.
6. Beginne die neue FSRS-Warteschlange mit neuen Planungsdaten. Prüfe die standardmäßige Behaltensrate von 0,90 und die Lernschritte, bevor du sie änderst; neue Einstellungen wirken sich auf künftige Wiederholungen aus.
7. Arbeite auf dem Gerät offline, das du tatsächlich mitnimmst. Erstelle, bearbeite und wiederhole Karten, stelle die Verbindung wieder her und bestätige die Synchronisierung, bevor du weiteres Material überträgst.
8. Lass Brainscape verfügbar, bis mehrere Tage mit echten Lerneinheiten zeigen, dass die neue Warteschlange und der mobile Lernalltag zu dir passen.

## Welche Brainscape-Alternative passt zu deinem Lernalltag?

Brainscape ist das stärkere Produkt für gemeinsam genutzte Klassen, Bearbeitungsrechte, Analysen für Lehrkräfte und Lernende, den Import gängiger Tabellen, Certified-Inhalte und einen flexiblen Ablauf mit Vertrauensbewertungen, der jederzeit zum Pauken bereitsteht. Das sind wesentliche Vorteile, keine Randnotizen.

Flashcards ist eine fokussierte **Brainscape-Alternative** für andere Prioritäten: eindeutige FSRS-6-Fälligkeitstermine, lokale Schreibvorgänge nach dem Offline-first-Prinzip, KI- und Agentenzugriff, MIT-lizenzierter Code und optionales Self-Hosting. Dafür musst du schwächere Zusammenarbeit, den fehlenden direkten Brainscape-Import, einen nicht übertragenen Planungsverlauf und den tatsächlichen Betriebsaufwand beim Self-Hosting in Kauf nehmen.

Bleib bei Brainscape, wenn relative Priorisierung, Unterrichtsabläufe und unkomplizierte Massenerstellung dein Problem lösen. Probiere Flashcards aus, wenn dir eine an der Behaltensrate ausgerichtete Fälligkeitswarteschlange, Offline-Bearbeitung im Web und auf Mobilgeräten, Agentenzugriff oder Kontrolle über den Anwendungs-Stack wichtiger sind.

Wenn die Abwägung für Flashcards zu deinem Bedarf passt, [öffne die App](https://app.flashcards-open-source-app.com/) oder lies den [Leitfaden für die ersten Schritte](/docs/getting-started/). Wenn Zusammenarbeit oder jederzeitiges Pauken zentral sind, ist es besser, bei Brainscape zu bleiben.
