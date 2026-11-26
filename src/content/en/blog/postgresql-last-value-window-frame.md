---
title: "PostgreSQL LAST_VALUE: Why It Returns the Current Row"
description: "Fix PostgreSQL LAST_VALUE with UNBOUNDED FOLLOWING, break ties in the window order, and trace a latest value that can be zero or NULL."
date: "2026-11-26"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/35970ef2627d913d02b158cb75ceb9b1f0922f44d5bb7c7bf18582c67c2226c1.webp"
keywords:
  - "PostgreSQL LAST_VALUE"
  - "LAST_VALUE default window frame"
  - "LAST_VALUE returns current row"
  - "UNBOUNDED FOLLOWING"
---

East had 12 items in stock on day 1. Its latest count was 8, yet a PostgreSQL report using `LAST_VALUE(on_hand)` can show 12 in the “latest count” column. `LAST_VALUE` reads the last row in the window frame. With a unique window order, the default frame ends at the current row.

To show the **latest count on every snapshot**, use `PARTITION BY shop ORDER BY day_no, entry_id` inside `OVER (...)` and add `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` after the order. The `entry_id` breaks ties on the same day, and the frame runs from the first snapshot to the last for each shop.

![A railway volunteer fits a red tail lamp to the back of the last maroon carriage](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/35970ef2627d913d02b158cb75ceb9b1f0922f44d5bb7c7bf18582c67c2226c1.webp)

## Set up seven stock snapshots

Run the setup and all five queries in one PostgreSQL session so they share the temporary table. When two snapshots share a day, the larger `entry_id` counts as later in this example. In your own report, use a tiebreaker that reflects how you define “latest,” such as a recorded event sequence.

```sql
CREATE TEMP TABLE stock_snapshots (
  shop text NOT NULL,
  day_no integer NOT NULL,
  entry_id integer PRIMARY KEY,
  on_hand integer
);

INSERT INTO stock_snapshots (shop, day_no, entry_id, on_hand) VALUES
  ('East', 1, 11, 12),
  ('East', 3, 12, 14),
  ('East', 3, 13, 8),
  ('West', 1, 21, 6),
  ('West', 2, 22, 0),
  ('West', 4, 23, NULL),
  ('North', 2, 31, 4);
```

The tables below come from running the five queries against this fictional data in a local PostgreSQL 18.7 Docker container on November 26, 2026. AI assisted with drafting and editing and generated the cover image. To make missing values visible in `psql`, run `\pset null '[NULL]'`.

## Show which row supplied the value

