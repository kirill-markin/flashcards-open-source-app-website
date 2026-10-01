---
title: "Standard Deviation vs Standard Error: Worked Examples and Practice"
description: "Compare spread in individual values with uncertainty in a sample mean. Work through SD and SEM calculations, sample-size changes, and practice answers."
date: "2026-10-02"
image: "/blog/standard-deviation-vs-standard-error.png"
keywords:
  - "standard deviation vs standard error"
  - "standard error of the mean"
  - "SD vs SEM"
  - "standard error practice questions"
  - "sample size and standard error"
---

A sample of 100 journey times can have a standard deviation of 12 minutes and an estimated standard error of just 1.2 minutes. Both numbers can be correct. The first describes the spread of individual times; the second estimates how much the sample mean would vary across repeated samples under the same sampling model.

**Standard deviation describes variation in observations. Standard error describes variation in a statistic across samples.** For the arithmetic mean, that statistic is the sample mean, and its standard error is called the **standard error of the mean**, or **SEM**.

![A photographer compares a smooth long-exposure print of a fountain with its splashing water](/blog/standard-deviation-vs-standard-error.png)

The datasets and study situations below are invented teaching examples.

## First decide what is varying

| Your question | Relevant quantity |
| --- | --- |
| How spread out are the individual times in this sample? | Sample standard deviation, **s** |
| How spread out are individual times in the population? | Population standard deviation, **σ** |
| How much would the sample mean vary across samples of the same size? | Standard error of the mean |

