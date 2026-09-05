---
title: "Die besten Open-Source-Karteikarten-Apps 2026: 6 FOSS-Optionen im Vergleich"
description: "Sechs gepflegte Open-Source-Karteikarten-Apps im Vergleich: Quellcodeumfang, Offline-Daten, Sync, Anki-Import, Export, Selbsthosting und Wiederherstellung."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "beste Open-Source-Karteikarten-Apps"
  - "Open-Source-Karteikarten-App"
  - "Open-Source-Spaced-Repetition"
  - "selbst gehostete Karteikarten"
  - "Offline-Karteikarten-App"
  - "Open-Source-Alternative zu Anki"
  - "FOSS-Karteikarten"
---

Anki bleibt auch 2026 für die meisten Menschen die beste Open-Source-Karteikarten-App. Spannend wird die Auswahl, sobald „Open Source“ nicht dein einziges unverzichtbares Kriterium ist.

Vielleicht brauchst du eine Browser-App auf deinem eigenen Server. Oder ein Deck, dessen Inhalt als reines Markdown lesbar ist. Oder ein privates Notizsystem, das aus deinen Notizen Karteikarten erstellt. Je nach Anforderung passt ein anderes Produkt – ein öffentliches GitHub-Repository allein beantwortet diese Frage nicht.

Zu einem quelloffenen Desktop-Client kann eine proprietäre iPhone-App gehören. Ein Docker-Container kann eine Browser-Oberfläche bereitstellen, ohne native Clients zu synchronisieren. Und ein Import kann zwar die Karteninhalte übernehmen, dabei aber Vorlagen, Medien und den jahrelangen Wiederholungsverlauf verlieren, die der Sammlung ihren eigentlichen Wert geben.

Sechs Projekte haben diese Prüfung bestanden. Verglichen habe ich den lizenzierten Quellcode, die neueste stabile Version, lokale Daten, Scheduler, Synchronisierung, Anki-Migration, Export und den genauen Umfang des Selbsthostings. Gerade der letzte Punkt ist wichtiger, als die meisten Funktionslisten vermuten lassen.

