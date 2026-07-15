---
title: "KI-Tutor für Karteikarten 2026: Claude fragt fällige Karten per MCP ab"
description: "Nutze Claude per MCP als KI-Tutor: Lade bis zu zehn fällige Karteikarten, beantworte sie einzeln und speichere deine FSRS-Bewertungen danach in der App."
date: "2026-07-15"
image: "/blog/ai-flashcard-tutor-due-cards.png"
keywords:
  - "KI-Tutor für Karteikarten"
  - "KI fragt Karteikarten ab"
  - "Karteikarten mit KI abfragen"
  - "Spaced-Repetition-Tutor"
  - "Claude Flashcards MCP"
  - "eigene Karteikarten mit Claude lernen"
  - "fällige Karteikarten mit KI wiederholen"
  - "MCP-Tutor für Karteikarten"
---

Zehn Karten, die gerade zur Wiederholung anstehen. Eine Frage auf dem Bildschirm. Die gespeicherte Antwort bleibt verborgen, bis du geantwortet hast.

Das ist die sinnvolle Form eines **KI-Tutors für Karteikarten** im Jahr 2026: Verbinde Claude per MCP mit deinen eigenen Daten in Flashcards, lade über einen Nur-Lese-Aufruf eine kleine Momentaufnahme der Karten, die derzeit zur Wiederholung anstehen, und lass Claude nach jeder Frage warten. In der Sitzung kann Claude die jeweils gespeicherte Rückseite einblenden und deine ersten Antworten im Chat festhalten. Die FSRS-Wiederholung kann Claude jedoch nicht abschließen. `Again`, `Hard`, `Good` oder `Easy` musst du weiterhin selbst in der Flashcards-App auswählen; andernfalls bleiben alle Karten fällig.

![KI-Karteikarten-Tutor fragt eine fällige Karte ab, während die offizielle FSRS-Wiederholung in der App wartet.](/blog/ai-flashcard-tutor-due-cards.png)

## Der Ablauf in zwei Minuten

So sieht der gesamte Ablauf aus, bevor es an die Einrichtung geht:

