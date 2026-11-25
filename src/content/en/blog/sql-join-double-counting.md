---
title: "How to Fix Double Counting After Two SQL LEFT JOINs"
description: "Fix inflated SQL sums after two LEFT JOINs. Sum each table before joining, then add one row to test both totals in a runnable SQLite example."
date: "2026-11-25"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9353b6b7442b52987c14941fc161627b2b3c685bc092aa03a3a513c5e23866b0.webp"
keywords:
  - "SQL join double counting"
  - "SUM after LEFT JOIN"
  - "SQL join fanout"
  - "aggregate before join"
---

Project 1 has 24 in parts costs. Add a labor charge of 5, and the report should show 24 for parts and an extra 5 for labor. In this example, summing after two SQL `LEFT JOIN`s adds 24 to parts and 10 to labor. All four project IDs still appear exactly once.

The fix is to sum each cost table by `project_id` before joining. Then use `LEFT JOIN` to attach the two subtotals to the project list, so a project can appear even when it has charges on only one side or no charges at all.

![A postal clerk lowers a parcel onto one of two separate mechanical scales](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/9353b6b7442b52987c14941fc161627b2b3c685bc092aa03a3a513c5e23866b0.webp)

## Set up four projects in SQLite

The report needs a parts total and a labor total for every project. Each charge counts once, even when two charges have the same cost. In this fictional dataset, project 1 has both kinds of costs, project 2 has only parts, project 3 has only labor, and project 4 has neither.

Open a fresh in-memory database with `sqlite3 :memory:`. Run the setup once, then run the remaining SQL blocks in order in the same session. To show `NULL` values as they appear in the tables below, enter `.nullvalue NULL` in the SQLite shell before running the queries.

```sql
PRAGMA foreign_keys = ON;

CREATE TABLE projects (
  project_id INTEGER PRIMARY KEY
);

CREATE TABLE project_parts (
  part_id INTEGER PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES projects(project_id),
  cost INTEGER NOT NULL
);

CREATE TABLE project_labor (
  labor_id INTEGER PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES projects(project_id),
  cost INTEGER NOT NULL
);

INSERT INTO projects (project_id) VALUES (1), (2), (3), (4);

INSERT INTO project_parts (part_id, project_id, cost) VALUES
  (101, 1, 12),
  (102, 1, 12),
  (103, 2, 7);

INSERT INTO project_labor (labor_id, project_id, cost) VALUES
  (201, 1, 8),
  (202, 1, 8),
  (203, 1, 4),
  (204, 3, 6);
```

## Look at the IDs before GROUP BY

When a total looks too high, keep the joins and select the ID from each table. That shows how many times the same charge reaches `SUM`.

```sql
SELECT
  p.project_id,
  pp.part_id,
  pl.labor_id
FROM projects AS p
LEFT JOIN project_parts AS pp ON pp.project_id = p.project_id
LEFT JOIN project_labor AS pl ON pl.project_id = p.project_id
ORDER BY p.project_id, pp.part_id, pl.labor_id;
```

| project_id | part_id | labor_id |
| ---: | ---: | ---: |
| 1 | 101 | 201 |
| 1 | 101 | 202 |
| 1 | 101 | 203 |
| 1 | 102 | 201 |
| 1 | 102 | 202 |
| 1 | 102 | 203 |
| 2 | 103 | NULL |
| 3 | NULL | 204 |
| 4 | NULL | NULL |

