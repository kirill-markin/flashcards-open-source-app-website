---
title: "SQL NULL and NOT IN Practice: Predict Which Rows Survive"
description: "Practice SQL NULL, NOT IN, and NOT EXISTS with a five-row dataset, checked query results, missing-value policies, and explained exercises."
date: "2026-10-14"
image: "/blog/sql-null-not-in-practice.png"
keywords:
  - "SQL NULL practice"
  - "NOT IN vs NOT EXISTS with NULL"
  - "SQL three-valued logic"
  - "NOT IN empty subquery"
  - "SQL NULL filtering"
---

A blocked-code list containing `20` and `NULL` can make a `NOT IN` filter return zero rows, even when the candidates include `10`, `30`, and `40`. Use `NOT EXISTS` with an ordinary equality comparison, and those codes return. So does the candidate with a missing code. That extra row is easy to overlook.

This SQL NULL practice uses five candidates throughout. Predict each condition's result first, then the surviving row IDs. The goal is to choose a query that expresses what missing codes mean in your task.

![A garden volunteer compares a closed opaque blue tin with a visibly empty clear glass jar](/blog/sql-null-not-in-practice.png)

## Five rows, two blocked codes

`row_id` identifies a candidate. `code` is the integer value being checked; `NULL` means its value is missing. It isn't a zero or a special code. The blocked list contains one known code and one missing code.

| Candidate `row_id` | `code` |
| --- | --- |
| 1 | 10 |
| 2 | 20 |
| 3 | 30 |
| 4 | NULL |
| 5 | 40 |

All examples concern **scalar integers**. Comparisons involving composite rows, arrays, floating-point special values, or text collations need their own rules.

The following read-only query creates the demonstration data with common table expressions, or CTEs. It evaluates nine predicates—the conditions you could use in `WHERE`—without filtering away their results. You can run it in BigQuery using GoogleSQL.

```sql
WITH candidates AS (
  SELECT 1 AS row_id, 10 AS code UNION ALL
  SELECT 2, 20 UNION ALL
  SELECT 3, 30 UNION ALL
  SELECT 4, CAST(NULL AS INTEGER) UNION ALL
  SELECT 5, 40
), blocked AS (
  SELECT 20 AS code UNION ALL
  SELECT CAST(NULL AS INTEGER)
)
SELECT
  c.row_id,
  c.code,
  c.code = CAST(NULL AS INTEGER) AS equals_null,
  c.code IS NULL AS is_null,
  c.code <> 20 AS differs_from_20,
  c.code NOT IN (
    SELECT b.code FROM blocked AS b
  ) AS raw_not_in,
  c.code NOT IN (
    SELECT b.code FROM blocked AS b WHERE b.code IS NOT NULL
  ) AS cleaned_not_in,
  NOT EXISTS (
    SELECT 1 FROM blocked AS b WHERE b.code = c.code
  ) AS no_equal_match,
  NOT EXISTS (
    SELECT 1 FROM blocked AS b
    WHERE b.code IS NOT DISTINCT FROM c.code
  ) AS no_null_equal_match,
  c.code NOT IN (
    SELECT b.code FROM blocked AS b WHERE 1 = 0
  ) AS empty_not_in,
  c.code IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM blocked AS b WHERE b.code = c.code
  ) AS known_unblocked
FROM candidates AS c
ORDER BY c.row_id;
```

The shorter queries below reuse these CTEs. To run a fragment, copy the opening `WITH candidates ... , blocked ...` portion above and append the fragment's `SELECT`. A CTE belongs to one statement; running the first query doesn't create permanent tables for the next one.

## UNKNOWN survives negation, but not WHERE

SQL predicates can return `TRUE`, `FALSE`, or `UNKNOWN`. A Boolean `NULL` represents that third state. For these integer examples, ordinary comparisons involving a NULL return UNKNOWN, including a comparison of two NULLs. The missing value doesn't give the comparison enough information to decide TRUE or FALSE. Use `IS NULL` to test for a missing value, as the [PostgreSQL comparison documentation](https://www.postgresql.org/docs/18/functions-comparison.html) explains.

In the executed BigQuery demonstration, an initial comparison to the bare literal `NULL` was rejected; the query above uses `CAST(NULL AS INTEGER)` to make its type explicit. The cast makes the comparison runnable. It doesn't turn equality into a missing-value test.

