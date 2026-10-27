---
title: "SQL ROWS vs RANGE: Running Totals and Missing Days"
description: "Practice SQL ROWS vs RANGE with checked queries, tied days, gaps, running totals, and filters that change which rows enter a window."
date: "2026-10-27"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/37eaebb993521a46c99728009dc45a7c4b6c24b1a1b33b23532ca4720a878fdf.webp"
keywords:
  - "SQL ROWS vs RANGE"
  - "SQL running total"
  - "SQL window frame practice"
  - "rolling sum SQL"
---

Ada's first event adds 10 points. One SQL running total below starts at 10; another starts at 30. Both calculations use the same events. Ada has a second event on that day, and one frame includes it in the first event's sum.

This SQL `ROWS` vs `RANGE` worksheet uses eight fictional events, repeated days, missing days, and a negative correction. `ROWS` counts positions in an ordered partition. Numeric-offset `RANGE` measures distance in the ordering values, so the same-day events can enter a frame together. Predict the event IDs in each sum before checking the answers.

![A gardener lays a wooden measuring lath beside closely spaced stepping stones, stopping before a farther stone](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/37eaebb993521a46c99728009dc45a7c4b6c24b1a1b33b23532ca4720a878fdf.webp)

## Keep the data small enough to trace

Each `event_id` is unique, and every field is non-null. `day_no` is an integer on one shared sequence of calendar days: day 4 is three days after day 1, even when no event appears on day 3. It isn't the position of an observed day. The `points` values are demonstration adjustments; `-5` subtracts five points.

| event_id | learner | day_no | points |
| --- | --- | --- | --- |
| 101 | Ada | 1 | 10 |
| 102 | Ada | 1 | 20 |
| 103 | Ada | 2 | -5 |
| 104 | Ada | 4 | 8 |
| 105 | Ada | 4 | 12 |
| 106 | Ada | 7 | 6 |
| 201 | Bo | 1 | 7 |
| 202 | Bo | 4 | 9 |

If you know basic `SELECT` and `SUM`, the new part is `OVER (...)`: it turns the sum into a window calculation for each event. `PARTITION BY learner` keeps Ada's and Bo's calculations separate. `ORDER BY` inside `OVER` sets the order within each learner's partition, and the **frame** selects which rows contribute to the current event's sum.

