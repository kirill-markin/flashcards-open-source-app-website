---
title: "2026'da Anki Alternatifleri: Geçiş Yapınca Neleri Korur, Neleri Kaybeder, Neler Kazanırsınız?"
description: "Yedi Anki alternatifini aktarım doğruluğu, çevrimdışı kullanım, tekrar planlama, fiyat, kaynak kodu ve kendi sunucunuzda barındırma açısından karşılaştırın; Anki'de kalmanın ne zaman daha güvenli olduğunu görün."
date: "2026-03-14"
updated: "2026-08-28"
image: "/blog/best-anki-alternatives.png"
keywords:
  - "Anki alternatifleri"
  - "Anki alternatifi"
  - "Anki benzeri uygulamalar"
  - "açık kaynaklı Anki alternatifi"
  - "ücretsiz Anki alternatifleri"
  - "iOS için Anki alternatifi"
  - "Anki'den geçiş"
---

Anki'den içe aktarma işlemi hatasız tamamlanabilir ve yine de destenizi işe yarar kılan şeyi ortadan kaldırabilir. Metin aktarılır, kartlar açılır. Ama sonra CSS'in kaybolduğunu, bir ses alanının boş kaldığını, bütün kartların yeni sayıldığını ya da bir notun artık beklediğiniz yönde kartlar üretmediğini fark edersiniz.

Anki alternatiflerini karşılaştırırken asıl maliyet burada ortaya çıkar. Daha sade bir düzenleyiciyi veya daha ucuz bir aboneliği geçişten önce fark etmek kolaydır. Şablonların nasıl çalıştığı, tekrar geçmişi, tekrar tarihleri, eklentiler, çevrimdışı medya ve verilerinizi yeniden dışa aktarma konusunda neler değiştiğini ise çoğu zaman iş işten geçtikten sonra öğrenirsiniz.

Bu karşılaştırma tam bu noktadan başlıyor. Anki benzeri yedi uygulamayı, her birinin mevcut koleksiyonunuzdan neleri aktarabildiğini, içe aktarma sonrasında nelerin değiştiğini ve Anki'de kalmanın ne zaman daha güvenli olduğunu ele alıyor.

