---
title: "Excel, Google E-Tablolar veya metinden Quizlet'e bilgi kartı aktarma"
description: "İki sütunlu kelime listenizi Quizlet'e aktarın. Sekme ve yeni satır ayarlarını seçin; bölünen tanımları, fazla kartları ve CSV sorunlarını yayımlamadan önce düzeltin."
date: "2026-09-15"
image: "/blog/how-to-import-flashcards-into-quizlet.png"
keywords:
  - "Quizlet bilgi kartı içe aktarma"
  - "Quizlet içe aktarma biçimi"
  - "Excel'den Quizlet'e aktarma"
  - "Google E-Tablolar'dan Quizlet'e aktarma"
  - "Quizlet sekmeyle ayrılmış veri aktarma"
---

“Red, green, blue” sıradan bir bilgi kartı yanıtı gibi görünüyor. Ancak terimle tanımı ayırmak için virgül kullanırsanız, aynı virgüller satırın nasıl bölüneceğini belirsiz hâle getirir. Birkaç noktalama işareti, hazırladığınız kelime listesini yeniden düzenlemenizi gerektirebilir.

Excel, Google E-Tablolar veya metinden Quizlet'e bilgi kartı aktarmak için iki sütunla başlayın: biri terimler, diğeri tanımlar için. Verileri kopyalayın, web sitesindeki içe aktarma formuna yapıştırın ve alanlar arasında sekme, kartlar arasında yeni satır seçin. Tüm listeye geçmeden önce her çifti inceleyebilmek için ilk denemeyi dört satırla yapın.

![Bir çömlekçi, seramik fincanları rafa taşımadan önce eşleşen tabaklarıyla ayrı sıralarda bir araya getiriyor](/blog/how-to-import-flashcards-into-quizlet.png)

## Quizlet'in içe aktarma formu nerede?

Quizlet'in web sitesindeki açıklamalara göre içe aktarırken alanlar arasında virgül, sekme veya kısa çizgi; kartlar arasında ise noktalı virgül veya yeni satır kullanılabiliyor. [Resmî içe aktarma yönergeleri](https://help.quizlet.com/hc/en-us/articles/360029977151-Creating-sets-by-importing-content) şu sırayı veriyor:

1. Oturum açın ve **Create → Flashcard set** (Oluştur → Bilgi kartı seti) seçeneğini seçin.
2. Bir başlık girin, **Import** (İçe aktar) seçeneğini seçin ve metninizi yapıştırın.
3. Ayırıcı ayarlarını verinizle eşleştirin. Buradaki örnekler için **Tab** (Sekme) ve **New line** (Yeni satır) kullanın.
4. **Import** (İçe aktar) seçeneğini seçin, ardından terimlerin ve tanımların dillerini belirleyin.
5. Seti kaydedip yayımlamak için **Create** (Oluştur) seçeneğine basmadan önce kartları gözden geçirin.

Yönergeler 15 Eylül 2026'da kontrol edildi. Aşağıdaki örnekler metni nasıl hazırlayıp inceleyeceğinizi açıklıyor; oturum açılarak yapılmış bir testi anlatmıyor.

## Küçük bir hücre aralığıyla başlayın

Excel veya Google E-Tablolar'da her satıra bir terim-tanım çifti koyun. Dört kartlık bir deneme şöyle görünebilir:

| Terim | Tanım |
| --- | --- |
| rojo | red |
| azul | blue |
| verde | green |
| colores primarios de la luz | red, green, blue |

İki sütundaki yalnızca dört veri satırını kopyalayın. Sütun başlıkları 1. satırdaysa **A2:B5** aralığını seçin. Başlıkları kopyaladığınız aralığın dışında bırakın.

Sonuçta İspanyolca terimlerden ve İngilizce tanımlardan oluşan dört kart görmelisiniz. Son kartın bir yüzünde “colores primarios de la luz”, diğer yüzünde “red, green, blue” bütün olarak kalmalı. Virgüller yanıtın bir parçası.

Bu örneği anladıktan sonra kendi tablonuzu hazırlayın. Karşılaştırma için aslı elinizde kalsın diye bir kopya üzerinde çalışın. Boş satırları kaldırın; notları veya fazladan sütunları seçime dâhil etmeyin. Kopyalamadan önce eksik terimleri veya tanımları tamamlayın.

Sıralama yaparken iki sütunu birlikte tutun. Yalnızca terimleri sıralamak, onları yanıtlarından ayırır. Böyle bir durumda içe aktarılan kart sayısı doğru olsa bile eşleşmeler yanlış olabilir.

## Düz metin biçimi gerçek sekme karakterleri kullanır

Aynı dört satır, sekmeyle ayrılmış metin olarak aşağıdaki gibi görünür. Terimle tanım arasındaki her boşlukta gerçek bir sekme karakteri vardır:

```text
rojo	red
azul	blue
verde	green
colores primarios de la luz	red, green, blue
```

Sekme, belirli bir karakterdir. Birkaç boşluk karakteri benzer görünebilir, ancak sekme ayırıcısı oluşturmaz. `\t` karakterlerini yazmak da sekme eklemez. Metin düzenleyicinizde bunu yapmak zorsa çiftleri bir tabloda iki sütuna yerleştirin ve bu hücreleri kopyalayın.

Her kart metinde tek bir satırda yer almalı. Pencere dar olduğu için uzun bir tanım ekranda ikinci satıra taşabilir; bu, içeriğe satır sonu karakteri eklemez. Oysa bir tablo hücresinin içine eklenen satır sonu karakteri içeriğin parçasıdır. Kartları ayırmak için yeni satır kullanmadan önce hücre içindeki bu satır sonlarını kaldırın.

