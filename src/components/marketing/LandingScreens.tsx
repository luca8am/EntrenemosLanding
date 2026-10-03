import type { LandingLink, ScreensSection } from "@/lib/marketing/landing-types";
import { EcosystemCarousel } from "./EcosystemCarousel";
import { IndependentTrainingNote } from "./IndependentTrainingNote";

interface Props {
  section: ScreensSection;
  appLinks: LandingLink[];
}

export function LandingScreens({ section, appLinks }: Props) {
  return (
    <section className="section ecosystem" id="ecosistema" aria-labelledby="screens-title">
      <header className="section-heading ecosystem-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="screens-title">{section.title}</h2>
        <p>{section.description}</p>
      </header>

      <EcosystemCarousel slides={section.slides} />
      <IndependentTrainingNote note={section.independentNote} appLinks={appLinks} />
    </section>
  );
}
