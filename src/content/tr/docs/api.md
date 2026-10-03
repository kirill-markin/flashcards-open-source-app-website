---
title: API Referansı
description: Keşif, OTP ile ilk kurulum, çalışma alanı kurulumu ve yayımlanan okuma ve yazma SQL arayüzleri için harici agent API'si.
---

## Genel Bakış

Bu sayfa Nibomo'nun harici AI agent'ları için geçerli sözleşmesini belgeler.

İstemciniz MCP destekliyorsa bağlanmanın en basit yolu [MCP bağlayıcısıdır](/docs/mcp-connector/);
bağlayıcı aynı veri arayüzünü sarmalar. Bu sayfa ise CLI agent'larının kullandığı HTTP keşif,
SQL, rehber ve tekrar sözleşmesini belgeler.

Kanonik keşif giriş noktasından başlayın:

```text
GET https://api.nibomo.com/v1/
```

Aynı keşif yanıtı `GET /v1/agent` adresinden de alınabilir, ancak birincil ve herkese açık giriş noktası `/v1/` adresidir.

Keşif yanıtı bir agent'a şunları nasıl yapacağını anlatır:

- e-posta OTP girişini başlatmak
- OTP karşılığında uzun ömürlü bir API anahtarı almak
- hesap bağlamını yüklemek
- bir çalışma alanı oluşturmak veya seçmek
- yayımlanan SQL arayüzüyle devam etmek
- başvuru rehberlerini almak ve kartları tek tek tekrar etmek

## Çalışma Zamanında Keşif ve Kaynak Kod

OpenAPI sunulmuyor. Aşağıdaki dört eski spesifikasyon URL'si artık şema yerine `"openapiAvailable": false` içeren aynı JSON keşif bildirimini döndürür:

- `https://api.nibomo.com/v1/agent/openapi.json`
- `https://api.nibomo.com/v1/agent/swagger.json`
- `https://api.nibomo.com/v1/openapi.json`
- `https://api.nibomo.com/v1/swagger.json`

Güncel çalışma zamanı keşfi için `GET https://api.nibomo.com/v1/` kullanın. Çalışma zamanı rotaları için döndürülen `docs.discoveryUrl` bağlantısını, uygulama ayrıntıları için `docs.source.agentRoutesUrl` bağlantısını izleyin.

## Kimlik Doğrulamayla İlk Kurulum

OTP ile ilk kurulum, kimlik doğrulama hizmeti üzerinden yürür:

- `POST https://auth.nibomo.com/api/agent/send-code`
- `POST https://auth.nibomo.com/api/agent/verify-code`

Akış şöyledir:

1. `GET /v1/` çağrısını yapın.
2. Kullanıcının e-posta adresini `send-code` uç noktasına gönderin.
3. Yanıttan `otpSessionToken` değerini okuyun.
4. Kullanıcıdan e-postayla gelen en son 8 haneli kodu isteyin.
5. `verify-code` uç noktasını `code`, `otpSessionToken` ve `label` ile çağırın.
6. Döndürülen API anahtarını sohbet belleğinin dışında saklayın.

Önerilen ortam değişkeni:

```bash
export FLASHCARDS_OPEN_SOURCE_API_KEY="fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS"
```

Kimliği doğrulanmış istekler şunu kullanır:

```text
Authorization: ApiKey <key>
```

Örnek ilk kurulum sırası:

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

## Giriş Sonrası Agent Arayüzü

Doğrulamadan sonra geçerli agent arayüzü şöyledir:

- `GET /v1/agent/me`
- `GET /v1/agent/workspaces`
- `POST /v1/agent/workspaces`
- `POST /v1/agent/workspaces/{workspaceId}/select`
- `POST /v1/agent/sql/query` (salt okunur)
- `POST /v1/agent/sql/execute` (yazma)
- `GET /v1/agent/guide/{topic}` (salt okunur)
- `POST /v1/agent/reviews/next` (salt okunur)
- `POST /v1/agent/reviews/reveal` (salt okunur)
- `POST /v1/agent/reviews/submit` (yazma)

Tipik bir ilk kurulum şöyle görünür:

1. `GET /v1/agent/me`
2. `GET /v1/agent/workspaces?limit=100`
3. Gerekirse `{"name":"Personal"}` ile `POST /v1/agent/workspaces`
4. Gerekirse `POST /v1/agent/workspaces/{workspaceId}/select`
5. Okumalar için `POST /v1/agent/sql/query`, yazmalar için `POST /v1/agent/sql/execute` kullanın

Çalışma alanı her API anahtarı bağlantısı için ayrı ayrı ve açıkça seçilir. Agent'lar sonraki adımı tahmin etmek yerine döndürülen `instructions` metnini, çalışma zamanı rotaları için `docs.discoveryUrl` bağlantısını ve uygulama ayrıntıları için `docs.source.agentRoutesUrl` bağlantısını izlemelidir.

