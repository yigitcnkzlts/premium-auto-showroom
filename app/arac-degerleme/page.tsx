import { Navbar } from "@/components/layout/Navbar";
import { QuickValuationForm } from "@/components/valuation/QuickValuationForm";
import { VehicleAdvisor } from "@/components/ai/VehicleAdvisor";

export default function ValuationPage() { return <><Navbar /><main className="standalone-flow"><header><span>VERİ DESTEKLİ DEĞERLEME</span><h1>Aracınızın gerçek piyasa değerini keşfedin.</h1><p>Araç bilgilerinizi paylaşın; ön değerlendirme talebinizi ücretsiz oluşturun.</p></header><QuickValuationForm /><VehicleAdvisor /></main></>; }
