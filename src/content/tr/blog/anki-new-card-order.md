---
title: "Anki’de yeni kart sırası: Kart seçimi, sıralama ve kuyruk kontrolü"
description: "Altı kartlık bir örnekle Anki’nin yeni kart seçme ve sıralama ayarlarını inceleyin. Alt deste sınırlarını, kuyruk konumlarını ve çalışmak için seçtiğiniz desteyi kontrol edin."
date: "2026-10-06"
image: "/blog/anki-new-card-order.png"
keywords:
  - "Anki yeni kart sırası"
  - "Anki yeni kart seçme sırası"
  - "Anki yeni kart sıralama ayarı"
  - "Anki artan konum sırası"
  - "Anki kartlar yanlış sırada çıkıyor"
---

Anki’de konumu 10 olan yeni bir kart, konumu 60 olan bir karttan sonra karşınıza çıkabilir. Bir üst desteyi çalışırken kart seçme ayarı **Desteye göre** (**Deck**), sıralama ayarı da **Seçim sırasına göre** (**Order gathered**) ise Anki, konumu 10 olan kartın bulunduğu alt desteye geçmeden önce alfabetik sırada öndeki alt desteden kart seçmeyi bitirebilir. Tarayıcıdaki listeyi oluşturulma tarihine göre sıralamak çalışma kuyruğunu değiştirmez.

Anki yeni kartların sırasını iki aşamada belirler. **Seçim**, bugünkü sınırlar içinde hangi kartların kuyruğa gireceğini belirler. **Sıralama** ise seçilen kartları gösterim sırasına dizer. Sorunu incelerken önce şu ayrımı yapın. Beklediğiniz kartlar seçiliyor mu? Seçiliyorsa hangi sırada geliyorlar?

