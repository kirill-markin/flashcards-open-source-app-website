---
title: "Random Sampling vs Random Assignment: Examples and Practice"
description: "Distinguish random sampling from random assignment, judge what a study can claim, and practice with worked examples and explained answers."
date: "2026-09-29"
image: "/blog/random-sampling-vs-random-assignment.png"
keywords:
  - "random sampling vs random assignment"
  - "random selection vs random assignment"
  - "scope of inference"
  - "generalization and causation"
  - "sampling and assignment examples"
---

Imagine recruiting 60 volunteers from a school chess club, then using a random number generator to split them between two study methods. You now have a randomized experiment. You still don't have a random sample of the school. The same study can be well designed for a causal comparison and poorly suited to a claim about all students.

**Random sampling decides who enters a study. Random assignment decides which treatment the participants receive.** When a question mentions randomness, trace what that random process actually does before choosing a conclusion.

![Volunteers at a lawn-bowling club draw colored ribbons from a cloth bag to divide into teams](/blog/random-sampling-vs-random-assignment.png)

## Two decisions, two different claims

| Decision | What happens | What it helps support |
| --- | --- | --- |
| Random sampling | A chance procedure selects units from a population or sampling frame. | Generalizing from the sample to the population it represents. |
| Random assignment | A chance procedure allocates experimental units to treatments. | Evaluating a causal effect of the treatments being compared. |

In introductory questions, **random selection** usually means random sampling. Read the procedure, though: selecting names to join a study is sampling; selecting participants to receive treatment A is assignment.

The *target population* is the group you want to learn about. The *sampling frame* is the list or source you actually sample from. A complete school roster could cover the target population of enrolled students; a chess-club list would cover only part of it.