SQL ve tekrar rotaları JSON gövdesinde isteğe bağlı bir `workspaceId` de kabul eder. Bu değer, seçimi değiştirmeden tek bir çağrı için o çalışma alanını hedefler; seçili çalışma alanını kullanmak için bu alanı belirtmeyin. Ne bir çalışma alanı seçilmişse ne de `workspaceId` verilmişse bu rotalar `409 WORKSPACE_SELECTION_REQUIRED` ile yanıt verir.

## SQL Arayüzü

`POST /v1/agent/sql/query` kesinlikle salt okunur arayüzdür (`SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS`, `SELECT`), `POST /v1/agent/sql/execute` ise yazma arayüzüdür (`INSERT`, `UPDATE`, `DELETE`); tek bir çağrı ya tamamen okumalardan ya da tamamen yazmalardan oluşmalıdır.

Bu arayüz kasıtlı olarak sınırlandırılmıştır ve tam PostgreSQL değildir. Bu belgeler yalnızca
desteklenen lehçeyi kapsar; bir PostgreSQL uyumluluk referansı değildir.

Hiçbir okuma yolu veriyi onarmaz, zamanlamayı yeniden hesaplamaz veya kart durumunu değiştirmez. Her kart ve deste
yazması için `POST /v1/agent/sql/execute` kullanın. SQL, `review_events` tablosuna veya FSRS zamanlama durumuna
yazamaz; tekrarları `POST /v1/agent/reviews/submit` üzerinden kaydedin.

Şu anda desteklenen deyim türleri:

- `SHOW TABLES`
- `DESCRIBE <resource>`
- `SHOW COLUMNS FROM <resource>`
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

Yayımlanan mantıksal kaynaklar şu anda şunlardır:

- `workspace`
- `cards`
- `decks`
- `review_events`

Notlar:

- `LIMIT` varsayılan olarak `100` olur ve en fazla `100` olabilir
- kararlı sayfalama gerektiğinde `ORDER BY` kullanın
- şemayı keşfetmek için `SHOW TABLES` veya `DESCRIBE cards` kullanın
- her SQL çağrısı tek bir çalışma alanıyla sınırlıdır: gövdedeki `workspaceId` ya da seçili çalışma alanı

Örnek istek:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{"sql":"SHOW TABLES"}'
```

Örnek kart sorgusu:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/query \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"SELECT card_id, front_text, back_text, tags FROM cards ORDER BY updated_at DESC LIMIT 20 OFFSET 0"
  }'
```

Örnek yazma işlemi:

```bash
curl -X POST https://api.nibomo.com/v1/agent/sql/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY" \
  -d '{
    "sql":"UPDATE cards SET back_text = '\''Updated answer'\'' WHERE card_id = '\''50b5b928-7f04-4cc8-878d-6cd0e8b98474'\''"
  }'
```

`https://mcp.nibomo.com/mcp` adresinde, OAuth 2.1 (Dynamic Client Registration + PKCE) kullanan uzak bir MCP sunucusu da bulunur. Bu sunucu aynı SQL ayrımını `sql_query` (kesinlikle salt okunur) ve `sql_execute` (yazma) olarak sunar; ayrıca `list_workspaces`, `get_guide` araçlarını ve `next_review_card`, `reveal_answer`, `submit_review` tekrar araçlarını da içerir. Ayrıntılar için [MCP bağlayıcısı](/docs/mcp-connector/) sayfasına bakın.

### Güvenlik ve Kapsam

SQL arayüzü ham PostgreSQL değil, ayrıştırıcı tarafından denetlenen, sınırları belli bir lehçedir. Koruma önlemleri şunlardır:

