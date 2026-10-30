export type PricingCurrency = "ARS" | "USD";

export const trainerPlans = [
  { name: "Coach", capacity: "Hasta 15 alumnos", segments: 3, prices: { ARS: 50000, USD: 30 } },
  { name: "Plus", capacity: "Hasta 30 alumnos", segments: 6, prices: { ARS: 80000, USD: 50 } },
  { name: "Pro", capacity: "Hasta 50 alumnos", segments: 10, prices: { ARS: 125000, USD: 80 } },
] as const;

export function currencyForCountry(country: string | null): PricingCurrency {
  return country?.trim().toUpperCase() === "AR" ? "ARS" : "USD";
}

const priceFormatter = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });

export function formatPlanPrice(amount: number, currency: PricingCurrency): string {
  return `${currency === "ARS" ? "$" : "USD "}${priceFormatter.format(amount)}`;
}
