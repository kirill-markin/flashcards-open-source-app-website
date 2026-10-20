---
title: "SQL GROUP BY and HAVING Practice: Predict the Groups"
description: "Practice SQL GROUP BY and HAVING with one runnable dataset, checked outputs, row-versus-group filters, repeated names, and explained answers."
date: "2026-10-19"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3094f87c34fde7afe8cf7c0291ad869e3ac7039e5d014765dece2be1a006ba56.webp"
keywords:
  - "SQL GROUP BY HAVING practice"
  - "WHERE vs HAVING"
  - "SQL aggregation exercises"
  - "COUNT column vs COUNT star"
  - "grouping by ID"
---

Two different learners named Ari each have two completed sessions. Eli has two as well, though one duration is missing. All three qualify for a report asking for “learners with at least two completed sessions.” Yet a plausible query can merge the Aris or drop Eli.

This SQL GROUP BY and HAVING practice uses ten fictional session records to make those mistakes visible. Before running each query, predict which rows reach aggregation, which rows belong together, and which groups survive. Every answer below traces back to the same data.

![A theatre volunteer holds two short fabric strips tied together to span a doorway](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/3094f87c34fde7afe8cf7c0291ad869e3ac7039e5d014765dece2be1a006ba56.webp)

## Start with one report and ten sessions

The report requirement is: **show each learner with at least two completed sessions, their completed-session count, and the sum of recorded minutes for those sessions.** Learner IDs identify people; names are display labels. The two Aris have different IDs.

Run this complete read-only statement in BigQuery using GoogleSQL. The `WITH` section defines a common table expression, or CTE: a named query result that supplies the demonstration data for this statement. It doesn't create a permanent table.

```sql
WITH sessions AS (
  SELECT 101 AS session_id, 1 AS learner_id,
    'Ari' AS learner_name, 'completed' AS status, 20 AS minutes UNION ALL
  SELECT 102, 1, 'Ari', 'completed', 25 UNION ALL
  SELECT 103, 1, 'Ari', 'cancelled', 90 UNION ALL
  SELECT 104, 2, 'Bo', 'completed', 40 UNION ALL
  SELECT 105, 2, 'Bo', 'cancelled', 10 UNION ALL
  SELECT 106, 3, 'Ari', 'completed', 30 UNION ALL
  SELECT 107, 3, 'Ari', 'completed', 20 UNION ALL
  SELECT 108, 4, 'Dee', 'cancelled', 70 UNION ALL
  SELECT 109, 5, 'Eli', 'completed', CAST(NULL AS INT64) UNION ALL
  SELECT 110, 5, 'Eli', 'completed', 15
)
SELECT
  learner_id,
  learner_name,
  COUNT(*) AS completed_sessions,
  SUM(minutes) AS recorded_minutes
FROM sessions
WHERE status = 'completed'
GROUP BY learner_id, learner_name
HAVING COUNT(*) >= 2
ORDER BY learner_id;
```

The result checked in BigQuery is:

| learner_id | learner_name | completed_sessions | recorded_minutes |
| --- | --- | --- | --- |
| 1 | Ari | 2 | 45 |
| 3 | Ari | 2 | 50 |
| 5 | Eli | 2 | 15 |

For every later SQL block, reuse the initial `WITH sessions AS (...)` section through its closing `)`. Replace the final `SELECT` query after that parenthesis with the block you want to try. Leave the `SELECT` statements inside the CTE intact. Run each completed statement separately; defining the CTE in one statement doesn't make it available to the next.

All nine variants in this lesson were executed in cloud BigQuery using GoogleSQL. PostgreSQL 18 documentation was also consulted for the aggregate rules; the displayed outputs are BigQuery results.

## WHERE vs HAVING: trace the rows first

Read the worked query in three steps: `WHERE` chooses the input rows, `GROUP BY` defines which rows belong together, and `HAVING` keeps groups whose aggregate values meet the condition. PostgreSQL's [aggregate tutorial](https://www.postgresql.org/docs/18/tutorial-agg.html) explains the difference between filtering rows and filtering groups. These steps describe the query's meaning; the database can choose its own physical execution plan.

Use this ledger to account for every learner:

| Learner | Completed session IDs entering aggregation | Count | Recorded minutes | Final outcome |
| --- | --- | --- | --- | --- |
| 1, Ari | 101, 102 | 2 | 20 + 25 = 45 | Kept |
| 2, Bo | 104 | 1 | 40 | Removed by HAVING |
| 3, Ari | 106, 107 | 2 | 30 + 20 = 50 | Kept |
| 4, Dee | None | — | — | No group after WHERE |
| 5, Eli | 109, 110 | 2 | One missing duration; known subtotal 15 | Kept |

Cancelled sessions `103`, `105`, and `108` leave at `WHERE`. Bo still has a group, but its count fails `HAVING`. Dee has no remaining row from which to form a group.

