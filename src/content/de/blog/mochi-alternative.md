---
title: "Mochi vs. Anki (2026): Markdown-Notizen oder maximale Kontrolle?"
description: "Mochi oder Anki? Vergleiche Markdown, FSRS, Offline-Nutzung, Sync, Preise, Import und Export – und finde die passende App für deinen Workflow und deine Karten."
date: "2026-03-18"
updated: "2026-08-19"
image: "/blog/mochi-alternative-v2.png"
keywords:
  - "mochi vs anki"
  - "anki vs mochi"
  - "mochi lernkarten"
  - "mochi preise"
  - "mochi offline"
  - "mochi anki import"
  - "markdown lernkarten"
  - "anki fsrs"
  - "mochi alternative"
---

Mochi kann den Wiederholungsverlauf aus einer Anki-Datei im Format `.apkg` importieren – vorausgesetzt, du hast beim Export die Planungsinformationen eingeschlossen. Dabei entfernt Mochi CSS und JavaScript und wandelt HTML in Markdown um. Ein einfaches Vokabeldeck wird womöglich fast unverändert übernommen, ein Deck mit benutzerdefinierten Vorlagen dagegen nicht.

Aus dieser Perspektive lässt sich **Mochi vs. Anki** sinnvoll vergleichen. Mochi bietet eine aufgeräumte Local-first-Umgebung für Markdown-Notizen und Lernkarten. Anki bietet ein ausgereiftes Kartensystem mit leistungsfähigen Vorlagen, weitreichenden Einstellungen für den Lernalgorithmus, Add-ons und Migrationsformaten. Die richtige Wahl hängt weniger von der Zahl der Funktionen ab als davon, welche Teile deines bisherigen Workflows erhalten bleiben müssen.

> **Offenlegung:** Ich bin Kirill Markin und entwickle die [Flashcards Open Source App](/). Sie gehört nicht zum folgenden Hauptvergleich. Mochi eignet sich besser für verknüpfte Markdown-Notizen, Anki dagegen für komplexe bestehende Sammlungen.

**Stand der Angaben:** 19. August 2026. Preise und Produktdetails können sich ändern, besonders in App-Stores.

![Vergleich von Mochi und Anki bei Markdown-Notizen, FSRS-Wiederholungen, Offline-Lernen, Preisen und Migration](/blog/mochi-alternative-v2.png)

## Die kurze Antwort

- Wähle **Mochi**, wenn du Markdown-Lernkarten und -Notizen am selben Ort schreiben, lokal ohne Konto arbeiten und Wiederholungen mit nur zwei Buttons bewerten möchtest. Der kostenlose Tarif funktioniert offline; Pro kostet **US$5 pro Monat** und bietet zusätzlich eine geräteübergreifende Synchronisierung.
- Wähle **Anki**, wenn du maximale Kontrolle über Notiztypen, HTML/CSS-Vorlagen, Add-ons, geteilte Decks und FSRS-Einstellungen möchtest. Anki ist außerdem die sicherere Wahl für eine bestehende Sammlung, die von Anki-spezifischem Verhalten abhängt.
- Wenn du bereits jahrelange Anki-Daten hast, teste Mochi mit einer kleinen `.apkg`-Datei, bevor du etwas Wichtiges verschiebst. Der Wiederholungsverlauf kann übertragen werden, wenn das Paket Planungsinformationen enthält; das Erscheinungsbild und das interaktive Verhalten der Vorlagen möglicherweise nicht.
- Bleib bei deiner aktuellen App, wenn ein Wechsel kein konkretes Problem löst. Eine stabile Lernroutine ist wertvoller als ein aufgeräumterer Editor.

## Mochi vs. Anki auf einen Blick

