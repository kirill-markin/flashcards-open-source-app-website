---
title: "2026'da Claude ile Bilgi Kartı Nasıl Hazırlanır: Projects, Dosya Yükleme ve FSRS ile Tekrar"
description: "2026 için pratik bir Claude bilgi kartı iş akışı: Projects ve dosya yüklemeyle daha kısa, daha net kart taslakları hazırlayın; seçtiklerinizi FSRS ile tekrar etmek için Nibomo'ya taşıyın."
date: "2026-06-11"
updated: "2026-10-03"
image: "/blog/how-to-use-claude-to-make-flashcards.png"
keywords:
  - "Claude ile bilgi kartı nasıl hazırlanır"
  - "Claude bilgi kartları"
  - "Claude ile bilgi kartına dönüştürme"
  - "Claude Projects bilgi kartları"
  - "Claude dosya yükleyerek bilgi kartı hazırlama"
  - "Claude PDF'den bilgi kartı oluşturma"
  - "Claude ile bilgi kartı hazırlama"
  - "FSRS bilgi kartları"
---

> [Claude'a bağlanın](https://claude.ai/directory/nibomo) · [Dokümantasyon](/tr/docs/mcp-connector/)

Dün Claude'a bir dersin ana hatlarını ve okumam gereken dağınık bir PDF'yi yükleyip bilgi kartları hazırlamasını istedim. Birkaçı iyiydi. Geri kalanında o tanıdık yapay zekâ havası vardı: teknik olarak doğru, tuhaf biçimde fazla özenli ve ilk bakışta göründüğünden çok daha zor tekrar edilen kartlar.

**Claude ile bilgi kartı nasıl hazırlanır** sorusunun arkasındaki asıl sorun bu.

Claude, kaynak materyalden kart taslakları çıkarmakta iyi. Ama hangi bilginin uzun vadeli tekrara değer olduğuna, bir kartın ne kadar küçük olması gerektiğine ya da kulağa hoş gelen bir yanıtı gelecek perşembe de kolayca değerlendirip değerlendiremeyeceğinize kendiliğinden doğru karar vermiyor.

Bu yüzden 2026'da güveneceğim iş akışı, insanların başta istediğinden daha dar kapsamlı: tek bir konuyu tek bir Claude projesinde tutun, yalnızca o kart grubu için gereken materyali yükleyin, sade ön/arka yüz taslakları isteyin, gereksizleri acımadan silin ve kalanları FSRS kullanan gerçek bir bilgi kartı iş akışına taşıyın.

![Claude tarzı proje taslaklarının, dosya yükleme kartlarının ve seçilmiş FSRS bilgi kartlarının yer aldığı sıcak bir masa ortamı](/blog/how-to-use-claude-to-make-flashcards.png)

## Claude sonunda bu iş akışına uygun hâle geldi

Bu sorunun yanıtı artık daha önemli, çünkü Claude ders çalışmaya eskisinden daha uygun.

Anthropic, **2 Nisan 2025** tarihinde Projects içindeki **Learning Mode** özelliğini de kapsayan **Claude for Education**'ı tanıttı. Güncel yardım belgeleri de en az bunun kadar önemli. Anthropic'in **16 Mart 2026** tarihli Projects yardım sayfasına göre Projects tüm kullanıcılara açık ve ücretsiz hesaplarla beş adede kadar proje oluşturulabiliyor. Anthropic'in **22 Nisan 2026** tarihli dosya yükleme yardım sayfası ise Claude'un **PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON ve XLSX** dâhil ders çalışmaya elverişli dosya türlerini desteklediğini söylüyor.

Böylece **Claude ile bilgi kartı hazırlamak**, eski “her şeyi tek bir sohbete yığ ve iyi sonuç çıkmasını um” yöntemine göre çok daha düzenli bir başlangıç sunuyor.

Anthropic'in eğitim raporu da bunun zaten yaygın bir kullanım olduğunu gösteriyor. Rapora göre analiz edilen eğitimle ilgili sohbetlerin **%39,3**'ünde öğrenciler Claude'u öncelikle eğitim içeriği oluşturmak ve geliştirmek için kullanıyor. Dolayısıyla insanların Claude'u çalışma materyalleri için kullanıp kullanmadığı artık pek de ilginç bir soru değil. Kullandıkları açık. Daha iyi soru, bu materyali sonradan tekrar etmeye değer kartlara nasıl dönüştüreceğimiz.

## Her ders, sınav veya konu için bir Claude projesiyle başlayın

İlk benimseyeceğim alışkanlık bu olurdu, çünkü sonraki adımların neredeyse tamamını iyileştiriyor.

Claude'un güncel Projects belgeleri, projeleri kendi sohbet geçmişleri ve bilgi tabanları olan bağımsız çalışma alanları olarak tanımlıyor. Kart taslakları hazırlamak için tam da bu gerekiyor.

`okul` adında dev bir Claude çalışma alanı oluşturmayın.

Şunların her biri için ayrı bir proje oluşturun:

- tek bir ders
- tek bir sertifika sınavı
- bu hafta bitirmeye çalıştığınız tek bir ünite
- gerçekten birbiriyle ilişkili tek bir konu grubu

Böylece taslaklar daha temiz olur, çünkü Claude dört ayrı derse ait ilgisiz bilgileri tek bir yanıtta birleştirmeye çalışmaz. Her kart grubunun neyi kapsaması gerektiğini bildiğiniz için ayıklama işi de daha az can sıkıcı olur.

Claude'u yalnızca kart taslağı hazırlamak için değil, daha genel anlamda bir öğretmen gibi kullanıyorsanız [2026'da Claude ile Ders Çalışma](/tr/blog/how-to-use-claude-for-studying/) daha uygun bir tamamlayıcı yazı. Bu yazının kapsamı daha dar: Claude'un çıktısını, tekrar ederken de işe yarar bulacağınız kartlara dönüştürmek.

