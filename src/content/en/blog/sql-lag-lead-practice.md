---
title: "SQL LAG and LEAD Practice: Trace Rows, NULLs, and Filters"
description: "Practise SQL LAG and LEAD with checked queries. Trace row IDs through NULL readings, tied days, missing dates, offsets, and filters before checking the answers."
date: "2026-10-31"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c57c4561f64881992ae501c7783ba4eea6f5053fce137654b445d40c77d87e5b.webp"
keywords:
  - "SQL LAG and LEAD practice"
  - "SQL previous row"
  - "LAG default vs NULL"
  - "SQL LAG WHERE filter"
  - "LEAD example"
---

At observation 101 below, the previous reading is NULL because there is no previous observation. At 103, it's NULL because observation 102 exists but has no recorded reading. At 104, the previous reading is a real zero. Those three cases need different explanations, even when a report makes them look similar.

This SQL LAG and LEAD practice keeps the neighboring row's ID beside its value. Use eight fictional observations to make seven predictions, then check the complete answers. Name the source row before calculating a change: that small step exposes missing history, NULL readings, and comparisons across the wrong station.

![A photo archivist inspects a blank frame between tree photographs on a short film strip over a light panel](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/c57c4561f64881992ae501c7783ba4eea6f5053fce137654b445d40c77d87e5b.webp)

## Start with eight observations

Each row is one observation from fictional station A or B. `event_id` is a unique, non-null integer identifier, and `reading` is an integer measurement in arbitrary demonstration units. NULL means the measurement wasn't recorded; 0 is a recorded zero.

`day_no` is a non-null integer on a shared calendar. Day 6 is three days after day 3, whether any observation exists between them. Two observations may share a day.

| event_id | station | day_no | reading |
| --- | --- | --- | --- |
| 101 | A | 1 | 10 |
| 102 | A | 3 | NULL |
| 103 | A | 3 | 0 |
| 104 | A | 6 | 25 |
| 105 | A | 7 | 20 |
| 201 | B | 1 | 100 |
| 202 | B | 4 | NULL |
| 203 | B | 8 | 110 |

The exercises order each station by `day_no, event_id`, ascending. That places 102 before 103 on day 3 and makes every source row unambiguous. It's an exercise convention: the smaller ID doesn't establish which physical observation happened first. In a real system, choose an ordering rule supported by timestamps, sequence numbers, or the business requirement.

