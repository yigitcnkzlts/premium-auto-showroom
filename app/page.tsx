import { ArrowDownRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { DynamicCarShowroom } from "@/components/three/DynamicCarShowroom";
import { FaqSection } from "@/components/home/FaqSection";

const stats = [["5.000+", "Değerlenen araç"], ["2.500+", "Mutlu müşteri"], ["24 saat", "İçinde teklif"], ["%100", "Güvenli süreç"]];

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__ambient" aria-hidden="true" />
        <div className="hero__copy">
          <div className="eyebrow"><span /> İstanbul&apos;un seçkin otomobil platformu</div>
          <h1 id="hero-title">OTOMOBİLİN<br /><em>YENİ DENEYİMİ</em></h1>
          <p>Aracınızı güvenle satın, değerini öğrenin veya yeni otomobilinizi keşfedin.</p>
          <div className="hero__actions">
            <Link className="button button--primary" href="/arac-degerleme">Aracımı değerle <ArrowUpRight size={17} /></Link>
            <Link className="button button--ghost" href="/araclar">Araçları keşfet <ArrowDownRight size={17} /></Link>
          </div>
        </div>
        <div className="hero__visual">
          <DynamicCarShowroom />
          <div className="model-hint"><span className="model-hint__mouse" /> 360° keşfetmek için sürükleyin</div>
        </div>
        <div className="hero__meta">
          <div><span>01</span><strong>Seçkin araçlar</strong></div>
          <div><span>02</span><strong>Şeffaf ekspertiz</strong></div>
          <div><span>03</span><strong>Güvenli teslimat</strong></div>
        </div>
      </section>
      <section className="trust-strip" aria-label="D Cars güven istatistikleri">
        <div className="trust-strip__lead"><ShieldCheck size={21} /><span>Güven, her yolculuğun<br />başlangıç noktasıdır.</span></div>
        {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>
      <FaqSection />
    </main>
  );
}
