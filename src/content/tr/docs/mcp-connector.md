---
title: MCP Bağlayıcısı
description: "Nibomo'yu Claude dizini üzerinden bağlayın ya da uzak MCP sunucusunu Claude Code ve diğer istemcilerde yapılandırın: OAuth ve bilgi kartları ile tekrarlar için sekiz araç."
---

## Claude dizini üzerinden bağlanın

[Claude dizinindeki Nibomo](https://claude.ai/directory/nibomo) sayfasını açın, bağlayın, Nibomo hesabınızla giriş yapın ve erişimi yetkilendirin. Nibomo, Community bağlayıcısı olarak listelenir.

Claude Code için aynı Claude abonelik hesabını kullanın ve bağlandıktan sonra `/mcp` komutunu kontrol edin. API anahtarıyla veya üçüncü taraf sağlayıcıyla yapılan girişler claude.ai bağlayıcılarınızı otomatik olarak yüklemez.

Claude Code'u doğrudan da yapılandırabilirsiniz. Aşağıdaki komutu çalıştırın, ardından Claude Code'da `/mcp` komutunu açın ve tarayıcıdaki yetkilendirmeyi tamamlayın:

```bash
claude mcp add --transport http nibomo https://mcp.nibomo.com/mcp
```

[Claude Code MCP belgeleri](https://code.claude.com/docs/en/mcp#use-mcp-servers-from-claudeai).

## Genel Bakış

Nibomo, MCP istemcilerinin ve AI agent'larının zamanı gelen kartlarınızı okuyabilmesi, bunları sizinle
her seferinde bir soru olacak şekilde tekrar edebilmesi ve sizin için kart ve deste oluşturup düzenleyebilmesi
için uzak bir MCP (Model Context Protocol) sunucusu çalıştırır.

Agent'lar iki yoldan bağlanabilir: bu MCP sunucusu üzerinden (Claude veya Cursor gibi MCP
istemcileri için en iyisi) ya da CLI agent'ları için [Agents API keşif URL'si](/docs/api/) üzerinden.
İkisi de kullanıcı başına aynı veri arayüzüne ulaşır; bu sayfa MCP sunucusunu anlatır.

Şu adresten bağlanın:

```text
https://mcp.nibomo.com/mcp
```

Aktarım yöntemi Streamable HTTP'dir. Sunucu; çalışma alanı keşfi, kart ve deste okuma ve yazma, başvuru rehberleri, tekrarlar ve hesap kullanımı için sekiz araç sunar.

## İstemcinize Nasıl Eklenir

Çoğu istemci uzak bir MCP sunucusunu özel bağlayıcı olarak ekler:

1. İstemcinizin bağlayıcı veya MCP sunucusu ayarlarını açın.
2. Özel bir bağlayıcı ekleyin ve sunucu URL'si olarak `https://mcp.nibomo.com/mcp` adresini yapıştırın.
3. Etkileşimli istemcilerde, istendiğinde tarayıcıda yetkilendirin. Sunucu
   Dynamic Client Registration ile OAuth 2.1 kullanır; bu yüzden yapıştırılacak bir istemci gizli anahtarı
   ya da önceden kaydedilecek bir uygulama yoktur.
4. Headless veya CLI kullanımında tarayıcı akışı yerine agent API anahtarınızla
   bir `Authorization: Bearer fca_…` başlığı ayarlayın.

Yetkilendirmeden sonra bir çalışma alanı seçmek için `list_workspaces` aracını bir kez çağırın, ardından
okumalar için `sql_query`, kart ve deste yazmaları için `sql_execute` kullanın. Tekrar etmek için
önce `next_review_card`, sonra `reveal_answer`, ardından `submit_review` çağırın.

## Araçlar

Sunucu sekiz araç sunar. Okuma ve yazma bilerek ayrılmıştır; böylece hiçbir araç
güvenli ve yıkıcı işlemleri bir arada yapmaz.

- `get_usage_limits` — hesap planı, sınırlar ve bu ayki AI kullanımı için kesinlikle salt okunur erişim; kartları okumaz veya değiştirmez.
- `sql_query` — kartlarınıza ve destelerinize kesinlikle salt okunur erişim (`SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS`, `SELECT`).
- `sql_execute` — kartlarınıza ve destelerinize atomik bir toplu iş olarak yazma erişimi (`INSERT`, `UPDATE`,
  `DELETE`).
