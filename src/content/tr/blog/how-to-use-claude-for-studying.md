---
title: "2026'da Claude ile Nasıl Ders Çalışılır? Uygulanabilir Bir Yöntem"
description: "Claude ile kendi notlarınızdan çalışın, soruları tek tek yanıtlayın, düzeltmeleri doğrulayın ve dersinizin yapay zekâ kurallarına uyarak eksiklerinizi bilgi kartlarına dönüştürün."
date: "2026-05-28"
updated: "2026-09-30"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "Claude ile nasıl ders çalışılır"
  - "Claude ile ders çalışma"
  - "Claude ders çalışma yöntemi"
  - "Claude özel öğretmen"
  - "Claude bilgi kartları"
  - "Claude öğrenme modu"
---

Bir ders slaytında “kromozomlar ayrılır” yazıyor, ama hangilerinin ayrıldığı belirtilmiyor. Claude bu boşluğu size söylemeden genel bilgisiyle doldurursa, kaynağınızın hiç ortaya koymadığı bir yanıtı kesin bir bilgiymiş gibi tekrar etmeye başlayabilirsiniz.

İşe yarayan ilk komut “bana soru sor” değil. Önce Claude'dan materyalin hangi iddiaları desteklediğini, hangi kısımların belirsiz olduğunu ve neleri okuyamadığını göstermesini isteyin. Böylece size, sınırlarını kontrol edebildiğiniz bir kaynak üzerinden rehberlik edebilir.

**Claude ile nasıl ders çalışılır?** sorusunun pratik yanıtı, kaynağın sınırları içinde kalan bu döngüdür: materyali inceleyin, soruları tek tek hafızanızdan yanıtlayın, her düzeltmenin yanına kanıtını koyun ve yalnızca yeniden çalışmaya değer eksiklerinizi saklayın. Bu yöntem sıradan bir Claude sohbetinde uygulanabilir; bilgi kartı uygulaması gerektirmez.

> **Açıklama:** Ben Kirill Markin, [Nibomo](/tr/features/)'yu geliştiriyorum. Ürün, bu açıklama dışında yalnızca aşağıdaki isteğe bağlı aktarım bölümünde yer alıyor; ders çalışma yöntemi ürüne bağlı değil. Bu yazının araştırma ve düzenleme aşamalarında yapay zekâdan yararlanıldı.

**Bilgilerin kontrol edildiği tarih:** 14 Eylül 2026.

![Kaynak notlarını bir soruya ve doğrulanmış iki eksik konu kartına bağlayan, belirsiz bir notun kenara ayrıldığı çalışma masası](/blog/how-to-use-claude-for-studying-v2.png)

## Claude ile ders çalışmanın kısa özeti

Bir ders bölümü, okuma metni veya alıştırma seti için şu döngüyü uygulayın:

1. Dersinizde yapay zekâ kullanımına hangi sınırlar içinde izin verildiğini kontrol edin.
2. Claude'a küçük ve kapsamı açıkça belirtilmiş bir kaynak grubu verin.
3. Konuyu anlatmadan önce eksik, çelişkili veya okunamayan bilgileri işaretlemesini isteyin.
4. Soruları tek tek hafızanızdan yanıtlayın.
5. Düzeltmeyi, kaynaktaki yerini ve varsa belirsizliği kaydedin.
6. Önemli yanıtları kendiniz doğrulayın.
7. Yalnızca uzun vadede önemli olan eksiklerinizi daha sonra çalışmak veya bilgi kartına dönüştürmek için saklayın.

Sıralama önemli. Belirsiz bir kaynaktan soru çözmek, belirsizliği fark etmeyi daha da zorlaştırır.

## İlk dosyayı yüklemeden önce dersin kurallarını kontrol edin