Both joins match on `project_id`, so each of project 1's two parts pairs with each of its three labor entries. That multiplication is called join fanout. Each of the six rows represents a different part and labor pair. The other projects show what a `LEFT JOIN` does when a matching charge is missing. It fills that side's columns with `NULL`. [SQLite SELECT and JOIN documentation](https://www.sqlite.org/lang_select.html)

## See what SUM adds up

The two parts cost 12 each. Each part appears three times in project 1's group, so the parts sum is `24 × 3 = 72`. The labor charges add up to 20, and each appears twice, giving `20 × 2 = 40`. Grouping by `project_id` gives you one output row per project using those repeated inputs.

```sql
SELECT
  p.project_id,
  SUM(pp.cost) AS parts_total,
  SUM(pl.cost) AS labor_total,
  SUM(DISTINCT pp.cost) AS distinct_parts,
  SUM(DISTINCT pl.cost) AS distinct_labor
FROM projects AS p
LEFT JOIN project_parts AS pp ON pp.project_id = p.project_id
LEFT JOIN project_labor AS pl ON pl.project_id = p.project_id
GROUP BY p.project_id
ORDER BY p.project_id;
```

| project_id | parts_total | labor_total | distinct_parts | distinct_labor |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 72 | 40 | 12 | 12 |
| 2 | 7 | NULL | 7 | NULL |
| 3 | NULL | 6 | NULL | 6 |
| 4 | NULL | NULL | NULL | NULL |

`SUM(DISTINCT cost)` adds each price once. Parts `101` and `102` both cost 12, so it counts a single 12. It also counts a single 8 for labor entries `201` and `202`. Each of those separate charges belongs in its project total. [SQLite aggregate function documentation](https://www.sqlite.org/lang_aggfunc.html)

## Sum each cost table first

Each common table expression, or CTE, sums one kind of charge. Its `GROUP BY project_id` produces at most one subtotal row per project, so each join to `projects` can match at most one row.

```sql
WITH parts_by_project AS (
  SELECT project_id, SUM(cost) AS parts_total
  FROM project_parts
  GROUP BY project_id
),
labor_by_project AS (
  SELECT project_id, SUM(cost) AS labor_total
  FROM project_labor
  GROUP BY project_id
)
SELECT
  p.project_id,
  COALESCE(pp.parts_total, 0) AS parts_total,
  COALESCE(pl.labor_total, 0) AS labor_total
FROM projects AS p
LEFT JOIN parts_by_project AS pp ON pp.project_id = p.project_id
LEFT JOIN labor_by_project AS pl ON pl.project_id = p.project_id
ORDER BY p.project_id;
```

| project_id | parts_total | labor_total |
| ---: | ---: | ---: |
| 1 | 24 | 20 |
| 2 | 7 | 0 |
| 3 | 0 | 6 |
| 4 | 0 | 0 |

Every charge in this example has a value. A missing subtotal therefore means the project has no charges of that kind, and `COALESCE(total, 0)` displays zero. If your data allows unknown costs, decide what the report should show for those before you apply the same rule. [SQLite COALESCE documentation](https://www.sqlite.org/lang_corefunc.html#coalesce)

## Add a labor entry and check both totals

Get a baseline by summing each cost table on its own. Match the results to the report by `project_id`, using zero for project IDs missing from a source subtotal.

```sql
SELECT project_id, SUM(cost) AS parts_total
FROM project_parts
GROUP BY project_id
ORDER BY project_id;

SELECT project_id, SUM(cost) AS labor_total
FROM project_labor
GROUP BY project_id
ORDER BY project_id;
```

The parts query returns 24 for project 1 and 7 for project 2. The labor query returns 20 for project 1 and 6 for project 3.

Add a single labor charge of 5. For project 1, expect 24 in parts and 25 in labor.

```sql
INSERT INTO project_labor (labor_id, project_id, cost) VALUES
  (205, 1, 5);
```

Rerun the query that sums the joined detail rows, the CTE report, and the two source subtotals. Both reports still return IDs 1 through 4 exactly once. Compare the amounts for project 1.

| Project 1 result | Parts before | Parts after | Labor before | Labor after |
| --- | ---: | ---: | ---: | ---: |
| Source subtotals | 24 | 24 | 20 | 25 |
| Sum after joining detail rows | 72 | 96 | 40 | 50 |
| Sum before joining | 24 | 24 | 20 | 25 |

In the raw join, the new labor charge of 5 pairs with both parts. Those two extra rows add 10 to labor and add both part costs again. For a report you maintain, give one project multiple rows in both source tables. Add a charge to one side and check the values of both totals as well as the project IDs.

## Match the query to what the report needs

If labor only decides whether to include a project, `EXISTS` can check for a labor entry while the parts rows supply the total. [SQL EXISTS vs JOIN](/blog/sql-exists-vs-join/)

If parts are the only detail table in the report, a single `LEFT JOIN` from `projects` to `project_parts` gives each matching part one row, so you can sum its cost directly by project. Put a filter that selects qualifying parts in `ON` when the report must keep every project. [LEFT JOIN filters in ON and WHERE](/blog/sql-left-join-on-vs-where/)

## Practice the check from memory

| Card front | Card back |
| --- | --- |
| A project report sums parts and labor from two detail tables. You add a labor charge of 5. What should each total do, and where should the query sum each cost? | Labor rises by 5 and parts stay at the original total. Sum each cost table by `project_id`, then left join both subtotals to `projects`. |

Answer before looking at the back. Try again tomorrow and a few days later. Recalling the answer after a gap helps you remember the query pattern when you need it later. For more practice with joins and grouping, Nibomo has a 63-card English deck with PostgreSQL solutions. [PostgreSQL SQL Interview Problems deck](/catalog/packages/postgresql-sql-interview-problems/)

*AI helped research, write, and edit this article and generated the fictional dataset and cover image. The SQL blocks and the reruns after the insert were checked in a fresh in-memory database using the SQLite 3.51.0 CLI.*
