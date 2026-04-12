---
title: "Self-Hosted Open Source Flashcards App für Spaced Repetition"
description: "Du suchst eine Open-Source-Flashcards-App, die du selbst hosten kannst? Betreibe Spaced Repetition mit schneller Review-Warteschlange, passwortloser Authentifizierung und voller Kontrolle über deine Lerndaten."
date: "2026-03-08"
keywords:
  - "open source flashcards app"
  - "self-hosted flashcards app"
  - "spaced repetition app"
  - "anki alternative"
  - "quizlet alternative"
  - "ai flashcards"
---

Wenn du Anki neben Quizlet öffnest, ist der Trade-off in etwa dreißig Sekunden offensichtlich.

Das eine fühlt sich wie alte Desktop-Software an, die 2012 nie wirklich verlassen hat. Das andere wie ein poliertes Subscription-Produkt, das zufällig auch Flashcards macht.

Beim Arbeiten an [Flashcards](https://flashcards-open-source-app.com/) bin ich immer wieder auf genau diese Spaltung gestoßen. Die Idee von Spaced Repetition ist immer noch großartig. Die Produkte darum herum wirken festgefahren.

Das wäre leichter zu akzeptieren, wenn Software noch schwer auszuliefern wäre. Ist sie aber nicht.

Kleine Teams können heute in einer Woche echte Produkte bauen. Wir können schnell shippen, KI an reale Workflows anschließen und von Tag eins saubere APIs bereitstellen. Flashcards-Software sollte nicht weiter zwischen klobiger Legacy-UX und geschlossenen Plattformen festhängen.

Genau diese Lücke versucht [Flashcards](https://flashcards-open-source-app.com/) zu füllen: eine self-hosted Open-Source-Flashcards-App mit Spaced Repetition, modernem Web-Stack, Offline-first-Client-Support und KI als Teil der Produktrichtung statt als nachträglich angeklebtem Extra.

## Anki funktioniert immer noch, fühlt sich aber alt an

Ich glaube nicht, dass das Problem bei Anki ein schlechter Algorithmus ist. Die Kernidee ist bewährt. Menschen nutzen es seit Jahren für Sprachen, Medizin, Prüfungen und allerlei Auswendiglern-Themen.

Das Problem ist, dass sich das Produkterlebnis immer noch alt anfühlt.

Du kannst dich absolut dazu zwingen, damit zu leben. Viele tun es. Aber "es funktioniert, wenn man sich daran gewöhnt" ist 2026 kein besonders starkes Kompliment. Die Oberfläche wirkt eher wie ein Tool, das du erträgst, nicht wie eines, das du gern täglich öffnest.

Das ist wichtiger, als viele zugeben. Flashcards funktionieren nur, wenn du morgen wiederkommst, dann übermorgen und dann hundert Tage später. Reibung summiert sich.

## Quizlet ist glatter, aber der Trade-off kippt in die andere Richtung

Quizlet hat das Interface-Problem gelöst. Es sieht sauberer aus. Es fühlt sich eher wie ein modernes Consumer-Produkt an. Für viele macht das es allein schon attraktiver als Anki.

Dann stößt du auf die andere Wand.

Das Pricing ist schwer zu lieben für etwas so Grundlegendes wie Flashcards. Das Produkt ist geschlossen. Dein Lernsystem lebt in der Plattform eines anderen. Wenn sich Preis, Produktprioritäten oder Zugangsregeln ändern, passt du dich an. Nicht sie.

Für manche Kategorien ist das okay. Für persönliches Wissen überzeugt es mich nicht.

## Deine Karten sollten nicht in einem fremden Produkt gefangen sein

Flashcards sind kein Wegwerf-Content. Mit der Zeit werden sie zu einem Protokoll dessen, was du lernst, was du immer wieder vergisst und wie sich dein Denken verändert. Das sind wertvolle Daten.

Ich mag die Vorstellung nicht, das in einer Black Box aufzubauen.

Mit einer self-hosted Flashcards-App verändert sich der Standard. Du kannst den Code prüfen. Du kannst den Stack selbst betreiben. Du kannst erst die gehostete Version nutzen und später umziehen. Du musst niemanden um Erlaubnis bitten, dein eigenes Lernsystem so zu verwenden, wie du willst.

Das ist heute noch wichtiger, weil KI Lock-in schmerzhafter macht. Sobald dein Datenmodell offen ist und das Produkt echte Operationen offenlegt, kann KI tatsächlich mit deinen Karten arbeiten. In geschlossenen Produkten bleibt die KI-Schicht oft oberflächlich, weil auch das Produkt nur oberflächlich offenliegt.

## Die meisten KI-Flashcards-Features sind immer noch ziemlich schwach

Derzeit machen viele "AI flashcards"-Produkte genau einen Trick. Du fügst Text ein, sie generieren ein paar Karten, und damit ist die Magie vorbei.

Das ist nicht der interessante Teil.

Der interessante Teil ist, KI im echten Produkt arbeiten zu lassen.

In [Flashcards](https://flashcards-open-source-app.com/) hat die aktuelle Web-App bereits KI-Chat, der mit dem echten Workspace verbunden ist. Die breitere Architektur stellt außerdem eine separate externe Agent-Oberfläche für Terminal-Tools bereit, während der iOS-Client seinen eigenen Offline-first-Sync-Flow behält.

Das ist eine viel stärkere Richtung als "generiere 20 Karten aus diesem Absatz" und nenne es Strategie.

Es bedeutet, dass KI bei den langweiligen Teilen helfen kann, ohne zum Spielzeug zu werden:

- prüfen, ob ein Konzept schon existiert, bevor eine doppelte Karte angelegt wird
- zeigen, was jetzt fällig ist, statt losgelösten Content zu erfinden
- die Formulierung schwacher Karten bereinigen
- ein Deck über die Zeit pflegen, nicht nur einmal generieren

Genau das sollte "AI-first" hier bedeuten. Kein Chatbot, der an eine geschlossene App geschraubt wurde. Sondern ein Produkt, in dem die echten Objekte und Aktionen kontrolliert für KI zugänglich sind.

## Das Produkt sollte modern sein, bevor KI überhaupt auftaucht

Auch ohne KI wollte ich, dass sich das Grundprodukt vernünftig anfühlt.

Das bedeutet eine klare Review-Warteschlange, Kartenerstellung aus dem Web-Client, Spaced Repetition im Backend, passwortlose Auth statt eines weiteren Passwort-Friedhofs und einen dokumentierten Self-Hosting-Pfad für Menschen, denen Eigentum am Stack wichtig ist.

Das Projekt hat diese Grundlage bereits:

- eine gehostete Web-App, die du jetzt nutzen kannst
- eine iOS-App im Repository mit lokalem SQLite und Sync
- einen Review-Flow rund um fällige Karten und FSRS
- Open-Source-Code auf GitHub
- eine dokumentierte externe Agent-API
- passwortlose Authentifizierung
- eine [Self-Hosting-Anleitung](https://flashcards-open-source-app.com/docs/self-hosting/)
- [Architektur-Dokumentation](https://flashcards-open-source-app.com/docs/architecture/)

Das Produkt ist noch früh, und ich tue auch nicht so, als wäre es anders. Aber es ist bereits mehr als ein Browser-only-Prototyp: Das Repository liefert die gehostete Web-App, den iOS-Client, den Auth-Service, die Backend-API und den aktuellen Sync-Pfad. Ich würde lieber etwas Frühes und Ehrliches nutzen als etwas Poliertes und Eingesperrtes.

## Genau diese Art Produkt sollten wir heute bauen

Das Seltsame ist nicht, dass eine neue Anki-Alternative existiert. Das Seltsame ist, dass es nicht längst mehr davon gibt.

Wir können Produkte schneller bauen als je zuvor. Wir können sie klein halten. Wir können Open Source shippen. Wir können KI mit echten Produktaktionen verbinden statt mit Demo-Magie. Wir können Nutzern eine gehostete Option geben, ohne sie dauerhaft davon abhängig zu machen.

Flashcards passen perfekt in diese Welt. Das Problemfeld ist simpel. Der Wert ist offensichtlich. Die Daten sind persönlich. Der Workflow wird besser, wenn KI mit echten Karten und echtem Review-Zustand arbeiten kann. Diese Kategorie sollte eine der einfachsten sein, um sie zu modernisieren.

Darum ist genau das die Wette hinter [Flashcards](https://flashcards-open-source-app.com/): Open Source, self-hosted, wenn du willst, Spaced Repetition im Kern und KI als Teil des echten Produktmodells.

Nicht, weil "AI-first" auf einer Landingpage gut klingt. Sondern weil diese Kategorie endlich die Werkzeuge hat, um ein besseres Produkt zu verdienen.

## Probier es aus oder hoste es selbst

Wenn du eine Open-Source-Flashcards-App mit Spaced Repetition, Self-Hosted-Pfad und Raum für echte KI-Workflows willst, starte hier:

- [Die gehostete App öffnen](https://app.flashcards-open-source-app.com/)
- [Die Getting-Started-Anleitung lesen](https://flashcards-open-source-app.com/docs/getting-started/)
- [Den Sourcecode auf GitHub ansehen](https://github.com/kirill-markin/flashcards-open-source-app)

Flashcards sollten sich wie moderne Software anfühlen. Nicht wie Legacy-Lernsoftware mit hübscherer Landingpage. Nicht wie ein geschlossenes Abo mit angehängtem Flashcards-Feature.

Open Source, Eigentum an den eigenen Daten und KI, die auf dem echten Produkt arbeiten kann, sind eine bessere Richtung. Ich glaube, diese Kategorie wartet seit Jahren darauf.
