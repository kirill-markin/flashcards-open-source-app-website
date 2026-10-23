---
title: "SQL UNION vs UNION ALL: Predict the Rows That Survive"
description: "Practice SQL UNION and UNION ALL with checked results: duplicate rows, shared IDs, NULLs, source labels, and column order in one runnable dataset."
date: "2026-10-23"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/086bb6ace13fd811a7b0d2316bb80e868cbb22d315300bba4e4f1063485c666b.webp"
keywords:
  - "SQL UNION vs UNION ALL"
  - "UNION practice"
  - "UNION duplicate rows"
  - "UNION DISTINCT BigQuery"
  - "SQL source column duplicates"
---

Two feeds contain eight rows. Combine all three columns with `UNION ALL`, and all eight survive. Use BigQuery's `UNION DISTINCT`, and five survive. Select only the learner and minutes before that distinct union, and four survive. You changed what it compares.

`UNION ALL` keeps every input occurrence, including repeated copies. A distinct union keeps one copy of each distinct output row. It doesn't decide which events are real or which report is newer. The useful question is **what should one output row represent?** Work through the dataset below to see how IDs, missing values, source labels, and column order affect that decision. Predict the rows before running the queries.

![A repairer opens two matching navy canvas bags to reveal their ochre and teal linings](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/086bb6ace13fd811a7b0d2316bb80e868cbb22d315300bba4e4f1063485c666b.webp)

## Set up two feeds with eight rows

These fictional feeds contain study-event records. `event_id` is a reported event identifier, `learner_id` identifies a learner, and `minutes` is an integer duration or `NULL` when the duration is missing. An identifier in an export isn't proof that its values are consistent: feed B reports two different durations for event 104.

| Feed | event_id | learner_id | minutes |
| --- | --- | --- | --- |
| A | 101 | 7 | 20 |
| A | 102 | 7 | 20 |
| A | 103 | 8 | NULL |
| A | 103 | 8 | NULL |
| B | 102 | 7 | 20 |
| B | 103 | 8 | NULL |
| B | 104 | 9 | 30 |
| B | 104 | 9 | 35 |

Event 103 repeats inside A and across the feeds. Event 102 repeats across the feeds. Events 101 and 102 have equal learner and duration values, but different IDs. Those distinctions drive the exercises.

Run this complete read-only statement in BigQuery using GoogleSQL. Its two common table expressions, or CTEs, supply the demonstration data without creating permanent tables:

```sql
WITH feed_a AS (
  SELECT 101 AS event_id, 7 AS learner_id, 20 AS minutes UNION ALL
  SELECT 102, 7, 20 UNION ALL
  SELECT 103, 8, CAST(NULL AS INT64) UNION ALL
  SELECT 103, 8, CAST(NULL AS INT64)
), feed_b AS (
  SELECT 102 AS event_id, 7 AS learner_id, 20 AS minutes UNION ALL
  SELECT 103, 8, CAST(NULL AS INT64) UNION ALL
  SELECT 104, 9, 30 UNION ALL
  SELECT 104, 9, 35
)
SELECT event_id, learner_id, minutes FROM feed_a
UNION ALL
SELECT event_id, learner_id, minutes FROM feed_b
ORDER BY event_id, learner_id, minutes;
```

For each later SQL block, copy this `WITH` section through the closing `)` of `feed_b`. Replace everything after that parenthesis with the block you want to run. Leave the `SELECT` statements inside both CTEs unchanged, including their `UNION ALL` operators. Run each completed statement separately; a CTE name doesn't carry into the next statement.

The three data columns use scalar integers. The source-label exercise adds the literal strings `a` and `b`. Arrays, composite values, floating-point special values, and text-collation rules are outside this lesson.

## Check the dialect before choosing UNION

| Intended result | BigQuery GoogleSQL | PostgreSQL 18 and SQL Server |
| --- | --- | --- |
| Keep every input occurrence | `UNION ALL` | `UNION ALL` |
| Keep one copy of each distinct output row | `UNION DISTINCT` | `UNION` |

