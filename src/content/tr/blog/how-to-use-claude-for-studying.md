---
title: "2026'da Claude ile Nasıl Ders Çalışılır? Uygulanabilir Bir Yöntem"
description: "Claude ile kendi notlarınızdan çalışın, soruları tek tek yanıtlayın, düzeltmeleri doğrulayın ve dersinizin yapay zekâ kurallarına uyarak eksiklerinizi bilgi kartlarına dönüştürün."
date: "2026-05-28"
updated: "2026-10-22"
image: "/blog/how-to-use-claude-for-studying-v2.png"
keywords:
  - "Claude ile nasıl ders çalışılır"
  - "Claude ile ders çalışma"
  - "Claude ders çalışma yöntemi"
  - "Claude özel öğretmen"
  - "Claude bilgi kartları"
  - "Claude öğrenme modu"
---

**Claude ile nasıl ders çalışılır?** diye merak ediyorsanız, ders notlarınızın küçük bir bölümüyle başlayın. Bu notların hangi bilgileri desteklediğini kontrol edin ve yardım almadan önce soruları tek tek yanıtlayın. Düzeltmeleri doğrulayın, ardından yeniden çalışmanız gereken eksiklerinizi kaydedin. Son adım için [Claude için Nibomo eklentisini](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) öneriyorum: Claude'a bilgi kartı oluşturma, tekrar zamanı gelen kartları çalışma ve kafanızı karıştıran kartları iyileştirme iş akışları sağlar.

İşe yarayan döngü şu: **kaynağı kontrol et → hafızadan yanıtla → doğrula → kaydet → zamanı gelince tekrar et**. Aşağıdaki öğretici komutlar sıradan bir Claude sohbetinde kullanılabilir; eklenti ise bu oturumu kaydedilmiş kartlara ve bir tekrar takvimine bağlar.

> **Açıklama:** Ben Kirill Markin, [Nibomo](/tr/features/)'yu geliştiriyorum. Bu yazının araştırma ve düzenleme aşamalarında yapay zekâdan yararlanıldı.

**Bilgilerin kontrol edildiği tarih:** 22 Ekim 2026.

![Kaynak notlarını bir soruya ve doğrulanmış iki eksik konu kartına bağlayan, belirsiz bir notun kenara ayrıldığı çalışma masası](/blog/how-to-use-claude-for-studying-v2.png)

## Claude ile ders çalışmanın kısa özeti

Bir ders bölümü, okuma metni veya alıştırma seti için şu döngüyü uygulayın:

1. Dersinizde yapay zekâ kullanımına hangi sınırlar içinde izin verildiğini kontrol edin.
2. Claude'a küçük ve kapsamı açıkça belirtilmiş bir kaynak grubu verin.
3. Konuyu anlatmadan önce eksik, çelişkili veya okunamayan bilgileri işaretlemesini isteyin.
4. Soruları tek tek hafızanızdan yanıtlayın.
5. Düzeltmeyi, kaynaktaki yerini ve varsa belirsizliği kaydedin.
6. Önemli yanıtları kendiniz doğrulayın.
7. Doğruladığınız ve uzun vadede önemli olan birkaç eksiğinizi Nibomo’da bilgi kartı olarak kaydedin.
8. Kaydedilmiş kartları tekrar zamanı geldiğinde Claude’da veya Nibomo uygulamasında çalışın.

Sıralama önemli. Belirsiz bir kaynaktan soru çözmek, belirsizliği fark etmeyi daha da zorlaştırır.

## Claude’da Nibomo’yu kurun

