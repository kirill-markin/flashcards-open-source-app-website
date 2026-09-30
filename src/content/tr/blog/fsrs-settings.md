---
title: "2026'da Anki için en iyi FSRS ayarları: Hatırlama hedefi, adımlar ve tekrar yükü"
description: "FSRS-6 kullanan Anki 26.08'de hedeflenen hatırlama oranı, öğrenme adımları, optimizasyon, yeniden zamanlama ve çalışma yükü için güvenli FSRS ayarları seçin."
date: "2026-04-25"
updated: "2026-09-08"
image: "/blog/fsrs-settings-v2.png"
keywords:
  - "FSRS ayarları"
  - "en iyi FSRS ayarları"
  - "Anki FSRS ayarları"
  - "FSRS hedeflenen hatırlama oranı"
  - "FSRS öğrenme adımları"
  - "FSRS simülatörü"
  - "FSRS parametrelerini optimize etme"
  - "FSRS-6"
---

Anki'de hedeflenen hatırlama oranını %90'dan %95'e çıkarmak küçük bir değişiklik gibi görünüyor. Ama bu, çalışma yükünün yüzde beş artması demek değil. Hedef yükseldikçe FSRS'nin aralıkları kısaltması gerekir; uzun süredir çalıştığınız bir koleksiyonda tekrar kuyruğu belirgin biçimde ağırlaşabilir. **Değişiklikte kartları yeniden zamanla (Reschedule cards on change)** seçeneğini de açarsanız bu yükün bir kısmı hemen karşınıza çıkabilir.

Bu yüzden en iyi FSRS ayarları, kopyalayıp yapıştıracağınız bir parametre dizisi değildir. Bir dizi karar vermeniz gerekir: sürdürebileceğiniz çalışma yükünü belirleyin, bu bütçeye uygun bir hatırlama hedefi seçin, modeli kendi tekrar geçmişinize göre uyarlayın ve bilinçli olarak yeniden hesaplatmak istemiyorsanız mevcut tekrar tarihlerini olduğu gibi bırakın.

