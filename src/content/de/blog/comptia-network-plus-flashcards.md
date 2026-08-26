---
title: "CompTIA Network+ Lernkarten (N10-009): Ports, Subnetting und PBQs"
description: "Erstelle gezielte CompTIA Network+ Lernkarten zu Ports, Subnetting, Befehlen und Fehlerbehebung für N10-009 – ergänzt durch Labs und PBQ-Übungen."
date: "2026-08-26"
image: "/blog/comptia-network-plus-flashcards.png"
keywords:
  - "CompTIA Network+ Lernkarten"
  - "Network+ Lernkarten"
  - "N10-009 Lernkarten"
  - "Network+ Ports und Protokolle"
  - "Network+ Subnetting Lernkarten"
  - "Network+ PBQ Übungen"
  - "Network+ Fehlerbehebung"
  - "Network+ mit FSRS lernen"
---

Für CompTIA Network+ N10-009 haben Prüfungsteilnehmer 90 Minuten für maximal 90 Fragen, darunter auch praxisbasierte Fragen (PBQs). Die offiziellen Prüfungsziele verlangen nicht nur, Ports und Protokolle abzurufen. Du sollst außerdem in einem Szenario IPv4-Adressierung einsetzen, Switching-Funktionen konfigurieren, Netzwerkdaten untersuchen und Fehler beheben.

Das sind unterschiedliche Lernaufgaben. Gute **CompTIA Network+ Lernkarten** machen einzelne Fakten und Entscheidungen schnell abrufbar: eine Portzuordnung, eine Subnetzmaske, den Zweck eines Befehls oder einen Hinweis, aus dem sich der nächste Prüfschritt ableiten lässt. Subnetting-Berechnungen, Konfigurationen, Paketmitschnitte, vollständige Troubleshooting-Szenarien und PBQs musst du weiterhin außerhalb des Decks praktisch üben.

**Fakten geprüft:** 26. August 2026.

![Eine Person sortiert beim Lernen für Network+ Karten zu Ports, Subnetting, Befehlen und Fehlerbehebung neben einem praktischen Netzwerk-Lab](/blog/comptia-network-plus-flashcards.png)

## Beginne mit den aktuellen Prüfungszielen für N10-009