| Frage | Mochi | Anki |
|---|---|---|
| Am besten geeignet für | Markdown-Nutzer, die Notizen und Karten an einem Ort verwalten möchten | Lernende, die ein ausgereiftes, konfigurierbares Lernkartensystem möchten |
| Kartenerstellung | Markdown-Dokumente, aus denen mehrseitige Karten werden können; Felder, Vorlagen, Links, Backlinks und Tags | Aus Notizen mit Feldern entstehen mithilfe von HTML/CSS-Vorlagen eine oder mehrere Karten |
| Natives Markdown | Ja | Nein; die zentralen Felder und Vorlagen verwenden HTML |
| Lernalgorithmus | Standardmäßig Mochis multiplikatorbasierter Algorithmus; optional FSRS mit Zielbehaltensrate und benutzerdefinierten Parametern | FSRS oder das ältere SM-2; FSRS bietet eine gewünschte Behaltensrate, optimierte Parameter, Voreinstellungen und einen Simulator |
| Feedback bei Wiederholungen | Remembered / Forgot | Again / Hard / Good / Easy |
| Offline-Nutzung | Die Apps für macOS, Windows, Linux, iOS und Android können ohne Konto vollständig offline arbeiten | Desktop- und Mobil-Clients speichern lokale Sammlungen und funktionieren ohne ständige Synchronisierung |
| Geräteübergreifende Synchronisierung | Pro, US$5/Monat | Kostenlos über AnkiWeb |
| Plattformen | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, offizielles AnkiMobile für iOS, unabhängiges AnkiDroid für Android |
| Migration von Anki | Importiert `.apkg`; ein enthaltener Wiederholungsverlauf wird übertragen, HTML wird in Markdown umgewandelt und CSS/JavaScript werden entfernt | Native `.apkg`- und `.colpkg`-Pakete bewahren Anki-spezifische Daten |
| Portabler Text | Markdown- und CSV-Export | Export als tabulatorgetrennter Text mit HTML-Formatierung in den Feldern |
| Open Source / Self-Hosting | Local-first; Mochi stellt die Kernanwendung nicht als Open Source dar und dokumentiert kein unterstütztes Self-Hosting der Synchronisierung | Das Haupt-Repository steht unter der AGPL; Anki dokumentiert einen selbst gehosteten Sync-Server für fortgeschrittene Nutzer |

Entscheide zuerst, was dir wichtiger ist: **bequeme Kartenerstellung oder umfassende Konfiguration**. Wenn eine der Apps bereits deinen Lernverlauf enthält, sind die Migrationsdetails ebenso wichtig.

## Bei Mochi fühlt sich jede Karte wie eine Notiz an

