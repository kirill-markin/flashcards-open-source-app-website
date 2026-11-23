---
title: "Confusion Matrix Practice: Precision, Recall, and Thresholds"
description: "Build two confusion matrices, calculate precision and recall, and pick a cutoff that fits a review limit. Six practice problems include worked answers."
date: "2026-11-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8fea52e30495c0fcfc69e3867ebff19b343537cec2bb280d9c811ca66f5856dc.webp"
keywords:
  - "confusion matrix practice"
  - "precision and recall practice"
  - "false positive rate"
  - "classification threshold"
---

A bookbindery needs to catch at least 25 jackets with torn edges in a fictional batch of 1,000. The review team has time to check 50 jackets. Use the model scores below to build two confusion matrices and choose a cutoff. Then see what information you’d need if the team could check only 35.

![A bookbindery worker lifts a torn green book jacket beside a cart stacked with matching books](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/8fea52e30495c0fcfc69e3867ebff19b343537cec2bb280d9c811ca66f5856dc.webp)

## Build two matrices from the same batch

The model gives each book jacket a score. Higher scores indicate a greater chance of an edge tear. The cutoff, also called the classification threshold, determines which jackets go to review. In this worksheet, **a score at or above the cutoff gets flagged**. Each flag is a positive prediction.

A separate inspection of the full test batch supplies the actual labels. The table groups all 1,000 jackets by score and shows how many have an edge tear in each group.

| Model score | Jackets with an edge tear | Intact jackets | Total jackets |
|---|---:|---:|---:|
| 0.80 or higher | 16 | 4 | 20 |
| At least 0.50 and below 0.80 | 12 | 18 | 30 |
| Below 0.50 | 12 | 938 | 950 |
| Total | 40 | 960 | 1,000 |

A **confusion matrix** counts jackets by both the model’s prediction and the actual label. A flagged jacket with a tear is a **true positive (TP)**. A flagged intact jacket is a **false positive (FP)**. A jacket with a tear that goes unflagged is a **false negative (FN)**, and an unflagged intact jacket is a **true negative (TN)**.

Fill in those four counts for cutoffs of 0.80 and 0.50 before checking the matrices below. At **0.80**, put the first band in the flagged row. Add the other two bands to get the unflagged row.

| Model prediction at 0.80 | Has an edge tear | Intact | Total jackets |
|---|---:|---:|---:|
| Flagged | 16 (TP) | 4 (FP) | 20 |
| Unflagged | 24 (FN) | 956 (TN) | 980 |
| Total | 40 | 960 | 1,000 |

At **0.50**, the middle band joins the flagged row. Move 12 jackets with edge tears and 18 intact jackets up from the unflagged row. The cutoff changes the predictions, so the row totals change. The inspected labels stay fixed at 40 jackets with edge tears and 960 intact jackets.

| Model prediction at 0.50 | Has an edge tear | Intact | Total jackets |
|---|---:|---:|---:|
| Flagged | 28 (TP) | 22 (FP) | 50 |
| Unflagged | 12 (FN) | 938 (TN) | 950 |
| Total | 40 | 960 | 1,000 |

