---
title: מדריך API
description: API לסוכנים חיצוניים עבור גילוי, הקמה עם קוד חד-פעמי, הגדרת סביבת עבודה וממשקי ה-SQL המפורסמים לקריאה ולכתיבה.
---

## סקירה כללית

העמוד הזה מתעד את החוזה הנוכחי של Nibomo עבור סוכני AI חיצוניים.

אם הלקוח שלך תומך ב-MCP, [מחבר ה-MCP](/docs/mcp-connector/) הוא הדרך הפשוטה ביותר להתחבר, והוא עוטף את אותו ממשק נתונים. העמוד הזה מתעד את חוזה הגילוי ב-HTTP, ה-SQL, המדריכים והחזרות שסוכני CLI משתמשים בו.

התחל מנקודת הכניסה הקנונית לגילוי:

```text
GET https://api.nibomo.com/v1/
```

אותה תגובת גילוי זמינה גם בכתובת `GET /v1/agent`, אבל `/v1/` היא נקודת הכניסה הציבורית העיקרית.

תגובת הגילוי מסבירה לסוכן איך:

- להתחיל התחברות עם קוד חד-פעמי באימייל
- להמיר את הקוד החד-פעמי במפתח API ארוך טווח
- לטעון את הקשר החשבון
- ליצור סביבת עבודה או לבחור אחת
- להמשיך דרך ממשק ה-SQL המפורסם
- לשלוף מדריכי עיון ולחזור על כרטיסים אחד אחרי השני

## גילוי בזמן ריצה וקוד מקור

OpenAPI אינו זמין. ארבע הכתובות לשעבר של המפרט, שמופיעות למטה, מחזירות עכשיו במקום סכמה את אותה הודעת גילוי ב-JSON עם `"openapiAvailable": false`:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

השתמש ב-`GET https://api.nibomo.com/v1/` לגילוי העדכני בזמן ריצה. עקוב אחרי `docs.discoveryUrl` שמוחזר כדי למצוא את נתיבי זמן הריצה, ואחרי `docs.source.agentRoutesUrl` כדי לראות את פרטי המימוש.

## הקמת האימות

ההקמה עם קוד חד-פעמי רצה בשירות האימות:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

התהליך:

1. קרא ל-`GET /v1/`.
2. שלח את האימייל של המשתמש ל-`send-code`.
3. קרא את `otpSessionToken` מהתגובה.
4. בקש מהמשתמש את הקוד האחרון בן 8 הספרות שקיבל באימייל.
5. קרא ל-`verify-code` עם `code`, `otpSessionToken` ו-`label`.
6. שמור את מפתח ה-API שמוחזר מחוץ לזיכרון הצ׳אט.

משתנה סביבה מומלץ:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

בקשות מאומתות משתמשות בכותרת:

```text
Authorization: ApiKey <key>
```

דוגמה לרצף ההקמה:

```bash
curl https://api.nibomo.com/v1/
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com"}'
```

```bash
curl -X POST https://auth.nibomo.com/api/agent/verify-code \
  -H "Content-Type: application/json" \
  -d '{
    "code":"12345678",
    "otpSessionToken":"...",
    "label":"Codex on MacBook"
  }'
```

## ממשק הסוכן אחרי ההתחברות

אחרי האימות, ממשק הסוכן הנוכחי כולל:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (קריאה בלבד)
- `POST /v1/agent/sql/execute` (כתיבה)
- `GET /v1/agent/guide/{topic}` (קריאה בלבד)
- `POST /v1/agent/reviews/next` (קריאה בלבד)
- `POST /v1/agent/reviews/reveal` (קריאה בלבד)
- `POST /v1/agent/reviews/submit` (כתיבה)

הקמה טיפוסית נראית כך:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. אם צריך, `POST /v1/agent/workspaces` עם `{"name":"Personal"}`
4. אם צריך, `POST /v1/agent/workspaces/{workspaceId}/select`
5. השתמש ב-`POST /v1/agent/sql/query` לקריאה וב-`POST /v1/agent/sql/execute` לכתיבה

בחירת סביבת העבודה מתבצעת במפורש לכל חיבור של מפתח API. במקום לנחש את הצעד הבא, סוכנים צריכים לפעול לפי הטקסט שמוחזר ב-`instructions`, לפי `docs.discoveryUrl` לנתיבי זמן הריצה ולפי `docs.source.agentRoutesUrl` לפרטי המימוש.

