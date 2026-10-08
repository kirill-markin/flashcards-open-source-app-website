---
title: "Strong vs Weak Acids: Concentration, pH, and Practice"
description: "Separate acid strength from concentration and pH using an original solution comparison, ionization calculations, and practice questions with explained answers."
date: "2026-10-08"
image: "/blog/strong-vs-weak-acids.png"
keywords:
  - "strong vs weak acids"
  - "strong vs concentrated acid"
  - "acid strength vs concentration"
  - "weak acid pH"
  - "percent ionization practice"
---

A weak-acid solution can have the same pH as a strong-acid solution. It can also have a lower pH than a different strong-acid solution. The three solutions below show both comparisons without changing what “strong” and “weak” mean.

Keep **acid strength, total acid concentration, and hydronium concentration** separate. A correct logarithm can still produce the wrong pH if you put the wrong concentration into it.

![A theater technician compares a short string of four glowing bulbs with a longer string containing four glowing bulbs and several dark ones](/blog/strong-vs-weak-acids.png)

## Strong doesn't mean concentrated

A strong acid ionizes essentially completely in water; a weak acid ionizes partially. “Dilute” and “concentrated” describe the amount of acid per volume of solution. [AQA's strong and weak acids specification](https://www.aqa.org.uk/subjects/chemistry/gcse/chemistry-8462/specification/subject-content/chemical-changes) separates these terms. Diluting a strong acid doesn't make it a weak acid.

Use three separate entries when setting up a problem:

| Quantity | Meaning |
| --- | --- |
| Acid strength | The acid's tendency to ionize in water |
| Analytical acid concentration, C | Total acid added per liter, including its ionized and un-ionized forms |
| Equilibrium [H₃O⁺] | Hydronium concentration after the solution reaches equilibrium |

M means mol/L. Square brackets give the concentration of a particular species. For the simple weak acid HA used below, **C = [HA] + [A⁻]**. The analytical concentration counts both forms; [HA] counts only the acid remaining un-ionized.

## Try the three-solution comparison

This is an original hypothetical worksheet. All three solutions are ideal aqueous solutions at **25 °C**, each containing one monoprotic acid dissolved in water, with no added conjugate-base salt. A monoprotic acid can donate one proton per acid molecule. We neglect water's contribution to [H₃O⁺] and activity effects throughout the worksheet.

| Solution | Acid classification | Analytical concentration C | Given equilibrium ionization |
| --- | --- | --- | --- |
| A | Strong monoprotic acid | 0.0010 M | Essentially 100% |
| B | Hypothetical weak monoprotic acid HA | 0.010 M | 10% |
| C | Strong monoprotic acid | 0.00010 M | Essentially 100% |

Before reading the working, calculate [H₃O⁺] and pH for each row. Then identify which solutions share a pH and whether B or C has the lower pH.

**B's 10% is supplied equilibrium data for this one solution.** It isn't a general rule for weak acids or a percentage to reuse after dilution.

### Work from the fraction that ionizes

For B, the equilibrium is:

**HA + H₂O ⇌ H₃O⁺ + A⁻**

Each HA that ionizes produces one H₃O⁺ and one A⁻. Write the fraction ionized as α. Under our assumptions:

**[H₃O⁺] ≈ αC**

**Percent ionization ≈ ([H₃O⁺]/C) × 100**

The denominator is the total C, including the HA that remains. Convert percentages to fractions before multiplying: 10% is 0.10, and 100% is 1.00. [OpenStax's acid-strength section](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases) defines percent ionization from equilibrium composition and distinguishes it from Kₐ.

For pH, use **pH ≈ −log₁₀[H₃O⁺]**, inserting the numerical concentration in mol/L. Its inverse is **[H₃O⁺] ≈ 10^(−pH) M**. These are the concentration calculations in [OpenStax's pH section](https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh). The [IUPAC definition of pH](https://goldbook.iupac.org/terms/view/P04524) uses hydrogen-ion activity; our ideal model uses concentration as its approximation.

| Solution | Hydronium calculation | Equilibrium [H₃O⁺] | pH |
| --- | --- | --- | --- |
| A | 1.00 × 0.0010 M | 0.0010 M | 3.00 |
| B | 0.10 × 0.010 M | 0.0010 M | 3.00 |
| C | 1.00 × 0.00010 M | 0.00010 M | 4.00 |

For A and B, −log₁₀(10⁻³) = 3. For C, −log₁₀(10⁻⁴) = 4. If the powers slow you down, try the separate [scientific notation practice](/blog/scientific-notation-practice/).

A and B share a pH. B has ten times A's analytical concentration, but only one tenth of B's acid ionizes. The products αC match.

B has ten times C's hydronium concentration, so its pH is one unit lower. The weak-acid solution is more acidic in this comparison. A strength label alone can't rank solutions with different analytical concentrations.

## Keep track of the HA that remains

In B, 0.0010 M of the original 0.010 M acid has ionized. The equilibrium composition is:

- [HA] = 0.010 − 0.0010 = **0.0090 M**.
- [A⁻] ≈ [H₃O⁺] ≈ **0.0010 M**.
- C = [HA] + [A⁻] = **0.010 M**.

Ionization divides the analytical total between HA and A⁻. The [conjugate acid–base pairs guide](/blog/conjugate-acid-base-pairs/) explains how those partners differ by one H⁺.

Putting 0.010 into −log₁₀C gives 2.00. The arithmetic works, but it assumes complete ionization and contradicts B's given 10%. Putting 0.0090 into the logarithm also fails: that's the remaining HA concentration. The pH calculation needs 0.0010 M, the hydronium concentration.

## What happens when B is diluted?

B's equilibrium gives a concentration-based acid ionization constant:

**Kₐ ≈ [H₃O⁺][A⁻]/[HA] = (0.0010 × 0.0010)/0.0090 ≈ 1.11 × 10⁻⁴**

For the same acid at a fixed temperature, Kₐ stays constant in this ideal model. Percent ionization depends on concentration. [OpenStax explains this distinction](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases).

Suppose B is diluted tenfold on paper, giving a new C of 0.0010 M. Keeping the old α = 0.10 would predict [H₃O⁺] = 0.00010 M and pH 4.00. That prediction would give:

**[H₃O⁺][A⁻]/[HA] = (0.00010 × 0.00010)/(0.0010 − 0.00010) ≈ 1.11 × 10⁻⁵**

This is ten times smaller than B's Kₐ. The assumed 10% no longer fits the equilibrium.

Let x be the new equilibrium [H₃O⁺]. Then [A⁻] ≈ x and [HA] = 0.0010 − x. Use numerical concentrations in mol/L to solve:

**x²/(0.0010 − x) = Kₐ**

Rearranging gives **x² + Kₐx − KₐC = 0**, with C = 0.0010. The physically meaningful root is:

**x = (√(Kₐ² + 4KₐC) − Kₐ)/2 ≈ 0.0002824 M**

The other root is negative, so it cannot represent a concentration. Using the unrounded Kₐ from B gives:

| Quantity after tenfold dilution of B | Result |
| --- | --- |
| [H₃O⁺] | About 2.8 × 10⁻⁴ M |
| Fraction ionized, x/C | About 0.28, or 28% |
| pH, calculated before rounding x | 3.55 |

Keep C − x in the denominator: about 28% of the diluted acid ionizes, so treating all of C as remaining HA would distort the calculation.

The ionized **fraction increased**, while hydronium **concentration decreased** from 0.0010 M. A larger fraction of a smaller total can still give a smaller concentration.

For comparison, tenfold dilution of A gives [H₃O⁺] ≈ 0.00010 M and pH 4.00 under the same assumptions. A's pH rises by one unit; B's rises by about 0.55. Neither dilution changes the acid's strength classification.

## Strong vs weak acids practice

Cover the answers and write down the quantity you need before calculating. Every question uses the same ideal monoprotic, acid-only aqueous model at 25 °C. The other weak-acid examples have their own supplied equilibrium data; they aren't new concentrations of B.

1. Two solutions each have C = 0.0050 M. One contains a strong acid; the other contains a weak acid that is 20% ionized at equilibrium. Find both hydronium concentrations and pH values.
2. A hypothetical weak-acid solution has C = 0.020 M and pH 3.00. Find its equilibrium percent ionization. Does sharing A's pH make it a strong acid?
3. Two samples of the same strong acid both have C = 0.0040 M. Their volumes are 25 mL and 100 mL. Find the total moles of acid in each. Which sample has the lower pH?
4. A hypothetical weak-acid solution has C = 0.015 M and equilibrium [H₃O⁺] = 0.00075 M. Find its percent ionization and remaining [HA].
5. A student calculates B's pH as −log₁₀(0.010) = 2.00. The logarithm is correct. Which chemical assumption is wrong?
6. After dilution of a simple weak-acid solution, its percent ionization increases. A student concludes that [H₃O⁺] must have increased too. Explain why that conclusion doesn't follow.
7. A question supplies only “an acid solution has pH 2.50.” Can you classify the acid as strong or weak? State what you can calculate and what information is missing.

### Answers with the reasoning

1. **Strong: [H₃O⁺] ≈ 0.0050 M, pH 2.30. Weak: [H₃O⁺] ≈ 0.0010 M, pH 3.00.** For the strong acid, −log₁₀(0.0050) ≈ 2.30. For the weak acid, 0.20 × 0.0050 = 0.0010 M, then −log₁₀(0.0010) = 3.00. Equal analytical concentrations make the effect of their different ionization fractions clear.
2. **5.0% ionized; it remains weak.** pH 3.00 gives [H₃O⁺] ≈ 0.0010 M. Then (0.0010/0.020) × 100 = 5.0%. Sharing A's pH means sharing its hydronium concentration, while this solution has a different C and ionization fraction.
3. **0.00010 mol and 0.00040 mol; neither has a lower pH.** Use n = CV: 0.0040 × 0.025 = 0.00010 mol and 0.0040 × 0.100 = 0.00040 mol. Both samples have [H₃O⁺] ≈ 0.0040 M and pH ≈ −log₁₀(0.0040) = 2.40. More moles in a larger sample don't imply a higher concentration.
4. **5.0% ionized; [HA] ≈ 0.014 M.** The percentage is (0.00075/0.015) × 100 = 5.0%. Subtraction gives [HA] = 0.015 − 0.00075 = 0.01425 M before rounding to the supplied precision. Dividing by that remaining [HA] would use the wrong denominator for percent ionization.
5. **They assumed complete ionization.** B's C counts HA and A⁻ together. Its supplied 10% gives [H₃O⁺] ≈ 0.10 × 0.010 = 0.0010 M and pH 3.00.
6. **[H₃O⁺] depends on αC, and C has decreased.** The fraction alone doesn't settle the comparison. In B's worked dilution, α rises from 0.10 to about 0.28, yet [H₃O⁺] falls from 0.0010 M to about 2.8 × 10⁻⁴ M.
7. **You can't classify the acid from that pH alone.** You can calculate [H₃O⁺] ≈ 10^(−2.50) M ≈ 3.2 × 10⁻³ M. To find the fraction ionized in this model, you also need C. An acid identity or Kₐ can establish its strength; the supplied pH doesn't provide either.

## Save the distinction you missed

After checking an answer, make a small card for the step you skipped. These front/back prompts focus on three different errors:

| Front | Back |
| --- | --- |
| Weak monoprotic HA: C = 0.010 M, given equilibrium ionization 10%. What goes into the pH calculation? | [H₃O⁺] ≈ 0.10 × 0.010 = 0.0010 M; pH 3.00. C includes un-ionized HA. |
| Two acid solutions share pH 3.00. Must they share acid strength or C? | No. They share [H₃O⁺] ≈ 0.0010 M in this model. Different C and ionization fractions can produce it. |
| Same weak acid after dilution: can its old percent ionization be reused? | No. Use new equilibrium data or calculate with Kₐ and the new C. |

Choose the prompt that matches your error, then redo the calculation without the answer visible. The [chemistry flashcard guide](/blog/how-to-use-flashcards-for-advanced-chemistry/) explains how to keep focused recall cards alongside full worked problems.

For a fresh transfer question, suppose a worksheet gives **C = 0.030 M for an unnamed weak monoprotic acid**, with no pH, Kₐ, or percent ionization. Name the missing information before doing a logarithm. You need enough equilibrium data to find [H₃O⁺]; the word “weak” doesn't supply a numerical fraction.