Check the axes before naming a cell. These matrices put predictions in rows, as does Google’s Machine Learning Crash Course. Scikit-learn puts actual labels in rows. [Google’s threshold lesson](https://developers.google.com/machine-learning/crash-course/classification/thresholding) · [scikit-learn’s confusion matrix reference](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html)

## Pick the denominator before dividing

Precision and recall both start with the number of true positives. Precision asks what share of **flagged jackets** had a tear. Recall asks what share of **all jackets with tears** got flagged. Write down the group you’re dividing by before you reach for the numbers. [Google’s classification metrics lesson](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)

| Metric | Group in the denominator | Formula | At cutoff 0.80 | At cutoff 0.50 |
|---|---|---|---:|---:|
| Precision | All flagged jackets | TP / (TP + FP) | 16/20 = 80% | 28/50 = 56% |
| Recall | All jackets with edge tears | TP / (TP + FN) | 16/40 = 40% | 28/40 = 70% |
| False positive rate | All intact jackets | FP / (FP + TN) | 4/960 ≈ 0.42% | 22/960 ≈ 2.29% |
| Accuracy | All jackets | (TP + TN) / total | 972/1,000 = 97.2% | 966/1,000 = 96.6% |

At 0.50, dividing 22 by 50 gives 44%, the share of flags that were false alarms. For the false positive rate, start with all **960 intact jackets** and ask how many got flagged. That gives 22/960, about 2.29%.

Reviewing every flagged jacket gives you the counts for precision. To calculate exact recall, you also need to know how many torn jackets the model missed or have a separate count of all torn jackets. The full inspection supplies that count here.

For a longer drill on choosing the group you divide by, try the [two-way table practice on conditional probability](/blog/conditional-probability-two-way-tables/). If you keep reaching for the wrong total, spend a few short sessions across several days naming the given group from memory before you flip each card. Use the [English conditional probability flashcards](/catalog/packages/conditional-probability-two-way-table-flashcards/).

## Choose a cutoff that fits the review limit

Check the queue size (TP + FP) and the number of jackets with tears in it (TP). **Use 0.50 when the team can review 50 jackets.** It fills the queue and catches 28 torn jackets, three above the target. The 0.80 cutoff has higher accuracy. It catches 16, nine short of the target. A rule that flags zero jackets would still get 96% accuracy by correctly leaving all 960 intact jackets unflagged. Its recall would be zero.

**With only 35 reviews, neither tested cutoff works.** The cutoff of 0.80 still falls short of the catch target, and 0.50 sends 15 too many jackets. A cutoff above 0.50 and below 0.80 needs to add at most 15 jackets to the first 20. At least nine of those additions need an edge tear. The middle score band contains 12 jackets with tears and 18 intact ones. You need the individual scores and labels, or counts split at a cutoff inside that band, to check whether enough of the torn jackets make it into the queue.

## Practice problems

1. **Read a matrix with actual labels in rows.** Find TP, FP, FN, and TN.

   | Actual label | Unflagged | Flagged |
   |---|---:|---:|
   | Intact | 82 | 8 |
   | Edge tear | 3 | 7 |

2. **Repair a denominator.** In problem 1, someone uses 8/15 for the false positive rate. Calculate the false positive rate, precision, and recall.
3. **Count scores exactly on the cutoff.** In a batch of 200 jackets, 25 have an edge tear. The rule “score > 0.50” flags 20 jackets, nine of them torn. Exactly three other jackets score 0.50, two of them torn. Switch the rule to “score ≥ 0.50.” How many jackets get flagged, and what are precision and recall?
4. **Handle an empty review queue.** Eight of 80 jackets have an edge tear. The model flags none. Find all four counts, accuracy, recall, and precision.
5. **Check a cutoff inside the band.** Return to the original 1,000 jackets and the 35-review limit. A more detailed report shows that nine jackets with edge tears and six intact jackets scored at least 0.65 and below 0.80. Rebuild the four counts at 0.65. Does this cutoff meet both requirements?
6. **Change how common tears are.** Two batches each contain 1,000 jackets. Batch A has 100 jackets with edge tears and batch B has 20. In both batches, recall is exactly 80% and the false positive rate is exactly 5%. Find the number of flags and the precision for each batch.

## Answers

1. **TP = 7, FP = 8, FN = 3, TN = 82.** The three jackets in the edge tear row and the unflagged column are the misses.
2. **False positive rate = 8/90 ≈ 8.89%. Precision = 7/15 ≈ 46.67%. Recall = 7/10 = 70%.** The denominator 15 counts all flags, so 8/15 gives the share of the queue that was intact. The false positive rate uses all 90 intact jackets.
3. **23 flags, precision ≈ 47.83%, recall = 44%.** All three jackets at 0.50 now get flagged. Two have tears, so the model catches 11 in total. Precision is 11/23. Recall is 11/25.
4. **TP = 0, FP = 0, FN = 8, TN = 72.** Accuracy is 72/80 = 90%. Recall is 0/8 = 0%. Precision is undefined because there are zero flags in its denominator.
5. **TP = 25, FP = 10, FN = 15, TN = 950.** Add the nine torn jackets and six intact jackets from the new report to the 20 already flagged at 0.80. The queue reaches exactly 35 jackets and contains 25 with edge tears, so 0.65 meets both requirements.
6. **A has 125 flags and 64% precision. B has 65 flags and about 24.62% precision.** In A, 80 of the 100 torn jackets and 45 of the 900 intact jackets get flagged, giving 80/125. In B, 16 of the 20 torn jackets and 49 of the 980 intact jackets get flagged, giving 16/65. The same false positive rate acts on a larger group of intact jackets in B. With fewer torn jackets in the batch, true positives make up a smaller share of the queue. For more practice with that effect, see [Bayes’ theorem practice on base rates](/blog/bayes-theorem-practice/).

*AI assisted with creating this original worksheet. The illustration is AI-generated.*
