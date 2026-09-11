"use client";

import { vehicleBrands } from "@/services/vehicleDataService";

type Props = { value: string; onChange: (value: string) => void };

export function BrandSelect({ value, onChange }: Props) {
  return (
    <label className="valuation-field">
      <span>Marka</span>
      <input list="vehicle-brands" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Marka seçin" autoComplete="off" />
      <datalist id="vehicle-brands">{vehicleBrands.map((brand) => <option value={brand.name} key={brand.slug} />)}</datalist>
    </label>
  );
}