A *sampling distribution* is the distribution of a statistic across possible samples taken using the same procedure. Its standard deviation is its standard error. [Penn State's sampling-distribution lesson](https://online.stat.psu.edu/stat200/Lesson04) gives this definition.

The word “error” can be misleading. SEM doesn't tell you the actual difference between your particular sample mean and the population mean. It doesn't measure a faulty stopwatch or guarantee an accurate estimate.

## See every possible sample

Imagine a population containing just two times: **2 minutes and 6 minutes**. Each is equally likely on each draw. Its mean is 4 minutes, and its population standard deviation is:

**σ = √[((2 − 4)² + (6 − 4)²) / 2] = √4 = 2 minutes.**

Now draw two values independently, **with replacement**. Returning the first value makes both values available on the next draw. Here is every possible ordered sample:

| First draw | Second draw | Sample mean | Probability |
| --- | --- | --- | --- |
| 2 | 2 | 2 | 1/4 |
| 2 | 6 | 4 | 1/4 |
| 6 | 2 | 4 | 1/4 |
| 6 | 6 | 6 | 1/4 |

The four equally likely ordered samples produce means of **2, 4, 4, 6**. Their mean is still 4, but their standard deviation is:

**√[((2 − 4)² + (4 − 4)² + (4 − 4)² + (6 − 4)²) / 4] = √2 ≈ 1.41 minutes.**

That is the exact SEM for this sampling procedure. The denominator is **4** because these are all four equally weighted outcomes. If we had instead simulated a sample of four means, their sample SD would use a denominator of 3.

The original times remain 2 or 6 minutes. Averaging changes the distribution we're looking at: half of the possible pairs have a mean of 4. It doesn't make individual times more alike.

Here **n = 2**: each mean averages two observations. The number of possible pairs doesn't determine n.

## The two SEM formulas mean different things

For independent observations drawn from the same distribution, with finite population variance:

**SE of the mean = σ / √n.**

Here **σ** is the population SD and **n** is the number of observations averaged. [OpenStax's lesson on sample means](https://openstax.org/books/introductory-statistics-2e/pages/7-1-the-central-limit-theorem-for-sample-means-averages) distinguishes that sample size from the number of repeated samples.

Usually σ is unknown. We substitute the sample SD, s:

**Estimated SEM = s / √n.**

[Penn State's one-sample inference lesson](https://online.stat.psu.edu/stat200/Lesson08) uses this estimate. A reported “SE Mean” or “SEM” often refers to this estimate; check which SD the calculation used.

The independence and common-distribution assumptions matter. [Penn State's probability lesson](https://online.stat.psu.edu/stat414/Lesson24) derives the variance of the sample mean as σ²/n for independent, identically distributed observations. Normal observations aren't required for that variance relationship. A normal approximation for probabilities or an inference procedure needs its own conditions.

Other statistics, such as a median or regression coefficient, have their own SE calculations. **s / √n isn't a universal standard-error formula.**

## Calculate SD and estimated SEM from raw data

For a **different hypothetical population**, suppose three independent observations drawn from its time distribution are **4, 6, and 8 minutes**. The population SD is unknown. This tiny sample demonstrates arithmetic; its size alone doesn't establish that a confidence interval would be reliable.

The sample mean, written **x̄**, is:

**x̄ = (4 + 6 + 8) / 3 = 6 minutes.**

| Time, x | Deviation, x − x̄ | Squared deviation |
| --- | --- | --- |
| 4 minutes | −2 minutes | 4 minutes² |
| 6 minutes | 0 minutes | 0 minutes² |
| 8 minutes | 2 minutes | 4 minutes² |
| Total | | 8 minutes² |

For sample SD, divide the sum of squared deviations by **n − 1**, then take the square root:

**s² = 8 / (3 − 1) = 4 minutes².**

**s = √4 = 2 minutes.**

[Penn State's SD formulas](https://online.stat.psu.edu/stat200/Lesson02) distinguish the sample denominator n − 1 from the population denominator N. Variance has squared units. Both SD and SEM use the original units: minutes here.

Now estimate the SEM:

**Estimated SEM = 2 / √3 ≈ 1.15 minutes.**

A clear report would say: “The sample mean was 6 minutes, the sample SD was 2 minutes, and the estimated SEM was 1.15 minutes, with n = 3.” An unexplained “6 ± 1.15” leaves readers guessing what the second number represents.

## More observations reduce SEM under the same model

Suppose three samples from one population each contain independent observations and have an observed SD of **12 minutes**. Holding s fixed makes the sample-size effect easy to see:

| Sample size, n | Observed SD, s | Estimated SEM, s / √n |
| --- | --- | --- |
| 25 | 12 minutes | 2.4 minutes |
| 100 | 12 minutes | 1.2 minutes |
| 400 | 12 minutes | 0.6 minutes |

At fixed SD, multiplying n by four halves the SEM. Doubling n divides it by √2, about 1.41.

In real samples, s changes too, so estimated SEM needn't fall smoothly whenever observations are added. With a fixed population σ and the stated sampling model, the theoretical SEM follows σ / √n exactly.

A smaller SEM concerns the mean's sampling variability. It doesn't show that individual times became less variable or that a biased recruitment method improved. The [random sampling vs random assignment guide](/blog/random-sampling-vs-random-assignment/) helps you separate a calculation from what the study design supports.

## Check the design before using the shortcut

Measurements repeated on the same person can't automatically count as independent people. [Penn State's repeated-measures lesson](https://online.stat.psu.edu/stat502/Lesson11) explains why those measurements require a model that handles their dependence. Clustered observations need an analysis that accounts for the sampling design too; simply putting the number of rows into s / √n can misstate uncertainty.

If you sample without replacement from a finite population and take an appreciable fraction of it, the SEM needs a finite-population adjustment. [Penn State's survey-sampling lesson](https://online.stat.psu.edu/stat506/Lesson01) shows that correction.

Finally, **mean ± SEM isn't automatically a 95% confidence interval**. A one-sample t interval uses **x̄ ± t* × s / √n**, with t* chosen for the confidence level and n − 1 degrees of freedom. It has exact coverage for independent observations from the same normal distribution, as the [t-distribution derivation](https://online.stat.psu.edu/stat414/Lesson26) shows. Approximating coverage for other populations needs a separate check; three observations alone don't justify it.

## Seven standard error practice questions

Try the questions before reading the answers. Show the units and give one sentence explaining what your result describes. Unless a question says otherwise, assume independent observations from the same finite-variance distribution.

### 1. Choose the spread

A sample of 64 journey times has s = 16 minutes. You want to describe how much the individual journeys differ. Which quantity fits? What is the estimated SEM?

### 2. Start with raw values

A sample contains 2, 5, and 8 minutes. Calculate the mean, sample variance, sample SD, and estimated SEM.

### 3. Change only the sample size

A sample of n = 36 has s = 9 minutes. A new sample has n = 144 and the same s. Calculate both estimated SEMs. What can you say about the individual observations' spread?

### 4. Use a known population SD

For a population with σ = 10 grams, take independent samples of n = 25. What is the theoretical SE of the sample mean? Is it a measured difference between one sample mean and the population mean?

### 5. Find the missing information

A report gives a sample mean of 18 minutes and n = 81. Can you calculate its estimated SEM?

### 6. Count independent units

Ten people each complete five timed trials. A spreadsheet has 50 rows. Is the row-level SD divided by √50 automatically a valid SEM for estimating mean performance across people?

### 7. Interpret “±”

A report says “mean = 20 minutes, SEM = 1 minute.” Can you label 19–21 minutes a 95% confidence interval from this information?

## Answers and the reasoning behind them

1. Use the **SD of 16 minutes** to describe individual journey spread. The estimated SEM is **16 / √64 = 2 minutes**, which concerns the sample mean.

2. The mean is **5 minutes**. Squared deviations sum to **9 + 0 + 9 = 18 minutes²**. Sample variance is **18 / (3 − 1) = 9 minutes²**, sample SD is **3 minutes**, and estimated SEM is **3 / √3 ≈ 1.73 minutes**. Use n − 1 for the sample variance, then take the square root before calculating SEM.

3. The estimated SEMs are **9 / √36 = 1.5 minutes** and **9 / √144 = 0.75 minutes**. The sample size quadrupled and the estimated SEM halved. Both samples still have an SD of 9 minutes; the question gives no reduction in individual spread.

4. The theoretical SE is **10 / √25 = 2 grams**. It describes the spread of possible sample means. The realized error of one sample mean is **x̄ − μ**; calculating it requires that mean and the population mean.

5. **No.** You need s to calculate s / √81, or σ to calculate the theoretical SE. The mean and sample size don't determine the spread. Samples can share those two summaries and have very different SDs.

6. **No.** Trials from the same person may be dependent. The analysis must account for people and repeated trials. Simply replacing √50 with √10 doesn't fix the calculation either: the SD and the method must match the quantity being estimated.

7. **No.** The report identifies a one-SEM range. A 95% confidence interval needs an appropriate procedure, its conditions, and its multiplier.

## Save the mistake as a small card

Keep calculations in your practice work. Make a card when the error reveals a reusable distinction. These prompts each target one specific mix-up:

| Front | Back |
| --- | --- |
| Which describes variation among individual observations: SD or SEM? | SD. SEM describes sampling variation of the mean. |
| For independent observations from one finite-variance distribution, how do you estimate SEM when σ is unknown? | Use s / √n, where s is sample SD and n is the number of observations averaged. |
| At fixed SD, how must n change to halve SEM? | Multiply n by four. |
| In sampling-distribution practice, does n count observations in each mean or repeated samples? | Observations in each mean. |
| Does mean ± SEM by itself identify a 95% confidence interval? | No. A confidence interval needs an appropriate procedure and multiplier. |

The [flashcard-writing guide](/blog/how-to-make-better-flashcards/) explains how to keep each prompt self-contained. If you're studying the wider course, the [AP Statistics study guide](/blog/ap-statistics-flashcards/) connects cards to full problem practice.

After reviewing a missed distinction, solve a new question with different numbers and explain what varies. Getting the arithmetic right is only part of the answer.