Eli's `15` is the subtotal of known durations. Session `109` is recorded as completed, but its duration is missing. The query therefore can't establish Eli's full actual study time. Calling the column `recorded_minutes` keeps that limit visible.

GoogleSQL's [GROUP BY reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#group_by_clause) describes grouping by the specified expressions. Here, the `(learner_id, learner_name)` pair gives one group per person because each ID has one consistent name. The grouping expressions determine what one output row represents; a label alone doesn't guarantee a person's identity.

## Six exercises to predict or repair

Use the original data throughout. For each exercise, write the expected output rows and the session IDs that explain them before reading the answers.

1. Remove `WHERE status = 'completed'` from the worked query. Which learner IDs survive, and what are their counts and subtotals? How would you repair it for the original requirement?
2. Find learners whose completed sessions have at least 45 recorded minutes in total. Compare `WHERE status = 'completed' AND minutes >= 45` with `WHERE status = 'completed'` followed by `HAVING SUM(minutes) >= 45`. Predict both results. This exercise has no minimum session-count requirement.
3. Keep completed rows, but select and group by `learner_name` alone, with `HAVING COUNT(*) >= 2`. What does the Ari row mean now? Repair the grouping for a per-person report.
4. For every learner with completed sessions, show `COUNT(*)`, `COUNT(minutes)`, and `SUM(minutes)`, without a `HAVING` threshold. Predict Eli's three values. Would adding `HAVING COUNT(minutes) >= 2` implement the original session-count requirement?
5. Show all learners represented anywhere in this session log, including Dee, with an all-session count and a completed-session count. Write the aggregate without filtering away cancelled rows.
6. Filter to `status = 'rescheduled'`, which matches nothing. Compare a global `COUNT(*)` and `SUM(minutes)` with a query grouped by `learner_id`. Does each query return a row?

## Answers with runnable queries

### 1. Removing WHERE admits cancelled sessions

Without the `WHERE` clause, the query counts sessions of every status:

```sql
SELECT
  learner_id,
  learner_name,
  COUNT(*) AS sessions_count,
  SUM(minutes) AS recorded_minutes
FROM sessions
GROUP BY learner_id, learner_name
HAVING COUNT(*) >= 2
ORDER BY learner_id;
```

| learner_id | learner_name | sessions_count | recorded_minutes |
| --- | --- | --- | --- |
| 1 | Ari | 3 | 135 |
| 2 | Bo | 2 | 50 |
| 3 | Ari | 2 | 50 |
| 5 | Eli | 2 | 15 |

Learner `1` now includes cancelled session `103`, adding 90 minutes. Bo qualifies because `104` and `105` together make two sessions, even though only one is completed. Dee still fails the two-session threshold.

Restore `WHERE status = 'completed'` before `GROUP BY`, as in the worked query. The threshold in `HAVING` doesn't decide which statuses enter the count.

### 2. A row threshold can't test a group total

This query allows only completed sessions with a recorded duration of at least 45 minutes into aggregation:

```sql
SELECT learner_id, learner_name, SUM(minutes) AS recorded_minutes
FROM sessions
WHERE status = 'completed' AND minutes >= 45
GROUP BY learner_id, learner_name
ORDER BY learner_id;
```

**Checked result: no rows.** None of the completed sessions has a recorded duration of 45 or more. The 90-minute and 70-minute sessions are cancelled, so they fail the status condition. No rows remain to form a learner group.

For a total across completed sessions, use:

```sql
SELECT learner_id, learner_name, SUM(minutes) AS recorded_minutes
FROM sessions
WHERE status = 'completed'
GROUP BY learner_id, learner_name
HAVING SUM(minutes) >= 45
ORDER BY learner_id;
```

The checked result is:

| learner_id | learner_name | recorded_minutes |
| --- | --- | --- |
| 1 | Ari | 45 |
| 3 | Ari | 50 |