Die aktuellen offiziellen [Prüfungsziele für CompTIA Network+ N10-009](https://assets.ctfassets.net/82ripq7fjls2/113XqW3JHT7AlIU33M63I0/af42da2af7383a38f318bad10aa9afbd/Network_Plus_N10-009_Exam_Objectives.pdf) tragen die Bezeichnung **Exam Objectives Version 4.0**. Sie beschreiben eine Prüfung mit Multiple-Choice- und praxisbasierten Fragen, einem Zeitlimit von 90 Minuten und empfohlenen 9–12 Monaten Erfahrung mit IT-Netzwerken.

| N10-009-Prüfungsbereich | Gewichtung |
| --- | ---: |
| Netzwerkkonzepte | 23 % |
| Netzwerkimplementierung | 20 % |
| Netzwerkbetrieb | 19 % |
| Netzwerksicherheit | 14 % |
| Fehlerbehebung im Netzwerk | 24 % |

Nutze die Prozentangaben, um die Abdeckung deines gesamten Lernstoffs zu prüfen, nicht um eine Kartenquote festzulegen. Wenn fast ein Viertel der Prüfung die Fehlerbehebung behandelt und dein Deck nur Portnummern enthält, verschleiert das eine Lücke. Hunderte Karten zur Fehlerbehebung lösen das Problem allerdings auch nicht. Du brauchst mehr Arbeit mit Szenarien und einige wenige Karten, die genau die Fakten und Entscheidungen festigen, bei denen du wiederholt unsicher bist.

CompTIA weist außerdem darauf hin, dass die Beispiele unter den einzelnen Prüfungszielen nicht abschließend sind. Nutze die Prüfungsziele als beste aktuelle Abgrenzung des Stoffumfangs, aber nicht als Zusage, dass jede Prüfungsfrage einen der aufgeführten Stichpunkte übernimmt. Verwende ein Quellen-Tag wie `n10-009-v4` und gleiche versionsabhängige Karten vor der Prüfung noch einmal mit dem offiziellen PDF ab.

## Trenne Abrufwissen von praktischen Aufgaben

Der einfachste Filter ist die Frage, woran du eine erfolgreiche Lösung erkennst. Reicht eine kurze, stabile Antwort, eignet sich das Thema wahrscheinlich für eine Lernkarte. Musst du rechnen, wechselnde Informationen auswerten, zwischen mehreren sinnvollen Schritten wählen oder ein Gerät konfigurieren, brauchst du eine praktische Übung. Hängt die Antwort von einem Szenario ab, gehört nur der wiederverwendbare Hinweis oder die Entscheidungsregel auf die Karte – nicht das gesamte Szenario.

| Gute Ziele für Lernkarten | Besser vollständig üben |
| --- | --- |
| Zuordnung von Diensten und Ports | Einen Paketmitschnitt untersuchen |
| Akronym und praktische Funktion | Unbekannte Netzwerke unter Zeitdruck subnetten |
| CIDR-Präfixe und Subnetzmasken umrechnen | VLANs, Routen, WLAN oder Netzwerkdienste konfigurieren |
| Zweck eines Befehls oder Werkzeugs | Unbekannte Befehlsausgaben lesen |
| Ein Symptom und der nächste sinnvolle Prüfpunkt | Einen mehrschichtigen Netzwerkfehler verfolgen |
| Ein Schritt der Methode zur Fehlerbehebung | Eine PBQ oder ein längeres Szenario bearbeiten |

Einige Themen gehören in beide Spalten. Du kannst auswendig lernen, dass `/27` der Maske `255.255.255.224` entspricht, und anschließend auf Papier ein anderes `/27`-Netz berechnen. Du kannst abrufen, wofür `tcpdump` gedacht ist, und damit anschließend echten Netzwerkverkehr erfassen und filtern. Die Karte beseitigt vermeidbares Zögern; die Übung zeigt, ob du die Aufgabe tatsächlich ausführen kannst.

## Verknüpfe Port-Karten mit einem Dienst und einem praktischen Hinweis

Die N10-009-Prüfungsziele enthalten eine konkrete Tabelle mit **Ports und Protokollen für Network+**. Nutze diese Tabelle, um den Prüfungsumfang festzulegen. Weitere Protokolldetails kannst du in der [IANA Service Name and Transport Protocol Port Number Registry](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) nachschlagen. Das Register enthält die offiziellen Zuordnungen von Dienstnamen und Transportprotokoll-Ports; es sagt dir trotzdem nicht, welcher Dienst auf einem bestimmten Host tatsächlich läuft.

Verwandle keine der beiden Quellen in eine riesige Karte nach dem Muster „Nenne alle Ports“. Teile den Stoff in kurze Einzelfragen auf. Lerne wichtige Zuordnungen in beide Richtungen, wenn du sie immer wieder verwechselst.

```text
Vorderseite: Welchen Dienst ordnet N10-009 Port 22 für verschlüsselten
Remotezugriff auf die Befehlszeile zu?

Rückseite: SSH. Port 22 ist die Standardzuordnung; prüfe den tatsächlichen Dienst
und die Konfiguration auf dem Host.
```

```text
Vorderseite: Welche zwei Dienste ordnen die N10-009-Prüfungsziele Port 22 zu?

Rückseite: SSH und SFTP.
```

```text
Vorderseite: Ein Client benötigt eine automatische IP-Konfiguration. An welche
Zuordnung von Dienst und Ports aus N10-009 solltest du denken?

Rückseite: DHCP, Ports 67 und 68.
```

Der praktische Hinweis ist wichtig. `53 -> DNS` ist nützlich, aber „Die Namensauflösung schlägt fehl; untersuche DNS“ lässt sich leichter anwenden. `161/162 -> SNMP` ist nützlich, aber du solltest SNMP auch mit Netzwerküberwachung und -verwaltung verbinden.

Diese wichtige Einschränkung verdient eine eigene Karte:

```text
Vorderseite: Der Datenverkehr nutzt Zielport 443. Was beweist die Portnummer
über die Anwendung?

Rückseite: Sie kann nicht beweisen, welche Anwendung oder welcher Dienst läuft.
Port 443 ist die Standardzuordnung für HTTPS, aber du brauchst weiterhin Belege
aus Konfiguration, Prozessen und Netzwerkverkehr.
```

Ein Port ist eine Konvention und ein Hinweis, kein Identitätsnachweis. Dienste können auf andere Ports gelegt, getunnelt, über Proxys geleitet oder falsch konfiguriert werden. Aus einer Nummer Gewissheit abzuleiten, fördert genau die falsche Gewohnheit für die **Fehlerbehebung bei Network+**.

Du brauchst nicht vom ersten Tag an für jede Zuordnung getrennte Karten in Vorwärts- und Rückwärtsrichtung. Beginne mit einer Richtung und ergänze die umgekehrte Karte erst, wenn der Abruf zu langsam ist oder du zwei Dienste miteinander verwechselst. Der [Leitfaden zu Security+-Lernkarten](/de/blog/how-to-use-flashcards-for-security-plus/) nutzt denselben Ansatz für die Unterscheidung von Protokollen und Sicherheitskonzepten.

## Nutze Lernkarten für Subnetting-Ankerwerte – und berechne neue Netze selbst

N10-009-Prüfungsziel 1.7 verlangt, „in einem Szenario eine geeignete IPv4-Netzwerkadressierung zu verwenden“. Das geht über das Erkennen einer Maske in einer Multiple-Choice-Liste hinaus. **Subnetting-Lernkarten für Network+** sollten die häufigsten Ankerwerte automatisieren und dir anschließend beim Rechnen nicht im Weg stehen.

Nützliche Ankerkarten lassen sich leicht bewerten:

```text
Vorderseite: Welche Subnetzmaske gehört zu /27?

Rückseite: 255.255.255.224.
```

```text
Vorderseite: Wie viele Adressen hat ein gewöhnliches IPv4-/27-Subnetz insgesamt
und wie viele davon können traditionell von Hosts genutzt werden?

Rückseite: Insgesamt 32; traditionell sind 30 nutzbar, nachdem Netzwerk- und
Broadcastadresse ausgeschlossen wurden.
```

```text
Vorderseite: In welchem Netzwerk liegt 192.0.2.77/27?

Rückseite: 192.0.2.64/27. Der Block reicht von .64 bis .95; der traditionelle
Hostbereich reicht von .65 bis .94, und .95 ist die Broadcastadresse.
```

Die dritte Karte ist nur so lange nützlich, bis du dir genau diese Antwort gemerkt hast. Danach prüft sie nicht mehr die Berechnung, sondern nur noch diese konkrete Karte. Nutze durchgerechnete Beispiele vorübergehend zur Kontrolle oder als Vorlage. Arbeite danach mit neuen Adressen, anderen Präfixlängen, VLSM-Planungen und Übungen unter Zeitdruck weiter, bei denen keine Lösung auf der Rückseite wartet.

Ein ausgewogener Subnetting-Block kann so aussehen:

1. Wiederhole fällige Karten zu Präfixen, Masken, Blockgrößen und Hostzahlen.
2. Berechne fünf neue Subnetze, ohne vorher eine Lösung anzusehen.
3. Prüfe Netzwerkadresse, Broadcastadresse und nutzbaren Bereich.
4. Schreibe nur dann eine gezielte Korrekturkarte, wenn eine bestimmte Regel wiederholt einen Fehler verursacht hat.

Wenn du immer wieder vergisst, dass ein `/26` in 64er-Blöcken fortschreitet, gehört diese Tatsache auf eine Karte. Verstehst du die Blockgröße, verlierst aber unter Zeitdruck die Grenzen aus den Augen, hilft nur mehr Rechenpraxis.

## Befehlskarten sollten zuerst das passende Werkzeug abrufen, nicht die Syntax

Die Prüfungsziele führen Softwarewerkzeuge wie einen Protokollanalysator, `ping`, `traceroute` oder `tracert`, `nslookup`, `tcpdump`, `dig`, `netstat`, `ip`, `ifconfig`, `ipconfig`, `arp` und Nmap auf. Sie nennen außerdem Hardwarewerkzeuge und grundlegende Gerätebefehle wie `show route`, `show interface`, `show config`, `show arp` und `show vlan`.

Das ist eine gute Quelle für Karten, doch das Auswendiglernen von Befehlen kann schnell Scheinsicherheit erzeugen. Frage deshalb, welche Informationen das Werkzeug liefern soll.

```text
Vorderseite: Mit welchem Befehlszeilenwerkzeug aus N10-009 kannst du DNS abfragen,
wenn du die Namensauflösung testen musst?

Rückseite: Je nach System und Aufgabe `nslookup` oder `dig`.
```

```text
Vorderseite: Welches Befehlszeilenwerkzeug erfasst Pakete zur späteren Untersuchung?

Rückseite: `tcpdump`.
```

```text
Vorderseite: Welchen grundlegenden Gerätebefehl solltest du in Betracht ziehen,
wenn du Informationen zu VLANs benötigst?

Rückseite: `show vlan`. Die genaue Syntax und Ausgabe hängen von der Geräteplattform ab.
```

```text
Vorderseite: Welche zusätzlichen Informationen kann `traceroute` über einen einfachen
`ping`-Test hinaus liefern?

Rückseite: Die Abfolge der antwortenden Hops auf dem Weg zum Ziel. Sie kann helfen,
die Stelle zu finden, an der sich ein Pfad ändert oder endet. Behandle fehlende
Antworten als Hinweis, den du untersuchen musst, nicht als automatischen Beweis
dafür, dass ein Hop ausgefallen ist.
```

Teste den Befehl nach der Kartenwiederholung in einem Lab oder auf einem System, das du untersuchen darfst. Überlege vorher, welche Ausgabe du erwartest, lies das tatsächliche Ergebnis, ändere eine Bedingung und führe den Befehl erneut aus. Dieser kurze Ablauf vermittelt Berechtigungen, Optionen, Plattformunterschiede, Filterung und unübersichtliche Ausgaben – all das kann eine Karte nicht nachbilden. Der [Leitfaden zu Lernkarten für Terminalbefehle](/de/blog/how-to-learn-terminal-commands-with-flashcards/) erklärt diese Methode ausführlicher.

## Karten zur Fehlerbehebung sollten Unsicherheit bewahren

Mit 24 % ist die Fehlerbehebung im Netzwerk der größte Prüfungsbereich von N10-009. Die Prüfungsziele behandeln eine Methode zur Fehlerbehebung, Fehler an physischen Schnittstellen, Probleme mit Switching und Diensten, Leistungsprobleme, Softwarewerkzeuge, Hardwarewerkzeuge und Gerätebefehle.

Eine schwache Karte fragt: „Was verursacht Paketverlust?“ und erwartet eine lange Liste. Eine stärkere Karte nennt eine Beobachtung und fragt, welchen nächsten Schritt sie rechtfertigt.

```text
Vorderseite: Ein Client hat eine IPv4-Adresse im Bereich 169.254.x.x. Worauf
deutet das hin, und was solltest du als Nächstes untersuchen?

Rückseite: Der Client hat eine APIPA-/Link-Local-Adresse statt seiner erwarteten
Konfiguration. Prüfe die lokale Verbindung und den Weg zu DHCP. Die Adresse
allein identifiziert nicht die ausgefallene Komponente.
```

```text
Vorderseite: Ein Host ist über seine IP-Adresse erreichbar, aber nicht über
seinen Hostnamen. Welcher Dienst ist ein sinnvoller nächster Prüfschritt?

Rückseite: Die DNS-Namensauflösung. Prüfe die Clientkonfiguration und frage den
benötigten Eintrag ab, bevor du entscheidest, wo DNS fehlschlägt.
```

```text
Vorderseite: Die CRC-Fehler auf einer Schnittstelle nehmen weiter zu. Was
solltest du als Nächstes untersuchen?

Rückseite: Den physischen Pfad und die zugehörigen Schnittstelleninformationen,
darunter Verkabelung, Transceiver sowie Geschwindigkeits- oder Duplexeinstellungen.
Der Zähler allein grenzt den Fehler nicht auf eine Komponente ein.
```

Die Formulierung ist bewusst gewählt. „Worauf deutet das hin?“ oder „Was solltest du als Nächstes prüfen?“ trainiert das Schlussfolgern anhand von Indizien. „Was hat das verursacht?“ vermittelt häufig falsche Gewissheit auf Grundlage eines einzelnen Symptoms.

Auch aus der offiziellen Methode lassen sich sinnvolle Karten zur Reihenfolge erstellen:

```text
Vorderseite: Deine erste Theorie zur wahrscheinlichen Ursache bestätigt sich nicht.
Was folgt laut der N10-009-Methode zur Fehlerbehebung?

Rückseite: Stelle eine neue Theorie auf oder eskaliere.
```

Die Schritte auswendig zu können, ist nur der Anfang. Identifiziere in einem Lab das Problem, stelle eine Theorie auf und prüfe sie. Plane die Lösung und berücksichtige ihre Auswirkungen, setze sie um oder eskaliere, überprüfe die vollständige Funktionsfähigkeit, erwäge vorbeugende Maßnahmen und dokumentiere Erkenntnisse, Maßnahmen und Ergebnis. Bei einem echten Fehler steht selten die Nummer des Prüfungsziels dabei.

## Lernkarten ergänzen PBQ-Übungen, ersetzen sie aber nicht

CompTIA beschreibt [praxisbasierte Fragen](https://www.comptia.org/en-us/resources/test-policies/exam-development/performance-based-questions-explained/) als Aufgaben, die Problemlösung in Simulationen oder virtuellen Umgebungen prüfen. Eine PBQ kann Topologie, Konfiguration, Werkzeuge, Symptome und mehrere Entscheidungen kombinieren. Eine einzelne Karte mit Vorder- und Rückseite kann diese Arbeitssituation nicht nachbilden.

Nutze Lernkarten vor und nach **Network+-PBQ-Übungen**:

1. Rufe vor der Übung Ports, Befehle, Subnetting-Ankerwerte und Schritte zur Fehlerbehebung ab, die du möglicherweise brauchst.
2. Arbeite während der PBQ oder des Labs anhand der Hinweise, ohne das Deck zu öffnen.
3. Notiere danach den Hinweis, den du übersehen hast, die falsche Annahme und die Fähigkeit, die tatsächlich gefehlt hat.
4. Erstelle nur dann eine Korrekturkarte, wenn eine konkrete Wissenslücke beim Abrufen zum Fehler beigetragen hat.
5. Prüfe die Korrektur in einem anderen Szenario.

Angenommen, du hast das falsche Werkzeug gewählt, weil du nicht mehr wusstest, welcher Befehl DNS abfragt. Daraus lässt sich eine klare Korrekturkarte erstellen. Wenn du das Werkzeug kanntest, die Antwort aber nicht auswerten konntest, arbeite mit echten Ausgaben. Wenn du beim Subnetting die Netzwerkgrenze aus den Augen verloren hast, berechne mehr neue Netze. Wenn du das Gerät nicht konfigurieren konntest, kehre zum Lab zurück.

Kopiere keine legitime Übungsfrage in das Deck. Halte die wiederverwendbare Erkenntnis in deinen eigenen Worten fest und lass Rahmenszenario, Antwortmöglichkeiten und unverwechselbare Formulierung der Frage weg. Der Leitfaden zum [Umwandeln von Übungsfragen in Lernkarten](/de/blog/how-to-turn-practice-questions-into-flashcards/) beschreibt den vollständigen Ablauf.

Die offiziellen Prüfungsziele warnen außerdem vor unautorisiertem Material von Drittanbietern, das allgemein als Brain Dumps bezeichnet wird. Nutze die aktuellen Prüfungsziele, autorisierte Lern- und Übungsmaterialien, deine eigenen Beobachtungen aus Labs und deine eigenen Erklärungen. Das Auswendiglernen geleakter Fragen ist keine Vorbereitung auf Network+.

## So sieht ein praktischer Lernkreislauf für Network+ aus

Ein gutes wöchentliches System wechselt zwischen Abruftraining und praktischer Netzwerkarbeit. Stelle nicht erst das Deck fertig, um die Labs auf später zu verschieben.

Gehe für eine kleine Gruppe von Prüfungszielen so vor:

1. Lies das Prüfungsziel und lerne den Stoff aus einer aktuellen, legitimen Quelle.
2. Erstelle einige wenige Karten zu Fakten, Abgrenzungen und Werkzeugen, die du nicht sauber abrufen kannst.
3. Wiederhole fällige Karten vor dem praktischen Block.
4. Bearbeite eine Rechenaufgabe, eine Konfigurationsaufgabe, eine Paketübung oder ein Lab zur Fehlerbehebung.
5. Löse einige wenige legitime Szenariofragen oder PBQ-Übungen.
6. Ordne jeden Fehler ein, bevor du den passenden nächsten Schritt wählst.

| Was schiefging | Sinnvoller nächster Schritt |
| --- | --- |
| Du hast einen Port, eine Maske, ein Akronym oder den Zweck eines Befehls vergessen | Füge eine eng gefasste Karte hinzu oder überarbeite sie |
| Du hast zwei verwandte Konzepte immer wieder verwechselt | Füge eine Vergleichskarte hinzu |
| Das Subnetting war langsam oder fehlerhaft | Berechne neue Netze |
| Du hast eine Befehlsausgabe oder einen Paketmitschnitt falsch gelesen | Untersuche mehr echte Ausgaben und markiere den übersehenen Hinweis |
| Du konntest die Funktion nicht konfigurieren | Wiederhole das Lab von einem sauberen Ausgangszustand aus |
| Du hast in einem mehrstufigen Szenario den Überblick verloren | Bearbeite eine weitere Übung zur Fehlerbehebung oder eine PBQ |

FSRS ist in einem Lernplan für Network+ nützlich, sobald sich die Karten für geplante Wiederholungen eignen. Erstelle sie trotzdem selektiv. Der Scheduler kann künftige Wiederholungen an deinen bisherigen Wiederholungsverlauf anpassen; er kann weder eine mehrdeutige Frage retten noch eine praktisch ungeübte Netzwerkaufgabe für dich beherrschbar machen. Der [Leitfaden zur Funktionsweise von FSRS](/de/blog/what-is-fsrs/) erklärt den Scheduler und seine Grenzen.

Eine einfache Struktur ist ein Deck namens `N10-009` mit Tags wie `ports`, `subnetting`, `commands`, `operations`, `security`, `troubleshooting`, `practice-miss` und `lab-miss`. Ergänze auf versionsabhängigen Karten den Code des Prüfungsziels, wenn er dir bei der Überprüfung hilft. Tags sollten dir helfen, einen schwachen Bereich zu finden, nicht das gesamte PDF als Ordnerbaum nachbauen.

## Welche Rolle Flashcards Open Source App übernimmt

> **Offenlegung:** Flashcards Open Source App ist weder mit CompTIA verbunden noch von CompTIA empfohlen. Sie ist kein offizieller Network+-Kurs, keine Übungsprüfung und kein PBQ-Simulator.

[Flashcards Open Source App](/de/features/) übernimmt den Teil des Ablaufs, der das Abrufen trainiert: Karten mit Vorder- und Rückseite, Decks und Tags, die Wiederholung fälliger Karten mit FSRS, Offline-Lernen und Synchronisierung, portable Exporte und eine Self-Hosting-Option. In der App sollten die einzelnen Fakten und Entscheidungen liegen, die du vor der praktischen Arbeit abrufen möchtest.

Hier gibt es weder ein offizielles noch ein vorgefertigtes N10-009-Deck. Beginne mit den aktuellen CompTIA-Prüfungszielen und deinen eigenen Fehlern aus legitimen Lernmaterialien. [Erste Schritte](/de/docs/getting-started/) erklärt die gehostete und die selbst gehostete Nutzung, falls du dein Deck in Flashcards erstellen möchtest.

Wenn du für eine verwandte Zertifizierung lernst, wendet der [Leitfaden zu CompTIA-A+-Lernkarten](/de/blog/comptia-a-plus-flashcards/) dieselbe Abgrenzung zwischen Abruf und Übung auf die Arbeit von IT-Technikern an. Der [Leitfaden zu CCNA-Lernkarten](/de/blog/how-to-use-flashcards-for-ccna/) geht ausführlicher auf Routing, Switching und das Üben von Befehlen ein.

## FAQ zu Lernkarten für CompTIA Network+

### Welche Ports sollte ich auf N10-009-Lernkarten aufnehmen?

Beginne mit der Tabelle zu Ports und Diensten in den aktuellen offiziellen Prüfungszielen. Erstelle kleine Karten für die Zuordnungen, die du nicht abrufen kannst, und verbinde jede mit ihrer praktischen Aufgabe. Denke daran, dass die Beispiele in den Prüfungszielen nicht vollständig sind und eine Portnummer nicht beweist, welcher Dienst läuft.

### Reichen Network+-Lernkarten für Subnetting aus?

Nein. Nutze Karten für die Umrechnung von Präfixen in Masken, Blockgrößen, Hostzahlen und Regeln, die du wiederholt vergisst. Berechne neue Netze separat, damit du Netzwerkadresse, Broadcastadresse und nutzbaren Bereich bestimmen kannst, ohne eine einzelne Frage auswendig zu lernen.

### Können Lernkarten Network+-Labs oder PBQs ersetzen?

Nein. Karten können die nötigen Grundlagen schneller abrufbar machen. Labs und autorisierte PBQ-Übungen prüfen weiterhin Konfiguration, Berechnung, Navigation, das Sammeln von Informationen und mehrstufige Entscheidungen.

### Sollte ich für jedes N10-009-Prüfungsziel eine Karte erstellen?

Nutze die Prüfungsziele als Übersicht zur Stoffabdeckung, nicht als Abschreibaufgabe. Erstelle Karten für eng gefasste Fakten und Abgrenzungen, die du wiederholt abrufen musst. Für den Rest nutzt du Labs, Berechnungen, Paketmitschnitte, Szenarien und Übungsfragen.

### Wie sollte ich aus einer falsch beantworteten Übungsfrage eine Karte machen?

Identifiziere den kleinen Fakt, Hinweis oder Unterschied, der den Fehler verursacht hat. Formuliere in deinen eigenen Worten eine neue Frage, die nur diese Erkenntnis prüft. Kopiere weder die ursprüngliche Frage noch ihre Antwortmöglichkeiten oder ihr unverwechselbares Szenario.

## Baue dein Deck aus dem nächsten echten Fehler auf

Öffne die offiziellen Prüfungsziele für N10-009 und wähle einen kleinen Abschnitt. Lerne ihn und bearbeite danach eine Aufgabe, bei der Fehler sichtbar werden können: Berechne ein Subnetz, frage DNS ab, untersuche eine Route, erfasse Netzwerkverkehr, konfiguriere einen Switch oder behebe einen Fehler in einem defekten Lab.

Erstelle Karten zu den konkreten Punkten, an denen dein Abruf zu langsam war. Rechenaufgaben, Geräte, Ausgaben und Szenarien bleiben in der praktischen Einheit. Durch diese Trennung entstehen **N10-009-Lernkarten**, deren Wiederholung sich wirklich lohnt – und ein Lernplan für Network+, der weiterhin funktioniert, wenn das Problem größer ist als eine einzelne Antwort auf der Rückseite einer Karte.
