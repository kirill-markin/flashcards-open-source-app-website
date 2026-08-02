---
title: "RemNote-Alternative 2026: RemNote vs Anki vs Flashcards"
description: "Du suchst eine RemNote-Alternative? Vergleiche RemNote, Anki und Flashcards bei Notizen, PDFs, FSRS, Offline-Lernen, Migration, Preisen und Self-Hosting."
date: "2026-03-19"
updated: "2026-08-02"
image: "/blog/remnote-alternative.png"
keywords:
  - "remnote alternative"
  - "remnote alternative 2026"
  - "remnote vs anki"
  - "remnote vs flashcards"
  - "open source remnote alternative"
  - "self hosted remnote alternative"
  - "fsrs flashcards app"
  - "offline flashcards app"
---

Die alte Version dieses Artikels lag in einem wichtigen Punkt falsch: Sie nannte FSRS als Grund, RemNote zu verlassen. Inzwischen dokumentiert RemNote FSRS-6 als Beta – mit manueller Aktivierung und automatischem Training der Gewichte. Auch Anki und Flashcards verwenden FSRS. Bei der Suche nach einer passenden **RemNote-Alternative** geht es 2026 deshalb vor allem um den Workflow: Willst du verknüpfte Notizen und direkt mit PDFs arbeiten, ein ausgereiftes Karteikartensystem oder einen einfacheren Open-Source-Stack für Karteikarten?

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](/), eines der hier verglichenen Produkte. Das macht es nicht automatisch zum Sieger. RemNote bietet in diesem Vergleich den stärksten nativen Workflow für Notizen und PDFs. Anki hat das ausgereifteste Kartensystem und Desktop-Ökosystem sowie die beste Migrationsunterstützung und die umfassendsten Scheduler-Einstellungen.

**Fakten geprüft am:** 2. August 2026. Die folgenden Preise waren an diesem Tag als US-Preise oder anderweitig öffentlich angegeben. Steuern, regionale Preise, Abrechnung über App-Stores und Beta-Bedingungen können abweichen.

![Vergleich der RemNote-Alternativen: RemNote vs Anki vs Flashcards für Notizen, PDFs, FSRS, Offline-Lernen und Self-Hosting](/blog/remnote-alternative.png)

## Die kurze Antwort

- Wähle **RemNote**, wenn deine Notizen im Mittelpunkt des Systems stehen. Aufzählungen und Dokumente werden zu Karten, während der Reader PDF-Markierungen, Notizen, Verweise und Karten miteinander verknüpft hält.
- Wähle **Anki**, wenn die Karten im Mittelpunkt stehen. Es bietet ausgereifte Vorlagen, FSRS-Einstellungen, native Desktop-Apps, etablierte Migrationsformate und ein großes Add-on-Ökosystem.
- Wähle **Flashcards** für einfache Markdown-Karten mit Vorder- und Rückseite in einem MIT-lizenzierten Web- und Mobile-Stack. Die App ist offline-first, und der gesamte Stack lässt sich selbst hosten. Es gibt jedoch weder eine Wissensdatenbank für Notizen noch einen PDF-Reader, eine native Desktop-App oder einen direkten Import aus RemNote und Anki.
- Behalte dein aktuelles System, wenn keiner dieser Unterschiede ein echtes Problem löst. Eine neue Oberfläche rechtfertigt nur selten den Verlust jahrelanger Wiederholungsverläufe.

## RemNote vs Anki vs Flashcards