Terimlerin veya tanımların içindeki sekmeleri de kaldırın. Bu biçimde sekmeler yalnızca iki alanın arasında bulunmalı.

## Listeniz CSV dosyasındaysa

İçe aktarmaya hazırlamadan önce CSV dosyasını bir tablo uygulamasında açın. Aşağıdaki gibi bir CSV kaydı, tırnak işareti kurallarına göre yorumlandığında iki alandan oluşur:

```text
"colores primarios de la luz","red, green, blue"
```

Tırnak içindeki yanıtta virgüller var. Girdiyi virgüllerden bölen bir metin alanı CSV kurallarını uygulamayabilir. Bu yüzden orada yanıtı korumak için tırnak işaretlerine güvenmeyin.

Excel veya Google E-Tablolar'da kaydın tam olarak iki hücreye yerleştiğini doğrulayın. Ardından sekmeyle ayrılmış girdi elde etmek için hücreleri kopyalayın. Yanıt fazladan sütunlara dağılmışsa önce tablo uygulamasının CSV içe aktarma ayarlarını düzeltin. Bozulmuş satırı kopyalamak, hatayı da beraberinde taşır.

Tablo uygulamasının farklı yorumlayabileceği değerleri de kontrol edin. Öğrenmeniz gereken bir kod `0012` ise bunun `12` olması kartın içeriğini değiştirir. Aralığı kopyalamadan önce tanımlayıcıları, tarihleri, tırnak işaretlerini ve aksanlı kelimeleri asıl dosyayla karşılaştırın.

## Kartlar satırlarınızla eşleşmiyorsa

İlk uyuşmazlığı bulmak için deneme verilerini kullanın. Her seferinde tek bir şeyi değiştirin, ardından sonucu aynı dört kaynak satırla karşılaştırın.

| Belirti | Olası ayırıcı sorunu | Ne değiştirilmeli? |
| --- | --- | --- |
| Yanıt virgüllerden bölünüyor | Alanlar arasında virgül seçilmiş | İki sütun hazırlayın ve Tab (Sekme) seçin |
| “well-being” terimin ortasından bölünüyor | Alanlar arasında kısa çizgi seçilmiş | Kısa çizgiyi koruyun ve alanları sekmeyle ayırın |
| Bir yanıt birkaç karta dönüşüyor | Kaynağın içinde satır sonu karakterleri var | Yanıtı metinde tek satıra indirin |
| “Term” ve “Definition” bir kart olarak görünüyor | Başlık satırı kopyalanmış | Yalnızca veri satırlarını seçin |
| İki alan da aynı yüzde kalıyor | Sekme yerine boşluk karakterleri kullanılmış | İki sütunlu bir hücre aralığını kopyalayın |

Örneğin, ayrı satırlarda “first stage” ve “second stage” bulunan bir yanıtı `first stage; second stage` şeklinde yazabilirsiniz. Böylece iki bölüm de tek satırda kalır. Yanıtın içinde noktalı virgül kullanırken kartlar arasında **New line** (Yeni satır) seçili kalsın.

İki aşama ayrı sorular gerektiriyorsa bunun yerine her biri eksiksiz bir terim-tanım çifti içeren iki kart yazın. [Daha iyi bilgi kartları hazırlama rehberi (İngilizce)](/blog/how-to-make-better-flashcards/) bu kararı vermenize yardımcı olabilir.

## Yayımlamadan önce sonucu kontrol edin

Denemedeki dört kartın tümünü inceleyin. Listenin tamamı için içe aktarılan kartları temizlediğiniz kaynakla karşılaştırın:

- Toplam kart sayısı, eksiksiz veri satırlarının sayısıyla aynı mı?
- İlk ve son çiftler, yanıtların tamamı dâhil, kaynakla eşleşiyor mu?
- Noktalama işaretleri, aksanlar ve kodlar değişmeden kaldı mı?
- Boş yüzler, sütun başlıkları, yinelenen kartlar veya yanlış terimlerle eşleşmiş yanıtlar var mı?
- Satır sonlarını düzenlediğiniz her yanıt hâlâ anlamlı mı?

Şüpheli görünenlerin yanında birkaç sıradan çifti de okuyun. Yalnızca sayıların eşleşmesi, geçerli bir terimle eşleştirilmiş yanlış yanıtı ortaya çıkarmaz. Bir sorun varsa içe aktarmayı tekrarlamadan önce kaynağı düzeltin. Temizlediğiniz dosyayı ileride yapacağınız düzeltmeler için saklayın.

## Hazır çiftler mi, yapay zekâyla üretilen kartlar mı?

Quizlet, sağladığınız materyalden yapay zekâ yardımıyla kart oluşturmayı da [yapay zekâyla kart oluşturma sayfasında](https://quizlet.com/content/create-flashcards-from-words-and-definitions-with-quizlet-ai) açıklıyor. Üretilen metnin içeriği ayrıca gözden geçirilmeli. Hazır bir terim-tanım listesi için yapılandırılmış içe aktarma yöntemi, aktarımı daha önce yazdığınız çiftlerle karşılaştırarak kontrol etmenizi sağlar.

Elinizde paragraflar mı var? İçe aktarılacak metni hazırlamadan önce [notlarınızı bilgi kartlarına dönüştürün (İngilizce)](/blog/turn-notes-into-flashcards/). Bir seti ters yönde mi taşımak istiyorsunuz? [Quizlet'ten dışa aktarma rehberini](/tr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) kullanın.
