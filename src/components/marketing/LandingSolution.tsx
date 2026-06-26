import type { LandingCard } from "@/lib/marketing/landing-types";

interface Props {
  section: {
    eyebrow: string;
    title: string;
    description: string;
    cards: LandingCard[];
  };
}

export function LandingSolution({ section }: Props) {
  return (
    <section className="section" id="solucion" aria-labelledby="solution-title">
      <div className="section-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="solution-title">{section.title}</h2>
        <p>{section.description}</p>
      </div>

      <div className="solution-grid">
        {section.cards.map((card, index) => (
          <article
            key={card.title}
            className={[
              "solution-card",
              "card",
              card.tone === "accent" ? "accent" : "",
              index === 0 ? "plan" : index === 1 ? "train" : "progress",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="card-body">
              {card.label ? <span className="card-tag">{card.label}</span> : null}
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
        <div className="solution-node" aria-hidden="true" />
      </div>
    </section>
  );
}