| Frage | RemNote | Anki | Flashcards |
|---|---|---|---|
| Am besten geeignet für | Lernen in verknüpften Notizen und Quelldokumenten | Ein ausgereiftes, konfigurierbares Karteikartensystem | Einfache Karten in einem offenen Web-/Mobile-Stack |
| Kern-Workflow | Notizen zuerst: Aus Aufzählungen, Dokumenten und Verweisen können Karten entstehen | In der Praxis Karten zuerst; Notizen mit Feldern erzeugen über Vorlagen Karten | Karten zuerst: Vorder- und Rückseite in Markdown, dazu Decks, Tags und Medien |
| Notizen und PDFs | Wissensdatenbank, Backlinks/Verweise und ein PDF-Reader mit verknüpften Markierungen | Keine integrierte Wissensdatenbank für Notizen und kein PDF-Reader | Keine Wissensdatenbank für Notizen, Backlinks oder PDF-Reader; der Online-KI-Chat kann Karten aus angehängten PDFs und Notizen entwerfen |
| FSRS | FSRS-6 als Beta, manuell aktiviert; kann Gewichte anhand des Wiederholungsverlaufs trainieren | Ausgereifte FSRS-Einstellungen, Parameteroptimierer, gewünschte Behaltensquote und Simulator | FSRS-6 mit vier Bewertungsbuttons sowie konfigurierbarer Behaltensquote, Lernschritten, Maximalintervall und Fuzz; festgelegte Gewichte, kein persönlicher Optimierer |
| Apps | Web, Windows, macOS, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, offizielles kostenpflichtiges AnkiMobile, unabhängiges kostenloses AnkiDroid | Web, iOS, Android; keine native Desktop-App |
| Offline | Gute Unterstützung auf Desktop und Mobilgeräten; nicht zwischengespeicherte PDFs oder Medien können mobil und im Web fehlen, und die Web-App lässt sich ohne Verbindung nicht von Grund auf starten | Lokale Sammlungen auf Desktop und Mobilgeräten funktionieren offline; Synchronisierung ist optional | Karten, Bearbeitungen und Wiederholungen funktionieren offline-first; KI und die Übertragung von Cloud-Paketen benötigen Netzwerkzugang und ein Cloud-Konto |
| Import | RemNote-Backups, Anki-Inhalte und Wiederholungsverlauf, Markdown, Obsidian, Dynalist, Workflowy | Text, `.apkg`, `.colpkg`, Mnemosyne | Nur das eigene Inhaltspaket `flashcards.zip`; kein direkter Anki- oder RemNote-Importer |
| Export | Natives Format, OPML, Anki `.apkg` nur für Karten, HTML, Markdown, Text; beim nativen Export fehlen derzeit Bilder und PDFs | Text, `.apkg`, `.colpkg` | Eigenes `flashcards.zip`: aktive Karten, Tags, referenzierte Medien; kein Wiederholungsverlauf, FSRS-Status, keine Einstellungen, vollständige Deck-Struktur oder Kontodaten |
| Preis, geprüft am 2. Aug. 2026 | Kostenlos; Pro 8 US$/Monat bei jährlicher Abrechnung; Pro+AI 18 US$/Monat bei jährlicher Abrechnung | Desktop, AnkiWeb und AnkiDroid kostenlos; AnkiMobile in den USA einmalig 24,99 US$ | Gehostete App während der Beta kostenlos; selbst gehostete Software kostenlos zuzüglich Infrastruktur- und Anbieterkosten |
| Open Source / Self-Hosting | Proprietär; rein lokale Wissensdatenbanken auf dem Desktop, kein offizielles Self-Hosting des gesamten Dienstes | Open-Source-Clients und ein offizieller selbst gehosteter Sync-Server, nicht das vollständige AnkiWeb | MIT-lizenziert; unterstütztes Deployment des gesamten Stacks für den Produktivbetrieb über AWS CDK |

Die Tabelle zeigt vor allem, was ein Wechsel kostet – nicht, welches Produkt gewinnt. Wer intensiv mit PDFs lernt, verliert beim Abschied von RemNote womöglich mehr, als ein anderer Scheduler bringt. Anki-Nutzer mit eigenen Notiztypen und jahrelangem Wiederholungsverlauf profitieren von einer aufgeräumteren Oberfläche vielleicht kaum. Und wer verknüpfte Notizen braucht, sollte nicht darauf warten, dass aus einer fokussierten Karteikarten-App irgendwann ein Notizbuch wird.

## Die wichtigste Entscheidung: Notizen oder Karten zuerst

