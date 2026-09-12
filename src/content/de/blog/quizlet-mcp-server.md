---
title: "Gibt es 2026 einen Quizlet-MCP-Server? Was Claude und Codex nutzen können"
description: "Quizlet dokumentiert 2026 keinen MCP-Server. So unterscheiden sich ChatGPT-App, Export für Ersteller und ein sicherer Weg für Claude oder Codex."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP-Server"
  - "Quizlet Claude Connector"
  - "Quizlet mit Claude verbinden"
  - "Quizlet Codex"
  - "Quizlet ChatGPT-App"
  - "Quizlet-API-Alternative"
---

Stand 12. September 2026 führt die öffentliche Dokumentation von Quizlet weder einen MCP-Server noch eine öffentliche Self-Service-API für Entwickler auf. Wer nach einer Quizlet-MCP-URL sucht, die sich in Claude, Codex oder einen anderen MCP-Client eintragen lässt, findet dort derzeit keine öffentliche Konfiguration.

Quizlet bietet zwar eine offizielle App in ChatGPT. Sie kann aus einer ChatGPT-Unterhaltung ein neues Quizlet-Set erstellen, ist aber kein wiederverwendbarer Quizlet-MCP-Server. Soll ein Agent regelmäßig auf vorhandene Karten zugreifen, bleibt als praktischer Weg: den Text eines selbst erstellten Sets exportieren, eine Rohkopie aufbewahren, die Übertragung prüfen und ein Karteikartensystem verwenden, das Lese- und Schreibzugriffe für Agenten ausdrücklich unterstützt.

**Fakten geprüft:** 12. September 2026.

> **Offenlegung:** Ich bin Kirill Markin und entwickle Flashcards Open Source App. Den MCP-Server und die Agent API der App stelle ich weiter unten als Alternativen vor. Flashcards kann sich weder mit einem Quizlet-Konto verbinden noch eine Quizlet-URL importieren.

![Eine Gärtnerin trägt eine junge Pflanze aus einem geschlossenen Gewächshaus zu einem Beet mit verzweigter Tröpfchenbewässerung](/blog/quizlet-mcp-server.png)

## ChatGPT-App, Export und MCP lösen unterschiedliche Aufgaben

Das [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) ist ein offener Standard, der KI-Anwendungen mit externen Systemen verbindet. Ein MCP-Server stellt kompatiblen Clients in der Regel einen festen Endpunkt und einen definierten Satz aufrufbarer Tools bereit.

Quizlets [offizielle Ankündigung zur ChatGPT-App](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) beschreibt einen anderen Ablauf: Du installierst die Quizlet-App in ChatGPT, beginnst einen Prompt mit `@Quizlet`, prüfst die generierten Karteikarten direkt in ChatGPT und öffnest das Set anschließend in Quizlet, um es anzupassen und damit zu lernen.

Das ist praktisch, wenn die Aufgabe lautet: „Verwandle diese ChatGPT-Unterhaltung in ein Quizlet-Set.“ Die Ankündigung nennt jedoch keinen allgemeinen Quizlet-MCP-Endpunkt, gibt Claude oder Codex keinen Zugriff auf deine Quizlet-Bibliothek und stellt keine wiederverwendbaren Zugangsdaten für Entwickler bereit.

Daraus lässt sich nichts über die private oder interne Infrastruktur von Quizlet ableiten. Es geht allein um die Schnittstellen in der öffentlichen Quizlet-Dokumentation. Wo die Grenzen des Entwicklerzugriffs darüber hinaus liegen, erklärt [Hat Quizlet 2026 eine öffentliche API?](/blog/quizlet-api/).

Der Unterschied lässt sich knapp zusammenfassen:

| Was du erreichen willst | Der derzeit am besten unterstützte Weg | Womit du rechnen kannst |
| --- | --- | --- |
| Aus einer ChatGPT-Unterhaltung ein neues Quizlet-Set erstellen | Offizielle Quizlet-App in ChatGPT | Ein eigener `@Quizlet`-Ablauf in ChatGPT; Bearbeiten und Lernen anschließend in Quizlet |
| Begriffe und Definitionen aus einem selbst erstellten Set übertragen | Export auf der Quizlet-Website | Eine einmalige Textkopie, die du aufbewahrst und prüfst |
| Claude, Codex oder einen anderen Agenten wiederholt Karteikarten lesen oder bearbeiten lassen | Ein Karteikartensystem mit dokumentiertem MCP-Server oder einer Agent API | Authentifizierter Zugriff auf den Arbeitsbereich im Zielsystem, nicht auf Quizlet |
| Software mit Quizlet-Kontodaten entwickeln | Auf offizielle Entwicklerdokumentation oder einen autorisierten Partnerweg warten | Derzeit ist weder eine öffentliche Self-Service-API noch eine MCP-Schnittstelle von Quizlet dokumentiert |

