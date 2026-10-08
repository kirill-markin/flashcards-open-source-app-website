---
title: "Mochi Math Flashcards: Write LaTeX and Check the Question"
description: "Build Mochi math flashcards with inline and display LaTeX, worked card examples, and checks for broken notation, wrong formulas, and exposed answers."
date: "2026-10-08"
image: "/blog/mochi-math-flashcards.png"
keywords:
  - "Mochi math flashcards"
  - "Mochi LaTeX"
  - "Mochi equations"
  - "KaTeX flashcards"
  - "Mochi math formatting"
---

Move a outside the denominator of the quadratic formula and you can get a tidy equation that teaches the wrong calculation. Put the correct formula above the card's answer separator and you've given away what you meant to recall. A readable equation still needs a mathematics check and a hidden answer.

For **Mochi math flashcards**, start with a few ordinary Markdown cards. Check their notation, their mathematics, and what appears before you reveal the answer. The three-card algebra deck below gives you something small enough to inspect before repeating a mistake across a chapter.

This guide follows official Mochi and KaTeX documentation checked October 8, 2026. The cards and repair exercises are original teaching examples; they haven't been tested in the app.

![A woman checks a gap in puppet-stage curtains while a cloth fox puppet is visible behind them](/blog/mochi-math-flashcards.png)

## Start with one equation in a plain card

