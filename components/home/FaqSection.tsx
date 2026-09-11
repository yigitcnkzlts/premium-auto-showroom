"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = {
  "Genel Bilgiler": [
    ["D Cars nedir?", "D Cars; ikinci el aracını zahmetsiz ve hızlı biçimde satmak isteyen bireysel araç sahiplerini, yetki belgeli profesyonel otomotiv alıcılarıyla buluşturan İstanbul merkezli bir platformdur."],
    ["Hangi araçlar açık artırmaya katılabilir?", "Otomobil, SUV, arazi aracı ve hafif ticari araçlar değerlendirmeye alınabilir. Aracın model yılı, kilometresi, hasar geçmişi ve genel kondisyonu uygunluk sürecinde birlikte incelenir."],
    ["D Cars nasıl çalışır?", "Araç bilgilerinizi iletin, ücretsiz ekspertiz randevunuzu oluşturun ve uzman ekibimizin hazırladığı değerlendirme sonucunu inceleyin. Teklifi kabul ettiğinizde noter ve ödeme süreci güvenli şekilde tamamlanır."],
    ["Açık artırmada aracıma teklif verecek alıcılar kimlerdir?", "Teklifler, ikinci el araç ticareti için gerekli yetki belgelerine sahip kayıtlı bayiler ve profesyonel oto galeriler tarafından verilir."],
    ["Arabamı neden D Cars'ta satmalıyım?", "Aracınız geniş bir profesyonel alıcı ağına sunulur. Tek tek alıcılarla görüşmeden, ilan ve pazarlık süreciyle uğraşmadan rekabetçi teklifleri şeffaf biçimde değerlendirebilirsiniz."],
    ["D Cars'la araç satışı neden zahmetsiz?", "Ön değerleme, ekspertiz, tekliflerin toplanması, noter ve ödeme adımları tek ekip tarafından uçtan uca yönetilir."],
    ["Açık artırmada araç satmak ücretli midir, satıcıdan komisyon alınıyor mu?", "Standart ön değerleme ve ekspertiz hizmetleri ücretsizdir. Satış öncesinde uygulanabilecek özel hizmet veya masraflar varsa açıkça bildirilir; onayınız olmadan ücret oluşturulmaz."],
    ["Satış süreci toplamda ne kadar sürüyor?", "Randevu saati ve aracın kondisyonuna bağlı olarak ekspertiz, teklif ve satış işlemleri çoğunlukla aynı gün veya takip eden iş gününde tamamlanabilir."],
    ["Arabama neden ekspertiz yapmak istiyorsunuz?", "Aracın mekanik, kaporta ve kozmetik durumunu doğru belirlemek; alıcılara eksiksiz bilgi sunmak ve gerçekçi bir başlangıç fiyatı oluşturmak için ekspertiz yapılır."],
    ["Ekspertiz işlemini D Cars'ta yaptırmak zorunlu mu?", "Şeffaf ve doğrulanabilir bir satış süreci için aracın D Cars tarafından belirlenen standartlarda incelenmesi gerekir. Ekspertiz sırasında süreçle ilgili tüm bulgular sizinle paylaşılır."],
    ["Aracım LPG'li, açık artırmaya katılabilir mi?", "LPG sistemi ruhsata işlenmiş ve yasal gereklilikleri karşılıyor ise araç değerlendirmeye alınabilir. Nihai uygunluk ekspertiz sırasında kontrol edilir."],
    ["Güneş yanığı aracı satmama engel mi?", "Güneş yanığı tek başına satışa engel değildir. Ekspertizde hasarın seviyesi incelenir; satışa uygun bulunursa araç bu durum açıkça belirtilerek ve ayrıntılı biçimde fotoğraflanarak alıcılara sunulur."],
  ],
  "Fiyatlama Süreci": [
    ["Araç değeri nasıl hesaplanıyor?", "Marka, model, yıl, kilometre, donanım, hasar geçmişi, ekspertiz bulguları ve güncel piyasa verileri birlikte değerlendirilerek gerçekçi bir ön fiyat oluşturulur."],
    ["Ön değerlendirme ile nihai teklif farklı olabilir mi?", "Evet. Online ön değerlendirme beyan edilen bilgilere dayanır. Nihai teklif, fiziksel ekspertiz ve aracın gerçek kondisyonu görüldükten sonra netleşir."],
    ["Değerleme hizmeti ücretli mi?", "Hayır. Online ön değerlendirme ve standart ekspertiz süreci ücretsizdir."],
  ],
  "Randevu Süreci": [
    ["Nasıl ekspertiz randevusu alabilirim?", "Web sitemizdeki randevu formundan uygun tarih ve saati seçebilir veya ekibimizle telefon ve WhatsApp üzerinden iletişime geçebilirsiniz."],
    ["Randevuya gelirken ne getirmeliyim?", "Ruhsat, kimlik belgesi ve varsa aracın yedek anahtarını yanınızda getirmeniz yeterlidir. Sağlıklı inceleme için aracın temiz olması önerilir."],
    ["Randevusuz gelebilir miyim?", "Müsaitlik durumunda yardımcı olabiliriz; ancak beklememeniz ve ekspertiz alanının hazır olması için randevu oluşturmanızı öneririz."],
  ],
  "Satış Süreci": [
    ["Satış süreci ne kadar sürer?", "Aracın durumu ve randevu saatine bağlı olarak ekspertiz, teklif ve satış işlemleri çoğunlukla aynı gün içinde sonuçlandırılabilir."],
    ["Teklifi kabul etmek zorunda mıyım?", "Hayır. Nihai teklif size sunulur ve yalnızca onayınızdan sonra satış işlemleri başlatılır."],
    ["Noter ve ödeme işlemleri nasıl yapılır?", "Satış, noter devriyle tamamlanır. Ödeme güvenli ödeme sistemi üzerinden araç sahibinin banka hesabına aktarılır."],
  ],
  "Devir ve Ödeme": [
    ["Ödeme hesabıma ne zaman geçer?", "Ödeme, satış koşulları tamamlandığında noter devriyle eş zamanlı olarak araç ruhsat sahibinin hesabına gönderilir."],
    ["Araç üzerinde borç veya rehin varsa ne olur?", "Noter satışına engel olabilecek rehin, haciz, vergi veya trafik cezası gibi durumların devirden önce kaldırılması gerekir."],
    ["Satıştan vazgeçebilir miyim?", "Teklifi onaylayıp satış sürecini başlatmadan önce herhangi bir ücret ödemeden işlemi sonlandırabilirsiniz."],
  ],
} as const;

