---
title: "SQL LEFT JOIN: ON vs WHERE with Checked Results"
description: "See which rows survive a LEFT JOIN filter in ON or WHERE. Run a four-customer example, diagnose OR IS NULL, and count matching orders correctly."
date: "2026-10-17"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/31de3c4badb52027979212df13b2a86d84f9845f233c86c45ae0d74b4de269d0.webp"
keywords:
  - "SQL LEFT JOIN ON vs WHERE"
  - "LEFT JOIN filter"
  - "LEFT JOIN WHERE IS NULL"
  - "COUNT after LEFT JOIN"
---

Ben has one pending order. Cy has no orders. A report of every customer and their paid orders should keep both people, with empty order columns. Move the paid-order condition from `ON` to `WHERE`, and both disappear. Add `OR order_id IS NULL`, and only Cy comes back.

The difference between `ON` and `WHERE` in a SQL `LEFT JOIN` starts with two decisions: which orders qualify as matches, and which customers belong in the report. Those decisions need different conditions. This four-customer example lets you trace both, including the customer who has two matching orders.

![An orchard volunteer selects red apples beside four wicker baskets, keeping two empty and setting a green apple aside](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/31de3c4badb52027979212df13b2a86d84f9845f233c86c45ae0d74b4de269d0.webp)

## Run the small example

The data is fictional. Ada has one paid and one pending order, Ben has one pending order, Cy has none, and Dee has two paid orders. Every actual `order_id` is unique and non-null in this example.

This complete read-only query runs in BigQuery using GoogleSQL. The `WITH` section defines two common table expressions, or CTEs; it doesn't create permanent tables. Customers are on the left of the join, and orders are on the right.

```sql
WITH customers AS (
  SELECT 1 AS customer_id, 'Ada' AS customer_name UNION ALL
  SELECT 2, 'Ben' UNION ALL
  SELECT 3, 'Cy' UNION ALL
  SELECT 4, 'Dee'
), orders AS (
  SELECT 101 AS order_id, 1 AS customer_id, 'paid' AS status UNION ALL
  SELECT 102, 1, 'pending' UNION ALL
  SELECT 103, 2, 'pending' UNION ALL
  SELECT 104, 4, 'paid' UNION ALL
  SELECT 105, 4, 'paid'
)
SELECT c.customer_id, c.customer_name, o.order_id, o.status
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.customer_id
 AND o.status = 'paid'
ORDER BY c.customer_id, o.order_id;
```

The checked result has five rows:

| customer_id | customer_name | order_id | status |
| --- | --- | --- | --- |
| 1 | Ada | 101 | paid |
| 2 | Ben | NULL | NULL |
| 3 | Cy | NULL | NULL |
| 4 | Dee | 104 | paid |
| 4 | Dee | 105 | paid |

To run a later SQL block, keep the `WITH` section through the closing `)` of `orders`. Replace the **final query**, beginning with `SELECT c.customer_id` after that closing parenthesis and ending at the semicolon, with the later block. Keep all the `SELECT` statements inside the CTEs.

Run each resulting statement separately. The CTE names belong to that statement; running the `WITH` section on its own won't make tables available to the next query.

The nine query variants and their outputs were checked in cloud BigQuery on October 17, 2026. The exercise concerns which rows survive; it doesn't compare query speed.

## ON decides which orders qualify

In the first query, an order matches only when its customer ID matches and its status is `paid`. Ben's pending order fails that condition. Cy has no order to match. Ben and Cy therefore each get one row with NULL order columns. Dee gets two rows because two orders qualify.

