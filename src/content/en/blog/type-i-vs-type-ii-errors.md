---
title: "Type I vs Type II Errors: Practice With Explained Answers"
description: "Identify Type I and Type II errors in context, calculate alpha, beta, and power from the right denominator, and check your reasoning with practice answers."
date: "2026-10-06"
image: "/blog/type-i-vs-type-ii-errors.png"
keywords:
  - "type I vs type II errors"
  - "type 1 and type 2 error examples"
  - "type I type II error practice"
  - "alpha beta statistical power"
---

A workshop holds a batch of parts that actually meets its specification. That wrong action could follow a Type I error or a Type II error. You need the null hypothesis and the test's decision to tell which one happened.

**A Type I error rejects a true null hypothesis. A Type II error fails to reject a false null hypothesis.** The label describes the relationship between a statistical decision and reality. It doesn't come from how expensive, inconvenient, or serious the outcome looks.

![A woman sorts pears, with one sound pear among bruised fruit and one bruised pear among sound fruit](/blog/type-i-vs-type-ii-errors.png)

All situations, counts, and results below are invented teaching examples. Use the decision table and worked calculation, then try the eight questions before reading their explained answers.

## Put the decision and reality in separate columns

Write **H₀** for the null hypothesis and **Hₐ** for the alternative. These are statements about the population, such as its true mean, rather than the mean of one sample. The test uses sample data to make one of two decisions: reject H₀ or fail to reject H₀.

| Test decision | H₀ is actually true | H₀ is actually false |
| --- | --- | --- |
| Reject H₀ | Type I error | Correct rejection |
| Fail to reject H₀ | Correct nonrejection | Type II error |

