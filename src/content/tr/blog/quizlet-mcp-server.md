---
title: "Quizlet'in 2026'da MCP Sunucusu Var mı? Claude ve Codex Neleri Kullanabilir?"
description: "Quizlet, 2026'da bir MCP sunucusu belgelemiyor. ChatGPT uygulamasını, yalnızca seti oluşturanların kullanabildiği dışa aktarmayı ve Claude veya Codex ile düzenli erişim için güvenli bir yolu karşılaştırın."
image: "/blog/quizlet-mcp-server.png"
date: "2026-09-12"
updated: "2026-10-03"
keywords:
  - "Quizlet MCP"
  - "Quizlet MCP sunucusu"
  - "Quizlet Claude bağlayıcısı"
  - "Quizlet'i Claude'a bağlama"
  - "Quizlet Codex"
  - "Quizlet ChatGPT uygulaması"
  - "Quizlet API alternatifi"
---

12 Eylül 2026 itibarıyla Quizlet'in herkese açık belgelerinde bir MCP sunucusu veya geliştiricilerin kendi başlarına kullanmaya başlayabileceği herkese açık bir API tanımlanmıyor. Claude, Codex veya başka bir MCP istemcisine yapıştırmak için bir Quizlet MCP URL'si aradıysanız, bugün Quizlet'in belgelerinde herkese açık bir kurulum yolu bulunmuyor.

Quizlet'in ChatGPT içinde resmî bir uygulaması var. Bu uygulama, bir ChatGPT konuşmasını yeni bir Quizlet setine dönüştürebiliyor; ancak tanımlanan bu iş akışı, tekrar tekrar kullanılabilen bir Quizlet MCP sunucusu değil. Bir ajanın mevcut kartlara düzenli olarak erişmesi gerekiyorsa uygulanabilir yol şu: oluşturduğunuz bir setten metni dışa aktarın, ham bir kopyasını saklayın, aktarımı gözden geçirin ve ajanların okuma ve yazma işlemlerini açıkça destekleyen bir çalışma kartı sistemi kullanın.

**Bilgilerin kontrol edildiği tarih:** 12 Eylül 2026.

> **Açıklama:** Ben Kirill Markin. Aşağıda MCP sunucusu ve Agent API'si alternatif olarak yer alan Nibomo'yu geliştiriyorum. Nibomo, bir Quizlet hesabına bağlanamaz veya bir Quizlet URL'sini içe aktaramaz.

![Bir bahçıvan, kapalı bir seradan aldığı bir fideyi dallanan damla sulama hatları bulunan bir ekim alanına taşıyor](/blog/quizlet-mcp-server.png)

## ChatGPT uygulaması, dışa aktarma ve MCP farklı işlere yarar

[Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro), yapay zekâ uygulamalarını harici sistemlere bağlamak için kullanılan açık bir standarttır. Bir MCP sunucusu normalde uyumlu istemcilere bilinen bir uç nokta ve çağırabilecekleri tanımlı bir araç kümesi sunar.

Quizlet'in [resmî ChatGPT duyurusu](https://quizlet.com/blog/quizlet-comes-to-chat-gpt) farklı bir işleyişi anlatıyor. Quizlet uygulamasını ChatGPT'ye yükler, isteminize `@Quizlet` ile başlar, oluşturulan çalışma kartlarını ChatGPT içinde önizler, ardından kişiselleştirmek ve çalışmak için seti Quizlet'te açarsınız.

Yapmak istediğiniz şey “bu ChatGPT konuşmasını bir Quizlet setine dönüştürmek” ise bu kullanışlıdır. Duyuru, genel kullanıma yönelik bir Quizlet MCP uç noktası yayımlamıyor, Claude veya Codex'e Quizlet kitaplığınıza erişim vermiyor ya da tekrar kullanılabilir geliştirici kimlik bilgileri sunmuyor.

