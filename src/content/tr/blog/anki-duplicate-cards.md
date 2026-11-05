---
title: "Anki'de yinelenen kartları bulma ve ayıklama"
description: "Anki'de yinelenen kartların kaynağını bulun, eşleşen notları karşılaştırın ve hangi kopyayı tutacağınızı seçin. Örnek tabloyla tekrar geçmişini kontrol edin."
date: "2026-10-04"
image: "/blog/anki-duplicate-cards.png"
keywords:
  - "Anki yinelenen kartlar"
  - "Anki yinelenen kartları bulma"
  - "Anki yinelenen notları silme"
  - "Anki kopya notlar"
  - "Anki tekrar geçmişi"
---

Karşınıza tanıdık bir soru çıkıyor. Daha önce çalıştığınız hâlde Anki onu yeni bir kart olarak gösteriyor. İçe aktarma sırasında bir kopya gelmiş olabilir. Karşınızdaki, aynı nottan üretilen ikinci bir soru da olabilir. Ayrımı bilmek önemli. **Browse** (Göz At) penceresinde bir satırı silmek, tutmak istediğiniz kart da dâhil olmak üzere o nota ait tüm kartları silebilir.

**Anki'de yinelenen kartları** ayıklamadan önce aynı sorunun neden karşınıza çıktığını belirleyin. Kartlar ayrı notlardan geliyorsa **Notes → Find Duplicates** (Notlar → Yinelenenleri Bul) ile olası kopyaları bulun. Her grupta notların içeriğini ve kartların tekrar geçmişini karşılaştırıp hangi kopyayı tutacağınıza karar verin. Eşleşen alan, incelemeye nereden başlayacağınızı gösterir.

Bu masaüstü adımları, 4 Ekim 2026'da kontrol edilen Anki belgelerine ve yayımlanan sürümün kaynak koduna dayanıyor. Aşağıdaki kurgusal alıştırma, beklenen sonuçları gösteriyor.

![Bir satranç kulübü üyesi, fazladan bir açık renkli kaleyi ahşap satranç tahtasındaki iki yıpranmış kaleyle karşılaştırıyor](/blog/anki-duplicate-cards.png)

## Önce neyin tekrarlandığını bulun