Sessions `101` and `102` together reach 45 minutes; `106` and `107` reach 50. The condition applies to each group's sum, so neither learner needs a single 45-minute session. GoogleSQL's [HAVING clause documentation](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#having_clause) describes this aggregate filtering.

### 3. A name isn't a person ID

Grouping by name combines both Aris:

```sql
SELECT
  learner_name,
  COUNT(*) AS completed_sessions,
  SUM(minutes) AS recorded_minutes
FROM sessions
WHERE status = 'completed'
GROUP BY learner_name
HAVING COUNT(*) >= 2
ORDER BY learner_name;
```

The checked result is:

| learner_name | completed_sessions | recorded_minutes |
| --- | --- | --- |
| Ari | 4 | 95 |
| Eli | 2 | 15 |

The Ari row combines sessions `101`, `102`, `106`, and `107`. Its arithmetic is correct for a name group. It doesn't describe either individual learner.

Restore `learner_id` to both `SELECT` and `GROUP BY`, as in the worked query. Adding `DISTINCT` to this output wouldn't split the combined Ari group back into two people.

### 4. Count sessions separately from recorded durations

```sql
SELECT
  learner_id,
  learner_name,
  COUNT(*) AS completed_sessions,
  COUNT(minutes) AS recorded_durations,
  SUM(minutes) AS recorded_minutes
FROM sessions
WHERE status = 'completed'
GROUP BY learner_id, learner_name
ORDER BY learner_id;
```

| learner_id | learner_name | completed_sessions | recorded_durations | recorded_minutes |
| --- | --- | --- | --- | --- |
| 1 | Ari | 2 | 2 | 45 |
| 2 | Bo | 1 | 1 | 40 |
| 3 | Ari | 2 | 2 | 50 |
| 5 | Eli | 2 | 1 | 15 |

Eli has two completed rows, one non-null duration, and 15 known minutes. `COUNT(*)` counts rows; `COUNT(minutes)` counts non-null values, as defined in the [GoogleSQL COUNT reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#count). `SUM` adds the non-null durations; PostgreSQL's [aggregate reference](https://www.postgresql.org/docs/18/functions-aggregate.html) documents that behavior too. A missing duration doesn't stop a row from contributing to `COUNT(*)`.

`HAVING COUNT(minutes) >= 2` would reject Eli. It requires two recorded durations, which is stricter than two completed sessions. Keep `COUNT(*) >= 2` for the original requirement. For practice with missing values in filters, see the [SQL NULL and NOT IN lesson](/blog/sql-null-not-in-practice/).

### 5. Count completed sessions without removing Dee

```sql
SELECT
  learner_id,
  learner_name,
  COUNT(*) AS all_sessions,
  SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END)
    AS completed_sessions
FROM sessions
GROUP BY learner_id, learner_name
ORDER BY learner_id;
```

| learner_id | learner_name | all_sessions | completed_sessions |
| --- | --- | --- | --- |
| 1 | Ari | 3 | 2 |
| 2 | Bo | 2 | 1 |
| 3 | Ari | 2 | 2 |
| 4 | Dee | 1 | 0 |
| 5 | Eli | 2 | 2 |

The `CASE` returns one for a completed row and zero otherwise, following the [CASE expression rules](https://www.postgresql.org/docs/18/functions-conditional.html#FUNCTIONS-CASE). Summing those values counts completed sessions while `COUNT(*)` still counts every session. Dee's cancelled session `108` stays in the input, giving Dee a group with one session and zero completed sessions.

This query covers everyone present in **the session log**. It can't produce a learner with no session record at all. A report covering every learner needs a source listing those learners; the [LEFT JOIN ON vs WHERE lesson](/blog/sql-left-join-on-vs-where/) covers preserving people without qualifying matches.

### 6. Empty input can still produce an aggregate row

Run these separately, each with the original CTE:

```sql
SELECT COUNT(*) AS sessions_count, SUM(minutes) AS recorded_minutes
FROM sessions
WHERE status = 'rescheduled';
```

**Checked result: one row, with `sessions_count = 0` and `recorded_minutes = NULL`.** This query aggregates the whole filtered input without learner groups. `COUNT(*)` returns zero; `SUM(minutes)` has no values to add and returns NULL. The [PostgreSQL aggregate reference](https://www.postgresql.org/docs/18/functions-aggregate.html) explains these empty-input results.

```sql
SELECT learner_id, COUNT(*) AS sessions_count
FROM sessions
WHERE status = 'rescheduled'
GROUP BY learner_id
ORDER BY learner_id;
```

**Checked result: no rows.** With no matching session records, this query has no learner groups to report. The difference is in the shape of the output: the first query returns one aggregate row; the second returns none. Neither result invents a learner with zero sessions.

## Save the distinction you missed

If you missed an exercise, make a recall prompt from the exact distinction that caused the error. Include enough data on the front to make the answer unambiguous.

| Card front | Card back |
| --- | --- |
| Completed sessions last 20 and 25 minutes. Does `WHERE minutes >= 45` retain either? What about `HAVING SUM(minutes) >= 45` after grouping them? | WHERE retains neither row. HAVING retains the group with total 45. |
| Two completed rows have minutes NULL and 15. What are COUNT(*), COUNT(minutes), and SUM(minutes)? | 2, 1, and 15. The sum is a known-duration subtotal. |
| Two people share a name. What does grouping only by that name combine? | Their rows enter one group. Include the person ID for a per-person report. |

Keep each recall target narrow. Use the card to rehearse that distinction, then return to a full query and account for its rows: apply `WHERE`, form groups using their keys, calculate the aggregates, and apply `HAVING`.

*AI assisted substantially with research, writing, editing, and exercise construction; the illustration is AI-generated. The nine variants were executed with fictional data in cloud BigQuery using GoogleSQL on October 19, 2026, in Europe/Paris time (October 18 UTC). PostgreSQL 18 documentation was consulted, but no PostgreSQL runtime test, human editorial review, or classroom validation is claimed.*
