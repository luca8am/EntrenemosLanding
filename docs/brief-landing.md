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

En “Proceso fragmentado”, las cinco herramientas se presentan en una lista de filas completas, con iconos vectoriales diferentes: planilla con celdas, conversación, nota con esquina doblada, galería y calendario. El proceso conectado utiliza una lista ordenada de cuatro estaciones numeradas de 52 px, sin tarjetas individuales. En escritorio el camino recorre dos filas: Planificar → Entrenar arriba, gira hacia Registrar y termina en Progresar abajo. Las flechas indican el orden y la última estación se destaca con el primario de marca. En celular el camino es vertical. El cierre “Proceso compartido” queda 24 px debajo del recorrido.

## Copy de trabajo

- Título del hero: “La nueva forma de entrenar.”
- Bajada: “Entrenemos conecta tu rutina, cada sesión y tu progreso en una misma app, para que atletas y entrenadores compartan el proceso.”
- CTA del hero: “Probá cómo funciona”.
- Título de Enfoque: “No te disperses al entrenar.”
- Posicionamiento: “Entrenemos. El sistema operativo para entrenadores y atletas.”
- Cierre: “Una plataforma. Dos protagonistas. Un mismo objetivo: progresar.”

El header no muestra el subtítulo “Entrenamiento conectado”.

El acceso del header dice “Ingresar como entrenador” y apunta a `https://entrenemos.app/login`.

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

El cierre “¿Entrenás por tu cuenta?” se presenta como un bloque destacado con título, bajada y botones de descarga de 68 × 68 px, usando únicamente los iconos de Apple y Google Play como contenido visible. Los destinos se reutilizan desde los enlaces de tiendas del footer. En celular los botones se ubican debajo del texto; en escritorio, a la derecha. El bloque tiene entre 36 y 56 px de separación superior y la transición hacia Visión se reduce a entre 40 y 72 px.

La detección local del dispositivo destaca App Store en iPhone/iPad y Google Play en Android; la otra tienda se atenúa mediante un filtro gris suave. En escritorio, dispositivos no identificados o sin JavaScript, ambas mantienen igual énfasis. La detección no altera los destinos ni oculta opciones. Los enlaces incluyen nombres accesibles, foco visible y soporte para movimiento reducido. Los iconos se comparten con el footer.

## Visión

La sección `#vision` posiciona a Entrenemos como infraestructura para el trabajo compartido. El contenido superior mantiene una composición editorial asimétrica y el cierre visual utiliza un circuito vectorial de continuidad: entrenador y atleta tienen el mismo peso, Entrenemos organiza el contexto compartido y los nodos representan planificación, comunicación, registro y seguimiento.

El recurso es complementario, funciona sin JavaScript, no depende solamente del color y se transforma en un recorrido vertical en pantallas pequeñas. No debe volver al esquema de tres tarjetas ni a una onda decorativa sin significado.

Las dos curvas del infinito son simétricas y comparten el centro exacto de sus respectivos SVG. El símbolo de Entrenemos se centra sobre esa intersección de manera independiente de sus textos, ubicados debajo. La variante mobile incluye sus propios gradientes. Las etiquetas tienen fondos oscuros para impedir que las líneas interfieran con su lectura.

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

Los botones de descarga muestran el símbolo de Apple y el triángulo multicolor de Google Play, con “Descargar desde” y el nombre de la tienda, siguiendo la referencia de `/athlete-only` de EntrenemosWeb. Conservan foco visible y una altura mínima de 56 px.

Las entradas del hero y la confirmación de la demo duran entre 220 y 380 ms. Los botones de tiendas y etapas tienen feedback breve de hover y pulsación. Estas animaciones respetan `prefers-reduced-motion` y no son continuas.

El correo y su botón para copiar viven en la barra inferior, después del copyright; en celular se distribuyen en varias líneas. El crédito visible es “Un producto de 8AM”.

