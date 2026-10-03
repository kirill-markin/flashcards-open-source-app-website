---
title: מדריך אירוח עצמי
description: הרץ את Nibomo מקומית עם PostgreSQL, אימות, צד שרת, אפליקציית רשת ולוח ניהול, או פרוס את מערך הייצור המתועד ב-AWS CDK.
---

Nibomo תומכת בשני מסלולים נפרדים: סביבת פיתוח מקומית ופריסת ייצור ב-AWS. Docker Compose מריץ את PostgreSQL ואת המיגרציות לצורך פיתוח מקומי; זו לא שיטת הפריסה לייצור.

## דרישות לפיתוח מקומי

- Git
- Bash
- GNU Make
- Docker עם Docker Compose
- Node.js 24
- npm

קובץ Docker Compose המצורף מריץ כרגע את PostgreSQL 18.4. אין צורך בהתקנה מקומית נפרדת של PostgreSQL.

## התחלה מהירה מקומית

```bash
git clone https://github.com/kirill-markin/flashcards-open-source-app.git
cd flashcards-open-source-app
cp .env.example .env
make db-up
npm install --prefix api
npm install --prefix apps/auth
npm install --prefix apps/backend
npm install --prefix apps/web
npm install --prefix apps/admin
```

`make db-up` מפעיל את PostgreSQL ומריץ את `scripts/deploy/migrate.sh` דרך קונטיינר המיגרציה. עם סיסמאות ברירת המחדל שהועתקו מ-`.env.example`, המיגרציה מקימה את חיבורי זמן הריצה המקומיים האלה:

- צד השרת: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- אימות: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- דוחות: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

אם אתה משנה את `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` או `REPORTING_DB_PASSWORD` בקובץ `.env`, השתמש באותה סיסמה חדשה בכתובת החיבור המתאימה.

### הפעלה מהירה לסביבה מקומית בלבד

יעד ה-Make של צד השרת לא טוען את `.env` שבשורש. העבר במפורש את ההגדרות המקומיות שהוא דורש:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

הרץ את הלקוחות בטרמינלים נפרדים:

```bash
make web-dev
make admin-dev
```

המסלול הזה בכוונה לא מפעיל את `make auth-dev`. `AUTH_MODE=none` הוא מצב לא מאובטח במפורש, ל-localhost בלבד; לעולם אל תשתמש בו בסביבה פרוסה.
הוא מכסה פיתוח של ליבת צד השרת, הגילוי הציבורי של Agent API, אפליקציית הרשת ולוח הניהול, אבל לא מאפשר את Chat V2.

### תהליך Cognito מקומי מלא

יעד האימות טוען את `.env` שבשורש, ויעד צד השרת לא. קודם החלף את `DATABASE_URL` הישן בקובץ `.env` שהועתק בכתובת החיבור של תפקיד האימות, והוסף את ערכי Cognito האמיתיים שלך:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

הפעל את שירות האימות:

```bash
make auth-dev
```

בטרמינל של צד השרת, טען במפורש את `.env`, ואז דרוס את כתובת מסד הנתונים של האימות בכתובת החיבור של תפקיד צד השרת עבור התהליך הזה:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

הרץ את `make web-dev` ואת `make admin-dev`, כל אחד בטרמינל משלו. שני היעדים טוענים את `.env` שבשורש.

השירותים משתמשים בכתובות המקומיות האלה:

| שירות | כתובת |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| אימות, כשהוא מוגדר | `http://localhost:8081` |
| API של צד השרת | `http://localhost:8080/v1` |
| אפליקציית רשת | `http://localhost:3000` |
| לוח ניהול | `http://localhost:3001` |

עצור את PostgreSQL ואת קונטיינר המיגרציה כך:

```bash
make db-down
```

## הגדרות מקומיות

התחל מ-`.env.example`; הוא מתעד את המשתנים הזמינים ואילו ערכים מיועדים לסביבה מקומית בלבד. החלף בו את `DATABASE_URL` הישן לפני הרצת שירות האימות, כפי שמוצג למעלה.