- `list_workspaces` — erişebildiğiniz çalışma alanlarının kesinlikle salt okunur listesi;
  her birinde
  `workspaceId`, ad, etkin kart sayısı, son etkinlik ve şu anda seçili varsayılanınız olup
  olmadığı yer alır. SQL ve tekrar araçlarının isteğe bağlı `workspaceId` argümanı için
  döndürülen bir `workspaceId` değerini kullanın.
- `get_guide` — tek bir konu için kesinlikle salt okunur başvuru rehberi: `sql_dialect`,
  `card_authoring`, `bulk_authoring` veya `review_flow`. Hiçbir çalışma alanı verisini okumaz.
- `next_review_card` — kesinlikle salt okunur: tekrar edilecek sonraki kartı, uygulamalardaki
  kuyruk sırasıyla ve yalnızca ön yüzüyle döndürür. İsteğe bağlı `tags` veya `deckId`
  kuyruğu daraltır.
- `reveal_answer` — kesinlikle salt okunur: öğrenci ön yüzü yanıtlamaya çalıştıktan sonra
  bir kartın arka yüzünü döndürür.
- `submit_review` — tek bir `Again`, `Hard`, `Good` veya `Easy` değerlendirmesini kaydeder ve
  kartın FSRS planını ilerletir.

SQL arayüzü bilerek sınırlandırılmış bir lehçedir ve tam PostgreSQL değildir.
Bu belgeler yalnızca desteklenen lehçeyi kapsar; bir PostgreSQL uyumluluk
referansı değildir. Deyimler yalnızca `workspace`, `cards`, `decks` ve
`review_events` kaynaklarına erişebilir, her deyim kendi çalışma alanınızla sınırlıdır ve
okumalar ile yazmalar deyim başına `100` satırla sınırlıdır.

## Tekrarlar

Tekrar araçları, bir agent'ın öğrenciye kartları tek tek sormasını ve her
değerlendirmeyi kartın FSRS planına kaydetmesini sağlar:

1. `next_review_card`, bir `cardId` ve `frontText` döndürür ya da zamanı gelen kart
   yoksa `card: null` döndürür.
2. Öğrenci yanıtladıktan sonra `reveal_answer`, o kartın `backText` değerini döndürür.
3. `submit_review`; `cardId`, istemcinin ürettiği bir `reviewId` UUID'si, bir
   `rating` ve öğrencinin IANA `reviewedTimeZone` değerini alır. Tekrar zamanını
   sunucu kaydeder ve kartın yeni planını döndürür.

Sonucu belirsiz kalan bir gönderimi aynı `reviewId` ile yeniden deneyin; yeniden deneme hiçbir zaman
ikinci bir tekrar kaydı oluşturmaz. Bir gönderim ayrıca şu yanıtları verebilir:

- `409 REVIEW_EVENT_CONFLICT` — tekrar zaten kaydedilmiştir ve hata
  ayrıntıları kartın güncel planını taşır.
- `409 REVIEW_ID_CARD_MISMATCH` — `reviewId` zaten başka bir kartın tekrarını
  tanımlıyor, bu yüzden hiçbir şey kaydedilmedi; yeni bir `reviewId` ile yeniden gönderin.
- `409 REVIEW_STALE` — kartın kayıtlı tekrar zamanı, sunucunun şu anki zamanına eşit
  ya da ondan sonradır; başka bir kartı tekrar edin.

Tekrarlar yalnızca `submit_review` üzerinden kaydedilir: SQL, `review_events` tablosuna veya
FSRS zamanlama durumuna yazamaz. Tekrar ve değerlendirme kurallarının tamamı için `get_guide`
aracını `review_flow` konusuyla çağırın.

## Kart Sözleşmesi

Her kart tek bir sözleşmeye uyar ve araçlar buna dayanır:

- `front_text` yalnızca bir soru veya tekrar için bir ipucudur ve hiçbir zaman cevabı içermez.
- `back_text` cevabı, isteğe bağlı olarak somut bir örnekle birlikte içerir.