Die Quizlet-App in ChatGPT deckt einen klar umrissenen Erstellungsablauf ab. Der Export eignet sich für eine begrenzte Übertragung. MCP ermöglicht wiederholbaren Zugriff auf ein System, das seine Tools ausdrücklich dafür bereitstellt. Diese Wege sind nicht austauschbar.

## Wähle den kürzesten unterstützten Weg

Wenn die offizielle ChatGPT-App deine Aufgabe bereits erfüllt, nutze sie. Nur um aus einer Unterhaltung ein einzelnes Quizlet-Set zu erstellen, brauchst du kein zweites System.

Für eine Sicherung oder einmalige Übertragung reicht Quizlets Export. Soll ein Agent dagegen am nächsten Tag wiederkommen, ein Deck finden sowie Karten ergänzen und korrigieren, brauchst du im Zielsystem eine dokumentierte Schnittstelle mit Lese- und Schreibzugriff. Solange Quizlet keine solche Schnittstelle veröffentlicht, lässt sich dieser wiederkehrende Ablauf nicht als unterstützte Direktverbindung zu deinem Quizlet-Konto umsetzen.

Für maßgeschneiderte Software rund um Quizlet-Daten gilt dieselbe Grenze. Eine Browseranfrage, ein alter Wrapper oder eine per Reverse Engineering entwickelte Integration ersetzt keine aktuelle Entwicklerdokumentation.

## Halte den Export deines eigenen Sets reversibel

Laut Quizlets [offizieller Exportanleitung](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) kann nur der Ersteller ein Set exportieren, und das ausschließlich auf der Website. Der Ablauf lautet **Mehr → Exportieren → Text kopieren**. Der Export enthält Begriffe und Definitionen; Bilder lassen sich laut Quizlet nicht exportieren, kopierte Sets ebenfalls nicht.

Für ein selbst erstelltes Set ist eine vorsichtige Übertragung schnell erledigt:

1. Nutze den Export auf der Quizlet-Website und füge das Ergebnis in eine reine Textdatei ein.
2. Speichere eine unveränderte UTF-8-Kopie, bevor du Trennzeichen, Zeilenumbrüche oder Formulierungen änderst.
3. Bearbeite ein Duplikat, nicht den Rohexport.
4. Prüfe Stichproben vom Anfang, aus der Mitte und vom Ende sowie mehrzeilige Definitionen und nichtlateinische Zeichen.
5. Importiere die Arbeitskopie oder hänge sie an. Prüfe einige Vorder- und Rückseiten in der Vorschau und speichere die Karten erst danach.
6. Bewahre das Quizlet-Set und die Rohdatei auf, bis du das Zieldeck geöffnet und getestet hast.

Alle Prüfungen zu Trennzeichen, CSV und Dateien findest du unter [So exportierst du Quizlet-Sets 2026](/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/). Der leicht zu übersehende Punkt: Der Export überträgt den Kartentext, aber keine Quizlet-Bilder, Ordner, Lernverläufe, Beherrschungsstände oder Wiederholungsplanung.

Genau deshalb sollte die Übertragung reversibel bleiben. Wenn aus einer mehrzeiligen Definition zwei Karten werden oder ein verrutschtes Trennzeichen die Felder falsch aufteilt, hast du mit der Rohdatei weiterhin eine saubere Referenz.

## Was Claude und Codex nach dem Export nutzen können

Flashcards Open Source App stellt einen Remote-MCP-Endpunkt bereit:

`https://mcp.flashcards-open-source-app.com/mcp`

Die [Dokumentation des MCP-Connectors](/docs/mcp-connector/) beschreibt drei Tools: `list_workspaces`, `sql_query` für Lesezugriffe und `sql_execute` für Schreibzugriffe. Interaktive MCP-Clients können die Verbindung per OAuth autorisieren. Terminal-Agenten können stattdessen bei der [Dokumentation der Agent API](/docs/api/) einsteigen und den dort beschriebenen HTTP-Ablauf verwenden.