נתיבי ה-SQL והחזרות מקבלים גם `workspaceId` אופציונלי בגוף ה-JSON. הוא מפנה בקשה אחת לסביבת העבודה הזו בלי לשנות את הבחירה; השמט אותו כדי להשתמש בסביבת העבודה שנבחרה. אם אין בחירה וגם אין `workspaceId`, הנתיבים עונים `409 WORKSPACE_SELECTION_REQUIRED`.

## ממשק ה-SQL

`POST /v1/agent/sql/query` הוא ממשק לקריאה בלבד באופן מוחלט (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), ו-`POST /v1/agent/sql/execute` הוא ממשק הכתיבה (`INSERT`, `UPDATE`, `DELETE`); בקשה אחת חייבת לכלול רק פעולות קריאה או רק פעולות כתיבה.

הממשק מוגבל בכוונה ואינו PostgreSQL מלא. התיעוד הזה מכסה רק את הדיאלקט הנתמך, ואינו מדריך תאימות ל-PostgreSQL.

אף נתיב קריאה לא מתקן נתונים, לא מחשב מחדש את התזמון ולא משנה את מצב הכרטיסים. השתמש ב-`POST /v1/agent/sql/execute` לכל כתיבה של כרטיסים וחפיסות. SQL לא יכול לכתוב ל-`review_events` או למצב התזמון של FSRS; רשום חזרות דרך `POST /v1/agent/reviews/submit`.

סוגי הפקודות הנוכחיים:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

המשאבים הלוגיים המפורסמים כרגע כוללים:

- `workspace`
- `cards`
- `decks`
- `review_events`

הערות:

- ברירת המחדל של `LIMIT` היא `100`, והערך המקסימלי הוא `100`
- השתמש ב-`ORDER BY` כשאתה צריך עימוד יציב
- השתמש ב-`SHOW TABLES` או ב-`DESCRIBE cards` כדי לגלות את הסכמה
- כל בקשת SQL מוגבלת לסביבת עבודה אחת: ה-`workspaceId` שבגוף הבקשה, או סביבת העבודה שנבחרה

דוגמה לבקשה:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

דוגמה לשאילתת כרטיסים:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

דוגמה לשינוי נתונים:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

שרת MCP מרוחק זמין גם בכתובת `https://mcp.nibomo.com/mcp` עם OAuth 2.1 (Dynamic Client Registration + PKCE). הוא חושף את אותה חלוקת SQL בתור `sql_query` (לקריאה בלבד באופן מוחלט) ו-`sql_execute` (כתיבה), וכן את `list_workspaces`, `get_guide` ואת כלי החזרות `next_review_card`, `reveal_answer` ו-`submit_review`; ראה [מחבר ה-MCP](/docs/mcp-connector/).

### בטיחות והיקף

ממשק ה-SQL הוא דיאלקט סגור שהמנתח אוכף, ולא PostgreSQL גולמי. מנגנוני ההגנה הם:

