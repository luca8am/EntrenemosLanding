import Link from "next/link";

interface Props {
  section: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
}

export function LandingCta({ section }: Props) {
  return (
    <section className="section" aria-labelledby="final-cta-title">
      <div className="panel final-cta glow-card">
        <div>
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 id="final-cta-title">{section.title}</h2>
          <p>{section.description}</p>
        </div>

        <div className="final-cta-actions">
          <Link className="button button-primary" href={section.primaryAction.href}>
            {section.primaryAction.label}
          </Link>
          <Link className="button button-secondary" href={section.secondaryAction.href}>
            {section.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
