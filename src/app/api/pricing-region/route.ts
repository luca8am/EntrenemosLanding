import { currencyForCountry } from "@/lib/marketing/pricing";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  // Vercel supplies the visitor's country from their IP in production.
  const currency = currencyForCountry(request.headers.get("x-vercel-ip-country"));

  return Response.json({ currency }, {
    headers: { "Cache-Control": "private, no-store" },
  });
}