A *simple random sample* of a fixed size gives every possible group of that size the same chance of selection. Equal chances for individual people alone aren't the full definition. Other probability sampling designs exist, including stratified and cluster sampling. [Penn State's sampling course](https://online.stat.psu.edu/stat506/Lesson01) gives the formal definition and distinguishes sampling designs.

Random assignment prevents researchers or participants from choosing treatment groups based on characteristics that could affect the outcome. Across possible assignments, those characteristics balance on average. A particular assignment can still leave one group with more prior knowledge or motivation. Random sampling has a similar limitation: it provides a basis for population inference, but no particular sample is guaranteed to mirror its population exactly.

That is why a randomized study still needs appropriate analysis: an observed difference might reflect chance variation. [Penn State's research-design lesson](https://online.stat.psu.edu/stat200/Lesson01) explains randomization and confounding; [Duke's sampling and assignment lesson](https://www2.stat.duke.edu/courses/Fall12/sta101.001/resources/lecturettes/random_sample_assignment.pdf) separates population generalization from causal inference.

## Predict the scope before seeing the results

*Scope of inference* means the reach of a conclusion: which people it covers and whether it concerns association or cause and effect.

Use this matrix for introductory, design-based inference. Each cell describes what a well-conducted design can support with suitable data and analysis. It doesn't announce a finding.

| | Random assignment used | Random assignment not used |
| --- | --- | --- |
| **Random sample from the target population** | Can support a causal comparison that generalizes to that population. | Can support population estimates and associations; the design alone doesn't establish causation. |
| **No random sample from the target population** | Can support a causal comparison for the participants; wider generalization needs additional justification. | Can describe the observed participants and their associations; neither population generalization nor causation follows from these design facts alone. |

The matrix is a first check. Researchers can also draw causal conclusions from observational data using additional methods and assumptions, as covered in Hernán and Robins' [Causal Inference: What If](https://miguelhernan.org/whatifbook). Likewise, researchers may justify applying an experiment elsewhere using evidence beyond random sampling. In a basic statistics problem, don't invent those missing justifications.

Even the top-left cell needs scrutiny. A sampling frame can leave people out, selected participants may not respond, and experimental participants may drop out. Randomness at one step doesn't remove every source of bias.

## One learning study, four designs

Here is an invented study, with no real findings attached.

A school wants to compare two ways of learning 20 unfamiliar map symbols:

- **Method A:** study a sheet pairing each symbol with its meaning.
- **Method B:** study the same information arranged in a diagram.

The outcome is the number of meanings recalled on the same test the following day. The target population is the school's 600 currently enrolled students. Both methods get the same study time and instructions. The question is whether one method produces better next-day recall than the other; there is no group that does no studying.

For now, assume the roster is complete, everyone selected participates, everyone completes the test, and the methods are carried out as specified without students sharing materials across groups. Change only recruitment and assignment.

### 1. Random sample, random assignment

Select a simple random sample of 60 students from the full roster. Randomly allocate 30 to A and 30 to B.

The random sample supports inference to the school's 600 students. The random assignment makes the comparison an experiment. With suitable results and analysis, this design can support a conclusion about the average causal effect of A versus B for that school population under these conditions.

An average effect doesn't mean every student benefits. Nor does it automatically cover other schools or other kinds of learning. The measured outcome is next-day recall of map-symbol meanings.

### 2. Random sample, students choose their method

Select 60 students in the same way, but let each choose A or B.

The sample still supports population inference under the stated assumptions. The comparison now has a possible confounding problem: students who choose diagrams might already be more comfortable with visual material. Their choice and their recall score could share an explanation.

A difference could support an association between chosen method and recall in the school population. It would not, from this design alone, establish that the method caused the difference.

### 3. Volunteers, random assignment

Recruit 60 students who answer a notice in the chess club. Randomly allocate 30 to A and 30 to B.

This is still a randomized experiment. Volunteer recruitment doesn't cancel the random treatment assignment. The design can support a causal comparison for the participants.

But chess-club volunteers may differ from the school's other students in ways relevant to this task. Random assignment doesn't turn them into a random sample of all 600 students. Extending the result to the whole school needs evidence the recruitment procedure hasn't supplied.

### 4. Volunteers, students choose their method

Recruit the same way and let participants choose A or B.

You can describe scores and associations among these volunteers, but the design supplies no random basis for either a school-wide generalization or a causal comparison. Choosing to join the study limits population inference; choosing the study method leaves possible confounding.

A bigger volunteer group would not, by itself, fix either problem.

## Repair a conclusion in three steps

Suppose someone describes design 3 and writes:

> The students were randomly assigned, so the diagram method improves memory for all students.

There are three separate things to check:

1. **Population:** random assignment doesn't justify “all students.” The participants were chess-club volunteers.
2. **Outcome:** the study concerns next-day recall of particular map symbols. “Improves memory” reaches beyond that measured outcome.
3. **Evidence:** no scores or analysis have been supplied. The design permits a causal investigation; it doesn't show that either method works better.

A defensible replacement is:

> Random assignment allows a causal comparison of the two methods for these participants. Without results, we cannot say whether one method causes better next-day recall than the other. Volunteer recruitment limits generalization to the wider school population.

If results are supplied, assess the estimated difference and its uncertainty before naming a better method. Also keep the comparison intact: evidence that B outperforms A would concern B versus A, not B versus no studying. A sound design tells you which question the results can answer.

## Seven practice scenarios

For each scenario, identify the sampling procedure, the assignment procedure, and the strongest conclusion the description permits. Try writing your answer before reading the explanation. Every scenario below is hypothetical.

### 1. A random survey with a tempting explanation

A university randomly selects 300 students from its complete enrollment list. All respond with their weekly study hours and latest course grade. Students reporting more study hours tend to report higher grades. A headline says extra study time caused the higher grades.

**Answer:** random sampling, no random assignment. The survey can support an association in the university's enrolled student population, subject to the quality of its measurements. It hasn't isolated the effect of study time. Prior preparation, for example, might relate to both study habits and grades. A defensible headline is: “More weekly study hours were associated with higher reported grades among the surveyed students.” The random sample provides a basis for assessing whether that association extends to the enrolled population.

### 2. Volunteers in a randomized experiment

Forty volunteers from a language club are randomly assigned to review the same vocabulary with audio or text. Everyone follows the assigned method and completes the same test. The question gives no scores.

**Answer:** no random population sample; random assignment is present. A causal comparison for these participants is possible, but there is no evidence here that either method is better. Neither the club nor all language learners automatically become the population covered by the result.

### 3. The incomplete list

A school randomly selects 80 names from its debate-club membership list. All selected members answer a survey about homework. The report claims to represent the whole school.

**Answer:** this is a random sample from the debate-club list. The sampling frame excludes nonmembers, so the random selection doesn't justify school-wide generalization. Under the stated conditions, the relevant population is the club membership covered by the list. There is no treatment assignment.

### 4. A random invitation with few responses

A college randomly selects 500 enrolled students and emails a survey about library opening hours. Only 70 respond. The analyst calls those 70 a representative random sample because the invitations were random.

**Answer:** the invited sample was random; the responding subset was also filtered by willingness or ability to reply. Students with strong opinions about library hours might respond more often. That creates a risk of nonresponse bias, so the invitation procedure alone doesn't establish representativeness. The response count alone doesn't prove bias either; what matters is whether respondents and nonrespondents differ in relevant ways. [Penn State's lesson on nonresponse](https://online.stat.psu.edu/stat506/Lesson11) explains how missing responses can bias an initially random sample.

### 5. Existing classes receive different treatments

A teacher gives her morning class a diagram and her afternoon class a text sheet. She says she assigned treatments, so this is a randomized experiment.

**Answer:** assigning a treatment is not the same as randomly assigning it. The schedule determines treatment here. Time of day and differences between the existing classes could affect scores, so this comparison doesn't isolate the treatment effect. No random sampling is described either.

Now change the procedure: randomly assign six of twelve existing classes to diagrams and the other six to text sheets. That is random assignment, with **classes as the experimental units**. Students in the same class receive the same assignment, so the analysis must account for the grouping rather than treat every student as independently randomized. Randomly assigning classes still doesn't make those classes a random sample of all classes.

### 6. Both kinds of randomness, no outcome data

A researcher takes a simple random sample of 100 students from a complete school roster and randomly assigns them to two study methods. Before collecting scores, she announces that one method causes higher scores throughout the school.

**Answer:** both sampling and assignment are random, but no treatment effect has been observed. The design supports investigating a population-level causal comparison if participation, conduct, measurement, and analysis are sound. It doesn't supply the answer in advance.

### 7. Two randomized groups look different

Sixty volunteers are randomly assigned to two methods. By chance, one group contains more students with prior experience. A student concludes that random assignment must have failed.

**Answer:** an imbalance doesn't by itself show that the assignment procedure failed. Random assignment balances characteristics on average across possible assignments, not exactly in every realized group. Check the actual procedure and analyze the experiment appropriately. If prior experience is known to matter when planning a study, researchers can group participants by experience and randomize within those groups; that is a randomized block design.

## Make cards from the mistakes you actually made

The definition is short enough to memorize. The useful practice is recognizing which part of a conclusion goes too far.

| Front | Back |
| --- | --- |
| Volunteers are randomly split between A and B. Which random process occurred? | Random assignment. Recruitment was not random sampling from a wider population. |
| A random sample chooses its own study methods. What blocks a simple causal claim? | Possible confounding: method choice may relate to other causes of the outcome. |
| Names are randomly drawn from a club list. Who is outside the sampling frame? | Everyone who isn't on that club list; school-wide generalization needs more justification. |
| Random invitations get selective responses. What issue remains? | Possible nonresponse bias in the responding sample. |
| Twelve classes are randomly split between methods. What are the assignment units? | The twelve classes, even if the outcome is measured for every student. |
| Randomized groups differ in prior knowledge. Does that prove the procedure failed? | No. Chance imbalance is possible; randomization doesn't guarantee identical groups. |
| Both sampling and assignment are random, but no scores exist. Can we name a better treatment? | No. The design supports an investigation; results and analysis must supply the evidence. |

Use the [Random Sampling vs Random Assignment Flashcards](/catalog/packages/random-sampling-vs-random-assignment-flashcards/) to identify study procedures, judge the scope of a conclusion, and correct unsupported claims.

Keep the full scenarios for written practice. Use the cards to target a recurring error, then return to a new scenario and justify the scope in complete sentences. The [AP Statistics flashcard guide](/blog/ap-statistics-flashcards/) covers fitting these cards into course study; the guide to [making better flashcards](/blog/how-to-make-better-flashcards/) helps keep each prompt focused.

On the next study-design question, mark three things before writing a conclusion: the list or process that supplied the participants, the process that supplied their treatments, and the outcome evidence actually given. Those details determine what you can claim.
