---
title: คู่มือการโฮสต์เอง
description: รัน Nibomo ในเครื่องพร้อม PostgreSQL ระบบยืนยันตัวตน แบ็กเอนด์ เว็บ และแอปผู้ดูแลระบบ หรือดีพลอยสแตกโปรดักชันด้วย AWS CDK ตามที่มีเอกสารไว้
---

Nibomo รองรับสองแนวทางที่แยกจากกัน คือสภาพแวดล้อมสำหรับพัฒนาในเครื่อง และการดีพลอยระดับโปรดักชันบน AWS ส่วน Docker Compose ใช้รัน PostgreSQL และการย้ายข้อมูล (migration) สำหรับการพัฒนาในเครื่องเท่านั้น ไม่ใช่วิธีการดีพลอยโปรดักชัน

## ข้อกำหนดสำหรับการพัฒนาในเครื่อง

- Git
- Bash
- GNU Make
- Docker พร้อม Docker Compose
- Node.js 24
- npm

ไฟล์ Docker Compose ที่ให้มาปัจจุบันรัน PostgreSQL 18.4 คุณไม่จำเป็นต้องติดตั้ง PostgreSQL ในเครื่องแยกต่างหาก

## เริ่มต้นใช้งานในเครื่องอย่างรวดเร็ว

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

`make db-up` จะเริ่ม PostgreSQL และรัน `scripts/deploy/migrate.sh` ผ่านคอนเทนเนอร์สำหรับ migration เมื่อใช้รหัสผ่านเริ่มต้นที่คัดลอกมาจาก `.env.example` การ migration จะจัดเตรียมการเชื่อมต่อขณะรันไทม์ในเครื่องดังนี้:

- backend: `postgresql://backend_app:backend_app@localhost:5432/flashcards`
- auth: `postgresql://auth_app:auth_app@localhost:5432/flashcards`
- reporting: `postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards`

หากคุณเปลี่ยน `BACKEND_DB_PASSWORD`, `AUTH_DB_PASSWORD` หรือ `REPORTING_DB_PASSWORD` ใน `.env` ให้ใช้รหัสผ่านใหม่เดียวกันใน URL การเชื่อมต่อที่ตรงกัน

### เริ่มอย่างรวดเร็วสำหรับใช้ในเครื่องเท่านั้น

เป้าหมาย Make ของแบ็กเอนด์ไม่ได้โหลด `.env` ที่รูทของโปรเจกต์ ให้ส่งการตั้งค่าในเครื่องที่จำเป็นให้ชัดเจน:

```bash
AUTH_MODE=none \
ALLOW_INSECURE_LOCAL_AUTH=true \
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
REPORTING_DATABASE_URL=postgresql://reporting_readonly:reporting_readonly@localhost:5432/flashcards \
make backend-dev
```

รันไคลเอ็นต์ในเทอร์มินัลแยกกัน:

```bash
make web-dev
make admin-dev
```

แนวทางนี้ตั้งใจไม่เริ่ม `make auth-dev` ส่วน `AUTH_MODE=none` เป็นโหมดที่ไม่ปลอดภัยโดยชัดแจ้งและใช้ได้เฉพาะบน localhost ห้ามใช้ในสภาพแวดล้อมที่ดีพลอยแล้วเด็ดขาด
แนวทางนี้ครอบคลุมการพัฒนาแบ็กเอนด์หลัก discovery สาธารณะของ Agent API เว็บ และแอปผู้ดูแลระบบ แต่ไม่ได้ทำให้ใช้งาน Chat V2 ได้

### โฟลว์ Cognito เต็มรูปแบบในเครื่อง

เป้าหมาย auth โหลด `.env` ที่รูท ขณะที่เป้าหมายแบ็กเอนด์ไม่โหลด ขั้นแรกให้แทนที่ `DATABASE_URL` แบบเดิมใน `.env` ที่คัดลอกมาด้วย URL ของบทบาท auth แล้วเพิ่มค่า Cognito จริงของคุณ:

```dotenv
DATABASE_URL=postgresql://auth_app:auth_app@localhost:5432/flashcards
AUTH_MODE=cognito
COGNITO_USER_POOL_ID=<your-user-pool-id>
COGNITO_CLIENT_ID=<your-client-id>
COGNITO_REGION=<your-aws-region>
SESSION_ENCRYPTION_KEY=<64-character-hex-value>
```

เริ่ม auth:

```bash
make auth-dev
```

