---
title: "2026'nın en iyi açık kaynaklı bilgi kartı uygulamaları: 6 FOSS seçeneğinin karşılaştırması"
description: "Geliştirilmeye devam eden altı açık kaynaklı bilgi kartı uygulamasını kaynak kodunun kapsamı, çevrimdışı veri, senkronizasyon, Anki aktarımı, dışa aktarma, kendi sunucunuzda barındırma ve kurtarma açısından karşılaştırın."
date: "2026-08-02"
updated: "2026-09-05"
image: "/blog/best-open-source-flashcard-apps-2026-v2.png"
keywords:
  - "en iyi açık kaynaklı bilgi kartı uygulamaları"
  - "açık kaynaklı bilgi kartı uygulaması"
  - "açık kaynaklı aralıklı tekrar"
  - "kendi sunucunda bilgi kartları"
  - "çevrimdışı bilgi kartı uygulaması"
  - "açık kaynaklı Anki alternatifi"
  - "FOSS bilgi kartları"
---

Anki, 2026'da çoğu kişi için hâlâ en iyi açık kaynaklı bilgi kartı uygulaması. Seçim, “açık kaynaklı olsun” dışında vazgeçemediğiniz başka koşullar olduğunda ilginçleşiyor.

Belki kendi sunucunuzda çalışan bir tarayıcı uygulamasına ihtiyacınız var. Belki düz Markdown olarak okuyabileceğiniz bir desteye. Ya da gizliliğinizi koruyan ve bilgi kartları oluşturan bir not sistemine. Bu ihtiyaçlar farklı ürünlere işaret ediyor; herkese açık bir GitHub deposunun bulunması tek başına kararı vermeye yetmiyor.

Açık kaynaklı bir masaüstü istemcisinin yanında kapalı kaynaklı bir iPhone uygulaması bulunabilir. Bir Docker konteyneri tarayıcı arayüzü sunarken yerel uygulamalarla senkronizasyon yapamayabilir. İçe aktarma işlemi kelimeleri kurtarıp koleksiyonu değerli kılan şablonları, medyayı ve yılların tekrar geçmişini kaybedebilir.

Bu incelemenin ölçütlerini altı proje karşıladı. Lisanslı kaynak kodlarını, en son kararlı sürümlerini, yerel verilerini, zamanlayıcılarını, senkronizasyonlarını, Anki'den geçişlerini, dışa aktarımlarını ve kendi altyapınızda tam olarak neleri çalıştırabildiğinizi karşılaştırdım. Sonuncusu, çoğu özellik listesinin düşündürdüğünden daha önemli.

