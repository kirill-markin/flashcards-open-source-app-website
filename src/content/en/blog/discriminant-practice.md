---
title: "Discriminant Practice: Real Roots, Parameters, and Common Mistakes"
description: "Practice the quadratic discriminant with worked examples and explained answers. Check coefficients, repeated roots, parameter boundaries, and when an equation becomes linear."
date: "2026-10-06"
image: "/blog/discriminant-practice.png"
keywords:
  - "discriminant practice"
  - "discriminant practice questions"
  - "number of real roots"
  - "quadratic discriminant"
  - "discriminant with parameters"
---

In 2x² − 7x = 4, the constant you need for the discriminant is −4. Reading c = 4 straight from the right side gives the wrong calculation before you've even squared anything. Move everything to one side first: 2x² − 7x − 4 = 0.

The quadratic discriminant tells you how many distinct real roots an equation has before you solve it. Here, “distinct” means different x-values: a repeated root counts as one. Work through the examples, then try the ten discriminant practice questions before reading their answers.

![A man checks a bowed wooden chair rail against a metal straightedge, with a straight replacement strip on the bench](/blog/discriminant-practice.png)

## Put the equation in zero form first

Use the form **ax² + bx + c = 0**, where a, b, and c are real numbers and **a ≠ 0**. That's the standard form used in [OpenStax's quadratic-equation guide](https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations).

Read the coefficients with their signs. A missing term has coefficient zero: 5x² − 8 = 0 has a = 5, b = 0, and c = −8. Then calculate:

```text
D = b² − 4ac
```

| Discriminant | Number of distinct real roots | Graph of y = ax² + bx + c |
| --- | --- | --- |
| D > 0 | Two | Crosses the x-axis twice |
| D = 0 | One, a repeated root | Touches the x-axis at its vertex |
| D < 0 | None | Does not meet the x-axis |

