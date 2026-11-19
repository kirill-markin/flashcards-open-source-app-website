---
title: "Chi-Square Homogeneity vs Independence: How to Choose"
description: "Choose the right chi-square test from the sampling design. Work through one table under two designs, then practice writing hypotheses and conclusions."
date: "2026-11-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6197fa5ef5085f94e152daebe63d97d62a0c8c5d9d19c07a1a18128e14a928bb.webp"
keywords:
  - "chi-square homogeneity vs independence"
  - "chi-square test for homogeneity"
  - "chi-square test for independence"
  - "AP Statistics chi-square test"
  - "chi-square sampling design"
---

A library survey ends with 60 users from each branch. Maybe the researchers drew one sample from the whole library system and happened to get 60 from each branch. Maybe they decided to draw 60 from each branch before they asked the first question. Both designs can produce the same counts and the same chi-square p-value.

Use a **chi-square test for independence** when you measure two categorical variables in one random sample and want to know whether they’re associated in that population. Use a **chi-square test for homogeneity** when you compare the distribution of one categorical response across independently sampled populations or randomly assigned treatment groups. If all you have is the table, ask how the researchers got the people in each row. [College Board AP Statistics framework](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=115)

![Hands lift one of two matching red-and-cream striped fabric swatches to show stitching underneath](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6197fa5ef5085f94e152daebe63d97d62a0c8c5d9d19c07a1a18128e14a928bb.webp)

## One library table, two ways to get it

Imagine a library system with 1,000 registered users at North and 1,000 at South. Every user has one registered home branch. In each of the two fictional studies below, everyone selected answers the same question about their first-choice library service. Both studies happen to yield this table.

| Registered home branch | Borrow books | Attend classes | Use workspaces | Total |
| --- | ---: | ---: | ---: | ---: |
| North | 32 | 18 | 10 | 60 |
| South | 16 | 24 | 20 | 60 |
| Total | 48 | 42 | 30 | 120 |

### Study A draws one sample from the whole system

The library draws a simple random sample of 120 distinct users from the system-wide roster. It records each user’s home branch and first-choice service. The 60 North and 60 South users are the counts the library discovers when it sorts the responses.

