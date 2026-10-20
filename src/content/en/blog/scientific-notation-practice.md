---
title: "Scientific Notation Practice: Conversions, Operations, and Error Checks"
description: "Practice scientific notation conversions and arithmetic with worked answers, exponent checks, and a short plan for fixing the step you missed."
date: "2026-10-07"
image: "/blog/scientific-notation-practice.png"
keywords:
  - "scientific notation practice"
  - "scientific notation practice problems with answers"
  - "scientific notation operations"
  - "negative exponents"
  - "scientific notation error checks"
---

`0.46 × 10^6` and `4.6 × 10^5` both equal `460,000`. The first has the right value, but its coefficient is too small for normalized scientific notation. Changing it to `4.6 × 10^7` would create a different problem: the value would become one hundred times too large.

Scientific notation practice needs both checks: does each step preserve the value, and does the final answer meet the notation rule? The worked examples below show how to check both. Then try the 12 mixed questions, including two incorrect calculations to diagnose, before reading the answers.

All numerical inputs here are **exact arithmetic values**. Keep every digit needed for the exact answer; these exercises don't ask for significant-figure rounding. For measured quantities, use the separate [significant figures in mixed operations guide](/blog/significant-figures-mixed-operations/).

![A man gathers a yellow rope from loose loops on a lakeside dock into a compact coil in his lap](/blog/scientific-notation-practice.png)

## What counts as a finished answer?

For a nonzero number, normalized scientific notation has the form `a × 10^n`, where `n` is an integer and `1 ≤ |a| < 10`. The coefficient is `a`, the number multiplying the power of ten. The bars mean absolute value: ignore its sign when checking its size. A negative number keeps its minus sign on the coefficient.

