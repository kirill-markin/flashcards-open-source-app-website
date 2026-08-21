---
title: "Ist RemNote 2026 Open Source? Quellcode, lokale Daten und Self-Hosting"
description: "Die RemNote-Kernanwendung ist derzeit nicht Open Source. Erfahre, was der öffentliche GitHub-Code enthält, welche Kontrolle lokale Wissensdatenbanken und Exporte bieten und was sich nicht selbst hosten lässt."
date: "2026-08-21"
image: "/blog/is-remnote-open-source.png"
keywords:
  - "RemNote Open Source"
  - "ist RemNote Open Source"
  - "RemNote GitHub"
  - "RemNote selbst hosten"
  - "lokale RemNote-Wissensdatenbank"
  - "RemNote Export"
  - "Open-Source-Alternative zu RemNote"
---

Ist RemNote Open Source? **Nein – jedenfalls nicht die Kernanwendung.** Stand 21. August 2026 stellt RemNote weder den Quellcode seines zentralen Clients noch den seines Servers als Open-Source-Projekt unter einer entsprechenden Lizenz bereit.

RemNote veröffentlicht zwar Code auf GitHub und gibt dir durch rein lokale Wissensdatenbanken, Offline-Apps, Backups, Exporte, Plugins und einen lokalen MCP-Server durchaus Kontrolle. Doch nichts davon liefert dir eine Version des vollständigen Produkts, die du selbst kompilieren kannst. Auch das Versprechen, den gesamten Code zu veröffentlichen, falls RemNote den Betrieb einstellt, gilt nur unter dieser Bedingung: Heute verleiht es dir weder Rechte am Quellcode noch das Recht, RemNote selbst zu hosten.

**Fakten geprüft:** 21. August 2026.

![Ein Fotograf arbeitet in einer Dunkelkammer mit einer geschlossenen Vintage-Kamera neben Wechselobjektiven, Negativen, Archivumschlägen und einem Kabelauslöser](/blog/is-remnote-open-source.png)

## Zuerst sieben Arten von Kontrolle unterscheiden

Die Frage, ob **RemNote Open Source** ist, wird schnell unübersichtlich. Mehrere nützliche Produkteigenschaften können auf den ersten Blick wie dieselbe Art von Kontrolle wirken:

- **Kostenlos** beschreibt den Preis. RemNote bietet einen [kostenlosen Tarif](https://www.remnote.com/pricing), doch kostenlos nutzbare Software kann trotzdem proprietär sein.
- **Offline** beschreibt, ob die App auch ohne Netzwerkverbindung weiter funktioniert.
- **Lokal** beschreibt, wo eine bestimmte Wissensdatenbank oder Datei gespeichert ist.
- **Exportierbar** bedeutet, dass du einige oder alle deine Daten in dokumentierten Formaten herausnehmen kannst.
- **Durch Plugins erweiterbar** bedeutet, dass Entwickler über eine API zusätzliche Funktionen einbinden können.
- **Open Source** bedeutet, dass der relevante Quellcode unter einer Lizenz veröffentlicht ist, die dir das Recht gibt, ihn zu nutzen, zu untersuchen, zu verändern und weiterzugeben.
- **Selbst hostbar** bedeutet, dass es ein lauffähiges Deployment gibt, das du auf einer von dir kontrollierten Infrastruktur betreiben kannst.

Die ersten fünf bietet RemNote durchaus. Auf das Kernprodukt treffen die letzten beiden derzeit nicht zu.

## Was du bei RemNote kontrollierst – und wo die Grenze liegt

| Bereich | Was du heute kontrollierst | Wo deine Kontrolle endet |
| --- | --- | --- |
| **Kernanwendung** | Du kannst die offiziellen Web-, Desktop- und Mobile-Apps nutzen. | Der Quellcode des offiziellen Clients und Servers ist derzeit nicht als Open-Source-Projekt veröffentlicht. |
| **Öffentlicher GitHub-Code** | Du kannst öffentliche Plugins, Vorlagen, Themes, Übersetzungen, Support-Code und Forks einsehen. Einige Repositories stehen unter Open-Source-Lizenzen. | Sie enthalten weder den zentralen RemNote-Client noch den gehosteten Dienst oder ein vollständiges Deployment. Öffentlich einsehbarer Code ohne bestätigte Lizenz ist nicht automatisch Open Source. |
| **Lokale Wissensdatenbank** | Auf dem Desktop bleibt die Wissensdatenbank auf deinem Computer und wird nicht über RemNotes Server übertragen. | Sie lässt sich nur mit der proprietären Desktop-App verwenden, wird nicht mit anderen Geräten synchronisiert, und optionale Integrationen können eigene Datenflüsse mitbringen. |
| **Offline-Nutzung** | Nach Installation und Anmeldung kannst du in den Desktop- und Mobile-Apps offline Notizen bearbeiten und Karten wiederholen; auf dem Desktop liegt eine vollständige lokale Kopie der Medien. | Der Offline-Modus gibt dir keinen Quellcode. Die Web-App lässt sich offline weder neu öffnen noch neu laden, nicht zwischengespeicherte Medien können auf Mobilgeräten und im Web fehlen, und die meisten KI-Funktionen sowie Plugins sind offline eingeschränkt. |
| **Lokale Dateien und Backups** | Die Desktop-App speichert ihre Arbeitsdatenbank, hochgeladene Dateien und lokale Backups auf dem Datenträger. | Mit diesen Wiederherstellungsdateien erhältst du weder eine selbst gehostete RemNote-Anwendung noch einen eigenen Sync-Server. |
| **Exporte** | Du kannst Daten im nativen RemNote-Format, OPML, reine Anki-Kartenpakete, HTML, Markdown und Text exportieren. | Kein einzelner Export bildet das Produkt nach. Selbst im vollständigen Export fehlen derzeit Bilder und PDFs. |
| **Lokaler MCP-Server** | Ein KI-Agent auf dem Desktop kann die aktuelle Wissensdatenbank lesen oder – wenn du diesen Modus freigibst – lesen und schreiben. | RemNote muss geöffnet bleiben. Der Connector legt weder den Quellcode der App offen noch stellt er ein Server-Deployment, Bildinhalte oder die Wiederholungswarteschlange bereit. |
| **Gehostete Synchronisierung** | Synchronisierte Wissensdatenbanken funktionieren geräteübergreifend und erhalten Cloud-Backups. | RemNote betreibt den Dienst. Einen dokumentierten offiziellen Sync-Server zum Selbsthosten gibt es nicht. |
| **Versprechen für den Fall, dass RemNote den Betrieb einstellt** | RemNote sagt zu, den gesamten Code zu veröffentlichen, falls das Unternehmen den Betrieb einstellt. | Dieser Fall ist nicht eingetreten. Das Versprechen ist daher weder eine heutige Open-Source-Veröffentlichung noch eine heute geltende Lizenz. |

Diese Übersicht sagt mehr aus als ein simples Ja-oder-Nein-Etikett. Wer sensible Notizen schützen möchte, interessiert sich vielleicht vor allem für lokale Speicherung. Ein Entwickler, der das Verhalten der Anwendung prüfen will, braucht den Quellcode. Wer selbst hosten möchte, braucht einen bereitstellbaren Dienst, Dokumentation und einen Weg für Upgrades. Wenn eine dieser Anforderungen erfüllt ist, sind es die anderen nicht automatisch auch.

## Was die GitHub-Organisation von RemNote tatsächlich enthält

Die [offizielle GitHub-Organisation von RemNote](https://github.com/remnoteio) führt derzeit 17 öffentliche Repositories auf. Dazu gehören Plugin-Vorlagen, Themes und Snippets, ein Übersetzungsarchiv, Plugins, Updater- oder Support-Code sowie Forks verwendeter Hilfsbibliotheken. Das [Repository der offiziellen Plugins](https://github.com/remnoteio/remnote-official-plugins) enthält beispielsweise dokumentierte Beispiele auf Basis des Plugin-SDK von RemNote.

Dieser Code ist nützlich. Er gibt Plugin-Autoren Beispiele, macht einen Teil der Erweiterungsschnittstelle sichtbar und ermöglicht der Community, Werkzeuge rund um RemNote zu verbessern.

Die Kernanwendung legt er jedoch nicht offen. Ich habe dort kein offizielles öffentliches Repository gefunden, mit dem sich der vollständige Desktop-Client kompilieren, die gehostete Web-App nachbilden, der Sync-Dienst von RemNote bereitstellen oder der vollständige serverseitige Datenfluss nachvollziehen lässt.

Auch die Lizenzen sind nicht einheitlich. GitHub erkennt bei mehreren Projekten MIT-Lizenzen, darunter die React-Plugin-Vorlage und das Gamepad-Plugin. Für `remnote-official-plugins`, das archivierte Übersetzungs-Repository und einige weitere öffentliche Repositories meldet GitHub derzeit keine erkannte Lizenz. Das beweist nicht, dass diese Projekte unter keinen Bedingungen genutzt werden dürfen. Du solltest aber nicht jedes öffentliche RemNote-Repository pauschal als Open Source bezeichnen. Prüfe das konkrete Repository und seine Lizenz, bevor du Code daraus übernimmst.

Diese Schlussfolgerung stützt sich auf die derzeitigen offiziellen öffentlichen Repositories und die Dokumentation von RemNote. Sie trifft keine Aussage über den privaten Code oder die internen Systeme des Unternehmens.

## Das Versprechen greift erst, wenn RemNote den Betrieb einstellt

Im April 2023 veröffentlichte RemNote eine dreiteilige Zusage zur langfristigen Verfügbarkeit. In der [Klausel zum garantierten Zugriff](https://help.remnote.com/en/articles/6085006-can-i-trust-you-ll-be-around-for-the-long-haul) heißt es, das Unternehmen werde den gesamten Code als Open-Source-Projekt veröffentlichen, falls RemNote jemals den Betrieb einstellt. Nutzer könnten dann die Desktop-App weiter ausführen oder RemNote unabhängig hosten.

Entscheidend ist der Zeitpunkt. Die Aussage beschreibt eine Abfolge in der Zukunft:

1. RemNote muss den Betrieb einstellen.
2. Danach würde das Unternehmen den Code veröffentlichen.
3. Die Community könnte auf dieser künftigen Veröffentlichung aufbauen.

Solange diese Bedingung nicht eintritt und der Code nicht mit einer konkreten Lizenz veröffentlicht wird, verschafft dir das Versprechen keinen Zugang zum Quellcode. Du kannst damit weder die heutige Kernimplementierung prüfen noch einen aktuellen Fork pflegen oder einen offiziell veröffentlichten RemNote-Server bereitstellen.

Das Versprechen kann dennoch das Risiko mindern, langfristig den Zugriff zu verlieren. Trotzdem macht es RemNote nicht zu Open Source. Hier geht es um eine praktische Einordnung des veröffentlichten Quellcodes und der Produktgrenzen, nicht um Rechtsberatung.

## Eine lokale Wissensdatenbank hält Daten tatsächlich aus RemNotes Cloud heraus

Eine [lokale Wissensdatenbank in RemNote](https://help.remnote.com/en/articles/7867942-multiple-knowledge-bases) gibt es nur auf dem Desktop; sie bleibt auf der Festplatte deines Computers. Laut RemNote wird sie weder mit einem anderen Gerät synchronisiert noch über die Server des Unternehmens übertragen. Für Inhalte, die nicht in die RemNote-Cloud gelangen dürfen, ist das echte Kontrolle.

Der praktische Nachteil: Über die RemNote-Synchronisierung ist dieselbe Wissensdatenbank weder auf deinem Smartphone oder Tablet noch auf einem anderen Computer verfügbar. Für Backups außerhalb des Geräts bist du ebenfalls selbst verantwortlich. Du behältst deine Daten lokal in der Hand, bekommst dadurch aber keine private RemNote-Cloud.

Der Unterschied lässt sich einfach zusammenfassen:

> Die Daten einer lokalen RemNote-Wissensdatenbank können vollständig von RemNotes Servern fernbleiben, obwohl du zum Öffnen und Bearbeiten weiterhin die proprietäre RemNote-Software brauchst.

Für synchronisierte Wissensdatenbanken beschreibt die [Datenschutzdokumentation](https://help.remnote.com/en/articles/7974260-privacy-of-your-notes) andere Bedingungen. Laut RemNote werden die Daten im Ruhezustand verschlüsselt und bei der Übertragung durch TLS geschützt. Eine Ende-zu-Ende-Verschlüsselung bietet das Unternehmen derzeit jedoch nicht an. Mitarbeiter greifen nur in ausdrücklich genannten Fällen auf Notizinhalte zu, etwa vorübergehend im Rahmen des Supports oder wenn du dem Support selbst eine Kopie schickst.

Lokale Speicherung bedeutet nicht automatisch, dass keine Funktion Daten an andere Stellen senden kann. Die KI-Funktionen, Plugins und Integrationen zur Dateikonvertierung von RemNote können eigene Datenflüsse mitbringen. Prüfe ihre Einstellungen und Berechtigungen deshalb auch dann, wenn die zugrunde liegende Wissensdatenbank lokal gespeichert ist.

Datenschutz und verfügbarer Quellcode sind zwei getrennte Fragen. Proprietäre Software kann eine lokale Datei vom Server des Anbieters fernhalten. Umgekehrt kann Open-Source-Software Daten an einen gehosteten Dienst senden, wenn sie entsprechend konfiguriert ist.

## Offline-Nutzung hält dich arbeitsfähig, ersetzt aber kein Self-Hosting

Der [Offline-Modus von RemNote](https://help.remnote.com/en/articles/6752029-offline-mode) bietet mehr als ein Browser-Tab, der ohne WLAN einfach ausfällt. Sobald die Apps heruntergeladen sind und du dich angemeldet hast, kannst du in den Desktop- und Mobile-Apps ohne zeitliche Begrenzung offline Notizen bearbeiten und Karteikarten wiederholen. Änderungen an einer synchronisierten Wissensdatenbank werden hochgeladen, sobald die Verbindung zurückkehrt.

Die Desktop-App bietet offline den größten Funktionsumfang, weil sie eine vollständige lokale Kopie von Bildern und PDFs speichert. Die Mobil- und Web-Apps arbeiten mit begrenzten Caches, daher können ältere Medien fehlen. War die Web-App bereits geöffnet, kann sie weiter funktionieren. Ist der Tab geschlossen oder neu geladen, lässt sie sich offline jedoch nicht starten. Die meisten KI-Funktionen und Plugins sind ohne Verbindung nicht verfügbar.

Damit eignet sich die Desktop-App für Reisen, instabiles Internet und den lokalen Zugriff auf eine vollständige Medienbibliothek. Einen RemNote-Server auf deinem Rechner erzeugt sie nicht. Sobald eine synchronisierte Wissensdatenbank wieder online ist, läuft ihre Synchronisierung weiterhin über den gehosteten Dienst von RemNote.

Wenn du eigentlich wissen möchtest, ob der notizbasierte Workflow und die PDF-Funktionen von RemNote diese Grenze rechtfertigen, behandelt der [Vergleich der RemNote-Alternativen](/de/blog/remnote-alternative/) die Produktunterschiede, statt sie hier zu wiederholen.

## Backups und Exporte lösen zwei verschiedene Probleme

In der [Desktop-App](https://help.remnote.com/en/articles/6030835-desktop-app) kannst du den lokalen Speicherort jeder Wissensdatenbank einsehen. Laut der [Backup-Dokumentation von RemNote](https://help.remnote.com/en/articles/6301627-remnote-backups) enthält dieser Ordner die Arbeitsdatenbank, datierte lokale Backups und hochgeladene Dateien wie Bilder, PDFs und Audiodateien. Sowohl synchronisierte als auch lokale Wissensdatenbanken erzeugen lokale Desktop-Backups. Für synchronisierte Wissensdatenbanken legt RemNote bei Änderungen zusätzlich tägliche Cloud-Backups an.

Diese Kopien dienen vor allem der Wiederherstellung. Wenn dir die Wissensdatenbank wichtig ist, bewahre ein weiteres Backup auf einem anderen Datenträger auf. Die lokale Datenbank und ihre lokalen Backups können zusammen mit dem Laufwerk ausfallen.

Ein [RemNote-Export](https://help.remnote.com/en/articles/7898019-exporting-notes) ist dagegen für die Portabilität gedacht:

- **RemNote (Complete)** erhält die native Struktur für einen erneuten Import in RemNote, lässt derzeit jedoch Bilder und PDFs aus.
- **OPML** überträgt eine Gliederung in Programme, die dieses Format verstehen.
- **Anki (.apkg)** exportiert nur Karteikarten; Aufzählungspunkte ohne Karten bleiben außen vor.
- **HTML, Markdown und Text** machen Notizinhalte in mehr Programmen lesbar, wobei nach und nach Struktur und Formatierung verloren gehen.

Bevor du dich bei einem Ausstieg auf einen RemNote-Export verlässt, teste ihn mit einem kleinen, aber anspruchsvollen Dokument: verschachtelte Aufzählungspunkte, Verweise, Karteikarten, Bilder und ein PDF. Öffne das Ergebnis im vorgesehenen Zielsystem und prüfe, was erhalten geblieben ist. Dass sich eine Datei herunterladen lässt, belegt nur die Exportfunktion. Es belegt nicht, dass du deinen vollständigen Workflow anderswo fortsetzen kannst.

## Der lokale MCP-Server öffnet nur eine begrenzte Schnittstelle

Über den [integrierten MCP-Server von RemNote](https://help.remnote.com/en/articles/16424066-connecting-ai-agents-to-remnote-with-mcp) kann ein KI-Client auf dem Desktop mit der aktuell in RemNote geöffneten Wissensdatenbank arbeiten. Du kannst reinen Lesezugriff oder Lese- und Schreibzugriff erlauben. Die Anfragen erreichen einen lokalen Endpunkt, statt über RemNotes Server zu laufen.

Dabei gelten bewusst gesetzte Einschränkungen. RemNote muss geöffnet bleiben, der Agent sieht nur die jeweils aktuelle Wissensdatenbank, und der Connector funktioniert weder über die Web- noch über die Mobile-App von RemNote. Er kann weder auf die Karteikarten-Warteschlange zugreifen noch Bildinhalte lesen. Der Einrichtungs-Prompt enthält ein Zugriffstoken, das du wie andere Zugangsdaten schützen solltest. Für die Daten, die ein Agent liest, gilt außerdem die Datenschutzrichtlinie des jeweiligen KI-Clients.

Das ermöglicht nützliche lokale Automatisierungen. Es belegt aber weder, dass die RemNote-App Open Source ist, noch kann ein Agent RemNote damit ohne die proprietäre Desktop-Anwendung ausführen. Eine API oder ein Connector gibt Zugriff auf ausgewählte Funktionen; Zugriff auf den Quellcode legt die Implementierung offen. Beides erfüllt unterschiedliche Aufgaben.

## Kann RemNote selbst gehostet werden?

In der aktuellen offiziellen Dokumentation findet sich kein unterstütztes Produkt, mit dem du **RemNote selbst hosten** kannst. RemNote dokumentiert weder ein vollständiges selbst gehostetes Deployment noch einen offiziellen Sync-Server zum Selbsthosten. Dokumentiert sind nur diese Nutzungsmodelle:

- eine rein lokale Desktop-Wissensdatenbank ohne geräteübergreifende Synchronisierung;
- eine synchronisierte Wissensdatenbank über den gehosteten Dienst von RemNote;
- der lokale MCP-Endpunkt der Desktop-App für einen KI-Client.

Keines davon ist ein selbst gehosteter RemNote-Dienst. Bei der lokalen Wissensdatenbank entfällt die Synchronisierung, MCP setzt die laufende Desktop-App voraus, und Offline-Änderungen werden wieder über den gehosteten Dienst synchronisiert, sobald die entsprechende Wissensdatenbank online ist.

Diese Aussage beschreibt die Dokumentation und die öffentlich erkennbaren Produktgrenzen, nicht jeden Dienst, den RemNote intern betreibt. Eine unterstützte selbst gehostete Version bräuchte offizielle Deployment-Anweisungen, Server-Code oder Pakete, Lizenzbedingungen, einen Upgrade-Pfad und eine klare Liste kompatibler Clients. In der offiziellen Dokumentation und der GitHub-Organisation von RemNote habe ich kein solches aktuelles Angebot gefunden.

## Welche Art von Kontrolle brauchst du wirklich?

RemNote kann trotzdem die richtige Wahl sein, wenn verknüpfte Notizen, Backlinks, das Lesen von PDFs, eine native Desktop-App und ein ausgereifter Lern-Workflow wichtiger sind als der Quellcode der Kernanwendung. Für eine einzelne Desktop-Wissensdatenbank, die nicht auf RemNotes Server gelangen darf, ist der rein lokale Modus eine konkrete Option. Für das übliche Lernen auf mehreren Geräten können die gehostete Synchronisierung und die Offline-Apps der einfachere Kompromiss sein.

Suche nach einem anderen Produkt, wenn eine dieser Anforderungen für dich unverzichtbar ist:

- den vollständigen Quellcode von Client und Server schon heute einsehen oder verändern;
- mehrere Geräte über eine von dir betriebene Infrastruktur synchronisieren;
- einen Fork pflegen, falls der Anbieter seine Richtung ändert;
- das Verhalten der Anwendung über die dokumentierten Schnittstellen hinaus prüfen;
- eine Ende-zu-Ende-Verschlüsselung für eine synchronisierte Wissensdatenbank nutzen.

Wenn du eine **Open-Source-Alternative zu RemNote** brauchst, entscheide zuerst, was unverzichtbar ist: der Arbeitsbereich für Notizen und PDFs oder das Karteikartensystem. [Ankis Open-Source-Modell](/de/blog/is-anki-open-source/) umfasst offene Desktop- und Android-Clients sowie einen selbst hostbaren Sync-Server, aber nicht alle Produktteile von Anki sind offen. Der [Leitfaden zu Open-Source-Karteikarten-Apps](/de/blog/best-open-source-flashcard-apps-2026/) vergleicht die Lizenz- und Hosting-Grenzen mehrerer weiterer Produkte. Keine dieser Optionen ersetzt automatisch die verknüpfte Wissensdatenbank von RemNote.

## Offenlegung: Ich entwickle Flashcards

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](https://flashcards-open-source-app.com/). Das MIT-lizenzierte Repository enthält die Web-App, iOS- und Android-Clients, Authentifizierung, Backend, Synchronisierung, MCP-Dienst und AWS-Infrastruktur. Bei Flashcards sind damit heute mehr Produktteile im Quellcode einsehbar als bei RemNote. Das macht Flashcards aber nicht für jeden Lern-Workflow zum besseren Produkt.

Flashcards deckt einen schmaleren Lern-Workflow ab. Es bietet keine verknüpfte Wissensdatenbank für Notizen, keinen PDF-Reader, keine native Desktop-App und keinen direkten RemNote-Importer. RemNote ist ausgereifter und deutlich stärker, wenn Notizen, Verweise und Quelldokumente im Mittelpunkt des Lernens stehen. Ein Wechsel allein wegen der Lizenz kann bedeuten, dass genau der Workflow verloren geht, der die Sammlung überhaupt nützlich gemacht hat.

Für Flashcards gibt es einen dokumentierten [Self-Hosting-Weg für den gesamten Stack auf AWS](/de/docs/self-hosting/), aber keine lokale Appliance, die sich mit einem einzigen Befehl bereitstellen lässt. Wer sie betreibt, ist selbst für AWS, Cloudflare, Authentifizierung, E-Mail-Versand, Monitoring, Upgrades, Datenbankwiederherstellung und separate Builds der nativen Apps verantwortlich. Der [Remote-MCP-Connector](/de/docs/mcp-connector/) kann auf Karten und Decks zugreifen, ohne dass eine Desktop-App geöffnet bleiben muss. Der lokale Connector von RemNote erreicht die aktuelle Wissensdatenbank, aber nicht die Wiederholungswarteschlange. Das sind unterschiedlich zugeschnittene Produkte, keine einfache Rangliste von besser bis schlechter.

Wenn Datenschutz wichtiger ist als der Markenname, bietet der Leitfaden zu [privaten Karteikarten mit KI](/de/blog/private-flashcards-with-ai/) eine Checkliste, mit der du lokale Speicherung, Synchronisierung, den Zugriff von KI-Anbietern und Self-Hosting innerhalb eines Lern-Workflows getrennt betrachten kannst.

## Die ehrliche Antwort

Ist RemNote 2026 Open Source? **Nein – jedenfalls nicht die Kernanwendung.** Die offiziellen öffentlichen Repositories enthalten nützlichen Code für Plugins, Vorlagen und unterstützende Werkzeuge. Lokale Wissensdatenbanken, Offline-Nutzung, lokale Backups, Exporte und MCP geben dir trotzdem spürbare Kontrolle über Daten und Arbeitsabläufe.

Diese Funktionen verschaffen dir heute keinen Zugriff auf den vollständigen Quellcode der Anwendung. RemNote dokumentiert außerdem weder ein unterstütztes selbst gehostetes Produkt noch einen Sync-Server zum Selbsthosten. Das Versprechen, den gesamten Code zu veröffentlichen, falls RemNote künftig den Betrieb einstellt, soll den Zugang für diesen Fall sichern – es ist keine heute geltende Lizenz.

Wähle RemNote, wenn dir die verknüpften Notizen, PDFs, Desktop-App und der Reifegrad wichtig genug sind, um mit einem proprietären Kernprodukt zu leben. Wähle eine Open-Source-Alternative, wenn du den Code schon heute prüfen, verändern und weitergeben oder den vollständigen Dienst selbst betreiben musst und bei dieser Anforderung keine Kompromisse eingehen kannst.
