---
title: "SQL EXISTS vs JOIN: Predict Rows Before You Sum"
description: "Compare EXISTS and JOIN with executed SQL results. Trace two matching tables, inflated sums, DISTINCT mistakes, and the COUNT(*) existence trap."
date: "2026-10-29"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6166390a0abedf15e7af02e764afbcd1df2615ced8a515f6c95f4b42c60b4b08.webp"
keywords:
  - "SQL EXISTS vs JOIN"
  - "SQL join duplicate rows"
  - "SUM after JOIN"
  - "EXISTS SELECT COUNT"
  - "SQL semi join"
---

Lina has two passed submissions worth 10 points each. She also has two approval records. Join all three tables and sum the points, and her total becomes 40. Try `SUM(DISTINCT points)`, and it becomes 10. The required total is 20.

Choosing SQL `EXISTS` vs `JOIN` starts with what one row should represent. Use an inner join when you need the matching rows to contribute to the result, such as the submissions whose points you're summing. Use `EXISTS` when a related table only decides whether an outer row qualifies, such as whether its learner has an approval. A single query can need both.

This worksheet uses four fictional learners, including two different people named Lina. Predict the rows first, then compare your answer with the executed results. The complete dataset, queries, and answers are here.

![A caretaker holds one of two red chairs in a dance hall while a wall mirror reflects the same pair](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/6166390a0abedf15e7af02e764afbcd1df2615ced8a515f6c95f4b42c60b4b08.webp)

## Run the small dataset

The requirement changes between exercises. The data stays fixed:

| Learner ID | Name | Submissions | Approvals |
| --- | --- | --- | --- |
| 1 | Lina | Two passed, worth 10 points each | Two |
| 2 | Omar | One passed, worth 20 points | One |
| 3 | Tess | One pending, worth 30 points | One |
| 4 | Lina | One passed, worth 40 points | None |

Learner IDs identify people. Submission IDs identify submissions, even when their point values are equal. Approval IDs identify approval records; multiple approvals per learner are allowed in this example. Approvals apply to the learner, rather than to an individual submission.

Run this complete read-only statement in BigQuery using GoogleSQL. The `WITH` section defines common table expressions, or CTEs, for this statement. It creates no permanent tables.

```sql
WITH learners AS (
  SELECT 1 AS learner_id, 'Lina' AS learner_name UNION ALL
  SELECT 2, 'Omar' UNION ALL
  SELECT 3, 'Tess' UNION ALL
  SELECT 4, 'Lina'
), submissions AS (
  SELECT 101 AS submission_id, 1 AS learner_id,
    'passed' AS status, 10 AS points UNION ALL
  SELECT 102, 1, 'passed', 10 UNION ALL
  SELECT 103, 2, 'passed', 20 UNION ALL
  SELECT 104, 3, 'pending', 30 UNION ALL
  SELECT 105, 4, 'passed', 40
), approvals AS (
  SELECT 201 AS approval_id, 1 AS learner_id UNION ALL
  SELECT 202, 1 UNION ALL
  SELECT 203, 2 UNION ALL
  SELECT 204, 3
)
SELECT l.learner_id, l.learner_name, s.submission_id
FROM learners AS l
JOIN submissions AS s ON s.learner_id = l.learner_id
WHERE s.status = 'passed'
ORDER BY l.learner_id, s.submission_id;
```

The executed result has one row per passed submission:

| learner_id | learner_name | submission_id |
| --- | --- | --- |
| 1 | Lina | 101 |
| 1 | Lina | 102 |
| 2 | Omar | 103 |
| 4 | Lina | 105 |

For every later SQL block, keep the entire `WITH` section through the closing `)` of `approvals`. Replace the final query—the `SELECT l.learner_id ...` after that parenthesis—through its semicolon with the new block. Keep the `SELECT` statements inside the CTEs. Run each complete statement separately; CTE names don't carry over between statements.

All 12 query variants shown here were executed in cloud BigQuery using GoogleSQL on October 29, 2026. These results check query meaning, not speed. The PostgreSQL references provide a documentation cross-check; the queries weren't runtime-tested in PostgreSQL.

## Make six predictions before reading the answers

Write IDs, rows, and totals. “It has duplicates” isn't specific enough to check.

