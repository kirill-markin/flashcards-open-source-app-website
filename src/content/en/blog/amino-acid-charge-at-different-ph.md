---
title: "Amino Acid Charge at Different pH: Worked Practice"
description: "Calculate amino acid net charge from pH and pKa, distinguish dominant forms from average charge, and practice choosing the pKa pair for an isoelectric point."
date: "2026-10-09"
image: "/blog/amino-acid-charge-at-different-ph.png"
keywords:
  - "amino acid charge at different pH"
  - "amino acid net charge practice"
  - "pH vs pKa amino acids"
  - "isoelectric point practice"
  - "zwitterion charge"
---

Free alanine at pH 5.4 is predominantly a molecule with an NH₃⁺ group and a COO⁻ group. Its net charge is zero, even though two parts of it carry charges. Counting only the side chain would miss both.

To calculate amino acid charge at different pH values, write a separate entry for every ionizable group, then add the charges. First decide what the question asks: the integer charge of the predominant form, the solution's average charge, or the pH where that average is zero. Those can give different answers for the same amino acid.

![A woman at a covered market holds a brass weight beside a level balance scale with a linen sack in one pan and three weights in the other](/blog/amino-acid-charge-at-different-ph.png)

## Start with the groups, then add their charges

These examples concern **free amino acids in water**. Each has a free alpha-carboxyl group and a free alpha-amino group. Aspartic acid also has a side-chain carboxyl group; lysine has a side-chain amino group. Alanine's methyl side chain contributes no charge here.

For each ionizable group, compare the solution's pH with the pKa for losing its proton:

| Comparison | Form favored | Carboxyl group | Amino group |
| --- | --- | --- | --- |
| pH below pKa | Protonated | COOH: 0 | NH₃⁺: +1 |
| pH above pKa | Deprotonated | COO⁻: −1 | NH₂: 0 |
| pH equals pKa | Neither member of the relevant acid–base pair is favored | COOH and COO⁻ forms both matter | NH₃⁺ and NH₂ forms both matter |

“Deprotonated” means one fewer proton. It doesn't always mean negatively charged: NH₃⁺ becomes neutral NH₂. The [conjugate acid–base pairs guide](/blog/conjugate-acid-base-pairs/) explains that one-proton relationship.

For a **predominant-form question**, assign the favored integer charge to each group and sum the entries. Near a pKa, the less abundant form can still be a substantial part of the solution. Don't describe the favored form as 100% of the molecules. At pH = pKa, keep both neighboring protonation states; the population-average calculation below handles that case. A [Carnegie Mellon biochemistry solution key](https://www.andrew.cmu.edu/course/03-231/psetF05/PSET02/PS02ans.pdf) illustrates both charge summation and calculations of protonated fractions.

