import type { ValuationRequest } from "@/types/valuation";

export async function createValuationRequest(payload: ValuationRequest) {
  // This boundary is ready for Drizzle/Supabase persistence when credentials are configured.
  return { id: `valuation-${Date.now()}`, status: "received", payload, createdAt: new Date().toISOString() };
}