RemNote beginnt mit einer Wissensdatenbank. Laut Dokumentation ist [alles, was du in RemNote schreibst, ein Aufzählungspunkt](https://help.remnote.com/en/articles/8017859-bullets), und [jeder Aufzählungspunkt kann zu einer Karteikarte werden](https://help.remnote.com/en/articles/8663109-flashcard-basics). So finden eine Vorlesungsgliederung, ein verknüpftes Konzept, ein Quellenauszug und eine Wiederholungsfrage in derselben Struktur Platz.

Das funktioniert gut, wenn du dir den Stoff beim Schreiben erschließt und erst danach entscheidest, was du wiederholen willst. Hierarchie und Verweise werden selbst zum Teil des Lernsystems. Wenn dir diese Struktur bereits hilft, streichst du mit dem Wechsel von RemNote zu einer schlichten Karten-App eine echte Funktion. Du vereinfachst das System nicht bloß.

Auch Anki basiert auf Notizen. Dort meint „Notiz“ allerdings einen Datensatz mit Feldern. [Kartenvorlagen aus HTML/CSS](https://docs.ankiweb.net/templates/intro.html) machen daraus eine oder mehrere Lernkarten. Das eignet sich sehr gut für Vokabeln in beide Richtungen, Lückentexte, Audiokarten und spezielle Layouts. Eine verknüpfte Wissensdatenbank für Vorlesungsnotizen oder Forschungsmaterial ist es nicht.

Die [Funktionen von Flashcards](/features/) folgen dem schlanksten Modell in diesem Vergleich: Vorderseite, Rückseite, Markdown, Decks, Tags und referenzierte Medien. Backlinks, längere Notizen oder per Vorlage erzeugte Kartenvarianten gibt es nicht. Für eine neue Sammlung mit einfachen Vorder- und Rückseiten kann genau das passen. Wenn du auf die Wissensdatenbank von RemNote angewiesen bist, ist Flashcards dagegen ein schlechter Ersatz.

Bei **RemNote vs Anki** passt RemNote besser, wenn Karten Teil eines größeren Notizbestands bleiben sollen. Anki ist sinnvoller, wenn strukturierte Felder und gerenderte Kartenvorlagen wichtiger sind als das Notizbuch drumherum. Bei **RemNote vs Flashcards** fällt die Trennlinie noch deutlicher aus: auf der einen Seite ein verknüpfter Lernbereich, auf der anderen ein fokussierter Bereich für Karten mit Vorder- und Rückseite.

## Beim Lernen mit PDFs ist RemNote die klare Wahl

Im Reader von RemNote kannst du [ein PDF öffnen, Markierungen mit ihrer Quelle verknüpfen und aus der Lektüre Notizen oder Karten erstellen](https://help.remnote.com/en/articles/6690975-learning-from-pdfs-and-files-with-the-remnote-reader). Weder Anki noch Flashcards bieten einen vergleichbaren nativen Lese-Workflow.

Mit einem kostenlosen RemNote-Konto kannst du [insgesamt drei PDFs annotieren](https://help.remnote.com/en/articles/6690972-uploading-pdfs-to-remnote). Im Pro-Tarif entfällt diese Grenze. Drei PDFs reichen, um den Workflow auszuprobieren. Wenn Fachartikel oder Lehrbücher im Mittelpunkt deines Kurses stehen, kommst du damit allerdings nicht weit.

Anki hat weder einen integrierten PDF-Reader noch eine Annotationsfunktion. Add-ons und externe Tools können die Lücke schließen, gehören aber nicht zum Kernprodukt. Anki eignet sich eher als Ziel für fertige Lernfragen als als Ort, an dem du einen Fachartikel liest und markierst.

Der KI-Chat von Flashcards nimmt PDFs und Notizen an und schlägt daraus Karten mit Vorder- und Rückseite vor, die du prüfen kannst. Das [Limit für Nicht-Bild-Anhänge im Web-Client](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/web/src/chat/attachments/FileAttachment.tsx) liegt derzeit bei 3 MiB; der KI-Workflow benötigt eine Internetverbindung. Er speichert weder deine Leseposition noch Markierungen im PDF und verknüpft gespeicherte Karten nicht mit Annotationen. Wenn dein Ablauf „lesen, markieren, verknüpfen, wiederholen“ lautet, bleib bei RemNote.

## FSRS ist kein Grund mehr, RemNote zu verlassen

Die [FSRS-Dokumentation von RemNote](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) beschreibt FSRS-6 als benutzerdefinierten Scheduler in der Beta, den du manuell aktivieren musst. Sobald genug Daten vorliegen, kann er Gewichte anhand deines Wiederholungsverlaufs trainieren. RemNote führt weiterhin SM-2 als Standard auf. Die Unterstützung von FSRS bedeutet also nicht, dass es bereits in jedem Konto aktiv ist.

Anki bietet in diesem Vergleich das ausgereifteste FSRS-Werkzeugset. Zu den integrierten [FSRS-Einstellungen](https://docs.ankiweb.net/deck-options.html#fsrs) gehören die gewünschte Behaltensquote, ein Parameteroptimierer, der die Gewichte an den Wiederholungsverlauf anpasst, und ein Simulator zur Schätzung des Lernaufwands. Für verschiedene Voreinstellungen lassen sich unterschiedliche trainierte Parameter verwenden.

Flashcards verwendet FSRS-6 mit Again, Hard, Good und Easy. In den Workspace-Einstellungen legst du die gewünschte Behaltensquote, Lern- und Wiederlernschritte, das Maximalintervall und Fuzz fest. Das Produkt arbeitet mit festgelegten Gewichten und hat keinen Optimierer, der sie an den Verlauf eines einzelnen Nutzers anpasst. Der [Leitfaden zur FSRS-Planungslogik](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) dokumentiert sowohl die Einstellungen als auch diese Einschränkung.

In der Praxis heißt das: RemNote bietet inzwischen einen glaubwürdigen Weg zu FSRS, Anki die größte Kontrolle über die Feinabstimmung und Flashcards eine feste FSRS-6-Implementierung mit weniger Personalisierungsmöglichkeiten. Lies [FSRS vs SM-2](/blog/fsrs-vs-sm-2/), wenn der Scheduler für dich das wichtigste Kriterium ist. Wechsle nur nicht von RemNote, weil ein älterer Vergleich behauptet, es unterstütze FSRS nicht.

## Offline-Lernen und unterstützte Plattformen

RemNote gibt es für Web, Windows, macOS, Linux, iOS und Android. Laut [Offline-Dokumentation](https://help.remnote.com/en/articles/6752029-offline-mode) funktionieren die Desktop- und Mobile-Apps nach der Anmeldung auch ohne Internetverbindung. Auf dem Desktop liegen alle Medien und PDFs lokal. Auf Mobilgeräten und im Web können Dateien fehlen, die nie zwischengespeichert wurden; die Web-App lässt sich ohne Verbindung nicht von Grund auf starten.

Für eine vollständige Offline-Wissensdatenbank ist die Desktop-App damit die verlässlichste RemNote-Variante. Auch auf dem Smartphone kannst du offline gut wiederholen. „Funktioniert offline“ bedeutet aber nicht, dass ein altes, nie zwischengespeichertes PDF bereits auf dem Gerät liegt.

Anki speichert Sammlungen in seinen Apps für Windows, macOS und Linux lokal. Auch die offizielle iOS-App AnkiMobile und die unabhängige Android-App AnkiDroid unterstützen Wiederholungen ohne Internet; bei Bedarf synchronisiert AnkiWeb die Daten. Die [offizielle Seite zu den Anki-Apps](https://apps.ankiweb.net/) erklärt, welche App zu welcher Plattform gehört, und hilft dabei, andere Apps mit ähnlichen Namen zu vermeiden.

Flashcards gibt es als Web-App sowie für [iOS](https://apps.apple.com/us/app/flashcards-open-source-app/id6760538964) und [Android](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app). Karten, Bearbeitungen und Wiederholungen werden zuerst lokal gespeichert und nach der nächsten Verbindung synchronisiert. Am Computer nutzt du den Web-Client, denn eine native Desktop-App gibt es nicht. KI-Chat sowie Import und Export von Cloud-Paketen setzen eine Internetverbindung und ein Cloud-Konto voraus. Wenn du einen nativen Desktop-Client oder vollständig lokal verfügbare Quelldateien brauchst, wähle Anki oder RemNote.

## Import und Export entscheiden, ob ein Wechsel in der Praxis funktioniert

RemNote bietet einen brauchbaren Weg in ein System, in dem Notizen im Mittelpunkt stehen. Die [Importer](https://help.remnote.com/en/articles/6330674-notes-on-remnote-importers) akzeptieren RemNote-Backups, Anki-Inhalte samt Wiederholungsverlauf, Markdown, Obsidian, Dynalist und Workflowy. Benutzerdefiniertes Anki-CSS wird nicht übernommen. Prüfe ein individuell gestaltetes Deck deshalb nach der Migration.

Zu den [Exportoptionen von RemNote](https://help.remnote.com/en/articles/7898019-exporting-notes) gehören das native Format, OPML, eine Anki-Datei im Format `.apkg` nur für Karten, HTML, Markdown und Text. Dieser reine Kartenexport enthält nicht das gesamte Notizsystem. Noch wichtiger: Im nativen RemNote-Export fehlen derzeit Bilder und PDFs. Wenn dir Quelldokumente als Archiv wichtig sind, bewahre die Originale außerhalb der App auf.

Anki importiert Text, `.apkg`-Decks, `.colpkg`-Sammlungen und Mnemosyne-Daten. Exportiert werden Text, `.apkg` und `.colpkg`. Die Handbücher zu [Import](https://docs.ankiweb.net/importing/intro.html) und [Export](https://docs.ankiweb.net/exporting.html) erklären genau, welche Daten die einzelnen Formate erhalten. Für eine klassische Karteikartensammlung bieten diese etablierten Formate mehr Migrationswege als die beiden anderen Produkte.

Flashcards importiert und exportiert ausschließlich das eigene Inhaltspaket `flashcards.zip`. Laut [Dokumentation zur Datenportabilität](/docs/self-hosting/#data-portability) enthält es aktive Karten, Tags und referenzierte Medien. Nicht enthalten sind Wiederholungsverlauf, FSRS-Status, Workspace-Einstellungen, die vollständige Deck-Struktur, Kontodaten oder ein komplettes Workspace-Backup. Einen direkten Import aus Anki oder RemNote gibt es nicht.

Du kannst einen TXT-, CSV-, Markdown- oder PDF-Export an den KI-Chat von Flashcards anhängen und daraus Karten entwerfen lassen. Das ist Kartenerstellung mit anschließender Prüfung, keine verlustfreie Migration. Bewahre den Quellexport auf, und rechne nicht damit, dass dein Wiederholungsplan erhalten bleibt. Der [Leitfaden zur Migration von Anki-Textdateien](/blog/migrate-from-anki-txt-export-open-source-flashcards/) zeigt den Unterschied in der Praxis.

## Preise geprüft am 2. August 2026

Auf der [Preisseite von RemNote](https://www.remnote.com/pricing) standen bei jährlicher Abrechnung folgende Preise:

- **Free:** 0 US$, einschließlich unbegrenzter Notizen, Karten und Geräte sowie drei annotierter PDFs.
- **Pro:** 8 US$ pro Monat bei jährlicher Abrechnung.
- **Pro+AI:** 18 US$ pro Monat bei jährlicher Abrechnung.

Das sind auf den Monat umgerechnete Preise eines Jahresabos, keine Preise für monatliche Abrechnung. Regionale Preise und Steuern können den Endbetrag verändern.

Die Desktop-Apps von Anki, AnkiWeb und die unabhängige AnkiDroid-App sind kostenlos. Im offiziellen US App Store war [AnkiMobile einmalig für 24,99 US$](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387) erhältlich.

Die gehostete Flashcards-App ist [während der Beta kostenlos](/pricing/). Auch die selbst gehostete Software ist unter der MIT-Lizenz kostenlos. Infrastruktur, Domains, E-Mail, Monitoring, KI-Anbieter, Backups und die Arbeitszeit für den Betrieb kosten trotzdem Geld.

## Open Source, rein lokal und selbst gehostet sind nicht dasselbe

RemNote ist proprietär. In der Desktop-App kannst du [rein lokale Wissensdatenbanken](https://help.remnote.com/en/articles/7867942-multiple-knowledge-bases) anlegen, die nicht in der RemNote-Cloud gespeichert werden. Das ist lokale Speicherung – kein offizieller selbst gehosteter Synchronisierungsdienst und kein vollständiges RemNote-Deployment.

Die Anki-Clients sind Open Source. Außerdem dokumentiert Anki einen offiziellen [selbst gehosteten Sync-Server](https://docs.ankiweb.net/sync-server.html), über den erfahrene Nutzer ihre Anki-Clients ohne AnkiWeb synchronisieren können. Das bleibt ein Sync-Server und ist keine vollständige selbst gehostete Kopie von AnkiWeb.

Flashcards veröffentlicht Anwendung und Infrastruktur unter der MIT-Lizenz. Der [Self-Hosting-Leitfaden](/docs/self-hosting/) beschreibt ein unterstütztes vollständiges Produktiv-Deployment über AWS CDK. Der Stack umfasst mehrere AWS- und externe Dienste. Docker und Postgres sind für die Entwicklung gedacht, nicht als unterstützte Produktivarchitektur.

Flashcards ist hier die einzige Option mit einem unterstützten Deployment des gesamten Stacks – und das bringt echten Betriebsaufwand mit sich. Du brauchst eigene Cloud-Konten, bezahlst die Anbieterkosten, kümmerst dich um Upgrades und Backups und musst eigene Mobile-Clients bauen, wenn du sie mit deinem Deployment verbinden willst. Wähle Self-Hosting für mehr Kontrolle, nicht weil es automatisch günstiger oder einfacher wäre.

## Welche RemNote-Alternative solltest du wählen?

### Bleib bei RemNote für verknüpfte Notizen und die Arbeit mit Quellen

Bleib bei RemNote, wenn du umfangreiche Notizen schreibst, PDFs annotierst, Konzepte verknüpfst und Karten erstellst, ohne sie von der Quelle zu trennen. Mit der FSRS-Beta fällt der frühere reine Scheduler-Grund für einen Wechsel weg. Jetzt braucht es einen besseren Grund: das Kartenmodell, den Preis, die Portabilität oder die Kontrolle über das System.

### Wähle Anki für ausgereifte Karten und mehr Kontrolle

Anki ist die praktische RemNote-Alternative, wenn du keine integrierte Wissensdatenbank brauchst, dafür aber flexible Vorlagen, Add-ons, native Desktop-Clients, ausgereifte FSRS-Einstellungen oder etablierte Import- und Exportformate willst. Für eine große klassische Karteikartensammlung ist es außerdem das naheliegendere Ziel.

Anki selbst ersetzt den RemNote Reader nicht. Plane ein separates Notiz- oder PDF-Tool ein, wenn die Annotation von Quellen weiterhin zu deiner Lernroutine gehört.

### Wähle Flashcards für einfache Karten und einen offenen Stack

Flashcards passt zu einer neuen oder überwiegend einfachen Sammlung mit Vorder- und Rückseiten, wenn dir MIT-Lizenzierung, offline-first Web- und Mobile-Apps, KI-gestützte Entwürfe oder das Deployment des gesamten Stacks wichtiger sind als verknüpfte Notizen und eine verlustarme Migration.

Wenn du eine native Desktop-App, einen PDF-Workflow wie in RemNote, fortgeschrittene Anki-Vorlagen, direkten `.apkg`-Import oder den Erhalt alter Wiederholungsverläufe brauchst, ist Flashcards nicht die richtige Wahl. Das sind aktuelle Produktgrenzen, keine Einrichtungsdetails.

## Fazit: Entscheide nach dem Workflow, den du bereits nutzt

Eine sinnvolle **RemNote-Alternative** löst ein konkretes Problem. RemNote hält Notizen, PDFs und Lernfragen zusammen. Anki bietet ausgereifte Kartenvorlagen, Scheduler-Einstellungen und Portabilität. Flashcards hält das Modell einfach und legt den gesamten Anwendungs-Stack offen.

Ich entwickle Flashcards und würde für ein verknüpftes Notizbuch mit vielen PDFs trotzdem RemNote wählen – oder Anki für eine komplexe, seit Jahren gewachsene Kartensammlung. Flashcards wäre meine Wahl für einen neuen Workspace mit Karten aus Vorder- und Rückseite, wenn offene Infrastruktur und offline-first Synchronisierung auf Mobilgeräten Vorrang haben.

Wenn dieser dritte Fall zu deiner Entscheidung bei **RemNote vs Flashcards** passt, [öffne die gehostete App](https://app.flashcards-open-source-app.com/) oder lies den [Leitfaden für die ersten Schritte](/docs/getting-started/). Andernfalls bleib bei dem System, mit dem dir die Wiederholung morgen am leichtesten fällt.
