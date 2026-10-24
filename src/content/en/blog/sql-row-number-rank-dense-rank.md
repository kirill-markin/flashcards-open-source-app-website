---
title: "SQL ROW_NUMBER vs RANK vs DENSE_RANK: Practice with Ties"
description: "Compare SQL ROW_NUMBER, RANK, and DENSE_RANK with checked results, top-two queries, tie-breaker mistakes, and exercises using one runnable dataset."
date: "2026-10-21"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/d8a918454fbd4cd6aa791e27156a30416404127c47ace61b6686f09eddb0d6d9.webp"
keywords:
  - "SQL ROW_NUMBER vs RANK vs DENSE_RANK"
  - "SQL ranking practice"
  - "top N per group"
  - "SQL rank ties"
  - "dense_rank second highest score"
---

“Top two per division” returns four, five, or six rows from the same nine entries below. Each result can be correct. The missing detail is whether two means two entries, competition ranks through second place, or two distinct scores.

Choosing between SQL `ROW_NUMBER`, `RANK`, and `DENSE_RANK` starts with that requirement. This worksheet uses a tie for first in one division and a tie for second in the other, so the choice changes which entries survive. Predict the IDs before running each query.

![A canoe-club volunteer compares two equal-length paddles beside a longer paddle and a shorter one](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/d8a918454fbd4cd6aa791e27156a30416404127c47ace61b6686f09eddb0d6d9.webp)

## Start with nine entries

These entries are fictional. Scores and IDs are non-null, every `entry_id` is unique, and a higher score wins. When exactly two entries must be selected, the smaller ID wins a score tie. That's an explicit selection rule, separate from sharing a score rank.

Run this complete read-only statement in BigQuery using GoogleSQL. The common table expression, or CTE, named `entries` supplies this statement's data without creating a permanent table.

```sql
WITH entries AS (
  SELECT 101 AS entry_id, 'North' AS division, 96 AS score UNION ALL
  SELECT 102, 'North', 92 UNION ALL
  SELECT 103, 'North', 92 UNION ALL
  SELECT 104, 'North', 85 UNION ALL
  SELECT 105, 'North', 70 UNION ALL
  SELECT 201, 'South', 99 UNION ALL
  SELECT 202, 'South', 99 UNION ALL
  SELECT 203, 'South', 88 UNION ALL
  SELECT 204, 'South', 80
)
SELECT entry_id, division, score,
  ROW_NUMBER() OVER (
    PARTITION BY division ORDER BY score DESC, entry_id ASC
  ) AS row_no,
  RANK() OVER (
    PARTITION BY division ORDER BY score DESC
  ) AS score_rank,
  DENSE_RANK() OVER (
    PARTITION BY division ORDER BY score DESC
  ) AS score_dense_rank
FROM entries
ORDER BY division, score DESC, entry_id;
```

The checked result is:

| entry_id | division | score | row_no | score_rank | score_dense_rank |
| --- | --- | --- | --- | --- | --- |
| 101 | North | 96 | 1 | 1 | 1 |
| 102 | North | 92 | 2 | 2 | 2 |
| 103 | North | 92 | 3 | 2 | 2 |
| 104 | North | 85 | 4 | 4 | 3 |
| 105 | North | 70 | 5 | 5 | 4 |
| 201 | South | 99 | 1 | 1 | 1 |
| 202 | South | 99 | 2 | 1 | 1 |
| 203 | South | 88 | 3 | 3 | 2 |
| 204 | South | 80 | 4 | 4 | 3 |

All nine query variants in this lesson were executed in cloud BigQuery using GoogleSQL on October 21, 2026, Europe/Paris time (October 20 UTC). PostgreSQL 18 documentation supports the explanations; the displayed outputs are BigQuery results.

To run a later example, start from the original `WITH entries AS (...)` section through its closing `)`. Replace the query after it with the indicated block. Don't append a block after the first query's semicolon. A leading comma in `, ranked AS (` adds another CTE to the same statement. Run each completed statement separately: CTE names don't carry into the next statement.

## Follow what happens after a tie

`ROW_NUMBER` assigns a separate position to each entry. North's two scores of 92 occupy positions 2 and 3 because the window order puts ID 102 before 103.

`RANK` gives tied scores the same competition rank, then leaves a gap. North reads `1, 2, 2, 4, 5`. South reads `1, 1, 3, 4`: two entries share first, so nobody has rank 2. A rank is one plus the number of entries ahead of that score.

