---
title: "Funktioniert Anki 2026 offline? Desktop, iPhone, Android und Sync"
description: "Ja. Ankis installierte Apps nutzen auf Desktop, iPhone, iPad und Android eine lokale Sammlung. Erfahre, wofür du Internet brauchst, wie du später synchronisierst und Medien vorbereitest."
date: "2026-08-16"
image: "/blog/does-anki-work-offline.png"
keywords:
  - "Anki offline nutzen"
  - "funktioniert Anki offline"
  - "AnkiMobile offline"
  - "AnkiDroid offline"
  - "Anki Offline-Synchronisierung"
  - "AnkiWeb offline"
  - "Anki ohne Internet"
---

Für die nächste Karte muss Anki keinen Server erreichen. **Die installierten Anki-Apps funktionieren auch 2026 offline:** Anki unter Windows, macOS und Linux, AnkiMobile auf dem iPhone und iPad sowie AnkiDroid unter Android. Alle speichern eine Sammlung direkt auf dem jeweiligen Gerät. Deshalb kannst du ohne Internet Karten wiederholen, neue Notizen anlegen und vorhandene Inhalte bearbeiten.

Dabei wird ein wichtiger Unterschied leicht übersehen: AnkiWeb ist der browserbasierte Lern- und Synchronisierungsdienst, keine Offline-App. Auch eine installierte App kann nur auf die Stapel und Medien zugreifen, die bereits auf diesem Gerät gespeichert sind.

**Fakten geprüft:** 16. August 2026.

![Ein Feldforscher ergänzt bei ausgefallener Funkverbindung ein lokales Archiv aus Fotos, Tonaufnahmen und Textkarten](/blog/does-anki-work-offline.png)

## Die kurze Antwort nach Plattform

