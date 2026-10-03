---
title: Başlangıç Rehberi
description: Barındırılan web uygulamasıyla başlayın, bir agent'ı keşif URL'si üzerinden bağlayın veya yerel yığını kendiniz çalıştırın.
---

## Barındırılan Web Uygulaması

Başlamanın en hızlı yolu barındırılan web uygulamasıdır:

1. [app.nibomo.com](https://app.nibomo.com) adresini açın
2. E-posta adresinizle, parolasız OTP kullanarak giriş yapın
3. Kart oluşturun, zamanı gelen kartları tekrar edin ve çalışma alanı verilerinizle ve dosya ekleriyle çalışan AI sohbetini kullanın

Barındırılan sürüm için kurulum veya sunucu yapılandırması gerekmez.

## Agent Kurulumu

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
- Ana depoda yerel SQLite ve çevrimdışı öncelikli senkronizasyona sahip iOS istemcisi
- Ayrı `api` ve `auth` alan adlarında ortak backend ve kimlik doğrulama hizmetleri
- Keşif, OTP ve ApiKey kimlik doğrulaması üzerinden harici agent'ların bağlanması
- Postgres'in tek doğruluk kaynağı olduğu, AWS üzerinde açık kaynak dağıtım yolu

## Deponun Yönü

Proje çevrimdışı önceliklidir.

Depo bugün web uygulamasını, iOS uygulamasını, kimlik doğrulama hizmetini, backend API'sini, harici agent akışını ve Google Play'de yayımlanan Android uygulamasını içerir.
