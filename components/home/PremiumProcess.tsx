import { ArrowUpRight, BadgeCheck, CarFront, CircleDollarSign, ScanSearch } from "lucide-react";
import Link from "next/link";

const steps = [
  [ScanSearch, "01", "Aracınızı tanıyalım", "Temel bilgileri paylaşın; piyasa verileri ve araç özellikleriyle ön değerlemeyi oluşturalım."],
  [BadgeCheck, "02", "Uzman ekspertizi", "Kaporta, mekanik ve kozmetik kontrolleri şeffaf bir raporda bir araya getirelim."],
  [CircleDollarSign, "03", "Güvenli satış", "Onayladığınız teklif sonrası noter ve güvenli ödeme adımlarını sizin için yönetelim."],
] as const;

export function PremiumProcess() {
  return (
    <section className="premium-process" aria-labelledby="process-title">
      <div className="process-heading">
        <div><span className="section-index">01 — D CARS SÜRECİ</span><h2 id="process-title">Aracınız için<br /><em>kusursuz bir yolculuk.</em></h2></div>
        <div><p>İlk değerlemeden güvenli ödemeye kadar her adımda tek muhatap, açık iletişim ve uzman desteği.</p><Link href="/nasil-calisir">Süreci inceleyin <ArrowUpRight size={17} /></Link></div>
      </div>
      <div className="process-grid">
        {steps.map(([Icon, number, title, detail]) => <article className="process-card" key={number}><div className="process-card__top"><Icon size={23} /><span>{number}</span></div><h3>{title}</h3><p>{detail}</p></article>)}
        <article className="process-card process-card--accent"><CarFront size={28} /><span>D CARS SIGNATURE</span><strong>Aracınızın değeri,<br />deneyimimizin merkezinde.</strong><Link href="/arac-degerleme">Şimdi değerleyin <ArrowUpRight size={17} /></Link></article>
      </div>
    </section>
  );
}
