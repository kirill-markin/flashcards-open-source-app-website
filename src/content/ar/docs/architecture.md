---
title: البنية
description: نظرة عامة على النظام، والنطاقات العامة، والعملاء المدعومين، وتدفق البيانات الحالي للعمل دون اتصال أولًا.
---

## نظرة عامة على النظام

```text
تطبيق iOS / عميل وكيل        -> api.<domain>  -> API Gateway -> Lambda backend -> Postgres
تطبيق الويب                  -> app.<domain>  -> CloudFront -> SPA
مصادقة المتصفح والوكيل       -> auth.<domain> -> API Gateway -> Auth Lambda -> Cognito
تحويل النطاق الجذر           -> <domain>      -> CloudFront redirect -> app.<domain>
```

## المبادئ

1. نطاقات عامة منفصلة لـ `app` و`api` و`auth`
2. Postgres هو مصدر الحقيقة
3. عميل iOS يعمل دون اتصال أولًا مع SQLite محلي ومزامنة
4. يشترك تطبيق الويب وعميل iOS وسطح الوكلاء الخارجيين في نموذج مساحة العمل نفسه
5. يبدأ الوكلاء الخارجيون من `GET https://api.flashcards-open-source-app.com/v1/`

## العملاء المدعومون

- تطبيق ويب على `app.flashcards-open-source-app.com`
- تطبيق iOS في المستودع الرئيسي مع تخزين SQLite محلي
- تطبيق Android على Google Play
- عملاء وكلاء خارجيون عبر الاكتشاف وتهيئة OTP ومصادقة `Authorization: ApiKey`

## نموذج البيانات

- `workspaces`
- `workspace_members`
- `user_settings`
- `devices`
- `cards`
- `decks`
- `review_events`
- `applied_operations`
- `sync_state`

## تدفق البيانات

### الويب

1. يسجّل المتصفح الدخول عبر `auth.<domain>`.
2. يحمّل تطبيق الويب بيانات مساحة العمل من `api.<domain>`.
3. تمر طلبات دردشة الذكاء الاصطناعي عبر `/chat/local-turn`.
4. تحدّث عمليات إرسال المراجعة حالة المجدول عند الكتابة.

### iOS

1. يكتب تطبيق iOS إلى SQLite محليًا أولًا.
2. توضع التغييرات المحلية في صندوق إرسال.
3. ترفع المزامنة التغييرات عبر `/v1/workspaces/{workspaceId}/sync/push`.
4. تنزّل المزامنة التحديثات البعيدة عبر `/v1/workspaces/{workspaceId}/sync/pull`.
5. تطبّق قاعدة البيانات المحلية التغييرات وتقدّم مؤشر المزامنة.

### الوكلاء الخارجيون

1. يبدأ الوكلاء بـ `GET /v1/`.
2. تعمل مرحلة OTP الأولى على `auth.<domain>`.
3. يتلقى الوكيل مفتاح API طويل العمر.
4. يحمّل الوكيل `/v1/agent/me`، ويسرد مساحات العمل، ويختار واحدة إذا لزم الأمر، ثم يستخدم `/v1/agent/sql`.

## الجدولة

يستخدم Flashcards خوارزمية FSRS كمجدول للمراجعة.

ملاحظات التنفيذ:

- تحتفظ الخلفية وiOS بتطبيقين متطابقين لـ FSRS
- يعكس تطبيق الويب عقد بيانات الجدولة، لكنه لا يشحن نسخة ثالثة من المجدول
- تتضمن إعدادات المجدول على مستوى مساحة العمل الاحتفاظ المرغوب وخطوات التعلم وخطوات إعادة التعلم والحد الأقصى للفاصل والزغب
- يأتي الطابع الزمني الحقيقي للمراجعة من `reviewedAtClient`

للعقد التفصيلي، راجع [منطق جدولة FSRS في المستودع الرئيسي](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md).

## المصادقة

- OTP عبر البريد باستخدام Cognito
- ملفات تعريف ارتباط جلسة مشتركة النطاق لتطبيق الويب المستضاف
- تهيئة OTP للوكلاء على `auth.<domain>` مع إخراج ApiKey طويل العمر
- `AUTH_MODE=none` للتطوير المحلي
- `AUTH_MODE=cognito` للمصادقة الشبيهة بالإنتاج

## شكل النشر

- `app.<domain>` -> CloudFront + S3
- `api.<domain>` -> API Gateway + Lambda backend
- `auth.<domain>` -> API Gateway + Lambda auth service
- Postgres في AWS RDS

يمكن أن يبقى النطاق الجذر على موقع تسويقي منفصل. وإذا كان غير مستخدم أثناء مرحلة التمهيد، يمكن للبنية التحتية تحويله مؤقتًا إلى `app.<domain>`.