[OpenStax's prealgebra lesson](https://openstax.org/books/prealgebra-2e/pages/10-5-integer-exponents-and-scientific-notation) introduces the coefficient range and decimal conversion process. For signed numbers, use the range on the coefficient's absolute value:

| Expression | Value | Normalized? |
| --- | --- | --- |
| `5.72 × 10^-3` | `0.00572` | Yes |
| `57.2 × 10^-4` | `0.00572` | No: coefficient magnitude is at least 10 |
| `0.572 × 10^-2` | `0.00572` | No: coefficient magnitude is below 1 |
| `-5.72 × 10^-3` | `-0.00572` | Yes: the coefficient's magnitude is 5.72 |

Zero is the exception. Write it as `0`; it cannot have a coefficient satisfying `1 ≤ |a| < 10` multiplied by a power of ten.

An exponent of zero is allowed: `4.6 = 4.6 × 10^0`, because `10^0 = 1`. A number whose magnitude is already at least one and less than ten needs no decimal-point shift.

### A negative exponent doesn't make the number negative

Compare these three values:

```text
10^-4 = 1 / 10,000 = 0.0001
5.72 × 10^-4 = 0.000572
-5.72 × 10^-4 = -0.000572
```

The exponent controls the power of ten. The coefficient controls the number's sign. Since every integer power of ten is positive, the minus sign in the exponent never supplies a negative value.

## Convert, then reconstruct the original number

To convert a nonzero decimal number:

1. Place the decimal point after the first nonzero digit, keeping the number's sign. This gives the coefficient.
2. Count the places between the original decimal-point position and the new one. For a whole number, the original position is after the units digit.
3. If the coefficient is smaller in magnitude than the original number, use a positive exponent to scale it back up. If it's larger in magnitude, use a negative exponent to scale it back down. No shift means exponent zero.

Start with `6,840,000`. The coefficient is `6.84`, and the decimal-point positions are six places apart. Multiplying that coefficient by one million reconstructs the original number:

```text
6,840,000 = 6.84 × 1,000,000 = 6.84 × 10^6
```

For `-0.0000528`, the coefficient is `-5.28`. The positions are five places apart. The coefficient has the larger magnitude, so divide it by one hundred thousand to reconstruct the original:

```text
-0.0000528 = -5.28 / 100,000 = -5.28 × 10^-5
```

That reconstruction catches a reversed exponent sign. `-5.28 × 10^5` would be `-528,000`, far from a number whose magnitude is less than one.

To go back to decimal notation, apply the power to the coefficient:

```text
8.17 × 10^3 = 8170
8.17 × 10^-3 = 0.00817
```

### When the coefficient changes, compensate in the exponent

Normalize `57.2 × 10^-4` by dividing the coefficient by ten. To keep the value unchanged, multiply the power-of-ten factor by ten:

```text
57.2 × 10^-4
= (5.72 × 10) × 10^-4
= 5.72 × 10^-3
```

The exponent rises from `-4` to `-3`. For a coefficient with magnitude below one, the compensation goes the other way:

```text
0.084 × 10^5
= (8.4 × 10^-2) × 10^5
= 8.4 × 10^3
```

The coefficient becomes one hundred times larger, so the power-of-ten factor becomes one hundred times smaller. Both expressions still equal `8400`.

If a decimal-point instruction feels ambiguous, check the value this way. Dividing the coefficient by ten requires adding one to the exponent; multiplying the coefficient by ten requires subtracting one.

## Multiply or divide the two parts separately

For multiplication, multiply the coefficients and add the exponents. For division, divide the coefficients and subtract the denominator's exponent from the numerator's. Then normalize the result. The divisor must be nonzero. These are the product and quotient rules covered in [OpenStax's exponent lesson](https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation).

### Multiplication may leave a coefficient above ten

```text
(4.8 × 10^-3) × (3.5 × 10^6)
= (4.8 × 3.5) × 10^(-3 + 6)
= 16.8 × 10^3
= 1.68 × 10^4
```

`16.8 × 10^3` already has the correct value. The last line finishes the notation. Its exponent increases because the coefficient was divided by ten.

As a check, `0.0048 × 3,500,000 = 16,800`, which agrees with `1.68 × 10^4`.

### Subtract the whole exponent, including its sign

```text
(6.3 × 10^-4) ÷ (2.1 × 10^-7)
= (6.3 ÷ 2.1) × 10^(-4 - (-7))
= 3 × 10^3
```

Write the parentheses before simplifying: `-4 - (-7) = -4 + 7 = 3`. Using `-4 - 7` would change the quotient to `3 × 10^-11`.

There is also a size check. Dividing `0.00063` by the smaller positive number `0.00000021` gives a result greater than one, consistent with `3000`.

Division can also leave a coefficient with magnitude below one:

```text
(2.4 × 10^5) ÷ (6 × 10^8)
= 0.4 × 10^-3
= 4 × 10^-4
```

The coefficient grows by ten during normalization, so the exponent decreases by one. The value remains `0.0004`.

## Match the powers before adding or subtracting

For addition or subtraction, first express both terms with the same power of ten. Combine the coefficients and keep that shared power. Normalize afterward if necessary. [OpenStax's contemporary mathematics lesson](https://openstax.org/books/contemporary-mathematics/pages/3-9-scientific-notation) explains this using the distributive property.

For `7.2 × 10^4 + 5.6 × 10^3`, rewrite the second term:

```text
5.6 × 10^3 = 0.56 × 10^4

7.2 × 10^4 + 0.56 × 10^4
= (7.2 + 0.56) × 10^4
= 7.76 × 10^4
```

The temporary coefficient `0.56` is useful even though it isn't normalized: it puts both terms on the same scale. Intermediate expressions can have coefficients outside the allowed range. Check normalization once you've finished the arithmetic.

Check in decimal notation: `72,000 + 5600 = 77,600`. Simply adding the original coefficients, `7.2 + 5.6`, would treat thousands as tens of thousands. Adding the exponents is a multiplication rule and doesn't apply to this sum.

For subtraction, the result's sign follows the coefficient arithmetic:

```text
1.7 × 10^-3 - 6.2 × 10^-3
= (1.7 - 6.2) × 10^-3
= -4.5 × 10^-3
```

The second term is larger than the first, so a negative answer makes sense. Its magnitude is `0.0045`.

### Read a calculator's E notation as a power of ten

A display such as `5.09E-4` means `5.09 × 10^-4`, or `0.000509`. Here `E` marks the power of ten; it isn't multiplication by Euler's number. OpenStax's [college algebra lesson](https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation) explains this display convention. Read the coefficient and exponent separately when comparing a calculator result with your written answer.

## Scientific notation practice: 12 mixed questions

Work on paper without the answer key beside you. Show a conversion or arithmetic line before your final answer. For questions 1, 2, and 4–10, give normalized scientific notation; question 3 asks for decimal notation. For 11 and 12, identify the earliest incorrect step and repair it.

1. Write `9,360,000` in scientific notation.
2. Write `-0.0000742` in scientific notation.
3. Write `5.09 × 10^-4` in decimal notation.
4. Normalize `0.063 × 10^7`.
5. Normalize `46.7 × 10^-6`.
6. Calculate `(3.2 × 10^4) × (4.5 × 10^-7)`.
7. Calculate `(-8.4 × 10^-3) ÷ (2.8 × 10^-6)`.
8. Calculate `(1.8 × 10^-5) ÷ (6 × 10^2)`.
9. Calculate `2.6 × 10^5 + 7.3 × 10^4`.
10. Calculate `4.1 × 10^-3 - 9.6 × 10^-3`.
11. A learner writes `(4.2 × 10^-5) ÷ (1.4 × 10^-2) = 3 × 10^(-5 - 2) = 3 × 10^-7`. Where did the value first change incorrectly?
12. A learner writes `(6 × 10^2) × (4 × 10^3) = 24 × 10^5 = 2.4 × 10^4`. Is the intermediate product wrong, unfinished, or already normalized? Repair the final line.

### Answers with the step to check

1. **`9.36 × 10^6`.** Reconstruct it as `9.36 × 1,000,000 = 9,360,000`. The coefficient satisfies `1 ≤ 9.36 < 10`.
2. **`-7.42 × 10^-5`.** `-7.42 ÷ 100,000 = -0.0000742`. Keep the negative coefficient and the negative exponent: they perform different jobs.
3. **`0.000509`.** Divide `5.09` by `10,000`. The zero between 5 and 9 is part of the coefficient and stays in the decimal answer.
4. **`6.3 × 10^5`.** The coefficient is multiplied by `100`, so subtract two from the exponent: `7 - 2 = 5`. Both forms equal `630,000`.
5. **`4.67 × 10^-5`.** Divide the coefficient by ten and add one to the exponent: `-6 + 1 = -5`. Both forms equal `0.0000467`.
6. **`1.44 × 10^-2`.** `3.2 × 4.5 = 14.4` and `4 + (-7) = -3`, giving `14.4 × 10^-3`. Normalize by dividing the coefficient by ten and raising the exponent to `-2`.
7. **`-3 × 10^3`.** The coefficient is `-8.4 ÷ 2.8 = -3`; the exponent is `-3 - (-6) = 3`. A negative number divided by a positive number stays negative.
8. **`3 × 10^-8`.** The first result is `0.3 × 10^(-5 - 2) = 0.3 × 10^-7`. Multiply the coefficient by ten and decrease the exponent to `-8`.
9. **`3.33 × 10^5`.** Rewrite `7.3 × 10^4` as `0.73 × 10^5`, then add: `(2.6 + 0.73) × 10^5`. Decimal check: `260,000 + 73,000 = 333,000`.
10. **`-5.5 × 10^-3`.** The powers already match, so calculate `4.1 - 9.6 = -5.5`. The result is normalized because the coefficient's absolute value is `5.5`.
11. **The denominator's negative exponent was lost.** The coefficient `3` is correct. The exponent should be `-5 - (-2) = -3`, so the answer is **`3 × 10^-3`**. The first equality is the faulty one; the later evaluation of `-5 - 2` is consistent with that faulty setup.
12. **The intermediate product is correct but unfinished.** `6 × 4 = 24` and `2 + 3 = 5`, giving `24 × 10^5`. Dividing 24 by ten requires increasing the exponent: **`2.4 × 10^6`**. The second equality is wrong. Check: `600 × 4000 = 2,400,000`.

## Choose a fresh task from the mistake you made

When checking your work, mark the earliest line that changes the value incorrectly. If every equality preserves it, inspect the final coefficient range instead. Those two checks tell you what to practice next.

| Task | What went wrong | Reusable recall prompt | Next written task |
| --- | --- | --- | --- |
| A | You gave a decimal value with magnitude between zero and one a positive exponent | What does `10^-n` mean for positive integer `n`? | Convert `0.0000863`, then reconstruct the original value |
| B | You stopped at a correct coefficient outside the allowed range | What range must the absolute value of the coefficient satisfy? | Normalize `76.5 × 10^-4` and `0.092 × 10^6`; check both values |
| C | You changed the coefficient and exponent in directions that changed the value | If I divide the coefficient by ten, how must the exponent change? | Normalize `38.4 × 10^-6`, writing the compensating factor explicitly |
| D | You lost the minus sign on the denominator's exponent | How do I write the exponent subtraction before simplifying? | Calculate `(9.1 × 10^-4) ÷ (1.3 × 10^-8)`, showing parentheses |
| E | You added coefficients while the powers differed | What must match before combining coefficients in a sum? | Add `5.8 × 10^3 + 2.4 × 10^2` after rewriting with a shared power |
| F | You treated a negative exponent as a negative answer | Which part controls the number's sign? | Write `8.6 × 10^-3` and `-8.6 × 10^-3` in decimal notation |

Check only after working your chosen task:

- **A:** `8.63 × 10^-5`; multiplying `8.63` by `0.00001` returns `0.0000863`.
- **B:** `7.65 × 10^-3` and `9.2 × 10^4`. Their decimal values are `0.00765` and `92,000`.
- **C:** `(3.84 × 10) × 10^-6 = 3.84 × 10^-5`.
- **D:** `7 × 10^4`, since `9.1 ÷ 1.3 = 7` and `-4 - (-8) = 4`.
- **E:** `(5.8 + 0.24) × 10^3 = 6.04 × 10^3`.
- **F:** `0.0086` and `-0.0086`. The coefficient's sign makes the difference.

A repair card can be short:

```text
Front: In scientific notation, I multiply the coefficient by 100.
How must I change the exponent to preserve the value?
Back: Subtract 2 from the exponent, because 100 = 10^2.
```

Put the reusable decision on the card, then practice applying it to new numbers on paper. The [practice-questions-to-flashcards guide](/blog/how-to-turn-practice-questions-into-flashcards/) develops that workflow for other missed questions too.

After question 11, task D gives you a new quotient with a negative exponent in the denominator. Once you've checked it, choose another quotient and work it without an example beside you. Check the sign and approximate size before comparing the exact answer.

## Keep the units when you return to science problems

In science problems, keep units attached while doing the same arithmetic. A correct exponent doesn't fix incompatible units. The [metric prefixes guide](/blog/metric-prefixes-flashcards/) covers the powers associated with prefixes such as milli and micro; this practice set covers calculating with the powers themselves.

For your next practice session, return to one question you missed and solve it without the worked answer. Check the sign and the value's scale, then check `1 ≤ |a| < 10` for a nonzero result. If the result is zero, write `0`.