`LAG(expression, offset, default)` reads an earlier row; `LEAD` reads a later one. The offset counts rows in the window order within the partition. The default applies when that source row doesn't exist. [PostgreSQL 18's function reference](https://www.postgresql.org/docs/18/functions-window.html) defines these arguments.

`PARTITION BY station` keeps A's and B's comparisons separate. `OVER w` refers to the named window in `WINDOW w AS (...)`. Its `ORDER BY` sets the neighbor sequence; the final query's `ORDER BY` arranges the displayed result. [PostgreSQL's window tutorial](https://www.postgresql.org/docs/18/tutorial-window.html) explains these roles.

All eight query variants and their outputs were executed on October 31, 2026, with SQLite 3.54.1 through Python 3.14.7 on macOS 26.6.1, arm64. The examples use integer days. The PostgreSQL links provide reference explanations; the executions here were in SQLite, and don't verify date or timestamp syntax for other engines.

## Make seven predictions

Write down the source IDs and values before running each query. Keep the answer key covered until you've made your predictions.

### 1. Find both neighbors

Predict `prev_id`, `prev_reading`, `next_id`, and `next_reading` for IDs **101, 103, 104, and 203**. For each NULL value, say whether the source row is absent or exists with a missing reading.

Run this complete read-only statement in SQLite. The common table expression, or CTE, named `readings` supplies the eight rows without creating a permanent table.

```sql
WITH readings(event_id, station, day_no, reading) AS (
  VALUES
    (101, 'A', 1, 10),
    (102, 'A', 3, NULL),
    (103, 'A', 3, 0),
    (104, 'A', 6, 25),
    (105, 'A', 7, 20),
    (201, 'B', 1, 100),
    (202, 'B', 4, NULL),
    (203, 'B', 8, 110)
)
SELECT event_id, station, day_no, reading,
  LAG(event_id, 1, NULL) OVER w AS prev_id,
  LAG(reading, 1, NULL) OVER w AS prev_reading,
  LEAD(event_id, 1, NULL) OVER w AS next_id,
  LEAD(reading, 1, NULL) OVER w AS next_reading
FROM readings
WINDOW w AS (PARTITION BY station ORDER BY day_no, event_id)
ORDER BY station, day_no, event_id;
```

**To run any later SQL block**, keep the first statement's `WITH readings(...) AS (...)` section, including all eight `VALUES` rows and the closing `)`. Remove its original `SELECT` through the final semicolon, then append the chosen block. Each block forms a separate statement with a fresh copy of the fixture; don't run all the blocks together.

Some blocks start with `, compared AS (`. Keep that leading comma immediately after the fixture's closing `)`, with no semicolon between them. It adds a second CTE to the same `WITH` statement. The CTEs are available only within that completed statement.

### 2. Compare a boundary default with COALESCE

Predict `boundary_default` and `replaced_null` at **101, 103, and 104**. Which expression replaces an existing observation's NULL with `-1`? What happens to a recorded zero?

```sql
SELECT event_id,
  LAG(event_id, 1, NULL) OVER w AS prev_id,
  LAG(reading, 1, -1) OVER w AS boundary_default,
  COALESCE(LAG(reading, 1, NULL) OVER w, -1) AS replaced_null
FROM readings
WINDOW w AS (PARTITION BY station ORDER BY day_no, event_id)
ORDER BY station, day_no, event_id;
```

### 3. Move the WHERE filter

Both versions show only day 6 onward. Predict the surviving `event_id` values and each version's `prev_id`. Choose the version that satisfies “show later observations, but compare them with the full history.”

For the first statement, filter at the same query level as `LAG`:

```sql
SELECT event_id, station, day_no, reading,
  LAG(event_id, 1, NULL) OVER w AS prev_id,
  LAG(reading, 1, NULL) OVER w AS prev_reading
FROM readings
WHERE day_no >= 6
WINDOW w AS (PARTITION BY station ORDER BY day_no, event_id)
ORDER BY station, day_no, event_id;
```

For a separate second statement, start again with the fixture. Calculate the neighbors in another CTE, then filter its result:

```sql
, compared AS (
  SELECT event_id, station, day_no, reading,
    LAG(event_id, 1, NULL) OVER w AS prev_id,
    LAG(reading, 1, NULL) OVER w AS prev_reading
  FROM readings
  WINDOW w AS (PARTITION BY station ORDER BY day_no, event_id)
)
SELECT * FROM compared
WHERE day_no >= 6
ORDER BY station, day_no, event_id;
```

### 4. Decide whether the previous observation was yesterday

Predict `elapsed_days`, `change_from_observation`, and `change_from_yesterday` at **103, 104, and 105**. For every numeric change, name the two observations being compared. Does subtracting the previous reading alone establish a day-over-day change?

```sql
, compared AS (
  SELECT event_id, station, day_no, reading,
    LAG(day_no, 1, NULL) OVER w AS prev_day,
    LAG(reading, 1, NULL) OVER w AS prev_reading
  FROM readings
  WINDOW w AS (PARTITION BY station ORDER BY day_no, event_id)
)
SELECT *, day_no - prev_day AS elapsed_days,
  reading - prev_reading AS change_from_observation,
  CASE WHEN day_no - prev_day = 1
       THEN reading - prev_reading END AS change_from_yesterday
FROM compared
ORDER BY station, day_no, event_id;
```

### 5. Change the offset and add a frame

Predict all four calculated columns at **102, 103, and 203**. For the offset of 2, count positions in the station's ordered rows. Then decide whether a frame containing only the current row prevents `LAG` from finding the previous ID.

```sql
SELECT event_id,
  LAG(event_id, 2, NULL) OVER w AS two_back,
  LEAD(event_id, 2, NULL) OVER w AS two_ahead,
  LAG(reading, 0, -1) OVER w AS same_reading,
  LAG(event_id, 1, NULL) OVER (
    PARTITION BY station ORDER BY day_no, event_id
    ROWS BETWEEN CURRENT ROW AND CURRENT ROW
  ) AS prev_despite_frame
FROM readings
WINDOW w AS (PARTITION BY station ORDER BY day_no, event_id)
ORDER BY station, day_no, event_id;
```

### 6. Display the LEAD result backward

Predict the first displayed A row and the `next_id` for **104**. Where will that next observation appear in the output? Does changing only the final sort reverse what `LEAD` means?

```sql
SELECT event_id, station, day_no,
  LEAD(event_id, 1, NULL) OVER w AS next_id,
  LEAD(reading, 1, NULL) OVER w AS next_reading
FROM readings
WINDOW w AS (PARTITION BY station ORDER BY day_no, event_id)
ORDER BY station, day_no DESC, event_id DESC;
```

### 7. Diagnose the missing partition

The requirement is to compare observations within each station. Predict this query's `prev_id` at **201, 102, and 104**, then identify the clause needed to meet that requirement.

```sql
SELECT event_id, station, day_no,
  LAG(event_id, 1, NULL) OVER (
    ORDER BY day_no, event_id
  ) AS prev_id
FROM readings
ORDER BY day_no, event_id;
```

## Check the source rows and answers

### 1. The ID explains the NULL

Here are all eight results. Match each neighbor ID to the input table before interpreting its reading.

| event_id | prev_id | prev_reading | next_id | next_reading |
| --- | --- | --- | --- | --- |
| 101 | NULL | NULL | 102 | NULL |
| 102 | 101 | 10 | 103 | 0 |
| 103 | 102 | NULL | 104 | 25 |
| 104 | 103 | 0 | 105 | 20 |
| 105 | 104 | 25 | NULL | NULL |
| 201 | NULL | NULL | 202 | NULL |
| 202 | 201 | 100 | 203 | 110 |
| 203 | 202 | NULL | NULL | NULL |

At 101, `prev_id` is NULL because A has no earlier row. In the same result, `next_id = 102` tells you that the NULL `next_reading` belongs to an existing observation. At 103, `prev_id = 102` explains the missing previous reading. At 104, `prev_id = 103` leads to a recorded **0**. At 203, the previous row exists with a missing reading, while the next row is absent.

The distinction works because `event_id` is never NULL. A NULL neighbor ID means no source row was found; a non-null ID with a NULL reading means the row was found but its measurement is missing. Carry a similarly non-null identifier when debugging real comparisons.

`LAG` hasn't skipped 102 to reach the last known reading. PostgreSQL 18 likewise retains NULL-valued rows for these functions and doesn't implement `IGNORE NULLS`. See its [NULL-handling note](https://www.postgresql.org/docs/18/functions-window.html). Finding the last non-null observation is a different requirement.

### 2. The default only handles a missing source row

| event_id | prev_id | boundary_default | replaced_null |
| --- | --- | --- | --- |
| 101 | NULL | -1 | -1 |
| 102 | 101 | 10 | 10 |
| 103 | 102 | NULL | -1 |
| 104 | 103 | 0 | 0 |
| 105 | 104 | 25 | 25 |
| 201 | NULL | -1 | -1 |
| 202 | 201 | 100 | 100 |
| 203 | 202 | NULL | -1 |

At 101 and 201, there is no previous row in the station, so the boundary default is `-1`. At 103 and 203, the previous row exists and contains NULL: `LAG(reading, 1, -1)` therefore returns NULL. The `replaced_null` expression asks `LAG` for NULL at the boundary, then uses `COALESCE` to turn either kind of NULL into `-1`. Both expressions preserve the recorded zero at 104.

The `-1` sentinel is deliberately outside this fixture's recorded values. A real stream might contain negative readings, so choose a missing-value policy before introducing a sentinel. Keep the source ID if the report must distinguish absent history from a missing measurement. [SQLite's LAG definition](https://sqlite.org/windowfunctions.html#built_in_window_functions) documents the absent-row default.

### 3. Identical visible IDs, different history

| event_id | Filter before: prev_id | Filter before: prev_reading | Filter after: prev_id | Filter after: prev_reading |
| --- | --- | --- | --- | --- |
| 104 | NULL | NULL | 103 | 0 |
| 105 | 104 | 25 | 104 | 25 |
| 203 | NULL | NULL | 202 | NULL |

Filtering first leaves only 104 and 105 for A, and 203 for B. Thus 104 and 203 begin their stations' filtered sequences and have no previous row available to `LAG`.

In the second version, `compared` calculates the neighbors over all eight observations. The outer filter hides earlier output rows after those comparisons are defined. This satisfies the full-history requirement. At 203, both versions return a NULL value, but the second identifies 202 as its source. Looking only at `prev_reading` would hide the changed meaning.

These are logical query stages, independent of the database's physical execution plan. [PostgreSQL's tutorial](https://www.postgresql.org/docs/18/tutorial-window.html) explains input filtering and using an outer query to filter window results.

### 4. An observation gap isn't a calendar day

`change_from_observation` is the current reading minus the previous observation's reading. `change_from_yesterday` allows that subtraction only when the immediately preceding observation occurred one calendar day earlier. Otherwise its `CASE` expression returns NULL.

| event_id | prev_day | prev_reading | elapsed_days | change_from_observation | change_from_yesterday |
| --- | --- | --- | --- | --- | --- |
| 101 | NULL | NULL | NULL | NULL | NULL |
| 102 | 1 | 10 | 2 | NULL | NULL |
| 103 | 3 | NULL | 0 | NULL | NULL |
| 104 | 3 | 0 | 3 | 25 | NULL |
| 105 | 6 | 25 | 1 | -5 | -5 |
| 201 | NULL | NULL | NULL | NULL | NULL |
| 202 | 1 | 100 | 3 | NULL | NULL |
| 203 | 4 | NULL | 4 | NULL | NULL |

At 103, the previous observation is on the same day and its reading is missing. Subtraction involving that NULL produces NULL. At 104, `25 - 0 = 25` compares 104 on day 6 with 103 on day 3, so the three-day gap blocks `change_from_yesterday`. At 105, `20 - 25 = -5` compares 105 on day 7 with 104 on day 6; the one-day gap passes the guard.

This guard answers whether the **last observation was yesterday**. It doesn't aggregate a day's readings, choose a daily closing value, or search past a same-day observation for yesterday. If you need daily changes, first define what one day's value means and how to handle missing dates. `LAG` doesn't create observations for those dates.

### 5. Offsets count positions; this frame doesn't limit LAG

| event_id | two_back | two_ahead | same_reading | prev_despite_frame |
| --- | --- | --- | --- | --- |
| 101 | NULL | 103 | 10 | NULL |
| 102 | NULL | 104 | NULL | 101 |
| 103 | 101 | 105 | 0 | 102 |
| 104 | 102 | NULL | 25 | 103 |
| 105 | 103 | NULL | 20 | 104 |
| 201 | NULL | 203 | 100 | NULL |
| 202 | NULL | NULL | NULL | 201 |
| 203 | 201 | NULL | 110 | 202 |

At 102, two rows back is outside A's partition, while two rows ahead is 104. At 103, those source IDs are 101 and 105. For B's 203, two rows back is 201 and two rows ahead is absent. The seven-day gap between 201 and 203 doesn't affect their row distance: an offset counts positions, rather than subtracting from `event_id` or `day_no`.

Offset zero selects the current row. Thus 102 returns its own NULL, despite the supplied `-1`: the source row exists.

The current-row-only frame still allows 102 to find 101, 103 to find 102, and 203 to find 202. SQLite's `LAG` and `LEAD` ignore the frame specification, as its [window-function reference](https://sqlite.org/windowfunctions.html#built_in_window_functions) states. For sums whose contributing rows do depend on the frame, try the [ROWS vs RANGE worksheet](/blog/sql-rows-vs-range-practice/).

### 6. The next row can appear above the current row

| event_id | station | day_no | next_id | next_reading |
| --- | --- | --- | --- | --- |
| 105 | A | 7 | NULL | NULL |
| 104 | A | 6 | 105 | 20 |
| 103 | A | 3 | 104 | 25 |
| 102 | A | 3 | 103 | 0 |
| 101 | A | 1 | 102 | NULL |
| 203 | B | 8 | NULL | NULL |
| 202 | B | 4 | 203 | 110 |
| 201 | B | 1 | 202 | NULL |

A's first displayed row is 105. At 104, `next_id` remains 105 and `next_reading` remains 20 because the window order is still ascending. That next observation now appears above the current row. Use the window's order to trace a neighbor, even when the output is sorted another way.

### 7. Without partitions, the stations share one sequence

| event_id | station | day_no | prev_id |
| --- | --- | --- | --- |
| 101 | A | 1 | NULL |
| 201 | B | 1 | 101 |
| 102 | A | 3 | 201 |
| 103 | A | 3 | 102 |
| 202 | B | 4 | 103 |
| 104 | A | 6 | 202 |
| 105 | A | 7 | 104 |
| 203 | B | 8 | 105 |

The requested previous IDs are **101, 201, and 202**, respectively. All three comparisons cross stations: B's 201 reads A's 101; A's 102 reads B's 201; A's 104 reads B's 202. Add `PARTITION BY station` inside `OVER` to recover the neighbors from exercise 1. Sorting the output by station would only rearrange these incorrect comparisons.

## Practise the decision you missed

If a prediction was wrong, keep a short prompt about that decision. Cover its answer and reconstruct the source row before repeating the query.

| Prompt | Answer |
| --- | --- |
| At 103, does `LAG(reading, 1, -1)` return -1? | No. Row 102 exists and contains NULL. The default applies only when the source row is absent. |
| Show day 6 onward while keeping earlier comparison rows. Where does the filter go? | Outside the CTE that calculates the neighbors over the full history. |
| At 104, is the previous observed reading yesterday's reading? | No. It comes from 103 on day 3, three days earlier. |

The English [PostgreSQL SQL Interview Problems deck](/catalog/packages/postgresql-sql-interview-problems/) contains 63 query-writing cards, including previous-observation and consecutive-row tasks using `LAG`. It covers broader PostgreSQL practice; this worksheet's executions use SQLite.

Write the query before revealing the solution. Regular active recall and spaced review support long-term retention; returning to the complete fixture checks whether you can apply the remembered rule. The full answers stay here, so the deck is optional.

*Prepared with substantial AI assistance in research, writing, editing, and exercise preparation. The results come from executing the fictional fixture in SQLite as described above, not a PostgreSQL run or a study of learning outcomes. The illustration is AI-generated. Kirill Markin owns Nibomo.*