> **Açıklama:** Ben Kirill Markin. Aşağıdaki ürünlerden biri olan [Nibomo'yu](https://nibomo.com/) geliştiriyorum. Açık kaynaklı olması, kendi sunucunuzda barındırılabilmesi ve yapay zekâ ajanlarıyla çalışma olanakları nedeniyle listeye ekledim. Otomatik olarak birinci sıraya koymuyorum: doğrudan `.apkg` içe aktarma desteği yok, Anki'den geçişte veri kaybı yaşanıyor ve sistemi kendi altyapınızda çalıştırmak ciddi bir altyapı işi.

**Bilgilerin kontrol edildiği tarih:** 28 Ağustos 2026. Fiyatlar, o tarihte herkese açık ABD fiyatları veya belirtilen yerel fiyatlardır. Vergiler, bölge, eğitim indirimleri ve uygulama mağazası üzerinden ödeme tutarı değiştirebilir.

![Bir saatçi, yıllanmış bir cep saati mekanizmasının farklı bir kasaya uyup uymayacağını kontrol ediyor](/blog/best-anki-alternatives.png)

## Bir şey taşımadan önce kısa cevap

İlk tercihiniz Anki'de kalmak olsun. Ancak başka bir uygulama, geçiş zahmetine değecek ve sürekli karşılaştığınız bir sorunu çözüyorsa geçiş yapın.

Üç ürün, Anki paketlerini öğrenme verileriyle birlikte kabul ediyor. Ancak her birinin sunduğu güvencenin sınırı farklı:

- **Mnemosyne**, özel kart türleri ve öğrenme verileri dâhil tam Anki içe aktarımını belgeliyor. Yerel çalışan, açık kaynaklı, geleneksel bir masaüstü iş akışına burada en yakın seçenek bu; ancak yerel iOS uygulaması yok.
- **Mochi**, `.apkg` dosyalarını tekrar geçmişiyle birlikte içe aktarıyor. HTML'i Markdown'a dönüştürüyor, CSS ve JavaScript'i kaldırıyor ve Anki'nin dört tekrar düğmesinin yerine Remembered (Hatırladım) veya Forgot (Unuttum) seçeneklerini koyuyor.
- **RemNote**, `.apkg` dosyalarını, çoğu not türünü ve tekrar geçmişini içe aktarıyor. Güncel kılavuzu, aktarılan kartların ayrı bir **Need to Learn** (Öğrenilecekler) kuyruğuna girdiğini de söylüyor. Dolayısıyla “tekrar geçmişi aktarıldı” ifadesini “bugünkü Anki kuyruğu birebir kopyalandı” diye okumayın.

Kalan dört seçenekte koleksiyon taşınmıyor; içerik yeniden oluşturuluyor:

- **Quizlet**, herkese açık setler, sınıflar, oyunlar ve yönlendirmeli alıştırmalar için kullanışlı.
- **Brainscape**, gruplara 1–5 arası güven puanıyla daha basit bir tekrar düzeni sunuyor.
- **SuperMemo**, kendine özgü, kapalı kaynaklı yöntemine ve kurs kataloğuna geçiş anlamına geliyor.
- **Nibomo**, MIT lisanslı web ve yerel mobil istemciler, kendi sunucunuzda barındırabileceğiniz bir arka uç, API ve MCP erişimi sunuyor. Sonuçları kontrol edilen TXT veya CSV aktarım süreci, Anki'deki öğrenme durumunu korumuyor.

Kartlarınızın tam olarak aynı görünmesine, eklentilere veya mevcut tekrar kuyruğuna bağımlıysanız Anki'de kalmak kararsızlık değildir. Aradığınız cevap budur.

## Önce Anki koleksiyonunuzun gerçekte neler içerdiğini belirleyin

Bir “deste”, tek parça hâlinde taşınabilen bir nesne değildir. Ürünleri karşılaştırmadan önce taşımayı düşündüğünüz bileşenleri ayırın.

| Koleksiyonun parçası | Anki'nin bir pakete koyabildikleri | Hedef uygulamanın açıkça desteklemesi gerekenler |
| --- | --- | --- |
| **Not içeriği** | Metin alanları ve kaydedilmiş HTML | Alan eşleme, boşluk doldurma, Latin alfabesi dışındaki metinler, kod ve satır sonları |
| **Kart üretimi** | Not türleri ve kart şablonları | İleri/ters yönlü kartlar, özel alanlar, CSS ve JavaScript davranışı |
| **Medya** | **Include media** (Medyayı dâhil et) etkin olduğunda yerel görseller, sesler ve diğer dosyalar | Dosyaların çıkarılması, referanslar, desteklenen biçimler ve cihazlar arası eşitleme |
| **Düzen** | Desteler, alt desteler, etiketler ve isteğe bağlı deste ön ayarları | Hiyerarşi, etiketlerin anlamı, ön ayarlar ve çalışma kapsamları |
| **Öğrenme durumu** | Pakete dâhil edildiğinde tekrar planlama bilgileri ve tekrar geçmişi | Tekrar tarihleri, aralıklar, unutma kayıtları ve hedef uygulamanın planlayıcısına dönüşüm |
| **İş akışını sağlayan kod** | Eklentiler deste paketine dâhil edilmez | Kart tarayıcısı araçları, toplu düzenlemeler, not üretimi ve diğer eklenti işlevlerinin karşılığı |

[Anki dışa aktarma kılavuzu](https://docs.ankiweb.net/exporting.html) bu paket seçeneklerinin tamamını açıklıyor. Metin içe aktarma aracı yalnızca ilk satırı, belki bir de etiketleri görür. Doğrudan `.apkg` içe aktaran bir araç daha fazlasını görebilir; ancak neyi dönüştüreceğine ve neyi atacağına her ürün kendisi karar verir.

Bu yüzden “Anki'den içe aktarır” ifadesi geçiş kararı için fazla belirsizdir. Üç ayrı soru sorun:

1. **Kart hâlâ aynı şeyi mi ifade ediyor?** Alanları, üretilen kartların yönlerini, boşluk doldurma kartlarını, medyayı ve görünümü kontrol edin.
2. **Hedef uygulama neleri öğrendiğimi biliyor mu?** Tekrar kayıtlarını, mevcut durumu, tekrar tarihlerini ve ilk gerçek kuyruğu kontrol edin.
3. **Buradan tekrar ayrılabilir miyim?** Hedef uygulamadan dışa aktarın ve çıkış biçiminin gerçekte neler içerdiğine bakın.

Bir içe aktarma aracı ilk ölçütü karşılayıp diğer ikisinde yetersiz kalabilir.

## Geçişte neler korunuyor?

| Ürün | Anki'den içe aktarma yolu | Öğrenme durumu | Test edilmesi gereken başlıca kayıp |
| --- | --- | --- | --- |
| [RemNote](https://www.remnote.com/) | Çoğu not türü, medya ve tekrar geçmişi için [doğrudan `.apkg` içe aktarımı](https://help.remnote.com/en/articles/6751471-importing-from-anki) | Tekrar geçmişi aktarılır, ancak aktarılan kartlar RemNote'un ayrı **Need to Learn** kuyruğuna girer | Yoğun CSS, özel JavaScript, bazı anlık metin seslendirme işlevleri ve adı değiştirilmiş görsel maskeleme alanları |
| [Mochi](https://mochi.cards/) | Tekrar geçmişi dâhil [doğrudan `.apkg` içe aktarımı](https://mochi.cards/docs/import-and-export/importing/) | Geçmiş aktarılır; belgeler Anki kuyruğunun veya tekrar tarihlerinin birebir korunacağını vadetmez | HTML, Markdown'a dönüşür; CSS ve JavaScript kaldırılır; sonraki değerlendirmeler iki seçeneklidir |
| [Mnemosyne](https://mnemosyne-proj.org/) | Proje, özel kart türleri ve öğrenme verileriyle [tam Anki içe aktarımını](https://mnemosyne-proj.org/features) belgeliyor | Öğrenme verileri farklı bir planlayıcıya aktarılır | Şablon davranışının birebir korunması, dönüştürülen tekrar durumu ve kart görünümü yine de test edilmelidir |
| [Quizlet](https://quizlet.com/) | [Terimleri ve tanımları yapıştırma](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) | Anki'den aktarılmaz | Not türleri, şablonlar, desteler, medya yapısı ve tüm tekrar planlama verileri |
| [Brainscape](https://www.brainscape.com/) | [CSV, TXT, XLSX veya ODS](https://brainscape.zendesk.com/hc/en-us/articles/115002369931-How-do-I-import-various-files-to-create-flashcards) | Anki'den aktarılmaz | Şablonlar, eklentiler, medya kuralları ve tüm tekrar planlama verileri |
| [SuperMemo](https://www.supermemo.com/) | Bir seferde en fazla 100 adet [ayraçlarla ayrılmış soru-cevap satırı yapıştırma](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning) | Anki'den aktarılmaz | Koleksiyon yapısı, medya, şablonlar ve tüm tekrar planlama verileri |
| [Nibomo](https://nibomo.com/) | Anki TXT veya CSV dosyasından yapay zekâ yardımıyla, kontrol edilerek taslak oluşturma | Anki'den aktarılmaz | `.apkg` desteği yok; şablonlar, medyanın aslına uygunluğu, deste hiyerarşisi ve tüm tekrar planlama verileri geride kalır |

## Fiyat, çevrimdışı kullanım, tekrar planlama ve sahiplik

| Ürün | 28 Ağustos 2026'da kontrol edilen fiyat | Çevrimdışı kullanımın sınırı | Tekrar planlayıcısı | Kaynak kodu ve kendi sunucunuzda barındırma |
| --- | --- | --- | --- | --- |
| **RemNote** | [Ücretsiz; Pro yıllık $96 olarak faturalandırılır, aylık karşılığı $8](https://www.remnote.com/pricing) | Kurulu uygulamalar oturum açıldıktan sonra çevrimdışı düzenleme ve tekrar yapar. Masaüstü, bilgi tabanındaki tüm medyayı saklar; mobil yalnızca son kullanılan bazı görselleri önbelleğe alır. Web'de sekmenin açık kalması gerekir. | [Anki SM-2 veya beta FSRS v6](https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm) | Kapalı kaynaklı çekirdek; kendi sunucunuzda barındırmak için belgelenmiş, desteklenen bir yol yok |
| **Mochi** | [Çevrimdışı kullanım ücretsiz; Pro eşitleme aylık $5](https://mochi.cards/#pricing-section) | Kurulu uygulamalar hesap olmadan tamamen çevrimdışı çalışır. Tarayıcı depolama alanı silinebilir. | [Mochi'nin planlayıcısı veya FSRS](https://mochi.cards/docs/reviewing/fsrs/); ikisi de Remembered / Forgot seçeneklerini kullanır | Kapalı kaynaklı çekirdek; herkese açık depolar kendi sunucunuzda çalıştırabileceğiniz uygulamayı değil, entegrasyonları içerir |
| **Mnemosyne** | Ücretsiz | [Yerel masaüstü kullanımı ve Android'de çevrimdışı tekrar](https://mnemosyne-proj.org/download-mnemosyne.php); Android'de düzenleme yapılamaz. Yerel iOS uygulaması yok. | 0–5 arası hatırlama puanlarına göre uyarlanan tekrar planı | Bileşene göre değişen kaynak kodu lisansları; masaüstünde veya grafik arayüzsüz makinede çalıştırabileceğiniz eşitleme sunucusu |
| **Quizlet** | Temel kullanım ücretsiz; [Plus yıllık $35.99, Plus Unlimited yıllık $44.99](https://quizlet.com/upgrade?source=signup) | İndirilen setler iOS ve Android uygulamalarında Flashcards ve Match ile çevrimdışı çalışır. | En az 100 terimli setler için [web'de aralıklı tekrar](https://quizlet.com/features/spaced-repetition); mobil desteği hâlâ yakında gelecek olarak belirtiliyor. Learn ayrı bir uyarlamalı alıştırma modu. | Kapalı kaynaklı barındırılan hizmet; kendi sunucunuzda barındırmak için desteklenen bir yol yok |
| **Brainscape** | [Ücretsiz; Pro yıllık ödemede aylık $7.99](https://www.brainscape.com/pricing) | [Mobil uygulama çevrimdışıyken çalışmayı saklayıp önceden indirilmiş sınıfları daha sonra eşitleyebilir](https://brainscape.zendesk.com/hc/en-us/articles/115002369711-How-do-Brainscape-s-website-mobile-app-interact-with-each-other); belgeler eksiksiz bir yerel kütüphane vadetmiyor. | 1–5 arası puanlanan [Confidence-Based Repetition](https://www.brainscape.com/academy/confidence-based-repetition-definition/) (Güvene Dayalı Tekrar) | Kapalı kaynaklı barındırılan hizmet; kendi sunucunuzda barındırmak için desteklenen bir yol yok |
| **SuperMemo** | Sınırlı ücretsiz hesap; [aylık 35.99 PLN veya yıllık 359 PLN](https://www.supermemo.com/en/premium-subscription) | Mobilde indirilen kurslar çevrimdışı çalışır; düzenleme, yapay zekâ, arama, kayıtlar ve istatistikler çalışmaz. | [SuperMemo'nun kendine özgü, kapalı yöntemine](https://www.supermemo.com/en/supermemo-method) dayanır | Kapalı kaynaklı barındırılan hizmet; kendi sunucunuzda barındırmak için desteklenen bir yol yok |
| **Nibomo** | [Barındırılan temel hizmet beta süresince ücretsiz; yazılımı kendi sunucunuzda barındırmak ücretsiz](/tr/pricing/), altyapı giderleri size ait | Yerel mobil uygulamalar, çevrimiçi oturum açılıp çalışma alanı ilk kez cihaza yüklendikten sonra verileri yerel olarak yazar; uzaktaki medya önceden önbelleğe alınmış olmalıdır. | [FSRS](/docs/architecture/#scheduling) | MIT; desteklenen üretim kurulumu AWS merkezli tam bir uygulama altyapısıdır |

Bu tablolar ürünlere puan vermiyor. Uzun süredir çalıştığınız 30.000 kartınız varsa doğrudan içe aktarma desteği diğer bütün özelliklerden önemli olabilir. Tekrarlarınızı iPhone'da yapıyorsanız yerel iPhone uygulaması kararı belirleyebilir. Kaynak koduna erişim, ancak siz veya güvendiğiniz biri kodun bakımını yapacaksa anlam taşır.

Buradaki her ürünün ücretsiz bir başlangıç seçeneği var. Ancak ücretsiz Anki alternatiflerine geçişin de maliyeti var. Abonelik ücretini hesaplamak kolaydır. Şablonları yeniden oluşturmak, medyayı kontrol etmek ve tekrar geçmişini sıfırdan başlatmak çoğu zaman daha pahalıya mal olur.

## RemNote: kartları bağlantılı notların içine taşıyın

RemNote, kart oluşturma biçiminizi değiştiriyor. Ders notlarının yanında ayrı bir deste tutmak yerine hiyerarşik notlar, bir belge veya PDF üzerinde çalışırken kart oluşturuyorsunuz. Bir not uygulamasıyla bilgi kartı uygulaması arasında içerik kopyalamak en çok zamanınızı alan işe dönüştüyse bu, Anki'den ayrılmak için somut bir neden.

Aktarım yolu kapsamlı, ancak kuyruk konusunda kullanılan ifadeleri dikkatle okumak gerekiyor. RemNote'un [güncel Anki içe aktarma kılavuzu](https://help.remnote.com/en/articles/6751471-importing-from-anki), tekrar planlama bilgileri, deste ön ayarları ve medyayla birlikte bir `.apkg` dışa aktarmanızı söylüyor. Tekrar geçmişini ve temel, boşluk doldurma ve yaygın görsel maskeleme kartları dâhil çoğu not türünü içe aktarıyor.

Aynı kılavuz, yeni aktarılan kartların ayrı bir **Need to Learn** kuyruğuna yönlendirildiğini belirtiyor. Yani RemNote geçmişe erişebiliyor, ancak belgeler Anki'de tekrar zamanı gelmiş kartların kuyruğunun değişmeden yeniden oluşacağını vadetmiyor. Yoğun CSS de kaldırılıyor, özel JavaScript desteklenmiyor, bazı anlık metin seslendirme işlevleri çalışmıyor ve görsel maskeleme içe aktarımı beklenen not ve alan adlarına bağlı.

Koleksiyonunuzu temsil eden bir desteyle deneyin; hem kartları hem de ilk kuyruğu inceleyin. İçe aktarımın düzgün görünmesi testin yalnızca yarısı.

Kurulu masaüstü ve mobil uygulamalar, kurulum ve oturum açma sonrasında çevrimdışı çalışıyor. [Çevrimdışı kullanım kılavuzu](https://help.remnote.com/en/articles/6752029-offline-mode) medya konusunda önemli bir sınır çiziyor: masaüstü uygulaması bilgi tabanındaki tüm görselleri ve PDF'leri saklarken mobil uygulama yalnızca son kullanılan bazı görselleri önbelleğe alıyor. Web uygulaması açık bir sekmede çalışmaya devam edebiliyor, ancak çevrimdışıyken sıfırdan açılamıyor.

Bağlantılı notlar, koleksiyon modelini değiştirmeye değiyorsa RemNote kullanın. Kart şablonları ve eklentiler sisteminizin süsü değil, temeli ise Anki'de kalın.

## Mochi: yerel Markdown ve kendi biçiminde eksiksiz dışa aktarım

Mochi; verilerini cihazında tutmak, Markdown biçiminde kartlar kullanmak ve ekranda daha az ayarla uğraşmak isteyenler için daha sade bir seçenek. Kurulu uygulamaları başlıca masaüstü ve mobil platformların tümünde çalışıyor ve [hesap olmadan tamamen çevrimdışı kullanılabiliyor](https://mochi.cards/docs/getting-started/download-and-install/). Ücretli olan kısım eşitleme: aylık $5.

Doğrudan Anki içe aktarma aracı tekrar geçmişini taşıyor. Bu da Mochi'yi yalnızca metin aktarabilen seçeneklerin hayli önüne koyuyor. Dönüşümün sınırları da alışılmadık ölçüde açık: Mochi, CSS ve JavaScript'i kaldırıyor, HTML'i Markdown'a dönüştürüyor. Kartın anlamı metne ve sıradan eklere dayanıyorsa bu dönüşüm işe yarar. Anlam şablona bağlıysa dikkatli olmak gerekir.

Mochi artık iki tekrar planlayıcısı sunuyor. Kendi algoritması varsayılan olmaya devam ediyor; mevcut Mochi ilerlemesini sıfırlamadan [FSRS etkinleştirilebiliyor](https://mochi.cards/docs/reviewing/fsrs/). FSRS, kart durumunu Mochi'deki tekrar geçmişinden çıkarıyor. FSRS kullanırken bile değerlendirme iki seçenekli kalıyor: Remembered veya Forgot. Bu yüzden Hard ve Easy seçeneklerini ayrı sinyaller olarak kullanan Anki kullanıcılarını farklı bir günlük düzen bekliyor.

Verileri dışarı çıkarma yolu çoğu kapalı kaynaklı uygulamaya göre daha açık. Uygulamanın kendi biçimindeki [`.mochi` dışa aktarımı](https://mochi.cards/docs/import-and-export/exporting/) kartları, şablonları, ekleri, etiketleri, deste yapısını ve tekrar geçmişini içeriyor. Markdown ve CSV'yi başka yerlerde incelemek daha kolay; ancak bunlar tekrar geçmişini ve diğer üst verileri içermiyor.

Mochi'nin herkese açık GitHub depoları çekirdek uygulamayı veya desteklenen bir eşitleme sunucusunu değil, [entegrasyonları ve ilgili araçları](https://github.com/mochi-cards/open-source) içeriyor. Mochi'yi kaynak kodu üzerinde denetim için değil, çevrimdışı kullanım ve taşınabilirlik için seçin.

## Mnemosyne: açık kaynaklı masaüstü yolu

Mnemosyne, geleneksel “program ve yerel veritabanı” yapısına en yakın seçenek. Güncel sürüm Windows, macOS ve Linux'u destekliyor; çevrimdışı tekrar için bir Android istemcisi de var. Özellikler sayfasında zengin içerikli kartlar, hiyerarşik etiketler, eklentiler, 0–5 tekrar ölçeği ve özel kart türleriyle öğrenme verilerini içeren tam Anki aktarımı belgeleniyor.

Büyük bir not sistemine veya bulut hizmetine geçmeden Anki'den ayrılmak istiyorsanız buradaki en doğrudan açık kaynaklı geçiş yolu bu. Ayrıca masaüstünde veya grafik arayüzsüz bir makinede çalışabilen ve birden fazla istemciden öğrenme verilerini birleştirebilen [yerleşik bir eşitleme sunucusu](https://mnemosyne-proj.org/help/syncing) var.

Eksikleri de karara dâhil etmek gerekiyor. Android istemcisinde [kart düzenlenemiyor](https://mnemosyne-proj.org/help/android-client). iOS kullanıcıları başka bir makinede çalışan tarayıcı sunucusu üzerinden tekrar yapmak zorunda. Bu sunucunun resmî özellikler sayfası, hiçbir güvenlik özelliği olmadığı konusunda uyarıyor. Eşitleme sunucusunu kendiniz çalıştırmak; sunucuyu erişilebilir tutmak, ağı yapılandırmak ve veri dizinini yedeklemek anlamına da geliyor.

Lisanslama, tek bir “GPL” etiketinden daha ayrıntılı: [projenin lisans dosyası](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/LICENSE) bileşene göre farklı koşullara yönlendiriyor. [Çekirdek lisansı](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/mnemosyne/LICENSE), adın belirtilmesi/atıf konusunda ek bir hükümle AGPL v3 kullanırken [openSM2sync](https://raw.githubusercontent.com/mnemosyne-proj/mnemosyne/master/openSM2sync/LICENSE) LGPL v3 kullanıyor. Değişiklik yapmak veya yeniden dağıtmak planınızın bir parçasıysa bu dosyaları okuyun.

## Quizlet: koleksiyonu aynen korumak için değil, sınıf için geçiş yapın

Quizlet başka bir ihtiyaca daha iyi yanıt veriyor. Herkese açık çalışma setlerini, öğretmenlerin oluşturduğu sınıfları, paylaşımı, Match, Test, Learn ve grup etkinliklerini bir sınıfa sunmak, özelleştirilmiş bir Anki profilini sunmaktan daha kolay.

Geçişin sınırı düz metin. Quizlet, yapıştırılan satırları terim ve tanımlara dönüştürebiliyor; ancak `.apkg` okuyup not türlerini, şablonları, tekrar planını veya tekrar geçmişini yeniden oluşturmuyor. İçerik oluşturucular [kendi setlerini kopyalanmış metin olarak dışa aktarabiliyor](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets); görseller buna dâhil değil. Başka kullanıcılardan kopyalanan setler dışa aktarılamıyor. Burada taşınabilen şey koleksiyon değil, içerik.

Quizlet'in tekrar planlaması değişiyor. Yeni [Spaced Repetition](https://quizlet.com/features/spaced-repetition) (Aralıklı Tekrar) akışı, en az 100 terimli setlerde web üzerinde otomatik etkinleşiyor ve Repeat (Tekrar), Hard (Zor), Okay (Orta) ve Easy (Kolay) puanlarını kullanıyor. Quizlet, mobil desteğini hâlâ yakında gelecek olarak işaretliyor. Learn, ücretli kullanım sınırları olan ayrı bir uyarlamalı alıştırma yolu olmaya devam ediyor.

Çevrimdışı kullanım da web sitesini değil, mobil uygulamaları kapsıyor. Quizlet son kullanılan sekiz seti otomatik kaydediyor ve daha fazlasını indirmenize izin veriyor; [Flashcards ve Match çevrimdışı çalışıyor](https://help.quizlet.com/hc/en-us/articles/360030565412-Studying-offline-with-Quizlet-mobile-apps). Bağlantı yeniden kurulduğunda ilerleme eşitleniyor.

Amacınız içerik dağıtmak ve sınıf etkinlikleri yürütmekse buraya geçin. Yalnızca bu özellikler için oturmuş kişisel tekrar planınızı yeniden kurmaya çoğunlukla değmez.

## Brainscape: daha az planlama kararı, daha sınırlı aktarım

Brainscape, 1 ile 5 arasında bir güven puanı istiyor ve bu sinyali, zorlandığınız kartları daha erken geri getirmek için kullanıyor. Formülün tamamı yayımlanmıyor; ancak bu kullanım biçimini bir sınıfa öğretmek kolay.

CSV, TXT, XLSX ve ODS dosyalarını kabul ediyor. Bu, ön ve arka yüzden oluşan kartlar için kullanışlı. Ancak şablonların, eklentilerin, medya kurallarının ve Anki öğrenme verilerinin geride kalması anlamına geliyor. Kişisel yedeğinizi dışa aktarmak için Pro gerekiyor. Dışa aktarılan dosyalar bir elektronik tablo uygulamasında açılabiliyor ve daha sonra yeniden içe aktarılabiliyor.

Brainscape'in güncel yardım merkezi, web sitesiyle mobil uygulamaların artık içerik bulma, oluşturma, paylaşma ve çalışma için aynı temel özellikleri sunduğunu söylüyor. Çevrimdışı mobil kullanımı, elle yeniden eşitlemeyi ve cihaza önceden indirilmiş sınıfların güncellenmesini de açıklıyor. Bu, yeniden bağlanınca devam etmek için uygulanabilir bir yol sunuyor; ancak hesabınızın tamamının eksiksiz bir yerel kütüphane olacağını vadetmiyor.

Kişisel desteleri dışa aktarma hâlâ bir [Pro özelliği](https://brainscape.zendesk.com/hc/en-us/articles/115002383872-How-can-I-export-a-backup-of-my-flashcards). Resmî bir kaynak kodu yayını veya kendi sunucunuzda barındırma yolu yok.

Ders çalışacak kişiler Anki'de çok fazla ayarla uğraşmak zorunda kalıyorsa Brainscape değerlendirmeye değer. Bu ayarları zaten iyi kullanan biri içinse iyi bir çıkış yolu değil.

## SuperMemo: yöntemi seçin, yeni bir başlangıcı kabul edin

Güncel SuperMemo.com hizmeti, SuperMemo'nun kendine özgü kapalı tekrar planlama yöntemi etrafında kurulmuş; web, iOS ve Android'de çalışan bir dil öğrenme platformu. Uzun süredir SuperMemo kullananların tanıyabileceği eski Windows ürününden ayrı.

Burada karar, sorunsuz bir Anki aktarımından çok yöntem ve katalogla ilgili. SuperMemo, her içe aktarımda 100 kart sınırıyla [ayraçlarla ayrılmış soru-cevap satırlarını yapıştırarak toplu kart oluşturmayı](https://www.supermemo.com/en/blog/how-to-create-flashcards-for-learning) destekliyor. Barındırılan hizmet için güncel, resmî bir `.apkg` içe aktarma aracı veya kullanıcının verilerini dışa aktarabileceği bir yol bulamadım. Bu nedenle şablonlar, eklentiler, medya yapısı ve tekrar geçmişi belgelenen bu yoldan taşınmıyor.

İndirilen kurslar mobil uygulamalarda çevrimdışı çalışılabiliyor. [Çevrimdışı kullanım kılavuzu](https://www.supermemo.com/en/faq/can-i-use-supermemo-offline); yapay zekâ özelliklerini, MemoCards eklemeyi, aramayı, kayıtları, istatistikleri ve kurs düzenleyicisini kapsam dışında bırakıyor. Bu yüzden bağlantıyı kesmeden önce materyali hazırlayın ve eşitleyin.

SuperMemo'yu, kendi yöntemini veya kurs kataloğunu yeni bir tekrar planına başlamaya değecek kadar istiyorsanız seçin. Önceliğiniz mevcut planınızı korumaksa yanlış sorunu çözüyor.

## Nibomo: tüm katmanlarda kaynak koduna erişim, ama en zayıf Anki aktarımı

Nibomo, sistemin pek çok katmanını kendi denetiminize almanıza imkân veriyor. [MIT lisanslı depo](https://github.com/kirill-markin/flashcards-open-source-app); web uygulamasını, iOS ve Android istemcilerini, arka ucu, çevrimdışı eşitlemeyi, altyapıyı, [herkese açık API'yi](/docs/api/) ve [MCP sunucusunu](/docs/mcp-connector/) içeriyor. Tekrarlarda [FSRS](/docs/architecture/#scheduling) kullanılıyor. Web, iOS ve Android istemcileri verileri önce cihazda kaydediyor, değişiklikleri bir gönderim kuyruğuna ekliyor ve bağlantı yeniden kurulduğunda eşitliyor.

Bu, Anki ile uyumlu olduğu anlamına gelmiyor. Nibomo, `.apkg` veya `.colpkg` okuyamıyor. Desteklenen [Anki TXT aktarımı](/blog/migrate-from-anki-txt-export-open-source-flashcards/), ağırlıklı olarak metin içeren kartlar için sonuçları kontrol edilen, yapay zekâ destekli bir taslak oluşturma iş akışı. Şablonları, eklentileri, deste hiyerarşisini, tekrar tarihlerini, aralıkları veya tekrar kayıtlarını korumuyor. TXT dosyasındaki medya referansları medya dosyası değildir. Bu yüzden yoğun medya içeren destelerin ayrıca yeniden kurulması ve doğrulanması gerekiyor.

Nibomo'nun kendi `flashcards.zip` paketi de bir yedekten daha dar kapsamlı. Nibomo çalışma alanları arasında kartları, etiketleri ve ilgili medyayı taşıyor. Tekrar geçmişini, FSRS durumunu, tam deste yapılarını, çalışma alanı ayarlarını veya hesapları taşımıyor.

Barındırılan temel hizmet [beta süresince ücretsiz](/tr/pricing/). Üretim sistemini kendi altyapınızda çalıştırmak tek komutluk bir Docker kurulumu değil: [kendi sunucunuzda barındırma kılavuzu](/docs/self-hosting/) AWS CDK kullanıyor ve AWS hizmetlerinin yanında Cloudflare, Resend, Sentry, gizli bilgiler, veritabanı geçişleri, yedekleme, geri yükleme ve sürüm yükseltmeleri gerektiriyor. Docker Compose geliştirme için sunulan yol; desteklenen üretim kurulumu değil.

Geçiş nedeniniz kaynak kodunun tamamına erişmek ve arka ucu kendiniz yönetmekse, kartlarınız da güvenle yeniden oluşturulabilecek kadar basitse Nibomo kullanın. Küçük, geçici bir deste denemek için [barındırılan uygulamayı açın](https://app.nibomo.com/). Öğrenme durumunun aslına uygun korunması öncelikliyse Anki'de kalın veya RemNote, Mochi ya da Mnemosyne'yi deneyin.

## iOS için Anki alternatifi seçerken aktarım sürprizlerinden nasıl kaçınırsınız?

“iOS için Anki alternatifi” iki farklı anlama gelebilir: yerel bir iPhone uygulaması veya [tek seferlik $24.99 ödemeyle alınan AnkiMobile'ın](https://apps.apple.com/us/app/ankimobile-flashcards/id373493387) yerine geçecek bir seçenek.

RemNote, Mochi, Quizlet, Brainscape, SuperMemo ve Nibomo'nun iOS uygulamaları var. Mnemosyne'nin yok. Ama aktarım sorusu hâlâ ortada:

- **Mochi**, yalnızca metin aktaran iOS seçeneklerinden daha fazlasını koruyor: Markdown dönüşümü ve iki seçenekli değerlendirmeyle birlikte `.apkg` tekrar geçmişini içe aktarıyor.
- **RemNote** da `.apkg` tekrar geçmişini içe aktarıyor; ancak bugünkü Anki planının korunacağını varsaymak yerine **Need to Learn** kuyruğunu test edin.
- **Quizlet**, sınıfa içerik dağıtmak için uygun; ancak Anki'den yalnızca metin aktarabiliyor ve yeni aralıklı tekrar akışı henüz mobilde yok.
- **Nibomo**, kaynak koduna erişebileceğiniz ve yerel iOS istemcisi olan bir seçenek; ancak Anki'den aktarım öğrenme durumunu sıfırlıyor.
- **Brainscape** ve **SuperMemo**, ancak tekrar yöntemleri kartları ve tekrar planını yeniden kurmaya değiyorsa anlamlı.

Fiyat yüzünden AnkiMobile'dan ayrılmadan önce tek seferlik ücreti, abonelik maliyeti ve aktarımı düzeltmek için gereken saatlerle karşılaştırın. Bir defalık uygulama satın alımı, oturmuş bir koleksiyonu saatlerce elle düzeltmenizi gerektiren ücretsiz uygulamadan daha ucuza gelebilir.

## Anki'de kalmak ne zaman daha güvenli?

Kalmak da bir karardır; daha yeni bir şey seçememek değildir. Şunlardan herhangi biri geçerliyse Anki'de kalın:

- koleksiyonunuz özel şablonlara, CSS'e, JavaScript'e veya eklentilere bağlıysa;
- görsel maskeleme (Image Occlusion), ses veya başka medya içeriğin temel anlamını taşıyorsa;
- bir not, birbirine bağlı kalması gereken farklı yönlerde birkaç kart üretiyorsa;
- yılların tekrar geçmişi ve mevcut tekrar tarihleri yeni bir düzenleyiciden daha değerliyse;
- alternatifin karşılamadığı bir masaüstü iş akışına veya birden fazla platformun birlikte kullanımına ihtiyaç duyuyorsanız;
- yeni uygulamanın çevrimdışı modu yalnızca kullanmayacağınız bir ortamda çalışıyorsa;
- teoride kendi sunucunuzda barındırmak istiyor, ama bir sunucuyu işletmek, güvenliğini sağlamak, yedeklemek ve güncellemek istemiyorsanız;
- alternatif, daha sade görünmek dışında sürekli yaşadığınız bir sorunu çözmüyorsa.

Anki hâlâ olgun bir eklenti ekosistemi, esnek not ve kart şablonları, FSRS ve eski planlayıcıya ait kontroller, cihazda çalışan istemciler ve koleksiyonu taşıyabilen paket biçimleri sunuyor. Yukarıdaki ürünlerin hiçbiri bunların tamamını karşılamıyor.

Sahiplik ve denetim sınırlarını daha dar bir çerçevede karşılaştırmak için [açık kaynaklı bilgi kartı uygulamaları rehberini](/blog/best-open-source-flashcard-apps-2026/) okuyun. Belirleyici etken çevrimdışı kullanım ise [çevrimdışı bilgi kartı uygulamaları karşılaştırması](/blog/best-offline-flashcards-app/), kurulu uygulamaları, önbelleğe alınmış içeriği ve tarayıcı sekmelerini ayrı ayrı ele alıyor.

## Sonunda hâlâ “hayır” diyebileceğiniz bir geçiş kontrol listesi

Tüm koleksiyonunuzla başlamayın. Başarısız çıkarsa geçişten vazgeçebileceğiniz bir test hazırlayın.

1. **Bir kurtarma paketi oluşturun.** Medyayla birlikte bir `.colpkg` dışa aktarın, Anki profilinin dışında saklayın ve başka bir yerde ikinci kopyasını tutun.
2. **Zorlu desteyi seçin.** Boşluk doldurma kartları, özel alanlar, ileri ve ters yönlü kartlar, iç içe desteler, etiketler, görseller, sesler ve planın nasıl dönüştürüldüğünü gösterecek kadar tekrar geçmişi ekleyin.
3. **Hedefin gerçekten desteklediği biçimde dışa aktarın.** Doğrudan içe aktarma için tekrar planlama bilgileri, ön ayarlar ve medya içeren `.apkg` kullanın. Notes in Plain Text (Düz Metin Olarak Notlar) seçeneğini yalnızca içeriği yeniden oluşturmayı kabul ediyorsanız kullanın.
4. **Başlangıç durumunu kaydedin.** Not ve kart sayılarını, etiket ve deste adlarını, medya sayısını, birkaç tekrar tarihini ve aralığını, her not türünden üretilmesi beklenen kart sayısını not edin.
5. **Geçici bir alana içe aktarın.** Kaynak profilin üzerine yazmayın veya ilk testi hedefteki kalıcı kütüphanenizle birleştirmeyin.
6. **İçeriği ve öğrenme durumunu ayrı ayrı inceleyin.** Ön ve arka yüzün doğru olması; boşluk doldurma kartlarının, medyanın, aynı nottan üretilen kardeş kartların, tekrar geçmişinin veya bir sonraki tekrar tarihinin korunduğunu kanıtlamaz.
7. **Gerçekte kullanacağınız her cihazda uygulamayı çevrimdışı olarak sıfırdan açın.** Tekrar ve düzenleme yapın, uygulamayı tamamen kapatın, bağlantı olmadan yeniden açın, ardından tekrar bağlanıp başka bir cihazı kontrol edin.
8. **Kuyruklar farklılaşmadan önce onları gözlemleyin.** Asıl koleksiyonunuzdaki aynı kartları her iki uygulamada da puanlamadan önce tekrar sırası gelen ilk kart grubunu ve birkaç örnek tekrar aralığını karşılaştırın. Diğer uygulamadaki ilk tekrardan sonra iki plan birbirinden bağımsızdır.
9. **Kararınızı kesinleştirmeden önce çıkış yolunu test edin.** Hedef uygulamadan dışa aktarın ve gelecek yıl ayrılırsanız neleri geri alabileceğinizi inceleyin.
10. **Anki'yi ve dokunulmamış yedeği saklayın.** Yeni uygulama günlük kullanımda kendini kanıtlayana ve her kaybı bilinçli olarak kabul edene kadar ikisini de silmeyin.

Hedef yalnızca metin kabul ediyorsa [güvenli TXT dışa aktarma iş akışının](/blog/migrate-from-anki-txt-export-open-source-flashcards/) tamamını izleyin. Bu iş akışı, kurtarma amaçlı `.colpkg` ile taşınabilir çalışma dosyasını ayırır ve öğrenme durumunun sıfırlanacağını açıkça ortaya koyar.

## Kararı bu sırayla verin

Kaybetmeyi göze alamayacağınız parçadan başlayın:

1. Şablonların birebir korunması, eklentiler veya mevcut kuyruk vazgeçilmezse koleksiyonunuzu temsil eden bir `.apkg` testi aksini kanıtlayana kadar Anki'de kalın.
2. Notlarla kartların tek bir sistem hâline gelmesini istiyorsanız RemNote'u deneyin. Yalnızca aktarılan sayfaları değil, **Need to Learn** kuyruğunu da kontrol edin.
3. Yerel Markdown ve içeriğini inceleyebileceğiniz dışa aktarımlar, kartların Anki'deki gibi görünmesinden daha önemliyse Mochi'yi deneyin.
4. Doğrudan Anki aktarımı sunan, belirli bir işe odaklanmış açık kaynaklı bir masaüstü uygulaması istiyorsanız Mnemosyne'yi deneyin ve mobil sınırlamalarının günlük düzeninize uyduğunu doğrulayın.
5. Asıl sorun sınıfa içerik dağıtmak veya birlikte çalışırken daha basit bir tekrar düzeni kurmaksa Quizlet ya da Brainscape'te küçük bir seti yeniden oluşturun.
6. Özellikle SuperMemo'nun yöntemini istiyorsanız yeni bir tekrar planını kabul edin. Özellikle tüm uygulama katmanlarının kaynak kodunu, kendi sunucunuzda barındırmayı, API ve MCP erişimini istiyorsanız Nibomo'da içeriği kayıplarla yeniden oluşturmayı ve sistemi işletme işini kabul edin.

Birbirinden oldukça farklı üç modeli özellik özellik karşılaştırmak için [Anki, Quizlet ve Nibomo karşılaştırmasına](/blog/anki-vs-quizlet-vs-open-source-flashcards-app/) bakın.

İşe yarayan kural basit: kazanım somutsa ve kayıpları gerçek bir testte görüp kabul ettiyseniz geçiş yapın. Koleksiyonunuzu temsil eden deste sorunsuz taşınamıyorsa Anki'de kalmak temkinli bir yedek plan değildir. Karşılaştırmanın sonucudur.