type Category = keyof typeof categories;

export function FaqSection() {
  const [active, setActive] = useState<Category>("Genel Bilgiler");
  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="faq__intro">
        <span className="section-index">04 — BİLGİ MERKEZİ</span>
        <h2 id="faq-title">Sıkça sorulan<br /><em>sorular.</em></h2>
        <p>Araç değerleme, ekspertiz, satış ve ödeme süreçleriyle ilgili merak ettiklerinizi burada bulabilirsiniz.</p>
        <a href="/iletisim">Sorunuz mu var? <ArrowUpRight size={17} /></a>
      </div>
      <div className="faq__content">
        <div className="faq__tabs" role="tablist" aria-label="Soru kategorileri">
          {(Object.keys(categories) as Category[]).map((category) => (
            <button key={category} role="tab" aria-selected={active === category} onClick={() => setActive(category)}>{category}</button>
          ))}
        </div>
        <Accordion key={active} type="single" collapsible defaultValue={`${active}-0`} className="faq__accordion">
          {categories[active].map(([question, answer], index) => (
            <AccordionItem value={`${active}-${index}`} key={question} className="faq__item">
              <AccordionTrigger className="faq__question"><span><small>0{index + 1}</small>{question}</span></AccordionTrigger>
              <AccordionContent className="faq__answer">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