ในเทอร์มินัลของแบ็กเอนด์ ให้โหลด `.env` อย่างชัดเจน แล้วเขียนทับ URL ฐานข้อมูลของ auth ด้วย URL ของบทบาทแบ็กเอนด์สำหรับโปรเซสนั้น:

```bash
set -a
source .env
set +a
DATABASE_URL=postgresql://backend_app:backend_app@localhost:5432/flashcards \
make backend-dev
```

รัน `make web-dev` และ `make admin-dev` ในเทอร์มินัลแยกของแต่ละตัว ทั้งสองเป้าหมายโหลด `.env` ที่รูท

บริการต่าง ๆ ใช้ที่อยู่ในเครื่องดังนี้:

| บริการ | ที่อยู่ |
| --- | --- |
| PostgreSQL | `localhost:5432` |
| Auth (เมื่อกำหนดค่าแล้ว) | `http://localhost:8081` |
| API แบ็กเอนด์ | `http://localhost:8080/v1` |
| เว็บแอป | `http://localhost:3000` |
| แอปผู้ดูแลระบบ | `http://localhost:3001` |

หยุด PostgreSQL และคอนเทนเนอร์ migration ด้วย:

```bash
make db-down
```

## การกำหนดค่าในเครื่อง

เริ่มจาก `.env.example` ซึ่งอธิบายตัวแปรที่ใช้ได้และค่าที่ใช้เฉพาะในเครื่อง ให้แทนที่ `DATABASE_URL` แบบเดิมในไฟล์นี้ก่อนรัน auth ตามที่แสดงไว้ด้านบน

การตั้งค่าหลักในเครื่องได้แก่:

- `MIGRATION_DATABASE_URL` สำหรับ migration ของสคีมาภายใน Docker
- `DATABASE_URL` ที่ตั้งเป็นบทบาท `auth_app` ใน `.env` ที่รูท สำหรับ `make auth-dev`
- `DATABASE_URL` ที่ส่งเป็นบทบาท `backend_app` สำหรับ `make backend-dev`
- `AUTH_MODE` และ `ALLOW_INSECURE_LOCAL_AUTH` สำหรับการยืนยันตัวตนของแบ็กเอนด์
- `BACKEND_ALLOWED_ORIGINS` สำหรับ origin ของเว็บและแอปผู้ดูแลระบบในเครื่อง
- `ALLOWED_REDIRECT_URIS` และ `COOKIE_DOMAIN` สำหรับการยืนยันตัวตนผ่านเบราว์เซอร์
- ค่า Cognito และค่าการเข้ารหัสเซสชัน เมื่อทดสอบ OTP จริง

Agent API เป็นส่วนหนึ่งของแบ็กเอนด์ เอกสาร discovery สาธารณะในเครื่องเรียกได้ที่ `http://localhost:8080/v1/agent` หลังจากแบ็กเอนด์เริ่มทำงาน การดำเนินการของ Agent ที่ได้รับการป้องกันต้องยืนยันตัวตนด้วย `ApiKey` และใช้ไม่ได้ในแนวทาง `AUTH_MODE=none`

### ขอบเขตของ AI ตามแนวทาง

คำสั่งในเครื่องข้างต้นไม่ได้เริ่ม worker แชตแบบอะซิงโครนัส แนวทางแบบเร็วยังใช้ `AUTH_MODE=none` ซึ่ง Chat V2 ปฏิเสธ การเพิ่มคีย์ OpenAI หรือโควตาของผู้เยี่ยมชม (guest) จึงไม่ทำให้แนวทางนี้ใช้ AI ได้ โฟลว์ Cognito เต็มรูปแบบในเครื่องมีกลไกส่งข้อมูลการยืนยันตัวตนที่รองรับ แต่ก็ยังไม่ได้เริ่ม worker

การดีพลอยด้วย AWS CDK จะสร้าง Lambda สำหรับ worker และกำหนดค่าให้แบ็กเอนด์เรียกใช้ worker นั้น ข้อมูลรับรองของผู้ให้บริการ เช่น `OPENAI_API_KEY` จะเปิดให้เรียกโมเดลได้สำหรับคำขอที่ยืนยันตัวตนแล้วและได้รับการรองรับ `GUEST_AI_WEIGHTED_MONTHLY_TOKEN_CAP` ใช้เปิดและจำกัด AI สำหรับผู้เยี่ยมชม (guest) แยกต่างหาก โดยไม่ควบคุม AI สำหรับผู้ที่ลงชื่อเข้าใช้หรือยืนยันตัวตนด้วย bearer การตั้งค่า Langfuse เป็นการกำหนดค่าการติดตาม (tracing) ที่ไม่บังคับ