> **Offenlegung:** Ich bin Kirill Markin und entwickle [Flashcards](https://flashcards-open-source-app.com/), eine der sechs hier vorgestellten Apps. Das MIT-Repository umfasst Web-App, native Clients, Backend, Synchronisierung und Infrastruktur. Flashcards steht in diesem Vergleich nicht auf Platz eins. Anki ist die sicherere Standardwahl, Mnemosyne bietet einen etablierteren Weg für die Anki-Migration, und mehrere der anderen Optionen lassen sich deutlich einfacher betreiben.

**Stand der Fakten:** 5. September 2026. Stabile Releases werden klar von Änderungen getrennt, die bislang nur im Standard-Branch vorliegen.

![Ein Wanderer vergleicht sechs geöffnete Rucksäcke und prüft ein Ersatzset, bevor er eine Open-Source-Karteikarten-App auswählt](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Kurz gesagt

| Deine wichtigste Anforderung | Beste Wahl | Warum sie passt | Was du zuerst testen solltest |
| --- | --- | --- | --- |
| Ein zuverlässiges Allzwecksystem oder eine komplexe bestehende Sammlung | [Anki](https://apps.ankiweb.net/) | Ausgereifte Karten und Vorlagen, FSRS, Add-ons, breite Client-Unterstützung und umfangreiche Paketexporte | Die offizielle iOS-App und AnkiWeb gehören nicht zum quelloffenen Desktop-Code; beim Selbsthosting erhältst du Synchronisierung, aber kein AnkiWeb |
| Eine fokussierte Desktop-Alternative mit etabliertem Anki-Import | [Mnemosyne](https://mnemosyne-proj.org/) | Lokales Lernen, Import von Anki-Kartentypen und -Lerndaten sowie ein selbst betreibbarer Sync-Server | Version 2.11 ist weiterhin die neueste stabile Version; unter Android kannst du Karten wiederholen, aber nicht bearbeiten |
| Notizen und Karteikarten in einer lokalen Wissensdatenbank | [SiYuan](https://b3log.org/siyuan/en/) | Native Offline-Apps, integriertes FSRS und eine vollwertige Browser-App per Docker | Die Docker-Instanz kann nicht mit den nativen Apps synchronisieren, und im Docker-Betrieb fehlen mehrere Import-/Exportbefehle |
| Quellcode für Web, mobile Apps, Backend und Infrastruktur | [Flashcards](https://github.com/kirill-markin/flashcards-open-source-app) | Ein MIT-Monorepo mit dokumentierter Produktivbereitstellung | Der unterstützte Produktiv-Stack ist auf AWS ausgerichtet, und die Migration aus Anki ist verlustbehaftet |
| Eine jüngere Local-first-Desktop-App mit direktem APKG-Import | [Recall](https://github.com/Madlezz/Recall) | FSRS, Desktop-Builds, eine PWA, lokale Datenbanken und ein optionales verschlüsseltes Relay | Der Import bewahrt nur eine Momentaufnahme der Lernplanung, verarbeitet die ersten beiden Notizfelder und überspringt Audio |
| Für Menschen lesbare Markdown-Decks ohne Netzwerkabhängigkeit | [Essentialist](https://github.com/essentialist-app/essentialist) | Einfache Deckdateien und eine bewusst für den Offline-Betrieb entwickelte Desktop-/Android-App | Es gibt keine Synchronisierung, und der Lernfortschritt liegt in einer separaten versteckten Datenbank |

Das ist keine Rangliste nach Funktionsumfang. Beginne bei dem Problem, das du auf keinen Fall akzeptieren kannst. Wenn du zehn Jahre Anki-Wiederholungen mitbringst, zählt eine originalgetreue Migration mehr als eine aufgeräumtere Oberfläche. Betreibst du das System für eine Schule, sind Browser-Zugriff und eine erprobte Wiederherstellung womöglich wichtiger als Add-ons.

## Was als Open-Source-Karteikarten-App zählt

Vier Kriterien mussten erfüllt sein:

1. **Für den zentralen Lernablauf sind der Quellcode und eine ausdrückliche Open-Source-Lizenz veröffentlicht.** Ein Verzeichnis mit Integrationen rund um einen unveröffentlichten Kern zählt nicht.
2. **Spaced Repetition funktioniert heute.** Ein Eintrag auf der Roadmap oder ein allgemeiner Quizmodus reicht nicht.
3. **Es gibt einen veröffentlichten Build oder eine klar dokumentierte offizielle Bereitstellung.** Neue Commits allein machen aus einem Prototyp noch keine verlässliche Empfehlung.
4. **Offizielle Quellen machen die Grenzen der Datenhaltung nachvollziehbar.** Nötig waren konkrete Antworten zu Offline-Speicherung, Synchronisierung, Import/Export oder Hosting – kein vages Versprechen, dass Nutzer „ihre Daten besitzen“.

Eine Mindestzahl an GitHub-Sternen gab es nicht. Sterne belohnen Alter und Bekanntheit mindestens so sehr wie die Eignung eines Produkts. Reife bleibt trotzdem wichtig: Anki, Mnemosyne und SiYuan haben etablierte Releases und Betriebsmodelle. Recall und Essentialist empfehle ich nur für enger gefasste Anforderungen, weil ihr veröffentlichtes Verhalten gut genug dokumentiert ist, um eine konkrete Empfehlung abzugeben.

Auch „aktiv gepflegt“ lässt sich nur aus zwei Perspektiven beurteilen. Ein getaggtes Release zeigt, was Nutzer tatsächlich installieren können; der Standard-Branch zeigt, wohin sich das Projekt entwickelt. Essentialist ist dafür das deutlichste Beispiel: Die stabile Version dokumentiert SM-2, der aktuelle Branch dagegen FSRS. In der Tabelle steht deshalb SM-2.

## Sechs FOSS-Karteikarten-Apps im direkten Vergleich

| App | Geprüfte stabile Version | Plattformen | Offline-Daten | Scheduler | Synchronisierung | Anki-Migration und Ausstiegsweg | Umfang beim Selbsthosting |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5. August 2026 | Windows, macOS, Linux; separate Android- und iOS-Clients; AnkiWeb | Installierte Clients greifen beim Lernen auf lokale Sammlungen zu | FSRS oder das ältere SM-2 | AnkiWeb oder der offizielle selbst gehostete Sync-Server | Importiert Text, APKG/COLPKG und Mnemosyne-Datenbanken; exportiert Text oder Pakete mit wahlweise enthaltenen Medien und Planungsdaten | **Nur Sync-Server.** Kein selbst gehostetes AnkiWeb und keine Browser-Oberfläche zum Lernen |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12. November 2023; das Repository wurde 2026 weiter bearbeitet | Windows, macOS, Linux, Android; eingeschränktes Lernen im Browser | Desktop-Daten liegen lokal; Android ermöglicht Offline-Wiederholungen, kann Karten aber nicht bearbeiten | Adaptive Bewertung der Erinnerung von 0 bis 5 | Integrierte Synchronisierung mit einer Desktop- oder Headless-Instanz | Dokumentiert offiziell einen vollständigen Anki-Import mit benutzerdefinierten Kartentypen und Lerndaten; der Export zum Teilen ist keine vollständige Sicherung | **Synchronisierung plus eingeschränktes Lernen im Browser.** Der Browser-Server hat keine Sicherheitsfunktionen |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30. August 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; Browser über Docker | Native Clients speichern den Workspace lokal | FSRS | Kostenpflichtige offizielle E2EE-Synchronisierung oder kostenpflichtige Integration mit S3/WebDAV von Drittanbietern | Die native App importiert Markdown/Daten und exportiert mehrere Dokument-/Datenformate; kein dokumentierter APKG-Importer | **Vollständige Browser-App.** Docker kann native Clients nicht synchronisieren und lässt einige Import-/Exportbefehle weg |
| **Flashcards** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1. September 2026 | Web, iOS, Android | IndexedDB im Web; SQLite unter iOS; Room auf SQLite unter Android; lokale Änderungen landen vor dem Sync in einer Warteschlange | FSRS | Gehostetes oder vom Betreiber bereitgestelltes Backend | Das eigene ZIP überträgt Karten, Tags, Quellmetadaten und referenzierte Medien, aber keine Decks, Lerndaten, Einstellungen oder Konten; kein APKG-Importer | **Vollständiger Web-/Backend-Stack.** Die Produktivbereitstellung ist auf AWS ausgerichtet; private Builds der nativen Apps erfolgen separat |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31. Juli 2026 | Windows, macOS, Linux; installierbare PWA | SQLite auf dem Desktop; IndexedDB im Browser; standardmäßig ohne Konto oder Telemetrie | FSRS | Desktop-Ordnersynchronisierung oder ein optionales verschlüsseltes Cloudflare-Worker-/R2-Relay | Der APKG-Import am Desktop liest die ersten beiden Felder, Decks, Tags, eine ungefähre Momentaufnahme der Lernplanung und Bilder; Export als JSON und Recall-Archiv | **Nur verschlüsseltes Snapshot-Relay.** Es hostet nicht die PWA |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10. Oktober 2025; der Quellcode wurde 2026 weiter bearbeitet | Android APK, macOS DMG, Linux Flatpak; Windows aus dem Quellcode | Kein Netzwerkzugriff; Deck-Inhalte liegen als Markdown vor | Stabile Version: SM-2; Standard-Branch: FSRS | Keine | Markdown erhält die Karteninhalte; eine versteckte Sidecar-Datenbank speichert den Lernfortschritt | **Nichts zu hosten.** Sichere die Markdown-Datei und ihre Sidecar-Datei gemeinsam |

## 1. Anki ist die sicherste Standardwahl

Anki überzeugt bei den unspektakulären Dingen. Es kann komplexe Notiztypen abbilden, aus Vorlagen zusammengehörige Karten erzeugen, Medien zusammen mit der Sammlung speichern und jahrelange Planungsdaten erhalten. Die stabile Desktop-Version für diesen Vergleich ist [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Der neuere Build 26.09b2 ist als Beta gekennzeichnet und dient hier deshalb nicht als Grundlage.

Die Open-Source-Grenze verläuft nicht überall gleich. Das [Desktop-Repository steht unter AGPL-3.0-or-later](https://github.com/ankitects/anki/blob/26.08.1/LICENSE); für mitgelieferte Komponenten sind Ausnahmen aufgeführt. [AnkiDroid](https://github.com/ankidroid/Anki-Android) ist ein separates Open-Source-Projekt für Android. AnkiMobile und AnkiWeb sind offizielle Angebote, ihr Quellcode ist in diesen Repositorys jedoch nicht enthalten. Mehr dazu steht in [Ist Anki Open Source?](/blog/is-anki-open-source/).

Installierte Clients speichern die Sammlung lokal, sodass du gewöhnliche Wiederholungen auch ohne Verbindung erledigen kannst. AnkiWeb ist das Online-Angebot. Wenn das Offline-Verhalten für deine Entscheidung ausschlaggebend ist, erklärt [Funktioniert Anki offline?](/blog/does-anki-work-offline/), welche Daten lokal bleiben und welche Aktionen auf die Synchronisierung warten.

Anki unterstützt [FSRS und seinen älteren Scheduler](https://docs.ankiweb.net/deck-options.html). Seine Exportformate bieten in dieser Gruppe die beste Ausgangsbasis für eine Migration. Ein [COLPKG enthält die gesamte Sammlung samt Planungsdaten](https://docs.ankiweb.net/exporting.html); APKG-Exporte können Planungsinformationen und Medien enthalten, wenn du die entsprechenden Optionen auswählst. Anki importiert außerdem Text, Anki-Pakete und Mnemosyne-2.0-Datenbanken.

Ein solches umfangreiches Ausgangspaket garantiert noch keinen perfekten Import in ein anderes System. Das Zielsystem muss die enthaltenen Vorlagen, Regeln zur Kartenerzeugung, Medienverweise und Scheduler-Felder verstehen. Es bekommt aber deutlich mehr Informationen als aus einer CSV-Datei.

Der [offizielle selbst gehostete Server](https://docs.ankiweb.net/sync-server.html) ist bewusst schlank gehalten. Er synchronisiert kompatible Anki-Clients, bietet aber weder AnkiWeb noch eine Lernoberfläche im Browser oder ein Kontoportal. Standardmäßig kommuniziert er über unverschlüsseltes HTTP. Die Anleitung empfiehlt deshalb, ihn nur im lokalen Netzwerk zu betreiben oder ein VPN beziehungsweise einen HTTPS-Reverse-Proxy vorzuschalten. Auch die Versionen von Client und Server müssen zueinander passen.

Wähle Anki, wenn die originalgetreue Übernahme deiner Sammlung, Vorlagen, Add-ons oder breite Client-Unterstützung an erster Stelle stehen. Eine andere App lohnt sich vor allem dann, wenn eine konkrete Grenze – etwa eine selbst gehostete Browser-Oberfläche oder ein vollständig veröffentlichter mobiler Stack – schwerer wiegt.

## 2. Mnemosyne konzentriert sich auf lokales Lernen

Mnemosyne fühlt sich wie ein Lernwerkzeug für den Desktop an, weil es genau das ist. Eine Wissensdatenbank oder Cloud-Plattform bringt es nicht mit. Dafür bekommst du eine lokale Datenbank, einen klassischen Spaced-Repetition-Ablauf, einen Android-Begleiter für Wiederholungen und einen Sync-Server, der auf einem Desktop- oder Headless-Rechner laufen kann.

Die neueste stabile Version ist weiterhin [2.11 vom November 2023](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Zwar wurde das Repository 2026 weiterentwickelt, doch diese Änderungen sind deshalb noch lange kein stabiles Installationspaket. Teste 2.11 auf den Betriebssystemen, die du in den nächsten Jahren nutzen möchtest.

Auch bei der Lizenz reicht ein einzelnes Etikett nicht aus. Die [Lizenzübersicht im Stammverzeichnis](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE) ordnet openSM2sync die LGPL v3 und dem übrigen Mnemosyne-Code andere Bedingungen zu. Für das [Hauptprogramm](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE) gilt die AGPL v3 mit einer zusätzlichen Bestimmung: Der Name Mnemosyne muss in abgeleiteten Werken deutlich sichtbar bleiben; die genaue Form soll mit den Verantwortlichen abgestimmt werden. Lies den Lizenztext, bevor du einen veränderten Build weitergibst.

Mit dem [Android-Client kannst du Karten offline wiederholen, aber nicht bearbeiten](https://mnemosyne-proj.org/help/android-client). Andere Geräte können über einen vom Desktop gestarteten Server im Browser lernen. Die offizielle Funktionsseite warnt allerdings, dass dieser Server keinerlei Sicherheitsfunktionen hat. Er eignet sich als praktische Oberfläche im lokalen Netzwerk, nicht als ausgereifte öffentliche Webanwendung.

Der Import ist Mnemosynes stärkstes Argument für einen Wechsel von Anki. Die offizielle Funktionsseite dokumentiert einen [vollständigen Anki-Import einschließlich benutzerdefinierter Kartentypen und Lerndaten](https://mnemosyne-proj.org/features). Die [integrierte Synchronisierung](https://mnemosyne-proj.org/help/syncing) führt Karten und Lerndaten zusammen und kann einen Rechner nutzen, den du selbst kontrollierst.

Der normale Exportbefehl taugt nicht als Sicherung. Er ist zum Teilen ausgewählter Karten gedacht und lässt deine Lerndaten aus. Für einen vollständigen Umzug oder eine Wiederherstellung empfiehlt die [Anleitung für mehrere Computer](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers) stattdessen, das gesamte Datenverzeichnis zu kopieren.

Mnemosyne ist hier die stärkste fokussierte Open-Source-Alternative zu Anki. Die Kehrseite sind seltene stabile Releases, eingeschränkte Bearbeitung auf Mobilgeräten und eine Browser-Oberfläche, die im Netzwerk sorgfältig abgesichert werden muss.

## 3. SiYuan passt, wenn deine Notizen das eigentliche System sind

SiYuan ist eine datenschutzorientierte Wissensmanagement-App, in der Karteikarten Teil desselben Block- und Dokumentmodells sind. Das ist praktisch, wenn dein Lernmaterial direkt aus deinen Notizen entsteht. Wenn du nur eine Warteschlange mit Karten brauchst, ist SiYuan dagegen schnell überdimensioniert.

Das [AGPL-3.0-Repository](https://github.com/siyuan-note/siyuan) vereint Benutzeroberfläche, Kernel, mobile Apps, Datenschicht und FSRS-Komponente. Die hier geprüfte stabile Version ist [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Desktop- und Mobil-Clients speichern den Workspace lokal und funktionieren auch offline.

Synchronisierung gehört nicht zur kostenlosen Variante mit lokaler Speicherung. Laut [offizieller Preisseite](https://b3log.org/siyuan/en/pricing.html) umfasst das Abonnement die offizielle Ende-zu-Ende-verschlüsselte Synchronisierung; kostenpflichtige Pro-Funktionen ergänzen Integrationen für deinen eigenen S3- oder WebDAV-Speicher. Das Projekt warnt außerdem davor, einen aktiven Workspace in einem gewöhnlichen Dateisynchronisierungsordner abzulegen, weil gleichzeitige Änderungen Daten beschädigen oder überschreiben können.

Docker stellt eine echte Browser-Anwendung bereit, macht SiYuan aber nicht zum Sync-Server für die installierten Apps. Laut der [Docker-Dokumentation für v3.8.2](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting) können sich Desktop- und Mobil-Clients nicht damit verbinden. Im Docker-Betrieb fehlen außerdem der Markdown-Import und der Export als PDF, HTML und Word. In der umfangreicheren nativen Anwendung gibt es diese Befehle. Ihre allgemeine Funktionsliste unverändert auf eine Docker-Bereitstellung zu übertragen, wäre daher irreführend.

Einen offiziellen APKG-Importer habe ich nicht gefunden. SiYuan kann Markdown und eigene Datenformate übertragen, doch eine Anki-Sammlung musst du gezielt neu aufbauen.

Wähle SiYuan, wenn die Wissensdatenbank das eigentliche Produkt ist und die Karteikarten darin leben sollen. Suchst du einen direkten Ersatz für Anki, sind die Grenzen der Migration bei Mnemosyne und Anki klarer dokumentiert.

## 4. Flashcards legt mehr vom Stack offen – dafür musst du ihn auch betreiben

Flashcards deckt in diesem Vergleich den größten Teil des Produkt-Stacks mit offenem Quellcode ab. Das MIT-Monorepo enthält Web-App, iOS- und Android-Clients, Backend, Authentifizierungsdienst, Synchronisierung, Admin-Anwendung, Datenbankmigrationen und AWS-Infrastruktur. Die hier verwendete stabile Version ist [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Spätere Änderungen im Standard-Branch zählen nicht als veröffentlichtes Verhalten.

Die [Architektur](/docs/architecture/) folgt dem Offline-first-Prinzip, doch „offline“ bedeutet auf jedem Client etwas anderes. Die Web-App nutzt IndexedDB als lokale Datenbasis. iOS verwendet SQLite, Android Room auf Basis von SQLite. Änderungen werden zuerst lokal geschrieben und vor der Synchronisierung in eine Outbox eingereiht. Dieses Design verkraftet Verbindungsabbrüche; es macht den Browser-Speicher weder dauerhaft noch erspart es dir, einen Kaltstart auf jedem Gerät zu testen.

Das ZIP-Paket von Flashcards dient der Übertragung von Inhalten, nicht als Kontosicherung. In v1.23.0 enthält das [Paketschema](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts) Vorder- und Rückseiteninhalte, Tags, Kartentyp, Quellmetadaten und Paketmetadaten; referenzierte Medien werden separat gebündelt. Deckstruktur, Wiederholungsverlauf, FSRS-Zustand, Workspace-Einstellungen und Konten fehlen.

In v1.23.0 gibt es keinen APKG-Importer. Der dokumentierte [Ablauf für die Migration aus Anki per TXT/CSV](/blog/migrate-from-anki-txt-export-open-source-flashcards/) baut die Karten aus exportiertem Text neu auf und erfordert eine manuelle Prüfung. Vorlagen, Planungszustand, Deckstruktur und gebündelte Medien bleiben dabei nicht automatisch erhalten. Für ein einfaches Textdeck ist das vertretbar, für eine stark angepasste Sammlung jedoch eine schlechte Wahl.

Auch die [Anleitung zum Selbsthosting](/docs/self-hosting/) ist eindeutig. In der Produktivumgebung kommt ein AWS-CDK-Stack mit RDS, Cognito, API Gateway und Lambda, S3 und CloudFront, Secrets, Alarmen und Sicherungen zum Einsatz. Cloudflare DNS, Resend für E-Mails und die Sentry-Konfiguration liegen außerhalb von AWS. Docker Compose startet nur die lokale Entwicklungsumgebung; es ist nicht das unterstützte Produktivpaket. Betreiber, die private iOS- oder Android-Binärdateien möchten, müssen sie separat erstellen und verteilen.

Wähle Flashcards, wenn dir der vollständige Quellcode für Web, native Apps und Backend diesen Betriebsaufwand wert ist. Wähle Anki oder Mnemosyne, wenn die originalgetreue Übernahme einer bestehenden Sammlung die schwierigere Anforderung ist.

## 5. Recall ist modern – aber der Importer verdient einen genauen Blick

Recall ist die jüngste der sechs Hauptempfehlungen. Die App hat es in die Auswahl geschafft, weil [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0) versionierte Desktop-Builds, eine installierbare PWA, klar dokumentierte lokale Speicherung, FSRS, Datenexporte und ein dokumentiertes Design für selbst gehostete Synchronisierung bietet.

Die MIT-lizenzierte Desktop-App verwendet SQLite, die PWA IndexedDB. Für beide brauchst du kein Konto; laut Projekt ist die Telemetrie standardmäßig deaktiviert. Desktop-Versionen gibt es für Windows, macOS und Linux.

Der APKG-Importer ist nützlich, doch die Formulierung „review history“ in der README verspricht für die getaggte Implementierung zu viel. Der [Importer-Quellcode von v1.3.0](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs) liest Ankis Wiederholungsprotokoll nicht. Er übernimmt den aktuellen Kartenstatus, das Intervall, die Anzahl der Wiederholungen und Fehlversuche sowie FSRS-Stabilität und -Schwierigkeit, sofern Anki diese Werte gespeichert hat. Bei älteren Karten ohne diese FSRS-Felder schätzt Recall sie anhand von SM-2-Daten.

Auch die Umwandlung der Inhalte hat klare Grenzen. Der Importer verwendet die ersten beiden Notizfelder als Vorder- und Rückseite, anstatt Anki-Notiztypen und -Vorlagen nachzubilden. Decknamen und Tags bleiben erhalten. Gängige Bildformate werden extrahiert und ihre Verweise angepasst; Audio und andere Medien überspringt der Importer. Da er als Tauri-Befehl implementiert ist, funktioniert die direkte APKG-Migration nur am Desktop und nicht in der Browser-PWA.

Das ist deutlich besser als ein Neuaufbau aus reinem Text, aber noch keine originalgetreue Übernahme der Sammlung. Teste Lückentexte, zusammengehörige Karten, zusätzliche Felder, HTML/CSS, Bilder, Audio, Fälligkeitstermine und doppelte Notizen, bevor du mit dem Importer eine große Sammlung umziehst.

Recall bietet zwei Wege zur Synchronisierung. Die Desktop-App kann einen Snapshot in einen Ordner schreiben, den Dropbox, Drive oder ein anderer Dateisynchronisierungsdienst verwaltet. Das optionale Relay verwendet einen Cloudflare Worker und einen R2-Bucket. Laut dem getaggten [Sync-Design](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) verschlüsseln die Clients Snapshots vor dem Upload mit AES-GCM; das Relay sieht den Chiffretext, aber weder Kartendaten noch Schlüssel. Aktualisierungen nutzen optimistische Nebenläufigkeitskontrolle und werden bei einem Konflikt einmal wiederholt; dennoch führt Recall weiterhin vollständige Snapshots statt einzelner Felder zusammen. Ein von den Projektverantwortlichen finanziertes öffentliches Relay gibt es nicht – du stellst es selbst bereit und trägst seine URL ein.

Exporte als JSON und Recall-Archiv bieten einen Ausstiegsweg. Stelle einen solchen Export in einem sauberen Profil wieder her, bevor du ihn als Sicherung bezeichnest.

Wähle Recall, wenn du eine moderne Local-first-Nutzung am Desktop und in einer PWA suchst und ein junges Projekt samt einem Importer akzeptierst, der eine brauchbare Momentaufnahme statt des gesamten Anki-Systems bewahrt.

## 6. Essentialist macht das Deck gut lesbar, aber nicht den gesamten Lernstand

Essentialist ist die am engsten zugeschnittene App in diesem Vergleich. Jedes Deck ist eine Markdown-Datei, die du in einem Texteditor öffnen, in einer Versionsverwaltung speichern oder mit gewöhnlichen Dateiwerkzeugen kopieren kannst. Die Anwendung stellt bewusst keine Netzwerkanfragen.

Die neueste stabile Version ist [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Sie enthält Builds für Android, macOS und Linux; Windows-Nutzer erstellen die App aus dem Quellcode. Die [README zu dieser Version](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md) nennt SM-2 als Scheduler.

Die [README des Standard-Branches](https://github.com/essentialist-app/essentialist/blob/main/README.md) nennt inzwischen FSRS, und 2026 wurde der Quellcode im Repository weiterentwickelt. Das zeigt die Richtung des Projekts, macht die Binärdatei von 2025 aber noch nicht zu einer FSRS-Version.

Markdown deckt weniger ab, als es zunächst scheint. Der Kartentext liegt in der sichtbaren Datei, der Lernfortschritt dagegen in einer versteckten Datenbank namens `.<deck file>.db`. Kopierst du `sample.md` ohne `.sample.md.db`, sicherst du zwar Fragen und Antworten, verlierst aber den Lernstatus.

Eine integrierte Gerätesynchronisierung oder einen Server gibt es nicht. Du kannst die Dateien in einen eigenen synchronisierten Ordner legen, bist dann aber selbst für Konflikte und Wiederherstellung verantwortlich.

Wähle Essentialist, wenn lesbares Markdown und ein Workflow ganz ohne Netzwerk dein Ziel sind. Ein nahtloses System für mehrere Geräte ist es nicht, und eine einzelne sichtbare Datei ergibt noch keine vollständige Sicherung.

## Vier aktive Projekte, die du im Blick behalten solltest

An diesen Projekten wurde 2026 tatsächlich gearbeitet. Sie bleiben trotzdem außerhalb der sechs Hauptempfehlungen, denn interessanter Quellcode allein reicht für eine Empfehlung nicht aus.

| Projekt | Was bereits konkret ist | Was noch gegen die Hauptliste spricht |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL-Quellcode, FSRS-/SM-2-/Leitner-Scheduler, Docker-Bereitstellung, ein verwalteter Dienst, CSV-Import und Datenexport | Im Juli 2026 erstellt; keine versionierte App-Veröffentlichung. Das GitHub-Release enthält ein Audiopaket und markiert keinen Meilenstein der App |
| [Openlet](https://github.com/ChloeVPin/openlet) | MIT-Web-App mit FSRS, CSV-Import, Image Occlusion und einer dokumentierten Supabase-/Vercel-Architektur | Kein getaggtes Release; die offizielle Dokumentation grenzt Offline-Betrieb, Export und Wiederherstellung beim Selbsthosting noch nicht vollständig ab |
| [Prep](https://github.com/Zamua/prep-app) | MIT-Quellcode, FSRS, gehostete Nutzung und eine dokumentierte Bereitstellung auf der selbst hostbaren celld-Laufzeit | Kein getaggtes Release; beim Selbsthosting betreibst du außerdem celld und Objektspeicher, statt eine eigenständige Karteikarten-Anwendung bereitzustellen |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | Mobile GPLv3-Kotlin-App, FSRS/SM-2, eine Android-Version und APKG-Import mit Vorlagen und Medien | 2026 erstellt; für iOS musst du selbst aus dem Quellcode bauen, und die offizielle Dokumentation beschreibt keine allgemeine Synchronisierung zwischen Smartphones |

Einige bekannte Namen erfüllen die Kriterien aus einfacheren Gründen nicht. Mochis [Open-Source-Repository](https://github.com/mochi-cards/open-source) enthält Integrationen, nicht die Kernanwendung. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) ist Open Source und selbst hostbar, doch in der offiziellen README steht Spaced Repetition weiterhin unter „Features coming soon“. [OpenCards](https://github.com/holgerbrandl/opencards) hat seit [v2.5.1 im Januar 2017](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) keine neue Version veröffentlicht; seit 2018 gab es im Repository auch keine Codeänderung mehr.

Wenn dir der Zugriff auf den Quellcode nicht zwingend wichtig ist, findest du im [breiteren Vergleich der Anki-Alternativen](/blog/best-anki-alternatives/) Produkte für eine andere Fragestellung.

## Teste eine Migration in fünf getrennten Schichten

Die Angabe „importiert Anki“ sagt für sich genommen fast nichts aus. Eine Migration kann in einer Schicht gelingen und in vier anderen scheitern.

| Schicht | Was du vergleichen solltest | Das irreführende Erfolgssignal |
| --- | --- | --- |
| Karteninhalt | Jedes Feld, jede Lückentext-Markierung, jeder Tag, jedes Sonderzeichen und jede doppelte Notiz | Die Gesamtzahl der Karten stimmt ungefähr |
| Struktur | Notiztypen, Vorlagen, erzeugte zusammengehörige Karten und verschachtelte Decks | Vorder- und Rückseitentext sind irgendwo aufgetaucht |
| Medien | Bilder und Audio wurden kopiert, lassen sich lokal auflösen und offline abspielen | Der Importer hat die Dateinamen erkannt |
| Lernstatus | Wiederholungsprotokoll, Status, Fälligkeitstermin, Intervall, Fehlversuche und Scheduler-Parameter | Die importierten Karten sind vorhanden, starten aber unbemerkt wieder als neu |
| Ausstieg und Wiederherstellung | Ein dokumentierter Export oder eine Sicherung kann dasselbe System an anderer Stelle neu aufbauen | Ein lesbarer Textexport gilt als vollständige Sicherung |

Baue ein absichtlich schwieriges Testdeck, bevor du die echte Sammlung verschiebst. Nimm zusätzliche Felder, Lückentexte, Vorwärts- und Rückwärtsvorlagen, verschachtelte Decks, Tags, Bilder, Audio und genug Wiederholungsverlauf auf, um zu erkennen, ob das Zielsystem ihn übernimmt.

Bewahre die unveränderte Sicherung des Quellsystems auf. Vergleiche nach dem Import die Anzahl von Notizen, Karten und Medien getrennt. Prüfe Fälligkeitstermine, anstatt einer Meldung wie „Lernplanung importiert“ zu vertrauen. Führe auf jedem Gerät, das du nutzen möchtest, Offline-Wiederholungen durch. Erzeuge anschließend auf zwei Geräten widersprüchliche Teständerungen, die du notfalls verwerfen kannst, und beobachte, wie die Synchronisierung damit umgeht.

Nutze beide Systeme einige Tage lang parallel. Die alte Sammlung zu löschen ist der letzte Schritt – und kein Beweis dafür, dass das neue System funktioniert.

## Selbsthosting ist erst mit getesteter Wiederherstellung vollständig

Bei den Produkten oben bezeichnet „selbst gehostet“ sehr unterschiedliche Systeme:

- Bei Anki und Mnemosyne betreibst du **Synchronisierungsdienste**; die Lernoberfläche bleibt in den installierten Clients.
- SiYuan Docker stellt eine **Browser-Anwendung** bereit, die native Clients nicht als Sync-Server nutzen können.
- Bei Recall betreibst du ein **verschlüsseltes Snapshot-Relay**, nicht die PWA selbst.
- Flashcards stellt einen **vollständigen Web- und Backend-Stack** bereit; die nativen Apps bleiben separate Builds.
- Essentialist hat **keinen Server**; der von dir kontrollierte Bereich beschränkt sich auf die lokalen Dateien.

Sobald dieser Umfang klar ist, solltest du den Teil testen, den Betreiber gern aufschieben:

1. Erstelle Karten, hänge Medien an, schließe Wiederholungen ab und synchronisiere mit zwei Clients.
2. Sichere jede dokumentierte Datenbank, jeden Objektspeicher-Bucket, jede lokale Datei sowie jedes Secret und jeden Konfigurationswert.
3. Stelle alles in einem neuen, leeren Konto, auf einem leeren Rechner oder in einer isolierten Bereitstellung wieder her.
4. Vergleiche Kartenanzahl, Medien, Wiederholungsverlauf, Fälligkeitsstatus, Anmeldung und Client-Synchronisierung.
5. Aktualisiere die wiederhergestellte Kopie und absolviere einen weiteren Wiederholungszyklus.

Wenn der Neuaufbau weiterhin vom alten Rechner abhängt, betreibst du zwar einen laufenden Dienst, hast aber keine geprüfte Sicherung.

## Häufig gestellte Fragen

### Was ist 2026 die beste Open-Source-Karteikarten-App?

Anki ist für die meisten Lernenden die beste Standardwahl. Es verbindet ein ausgereiftes Sammlungsmodell mit FSRS, breiter Client-Unterstützung und den umfangreichsten eigenen Formaten für Sicherung und Export. Allerdings umfasst das Open-Source-Repository der Desktop-App die offiziellen iOS- und Web-Angebote nicht, und der selbst gehostete Server ermöglicht Synchronisierung statt Lernen im Browser.

### Was ist die beste Open-Source-Alternative zu Anki?

Mnemosyne ist die etablierteste fokussierte Alternative und dokumentiert offiziell den Import benutzerdefinierter Anki-Kartentypen und Lerndaten. Recall wirkt moderner und importiert APKG-Dateien direkt am Desktop. Der Import wandelt jedoch nur die ersten beiden Notizfelder um, bewahrt lediglich eine Momentaufnahme der Lernplanung, importiert Bilder statt Audio und übernimmt nicht das vollständige Wiederholungsprotokoll.

### Kann ich Anki selbst hosten?

Ja, du kannst Ankis offiziellen Sync-Server für kompatible Clients betreiben. Nein, er ist kein selbst gehosteter Ersatz für AnkiWeb: Eine Browser-Oberfläche zum Lernen gibt es nicht.

### Bedeutet Open Source automatisch Offline-Betrieb?

Nein. Open Source beschreibt die Lizenzierung und den Zugriff auf den Quellcode. Ob eine App offline funktioniert, hängt davon ab, wo der Client seine Daten speichert und welche Aktionen einen Dienst voraussetzen. Auch das Gegenteil ist möglich: Eine App kann Daten lokal speichern, ohne den Quellcode ihres Kerns zu veröffentlichen.

### Garantiert Selbsthosting Datenportabilität?

Nein. Selbsthosting bestimmt lediglich, wo ein Dienst läuft. Datenportabilität hängt von Exporten, vollständigen Sicherungen und einer tatsächlich getesteten Wiederherstellung ab. Eine Datenbank auf deinem eigenen Server kann weiterhin schwer zu migrieren sein, und einem lesbaren Markdown-Deck kann trotzdem der separat gespeicherte Lernstatus fehlen.

## Meine Empfehlung

Bleib bei **Anki** oder entscheide dich dafür, solange keine seiner Grenzen ein echtes Problem für dich darstellt. Nimm **Mnemosyne** für fokussiertes lokales Lernen am Desktop und einen etablierten Anki-Import. Nutze **SiYuan**, wenn Karteikarten in eine größere Wissensdatenbank gehören. Ziehe **Flashcards** in Betracht, wenn dir der vollständige Quellcode für Web, native Apps und Backend den Betrieb eines AWS-Produktiv-Stacks wert ist. Wähle **Recall** für einen modernen Local-first-Client, nachdem du die Grenzen seiner Konvertierung getestet hast. Entscheide dich für **Essentialist**, wenn einfaches Markdown und keinerlei Netzwerkzugriff wichtiger sind als Synchronisierung.

Die beste Open-Source-Karteikarten-App ist nicht das Repository mit der längsten Funktionsliste. Es ist die App, deren Grenzen bei Quellcode, Offline-Daten, Migration, Synchronisierung, Hosting und Wiederherstellung zu dem System passen, für das du tatsächlich selbst Verantwortung übernehmen willst.
