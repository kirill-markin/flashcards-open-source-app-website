---
title: "Stratified vs Cluster Sampling With Practice Problems"
description: "Compare stratified and cluster sampling with the same 24 shuttle riders. Work through all six cluster draws, then solve three practice problems with answers."
date: "2026-11-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/db4f3934ba1d89e4e7aa9b2a0830c8730b31ec1b6d3e440977c6321e6af92f7d.webp"
keywords:
  - "stratified vs cluster sampling"
  - "stratified random sample"
  - "cluster random sample"
  - "sampling methods practice"
  - "AP Statistics sampling methods"
---

Four shuttle departures carried six riders each. To estimate the fraction of riders whose boarding started more than ten minutes late, you could draw three names from every departure or draw two departures and include everyone on them. Either way you sample 12 riders. How much can the estimate change from one draw to the next?

A **stratified random sample** draws members at random from every group. A **one-stage cluster random sample** draws groups at random and measures every member of the chosen groups. Identifying a sampling method and explaining why it fits a study are part of [Topic 1.11 in College Board’s AP Statistics framework](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description.pdf#page=53).

![A florist lifts a cream chrysanthemum from one of four color-sorted buckets beside three individually chosen stems.](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/db4f3934ba1d89e4e7aa9b2a0830c8730b31ec1b6d3e440977c6321e6af92f7d.webp)

## One population of 24 riders

In this fictional example, the population is the 24 riders who took these four departures. Each rider took exactly one. A rider’s outcome is yes if the departure started boarding more than ten minutes after its scheduled boarding time. Boarding starts once per departure, so all six riders on that departure share the same outcome.

| Departure | Riders | Riders with a delay over 10 minutes |
| --- | ---: | ---: |
| A | 6 | 0 |
| B | 6 | 0 |
| C | 6 | 6 |
| D | 6 | 6 |
| **Total** | **24** | **12** |

The population proportion is **12/24 = 1/2**. Both plans estimate it by dividing the number of sampled riders with a yes by 12. To practice defining the population and outcome before you pick a sampling method, work through these [AP Statistics investigative question examples](/blog/investigative-question-ap-statistics/).

## Draw riders from every departure

Use a complete rider roster for each departure. Randomly draw three distinct rider IDs from each roster, giving every trio on that roster the same chance. Make the four draws independently. Each departure is a stratum, and a rider is the sampling unit, the unit you draw. Each rider has a **3/6 = 1/2** chance of inclusion.

Every draw takes three riders each from A and B, all with a no, and three each from C and D, all with a yes. The stratified estimate is **6/12 = 1/2** every time.

## Draw two whole departures

Use the full departure list and randomly draw two distinct departures, giving every pair the same chance. Record the outcome for all six riders on each selected departure. Here each departure is a cluster, and the departure is the sampling unit. The rider is the observational unit, the unit you record an outcome for. Each rider comes into the sample when their departure does, so their chance of inclusion is **2/4 = 1/2**.

| Departures drawn | Riders with a delay | Sample proportion |
| --- | ---: | ---: |
| A and B | 0 | 0/12 |
| A and C | 6 | 6/12 |
| A and D | 6 | 6/12 |
| B and C | 6 | 6/12 |
| B and D | 6 | 6/12 |
| C and D | 12 | 12/12 |

The six estimates average to **1/2**, and exactly **four of the six pairs** match the population proportion. The 1/2 inclusion probability describes the chance for any one rider. The spread of the estimates depends on which riders get picked together. In the cluster plan, each selected departure adds six identical outcomes at once. The stratified plan fixes the number of riders from every departure, so its estimate stays fixed for these data.

## Choose a plan that fits the collection limits

If you have the four rider rosters and need riders from every departure, use the stratified plan so each roster contributes. Now suppose each departure has its own pickup site, the team can collect data only in person, and it can cover two sites. Randomly draw two departures and collect the outcome for every rider at those sites. You need the full departure list for the draw and access to every rider on the chosen departures. Collecting data from people who are already in one place also helps in [OpenStax’s example of surveying students in selected class sections](https://openstax.org/books/contemporary-mathematics/pages/8-1-gathering-and-organizing-data).

## Three sampling practice problems

For each plan, name what you draw and who or what you measure. Write down your answers before checking the explanations.

1. **A two-branch limit.** A library system wants to test the water from its drinking fountains. Staff have a complete list of branches with fountains and can test every fountain at a branch they visit. They can visit just two branches. Design a random sample that fits the limit.
2. **Some homerooms, some students.** A school randomly draws four homerooms and then randomly selects five students in each of those rooms for a survey. Each student belongs to one homeroom, and each room has at least five students. Classify the plan and change it to a one-stage cluster sample. How would you classify surveying everyone in the four closest homerooms?
3. **Every shift in the sample.** A factory is considering a later lunch break and wants its sample to include workers from every shift. Each worker is assigned to one shift, and the factory has a complete roster for each. Design a random sample that meets the coverage requirement.

## Explained answers

1. Randomly draw two different branches, giving each pair the same chance, and test every fountain at the two chosen branches. This is a **one-stage cluster random sample**. Branches go into the draw, fountains supply the measurements, and the plan takes two visits.
2. This is **two-stage cluster sampling**. The first draw picks homerooms. The second picks students within those rooms. To make it one-stage, keep the random draw of rooms and survey everyone in those rooms. Choosing the closest rooms is **convenience sampling** because proximity determines which rooms enter the sample.
3. Use a **stratified random sample**. Randomly draw one or more worker IDs from each shift roster. Every shift contributes because it has its own draw.

To practice recognizing a sample in a study that also allocates treatments, try these [random sampling and random assignment problems](/blog/random-sampling-vs-random-assignment/).

## Recall the draw on a fresh example

Picture a warehouse checking items for damage. Sketch one plan that draws item IDs from every crate and another that draws crate IDs and checks everything in the chosen crates. Name each method and its sampling unit from memory.

For another round, use the sampling prompts in the [250-card English AP Statistics deck](/catalog/packages/ap-statistics-flashcards/). Before turning over a card, say what goes into the draw and name the method. Try the same prompt again a few days later. Practicing recall with time between attempts can help you remember the answer longer, a result found in [Karpicke and Bauernschmidt’s study of spaced retrieval](https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Bauernschmidt_JEPLMC.pdf).

*AI was used to draft and edit this worksheet and create its illustration. The shuttle data are fictional, and the possible samples under both plans were checked by enumeration.*
