---
title: "Ist Anki 2026 Open Source? Desktop, AnkiMobile, AnkiDroid und AnkiWeb"
description: "Anki Desktop und AnkiDroid sind Open Source; AnkiMobile und AnkiWeb sind es nicht. Vergleiche Lizenzen, Preis, Offline-Nutzung und den selbst gehosteten Sync-Server."
date: "2026-08-20"
image: "/blog/is-anki-open-source.png"
keywords:
  - "ist Anki Open Source"
  - "Anki Open Source"
  - "Anki Lizenz"
  - "ist AnkiMobile Open Source"
  - "ist AnkiDroid Open Source"
  - "ist AnkiWeb Open Source"
  - "Anki selbst hosten"
  - "Anki Sync-Server"
---

Ist Anki Open Source? **Anki Desktop und AnkiDroid sind es. Die vollständige AnkiMobile-App und der gehostete Dienst AnkiWeb sind es nicht.** Zum öffentlichen Anki-Code gehört auch ein offizieller Sync-Server zum Selbsthosten. Er ersetzt jedoch nur die Synchronisierung und ist keine Version von AnkiWeb, die du selbst bereitstellen kannst.

Diese gemischte Antwort wird leicht übersehen. Dass Anki auf GitHub zu finden ist, sagt etwas über die Desktop-App und den Sync-Server aus. Es bedeutet nicht, dass jedes Produkt mit Anki im Namen Open Source ist.

**Fakten geprüft:** 20. August 2026.

![Ein Bootsbauer prüft die freiliegenden Spanten eines Holzboots neben einem gemeinschaftlich gebauten Ruderboot, einem geschlossenen Motorboot und einem kleinen privaten Übergabesteg](/blog/is-anki-open-source.png)

## Die praktische Antwort für jeden Anki-Bereich

Open Source, kostenlos, offline nutzbar und selbst hostbar sind vier verschiedene Eigenschaften. Eine App kann kostenpflichtig sein und trotzdem offline funktionieren. Umgekehrt kann ein Dienst kostenlos nutzbar sein, obwohl sein Quellcode nicht öffentlich ist. So sieht Anki 2026 aus:

| Produktbereich | Quellcode und Lizenz | Preis | Offline-Nutzung | Was du selbst hosten oder kontrollieren kannst |
| --- | --- | --- | --- | --- |
| **Anki Desktop** für Windows, macOS und Linux | **Open Source.** Die Hauptcodebasis steht unter AGPL-3.0-or-later; daneben nennt die Lizenz Ausnahmen und mitgelieferte Komponenten unter anderen Lizenzen. | **Kostenlos.** | **Ja.** Sammlung, Lernplanungsdaten und heruntergeladene Medien liegen lokal. | Den Client selbst kompilieren oder verändern. Im selben Repository befindet sich auch der offizielle Sync-Server. |
| **AnkiMobile** für iPhone und iPad | **Quellcode nicht öffentlich.** Die vollständige offizielle iOS-App ist nicht Open Source. | **Kostenpflichtig.** Der offiziell genannte Preis in den USA beträgt einmalig 25 US-Dollar; lokale App-Store-Preise und Steuern können abweichen. | **Ja.** Du kannst Karten wiederholen, sobald die Sammlung und die benötigten Medien auf dem Gerät liegen. | Die offizielle App lässt sich nicht aus veröffentlichtem Quellcode neu erstellen. Sie kann sich aber mit dem offiziellen selbst gehosteten Sync-Server verbinden. |
| **AnkiDroid** für Android | **Open Source.** Das Repository nennt GPL-3.0 für das Hauptprojekt, AGPL-3.0 für Teile des Backend-Codes und LGPL-3.0 für die API. | **Kostenlos.** | **Ja.** AnkiDroid speichert die Sammlung lokal auf dem Android-Gerät. | Den Code einsehen, AnkiDroid forken und zum Projekt beitragen; außerdem kannst du die App mit einem kompatiblen selbst gehosteten Sync-Server verbinden. |
| **AnkiWeb** | **Quellcode nicht öffentlich.** Ankis Maintainer hat ausdrücklich erklärt, dass AnkiWeb nicht Open Source ist. | **Kostenlos.** | **Nein.** AnkiWeb ist ein gehosteter Dienst für den Browser. | Es gibt kein offizielles Paket, mit dem du den vollständigen AnkiWeb-Dienst selbst bereitstellen kannst. |
| **Offizieller Anki-Sync-Server** | **Open Source.** Der Code liegt im Anki-Repository und fällt unter dessen Lizenzbedingungen. | **Keine Softwarekosten.** Rechner, Speicher und Netzwerk stellst und bezahlst du selbst. | Kein Lern-Client. | Die Synchronisierung von Sammlungen und Medien für kompatible Clients hosten. Eine AnkiWeb-Oberfläche für den Browser gehört nicht dazu. |

