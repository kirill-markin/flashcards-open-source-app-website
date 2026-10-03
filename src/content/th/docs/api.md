---
title: เอกสารอ้างอิง API
description: API สำหรับเอเจนต์ภายนอก ครอบคลุม discovery การตั้งค่าเริ่มต้นด้วย OTP การตั้งค่าพื้นที่ทำงาน และส่วนติดต่อ SQL สำหรับอ่านและเขียนที่เผยแพร่ไว้
---

## ภาพรวม

หน้านี้อธิบายข้อกำหนดการเชื่อมต่อในปัจจุบันสำหรับ AI agent ภายนอกของ Nibomo

หากไคลเอ็นต์ของคุณรองรับ MCP [ตัวเชื่อมต่อ MCP](/docs/mcp-connector/) คือวิธีเชื่อมต่อที่ง่ายที่สุด และครอบส่วนติดต่อข้อมูลชุดเดียวกันนี้ไว้ หน้านี้อธิบายข้อกำหนดของ discovery ผ่าน HTTP, SQL, คู่มือ และการทบทวนที่เอเจนต์แบบ CLI ใช้

เริ่มจากจุดเริ่มต้น discovery หลัก:

```text
GET https://api.nibomo.com/v1/
```

ข้อมูล discovery ชุดเดียวกันนี้เรียกได้ที่ `GET /v1/agent` แต่ `/v1/` คือจุดเริ่มต้นสาธารณะหลัก

การตอบกลับ discovery จะบอกเอเจนต์ว่าต้องทำอย่างไรเพื่อ:

- เริ่มการเข้าสู่ระบบด้วย OTP ทางอีเมล
- แลก OTP เป็นคีย์ API แบบใช้งานได้ระยะยาว
- โหลดบริบทของบัญชี
- สร้างหรือเลือกพื้นที่ทำงาน
- ทำงานต่อผ่านส่วนติดต่อ SQL ที่เผยแพร่ไว้
- ดึงคู่มืออ้างอิงและทบทวนการ์ดทีละใบ

## Discovery ขณะรันไทม์และซอร์สโค้ด

ไม่มี OpenAPI ให้ใช้งาน URL ข้อกำหนดเดิมทั้งสี่รายการด้านล่างจะส่งคืนประกาศ discovery แบบ JSON ชุดเดียวกันที่มี `"openapiAvailable": false` แทนสคีมา:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

ใช้ `GET https://api.nibomo.com/v1/` สำหรับ discovery ขณะรันไทม์ในปัจจุบัน ไปตาม `docs.discoveryUrl` ที่ส่งกลับมาเพื่อดูเส้นทางขณะรันไทม์ และไปตาม `docs.source.agentRoutesUrl` สำหรับรายละเอียดการทำงานในโค้ด

## การตั้งค่าเริ่มต้นสำหรับการยืนยันตัวตน

การตั้งค่าเริ่มต้นด้วย OTP ทำงานบนบริการยืนยันตัวตน:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

ขั้นตอนมีดังนี้:

1. เรียก `GET /v1/`
2. ส่งอีเมลของผู้ใช้ไปยัง `send-code`
3. อ่าน `otpSessionToken` จากการตอบกลับ
4. ขอรหัส 8 หลักล่าสุดที่ส่งทางอีเมลจากผู้ใช้
5. เรียก `verify-code` พร้อม `code`, `otpSessionToken` และ `label`
6. เก็บคีย์ API ที่ได้รับไว้นอกหน่วยความจำของแชต

ตัวแปรสภาพแวดล้อมที่แนะนำ:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

คำขอที่ยืนยันตัวตนแล้วใช้:

```text
Authorization: ApiKey <key>
```

ตัวอย่างลำดับการตั้งค่าเริ่มต้น:

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

## ส่วนติดต่อสำหรับเอเจนต์หลังเข้าสู่ระบบ

หลังยืนยันแล้ว ส่วนติดต่อสำหรับเอเจนต์ในปัจจุบันมีดังนี้:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (อ่านอย่างเดียว)
- `POST /v1/agent/sql/execute` (เขียน)
- `GET /v1/agent/guide/{topic}` (อ่านอย่างเดียว)
- `POST /v1/agent/reviews/next` (อ่านอย่างเดียว)
- `POST /v1/agent/reviews/reveal` (อ่านอย่างเดียว)
- `POST /v1/agent/reviews/submit` (เขียน)

