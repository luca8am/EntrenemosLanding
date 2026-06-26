import Link from "next/link";

export default function LoginPlaceholderPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="panel final-cta">
          <div>
            <span className="eyebrow">Acceso</span>
            <h1 style={{ maxWidth: "12ch" }}>Acceso pendiente de integración.</h1>
            <p>
              Este proyecto mantiene el acceso separado a propósito para poder iterar la
              landing sin acoplarla todavía a la app principal.
            </p>
            <p>
              Cuando se porte a <strong>EntrenemosWeb</strong>, esta ruta puede redirigir al
              login real o reemplazarse directamente por la pantalla existente.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link className="button button-primary" href="/">
              Volver a la landing
            </Link>
            <a className="button button-secondary" href="mailto:soporte@entrenemos.app">
              soporte@entrenemos.app
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