ההגדרות המקומיות העיקריות הן:

- `MIGRATION_DATABASE_URL` למיגרציות סכמה בתוך Docker
- `DATABASE_URL` שמוגדר לתפקיד `auth_app` בקובץ `.env` שבשורש, עבור `make auth-dev`
- `DATABASE_URL` שמועבר כתפקיד `backend_app` עבור `make backend-dev`
- `AUTH_MODE` ו-`ALLOW_INSECURE_LOCAL_AUTH` לאימות בצד השרת
- `BACKEND_ALLOWED_ORIGINS` למקורות המקומיים של אפליקציית הרשת ולוח הניהול
- `ALLOWED_REDIRECT_URIS` ו-`COOKIE_DOMAIN` לאימות בדפדפן
- ערכי Cognito והצפנת הסשן, כשבודקים קוד חד-פעמי אמיתי

Agent API הוא חלק מצד השרת. מסמך הגילוי הציבורי המקומי שלו זמין בכתובת `http://localhost:8080/v1/agent` אחרי שצד השרת עולה. פעולות Agent מוגנות דורשות אימות `ApiKey` ואינן זמינות במסלול `AUTH_MODE=none`.

### היקף ה-AI לפי מסלול

הפקודות המקומיות שלמעלה לא מפעילות את ה-worker האסינכרוני של הצ׳אט. המסלול המהיר גם משתמש ב-`AUTH_MODE=none`, ש-Chat V2 דוחה; הוספת מפתח OpenAI או מכסת אורחים לא מאפשרת AI במסלול הזה. תהליך Cognito המקומי המלא מספק אמצעי העברה נתמך לאימות, אבל גם הוא לא מפעיל את ה-worker.

פריסת AWS CDK יוצרת את ה-Lambda של ה-worker ומגדירה את צד השרת להפעיל אותו. פרטי גישה לספק, כמו `OPENAI_API_KEY`, מאפשרים קריאות למודל עבור בקשות מאומתות נתמכות. `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` מאפשר ומגביל בנפרד AI לאורחים; הוא לא שולט ב-AI למשתמשים מחוברים או לבקשות עם אימות Bearer. הגדרות Langfuse הן הגדרות מעקב אופציונליות.

## לקוחות נייטיב

אותו מאגר מכיל את לקוחות iOS ו-Android, אבל פקודות הרשת והשרת המקומיות לא בונות ולא מפיצות אותם.

פרויקט iOS קורא את כתובות ה-API והאימות המקומיות מ:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

צור אותו מהדוגמה כשצריך:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

תהליכי הבנייה והבדיקה הנפרדים מתוארים ב[קובץ ה-README של iOS](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) וב[קובץ ה-README של Android](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) במאגר.

## בסביבת ייצור משתמשים ב-AWS CDK

פריסת הייצור הנתמכת היא מערך AWS CDK שכלול במאגר. הוא מבוסס על AWS ואינו ניטרלי מבחינת ספק הענן, והוא כולל:

- VPC ורשתות משנה פרטיות
- PostgreSQL 18 ב-Amazon RDS
- Amazon Cognito עם קוד חד-פעמי באימייל, בלי סיסמה
- API Gateway ו-Lambda עבור שירותי צד השרת, האימות וה-MCP
- Lambda של worker אסינכרוני לצ׳אט ו-Lambda של Cognito custom email sender
- S3 ו-CloudFront לאפליקציית הרשת ולוח הניהול
- Secrets Manager לפרטי הגישה של מסד הנתונים, הסשן, האימייל, הניטור וה-AI האופציונלי
- התראות CloudWatch, הודעות SNS ותוכנית גיבוי ל-RDS
- תפקיד פריסה עם OIDC ל-GitHub Actions
- סקריפטים להגדרת Cloudflare עבור הדומיינים הציבוריים

הפריסה חושפת את `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` ו-`mcp.<domain>`. היא יכולה גם ליצור הפניה מדומיין השורש כשאין בו שימוש אחר.

הרץ את סקריפט העזר לייצור ממחשב של מפעיל, עם:

- Node.js 24 ו-npm
- Bash ו-GNU Make
- Docker פועל
- AWS CLI מאומת מול חשבון הפריסה
- GitHub CLI מאומת מול מאגר היעד
- `curl`, `jq` ו-Python 3

לפני הפריסה, הגדר את ערכי המפעיל בקובץ `.env` שבשורש. הערכים הנדרשים כוללים את אזור AWS, הדומיין, כתובת אימייל להתראות, מאגר GitHub, פרטי הגישה ל-Cloudflare ול-Resend, והגדרות Sentry של צד השרת. פרטי הגישה ל-OpenAI ול-Langfuse אופציונליים.

הפקודה המועדפת לפריסה הראשונה, משורש המאגר, היא:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

ההתקנה המפורשת של שירות האימות נדרשת כרגע בעותק נקי של המאגר, כי סקריפט הפריסה אורז את החבילה הזו אבל לא מתקין אותה. הסקריפט יוצר או משנה משאבים אמיתיים ב-AWS, ב-Cloudflare וב-GitHub. עיין בתיעוד הפריסה במאגר ובדוק את עלויות הענן לפני שאתה מריץ אותו. הוא מבצע bootstrap ל-CDK, פורס את התשתית, מריץ מיגרציות, מעלה את הנכסים של אפליקציית הרשת ולוח הניהול, מגדיר את רשומות ה-DNS הציבוריות `app`, `admin`, `api`, `auth` ו-`mcp` אלא אם דילגת על כך, וממלא הגדרות חסרות של GitHub Actions.

אחרי הפריסה:

1. אשר את המינוי ל-SNS שנשלח לתיבת הדואר של `ALERT_EMAIL`.
2. הגדר ואמת את רשומות ה-DNS הנפרדות של דומיין השליחה ב-Resend:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` מריץ כברירת מחדל את `scripts/cloudflare/setup-dns.sh` עבור הדומיינים הציבוריים של האפליקציה. הוא לא מריץ את `setup-resend-domain.sh`; הסקריפט הזה יוצר את רשומות שולח האימייל עבור `mail.<domain>` ומאמת את הדומיין הזה מול Resend. אם אתה פורס עם `--skip-dns`, הגדר את הרשומות הציבוריות בנפרד, כפי שמתועד במדריך AWS CDK.

## ניידות נתונים

ייבוא וייצוא של חבילת סביבת עבודה מעבירים רק כרטיסים, את התגיות שלהם ומדיה קשורה. הם לא מעבירים היסטוריית חזרות, מצב מתזמן FSRS, הגדרות סביבת עבודה, מבנה חפיסות מלא או נתוני חשבון.

התייחס לחבילות כהעברת תוכן, לא כמיגרציה מלאה מהשירות המתארח לאירוח עצמי ולא כגיבוי להתאוששות מאסון. המפעילים אחראים לגיבוי ולשחזור של מסד הנתונים PostgreSQL הפרוס ושל אחסון המדיה.

## אחריות המפעיל

אירוח עצמי אומר שאתה מספק ומתחזק:

- את תשתית AWS ואת העלויות שלה
- את ה-DNS ב-Cloudflare ואת הגדרות הדומיין
- את פרטי הגישה למשלוח אימייל דרך Resend ואת רשומות הדומיין
- את הגדרות הניטור הנדרשות ב-Sentry
- פרטי גישה אופציונליים לספק AI ול-Langfuse
- סודות, שדרוגים, מיגרציות, התראות, גיבויים ובדיקות שחזור
- בנייה והפצה של אפליקציות המובייל הנייטיב, אם אתה רוצה גרסאות iOS או Android משלך

המערך כולל אוטומציה עבור רבות מהמערכות האלה, אבל עדיין דורש מפעיל. Docker Compose לא מחליף את ארכיטקטורת הייצור הזו.

## תיעוד הפריסה במאגר

- [קובץ ה-README של המאגר](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [מדריך הפריסה של צד השרת ואפליקציית הרשת](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [מדריך הפריסה ב-AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [תשתית AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
