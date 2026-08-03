---
title: "Anki vs SuperMemo vs FSRS (2026): Was jeweils dahintersteckt und was du wählen solltest"
description: "Anki vs SuperMemo vs FSRS erklärt: Vergleiche Anki, zwei aktuelle SuperMemo-Produkte, den FSRS-Scheduler, Bewertungsskalen und die passende Wahl für deinen Workflow."
date: "2026-08-03"
image: "/blog/anki-vs-supermemo-vs-fsrs.png"
keywords:
  - "Anki vs SuperMemo vs FSRS"
  - "Anki FSRS"
  - "SuperMemo Algorithmus"
  - "FSRS Scheduler"
  - "Spaced Repetition Algorithmus"
  - "Again Hard Good Easy"
  - "Anki vs SuperMemo"
  - "FSRS vs SM-2"
---

Du kannst FSRS in Anki verwenden. Seit SuperMemo 20 erschienen ist, läuft FSRS sogar in einem SuperMemo-Produkt mit. Damit löst sich ein Großteil der Verwirrung um **Anki vs SuperMemo vs FSRS** bereits auf: Die drei sind keine Alternativen, die sich gegenseitig ausschließen.

Anki ist eine Karteikarten-App mit eigenem Ökosystem. SuperMemo kann zwei aktuelle Produkte oder eine lange Familie von Algorithmen bezeichnen. FSRS ist ein Scheduler, den Softwareprodukte implementieren können. Dieser Leitfaden trennt zunächst diese Kategorien und vergleicht dann die Entscheidungen, die du tatsächlich treffen kannst.

> **Offenlegung:** Ich bin Kirill Markin und entwickle die [Flashcards Open Source App](/features/), die unten als eine praktische FSRS-Implementierung vorkommt. Ich stelle sie nicht automatisch als beste Wahl dar und benenne ausdrücklich, wo ihr noch junges Ökosystem ins Gewicht fällt.

**Fakten geprüft:** 3. August 2026.

![Zwei unterschiedliche Lernmaschinen zeigen im Inneren denselben türkisfarbenen FSRS-Uhrwerk-Scheduler](/blog/anki-vs-supermemo-vs-fsrs.png)

## Die kurze Antwort: Anki und SuperMemo sind Produkte, FSRS ist ein Scheduler

Das übersichtlichste Denkmodell sieht so aus:

- **Anki** ist eine Karteikarten-App mit einem gewachsenen Ökosystem aus Desktop-Anwendung, AnkiWeb-Synchronisierung, kompatiblen Mobil-Clients, flexiblen Kartenvorlagen, geteilten Decks und Add-ons. Die aktuelle Anki-Version bietet FSRS als Alternative zum bisherigen Scheduler.
- **SuperMemo 20 für Windows** ist eine Windows-Anwendung für Wissensmanagement und Incremental Reading. In ihrer Algorithm Arena laufen mehrere Scheduling-Algorithmen, darunter FSRS. Ihre Vorhersagen werden danach gewichtet, wie gut sie zu den Daten des jeweiligen Nutzers passen.
- **SuperMemo.com** ist ein eigenständiger gehosteter Sprachlerndienst für Web, iOS und Android. Er bietet Kurse und selbst erstellte MemoCards auf Grundlage seiner eigenen dokumentierten SuperMemo-Methode.
- **FSRS** steht für Free Spaced Repetition Scheduler. Er berechnet Wiederholungstermine anhand des Wiederholungsverlaufs, der Bewertungen, der Modellparameter und eines Retentionsziels. Er ist weder Karteneditor noch Kontosystem, Synchronisierungsdienst, Deck-Marktplatz oder Lernoberfläche.

„Anki FSRS“ ist also kein Widerspruch: Anki ist das Produkt, FSRS der darin ausgewählte Scheduler.

## Anki vs SuperMemo vs FSRS auf einen Blick

