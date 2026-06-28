import React from "react";
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
        <article className="panel showcase reveal">
          <span className="card-tag">{section.mobileTitle}</span>
          <h3>{section.mobileDescription}</h3>

          <div className="phone-frame">
            <div className="mock-screen">
              <div className="ui">
                <div className="ui-top">
                  <span className="ui-logo" />
                  <span className="ui-streak">🔥 12 días</span>
                </div>
                <div className="ui-hero">
                  <span className="tag">JUEVES</span>
                  <div className="big">Pecho y Tríceps</div>
                  <div className="sub">Push Pull Legs · 6 ejercicios</div>
                  <div className="ui-bars">
                    <i className="on" />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="ui-cta">Empezar entreno</div>
                </div>
                <div className="ui-row">
                  <span className="dot" />
                  <span className="ln"><b /><s /></span>
                  <span className="chk" />
                </div>
                <div className="ui-row">
                  <span className="dot" />
                  <span className="ln"><b /><s /></span>
                  <span className="chk" />
                </div>
                <div className="ui-row">
                  <span className="dot" />
                  <span className="ln"><b /><s /></span>
                  <span className="chk" style={{ background: "rgba(255,255,255,.04)", borderColor: "var(--border)" }} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="panel showcase reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
          <span className="card-tag">{section.webTitle}</span>
          <h3>{section.webDescription}</h3>

          <div className="desktop-frame">
            <div className="mock-screen">
              <div className="dash">
                <div className="dash-side">
                  <span className="av" />
                  <i className="act" />
                  <i /><i /><i />
                </div>
                <div className="dash-main">
                  <div className="dash-head">
                    <b />
                    <span className="pill">12 atletas</span>
                  </div>
                  <div className="dash-stats">
                    <div className="accent"><b>148</b><span>Sesiones</span></div>
                    <div><b>92%</b><span>Adherencia</span></div>
                    <div><b>1.2k</b><span>Ton totales</span></div>
                  </div>
                  <div className="dash-list">
                    <div className="ui-row"><span className="dot" /><span className="ln"><b /><s /></span></div>
                    <div className="ui-row"><span className="dot" /><span className="ln"><b /><s /></span></div>
                  </div>
                </div>
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
