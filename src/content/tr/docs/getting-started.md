---
title: Başlangıç Rehberi
description: iPhone, iPad, Mac veya Android uygulamasıyla, web uygulamasıyla, bir AI agent'ıyla ya da kendi sunucunuzda başlayın.
---

Başlamanın birkaç yolu var; en popülerden başlayarak:

- **iPhone, iPad ve Mac uygulaması**: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- **Android uygulaması**: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)
- **Barındırılan web uygulaması**: [app.nibomo.com](https://app.nibomo.com)
- **AI agent'ları**: [MCP bağlayıcısı](/docs/mcp-connector/) veya `https://api.nibomo.com/v1/` adresindeki API
- **Kendi sunucunuzda**: [Kendi Sunucunuzda Barındırma Rehberi](/docs/self-hosting/)

## Mobil ve Masaüstü Uygulamaları

Cihazınıza uygun yerel uygulamayı yükleyin:

- iPhone, iPad ve Mac: [App Store](https://apps.apple.com/app/apple-store/id6760538964?pt=128797295&ct=marketing_site&mt=8)
- Android: [Google Play](https://play.google.com/store/apps/details?id=com.flashcardsopensourceapp.app&utm_source=flashcards_website&utm_medium=referral&utm_campaign=marketing_site)

Uygulamalar kartlarınızı cihazda tutar; böylece çevrimdışıyken de tekrar yapabilirsiniz, yeniden çevrimiçi olduğunuzda kartlar senkronize edilir. Misafir olarak başlayıp daha sonra giriş yapabilirsiniz.

### Ana Ekran Widget'ları

Nibomo uygulaması iPhone, iPad, Mac ve Android'e bir Tekrar widget'ı ekler. Widget üç boyutta sunulur:

- **Küçük**: tekrar zamanı gelen kart sayısı ve çalışma seriniz
- **Orta**: tekrar zamanı gelen kart sayısı ve sonraki kartınızdaki soru
- **Büyük**: tekrar zamanı gelen kart sayısı, sonraki sorunuz ve seriniz

Tekrar zamanı gelen kart olmadığında widget “Hepsi tamam” yazısını ve sonraki kartın ne zaman tekrar edileceğini gösterir. Cevabı asla göstermez. Tekrar'ı açmak için widget'a dokunun; Orta veya Büyük boyuttaki widget, Tekrar'ı gösterdiği kartta açar. Widget'lar misafir kullanıcılar dahil herkes için ücretsizdir.

Sekiz widget daha ilerlemenizi gösterir: “Etkinlik”, “Yıl”, “Bugün”, “Tekrarlar”, “Seriler”, “Takvim”, “Yaklaşanlar” ve “Pano”. iPhone'da “Tekrar edilecekler” widget'ını Kilitli Ekran'a da koyabilirsiniz; [widget rehberi](/blog/flashcard-widget/) her birini gösterir.

iPhone, iPad veya Mac'te eklemek için widget galerisini açın, Nibomo'yu seçin ve bir boyut belirleyin. Android'de Nibomo widget'ını widget listesinden ekleyin, ardından yeniden boyutlandırın; düzen boyuta göre değişir.

## Barındırılan Web Uygulaması

Başlamanın en hızlı yolu barındırılan web uygulamasıdır:

1. [app.nibomo.com](https://app.nibomo.com) adresini açın
2. E-posta adresinizle, parolasız OTP kullanarak giriş yapın
3. Kart oluşturun, zamanı gelen kartları tekrar edin ve çalışma alanı verilerinizle ve dosya ekleriyle çalışan AI sohbetini kullanın

Barındırılan sürüm için kurulum veya sunucu yapılandırması gerekmez.

## Agent Kurulumu

Claude, ChatGPT ve Cursor gibi MCP istemcileri [MCP bağlayıcısı rehberi](/docs/mcp-connector/) üzerinden bağlanabilir.

Claude Code, Codex veya OpenClaw'un doğrudan bağlanmasını istiyorsanız şuradan başlayın:

```text
GET https://api.nibomo.com/v1/
```

Bu keşif yanıtı agent'ı e-posta OTP girişi, uzun ömürlü API anahtarı oluşturma, hesap yükleme, çalışma alanı hazırlığı ve yayımlanan SQL arayüzü adımlarından geçirir.

Aynı yanıt `GET /v1/agent` adresinden de alınabilir, ancak kanonik ve herkese açık giriş noktası `/v1/` adresidir.

## Kendi Sunucunuzda

Kendi kurulumunuzu çalıştırmayı tercih ediyorsanız [Kendi Sunucunuzda Barındırma Rehberine](/docs/self-hosting/) bakın.

## Bugün Neler Sunuluyor

- Kartlar, tekrar ve AI sohbeti için barındırılan web uygulaması
- Cihazda SQLite depolama ve çevrimdışı öncelikli senkronizasyona sahip yerel iPhone, iPad, Mac ve Android uygulamaları
- Ayrı `api` ve `auth` alan adlarında ortak backend ve kimlik doğrulama hizmetleri
- Keşif, OTP ve ApiKey kimlik doğrulaması üzerinden harici agent'ların bağlanması
- Postgres'in tek doğruluk kaynağı olduğu, AWS üzerinde açık kaynak dağıtım yolu

## Deponun Yönü

Proje çevrimdışı önceliklidir.

Depo bugün web uygulamasını, iOS uygulamasını, kimlik doğrulama hizmetini, backend API'sini, harici agent akışını ve Google Play'de yayımlanan Android uygulamasını içerir.