การตั้งค่าเริ่มต้นโดยทั่วไปมีลักษณะดังนี้:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. หากจำเป็น `POST /v1/agent/workspaces` พร้อม `{"name":"Personal"}`
4. หากจำเป็น `POST /v1/agent/workspaces/{workspaceId}/select`
5. ใช้ `POST /v1/agent/sql/query` สำหรับการอ่าน และ `POST /v1/agent/sql/execute` สำหรับการเขียน

การเลือกพื้นที่ทำงานต้องทำอย่างชัดเจนแยกตามการเชื่อมต่อของคีย์ API แต่ละรายการ เอเจนต์ควรทำตามข้อความ `instructions` ที่ส่งกลับมา และใช้ `docs.discoveryUrl` สำหรับเส้นทางขณะรันไทม์ รวมถึง `docs.source.agentRoutesUrl` สำหรับรายละเอียดการทำงานในโค้ด แทนการเดาขั้นตอนถัดไป

เส้นทาง SQL และการทบทวนยังรับ `workspaceId` ที่ไม่บังคับในเนื้อหาคำขอแบบ JSON ได้ด้วย ค่านี้จะกำหนดพื้นที่ทำงานเป้าหมายสำหรับการเรียกครั้งนั้นครั้งเดียวโดยไม่เปลี่ยนการเลือก หากไม่ระบุจะใช้พื้นที่ทำงานที่เลือกไว้ หากไม่มีทั้งการเลือกและ `workspaceId` เส้นทางเหล่านี้จะตอบกลับ `409 WORKSPACE_SELECTION_REQUIRED`

## ส่วนติดต่อ SQL

