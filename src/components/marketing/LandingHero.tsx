import Link from "next/link";
import type { LandingHeroSection } from "@/lib/marketing/landing-types";

interface Props {
  section: LandingHeroSection;
}

export function LandingHero({ section }: Props) {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div>
        <span className="eyebrow">{section.eyebrow}</span>
        <h1 id="hero-title">
          Todo tu entrenamiento. <span className="brand-accent">Un mismo equipo.</span>
        </h1>
        <p className="hero-lede">{section.description}</p>

        <div className="hero-actions">
          <Link className="button button-primary" href={section.primaryAction.href}>
            {section.primaryAction.label}
          </Link>
          <Link className="button button-secondary" href={section.secondaryAction.href}>
            {section.secondaryAction.label}
          </Link>
        </div>

        <div className="hero-notes" aria-label="Puntos clave">
          {section.notes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Vista conceptual del ecosistema Entrenemos">
        <div className="halo halo-a" />
        <div className="halo halo-b" />
        <div className="hero-stage">
          <div className="hero-main-card">
            <span className="hero-badge">{section.statusLabel}</span>
            <img src="/brand/logo-primary.png" alt="" />
            <div className="hero-status">
              <span className="muted">Estado del proceso</span>
              <strong>{section.statusValue}</strong>
            </div>
          </div>

          {section.floatingCards.map((card, index) => (
            <div
              key={card.label}
              className={`floating-card ${index === 0 ? "one" : index === 1 ? "two" : "three"}`}
            >
              <span className="muted">{card.label}</span>
              <strong>{card.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
