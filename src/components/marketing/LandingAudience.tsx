"use client";

import { useState } from "react";
import type { AudienceProfile } from "@/lib/marketing/landing-types";

interface Props {
  section: {
    eyebrow: string;
    title: string;
    description: string;
    profiles: AudienceProfile[];
  };
}

export function LandingAudience({ section }: Props) {
  const [activeProfile, setActiveProfile] = useState<AudienceProfile["id"]>("atleta");
  const current = section.profiles.find((profile) => profile.id === activeProfile) ?? section.profiles[0];

  return (
    <section className="section" id="audiencia" aria-labelledby="audience-title">
      <div className="section-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="audience-title">{section.title}</h2>
        <p>{section.description}</p>
      </div>

      <div className="audience-tabs" role="tablist" aria-label="Seleccionar perfil">
        {section.profiles.map((profile) => (
          <button
            key={profile.id}
            type="button"
            className="audience-tab"
            data-active={profile.id === activeProfile}
            onClick={() => setActiveProfile(profile.id)}
            role="tab"
            aria-selected={profile.id === activeProfile}
          >
            {profile.trigger}
          </button>
        ))}
      </div>

      <article className="panel audience-panel" role="tabpanel">
        <div>
          <span className="audience-kicker">{current.kicker}</span>
          <h3>{current.title}</h3>
          <p>{current.description}</p>
        </div>

        <div className="point-list">
          {current.points.map((point) => (
            <div key={point.title} className="point-card">
              <strong>{point.title}</strong>
              <span>{point.description}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
