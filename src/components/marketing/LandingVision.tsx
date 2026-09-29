import Image from "next/image";

export function LandingVision() {
  return (
    <section
      className="section landing-anchor vision-system"
      id="vision"
      aria-labelledby="vision-title"
    >
      <div className="vision-system__grid" aria-hidden="true" />

      <header className="vision-system__header">
        <span>Nuestra visión</span>
        <span>Entrenemos / Sistema operativo</span>
      </header>

      <div className="vision-system__statement">
        <h2 id="vision-title">
          <span>Tecnología para evolucionar.</span>
          <span>
            Cuando el trabajo se vuelve más eficaz, el <strong>progreso</strong> es
            inevitable.
          </span>
        </h2>

        <p>
          Cada entrenador construye una forma de acompañar. Cada atleta, una
          trayectoria. Entrenemos es el puente que hace posible este camino y
          permite que ambos aprendan unos de otros.
        </p>
      </div>

      <div
        className="vision-bridge"
        role="img"
        aria-label="Entrenemos conecta el criterio del entrenador con la experiencia del atleta y conserva el contexto compartido del proceso."
      >
        <svg
          className="vision-bridge__circuit vision-bridge__circuit--desktop"
          viewBox="0 0 1200 330"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="vision-trainer-signal" x1="0" x2="1">
              <stop offset="0" stopColor="#67e8f9" stopOpacity="0.35" />
              <stop offset="0.5" stopColor="#0d93f2" />
              <stop offset="1" stopColor="#93c5fd" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="vision-athlete-signal" x1="1" x2="0">
              <stop offset="0" stopColor="#93c5fd" stopOpacity="0.35" />
              <stop offset="0.5" stopColor="#0d93f2" />
              <stop offset="1" stopColor="#67e8f9" stopOpacity="0.8" />
            </linearGradient>
            <marker id="vision-arrow-forward" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#72d8fb" />
            </marker>
            <marker id="vision-arrow-back" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#8dbcf8" />
            </marker>
          </defs>
          <path className="vision-bridge__rail" d="M148 164 H1052" />
          <path className="vision-bridge__track vision-bridge__track--trainer" d="M96 176 C278 42 430 72 600 154 S914 278 1104 166" markerEnd="url(#vision-arrow-forward)" pathLength="1" />
          <path className="vision-bridge__track vision-bridge__track--athlete" d="M1104 194 C920 62 770 90 600 174 S286 298 96 188" markerEnd="url(#vision-arrow-back)" pathLength="1" />
          <path className="vision-bridge__direction vision-bridge__direction--forward" d="M492 112 C532 98 566 108 590 132" markerEnd="url(#vision-arrow-forward)" />
          <path className="vision-bridge__direction vision-bridge__direction--back" d="M708 220 C668 234 634 222 610 198" markerEnd="url(#vision-arrow-back)" />
          <g className="vision-bridge__ticks">
            <path d="M250 154v20 M322 154v20 M878 154v20 M950 154v20" />
          </g>
        </svg>

        <svg
          className="vision-bridge__circuit vision-bridge__circuit--mobile"
          viewBox="0 0 320 760"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="vision-bridge__rail" d="M160 46 V714" />
          <path className="vision-bridge__track vision-bridge__track--trainer" d="M142 52 C54 174 82 282 154 378 S248 590 166 708" pathLength="1" />
          <path className="vision-bridge__track vision-bridge__track--athlete" d="M178 708 C266 586 238 478 166 382 S72 170 154 52" pathLength="1" />
          <path className="vision-bridge__direction vision-bridge__direction--forward" d="M112 310 C92 340 104 366 138 382" />
          <path className="vision-bridge__direction vision-bridge__direction--back" d="M208 452 C228 422 216 396 182 380" />
        </svg>

        <div className="vision-bridge__actor vision-bridge__actor--trainer">
          <span className="vision-bridge__actor-symbol" aria-hidden="true">
            <svg viewBox="0 0 32 32"><path d="M9 5.5h14a2 2 0 0 1 2 2v19H7v-19a2 2 0 0 1 2-2Z" /><path d="M12 3.5h8v4h-8zM11 13h10M11 18h6M19.5 20.5l2 2 4-5" /></svg>
          </span>
          <span><strong>Entrenador</strong><small>Criterio + acompañamiento</small></span>
        </div>

        <div className="vision-bridge__signal vision-bridge__signal--plan">
          <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3.5h10v17H7zM9.5 8h5M9.5 12h5M9.5 16h3" /></svg></span>
          <small>Planificación</small>
        </div>

        <div className="vision-bridge__signal vision-bridge__signal--communication">
          <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5h16v11H9l-5 3v-14ZM8 10h8M8 13h5" /></svg></span>
          <small>Comunicación</small>
        </div>

        <div className="vision-bridge__core">
          <span className="vision-bridge__core-rings" aria-hidden="true">
            <span className="vision-bridge__core-orbit" />
            <Image
              src="/brand/logo-primary.png"
              alt=""
              width={58}
              height={58}
              sizes="58px"
              priority={false}
            />
          </span>
          <strong>Entrenemos</strong>
          <small>Contexto compartido</small>
        </div>

        <div className="vision-bridge__signal vision-bridge__signal--record">
          <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4.5h14v15H5zM8 8h8M8 12h3M14 12h2M8 16h8" /></svg></span>
          <small>Registro</small>
        </div>

        <div className="vision-bridge__signal vision-bridge__signal--tracking">
          <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 18.5 9 13l4 3 7-9M16 7h4v4" /></svg></span>
          <small>Seguimiento</small>
        </div>

        <div className="vision-bridge__actor vision-bridge__actor--athlete">
          <span className="vision-bridge__actor-symbol" aria-hidden="true">
            <svg viewBox="0 0 32 32"><path d="M7 24.5h18M9 20l4-5 4 3 6-8M19 10h4v4" /><circle cx="9" cy="20" r="2" /><circle cx="23" cy="10" r="2" /></svg>
          </span>
          <span><strong>Atleta</strong><small>Acción + experiencia</small></span>
        </div>
      </div>

    </section>
  );
}