Use the problem's supplied pKa values. The following constants are from [OpenStax's Table 26.1](https://openstax.org/books/organic-chemistry/pages/26-1-structures-of-amino-acids); every calculation on this page uses this set.

| Free amino acid | Alpha-COOH pKa | Alpha-NH₃⁺ pKa | Side-chain pKa |
| --- | --- | --- | --- |
| Alanine | 2.34 | 9.69 | No ionizable side chain in these problems |
| Aspartic acid | 1.88 | 9.60 | 3.65, side-chain COOH |
| Lysine | 2.18 | 8.95 | 10.53, side-chain NH₃⁺ |

These are teaching values for free amino acids, not a universal table for residues inside proteins. Peptide bonds turn the participating backbone amino and carboxyl groups into amides; a peptide charge calculation instead needs its free termini and ionizable side chains. Keep that separate from this worksheet.

## A charge ledger you can copy

At **pH 5.4**, compare that pH with every pKa in the table:

| Amino acid | Alpha-carboxyl entry | Alpha-amino entry | Side-chain entry | Sum for the predominant form |
| --- | --- | --- | --- | --- |
| Alanine | 5.4 > 2.34: COO⁻, −1 | 5.4 < 9.69: NH₃⁺, +1 | CH₃, 0 | −1 + 1 + 0 = **0** |
| Aspartic acid | 5.4 > 1.88: COO⁻, −1 | 5.4 < 9.60: NH₃⁺, +1 | 5.4 > 3.65: COO⁻, −1 | −1 + 1 − 1 = **−1** |
| Lysine | 5.4 > 2.18: COO⁻, −1 | 5.4 < 8.95: NH₃⁺, +1 | 5.4 < 10.53: NH₃⁺, +1 | −1 + 1 + 1 = **+1** |

At **pH 11.7**, all the listed groups favor their deprotonated forms:

| Amino acid | Alpha-carboxyl charge | Alpha-amino charge | Side-chain charge | Predominant net charge |
| --- | --- | --- | --- | --- |
| Alanine | −1 | 0 | 0 | **−1** |
| Aspartic acid | −1 | 0 | −1 | **−2** |
| Lysine | −1 | 0 | 0 | **−1** |

Lysine's “basic amino acid” label doesn't promise a +1 whole-molecule charge at every pH. Its charge depends on which of its two amino groups still holds a proton.

Copy this worksheet for a new pH. Include the side-chain row even when its contribution is zero, so you have to check it.

**Free amino acid:** ______  **pH:** ______  **Asked for: predominant charge / mean charge / pI**

| Group | Supplied pKa | pH below, equal to, or above pKa? | Favored form | Charge entry |
| --- | --- | --- | --- | --- |
| Alpha-carboxyl | ______ | ______ | ______ | ______ |
| Alpha-amino | ______ | ______ | ______ | ______ |
| Side chain, including any ionizable group | ______ or none | ______ or not applicable | ______ | ______ |

**Sum for the predominant form:** ______

Fill the rows before adding anything. If pH equals a pKa, record both forms and their charges instead of forcing a single entry. If the question asks for a mean, the integer sum alone won't answer it: calculate the populations and weight their whole-molecule charges. For pI, use the charge ladder in the isoelectric-point section below.

If you need help identifying an R group, use the [amino acid side-chain chart](/blog/amino-acid-side-chain-chart/) first; its charge column describes side chains around pH 7.

### Net zero still leaves internal charges

Alanine's dominant form at pH 5.4 is a **zwitterion**: the +1 amino charge and −1 carboxyl charge cancel. Drawing NH₂ and COOH would also give an arithmetic sum of zero, but would show the wrong predominant form at this pH. [Purdue's zwitterion explanation](https://chemed.chem.purdue.edu/genchem/topicreview/bp/1biochem/amino2.html) describes this distinction between internal charges and net charge.

## Near a pKa, calculate a population average

A molecule in one of these protonation states has an integer net charge. A solution can contain several states, so its **mean charge per molecule** can be fractional.

For two neighboring protonation states, the Henderson–Hasselbalch relation gives their ratio:

```text
ratio r = [state with one fewer proton] / [state with one more proton]
        = 10^(pH − pKa)

Within this pair:
fraction with one fewer proton = r / (1 + r)
fraction with one more proton  = 1 / (1 + r)
```

The ratio follows the [Henderson–Hasselbalch treatment in OpenStax](https://openstax.org/books/organic-chemistry/pages/26-2-amino-acids-and-the-henderson-hasselbalch-equation-isoelectric-points). These tabulated amino-acid pKas describe successive proton losses from the whole molecule. Their group labels identify the usual structures used in introductory problems; they aren't a set of independent site constants to plug into an exact average.

The fractions above describe the whole solution approximately only when other protonation states are negligible. Use the net charge of each whole-molecule state in the weighted sum. For an amino-group transition, losing H⁺ changes that group's contribution from +1 to 0, while the molecule's other charges still count.

Consider **alanine at pH 10.19**. Its carboxyl group is overwhelmingly COO⁻. The relevant pair is therefore the net-zero zwitterion, with NH₃⁺, and the net−1 form, with NH₂:

```text
r = 10^(10.19 − 9.69) = 10^0.50 ≈ 3.16
fraction with net charge −1 = 3.16 / (1 + 3.16) ≈ 0.760
fraction with net charge  0 = 1 / (1 + 3.16) ≈ 0.240

mean charge ≈ (−1 × 0.760) + (0 × 0.240) = −0.760
```

The **predominant net charge is −1**. The **mean charge is approximately −0.760**, in units of the elementary charge. These answer different questions. No individual alanine molecule in this model carries a charge of −0.760.

At **pH 9.69**, the net-zero and net−1 states are equally abundant because their ratio is `10^0 = 1`. Each makes up approximately half the solution, giving a mean of approximately −0.5. Neither member of this pair predominates. The net+1 state is negligible here because its transition has pKa 2.34.

That is what **pH = pKa** tells you: equal populations within the relevant pair. It doesn't tell you that the molecule is neutral or that the mean charge is zero. If other protonation states have appreciable populations, include them when normalizing the fractions and calculating the mean.

## Find pI by locating the zero-charge state

The **isoelectric point**, or **pI**, is the pH where the population's mean net charge is zero. Positive and negative contributions balance there; it doesn't require every molecule to have zero charge. A broad pH interval can favor a net-zero form, but that whole interval isn't the pI.

To choose the pKa pair, start with the fully protonated form and remove one proton at a time, in order of increasing pKa. Each removal lowers the net charge by one:

| Amino acid | Net-charge ladder as pH rises | Transition into net zero | Transition out of net zero |
| --- | --- | --- | --- |
| Alanine | +1 → 0 → −1 | Alpha-COOH: 2.34 | Alpha-NH₃⁺: 9.69 |
| Aspartic acid | +1 → 0 → −1 → −2 | Alpha-COOH: 1.88 | Side-chain COOH: 3.65 |
| Lysine | +2 → +1 → 0 → −1 | Alpha-NH₃⁺: 8.95 | Side-chain NH₃⁺: 10.53 |

Use the two transitions that **bracket the net-zero state**:

```text
pI ≈ (pKa entering net zero + pKa leaving net zero) / 2
```

This standard free-amino-acid method is described in [OpenStax's isoelectric-point section](https://openstax.org/books/organic-chemistry/pages/26-2-amino-acids-and-the-henderson-hasselbalch-equation-isoelectric-points). With the supplied values:

| Amino acid | Calculation | Result from these pKas |
| --- | --- | --- |
| Alanine | `(2.34 + 9.69) / 2` | 6.015, about **6.02** |
| Aspartic acid | `(1.88 + 3.65) / 2` | 2.765, about **2.77** |
| Lysine | `(8.95 + 10.53) / 2` | **9.74** |

For aspartic acid and lysine, this midpoint is an approximation that neglects the distant fourth charge state. Keep the unrounded results until the final step; a reference's tabulated pI may differ slightly from the arithmetic on its rounded pKas.

Averaging all three lysine pKas would give 7.22. That pH lies in its predominantly +1 region, so it fails the charge-ladder check. Selecting a pair by the neutral state is more reliable than memorizing “always use the backbone” or “always use the side chain.”

## Eight net-charge practice problems

Use only the pKa table above. Unless a question asks for a mean, report the **predominant form's integer net charge**. Write the group entries before checking the answers.

1. At pH 1.3, calculate the charge of free alanine. Which group accounts for the positive charge?
2. At pH 4.8, a learner gives free aspartic acid a charge of zero after counting one COO⁻ and one NH₃⁺. Complete the ledger and correct the answer.
3. For free lysine at pH 9.8, assign a charge to each of its three ionizable groups. Which amino group remains predominantly protonated?
4. At pH 12.1, compare the net charges of free alanine and free aspartic acid. Explain the difference without using their category labels.
5. At pH 2.34, give the two main charge states of alanine and their approximate proportions. Calculate the mean charge. Is this its pI?
6. At pH 1.84, calculate alanine's approximate mean charge using the net+1 and net-zero forms. Also state its predominant charge.
7. Use aspartic acid's charge ladder to choose the pKa pair for its pI. Calculate the result and identify the internal charges in the net-zero form.
8. A learner calculates lysine's pI as `(2.18 + 8.95) / 2 = 5.565`. Identify the charge state between those two transitions, then calculate pI using the correct pair.

### Explained answers

1. **+1:** alpha-COOH contributes 0, alpha-NH₃⁺ contributes +1, and CH₃ contributes 0. The amino group supplies the positive charge. Being below the carboxyl pKa keeps that group mainly neutral; it doesn't make COOH positive.
2. **−1:** alpha-COO⁻ is −1, alpha-NH₃⁺ is +1, and side-chain COO⁻ is −1. The missing entry was the second carboxyl group: `−1 + 1 − 1 = −1`.
3. **0:** alpha-COO⁻ is −1, alpha-NH₂ is 0 because 9.8 > 8.95, and side-chain NH₃⁺ is +1 because 9.8 < 10.53. The side-chain amino group remains predominantly protonated. The sum is `−1 + 0 + 1 = 0`; this integer answer doesn't claim that the mean charge is exactly zero at pH 9.8.
4. **Alanine −1; aspartic acid −2.** Both alpha-amino groups favor neutral NH₂. Alanine has one COO⁻, while aspartic acid has two. The extra negative charge comes from the side-chain carboxylate.
5. **Equal net+1 and net-zero states, each approximately 50% of the solution; mean approximately +0.5.** At the first pKa, the relevant pair differs by loss of the carboxyl proton; both states have NH₃⁺. The net−1 state is negligible, so the weighted sum is approximately `(+1 × 0.5) + (0 × 0.5) = +0.5`. This isn't pI because the mean charge is positive.
6. **Mean approximately +0.760; predominant charge +1.** The ratio of net-zero to net+1 forms is `10^(1.84 − 2.34) = 10^(−0.50) ≈ 0.316`. The positive fraction is `1 / (1 + 0.316) ≈ 0.760`; the zero-charge fraction is about 0.240. Weighting their charges gives `(+1 × 0.760) + (0 × 0.240) = +0.760`. The net−1 population is negligible at this pH.
7. **Use 1.88 and 3.65: pI ≈ 2.765, or 2.77 to two decimal places.** Losing the alpha-carboxyl proton takes the charge from +1 to 0. Losing the side-chain carboxyl proton takes it from 0 to −1. The intervening zwitterion has alpha-COO⁻, alpha-NH₃⁺, and side-chain COOH: `−1 + 1 + 0 = 0`.
8. **The selected interval favors net+1, so it doesn't bracket net zero.** After the 2.18 transition, lysine has one COO⁻ and two NH₃⁺ groups. The 8.95 transition takes it into net zero; the 10.53 transition takes it out. Therefore `pI ≈ (8.95 + 10.53) / 2 = 9.74`.

## Make a card for the step you missed

A useful flashcard asks you to repeat the decision that caused the error. Naming lysine won't fix a habit of forgetting its second amino group.

| Mistake | Card front | Answer to check |
| --- | --- | --- |
| Losing a proton always means becoming negative | What charge change occurs when NH₃⁺ loses H⁺? | +1 → 0; the product is NH₂. |
| Counting only the side chain | Free aspartic acid at pH 4.8: list all charge entries. | Alpha-carboxyl −1, alpha-amino +1, side-chain carboxyl −1; net −1. |
| Calling pH = pKa “neutral” | Alanine at pH 2.34: what are the main charges and approximate mean? | Equal +1 and 0 forms; mean about +0.5. |
| Drawing an uncharged molecule for net zero | Draw the dominant alanine form at pH 5.4. | NH₃⁺ and COO⁻, with a neutral CH₃ side chain. |
| Averaging the wrong pKas | Which lysine transitions bracket net zero? | 8.95 gives +1 → 0; 10.53 gives 0 → −1. |

The [side-chain properties flashcards](/catalog/packages/amino-acid-side-chain-properties-flashcards/) support recognition and side-chain charge around pH 7. For these whole-molecule calculations, make cards with the pH, supplied pKas, and a request for the full ledger. The [chemistry flashcard guide](/blog/how-to-use-flashcards-for-advanced-chemistry/) explains how to combine recall with worked problems, and the [better flashcards guide](/blog/how-to-make-better-flashcards/) helps keep each prompt focused.

After a missed answer, rewrite the ledger once with the omitted or misassigned group visible. On the next review, change the pH and solve it again before looking at the old answer.
