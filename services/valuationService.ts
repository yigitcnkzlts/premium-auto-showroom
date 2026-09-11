import type { ValuationRequest } from "@/types/valuation";
import { valuationRequests } from "@/db/schema";

export async function createValuationRequest(payload: ValuationRequest) {
  const { getDb } = await import("@/db");
  const db = getDb();
  const [request] = await db.insert(valuationRequests).values({
    year: payload.year,
    brand: payload.brand ?? "",
    model: payload.model ?? "",
    details: {
      mileage: payload.mileage,
      fuelType: payload.fuelType,
      transmission: payload.transmission,
      engine: payload.engine,
      trim: payload.trim,
      replacedParts: payload.replacedParts,
      paintedParts: payload.paintedParts,
      damageAmount: payload.damageAmount,
      severeDamage: payload.severeDamage,
      condition: payload.condition,
    },
    firstName: payload.firstName,
    lastName: payload.lastName,
    phone: payload.phone,
    email: payload.email,
  }).returning();
  return request;
}
