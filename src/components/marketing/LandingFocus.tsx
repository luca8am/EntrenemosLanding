import Image from "next/image";
import type { FocusSection } from "@/lib/marketing/landing-types";

interface Props {
  section: FocusSection;
}

const tools = [
  { name: "Planillas", purpose: "Rutinas", icon: "M4 4h16v16H4zM4 9h16M4 14h16M9 4v16" },
  { name: "WhatsApp", purpose: "Consultas", icon: "M4 5h16v12H9l-5 3zM8 9h8M8 13h5" },
  { name: "Notas", purpose: "Pesos y repeticiones", icon: "M5 3h10l4 4v14H5zM15 3v5h4M9 12h6M9 16h4" },
  { name: "Galería", purpose: "Fotos de progreso", icon: "M3 4h18v16H3zM3 16l6-6 4 4 3-3 5 5M16 8h.01" },
  { name: "Calendario", purpose: "Seguimiento", icon: "M4 5h16v16H4zM8 3v4M16 3v4M4 10h16M8 14h2M14 14h2M8 17h2" },
];

const capabilities = ["Planificar", "Entrenar", "Registrar", "Progresar"];

export function LandingFocus({ section }: Props) {
  return (
    <section
      className="section landing-focus"
      id="enfoque"
      aria-labelledby="focus-title"
    >
      <header className="focus-heading">
        <span className="eyebrow">{section.eyebrow}</span>
        <h2 id="focus-title">{section.title}</h2>
        <p>{section.description}</p>
      </header>

      <div className="focus-flow">
        <article className="focus-fragmented reveal" aria-labelledby="fragmented-title">
          <div className="focus-panel-heading">
            <span className="focus-state-label">Proceso fragmentado</span>
            <h3 id="fragmented-title">Para cada acción usás una app diferente.</h3>
          </div>

          <ul className="focus-tool-list" aria-label="Herramientas separadas">
            {tools.map((tool) => (
              <li key={tool.name}>
                <span className="focus-tool-glyph" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d={tool.icon} /></svg>
                </span>
                <span>
                  <strong>{tool.name}</strong>
                  <small>{tool.purpose}</small>
                </span>
              </li>
            ))}
          </ul>

          <div className="focus-roles">
            <div>
              <span>Entrenador</span>
              <p>Planifica, envía, responde y revisa.</p>
            </div>
            <div>
              <span>Atleta</span>
              <p>Recibe, entrena, registra y comparte.</p>
            </div>
          </div>
        </article>

        <div className="focus-convergence" aria-hidden="true">
          <span /><span /><span /><span /><span />
          <i />
        </div>

        <article className="focus-connected reveal" aria-labelledby="connected-title">
          <div className="focus-product-mark">
            <Image src="/brand/logo-primary.webp" alt="" width={96} height={96} sizes="96px" />
            <strong>Entrenemos</strong>
          </div>

          <div className="focus-solution-copy">
            <h3 id="connected-title">{section.solutionTitle}</h3>
            <p>{section.solutionDescription}</p>
          </div>

          <div className="focus-path">
            <svg className="focus-path__route" viewBox="0 0 1000 208" preserveAspectRatio="none" aria-hidden="true">
              <path className="focus-path__line" d="M250 26H750Q940 26 940 88Q940 150 750 150H250" />
              <path className="focus-path__arrows" d="m488 20 12 6-12 6m24 112-12 6 12 6" />
            </svg>
            <ol className="focus-capabilities" aria-label="Proceso conectado">
              {capabilities.map((capability, index) => (
                <li key={capability}>
                  <span aria-hidden="true">{index + 1}</span>
                  <strong>{capability}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="focus-shared-process">
            <span>Entrenador</span>
            <i aria-hidden="true" />
            <strong>Proceso compartido</strong>
            <i aria-hidden="true" />
            <span>Atleta</span>
          </div>
        </article>
      </div>

      <footer className="focus-manifesto reveal">
        <div className="focus-manifesto-copy">
          <div className="focus-manifesto-topline">
            <p className="focus-manifesto-sequence">
              <span>{section.platformClaim}.</span>
              <span>{section.protagonistsClaim}.</span>
              <span>Un mismo objetivo.</span>
            </p>

            <p className="focus-manifesto-progress">{section.progressClaim}</p>
          </div>

          <div className="focus-manifesto-positioning">
            <p className="focus-manifesto-identity">
              Esto es <strong>{section.manifestoBrand}</strong>
            </p>

            <p className="focus-manifesto-definition">
              {section.manifestoLead} <strong>{section.trainersLabel}</strong> y <strong>{section.athletesLabel}</strong>.
            </p>
          </div>
        </div>

        <div className="focus-manifesto-signature" aria-label="Entrenemos">
          <Image src="/brand/logo-primary.webp" alt="" width={96} height={96} sizes="96px" />
          <span>Entrenemos</span>
        </div>
      </footer>
    </section>
  );
}
