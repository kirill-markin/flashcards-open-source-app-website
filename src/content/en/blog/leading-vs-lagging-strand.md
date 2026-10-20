---
title: "Leading vs Lagging Strand: Identify the Fork and Practice"
description: "Identify leading and lagging DNA strands from fork direction and 5′/3′ ends, then try original replication questions with explained answers and repair cards."
date: "2026-10-12"
image: "/blog/leading-vs-lagging-strand.png"
keywords:
  - "leading vs lagging strand"
  - "identify leading and lagging strands"
  - "replication fork direction"
  - "Okazaki fragments"
  - "leading and lagging strand practice"
---

A parental DNA strand drawn **3′ on the left and 5′ on the right** supplies the leading daughter at a right-moving replication fork. At a left-moving fork, that same parental orientation supplies the lagging daughter. The top line on the page hasn't changed. The fork direction has.

That's the decision to practice in leading vs lagging strand questions. **Both new strands grow 5′→3′.** The difference is whether their nucleotide extension runs with the advancing fork or occurs in separate pieces away from it. Work through the two fork examples, then cover the answers and try the original questions below.

![A sailmaker positions short linen reinforcement pieces beside a continuous strip on a worn canvas sail](/blog/leading-vs-lagging-strand.png)

## Start with the daughter strand

The **parental strands** are the existing DNA strands that serve as templates. The **daughter strands** are the new complementary strands being built. Leading and lagging describe the daughters at a particular replication fork. A worksheet may also call a parent the “leading-strand template,” meaning the parent used to make that leading daughter.

