---
title: "Mochi bilgi kartları incelemesi (2026): Ücretsiz plan, çevrimdışı kullanım ve Anki karşılaştırması"
description: "Mochi'nin ücretsiz planını, çevrimdışı uygulamalarını, Markdown notlarını, FSRS'yi, senkronizasyonu, Anki'den içe aktarımı, dışa aktarma seçeneklerini ve kendi sunucunuzda barındırmanın sınırlarını ele alan, kaynakları kontrol edilmiş bir inceleme."
date: "2026-03-18"
updated: "2026-09-07"
image: "/blog/mochi-alternative-v3.png"
keywords:
  - "mochi bilgi kartları"
  - "mochi kartları"
  - "mochi ve anki karşılaştırması"
  - "anki ve mochi karşılaştırması"
  - "mochi ücretsiz mi"
  - "mochi çevrimdışı"
  - "mochi fiyatlandırma"
  - "mochi barındırma"
  - "markdown bilgi kartları"
  - "mochi aralıklı tekrar"
---

Mochi, alışılmış ön ve arka yüz alanlarından oluşan bir form yerine bir Markdown belgesiyle başlar. Üç tire içeren bir satır eklediğinizde belge, tekrar yapabileceğiniz yüzlere ayrılır. Belgeyi not olarak bırakabilir, başka bir karta bağlayabilir veya tekrar kuyruğuna girmeden aramalarda bulunabilmesi için arşivleyebilirsiniz.

Bu küçük ayraç, **Mochi bilgi kartlarının** kimlere uygun olduğunu açıklıyor. Mochi, notlarını ve aralıklı tekrarlarını, verileri öncelikle cihazda tutan tek bir uygulamada birleştirmek isteyenler için güçlü bir seçenek. Markdown, geri bağlantılar ve basit bir Hatırladım/Unuttum değerlendirmesi size doğal geliyorsa özellikle uygun. Koleksiyonu otomatik üretilen kart çeşitlerine, özel HTML/CSS'ye, JavaScript'e, eklentilere veya ayrıntılı zamanlayıcı ayarlarına dayanan deneyimli bir Anki kullanıcısı içinse daha az ikna edici.

Tek cihazda çalışıyorsanız ücretsiz plan bir deneme sürümünden fazlası: Hesap açmak gerekmiyor ve Mochi sınırsız çevrimdışı kullanımı belgeliyor. Kısıt şu: Cihazlar arası senkronizasyon **aylık 5 ABD doları olan Pro planına** dahil. Anki kullanıcıları için daha ağır bedel, geçiş sırasında kaybolan özellikler olabilir. Mochi bir Anki paketini tekrar geçmişiyle birlikte içe aktarabilir, ancak her şablonu, stili, betiği, zamanlayıcı ayarını veya eklenti davranışını koruyamaz.