Die [offizielle Anki-Website](https://apps.ankiweb.net/) nennt die Desktop-App, AnkiMobile für iOS, AnkiDroid für Android und AnkiWeb als Teile desselben Ökosystems. Offline bieten sie jedoch nicht dieselben Möglichkeiten.

| Plattform | Offline nutzbar? | Was ohne Internet möglich ist | Was du online erledigen musst |
| --- | --- | --- | --- |
| **Anki Desktop** unter Windows, macOS oder Linux | **Ja.** Sammlung und Medienordner liegen lokal. | Karten wiederholen, Notizen hinzufügen und bearbeiten sowie bereits auf dem Computer gespeicherte Medien verwenden. | Freigegebene Stapel herunterladen, mit AnkiWeb synchronisieren und Inhalte laden, die eine Karte oder ein Add-on von einem Onlinedienst abruft. |
| **AnkiMobile** auf dem iPhone oder iPad | **Ja.** Die App speichert die Sammlung lokal. | Lokale Karten wiederholen, Notizen hinzufügen und bearbeiten sowie Töne und Bilder abspielen, die bereits auf dem Gerät liegen. | Den ersten vollständigen Abgleich von Sammlung und Medien abschließen, AnkiWeb verwenden und externe Ressourcen aufrufen. |
| **AnkiDroid** unter Android | **Ja.** AnkiDroid speichert die Sammlung auf dem Android-Gerät. | Lokale Karten wiederholen, Notizen hinzufügen und bearbeiten sowie vorhandene Medien verwenden. | Fehlende Inhalte synchronisieren oder herunterladen, freigegebene Stapel beziehen und netzwerkabhängige Kartenfunktionen verwenden. |
| **AnkiWeb** im Browser | **Nein.** Der Lern- und Synchronisierungsdienst hat keinen Offline-Modus. | Verlass dich nicht darauf, AnkiWeb nach einem Verbindungsabbruch weiterzuverwenden. | Stelle eine Internetverbindung her oder wechsle zu einer installierten App, die du vorher vorbereitet hast. |

Kann man Anki also offline nutzen? Ja – sofern du eine installierte App verwendest und die richtige Sammlung bereits auf dem Gerät liegt. AnkiWeb im Browser braucht weiterhin eine Internetverbindung.

## Offline-Wiederholungen und Änderungen bleiben zuerst auf dem Gerät

Wenn du Karten offline beantwortest, protokolliert Anki die Wiederholungen in der lokalen Sammlung. Die weitere Lernplanung läuft mit diesem Stand weiter. Auch neue Notizen und normale Änderungen bleiben zunächst auf dem Gerät. Auf anderen Geräten erscheint davon nichts, bis du wieder online bist und synchronisierst.

Wenn du nur auf einem Gerät lernst, ist die Synchronisierung mit AnkiWeb optional. Sie überträgt Änderungen an der Sammlung zwischen deinen Geräten. Laut [Anki-Handbuch zur Synchronisierung](https://docs.ankiweb.net/syncing.html) lassen sich Wiederholungen und Änderungen an Notizen von mehreren Geräten unter normalen Umständen zusammenführen. Wurde dieselbe Karte an zwei Stellen wiederholt, bleiben beide Antworten im Wiederholungsverlauf erhalten; für den aktuellen Kartenstand zählt die jüngste Antwort.

Mit diesem Ablauf verringerst du das Risiko vermeidbarer Synchronisierungskonflikte:

1. Synchronisiere dein Gerät, solange du noch eine zuverlässige Internetverbindung hast.
2. Wiederhole Karten, füge Notizen hinzu oder korrigiere Kartentext offline.
3. Sobald du wieder online bist, synchronisierst du dieses Gerät, bevor du auf einem anderen weiterlernst.
4. Lass auch das andere Gerät vollständig synchronisieren, bevor du dort etwas änderst.

Bei Änderungen an der Struktur der Sammlung ist mehr Vorsicht nötig. Wenn du etwa ein Feld hinzufügst, eine Kartenvorlage entfernst oder einen Notiztyp änderst, kann statt einer Zusammenführung eine Synchronisierung in nur eine Richtung erforderlich sein. Dann entscheidest du, ob die lokale Sammlung oder die Sammlung auf AnkiWeb erhalten bleibt. Änderungen in der anderen Version können dabei überschrieben werden.

Auf Reisen kannst du daher wie gewohnt Karten wiederholen und Notizen bearbeiten. Komplexe Änderungen an Notiztypen und Vorlagen solltest du verschieben, wenn du mit mehreren Offline-Geräten arbeitest und deren Stände auseinanderlaufen. Fordert Anki dich später zu einem vollständigen Hoch- oder Herunterladen auf, prüfe zuerst, welche Sammlung deine wichtigen Änderungen enthält, und wähle erst dann die Richtung.

## Medien sind erst offline verfügbar, wenn sie auf dem Gerät liegen

Anki speichert Töne und Bilder getrennt von den übrigen Sammlungsdaten. Für die Desktop-App erklärt die [Dokumentation zu Medien](https://docs.ankiweb.net/media.html), dass Dateien, die du an eine Notiz anhängst oder dort einfügst, in den lokalen Ordner `collection.media` kopiert werden. Liegt eine Mediendatei dort, kann die Karte sie ohne Internet laden.

Der kritische Punkt ist die Vorbereitung. Sammlung und Medien werden getrennt synchronisiert. Töne und Bilder können deshalb noch übertragen werden, obwohl deine Karten schon sichtbar sind. Der [AnkiMobile-Leitfaden zur Synchronisierung](https://docs.ankimobile.net/syncing.html) weist darauf hin, dass Medien fehlen können, bis die erste Synchronisierung vollständig abgeschlossen ist. Eine vollständige Stapelliste beweist also nicht, dass eine Sammlung mit vielen Bildern oder Audiodateien offline bereitsteht.

Bevor du offline gehst:

- Synchronisiere das Gerät, auf dem du die Medien hinzugefügt hast.
- Warte dort, bis die Mediensynchronisierung vollständig abgeschlossen ist.
- Synchronisiere anschließend das Gerät, das du mitnehmen willst, und warte auch dort bis zum Ende.
- Öffne Beispielkarten mit jeder Art von Bild und Audio, die du unterwegs brauchst.
- Führe, sofern verfügbar, **Medien überprüfen** aus. Damit findest du Notizen, die auf fehlende Dateien verweisen.

Die letzte Prüfung ist besonders bei freigegebenen Stapeln wichtig. Manchmal hat der Autor ein Bild, auf das eine Karte verweist, gar nicht mitgeliefert. Dann kann auch wiederholtes Synchronisieren die Datei nicht herunterladen.

Lokale Medien machen eine Karte jedoch nicht automatisch vollständig offlinefähig. Eine Kartenvorlage kann auf ein Bild, ein Skript, eine Schriftart oder eine andere Ressource im Web verweisen. Online-Wörterbücher, Downloads freigegebener Stapel und Add-ons, die externe APIs aufrufen, benötigen weiterhin eine Verbindung. Ob die Sprachausgabe offline funktioniert, hängt von der Stimme und der Plattform ab: Eine installierte Systemstimme kann offline verfügbar sein, eine Stimme aus einem Onlinedienst dagegen nicht. Teste deshalb genau die Funktion, die du brauchst, statt bei jeder Sprachausgabe und jedem Add-on dasselbe Verhalten vorauszusetzen.

## So synchronisiert Anki nach dem Offline-Lernen

Die Offline-Synchronisierung von Anki läuft in zwei Schritten ab: Du arbeitest zunächst lokal und gleichst die Änderungen später über das Internet ab.

Sobald die Verbindung wieder da ist, synchronisierst du zuerst das Gerät, auf dem du offline gearbeitet hast. Warte, bis sowohl die Sammlung als auch die Medien vollständig synchronisiert sind. Gleiche danach das nächste Gerät ab, bevor du dort Karten wiederholst oder bearbeitest. Falls Anki einen Konflikt meldet, ist durch diese Reihenfolge leichter nachzuvollziehen, welches Gerät den neuesten Stand hat.

Prüfe das Ergebnis, statt dich allein auf die abgeschlossene Synchronisierungsanzeige zu verlassen:

- Suche nach einer Notiz, die du offline hinzugefügt hast.
- Kontrolliere, ob ein bearbeitetes Feld den neuen Text enthält.
- Prüfe den Wiederholungsverlauf oder die Fälligkeit einer Karte, die du beantwortet hast.
- Öffne auf dem zweiten Gerät mindestens eine neu hinzugefügte Bild- oder Audiodatei.

Wenn du dieselbe Notiz auf zwei Geräten bearbeitet hast, lies sie nach der Synchronisierung noch einmal. Verlass dich nicht darauf, dass dein gewünschter Wortlaut automatisch erhalten blieb. Erscheint eine rote Sync-Schaltfläche oder die Wahl zwischen einem vollständigen Hoch- und Herunterladen, klicke nicht routinemäßig weiter. Bei einem vollständigen Download werden lokale Änderungen an der Sammlung ersetzt. Bei einem vollständigen Upload wird die Sammlung auf AnkiWeb ersetzt, bevor die anderen Geräte sie herunterladen.

## Ohne regelmäßiges Internet: Sammlung per Datei übertragen

Auch ohne regelmäßigen Zugriff auf AnkiWeb kannst du eine Sammlung zwischen Geräten übertragen. Das ist allerdings eine Übergabe, keine Zusammenführung der Änderungen mehrerer Geräte.

Der [AnkiMobile-Leitfaden zur Sammlungsübertragung](https://docs.ankimobile.net/collection-transfer.html) beschreibt dafür eine Datei `collection.colpkg`, die alle Stapel und Informationen zur Lernplanung enthält. Du exportierst die aktuelle Sammlung, überträgst die Datei per AirDrop oder Dateifreigabe und importierst sie auf dem anderen Gerät. Das [AnkiDroid-Handbuch](https://docs.ankidroid.org/manual.html) dokumentiert einen ähnlichen Ablauf per USB für die Übertragung zwischen Android und Desktop.

Beim Import einer vollständigen Sammlungsdatei wird die vorhandene Sammlung auf dem Zielgerät ersetzt. Zwei unabhängig voneinander bearbeitete Offline-Sammlungen lassen sich auf diesem Weg nicht zusammenführen. Lege daher fest, welches Gerät den aktuellen Stand enthält: Exportiere die Sammlung von dort, importiere sie auf dem nächsten Gerät, arbeite dort weiter und übertrage anschließend die neuere Fassung zurück, bevor du das erste Gerät wieder verwendest.

Dieser Ablauf eignet sich für Feldarbeit, Aufenthalte an Bord, abgelegene Orte oder eingeschränkte Netzwerke, in denen gelegentliche Dateiübertragungen möglich sind, aber keine regelmäßige Cloud-Synchronisierung. Für einen normalen Flug oder Arbeitsweg ist es einfacher, die Synchronisierung mit AnkiWeb vor der Abreise vollständig abzuschließen.

## Synchronisieren ersetzt kein Anki-Backup

Durch die Synchronisierung bleiben deine Geräte auf demselben Stand. Eine versehentliche Löschung oder unerwünschte Änderung kann sich deshalb auf alle synchronisierten Geräte ausbreiten.

Die installierten Anki-Apps erstellen lokale Backups, doch Medien musst du gesondert berücksichtigen. Der [AnkiMobile-Leitfaden zu den Einstellungen](https://docs.ankimobile.net/preferences.html) erklärt beispielsweise, dass automatische Backups Karten und Statistiken enthalten, aber keine Töne oder Bilder. Ein vollständiger Sammlungsexport mit Medien erfüllt daher einen anderen Zweck als die Synchronisierung und der Verlauf der automatischen Backups.

Wenn es viel Arbeit wäre, den Stapel neu zu erstellen, bewahre regelmäßig einen vollständigen Export mit Medien außerhalb deines täglich verwendeten Geräts auf. Der ausführlichere [Leitfaden zur Sicherung von Karteikarten](/de/blog/how-to-back-up-flashcards/) erklärt, wie du diese Wiederherstellungskopie mit einer portablen Textfassung und den ursprünglichen Quelldateien kombinierst.

## Der 10-Minuten-Test im Flugmodus

Führe diesen Test auf genau dem Laptop, Smartphone oder Tablet durch, das du mitnehmen wirst. Ein erfolgreicher Test auf dem Desktop sagt nichts darüber aus, ob der Medienordner auf deinem Smartphone vollständig ist.

1. Öffne die installierte Anki-App, solange du online bist, und synchronisiere sie. Auf einem neuen Gerät muss zuerst die gesamte Sammlung heruntergeladen werden.
2. Warte, bis auch die Mediensynchronisierung abgeschlossen ist. Sichtbare Stapelnamen allein reichen nicht aus.
3. Öffne jeden benötigten Stapel. Prüfe einige Karten mit Bildern, Audio, benutzerdefinierten Schriftarten und allen besonderen Funktionen deiner Vorlagen, die du unterwegs brauchst.
4. Aktiviere den Flugmodus oder deaktiviere auf andere Weise sämtliche Netzwerkverbindungen.
5. Beende Anki vollständig, öffne die App erneut und starte den benötigten Stapel. So stellst du sicher, dass der Ablauf auch nach einem Neustart offline funktioniert.
6. Beantworte mehrere Karten. Füge eine eindeutig benannte Testnotiz hinzu und nimm eine harmlose Textänderung vor.
7. Beende und öffne die App erneut, während du noch offline bist. Prüfe, ob die Wiederholungen, die neue Notiz, die Änderung und die lokalen Medien erhalten geblieben sind.
8. Probiere alle Wörterbücher, Stimmen für die Sprachausgabe und Add-ons aus, die du verwenden möchtest. Notiere, welche Funktionen eine Netzwerkverbindung brauchen.
9. Stelle die Verbindung wieder her und synchronisiere dieses Gerät. Warte, bis sowohl die Sammlung als auch die Medien vollständig abgeglichen sind.
10. Synchronisiere ein zweites Gerät. Prüfe dort die Testnotiz, die Änderung, den Wiederholungsstand und die Medien, bevor du die Testinhalte löschst.

Nutze den Test nicht, um gleichzeitig auf zwei Geräten Notiztypen umzugestalten. Es geht nur darum, deinen Ablauf für die Reise zu prüfen: Die richtige Sammlung liegt lokal vor, die wichtigen Medien lassen sich öffnen, deine Offline-Arbeit übersteht einen Neustart und die spätere Synchronisierung überträgt sie auf andere Geräte.

## Mit der richtigen Vorbereitung funktioniert Anki auch unterwegs offline

Die installierten Anki-Apps eignen sich gut für Reisen, wenn du eine vollständige lokale Sammlung statt nur einiger zwischengespeicherter Karten möchtest. Die Grenzen sind klar: Sammlung und Medien müssen vorher auf dem Gerät liegen, AnkiWeb bleibt ausschließlich online verfügbar und netzwerkgestützte Kartenfunktionen brauchen weiterhin eine Verbindung.

Wenn du für eine Reise mehrere Apps vergleichst, bewertet der [Vergleich von Offline-Karteikarten-Apps](/de/blog/best-offline-flashcards-app/) fünf Produkte nach denselben Kriterien: Karten, Bearbeitung, Lernfortschritt, Medien und spätere Synchronisierung. Falls du nicht nur wegen der Offline-Nutzung über ein anderes Lernsystem nachdenkst, lies [Anki im Vergleich mit Flashcards Open Source App](/de/blog/anki-vs-flashcards-open-source-app/).

Die praktische Antwort auf „Funktioniert Anki offline?“ lautet: Ja – auf dem Desktop, iPhone, iPad und unter Android, sobald genau dieses Gerät die benötigte Sammlung und die dazugehörigen Medien gespeichert hat. Synchronisiere vor der Abreise, teste deinen Ablauf im Flugmodus und synchronisiere nach der Rückkehr zuerst das Gerät, auf dem du offline gearbeitet hast.
