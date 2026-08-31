---
title: "RemNote-Alternativen 2026: kostenlos und Open Source"
description: "Vergleiche RemNote-Alternativen nach Notizen, PDFs, Lernkarten, Preis und Self-Hosting. Erfahre, was sich übertragen lässt, was verloren geht und wie du den Wechsel sicher testest."
date: "2026-03-19"
updated: "2026-08-31"
image: "/blog/remnote-alternative.png"
keywords:
  - "RemNote Alternative"
  - "RemNote Alternativen"
  - "RemNote Open Source"
  - "kostenlose RemNote Alternative"
  - "RemNote vs Anki"
  - "Open Source Alternative zu RemNote"
  - "selbst gehostete RemNote Alternative"
  - "Offline Lernkarten App"
---

RemNote nennt seinen Anki-Export **Flashcards Only**. Stichpunkte ohne Karten werden ausgelassen, und das Paket enthält weder deine verknüpften Notizen und PDFs noch deinen Reader-Workflow. Eine andere App kann sämtliche Fragen und Antworten übernehmen – und trotzdem genau das System zurücklassen, das diesen Karten ihren Wert gegeben hat.

Die beste **RemNote-Alternative** löst den konkreten Grund für deinen Wechsel, ohne dabei den Teil von RemNote aufzugeben, der für dich weiterhin funktioniert. Manchen geht es um den Preis. Andere wollen einfache lokale Dateien, ein leistungsfähigeres Kartensystem oder Quellcode, den sie selbst betreiben können.

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](/de/), eines der hier verglichenen Produkte. Flashcards ist kein vollständiger Ersatz für RemNote. RemNote bietet in diesem Vergleich den stärksten integrierten Workflow für Notizen und PDFs; Ankis Kartensystem und Migrationsformate sind die ausgereiftesten.

**Stand der Fakten und Preise:** 31. August 2026. Die genannten Preise basieren auf den öffentlich verfügbaren US-Preisen und, soweit angegeben, auf jährlicher Abrechnung. Steuern, Region, App-Store und Beta-Bedingungen können den tatsächlichen Betrag verändern.

![Eine Archivarin testet die Übertragung einer kleinen Auswahl aus einer intakten verknüpften Studienmappe in getrennte Karten-, Datei- und Bausteinsysteme](/blog/remnote-alternative.png)

## Kläre zuerst, warum du wechseln willst

- **Preis:** Prüfe zuerst, ob RemNote Free deinen tatsächlichen Workflow bereits abdeckt. Der Tarif umfasst unbegrenzt viele Notizen, Lernkarten und synchronisierte Geräte, begrenzt jedoch annotierte Dokumente und einige erweiterte Funktionen.
- **Ein Karten-Workflow, der zu stark an Notizen gebunden ist:** Probiere Anki. Dort stehen Karten, Vorlagen, Importe und FSRS stärker im Mittelpunkt.
- **Einfache lokale Notizdateien:** Teile die Aufgaben auf: Obsidian für Markdown-Notizen, Anki für Wiederholungen. Das ist weniger eng verzahnt, dafür ist viel klarer, welche Daten dir wo gehören.
- **Eine Open-Source-Lösung für verknüpfte Notizen, PDFs und integrierte Karten:** Logseq kommt diesem Ziel am nächsten – allerdings mit einer wichtigen Einschränkung im Jahr 2026: Die neue Datenbankversion ist in der Beta, die neue iOS-App und die Echtzeit-Synchronisierung sind im Alpha-Stadium, und die neue Android-App ist noch nicht zum Testen freigegeben.
- **Quellcode und Self-Hosting für ein fokussiertes Kartensystem:** Ziehe Flashcards in Betracht, wenn dir Karten mit Vorder- und Rückseite genügen und du einen Neustart des Lernplans sowie erheblichen Betriebsaufwand auf AWS akzeptierst.
- **PDFs lesen, verknüpfte Markierungen nutzen und Karten an einem Ort erstellen:** Bleibe bei RemNote. Keine der anderen Optionen bildet diesen Workflow sauber nach.