[Nibomo eklentisini](https://claude.ai/customize/plugins/id/d8c1028d-4318-4da5-8514-1ed3e0b9a09e%40anthropic-plugin-directory) açın veya **Customize → Plugins** bölümüne gidip Nibomo’yu bulun ve **Add** düğmesine tıklayın. Zaten kuruluysa etkin olduğundan emin olun.

Eklentiyle birlikte gelen Nibomo bağlayıcısıyla bağlantıyı kurun. Oturum açma adımlarını izleyin, Nibomo hesabınıza giriş yapın veya bir hesap oluşturun ve Claude’a erişim izni verin. Sorulduğunda kullanmak istediğiniz çalışma alanını seçin. Bu yol için API belirteci kopyalamanız veya sunucu adresi girmeniz gerekmez.

Eklenti, kart oluşturma, tekrar ve iyileştirme iş akışlarını sağlar. MCP bağlayıcısı ise Claude’un Nibomo hesabınızı okuyup güncellemesini sağlayan bağlantıdır. [Bağlayıcıyı Claude dizininde](https://claude.ai/directory/nibomo) de bulabilirsiniz. [Claude bağlantı rehberimiz](/blog/how-to-connect-flashcards-to-claude-with-mcp/) (İngilizce) ve [MCP bağlayıcısı başvuru belgesi](/tr/docs/mcp-connector/) bu bağlantıyı daha ayrıntılı açıklar.

Anthropic şu anda eklentileri [Pro, Max, Team ve Enterprise planlarında](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), Claude’un web sürümünde, Claude Desktop’ın Chat sekmesinde ve Cowork’te sunuyor. Hesabınızda eklentiler yoksa aşağıdaki öğretici komutları yine kullanabilir ve seçtiğiniz kartları tekrar uygulamanıza elle kopyalayabilirsiniz.

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

[Claude Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) tüm kullanıcılara açık; Free hesapları şu anda beş projeyle sınırlı. Kullanacağınız ders dosyalarını ve çalışma talimatlarını projenin bilgi bölümüne (Project knowledge) ekleyin; böylece o projedeki sohbetlerde kullanılabilirler.

Bellek etkin olduğunda Project, hatırlanan bağlamı sohbetler arasında da taşıyabilir. Bu belleği çalışma bağlamı olarak kullanın; eksiksiz ve güvenilir bir sohbet dökümü veya kaynak dosyaların yerine geçen bir kayıt olarak görmeyin. Yeniden kullanmanız gereken kanıtları ve düzeltmeleri Project knowledge bölümünde saklayın ve Claude’dan özgün materyale atıf yapmasını isteyin.

Claude'un [dosya yükleme belgeleri](https://support.claude.com/en/articles/8241126-upload-files-to-claude) şu anda PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON ve XLSX dosyalarını; ayrıca JPEG, PNG, GIF ve WebP görsellerini listeliyor. XLSX yüklemek için kod çalıştırma ve dosya oluşturma özelliklerinin açık olması gerekiyor. Bir dosyayı tek bir sohbete ekleyebilir veya yeniden kullanmak için projenin Files bölümünde saklayabilirsiniz.

İşe yarayan en küçük kaynak grubunu kullanın: bir ders, bir bölümün alt başlığı veya az önce yanlış yanıtladığınız sorular. Komutta “8–17. slaytlar” ya da “Genetik Bağlantı başlıklı bölüm” gibi açık bir sınır belirtin. Küçük bir kaynak grubu, kanıtları bulmayı ve bilgilerin yanlışlıkla birbirine karışmasını fark etmeyi kolaylaştırır.

Anthropic, [Claude for Education Projects içinde **Learning mode** özelliğini](https://www.anthropic.com/news/introducing-claude-for-education), yanıtları hemen vermek yerine öğrencileri akıl yürütmeye yönlendiren Sokratik bir öğrenme deneyimi olarak tanıttı. Üniversiteniz Claude for Education sunuyorsa bu özelliğe erişiminiz olabilir, ancak her kişisel Claude hesabında bulunduğunu varsaymayın. Aşağıdaki komutlar, normal bir sohbette benzer biçimde sorularla ilerleyen bir oturum kurar.

## Konuyu anlatmadan önce belirsizlikleri ortaya çıkarmasını isteyin

Bir ders slaytında “kromozomlar ayrılır” yazıyor, ama hangilerinin ayrıldığı belirtilmiyor. Claude bu boşluğu size söylemeden genel bilgisiyle doldurursa, kaynağınızın hiç ortaya koymadığı bir yanıtı kesin bir bilgiymiş gibi tekrar etmeye başlayabilirsiniz.

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
2. tam yanıtı açıklamadan kısa bir geri bildirim ver;
3. destekleyen dosyayı ve sayfa, slayt veya başlığı belirt;
4. yanıtım kısmen doğru veya yanlışsa bir ipucu ver ve tam yanıtı göstermeden
   önce yeniden denememe izin ver;
5. eksik konular kaydına yalnızca gerçek bir eksiği ekle.

Kaynak belirsizse yeniden denememi istemek yerine soruyu doğrulanmak üzere işaretle.

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

Verdiğiniz materyal anafaz II’yi de ele alıyorsa Claude, yeniden denedikten sonra iki evreyi karşılaştırabilir. Bu açıklama, ders çalışma sohbetinde kalmalı. Uzun vadede üzerinde durulacak eksik daha küçüktür:

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

## Doğrulanmış eksiklerinizi Nibomo’ya kaydedin

Kanıtları kontrol ettikten sonra Nibomo eklentisinden seçtiğiniz eksikleri kaydedilmiş kartlara dönüştürmesini isteyin. Çalışma alanını belirtin ve yeni kart eklemeden önce mevcut kartları kontrol ettirin. Kaydetmeden önce önizleme isteyen bir komut örneği:

```text
Yukarıdaki doğrulanmış eksik konular kaydından Nibomo ile en fazla 5 bilgi kartı oluştur.
Kullanmak istediğim çalışma alanı: [çalışma alanı adı]. Ad belirsizse kaydetmeden
önce hangi çalışma alanı olduğunu netleştir.

Mevcut kartlarda yinelenen veya aynı bilgiyi sınayan kartlar olup olmadığını
kontrol et. Yalnızca kontrol ettiğim kanıtlarla desteklenen eksikleri kullan.
Her kartta tek bir bilgiyi sına; ön yüzü belirgin, arka yüzü kısa tut ve kaynağın
konumunu ekle.

Önce önerdiğin kartları, kanıtlarını ve benzer ya da yinelenen kartları göster.
Kaydetmeden önce onayımı bekle. Kaydettikten sonra hangi kartların hangi çalışma alanında oluşturulduğunu
teyit et.
```

Önizleme, bu komutla belirlediğiniz bir tercihtir. Claude’dan kartları kaydetmesini veya düzenlemesini istemeden önce ne kadar inceleme yapmak istediğinizi seçebilirsiniz; her eklenti işlemi için önizleme zorunlu değildir.

Uygulamalı örnekteki ayrımı koruyun: açıklama mayozu anlamanıza yardımcı oldu; kaydedilen kart ise karıştırdığınız belirli ayrımı sınar. Uzun bir öğretici yanıtın uzun bir karta dönüşmesi nadiren gerekir.

## Tekrar zamanı gelen bilgi kartlarını Claude’da çalışın

Yeni yüklenen notlarla yapılan soru-cevap çalışması bir öğretici oturumdur. Nibomo’da zamanı gelen kartların tekrarı ise önceden kaydettiğiniz kartları kullanır ve her kartın ne zaman yeniden karşınıza çıkacağını etkileyen bir sonuç kaydeder. Bunu açıkça isteyin:

```text
Nibomo ile [çalışma alanı adı] içindeki tekrar zamanı gelmiş bilgi kartlarımı
bana tek tek sorarak 10 dakika boyunca tekrar yapmamı sağla.
Saat dilimim olarak Europe/Paris kullan.

Her seferinde bir soru göster ve kayıtlı yanıtı açıklamadan önce benim yanıtlamayı
denememi bekle. Ardından ilk denememi bu yanıtla karşılaştır, kısa bir geri
bildirim ver ve hatırlama düzeyime uygun değerlendirmeyi kaydet. Hangi
değerlendirmeyi kaydettiğini söyle. Yanıtı gördükten sonra verdiğim düzeltilmiş
yanıtı değil, ilk denememi değerlendir.
Süre dolduğunda veya tekrar zamanı gelen kart kalmadığında dur ve Nibomo’nun
kaydedildiğini teyit ettiği tekrarları özetle.
```

Çalışma alanını ve saat dilimini kendinize göre değiştirin. Claude normalde değerlendirmesini söyler ve otomatik olarak kaydeder. Her değerlendirmeyi kendiniz seçmek istiyorsanız şunu ekleyin: “Manuel değerlendirme modunu kullan: yanıtı açıkladıktan sonra kaydetmeden önce Again, Hard, Good veya Easy seçeneklerinden birini seçmemi bekle.”

Anafaz I kartına “kardeş kromatitler” yanıtını verirseniz, yanıt açıklandıktan sonra düzeltmeyi tanımak ilk denemenizi doğru yapmaz. Daha sonra sorulan bir anafaz II sorusu, iki evreyi artık ayırt edip edemediğinizi sınayabilir; ilk değerlendirmenizi geriye dönük olarak yükseltmemelidir.

[Nibomo uygulamasında](https://app.nibomo.com/) da tekrar yapabilirsiniz. Kaydedildiği teyit edilen tekrarlar, ister uygulamada ister Claude’da yapılmış olsun, aynı takvimi günceller. Böylece iki ayrı tekrar geçmişi tutmadan aralarında geçiş yapabilirsiniz. Claude’dan başarısız veya kaydedildiği teyit edilmemiş bir işlemi kaydedilmiş ilerleme saymak yerine açıkça bildirmesini isteyin.

## Kafanızı karıştıran kartları iyileştirin

Tekrarlayan yanlışlar, muğlak bir soruyu, fazla bilgi içeren bir yanıtı veya eksik bir koşulu ortaya çıkarabilir. Yalnızca daha fazla tekrar gerektiğine karar vermeden önce Claude’dan kartı incelemesini isteyin:

```text
Bu oturumda kafa karıştırıcı bulduğum kartları Nibomo ile denetle. Muğlak ön
yüzleri, birden fazla bilgiyi sınayan kartları, eksik koşulları, kaynakla
desteklenmeyen yanıtları ve yinelenen kartları kontrol et. Önerilen düzeltmeleri
yukarıdaki ders kanıtlarıyla karşılaştır.

Mevcut kartı ve önerilen değişikliği kısa bir gerekçe ve kaynak konumuyla birlikte
yan yana göster. Kanıtların kesinleştiremediği her şeyi işaretle. Düzenlemeden
önce onayımı bekle; kartları silme veya belirsizliği giderilmemiş bilgileri değiştirme.
```

Soru açıksa ve yanıtı yalnızca hatırlayamadıysanız kartı olduğu gibi bırakın. Şekil veya başka bir çözümlü problem gerektiren eksikler için öğretici çalışmaya ya da doğrudan uygulamaya dönün.

Elle kopyalamayı tercih ediyorsanız Claude’dan onayladığınız kartları sade ön yüz/arka yüz blokları olarak isteyin ve alıştığınız bilgi kartı uygulamasına ekleyin. Kaynak kontrolü ve önce sizin yanıtlamanızı bekleyen çalışma yöntemi yine geçerlidir.

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
- yardım almadan önce soruları tek tek yanıtladınız;
- her düzeltme, kendiniz açıp baktığınız bir kanıta işaret ediyor;
- dış bilgi, ders materyalinden ayrı olarak etiketlendi;
- çözülmemiş belirsizlikler bilgi kartına dönüşmedi;
- doğruladığınız ve uzun vadede önemli olan yalnızca birkaç eksik kaydedilmiş kartlara dönüştü;
- kartlar gereksiz yinelemeler olmadan doğru çalışma alanına kaydedildi;
- zamanı gelen tekrarlar için otomatik veya manuel değerlendirmeyi seçtiniz;
- değerlendirmeler ilk denemenizi yansıtıyor ve tekrarların kaydedildiği teyit edildi;
- sıradaki planlı tekrar için nereye döneceğinizi biliyorsunuz.

**Claude'u özel öğretmen olarak** verimli kullandığınızda, açıklama yapmanın ötesine geçer. Kaynağın nerede bittiğini gösterir, siz hatırlamaya çalışırken bekler ve gerçekte nerede takıldığınızı gösteren kısa bir kayıt bırakır. Claude ile ders çalışma yöntemini tekrarlamaya değer kılan, sohbetin uzunluğu değil bu kayıttır.
