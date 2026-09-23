import type { FocusSection } from "@/lib/marketing/landing-types";

interface Props {
  section: FocusSection;
}

const tools = [
  { name: "Planillas", purpose: "Rutinas", glyph: "sheet" },
  { name: "WhatsApp", purpose: "Consultas", glyph: "message" },
  { name: "Notas", purpose: "Pesos y repeticiones", glyph: "note" },
  { name: "Galería", purpose: "Fotos de progreso", glyph: "gallery" },
  { name: "Calendario", purpose: "Seguimiento", glyph: "calendar" },
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
                <span className={`focus-tool-glyph ${tool.glyph}`} aria-hidden="true" />
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
            <img src="/brand/logo-primary.png" alt="" />
            <strong>Entrenemos</strong>
          </div>

          <div className="focus-solution-copy">
            <h3 id="connected-title">{section.solutionTitle}</h3>
            <p>{section.solutionDescription}</p>
          </div>

          <ul className="focus-capabilities" aria-label="Proceso conectado">
            {capabilities.map((capability, index) => (
              <li key={capability}>
                <span>{index + 1}</span>
                <strong>{capability}</strong>
              </li>
            ))}
          </ul>

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
            <h3 className="focus-manifesto-sequence">
              <span>{section.platformClaim}.</span>
              <span>{section.protagonistsClaim}.</span>
              <span>Un mismo objetivo.</span>
            </h3>

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
          <img src="/brand/logo-primary.png" alt="" />
          <span>Entrenemos</span>
        </div>
      </footer>
    </section>
  );
}