1. List learners with at least one passed submission. Which IDs qualify, and how many rows should still say Lina?
2. Require both a passed submission and an approval. How many rows does joining both related tables produce? How many learners qualify?
3. Sum each eligible learner's passed submission points, counting each submission once. Predict learner `1`'s total with two joins, with `SUM(DISTINCT s.points)`, and with approvals used only as an existence condition.
4. The outer input already contains learner IDs `1, 1, 2`. Does filtering it with `EXISTS` remove the second `1`?
5. Replace `SELECT 1` inside the passed-submission existence query with `SELECT COUNT(*)`. Does Tess qualify? What changes if you add `HAVING COUNT(*) > 0`?
6. Remove `s.learner_id = l.learner_id` from the existence condition. Which learner IDs survive?

## 1. EXISTS keeps both learners named Lina

For a learner list, submissions answer a yes-or-no question: does this learner have at least one passed submission?

```sql
SELECT l.learner_id, l.learner_name
FROM learners AS l
WHERE EXISTS (
  SELECT 1 FROM submissions AS s
  WHERE s.learner_id = l.learner_id AND s.status = 'passed'
)
ORDER BY l.learner_id;
```

The executed result has three rows:

| learner_id | learner_name |
| --- | --- |
| 1 | Lina |
| 2 | Omar |
| 4 | Lina |

Learner `1` qualifies through submissions `101` and `102`. A second match doesn't produce a second copy of her learner row. Learner `4` qualifies through submission `105`; sharing a name with learner `1` doesn't merge them. Tess has no passed submission and fails the condition.

The reference to `l.learner_id` makes this a correlated subquery: the condition depends on the outer learner. GoogleSQL's [EXISTS definition](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/subqueries#exists_subqueries) tests whether the subquery returns any rows. In `SELECT 1`, the value `1` is neither a match count nor a learner ID. Only the existence of a returned row matters.

This filtering pattern expresses a SQL semi join: retain qualifying occurrences from the outer input without attaching the matching inner rows. It describes the result. It doesn't promise a particular physical execution plan, evaluation order, or speed advantage over a join.

### DISTINCT needs the right identity

Try selecting distinct names from the original join:

```sql
SELECT DISTINCT l.learner_name
FROM learners AS l
JOIN submissions AS s ON s.learner_id = l.learner_id
WHERE s.status = 'passed'
ORDER BY l.learner_name;
```

The executed result is two names: `Lina`, `Omar`. That's a valid list of names. It can't distinguish the two people called Lina.

Selecting `DISTINCT l.learner_id, l.learner_name` would produce the same three-person learner list as `EXISTS` in this dataset. A join followed by deliberate duplicate removal can be correct. The useful distinction is what the query needs: the learner list needs eligibility, while the starting query needs individual submissions.

`DISTINCT` compares the selected values. Decide which columns identify the things you need to keep before removing equal output rows. The [UNION practice worksheet](/blog/sql-union-vs-union-all-practice/) explores this same issue when combining query results.

## 2. Two related tables produce five matching rows

Now require both a passed submission and an approval. Display the matching records:

```sql
SELECT l.learner_id, s.submission_id, a.approval_id
FROM learners AS l
JOIN submissions AS s ON s.learner_id = l.learner_id
JOIN approvals AS a ON a.learner_id = l.learner_id
WHERE s.status = 'passed'
ORDER BY l.learner_id, s.submission_id, a.approval_id;
```

The executed result shows all five combinations:

| learner_id | submission_id | approval_id |
| --- | --- | --- |
| 1 | 101 | 201 |
| 1 | 101 | 202 |
| 1 | 102 | 201 |
| 1 | 102 | 202 |
| 2 | 103 | 203 |

For learner `1`, each of two passed submissions pairs with each of two approvals: `2 × 2 = 4` rows. Omar contributes one pair. Tess has an approval but no passed submission. Learner `4` has a passed submission but no approval.

