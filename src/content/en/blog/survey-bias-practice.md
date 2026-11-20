---
title: "Survey Bias Practice: Undercoverage, Nonresponse, and Response Bias"
description: "Spot undercoverage, nonresponse, response bias, and voluntary response bias in six AP Statistics practice questions with worked answers."
date: "2026-11-20"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8e43b5f28e0ba56af818ddf327591055781379868b32e32f47b01e95b82156e9.webp"
keywords:
  - "survey bias practice"
  - "undercoverage vs nonresponse"
  - "response bias"
  - "voluntary response bias"
  - "AP Statistics types of bias"
---

A school invites 200 randomly selected students to say whether the library should stay open an extra hour, until 5 p.m. on weekdays. Sixty percent of the students who reply say yes, and 80 students never answer. What can the school say about support for longer hours?

Start by finding where the problem enters the survey. A roster can leave out a group of students, some of the students picked can stay silent, and the wording can nudge students toward yes. Each problem calls for a different fix.

![A library worker returns a navy umbrella to a wooden rack with several empty compartments](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8e43b5f28e0ba56af818ddf327591055781379868b32e32f47b01e95b82156e9.webp)

## Follow the survey from the roster to the answers

The school wants to estimate support among **all currently enrolled students**. That's the **target population**. The roster it draws names from is the **sampling frame**. The students it selects form the **intended sample**, and the ones who answer are the **respondents**. If you're designing a survey, decide whose views you want to describe before you pick a roster. [Penn State’s guide to sampling terms](https://online.stat.psu.edu/stat100/Lesson02#defining-a-common-language-for-sampling) · [How to write an investigative question](/blog/investigative-question-ap-statistics/)

| Where the problem starts | What the school does | A repair that fits |
| --- | --- | --- |
| Sampling frame → **undercoverage** | Draws names at random from a roster that excludes everyone in the evening program. That group has zero chance of being picked. | Include evening-program students in the roster and draw a new sample. |
| Selection → **voluntary response bias** | Posts an open poll and counts whoever chooses to answer. Students with strong opinions may be more likely to take part. | Draw names at random from the full roster and invite those students directly. |
| After selection → **nonresponse** | Invites students picked from the full roster. Some never reply. The yes share can be biased if those students’ views on longer hours differ from the respondents’ views. | Follow up with the selected students who haven't replied. Try another contact method if available. |
| Collecting answers → **response bias** | Asks, “Do you support giving hardworking students a place to study by keeping the library open until 5 p.m. on weekdays?” The wording may nudge some students toward yes. | Ask, “Do you support keeping the school library open until 5 p.m. on weekdays?” |

A missing name is a gap in the roster. When explaining **undercoverage bias**, look for a part of the population the sampling method leaves out or makes less likely to be picked, and say why their answers might differ. For example, evening students who arrive after 5 p.m. might see less benefit in the extra hour. In an open poll, students volunteer their way into the sample. When the school picks the students first, missing replies from those it picked are nonresponse. [College Board’s AP Statistics framework, Topic 1.12](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=55)

Confusing wording can make answers inaccurate. To explain potential **response bias**, point to a reason answers might skew in one direction. For example, students who think the librarian wants the extension may feel pressure to say yes if the librarian can see their answers. If that happens, the reported yes share could run high. [Penn State’s lesson on nonresponse and response bias](https://online.stat.psu.edu/stat200/Lesson01#other-sources-of-bias)

## What can 80 missing answers change?

Of the 200 students the school invites, 120 answer the question. There are 72 yes answers and 48 no answers. The **yes share among respondents** is 72/120 = **60%**. The **response rate** is 120/200 = **60%**. They happen to be equal, and each answers a different question.

Keep the 120 observed answers fixed. Suppose each of the other 80 students would give one yes-or-no answer to the same question. Try both extremes.

| What all 80 missing students would answer | Yes answers among all 200 invitees | Yes share among all 200 invitees |
| --- | ---: | ---: |
| No | 72 | 72/200 = **36%** |
| Yes | 72 + 80 = 152 | 152/200 = **76%** |

The **36% to 76% range** gives the lowest and highest possible yes shares for the **200 invitees** under those assumptions. The range carries no confidence level. A school-wide estimate would require a separate analysis. If the missing students would say yes less often than the respondents, 60% overstates support among the invitees. If they'd say yes more often, it understates support. If both groups would say yes at the same rate, 60% is also the share for all 200. The replies alone leave all three possibilities open.

## Six survey bias practice questions

Try the questions before checking the answers. When you name a potential bias, point to the detail that creates it and explain how it could affect the results.

1. Before drawing names, the school filters its roster to students who borrowed a library book this term. Everyone selected replies. Would asking the question in plainer language address the main problem?
2. Every student can see a library-hours poll in the school portal. The school tallies whoever answers the open poll. What kind of sample is this? Would collecting 1,000 replies fix the main problem?
3. The school draws from the full roster, and every selected student answers the neutral question from the table. Each student has to answer aloud to the librarian. What could bias the answers, and what would you change?
4. Return to the 200 invitees. Suppose exactly 48 of the 80 students who stayed silent would have answered yes. What would the yes share among all 200 invitees be? What effect do the missing answers have in this scenario?
5. The school draws from a list of daytime students that leaves out the evening program. All selected students reply to the question about giving “hardworking students a place to study.” Name both flaws. If the school rebuilds the roster and draws again, which flaw still needs attention?
6. In a separate survey, the school draws 200 names from the full roster and asks the neutral question. Only 120 answer at first. The school can remind the 80 students who haven't replied or start over with a larger random sample and still send each student a single invitation. Which choice directly addresses nonresponse? If reminders raise the response rate and some students still stay silent, what can the school say about nonresponse bias?

## Worked answers

1. **Undercoverage.** Students who haven't borrowed a book have zero chance of being picked. If borrowers favor the extension more often than other students, the estimate could run high. Clearer wording would still leave those students off the roster. Draw from the full enrollment roster.
2. **A voluntary response sample.** Students decide whether to join by answering the poll. Students with particularly strong views may still be more likely to answer, even with 1,000 replies. To change how students are selected, draw names at random from the full roster and invite those students directly.
3. **Potential response bias.** Some students may say yes to please the librarian. Let students answer privately and share only the totals with the librarian. This reduces the pressure that could skew individual answers toward yes.
4. **(72 + 48)/200 = 60%.** The hypothetical yes share among students who stayed silent is 48/80 = 60%, which matches the observed 72/120. Under that assumption, the respondent share equals the share among all invitees. The original replies give no way to check the assumption.
5. **Undercoverage and potential response bias.** The roster excludes evening students, whose views on the extension might differ. The wording may nudge students toward yes. A new draw from the complete roster addresses coverage. Use a neutrally worded question to address the second problem.
6. **Remind the 80 students who haven't replied.** A reminder gives them another chance to answer. Drawing more names and inviting them once could yield more replies while leaving open the possibility that students with particular views respond at a different rate. After reminders, a higher response rate tells you that more of the original invitees answered. Whether the remaining students would answer differently is still unknown.

## Review the distinction you missed

Write one prompt on the front of a flashcard. “Diagnose a roster that skips evening students and a survey that picks them but gets no replies from them.” On the back, explain that the first survey gives a whole group zero chance of selection, which is undercoverage. In the second survey, the group was eligible and some students were picked, so their missing replies are nonresponse. Try recalling both diagnoses today and again in a few days. Spacing out those attempts can help you remember the distinction later. [Karpicke and Bauernschmidt’s experiment on spaced retrieval](https://pubmed.ncbi.nlm.nih.gov/21574747/)

The 48-card English study design deck has scenarios on sampling frames, nonresponse, and which populations a study can describe. The guide gives worked examples of when random sampling supports a conclusion about a population. [Study design flashcards](/catalog/packages/random-sampling-vs-random-assignment-flashcards/) · [Guide to random sampling and random assignment](/blog/random-sampling-vs-random-assignment/)

*Prepared with AI assistance. The school and survey results are fictional.*
