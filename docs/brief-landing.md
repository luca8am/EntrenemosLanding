# Brief inicial de la landing

## Objetivo

Presentar Entrenemos con claridad, generar interés y conducir a una acción concreta: comenzar, iniciar sesión, descargar la app o solicitar acceso. El CTA definitivo todavía debe definirse.

## Propuesta de estructura

1. Header con marca, navegación Enfoque / Ecosistema / Visión y acceso al login.
2. Hero con propuesta de valor y demo interactiva del registro de entrenamiento.
3. Enfoque: fragmentación actual, conexión del proceso y manifiesto de marca.
4. Ecosistema: relación entre la experiencia mobile del atleta y la plataforma web del entrenador.
5. Visión: contenedor estructural pendiente de contenido aprobado.
6. CTA final.
7. Footer.

Las secciones anteriores de problema y solución quedaron unificadas en `#enfoque`. Los contenidos de atletas/entrenadores y planes se conservan en código para evaluar su reutilización, pero no forman parte de la navegación ni de la arquitectura principal actual.

## Copy de trabajo

- Título del hero: “La nueva forma de entrenar.”
- Bajada: “Entrenemos conecta tu rutina, cada sesión y tu progreso en una misma app, para que atletas y entrenadores compartan el proceso.”
- CTA del hero: “Probá cómo funciona”.
- Título de Enfoque: “No te disperses al entrenar.”
- Posicionamiento: “Entrenemos. El sistema operativo para entrenadores y atletas.”
- Cierre: “Una plataforma. Dos protagonistas. Un mismo objetivo: progresar.”

El header no muestra el subtítulo “Entrenamiento conectado”.

## Demo interactiva del hero

La demo se implementa en `TrainingDemo.tsx` con HTML, CSS y estado local, sin autenticación, API, cookies ni almacenamiento persistente. Usa datos de ejemplo y permite:

1. Ver la rutina “Día 1 — Tren superior”.
2. Comenzar el entrenamiento.
3. Abrir Press de banca.
4. Ingresar peso y repeticiones.
5. Completar la primera serie y ver el progreso.
6. Reiniciar la demostración.

Debe seguir siendo operable con mouse, teclado y pantalla táctil, tener labels visibles y `aria-live`, y respetar `prefers-reduced-motion`.

## Requisitos funcionales iniciales

- Responsive desde 320 px.
- Navegación por teclado y contraste WCAG AA.
- Imágenes optimizadas y carga diferida fuera del hero.
- Metadata SEO y Open Graph en español (`es_AR`).
- URL pública prevista: `https://www.entrenemos.app`.
- Email documentado: `soporte@entrenemos.app`.
- Analítica solo después de definir proveedor y consentimiento.
- Lighthouse como control de calidad, apuntando a 90+ en rendimiento, accesibilidad, buenas prácticas y SEO.

## Decisiones pendientes

- Audiencia primaria de la primera versión: atletas, entrenadores o ambas.
- CTA principal y destino real.
- Estado de disponibilidad en tiendas y URLs verificadas.
- Modelo comercial, precios y eventual lista de espera.
- Capturas aprobadas y datos que deban ocultarse.
- Testimonios, métricas y logos de clientes reales.
- Dominio final y relación entre landing, login y aplicación web.
- Textos legales, privacidad, términos y cookies.
- Framework, hosting, CMS, formularios y analítica.

## Definición mínima de terminado

- Mensaje comprensible en los primeros segundos.
- CTA verificable de punta a punta.
- Contenido real, sin placeholders ni claims inventados.
- Diseño coherente con los tokens documentados.
- Correcta experiencia mobile, tablet y desktop.
- Sin errores de consola, enlaces rotos ni saltos de layout visibles.
- SEO técnico, accesibilidad y rendimiento revisados.