## ไคลเอ็นต์แบบเนทีฟ

รีโพซิทอรีเดียวกันนี้มีไคลเอ็นต์ iOS และ Android แต่คำสั่งเว็บ/เซิร์ฟเวอร์ในเครื่องไม่ได้บิลด์หรือแจกจ่ายไคลเอ็นต์เหล่านี้

โปรเจกต์ iOS อ่านโฮสต์ API และ auth ในเครื่องจาก:

```text
apps/ios/Flashcards/Config/Local.xcconfig
```

สร้างไฟล์นี้จากไฟล์ตัวอย่างเมื่อจำเป็น:

```bash
cp apps/ios/Flashcards/Config/Local.xcconfig.example apps/ios/Flashcards/Config/Local.xcconfig
```

ดู[iOS README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/ios/README.md) และ [Android README](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/apps/android/README.md) ของรีโพซิทอรี สำหรับขั้นตอนการบิลด์และทดสอบที่แยกกันของแต่ละแพลตฟอร์ม

## โปรดักชันใช้ AWS CDK

การดีพลอยโปรดักชันที่รองรับคือสแตก AWS CDK ที่ให้มา สแตกนี้อิงกับ AWS ไม่ได้เป็นกลางต่อผู้ให้บริการ และประกอบด้วย:

- VPC และซับเน็ตส่วนตัว
- PostgreSQL 18 บน Amazon RDS
- OTP ทางอีเมลแบบไม่ใช้รหัสผ่านของ Amazon Cognito
- API Gateway และ Lambda สำหรับบริการแบ็กเอนด์ auth และ MCP
- Lambda สำหรับ worker แชตแบบอะซิงโครนัส และ Lambda สำหรับส่งอีเมลแบบกำหนดเองของ Cognito
- S3 และ CloudFront สำหรับเว็บแอปและแอปผู้ดูแลระบบ
- Secrets Manager สำหรับข้อมูลรับรองของฐานข้อมูล เซสชัน อีเมล การมอนิเตอร์ และ AI ที่ไม่บังคับ
- สัญญาณเตือน (alarm) ของ CloudWatch การแจ้งเตือนผ่าน SNS และแผนสำรองข้อมูล RDS
- บทบาทการดีพลอยแบบ OIDC สำหรับ GitHub Actions
- สคริปต์ตั้งค่า Cloudflare สำหรับโดเมนสาธารณะ

การดีพลอยจะเปิดให้ใช้ `app.<domain>`, `admin.<domain>`, `api.<domain>`, `auth.<domain>` และ `mcp.<domain>` และยังสร้างการเปลี่ยนเส้นทางที่โดเมนหลัก (apex) ได้เมื่อโดเมนหลักไม่ได้ถูกใช้เพื่อสิ่งอื่น

รันตัวช่วยสำหรับโปรดักชันจากเครื่องของผู้ดูแลระบบที่มี:

- Node.js 24 และ npm
- Bash และ GNU Make
- Docker ที่กำลังทำงาน
- AWS CLI ที่ยืนยันตัวตนกับบัญชีที่ใช้ดีพลอยแล้ว
- GitHub CLI ที่ยืนยันตัวตนกับรีโพซิทอรีเป้าหมายแล้ว
- `curl`, `jq` และ Python 3

ก่อนดีพลอย ให้กำหนดค่าของผู้ดูแลระบบใน `.env` ที่รูท ชุดค่าที่จำเป็นประกอบด้วยรีเจียนของ AWS โดเมน อีเมลสำหรับการแจ้งเตือน รีโพซิทอรี GitHub ข้อมูลรับรองของ Cloudflare ข้อมูลรับรองของ Resend และการกำหนดค่า Sentry ของแบ็กเอนด์ ส่วนข้อมูลรับรองของ OpenAI และ Langfuse ไม่บังคับ

คำสั่งที่แนะนำสำหรับการดีพลอยครั้งแรกจากรูทของรีโพซิทอรีคือ:

```bash
npm ci --prefix apps/auth
bash scripts/deploy/first-deploy.sh \
  --region eu-central-1 \
  --domain example.com \
  --alert-email alerts@example.com
```

