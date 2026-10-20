---
title: "Percentage Points vs Percent Change: Practice with Answers"
description: "Tell percentage points from percent change, choose the right starting value, and check changing group sizes. Try original exercises with explained answers."
date: "2026-10-11"
image: "/blog/percentage-points-vs-percent-change.png"
keywords:
  - "percentage points vs percent change"
  - "percentage point difference"
  - "percentage change formula"
  - "percentage points examples"
  - "percentage points exercises"
---

A completion rate moves from 30% to 36%. That's a rise of **6 percentage points**, or a **20% increase relative to the starting rate**. Calling it a “6% increase” changes the meaning: increasing 30% by 6% gives 31.8%.

Both calculations start with subtraction. For percentage points, report the difference between the percentages. For percent change, divide that difference by the starting value. The exercises below ask you to name the unit and the denominator, including when a higher rate comes with fewer completions.

![A smallholder compares four eggs in a six-well carton with five eggs in a twelve-well carton](/blog/percentage-points-vs-percent-change.png)

## Two calculations, two different answers

**Percentage points** measure the difference between two percentages. The [Office for National Statistics' guidance](https://service-manual.ons.gov.uk/content/numbers/percentages) distinguishes this subtraction from a relative percentage increase or decrease.

**Percent change** measures the change relative to the starting value. The [Bureau of Labor Statistics' calculation guide](https://www.bls.gov/cpi/factsheets/calculating-percent-changes.htm) gives the method: subtract the earlier value from the later one, divide by the earlier value, then multiply by 100.

For two rates, let `p` and `q` be their percentage values: use `p = 30` and `q = 36` for 30% and 36%.

```text
Percentage-point change = q − p
Relative percent change = ((q − p) / p) × 100%
```

The percentage change formula requires a nonzero starting value. Keep both rates in the same form; don't subtract 30 from 0.36.

| Question about 30% → 36% | Calculation | Answer with its unit |
| --- | --- | --- |
| How far did the rate move on the percentage scale? | 36 − 30 | Up 6 percentage points |
| How large was that change relative to the starting rate? | (36 − 30) / 30 × 100% | The rate increased by 20% |

The relative calculation uses **30, the starting percentage value**, as its denominator. Dividing by 36 would answer a comparison with a different baseline. A positive change means an increase; a negative change means a decrease. For a percentage point difference stated as a gap, give its positive size and say which rate is higher.

## Keep the counts beside the rates

Here's a fictional ledger for three separate workshops. Each attendee is assigned one task. The completed count records attendees who finished it. All scenarios in this article are invented for practice.

| Workshop | Attendees | Attendees who completed the task | Completion rate |
| --- | --- | --- | --- |
| A | 100 | 30 | 30 / 100 × 100% = 30% |
| B | 100 | 36 | 36 / 100 × 100% = 36% |
| C | 60 | 24 | 24 / 60 × 100% = 40% |

There are two denominator choices to keep apart. To calculate a **completion rate**, divide the completed count by that workshop's attendee total. To calculate a **relative change**, divide the difference by the starting value of the quantity you're comparing.

From A to B, the attendee totals are equal. The completed count rises by **6 attendees**, or `(36 − 30) / 30 × 100% = 20%`, using **A's 30 completed attendees** as the denominator. The rate rises by **6 percentage points**, or **20% relative to A's 30% rate**.

The matching 20% answers depend on the equal group sizes. Compare B with C instead:

- **Completed count:** `24 − 36 = −12 attendees`. Relative change: `(24 − 36) / 36 × 100% = −33⅓%`, using **B's 36 completed attendees** as the denominator.
- **Attendee total:** `60 − 100 = −40 attendees`. Relative change: `(60 − 100) / 100 × 100% = −40%`, using **B's 100 attendees** as the denominator.
- **Completion rate:** `40 − 36 = 4 percentage points`. Relative change: `(40 − 36) / 36 × 100% ≈ 11.11%`, using **B's 36% rate** as the baseline.

Here and below, `≈` marks an approximation rounded to two decimal places. Keep the full value while calculating and round the final answer.

C has fewer completions and a higher completion rate. Its attendee total fell proportionally more than its completed count: 40% versus 33⅓%. The rates use different group totals, 100 attendees in B and 60 in C.

A careful sentence is: “Workshop C had 12 fewer completions than B, while its completion rate was 4 percentage points higher.” These totals alone don't tell you whether a particular attendee improved or why the rates differed. They're separate groups, and the ledger supplies no explanation of the difference.

## Reversing the comparison changes the baseline

Going from 30% to 36% gives a 20% relative increase. Going back from 36% to 30% gives:

```text
Percentage-point change = 30 − 36 = −6 percentage points
Relative percent change = (30 − 36) / 36 × 100% = −16⅔%
```

The rate falls by **6 percentage points**, a **16⅔% relative decrease** from the starting 36% rate. The percentage-point change reverses sign and keeps its size. The relative change uses a new denominator, so its size changes too.

Here, 16⅔% is exact; approximately 16.67% is rounded. If a repeating calculator display slows you down, the [recurring decimals to fractions guide](/blog/recurring-decimals-to-fractions/) explains how to recover an exact fraction.

## Read the unit before finding the new rate

Suppose a task's starting completion rate is 30%. Two instructions produce different results:

| Stated change | Calculation | New completion rate |
| --- | --- | --- |
| Increase by 6 percentage points | 30% + 6 percentage points | 36% |
| Increase by 6% relative to the starting rate | 30% × 1.06 | 31.8% |

In the second row, the added amount is `30 × 0.06 = 1.8 percentage points`. The **30% starting rate** is the baseline for the 6% increase. For a relative decrease, multiply by one minus the decrease written as a decimal: a 10% relative decrease uses `0.90`.

You can work backward too. If a rate ends at 36% after rising by 6 percentage points, subtract 6 percentage points to recover **30%**. If it ends at 36% after a 20% relative rise, divide by `1.20`: `36% / 1.20 = 30%`. Subtracting 20 percentage points would recover a different starting rate.

Read “the rate increased by 6%” as a relative increase. If a report gives the starting and ending rates, use them to check the wording. A writer who means percentage points should name that unit.

### A zero starting rate needs a different statement

Imagine zero completed attendees in a group of 50, followed by 2 completed attendees in another group of 50. The rates are `0 / 50 × 100% = 0%` and `2 / 50 × 100% = 4%`.

The completed count rises by **2 attendees**, and the completion rate rises by **4 percentage points**. Relative percent change is **undefined**: the count calculation would divide by 0 completed attendees, and the rate calculation would divide by a 0% starting rate. Report the counts, rates, or percentage-point change. “Infinite percent increase” isn't a value produced by the formula.

## Try these percentage points exercises on paper

Cover the answers and work on paper. Write the starting value beside each relative-change calculation, and include the unit in every answer. The exercises can all be answered exactly; keep repeating values as fractions.

1. A task's completion rate moves from 48% to 60%. Find the percentage-point change and relative percent change.
2. Reverse that comparison: the completion rate moves from 60% to 48%. Find both changes. Explain why the relative change isn't the negative of question 1's relative change.
3. A completion rate is now 33% after an increase of 3 percentage points. What was its starting rate?
4. A completion rate is now 33% after a 10% relative increase. What was its starting rate? State the denominator you would use to check the increase.
5. One workshop has 18 completed attendees out of 60; a later workshop has 18 out of 45. Find both rates, the relative change in the completed count, and both kinds of rate change. Can the completion rate rise while the count stays the same?
6. A learner writes: “A completion rate of 40% decreased by 5%, so the new rate is 35%.” Find the new rate for a **5% relative decrease** and for a **5-percentage-point decrease**.
7. A workshop has 0 completed attendees out of 40. Another has 3 out of 40. Give the count change and percentage-point change. Can you calculate a relative percent increase from the initial count or rate?

### Answers with the denominator shown

1. **Up 12 percentage points; a 25% relative increase.** Subtract the rates: `60 − 48 = 12 percentage points`. Then `(60 − 48) / 48 × 100% = 25%`. The relative denominator is the **starting 48% completion rate**.
2. **Down 12 percentage points; a 20% relative decrease.** `48 − 60 = −12 percentage points`; `(48 − 60) / 60 × 100% = −20%`. The denominator is now the **starting 60% completion rate**, so the same 12-point gap represents a smaller share of the baseline.
3. **30%.** `33% − 3 percentage points = 30%`. This is subtraction on the percentage scale; it needs no relative-change denominator. The given change is **3 percentage points**, not 3% of an earlier rate.
4. **30%.** A 10% increase multiplies the starting rate by `1.10`, so `33% / 1.10 = 30%`. Check with `(33 − 30) / 30 × 100% = 10%`, using the **starting 30% rate** as the denominator. The rise is also **3 percentage points**.
5. **30% to 40%; unchanged count; up 10 percentage points and 33⅓% relative to the starting rate.** The rates use the respective attendee totals: `18 / 60 × 100% = 30%` and `18 / 45 × 100% = 40%`. Count change is `18 − 18 = 0 attendees`; its relative change is `0 / 18 × 100% = 0%`, using the **initial 18 completed attendees**. Rate change is `40 − 30 = 10 percentage points`, or `(40 − 30) / 30 × 100% = 33⅓%`, using the **initial 30% rate**. The same count divided by a smaller attendee total gives a higher rate.
6. **38% for the relative decrease; 35% for the percentage-point decrease.** A 5% relative decrease uses the **starting 40% rate**: `40% × 0.95 = 38%`. Its drop is `40 × 0.05 = 2 percentage points`. A 5-percentage-point decrease gives `40% − 5 percentage points = 35%`. The learner's answer matches only the second instruction.
7. **Up 3 completed attendees and 7.5 percentage points; both relative increases are undefined.** The rates are `0 / 40 × 100% = 0%` and `3 / 40 × 100% = 7.5%`, each using **40 attendees** as the rate denominator. Subtracting gives **7.5 percentage points**. Relative count change would divide by **0 initially completed attendees**; relative rate change would divide by the **initial 0% rate**. Neither division is defined.

## Turn a specific mistake into a review card

Check your units as well as your numbers. A correct subtraction labeled with the wrong unit still changes the statement. Choose a card for a mistake you actually made; you don't need to memorize this whole worksheet.

| Card front | Card back |
| --- | --- |
| A completion rate rises from 25% to 30%. Is that a rise of 5% or 5 percentage points? Give the relative rise too. | **5 percentage points.** The relative rise is `(30 − 25) / 25 × 100% = 20%`, using the starting **25% rate** as the denominator. |
| A completion rate falls from 30% to 25%. Which rate goes in the denominator of relative percent change, and what is the result? | The starting **30% rate**. `(25 − 30) / 30 × 100% = −16⅔%`: a **16⅔% relative decrease**, or **5 percentage points down**. |
| Workshop A has 12 completed attendees out of 40; B has 12 out of 30. Can B's completion rate be higher with no count increase? | **Yes.** A: `12 / 40 × 100% = 30%`; B: `12 / 30 × 100% = 40%`. The completed count is unchanged. B's smaller attendee denominator gives a rate **10 percentage points higher**. |

Each front supplies enough context to answer without the article open. Preserve the denominator or comparison you missed in the prompt. For a broader study routine, [using flashcards for math](/blog/how-to-use-flashcards-for-math/) pairs short review prompts with fresh problem practice.

### One fresh case before you finish

At a drawing club, each participant is assigned exactly one sketch per session. The first session has 21 completed sketches among 70 participants; the next has 18 among 50. Calculate the count change, both completion rates, and both kinds of rate change. Then write a sentence that reports the results without claiming why they changed.

Work it out before reading on. The completed count falls by **3 sketches**, or `(18 − 21) / 21 × 100% ≈ −14.29%` relative to the **initial 21 sketches**. The rates are `21 / 70 × 100% = 30%` and `18 / 50 × 100% = 36%`, using each session's **participant total**. Because each participant has exactly one assigned sketch, these are also the percentages of participants who completed their task.

The rate rises by **6 percentage points**, or `(36 − 30) / 30 × 100% = 20%` relative to the **initial 30% rate**. One accurate sentence is: “The second session had 3 fewer completed sketches, while the completion rate rose from 30% to 36%, an increase of 6 percentage points.” On your next practice attempt, change the counts and write the denominators before calculating.
