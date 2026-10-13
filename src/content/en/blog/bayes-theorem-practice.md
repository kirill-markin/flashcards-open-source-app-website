---
title: "Bayes' Theorem Practice: Base Rates, Sources, and Repeated Evidence"
description: "Practice Bayes' theorem with worked base-rate and three-source examples, repeated-evidence checks, and original problems with explained answers."
date: "2026-10-14"
image: "/blog/bayes-theorem-practice.png"
keywords:
  - "bayes theorem practice"
  - "Bayes theorem examples"
  - "base rate probability"
  - "law of total probability"
  - "conditional independence"
---

A scanner flags 80% of the tiles from a rare kiln. In the model below, a flagged tile still has only about a 14% chance of coming from that kiln. The missing piece is how many tiles each kiln supplies: a low flag rate applied to a large supply can produce more flagged tiles than a high rate applied to a small supply.

**To solve a Bayes' theorem practice problem, multiply each possible origin's prior probability by its likelihood of the observed evidence. Divide the requested origin's weight by the total weight across all origins.** The same worksheet works with three suppliers or two observations, provided you build the likelihood column for the evidence you actually saw.

All examples here are invented probability models. The supplied probabilities are exact model assumptions, not measurements from a factory or an experiment.

![An adult places one blue ceramic bird before two hinged mirrors that reflect the same bird](/blog/bayes-theorem-practice.png)

## Name the evidence, then fill the ledger

Let O mean an origin and E mean the observed evidence. **P(O | E)** is the probability of that origin given the evidence. The vertical bar means “given.”

| Term | Meaning |
|---|---|
| Prior, P(O) | Probability of the origin before seeing E; its base rate |
| Likelihood, P(E \| O) | Probability of the observed evidence given that origin |
| Posterior, P(O \| E) | Probability of the origin after learning E |

