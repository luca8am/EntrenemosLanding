"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { formatPlanPrice, trainerPlans, type PricingCurrency } from "@/lib/marketing/pricing";
import { SupportCopyButton } from "./SupportCopyButton";

interface Props {
  section: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryAction: { label: string; href: string };
  };
}

export function LandingCta({ section }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<PricingCurrency | null>(null);
  const currency = selectedCurrency ?? "USD";
  const detailsId = "trainer-plans-details";

  useEffect(() => {
    const controller = new AbortController();

    async function detectCurrency() {
      try {
        const response = await fetch("/api/pricing-region", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) return;

        const data: { currency?: unknown } = await response.json();
        const detectedCurrency = data.currency;
        if (!controller.signal.aborted && (detectedCurrency === "ARS" || detectedCurrency === "USD")) {
          // A manual selection takes priority even if detection finishes later.
          setSelectedCurrency((current) => current ?? detectedCurrency);
        }
      } catch {
        // Keep USD and the manual selector available when detection fails.
      }
    }

    void detectCurrency();
    return () => controller.abort();
  }, []);

  return (
    <section className="section" id="planes-entrenadores" aria-labelledby="final-cta-title">
      <div className="plans-cta" data-expanded={isExpanded}>
        <div className="plans-cta__summary">
          <div className="plans-cta__copy">
            <span className="eyebrow">{section.eyebrow}</span>
            <h2 id="final-cta-title">{section.title}</h2>
            <p>{section.description}</p>
          </div>

          <div className="plans-cta__preview" aria-label="Capacidad de gestión: de 5 a 50 alumnos">
            <span>Capacidad de gestión</span>
            <div aria-hidden="true">
              <strong>5</strong><i />
              <strong>15</strong><i />
              <strong>30</strong><i />
              <strong>50</strong>
            </div>
          </div>

          <div className="plans-cta__actions">
            <Button
              className="plans-cta__toggle"
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              onClick={() => setIsExpanded((current) => !current)}
            >
              <span>{isExpanded ? "Ocultar planes" : "Ver planes"}</span>
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </Button>
          </div>
        </div>

        <div
          className="plans-cta__expansion"
          id={detailsId}
          aria-hidden={!isExpanded}
          inert={!isExpanded}
        >
          <div className="plans-cta__expansion-inner">
            <div className="plans-cta__expanded-heading">
              <h3>Una sola experiencia. Tres capacidades.</h3>
              <p>
                Todos los planes incluyen las mismas funciones de Entrenemos. Lo
                único que cambia es la cantidad de alumnos que podés gestionar.
              </p>
            </div>

            <article className="plans-cta__trial">
              <div>
                <span>Prueba gratuita</span>
                <h3>30 días para probar Entrenemos en tu trabajo real.</h3>
              </div>
              <ul>
                <li>Hasta 5 alumnos</li>
                <li>Acceso a todas las funciones</li>
                <li>Durante 30 días</li>
              </ul>
            </article>

            <div className="plans-cta__currency">
              <p>Precios en pesos para Argentina y en dólares para otros países.</p>
              <label htmlFor="plans-currency">
                Moneda
                <select
                  id="plans-currency"
                  value={currency}
                  onChange={(event) => setSelectedCurrency(event.target.value as PricingCurrency)}
                >
                  <option value="ARS">Pesos argentinos (ARS)</option>
                  <option value="USD">Dólares (USD)</option>
                </select>
              </label>
            </div>

            <ul className="plans-cta__plans" aria-label="Planes para entrenadores" aria-live="polite" aria-atomic="true">
              {trainerPlans.map((plan) => (
                <li key={plan.name}>
                  <article className="plans-cta__plan">
                    <span>Plan</span>
                    <h3>{plan.name}</h3>
                    <p className="plans-cta__price">
                      <strong>{formatPlanPrice(plan.prices[currency], currency)}</strong>
                    </p>
                    <strong>{plan.capacity}</strong>
                    <div className="plans-cta__segments" aria-hidden="true">
                      {Array.from({ length: plan.segments }, (_, index) => (
                        <i key={index} />
                      ))}
                    </div>
                    <p>Todas las funciones de Entrenemos.</p>
                  </article>
                </li>
              ))}
            </ul>

            <div className="plans-cta__contact">
              <p>¿Querés conversar sobre la capacidad que necesitás?</p>
              <SupportCopyButton email={section.secondaryAction.href.replace(/^mailto:/, "")} label={section.secondaryAction.label} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