Die [offizielle Anki-Website](https://apps.ankiweb.net/) grenzt diese Produkte klar voneinander ab: AnkiMobile ist die offizielle iOS-App, und ihre Verkäufe finanzieren die Anki-Entwicklung. AnkiDroid ist hingegen kostenlos und wird von Mitwirkenden entwickelt. Gemeinsame Dateiformate und kompatible Synchronisierung machen daraus noch keine gemeinsame Codebasis.

## Was die Anki-Lizenz erlaubt

Im [Repository ankitects/anki](https://github.com/ankitects/anki) ist der Quellcode der Desktop-Version öffentlich. Die [Lizenzdatei](https://github.com/ankitects/anki/blob/main/LICENSE) stellt den Hauptcode unter die GNU Affero General Public License, Version 3 oder neuer. Sie führt außerdem BSD-lizenzierte Beiträge und enthaltene Komponenten unter weiteren Lizenzen auf.

Du darfst den von der Lizenz erfassten Code lesen, kompilieren, verändern und einen eigenen Fork pflegen. Anders als eine freizügige Lizenz wie MIT ist die AGPL eine strenge Copyleft-Lizenz. Diese Freiheiten sind deshalb an Bedingungen geknüpft.

Vereinfacht gesagt kann die Weitergabe einer veränderten, von der Lizenz erfassten Version dazu verpflichten, auch den entsprechenden Quellcode bereitzustellen. Hinzu kommt die Netzwerkklausel der AGPL: Wenn Nutzer über ein Netzwerk mit deinem veränderten, von der Lizenz erfassten Programm interagieren, musst du ihnen den zugehörigen Quellcode anbieten. Die [AGPL-Erklärung der Free Software Foundation](https://www.gnu.org/licenses/why-affero-gpl.html) fasst das verständlich zusammen. Die unveränderte Desktop-App zu verwenden oder nur für dich selbst eine lokale Änderung vorzunehmen, ist etwas anderes, als einen Fork zu verbreiten oder einen veränderten Dienst für andere zu betreiben.

Das ist eine praktische Einordnung und keine Rechtsberatung. Wenn du Anki-Code mit proprietärer Software kombinieren, einen veränderten Build verbreiten oder einen veränderten Netzwerkdienst anbieten möchtest, lies die vollständige Lizenz einschließlich der genannten Ausnahmen und hole passenden Rechtsrat ein.

## Der schrittweise Verantwortungswechsel 2026 ändert nichts an der Open-Source-Zusage

Im Februar 2026 [kündigte Damien Elmes an](https://forums.ankiweb.net/t/ankis-growing-up/68610), Ankis Geschäftsbetrieb und die Betreuung des Open-Source-Projekts schrittweise an das AnkiHub-Team zu übergeben. Er sprach davon, einen Schritt zurückzutreten, nicht das Projekt zu verlassen, und wollte weiter beteiligt bleiben. Auch Governance, Entscheidungsprozesse und Zeitplan des Übergangs waren laut der Ankündigung noch in Arbeit.

Konkreter waren die öffentlichen Zusagen zu den Produkten. In einer [späteren Klarstellung](https://forums.ankiweb.net/t/ankis-growing-up/68610/110) schrieb Elmes, dass die Desktop-Version und künftige Veröffentlichungen kostenlos und Open Source bleiben würden. Auch die reguläre Synchronisierung werde kostenlos bleiben und AnkiMobile weiterhin einmalig 25 US-Dollar kosten.

Die genaue Beschreibung für 2026 lautet daher: Die Verantwortung geht schrittweise über, zugleich besteht die ausdrückliche Zusage, Anki Desktop als Open Source weiterzuführen. Es handelt sich nicht um eine bereits abgeschlossene Übergabe, bei der alle Fragen zur Governance geklärt sind.

## AnkiMobile ist offiziell, kostenpflichtig, offline nutzbar und nicht Open Source

AnkiMobile ist der offizielle Client für iPhone und iPad. Sein vollständiger Quellcode ist nicht öffentlich; Elmes hat [direkt erklärt, warum AnkiMobile nicht Open Source ist](https://forums.ankiweb.net/t/hide-unhide-decks-poll/44281/20).

Der Preis ist Teil des Finanzierungsmodells für das gesamte Projekt. Laut der [offiziellen Preis-FAQ](https://faqs.ankiweb.net/why-does-ankimobile-cost-more-than-a-typical-mobile-app.html) finanzieren die Verkäufe von AnkiMobile die Arbeit an der kostenlosen Desktop-Version und am Online-Synchronisierungsdienst mit. Die Aussage „Anki ist kostenlos“ braucht daher immer eine Plattform: Anki Desktop, AnkiDroid und AnkiWeb sind kostenlos nutzbar, die offizielle iOS-App ist kostenpflichtig.

Dass der Quellcode nicht öffentlich ist, bedeutet nicht, dass die App nur online funktioniert. AnkiMobile speichert die Sammlung lokal und funktioniert offline, sobald die benötigten Karten und Medien auf dem Gerät liegen. Außerdem lässt sich eine eigene URL für den Sync-Server eintragen. Das sind voneinander unabhängige Eigenschaften. Der ausführliche [Leitfaden zur Offline-Nutzung von Anki](/de/blog/does-anki-work-offline/) erklärt, wie du Medien vorbereitest und später synchronisierst.

Was nicht möglich ist: den vollständigen offiziellen iOS-Client prüfen und neu erstellen, ein iOS-spezifisches Problem in einem öffentlichen Repository dieser App beheben oder auf Grundlage veröffentlichten Quellcodes einen eigenen AnkiMobile-Fork vertreiben.

## AnkiDroid ist Open Source und wird eigenständig verwaltet

AnkiDroid ist nicht einfach AnkiMobile für Android. Es ist ein eigenständiges Android-Projekt, das mit Anki-Sammlungen und der Anki-Synchronisierung kompatibel ist. Laut der offiziellen Anki-Website wird es von Mitwirkenden entwickelt. Das AnkiDroid-Projekt selbst bezeichnet die App als halboffiziellen Port, und in der Ankündigung zum Übergang 2026 steht, dass das Projekt weiterhin eigenständig verwaltet wird.

Das [AnkiDroid-Repository](https://github.com/ankidroid/Anki-Android) ist öffentlich und nimmt Beiträge zu Code und Übersetzungen an. Seine README führt die Lizenzen nach Komponenten auf: GPL-3.0 für das Hauptprojekt, AGPL-3.0 für Teile des Backend-Codes und LGPL-3.0 für die AnkiDroid-API.

Für Entwickler folgt daraus: Änderungen für Android gehören ins AnkiDroid-Projekt. Sie landen nicht im Quellcode von AnkiMobile, und nicht jede Android-Komponente verwendet dieselbe Lizenz wie die Desktop-App.

## AnkiWeb ist kostenlos, aber nicht Open Source

AnkiWeb bietet gehostete Konten, die Synchronisierung von Sammlungen und Medien sowie das Lernen im Browser. Zum weiteren gehosteten Angebot von Anki gehören auch Verzeichnisse für freigegebene Stapel und Add-ons. Diese öffentlichen Dienste werden schnell unter dem Namen „AnkiWeb“ zusammengefasst. Der offizielle Sync-Server bildet jedoch keinen davon vollständig nach.

Beim Quellcode ist die Grenze eindeutig. In einer direkten Antwort zum Browser-Client erklärte Ankis Maintainer: [AnkiWeb ist nicht Open Source](https://forums.ankiweb.net/t/questions-about-https-ankiweb-net-decks-and-https-ankiuser-net-study/33292/2). Für den vollständigen Dienst gibt es kein offizielles Paket zur eigenen Bereitstellung.

AnkiWeb ist außerdem keine Offline-Web-App. Wenn du ohne Internet lernen möchtest, brauchst du einen vorbereiteten Desktop- oder Mobil-Client. Kostenloser Zugang, öffentlicher Quellcode, Offline-Nutzung und Self-Hosting bleiben getrennte Fragen.

## Was der selbst gehostete Anki-Sync-Server wirklich ersetzt

Anki bietet einen offiziellen [Sync-Server zum Selbsthosten](https://docs.ankiweb.net/sync-server.html). Du kannst den zusammen mit Anki Desktop ausgelieferten Server betreiben oder eine kleinere Python- oder Rust-Implementierung ohne die Abhängigkeiten der Desktop-Oberfläche installieren. Du richtest Nutzer und Passwörter ein, legst den Speicherort fest, startest den Prozess und trägst seine URL in kompatiblen Clients ein.

Der Server ersetzt den Weg, über den Sammlungen und Medien zwischen den Clients synchronisiert werden. Eine private Kopie des vollständigen AnkiWeb-Produkts erhältst du damit **nicht**. Es fehlen:

- die AnkiWeb-Oberfläche zum Lernen im Browser;
- öffentliche Verzeichnisse für freigegebene Stapel oder Add-ons;
- die AnkiWeb-Website zur Registrierung und Kontoverwaltung;
- eine Weboberfläche zur Administration für Schulen oder Unternehmen.

Der letzte Punkt ist für Teams wichtig. Das Handbuch beschreibt den Server als fortgeschrittene Funktion für Einzelpersonen und Familien. Nutzer werden direkt auf dem Server eingerichtet. Laut den Maintainern werden Erweiterungen wie eine REST-API oder die Unterstützung externer Datenbanken voraussichtlich nicht angenommen, weil ein einfacher Aufbau zum Designziel gehört.

Wenn du Desktop- und Mobil-Clients über deine eigene Infrastruktur synchronisieren möchtest, erfüllt der Server diesen Zweck. Wenn du dein eigenes AnkiWeb bereitstellen möchtest, tut er das nicht. Kein weiterer Installationsschritt verwandelt den Sync-Server in die gehostete Webanwendung.

Mit dem Self-Hosting übernimmst du auch den Betrieb. Das Handbuch warnt, dass neuere Clients auf Änderungen am Synchronisierungsprotokoll angewiesen sein können. Deshalb müssen Server- und Client-Versionen kompatibel bleiben. Standardmäßig lauscht der Server über unverschlüsseltes HTTP. Für einen Zugriff aus der Ferne nennt die Dokumentation drei Möglichkeiten: auf ein vertrauenswürdiges Netzwerk beschränken, ein VPN verwenden oder einen HTTPS-Reverse-Proxy vorschalten. Auch Zugangsdaten, Speicher, Backups, Upgrades und Wiederherstellungstests liegen dann in deiner Verantwortung.

## Erst die Codebasis wählen, dann das Issue

Diese kurze Übersicht erspart Entwicklern viel unnötige Suche:

- Das Verhalten der Desktop-App, die Lernplanungslogik, Vorlagen und der offizielle Sync-Server befinden sich im [Repository ankitects/anki](https://github.com/ankitects/anki).
- Android-spezifische Änderungen gehören in das [AnkiDroid-Repository](https://github.com/ankidroid/Anki-Android).
- Ein Desktop-Add-on lässt sich unter Umständen leichter pflegen als ein dauerhafter Fork, wenn die vorhandenen Erweiterungspunkte deine Änderung bereits abdecken.
- Für einen iOS-spezifischen Patch gibt es kein öffentliches, vollständiges AnkiMobile-Repository.
- Es gibt keine offizielle Open-Source-Version von AnkiWeb, die du selbst bereitstellen und forken könntest.

Den Quellcode von Anki Desktop zu finden, ist erst der Anfang dieser Übersicht. Es belegt nicht, dass sich irgendwo darin auch eine iOS-Ansicht oder eine AnkiWeb-Seite verbirgt.

## Welche Art von Kontrolle brauchst du?

Für die meisten Lernenden ist das gemischte Quellcode-Modell kein Grund, Anki zu verlassen. Die ausgereiften Wiederholungsabläufe, Add-ons, Vorlagen, Dokumentation und Migrationswerkzeuge können deutlich wichtiger sein als der Zugriff auf den Quellcode aller Produktbereiche.

Wenn dir Datenschutz wichtig ist, beginne mit dem kleinsten System, das deinen Bedarf abdeckt. Für eine einzelne Offline-Sammlung auf dem Desktop brauchst du keinen Sync-Server. Sollen mehrere Geräte über eine von dir kontrollierte Infrastruktur synchronisieren, ist der offizielle Server die schlankere Lösung. Du erhältst mehr Kontrolle über die synchronisierten Daten, übernimmst aber auch die Verantwortung für Netzwerksicherheit und Wiederherstellung.

Wenn du selbst hostest, teste zunächst mit einem Konto, bevor du eine echte Sammlung verschiebst. Prüfe, ob sich jeder Client verbinden kann, verschlüssele Zugriffe aus der Ferne, halte die Versionen kompatibel und stelle sicher, dass sich sowohl Sammlungs- als auch Mediendaten aus dem Backup wiederherstellen lassen.

Wenn du mitarbeiten möchtest, entscheide dich zuerst für den Produktbereich. Desktop und Android bieten öffentliche Wege für Beiträge. AnkiMobile und AnkiWeb veröffentlichen für einen solchen Ablauf nicht ihren vollständigen Quellcode.

## Ein Hinweis zu Flashcards und der Kontrolle über den gesamten Stack

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](https://flashcards-open-source-app.com/). Das [MIT-lizenzierte Repository](https://github.com/kirill-markin/flashcards-open-source-app) enthält die Web-App, iOS- und Android-Clients, Authentifizierung, Backend, Synchronisierung und AWS-Infrastruktur. Damit lassen sich mehr Teile des Systems im Quellcode prüfen und selbst hosten als bei Ankis reinem Sync-Server. Flashcards ist allerdings deutlich jünger und weniger ausgereift. Auch bei Add-ons und der originalgetreuen Migration aus Anki ist es schwächer. Deshalb ist Flashcards nicht automatisch die beste Wahl.

Für Flashcards ist das [Self-Hosting des gesamten Stacks auf AWS dokumentiert](/de/docs/self-hosting/). Eine universelle Bereitstellung mit einem einzigen Befehl ist es jedoch nicht. Betreiber sind selbst für AWS, Cloudflare, Authentifizierung, E-Mail-Versand, Datenbankwiederherstellung, Monitoring und Upgrades verantwortlich. Hinzu kommen der separate Build und die Verteilung der nativen Apps. Der [Self-Hosting-Leitfaden für Flashcards](/de/blog/self-hosted-open-source-flashcards-app-for-spaced-repetition/) bietet den kürzeren Produktüberblick, während [Anki im Vergleich mit Flashcards](/de/blog/anki-vs-flashcards-open-source-app/) die Unterschiede bei Reifegrad und Arbeitsabläufen behandelt.

Wenn du weitere Projekte vergleichen möchtest, wendet der [Leitfaden zu Open-Source-Karteikarten-Apps](/de/blog/best-open-source-flashcard-apps-2026/) dieselben Fragen zu Lizenz, Offline-Nutzung, Synchronisierung, Migration und Self-Hosting auf mehrere Werkzeuge an.

## Die ehrliche Antwort

Ist Anki Open Source? **Anki Desktop und AnkiDroid sind es. AnkiMobile und AnkiWeb sind es nicht.** Der offizielle Anki-Sync-Server ist Open Source und lässt sich selbst hosten, synchronisiert aber nur Sammlungen und Medien. Er bildet die AnkiWeb-Website nicht nach.

Für ein ausgereiftes lokales Lernprogramm bleibt Anki Desktop die naheliegende Open-Source-Option. Für eine private Synchronisierung über mehrere Geräte kannst du den offiziellen Sync-Server ergänzen und die Betriebsarbeit selbst übernehmen. Wenn du dagegen jeden Client und jeden Dienst eines Produkt-Stacks prüfen, verändern und bereitstellen möchtest, bietet Anki diese durchgehend offene Systemgrenze derzeit nicht.