DNA polymerase adds nucleotides to a growing strand's **3′ end**. The daughter therefore grows **5′→3′**, while the template is read **3′→5′**. The aligned template and daughter have opposite orientations: they're *antiparallel*. [OpenStax's replication chapter](https://openstax.org/books/biology-2e/pages/14-4-dna-replication-in-prokaryotes) explains these directional constraints.

| Feature at one advancing fork | Leading daughter | Lagging daughter |
| --- | --- | --- |
| Direction of nucleotide extension | 5′→3′ | 5′→3′ for every fragment |
| Extension relative to fork movement in a flat diagram | Toward the advancing fork | Away from the advancing fork |
| Usual introductory model | Continuous extension after initiation | Repeated initiation of short Okazaki fragments |
| Primers | Requires a primer to start | Requires a new primer for each fragment |

These are conventional introductory replication diagrams. Their arrows show nucleotide extension along an unlooped drawing. A lagging template can loop, allowing its polymerase to advance alongside the leading-strand machinery. [Researchers have directly observed replication loops](https://www.nature.com/articles/nature07512) in a bacteriophage replication system. Use the flat arrows to track where nucleotides are added along the strand, rather than to trace the proteins' physical movement.

## Use the fork arrow before choosing a label

On a diagram, identify the boundary where parental DNA is opening: the **replication fork**. Then use its stated movement direction and the parental 5′/3′ labels.

1. Mark which lines are parental templates and which are new daughters.
2. Follow the fork's movement along each parental template. One runs **3′→5′ in that direction**.
3. Its complementary daughter can extend **5′→3′ with the fork**. Label that daughter **leading**.
4. On the other template, mark short daughters growing **5′→3′ away from the fork**. Those are the lagging strand's **Okazaki fragments**.

Finish by locating each growing **3′ end**. A daughter arrow that extends from 3′ toward 5′ is a mistake, whichever label you've assigned.

If you're given only two antiparallel parental lines and no fork direction or equivalent information, the leading/lagging assignment is underdetermined. “Top is leading” can't supply the missing information.

## The same parents, two different forks

The following schematics flatten the open region behind one fork. Parental end labels indicate polarity across the displayed window; they don't mean that the chromosome ends at the fork. Dashes omit bases, and daughter arrows mark extension toward their **3′ ends**. Each line is labeled independently; lengths and spacing aren't to scale. Primer positions are omitted.

### A fork moving right

The fork is at the right edge of this open region. Unopened parental duplex lies farther right.

```text
Fork at right edge; moves →

Top parent: 3′────────5′
Top daughter: 5′──────→3′ (leading)

Bottom parent: 5′────────3′
Each bottom fragment: 3′←──5′ (lagging)
```

Following the fork rightward, the top parent runs **3′→5′**. Its daughter extends rightward, **5′→3′**, with its growing 3′ end near the fork. That's the leading daughter.

The bottom parent runs **5′→3′ rightward**. A new daughter fragment starts near the fork and extends leftward, from its 5′ end toward a growing 3′ end farther into the open region. Each fragment still grows **5′→3′**. As the fork exposes more template on the right, another fragment can start there.

### A fork moving left

Keep both parents' orientations. Now the fork is at the left edge, with unopened duplex farther left.

```text
Fork at left edge; moves ←

Top parent: 3′────────5′
Each top fragment: 5′──→3′ (lagging)

Bottom parent: 5′────────3′
Bottom daughter: 3′←──────5′ (leading)
```

Following the fork leftward, the bottom parent runs **3′→5′**. The bottom daughter can extend leftward with it and is leading. The top daughter's fragments extend rightward and are lagging.

Changing the fork direction changed the roles. Neither parent changed its polarity, and neither daughter changed the chemical direction of DNA synthesis.

## Primers start strands; ligase seals the joins

DNA polymerase needs an existing **3′-OH** to extend. In the usual cellular replication model, primase makes a short RNA primer that provides this starting end. Both daughters need priming: continuous leading synthesis needs initiation, while each new Okazaki fragment needs its own start. The primer sits at the **5′ portion** of the new strand or fragment; polymerase extends from its 3′ end. [MIT's introductory biology practice notes](https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/1e8ae573cb4f3035af555f9c200af5dd_MIT7_01SCF11_2.4prob.pdf) state the primer requirement for DNA polymerases.

For a lagging fragment, separate three jobs:

1. A primer supplies the starting end, and DNA polymerase extends the fragment.
2. RNA primer material is removed and replaced with DNA.
3. **DNA ligase seals the remaining nick** in the sugar-phosphate backbone, joining an adjacent 3′-OH and 5′ phosphate with a phosphodiester bond.

A **nick** is a missing backbone bond with the adjacent nucleotides already present. A **gap** has missing nucleotides. Ligase seals the nick; it doesn't fill a stretch of missing bases or build a whole Okazaki fragment. [Molecular Biology of the Cell describes primer replacement and nick sealing](https://www.ncbi.nlm.nih.gov/books/NBK26850/).

The enzymes that remove and replace primers differ between organisms. You don't need their individual names to solve these orientation exercises.

## A replication bubble needs four assignments

In a bidirectional replication bubble, two forks move away from the origin. Each fork has a leading and a lagging daughter. Apply the rule independently at the two boundaries.

```text
Top parent: 3′────────────────5′
Left fork ← | origin | → Right fork
Bottom parent: 5′─────────────3′
```

For these parents, the complete ledger is:

| Parent being copied | Daughter at left fork, moving ← | Daughter at right fork, moving → |
| --- | --- | --- |
| Top: 3′ at left, 5′ at right | Lagging; fragments extend → | Leading; extends → |
| Bottom: 5′ at left, 3′ at right | Leading; extends ← | Lagging; fragments extend ← |

Along the top parent, both sets of new DNA extend rightward. That direction runs away from the left fork but with the right fork. A parent therefore isn't permanently “the leading template” across the whole bubble. [MIT's DNA replication lesson](https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/pages/molecular-biology/dna-replication/) teaches identification at the two forks of an origin.

These replication roles also differ from **coding and template strands in transcription**, which describe the production of RNA for a particular gene. Use the [coding vs template strand exercises](/blog/coding-vs-template-strand/) when a question asks for RNA rather than new DNA.

## Seven leading and lagging strand practice questions

Use the introductory model above. Unless a question specifies a bubble, consider one fork. Write the daughter role, its extension arrow, and the reason. Try the full set before reading the answers.

1. A fork moves **right**. Parent A is **3′ at left, 5′ at right**; parent B is **5′ at left, 3′ at right**. Which daughter is leading? Where is its growing 3′ end relative to the fork?
2. A fork moves **left**. Parent A is **5′ at left, 3′ at right**; parent B is **3′ at left, 5′ at right**. Assign both daughter roles and extension directions.
3. A diagram shows only parental DNA: top **5′ at left, 3′ at right**, bottom **3′ at left, 5′ at right**. No fork arrow, daughter fragments, or other movement information is given. Can you uniquely identify the leading daughter? Give the two possibilities.
4. A bubble has outward-moving left and right forks. The top parent is **3′ at left, 5′ at right**; the bottom parent is **5′ at left, 3′ at right**. Assign all four daughter roles and extension directions. Explain why one parent supplies different daughter roles at the two forks.
5. A learner writes: “The fork moves right, so the leading daughter grows 5′→3′ rightward and the lagging daughter grows 3′→5′ leftward.” Which part is wrong? Write the correct end labels for one left-growing lagging fragment.
6. A note says: “The leading strand needs no primer because it is continuous. The lagging strand needs one primer for the entire fork.” Correct both claims and explain what a primer supplies.
7. RNA primers in a copied region have been removed and replaced with DNA. All nucleotides are present, but backbone bonds are missing between adjacent fragments. What remains to be done, and what would change if nucleotides were still missing?

## Answers with the direction checks

### 1. Parent A supplies the leading daughter

Parent A runs **3′→5′ rightward**, matching the direction in which the fork exposes template. Its daughter is **5′ at left, 3′ at right** and extends **→**, with its growing 3′ end near the fork. Parent B supplies the lagging daughter; its fragments extend **←**, with **3′ at left and 5′ at right**.

### 2. Parent A supplies the leading daughter again

Here parent A has the opposite printed orientation from question 1. Moving left along **5′ at left, 3′ at right** means traversing the template **3′→5′**. Its leading daughter extends **←**, with **3′ at left and 5′ at right**. Parent B supplies lagging fragments extending **→**, each with **5′ at left and 3′ at right**. The fork and the parent labels both matter.

### 3. The assignment is underdetermined

For a **right-moving fork**, the bottom parent supplies the leading daughter, extending **→**. For a **left-moving fork**, the top parent supplies the leading daughter, extending **←**. Both possibilities fit the given antiparallel parents. You need another piece of information to choose one.

### 4. Each parent supplies one leading and one lagging daughter

On the **top parent**, the left fork makes lagging fragments extending **→**, while the right fork makes a leading daughter extending **→**. Each growing segment has **5′ at left and 3′ at right**.

On the **bottom parent**, the left fork makes a leading daughter extending **←**, while the right fork makes lagging fragments extending **←**. Each growing segment has **3′ at left and 5′ at right**.

The top parent runs **3′→5′ rightward**, so its new DNA extends rightward at both forks. That extension runs away from the left fork and with the right fork. The bottom parent gives the reverse case. The growing end is always 3′; leading or lagging depends on how extension relates to that fork's movement.

### 5. Leftward is correct; 3′→5′ synthesis is wrong

The lagging fragment extends leftward **5′→3′**. Draw it as **3′←────5′**, with the 5′ end near the right-moving fork and the growing 3′ end farther left. Left/right are page directions; 5′/3′ specify strand polarity. Leftward extension doesn't reverse the chemistry of synthesis.

### 6. Both daughters require priming

Continuous leading synthesis still needs a primer to initiate it. Each Okazaki fragment needs a new primer, so the lagging strand repeatedly needs primers as the fork advances. The primer supplies a paired starting strand with an available **3′-OH** that DNA polymerase can extend. “Continuous” describes the leading strand's usual extension pattern after initiation.

### 7. Ligase must seal the nicks

DNA ligase forms the missing phosphodiester bonds between adjacent ends. The stated region has **nicks**, since no nucleotides are missing. If there were a **gap**, DNA synthesis would first need to replace the missing nucleotides; a ligase-only answer would leave that problem unresolved.

## Turn a specific mistake into a repair card

Choose the card that targets the step you missed. Keep the fork direction and parental labels on the question side, so you can solve it without remembering the original diagram. You can use paper or put the question on the front and explanation on the back of a text card in [Nibomo](/docs/getting-started/).

| Front | Back |
| --- | --- |
| A fork moves left. A parental template has 3′ at left and 5′ at right. Is its daughter leading or lagging, and which way does new DNA extend? | Lagging; fragments extend rightward, 5′→3′. The template runs 3′→5′ rightward, opposite the fork's leftward movement. |
| A lagging fragment grows leftward behind a right-moving fork. Which end is growing, and what are its left/right end labels? | Its 3′ end grows. Draw 3′ at left and 5′ at right: 3′←────5′. Both leading and lagging DNA are synthesized 5′→3′. |
| Why does a continuous leading daughter still require a primer? | DNA polymerase needs an existing 3′-OH to extend. A primer provides the starting end; continuous extension follows initiation. |
| After RNA replacement, adjacent DNA fragments have all their nucleotides but a missing backbone bond. Is this a nick or a gap, and what seals it? | A nick; DNA ligase seals it with a phosphodiester bond. A gap would have missing nucleotides that must be replaced first. |

The [practice-questions-to-flashcards guide](/blog/how-to-turn-practice-questions-into-flashcards/) explains how to preserve the reason behind a missed answer. Keep a full bubble drawing as a separate paper exercise; a card that asks only “What is the lagging strand?” won't rehearse the four assignments.

### One fresh question after the cards

A diagram is rotated: the fork moves **downward**. Parent A has **3′ at the top and 5′ at the bottom**. Parent B has **5′ at the top and 3′ at the bottom**. Which parent supplies the leading daughter, and where is that daughter's growing 3′ end?

**Answer:** Parent A supplies the leading daughter. Moving downward along A reads the template **3′→5′**, so its daughter extends downward **5′→3′**, with the growing 3′ end at the bottom near the fork. Parent B supplies lagging fragments extending upward, with growing 3′ ends at their upper edges. Rotating the page changes screen directions; the fork-and-polarity rule still works.