Kartları `sql_execute` ile oluşturan agent'lar bu sözleşmeye uyar; böylece oluşturdukları
kartlar aralıklı tekrarla hemen tekrar edilebilir.

## Kimlik Doğrulama

İki yetkilendirme yolu, kullanıcı başına aynı veri arayüzüne ulaşır.

### OAuth 2.1 (etkileşimli bağlayıcı istemcileri)

Sunucu, PKCE ve Dynamic Client Registration ile yetkilendirme kodu akışını uygular.
MCP URL'sini özel bir bağlayıcı olarak ekleyin ve tarayıcıda yetkilendirin;
önceden paylaşılan bir istemci gizli anahtarı yoktur. Keşif standarttır:

- Korunan kaynak meta verileri:
  `https://mcp.nibomo.com/.well-known/oauth-protected-resource`
- Yetkilendirme sunucusu meta verileri:
  `https://auth.flashcards-open-source-app.com/.well-known/oauth-authorization-server`

### API anahtarı (headless ve CLI)

[API referansında](/docs/api/) belgelenen e-posta OTP giriş akışıyla uzun ömürlü bir `fca_`
agent API anahtarı alın, ardından bunu Bearer token olarak gönderin:

```text
Authorization: Bearer fca_ABCDEFGH_0123456789ABCDEFGHJKMNPQRS
```

Bu, REST agent arayüzünün kabul ettiği anahtarın aynısıdır ve tarayıcı ya da
OAuth gidiş-dönüşü gerektirmez.

Her iki yolun kanonik, makine tarafından okunabilir açıklaması `https://api.nibomo.com/v1/`
adresindeki keşif yanıtıdır (`/v1/agent` adresinde de aynısı bulunur).

## Güvenlik ve Kapsam

SQL araçlarını onaylamak güvenlidir, çünkü arayüz keyfi veritabanı erişimi değil,
ayrıştırıcı tarafından denetlenen, sınırları belli bir lehçedir:

- **Kapalı deyim izin listesi**: `sql_query` yalnızca `SHOW TABLES`,
  `DESCRIBE`, `SHOW COLUMNS` ve `SELECT` kabul eder; `sql_execute` yalnızca `INSERT`,
  `UPDATE` ve `DELETE` kabul eder. Diğer her şey ayrıştırma aşamasında reddedilir.
- **Sınırlı kaynaklar**: deyimler yalnızca `workspace`, `cards`, `decks`
  ve `review_events` kaynaklarına erişebilir.
- **Çalışma alanı başına kapsam**: her SQL deyimi ve tekrar, erişebildiğiniz tek bir
  çalışma alanıyla sınırlıdır; bu alan ya ilettiğiniz `workspaceId` ya da seçili
  varsayılanınızdır ve kiracılar arası erişim yoktur.
- **Katı argümanlar**: her araç bilinmeyen bir argümanı reddeder; böylece yanlış yazılmış bir
  `workspaceId`, varsayılan çalışma alanınızda çalışmak yerine hata verir.
- **Üst sınırlar**: deyim başına en fazla `100` satır, toplu iş başına en fazla `50` deyim ve
  yaklaşık `12k` token'lık sonuç sınırı. Değişiklik toplu işleri atomik olarak uygulanır.
- **Okuma/yazma ayrımı**: `get_usage_limits`, `sql_query`, `list_workspaces`, `get_guide`,
  `next_review_card` ve `reveal_answer` kesinlikle salt okunurdur (`readOnlyHint`)
  ve hiçbir zaman veriyi onarmaz, zamanlamayı yeniden hesaplamaz veya kart durumunu değiştirmez.
  Yalnızca `sql_execute` ve `submit_review` yazma araçlarıdır (`destructiveHint`):
  `sql_execute` kart ve deste yazar, `submit_review` ise bir tekrarı kaydeder ve
  kartının planını ilerletir.

Yığının tamamı — uygulama, backend ve altyapı — açık kaynaktır ve
[kendi sunucunuzda barındırılabilir](/docs/self-hosting/); böylece aynı bağlayıcıyı kendi
dağıtımınızla kullanabilirsiniz.