`POST /v1/agent/sql/query` คือส่วนติดต่อแบบอ่านอย่างเดียวอย่างเคร่งครัด (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`) และ `POST /v1/agent/sql/execute` คือส่วนติดต่อสำหรับการเขียน (`INSERT`, `UPDATE`, `DELETE`) การเรียกหนึ่งครั้งต้องเป็นการอ่านทั้งหมดหรือการเขียนทั้งหมด

ส่วนติดต่อนี้ถูกจำกัดขอบเขตโดยตั้งใจ และไม่ใช่ PostgreSQL เต็มรูปแบบ เอกสารนี้ครอบคลุมเฉพาะไวยากรณ์ที่รองรับ ไม่ใช่เอกสารอ้างอิงความเข้ากันได้กับ PostgreSQL

ไม่มีเส้นทางการอ่านใดที่ซ่อมแซมข้อมูล คำนวณการจัดตารางใหม่ หรือเปลี่ยนสถานะของการ์ด ใช้ `POST /v1/agent/sql/execute` สำหรับการเขียนการ์ดและชุดการ์ดทุกครั้ง SQL ไม่สามารถเขียน `review_events` หรือสถานะการจัดตารางของ FSRS ได้ ให้บันทึกการทบทวนผ่าน `POST /v1/agent/reviews/submit`

กลุ่มคำสั่งที่รองรับในปัจจุบัน:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

ทรัพยากรเชิงตรรกะที่เผยแพร่ในปัจจุบันได้แก่:

- `workspace`
- `cards`
- `decks`
- `review_events`

หมายเหตุ:

- `LIMIT` มีค่าเริ่มต้นเป็น `100` และสูงสุดที่ `100`
- ใช้ `ORDER BY` เมื่อต้องการแบ่งหน้าที่ลำดับคงที่
- ใช้ `SHOW TABLES` หรือ `DESCRIBE cards` เพื่อสำรวจสคีมา
- การเรียก SQL ทุกครั้งจำกัดขอบเขตอยู่ในพื้นที่ทำงานเดียว คือ `workspaceId` ในเนื้อหาคำขอ หรือพื้นที่ทำงานที่เลือกไว้

ตัวอย่างคำขอ:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

ตัวอย่างการค้นหาการ์ด:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

ตัวอย่างการแก้ไขข้อมูล:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

นอกจากนี้ยังมีเซิร์ฟเวอร์ MCP ระยะไกลที่ `https://mcp.nibomo.com/mcp` ซึ่งใช้ OAuth 2.1 (Dynamic Client Registration + PKCE) เซิร์ฟเวอร์นี้แบ่ง SQL แบบเดียวกันเป็น `sql_query` (อ่านอย่างเดียวอย่างเคร่งครัด) และ `sql_execute` (เขียน) พร้อม `list_workspaces`, `get_guide` และเครื่องมือการทบทวน `next_review_card`, `reveal_answer` และ `submit_review` ดู[ตัวเชื่อมต่อ MCP](/docs/mcp-connector/)

### ความปลอดภัยและขอบเขต

ส่วนติดต่อ SQL เป็นภาษาย่อยที่ถูกจำกัดขอบเขตและบังคับใช้ด้วยตัวแยกวิเคราะห์ (parser) ไม่ใช่ PostgreSQL แบบดิบ มาตรการป้องกันมีดังนี้:

- **รายการคำสั่งที่อนุญาตแบบปิด**: การอ่านใช้ได้เฉพาะ `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` และ `SELECT` ส่วนการเขียนใช้ได้เฉพาะ `INSERT`, `UPDATE` และ `DELETE` คำสั่งอื่นจะถูกปฏิเสธตั้งแต่ขั้นแยกวิเคราะห์
- **ทรัพยากรที่จำกัด**: คำสั่งเข้าถึงได้เฉพาะทรัพยากร `workspace`, `cards`, `decks` และ `review_events`
- **การจำกัดขอบเขตตามพื้นที่ทำงาน**: ทุกคำสั่งจำกัดขอบเขตอยู่ในพื้นที่ทำงานเดียวที่คุณเข้าถึงได้ คือ `workspaceId` ในเนื้อหาคำขอ หรือพื้นที่ทำงานที่คุณเลือกไว้ โดยไม่มีการเข้าถึงข้ามผู้เช่า (tenant)
- **เนื้อหาคำขอแบบเข้มงวด**: เส้นทาง SQL และการทบทวนจะปฏิเสธฟิลด์ที่ไม่รู้จักในเนื้อหาคำขอ ดังนั้นหากสะกด `workspaceId` ผิด คำขอจะล้มเหลวแทนที่จะทำงานกับพื้นที่ทำงานที่เลือกไว้
- **ขีดจำกัด**: สูงสุด `100` แถวต่อคำสั่ง สูงสุด `50` คำสั่งต่อชุด และผลลัพธ์จำกัดไว้ราว `12k` โทเค็น ชุดคำสั่งแก้ไขข้อมูลจะมีผลแบบอะตอมมิก
- **การแยกอ่าน/เขียน**: `sql_query` และ `list_workspaces` เป็นแบบอ่านอย่างเดียวอย่างเคร่งครัด (`readOnlyHint`) และไม่ซ่อมแซมข้อมูล ไม่คำนวณการจัดตารางใหม่ และไม่เปลี่ยนสถานะของการ์ด `sql_execute` เป็นเครื่องมือ SQL เดียวที่เขียนข้อมูล (`destructiveHint`) การเรียกหนึ่งครั้งต้องเป็นการอ่านทั้งหมดหรือการเขียนทั้งหมด SQL ไม่สามารถเขียน `review_events` หรือสถานะการจัดตารางของ FSRS ได้ มีเพียง `POST /v1/agent/reviews/submit` (MCP `submit_review`) เท่านั้นที่บันทึกการทบทวน

## คู่มือ

`GET /v1/agent/guide/{topic}` ส่งคืนคู่มืออ้างอิงหนึ่งฉบับใน `data.guide` ซึ่งมีเนื้อหาเดียวกับที่เครื่องมือ MCP `get_guide` ให้บริการ หัวข้อมีดังนี้:

- `sql_dialect`: ไวยากรณ์ SQL ฉบับเต็ม ขีดจำกัด และตัวอย่าง
- `card_authoring`: ข้อกำหนดของการ์ด แท็ก การตรวจสอบรายการซ้ำ และการจัดรูปแบบ
- `bulk_authoring`: การแบ่งและตรวจสอบงานเขียนข้อมูลขนาดใหญ่
- `review_flow`: วงจรการทบทวนและการให้คะแนน

หัวข้อที่ไม่รู้จักจะตอบกลับ `400` พร้อมรายการหัวข้อที่รองรับ ให้ดึงคู่มือที่ตรงกันก่อนสร้างการ์ด เขียนข้อมูลจำนวนมาก หรือเริ่มการทบทวน และอ่าน `sql_dialect` อีกครั้งหลังจากคำสั่งถูกปฏิเสธ

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## การทบทวน

เส้นทางการทบทวนช่วยให้เอเจนต์ถามทดสอบผู้เรียนทีละใบ และบันทึกคะแนนแต่ละครั้งลงในตารางทบทวน FSRS ของการ์ด เส้นทางเหล่านี้รับอาร์กิวเมนต์ JSON แบบเดียวกับเครื่องมือการทบทวนของ MCP:

- `POST /v1/agent/reviews/next` ส่งคืน `card` พร้อม `cardId` และ `frontText` หรือ `card: null` เมื่อไม่มีการ์ดที่ถึงกำหนด `tags` ที่ไม่บังคับ (ตรงกับแท็กใดก็ได้) หรือ `deckId` ใช้จำกัดคิวให้แคบลง แต่ห้ามใช้ทั้งสองอย่างพร้อมกัน คำขอที่ไม่มีเนื้อหาก็ใช้ได้
- `POST /v1/agent/reviews/reveal` ต้องระบุ `cardId` และส่งคืน `backText` ของการ์ดนั้น
- `POST /v1/agent/reviews/submit` ต้องระบุ `cardId`, `reviewId` แบบ UUID ที่ไคลเอ็นต์สร้างขึ้น, `rating` ที่เป็น `Again`, `Hard`, `Good` หรือ `Easy` และ `reviewedTimeZone` แบบ IANA ของผู้เรียน เซิร์ฟเวอร์จะประทับเวลาการทบทวนและส่งคืนตารางทบทวนใหม่ของการ์ด รวมถึง `dueAt`, `state`, `reps` และ `lapses`

ทั้งสามเส้นทางรับ `workspaceId` ที่ไม่บังคับได้ ให้เก็บ `reviewId` ไว้ก่อนส่ง และหากไม่แน่ใจว่าการส่งสำเร็จหรือไม่ ให้ลองใหม่ด้วยคำขอที่เหมือนเดิมทุกประการ ระบบจะไม่บันทึกการทบทวนซ้ำเป็นครั้งที่สอง เส้นทางการทบทวนอาจตอบกลับดังนี้ได้ด้วย:

- `409 REVIEW_EVENT_CONFLICT`: การทบทวนนี้ถูกบันทึกไว้แล้ว และ `error.details.reviewSchedule` มีตารางทบทวนปัจจุบันของการ์ด
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` นี้ใช้ระบุการทบทวนของการ์ดใบอื่นอยู่แล้ว จึงไม่มีการบันทึกใด ๆ ให้ส่งใหม่ด้วย `reviewId` ใหม่
- `409 REVIEW_STALE`: เวลาทบทวนที่บันทึกไว้ของการ์ดตรงกับหรือหลังเวลาปัจจุบันของเซิร์ฟเวอร์ ให้ทบทวนการ์ดใบอื่น
- `400 REVIEW_INPUT_INVALID`: อาร์กิวเมนต์ขาดหาย ไม่ถูกต้อง หรือไม่รองรับ รวมถึงการใช้ `tags` ร่วมกับ `deckId` หรือแท็กที่พื้นที่ทำงานไม่ได้ใช้

ตัวอย่างการส่งผลการทบทวน:

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

## API สำหรับผู้ใช้และการซิงค์

Nibomo ยังมี API แยกต่างหากสำหรับไคลเอ็นต์ที่ผู้ใช้ใช้งานโดยตรงและการซิงค์แบบออฟไลน์เป็นหลัก แต่ API เหล่านี้ไม่ใช่ข้อกำหนดหลักสำหรับเอเจนต์ภายนอก:

- โฟลว์ในเบราว์เซอร์ใช้คุกกี้แบบโดเมนร่วมกันพร้อมการป้องกัน CSRF
- ไคลเอ็นต์ที่ทำงานแบบออฟไลน์เป็นหลักใช้เส้นทางซิงค์ที่มีอยู่แล้วภายใต้ `/v1/workspaces/{workspaceId}/sync/push` และ `/v1/workspaces/{workspaceId}/sync/pull`
- เส้นทางซิงค์แยกจากส่วนติดต่อสำหรับเอเจนต์ภายนอก