- **Kapalı deyim izin listesi**: okumalar için yalnızca `SHOW TABLES`, `DESCRIBE`, `SHOW COLUMNS` ve `SELECT`, yazmalar için yalnızca `INSERT`, `UPDATE` ve `DELETE`. Diğer her şey ayrıştırma aşamasında reddedilir.
- **Sınırlı kaynaklar**: deyimler yalnızca `workspace`, `cards`, `decks` ve `review_events` kaynaklarına erişebilir.
- **Çalışma alanı başına kapsam**: her deyim, erişebildiğiniz tek bir çalışma alanıyla sınırlıdır; bu alan ya istek gövdesindeki `workspaceId` ya da seçili çalışma alanınızdır ve kiracılar arası erişim yoktur.
- **Katı istek gövdeleri**: SQL ve tekrar rotaları bilinmeyen bir gövde alanını reddeder; böylece yanlış yazılmış bir `workspaceId`, seçili çalışma alanında çalışmak yerine hata verir.
- **Üst sınırlar**: deyim başına en fazla `100` satır, toplu iş başına en fazla `50` deyim ve yaklaşık `12k` token'lık sonuç sınırı. Yazma toplu işleri atomik olarak uygulanır.
- **Okuma/yazma ayrımı**: `sql_query` ve `list_workspaces` kesinlikle salt okunurdur (`readOnlyHint`) ve hiçbir zaman veriyi onarmaz, zamanlamayı yeniden hesaplamaz veya kart durumunu değiştirmez. `sql_execute` tek SQL yazma aracıdır ve yazma işlemleri yapar (`destructiveHint`); tek bir çağrı ya tamamen okumalardan ya da tamamen yazmalardan oluşmalıdır. SQL, `review_events` tablosuna veya FSRS zamanlama durumuna yazamaz; bir tekrarı yalnızca `POST /v1/agent/reviews/submit` (MCP'de `submit_review`) kaydeder.

## Rehberler

`GET /v1/agent/guide/{topic}`, `data.guide` içinde tek bir başvuru rehberi döndürür; bu, MCP `get_guide` aracının sunduğu içeriğin aynısıdır. Konular:

- `sql_dialect`: tam SQL dilbilgisi, sınırlar ve örnekler
- `card_authoring`: kart sözleşmesi, etiketler, yinelenen kart kontrolleri ve biçimlendirme
- `bulk_authoring`: büyük bir yazma işini bölme ve doğrulama
- `review_flow`: tekrar ve değerlendirme döngüsü

Bilinmeyen bir konu, desteklenen konuların listesiyle birlikte `400` yanıtı verir. Kart oluşturmadan, toplu yazma yapmadan veya tekrar başlatmadan önce ilgili rehberi alın ve reddedilen bir deyimden sonra `sql_dialect` rehberini yeniden okuyun.

```bash
curl https://api.nibomo.com/v1/agent/guide/sql_dialect \
  -H "Authorization: ApiKey $FLASHCARDS_OPEN_SOURCE_API_KEY"
```

## Tekrarlar

Tekrar rotaları, bir agent'ın öğrenciye kartları tek tek sormasını ve her değerlendirmeyi kartın FSRS planına kaydetmesini sağlar. MCP tekrar araçlarıyla aynı JSON argümanlarını alırlar:

- `POST /v1/agent/reviews/next`, `cardId` ve `frontText` içeren `card` döndürür ya da zamanı gelen kart yoksa `card: null` döndürür. İsteğe bağlı `tags` (etiketlerden herhangi biriyle eşleşir) veya `deckId` kuyruğu daraltır; ikisi birlikte kullanılamaz; gövdesiz bir istek de geçerlidir.
- `POST /v1/agent/reviews/reveal`, `cardId` gerektirir ve o kartın `backText` değerini döndürür.
- `POST /v1/agent/reviews/submit`; `cardId`, istemcinin ürettiği bir `reviewId` UUID'si, `Again`, `Hard`, `Good` veya `Easy` değerlerinden biri olan bir `rating` ve öğrencinin IANA `reviewedTimeZone` değerini gerektirir. Tekrar zamanını sunucu kaydeder ve kartın `dueAt`, `state`, `reps` ve `lapses` dahil yeni planını döndürür.

Üç rota da isteğe bağlı `workspaceId` değerini kabul eder. Göndermeden önce `reviewId` değerini kalıcı olarak saklayın ve sonucu belirsiz kalan bir gönderimi birebir aynı istekle yeniden deneyin; yeniden deneme hiçbir zaman ikinci bir tekrar kaydı oluşturmaz. Tekrar rotaları ayrıca şu yanıtları verebilir:

- `409 REVIEW_EVENT_CONFLICT`: tekrar zaten kaydedilmiştir ve `error.details.reviewSchedule` kartın güncel planını taşır.
- `409 REVIEW_ID_CARD_MISMATCH`: `reviewId` zaten başka bir kartın tekrarını tanımlıyor, bu yüzden hiçbir şey kaydedilmedi; yeni bir `reviewId` ile yeniden gönderin.
- `409 REVIEW_STALE`: kartın kayıtlı tekrar zamanı, sunucunun şu anki zamanına eşit ya da ondan sonradır; başka bir kartı tekrar edin.
- `400 REVIEW_INPUT_INVALID`: bir argüman eksik, geçersiz veya desteklenmiyor; `tags` ile `deckId` değerinin birlikte kullanılması veya çalışma alanının kullanmadığı bir etiket de buna dahildir.

Örnek gönderim:

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

## İnsan ve Senkronizasyon API'leri

Nibomo, insan istemciler ve çevrimdışı öncelikli senkronizasyon için ayrı API'ler de içerir, ancak bunlar harici agent'lar için ana sözleşme değildir:

- tarayıcı akışları paylaşılan alan adı çerezlerini ve CSRF korumasını kullanır
- çevrimdışı öncelikli istemciler `/v1/workspaces/{workspaceId}/sync/push` ve `/v1/workspaces/{workspaceId}/sync/pull` altındaki uygulanmış senkronizasyon rotalarını kullanır
- senkronizasyon rotaları harici agent arayüzünden ayrıdır
