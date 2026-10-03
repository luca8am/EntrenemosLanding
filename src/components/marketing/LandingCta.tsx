"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SupportCopyButton } from "./SupportCopyButton";

interface Props {
  section: {
    eyebrow: string;
    title: string;
    description: string;
    secondaryAction: { label: string; href: string };
  };
}

const plans = [
  { name: "Coach", capacity: "Hasta 15 alumnos", segments: 3 },
  { name: "Plus", capacity: "Hasta 25 alumnos", segments: 5 },
  { name: "Pro", capacity: "Hasta 50 alumnos", segments: 10 },
] as const;

export function LandingCta({ section }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = "trainer-plans-details";

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
              <strong>25</strong><i />
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
                <h3>15 días para probar Entrenemos en tu trabajo real.</h3>
              </div>
              <ul>
                <li>Hasta 5 alumnos</li>
                <li>Acceso a todas las funciones</li>
                <li>Durante 15 días</li>
              </ul>
            </article>

            <ul className="plans-cta__plans" aria-label="Planes para entrenadores">
              {plans.map((plan) => (
                <li key={plan.name}>
                  <article className="plans-cta__plan">
                    <span>Plan</span>
                    <h3>{plan.name}</h3>
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
