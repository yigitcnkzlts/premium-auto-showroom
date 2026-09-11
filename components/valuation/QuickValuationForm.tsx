"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { BrandSelect } from "./BrandSelect";
import { ModelSelect } from "./ModelSelect";
import { ValuationWizard } from "./ValuationWizard";
import type { VehicleContext } from "@/types/vehicle";

export function QuickValuationForm({ onVehicleChange }: { onVehicleChange?: (vehicle: VehicleContext) => void }) {
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [wizardOpen, setWizardOpen] = useState(false);
  const vehicle = { year: year ? Number(year) : undefined, brand, model };
  const changeBrand = (value: string) => { setBrand(value); setModel(""); onVehicleChange?.({ ...vehicle, brand: value, model: "" }); };
  const changeModel = (value: string) => { setModel(value); onVehicleChange?.({ ...vehicle, model: value }); };
  return <>
    <section className="valuation-section" aria-labelledby="valuation-title"><div className="valuation-card"><div className="valuation-heading"><span className="section-index">01 — DEĞERLEME STÜDYOSU</span><h2 id="valuation-title">Aracınızın<br /><em>Değerini Öğrenin</em></h2><p>Aracınızı birkaç adımda tanımlayın, ücretsiz ön değerlendirme alın.</p></div><div className="valuation-form"><label className="valuation-field"><span>Model yılı</span><select value={year} onChange={(event) => setYear(event.target.value)}><option value="">Yıl seçin</option>{Array.from({ length: 22 }, (_, index) => 2026 - index).map((item) => <option value={item} key={item}>{item}</option>)}</select></label><BrandSelect value={brand} onChange={changeBrand} /><ModelSelect brand={brand} value={model} onChange={changeModel} /><button className="button button--primary valuation-submit" onClick={() => setWizardOpen(true)} disabled={!brand || !model}><span><Sparkles size={15} /> Ücretsiz teklif al</span><ArrowRight size={17} /></button></div></div></section>{wizardOpen && <ValuationWizard vehicle={vehicle} onClose={() => setWizardOpen(false)} />}</>;
}
