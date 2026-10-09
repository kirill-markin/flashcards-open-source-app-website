---
title: "AP Statistics Investigative Questions: Examples and Practice"
description: "Write and repair AP Statistics investigative questions. Practice identifying variables, analysis goals, populations, and the conclusions a study can support."
date: "2026-10-09"
image: "/blog/investigative-question-ap-statistics.png"
keywords:
  - "investigative question AP Stats"
  - "AP Statistics investigative question examples"
  - "components of an investigative question"
  - "how to write an investigative question"
  - "statistical question vs survey question"
---

“Should the library stay open later?” sounds like a reasonable student-council question. But it leaves a statistics study with several decisions unfinished: how much later, whose opinion matters, and whether the goal is to estimate support or test for a majority.

An **investigative question in AP Statistics** gives those decisions enough shape to guide the study. You should be able to read it and explain what data to collect, what the analysis is meant to answer, and how far the answer can reach.

College Board [added investigative-question topics to the course for the 2026–27 school year](https://apcentral.collegeboard.org/courses/ap-statistics/future-revisions). The worked examples and seven exercises below are original, hypothetical scenarios, not official AP questions.

![A woodworker dry-fitting the third leg into a small stool before gluing the joints](/blog/investigative-question-ap-statistics.png)

## The three components need to work together

[Topic 1.10.A in the fall 2026 Course and Exam Description](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf#page=50), printed page 45, connects an investigative question to three jobs:

1. **Guide collection:** identify the variables to record.
2. **Guide analysis:** for a test, identify the parameter and alternative direction; for a confidence interval, identify the parameter and the goal of estimating it with a range.
3. **Guide conclusions:** identify the applicable population and, for an experiment with random assignment, the causal question.

Naming a population and a variable gets you started. The analysis goal still needs to be clear.

A **parameter** describes a population, such as its mean commute time or proportion supporting a proposal. A **statistic** describes the collected sample. [Penn State's samples and populations lesson](https://online.stat.psu.edu/stat200/Lesson01) explains this distinction. In the library example, the fraction saying yes in your survey would be a statistic; the proportion supporting the proposal across the target school population is the parameter you want to learn about.

## Repair the library question before surveying anyone

Suppose Riverbend High's student council wants to investigate support for extending the library's weekday closing time from 5 p.m. to 6 p.m. It plans a simple random sample of 100 students from the complete current enrollment roster. For this example, assume every selected student responds.

Start with the loose draft:

> Should the library stay open later?

First, define what each student's response means. Record whether the student supports the specific one-hour extension. “Later” could otherwise mean very different proposals to different respondents.

Next, choose the purpose. Suppose the council wants to test whether a majority supports the extension. Its parameter is `p`, the proportion of all currently enrolled Riverbend High students who support it. A majority means `p > 0.50`.

Then name the population in the question. The 100 respondents supply the data; the council wants an answer about all currently enrolled students.

The repaired question is:

> Among all currently enrolled Riverbend High students, is the proportion who support extending the library's weekday closing time from 5 p.m. to 6 p.m. greater than 0.50?

This sentence tells you to collect a categorical response, investigate a population proportion, and use a test directed toward support above one-half. It asks about support, so even a clear majority would not settle staffing costs or establish that the extension improves learning. Those are different questions.

### The investigative question isn't the survey item

The individual survey item could be:

> Do you support extending the school library's weekday closing time from 5 p.m. to 6 p.m.? Yes / No.

One student can answer that item. Answering the investigative question requires combining responses and accounting for uncertainty. Students' answers can differ; that expected variation is part of the investigation.

The American Statistical Association's [GAISE II framework](https://www.amstat.org/docs/default-source/amstat-documents/gaiseiiprek-12_full.pdf#page=21), printed pages 13–14, distinguishes statistical investigative questions from questions used to collect individual measurements or responses. A good survey item supplies data for the investigation; it doesn't replace the investigation's purpose.

## Same variable, three different analysis goals

Keep the library proposal, population, and yes/no response unchanged. You can still ask three different questions. In this table, `p` refers to the school-wide support proportion defined above.

| Goal | Investigative question | Intended analysis |
| --- | --- | --- |
| Estimate support | What confidence interval estimates the proportion of all currently enrolled Riverbend High students who support extending weekday closing from 5 p.m. to 6 p.m.? | Estimate `p` with a range of plausible values. |
| Test for a majority | Is that population proportion greater than 0.50? | Test `H₀: p = 0.50` against `Hₐ: p > 0.50`. |
| Test for a difference from half | Does that population proportion differ from 0.50? | Test `H₀: p = 0.50` against `Hₐ: p ≠ 0.50`. |

The shortened questions in the last two rows use the population and proposal defined above. Written on their own, they would need that context restored.

An interval aims to estimate the amount of support with uncertainty. A directional test asks about support above a chosen benchmark. A two-sided test allows a departure on either side. [Penn State's comparison of confidence intervals and tests](https://online.stat.psu.edu/stat200/Lesson06) explains how the research question determines this choice.

For the estimation version, you don't invent interval endpoints before collecting data. You name the parameter and ask for an interval estimate. For the test versions, “most” and “different from half” lead to different alternatives. These questions identify the intended analysis; carrying it out also requires checking the method's conditions.

Choose the purpose before examining results. [Topic 1.1.B of the Course and Exam Description](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf#page=36), printed page 31, requires keeping that purpose fixed through the analysis. If a majority test comes back unconvincing, quietly relabeling it as a two-sided investigation changes the question you planned to answer.

## Let the design constrain the wording

Imagine the library survey instead goes only to students already visiting the library after school. Adding “all enrolled students” to the sentence doesn't make that recruitment plan cover them. You need to change the collection plan or narrow the intended scope.

Likewise, a survey of study habits and grades doesn't justify asking whether one habit *causes* higher grades. A well-conducted randomized experiment can investigate a causal comparison, with its population scope checked separately. [Penn State's collecting-data lesson](https://online.stat.psu.edu/stat200/Lesson01) covers sampling, experiments, and confounding. The [random sampling vs. random assignment guide](/blog/random-sampling-vs-random-assignment/) has full worked examples of those scope decisions.

The wording states what you want to learn. The design must actually let you learn it.

## Seven question-repair exercises

Write your replacements before reading the answers. For each one, identify the variables, the analysis goal, and the intended scope. Keep the supplied purpose; where a measurement is vague, propose a specific definition. Equivalent wording is fine when it preserves those decisions. None of these scenarios supplies real findings.

### 1. A question for one person

A college plans to randomly sample its currently enrolled students to estimate mean one-way travel time to campus on a normal class day. All students at this hypothetical college attend classes on campus. The draft says: “How many minutes does your trip to campus take?”

Turn the data-collection item into an investigative question with an interval-estimation goal. Give “normal class day” a usable definition.

### 2. A response nobody has defined

A school wants an interval estimate of the mean rating of its cafeteria lunches among all enrolled students. It will randomly sample students from its full roster. For this example, every enrolled student ate cafeteria lunch during the previous school week. The draft asks: “How good is the food?”

Supply a measurable rating and time window. Repair the question without changing the goal into a proportion.

### 3. An unfinished comparison

A delivery company will randomly sample completed weekday deliveries from each of its two depots during October. It wants to know whether Depot A has a lower population mean delivery time than Depot B. Time runs from dispatch to arrival, in minutes. The draft asks: “Are the depots different?”

Repair the question and give the alternative for `μA − μB`.

### 4. The sample takes the population's place

A school randomly selects 40 students from the complete science-club membership list; all respond. It wants to estimate the proportion of current club members who intend to attend its November field trip. The draft asks: “What proportion of these 40 students intends to attend?”

Repair the question for population inference, keeping the recruitment plan unchanged.

### 5. A causal verb in a survey

A university randomly samples enrolled students and records self-reported average nightly sleep hours during the previous week and whether each missed any morning class that week. It plans to test for an association by comparing mean sleep hours between students who missed at least one morning class and those who missed none. The draft asks: “Does less sleep cause students to miss morning classes?”

Repair the question using the measured variables and appropriate conclusion language. State the comparison the analysis should test.

### 6. A randomized experiment with a vague outcome

A gardener randomly assigns 48 basil plants from one greenhouse batch to fertilizer A or fertilizer B, with 24 in each group. Each gets its assigned fertilizer for 21 days, with the same planned watering and light conditions. The goal is to test whether A causes greater mean growth than B for the plants in this experiment. The draft says: “Is A better?”

Define growth in centimeters, write the causal investigative question, and give the alternative for the mean difference under A versus B.

### 7. A direction chosen after the result

A packing company plans to test whether the population mean weight of its 500-gram bags produced on Monday differs from 500 grams. It randomly samples bags from that day's production. After seeing a sample mean above 500, someone rewrites the question as: “Is the population mean greater than 500 grams?”

Which investigative question preserves the planned purpose, and what alternative does it imply?

## Explained answers

### 1. Move from one response to the population mean

One workable definition is each student's most recent ordinary day of attending classes on campus, excluding a day with an unusual travel disruption. Measure elapsed minutes from leaving their residence to arriving on campus.

> What confidence interval estimates the mean one-way residence-to-campus travel time, in minutes, on each student's most recent ordinary class day, for all currently enrolled students at this college?

The original asks one respondent for a measurement. The replacement asks for an interval estimate of `μ`, the population mean of those defined travel times. Use the same definition in the data-collection item so the collected responses answer the repaired question. A different definition could work, but it would need to be stated consistently.

### 2. Make the rating explicit

Ask each student for one overall lunch score for the previous school week, using whole numbers from 0 (very poor) to 10 (very good).

> What confidence interval estimates the mean overall cafeteria-lunch score, on this 0–10 scale, for the previous school week among all currently enrolled students at this school?

The variable is each student's numerical score; the parameter is the population mean score. This measures students' ratings, not an objective measure of food quality. The scenario ensures everyone in the target population has eaten the lunches being rated. In a real survey, a student who hasn't tried them cannot supply an equivalent rating; don't code that missing opinion as zero.

Estimating the proportion who choose 8 or higher would change the supplied goal. Keep the mean when repairing this question.

### 3. Name the outcome and preserve the direction

> Among all completed weekday deliveries from these two depots during October, is Depot A's population mean dispatch-to-arrival time, in minutes, lower than Depot B's?

Here `μA` and `μB` describe the respective depots' delivery populations in the stated month. The alternative is `Hₐ: μA − μB < 0`, with null difference zero. “Different” would suggest `≠ 0`, including A being slower. No treatment was assigned, so the question compares delivery times without claiming that the depot itself causes the difference.

### 4. Restore the club population

> What confidence interval estimates the proportion of all current science-club members who intend to attend the November field trip?

Record each student's intention as yes or no. The 40 responses give a sample proportion; the target parameter `p` concerns all current club members. The membership-list sample doesn't supply a basis for extending this question to everyone at the school. Intent to attend is also the measured outcome, so the question doesn't estimate eventual attendance.

### 5. Give the association a specific comparison

> Among this university's enrolled students, does population mean self-reported nightly sleep duration during the previous week differ between students who missed at least one morning class that week and students who missed none?

The measured variables are sleep hours and missed-class status. Define `μmiss` and `μnone` as the population mean reported sleep hours for those two groups. The question calls for testing `Hₐ: μmiss − μnone ≠ 0` against a null difference of zero.

This is one specific way to investigate the stated association. It preserves both measured variables and asks about their relationship through a mean comparison. The survey leaves possible alternative explanations, such as work schedules affecting both sleep and attendance. A difference would not establish that less sleep caused the missed classes.

### 6. Specify the treatment comparison and measured growth

> For the 48 basil plants in this experiment, does fertilizer A cause a greater mean increase in height, in centimeters from day 0 to day 21, than fertilizer B under the planned watering and light conditions?

Measure each plant's height before treatment and again after 21 days; growth is the second measurement minus the first. Assigned fertilizer is the explanatory variable, and height increase is the response.

The target comparison is mean growth these plants would have under A versus under B. Calling those means `μA` and `μB`, the alternative is `Hₐ: μA − μB > 0`, with null difference zero. The observed group means provide evidence about that comparison. Random assignment supports the causal investigation; results and suitable analysis must still supply the answer. The question keeps its scope to these plants under these conditions.

### 7. Keep the original two-sided question

> Does the population mean weight of all 500-gram bags produced by this company on Monday differ from 500 grams?

The variable is bag weight in grams. The planned alternative is `Hₐ: μ ≠ 500`, with `H₀: μ = 500`. A sample mean above the benchmark doesn't justify replacing the alternative with `μ > 500`. The population mean is still unknown; the sample result belongs in the analysis of the original question.

## Turn a recurring error into a small card

Write complete repairs for practice. Use a short flashcard when the same decision keeps slipping.

| Front | Back |
| --- | --- |
| A question names a population and variable. What analysis detail could still be missing? | The target parameter and purpose: test with a stated alternative, or estimate the parameter with a range. |
| The goal is “A has a lower mean than B.” For `μA − μB`, which alternative fits? | `< 0`; `≠ 0` would include either direction. |
| A survey question asks one student for travel minutes. What does it supply? | One measurement; the investigative question specifies what the study will learn from the measurements. |
| Can a higher sample mean turn a planned two-sided question into a greater-than question? | No. Preserve the planned purpose when analyzing the results. |

The [guide to making better flashcards](/blog/how-to-make-better-flashcards/) helps keep each card focused. For wider course review, the [AP Statistics flashcard guide](/blog/ap-statistics-flashcards/) and [independent English AP Statistics course deck](/catalog/packages/ap-statistics-flashcards/) cover more than this question-writing skill.

For your next repair, underline the measured variables, circle the parameter and analysis goal, then check the population and causal wording against the study design. If you can't mark one of those parts, explain what's missing before rewriting the sentence.
