import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export default function VehiclesPage() {
  return <><Navbar /><main className="content-page"><section className="content-hero"><span>SEÇKİN KOLEKSİYON</span><h1>Karakteri olan otomobiller.</h1><p>Her araç; geçmişi, teknik durumu ve kondisyonu incelendikten sonra D CARS seçkisine dahil edilir.</p><Link className="button button--primary" href="/iletisim">Stok bilgisi alın <ArrowUpRight size={17} /></Link></section><section className="vehicle-spotlight"><div className="vehicle-spotlight__image"><Image src="/images/q8-showroom.png" alt="D CARS seçkisindeki siyah Audi Q8" fill priority sizes="(max-width: 900px) 100vw, 60vw" /></div><div className="vehicle-spotlight__copy"><span><BadgeCheck size={16} /> D CARS ONAYLI</span><h2>Audi Q8</h2><p>Güçlü SUV karakterini rafine sürüş ve quattro yol tutuşuyla birleştiren seçkin bir deneyim.</p><dl><div><dt>Gövde</dt><dd>SUV</dd></div><div><dt>Şanzıman</dt><dd>8 ileri Tiptronic</dd></div><div><dt>Çekiş</dt><dd>quattro</dd></div></dl><Link href="/iletisim">Detaylı bilgi ve randevu <ArrowUpRight size={16} /></Link></div></section></main></>;
}