Mochis [Kartenmodell](https://mochi.cards/docs/cards/) beginnt mit einem Markdown-Dokument. Füge eine Zeile mit drei Bindestrichen hinzu, und das Dokument wird zur Lernkarte. Mit weiteren Trennlinien kann sie mehr als zwei Seiten haben.

Dieselbe Karte kann Überschriften, Listen, Code, Bilder, strukturierte Felder und Links zu anderen Karten enthalten. `[[Double brackets]]` erzeugen Verweise und Backlinks. Eine längere Referenznotiz kann neben den Lernkarten liegen. Beim Archivieren bleibt ihr Inhalt verfügbar, wird aber nicht mehr zur Wiederholung vorgelegt.

Damit eignen sich Mochi-Lernkarten besonders für Entwickler, Forschende und Sprachlernende, die bereits mit Textdateien und verknüpften Notizen arbeiten. Du kannst zuerst gut lesbares Ausgangsmaterial verfassen und anschließend entscheiden, was du aktiv abrufen möchtest.

Mochi unterstützt außerdem Felder und Vorlagen und ist daher nicht auf frei formulierte Notizen beschränkt. Wird eine Vorlage angewendet, rendert Mochi deren Markdown mit Platzhaltern für die Felder. Das eigene Markdown der Karte bleibt zwar gespeichert, wird bei der Darstellung aber ignoriert. Markdown bleibt die native Arbeitsoberfläche und ist keine optionale Ebene über einem herkömmlichen Karteneditor.

## Anki trennt Lerndaten von der Darstellung der Karten

Anki arbeitet mit einem stärker strukturierten Modell. Eine Notiz speichert Felder; eine oder mehrere Kartenvorlagen bestimmen, welche Felder auf den einzelnen Karten erscheinen. Die [Vorlagen verwenden HTML und CSS](https://docs.ankiweb.net/templates/intro.html), sodass aus einer einzigen Vokabelnotiz Karten zum Erkennen, Produzieren und Hörverstehen entstehen können, ohne die zugrunde liegenden Daten zu kopieren.

Die Einarbeitung dauert länger, dafür sind die Möglichkeiten deutlich umfangreicher. Anki eignet sich besser für komplexe Lückentextmuster, bedingte Layouts, individuelle Gestaltung, spezialisierte Notiztypen und Arbeitsabläufe rund um Add-ons. Die [offizielle Website](https://apps.ankiweb.net/) verweist außerdem auf ein großes Angebot an geteilten Decks und Add-ons.

Anki ist keine native App für Markdown-Lernkarten. Ein Markdown-Workflow erfordert zusätzliche Werkzeuge und damit eine weitere Abhängigkeit, die gepflegt werden muss. Wenn du hauptsächlich lesbare Notizen mit etwas Spaced Repetition möchtest, kann Anki unnötig komplex wirken. Wenn deine Karten dagegen strukturierte Lerndatensätze sind, die auf verschiedene Arten dargestellt werden, ist genau diese Komplexität der entscheidende Vorteil.

## FSRS entscheidet den Vergleich nicht mehr

In älteren Mochi-Vergleichen heißt es oft, Anki gewinne, weil Mochi kein FSRS habe. Das ist nicht mehr aktuell. Mochi führte 2025 eine Vorschauversion von FSRS ein, und im [Changelog von 2026](https://mochi.cards/changelog/) sind weitere Korrekturen an den FSRS-Intervallen und den Einstellungen zur Behaltensrate dokumentiert.

Ein Detail ist dabei wichtig: [Mochi verwendet weiterhin standardmäßig seinen eigenen Lernalgorithmus](https://mochi.cards/docs/reviewing/fsrs/). In den Review Settings kannst du zu FSRS wechseln, eine Zielbehaltensrate festlegen und später wieder zurückwechseln. Bereits gelernte Karten behalten bei diesem Wechsel ihren Wiederholungsverlauf.

Bei beiden Lernalgorithmen verwendet Mochi dieselben zwei Bewertungen:

- **Forgot** bedeutet, dass der Abruf fehlgeschlagen ist.
- **Remembered** bedeutet, dass der Abruf erfolgreich war.

Unter FSRS ordnet Mochi diese Ergebnisse Again und Good zu. Die binäre Auswahl geht schnell und erspart dir die Entscheidung, ob eine erfolgreiche Antwort Hard, Good oder Easy war. Dafür erhält der Lernalgorithmus weniger Informationen darüber, wie sicher die Antwort abgerufen wurde.

[Ankis FSRS-Einstellungen](https://docs.ankiweb.net/deck-options#fsrs) gehen weiter. Anki bietet eine gewünschte Behaltensrate, eigene Parameter je Voreinstellung, eine integrierte Optimierung anhand deines Wiederholungsverlaufs und einen Simulator zur Abschätzung des Arbeitsaufwands. Mochi akzeptiert benutzerdefinierte Parameter, enthält aber keinen Optimierer. Persönliche Parameter musst du daher mit einem externen FSRS-Optimierer erzeugen. Auch Ankis vier Bewertungen liefern mehr Informationen:

- **Again:** Du konntest die Antwort nicht abrufen.
- **Hard:** Du konntest sie abrufen, aber nur mit erheblicher Mühe.
- **Good:** Normaler erfolgreicher Abruf.
- **Easy:** Ungewöhnlich leichter erfolgreicher Abruf.

Eine Bewertungsregel ist besonders wichtig: Laut Anki-Handbuch gilt Hard weiterhin als erfolgreicher Abruf. Wenn du Hard auswählst, obwohl du die Antwort tatsächlich vergessen hast, werden die Intervalle daher zu lang.

Keines der beiden Bewertungsmodelle ist grundsätzlich überlegen. Wähle Mochi, wenn eine konsequente Entscheidung zwischen „erinnert“ und „vergessen“ für zügige Wiederholungen sorgt. Wähle Anki, wenn du die zusätzlichen Bewertungen korrekt einsetzen und Behaltensrate, Parameter und Arbeitsaufwand gezielt anpassen möchtest.

Mehr zum Lernalgorithmus selbst erfährst du im Vergleich [FSRS vs. SM-2](/blog/fsrs-vs-sm-2/).

## Offline-Nutzung, Plattformen und Synchronisierung

„Funktioniert offline“ kann mehrere Dinge bedeuten. Deshalb hilft es, lokales Lernen von geräteübergreifender Synchronisierung zu trennen.

### Mochi ist Local-first – Synchronisierung gibt es mit Pro

Mochi läuft auf macOS, Windows, Linux, iOS, Android und im Web. Laut [Installationsanleitung](https://mochi.cards/docs/getting-started/download-and-install/) können die Apps ohne Konto vollständig offline genutzt werden. Der [kostenlose Tarif](https://mochi.cards/) umfasst unbegrenzte Offline-Nutzung.

Deine Arbeitskopie liegt auf dem Gerät. Wenn du dieselbe Mochi-Sammlung auf mehreren Geräten nutzen möchtest, bietet der Pro-Tarif für US$5 pro Monat die nötige Synchronisierung. Außerdem kannst du damit Inhalte veröffentlichen und dynamische Felder, KI-Integration sowie E-Mail-Support nutzen.

Bei der Webversion ist zusätzliche Vorsicht geboten. Ohne Pro speichert sie die Daten im lokalen Browser-Speicher, den der Browser laut Mochi unter Umständen löschen kann. Wenn du den kostenlosen Tarif nutzt, verwende für wichtige Daten die Desktop- oder Mobil-App und bewahre eine `.mochi`-Sicherung auf.

### Anki speichert lokale Sammlungen und synchronisiert über AnkiWeb

Ankis kostenlose Desktop-App läuft auf Windows, macOS und Linux. Die offizielle AnkiMobile-App für iPhone und iPad ist kostenpflichtig; die unabhängig entwickelte AnkiDroid-App für Android ist kostenlos. Diese Clients speichern lokale Sammlungen, sodass nicht für jede Wiederholung eine Netzwerkverbindung erforderlich ist.

Die [Synchronisierung mit AnkiWeb ist kostenlos](https://docs.ankiweb.net/syncing.html) und hält eine Sammlung auf mehreren Geräten auf demselben Stand. Auch das Lernen im Browser wird unterstützt, doch AnkiWeb ist ein gehosteter Dienst und nicht die lokale Offline-Kopie. Nach der anfänglichen Einrichtung per einseitigem Upload oder Download lassen sich normale Änderungen an Notizen und Wiederholungsdaten von mehreren Geräten zusammenführen. Änderungen an der Notizstruktur, etwa das Hinzufügen eines Felds oder das Entfernen einer Kartenvorlage, können dagegen erneut einen einseitigen Upload oder Download erfordern.

Der Kostenunterschied ist überschaubar: Mochi verlangt Geld für die gehostete Synchronisierung, Anki nicht. Dafür ist Ankis offizieller iOS-Client kostenpflichtig. Verwechsle AnkiMobile nicht mit ähnlich benannten Apps von Drittanbietern in den App-Stores.

## Mochi- und Anki-Preise im Vergleich

Für Mochi galten am 19. August 2026 folgende öffentlich genannte Preise:

- **Free:** US$0, keine Registrierung erforderlich, unbegrenzte Offline-Nutzung.
- **Pro:** US$5 pro Monat, einschließlich geräteübergreifender Synchronisierung und der anderen oben genannten Pro-Funktionen.

Anki verwendet ein anderes Finanzierungsmodell:

- **Anki Desktop:** kostenlos für Windows, macOS und Linux.
- **AnkiWeb:** kostenloses Konto und kostenlose Synchronisierung.
- **AnkiDroid:** kostenloser, unabhängiger Android-Client.
- **AnkiMobile:** kostenpflichtiger, offizieller iOS-Client; den aktuellen Preis findest du in deinem regionalen App Store.

Beim Lernen am Desktop auf nur einem Gerät können beide Produkte kostenlos sein. Bei mehreren Geräten kann Ankis kostenlose Synchronisierung auf Dauer günstiger sein, während Mochi Pro die Synchronisierung mit weiteren gehosteten Funktionen bündelt. Bei einem iPhone oder iPad fällt die Rechnung für Anki anders aus, weil der offizielle Client kostenpflichtig ist.

## Import, Export und Verluste bei der Migration

Die Dateiendung verrät nur die halbe Wahrheit. Eine Sicherung im nativen Format kann Planungs- und Anwendungsmetadaten enthalten. Markdown oder CSV bewahren womöglich den Text, aber nicht das System dahinter.

### Beim Import von Anki in Mochi

Mochis [Anki-Importer](https://mochi.cards/docs/import-and-export/importing/) akzeptiert `.apkg`-Dateien und kann den darin gespeicherten Wiederholungsverlauf importieren. Aktiviere in Anki beim Export des Testdecks **Include Scheduling Information**; andernfalls enthält das Paket keinen Wiederholungsverlauf, den Mochi übernehmen könnte. Beim Import führt Mochi folgende Schritte aus:

- HTML wird in Markdown umgewandelt;
- CSS und JavaScript werden entfernt;
- Anki-Inhalte werden an Mochis anderes Kartenmodell angepasst.

Einfache Karten mit Vorder- und Rückseite dürften das geringste Risiko bergen. Benutzerdefinierte Layouts, JavaScript-gesteuertes Verhalten und Karten, deren Bedeutung von CSS abhängt, musst du genau prüfen. Teste Lückentextkarten, eingetippte Antworten, Audio, Bilder, Formeln, Tags und verschachtelte Decks, statt einen erfolgreichen Import mit einer originalgetreuen Migration gleichzusetzen.

Ein übernommener Wiederholungsverlauf garantiert keine identischen künftigen Fälligkeitstermine. Mochi und Anki können auf diesen Verlauf unterschiedliche Lernalgorithmen, Einstellungen, Bewertungen und FSRS-Parameter anwenden.

### Native Sicherungen sind nicht dasselbe wie portabler Text

Das vollständigste portable Exportformat von Mochi ist `.mochi`. Laut der [Dokumentation zu Sicherung und Export](https://mochi.cards/docs/getting-started/backing-up/) kann es Decks, Karten, Vorlagen, Wiederholungsverlauf, Tags, Links, Metadaten und Anhänge bewahren. Verwende es als wiederherstellbare Sicherung deiner Inhalte. Für ein vollständiges Abbild, das auch App-Einstellungen und Anmeldestatus erhält, empfiehlt Mochi, das Benutzerverzeichnis zu kopieren.

Mochis [Markdown- und CSV-Exporte](https://mochi.cards/docs/import-and-export/exporting/) dienen der Portabilität:

- **Markdown** erstellt eine lesbare Datei pro Karte und wandelt Unterdecks in Ordner um. Wiederholungsverlauf, Kartenreihenfolge, Vorlagen und Tags bleiben nicht erhalten, sofern die Tags nicht ausdrücklich im Markdown-Inhalt stehen.
- **CSV** kann die Feldwerte einer Vorlage oder vorgerenderte Vorder- und Rückseiten exportieren. Bei einer Karte mit mehr als zwei Seiten fasst die gerenderte Variante alle Seiten nach der ersten auf der Rückseite zusammen. CSV bewahrt weder Wiederholungsverlauf noch Vorlagen oder Tags, sofern sie nicht in den Inhalt eingebettet sind.

Auch Anki trennt vollständige Pakete von Text:

- Eine **`.colpkg`-Datei** enthält die gesamte Sammlung samt Planungsdaten und kann Medien einschließen. Beim Import ersetzt sie die Karten in der aktuellen Anki-Sammlung. Stelle sie daher in einem leeren, temporären Profil wieder her, wenn du die Sicherung nur prüfen oder eine Stichprobe daraus entnehmen möchtest.
- Eine **`.apkg`-Datei** enthält ein Deck und dessen untergeordnete Decks. Sie umfasst Karten, Notizen und Notiztypen sowie Optionen für Planungsdaten, Voreinstellungen und Medien.
- Ein **Klartext-Export** enthält tabulatorgetrennte Notizfelder mit eingebetteter HTML-Formatierung. Er eignet sich zum Übertragen von Inhalten, nicht zum Bewahren der vollständigen Wiederholungsplanung und des Deck-Verhaltens.

Anki dokumentiert diese Unterschiede in seiner [Exportanleitung](https://docs.ankiweb.net/exporting.html). Verwende `.colpkg` für eine vollständige Anki-Sicherung vor jeder Migration. Verwende `.apkg` für das repräsentative Deck, das Mochi importieren soll.

### Von Mochi zu Anki wechseln

Der CSV-Export von Mochi ist der praktikabelste Weg. Exportiere Feldwerte, wenn du einen passenden Anki-Notiztyp nachbilden möchtest. Bei einfachen Karten kannst du stattdessen gerenderte Vorder- und Rückseiten exportieren, wenn das Erscheinungsbild weniger wichtig ist als gut lesbarer Inhalt. Anki kann [Textdateien importieren](https://docs.ankiweb.net/importing/intro.html) und die Spalten den Notizfeldern zuordnen.

Das ist keine verlustfreie Hin- und Rückmigration. Mochis Wiederholungsverlauf, Links, Markdown-Notizstruktur, Vorlagen und das Verhalten mehrseitiger Karten werden durch CSV nicht zu gleichwertigen Anki-Objekten. Bewahre die ursprüngliche `.mochi`-Sicherung auf, selbst wenn die Anki-Kopie korrekt aussieht.

## So testest du die Migration, ohne das Original zu verändern

Verschiebe nicht gleich eine ganze Sammlung, nur weil ein Importdialog erfolgreich war. Ein kleiner Test kostet weniger Zeit als die Reparatur eines beschädigten Decks.

1. **Erstelle eine vollständige Anki-Sicherung.** Exportiere eine `.colpkg`-Datei mit Medien, bevor du etwas änderst.
2. **Arbeite mit einer Kopie.** Erstelle ein temporäres Anki-Profil und importiere die `.colpkg`-Datei dort. Beim Import eines Sammlungspakets werden die Karten im Zielprofil ersetzt. Deshalb ist das leere Profil wichtig.
3. **Stelle eine repräsentative Stichprobe zusammen.** Sammle in diesem kopierten Profil 25–50 Karten in einem Testdeck: einfache Karten, Karten mit vertauschter Vorder- und Rückseite, Lückentexte, benutzerdefinierte Vorlagen, CSS, JavaScript, Bilder, Audio, Formeln, Tags, verschachtelte Decks und Karten mit echtem Wiederholungsverlauf.
4. **Exportiere die Stichprobe als `.apkg`.** Schließe Planungsinformationen, Deck-Voreinstellungen und Medien ein, wenn sie für deine Sammlung wichtig sind.
5. **Importiere sie in ein neues Mochi-Deck.** Dein reguläres Anki-Profil bleibt unberührt.
6. **Prüfe den Inhalt vor dem Wiederholen.** Kontrolliere jeden speziellen Kartentyp und nicht nur einige einfache Karten. Vergleiche Felder, Formatierung, Medien, Tags, Deck-Struktur und Wiederholungsverlauf.
7. **Wähle Mochis Lernalgorithmus bewusst.** Der eigene Algorithmus ist die Standardeinstellung. Stelle im Test nur dann auf FSRS um, wenn du diesen Workflow beibehalten möchtest.
8. **Wiederhole die kopierten Karten eine Woche lang.** Entscheide, ob Remembered/Forgot ausreicht, ob die Bearbeitung in Markdown Zeit spart und ob Offline-Nutzung und Synchronisierung auf den Geräten funktionieren, die du im Alltag nutzt.
9. **Notiere die akzeptierten Verluste.** Das Verhalten der Vorlagen, die Gestaltung, Add-ons, genaue Fälligkeitstermine oder bestimmte Kartentypen können nach einer Woche wichtiger sein als beim Lesen der Vergleichstabelle.

Wenn der Test scheitert, lösche das Mochi-Testdeck und arbeite in deinem gewohnten Anki-Profil weiter. Dieses Profil und die `.colpkg`-Sicherung bleiben unverändert. Wenn der Test funktioniert, migriere deine Sammlung Deck für Deck und bewahre beide Sicherungen im nativen Format auf, bis du mehrere normale Wiederholungszyklen abgeschlossen hast.

## Local-first, Open Source und Self-Hosting sind drei verschiedene Dinge

Diese Begriffe beantworten unterschiedliche Fragen:

- **Local-first:** Kann die App die Arbeitskopie auf deinem Gerät speichern und auch ohne ihren Cloud-Dienst weiter funktionieren?
- **Open Source:** Kannst du den Quellcode unter einer veröffentlichten Lizenz einsehen und verändern?
- **Self-Hosting:** Bietet das Produkt einen unterstützten Weg, den betreffenden Server selbst zu betreiben?

Mochi ist Local-first. Die kostenlosen Apps können offline arbeiten, und der `.mochi`-Export bietet dir eine umfangreiche lokale Sicherung deiner Inhalte. Der öffentliche „Open Source“-Link auf Mochis Website führt zu einer [Sammlung von Integrationen](https://github.com/mochi-cards/open-source), nicht zum Quellcode der Kernanwendung. Mochis eigene Website stellt die Kernanwendung nicht als Open Source dar und dokumentiert keinen unterstützten Weg, den Synchronisierungsdienst selbst zu hosten.

Ankis [Haupt-Repository steht unter der AGPL in Version 3 oder neuer](https://github.com/ankitects/anki/blob/main/LICENSE); einige enthaltene Komponenten verwenden andere Lizenzen. Fortgeschrittene Nutzer können außerdem den offiziellen [selbst gehosteten Sync-Server](https://docs.ankiweb.net/sync-server.html) anstelle von AnkiWeb betreiben. Dabei handelt es sich um einen Sync-Server für kompatible Clients, nicht um eine selbst gehostete Variante der AnkiWeb-Website. Anki weist darauf hin, dass Einrichtung und Wartung Kommandozeilen- und Netzwerkkenntnisse erfordern.

Wenn dir lokales Arbeiten ohne Konto genügt, kommt Mochi mit weniger Infrastruktur aus. Wenn dir der Zugriff auf den Quellcode und die Kontrolle über die Synchronisierung wichtig sind, bietet Anki mehr. Keine der beiden Optionen macht Sicherungen in den nativen Formaten überflüssig.

## Welche App ist die richtige für dich?

### Wähle Mochi für ein Markdown-Notizbuch mit Lernkarten

Mochi passt besser, wenn Notizen, Referenzen und Karten eine gemeinsame, gut lesbare Markdown-Oberfläche haben sollen. Der Offline-Modus ohne Konto ist für ein einzelnes Gerät attraktiv, und Pro ergänzt die Synchronisierung, ohne die Art der Kartenerstellung zu verändern. Remembered/Forgot vereinfacht zudem die tägliche Entscheidung bei der Wiederholung.

Das ist besonders für eine neue Sammlung oder eine Anki-Sammlung sinnvoll, die größtenteils aus unkomplizierten Inhalten besteht. Führe zuerst den Beispielimport durch, wenn benutzerdefiniertes Verhalten oder ein jahrelanger Verlauf wichtig sind.

### Wähle Anki für maximale Kontrolle und Sammlungstreue

Anki passt besser, wenn deine Sammlung von Notiztypen, erzeugten Kartenvarianten, HTML/CSS-Vorlagen, Add-ons, geteilten Decks oder detaillierten FSRS-Einstellungen abhängt. Mit seinen Paketformaten und der kostenlosen Synchronisierung lässt sich eine auf Anki zugeschnittene Sammlung leichter intakt halten.

Wenn du Anki bereits nutzt, solltest du einen konkreten Grund für den Wechsel haben. Natives Markdown oder Mochis ruhigere Schreibumgebung können ein solcher Grund sein. Eine lediglich etwas aufgeräumtere Oberfläche ist es vermutlich nicht.

### Eine kleinere Open-Source-Alternative – nur für eine einfachere Sammlung

Wenn keiner der beiden Workflows passt, kommt die [Flashcards Open Source App](/features/) als kleinere Alternative infrage. Sie bietet Lernkarten mit Vorder- und Rückseite in Markdown, FSRS-Wiederholungen, Offline-first-Web- und Mobil-Clients, MCP- und Agent-API-Zugriff sowie einen Open-Source-Weg zum Self-Hosting. Ich entwickle die App, und ihre Grenzen sind hier wichtig: Sie ersetzt weder Mochis verknüpftes Markdown-Notizbuch noch Ankis Vorlagen und den direkten `.apkg`-Import. Sie eignet sich am ehesten für eine neue, einfachere Sammlung; die [Einführungsanleitung](/docs/getting-started/) zeigt den aktuellen Funktionsumfang.

## Fazit

Bei der praktischen Entscheidung **Anki vs. Mochi** kommt es darauf an, was du für die nächsten Jahre bewahren möchtest.

Wähle Mochi, wenn Markdown-Notizen, Local-first-Nutzung und binäre Bewertungen deinen Lernablauf erleichtern. Wähle Anki, wenn du für deine langfristige Sammlung ausgereifte Vorlagen, eine FSRS-Steuerung mit vier Buttons, kostenlose Synchronisierung und originalgetreue Anki-Pakete brauchst.

Wenn du bereits eine umfangreiche Anki-Sammlung besitzt, entscheide nicht anhand von Screenshots oder Funktionslisten. Exportiere eine vollständige Sicherung, importiere eine repräsentative `.apkg`-Datei und arbeite eine Woche lang mit den kopierten Karten. Der Migrationstest zeigt dir, ob Mochis aufgeräumterer Workflow den Verlust genau der Anki-spezifischen Eigenschaften wert ist, die bei der Migration zurückbleiben.
