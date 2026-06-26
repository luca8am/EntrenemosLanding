import type { ScreensSection } from "@/lib/marketing/landing-types";

interface Props {
  section: ScreensSection;
}

export function LandingScreens({ section }: Props) {
  return (
    <section className="section" id="ecosistema" aria-labelledby="screens-title">
      <div className="section-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="screens-title">{section.title}</h2>
        <p>{section.description}</p>
      </div>

      <div className="screens-grid">
        <article className="panel showcase">
          <span className="card-tag">{section.mobileTitle}</span>
          <h3>{section.mobileDescription}</h3>

          <div className="phone-frame">
            <div className="mock-screen">
              <div className="mock-header" />
              <div className="mock-card" />
              <div className="mock-rows">
                <div className="mock-row" />
                <div className="mock-row" />
                <div className="mock-row" />
              </div>
            </div>
          </div>
        </article>

        <article className="panel showcase">
          <span className="card-tag">{section.webTitle}</span>
          <h3>{section.webDescription}</h3>

          <div className="desktop-frame">
            <div className="mock-screen">
              <div className="mock-header" />
              <div className="mock-card" />
              <div className="stats-grid">
                <div className="mock-stat" />
                <div className="mock-stat" />
                <div className="mock-stat" />
                <div className="mock-stat" />
              </div>
            </div>
          </div>

          <div className="feature-list">
            {section.features.map((feature, index) => (
              <div key={feature.title} className="feature-item">
                <div className="feature-bullet">{`0${index + 1}`}</div>
                <div>
                  <strong>{feature.title}</strong>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
