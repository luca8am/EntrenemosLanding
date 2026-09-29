import { ButtonLink } from "@/components/ui/Button";
import { Surface } from "@/components/ui/Surface";

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
      <Surface className="panel final-cta glow-card">
        <div>
          <span className="eyebrow">{section.eyebrow}</span>
          <h2 id="final-cta-title">{section.title}</h2>
          <p>{section.description}</p>
        </div>

        <div className="final-cta-actions">
          <ButtonLink href={section.primaryAction.href}>
            {section.primaryAction.label}
          </ButtonLink>
          <ButtonLink variant="secondary" href={section.secondaryAction.href}>
            {section.secondaryAction.label}
          </ButtonLink>
        </div>
      </Surface>
    </section>
  );
}