`DENSE_RANK` counts distinct score groups without gaps. North reads `1, 2, 2, 3, 4`; South reads `1, 1, 2, 3`. These rules follow the [PostgreSQL window-function definitions](https://www.postgresql.org/docs/18/functions-window.html). Here the score alone defines the ties for both rank functions.

`PARTITION BY division` restarts the calculation for each division. Every original entry remains a separate row. If you need one aggregate row per group instead, use the [GROUP BY and HAVING practice](/blog/sql-group-by-having-practice/).

## Three different “top two” queries

For top N per group, decide what N counts before choosing the filter. This table shows the returned IDs in display order:

| Requirement and filter | North IDs | South IDs | Total rows |
| --- | --- | --- | --- |
| Two entries: `row_no <= 2` | 101, 102 | 201, 202 | 4 |
| Competition rank at most 2: `score_rank <= 2` | 101, 102, 103 | 201, 202 | 5 |
| Two distinct scores: `score_dense_rank <= 2` | 101, 102, 103 | 201, 202, 203 | 6 |

South's entry 203 exposes the difference: score 88 has competition rank 3 but dense rank 2. “Include ties” alone doesn't settle which result you want.

To select two entries per division, replace the query after the original `entries` CTE with this whole block. Both divisions have at least two entries; a smaller division would return fewer than two.

```sql
, ranked AS (
  SELECT entry_id, division, score,
    ROW_NUMBER() OVER (
      PARTITION BY division ORDER BY score DESC, entry_id ASC
    ) AS row_no,
    RANK() OVER (
      PARTITION BY division ORDER BY score DESC
    ) AS score_rank,
    DENSE_RANK() OVER (
      PARTITION BY division ORDER BY score DESC
    ) AS score_dense_rank
  FROM entries
)
SELECT * FROM ranked
WHERE row_no <= 2
ORDER BY division, row_no;
```

This is the **two-CTE version**: `entries` supplies the data, and `ranked` calculates all three rankings. Keep both CTEs unchanged whenever a later block says to use the two-CTE version; replace only its final `SELECT` query.

For competition ranks through second place, use the two-CTE version with:

```sql
SELECT * FROM ranked
WHERE score_rank <= 2
ORDER BY division, score DESC, entry_id;
```

For the two highest distinct scores, use the two-CTE version with:

```sql
SELECT * FROM ranked
WHERE score_dense_rank <= 2
ORDER BY division, score DESC, entry_id;
```

Each result includes the score and ranking columns from the full comparison table. North's two tied entries survive both score-rank filters, while the row-count filter selects ID 102 and drops 103.

The outer `WHERE` can filter the ranking columns because `ranked` has already calculated them. A `WHERE` at the same query level as the window expressions filters their input and can't use their new aliases. GoogleSQL's [query evaluation reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#qualify_clause) also documents `QUALIFY` for filtering window results. The examples here consistently use a CTE and outer `WHERE`.

## Put the tie-breaker in the right place

Our `ROW_NUMBER` uses `ORDER BY score DESC, entry_id ASC` to decide which tied entry gets each position. Removing the ID from that window order leaves the score ties unresolved. North's selected second entry could be 102 or 103. GoogleSQL documents this as [nondeterministic numbering within peers](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/numbering_functions#row_number).

Adding `entry_id` only to the final display sort doesn't repair the selection. That sort arranges rows with numbers already assigned. The selection rule belongs inside the `ROW_NUMBER` window.

Putting the ID inside `RANK`, however, changes what counts as a tie. Use the original `entries` CTE alone, replacing the query after it with:

```sql
SELECT entry_id, division, score,
  RANK() OVER (
    PARTITION BY division ORDER BY score DESC, entry_id ASC
  ) AS changed_rank
FROM entries
ORDER BY division, score DESC, entry_id;
```

North now has ranks `1, 2, 3, 4, 5`; South has `1, 2, 3, 4`. IDs 102 and 103 still have equal scores, but their `(score, entry_id)` pairs differ. So do those of 201 and 202. They no longer share ranks.

For this worksheet's shared score ranks, keep only `score DESC` inside `RANK` and `DENSE_RANK`. Use the unique ID inside `ROW_NUMBER` for the specified selection rule and in the outer `ORDER BY` for stable display. Those orders serve different purposes.

## Removing the partition changes the competition

Use the original `entries` CTE alone with:

```sql
SELECT entry_id, division, score,
  RANK() OVER (ORDER BY score DESC) AS global_rank
FROM entries
ORDER BY score DESC, entry_id;
```

IDs 201 and 202 share global rank 1. North's winner, 101, has global rank 3; South's 203 has rank 6 because five entries have higher scores.

Omitting `PARTITION BY` puts all input rows in one partition, as the [GoogleSQL window reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/window-function-calls) specifies. Sorting the output by division would rearrange these global ranks without recalculating them within divisions.

## Exclude an entry or just hide it

Suppose entry 101 is excluded from the competition. Use the original `entries` CTE alone with this query to rank the remaining entries against each other:

```sql
SELECT entry_id, division, score,
  RANK() OVER (
    PARTITION BY division ORDER BY score DESC
  ) AS score_rank
FROM entries
WHERE entry_id <> 101
ORDER BY division, score DESC, entry_id;
```

Now suppose 101 must be hidden from the report while everyone keeps their original rank. Return to the two-CTE version, which ranks all nine entries, and replace its final query with:

```sql
SELECT entry_id, division, score, score_rank
FROM ranked
WHERE entry_id <> 101
ORDER BY division, score DESC, entry_id;
```

The North results differ; South is unchanged:

| entry_id | score | Excluded before ranking | Hidden after ranking |
| --- | --- | --- | --- |
| 102 | 92 | 1 | 2 |
| 103 | 92 | 1 | 2 |
| 104 | 85 | 3 | 4 |
| 105 | 70 | 4 | 5 |

In the first query, 102 and 103 have no remaining competitor above them. In the second, their ranks still account for 101. The [PostgreSQL window tutorial](https://www.postgresql.org/docs/18/tutorial-window.html) explains that rows removed by the input `WHERE` aren't visible to window functions.

Choose the filter's location from the report requirement. For another case where filter placement changes the row set, try [LEFT JOIN: ON vs WHERE](/blog/sql-left-join-on-vs-where/).

## Find every entry at the second distinct score

Use the two-CTE version with:

```sql
SELECT entry_id, division, score, score_dense_rank
FROM ranked
WHERE score_dense_rank = 2
ORDER BY division, entry_id;
```

The checked result is:

| entry_id | division | score | score_dense_rank |
| --- | --- | --- | --- |
| 102 | North | 92 | 2 |
| 103 | North | 92 | 2 |
| 203 | South | 88 | 2 |

Filtering competition rank 2 would miss South entirely: its rank sequence is `1, 1, 3, 4`. Clarify “second highest score” when someone could mean the second entry rather than the second distinct value. This query returns every entry at that second distinct value.

## Six exercises before you look at the answers

Use the original nine entries. Write the selected IDs or ranks, plus the rule that explains them.

1. There are two available places per division. Ties go to the smaller ID. Which ranking and filter select the entries?
2. The report keeps every entry with competition rank at most 2. How many rows appear in each division, and why?
3. The report keeps the two highest distinct scores per division. Which extra entry appears compared with exercise 2?
4. Someone adds `entry_id` inside `RANK` to stabilize display. What happens to IDs 102 and 103? How should the query be repaired?
5. Remove `PARTITION BY division`. What are the competition ranks of IDs 101 and 203? Does sorting the output by division restore their local ranks?
6. Exclude entry 101 before ranking, then compare hiding it afterward. What ranks do North's two scores of 92 receive in each case?

### Answers and the mistake each one catches

1. Use `row_no <= 2` with `ROW_NUMBER` ordered by score descending and ID ascending. North returns 101 and 102; South returns 201 and 202. Entry 103 loses the ID tie-breaker.
2. North returns three rows: 101, 102, 103. South returns two: 201, 202. North shares second place; South shares first and skips second. `RANK` thresholds don't promise a fixed row count.
3. ID 203 appears because 88 is South's second distinct score. Use `score_dense_rank <= 2`. Both tied 99s belong to its first score group.
4. Their ranks become 2 and 3. Remove the ID from the `RANK` window order and retain it in the outer sort. Both entries regain score rank 2.
5. Their global ranks are 3 and 6. A display sort doesn't change the ranking population; restore `PARTITION BY division` to calculate local ranks.
6. Both receive rank 1 when 101 is excluded first, and rank 2 when it is hidden afterward. The first query changes who is ranked; the second changes who is displayed.

If one mistake keeps recurring, turn that decision into a small retrieval prompt:

| Prompt | Answer to recall |
| --- | --- |
| Two first-place ties: what rank comes next? | `RANK`: 3; `DENSE_RANK`: 2. |
| Can outer sorting fix tied `ROW_NUMBER` selection? | No. Put the required tie-breaker inside its window order. |
| Which filter finds every entry at the second distinct score? | `score_dense_rank = 2`, after ranking. |

Try answering with the entry IDs before rerunning the query. That makes a missed tie or changed population easier to spot than recalling a definition alone.

To practice ranking choices alongside other SQL interview tasks, use the [PostgreSQL SQL Interview Problems deck](/catalog/packages/postgresql-sql-interview-problems/), with 63 problems and PostgreSQL query solutions. Decide how ties should behave before choosing a window function and revealing the answer.

*This article was researched and written with substantial AI assistance. Its nine deterministic query variants were executed in BigQuery; the illustration is AI-generated.*