| Option | Was es ist | Scheduling | Besonders geeignet für | Wichtigster Vorbehalt |
| --- | --- | --- | --- | --- |
| [Anki](https://docs.ankiweb.net/getting-started.html) | Ausgereiftes Karteikartenprodukt mit großem Ökosystem | Integriertes FSRS oder Ankis bisheriger Scheduler; FSRS wird global aktiviert | Bestehende Sammlungen, eigene Vorlagen, Add-ons, geteilte Decks und etablierte Anki-Workflows | Der Wechsel zu einem anderen Produkt kann erheblichen Migrationsaufwand verursachen |
| [SuperMemo 20 für Windows](https://supermemo.store/products/supermemo-20-for-windows) | Proprietäre Windows-Anwendung für Wissensmanagement und Incremental Reading | Die Algorithm Arena umfasst SM-2, SM-15, SM-19, SM-20 und FSRS | Incremental Reading, Wissensbäume und Importe aus Dokumenten, Webseiten, E-Mails und Videos | Nur für Windows erhältlich und nicht dasselbe Produkt wie SuperMemo.com |
| [SuperMemo.com](https://www.supermemo.com/en/app) | Gehosteter Sprachlerndienst für Web, iOS und Android | Proprietäre SuperMemo-Methode; die aktuellen öffentlichen Seiten weisen sie weder als SM-18 noch als SM-20 oder FSRS aus | Vorgefertigte Sprachkurse, MemoCards und geräteübergreifendes Lernen in einem gehosteten Dienst | Nicht das Windows-Produkt; der genaue Scheduler ist nicht öffentlich dokumentiert |
| [FSRS](https://github.com/open-spaced-repetition/fsrs4anki) | Offener Scheduler und Open-Source-Projekt | Wird von einem Softwareprodukt oder einer Bibliothek implementiert | Entwickler und Nutzer, die eine überprüfbare Scheduling-Logik suchen | Liefert selbst weder Karten noch Editor, Synchronisierung oder Lernoberfläche |
| [Flashcards Open Source App](/features/) | Junges Open-Source-Karteikartenprodukt auf Basis von FSRS | FSRS-6 mit fest hinterlegten offiziellen Standardgewichten und konfigurierbaren Scheduling-Einstellungen pro Workspace | Web, iOS, Android, Self-Hosting, API und Workflows mit KI-Agenten | Kleineres Ökosystem als Anki und noch keine personalisierten FSRS-Gewichte |

Die Zeilen sind bewusst nicht symmetrisch. Anki und Flashcards bieten vollständige Karteikarten-Workflows. SuperMemo 20 verbindet Scheduling mit einem wesentlich umfassenderen Lese- und Wissensworkflow. SuperMemo.com bietet ein gehostetes Sprachlernerlebnis. FSRS liefert anderen Anwendungen die Scheduling-Logik.

## Was Anki tatsächlich bietet

Anki ist weit mehr als ein Spaced-Repetition-Algorithmus. Der Wert des Produkts liegt im gesamten System, das rund um das Scheduling gewachsen ist: Notizen, aus denen Karten entstehen, programmierbare [Kartenvorlagen](https://docs.ankiweb.net/templates/intro.html), Medien, Deck-Organisation, [Add-ons](https://docs.ankiweb.net/addons.html), Import- und Exportformate sowie die [Synchronisierung der Sammlung](https://docs.ankiweb.net/syncing.html).

Das ist entscheidend, wenn jemand Anki „für FSRS“ verlassen möchte. Die aktuelle Anki-Version unterstützt FSRS bereits. Laut [Anki-Handbuch zu FSRS](https://docs.ankiweb.net/deck-options.html#fsrs) ist FSRS eine Alternative zu Ankis älterem SuperMemo-2-Scheduler. Die Aktivierung gilt global und lässt sich nicht auf eine einzelne Voreinstellung beschränken. Desired Retention legt fest, welche Abrufwahrscheinlichkeit das Modell anstrebt, wenn eine Karte fällig wird. Ein höherer Wert verkürzt im Allgemeinen die Intervalle und erzeugt mehr Wiederholungen. Mit **Optimize** kann Anki die FSRS-Parameter außerdem an einen kompatiblen Wiederholungsverlauf anpassen.

Die Formulierung im Handbuch braucht allerdings eine historische Einordnung. **SM-2 ist ein früher Algorithmus aus der SuperMemo-Familie und kein Synonym für das heutige SuperMemo.** Ankis älteren Scheduler als „Legacy SM-2“ zu bezeichnen, folgt der Anki-Dokumentation und benennt die Algorithmusfamilie, auf die er zurückgeht. Daraus folgt nicht, dass jedes Implementierungsdetail mit dem ursprünglichen, vor Jahrzehnten veröffentlichten SM-2 identisch ist. Einen gezielteren technischen Vergleich bietet [FSRS vs SM-2](/blog/fsrs-vs-sm-2/).

Wenn deine über Jahre gewachsene Sammlung von eigenen Vorlagen, Add-ons, Medien oder einer langen Wiederholungshistorie abhängt, ist ein Produktwechsel mit echtem Migrationsaufwand verbunden. Innerhalb von Anki den Scheduler zu wechseln kann erheblich einfacher sein, als Anki ganz zu verlassen. Der ausführlichere Vergleich [Anki vs Flashcards](/blog/anki-vs-flashcards-open-source-app/) behandelt diese Abwägung auf Produktebene.

## „SuperMemo“ braucht heute einen Zusatz

Der Name **SuperMemo** kann eine Produktfamilie, einen Onlinedienst, eine Methode oder eine Algorithmusfamilie meinen. Wer all das in einem Vergleich als eine einzige aktuelle App behandelt, kommt schnell zu falschen Schlüssen.

### SuperMemo 20 für Windows

[SuperMemo 20 für Windows](https://supermemo.store/products/supermemo-20-for-windows) wurde [am 1. April 2026 veröffentlicht](https://supermemo.store/products/supermemo-20-upgrade). Es wird als Einmallizenz für Windows 10 und 11 angeboten und richtet sich an Wissensarbeit, die über gewöhnliche Karteikarten mit Vorder- und Rückseite hinausgeht. Die Produktseite beschreibt Incremental Reading sowie Workflows für PDF- und EPUB-Dateien, E-Mails, Webseiten, Bilder und YouTube-Videos.

Das zentrale Scheduling-Feature ist die **Algorithm Arena**. Laut Produktseite laufen SM-2, SM-15, SM-19, SM-20 und FSRS parallel, erstellen Vorhersagen und werden entsprechend ihrer Vorhersagegüte für die Daten des jeweiligen Nutzers gewichtet. Das ist die vom Anbieter dokumentierte Funktionsweise des Produkts. Es ist kein unabhängiger Beleg dafür, dass SuperMemo 20 bei jedem Lernenden bessere Ergebnisse erzielt als eine andere App.

An der Algorithm Arena wird der Kategorienfehler besonders deutlich: FSRS kann *innerhalb von SuperMemo 20* laufen. Man muss sich also nicht für das eine oder das andere entscheiden.

### Der gehostete Dienst SuperMemo.com

Die aktuelle [SuperMemo.com-App](https://www.supermemo.com/en/app) ist ein gehosteter Sprachlerndienst für Browser, iOS und Android. Im Mittelpunkt stehen vorgefertigte Sprachkurse, Lernpläne, MemoCards und weitere Sprachlernfunktionen. Kurse lassen sich für das Lernen auf Mobilgeräten herunterladen. Die [Offline-Dokumentation](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline) nennt jedoch wichtige Einschränkungen: Funktionen wie das Hinzufügen von MemoCards, KI, Suche, Statistiken und der Kurseditor stehen offline nicht zur Verfügung.

Der gehostete Dienst bezeichnet seinen Scheduler als proprietär und dokumentiert eine eigene SuperMemo-Methode samt Wiederholungsablauf. Aus den öffentlichen Seiten geht nicht hervor, dass der aktuelle Scheduler SM-18, SM-20 oder FSRS ist. Deshalb ordnet dieser Artikel ihm keine dieser Bezeichnungen zu.

Diese Unterscheidung verändert auch die Kaufentscheidung. Wer unter Windows mit Incremental Reading arbeiten möchte, sollte SuperMemo 20 prüfen. Wer einen gehosteten Spanisch- oder Englischkurs sucht, sollte SuperMemo.com prüfen. Beide teilen einen Namen und eine Geschichte, sind als Produkterlebnis aber nicht austauschbar.

## Der SuperMemo-Algorithmus ist eine Familie, keine einzelne Formel

In der Geschichte von SuperMemo gibt es verschiedene Generationen von Scheduling-Algorithmen. Die offizielle [Geschichte des SuperMemo-Algorithmus](https://supermemo.guru/wiki/History_of_SuperMemo_algorithm) zeichnet die Entwicklung über SM-4, SM-5, SM-6, SM-8, SM-11, SM-15, SM-17 und SM-18 nach und datiert die Änderungen an der Stabilisierungsfunktion von SM-18 auf das Jahr 2019. In der aktuellen Dokumentation zu SuperMemo 20 werden SM-19 und SM-20 als spätere Generationen genannt und in der Algorithm Arena neben älteren Algorithmen und FSRS eingesetzt.

Deshalb ist eine Aussage wie „Anki verwendet den SuperMemo-Algorithmus“ zu ungenau, um hilfreich zu sein. Welche Generation ist gemeint? Welche Implementierung in welchem Produkt? Mit welchen Einstellungen und Bewertungsregeln?

SM-2 ist historisch bedeutsam, weil es viele Karteikarten-Scheduler beeinflusst hat. Die aktuelle SuperMemo-Software für Windows hat sich seitdem über zahlreiche weitere Algorithmusgenerationen entwickelt. Zum gehosteten Dienst SuperMemo.com sind nicht genügend aktuelle Details veröffentlicht, um ihn ohne Weiteres mit einem bestimmten nummerierten Windows-Algorithmus gleichzusetzen.

## Was der FSRS-Scheduler modelliert

[FSRS4Anki](https://github.com/open-spaced-repetition/fsrs4anki) besteht laut eigener Beschreibung aus zwei Hauptteilen: einem Scheduler und einem Optimizer. Der Scheduler berechnet die Wiederholungstermine der Karten. Der Optimizer kann die Parameter an den Wiederholungsverlauf anpassen, sofern das jeweilige Produkt diesen Ablauf unterstützt. Keiner der beiden Bestandteile liefert Decks, Kartenbearbeitung, Konten, Synchronisierung oder eine Lernansicht.

Das [ABC von FSRS](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS) stellt ein Modell vor, das üblicherweise anhand dreier Variablen erklärt wird: Difficulty, Stability und Retrievability. Die [Dokumentation des FSRS-Algorithmus](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm) definiert sie genauer:

- **Retrievability (R)** ist die vom Modell aktuell vorhergesagte Wahrscheinlichkeit, dass du dich an den Lerninhalt erinnerst.
- **Stability (S)** ist das Intervall, bei dem die vorhergesagte Retrievability im Modell 90 % beträgt.
- **Difficulty (D)** ist die Schätzung des Modells, wie schwer es ist, die Gedächtnisstabilität dieses Lerninhalts zu erhöhen.

Diese Werte sind Modellzustände, die aus Wiederholungsdaten abgeleitet werden, keine direkten Messungen einer Gedächtnisspur in deinem Gehirn. Die vorhergesagte Retrievability einer Karte kann nützlich sein und bleibt dennoch eine Prognose, die von Wiederholungsverlauf, Bewertungen, Implementierung und Parametern geprägt ist.

Desired Retention übersetzt dieses Modell in einen Zeitplan. Der Scheduler schätzt, wann die Retrievability den gewählten Zielwert erreicht, und leitet daraus ein Intervall ab, das zusätzlich den Regeln des jeweiligen Produkts unterliegt. Von einem „zielwertbasierten Intervall“ zu sprechen ist genauer, als den Termin als nachweislich perfekt oder universell optimal darzustellen.

## Again, Hard, Good, Easy – und warum sich Bezeichnungen nicht automatisch übertragen lassen

Bewertungen liefern einem Scheduling-System Signale. Da Produkte unterschiedliche Bezeichnungen und Skalen verwenden, kann eine schematische Eins-zu-eins-Übertragung ihre Bedeutung verfälschen.

| System | Sichtbare Bewertungen | Was die Bezeichnungen aussagen |
| --- | --- | --- |
| Anki mit FSRS | Again, Hard, Good, Easy | Again steht für einen fehlgeschlagenen Abruf. Hard, Good und Easy stehen für erfolgreichen Abruf mit jeweils geringerem Aufwand. |
| Flashcards | Again, Hard, Good, Easy | Dieselbe Grenze zwischen Misserfolg und Erfolg. Die API verwendet 0–3 und ordnet diese Werte intern den FSRS-Bewertungen 1–4 zu. |
| Gehostetes SuperMemo.com | Don't know, Almost, Know | Eine dreistufige Produktskala, die auf der [Seite zur SuperMemo-Methode](https://www.supermemo.com/en/supermemo-method) dokumentiert ist. Sie sollte nicht mechanisch auf die vier FSRS-Bewertungen abgebildet werden. |
| SuperMemo 20 für Windows | Bewertungsablauf in der SuperMemo-Desktop-Anwendung | Eine eigene Produktoberfläche, die mehrere Algorithmen in der Algorithm Arena mit Daten versorgt. Ihre Bedeutung lässt sich nicht aus den drei Bezeichnungen des gehosteten Dienstes ableiten. |

Die folgenreichste Unterscheidung bei FSRS ist die zwischen Again und Hard. Laut [Anki-Handbuch](https://docs.ankiweb.net/deck-options.html#fsrs) behandelt FSRS Hard als erfolgreichen Abruf und Again als Misserfolg. Wer Hard wählt, weil das nächste Intervall angenehmer aussieht, zeichnet ein Ereignis auf, das gar nicht stattgefunden hat. Der praktische Leitfaden [Again vs Hard](/blog/again-vs-hard-fsrs-flashcards/) behandelt Teilantworten und Grenzfälle ausführlich.

## So implementiert Flashcards FSRS heute

Flashcards setzt FSRS als konkrete Produktkomponente ein und nicht als vages Etikett für „intelligente Wiederholung“. Die Implementierung wurde am 3. August 2026 anhand des Quellcode-Repositorys beim Commit `9cb013f78767c081f5385a53daa5e4b9fe69d3b6` überprüft.

Der Backend-Scheduler bildet den offiziellen Ablauf von `ts-fsrs` 5.2.3 nach und verwendet fest die offiziellen FSRS-6-Standardgewichte. Backend, iOS und Android enthalten drei voneinander unabhängige Scheduler-Implementierungen. Die Web-App greift dagegen auf das Backend-Modul zurück, statt eine vierte Implementierung zu pflegen. Gemeinsame Golden-Testvektoren stellen sicher, dass sich alle diese Implementierungen beim Scheduling gleich verhalten.

Für jede Karte werden Stability, Difficulty, der Zeitpunkt der letzten Wiederholung, die geplante Anzahl an Tagen, der Workflow-Zustand (`new`, `learning`, `review` oder `relearning`) und gegebenenfalls der aktuelle kurzfristige Lernschritt gespeichert. Maßgeblich für den Zustandsübergang ist der tatsächliche Wiederholungszeitpunkt im Client, nicht der spätere Zeitpunkt, zu dem ein Server die Wiederholung verarbeitet.

Für Workspaces gelten standardmäßig:

- FSRS-6
- Desired Retention von `0.90`
- Learning Steps von `1` und `10` Minuten
- ein Relearning Step von `10` Minuten
- ein maximales Intervall von `36,500` Tagen
- aktivierter Fuzz

Workspaces können Desired Retention, Steps, das maximale Intervall und Fuzz für künftige Wiederholungen ändern. Flashcards personalisiert die FSRS-Gewichte derzeit **nicht** pro Nutzer und stellt sie dort auch nicht zur Konfiguration bereit; die v1-Gewichte sind fest hinterlegte Standardwerte. Das ist ein wesentlicher Unterschied zu Produkten, die Parameter anhand des individuellen Wiederholungsverlaufs optimieren. Der [Leitfaden zu FSRS-Einstellungen](/blog/fsrs-settings/) erklärt die Folgen für die Arbeitslast, ohne so zu tun, als müsse jeder Regler angepasst werden.

Auf der Wiederholungsansicht im Web zeigt Flashcards für Again, Hard, Good und Easy jeweils eine Vorschau des berechneten nächsten Intervalls. Die Bewertungen `0`, `1`, `2` und `3` aus Benutzeroberfläche und API werden intern den FSRS-Bewertungen `1` bis `4` zugeordnet. Again steht für einen fehlgeschlagenen Abruf; Hard, Good und Easy stehen für erfolgreiche Abrufe mit jeweils geringerem Aufwand. Alle Clients erinnern bei häufiger Verwendung von Hard daran: Eine Antwort, die du nicht abrufen konntest, gehört unter Again.

So bleibt der Scheduler nachvollziehbar und verhält sich auf allen Plattformen konsistent. Gute Karten, ehrliche Bewertungen und das tatsächliche Erledigen der Wiederholungen werden dadurch nicht überflüssig.

## Welche Option passt zu deinem Workflow?

### Du hast bereits eine umfangreiche Anki-Sammlung

In der Regel solltest du bei Anki bleiben und erwägen, FSRS dort zu aktivieren. Deine Vorlagen, Add-ons, Medien, Deck-Struktur und Wiederholungshistorie können wertvoller sein als eine neue Benutzeroberfläche. Prüfe vorher, ob alle von dir verwendeten Clients FSRS unterstützen und ob deine Add-ons kompatibel sind – insbesondere solche, die Scheduling oder Intervalle verändern.

### Du möchtest intensiv mit Incremental Reading unter Windows arbeiten

Sieh dir SuperMemo 20 für Windows an. Die Kombination aus Wissensbäumen, Incremental Reading, Dokument- und Webimporten sowie Algorithm Arena unterscheidet sich grundlegend von einer reinen Karteikarten-App. Entscheidend ist, ob der gesamte Workflow zu dir passt, nicht nur die Liste der Algorithmen.

### Du suchst vorgefertigte gehostete Sprachkurse

Sieh dir SuperMemo.com an. Das Web- und Mobilprodukt ist auf Sprachkurse und MemoCards ausgerichtet. Prüfe, ob die Offline-Einschränkungen zu deinem Lernalltag passen, und setze nicht voraus, dass der Scheduler mit SM-20 oder der Algorithm Arena des Windows-Produkts identisch ist.

### Du entwickelst eine App oder suchst einen überprüfbaren Scheduler

Prüfe FSRS-Implementierungen und -Bibliotheken. Dank offener Dokumentation, Formeln und Referenzprojekte lässt sich der Scheduler nachvollziehen. Du musst trotzdem entscheiden, wie die Bewertungen funktionieren, welche Einstellungen Nutzer ändern dürfen, wie Wiederholungen synchronisiert werden, wie der Kartenzustand gespeichert wird und wie du plattformübergreifend identisches Verhalten testest.

### Du suchst einen modernen Open-Source-Workflow für Web, Mobilgeräte und KI-Agenten

Sieh dir die [Flashcards Open Source App](/features/) an. Sie kombiniert FSRS-6 mit Web, iOS, Android, Self-Hosting, einer öffentlichen API und Zugang für KI-Agenten. Ihre klare Einschränkung ist die Reife: Das Ökosystem ist jünger als das von Anki und reicht bei Vorlagen, Add-ons, geteilten Decks und Migrationstreue nicht an Anki heran. Sammlungen, die auf diesen Stärken beruhen, sind in Anki besser aufgehoben.

## Ein Scheduler kann kein schwaches Lernsystem retten

Kein seriöser Vergleich von Anki, SuperMemo und FSRS kann einen universellen Sieger für erfolgreiches Lernen versprechen. Ein Scheduler kann in einem Benchmark besser kalibrierte Vorhersagen liefern und trotzdem nur ein Teil des Gesamtergebnisses sein.

In der Praxis hängt der Lernerfolg weiterhin davon ab,

- ob jede Karte eine klar abgegrenzte Sache prüft
- ob du einen fehlgeschlagenen Abruf ehrlich bewertest
- ob dein Wiederholungsverlauf repräsentativ ist
- ob Desired Retention und die Menge neuer Karten eine dauerhaft tragbare Arbeitslast ergeben
- ob du fällige Wiederholungen erledigst oder immer wieder auslässt
- ob die Workflows des Produkts für Bearbeitung, Lesen und Mobilgeräte zu deinem Alltag passen
- ob das zugrunde liegende Material korrekt und überhaupt erinnerungswürdig ist

Anbieterdokumentation erklärt, wie sich ein Produkt verhält. Vorhersage-Benchmarks vergleichen Modelle anhand bestimmter Daten und Kennzahlen. Beides beweist nicht, dass jeder Lernende mit einem bestimmten Produkt mehr behält.

## Das entscheidende Fazit zu Anki vs SuperMemo vs FSRS

Eine praktische Antwort auf **Anki vs SuperMemo vs FSRS** beginnt damit, die falsche Dreierwahl aufzugeben.

Nutze **Anki mit FSRS**, wenn du Ankis ausgereiftes Ökosystem mit einem aktuellen FSRS-Scheduler verbinden möchtest. Prüfe **SuperMemo 20 für Windows**, wenn Incremental Reading und ein umfassender Wissensworkflow unter Windows im Mittelpunkt stehen; FSRS nimmt dort bereits an der Algorithm Arena teil. Betrachte **SuperMemo.com** separat, wenn du eigentlich gehostete Sprachkurse suchst. Prüfe **FSRS-Implementierungen**, wenn du selbst die Scheduling-Schicht entwickelst oder überprüfen möchtest.

Flashcards passt zum neueren Open-Source-Anwendungsfall mit Web, Mobilgeräten, Self-Hosting und KI-Agenten. Es bietet eine FSRS-6-Implementierung mit fest hinterlegten Standardgewichten, die plattformübergreifend auf identisches Verhalten getestet ist, hat aber auch ein jüngeres Produktökosystem.

Wähle zuerst einen Workflow, den du langfristig beibehalten kannst, und konfiguriere darin den Spaced-Repetition-Algorithmus. Das Produkt führt dich zur Wiederholung. Der Scheduler setzt einen modellbasierten Termin. Deine Karten, Bewertungen und Konsequenz liefern weiterhin das eigentliche Lernsignal.