Bu, Quizlet'in özel veya şirket içi altyapısı hakkında hiçbir şey söylemez. Yalnızca Quizlet'in herkese açık belgelerinde kullanıma sunduğu arayüzü tarif eder. Geliştirici erişiminin daha geniş sınırlarını [Quizlet'in 2026'da Herkese Açık Bir API'si Var mı?](/tr/blog/quizlet-api/) yazısında bulabilirsiniz.

Aradaki ayrım şöyle:

| Asıl yapmak istediğiniz | Bugün en iyi desteklenen yol | Ne beklemelisiniz? |
| --- | --- | --- |
| Bir ChatGPT konuşmasından yeni bir Quizlet seti oluşturmak | Quizlet'in resmî ChatGPT uygulaması | ChatGPT içinde tanımlanmış bir `@Quizlet` akışı, ardından düzenleme ve çalışma için Quizlet |
| Oluşturduğunuz bir setteki terimleri ve tanımları taşımak | Quizlet'in web sitesindeki dışa aktarma özelliği | Saklayıp kontrol edeceğiniz, tek seferlik bir metin kopyası |
| Claude, Codex veya başka bir ajanın çalışma kartlarını tekrar tekrar okumasını veya düzenlemesini sağlamak | Belgelenmiş bir MCP sunucusu veya ajan API'si olan bir çalışma kartı sistemi | Quizlet'e değil, hedef çalışma alanına kimliği doğrulanmış erişim |
| Quizlet hesap verileriyle çalışan yazılım geliştirmek | Resmî geliştirici belgelerini veya yetkili bir iş ortağı üzerinden erişim yolunu beklemek | Bugün herkese açık, geliştiricilerin kendi başlarına kullanmaya başlayabileceği bir Quizlet API veya MCP sözleşmesi belgelenmiyor |

Quizlet'in ChatGPT uygulaması belirli bir oluşturma akışını yürütür. Dışa aktarma, kapsamı belli bir aktarımı sağlar. MCP ise araçlarını bilinçli olarak dışarıya açan bir sisteme tekrarlanabilir erişim sağlar. Bunlar birbirinin yerine geçmez.

## Desteklenen en kısa yolu seçin

Resmî ChatGPT uygulaması zaten işinizi görüyorsa onu kullanın. Tek bir konuşmadan tek bir Quizlet seti oluşturmak için ikinci bir sistem eklemenize gerek yok.

Yalnızca bir yedeğe veya tek seferlik bir taşımaya ihtiyacınız varsa Quizlet'in dışa aktarma özelliğini kullanın. Bir ajanın yarın yeniden gelip bir deste bulmasını, kart eklemesini ve bunları düzeltmesini istiyorsanız hedef tarafta belgelenmiş bir okuma/yazma arayüzüne ihtiyacınız var. Quizlet böyle bir arayüz yayımlayana kadar, bu düzenli iş akışı Quizlet hesabınıza desteklenen bir doğrudan bağlantıyla yürütülemez.

Özellikle Quizlet verileriyle çalışmak üzere geliştirilen özel yazılımlar için de aynı sınırı gözetin. Bir tarayıcı isteği, eski bir sarmalayıcı kütüphane veya birinin tersine mühendislikle oluşturduğu entegrasyon, güncel geliştirici belgelerinin yerini tutmaz.

## Kendi oluşturduğunuz setin aktarımını geri alınabilir tutun

Quizlet'in [resmî dışa aktarma talimatları](https://help.quizlet.com/hc/en-us/articles/360034345672-Exporting-your-sets), bir seti yalnızca onu oluşturan kişinin ve yalnızca web sitesinden dışa aktarabileceğini söylüyor. İzlenecek yol **Diğer → Dışa aktar → Metni kopyala** şeklinde. Bu işlem terimleri ve tanımları içerir; Quizlet, görsellerin dışa aktarılamadığını ve kopyalanmış setlerin dışa aktarmaya uygun olmadığını belirtiyor.

Oluşturduğunuz bir seti dikkatli biçimde aktarmak için birkaç adım yeterli:

1. Quizlet'in web sitesindeki dışa aktarma özelliğini kullanın ve sonucu bir düz metin dosyasına yapıştırın.
2. Ayırıcıları, satır sonlarını veya ifadeleri değiştirmeden önce dokunulmamış bir UTF-8 kopyası kaydedin.
3. Dışa aktarılan ham dosyayı olduğu gibi saklayıp bir kopyasını düzenleyin.
4. Başlangıçtan, ortadan ve sondan birer örneğin yanı sıra çok satırlı tanımları ve Latin alfabesi dışındaki karakterleri kontrol edin.
5. Çalışma kopyasını içe aktarın veya ekleyin, birkaç kartın ön ve arka yüzünü önizleyin ve ancak bundan sonra kartları kaydedin.
6. Hedef desteyi açıp deneyene kadar Quizlet setini ve ham dosyayı saklayın.

Ayırıcı, CSV ve dosya kontrollerinin tamamı [2026'da Quizlet Setleri Nasıl Dışa Aktarılır?](/tr/blog/how-to-export-quizlet-sets-and-turn-them-into-fsrs-flashcards/) yazısında yer alıyor. Önemli bir sınırlama kolayca gözden kaçabilir: dışa aktarma kart metnini taşır; Quizlet görsellerini, klasörleri, çalışma geçmişini, öğrenme düzeyini veya tekrar planını taşımaz.

Taşımayı geri alınabilir tutmak bu yüzden önemlidir. Çok satırlı bir tanım iki karta dönüşürse veya bir ayırıcı alanları kaydırırsa ham dosya, karşılaştırma yapabileceğiniz değişmemiş bir kaynak sağlar.

## Dışa aktarmadan sonra Claude ve Codex neleri kullanabilir?

Nibomo, şu adreste uzak bir MCP uç noktası yayımlıyor:

`https://mcp.nibomo.com/mcp`

> [Claude'a bağlanın](https://claude.ai/directory/nibomo) · [Belgeler](/tr/docs/mcp-connector/)

[MCP bağlayıcısı belgeleri](/tr/docs/mcp-connector/) sekiz araç tanımlıyor: `list_workspaces`, okuma için `sql_query`, yazma için `sql_execute`, başvuru kılavuzları için `get_guide` ve tekrarlar için `next_review_card`, `reveal_answer`, `submit_review`. Etkileşimli MCP istemcileri OAuth ile yetkilendirme yapabilir. Terminal ajanları ise [Agent API belgelerinden](/tr/docs/api/) başlayıp yayımlanan HTTP akışını kullanabilir.

`get_usage_limits` — hesap planına, sınırlara ve içinde bulunulan ayın yapay zekâ kullanımına yalnızca okuma erişimi sağlar; kartları okumaz veya değiştirmez.

Bu, Nibomo'yu bir Quizlet bağlayıcısına dönüştürmez. Desteklenen iş akışı şöyledir:

1. Kendi oluşturduğunuz bir Quizlet setinden metni dışa aktarın.
2. Ham dosyayı saklayın ve bir çalışma kopyasını inceleyin.
3. Alanları eşleştirilen kartları Nibomo'ya kaydetmeden önce gözden geçirin.
4. Gelecekteki okuma ve yazma işlemleri için oluşan Nibomo çalışma alanını uyumlu bir istemciye bağlayın.

Claude için bağlayıcı adımları [Nibomo, MCP ile Claude'a Nasıl Bağlanır?](/blog/how-to-connect-flashcards-to-claude-with-mcp/) yazısında yer alıyor. Codex ve diğer ajanlar, ortamlarının desteklediği belgelenmiş MCP veya Agent API yolunu kullanabilir.

Nibomo bir Quizlet URL'sini okuyamaz, bir Quizlet hesabını birebir yansıtamaz, Quizlet'te sonradan yapılan değişiklikleri eşitleyemez veya dışa aktarımda yer almayan görselleri ve çalışma geçmişini geri getiremez. Aktarmayı seçtiğiniz içerikten kendi kartlarını oluşturur ve bu kartlar için yeni bir tekrar planı başlatır.

Ajan erişimi dışında da bu değişikliğin sizin için değip değmeyeceğini değerlendiriyorsanız [açık kaynaklı Quizlet alternatifi karşılaştırmasına](/blog/quizlet-alternative/) bakın.

## Yetki sınırını işin kapsamından dar tutun

Herkese açık bir arayüz sözleşmesi, entegrasyonda bazı belirsizlikleri ortadan kaldırır; ancak her MCP işlemini güvenli hâle getirmez. OAuth, bağlantıda kimlik doğrulaması sağlar. Yapay zekânın oluşturduğu bir kartın doğru olduğunu garanti etmez, döndürülen kart verilerinin çalışma kartı hizmetinin içinde kalmasını sağlamaz veya bir düzenlemenin niyetinize uyup uymadığına karar vermez.

Nibomo, okuma işlemlerini yazma araçlarından ayırır: kartlar ve desteler için `sql_execute`, tekrarlar için `submit_review`. OAuth kimlik bilgisi yine de bağlayıcının sunduğu arayüzün tamamını kapsar; bu yüzden araçların engellenmesi ve onayların nasıl alınacağı istemciye bağlıdır. Hassas bilgi içermeyen küçük bir çalışma alanıyla başlayın. Ajanın yalnızca görev için gereken verileri okumasına izin verin, istemci destekliyorsa yazma işlemlerini her çağrıda onaya bağlı tutun ve kabul etmeden önce çalışma alanını ve önerilen değişikliği inceleyin.

Yapay zekâ istemcisinin veri saklama ve işleme koşullarını kontrol etmeden özel çalışma materyallerinizi bağlamayın. Ayrıntılı tehdit modeli [Çalışma Kartları İçin MCP Güvenli mi?](/blog/is-mcp-safe-for-flashcards/) yazısında bulunuyor. İlk aktarım için basit bir kural yeterli: ham dışa aktarımı saklayın, birkaç kartı önizleyin, kapsamı dar bir yazma işlemine onay verin ve daha fazlasını yapmadan önce sonucu hedef uygulamada doğrulayın.

## Özel tarayıcı trafiğini API'ye dönüştürmeyin

Tarayıcının geliştirici araçlarında görünen bir istek, herkese açık bir Quizlet API'si değildir. Özel uç noktalar oturum çerezlerine, dahili biçimlere ve haber verilmeden değişebilen davranışlara bağlı olabilir. Her türlü otomatik kullanımın ayrıca [Quizlet'in Hizmet Şartları'na](https://quizlet.com/tos) ve materyal için sahip olduğunuz izinlere uyması gerekir.

Bu yazı, veri kazıma talimatları veya tersine mühendislikle bulunmuş uç noktalar sunmuyor. Resmî ChatGPT uygulaması işinize uyuyorsa onu kullanın. Seti siz oluşturduysanız ve tek seferlik bir taşımaya ihtiyacınız varsa dışa aktarın. Ajanların düzenli olarak okuma ve yazma yapmasına ihtiyacınız varsa gözden geçirdiğiniz içeriği bu arayüzü yayımlayan bir sisteme taşıyın; Quizlet yeni bir şey belgeleyene kadar Quizlet tarafındaki işlemleri elle yapmaya devam edin.
