import { BadgeCheck, Gauge, Gem, Settings2 } from "lucide-react";

const features = [[Gauge, "SUV", "Güçlü duruş"], [Settings2, "Otomatik", "Konforlu sürüş"], [Gem, "Quattro", "4x4 deneyimi"], [BadgeCheck, "Premium", "Ekspertiz onaylı"]] as const;

export function VehicleFeatureIcons() {
  return <div className="vehicle-features" aria-label="Audi Q8 özellikleri">{features.map(([Icon, title, detail]) => <div className="vehicle-feature" key={title}><Icon size={17} /><span><strong>{title}</strong><small>{detail}</small></span></div>)}</div>;
}
