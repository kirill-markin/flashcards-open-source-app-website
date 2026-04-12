---
title: "Selbst gehostete Open-Source-Flashcards-App für Spaced Repetition"
description: "Suchst du eine Open-Source-Flashcards-App, die du selbst betreiben kannst? Nutze Spaced Repetition mit einer schnellen Lernwarteschlange, passwortloser Anmeldung und voller Kontrolle über deine Lerndaten."
date: "2026-03-08"
keywords:
  - "open source flashcards app"
  - "self-hosted flashcards app"
  - "spaced repetition app"
  - "anki alternative"
  - "quizlet alternative"
  - "ai flashcards"
---

Wenn du Anki neben Quizlet öffnest, wird der Unterschied in etwa dreißig Sekunden deutlich.

Das eine fühlt sich wie alte Desktop-Software an, die nie wirklich über das Jahr 2012 hinausgekommen ist. Das andere wie ein sauber gestaltetes Abo-Produkt, das zufällig auch Karteikarten anbietet.

Bei der Arbeit an [Flashcards](https://flashcards-open-source-app.com/) bin ich immer wieder genau auf diesen Gegensatz gestoßen. Die Idee hinter Spaced Repetition ist nach wie vor stark. Die Produkte drumherum wirken dagegen festgefahren.

Das ließe sich eher hinnehmen, wenn Software heute noch schwer zu veröffentlichen wäre. Ist sie aber nicht.

Kleine Teams können inzwischen in einer Woche echte Produkte bauen. Wir können schnell veröffentlichen, KI in reale Abläufe einbinden und von Anfang an saubere APIs anbieten. Karteikarten-Software sollte nicht weiterhin zwischen schwerfälliger Altlasten-UX und geschlossenen Plattformen feststecken.

Genau diese Lücke versucht [Flashcards](https://flashcards-open-source-app.com/) zu schließen: eine selbst gehostete Open-Source-Flashcards-App mit Spaced Repetition, modernem Web-Stack, Offline-First-Unterstützung für Clients und KI als Teil der Produktausrichtung statt als später angeklebtem Zusatz.

## Anki funktioniert noch, fühlt sich aber alt an

Ich glaube nicht, dass Ankis Problem ein schlechter Algorithmus ist. Die Grundidee ist bewährt. Menschen nutzen das Programm seit Jahren für Sprachen, Medizin, Prüfungen und alle möglichen Lernbereiche, in denen man viel auswendig behalten muss.

Das Problem ist, dass sich das Produkterlebnis immer noch alt anfühlt.

Natürlich kann man sich dazu bringen, damit zu leben. Viele tun das. Aber "es funktioniert, wenn man sich erst einmal daran gewöhnt hat" ist 2026 kein besonders starkes Kompliment. Die Oberfläche wirkt wie ein Werkzeug, das man eben hinnimmt, nicht wie eines, das man gern jeden Tag öffnet.

Das ist wichtiger, als viele zugeben. Karteikarten funktionieren nur, wenn du morgen wiederkommst, dann übermorgen und dann noch hundert Tage später. Reibung summiert sich.

## Quizlet ist glatter, aber dafür verschiebt sich der Nachteil

Quizlet hat das Problem mit der Oberfläche gelöst. Es sieht aufgeräumter aus. Es fühlt sich eher wie ein modernes Produkt für Endnutzer an. Für viele reicht das schon, um es attraktiver zu finden als Anki.

Dann stößt du aber auf die andere Grenze.

Für etwas so Einfaches wie Karteikarten ist die Preisgestaltung wenig überzeugend. Das Produkt ist geschlossen. Dein Lernsystem lebt innerhalb der Plattform eines anderen Anbieters. Wenn sich Preise, Produktprioritäten oder Zugangsregeln ändern, musst du dich anpassen. Nicht der Anbieter.

Für manche Kategorien ist das in Ordnung. Bei persönlichem Wissen überzeugt mich das nicht.

## Deine Karten sollten nicht in einem fremden Produkt feststecken

Karteikarten sind kein Wegwerfmaterial. Mit der Zeit werden sie zu einem Protokoll dessen, was du lernst, was du immer wieder vergisst und wie sich dein Denken verändert. Das sind wertvolle Daten.

Ich finde die Vorstellung nicht besonders reizvoll, so etwas in einer Blackbox aufzubauen.

Mit einer selbst gehosteten Flashcards-App verschiebt sich der Ausgangspunkt. Du kannst den Code prüfen. Du kannst den gesamten Stack selbst betreiben. Du kannst zuerst die gehostete Version nutzen und später umziehen, wenn du willst. Du musst niemanden um Erlaubnis bitten, dein eigenes Lernsystem so zu verwenden, wie es für dich passt.

Das ist heute noch wichtiger, weil KI Abhängigkeiten von Plattformen schmerzhafter macht. Sobald dein Datenmodell offen ist und das Produkt echte Operationen anbietet, kann KI tatsächlich mit deinen Karten arbeiten. In geschlossenen Produkten bleibt die KI-Ebene oft oberflächlich, weil auch das Produkt selbst nur sehr eingeschränkt zugänglich ist.

## Die meisten KI-Funktionen für Karteikarten sind noch ziemlich schwach

Im Moment beherrschen viele Produkte für "AI flashcards" genau einen Trick. Du fügst etwas Text ein, sie erzeugen ein paar Karten, und damit ist die Magie vorbei.

Das ist nicht der interessante Teil.

Interessant wird es, wenn KI innerhalb des echten Produkts arbeiten kann.

In [Flashcards](https://flashcards-open-source-app.com/) ist der aktuelle Web-Client schon heute mit einem KI-Chat ausgestattet, der an den tatsächlichen Workspace angebunden ist. Die übergreifende Architektur stellt zusätzlich eine separate externe Agentenoberfläche für Terminal-Tools bereit, während der iOS-Client seinen eigenen Offline-First-Synchronisierungsablauf behält.

Das ist eine deutlich stärkere Richtung als "Erzeuge 20 Karten aus diesem Absatz" und damit hat es sich.

So kann KI bei den langweiligen Teilen helfen, ohne zum Spielzeug zu werden:

- prüfen, ob ein Konzept schon existiert, bevor eine doppelte Karte angelegt wird
- zeigen, was gerade fällig ist, statt losgelöste Inhalte zu erfinden
- die Formulierung schwacher Karten verbessern
- ein Deck langfristig pflegen, statt es nur einmal zu erzeugen

Genau das sollte "AI-first" hier bedeuten. Kein Chatbot, der nachträglich an eine geschlossene App geschraubt wurde, sondern ein Produkt, in dem echte Objekte und Aktionen kontrolliert für KI zugänglich sind.

## Das Produkt sollte schon vor dem KI-Teil modern sein

Auch ohne KI wollte ich, dass sich das Grundprodukt vernünftig anfühlt.

Dazu gehören eine klare Lernwarteschlange, das Erstellen von Karten im Web-Client, Spaced Repetition im Backend, passwortlose Anmeldung statt eines weiteren Passwortfriedhofs und ein dokumentierter Weg zum Self-Hosting für Menschen, die ihren Stack selbst besitzen wollen.

Das Projekt hat diese Grundlage bereits:

- eine gehostete Web-App, die du schon jetzt nutzen kannst
- eine iOS-App im Repository mit lokalem SQLite und Synchronisierung
- einen Lernablauf rund um fällige Karten und FSRS
- Open-Source-Code auf GitHub
- eine dokumentierte externe Agent-API
- passwortlose Anmeldung
- einen [Self-Hosting-Leitfaden](https://flashcards-open-source-app.com/docs/self-hosting/)
- [Architekturdokumentation](https://flashcards-open-source-app.com/docs/architecture/)

Das Produkt steckt noch in einer frühen Phase, und ich behaupte nichts anderes. Aber es ist bereits mehr als ein reiner Browser-Prototyp: Das Repository enthält die gehostete Web-App, den iOS-Client, den Auth-Dienst, die Backend-API und den aktuellen Synchronisierungsweg. Ich würde lieber etwas Frühes und Ehrliches nutzen als etwas Hochglanzpoliertes, das mich einsperrt.

## Genau solche Produkte sollten wir heute bauen

Das Merkwürdige ist nicht, dass es eine neue Anki-Alternative gibt. Das Merkwürdige ist, dass es davon nicht längst mehr gibt.

Wir können Produkte schneller bauen als je zuvor. Wir können sie klein halten. Wir können Open Source veröffentlichen. Wir können KI mit echten Produktaktionen verbinden statt mit reiner Demo-Magie. Wir können Nutzerinnen und Nutzern eine gehostete Option geben, ohne sie dauerhaft davon abhängig zu machen.

Karteikarten passen perfekt in diese Welt. Der Bereich ist überschaubar. Der Nutzen ist offensichtlich. Die Daten sind persönlich. Der Ablauf wird besser, wenn KI mit echten Karten und echtem Wiederholungsstatus arbeiten kann. Diese Kategorie sollte zu den einfachsten gehören, die man modernisieren kann.

Darauf setzt [Flashcards](https://flashcards-open-source-app.com/): Open Source, auf Wunsch selbst gehostet, Spaced Repetition im Kern und KI als Teil des echten Produktmodells.

Nicht, weil "AI-first" auf einer Landingpage gut klingt. Sondern weil diese Kategorie inzwischen endlich die Werkzeuge hat, um ein besseres Produkt zu verdienen.

## Probier es aus oder hoste es selbst

Wenn du eine Open-Source-Flashcards-App mit Spaced Repetition, einem Weg zum Self-Hosting und Raum für echte KI-Abläufe suchst, fang hier an:

- [Die gehostete App öffnen](https://app.flashcards-open-source-app.com/)
- [Den Einstieg lesen](https://flashcards-open-source-app.com/docs/getting-started/)
- [Den Quellcode auf GitHub ansehen](https://github.com/kirill-markin/flashcards-open-source-app)

Flashcards sollten sich wie moderne Software anfühlen. Nicht wie alte Lernsoftware mit hübscherer Landingpage. Und nicht wie ein geschlossenes Abo, an das noch eine Karteikarten-Funktion angehängt wurde.

Open Source, Kontrolle über die eigenen Daten und KI, die mit dem echten Produkt arbeiten kann, sind die bessere Richtung. Ich glaube, auf genau so etwas wartet diese Kategorie schon seit Jahren.