The join has correctly returned the combinations requested by its conditions. When a SQL join seems to return duplicate rows, check whether different combinations repeat the value you later plan to sum. The five full rows above are all distinct. [GoogleSQL's INNER JOIN rules](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#inner_join) define this matching-pair behavior.

For a learner list, let both related tables act as eligibility conditions:

```sql
SELECT l.learner_id, l.learner_name
FROM learners AS l
WHERE EXISTS (
  SELECT 1 FROM submissions AS s
  WHERE s.learner_id = l.learner_id AND s.status = 'passed'
)
AND EXISTS (
  SELECT 1 FROM approvals AS a
  WHERE a.learner_id = l.learner_id
)
ORDER BY l.learner_id;
```

**Executed result: `(1, Lina), (2, Omar)`.** Two learners qualify. The submissions and approvals decide whether to keep each learner row; their matching combinations aren't part of this output.

## 3. Fix the SUM by counting each submission once

The report now needs each eligible learner's passed points. Approvals still determine eligibility, and every passed submission should contribute once.

Summing after both joins breaks that requirement:

```sql
SELECT l.learner_id, SUM(s.points) AS passed_points
FROM learners AS l
JOIN submissions AS s ON s.learner_id = l.learner_id
JOIN approvals AS a ON a.learner_id = l.learner_id
WHERE s.status = 'passed'
GROUP BY l.learner_id
ORDER BY l.learner_id;
```

**Executed result: learner `1` → `40`; learner `2` → `20`.** Learner `1` supplies `10 + 10 + 10 + 10` across the four combinations above. `GROUP BY` produces one output row per learner, but `SUM` still receives all four point values. Grouping by learner ID doesn't undo multiplication from a join.

Keep the submissions join because those rows supply the points. Use `EXISTS` for approvals:

```sql
SELECT l.learner_id, SUM(s.points) AS passed_points
FROM learners AS l
JOIN submissions AS s ON s.learner_id = l.learner_id
WHERE s.status = 'passed'
  AND EXISTS (
    SELECT 1 FROM approvals AS a
    WHERE a.learner_id = l.learner_id
  )
GROUP BY l.learner_id
ORDER BY l.learner_id;
```

**Executed result: learner `1` → `20`; learner `2` → `20`.** Submissions `101` and `102` each contribute 10 once. Approval `201` is enough for learner `1` to qualify; approval `202` doesn't add another contribution.

This query includes only learners who have a passed submission and an approval. If the report must also show other learners with zero totals, decide that requirement separately. The [LEFT JOIN filter worksheet](/blog/sql-left-join-on-vs-where/) covers preserving unmatched people.

### SUM(DISTINCT points) loses a legitimate contribution

A tempting fix is to keep both joins and remove repeated point values inside the sum:

```sql
SELECT l.learner_id, SUM(DISTINCT s.points) AS passed_points
FROM learners AS l
JOIN submissions AS s ON s.learner_id = l.learner_id
JOIN approvals AS a ON a.learner_id = l.learner_id
WHERE s.status = 'passed'
GROUP BY l.learner_id
ORDER BY l.learner_id;
```

**Executed result: learner `1` → `10`; learner `2` → `20`.** Learner `1` has just one distinct point value, `10`. Her two genuine submissions happen to be worth the same amount. [SUM's DISTINCT option](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#sum) removes repeated expression values; it doesn't identify submissions.

| Query | Learner 1 total | What contributes |
| --- | --- | --- |
| Two joins, `SUM(s.points)` | 40 | Four submission–approval pairs |
| Two joins, `SUM(DISTINCT s.points)` | 10 | One distinct amount |
| Submissions join, approval `EXISTS` | 20 | Two passed submissions |

For a `SUM` after `JOIN`, trace the records that supply the values. Here the intended unit is a submission, identified by `submission_id`. Equal amounts don't establish duplicate submissions.

## 4. EXISTS keeps repetition already in its outer input

The earlier learner list had one row per person because `learners` supplied one row per learner ID. Give the query repeated outer IDs instead:

```sql
SELECT l.learner_id
FROM (
  SELECT 1 AS learner_id UNION ALL SELECT 1 UNION ALL SELECT 2
) AS l
WHERE EXISTS (
  SELECT 1 FROM submissions AS s
  WHERE s.learner_id = l.learner_id AND s.status = 'passed'
)
ORDER BY l.learner_id;
```

**Executed result: `1, 1, 2`.** Every outer occurrence qualifies. `EXISTS` filters those occurrences without multiplying them by inner matches; it doesn't globally deduplicate them. PostgreSQL's [EXISTS documentation](https://www.postgresql.org/docs/18/functions-subquery.html#FUNCTIONS-SUBQUERY-EXISTS) also describes this outer-row behavior.

If you need unique learners, inspect where repeated learner IDs entered the outer input. Correct an unintended repetition there, or deliberately select unique identities when the report requires them. An existence condition won't remove repetition that was already present.

## 5. EXISTS with SELECT COUNT(*) accepts a zero count

Replacing `SELECT 1` with `SELECT COUNT(*)` changes which rows the subquery returns:

```sql
SELECT l.learner_id
FROM learners AS l
WHERE EXISTS (
  SELECT COUNT(*) FROM submissions AS s
  WHERE s.learner_id = l.learner_id AND s.status = 'passed'
)
ORDER BY l.learner_id;
```

**Executed result: `1, 2, 3, 4`.** Tess qualifies despite having no passed submission.

Without `GROUP BY` or `HAVING`, this aggregate subquery returns one row containing the count. For Tess, the row contains `0`. `EXISTS` sees that returned row and evaluates to true. It doesn't test whether the count is positive. The [COUNT reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#count) defines the number; the enclosing existence test asks a different question.

A `HAVING` condition can remove the zero-count aggregate row:

```sql
SELECT l.learner_id
FROM learners AS l
WHERE EXISTS (
  SELECT COUNT(*) FROM submissions AS s
  WHERE s.learner_id = l.learner_id AND s.status = 'passed'
  HAVING COUNT(*) > 0
)
ORDER BY l.learner_id;
```

**Executed result: `1, 2, 4`.** Tess's count fails `HAVING`, so the subquery returns no row for her.

This works, but `EXISTS (SELECT 1 ... WHERE ...)` states “at least one passed submission” directly. An aggregate makes sense when eligibility depends on a count threshold. The [GROUP BY and HAVING worksheet](/blog/sql-group-by-having-practice/) gives those conditions more practice.

## 6. Removing correlation qualifies everyone

Keep the status condition and remove the learner-ID comparison:

```sql
SELECT l.learner_id
FROM learners AS l
WHERE EXISTS (
  SELECT 1 FROM submissions AS s WHERE s.status = 'passed'
)
ORDER BY l.learner_id;
```

**Executed result: `1, 2, 3, 4`.** The subquery asks whether any passed submission exists anywhere in the dataset. Several do, so the same true condition accepts every learner, including Tess.

An uncorrelated existence test can be intentional. For example, a report could display learners only while some registration period is open. For “this learner has a passed submission,” the comparison to the outer learner is part of the requirement. Check that link as carefully as the status filter.

## Practice the decision without the answers

Close the worked queries and write the eligible-learner list, then the eligible learners' submission totals. Before adding `SUM`, state what each input row represents. Account for submissions `101` and `102` separately and explain why approval `202` mustn't add points.

Turn a recurring mistake into a small recall prompt:

| Prompt | Answer to recall |
| --- | --- |
| Two 10-point submissions and two approvals join on learner ID. What does `SUM(points)` receive? | Four 10-point values, totaling 40. Use approval existence when approvals only decide eligibility. |
| Why doesn't `SUM(DISTINCT points)` recover the two-submission total? | It keeps one distinct amount, 10. Different submissions can share that amount. |
| A correlated `SELECT COUNT(*)` returns zero. Is its enclosing `EXISTS` false? | No. With no grouping or HAVING filter, the aggregate returns one row containing zero. |

Answer before revealing the back, then revisit missed decisions on later days. Regular recall and spaced review can help long-term retention. Keep writing full queries too, so the remembered rule stays connected to rows you can explain.

For further practice, the English [PostgreSQL SQL Interview Problems deck](/catalog/packages/postgresql-sql-interview-problems/) has 63 questions with PostgreSQL query solutions, including joins and existence checks. Write a query before revealing its solution, and check dialect differences when moving from this GoogleSQL worksheet. The deck belongs to Nibomo's catalog; Kirill Markin owns Nibomo.

*AI agents researched, drafted, and edited this worksheet, constructed its fictional dataset, and executed the 12 query variants in cloud BigQuery using GoogleSQL on October 29, 2026. The illustration is AI-generated. The execution verifies the displayed outputs. It provides no performance benchmark or PostgreSQL runtime verification, and the article hasn't received human editorial review.*