Ders izlencesi, ödev yönergeleri ve kurumunuzun yapay zekâ politikasıyla başlayın. Kurallar derse ve ödeve göre değişebilir. Bu yüzden elinizdeki görev için nelere izin verildiğini yazın: açıklama, alıştırma soruları, geri bildirim, taslak çıkarma, kaynak gösterme yardımı veya bunların hiçbiri.

Anthropic'in [Claude for Education öğrenci rehberi](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university), açıklamaları, alıştırma sorularını, çalışma rehberlerini ve bilgi kartlarını ders çalışma amaçlı kullanımlar arasında sayıyor. Aynı rehber, kurumun akademik dürüstlük kurallarına uyulmasını ve bağımsız olarak tamamlamanız beklenen işlerde Claude kullanılmamasını söylüyor.

Bunun pratikteki sınırları şöyle:

- Öğretici destek ve alıştırmaya izin veriliyorsa kavramları pekiştirmek için Claude'u kullanın.
- Tek başınıza tamamlamanız gereken, devam eden bir sınavı veya değerlendirme görevini çözmesini istemeyin.
- Hizmetle paylaşma izniniz yoksa gizli, kişisel, telif hakkıyla korunan veya paylaşımı kısıtlanmış ders materyallerini yüklemeyin.
- Politika belirsizse notlandırılacak çalışmaya başlamadan önce öğretim elemanına sorun.

Asıl çalışma size ait olsun. Kendi denemenizden sonra geri bildirim almak, izin verilen bir çalışma desteği olabilir. Claude'un ürettiği çalışmayı kendi çalışmanızmış gibi sunmak ise dersin kurallarını ihlal edebilir.

## Doğru dosyaları doğru yere koyun

Kısa bir çalışma oturumu için tek seferlik bir sohbet yeterli. Dönem boyunca süren bir ders için bir Claude Project oluşturun ve yalnızca o derse ait materyalleri ekleyin.

[Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) tüm kullanıcılara açık; Free hesapları şu anda beş projeyle sınırlı. Proje bilgisine eklenen dosyalar ve talimatlar, o projedeki sohbetlerde yeniden kullanılmak üzere saklanır. İlgili materyali proje bilgisine eklemedikçe, normal bir sohbetin bağlamı diğer sohbetlerle otomatik olarak paylaşılmaz.

İki sohbeti aynı projeye koymak, ilk sohbetteki her ayrıntıyı kendiliğinden ikinci sohbette kullanılabilir hâle getirmez.

Claude'un [dosya yükleme belgeleri](https://support.claude.com/en/articles/8241126-upload-files-to-claude) şu anda PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON ve XLSX dosyalarını; ayrıca JPEG, PNG, GIF ve WebP görsellerini listeliyor. XLSX yüklemek için kod çalıştırma ve dosya oluşturma özelliklerinin açık olması gerekiyor. Bir dosyayı tek bir sohbete ekleyebilir veya yeniden kullanmak için projenin Files bölümünde saklayabilirsiniz.

İşe yarayan en küçük kaynak grubunu kullanın: bir ders, bir bölümün alt başlığı veya az önce yanlış yanıtladığınız sorular. Komutta “8–17. slaytlar” ya da “Genetik Bağlantı başlıklı bölüm” gibi açık bir sınır belirtin. Küçük bir kaynak grubu, kanıtları bulmayı ve bilgilerin yanlışlıkla birbirine karışmasını fark etmeyi kolaylaştırır.