The final query `ORDER BY` controls how you see the output. It doesn't set the calculation's order. [PostgreSQL's window tutorial](https://www.postgresql.org/docs/18/tutorial-window.html) explains these separate roles.

The six query variants and displayed results were executed on October 27, 2026, using SQLite 3.54.1 through Python 3.14.7 on macOS 26.6.1, arm64. The numeric-day examples below are SQLite practice. They don't establish portable date or timestamp syntax across SQL engines.

## Make six predictions

For each prediction, write the contributing event IDs beside the sum. A correct number with the wrong frame still needs fixing. All six questions come before the answer key, so you can work through them without seeing the results.

### 1. Compare two running totals

Predict `default_total` and `event_total` for IDs **101** and **104**, then complete both columns. How many output rows will this statement return?

Run this complete read-only statement in SQLite. The `WITH` section defines a common table expression, or CTE: a named result that supplies the data for this statement. It doesn't create a permanent table.

```sql
WITH events(event_id, learner, day_no, points) AS (
  VALUES
    (101, 'Ada', 1, 10),
    (102, 'Ada', 1, 20),
    (103, 'Ada', 2, -5),
    (104, 'Ada', 4, 8),
    (105, 'Ada', 4, 12),
    (106, 'Ada', 7, 6),
    (201, 'Bo', 1, 7),
    (202, 'Bo', 4, 9)
)
SELECT event_id, learner, day_no, points,
  SUM(points) OVER (
    PARTITION BY learner ORDER BY day_no
  ) AS default_total,
  SUM(points) OVER (
    PARTITION BY learner ORDER BY day_no, event_id
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS event_total
FROM events
ORDER BY learner, day_no, event_id;
```

To run questions 2–6, copy the original `WITH events(...) AS (...)` section, including all eight `VALUES` rows and its closing `)`. Place the question's SQL block immediately after it, replacing the first query's entire final `SELECT` through its semicolon. Run each completed statement separately; a CTE is available only within its own statement.

### 2. Count events or measure days

At IDs **104**, **106**, and **202**, predict `last_three_events` and `last_three_days`. For ID 104, list the contributing IDs for each column.

```sql
SELECT event_id, learner, day_no, points,
  SUM(points) OVER (
    PARTITION BY learner ORDER BY day_no, event_id
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS last_three_events,
  SUM(points) OVER (
    PARTITION BY learner ORDER BY day_no
    RANGE BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS last_three_days
FROM events
ORDER BY learner, day_no, event_id;
```

### 3. Filter before calculating

Predict the surviving IDs and their `event_total` values. Decide whether Ada's first visible total includes days 1 and 2.

```sql
SELECT event_id, learner, day_no,
  SUM(points) OVER (
    PARTITION BY learner ORDER BY day_no, event_id
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS event_total
FROM events
WHERE day_no >= 4
ORDER BY learner, day_no, event_id;
```

### 4. Keep the history, show later events

The requirement is now: **calculate totals from the beginning, then display only day 4 onward**. Predict the totals and compare them with question 3.

For this block, the leading comma adds `totals` as a second CTE. Join it directly after the original `events` CTE's closing `)`, with no semicolon between them. The statement should begin with `WITH events(...) AS (...)`, continue with `, totals AS (...)`, and end with the `SELECT` below.

```sql
, totals AS (
  SELECT event_id, learner, day_no,
    SUM(points) OVER (
      PARTITION BY learner ORDER BY day_no, event_id
      ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS event_total
  FROM events
)
SELECT event_id, learner, day_no, event_total
FROM totals
WHERE day_no >= 4
ORDER BY learner, day_no, event_id;
```

### 5. Change the peers

This version leaves out the explicit frame but orders by both `day_no` and `event_id`. Predict whether it matches `default_total` or `event_total` from question 1. Explain what happened to Ada's same-day ties.

```sql
SELECT event_id, learner, day_no,
  SUM(points) OVER (
    PARTITION BY learner ORDER BY day_no, event_id
  ) AS unique_order_total
FROM events
ORDER BY learner, day_no, event_id;
```

### 6. Remove the window order

Predict `learner_total` for all eight events. Does the final `ORDER BY` turn this into a running total?

```sql
SELECT event_id, learner, day_no,
  SUM(points) OVER (PARTITION BY learner) AS learner_total
FROM events
ORDER BY learner, day_no, event_id;
```

## Check your frames and answers

### 1. The default includes same-day peers

| event_id | learner | day_no | points | default_total | event_total |
| --- | --- | --- | --- | --- | --- |
| 101 | Ada | 1 | 10 | 30 | 10 |
| 102 | Ada | 1 | 20 | 30 | 30 |
| 103 | Ada | 2 | -5 | 25 | 25 |
| 104 | Ada | 4 | 8 | 45 | 33 |
| 105 | Ada | 4 | 12 | 45 | 45 |
| 106 | Ada | 7 | 6 | 51 | 51 |
| 201 | Bo | 1 | 7 | 7 | 7 |
| 202 | Bo | 4 | 9 | 16 | 16 |

For this ordered `SUM`, SQLite's default is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, with no rows excluded. It includes the partition's beginning through the current row's last ordering peer. **Peers** have equal values for every expression in the window's `ORDER BY`. With only `day_no` there, Ada's two day-1 events share a frame. See [SQLite's frame specifications](https://sqlite.org/windowfunctions.html#frame_specifications).

At ID 101, `default_total` includes IDs **101 and 102**, so it is `10 + 20 = 30`. At ID 104, it includes **101–105**, including the other day-4 event: `10 + 20 - 5 + 8 + 12 = 45`.

The explicit `ROWS` frame follows the sequence defined by `day_no, event_id`. `UNBOUNDED PRECEDING` starts at Ada's first event; `CURRENT ROW` stops at the event being calculated. ID 101 includes just itself; ID 104 includes **101–104**, totaling 33.

Here the smaller ID comes first within a day. For real events, choose a tie-breaker that represents the required business order. `ROWS` alone doesn't settle an ordering tie, and sorting the final output by ID can't repair a tie left inside the window order.

The result still has **eight rows**. A frame determines calculation membership; it doesn't collapse events. If you need one output row per group, the [GROUP BY and HAVING worksheet](/blog/sql-group-by-having-practice/) covers that different operation.

### 2. Missing days make the difference visible

| event_id | learner | day_no | points | last_three_events | last_three_days |
| --- | --- | --- | --- | --- | --- |
| 101 | Ada | 1 | 10 | 10 | 30 |
| 102 | Ada | 1 | 20 | 30 | 30 |
| 103 | Ada | 2 | -5 | 25 | 25 |
| 104 | Ada | 4 | 8 | 23 | 15 |
| 105 | Ada | 4 | 12 | 15 | 15 |
| 106 | Ada | 7 | 6 | 26 | 6 |
| 201 | Bo | 1 | 7 | 7 | 7 |
| 202 | Bo | 4 | 9 | 16 | 9 |

At ID 104, the three-event frame contains **102, 103, 104**: `20 - 5 + 8 = 23`. The numeric-day frame covers day numbers **2 through 4**, inclusive. That contains **103, 104, 105**: `-5 + 8 + 12 = 15`. It includes the other day-4 peer even though that event appears later in the displayed output.

At ID 106, the last three events are **104, 105, 106**, totaling 26. The day interval is **5 through 7**; only **106** exists there, so the sum is 6. Bo's ID 202 similarly reaches ID 201 when counting events, but day 1 falls outside its day-2-through-4 interval.

`ROWS BETWEEN 2 PRECEDING AND CURRENT ROW` takes up to two earlier rows plus the current one. With this ascending integer order, the corresponding `RANGE` covers `day_no - 2` through `day_no`, inclusive. SQLite requires exactly one window ordering term for numeric-offset `RANGE`; keep `event_id` out of that window. [SQLite documents the boundary rules](https://sqlite.org/windowfunctions.html#frame_boundaries).

Neither frame creates rows for missing days. For this sum, an absent day supplies no values to add. That doesn't establish whether the real day had zero activity or unrecorded activity. A report needing one row per day must supply those days and choose how to represent the gaps. This matters especially for averages: averaging event values differs from averaging daily totals, and treating absent days as zero changes the daily denominator.

### 3 and 4. The same visible rows can carry different totals

Both queries return four events:

| event_id | learner | day_no | Question 3: filter before | Question 4: filter after |
| --- | --- | --- | --- | --- |
| 104 | Ada | 4 | 8 | 33 |
| 105 | Ada | 4 | 20 | 45 |
| 106 | Ada | 7 | 26 | 51 |
| 202 | Bo | 4 | 9 | 16 |

In question 3, `WHERE day_no >= 4` removes earlier events from the window's input. Ada's totals therefore start at 8, reach 20 after ID 105, and finish at 26.

Question 4 calculates the totals inside `totals` while the full history is available. The outer query then hides earlier events. Ada brings 25 points from days 1 and 2 into her first visible total: `25 + 8 = 33`. These are the queries' logical steps; the database can choose its physical execution plan.

Use question 3 for totals within the filtered period. Use question 4 for a later view of totals accumulated from the beginning. The [PostgreSQL tutorial explains filtering before window functions and using an outer query afterward](https://www.postgresql.org/docs/18/tutorial-window.html).

### 5 and 6. Ordering changes the frame's meaning

| event_id | learner | day_no | Question 5: unique_order_total | Question 6: learner_total |
| --- | --- | --- | --- | --- |
| 101 | Ada | 1 | 10 | 51 |
| 102 | Ada | 1 | 30 | 51 |
| 103 | Ada | 2 | 25 | 51 |
| 104 | Ada | 4 | 33 | 51 |
| 105 | Ada | 4 | 45 | 51 |
| 106 | Ada | 7 | 51 | 51 |
| 201 | Bo | 1 | 7 | 16 |
| 202 | Bo | 4 | 16 | 16 |

Question 5 matches `event_total` for this dataset. Every `(day_no, event_id)` pair is unique, so each event is its own peer group. The default remains a `RANGE` frame, but its current-row boundary now stops at a single event. Adding the ID changes peer membership; it doesn't switch the frame type. Question 2's offset frames still have different meanings. For an event-by-event cumulative sum, question 1's explicit `ROWS` frame makes the intention clear.

Question 6 has no window order and no explicit frame. Each sum covers the learner's full partition, producing 51 on every Ada row and 16 on every Bo row. The final sort only arranges those eight output rows. PostgreSQL's [window frame reference](https://www.postgresql.org/docs/18/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS) also explains defaults with and without a window order.

If you're working on position rather than accumulation, try the [ROW_NUMBER, RANK, and DENSE_RANK worksheet](/blog/sql-row-number-rank-dense-rank/). Ranking a tie and deciding which events enter a sum are separate query choices.

## Revisit the distinction you missed

After checking your work, cover the answer and reconstruct the frame. These three small cards target choices from the worksheet:

| Prompt | Answer |
| --- | --- |
| In this SQLite data, which IDs enter Ada's day-4 `RANGE BETWEEN 2 PRECEDING AND CURRENT ROW` frame? | 103, 104, 105. The inclusive day interval is 2–4, including both day-4 peers. |
| Ada's total should include all history, but the report should show day 4 onward. Where does the filter belong? | In the outer query, after a CTE or subquery calculates the running total over the full history. |
| What two choices define a stable event-by-event running total here? | Order by `day_no, event_id`, then use `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`. |

For more query-writing practice, the English [PostgreSQL SQL Interview Problems deck](/catalog/packages/postgresql-sql-interview-problems/) contains 63 cards, including running-total and rolling-window tasks. Its solutions use PostgreSQL; this article's checked executions use SQLite. Check the target engine before adapting date or timestamp frames.

Write a query before revealing its solution. Use regular recall and spaced review to help retain the frame and filter choices over the long term, then return to a complete query and account for its rows. Try this worksheet again without the answer key; the full explanations remain here whenever you need them.

*AI assisted substantially with research, writing, editing, and exercise construction, and executed the six SQLite query variants in the environment stated above. The illustration is AI-generated. Verification covers this fictional dataset; it doesn't include PostgreSQL execution, production data, query performance, human editorial review, or a study with learners. Nibomo is owned by Kirill Markin.*
