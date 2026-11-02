---
title: "Anki Nested Cloze: Test a Phrase and the Word Inside It"
description: "Build nested Anki clozes, predict each question, place inner and outer hints, and check six backend-tested examples before editing study notes."
date: "2026-11-02"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6c70710cbf3115c5bb51a98426bfe8146c79af8e79895406546f256eb603de1d.webp"
keywords:
  - "Anki nested cloze"
  - "Anki cloze inside cloze"
  - "nested cloze hints"
  - "Anki overlapping cloze"
  - "nested cloze same number"
---

An Anki note can ask for “blue glass jar” on one card and just “glass” on another. Put the word's cloze inside the phrase's cloze, with a different number for each. The phrase question shows one blank for the whole phrase; the word question leaves “blue” and “jar” visible.

That visible context is the useful part to check. Six examples below show exactly what changes when you move the braces, add hints, or reuse a number. They use a fictional sample-storage instruction, so you can concentrate on the markup.

![A woman closes a mustard pouch inside an open navy overnight bag, leaving the surrounding compartment visible](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6c70710cbf3115c5bb51a98426bfe8146c79af8e79895406546f256eb603de1d.webp)

## Start with a fresh Cloze note

Use the standard **Cloze** note type. Anki has supported [native nested clozes since version 2.1.56](https://docs.ankiweb.net/manual/editing#cloze-deletion); these examples don't require an add-on. Paste one complete example into **Text**, keeping its braces and punctuation, and leave **Back Extra** empty. Treat each example as a separate fresh note, rather than a sequence of edits to an existing study note.

The six inputs produced twelve cards in an automated Anki backend test. The tables show the visible sentence text from each card's question and answer HTML, without styling or the answer's trailing line break. They aren't screenshots. The test environment and limits are at the end.

In the notation `{{c1::…}}`, the number identifies the card's blank group. Nesting describes where one marked passage sits inside another. For ordinary grouping without nesting, the [Anki cloze-number guide](/blog/anki-cloze-numbers/) works through blanks that appear together or separately.

## Hide the phrase, then test its inner word

Paste this exact **Text** value:

```text
The sample goes in the {{c1::blue {{c2::glass}} jar}}.
```

The inner `c2` closes immediately after `glass`. The outer `c1` closes after `jar`, so it contains the entire phrase, including that inner cloze.

| Card | Visible question | Visible answer |
| --- | --- | --- |
| c1 | The sample goes in the [...]. | The sample goes in the blue glass jar. |
| c2 | The sample goes in the blue [...] jar. | The sample goes in the blue glass jar. |

On `c1`, recall **blue glass jar**. There isn't a second visible blank for `glass` inside the outer blank. On `c2`, recall **glass** with the color and container supplied.

Both answers contain the complete sentence. Seeing the same answer text doesn't make the questions equivalent: one asks for a phrase, and the other gives you most of that phrase as context. In Anki's [released cloze renderer](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/cloze.rs), an outer cloze that's being tested replaces its entire visible passage with a blank or hint. When the outer cloze isn't being tested, its text remains visible around the inner blank.

## Side-by-side blanks ask a different question

Moving the first closing braces changes the task:

```text
The sample goes in the {{c1::blue}} {{c2::glass}} jar.
```

| Card | Visible question | Visible answer |
| --- | --- | --- |
| c1 | The sample goes in the [...] glass jar. | The sample goes in the blue glass jar. |
| c2 | The sample goes in the blue [...] jar. | The sample goes in the blue glass jar. |

This fresh note also produced two cards. Its `c2` question matches the nested version, but `c1` now asks only for **blue**. “Glass jar” stays visible because it sits outside the first cloze.

Count the cards, then read the actual questions. A count of two won't tell you whether you made a phrase question plus a word question, or two separate word questions.

## Give each layer its own hint

A hint belongs inside the closing braces of the cloze it describes:

```text
The sample goes in the {{c1::blue {{c2::glass::material}} jar::container}}.
```

Here, `::material` belongs to the inner `c2`, while `::container` belongs to the outer `c1`.

| Card | Visible question | Visible answer |
| --- | --- | --- |
| c1 | The sample goes in the [container]. | The sample goes in the blue glass jar. |
| c2 | The sample goes in the blue [material] jar. | The sample goes in the blue glass jar. |

The outer question shows only `[container]`; it doesn't expose the inner `[material]` hint. The inner question shows `[material]` in the visible phrase, without showing `[container]`.

Choose hints that identify the expected kind of answer. Here, “container” cues the whole phrase, while “material” cues the word. Decide whether that's enough help for your own subject before copying the pattern.

## The same number still means one card

Using `c1` at both levels doesn't create two separate questions:

```text
The sample goes in the {{c1::blue {{c1::glass}} jar}}.
```

| Card | Visible question | Visible answer |
| --- | --- | --- |
| c1 | The sample goes in the [...]. | The sample goes in the blue glass jar. |

This fresh note produced **one card**. The outer `c1` hides the phrase, including the inner `c1`. There is no additional card asking for `glass` alone.

If you want the phrase and the internal word as separate questions, give them different numbers, as in the first example. Extra braces don't create an extra card by themselves.

## Three levels make three different prompts

This example nests `glass` inside `blue glass`, then nests both inside `the blue glass jar`:

```text
Use {{c1::the {{c2::blue {{c3::glass}}}} jar}}.
```

| Card | Visible question | Visible answer |
| --- | --- | --- |
| c1 | Use [...]. | Use the blue glass jar. |
| c2 | Use the [...] jar. | Use the blue glass jar. |
| c3 | Use the blue [...] jar. | Use the blue glass jar. |

The answers to recall are **the blue glass jar**, **blue glass**, and **glass**, respectively. Notice that `the` remains visible on `c2`: its opening braces start after that word.

Three levels worked in the tested backend. This isn't a maximum-depth test. Anki's [nested-cloze documentation](https://docs.ankiweb.net/manual/editing#cloze-deletion) describes version-dependent limits and recommends keeping nesting to a few levels. Add a level only when its generated question has a purpose.

## A number can group an inner blank with an outside blank

Nesting doesn't isolate a number from the rest of the note:

```text
The sample goes in the {{c1::blue {{c2::glass}} jar}} beside a {{c2::steel}} tray.
```

| Card | Visible question | Visible answer |
| --- | --- | --- |
| c1 | The sample goes in the [...] beside a steel tray. | The sample goes in the blue glass jar beside a steel tray. |
| c2 | The sample goes in the blue [...] jar beside a [...] tray. | The sample goes in the blue glass jar beside a steel tray. |

The two `c2` passages disappear together, although only one sits inside `c1`. A complete answer to `c2` supplies **glass and steel**. On `c1`, the outside `steel` passage stays visible.

This produced two cards, not three. Before using the pattern, decide whether recalling both materials together is the question you want.

## Partial overlap needs another approach

Anki nested clozes require full containment. In the first example, every character of `glass` lies inside `blue glass jar`.

Suppose instead you want one deletion for **blue glass** and another for **glass jar**. They share `glass`, but neither phrase contains the other. That's a partial overlap, which the [Anki manual](https://docs.ankiweb.net/manual/editing#cloze-deletion) says isn't supported by nested cloze syntax.

A simple alternative is to make two separate Cloze notes. Copy the sentence into each, mark **blue glass** in one and **glass jar** in the other, and preview both questions. You can use `c1` on each note: the numbers group blanks within their own note. This avoids custom templates, but you now have two source sentences to maintain when the wording changes.

## Preview every generated card

For your chosen example, add the fresh note and open **Browse**. Find its text, switch to **Cards** mode using the switch to the left of the search area, and select each card in turn. Open **Preview** above the editing area and compare both sides with that card's table row. In Notes mode, preview shows the note's first card, so that view alone won't verify every sibling. [Anki's Browser instructions](https://docs.ankiweb.net/manual/browsing#editing-area) describe these controls.

Check three things: the hidden span, the context left visible, and the complete answer you expect to recall. If the card exists in Browse but isn't appearing during study, inspect its state before changing the markup; [burying and suspending](/blog/anki-bury-vs-suspend/) affect existing cards.

For notes you've already studied, changing numbers can leave old empty cards behind. Follow the [cloze-number guide's cleanup procedure](/blog/anki-cloze-numbers/) instead of treating a fresh-note card count as proof that an edited note is clean.

## How these examples were checked

On November 2, 2026, an automated script created six fresh standard Cloze notes in a disposable collection using the PyPI `anki` package **26.9.3**, on macOS **26.6.1 arm64** with Python **3.14.7**. Each note used the exact Text value printed above and an empty Back Extra field. The script collected question and answer HTML for all twelve generated cards. Anki **26.09.3** source at revision `29bb700b` was also inspected.

These checks cover backend card generation and HTML output. They don't establish desktop visual appearance, mobile behavior, sync behavior, or learning results. No private study collection was used.

This article was written and edited with substantial AI assistance, including automated research and backend testing. The illustration is AI-generated.