## Her kart grubunun daha temiz başlaması için proje talimatlarını bir kez ayarlayın

Bu, Claude'un sunduğu en yararlı avantajlardan biri.

Anthropic'in güncel Projects rehberine göre **proje talimatları** belirleyerek Claude'un o projenin tüm sohbetlerinde aynı gerekliliklere uymasını sağlayabilirsiniz. Bilgi kartları için bu, her yeni bölüm yüklediğinizde aynı biçimlendirme ve eleme kurallarını tekrarlamanızı önler.

Proje talimatını kısa ve sade tutardım:

```text
Bilgi kartı istediğimde sade ön/arka yüz biçimini kullan. Her kartta tek bir kavram, bilgi, ayrım veya süreç adımı olsun. Ön yüzlerdeki sorular net ve yanıtlanabilir olsun. Arka yüzleri kısa tut. Tekrarları, belirsiz soruları ve özgün kaynakta bulunan ama kartta yer almayan bağlamı gerektiren her şeyi atla.
```

Yeni bir kart grubu için materyal yüklerken o göreve özgü talimatları sohbetin kendisine yazın.

Bu ayrım iyi çalışır: proje talimatı genel kuralları belirler, sohbet istemi ise o anki ders, bölüm veya soru kümesini ele alır.

## Kaynakları düşündüğünüzden daha küçük parçalar hâlinde yükleyin

**Claude ile materyali bilgi kartlarına dönüştürme** iş akışlarının çoğu burada zayıflıyor.

İnsanlar dosya yükleme özelliğini görünce bunu bir dersin tüm materyalini tek bir isteğe yığmak için izin sayıyor. Bu da genellikle daha iyi değil, daha kötü kartlar üretiyor.

Anthropic'in kendi yükleme belgeleri de büyük belgeler için basit bir yol öneriyor: daha küçük bölümlere ayırın. Ben de tam olarak bunu yapardım.

Daha iyi girdiler şunlara benzer:

- tek bir dersin notları
- bir okuma metninin tek bir bölümü
- yanıtları düzeltilmiş tek bir alıştırma soru grubu
- bir kitap bölümünün alt bölümü
- bir çalışma rehberinin düzenli, küçük bir parçası

Daha kötü girdiler ise şunlara benzer:

- ders kitabının tamamı
- bir kerede on iki ders
- henüz düzenlemediğiniz bir dönem klasörü
- aslında kart kart tekrar etmek istemediğiniz dev bir konuşma dökümü

