---
title: "PostgreSQL COUNT FILTER vs CASE WHEN with Left Joins"
description: "Practice PostgreSQL COUNT FILTER and COUNT CASE WHEN in a runnable report. Count loans by status, keep branches with zero matches, and handle NULL fees."
date: "2026-11-21"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/05a01edce5f696c39cb5bd78995adf39a14bd2a1c7c2d3a422bcd8e74912ca81.webp"
keywords:
  - "PostgreSQL COUNT FILTER"
  - "COUNT CASE WHEN"
  - "SQL conditional aggregation"
  - "LEFT JOIN count zero"
---

Fir has zero loans and still needs a row in the library’s branch report. Cedar has four loans, including one with a missing status. The report needs to count that loan as unknown and show zero unknown loans for Fir.

In PostgreSQL, `COUNT(*) FILTER (WHERE condition)` counts the rows in a group for which the condition is true. Give each status count its own filter to show the totals side by side. That’s SQL conditional aggregation. For a `LEFT JOIN`, use `COUNT(loan_id)` when the filter can also match an unmatched row. An actual loan always has an ID. [PostgreSQL aggregate expression syntax](https://www.postgresql.org/docs/18/sql-expressions.html#SYNTAX-AGGREGATES)

![Two people read in library window seats, a third holds a closed book, and one seat is empty](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/05a01edce5f696c39cb5bd78995adf39a14bd2a1c7c2d3a422bcd8e74912ca81.webp)

## Set up four branches and six loans

Run this setup once in a fresh PostgreSQL session and use the same connection for the queries below. The temporary tables disappear when the session ends.

```sql
CREATE TEMP TABLE branches (
  branch_id integer PRIMARY KEY,
  name text NOT NULL
);

CREATE TEMP TABLE loans (
  loan_id integer PRIMARY KEY,
  branch_id integer NOT NULL,
  status text,
  fee integer
);

INSERT INTO branches (branch_id, name) VALUES
  (1, 'Cedar'),
  (2, 'Elm'),
  (3, 'Fir'),
  (4, 'Oak');

INSERT INTO loans (loan_id, branch_id, status, fee) VALUES
  (101, 1, 'returned', 0),
  (102, 1, 'open', NULL),
  (103, 1, 'returned', NULL),
  (104, 1, NULL, 2),
  (201, 2, 'open', 5),
  (401, 4, 'returned', NULL);
```

## Keep every branch with COUNT FILTER

The query starts from `branches` so it can form a group for every branch. Before you run it, predict the four counts for Cedar and Fir. Check which arguments the counts use.

```sql
SELECT
  b.name AS branch,
  COUNT(l.loan_id) AS loans,
  COUNT(*) FILTER (WHERE l.status = 'returned') AS returned,
  COUNT(*) FILTER (WHERE l.status = 'open') AS open,
  COUNT(l.loan_id) FILTER (WHERE l.status IS NULL) AS unknown
FROM branches AS b
LEFT JOIN loans AS l ON l.branch_id = b.branch_id
GROUP BY b.branch_id, b.name
ORDER BY b.branch_id;
```

| branch | loans | returned | open | unknown |
| --- | ---: | ---: | ---: | ---: |
| Cedar | 4 | 2 | 1 | 1 |
| Elm | 1 | 0 | 1 | 0 |
| Fir | 0 | 0 | 0 | 0 |
| Oak | 1 | 1 | 0 | 0 |

For Fir, the left join supplies one row with `NULL` in every `l` column. `COUNT(l.loan_id)` skips that row. The returned and open filters also skip it because comparing `NULL` to either status evaluates to unknown and a filter only accepts true. [PostgreSQL aggregate reference](https://www.postgresql.org/docs/18/functions-aggregate.html)

`l.status IS NULL` is true for both Cedar’s loan `104` and Fir’s unmatched row. Both pass the filter, and only Cedar’s row supplies an ID for `COUNT(l.loan_id)`. Try replacing `COUNT(l.loan_id)` with `COUNT(*)` in the `unknown` column. Fir’s result jumps to `1`. [More left join examples](/blog/sql-left-join-on-vs-where/)

## What happens when WHERE filters the whole report

Try adding `WHERE l.status = 'returned'` to the same report. Predict which branches survive and what Cedar’s total will become.

```sql
SELECT
  b.name AS branch,
  COUNT(l.loan_id) AS loans,
  COUNT(*) FILTER (WHERE l.status = 'returned') AS returned,
  COUNT(*) FILTER (WHERE l.status = 'open') AS open,
  COUNT(l.loan_id) FILTER (WHERE l.status IS NULL) AS unknown
FROM branches AS b
LEFT JOIN loans AS l ON l.branch_id = b.branch_id
WHERE l.status = 'returned'
GROUP BY b.branch_id, b.name
ORDER BY b.branch_id;
```

| branch | loans | returned | open | unknown |
| --- | ---: | ---: | ---: | ---: |
| Cedar | 2 | 2 | 0 | 0 |
| Oak | 1 | 1 | 0 | 0 |

`WHERE` removes joined rows before grouping. Elm and Fir lose every row, so their groups disappear. Cedar keeps its two returned loans, which now make up its entire total. A `FILTER` on the returned count limits that count alone. [PostgreSQL aggregate tutorial](https://www.postgresql.org/docs/18/tutorial-agg.html) · [Practice with GROUP BY and HAVING](/blog/sql-group-by-having-practice/)

## Write the same counts with CASE WHEN

`COUNT(CASE WHEN condition THEN 1 END)` gives `COUNT` a `1` when the condition is true and `NULL` otherwise. Since `COUNT(expression)` counts non-null values, this gives the same returned and open counts as the `FILTER` query. For missing statuses, use `THEN l.loan_id` so Fir’s unmatched row still produces a `NULL` for `COUNT` to skip.

```sql
SELECT
  b.name AS branch,
  COUNT(l.loan_id) AS loans,
  COUNT(CASE WHEN l.status = 'returned' THEN 1 END) AS returned,
  COUNT(CASE WHEN l.status = 'open' THEN 1 END) AS open,
  COUNT(CASE WHEN l.status IS NULL THEN l.loan_id END) AS unknown,
  COUNT(CASE WHEN l.status = 'returned' THEN 1 ELSE 0 END) AS else_zero
FROM branches AS b
LEFT JOIN loans AS l ON l.branch_id = b.branch_id
GROUP BY b.branch_id, b.name
ORDER BY b.branch_id;
```

| branch | loans | returned | open | unknown | else_zero |
| --- | ---: | ---: | ---: | ---: | ---: |
| Cedar | 4 | 2 | 1 | 1 | 4 |
| Elm | 1 | 0 | 1 | 0 | 1 |
| Fir | 0 | 0 | 0 | 0 | 1 |
| Oak | 1 | 1 | 0 | 0 | 1 |

The `else_zero` column counts every joined row. Both `1` and `0` contribute one to `COUNT`, so Fir’s unmatched row contributes one too. Omit `ELSE 0` in this pattern.

## Tell a recorded zero from a missing fee

A fee report can use the same return status filter for three aggregates. It counts returns, counts returns with a recorded fee, and adds up those fees. Compare loans `101`, `103`, and `401` in the setup before you run it.

```sql
SELECT
  b.name AS branch,
  COUNT(*) FILTER (WHERE l.status = 'returned') AS returned,
  COUNT(l.fee) FILTER (WHERE l.status = 'returned') AS recorded_fees,
  SUM(l.fee) FILTER (WHERE l.status = 'returned') AS recorded_fee_sum
FROM branches AS b
LEFT JOIN loans AS l ON l.branch_id = b.branch_id
GROUP BY b.branch_id, b.name
ORDER BY b.branch_id;
```

| branch | returned | recorded_fees | recorded_fee_sum |
| --- | ---: | ---: | ---: |
| Cedar | 2 | 1 | 0 |
| Elm | 0 | 0 | NULL |
| Fir | 0 | 0 | NULL |
| Oak | 1 | 0 | NULL |

Cedar has one recorded fee of `0` and one missing fee. Its subtotal of recorded fees is `0`. Oak has a return and no recorded fee, so its sum is `NULL`. Elm and Fir also have a `NULL` sum, with zero returns. The counts alongside the sum show what each branch’s result means. [PostgreSQL definitions of COUNT and SUM](https://www.postgresql.org/docs/18/functions-aggregate.html)

## Try two changes to the report

1. Count open loans with a missing fee for each branch. Predict the four counts.
2. Set the fee total to `0` when a branch has no returns. Keep `NULL` when it has returns and all their fees are missing. Would `COALESCE` on the fee sum give you those results?

### Answers

Cedar’s loan `102` is the only open loan with a missing fee. Fir’s unmatched row has a `NULL` fee and fails the open-status test. For the fee total, `COALESCE` would turn Oak’s missing sum into `0`. Use the return count to decide when to put a zero in the report.

```sql
WITH branch_report AS (
  SELECT
    b.branch_id,
    b.name AS branch,
    COUNT(*) FILTER (
      WHERE l.status = 'open' AND l.fee IS NULL
    ) AS open_missing_fee,
    COUNT(*) FILTER (WHERE l.status = 'returned') AS returned,
    SUM(l.fee) FILTER (WHERE l.status = 'returned') AS recorded_fee_sum
  FROM branches AS b
  LEFT JOIN loans AS l ON l.branch_id = b.branch_id
  GROUP BY b.branch_id, b.name
)
SELECT
  branch,
  open_missing_fee,
  CASE WHEN returned = 0 THEN 0 ELSE recorded_fee_sum END AS fee_total
FROM branch_report
ORDER BY branch_id;
```

| branch | open_missing_fee | fee_total |
| --- | ---: | ---: |
| Cedar | 1 | 0 |
| Elm | 0 | 0 |
| Fir | 0 | 0 |
| Oak | 0 | NULL |

## Two prompts to recall tomorrow

| Prompt | Answer |
| --- | --- |
| How do you count actual loans with missing statuses after a `LEFT JOIN`? | Use `COUNT(l.loan_id) FILTER (WHERE l.status IS NULL)`. The unmatched row passes the filter and `COUNT` skips its `NULL` ID. |
| Why does `COUNT(CASE WHEN condition THEN 1 ELSE 0 END)` count every input row? | Every row produces a non-null value. Omit `ELSE 0` so a false or unknown condition produces `NULL`. |

Answer from memory, check your answer, and try again tomorrow and a few days later. The 63-card English deck includes conditional counts that you can solve from a prompt and schema before revealing the query. [PostgreSQL SQL interview practice deck](/catalog/packages/postgresql-sql-interview-problems/)

*AI assisted with drafting and editing this article and creating the fictional exercise. The cover illustration is AI-generated.*