These root counts follow from the square-root part of the [quadratic formula](https://openstax.org/books/intermediate-algebra-2e/pages/9-3-solve-quadratic-equations-using-the-quadratic-formula):

```text
x = (−b ± √D) / (2a)
```

When D > 0, adding or subtracting √D gives two different real values. At D = 0, both give the same value. A negative D has no real square root, so the equation has no real solutions; it still has two non-real complex roots.

When a = 0, the equation isn't quadratic and this table doesn't apply.

## Work through the signs

Return to the opening equation:

```text
2x² − 7x = 4
2x² − 7x − 4 = 0

a = 2, b = −7, c = −4
D = (−7)² − 4(2)(−4)
  = 49 + 32
  = 81
```

There are two distinct real roots. Notice both sign decisions: (−7)² is positive, and subtracting the negative product 4(2)(−4) adds 32.

If you also need the roots, use x = (7 ± 9)/4, giving 4 and −1/2. Substitution into the original equation checks them. D alone doesn't give the roots.

Now compare two other equations:

```text
4x² + 12x + 9 = 0
D = 12² − 4(4)(9) = 144 − 144 = 0

3x² − 4x + 5 = 0
D = (−4)² − 4(3)(5) = 16 − 60 = −44
```

The first has one distinct real root, x = −3/2. Its left side is (2x + 3)², so the factor 2x + 3 occurs twice. That's what makes the root repeated.

The second has no real roots.

## Opening direction and root count answer different questions

For y = ax² + bx + c, positive a means the parabola opens upward; negative a means it opens downward. The discriminant determines its number of x-intercepts. [OpenStax's graphing guide](https://openstax.org/books/intermediate-algebra-2e/pages/9-6-graph-quadratic-functions-using-properties) explains the connection between quadratic solutions and these intercepts.

For example, y = −2x² + 7x + 4 opens downward and has D = 81, so it crosses the x-axis twice.

Be careful about which graph you're considering. For 2x² − 7x = 4, graph y = 2x² − 7x − 4 to count x-intercepts. If you graph y = 2x² − 7x instead, the solutions are where that curve meets the horizontal line y = 4.

## With parameters, check whether it's still quadratic

In x² + 6x + k = 0, only the constant changes:

```text
D = 6² − 4(1)(k) = 36 − 4k
```

So k < 9 gives two distinct real roots, k = 9 gives one repeated real root, and k > 9 gives none. Check the boundary by substitution: at k = 9, the equation is (x + 3)² = 0.

Now let the parameter change the leading coefficient:

```text
(k − 2)x² + 4x + 1 = 0
a = k − 2
```

At **k = 2**, the x² term disappears. Solve the remaining equation directly: 4x + 1 = 0, giving x = −1/4. This is a linear equation with one solution.

For k ≠ 2, calculate D = 16 − 4(k − 2) = 24 − 4k. The complete classification is:

| Parameter | Distinct real solutions |
| --- | --- |
| k < 6, with k ≠ 2 | Two |
| k = 2 | One, from the linear equation |
| k = 6 | One repeated quadratic root |
| k > 6 | None |

At k = 6, the equation becomes 4x² + 4x + 1 = (2x + 1)² = 0, with repeated root x = −1/2.

The two values to check have different jobs: k = 2 removes the quadratic term; k = 6 makes the quadratic discriminant zero. Keep both in your answer.

More generally, when a = 0, inspect bx + c = 0. If b ≠ 0, it's linear. If b = 0 and c ≠ 0, there are no solutions. If b = c = 0, every real x satisfies the identity 0 = 0.

## Try these discriminant practice questions

All parameters are real. For questions 1–6, give the signed coefficients, D, and number of distinct real roots. For questions 7–10, explain your decision too.

1. 3x² − 8x + 2 = 0.
2. 7x² + 5 = 0.
3. 9x² + 12x + 4 = 0.
4. 4x² + 3x = 2x² + 9.
5. 6x² − 11x = 0.
6. −2x² + 3x − 5 = 0. Also state whether y = −2x² + 3x − 5 opens upward or downward.
7. Classify the number of distinct real roots of x² − 10x + t = 0 for every real t. Find the root at the boundary.
8. Classify the number of distinct real solutions of (m + 1)x² − 6x + 2 = 0 for every real m. Check the value that makes the equation linear.
9. Compare x² + 4x + 1 = 0 and −5x² − 20x − 5 = 0. Calculate both discriminants. Do the equations have the same roots?
10. For x² − 9x + 14 = 0, a student writes D = −81 − 56 = −137 and concludes there are no real roots. Identify the first error and correct the result.

## Answers with the reasoning

1. **Two distinct real roots.** a = 3, b = −8, c = 2. D = (−8)² − 4(3)(2) = 64 − 24 = 40, which is positive. You don't need to simplify √40 to count the roots.
2. **No real roots.** a = 7, b = 0, c = 5. D = 0² − 4(7)(5) = −140. The missing x term means b = 0, not b = 1.
3. **One repeated real root.** a = 9, b = 12, c = 4. D = 144 − 144 = 0. The factorization (3x + 2)² = 0 confirms x = −2/3 is the only distinct value.
4. **Two distinct real roots.** Rearrange to 2x² + 3x − 9 = 0. Then a = 2, b = 3, c = −9, giving D = 9 + 72 = 81. Using a = 4 would miss the 2x² on the right.
5. **Two distinct real roots.** a = 6, b = −11, c = 0. D = 121. Factoring gives x(6x − 11) = 0, so the roots are 0 and 11/6. A zero constant doesn't force a repeated root.
6. **No real roots; opens downward.** a = −2, b = 3, c = −5. D = 3² − 4(−2)(−5) = 9 − 40 = −31. The product ac is positive because both factors are negative. The negative a determines the opening direction.
7. **Two for t < 25; one repeated root for t = 25; none for t > 25.** D = 100 − 4t. At the boundary, x² − 10x + 25 = (x − 5)² = 0, so x = 5 is repeated.
8. **Check m = −1 separately.** Then the equation is −6x + 2 = 0, with one solution, x = 1/3. For m ≠ −1, D = 36 − 8(m + 1) = 28 − 8m: there are two distinct real roots for m < 7/2 and no real roots for m > 7/2. At m = 7/2, a = 9/2 and D = 0, so the repeated root is x = −b/(2a) = 6/9 = 2/3. Thus both m = −1 and m = 7/2 give one distinct real solution, for different reasons.
9. **D = 12 and D = 300; the roots are the same.** For the first equation, D = 4² − 4(1)(1) = 12. For the second, D = (−20)² − 4(−5)(−5) = 400 − 100 = 300. The second equation is the first multiplied by −5. Multiplication by a nonzero constant preserves the solutions, even though the numerical discriminant changes.
10. **The square of −9 is +81.** Use b = −9 with parentheses: D = (−9)² − 4(1)(14) = 81 − 56 = 25. There are two distinct real roots; (x − 2)(x − 7) = 0 confirms them.

Question 9 illustrates a useful check. Multiplying all coefficients by a nonzero real constant s gives:

```text
new D = (sb)² − 4(sa)(sc)
      = s²(b² − 4ac)
      = s²D
```

Since s² is positive, the sign stays the same. Multiplying by zero would turn the equation into 0 = 0, which every real x satisfies, so that case is excluded.

## Turn a missed decision into a small review card

Find the first error in your working. A wrong zero form needs different practice from a wrong square. Choose a card for that missed decision.

| Front | Back |
| --- | --- |
| For 2x² − 7x = 4, what is c in zero form? | c = −4. Subtract 4 to get 2x² − 7x − 4 = 0. |
| In x² − 9x + 14 = 0, what is b²? | (−9)² = 81. Square the whole signed coefficient. |
| A quadratic with a ≠ 0 has D = 0. How many distinct real roots? | One repeated root: x = −b/(2a). |
| In (m + 1)x² − 6x + 2 = 0, which m needs a separate check? | m = −1. Then a = 0 and the equation is linear. |
| If a quadratic equation is multiplied by −5, what happens to D? | D is multiplied by 25. Its sign and the equation's roots stay the same. |

Use paper or any front/back card system. Answer before revealing the back. Our guides to [using flashcards for math](/blog/how-to-use-flashcards-for-math/) and [making better flashcards](/blog/how-to-make-better-flashcards/) explain how to keep these prompts focused.

After reviewing a missed step, try **5x² − 4x = 1** on paper: move the constant, identify the coefficients, and calculate D before checking the result below.

You should get a = 5, b = −4, c = −1, and D = 16 + 20 = 36, giving two distinct real roots. If you reached that result without copying an earlier solution, you've applied the decisions to a fresh problem.