Küçük parçalar daha dürüst bir soru sormanızı sağlar: bu bölümden hangi bilgiyi daha sonra kaynağı yeniden açmadan hatırlamaya değer buluyorum?

Bu soru sayesinde deste daha küçük ve daha nitelikli kalır.

## Claude kaynak materyalden taslak çıkarmakta iyi, neyin önemli olduğunu seçmekte değil

Bence Claude'u en yararlı şekilde böyle düşünebiliriz.

Claude şunları yapabilir:

- bir okuma bölümünü kısaltmak
- bir kavramı daha açık biçimde yeniden anlatmak
- belirgin alt konuları ayırmak
- notları soru-cevap kartı taslaklarına dönüştürmek
- tekrarlanan terimleri ve tanımları fark etmek

Claude şunları kendiliğinden bilemez:

- hangi bilgileri zaten kart hazırlamaya gerek kalmayacak kadar iyi bildiğiniz
- hangi ayrımları tekrar tekrar karıştırdığınız
- hangi yanıtın hızlıca değerlendirilemeyecek kadar uzun olduğu
- hangi kartın yalnızca geldiği paragrafı hâlâ hatırladığınız için anlamlı göründüğü

Bu yüzden **Claude ile bilgi kartı hazırlamak**, Claude'un taslak çıkardığı ve sizin düzenlediğiniz durumda en iyi sonucu verir.

Her şeye Claude'un karar vermesini isterseniz genellikle hiçbir şeyi elemeye kıyamamış gibi görünen bir deste elde edersiniz. Çok fazla şeyi korur, çok fazla açıklama yapar ve o anda yararlı görünen ama ileride tekrar edilmeyi hak etmeyen materyali tutar.

## Sade bir istem kullanın, işi kısıtlar yapsın

Gösterişli bir isteme ihtiyacınız yok.

Sohbetin içinde şuna yakın bir şey kullanırdım:

```text
Bu kaynağı sade ön/arka yüz bilgi kartlarına dönüştür.

Kurallar:
- Her kartta tek bir bilgi, ayrım veya süreç adımı olsun
- Ön yüzdeki soru net ve yanıtlanabilir olsun
- Arka yüz kısa ve doğrudan olsun
- Bilgi uydurma
- Tekrarları ve belirsiz soruları atla
- Özgün belgede bulunan ama kartta yer almayan bağlamı gerektiren kartları atla
- Uzun vadede tekrar etmeye değmeyen kartları acımadan ele
```

Kaynak, yanıtları düzeltilmiş bir soru kümesiyse bir cümle daha ekleyin:

```text
Tekrarlamamın muhtemel olduğu hatalara, karıştırdığım noktalara ve yine gözden kaçırabileceğim ayrımlara öncelik ver.
```

Bu kadarı yeterli.

İşe yarayan kısıtlar basit:

- her kartta hatırlanması gereken tek bir bilgi
- kısa yanıtlar
- uydurulmuş bilgi olmaması
- ön yüzde geniş kapsamlı özet soruları olmaması
- yanında kaynağın tamamını açık tutmayı gerektiren kartlar olmaması

Claude genellikle net sınırlara iyi karşılık verir. Sorun nadiren sihirli bir istemin eksikliğidir. Sorun, insanların tek seferde çok fazla şey istemesidir.

## En iyi Claude bilgi kartları genellikle üç tür materyalden çıkar

Kaynak zaten kart hazırlamaya uygunsa ama hâlâ ayıklanması gerekiyorsa Claude'a en çok o zaman güvenirim.

En güçlü örnekler şunlar:

- kısaltılması gereken ders notları
- içinden önemli bilgilerin çıkarılması gereken okuma metinleri
- belirli bir hatayı ortaya koyan, yanıtları düzeltilmiş sorular

Bu ortak nokta önemli, çünkü Claude sıfırdan bir çalışma sistemi icat etmiyor. Ham materyali daha dar kapsamlı hatırlama hedeflerine dönüştürmenize yardımcı oluyor.