GoogleSQL's [LEFT JOIN rules](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#left_join) preserve each left-side row during the join, supplying NULL right-side columns when it has no match. Preservation doesn't promise one output row per customer. [PostgreSQL's join documentation](https://www.postgresql.org/docs/18/queries-table-expressions.html) also explains that each matching pair produces a row.

For comparison, remove only `AND o.status = 'paid'` from the first query. The checked unfiltered join returns six rows:

| customer_id | customer_name | order_id | status |
| --- | --- | --- | --- |
| 1 | Ada | 101 | paid |
| 1 | Ada | 102 | pending |
| 2 | Ben | 103 | pending |
| 3 | Cy | NULL | NULL |
| 4 | Dee | 104 | paid |
| 4 | Dee | 105 | paid |

Keep track of Ben's order `103`. It explains why adding `OR IS NULL` later won't bring him back.

## WHERE decides which joined rows remain

Now move the paid-order condition to `WHERE`:

```sql
SELECT c.customer_id, c.customer_name, o.order_id, o.status
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.customer_id
WHERE o.status = 'paid'
ORDER BY c.customer_id, o.order_id;
```

The checked result has three rows:

| customer_id | customer_name | order_id | status |
| --- | --- | --- | --- |
| 1 | Ada | 101 | paid |
| 4 | Dee | 104 | paid |
| 4 | Dee | 105 | paid |

Ben's joined row has status `pending`, so the condition is FALSE. Cy's row has NULL status, so the equality condition is UNKNOWN, represented as NULL in GoogleSQL. Neither passes: [WHERE retains only TRUE conditions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#where_clause).

For this paid-status condition, the surviving rows are the same ones an inner join on customer ID and paid status would produce. The result fits a report that only needs paid orders. It loses customers needed by an every-customer report.

Other conditions behave differently. `IS NULL`, for example, can deliberately keep unmatched rows. Decide what the particular predicate does before saying that a `WHERE` clause “turns a left join into an inner join.”

Reasoning through the join result and then the filter explains the query's meaning. It doesn't describe the database's physical execution order. If UNKNOWN is the confusing part, the [SQL NULL practice lesson](/blog/sql-null-not-in-practice/) separates predicate values from the rows that survive.

## Why OR IS NULL still loses Ben

A tempting repair is to keep paid orders or rows with no order ID:

```sql
SELECT c.customer_id, c.customer_name, o.order_id, o.status
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.customer_id
WHERE o.status = 'paid'
   OR o.order_id IS NULL
ORDER BY c.customer_id, o.order_id;
```

The checked result has four rows:

| customer_id | customer_name | order_id | status |
| --- | --- | --- | --- |
| 1 | Ada | 101 | paid |
| 3 | Cy | NULL | NULL |
| 4 | Dee | 104 | paid |
| 4 | Dee | 105 | paid |

Cy passes because `o.order_id IS NULL` is TRUE. Ben's actual order has ID `103` and status `pending`: both sides of the OR are FALSE.

Ben already matched the join's customer-ID condition, so the join supplied order `103`. He didn't receive a row of NULL order columns. Filtering away his pending order doesn't make the outer join generate a replacement. To preserve every customer while attaching only paid orders, put the paid-order condition in `ON`, as in the first query.

## No orders and no paid orders are different reports

Combining a `LEFT JOIN` with `WHERE ... IS NULL` can find customers without a match. The `ON` conditions define what kind of match you're ruling out.

To find customers with **no paid orders**, qualify paid orders in `ON`, then retain the rows without a matched order ID:

```sql
SELECT c.customer_id, c.customer_name
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.customer_id
 AND o.status = 'paid'
WHERE o.order_id IS NULL
ORDER BY c.customer_id;
```

**Checked result: `(2, Ben), (3, Cy)`.** Ben has an order, but none that qualifies as paid. Cy has no orders of any status.

To find customers with **no orders at all**, remove the status condition:

```sql
SELECT c.customer_id, c.customer_name
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL
ORDER BY c.customer_id;
```

**Checked result: `(3, Cy)` only.** Ben's order `103` now counts as a match.

The NULL check works here because every actual order has a non-null `order_id`. In your own schema, choose a right-side column guaranteed to be non-null for a match. Testing a nullable field such as an optional order note could also select real matched orders.

## COUNT after LEFT JOIN can count the unmatched row

Use the paid-qualified join and group by customer:

```sql
SELECT
  c.customer_id,
  COUNT(*) AS joined_rows,
  COUNT(o.order_id) AS paid_orders
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.customer_id
 AND o.status = 'paid'
GROUP BY c.customer_id
ORDER BY c.customer_id;
```

The checked counts are:

| customer_id | joined_rows | paid_orders |
| --- | --- | --- |
| 1 | 1 | 1 |
| 2 | 1 | 0 |
| 3 | 1 | 0 |
| 4 | 2 | 2 |

Ben and Cy each contribute one joined row. `COUNT(*)` counts that row, even though its order columns are NULL. `COUNT(o.order_id)` counts non-null order IDs, giving each of them zero paid orders. The [GoogleSQL COUNT reference](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/aggregate_functions#count) defines these two forms.

Dee contributes two real orders. Grouping creates the per-customer report; the left join alone doesn't collapse those matches into one row. Counting a nullable order field instead of `order_id` would count qualifying orders with that field filled in, which may be fewer than the total qualifying orders.

## Predict the rows before running them

Use the same four customers and five orders. Write the output IDs and a short reason before checking the answers.

1. The report must show every customer, attaching paid orders where available. Should the status condition go in `ON` or `WHERE`? How many rows should the result have?
2. A teammate adds `OR o.order_id IS NULL` to the `WHERE o.status = 'paid'` query. Which customer is still missing, and which actual order explains the failure?
3. The requirement changes from “no paid orders” to “no orders.” Which condition must leave the no-paid-orders query, and which customer leaves its result?
4. In the grouped query, what are Dee's two counts? What are Ben's? Explain why Ben's `COUNT(*)` isn't zero.
5. The report must exclude customer `2` entirely while keeping other customers and their paid orders. Compare the next query with a version that removes `AND c.customer_id <> 2` from `ON` and adds `WHERE c.customer_id <> 2` before `ORDER BY`. Does either version retain Ben?

```sql
SELECT c.customer_id, o.order_id
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.customer_id
 AND o.status = 'paid'
 AND c.customer_id <> 2
ORDER BY c.customer_id, o.order_id;
```

### Answers and reasons

1. **Put it in `ON`; expect five rows.** Ada contributes `101`, Ben and Cy each contribute a row with NULL order columns, and Dee contributes `104` and `105`. Four customers don't imply four joined rows.
2. **Ben is still missing because of order `103`.** It matches on customer ID, then fails both parts of the filter. Cy gets a NULL order ID because Cy has no matching order at all.
3. **Remove `AND o.status = 'paid'` from `ON`; Ben leaves.** The result changes from customers `2, 3` to customer `3`. Ben has an order even though it isn't paid.
4. **Dee: `2, 2`. Ben: `1, 0`.** Ben's preserved row exists in the join result, but its order ID is NULL. The counts measure different things.
5. **The `ON` version retains Ben; the `WHERE` version excludes him.** The checked `ON` output is `(1,101), (2,NULL), (3,NULL), (4,104), (4,105)`. The checked `WHERE` output is `(1,101), (3,NULL), (4,104), (4,105)`. Putting the customer condition in `ON` blocks matches for Ben while preserving his customer row. Put it in `WHERE` to exclude him from the report.

The fifth exercise is why “put every filter in ON” is too broad. State which customers belong in the report separately from which orders qualify to accompany them.

## Keep a card for the specific mistake

If one distinction caught you, save it as a small recall prompt. You don't need a card for every query.

| Card front | Card back |
| --- | --- |
| Ben has only a pending order. A customer-ID LEFT JOIN uses `WHERE status = 'paid' OR order_id IS NULL`. Does Ben survive? | No. His real pending order matched, then failed both conditions. No NULL replacement row is generated. |
| Paid-order LEFT JOIN: a customer has no qualifying orders. With non-null IDs on actual orders, what do `COUNT(*)` and `COUNT(o.order_id)` return for that customer's group? | `1` and `0`: one preserved row, zero matched order IDs. |
| A LEFT JOIN checks for `order_id IS NULL` in WHERE. What determines whether it finds “no orders” or “no paid orders”? | The ON condition: all orders qualify in the first case; only paid orders qualify in the second. The marker must be non-null on real matches. |

The [guide to choosing flashcard material](/blog/what-should-go-on-a-flashcard/) covers selecting a narrow recall target. After checking a card, return to the query and explain Ben, Cy, and Dee without looking at the tables. Their cases test missing qualifying matches, missing orders, and multiple matches.

*AI assisted substantially with research, drafting, exercise design, and editorial review; the illustration is AI-generated. The nine query variants described here were executed with fictional data in cloud BigQuery using GoogleSQL on October 17, 2026. PostgreSQL 18 documentation provided a documentation cross-check, not a PostgreSQL runtime test. No classroom trial, learner study, or human editorial review is claimed.*
