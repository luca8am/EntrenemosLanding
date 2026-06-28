import React from "react";
import type { LandingCard } from "@/lib/marketing/landing-types";

interface Props {
  section: {
    eyebrow: string;
    title: string;
    description: string;
    cards: LandingCard[];
    closing: string;
  };
}

export function LandingProblem({ section }: Props) {
  return (
    <section className="section" id="problema" aria-labelledby="problem-title">
      <div className="section-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="problem-title">{section.title}</h2>
        <p>{section.description}</p>
      </div>

      <div className="grid-3">
        {section.cards.map((card, index) => (
          <article
            key={card.title}
            className="card reveal"
            style={{ "--d": `${index * 90}ms` } as React.CSSProperties}
          >
            <div className="card-body">
              <span className="card-tag">{`0${index + 1}`}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="problem-close">{section.closing}</p>
    </section>
  );
}