Mochi uses KaTeX to render LaTeX math. Surround a short expression with single dollar signs for inline math; use double dollar signs for a display equation on its own line. [Mochi math documentation](https://mochi.cards/docs/markdown/advanced-formatting/)

Use this short card to check your setup before creating the three-card deck:

```markdown
For $3x^{2}-11x+6=0$, identify the coefficients.

---

$a=3$, $b=-11$, and $c=6$.
```

Create an ordinary card **without a template** and copy the contents of the example, excluding the surrounding triple backticks and the word `markdown`. Mochi's `---` line divides the question from the next side. [Mochi card documentation](https://mochi.cards/docs/cards/)

Review it before adding more cards. The first side should contain only the equation and the instruction; reveal the next side to check the signed coefficients. These are expected results for you to inspect in your app.

If the pasted content doesn't appear, check for an applied template. Mochi retains the card's raw Markdown but renders the template instead. Editing the ignored source won't repair the visible equation. [Mochi's template explanation](https://mochi.cards/docs/cards/#templates-and-placeholders)

## Write the fraction so its meaning is visible

The quadratic formula needs the whole numerator divided by 2a:

```markdown
$$
x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}
$$
```

Use braces to group the full numerator and denominator in `\frac{numerator}{denominator}`. Braces also make the scope of a square root or exponent explicit: `\sqrt{b^{2}-4ac}` keeps the whole discriminant under the root. `\pm` supplies the plus-or-minus symbol. These commands appear in [KaTeX's supported-function reference](https://katex.org/docs/supported).

Write one backslash before a command such as `\frac`. The double backslash `\\` has a different job: separating rows in a multiline environment. Don't double every command's backslash when pasting into a card.

Display math is useful for a fraction you need to read carefully. Inline math keeps a short condition, such as `$a\ne0$`, beside the words it qualifies. Choose the format around the question's reading needs.

## Build a tiny quadratic deck

Make each example below a separate card. The first stores a formula with its condition, the second asks you to interpret the discriminant, and the third makes you use both.

The formula and root classifications follow [OpenStax's quadratic-equation guide](https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations). The worked equations below are original examples. Keep the real-coefficient assumption and a ≠ 0 in your cards so they make sense when reviewed on their own.

### Card 1: retrieve the formula and its condition

```markdown
For $ax^{2}+bx+c=0$ with real coefficients, recall the quadratic
formula and the condition on $a$.

---

$$
x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}
$$

$a\ne0$. If $a=0$, the equation isn't quadratic and this formula
divides by zero.
```

The condition belongs in what you recall. Before revealing this card, write both the formula and a ≠ 0. Remembering the equation's shape while omitting its condition leaves the answer incomplete.

### Card 2: connect the discriminant to real roots

```markdown
For $ax^{2}+bx+c=0$ with real coefficients and $a\ne0$, define
$D$ and state how its sign determines the number of distinct real roots.

---

$D=b^{2}-4ac$.

- $D>0$: two distinct real roots.
- $D=0$: one distinct real root, repeated.
- $D<0$: no real roots; two non-real complex roots.
```

“Distinct” matters: at D = 0, the plus and minus branches give the same x-value. If you keep missing one case, split that case into a separate question instead of lengthening this answer.

### Card 3: calculate before revealing

```markdown
Solve $3x^{2}-11x+6=0$ using the quadratic formula.
Find $D$ first, then both roots. Work on paper before revealing.

---

$a=3$, $b=-11$, $c=6$.

$$
\begin{aligned}
D &= (-11)^{2}-4(3)(6)=49 \\
x &= \frac{11\pm\sqrt{49}}{6} \\
  &= \frac{11\pm7}{6}
\end{aligned}
$$

The roots are $3$ and $\frac{2}{3}$.
Check: $(3x-2)(x-3)=3x^{2}-11x+6$.
```

Here, `&` marks the alignment point and `\\` starts another row. Keep `\begin{aligned}` and `\end{aligned}` inside the `$$` delimiters. KaTeX documents `aligned` for use inside math delimiters; its issues page recommends it over `align` in math mode. This advice applies to the delimited example above, rather than every way of using KaTeX. [Supported environments](https://katex.org/docs/supported#environments), [KaTeX math-mode guidance](https://katex.org/docs/issues)

Check both roots in the original equation: 3(3²) − 11(3) + 6 = 27 − 33 + 6 = 0, and 3(2/3)² − 11(2/3) + 6 = 4/3 − 22/3 + 6 = 0. Having a = 3 makes this a useful authoring example: a denominator mistake that stays hidden when a = 1 changes the result here.

## Repair three cards that fail in different ways

For each example, name the problem and write the corrected source before reading the explanation. The three failures need different repairs even though they all involve the same formula.

### A. An unfinished denominator

```markdown
$$
x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a
$$
```

The denominator's closing brace is missing. Repair `{2a` to `{2a}`, then inspect the rendered result. The source is malformed; this exercise doesn't predict the error message or appearance in your Mochi version.

### B. A fraction that can render but computes the wrong thing

```markdown
$$
x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2}a
$$
```

The braces are balanced, but a sits outside the fraction. This divides by 2 and then multiplies by a. Move a inside the denominator: `{2a}`.

For the numeric card, the wrong expression produces (11 ± 7) × 3 / 2: **27 and 6**, rather than **3 and 2/3**. Substitution catches the mistake: 3(6²) − 11(6) + 6 = 48, so 6 isn't a root. A rendering check alone would miss it.

### C. A correct answer on the question side

```markdown
Recall the quadratic formula.
$$
x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}
$$

---

Remember to include both signs.
```

Move the formula below `---`. Keep the prompt above it, and ask for the condition on a too, as in Card 1. Review the repaired card with the answer still hidden. The equation itself is correct; the task failed because it showed what you were meant to recall.

## Inspect the deck before you expand it

Use this worksheet on the three cards. Record what you actually see, including on the device where you normally review.

| Check | Expected result | Your observation |
| --- | --- | --- |
| First side | Each prompt appears while its requested answer stays hidden | — |
| Math display | Fractions, roots, exponents, and multiline steps are readable | — |
| Formula scope | The full numerator is over 2a, and the full discriminant is under the square root | — |
| Numeric answer | D = 49; roots 3 and 2/3; both satisfy the original equation | — |
| Recall task | Formula plus condition; all three sign cases; or D plus both roots, according to the card | — |

If math stays literal, check that you copied the example's contents rather than its surrounding triple backticks: code fences display source as code. [Mochi code formatting](https://mochi.cards/docs/markdown/basic-formatting/#code-blocks) Then check the dollar delimiters, braces, and command spelling. If your edits don't change what you see, revisit the template check before editing more LaTeX. These checks locate problems in the card definition; they don't establish how every app version will display a rendering failure.

Rendering an equation doesn't establish that a typed answer is mathematically equivalent to the expected one. For example, `2/3` and `4/6` name the same number, but this guide doesn't establish automatic fraction simplification or symbolic grading in Mochi. If you want typed responses, use the separate [Mochi typed-answer guide](/blog/mochi-typed-answers/) to define and inspect accepted forms. For these cards, work on paper and compare both your reasoning and your answer after revealing.

## Return to a fresh problem

Close the worked card and solve **2x² − 9x + 7 = 0** on paper. Find the discriminant, calculate both roots, and substitute them back into the original equation before checking below.

The answer is D = 81 − 56 = 25, with roots (9 ± 5) / 4: **7/2 and 1**. Substitution gives 49/2 − 63/2 + 7 = 0 for 7/2, and 2 − 9 + 7 = 0 for 1.

If you remembered the formula but lost a sign, make the missed decision your next card. If you need more unfamiliar equations, try [discriminant practice](/blog/discriminant-practice/). The broader [math flashcard workflow](/blog/how-to-use-flashcards-for-math/) helps connect formula recall to problem practice; the [Mochi review](/blog/mochi-alternative/) covers the app's wider study workflow.