En Información, Privacidad y Términos abren en otra pestaña y muestran una flecha a la derecha al hacer hover o recibir foco. Soporte conserva su enlace de correo y suma un botón de copia con icono, sin texto “Copiar”, a su derecha. En pantallas táctiles estos indicadores permanecen visibles. El botón de copia de la barra inferior también usa solo el icono. La confirmación se representa con un check y se anuncia al lector de pantalla; los errores conservan el correo disponible.

El carrusel usa flechas y cinco puntos seleccionables sobre las capturas. Las etapas se identifican con número y nombre junto al texto activo y con etiquetas accesibles en los puntos; se elimina la fila inferior duplicada. El rol aparece a la derecha del número y nombre de la etapa. El marco de imágenes y la reserva de espacio para todos los textos mantienen estables el ancho, la altura y los controles entre etapas. Las imágenes se cargan de forma diferida. Los celulares son más compactos, incluyendo la demo del hero, con adaptación a notebooks de poca altura. En pantallas de más de 980 px de ancho y hasta 850 px de alto, el panel del carrusel parte de 520 px de alto.

El resumen cerrado de planes solo ofrece “Ver planes”, con feedback breve de hover y rotación de la flecha al desplegar. “Escribir a soporte” permanece dentro del contenido abierto y copia el correo; muestra “Mail de soporte copiado.” mediante un toast centrado en la parte inferior, anunciado al lector de pantalla y cerrado automáticamente después de 3,5 segundos. Si la copia falla, se informa el error y el correo disponible.

El footer se renderiza en el servidor; solo el contacto con acción de copiar necesita estado cliente. Las variantes WebP de marca se usan en tamaños pequeños con dimensiones explícitas, conservando los PNG originales. Los errores de la demo se muestran junto a los campos y se asocian con `aria-describedby` y `aria-invalid`.

Las entradas de scroll son una mejora progresiva: sin JavaScript el contenido permanece visible. Se eliminó el seguimiento luminoso heredado, que ya no tenía tarjetas asociadas en la landing actual. El scroll vertical usa colores de marca y restaura la apariencia del sistema en modo de colores forzados.

## Requisitos funcionales iniciales

- Responsive desde 320 px.
- Navegación por teclado y contraste WCAG AA.
- Imágenes optimizadas y carga diferida fuera del hero.
- Metadata SEO y Open Graph en español (`es_AR`).
- URL pública definida: `https://landing.entrenemos.app` (proyecto independiente).
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
- Conexión del subdominio aprobado en Vercel y DNS; integración futura de `/landing` en EntrenemosWeb fuera del alcance actual.
- Necesidad y alcance de una política de cookies según las integraciones futuras.
- Conexión del dominio al proyecto existente en Vercel, CMS, formularios y analítica.

## Definición mínima de terminado

### SEO implementado

- Un H1 en la landing, H2 para las secciones y H3 para contenidos subordinados. El texto de la demo no se presenta como sección independiente.
- Título y descripción públicos centralizados en `src/lib/marketing/site-config.ts`, con canonical de la home en `https://landing.entrenemos.app/`.
- `robots.txt` permite rastreo y enlaza `sitemap.xml`, que enumera solo la landing. `/login` y `/design-system` llevan `noindex`; no se bloquean por robots para que los buscadores puedan leer esa directiva.
- Datos estructurados WebSite y Organization con nombre, URL, logo, soporte y perfil social documentados. No se agregan reseñas, precios ni métricas.
- Favicon y Apple icon derivados de la marca; imagen social de 1200 × 630 px para Open Graph y Twitter.
- Verificación local de rutas y metadata. La indexación y los resultados de búsqueda requieren publicación y revisión posterior en Search Console.

- Mensaje comprensible en los primeros segundos.
- CTA verificable de punta a punta.
- Contenido real, sin placeholders ni claims inventados.
- Diseño coherente con los tokens documentados.
- Correcta experiencia mobile, tablet y desktop.
- Sin errores de consola, enlaces rotos ni saltos de layout visibles.
- SEO técnico, accesibilidad y rendimiento revisados.

