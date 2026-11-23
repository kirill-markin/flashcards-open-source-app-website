---
title: "Law of Total Probability Practice With Overlapping Groups"
description: "Find an overall rate when groups overlap. Practice the law of total probability with a worked tool library example and three problems with answers."
date: "2026-11-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/989214dc7f711334a7a3e7111253e0fc33ebdf83278653e49d5c7976bcffc85b.webp"
keywords:
  - "law of total probability practice"
  - "overlapping groups probability"
  - "missing conditional probability"
---

A repair café's tool library has 200 loan records. It sent email reminders for 110 loans and text reminders for 80. The 40 loans that got both show up in both counts. If you pick one of the 200 records at random, what's the chance the tool came back on time?

The on-time rates are 60% for email only, 75% for text only, 90% for both, and 40% for neither. Before checking the table, try using those rates to find how many tools came back on time out of all 200 loans. The records are fictional and the rates are exact.

![A volunteer adds a blue tag to a bicycle with a red tag, beside bikes with red, blue, and no tags](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/989214dc7f711334a7a3e7111253e0fc33ebdf83278653e49d5c7976bcffc85b.webp)

## Give each loan one branch

Start with the 40 loans that got both reminders. Subtract those from the email count to get 70 email-only loans and from the text count to get 40 text-only loans. Those three groups account for 150 loans, leaving 50 that got neither reminder.

Now every loan belongs to exactly one group. That's a **partition**. Each group gets its own branch in the calculation.

| Reminder group | Loans | Share of all loans | On-time rate within group | On-time loans |
| --- | ---: | ---: | ---: | ---: |
| Email only | 70 | 35% | 60% | 42 |
| Text only | 40 | 20% | 75% | 30 |
| Both | 40 | 20% | 90% | 36 |
| Neither | 50 | 25% | 40% | 20 |
| Total | 200 | 100% | — | 128 |

Read across the first row. Of all loans, 35% got only an email. Within those loans, 60% came back on time. Multiply 0.35 × 0.60 to get 0.21. That means 21% of **all** loans got only an email and came back on time. You can see the same result in the counts, with 42 out of 200. For more practice choosing the denominator, use the [conditional probability two-way tables](/blog/conditional-probability-two-way-tables/).

## Multiply within each branch, then add

The law of total probability finds an overall probability from the probabilities within a partition. If A is the outcome you want and G₁, G₂, … are the groups with positive probability, the rule is

**P(A) = P(G₁) × P(A | G₁) + P(G₂) × P(A | G₂) + …**

The bar means “given.” Each product gives the chance that the same draw lands in that group and has outcome A. Every draw with outcome A belongs to exactly one group, so the branches add up to P(A). See the [Stanford probability notes, p. 1–30](https://isl.stanford.edu/~abbas/ee178/lect01-2.pdf#page=15).

For the tool library, the sum is **0.21 + 0.15 + 0.18 + 0.10 = 0.64, or 64%**. You can also count 42 + 30 + 36 + 20 = 128 on-time loans and divide by 200. To estimate the effect of reminders on returns, you'd need evidence about how comparable loans fare under different reminder assignments.

The 64% also gives you the denominator for finding what share of on-time loans got only an email. Try that direction in the [Bayes' theorem practice problems](/blog/bayes-theorem-practice/).

## Where the double count shows up

The “any email” group has 42 + 36 = 78 on-time loans. The “any text” group has 30 + 36 = 66. Add those to the 20 on-time loans with neither reminder and you get 164 / 200 = 82%. The 36 on-time loans that got both reminders appear twice in that sum. Subtract the extra 36 and you're back to 128.

The plain average of the four group rates is 66.25%. That gives each group a 25% share. Here, the email-only group makes up 35% of the loans, so its rate gets a 35% weight. Try more problems that depend on choosing the right denominator in the [weighted average practice worksheet](/blog/weighted-average-practice/).

## Law of total probability practice problems

1. **Change the mix.** In a second set of 200 loans, 20 more got both reminders and 20 fewer got neither. The email-only and text-only counts stay the same, as do all four on-time rates. Find the new overall on-time rate.
2. **Recover a missing rate.** Use the four group sizes from the table and the on-time rates for email only, text only, and both. Given an overall on-time rate of 64%, what percentage of the loans with neither reminder came back on time?
3. **Spot the missing information.** The library reports 200 loans, with 110 getting an email and 80 getting a text. The four rates in the original table still apply. Can you work out a unique overall rate from those numbers? Compare a case where 40 loans got both reminders with one where 20 got both, holding the reported totals and the four rates fixed.

## Worked answers

1. **69%.** The “both” group now contributes 60 × 0.90 = 54 on-time loans, and “neither” contributes 30 × 0.40 = 12. Add 42 and 30 from the other groups. That gives 138 on-time loans out of 200, or 69%.
2. **40%.** First turn the overall rate into a count. There are 200 × 0.64 = 128 on-time loans. The three groups with known rates account for 42 + 30 + 36 = 108, leaving 20 on-time loans in the “neither” group. Divide those 20 by the 50 loans in that group to get 40%.
3. **The overlap can change the answer.** With 20 loans getting both reminders, there are 90 email-only loans, 60 text-only loans, and 30 with neither. Multiply each of the four group sizes by its rate to get 54 + 45 + 18 + 12 = 129 on-time loans. That gives 129 / 200 = 64.5%. An overlap of 40 gives 128 / 200 = 64%. Both groupings fit the reported totals and the given rates, so the reported numbers leave the overall rate undetermined.

To remember the rule, try recalling it tomorrow and again a few days later. Before looking at the table, name the four groups and explain what 0.35 × 0.60 measures. Then check your answer. The [English Bayes' theorem flashcards](/catalog/packages/bayes-theorem-base-rate-flashcards/) include short prompts on multiplying within a branch and adding across branches.

*Nibomo produced this worksheet with AI assistance and checked the example and answer calculations.*