Gerade die letzte Antwort wird leicht übersehen. Ein Wechsel ist kein Fortschritt, wenn die Alternative zwar deinen Wunsch nach einer anderen Lizenz erfüllt, aber schon die nächste Lerneinheit erschwert.

## RemNote-Alternativen: die Entscheidungsmatrix

| Option | Wann sie am besten passt | Notizen und PDFs | Scheduler | Offline-Nutzung und Datenhoheit | Preis geprüft am 31. Aug. 2026 | Wichtigste Migrationsgrenze |
|---|---|---|---|---|---|---|
| **Bei RemNote bleiben** | Verknüpfte Notizen, die Arbeit mit Quellen und Karten gehören für dich zusammen | Integrierte Wissensdatenbank und Reader mit verknüpften PDF-Markierungen, Notizen und Karten | FSRS-6 als Beta mit manueller Aktivierung und Training der Gewichte; SM-2 bleibt Standard | Desktop- und Mobil-Apps funktionieren nach der Anmeldung offline; auf dem Desktop sind rein lokale Wissensdatenbanken möglich | Kostenlos; Pro 8 US$/Monat bei jährlicher Abrechnung; Pro mit KI 18 US$/Monat bei jährlicher Abrechnung | Der native Export eignet sich am besten zur Wiederherstellung in RemNote, enthält derzeit aber keine Bilder und PDFs |
| **Anki** | Karten, Vorlagen, Add-ons und eine möglichst originalgetreue Sammlung haben Vorrang | Kein integrierter Arbeitsbereich für verknüpfte Notizen oder das Lesen von PDFs | Ausgereifte FSRS-Einstellungen, optimierte Parameter, gewünschte Behaltensquote und Simulation der Arbeitslast | Lokale Sammlungen auf Desktop und Mobilgeräten; quelloffener Desktop-Kern und offizieller Server für selbst gehostete Synchronisierung | Desktop, AnkiWeb und AnkiDroid sind kostenlos; die offizielle iOS-App AnkiMobile ist kostenpflichtig | RemNote exportiert Karten als `.apkg`, nicht das gesamte Notizsystem; prüfe Daten zum Wiederholungsplan und Medien mit einem Testimport |
| **Obsidian + Anki** | Du willst einfache lokale Markdown-Notizen, ohne auf einen ausgereiften Karten-Scheduler zu verzichten | Obsidian verwaltet lokale Notizen und Anhänge, Anki die Karten; es gibt keinen durchgängigen Workflow vom Reader bis zur Wiederholung | Anki FSRS | Lokaler Markdown-Vault plus lokale Anki-Sammlung; Obsidian selbst ist kostenlos, aber proprietär | Obsidian kostenlos; optionales Sync ab 4 US$/Monat bei jährlicher Abrechnung; Anki-Preise wie oben | RemNotes Markdown- und Anki-Exporte führen zu zwei getrennten Systemen; aktive Verknüpfungen zwischen Notizen, Quellen und Karten werden nicht zu einem einzigen portablen Workflow |
| **Logseq** | Du suchst ausdrücklich einen quelloffenen, notizorientierten Outliner mit PDFs und integrierten Karten | Verknüpfte Blöcke, PDF-Annotationen und Kartenwiederholung mit vier Bewertungen | Integrierter Scheduler mit vier Bewertungen; die [Dokumentation verknüpft den neuen Algorithmus](https://github.com/logseq/docs/blob/master/db-version.md#cards) mit dem ursprünglichen FSRS-Projekt | AGPL-lizenzierte App; Daten im neuen Datenbankformat lassen sich als SQLite, EDN oder verlustbehaftetes Standard-Markdown exportieren | Kostenlose Open-Source-App | Die aktuelle Datenbankversion ist in der Beta; die neue iOS-App und die Echtzeit-Synchronisierung sind im Alpha-Stadium, die neue Android-App ist noch nicht zum Testen freigegeben, und der alte Logseq-SRS-Stand ist nicht mit dem neuen Kartenalgorithmus kompatibel |
| **Flashcards** | Du willst einfache Karten in einem offenen Web-, Mobile- und Backend-Stack | Keine Wissensdatenbank für Notizen, keine Backlinks, kein PDF-Reader und keine native Desktop-App | FSRS-6 mit festen Gewichten und weniger Einstellmöglichkeiten als Anki oder RemNote | Offline-first für Web, iOS und Android; vollständiger MIT-lizenzierter Stack, der sich auf AWS produktiv betreiben lässt | Gehostete App während der Beta kostenlos; beim Self-Hosting fallen Infrastruktur- und Anbieterkosten an | Kein direkter Importer für RemNote oder Anki; Inhalte lassen sich neu aufbauen, Wiederholungsverlauf und FSRS-Stand werden jedoch nicht übernommen |

Die Tabelle ist keine Punktewertung. Wer intensiv mit PDFs lernt, kann durch den Wechsel zur „offensten“ Option mehr verlieren, als die Lizenz bringt. Wer nur ein einfaches Vokabeldeck nutzt, bezahlt womöglich für ein Notizsystem, das gar nicht mehr gebraucht wird. Beginne mit der Zeile, die deine wichtigste Einschränkung beschreibt, und teste dann die jeweilige Migrationsgrenze.

Kostenlos und Open Source sind zwei verschiedene Kriterien. RemNote Free und Obsidian kosten in der Grundversion nichts, sind aber proprietär. Ankis Desktop-Kern, Logseq und Flashcards veröffentlichen ihren Quellcode. AnkiMobile bleibt eine kostenpflichtige iOS-App, und beim Self-Hosting von Flashcards fallen weiterhin Cloud-Kosten an.

## Bleibe bei RemNote, wenn der verknüpfte Workflow den eigentlichen Wert ausmacht

RemNote verbindet die Arbeitsschritte, die die meisten Alternativen voneinander trennen. Im [Reader](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader) kannst du ein PDF neben deinen Notizen geöffnet lassen, Verweise auf genaue Textstellen in deine Notizen übernehmen und diese Notizen oder Markierungen in Lernkarten verwandeln. Im Free-Tarif lassen sich drei Dokumente annotieren; laut aktueller [Preisseite](https://www.remnote.com/pricing) umfasst Pro unbegrenzt viele annotierte Dokumente.

Auch der Scheduler ist kein offensichtlicher Wechselgrund mehr. RemNote dokumentiert [FSRS-6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) inzwischen als Beta-Option, die du manuell aktivierst. Nach mindestens 1.000 Wiederholungen kann RemNote die Gewichte anhand deines eigenen Verlaufs trainieren. Anki bietet weiterhin mehr Einstellmöglichkeiten. Wer RemNotes Notizen und PDF-Funktionen mag, muss sie aber nicht allein wegen FSRS aufgeben.

Auch offline kann RemNote mehr, als nur in einem bereits geöffneten Browser-Tab weiterzulaufen. Mit den [Desktop- und Mobile-Apps](https://help.remnote.com/en/articles/6752029-offline-mode) kannst du nach Installation und Anmeldung Notizen offline bearbeiten und Karten wiederholen. Auf dem Desktop liegt eine vollständige lokale Kopie der Bilder und PDFs. Auf Mobilgeräten und im Web können nicht zwischengespeicherte Medien fehlen; die Web-App lässt sich ohne Verbindung außerdem nicht aus einem geschlossenen oder neu geladenen Tab starten.

Wenn du nach einer **kostenlosen RemNote-Alternative** suchst, probiere vor dem Wechsel den Free-Tarif aus. Geht es dir dagegen um den Quellcode, ist ein lokaler Modus nicht dasselbe wie Open Source oder Self-Hosting. Der separate Leitfaden zur Frage, [ob RemNote Open Source ist](/de/blog/is-remnote-open-source/), erklärt diese Grenze genauer.

## RemNote vs. Anki: Entscheide, was im Mittelpunkt steht

Der entscheidende Unterschied bei **RemNote vs. Anki** lautet nicht „Notizen oder keine Notizen“. Auch Anki speichert Notizen. Eine Anki-Notiz besteht jedoch aus Feldern, aus denen [Kartenvorlagen](https://docs.ankiweb.net/templates/intro.html) Lernkarten erzeugen. RemNote beginnt mit Dokumenten und verknüpften Stichpunkten, aus denen Karten entstehen können. Das eine ist ein ausgereiftes System zur Kartenerstellung, das andere eine Lernumgebung rund um Notizen und Quellen.

Wähle Anki, wenn benutzerdefinierte Felder, erzeugte Kartenvarianten, HTML/CSS-Vorlagen, Add-ons oder ein jahrelanger Wiederholungsverlauf im Mittelpunkt stehen. Die aktuellen [FSRS-Einstellungen](https://docs.ankiweb.net/deck-options.html#fsrs) umfassen die Parameteroptimierung, die gewünschte Behaltensquote und eine Simulation der Arbeitslast. Mit den [Exportfunktionen](https://docs.ankiweb.net/exporting.html) lässt sich eine vollständige Sammlung als `.colpkg` sichern; `.apkg`-Deckpakete können Planungsinformationen, Voreinstellungen und Medien enthalten.

RemNote bietet einen Weg zu Anki, doch die Bezeichnung des Exports ist entscheidend: Der [Anki-Export heißt „Flashcards Only“](https://help.remnote.com/en/articles/7898019-exporting-notes). Stichpunkte ohne Karten werden nicht exportiert. RemNote übernimmt den übergeordneten Kontext in die exportierten Karten und vereinfacht dabei das Verhalten von Multiple-Choice-Karten. Der Export ist jedoch weder deine Wissensdatenbank noch deine PDF-Bibliothek oder dein vollständiger Lese-Workflow. Die offizielle Exportseite von RemNote verspricht auch nicht, dass sämtliche Daten deines Wiederholungsplans in Anki ankommen. Teste den Export, bevor du von einer verlustfreien Migration ausgehst.

Anki ist hier die stärkste Wahl, wenn die Karten im Mittelpunkt stehen. Ein nahtloser Ersatz für den RemNote Reader ist es nicht. Wenn du weiterhin Fachtexte annotierst und verknüpfte Notizen schreibst, kombiniere Anki mit einem Notiztool, statt es in diese Rolle zu zwingen. Der [ausführlichere Leitfaden zu Anki-Alternativen](/de/blog/best-anki-alternatives/) stellt weitere kartenorientierte Optionen vor.

## Obsidian plus Anki: lokale Dateien, bewusst getrennt

Nicht alle, die nach RemNote-Alternativen suchen, brauchen die nächste All-in-one-App. Manche wollen Notizen, die gewöhnliche Dateien bleiben, und ein Wiederholungssystem, das sich unabhängig weiterentwickeln kann. Obsidian plus Anki ist eine saubere Lösung für diese Aufteilung.

[Obsidian speichert Notizen](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata) als Markdown-formatierten Klartext in einem lokalen Ordner. Die App ist ohne Konto kostenlos; das optionale [Obsidian Sync](https://obsidian.md/pricing) kostet bei jährlicher Abrechnung ab 4 US$ pro Monat. Obsidian ist nicht quelloffen, doch die Notizdateien sind direkt lesbar und lassen sich mit gewöhnlichen Dateitools sichern.

Nutze RemNotes Markdown-Export für die Notizen und den `.apkg`-Export für die Karten. Rechne mit Nacharbeit. Eine verschachtelte Gliederung als lesbares Markdown ist nicht dasselbe wie aktive RemNote-Referenzen, Portale, Vorlagen oder PDF-Markierungen. Sobald Notizen und Karten in zwei Apps liegen, werden Änderungen zudem nicht mehr automatisch zwischen ihnen übernommen.

Diese Variante passt, wenn dir lokale Dateien in eigener Hand wichtiger sind als ein nahtloser Ablauf aus „markieren, verknüpfen, Karte erstellen, wiederholen“. Sie ist ein schlechter Tausch, wenn du RemNote genau wegen dieses Ablaufs gewählt hast.

## Logseq: Die notizorientierte Open-Source-Option ist im Umbruch

Logseq gehört in einen Vergleich von **Open-Source-Alternativen zu RemNote**, weil die App tatsächlich bei den Notizen ansetzt. Das offizielle [AGPL-lizenzierte Repository](https://github.com/logseq/logseq) beschreibt eine Wissensmanagement-App mit verknüpften Blöcken und PDF-Annotationen. Die [aktuelle Dokumentation zur Datenbankversion](https://github.com/logseq/docs/blob/master/db-version.md#cards) ergänzt integrierte Karten: Du versiehst einen Block mit einem Tag, siehst, wann er fällig ist, und wiederholst ihn mit vier Bewertungen.

Der aktuelle Entwicklungsstand ist wichtiger als die Funktionsliste. Laut Logseqs eigenem Repository befindet sich die Datenbankversion in der Beta, die neue iOS-App und die Echtzeit-Synchronisierung sind im Alpha-Stadium. Der aktuellen Dokumentation zur Datenbankversion zufolge ist die Android-App noch nicht für Alpha-Tests freigegeben. Logseq warnt ausdrücklich vor möglichem Datenverlust und empfiehlt einen unkritischen Test-Graphen sowie Backups. In den [Änderungshinweisen zur Datenbankversion](https://github.com/logseq/docs/blob/master/db-version-changes.md#high-level-changes) steht außerdem, dass der neue Kartenalgorithmus weder Eigenschaften noch SRS-Daten aus älteren Logseq-Lernkarten übernimmt.

Auch bei der Portabilität lohnt sich ein genauer Blick. Die aktuelle [Exportdokumentation zur Datenbankversion](https://github.com/logseq/docs/blob/master/db-version.md#export-and-import) bietet SQLite mit Assets, EDN und Standard-Markdown. Laut Dokumentation ist EDN der einzige bearbeitbare Export, der sämtliche Graph-Daten vollständig erfasst. Trotzdem empfiehlt sie EDN nicht als einzige Sicherung. Beim Export als Standard-Markdown fehlen Eigenschaften und Zeitstempel.

Logseq ist damit die Option, die du prüfen solltest, wenn Open Source, verknüpfte Notizen, PDFs und integrierte Karten gleichermaßen wichtig sind. Für den Umzug einer kritischen Wissensdatenbank aus dem Medizinstudium an einem einzigen Tag würde ich es im August 2026 nicht wählen. Lass Logseq zunächst parallel zu RemNote laufen und prüfe, wie sich die laufende Umstellung auf den Geräten verhält, die du tatsächlich nutzt.

## Flashcards: offener Full Stack, bewusst schmales Lernmodell

Flashcards setzt fast den entgegengesetzten Schwerpunkt zu RemNote. Die [Funktionen](/de/features/) konzentrieren sich auf Markdown-Karten mit Vorder- und Rückseite, Decks, Tags, Medien, FSRS-Wiederholungen, Offline-first-Clients und KI-gestützte Kartenentwürfe. Es gibt keine Wissensdatenbank für verknüpfte Notizen, keinen PDF-Reader, keine native Desktop-App und keinen direkten RemNote-Importer.

Der Zugriff auf den Quellcode reicht weit: Das MIT-lizenzierte Repository umfasst Web, iOS, Android, Authentifizierung, Backend, Synchronisierung und Infrastruktur. Die unterstützte [Anleitung für Self-Hosting in Produktion](/de/docs/self-hosting/) nutzt AWS CDK. Das ist keine lokale Lösung, die mit einem einzigen Befehl läuft. Betreiber kümmern sich selbst um Cloud-Kosten, Secrets, Migrationen, Monitoring, Backups, Wiederherstellungstests und separat gebaute Mobile-Apps.

Für bestehende RemNote-Nutzer ist die Migration die größere Einschränkung. Flashcards importiert eigene `flashcards.zip`-Pakete, aber weder RemNote-Markdown noch Anki-Dateien im Format `.apkg`. Diese Pakete enthalten Karten, Tags und referenzierte Medien, aber keinen Wiederholungsverlauf, keinen FSRS-Stand, keine Workspace-Einstellungen, keine vollständige Deckstruktur und keine Konten. Der KI-Chat kann exportierten Text in überprüfte Kartenentwürfe verwandeln. Dabei werden Inhalte neu aufgebaut; die bisherige Sammlung wird nicht fortgesetzt. Die [Anleitung zur Migration aus einem Anki-TXT-Export](/de/blog/migrate-from-anki-txt-export-open-source-flashcards/) zeigt diese verlustbehaftete Grenze Schritt für Schritt.

Wähle Flashcards für ein neues oder einfaches Kartensystem, wenn dir der Zugriff auf den gesamten Quellcode wichtig ist. Bleibe für vernetztes Lernen bei RemNote, und wähle Anki, wenn eine originalgetreue Migration oder eine anspruchsvollere Kartenstruktur entscheidend ist. Für den engeren Vergleich der Kartensysteme findest du weitere Details unter [Anki vs. Flashcards](/de/blog/anki-vs-flashcards-open-source-app/) und im [Leitfaden zu Open-Source-Lernkarten-Apps](/de/blog/best-open-source-flashcard-apps-2026/).

## Was sich aus RemNote nicht sauber übertragen lässt

RemNote bietet mehrere nützliche Exporte, doch keine einzelne Datei bildet das gesamte Produkt in einer anderen App nach.

- **Der vollständige RemNote-Export** ist das beste Format, um Daten in RemNote wiederherzustellen. Bilder und PDFs fehlen darin derzeit.
- **Der Anki-Export als `.apkg`** enthält nur Lernkarten. Stichpunkte ohne Karten verschwinden auf diesem Weg, und das Ergebnis ist nicht dein verknüpftes Notizsystem.
- **Markdown, HTML, OPML und Text** machen Inhalte in anderen Anwendungen leichter lesbar. Sie bringen einer anderen App aber nicht alle RemNote-spezifischen Beziehungen und Workflows bei.
- **PDF-Markierungen und Quellen** musst du gesondert prüfen. Mit dem RemNote Reader lässt sich ein PDF samt Markierungen herunterladen. Gehe aber nicht davon aus, dass der vollständige Export der Wissensdatenbank diese Datei enthält.
- **Einstellungen, Themes und Plugins** sind laut [Backup-Dokumentation](https://help.remnote.com/en/articles/6301627-remnote-backups) nicht in einem manuellen RemNote-Backup enthalten.
- **Den Wiederholungsstand** solltest du im Zielsystem Karte für Karte prüfen. Selbst wenn ein Import Frage und Antwort erhält, kann der Lernplan von vorn beginnen.

Deshalb reichen Angaben wie „unterstützt Markdown“ oder „importiert Anki“ nicht aus. Portabilität hat mehrere Ebenen: lesbare Notizen, nutzbare Medien, verknüpfte Quellen, Kartenstruktur und Lernverlauf.

## Spiele den Wechsel durch, bevor du kündigst

Gestalte den Wechsel so, dass du ihn rückgängig machen kannst. Eine ruhige Stunde jetzt ist günstiger, als in der Prüfungswoche ein fehlendes PDF zu entdecken.

1. Erstelle einen neuen manuellen Export vom Typ **RemNote (Complete)** und bewahre ihn unverändert auf.
2. Kopiere auf dem Desktop die lokalen `.db.zip`-Backups und den Ordner `files`. Lade alle ursprünglichen oder annotierten PDFs herunter, die du nicht ersetzen kannst.
3. Wähle eine kleine, schwierige Stichprobe: verschachtelte Notizen, Referenzen, ein PDF, Bilder, Lückentext- oder Multiple-Choice-Karten, Tags und Karten mit einem aussagekräftigen Wiederholungsverlauf.
4. Exportiere diese Stichprobe in allen Formaten, die deine Zieloption benötigt – normalerweise Markdown für Notizen und `.apkg` für Anki.
5. Importiere sie in einen temporären Vault, Graphen, ein Profil oder einen Workspace. Vergleiche Anzahl, Formatierung, Links, Medien, Kartenvorder- und -rückseiten sowie Fälligkeiten direkt mit RemNote.
6. Arbeite auf jedem Gerät, das du nutzen willst, offline. Stelle danach die Verbindung wieder her und prüfe, ob Änderungen und Wiederholungen wie erwartet ankommen.
7. Stelle das vollständige Backup in einer temporären lokalen RemNote-Wissensdatenbank wieder her. Ein heruntergeladenes Archiv ist erst dann ein Wiederherstellungsplan, wenn du es erfolgreich geöffnet hast.
8. Lerne mindestens einige echte Sitzungen lang in beiden Systemen. Kündige erst, wenn die Alternative den täglichen Workflow, einen Export und eine Wiederherstellung überstanden hat.

Bewahre die Quellexporte auch nach dem Wechsel auf. Ein erfolgreicher Import belegt nur die Kompatibilität mit der heutigen Version des Zielsystems, nicht den dauerhaften Zugriff auf jeden Bestandteil des alten Systems.

## Die praktische Auswahlliste

- **Bleibe bei RemNote**, wenn verknüpfte Notizen und das Lernen mit PDFs den eigentlichen Wert ausmachen. Der Free-Tarif oder eine rein lokale Wissensdatenbank löst deine Einschränkung womöglich bereits.
- **Wähle Anki**, wenn Karten, Vorlagen, FSRS-Einstellungen und eine originalgetreue Migration an erster Stelle stehen.
- **Wähle Obsidian plus Anki**, wenn dir einfache lokale Notizdateien den Aufwand mit zwei Tools wert sind.
- **Prüfe Logseq**, wenn du eine Open-Source-Lösung für verknüpfte Notizen und integrierte Karten brauchst. Nutze dabei nur unkritische Testdaten, solange die aktuelle Datenbank und die Synchronisierung noch im Beta- beziehungsweise Alpha-Stadium sind.
- **Wähle Flashcards**, wenn dir ein einfaches neues Kartensystem und der Zugriff auf den gesamten Quellcode wichtiger sind als Notizen, PDFs oder die Fortführung deines Lernplans.

Ich entwickle Flashcards und würde für ein PDF-lastiges, verknüpftes Notizbuch trotzdem bei RemNote bleiben oder für eine komplexe, über Jahre gewachsene Sammlung Anki wählen. Flashcards ist die schmalere Lösung: Karten mit Vorder- und Rückseite, ein offener Stack und ein neuer Lernplan.

Sobald du weißt, welche Grenze du akzeptieren kannst, teste nur diese Option. Wenn Flashcards passt, zeigt dir die [Anleitung für den Einstieg](/de/docs/getting-started/) die Einstiegspunkte für die gehostete und die selbst gehostete Variante. Wenn es nicht passt, ist es genauso legitim, bei RemNote zu bleiben.