Girdiniz çoğunlukla notlardan oluşuyorsa [2026'da Notları Bilgi Kartlarına Dönüştürme (İngilizce)](/blog/turn-notes-into-flashcards/) ayıklama adımını daha ayrıntılı ele alıyor. Dosyalar söz konusu olduğunda, ilgili küçük bir bölümü çıkarın ve kart taslaklarını kabul etmeden önce metni, denklemleri ve etiketleri kontrol edin.

## Hâlâ Claude yazmış gibi duran kartları silin

Asıl kalite artışı burada olur.

Claude'un oluşturduğu kartlar çoğu zaman tanıdık şekillerde başarısız olur:

- ön yüz zarif görünür ama yanıtlanabilir değildir
- paragrafta üç bilgi olduğu için arka yüzde de üç bilgi vardır
- kartta “temel hususlar” veya “önemli etkenler” gibi muğlak ifadeler kalır
- anlatımı açık olduğu için beğenirsiniz ama kartla tekrar yapmak can sıkıcıdır

Bunları hemen elerdim.

Bir bilgi kartının ön yüzü, çalışma rehberinin giriş cümlesi gibi durmamalı. Yanıtlayabildiğiniz ya da yanıtlayamadığınız bir soru gibi durmalı.

Kartı yalnızca şu koşullarda tutun:

- kaynağı yeniden açmadan yanıtlayabiliyorsanız
- arka yüz hızlıca değerlendirilebilecek kadar kısaysa
- bir kavram kümesini değil, tek bir kavramı ölçüyorsa
- bir hafta sonra da hatırlamayı önemseyeceğiniz bir şeyi soruyorsa

Bunları karşılamıyorsa silin.

Üretken hissettiren bir Claude oturumuyla yararlı kalmayı sürdüren bir deste arasındaki temel fark bu.

## Zayıf bir Claude kartı ve gerçekten tutacağım sürümü

Diyelim ki Claude glikolizle ilgili bir metin okuyor ve size şunu veriyor:

- Ön yüz: Glikolizin temel özellikleri ve sonuçları nelerdir?
  Arka yüz: Glikoliz, sitoplazmada gerçekleşen, glikozu pirüvata dönüştüren, ATP ve NADH üreten ve oksijen gerektirmeyen bir metabolik yoldur.

Bu tek bir kart değil. Üzerine isim etiketi yapıştırılmış bir paragraf.

Daha iyi sürüm genellikle birkaç küçük karttır:

- Ön yüz: Glikoliz nerede gerçekleşir?
  Arka yüz: Sitoplazmada.
- Ön yüz: Glikoliz hangi molekülü parçalar?
  Arka yüz: Glikoz.
- Ön yüz: Glikoliz oksijen gerektirir mi?
  Arka yüz: Hayır.

Dersinizde bu ayrım önemliyse oluşan ürünlerle ilgili bir kart daha tutabilirsiniz.

Amaç Claude'un akıcı yanıtını korumak değil. O yanıtın içinde saklı hatırlama hedeflerini korumak.

## Claude'un belleğini ve bağlamını aralıklı tekrarla karıştırmayın

Claude'un bağlam araçları artık eskisinden daha iyi. Projeler işe yarıyor. Yüklenen dosyalar işe yarıyor. Proje talimatları işe yarıyor. Bunların hepsi yararlı.

Yine de bir tekrar sistemiyle aynı şey değiller.

Claude bir konunun bağlamını koruyabilir. Oturumunuzun akışını eski sohbet araçlarına göre daha iyi hatırlayabilir. Ama bunların hiçbiri, ileride asıl önem kazanan o sıradan işin yerini tutmaz: doğru kartı doğru zamanda yeniden görmek.

Bu yüzden **Claude Projects ile hazırlanan bilgi kartlarının** son durağı projenin kendisi değil, gerçek bir bilgi kartı uygulaması olmalı.

Claude bağlamı tutabilir.

FSRS unutmayı yönetir.

Bunlar farklı işler.

Tekrar zamanlamasının ayrıntılarını öğrenmek istiyorsanız [2026'da FSRS ve SM-2 Karşılaştırması (İngilizce)](/blog/fsrs-vs-sm-2/) yazısıyla devam edebilirsiniz.

## Onayladığınız kartları Nibomo'ya kaydedin

[Claude dizinindeki Nibomo'yu](https://claude.ai/directory/nibomo) açın, bağlayın, Nibomo hesabınıza giriş yapın ve erişim izni verin. Nibomo, Community kategorisinde bir bağlayıcı olarak listeleniyor.

Claude'dan yalnızca kontrol edip onayladığınız kartları Nibomo'nun MCP bağlayıcısı üzerinden kaydetmesini isteyin. Hedef çalışma alanını ve yazma isteğini önizlemede kontrol edin, isteği onaylayın, ardından FSRS ile tekrar yapmadan önce kaydedilen kartları Nibomo'da kontrol edin. Elle kopyalama seçeneği de var.

[Nibomo](/tr/) bu iş akışına uyuyor, çünkü ürünün mevcut hâli Claude'un tek başına tamamlamadığı kısmı karşılıyor:

- ön/arka yüzlü kart oluşturma ve düzenleme
- çalışma alanı verilerini ve dosya eklerini kullanabildiğiniz yapay zekâ sohbeti
- son hâline gelen kartları düzenlemek için desteler ve etiketler
- kartlar saklamaya değer hâle geldiğinde FSRS ile tekrar
- hızlı başlamak isteyenler için barındırılan bir web uygulaması
- ileride kendi altyapısını çalıştırmak isteyenler için kendi sunucusunda barındırma seçeneği

En hızlı yolu istiyorsanız [Başlangıç rehberi](/tr/docs/getting-started/) barındırılan uygulamayı anlatıyor. Altyapıyı kendiniz yönetmek daha önemliyse devamında [kendi sunucunuzda barındırma rehberini](/tr/docs/self-hosting/) okuyabilirsiniz.

## Gerçekten tekrar tekrar uygulayacağım iş akışı

**Claude ile bilgi kartı hazırlamanın** iyi bir yolu, yenilik heyecanı geçtikten sonra da kullanabileceğiniz kadar kısa olmalı.

Benim kullanmaya devam edeceğim iş akışı şu:

1. Tek bir ders, sınav veya konu için bir Claude projesi oluşturun.
2. Ön/arka yüz kart kuralları için kısa bir proje talimatı ekleyin.
3. Küçük bir materyal grubu yükleyin: bir ders, bir okuma bölümü veya yanıtları düzeltilmiş alıştırma soruları.
4. Claude'dan sade ön/arka yüz taslakları isteyin.
5. Zayıf kartları hemen silin veya yeniden yazın.
6. Claude'dan yalnızca kontrol edip onayladığınız kartları Nibomo'nun MCP bağlayıcısı üzerinden kaydetmesini isteyin. Hedef çalışma alanını ve yazma isteğini önizlemede kontrol edin, isteği onaylayın, ardından FSRS ile tekrar yapmadan önce kaydedilen kartları Nibomo'da kontrol edin. Elle kopyalama seçeneği de var.
7. Son hâline gelen desteyi FSRS ile tekrar edin.

Bu iş akışı, bilgileri kalıcı olarak hatırlamanın Claude'un içinde gerçekleşeceğini varsaymaktan daha gerçekçi.

Yapay zekânın oluşturduğu desteniz zaten şişkin geliyorsa yeni taslakları kabul etmeyi bırakın ve mevcut kartları [2026'da Yapay Zekâ Bilgi Kartlarını Düzeltme (İngilizce)](/blog/how-to-fix-ai-flashcards/) yazısıyla iyileştirin.

## Claude ile bilgi kartı hazırlamak için daha iyi bir kural

Claude'dan sizin yerinize ders çalışmasını istemeyin.

İşin mekanik kısmını ortadan kaldırmasını isteyin.

**Claude ile bilgi kartı hazırlamanın** 2026'da gerçekten işe yarayan biçimi şu:

- her konu için tek bir proje
- her seferinde küçük bir materyal grubu
- her kartta tek bir bilgi veya ayrım
- gereksiz kartları acımadan eleme
- sonrasında gerçek tekrar

Claude, dağınık kaynak materyalden kart taslaklarına daha hızlı ulaşmanızı sağlamakta iyi.

Nibomo ve FSRS ise bu taslakları bir ay sonra hâlâ hatırlayabileceğiniz bilgilere dönüştürüyor.
