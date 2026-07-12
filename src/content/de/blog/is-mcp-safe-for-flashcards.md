---
title: "Ist MCP für Flashcards sicher? Berechtigungen, Datenschutz und Schreibzugriff 2026"
description: "Ist MCP für Flashcards sicher? Was OAuth schützt, welche Daten KI-Clients lesen oder ändern können und wie du Datenschutz- und Schreibrisiken begrenzt."
date: "2026-07-12"
image: "/blog/is-mcp-safe-for-flashcards.png"
keywords:
  - "ist MCP für Flashcards sicher"
  - "MCP-Sicherheit für Flashcards"
  - "MCP-Datenschutz"
  - "OAuth-Sicherheit bei MCP"
  - "MCP-Nur-Lese-Zugriff"
  - "MCP-Schreibzugriff"
  - "Datenschutz bei KI-Lernkarten"
  - "Prompt Injection bei MCP"
---

Am 20. Mai 2026 veröffentlichte die NSA einen 17-seitigen Sicherheitsleitfaden zum Model Context Protocol. Das ist relevant, sobald ein Deck mehr als allgemein zugängliche Vokabeln enthält: Eine MCP-Verbindung zu Flashcards kann Karten, Workspace-Metadaten und den Wiederholungsverlauf an einen KI-Client senden. Dieselben Zugangsdaten gewähren Vollzugriff auf den Connector. Damit kann der Client auch ein Tool aufrufen, das Karten verändert oder als gelöscht markiert. Für die Frage **Ist MCP für Flashcards sicher?** sind zwei Punkte entscheidend: Dürfen diese Daten den gewählten Client erreichen, und kann der Client das Schreib-Tool nutzen?

OAuth sichert die Autorisierung und den Token-Austausch ab. Der Flashcards-Server begrenzt, was seine Tools tun dürfen. Doch weder OAuth noch diese Serverregeln können beurteilen, ob eine vorgeschlagene Änderung sinnvoll ist, abgerufene Daten in Flashcards halten oder dafür sorgen, dass ein KI-Client vor einem Schreibvorgang um Erlaubnis fragt.

Maßgeblich sind die konkreten Grenzen jedes Tools, die von Flashcards erzwungenen Regeln und die Schutzmaßnahmen, die allein der Client bereitstellt.

![Warmer Schreibtisch mit getrennten Bereichen für Lese- und Schreibzugriff über Flashcards MCP](/blog/is-mcp-safe-for-flashcards.png)

## Ist MCP für Flashcards sicher? Der tatsächliche Datenweg

An einer Remote-MCP-Sitzung können vier Rollen beteiligt sein:

1. du
2. die KI-Anwendung oder der MCP-Client, in dem du die Anfrage stellst
3. gegebenenfalls ein Modellanbieter, wenn die Modellverarbeitung außerhalb dieses Clients stattfindet
4. der Flashcards-MCP-Server samt Backend

Manche Produkte vereinen die Rollen von Client und Modellanbieter. Andere leiten Tool-Ergebnisse an einen separaten Dienst weiter. Fest steht nur dieser Schritt: Flashcards sendet die angeforderten Daten an den authentifizierten MCP-Client. Was danach geschieht, hängt von dessen Architektur, Tarif und Einstellungen ab. Das Ergebnis kann in den Kontext eines Modells gelangen, innerhalb der Infrastruktur eines einzigen Anbieters bleiben oder an einen weiteren Datenverarbeiter weitergegeben werden.

Praktisch geht es um drei Risiken. Ein Lesezugriff kann Kartentexte, die Deckstruktur, Workspace-Einstellungen oder Wiederholungsereignisse offenlegen. Ein Schreibzugriff kann unerwünschte Karten erstellen, Inhalte ändern oder Karten und Decks als gelöscht markieren. Außerdem kann der Agent deine Anfrage missverstehen oder Anweisungen aus importiertem Material für Befehle halten.

