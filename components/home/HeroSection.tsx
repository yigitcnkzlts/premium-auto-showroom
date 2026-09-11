import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DynamicCarShowroom } from "@/components/three/DynamicCarShowroom";
import { VehicleFeatureIcons } from "./VehicleFeatureIcons";

export function HeroSection() {
  return <section className="hero" aria-labelledby="hero-title"><div className="hero__ambient" aria-hidden="true" /><div className="hero__copy"><div className="eyebrow"><span /> İstanbul&apos;un seçkin otomobil platformu</div><h1 id="hero-title">OTOMOBİLİN<br /><em>YENİ DENEYİMİ</em></h1><p>Aracınızı güvenle satın, değerini öğrenin veya yeni otomobilinizi keşfedin.</p><div className="hero__actions"><Link className="button button--primary" href="/arac-degerleme">Aracımı değerle <ArrowUpRight size={17} /></Link><Link className="button button--ghost" href="/araclar">Araçları keşfet <ArrowDownRight size={17} /></Link></div></div><div className="hero__visual"><div className="hero__visual-glow" aria-hidden="true" /><div className="hero__visual-stage"><DynamicCarShowroom /><div className="hero__floor-shadow" aria-hidden="true" /></div><VehicleFeatureIcons /><div className="model-hint"><span className="model-hint__mouse" /> 360° keşfetmek için sürükleyin</div></div><div className="hero__meta"><div><span>01</span><strong>Seçkin araçlar</strong></div><div><span>02</span><strong>Şeffaf ekspertiz</strong></div><div><span>03</span><strong>Güvenli teslimat</strong></div></div></section>;
}