Anthropic, [Claude for Education Projects içinde **Learning mode** özelliğini](https://www.anthropic.com/news/introducing-claude-for-education), yanıtları hemen vermek yerine öğrencileri akıl yürütmeye yönlendiren Sokratik bir öğrenme deneyimi olarak tanıttı. Üniversiteniz Claude for Education sunuyorsa bu özelliğe erişiminiz olabilir, ancak her kişisel Claude hesabında bulunduğunu varsaymayın. Aşağıdaki komutlar, normal bir sohbette benzer biçimde sorularla ilerleyen bir oturum kurar.

## Konuyu anlatmadan önce belirsizlikleri ortaya çıkarmasını isteyin

Materyali ekleyin, kapsamı tam olarak belirtin ve önce kaynak incelemesi isteyin:

```text
Bu çalışma oturumunda yalnızca adını belirttiğim dosya ve bölümleri kullan.
Açıkça istemediğim sürece boşlukları genel bilginle doldurma.

Bana rehberlik etmeye başlamadan önce şunları içeren bir kaynak haritası çıkar:
- materyalin açıkça anlattığı kavramlar;
- belirsiz veya eksik terimler, şekiller ya da pasajlar;
- güvenilir biçimde okuyamadığın metinler, formüller, etiketler veya sayfalar;
- verilen kaynaklar arasındaki çelişkiler;
- materyalin bildiğimi varsaydığı ama açıklamadığı ön bilgiler.

Her madde için dosya adını ve sayfa, slayt veya başlığı belirt. Doğrudan kaynak
desteği olmayan her şeyi KAYNAKLA DESTEKLENMİYOR diye etiketle. Henüz sorulara geçme.
```

Haritayı dosyalarla karşılaştırın. Claude bir tanımın 12. slaytta olduğunu söylüyorsa 12. slaytı açın. Bir grafik etiketi okunamıyorsa ilgili metni yapıştırın veya daha net bir görsel yükleyin. İki ders kaynağı birbiriyle çelişiyorsa çelişkiyi görünür tutun; öğretim elemanına sorun veya dersinizin esas aldığı kaynağı kullanın.

Daha sonra dışarıdan bir açıklama isteyebilirsiniz. Bunu ayrı tutun:

```text
Ders kaynağı bu ön bilgiyi açıklamıyor. Genel bilginden yararlanarak DERS
MATERYALİNİN DIŞINDAN başlıklı bir bölümde açıkla. Bu açıklamayı dosyalarımdan
alınmış gibi sunma.
```

Bu etiket, genel bilginin fark edilmeden ders kaynağına dayalı kanıta dönüşmesini önlemeye yardımcı olur.

## Soruları tek tek sordurun, yanıtınızı beklesin

Kaynak haritası sağlam göründüğünde hatırlama alıştırmasına başlayın: Claude'un gösterdiği düzgün bir açıklamayı tanıdık bulmak yerine, yanıtı görmeden önce kendiniz üretin.

```text
Bana yalnızca kaynak haritasında kaynakla desteklenen materyal üzerinden rehberlik et.

Her seferinde bir soru sor ve yanıtımı bekle. Sorunun içinde ipucu verme.
Yanıtladıktan sonra:
1. yanıtı Doğru, Kısmen doğru, Yanlış veya Kaynak belirsiz olarak değerlendir;
2. neyin doğru, neyin eksik olduğunu açıkça söyle;
3. destekleyen dosyayı ve sayfa, slayt veya başlığı belirt;
4. tam yanıtı göstermeden önce bir kez daha denememi iste;
5. eksik konular kaydına yalnızca gerçek bir eksiği ekle.

Doğrudan hatırlama, benzer fikirler arasındaki ayrımlar ve kısa uygulama
sorularını karıştır. Henüz bilgi kartı oluşturma. 10 sorudan sonra dur ve kaydı göster.
```

Soruların tek tek gelmesi, sonraki soruların ipucu vermesini önler ve her denemeyi değerlendirmeyi kolaylaştırır. On soruluk bir listede zorlandığınız soruları atlamak veya yalnızca bildiğiniz kısımları yanıtlamak kolaydır.

Claude'dan soru türlerini de çeşitlendirmesini isteyin. Tanım soruları, bilmediğiniz terimleri ortaya çıkarır. Karşılaştırmalar, karıştırdığınız kavramları gösterir. Kısa uygulama soruları, bir fikri ifade eden sözleri tekrarlamanın ötesinde o fikri kullanıp kullanamadığınızı gösterir. Çok adımlı bir hesaplamayı kâğıtta çözün ve adımları gösterin; yalnızca sonuçtaki sayı, Claude'a hatanın nerede olduğunu anlamak için çok az bilgi verir.

## Kanıt ve belirsizlik kaydı tutun

Eksik konular kaydı bir puan tablosu değil, geriye dönüp kontrol edebileceğiniz bir kayıt olsun. Küçük bir tablo kullanın:

| Soru | Yanıtınız | Değerlendirme | Düzeltme | Kanıt | Belirsizlik | Sonraki adım |
| --- | --- | --- | --- | --- | --- | --- |
| Anafaz I'de ne ayrılır? | Kardeş kromatitler | Yanlış | Homolog kromozomlar ayrılır; kardeş kromatitler birbirine bağlı kalır | 4. ders, 18. slayt | Yok | Yeniden dene, sonra bir kart oluşturmayı değerlendir |

Kanıtın yanıtı kesinleştirmeye yetmediği durumlarda Claude'dan “Kaynak belirsiz” yazmasını isteyin. O satırı ezberlenecek bir bilgiye dönüştürmeyin. Önce belirsizliği giderin.

Belirsizlik sütunu daha az belirgin sorunları da yakalar: Claude'un okuyamadığı bir şekil, öğretim elemanının ders kitabından farklı anlamda kullandığı bir terim veya belirtilmemiş bir varsayıma dayanan sonuç. “Muhtemelen doğru” ile “18. slayt tarafından destekleniyor” aynı şey değildir.

## Uygulamalı örnek: öğretici açıklamadan kalıcı bir karta

Verilen ders notunda şunların yazdığını varsayalım:

> Anafaz I sırasında homolog kromozomlar zıt kutuplara hareket eder. Kardeş kromatitler sentromerlerinden birbirine bağlı kalır.

Claude “Anafaz I sırasında ne ayrılır?” diye soruyor. Siz “Kardeş kromatitler” diyorsunuz.

İşe yarayan öğretici geri bildirim kısa ve nettir:

```text
Yanlış. Anafaz I sırasında kardeş kromatitler birbirine bağlı kalır. İki cümleyi
tekrar kontrol et: zıt kutuplara hareket eden ne?
```

Yeniden denedikten sonra Claude bunun anafaz II'den nasıl farklı olduğunu açıklayabilir. Bu açıklama, ders çalışma sohbetinde kalmalı. Uzun vadede üzerinde durulacak eksik daha küçüktür:

```text
Ön yüz: Mayozun anafaz I evresinde ne ayrılır?
Arka yüz: Homolog kromozomlar; kardeş kromatitler birbirine bağlı kalır.
Kanıt: 4. ders, 18. slayt
```

Tek bir hatadan, odağı net ve yanıtı değerlendirilebilir tek bir kart çıktı. İpucu, yeniden deneme, açıklama ve cesaretlendirme o anda görevini yaptı; hepsini gelecekteki tekrarlarınıza taşımanız gerekmiyor.

## Düzeltmeye güvenmeden önce doğrulayın

Claude bir dosyayı yanlış okurken, dışarıdan bilgi katarken veya muğlak bir yanıtı kabul ederken bile yanıtı kesinmiş gibi sunabilir. Doğrulama, iddianın türüne uygun olmalı:

1. **Derse özgü bilgiler:** belirtilen sayfayı veya slaytı açın; ifadeleri, koşulları ve istisnaları kendiniz karşılaştırın.
2. **Çözümlü problemler:** adımları bağımsız olarak yeniden yapın, birimleri ve işaretleri kontrol edin; varsa resmî yanıt anahtarı veya öğretim elemanının açıklamasıyla karşılaştırın.
3. **Güncel bilgiler:** modelinizde ve hesabınızda web araması varsa Claude'dan arama yapmasını ve birincil kaynakları göstermesini isteyin. Bağlantıları açın; kaynak gösterilmesi bilgiyi kontrol etmenizi sağlar, ancak kontrolün yerini tutmaz.
4. **Hatanın ciddi sonuçlar doğurabileceği veya tartışmalı konular:** belirlenen ders kitabına, dersin öğretim kadrosuna veya dersinizin kabul ettiği başka bir yetkin kaynağa başvurun.

Anthropic'in [web araması rehberi](https://support.claude.com/en/articles/10684626-enable-and-use-web-search), arama yanıtlarının kaynak içerdiğini söylüyor ve önemli bilgilerin yetkin kaynaklarla karşılaştırılmasını öneriyor. Aramaya erişim değişebilir; erişiminiz yoksa Claude'un tahmin yürütmesine izin vermek yerine doğrudan güvenilir bir kaynak kullanın.

İşe yarayan bir doğrulama komutu, bilerek sıkı sınırlar koyar:

```text
Eksik konular kaydını denetle. Her düzeltme için kaynaktaki tam konumu ve onu
destekleyen kısa bir alıntı ver. Kaynak yanıtı doğrudan desteklemiyorsa
değerlendirmeyi KAYNAKLA DESTEKLENMİYOR olarak değiştir. Dış bilgiye, çıkarıma veya
okunamayan içeriğe dayanan yanıtları listele. Bu boşlukları tahmin ederek doldurma.
```

Ardından belirtilen materyali kendiniz inceleyin. Claude kanıtı bulmanıza yardımcı oluyor; kanıtın yerini almıyor.

## Neyi yeniden çalışmaya değer bulduğunuza karar verin

Her düzeltme bilgi kartına dönüşmemeli. Bazı eksikler için çözümlü bir örnek, bir şekil, öğretim elemanıyla görüşme veya başka bir alıştırma daha uygun olabilir.

Bir kart adayını şu durumlarda saklayın:

- yanlış veya yavaş yanıtladığınız ya da benzer bir fikirle karıştırdığınız bir sorudan doğduysa;
- yalnızca o soru için değil, daha geniş ölçekte önem taşıyorsa;
- tek bir açık soruyla ve kısa bir yanıtla sınanabiliyorsa;
- kontrol ettiğiniz bir kaynakla destekleniyorsa;
- yanında Claude sohbeti olmadan da anlamlı kalacaksa.

Şu durumlarda eleyin:

- kaynağın kendisi hâlâ belirsizse;
- soruyu kolayca ve tutarlı biçimde doğru yanıtladıysanız;
- soru bütün bir kompozisyonu veya süreci anlatmayı gerektiriyorsa;
- yanıt, belirtilmemiş koşullara göre değişiyorsa;
- beceriyi uygulamak, bir cümleyi ezberlemekten daha yararlı olacaksa.

Claude'dan bitmiş bir deste değil, kart adayları isteyin:

```text
Doğrulanmış eksik konular kaydını incele. Yalnızca tekrarlayan veya önemli olan
ve açıkça sınanabilecek eksikler için kart öner.

Her kartta tek bir bilgi hedefle. Ön yüzü belirgin, arka yüzü kısa tut.
Kanıtın yerini ve kalan belirsizlikleri ekle. Yalnızca pratikle giderilebilecek
eksikleri uygun birer alıştırmayla ayrı bir listeye koy. Henüz hiçbir şey kaydetme.
```

Geri kalanını eleyin. Claude ile bir çalışma oturumu, hiç kart üretmese de yararlı olabilir.

## İsteğe bağlı: kartları kaydedin, uygulamada veya sohbette tekrar edin

En basit aktarım yolu her bilgi kartı uygulamasıyla çalışır. Claude’dan yalnızca onayladığınız kartları sade ön yüz/arka yüz blokları olarak vermesini isteyin, bir kez daha kontrol edin ve alıştığınız tekrar sistemine kopyalayın.

Nibomo kullanıyorsanız Claude’u MCP üzerinden bağlayıp onayladığınız kartları kaydetmesini isteyebilirsiniz. Burada MCP, asistan ile Nibomo arasındaki bağlantıdır. Kaydetmesini istemeden önce kartların içeriğini ve nereye kaydedileceğini kontrol edin.

Kartların tekrar zamanı geldiğinde [Nibomo uygulamasını](https://app.nibomo.com/) açabilir veya MCP üzerinden Nibomo’ya bağladığınız Claude ya da Codex ile sohbette çalışabilirsiniz. Sohbette asistandan her seferinde tek bir soru sormasını, yanıtlamayı denemenizi beklemesini ve ancak sonra yanıtı göstermesini isteyin. Yanıtı gördükten sonra ne kadar iyi hatırladığınızı siz değerlendirin; asistan seçtiğiniz tekrar değerlendirmesini Nibomo’ya kaydeder.

Nibomo, ister uygulamada ister sohbette çalışmış olun, bu değerlendirmelerle sonraki tekrarları planlar. Böylece aynı tekrar takvimini koruyarak uygulama ile sohbet arasında geçiş yapabilirsiniz.

Bağlantıyı kurmak için İngilizce [adım adım Claude bağlayıcısı rehberine](/blog/how-to-connect-flashcards-to-claude-with-mcp/) ve [MCP bağlayıcısı başvuru belgesine](/docs/mcp-connector/) bakın. Asistanı bağlamak istemiyorsanız kartları elle kopyalamaya devam edebilirsiniz.

## Claude'un hâlâ gözetim gerektirdiği noktalar

Bu yöntem önlenebilir hataları azaltır; Claude'u kesin bilgi kaynağı hâline getirmez.

- Kaynak yanlışsa, kaynağın sınırları içinde kalan bir yanıt da yanlış olabilir.
- Dosyalardan çıkarılan içerik, özellikle şekillerde, tablolarda ve taranmış sayfalarda bağlamını kaybedebilir.
- Claude açık uçlu bir yanıtı gereğinden cömert veya kelimelere fazla bağlı biçimde değerlendirebilir.
- Uzun bir öğretici sohbet, başlangıçta belirlenen sınırdan uzaklaşabilir.
- Kolay ipuçları, kalıcı hatırlama yerine yalnızca tanıdıklık hissi yaratabilir.

Sohbet kapsamından uzaklaştığında adı belirtilen kaynaktan yeniden başlayın. Bir açıklama değiştiğinde kaynaktaki yerini yeniden sorun. İspat, kompozisyon yazma, telaffuz, laboratuvar çalışması veya programlama gibi becerilerde, hatırlama sorularının yanında doğrudan uygulamaya ve insan geri bildirimine de yer verin.

## Claude ile ders çalışırken son kontrol listesi

Oturumu bitirmeden önce şunları kontrol edin:

- yapay zekâ kullanımı, bu dersin ve ödevin kurallarına uyuyor;
- Claude belirsiz, okunamayan veya kaynakla desteklenmeyen her şeyi belirtti;
- yardım görmeden önce soruları tek tek yanıtladınız;
- her düzeltme, kendiniz açıp baktığınız bir kanıta işaret ediyor;
- dış bilgi, ders materyalinden ayrı olarak etiketlendi;
- çözülmemiş belirsizlikler bilgi kartına dönüşmedi;
- yalnızca uzun vadede önemli olan birkaç eksik kaldı;
- bağlayıcı üzerinden yapılan her yazma işlemi önce önizlendi ve onaylandı;
- seçtiğiniz her eksiğe yeniden dönmek için bir planınız var.

**Claude'u özel öğretmen olarak** verimli kullandığınızda, açıklama yapmanın ötesine geçer. Kaynağın nerede bittiğini gösterir, siz hatırlamaya çalışırken bekler ve gerçekte nerede takıldığınızı gösteren kısa bir kayıt bırakır. Claude ile ders çalışma yöntemini tekrarlamaya değer kılan, sohbetin uzunluğu değil bu kayıttır.