Keep these combinations handy:

| Expression | Result |
| --- | --- |
| `NOT UNKNOWN` | UNKNOWN |
| `TRUE AND UNKNOWN` | UNKNOWN |
| `FALSE AND UNKNOWN` | FALSE |
| `TRUE OR UNKNOWN` | TRUE |
| `FALSE OR UNKNOWN` | UNKNOWN |

These are part of [SQL's three-valued logical rules](https://www.postgresql.org/docs/18/functions-logical.html). If you're comfortable with the [two-valued AND, OR, and NOT lesson](/blog/truth-values-conjunction-disjunction/), the extra state is the change to watch here.

**`WHERE` retains only TRUE.** Both FALSE and UNKNOWN remove the row, as the [GoogleSQL query syntax reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#where_clause) specifies. The same empty output can therefore hide different predicate results.

## The checked matrix

Before reading the matrix, predict `raw_not_in` and `no_equal_match` for rows 1, 2, and 4. Those three rows expose the main differences.

Here is the output of the nine-predicate query, transposed so each predicate has a row. `T` means TRUE, `F` means FALSE, and `U` means UNKNOWN, returned as a Boolean NULL. The last column gives the IDs that would pass a `WHERE` using that predicate.

| Predicate alias | Row 1: 10 | Row 2: 20 | Row 3: 30 | Row 4: NULL | Row 5: 40 | Surviving IDs |
| --- | --- | --- | --- | --- | --- | --- |
| `equals_null` | U | U | U | U | U | none |
| `is_null` | F | F | F | T | F | 4 |
| `differs_from_20` | T | F | T | U | T | 1, 3, 5 |
| `raw_not_in` | U | F | U | U | U | none |
| `cleaned_not_in` | T | F | T | U | T | 1, 3, 5 |
| `no_equal_match` | T | F | T | T | T | 1, 3, 4, 5 |
| `no_null_equal_match` | T | F | T | F | T | 1, 3, 5 |
| `empty_not_in` | T | T | T | T | T | 1, 2, 3, 4, 5 |
| `known_unblocked` | T | F | T | F | T | 1, 3, 5 |

Notice row 4. Cleaning NULLs out of the blocked list still gives UNKNOWN for its `NOT IN` comparison against `20`. Ordinary-equality `NOT EXISTS` gives TRUE for that candidate. Removing right-hand NULLs alone doesn't make the two predicates equivalent.

## Why NOT IN loses the unmatched candidates

For this blocked list, the logical expansion of `code NOT IN (20, NULL)` is:

```text
(code <> 20) AND (code <> NULL)
```

For code `10`, that becomes TRUE AND UNKNOWN: UNKNOWN. It doesn't pass `WHERE`.

For code `20`, it becomes FALSE AND UNKNOWN: FALSE. The known match is enough to reject the candidate, despite the NULL in the list. “A NULL makes every `NOT IN` result unknown” is too broad.

The [PostgreSQL subquery documentation](https://www.postgresql.org/docs/18/functions-subquery.html#FUNCTIONS-SUBQUERY-NOTIN) describes this behavior. For this scalar case, check three things: whether the right-hand query is empty, whether a known equal value exists, and whether any remaining comparison is unknown. The [GoogleSQL IN operator reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators#in_operator) also states these rules.

## Choose what a missing candidate means

Before changing the query, write the intended policy in a sentence. The three policies below use the same data. Two return the same IDs here, but make different decisions when the blocked list changes.

### Keep candidates with no known equal blocked code

```sql
SELECT c.row_id, c.code
FROM candidates AS c
WHERE NOT EXISTS (
  SELECT 1
  FROM blocked AS b
  WHERE b.code = c.code
)
ORDER BY c.row_id;
```

**Surviving IDs: `1, 3, 4, 5`.** For row 4, neither `20 = NULL` nor `NULL = NULL` is TRUE. The inner `WHERE` returns no row, so `NOT EXISTS` is TRUE. It asks whether a matching row exists; it doesn't establish that the candidate's code is known or safe.

When comparing `NOT IN` vs `NOT EXISTS` with NULL, keep the inner comparison separate from the existence test. The subquery's equality can be UNKNOWN, while `EXISTS` itself always returns TRUE or FALSE. [GoogleSQL documents that distinction](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators#exists_operator).

### Require a known candidate code too

```sql
SELECT c.row_id, c.code
FROM candidates AS c
WHERE c.code IS NOT NULL
  AND NOT EXISTS (
    SELECT 1
    FROM blocked AS b
    WHERE b.code = c.code
  )
ORDER BY c.row_id;
```

**Surviving IDs: `1, 3, 5`.** The explicit guard rejects row 4 regardless of what's in the blocked list. This fits a policy such as “only assess candidates whose code is present.”

Filtering NULLs from the right-hand `NOT IN` subquery also gives `1, 3, 5` on this dataset. If that approach expresses your policy, keep the outer `c.code IS NOT NULL` guard too when missing candidates must always be excluded. The empty-set example below shows why.

### Treat two missing codes as a match

```sql
SELECT c.row_id, c.code
FROM candidates AS c
WHERE NOT EXISTS (
  SELECT 1
  FROM blocked AS b
  WHERE b.code IS NOT DISTINCT FROM c.code
)
ORDER BY c.row_id;
```

**Surviving IDs: `1, 3, 5`.** `IS NOT DISTINCT FROM` compares known integers by equality and treats two NULLs as matching. The missing blocked code now rejects the missing candidate code.

Use this only when your data meaning calls for that match. Two missing identifiers don't prove that two records identify the same thing. The [PostgreSQL null-safe comparison rules](https://www.postgresql.org/docs/18/functions-comparison.html) and [GoogleSQL operator reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators#is_distinct_from_operator) define the operator; choosing that policy is your task.

This query rejects a missing candidate only when the blocked list also contains a NULL. If you remove that blocked NULL, row 4 returns. The known-code guard in the previous query still rejects row 4. The same output on one dataset doesn't make those policies interchangeable.

## An empty subquery changes the answer

An empty result has zero rows. It isn't a result containing one row whose value is NULL.

```sql
SELECT c.row_id, c.code
FROM candidates AS c
WHERE c.code NOT IN (
  SELECT b.code
  FROM blocked AS b
  WHERE 1 = 0
)
ORDER BY c.row_id;
```

**All five IDs survive, including row 4.** There's no right-hand value to match any candidate. The executed matrix's `empty_not_in` column is TRUE for every row; GoogleSQL's [NOT IN rules](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/operators#in_operator) handle the empty set first.

This is why “a NULL candidate never passes `NOT IN`” is also too broad. If missing candidates must be rejected even when the blocked list is empty, express that with `c.code IS NOT NULL`.

To keep the policies straight, track just row 4 as the blocked result changes. This table follows the logical rules above; the last two columns change the original demonstration data.

| Does the missing candidate survive? | Blocked: `20, NULL` | Blocked: `20` only | Empty blocked result |
| --- | --- | --- | --- |
| Raw `NOT IN` | No: UNKNOWN | No: UNKNOWN | Yes: TRUE |
| Ordinary-equality `NOT EXISTS` | Yes | Yes | Yes |
| Known-code guard plus `NOT EXISTS` | No | No | No |
| Null-safe `NOT EXISTS` | No | Yes | Yes |

## Eight exercises before you look at the answers

Use the original five candidates and blocked codes `20, NULL`. Each numbered item is a separate task. For a query fragment, prepend the same CTE definitions. Write the surviving IDs and explain row 4; where requested, give the predicate value too.

1. Compare `WHERE c.code = CAST(NULL AS INTEGER)` with `WHERE c.code IS NULL`. Which IDs pass each filter?
2. A teammate says the raw `NOT IN` predicate is UNKNOWN for every row because the blocked list contains NULL. Give row 2's actual predicate value and explain the complete filtered result.
3. Compare `cleaned_not_in` and `no_equal_match` from the matrix. Which candidate makes their filtered results differ, and why?
4. The requirement says “exclude candidates with missing codes; exclude known blocked codes.” Choose the query in the policy section that states both conditions explicitly. What does it return?
5. Replace the inner equality in ordinary `NOT EXISTS` with `IS NOT DISTINCT FROM`. Which candidate changes result, and what policy change caused it?
6. Make the blocked subquery empty with `WHERE 1 = 0`. Does the missing candidate pass `NOT IN`? Would the explicit known-code guard still reject it?
7. Diagnose this attempted repair:

   ```sql
   SELECT c.row_id
   FROM candidates AS c
   WHERE c.code NOT IN (SELECT b.code FROM blocked AS b)
      OR c.code IS NULL
   ORDER BY c.row_id;
   ```

   Does it keep all candidates without a known blocked code?

8. Predict the filtered result, including what happens to row 4:

   ```sql
   SELECT c.row_id
   FROM candidates AS c
   WHERE c.code >= 30
     AND c.code NOT IN (
       SELECT b.code FROM blocked AS b WHERE b.code IS NOT NULL
     )
   ORDER BY c.row_id;
   ```

### Answers with reasons

1. **Equality returns no rows; `IS NULL` returns `4`.** Equality to the typed NULL is UNKNOWN for every candidate, including the missing one. `IS NULL` tests for missingness directly.
2. **Row 2 is FALSE; the query returns no rows.** Code `20` has a known equal blocked value. The other candidates have UNKNOWN results. None is TRUE, so none passes `WHERE`.
3. **Row 4 causes the difference.** Cleaned `NOT IN` returns `1, 3, 5`; ordinary-equality `NOT EXISTS` returns `1, 3, 4, 5`. NULL compared with `20` is UNKNOWN, but the inner equality finds no TRUE match for the missing candidate.
4. **The guarded `NOT EXISTS` query returns `1, 3, 5`.** `IS NOT NULL` excludes the missing candidate explicitly. The correlated subquery excludes the known matching code `20`.
5. **Row 4 changes from TRUE to FALSE; the surviving IDs become `1, 3, 5`.** The NULL in the blocked list now matches the candidate's NULL. That treats missing codes as one matching category.
6. **Row 4 passes the unguarded empty-set `NOT IN`; the guard rejects it.** All five rows pass the unguarded predicate. Combining it with `c.code IS NOT NULL` leaves `1, 2, 3, 5`. There are no known blocked codes in the empty result, so row 2 returns too.
7. **Only `4` survives.** For row 4, UNKNOWN OR TRUE is TRUE. For codes `10`, `30`, and `40`, UNKNOWN OR FALSE stays UNKNOWN. Code `20` gives FALSE OR FALSE. Adding `OR IS NULL` admits the missing code but leaves the other unmatched codes excluded.
8. **IDs `3, 5` survive.** Their known codes meet the bound and aren't in the cleaned blocked list. Rows 1 and 2 fail the bound; row 4 produces UNKNOWN for both comparisons, so UNKNOWN AND UNKNOWN doesn't pass `WHERE`.

## Save the reason you missed a row

After checking an answer, keep a narrow prompt for the mistake. Include enough data on the front to make the answer unambiguous.

| Card front | Card back |
| --- | --- |
| Scalar integer `10 NOT IN (20, NULL)`: predicate value and WHERE outcome? | UNKNOWN; WHERE discards it. TRUE AND UNKNOWN remains UNKNOWN. |
| Does ordinary-equality `NOT EXISTS` keep a NULL candidate when blocked codes are `20, NULL`? | Yes. Neither equality is TRUE, so the inner query has no matching row. |
| A scalar NULL is checked with NOT IN against an empty subquery. What happens? | The predicate is TRUE. Add IS NOT NULL if your policy must exclude missing candidates. |

The [coding-interview flashcard guide](/blog/how-to-use-flashcards-for-coding-interviews/) covers keeping useful corrections from practice. You can put these prompts on paper or use front-and-back cards; the [getting started guide](/docs/getting-started/) explains the app path. Then change the blocked list and predict the rows again before running SQL. Keep both parts of your answer: the predicate value and whether `WHERE` retains it.

*This article was researched and written with AI assistance and edited through AI editorial passes. The nine matrix predicates and the two additional predicates in exercises 7 and 8 were executed over the five demonstration rows in cloud BigQuery using GoogleSQL on October 14, 2026, with synthetic data and no private tables. The other exercise answers apply those results and logical rules. PostgreSQL 18 documentation was used to cross-check scalar semantics; PostgreSQL execution and human review are not claimed.*