GoogleSQL requires `ALL` or `DISTINCT` after `UNION`. Plain `UNION` removes duplicates in [PostgreSQL](https://www.postgresql.org/docs/18/queries-union.html) and [SQL Server](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/set-operators-union-transact-sql?view=sql-server-ver17). The runnable blocks here use GoogleSQL throughout, including `INT64` in the setup.

Duplicate removal compares every selected column; a shared event ID alone doesn't make two output rows duplicates. By default, both sides must return the same number of columns, and corresponding positions need compatible types. Names alone don't align them. GoogleSQL documents these [set-operation rules](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#set_operators).

All ten displayed query variants were executed in cloud BigQuery on October 23, 2026. The row-list queries end with `ORDER BY` so their outputs are easy to compare; the aggregate query returns a single row. Neither union operator alone promises a display order. These tiny queries establish results for the demonstration data, without measuring performance.

## Seven exercises to predict or repair

Use the original two feeds for every exercise. Write the output rows, including repeated copies, before reading the answers.

1. Compare the setup's `UNION ALL` with `UNION DISTINCT` over all three columns. How many rows survive? Explain the copies of event 103 and the conflicting values for 104.
2. Return only distinct event IDs. Does that result establish a trustworthy duration for every event?
3. Compare selecting `(learner_id, minutes)` before `UNION DISTINCT` with removing duplicates on all three columns first and then selecting that pair. Do both queries return the same number of rows?
4. Put `SELECT DISTINCT` in each branch, then combine the branches with `UNION ALL`. Is this equivalent to `UNION DISTINCT` across both feeds?
5. Add a source column, `a` or `b`, before `UNION DISTINCT`. How many rows survive? Does the source label preserve the repeated row inside feed A?
6. Using `UNION ALL` on all three columns, predict `COUNT(*)`, `COUNT(minutes)`, and `SUM(minutes)`. What can that sum actually tell you?
7. The first branch selects `event_id, learner_id`; the second selects `learner_id, event_id`. Both columns are integers. Predict the two-row result for A's event 101 and B's event 102, then repair the alignment.

## Answers with the rows accounted for

### 1. Whole-row duplicate removal leaves both versions of 104

The setup's `UNION ALL` returns all eight occurrences:

| event_id | learner_id | minutes |
| --- | --- | --- |
| 101 | 7 | 20 |
| 102 | 7 | 20 |
| 102 | 7 | 20 |
| 103 | 8 | NULL |
| 103 | 8 | NULL |
| 103 | 8 | NULL |
| 104 | 9 | 30 |
| 104 | 9 | 35 |

For one copy of each three-column row, use:

```sql
SELECT event_id, learner_id, minutes FROM feed_a
UNION DISTINCT
SELECT event_id, learner_id, minutes FROM feed_b
ORDER BY event_id, learner_id, minutes;
```

The checked result has five rows:

| event_id | learner_id | minutes |
| --- | --- | --- |
| 101 | 7 | 20 |
| 102 | 7 | 20 |
| 103 | 8 | NULL |
| 104 | 9 | 30 |
| 104 | 9 | 35 |

The three occurrences of `(103, 8, NULL)` collapse to one. For duplicate removal, corresponding NULLs don't keep otherwise matching rows separate. This differs from evaluating the predicate `NULL = NULL`, which returns `NULL` rather than `TRUE`. GoogleSQL's [distinctness rules](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators#is_distinct_from_operator) explain why two NULLs aren't distinct. For filtering with missing values, try the separate [NULL and NOT IN practice](/blog/sql-null-not-in-practice/).

Both 104 rows survive because 30 differs from 35. The query has no timestamp or rule for choosing between them. It cannot establish which duration is correct or newer. `UNION DISTINCT` removes repeated row values; resolving conflicting records needs a separate, explicit policy.

### 2. A list of IDs hides the conflicting values

```sql
SELECT event_id FROM feed_a
UNION DISTINCT
SELECT event_id FROM feed_b
ORDER BY event_id;
```

| event_id |
| --- |
| 101 |
| 102 |
| 103 |
| 104 |

Four IDs survive because only the ID is compared. This query correctly answers “which event IDs appear anywhere?” It doesn't answer “what is the duration of each event?” Both values for 104 have disappeared from the output, so the conflict is hidden rather than settled.

If the requirement is one row per event with a chosen duration, first define how conflicting reports should be resolved. Choosing the largest duration or the last row displayed would introduce a policy the data hasn't supplied.

### 3. Dropping the ID earlier changes which rows collapse

Selecting fewer columns is called projection. Here it changes what counts as a duplicate.

Project first:

```sql
SELECT learner_id, minutes FROM feed_a
UNION DISTINCT
SELECT learner_id, minutes FROM feed_b
ORDER BY learner_id, minutes;
```

| learner_id | minutes |
| --- | --- |
| 7 | 20 |
| 8 | NULL |
| 9 | 30 |
| 9 | 35 |

There are four rows. Events 101 and 102 both become `(7, 20)` before duplicate removal, so they collapse together.

Now remove duplicates while the event ID is still present, then project:

```sql
SELECT learner_id, minutes
FROM (
  SELECT event_id, learner_id, minutes FROM feed_a
  UNION DISTINCT
  SELECT event_id, learner_id, minutes FROM feed_b
)
ORDER BY learner_id, minutes;
```

| learner_id | minutes |
| --- | --- |
| 7 | 20 |
| 7 | 20 |
| 8 | NULL |
| 9 | 30 |
| 9 | 35 |

Five rows survive. The inner query preserves events 101 and 102 as different three-column rows. The outer `SELECT` hides their IDs but doesn't perform another duplicate-removal step.

Use the first query for distinct learner-duration pairs. Use the second if the requirement is to remove duplicate full records before hiding their IDs. Its two copies of `(7, 20)` come from different surviving full rows, 101 and 102. Adding `DISTINCT` to the outer `SELECT` would remove that remaining repetition too.

### 4. DISTINCT inside each branch leaves overlap between feeds

```sql
SELECT DISTINCT event_id, learner_id, minutes FROM feed_a
UNION ALL
SELECT DISTINCT event_id, learner_id, minutes FROM feed_b
ORDER BY event_id, minutes;
```

| event_id | learner_id | minutes |
| --- | --- | --- |
| 101 | 7 | 20 |
| 102 | 7 | 20 |
| 102 | 7 | 20 |
| 103 | 8 | NULL |
| 103 | 8 | NULL |
| 104 | 9 | 30 |
| 104 | 9 | 35 |

Seven rows survive. Feed A's two copies of `(103, 8, NULL)` become one within A. Its remaining copy and B's copy both pass through `UNION ALL`. So do the copies of event 102 from different feeds.

The location of `DISTINCT` defines its scope. For one copy of each full row across both feeds, use the `UNION DISTINCT` query from answer 1. For every occurrence, use the setup's `UNION ALL` without branch-level `DISTINCT`.

### 5. A source label becomes part of row identity

```sql
SELECT event_id, learner_id, minutes, 'a' AS source FROM feed_a
UNION DISTINCT
SELECT event_id, learner_id, minutes, 'b' AS source FROM feed_b
ORDER BY event_id, minutes, source;
```

| event_id | learner_id | minutes | source |
| --- | --- | --- | --- |
| 101 | 7 | 20 | a |
| 102 | 7 | 20 | a |
| 102 | 7 | 20 | b |
| 103 | 8 | NULL | a |
| 103 | 8 | NULL | b |
| 104 | 9 | 30 | b |
| 104 | 9 | 35 | b |

Seven rows survive again, for a different reason. The `a` and `b` labels distinguish otherwise matching records across feeds. The repeated 103 row inside A still collapses because both copies have the same source label.

This query answers “which distinct record values did each feed report?” It preserves provenance at the feed level. It doesn't preserve every occurrence within a feed; use `UNION ALL` when each supplied occurrence must remain available. Whether an occurrence is a valid observation or an export mistake requires information beyond these columns.

### 6. Count preserved rows separately from known durations

```sql
SELECT
  COUNT(*) AS rows_count,
  COUNT(minutes) AS known_minutes,
  SUM(minutes) AS minutes_subtotal
FROM (
  SELECT event_id, learner_id, minutes FROM feed_a
  UNION ALL
  SELECT event_id, learner_id, minutes FROM feed_b
);
```

| rows_count | known_minutes | minutes_subtotal |
| --- | --- | --- |
| 8 | 5 | 125 |

All eight rows contribute to `COUNT(*)`. Five have non-null minutes: three occurrences of 20, one 30, and one 35. Their sum is `20 + 20 + 20 + 30 + 35 = 125`.

That is a subtotal of the reported non-null values across the preserved occurrences. It counts the repeated 102 report twice and includes both conflicting reports for 104. It also has no duration to add for the three 103 rows. Calling it “actual total study time” would claim more than the query establishes.

The [GROUP BY and HAVING practice](/blog/sql-group-by-having-practice/) explores row counts, non-null counts, and known-duration subtotals in more detail.

### 7. Compatible column types can hide a positional mistake

Keep the original CTEs and run this deliberately misaligned query:

```sql
SELECT event_id, learner_id FROM feed_a WHERE event_id = 101
UNION ALL
SELECT learner_id, event_id FROM feed_b WHERE event_id = 102
ORDER BY event_id, learner_id;
```

| event_id | learner_id |
| --- | --- |
| 7 | 102 |
| 101 | 7 |

The second branch supplies 7 in its first position and 102 in its second. The output column names come from the first branch, so the row appears as event 7 belonging to learner 102. Both positions accept integers, allowing the query to run without a type error.

One repair is to put `event_id, learner_id` in that order in both branches. GoogleSQL also supports an explicit name-based repair:

```sql
SELECT event_id, learner_id FROM feed_a WHERE event_id = 101
UNION ALL BY NAME
SELECT learner_id, event_id FROM feed_b WHERE event_id = 102
ORDER BY event_id, learner_id;
```

The checked result is:

| event_id | learner_id |
| --- | --- |
| 101 | 7 |
| 102 | 7 |

`BY NAME` aligns the named columns even when their positions differ. With this unmodified `BY NAME` form, both branches must supply the same set of column names, as they do here. The checked syntax is GoogleSQL; use the explicit matching column order when adapting this exercise to PostgreSQL or SQL Server.

## Keep the missed decision small enough to recall

For another attempt, cover the answers and write the columns being compared before counting rows. Then account for every repeated copy. This exposes the difference between recognizing the definition and tracing a query.

If a mistake recurs, save one narrow prompt on paper or in your current flashcard tool:

| Prompt | Answer to recall |
| --- | --- |
| `(101, 7, 20)` and `(102, 7, 20)` enter UNION DISTINCT. What changes if both branches select only learner and minutes first? | The two different full rows become the same pair `(7, 20)` and collapse. |
| Two equal records come from different feeds. Does adding different source labels before UNION DISTINCT preserve both? | Yes. The source label becomes a compared column. Equal rows within one source can still collapse. |
| Event 104 has durations 30 and 35. Which does UNION DISTINCT choose? | Neither is chosen over the other. Both full rows survive; conflict resolution needs an explicit policy. |

The [guide to writing better flashcards](/blog/how-to-make-better-flashcards/) can help shorten an overloaded prompt. Return to the missed decision on later days and answer before revealing the back. Keep full-query practice alongside that recall: remembering “UNION removes duplicates” is only useful when you can identify exactly which row values it compares.

*AI agents researched, wrote, and edited this article, constructed the fictional dataset, and executed the ten displayed query variants in cloud BigQuery using GoogleSQL on October 23, 2026. The variants cover the setup's UNION ALL, full-row UNION DISTINCT, ID-only union, both projection orders, branch-level DISTINCT, source labels, aggregate counts, positional mismatch, and BY NAME repair. No permanent tables were created. PostgreSQL 18 and Microsoft documentation were consulted; those engines weren't runtime-tested. The illustration is AI-generated. These AI editorial passes do not establish human review or classroom validation.*