> **Açıklama:** Ben Kirill Markin. [Nibomo'yu](/tr/) geliştiriyorum. Bu yazı, kaynakları kontrol edilerek hazırlanmış bir çalışma düzeni incelemesidir; ürünü bizzat test ettiğim iddiasını taşımıyor. Satış ortaklığı bağlantısı yok. Ana karşılaştırma Mochi ile Anki arasında; kendi ürünüm yalnızca yazının sonuna doğru açıkça belirtilen bir alternatif olarak yer alıyor.

**Bilgilerin kontrol edildiği tarih:** 7 Eylül 2026. O tarihte görünen en son [Mochi sürümü](https://mochi.cards/changelog/), 10 Ağustos 2026 tarihli 26.8.2 idi. Fiyatlar ve uygulama mağazası bilgileri değişebilir.

![Bir kitap konservatörü, orijinal arşiv güvenle kutusunda dururken birbirine bağlı, akordeon gibi katlanan küçük bir kart dizisini deniyor](/blog/mochi-alternative-v3.png)

## Kısa değerlendirme

- Markdown notlarını ve kartları bir arada tutmak, tek cihazda hesap açmadan çevrimdışı çalışmak, geri bağlantılar kullanmak ve tekrar sırasında iki seçenek arasında karar vermek istiyorsanız **Mochi'yi seçin**.
- Oturmuş not türlerine, HTML/CSS şablonlarına, eklentilere, ücretsiz sunulan bulut senkronizasyonuna, dört tekrar derecesine veya daha ayrıntılı FSRS ayarlarına ihtiyacınız varsa **Anki'yi seçin**.
- Zaten düzenli tekrar yapıyor ve Mochi'nin çalışma düzeninizde hangi sorunu çözeceğini söyleyemiyorsanız **henüz geçiş yapmayın**. Yeni bir arayüz, yıllar içinde biriken zamanlama verilerinizi ve özelleştirdiğiniz kartları riske atmak için yeterli gerekçe değil.
- Uzun vadeli koleksiyonunuz zaten Anki'deyse **taşımadan önce deneyin**. Mochi `.apkg` dosyalarını kabul eder ve tekrar geçmişini alabilir, ancak HTML'yi Markdown'a dönüştürür; CSS ve JavaScript'i kaldırır.

## Bir bakışta Mochi ve Anki

| Karar ölçütü | Mochi | Anki |
|---|---|---|
| Kimler için uygun? | Notlarını tekrar kartlarının yanında isteyen, bağlantılı not ve Markdown kullanıcıları | Oturmuş, yapılandırılabilir bir bilgi kartı sistemi isteyen kişiler |
| Kart oluşturma | `---` eklediğinizde Markdown belgesi birden fazla yüze ayrılır; alanlar ve şablonlar da kullanılabilir | Notlar alanlar içerir; HTML/CSS şablonları bir veya daha fazla kart üretir |
| Tekrar akışı | Yeni kartlar önce öğrenme aşamasına girer; öğrenilmiş kartlarda Unuttum / Hatırladım kullanılır | Kartlarda Tekrar / Zor / İyi / Kolay kullanılır |
| Zamanlama | Varsayılan olarak Mochi'nin kendi algoritması; FSRS isteğe bağlı | FSRS veya eski SM-2; FSRS için daha kapsamlı ayar araçları |
| Ücretsiz kullanım | Hesap açmadan sınırsız çevrimdışı kullanım | Ücretsiz masaüstü uygulamaları ve ücretsiz AnkiWeb senkronizasyonu; resmî iOS uygulaması ücretli |
| Cihazlar arası senkronizasyon | Pro, aylık 5 ABD doları | AnkiWeb üzerinden ücretsiz |
| Platformlar | Web, macOS, Windows, Linux, iOS, Android | Windows, macOS, Linux, AnkiWeb, resmî AnkiMobile, bağımsız AnkiDroid |
| Taşınabilir biçimler | Uygulamanın kendi `.mochi` biçimi, Markdown ve CSV dışa aktarımları | Uygulamanın kendi `.colpkg` ve `.apkg` biçimleri ile sekmeyle ayrılmış metin |
| Veri ve barındırma sınırı | Veriler öncelikle cihazda tutulur; temel uygulama açık kaynaklı olarak sunulmaz ve kendi altyapınızda çalıştırabileceğiniz desteklenen bir senkronizasyon hizmeti belgelenmez | Ana depo AGPL lisanslıdır; kendi altyapınızda çalıştırabileceğiniz resmî bir senkronizasyon sunucusu belgelenmiştir |

Asıl ayrım, **not odaklı sadelik ile koleksiyon düzeyinde kontrol** arasında.

## Mochi arayüzünün merkezinde ne var?

Bir kartın izlediği yolu takip ettiğinizde Mochi'nin arayüzü daha anlaşılır hale geliyor.

Her kart bir desteye aittir. **New Card (Yeni kart)** düğmesine tıkladığınızda sabit soru ve cevap kutuları yerine bir Markdown düzenleme alanı açılır. Tek bir kartta başlıklar, listeler, kod, görseller, yapılandırılmış alanlar ve bağlantılar bulunabilir. İki veya daha fazla tekrar yüzü oluşturmak için blokların arasına `---` ekleyin. Başka bir karta başvurmak için `[[double brackets]]` biçiminde çift köşeli parantez kullanın; Mochi otomatik olarak geri bağlantı oluşturur. Resmî [kartlara genel bakış sayfası](https://mochi.cards/docs/cards/), yer tutucular aracılığıyla yapılandırılmış alan değerlerini gösteren şablonları da belgeliyor.

Kartlar, ayrı sistemlerde tutulmadan iki iş görebilir:

- Tekrar kartı, yüzlere ayrılır ve aralıklı tekrar programına dahil olur.
- Başvuru notu aynı destede kalabilir ve arşivlenebilir. Arşivleme; içeriğini, etiketlerini, bağlantılarını veya geçmişini silmeden notu yeni kart ve tekrar zamanı gelen kart kuyruklarından çıkarır.

[Deste görünümleri](https://mochi.cards/docs/decks/custom-views/), filtre, sıralama ve yerleşim tercihlerinin birlikte kaydedildiği görünümlerdir. Normal gezinme için bir ızgara görünümü tutabilir; ardından bir etikete, tekrar zamanına, düşük hatırlama oranına veya yakın zamanda yapılan tekrarlara göre başka bir görünüm oluşturabilirsiniz. Mochi, normal zamanlamayı veya tekrar geçmişini değiştirmeden bir görünümdeki kartlarla yoğun çalışma oturumu başlatmanıza da izin verir. Bu, arayüze “sade” demekten daha somut bir özellik: Aynı deste bir not defteri, filtrelenmiş bir veri tabanı ve çalışma kuyruğu gibi kullanılabilir.

[Günlük tekrar](https://mochi.cards/docs/getting-started/reviewing-cards/) iki aşamalıdır. **New cards (Yeni kartlar)** aşamasında kartı ya tekrar programına eklersiniz ya da kısa süre sonra yeniden görmek için Again (Tekrar) seçeneğini kullanırsınız. Kart öğrenildikten sonra tekrar zamanı geldiğinde bir sonraki yüz açılır ve sizden **Forgot (Unuttum)** veya **Remembered (Hatırladım)** seçmeniz istenir. Unuttuysanız Mochi, ilerlemeyi sıfırlamadan önce kartı yeniden tekrar kuyruğuna alır. Böylece tekrar sırasında vermeniz gereken karar bilinçli olarak iki seçenekle sınırlanır.

## Mochi ücretsiz mi, çevrimdışı neler çalışıyor?

Evet, ancak “ücretsiz” ve “çevrimdışı” sözcüklerinin anlamı uygulamayı nerede kullandığınıza göre değişiyor. [Mochi'nin fiyatlandırma sayfası](https://mochi.cards/) şu planları listeliyor:

- **Free (Ücretsiz):** Süresiz 0 ABD doları, hesap açmak gerekmez, sınırsız çevrimdışı kullanım içerir.
- **Pro:** Aylık 5 ABD doları; cihazlar arası senkronizasyon, deste yayımlama, dinamik alanlar, yapay zekâ entegrasyonu ve e-posta desteği ekler.

Mochi; macOS, Windows, Linux, iOS, Android ve web üzerinde çalışır. [İndirme ve kurulum rehberi](https://mochi.cards/docs/getting-started/download-and-install/), pratikte sınırın nerede olduğunu açıklıyor:

| Kullanım ortamı | Ücretsiz ve çevrimdışı ne anlama geliyor? |
|---|---|
| Kurulu masaüstü veya mobil uygulama | Mochi'yi hesap açmadan çevrimdışı kullanabilirsiniz. Veriler cihazda tutulur; bu nedenle tek bir kurulu uygulama, ücretsiz çalışma düzeninizin tamamını karşılayabilir. |
| Pro olmadan web uygulaması | İçerik, tarayıcının çevrimdışı depolama alanında tutulur. Mochi, tarayıcının bu verileri haber vermeden silebileceği konusunda uyarıyor. |
| Aynı koleksiyonun birden fazla cihazda kullanılması | Her kurulu uygulama çevrimdışı çalışabilse de otomatik cihazlar arası senkronizasyon bir Pro özelliğidir. |

Çevrimdışı kullanım ve senkronizasyon ayrı özelliklerdir. İndirdiğiniz uygulamada yalnızca kart oluşturmak veya tekrar yapmak için Pro'ya ihtiyacınız yok. Ancak aynı güncel koleksiyonun dizüstü bilgisayardan telefona otomatik olarak geçmesini istiyorsanız Pro gerekir. Ücretsiz plandaki önemli veriler için uygulamanın kendi biçiminde yedek tutun; cihazı, özellikle de tarayıcı depolamasını tek kopya olarak görmeyin.

Kararınızı çevrimdışı kullanım belirliyorsa kullandığınız cihazdaki çalışma düzenini [Anki çevrimdışı çalışır mı?](/blog/does-anki-work-offline/) yazısıyla ve daha kapsamlı [çevrimdışı bilgi kartı uygulamaları rehberiyle](/blog/best-offline-flashcards-app/) karşılaştırın.

## Mochi'yi seçmenin asıl nedeni Markdown bilgi kartları

Mochi'nin asıl avantajı, Markdown sayesinde kartlarınızın kaynak içeriğiyle farklı bir şekilde çalışabilmeniz.

Mochi kartı metin olarak okunabilir kalır. Aynı belgede kısa bir açıklama, kod bloğu, ilgili fikirlere bağlantılar ve tekrar yüzlerini ayıran çizgiler bulunabilir. Tekrarlanan bir yapı önemliyse kartlarda alanlar ve şablonlar da kullanılabilir. Şablon uygulandığında Mochi, şablonun Markdown içeriğini alan yer tutucularıyla işler; kartın kendi Markdown içeriğini silmeden, görüntüleme sırasında onu dikkate almaz.

Anki farklı bir modelden başlar. Bir not, verileri alanlarda saklar; hangi alanların gösterileceğini ve hangi kartların üretileceğini [kart şablonları](https://docs.ankiweb.net/templates/intro.html) belirler. Şablonlar HTML, biçimlendirme ise CSS kullanır. Böylece tek bir kelime notu, temel verileri aynı yerde tutarken hem kelimeyi tanımaya hem de hatırlayıp kullanmaya yönelik kartlar oluşturabilir.

Bu yapı Anki'ye koşullu yerleşimler, otomatik üretilen kart çeşitleri, cevabı yazarak verme, özel biçimlendirme ve eklentilerle genişletilen çalışma düzenleri için daha fazla olanak verir. Aynı zamanda Anki'nin yerleşik olarak Markdown kullanan bir bilgi kartı uygulaması olmadığı anlamına gelir. Anki'de Markdown tabanlı çalışmak için ek bir dönüştürme veya eklenti katmanı gerekir.

Pratik soru basit: Karta dönüşebilen bir not mu, yoksa birden fazla kart üretebilen yapılandırılmış bir not türü mü istiyorsunuz? Mochi birincisine, Anki ikincisine odaklanıyor.

## Mochi'nin aralıklı tekrar seçenekleri artık FSRS'yi de içeriyor

Mochi'de FSRS olmadığını söyleyen karşılaştırmalar güncelliğini yitirdi. Mochi, 2025'te bir FSRS önizlemesi ekledi ve zamanlayıcıya ilişkin düzeltmeler yayımlamaya devam etti. Yine de [varsayılan seçenek Mochi'nin kendi algoritması](https://mochi.cards/docs/reviewing/fsrs/).

Varsayılan algoritma, hatırlanan veya unutulan her tekrardan sonra aralıkları sabit çarpanlarla değiştirir. Review Settings (Tekrar ayarları) bölümünden FSRS'ye geçtiğinizde, mevcut öğrenilmiş kartlar geçmişlerini kaybetmeden FSRS'ye taşınır. Hedef hatırlama oranını ayarlayabilir, özel parametreler girebilir ve daha sonra geri dönebilirsiniz.

Mochi her iki zamanlayıcıda da iki seçenekli değerlendirmeyi korur:

- **Forgot (Unuttum)**, FSRS'deki Again (Tekrar) derecesine karşılık gelir.
- **Remembered (Hatırladım)**, FSRS'deki Good (İyi) derecesine karşılık gelir.

Mochi'nin belgeleri, iki seçenekli değerlendirmenin FSRS ile çalıştığını, ancak Hard (Zor) ve Easy (Kolay) seçeneklerinin sağlayacağı bazı bilgilerin kaybolduğunu belirtiyor. Mochi optimize edilmiş özel parametreleri kabul eder, fakat yerleşik bir optimizasyon aracı yoktur. Kişisel parametreler üretmek için haricî bir FSRS optimizasyon aracı ve Mochi tekrar geçmişi gerekir.

[Anki'nin FSRS ayarları](https://docs.ankiweb.net/deck-options.html#fsrs) daha ileri gider. İstenen hatırlama oranı ve parametreler ayar profillerine bağlanabilir, yerleşik optimizasyon aracı parametreleri tekrar geçmişine göre uyarlayabilir ve simülatör farklı ayarlardaki tekrar sayılarını veya çalışma sürelerini dakika cinsinden tahmin eder. Anki ayrıca dört sonucu kaydeder: Again (Tekrar), Hard (Zor), Good (İyi) ve Easy (Kolay).

Bu ek düğmeler yalnızca tutarlı kullanıldıklarında yararlıdır. Anki'nin kılavuzunda Hard, başarılı bir hatırlama olarak ele alınır. Cevabı unuttuğunuzda Hard'a basmanız FSRS'ye yanlış bilgi verir ve gereğinden uzun aralıklar oluşturabilir.

Hatırladım/unuttum ayrımı oturumu sade tutuyorsa Mochi'nin iki seçenekli tekrar sistemini seçin. Ek değerlendirme bilgisini istiyor ve optimizasyon aracını, hatırlama oranı ayarlarını, ayar profillerini veya iş yükü simülatörünü kullanacaksanız Anki'yi seçin. Uygulamalar yerine zamanlayıcıları karşılaştırmak için [FSRS ve SM-2](/blog/fsrs-vs-sm-2/) yazısına bakın.

## Mochi ve Anki'de ücretler farklı ihtiyaçlarda ortaya çıkıyor

Tek bir bilgisayarda çalışmak için iki uygulama da ücretsiz olabilir. Çalışma düzenine daha fazla cihaz girdiğinde maliyet farklı bir yerde ortaya çıkar.

Mochi, Pro senkronizasyonu için **aylık 5 ABD doları** alır; buna yayımlama, dinamik alanlar, yapay zekâ entegrasyonu ve destek de dahildir. Anki'nin masaüstü uygulamaları ücretsizdir ve [resmî Anki sitesi](https://apps.ankiweb.net/), AnkiWeb senkronizasyonunun ücretsiz olduğunu belirtir. AnkiMobile, ücretli resmî iPhone ve iPad uygulamasıdır; AnkiDroid ise bağımsız geliştirilen ücretsiz bir Android istemcisidir.

Dolayısıyla “Hangisi daha ucuz?” sorusunun cevabı cihazlarınıza bağlı:

- Tek bilgisayarda ikisi de ücretsiz olabilir.
- Birden fazla masaüstü veya Android cihazında Anki'nin ücretsiz bulut senkronizasyonu sayesinde abonelik gerekmez.
- iPhone veya iPad'de Anki tek seferlik uygulama satın alımı gerektirirken Mochi, cihazlar arası senkronizasyonu düzenli ödemeli Pro planına dahil eder.
- Yayımlama, dinamik alanlar veya yapay zekâ entegrasyonunu zaten isteyen Mochi kullanıcıları, senkronizasyonu ödemenin tek karşılığı değil, paketin bir parçası olarak görebilir.

iOS'taki toplam maliyeti tam olarak karşılaştırmadan önce bölgenizin App Store'una bakın. Bölgeye göre değişebildiği için bu incelemede sabit bir uygulama mağazası fiyatı vermiyorum.

## Mochi'yi barındırmak ile verileri cihazda tutmak aynı şey değil

Üç kavram sık sık birbirine karıştırılıyor:

- **Yerel öncelikli çalışma**, üzerinde çalışılan kopyanın cihazınızda bulunduğu ve uygulamanın bulut hizmeti olmadan çalışmaya devam edebildiği anlamına gelir.
- **Açık kaynaklı**, kaynak kodunun incelemeye ve değiştirmeye izin veren bir lisansla sunulduğu anlamına gelir.
- **Kendi sunucunuzda barındırma**, ilgili hizmeti kendi altyapınızda çalıştırmanın desteklenen bir yolunun ürün belgelerinde açıklandığı anlamına gelir.

Mochi, yerel öncelikli çalışmayı açıkça belgeliyor. Temel uygulamasını açık kaynaklı olarak sunmuyor: Herkese açık sitesinin alt kısmındaki “Open source” bağlantısı, temel uygulamaya değil [bir entegrasyon derlemesine](https://github.com/mochi-cards/open-source) gidiyor. Resmî sitesi, Pro senkronizasyonunun yerine kendi sunucunuzda çalıştırabileceğiniz desteklenen bir seçeneği de belgelemiyor.

Kendi sunucunuzu kullanmak istediğiniz için **Mochi barındırma** seçeneklerini arıyorsanız sınır şu: Verilerinizi cihazınızda tutabilir ve uygulamanın kendi biçiminde yedekleyebilirsiniz, ancak belgelenmiş cihazlar arası kullanım yolu Mochi Pro'dur. Yerel öncelikli çalışma, verileriniz üzerindeki kontrolünüzü artırır; kendi sunucunuzda barındırma anlamına gelmez.

Anki'nin ana deposu, bazı bileşenler için belirtilen istisnalarla birlikte [AGPL sürüm 3 veya sonrası kapsamında lisanslıdır](https://github.com/ankitects/anki/blob/main/LICENSE). Resmî kılavuz, ileri düzey kullanıcılar için [kendi sunucunuzda çalıştırabileceğiniz bir senkronizasyon sunucusunu](https://docs.ankiweb.net/sync-server.html) da belgeliyor. Bu sunucu, uyumlu istemcilerde AnkiWeb senkronizasyonunun yerini alır; AnkiWeb sitesinin kendi sunucunuzda barındırılan bir kopyası değildir. Anki, sunucuyu yöneten kişinin komut satırı, ağ, güvenlik duvarı, protokol ve güncelleme sorunlarını ele alabilmesini bekler.

## Anki içe aktarımı neleri korur, neleri değiştirir?

Mochi'nin [içe aktarma belgeleri](https://mochi.cards/docs/import-and-export/importing/), Anki `.apkg` dosyalarının tekrar geçmişiyle birlikte kabul edildiğini belirtiyor. Ancak “içe aktarıldı” ve “aynı şekilde çalışıyor” aynı sonuç değil.

İçe aktarım sırasında Mochi, HTML'yi Markdown'a dönüştürür; CSS ve JavaScript'i kaldırır. Bu, iki farklı kart modeli arasında yapılan bir biçim dönüşümüdür. Basit ön/arka yüz içeriği en kolay durumdur. Biçimlendirmeye, şablon mantığına, cevabın yazılarak girildiği etkileşimlere veya JavaScript'e dayanan kartların içe aktarıldıktan sonra incelenmesi gerekir.

Tekrar geçmişi için de dışa aktarım sırasında açık bir seçim yapmak gerekir. Anki'nin [dışa aktarma kılavuzu](https://docs.ankiweb.net/exporting.html), **Include Scheduling Information (Zamanlama bilgilerini dahil et)** seçeneğinin tekrar geçmişinin pakete girip girmeyeceğini belirlediğini söylüyor. Bu seçeneği kapalı bırakırsanız Mochi, `.apkg` dosyasında hiç bulunmayan geçmişi geri getiremez.

Geçmiş aktarılsa bile gelecekteki tekrar tarihlerinin aynı olmasını beklemeyin. İki uygulama farklı zamanlayıcılar, değerlendirme dereceleri, hedef hatırlama oranları, parametreler, öğrenme adımları ve deste ayarları kullanabilir. Korunan tekrar kayıtları yeni zamanlayıcıya veri sağlar; sistemleri birbirinin aynısı yapmaz.

## Uygulamanın kendi yedekleriyle taşınabilir metin farklı işler görür

Herhangi bir şeyi taşımadan önce orijinal sistemi geri yükleyebilecek bir yedek tutun. Okunabilir bir dışa aktarma dosyası yararlıdır, ancak sistemi her zaman bu dosyadan geri yükleyemezsiniz.

Mochi'nin [yedekleme rehberi](https://mochi.cards/docs/getting-started/backing-up/), uygulamanın kendi verilerini korumak için iki seçenek belgeliyor:

- Kullanıcı dizininin tamamını kopyalamak; içeriği, tekrar geçmişini, ekleri, uygulama ayarlarını ve oturum açma durumunu korur.
- `.mochi` dışa aktarımı; desteleri, kartları, şablonları ve alanları, ekleri, etiketleri ve meta verileri, tekrar geçmişini, kart sırasını ve deste yapısını korur.

Mochi'nin [Markdown ve CSV dışa aktarımları](https://mochi.cards/docs/import-and-export/exporting/) içeriği başka araçlara taşımaya yarayan biçimlerdir. Markdown, her kart için bir dosya ve alt desteler için klasörler oluşturur; ancak tekrar geçmişini, kart sırasını, şablonları ve Markdown'ın içinde yer almayan meta veri etiketlerini içermez. CSV, şablon alanlarını veya görüntülenen ön/arka yüzleri dışa aktarabilir; fakat tekrar geçmişini, şablonları veya içeriğe gömülü olmayan meta veri etiketlerini korumaz.

Anki de benzer bir ayrım yapar:

- `.colpkg`, koleksiyonun tamamını zamanlama bilgileriyle dışa aktarır ve medya içerebilir. İçe aktarılması, hedef Anki koleksiyonundaki kartların yerini alır.
- `.apkg`, zamanlama bilgileri, ayar profilleri ve medya seçenekleriyle bir desteyi ve alt destelerini dışa aktarır.
- Düz metin olarak dışa aktarılan notlarda alanlar sekme karakterleriyle ayrılır ve HTML biçimlendirmesi metne gömülür. Düzenlenebilir içeriği korur; koleksiyonun tüm işleyişini korumaz.

Mochi'den Anki'ye geri dönüş genellikle CSV üzerinden yapılır. Anki, [metin sütunlarını not alanlarıyla eşleştirebilir](https://docs.ankiweb.net/importing/text-files.html), ancak Mochi bağlantıları, çok yüzlü kart davranışı, şablonlar ve tekrar geçmişi bu dosya aracılığıyla eşdeğer Anki nesnelerine dönüşmez. Anki kopyası doğru göründükten sonra da `.mochi` dışa aktarımını saklayın.

## Koleksiyonunuzu temsil eden bir desteyle geçişi ve geri dönüşü deneyin

Bir aktarım penceresi, dosyanın kabul edildiğini kanıtlar. Gerçek koleksiyonunuzun hâlâ çalıştığını veya kullanılabilir içeriği geri getirebileceğinizi kanıtlamaz. Normal Anki profilinize dokunmadan her iki yönü de deneyin.

1. **Anki'nin tamamını yedekleyin.** Medya içeren bir `.colpkg` dışa aktarın ve kullandığınız profilin dışında saklayın.
2. **Yedeğin açıldığını doğrulayın.** Boş, geçici bir Anki profili oluşturun ve `.colpkg` dosyasını oraya aktarın. Koleksiyon paketi içe aktarıldığında hedef koleksiyonun yerini alır; geçici profil bu yüzden önemlidir.
3. **Bu geçici profilde koleksiyonunuzu temsil eden bir deste oluşturun.** Kart kart inceleyebileceğiniz kadar küçük tutun, ancak kullandığınız ve ihtiyaç duyduğunuz özellikleri dahil edin: temel ve ters kartlar, boşluk doldurma, özel şablonlar, CSS, JavaScript, görseller, ses, denklemler, etiketler, iç içe desteler ve tekrar geçmişi.
4. **Bu desteyi `.apkg` olarak dışa aktarın.** Gerekiyorsa zamanlama bilgilerini, ayar profillerini ve medyayı dahil edin. Bu seçenekler verileri Anki paketine koyar; Mochi'nin her ayarı yeniden üreteceğini vaat etmez.
5. **Yeni bir Mochi destesine içe aktarın.** Günlük kullandığınız Anki profilini ve tekrar zamanı gelen kartların kuyruğunu değiştirmeyin.
6. **Tekrar yapmadan önce inceleyin.** İçeriği, biçimlendirmeyi, alanları, medyayı, etiketleri, deste yapısını ve geçmişi karşılaştırın. HTML, CSS, JavaScript veya otomatik üretilen kart çeşitlerine dayanan her şeye özellikle dikkat edin.
7. **Zamanlayıcıyı bilinçli seçin.** Mochi kendi algoritmasıyla başlar. FSRS'yi yalnızca denemeden sonra da onu kullanmayı düşünüyorsanız açın.
8. **Kopyayla alıştığınız düzende bir hafta boyunca tekrar yapın.** Markdown düzenleme akışını, Yeni kartlar aşamasını, Hatırladım/Unuttum kararını, çevrimdışı davranışı ve ücretini ödediyseniz senkronizasyonu gerçekten yanınızda taşıdığınız cihazlarda değerlendirin.
9. **Geri dönüş yolunu deneyin.** Mochi deneme destesini uygulamanın kendi yedeği için `.mochi`, Anki için CSV olarak dışa aktarın. Yeniden kullanılabilir alanlar önemliyse alan değerlerini içeren CSV'yi; esas olarak görünen ön/arka yüz içeriğine ihtiyacınız varsa görüntülenen yüzleri içeren CSV'yi kullanın. Bu CSV'yi başka bir boş Anki profiline aktarın ve sütunlarını uygun bir not türüyle eşleştirin.
10. **Kabul ettiğiniz her kaybı yazın.** Gidiş ve dönüş yollarını ayrı ayrı kontrol edin. Biçimlendirmenin aynen korunması, çok yüzlü kartların işleyişi, eklentilerin davranışı, otomatik üretilen kart çeşitleri, tekrar değerlendirmeleri, geçmiş veya gelecekteki tekrar tarihleri günlük kullanımda karşılaştırma tablosunda göründüğünden daha önemli olabilir.

CSV ile geri dönüş, içeriğin taşınmasıdır; Mochi'nin tam olarak geri yüklenmesi değildir. Tekrar geçmişini, şablonları veya içeriğe gömülü olmayan meta veri etiketlerini taşımaz. Mochi belirlediğiniz sorunu çözmüyorsa deneme destesini silin ve orijinal Anki profilinizle devam edin. Çözüyorsa gerçek desteleri birer birer taşıyın; Anki `.colpkg` ve Mochi `.mochi` yedeklerini birkaç normal tekrar döngüsü boyunca saklayın.

## Mochi bilgi kartlarını kimler kullanmalı?

Şu durumlarda Mochi iyi bir seçenek:

- Zaten Markdown ile yazıyor ve düşünüyorsunuz.
- Notlar ve tekrar kartları aynı bağlantılı çalışma alanında olmalı.
- Dört derece yerine basit bir Hatırladım/Unuttum kararı istiyorsunuz.
- Tek cihazda çevrimdışı kullanım ücretsiz çalışma düzeninize yetiyor veya Pro senkronizasyonunu ayda 5 ABD dolarına değer buluyorsunuz.
- Koleksiyonunuz yeni ya da Anki'den dönüştürmenin düşük risk taşıyacağı kadar basit.

Şu durumlarda Anki'de kalın:

- Not türleriniz, sizin için önemli olan birden fazla kart çeşidi üretiyor.
- HTML/CSS şablonları, JavaScript, eklentiler veya paylaşılan desteler sisteminizin parçası.
- Ücretsiz cihazlar arası senkronizasyon, Markdown ile içerik yazmaktan daha önemli.
- Anki'nin FSRS optimizasyon aracını, ayar profili kontrollerini, dört derecesini ve iş yükü simülatörünü istiyorsunuz.
- Yıllar içinde biriken tekrar verileriniz ve özelleştirdiğiniz işleyiş zaten işinizi görüyor.

En mantıklı Mochi alternatifi, bu iki seçenekten hiçbirinin size neden uymadığına bağlı. Yeni ve daha basit bir koleksiyon için [Nibomo'nun özellikleri](/tr/features/) arasında FSRS tekrarları, çevrimdışı çalışma ve senkronizasyon, taşınabilir kart/etiket/medya aktarımı, ajan erişimi ve kendi sunucunuzda barındırmak için belgelenmiş bir yöntem bulunuyor. Nibomo'yu ben geliştiriyorum ve sınırları burada önemli: Mochi'nin bağlantılı Markdown not defterinin veya Anki'nin oturmuş şablon ve eklenti sisteminin yerini tutmuyor. [Başlangıç rehberi](/docs/getting-started/), barındırılan hizmeti, mobil uygulamaları, ajan erişimini ve kendi sunucunuzda barındırma seçeneğini kullanmaya nasıl başlayacağınızı gösteriyor.

## Son karar

Mochi, daha güzel bir Anki arayüzünden fazlası. Temel fikri, bir Markdown notunun, bağlantılı bir bilgi kaydının ve aralıklı tekrar kartının aynı nesne olabilmesi. Ücretsiz plan, hesap açmadan çevrimdışı çalışmayı kapsıyor; Pro ise cihazlar arası senkronizasyon dahil barındırılan özellikleri ekliyor.

Markdown merkezli yeni bir koleksiyona başlayan biri için bu makul bir tercih. Koleksiyonunuzu temsil eden desteyle yaptığınız deneme, yerleşik Markdown desteğinin ve iki seçenekli tekrarların gerçek zorlukları ortadan kaldırdığını gösterirse Anki'den geçmeye de değebilir.

Yerleşik bir Anki düzeni olan kullanıcı içinse geçişin gerçekten işe yarayacağını görmek gerekir. Koleksiyonu yedekleyin, en fazla özelleştirme içeren kartları deneyin. Mochi, haftalık çalışma düzeninizi belirli biçimlendirme, şablon, zamanlayıcı ve ekosistem özelliklerinden vazgeçmenize değecek kadar iyileştirmiyorsa Anki'de kalın.