Bir not, **Front** (Ön) ve **Back** (Arka) gibi alanlar içerir. Anki bu alanları kullanarak şablonlara göre kart üretir. Örneğin tek bir kelime notundan iki kart çıkabilir. Biri kelimeyi gösterip anlamını sorar, diğeri anlamını verip kelimeyi hatırlamanızı ister. Aynı nottan gelen bu kartlara kardeş kart denir. Her birinin kendi tekrar planı vardır. [Anki kılavuzunda notlar ve alanlar](https://docs.ankiweb.net/manual/getting-started#notes-%26-fields)

**Browse** penceresinde **Cards** (Kartlar) moduna geçin. Şüphelendiğiniz her satır için **Cards → Info** (Kartlar → Bilgi) ekranını açıp not kimliklerini karşılaştırın. Kimlikler aynıysa kartlar aynı nota aittir. Farklıysa kartlar ayrı notlardan gelir. Bir notun kartlarını hangi destede olurlarsa olsunlar görmek için `nid:123` aramasında `123` yerine notun gerçek kimliğini yazın. [Anki'de kimlikle arama](https://docs.ankiweb.net/searching.html#object-ids)

| Ne görüyorsunuz? | Olası açıklama | Sonraki adım |
| --- | --- | --- |
| Aynı not, ters yönlerde sorular | Bilerek oluşturulmuş kardeş kartlar | İki sorunun da işinize yarayıp yaramadığını kontrol edin |
| Aynı not, önizlemede birebir aynı sorular | Kart şablonları yinelenmiş olabilir | Şablonları ve kart önizlemelerini karşılaştırın |
| Farklı notlar, aynı görünen sorular | Yinelenmiş olabilecek notlar | Hangisini tutacağınıza karar vermeden önce notları bütünüyle karşılaştırın |

İki yönde soru soran kardeş kartların nasıl çalıştığını ters yönlü kartlar rehberi açıklıyor. [Anki'de ters yönlü kartlar (İngilizce)](/blog/anki-reverse-cards/)

Yalnızca bir yöndeki tekrarları duraklatmak istiyorsanız o kartı askıya alın. Böylece kart koleksiyonda kalır. [Anki'de kartları askıya alma (İngilizce)](/blog/anki-bury-vs-suspend/)

Şablonlar aynıysa Anki'nin yönergelerini izleyin. Bir şablonu kaldırmak, başka destelerdekiler de dâhil olmak üzere o not türünü kullanan her notu etkiler. Tek bir yinelenen soruyu temizlerken şablon değişikliğini ayrı bir işlem olarak ele alın. [Anki'nin fazladan kart kopyalarını inceleme yönergeleri](https://faqs.ankiweb.net/extra-copies-of-a-card-are-coming-up.html)

## Yinelenen notları nerede arayacağınızı belirleyin

**Notes → Find Duplicates** penceresini açıp karşılaştıracağınız alanı seçin. Bu alan örneğin **Front** olabilir. Anki varsayılan olarak o alanı içeren tüm not türlerinde arar. Aramayı sınırlamak için **Optional filter** (İsteğe bağlı filtre) alanını kullanıp **Search** (Ara) düğmesine tıklayın. [Anki kılavuzunda yinelenenleri bulma](https://docs.ankiweb.net/browsing.html#finding-duplicates)

Adı `Cleanup practice` olan bir deste için şu aramayı girin.

```text
deck:"Cleanup practice"
```

Deste aramaları alt desteleri de kapsar. Tek bir destede sonuç çıkmasa bile başka destelerde kopya bulunabilir. Bu ihtimali kontrol etmek için filtreyi kaldırıp koleksiyonun tamamında arayın. [Anki'de deste arama sözdizimi](https://docs.ankiweb.net/searching.html#tags-decks-cards-and-notes)

Bir sonuç grubuna tıklayıp içindeki notları inceleyin. **Tag Duplicates** (Yinelenenleri Etiketle), tutacağınız not da dâhil olmak üzere eşleşen her nota `duplicate` etiketini ekler. **`tag:duplicate` aramasını olası kopyaları toplamak için kullanın.** Sonuçlardan yalnızca silmek istediğiniz notları tek tek seçin. [Anki'nin yayımlanan sürümündeki etiketleme kodu](https://github.com/ankitects/anki/blob/26.09.3/qt/aqt/browser/find_duplicates.py)

Arama yalnızca seçtiğiniz alanın içeriğini karşılaştırır. Aynı bilgiyi farklı biçimde soran kartları elle aramanız gerekebilir. Birebir aynı sorular da farklı dillere veya derslere ait olabilir.

## Üç örneği kâğıt üzerinde çözün

`Cleanup practice` destesinde altı not olduğunu ve alt deste bulunmadığını düşünün. A ve B, **Basic (and reversed card)** türünün değiştirilmemiş şablonlarını kullanıyor. Her nottan iki kart çıkıyor. C–F arasındaki notlar **Basic** türünde ve her biri bir kart üretiyor. Sekiz kartın tamamı bu destede. Örnekte notları harflerle göstereceğiz. Anki'de not ve kart kimlikleri sayıyla gösterilir.

| Notlar | Ön → Arka | Örnekteki çalışma durumu | Karar |
| --- | --- | --- | --- |
| A ve B | `le vélo` → `bicycle` | A'nın anlamı soran kartıyla 12, kelimeyi soran kartıyla 3 tekrar yapılmış. B'nin iki kartı da yeni | A'yı tutun. Silmek için ilk aday B |
| C ve D | `Chemical symbol for silver?` → `Ag` | C kartıyla 20, D kartıyla 6 tekrar yapılmış | İki kartın geçmişini karşılaştırıp hangisiyle devam edeceğinizi seçin |
| E ve F | E notu `bank` → `financial institution`, F notu `bank` → `side of a river` | Sözcük iki farklı anlamda kullanılıyor | İkisini de tutun. Sorulara bağlam ekleyin |

**Front** alanına göre arama, üç çifti de eşleşme olarak gösterebilir. Karar yalnızca ilk çiftte kolay görünüyor. B'yi fazladan bir kopya saymadan önce **her alanı**, medya dosyalarını, etiketleri ve not türünü karşılaştırın. Kart önizlemelerinde her notun hangi yönde soru sorduğuna da bakın. B'de, A'da bulunmayan bir telaffuz kaydı veya soru olabilir.

İşe yarayan içerik aynı öğrenme amacına hizmet ediyorsa onu tutacağınız nota kopyalayıp sonucu önizlemede kontrol edin. İşe yarayan kaynak etiketlerini de koruyun. Ölçtüğünüz bilgi değişiyorsa yeni bir soru oluşturun. Böylece önceki tekrarlar ait oldukları sorunun geçmişinde kalır.

C ve D'yi karşılaştırırken tekrar sayısını bir ipucu olarak görün. İki kartın da hangi günlerde tekrar edildiğine, tekrarları nasıl değerlendirdiğinize, güncel tekrar aralığına ve bir sonraki tekrar bilgisine bakın. Daha sık tekrar ettiğiniz bir kartı daha sık yeniden öğrenmeniz gerekmiş olabilir. Önce soru ve yanıtın işinize yaradığını kontrol edin. Sonra hangi kartın geçmişiyle devam edeceğinizi seçin. Yanıtlar çelişiyorsa doğru bilgiyi tekrar sayısıyla belirleyemezsiniz. Önce çalıştığınız kaynağa dönün.

**Her kartın tekrar geçmişi ayrıdır.** C'yi tutup D'yi sildiğinizde C kendi öğrenme durumunu korur. **Card Info** (Kart Bilgisi) yalnızca o kartın geçmişini gösterir. Silinen notların tekrar kayıtları koleksiyon genelindeki istatistiklerde kalır. Deste istatistiklerinden çıkar ve tuttuğunuz karta aktarılmaz. [Kart bilgisi](https://docs.ankiweb.net/stats.html#card-info), [silinen notların istatistikleri](https://docs.ankiweb.net/stats.html#more)

Karar veremiyorsanız silmeyi erteleyin. Neyi kontrol etmeniz gerektiğini bir yere yazın. Gerekirse araştırırken istemediğiniz soruları askıya alın.

## Bir kopyayı silin ve sonucu kayıtlarınızla karşılaştırın

Kendi koleksiyonunuzdan bir not silmeden önce diğer cihazlarınızda bekleyen değişiklikleri senkronize edin. Ardından bu değişiklikleri almak için masaüstü uygulamasını da senkronize edin. [Anki senkronizasyon kılavuzu](https://docs.ankiweb.net/syncing.html)

**File → Export** (Dosya → Dışa Aktar) menüsünden **Anki Collection Package (`.colpkg`)** biçimini seçin. **Include Media** (Medyayı dâhil et) seçeneğini açıp yedeği kaydedin. Paket, tekrar geçmişiyle birlikte tüm desteleri ve tekrar planlarını içerir. Dosyayı güvenli bir yerde saklayın. Paketi içe aktardığınızda yedek koleksiyon, açık profildeki mevcut kartların yerini alır. [Koleksiyonu dışa aktarma belgeleri](https://docs.ankiweb.net/exporting.html#collection-colpkg)

Silme işlemini denemek isterseniz **File → Switch Profile** (Dosya → Profil Değiştir) menüsünden ayrı bir profil oluşturup yedeği oraya aktarın. Deneme profilini AnkiWeb'e bağlamayın. Her profilin kendi koleksiyonu vardır. İki profili aynı hesaba bağlarsanız koleksiyonlardan biri diğerinin üzerine yazılabilir. [Anki profil belgeleri](https://docs.ankiweb.net/profiles.html), [APKG ile COLPKG arasındaki farklar (İngilizce)](/blog/anki-apkg-vs-colpkg/)

Örnekte A'nın anlamı soran kartına A1, kelimeyi soran kartına A2 diyelim. B'deki karşılıkları da B1 ve B2 olsun. **Cards → Info** ekranından A'nın iki kartının gerçek kimliklerini, bir sonraki tekrar bilgilerini, tekrar aralıklarını ve sonradan tanıyabileceğiniz geçmiş kayıtlarını not edin. B'nin not kimliğini de kaydedin. Silme öncesi ve sonrası bilgileri aynı oturumda karşılaştırın. Bu sırada iki kopyada da tekrar yapmayın ve kartların tekrar planına dokunmayın.

Yinelenen Anki notlarını tek tek silmek için şu adımları izleyin.

1. **Browse** penceresinde B'nin gerçek not kimliğiyle `nid:` araması yapın. **Cards** modunda her sonucu inceleyip iki yönün de önizlemesine bakın. Kendi koleksiyonunuzda başka destelerdeki kardeş kartları da görebilmek için bu aramaya deste filtresi eklemeyin.
2. **Notes** (Notlar) moduna geçin. Tek sonucun silmek istediğiniz B notu olduğunu doğrulayın. Yalnızca o notu seçip **Notes → Delete** (Notlar → Sil) seçeneğini kullanın. **Delete** komutu, **Cards** modunda tek bir kart satırında kullanılsa bile seçilen notu ve ona ait tüm kartları siler. [Anki kılavuzunda not silme](https://docs.ankiweb.net/browsing.html#notes)
3. B'nin not kimliğiyle yeniden arama yapıp sonuç çıkmadığını doğrulayın. A'nın kart kimliklerini `cid:` sonrasına virgülle ayırarak yazın. İki kartın da **Info** ekranındaki bilgileri kayıtlarınızla karşılaştırın.
4. `deck:"Cleanup practice"` aramasını yapıp **Notes** ve **Cards** modlarındaki satır sayılarını karşılaştırın. Kalan notları aşağıdaki tabloyla kontrol edin.

Yalnızca B'yi sildiğinizde beklenen sonuçlar şöyle.

| Kontrol | Önce | Sonra ne görmelisiniz? |
| --- | --- | --- |
| Örnek destenin tamamı | 6 not / 8 kart | 5 not / 6 kart |
| Bisiklet kartları | A1, A2, B1, B2 | Yalnızca A1 ve A2 |
| A'nın kart kimlikleri, bir sonraki tekrar bilgileri, tekrar aralıkları ve geçmişi | Kaydettiğiniz değerler | Aynı kartlar, aynı tekrar planı ve aynı geçmiş kayıtları |
| B'nin not kimliğiyle arama | B'nin iki kartı | Sonuç yok |
| Gümüş ve `bank` notları | C, D, E, F | Aynı dört not |

Bu örnekte bir notu silince iki kart da siliniyor. Yanlışlıkla A'yı silerseniz daha önce çalıştığınız kartları kaybedersiniz ama sayılar yine aynı çıkar. Bu yüzden sayılarla birlikte kimlikleri de kontrol edin. Temizlik sırasında tuttuğunuz kartı sıfırlamayın ve tekrar planını değiştirmeyin.

Silinen kartlarla yapılan tekrarlar koleksiyonun genel tekrar grafiğinde görünmeye devam edebilir. İlerlemenin korunduğunu, kalan kartın kimliğinden ve **Info** ekranındaki geçmişinden doğrulayın.

Sonuç kayıtlarınızla eşleştiğinde bir sonraki gruba geçip o grupta hangi kopyayı tutacağınıza karar verin. İşlemi deneme profilinde yaptıysanız doğruladığınız adımları önce asıl profilinizde uygulayın. Koleksiyonu kontrol ettikten sonra masaüstü uygulamasını senkronize edin. Diğer cihazlarda çalışmaya başlamadan önce onları da senkronize edin.

Kopyalar içe aktarma sırasında oluştuysa bir sonraki aktarmadan önce CSV ile mevcut notları nasıl güncelleyeceğinize bakın. [CSV ile mevcut Anki notlarını güncelleme (İngilizce)](/blog/anki-csv-update-existing-notes/)

Bir bilgiyi birkaç konu altında bulmak için notları kopyaladıysanız aynı nota birden çok etiket ekleyebilirsiniz. Böylece her konudan o nota ulaşır ve tek bir tekrar geçmişiyle çalışırsınız. [Anki'de etiketler ve desteler (İngilizce)](/blog/anki-tags-vs-decks/)