Bu adımlar masaüstü Anki’deki normal desteler için geçerli. Altı kartlık özgün örnek, güncel kılavuz ve yayımlanmış [Anki 26.09.3 sürümü](https://github.com/ankitects/anki/releases/tag/26.09.3) esas alınarak 6 Ekim 2026’da kontrol edildi. Hesap kâğıt üzerinde yapıldı ve uygulamada denenmedi.

![Bir adam, üç plağın yanındaki boş raf gözünün üzerinde dördüncü bir plak tutuyor. Arkasında seçilmemiş albümlerin bulunduğu iki kasa var.](/blog/anki-new-card-order.png)

## İstediğiniz sırayı seçin

Çalışmak için tıkladığınız destenin **Seçenekler** (**Options**) bölümünü açın ve **Gösterim Sırası** (**Display Order**) ayarlarına bakın. Bir üst desteyi çalıştığınızda, alt destelerden gelen kartlar da dahil olmak üzere tüm oturumun gösterim sırasını üst destenin ayarları belirler.

| İstediğiniz sonuç | Yeni Kart Seçme Sırası (New Card Gather Order) | Yeni Kart Sıralaması (New Card Sort Order) |
| --- | --- | --- |
| Seçilen destede ve ona bağlı tüm alt destelerde artan yeni kart konumlarını izlemek | Artan konuma göre (Ascending position) | Seçim sırasına göre |
| Alt desteleri alfabetik sırayla ele almak ve her alt destede konum sırasını izlemek | Desteye göre | Seçim sırasına göre |
| Seçilen kartları koruyup gösterim sırasını karıştırmak | Tercih ettiğiniz seçim ayarı | Rastgele (Random) |

Bu ayar birleşimleri Anki’nin İngilizce kılavuzundaki [yeni kart seçme sırası](https://docs.ankiweb.net/manual/deck-options#new-card-gather-order) ve [yeni kart sıralaması](https://docs.ankiweb.net/manual/deck-options#new-card-sort-order) tanımlarına dayanıyor. **Artan konuma göre** ayarı, yeni kartların kayıtlı konumlarını esas alır. Ekleme sırası ve elle yeniden konumlandırma bu değerleri etkileyebildiği için kartlar her zaman oluşturulma tarihine göre gelmez.

Bir ayarı değiştirmeden önce desteye hangi ayar profilinin atandığına ve başka hangi destelerin aynı profili kullandığına bakın. Gösterim sırası ayarları profile aittir. Değişiklik yalnızca bu desteyi etkileyecekse önce İngilizce [tek desteye özel profil kullanma rehberindeki](/blog/anki-deck-options-presets/) adımları izleyin. Günlük sınırları **Bu deste** (**This deck**) veya **Yalnızca bugün** (**Today only**) seçeneğiyle ayrı ayrı belirleyebilirsiniz. Gösterim sırası ayarları aynı profili kullanan desteler arasında ortak kalır.

## Hangi dört kart kuyruğa girer?

`OrderLab` adlı normal bir üst deste düşünün. İki alt destesi var ve bu altı kart dışında kart içermiyor. Her kart, tek kart üreten ayrı bir **Temel** (**Basic**) nottan geliyor. Bu yüzden altısının da kart türü numarası aynı ve hiçbirinin kardeş kartı yok.

| Kart | Deste | Yeni kartın kayıtlı konumu |
| --- | --- | --- |
| A | OrderLab::01 First | 20 |
| B | OrderLab::01 First | 40 |
| C | OrderLab::01 First | 60 |
| D | OrderLab::02 Second | 10 |
| E | OrderLab::02 Second | 30 |
| F | OrderLab::02 Second | 50 |

Altı kartın da yeni olduğunu varsayalım. Hiçbiri gömülü veya askıya alınmış durumda değil ve hiçbiri filtreli bir destede bulunmuyor. Başlangıçta başka kart, öğrenme tekrarı veya gözden geçirme yok. Bugün henüz hiçbir kart çalışılmadı. `OrderLab` başka bir destenin altında yer almıyor ve geçerli gözden geçirme sınırları altı yeni kartın tamamına yer bırakıyor.

Çalışmak için **OrderLab** destesini seçin. Geçerli yeni kart sınırı **4**. `01 First` için sınır **3**, `02 Second` için **2**. Bu sınırların hiçbirinde geçici değişiklik yok. İki karşılaştırmada da sıralama ayarı **Seçim sırasına göre** olsun. İkisine de koleksiyonun aynı, el değmemiş hâlinden başlayın ve arada kart yanıtlamadan hesabı kâğıt üzerinde yapın.

Kart seçme ayarı **Desteye göre** olduğunda Anki şu sırayı izler.

1. Alfabetik sıraya göre önce `01 First`, ardından `02 Second` destesini ele alır.
2. `01 First` destesinden konum sırasıyla **A, B, C** kartlarını seçer. Üst destenin sınırına ulaşmak için bir kartlık yer kalır.
3. `02 Second` destesinden **D** kartını seçer ve üst destenin dört kartlık sınırına ulaşır.

Yeni kartların beklenen ilk gösterim sırası **A → B → C → D**. E ve F seçime girmez.

Kart seçme ayarı **Artan konuma göre** olduğunda iki alt destedeki adayların ortak sırası **D → A → E → B → F → C** olur. İlk dört aday tüm sınırlara uyar. `02 Second` destesinden iki, `01 First` destesinden iki kart seçilir ve toplam dört karta ulaşınca seçim durur.

Beklenen sıra **D → A → E → B**. C ve F seçimin dışında kalır. Yayımlanan sürümdeki [kart seçme kodu](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/gathering.rs) her kartı seçerken hem kendi destesinin hem de üst destenin sınırını uygular.

`02 Second` destesinden en fazla iki kart seçilebilir. **Desteye göre** ayarında `01 First` dört yerin üçünü doldurduğu için `02 Second` destesinden yalnızca bir kart gelir. **Artan konuma göre** ayarında ise bu örnekteki konumlar her alt desteden ikişer kart seçilmesini sağlar. Başka bir koleksiyonda dağılım farklı olabilir.

## Altı kart da seçilince sıra nasıl değişir?

Kâğıt üzerindeki ikinci karşılaştırmada altı karta da yer açın. Üst destenin sınırını **6**, `01 First` ve `02 Second` destelerinin sınırlarını **3** olarak alın. Sıralama ayarı **Seçim sırasına göre** kalsın.

| Kart seçme ayarı | Sınırlar (üst deste / 01 First / 02 Second) | Beklenen ilk gösterim sırası |
| --- | --- | --- |
| Desteye göre | 6 / 3 / 3 | A → B → C → D → E → F |
| Artan konuma göre | 6 / 3 / 3 | D → A → E → B → F → C |

İki ayar da altı kartın tamamını seçer. Bu kez yalnızca gösterim sırası değişir. Üst destenin sınırını altıya çıkarıp `02 Second` sınırını ikide bıraksaydınız beş kart seçilirdi ve F yine dışarıda kalırdı. Bu sınırlar kâğıt üzerindeki karşılaştırma için kullanılıyor. Günlük yeni kart sayınızı artırmanız için bir öneri değil.

## Sıralama, seçilmeyen kartları kuyruğa ekleyemez

Başlangıçtaki **4 / 3 / 2** sınırlarına dönün ve yalnızca **Yeni Kart Sıralaması** ayarını **Rastgele** olarak değiştirin.

| Kart seçme ayarı | Rastgele sıralanabilecek kartlar | Sıralamanın ekleyemeyeceği kartlar |
| --- | --- | --- |
| Desteye göre | A, B, C, D | E, F |
| Artan konuma göre | D, A, E, B | C, F |

Gösterim sırası karışır, seçilen kartlar aynı kalır. Bu tablodan kartların hangi rastgele sırayla geleceğini çıkaramazsınız. Anki’nin yayımlanan [sıralama kodu](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/sorting.rs) önceden seçilmiş kartları yeniden sıralar.

**Önce kart türüne, sonra seçim sırasına göre** (**Card type, then order gathered**) ayarı da seçilen kartlar üzerinde çalışır. Altı Temel kartın tür numarası aynı olduğu için bu örnekte seçim sırası korunur.

Yalnızca sıralamayı gösteren ayrı bir örnek düşünün. Birden fazla kart şablonu olan notlardan dört kartın **W (tür 2), X (tür 1), Y (tür 2), Z (tür 1)** sırasıyla seçildiğini varsayalım. Kart türüne göre sıralama **X → Z → W → Y** sonucunu verir. Tür 1 önce gelir ve her tür kendi içinde seçim sırasını korur. Örnek, kart seçimi tamamlandıktan sonra başlıyor. Gömme ayarlarınıza göre hangi kardeş kartların seçileceğini bu örnekten çıkaramazsınız.

Tür numarası, kart şablonunun ait olduğu not türündeki konumunu gösterir. Bir kartın tanımayı mı yoksa yanıtı üretmeyi mi çalıştırdığı şablona bağlıdır. Kart türüne göre sıralamanın ileri yöndeki tüm soruları öne alacağını varsaymadan önce sorulara bakın.

## Konumları değiştirmeden önce Tarayıcı’da kontrol edin

**Gözat** (**Browse**) düğmesiyle Tarayıcı’yı açın, **Kartlar** (**Cards**) moduna geçin ve destenizle ona bağlı alt destelerde arama yapın. Örnekteki arama şu şekilde yapılır.

```text
deck:OrderLab is:new
```

Sütun başlığı menüsünden **Soru** (**Question**), **Kart** (**Card**), **Deste** (**Deck**), **Vade** (**Due**) ve **Oluşturulma Tarihi** (**Created**) sütunlarını açın. Yeni kartlarda **Vade** kartın kuyruk konumunu, **Oluşturulma Tarihi** ise kartın bağlı olduğu notun ne zaman oluşturulduğunu gösterir. **Sıralama Alanı** (**Sort Field**) sütununda, notun sıralama için belirlenen alanındaki içerik görünür. Tarayıcı’da bir sütuna göre sıralama yaptığınızda yalnızca tablodaki görünüm değişir. Kayıtlı konumlar ve çalışma sırasında kullanılan kart seçme ayarı aynı kalır. Anki’nin İngilizce [Tarayıcı sütunları kılavuzu](https://docs.ankiweb.net/manual/browsing#columns) bu değerleri ayrı ayrı açıklar.

`is:new` aramasına askıya alınmış veya gömülü yeni kartlar da girebilir. Bu kartların **Vade** değerleri parantez içinde görünür. Daha dar bir aramayla bu kartları ve o sırada filtreli destelerde bulunan kartları sonuçlardan çıkarabilirsiniz.

```text
deck:OrderLab is:new -is:suspended -is:buried -deck:filtered
```

Anki’nin İngilizce kılavuzunda [kart durumuna göre arama](https://docs.ankiweb.net/manual/searching#card-state) ve [desteye göre arama](https://docs.ankiweb.net/manual/searching#tags-decks-cards-and-notes) açıklanıyor. Deste adında boşluk varsa adı tırnak içine alın. Örneğin `deck:"My Deck"`. Günlük sınırlar ve kardeş kartların otomatik olarak gömülmesi, bu aramada görünen kartların bir kısmını bugünkü kuyruğun dışında bırakabilir. İngilizce [kartları gömme ve askıya alma rehberimiz](/blog/anki-bury-vs-suspend/) bu kartların neden çalışmaya alınmadığını açıklıyor.

Kayıtlı konumlar zaten istediğiniz sırayı veriyorsa onları olduğu gibi bırakın. Konumları değiştirmeniz gerekiyorsa önce eski değerleri kaydedin. Ardından değiştireceğiniz birkaç yeni kartı seçip **Kartlar → Yeniden Konumlandır** (**Cards → Reposition**) komutunu kullanın. İşlemi uygulamadan önce açılan pencereye bakın. **Mevcut kartların konumunu kaydır** (**Shift position of existing cards**) seçeneği, seçimin dışında kalan ve konum numarası daha yüksek olan kartları da etkileyebilir. Kaydırmayı kapalı bırakırsanız yeni konumlar mevcut konumlarla çakışabilir. Aynı konumdaki kartların hangi sırada geleceğini yalnızca konum numarasından anlayamazsınız. Ayrıntılar Anki’nin İngilizce kılavuzundaki [Yeniden Konumlandır komutu](https://docs.ankiweb.net/manual/browsing#cards) bölümünde yer alıyor.

Kart seçme veya sıralama ayarlarını değiştirmek için öğrenme ya da gözden geçirme geçmişini silmeniz gerekmez. Sorunu incelerken yeni kartların konumlarına ve gösterim sırasına odaklanın.

## Hangi desteyi açtınız, bugün kaç kartlık yer kaldı?

İlk örnekte doğrudan `OrderLab::02 Second` destesini seçerseniz adaylar D, E ve F ile sınırlı kalır. İki kartlık sınırla, kart seçme ayarı **Artan konuma göre** ve sıralama ayarı **Seçim sırasına göre** olduğunda beklenen sıra **D → E**. Üst destenin dört kartlık hakkı henüz kullanılmadığı için üst deste sınırı uygulansa bile bu iki kartlık seçimi daraltmaz. **Desteye göre** kart seçme ayarı ve **4 / 3 / 2** sınırlarıyla üst desteyi açarsanız sıra **A → B → C → D** olur.

`OrderLab` üzerinden başlattığınız oturumda gösterim sırasını `OrderLab` belirler. `02 Second` destesinin kendi gösterim sırası ayarı, o desteyi doğrudan açtığınızda devreye girer. Seçtiğiniz deste toplam kart sayısına da bir üst sınır koyar ve geçerli alt deste sınırları ayrıca uygulanır. **Sınırları en üst desteden uygula** (**Limits start from top**) ayarı, bir alt desteyi doğrudan çalışırken onun üstündeki destelerin sınırlarının da hesaba katılıp katılmayacağını belirler. Anki’nin İngilizce kılavuzunda [alt deste kuralları](https://docs.ankiweb.net/manual/deck-options#subdecks) ve [üst deste sınırlarının uygulanması](https://docs.ankiweb.net/manual/deck-options#limits-start-from-top) açıklanıyor.

Gözden geçirme sınırlarını da kontrol edin. Varsayılan olarak gözden geçirme sınırı yeni kartları da kısıtlar. **Yeni kartlar gözden geçirme sınırına tabi olmasın** (**New cards ignore review limit**) ayarı bu davranışı değiştirir. Hem bu ayar hem de **Sınırları en üst desteden uygula** ayarı koleksiyonun tamamı için geçerlidir. İkisini de yayımlanan sürümün [günlük sınır ayarları arayüzünde](https://github.com/ankitects/anki/blob/26.09.3/ts/routes/deck-options/DailyLimits.svelte) görebilirsiniz. Yeni kart sınırına bakarak bugün kaç kart daha görebileceğinizi hesaplamadan önce bu iki ayarın durumunu kaydedin.

Soruları yanıtlamadan incelemek için Tarayıcı’daki **Önizleme** (**Preview**) özelliğini kullanın. Bir sonraki normal çalışma oturumunuz için şu tabloyu doldurun.

| Kaydedilecek bilgi | Yanıtladığı soru |
| --- | --- |
| Çalışmak için tıkladığınız deste, bu destenin ayar profili, kart seçme ve sıralama ayarları | Oturumun gösterim sırasını hangi ayarlar belirliyor? |
| Görmeyi beklediğiniz kartlar ve kayıtlı konumları | Sorun kart seçiminde mi, gösterim sırasında mı? |
| Yeni kart ve gözden geçirme sınırları, desteye veya bugüne özel sınırlar ve bugün tamamladığınız çalışma | Bugün kaç kartlık yer kaldı? |
| Üst destelerin sınırları ve koleksiyon genelinde geçerli iki sınır ayarı | Başka hangi sınırlar uygulanıyor? |
| Gömülü, askıya alınmış veya filtreli destede bulunan kartlar ve kardeş kartlar | Aday görünen hangi kartlar kuyruğa giremeyebilir? |
| Öğrenme tekrarlarından ayrı olarak kaydettiğiniz ilk gösterim sırası | Yeni kartların sırası tahmininizle örtüşüyor mu? |

Yeni bir kartı yanıtladıktan sonra öğrenme tekrarları araya girebilir. **Yeni Kartların ve Gözden Geçirmelerin Sırası** (**New/Review Order**) ayarı, yeni kartların gözden geçirmelerden önce, sonra veya onların arasında gösterilmesini belirler. Kart seçme ve sıralama ayarları ayrı olarak uygulanır. Yayımlanan sürümdeki [kuyruk oluşturma kodu](https://github.com/ankitects/anki/blob/26.09.3/rslib/src/scheduler/queue/builder/mod.rs) yeni kartları sıraladıktan sonra bu kart gruplarını bir araya getirir.

Gördüğünüz kartlar ve ilk gösterim sıraları beklentinizle örtüşüyorsa kontrolü bitirebilirsiniz. Arada hâlâ fark varsa sorunu incelemek için kartların konumlarını, ayarları, seçtiğiniz desteyi, Anki sürümünü, gözlemlediğiniz sırayı ve ilgili eklentileri kaydedin. Amacınız bir konuyu fazladan tekrar etmekse İngilizce [filtreli desteyle ek çalışma rehberindeki](/blog/anki-filtered-decks-without-rescheduling/) adımları izleyin.
