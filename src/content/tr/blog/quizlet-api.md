---
title: "Quizlet'in 2026'da herkese açık bir API'si var mı? Güncel durum ve güvenli alternatifler"
description: "Quizlet'in API'si var mı? 18 Ağustos 2026 itibarıyla, geliştiricilerin doğrudan erişebildiği belgelenmiş, herkese açık bir API yok. Desteklenen alternatifleri karşılaştırın."
image: "/blog/quizlet-api.png"
date: "2026-08-18"
updated: "2026-10-03"
keywords:
  - "Quizlet API"
  - "Quizlet API var mı"
  - "Quizlet herkese açık API"
  - "Quizlet geliştirici API"
  - "Quizlet API alternatifi"
  - "çalışma kartlarını otomatikleştirme"
---

18 Ağustos 2026 itibarıyla Quizlet'in belgelerinde, geliştiricilerin doğrudan kayıt olup kullanabildiği herkese açık bir API veya geliştirici portalı yer almıyor. Bağımsız bir geliştiricinin uygulama kaydetmesi, Quizlet API anahtarı alması ve belgelenmiş uç noktalar üzerinden çalışma kartı verilerini okuması ya da yazması için güncel, resmî bir yol yok.

Bu tespit, Quizlet'in herkese açık belgeleriyle ilgili; şirketin iç sistemleri hakkında bir iddia değil. Quizlet'in ürün ve iş ortağı entegrasyonları elbette var. ChatGPT uygulaması ve Google Classroom eklentisi güncel iki örnek. Ancak bunların hiçbiri diğer uygulamalara genel amaçlı bir Quizlet geliştirici API'si açmıyor.

**Bilgilerin doğrulandığı tarih:** 18 Ağustos 2026.

> **Açıklama:** Ben Kirill Markin. Aşağıda alternatif olarak yer verdiğim Agent API ve MCP sunucusunu sunan Nibomo'yu geliştiriyorum. Nibomo, Quizlet ile uyumlu değildir ve Quizlet setlerini otomatik olarak içe aktarmaz.

