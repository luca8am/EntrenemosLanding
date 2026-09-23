import type { LandingHeroSection } from "@/lib/marketing/landing-types";
import { TrainingDemo, TrainingDemoTrigger } from "./TrainingDemo";

interface Props {
  section: LandingHeroSection;
}

export function LandingHero({ section }: Props) {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{section.title}</h1>
        <p className="hero-lede">{section.description}</p>

        <div className="hero-actions">
          <TrainingDemoTrigger label={section.primaryAction.label} />
        </div>
      </div>

      <div className="hero-visual">
        <TrainingDemo />
      </div>
    </section>
  );
}
