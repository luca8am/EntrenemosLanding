# Brief inicial de la landing

## Objetivo

Presentar Entrenemos con claridad, generar interés y conducir a una acción concreta: comenzar, iniciar sesión, descargar la app o solicitar acceso. El CTA definitivo todavía debe definirse.

## Propuesta de estructura

1. Header con marca, navegación Enfoque / Ecosistema / Visión y acceso al login.
2. Hero con propuesta de valor y demo interactiva del registro de entrenamiento.
3. Enfoque: fragmentación actual, conexión del proceso y manifiesto de marca.
4. Ecosistema: relación entre la experiencia mobile del atleta y la plataforma web del entrenador.
5. Visión: declaración de producto y circuito compartido entre entrenador y atleta.
6. Planes para entrenadores: tarjeta expandible con prueba gratuita y capacidades.
7. Footer compacto con acceso social, navegación, descargas, soporte y enlaces legales.

Las secciones anteriores de problema y solución quedaron unificadas en `#enfoque`. Los planes forman parte de la arquitectura actual mediante `#planes-entrenadores`.

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

## Recorrido del ecosistema

La sección `#ecosistema` explica la continuidad entre la plataforma web del entrenador y la app del atleta mediante cinco momentos: planificar, entrenar, registrar, evaluar y continuar.

- Planificar muestra la creación de una plantilla y la selección de ejercicios desde la web.
- Entrenar presenta la rutina organizada por días en la app.
- Registrar muestra series, peso, repeticiones y RIR durante una sesión.
- Evaluar utiliza el resumen posterior de dificultad, ánimo y cansancio. Estas respuestas se presentan como parte del seguimiento personal del atleta y no se afirma que se compartan con el entrenador.
- Continuar muestra el historial mensual y diario de actividad.

En escritorio el recorrido es horizontal. En celular se transforma en una secuencia vertical manteniendo el mismo orden semántico. Los colores diferencian entrenador, atleta e información compartida, pero cada rol también se identifica mediante texto visible.

Las capturas aprobadas viven en `public/product/ecosystem/`. Se muestran mediante recortes CSS no destructivos para ocultar barras del sistema, navegación y avatares; los originales se conservan completos.

## Visión

La sección `#vision` posiciona a Entrenemos como infraestructura para el trabajo compartido. El contenido superior mantiene una composición editorial asimétrica y el cierre visual utiliza un circuito vectorial de continuidad: entrenador y atleta tienen el mismo peso, Entrenemos organiza el contexto compartido y los nodos representan planificación, comunicación, registro y seguimiento.

El recurso es complementario, funciona sin JavaScript, no depende solamente del color y se transforma en un recorrido vertical en pantallas pequeñas. No debe volver al esquema de tres tarjetas ni a una onda decorativa sin significado.

## Planes para entrenadores

La tarjeta `#planes-entrenadores` se muestra cerrada al cargar y revela su contenido mediante un botón accesible con `aria-expanded` y `aria-controls`.

- Prueba gratuita: 15 días, hasta 5 alumnos y acceso a todas las funciones.
- Coach: hasta 15 alumnos.
- Plus: hasta 25 alumnos.
- Pro: hasta 50 alumnos.

Los tres planes pagos incluyen las mismas funciones; solamente cambia la cantidad máxima de alumnos. No se muestran precios, checkout ni botones de contratación hasta que existan definiciones y destinos reales.

## Footer y destinos públicos

El cierre es un único footer compacto: franja social, marca/contacto, navegación, descargas e información legal. No utiliza watermark, alturas basadas en viewport ni navegación horizontal desplazable.

- Instagram: `https://www.instagram.com/entrenemos.8am/`
- App Store: `https://apps.apple.com/app/entrenemos/id6782174564`
- Google Play: `https://play.google.com/store/apps/details?id=com.entrenemos.app`
- Privacidad: `https://www.8am-dev.com/entrenemos/privacy`
- Términos: `https://www.8am-dev.com/entrenemos/terms`
- Soporte: `soporte@entrenemos.app`, con enlace y acción para copiar.

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
- Destino definitivo del CTA principal del hero.
- Verificación periódica de disponibilidad de las URLs de las tiendas.
- Precios, medios de pago, checkout y flujo real para iniciar la prueba gratuita.
- Capturas aprobadas y datos que deban ocultarse.
- Testimonios, métricas y logos de clientes reales.
- Dominio final y relación entre landing, login y aplicación web.
- Necesidad y alcance de una política de cookies según las integraciones futuras.
- Framework, hosting, CMS, formularios y analítica.

## Definición mínima de terminado

- Mensaje comprensible en los primeros segundos.
- CTA verificable de punta a punta.
- Contenido real, sin placeholders ni claims inventados.
- Diseño coherente con los tokens documentados.
- Correcta experiencia mobile, tablet y desktop.
- Sin errores de consola, enlaces rotos ni saltos de layout visibles.
- SEO técnico, accesibilidad y rendimiento revisados.

