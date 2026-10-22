---
title: "Anki MathJax Cloze: Fix a Formula Cut Short by Braces"
description: "Repair an Anki MathJax cloze with a controlled formula, compare front and answer output, and separate mathematical braces from cloze closing markers."
date: "2026-10-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/becfd250c3ee62c538765e441526903c899c05d7f3267118759a5c724c13b3f2.webp"
keywords:
  - "Anki MathJax cloze"
  - "Anki cloze braces"
  - "Anki MathJax not working"
  - "Anki cloze formula"
---

A fraction can be complete in Anki's Text field while its cloze card hides only part of it. Two closing braces inside the formula can end the cloze early, leaving stray characters on the front and damaged math on the answer.

**Separate adjacent mathematical closing braces with a space, while keeping the final cloze closing marker intact.** Anki documents this collision in its [Cloze Conflicts section](https://docs.ankiweb.net/manual/math#cloze-conflicts). The examples below isolate it with one fraction and show exactly what the backend generated before and after the repair.

![A baker places folded parchment between the rims of two nested cake tins](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/becfd250c3ee62c538765e441526903c899c05d7f3267118759a5c724c13b3f2.webp)

## Make this one-character repair

This whole-expression cloze contains the collision. Take x to be a positive real number throughout these examples:

```text
{{c1::\(\frac{1}{\sqrt{x}}\)}}
```

Use this version instead:

```text
{{c1::\(\frac{1}{\sqrt{x} }\)}}
```

The space goes between the brace that closes the square root's argument and the brace that closes the fraction's denominator. Both mathematical braces remain. The final two braces still close the cloze.

Don't replace every double brace in the note. That would also break Anki's own markers. This repair concerns mathematical braces *inside* the hidden content.

For this formula, the space doesn't change the mathematical expression. Anki's [math documentation](https://docs.ankiweb.net/manual/math#cloze-conflicts) explains why ordinary spaces between these closing braces are suitable in math mode. These bare expressions are demonstration notes; a study card also needs a visible question. Preview the repair before editing studied notes.

## Establish a control before blaming MathJax

Use a new demonstration note with the unmodified **Cloze** note type. Put the following exact line in **Text** and leave **Back Extra** empty:

```text
\(\frac{1}{\sqrt{x}}\) {{c1::control}}
```

The formula sits outside the cloze; only the word “control” is hidden. This separates formula display from formula deletion. If pasted formatting gets in the way, inspect the stored field content with the editor's HTML control, described in Anki's [editing documentation](https://docs.ankiweb.net/manual/editing#editing-features).

Add the note, find its card in **Browse**, and open **Preview**. The front should show the complete fraction followed by a blank. Revealing the answer should show the same fraction followed by “control.”

If the fraction already fails here, the whole-expression brace repair hasn't isolated your problem. Check the stored delimiters and formula first. Anki uses these delimiters for inline MathJax:

```text
\( ... \)
```

Its display-math delimiters are:

```text
\[ ... \]
```

These are the [documented MathJax delimiters](https://docs.ankiweb.net/manual/math#mathjax). Keep them unchanged during this comparison.

## What the backend actually produced

For this article, an automated experiment generated question and answer HTML for five new stock Cloze notes using the released **Anki 26.9.3 Python/Rust backend**, on macOS ARM64 with Python 3.14, on October 22, 2026. It tested card generation without running the visual MathJax renderer or the desktop editor. The Preview instructions here are checks for you to perform.

The control preserved the complete formula on both sides. The broken whole-expression version produced this question text after removing the generated styling and HTML span tags:

```text
[...]\)}}
```

Its corresponding answer text was:

```text
\(\frac{1}{\sqrt{x\)}}
```

The mathematical closing braces had already been consumed as the cloze ending. The source was damaged before a renderer could typeset it.

With the added space, the generated question contained only the blank, and the answer preserved:

```text
\(\frac{1}{\sqrt{x} }\)
```

This matches the [released cloze implementation](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/cloze.rs), whose tokenizer recognizes adjacent closing braces as a cloze-ending token. The test used the backend from the [26.09.3 release](https://github.com/ankitects/anki/releases/tag/26.09.3).

The experiment's simple fifth case was:

```text
{{c1::\(x^2\)}}
```

It preserved the answer source. That helps narrow the diagnosis: hiding a whole MathJax expression doesn't inherently damage it. The adjacent mathematical braces caused this particular failure.

## Decide whether you're recalling a formula or one variable

The fourth tested Text value put the cloze inside the formula:

```text
\(\frac{1}{\sqrt{ {{c1::x}} }}\)
```

Its generated front retained the fraction with a blank inside the square root. Its answer restored x with both enclosing mathematical groups intact. The spaces keep the mathematical groups distinct from the cloze marker.

This asks for much less than the whole-expression version. A possible visible prompt for a study card is: “For x > 0, find the derivative of 2√x.” The answer is the fraction used here. Hiding the entire fraction asks you to produce the derivative; hiding only x supplies nearly the whole answer. Choose the version that tests what you need to recall. The five backend cases tested the exact Text values shown above, without an added derivative prompt.

For several deletions in one note, keep the intended card grouping explicit. The [Anki cloze-number guide](/blog/anki-cloze-numbers/) explains which blanks appear together.

## Check the hidden front and the intact answer

Try the five Text values on separate new demonstration notes, leaving Back Extra empty. The backend results establish which source survives. Use Preview to check the visual result on your installation:

| Case | Front check | Answer check |
| --- | --- | --- |
| Control | Complete fraction visible; “control” hidden | Complete fraction plus “control” |
| Broken whole expression | Extra closing characters after the blank identify the collision | Generated source is missing mathematical braces |
| Spaced whole expression | One blank, with no formula fragments outside it | Complete reciprocal-square-root fraction |
| Inner-variable version | Fraction visible, with only its square-root argument blank | Argument restored to x; complete fraction remains |
| Simple whole expression | One blank | Complete x-squared expression |

A clean front alone isn't enough. The broken example still creates a blank; its answer source exposes the loss of mathematical structure. For the repaired fraction, check both the fraction bar and the square root in Preview, plus the absence of stray source characters.

## Apply the repair to one existing note

Keep a copy of its original Text content. Separate only the colliding mathematical braces, preserving the cloze number and the question's meaning. Preview every sibling card, including ones whose hidden sections you didn't edit. Compare the visible prompt, hidden target, and revealed formula with your intended answers.

If the whole card is blank, investigate the [fields and templates](/blog/anki-blank-cards/) instead. If the control renders correctly and the repaired cloze passes both sides, use that exact brace placement as the pattern for the affected formula.

*AI agents researched and wrote this article and ran the backend experiment. Visual rendering, mobile clients, and sync weren't tested; the experiment isn't Kirill's personal test report. The illustration is AI-generated.*