- **רשימה סגורה של פקודות מותרות**: רק `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ו-`SELECT` לקריאה, ו-`INSERT`, `UPDATE` ו-`DELETE` לכתיבה. כל דבר אחר נדחה כבר בשלב הניתוח.
- **משאבים מוגבלים**: פקודות יכולות לגעת רק במשאבים `workspace`, `cards`, `decks` ו-`review_events`.
- **הגבלה לסביבת עבודה**: כל פקודה מוגבלת לסביבת עבודה אחת שיש לך גישה אליה, ה-`workspaceId` שבגוף הבקשה או סביבת העבודה שבחרת, בלי גישה בין דיירים.
- **גופי בקשה מחמירים**: נתיבי ה-SQL והחזרות דוחים שדה לא מוכר בגוף הבקשה, כך ש-`workspaceId` עם שגיאת כתיב נכשל במקום לרוץ על סביבת העבודה שנבחרה.
- **מגבלות**: עד `100` שורות לפקודה, עד `50` פקודות לאצווה, ומגבלת תוצאה של כ-`12k` טוקנים. אצוות של שינויים מוחלות באופן אטומי.
- **הפרדה בין קריאה לכתיבה**: `sql_query` ו-`list_workspaces` הם לקריאה בלבד באופן מוחלט (`readOnlyHint`), ולעולם לא מתקנים נתונים, מחשבים מחדש את התזמון או משנים את מצב הכרטיסים. `sql_execute` הוא כלי הכתיבה היחיד ל-SQL והוא מבצע כתיבות (`destructiveHint`); בקשה אחת חייבת לכלול רק פעולות קריאה או רק פעולות כתיבה. SQL לא יכול לכתוב ל-`review_events` או למצב התזמון של FSRS; רק `POST /v1/agent/reviews/submit` (ב-MCP: `submit_review`) רושם חזרה.

## מדריכים

`GET /v1/agent/guide/{topic}` מחזיר מדריך עיון אחד ב-`data.guide`, אותו תוכן שכלי ה-MCP `get_guide` מגיש. הנושאים:

- `sql_dialect`: הדקדוק המלא של ה-SQL, המגבלות ודוגמאות
- `card_authoring`: חוזה הכרטיס, תגיות, בדיקות כפילויות ועיצוב
- `bulk_authoring`: פיצול ואימות של משימת כתיבה גדולה
- `review_flow`: מחזור החזרה והדירוג

נושא לא מוכר מחזיר `400` עם רשימת הנושאים הנתמכים. שלוף את המדריך המתאים לפני כתיבת כרטיסים, כתיבה בכמויות גדולות או הרצת חזרה, וקרא שוב את `sql_dialect` אחרי שפקודה נדחתה.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## חזרות

נתיבי החזרות מאפשרים לסוכן לבחון לומד כרטיס אחד בכל פעם ולשמור כל דירוג בלוח הזמנים של FSRS עבור הכרטיס. הם מקבלים את אותם ארגומנטים ב-JSON כמו כלי החזרות של MCP:

- `POST /v1/agent/reviews/next` מחזיר `card` עם `cardId` ו-`frontText`, או `card: null` כשאין כרטיס שהגיע זמנו. הפרמטרים האופציונליים `tags` (כרטיס עם לפחות אחת מהתגיות) או `deckId` מצמצמים את התור, אבל לעולם לא שניהם יחד; בקשה בלי גוף תקינה.
- `POST /v1/agent/reviews/reveal` דורש `cardId` ומחזיר את `backText` של הכרטיס הזה.
- `POST /v1/agent/reviews/submit` דורש `cardId`, מזהה `reviewId` מסוג UUID שהלקוח יוצר, `rating` עם הערך `Again`, `Hard`, `Good` או `Easy`, ואת `reviewedTimeZone` של הלומד לפי IANA. השרת קובע את זמן החזרה ומחזיר את לוח הזמנים החדש של הכרטיס, כולל `dueAt`, `state`, `reps` ו-`lapses`.

שלושת הנתיבים מקבלים את `workspaceId` האופציונלי. שמור את `reviewId` לפני השליחה, ואם לא ברור אם שליחה הצליחה, נסה שוב עם בקשה זהה; היא לעולם לא רושמת חזרה שנייה. נתיבי החזרות יכולים גם לענות:

- `409 REVIEW_EVENT_CONFLICT`: החזרה כבר נרשמה, ו-`error.details.reviewSchedule` מכיל את לוח הזמנים הנוכחי של הכרטיס.
- `409 REVIEW_ID_CARD_MISMATCH`: ה-`reviewId` כבר מזהה חזרה על כרטיס אחר, ולכן דבר לא נשמר; שלח שוב עם `reviewId` חדש.
- `409 REVIEW_STALE`: זמן החזרה השמור של הכרטיס זהה לזמן הנוכחי בשרת או מאוחר ממנו; חזור על כרטיס אחר.
- `400 REVIEW_INPUT_INVALID`: ארגומנט חסר, לא תקין או לא נתמך, כולל `tags` יחד עם `deckId` או תגית שסביבת העבודה לא משתמשת בה.

דוגמה לשליחה:

```bash
curl -X POST https://api.nibomo.com/v1/agent/reviews/submit \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "cardId":"693c4863-28a2-45e8-8f55-9fa31fc95ff2",
    "reviewId":"429bb7cc-40fb-49f3-bb50-48a5db2826d1",
    "rating":"Good",
    "reviewedTimeZone":"Europe/Sofia"
  }'
```

## ממשקי API לאנשים ולסנכרון

Nibomo כוללת גם ממשקי API נפרדים ללקוחות אנושיים ולסנכרון שמתוכנן קודם כל לעבודה ללא חיבור, אבל הם אינם החוזה העיקרי לסוכנים חיצוניים:

- תהליכי הדפדפן משתמשים בעוגיות בדומיין משותף ובהגנת CSRF
- לקוחות שמתוכננים קודם כל לעבודה ללא חיבור משתמשים בנתיבי הסנכרון הממומשים תחת `/v1/workspaces/{workspaceId}/sync/push` ו-`/v1/workspaces/{workspaceId}/sync/pull`
- נתיבי הסנכרון נפרדים מממשק הסוכנים החיצוניים
