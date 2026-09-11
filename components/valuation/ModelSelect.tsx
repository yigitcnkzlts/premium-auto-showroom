"use client";

import { getModelsForBrand } from "@/services/vehicleDataService";

type Props = { brand: string; value: string; onChange: (value: string) => void };

export function ModelSelect({ brand, value, onChange }: Props) {
  const models = getModelsForBrand(brand);
  return (
    <label className="valuation-field">
      <span>Model</span>
      <input list="vehicle-models" value={value} onChange={(event) => onChange(event.target.value)} placeholder={brand ? "Model seçin" : "Önce marka seçin"} disabled={!brand} autoComplete="off" />
      <datalist id="vehicle-models">{models.map((model) => <option value={model} key={model} />)}</datalist>
    </label>
  );
}