Use the **test for independence** to ask about the relationship between the two variables in the full population of registered users. [OpenStax’s test of independence](https://openstax.org/books/introductory-statistics-2e/pages/11-3-test-of-independence)

- **H₀** says registered home branch and first-choice service are independent among the system’s registered users.
- **Hₐ** says registered home branch and first-choice service are associated among the system’s registered users.

### Study B draws a sample from each branch

The library independently draws a simple random sample of 60 users from each branch’s roster. The researchers set the number for each row before collecting responses. Each selected user supplies one first-choice service.

Use the **test for homogeneity** to compare the distribution of first-choice service across the two branch populations. [OpenStax’s test for homogeneity](https://openstax.org/books/introductory-statistics-2e/pages/11-4-test-for-homogeneity)

- **H₀** says the distribution of first-choice service is the same among North and South registered users.
- **Hₐ** says the distribution of first-choice service differs between North and South registered users.

## Check the conditions and calculate once

In both studies, each user counts once in the table. Independence of observations concerns different users’ records. The null hypothesis in Study A concerns the two variables recorded for each user.

Both surveys use random sampling without replacement. In AP Statistics, each sample should be no more than 10% of the population it came from. Study A samples 120 of 2,000 users, or 6%. In Study B, check the two samples separately. Each draws 60 of 1,000 users, also 6%. The 10% check helps justify treating sampled observations as approximately independent. Randomized experiments skip that check. [College Board’s test conditions](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=116)

Under either null hypothesis, the branches share a distribution of service choices. Use all 120 responses to estimate those service proportions. In each cell, **expected count = row total × column total ÷ grand total**. The North borrow-books cell has an expected count of **60 × 48 ÷ 120 = 24**. In column order, both rows have expected counts of **24, 21, and 15**. The smallest is 15, so the expected-count condition is met. [College Board’s calculation guide](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=117)

*The 2026–27 AP framework gives two versions of the expected-count cutoff. The Unit 3 overview allows exactly 5, and Topic 3.14 calls for counts above 5. [AP Unit 3 overview](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=87) · [AP Topic 3.14](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=116)*

Add **(observed − expected)² ÷ expected** across the six service cells. For example, North’s borrow-books cell contributes **(32 − 24)² ÷ 24 = 8/3**. The South cell is 8 below the same expected count, so it contributes another 8/3. The other two columns also have matching contributions across the rows.

**χ² = 2 × (64/24 + 9/21 + 25/15) = 200/21 ≈ 9.524**

The table has **(2 − 1)(3 − 1) = 2** degrees of freedom. Under the corresponding null hypothesis for each study, the chi-square approximation puts the chance of a statistic at least this large at about **0.00855**, or **0.86%**. [College Board’s p-value interpretation](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=118)

Work through another table cell by cell. [Chi-square test of independence practice](/blog/chi-square-independence-practice/)

## Write the conclusion for the study you ran

Both studies use a prespecified **α = 0.05**. Since **0.00855 < 0.05**, reject the null hypothesis in each study. Use the wording of each alternative to say what the data support.

**Study A, independence.** At the 5% significance level, the data provide evidence that registered home branch and first-choice service are associated among the system’s registered users.

**Study B, homogeneity.** At the 5% significance level, the data provide evidence that the distribution of first-choice service differs between North and South registered users.

In the sample, 32 of 60 North users chose borrowing books first, compared with 16 of 60 South users. Those counts describe one part of the pattern. The test uses all three services together, so a claim about the population proportions who choose borrowing specifically would require its own analysis. Both surveys recorded users’ existing home branches. Testing whether assigning a different branch changes a user’s preference would take a study designed to answer a causal question. [Random sampling vs random assignment](/blog/random-sampling-vs-random-assignment/)

## Try three study designs

### 1. Two campuses send in one table

A college reports first-choice study location for 50 East Campus students and 50 West Campus students. Each student belongs to just one campus. The report gives every cell count and says students were randomly selected. What detail would settle the choice of test? Write a null hypothesis for each possible design.

### 2. Volunteers see different reminder formats

Researchers randomly assign 80 volunteers, 40 per group, to view either a plain-text or an illustrated appointment reminder. After seeing the assigned reminder, each volunteer privately chooses one option for receiving future reminders. Assume nobody’s choice is influenced by another participant. Choose the test, state both hypotheses, and draw a conclusion at a prespecified **α = 0.05**. Who does the comparison apply to?

| Assigned reminder | Email | Text message | No reminders |
| --- | ---: | ---: | ---: |
| Plain text | 20 | 12 | 8 |
| Illustrated | 15 | 14 | 11 |

### 3. The same riders answer twice

A transit agency asks the same 30 riders how they prefer to get to a station before and after a schedule change. Its report gives separate totals for each time, with one row for “before” and one for “after.” The agency wants to know whether rider preferences shifted. Does either of the two chi-square tests apply to this table? What data would you ask the agency to recover?

## Answers

**1. Ask whether the researchers drew one random sample across both campuses or drew independent random samples from the two campus rosters.** With one sample, the independence null says campus and first-choice study location are independent among students across the two campuses. With independent samples, the homogeneity null says the distribution of first-choice study location is the same among East and West Campus students. Use the relevant population sizes for the 10% check and the table to check the expected counts.

**2. Use a chi-square test for homogeneity.** The researchers randomly assigned the format, and each volunteer supplied one delivery choice. H₀ says the distribution of delivery choices for these volunteers would be the same under either reminder format. Hₐ says the distribution would differ.

Each row has expected counts of **17.5, 13, and 9.5**. The expected-count condition is met, and the 10% check doesn’t apply to this randomized experiment. The test gives **χ² ≈ 1.342** with **2** degrees of freedom and **p ≈ 0.511**. Since **0.511 > 0.05**, fail to reject H₀. The data give insufficient evidence that reminder format affects the distribution of delivery choices for these volunteers. Random assignment supports a causal comparison for these volunteers. Extending the conclusion to a wider population would require a basis for generalizing from them.

**3. Treat the responses as matched pairs.** The two rows reuse the same riders, so the usual chi-square tests here don’t apply to the before and after totals. Ask for each rider’s matched answers. Even identical totals could hide riders who switched in opposite directions.

## Practice recalling the reason for the test

Nibomo’s 250-card English AP Statistics deck asks “When is a chi-square test for independence appropriate?” and “When is a chi-square test for homogeneity appropriate?” For each card, name a sampling or assignment design and say what population or treatment claim it lets you test. Check your answer, then revisit the prompts at spaced intervals. [AP Statistics flashcard deck](/catalog/packages/ap-statistics-flashcards/)

*AI tools helped research, draft, and edit this article and develop the fictional scenarios. Python verified the expected counts, chi-square statistics, and p-values for both tables.*