Der [NSA-Leitfaden zu MCP vom Mai 2026](https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/) unterscheidet hier sinnvoll: Authentifizierung, Autorisierung und Validierung bleiben notwendig. Die Risiken dynamischer Tool-Aufrufe, gemeinsam genutzter Kontexte und impliziten Vertrauens können diese Kontrollen jedoch nicht ausräumen. Bei einem öffentlichen Vokabeldeck kann die Entscheidung deshalb anders ausfallen als bei einem Deck aus vertraulichen Kundennotizen.

## Was OAuth bei Flashcards absichert

Für interaktive MCP-Clients nutzt Flashcards einen Authorization-Code-Flow mit PKCE und Dynamic Client Registration. Du bestätigst die Verbindung im Browser, und PKCE bindet den Code-Austausch an den Client, der ihn gestartet hat. Außerdem prüft der Server, ob das Access-Token für die Flashcards-MCP-Ressource ausgestellt wurde. Der [Leitfaden zum Flashcards-MCP-Connector](/de/docs/mcp-connector/) nennt den Endpunkt und die Discovery-Metadaten.

Diese Maßnahmen sichern die Anmeldung und den Token-Austausch ab. Die stabile [MCP-Autorisierungsspezifikation vom 25. November 2025](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization) verlangt für diesen Ablauf PKCE und ressourcenspezifische Token. Zugleich ist Autorisierung bei MCP-Implementierungen grundsätzlich optional. OAuth in diesem Connector sagt daher nicht aus, wie ein anderer MCP-Server den Zugriff absichert.

Flashcards weist derzeit genau einen OAuth-Scope aus: `flashcards`. Separate Berechtigungen für Lese- und Schreibzugriff gibt es nicht; dieser Scope gewährt Vollzugriff auf den Connector. „Nur lesend“ ist eine Verbindung deshalb nur dann, wenn der KI-Client `sql_execute` deaktiviert oder blockiert. Serverseitig ist lediglich garantiert, dass `sql_query` nicht schreiben kann. Sendet der Client einen Aufruf an `sql_execute`, berechtigen dieselben Zugangsdaten auch dazu.

Das Blockieren einzelner Tools im Client ist trotzdem sinnvoll. Die OAuth-Freigabe selbst bleibt dabei unverändert. Ein bösartiger oder kompromittierter Client mit den Zugangsdaten bleibt von dieser Einstellung unberührt.

## Was die drei Flashcards-MCP-Tools tatsächlich können

Der Connector erlaubt keinen beliebigen PostgreSQL-Zugriff, sondern nur einen vom Parser durchgesetzten SQL-Dialekt. Seine drei Tools haben klar getrennte Zugriffsbereiche:

| Tool | Zugriff | Ändert Daten? | Vorsichtige Client-Einstellung |
| --- | --- | --- | --- |
| `list_workspaces` | Listet bis zu 100 Workspaces auf, auf die der Nutzer zugreifen kann: ID, Name, Anzahl aktiver Karten, letzte Aktivität und Standard-Workspace | Nein | Nur aktivieren, wenn der Client diese Kontometadaten erhalten darf |
| `sql_query` | Liest `workspace`, `cards`, `decks` und `review_events` innerhalb eines angegebenen Workspaces | Nein | Für eine klar definierte Leseaufgabe aktivieren und nur die benötigten Spalten anfordern |
| `sql_execute` | Fügt Datensätze in `cards` und `decks` ein, aktualisiert sie oder markiert sie als gelöscht, jeweils innerhalb eines angegebenen Workspaces | Ja | Deaktiviert lassen, sofern der Client Schreibvorgänge nicht auf eine für dich akzeptable Weise begrenzen kann |

Der [MCP-Leitfaden](/de/docs/mcp-connector/) und die [API-Referenz](/de/docs/api/) beschreiben den öffentlich dokumentierten Dialekt. Für die Sicherheitsbewertung sind außerdem einige Details der Implementierung wichtig.

