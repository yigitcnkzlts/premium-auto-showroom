"use client";

import { vehicleBrands } from "@/services/vehicleDataService";

type Props = { value: string; onChange: (value: string) => void };

export function BrandSelect({ value, onChange }: Props) {
  const featured = [
    ["Audi", "audi"], ["BMW", "bmw"], ["Mercedes-Benz", "mercedes"], ["Volkswagen", "volkswagen"],
    ["Toyota", "toyota"], ["Honda", "honda"], ["Hyundai", "hyundai"], ["Tesla", "tesla"],
  ] as const;

  return (
    <fieldset className="brand-picker">
      <legend>Marka</legend>
      <div className="brand-logo-grid">{featured.map(([name, slug]) => <button type="button" className={value === name ? "brand-logo brand-logo--active" : "brand-logo"} onClick={() => onChange(name)} key={name} aria-pressed={value === name}><img src={`https://cdn.simpleicons.org/${slug}/252421`} alt="" width="34" height="34" /><span>{name}</span></button>)}</div>
      <label className="brand-all"><span>Diğer markalar</span><select value={featured.some(([name]) => name === value) ? "" : value} onChange={(event) => onChange(event.target.value)}><option value="">Marka seçin</option>{vehicleBrands.filter((brand) => !featured.some(([name]) => name === brand.name)).map((brand) => <option value={brand.name} key={brand.slug}>{brand.name}</option>)}</select></label>
    </fieldset>
  );
}
