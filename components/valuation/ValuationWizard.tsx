"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import type { ValuationRequest } from "@/types/valuation";
import type { VehicleContext } from "@/types/vehicle";

type Props = { vehicle: VehicleContext; onClose: () => void };
const steps = ["Araç", "Teknik bilgiler", "Araç durumu", "İletişim"];
const initial: ValuationRequest = { firstName: "", lastName: "", phone: "", email: "" };

export function ValuationWizard({ vehicle, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<ValuationRequest>({ ...initial, ...vehicle });
  const [submitted, setSubmitted] = useState(false);
  const update = (key: keyof ValuationRequest, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async () => {
    await fetch("/api/valuation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSubmitted(true);
  };
  if (submitted) return <div className="wizard-backdrop"><div className="wizard wizard--success"><button className="wizard-close" onClick={onClose} aria-label="Pencereyi kapat"><X size={18} /></button><div className="success-mark"><Check /></div><span className="section-index">TALEBİNİZ ALINDI</span><h2>Ön değerlendirme talebiniz oluşturuldu.</h2><p>Uzmanlarımız sizinle iletişime geçecektir.</p><button className="button button--primary" onClick={onClose}>Tamam <ArrowRight size={16} /></button></div></div>;
  return (
    <div className="wizard-backdrop"><div className="wizard" role="dialog" aria-modal="true" aria-labelledby="wizard-title">
      <button className="wizard-close" onClick={onClose} aria-label="Pencereyi kapat"><X size={18} /></button>
      <div className="wizard-header"><span className="section-index">ÜCRETSİZ ÖN DEĞERLEME</span><h2 id="wizard-title">Aracınızı tanıyalım.</h2><div className="wizard-progress">{steps.map((item, index) => <div className={index <= step ? "wizard-step wizard-step--active" : "wizard-step"} key={item}><b>0{index + 1}</b><span>{item}</span></div>)}</div></div>
      <div className="wizard-body">
        {step === 0 && <div className="wizard-grid"><ReadOnly label="Model yılı" value={String(form.year ?? "")} /><ReadOnly label="Marka" value={form.brand ?? ""} /><ReadOnly label="Model" value={form.model ?? ""} /></div>}
        {step === 1 && <div className="wizard-grid"><Field label="Kilometre" value={String(form.mileage ?? "")} onChange={(v) => update("mileage", v)} type="number" placeholder="Örn. 85.000" /><Field label="Yakıt" value={form.fuelType ?? ""} onChange={(v) => update("fuelType", v)} placeholder="Benzin, dizel, hibrit..." /><Field label="Vites" value={form.transmission ?? ""} onChange={(v) => update("transmission", v)} placeholder="Otomatik / manuel" /><Field label="Motor" value={form.engine ?? ""} onChange={(v) => update("engine", v)} placeholder="Örn. 1.5 TSI" /><Field label="Paket / versiyon" value={form.trim ?? ""} onChange={(v) => update("trim", v)} placeholder="Örn. Elegance" /></div>}
        {step === 2 && <div className="wizard-grid"><Field label="Değişen parça var mı?" value={form.replacedParts ?? ""} onChange={(v) => update("replacedParts", v)} placeholder="Yok / varsa belirtin" /><Field label="Boyalı parça var mı?" value={form.paintedParts ?? ""} onChange={(v) => update("paintedParts", v)} placeholder="Yok / varsa belirtin" /><Field label="Tramer tutarı" value={form.damageAmount ?? ""} onChange={(v) => update("damageAmount", v)} placeholder="Bilinmiyor / tutar" /><Field label="Ağır hasar kaydı" value={form.severeDamage ?? ""} onChange={(v) => update("severeDamage", v)} placeholder="Var / yok / bilinmiyor" /><Field label="Genel kondisyon" value={form.condition ?? ""} onChange={(v) => update("condition", v)} placeholder="Çok iyi, iyi, orta..." /></div>}
        {step === 3 && <div className="wizard-grid"><Field label="Ad" value={form.firstName} onChange={(v) => update("firstName", v)} placeholder="Adınız" required /><Field label="Soyad" value={form.lastName} onChange={(v) => update("lastName", v)} placeholder="Soyadınız" required /><Field label="Telefon" value={form.phone} onChange={(v) => update("phone", v)} placeholder="05XX XXX XX XX" type="tel" required /><Field label="E-mail" value={form.email} onChange={(v) => update("email", v)} placeholder="ornek@email.com" type="email" required /></div>}
      </div>
      <div className="wizard-footer"><button className="wizard-back" onClick={() => setStep((current) => current - 1)} disabled={step === 0}><ArrowLeft size={16} /> Geri</button>{step < steps.length - 1 ? <button className="button button--primary" onClick={() => setStep((current) => current + 1)}>Devam et <ArrowRight size={16} /></button> : <button className="button button--primary" onClick={submit}>Talebi gönder <ArrowRight size={16} /></button>}</div>
    </div></div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required = false }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; type?: string; required?: boolean }) { return <label className="wizard-field"><span>{label}{required && " *"}</span><input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} required={required} /></label>; }
function ReadOnly({ label, value }: { label: string; value: string }) { return <div className="wizard-field"><span>{label}</span><div className="wizard-value">{value || "Belirtilmedi"}</div></div>; }
