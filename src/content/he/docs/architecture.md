---
title: ארכיטקטורה
description: סקירת המערכת, הדומיינים הציבוריים, הלקוחות הנתמכים וזרימת הנתונים הנוכחית שמתוכננת קודם כל לעבודה ללא חיבור.
---

## סקירת המערכת

```
iOS app / agent client          -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
Web app                         -> app.<domain>  -> CloudFront -> SPA
Browser and agent auth          -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
Apex fallback                   -> <domain>      -> CloudFront redirect -> app.<domain>
```

## עקרונות

1. דומיינים ציבוריים נפרדים ל-`app`, `api` ו-`auth`
2. Postgres הוא מקור האמת
3. לקוח iOS מתוכנן קודם כל לעבודה ללא חיבור, עם SQLite מקומי וסנכרון
4. אפליקציית הרשת, אפליקציית iOS וממשק הסוכנים החיצוניים חולקים את אותו מודל של סביבות עבודה
5. סוכנים חיצוניים מתחילים מ-`GET https://api.nibomo.com/v1/`

## לקוחות נתמכים

- אפליקציית רשת בכתובת `app.nibomo.com`
- אפליקציית iOS במאגר הראשי עם אחסון SQLite מקומי
- אפליקציית Android ב-Google Play
- לקוחות של סוכנים חיצוניים דרך גילוי, הקמה עם קוד חד-פעמי ו-`Authorization: ApiKey`

## מודל הנתונים

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## זרימת הנתונים

### רשת

1. הדפדפן מתחבר דרך `auth.<domain>`.
2. אפליקציית הרשת טוענת את נתוני סביבת העבודה מ-`api.<domain>`.
3. בקשות לצ׳אט AI עוברות דרך `/chat/local-turn`.
4. שליחת חזרה מעדכנת את מצב המתזמן בזמן הכתיבה.

### iOS

1. אפליקציית iOS כותבת קודם כל מקומית ל-SQLite.
2. שינויים מקומיים נכנסים לתור שליחה.
3. הסנכרון מעלה שינויים דרך `/v1/workspaces/{workspaceId}/sync/push`.
4. הסנכרון מוריד עדכונים מרוחקים דרך `/v1/workspaces/{workspaceId}/sync/pull`.
5. מסד הנתונים המקומי מחיל את השינויים ומקדם את סמן הסנכרון.

### סוכנים חיצוניים

1. סוכנים מתחילים ב-`GET /v1/`.
2. ההקמה עם קוד חד-פעמי רצה ב-`auth.<domain>`.
3. הסוכן מקבל מפתח API ארוך טווח.
4. הסוכן טוען את `/v1/agent/me`, מציג את רשימת סביבות העבודה, בוחר אחת אם צריך, ואז משתמש ב-`/v1/agent/sql/query` וב-`/v1/agent/sql/execute`.

## תזמון

Nibomo משתמשת ב-FSRS כמתזמן החזרות.

הערות מימוש:

- בצד השרת וב-iOS יש מימושים תואמים של FSRS, שמשקפים זה את זה
- אפליקציית הרשת משקפת את חוזה נתוני התזמון, אבל לא כוללת עותק שלישי של המתזמן
- הגדרות המתזמן ברמת סביבת העבודה כוללות שיעור זכירה רצוי, שלבי למידה, שלבי למידה מחדש, מרווח מקסימלי ו-fuzz
- זמן החזרה האמיתי נלקח מ-`reviewedAtClient`

לחוזה המפורט, עיין ב[לוגיקת התזמון של FSRS במאגר הראשי](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## אימות

- קוד חד-פעמי באימייל דרך Cognito
- עוגיות סשן של הדפדפן בדומיין משותף עבור אפליקציית הרשת המתארחת
- הקמת סוכן עם קוד חד-פעמי ב-`auth.<domain>`, שמסתיימת במפתח ApiKey ארוך טווח
- `AUTH_MODE=none` לפיתוח מקומי
- `AUTH_MODE=cognito` לאימות כמו בסביבת ייצור

## מבנה הפריסה

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + צד שרת ב-Lambda
- `auth.<domain>` -> API Gateway + שירות אימות ב-Lambda
- Postgres ב-AWS RDS

דומיין השורש יכול להישאר באתר שיווקי נפרד. אם הוא פנוי בזמן ההקמה, התשתית יכולה להפנות אותו זמנית ל-`app.<domain>`.