### Wie die Workspace-Auswahl wirklich funktioniert

Jeder SQL-Aufruf betrifft genau einen Workspace. Vor der Ausführung prüft Flashcards erneut, ob der Nutzer noch darauf zugreifen darf. Die ID eines fremden Workspaces allein reicht also nicht für den Zugriff.

Der ausgewählte Workspace ist allerdings nur die Voreinstellung. Fehlt `workspaceId`, nutzt das Tool diesen Workspace. Mit einer ausdrücklich angegebenen ID kann dieselbe Verbindung jeden Workspace ansprechen, auf den der Nutzer zugreifen kann. `list_workspaces` liefert IDs nur für die Workspaces im Ergebnis; die Begrenzung auf 100 Ergebnisse ist jedoch keine Isolationsgrenze, denn mit einer ausdrücklich angegebenen `workspaceId` lässt sich weiterhin jeder Workspace ansprechen, auf den der Nutzer zugreifen kann.

Ein Test-Workspace hilft trotzdem dabei, die Darstellung von Tool-Aufrufen im Client kennenzulernen. Bleibt ein Aufruf dort, sind die Folgen eines versehentlichen Fehlers kleiner. Eine harte Isolationsgrenze ist er nicht: Dieselbe Verbindung kann einen anderen zugänglichen Workspace angeben. Für strikte Trennung brauchst du ein anderes Konto ohne Zugriff auf den echten Workspace oder eine separate Bereitstellung.

### Was ein Nur-Lese-Zugriff trotzdem preisgeben kann

`list_workspaces` und `sql_query` können Kartendaten nicht verändern. Sie können auch keine Daten reparieren oder die Planung neu berechnen. Ohne `sql_execute` senkt diese serverseitige Trennung das Risiko versehentlicher Datenbankänderungen deutlich.

Die Ergebnisse verlassen trotzdem das Flashcards-Backend. Eine Abfrage zu schwachen Themen kann Kartentexte und Wiederholungsereignisse enthalten. Selbst eine kurze Karte kann Patientendaten, den Namen eines internen Systems, ein privates Sprachbeispiel oder Notizen für ein Bewerbungsgespräch enthalten.

Die [Datenschutzerklärung von Flashcards](/de/privacy/) gilt auch für Daten, die über MCP und die Agent API angefordert werden. An der Protokollgrenze übermittelt Flashcards das Ergebnis an den MCP-Client. Ob es danach auch ein separater Modellanbieter erhält, wie lange der jeweilige Dienst es speichert und ob es für Training verwendet werden darf, hängt vom Client-Setup und den Bedingungen des Anbieters ab. Behandle „nur lesend“ deshalb nicht als Datenschutzversprechen.

### Schreibzugriff ist enger begrenzt als voller Datenbankzugriff

`sql_execute` erlaubt `INSERT`, `UPDATE` und `DELETE`, aber ausschließlich für `cards` und `decks`. Für `workspace` und `review_events` besteht nur Lesezugriff. Auch die Planungsfelder von Karten – darunter Fälligkeitstermine, Anzahl der Wiederholungen und der persistierte FSRS-Zustand – lassen sich über diesen Dialekt nur lesen. MCP kann weder eine Wiederholung als Lernereignis verbuchen noch den FSRS-Planungszustand direkt überschreiben.

Für `UPDATE` und `DELETE` ist eine `WHERE`-Klausel Pflicht. Damit fällt nur die völlig ungefilterte Anweisung weg; eine gültige, weit gefasste Bedingung kann weiterhin viele Zeilen treffen. Der Parser kann nicht erkennen, ob der Filter deiner Absicht entspricht.