Damit wird Flashcards nicht zu einem Quizlet-Connector. Der unterstützte Ablauf sieht so aus:

1. Exportiere den Text aus einem Quizlet-Set, das du selbst erstellt hast.
2. Bewahre die Rohdatei auf und prüfe eine Arbeitskopie.
3. Prüfe die zugeordneten Karten, bevor du sie in Flashcards speicherst.
4. Verbinde den so angelegten Flashcards-Arbeitsbereich für künftige Lese- und Schreibzugriffe mit einem kompatiblen Client.

Die einzelnen Schritte für Claude findest du unter [So verbindest du Flashcards über MCP mit Claude](/blog/how-to-connect-flashcards-to-claude-with-mcp/). Codex und andere Agenten können den dokumentierten MCP- oder Agent-API-Weg verwenden, den ihre jeweilige Umgebung unterstützt.

Flashcards kann keine Quizlet-URL auslesen, kein Quizlet-Konto spiegeln, spätere Änderungen in Quizlet synchronisieren oder Bilder und Lernverläufe wiederherstellen, die im Export fehlen. Aus dem Material, das du überträgst, erstellt Flashcards eigene Karten und einen neuen Planungsstatus.

Wenn du abwägst, ob sich dieser Tausch über den Agentenzugriff hinaus lohnt, hilft dir der [Vergleich mit der Open-Source-Alternative zu Quizlet](/blog/quizlet-alternative/).

## Begrenze die Berechtigungen enger als die Aufgabe

Eine öffentlich dokumentierte Schnittstelle räumt zwar einige Unklarheiten bei der Integration aus, macht aber nicht jede MCP-Aktion automatisch sicher. OAuth authentifiziert die Verbindung. Es garantiert weder, dass eine KI-generierte Karte korrekt ist, noch sorgt es dafür, dass abgerufene Kartendaten im Karteikartendienst bleiben. Ob eine Änderung deiner Absicht entspricht, entscheidet OAuth ebenfalls nicht.

Flashcards trennt Lesevorgänge vom Schreib-Tool `sql_execute`. Die OAuth-Berechtigung gilt trotzdem für den gesamten Connector; deshalb hängen Toolsperren und Freigaberegeln vom jeweiligen Client ab. Beginne mit einem kleinen, nicht vertraulichen Arbeitsbereich. Lass den Agenten nur die Daten lesen, die er für seine Aufgabe braucht. Wenn der Client es unterstützt, verlange für jeden Schreibzugriff eine eigene Freigabe, und prüfe vor der Bestätigung sowohl den Arbeitsbereich als auch die vorgeschlagene Änderung.

Verbinde keine privaten Lernmaterialien, bevor du die Aufbewahrungs- und Datenverarbeitungsregeln des KI-Clients geprüft hast. Das ausführliche Bedrohungsmodell findest du unter [Ist MCP für Flashcards sicher?](/blog/is-mcp-safe-for-flashcards/). Für die erste Übertragung genügt eine einfache Regel: Bewahre den Rohexport auf, prüfe einige Karten in der Vorschau, genehmige einen eng begrenzten Schreibvorgang und kontrolliere das Ergebnis in der Ziel-App, bevor du weitermachst.

## Behandle private Browser-Anfragen nicht als API

Eine Anfrage, die in den Entwicklerwerkzeugen des Browsers sichtbar ist, ist noch keine öffentliche Quizlet-API. Private Endpunkte können von Sitzungscookies, internen Formaten und Verhalten abhängen, das sich ohne Vorwarnung ändert. Jede automatisierte Nutzung muss außerdem mit den [Nutzungsbedingungen von Quizlet](https://quizlet.com/tos) und deinen Berechtigungen für das Material vereinbar sein.

Dieser Artikel enthält weder Scraping-Anleitungen noch per Reverse Engineering ermittelte Endpunkte. Wenn die offizielle ChatGPT-App deine Aufgabe erfüllt, nutze sie. Wenn du das Set selbst erstellt hast und es einmalig übertragen möchtest, exportiere es. Für wiederkehrende Lese- und Schreibzugriffe durch Agenten überträgst du geprüfte Inhalte in ein System, das diese Schnittstelle veröffentlicht. Den Quizlet-Teil erledigst du weiterhin manuell, solange Quizlet nichts Neues dokumentiert.
