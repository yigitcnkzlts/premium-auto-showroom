import { desc } from "drizzle-orm";
import { valuationRequests } from "@/db/schema";

export async function GET() {
  try {
    const { getDb } = await import("@/db");
    const requests = await getDb().select().from(valuationRequests).orderBy(desc(valuationRequests.createdAt), desc(valuationRequests.id));
    return Response.json({ requests });
  } catch {
    return Response.json({ error: "Değerleme talepleri şu an alınamıyor." }, { status: 500 });
  }
}