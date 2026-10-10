---
title: "Logarithmic Equations Practice: Domains and Extraneous Solutions"
description: "Practice logarithmic equations with worked answers. Check original domains, reject extraneous roots, and avoid losing valid solutions when rewriting logs."
date: "2026-10-10"
image: "/blog/logarithmic-equations-practice.png"
keywords:
  - "logarithmic equations practice"
  - "logarithmic equations extraneous solutions"
  - "logarithm domain restrictions"
  - "solving logarithmic equations"
  - "ln x squared vs 2 ln x"
---

Combining log₂(x − 1) + log₂(x − 3) = 3 gives a quadratic with roots 5 and −1. Only 5 solves the original equation. Put the same two factors inside a single logarithm, log₂((x − 1)(x − 3)) = 3, and both roots work. The algebra is the same; the original arguments are different.

Use these eight practice problems to learn which candidates actually solve the equation you started with. First work through the two contrasts: separate logs versus one log of a product, then ln(x²) versus 2ln(x). Try the exercises before reading their worked answers. All logarithms and solutions here are real.

![A gardener checks a broad seedling root ball against a narrow pot beside a smaller seedling and a roomy shared planter](/blog/logarithmic-equations-practice.png)

## Write the domain before combining logs

For a real logarithm, the base must satisfy **b > 0 and b ≠ 1**, and its argument must be **strictly positive**. Zero is excluded too. These are the conditions in [OpenStax's definition of a logarithmic function](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-3-logarithmic-functions).

The argument is the entire expression inside the parentheses. For ln(x²), check x² > 0. For ln(x − 4), check x − 4 > 0. You aren't checking whether x itself is positive unless x is the argument. The **domain** is the set of x-values for which every part of the original equation is defined.

Use this order on paper:

1. List each original log argument and require it to be positive. Keep any denominator restrictions as well.
2. Combine logs or isolate a logarithm, carrying those restrictions beside your working.
3. Convert to exponential form, or equate positive arguments when both sides are single logs with the same base. Solve the resulting algebraic equation for candidates.
4. Reject candidates outside the original domain, then substitute the remaining ones into the original equation to check equality.

An **extraneous solution** satisfies a transformed equation but fails the original one. [OpenStax's guide to logarithmic equations](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-6-exponential-and-logarithmic-equations) recommends checking the original equation for these candidates. A positive argument makes a logarithm defined; it doesn't by itself prove the equation is true.

Here, log₂ means base 2, log₃ means base 3, and so on. The notation ln means the natural logarithm, with base e.

The two conversions used below are:

```text
log_b(U) = c          ⇔ U = b^c
log_b(U) = log_b(V)   ⇔ U = V, with U > 0 and V > 0
```

Both require a valid base. The second uses the one-to-one property: for a fixed base, different positive arguments have different logarithms. It doesn't mean you can cancel the word “log” from a sum of logarithms.

## Separate arguments need separate checks

Start with equation A:

```text
log₂(x − 1) + log₂(x − 3) = 3

Original restrictions:
x − 1 > 0 and x − 3 > 0
Together: x > 3
```

The product rule lets you combine a sum of logs with the same base when both arguments are positive. The quotient rule similarly combines a difference. [OpenStax derives these rules with positive arguments](https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-5-logarithmic-properties):

```text
log_b(U) + log_b(V) = log_b(UV)       for U > 0, V > 0
log_b(U) − log_b(V) = log_b(U/V)      for U > 0, V > 0
```

Carry x > 3 through the calculation:

```text
log₂((x − 1)(x − 3)) = 3
(x − 1)(x − 3) = 2³ = 8
x² − 4x − 5 = 0
(x − 5)(x + 1) = 0
Candidates: x = 5 or x = −1
```

At x = 5, the original left side is log₂(4) + log₂(2) = 2 + 1 = 3. At x = −1, it would contain log₂(−2) and log₂(−4), which are undefined over the real numbers. **Equation A has one solution: x = 5.**

Now start with equation B instead:

```text
log₂((x − 1)(x − 3)) = 3

Original restriction:
(x − 1)(x − 3) > 0
So x < 1 or x > 3
```

There is one log argument: the product. Below 1, both factors are negative and their product is positive. Above 3, both are positive. At 1 and 3 the product is zero; between them it is negative.

The same quadratic gives 5 and −1. At either candidate, the original product is 8, so the left side is log₂(8) = 3. **Equation B has two solutions: x = 5 and x = −1.** Splitting it into two separate logs would discard the valid negative root. Equations A and B agree on x > 3; B also allows x < 1. When combining A's logs, keeping x > 3 attached to the new equation preserves the original solutions.

### Keep an original-argument acceptance table

For each new problem, list the candidates and evaluate the arguments as they appeared before any rewriting. Here's that table for the two equations:

| Equation | Candidate | Original log argument(s) | Decision |
| --- | --- | --- | --- |
| A: two separate logs | 5 | 4 and 2 | Both positive; 2 + 1 = 3. Accept. |
| A: two separate logs | −1 | −2 and −4 | Neither is positive. Reject. |
| B: one log of a product | 5 | 4 × 2 = 8 | Positive; log₂(8) = 3. Accept. |
| B: one log of a product | −1 | (−2)(−4) = 8 | Positive; log₂(8) = 3. Accept. |

Factoring finds the candidates. This table decides which ones solve the original logarithmic equation. If forming or solving the quadratic is the difficult step, the [discriminant practice guide](/blog/discriminant-practice/) covers its real-root count.

## ln(x²) and 2ln(x) have different domains

The power rule ln(x²) = 2ln(x) works for **x > 0**. But ln(x²) is also defined for negative x, because squaring makes its argument positive. The two expressions aren't interchangeable across the full domain of ln(x²).

Compare:

```text
ln(x²) = ln(36)
Domain: x ≠ 0
x² = 36
x = 6 or x = −6
```

Both candidates put 36 inside the original logarithm. Now solve the other equation:

```text
2ln(x) = ln(36)
Domain: x > 0
ln(x) = ln(36)/2 = ln(6)
x = 6
```

Changing the first equation into the second without tracking the domain loses x = −6. Over all nonzero real x, the domain-preserving identity is **ln(x²) = 2ln(|x|)**. The vertical bars mean absolute value: |x| is positive for every nonzero x, and |x|² = x².

The same check applies to a shifted square. ln((x + 4)²) requires x ≠ −4; 2ln(x + 4) requires x > −4.

## A small base or a negative answer is allowed

A logarithm's argument must be positive, but its value can be negative. For example, log₄(1/4) = −1 because 4⁻¹ = 1/4.

A base between 0 and 1 is also valid. Write `log_(0.5)` for a base-0.5 logarithm:

```text
log_(0.5)(4x − 1) = 2
Domain: x > 1/4

4x − 1 = (0.5)² = 1/4
4x = 5/4
x = 5/16
```

At x = 5/16, the argument is 1/4, and (0.5)² = 1/4 verifies the equation. Don't replace the base condition with b > 1, or the argument condition with “the log must be positive.”

## Try eight logarithmic equations

For each problem, write the original domain, find every algebraic candidate, and give the accepted real solutions. Use exact answers. In problems 5 and 6, pay attention to where the square is written.

1. log₃(2x + 1) = 2.
2. log₄(x + 2) = −1.
3. log₂(x − 2) + log₂(x − 5) = 2.
4. log₂((x − 2)(x − 5)) = 2.
5. ln((x + 1)²) = ln(16).
6. 2ln(x + 1) = ln(16).
7. log₃(x + 8) − log₃(x + 2) = 2.
8. log₅(x − 4) = log₅(2x − 3).

## Answers with the domain checks

### 1. One log and a linear argument

**x = 4.** The domain is 2x + 1 > 0, or x > −1/2. Convert to exponential form: 2x + 1 = 3² = 9, so 2x = 8 and x = 4. The original argument is 9, and log₃(9) = 2.

### 2. A negative x can be valid

**x = −7/4.** The domain is x > −2. The equation becomes x + 2 = 4⁻¹ = 1/4, giving x = 1/4 − 2 = −7/4. This is greater than −2, and the original argument is 1/4. Since log₄(1/4) = −1, it checks. Rejecting every negative x would remove a valid solution.

### 3. Two candidates, one accepted

**x = 6.** The original arguments require x > 2 and x > 5, so the domain is x > 5. Combine the logs on that domain:

```text
log₂((x − 2)(x − 5)) = 2
(x − 2)(x − 5) = 4
x² − 7x + 6 = 0
(x − 1)(x − 6) = 0
```

The candidates are 1 and 6. At 1, the original arguments are −1 and −4: reject it. At 6, they are 4 and 1, giving log₂(4) + log₂(1) = 2 + 0 = 2. Accept 6.

### 4. One product argument, two accepted

**x = 1 and x = 6.** The original domain is (x − 2)(x − 5) > 0, so x < 2 or x > 5. Converting to exponential form produces the same quadratic as problem 3. At 1, the product is (−1)(−4) = 4. At 6, it is 4 × 1 = 4. Both give log₂(4) = 2. The factor signs matter only through their product in this original equation.

### 5. Keep both signs after a square

**x = −5 and x = 3.** The domain is x ≠ −1. Both sides have natural logarithms of positive arguments, so set those arguments equal: (x + 1)² = 16. Then x + 1 = ±4, giving −5 and 3. Substituting either value into the original square gives 16, so both sides equal ln(16).

### 6. The unsquared argument restricts x

**x = 3.** Here the original domain is x + 1 > 0, or x > −1. Divide by 2: ln(x + 1) = ln(16)/2 = ln(4). Thus x + 1 = 4 and x = 3. The original left side is 2ln(4) = ln(16). The value −5 from problem 5 cannot work here because ln(−4) isn't real.

### 7. A difference becomes a quotient

**x = −5/4.** The original restrictions are x > −8 and x > −2, so use x > −2. Apply the quotient rule:

```text
log₃((x + 8)/(x + 2)) = 2
(x + 8)/(x + 2) = 9
x + 8 = 9x + 18
−10 = 8x
x = −5/4
```

Multiplying by x + 2 is allowed on the original domain, where that denominator is positive. At −5/4, the original arguments are 27/4 and 3/4. Both are positive, and their ratio is 9, so the original difference is log₃(9) = 2.

### 8. Equal negative arguments don't make real logs

**No real solution.** The original arguments require x > 4 and x > 3/2; together, x > 4. On that domain, equal logarithms with the same base have equal arguments:

```text
x − 4 = 2x − 3
x = −1
```

The only algebraic candidate is outside the domain. At −1, both original arguments are −5. Their equality doesn't rescue the equation: neither logarithm is defined over the real numbers. Reject −1, leaving no real solutions.

## Review the decision, then solve something fresh

If you missed a problem, locate the first incorrect step. A factoring or arithmetic mistake needs another written calculation. Accepting an undefined logarithm means you need to check the original domain. Losing a valid negative root means you need to examine whether a rewrite narrowed that domain.

Make a short flashcard for a rule you couldn't recall, then use it before solving another equation. Keep the full solution in your written practice and use each card to recall one condition at a time.

| Front | Back |
| --- | --- |
| What domain must survive when combining log₂(x − 2) + log₂(x − 5)? | x > 5. Each original argument must be positive. |
| Can ln(x²) be replaced by 2ln(x) for negative x? | No. ln(x²) is defined for x ≠ 0; 2ln(x) needs x > 0. Use 2ln(|x|) for x ≠ 0. |
| Should a negative candidate x automatically be rejected? | No. Evaluate every original log argument and check the equation. |

Our guides to [using flashcards for math](/blog/how-to-use-flashcards-for-math/) and [turning practice questions into flashcards](/blog/how-to-turn-practice-questions-into-flashcards/) explain how to separate short recall prompts from full written practice.

After reviewing a missed decision, solve **log₂(x + 1) + log₂(x − 2) = 2** on paper. Write the domain before looking below.

The domain is x > 2. Combining gives (x + 1)(x − 2) = 4, then x² − x − 6 = (x − 3)(x + 2) = 0. Reject −2 because its original arguments are −1 and −4. Accept 3: log₂(4) + log₂(1) = 2. Check the original arguments even when the quadratic factors neatly.
