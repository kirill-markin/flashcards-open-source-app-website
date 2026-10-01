---
title: "Accuracy vs Precision: Worked Examples and Practice"
description: "Compare accuracy and precision using repeated measurements, spot a misleading average, and practice with worked answers and focused review cards."
date: "2026-10-01"
image: "/blog/accuracy-vs-precision.png"
keywords:
  - "accuracy vs precision"
  - "accuracy and precision examples"
  - "accuracy and precision practice problems"
  - "precise but not accurate"
  - "accuracy vs precision measurements"
---

Four mass readings—24.0, 24.5, 25.5, and 26.0 g—average to 25.0 g. If the reference mass is 25.0 g, that average looks encouraging. Yet every reading misses the reference by at least 0.5 g. Checking only the average hides the scatter.

That's the useful part of learning accuracy vs precision: knowing what to compare, and how much your evidence actually tells you.

![A woman crouches beside three closely grouped pétanque balls that lie well away from the small wooden target ball](/blog/accuracy-vs-precision.png)

## Compare with the reference, then with each other

**Accuracy** concerns how close a measured value is to the true value. In a classroom problem, you usually compare with a supplied reference or accepted value. **Precision** concerns how closely repeated measurements of the same or similar objects agree under stated conditions. [OpenStax's introductory explanation](https://openstax.org/books/chemistry-2e/pages/1-5-measurement-uncertainty-accuracy-and-precision) illustrates these comparisons with measurements and target diagrams.

Keep two questions separate:

| Question | What to inspect |
| --- | --- |
| How close is this reading to the reference? | Its difference from the reference |
| How closely do repeated readings agree? | Their spread |

For the first comparison, calculate `reading − reference`. A positive result means the reading is high; a negative result means it's low. To judge closeness, compare the size of that difference, ignoring its sign.

For precision, look at how tightly the readings cluster. A cluster can sit far from the reference: you can repeat the same wrong result quite consistently.

## Four sets of measurements, one reference

These are invented teaching examples. Imagine repeatedly weighing the same stable object. Its reference mass is **25.00 g**; treat reference uncertainty as negligible for this exercise. Within each set, the operator, procedure, instrument, and environmental conditions stay the same over a short period.

All readings are in grams. If the units need a refresher, see [SI base and derived units](/blog/si-base-and-derived-units/).

| Set | Readings (g) | Mean (g) | Range (g) |
| --- | --- | --- | --- |
| A | 24.98, 24.99, 25.01, 25.02 | 25.00 | 0.04 |
| B | 26.18, 26.19, 26.21, 26.22 | 26.20 | 0.04 |
| C | 24.00, 24.50, 25.50, 26.00 | 25.00 | 2.00 |
| D | 25.20, 25.70, 26.70, 27.20 | 26.20 | 2.00 |

The **mean** is the sum divided by the number of readings. The **range** is the largest reading minus the smallest. For B:

`Mean = (26.18 + 26.19 + 26.21 + 26.22)/4 = 26.20 g`

`Range = 26.22 − 26.18 = 0.04 g`

Range gives us a simple comparison for these equally sized sets. It uses only the two extremes; a fuller analysis often uses standard deviation, which accounts for every reading. The [international definition of measurement precision](https://jcgm.bipm.org/vim/en/2.15.html) names standard deviation among the usual measures of spread. Neither measure tells you how close the readings are to the reference.

### A and B repeat well, but B is shifted

A and B have the same spread and the same pattern around their respective means. Both show much better precision in these samples than C and D.

Every A reading is within 0.02 g of the reference. Every B reading is between 1.18 and 1.22 g above it. A's individual readings are therefore more accurate than B's in this comparison.

B illustrates **precise but not accurate**: tightly grouped readings that all miss in the same direction. That pattern gives a reason to investigate a systematic offset, though four numbers alone don't establish its cause or size.

There is no universal rule that “within 0.02 g” means accurate enough. Whether an error is acceptable depends on the task. Here, the numbers support a comparison between sets, without supplying a pass mark.

### C's average hides the scatter

For C, `(24.00 + 24.50 + 25.50 + 26.00)/4 = 25.00 g`. Its differences from the reference are −1.00, −0.50, +0.50, and +1.00 g. They cancel in the mean, even though none is zero. Its range is 50 times A's: `2.00/0.04 = 50`.

You might see this pattern labeled “accurate but not precise” on a classroom diagram. Be specific about what is close: **C's sample mean matches the reference; its individual readings are less accurate than A's and much more scattered.**

The formal terminology helps here. [Measurement accuracy](https://jcgm.bipm.org/vim/en/2.13.html) and [measurement trueness](https://jcgm.bipm.org/vim/en/2.14.html) are distinct. Trueness concerns where the average over indefinitely many repetitions would lie relative to the reference. These four readings don't establish that long-run average. Their matching sample mean is a fact about this sample.

D has C's spread, shifted upward by 1.20 g. Its mean is now 26.20 g, the same as B's, despite a much larger range. One D reading, 25.20 g, is actually closer to the reference than any B reading. An individual reading can be relatively accurate even within a scattered set.

## Six accuracy and precision practice problems

Try these before reading the answers. For each conclusion, name the comparison that supports it. Assume stable objects and unchanged measurement conditions within each set; treat supplied references as exact for these exercises.

1. A 10.00 cm reference is measured as 10.78, 10.80, and 10.82 cm. Another set gives 9.99, 10.00, and 10.01 cm. Which set has the smaller spread? Which readings are closer to the reference?
2. A reference is 8.00 g. Measurements are 7.40, 7.80, 8.20, and 8.60 g. Calculate the mean and range. What does the mean leave out?
3. Measurements of an unknown mass are 14.21, 14.22, and 14.23 g. What can you say about their agreement and their accuracy?
4. A single reading is 50.01 mL against a 50.00 mL reference. What can you calculate? Can you assess precision across repeated measurements?
5. Using the main table, someone says B and D are equally precise because both average to 26.20 g. Correct the reasoning.
6. An instrument has a known, constant +0.30 g offset. Subtract 0.30 g from each reading: 12.29, 12.30, and 12.31 g. With a 12.00 g reference, what changes about closeness and spread?

### Worked answers

1. The ranges are `10.82 − 10.78 = 0.04 cm` and `10.01 − 9.99 = 0.02 cm`. The second set has the smaller spread. Its readings are also closer to the reference: at most 0.01 cm away, compared with 0.78–0.82 cm for the first set.
2. The mean is `32.00/4 = 8.00 g`; the range is `8.60 − 7.40 = 1.20 g`. Individual readings differ from the reference by 0.20 or 0.60 g. The mean hides those differences because the positive and negative errors cancel.
3. The readings span 0.02 g. That describes their agreement in this sample. Without a reference value, you can't assess their accuracy; a narrow cluster could still be displaced.
4. The reading is 0.01 mL above the reference. One reading supplies no spread across repeats, so it cannot establish precision across repeated measurements.
5. Means describe location. B's range is 0.04 g and D's is 2.00 g, showing much greater spread in D. Equal means don't imply equal precision.
6. The corrected readings are 11.99, 12.00, and 12.01 g. Each is closer to the reference. The range remains 0.02 g: subtracting the same constant from every reading leaves their spread unchanged. The stated known offset justifies this correction; wanting the mean to match wouldn't be enough.

## Make cards for the mistakes you actually made

A useful review card preserves enough context to answer without this article. Choose the questions you missed rather than memorizing the table letters. The same principle applies when [making better flashcards](/blog/how-to-make-better-flashcards/).

| Front | Back |
| --- | --- |
| Repeated measurements agree closely. What else is needed to assess their accuracy? | A suitable reference value to compare them with. Agreement alone doesn't establish accuracy. |
| Measurements of an 8.00 g reference are 7.40, 7.80, 8.20, and 8.60 g. What does their 8.00 g mean hide? | A 1.20 g range; individual readings miss by 0.20 or 0.60 g. Opposite differences cancel in the mean. |
| Can one reading of 50.01 mL against a 50.00 mL reference establish precision across repeats? | No. Its difference from the reference is +0.01 mL, but assessing spread requires repeated measurements. |
| What happens to the range when the same constant is subtracted from every reading? | It stays unchanged because the largest and smallest values shift equally. |
| Does a sample mean matching the reference prove high trueness? | No. One finite sample doesn't establish where the average over indefinitely many repetitions would lie. |

When you return to a numerical problem, write the reference beside the readings. Check the individual differences and the spread before trusting the average.
