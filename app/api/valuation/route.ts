import { createValuationRequest } from "@/services/valuationService";
import type { ValuationRequest } from "@/types/valuation";

export async function POST(request: Request) {
  try {
    const payload = await request.json() as Partial<ValuationRequest>;
    const required = [payload.brand, payload.model, payload.firstName, payload.lastName, payload.phone, payload.email];
    if (required.some((value) => !value?.trim())) return Response.json({ error: "Zorunlu alanları doldurun." }, { status: 400 });
    const result = await createValuationRequest(payload as ValuationRequest);
    return Response.json(result, { status: 201 });
  } catch {
    return Response.json({ error: "Talep oluşturulamadı." }, { status: 500 });
  }
}
