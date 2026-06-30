import React from "react";
import type { PlansSection } from "@/lib/marketing/landing-types";

interface Props {
  section: PlansSection;
}

export function LandingPlans({ section }: Props) {
  return (
    <section className="section" id="planes" aria-labelledby="plans-title">
      <div className="section-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="plans-title">{section.title}</h2>
        <p>{section.description}</p>
      </div>

      <div className="pricing-grid">
        {section.plans.map((plan, index) => (
          <article
            key={plan.name}
            className={[
              "card",
              "pricing-card",
              "reveal",
              "glow-card",
              plan.highlight ? "highlight" : "",
              plan.isContact ? "pricing-contact" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ "--d": `${index * 80}ms` } as React.CSSProperties}
          >
            <div className="card-body pricing-body">
              <div className="pricing-top">
                <span className="pricing-name">{plan.name}</span>
                <span className="pricing-price">{plan.price}</span>
              </div>
              <p className="pricing-subtitle">{plan.subtitle}</p>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                className={[
                  "button",
                  "pricing-btn",
                  plan.highlight ? "button-primary" : "button-secondary",
                ].join(" ")}
                href={plan.actionHref}
              >
                {plan.actionLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