1. Füge den Remote-MCP-Connector von Flashcards zu Claude hinzu.
2. Gib für diese Sitzung `list_workspaces` und `sql_query` frei.
3. Blockiere `sql_execute`, denn für diese Übung sind keine Schreibzugriffe nötig.
4. Kopiere den Tutor-Prompt unten in den Chat.
5. Bestätige den Workspace und lass Claude bis zu zehn fällige Karten abrufen.
6. Beantworte immer nur eine Vorderseite. Bitte nur dann um einen einzigen Hinweis, wenn du ihn brauchst.
7. Öffne anschließend [Flashcards](https://app.flashcards-open-source-app.com/) und schließe die offiziellen Wiederholungen mit deinen eigenen FSRS-Bewertungen ab.

Dieser letzte Schritt gehört fest zum Ablauf. Die MCP-Sitzung ist lediglich eine dialoggestützte Übung mit deinen Karten. Sie leert weder die Warteschlange noch legt sie neue Fälligkeitstermine fest.

Falls du den Connector noch nicht eingerichtet hast, zeigt dir [die Anleitung zum Verbinden von Claude über MCP](/de/blog/how-to-connect-flashcards-to-claude-with-mcp/) den aktuellen Menüpfad. Die Server-URL lautet:

`https://mcp.flashcards-open-source-app.com/mcp`

## Richte Claude als KI-Tutor nur zum Abfragen ein

Der Flashcards-Connector stellt drei Tools bereit:

- `list_workspaces({})` listet die Workspaces auf, auf die dein Konto zugreifen kann.
- `sql_query({ sql, workspaceId? })` liest Karten über einen eingeschränkten SQL-Dialekt.
- `sql_execute({ sql, workspaceId? })` kann Karten und Decks erstellen, bearbeiten oder löschen.

Das Argument `workspaceId` gilt immer nur für den jeweiligen Aufruf. Übergib die ID des bestätigten Workspaces, um genau diesen Workspace abzufragen. Ohne das Argument verwendet das Tool den ausgewählten Standard-Workspace. Die Angabe einer ID ändert diesen Standard nicht und speichert keinen neuen.

Der Connector als Ganzes ist nicht schreibgeschützt. Serverseitig ist garantiert, dass `list_workspaces` und `sql_query` keine Daten verändern. `sql_execute` kann hingegen Karten und Decks erstellen, bearbeiten oder löschen. Flashcards stellt derzeit nur den OAuth-Scope `flashcards` bereit; eine separate serverseitige Nur-Lese-Berechtigung gibt es nicht.

Blockiere für diese Übung `sql_execute` in Claudes Connector-Berechtigungen. Das ist eine clientseitige Regel und keine enger gefasste OAuth-Berechtigung, die Flashcards erzwingt. Falls dein Client statt einer festen Sperre nur die Freigabe einzelner Aufrufe anbietet, lehne jeden Aufruf von `sql_execute` ab. Auch der Prompt weist Claude an, dieses Tool nicht aufzurufen. Eine Anweisung im Prompt ist jedoch schwächer als eine technische Tool-Sperre.

Interaktive Clients verwenden OAuth 2.1 mit PKCE und Dynamic Client Registration. Du musst keinen API-Key in Claude eintragen. Die [Dokumentation zum MCP-Connector](/de/docs/mcp-connector/) beschreibt den aktuellen Authentifizierungsablauf und die Schnittstellen der Tools.

## Kopiere diesen Prompt, um deine fälligen Karten abzufragen

Der folgende Prompt nutzt die dokumentierten Tool-Signaturen, Kartenfelder und die Fälligkeitsregel. Eine Karte steht zur Wiederholung an, wenn `due_at` den Wert `NULL` hat oder ihr Fälligkeitszeitpunkt erreicht ist (`due_at <= NOW()`). In diesem Datenmodell kennzeichnet `NULL` eine neue, noch nie wiederholte Karte.

```text
Nutze den Flashcards-MCP-Connector in dieser Sitzung ausschließlich, um mich abzufragen.

Tool-Grenze:
- Rufe nur list_workspaces und sql_query auf.
- Rufe niemals sql_execute auf.
- Erstelle, aktualisiere, lösche oder plane niemals eine Karte neu und markiere keine Karte als wiederholt.

Einrichtung:
1. Rufe list_workspaces({}) auf.
2. Wenn es genau einen Workspace gibt, nenne mir seinen Namen und bitte mich, ihn zu bestätigen.
3. Wenn es mehrere Workspaces gibt, zeige mir ihre Namen und bitte mich, einen auszuwählen.
4. Stoppe und warte auf meine Bestätigung des Workspaces, bevor du Karten liest.
5. Übergib bei diesem Aufruf die bestätigte workspaceId an sql_query. Behaupte nicht, dass dadurch mein Standard-Workspace geändert wird.
6. Verwende exakt dieses SQL:

SELECT card_id, front_text, back_text, due_at, created_at
FROM cards
WHERE due_at IS NULL OR due_at <= NOW()
ORDER BY due_at ASC, created_at DESC, card_id ASC
LIMIT 10 OFFSET 0

Diese Abfrage lädt eine stabile Momentaufnahme der Karten, die aktuell zur Wiederholung anstehen. Sie gibt nicht die exakte Reihenfolge auf dem Review-Bildschirm von Flashcards wieder. Zeilen mit due_at IS NULL gehören zu neuen, noch nie wiederholten Karten und stehen in der Sortierung zuerst. Rufe keine Karten mit einem zukünftigen Fälligkeitszeitpunkt ab.

Wenn die Abfrage keine Zeilen zurückgibt, teile mir das mit und stoppe.

Verhalten beim Abfragen:
- Zeige zunächst nur den front_text der ersten Karte. Gib den back_text nicht vorzeitig preis.
- Frage jeweils nur eine Karte ab und warte auf meine Antwort, bevor du fortfährst.
- Formuliere die Frage nicht als Multiple-Choice-Frage.
- Biete höchstens einen kurzen Hinweis an und nur, wenn ich darum bitte. Der Hinweis darf die Antwort nicht verraten.
- Zeige nach meiner Antwort oder nach „Ich weiß es nicht“ den gespeicherten back_text mit der eindeutigen Bezeichnung „Gespeicherte Antwort“.
- Vergleiche meine erste Antwort mit der gespeicherten Antwort. Halte ausschließlich für diese Sitzung eines von drei Ergebnissen fest: gewusst, teilweise gewusst oder nicht gewusst. Falls die Zuordnung nicht eindeutig ist, frage mich, welches Ergebnis passt.
- Behalte das Ergebnis des ersten Versuchs bei, auch wenn ein Hinweis oder eine spätere Korrektur hilft. Wandle es niemals in Again, Hard, Good oder Easy um.
- Gehe erst zur nächsten Karte, wenn ich „weiter“ sage oder anderweitig bestätige, dass ich bereit bin.
- Wiederhole innerhalb dieser Sitzung keine Karte.

Zeige am Ende eine kompakte Liste mit der Vorderseite jeder Karte und dem Ergebnis des ersten Versuchs. Stelle unmissverständlich klar, dass dies nur Chatnotizen sind, weder eine Wiederholung noch diese Notizen in Flashcards gespeichert wurden, sich keine FSRS-Planung geändert hat und ich die offiziellen Wiederholungen in der Flashcards-App abschließen muss.
```

Behalte `NOW()` in der Abfrage bei; `CURRENT_TIMESTAMP` wird von dieser SQL-Oberfläche nicht unterstützt. Auch die drei Sortierschlüssel sind wichtig. Neue, noch nie wiederholte Karten kommen zuerst. Unter ihnen erscheinen die zuletzt erstellten Karten zuerst. Danach folgen eingeplante Karten vom ältesten Fälligkeitszeitpunkt an; `card_id` löst verbleibende Gleichstände auf. Für dieselbe Momentaufnahme ist das Ergebnis reproduzierbar, entspricht aber nicht exakt der Reihenfolge auf dem Review-Bildschirm der App.

Zehn Karten sind die Obergrenze, nicht das Ziel. Du kannst die Übung nach fünf Karten beenden, ohne die Abfrage zu ändern oder Daten zurückzuschreiben.

## So sollte sich eine Tutor-Runde anfühlen

Claude zeigt genau eine gespeicherte Vorderseite. Du antwortest aus dem Gedächtnis, am besten laut. Wenn du nicht weiterkommst, kannst du um einen Hinweis bitten. Anschließend blendet Claude die gespeicherte Rückseite ein und vergleicht sie mit deiner Antwort.

Der erste Versuch bleibt in den Sitzungsnotizen sichtbar, selbst wenn ein Hinweis die Antwort später offensichtlich macht. Das verhindert eine verbreitete Form der Selbsttäuschung: Aus „nicht gewusst, dann die Erklärung verstanden“ wird sonst schnell „gewusst“. Die Notiz ist bewusst grob. Sie hilft dir, über zehn Karten hinweg Muster zu erkennen; in die Wiederholungsplanung fließt sie nicht ein.

Der entscheidende Teil ist die Pause vor dem Einblenden der Antwort. Gibt der Chat alle Vorder- und Rückseiten auf einmal aus, bleibt nur eine weitere Seite zum Lesen. Eine Frage, ein Versuch und erst dann die Antwort machen daraus eine echte Abrufübung.

## Die mündliche Übung ist keine offizielle FSRS-Wiederholung

Diese Grenze muss eindeutig sein: Flashcards kann über MCP fällige Karten lesen, aber kein Wiederholungsereignis übermitteln. Die Ressource `review_events` und die Planungsfelder einer Karte – darunter `due_at`, `reps`, `lapses`, `fsrs_card_state` und `fsrs_last_reviewed_at` – sind über die Agentenoberfläche nur lesbar. Selbst `sql_execute` kann ausschließlich Karten und Decks verändern. Claude kann keine Bewertung als `Again`, `Hard`, `Good` oder `Easy` speichern, den Zeitplan aktualisieren oder eine Wiederholung als abgeschlossen markieren.

Die Karten bleiben nach dem Chat also weiterhin fällig.

Öffne die Web-App oder einen anderen Flashcards-Client und beantworte die Karten im offiziellen Wiederholungsablauf noch einmal. Bewerte diesen Versuch selbst. Weil du die Antwort bereits im Chat gesehen hast, kann die unmittelbare Wiederholung leichter fallen. Übertrage deshalb `gewusst`, `teilweise gewusst` oder `nicht gewusst` nicht automatisch in eine Bewertung. Falls dir dadurch eine ehrliche Einschätzung schwerfällt, nutze den KI-Tutor erst nach deiner normalen Wiederholung in der App und lass dir dann die Antworten genauer erklären.

Wenn du diese Aufgabenteilung genauer verstehen möchtest: [Active Recall prüft, was du jetzt aus dem Gedächtnis abrufen kannst, während Spaced Repetition plant, was später wiederkehren soll](/de/blog/active-recall-vs-spaced-repetition/). Diese Claude-Sitzung übernimmt die erste Aufgabe, die App die zweite.

## Warum die Pause vor der Antwort wichtig ist

Die hilfreiche Einschränkung ist zugleich die etwas lästige: Claude muss warten. Wenn du die Rückseite siehst, bevor du die Vorderseite beantwortet hast, wird aus der Runde bloßes Lesen. Bleibt sie verborgen, entsteht ein Abrufversuch, den du tatsächlich beurteilen kannst.

In einer randomisierten kontrollierten Studie aus dem Jahr 2009 wurden 40 Assistenzärztinnen und -ärzte aus Pädiatrie und Notfallmedizin beim Lernen zweier medizinischer Themen begleitet. Kurzantworttests mit Feedback fanden unmittelbar nach dem Lernen und noch zweimal in Abständen von ungefähr zwei Wochen statt. Nach mehr als sechs Monaten lagen die Durchschnittsergebnisse bei 39 % für den wiederholt getesteten Stoff und bei 26 % für den Stoff, der wiederholt anhand von Übersichtsblättern gelernt worden war. Das [veröffentlichte Abstract nennt diesen Unterschied von 13 Prozentpunkten](https://pubmed.ncbi.nlm.nih.gov/19930508/).

Das war eine kleine Studie zur medizinischen Ausbildung, keine Studie zu KI-Tutoren und kein Beleg dafür, dass genau dieser MCP-Ablauf die Noten verbessert. Sie stützt lediglich eine engere Gestaltungsentscheidung: Versuche zu antworten, bevor du die Lösung siehst. Der Prompt hält diese Grenze ein, indem er die Rückseite verbirgt, Hinweise begrenzt und den ersten Versuch festhält.

## Nutze die gespeicherte Rückseite als Maßstab

Beim Bewerten kann ein KI-Tutor eine Antwort leicht verbessern, erweitern oder stillschweigend ersetzen. Das ist riskant, wenn du deine eigenen Karten wiederholen willst.

Der Prompt weist Claude an, den gespeicherten `back_text` zu zeigen und deine Antwort mit diesem Text zu vergleichen. Claude darf eine Abweichung erklären, doch der Maßstab für die Übung bleibt sichtbar. Ist die Rückseite falsch oder unvollständig, korrigiere die Karte nach der Sitzung separat anhand einer vertrauenswürdigen Quelle. Lass eine überzeugend formulierte Korrektur nicht im Chat verschwinden und tu danach so, als wäre die ursprüngliche Karte in Ordnung gewesen.

Einen umfassenderen Ablauf, bei dem die Frage zuerst kommt, findest du in [So nutzt du KI für Active Recall](/de/blog/how-to-use-ai-for-active-recall/). Dort erfährst du, wie du verhinderst, dass Hinweise und Erklärungen zu früh erscheinen.

## Prüfe Datenschutz und Berechtigungen vor dem Verbinden

Wenn Claude `sql_query` aufruft, übermittelt Flashcards die angeforderten Kartendaten an den externen KI-Client. Die Daten verlassen damit Flashcards. Der gewählte Client beziehungsweise Modellanbieter kann sie gemäß seinen eigenen Kontoeinstellungen und Bedingungen verarbeiten oder speichern.

Prüfe vor der Nutzung eines privaten Decks, ob dessen Text an diesen Anbieter gesendet werden darf. Bei einem Vokabeldeck fällt die Entscheidung anders aus als bei Karten, die aus Patientennotizen, Dokumenten des Arbeitgebers oder einem privaten Tagebuch stammen. Rufe nur die kleine Datenmenge ab, die du für die Sitzung brauchst, und mische im selben Chat keine themenfremden Connectoren oder sensiblen Quellen dazu.

Das Blockieren von `sql_execute` schützt vor Schreibvorgängen, sofern der Client die Sperre durchsetzt. Die Sperre macht aus den OAuth-Zugangsdaten keine Nur-Lese-Zugangsdaten und hält den zurückgegebenen Text nicht privat. Kann dein Client einzelne Tools weder deaktivieren noch ihre Aufrufe zur Freigabe anzeigen, behandle die Verbindung als schreibberechtigt.

Das detaillierte Bedrohungsmodell steht in [Ist MCP für Flashcards sicher?](/de/blog/is-mcp-safe-for-flashcards/). Für eine normale Abfrage genügt die kurze Checkliste: Prüfe die MCP-URL, bestätige den Workspace, blockiere Schreibzugriffe, fordere nur wenige Zeilen an und kläre, wohin die zurückgegebenen Daten gelangen.

## Halte den Stapel fälliger Karten klein

„KI, frag mich meine Karteikarten ab“ klingt nach der Bitte, das gesamte Deck zu laden. In der Regel funktioniert die Übung mit fünf oder zehn Karten besser.

Ein kleiner Stapel lässt dir genug Zeit, vollständig zu antworten, bei Bedarf um einen Hinweis zu bitten und zu erkennen, warum du etwas nicht gewusst hast. Gleichzeitig gelangt weniger Kartentext zum externen Client. Wenn du die offiziellen Wiederholungen in der App abgeschlossen hast, beginne nur dann mit dem nächsten Stapel, wenn du noch konzentriert bist.

Bitte Claude nicht, die „wichtigsten“ Karten auszuwählen, solange du keine konkrete Regel für Wichtigkeit hast. Die Beispielabfrage verwendet eine engere Regel: Sie berücksichtigt neue, noch nie wiederholte Karten sowie eingeplante Karten, deren Fälligkeitszeitpunkt erreicht ist. Neue Karten kommen zuerst, danach folgen eingeplante Karten vom ältesten Fälligkeitszeitpunkt an. Diese stabile Momentaufnahme eignet sich für eine kurze Übung, entspricht aber nicht der exakten Reihenfolge auf dem Review-Bildschirm der App. Für die zeitliche Planung bleibt FSRS zuständig; Claude verändert nur, wie die Frage gestellt wird.

## FAQ zu Claude, MCP und fälligen Karten

### Kann Claude mich mit meinen eigenen Karteikarten abfragen?

Ja. Mit dem Flashcards-MCP-Connector kann Claude aus dem von dir bestätigten Workspace eine kleine Momentaufnahme fälliger Karten lesen, jeweils nur die Vorderseite zeigen, auf deine Antwort warten und anschließend die gespeicherte Rückseite einblenden. Der Prompt oben beschränkt die Sitzung auf `list_workspaces` und `sql_query`.

### Markiert Claude eine Karte nach meiner Antwort als wiederholt?

Nein. Die Agentenoberfläche kann keine Wiederholungsereignisse übermitteln oder FSRS-Planungsfelder verändern. Schließe dieselben fälligen Wiederholungen in der [Flashcards-App](https://app.flashcards-open-source-app.com/) ab, damit deine Bewertungen gespeichert werden und die Karten ihre nächsten Fälligkeitstermine erhalten.

### Ist das eine schreibgeschützte MCP-Verbindung?

Der Connector als Ganzes ist nicht schreibgeschützt. `list_workspaces` und `sql_query` sind Nur-Lese-Tools; `sql_execute` kann schreiben. Für die reine Abfragesitzung musst du `sql_execute` im Client blockieren oder jeden Aufruf ablehnen. Dadurch entsteht keine engere OAuth-Berechtigung: OAuth verwendet derzeit nur den Scope `flashcards` statt getrennter Lese- und Schreibberechtigungen.

### Kann die KI für mich Again, Hard, Good oder Easy auswählen?

Das sollte sie nicht. Claude kann im Chat grobe Sitzungsnotizen wie `gewusst`, `teilweise gewusst` und `nicht gewusst` führen. Diese Bezeichnungen sind keine FSRS-Bewertungen und werden nicht in Flashcards gespeichert. Wähle die offizielle Bewertung in der App selbst aus.

### Bezieht die Abfrage im Prompt neue Karten ein?

Ja. Noch nie wiederholte neue Karten haben `due_at IS NULL` und stehen damit nach der dokumentierten Fälligkeitsregel zur Wiederholung an. In dieser Abfrage werden sie vor eingeplanten fälligen Karten sortiert. Karten mit einem zukünftigen `due_at` sind ausgeschlossen.

### Ändert `workspaceId` meinen Standard-Workspace?

Nein. Wenn du `workspaceId` an `sql_query` übergibst, gilt der angegebene Workspace nur für diesen einen Aufruf. Ohne das Argument wird der ausgewählte Standard-Workspace verwendet. Die Angabe einer ID speichert keinen neuen Standard.

## Beschränke den KI-Tutor auf seine kleine Aufgabe

Die sinnvolle Form eines **KI-Tutors für Karteikarten** hat eine kleine Aufgabe: einige Vorderseiten fälliger Karten laden, auf deine Antworten warten, begrenzte Hilfe anbieten und die bereits auf den Karten gespeicherten Antworten einblenden.

Lass `sql_execute` im Client blockiert und nutze für die Momentaufnahme das serverseitig schreibgeschützte `sql_query`. Behandle die Ergebnisse des ersten Versuchs als vorübergehende Chatnotizen, die nicht in Flashcards gespeichert werden. Schließe danach die offiziellen Wiederholungen in Flashcards ab, damit FSRS deine Bewertungen erhält und die Karten neu einplant. Bis dahin bleibt jede Karte aus dem Chat fällig.