`PARTITION BY shop` groups the snapshots by shop. The window's `ORDER BY` sets the order within each group, and the query's final `ORDER BY` arranges the displayed rows. The frame is the set of rows within the group that `LAST_VALUE` can read for each output row. [PostgreSQL's window tutorial](https://www.postgresql.org/docs/18/tutorial-window.html)

The query uses two named windows. `ordered` uses the default frame, and `whole_shop` reuses its grouping and order with an explicit full frame. Reading `entry_id` through both windows shows which snapshot each one selects.

```sql
SELECT shop, day_no, entry_id, on_hand,
  LAST_VALUE(entry_id) OVER ordered AS default_entry,
  LAST_VALUE(entry_id) OVER whole_shop AS final_entry,
  LAST_VALUE(on_hand) OVER whole_shop AS final_count,
  MAX(on_hand) OVER whole_shop AS largest_count
FROM stock_snapshots
WINDOW
  ordered AS (PARTITION BY shop ORDER BY day_no, entry_id),
  whole_shop AS (
    ordered ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  )
ORDER BY shop, day_no, entry_id;
```

| shop | day_no | entry_id | on_hand | default_entry | final_entry | final_count | largest_count |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| East | 1 | 11 | 12 | 11 | 13 | 8 | 14 |
| East | 3 | 12 | 14 | 12 | 13 | 8 | 14 |
| East | 3 | 13 | 8 | 13 | 13 | 8 | 14 |
| North | 2 | 31 | 4 | 31 | 31 | 4 | 4 |
| West | 1 | 21 | 6 | 21 | 23 | `NULL` | 6 |
| West | 2 | 22 | 0 | 22 | 23 | `NULL` | 6 |
| West | 4 | 23 | `NULL` | 23 | 23 | `NULL` | 6 |

On East's day 1 row, the default window selects entry 11. The whole-shop window selects entry 13, the later of the two day 3 entries, and gives a final count of 8. The largest count, 14, comes from entry 12.

West shows why the source ID is worth keeping while you debug. Entry 23 exists, and its count is unknown. PostgreSQL 18's `LAST_VALUE` carries that `NULL` into `final_count`. West's earlier zero is a recorded count. `MAX` skips the `NULL` and returns 6. [Window functions](https://www.postgresql.org/docs/18/functions-window.html) · [Aggregate functions](https://www.postgresql.org/docs/18/functions-aggregate.html)

All seven snapshots stay in the report. If you need one row per shop, select one row from each partition in a separate step.

## Watch what happens on a tied day

For an ordered window, PostgreSQL's default frame is `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`. Here `CURRENT ROW` as the end bound includes all of the current row's peers. Rows are peers when they tie on every expression in the window's `ORDER BY`. [PostgreSQL's frame syntax](https://www.postgresql.org/docs/18/sql-expressions.html#SYNTAX-WINDOW-FUNCTIONS)

With `ORDER BY day_no` alone, East's day 3 entries are peers. Adding the unique `entry_id` puts each row in its own peer group. `COUNT(*)` reveals how many rows each frame reaches even when the order within a tie is unspecified.

```sql
SELECT entry_id,
  COUNT(*) OVER (PARTITION BY shop ORDER BY day_no) AS through_day,
  COUNT(*) OVER (PARTITION BY shop ORDER BY day_no, entry_id) AS through_entry
FROM stock_snapshots
WHERE shop = 'East'
ORDER BY day_no, entry_id;
```

| entry_id | through_day | through_entry |
| ---: | ---: | ---: |
| 11 | 1 | 1 |
| 12 | 3 | 2 |
| 13 | 3 | 3 |

At entry 12, the day-only frame already includes entry 13. Once `entry_id` breaks the tie, the default frame at entry 12 covers just entries 11 and 12. Set the frame’s end to `UNBOUNDED FOLLOWING` to reach entry 13, the last snapshot in the partition. The same peer rule affects running totals. [SQL `ROWS` vs `RANGE` exercise](/blog/sql-rows-vs-range-practice/)

## Filter after the window to keep the full history

Suppose you want to display snapshots through day 2 and show each shop's latest count across all days. A `WHERE` in the same `SELECT` as the window removes rows before the calculation, so `UNBOUNDED FOLLOWING` reaches the last remaining row of each shop. [PostgreSQL's window tutorial](https://www.postgresql.org/docs/18/tutorial-window.html)

```sql
SELECT shop, entry_id,
  LAST_VALUE(entry_id) OVER (
    PARTITION BY shop ORDER BY day_no, entry_id
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS final_entry
FROM stock_snapshots
WHERE day_no <= 2
ORDER BY entry_id;
```

Calculate `final_entry` in a common table expression first. Then put the day filter in the outer query, where it limits the displayed snapshots.

```sql
WITH audited AS (
  SELECT shop, day_no, entry_id,
    LAST_VALUE(entry_id) OVER (
      PARTITION BY shop ORDER BY day_no, entry_id
      ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS final_entry
  FROM stock_snapshots
)
SELECT shop, entry_id, final_entry
FROM audited
WHERE day_no <= 2
ORDER BY entry_id;
```

| shop | entry_id | final_entry when filtered first | final_entry when filtered after |
| --- | ---: | ---: | ---: |
| East | 11 | 11 | 13 |
| West | 21 | 22 | 23 |
| West | 22 | 22 | 23 |
| North | 31 | 31 | 31 |

Both versions display the same four snapshots. With the outer filter, East's day 1 row points to entry 13 on day 3. If the report needs the latest snapshot **as of day 2**, put the filter in the window query. At East, that makes entry 11 the last eligible snapshot. [SQL `LAG` and `LEAD` practice](/blog/sql-lag-lead-practice/)

## Read the same row with FIRST_VALUE

With `day_no DESC, entry_id DESC`, the latest snapshot comes first. The default frame starts at the beginning of the partition, so `FIRST_VALUE` reaches that row for every snapshot. Both sort keys here are non-null, and reversing both directions makes the two functions select the same entry.

```sql
SELECT shop, entry_id,
  FIRST_VALUE(entry_id) OVER (
    PARTITION BY shop ORDER BY day_no DESC, entry_id DESC
  ) AS newest_entry,
  LAST_VALUE(entry_id) OVER (
    PARTITION BY shop ORDER BY day_no, entry_id
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS final_entry
FROM stock_snapshots
ORDER BY entry_id DESC;
```

| shop | entry_id | newest_entry | final_entry |
| --- | ---: | ---: | ---: |
| North | 31 | 31 | 31 |
| West | 23 | 23 | 23 |
| West | 22 | 23 | 23 |
| West | 21 | 23 | 23 |
| East | 13 | 13 | 13 |
| East | 12 | 13 | 13 |
| East | 11 | 13 | 13 |

## Check your answers from memory

Cover the result tables. For each prediction, name the source entry before you look up its count.

1. At East entry 12, what is the last entry in the default frame when both sort keys are present? What is it in the whole-shop frame?
2. At West entry 21, what count would the last row supply if the day filter ran before the window? What would the last row supply if the filter ran after it?
3. Which entries does each frame include for North? How many North rows appear in the report?

**Answer key**

1. Entry 12 under the default frame and entry 13 under the whole-shop frame.
2. The early filter ends West's partition at entry 22, which recorded zero. The later filter leaves entry 23 available to the window, which supplies `NULL`.
3. North has a single snapshot. Both frames contain entry 31 alone, and the full report has one North row.

Tomorrow, try to write the frame clause from memory and name the entry it selects for East. Try again a few days later so you can still recall the rule when you need it. For 63 English cards on topics including `ROW_NUMBER` and rolling windows, try the [PostgreSQL SQL Interview Problems deck](/catalog/packages/postgresql-sql-interview-problems/).