> **Açıklama:** Ben Kirill Markin. Aşağıdaki altı uygulamadan biri olan [Nibomo'yu](https://nibomo.com/) geliştiriyorum. MIT lisanslı deposu web uygulamasını, yerel istemcileri, arka ucu, senkronizasyonu ve altyapıyı kapsıyor. Onu ilk sıraya koymadım. Anki daha güvenli bir başlangıç seçeneği, Mnemosyne'nin Anki'den geçiş yolu daha oturmuş ve buradaki birkaç seçeneği işletmek çok daha kolay.

**Bilgilerin kontrol edildiği tarih:** 5 Eylül 2026. Kararlı sürümlerle yalnızca varsayılan dalda bulunan geliştirmeler ayrı değerlendirildi.

![Bir doğa yürüyüşçüsü, açık kaynaklı bilgi kartı uygulamasını seçmeden önce altı açık sırt çantasını karşılaştırıyor ve bir yedekleme setini deniyor](/blog/best-open-source-flashcard-apps-2026-v2.png)

## Kısa cevap

| Temel ihtiyacınız | En uygun seçenek | Neden? | Önce kontrol etmeniz gereken kısıt |
| --- | --- | --- | --- |
| Güvenilir, genel amaçlı bir sistem veya mevcut karmaşık bir koleksiyon | [Anki](https://apps.ankiweb.net/) | Oturmuş kart ve şablon yapısı, FSRS, eklentiler, geniş istemci desteği ve kapsamlı paket dışa aktarımları | Resmî iOS uygulaması ve AnkiWeb, açık kaynaklı masaüstü koduna dahil değil; kendi sunucunuzda AnkiWeb'i değil, senkronizasyonu çalıştırırsınız |
| Anki'den aktarımı oturmuş, odaklı bir masaüstü alternatifi | [Mnemosyne](https://mnemosyne-proj.org/) | Yerel çalışma, Anki kart türlerinin ve öğrenme verilerinin içe aktarımı, kendiniz çalıştırabileceğiniz senkronizasyon sunucusu | En son kararlı sürüm hâlâ 2.11; Android'de tekrar yapılabilir ama kart düzenlenemez |
| Tek bir yerel bilgi tabanında notlar ve bilgi kartları | [SiYuan](https://b3log.org/siyuan/en/) | Çevrimdışı yerel uygulamalar, yerleşik FSRS ve Docker'da barındırılan gerçek bir tarayıcı uygulaması | Docker istemcileri yerel uygulamalarla senkronize olamaz; bazı içe/dışa aktarma komutları Docker'da kullanılamaz |
| Web, mobil, arka uç ve altyapının kaynak kodu | [Nibomo](https://github.com/kirill-markin/flashcards-open-source-app) | Belgelenmiş üretim ortamı kurulumu olan tek bir MIT monoreposu | Desteklenen üretim altyapısı AWS merkezli; Anki'den geçişte kayıplar var |
| Doğrudan APKG aktarımı sunan, veriyi öncelikle cihazda tutan daha genç bir masaüstü uygulaması | [Recall](https://github.com/Madlezz/Recall) | FSRS, masaüstü sürümleri, PWA, yerel veri tabanları ve isteğe bağlı şifreli aktarım sunucusu | İçe aktarma yalnızca zamanlamanın anlık durumunu korur, notun ilk iki alanını işler ve sesi atlar |
| Ağ bağlantısına ihtiyaç duymayan, okunabilir Markdown desteleri | [Essentialist](https://github.com/essentialist-app/essentialist) | Düz metin deste dosyaları ve bilinçli olarak çevrimdışı tasarlanmış masaüstü/Android uygulaması | Senkronizasyon yok; ilerleme ayrı bir gizli veri tabanında tutuluyor |

Bu bir özellik puanlaması değil. Önce hangi sorunları kabul edemeyeceğinizi belirleyin. On yıllık Anki tekrar geçmişiniz varsa aktarımın eksiksizliği, daha sade bir arayüzden önemlidir. Bir okulun kurulumunu yönetiyorsanız tarayıcıdan erişim ve denenmiş bir geri yükleme yöntemi, eklentilerden daha önemli olabilir.

## Açık kaynaklı bilgi kartı uygulaması sayılmanın koşulları

Dört ölçüt kullandım:

1. **Temel çalışma işlevinin kaynak kodu yayımlanmış ve açık kaynak lisansı açıkça belirtilmiş olmalı.** Kaynak kodu kapalı bir çekirdeğin etrafındaki entegrasyonlar dizini yeterli değil.
2. **Aralıklı tekrar bugün çalışıyor olmalı.** Yol haritasındaki bir madde veya genel bir test modu yetmez.
3. **Yayımlanmış bir derleme veya açıkça belgelenmiş resmî bir kurulum yöntemi bulunmalı.** Yakın tarihli commit'ler tek başına bir prototipi güvenle önerilebilir hale getirmez.
4. **Resmî kaynaklar, verilerin nasıl yönetildiğini incelemeye yetecek bilgi vermeli.** Çevrimdışı depolama, senkronizasyon, içe/dışa aktarma veya barındırma hakkında somut cevaplar aradım; kullanıcıların “verilerinin sahibi olduğu” yönünde belirsiz vaatler değil.

Yıldız sayısı bir eleme ölçütü değildi. Yıldızlar, ürünün ihtiyaca uygunluğu kadar yaşını ve tanınırlığını da ödüllendiriyor. Yine de olgunluk önemli. Anki, Mnemosyne ve SiYuan'ın oturmuş sürüm süreçleri ve işletim modelleri var. Recall ve Essentialist ise yayımlanmış sürümlerinin davranışları belirli ihtiyaçlar için öneri yapmaya yetecek kadar iyi belgelendiğinden daha dar kullanım alanlarıyla listeye girdi.

“Geliştirilmeye devam ediyor” demek de iki ayrı kontrol gerektiriyor. Etiketli bir sürüm kullanıcının ne kurabileceğini, varsayılan dal ise projenin nereye gittiğini gösterir. En açık örnek Essentialist: Kararlı sürümün belgelerinde SM-2, güncel dalın belgelerinde FSRS yer alıyor. Aşağıdaki tabloda SM-2 yazıyor.

## Altı özgür ve açık kaynaklı bilgi kartı uygulamasının karşılaştırması

| Uygulama | İncelenen kararlı sürüm | Platformlar | Çevrimdışı veriler | Zamanlayıcı | Senkronizasyon | Anki'den geçiş ve verileri çıkarma yolu | Kendi altyapınızda çalıştırabildikleriniz |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Anki** | [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1), 5 Ağustos 2026 | Windows, macOS, Linux; ayrı Android ve iOS istemcileri; AnkiWeb | Kurulu istemciler yerel koleksiyonlardan tekrar yapar | FSRS veya eski SM-2 | AnkiWeb ya da kendi sunucunuzda barındırabileceğiniz resmî senkronizasyon sunucusu | Metin, APKG/COLPKG ve Mnemosyne veri tabanlarını içe aktarır; metin veya paket dışa aktarır; paketlere medya ve zamanlama bilgileri eklenebilir | **Yalnızca senkronizasyon sunucusu.** Kendi sunucunuzda AnkiWeb veya tarayıcıdan çalışma arayüzü yok |
| **Mnemosyne** | [2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11), 12 Kasım 2023; depodaki çalışmalar 2026'da sürdü | Windows, macOS, Linux, Android; tarayıcıdan sınırlı tekrar | Masaüstü yerel çalışır; Android çevrimdışı tekrar yapabilir ama düzenleyemez | Uyarlanabilir, 0–5 arası hatırlama değerlendirmesi | Masaüstü veya arayüzsüz bir kuruluma yerleşik senkronizasyon | Özel kart türleri ve öğrenme verileriyle tam Anki aktarımı resmî olarak belgelenmiş; paylaşım amaçlı dışa aktarımı tam yedek değil | **Senkronizasyon ve tarayıcıdan sınırlı tekrar.** Tarayıcı sunucusunda güvenlik özellikleri yok |
| **SiYuan** | [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2), 30 Ağustos 2026 | Windows, macOS, Linux, Android, iOS, HarmonyOS; Docker üzerinden tarayıcı | Yerel istemciler çalışma alanını cihazda tutar | FSRS | Ücretli resmî uçtan uca şifreli senkronizasyon veya ücretli üçüncü taraf S3/WebDAV entegrasyonu | Genel uygulama Markdown/veri içe aktarır ve çeşitli belge/veri biçimlerini dışa aktarır; belgelenmiş APKG içe aktarıcısı yok | **Tam tarayıcı uygulaması.** Docker yerel istemcileri senkronize edemez; bazı içe/dışa aktarma komutlarını içermez |
| **Nibomo** | [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0), 1 Eylül 2026 | Web, iOS, Android | Web'de IndexedDB; iOS'ta SQLite; Android'de SQLite üzerinde Room; yerel değişiklikler senkronizasyon kuyruğuna alınır | FSRS | Barındırılan hizmetin veya kendi kurduğunuz sistemin arka ucu | Kendi ZIP biçimi kartları, etiketleri, kaynak meta verilerini ve başvurulan medyayı taşır; desteleri, öğrenme durumunu, ayarları veya hesapları taşımaz; APKG içe aktarıcısı yok | **Tam web/arka uç altyapısı.** Üretim kurulumu AWS merkezli; özel yerel uygulama derlemeleri ayrı |
| **Recall** | [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), 31 Temmuz 2026 | Windows, macOS, Linux; kurulabilir PWA | Masaüstünde SQLite; tarayıcıda IndexedDB; hesap gerekmez, telemetri varsayılan olarak kapalı | FSRS | Masaüstünde klasör senkronizasyonu veya isteğe bağlı şifreli Cloudflare Worker/R2 aktarım sunucusu | Masaüstü APKG aktarımı ilk iki alanı, desteleri, etiketleri, yaklaşık zamanlama durumunu ve görselleri okur; JSON ve Recall arşivi olarak dışa aktarım | **Yalnızca şifreli anlık görüntü aktarım sunucusu.** PWA'yı barındırmaz |
| **Essentialist** | [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22), 10 Ekim 2025; kaynak kodu üzerindeki çalışmalar 2026'da sürdü | Android APK, macOS DMG, Linux Flatpak; Windows için kaynaktan derleme | Ağ erişimi yok; deste içeriği Markdown | Kararlı sürüm: SM-2; varsayılan dal: FSRS | Yok | Markdown kart içeriğini, yanındaki gizli veri tabanı ilerlemeyi korur | **Barındırılacak bir şey yok.** Markdown dosyasını yanındaki veri tabanıyla birlikte yedekleyin |

## 1. Anki en güvenli başlangıç seçeneği

Anki'nin üstünlüğü gösterişsiz ayrıntılarda. Karmaşık not türlerini temsil edebiliyor, şablonlardan aynı nota bağlı kartlar üretebiliyor, medyayı koleksiyonla birlikte tutabiliyor ve yılların zamanlama verilerini taşıyabiliyor. Bu incelemede esas alınan kararlı masaüstü sürümü [26.08.1](https://github.com/ankitects/anki/releases/tag/26.08.1). Daha yeni olan 26.09b2 derlemesi beta olarak işaretli; bu yüzden karşılaştırmanın temeli değil.

Açık kaynak kapsamı her bileşende aynı değil. [Masaüstü deposu AGPL-3.0-or-later lisanslı](https://github.com/ankitects/anki/blob/26.08.1/LICENSE); birlikte dağıtılan bileşenler için belirtilmiş istisnalar var. [AnkiDroid](https://github.com/ankidroid/Anki-Android) ayrı bir açık kaynaklı Android projesi. AnkiMobile ve AnkiWeb resmî ürünler, ancak kaynak kodları bu depolarda yer almıyor. Ayrıntılar [Anki açık kaynaklı mı?](/blog/is-anki-open-source/) yazısında.

Kurulu istemciler koleksiyonları cihazda tuttuğu için normal tekrarlar bağlantı olmadan çalışıyor. AnkiWeb ise çevrimiçi çalışıyor. Kararı çevrimdışı çalışma belirliyorsa [Anki çevrimdışı çalışır mı?](/blog/does-anki-work-offline/) yazısı, nelerin cihazda kaldığını ve nelerin senkronizasyonu beklediğini ayırıyor.

Anki, [FSRS'yi ve eski zamanlayıcısını](https://docs.ankiweb.net/deck-options.html) destekliyor. Dışa aktarma biçimleri, bu gruptaki geçişler için en güçlü başlangıç noktasını sunuyor. [COLPKG, zamanlama bilgileriyle birlikte tüm koleksiyonu içeriyor](https://docs.ankiweb.net/exporting.html); APKG dışa aktarımları da ilgili seçenekleri seçtiğinizde zamanlama ve medya içerebiliyor. Anki ayrıca metin, Anki paketleri ve Mnemosyne 2.0 veri tabanlarını içe aktarıyor.

Kaynak paketin bu kadar kapsamlı olması, başka bir uygulamaya kusursuz aktarılacağını garanti etmiyor. Hedef uygulamanın yine paketin içindeki şablonları, kart üretme kurallarını, medya başvurularını ve zamanlayıcı alanlarını anlaması gerekiyor. Yalnızca elinde CSV'ye göre daha fazla bilgi oluyor.

[Kendi sunucunuzda barındırabileceğiniz resmî sunucu](https://docs.ankiweb.net/sync-server.html) bilinçli olarak dar kapsamlı. Uyumlu Anki istemcilerini senkronize ediyor; AnkiWeb, tarayıcıdan tekrar veya hesap portalı sunmuyor. Varsayılan olarak şifrelenmemiş HTTP üzerinden dinliyor. Rehber, onu yerel ağda tutmayı ya da önüne VPN veya HTTPS ters proxy koymayı öneriyor. İstemci ve sunucu sürümlerinin de uyumlu kalması gerekiyor.

Koleksiyonun aynen korunması, şablonlar, eklentiler veya geniş istemci desteği öncelikliyse Anki'yi seçin. Ancak kendi sunucunuzda bir tarayıcı arayüzü ya da kaynak kodu bütünüyle yayımlanmış bir mobil sistem gibi belirli bir koşul daha önemliyse başka seçeneklere bakın.

## 2. Mnemosyne yerel çalışmaya odaklanıyor

Mnemosyne, masaüstünde ders çalışmak için tasarlanmış ve bu işe odaklanmış bir araç. Yanında bir bilgi tabanı veya bulut platformu getirmiyor. Yerel bir veri tabanı, geleneksel aralıklı tekrar akışı, tekrar için bir Android yardımcı uygulaması ve masaüstünde ya da arayüzsüz bir makinede çalışabilen senkronizasyon sunucusu sunuyor.

En son kararlı sürümü hâlâ [Kasım 2023'te çıkan 2.11](https://github.com/mnemosyne-proj/mnemosyne/releases/tag/2.11). Depoya 2026'da değişiklikler geldi, ancak bu değişiklikler henüz kararlı bir kurulum paketine dönüşmüş değil. Önümüzdeki birkaç yıl kullanmayı planladığınız işletim sistemlerinde 2.11'i deneyin.

Lisansı da tek bir rozetle anlatılamıyor. [Kök dizindeki lisans dökümü](https://github.com/mnemosyne-proj/mnemosyne/blob/master/LICENSE), openSM2sync için LGPL v3, Mnemosyne'nin geri kalanı için ayrı koşullar belirtiyor. [Ana program lisansı](https://github.com/mnemosyne-proj/mnemosyne/blob/master/mnemosyne/LICENSE), AGPL v3'e ek olarak türetilmiş çalışmalarda Mnemosyne adının açıkça görünür kalmasını şart koşuyor; bunun tam biçiminin geliştiricilerle görüşülmesi isteniyor. Değiştirilmiş bir derlemeyi yeniden dağıtmadan önce bu metni okuyun.

[Android istemcisi çevrimdışı tekrar yapabiliyor ama kart düzenleyemiyor](https://mnemosyne-proj.org/help/android-client). Diğer cihazlar, masaüstü uygulamasından başlatılan tarayıcı tekrar sunucusunu kullanabiliyor. Ancak resmî özellik sayfası, bu sunucuda güvenlik özellikleri bulunmadığı konusunda uyarıyor. Yerel ağ için kullanışlı bir arayüz; herkese açık, olgun bir web uygulaması değil.

Anki'de kalmak yerine Mnemosyne'ye geçmenin en güçlü gerekçesi, aktarım yetenekleri. Resmî özellik sayfası, [özel kart türleri ve öğrenme verileri dahil tam Anki içe aktarımını](https://mnemosyne-proj.org/features) belgeliyor. [Yerleşik senkronizasyonu](https://mnemosyne-proj.org/help/syncing) kartları ve öğrenme verilerini birleştiriyor; kontrol ettiğiniz bir makineyi hedefleyebiliyor.

Normal dışa aktarma komutu, yedek alırken yanıltıcı olabilir. Seçili kartları paylaşmak için tasarlanmış ve öğrenme verilerinizi dışarıda bırakıyor. Sistemin tamamını taşımak veya kurtarmak için [birden fazla bilgisayar kullanma rehberi](https://mnemosyne-proj.org/help/mnemosyne-and-multiple-computers), veri dizininin tamamını kopyalamanızı söylüyor.

Mnemosyne, buradaki odaklı açık kaynaklı Anki alternatifleri arasında en güçlü seçenek. Bunun karşılığında kararlı sürümlerin seyrek çıkmasını, mobil düzenlemenin sınırlı olmasını ve tarayıcı erişiminin dikkatle sınırlandırılmış bir ağ gerektirmesini kabul ediyorsunuz.

## 3. Asıl sisteminiz notlarsa SiYuan anlamlı

SiYuan, bilgi kartlarını aynı blok ve belge modeline yerleştiren, gizlilik odaklı bir bilgi yönetimi uygulaması. Tekrar malzemeniz notlarınızdan doğuyorsa yararlı. Sadece sırayla tekrar yapacağınız kartlar istiyorsanız oldukça kapsamlı bir sistem.

[AGPL-3.0 deposu](https://github.com/siyuan-note/siyuan), arayüzü, çekirdeği, mobil uygulamaları, veri katmanını ve FSRS bileşenini birbirine bağlıyor. Burada incelenen kararlı sürüm [v3.8.2](https://github.com/siyuan-note/siyuan/releases/tag/v3.8.2). Masaüstü ve mobil istemciler çalışma alanını yerel olarak saklıyor ve çevrimdışı çalışmaya devam ediyor.

Senkronizasyon, ücretsiz yerel depolama planına dahil değil. [Resmî fiyatlandırma sayfası](https://b3log.org/siyuan/en/pricing.html), abonelikle uçtan uca şifreli resmî senkronizasyon sunuyor; ücretli Pro özellikleri ise kendi S3 veya WebDAV depolamanızla entegrasyon ekliyor. Proje ayrıca aktif çalışma alanını genel amaçlı bir dosya senkronizasyon klasörüne koymamanız konusunda uyarıyor: Eşzamanlı düzenlemeler veriyi bozabilir veya üzerine yazabilir.

Docker gerçek bir tarayıcı uygulaması çalıştırıyor ama kurulu uygulamalar için senkronizasyon sunucusuna dönüşmüyor. [v3.8.2 Docker belgeleri](https://github.com/siyuan-note/siyuan/blob/v3.8.2/README.md#docker-hosting), masaüstü ve mobil istemcilerin ona bağlanamadığını söylüyor. Docker sürümünde Markdown içe aktarma ile PDF, HTML ve Word dışa aktarma da yok. Bu komutlar kurulu uygulamalarda var; dolayısıyla genel özellik listesini bir Docker kurulum planına kopyalamak yanıltıcı olur.

Resmî bir APKG içe aktarıcısı bulamadım. SiYuan, Markdown ve kendi veri biçimlerini taşıyabiliyor; bir Anki koleksiyonu içinse daha planlı bir yeniden oluşturma gerekiyor.

Asıl ürün bilgi tabanıysa ve bilgi kartları onun içinde yer almalıysa SiYuan'ı seçin. Doğrudan Anki'nin yerini alacak bir şey istiyorsanız Mnemosyne ve Anki'nin aktarım olanakları ve sınırları daha net.

## 4. Nibomo daha fazla bileşenin kodunu açıyor; işletmek size kalıyor

Bu karşılaştırmada ürünün en çok bileşeninin kaynak kodunu yayımlayan seçenek Nibomo. MIT lisanslı monorepo; web uygulamasını, iOS ve Android istemcilerini, arka ucu, kimlik doğrulama hizmetini, senkronizasyonu, yönetim uygulamasını, veri tabanı geçişlerini ve AWS altyapısını içeriyor. Burada kullanılan kararlı sürüm [v1.23.0](https://github.com/kirill-markin/flashcards-open-source-app/releases/tag/v1.23.0). Varsayılan daldaki daha sonraki çalışmalar, yayımlanmış özellikler arasında sayılmıyor.

[Mimari](/docs/architecture/) çevrimdışı kullanımı önceliyor, ancak “çevrimdışı” her istemcide biraz farklı anlama geliyor. Web uygulamasında esas alınan yerel veri IndexedDB'de tutuluyor. iOS SQLite, Android ise SQLite üzerinde Room kullanıyor. Değişiklikler önce yerel olarak yazılıyor, sonra senkronizasyon için bir gönderim kuyruğuna alınıyor. Bu tasarım kesilen bağlantıyla başa çıkıyor; tarayıcı depolamasını kalıcı hale getirmiyor veya her cihazda uygulamayı tamamen kapatıp yeniden başlatmayı deneme ihtiyacını ortadan kaldırmıyor.

Nibomo'nun kendi ZIP paketi bir içerik aktarma biçimi; hesap yedeği değil. v1.23.0'daki [paket şeması](https://github.com/kirill-markin/flashcards-open-source-app/blob/v1.23.0/apps/backend/src/workspacePackages/types.ts), ön ve arka yüz içeriğini, etiketleri, kart türünü, kaynak meta verilerini ve paket meta verilerini taşıyor; başvurulan medya ayrıca pakete ekleniyor. Deste yapısını, tekrar geçmişini, FSRS durumunu, çalışma alanı ayarlarını veya hesapları taşımıyor.

v1.23.0'da APKG içe aktarıcısı yok. Belgelenmiş [Anki TXT/CSV geçiş akışı](/blog/migrate-from-anki-txt-export-open-source-flashcards/), dışa aktarılan metinden kartları yeniden oluşturuyor ve bir insanın kontrol etmesini gerektiriyor. Şablonlar, zamanlama durumu, deste yapısı ve paketlenmiş medya bu yoldan otomatik olarak korunmuyor. Basit bir metin destesi için makul; yoğun biçimde özelleştirilmiş bir koleksiyon için zayıf bir tercih.

[Kendi sunucunuzda barındırma rehberi](/docs/self-hosting/) de aynı derecede açık. Üretim ortamı; RDS, Cognito, API Gateway ve Lambda, S3 ve CloudFront, gizli değerler, alarmlar ve yedeklerle bir AWS CDK altyapısı kullanıyor. Cloudflare DNS, Resend e-posta ve Sentry yapılandırması AWS'nin dışında yer alıyor. Docker Compose yerel geliştirme için çalışıyor; desteklenen üretim paketi değil. Özel iOS veya Android uygulama dosyaları isteyen işletmeciler bunları ayrıca derleyip dağıtıyor.

Web, yerel uygulamalar ve arka ucun bütün kaynak koduna sahip olmak bu işletim yüküne değiyorsa Nibomo'yu seçin. Mevcut koleksiyonun korunması daha katı bir koşulsa Anki veya Mnemosyne'yi seçin.

## 5. Recall modern, ama içe aktarıcısını dikkatle inceleyin

Recall, ana öneriler arasındaki en genç proje. [v1.3.0](https://github.com/Madlezz/Recall/releases/tag/v1.3.0), sürümlendirilmiş masaüstü derlemeleri, kurulabilir PWA, açıkça tanımlanmış yerel depolama, FSRS, veri dışa aktarımı ve kendi altyapınızda çalıştırabileceğiniz belgelenmiş bir senkronizasyon tasarımı sunduğu için listeye girdi.

MIT lisanslı masaüstü uygulaması SQLite, PWA ise IndexedDB kullanıyor. İkisi de hesap gerektirmiyor; proje, telemetrinin varsayılan olarak kapalı olduğunu belirtiyor. Masaüstü sürümleri Windows, macOS ve Linux'u kapsıyor.

APKG içe aktarıcısı yararlı, ancak README'deki “tekrar geçmişi” ifadesi, etiketli sürümdeki uygulamanın yaptığını olduğundan geniş gösteriyor. [v1.3.0 içe aktarıcı kaynak kodu](https://github.com/Madlezz/Recall/blob/v1.3.0/src-tauri/src/anki_import.rs), Anki'nin tekrar günlüğünü okumuyor. Kartın mevcut durumunu, tekrar aralığını, tekrar ve unutma sayılarını, ayrıca Anki kaydetmişse FSRS kararlılık ve zorluk değerlerini okuyor. Bu FSRS alanları olmayan eski kartlarda Recall, değerleri SM-2 verilerinden tahmin ediyor.

İçerik dönüşümünde de önemli kısıtlar var. İçe aktarıcı, Anki not türlerini ve şablonlarını yeniden üretmek yerine ilk iki not alanını ön ve arka yüz olarak kullanıyor. Deste adlarını ve etiketleri koruyor. Yaygın görsel biçimlerini çıkarıp başvurularını yeniden yazıyor ama ses ve diğer medyayı atlıyor. İçe aktarıcı bir Tauri komutu olduğundan doğrudan APKG geçişi tarayıcı PWA'sının değil, masaüstü uygulamasının özelliği.

Bu, düz metinden yeniden oluşturmaktan çok daha iyi; yine de koleksiyonu eksiksiz korumuyor. Büyük bir taşımaya güvenmeden önce boşluk doldurmaları, aynı nottan üretilen kartları, ek alanları, HTML/CSS'yi, görselleri, sesi, tekrar tarihlerini ve yinelenen notları deneyin.

Recall'ın iki senkronizasyon yolu var. Masaüstü uygulaması, Dropbox, Drive veya başka bir dosya senkronizasyon aracının yönettiği klasöre anlık görüntü yazabiliyor. İsteğe bağlı aktarım sunucusu Cloudflare Worker ve R2 bucket kullanıyor. Etiketli sürümün [senkronizasyon tasarımına](https://github.com/Madlezz/Recall/blob/v1.3.0/docs/SYNC.md) göre istemciler anlık görüntüleri yüklemeden önce AES-GCM ile şifreliyor; aktarım sunucusu kart verilerini veya anahtarı değil, şifreli veriyi görüyor. Güncellemeler iyimser eşzamanlılık denetimi kullanıyor ve çakışma durumunda bir kez yeniden deneniyor; yine de alanları değil, anlık görüntülerin tamamını birleştiriyor. Geliştiricilerin finanse ettiği herkese açık bir aktarım sunucusu yok; sunucuyu siz kurup URL'sini giriyorsunuz.

JSON ve Recall arşivi dışa aktarımları, verilerinizi çıkarabilmeniz için bir yol sunuyor. Bunlara yedek demeden önce temiz bir profile geri yükleyin.

Veriyi öncelikle cihazda tutan modern bir masaüstü/PWA deneyimi istiyorsanız ve hem genç bir projeyi hem de Anki sisteminin tamamı yerine yararlı bir anlık durum kaydını koruyan içe aktarıcıyı kabul edebiliyorsanız Recall'ı seçin.

## 6. Essentialist desteyi okunabilir kılıyor; öğrenme durumu ayrı tutuluyor

Essentialist burada en dar kapsamlı seçenek. Her deste, metin düzenleyicide açabileceğiniz, sürüm kontrolünde saklayabileceğiniz veya sıradan dosya araçlarıyla kopyalayabileceğiniz bir Markdown dosyası. Uygulama bilinçli olarak hiç ağ isteği yapmıyor.

En son kararlı sürüm [v0.3.22](https://github.com/essentialist-app/essentialist/releases/tag/v0.3.22). Yayımlanan dosyalar arasında Android, macOS ve Linux derlemeleri var; Windows kullanıcıları kaynaktan derliyor. [Etiketli sürümün README dosyası](https://github.com/essentialist-app/essentialist/blob/v0.3.22/README.md), zamanlayıcıyı SM-2 olarak tanımlıyor.

[Varsayılan dalın README dosyası](https://github.com/essentialist-app/essentialist/blob/main/README.md) artık FSRS diyor ve depoya 2026'da kaynak kodu değişiklikleri geldi. Bu, projenin yönünü gösteriyor; 2025'te yayımlanan uygulamayı FSRS kullanıyor diye tanıtmak için gerekçe oluşturmuyor.

Markdown'ın kapsadığı veri de ilk bakışta göründüğünden az. Kart metni görünür dosyada, ilerleme ise `.<deck file>.db` adlı gizli bir veri tabanında tutuluyor. `sample.md` dosyasını `.sample.md.db` olmadan kopyalamak soru ve cevapları saklıyor ama öğrenme durumunu kaybettiriyor.

Yerleşik cihaz senkronizasyonu veya sunucu yok. Dosyaları kendi senkronize klasörünüze koyabilirsiniz; o zaman çakışmaları çözmek ve verileri kurtarmak sizin sorumluluğunuz oluyor.

Önceliğiniz okunabilir Markdown ve ağsız çalışma ise Essentialist'i seçin. Cihazlar arasında sorunsuz geçiş sağlayan bir sistem değil; tek bir görünür dosya da tam yedek değil.

## Takip etmeye değer, geliştirilmeye devam eden dört proje

Bu projelerde 2026'da gerçekten geliştirme yapıldı. Ana listedeki altı uygulama arasında yer almıyorlar; bir projeyi önermek için ilginç kaynak kodundan fazlası gerekiyor.

| Proje | Şimdiden somut olarak sundukları | Ana listeye girmesini hâlâ engelleyenler |
| --- | --- | --- |
| [HSK Nest](https://github.com/s-mberli/hsknest) | AGPL kaynak kodu, FSRS/SM-2/Leitner zamanlayıcıları, Docker kurulumu, yönetilen hizmet, CSV içe aktarımı ve veri dışa aktarımı | Temmuz 2026'da oluşturuldu; sürümlendirilmiş uygulama yayını yok. GitHub'daki sürüm, bir uygulama sürümü değil, ses paketi |
| [Openlet](https://github.com/ChloeVPin/openlet) | FSRS, CSV içe aktarımı, görsel maskeleme ve belgelenmiş Supabase/Vercel mimarisi sunan MIT lisanslı web uygulaması | Etiketli sürüm yok; resmî belgeler çevrimdışı kullanımın, dışa aktarımın ve kendi sunucunuzdaki kurulumu kurtarmanın kapsamını henüz tam tanımlamıyor |
| [Prep](https://github.com/Zamua/prep-app) | MIT kaynak kodu, FSRS, barındırılan kullanım ve kendi sunucunuzda çalıştırılabilen celld çalışma ortamına belgelenmiş kurulum | Etiketli sürüm yok; kendi sunucunuzda barındırmak, bağımsız bir bilgi kartı uygulama dosyası kurmak yerine celld ve nesne depolamasını işletmek anlamına geliyor |
| [Kado](https://github.com/LisandroDiMeo/kado-app) | GPLv3 lisanslı Kotlin mobil uygulaması, FSRS/SM-2, Android sürümü, şablon ve medyayla APKG içe aktarımı | 2026'da oluşturuldu; iOS için kaynaktan derleme gerekiyor ve resmî belgeler genel bir telefonlar arası senkronizasyon yöntemi tanımlamıyor |

Bazı tanıdık isimler daha basit nedenlerle ölçütleri karşılamıyor. Mochi'nin [açık kaynak deposu](https://github.com/mochi-cards/open-source), temel uygulamayı değil entegrasyonları içeriyor. [Scholarsome](https://github.com/hwgilbert16/scholarsome#features-coming-soon) açık kaynaklı ve kendi sunucunuzda barındırılabiliyor, ama resmî README dosyasında aralıklı tekrar hâlâ “Features coming soon” (Yakında gelecek özellikler) altında. [OpenCards](https://github.com/holgerbrandl/opencards), [Ocak 2017'deki v2.5.1](https://github.com/holgerbrandl/opencards/releases/tag/v2.5.1) sürümünden beri yeni sürüm yayımlamadı; deposuna da 2018'den beri kod değişikliği gelmedi.

Kaynak koduna erişim şart değilse [daha geniş Anki alternatifleri karşılaştırması](/tr/blog/best-anki-alternatives/) başka ihtiyaçlara cevap veren ürünleri de içeriyor.

## Geçişi beş ayrı katmanda deneyin

“Anki'den içe aktarır” ifadesi, devamında açıklama yoksa neredeyse hiçbir şey söylemiyor. Geçiş bir katmanda başarılı olup diğer dördünde başarısız olabilir.

| Katman | Neleri karşılaştırmalı? | Yanıltıcı başarı işareti |
| --- | --- | --- |
| Kart içeriği | Her alan, boşluk doldurma işareti, etiket, özel karakter ve yinelenen not | Toplam kart sayısının yakın olması |
| Yapı | Not türleri, şablonlar, aynı nottan üretilen kartlar ve iç içe desteler | Ön ve arka yüz metninin bir yerde görünmesi |
| Medya | Görsellerin ve seslerin kopyalanması, yerel olarak bulunması ve çevrimdışı oynatılması | İçe aktarıcının dosya adlarını tanıması |
| Öğrenme durumu | Tekrar günlüğü, durum, tekrar tarihi, aralık, unutmalar ve zamanlayıcı parametreleri | İçe aktarılan kartların görünmesi ama sessizce yeni kart olarak baştan başlaması |
| Verileri çıkarma ve kurtarma | Belgelenmiş bir dışa aktarımın veya yedeğin aynı sistemi başka yerde yeniden kurabilmesi | Okunabilir metin dışa aktarımının tam yedek sayılması |

Gerçek koleksiyonu taşımadan önce bilerek zorlayıcı bir test destesi oluşturun. Ek alanlar, boşluk doldurmalar, düz ve ters şablonlar, iç içe desteler, etiketler, görseller, ses ve hedef uygulamanın geçmişi koruyup korumadığını gösterecek kadar tekrar geçmişi ekleyin.

Kaynağın dokunulmamış yedeğini saklayın. İçe aktardıktan sonra not, kart ve medya sayılarını ayrı ayrı karşılaştırın. “Zamanlama aktarıldı” mesajına güvenmek yerine tekrar tarihlerini inceleyin. Kullanmayı düşündüğünüz her cihazda çevrimdışı tekrar yapın. Ardından iki cihazda deneme amaçlı, birbiriyle çakışan düzenlemeler oluşturup senkronizasyonun ne yaptığını izleyin.

İki sistemi birkaç gün birlikte kullanın. Eski koleksiyonu silmek son adım; yenisinin çalıştığının kanıtı değil.

## Kendi sunucunuzda barındırma, geri yükleme denenince tamamlanır

Yukarıdaki ürünler “kendi sunucunuzda barındırma” ifadesini çok farklı yapılar için kullanıyor:

- Anki ve Mnemosyne **senkronizasyon hizmetleri** çalıştırıyor; çalışma arayüzü kurulu istemcilerde kalıyor.
- SiYuan Docker bir **tarayıcı uygulaması** çalıştırıyor; yerel istemciler onu senkronizasyon sunucusu olarak kullanamıyor.
- Recall, PWA'nın kendisini değil **şifreli anlık görüntüler için bir aktarım sunucusu** çalıştırıyor.
- Nibomo **tam web ve arka uç altyapısı** kuruyor; yerel uygulamalar ayrı derlemeler olarak kalıyor.
- Essentialist'te **sunucu yok**; kontrol ettiğiniz şey yerel dosyalar.

Bu kapsam netleşince işletmecilerin ertelemeye meyilli olduğu kısmı deneyin:

1. Kartlar oluşturun, medya ekleyin, tekrarlar yapın ve iki istemciden senkronize edin.
2. Belgelerde belirtilen her veri tabanını, nesne depolama alanını (bucket), yerel dosyayı, gizli değeri ve yapılandırma değerini yedekleyin.
3. Boş bir hesaba, makineye veya yalıtılmış kuruluma geri yükleyin.
4. Kart sayısını, medyayı, tekrar geçmişini, kartların tekrar vadesini, oturum açmayı ve istemci senkronizasyonunu karşılaştırın.
5. Geri yüklenen kopyayı yükseltin ve bir tekrar döngüsü daha tamamlayın.

Yeniden kurulum hâlâ eski makineye bağımlıysa çalışan bir hizmetiniz vardır. Doğrulanmış bir yedeğiniz yoktur.

## Sık sorulan sorular

### 2026'nın en iyi açık kaynaklı bilgi kartı uygulaması hangisi?

Çoğu kişi için en iyi başlangıç seçeneği Anki. Oturmuş koleksiyon modelini, FSRS'yi, geniş istemci desteğini ve ürünün kendi sunduğu en kapsamlı yedekleme ve dışa aktarma biçimlerini bir araya getiriyor. Kısıt şu: Resmî iOS ve web ürünleri, açık kaynaklı masaüstü deposunun kapsamında değil; kendi sunucunuzda çalıştırabildiğiniz sunucu da tarayıcıdan çalışma yerine senkronizasyon sağlıyor.

### En iyi açık kaynaklı Anki alternatifi hangisi?

Mnemosyne, odaklı alternatifler arasında en köklüsü. Anki'nin özel kart türlerinin ve öğrenme verilerinin içe aktarımını resmî olarak belgeliyor. Recall daha modern görünüyor ve APKG dosyalarını masaüstünde doğrudan içe aktarıyor; ancak ilk iki not alanını dönüştürüyor, yalnızca zamanlamanın anlık durumunu koruyor, sesi değil görselleri aktarıyor ve tekrar günlüğünün tamamını taşımıyor.

### Anki'yi kendi sunucumda barındırabilir miyim?

Evet, uyumlu istemciler için Anki'nin resmî senkronizasyon sunucusunu çalıştırabilirsiniz. Ancak bu, AnkiWeb'in kendi sunucunuzda barındırılan karşılığı değil: Tarayıcıdan çalışma arayüzü yok.

### Açık kaynaklı demek çevrimdışı demek mi?

Hayır. Açık kaynak, lisanslama ve kaynak koduna erişimle ilgili. Çevrimdışı davranış, istemcinin veriyi nerede tuttuğuna ve hangi işlemlerin bir hizmet gerektirdiğine bağlı. Tersi de geçerli: Bir uygulama temel kaynak kodunu yayımlamadan verilerini yerel olarak tutabilir.

### Kendi sunucumda barındırmak taşınabilirliği garanti eder mi?

Hayır. Kendi sunucunuzda barındırmak, hizmetin nerede çalıştığını kontrol etmenizi sağlar. Taşınabilirlik ise dışa aktarımlara, tam yedeklere ve gerçekten denediğiniz bir geri yüklemeye bağlı. Sunucunuzdaki bir veri tabanını taşımak yine de zor olabilir; okunabilir bir Markdown destesi de yanında saklanan tekrar durumunu içermeyebilir.

## Benim önerim

Kısıtlarından biri gerçek bir sorun yaratmıyorsa **Anki'de** kalın veya Anki'yi seçin. Odaklı, yerel masaüstü çalışması ve oturmuş Anki aktarımı için **Mnemosyne'yi** tercih edin. Bilgi kartları daha büyük bir bilgi tabanının içinde yer almalıysa **SiYuan'ı** kullanın. Web, yerel uygulamalar ve arka ucun bütün kaynak koduna sahip olmak bir AWS üretim altyapısını işletmeye değiyorsa **Nibomo'yu** değerlendirin. Modern ve veriyi öncelikle cihazda tutan bir istemci için, dönüştürme sınırlarını denedikten sonra **Recall'ı** seçin. Düz Markdown ve sıfır ağ erişimi senkronizasyondan daha önemliyse **Essentialist'i** seçin.

En iyi açık kaynaklı bilgi kartı uygulaması, özellik listesi en uzun depo değil. Kaynak kodunun kapsamı, çevrimdışı verileri, geçiş olanakları, senkronizasyonu, barındırması ve kurtarma yöntemleri, gerçekten sorumluluğunu üstlenmek istediğiniz sisteme uyan uygulama.
