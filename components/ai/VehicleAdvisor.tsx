"use client";

import { Bot, CircleCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import type { VehicleContext } from "@/types/vehicle";
import { buildVehicleLabel } from "@/services/aiVehicleAdvisorService";
import { VehicleAdvisorInput } from "./VehicleAdvisorInput";
import { VehicleAdvisorMessage } from "./VehicleAdvisorMessage";
import { VehicleComparison } from "./VehicleComparison";
import { VehicleQuickQuestions } from "./VehicleQuickQuestions";

type Message = { role: "user" | "assistant"; content: string };

export function VehicleAdvisor({ vehicle }: { vehicle?: VehicleContext }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const label = buildVehicleLabel(vehicle);
  const ask = async (message: string) => {
    setMessages((current) => [...current, { role: "user", content: message }]); setLoading(true);
    try { const response = await fetch("/api/ai/vehicle-advisor", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, vehicle }) }); const data = await response.json() as { answer?: string }; setMessages((current) => [...current, { role: "assistant", content: data.answer ?? "Bu soruyu şu an yanıtlayamıyorum." }]); } catch { setMessages((current) => [...current, { role: "assistant", content: "Danışman şu an bağlantı kuramıyor. Lütfen kısa süre sonra tekrar deneyin." }]); } finally { setLoading(false); }
  };
  return <section className="advisor-section" aria-labelledby="advisor-title"><div className="advisor-intro"><span className="section-index">02 — D CARS INTELLIGENCE</span><h2 id="advisor-title">Aracınızı<br /><em>AI ile Keşfedin</em></h2><p>Merak ettiğiniz marka veya modeli sorun. Performans, kullanım, yakıt tüketimi, konfor ve daha fazlasını keşfedin.</p><div className="advisor-trust"><CircleCheck size={16} /> Yanıtlar model yılı ve seçilen donanıma göre şekillenir.</div></div><div className="advisor-panel"><div className="advisor-panel__top"><div className="advisor-badge"><Sparkles size={15} /> AI ARAÇ DANIŞMANI</div><span>Çevrimiçi</span></div><div className="advisor-context"><Bot size={18} /><div><strong>{label} hakkında ne öğrenmek istersiniz?</strong><small>Kesin olmayan teknik bilgiler için uzman doğrulaması önerilir.</small></div></div><div className="advisor-thread">{messages.length === 0 ? <div className="advisor-empty"><span>Q</span><p>Bir araç seçin veya aklınızdaki soruyu yazın. Danışmanınız başlıklar halinde yanıtlasın.</p></div> : messages.map((message, index) => <div key={`${message.role}-${index}`}><VehicleAdvisorMessage {...message} />{message.role === "assistant" && /karşılaştır|mı|mi|mu|mü/i.test(messages[index - 1]?.content ?? "") && <VehicleComparison prompt={messages[index - 1]?.content ?? ""} />}</div>)}{loading && <div className="advisor-loading"><span /><span /><span /> Yanıt hazırlanıyor</div>}</div><VehicleAdvisorInput onSubmit={ask} disabled={loading} /><VehicleQuickQuestions onSelect={ask} /></div></section>;
}