For positive P(O) and P(E), Bayes' rule gives **P(O | E) = P(O) × P(E | O) / P(E)**. When positive-prior origins O₁, …, Oₙ are mutually exclusive and cover every possibility, the law of total probability gives **P(E) = Σᵢ P(Oᵢ) × P(E | Oᵢ)**. [Stanford's probability refresher](https://web.stanford.edu/~shervine/teaching/cs-229/refresher-probabilities-statistics/) states both rules and defines this partition of possibilities.

Use a branch ledger to organize your work:

| Origin | Prior | Likelihood of E | Joint weight | Posterior |
|---|---:|---:|---:|---:|
| Each possible origin Oᵢ | P(Oᵢ) | P(E \| Oᵢ) | Prior × likelihood | Weight / total weight |

A joint weight is **P(Oᵢ ∩ E)**, the probability of both that origin and the evidence. The symbol ∩ means “and.” Add every joint weight to get the denominator. Dividing each weight by the total makes the posterior column sum to 1.

Before multiplying, write E in words: “flagged,” “sound,” or “first blue and second blue.” Check that the priors sum to 1 and that each outcome belongs to exactly one origin. These checks catch a missing source, a duplicated source, or a likelihood for the wrong evidence. If reading the vertical bar is still the difficult step, start with the [conditional probability two-way-table practice](/blog/conditional-probability-two-way-tables/).

## A rare origin can remain rare after a flag

Select a tile from a fictional mixture. It comes from exactly one of two kilns:

- Rare kiln R supplies 2% of the mixture. Its flag likelihood is 80%.
- Ordinary kiln N supplies 98%. Its flag likelihood is 10%.

Every tile is either flagged or unflagged. Given a flag, find **P(R | flag)**.

| Origin | Prior | Flag likelihood | Origin-and-flag weight |
|---|---:|---:|---:|
| Rare kiln R | 0.02 | 0.80 | 0.016 |
| Ordinary kiln N | 0.98 | 0.10 | 0.098 |
| Total | 1 | — | 0.114 |

The flag probability is 0.016 + 0.098 = 0.114, so:

**P(R | flag) = 0.016 / 0.114 = 8/57 ≈ 14.04%.**

The ordinary kiln accounts for the remaining 49/57, approximately 85.96%, of the flagged group. Its lower flag likelihood acts on a much larger prior share.

The flag has raised R's probability from 2% to about 14%. It is eight times as likely under R as under N, but N starts with 49 times R's prior probability. Evidence can strongly favor a rare origin while leaving its posterior below 50%.

The tempting calculation **0.80 / (0.80 + 0.10) = 8/9** ignores the base rates. It would give the posterior in a different mixture where both kilns had equal priors. Keep each prior attached to its own likelihood.

## Three suppliers contribute to one evidence total

In another invented model, a hinge comes from supplier A with probability 60%, B with probability 30%, and C with probability 10%. Their defect likelihoods are 2%, 6%, and 12%, respectively. Every hinge comes from exactly one supplier and is either defective or sound.

Given a defective hinge, find the posterior probability of each supplier.

| Supplier | Prior | Defect likelihood | Supplier-and-defect weight | Posterior given defect |
|---|---:|---:|---:|---:|
| A | 0.60 | 0.02 | 0.012 | 2/7 |
| B | 0.30 | 0.06 | 0.018 | 3/7 |
| C | 0.10 | 0.12 | 0.012 | 2/7 |
| Total | 1 | — | 0.042 | 1 |

For B, the numerator is 0.30 × 0.06 = 0.018. The denominator includes all three ways a defective hinge enters the mixture:

**P(B | defect) = 0.018 / (0.012 + 0.018 + 0.012) = 3/7 ≈ 42.86%.**

A and C each have posterior 2/7, approximately 28.57%. C has the highest defect likelihood, while B contributes the largest joint weight. A and C tie because A's prior is six times C's and C's defect likelihood is six times A's.

Writing **0.018 / (0.018 + 0.012)** would leave out one supplier. You can instead use “B” and “not B,” but not B must include both A and C. Its joint weight is 0.012 + 0.012 = 0.024. That is already a prior-weighted contribution to the denominator; multiplying it by the not-B prior again would count the prior twice.

If the evidence changes to **sound**, rebuild the likelihood column with 0.98, 0.94, and 0.88. You can't obtain P(B | sound) by subtracting P(B | defect) from 1. That subtraction gives P(not B | defect): it changes the requested origin and keeps “defect” as the evidence. Problem 2 below works through the sound-hinge answer.

## Two observations need assumptions on both branches

Choose one of two fictional spinners and keep it for both spins. S is selected with probability 1/5 and lands on blue with probability 3/4. T is selected with probability 4/5 and lands on blue with probability 1/4. Every spin lands on either blue or amber.

The model specifies that the two spins are independent **given S** and independent **given T**. Each spinner keeps its blue probability on both spins. Once the spinner is fixed, learning the first result leaves the second result's probability unchanged. This assumption concerns the two results within an origin. Their blue likelihoods can still differ between origins, which makes the results useful for identifying the spinner.

After one blue result:

**P(S | blue) = [(1/5)(3/4)] / [(1/5)(3/4) + (4/5)(1/4)] = 3/7.**

After two blue results, the evidence is “first blue and second blue.” Conditional independence lets us multiply the two likelihoods within each origin:

| Origin | Prior | Likelihood of two blues | Joint weight |
|---|---:|---:|---:|
| S | 1/5 | (3/4)² = 9/16 | 9/80 |
| T | 4/5 | (1/4)² = 1/16 | 4/80 |
| Total | 1 | — | 13/80 |

**P(S | two blues) = (9/80) / (13/80) = 9/13 ≈ 69.23%.**

For two events, the general branch likelihood is **P(E₁ ∩ E₂ | O) = P(E₁ | O) × P(E₂ | E₁, O)**, whenever the conditions have positive probability. Conditional independence allows the second factor to become P(E₂ | O). The [University of Washington's CSE 312 Section 3 solutions](https://courses.cs.washington.edu/courses/cse312/26sp/files/sections/section3/section3-solutions.html) state these rules and apply them to repeated observations.

Check that assumption for **every** origin. Independence given S alone wouldn't justify multiplication on T's branch. Independence without conditioning is a separate property; the [independent-events practice](/blog/mutually-exclusive-vs-independent-events/) covers that check.

### A copied result adds no new evidence

Change the model: spin once and show the same result on two screens. The second screen is an exact copy, so both screens always agree. The likelihood of both showing blue is 3/4 under S and 1/4 under T.

**P(S | both screens blue) = 3/7**, the one-spin answer.

Each individual screen has the same blue likelihoods as an individual spin in the earlier model. Yet two blue displays give 3/7, while two conditionally independent blue spins give 9/13. The individual rates don't tell you how the observations depend on each other.

**If dependence is unspecified, those marginal rates alone cannot determine the posterior after two blue results.** You need each origin's joint likelihood P(E₁ ∩ E₂ | O), or its second-result likelihood conditional on the first result and origin. Then put those probabilities into the ledger. Seeing an outcome twice doesn't itself justify squaring a rate.

## Bayes' theorem practice problems

Solve these before reading the answers. Write the evidence in words, calculate every branch weight, and add the weights before dividing. Problems 1–2 use the tile and hinge models; problems 3–6 use the spinner priors.

1. **Change the base rate.** R now supplies 4% of the tile mixture and N supplies 96%. Flag likelihoods remain 80% under R and 10% under N. Find P(R | flag).
2. **Change the evidence.** Use the original three-supplier hinge model. Find P(B | sound). Explain what the proposed answer 1 − 3/7 = 4/7 actually calculates.
3. **Mixed results.** Use the conditionally independent two-spin model. The first spin is blue and the second amber. Find P(S | first blue, second amber).
4. **Repair the omitted prior.** For two blue spins, a student writes (3/4)² / [(3/4)² + (1/4)²] = 9/10. Supply the missing factors and give the correct posterior.
5. **Use supplied joint likelihoods.** Keep P(S) = 1/5 and P(T) = 4/5, but replace the independent spins with dependent binary readouts described in the table below. Find P(S | both blue).
6. **Identify missing information.** Keep the same priors. Each of two readouts individually has blue probability 3/4 given S and 1/4 given T. Nothing is stated about their dependence. Can you determine P(S | both blue)? Give two compatible models with different answers.

Use this table for problem 5 only:

| Readout pair, in order | Given S | Given T |
|---|---:|---:|
| Blue, blue | 5/8 | 1/8 |
| Blue, amber | 1/8 | 1/8 |
| Amber, blue | 1/8 | 1/8 |
| Amber, amber | 1/8 | 5/8 |

Each column sums to 1. For either readout individually, blue probability is still 3/4 given S and 1/4 given T. The table also tells you the probability of both being blue.

### Answers and the reasoning to keep

**1. 1/4, or 25%.** The flag weights are 0.04 × 0.80 = 0.032 and 0.96 × 0.10 = 0.096. Their total is 0.128, giving 0.032/0.128 = 1/4. The scanner's conditional rates stayed fixed; the changed base rate changed the posterior.

**2. 141/479, approximately 29.44%.** Sound-hinge weights are 0.60 × 0.98 = 0.588, 0.30 × 0.94 = 0.282, and 0.10 × 0.88 = 0.088. Their total is 0.958, so P(B | sound) = 0.282/0.958 = 141/479. The proposed 4/7 is P(A or C | defect). It keeps the evidence from the earlier question.

**3. 1/5, or 20%.** The ordered pair has likelihood (3/4)(1/4) = 3/16 under S and (1/4)(3/4) = 3/16 under T. Its weights are 3/80 and 12/80, giving (3/80)/(15/80) = 1/5. This evidence has equal likelihood under both origins, so their prior shares remain unchanged.

**4. 9/13, approximately 69.23%.** Multiply S's likelihood 9/16 by its prior 1/5 and T's likelihood 1/16 by its prior 4/5. The corrected ratio is (9/80)/(9/80 + 4/80). The student's 9/10 would apply if the origins had equal priors.

**5. 5/9, approximately 55.56%.** Use the joint likelihoods 5/8 and 1/8 directly. The weights are (1/5)(5/8) = 1/8 and (4/5)(1/8) = 1/10. Their total is 9/40, giving (1/8)/(9/40) = 5/9. Squaring the individual rates would impose conditional independence, which this table contradicts: 5/8 ≠ (3/4)² and 1/8 ≠ (1/4)².

**6. There isn't enough information.** Conditionally independent readouts fit the individual rates and give 9/13. A single result copied onto two displays also fits the individual rates and gives 3/7. Both allow two blue results, so these different posteriors demonstrate why the missing dependence information matters.

For further exercises with several possible origins, [Emory's Bayes' theorem problem set](https://mathcenter.oxford.emory.edu/site/math117/probSetBayesTheorem/) includes supplier and factory questions. Keep the same ledger when the story or the number of branches changes.

## Make a card for the decision you missed

Keep full calculations as practice problems. When a setup error repeats, use a short card for that specific decision. The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) explains how to keep a prompt focused.

| Flashcard front | Flashcard back |
|---|---|
| What goes into a Bayes branch weight for origin O and evidence E? | P(O) × P(E \| O). Include the origin's prior. |
| Three mutually exclusive origins cover all possibilities. Which weights belong in P(E)? | All three origin-and-evidence weights, added together. |
| What permits P(E₁ ∩ E₂ \| O) = P(E₁ \| O)P(E₂ \| O)? | Conditional independence given O. Check it for each origin. |
| One result is copied exactly onto a second screen. How should you count it? | Use the original result once. The copy adds no information. |
| What does 1 − P(B \| defect) calculate? | P(not B \| defect). The given evidence remains “defect.” |

Paper cards work for these prompts. You can also use ordinary cards in Nibomo; the [getting started guide](/docs/getting-started/) covers setup. After recalling a repair card, solve a fresh problem with different numbers and write every denominator branch explicitly.

*Drafted and rewritten through AI editorial passes. The examples are invented probability models; their calculations were checked directly.*