Bei `cards` und `decks` setzt `DELETE` einen Löschzeitstempel (Tombstone), den die Synchronisierung verwendet; die Datenbankzeile wird nicht sofort entfernt. Gelöschte Einträge verschwinden aus den aktiven Daten. Über MCP lassen sie sich weder rückgängig machen noch wiederherstellen. Nach einer versehentlichen Löschung bleibt daher nur die Wiederherstellung auf anderem Weg oder aus einem Backup.

Die [Nutzungsbedingungen](/de/terms/) fordern Nutzer auf, KI-generierte Ausgaben vor einer Änderung zu prüfen. Das ist hier besonders wichtig: Flashcards kann Anweisungstyp, Ressource, Spalten und Zeilenlimit validieren. Ob die Änderung inhaltlich gewollt ist, kann der Server nicht beurteilen.

## Freigaben liegen allein beim Client

Flashcards kennzeichnet `sql_query` mit `readOnlyHint` und `sql_execute` mit `destructiveHint`. Im stabilen [MCP-Schema vom 25. November 2025](https://modelcontextprotocol.io/specification/2025-11-25/schema) sind Tool-Annotationen ausdrücklich als Hinweise definiert. Ein kompatibler Client kann daraus seine Freigaberegeln ableiten; erzwingen können die Annotationen nichts.

Sobald Flashcards einen gültigen, authentifizierten `sql_execute`-Aufruf erhält, führt der Server ihn sofort aus. Flashcards zeigt keinen zweiten Bestätigungsbildschirm. Eine menschliche Freigabe kann daher nur der KI-Client einholen, bevor die Anfrage den Server erreicht.

Wie das aussieht, hängt vom Client ab. OpenAIs [Dokumentation zum Entwicklermodus](https://developers.openai.com/api/docs/guides/developer-mode) erklärt beispielsweise, dass Schreibaktionen standardmäßig bestätigt werden müssen und Nutzer eine Entscheidung für eine Unterhaltung speichern können. Laut der [Hilfeseite zu MCP-Apps](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt-beta) hängen Freigabeaufforderungen von App-Berechtigungen, Kontext und Workspace-Kontrollen ab. Andere Clients bieten abweichende Kontrollen oder gar keine.

Nutze die strengste Option, die dein Client tatsächlich anbietet:

- Kann der Client einzelne Tools deaktivieren, lass `sql_execute` ausgeschaltet, bis eine Aufgabe es benötigt.
- Kann er vor jeder Änderung eine Freigabe verlangen, wähle diese Einstellung und lass Freigabeentscheidungen für Schreibvorgänge nicht speichern.
- Zeigt er einen geplanten Aufruf an, prüfe `workspaceId`, jede Anweisung, die `WHERE`-Bedingungen und die erwartete Anzahl passender Datensätze.
- Kann er das Schreib-Tool nicht blockieren oder vor Aufrufen nicht zuverlässig pausieren, behandle die Verbindung von Anfang an als schreibberechtigt.

Diese Einstellungen verringern die Wahrscheinlichkeit eines Fehlers. Ob die Modellausgabe sinnvoll ist, muss trotzdem ein Mensch beurteilen.

## Was 100 Zeilen pro Anweisung wirklich bedeuten

Eine Anweisung kann höchstens 100 Datensätze zurückgeben oder verändern. Ein Batch darf bis zu 50 Anweisungen enthalten. Ein einziger authentifizierter Tool-Aufruf kann damit theoretisch 100 × 50 = 5.000 Datensätze verändern, wenn jede Anweisung ihre Obergrenze erreicht. Das geht weit über die Bestätigung für eine einzelne Karte hinaus.

Ein Batch mit Änderungen ist atomar: Entweder werden alle Anweisungen erfolgreich ausgeführt oder die Transaktion schlägt fehl. So bleibt bei einem Fehler kein nur teilweise ausgeführter Batch zurück. Die Atomarität prüft jedoch keine Absicht und kann einen erfolgreich festgeschriebenen Batch nicht rückgängig machen.

Zusätzlich ist das serialisierte Ergebnis auf 48.000 Zeichen begrenzt. Diese Grenze greift erst nach dem Ausführen der Änderung und begrenzt nur die MCP-Antwort. Eine Änderung kann also bereits festgeschrieben sein, bevor ein zu großes Ergebnis abgelehnt wird. Für die möglichen Auswirkungen zählt deshalb das Limit von 100 Zeilen pro Anweisung. Prüfe breite Zielmengen vor dem Schreiben mit `sql_query`.

## Prompt Injection kann im Lernmaterial stecken

Lernkarten bestehen aus natürlicher Sprache – genau dem Material, das ein KI-Client interpretiert. Importierte Notizen können versteckte Anweisungen, zitierte Prompts oder Texte von nicht vertrauenswürdigen Autoren enthalten. Liest ein Agent solches Material, während ein Schreib-Tool verfügbar ist, kann er Daten fälschlich als neuen Befehl auffassen.

OAuth muss dafür nicht versagen. Der autorisierte Client darf den Schreibvorgang bereits versuchen.

Der [vollständige MCP-Sicherheitsbericht der NSA](https://www.nsa.gov/Portals/75/documents/Cybersecurity/CSI_MCP_SECURITY.pdf) stuft Tool- und Modellausgaben als nicht vertrauenswürdige Eingaben für den nächsten Verarbeitungsschritt ein. Er empfiehlt strikte Ressourcengrenzen, Parametervalidierung, eine sorgfältige Prüfung von Ausgaben und minimale Berechtigungen. Diese Maßnahmen senken das Risiko, können Prompt Injection aber nicht ausschließen.

Flashcards setzt auf Serverseite einige nützliche Grenzen. Der Parser weist nicht unterstützte Anweisungstypen und Ressourcen zurück, und das MCP-Tool kann weder zu einer Shell noch zu einer uneingeschränkten Datenbankverbindung werden. Eine eingeschleuste Anweisung kann trotzdem eine syntaktisch gültige Änderung an zugänglichen Karten verlangen. Der Server sieht den erlaubten Aufruf, nicht aber die Unterhaltung, die das Modell dazu gebracht hat.

Beschränke Sitzungen mit sensiblen Daten auf eine vertrauenswürdige Quelle, einen klar festgelegten Workspace und die Tools, die für die Aufgabe nötig sind. Kombiniere keinen nicht vertrauenswürdigen Import, themenfremde Connectoren und unbeaufsichtigte Schreibvorgänge in Flashcards im selben Agentenlauf. Das schafft keine Isolationsgrenze, macht verdächtige Aufrufe aber leichter erkennbar.

## Dein Client- und Modell-Setup bestimmt die Datenschutzgrenze

Flashcards bleibt die maßgebliche Datenquelle, gibt angeforderte Inhalte aber an den MCP-Client weiter. Ab dort hängt die Verarbeitung vom Produkt ab. Der Client kann das Modell selbst betreiben, einen separaten Anbieter aufrufen, Tool-Ergebnisse im Unterhaltungsverlauf speichern, sie Workspace-Administratoren zugänglich machen oder in eine Memory-Funktion einbeziehen. Je nach Architektur verläuft die Datenschutzgrenze deshalb an einer anderen Stelle.

OpenAI ist ein konkretes Beispiel. Laut der aktuellen [Dokumentation zu Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connector) können abgerufene App-Daten als Antwortkontext dienen und mit Memory oder der Websuche interagieren. Die Dokumentation beschreibt außerdem unterschiedliche Voreinstellungen für das Training: Für Business-, Enterprise- und Edu-Konten gelten andere Vorgaben als für persönliche Tarife mit aktivierter Option „Improve the model for everyone“. Diese Regeln gelten für OpenAI, nicht für MCP allgemein.

Prüfe den konkreten Client, den Kontotyp, die Workspace-Richtlinie, die Region und die Einstellungen, die du verwenden willst. Achte auf Speicherfristen, Training, Memory, Administratorzugriff, Unterauftragsverarbeiter und Löschung. Wenn die Dokumentation nicht beantwortet, ob vertrauliches Ausgangsmaterial den Client verlassen kann, teste diese Frage nicht mit einem echten Deck.

Das gehostete Konto zu löschen, den Connector zu trennen und Kopien bei weiteren Diensten zu löschen sind drei verschiedene Vorgänge. Die [Datenschutzerklärung von Flashcards](/de/privacy/) beschreibt die Löschung gehosteter Daten. Flashcards kann keine Daten entfernen, die ein Client oder Modellanbieter bereits gespeichert hat; nutze dafür auch die Einstellungen des jeweiligen Anbieters.

## Verbindung trennen und Zugangsdaten widerrufen sind nicht dasselbe

Die aktuelle OAuth-Implementierung von Flashcards stellt Access-Token mit einer Laufzeit von einer Stunde und rotierende Refresh-Token ohne festes Ablaufdatum aus. Flashcards bietet derzeit weder eine Benutzeroberfläche zum Widerrufen von OAuth-Verbindungen noch einen öffentlichen Widerrufs-Endpunkt. Entfernst du den Connector, verwirft der Client möglicherweise seine Zugangsdaten. Diese clientseitige Aktion garantiert nicht, dass die Token auch serverseitig ungültig werden.

Die `fca_`-API-Schlüssel für Headless-Agenten sind eine eigene Art von Zugangsdaten. Diese Schlüssel kannst du in Flashcards unter **Agent Connections** widerrufen. Halte die beiden Authentifizierungswege auseinander, wenn du Zugriffe dokumentierst oder beendest.

Falls dein Bedrohungsmodell einen sofortigen serverseitigen OAuth-Widerruf verlangt, bietet der aktuelle OAuth-Connector diese Kontrolle nicht. Für eine sensible, langfristige Verbindung wiegt diese Einschränkung schwerer als für ein öffentliches Testdeck, das sich leicht ersetzen lässt.

## Eine praktische Checkliste vor der Verbindung

1. Ordne das Ausgangsmaterial ein. Öffentliche Lernnotizen, personenbezogene Daten, vertrauliche Inhalte des Arbeitgebers und regulierte Daten sollten nicht derselben Zugriffsrichtlinie unterliegen. Wenn du das Material nicht an den Client und seine Datenverarbeiter senden darfst, stelle es nicht über MCP bereit.
2. Prüfe die Server-URL. Der dokumentierte Endpunkt lautet `https://mcp.flashcards-open-source-app.com/mcp`. Meide zum Verwechseln ähnliche Domains und Connector-Definitionen aus unbekannten Quellen.
3. Lies die Richtlinien auf beiden Seiten. Beginne mit der [Datenschutzerklärung von Flashcards](/de/privacy/) und prüfe dann für den konkreten KI-Client die Regeln zu Speicherfristen, Training, Memory, Protokollierung und Löschung.
4. Entscheide, ob ein zusätzlicher Workspace genügt. Für einen Probelauf ist er nützlich, doch die Verbindung kann jeden anderen zugänglichen Workspace desselben Kontos ansprechen. Nutze ein separates Konto oder eine separate Bereitstellung, wenn du strikte Isolation benötigst.
5. Blockiere `sql_execute` zunächst im Client. Kann der Client das Tool nicht blockieren, bedenke vor dem Herstellen der Verbindung, dass die OAuth-Zugangsdaten weiterhin Schreibzugriff erlauben.
6. Fordere nur die nötigsten Daten an. Wähle ausschließlich die Spalten und Zeilen aus, die für die Antwort erforderlich sind, und halte vertrauliche Informationen, die nichts mit der Aufgabe zu tun haben, aus der Unterhaltung heraus.
7. Erstelle vor Massenänderungen ein getestetes Backup. Der [Leitfaden zur Sicherung von Flashcards](/de/blog/how-to-back-up-flashcards/) beschreibt den umfassenderen Ablauf.
8. Prüfe jede breit angelegte Aktualisierung oder Löschung zuerst mit `sql_query`. Bevorzuge eindeutige Karten- oder Deck-IDs, gleiche die Anzahl der Treffer mit deiner Erwartung ab und teile die Änderung in kleine Anweisungen auf.
9. Nutze Client-Freigaben, wenn es sie gibt. Bestätige jedes Mal den Workspace und die vollständige Nutzlast; verlass dich nicht darauf, dass `destructiveHint` eine Nachfrage erzwingt.
10. Beende den Zugriff bewusst. Trenne den OAuth-Connector und entferne seine gespeicherten Zugangsdaten aus dem Client. Beachte dabei die aktuelle Einschränkung beim serverseitigen Widerruf. Widerrufe `fca_`-Schlüssel unter **Agent Connections** und kümmere dich getrennt um Daten, die der Client oder Modellanbieter gespeichert hat.

Die nächsten Einrichtungsschritte stehen in [So verbindest du Flashcards mit Claude über MCP](/de/blog/how-to-connect-flashcards-to-claude-with-mcp/). Der Leitfaden erklärt die einzelnen Klicks; diese Checkliste hilft dir bei der Entscheidung, ob die Verbindung für ein bestimmtes Deck geeignet ist.

## Wo Open Source und Self-Hosting helfen

Der Flashcards-Connector hat einige nützliche Eigenschaften: getrennte Lese- und Schreib-Tools, eine feste Liste erlaubter Anweisungen, die Prüfung der Workspace-Mitgliedschaft bei jedem Aufruf, nur lesbare Planungsfelder und öffentlich zugänglichen Quellcode. Dadurch lässt sich sein Zugriffsbereich leichter prüfen und begrenzen. Diese Kontrollen senken das Risiko; sie können weder einen sicheren Client noch eine richtige Entscheidung des Modells garantieren.

Eine [selbst gehostete Bereitstellung](/de/docs/self-hosting/) kann Speicherung und Betrieb von Flashcards auf eine von dir kontrollierte Infrastruktur verlagern. Abfragen an einen externen KI-Dienst übertragen Kartendaten trotzdem aus dieser Bereitstellung heraus. Für die Verarbeitung durch Modell und Client muss deshalb derselbe Datenschutzstandard gelten wie für die Datenbank.

## Eine einfache Entscheidungsregel

Nutze die MCP-Lese-Tools nur, wenn die angeforderten Daten über den gewählten Weg an den Client gelangen dürfen, du die Bedingungen des Anbieters akzeptierst und die Aufgabe diese Weitergabe rechtfertigt. Solange dein Client `sql_execute` nicht tatsächlich blockiert, gilt die Verbindung als Vollzugriff.

Aktiviere das Schreib-Tool nur für eine eng begrenzte Aufgabe, wenn der Client vor jedem wichtigen Aufruf pausieren kann, du die Zielzeilen vorab geprüft hast und ein brauchbares Backup vorhanden ist. Ein Batch kann weit mehr als 100 Datensätze erfassen, und eine Löschung lässt sich über MCP nicht rückgängig machen.

Verzichte auf die Verbindung, wenn das Deck nicht mit dem Client oder seinen Datenverarbeitern geteilt werden darf, die Regeln für die weitere Verarbeitung unklar sind, auf demselben Konto strikte Workspace-Isolation nötig ist, ein sofortiger OAuth-Widerruf zwingend erforderlich ist oder der Ablauf unbeaufsichtigte destruktive Schreibvorgänge voraussetzt. Nutze Flashcards in diesen Fällen ohne MCP oder wähle eine Bereitstellung und einen Modellpfad, deren gesamter Datenfluss deine Anforderungen erfüllt.
