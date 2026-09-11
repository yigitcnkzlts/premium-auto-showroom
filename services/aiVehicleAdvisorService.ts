import type { AdvisorResponse } from "@/types/ai";
import type { VehicleContext } from "@/types/vehicle";

const suggestions = ["Bu araç alınır mı?", "Yakıt tüketimi nasıl?", "Kronik sorunları var mı?", "Aile için uygun mu?", "Bakım maliyeti nasıl?", "İkinci eli güçlü mü?"];

export function buildVehicleLabel(vehicle?: VehicleContext) {
  return [vehicle?.year, vehicle?.brand, vehicle?.model].filter(Boolean).join(" ") || "seçtiğiniz araç";
}

export async function answerVehicleQuestion(message: string, vehicle?: VehicleContext): Promise<AdvisorResponse> {
  const label = buildVehicleLabel(vehicle);
  const comparison = /\b(mı|mi|mu|mü|vs|karşılaştır|yoksa)\b/i.test(message);
  const configuration = [vehicle?.fuelType, vehicle?.transmission, vehicle?.engine].filter(Boolean).join(" / ");
  const contextNote = configuration ? ` Seçtiğiniz ${configuration} konfigürasyonunda sonuçlar donanım ve model yılına göre değişebilir.` : " Motor ve paket seçeneği belirtilmediği için genel bir değerlendirme yapıyorum.";
  const answer = comparison
    ? `Araç karşılaştırması için ${label} ve sorunuzdaki diğer modeli birlikte değerlendirebilirim. Performans, yakıt, konfor, güvenlik, bakım ve ikinci el başlıklarında karar vermek gerekir. Güncel fiyat verisine bağlı bir kıyas için ilan/veri kaynağı entegrasyonu gereklidir.${contextNote}`
    : `${label}, günlük kullanım kolaylığı ve segmentindeki dengeli karakteriyle değerlendirilebilecek bir modeldir. Güvenilirlik, yakıt tüketimi, donanım ve bakım maliyeti model yılına, motora ve pakete göre değişebilir.${contextNote}\n\nPERFORMANS\nMotor seçeneğine göre değişir; kesin teknik değer için ilgili versiyon verisi gerekir.\n\nKONFOR\nKabin yalıtımı ve süspansiyon karakteri donanım seviyesine göre farklılaşabilir.\n\nYAKIT\nGerçek tüketim; motor, şanzıman, trafik ve kullanım biçimine bağlıdır.\n\nGÜVENLİK\nGüvenlik donanımları model yılı ve pakete göre doğrulanmalıdır.\n\nBAKIM\nServis maliyeti için güncel servis ve parça verisi gerekir.\n\nİKİNCİ EL\nGüncel piyasa fiyatı için ilan/veri kaynağı entegrasyonu gereklidir.`;
  return { answer, suggestions };
}