[OpenStax's lesson on the four outcomes](https://openstax.org/books/introductory-statistics-2e/pages/9-2-outcomes-and-the-type-i-and-type-ii-errors) uses this decision-versus-reality distinction.

For each problem, write down:

1. **Null:** What exactly does H₀ say about the population?
2. **Decision:** Did the test reject H₀ or fail to reject it?
3. **Reality:** Does the question say H₀ is actually true or false?
4. **Classification:** Which cell contains that combination?
5. **Context:** What did the test miss or incorrectly indicate?

For example, a courier tests **H₀: mean delivery time = 30 minutes** against **Hₐ: mean delivery time ≠ 30 minutes**. It rejects H₀, but the true mean is 30 minutes. Rejection plus a true null gives a Type I error: the test indicates a difference from 30 minutes that doesn't exist.

“False positive” and “false negative” can help when *positive* means rejecting H₀ in favor of a named effect. They become confusing when attached to an action such as holding a batch. Start with the null statement.

## A possible error isn't a known error

Practice questions often tell you the true population mean or effect. A real study usually doesn't. [Penn State's hypothesis-testing lesson](https://online.stat.psu.edu/stat200/Lesson06) explains why the decision alone doesn't reveal whether an error occurred.

After rejection, a Type I error is possible. After nonrejection, a Type II error is possible. Classifying an actual error requires the relevant truth.

Also, **failing to reject H₀ doesn't prove it**. The data may be too inconclusive to distinguish the null from an alternative. Report insufficient evidence for Hₐ at the chosen threshold; don't turn that result into proof of no effect.

Before interpreting either decision, check what the study design supports. The [random sampling vs random assignment guide](/blog/random-sampling-vs-random-assignment/) explains the difference between a population claim and a causal claim.

## Alpha, beta, and power each have a condition

Read **P(A given B)** as “the probability of A when B holds.” For error rates, the condition identifies the population setting in which the test is repeated. It also tells you which runs belong in a denominator.

| Quantity | Probability being measured | Runs to count |
| --- | --- | --- |
| Type I error probability, commonly written α (alpha) | P(reject H₀ given H₀ is true) | Runs under the stated null setting |
| Type II error probability, β (beta), at a specified alternative | P(fail to reject H₀ given that alternative is true) | Runs at that particular alternative |
| Power at the same alternative | P(reject H₀ given that alternative is true) = 1 − β | Runs at that particular alternative |

An alternative such as “the effect is positive” covers many effect sizes. Specify one when reporting β or power. Detecting a **4-percentage-point improvement** and detecting a **1-percentage-point improvement** are different tasks. [NIST's hypothesis-testing guide](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35.htm) explains that β is calculated for a specific alternative.

Power of 0.80 at a 4-point improvement means the procedure would reject H₀ in 80% of repetitions under that effect and the stated design and model. It isn't an 80% probability that the improvement exists.

### Read a fictional repeated-test ledger

Let **Δ** be the population difference in course-completion rates, new layout minus old layout, in percentage points. Test **H₀: Δ = 0** against **Hₐ: Δ ≠ 0**. For example, population completion rates of 64% and 60% would give Δ = +4 percentage points.

Imagine repeating one fixed procedure with new samples of the same size. This invented ledger records 1,000 runs with Δ = 0 and 500 runs with Δ = +4. All other model and design details stay fixed. These are practice counts, not results from an actual simulation or experiment.

| Population setting for each run | Reject H₀ | Fail to reject H₀ | Total runs |
| --- | ---: | ---: | ---: |
| Δ = 0: H₀ true | 40 | 960 | 1,000 |
| Δ = +4 points: specified alternative true | 400 | 100 | 500 |
| Total | 440 | 1,060 | 1,500 |

The **empirical Type I error rate** is **40 / 1,000 = 0.04**, or 4%. The denominator includes only runs with H₀ true.

At **Δ = +4**, the **empirical Type II error rate** is **100 / 500 = 0.20**, and **empirical power** is **400 / 500 = 0.80**. Both use the alternative row. They add to one because every run in that row either rejects or doesn't.

### A chosen level and an observed fraction are different

The planned **significance level**, often called nominal α, sets the procedure's Type I error limit under its assumptions. A finite ledger records an observed fraction. Even if the exact rejection probability under the null is 5%, a finite set of runs needn't contain exactly 5% rejections. Our invented 4% doesn't establish the procedure's long-run probability.

When H₀ covers a range, such as Δ ≤ 0, rejection probabilities can differ within that range. A valid level-0.05 test controls them at no more than 5% throughout the null; it needn't reject exactly 5% at every value. [Stanford's notes on composite hypotheses](https://web.stanford.edu/class/archive/stats/stats200/stats200.1172/Lecture07.pdf) explain this distinction.

Now reverse the ledger's condition: among the **440 rejections**, 40 came from the null row. That fraction is **40 / 440 ≈ 9.1%**. It isn't alpha. It describes the rejected runs in this particular ledger, whose mixture of null and alternative settings we chose. Changing that mixture can change this fraction even if each row's rejection rate stays the same. It doesn't give the probability that H₀ is true in an unrelated study.

If the reversal feels slippery, practice choosing the given group with the [conditional-probability two-way tables worksheet](/blog/conditional-probability-two-way-tables/). Use the [conditional probability two-way table flashcards](/catalog/packages/conditional-probability-two-way-table-flashcards/) to review given-group and reverse-condition decisions before returning to the error-rate examples.

## Keep a p-value separate from alpha

Choose the significance threshold before inspecting the result. A p-value is the probability of a test statistic at least as extreme as the observed one **under H₀ and the test's assumptions**. [NIST's guide to critical values and p-values](https://www.itl.nist.gov/div898/handbook/prc/section1/prc131.htm) gives that interpretation and recommends choosing the threshold in advance.

Suppose the planned rule is to reject when p ≤ 0.05, and the result is p = 0.03. You reject H₀. Neither number tells you the probability that H₀ is true given your data, or whether this rejection is an actual Type I error.

## Eight Type I and Type II error practice questions

For Questions 1–5, write the null, decision, reality, and classification. Where reality is unknown, say so. For numerical questions, name the group in each denominator. Keep the answers covered until you've written your reasoning.

### 1. A workshop compares instruction sheets

Let Δ be the population difference in average assembly time, new sheet minus old sheet. Test H₀: Δ = 0 against Hₐ: Δ ≠ 0. The test rejects H₀ and indicates a difference. In reality, Δ = 0. Classify the outcome and explain it in context.

### 2. A platform tests a practice mode

Let Δ be the population difference in quiz pass rates, new practice mode minus old mode, in percentage points. Test H₀: Δ ≤ 0 against Hₐ: Δ > 0. The test fails to reject H₀. In reality, Δ = +4 points. Which error occurred? Does nonrejection justify saying that the mode has no benefit?

### 3. Classify two courier results

A courier tests H₀: mean delivery time = 30 minutes against Hₐ: mean delivery time ≠ 30 minutes.

- Run A rejects H₀ when the true mean is 34 minutes.
- Run B fails to reject H₀ when the true mean is 30 minutes.

Classify each run. Does Run B prove the mean is 30 minutes?

### 4. The same acceptable batch stays on hold

A workshop accepts batches whose population mean alignment error is at most **0.4 mm**. Compare two testing policies. Under both, the actual mean error is **0.2 mm**, but the acceptable batch stays on hold.

- **Test A:** H₀: mean error ≤ 0.4 mm; Hₐ: mean error > 0.4 mm. The test rejects H₀. The workshop holds the batch after rejection.
- **Test B:** H₀: mean error ≥ 0.4 mm; Hₐ: mean error < 0.4 mm. The test fails to reject H₀. The workshop keeps the batch on hold unless it gets evidence that the mean is strictly below the limit.

Identify the error in each test. Why doesn't “held an acceptable batch” determine the label? As a boundary check, would a true mean of **exactly 0.4 mm** make either null false?

### 5. Reality is missing

A study tests H₀: Δ = 0 against Hₐ: Δ ≠ 0. It reports p = 0.02 and rejects H₀ at a prechosen α = 0.05. The true population Δ is unknown. Can you say it committed a Type I error? Which error is possible after this decision?

### 6. Use the correct repeated-test totals

A second fictional ledger uses the completion-rate hypotheses H₀: Δ = 0 and Hₐ: Δ ≠ 0. Of **800 runs with Δ = 0**, 48 reject H₀. Of **300 runs with Δ = +4 points**, 225 reject H₀ and 75 fail to reject it.

Calculate the empirical Type I error rate, empirical Type II error rate at +4 points, and empirical power at +4 points. Then calculate the fraction of all rejections that came from Δ = 0. Is that final fraction alpha?

### 7. Interpret a planned threshold and one result

A test has an exact long-run Type I error probability of 0.05 under its stated null model. A single study returns p = 0.03 and rejects H₀ at the planned 0.05 threshold. Explain what the 0.05 describes. Does p = 0.03 tell you the probability that H₀ is true?

### 8. Make rejection harder

For the same test, sample size, and statistical model, change the rule from rejecting at p ≤ 0.05 to rejecting at p ≤ 0.01. A study has p = 0.03. What happens to its decision? Can this stricter rule increase power at a fixed alternative?

## Explained answers

### 1. Type I error

H₀ says the population mean time difference is zero. The test **rejects**, while the actual zero difference makes H₀ **true**. It incorrectly indicates that the instruction sheets differ in average assembly time.

### 2. Type II error

H₀ includes zero and negative pass-rate differences. The actual +4-point difference lies outside that range, so H₀ is **false**. The test **fails to reject** it and misses a real improvement. Nonrejection means insufficient evidence for an improvement at the chosen threshold; it doesn't establish no benefit.

### 3. Both are correct decisions

In Run A, 34 minutes makes H₀ false, and rejection is correct. In Run B, 30 minutes makes H₀ true, and nonrejection is correct. We can classify Run B because the exercise supplies reality. Its nonrejection alone wouldn't prove the mean equals 30 minutes in an actual study.

### 4. Test A makes a Type I error; Test B makes a Type II error

For **A**, 0.2 ≤ 0.4 makes H₀ **true**, and the test **rejects** it: Type I. It incorrectly indicates that mean alignment error exceeds the limit.

For **B**, 0.2 is outside H₀'s range of values ≥ 0.4. H₀ is **false**, but the test **fails to reject** it: Type II. It misses a mean error below the limit, so the hold remains. Keeping that hold is the policy's action under uncertainty; it isn't proof that H₀ is true.

At **exactly 0.4 mm**, both nulls are true: equality belongs to both ≤ and ≥. Rejection would then be Type I under either test. The batch is acceptable under the workshop's stated specification, but Test B seeks evidence of being *strictly below* the limit. Its null therefore includes an acceptable boundary value.

The tests ask different directional questions. The same operational outcome can follow different kinds of statistical error.

### 5. A Type I error is possible, but unconfirmed

If Δ really is zero, the rejection is a Type I error. If Δ is nonzero, it is a correct rejection. The p-value and threshold don't reveal which reality holds. A Type II error requires nonrejection, so it isn't the error possible after this decision.

### 6. The rates are 6%, 25%, and 75%

Use the runs at each population setting:

- Empirical Type I error rate: **48 / 800 = 0.06 = 6%**.
- Empirical Type II error rate at Δ = +4: **75 / 300 = 0.25 = 25%**.
- Empirical power at Δ = +4: **225 / 300 = 0.75 = 75%**.

There are **48 + 225 = 273 rejections**. The null-row fraction among them is **48 / 273 ≈ 17.6%**. Its denominator contains rejected runs from both settings, whereas the Type I rate uses runs under H₀. These are observed ledger fractions, not exact population error probabilities.

### 7. The 5% concerns repetitions under the null

Repeated use of this procedure under its stated null model gives a long-run rejection probability of 5%. That doesn't assign a 5% error probability to this particular rejection. The p-value of 0.03 measures how extreme the result is under H₀; it doesn't give a 3% probability that H₀ is true.

### 8. The decision changes to nonrejection; power cannot increase

A p-value of 0.03 meets the 0.05 rule but not the 0.01 rule. Every result rejected by the stricter rule would also be rejected by the original rule. At a fixed alternative, the probability of rejection therefore cannot increase. Power may decrease, and β may increase.

[Penn State's lesson on hypothesis testing and power](https://online.stat.psu.edu/stat200/Lesson06) discusses this alpha–beta tradeoff. Here the procedure, sample size, and model stay fixed. Planning a different study can change power; a larger sample alone doesn't repair a biased design.

## Turn a missed distinction into a transfer card

Keep the full worksheet for practice. Use a few small cards to retrieve the reasoning behind a mistake:

| Front | Back |
| --- | --- |
| H₀ says a population mean is at least 10. The true mean is 8, and the test fails to reject H₀. Which error occurred? | Type II: 8 makes H₀ false, and the test fails to reject it. |
| H₀ says a population mean is at most 10. The true mean is 8, and the test rejects H₀. Which error occurred? | Type I: 8 makes H₀ true, and the test rejects it. |
| To estimate the Type I error rate from repeated tests, which runs form the denominator? | Runs under the stated null setting, where H₀ is true. |
| “Power is 80%.” What effect information is missing? | The particular alternative effect at which power was calculated. The design and model must also be stated. |
| A study rejects H₀ with p = 0.03. What fact is needed to classify it as an actual Type I error? | H₀ must actually be true. The p-value alone doesn't establish that. |

The [flashcard-writing guide](/blog/how-to-make-better-flashcards/) explains how to make a prompt self-contained. After reviewing a card, change the null statement in a missed problem and classify the outcome again. That checks whether you can use the distinction when the wording changes.