![Quizlet dışa aktarma, sayfaya gömme, belirli ürün entegrasyonları ve belgelenmiş bir çalışma kartı API'sini karşılaştıran geliştirici](/blog/quizlet-api.png)

## Kısa cevap: doğrudan erişilebilen, belgelenmiş bir Quizlet API'si yok

Quizlet'in kendisindeki işlemleri otomatikleştirmek için “Quizlet'in API'si var mı?” diye aradıysanız, bugünkü pratik cevap şu: **Geliştiricilerin doğrudan kayıt olup kullanabildiği, herkese açık bir API belgelenmiş değil.**

Bazı resmî özellikler dışarıdan bakıldığında API'ye benzer görünebilir. Ancak daha dar kapsamlı ihtiyaçları karşılarlar:

| İhtiyacınız | Desteklenen yöntem | Ne işe yarar? | Neleri sağlamaz? |
|---|---|---|---|
| Oluşturduğunuz bir setteki metni taşımak | [Quizlet web sitesinden dışa aktarma](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets) | Terim ve tanımların tek seferlik kopyasını almak | Görseller, kopyalanmış setlerin dışa aktarılması, çalışma geçmişi veya API erişimi |
| Herkese açık bir seti web sitesine veya LMS sayfasına yerleştirmek | [Quizlet sayfaya gömme](https://help.quizlet.com/hc/en-us/articles/360032935851-Embedding-sets) | Sayfanızda Quizlet markasıyla bir çalışma etkinliği sunmak | Yapılandırılmış kart verisi veya okuma/yazma erişimi |
| Bir ChatGPT konuşmasını Quizlet setine dönüştürmek | [ChatGPT'deki Quizlet uygulaması](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) | `@Quizlet` aracılığıyla set oluşturup önizlemek | Kendi uygulamanız için kimlik bilgileri veya uç noktalar |
| Google Classroom'da Quizlet çalışması atamak | [Quizlet Google Classroom eklentisi](https://quizlet.com/blog/quizlet-google-classroom-add-on) | Classroom içinde etkinlik bulmak, atamak ve takip etmek | Özel eğitim yazılımları için genel amaçlı bir API |
| Kendi Quizlet entegrasyonunuzu geliştirmek | Şu anda doğrudan kayıt olup erişebileceğiniz belgelenmiş bir yol yok | Belirli bir iş ortağı anlaşması bulunabilir | Herkese açık kayıt, API anahtarları veya belgelenmiş bir kart erişim sözleşmesi |
| Kendi çalışma kartı alanınızdaki işlemleri otomatikleştirmek | [Nibomo Agent API](/tr/docs/api/) veya [MCP bağlantısı](/tr/docs/mcp-connector/) | Çalışma alanıyla sınırlı kart ve deste okuma/yazma işlemlerini tekrarlamak | Quizlet uyumluluğu veya otomatik Quizlet içe aktarımı |

Aradaki fark basit: Kendi kart metninizi bir kez kopyalamak, dışa aktarma işidir. Quizlet'i başka bir sayfada göstermek, sayfaya gömme işidir. Belirli bir ürün için sunulan entegrasyon, yalnızca o ürünün akışı içinde çalışır. Kartları tekrar tekrar oluşturan, okuyan ve düzenleyen yazılımlar ise belgelenmiş bir okuma/yazma API'sine ihtiyaç duyar.

## Dışa aktarma, sayfaya gömme ve iş ortağı erişimi herkese açık API değildir

Herkese açık bir API, dışarıdan geliştiricilere bir kullanım sözleşmesi sunar: belgeler, kimlik doğrulama, desteklenen işlemler, kullanım kuralları ve kimlik bilgilerini edinme yolu. Quizlet'in şu anda herkese sunduğu özelliklerin hiçbiri, geliştiricinin doğrudan erişebileceği bu eksiksiz yolu sağlamıyor.

Quizlet'te **dışa aktarma**, elle yapılan bir taşıma işlemidir. Seti oluşturan kişi web sitesinde terim ve tanımların düzenini belirleyebilir, **Metni kopyala (Copy text)** seçeneğini seçebilir ve sonucu başka bir yere yapıştırabilir. Quizlet, görsellerin dışa aktarılamadığını, kopyalanmış setlerin dışa aktarılamadığını ve bu özelliğin yalnızca web sitesinde kullanılabildiğini belirtiyor. Bu yöntem, dikkatli yapılan tek seferlik bir taşıma için uygundur. Yazılımın iki sistemi sürekli eşitlemesini sağlamaz.

**Sayfaya gömme**, veri erişimi değil, sunum sağlar. Quizlet, herkese açık bir set için Eşleştir (Match), Öğren (Learn), Test, Çalışma kartları (Flashcards) veya Yazım (Spell) modunda HTML kopyalamanıza izin verir. Sayfaya gömülen etkinlik Quizlet logosunu korur ve öğrenciler Quizlet arayüzünü kullanır. Uygulamanız seti, düzenleyebileceği kart kayıtları olarak almaz.

**Belirli bir ürün entegrasyonunun** kendine ait, üzerinde anlaşılmış bir kullanım akışı vardır. Quizlet, aynı arayüzü her geliştiriciye açmadan ChatGPT veya Google Classroom ile çalışabilir. Bu duyurular, söz konusu entegrasyonların var olduğunu gösterir; arkalarında genel kullanıma açık bir Quizlet API'si olduğunu göstermez.

Bu nedenle eski bir API sarmalayıcısı veya tarayıcı geliştirici araçlarında görünen bir istek de desteklenen bir Quizlet API'si sayılmaz. Eksik olan parçalar, herkese açık belgeler ve kararlı bir geliştirici sözleşmesidir.

## Yapacağınız işe uygun yöntemi seçin

### Tek seferlik yedekleme veya taşıma için dışa aktarmayı kullanın

Kendi oluşturduğunuz bir set için Quizlet'in resmî dışa aktarma akışını kullanın. Akış **Metni kopyala (Copy text)** seçeneğiyle bittiğinden, ayırıcıları temizlemeden veya alanları eşleştirmeden önce ilk yapıştırdığınız kopyayı olduğu gibi saklayın. Terim ve tanımları koruyorsunuz; geri yüklenebilen bir deste paketi indirmiyorsunuz. Görseller ve çalışma geçmişi Quizlet'te kalır.

Pratik kontrol listesi [2026'da Quizlet setleri nasıl dışa aktarılır?](/tr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) rehberinde bulunuyor. Rehber; ham kopyayı ve üzerinde çalışacağınız kopyayı, UTF-8'i, sekme karakterlerini, çok satırlı tanımları ve kart içeriğini taşımakla tekrar planı bilgilerini taşımak arasındaki farkı ele alıyor.

Dışa aktarma, tek seferlik bir taşıma işlemi için uygundur. Yazılım üzerinden günlük kart oluşturma, eşitleme veya tekrarlanan düzenlemeler için uygun değildir.

### Sayfada göstermek için resmî gömme özelliğini kullanın

Öğrencilerin herkese açık bir Quizlet setine sınıf sitesinden veya LMS sayfasından çalışmasını istiyorsanız Quizlet'in web sitesinde sunduğu gömme kodunu kullanın. Etkinliği seçin, **HTML'yi kopyala (Copy HTML)** seçeneğine tıklayın ve sonucu sayfaya ekleyin. Öğrenciler etkileşimli bir Quizlet etkinliğine erişir; etkinliği barındıran site ham kart verisi akışı almaz.

Bir öğretmenin ihtiyacı çoğu zaman bundan ibarettir. Buna API demek, ihtiyacı olduğundan daha karmaşık gösterir.

### ChatGPT veya Google Classroom için ilgili entegrasyonu kullanın

Quizlet'in 10 Mart 2026 tarihli ChatGPT duyurusu belirli bir akışı açıklıyor: Quizlet uygulamasını bağlayın, isteminizi `@Quizlet` ile başlatın, oluşturulan seti ChatGPT'de önizleyin, ardından kişiselleştirmek ve çalışmak için Quizlet'te açın. Bu, o konuşmadan Quizlet seti oluşturmanın desteklenen bir yoludur. Botunuza, betiğinize veya web sitenize yeniden kullanabileceğiniz bir Quizlet API kimlik bilgisi vermez.

Quizlet'in 30 Haziran 2026 tarihli Google Classroom duyurusu da benzer biçimde belirli bir akışa odaklanıyor. Eklenti, eğitimcilerin alıştırma soruları, çalışma kartları ve oyunlar gibi etkinlikleri bulup atamasını, ardından Classroom akışı içinde katılımı ve ilerlemeyi takip etmesini sağlıyor. Quizlet, Google Workspace for Education Plus gerektiğini belirtiyor; eğitimciler için BT yöneticilerinin izin vermesi veya eklentiyi kullanıma açması gerekebilir.

Bu akışlardan biri hedefinize zaten uyuyorsa onu kullanın. Özel bir uygulamaya ihtiyacınız varsa bu entegrasyonların hiçbiri herkese açık geliştirici erişiminin yerini tutmaz.

### Sürekli otomasyon için belgelenmiş bir okuma/yazma arayüzü seçin

Sürekli otomasyon, yazılımınızın aynı işi birden fazla kez güvenilir biçimde yapmasını gerektirir: notlardan kart oluşturmak, desteleri listelemek, cevapları güncellemek veya zaman içinde bir çalışma alanını yönetmek. Panoya metin kopyalayan dışa aktarma işlemi bu sözleşmeyi sağlayamaz.

Güvenli yol, harici yazılımların nasıl kimlik doğrulayacağını ve hangi okuma/yazma işlemlerinin desteklendiğini açıkça belgeleyen bir çalışma kartı sistemi kullanmaktır. Bu, otomatikleştireceğiniz akış için bir Quizlet API alternatifi seçip Quizlet'i desteklediği çalışma etkinlikleri için kullanmaya devam etmek anlamına gelebilir.

## Nibomo API alternatifi gerçekte ne sağlar?

Nibomo, aynı sınırlı ve kullanıcıya özel veri kapsamına erişmek için iki yol yayımlıyor:

- [Harici Agent API](/tr/docs/api/), `GET https://api.nibomo.com/v1/` adresinden başlar. Keşif yanıtı, bir ajanı e-postayla gelen tek kullanımlık kodla (OTP) giriş yapma, API anahtarı oluşturma ve çalışma alanı seçme adımlarında yönlendirir. Okuma işlemleri SQL benzeri bir sorgu rotasını, yazma işlemleri ise ayrı bir yürütme rotasını kullanır.
- [Uzak MCP sunucusu](/tr/docs/mcp-connector/), `https://mcp.nibomo.com/mcp` adresinde kullanılabilir. MCP istemcilerine sekiz araç sunulur: `list_workspaces`, `sql_query`, `sql_execute`, `get_guide` ve tekrar araçları `next_review_card`, `reveal_answer`, `submit_review`.

`get_usage_limits` — yalnızca okuma erişimiyle hesap planını, limitleri ve geçerli ayın yapay zekâ kullanımını gösterir; kartları okumaz veya değiştirmez.

Her iki yol da çalışma alanıyla sınırlıdır. Yayımlanan kaynaklar `workspace`, `cards`, `decks` ve `review_events` olarak tanımlanır; sonuçlar, her ifade için en fazla 100 satırla sınırlıdır. SQL benzeri arayüz, doğrudan PostgreSQL değil, sınırlı bir SQL lehçesidir. OpenAPI şeması yoktur; dolayısıyla OpenAPI şemasından üretilen istemcilere dayanan akışlar için farklı bir arayüz gerekir.

Bu, bir geliştiricinin veya yapay zekâ ajanının kendi kartlarıyla yaptığı işlemleri otomatikleştirmesine yardımcı olabilir. Bir Quizlet URL'sini okuyamaz, Quizlet hesabını kopyalayıp eşitleyemez veya belgelenmemiş bir Quizlet istemcisi gibi çalışamaz. Otomatik Quizlet içe aktarıcısı yoktur. Taşıma için önce kendi setinizdeki terim ve tanımları dışa aktarın, metni gözden geçirin ve ardından hedef sistemin kart alanlarıyla eşleştirin. Hedef sistem kendi çalışma durumunu oluşturur; Quizlet geçmişi taşınmaz.

API erişimi dışındaki ürün farkları için [açık kaynaklı Quizlet alternatifi karşılaştırmasına](/blog/quizlet-alternative/) bakın.

## Tarayıcının dahili istekleri güvenli bir kestirme yol değildir

Quizlet'in web arayüzü, her modern web uygulaması gibi ağ istekleri yapar. Bu isteklerden birini bulmak, onu programınız için desteklenen bir uç noktaya dönüştürmez.

Tarayıcının kullandığı dahili uç noktalar; oturum çerezlerine, dahili biçimlere, kötüye kullanımı önleme kontrollerine ve mevcut arayüze bağlı varsayımlara dayanabilir. Herkese açık sürümleme veya geçiş rehberi olmadan değişebilirler. Daha doğrudan bir kısıt da var: Son güncellemesi 28 Mayıs 2026 olan [Quizlet Hizmet Şartları](https://quizlet.com/tos), web kazıma ve diğer otomatik veri çıkarma yöntemlerinin yanı sıra hizmetin yetkisiz otomatik kullanımını da yasaklıyor.

Bu, bir ürün bir yana, kişisel bir betik için bile kırılgan ve riskli bir temeldir. Burada tahminî uç noktalar veya tersine mühendislik adımları paylaşmayacağım.

Kendi setinizi tek seferlik taşımak için dışa aktarmayı kullanın. Öğrencilerin herkese açık bir sete başka bir sayfadan erişmesi gerekiyorsa seti sayfaya gömün. ChatGPT veya Google Classroom akışları için ilgili entegrasyonu kullanın. Tekrarlanan okuma/yazma işlemleri için otomasyon sözleşmesini belgeleyen bir yazılım seçin ya da Quizlet böyle bir sözleşme yayımlayana kadar Quizlet tarafındaki işlemleri elle yapın.

## Durumun değiştiğini nasıl anlarsınız?

Quizlet, bu yazının bilgilerinin doğrulandığı tarihten sonra bir geliştirici programı başlatabilir. Aranacak işaret; kimlerin kayıt olabileceğini, kimlik doğrulamanın nasıl çalıştığını, hangi kart işlemlerinin desteklendiğini ve hangi kullanım kurallarının geçerli olduğunu açıklayan resmî bir geliştirici portalı veya belgelerdir.

Yeni bir üçüncü taraf sarmalayıcı bu cevabı değiştirmez. Yeni bir ürün ortaklığı da değiştirmez. Quizlet, geliştiricilerin doğrudan erişebileceği bir yol belgeleyene kadar güncel bir Quizlet API'si bulunduğu iddialarına temkinli yaklaşın ve yapacağınız işe uygun, desteklenen yöntemi seçin.
