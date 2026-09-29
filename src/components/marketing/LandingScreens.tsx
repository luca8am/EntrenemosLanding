import type { ScreensSection } from "@/lib/marketing/landing-types";
import { EcosystemCarousel } from "./EcosystemCarousel";

interface Props {
  section: ScreensSection;
}

export function LandingScreens({ section }: Props) {
  return (
    <section className="section ecosystem" id="ecosistema" aria-labelledby="screens-title">
      <header className="section-heading ecosystem-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="screens-title">{section.title}</h2>
        <p>{section.description}</p>
      </header>

      <EcosystemCarousel slides={section.slides} independentNote={section.independentNote} />
    </section>
  );
}
