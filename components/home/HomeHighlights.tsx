import { ArrowUpRight, BadgeCheck, ScanSearch, ShieldCheck } from "lucide-react";
import Link from "next/link";

const highlights = [
  [ScanSearch, "Doğru araç, doğru karar", "İhtiyacınızı dinliyor; kullanım biçiminize, bütçenize ve beklentinize uygun seçenekleri birlikte değerlendiriyoruz."],
  [BadgeCheck, "Kontrol edilmiş seçki", "Araçların geçmişini ve kondisyonunu inceliyor, bilmeniz gereken ayrıntıları açık biçimde paylaşıyoruz."],
  [ShieldCheck, "Satıştan sonra da yanınızda", "Noter ve ödeme adımlarından teslimata kadar süreci tek noktadan, düzenli ve güvenli şekilde yönetiyoruz."],
] as const;

export function HomeHighlights() {
  return <section className="home-highlights" aria-labelledby="highlights-title"><div className="home-highlights__heading"><span>04 — D CARS AYRICALIĞI</span><h2 id="highlights-title">Bir otomobilden fazlası.<br /><em>Eksiksiz bir deneyim.</em></h2><Link href="/hakkimizda">Bizi yakından tanıyın <ArrowUpRight size={17} /></Link></div><div className="home-highlights__grid">{highlights.map(([Icon, title, text], index) => <article key={title}><div><small>0{index + 1}</small><Icon size={24} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}