Aşağıdaki arayüz adları ve açıklamalar, [Anki 26.08 sürümüne](https://github.com/ankitects/anki/releases/tag/26.08) ve bu sürümün FSRS-6 kontrollerine dayanıyor. Ayarlardan önce modelin nasıl çalıştığını anlamak istiyorsanız [FSRS Nedir?](/blog/what-is-fsrs/) yazısını okuyun. Hâlâ bir zamanlama algoritması seçiyorsanız [FSRS ve SM-2 karşılaştırmasıyla](/blog/fsrs-vs-sm-2/) başlayın.

> **Açıklama:** Ben Kirill Markin, [Nibomo'yu](/tr/features/) geliştiriyorum. Anki, Nibomo'da şu anda bulunmayan kişiselleştirilmiş parametre optimizasyonu ve deneysel çalışma yükü simülatörleri sunuyor. Yazının sonlarına doğru bu farkları açıkça karşılaştırıyorum.

**Bilgilerin kontrol edildiği tarih:** 8 Eylül 2026.

![Kanal havuzu operatörü, asıl havuzda değişiklik yapmadan önce ölçekli bir modelde su akışını deniyor](/blog/fsrs-settings-v2.png)

## Kısa cevap: buradan başlayın

Çoğu Anki kullanıcısı için bunlar güvenli başlangıç seçenekleridir; herkes için geçerli ayarlar değildir:

| Ayar veya alışkanlık | Güvenli başlangıç seçeneği | Nedeni |
| --- | --- | --- |
| Hedeflenen hatırlama oranı | `0.90` | Anki'nin varsayılanıdır; hatırlama ile tekrar yükünü dengeler. |
| FSRS parametreleri | **Geçerli ön ayarı optimize et (Optimize Current Preset)** seçeneğini kullanın; ağırlıkları yapıştırmayın veya elle düzenlemeyin | Optimizasyon aracı, modeli tekrar geçmişinize göre uyarlar. |
| Optimizasyon sıklığı | En fazla ayda bir; genellikle birkaç ayda bir yeterlidir | Anki sık optimizasyon önermiyor. |
| Öğrenme adımları | Aynı gün tamamlanabilecek az sayıda adım kullanın | Uzun adım dizileri, modele dayalı zamanlamayı geciktirir. |
| Yeniden öğrenme adımları | Adım sayısını az, süreleri bir günden kısa tutun | Tekrar sırasında hatırlanamayan kartlar için de aynı sınır geçerlidir. |
| Değişiklikte kartları yeniden zamanla | Kapalı | Yeni ayarlar, bugünün kuyruğunu yeniden oluşturmadan sonraki tekrarlarla uygulanabilir. |
| Azami aralık | Varsayılan 100 yılı koruyun | Daha kısa bir üst sınır, iyice öğrenilmiş kartları daha sık geri getirir. |
| Günlük yeni kart sayısı | Sürdürebileceğiniz çalışma yüküne göre belirleyin | Her yeni kartı önce öğrenmeniz, sonra tekrar etmeniz gerekir. |
| Again ve Hard ayrımı | Again hatırlayamamak, Hard zorlanarak da olsa doğru hatırlamak demektir | Yanlış değerlendirmeler modele yanlış bir geçmiş sunar. |

Tekrar yükünü yönetebiliyorsanız ve ayarlarınız zaten buna yakınsa düzeltecek bir şey olmayabilir. Ayarlarla uğraşmak ders çalışmak değildir.

## Üç kararı birbirinden ayırın

Hedeflenen hatırlama oranı, FSRS parametreleri ve günlük çalışma yükü sık sık aynı şeymiş gibi ele alınıyor. Oysa farklı şeyleri kontrol ederler:

- **Hedeflenen hatırlama oranı**, ne ölçüde hatırlamak istediğinizi belirtir. Hedeflerinize ve çalışmaya ayırabileceğiniz zamana göre seçersiniz.
- **FSRS parametreleri**, bellek modelini tekrar geçmişine göre uyarlar. Bunları Anki'nin optimizasyon aracı hesaplar.
- **Yeni kart ve tekrar sınırları**, sisteme ne kadar yeni içerik ekleneceğini ve Anki'nin her gün zamanı gelen tekrarların ne kadarını gösterebileceğini belirler.

Bu ayrım, sorunların kaynağını bulmayı çok kolaylaştırır. Kuyruğun uzun olması, parametrelerinizin mutlaka yanlış olduğu anlamına gelmez. Kritik bir deste için mutlaka ayrı bir parametre ön ayarı gerekmez. Hedeflenen hatırlama oranını düşürmek de baştan beri sürdürülemeyecek kadar hızlı yeni kart ekleme sorununu çözmez.

## Hatırlama hedefini hırsınıza değil, çalışma yüküne göre seçin

Hedeflenen hatırlama oranı, tekrar zamanı geldiğinde kartın yanıtını hangi olasılıkla hatırlamak istediğinizi FSRS'ye bildirir. `0.90` değerinde FSRS, tahmini %90 hatırlama olasılığına göre zamanlama yapar. Bu, modelin hedefidir; her oturumda veya sınavda tam %90 doğru yanıt vereceğinizin garantisi değildir.

Bu tercihin iki yönde de bir bedeli vardır:

- Hedeflenen hatırlama oranını yükseltirseniz aralıklar kısalır, tekrar sayısı artar.
- Düşürürseniz aralıklar uzar, hatırlayamama sıklığı artar.
- Çok düşürürseniz unuttuğunuz kartları yeniden öğrenmek, kazanmayı umduğunuz zamanın bir kısmını tüketebilir.

Anki'nin varsayılanı %90'dır. [Hedeflenen hatırlama oranı rehberi](https://docs.ankiweb.net/deck-options.html#desired-retention), hedef %100'e yaklaştıkça çalışma yükünün hızla arttığı konusunda uyarır ve %97'nin altında kalmanızı önerir. Resmî [en verimli hatırlama oranı açıklaması](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention), eğrinin diğer ucunu ele alır: unutulan kartlar daha fazla çalışma gerektirdiğinden çok düşük hatırlama oranları da verimsiz olabilir.

`0.90` ile başlayın, ancak çalışma yükünü kontrol ettikten sonra değiştirin. Unutmanın gerçek bir bedeli olan konularda daha yüksek bir hedef mantıklı olabilir. Tekrarlar daha değerli çalışmalara ayıracağınız zamanı alıyorsa daha düşük bir hedef mantıklı olabilir. Bu değişikliklerin hiçbiri belirsiz kartları, gerçeği yansıtmayan değerlendirmeleri veya aşırı hızlı yeni kart ekleme alışkanlığını düzeltmez.

### Hatırlama hedefi desteye, parametreler ön ayara bağlı olabilir

Anki 26.08'de **Hedeflenen hatırlama oranı (Desired retention)** için iki kapsam vardır: **Paylaşılan ön ayar (Shared Preset)** ve **Bu deste (This deck)**. Böylece ilişkili desteleri aynı parametre ön ayarında tutarken belirli bir desteye ayrı bir hatırlama hedefi verebilirsiniz.

Unutmanın bedeli farklıysa desteye özel bu ayarı kullanın. Mesleki yeterlilik sınavına hazırlık için kullandığınız bir destede, yalnızca gerektiğinde başvurduğunuz düşük öncelikli bir desteye göre daha yüksek bir hedef gerekebilir. İkisi de geçmişinize göre uyarlanmış aynı modeli kullanabilir.

**This deck** seçeneğini seçtiğinizde FSRS parametreleri desteye özgü hâle gelmez. Anki varsayılan olarak parametreleri, geçerli ön ayara atanmış tüm destelerin tekrar geçmişinden hesaplar. Bazı deste grupları size diğerlerinden çok daha zor geliyorsa modellerini ayrı ayrı uyarlamanın desteklenen yolu, ayrı ön ayarlar kullanmaktır.

## Help Me Decide ve Simulator araçlarını farklı sorular için kullanın

Anki 26.08 iki ayrı deneysel araç sunar:

- **Karar vermeme yardım et (Help Me Decide (Experimental))**, kişiselleştirilmiş bir hatırlama oranı–çalışma yükü eğrisi gösterir. Şu soruyu yanıtlamak için kullanın: “Sürdürebileceğim tekrar sayısına veya çalışma süresine hangi hatırlama hedefi uyuyor?”
- **FSRS Simülatörü (FSRS Simulator (Experimental))**, belirli bir yapılandırmanın zaman içinde nasıl sonuç verebileceğini tahmin eder. Hatırlama oranı, eklenen yeni kart sayısı, tekrar sınırları ve azami aralık değişikliklerini karşılaştırmak için kullanın.

[FSRS Simülatörü belgeleri](https://docs.ankiweb.net/deck-options.html#the-simulator), temel girdilerini şöyle sıralar:

- simüle edilecek gün sayısı
- simüle edilecek ek yeni kart sayısı
- günlük yeni kart sayısı
- günlük azami tekrar sayısı
- azami aralık
- hedeflenen hatırlama oranı ve ön ayarın FSRS parametreleri

Simülasyon, ön ayarı kullanan kartların gerçek bellek durumlarını da kullanır. Bu nedenle uzun süredir çalışılan bir koleksiyon için, bugün zamanı gelen kart sayısını genel bir yüzdeyle çarpmaktan daha kullanışlıdır.

Kullandığınız ayarları değiştirmeden önce üç senaryo çalıştırın:

1. Mevcut hatırlama hedefiniz ve günlük yeni kart sayınız.
2. Geçmeyi düşündüğünüz hatırlama hedefi.
3. Aynı hedef, ancak daha düşük günlük yeni kart sayısı.

Üçüncü deneme yaygın bir alternatifi sınar: hatırlama hedefini koruyup yeni içerik ekleme hızını azaltmak. Bu senaryo yönetilebilir bir yük öngörüyorsa sırf kuyruğu hafifletmek için daha fazla unutmayı kabul etmeniz gerekmez. Yeni kart ekleme hızını daha ayrıntılı ele alan rehber: [Günde Kaç Yeni Bilgi Kartı Çalışmalı?](/blog/how-many-new-flashcards-per-day/).

Her iki araç da tahmin üretir. Atlanan günler, düzenlenen kartlar, yeni konular ve değişen değerlendirme alışkanlıkları gerçek çalışma yükünün grafikteki tahminden farklı çıkmasına yol açabilir. Karşılaştırmayı karar vermek için kullanın; aylar sonraki kuyruk uzunluğunu kesin olarak bildiğinizi varsaymayın.

Eski rehberlerde bunun yerine **Compute Minimum Recommended Retention** veya kısaca CMRR ile karşılaşabilirsiniz. Anki bu özelliği 25.07 sürümünde kaldırdı. Hedeflenen hatırlama oranını seçmenin güncel yolu bu değil.

## FSRS parametrelerini kendi geçmişinizle optimize edin

Hedeflenen hatırlama oranı amacınızı ifade eder. FSRS parametreleri ise modelin tekrar geçmişinize nasıl uyarlandığını tanımlar.

Anki 26.08'de etkin ön ayarın parametrelerini hesaplamak için **Optimize Current Preset** seçeneğini kullanın. Anki varsayılan olarak bu ön ayarı kullanan her destenin tekrar geçmişini dâhil eder; daha dar bir veri kümesiyle çalışmak istiyorsanız aramayı değiştirebilirsiniz. **Tüm ön ayarları optimize et (Optimize All Presets)**, bütün ön ayarları tek işlemde günceller.

Ağırlıkları elle girmeyin; Reddit'ten, bir videodan veya başkasının destesinden kopyalamayın. Onların kartları, tekrar zamanları ve değerlendirme alışkanlıkları sizin geçmişiniz değil. Düzenli bir sayı dizisi olarak sunulmaları, [FSRS-6 ağırlıklarını](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm#fsrs-6) başka birine aktarılabilecek bir çalışma stratejisine dönüştürmez.

Ancak kayda değer miktarda yeni tekrar geçmişi biriktikten sonra yeniden optimize edin. Anki kılavuzu ayda birin yeterli olduğunu, 26.08'deki uygulama içi açıklama ise birkaç ayda birin yeterli olduğunu söylüyor. Pratikte sonuç aynı: her hafta, hele her oturumdan sonra optimizasyon yapmanız için bir neden yok.

### Sağlık kontrolünü geçerli ön ayarla kullanın

Anki'nin FSRS'yi geçerli ön ayarın geçmişine ne kadar iyi uyarlayabildiğini değerlendirmesini istediğinizde **Optimizasyon sırasında sağlık kontrolü yap (yavaş) (Check health when optimizing (slow))** seçeneğini açın. Bu kontrol **Optimize Current Preset** ile çalışır; **Optimize All Presets** ile çalışmaz.

Sonuç kötüyse ağırlıklara dokunmadan önce verileri inceleyin. [Anki'nin FSRS parametre rehberi](https://docs.ankiweb.net/deck-options.html#fsrs-parameters) yaygın nedenleri sıralıyor: tekrar geçmişinin birkaç yüz kayda bile ulaşmaması, hatırlayamadığınız hâlde Hard kullanmanız ve yanıtı hatırlayamadığınızda Again'e basmamanız. Kullanılabilir tekrar geçmişiniz azsa başka bir kullanıcının parametrelerini almak yerine varsayılanları koruyun ve daha sonra optimize edin.

## Again hatırlayamamak demektir; Hard başarılı sayılır

Bu alışkanlık, ayarlar kadar önemlidir.

Gerekli yanıtı veremediğinizde veya yanlış yanıt verdiğinizde **Again** kullanın. **Hard** yalnızca doğru hatırladığınız, ancak ciddi çaba harcadığınız veya tereddüt ettiğiniz durumlar içindir. Good ve Easy de başarılı hatırlama olarak değerlendirilir.

Again'in kısa aralığından kaçınmak için Hard'a basmak, başarısız bir hatırlamayı başarı olarak kaydeder. FSRS de yanlış olaya dayanarak öğrenir. Düğmelerin üzerindeki süreye bakıp istediğiniz aralığı seçmeyin; yanıtı ne kadar iyi hatırladığınızı doğru anlatan düğmeye basın.

Belirsiz kartlar, dürüst değerlendirmeyi zorlaştırır. Soru beş bilgi istiyor ve siz dördünü hatırlıyorsanız zamanlama sorunu kartı düzenlerken başlamıştır. Kartı bölün veya yeniden yazın. Tekrarlara rağmen sürekli unutulan kartlar için [Sürekli Unutulan Bilgi Kartları Nasıl Düzeltilir?](/blog/how-to-fix-leech-flashcards/) rehberine bakın.

## FSRS öğrenme adımlarını kısa tutun veya bilinçli olarak boş bırakın

Öğrenme ve yeniden öğrenme adımları, düzenli uzun vadeli zamanlama devreye girmeden önce kartın kısa aralıklarla ne zaman yeniden gösterileceğini belirler. Bunlar ayrı bir hatırlama hedefi değildir.

Anki'nin FSRS rehberi iki sınır önerir:

- her adım bir günden kısa olmalı ve aynı gün tamamlanabilmeli
- aynı gün yapılan tekrarların sayısı az tutulmalı

`1m 10m 1d 3d` gibi uzun diziler, eski bir SM-2 alışkanlığını FSRS'ye taşır. Bir gün veya daha uzun adımlar, modele dayalı zamanlamayı geciktirir; Hard'ın Good'dan daha uzun aralık göstermesi gibi kafa karıştırıcı düğme etiketleri oluşturabilir.

Oturumlarınıza uyuyorsa `1m 10m` gibi kısa bir dizi ve `10m` yeniden öğrenme adımı temkinli bir başlangıçtır. Aynı gün daha çok tekrar yapmak otomatik olarak daha iyi değildir.

Anki 26.08, öğrenme veya yeniden öğrenme adımları alanlarından herhangi birini boş bırakmanıza da izin verir. FSRS açıkken boş alan, ilgili kısa vadeli zamanlamayı FSRS'ye bırakır. Bu özellik deneyseldir ve Again aralığı bir gün veya daha uzun olabilir. Kartın aynı gün içinde öngörülebilir bir zamanda yeniden gösterilmesini istiyorsanız elle belirlediğiniz kısa adımları koruyun. Bir alanı ancak zamanlamayı FSRS'nin seçmesini bilinçli olarak kabul ediyorsanız boş bırakın.

## Kademeli geçiş için yeniden zamanlama seçeneğini kapalı tutun

**Reschedule cards on change** seçeneği varsayılan olarak kapalıdır. Kapalıyken FSRS'yi açmak, hedeflenen hatırlama oranını veya parametreleri değiştirmek mevcut tekrar tarihlerini hemen değiştirmez. Yeni yapılandırma, kartları sonraki tekrarlarınızda gördükçe uygulanır; kuyruk böylece kademeli olarak değişir.

Bu seçenek açıkken söz konusu FSRS değişikliklerinden birini kaydetmek, tekrar tarihlerini hemen yeniden hesaplar. Yeni hedefe ve kartların durumuna bağlı olarak birçok kartın tekrar zamanı bir anda gelebilir. Anki ayrıca yeniden zamanlanan kartlara tekrar kayıtları ekler; bu da koleksiyonun boyutunu artırır.

Bu seçenek yalnızca mevcut zamanlamayı geriye dönük olarak yeniden oluşturmak istediğinizde yararlıdır. Uzun süredir çalıştığınız bir koleksiyon için:

1. Yeni bir yedek alın; işlemi nasıl geri alacağınızı veya yedekten nasıl döneceğinizi bildiğinizden emin olun.
2. Önerdiğiniz ayarlarla Simülatörü çalıştırın.
3. Tek bir ayar değişikliği seçin; birkaç denemeyi birleştirmeyin.
4. Kaydederken yeniden zamanlamayı yalnızca tekrar tarihlerinin hemen yeniden hesaplanmasını istiyorsanız ve oluşacak yükü karşılayabilecekseniz açın.

Anki, SM-2'den geçerken yeniden zamanlama yapacaksanız yedek almanızı açıkça öneriyor. Daha kapsamlı [bilgi kartı yedekleme rehberi](/blog/how-to-back-up-flashcards/), geri yükleme yolunun neden yedek dosyası kadar önemli olduğunu açıklıyor.

## Azami aralığı uzun tutun

Anki'nin varsayılan azami aralığı 100 yıldır. Bu sayı ilk bakışta garip gelebilir. Ancak bu bir üst sınırdır; iyice öğrendiğiniz her kartın bir yüzyıl boyunca karşınıza çıkmayacağı anlamına gelmez.

Üst sınırı kısaltmak, iyi bildiğiniz kartları daha erken geri getirir ve çalışma yükünü artırır. Bu sınıra ulaşıldığında Hard, Good ve Easy aynı süreyi gösterebilir; çünkü hiçbiri azami aralığı aşamaz.

Yaklaşan bir sınava hazırlanıyorsanız, içerik sık değişiyorsa veya mesleki bir kural tahmini hatırlama düzeyinden bağımsız olarak düzenli tekrar gerektiriyorsa daha kısa bir azami aralık makul olabilir. Kaygıyla küçük bir sayı seçmek yerine bu sınırı takvimle ve Simülatörle birlikte değerlendirin. [FSRS ile Sınava Nasıl Çalışılır?](/blog/how-to-study-for-an-exam-with-fsrs/) bu daha özel durumu ele alıyor.

Sıradan uzun vadeli öğrenme için üst sınırı uzun bırakın. Tahmini hatırlama düzeyinin ne zaman tekrar gerektireceğini hedeflenen hatırlama oranı zaten kontrol eder.

## Yeni kart ekleme hızı da çalışma yükü kararının parçasıdır

FSRS tekrarları zamana yayabilir; sınırsız miktarda yeni kart eklemeyi sürdürülebilir hâle getiremez. Her yeni kartı önce öğrenmeniz, sonra tekrar etmeniz gerekir.

Kuyruk çok ağırsa hedeflenen hatırlama oranını düşürmeden önce şunları inceleyin:

- günlük yeni kart sayısı
- büyük içe aktarımlar veya toplu oluşturulan kartlar
- zamanı gelen tekrarları sürekli gizleyen günlük azami tekrar sınırı
- defalarca deneme gerektiren, sürekli unutulan veya belirsiz kartlar
- tekrar yapmadığınız günler

Bir destenin büyüyeceğini biliyorsanız **Simüle edilecek ek yeni kartlar (Additional new cards to simulate)** alanını kullanın. Yalnızca bugünkü koleksiyona dayanan bir tahmin, büyük bir içe aktarımdan sonraki çalışma yükünü yansıtmaz.

Tahmini yük çok yüksekse yeni kart ekleme hızını azaltın ve yeniden simüle edin. Böylece zamanlama algoritmasından daha fazla unutmaya izin vermesini istemeden hatırlama hedefini korursunuz.

## Anki ve Nibomo farklı FSRS kontrolleri sunuyor

Her iki ürün de FSRS-6 kullanıyor, ancak Anki'nin FSRS ayarları Nibomo'da bire bir karşılık bulmuyor.

| Özellik | Anki 26.08 | Nibomo |
| --- | --- | --- |
| Hedeflenen hatırlama oranı | **Shared Preset** veya **This deck** | Çalışma alanı bazında ayarlanabilir; varsayılan `0.90` |
| FSRS parametreleri | Tekrar geçmişinden **Optimize Current Preset** veya **Optimize All Presets** | Resmî FSRS-6 varsayılan ağırlıkları sabittir; v1'de kullanıcı tarafından değiştirilemez |
| Öğrenme adımları | Ayarlanabilir; alan boşken FSRS'nin zamanlama yapması deneyseldir | Çalışma alanı bazında ayarlanabilir; varsayılan `1m 10m` |
| Yeniden öğrenme adımları | Ayarlanabilir; alan boşken FSRS'nin zamanlama yapması deneyseldir | Çalışma alanı bazında ayarlanabilir; varsayılan `10m` |
| Azami aralık | Varsayılan 100 yıl | Varsayılan 36.500 gün, yani yine 100 yıl |
| Ayar değişiklikleri | Varsayılan olarak sonraki tekrarlara uygulanır; isteğe bağlı geriye dönük yeniden zamanlama vardır | Yalnızca sonraki tekrarlara uygulanır; mevcut tekrar tarihleri yeniden hesaplanmaz |
| Çalışma yükü araçları | **Help Me Decide (Experimental)** ve **FSRS Simulator (Experimental)** | v1'de eşdeğer bir çalışma yükü simülatörü yoktur |

Nibomo standart Again, Hard, Good ve Easy değerlendirmelerini kullanır ve kart bazında FSRS bellek durumunu tutar. Sunucudaki, iOS'teki ve Android'deki zamanlayıcılar, aynı şekilde çalışacak biçimde geliştirilen üç bağımsız uygulamadır. Web'deki tekrar akışı, dördüncü bir kopya yerine sunucudaki zamanlayıcıyı kullanır.

Bu sınırlar ve varsayılanlar, herkese açık [Nibomo FSRS zamanlama belirtiminde](https://github.com/kirill-markin/flashcards-open-source-app/blob/main/docs/fsrs-scheduling-logic.md) belgeleniyor. Aralarındaki fark açık: Nibomo, çalışma alanı bazında pratik bir FSRS-6 kurulumu sunarken Anki daha ayrıntılı kapsam seçenekleri, kişiselleştirilmiş parametre optimizasyonu ve simülasyon sunuyor. Bu kontroller sizin için vazgeçilmezse Anki daha uygun seçimdir.

## Uzun süredir çalışılan bir koleksiyon için daha güvenli iş akışı

Zaten aylar veya yıllar boyunca birikmiş tekrar geçmişiniz varsa şu sırayı izleyin:

1. **Değerlendirmeleri doğru kullanın.** Again başarısızlık, Hard zorlanarak başarı demektir.
2. **Geçerli ön ayarı optimize edin.** Ağırlıkları düzenlemek veya kopyalamak yerine kendi geçmişinizi kullanın.
3. **Gerekirse sağlık kontrolünü çalıştırın.** Az veya tutarsız geçmişi veri sorunu olarak ele alın.
4. **Help Me Decide aracını kullanın.** Sürdürebileceğiniz tekrar sayısına veya çalışma süresine uygun bir hatırlama oranı aralığı seçin.
5. **Simülatörü çalıştırın.** Mevcut ayarları, önerdiğiniz hedefi ve daha düşük yeni kart ekleme hızını karşılaştırın.
6. **Kullandığınız ayarlardan birini değiştirin.** Önce hatırlama oranını veya yeni kart sayısını ayarlayın, sonra gerçek kuyruğu gözlemleyin.
7. **Adımları kısa tutun.** Bir gün ve üzeri süreler içeren öğrenme ve yeniden öğrenme dizilerini kaldırın; boş alanları yalnızca deneme olarak kullanın.
8. **Azami aralığı uzun bırakın.** Ancak belirli bir zaman sınırı veya gereklilik varsa kısaltın.
9. **Yeniden zamanlamayı kapalı tutun.** Hemen yeniden hesaplama gerekiyorsa önce yedek alın ve oluşacak kuyruğu planlayın.

Bu sırayı izlemek, uzun süredir kullandığınız tekrar planında yaptığınız değişiklikleri mümkün olduğunca geri alınabilir tutar. Ayrıca modelin geçmişe uyumu, hatırlama hedefi ve yeni içerik ekleme hızı gibi üç ayrı sorunun tek bir ayar bulmacasına dönüşmesini önler.

## En iyi FSRS ayarları hakkında sık sorulan sorular

### FSRS için en iyi hatırlama hedefi %90 mı?

Anki'nin varsayılanı olduğu ve yüksek hatırlama oranlarındaki çalışma yükü eğrisinin en dik kısmından uzak kaldığı için en güvenli genel başlangıç noktasıdır. Belirli bir deste için en iyi değer, unutmanın bedeline ve sürdürebileceğiniz çalışma yüküne bağlıdır. Değiştirmeden önce **Help Me Decide (Experimental)** aracına bakın.

### Hedeflenen hatırlama oranını %95 yapmalı mıyım?

Yalnızca ek tekrar sayısını veya çalışma süresini kontrol ettikten sonra. İyi hazırlanmış ve kritik öneme sahip bir deste %95'i haklı çıkarabilir; geniş, hobi amaçlı bir koleksiyonda ise yük gereksiz yere ağırlaşabilir. Tekrar tarihlerinin hemen yeniden hesaplanmasını bilinçli olarak istemiyorsanız aynı anda geriye dönük yeniden zamanlamayı açmayın.

### FSRS parametrelerini ne sıklıkla optimize etmeliyim?

Ayda bir zaten yeterince sıktır; Anki 26.08'in uygulama içi açıklaması birkaç ayda birin yeterli olduğunu söylüyor. Günlük veya haftalık takvime göre değil, kayda değer miktarda yeni geçmiş biriktikten sonra optimize edin.

### FSRS öğrenme adımları boş olmalı mı?

Öğrenme veya yeniden öğrenme adımlarının boş olması, Anki 26.08'in ilgili kısa vadeli zamanlamayı FSRS'ye bırakmasını sağlar. Bu özellik deneyseldir ve Again'e bastığınız kart bir gün veya daha sonra yeniden gösterilebilir. Aynı gün tamamlanan az sayıda adım, temkinli seçenek olmaya devam eder.

### FSRS ayarlarını değiştirmek mevcut Anki kartlarını yeniden zamanlar mı?

Varsayılan olarak hayır. **Reschedule cards on change** kapalıyken yeni ayarlar, kuyruğu hemen yeniden oluşturmadan sonraki tekrarları etkiler. Açmak tekrar tarihlerini değiştirir ve birçok kartın zamanının gelmesine neden olabilir; bu yüzden önce yedek alın.

### CMRR hâlâ Anki'de var mı?

Hayır. Anki, Compute Minimum Recommended Retention özelliğini 25.07 sürümünde kaldırdı. Anki 26.08'de hatırlama hedefini tahmini çalışma yüküyle karşılaştırmak için **Help Me Decide (Experimental)** ve **FSRS Simulator (Experimental)** araçlarını kullanın.

### Nibomo, Anki ile aynı ayarları mı kullanıyor?

FSRS-6 kullanır; hedeflenen hatırlama oranı, öğrenme adımları, yeniden öğrenme adımları, azami aralık ve aralıklara küçük rastgele sapmalar ekleyen fuzz ayarı çalışma alanı bazında sunulur. Anki'nin tüm ayar modelini kopyalamaz: v1'de ağırlıklar sabittir, değişiklikler yalnızca sonraki tekrarlara uygulanır ve kişiselleştirilmiş parametre optimizasyonu veya çalışma yükü simülatörü yoktur.

## Yüzdeden önce çalışma yükünü belirleyin

İyi FSRS ayarları, tekrar kuyruğunu gerçek bir çalışma planına hizmet edecek hâle getirir. %90 ile başlayın, çalışma yükünü tahmin edin, yeni kart ekleme hızını kontrol edin ve hatırlama hedefini ancak daha fazla hatırlamak ek tekrarlara değiyorsa yükseltin. Adımları kısa, azami aralığı uzun tutun; değerlendirmeleriniz gerçek hatırlama durumunuzu yansıtsın.

Sonra ayarlar ekranından çıkın. Zamanlayıcının bir akşam daha ince ayar yapmanıza değil, düzenli tekrarlara ihtiyacı var.