ปัจจุบันต้องติดตั้งแพ็กเกจ auth แยกไว้อย่างชัดเจนเมื่อเริ่มจากเช็กเอาต์ใหม่ที่ยังไม่ได้ติดตั้งอะไร เพราะตัวช่วยการดีพลอยรวมแพ็กเกจนั้นเข้าบันเดิลแต่ไม่ได้ติดตั้งให้ ตัวช่วยนี้จะสร้างหรือเปลี่ยนแปลงทรัพยากรจริงบน AWS, Cloudflare และ GitHub ก่อนรัน ควรอ่านเอกสารการดีพลอยในรีโพซิทอรีและประเมินค่าใช้จ่ายคลาวด์ ตัวช่วยจะบูตสแตรป CDK ดีพลอยโครงสร้างพื้นฐาน รัน migration อัปโหลดแอสเซ็ตของเว็บและแอปผู้ดูแลระบบ กำหนดค่าเรคคอร์ด DNS สาธารณะของ `app`, `admin`, `api`, `auth` และ `mcp` เว้นแต่จะข้ามขั้นตอนนี้ และเติมการกำหนดค่า GitHub Actions ที่ยังขาดอยู่

หลังการดีพลอย:

1. ยืนยันการสมัครรับ SNS ที่ส่งไปยังกล่องจดหมาย `ALERT_EMAIL`
2. กำหนดค่าและตรวจสอบเรคคอร์ด DNS ของโดเมนผู้ส่งของ Resend ที่แยกต่างหาก:

   ```bash
   bash scripts/setup/setup-resend-domain.sh \
     --domain example.com \
     --subdomain mail
   ```

`first-deploy.sh` จะรัน `scripts/cloudflare/setup-dns.sh` สำหรับโดเมนแอปพลิเคชันสาธารณะโดยค่าเริ่มต้น แต่ไม่ได้รัน `setup-resend-domain.sh` สคริปต์หลังนี้สร้างเรคคอร์ดผู้ส่งอีเมลสำหรับ `mail.<domain>` และยืนยันโดเมนนั้นกับ Resend หากคุณดีพลอยด้วย `--skip-dns` ให้กำหนดค่าเรคคอร์ดสาธารณะแยกต่างหากตามที่อธิบายไว้ในคู่มือ AWS CDK

## การย้ายข้อมูลข้ามระบบ

การนำเข้าและส่งออกแพ็กเกจพื้นที่ทำงานจะถ่ายโอนเฉพาะการ์ด แท็กของการ์ด และสื่อที่เกี่ยวข้อง ไม่ได้ถ่ายโอนประวัติการทบทวน สถานะตัวจัดตาราง FSRS การตั้งค่าพื้นที่ทำงาน โครงสร้างชุดการ์ดทั้งหมด หรือข้อมูลบัญชี

ให้ถือว่าแพ็กเกจเป็นการถ่ายโอนเนื้อหา ไม่ใช่การย้ายจากระบบที่โฮสต์ให้ไปยังระบบที่โฮสต์เองแบบครบถ้วน หรือการสำรองข้อมูลเพื่อกู้คืนจากภัยพิบัติ ผู้ดูแลระบบมีหน้าที่สำรองและกู้คืนฐานข้อมูล PostgreSQL และพื้นที่จัดเก็บสื่อที่ดีพลอยไว้

## หน้าที่ของผู้ดูแลระบบ

การโฮสต์เองหมายความว่าคุณต้องจัดหาและดูแล:

- โครงสร้างพื้นฐาน AWS และค่าใช้จ่าย
- DNS และการกำหนดค่าโดเมนบน Cloudflare
- ข้อมูลรับรองการส่งอีเมลของ Resend และเรคคอร์ดโดเมน
- การกำหนดค่าการมอนิเตอร์ Sentry ที่จำเป็น
- ข้อมูลรับรองของผู้ให้บริการ AI และ Langfuse ที่ไม่บังคับ
- ข้อมูลลับ (secrets) การอัปเกรด migration การแจ้งเตือน การสำรองข้อมูล และการทดสอบการกู้คืน
- การบิลด์และแจกจ่ายแอปมือถือแบบเนทีฟ หากต้องการเผยแพร่ iOS หรือ Android เวอร์ชันของคุณเอง

สแตกนี้มีระบบอัตโนมัติสำหรับหลายส่วนข้างต้น แต่ยังต้องมีผู้ดูแลระบบ ส่วน Docker Compose ไม่ได้แทนที่สถาปัตยกรรมโปรดักชันนี้

## เอกสารการดีพลอยในรีโพซิทอรี

- [README ของรีโพซิทอรี](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/README.md)
- [คู่มือการดีพลอยแบ็กเอนด์และเว็บ](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/backend-web-deployment.md)
- [คู่มือการดีพลอยด้วย AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/infra/aws/README.md)
- [โครงสร้างพื้นฐาน AWS CDK](https://github.com/kirill-markin/flashcards-open-source-app/tree/main/infra/aws)
