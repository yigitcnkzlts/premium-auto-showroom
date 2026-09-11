import type { AdvisorResponse } from "@/types/ai";
import type { VehicleContext } from "@/types/vehicle";

const suggestions = ["Bu araç bana uygun mu?", "Yakıt ve bakım maliyeti nasıl?", "Alırken neleri kontrol etmeliyim?", "Benzer modellerle karşılaştır", "İkinci eli güçlü mü?", "Aile kullanımı için uygun mu?"];

const brandCharacter: Record<string, string> = {
  audi: "rafine kabin, quattro seçenekleri ve dengeli sürüş karakteri",
  bmw: "sürücü odaklı şasi, güçlü motor seçenekleri ve dinamik karakter",
  mercedes: "konfor, kabin kalitesi ve ileri sürüş destekleri",
  volkswagen: "dengeli kullanım maliyeti, geniş servis ağı ve güçlü ikinci el talebi",
  volvo: "güvenlik, sade İskandinav ergonomisi ve aile odaklı konfor",
  toyota: "dayanıklılık, verimlilik ve öngörülebilir kullanım maliyeti",
  porsche: "yüksek performans, hassas sürüş ve güçlü marka değeri",
};

function selectedConfiguration(vehicle?: VehicleContext) {
  return [vehicle?.year, vehicle?.fuelType, vehicle?.transmission, vehicle?.engine].filter(Boolean).join(" · ");
}

function topicResponse(message: string, label: string, vehicle?: VehicleContext) {
  const normalized = message.toLocaleLowerCase("tr-TR");
  const character = brandCharacter[vehicle?.brand?.toLocaleLowerCase("tr-TR") ?? ""];
  const identity = character ? `${label}, genel olarak ${character} ile öne çıkar.` : `${label} için doğru karar; motor, donanım, kullanım geçmişi ve ekspertiz sonucunun birlikte değerlendirilmesine bağlıdır.`;
  if (/yakıt|tüketim|ekonomi/.test(normalized)) return `${identity}\n\nTÜKETİMİ ETKİLEYENLER\nMotor hacmi, çekiş sistemi, jant ölçüsü, şehir içi trafik ve sürüş biçimi gerçek tüketimi belirler. Hibrit seçenekler yoğun şehir kullanımında, dizel seçenekler uzun yolda avantaj sağlayabilir.\n\nD CARS ÖNERİSİ\nYıllık kilometrenizi ve kullanım rotanızı paylaşın; motor seçeneklerini toplam kullanım maliyetine göre karşılaştıralım.`;
  if (/kronik|arıza|sorun|kontrol/.test(normalized)) return `${identity}\n\nKONTROL LİSTESİ\nSoğuk çalıştırma, şanzıman geçişleri, elektronik donanımlar, süspansiyon sesleri, servis geçmişi ve tramer kayıtları özellikle incelenmelidir.\n\nD CARS ÖNERİSİ\nModel yılı ve motor bilgisi netleştiğinde kontrol listesini ilgili versiyona göre daraltabiliriz. Satın alma kararını bağımsız ekspertiz raporuyla doğrulayın.`;
  if (/aile|bagaj|çocuk|konfor/.test(normalized)) return `${identity}\n\nAİLE KULLANIMI\nArka yaşam alanı, bagaj hacmi, ISOFIX noktaları, sürüş destekleri ve uzun yol konforu birlikte değerlendirilmelidir.\n\nD CARS ÖNERİSİ\nÇocuk sayısı, yıllık kilometre ve şehir/uzun yol oranınızı belirtirseniz daha net bir uygunluk değerlendirmesi sunabiliriz.`;
  if (/bakım|maliyet|servis|parça/.test(normalized)) return `${identity}\n\nMALİYET KALEMLERİ\nPeriyodik bakım, lastik-jant ölçüsü, fren sarf malzemeleri, kasko ve olası elektronik onarımlar toplam maliyeti oluşturur. Premium motor ve dört çeker seçeneklerde bakım bütçesi yükselir.\n\nD CARS ÖNERİSİ\nEksiksiz servis kaydı ve yakın dönem ağır bakım faturaları satın alma öncesinde mutlaka incelenmelidir.`;
  if (/ikinci el|satış|değer|değer kaybı/.test(normalized)) return `${identity}\n\nDEĞERİ BELİRLEYENLER\nDoğru motor-paket kombinasyonu, renk, kilometre, servis geçmişi, hasar durumu ve piyasa arzı ikinci el gücünü belirler.\n\nD CARS ÖNERİSİ\nAracın yalnızca ilan fiyatını değil; benzer araçların gerçekleşen satış aralığını ve satışta kalma süresini de değerlendirin.`;
  if (/karşılaştır| vs |mı|mi|mu|mü|yoksa/.test(normalized)) return `${label} ile diğer seçeneği; kullanım amacı, performans, tüketim, konfor, güvenlik, bakım ve ikinci el değeri başlıklarında karşılaştırmak gerekir. İkinci modelin tam adını ve model yılını yazın; ihtiyaçlarınıza göre artı/eksi tablosu hazırlayayım.`;
  return `${identity}\n\nKISA DEĞERLENDİRME\nGünlük kullanım, performans beklentisi, yıllık kilometre ve bütçe bu aracın size uygunluğunu belirleyen temel başlıklardır.\n\nSATIN ALMADAN ÖNCE\nMotor ve paket doğrulaması, servis geçmişi, tramer kaydı, lastik-fren durumu ve bağımsız ekspertiz raporunu birlikte değerlendirin.`;
}

export function buildVehicleLabel(vehicle?: VehicleContext) {
  return [vehicle?.year, vehicle?.brand, vehicle?.model].filter(Boolean).join(" ") || "seçtiğiniz araç";
}

export async function answerVehicleQuestion(message: string, vehicle?: VehicleContext): Promise<AdvisorResponse> {
  const label = buildVehicleLabel(vehicle);
  const configuration = selectedConfiguration(vehicle);
  const contextNote = configuration ? `\n\nSEÇİLEN ARAÇ\n${configuration}` : "\n\nNot: Daha kişisel bir yanıt için model yılı, motor ve şanzıman seçin.";
  const answer = `${topicResponse(message, label, vehicle)}${contextNote}\n\nBilgiler genel rehber niteliğindedir; güncel teknik veri ve fiyatlar uzman tarafından doğrulanmalıdır.`;
  return { answer, suggestions };
}
